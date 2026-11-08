import{a as t}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var s={id:"D06-vertical-community",cam:[3.051,1.246,5.739],target:[0,.1,0],floor:-1.6,ring:1.6,accent:e(t.D06),poster:2,orbit:{az:[-80,80]},parts:[{name:"pilotis",view:{az:-10,el:-8,zoom:.92}},{name:"artificial ground",view:{az:-10,el:-6,zoom:.92}},{name:"concrete frame",view:{az:30,el:4}},{name:"dwelling cell",view:{az:40,el:8,zoom:.95}},{name:"interior street",inside:!0,view:{az:50,el:4,zoom:.8}},{name:"descending duplex",view:{az:-28,el:0,zoom:.55}},{name:"ascending duplex",view:{az:-28,el:0,zoom:.55}},{name:"three-level group",view:{az:-28,el:0,zoom:.62}},{name:"double-height living room",view:{az:-28,el:0,zoom:.55}},{name:"shopping street",inside:!0,view:{az:50,el:-2,zoom:.8}},{name:"roof terrace",view:{az:-10,el:32,zoom:.85}}],glsl:`
const float Y0 = -1.4;               // the ground
const float MU = .05;                // units per metre: one unit is 20 m
const float PH = 6.5 * MU;           // the pilotis' height, to the underside of the artificial ground
const float AG = 2. * MU;            // the artificial ground's depth
const float Y1 = Y0 + PH + AG;       // level 1's floor
const float FH = 2.42 * MU;          // floor to floor: a cell's 2.26 m and a beam
const float CH = 2.26 * MU;          // a cell's storey height
const float YT = Y1 + 18. * FH;      // the top of level 18
const float YR = YT + 2. * MU;       // the roof terrace's floor, on the technical floor
const float HW = 12. * MU;           // half the block's width (24 m)
const float SW = 3.66 * MU;          // a slot: a cell's width
const float NS = 5.;                 // slots in the slice
const float Z0 = -NS * SW * .5;      // the slice's back
const float ZN = Z0 + 4. * SW;       // the slot at the cut begins here
const float ZF = Z0 + NS * SW;       // the cut: the section face
const float XS = 1.4 * MU;           // half the street's width
const float XD = 8.2 * MU;           // the double-height rooms begin this far from the middle
const float PZ = 4.19 * MU;          // the two portal frames, at -PZ and PZ (8.38 m apart)
const float PX = 8. * MU;            // their piers

vec3 palette(int i) {
  if (i == 0) return vec3(.90, .90, .86);   // pilotis
  if (i == 1) return vec3(.80, .86, .96);   // artificial ground
  if (i == 2) return vec3(.86, .90, .97);   // concrete frame
  if (i == 3) return vec3(.62, .80, 1.);    // dwelling cell
  if (i == 4) return vec3(.55, 1., .85);    // interior street
  if (i == 5) return vec3(1., .62, .42);    // descending duplex
  if (i == 6) return vec3(.46, .66, 1.);    // ascending duplex
  if (i == 7) return vec3(1., .92, .50);    // three-level group
  if (i == 8) return vec3(.84, .62, 1.);    // double-height living room
  if (i == 9) return vec3(1., .74, .88);    // shopping street
  return vec3(.56, .95, .56);               // roof terrace
}

/** Level k (1 to 18): 0 below a street, 1 a street level, 2 above a street, 3 the shopping street, 4 plain. */
float ltype(float k) {
  if (k > 6.5 && k < 8.5) return 3.;
  if (k > 17.5) return 4.;
  return mod(k < 6.5 ? k - 1. : k - 9., 3.);
}
float levelOf(float y) { return clamp(floor((y - Y1) / FH) + 1., 1., 18.); }
/** A box from x0 to x1 and y0 to y1, across the slot at the cut. */
float box2(vec3 q, float x0, float x1, float y0, float y1) {
  return sdBox(vec3(q.x - (x0 + x1) * .5, q.y - (y0 + y1) * .5, q.z - (ZN + ZF) * .5), vec3((x1 - x0) * .5, (y1 - y0) * .5, (ZF - ZN) * .5 - .006));
}
/** A path of light on the section face through four points (x, y). */
float path4(vec3 q, vec2 a, vec2 b, vec2 c, vec2 e) {
  vec3 f = vec3(0., 0., ZF - .003);
  return min(min(sdCapsule(q, vec3(a, 0.) + f, vec3(b, 0.) + f, .0045), sdCapsule(q, vec3(b, 0.) + f, vec3(c, 0.) + f, .0045)),
             sdCapsule(q, vec3(c, 0.) + f, vec3(e, 0.) + f, .0045));
}
float bush(vec3 q, float s) { return min(length(q) - s, length(q - vec3(s * .7, -s * .2, s * .3)) - s * .75); }
float sdRect2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }

/** The section: the east half is removed along the street. */
float cutS(vec3 q) { return q.x; }

vec2 map(vec3 p) {
  float top = YR + .12 + .15 * uApart;
  float bound = sdBox(p - vec3(0., (top + Y0 - .04) * .5, .12 * uApart), vec3(.8 + .38 * uApart, (top - Y0 + .04) * .5, .62 + .55 * uApart));
  if (bound > .2) return vec2(bound, 0.);
  vec3 q;
  float d;

  // The ground plate (not a part).
  vec2 res = vec2(sdBox(p - vec3(0., Y0 - .015, 0.), vec3(.8, .015, .62)), 4.);

  // 0 \xB7 Pilotis: two portal frames of plain square piers and a beam, 8.38 m apart, lifting the block.
  q = p - apart(vec3(0., 0., .3));
  if (q.y < Y0 + PH + .05) {
    d = sdBox(vec3(abs(q.x) - PX, q.y - Y0 - PH * .5, abs(q.z) - PZ), vec3(.04, PH * .5, .04));
    d = min(d, sdBox(vec3(q.x, q.y - Y0 - PH + .0375, abs(q.z) - PZ), vec3(PX + .04, .0375, .04)));
    res = U(res, vec2(cutaway(rise(d, 0, q.y, Y0, Y0 + PH), cutS(q)), 20.));
  } else res = U(res, vec2(q.y - Y0 - PH, 0.));

  // 1 \xB7 Artificial ground: transverse beams on the slot lines, longitudinal beams every 6 m, a deck on them.
  q = p - apart(vec3(0., 0., .15));
  float ya = Y0 + PH, ym = (ya + Y1) * .5;
  if (abs(q.y - ym) < AG * .5 + .05) {
    float jz = clamp(round((q.z - Z0) / SW), 0., NS);
    float ix = clamp(round(q.x / .3), -2., 2.);
    d = sdBox(vec3(q.x, q.y - ym, q.z - Z0 - jz * SW), vec3(HW, AG * .5, .012));
    d = min(d, sdBox(vec3(q.x - ix * .3, q.y - ym, q.z), vec3(.012, AG * .5, NS * SW * .5)));
    d = min(d, sdBox(vec3(q.x, q.y - Y1 + .006, q.z), vec3(HW, .006, NS * SW * .5)));
    res = U(res, vec2(cutaway(rise(d, 1, q.y, ya, Y1), cutS(q)), 21.));
  } else res = U(res, vec2(abs(q.y - ym) - AG * .5, 0.));

  // 2 \xB7 Concrete frame: posts on the slot lines along the fa\xE7ades and the street's edges, a beam under every level
  // both ways, and the technical floor on top. Taken apart it goes back.
  q = p - apart(vec3(0., 0., -.5));
  if (q.y > Y1 - .05) {
    float ax = abs(q.x);
    float lx = ax < .339 ? ax - (XS + .008) : ax - HW;
    float jz = clamp(round((q.z - Z0) / SW), 0., NS);
    float zb = q.z - Z0 - jz * SW;
    d = max(max(abs(lx) - .008, abs(zb) - .008), abs(q.y - (Y1 + YT) * .5) - (YT - Y1) * .5);
    float kb = clamp(round((q.y - Y1 - .004) / FH), 0., 18.);
    float yb = q.y - Y1 - kb * FH - .004;
    d = min(d, sdBox(vec3(q.x, yb, zb), vec3(HW + .008, .004, .008)));
    d = min(d, max(max(abs(lx) - .008, abs(yb) - .004), abs(q.z) - NS * SW * .5));
    d = min(d, sdBox(vec3(q.x, q.y - (YT + YR) * .5, q.z), vec3(HW + .01, (YR - YT) * .5, NS * SW * .5)));
    res = U(res, vec2(cutaway(rise(d, 2, q.y, Y1, YR), cutS(q)), 22.));
  } else res = U(res, vec2(Y1 - q.y, 0.));

  // 3 \xB7 Dwelling cells: in the four back slots (and on level 18 in all five), one to a level, or two either side of
  // the street on a street level; each level's cells slide into the rack in turn. No step reaches past a neighbouring
  // slot or level.
  float g3 = built(3);
  if (g3 > 0. && p.y > Y1 - .02 && p.y < YT + .02) {
    q = p - apart(vec3(0., 0., -.15));
    float k = levelOf(q.y), t = ltype(k);
    float gk = clamp(g3 * 1.6 - (k - 1.) / 17. * .6, 0., 1.);
    q.z += (1. - smoothstep(0., 1., gk)) * .8;
    float yk = Y1 + (k - 1.) * FH;
    float j = clamp(floor((q.z - Z0) / SW), 0., NS - 1.);
    float c = 1e5;
    if (gk > 0. && t != 3. && (j < NS - 1.5 || t == 4.)) {
      float zj = Z0 + (j + .5) * SW;
      c = t == 1. ? sdBox(vec3(abs(q.x) - .34, q.y - yk - .008 - CH * .5, q.z - zj), vec3(.254, CH * .5, SW * .5 - .006))
                  : sdBox(vec3(q.x, q.y - yk - .008 - CH * .5, q.z - zj), vec3(HW - .006, CH * .5, SW * .5 - .006));
    }
    float cy = min(k > 1.5 ? q.y - yk : 9., k < 17.5 ? yk + FH - q.y : 9.);
    float cz = min(j > .5 ? q.z - Z0 - j * SW : 9., j < NS - 1.5 ? Z0 + (j + 1.) * SW - q.z : 9.);
    float cl = max(min(cy, cz), 0.) + .008;
    cl = max(cl, sdBox(q - vec3(0., (Y1 + YT) * .5, 0.), vec3(HW, (YT - Y1) * .5, NS * SW * .5)));   // all are in the slice
    if (j > NS - 1.5 && k < 16.5) cl = max(cl, q.z - ZN);   // at the cut only level 18 has cells
    c = min(c, cl);
    res = U(res, vec2(cutaway(c, cutS(q)), 23.));
  } else if (g3 > 0.) res = U(res, vec2(max(Y1 - p.y, p.y - YT), 0.));

  // 4 \xB7 Interior streets: at levels 2, 5, 10, 13 and 16 a corridor along the middle of the block, its floor lit and a
  // line of lights under its ceiling, running the length of the slice as it is built. Taken apart they step aside.
  float g4 = built(4);
  if (g4 > 0.) {
    q = p - apart(vec3(.28, 0., 0.));
    // the nearest street level: 2 or 5 below the shops, 10, 13 or 16 above
    float cl = (q.y - Y1) / FH + .5;
    float sa = clamp(2. + 3. * round((cl - 2.) / 3.), 2., 5.), sb = clamp(10. + 3. * round((cl - 10.) / 3.), 10., 16.);
    float ys = Y1 + ((abs(cl - sa) < abs(cl - sb) ? sa : sb) - 1.) * FH;
    d = sdBox(vec3(q.x, q.y - ys - .0105, q.z), vec3(XS - .004, .0025, NS * SW * .5));
    d = min(d, max(max(length(vec2(q.x, q.y - ys - FH + .008)) - .0035, abs(q.z) - NS * SW * .5), (abs(fract(q.z * 14.) - .5) - .22) / 14.));
    d = max(d, q.z - mix(Z0, ZF, smoothstep(0., 1., g4)));
    res = U(res, vec2(cutaway(d, cutS(q)), 64.));
  }

  // The group of three levels round one street that the point is in (from its level), and how far the nearest other
  // group's dwellings are at least: the parts in the slot at the cut are evaluated for that group only.
  float lk = levelOf(p.y), lt = ltype(lk);
  bool grp = lt < 2.5;
  float yg = Y1 + (lk - lt - 1.) * FH;
  float gy = p.y < Y1 ? Y1 - p.y : grp ? min(p.y - yg, yg + 3. * FH - p.y) : lk > 17.5 ? p.y - (Y1 + 17. * FH) : min(p.y - (Y1 + 6. * FH), Y1 + 8. * FH - p.y);
  gy = max(max(gy, 0.) + .008, abs(p.x) - .68);
  float zc = (ZN + ZF) * .5, zh = (ZF - ZN) * .5;

  // 5 \xB7 Descending duplex: entered from the street at its upper level on the west side, it steps down and runs right
  // across the block below the street; its path in light. Taken apart it comes forward to the west.
  if (built(5) > 0.) {
    q = p - apart(vec3(-.2, 0., .45));
    float dz = abs(q.z - zc) - zh;
    if (!grp || dz > .05) d = max(dz, gy);
    else {
      d = min(box2(q, -XD + .006, HW - .006, yg + .008, yg + FH), box2(q, -XD + .006, -XS - .016, yg + FH + .008, yg + 2. * FH));
      float pth = abs(q.z - ZF) > .05 ? abs(q.z - ZF) - .01 : path4(q, vec2(0., yg + FH + .03), vec2(-.25, yg + FH + .03), vec2(-.33, yg + .03), vec2(-.5, yg + .03));
      d = rise(min(d, gy), 5, p.y - yg, 0., 3. * FH);
      res = U(res, vec2(cutaway(rise(pth, 5, p.y - yg, 0., 3. * FH), cutS(q)), 65.));
    }
    res = U(res, vec2(cutaway(d, cutS(q)), 25.));
  }

  // 6 \xB7 Ascending duplex: entered from the street at its lower level on the east side, it steps up and runs right
  // across above the street; its path in light. Taken apart it comes forward to the east.
  if (built(6) > 0.) {
    q = p - apart(vec3(.2, 0., .45));
    float dz = abs(q.z - zc) - zh;
    if (!grp || dz > .05) d = max(dz, gy);
    else {
      d = min(box2(q, XS + .016, XD - .006, yg + FH + .008, yg + 2. * FH), box2(q, -HW + .006, XD - .006, yg + 2. * FH + .008, yg + 3. * FH));
      float pth = abs(q.z - ZF) > .05 ? abs(q.z - ZF) - .01 : path4(q, vec2(0., yg + FH + .03), vec2(.25, yg + FH + .03), vec2(.33, yg + 2. * FH + .03), vec2(.5, yg + 2. * FH + .03));
      d = rise(min(d, gy), 6, p.y - yg, 0., 3. * FH);
      res = U(res, vec2(cutaway(rise(pth, 6, p.y - yg, 0., 3. * FH), cutS(q)), 66.));
    }
    res = U(res, vec2(cutaway(d, cutS(q)), 26.));
  }

  // 7 \xB7 Three-level group: a frame of light on the section face round the three levels one street serves, and a
  // bracket outside the west fa\xE7ade with a mark at the street. It comes furthest forward when taken apart.
  if (built(7) > 0.) {
    q = p - apart(vec3(0., 0., .75));
    float dz = abs(q.z - ZF - .004) - .004;
    if (!grp || dz > .05) d = max(dz, gy);
    else {
      float ym = yg + 1.5 * FH;
      d = max(abs(sdRect2(vec2(q.x, q.y - ym), vec2(HW + .012, 1.5 * FH - .002))) - .003, dz);
      vec3 bq = q - vec3(-HW - .055, ym, ZF);
      float br = sdBox(bq, vec3(.004, 1.5 * FH, .004));
      br = min(br, sdBox(vec3(bq.x - .015, abs(bq.y) - 1.5 * FH + .004, bq.z), vec3(.015, .004, .004)));
      br = min(br, length(bq - vec3(.012, 0., 0.)) - .011);   // a mark at the street, the group's middle level
      d = rise(min(min(d, br), gy), 7, p.y - yg, 0., 3. * FH);
    }
    res = U(res, vec2(cutaway(d, cutS(q)), 67.));
  }

  // 8 \xB7 Double-height living rooms: each duplex's living room at its fa\xE7ade rises through both its levels, 4.84 m
  // (west for the descending duplex, east and a level higher for the ascending one). Taken apart they come forward
  // and out, each to its side.
  if (built(8) > 0.) {
    q = p - apart(vec3(sign(p.x) * .36, 0., .55));
    float dz = abs(q.z - zc) - zh;
    if (!grp || dz > .05) d = max(dz, gy);
    else {
      d = min(box2(q, -HW + .006, -XD - .006, yg + .008, yg + 2. * FH), box2(q, XD + .006, HW - .006, yg + FH + .008, yg + 3. * FH));
      d = rise(min(d, gy), 8, p.y - yg, 0., 3. * FH);
    }
    res = U(res, vec2(cutaway(d, cutS(q)), 28.));
  }

  // 9 \xB7 Shopping street: levels 7 and 8, a street each along the middle, lit, with shops on both sides behind lit
  // shopfronts, in every slot. Built along the slice; taken apart it comes forward.
  float g9 = built(9);
  float sbd = abs(p.y - Y1 - 7. * FH) - FH;
  if (g9 > 0. && sbd > .05) res = U(res, vec2(sbd, 0.));
  else if (g9 > 0.) {
    q = p - apart(vec3(0., 0., .3));
    float ks = clamp(floor((q.y - Y1) / FH) + 1., 7., 8.);
    float ys = Y1 + (ks - 1.) * FH;
    float j = clamp(floor((q.z - Z0) / SW), 0., NS - 1.);
    float sh = sdBox(vec3(abs(q.x) - .34, q.y - ys - .008 - CH * .5, q.z - Z0 - (j + .5) * SW), vec3(.254, CH * .5, SW * .5 - .006));
    float cz = min(j > .5 ? q.z - Z0 - j * SW : 9., j < NS - 1.5 ? Z0 + (j + 1.) * SW - q.z : 9.);
    float cy = ks < 7.5 ? max(ys + FH - q.y, 0.) : max(q.y - ys, 0.);
    float run = q.z - mix(Z0, ZF, smoothstep(0., 1., g9));
    float band = sdBox(q - vec3(0., Y1 + 7. * FH, 0.), vec3(HW, FH, NS * SW * .5));
    sh = max(min(sh, max(min(cz, cy) + .008, band)), run);
    res = U(res, vec2(cutaway(sh, cutS(q)), 29.));
    float lit = sdBox(vec3(abs(q.x) - XS - .0165, q.y - ys - .008 - CH * .55, q.z), vec3(.0015, CH * .32, NS * SW * .5));
    lit = min(lit, sdBox(vec3(q.x, q.y - ys - .0105, q.z), vec3(XS - .004, .0025, NS * SW * .5)));
    res = U(res, vec2(cutaway(max(lit, run), cutS(q)), 69.));
  }

  // 10 \xB7 Roof terrace: open to all, parapets along both fa\xE7ades, a running track along both edges, a low pavilion of
  // three bays, planters. It lifts when taken apart.
  float g10 = built(10);
  if (g10 > 0.) {
    q = p - apart(vec3(0., .15, 0.));
    float yr = q.y - YR;
    if (yr > .24 || yr < -.03) res = U(res, vec2(max(yr - .2, -yr), 0.));
    else {
      float zl = NS * SW * .5;
      d = sdBox(vec3(abs(q.x) - HW + .005, yr - .025, q.z), vec3(.005, .025, zl));
      vec3 pv = q - vec3(0., YR + .09, -.15);
      float pav = sdBox(pv, vec3(.24, .09, .16));
      pav = max(pav, -max(abs(abs(pv.x) - .08) - .003, abs(pv.y) - .07));
      d = min(d, pav);
      vec3 pl = vec3(abs(q.x) - .22, yr - .02, q.z - .3);
      d = min(d, min(sdBox(pl, vec3(.11, .02, .05)), bush(pl - vec3(0., .045, 0.), .04)));
      res = U(res, vec2(cutaway(rise(d, 10, q.y, YR, YR + .2), cutS(q)), 30.));
      float tr = sdBox(vec3(abs(q.x) - .52, yr - .002, q.z), vec3(.05, .002, zl));
      tr = max(tr, -max(abs(abs(abs(q.x) - .52) - .017) - .002, -1.));
      res = U(res, vec2(cutaway(rise(tr, 10, q.y, YR, YR + .2), cutS(q)), 70.));
    }
  }
  return res;
}
`};export{s as scene};
