import"./chunk-KR4ZLU5I.js";var e={id:"N01",cam:[.4,.5,6.6],target:[0,.1,0],floor:-2.75,ring:1.5,poster:4.2,glsl:`
const float PITCH = 2.3, RISE = .23, R = .78, GROOVE = 2.35, FORK = 1.25;
float gSpin, gScan;

vec3 palette(int i) {
  if (i == 0) return vec3(1., .33, .30);    // adenine
  if (i == 1) return vec3(1., .84, .28);    // thymine
  if (i == 2) return vec3(.34, .90, .46);   // guanine
  if (i == 3) return vec3(.30, .58, 1.);    // cytosine
  if (i == 4) return vec3(.52, .56, 1.);    // backbone, strand 1
  if (i == 5) return vec3(1., .50, .80);    // backbone, strand 2
  if (i == 6) return vec3(1., .78, .36);    // phosphate groups
  return vec3(.55, .95, 1.);                // hydrogen bonds, reading ring
}

/** How far the strands have parted at height y (0 below the fork). */
float part(float y) { return max(y - FORK, 0.); }
/** Backbone point of strand s (0 or 1) at height y. */
vec3 strand(float y, float s) {
  float u = part(y);
  float a = y * TAU / PITCH + gSpin + s * GROOVE + (s * 2. - 1.) * u * .6;
  float r = R + .55 * u * u;
  return vec3(r * cos(a), y, r * sin(a));
}
/**
 * Distance to strand s's backbone tube. The strand faces q's direction once per turn; check the turn
 * nearest q's height and the next one, each with two short chords of the curve.
 */
float backbone(vec3 q, float s) {
  float base = (atan(q.z, q.x) - gSpin - s * GROOVE) * PITCH / TAU;
  float y0 = base + floor((q.y - base) / PITCH + .5) * PITCH;
  // Above the fork the strand turns a little further; one correction step finds it again.
  base -= (s * 2. - 1.) * part(y0) * .6 * PITCH / TAU;
  y0 = base + floor((q.y - base) / PITCH + .5) * PITCH;
  float y1 = y0 + (q.y > y0 ? PITCH : -PITCH);
  float best = 1e5;
  for (int k = 0; k < 2; k++) {
    float y = k == 0 ? y0 : y1;
    vec3 a = strand(y - .12, s), m = strand(y, s), b = strand(y + .12, s);
    best = min(best, min(sdCapsule(q, a, m, .07), sdCapsule(q, m, b, .07)));
  }
  return best;
}
/** One base pair at step index i: (distance, material). */
vec2 basePair(vec3 q, float i) {
  float y = i * RISE;
  vec3 A = strand(y, 0.), B = strand(y, 1.);
  float h = hash11(i * 7.31 + 3.1);
  int b1 = int(h * 4.);
  int b2 = b1 == 0 ? 1 : b1 == 1 ? 0 : b1 == 2 ? 3 : 2;
  bool lit = abs(y - gScan) < .3;
  vec3 M = (A + B) * .5;
  vec3 u = normalize(B - A);
  float gap = .07;
  float open = smoothstep(0., .25, part(y));
  vec3 Ma = mix(M - u * gap, A + (M - A) * .55, open), Mb = mix(M + u * gap, B + (M - B) * .55, open);
  vec2 r1 = vec2(sdCapsule(q, A, Ma, .062), float(lit ? 60 + b1 : 20 + b1));
  vec2 r2 = vec2(sdCapsule(q, B, Mb, .062), float(lit ? 60 + b2 : 20 + b2));
  vec2 res = U(r1, r2);
  if (open < .5) {
    // Two hydrogen bonds for A\u2013T, three for G\u2013C.
    float n = b1 < 2 ? 2. : 3.;
    float hb = 1e5;
    for (float k = 0.; k < 3.; k++) {
      if (k >= n) break;
      vec3 c = M + vec3(0., (k - (n - 1.) * .5) * .045, 0.);
      hb = min(hb, sdCapsule(q, c - u * gap * .8, c + u * gap * .8, .012));
    }
    res = U(res, vec2(hb, 67.));
  }
  return res;
}

vec2 map(vec3 p) {
  vec3 q = p; q.xy *= rot(.32); q.yz *= rot(-.12);
  float bound = sdCapsule(q, vec3(0, -2.3, 0), vec3(0, 2.3, 0), 1.6);
  if (bound > .3) return vec2(bound, 0.);
  gSpin = uTime * .32;
  gScan = -2.2 + mod(uTime * .55, 5.);
  float clip = abs(q.y - .02) - 2.12;
  vec2 res = vec2(max(backbone(q, 0.), clip), 24.);
  res = U(res, vec2(max(backbone(q, 1.), clip), 25.));
  // Phosphate groups: beads on each backbone, halfway between base steps.
  float j = floor(q.y / RISE) + .5;
  float ph = 1e5;
  for (float k = -1.; k <= 1.; k++) {
    float y = (j + k) * RISE;
    if (abs(y) < 2.1) ph = min(ph, min(sdSphere(q - strand(y, 0.), .1), sdSphere(q - strand(y, 1.), .1)));
  }
  res = U(res, vec2(ph, 26.));
  float i0 = floor(q.y / RISE + .5);
  for (float k = -1.; k <= 1.; k++) {
    float i = i0 + k;
    if (abs(i * RISE) < 2.05) res = U(res, basePair(q, i));
  }
  // Reading ring.
  vec3 sq = q - vec3(0., gScan, 0.);
  res = U(res, vec2(sdTorus(sq, vec2(R + .32 + .55 * part(gScan) * part(gScan), .018)), 67.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 23.5 && m < 25.5) return .002 * sin(p.y * 160.);
  if (m > 25.5 && m < 26.5) return .003 * noise3(p * 60.);
  return 0.;
}`};export{e as scene};
