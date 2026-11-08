import{a as l}from"./chunk-4QM5HSGV.js";import{a as c}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";function d(a,f){let t=.005,s=50;for(let r=0;r<100;r++){let e=(t+s)/2;e*(Math.cosh(a/e)-1)>f?t=e:s=e}return(t+s)/2}var o=a=>a.toFixed(5),n=.18,i=.185,x=d(n,i),v={id:"D03-batllo",cam:[3.18,1.47,5.5],target:[0,.12,0],floor:-1.6,ring:1.6,accent:c(l.D03),poster:1.5,orbit:{az:[-110,110]},parts:[{name:"1877 house",view:{el:6}},{name:"light well",inside:!0,view:{az:-28,el:2,zoom:.85}},{name:"bone columns",view:{az:-20,el:-4,zoom:.88}},{name:"main-floor gallery",view:{az:-14,el:-4,zoom:.88}},{name:"mosaic fa\xE7ade",view:{az:-20,el:0,zoom:.8}},{name:"mask balconies",view:{az:-32,el:2,zoom:.75}},{name:"added storey",view:{el:10,zoom:.85}},{name:"dragon roof",view:{az:-10,el:18,zoom:.75}},{name:"chimney groups",view:{az:20,el:30,zoom:.75}},{name:"attic arches",inside:!0,view:{az:-14,el:10,zoom:.7}},{name:"tower and cross",view:{az:-25,el:8,zoom:.7}}],glsl:`
const float W2 = .55;           // half the fa\xE7ade's width
const float ZF = .75;           // the fa\xE7ade's plane
const float ZB = -.75;          // the rear fa\xE7ade's
const float Y0 = -1.15;         // the street
const float YM = -.82;          // the main floor
const float Y1 = -.50;          // the first floor
const float Y2 = -.24;          // the second
const float Y4 = .28;           // the added storey
const float YA = .54;           // the attic's floor
const float YT = .76;           // the roof terrace
const float YR = .56;           // the fa\xE7ade's top, where the roof begins
const float SH = .26;           // the upper storeys' height
const float XA = .13, XB = .39; // the window axes, both sides of the middle
const float AA = ${o(n)}, AH = ${o(i)}, AC = ${o(x)};   // the attic's arches: half-span, crown, catenary c
const vec3 DC = vec3(-.2, YR, ZF - .135);   // the roof's vault: centre and radii (highest by the tower)
const vec3 DR = vec3(.85, .36, .14);

vec3 palette(int i) {
  if (i == 0) return vec3(.80, .83, .88);   // 1877 house
  if (i == 1) return vec3(.42, .62, 1.);    // light well: blue tiles
  if (i == 2) return vec3(.96, .87, .70);   // bone columns: sandstone
  if (i == 3) return vec3(.60, .94, .96);   // main-floor gallery: glass
  if (i == 4) return vec3(.40, .82, .86);   // mosaic fa\xE7ade: trencad\xEDs
  if (i == 5) return vec3(.95, .92, .84);   // mask balconies: cast iron, painted
  if (i == 6) return vec3(.74, .80, .98);   // added storey
  if (i == 7) return vec3(1., .60, .50);    // dragon roof: ceramic scales
  if (i == 8) return vec3(1., .80, .42);    // chimney groups
  if (i == 9) return vec3(.94, .97, 1.);    // attic arches: white
  return vec3(.98, .74, .40);               // tower and cross
}

float sdRect(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
float sdRRect(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, 0.)) + min(max(q.x, q.y), 0.) - r; }

