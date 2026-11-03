import"./chunk-KR4ZLU5I.js";var e={id:"N05",cam:[.95,1.3,5.25],target:[0,.12,0],floor:-1.75,ring:1.75,poster:13.8,glsl:`
const float T = 6., R1 = 1.3, R2 = 1.06, R3 = .82, D0 = .3;
const vec3 C0 = vec3(0., .12, 0.);
const vec3 DIRS[3] = vec3[3](vec3(.8, .25, .55), vec3(-.75, .45, .48), vec3(.1, -.55, .83));
mat2 gA, gB, gC;          // ring turns: outer about y, middle about x, inner about y
vec3 gCore, gU;           // core position (relative to C0) and push direction
float gD, gSense, gAct, gHit;

vec3 palette(int i) {
  if (i == 0) return vec3(.24, .72, .46);   // gimbal rings
  if (i == 1) return vec3(1., .74, .26);    // pins, set-point cross
  if (i == 2) return vec3(1., .80, .36);    // sensors at rest
  if (i == 3) return vec3(.55, .95, 1.);    // sensors firing
  if (i == 4) return vec3(1., .66, .16);    // effector tethers
  if (i == 5) return vec3(.52, 1., .64);    // core
  if (i == 6) return vec3(.30, .80, .52);   // set-point zone
  if (i == 7) return vec3(1., .36, .10);    // disturbance
  return vec3(.20, .62, .58);               // inner ring
}

float ringBand(vec3 q, float R) { vec2 d = abs(vec2(length(q.xy) - R, q.z)) - vec2(.028, .07); return length(max(d, 0.)) + min(max(d.x, d.y), 0.) - .01; }

void timeline() {
  float n = floor(uTime / T), s = fract(uTime / T);
  int k = int(mod(n, 3.));
  gU = normalize(DIRS[k]);
  float kick = smoothstep(.17, .22, s);
  float relax = s < .3 ? 1. : exp(-(s - .3) * 9.) * cos((s - .3) * 14.);
  gD = D0 * kick * relax;
  gCore = gU * gD;
  gSense = smoothstep(.17, .22, s) * (1. - smoothstep(.36, .44, s));
  gAct = smoothstep(.22, .27, s) * (1. - smoothstep(.56, .66, s));
  gHit = s;
  float a1 = uTime * .22, a2 = uTime * .37 + 1., a3 = uTime * .29 + 2.;
  gA = rot(a1); gB = rot(a2); gC = rot(a3);
}

vec2 map(vec3 p) {
  vec3 q = p - C0;
  float bound = sdSphere(q, 2.4);
  if (bound > .3) return vec2(bound, 0.);
  timeline();

  // Gimbal frames: outer ring turns about the vertical, the middle ring about the outer ring's x pins,
  // the inner ring about the middle ring's y pins.
  vec3 p1 = q; p1.xz *= gA;
  vec3 p2 = p1; p2.yz *= gB;
  vec3 p3 = p2; p3.xz *= gC;
  vec2 res = vec2(ringBand(p1, R1), 21.);
  res = U(res, vec2(ringBand(p2, R2), 20.));
  res = U(res, vec2(ringBand(p3, R3), 28.));
  float pins = min(sdCapsule(vec3(abs(p1.x), p1.yz), vec3(R2, 0., 0.), vec3(R1, 0., 0.), .04), sdCapsule(vec3(p2.x, abs(p2.y), p2.z), vec3(0., R3, 0.), vec3(0., R2, 0.), .04));
  pins = min(pins, sdSphere(vec3(q.x, abs(q.y) - R1 - .03, q.z), .085));
  res = U(res, vec2(pins, 21.));

  // Sensors: six beads on the middle ring; those facing the push light up while the core is off centre.
  vec3 u2 = gU; u2.xz *= gA; u2.yz *= gB;
  float sa = atan(p2.y, p2.x);
  float sk = floor(sa / (TAU / 6.) + .5);
  vec2 sd = vec2(cos(sk * TAU / 6.), sin(sk * TAU / 6.));
  float face = clamp(dot(vec3(sd, 0.), u2), 0., 1.) * gSense;
  float bead = length(p2 - vec3(sd * (R2 + .02), 0.)) - .06 - .035 * face;
  res = U(res, vec2(bead, face > .3 ? 63. : 22.));

  // Effectors: tethers from the inner ring to the core, pulsing gold while they pull it back.
  vec3 c3 = gCore; c3.xz *= gA; c3.yz *= gB; c3.xz *= gC;
  vec3 a3 = vec3(abs(p3.x), abs(p3.y), p3.z);
  vec3 c3m = vec3(c3.x * sign(p3.x), c3.y * sign(p3.y), c3.z);
  vec3 anchor = vec3(R3 * .7071, R3 * .7071, 0.);
  vec3 pa = a3 - anchor, ba = c3m - anchor;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
  float pulse = wave(h * length(ba), uTime, 1.1, .42, .08) * gAct;
  float teth = length(pa - ba * h) - .02 - .016 * pulse;
  res = U(res, vec2(teth, pulse > .3 ? 64. : 24.));

  // The core, the set-point cross it leaves behind when pushed, and the translucent set-point zone.
  res = U(res, vec2(sdSphere(q - gCore, .19), 65.));
  float cr = min(min(sdCapsule(q, vec3(-.11, 0., 0.), vec3(.11, 0., 0.), .012), sdCapsule(q, vec3(0., -.11, 0.), vec3(0., .11, 0.), .012)), sdCapsule(q, vec3(0., 0., -.11), vec3(0., 0., .11), .012));
  res = U(res, vec2(cr, 21.));
  res = U(res, vec2(SHELL(sdSphere(q, .4)), 46.));

  // The disturbance: a small comet that flies in and strikes the core.
  if (gHit < .24) {
    float f = smoothstep(0., .19, gHit);
    vec3 hd = -gU * mix(2.1, .2, f);
    float sz = smoothstep(0., .03, gHit) * (1. - smoothstep(.19, .23, gHit));
    float com = min(sdSphere(q - hd, .1 * sz), sdTaper(q, hd, hd - gU * .55 * sz, .08 * sz, .006));
    res = U(res, vec2(com, 67.));
  }
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 19.5 && m < 21.5 || m > 27.5 && m < 28.5) return .0015 * sin(atan(p.y, length(p.xz)) * 90.);
  return 0.;
}`};export{e as scene};
