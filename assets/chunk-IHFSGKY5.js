import{c as t}from"./chunk-6Q7FPIH3.js";import{a as e}from"./chunk-WY76X7OO.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var a={id:"D09",cam:[3.14,1.33,5.25],target:[.35,-.43,0],floor:-1.6,ring:1.9,accent:e(t.D09),poster:5.5,glsl:`
const float GY = -.9;                        // the floor
const vec2 GO = vec2(-.1, .2);               // the grid: a line through here each way, every .25
const vec3 OB = vec3(-.6, GY + .33, .075);   // the object's casing: its centre
const vec3 CB = vec3(.5, .33, .125);         // and its half-size: its faces on grid lines
const vec3 WL = vec3(.57, GY, -.55);         // the wall: its left end, the floor, its face (on a grid line, as is the first rail)
const float NB = .4802;                      // the narrow bay, rail to rail, and the wide one: 66.7 : 91.2
const float WB = .6566;
const float R0 = .08;                        // the first rail, from the wall's left end
const float WW = .6484;                      // the wall's half-width
const vec3 MD = vec3(.65, GY, .95);          // the three modules: the middle one (joined, their seams fall on grid lines)
const vec3 TL = vec3(-.52, GY + 1.08, -1.05); // the ten tiles: the row's centre

vec3 palette(int i) {
  if (i == 0) return vec3(1., .56, .76);    // ornaments that come off
  if (i == 1) return vec3(.92, .95, 1.);    // the essential object: a plain box, one control
  if (i == 2) return vec3(.70, .80, .94);   // rails on the wall
  if (i == 3) return vec3(.84, .93, 1.);    // shelves and their pins
  if (i == 4) return vec3(1., .84, .94);    // ten tiles, the ten principles
  if (i == 5) return vec3(.42, .78, 1.);    // the alignment grid
  if (i == 6) return vec3(.82, .86, .98);   // three modules, one bench
  if (i == 7) return vec3(.46, .60, .78);   // the floor
  return vec3(.46, .96, .90);               // inner works, seen through the casing
}

float gU;   // the reduction's cycle, 0\u20131
float gS;   // the shelves' clock, 0\u201318 s

/** Distance to a box's twelve edges, each a bar of half-thickness e. */
float sdFrame(vec3 p, vec3 b, float e) {
  p = abs(p) - b; vec3 q = abs(p + e) - e;
  return min(min(length(max(vec3(p.x, q.y, q.z), 0.)) + min(max(p.x, max(q.y, q.z)), 0.),
                 length(max(vec3(q.x, p.y, q.z), 0.)) + min(max(q.x, max(p.y, q.z)), 0.)),
                 length(max(vec3(q.x, q.y, p.z), 0.)) + min(max(q.x, max(q.y, p.z)), 0.));
}

/** A plane drawn as a hologram draws it: a faint glass fill (material f) and glowing edges (material e). */
vec2 plane(vec3 p, vec3 b, float f, float e) {
  return U(vec2(SHELL(sdBox(p, b)), f), vec2(sdFrame(p, b + .003, .0045), e));
}

float sdRect(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.)) + min(max(d.x, d.y), 0.); }

/** One kind of ornament leaving, from phase a: (how far it has gone, 0\u20131; its size, 1 whole to 0 gone). They all come back, whole, at the end of the cycle. */
vec2 shed(float a) {
  if (gU > .8) return vec2(0., smoothstep(.86, .98, gU));
  return vec2(smoothstep(a, a + .24, gU), 1. - smoothstep(a + .11, a + .24, gU));
}

/** An ornament: solid while it is on, a ghost once it lets go. */
vec2 orn(float d, vec2 s) { bool on = s.x < .005 && s.y > .995; return vec2(on ? d : SHELL(d), on ? 20. : 40.); }