/** The storey a height falls in: (its floor, its height, its index: 0 ground \u2026 5 added storey, 6 attic). */
vec3 storey(float y) {
  if (y < YM) return vec3(Y0, YM - Y0, 0.);
  if (y < Y1) return vec3(YM, Y1 - YM, 1.);
  float k = clamp(floor((y - Y1) / SH), 0., 4.);
  return vec3(Y1 + k * SH, SH, 2. + k);
}
/** Across from the nearest window axis. */
float axisX(float x) { float a = abs(x); return a - (a < .26 ? XA : XB); }
/** The two light wells' outline in plan, their linings included. */
float wells2D(vec2 xz) { return min(sdRect(xz - vec2(0., .15), vec2(.142, .212)), sdRect(xz - vec2(0., -.47), vec2(.142, .162))); }
/** The gallery's waving front: bays bulge between the columns. */
float zGallery(float x) { float u = fract(x / .17 + .5) - .5; return ZF + .1 + .012 * (1. - 8. * u * u); }
/** A smooth periodic wave from -1 to 1 without trigonometry (a parabola per half period). */
float pwave(float x) { float u = fract(x) * 2. - 1.; return (4. * abs(u) * (1. - abs(u))) * sign(u); }

/** The section: parallel to the fa\xE7ade through the main light well; the front of the house is removed. */
float cutS(vec3 q) { return q.z - .15; }

// Each part's function takes the nearest distance found so far (best) and skips what cannot come nearer.

// 0 \xB7 The house of 1877: party walls, floors, the rear wall and the old front wall with their plain windows (drawn as
// deep recesses, glazed at the back). The old front's lower storeys give way when the stone of the new fa\xE7ade is
// built (low: not yet).
float house(vec3 q, bool low, float best) {
  float ax = abs(q.x), hy = (Y4 - Y0) * .5, cy = q.y - (Y0 + Y4) * .5;
  float d = sdBox(vec3(ax - (W2 - .02), cy, q.z), vec3(.02, hy, .75));
  best = min(best, d);
  vec3 s = storey(q.y);
  vec2 w = vec2(axisX(q.x), q.y - (s.x + .05 + s.y * .3));
  float inX = ax - W2 + .02, inY = abs(cy) - hy;
  float b = abs(q.z - (ZB + .015)) - .015;
  if (b < best) {
    float rear = max(max(b, inX), inY);
    rear = max(rear, -max(sdRect(w, vec2(.055, s.y * .3)), abs(q.z - ZB) - .02));
    d = min(d, rear);
    best = min(best, d);
  }
  b = abs(q.z - (ZF - .055)) - .012;
  if (b < best) {
    float front = max(max(b, inX), max((low ? Y0 : Y2) - q.y, q.y - Y4));
    front = max(front, -max(sdRect(w, vec2(.07, s.y * .32)), abs(q.z - ZF + .043) - .006));
    d = min(d, front);
    best = min(best, d);
  }
  float lv = abs(q.y - s.x) < abs(q.y - s.x - s.y) ? s.x : s.x + s.y;
  b = abs(q.y - lv) - .012;
  if (b < best && lv < Y4 + .01) {
    float slab = max(b, sdRect(q.xz, vec2(W2 - .02, .75)));
    if (lv > Y0 + .01) slab = max(slab, -wells2D(q.xz));
    d = min(d, slab);
  }
  return d;
}

// 1 \xB7 The light wells: two shafts lined with tiles, open from the ground floor to the roof (to the old house's top
// until the added storey is built); their windows onto the flats are smaller the higher they are.
float wells(vec3 q, float top) {
  bool fr = q.z > -.21;
  float zc = fr ? .15 : -.47, hz = fr ? .2 : .15;
  vec2 r = vec2(q.x, q.z - zc);
  float lin = max(sdRect(r, vec2(.142, hz + .012)), -sdRect(r, vec2(.13, hz)));
  lin = max(lin, max(Y0 - q.y, q.y - top));
  if (lin > .02) return lin;
  vec3 s = storey(q.y);
  float g = 1. - s.z * .1;
  float wy = abs(q.y - (s.x + .035 + s.y * .3 * g)) - s.y * .3 * g;
  float wz = fr ? abs(abs(r.y) - .1) : abs(r.y);
  float hx = max(max(wz - .055 * g, wy), abs(abs(q.x) - .136) - .02);
  float hzz = max(max(abs(q.x) - .06 * g, wy), abs(abs(r.y) - hz - .006) - .02);
  return max(lin, -min(hx, hzz));
}

