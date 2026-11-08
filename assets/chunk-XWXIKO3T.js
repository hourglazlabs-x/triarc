import{a}from"./chunk-4QM5HSGV.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var o={id:"D02-ridge-and-furrow",cam:[2.42,1.27,4.28],target:[0,-.38,.2],floor:-1.6,ring:2,accent:e(a.D02),poster:2.2,parts:[{name:"grooving machine",view:{az:-70,el:10,zoom:.66}},{name:"Paxton gutter",view:{az:-68,el:4,zoom:.74}},{name:"tension rods",view:{az:-16,el:-30,zoom:.74}},{name:"sash-bars",view:{az:-10,el:12,zoom:.7}},{name:"ridge",view:{az:-30,el:16,zoom:.72}},{name:"glass panes",view:{az:0,el:18,zoom:.86}},{name:"transverse gutter",view:{az:45,el:-6,zoom:.76}},{name:"hollow columns",inside:!0,view:{az:30,el:-6,zoom:.86}}],glsl:`
const float FT = .05;            // one foot
const float Y0 = -1.02;          // the floor the columns stand on
const float YG = Y0 + 22. * FT;  // the girders' tops: a 19 ft column and a 3 ft girder
const float YT = YG + .04;       // the Paxton gutters' ends, resting on the transverse gutters
const float GH = .03;            // a Paxton gutter's depth
const float GW = .015;           // half its width
const float RISE = 1.6 * FT;     // a ridge over its gutters: 4 ft at 2.5 to 1
const float CAMB = .02;          // the camber at mid-span (exaggerated)
const float SBS = .08;           // the sash-bars drawn one to every two panes' width
const float XS = 24. * FT;       // a bay: 24 ft between transverse gutters
const float ZC = 12. * FT;       // the columns stand at z = \xB1ZC: a 24 ft bay across
const float CR = .0167;          // a column, 8 in across
const float CRI = .0115;         // its bore
const vec2 MC = vec2(-.55, .84);   // the grooving machine's bench, its middle (x, z)

vec3 palette(int i) {
  if (i == 0) return vec3(1., .72, .44);    // grooving machine
  if (i == 1) return vec3(.98, .82, .52);   // Paxton gutter: timber
  if (i == 2) return vec3(.64, .80, 1.);    // tension rods: iron
  if (i == 3) return vec3(.96, .90, .64);   // sash-bars
  if (i == 4) return vec3(.86, .98, .66);   // ridge
  if (i == 5) return vec3(.62, .93, 1.);    // glass panes
  if (i == 6) return vec3(.46, .84, 1.);    // transverse gutter
  return vec3(.68, .80, 1.);                // hollow columns
}

float sdBox2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
float band(float x, float lo, float hi) { return max(lo - x, x - hi); }
/** A Paxton gutter's camber: nothing at its ends over the transverse gutters, CAMB at mid-span. */
float cam(float x) { float u = (abs(x) - XS * .5) / (XS * .5); return abs(x) < XS ? CAMB * (1. - u * u) : 0.; }
/** The fold across the gutters: 0 over a gutter's line, 1 under a ridge. */
float fold(float z) { return 1. - abs(fract((z - .2) / .4) - .5) * 2.; }
/** The nearest gutter's line across the roof (four, 8 ft apart). */
float gutterZ(float z) { return clamp(.2 + .4 * floor((z - .2) / .4 + .5), -.6, .6); }
/** Rain: dashes along s, moving with it at the given speed, spaced sp apart; the distance to the nearest dash end. */
float rain(float s, float speed, float sp) { return (abs(fract(s / sp - uTime * speed) - .5) - .28) * sp; }
/** A lattice girder 3 ft deep in its own plane: u along it, v up from its underside; 8 ft panels, each crossed. */
float lattice(float u, float v) {
  const float P = .4, D = .15;
  float pu = u - P * floor(u / P + .5);
  float chord = min(abs(v - .007), abs(v - D + .007)) - .007;
  float post = abs(abs(pu) - P * .5) - .005;
  float vv = v - D * .5;
  float xd = min(abs(pu * D - vv * P), abs(pu * D + vv * P)) * 2.34 - .004;
  return max(min(chord, min(post, xd)), band(v, 0., D));
}

