import{a as e}from"./chunk-K7AKM7HN.js";import"./chunk-KR4ZLU5I.js";var a={id:"N07",cam:[1.45,1.55,5.35],target:[.05,.05,0],fov:2.45,floor:-1.75,ring:1.75,accent:e,poster:9,glsl:`
const vec3 E0 = vec3(-2.05, -.4, .1), J = vec3(-.2, .02, 0.), E1 = vec3(1.8, 1., -.35), E2 = vec3(1.8, -.85, .4);
const float W = .12, BEAT = 1.2, SPC = .36;
float gFlow;

vec3 palette(int i) {
  if (i == 0) return vec3(.96, .30, .27);   // artery wall (glass)
  if (i == 1) return vec3(1., .88, .86);    // inner lining (intima)
  if (i == 2) return vec3(.80, .16, .24);   // smooth muscle (media)
  if (i == 3) return vec3(1., .80, .42);    // outer coat (adventitia)
  if (i == 4) return vec3(.92, .14, .11);   // red blood cells
  if (i == 5) return vec3(.90, .86, 1.);    // white blood cell
  return vec3(1., .84, .50);                // platelets
}

/** Outer surface of the vessel (negative inside), with the pressure pulse. */
float vessel(vec3 p) {
  vec3 d0 = normalize(J - E0), d1 = normalize(E1 - J), d2 = normalize(E2 - J);
  float pulse = wave(p.x - E0.x, uTime, 2.6, 2.6 * BEAT, .38);
  float v = sdCapsule(p, E0 - d0 * .6, J, .5);
  float b = min(sdTaper(p, J, E1 + d1 * .6, .46, .35), sdTaper(p, J, E2 + d2 * .6, .46, .35));
  return smin(v, b, .22) - .035 * pulse;
}

/** Biconcave disc of radius r with its axis along n. */
float rbc(vec3 q, vec3 n, float r) {
  float y = dot(q, n), x = length(q - n * y);
  float d = length(vec2(x - r * .62, y)) - r * .36;
  return smin(d, max(abs(y) - r * .13, x - r * .7), r * .2);
}

/** Red cells (two staggered streams) and platelets carried along segment a\u2192b of lumen radius R. */
vec2 stream(vec3 p, vec3 a, vec3 b, float R, float seed) {
  vec3 ba = b - a; float L = length(ba); vec3 d = ba / L;
  vec3 e1 = normalize(cross(d, vec3(.31, .87, .38))), e2 = cross(d, e1);
  float h = dot(p - a, d);
  vec2 res = vec2(5., 24.);
  for (int k = 0; k < 2; k++) {
    float ph = gFlow + float(k) * SPC * .5;
    float id0 = floor((h - ph) / SPC);
    float side = fract((h - ph) / SPC) > .5 ? 1. : -1.;
    for (int j = 0; j < 2; j++) {
      float id = id0 + (j == 0 ? 0. : side);
      float c = (id + .5) * SPC + ph;
      float hs = hash11(id * 7.31 + seed + float(k) * 3.7);
      float an = hs * TAU + float(k) * PI, rad = R * (.2 + .45 * fract(hs * 13.7));
      vec3 ctr = a + d * c + (e1 * cos(an) + e2 * sin(an)) * rad;
      float tb = uTime * (1.1 + hs) + hs * 9.;
      vec3 n = normalize(d * cos(tb) + (e1 * cos(an * 2.) + e2 * sin(an * 2.)) * sin(tb));
      res.x = min(res.x, rbc(p - ctr, n, .15));
    }
  }
  // Platelets: a sparse third stream of small flat discs.
  float pp = gFlow * 1.05 + seed;
  float pid = floor((h - pp) / (SPC * 2.6));
  float pc = (pid + .5) * SPC * 2.6 + pp;
  float ph = hash11(pid * 3.17 + seed);
  vec3 pctr = a + d * pc + (e1 * cos(ph * TAU) + e2 * sin(ph * TAU)) * R * .55;
  vec3 pn = normalize(vec3(sin(uTime + ph * 9.), .6, cos(uTime * .8 + ph * 5.)));
  float pl = max(abs(dot(p - pctr, pn)) - .018, length(p - pctr) - .06) - .008;
  if (pl < res.x) res = vec2(pl, 26.);
  return res;
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(.05, .07, 0.), vec3(2.25, 1.45, .95));
  if (bound > .3) return vec2(bound, 0.);
  gFlow = .42 * uTime + .07 * sin(TAU * uTime / BEAT);
  vec3 d0 = normalize(J - E0), d1 = normalize(E1 - J), d2 = normalize(E2 - J);
  float v = vessel(p);
  // Cut ends, tilted toward the viewer so the cut wall shows: the signed distance past the nearest end plane.
  float e = max(dot(p - E0, normalize(-d0 + vec3(.1, .2, .75))), max(dot(p - E1, normalize(d1 + vec3(0., .1, .8))), dot(p - E2, normalize(d2 + vec3(0., .2, .7)))));
  float wall = abs(v + W * .5) - W * .5;
  vec2 res = vec2(SHELL(max(wall, e + .016)), 40.);
  // The wall's layers, seen where it is cut.
  float depth = -v / W;
  float slab = max(wall - .002, abs(e + .006) - .01);
  res = U(res, vec2(slab, depth < .32 ? 23. : depth < .84 ? 22. : 21.));

  // Blood: only inside the lumen (also seen directly through the open ends).
  float lumen = max(v + W, e);
  if (lumen < .25) {
    vec2 c = stream(p, E0 - d0 * .7, J, .4, 0.);
    c = U(c, stream(p, J, E1 + d1 * .7, .3, 11.));
    c = U(c, stream(p, J, E2 + d2 * .7, .3, 23.));
    // A white blood cell rolling slowly along the wall, into the lower branch.
    float L0 = length(J - E0) + .7, L2 = length(E2 - J) + .7;
    float sw = fract(uTime / 18.) * (L0 + L2);
    vec3 o0 = normalize(vec3(0., -.75, .65) - d0 * dot(vec3(0., -.75, .65), d0));
    vec3 o2 = normalize(vec3(0., -.75, .65) - d2 * dot(vec3(0., -.75, .65), d2));
    vec3 wc = sw < L0 ? E0 - d0 * .7 + d0 * sw + o0 * .2 : J + d2 * (sw - L0) + o2 * .16;
    vec3 wq = p - wc;
    wq.xy *= rot(-sw / .19);
    float wbc = length(wq) - .19 + .012 * sin(wq.x * 40.) * sin(wq.y * 40.) * sin(wq.z * 40.);
    c = U(c, vec2(wbc * .8, 25.));
    res = U(res, vec2(max(c.x, lumen), c.y));
  } else res.x = min(res.x, lumen);
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 39.5 && m < 40.5) return .0009 * sin(p.x * 70. + 3. * noise3(p * 4.)) + .0006 * noise3(p * 50.);
  if (m > 21.5 && m < 22.5) return .002 * sin(atan(p.y, p.z) * 60.);
  return 0.;
}`};export{a as scene};
