import{c as t}from"./chunk-6Q7FPIH3.js";import{a as e}from"./chunk-WY76X7OO.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var s={id:"D06",cam:[2.47,1.72,4],target:[.05,-.45,-.15],floor:-1.6,ring:1.9,accent:e(t.D06),poster:15,glsl:`
const float GY = -.95;                  // the ground
const vec3 HC = vec3(0., GY, .1);       // the house: x from -.6 to .6, z from -.38 to .38 about it
const vec3 MD = vec3(-1.73, GY, -.27);  // the Modulor's bars: the first blue one
const vec3 RK = vec3(1.2, GY, -.4);     // the rack
const float ST = .3;                    // a storey

float gLift, gPlan, gFacade, gGarden;   // the five points arriving, each 0 to 1
float gRed = 0.;                        // 1 where the red series is the nearer (see palette)

vec3 palette(int i) {
  if (i == 0) return vec3(.95, .94, .89);   // the Dom-ino frame: slabs, posts and stair
  if (i == 1) return vec3(.78, .90, 1.);    // pilotis
  if (i == 2) return vec3(1., .78, .56);    // free plan: curved partitions
  if (i == 3) return vec3(.60, .90, 1.);    // free fa\xE7ade and its band window
  if (i == 4) return vec3(.50, .92, .50);   // roof garden
  // The Modulor, red series or blue. The shading reads the palette right after the four map() calls of the normal
  // at the hit, and map() sets gRed there, so a bar takes its own series' colour.
  if (i == 5) return gRed > .5 ? vec3(.95, .2, .16) : vec3(.16, .38, 1.);
  if (i == 6) return vec3(1., .86, .52);    // the promenade: ramp and its light
  if (i == 7) return vec3(.52, .72, .66);   // the ground
  return vec3(.82, .88, 1.);                // the rack and its cells
}

/** Distance to a box's twelve edges, each a bar of half-thickness e. */
float sdFrame(vec3 p, vec3 b, float e) {
  p = abs(p) - b; vec3 q = abs(p + e) - e;
  return min(min(length(max(vec3(p.x, q.y, q.z), 0.)) + min(max(p.x, max(q.y, q.z)), 0.),
                 length(max(vec3(q.x, p.y, q.z), 0.)) + min(max(q.x, max(p.y, q.z)), 0.)),
                 length(max(vec3(q.x, q.y, p.z), 0.)) + min(max(q.x, max(q.y, p.z)), 0.));
}

/** A flight from a to b (x and y in the house's frame), half-width w about z = zc: a sloped plate, half-thickness th. */
float flight(vec3 q, vec2 a, vec2 b, float zc, float w, float th) {
  vec2 pa = q.xy - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
  return max(length(pa - ba * h) - th, abs(q.z - zc) - w);
}

/** A straight stair of n steps from a to b, half-width w about z = zc: blocks on a sloped stringer. */
float stair(vec3 q, vec2 a, vec2 b, float n, float zc, float w) {
  vec2 s = (b - a) / n;
  float k = clamp(floor((q.x - a.x) / s.x), 0., n - 1.);
  float d = 1e5;
  for (int j = 0; j < 2; j++) {
    float kk = min(k + float(j), n - 1.);
    vec2 c = a + s * (kk + .5);
    d = min(d, sdBox(vec3(q.x - c.x, q.y - c.y, q.z - zc), vec3(abs(s.x) * .5, abs(s.y) * .5, w)));
  }
  return min(d, flight(q - vec3(0., -.012, 0.), a, b, zc, w, .01));
}

vec2 ground(vec3 p) {
  vec3 q = p - vec3(-.175, GY - .006, -.09);
  const vec3 B = vec3(1.725, .006, .71);
  float d = sdBox(q, B);
  if (d > .05) return vec2(d, 0.);
  return U(vec2(SHELL(d), 87.), vec2(sdFrame(q, B + .002, .003), 67.));
}