// \u2500\u2500 0 \xB7 the grooving machine \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
float machine(vec3 p) {
  vec3 q = vec3(p.x - MC.x, p.y - Y0, p.z - MC.y);
  float b = sdBox(q - vec3(0., .14, .06), vec3(.36, .16, .26));
  if (b > .02) return b;
  // the bench: its top, legs and rails
  float d = sdBox(q - vec3(0., .132, 0.), vec3(.32, .008, .065));
  d = min(d, sdBox(vec3(abs(q.x) - .29, q.y - .062, abs(q.z) - .05), vec3(.008, .062, .008)));
  d = min(d, sdBox(vec3(q.x, q.y - .035, abs(q.z) - .05), vec3(.29, .005, .005)));
  // two standards carrying the spindle across the bench
  d = min(d, sdBox(vec3(q.x, q.y - .18, abs(q.z) - .075), vec3(.02, .045, .006)));
  vec3 s = q - vec3(0., .2, 0.);
  d = min(d, max(length(s.xy) - .006, abs(s.z - .03) - .14));
  // the cutter block, turning, and its four knives
  vec2 r = rot(uTime * 7.) * s.xy;
  float cut = max(min(length(s.xy) - .019, min(sdBox2(r, vec2(.027, .0035)), sdBox2(r, vec2(.0035, .027)))), abs(s.z) - .04);
  d = min(d, cut);
  // the pulley on the spindle's end: rim, hub and six spokes
  vec3 u = s - vec3(0., 0., .15);
  float rr = length(u.xy);
  float pul = max(abs(rr - .045) - .005, abs(u.z) - .009);
  pul = min(pul, max(rr - .011, abs(u.z) - .012));
  vec2 w = rot(uTime * 7.) * u.xy;
  float a = atan(w.y, w.x);
  float da = a - floor(a / (PI / 3.) + .5) * (PI / 3.);
  pul = min(pul, max(max(abs(rr * sin(da)) - .0028, band(rr, .009, .043)), abs(u.z) - .004));
  d = min(d, pul);
  // the belt down to the line shaft from the steam engine, and the shaft running off toward it
  vec3 v = q - vec3(0., 0., .15);
  float belt = min(sdCapsule(v, vec3(-.046, .2, 0.), vec3(-.03, .03, 0.), .0025), sdCapsule(v, vec3(.046, .2, 0.), vec3(.03, .03, 0.), .0025));
  d = min(d, max(belt, abs(v.z) - .008));
  vec3 lw = v - vec3(0., .03, 0.);
  d = min(d, max(abs(length(lw.xy) - .027) - .004, abs(lw.z) - .009));
  d = min(d, max(length(lw.xy) - .006, band(lw.z, -.02, .18)));
  d = min(d, sdBox(lw - vec3(0., -.014, .13), vec3(.014, .016, .012)));
  // the bar being cut: grooved where it has passed under the cutter, a plain blank still to come
  vec3 k = q - vec3(0., .146, 0.);
  float bar = sdBox(k, vec3(.3, .006, .008));
  float done = (abs(k.z) + .6 * k.y - .0085) * .86;
  done = max(done, -sdBox(vec3(k.x, k.y - .002, abs(k.z) - .008), vec3(.4, .0015, .0022)));
  bar = k.x < 0. ? max(bar, done) : bar;
  return min(d, bar);
}

// \u2500\u2500 1 \xB7 Paxton gutters \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
float gutters(vec3 p) {
  float zl = p.z - gutterZ(p.z);
  float yl = p.y - YT - cam(p.x);
  float d = sdBox2(vec2(zl, yl - GH * .5), vec2(GW, GH * .5));
  d = max(d, (abs(zl) - .5 * yl - .009) * .894);              // bevelled off below
  d = max(d, .008 - length(vec2(zl, yl - GH - .002)));         // its channel
  return max(d, band(abs(p.x), .012, XS));
}
/** The rain running along a gutter's channel, both ways from mid-span. */
float gutterRain(vec3 p) {
  float zl = p.z - gutterZ(p.z);
  float yl = p.y - YT - cam(p.x) - GH + .0045;
  float d = sdBox2(vec2(zl, yl), vec2(.0035, .0016));
  d = max(d, rain(abs(abs(p.x) - XS * .5), 1.2, .07));
  return max(d, band(abs(p.x), .02, XS - .006));
}

