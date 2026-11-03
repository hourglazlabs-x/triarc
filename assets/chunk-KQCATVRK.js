import"./chunk-KR4ZLU5I.js";var e={id:"N11",cam:[1,.95,5.3],target:[0,.38,0],fov:2.22,floor:-1.7,ring:1.5,poster:2.25,glsl:`
const float T = 4.5;
const vec3 HYP = vec3(0., 1.8, .04), PIT = vec3(0., 1.665, .1), THY = vec3(0., 1.13, .1);
// Routes: pituitary \u2192 thyroid (T0, T1, T2); pituitary \u2192 chest (A0, A1, A2), then a branch to each adrenal.
const vec3 T0 = vec3(0., 1.64, .12), T1 = vec3(0., 1.38, .21), T2 = vec3(0., 1.09, .14);
const vec3 A0 = vec3(0., 1.64, .09), A1 = vec3(0., 1.0, -.07), A2 = vec3(0., .5, -.06);
float gPh;

vec3 palette(int i) {
  if (i == 0) return vec3(.40, .62, 1.);    // body (glass)
  if (i == 1) return vec3(1., .46, .10);    // hypothalamus
  if (i == 2) return vec3(1., .74, .16);    // pituitary
  if (i == 3) return vec3(.98, .26, .44);   // thyroid
  if (i == 4) return vec3(1., .90, .16);    // adrenal glands
  if (i == 5) return vec3(.46, .04, .12);   // kidneys
  if (i == 6) return vec3(1., .52, .40);    // pancreas
  if (i == 7) return vec3(.90, .72, .36);   // hormone routes
  if (i == 8) return vec3(1., .86, .42);    // hormone signals
  if (i == 10) return vec3(.74, .34, .06);  // hypothalamus, active
  if (i == 11) return vec3(.74, .54, .10);  // pituitary, active
  if (i == 12) return vec3(.72, .17, .30);  // thyroid, active
  return vec3(.74, .64, .10);               // adrenal glands, active
}

float body(vec3 p) {
  float head = sdEllipsoid(p - vec3(0., 1.86, 0.), vec3(.29, .37, .33));
  head = smin(head, sdEllipsoid(p - vec3(0., 1.66, .07), vec3(.2, .19, .22)), .12);
  head = smin(head, sdEllipsoid(p - vec3(0., 1.8, .32), vec3(.045, .08, .06)), .05);
  float neck = sdCapsule(p, vec3(0., 1.55, -.03), vec3(0., 1.0, 0.), .16);
  float chest = sdEllipsoid(p - vec3(0., .5, 0.), vec3(.66, .58, .31));
  float waist = sdRoundBox(p - vec3(0., -.35, 0.), vec3(.42, .5, .21), .2);
  float hips = sdEllipsoid(p - vec3(0., -.98, 0.), vec3(.56, .36, .3));
  vec3 m = vec3(abs(p.x), p.yz);
  float sh = sdCapsule(m, vec3(.18, .92, -.03), vec3(.64, .8, 0.), .13);
  float arm = sdRoundCone(m, vec3(.7, .74, 0.), vec3(.76, .5, -.01), .18, .155);
  float d = smin(smin(chest, waist, .3), hips, .3);
  d = smin(d, sh, .18);
  d = smin(d, arm, .08);
  d = smin(d, neck, .22);
  d = smin(d, head, .08);
  return max(d, -(p.y + 1.25));
}

/** Gentle pulse of a gland centred on cycle phase c. */
float pulseAt(float c, float w) { float x = abs(gPh - c); x = min(x, 1. - x); return exp(-x * x / (w * w)); }
/** Progress 0..1 along a route between phases a and b. */
float along(float a, float b) { return clamp((gPh - a) / (b - a), 0., 1.); }
/** Distance to a dotted line a\u2192b: beads of radius r every sp units. */
float dots(vec3 p, vec3 a, vec3 b, float sp, float r) {
  vec3 ba = b - a; float L = length(ba); vec3 d = ba / L;
  float s = clamp(dot(p - a, d), 0., L);
  s = min(floor(s / sp + .5), floor(L / sp)) * sp;
  return length(p - a - d * s) - r;
}
/** Point at fraction u of the way along the polyline a\u2192b\u2192c. */
vec3 polyAt(vec3 a, vec3 b, vec3 c, float u) {
  float l1 = length(b - a), l2 = length(c - b), s = u * (l1 + l2);
  return s < l1 ? mix(a, b, s / l1) : mix(b, c, (s - l1) / l2);
}
/** The branch from the chest to the adrenal gland on side sx (the right one, sx < 0, sits lower). */
vec3 branchMid(float sx) { return vec3(.22 * sx, sx > 0. ? .1 : .05, -.06); }
vec3 branchEnd(float sx) { return vec3(.27 * sx, sx > 0. ? -.13 : -.2, -.1); }

vec2 map(vec3 p) {
  vec3 q = p; q.xz *= rot(-.15);
  float bound = sdBox(q - vec3(0., .4, 0.), vec3(1.1, 1.9, .6));
  if (bound > .3) return vec2(bound, 0.);
  // The glass body; everything else sits inside it, so it only matters while marching behind the glass.
  if (!gSkipShell) return vec2(body(q), 80.);
  // Behind the glass all the parts lie within this envelope around the midline.
  float env = sdCapsule(q, vec3(0., -.75, 0.), vec3(0., 1.8, 0.), .48);
  if (env > .05) return vec2(env, 0.);
  gPh = fract(uTime / T);
  vec2 res = vec2(1e5, 0.);
  float pH = pulseAt(.05, .045), pP = pulseAt(.15, .045), pT = pulseAt(.46, .05), pA = pulseAt(.84, .05);

  // Head: hypothalamus, the pituitary stalk and the pituitary (anterior and posterior lobes).
  if (sdSphere(q - vec3(0., 1.73, .07), .22) < res.x) {
    float hyp = sdEllipsoid(q - HYP, vec3(.125, .08, .1) * (1. + .1 * pH));
    res = U(res, vec2(hyp, pH > .5 ? 70. : 21.));
    float s = 1. + .1 * pP;
    float pit = smin(sdSphere(q - PIT - vec3(0., -.005, .024), .07 * s), sdSphere(q - PIT - vec3(0., .008, -.038), .05 * s), .025);
    float stalk = sdCapsule(q, HYP + vec3(0., -.04, .03), PIT + vec3(0., .03, -.01), .02);
    res = U(res, vec2(min(pit, stalk), pP > .5 ? 71. : 22.));
    // The hypothalamus signals the pituitary down the stalk.
    vec3 sp = mix(HYP + vec3(0., -.03, .03), PIT + vec3(0., .01, 0.), along(.04, .14));
    if (gPh > .03 && gPh < .15) res = U(res, vec2(sdSphere(q - sp, .026), 68.));
  }

  // Neck: the butterfly-shaped thyroid.
  if (sdBox(q - THY, vec3(.24, .22, .12)) < res.x) {
    vec3 t = q - THY; t.x = abs(t.x);
    vec3 tl = t - vec3(.11, .02, -.02); tl.xy *= rot(.32);
    float s = 1. + .07 * pT;
    float thy = sdEllipsoid(tl / s, vec3(.075, .16, .065)) * s;
    thy = smin(thy, sdCapsule(t, vec3(0., -.05, .045), vec3(.1, -.035, .015), .036), .035);
    res = U(res, vec2(thy, pT > .5 ? 72. : 23.));
  }

  // Abdomen: kidneys (the right one, on the viewer's left, sits lower), adrenal glands, pancreas.
  float sx = q.x < 0. ? -1. : 1.;
  if (sdBox(q - vec3(0., -.44, 0.), vec3(.5, .42, .26)) < res.x) {
    vec3 kc = vec3(.3 * sx, sx > 0. ? -.42 : -.49, -.11);
    vec3 kq = q - kc; kq.xy *= rot(-sx * .22);
    float kid = sdEllipsoid(kq, vec3(.125, .23, .1));
    kid = smax(kid, -sdSphere(kq - vec3(-sx * .15, 0., .02), .075), .045);
    res = U(res, vec2(kid, 25.));
    vec3 aq = kq - vec3(sx * .005, .235, 0.);
    aq.z *= 1.6;
    float s = 1. + .1 * pA;
    float adr = sdRoundCone(aq / s, vec3(0., -.03, 0.), vec3(-sx * .035, .085, 0.), .085, .026) * s / 1.6;
    res = U(res, vec2(adr, pA > .5 ? 73. : 24.));
    // Pancreas: head in the curve on the patient's right, body and tail rising toward the left kidney.
    float pan = sdRoundCone(q, vec3(-.2, -.6, .13), vec3(.04, -.53, .12), .07, .052);
    pan = smin(pan, sdRoundCone(q, vec3(.04, -.53, .12), vec3(.36, -.42, .03), .052, .032), .04);
    pan = smin(pan, sdSphere(q - vec3(-.17, -.67, .11), .045), .04);
    res = U(res, vec2(pan, 26.));
  }

  // Hormone routes from the pituitary, drawn as dotted lines: one to the thyroid, one that parts in the
  // chest for the two adrenal glands.
  vec3 B1 = branchMid(sx), B2 = branchEnd(sx);
  float routes = 1e5;
  if (sdBox(q - vec3(0., 1.37, .16), vec3(.04, .3, .09)) < res.x) routes = min(dots(q, T0, T1, .05, .014), dots(q, T1, T2, .05, .014));
  if (sdBox(q - vec3(0., 1.05, .01), vec3(.04, .58, .1)) < res.x) routes = min(routes, min(dots(q, A0, A1, .055, .014), dots(q, A1, A2, .055, .014)));
  if (sdBox(q - vec3(.14 * sx, .16, -.07), vec3(.18, .38, .06)) < res.x) routes = min(routes, min(dots(q, A2, B1, .055, .014), dots(q, B1, B2, .055, .014)));
  res = U(res, vec2(routes, 27.));

  // Hormone signals: short trains of glowing particles running along the routes.
  float sig = 1e5;
  for (int i = 0; i < 3; i++) {
    float lag = float(i) * .03, r = .042 - .008 * float(i);
    float u = along(.16 + lag, .44 + lag);
    if (u > 0. && u < 1.) sig = min(sig, sdSphere(q - polyAt(T0, T1, T2, u), r));
    float v = along(.16 + lag, .82 + lag) * 2.;
    if (v > 0. && v < 1.) sig = min(sig, sdSphere(q - polyAt(A0, A1, A2, v), r));
    if (v >= 1. && v < 2.) sig = min(sig, sdSphere(q - polyAt(A2, B1, B2, v - 1.), r));
  }
  res = U(res, vec2(sig, 68.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 79.5 && m < 80.5) return .0012 * noise3(p * 30.);
  if (m > 25.5 && m < 26.5) return .004 * smoothstep(.1, .5, cellular(p * 26.));
  if ((m > 22.5 && m < 23.5) || (m > 20.5 && m < 21.5)) return .002 * noise3(p * 45.);
  if (m > 24.5 && m < 25.5) return .002 * noise3(p * 30.);
  return 0.;
}`};export{e as scene};
