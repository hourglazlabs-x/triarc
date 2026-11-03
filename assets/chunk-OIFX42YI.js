import"./chunk-KR4ZLU5I.js";var e={id:"N17",cam:[.3,.75,6.4],target:[0,.3,0],fov:2.45,floor:-1.9,ring:1.75,poster:2.3,glsl:`
const float T = 5.;
const vec3 K = vec3(0., .82, 0.), H = vec3(.4, .52, -.02);   // carina; hilum (mirrored to both sides)
float gB;

vec3 palette(int i) {
  if (i == 0) return vec3(1., .36, .50);    // lungs (thin glass)
  if (i == 1) return vec3(.95, .90, .80);   // trachea and bronchi (cartilage)
  if (i == 2) return vec3(.16, .36, 1.);    // pulmonary arteries
  if (i == 3) return vec3(.96, .20, .17);   // pulmonary veins
  if (i == 4) return vec3(1., .50, .56);    // alveoli
  if (i == 5) return vec3(.40, .90, 1.);    // air
  return vec3(.86, .76, .70);               // the trachea's back wall
}

/** One lung; s = -1 for the right lung (viewer's left), +1 for the left. Lobes split by fissures. */
float lung(vec3 p, float s) {
  vec3 q = p - vec3(.6 * s, 0., 0.);
  q.x *= s;
  // Narrower toward the apex.
  vec3 w = q; w.xz *= 1. + .32 * smoothstep(-.1, 1.1, q.y);
  float d = sdEllipsoid(w - vec3(.03, .12, 0.), vec3(.48, 1.04, .52)) * .8;
  d = smin(d, sdEllipsoid(q - vec3(.04, -.44, 0.), vec3(.55, .56, .56)), .3);
  d = smax(d, -(q.x + .3), .12);
  d = smax(d, -sdSphere(q - vec3(-.1, -1.58, 0.), .85), .12);
  if (s > 0.) d = smax(d, -sdSphere(q - vec3(-.44, -.42, .44), .37), .1);
  float po = dot(q - vec3(0., -.12, 0.), vec3(0., .69, .724));
  d = max(d, .011 - abs(po));
  if (s < 0.) d = max(d, -max(abs(q.y - .26) - .011, -po));
  return d;
}

/** Rotates unit vector d about unit axis k (perpendicular to d) by angle a. */
vec3 turn(vec3 d, vec3 k, float a) { return d * cos(a) + cross(k, d) * sin(a); }

/**
 * Airway subtree from a along d: four generations, each branching in two; the point follows only the
 * child on its side, so the cost grows with depth, not with the number of branches. Returns distances to
 * (airway, artery, vein, alveoli).
 */
vec4 tree(vec3 q, vec3 a, vec3 d, float L, float r) {
  float air = 1e5, art = 1e5, vein = 1e5;
  for (int g = 0; g < 4; g++) {
    vec3 b = a + d * L;
    vec3 k = normalize(cross(d, g % 2 == 0 ? vec3(0., 0., 1.) : vec3(.6, -.3, .2)));
    vec3 o = cross(d, k);
    air = min(air, sdRoundCone(q, a, b, r, r * .8));
    art = min(art, sdCapsule(q, a + k * r * 1.5, b + k * r * 1.3, r * .5));
    vein = min(vein, sdCapsule(q, a - k * r * 1.5 + o * r * .4, b - k * r * 1.3, r * .45));
    vec3 side = cross(k, d);
    float sgn = dot(q - b, side) > 0. ? 1. : -1.;
    d = turn(d, k, sgn * (g == 0 ? .6 : .66));
    a = b; L *= .76; r *= .76;
  }
  // A cluster of alveoli at the end of the last branch.
  vec3 e = a + d * .03;
  vec3 k = normalize(cross(d, vec3(.3, .2, 1.))), o = cross(d, k);
  float alv = sdSphere(q - e - d * .07, .052);
  alv = min(alv, min(sdSphere(q - e - k * .052, .048), sdSphere(q - e + k * .052, .048)));
  alv = min(alv, min(sdSphere(q - e - o * .052, .046), sdSphere(q - e + o * .052 + d * .02, .046)));
  return vec4(air, art, vein, alv);
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., .35, 0.), vec3(1.4, 1.95, .8));
  if (bound > .3) return vec2(bound, 0.);
  gB = .5 - .5 * cos(TAU * uTime / T);
  // Everything below the carina swells with the breath, from the carina outward.
  float sb = 1. + .07 * gB;
  vec3 pb = K + (p - K) / sb;
  vec2 res = vec2(SHELL(min(lung(pb, -1.), lung(pb, 1.)) * sb), 80.);

  // Trachea: C-shaped cartilage rings, open at the back where a thin wall joins them.
  vec3 t = p - K;
  float ty = clamp(floor(t.y / .088) + .5, .5, 12.5) * .088;
  float ring = sdTorus(vec3(t.x, t.y - ty, t.z), vec2(.105, .022));
  ring = max(ring, -(t.z + .05));
  ring = max(ring, max(-t.y + .02, t.y - 1.12));
  res = U(res, vec2(ring, 21.));
  float back = max(sdBox(vec3(t.x, t.y - .57, t.z + .085), vec3(.06, .56, .012)), -t.y);
  res = U(res, vec2(back, 26.));

  // Main bronchi (mirrored), the pulmonary trunk and its branches to each hilum, and veins back toward the heart.
  vec3 m = vec3(abs(pb.x), pb.yz);
  res = U(res, vec2(sdRoundCone(m, K, H, .08, .068) * sb, 21.));
  float art = min(sdCapsule(pb, vec3(0., .2, .34), vec3(0., .6, .24), .085), sdCapsule(m, vec3(0., .6, .24), H + vec3(-.02, .1, .12), .06));
  res = U(res, vec2(art * sb, 22.));
  res = U(res, vec2(sdCapsule(m, H + vec3(-.02, -.12, -.1), vec3(.06, .3, -.22), .05) * sb, 23.));

  // Air: particles drawn in on the breath and pushed back out, inside the trachea and above it.
  float air = 1e5;
  for (int i = 0; i < 7; i++) {
    float s = float(i) * .24 - .45 + .75 * gB;
    vec3 c = vec3(.03 * sin(float(i) * 2.4), K.y + 1.2 - s, .03 * cos(float(i) * 1.7));
    float r = .03 * smoothstep(-.5, -.3, s) * (1. - smoothstep(1.05, 1.2, s));
    if (r > .004) air = min(air, length(p - c) - r);
  }
  res = U(res, vec2(air, 65.));

  // The bronchial tree lies inside the lungs, so it only matters while marching behind the glass.
  if (!gSkipShell) return res;
  // Three lobar subtrees (upper, middle, lower); the point follows the one whose direction it lies along.
  vec3 du = normalize(vec3(.45, 1., .1)), dm = normalize(vec3(1., -.2, .45)), dl = normalize(vec3(.3, -1., -.12));
  vec3 rel = m - H;
  float cu = dot(rel, du), cm = dot(rel, dm), cl = dot(rel, dl);
  vec3 d0 = cu > max(cm, cl) ? du : (cm > cl ? dm : dl);
  float L0 = cu > max(cm, cl) ? .27 : (cm > cl ? .24 : .44);
  vec4 tr = tree(m, H, d0, L0, .058);
  res = U(res, vec2(tr.x * sb, 21.));
  res = U(res, vec2(tr.y * sb, 22.));
  res = U(res, vec2(tr.z * sb, 23.));
  res = U(res, vec2(tr.w * sb, 24.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 79.5 && m < 80.5) return .0012 * noise3(p * 26.);
  if (m > 23.5 && m < 24.5) return .002 * noise3(p * 90.);
  if (m > 20.5 && m < 21.5) return .0015 * sin(dot(p, vec3(.3, 1., .2)) * 140.);
  return 0.;
}`};export{e as scene};
