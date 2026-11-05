import{c as a}from"./chunk-W46U2OC5.js";import{a as e}from"./chunk-WY76X7OO.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var r={id:"D04",cam:[3.8,1.05,5.9],target:[.16,-.26,.02],floor:-1.6,ring:1.9,accent:e(a.D04),poster:5.5,glsl:`
const float GY = -.85;   // the floor
const vec3 BOX = vec3(.7, .5, .55);   // the closed box's half-size, its centre at (0, GY + .5, 0)

vec3 palette(int i) {
  if (i == 0) return vec3(.34, .42, .62);   // the closed box, a ghost (it glows, faintly)
  if (i == 1) return vec3(.86, .92, 1.);    // free-standing walls
  if (i == 2) return vec3(1., .93, .84);    // roof planes and the floor
  if (i == 3) return vec3(1., .62, .38);    // cantilevered tray, and its load running into the hearth
  if (i == 4) return vec3(1., .50, .24);    // hearth: stone, and the fire
  if (i == 5) return vec3(.50, .90, 1.);    // the low passage and the way in
  if (i == 6) return vec3(.62, .92, 1.);    // corner glass
  return vec3(.50, .74, .60);               // the ground
}

float gOpen;

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

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(.05, -.2, .05), vec3(2.05, 1.05, 1.6));
  if (bound > .25) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  float t = uTime;
  // The box opens, and half closes again, slowly.
  gOpen = .55 + .45 * smoothstep(-.6, .6, sin(t * .42));
  float o = .42 * gOpen, sl = .26 * gOpen;
  vec3 c = p - vec3(0., GY + BOX.y, 0.);

  // The ground, faintly furrowed; the floor plane runs out over it as a terrace.
  float gh = GY - .06 - .04 * sin(p.x * 1.3 + .4) * cos(p.z * 1.1);
  float ground = max(max((p.y - gh) * .8, gh - .018 - p.y), max(abs(p.x) - 1.95, abs(p.z) - 1.55));
  res = U(res, vec2(SHELL(ground), 87.));
  float furrow = abs(fract(p.z * 4.) - .5) / 4.;
  res = U(res, vec2(max(max(abs(p.y - gh) - .003, furrow - .003), max(abs(p.x) - 1.93, abs(p.z) - 1.53)), 27.));
  res = U(res, plane(p - vec3(-.15, GY - .012, .22), vec3(1.3, .012, .95), 82., 62.));

  // The closed box: its edges, thinning away as it opens.
  res = U(res, vec2(sdFrame(c, BOX, .002 + .006 * (1. - gOpen)), 60.));

  // Its walls, slid apart into free-standing planes, pinwheeling; glass where the corners were.
  {
    vec2 w = plane(c - vec3(sl, 0., BOX.z + o), vec3(.46, BOX.y, .016), 81., 61.);
    w = U(w, plane(c - vec3(-sl, 0., -BOX.z - o), vec3(.46, BOX.y, .016), 81., 61.));
    w = U(w, plane(c - vec3(BOX.x + o, 0., -sl * .8), vec3(.016, BOX.y, .32), 81., 61.));
    w = U(w, plane(c - vec3(-BOX.x - o, 0., sl * .8), vec3(.016, BOX.y, .32), 81., 61.));
    res = U(res, w);
    vec3 a = vec3(abs(c.x), c.y, abs(c.z));
    float glass = min(sdBox(a - vec3(BOX.x - .16, 0., BOX.z), vec3(.16, BOX.y, .003)), sdBox(a - vec3(BOX.x, 0., BOX.z - .16), vec3(.003, BOX.y, .16)));
    res = U(res, vec2(SHELL(glass), 86.));
    res = U(res, vec2(max(length(a.xz - BOX.xz) - .008, abs(c.y) - BOX.y), 66.));
  }

  // Horizontal planes: a long low roof, and a higher one sliding past it the other way.
  res = U(res, plane(p - vec3(-.38, GY + 1.06, .12), vec3(1.42, .018, .78), 82., 62.));
  res = U(res, plane(p - vec3(.58, GY + 1.3, -.14), vec3(1.02, .018, .5), 82., 62.));

  // A floor tray cantilevered far out from the hearth, held only there; its load runs back into the hearth.
  res = U(res, plane(p - vec3(.95, GY + .46, -.05), vec3(1., .024, .36), 83., 63.));
  float flow = fract(-t * .4 + p.x * 1.1 - p.y * 1.1);
  float load = sdCapsule(p, vec3(1.9, GY + .5, -.05), vec3(.02, GY + .5, -.05), .007);
  load = min(load, sdCapsule(p, vec3(0., GY + .5, -.05), vec3(0., GY + .02, -.05), .007));
  load = max(load, (.2 - abs(flow - .5)) * .04);
  res = U(res, vec2(load, 63.));

  // The hearth: one solid stone mass at the centre, rising through both roofs, the fire at its foot.
  {
    float core = sdBox(p - vec3(0., GY + .76, -.04), vec3(.15, .76, .15));
    float mouth = sdBox(p - vec3(0., GY + .14, .12), vec3(.09, .13, .08));
    core = max(core, -mouth);
    float course = abs(fract((p.y - GY) * 16.) - .5) / 16.;
    core += smoothstep(.005, 0., course) * .002;
    res = U(res, vec2(core, 24.));
    vec3 fq = p - vec3(0., GY + .01, .07);
    float flame = sdEllipsoid(fq - vec3(0., .07, 0.), vec3(.065, .085 + .02 * sin(t * 7.), .045)) + (noise3(fq * 18. + vec3(0., -t * 3., 0.)) - .5) * .03;
    res = U(res, vec2(max(flame, -fq.y), 64.));
  }

  // The way in: a low, narrow passage, then the tall room. Light runs along the path and lifts where it opens.
  {
    res = U(res, plane(p - vec3(-1.3, GY + .36, .3), vec3(.55, .012, .17), 85., 65.));
    res = U(res, plane(vec3(p.x + 1.3, p.y - (GY + .18), abs(p.z - .3) - .17), vec3(.55, .18, .008), 85., 65.));
    float s = fract(t * .3);
    float path = sdCapsule(p, vec3(-1.95, GY + .012, .3), vec3(-.3, GY + .012, .3), .007);
    path = max(path, (abs(fract((p.x + 1.95) * 3. - t * .9) - .5) - .22) * .1);
    res = U(res, vec2(path, 65.));
    float rise = sdCapsule(p, vec3(-.3, GY + .02, .3), vec3(-.3, GY + .02 + .95 * s, .3), .009 * (1. - s) + .001);
    res = U(res, vec2(rise, 65.));
  }
  return res;
}
`};export{r as scene};
