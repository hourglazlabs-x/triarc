import"./chunk-KR4ZLU5I.js";var e={id:"N08",cam:[.72,2.2,4.05],target:[0,.16,0],fov:2.4,floor:-1.95,ring:1.75,poster:3.3,glsl:`
const float R = 1.35, T = 8., TH0 = -2.356;
const float NN[8] = float[8](4., 6., 6., 5., 4., 4., 4., 4.);

vec3 hue(float h) { return clamp(abs(mod(h * 6. + vec3(0., 4., 2.), 6.) - 3.) - 1., 0., 1.); }
vec3 palette(int i) {
  if (i < 8) return mix(vec3(1.), hue(float(i) / 8.), .8);
  if (i == 8) return vec3(.42, 1., .86);    // core and its glass orb
  if (i == 9) return vec3(.20, .50, .50);   // cycle track (faint glow)
  if (i == 10) return vec3(.80, .96, .92);  // arrows
  if (i == 11) return vec3(1., .60, .20);   // fuel
  if (i == 12) return vec3(.40, .43, .48);  // CO2 carbon
  if (i == 13) return vec3(.64, .66, .70);  // CO2 oxygen
  if (i == 14) return vec3(1., .62, .10);   // energy sparks
  return vec3(1., .92, .70);                // tokens
}

vec3 nodePos(float i) { float th = TH0 + i * TAU / 8.; return vec3(cos(th), 0., sin(th)) * R; }
/** A CO2 molecule (grey carbon between two oxygens) along axis ax. */
vec2 co2(vec3 q, vec3 c, vec3 ax, float k) {
  q -= c;
  float dc = length(q) - .07 * k;
  float dO = min(length(q - ax * .12 * k), length(q + ax * .12 * k)) - .06 * k;
  return dc < dO ? vec2(dc, 32.) : vec2(dO, 33.);
}

vec2 map(vec3 p) {
  vec3 q = p - vec3(0., .05, 0.);
  q.yz *= rot(-.26);   // the cycle's plane leans a little toward the viewer
  float bound = sdBox(q - vec3(0., .3, 0.), vec3(2.1, 1.05, 2.1));
  if (bound > .3) return vec2(bound, 0.);
  float tok = uTime * TAU / T;
  float a = atan(q.z, q.x), r = length(q.xz);

  // The glowing core inside a glass orb.
  vec2 res = vec2(SHELL(length(q) - .42), 48.);
  res = U(res, vec2(length(q) - .22 - .02 * sin(uTime * 1.6), 68.));

  // The cycle: a faint glowing track with arrowheads between the steps.
  res = U(res, vec2(length(vec2(r - R, q.y)) - .018, 69.));
  float ia = floor((a - TH0 - PI / 8.) / (TAU / 8.) + .5);
  float tha = TH0 + PI / 8. + ia * TAU / 8.;
  vec3 ta = vec3(-sin(tha), 0., cos(tha)), ca = vec3(cos(tha), 0., sin(tha)) * R;
  res = U(res, vec2(sdTaper(q, ca - ta * .1, ca + ta * .11, .075, .004) * .9, 30.));

  // The nearest intermediate: a short zigzag chain of carbon beads, lit for a moment as a token passes.
  float i = floor((a - TH0) / (TAU / 8.) + .5);
  float im = mod(i, 8.);
  float th = TH0 + i * TAU / 8.;
  vec3 tt = vec3(-sin(th), 0., cos(th)), rr = vec3(cos(th), 0., sin(th));
  vec3 l = q - rr * R;
  vec3 ll = vec3(dot(l, tt), l.y, dot(l, rr));
  float n = NN[int(im)];
  float mol = 5.;
  for (int j = 0; j < 6; j++) {
    if (float(j) >= n) break;
    vec3 bc = vec3((float(j) - (n - 1.) * .5) * .125, .05 * (mod(float(j), 2.) * 2. - 1.), 0.);
    mol = smin(mol, length(ll - bc) - .085, .04);
  }
  float g = mod(tok - th, PI);
  res = U(res, vec2(mol, (g < .5 ? 60. : 20.) + im));

  // Tokens running round the cycle.
  vec3 t0 = vec3(cos(tok), 0., sin(tok)) * R;
  res = U(res, vec2(min(length(q - t0), length(q + t0)) - .07, 75.));

  // Every 4 s: fuel arrives at step 0; CO2 leaves steps 2 and 3; energy sparks rise from step 4.
  vec3 up = vec3(0., 1., 0.);
  float u = fract(uTime / 4. + .35);   // arrives (u = .6) as a token reaches step 0 (t = 1 mod 4)
  if (u < .7) {
    vec3 c0 = nodePos(0.), r0 = normalize(c0);
    float f = smoothstep(0., .6, u);
    vec3 A = c0 + r0 * 1.05 + up * .95, B = c0 + r0 * .75 + up * .05;
    vec3 c = bezier(A, B, c0, f);
    vec3 dir = normalize(bezier(A, B, c0, min(f + .03, 1.)) - bezier(A, B, c0, max(f - .03, 0.)));
    float k = smoothstep(0., .08, u) * (1. - smoothstep(.6, .7, u));
    float fu = min(length(q - c - dir * .07), length(q - c + dir * .07)) - .085 * k;
    res = U(res, vec2(fu, 31.));
  }
  for (int s = 0; s < 2; s++) {
    float w = fract((uTime - 3. - float(s)) / 4.);
    if (w < .7) {
      vec3 c0 = nodePos(2. + float(s));
      vec3 out0 = normalize(c0) * .55 + up * .75;
      float k = smoothstep(0., .06, w) * (1. - smoothstep(.5, .7, w));
      vec3 ax = normalize(vec3(cos(w * 5. + float(s)), .4, sin(w * 5.)));
      res = U(res, co2(q, c0 + up * .1 + out0 * w * 1.3, ax, k * 1.15));
    }
  }
  float w = fract((uTime - 1.) / 4.);
  if (w < .7) {
    vec3 c4 = nodePos(4.);
    float k = smoothstep(0., .05, w) * (1. - smoothstep(.45, .7, w));
    float sp = 5.;
    for (int s = 0; s < 3; s++) {
      vec3 o = vec3(cos(float(s) * 2.1), 0., sin(float(s) * 2.1)) * .5 * w;
      sp = min(sp, length(q - c4 - (normalize(c4) * .3 + up * (1.2 + .25 * float(s))) * w * 1.5 - o - up * .12) - .045 * k);
    }
    res = U(res, vec2(sp, 74.));
  }
  return res;
}`};export{e as scene};