vec2 house(vec3 p, float t) {
  vec3 q = p - HC;
  float bound = sdBox(q - vec3(0., .58, 0.), vec3(.66, .62, .44));
  if (bound > .2) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  float y0 = .024 + ST * gLift, y1 = y0 + ST, y2 = y1 + ST;   // the slabs' tops

  // The Dom-ino frame: three slabs, with wells for the ramp and the stair; six square posts; the stair.
  float s0 = sdBox(q - vec3(0., y0 - .012, 0.), vec3(.6, .012, .38));
  s0 = max(s0, -sdBox(q - vec3(0., y0, .3), vec3(.3, .03, .06)));
  float s1 = sdBox(q - vec3(0., y1 - .012, 0.), vec3(.6, .012, .38));
  s1 = max(s1, -min(sdBox(q - vec3(0., y1, .1), vec3(.3, .03, .06)), sdBox(q - vec3(-.325, y1, -.3), vec3(.225, .03, .056))));
  float s2 = sdBox(q - vec3(0., y2 - .012, 0.), vec3(.6, .012, .38));
  s2 = max(s2, -min(sdBox(q - vec3(0., y2, .3), vec3(.3, .03, .06)), sdBox(q - vec3(.325, y2, -.3), vec3(.225, .03, .056))));
  vec3 c = vec3(q.x - clamp(round(q.x / .4), -1., 1.) * .4, q.y, abs(q.z) - .2);
  float posts = sdBox(c - vec3(0., (y0 + y2) * .5 - .012, 0.), vec3(.02, (y2 - y0) * .5 + .012, .02));
  float st = min(stair(q, vec2(-.55, y0), vec2(-.1, y1), 8., -.3, .055), stair(q, vec2(.1, y1), vec2(.55, y2), 8., -.3, .055));
  res = U(res, vec2(min(min(s0, s1), min(min(s2, posts), st)), 20.));

  // Pilotis: the posts carried on down to the ground, round; under the house the ground stays open.
  float ph = y0 - .024;
  res = U(res, vec2(ph > .002 ? sdCylinder(vec3(c.x, q.y - ph * .5, c.z), ph * .5, .02) : 1e5, 21.));

  // The free plan: curved partitions set freely on the open lower floor, clear of the posts, rising as the cycle turns.
  float wh = (ST - .024) * gPlan;
  float sw = (q.x - .49 - .035 * sin(q.z * 12. + 1.)) * .8;
  float wall = max(abs(sw) - .005, abs(q.z - .05) - .25);
  vec2 cq = vec2(q.x + .5, q.z - .12);
  wall = min(wall, max(abs(length(cq) - .09) - .005, cq.x - .03));
  wall = max(wall, abs(q.y - y0 - wh * .5) - wh * .5);
  res = U(res, vec2(gPlan > .01 ? wall : 1e5, 22.));

  // The free fa\xE7ade: an envelope hung in front of the posts round the upper floor, unrolling; one long band window.
  if (gFacade > .01) {
    float w = .62 * gFacade;
    vec3 f = q - vec3(-.62 + w, (y1 - .024 + y2) * .5, .392);
    vec3 fb = vec3(w, (y2 - y1 + .024) * .5, .005);
    float wy = abs(q.y - y1 - .14) - .06;
    float band = max(wy, abs(q.x) - .55);
    float skin = max(sdBox(f, fb), -max(band, abs(f.z) - .02));
    res = U(res, vec2(skin, 23.));
    res = U(res, vec2(SHELL(max(max(band, abs(f.z) - .0015), abs(f.x) - w)), 83.));
    float edge = max(max(abs(wy) - .0035, abs(q.x) - .55), abs(f.z) - .008);
    edge = max(min(edge, sdFrame(f, fb, .004)), abs(f.x) - w);
    res = U(res, vec2(edge, 63.));
  }

  // The roof garden: a planted bed, shrubs, a small tree, grass, growing.
  if (gGarden > .01) {
    float g = gGarden;
    float bed = sdBox(q - vec3(-.08, y2 + .014 * g, -.1), vec3(.42, .014 * g, .055));
    float kx = clamp(round((q.x + .43) / .14), 0., 5.);
    vec3 sq = q - vec3(-.43 + kx * .14, y2 + .028 * g + .03 * g, -.1);
    float shrub = length(sq) - .042 * g;
    if (shrub < .03) shrub = (shrub + (noise3(sq * 38. + kx) - .5) * .014 * g) * .8;
    vec3 tq = q - vec3(.45, y2, .1);
    float crown = length(tq - vec3(0., .15 * g, 0.)) - .065 * g;
    if (crown < .04) crown = (crown + (noise3(tq * 30.) - .5) * .02 * g) * .8;
    float tree = min(sdCapsule(tq, vec3(0.), vec3(0., .12 * g, 0.), .008), crown);
    float grass = sdBox(q - vec3(-.47, y2 + .004 * g, .29), vec3(.1, .004 * g, .065));
    res = U(res, vec2(min(min(bed, shrub), min(tree, grass)), 24.));
  }

  // The promenade: from the open ground under the house a ramp climbs through it to the roof, a light along it.
  {
    vec2 a0 = vec2(-.3, -.006), b0 = vec2(.3, y0 - .006);
    vec2 a1 = vec2(.3, y0 - .006), b1 = vec2(-.3, y1 - .006);
    vec2 a2 = vec2(-.3, y1 - .006), b2 = vec2(.3, y2 - .006);
    float rp = min(min(flight(q, a0, b0, .3, .055, .006), flight(q, a1, b1, .1, .055, .006)), flight(q, a2, b2, .3, .055, .006));
    res = U(res, vec2(rp, 26.));
    // A strip of light up the flights, and a light climbing: the way in, the three flights, out onto the roof.
    vec3 lq = q - vec3(0., .008, 0.);
    float thread = min(min(flight(lq, a0, b0, .3, .014, .0025), flight(lq, a1, b1, .1, .014, .0025)), flight(lq, a2, b2, .3, .014, .0025));
    float s = mod(t * .45, 4.7);
    float k = clamp(floor(s - 1.), 0., 2.), h = clamp(s - 1. - k, 0., 1.);
    vec2 A = k < .5 ? a0 : k < 1.5 ? a1 : a2, B = k < .5 ? b0 : k < 1.5 ? b1 : b2;
    vec3 lp = s < 1. ? vec3(mix(-1.05, -.3, s), .02, .3) : vec3(mix(A, B, h) + vec2(.12 * clamp(s - 4., 0., 1.), .03), k == 1. ? .1 : .3);
    float bead = length(q - lp) - .024 * (1. - smoothstep(4.2, 4.7, s));
    res = U(res, vec2(min(bead, thread), 66.));
  }
  return res;
}

