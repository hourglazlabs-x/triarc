import{a}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var r={id:"D05-universal-space",cam:[2.46,1.75,3.93],target:[0,-.12,0],floor:-1.15,ring:2,accent:e(a.D05),poster:2.5,parts:[{name:"service level",inside:!0,view:{az:-6,el:-2,zoom:.72}},{name:"raised floor",view:{az:-14,el:-8,zoom:.92}},{name:"exterior columns",view:{az:22,el:2,zoom:.9}},{name:"plate girders",view:{el:22,zoom:.9}},{name:"suspended roof",view:{az:-10,el:16}},{name:"roof overhang",view:{az:42,el:6,zoom:.85}},{name:"glass enclosure",view:{az:-20,el:0,zoom:.88}},{name:"open hall",view:{el:12,zoom:.9}},{name:"low partitions",view:{el:30,zoom:.85}},{name:"steel roof grid",inside:!0,view:{az:-8,el:-10,zoom:.8}}],glsl:`
const float MOD = 1. / 6.;           // the 10 ft module
const float GY = -.35;               // grade
const float FY = GY + .1;            // the main floor: 6 ft above grade
const float CH = FY + .3;            // the ceiling, the roof grid's underside: 18 ft clear
const float DK = CH + .037;          // the roof deck: the grid is the span / 36 deep
const float GB = DK + .032;          // the girders' underside: the deck hangs .02 below them on rods
const float GT = GB + .056;          // their top: the span / 19.2 deep
const float ZC = .533;               // the column lines: half the 64 ft span
const float XE = 1.;                 // the end girders, 60 ft either side of the middle one
const float XO = XE + 1. / 3.;       // the roof's ends: 20 ft cantilevers
const float RZ = .5;                 // the roof's half-width
const vec2 GLS = vec2(.95, .48);     // the glass: half-sizes
// Low partitions (centre x, z, half-sizes), 7 ft 9 in tall.
const vec4 PARTS[5] = vec4[5](vec4(-.6, -.2, .18, .006), vec4(-.35, .15, .006, .14), vec4(.1, -.25, .2, .006), vec4(.45, .2, .16, .006), vec4(.72, -.08, .006, .15));

vec3 palette(int i) {
  if (i == 0) return vec3(.70, .78, .92);   // service level
  if (i == 1) return vec3(.86, .93, .98);   // raised floor
  if (i == 2) return vec3(.76, .85, 1.);    // exterior columns
  if (i == 3) return vec3(1., .70, .42);    // plate girders
  if (i == 4) return vec3(.95, .96, 1.);    // suspended roof
  if (i == 5) return vec3(.62, .80, 1.);    // roof overhang
  if (i == 6) return vec3(.62, .92, 1.);    // glass enclosure
  if (i == 7) return vec3(.55, 1., .80);    // open hall
  if (i == 8) return vec3(1., .80, .55);    // low partitions
  return vec3(.85, .66, 1.);                // steel roof grid
}

float sdBox2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }

/** An H-section in plan, half sizes: flanges b wide (x), depth h (y of p), flange and web half-thicknesses tf, tw. */
float sdH(vec2 p, float b, float h, float tf, float tw) {
  p = abs(p);
  return min(sdBox2(p - vec2(0., h - tf), vec2(b, tf)), sdBox2(p, vec2(tw, h)));
}

/** Distance to a box's twelve edges, each a bar of half-thickness e. */
float sdFrame(vec3 p, vec3 b, float e) {
  p = abs(p) - b; vec3 q = abs(p + e) - e;
  return min(min(length(max(vec3(p.x, q.y, q.z), 0.)) + min(max(p.x, max(q.y, q.z)), 0.),
                 length(max(vec3(q.x, p.y, q.z), 0.)) + min(max(q.x, max(p.y, q.z)), 0.)),
                 length(max(vec3(q.x, q.y, p.z), 0.)) + min(max(q.x, max(q.y, p.z)), 0.));
}

/** Cut open lengthwise: the front half is removed (between two lines of the roof grid). */
float cutS(vec3 q) { return q.z - MOD * .5; }

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., -.13 + uApart * .1, .02 + uApart * .14), vec3(1.6, .34 + uApart * .44, .84 + uApart * .14));
  if (bound > .25) return vec2(bound, 0.);
  vec3 q;
  float d;
  vec2 res = vec2(1e5, 0.);

  // The ground at grade (not a part), open over the sunken service level.
  d = max(sdBox(p - vec3(0., GY - .006, 0.), vec3(1.46, .006, .66)), -sdBox2(p.xz, vec2(1.25, .47)));
  res = U(res, vec2(cutaway(d, cutS(p)), 4.));

  // 0 \xB7 The service level: outer walls with a band of windows above grade, small rooms on a standard grid either
  // side of a corridor.
  q = p - apart(vec3(0., -.3, 0.));
  float box = sdBox(q - vec3(0., (FY - .02 + GY - .1) * .5, 0.), vec3(1.25, (FY - .02 - GY + .1) * .5, .47));
  d = abs(box + .006) - .006;
  float win = max(max(abs(q.y - (GY + FY) * .5 + .01) - .025, abs(q.x - round(q.x / MOD) * MOD) - MOD * .5 + .012), .44 - abs(q.z));
  d = max(d, -win);
  float wx = abs(q.x - round(q.x / (2. * MOD)) * 2. * MOD) - .004;
  d = min(d, max(min(max(wx, .07 - abs(q.z)), abs(abs(q.z) - .07) - .004), box));
  res = U(res, vec2(cutaway(rise(d, 0, q.y, GY - .1, FY), cutS(q)), 20.));

  // 1 \xB7 The raised floor: the main floor slab, running on under the porches.
  q = p - apart(vec3(0., -.15, 0.));
  d = sdBox(q - vec3(0., FY - .01, 0.), vec3(XO, .01, .52));
  res = U(res, vec2(cutaway(rise(d, 1, q.y, FY - .03, FY), cutS(q)), 21.));

  // 2 \xB7 The exterior columns: six steel H-columns outside the building line, on base plates, up to the girders' top.
  q = p;
  vec2 cq = vec2(q.x - clamp(round(q.x), -1., 1.), abs(q.z) - ZC);
  d = max(sdH(cq, .02, .022, .004, .003), abs(q.y - (GY + GT) * .5) - (GT - GY) * .5);
  d = min(d, sdBox(vec3(cq.x, q.y - GY - .004, cq.y), vec3(.034, .004, .034)));
  res = U(res, vec2(cutaway(rise(d, 2, q.y, GY, GT), cutS(q)), 22.));

  // 3 \xB7 The plate girders: deep welded I-sections spanning across the top, column to column, stiffened every 5 ft;
  // lowered into place.
  q = p - apart(vec3(0., .44, 0.)) - vec3(0., (1. - built(3)) * .25, 0.);
  vec2 gq = vec2(q.x - clamp(round(q.x), -1., 1.), q.y - (GB + GT) * .5);
  float zs = q.z - round(q.z / .0833) * .0833;
  d = min(sdH(gq.xy, .016, (GT - GB) * .5, .0026, .0028), max(abs(gq.x) - .014, abs(zs) - .0016));
  d = max(max(d, abs(gq.y) - (GT - GB) * .5), abs(q.z) - ZC - .022);
  res = U(res, vec2(built(3) > 0. ? cutaway(d, cutS(q)) : 1e5, 23.));

  // 4 \xB7 The suspended roof between the end girders, and 5 \xB7 the roof overhang past them: one deck, a faint fill with
  // a solid edge, hung on rods from the girders' underside; the overhang grows out past the end supports.
  q = p - apart(vec3(0., .3, 0.));
  float ey = abs(q.y - DK - .006) - .006;
  float rr = sdBox2(q.xz, vec2(XO, RZ));
  float edge = max(abs(rr + .012) - .012, ey);
  float fill = max(rr, ey);
  float inner = abs(q.x) - XE, reach = abs(q.x) - (XE + (XO - XE) * built(5));
  float hang = sdBox(vec3(q.x - clamp(round(q.x), -1., 1.), q.y - (GB + DK + .012) * .5, q.z - clamp(round(q.z / .178), -2., 2.) * .178), vec3(.0028, (GB - DK - .012) * .5, .0028));
  float b4 = abs(q.x) - built(4) * XE;
  res = U(res, vec2(built(4) > 0. ? cutaway(max(min(max(edge, inner), hang), b4), cutS(q)) : 1e5, 24.));
  res = U(res, vec2(built(4) > 0. ? SHELL(cutaway(max(max(fill, inner), b4), cutS(q))) : 1e5, 44.));
  q = p - apart(vec3(0., .36, 0.));
  ey = abs(q.y - DK - .006) - .006;
  rr = sdBox2(q.xz, vec2(XO, RZ));
  edge = max(abs(rr + .012) - .012, ey);
  fill = max(rr, ey);
  inner = abs(q.x) - XE;
  reach = abs(q.x) - (XE + (XO - XE) * built(5));
  res = U(res, vec2(built(5) > 0. ? cutaway(max(max(edge, -inner), reach), cutS(q)) : 1e5, 25.));
  res = U(res, vec2(built(5) > 0. ? SHELL(cutaway(max(max(fill, -inner), reach), cutS(q))) : 1e5, 45.));

  // 6 \xB7 The glass enclosure: panes framed by full-height steel I-beam mullions on the module, with a head and sill.
  q = p - apart(vec3(0., 0., .32));
  float yg = abs(q.y - (FY + CH) * .5) - (CH - FY) * .5;
  float v = sdBox2(q.xz, GLS);
  vec2 ga = abs(q.xz) - GLS;
  float sg = ga.x > ga.y ? q.z : q.x;
  d = max(sdH(vec2(sg - round(sg / MOD) * MOD, v - .011), .009, .011, .002, .0025), yg);
  d = min(d, max(abs(v - .005) - .006, abs(yg + .006) - .006));
  res = U(res, vec2(cutaway(rise(d, 6, q.y, FY, CH), cutS(q)), 26.));
  res = U(res, vec2(SHELL(cutaway(rise(max(abs(v) - .002, yg), 6, q.y, FY, CH), cutS(q))), 86.));

  // 7 \xB7 The open hall: the one room's volume outlined in light, and a plane of light sweeping its length unobstructed.
  q = p - apart(vec3(0., .05, 0.)) - vec3(0., (FY + CH) * .5, 0.);
  float sx = .86 * sin(uTime * .35);
  d = sdFrame(q, vec3(GLS.x - .02, (CH - FY) * .5 - .005, GLS.y - .02), .004);
  d = min(d, sdFrame(q - vec3(sx, 0., 0.), vec3(.0001, (CH - FY) * .5 - .012, GLS.y - .03), .006));
  d = min(d, sdBox(q - vec3(sx, (FY - CH) * .5 + .002, 0.), vec3(.022, .002, GLS.y - .03)));
  res = U(res, vec2(cutaway(rise(d, 7, q.y, (FY - CH) * .5, (CH - FY) * .5), cutS(q + vec3(0., (FY + CH) * .5, 0.))), 67.));

  // 8 \xB7 Low partitions: free-standing panels 7 ft 9 in tall, well below the ceiling.
  q = p - apart(vec3(0., .1, 0.));
  d = 1e5;
  for (int i = ZERO; i < 5; i++) d = min(d, sdBox2(q.xz - PARTS[i].xy, PARTS[i].zw));
  d = max(d, abs(q.y - FY - .0645) - .0645);
  res = U(res, vec2(cutaway(rise(d, 8, q.y, FY, FY + .129), cutS(q)), 28.));

  // 9 \xB7 The steel roof grid: a deep two-way grid of beams on the module under the deck, an edge beam round it.
  q = p - apart(vec3(0., .2, 0.));
  rr = sdBox2(q.xz, vec2(XO, RZ));
  vec2 gm = abs(fract(q.xz / MOD + .5) - .5) * MOD;
  float gw = min(gm.x, gm.y);
  d = min(gw - .0022, max(gw - .007, q.y - CH - .004));
  d = min(d, abs(rr) - .004);
  d = max(max(d, rr), abs(q.y - (CH + DK) * .5) - (DK - CH) * .5);
  d = max(d, q.x - mix(-XO - .05, XO + .05, built(9)));
  res = U(res, vec2(built(9) > 0. ? cutaway(d, cutS(q)) : 1e5, 29.));
  return res;
}
`};export{r as scene};
