import{a}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var o={id:"D05-free-plan",cam:[2.12,2.1,3.78],target:[.02,-.22,.1],floor:-1.2,ring:2,accent:e(a.D05),poster:2,parts:[{name:"podium",view:{az:-8,el:-14,zoom:.95}},{name:"column grid",view:{el:30}},{name:"cruciform column",inside:!0,view:{az:-10,el:40,zoom:.45}},{name:"roof slab",view:{el:8,zoom:.95}},{name:"free-standing wall",view:{az:-22,el:2,zoom:.9}},{name:"glass wall",view:{az:28,el:-2,zoom:.8}},{name:"flowing space",inside:!0,view:{el:32,zoom:.92}},{name:"open court",view:{az:40,el:10,zoom:.85}},{name:"movable partition",view:{az:30,el:0,zoom:.95}}],glsl:`
const float PY = -.35;               // top of the platform
const float PB = PY - .16;           // its foot
const float RY = PY + .38;           // underside of the roof slab
const float RT = .04;                // the slab's thickness
const float G = .55;                 // the column grid's spacing
const vec2 C0 = vec2(-.85, -.275);   // the first column: three along x, two along z
const vec2 PODIUM = vec2(1.35, .85);
const vec3 ROOF = vec3(-.325, .875, .6);   // the slab: centre x, half-sizes
const vec4 COURT = vec4(.95, .17, .33, .61);   // the open court: centre x, z, half-sizes
// Free-standing walls (centre x, z, half-sizes), clear of the columns and of one another.
const vec4 WALLS[4] = vec4[4](vec4(.35, -.47, .9, .015), vec4(-.58, .225, .015, .275), vec4(.065, .05, .215, .015), vec4(-1.05, -.41, .015, .19));
// Walls of glass (centre x, z, half-length, 0 along x or 1 along z): one clear, one translucent.
const vec4 GLASS[2] = vec4[2](vec4(.5, -.22, .2, 1.), vec4(-.05, .45, .25, 0.));
// Paths of the flowing space (from x, z to x, z) and how far along its path each starts.
const vec4 FLOW[5] = vec4[5](vec4(-1.25, .64, 1.25, .64), vec4(-.45, .2, .95, .2), vec4(.95, .2, .95, -.32), vec4(-.92, -.38, .35, -.38), vec4(.35, -.38, .35, .2));
const float FLOW0[5] = float[5](0., 0., 1.4, 0., 1.27);

vec3 palette(int i) {
  if (i == 0) return vec3(.86, .90, .96);   // podium
  if (i == 1) return vec3(.42, .86, 1.);    // column grid
  if (i == 2) return vec3(.80, .90, 1.);    // cruciform column
  if (i == 3) return vec3(.95, .96, 1.);    // roof slab
  if (i == 4) return vec3(1., .74, .46);    // free-standing wall
  if (i == 5) return vec3(.62, .92, 1.);    // glass wall
  if (i == 6) return vec3(.55, 1., .80);    // flowing space
  if (i == 7) return vec3(.78, .70, 1.);    // open court
  return vec3(1., .58, .52);                // movable partition
}

float sdBox2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }

/** Distance to a box's twelve edges, each a bar of half-thickness e. */
float sdFrame(vec3 p, vec3 b, float e) {
  p = abs(p) - b; vec3 q = abs(p + e) - e;
  return min(min(length(max(vec3(p.x, q.y, q.z), 0.)) + min(max(p.x, max(q.y, q.z)), 0.),
                 length(max(vec3(q.x, p.y, q.z), 0.)) + min(max(q.x, max(p.y, q.z)), 0.)),
                 length(max(vec3(q.x, q.y, p.z), 0.)) + min(max(q.x, max(q.y, p.z)), 0.));
}

/** Cut open as a plan: everything above mid-height is removed. */
float cutS(vec3 q) { return q.y - (PY + .2); }

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(uApart * .1, -.17 + uApart * .08, .07), vec3(1.42 + uApart * .12, .38 + uApart * .42, 1. + uApart * .1));
  if (bound > .25) return vec2(bound, 0.);
  vec3 q;
  float d, e;
  vec2 res = vec2(1e5, 0.);
  float hy = (RY - PY) * .5, my = (RY + PY) * .5;

  // 0 \xB7 The podium: a raised platform with a coping, paving jointed on half the grid, and two steps at the front.
  q = p - apart(vec3(0., -.3, 0.));
  d = sdBox(q - vec3(0., (PY + PB) * .5 - .006, 0.), vec3(PODIUM.x, (PY - PB) * .5 - .006, PODIUM.y));
  d = min(d, sdBox(q - vec3(0., PY - .006, 0.), vec3(PODIUM + .012, .006).xzy));
  vec2 pj = abs(fract((q.xz - C0) / (G * .5) + .5) - .5) * G * .5;
  d = max(d, min(.0025 - min(pj.x, pj.y), q.y - PY + .004));
  vec2 st = vec2(q.x - .95, q.z - PODIUM.y);
  d = min(d, min(sdBox(vec3(st.x, q.y - (PB + PY - .053) * .5, st.y - .035), vec3(.2, (PY - .053 - PB) * .5, .035)),
                 sdBox(vec3(st.x, q.y - (PB + PY - .107) * .5, st.y - .07), vec3(.2, (PY - .107 - PB) * .5, .07))));
  res = U(res, vec2(cutaway(rise(d, 0, q.y, PB, PY), cutS(q)), 20.));

  // 1 \xB7 The column grid: setting-out lines through the column centres over the whole platform, a plate at each node.
  q = p;
  vec2 gq = q.xz - C0;
  vec2 gl = abs(fract(gq / G + .5) - .5) * G;
  vec2 nd = gq - round(gq / G) * G;
  d = min(min(gl.x, gl.y) - .003, sdBox2(nd, vec2(.03)) - .001);
  d = max(max(d, sdBox2(q.xz, PODIUM - .03)), abs(q.y - PY - .003) - .003);
  d = max(d, max(abs(q.x + .3), abs(q.z) * 1.6) - 1.75 * built(1));
  res = U(res, vec2(built(1) > 0. ? cutaway(d, cutS(q)) : 1e5, 61.));

  // 2 \xB7 The cruciform columns, on the grid: four steel angles back to back, in a cross-shaped casing.
  q = p - apart(vec3(0., .1, 0.));
  vec2 cq = q.xz - (C0 + vec2(clamp(round((q.x - C0.x) / G), 0., 2.), clamp(round((q.z - C0.y) / G), 0., 1.)) * G);
  vec2 f = abs(cq);
  float ys = abs(q.y - my) - hy;
  d = min(sdBox2(f - vec2(.0222, .0049), vec2(.021, .0037)), sdBox2(f - vec2(.0049, .0222), vec2(.0037, .021)));
  res = U(res, vec2(cutaway(rise(max(d, ys), 2, q.y, PY, RY), cutS(q)), 22.));
  d = min(sdBox2(cq, vec2(.05, .0145)), sdBox2(cq, vec2(.0145, .05)));
  res = U(res, vec2(SHELL(cutaway(rise(max(abs(d) - .0013, ys), 2, q.y, PY, RY), cutS(q))), 42.));

  // 3 \xB7 The roof slab: one continuous thin plane on the columns, lowered onto them as it is built (a faint fill and a
  // solid edge, so the plan shows through).
  q = p - apart(vec3(0., .42, 0.)) - vec3(0., (1. - built(3)) * .3, 0.);
  e = abs(q.y - RY - RT * .5) - RT * .5;
  float rr = sdBox2(q.xz - vec2(ROOF.x, 0.), ROOF.yz);
  if (built(3) > 0.) {
    res = U(res, vec2(cutaway(max(abs(rr + .012) - .012, e), cutS(q)), 23.));
    res = U(res, vec2(SHELL(cutaway(max(rr, e), cutS(q))), 43.));
  }

  // 4 \xB7 Free-standing walls, placed clear of the columns and of one another.
  q = p - apart(vec3(0., .22, -.12));
  d = 1e5;
  for (int i = ZERO; i < 4; i++) d = min(d, sdBox2(q.xz - WALLS[i].xy, WALLS[i].zw));
  d = max(d, abs(q.y - my) - hy);
  res = U(res, vec2(cutaway(rise(d, 4, q.y, PY, RY), cutS(q)), 24.));

  // 5 \xB7 Walls of glass in slim steel frames with mullions: one clear, one translucent of two leaves.
  q = p - apart(vec3(.12, .26, .26));
  for (int i = ZERO; i < 2; i++) {
    vec4 w = GLASS[i];
    vec2 l = w.w > .5 ? vec2(q.z - w.y, q.x - w.x) : vec2(q.x - w.x, q.z - w.y);
    vec2 fr = vec2(l.x, q.y - my);
    float lim = max(abs(l.x) - w.z, abs(q.y - my) - hy);
    float fm = min(abs(sdBox2(fr, vec2(w.z, hy)) + .006) - .006, abs(l.x - round(l.x / .125) * .125) - .0035);
    res = U(res, vec2(cutaway(rise(max(max(fm, lim), abs(l.y) - .009), 5, q.y, PY, RY), cutS(q)), 25.));
    float pane = i == 0 ? abs(l.y) - .0025 : abs(abs(l.y) - .006) - .002;
    res = U(res, vec2(SHELL(cutaway(rise(max(pane, lim), 5, q.y, PY, RY), cutS(q))), i == 0 ? 85. : 45.));
  }

  // 6 \xB7 The flowing space: lines of light running between the planes from inside to out, dashes moving along them.
  q = p - apart(vec3(0., .06, 0.));
  e = abs(q.y - PY - .005) - .004;
  if (built(6) > 0. && e < .05) {
    d = 1e5;
    for (int i = ZERO; i < 5; i++) {
      vec2 a = FLOW[i].xy, ba = FLOW[i].zw - a, pa = q.xz - a;
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
      float s = FLOW0[i] + h * length(ba) - uTime * .22;
      d = min(d, max(length(pa - ba * h) - .007, (abs(fract(s / .15) - .5) - .21) * .15));
    }
    d = max(max(d, e), q.x - mix(-1.4, 1.4, built(6)));
    res = U(res, vec2(cutaway(d, cutS(q)), 66.));
  } else res = U(res, vec2(max(e, .05), 66.));

  // 7 \xB7 The open court: its paving, and the outline of its open-to-the-sky volume.
  q = p - apart(vec3(.34, -.12, 0.)) - vec3(COURT.x, 0., COURT.y);
  d = sdBox(q - vec3(0., PY + .002, 0.), vec3(COURT.z, .003, COURT.w));
  d = max(d, .0025 - min(abs(q.x - round(q.x / .22) * .22), abs(q.z - round(q.z / .203) * .203)));
  res = U(res, vec2(cutaway(rise(d, 7, q.y, PY - .01, PY + .01), cutS(q)), 27.));
  d = sdFrame(q - vec3(0., (PY + RY + RT) * .5, 0.), vec3(COURT.z, (RY + RT - PY) * .5, COURT.w), .0035);
  res = U(res, vec2(cutaway(rise(d, 7, q.y, PY, RY + RT), cutS(q)), 67.));

  // 8 \xB7 The movable partition: a panel sliding on a ceiling track (and a floor guide) in the front bay of the frame.
  q = p - apart(vec3(-.2, .3, .28)) - vec3(-.95, 0., .5);
  d = min(sdBox(q - vec3(0., RY - .008, 0.), vec3(.2, .006, .008)), sdBox(q - vec3(0., PY + .002, 0.), vec3(.2, .002, .005)));
  res = U(res, vec2(cutaway(rise(d, 8, q.y, PY, RY), cutS(q)), 68.));
  d = sdBox(q - vec3(.09 * sin(uTime * .6), my - .004, 0.), vec3(.1, hy - .018, .01));
  res = U(res, vec2(cutaway(rise(d, 8, q.y, PY, RY), cutS(q)), 28.));
  return res;
}
`};export{o as scene};