vec2 object(vec3 p, float best) {
  vec3 c = p - OB;
  float bound = sdBox(c - vec3(0., .2, .12), vec3(1.02, .8, .64));
  if (bound > min(best, .2)) return vec2(bound, 0.);
  // The casing: a plain box, and see-through, since it has nothing to hide.
  vec2 res = vec2(SHELL(sdRoundBox(c, CB, .022)), 41.);
  // The one control; a ring of light round it while it is all that is left.
  vec3 b = c - vec3(.3, .15, CB.z);
  res = U(res, vec2(sdCylinder(b.xzy, .011, .048), 21.));
  float calm = smoothstep(.6, .66, gU) * (1. - smoothstep(.84, .88, gU));
  res = U(res, vec2(sdTorus(b.xzy, vec2(.068, .0035 + .003 * calm)), 61.));
  // Inner works, in order: a board, six parts on its grid, a cell, their traces, a lead to the control.
  if (sdBox(c, CB) < res.x) {
    float board = sdBox(c - vec3(0., -.01, -.075), vec3(.43, .27, .007));
    vec3 g = c - vec3(-.25, .08, -.054);
    float ix = clamp(floor(g.x / .16 + .5), 0., 2.), iy = clamp(floor(-g.y / .18 + .5), 0., 1.);
    float part = sdBox(g - vec3(ix * .16, -iy * .18, 0.), vec3(.05, .048, .014));
    float cell = sdCylinder((c - vec3(.3, -.16, -.035)).yxz, .085, .036);
    res = U(res, vec2(min(board, cell), 28.));
    float tr = min(sdBox(c - vec3(-.09, .08, -.0675), vec3(.2, .0035, .0015)), sdBox(c - vec3(-.09, -.1, -.0675), vec3(.2, .0035, .0015)));
    tr = min(tr, sdBox(c - vec3(.13, -.01, -.0675), vec3(.0035, .09, .0015)));
    tr = min(tr, sdCapsule(c, vec3(.3, .15, -.068), vec3(.3, .15, .12), .005));
    res = U(res, vec2(min(part, tr), 68.));
  }

  // Ornaments, shed one kind at a time: the crest, the fins, the extra knobs, the trims.
  {
    // A crest: a ribbed fan on the top, and a finial at each corner.
    vec2 s = shed(.06);
    if (s.y > .01 && sdBox(c - vec3(0., CB.y + .5 * s.x + .11 * s.y, 0.), vec3(.485, .125, .04) * s.y) * .8 < res.x) {
      vec3 o = (c - vec3(0., CB.y + .5 * s.x, 0.)) / s.y;
      float r = length(o.xy), a = atan(o.x, o.y);
      float fan = max(max(r - .2 - .014 * cos(a * 9.), -o.y), abs(o.z) - .009);
      float rib = max(max(abs(fract(a * 1.432 + .5) - .5) * r * .7 - .006, abs(o.z) - .019), max(r - .19, .04 - r));
      fan = min(max(fan, .06 - r), rib);
      fan = min(fan, length(o - vec3(0., .035, 0.)) - .036);
      vec3 f = vec3(abs(o.x) - CB.x + .045, o.y, o.z);
      fan = min(fan, min(sdCapsule(f, vec3(0.), vec3(0., .085, 0.), .009), length(f - vec3(0., .1, 0.)) - .022));
      res = U(res, orn(fan * s.y * .8, s));
    }
  }
  {
    // Fins along the sides, swept back.
    vec2 s = shed(.16);
    vec3 f = vec3(abs(c.x) - CB.x - .3 * s.x, c.y, c.z);
    if (s.y > .01 && sdBox(f - vec3(.06, 0., -.02), vec3(.06 * s.y, .11 + .007 * s.y, .155 * s.y)) * .7 < res.x) {
      float fy = clamp(floor(f.y / .11 + .5), -1., 1.) * .11;
      vec3 o = (f - vec3(.06, fy, -.02)) / s.y;
      o.z += o.x * .9;
      float fin = sdBox(o, vec3(.06, .007, .1)) * .7;
      res = U(res, orn(fin * s.y, s));
    }
  }
  {
    // Three extra knobs.
    vec2 s = shed(.26);
    vec3 k = c - vec3(-.2 - .34 * s.x, -.2 - .06 * s.x, CB.z + .34 * s.x);
    if (s.y > .01 && sdBox(k - vec3(0., 0., .022 + .006 * s.y), vec3(.13 + .035 * s.y, .035 * s.y, .029 * s.y)) < res.x) {
      float kx = clamp(floor(k.x / .13 + .5), -1., 1.) * .13;
      vec3 o = (k - vec3(kx, 0., .022)) / s.y;
      float knob = sdCylinder(o.xzy, .022, .034);
      knob = min(knob, sdCylinder((o - vec3(0., 0., .026)).xzy, .008, .02));
      res = U(res, orn(knob * s.y, s));
    }
  }
  {
    // Trims: a bezel round the face and a band round the body.
    vec2 s = shed(.36);
    if (s.y > .01 && sdBox(c - vec3(0., .5 * s.x + .1215 * s.y, .2 * s.x), vec3(.516, .186, .142) * s.y) < res.x) {
      vec3 o = (c - vec3(0., .5 * s.x, .2 * s.x)) / s.y;
      float bezel = max(abs(sdRect(o.xy, CB.xy - .035)) - .011, abs(o.z - CB.z - .005) - .011);
      float band = max(sdBox(o - vec3(0., -.05, 0.), vec3(CB.x + .015, .013, CB.z + .015)), -sdBox(o - vec3(0., -.05, 0.), vec3(CB.x - .008, .04, CB.z - .008)));
      res = U(res, orn(min(bezel, band) * s.y, s));
    }
  }
  return res;
}

