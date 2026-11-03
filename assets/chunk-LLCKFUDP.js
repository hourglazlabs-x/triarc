import{b as l}from"./chunk-Z7BKUDRS.js";var n=`#version 300 es
#define QUALITY __QUALITY__
precision highp float;
precision highp int;
out vec4 fragColor;
uniform vec2 uRes;
uniform vec2 uOffset;
uniform vec3 uCamPos;
uniform vec3 uCamTarget;
uniform float uFov;
uniform vec3 uAccent;
uniform float uFloor;
uniform float uRing;
uniform float uTime;
uniform int uZero;
bool gSkipShell = false;
const vec3 TIER[7] = vec3[7](__TIER__);

#define PI 3.14159265359
#define TAU 6.28318530718
#define ZERO (min(uZero, 0))
#define SHELL(d) (gSkipShell ? 1e5 : (d))

#if QUALITY >= 3
#define MARCH_STEPS 320
#define AO_STEPS 5
#define SHADOW_STEPS 40
#elif QUALITY == 2
#define MARCH_STEPS 200
#define AO_STEPS 4
#define SHADOW_STEPS 20
#else
#define MARCH_STEPS 140
#define AO_STEPS 3
#define SHADOW_STEPS 0
#endif

// \u2500\u2500 Maths and noise \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
float dot2(vec3 v) { return dot(v, v); }
float hash11(float p) { p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash21(vec2 p) { vec3 q = fract(vec3(p.xyx) * .1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float hash31(vec3 p) { p = fract(p * .1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float noise3(vec3 x) {
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3. - 2. * f);
  return mix(mix(mix(hash31(i), hash31(i + vec3(1, 0, 0)), f.x), mix(hash31(i + vec3(0, 1, 0)), hash31(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(hash31(i + vec3(0, 0, 1)), hash31(i + vec3(1, 0, 1)), f.x), mix(hash31(i + vec3(0, 1, 1)), hash31(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
float fbm(vec3 p) { float a = .5, s = 0.; for (int i = 0; i < 4; i++) { s += a * noise3(p); p *= 2.03; a *= .5; } return s; }
/** Distance to the nearest of a jittered grid of points: a cell-like pattern for surface relief. */
float cellular(vec3 p) {
  vec3 i = floor(p), f = fract(p); float d = 8.;
  for (int z = -1; z <= 1; z++) for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec3 g = vec3(x, y, z);
    vec3 o = vec3(hash31(i + g), hash31(i + g + 17.1), hash31(i + g + 31.7));
    d = min(d, dot2(g + o - f));
  }
  return sqrt(d);
}

// \u2500\u2500 Distance functions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
float sdSphere(vec3 p, float r) { return length(p) - r; }
float sdEllipsoid(vec3 p, vec3 r) { float k0 = length(p / r); float k1 = length(p / (r * r)); return k0 * (k0 - 1.) / k1; }
float sdCapsule(vec3 p, vec3 a, vec3 b, float r) { vec3 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.); return length(pa - ba * h) - r; }
float sdTaper(vec3 p, vec3 a, vec3 b, float ra, float rb) { vec3 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.); return (length(pa - ba * h) - mix(ra, rb, h)) * .9; }
/** Exact round cone between spheres (a, r1) and (b, r2). */
float sdRoundCone(vec3 p, vec3 a, vec3 b, float r1, float r2) {
  vec3 ba = b - a; float l2 = dot(ba, ba); float rr = r1 - r2; float a2 = l2 - rr * rr; float il2 = 1. / l2;
  vec3 pa = p - a; float y = dot(pa, ba); float z = y - l2; float x2 = dot2(pa * l2 - ba * y); float y2 = y * y * l2; float z2 = z * z * l2;
  float k = sign(rr) * rr * rr * x2;
  if (sign(z) * a2 * z2 > k) return sqrt(x2 + z2) * il2 - r2;
  if (sign(y) * a2 * y2 < k) return sqrt(x2 + y2) * il2 - r1;
  return (sqrt(x2 * a2 * il2) + y * rr) * il2 - r1;
}
float sdTorus(vec3 p, vec2 t) { vec2 q = vec2(length(p.xz) - t.x, p.y); return length(q) - t.y; }
float sdBox(vec3 p, vec3 b) { vec3 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)), 0.); }
float sdRoundBox(vec3 p, vec3 b, float r) { vec3 q = abs(p) - b + r; return length(max(q, 0.)) + min(max(q.x, max(q.y, q.z)), 0.) - r; }
float sdCylinder(vec3 p, float h, float r) { vec2 d = abs(vec2(length(p.xz), p.y)) - vec2(r, h); return min(max(d.x, d.y), 0.) + length(max(d, 0.)); }
float sdHexPrism(vec3 p, vec2 h) {
  const vec3 k = vec3(-0.8660254, 0.5, 0.57735); p = abs(p);
  p.xy -= 2.0 * min(dot(k.xy, p.xy), 0.0) * k.xy;
  vec2 d = vec2(length(p.xy - vec2(clamp(p.x, -k.z * h.x, k.z * h.x), h.x)) * sign(p.y - h.x), p.z - h.y);
  return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
}
/** Distance to a quadratic Bezier curve A\u2013B\u2013C, and the curve parameter of the closest point. Keep A, B, C non-collinear. */
vec2 sdBezier(vec3 pos, vec3 A, vec3 B, vec3 C) {
  vec3 a = B - A, b = A - 2. * B + C, c = a * 2., d = A - pos;
  float kk = 1. / dot(b, b), kx = kk * dot(a, b), ky = kk * (2. * dot(a, a) + dot(d, b)) / 3., kz = kk * dot(d, a);
  vec2 res; float p = ky - kx * kx, p3 = p * p * p, q = kx * (2. * kx * kx - 3. * ky) + kz, h = q * q + 4. * p3;
  if (h >= 0.) {
    h = sqrt(h); vec2 x = (vec2(h, -h) - q) / 2.; vec2 uv = sign(x) * pow(abs(x), vec2(1. / 3.));
    float t = clamp(uv.x + uv.y - kx, 0., 1.); res = vec2(dot2(d + (c + b * t) * t), t);
  } else {
    float z = sqrt(-p), v = acos(q / (p * z * 2.)) / 3., m = cos(v), n = sin(v) * 1.732050808;
    vec3 t = clamp(vec3(m + m, -n - m, n - m) * z - kx, 0., 1.);
    float dis = dot2(d + (c + b * t.x) * t.x); res = vec2(dis, t.x);
    dis = dot2(d + (c + b * t.y) * t.y); if (dis < res.x) res = vec2(dis, t.y);
  }
  return vec2(sqrt(res.x), res.y);
}
/** Point on the quadratic Bezier A\u2013B\u2013C at parameter t. */
vec3 bezier(vec3 A, vec3 B, vec3 C, float t) { return mix(mix(A, B, t), mix(B, C, t), t); }
float smin(float a, float b, float k) { float h = clamp(.5 + .5 * (b - a) / k, 0., 1.); return mix(b, a, h) - k * h * (1. - h); }
float smax(float a, float b, float k) { return -smin(-a, -b, k); }
vec2 U(vec2 a, vec2 b) { return a.x < b.x ? a : b; }
/** Helix tube around the y axis: radius R, pitch P, phase ph, tube radius r. Conservative. */
float sdHelix(vec3 p, float R, float P, float ph, float r) {
  float a = atan(p.z, p.x) + ph;
  float y = p.y - a * P / TAU;
  y = mod(y + P * .5, P) - P * .5;
  return (length(vec2(length(p.xz) - R, y)) - r) * .6;
}
/** Polar repetition around the y axis into n sectors. */
vec3 polarRep(vec3 p, float n) {
  float a = atan(p.z, p.x); float s = TAU / n;
  a = mod(a + s * .5, s) - s * .5;
  return vec3(cos(a) * length(p.xz), p.y, sin(a) * length(p.xz));
}

// \u2500\u2500 Animation helpers (t in seconds) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
/** One heartbeat-like contraction per period P: 0 at rest, 1 at peak; phase in [0, 1) shifts the onset. */
float beat(float t, float P, float phase) { float x = fract(t / P - phase); return smoothstep(0., .08, x) * (1. - smoothstep(.14, .38, x)); }
/** Pulses travelling along a path coordinate s (world units) at the given speed, repeating every spacing; Gaussian of width w. */
float wave(float s, float t, float speed, float spacing, float w) { float x = mod(s - t * speed, spacing); x = min(x, spacing - x); return exp(-x * x / (w * w)); }

vec2 map(vec3 p);
vec3 palette(int i);
float sceneDetail(vec3 p, float m);

// \u2500\u2500 Lighting \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
vec3 calcNormal(vec3 p) {
  vec3 n = vec3(0.);
  for (int i = ZERO; i < 4; i++) {
    vec3 e = .5773 * (2. * vec3(float(((i + 3) >> 1) & 1), float((i >> 1) & 1), float(i & 1)) - 1.);
    n += e * map(p + e * .0008).x;
  }
  return normalize(n);
}
vec3 applyDetail(vec3 p, vec3 n, float m) {
  const float e = .0015;
  float d0 = sceneDetail(p, m);
  vec3 g = vec3(sceneDetail(p + vec3(e, 0., 0.), m), sceneDetail(p + vec3(0., e, 0.), m), sceneDetail(p + vec3(0., 0., e), m)) - d0;
  g /= e;
  g -= n * dot(g, n);
  return normalize(n - g);
}
float calcAO(vec3 p, vec3 n) {
  float occ = 0., sca = 1.;
  for (int i = ZERO; i < AO_STEPS; i++) { float h = .02 + .12 * float(i) / float(AO_STEPS - 1); float d = map(p + h * n).x; occ += (h - d) * sca; sca *= .9; }
  return clamp(1. - 2. * occ * 5. / float(AO_STEPS), 0., 1.);
}
float softShadow(vec3 ro, vec3 rd) {
#if SHADOW_STEPS > 0
  bool prev = gSkipShell; gSkipShell = true;
  float res = 1., t = .03;
  for (int i = ZERO; i < SHADOW_STEPS; i++) {
    float h = map(ro + rd * t).x;
    res = min(res, 8. * h / t);
    t += clamp(h, .02, .3);
    if (res < .002 || t > 5.) break;
  }
  gSkipShell = prev;
  return clamp(res, 0., 1.);
#else
  return 1.;
#endif
}

struct Hit { float t; float m; float glow; bool ok; };
Hit march(vec3 ro, vec3 rd, float tmax) {
  Hit h; h.t = 0.; h.ok = false; h.glow = 0.; h.m = 0.;
  for (int i = ZERO; i < MARCH_STEPS; i++) {
    vec2 d = map(ro + rd * h.t);
    h.glow += exp(-max(d.x, 0.) * 16.) * .01;
    if (d.x < .0005 * h.t + .0003) { h.ok = true; h.m = d.y; break; }
    h.t += d.x * .8;
    if (h.t > tmax) break;
  }
  return h;
}

// \u2500\u2500 Stage \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
vec3 background(vec3 rd, vec2 uv) {
  vec3 c = mix(vec3(.012, .017, .026), vec3(.05, .07, .10), smoothstep(-.5, .7, rd.y));
  vec2 q = uv - vec2(0., .12);
  c += vec3(.10, .28, .38) * exp(-dot(q, q) * 1.5) * .45;
  // Stars fixed in world directions, so they turn with the camera.
  vec2 sp = vec2(atan(rd.z, rd.x), asin(clamp(rd.y, -1., 1.))) * 14.3;
  vec2 id = floor(sp); vec2 f = fract(sp) - .5; float h = hash21(id);
  if (h > .86) { vec2 o = vec2(hash11(h * 91.1), hash11(h * 37.3)) - .5; float d = length(f - o * .7); c += vec3(.35, .75, .95) * smoothstep(.09, 0., d) * (h - .86) * 2.2 * (.75 + .25 * sin(uTime * 1.7 + h * 40.)); }
  return c;
}
vec3 floorShade(vec3 p, vec3 bg) {
  float r = length(p.xz);
  vec2 gp = p.xz * 1.4; vec2 g = abs(fract(gp) - .5) / max(fwidth(gp), vec2(1e-4));
  float grid = 1. - min(min(g.x, g.y), 1.);
  vec3 c = vec3(.02, .03, .045);
  c += vec3(.25, .62, .85) * grid * .16 * exp(-r * .28);
  c += vec3(.40, .90, 1.0) * exp(-pow((r - uRing) * 22., 2.)) * (1.45 + .15 * sin(uTime * 2.1));
  c += uAccent * exp(-pow((r - uRing * 1.16) * 34., 2.)) * .9;
  // A slowly turning dashed outer ring.
  float dash = step(.5, fract(atan(p.z, p.x) / TAU * 60. - uTime * .04));
  c += uAccent * exp(-pow((r - uRing * 1.3) * 60., 2.)) * dash * .55;
  c += vec3(.15, .45, .65) * exp(-r * r * .9) * .35;
  float fade = exp(-max(r - uRing * 1.6, 0.) * .45);
  return mix(bg, c, fade);
}
/** Hologram light column rising from the projector ring. */
vec3 beam(vec3 ro, vec3 rd, float tEnd) {
  vec2 o = ro.xz, d = rd.xz;
  float a = dot(d, d), b = dot(o, d), c = dot(o, o) - uRing * uRing;
  float disc = b * b - a * c;
  if (disc <= 0. || a < 1e-6) return vec3(0);
  float s = sqrt(disc);
  float t0 = max((-b - s) / a, 0.), t1 = min((-b + s) / a, tEnd);
  if (t1 <= t0) return vec3(0);
  float acc = 0.;
  for (int i = 0; i < 12; i++) {
    float t = mix(t0, t1, (float(i) + .5) / 12.);
    float y = ro.y + rd.y * t - uFloor;
    acc += (y > 0. ? exp(-y * .55) : 0.);
  }
  return vec3(.30, .72, .95) * acc / 12. * (t1 - t0) * .055 * (.94 + .06 * sin(uTime * 3.1));
}

// \u2500\u2500 Materials \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
bool isShell(float m) { int k = int(m + .5); return k == 5 || (k >= 10 && k <= 16) || (k >= 40 && k < 60) || (k >= 80 && k < 100); }
bool isThin(float m) { int k = int(m + .5); return k >= 80 && k < 100; }
/** Base colour, emission, roughness, rim strength and wrap (soft light around the terminator). */
void material(float m, out vec3 base, out float emit, out float rough, out float rim, out float wrap) {
  int k = int(m + .5);
  base = vec3(.82, .90, .97); emit = 0.; rough = .35; rim = .95; wrap = .15;
  if (k == 2) { base = uAccent; emit = .32; }
  else if (k == 3) { base = vec3(.70, .95, 1.); emit = 1.35; }
  else if (k == 4) { base = vec3(.26, .32, .40); }
  else if (k == 5) { base = vec3(.62, .84, 1.); rim = 1.5; }
  else if (k >= 10 && k <= 16) { base = TIER[k - 10]; emit = .38; rim = 1.5; }
  else if (k >= 20 && k < 40) { base = palette(k - 20); emit = .03; rough = .42; rim = .6; wrap = .45; }
  else if (k >= 40 && k < 60) { base = palette(k - 40); emit = .14; rim = 1.35; wrap = .3; }
  else if (k >= 60 && k < 80) { base = palette(k - 60); emit = 1.35; }
  else if (k >= 80 && k < 100) { base = palette(k - 80); emit = .1; rim = 1.15; wrap = .3; }
}
/** Colour a shell lends to what is seen through it. */
vec3 tintOf(float m) {
  int k = int(m + .5);
  if ((k >= 10 && k <= 16) || (k >= 40 && k < 60) || (k >= 80 && k < 100)) { vec3 b; float e, r, ri, w; material(m, b, e, r, ri, w); return mix(vec3(1.), b, k >= 80 ? .12 : .2); }
  return vec3(1.);
}
vec3 shade(vec3 p, vec3 n, vec3 rd, float m) {
  vec3 base; float emit, rough, rim, wrap;
  material(m, base, emit, rough, rim, wrap);
  int k = int(m + .5);
  vec3 V = -rd;
  vec3 L = normalize(vec3(-.55, .78, .45));
  vec3 B = normalize(vec3(.65, .25, -.7));
  vec3 F = normalize(vec3(.35, -.35, .85));
  float ndl = dot(n, L);
  float dif = clamp((ndl + wrap) / (1. + wrap), 0., 1.);
  float back = clamp(dot(n, B), 0., 1.);
  float fill = clamp(dot(n, F) * .5 + .5, 0., 1.);
  float fres = pow(1. - clamp(dot(n, V), 0., 1.), 2.6);
  float ao = calcAO(p, n);
  float sh = k >= 60 ? 1. : softShadow(p + n * .012, L);
  float spe = pow(clamp(dot(n, normalize(L + V)), 0., 1.), mix(90., 20., rough)) * (1. - rough * .55);
  vec3 cyan = vec3(.35, .86, 1.);
  vec3 c = base * vec3(1., .96, .91) * (.07 + .84 * dif * mix(.35, 1., sh)) * ao;
  c += base * vec3(.25, .35, .5) * fill * .2 * ao;
  c += cyan * back * .28 * ao;
  c += base * base * smoothstep(0., .6, 1. - dif) * wrap * .3 * ao;
  c += spe * .65 * ao * sh;
  c += mix(cyan, base, k >= 10 ? .55 : 0.) * fres * rim;
  c += base * emit;
  c *= .97 + .03 * sin(p.y * 95.);
  return c;
}

void main() {
  vec2 frag = gl_FragCoord.xy + uOffset;
  vec2 uv = (2. * frag - uRes) / uRes.y;
  vec3 ro = uCamPos;
  vec3 ww = normalize(uCamTarget - ro), uu = normalize(cross(ww, vec3(0, 1, 0))), vv = cross(uu, ww);
  vec3 rd = normalize(uv.x * uu + uv.y * vv + uFov * ww);
  vec3 bg = background(rd, uv);
  float tf = rd.y < 0. ? (uFloor - ro.y) / rd.y : 1e9;
  vec3 behind = tf < 1e8 ? floorShade(ro + rd * tf, bg) : bg;
  float tmax = min(tf, 40.);
  vec3 col = behind, shellCol = vec3(0.), shellTint = vec3(1.);
  float shellA = 0., glow = 0., tEnd = tf, travelled = 0.;
  vec3 o = ro;
  for (int layer = ZERO; layer < 2; layer++) {
    Hit h = march(o, rd, tmax - travelled);
    glow += h.glow;
    if (!h.ok) { col = behind; break; }
    vec3 p = o + rd * h.t;
    if (layer == 0) tEnd = h.t;
    vec3 n = applyDetail(p, calcNormal(p), h.m);
    vec3 c = shade(p, n, rd, h.m);
    if (layer == 0 && isShell(h.m)) {
      shellCol = c;
      float f2 = pow(1. - clamp(dot(n, -rd), 0., 1.), 2.);
      shellA = isThin(h.m) ? .1 + .4 * f2 : .28 + .45 * f2;
      shellTint = tintOf(h.m);
      gSkipShell = true;
      travelled = h.t + .015;
      o = p + rd * .015;
      continue;
    }
    col = c;
    break;
  }
  gSkipShell = false;
  col = mix(col * shellTint, shellCol, shellA);
  col += beam(ro, rd, tEnd);
  col += (vec3(.35, .82, 1.) * .55 + uAccent * .45) * glow * .55;
  col = (col * (2.51 * col + .03)) / (col * (2.43 * col + .59) + .14);
  vec2 q = frag / uRes;
  col *= .45 + .55 * pow(16. * q.x * q.y * (1. - q.x) * (1. - q.y), .2);
  col += (hash11(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + fract(uTime)) - .5) * .014;
  fragColor = vec4(pow(clamp(col, 0., 1.), vec3(1. / 2.2)), 1.);
}
`;var s=["T01","T02","T03","T04","T05","T06","T07"];function f(e){let[t=0,a=0,r=0]=[1,3,5].map(i=>parseInt(e.slice(i,i+2),16)/255),o=i=>Math.min(1,(i*.72+.28)*1.15);return[o(t),o(a),o(r)]}function p(e,t){return e.accent??f(l[t])}function v(e){let[t=0,a=0,r=0]=[1,3,5].map(i=>parseInt(e.slice(i,i+2),16)/255),o=i=>Math.min(1,(i*.82+.12)*1.12);return[o(t),o(a),o(r)]}var m=s.map(e=>`vec3(${v(l[e]).map(t=>t.toFixed(3)).join(", ")})`).join(", ");function g(e,t){let a=[];return/vec3\s+palette\s*\(\s*int/.test(e.glsl)||a.push("vec3 palette(int i) { return vec3(.82, .9, .97); }"),/float\s+sceneDetail\s*\(/.test(e.glsl)||a.push("float sceneDetail(vec3 p, float m) { return 0.; }"),`${n.replace("__QUALITY__",String(t)).replace("__TIER__",m)}
${e.glsl}
${a.join(`
`)}
`}var y=`#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0., 1.); }
`,c=Math.PI/180;function d(e){let[t,a,r]=[e.cam[0]-e.target[0],e.cam[1]-e.target[1],e.cam[2]-e.target[2]],o=Math.hypot(t,a,r);return{az:Math.atan2(t,r)/c,el:Math.asin(a/o)/c,dist:o}}function k(e){let t=d(e),a=e.orbit?.az?[t.az+e.orbit.az[0],t.az+e.orbit.az[1]]:null,[r,o]=e.orbit?.el??[4,68];return{az:a,el:[Math.min(r,t.el),Math.max(o,t.el)],dist:[t.dist*.62,t.dist*1.35]}}function S(e,t){return{az:t.az?Math.min(t.az[1],Math.max(t.az[0],e.az)):e.az,el:Math.min(t.el[1],Math.max(t.el[0],e.el)),dist:Math.min(t.dist[1],Math.max(t.dist[0],e.dist))}}function h(e,t){let[a,r,o]=e.target,i=Math.cos(t.el*c);return[a+t.dist*i*Math.sin(t.az*c),r+t.dist*Math.sin(t.el*c),o+t.dist*i*Math.cos(t.az*c)]}function z(e,t,a,r){return{uCamPos:h(e,a),uCamTarget:e.target,uFov:[e.fov??2.4],uAccent:p(e,t),uFloor:[e.floor??-1.6],uRing:[e.ring??1.7],uTime:[r]}}export{p as a,g as b,y as c,d,k as e,S as f,h as g,z as h};