// \u2500\u2500 2 \xB7 tension rods, cambering each gutter up between its ends \u2500\u2500\u2500\u2500\u2500
float rods(vec3 p) {
  vec3 q = vec3(abs(p.x) - XS * .5, p.y - YT, p.z - gutterZ(p.z));
  vec3 a = vec3(-.54, .001, 0.), b = vec3(0., CAMB - .09, 0.), c = vec3(.54, .001, 0.);
  float d = min(sdCapsule(q, a, b, .0032), sdCapsule(q, b, c, .0032));
  d = min(d, sdCapsule(q, b, vec3(0., CAMB, 0.), .0045));                   // the strut at mid-span
  d = min(d, sdBox(q - b, vec3(.007, .0045, .006)));                        // its shoe on the rod
  vec3 e = vec3(abs(q.x) - .54, q.y + .002, q.z);
  d = min(d, sdBox(e, vec3(.004, .007, .008)));                            // the plates the screws pass through
  d = min(d, max(length(e.yz + vec2(.002, 0.)) - .005, band(e.x, .004, .012)));   // the nuts
  return d;
}

// \u2500\u2500 3 \xB7 sash-bars, 4 \xB7 ridges, 5 \xB7 glass \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
float roofY(vec3 p) { return YT + GH + cam(p.x) + RISE * fold(p.z); }
float sashbars(vec3 p) {
  float dz = abs(p.z - gutterZ(p.z));
  float n = (p.y - roofY(p) + .0024) * .928;
  float xb = p.x - SBS * floor(p.x / SBS + .5);
  float d = max(abs(xb) - .0028, abs(n) - .0045);
  d = max(d, (abs(xb) - .4 * n - .0033) * .93);                // bevelled off below
  d = max(d, band(dz, GW - .002, .196));
  return max(max(d, abs(p.z) - .6), band(abs(p.x), .012, XS));
}
float ridges(vec3 p) {
  float zr = clamp(.4 * floor(p.z / .4 + .5), -.4, .4);
  vec2 c = vec2(p.z - zr, p.y - YT - GH - cam(p.x) - RISE);
  float d = sdBox2(c - vec2(0., -.005), vec2(.006, .005));
  d = min(d, max(sdBox2(c - vec2(0., .002), vec2(.0085, .003)), abs(c.x) * .6 + c.y - .004));
  return max(d, band(abs(p.x), .012, XS));
}
float glass(vec3 p) {
  float dz = abs(p.z - gutterZ(p.z));
  float d = (abs(p.y - roofY(p)) - .0007) * .928;
  d = max(d, band(dz, GW + .001, .194));
  return max(max(d, abs(p.z) - .6), band(abs(p.x), .012, XS));
}

// \u2500\u2500 6 \xB7 transverse gutters over the girders, every 24 ft \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
float tLine(float x) { return clamp(XS * floor(x / XS + .5), -XS, XS); }
float tgutters(vec3 p) {
  vec3 q = vec3(p.x - tLine(p.x), p.y - YG, p.z);
  float d = sdBox(q - vec3(0., .02, 0.), vec3(.03, .02, ZC + .022));
  return max(d, -sdBox(q - vec3(0., .03, 0.), vec3(.022, .022, ZC + .014)));
}
float tRain(vec3 p) {
  vec3 q = vec3(p.x - tLine(p.x), p.y - YG - .011, p.z);
  float d = max(sdBox(q, vec3(.016, .0018, ZC)), rain(abs(q.z), 1.2, .07));
  // falling from the gutters' ends into it
  float zg = gutterZ(p.z);
  float xe = abs(q.x) - .016;
  float fall = max(max(length(vec2(xe, p.z - zg)) - .0022, band(q.y, 0., YT - YG + GH - .016)), rain(-q.y, 1.6, .03));
  return min(d, fall);
}

// \u2500\u2500 7 \xB7 hollow columns, and the drains below \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
float columns(vec3 p) {
  vec2 c = vec2(p.x - tLine(p.x), abs(p.z) - ZC);
  float y = p.y - Y0;
  float r = length(c);
  float d = max(abs(r - (CR + CRI) * .5) - (CR - CRI) * .5, band(y, .01, 19. * FT));
  d = min(d, max(max(sdBox2(c, vec2(.024)), CRI - r), band(y, 19. * FT, 22. * FT)));
  d = min(d, max(max(sdBox2(c, vec2(.03)), CRI - r), band(y, 0., .012)));
  // a drain from each column's foot, out under the floor
  vec3 k = vec3(c.x, y + .06, c.y);
  float drain = min(max(abs(length(c) - .011) - .004, band(y, -.06, .0)), max(abs(length(k.xy) - .011) - .004, band(k.z, 0., .14)));
  return min(d, drain);
}
float columnRain(vec3 p) {
  vec2 c = vec2(p.x - tLine(p.x), abs(p.z) - ZC);
  float y = p.y - Y0;
  float d = max(max(length(c) - .005, band(y, -.06, 22. * FT + .01)), rain(-y, 1.4, .06));
  vec3 k = vec3(c.x, y + .06, c.y);
  return min(d, max(max(length(k.xy) - .005, band(k.z, 0., .14)), rain(k.z, 1.4, .06)));
}

