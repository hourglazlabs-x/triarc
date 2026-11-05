import{c as l}from"./chunk-W46U2OC5.js";import{a as t}from"./chunk-WY76X7OO.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var n=1.3,v=[{z:-.5,a:.95,low:.36},{z:-.25,a:.84,low:.42},{z:0,a:.73,low:.48},{z:.25,a:.62,low:.54}];function f(e,i){let r=.02,o=50;for(let s=0;s<80;s++){let a=(r+o)/2;a*(Math.cosh(e/a)-1)>i?r=a:o=a}return(r+o)/2}var c=e=>e.toFixed(5),d=v.map(e=>`vec4(${c(e.z)}, ${c(e.a)}, ${c(e.low)}, ${c(f(e.a,n-e.low))})`).join(", "),m={id:"D03",cam:[2.35,.55,6.1],target:[0,-.02,0],floor:-1.62,ring:1.9,accent:t(l.D03),poster:2.6,glsl:`
const float TOP = ${c(n)};
const vec4 CORD[4] = vec4[4](${d});   // (z, half-span, lowest point, catenary c)

vec3 palette(int i) {
  if (i == 0) return vec3(.86, .90, .96);   // board
  if (i == 1) return vec3(.62, .86, 1.);    // cords, in tension
  if (i == 2) return vec3(.92, .84, .66);   // bags of shot
  if (i == 3) return vec3(.80, .92, 1.);    // mirror
  if (i == 4) return vec3(.92, .52, .34);   // brick catenary arches, in compression
  if (i == 5) return vec3(1., .74, .40);    // load line and leaning columns
  if (i == 6) return vec3(.70, .82, 1.);    // hyperboloid of straight lines
  if (i == 7) return vec3(.82, .80, .72);   // branching column
  if (i == 8) return vec3(.30, .70, .98);   // trencad\xEDs
  return vec3(.74, .80, .88);               // ground
}

/** Distance in the plane of a catenary (y = low + c (cosh(x/c) \u2212 1), |x| \u2264 a) to the curve: first order. */
float catenary(vec2 q, float a, float low, float c) {
  float x = clamp(q.x, -a, a);
  float y = low + c * (cosh(x / c) - 1.);
  float d = abs(q.y - y) / cosh(x / c);
  return max(d, abs(q.x) - a);
}

