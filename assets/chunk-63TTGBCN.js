import{c as o}from"./chunk-6Q7FPIH3.js";import{a as e}from"./chunk-WY76X7OO.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var a={id:"D05",cam:[2.75,2.3,4.45],target:[0,-.45,-.25],floor:-1.6,ring:1.9,accent:e(o.D05),poster:6.5,glsl:`
const float GY = -.95;                  // the ground; the planning grid's module is .25
const vec3 PV = vec3(-.75, GY, .5);     // the pavilion
const vec3 HL = vec3(-.125, GY, -1.);   // the hall
const vec3 TW = vec3(1.25, GY, -.25);   // the tower

vec3 palette(int i) {
  if (i == 0) return vec3(.80, .88, 1.);    // columns and floor slabs: steel
  if (i == 1) return vec3(.95, .96, 1.);    // the roof plate
  if (i == 2) return vec3(1., .74, .46);    // free-standing planes
  if (i == 3) return vec3(.58, .88, 1.);    // the hall
  if (i == 4) return vec3(1., .70, .42);    // I-beam mullions, and the light running up them
  if (i == 5) return vec3(.86, .95, .90);   // the lifted floor plate
  if (i == 6) return vec3(.40, .58, .74);   // the ground and its grid
  return vec3(.62, .92, 1.);                // glass
}

float sdBox2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }

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

/** A slender cruciform column from y = 0 up to h: two thin steel blades crossed. */
float cruciform(vec3 q, float h) {
  vec3 a = vec3(q.x, q.y - h * .5, q.z);
  return min(sdBox(a, vec3(.016, h * .5, .0045)), sdBox(a, vec3(.0045, h * .5, .016)));
}

vec2 ground(vec3 p) {
  vec3 q = p - vec3(0., GY, -.25);
  const vec3 B = vec3(1.75, .0015, 1.25);
  float plate = sdBox(q, B);
  if (plate > .06) return vec2(plate, 0.);
  // The planning grid: one square module, faint lines over the whole ground, and its edge.
  vec2 g = abs(fract(p.xz / .25 + .5) - .5) * .25;
  vec2 res = vec2(max(plate, min(g.x, g.y) - .0015), 26.);
  return U(res, vec2(sdFrame(q, B, .0028), 66.));
}

vec2 pavilion(vec3 p, float t) {
  vec3 q = p - PV;
  float bound = sdBox(q - vec3(0., .37, 0.), vec3(.82, .41, .48));
  if (bound > .2) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  const float FH = .18, RH = .7;
  // The floor plate, lifted off the ground on the frame.
  res = U(res, plane(q - vec3(0., FH - .012, 0.), vec3(.62, .012, .36), 85., 65.));
  // The roof plate: flat and thin, reaching out past its few columns on every side.
  res = U(res, plane(q - vec3(0., RH + .014, 0.), vec3(.76, .014, .42), 81., 61.));
  // Six slender cruciform columns, two modules apart on the grid, from the ground to the roof: they carry both plates.
  vec3 c = vec3(q.x - clamp(round(q.x / .5), -1., 1.) * .5, q.y, abs(q.z) - .25);
  res = U(res, vec2(cruciform(c, RH), 20.));
  // Three free-standing planes on the floor, sliding slowly past each other: space flows between them, never shut in.
  float s = t * .3, h = (RH - FH) * .5;
  vec3 w = q - vec3(0., FH + h, 0.);
  vec2 pl = plane(w - vec3(-.35 + .05 * sin(s), 0., .19), vec3(.22, h, .01), 42., 62.);
  pl = U(pl, plane(w - vec3(.1, 0., -.1 + .06 * sin(s + 2.1)), vec3(.01, h, .2), 42., 62.));
  pl = U(pl, plane(w - vec3(.4 + .05 * sin(s + 4.2), 0., -.02), vec3(.17, h, .01), 42., 62.));
  return U(res, pl);
}