/** The girders between the columns (context: not a part of this studio). */
float girders(vec3 p) {
  float y = p.y - YG + .15;
  if (abs(y - .075) > .09) return abs(y - .075) - .08;
  float d = max(max(lattice(p.z, y), abs(p.x - tLine(p.x)) - .006), abs(p.z) - ZC);
  return min(d, max(max(lattice(p.x + .2, y), abs(abs(p.z) - ZC) - .006), abs(p.x) - XS));
}

/** Distance outside the band lo..hi over the gutters' ends (each roof part's own layer). */
float lay(vec3 q, float lo, float hi) { return band(q.y - YT, lo, hi); }

float cutS(vec3 p) { return p.x - .002; }

vec2 map(vec3 p) {
  float A = uApart;
  float bound = sdBox(p - vec3(-.02, Y0 + .63 + .32 * A, .15), vec3(1.4, .74 + .32 * A, .92));
  if (bound > .02) return vec2(bound, 0.);
  float s = cutS(p);
  vec2 res = vec2(1e5, 0.);
  vec3 q;
  float d, g;

  // the floor (not a part)
  d = sdBox(p - vec3(0., Y0 - .011, .15), vec3(1.32, .011, .87));
  res = U(res, vec2(cutaway(d, s), 4.));

  q = p - apart(vec3(-.2, 0., .1));
  d = rise(machine(q), 0, q.y, Y0, Y0 + .26);
  res = U(res, vec2(cutaway(d, s), 20.));


  q = p - apart(vec3(0., .26, 0.));
  g = built(1);
  float grow = g <= 0. ? 1e5 : q.x - mix(-XS - .02, XS + .02, g);
  d = lay(q, -.005, .06) > .01 ? lay(q, -.005, .06) : gutters(q);
  res = U(res, vec2(cutaway(max(d, grow), s), 21.));
  d = lay(q, .01, .06) > .01 ? lay(q, .01, .06) : gutterRain(q);
  res = U(res, vec2(cutaway(max(d, grow), s), 61.));

  q = p - apart(vec3(0., .15, 0.));
  d = lay(q, -.1, .03) > .01 ? lay(q, -.1, .03) : rods(q);
  d = rise(d, 2, q.y, YT - .1, YT + .03);
  res = U(res, vec2(cutaway(d, s), 22.));

  q = p - apart(vec3(0., .38, 0.));
  g = built(3);
  d = lay(q, .02, .14) > .01 ? lay(q, .02, .14) : sashbars(q);
  d = g <= 0. ? 1e5 : max(d, q.x - mix(-XS - .02, XS + .02, g));
  res = U(res, vec2(cutaway(d, s), 23.));

  q = p - apart(vec3(0., .5, 0.));
  g = built(4);
  d = lay(q, .1, .145) > .01 ? lay(q, .1, .145) : ridges(q);
  d = g <= 0. ? 1e5 : max(d, q.x - mix(-XS - .02, XS + .02, g));
  res = U(res, vec2(cutaway(d, s), 24.));

  q = p - apart(vec3(0., .62, 0.));
  g = built(5);
  d = lay(q, .025, .14) > .01 ? lay(q, .025, .14) : glass(q);
  d = g <= 0. ? 1e5 : max(d, q.x - mix(-XS - .02, XS + .02, g));
  res = U(res, vec2(SHELL(cutaway(d, s)), 85.));

  q = p - apart(vec3(0., .07, 0.));
  float tl = abs(q.y - YG - .05) - .07;
  d = tl > .02 ? tl : tgutters(q);
  res = U(res, vec2(cutaway(rise(d, 6, q.y, YG - .01, YG + .05), s), 26.));
  d = tl > .02 ? tl : tRain(q);
  res = U(res, vec2(cutaway(rise(d, 6, q.y, YG - .01, YT + GH), s), 66.));

  q = p;
  d = rise(columns(q), 7, q.y, Y0 - .07, YG);
  res = U(res, vec2(cutaway(d, s), 27.));
  d = rise(columnRain(q), 7, q.y, Y0 - .07, YG);
  res = U(res, vec2(cutaway(d, s), 67.));

  d = rise(girders(q), 6, q.y, YG - .16, YG);
  res = U(res, vec2(cutaway(d, s), 4.));
  return res;
}
`};export{o as scene};
