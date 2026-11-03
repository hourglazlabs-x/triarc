import"./chunk-KR4ZLU5I.js";var e={id:"N13",cam:[.75,2.2,4.3],target:[0,-.3,0],fov:2.55,floor:-1.55,ring:1.8,poster:4.8,glsl:`
const float TW = 9., BED = -.5;
const vec3 VC = vec3(0., -.02, -.25), INJ = vec3(1., -.6, .5);
const vec3 WN = vec3(0., -.55, .835);       // from the vessel axis toward the injury side
const vec3 WT = vec3(0., -.835, -.55);      // axis the white cells roll about
const vec3 S1 = INJ + vec3(.16, .02, -.15), S2 = INJ + vec3(-.2, 0., -.06);   // white cells already at the injury
float gR;

vec3 palette(int i) {
  if (i == 0) return vec3(1., .38, .38);    // vessel wall (glass)
  if (i == 1) return vec3(.97, .58, .64);   // tissue cells
  if (i == 2) return vec3(.95, .80, .74);   // connective tissue beneath
  if (i == 3) return vec3(.70, .58, 1.);    // white blood cells
  if (i == 4) return vec3(.88, .12, .15);   // red blood cells
  if (i == 5) return vec3(.86, .26, .04);   // injury (glowing)
  if (i == 6) return vec3(1., .88, .28);    // cytokines (glowing)
  if (i == 7) return vec3(.62, .26, .28);   // damaged cells
  return vec3(.60, .32, .92);               // nuclei
}

float region(vec3 p) { return (length(p.xz / vec2(2.1, 1.3)) - 1.) * 1.25; }

/** Tissue bed: a layer of cobblestone cells with nuclei, cut at the edge of the region, cratered at the injury. */
vec2 bed(vec3 p) {
  float j = floor(p.z / .26 + .5);
  float xo = mod(j, 2.) * .15;
  float i = floor((p.x - xo) / .3 + .5);
  float h = hash21(vec2(i, j));
  vec3 c = vec3(i * .3 + xo, BED - .1 - .025 * h, j * .26);
  float dmg = smoothstep(.62, .4, length(c - INJ));
  vec3 l = p - c; l.xz *= rot((h - .5) * .5);
  float s = 1. - .25 * dmg;
  float cell = sdRoundBox(l / s, vec3(.122, .1 + .02 * h, .098), .065) * s;
  float reg = region(p);
  float hole = .34 - length(p - INJ);
  vec2 res = vec2(max(max(cell, reg), hole), dmg > .5 ? 27. : 21.);
  // The nucleus bulges from the top of the cell; below that it cannot be the nearest surface.
  if (l.y > .02) res = U(res, vec2(max(max(sdEllipsoid(l - vec3(.01, .085 * s, 0.), vec3(.052, .034, .046) * s), reg), hole), 28.));
  float base = max(abs(p.y - BED + .23) - .1, reg);
  base = smax(base, .26 - length(p - INJ - vec3(0., .1, 0.)), .06);
  return U(res, vec2(base, 22.));
}

const float RWB = .17;
const vec3 XA = vec3(1., 0., 0.), EX = VC + vec3(.15, 0., 0.);
const vec3 CB = vec3(.55, BED + .1, .35);
// The crawl ends exactly at S1, a cell already at the injury, in the same pose (its axes: AE, AU, AS).
const vec3 AE = normalize(S1 - CB), AS = normalize(cross(AE, vec3(0., 1., 0.))), AU = cross(AS, AE);
const vec3 RC = vec3(.2, .12, .13);
vec3 crawlA() { return EX + WN * (gR + .17); }
/** Rolling position along the vessel at phase ph, slowing to a stop at the crossing point. */
float rollX(float ph) { float s = clamp(ph / .4, 0., 1.); return mix(-2.3, .15, 1. - pow(1. - s, 1.5)); }
/** Squeezing through the wall at fraction s: inner and outer lobe radii. */
vec2 lobes(float s) { return vec2(mix(.15, .03, s), mix(.03, .16, s)); }

/** One white cell shape: a main ellipsoid (centre c, axes ax, radii rad), a second lobe (c2, r2) and a neck. */
float cellShape(vec3 p, vec3 c, mat3 ax, vec3 rad, vec3 c2, float r2, float rn, float seed) {
  vec3 l = (p - c) * ax;
  float d = sdEllipsoid(l, rad);
  d = smin(d, length(p - c2) - r2, .05);
  d = smin(d, sdCapsule(p, c, c2, rn), .04);
  return (d + .011 * sin(l.x * 46. + seed) * sin(l.y * 44. + uTime) * sin(l.z * 48.)) * .85;
}
/** A white cell already at the injury. */
float settled1(vec3 p) { return cellShape(p, S1, mat3(AE, AU, AS), RC, S1, 0., 0., 0.); }

/** Centre and radius of a sphere that bounds a white cell at journey phase ph. */
vec4 wbcBound(float ph) {
  if (ph < .44) return vec4(VC + XA * rollX(ph) + WN * (gR - .03 - RWB), RWB * 1.2 + .02);
  if (ph < .6) {
    vec2 r = lobes(smoothstep(.44, .6, ph));
    float a = gR - .02 - r.x * .85, b = gR + .02 + r.y * .85;
    return vec4(EX + WN * (a + b) * .5, (b - a) * .5 + max(r.x, r.y) + .02);
  }
  return vec4(bezier(crawlA(), CB, S1, smoothstep(.6, .92, ph)), .3);
}

/**
 * A white blood cell at journey phase ph: it rolls along the inner wall, sticks and flattens, squeezes
 * through the wall (an inner lobe shrinking as an outer lobe grows, joined by a neck), then crawls to the
 * injury and comes to rest exactly as the cell already there, so its disappearance cannot be seen. Each
 * stage only sets the parameters of one shape.
 */
float wbc(vec3 p, float ph, float seed) {
  vec3 c, c2; mat3 ax; vec3 rad; float r2 = 0., rn = 0.;
  if (ph < .44) {
    float x = rollX(ph), fl = smoothstep(.36, .44, ph);
    c = VC + XA * x + WN * (gR - .03 - RWB + .025 * fl);
    float a = (.15 - x) / RWB;
    ax = mat3(XA * cos(a) + WN * sin(a), -XA * sin(a) + WN * cos(a), WT);
    rad = RWB * vec3(1. + .15 * fl, 1. - .22 * fl, 1. + .15 * fl);
    c2 = c;
  } else if (ph < .6) {
    vec2 r = lobes(smoothstep(.44, .6, ph));
    c = EX + WN * (gR - .02 - r.x * .85);
    ax = mat3(XA, WN, WT);
    rad = vec3(r.x);
    c2 = EX + WN * (gR + .02 + r.y * .85); r2 = r.y; rn = .04;
  } else {
    float s = smoothstep(.6, .92, ph), join = smoothstep(.86, .96, ph);
    vec3 A = crawlA();
    c = bezier(A, CB, S1, s);
    vec3 dir = normalize(mix(CB - A, S1 - CB, s));
    vec3 side = normalize(cross(dir, vec3(0., 1., 0.)));
    ax = mat3(dir, cross(side, dir), side);
    rad = RC;
    c2 = c + dir * (.17 + .02 * sin(uTime * 3. + seed)) * (1. - join); r2 = .07 * (1. - join);
    seed *= 1. - join;
  }
  return max(cellShape(p, c, ax, rad, c2, r2, rn, seed), abs(p.x) - 2.05);
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., -.25, 0.), vec3(2.25, .85, 1.45));
  if (bound > .3) return vec2(bound, 0.);
  gR = .4 * (1. + .045 * (.5 - .5 * cos(TAU * uTime / 3.)));

  // The vessel: an open-ended glass tube.
  vec3 v = p - VC;
  float rr = length(v.yz);
  vec2 res = vec2(SHELL(max(abs(rr - gR) - .022, abs(v.x) - 2.05)), 40.);

  // Red blood cells streaming through it; they lie inside the tube.
  if (rr - gR < res.x) {
    float xs = v.x - uTime * .45;
    float id = floor(xs / .17);
    float xl = mod(xs, .17) - .085;
    float h = hash11(id * 3.17 + 1.);
    float a = h * TAU, rad = (gR - .15) * sqrt(hash11(id * 7.3 + 2.));
    vec3 l = vec3(xl, v.y - cos(a) * rad, v.z - sin(a) * rad);
    l.xy *= rot(h * 3. + uTime * (h - .5));
    l.yz *= rot(h * 5.);
    float d = length(vec2(length(l.xz) - .072, l.y)) - .036;
    d = smin(d, max(abs(l.y) - .015, length(l.xz) - .085), .02);
    res = U(res, vec2(max(d, abs(v.x) - 2.05), 24.));
  }

  // Tissue bed.
  if (p.y < BED + .12 && region(p) < res.x + .1) res = U(res, bed(p));
  else res = U(res, vec2(max(p.y - BED - .06, region(p)), 21.));

  // Injury: glowing debris in the crater, and two white cells already gathered there.
  vec3 iq = p - INJ - vec3(0., -.1, 0.);
  float glow = sdSphere(iq, .15) + .03 * sin(iq.x * 30.) * sin(iq.y * 26.) * sin(iq.z * 28.);
  glow = min(glow, sdSphere(iq - vec3(.13, .02, -.1), .07));
  res = U(res, vec2(glow * .8, 65.));
  vec3 a2 = p - S2;
  float w = min(settled1(p), (sdEllipsoid(a2, vec3(.15, .12, .16)) + .01 * sin(a2.x * 47.) * sin(a2.y * 43. + uTime) * sin(a2.z * 45.)) * .85);
  // White blood cells on their way: bounds for all three are cheap; only the nearest gets its shape (their
  // timing keeps the bounds apart).
  float b0 = 1e5, p0 = 0., k0 = 0.;
  for (int k = 0; k < 3; k++) {
    float ph = fract(uTime / TW + float(k) / 3.);
    vec4 bs = wbcBound(ph);
    float bk = length(p - bs.xyz) - bs.w;
    if (bk < b0) { b0 = bk; p0 = ph; k0 = float(k); }
  }
  w = min(w, b0 < .05 ? wbc(p, p0, k0 * 2.1) : b0);
  res = U(res, vec2(w, 23.));

  // Cytokines rising from the injury.
  if (sdCapsule(p, INJ, INJ + vec3(-.45, .95, -.35), .45) < res.x) {
    float cy = 1e5;
    for (int i = 0; i < 7; i++) {
      float fi = float(i);
      float u = fract(uTime * .16 + fi / 7.);
      vec3 c = INJ + vec3(-.45 * u + .22 * sin(fi * 2.3 + u * 4.), .05 + .95 * u, -.35 * u + .2 * cos(fi * 1.7 + u * 3.));
      float r = .034 * sqrt(sin(PI * u));
      if (r > .006) cy = min(cy, length(p - c) - r);
    }
    res = U(res, vec2(cy, 66.));
  }
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 39.5 && m < 40.5) {
    // Endothelial cells, elongated along the vessel: staggered rows around it.
    vec3 v = p - VC;
    float a = atan(v.z, v.y) * 2.6;
    float row = floor(a);
    float e = min(abs(fract(a) - .5), abs(fract(v.x * 2.4 + row * .5) - .5) * 2.2);
    return .0025 * smoothstep(.0, .12, e);
  }
  if (m > 20.5 && m < 21.5) return .0015 * noise3(p * 50.);
  if (m > 22.5 && m < 23.5) return .002 * noise3(p * 60.);
  return 0.;
}`};export{e as scene};
