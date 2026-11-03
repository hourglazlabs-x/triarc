import"./chunk-KR4ZLU5I.js";var e={id:"N34",cam:[1.1,1.35,6.7],target:[0,.2,0],fov:2.3,floor:-1.72,ring:2.15,poster:2.6,glsl:`
const float PH = 3.5, PR = 1.75, PB = -1.55, HT = PH / 7., T = 4.6, YA = PB + PH - .12;
float gF;

vec3 palette(int i) {
  if (i < 7) return clamp(TIER[i] * 1.35 - .22, 0., 1.);   // tier colours, deepened, T01 \u2026 T07 (nodes, rims)
  if (i < 14) return TIER[i - 7] * 1.65 + .25;      // a tier while the signal passes through it
  if (i == 14) return vec3(1., .88, .58);           // signal
  return vec3(.58, .60, .78);                       // network links and spine
}

float sdTri(vec2 p, float r) {
  const float k = 1.7320508;
  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if (p.x + k * p.y > 0.) p = vec2(p.x - k * p.y, -k * p.x - p.y) / 2.;
  p.x -= clamp(p.x, -2. * r, 0.);
  return -length(p) * sign(p.y);
}
/** One stratum of the three-sided pyramid, between heights y0 and y1 above its base. */
float stratum(vec3 p, float y0, float y1) {
  float y = clamp(p.y - PB, y0, y1);
  float r = PR * (1. - y / PH);
  float side = sdTri(p.xz, r) / sqrt(1. + pow(PR / PH / 1.7320508, 2.));
  return max(side, abs(p.y - PB - (y0 + y1) * .5) - (y1 - y0) * .5);
}
/** Signal brightness at height y. */
float sig(float y) { return exp(-pow((y - gF) / .15, 2.)); }

/**
 * Tier i's part of the network, folded into the sector of one of its three nodes: the node, its spoke
 * to the spine, half of each ring link to its neighbours, and its link up to the next tier (or to the
 * apex). Returns (distance, material).
 */
vec2 tierNet(vec3 q, float a, float rxz, int i) {
  float fi = float(i);
  float y = PB + (fi + .5) * HT;
  float r = PR * (1. - (fi + .5) * HT / PH) * .45;
  float af = mod(a - fi * .9 + PI / 3., TAU / 3.) - PI / 3.;
  vec3 lp = vec3(rxz * cos(af), q.y, rxz * sin(af));
  vec3 nd = vec3(r, y, 0.);
  vec3 up = vec3(0., YA, 0.);
  if (i < 5) { float r2 = PR * (1. - (fi + 1.5) * HT / PH) * .45; up = vec3(r2 * cos(.9), y + HT, r2 * sin(.9)); }
  float links = min(sdCapsule(lp, vec3(0., y, 0.), nd, .013), sdCapsule(lp, nd, up, .013));
  links = min(links, min(sdCapsule(lp, nd, vec3(r * .25, y, r * .433), .01), sdCapsule(lp, nd, vec3(r * .25, y, -r * .433), .01)));
  bool lit = abs(y - gF) < HT * .5;
  float node = sdSphere(lp - nd, lit ? .095 : .068);
  vec2 res = vec2(node, lit ? 60. + fi : 20. + fi);
  return U(res, vec2(links, sig(lp.y) > .5 ? 74. : 35.));
}

vec2 map(vec3 p) {
  vec3 q = p; q.xz *= rot(.3);
  float bound = sdBox(q - vec3(0., .2, 0.), vec3(2.15, 1.85, 2.15));
  if (bound > .3) return vec2(bound, 0.);
  gF = PB + (fract(uTime / T) * 1.25 - .1) * PH;

  // The strata: the one at this height and its neighbours; a stratum brightens while the signal is in it.
  int i0 = int(clamp(floor((q.y - PB) / HT), 0., 6.));
  vec2 res = vec2(1e5, 0.);
  for (int k = -1; k <= 1; k++) {
    int i = i0 + k;
    if (i < 0 || i > 6) continue;
    float y0 = float(i) * HT + .035, y1 = float(i + 1) * HT - .035;
    bool lit = gF > PB + y0 && gF < PB + y1;
    res = U(res, vec2(SHELL(stratum(q, y0, y1)), lit ? 47. + float(i) : 10. + float(i)));
    // A thin rim along the stratum's upper edge, glowing in the tier colour while the signal is in it.
    float r1 = PR * (1. - y1 / PH);
    float rim = length(vec2(sdTri(q.xz, r1) * .96, q.y - PB - y1)) - (lit ? .03 : .016);
    res = U(res, vec2(rim, lit ? 60. + float(i) : 20. + float(i)));
  }
  // The apex node crowns the pyramid; it swells and glows brighter as the signal arrives.
  float arrive = exp(-pow((gF - YA) / .25, 2.));
  res = U(res, vec2(sdSphere(q - vec3(0., YA, 0.), .1 + .045 * arrive), 66.));
  if (!gSkipShell) return res;

  // The network inside: the spine, and the nodes and links of the tiers near this height.
  res = U(res, vec2(sdCapsule(q, vec3(0., PB + .05, 0.), vec3(0., YA, 0.), .026), sig(q.y) > .5 ? 74. : 35.));
  float a = atan(q.z, q.x), rxz = length(q.xz);
  int j0 = min(i0, 5);
  for (int k = -1; k <= 1; k++) {
    int i = j0 + k;
    if (i < 0 || i > 5) continue;
    res = U(res, tierNet(q, a, rxz, i));
  }
  // Network parts two tiers away are at least a quarter of a tier away; never step farther than that.
  res.x = min(res.x, .25);
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 9.5 && m < 16.5 || m > 46.5 && m < 53.5) return .0012 * sin(p.y * 60.);
  return 0.;
}`};export{e as scene};