const float BLUE[6] = float[6](226., 140., 86., 53., 33., 20.);
const float RED[6] = float[6](183., 113., 70., 43., 27., 16.);

/** The Modulor's two series as bars of light, turned to face the first view: the blue behind, the red in front, set between. */
vec2 modulor(vec3 p, float t) {
  vec3 q = p - MD;
  q.xz *= rot(PI / 6.);
  float bound = sdBox(q - vec3(.28, .46, .08), vec3(.34, .5, .14));
  if (bound > .2) return vec2(bound, 0.);
  const float K = .004, SP = .1;   // units per cm; spacing
  // They rise in turn, each term after the last, and stand.
  float c = mod(t, 12.);
  float fall = 1. - smoothstep(11.2, 12., c);
  float bd = 1e5, rd = 1e5;
  for (int j = 0; j < 2; j++) {
    float ib = clamp(floor(q.x / SP) + float(j), 0., 5.);
    float hb = BLUE[int(ib)] * K * smoothstep(ib * .4, ib * .4 + .7, c) * fall;
    bd = min(bd, sdBox(vec3(q.x - ib * SP, q.y - hb * .5, q.z), vec3(.02, hb * .5 + .001, .02)));
    float ir = clamp(floor(q.x / SP - .5) + float(j), 0., 5.);
    float hr = RED[int(ir)] * K * smoothstep(ir * .4 + .2, ir * .4 + .9, c) * fall;
    rd = min(rd, sdBox(vec3(q.x - (ir + .5) * SP, q.y - hr * .5, q.z - .15), vec3(.02, hr * .5 + .001, .02)));
  }
  gRed = rd < bd ? 1. : 0.;
  return vec2(min(bd, rd), 65.);
}

