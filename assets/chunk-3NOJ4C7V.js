import{a as t}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var o={id:"D08-orders-of-magnitude",cam:[1.48,1.77,3.89],target:[.07,-.25,0],floor:-1.6,ring:1.9,accent:e(t.D08),poster:1.5,parts:[{name:"observer",view:{az:-10,el:10,zoom:.55}},{name:"first frame",view:{az:-6,el:20,zoom:.55}},{name:"scale counter",view:{az:30,el:-4,zoom:.9}},{name:"outward frames",view:{az:0,el:8}},{name:"outer limit",view:{az:0,el:30}},{name:"inward frames",view:{az:-6,el:-6,zoom:.7}},{name:"carbon atom",view:{az:-8,el:-4,zoom:.55}},{name:"added powers",view:{az:0,el:12}}],glsl:`
const float YW = -.35;                  // the first frame's level: one metre
const float DY = .1;                    // one power of ten, up (outward) or down (inward)
const float W1 = .3;                    // the first frame's width
const float RK = 1.17;                  // the model's step in width per power (standing for ten)
const float XC = 1.;                    // the scale counter's column

vec3 palette(int i) {
  if (i == 0) return vec3(1., .86, .62);    // observer
  if (i == 1) return vec3(1., .78, .42);    // first frame
  if (i == 2) return vec3(.8, .9, 1.);      // scale counter
  if (i == 3) return vec3(.58, .88, 1.);    // outward frames
  if (i == 4) return vec3(.7, .76, 1.);     // outer limit
  if (i == 5) return vec3(.66, 1., .82);    // inward frames
  if (i == 6) return vec3(1., .66, .5);     // carbon atom
  return vec3(.96, .9, 1.);                 // added powers
}

float sdRect(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
float wid(float k) { return W1 * pow(RK, k); }
/** Level k's height; taken apart, the levels spread. */
float lev(float k) { return YW + k * (DY + .035 * uApart); }
/** A square frame of width w at q's origin: a flat rim, dashed when added. */
float rim(vec3 q, float w, bool dashed) {
  float h = w * .5, d = max(abs(sdRect(q.xz, vec2(h))) - .002 - .004 * w, abs(q.y) - .004);
  if (dashed) {
    float L = .05 + .05 * w;
    d = max(d, (abs(fract((abs(abs(q.x) - h) < abs(abs(q.z) - h) ? q.z : q.x) / L + .5) - .5) - .3) * L);
  }
  return d;
}
/** The frame at level k: first (0), outward (1 to 7), added (8, 9 and -6, -7), inward (-1 to -5). Each is built from the
 * size of the one before it: growing outward, shrinking inward. */
vec2 frameAt(vec3 p, float k, float wk) {
  float g, m = 23.;
  bool dash = false;
  if (k > 7.5) { g = clamp(built(7) * 2. - k + 8., 0., 1.); m = 27.; dash = true; }
  else if (k > .5) g = clamp(built(3) * 7. - k + 1., 0., 1.);
  else if (k > -.5) { g = built(1); m = 61.; }
  else if (k > -5.5) { g = clamp(built(5) * 5. + k + 1., 0., 1.); m = 25.; }
  else { g = clamp(built(7) * 2. + k + 6., 0., 1.); m = 27.; dash = true; }
  if (g <= 0.) return vec2(1e5, 0.);
  float w = k > .5 ? mix(wk / RK, wk, g) : k < -.5 ? mix(wk * RK, wk, g) : W1 * g;
  return vec2(cutaway(rim(p - vec3(0., lev(k), 0.), w, dash), p.z), m);
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(.1, -.2 + .05 * uApart, 0.), vec3(1. + .12 * uApart, 1. + .32 * uApart, .85));
  if (bound > .2) return vec2(bound, 0.);
  // 1, 3, 5, 7 \xB7 the frames: the two levels either side of the point.
  float kc = clamp(floor((p.y - YW) / (DY + .035 * uApart)), -7., 8.), wc = wid(kc);
  vec2 res = U(frameAt(p, kc, wc), frameAt(p, kc + 1., wc * RK));
  // 4 \xB7 outer limit: a frame and a glass plate above the last frame; it moves out two levels as the powers are added.
  float b4 = built(4), b7 = built(7);
  if (b4 > 0.) {
    float kl = 8. + 2. * b7, w = mix(wid(kl - 1.), wid(kl), b4);
    vec3 q = p - vec3(0., lev(kl), 0.);
    res = U(res, vec2(cutaway(rim(q, w, false), p.z), 24.));
    res = U(res, vec2(SHELL(cutaway(max(sdRect(q.xz, vec2(w * .5)), abs(q.y) - .002), p.z)), 84.));
  }
  // 0 \xB7 observer: a neutral marker for the man asleep, lying just under the first frame.
  vec3 q = p - vec3(0., YW - .035, 0.);
  q.xz *= rot(.5);
  float d = length(q) - .32;
  if (d < .05) d = min(sdCapsule(q, vec3(-.25, 0., 0.), vec3(.14, 0., 0.), .042), length(q - vec3(.22, .006, 0.)) - .048);
  res = U(res, vec2(cutaway(rise(d, 0, q.y, -.05, .06), p.z), 20.));
  // 2 \xB7 scale counter: a column with a tick at every power (the first frame's longer), and a ring at the current one.
  float b2 = built(2);
  vec3 c = p - vec3(XC, 0., 0.) - apart(vec3(.12, 0., 0.));
  d = sdBox(c - vec3(-.06, YW + .15, 0.), vec3(.1, 1.05 + .3 * uApart, .04));
  if (d > .05) res = U(res, vec2(d, 0.));
  else if (b2 > 0.) {
    float pitch = DY + .035 * uApart, kt = clamp(floor((c.y - YW) / pitch + .5), -7., 10.), len = kt == 0. ? .14 : .07;
    d = min(sdCylinder(vec3(c.x, c.y - YW - 1.5 * pitch, c.z), 8.5 * pitch + .006, .008), sdBox(vec3(c.x + len * .5, c.y - YW - kt * pitch, c.z), vec3(len * .5, .004, .004)));
    res = U(res, vec2(cutaway(rise(d, 2, c.y, YW - 7.1 * pitch, YW + 10.1 * pitch), c.z), 22.));
    float b5 = built(5), b6 = built(6);
    float kr = uBuild <= 0. ? 0. : b7 > 0. ? mix(-6., -7., b7) : b6 > 0. ? mix(-5., -6., b6) : b5 > 0. ? mix(8., -5., b5) : b4 > 0. ? mix(7., 8., b4) : 7. * built(3);
    res = U(res, vec2(cutaway(sdTorus(vec3(c.x, c.y - YW - kr * pitch, c.z), vec2(.024, .006)), c.z), 62.));
  }
  // 6 \xB7 carbon atom: round the innermost frames, a nucleus, two electron shells (two and four electrons) and a glass
  // boundary; it grows from its nucleus.
  float b6 = built(6);
  vec3 a = p - vec3(0., lev(-6.), 0.);
  d = length(a) - .17;
  if (d > .05) res = U(res, vec2(d, 0.));
  else if (b6 > 0.) {
    d = min(min(length(a - vec3(.011, .011, .011)), length(a - vec3(-.011, -.011, .011))), min(length(a - vec3(-.011, .011, -.011)), length(a - vec3(.011, -.011, -.011)))) - .015;
    vec3 e = a; e.yz *= rot(.55);
    d = min(d, min(sdTorus(e, vec2(.075 * b6, .0025)), length(polarRep(e, 2.) - vec3(.075 * b6, 0., 0.)) - .009));
    e = a; e.xy *= rot(-.5);
    d = min(d, min(sdTorus(e, vec2(.13 * b6, .0025)), length(polarRep(e, 4.) - vec3(.13 * b6, 0., 0.)) - .009));
    res = U(res, vec2(cutaway(d, p.z), 26.));
    res = U(res, vec2(SHELL(cutaway(abs(length(a) - .165 * b6) - .002, p.z)), 86.));
  }
  return res;
}
`};export{o as scene};
