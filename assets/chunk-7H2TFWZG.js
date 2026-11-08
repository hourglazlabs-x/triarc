import{a}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var s={id:"D01-dome",cam:[2.281,1.829,5.506],target:[0,.12,0],floor:-1.56,ring:1.62,accent:e(a.D01),poster:2.5,parts:[{name:"octagonal drum",view:{az:22.5,el:1,zoom:1.12}},{name:"corner ribs",view:{el:8,zoom:.9}},{name:"intermediate ribs",inside:!0,view:{az:-22.5,el:4,zoom:.78}},{name:"inner shell",inside:!0,view:{az:-22.5,el:10,zoom:.9}},{name:"outer shell",view:{el:6,zoom:.92}},{name:"horizontal ribs",inside:!0,view:{az:-22.5,el:2,zoom:.74}},{name:"walkways and stairs",inside:!0,view:{az:-22.5,el:2,zoom:.7}},{name:"stone chains",inside:!0,view:{az:-22.5,el:6,zoom:.74}},{name:"wooden chain",inside:!0,view:{az:-22.5,el:-2,zoom:.7}},{name:"herringbone brickwork",inside:!0,view:{az:-22.5,el:6,zoom:.7}},{name:"closing ring",view:{el:26,zoom:.72}},{name:"lantern",view:{el:4,zoom:.74}}],glsl:`
// One unit is 25 m (1 m = .04). In the dome, h is the height above the springing and r the radius on the shells'
// arc about their shared centre, in the plane of a corner (the octagonal radius rho = u / cos 22.5\xB0).
const float YD = -1.5;                // the drum's foot
const float YS = -.98;                // the springing, 13 m up
const float CC = -.548;               // the shells' shared centre, 13.7 m beyond the axis
const float RI = 1.456;               // the inner shell's arc: 4/5 of 45.5 m
const float TI = .092;                // its thickness (2.2 m across the sail)
const float RIE = 1.548;              // its back
const float RO = 1.65;                // the outer shell's arc: 3/4 of 55 m
const float HR = 1.26;                // 31.5 m: top of the shells, foot of the closing ring
const float HT = 1.42;                // 35.5 m: top of the ring, the lantern's foot
const float YL = YS + HT;
const float EYE = .104;               // the eye, 2.6 m to its corners
const float K8 = .92388, S8 = .38268; // cos, sin 22.5\xB0
const float K7 = .99144, S7 = .13053; // cos, sin 7.5\xB0
const float UO = 1.0181, UI = .8389;  // the drum's faces from the axis (corners at 27.55 and 22.7 m)

vec3 palette(int i) {
  if (i == 0) return vec3(.92, .89, .80);   // drum: marble and stone
  if (i == 1) return vec3(1., .97, .92);    // corner ribs: white marble outside
  if (i == 2) return vec3(.92, .74, .52);   // intermediate ribs
  if (i == 3) return vec3(.86, .50, .36);   // inner shell: brick
  if (i == 4) return vec3(.90, .40, .24);   // outer shell: terracotta tiles
  if (i == 5) return vec3(.98, .82, .56);   // horizontal ribs
  if (i == 6) return vec3(.62, .84, 1.);    // walkways and stairs
  if (i == 7) return vec3(.66, .73, .82);   // stone chains: grey sandstone
  if (i == 8) return vec3(.80, .54, .30);   // wooden chain: chestnut
  if (i == 9) return vec3(1., .64, .40);    // herringbone brickwork
  if (i == 10) return vec3(.95, .94, .90);  // closing ring: stone
  return vec3(.98, .97, .93);               // lantern: white marble
}

float sdBox2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
/** Share of a turn round the axis, from -x through +z (toward the viewer), +x and -z: a cheap angle for the sweeps. */
float turn(vec3 p) { float s = p.z / (abs(p.x) + abs(p.z) + 1e-5); return (p.x > 0. ? 2. - s : p.z >= 0. ? s : 4. + s) * .25; }
/** Built round the dome: absent where the turn f is past the share g built (a distance bound), whole at g = 1. */
float sweep(float f, float g, float rh) { return g >= 1. || f <= g ? -1. : min(min(f - g, 1. - f) * 4., 1.) * rh * .9; }

float lantern(vec3 p, float u, float av, float cd, out float gilt) {
  float h = p.y;
  float rc = K8 * u + S8 * av;                                                                // out along a corner
  float d = max(max(u - .155, .0961 - u), abs(h - .024) - .024);                             // the plinth
  float win = min(max(max(av - .03, .12 - h), h - .38), length(vec2(av, h - .38)) - .03);
  d = min(d, max(max(max(u - .1294, .0961 - u), abs(h - .254) - .206), -win));              // 7 m across; 8 windows
  float sl = (rc - .24) * .8245 + (h - .3) * .5654;
  d = min(d, max(max(cd - .018, max(rc - .24, .12 - rc)), max(abs(h - .254) - .206, sl)));  // buttresses
  d = min(d, max(length(vec2(rc - .226, h - .29)) - .02, cd - .022));                        // their volutes
  d = min(d, max(max(u - .148, .09 - u), abs(h - .486) - .026));                             // the cornice
  d = min(d, max(u - .122, abs(h - .532) - .02));                                            // the attic
  float cone = (u + .3912 * (h - .552) - .1146) / 1.0738;
  d = min(d, max(min(cone, max(cd - .005, cone - .006)), max(.552 - h, h - .812)));         // the cone, ribbed
  gilt = min(length(vec3(p.x, h - .846, p.z)) - .046,                                         // the sphere, 22.3 m up
             min(sdBox(vec3(p.x, h - .976, p.z), vec3(.006, .084, .006)), sdBox(vec3(p.x, h - 1., p.z), vec3(.04, .006, .006))));
  return d;
}

float cutS(vec3 p) { return p.z; }

vec2 map(vec3 p) {
  float ap = uApart;
  float rh = length(p.xz);
  float bnd = max(rh - (1.2 + .4 * ap), max(YD - .1 * ap - .02 - p.y, p.y - (1.52 + .42 * ap)));
  if (bnd > .1) return vec2(bnd, 0.);
  bool xray = (uBuild > 0. || ap > 0.) && uCut <= 0.;
  float cs = cutS(p);
  // The octagon folded onto half a face: u along the face's normal, av across it (faces at multiples of 45\xB0).
  vec2 fq = abs(p.xz);
  if (fq.y > fq.x) fq = fq.yx;
  float kc = dot(fq, vec2(-S8, K8));
  if (kc > 0.) fq -= 2. * kc * vec2(-S8, K8);
  float u = fq.x, av = fq.y;
  float cd = abs(kc);                     // to the nearest corner's plane
  float id = abs(-S7 * u + K7 * av);      // to the nearest hidden rib's plane
  float tu = turn(p);
  vec2 res = vec2(1e5, 0.);
  float d;

  // 0 Octagonal drum: the wall with corner pilasters, base and cornice, a gallery inside, a round window in each face.
  float hd = p.y + .08 * ap - YD;
  float rw = length(vec2(av, hd - .3));
  d = min(min(max(u - UO, abs(hd - .26) - .26), max(max(u - UO - .014, cd - .04), abs(hd - .25) - .25)),
          min(max(u - UO - .03, abs(hd - .5) - .02), max(u - UO - .016, abs(hd - .024) - .024)));
  d = min(max(d, UI - u), max(max(u - UI, UI - .045 - u), abs(hd - .49) - .012));
  d = min(max(d, .096 - rw), max(abs(rw - .108) - .012, abs(u - UO - .006) - .008));
  res = U(res, vec2(cutaway(rise(d, 0, hd, 0., .53), cs), 20.));
  d = max(rw - .1, abs(u - UO + .05) - .004);                                               // the stained glass
  res = U(res, vec2(cutaway(rise(d, 0, hd, 0., .53), cs), 60.));

  // The dome. Taken apart, its layers grow apart along the shells' curve (r less an offset each), ring and lantern lift.
  float rho = u / K8;
  float h = p.y - YS;
  float r0 = length(vec2(rho - CC, h));
  float kH = clamp(h / HR, 0., 1.);
  float t = mix(.034, .0168, kH);                                  // the outer shell, 80 cm thinning to 40 cm
  float cm = (RIE + RO - t) * .5, ch = (RO - t - RIE) * .5;        // the cavity's middle and half-width
  float clipH = max(-h, h - HR);
  float wk = .12 + .36 * clamp(floor((h - .12) / .36 + .5), 0., 2.);   // the nearest walkway: 3, 12, 21 m
  float dv = abs(h - wk - .04) - .04;                                   // a doorway's height above it
  // 3 Inner shell.
  d = cutaway(rise(max(abs(r0 - RI - TI * .5) - TI * .5, clipH) * K8, 3, h, 0., HR), cs);
  res = U(res, xray ? vec2(d, 23.) : vec2(SHELL(d), 43.));
  // 4 Outer shell.
  float r = r0 - .31 * ap;
  d = cutaway(rise(max(abs(r - RO + t * .5) - t * .5, clipH) * K8, 4, h, 0., HR), cs);
  res = U(res, xray ? vec2(SHELL(d), 44.) : vec2(d, 24.));
  // 1 Corner ribs: walls across the cavity (doorways where the walkways pass) and white marble proud of the tiles.
  r = r0 - .38 * ap;
  d = max(max(cd - mix(.036, .02, kH), (abs(r - cm + .004) - ch - .004) * K8), -max(dv, (abs(r - cm) - ch + .004) * K8));
  d = max(min(d, max(cd - mix(.03, .017, kH), (abs(r - RO - .012) - .024) * K8)), clipH);
  res = U(res, vec2(cutaway(rise(d, 1, h, 0., HR), cs), 21.));
  // 2 Intermediate ribs: two in each sail, across the cavity.
  r = r0 - .13 * ap;
  d = max(max(id - mix(.017, .01, kH), (abs(r - cm) - ch - .004) * K8), max(-max(dv, (abs(r - cm) - ch + .004) * K8), clipH));
  res = U(res, vec2(cutaway(rise(d, 2, h, 0., HR), cs), 22.));
  // 5 Horizontal ribs: ten rings of shallow arches from rib to rib across the cavity, 2, 5 \u2026 29 m up.
  r = r0 - .21 * ap;
  float yk = clamp(floor((h + .04) / .12 + .5), 1., 10.) * .12 - .04;
  float tq = av / max(u, .001);
  float xb = clamp(tq < .13165 ? tq / .13165 : (tq - .26795) / .14, -1., 1.);
  d = max(max(h - yk - .012, yk - .022 + .016 * (1. - xb * xb) - h), (abs(r - cm) - ch) * K8);
  bool stairBay = p.z < 0. && abs(p.x) < -p.z * .13165;
  d = stairBay ? max(d, (.021 - abs(r - RIE - .034)) * K8) : d;                               // where the stair passes
  res = U(res, vec2(cutaway(rise(d, 5, h, 0., HR), cs), 25.));
  // 6 Walkways and stairs: three floors round the cavity; the stair climbs the middle bay of the sail facing -z in
  // zigzag flights of six steps, from the first walkway to the top.
  r = r0 - .25 * ap;
  d = max(abs(h - wk + .007) - .007, (abs(r - cm) - ch) * K8);
  float L2 = max(-p.z * .13165 - .02, .01);
  float hs = h - .12;
  float fl = clamp(floor(hs / .18), 0., 5.);
  float yf = hs - .18 * fl;
  float tt = (mod(fl, 2.) < .5 ? p.x : -p.x) + L2;
  float g = L2 / 3.;
  float j = clamp(floor(tt / g), 0., 5.);
  float st = sdBox2(vec2(tt - (j + .5) * g, yf - (j + 1.) * .03 + .025), vec2(g * .5, .025));
  j = min(j + 1., 5.);
  st = min(st, sdBox2(vec2(tt - (j + .5) * g, yf - (j + 1.) * .03 + .025), vec2(g * .5, .025)));
  st = max(max(st, (abs(r - RIE - .034) - .018) * K8), max(max(abs(p.x) - L2, p.z), max(hs - 1.08, -hs)));
  d = min(d, st);
  res = U(res, vec2(cutaway(rise(d, 6, h, 0., HR), cs), 26.));
  // 7 Stone chains: sandstone belts in the inner shell at the walkways' levels, rising as a curb above each floor,
  // cramped with iron.
  r = r0 - .085 * ap;
  vec2 qs = vec2(h - wk - .005, r - RIE + .022);
  float jv = abs(av - .12 * floor(av / .12 + .5));
  d = min(max(sdBox2(qs, vec2(.019, .038)) * K8, .0025 - jv), sdBox(vec3(jv, qs.x, (qs.y + .042) * K8), vec3(.016, .008, .005)));
  res = U(res, vec2(cutaway(rise(d, 7, h, 0., HR), cs), 27.));
  // 8 Wooden chain: 24 chestnut beams round the dome 6.9 m up, clamped at each rib; built beam by beam.
  r = r0 - .17 * ap;
  vec2 qw = vec2(h - .276, r - RIE - .022);
  d = min(sdBox2(qw, vec2(.016)), max(sdBox2(qw, vec2(.024)), (min(cd, id) - .048) / K8)) * K8;
  float gb = built(8);
  d = gb <= 0. ? 1e5 : max(d, sweep(tu, gb, rh));
  res = U(res, vec2(cutaway(d, cs), 28.));
  // 9 Herringbone brickwork: bricks on end on the inner shell's back, above the stone base, shifted course by course.
  r = r0 - .045 * ap;
  float cr = floor(h / .052);
  float wv = av - (cr + .5) * .028;
  wv -= .096 * floor(wv / .096 + .5);
  d = max(sdBox(vec3(wv, h - (cr + .5) * .052, (r - RIE - .006) * K8), vec3(.013, .02, .009)) * .9, max(.284 - h, h - HR));
  res = U(res, vec2(cutaway(rise(d, 9, h, .28, HR), cs), 29.));
  // 10 Closing ring: the open stone ring where the ribs meet, set block by block.
  float hy = h - .36 * ap;
  float rr = length(vec2(rho - CC, hy));
  d = max(max(rr - RO - .004, RI - rr), max(EYE - rho, max(HR - hy, hy - HT)));
  d = min(d, max(max(rho - .316, .2 - rho), abs(hy - HT + .01) - .01));                       // the terrace's edge
  d = min(d, max(max(rr - RO - .012, RIE - rr), abs(hy - HR - .012) - .012)) * K8;           // where the ribs meet it
  gb = built(10);
  d = gb <= 0. ? 1e5 : max(d, sweep(tu, floor(gb * 24. + .999) / 24., rh));
  res = U(res, vec2(cutaway(d, cs), 30.));

  // 11 Lantern.
  vec3 q = p - vec3(0., YL + .42 * ap, 0.);
  float gilt;
  d = lantern(q, u, av, cd, gilt);
  res = U(res, vec2(cutaway(rise(d, 11, q.y, 0., 1.07), cs), 31.));
  res = U(res, vec2(cutaway(rise(gilt, 11, q.y, 0., 1.07), cs), 71.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  int k = int(m + .5);
  if (k == 24) return -.0012 * smoothstep(.15, 0., abs(fract((p.y - YS) / .022) - .5) - .35);   // tile courses
  if (k == 20) return -.001 * smoothstep(.1, 0., abs(fract(p.y / .06) - .5) - .4);              // marble panels
  return 0.;
}
`};export{s as scene};