/** The rack: a frame of three bays and four floors, and cells sliding into it one by one until it is full. */
vec2 rack(vec3 p, float t) {
  vec3 q = p - RK;
  float bound = sdBox(q - vec3(0., .42, .25), vec3(.36, .46, .64));
  if (bound > .2) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  // The frame: posts at the bays' sides, shelves at each floor.
  float px = abs(abs(abs(q.x) - .2) - .1);
  float posts = max(max(px - .011, abs(abs(q.z) - .18) - .011), abs(q.y - .405) - .405);
  float jy = clamp(round((q.y - .04) / .19), 0., 4.);
  float shelves = sdBox(vec3(q.x, q.y - .04 - jy * .19, q.z), vec3(.311, .007, .191));
  res = U(res, vec2(min(posts, shelves), 28.));
  // The cells: slot k (three to a floor) is the o-th to arrive, o = 5k mod 12; n are in, the next is sliding in.
  float c = mod(t, 22.);
  float n = floor(c / 1.6), f = fract(c / 1.6);
  vec3 cb = vec3(.084, .078, .16) * (1. - smoothstep(21.2, 21.9, c));
  float i = clamp(round(q.x / .2), -1., 1.), j = clamp(floor((q.y - .04) / .19), 0., 3.);
  vec3 l = q - vec3(i * .2, .04 + (j + .5) * .19, 0.);
  float cell, edge;
  if (mod((i + 1. + 3. * j) * 5., 12.) < n) {
    cell = sdBox(l, cb);
    edge = min(sdFrame(l, cb + .002, .0035), sdBox(l - vec3(0., .01, cb.z + .002), vec3(cb.x - .02, .022, .003)));
  } else {
    // An empty slot: no cell nearer than its neighbours' (or the whole array's, from outside).
    cell = max(.016 - max(abs(l.x) - .1, abs(l.y) - .095), sdBox(q - vec3(0., .425, 0.), vec3(.3, .38, .16)));
    edge = cell;
  }
  if (n < 12.) {
    float km = mod(n * 5., 12.);
    vec3 lm = q - vec3((mod(km, 3.) - 1.) * .2, .04 + (floor(km / 3.) + .5) * .19, .55 * (1. - smoothstep(0., .85, f)));
    cell = min(cell, sdBox(lm, cb));
    edge = min(edge, min(sdFrame(lm, cb + .002, .0035), sdBox(lm - vec3(0., .01, cb.z + .002), vec3(cb.x - .02, .022, .003))));
  }
  res = U(res, vec2(SHELL(cell), 48.));
  // Each cell's edges, and a lit window across its front: a small house of its own.
  return U(res, vec2(edge, 68.));
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(-.175, -.38, -.09), vec3(1.78, .62, .78));
  if (bound > .25) return vec2(bound, 0.);
  float t = uTime;
  // The five points arrive in turn over a cycle, stay, and go again.
  float c = mod(t, 20.);
  float back = 1. - smoothstep(17.5, 19.5, c);
  gLift = smoothstep(1.5, 3.5, c) * back;
  gPlan = smoothstep(3.5, 5.5, c) * back;
  gFacade = smoothstep(5.5, 7.5, c) * back;
  gGarden = smoothstep(7.5, 9.5, c) * back;
  vec2 res = ground(p);
  // The way into the house, on the ground under it between the pilotis: dashes of light running to the ramp's foot.
  vec3 w = p - HC;
  float path = sdCapsule(w, vec3(-1.05, .006, .3), vec3(-.3, .006, .3), .007);
  res = U(res, vec2(max(path, (abs(fract(w.x * 5. - t * .9) - .5) - .2) * .1), 66.));
  res = U(res, house(p, t));
  res = U(res, modulor(p, t));
  res = U(res, rack(p, t));
  return res;
}
`};export{s as scene};