vec2 hall(vec3 p, float t) {
  vec3 q = p - HL;
  const float HX = .875, HZ = .25, HH = .32;
  float bound = sdBox(q - vec3(0., .27, 0.), vec3(HX + .1, .29, HZ + .16));
  if (bound > .2) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  // Its floor, and glass all round from floor to roof; nothing inside.
  res = U(res, plane(q - vec3(0., .01, 0.), vec3(HX, .01, HZ), 83., 63.));
  vec3 g = q - vec3(0., .02 + (HH - .02) * .5, 0.);
  vec3 gb = vec3(HX, (HH - .02) * .5, HZ);
  res = U(res, vec2(SHELL(max(abs(sdBox2(g.xz, gb.xz)) - .002, abs(g.y) - gb.y)), 83.));
  res = U(res, vec2(sdFrame(g, gb, .003), 63.));
  // The roof, hung.
  res = U(res, plane(q - vec3(0., HH + .01, 0.), vec3(HX + .03, .01, HZ + .03), 83., 63.));
  // Three deep girders across the hall, above its roof, each on two columns outside the glass; the roof hangs from them.
  float gx = q.x - clamp(round(q.x / .625), -1., 1.) * .625;
  float girder = sdBox(vec3(gx, q.y - (HH + .12), q.z), vec3(.018, .07, HZ + .11));
  float cols = sdBox(vec3(gx, q.y - (HH + .19) * .5, abs(q.z) - (HZ + .09)), vec3(.016, (HH + .19) * .5, .016));
  float zq = q.z - clamp(round(q.z / .17), -1., 1.) * .17;
  float hang = sdBox(vec3(gx, q.y - (HH + .035), zq), vec3(.003, .016, .003));
  res = U(res, vec2(min(min(girder, cols), hang), 23.));
  // A light sweeps the empty floor from end to end: nothing stands in its way.
  float sx = HX * .94 * sin(t * .42);
  vec3 sq = vec3(q.x - sx, q.y, q.z);
  float sweep = sdBox(sq - vec3(0., .024, 0.), vec3(.035, .004, HZ - .012));
  sweep = min(sweep, sdFrame(sq - vec3(0., .02 + (HH - .02) * .5, 0.), vec3(.0001, (HH - .02) * .5 - .005, HZ - .014), .005));
  return U(res, vec2(sweep, 63.));
}

/** The I-beam mullions of one fa\xE7ade (u along it, v out from the glass, y up, to height h), and light running up them. */
vec2 mullions(float u, float v, float y, float sp, float n, float k, float h, float t) {
  float i = clamp(round(u / sp), -n, n);
  vec2 s = vec2(u - i * sp, v);
  float web = sdBox2(s - vec2(0., .012), vec2(.0022, .012));
  float fl = sdBox2(vec2(s.x, abs(s.y - .012) - .012), vec2(.008, .0022));
  float ext = abs(y - h * .5) - h * .5;
  vec2 res = vec2(max(min(web, fl), ext), 24.);
  // Light climbs each one, a dash at a time, out of step with its neighbours.
  const float P = .7;
  float run = abs(mod(y - t * .35 + hash11(i * 1.73 + k) * P, P) - P * .5) - .11;
  return U(res, vec2(max(max(sdBox2(s - vec2(0., .0262), vec2(.0095, .0026)), run), ext), 64.));
}

vec2 tower(vec3 p, float t) {
  vec3 q = p - TW;
  const float TX = .25, TZ = .25, FS = .15, NF = 11., SK = 9.;
  const float H = NF * FS, SH = SK * FS;
  float bound = sdBox(q - vec3(0., H * .5, 0.), vec3(TX + .06, H * .5 + .04, TZ + .06));
  if (bound > .2) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  // The bones: columns and floor slabs.
  vec3 c = vec3(q.x - clamp(round(q.x / .18), -1., 1.) * .18, q.y - H * .5, q.z - clamp(round(q.z / .18), -1., 1.) * .18);
  float col = sdBox(c, vec3(.014, H * .5, .014));
  float fy = q.y - clamp(round(q.y / FS), 1., NF) * FS;
  float slab = sdBox(vec3(q.x, fy + .006, q.z), vec3(TX - .012, .006, TZ - .012));
  res = U(res, vec2(min(col, slab), 20.));
  // The skin: glass hung in front of the slabs, stopping two floors short of the top.
  res = U(res, vec2(SHELL(max(abs(sdBox2(q.xz, vec2(TX, TZ))) - .002, abs(q.y - SH * .5) - SH * .5)), 87.));
  // I-beam mullions on every face, continuous from the ground to the top of the skin.
  res = U(res, mullions(q.x, abs(q.z) - TZ, q.y, TX / 3., 3., q.z > 0. ? 0. : 11., SH, t));
  res = U(res, mullions(q.z, abs(q.x) - TX, q.y, TZ / 3., 3., q.x > 0. ? 23. : 37., SH, t));
  return res;
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., -.12, -.25), vec3(1.8, .86, 1.35));
  if (bound > .25) return vec2(bound, 0.);
  float t = uTime;
  vec2 res = ground(p);
  res = U(res, pavilion(p, t));
  res = U(res, hall(p, t));
  res = U(res, tower(p, t));
  return res;
}
`};export{a as scene};
