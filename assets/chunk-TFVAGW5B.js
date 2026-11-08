import{a as t}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var s={id:"D06-promenade",cam:[2.86,1.79,5.04],target:[0,-.06,.1],floor:-1.25,ring:1.95,accent:e(t.D06),poster:2,parts:[{name:"entrance",view:{az:-18,el:-4,zoom:.72}},{name:"hall",inside:!0,view:{az:-10,el:30,zoom:.86}},{name:"ramp",inside:!0,view:{az:-6,el:28,zoom:.86}},{name:"staircase",inside:!0,view:{az:-16,el:22,zoom:.7}},{name:"viewpoints",inside:!0,view:{el:30,zoom:.92}},{name:"light and shadow",inside:!0,view:{az:-10,el:26,zoom:.82}},{name:"window bays",view:{az:200,el:6,zoom:.92}},{name:"architectural whole",view:{el:4,zoom:1.02}},{name:"roof garden",view:{el:30,zoom:.8}}],glsl:`
const float GL = -.52;               // the ground: the plinth's top
const float G = -.5;                 // the hall floor
const float HS = .46;                // a storey
const float U1 = G + HS;             // the upper floor's top
const float RF = G + 2. * HS;        // the roof's top
const float TH = .03;                // a slab's thickness
const float WT = .025;               // a wall's thickness
const vec2 BB = vec2(1.15, .7);      // the block's outer half-size (x, z)
const vec3 SUN = vec3(.391, -.869, .304);   // the daylight's direction of travel
const float RAMP1X0 = -.8, RAMP1X1 = .32;   // the first flight along the back wall, at z from -.675 to -.455
const float RAMP2Z0 = -.42, RAMP2Z1 = .62;  // the second along the right wall, at x from .9 to 1.125

vec3 palette(int i) {
  if (i == 0) return vec3(1., .72, .48);    // entrance
  if (i == 1) return vec3(.80, .88, 1.);    // hall
  if (i == 2) return vec3(1., .86, .56);    // ramp
  if (i == 3) return vec3(.98, .66, .52);   // staircase
  if (i == 4) return vec3(.55, 1., .85);    // viewpoints
  if (i == 5) return vec3(1., .95, .62);    // light and shadow
  if (i == 6) return vec3(.62, .84, 1.);    // window bays
  if (i == 7) return vec3(.92, .94, .97);   // architectural whole
  return vec3(.55, .95, .55);               // roof garden
}

float sdRect(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
/** Distance to a box's twelve edges, each a bar of half-thickness e. */
float sdFrame(vec3 p, vec3 b, float e) {
  p = abs(p) - b; vec3 q = abs(p + e) - e;
  return min(min(length(max(vec3(p.x, q.y, q.z), 0.)) + min(max(p.x, max(q.y, q.z)), 0.),
                 length(max(vec3(q.x, p.y, q.z), 0.)) + min(max(q.x, max(p.y, q.z)), 0.)),
                 length(max(vec3(q.x, q.y, p.z), 0.)) + min(max(q.x, max(q.y, p.z)), 0.));
}
/** A sloped plate from a to b in the (along, y) plane, thickness 2t below the walking line, half-width w across. */
float slope(vec2 ay, vec2 a, vec2 b, float across, float w, float t) {
  vec2 pa = ay - a + vec2(0., t), ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
  return max(length(pa - ba * h) - t, abs(across) - w);
}
float bush(vec3 q, float s) { return min(length(q) - s, length(q - vec3(s * .7, -s * .2, s * .3)) - s * .75); }
/** A deep frame round an opening: outer half-size o and opening half-size i in the wall's plane (u, v), depth d0 to d1. */
float bay(vec2 uv, float n, vec2 o, vec2 i, float d0, float d1) {
  float dn = abs(n - (d0 + d1) * .5) - (d1 - d0) * .5;
  return max(max(sdRect(uv, o), dn), -sdRect(uv, i));
}

/** The section: a plan cut just under the roof; the roof, the parapets and the roof garden are removed. */
float cutS(vec3 q) { return q.y - (RF - .05); }

float sceneDetail(vec3 p, float m) {
  int k = int(m + .5);
  if (k == 21) return (abs(fract(p.x * 12.) - .5) + abs(fract(p.z * 12.) - .5) - .5) * .0005;   // the hall's paving
  if (k == 28) return (noise3(p * 90.) - .5) * .0016;
  return 0.;
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., (GL - .06 + RF + .32 + .8 * uApart) * .5, .07), vec3(BB.x + .2 + .5 * uApart, (RF + .38 + .8 * uApart - GL) * .5, .95 + .5 * uApart));
  if (bound > .2) return vec2(bound, 0.);
  vec3 q;
  float d;

  // The plinth (not a part).
  vec2 res = vec2(sdBox(p - vec3(0., GL - .02, .09), vec3(1.3, .02, .91)), 4.);

  // 0 \xB7 Entrance: a portal framed deep in the front wall, a canopy over it, a threshold, and a paved path leading up to
  // it. It comes forward when taken apart.
  if (built(0) > 0.) {
    q = p - apart(vec3(0., 0., .5));
    float eb = sdBox(q - vec3(-.78, G + .1, BB.y + .15), vec3(.22, .26, .18));
    if (eb > .08) res = U(res, vec2(eb, 0.));
    else {
      d = bay(vec2(q.x + .78, q.y - G - .15), q.z, vec2(.185, .175), vec2(.15, .15), BB.y - WT, BB.y + .1);
      d = max(d, -(q.y - G));
      d = min(d, sdBox(q - vec3(-.78, G + .336, BB.y + .1), vec3(.21, .006, .12)));
      d = min(d, sdBox(q - vec3(-.78, GL + .01, BB.y + .07), vec3(.17, .01, .07)));
      d = min(d, sdBox(q - vec3(-.78, GL + .003, .87), vec3(.08, .003, .13)));
      res = U(res, vec2(cutaway(rise(d, 0, q.y, GL, G + .36), cutS(q)), 20.));
    }
  }

  // 1 \xB7 Hall: the ground floor, paved, with the double-height part outlined in light. It spreads from the entrance.
  float g1 = built(1);
  if (g1 > 0.) {
    q = p;
    float spr = length(q.xz - vec2(-.78, .7)) - 2.4 * smoothstep(0., 1., g1);
    d = max(sdBox(q - vec3(0., (GL + G) * .5, 0.), vec3(BB.x - WT, (G - GL) * .5, BB.y - WT)), spr);
    res = U(res, vec2(cutaway(d, cutS(q)), 21.));
    d = max(max(abs(sdRect(q.xz - vec2(-.64, 0.), vec2(.46, .64))) - .004, abs(q.y - G - .001) - .002), spr);
    res = U(res, vec2(cutaway(d, cutS(q)), 61.));
  }

  // 2 \xB7 Ramp: an inclined surface from one floor to the next, along the back wall from the hall to the upper floor,
  // then along the right wall to the roof, a low upstand on each open side. Built along its course.
  float g2 = built(2);
  q = p - apart(vec3(0., .12, 0.));
  float rbd = min(sdBox(q - vec3(-.24, (G + U1) * .5 + .02, -.565), vec3(.58, HS * .5 + .06, .12)), sdBox(q - vec3(1.0125, (U1 + RF) * .5 + .02, .1), vec3(.12, HS * .5 + .06, .54)));
  if (g2 > 0. && rbd > .06) res = U(res, vec2(rbd, 0.));
  else if (g2 > 0.) {
    float r1 = slope(q.xy, vec2(RAMP1X0, G), vec2(RAMP1X1, U1), q.z + .565, .11, .016);
    float k1 = (q.x - RAMP1X0) / (RAMP1X1 - RAMP1X0);
    float up1 = max(max(abs(q.z + .462) - .007, abs(q.y - (G + HS * clamp(k1, 0., 1.)) - .03) - .05), abs(k1 - .5) - .5);
    r1 = max(min(r1, up1), q.x - mix(RAMP1X0, RAMP1X1, clamp(g2 * 2., 0., 1.)));
    float r2 = slope(q.zy, vec2(RAMP2Z0, U1), vec2(RAMP2Z1, RF), q.x - 1.0125, .1125, .016);
    float k2 = (q.z - RAMP2Z0) / (RAMP2Z1 - RAMP2Z0);
    float up2 = max(max(abs(q.x - .907) - .007, abs(q.y - (U1 + HS * clamp(k2, 0., 1.)) - .03) - .05), abs(k2 - .5) - .5);
    r2 = g2 > .5 ? max(min(r2, up2), q.z - mix(RAMP2Z0, RAMP2Z1, clamp(g2 * 2. - 1., 0., 1.))) : 1e5;
    res = U(res, vec2(cutaway(min(r1, r2), cutS(q)), 22.));
    // lit edges along both sides of each flight's surface
    float e1 = max(max(abs(abs(q.z + .565) - .104) - .003, abs(q.y - (G + HS * clamp(k1, 0., 1.)) - .002) - .003), max(abs(k1 - .5) - .5, q.x - mix(RAMP1X0, RAMP1X1, clamp(g2 * 2., 0., 1.))));
    float e2 = max(max(abs(abs(q.x - 1.0125) - .106) - .003, abs(q.y - (U1 + HS * clamp(k2, 0., 1.)) - .002) - .003), max(abs(k2 - .5) - .5, q.z - mix(RAMP2Z0, RAMP2Z1, clamp(g2 * 2. - 1., 0., 1.))));
    res = U(res, vec2(cutaway(min(e1, g2 > .5 ? e2 : 1e5), cutS(q)), 62.));
  }

  // 3 \xB7 Staircase: beside the first flight, a steep straight stair of twelve steps from the hall to the upper floor.
  if (built(3) > 0.) {
    q = p - apart(vec3(0., .12, .25));
    float sb = sdBox(q - vec3(-.37, (G + U1) * .5, -.37), vec3(.27, HS * .5 + .02, .08));
    if (sb > .06) res = U(res, vec2(sb, 0.));
    else {
      vec2 a = vec2(-.62, G), s = vec2(.5, HS) / 12.;
      float k = clamp(floor((q.x - a.x) / s.x), 0., 11.);
      vec2 c0 = a + s * (k + .5), c1 = a + s * (min(k + 1., 11.) + .5);
      d = min(sdBox(vec3(q.x - c0.x, q.y - c0.y, q.z + .37), vec3(s.x * .5, s.y * .5, .07)), sdBox(vec3(q.x - c1.x, q.y - c1.y, q.z + .37), vec3(s.x * .5, s.y * .5, .07)));
      d = min(d, slope(q.xy, a, a + s * 12., q.z + .37, .07, .012));
      res = U(res, vec2(cutaway(rise(d, 3, q.y, G, U1), cutS(q)), 23.));
    }
  }

  // 4 \xB7 Viewpoints: the route as a line of light with dashes moving along it, and five stations on it, each a ring
  // where one stands and a cone for where one looks. Built along the route; taken apart they lift off it.
  float g4 = built(4);
  if (g4 > 0.) {
    q = p - apart(vec3(0., .3, 0.));
    vec3 R0 = vec3(-.78, GL + .006, 1.), R1 = vec3(-.78, G + .006, .66), R2 = vec3(-.8, G + .006, -.565);
    vec3 R3 = vec3(.32, U1 + .006, -.565), R4 = vec3(1.0125, U1 + .006, -.45), R5 = vec3(1.0125, RF + .006, .62);
    vec3 R6 = vec3(.6, RF + .006, .52), R7 = vec3(0., RF + .006, .25);
    float run = 5.73;   // the route's length
    float reach = g4 * run;
    // the line, only near its course (four boxes along it): the nearest segment, and how far along the route it lies
    float rb = min(min(sdBox(q - vec3(-.79, (GL + G) * .5, .2), vec3(.03, .02, .8)), sdBox(q - vec3(.1, (G + U1) * .5, -.51), vec3(.92, HS * .5 + .02, .065))),
                   min(sdBox(q - vec3(1.0125, (U1 + RF) * .5, .085), vec3(.02, HS * .5 + .02, .54)), sdBox(q - vec3(.506, RF + .006, .435), vec3(.51, .01, .19))));
    float line = 1e5;
    if (rb >= .15) res = U(res, vec2(rb, 0.));
    else {
      float best = 1e5, sAt = 0., acc = 0.;
      vec3 A[8] = vec3[8](R0, R1, R2, R3, R4, R5, R6, R7);
      for (int i = ZERO; i < 7; i++) {
        vec3 a = A[i], ba = A[i + 1] - a, pa = q - a;
        float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
        float dd = length(pa - ba * h);
        float L = length(ba);
        if (dd < best) { best = dd; sAt = acc + h * L; }
        acc += L;
      }
      line = max(best - .0045, (abs(fract(sAt * 6. - uTime * .5) - .5) - .3) / 6.);
      line = max(line, sAt - reach);
    }
    // the nearest station
    vec3 V[5] = vec3[5](vec3(-.78, GL, .92), vec3(-.92, G, -.3), vec3(.5, U1, -.57), vec3(1.0125, U1 + .221, .08), vec3(.3, RF, .45));
    vec3 D[5] = vec3[5](vec3(0., .15, -1.), vec3(1., .5, -.3), vec3(0., .05, -1.), vec3(-1., -.35, -.1), vec3(-.6, .1, .8));
    float SV[5] = float[5](.08, .52, 2.2, 3.62, 4.8);
    int n = 0; float nd = 1e5;
    for (int i = ZERO; i < 5; i++) { float dd = length(q - V[i]); if (dd < nd) { nd = dd; n = i; } }
    vec3 v = V[n], e = v + vec3(0., .09, 0.);
    float st = sdTorus(q - v - vec3(0., .008, 0.), vec2(.045, .006));
    st = min(st, sdRoundCone(q, e, e + normalize(D[n]) * .2, .008, .04));
    st = min(st, length(q - e) - .014);
    st = SV[n] < reach ? st : 1e5;
    res = U(res, vec2(cutaway(min(line, st), cutS(q)), 64.));
  }

  // 5 \xB7 Light and shadow: daylight falling through a roof light over the hall in a shaft onto the hall floor, and
  // through the high window in the left wall onto the floor by the route; the solid walls beside them stay in shade.
  // The shaft descends as it is built; taken apart the light lifts away.
  float g5 = built(5);
  if (g5 > 0.) {
    q = p - apart(vec3(0., .2, 0.));
    float ys = RF - TH;
    vec3 w = q - SUN * ((q.y - ys) / SUN.y);
    float shaft = max(sdRect(w.xz - vec2(-.65, .025), vec2(.2, .175)) * .8, abs(q.y - (ys + G) * .5) - (ys - G) * .5);
    shaft = max(shaft, ys - (ys - G) * smoothstep(0., .8, g5) - q.y);
    res = U(res, vec2(SHELL(cutaway(shaft, cutS(q))), 85.));
    float pf = abs(q.y - G - .002) - .002;
    float patch1 = max(sdRect(w.xz - vec2(-.65, .025), vec2(.2, .175)) * .8, pf);
    vec3 w2 = q - SUN * ((q.x + BB.x - WT) / SUN.x);
    float patch2 = max(sdRect(vec2(w2.y - G - .66, w2.z), vec2(.14, .2)) * .5, pf);
    float pt = smoothstep(.75, 1., g5);
    res = U(res, vec2(pt > 0. ? cutaway(max(min(patch1, patch2), -pt + .001), cutS(q)) : 1e5, 65.));
  }

  // 6 \xB7 Window bays: deep frames round openings that frame views out, one in the back wall at the top of the first
  // flight, one high in the left wall of the hall, one projecting from the front wall by the second flight. Taken apart
  // they move out with their walls, and further.
  float ew = min(BB.x - WT - abs(p.x), BB.y - WT - abs(p.z));
  if (built(6) > 0. && uApart <= 0. && max(ew - .01, -ew - .09) > .06) res = U(res, vec2(max(ew - .01, -ew - .09), 0.));
  else if (built(6) > 0.) {
    vec3 qb = p - apart(vec3(0., 0., -.5)), ql = p - apart(vec3(-.5, 0., 0.)), qf = p - apart(vec3(0., 0., .5));
    d = bay(vec2(qb.x - .25, qb.y - G - .69), qb.z, vec2(.335, .125), vec2(.3, .09), -BB.y - .05, -BB.y + WT + .01);
    d = min(d, bay(vec2(ql.z, ql.y - G - .66), ql.x, vec2(.235, .175), vec2(.2, .14), -BB.x - .05, -BB.x + WT + .01));
    float df = bay(vec2(qf.x - .45, qf.y - U1 - .23), qf.z, vec2(.285, .145), vec2(.25, .11), BB.y - WT - .01, BB.y + .08);
    d = min(cutaway(d, cutS(p)), cutaway(df, cutS(qf)));
    res = U(res, vec2(rise(d, 6, p.y, G + .4, RF), 26.));
  }

  // 7 \xB7 Architectural whole: the block that holds the fragments: its solid back and left walls, its translucent front
  // and right walls, the openings cut in them, the upper floor with the well over the first flight, the roof with the
  // roof light and the well over the second flight, parapets, and its outline in light. It rises round the fragments;
  // taken apart the walls move out, the upper floor and the roof lift, and the outline stays.
  float g7 = built(7);
  // well inside the block, away from its walls and floors, or well outside it, the whole is no nearer than that
  float ein = min(min(BB.x - WT - abs(p.x), BB.y - WT - abs(p.z)), min(abs(p.y - U1 + TH * .5) - TH * .5, abs(p.y - RF + TH * .5) - TH * .5));
  float eout = sdBox(p - vec3(0., (GL + RF + .07) * .5, 0.), vec3(BB.x + .01, (RF + .07 - GL) * .5, BB.y + .01));
  if (g7 > 0. && uApart <= 0. && max(ein, eout) > .06) res = U(res, vec2(max(ein, eout) - .005, 0.));
  else if (g7 > 0.) {
    float yt = RF + .07;
    float wy = abs(p.y - (GL + yt) * .5) - (yt - GL) * .5;
    // the walls
    q = p - apart(vec3(0., 0., -.35));
    float wb = max(max(abs(q.z + BB.y - WT * .5) - WT * .5, abs(q.x) - BB.x), abs(q.y - (GL + yt) * .5) - (yt - GL) * .5);
    wb = max(wb, -sdBox(q - vec3(.25, G + .69, -BB.y), vec3(.3, .09, .1)));
    q = p - apart(vec3(-.35, 0., 0.));
    float wl = max(max(abs(q.x + BB.x - WT * .5) - WT * .5, abs(q.z) - BB.y), abs(q.y - (GL + yt) * .5) - (yt - GL) * .5);
    wl = max(wl, -sdBox(q - vec3(-BB.x, G + .66, 0.), vec3(.1, .14, .2)));
    q = p - apart(vec3(0., 0., .35));
    float wf = max(max(abs(q.z - BB.y + WT * .5) - WT * .5, abs(q.x) - BB.x), abs(q.y - (GL + yt) * .5) - (yt - GL) * .5);
    wf = max(wf, -min(sdBox(q - vec3(-.78, G + .15, BB.y), vec3(.15, .15, .1)), sdBox(q - vec3(.45, U1 + .23, BB.y), vec3(.25, .11, .1))));
    float cf = cutS(q);
    q = p - apart(vec3(.35, 0., 0.));
    float wr = max(max(abs(q.x - BB.x + WT * .5) - WT * .5, abs(q.z) - BB.y), abs(q.y - (GL + yt) * .5) - (yt - GL) * .5);
    float solid = min(cutaway(wb, cutS(p)), cutaway(wl, cutS(p)));
    float clear = min(cutaway(wf, cf), cutaway(wr, cutS(q)));
    // the upper floor and the roof
    q = p - apart(vec3(0., .3, 0.));
    float uf = sdBox(q - vec3(.4875, U1 - TH * .5, 0.), vec3(.6375, TH * .5, BB.y - WT));
    uf = max(uf, -sdBox(q - vec3(.08, U1, -.565), vec3(.245, TH, .115)));
    q = p - apart(vec3(0., .55, 0.));
    float rf = sdBox(q - vec3(0., RF - TH * .5, 0.), vec3(BB.x - WT, TH * .5, BB.y - WT));
    rf = max(rf, -min(sdBox(q - vec3(-.65, RF, .025), vec3(.2, TH, .175)), sdBox(q - vec3(1.0125, RF, .34), vec3(.12, TH, .29))));
    solid = min(solid, min(cutaway(uf, cutS(p)), cutaway(rf, cutS(p))));
    res = U(res, vec2(rise(solid, 7, p.y, GL, yt), 27.));
    res = U(res, vec2(SHELL(rise(clear, 7, p.y, GL, yt)), 87.));
    float ol = sdFrame(p - vec3(0., (GL + yt) * .5, 0.), vec3(BB.x + .004, (yt - GL) * .5, BB.y + .004), .005);
    res = U(res, vec2(cutaway(rise(ol, 7, p.y, GL, yt), cutS(p)), 67.));
  }

  // 8 \xB7 Roof garden: where the route ends, planters with bushes along the back, a bed of grass, a small tree in a box.
  // It rises clear of the roof when taken apart.
  float g8 = built(8);
  if (g8 > 0.) {
    q = p - apart(vec3(0., .8, 0.));
    float yb = q.y - RF;
    if (yb > .32 || yb < -.04) res = U(res, vec2(max(yb - .3, -yb), 0.));
    else {
      float kx = clamp(round((q.x - .05) / .42), -1., 1.);
      vec3 pl = q - vec3(.05 + kx * .42, RF + .025, -.44);
      d = sdBox(pl, vec3(.17, .025, .07));
      d = min(d, min(bush(pl - vec3(-.07, .045, 0.), .045), bush(pl - vec3(.07, .04, .01), .04)));
      d = min(d, sdBox(q - vec3(.15, RF + .008, .17), vec3(.33, .008, .15)));
      vec3 tq = q - vec3(.66, RF, -.05);
      d = min(d, sdBox(tq - vec3(0., .025, 0.), vec3(.07, .025, .07)));
      d = min(d, min(sdCapsule(tq, vec3(0.), vec3(0., .15, 0.), .009), bush(tq - vec3(0., .2, 0.), .07)));
      res = U(res, vec2(cutaway(rise(d, 8, q.y, RF, RF + .3), cutS(q)), 28.));
    }
  }
  return res;
}
`};export{s as scene};
