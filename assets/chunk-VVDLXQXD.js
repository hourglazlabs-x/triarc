import{a}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var s={id:"D03-park-guell",cam:[3.18,2.77,5.09],target:[0,-.42,0],floor:-1.6,ring:2.3,accent:e(a.D03),poster:1.5,parts:[{name:"terraced site",view:{el:-4}},{name:"roads and viaducts",view:{az:22,el:0,zoom:.85}},{name:"boundary wall",view:{az:-22,el:-14,zoom:.7}},{name:"entrance pavilions",view:{az:-18,el:-12,zoom:.62}},{name:"dragon stairway",view:{az:-30,el:-8,zoom:.66}},{name:"waiting shelter",inside:!0,view:{az:42,el:-6,zoom:.58}},{name:"water system",inside:!0,view:{az:30,el:-6,zoom:.66}},{name:"Hypostyle Room",inside:!0,view:{az:28,el:-10,zoom:.66}},{name:"great square",view:{el:10,zoom:.8}},{name:"serpentine bench",view:{el:18,zoom:.75}},{name:"laundry portico",view:{az:-62,el:-8,zoom:.72}}],glsl:`
const float T0 = -1., T1 = -.72, T2 = -.47, T3 = -.15, T4 = .12;   // the terraces' levels, street to hilltop
const float XM = 1.3, ZB = -1.2, ZFR = 1.17;   // the model's edges: the sides, the back, Carrer d'Olot
const float YC = -.5, YS = -.45;               // the room's ceiling and the square's surface
const float RP = .167;                         // a viaduct's road: 5 m

vec3 palette(int i) {
  if (i == 0) return vec3(.70, .80, .74);   // terraced site
  if (i == 1) return vec3(.90, .78, .62);   // roads and viaducts: unhewn stone
  if (i == 2) return vec3(.86, .74, .62);   // boundary wall
  if (i == 3) return vec3(.98, .70, .52);   // entrance pavilions
  if (i == 4) return vec3(.62, .86, 1.);    // dragon stairway
  if (i == 5) return vec3(.98, .86, .56);   // waiting shelter
  if (i == 6) return vec3(.40, .74, 1.);    // water system
  if (i == 7) return vec3(.97, .94, .86);   // Hypostyle Room
  if (i == 8) return vec3(.86, .82, .70);   // great square
  if (i == 9) return vec3(.50, .96, .86);   // serpentine bench: trencad\xEDs
  return vec3(.96, .74, .56);               // laundry portico
}

/** The terraces' edges in plan: level i lies behind z < Zi(x). */
float Z1(float x) { return .42 - .35 * x * x; }
float Z2(float x) { return .25 - .5 * x * x; }
float Z3(float x) { return -.7 - .3 * x * x; }
float Z4(float x) { return -1. - .4 * (x + .6) * (x + .6); }
/** Signed distance in plan to an edge z = Z(x) of slope k x (positive in front of it). */
float edgeD(float dz, float k) { return dz / sqrt(1. + k * k); }

/** The section: a vertical plane through the shelter's column and a row of the room's columns; the right side goes. */
float cutS(vec3 q) { return q.x - .3; }

// 0 \xB7 The terraced site: the hillside in levels, the room's volume and the stair's place left open.
float site(vec3 q) {
  float foot = max(abs(q.x) - XM, max(q.z - ZFR, ZB - q.z));
  float d = max(q.y - T0, foot);
  d = min(d, max(max(q.y - T1, edgeD(q.z - Z1(q.x), -.7 * q.x)), foot));
  d = min(d, max(max(q.y - T2, edgeD(q.z - Z2(q.x), -q.x)), foot));
  d = min(d, max(max(q.y - T3, edgeD(q.z - Z3(q.x), -.6 * q.x)), foot));
  d = min(d, max(max(q.y - T4, edgeD(q.z - Z4(q.x), -.8 * (q.x + .6))), foot));
  d = max(d, -1.06 - q.y);
  d = max(d, -sdBox(q - vec3(0., (T1 + YC) * .5 + .02, -.16), vec3(.6, (YC - T1) * .5 + .02, .55)));
  return d;
}

// 1 \xB7 Roads and viaducts: three roads carried along the terraces' edges over the level below, on two rows of
// inclined columns of rough stone leaning together like a parabola, plant pots on small columns as the railing.
// The edge's coordinates: along (x), out over the lower level (n), height (y). top: the road's level, low: the ground.
float viaduct(vec3 q, float n, float top, float low) {
  float cx = q.x - floor(q.x / .07 + .5) * .07;
  float deck = max(abs(q.y - top + .011) - .011, max(-.03 - n, n - RP));
  vec3 c = vec3(cx, q.y, n);
  float cols = min(sdCapsule(c, vec3(0., low, .2), vec3(0., top - .02, .14), .011), sdCapsule(c, vec3(0., low, .005), vec3(0., top - .02, .05), .011));
  float pots = max(length(vec2(cx, n - .152)) - .011, abs(q.y - top - .016) - .016);
  return min(min(deck, cols), pots) * .7;
}
float viaducts(vec3 q, float best) {
  float d = 1e5;
  float b = max(abs(q.x - .985) - .27, max(q.y - T2 - .06, T1 - q.y));
  if (b < best) {
    float n = edgeD(q.z - Z2(q.x), -q.x);
    d = min(d, max(viaduct(q, n, T2, T1), abs(q.x - .985) - .265));
  }
  b = max(abs(q.x - .965) - .29, max(q.y - T3 - .06, T2 - q.y));
  if (b < min(best, d)) {
    float n = edgeD(q.z - Z3(q.x), -.6 * q.x);
    d = min(d, max(viaduct(q, n, T3, T2), abs(q.x - .965) - .285));
  }
  b = max(abs(q.x + .85) - .41, max(q.y - T4 - .06, T3 - q.y));
  if (b < min(best, d)) {
    float n = edgeD(q.z - Z4(q.x), -.8 * (q.x + .6));
    d = min(d, max(viaduct(q, n, T4, T3), abs(q.x + .85) - .405));
  }
  return d;
}

// 2 \xB7 The boundary wall along Carrer d'Olot: rustic stone, a rounded coping of ceramic tiles, plain medallions.
float wall(vec3 q) {
  float ax = abs(q.x);
  float d = max(max(abs(q.z - 1.135) - .025, abs(ax - .89) - .41), max(T0 - q.y, q.y - (T0 + .065)));
  d = min(d, max(length(vec2(q.y - T0 - .07, q.z - 1.135)) - .022, abs(ax - .89) - .41));
  float mx = ax - (.72 + floor((ax - .72) / .25 + .5) * .25);
  float med = max(length(vec2(mx, q.y - T0 - .035)) - .02, abs(q.z - 1.163) - .004);
  return min(d, max(med, abs(ax - .89) - .38));
}

// 3 \xB7 The entrance pavilions on either side of the gate: walls, a waving roof of tiles under trencad\xEDs; the left one
// with a slender tower under a cap and a small four-armed cross, the right one with a round lantern.
float pavilions(vec3 q) {
  vec3 c = vec3(abs(q.x) - .38, q.y - T0, q.z - 1.06);
  float body = sdRoundBox(c - vec3(0., .07, 0.), vec3(.115, .07, .09), .02);
  vec3 r = c - vec3(0., .14, 0.);
  float roof = sdEllipsoid(r, vec3(.14, .11 + .012 * cos(r.x * 40.) * cos(r.z * 40.), .12)) * .9;
  roof = max(roof, -r.y);
  float d = min(body, roof);
  if (q.x < 0.) {
    vec3 t = c - vec3(-.08, 0., .05);
    d = min(d, max(length(t.xz) - .03, max(-t.y, t.y - .4)));
    d = min(d, sdEllipsoid(t - vec3(0., .41, 0.), vec3(.05, .025, .05)));
    vec3 x = t - vec3(0., .465, 0.);
    vec3 fa = vec3(max(abs(x.x), abs(x.z)), x.y, min(abs(x.x), abs(x.z)));
    d = min(d, min(sdCapsule(x, vec3(0., -.03, 0.), vec3(0., .03, 0.), .005), sdCapsule(fa, vec3(0.), vec3(.022, 0., 0.), .005)));
  } else {
    d = min(d, sdEllipsoid(c - vec3(.02, .255, -.01), vec3(.035, .045, .035)));
  }
  return d;
}

// 4 \xB7 The dragon stairway: a twin flight in three sections of five steps and a landing, the fountain's channel and
// basins between the flights, and the two terraces on crenellated walls either side (the right one hollow: the
// shelter). Returns the stair; the grotto's hollow is cut by the caller.
float stairH(float z) {
  float s = clamp((.95 - z) / .57, 0., 1.) * 3.;
  float sec = min(floor(s), 2.), f = s - sec;
  float k = f < .8 ? floor(f / .8 * 5.) + 1. : 5.;
  return T0 + .28 * (sec + k / 5.) / 3.;
}
float grotto(vec3 q) { return sdRoundBox(q - vec3(.34, T0 + .075, .755), vec3(.095, .075, .245), .04); }
float stairway(vec3 q) {
  float ax = abs(q.x);
  float inZ = max(q.z - .96, .37 - q.z);
  float flights = max(max(q.y - stairH(q.z), T0 - .02 - q.y) * .7, max(abs(ax - .13) - .07, inZ));
  float chan = max(max(q.y - (T0 + .015 + .28 * clamp((.95 - q.z) / .57, 0., 1.)), T0 - .02 - q.y), max(ax - .06, inZ));
  float zc = .86 - floor((.86 - q.z) / .19 + .5) * .19, zb = q.z - zc;
  float hc = T0 + .015 + .28 * clamp((.95 - zc) / .57, 0., 1.);
  float basin = max(abs((length(vec2(q.x / .05, zb / .045)) - 1.) * .045) - .005, abs(q.y - hc - .008) - .012);
  basin = max(basin, max(.37 - q.z, q.z - .96));
  float ter = max(max(abs(ax - .33) - .13, max(q.z - .97, .42 - q.z)), max(T0 - q.y, q.y - (T0 + .18)));
  float mer = max(max(abs(ax - .215) - .016, abs(fract(q.z / .05) - .5) * .05 - .014), max(q.z - .97, .42 - q.z));
  mer = max(mer, max(T0 + .17 - q.y, q.y - (T0 + .205)));
  float d = min(min(flights, chan), min(basin, min(ter, mer)));
  return max(d, -grotto(q));
}

// 5 \xB7 The waiting shelter: the right grotto's vault and walls, open to the front, on a conical central column.
float shelter(vec3 q) {
  float g = grotto(q);
  float lin = max(abs(g + .006) - .006, q.z - .94);
  float col = max(length(q.xz - vec2(.3, .71)) - mix(.016, .05, smoothstep(T0, T0 + .16, q.y)), max(T0 - q.y, q.y - (T0 + .16)));
  return min(lin, col);
}

// 6 \xB7 The water system: a conduit inside each of the room's columns, carrying the rain that filters through the
// square down into the tank under the room, and the overflow to the stair's fountain.
vec3 colCell(vec3 q, out bool gap) {
  vec2 g = vec2(clamp(floor((q.x + .54) / .12 + .5), 0., 9.), clamp(floor((.32 - q.z) / .12 + .5), 0., 8.));
  gap = (g.x == 3. || g.x == 6.) && (g.y == 3. || g.y == 5.);
  return vec3(q.x + .54 - g.x * .12, q.y, q.z - .32 + g.y * .12);
}
float water(vec3 q) {
  bool gap;
  vec3 l = colCell(q, gap);
  float cond = gap ? .085 - max(abs(l.x), abs(l.z)) : max(length(l.xz) - .006, max(-.9 - q.y, q.y - YC));
  float tank = abs(sdBox(q - vec3(0., -.84, -.15), vec3(.45, .08, .35)) + .006) - .006;
  float pipe = sdCapsule(q, vec3(.3, -.86, .2), vec3(0., -.875, .64), .008);
  return min(min(cond, tank), pipe);
}

// 7 \xB7 The Hypostyle Room: 86 striated Doric columns on a grid of ten by nine with four left out, each on a base and
// under a capital, standing on the room's floor.
float hypostyle(vec3 q) {
  bool gap;
  vec3 l = colCell(q, gap);
  if (gap) return .085 - max(abs(l.x), abs(l.z));
  float r = length(l.xz);
  float t = clamp((q.y - T1) / (YC - T1), 0., 1.);
  float rad = .021 - .003 * t;
  if (r < .045) rad += .0022 * cos(atan(l.z, l.x) * 16.);
  float d = max(r - rad, max(T1 - q.y, q.y - YC));
  d = min(d, max(r - .027, max(T1 - q.y, q.y - T1 - .012)));
  d = min(d, max(r - mix(.022, .034, smoothstep(YC - .03, YC - .01, q.y)), max(YC - .03 - q.y, q.y - YC + .008)));
  d = min(d, sdBox(l - vec3(0., YC - .004, 0.), vec3(.032, .004, .032)));
  return d;
}

// 8 \xB7 The great square: its slab on the room, its underside vaulted in small domes between the columns, the rest dug
// into the rock; behind, the retaining wall with columns under capitals like palm trees.
float square(vec3 q) {
  float inside = max(abs(q.x) - .6, max(edgeD(Z3(q.x) - q.z, .6 * q.x), q.z - .4));
  vec2 u = fract(vec2(q.x + .54, q.z - .32) / .12) - .5;
  float dome = .022 * (1. - 4. * u.x * u.x) * (1. - 4. * u.y * u.y);
  float under = abs(q.x) < .6 && q.z > -.7 && q.z < .38 ? YC + dome : YC;
  float d = max(max(q.y - YS, (under - q.y) * .8), inside);
  float pa = q.x - floor(q.x / .1 + .5) * .1;
  vec3 pc = vec3(pa, q.y, edgeD(q.z - Z3(q.x), -.6 * q.x) - .03);
  float palm = max(length(pc.xz) - .011, max(YS - q.y, q.y - (T3 - .05)));
  palm = min(palm, max(length(pc.xz) - mix(.012, .04, smoothstep(T3 - .09, T3 - .03, q.y)), max(T3 - .09 - q.y, q.y - T3 + .025)));
  palm = max(palm, abs(q.x) - .58);
  return min(d, palm);
}

// 9 \xB7 The serpentine bench: a seat and a back of broken tiles, waving round the front and the sides of the square.
float bench(vec3 q) {
  float yb = q.y - YS;
  float s1 = sin(q.x * 24.166), c1 = cos(q.x * 24.166);
  float nf = (q.z - .39 - .055 * s1) / sqrt(1. + 1.766 * c1 * c1);
  nf = max(nf, abs(q.x) - .6);
  float zs = q.z - .39;
  float s2 = sin(zs * 24.166), c2 = cos(zs * 24.166);
  float ns = (abs(q.x) - .61 - .055 * s2) / sqrt(1. + 1.766 * c2 * c2);
  ns = max(ns, max(zs, edgeD(Z3(q.x) - q.z, .6 * q.x)));
  float n = abs(nf) < abs(ns) ? nf : ns;
  float seat = max(abs(n) - .016, abs(yb - .013) - .006);
  float back = max(abs(n - .015) - .007, max(-yb, yb - .05));
  return min(seat, back) * .85;
}

// 10 \xB7 The laundry portico: a wave on slanting columns, a double colonnade behind as its buttress, under a road.
float portico(vec3 q) {
  float n = edgeD(q.z - Z2(q.x), -q.x);
  float cx = q.x - floor(q.x / .07 + .5) * .07;
  vec3 c = vec3(cx, q.y, n);
  float d = max(abs(q.y - T2 + .011) - .011, max(-.03 - n, n - .2));
  d = min(d, max(length(vec2(n - .19, q.y - T2 + .045)) - .045, -(n - .19)));
  d = min(d, sdCapsule(c, vec3(0., T1, .09), vec3(0., T2 - .02, .19), .012));
  d = min(d, min(sdCapsule(c, vec3(0., T1, .0), vec3(0., T2 - .02, .0), .01), sdCapsule(c, vec3(0., T1, .045), vec3(0., T2 - .02, .045), .01)));
  return max(d * .7, abs(q.x + .96) - .24);
}

vec2 map(vec3 p) {
  float ua = uApart;
  float bound = sdBox(p - vec3(-.165 * ua, -.44 - .03 * ua, -.01 + .16 * ua), vec3(1.32 + .315 * ua, .64 + .27 * ua, 1.21 + .26 * ua));
  if (bound > .06) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  vec3 q;
  float d, b;

  q = p - apart(vec3(0., -.3, 0.));
  d = rise(site(q), 0, q.y, -1.06, T4);
  res = U(res, vec2(cutaway(d, cutS(q)), 20.));

  // The central group: the room, the square, the bench and the water system.
  b = sdBox(p - vec3(0., -.555 + .22 * ua, -.09), vec3(.7, .41 + .305 * ua, .75));
  if (b < res.x) {
    q = p - apart(vec3(0., .3, 0.));
    b = sdBox(q - vec3(0., (T1 + YC) * .5, -.16), vec3(.58, (YC - T1) * .5, .52));
    if (b < res.x) {
      d = rise(hypostyle(q), 7, q.y, T1, YC);
      res = U(res, vec2(cutaway(d, cutS(q)), 27.));
    }
    q = p - apart(vec3(0., .55, 0.));
    b = sdBox(q - vec3(0., (YC + T3) * .5 - .02, -.2), vec3(.62, (T3 - YC) * .5 + .02, .62));
    if (b < res.x) {
      d = rise(square(q), 8, q.y, YC - .01, T3);
      res = U(res, vec2(cutaway(d, cutS(q)), 28.));
    }
    q = p - apart(vec3(0., .72, .04));
    b = sdBox(q - vec3(0., YS + .03, -.22), vec3(.7, .035, .69));
    if (b < res.x) {
      d = bench(q);
      float g = built(9);
      float par = abs(q.x) < .6 ? abs(q.x) : .6 + max(0., .39 - q.z);
      d = g <= 0. ? 1e5 : g < 1. ? max(d, par - g * 1.75) : d;
      res = U(res, vec2(cutaway(d, cutS(q)), 29.));
    }
    q = p - apart(vec3(0., -.12, 0.));
    b = sdBox(q - vec3(0., -.7, -.08), vec3(.56, .22, .74));
    if (b < res.x) {
      d = rise(water(q), 6, q.y, -.93, YC);
      res = U(res, vec2(cutaway(d, cutS(q)), 26.));
    }
  }

  // The front works: the stair, the shelter, the wall and the pavilions.
  b = sdBox(p - vec3(0., -.74 + .06 * ua, .77 + .34 * ua), vec3(1.32, .32 + .06 * ua, .41 + .08 * ua));
  if (b < res.x) {
    q = p - apart(vec3(0., -.08, .26));
    b = sdBox(q - vec3(0., -.86, .665), vec3(.47, .16, .31));
    if (b < res.x) {
      d = rise(stairway(q), 4, q.y, T0 - .02, T1 + .02);
      res = U(res, vec2(cutaway(d, cutS(q)), 24.));
    }
    q = p - apart(vec3(.42, -.05, .3));
    b = grotto(q) - .015;
    if (b < res.x) {
      d = rise(shelter(q), 5, q.y, T0, T0 + .17);
      res = U(res, vec2(cutaway(d, cutS(q)), 25.));
    }
    q = p - apart(vec3(0., -.05, .42));
    b = sdBox(q - vec3(0., T0 + .045, 1.14), vec3(1.3, .05, .03));
    if (b < res.x) {
      d = rise(wall(q), 2, q.y, T0, T0 + .095);
      res = U(res, vec2(cutaway(d, cutS(q)), 22.));
    }
    q = p - apart(vec3(0., .12, .42));
    b = sdBox(q - vec3(0., T0 + .25, 1.07), vec3(.54, .26, .15));
    if (b < res.x) {
      d = rise(pavilions(q), 3, q.y, T0, T0 + .5);
      res = U(res, vec2(cutaway(d, cutS(q)), 23.));
    }
  }

  // The hillside's works: the viaducts and the laundry portico.
  q = p - apart(vec3(.15, .22, -.1));
  b = max(min(abs(q.x - .97) - .31, abs(q.x + .85) - .42), max(T1 - q.y, q.y - T4 - .06));
  if (b < res.x) {
    d = viaducts(q, res.x);
    float g = built(1);
    d = g <= 0. ? 1e5 : g < 1. ? max(d, abs(q.x) - mix(.4, 1.32, g)) : d;
    res = U(res, vec2(cutaway(d, cutS(q)), 21.));
  }
  q = p - apart(vec3(-.35, .1, .1));
  b = max(abs(q.x + .96) - .25, max(T1 - q.y, q.y - T2 - .01));
  if (b < res.x) {
    d = rise(portico(q), 10, q.y, T1, T2 + .01);
    res = U(res, vec2(cutaway(d, cutS(q)), 30.));
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
  if (k == 23 || k == 29) { vec2 s = shards(vec2(p.x + p.z * .6, p.y + p.z * .4) * 90.); return .0006 * smoothstep(0., .08, s.x) + .0003 * s.y; }
  if (k == 21 || k == 22 || k == 30) return .0016 * fbm(p * 40.);
  if (k == 27) return -.0004 * smoothstep(.35, .5, abs(fract(atan(p.z, p.x) * 3.) - .5));
  return 0.;
}
`};export{s as scene};
