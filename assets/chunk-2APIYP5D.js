import"./chunk-KR4ZLU5I.js";var e={id:"N15",cam:[.5,1.35,5.7],target:[0,-.3,0],fov:2.45,floor:-1.75,ring:1.85,poster:4.1,glsl:`
const float T = 6., RD = 1.62, LS = .125;
const vec3 R0 = vec3(0., 0., 1.05), R1 = vec3(-.86, 0., -.2), R2 = vec3(.78, 0., -.45);   // receptors (x, -, z)
float gPh, gDock;

vec3 palette(int i) {
  if (i == 0) return vec3(.16, .74, .76);   // phospholipid heads
  if (i == 1) return vec3(1., .84, .34);    // lipid tails
  if (i == 2) return vec3(.62, .36, .98);   // receptors
  if (i == 3) return vec3(1., .76, .24);    // hormones
  if (i == 4) return vec3(.08, .62, .95);   // signal cascade
  return vec3(1., .80, .40);                // docked hormone, glowing
}

/** Height of the membrane's mid-plane: a gentle dome. */
float mid(vec2 xz) { return -.3 - .05 * dot(xz, xz); }

/** A small hormone molecule: three fused spheres, turned by angle a. */
float hormone(vec3 q, float a) {
  q.xz *= rot(a); q.xy *= rot(a * .7);
  float d = sdSphere(q, .075);
  d = smin(d, sdSphere(q - vec3(.1, .03, 0.), .06), .03);
  return smin(d, sdSphere(q - vec3(-.06, .07, .05), .055), .03);
}

/** Receptor at membrane-local position c: seven helices spanning the bilayer, loops above and below. */
float receptor(vec3 m, vec3 c, float shift) {
  vec3 q = m - c;
  q.xz *= rot(shift * .5);
  vec3 h = polarRep(q, 7.);
  float d = sdCapsule(h, vec3(.135, -.33 - .05 * shift, 0.), vec3(.15 + .025 * shift, .36, .025), .056);
  d = smin(d, sdTorus(q - vec3(0., .37, 0.), vec2(.15, .034)), .035);
  return smin(d, sdEllipsoid(q - vec3(0., -.4 - .06 * shift, 0.), vec3(.14, .07 + .03 * shift, .14)), .05);
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., -.1, 0.), vec3(1.8, 1.45, 1.85));
  if (bound > .3) return vec2(bound, 0.);
  gPh = fract(uTime / T);
  gDock = smoothstep(.22, .3, gPh) * (1. - smoothstep(.76, .84, gPh));
  float ym = mid(p.xz);
  vec3 m = vec3(p.x, p.y - ym, p.z);
  float disk = length(p.xz) - RD;

  // Lipid bilayer: a head and two tails per lipid in each leaflet (mirrored), on a square grid; a thin
  // sheet at head level closes the gaps between heads.
  vec2 id = floor(p.xz / LS + .5);
  vec2 cq = p.xz - id * LS;
  float h = hash21(id);
  float ay = abs(m.y);
  float bob = .01 * sin(uTime * 1.7 + h * 6.28 + (m.y > 0. ? 0. : 2.));
  float head = length(vec3(cq.x, ay - .17 - bob, cq.y)) - .066;
  head = min(head, abs(ay - .165) - .022);
  vec2 res = vec2(max(head * .92, disk), 20.);
  vec3 tq = vec3(abs(cq.x) - .024, ay, cq.y);
  tq.x += .008 * sin(ay * 60. + h * 6.);
  float tail = sdCapsule(tq, vec3(0., .025, 0.), vec3(0., .145, 0.), .017);
  res = U(res, vec2(max(tail * .9, disk + .02), 21.));
  res = U(res, vec2(max(ay - .135, disk + .1), 21.));

  // Receptors; the front one shifts while the hormone is bound.
  float rec = min(receptor(m, R0, gDock), min(receptor(m, R1, 0.), receptor(m, R2, 0.)));
  res = U(res, vec2(rec * .95, 22.));

  // Hormones drifting above, and the one that docks in the front receptor's pocket.
  float hm = 1e5;
  for (int i = 0; i < 4; i++) {
    float f = float(i);
    vec3 c = vec3(sin(uTime * .21 + f * 1.9) * 1.05, .55 + .3 * sin(uTime * .33 + f * 2.7), cos(uTime * .17 + f * 2.3) * .95);
    hm = min(hm, hormone(p - c, uTime * .4 + f));
  }
  vec3 site = vec3(R0.x, mid(R0.xz) + .33, R0.z);
  vec3 far1 = vec3(.65, 1.05, .2), far2 = vec3(-.55, 1.1, .35);
  // Approach from far1, then leave in an arc through far2 that ends at far1 again.
  float a = smoothstep(0., .28, gPh), b = smoothstep(.8, 1., gPh);
  vec3 hc = gPh < .5 ? mix(far1, site, a) : bezier(site, far2 + vec3(0., .5, 0.), far1, b);
  float dock = hormone(p - hc, uTime * .4 * (1. - gDock) + 5.);
  res = U(res, vec2(hm, 23.));
  res = U(res, vec2(dock, gDock > .5 && gPh < .4 ? 65. : 23.));

  // Signal cascade inside the cell: a leg, then two, then four, each growing in turn and tipped with a
  // bright particle; together they fade before the next cycle.
  float cs = 1e5, fade = 1. - smoothstep(.72, .8, gPh);
  vec3 c0 = vec3(R0.x, mid(R0.xz) - .5, R0.z);
  for (int k = 0; k < 7; k++) {
    int lvl = k == 0 ? 0 : (k < 3 ? 1 : 2);
    float t0 = .32 + float(lvl) * .13;
    float u = clamp((gPh - t0) / .13, 0., 1.);
    float br = k == 0 ? 0. : (k < 3 ? float(k - 1) : float(k - 3));
    vec3 sA = c0, sB = c0 + vec3(0., -.25, .25);
    vec3 b1 = sB + vec3((lvl == 1 ? br : floor(br / 2.)) * .5 - .25, -.2, .22);
    if (lvl == 1) { sA = sB; sB = b1; }
    if (lvl == 2) { sA = b1; sB = b1 + vec3(mod(br, 2.) * .3 - .15, -.18, .2); }
    vec3 pc = mix(sA, sB, u);
    float on = step(t0, gPh) * fade;
    if (on > .02) cs = min(cs, min(length(p - pc) - .05 * on, sdCapsule(p, sA, pc, .017 * on)));
  }
  res = U(res, vec2(cs, 64.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 21.5 && m < 22.5) return .002 * sin(p.y * 90.);
  if (m > 22.5 && m < 23.5) return .0015 * noise3(p * 60.);
  return 0.;
}`};export{e as scene};