/** A shelf's height: from slot y0 to slot y1 at time a, and back half a cycle later. */
float shelfY(float y0, float y1, float a) { return y0 + (y1 - y0) * (smoothstep(a, a + 1.1, gS) - smoothstep(a + 9., a + 10.1, gS)); }
/** How far a shelf is drawn off its pins while it moves. */
float shelfOut(float a) { return .06 * (sin(PI * clamp((gS - a) / 1.1, 0., 1.)) + sin(PI * clamp((gS - a - 9.) / 1.1, 0., 1.))); }

/** The nearest of a bay's three shelves (they differ only in height), and its two pins in the rails. */
vec2 bayShelf(vec3 w, float cx, float half_, vec3 ys, vec3 outs) {
  vec3 dy = abs(w.y - ys);
  float y = ys.x, o = outs.x;
  if (dy.y < dy.x && dy.y <= dy.z) { y = ys.y; o = outs.y; }
  else if (dy.z < dy.x && dy.z < dy.y) { y = ys.z; o = outs.z; }
  vec2 r = plane(w - vec3(cx, y, .13 + o), vec3(half_ - .006, .008, .1), 83., 63.);
  vec3 q = vec3(abs(w.x - cx) - half_, w.y - y + .017, w.z);
  return U(r, vec2(sdCapsule(q, vec3(0., 0., o), vec3(0., 0., .07 + o), .009), 63.));
}

vec2 wall(vec3 p, float best) {
  vec3 w = p - WL;
  float bound = sdBox(w - vec3(WW, .62, .12), vec3(WW + .08, .68, .24));
  if (bound > min(best, .2)) return vec2(bound, 0.);
  vec2 res = plane(w - vec3(WW, .62, -.014), vec3(WW, .62, .006), 82., 62.);
  // Three rails: two bays, in the ratio 66.7 : 91.2, slotted at a regular pitch.
  float rx = R0 + (w.x < R0 + NB * .5 ? 0. : w.x < R0 + NB + WB * .5 ? NB : NB + WB);
  float rail = sdBox(w - vec3(rx, .62, .008), vec3(.011, .58, .008));
  float slot = sdBox(vec3(w.x - rx, mod(w.y - .008, .05) - .025, w.z - .016), vec3(.0035, .011, .006));
  res = U(res, vec2(max(rail, -slot), 22.));
  // Shelves of the two widths, lifted off their pins and hung again at new heights, one at a time.
  vec3 yn = vec3(shelfY(.3, .15, 5.2), shelfY(.6, .75, 2.8), shelfY(.9, 1.05, .4));
  vec3 on = vec3(shelfOut(5.2), shelfOut(2.8), shelfOut(.4));
  vec3 yw = vec3(shelfY(.25, .4, 1.6), shelfY(.55, .7, 6.4), shelfY(1., .85, 4.));
  vec3 ow = vec3(shelfOut(1.6), shelfOut(6.4), shelfOut(4.));
  res = U(res, bayShelf(w, R0 + NB * .5, NB * .5, yn, on));
  res = U(res, bayShelf(w, R0 + NB + WB * .5, WB * .5, yw, ow));
  return res;
}

