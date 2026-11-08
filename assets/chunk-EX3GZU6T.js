import{a as t}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var r={id:"D06-modulor",cam:[2.849,1.677,4.935],target:[0,.15,0],floor:-1.3,ring:1.9,accent:e(t.D06),poster:2,parts:[{name:"measuring rod",view:{az:-20,el:-4,zoom:.72}},{name:"navel mark",view:{az:-22,el:-6,zoom:.62}},{name:"head mark",view:{az:-22,el:0,zoom:.62}},{name:"raised-hand mark",view:{az:-22,el:6,zoom:.66}},{name:"red series",view:{az:-14,el:0,zoom:.78}},{name:"blue series",view:{az:-14,el:6,zoom:.78}},{name:"golden-section step",view:{az:-95,el:4,zoom:.74}},{name:"combined scale",view:{az:52,el:2,zoom:.84}},{name:"furniture heights",inside:!0,view:{az:-12,el:10,zoom:.68}},{name:"dwelling cell",view:{el:4,zoom:1.02}}],glsl:`
const float F = -.75;                    // the cell's floor
const float K = 1. / 150.;               // units per centimetre: one unit is 1.5 m
const vec3 CELL = vec3(183., 113., 113.) * K;   // the cell's half-size: 3.66 m wide, 2.26 m high, 2.26 m deep
const vec2 ROD = vec2(-.45, .3);         // the measuring rod
const float RS = .016;                   // its half-section
const float X0 = -.66, DX = .13;         // the series' columns
const float ZR = -.42, ZB = -.58;        // the red row, and the blue row behind it
const float BS = .0275;                  // a bar's half-section
const float RED[7] = float[7](16., 27., 43., 70., 113., 183., 296.);    // at columns 2 to 8
const float BLUE[7] = float[7](13., 20., 33., 53., 86., 140., 226.);   // at columns 0 to 6
const float ALL[9] = float[9](43., 53., 70., 86., 113., 140., 183., 226., 296.);
const float SX = .97, SZ0 = .5, SD = .124;   // the combined scale's steps: x, front edge, depth of a step

vec3 palette(int i) {
  if (i == 0) return vec3(.95, .95, .92);   // measuring rod
  if (i == 1) return vec3(1., .55, .45);    // navel mark
  if (i == 2) return vec3(1., .76, .42);    // head mark
  if (i == 3) return vec3(.48, .68, 1.);    // raised-hand mark
  if (i == 4) return vec3(.98, .30, .26);   // red series
  if (i == 5) return vec3(.26, .48, 1.);    // blue series
  if (i == 6) return vec3(1., .84, .40);    // golden-section step
  if (i == 7) return vec3(.86, .80, 1.);    // combined scale
  if (i == 8) return vec3(.70, .94, .80);   // furniture heights
  return vec3(.72, .88, 1.);                // dwelling cell
}

/** Distance to a box's twelve edges, each a bar of half-thickness e. */
float sdFrame(vec3 p, vec3 b, float e) {
  p = abs(p) - b; vec3 q = abs(p + e) - e;
  return min(min(length(max(vec3(p.x, q.y, q.z), 0.)) + min(max(p.x, max(q.y, q.z)), 0.),
                 length(max(vec3(q.x, p.y, q.z), 0.)) + min(max(q.x, max(p.y, q.z)), 0.)),
                 length(max(vec3(q.x, q.y, p.z), 0.)) + min(max(q.x, max(q.y, p.z)), 0.));
}
/** Graduations every 10 cm cut into the skin of a solid of distance d (y measured from the floor). */
float graduate(float d, float y) {
  float yy = abs(fract((y - F) / (10. * K) + .5) - .5) * 10. * K;
  return max(d, min(.0022 - yy, .004 + d));
}
/** A measured bar standing on the floor at c (x, z), h high. */
float bar(vec3 q, vec2 c, float h) {
  return graduate(sdBox(vec3(q.x - c.x, q.y - F - h * .5, q.z - c.y), vec3(BS, h * .5, BS)), q.y);
}
/** Red bar in column c (red index c - 2), grown out from 113 cm both ways as it is built. */
float redBar(vec3 q, float c, float g) {
  float r = c - 2.;
  if (r < 0. || r > 6.) return 1e5;
  float h = RED[int(r)] * K * clamp(g * 5. - abs(r - 4.), 0., 1.);
  return h <= 0. ? 1e5 : bar(q, vec2(X0 + c * DX, ZR), h);
}
/** Blue bar in column c, run down from 226 cm as it is built. */
float blueBar(vec3 q, float c, float g) {
  if (c > 6.) return 1e5;
  float h = BLUE[int(c)] * K * clamp(g * 7. - (6. - c), 0., 1.);
  return h <= 0. ? 1e5 : bar(q, vec2(X0 + c * DX, ZB), h);
}
/** Step i of the combined scale (front to back, rising), built in order. */
float scaleStep(vec3 q, float i, float g) {
  float h = ALL[int(i)] * K * clamp(g * 9. - i, 0., 1.);
  if (h <= 0.) return 1e5;
  float z = SZ0 - SD * (i + .5);
  return graduate(sdBox(vec3(q.x - SX, q.y - F - h * .5, q.z - z), vec3(.11, h * .5, SD * .5 - .003)), q.y);
}
/** A tile of the golden rectangle on the left wall: u (along z from the back) and v (up) in cm, from u0, v0 to u1, v1. */
float tile(vec3 q, vec4 r, float g, float i) {
  float t = clamp(g * 5. - i, 0., 1.);
  if (t <= 0.) return 1e5;
  vec2 c = (r.xy + r.zw) * .5 * K, h = (r.zw - r.xy) * .5 * K - .004;
  float d = sdBox(vec3(q.x + 1.172, q.y - F - c.y, q.z + .61 - c.x), vec3(.006, h.y, h.x));
  return max(d, q.y - F - (r.y + (r.w - r.y) * t) * K);
}
/** A plain table or seat: a top at height h (cm), half-size s (units), thickness th, on four legs. */
float block(vec3 q, vec2 c, float h, vec2 s, float th) {
  vec3 l = vec3(q.x - c.x, q.y - F, q.z - c.y);
  float y = h * K;
  float d = sdBox(l - vec3(0., y - th * .5, 0.), vec3(s.x, th * .5, s.y));
  vec2 a = abs(l.xz) - (s - .022);
  return min(d, sdBox(vec3(a.x, l.y - (y - th) * .5, a.y), vec3(.009, (y - th) * .5, .009)));
}

/** The section: the cell's glazed front is removed. */
float cutS(vec3 q) { return q.z - .62; }

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., .24 + .25 * uApart, .05 * uApart), vec3(1.34 + .2 * uApart, 1.07 + .25 * uApart, .88 + .3 * uApart));
  if (bound > .2) return vec2(bound, 0.);
  vec3 q;
  float d;

  // The plinth (not a part).
  vec2 res = vec2(sdBox(p - vec3(0., F - .03, 0.), vec3(1.32, .03, .85)), 4.);

  // 0 \xB7 Measuring rod: a plain vertical scale on a foot, graduated every 10 cm. It rises to 1.83 m, and on to 2.26 m
  // when the raised-hand mark is set. Taken apart it comes forward.
  float g0 = built(0);
  q = p - apart(vec3(-.12, 0., .42));
  float rbx = sdBox(q - vec3(ROD.x, F + 113. * K, ROD.y), vec3(.05, 113. * K, .05));
  if (g0 > 0. && rbx > .06) res = U(res, vec2(rbx, 0.));
  else if (g0 > 0.) {
    float top = F + 183. * K * smoothstep(0., 1., g0) + 43. * K * smoothstep(0., 1., built(3));
    d = graduate(sdBox(vec3(q.x - ROD.x, q.y - F - 113. * K, q.z - ROD.y), vec3(RS, 113. * K, RS)), q.y);
    d = max(d, q.y - top);
    d = min(d, sdBox(vec3(q.x - ROD.x, q.y - F - .005, q.z - ROD.y), vec3(.05, .005, .05)));
    res = U(res, vec2(cutaway(d, cutS(q)), 20.));
  }

  // 1, 2, 3 \xB7 The marks: a collar on the rod at the navel (113 cm), the top of the head (183 cm) and the raised hand
  // (226 cm), each with a level line of light running out to its term: the red 113 bar, the red 183 bar, the blue 226
  // bar. Taken apart they slide off the rod.
  q = p - apart(vec3(-.42, 0., .42));
  float mb = sdBox(q - vec3(-.11, F + 170. * K, -.13), vec3(.39, 62. * K, .48));
  if (mb < .2) {
    vec3 a = vec3(ROD.x, F, ROD.y);
    float g1 = built(1), g2 = built(2), g3 = built(3);
    if (g1 > 0.) {
      vec3 y = vec3(0., 113. * K, 0.), b = vec3(X0 + 6. * DX, F, ZR);
      d = min(sdBox(q - a - y, vec3(.034, .006, .034)), sdCapsule(q, a + y, mix(a, b, g1) + y, .0042));
      res = U(res, vec2(cutaway(d, cutS(q)), 61.));
    }
    if (g2 > 0.) {
      vec3 y = vec3(0., 183. * K, 0.), b = vec3(X0 + 7. * DX, F, ZR);
      d = min(sdBox(q - a - y, vec3(.034, .006, .034)), sdCapsule(q, a + y, mix(a, b, g2) + y, .0042));
      res = U(res, vec2(cutaway(d, cutS(q)), 62.));
    }
    if (g3 > 0.) {
      vec3 y = vec3(0., 226. * K, 0.), b = vec3(X0 + 6. * DX, F, ZB);
      d = min(sdBox(q - a - y, vec3(.034, .006, .034)), sdCapsule(q, a + y, mix(a, b, g3) + y, .0042));
      res = U(res, vec2(cutaway(d, cutS(q)), 63.));
    }
  } else res = U(res, vec2(mb, 0.));

  // 4, 5 \xB7 The two series as rows of measured bars: red in front (16, 27, 43, 70, 113, 183, 296 cm), blue behind
  // (13, 20, 33, 53, 86, 140, 226 cm), each blue bar behind the red bar of half its height. The two nearest columns
  // are evaluated, and no step reaches past the next ones. Taken apart the red row comes forward.
  {
    float g4 = built(4), g5 = built(5);
    vec3 qr = p - apart(vec3(0., 0., .24));
    vec3 qb = p;
    float sb = sdBox(p - vec3(X0 + 4. * DX, F + 1., -.45 + .12 * uApart), vec3(4. * DX + .04, 1.01, .17 + .12 * uApart));
    if (sb > .06) res = U(res, vec2(sb, 0.));
    else {
      float c0 = clamp(floor((p.x - X0) / DX), 0., 7.);
      float dr = min(redBar(qr, c0, g4), redBar(qr, c0 + 1., g4));
      float db = min(blueBar(qb, c0, g5), blueBar(qb, c0 + 1., g5));
      res = U(res, vec2(cutaway(dr, cutS(qr)), 24.));
      res = U(res, vec2(cutaway(db, cutS(qb)), 25.));
      float xa = c0 > 0. ? X0 + (c0 - 1.) * DX : -9., xb = c0 < 7. ? X0 + (c0 + 2.) * DX : 9.;
      res = U(res, vec2(min(p.x - xa, xb - p.x) - BS, 0.));
    }
  }

  // 6 \xB7 Golden-section step: a golden rectangle 183 by 113 cm on the left wall, cut into squares of 113, 70, 43 and
  // 27 cm and a last 27 by 16 cm rectangle, each side the next term. They appear largest first; taken apart the panel
  // stands off the wall.
  float g6 = built(6);
  if (g6 > 0.) {
    q = p - apart(vec3(.25, .12, 0.));
    float pb = sdBox(q - vec3(-1.172, F + 56.5 * K, 0.), vec3(.01, 56.5 * K, .62));
    if (pb > .05) res = U(res, vec2(pb, 0.));
    else {
      d = tile(q, vec4(0., 0., 113., 113.), g6, 0.);
      d = min(d, tile(q, vec4(113., 43., 183., 113.), g6, 1.));
      d = min(d, tile(q, vec4(140., 0., 183., 43.), g6, 2.));
      d = min(d, tile(q, vec4(113., 0., 140., 27.), g6, 3.));
      d = min(d, tile(q, vec4(113., 27., 140., 43.), g6, 4.));
      res = U(res, vec2(cutaway(d, cutS(q)), 26.));
    }
  }

  // 7 \xB7 Combined scale: both series in one rising scale, nine steps from 43 cm at the front to 296 cm at the back,
  // each graduated, built in order (the four nearest steps are evaluated). Taken apart it moves out to the right.
  float g7 = built(7);
  if (g7 > 0.) {
    q = p - apart(vec3(.32, 0., 0.));
    float cb = sdBox(q - vec3(SX, F + 1., SZ0 - 4.5 * SD), vec3(.12, 1.01, 4.5 * SD + .01));
    if (cb > .06) res = U(res, vec2(cb, 0.));
    else {
      float i0 = clamp(floor((SZ0 - q.z) / SD - .5), 1., 6.);
      d = min(min(scaleStep(q, i0 - 1., g7), scaleStep(q, i0, g7)), min(scaleStep(q, i0 + 1., g7), scaleStep(q, i0 + 2., g7)));
      res = U(res, vec2(cutaway(d, cutS(q)), 27.));
      float za = i0 < 6. ? SZ0 - SD * (i0 + 3.5) : -9., zb = i0 > 1. ? SZ0 - SD * (i0 - 1.5) : 9.;
      res = U(res, vec2(min(q.z - za, zb - q.z) - SD * .5, 0.));
    }
  }

  // 8 \xB7 Furniture heights: plain blocks at heights from the series: a table at 70 cm (top 86 by 53 cm), a chair seat
  // at 43 cm with its back at 86 cm, a stool at 43 cm. They come forward when taken apart.
  if (built(8) > 0.) {
    q = p - apart(vec3(.12, 0., .42));
    float fb = sdBox(q - vec3(.18, F + .3, .11), vec3(.57, .31, .31));
    if (fb > .06) res = U(res, vec2(fb, 0.));
    else {
      d = block(q, vec2(.25, .02), 70., vec2(86., 53.) * K * .5, .02);
      d = min(d, block(q, vec2(-.21, .02), 43., vec2(43., 43.) * K * .5, .018));
      d = min(d, sdBox(q - vec3(-.21 - 21.5 * K + .007, F + 86. * K * .5, .02), vec3(.007, 86. * K * .5, 21.5 * K)));
      d = min(d, block(q, vec2(.6, .3), 43., vec2(33., 33.) * K * .5, .02));
      res = U(res, vec2(cutaway(rise(d, 8, q.y, F, F + 86. * K), cutS(q)), 28.));
    }
  }

  // 9 \xB7 Dwelling cell: 3.66 m wide and 2.26 m high, its floor, its edges, glazing on three sides (the fourth open), and
  // ticks every 10 cm along its front edge. It rises last; taken apart it opens: the edges lift, the glazed sides
  // move out, the floor stays.
  float cbx = sdBox(p - vec3(0., F + CELL.y, 0.), CELL);
  if (built(9) > 0. && uApart <= 0. && abs(cbx) > .06) res = U(res, vec2(abs(cbx) - .012, 0.));   // well inside or outside it
  else if (built(9) > 0.) {
    vec3 cq = p - apart(vec3(0., .5, 0.)) - vec3(0., F + CELL.y, 0.);
    float fr = sdFrame(cq, CELL, .007);
    fr = min(fr, sdBox(p - vec3(0., F + .002, 0.), vec3(CELL.x, .002, CELL.z)));
    res = U(res, vec2(cutaway(rise(fr, 9, p.y, F, F + 2. * CELL.y + .5 * uApart), cutS(p)), 29.));
    float tk = max(abs(fract(p.x / (10. * K) + .5) - .5) * 10. * K - .0022, sdBox(p - vec3(0., F + .006, CELL.z + .006), vec3(CELL.x, .006, .004)));
    res = U(res, vec2(cutaway(rise(tk, 9, p.y, F, F + .02), cutS(p)), 69.));
    cq = p - vec3(0., F + CELL.y, 0.);
    float gl = sdBox(cq - vec3(0., 0., -CELL.z - .3 * uApart), vec3(CELL.x, CELL.y, .003));
    gl = min(gl, sdBox(cq - vec3(-CELL.x - .3 * uApart, 0., 0.), vec3(.003, CELL.y, CELL.z)));
    vec3 fq = cq - vec3(0., 0., CELL.z + .3 * uApart);
    gl = min(gl, sdBox(fq, vec3(CELL.x, CELL.y, .003)));
    res = U(res, vec2(SHELL(cutaway(rise(gl, 9, p.y, F, F + 2. * CELL.y), cutS(p))), 89.));
  }
  return res;
}
`};export{r as scene};
