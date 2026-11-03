import{a as e}from"./chunk-K7AKM7HN.js";import"./chunk-KR4ZLU5I.js";var s={id:"N16",cam:[1.3,.9,6.3],target:[.12,.3,0],floor:-2.1,ring:1.7,accent:e,poster:1.47,glsl:`
const float P = 1.2;
float gVent, gAtr, gPulse;

vec3 palette(int i) {
  if (i == 0) return vec3(.92, .42, .48);   // myocardium
  if (i == 1) return vec3(.96, .20, .17);   // oxygenated blood, arteries
  if (i == 2) return vec3(.16, .36, 1.);    // deoxygenated blood, veins
  if (i == 3) return vec3(.97, .92, .84);   // valve tissue
  if (i == 4) return vec3(1., .76, .30);    // epicardial fat
  if (i == 5) return vec3(.55, .95, 1.);    // conduction system
  if (i == 6) return vec3(1., .40, .22);    // coronary arteries
  if (i == 7) return vec3(.50, .42, .98);   // cardiac veins
  if (i == 8) return vec3(.72, .07, .05);   // red blood cells (glowing)
  return vec3(.10, .18, .78);               // blood cells in veins (glowing)
}

// Ventricles and atria squeeze about their own centres.
const vec3 VC = vec3(.25, -.4, .05), RA = vec3(-.8, .55, .1), LA = vec3(.3, .75, -.45);
vec3 ventSpace(vec3 q, float s) { vec3 v = VC + (q - VC) / s; v.xz *= rot(.07 * gVent); return v; }

float body(vec3 q) {
  float s = 1. - .08 * gVent;
  vec3 qv = ventSpace(q, s);
  vec3 v = qv - vec3(.1, -.2, 0.); v.xy *= rot(-.55);
  float h = sdEllipsoid(v, vec3(.95, 1.22, .84)) * s;
  h = smin(h, sdTaper(qv, vec3(.05, -.3, 0.), vec3(.78, -1.48, .12), .78, .1) * s, .42);
  float sa = 1. - .07 * gAtr;
  h = smin(h, sdEllipsoid((q - RA) / sa, vec3(.46, .56, .5)) * sa, .26);
  h = smin(h, sdEllipsoid((q - LA) / sa, vec3(.56, .38, .42)) * sa, .26);
  return h;
}

/** Blood cells flowing along a vessel segment a\u2192b of radius R; phase in world units. */
float cells(vec3 p, vec3 a, vec3 b, float R, float phase) {
  vec3 ba = b - a; float L = length(ba); vec3 d = ba / L;
  vec3 pa = p - a; float h = dot(pa, d);
  float id = floor((h - phase) / .2);
  float c = (id + .5) * .2 + phase;
  vec3 e1 = normalize(cross(d, vec3(.31, .87, .38))), e2 = cross(d, e1);
  float an = hash11(id * 7.31 + L) * TAU;
  vec3 ctr = a + d * c + (e1 * cos(an) + e2 * sin(an)) * R * .45;
  float cell = length(p - ctr) - .05;
  return max(cell, max(-h, h - L));
}

/** Heart frame: (distance along the long axis from the centre toward the apex, angle around it, distance from it). */
vec3 heartFrame(vec3 q) {
  vec3 u = normalize(vec3(.39, -.91, .085));
  vec3 v = normalize(vec3(0., 0., 1.) - u * u.z);
  vec3 w = cross(u, v);
  vec3 r = q - vec3(.25, -.35, .05);
  float along = dot(r, u);
  vec2 xy = vec2(dot(r, v), dot(r, w));
  return vec3(along, atan(xy.y, xy.x), length(xy));
}
/** A vessel running down the heart at angle phi between two positions along the axis; tube = surface distance minus radius. */
float vessel(float tube, vec3 hf, float phi, float a0, float a1) {
  float d = mod(hf.y - phi + PI, TAU) - PI;
  return max(length(vec2(tube, d * hf.z)) - .021, max(a0 - hf.x, hf.x - a1));
}
/** A vessel running around the heart at a position along the axis, between two angles. */
float ring(float tube, vec3 hf, float along, float p0, float p1) {
  float out0 = max(p0 - hf.y, hf.y - p1) * hf.z;
  return max(length(vec2(tube, hf.x - along)) - .021, out0);
}
/** Conduction path segment a\u2192b starting at arc length s0; returns (distance to its axis, arc length there). */
vec2 nerve(vec3 p, vec3 a, vec3 b, float s0) {
  vec3 pa = p - a, ba = b - a; float L = length(ba);
  float h = clamp(dot(pa, ba) / (L * L), 0., 1.);
  return vec2(length(pa - ba * h), s0 + h * L);
}
vec2 nU(vec2 a, vec2 b) { return a.x < b.x ? a : b; }

vec2 map(vec3 q) {
  float bound = sdSphere(q - vec3(0., .3, 0.), 2.6);
  if (bound > .3) return vec2(bound, 0.);
  float ph = fract(uTime / P);
  gAtr = beat(uTime, P, .06);
  gVent = beat(uTime, P, .3);
  gPulse = ph * P * 7.5;

  float h = body(q);
  vec2 res = vec2(SHELL(h), 40.);

  // Great vessels as tinted glass: aorta and pulmonary veins red, pulmonary arteries and venae cavae blue.
  float aorta = 1e5, pv = 1e5, pa = 1e5, vc = sdTaper(q, vec3(-.72, .15, 0.), vec3(-.66, -.62, -.1), .2, .18);
  if (sdSphere(q - vec3(.2, 1.45, -.2), 1.3) < res.x) {
  vec2 arch = sdBezier(q, vec3(.04, 1.3, .02), vec3(.42, 2.2, -.22), vec3(.9, 1.5, -.56));
  aorta = sdTaper(q, vec3(0., .5, .05), vec3(.04, 1.32, .02), .27, .25);
  aorta = smin(aorta, arch.x - .24, .08);
  aorta = smin(aorta, sdTaper(q, vec3(.9, 1.52, -.56), vec3(.96, .45, -.62), .23, .2), .1);
  aorta = smin(aorta, sdCapsule(q, vec3(.2, 1.75, -.08), vec3(.13, 2.34, -.12), .075), .06);
  aorta = smin(aorta, sdCapsule(q, vec3(.43, 1.88, -.22), vec3(.47, 2.38, -.26), .07), .06);
  aorta = smin(aorta, sdCapsule(q, vec3(.66, 1.8, -.38), vec3(.77, 2.3, -.44), .07), .06);
  pv = min(min(sdCapsule(q, LA + vec3(.3, .12, -.1), vec3(1., .98, -.72), .07), sdCapsule(q, LA + vec3(.3, -.12, -.1), vec3(1., .52, -.78), .07)),
                 min(sdCapsule(q, LA + vec3(-.35, .1, -.12), vec3(-.3, .98, -.92), .07), sdCapsule(q, LA + vec3(-.35, -.12, -.12), vec3(-.3, .5, -.92), .07)));
  pa = sdTaper(q, vec3(.32, .55, .52), vec3(.28, 1.18, .42), .25, .2);
  pa = smin(pa, sdTaper(q, vec3(.28, 1.18, .42), vec3(.62, 1.4, .18), .17, .14), .16);
  pa = smin(pa, sdTaper(q, vec3(.62, 1.4, .18), vec3(1.0, 1.36, -.12), .14, .11), .08);
  pa = smin(pa, sdTaper(q, vec3(.28, 1.18, .42), vec3(-.12, 1.42, .1), .17, .14), .16);
  pa = smin(pa, sdTaper(q, vec3(-.12, 1.42, .1), vec3(-.5, 1.38, -.18), .14, .11), .08);
  vc = min(vc, sdTaper(q, vec3(-.76, .95, .05), vec3(-.7, 2.12, 0.), .21, .18));
  }
  res = U(res, vec2(SHELL(min(aorta, pv)), 41.));
  res = U(res, vec2(SHELL(min(pa, vc)), 42.));

  // Coronary arteries and cardiac veins: tubes lying on the surface, placed in the heart's own frame
  // (along the long axis, and around it: 0 faces the viewer, positive toward the patient's right).
  if (abs(h) < .12) {
    vec3 hf = heartFrame(q);
    float tube = h - .021;
    float art = vessel(tube, hf, -.5 + .06 * sin(hf.x * 5.), -.72, 1.12);                  // left anterior descending
    art = min(art, vessel(tube, hf, -.5 - (hf.x + .35) * 1.25, -.35, .28));                // first diagonal
    art = min(art, vessel(tube, hf, -.5 - (hf.x - .15) * 1.2, .15, .72));                  // second diagonal
    art = min(art, vessel(tube, hf, 1.2 + .12 * hf.x, -.72, .35));                         // acute marginal
    art = min(art, vessel(tube, hf, -1.95 - .1 * (hf.x + .72), -.72, .45));                // obtuse marginal
    art = min(art, vessel(tube, hf, 2.75, -.72, .95));                                     // posterior descending
    art = min(art, ring(tube, hf, -.74 + .025 * sin(hf.y * 4.), -.45, PI));               // right coronary
    art = min(art, ring(tube, hf, -.74 + .025 * sin(hf.y * 4.), -PI, -.5));               // circumflex
    float vein = vessel(tube, hf, -.64 + .05 * sin(hf.x * 4. + 1.), -.7, 1.);             // great cardiac vein
    vein = min(vein, vessel(tube, hf, 2.58, -.7, .85));                                     // middle cardiac vein
    vein = min(vein, ring(tube - .004, hf, -.66, 1.9, PI));                                 // coronary sinus
    res = U(res, vec2(art - .002, 26.));
    res = U(res, vec2(vein, 27.));
  }

  // Everything below sits inside a shell, so it only matters while marching behind the shells.
  if (!gSkipShell) return res;

  if (h < res.x) {
    // Chambers: blood pools that empty as the walls contract.
    float sv = 1. - .22 * gVent, sa = 1. - .24 * gAtr;
    vec3 qv = ventSpace(q, sv);
    vec3 lv = qv - vec3(.36, -.45, 0.); lv.xy *= rot(-.55);
    vec3 rv = qv - vec3(-.24, -.24, .3); rv.xy *= rot(-.35);
    float red = min(sdEllipsoid(lv, vec3(.38, .7, .36)) * sv, sdEllipsoid((q - LA) / sa, vec3(.36, .23, .26)) * sa);
    float blue = min(sdEllipsoid(rv, vec3(.36, .56, .28)) * sv, sdEllipsoid((q - RA) / sa, vec3(.29, .35, .31)) * sa);
    res = U(res, vec2(red, 21.));
    res = U(res, vec2(blue, 22.));

    // Mitral and tricuspid valves: rings with leaflets that open while the ventricles fill.
    float open = 1. - smoothstep(.0, .25, gVent);
    vec3 m1 = q - vec3(.2, .3, -.12); m1.xy *= rot(-.55);
    vec3 m2 = q - vec3(-.45, .25, .18); m2.xy *= rot(-.35);
    float valves = min(sdTorus(m1, vec2(.2, .026)), sdTorus(m2, vec2(.18, .024)));
    float r1 = length(m1.xz), r2 = length(m2.xz);
    float leaf1 = max(abs(m1.y + (.2 - r1) * mix(.15, 1.3, open)) - .01, r1 - .2);
    leaf1 = max(leaf1, -(abs(sin(atan(m1.z, m1.x))) - .06));
    float leaf2 = max(abs(m2.y + (.18 - r2) * mix(.15, 1.3, open)) - .01, r2 - .18);
    leaf2 = max(leaf2, -(abs(sin(1.5 * atan(m2.z, m2.x))) - .06));
    res = U(res, vec2(min(valves, min(leaf1, leaf2)), 23.));

    // Conduction system: SA node \u2192 AV node \u2192 bundle of His \u2192 left and right bundle branches \u2192 Purkinje fibres.
    vec3 SA = vec3(-.66, .98, .22), AV = vec3(-.18, .36, .12), HIS = vec3(0., .2, .1);
    vec3 LBB = vec3(.42, -.62, .1), APX = vec3(.7, -1.25, .12), RBB = vec3(.12, -.55, .3);
    float sAV = length(AV - SA), sHIS = sAV + length(HIS - AV);
    float sL = sHIS + length(LBB - HIS), sA = sL + length(APX - LBB), sR = sHIS + length(RBB - HIS);
    vec2 cs = nerve(q, SA, AV, 0.);
    cs = nU(cs, nerve(q, AV, HIS, sAV));
    cs = nU(cs, nerve(q, HIS, LBB, sHIS));
    cs = nU(cs, nerve(q, LBB, APX, sL));
    cs = nU(cs, nerve(q, HIS, RBB, sHIS));
    cs = nU(cs, nerve(q, RBB, vec3(.45, -1.12, .32), sR));
    cs = nU(cs, nerve(q, APX, vec3(.98, -.42, -.02), sA));
    cs = nU(cs, nerve(q, APX, vec3(.62, -.45, .46), sA));
    cs = nU(cs, nerve(q, LBB, vec3(.78, -.1, -.12), sL));
    // The pulse is a bright, thicker stretch of fibre at arc length gPulse; the nodes swell as it passes.
    float I = exp(-pow((cs.y - gPulse) / .22, 2.));
    float fibre = cs.x - .019 - .024 * I;
    float nSA = sdSphere(q - SA, .05 + .03 * exp(-pow(gPulse / .2, 2.)));
    float nAV = sdSphere(q - AV, .045 + .03 * exp(-pow((gPulse - sAV) / .2, 2.)));
    if (min(nSA, nAV) < fibre) { fibre = min(nSA, nAV); I = nSA < nAV ? exp(-pow(gPulse / .25, 2.)) : exp(-pow((gPulse - sAV) / .25, 2.)); }
    res = U(res, vec2(fibre, I > .3 ? 65. : 25.));
  }

  // Blood cells flowing through the great vessels, faster as the ventricles eject.
  if (min(min(aorta, pv), min(pa, vc)) < res.x) {
    float flow = uTime * .5 + .18 * sin(TAU * (ph - .3));
    float rc = cells(q, vec3(0., .5, .05), vec3(.04, 1.32, .02), .25, flow);
    rc = min(rc, cells(q, vec3(.9, 1.52, -.56), vec3(.96, .45, -.62), .2, flow));
    float bc = cells(q, vec3(.32, .55, .52), vec3(.28, 1.18, .42), .22, flow);
    bc = min(bc, cells(q, vec3(-.7, 2.12, 0.), vec3(-.76, .95, .05), .19, flow));
    bc = min(bc, cells(q, vec3(-.66, -.62, -.1), vec3(-.72, .15, 0.), .19, flow));
    res = U(res, vec2(rc, 68.));
    res = U(res, vec2(bc, 69.));
  }
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 39.5 && m < 40.5) return .0016 * sin(dot(p, vec3(.55, .75, .35)) * 95. + 2.5 * noise3(p * 7.)) + .0012 * noise3(p * 40.);
  return 0.;
}`};export{s as scene};