vec2 tiles(vec3 p, float best) {
  vec3 q = p - TL;
  float bound = sdBox(q - vec3(0., -.54, 0.), vec3(.95, .66, .08));
  if (bound > min(best, .2)) return vec2(bound, 0.);
  float gT = mod(uTime, 13.);
  float i = clamp(floor(q.x / .18 + 5.), 0., 9.);
  vec3 c = q - vec3((i - 4.5) * .18, 0., 0.);
  vec2 res = plane(c, vec3(.07, .07, .005), 84., 64.);
  // Lit one after another, the light filling each tile; then all ten, and they rest.
  float lit = smoothstep(i + .6, i + 1.1, gT) * (1. - smoothstep(11.8, 12.6, gT));
  if (lit > .01) res = U(res, vec2(sdBox(c, vec3(.061 * lit, .061 * lit, .0065)), 64.));
  // The ledge they stand on, and its two stems.
  float ledge = sdBox(q - vec3(0., -.092, 0.), vec3(.92, .006, .03));
  ledge = min(ledge, sdBox(vec3(abs(q.x) - .88, q.y + .587, q.z), vec3(.006, .495, .006)));
  return U(res, vec2(ledge, 24.));
}

vec2 modules(vec3 p, float best) {
  vec3 q = p - MD;
  float bound = sdBox(q - vec3(0., .12, 0.), vec3(1.02, .16, .24));
  if (bound > min(best, .2)) return vec2(bound, 0.);
  // Three identical seats slide together into one long bench, and apart again.
  float v = fract(uTime / 9.);
  float join = smoothstep(.1, .4, v) * (1. - smoothstep(.7, .96, v));
  float off = .5 + .2 * (1. - join);
  float ax = abs(q.x);
  vec3 m = vec3(ax - (ax > off * .5 ? off : 0.), q.y, q.z);
  float seat = sdRoundBox(m - vec3(0., .165, 0.), vec3(.246, .045, .17), .022);
  float base = sdBox(m - vec3(0., .06, -.01), vec3(.215, .06, .135));
  vec2 res = vec2(min(seat, base), 26.);
  // Where they meet, the joint lights.
  float k = smoothstep(.85, 1., join);
  if (k > .01) res = U(res, vec2(sdBox(vec3(ax - off * .5, q.y - .21, q.z), vec3(.004, .0035, .15 * k)), 66.));
  return res;
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(.14, GY + .7, .045), vec3(1.84, .86, 1.24));
  if (bound > .25) return vec2(bound, 0.);
  gU = fract(uTime / 12.);
  gS = mod(uTime, 18.);
  // The floor, and the grid everything is set out on.
  vec2 res = plane(p - vec3(.14, GY - .012, .045), vec3(1.76, .012, 1.155), 87., 67.);
  vec2 g = abs(fract((p.xz - GO) / .25 + .5) - .5) * .25;
  res = U(res, vec2(max(sdBox(p - vec3(.14, GY + .001, .045), vec3(1.74, .0015, 1.135)), min(g.x, g.y) - .0016), 25.));
  res = U(res, object(p, res.x));
  res = U(res, wall(p, res.x));
  res = U(res, tiles(p, res.x));
  res = U(res, modules(p, res.x));
  return res;
}
`};export{a as scene};
