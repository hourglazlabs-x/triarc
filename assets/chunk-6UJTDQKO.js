import{a as e}from"./chunk-4QM5HSGV.js";import{a}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var s={id:"D02-crystal-palace",cam:[3.45,3,4.55],target:[0,-.2,.02],floor:-1.6,ring:2.15,accent:a(e.D02),poster:1.5,parts:[{name:"elm trees",inside:!0,view:{az:50,el:-4,zoom:.6}},{name:"concrete foundations",inside:!0,view:{az:46,el:-14,zoom:.46}},{name:"cast-iron columns",view:{az:20,el:-12,zoom:.72}},{name:"girders",view:{az:30,el:-12,zoom:.55}},{name:"nave",view:{az:10,el:22,zoom:.85}},{name:"side aisles",view:{az:10,el:22,zoom:.9}},{name:"galleries",inside:!0,view:{az:40,el:-2,zoom:.6}},{name:"roof trusses",view:{az:42,el:-10,zoom:.6}},{name:"Paxton gutters",view:{az:25,el:6,zoom:.42}},{name:"ridge-and-furrow glazing",view:{az:25,el:6,zoom:.36}},{name:"glass panes",view:{az:15,el:-4,zoom:.8}},{name:"transept",view:{az:-30,el:-6,zoom:.78}}],glsl:`
const float FT = 1. / 150.;      // one foot
const float G = -.42;            // the ground: the top of the floor
const float BAY = 24. * FT;      // the grid
const float XE = 204. * FT;      // the model's ends, seven bays each side of the transept: the hall runs on
const float ZE = 204. * FT;      // the outer walls: 408 ft across
const float NW = 36. * FT;       // half the nave, and half the transept: 72 ft
const float ZS = 108. * FT;      // the step from the 43 ft avenues down to the 23 ft ones
const float H1 = 23. * FT;       // the three tiers
const float H2 = 43. * FT;
const float H3 = 66. * FT;
const float HS = 72. * FT;       // the transept's springing: its semicircular vault, radius NW, rises to 108 ft
const float GS = 8. * FT;        // gutters 8 ft apart
const float RH = 1.6 * FT;       // a ridge's rise over its gutters: 4 ft at 2.5 to 1
const float CR = .0072;          // a column's radius (drawn thicker than the real 8 in)
const float SB = 8. * FT;        // sash-bars drawn every 8 ft (illustrative)

vec3 palette(int i) {
  if (i == 0) return vec3(.52, .86, .40);   // elm trees
  if (i == 1) return vec3(.80, .78, .72);   // concrete foundations
  if (i == 2) return vec3(.58, .78, 1.);    // cast-iron columns
  if (i == 3) return vec3(.70, .84, 1.);    // girders
  if (i == 4) return vec3(.92, .80, .58);   // nave floor
  if (i == 5) return vec3(.84, .74, .58);   // side aisles' floors
  if (i == 6) return vec3(1., .66, .52);    // galleries
  if (i == 7) return vec3(.62, .74, 1.);    // roof trusses
  if (i == 8) return vec3(.98, .80, .50);   // Paxton gutters
  if (i == 9) return vec3(.94, .90, .66);   // sash-bars and ridges
  if (i == 10) return vec3(.62, .93, 1.);   // glass
  return vec3(.70, 1., .90);                // transept
}

float sdBox2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
/** Signed distance outside the band lo <= x <= hi. */
float band(float x, float lo, float hi) { return max(lo - x, x - hi); }
/** The roof height of the tier over a point at az = |z| from the building's axis. */
float tierH(float az) { return az < NW ? H3 : az < ZS ? H2 : H1; }
/** Roof tier i (height, from, to): 0 over the nave, 1 over the avenues beside it, 2 over the rest. */
vec3 tier(int i) { return i == 0 ? vec3(H3, -1., NW) : i == 1 ? vec3(H2, NW, ZS) : vec3(H1, ZS, ZE); }
/** The line of columns along the building nearest az = |z|: its |z|, and the height its columns rise to. */
vec2 colZ(float az) {
  float k = clamp(floor((az - NW) / BAY + .5), 0., 7.);
  if (k == 5.) k = az < 156. * FT ? 4. : 6.;      // the outer 48 ft avenue has no line in its middle
  return vec2(NW + k * BAY, k == 0. ? H3 : (k == 1. || k == 3.) ? H2 : H1);
}
/** The line of columns across the building nearest ax = |x|: every 24 ft from the transept's sides. */
float colX(float ax) { return NW + clamp(floor((ax - NW) / BAY + .5), 0., 7.) * BAY; }
/** Lower bound on the distance to the neighbouring lines of a grid whose nearest line is c away. */
float nextLine(float c) { return max(BAY - abs(c), abs(c)); }
/** The fold of a ridge-and-furrow roof: 0 over a gutter (8 ft apart, on the column lines), 1 under a ridge. */
float fold(float a) { return 1. - abs(fract((a - 4. * FT) / GS) - .5) * 2.; }
/** A girder's or truss's web in its plane (u along it, v up from its underside, depth D): open between posts every 8 ft. */
float web(float u, float v, float D) {
  float pu = u - GS * floor(u / GS + .5);
  return max(abs(v - D * .5) - D * .5, -sdBox2(vec2(pu, v - D * .5), vec2(GS * .5 - .0012, D * .5 - .0016)));
}

// \u2500\u2500 0 \xB7 elm trees \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
float elm(vec3 q, vec3 at, float s) {
  vec3 r = (q - at) / s;
  float b = sdBox(r - vec3(0., .55, 0.), vec3(.32, .56, .32));
  if (b > .05) return (b - .02) * s;
  float trunk = sdTaper(r, vec3(0.), vec3(0., .56, 0.), .05, .022);
  trunk = min(trunk, sdCapsule(r, vec3(0., .34, 0.), vec3(.15, .6, .05), .018));
  trunk = min(trunk, sdCapsule(r, vec3(0., .4, 0.), vec3(-.13, .66, -.07), .016));
  float crown = sdEllipsoid(r - vec3(0., .8, 0.), vec3(.24, .25, .24));
  crown = smin(crown, sdEllipsoid(r - vec3(.14, .63, .05), vec3(.17, .15, .16)), .07);
  crown = smin(crown, sdEllipsoid(r - vec3(-.13, .66, -.08), vec3(.16, .15, .17)), .07);
  crown += sin(r.x * 31.) * sin(r.y * 29. + 1.3) * sin(r.z * 33. + .7) * .02;   // its clumps of leaves
  return min(trunk, crown * .65) * s;
}
float elms(vec3 q) {
  float ob = max(max(abs(q.x) - NW, q.z - .1), q.y - G - .66);
  if (ob > .01) return ob;
  // only the nearest of the three along the transept, bounded by the plane halfway to the next
  float z = q.z;
  vec3 at = z > -.4 ? vec3(.02, G, -.14) : z > -.865 ? vec3(-.05, G, -.66) : vec3(.04, G, -1.07);
  float sc = z > -.4 ? .62 : z > -.865 ? .58 : .55;
  float bnd = z > -.4 ? z + .41 : z > -.865 ? min(-.39 - z, z + .875) : -.855 - z;
  return min(elm(q, at, sc), bnd);
}

// \u2500\u2500 1 \xB7 concrete foundations, and the flange under each column \u2500\u2500\u2500\u2500\u2500
float foundations(vec3 q) {
  float ax = abs(q.x), az = abs(q.z), y = q.y - G;
  if (y > .012) return y - .004;
  vec2 c = vec2(ax - colX(ax), az - colZ(az).x);
  float d = sdBox(vec3(c.x, y + .02, c.y), vec3(.013, .02, .013));
  return min(d, sdBox(vec3(c.x, y - .0012, c.y), vec3(.0095, .0012, .0095)));
}

// \u2500\u2500 2 \xB7 cast-iron columns, one, two or three storeys, a connecting piece at each \u2500\u2500
float columns(vec3 q) {
  float ax = abs(q.x), az = abs(q.z), y = q.y - G;
  if (y > HS + .01 || (ax > NW + .02 && y > H3 + .01)) return max(y - HS, ax > NW + .02 ? min(y - H3, ax - NW - .009) : -1.);
  float xl = colX(ax);
  vec2 zl = colZ(az);
  float h = xl < NW + .001 ? HS : zl.y;          // along the transept's sides they rise to its springing
  vec2 c = vec2(ax - xl, az - zl.x);
  float d = max(length(c) - CR, band(y, 0., h));
  float lv = min(y < (H1 + H2) * .5 ? H1 : y < (H2 + H3) * .5 ? H2 : y < (H3 + HS) * .5 ? H3 : HS, h);
  float lh = lv == H3 ? 3. * FT : lv == HS ? FT : 1.5 * FT;
  d = min(d, max(sdBox2(c, vec2(.0088)), abs(y - lv + lh) - lh));
  return min(d, max(min(nextLine(c.x), nextLine(c.y)) - .01, y - HS));
}

// \u2500\u2500 3 \xB7 girders, 3 ft deep: along every line of columns at each storey, and across under the galleries \u2500\u2500
float girders(vec3 q) {
  float ax = abs(q.x), az = abs(q.z), y = q.y - G;
  float lb = max(min(min(abs(y - H1 + 1.5 * FT), abs(y - H2 + 1.5 * FT)), abs(y - H3 + 1.5 * FT)) - 1.5 * FT, band(ax, NW, XE)) - .003;
  if (lb > .006) return lb;
  vec2 zl = colZ(az);
  float w = az - zl.x;
  float lv = min(y < (H1 + H2) * .5 ? H1 : y < (H2 + H3) * .5 ? H2 : H3, zl.y);
  float d = max(web(q.x, y - lv + 3. * FT, 3. * FT), abs(w) - .0018);
  d = min(d, nextLine(w) - .004);
  d = min(d, max(max(web(az, y - H1 + 3. * FT, 3. * FT), abs(ax - colX(ax)) - .0018), band(az, NW, ZS)));
  return max(d, band(ax, NW, XE));
}

// \u2500\u2500 4 \xB7 the nave's boarded floor, 5 \xB7 the side avenues', and the transept's (part 11) \u2500\u2500
float padHole(float ax, float az) { return sdBox2(vec2(ax - colX(ax), az - colZ(az).x), vec2(.013)); }
float naveFloor(vec3 q) {
  float y = q.y - G;
  if (y > .006) return y - .002;
  return max(max(max(abs(y + .004) - .004, abs(q.z) - NW), abs(q.x) - XE), -padHole(abs(q.x), abs(q.z)));
}
float aisleFloor(vec3 q) {
  float ax = abs(q.x), az = abs(q.z), y = q.y - G;
  if (y > .006) return y - .002;
  return max(max(max(abs(y + .004) - .004, band(az, NW, ZE)), band(ax, NW, XE)), -padHole(ax, az));
}
float transeptFloor(vec3 q) {
  float y = q.y - G;
  return max(max(abs(y + .004) - .004, abs(q.x) - NW), band(abs(q.z), NW, ZE));
}

// \u2500\u2500 6 \xB7 galleries: four lines, 24 ft wide, on the lowest girders, railed where they look over a void \u2500\u2500
float galleries(vec3 q) {
  float ax = abs(q.x), az = abs(q.z), y = q.y - G;
  float ob = max(max(abs(y - H1 - 2.5 * FT) - 3. * FT, band(az, NW - .01, ZS)), band(ax, NW, XE));
  if (ob > .01) return ob;
  float zc = az < 72. * FT ? 48. * FT : 96. * FT;
  float d = sdBox2(vec2(az - zc, y - H1 - .5 * FT), vec2(12. * FT, .5 * FT));
  float zr = az < 48. * FT ? NW : az < 72. * FT ? 60. * FT : 84. * FT;
  float rail = length(vec2(az - zr, y - H1 - 4.5 * FT)) - .001;
  float xp = q.x - 4. * FT * floor(q.x / (4. * FT) + .5);
  rail = min(rail, max(sdBox2(vec2(xp, az - zr), vec2(.0007)), band(y, H1, H1 + 4.5 * FT)));
  return max(min(d, rail), band(ax, NW, XE));
}

/** A lower bound on the distance to the roofs' layer (trusses, gutters, sash-bars, ridges, glass). */
float roofLB(float ax, float az, float y) {
  float d = max(az - NW, band(y, H3 - 6. * FT, H3 + RH));
  d = min(d, max(band(az, NW, ZS), band(y, H2 - 3. * FT, H2 + RH)));
  d = min(d, max(band(az, ZS, ZE), band(y, H1 - 3. * FT, H1 + RH)));
  return max(d, band(ax, NW, XE)) - .006;
}

// \u2500\u2500 7 \xB7 roof trusses across the building every 24 ft (6 ft deep over the nave) \u2500\u2500
float trusses(vec3 q) {
  float ax = abs(q.x), az = abs(q.z), y = q.y - G;
  float lb = roofLB(ax, az, y);
  if (lb > .006) return lb;
  float cx = abs(ax - colX(ax)) - .002;
  float d = 1e5;
  for (int i = ZERO; i < 3; i++) {
    vec3 t = tier(i);
    if (band(az, t.y, t.z) > .03) continue;
    float D = i == 0 ? 6. * FT : 3. * FT;
    d = min(d, max(max(web(az, y - t.x + D, D), cx), band(az, t.y, t.z)));
  }
  return max(d, ax - XE);
}

// \u2500\u2500 8 \xB7 Paxton gutters along the building every 8 ft, and a transverse gutter over each truss \u2500\u2500
float gutters(vec3 q) {
  float ax = abs(q.x), az = abs(q.z), y = q.y - G;
  float lb = roofLB(ax, az, y);
  if (lb > .006) return lb;
  float zg = 4. * FT + GS * floor((az - 4. * FT) / GS + .5);
  float cx = ax - colX(ax);
  float d = 1e5;
  for (int i = ZERO; i < 3; i++) {
    vec3 t = tier(i);
    if (band(az, t.y, t.z) > .03) continue;
    d = min(d, sdBox2(vec2(az - clamp(zg, max(t.y, 0.), t.z), y - t.x + .0022), vec2(.0032, .0022)));
    d = min(d, max(sdBox2(vec2(cx, y - t.x + .0026), vec2(.0046, .0026)), band(az, t.y, t.z)));
  }
  return max(d, band(ax, NW, XE));
}

// \u2500\u2500 9 \xB7 ridge-and-furrow glazing: ridges, and sash-bars sloping up to them at 2.5 to 1 \u2500\u2500
float glazing(vec3 q) {
  float ax = abs(q.x), az = abs(q.z), y = q.y - G;
  float lb = roofLB(ax, az, y);
  if (lb > .006) return lb;
  float zr = GS * floor(az / GS + .5);
  float xs = q.x - SB * floor(q.x / SB + .5);
  float fz = fold(az);
  float d = 1e5;
  for (int i = ZERO; i < 3; i++) {
    vec3 t = tier(i);
    if (band(az, t.y, t.z) > .03) continue;
    float e = sdBox2(vec2(az - zr, y - t.x - RH + .001), vec2(.0018, .0013));
    e = min(e, max(abs(xs) - .001, abs(y - t.x - RH * fz + .0012) - .0011) * .9);
    d = min(d, max(e, band(az, t.y, t.z)));
  }
  return max(d, band(ax, NW, XE));
}

// \u2500\u2500 10 \xB7 glass panes: the roofs' folded glass, and the walls' glass in 8 ft sashes \u2500\u2500
/** The glass (x) and the wall sashes (y). */
vec2 panes(vec3 q) {
  float ax = abs(q.x), az = abs(q.z), y = q.y - G;
  float hall = band(ax, NW, XE);
  float g = roofLB(ax, az, y);
  if (g < .006) {
    float fz = fold(az);
    g = 1e5;
    for (int i = ZERO; i < 3; i++) {
      vec3 t = tier(i);
      if (band(az, t.y, t.z) > .03) continue;
      g = min(g, max((abs(y - t.x - RH * fz) - .0006) * .92, band(az, t.y, t.z)));
    }
  }
  // the walls: outside, at the step of the section, and the nave's clerestory
  float zw = az > (ZS + ZE) * .5 ? ZE : az > (NW + ZS) * .5 ? ZS : NW;
  float lo = zw == ZE ? 0. : zw == ZS ? H1 : H2;
  float hi = zw == ZE ? H1 : zw == ZS ? H2 : H3;
  float wz = abs(az - zw);
  g = min(g, max(wz - .0006, band(y, lo, hi)));
  float f = wz - .002;
  if (f < .01) {
    float xm = q.x - GS * floor((q.x - 4. * FT) / GS + .5) - 4. * FT;
    f = max(sdBox2(vec2(xm, wz), vec2(.0012, .0016)), band(y, lo, hi));
    float tr = min(min(abs(y - lo), abs(y - hi)), abs(y - (lo + hi) * .5));
    f = min(f, max(sdBox2(vec2(wz, tr), vec2(.0016, .0012)), band(y, lo - .002, hi + .002)));
  }
  return vec2(max(g, hall), max(f, hall));
}

// \u2500\u2500 11 \xB7 the transept: its vault, ribs, lunettes and glazed walls \u2500\u2500
/** The glass (x) and the frame (y). */
vec2 transept(vec3 q) {
  float ax = abs(q.x), az = abs(q.z), y = q.y - G;
  float ob = max(max(ax - NW - .004, az - ZE - .003), -y - .001);
  if (ob > .006) return vec2(ob);
  vec2 v = vec2(q.x, y - HS);
  float r = length(v);
  float above = -v.y;
  float ez = abs(az - ZE);
  float g = above, f = above;
  if (above < .01) {
    // the vault's glass, folded in ridges and furrows that follow the arch, and its ribs every 24 ft
    g = max(max((abs(r - NW - RH * fold(az)) - .0006) * .92, above), az - ZE);
    float zr = min(12. * FT + BAY * floor((az - 12. * FT) / BAY + .5), ZE);
    f = max(max(abs(r - NW + 1.5 * FT) - 1.5 * FT, abs(az - zr) - .5 * FT), above);
    // the lunettes at the ends: glass, 16 spokes and two rings
    g = min(g, max(ez - .0006, max(r - NW, above)));
    if (ez < .012) {
      float a = atan(max(v.y, 0.), v.x);
      float da = a - floor(a / (PI / 16.) + .5) * (PI / 16.);
      float sp = max(max(abs(r * sin(da)) - .0013, band(r, .28 * NW, NW)), above);
      sp = min(sp, max(min(abs(r - .28 * NW), abs(r - .64 * NW)) - .0016, max(r - NW, above)));
      f = min(f, max(sp, ez - .0018));
    } else f = min(f, ez - .002);
  }
  // its fronts below the lunettes, its sides above the hall's roofs, and the springing beams
  float side = abs(ax - NW);
  float tb = tierH(az);
  g = min(g, max(max(ez - .0006, ax - NW), band(y, 0., HS)));
  g = min(g, max(max(side - .0006, band(y, tb, HS)), az - ZE));
  float fr = max(sdBox2(vec2(side, y - HS + FT), vec2(.0032, FT)), az - ZE);
  if (ez < .01) {
    float xm = ax - GS * floor((ax - 4. * FT) / GS + .5) - 4. * FT;
    float tr = min(min(abs(y - H1), abs(y - H2)), abs(y - H3));
    fr = min(fr, max(min(sdBox2(vec2(xm, ez), vec2(.0013, .0017)), sdBox2(vec2(ez, tr), vec2(.0017, .0013))), max(ax - NW, band(y, 0., HS))));
  } else fr = min(fr, ez - .003);
  return vec2(g, min(f, fr));
}

vec2 map(vec3 p) {
  float A = uApart;
  // bounds: the hall up to the nave's roof, the transept up to its crown (both growing when taken apart)
  float lo = G - .05 - .3 * A, hi = G + .46 + .7 * A, th = G + .74 + .86 * A;
  float bound = sdBox(p - vec3(0., (lo + hi) * .5, 0.), vec3(XE + .02, (hi - lo) * .5, ZE + .02));
  bound = min(bound, sdBox(p - vec3(0., (lo + th) * .5, 0.), vec3(NW + .02, (th - lo) * .5, ZE + .02)));
  if (bound > .02) return vec2(bound, 0.);
  // The section: the hall cut away just beside the transept (taken apart, the parts only move up or down).
  float s = p.x - .25;
  vec2 res = vec2(1e5, 0.);
  vec3 q;
  float d, g;
  vec2 dd;

  res = U(res, vec2(cutaway(rise(elms(p), 0, p.y, G, G + .66), s), 20.));

  q = p - apart(vec3(0., -.3, 0.));
  res = U(res, vec2(cutaway(rise(foundations(q), 1, q.y, G - .045, G + .004), s), 21.));

  res = U(res, vec2(cutaway(rise(columns(p), 2, p.y, G, G + HS), s), 22.));

  q = p - apart(vec3(0., .06, 0.));
  res = U(res, vec2(cutaway(rise(girders(q), 3, q.y, G + H1 - .03, G + H3), s), 23.));

  q = p - apart(vec3(0., -.17, 0.));
  g = built(4);
  d = g <= 0. ? 1e5 : max(naveFloor(q), abs(q.x) - mix(0., XE + .01, g));
  res = U(res, vec2(cutaway(d, s), 24.));
  res = U(res, vec2(cutaway(rise(transeptFloor(q), 11, q.y, G - .02, G + .001), s), 31.));

  q = p - apart(vec3(0., -.25, 0.));
  g = built(5);
  d = g <= 0. ? 1e5 : max(aisleFloor(q), abs(q.z) - mix(NW, ZE + .01, g));
  res = U(res, vec2(cutaway(d, s), 25.));

  q = p - apart(vec3(0., .12, 0.));
  g = built(6);
  d = g <= 0. ? 1e5 : max(galleries(q), abs(q.x) - mix(NW - .01, XE + .01, g));
  res = U(res, vec2(cutaway(d, s), 26.));

  q = p - apart(vec3(0., .3, 0.));
  g = built(7);
  d = g <= 0. ? 1e5 : max(trusses(q), abs(q.x) - mix(NW - .01, XE + .01, g));
  res = U(res, vec2(cutaway(d, s), 27.));

  q = p - apart(vec3(0., .44, 0.));
  g = built(8);
  d = g <= 0. ? 1e5 : max(gutters(q), abs(q.x) - mix(NW - .01, XE + .01, g));
  res = U(res, vec2(cutaway(d, s), 28.));

  q = p - apart(vec3(0., .57, 0.));
  g = built(9);
  d = g <= 0. ? 1e5 : max(glazing(q), abs(q.x) - mix(NW - .01, XE + .01, g));
  res = U(res, vec2(cutaway(d, s), 29.));

  q = p - apart(vec3(0., .7, 0.));
  g = built(10);
  dd = g <= 0. ? vec2(1e5) : max(panes(q), vec2(abs(q.x) - mix(NW - .01, XE + .01, g)));
  res = U(res, vec2(SHELL(cutaway(dd.x, s)), 90.));
  res = U(res, vec2(cutaway(dd.y, s), 30.));

  q = p - apart(vec3(0., .86, 0.));
  dd = transept(q);
  float top = G + HS + NW + .01;
  res = U(res, vec2(SHELL(cutaway(rise(dd.x, 11, q.y, G, top), s)), 91.));
  res = U(res, vec2(cutaway(rise(dd.y, 11, q.y, G, top), s), 31.));
  return res;
}
`};export{s as scene};