// 2 \xB7 The stone of the lower floors: the fa\xE7ade's stone up to a waving line over the first floor, the gallery's sill
// and the canopy over it, and the bones: three in the ground floor's opening, six along the gallery, three on the
// first floor.
float bone(vec3 q, float ya, float yb, float r0) {
  float t = clamp((q.y - ya) / (yb - ya), 0., 1.);
  float e0 = max(0., 1. - t * 5.), e1 = max(0., 1. - (1. - t) * 5.), m = max(0., 1. - abs(t - .5) * 3.5);
  float r = r0 * (.7 + .6 * (e0 * e0 + e1 * e1) + .18 * m * m);
  return max((length(q.xz) - r) * .8, max(ya - q.y, q.y - yb));
}
float stoneTop(float x) { return Y2 + .02 + .025 * pwave(x * 1.75 + .1); }
float stone(vec3 q, float best) {
  float ax = abs(q.x);
  float zg = zGallery(q.x);
  float spanZ = max(q.z - zg - .014, ZF - .04 - q.z);
  float sill = max(max(abs(q.y - (YM - .004)) - .014, ax - .5), spanZ);
  float can = max(max(abs(q.y - (Y1 - .006)) - .012, ax - .5), spanZ);
  float d = min(sill, can);
  float b = max(abs(q.z - (ZF - .0175)) - .0175, max(ax - W2, max(Y0 - q.y, q.y - Y2 - .05)));
  if (b < min(best, d)) {
    float wall = max(abs(q.z - (ZF - .0175)) - .0175, max(ax - W2, max(Y0 - q.y, q.y - stoneTop(q.x))));
    float h = q.y < YM - .01 ? sdRRect(vec2(q.x, q.y - (Y0 + .15)), vec2(.46, .15), .06)
            : q.y < Y1 ? sdRRect(vec2(q.x, q.y - (YM + .16)), vec2(.47, .15), .05)
            : sdRRect(vec2(axisX(q.x), q.y - (Y1 + .128)), vec2(.06, .08), .05);
    d = min(d, max(wall, -max(h, abs(q.z - ZF) - .06)));
  }
  // the bones of the row the point is in, bounded by the planes between the rows
  float bn;
  if (q.y < YM - .02) {
    vec3 c = vec3(q.x - .235 * clamp(floor(q.x / .235 + .5), -1., 1.), q.y, q.z - (ZF - .0175));
    bn = min(bone(c, Y0, Y0 + .3, .018), YM - .02 - q.y);
  } else if (q.y < Y1 + .01) {
    vec3 c = vec3(ax - (.085 + .17 * clamp(floor((ax - .085) / .17 + .5), 0., 2.)), q.y, q.z - (ZF + .088));
    bn = min(bone(c, YM + .016, Y1 - .02, .016), min(q.y - YM + .02, Y1 + .01 - q.y));
  } else {
    vec3 c = vec3(q.x - .26 * clamp(floor(q.x / .26 + .5), -1., 1.), q.y, q.z - (ZF + .004));
    bn = min(bone(c, Y1 + .03, Y1 + .22, .015), q.y - Y1 - .01);
  }
  return min(d, bn);
}

// 3 \xB7 The main floor's gallery: glazing along its waving front and at its ends, its rails, and the large oval window
// in the middle bay. Returns (frames, glass).
vec2 gallery(vec3 q) {
  float ax = abs(q.x);
  float zg = zGallery(q.x) - .004;
  float y0 = YM + .016, y1 = Y1 - .02;
  float inY = max(y0 - q.y, q.y - y1);
  float fz = abs(q.z - zg) * .9;
  float glass = max(max(fz - .0025, ax - .46), inY);
  float side = max(max(abs(ax - .46) - .0025, max(ZF - .03 - q.z, q.z - ZF - .095)), inY);
  glass = min(glass, side);
  vec2 o = vec2(q.x / .07, (q.y - (YM + Y1) * .5 + .005) / .115);
  float ov = (length(o) - 1.) * .07;
  float rails = max(max(fz - .006, ax - .425), min(min(abs(q.y - y0), abs(q.y - y1)), abs(q.y - (y1 - .075))) - .006);
  rails = max(rails, -(ov - .004));
  float ring = max(abs(ov) - .0075, fz - .009);
  return vec2(min(rails, ring), glass);
}

