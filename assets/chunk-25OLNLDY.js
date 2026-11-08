import{a}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var o={id:"D01-innocenti",cam:[3.396,1.5,3.729],target:[.2,-.02,-.08],floor:-.72,ring:1.85,accent:e(a.D01),poster:1.5,orbit:{az:[-80,80]},parts:[{name:"flight of steps",view:{az:-12,el:4,zoom:.5}},{name:"columns",view:{az:-18,el:-4,zoom:.6}},{name:"capitals",view:{az:-22,el:-6,zoom:.36}},{name:"half capitals",inside:!0,view:{az:35,el:-20,zoom:.42}},{name:"round arches",view:{az:-14,el:0,zoom:.7}},{name:"fluted pilasters",view:{az:15,el:-6,zoom:.7}},{name:"entablature",view:{az:-6,el:8,zoom:.8}},{name:"upper windows",view:{az:-10,el:12,zoom:.65}},{name:"roundels",view:{az:-16,el:0,zoom:.5}}],glsl:`
const float M = .27;               // the module: bay = depth to the back wall = height to the impost tops
const float YG = -.43;             // the piazza
const float RS = .03 * M;          // a step's rise and tread (illustrative)
const float TS = .05 * M;
const float YF = YG + 9. * RS;     // the loggia's floor, on the ninth step
const float WF = .06 * M;          // half the thickness of the wall over the arcade
const float ZS = .18 * M;          // the front edge of the loggia's floor
const float ZB = -1.1 * M;         // the back of the back wall (its face at -M)
const float RI = .437 * M;         // the archivolts' intrados and extrados
const float RE = .535 * M;
const float XL = 4.65 * M;         // the portico's ends, where the closed bays begin
const float XE = 5.85 * M;         // the front's ends
const float YE = 1.6 * M;          // the entablature's foot, above the loggia floor
const float YC = 1.86 * M;         // the cornice's top, which carries the windows
const float YU = 2.62 * M;         // the eaves

vec3 palette(int i) {
  if (i == 0) return vec3(.88, .84, .76);   // flight of steps: stone
  if (i == 1) return vec3(.58, .70, .84);   // columns: pietra serena
  if (i == 2) return vec3(.80, .88, 1.);    // capitals and impost blocks
  if (i == 3) return vec3(.74, .76, 1.);    // half capitals
  if (i == 4) return vec3(.56, .78, .94);   // round arches
  if (i == 5) return vec3(.66, .86, .90);   // fluted pilasters
  if (i == 6) return vec3(.76, .82, .92);   // entablature
  if (i == 7) return vec3(.90, .90, .96);   // upper windows
  return vec3(.36, .60, 1.);                // roundels: the glazed discs set in later
}

/** The section: the bays right of the seventh column removed, through its transverse arch and half capital. */
float cutS(vec3 p) { return p.x - 1.5 * M; }

// The software renderer runs every branch, so map() is straight code with cheap, shared pieces: one repetition index
// per row, symmetry folds instead of angles, the build's clip computed once per group. CHUNK (always true) splits it
// in two blocks, which keeps the shader quick to compile.
#define CHUNK if (uZero == 0)

/** x relative to the nearest column (and roundel) k = 0..9 at (k - 4.5) M, or to the nearest bay j = 0..8. */
float colX(float x) { return x - (clamp(floor(x / M + 5.), 0., 9.) - 4.5) * M; }
float bayX(float x) { return x - (clamp(floor(x / M + 4.5), 0., 8.) - 4.) * M; }
float box2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
/** The build's clip for part i: absent before its turn, then cut above the level s it has reached (s0 to s1). */
float upTo(int i, float s, float s0, float s1) { float g = built(i); return g <= 0. ? 1e5 : s - mix(s0, s1, g); }

/** 0 \xB7 The steps: the step under the point and the one behind it, each solid below its tread and behind its nose. */
float steps(vec3 q) {
  float i = clamp(floor((ZS + 8. * TS - q.z) / TS), 0., 8.);
  vec2 a = vec2(q.z - ZS - (8. - i) * TS, q.y - YG - (i + 1.) * RS);
  vec2 b = a + vec2(TS, -RS);
  float d = min(length(max(a, 0.)) + min(max(a.x, a.y), 0.), i < 8. ? length(max(b, 0.)) + min(max(b.x, b.y), 0.) : 1e5);
  return max(max(d, abs(q.x) - XE - .1 * M), max(YG - q.y, ZB - q.z));
}

/** 1 \xB7 A column (c from the foot of its axis): a square plinth and a torus, the tapering shaft, the astragal. */
float column(vec3 c) {
  float h = clamp((c.y - .045 * M) / (.77 * M), 0., 1.);
  float d = max(length(c.xz) - mix(.045, .039, h) * M, abs(c.y - .43 * M) - .385 * M) * .98;
  d = min(d, length(vec2(length(c.xz) - .05 * M, c.y - .035 * M)) - .011 * M);
  d = min(d, box2(vec2(max(abs(c.x), abs(c.z)), c.y - .0125 * M), vec2(.062 * M, .0125 * M)));
  return min(d, length(vec2(length(c.xz) - .04 * M, c.y - .804 * M)) - .0055 * M);
}

/**
 * 2, 3 \xB7 A Corinthian capital (c from its foot): the bell; two rows of eight leaves, the upper between the lower;
 * a scroll at each corner and each face; the square abacus with hollowed sides; the impost block above, up to the
 * springing. Folded into a sixteenth of a turn.
 */
float capital(vec3 c) {
  const float H = .115 * M;
  vec2 g = abs(c.xz);
  g = vec2(max(g.x, g.y), min(g.x, g.y));
  const vec2 N = vec2(-.38268, .92388);
  vec2 f = g - 2. * max(dot(g, N), 0.) * N;
  vec3 v = vec3(f.x, c.y, f.y);
  float h = clamp(c.y / H, 0., 1.);
  float d = max(length(c.xz) - mix(.039, .052, h * h) * M, abs(c.y - H * .5) - H * .5);
  d = min(d, sdEllipsoid(v - vec3(.047 * M, .03 * M, 0.), vec3(.013 * M, .03 * M, .017 * M)));
  d = min(d, sdEllipsoid(v - vec3(.0499 * M, .062 * M, .0207 * M), vec3(.014 * M, .03 * M, .016 * M)));
  d = min(d, length(vec2(length(vec2(v.x - .068 * M, c.y - H + .03 * M)) - .011 * M, v.z)) - .005 * M);
  float ab = box2(vec2(g.x, c.y - H + .011 * M), vec2(.07 * M, .011 * M));
  ab = max(ab, .1 * M - length(vec2(g.x - .158 * M, g.y)));
  return min(min(d, ab), box2(vec2(g.x, c.y - .15 * M), vec2(.064 * M, .035 * M)));
}

/** 5 \xB7 A fluted pilaster (c from the foot of its axis on the wall face): base, shaft with five flutes, a capital
 *  flaring to its abacus, with a row of leaves. */
float pilaster(vec3 c) {
  float hc = clamp((c.y - 1.47 * M) / (.12 * M), 0., 1.);
  float d = sdBox(c - vec3(0., .8 * M, 0.), vec3(mix(.06, .07, hc) * M, .8 * M, (.025 + .012 * hc) * M));
  float fx = c.x - clamp(floor(c.x / (.022 * M) + .5), -2., 2.) * .022 * M;
  d = max(d, -max(length(vec2(fx, c.z - .027 * M)) - .0085 * M, abs(c.y - .79 * M) - .66 * M));
  d = min(d, sdBox(c - vec3(0., .03 * M, .005 * M), vec3(.072 * M, .03 * M, .035 * M)));
  d = min(d, sdBox(c - vec3(0., 1.59 * M, .006 * M), vec3(.08 * M, .01 * M, .042 * M)));
  float lx = c.x - clamp(floor(c.x / (.04 * M) + .5), -1., 1.) * .04 * M;
  return min(d, sdEllipsoid(vec3(lx, c.y - 1.515 * M, c.z - .03 * M), vec3(.014 * M, .035 * M, .012 * M)));
}

vec2 map(vec3 p) {
  float cx = colX(p.x), bx = bayX(p.x);   // no part moves along x when taken apart
  vec3 q;
  float c, d, e;
  vec2 res = vec2(1e5, 0.);

  CHUNK {
  // 0 \xB7 the steps, rising from the piazza; the top step is the loggia's floor
  q = p - apart(vec3(0., -.3, .2));
  res = U(res, vec2(max(steps(q), upTo(0, q.y, YG, YF + .01)), 20.));

  // 1 \xB7 the columns
  c = upTo(1, p.y, YF, YF + .83 * M);
  res = U(res, vec2(max(column(vec3(cx, p.y - YF, p.z)), c), 21.));

  // 2, 3 \xB7 the capitals with their impost blocks, and the half capitals set into the back wall opposite them: one
  // carving, done for whichever is nearer (the other gets a bound)
  vec3 qa = p - apart(vec3(0., .14, 0.)), qb = p - apart(vec3(0., .14, -.34));
  vec3 ca = vec3(cx, qa.y - YF - .815 * M, qa.z), cb = vec3(cx, qb.y - YF - .815 * M, qb.z + M);
  bool first = abs(ca.z) < abs(cb.z);
  float k = capital(first ? ca : cb);
  float da = first ? k : max(abs(ca.z), abs(ca.y - .09 * M)) - .1 * M;
  float db = first ? max(abs(cb.z), abs(cb.y - .09 * M)) - .1 * M : max(k, -cb.z);
  res = U(res, vec2(max(da, upTo(2, qa.y, YF + .815 * M, YF + M + .01)), 22.));
  c = upTo(3, qb.y, YF, YF + YC + .01);
  res = U(res, vec2(max(db, c), 23.));
  // the back wall (stucco, not a part), built with the half capitals
  res = U(res, vec2(max(sdBox(vec3(qb.x, qb.y - YF - YC * .5, qb.z + 1.05 * M), vec3(XL, YC * .5, .05 * M)), c), 1.));

  // 4 \xB7 the round arches: the front's archivolts in two fasciae, and the transverse arches from each column to its
  // half capital; and the stucco wall over them, with the roundels' recesses
  q = p - apart(vec3(0., .32, 0.));
  c = upTo(4, q.y, YF + M, YF + YE + .01);
  vec2 a = vec2(bx, q.y - YF - M);
  float r = length(a);
  d = max(max(abs(r - (RI + RE) * .5) - (RE - RI) * .5, -a.y), abs(q.z) - WF - .014 * M);
  d = max(d, -max(r - RI - .05 * M, WF + .006 * M - abs(q.z)));
  d = min(d, max(max(abs(length(vec2(q.z + .5 * M, a.y)) - .4675 * M) - .0325 * M, -a.y), abs(cx) - .045 * M));
  res = U(res, vec2(max(d, c), 24.));
  e = max(max(abs(q.x) - XL, abs(a.y - .3 * M) - .3 * M), max(abs(q.z) - WF, RI + .01 * M - r));
  e = max(e, -max(length(vec2(cx, a.y - .45 * M)) - .086 * M, WF - .02 * M - q.z));
  res = U(res, vec2(max(e, c), 1.));

  // 5 \xB7 the fluted pilasters, and the closed bays they frame (stucco), each with a door
  q = p - apart(vec3(0., 0., .3));
  c = upTo(5, q.y, YF, YF + YC + .01);
  float ax = abs(q.x);
  res = U(res, vec2(max(pilaster(vec3(ax - (ax < 5.27 * M ? 4.77 * M : 5.77 * M), q.y - YF, q.z - WF)), c), 25.));
  e = sdBox(vec3(ax - (XL + XE) * .5, q.y - YF - YC * .5, q.z - (ZB + WF) * .5), vec3((XE - XL) * .5, YC * .5, (WF - ZB) * .5));
  e = max(e, -sdBox(vec3(ax - 5.27 * M, q.y - YF - .33 * M, q.z - WF), vec3(.16 * M, .33 * M, .04 * M)));
  res = U(res, vec2(max(e, c), 1.));

  }
  CHUNK {
  // 6 \xB7 the entablature: an architrave of two fasciae, the frieze, the cornice; laid from one end to the other
  q = p - apart(vec3(0., .55, 0.));
  vec2 t = vec2(q.y - YF - YE, q.z);
  d = box2(t - vec2(.02 * M, 0.), vec2(.02 * M, WF + .01 * M));
  d = min(d, box2(t - vec2(.065 * M, 0.), vec2(.025 * M, WF + .018 * M)));
  d = min(d, box2(t - vec2(.13 * M, 0.), vec2(.04 * M, WF + .008 * M)));
  d = min(d, box2(t - vec2(.19 * M, 0.), vec2(.02 * M, WF + .04 * M)));
  d = min(d, box2(t - vec2(.235 * M, .03 * M), vec2(.025 * M, WF + .075 * M)));
  res = U(res, vec2(max(max(d, abs(q.x) - XE - .02 * M), upTo(6, q.x, -XE - .1, XE + .1)), 26.));

  // 7 \xB7 a window on the cornice over each arch (sill, surround, cornice, pediment); the upper storey (stucco) with
  // the windows' openings; the roof
  q = p - apart(vec3(0., .84, 0.));
  c = upTo(7, q.y, YF + YC, YF + YU + .25 * M);
  vec2 w = vec2(bx, q.y - YF - YC - .2 * M);
  float hole = box2(w, vec2(.1 * M, .15 * M));
  d = max(box2(w, vec2(.13 * M, .18 * M)), -hole);
  d = min(d, box2(w + vec2(0., .188 * M), vec2(.15 * M, .012 * M)));
  d = min(d, box2(w - vec2(0., .191 * M), vec2(.155 * M, .011 * M)));
  vec2 tp = vec2(abs(w.x), w.y - .202 * M);
  d = min(d, max(dot(tp, vec2(.4472, .8944)) - .0693 * M, -tp.y));
  res = U(res, vec2(max(max(d, abs(q.z - WF - .014 * M) - .016 * M), c), 27.));
  e = sdBox(vec3(q.x, q.y - YF - (YC + YU) * .5, q.z - (ZB + WF) * .5), vec3(XE, (YU - YC) * .5, (WF - ZB) * .5));
  e = max(e, -max(hole, WF - .04 * M - q.z));
  res = U(res, vec2(max(e, c), 1.));
  float y = q.y - YF - YU, zr = abs(q.z - (ZB + WF) * .5);
  e = max(box2(vec2(zr, y - .12 * M), vec2(.68 * M, .12 * M)), abs(q.x) - XE - .08 * M);
  res = U(res, vec2(max(max(e, dot(vec2(zr, y), vec2(.3328, .943)) - .2263 * M), c), 4.));

  // 8 \xB7 the roundels, the last layer: a round frame of pietra serena, and the disc set into the recess
  q = p - apart(vec3(0., .32, .3));
  c = upTo(8, q.y, YF + 1.33 * M, YF + 1.58 * M);
  vec3 o = vec3(cx, q.y - YF - 1.45 * M, q.z - WF);
  float rl = length(o.xy);
  res = U(res, vec2(max(length(vec2(rl - .1 * M, o.z)) - .016 * M, c), 28.));
  res = U(res, vec2(max(max(rl - .086 * M, abs(o.z + .012 * M) - .007 * M), c), 68.));

  }
  res.x = cutaway(res.x, cutS(p));
  return res;
}
`};export{o as scene};
