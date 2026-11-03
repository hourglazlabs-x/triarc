import"./chunk-KR4ZLU5I.js";var e={id:"N12",cam:[.9,1,6],target:[0,.25,0],fov:2.5,floor:-1.7,ring:1.7,poster:2.3,glsl:`
const float P = 9., RV = .55, RH = .9;
const vec3 C = vec3(0., .3, 0.);
// Spike directions: icosahedron vertices (0, \xB1a, \xB1b) and their cyclic permutations, and the face centres
// (\xB1c, \xB1c, \xB1c), (0, \xB1d, \xB1e) and cyclic permutations.
const float IA = .5257311, IB = .8506508, DC = .5773503, DD = .9341724, DE = .3568221;
// Antibody binding sites: each grips an icosahedron spike and a neighbouring face-centre spike.
const vec3 PA[6] = vec3[6](vec3(0., IA, IB), vec3(IB, 0., -IA), vec3(-IA, IB, 0.), vec3(0., -IA, IB), vec3(-IB, 0., -IA), vec3(IA, -IB, 0.));
const vec3 PB[6] = vec3[6](vec3(DC, DC, DC), vec3(DD, -DE, 0.), vec3(0., DD, -DE), vec3(-DC, -DC, DC), vec3(-DC, -DC, -DC), vec3(DC, -DC, -DC));

vec3 palette(int i) {
  if (i == 0) return vec3(.56, .92, .22);   // capsid
  if (i == 1) return vec3(.94, .20, .22);   // spike proteins
  if (i == 2) return vec3(.22, .44, 1.);    // antibody heavy chains
  if (i == 3) return vec3(1., .76, .22);    // antibody light chains
  return vec3(.55, .95, 1.);                // binding flash
}

vec3 signs(vec3 n) { return vec3(n.x < 0. ? -1. : 1., n.y < 0. ? -1. : 1., n.z < 0. ? -1. : 1.); }
/** Nearest icosahedron vertex and nearest face centre to direction n (folded by symmetry). */
vec3 nearIco(vec3 n) {
  vec3 a = abs(n);
  vec3 b0 = vec3(0., IA, IB), b1 = vec3(IA, IB, 0.), b2 = vec3(IB, 0., IA);
  float d0 = dot(a, b0), d1 = dot(a, b1), d2 = dot(a, b2);
  vec3 b = d0 > d1 ? (d0 > d2 ? b0 : b2) : (d1 > d2 ? b1 : b2);
  return b * signs(n);
}
vec3 nearDod(vec3 n) {
  vec3 a = abs(n);
  vec3 b0 = vec3(DC), b1 = vec3(0., DD, DE), b2 = vec3(DE, 0., DD), b3 = vec3(DD, DE, 0.);
  float d0 = dot(a, b0), d1 = dot(a, b1), d2 = dot(a, b2), d3 = dot(a, b3);
  vec3 b = d0 > d1 ? b0 : b1; float m = max(d0, d1);
  if (d2 > m) { b = b2; m = d2; }
  if (d3 > m) b = b3;
  return b * signs(n);
}
float spike(vec3 v, vec3 d) {
  float stalk = sdCapsule(v, d * (RV - .03), d * (RH - .07), .027);
  return smin(stalk, sdSphere(v - d * (RH - .015), .07), .035);
}

/** Antibody k: (distance, material). Its tips sit on spikes PA[k] and PB[k]; off (0 bound .. 1 away) lifts and tilts it. */
vec2 antibody(vec3 v, int k, float off, float flash) {
  vec3 a = PA[k] * RH, b = PB[k] * RH;
  vec3 m = normalize(a + b), et = normalize(b - a), en = cross(m, et);
  vec3 H = (a + b) * .5 + m * (.34 + .62 * off);
  vec3 d = v - H;
  vec3 l = vec3(dot(d, et), dot(d, m), dot(d, en));
  l.xy *= rot(.7 * off * (k % 2 == 0 ? 1. : -1.));
  l.yz *= rot(.4 * off);
  vec3 s = vec3(abs(l.x), l.y, l.z);
  // One arm (mirrored): along dA from the hinge to the tip at (.288, -.34); light chain on the outer side.
  vec2 dA = vec2(.646, -.763), pr = vec2(.763, .646);
  vec2 ax = vec2(dot(s.xy, dA), dot(s.xy, pr));
  float heavy = 1e5, light = 1e5;
  for (int i = 0; i < 2; i++) {
    float c = i == 0 ? .17 : .355;
    heavy = min(heavy, sdEllipsoid(vec3(ax.x - c, ax.y + .042, s.z), vec3(.09, .046, .056)));
    light = min(light, sdEllipsoid(vec3(ax.x - c, ax.y - .042, s.z), vec3(.09, .043, .052)));
  }
  // Stem: the two heavy chains side by side, two domains each; the hinge links them to the arms.
  heavy = min(heavy, sdEllipsoid(vec3(s.x - .05, l.y - .15, s.z), vec3(.048, .082, .056)));
  heavy = min(heavy, sdEllipsoid(vec3(s.x - .05, l.y - .32, s.z), vec3(.048, .078, .056)));
  heavy = min(heavy, sdCapsule(s, vec3(.024, .08, 0.), vec3(.07, -.04, 0.), .025));
  vec2 res = U(vec2(heavy, 22.), vec2(light, 23.));
  if (flash > .02) res = U(res, vec2(length(s - vec3(.288, -.37, 0.)) - .1 * flash, 64.));
  return res;
}

vec2 map(vec3 p) {
  vec3 v = p - C;
  float bound = length(v) - 2.4;
  if (bound > .3) return vec2(bound, 0.);
  v.xy *= rot(.35);
  v.xz *= rot(uTime * .2);
  float r = length(v);
  vec2 res = vec2(1e5, 0.);
  // Capsid and spikes; only the nearest spike of each kind can be the nearest surface.
  if (r - RH - .1 < .1) {
    vec3 n = v / r;
    res = vec2(r - RV, 20.);
    res = U(res, vec2(min(spike(v, nearIco(n)), spike(v, nearDod(n))), 21.));
  } else res = vec2(r - RH - .1, 0.);

  // Antibodies, each on its own cycle, staggered.
  for (int k = 0; k < 6; k++) {
    float ph = fract(uTime / P + float(k) / 6.);
    float off = ph < .25 ? 1. - smoothstep(0., .25, ph) : smoothstep(.85, 1., ph);
    vec3 a = PA[k] * RH, b = PB[k] * RH;
    vec3 c = (a + b) * .5 + normalize(a + b) * (.38 + .62 * off);
    if (length(v - c) - .56 < res.x) {
      float x = (ph - .26) / .035;
      res = U(res, antibody(v, k, off, exp(-x * x)));
    }
  }
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 19.5 && m < 20.5) {
    vec3 v = p - C; v.xy *= rot(.35); v.xz *= rot(uTime * .2);
    return .008 * (1. - smoothstep(.15, .6, cellular(v * 13.)));
  }
  if (m > 21.5 && m < 23.5) return .0015 * noise3(p * 70.);
  return 0.;
}`};export{e as scene};
