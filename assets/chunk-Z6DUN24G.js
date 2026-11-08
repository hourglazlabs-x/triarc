import{a as t}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var s={id:"D05-skin-and-bones",cam:[4.14,1.62,4.9],target:[.08,-.06,.08],floor:-1.62,ring:1.9,accent:e(t.D05),poster:2,parts:[{name:"steel skeleton",view:{el:12}},{name:"fireproof encasement",inside:!0,view:{az:-4,el:40,zoom:.62}},{name:"cover plates",view:{az:-10,el:4,zoom:.8}},{name:"column bay",view:{az:-24,el:0,zoom:.85}},{name:"I-beam mullions",view:{az:12,el:-4,zoom:.72}},{name:"glass skin",view:{az:-4,el:-8,zoom:.85}},{name:"corner",view:{az:2,el:2,zoom:.56}}],glsl:`
const float Y0 = -1.5;               // the ground
const float FH = .6;                 // the storey: 10 ft 6 in
const float C = .5;                  // the corner column's axes, x = z = .5; the far columns one bay back
const float BAY = 1.2;               // the column bay: 21 ft
const float MS = .3;                 // the mullions: 5 ft 3 in on centre, four to a bay
const float XE = -1.05;              // the fragment's cut ends, past the far columns
const float EN = .0429;              // half the encased column: 14 in of steel and 2 in of concrete each side
const float FZ = C + EN;             // the encasement's face, where the plates and the glass stand
const float PW = .0554;              // half a column plate: a mullion's flange, and 9 in each side
const float BD = .043;               // half a floor beam's depth: 18 in

vec3 palette(int i) {
  if (i == 0) return vec3(1., .62, .38);    // steel skeleton
  if (i == 1) return vec3(.70, .74, .80);   // fireproof encasement
  if (i == 2) return vec3(.76, .85, 1.);    // cover plates
  if (i == 3) return vec3(.60, .78, .95);   // column bay
  if (i == 4) return vec3(.95, .96, 1.);    // I-beam mullions
  if (i == 5) return vec3(.62, .92, 1.);    // glass skin
  return vec3(1., .78, .40);                // corner
}

float sdBox2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }

/** An H-section in plan, half sizes: flanges b wide (x), depth h (y of p), flange and web half-thicknesses tf, tw. */
float sdH(vec2 p, float b, float h, float tf, float tw) {
  p = abs(p);
  return min(sdBox2(p - vec2(0., h - tf), vec2(b, tf)), sdBox2(p, vec2(tw, h)));
}

/** Cut open as a plan, through the middle of the second, glazed storey. */
float cutS(vec3 q) { return q.y - (Y0 + 1.5 * FH); }

/** The model is symmetric about its diagonal: fold it, and the front face (z = FZ) stands for both. */
vec3 fold(vec3 p) { return p.x > p.z ? p.zyx : p; }

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(-.24 + uApart * .2, 0., -.24 + uApart * .2), vec3(.92 + uApart * .2, 1.56, .92 + uApart * .2));
  if (bound > .25) return vec2(bound, 0.);
  vec3 f;
  float d, yl;
  vec2 res = vec2(1e5, 0.);
  float ks = clamp(round((p.y - Y0) / FH), 1., 5.);   // the nearest floor
  yl = p.y - Y0 - ks * FH;

  // The ground plate and the floor slabs (not parts): concrete decks inside the frame, none yet on the top floor;
  // they go up with the skeleton.
  f = p;
  d = sdBox(f - vec3((XE + FZ) * .5, Y0 - .02, (XE + FZ) * .5), vec3((FZ - XE) * .5 + .1, .02, (FZ - XE) * .5 + .1));
  vec2 sl = abs(f.xz - (XE + FZ - .012) * .5) - (FZ - .012 - XE) * .5;
  float slab = max(max(sl.x, sl.y), max(abs(yl + .015) - .015, f.y - Y0 - 4. * FH - .1));
  res = U(res, vec2(cutaway(min(d, rise(slab, 0, f.y, Y0, Y0 + 5. * FH + .01)), cutS(f)), 4.));

  // 0 \xB7 The steel skeleton: H-columns on a grid of one bay, and I-beams on every floor, both ways.
  f = fold(p);
  vec2 cg = f.xz - (C - BAY * clamp(round((C - f.xz) / BAY), 0., 1.));
  d = max(sdH(cg, .0333, .0333, .0024, .0014), abs(f.y - Y0 - 2.5 * FH - .005) - 2.5 * FH - .005);
  float bx = max(sdH(vec2(cg.y, yl + BD), .018, BD, .002, .00125), max(XE - f.x, f.x - C - .034));
  float bz = max(sdH(vec2(cg.x, yl + BD), .018, BD, .002, .00125), max(XE - f.z, f.z - C - .034));
  d = min(d, max(min(bx, bz), Y0 + FH * .5 - f.y));
  res = U(res, vec2(cutaway(rise(d, 0, f.y, Y0, Y0 + 5. * FH + .01), cutS(f)), 20.));

  // 1 \xB7 The fireproof encasement: 2 in of concrete round every column and beam, up to the top of the fourth storey.
  f = fold(p);
  f.z -= uApart * .1;
  cg = f.xz - (C - BAY * clamp(round((C - f.xz) / BAY), 0., 1.));
  d = max(sdBox2(cg, vec2(EN)), f.y - Y0 - 4. * FH);
  bx = max(sdBox2(vec2(cg.y, yl + BD), vec2(.0275, BD + .0095)), max(XE - f.x, f.x - C));
  bz = max(sdBox2(vec2(cg.x, yl + BD), vec2(.0275, BD + .0095)), max(XE - f.z, f.z - C));
  d = min(d, max(max(min(bx, bz), Y0 + FH * .5 - f.y), f.y - Y0 - 4. * FH - .01));
  res = U(res, vec2(cutaway(rise(max(d, Y0 - f.y), 1, f.y, Y0, Y0 + 4. * FH), cutS(f)), 21.));

  // 2 \xB7 The cover plates: steel plates over the encased columns' faces, up to the top of the third storey.
  f = fold(p);
  f.z -= uApart * .3;
  float xc = f.x - (C - BAY * clamp(round((C - f.x) / BAY), 0., 1.));
  float y3 = abs(f.y - Y0 - 1.5 * FH) - 1.5 * FH;
  d = max(max(sdBox2(vec2(xc, f.z - FZ - .0016), vec2(PW, .0016)), f.x - FZ - .0032), y3);
  res = U(res, vec2(cutaway(rise(d, 2, f.y, Y0, Y0 + 3. * FH), cutS(f)), 22.));

  // 3 \xB7 The column bay: spandrel plates over the floor edges, spanning from column to column, with a sill on each.
  f = fold(p);
  f.z -= uApart * .38;
  d = max(sdBox2(vec2(f.x - (XE + C) * .5, f.z - FZ - .0016), vec2((C - XE) * .5, .0016)), abs(yl + .033) - .067);
  d = min(d, max(sdBox2(vec2(f.x - (XE + C) * .5, f.z - FZ - .008), vec2((C - XE) * .5, .008)), abs(yl - .04) - .004));
  d = max(max(d, ks > 3.5 ? 1e5 : -1e5), Y0 - f.y);
  res = U(res, vec2(cutaway(rise(d, 3, f.y, Y0, Y0 + 3. * FH + .04), cutS(f)), 23.));

  // 4 \xB7 The I-beam mullions: 8 in deep, 5 ft 3 in on centre, welded onto the plates and the bay's frame, continuous
  // up the face (the one on the corner column belongs to the corner).
  f = fold(p);
  f.z -= uApart * .48;
  float xm = f.x - (C - MS * clamp(round((C - f.x) / MS), 1., 5.));
  float ym = abs(f.y - Y0 - 1.5 * FH - .015) - 1.5 * FH - .015;
  d = max(sdH(vec2(xm, f.z - FZ - .0222), .0125, .019, .002, .00125), ym);
  res = U(res, vec2(cutaway(rise(d, 4, f.y, Y0, Y0 + 3. * FH + .03), cutS(f)), 24.));

  // 5 \xB7 The glass skin: panes filling the frame on the two lowest storeys, set just inside the plates.
  f = fold(p);
  f.z -= uApart * .2;
  d = max(max(abs(f.z - FZ + .004) - .0015, max(XE - f.x, f.x - C + PW)), abs(f.y - Y0 - FH) - FH);
  res = U(res, vec2(SHELL(cutaway(rise(d, 5, f.y, Y0, Y0 + 2. * FH), cutS(f))), 85.));

  // 6 \xB7 The corner: on each face of the corner column's plates an extra steel section that carries the mullions'
  // rhythm round the corner and stiffens the plate, and an angle along the arris where the plates meet.
  f = fold(p - apart(vec3(.42, 0., .42)));
  d = sdH(vec2(f.x - C, f.z - FZ - .0222), .0125, .019, .002, .00125);
  d = min(d, sdBox2(vec2(f.x - FZ + .0051, f.z - FZ - .0045), vec2(.0109, .0013)));
  d = max(d, abs(f.y - Y0 - 1.5 * FH - .015) - 1.5 * FH - .015);
  res = U(res, vec2(cutaway(rise(d, 6, f.y, Y0, Y0 + 3. * FH + .03), cutS(f)), 26.));
  return res;
}
`};export{s as scene};
