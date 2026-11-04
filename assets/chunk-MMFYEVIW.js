import"./chunk-KR4ZLU5I.js";var e={id:"N34",cam:[1.1,1.35,6.7],target:[0,.2,0],fov:2.3,floor:-1.72,ring:2.15,poster:2.6,glsl:`
const float PH = 3.5, S = .98, PB = -1.55, HT = PH / 7., T = 4.6, YA = PB + PH + .16, TW = .5;
float gF;

vec3 palette(int i) {
  if (i < 7) return clamp(TIER[i] * 1.35 - .22, 0., 1.);   // tier colours, deepened, T01 \u2026 T07 (nodes, rims)
  if (i < 14) return TIER[i - 7] * 1.65 + .25;      // a tier while the signal passes through it
  if (i == 14) return vec3(1., .88, .58);           // signal
  return vec3(.58, .60, .78);                       // network links and spine
}

/** Signed distance to a square of half-side s in the plane (negative inside). */
float sdSquare(vec2 p, float s) { vec2 d = abs(p) - s; return length(max(d, 0.)) + min(max(d.x, d.y), 0.); }
/** One stratum of the stack, between heights y0 and y1 above its base: a box the same size as every other. */
float stratum(vec3 p, float y0, float y1) {
  return sdBox(p - vec3(0., PB + (y0 + y1) * .5, 0.), vec3(S, (y1 - y0) * .5, S));
}
/** Signal brightness at height y. */
float sig(float y) { return exp(-pow((y - gF) / .15, 2.)); }

/**
 * Tier i's part of the network, folded into the quarter of one of its four nodes: the node, its spoke to
 * the spine, half of each link to its neighbours, and its link up to the next tier (or, from the top tier,
 * to the crown). Each tier is turned TW further than the one below. Returns (distance, material).
 */
vec2 tierNet(vec3 q, float a, float rxz, int i) {
  float fi = float(i);
  float y = PB + (fi + .5) * HT;
  float r = S * .62;
  float af = mod(a - fi * TW + PI / 4., TAU / 4.) - PI / 4.;
  vec3 lp = vec3(rxz * cos(af), q.y, rxz * sin(af));
  vec3 nd = vec3(r, y, 0.);
  vec3 up = vec3(0., YA, 0.);
  if (i < 6) up = vec3(r * cos(TW), y + HT, r * sin(TW));
  float links = min(sdCapsule(lp, vec3(0., y, 0.), nd, .013), sdCapsule(lp, nd, up, .013));
  links = min(links, min(sdCapsule(lp, nd, vec3(r * .5, y, r * .5), .01), sdCapsule(lp, nd, vec3(r * .5, y, -r * .5), .01)));
  bool lit = abs(y - gF) < HT * .5;
  float node = sdSphere(lp - nd, lit ? .095 : .068);
  vec2 res = vec2(node, lit ? 60. + fi : 20. + fi);
  return U(res, vec2(links, sig(lp.y) > .5 ? 74. : 35.));
}

vec2 map(vec3 p) {
  vec3 q = p; q.xz *= rot(.82);
  float bound = sdBox(q - vec3(0., .28, 0.), vec3(1.3, 1.95, 1.3));
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
    float rim = length(vec2(sdSquare(q.xz, S), q.y - PB - y1)) - (lit ? .03 : .016);
    res = U(res, vec2(rim, lit ? 60. + float(i) : 20. + float(i)));
  }
  // The crown node over the stack; it swells and glows brighter as the signal arrives.
  float arrive = exp(-pow((gF - YA) / .25, 2.));
  res = U(res, vec2(sdSphere(q - vec3(0., YA, 0.), .1 + .045 * arrive), 66.));
  if (!gSkipShell) return res;

  // The network inside: the spine, and the nodes and links of the tiers near this height.
  res = U(res, vec2(sdCapsule(q, vec3(0., PB + .05, 0.), vec3(0., YA, 0.), .026), sig(q.y) > .5 ? 74. : 35.));
  float a = atan(q.z, q.x), rxz = length(q.xz);
  for (int k = -1; k <= 1; k++) {
    int i = i0 + k;
    if (i < 0 || i > 6) continue;
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
