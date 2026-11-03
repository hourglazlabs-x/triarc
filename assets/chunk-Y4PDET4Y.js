import"./chunk-KR4ZLU5I.js";var e={id:"N06",cam:[.55,.55,6.2],target:[.05,-.05,0],fov:2.55,floor:-2.25,ring:1.6,poster:2.6,glsl:`
const float T = 7.;
const vec4 BASE_A[10] = vec4[10](vec4(-1.126, 1.245, -.234, 0.), vec4(-1.195, .954, -.256, 1.), vec4(-.989, .746, -.190, 0.), vec4(-.715, .829, -.101, 1.), vec4(-.646, 1.120, -.078, 1.), vec4(-.851, 1.328, -.145, 1.), vec4(-.782, 1.619, -.122, 0.), vec4(-.361, 1.141, .014, 0.), vec4(-.255, .862, .049, 1.), vec4(-.473, .670, -.022, 0.));
const ivec2 BASE_B[11] = ivec2[11](ivec2(0, 1), ivec2(1, 2), ivec2(2, 3), ivec2(3, 4), ivec2(4, 5), ivec2(5, 0), ivec2(4, 7), ivec2(7, 8), ivec2(8, 9), ivec2(9, 3), ivec2(5, 6));
const vec4 RIB_A[8] = vec4[8](vec4(-.453, .370, -.015, 2.), vec4(-.676, .180, .051, 2.), vec4(-.567, -.099, .033, 2.), vec4(-.278, -.081, -.044, 2.), vec4(-.208, .209, -.074, 3.), vec4(-.833, .244, .298, 3.), vec4(-.630, -.279, .265, 3.), vec4(-.175, -.274, -.250, 2.));
const ivec2 RIB_B[8] = ivec2[8](ivec2(0, 1), ivec2(1, 2), ivec2(2, 3), ivec2(3, 4), ivec2(4, 0), ivec2(1, 5), ivec2(2, 6), ivec2(3, 7));
const vec4 PAB_A[9] = vec4[9](vec4(-.078, -.579, -.244, 5.), vec4(.225, -.649, -.171, 4.), vec4(.280, -.529, .120, 5.), vec4(.409, -.498, -.385, 5.), vec4(.322, -.954, -.165, 5.), vec4(.625, -1.024, -.092, 4.), vec4(.680, -.904, .200, 5.), vec4(.809, -.873, -.306, 5.), vec4(.722, -1.329, -.086, 5.));
const ivec2 PAB_B[8] = ivec2[8](ivec2(0, 1), ivec2(1, 4), ivec2(4, 5), ivec2(5, 8), ivec2(1, 2), ivec2(1, 3), ivec2(5, 6), ivec2(5, 7));
const vec4 PG_A[4] = vec4[4](vec4(1.025, -1.399, -.013, 4.), vec4(1.217, -1.165, -.117, 5.), vec4(1.108, -1.675, -.153, 5.), vec4(1.055, -1.428, .305, 5.));
const vec3 PGC = vec3(1.101, -1.417, .006), O3B = vec3(.722, -1.329, -.086);
const vec3 DRIFT = vec3(.78, .32, .2);
vec2 gRes;

vec3 palette(int i) {
  if (i == 0) return vec3(.20, .40, 1.);    // adenine nitrogen
  if (i == 1) return vec3(.34, .56, 1.);    // adenine carbon
  if (i == 2) return vec3(1., .56, .14);    // ribose carbon
  if (i == 3) return vec3(1., .38, .10);    // ribose oxygen
  if (i == 4) return vec3(1., .70, .12);    // phosphorus
  if (i == 5) return vec3(.96, .18, .14);   // phosphate oxygen
  if (i == 6) return vec3(1., .62, .16);    // burst
  if (i == 7) return vec3(1., .68, .18);    // the high-energy bond
  return vec3(.48, .90, 1.);                // rejoining glow
}

float atomR(float c) { return c < 1.5 ? .1 : c < 2.5 ? .094 : c < 3.5 ? .088 : c < 4.5 ? .135 : .09; }
void atom(vec3 p, vec4 a) { float d = length(p - a.xyz) - atomR(a.w); if (d < gRes.x) gRes = vec2(d, 20. + a.w); }
/** A stick between two atoms, each half in its atom's colour. */
void bond(vec3 p, vec4 a, vec4 b) {
  vec3 pa = p - a.xyz, ba = b.xyz - a.xyz;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
  float d = length(pa - ba * h) - .036;
  if (d < gRes.x) gRes = vec2(d, 20. + (h < .5 ? a.w : b.w));
}

vec2 map(vec3 p) {
  p.xz *= rot(.28 * sin(uTime * TAU / 14.));
  float bound = sdBox(p - vec3(.1, -.05, 0.), vec3(1.35, 1.85, .7));
  if (bound > .3) return vec2(bound, 0.);
  float s = fract(uTime / T);
  float away = smoothstep(.3, .58, s) * (1. - smoothstep(.72, .92, s));
  float attached = step(.92, s) + step(s, .3);
  gRes = vec2(5., 0.);

  if (length(p - vec3(-.739, 1.051, -.108)) - .77 < gRes.x) {
    for (int i = 0; i < 10; i++) atom(p, BASE_A[i]);
    for (int i = 0; i < 11; i++) bond(p, BASE_A[BASE_B[i].x], BASE_A[BASE_B[i].y]);
  }
  if (length(p - vec3(-.478, .034, .033)) - .72 < gRes.x) {
    for (int i = 0; i < 8; i++) atom(p, RIB_A[i]);
    for (int i = 0; i < 8; i++) bond(p, RIB_A[RIB_B[i].x], RIB_A[RIB_B[i].y]);
  }
  if (length(p - vec3(.444, -.815, -.125)) - .79 < gRes.x) {
    for (int i = 0; i < 9; i++) atom(p, PAB_A[i]);
    for (int i = 0; i < 8; i++) bond(p, PAB_A[PAB_B[i].x], PAB_A[PAB_B[i].y]);
  }
  bond(p, BASE_A[9], RIB_A[0]);
  bond(p, RIB_A[7], PAB_A[0]);

  // The terminal phosphate: drifts away and turns while free.
  vec3 off = DRIFT * away + vec3(0., .04, .03) * sin(uTime * 1.3) * away;
  vec3 g = p - PGC - off;
  g.xy *= rot(-1.3 * away);
  g.yz *= rot(-.6 * away);
  g += PGC;
  if (length(g - PGC) - .5 < gRes.x) {
    for (int i = 0; i < 4; i++) atom(g, PG_A[i]);
    for (int i = 1; i < 4; i++) bond(g, PG_A[0], PG_A[i]);
  }
  vec2 res = gRes;
  // The bond to it glows while it holds; a burst marks the break, a cyan glow the rejoining.
  if (attached > .5) res = U(res, vec2(sdCapsule(p, O3B, PG_A[0].xyz, .05), 67.));
  vec3 mid = (O3B + PG_A[0].xyz) * .5;
  float burst = sin(PI * clamp((s - .3) / .16, 0., 1.));
  if (burst > .01) {
    vec3 m = p - mid - DRIFT * .12 * burst;
    float d = length(m) - .15 * burst;
    vec3 r = polarRep(m.yxz, 7.).yxz;
    d = min(d, length(r - vec3(0., .12 + .4 * clamp((s - .3) / .16, 0., 1.), 0.)) - .03 * burst);
    res = U(res, vec2(d, 66.));
  }
  float join = sin(PI * clamp((s - .87) / .09, 0., 1.));
  if (join > .01) res = U(res, vec2(length(p - mid) - .11 * join, 68.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 23.5 && m < 24.5) return .002 * noise3(p * 50.);
  return 0.;
}`};export{e as scene};
