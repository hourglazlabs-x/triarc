import"./chunk-KR4ZLU5I.js";var e={id:"N14",cam:[2.2,1,5.6],target:[0,.05,.25],fov:2.35,floor:-2.2,ring:1.6,poster:1,glsl:`
const float T = 5., Y0 = -1.38, SP = .245;
const float CX = -.4, CZ = -.07, ZC = -.27;      // sympathetic chain; spinal cord depth
const vec3 HEART = vec3(.02, .5, .68), GUT = vec3(0., -.45, .66), BLAD = vec3(0., -1.3, .58);
float gPh;

vec3 palette(int i) {
  if (i == 0) return vec3(.95, .90, .78);   // vertebrae
  if (i == 1) return vec3(.70, .82, .95);   // intervertebral discs
  if (i == 2) return vec3(1., .84, .30);    // spinal cord, spinal nerves
  if (i == 3) return vec3(1., .40, .16);    // sympathetic
  if (i == 4) return vec3(.14, .80, .70);   // parasympathetic (vagus, sacral)
  if (i == 5) return vec3(.90, .14, .16);   // heart
  if (i == 6) return vec3(1., .60, .70);    // lungs
  if (i == 7) return vec3(1., .55, .44);    // gut
  if (i == 8) return vec3(.98, .86, .40);   // bladder
  if (i == 9) return vec3(.82, .24, .04);   // sympathetic signal
  return vec3(.04, .66, .52);               // parasympathetic signal
}

/** Rounded cylinder around the y axis: radius r, half height h, edge rounding e. */
float rcyl(vec3 p, float r, float h, float e) {
  vec2 d = vec2(length(p.xz) - r + e, abs(p.y) - h + e);
  return min(max(d.x, d.y), 0.) + length(max(d, 0.)) - e;
}
/** Polyline a\u2192b\u2192c: (distance to its axis, arc length at the nearest point). */
vec2 path(vec3 p, vec3 a, vec3 b, vec3 c) {
  vec3 pa = p - a, ba = b - a; float l1 = length(ba);
  float h1 = clamp(dot(pa, ba) / (l1 * l1), 0., 1.);
  vec3 pb = p - b, cb = c - b; float l2 = length(cb);
  float h2 = clamp(dot(pb, cb) / (l2 * l2), 0., 1.);
  float d1 = length(pa - ba * h1), d2 = length(pb - cb * h2);
  return d1 < d2 ? vec2(d1, h1 * l1) : vec2(d2, l1 + h2 * l2);
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., .1, .2), vec3(.9, 1.85, .9));
  if (bound > .3) return vec2(bound, 0.);
  gPh = fract(uTime / T);
  float sym = step(gPh, .5);

  // Vertebrae: body, arch around the cord, spinous and transverse processes; discs between the bodies.
  float i = clamp(floor((p.y - Y0) / SP + .5), 0., 11.);
  float yc = Y0 + i * SP;
  vec3 v = p - vec3(0., yc, 0.);
  vec3 vm = vec3(abs(v.x), v.yz);
  float bone = rcyl(v, .18, .075, .03);
  bone = min(bone, sdTorus(v - vec3(0., 0., ZC), vec2(.105, .032)));
  bone = min(bone, sdCapsule(v, vec3(0., 0., ZC - .1), vec3(0., -.1, ZC - .29), .034));
  bone = min(bone, sdCapsule(vm, vec3(.08, 0., ZC - .02), vec3(.29, .02, ZC - .06), .028));
  vec2 res = vec2(bone, 20.);
  float j = clamp(floor((p.y - Y0) / SP), 0., 10.);
  float yd = Y0 + (j + .5) * SP;
  res = U(res, vec2(rcyl(p - vec3(0., yd, 0.), .17, .045, .03), 21.));

  // Spinal cord, widening into the brainstem; a pair of spinal nerves between each two vertebrae.
  float cord = sdCapsule(p, vec3(0., Y0 - .15, ZC), vec3(0., 1.45, ZC), .062);
  cord = smin(cord, sdEllipsoid(p - vec3(0., 1.6, ZC + .03), vec3(.1, .15, .1)), .06);
  vec3 n = vec3(abs(p.x), p.y - yd, p.z);
  cord = min(cord, sdCapsule(n, vec3(0., 0., ZC), vec3(.33, -.04, ZC + .08), .022));
  // On the chain's side, each spinal nerve sends a short branch to its ganglion.
  if (p.x < 0.) cord = min(cord, sdCapsule(p, vec3(-.3, yd - .035, ZC + .07), vec3(CX, yd, CZ), .013));
  res = U(res, vec2(cord, 22.));

  // Sympathetic chain: a ganglion at each level, linked in a cord beside the spine.
  float chain = sdCapsule(p, vec3(CX, Y0 - .05, CZ), vec3(CX, 1.3, CZ), .018);
  chain = min(chain, sdEllipsoid(p - vec3(CX, yd, CZ), vec3(.042, .062, .042)));
  res = U(res, vec2(chain, 23.));

  // Organs in front. The heart beats faster during the sympathetic half (4 beats) than the other (2 beats).
  float hb = sym > .5 ? beat(uTime, T / 8., 0.) : beat(uTime, T / 4., 0.);
  vec3 hq = (p - HEART) / (1. - .08 * hb);
  float heart = smin(sdSphere(hq - vec3(-.07, .06, 0.), .14), sdSphere(hq - vec3(.08, .07, -.01), .13), .07);
  heart = smin(heart, sdRoundCone(hq, vec3(0., 0., 0.), vec3(.08, -.24, .06), .15, .035), .07) * (1. - .08 * hb);
  res = U(res, vec2(heart, 25.));
  vec3 lq = vec3(abs(p.x), p.yz) - vec3(.42, .62, .5);
  float lung = smin(sdEllipsoid(lq, vec3(.16, .34, .14)), sdEllipsoid(lq - vec3(.02, -.16, .02), vec3(.19, .2, .15)), .09);
  res = U(res, vec2(lung, 26.));
  // Gut: a coil of intestine; it stirs during the parasympathetic half.
  vec3 g = p - GUT;
  // Stomach (J-shaped, fundus on the patient's left) above a coil of small intestine.
  float gut = sdRoundCone(g, vec3(.17, .28, 0.), vec3(.1, .08, .02), .11, .1);
  gut = smin(gut, sdRoundCone(g, vec3(.1, .08, .02), vec3(-.12, .04, .04), .1, .06), .06);
  gut = smin(gut, sdCapsule(g, vec3(-.12, .04, .04), vec3(-.2, .12, .02), .045), .03);
  vec3 c = g - vec3(0., -.24, 0.);
  float ca = atan(c.y, c.x);
  float stir = (1. - sym) * .014 * sin(ca * 5. - uTime * 6.);
  gut = min(gut, length(vec2(length(c.xy) - .17 - .03 * sin(ca * 5.) - stir, c.z - .04 * cos(ca * 5.))) - .06);
  res = U(res, vec2(gut * .8, 27.));
  res = U(res, vec2(sdEllipsoid(p - BLAD, vec3(.15, .13, .13) * (1. - .06 * (1. - sym) * smoothstep(.7, .95, gPh))), 28.));

  // Nerves to the organs, each a polyline: sympathetic from chain ganglia, parasympathetic from the
  // brainstem (vagus, with its trunk) and from the sacral cord. Arc length s gives the signal position.
  vec2 s1 = path(p, vec3(CX, 1.08, CZ), vec3(-.3, .8, .4), HEART + vec3(-.17, .03, -.03));
  s1 = U(s1, path(p, vec3(CX, 1.2, CZ), vec3(-.56, 1.05, .3), vec3(-.45, .88, .5)));
  s1 = U(s1, path(p, vec3(CX, .12, CZ), vec3(-.38, -.15, .4), GUT + vec3(-.26, .02, 0.)));
  s1 = U(s1, path(p, vec3(CX, -.86, CZ), vec3(-.34, -1.15, .34), BLAD + vec3(-.14, .02, 0.)));
  vec3 V0 = vec3(.07, 1.55, ZC + .06), V1 = vec3(.32, 1.25, .08), V2 = vec3(.36, .05, .24);
  vec2 tr = path(p, V0, V1, V2);
  float l01 = length(V1 - V0);
  // Branch arc lengths continue from where they leave the trunk.
  vec2 s2 = vec2(tr.x - .008, tr.y);
  vec2 b = path(p, vec3(.335, .9, .14), vec3(.24, .74, .5), HEART + vec3(.16, .03, -.03)); s2 = U(s2, vec2(b.x, b.y + l01 + .36));
  b = path(p, vec3(.33, 1.08, .11), vec3(.56, .98, .32), vec3(.45, .88, .5)); s2 = U(s2, vec2(b.x, b.y + l01 + .18));
  b = path(p, V2, vec3(.32, -.2, .46), GUT + vec3(.26, .02, 0.)); s2 = U(s2, vec2(b.x, b.y + l01 + length(V2 - V1)));
  b = path(p, vec3(0., Y0 - .12, ZC), vec3(.32, -1.45, .14), BLAD + vec3(.14, .02, 0.)); s2 = U(s2, vec2(b.x, b.y + .7));
  // Signals: sympathetic in the first half of the cycle, parasympathetic in the second.
  float sp = sym > .5 ? gPh / .42 * 1.15 - .05 : (gPh - .5) / .42 * 2.1 - .05;
  float on = sym > .5 ? smoothstep(0., .03, gPh) * (1. - smoothstep(.4, .47, gPh)) : smoothstep(.5, .53, gPh) * (1. - smoothstep(.9, .97, gPh));
  vec2 nv = s1.x < s2.x ? s1 : s2;
  bool isSym = s1.x < s2.x;
  float act = isSym ? sym : 1. - sym;
  float x = (nv.y - sp) / .13;
  float I = act * on * exp(-x * x);
  res = U(res, vec2(nv.x - .021 - .04 * I, I > .3 ? (isSym ? 69. : 70.) : (isSym ? 23. : 24.)));
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 19.5 && m < 20.5) return .002 * noise3(p * 40.);
  if (m > 24.5 && m < 25.5) return .0015 * noise3(p * 50.);
  if (m > 25.5 && m < 26.5) return .0025 * smoothstep(.1, .6, cellular(p * 22.));
  if (m > 26.5 && m < 27.5) return .002 * noise3(p * 45.);
  return 0.;
}`};export{e as scene};