/** 2D cells for the broken tiles: (distance to the nearest grout line, cell id). */
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

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., 0., .1), vec3(2.05, 1.45, 1.1));
  if (bound > .25) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  float t = uTime;

  // The board the cords hang from, and the mirror between the two halves.
  float board = sdBox(p - vec3(0., TOP + .02, -.12), vec3(1.15, .018, .5));
  res = U(res, vec2(SHELL(board), 40.));
  float mir = sdBox(p - vec3(0., 0., -.05), vec3(1.2, .004, .72));
  res = U(res, vec2(SHELL(mir), 83.));
  float rim = max(sdBox(p - vec3(0., 0., -.05), vec3(1.2, .008, .72)), -sdBox(p - vec3(0., 0., -.05), vec3(1.18, .02, .7)));
  res = U(res, vec2(rim, 63.));

  // Cords in tension above, swaying a little, with bags of shot; their reflections in brick below.
  float sway = sin(t * .9) * .012;
  for (int k = 0; k < 4; k++) {
    vec4 c = CORD[k];
    float dz = p.z - c.x;
    if (abs(dz) > .12) continue;
    if (p.y > 0.) {
      float s = (TOP - p.y) / (TOP - c.z);
      vec2 q = vec2(p.x, p.y);
      float cd = catenary(q, c.y, c.z, c.w);
      float cord = length(vec2(cd, dz - sway * s)) - .006;
      res = U(res, vec2(cord, 61.));
      // Three bags on short threads: at the middle and halfway out.
      for (int j = -1; j <= 1; j++) {
        float bx = float(j) * c.y * .5;
        float by = c.z + c.w * (cosh(bx / c.w) - 1.);
        vec3 b = p - vec3(bx + sway * .3, by - .085, c.x + sway);
        float bag = sdEllipsoid(b, vec3(.026, .036, .026));
        bag = min(bag, sdCapsule(b, vec3(0.), vec3(0., .085, 0.), .0025));
        res = U(res, vec2(bag, 22.));
      }
    } else {
      vec2 q = vec2(p.x, -p.y);
      float cd = catenary(q, c.y, c.z, c.w);
      float arch = max(max(cd - .028, abs(dz) - .045), -p.y - TOP);
      res = U(res, vec2(arch, 24.));
    }
  }

  // In front: one heavy bag pulls a cord into a load line; reflected, two leaning columns meet under a capital.
  {
    vec3 a = vec3(-.58, TOP, .55), b = vec3(.58, TOP, .55), m = vec3(0., .6, .55);
    if (p.y > 0.) {
      float line = min(sdCapsule(p, a, m, .006), sdCapsule(p, b, m, .006));
      res = U(res, vec2(line, 65.));
      float bag = min(sdEllipsoid(p - m - vec3(0., -.1, 0.), vec3(.05, .07, .05)), sdCapsule(p, m, m - vec3(0., .05, 0.), .003));
      res = U(res, vec2(bag, 22.));
    } else {
      vec3 r = vec3(p.x, -p.y, p.z);
      float cols = min(sdCapsule(r, a, m, .035), sdCapsule(r, b, m, .035));
      cols = min(cols, sdBox(r - m + vec3(0., .02, 0.), vec3(.07, .03, .06)));
      res = U(res, vec2(max(cols, -p.y - TOP), 25.));
    }
  }

  // A hyperboloid of one sheet: a surface made only of straight lines, in two crossing families.
  {
    vec3 h = p - vec3(-1.58, -.88, .05);
    if (abs(h.y) < .44 && length(h.xz) < .45) {
      float y = h.y / .32;
      float rr = length(h.xz), rw = .17 * sqrt(1. + y * y);
      float surf = max((abs(rr - rw) - .003) * .7, abs(h.y) - .42);
      res = U(res, vec2(SHELL(surf), 46.));
      float th = atan(h.z, h.x), sk = atan(y);
      float n = 26. / TAU;
      float l1 = abs(fract((th - sk) * n + .5) - .5) / n * rw;
      float l2 = abs(fract((th + sk) * n + .5) - .5) / n * rw;
      float rule = max(max(abs(rr - rw) - .007, min(l1, l2) - .005), abs(h.y) - .42);
      res = U(res, vec2(rule * .8, 26.));
      res = U(res, vec2(min(sdTorus(h - vec3(0., .42, 0.), vec2(.17 * sqrt(1. + 1.72), .012)), sdTorus(h + vec3(0., .42, 0.), vec2(.17 * sqrt(1. + 1.72), .012))), 26.));
    }
  }

  // A column that branches like a tree to carry a slab.
  {
    vec3 c = p - vec3(1.55, -TOP, .05);
    if (c.y > -.05 && c.y < .95 && length(c.xz) < .5) {
      float col = sdTaper(c, vec3(0.), vec3(0., .5, 0.), .05, .035);
      vec3 cr = polarRep(c, 4.);
      col = smin(col, sdTaper(cr, vec3(0., .48, 0.), vec3(.22, .82, 0.), .03, .016), .04);
      vec3 cr2 = polarRep(vec3(c.x * .7071 - c.z * .7071, c.y, c.x * .7071 + c.z * .7071), 4.);
      col = smin(col, sdTaper(cr2, vec3(.12, .67, 0.), vec3(.3, .83, 0.), .016, .01), .02);
      col = min(col, sdBox(c - vec3(0., .86, 0.), vec3(.36, .018, .36)));
      res = U(res, vec2(col, 27.));
    }
  }

  // A low, wavy wall clad in broken tiles.
  {
    float zc = .98 + .1 * sin(p.x * 3.4);
    float w = max(max(abs(p.z - zc) - .035, abs(p.y + 1.25) - .08), abs(p.x) - 1.75);
    if (w < .05) {
      vec2 s = shards(vec2(p.x * 22., (p.y + p.z) * 22.));
      float tile = w + smoothstep(.06, 0., s.x) * .006;
      res = U(res, vec2(tile, 28.));
    }
  }

  // The ground.
  float ground = sdBox(p - vec3(0., -TOP - .025, .1), vec3(1.95, .025, 1.08));
  res = U(res, vec2(SHELL(ground), 89.));
  return res;
}
`};export{m as scene};
