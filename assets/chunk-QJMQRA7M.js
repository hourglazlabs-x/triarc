import"./chunk-KR4ZLU5I.js";var e={id:"N03",cam:[.35,1.9,4.4],target:[0,-.08,0],fov:2.6,floor:-1.55,ring:1.85,poster:1.9,glsl:`
const float SP = .26, CUTY = .06, RI = .6, HL = 1., TA = 3.2;

vec3 palette(int i) {
  if (i == 0) return vec3(.96, .42, .10);   // outer membrane
  if (i == 1) return vec3(.96, .36, .12);   // inner boundary membrane
  if (i == 2) return vec3(1., .80, .40);    // ATP synthase heads
  if (i == 3) return vec3(.46, .14, .42);   // matrix granules
  if (i == 4) return vec3(.36, .40, 1.);    // mitochondrial DNA
  if (i == 5) return vec3(.14, .40, .56);   // proton glow (faint)
  if (i == 6) return vec3(1., .72, .18);    // ATP
  return vec3(.86, .14, .07);               // cristae
}

/** Crista i: its side (+1 attached to the far wall, -1 to the near wall) and whether it exists. */
float side(float ci) { return mod(ci, 2.) < .5 ? 1. : -1.; }
/** Crista ci is a wavy curtain: its offset along the long axis at height y and depth z. */
float wob(float y, float z, float ci) { return .085 * sin(z * 4.5 + ci * 1.9) + .02 * sin(y * 9. + ci); }

vec2 map(vec3 p) {
  vec3 q = p - vec3(0., .02, 0.);
  q.xz *= rot(.72);
  q.xy *= rot(-.16);
  float bound = sdCapsule(q, vec3(-HL, 0., 0.), vec3(HL, 0., 0.), 1.15);
  if (bound > .3) return vec2(bound, 0.);
  float t = uTime;

  // Outer membrane: smooth translucent envelope, breathing very slightly.
  float outer = sdCapsule(q, vec3(-HL, 0., 0.), vec3(HL, 0., 0.), .74) + .01 * sin(q.x * 4. + t * .9) * sin(q.z * 5. + 1.);
  vec2 res = vec2(SHELL(outer), 80.);

  // ATP rising from the crista edges and drifting out through the membranes (drawn in both layers).
  float i0 = floor(q.x / SP);
  float atp = 1e5;
  for (int c = 0; c < 2; c++) {
    float ci = i0 + float(c);
    float xc = ci * SP;
    if (xc < -1.25 || xc > 1.01) continue;
    float sd = side(ci);
    for (int k = 0; k < 2; k++) {
      float fk = float(k);
      float h = hash11(ci * 7.13 + fk * 3.1);
      float s = fract(t / TA + h);
      vec3 st = vec3(xc + (fk - .5) * .1, -.44 + .3 * hash11(ci * 3.7 + fk), -.16 * sd);
      vec3 pos = st + vec3((fk - .5) * .1 * s, 1.2 * s, -sd * .3 * s * (h - .4));
      float r = .03 * smoothstep(0., .1, s) * (1. - smoothstep(.62, 1., s));
      atp = min(atp, length(q - pos) - r);
    }
  }
  res = U(res, vec2(atp, 66.));
  if (!gSkipShell) return res;

  // Inner membrane, opened along the top, folded into cristae that alternate from each side.
  float din = sdCapsule(q, vec3(-HL, 0., 0.), vec3(HL, 0., 0.), RI);
  float cut = q.y - CUTY;
  float inner = max(abs(din) - .018, cut);
  float cr = 5., glowI = 0., knob = 1e5;   // finite: smin with 1e5 would quantize the result
  for (int c = 0; c < 2; c++) {
    float ci = i0 + float(c);
    float xc = ci * SP;
    if (xc < -1.25 || xc > 1.01) continue;
    float sd = side(ci);
    float plate = smax(abs(q.x - xc - wob(q.y, q.z, ci)) - .022, -(sd * q.z + .15), .05) * .9;
    if (plate < cr) { cr = plate; glowI = wave(-sd * q.z + ci * .37, t, .42, 1.7, .045); }
    // ATP synthase heads in a row along the free edge.
    float yj = clamp(floor((q.y + .02) / .1 + .5), -5., 0.) * .1 - .02;
    vec3 kp = vec3(xc + wob(yj, -.172 * sd, ci), yj, -.172 * sd);
    float kd = length(q - kp) - .026;
    if (din < -.03) knob = min(knob, kd);
  }
  cr = max(smax(cr, din + .01, .03), cut);
  float mem = smin(inner, cr, .03);
  res = U(res, vec2(mem, cr < inner + .005 ? (glowI > .55 ? 65. : 27.) : 21.));
  res = U(res, vec2(knob, 22.));

  // Matrix granules, one between each pair of cristae.
  float gi = floor(q.x / SP);
  vec3 gp = vec3((gi + .5) * SP, -.32 + .16 * (hash11(gi * 5.1) - .5), .5 * (hash11(gi * 9.7) - .5));
  if (gp.x > -1.2 && gp.x < 1.) res = U(res, vec2(length(q - gp) - .045, 23.));

  // A loop of mitochondrial DNA in the matrix beyond the last crista.
  vec3 m = q - vec3(1.27, -.2, 0.);
  if (length(m) < .3) {
    m.yz *= rot(.3);
    float a = atan(m.z, m.x);
    float R = .14 + .02 * sin(a * 5. + t * .6);
    res = U(res, vec2((length(vec2(length(m.xz) - R, m.y + .015 * sin(a * 3.))) - .02) * .8, 24.));
  }
  return res;
}

float sceneDetail(vec3 p, float m) {
  return 0.;
}`};export{e as scene};