// 4 \xB7 The mosaic fa\xE7ade: a waving skin of ceramic and glass over the upper storeys, its windows rounded, ceramic
// discs set in it. Its band over the added storey comes with that storey (top).
float mosaicHole(vec2 xy) {
  vec3 s = storey(clamp(xy.y, Y2, Y4 + .2));
  float sm = s.z > 4.5 ? .82 : 1.;
  return sdRRect(vec2(axisX(xy.x), xy.y - (s.x + .128)), vec2(.06, .078) * sm, .045 * sm);
}
float mosaic(vec3 q, float top, float best) {
  float bot = stoneTop(q.x);
  float zs = ZF + .006;
  float fz = abs(q.z - zs);
  float skin = max(fz - .007, max(abs(q.x) - W2, max(bot - q.y, q.y - top)));
  if (skin < best + .03) skin = max(skin, -max(mosaicHole(q.xy), fz - .03));
  if (fz - .012 < min(best, skin)) {
    vec2 cell = floor(q.xy / .085);
    float h = hash21(cell);
    vec2 cc = (cell + .5 + (fract(h * vec2(13.7, 71.3)) - .5) * .5) * .085;
    float r = .011 + .008 * fract(h * 37.1);
    float disc = max(length(q.xy - cc) - r, abs(q.z - zs - .007) - .0045);
    if (cc.y > top - .02 || cc.y < Y2 + .06 || abs(cc.x) > W2 - .02 || mosaicHole(cc) < r + .012) disc = 1e5;
    skin = min(skin, disc);
  }
  return skin * .9;
}

// 5 \xB7 The mask balconies: each railing one curved piece in front of a window's lower part, open behind, two openings
// near its top, standing out from the wall on its two anchors; a small floor under it. Those of the added storey
// come with it (g6).
float masks(vec3 q, float g6, float best) {
  float k = clamp(floor((q.y - Y2) / SH), 0., g6 > 0. ? 2. : 1.);
  vec3 m = vec3(axisX(q.x), q.y - (Y2 + k * SH + .048), q.z - ZF);
  float b = sdBox(m - vec3(0., .03, .04), vec3(.075, .05, .035));
  if (b > best) return b;
  float ax = abs(m.x) / .07;
  float sh = abs(length(m - vec3(0., .03, -.02)) - .075) - .0035;
  sh = max(sh, max(m.y - (.068 + .014 * (1. - 2. * ax * ax)), -m.y - .003));
  sh = max(sh, .016 - m.z);
  vec2 eye = vec2(abs(m.x) - .028, m.y - .05);
  sh = max(sh, -(length(eye * vec2(1., 1.7)) - .016) * .55);
  float fl = max(max(abs(m.y + .006) - .004, length(vec2(m.x, (m.z - .012) * 1.4)) - .068), .004 - m.z);
  float d = min(sh, fl);
  if (k > 1.5) d = max(d, q.y - (Y4 + SH * g6));
  return d;
}

// 6 \xB7 The added storey: its party walls, its front wall behind the mosaic, its rear wall and the attic's floor.
float added(vec3 q, float best) {
  float ax = abs(q.x), cy = q.y - (Y4 + YA) * .5;
  float d = sdBox(vec3(ax - (W2 - .02), cy, q.z), vec3(.02, SH * .5, .75));
  best = min(best, d);
  float b = abs(q.y - YA) - .012;
  if (b < best) {
    d = min(d, max(max(b, sdRect(q.xz, vec2(W2 - .02, .75))), -wells2D(q.xz)));
    best = min(best, d);
  }
  vec2 w = vec2(axisX(q.x), q.y - (Y4 + .128));
  float inXY = max(ax - W2 + .02, abs(cy) - SH * .5);
  b = abs(q.z - (ZB + .015)) - .015;
  if (b < best) {
    d = min(d, max(max(b, inXY), -max(sdRect(w, vec2(.05, .07)), abs(q.z - ZB) - .02)));
    best = min(best, d);
  }
  b = abs(q.z - (ZF - .055)) - .012;
  if (b < best) d = min(d, max(max(b, inXY), -max(sdRect(w, vec2(.06, .075)), abs(q.z - ZF + .043) - .006)));
  return d;
}

// 7 \xB7 The dragon roof: a vault of scales along the fa\xE7ade's top, highest by the tower and curving down at the other
// end, a row of large round pieces on its crest; behind it, the roof terrace.
float dragon(vec3 q, float best) {
  float d = 1e5;
  vec3 e = q - DC;
  float elr = sdEllipsoid(e, DR);
  float b = sdBox(q - vec3(.05, (YR + .96) * .5, ZF - .135), vec3(.52, (.96 - YR) * .5, .16));
  if (b < best) {
    float el = max(elr, max(-.45 - q.x, q.x - W2));
    d = el - .045;
    if (el < .06) {
      // scales: domes on a staggered grid, rows up the slope, all along the vault
      float th = atan(e.y / DR.y, e.z / DR.z);
      float row = floor(th / .16);
      float v = fract(th / .16) - .5;
      float u = fract((e.x + .022 * mod(row, 2.)) / .044) - .5;
      float bump = .008 * sqrt(max(0., 1. - u * u * 4. - v * v * 4.));
      d = max(abs(el) - .008 - bump, YR - q.y);
      // the crest: large round pieces from the tower to the far end
      float k = clamp(floor(e.x / .06 + .5), -3., 12.);
      float xk = k * .06;
      float yk = DR.y * sqrt(max(0., 1. - xk * xk / (DR.x * DR.x)));
      d = min(d, max(length(e - vec3(xk, yk + .004, 0.)) - .03 * (1. - .4 * max(k - 7., 0.) / 5.), q.x - W2));
    }
    best = min(best, d);
  }
  b = abs(q.y - (YT - .006)) - .006;
  if (b < best) {
    float deck = max(max(b, sdRect(q.xz - vec2(0., -.07), vec2(W2, .68))), -wells2D(q.xz));
    deck = max(max(deck, -elr), q.z - DC.z);
    d = min(d, deck);
  }
  return d;
}

// 8 \xB7 The chimney groups: four sets on the terrace, each of four sinuous, fluted shafts round a fifth, capped by
// round pieces.
float chim(vec3 c, float h, float ph) {
  vec3 s = c - vec3(.006 * pwave(c.y * 4.1 + ph), 0., .006 * pwave(c.y * 3.3 + ph + .25));
  float l = length(s.xz);
  float fl = l < .03 ? .0025 * cos((atan(s.z, s.x) + c.y * 18.) * 6.) : 0.;
  float shaft = max(l - .017 - fl, max(-c.y, c.y - h));
  float cap = length(s - vec3(0., h + .012, 0.)) - .027;
  float top = length(s - vec3(0., h + .05, 0.)) - .011;
  return min(shaft * .8, min(cap, top));
}
float chimneys(vec3 q, float best) {
  vec3 c = vec3(abs(q.x) - .33, q.y - YT, q.z - (q.z > -.31 ? -.12 : -.5));
  float b = sdBox(c - vec3(0., .12, 0.), vec3(.1, .13, .1));
  if (b > best) return b;
  float d = chim(vec3(abs(c.x) - .045, c.y, abs(c.z) - .04), .13, 1.7);
  return min(d, chim(c, .17, 0.));
}

// 9 \xB7 The attic's arches: two corridors running front to back beside the light wells, thirty catenary arches in each,
// on the attic's floor and under the roof terrace; built one by one (n of thirty in each corridor).
float attic(vec3 q, float n) {
  float s = 1.4 / 30.;
  float k = clamp(floor((q.z + .7) / s), 0., 29.);
  if (k >= n) return q.z - (-.7 + (n - .5) * s) - .006;
  float w = q.z - (-.7 + (k + .5) * s);
  float u = abs(q.x) - .33, v = q.y - (YA + .012);
  float uc = clamp(u, -AA, AA);
  float ch = cosh(uc / AC);
  float dc = max(abs(v - (AH - AC * (ch - 1.))) / ch, abs(u) - AA);
  return max(max(dc - .009, abs(w) - .006), -v);
}

// 10 \xB7 The tower: a round shaft rising from the fa\xE7ade's left side, a bulb, and the cross with four arms toward the
// cardinal points, each ending in a ball.
float tower(vec3 q) {
  vec3 c = q - vec3(-.43, 0., .69);
  float shaft = max(length(c.xz) - .075, max(Y4 - c.y, c.y - 1.12));
  shaft = min(shaft, max(length(c.xz) - .082, abs(abs(c.y - .9) - .14) - .012));
  float bulb = sdEllipsoid(c - vec3(0., 1.2, 0.), vec3(.1, .12, .1));
  vec3 x = c - vec3(0., 1.39, 0.);
  float cr = sdCapsule(x, vec3(0., -.08, 0.), vec3(0., .08, 0.), .013);
  vec3 a = vec3(max(abs(x.x), abs(x.z)), x.y, min(abs(x.x), abs(x.z)));
  cr = min(cr, sdCapsule(a, vec3(0.), vec3(.06, 0., 0.), .011));
  cr = min(cr, min(length(a - vec3(.07, 0., 0.)) - .02, length(x - vec3(0., .097, 0.)) - .02));
  return min(min(shaft, bulb), cr);
}

vec2 map(vec3 p) {
  float ua = uApart;
  float bound = sdBox(p - vec3(.055 * ua, .16 - .015 * ua, .1 + .27 * ua), vec3(.66 + .48 * ua, 1.36 + .325 * ua, .93 + .27 * ua));
  if (bound > .06) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  vec3 q;
  float d, b;
  float g6 = built(6);

  // The fa\xE7ade's layers first (the nearest surfaces for most rays), skipped together when far.
  b = sdBox(p - vec3(0., -.28 - .275 * ua, .795 + .53 * ua), vec3(W2 + .01, .87 + .075 * ua, .085 + .17 * ua));
  if (b < res.x) {
    q = p - apart(vec3(0., -.2, .36));
    b = sdBox(q - vec3(0., (Y2 + YR) * .5, ZF + .006), vec3(W2, (YR - Y2) * .5 + .05, .026));
    if (b < res.x) {
      d = rise(mosaic(q, Y4 + .01 + (YR - Y4 - .01) * g6, res.x), 4, q.y, Y2 - .02, Y4 + .01);
      res = U(res, vec2(cutaway(d, cutS(q)), 24.));
    }
    q = p - apart(vec3(0., -.35, .38));
    b = sdBox(q - vec3(0., (Y0 + Y2) * .5 + .02, ZF + .03), vec3(W2, (Y2 - Y0) * .5 + .06, .11));
    if (b < res.x) {
      d = rise(stone(q, res.x), 2, q.y, Y0, Y2 + .05);
      res = U(res, vec2(cutaway(d, cutS(q)), 22.));
    }
    q = p - apart(vec3(0., -.35, .7));
    b = sdBox(q - vec3(0., (YM + Y1) * .5, ZF + .05), vec3(.47, (Y1 - YM) * .5, .07));
    if (b < res.x) {
      vec2 g = gallery(q);
      res = U(res, vec2(cutaway(rise(g.x, 3, q.y, YM, Y1), cutS(q)), 23.));
      res = U(res, vec2(SHELL(cutaway(rise(g.y, 3, q.y, YM, Y1), cutS(q))), 83.));
    }
    q = p - apart(vec3(0., -.2, .68));
    b = sdBox(q - vec3(0., (Y2 + Y4 + SH) * .5, ZF + .045), vec3(W2, (Y4 + SH - Y2) * .5, .06));
    if (b < res.x) {
      d = rise(masks(q, g6, res.x), 5, q.y, Y2, Y4);
      res = U(res, vec2(cutaway(d, cutS(q)), 25.));
    }
  }

  // The street's edge under it (not a part), the house and the added storey.
  q = p - apart(vec3(0., -.35, 0.));
  res = U(res, vec2(sdBox(q - vec3(0., Y0 - .02, .1), vec3(.64, .02, .92)), 4.));
  b = sdBox(q - vec3(0., (Y0 + Y4) * .5, 0.), vec3(W2, (Y4 - Y0) * .5 + .012, .75));
  if (b < res.x) {
    d = rise(house(q, built(2) <= 0., res.x), 0, q.y, Y0, Y4);
    res = U(res, vec2(cutaway(d, cutS(q)), 20.));
  }
  q = p - apart(vec3(0., -.18, 0.));
  b = sdBox(q - vec3(0., (Y4 + YA) * .5, 0.), vec3(W2, SH * .5 + .012, .75));
  if (b < res.x) {
    d = rise(added(q, res.x), 6, q.y, Y4, YA + .015);
    res = U(res, vec2(cutaway(d, cutS(q)), 26.));
  }

  // The roof's parts, skipped together when far.
  b = sdBox(p - vec3(-.26 * ua, .89 + .32 * ua, .035 + .135 * ua), vec3(.56 + .26 * ua, .63, .785 + .115 * ua));
  if (b < res.x) {
    q = p - apart(vec3(0., .42, .1));
    b = sdBox(q - vec3(0., (YT + .96) * .5 - .06, 0.), vec3(W2 + .01, (.96 - YT) * .5 + .08, .76));
    if (b < res.x) {
      d = rise(dragon(q, res.x), 7, q.y, YR, .95);
      res = U(res, vec2(cutaway(d, cutS(q)), 27.));
    }
    q = p - apart(vec3(-.52, .32, .25));
    b = sdBox(q - vec3(-.43, .89, .69), vec3(.13, .63, .13));
    if (b < res.x) {
      d = rise(tower(q), 10, q.y, Y4, 1.5);
      res = U(res, vec2(cutaway(d, cutS(q)), 30.));
    }
    q = p - apart(vec3(0., .62, -.12));
    b = sdBox(q - vec3(0., YT + .12, -.31), vec3(.44, .13, .3));
    if (b < res.x) {
      d = rise(chimneys(q, res.x), 8, q.y, YT, YT + .23);
      res = U(res, vec2(cutaway(d, cutS(q)), 28.));
    }
    q = p - apart(vec3(0., .12, 0.));
    b = sdBox(q - vec3(0., (YA + YT) * .5, 0.), vec3(.52, (YT - YA) * .5, .71));
    float n = floor(built(9) * 30. + .001);
    if (b < res.x && n > 0.) {
      d = attic(q, n);
      res = U(res, vec2(cutaway(d, cutS(q)), 29.));
    }
  }

  q = p - apart(vec3(1.05, -.35, .1));
  b = sdBox(q - vec3(0., (Y0 + YT) * .5 + .02, -.16), vec3(.142, (YT - Y0) * .5 + .02, .532));
  if (b < res.x) {
    d = rise(wells(q, Y4 + .012 + (YT + .028 - Y4) * g6), 1, q.y, Y0, Y4 + .012);
    res = U(res, vec2(cutaway(d, cutS(q)), 21.));
  }
  return res;
}

/** Broken tiles for the poster: (distance to the nearest joint, cell id). */
vec2 shards(vec2 p) {
  vec2 i = floor(p), fr = fract(p);
  float d1 = 8., d2 = 8., id = 0.;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 g = vec2(x, y);
    vec2 o = vec2(hash21(i + g), hash21(i + g + 7.3));
    float d = length(g + o - fr);
    if (d < d1) { d2 = d1; d1 = d; id = hash21(i + g + 3.1); } else if (d < d2) d2 = d;
  }
  return vec2((d2 - d1) * .5, id);
}

float sceneDetail(vec3 p, float m) {
  int k = int(m + .5);
  if (k == 21) { vec2 t = abs(fract(vec2(p.x + p.z, p.y) * 45.) - .5); return -.0006 * smoothstep(.42, .5, max(t.x, t.y)); }
  if (k == 22) return .0012 * fbm(p * 28.);
  if (k == 24 || k == 28 || k == 30) { vec2 s = shards(vec2(p.x + p.z * .5, p.y) * 70.); return .0007 * smoothstep(0., .08, s.x) + .0003 * s.y; }
  if (k == 27) return .0005 * noise3(p * 90.);
  return 0.;
}
`};export{v as scene};
