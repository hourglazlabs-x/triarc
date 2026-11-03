import"./chunk-KR4ZLU5I.js";var e={id:"N30",cam:[.95,1.2,4.2],target:[-.08,.1,0],fov:2.55,floor:-1.55,ring:1.65,poster:1.68,glsl:`
const float T = 2.8;
const vec3 OW = vec3(-.06, .1, .2);            // where the waves arrive: the oval window, on the vestibule
const vec3 WS = vec3(-1.15, 1.62, 1.0);        // where the sound waves come from
const vec3 WD = normalize(OW - WS), WN = normalize(cross(WD, vec3(0., 1., 0.)));
const float WL = length(OW - WS);
// Cochlea: centre of its base and its frame (AX from base to apex).
const vec3 CB = vec3(-.62, -.3, .12);
const vec3 AX = normalize(vec3(-.48, .42, .76));
const vec3 E1 = normalize(cross(AX, vec3(0., 0., 1.)));
const vec3 E2 = cross(E1, AX);
// Semicircular canals, in a frame turned about y: centres, in-plane axes (the arc spans \xB1HW around D),
// plane normals, radii; the ends of each arc and its ampulla.
const float HW = 2.2;
const vec3 C0 = vec3(-.06, .64, .02), C1 = vec3(.42, .26, -.38), C2 = vec3(.5, -.02, .28);
const vec3 D0 = vec3(0., 1., 0.), D1 = normalize(vec3(0., .25, -1.)), D2 = normalize(vec3(1., 0., .45));
const vec3 W0 = vec3(1., 0., 0.), W1 = cross(vec3(1., 0., 0.), D1), W2 = normalize(cross(vec3(0., 1., 0.), D2));
const vec3 N0 = cross(D0, W0), N1 = cross(D1, W1), N2 = cross(D2, W2);
const float R0 = .43, R1 = .4, R2 = .36;
// Nerve: cochlear branch n0 \u2192 m1 \u2192 j, vestibular branch n1 \u2192 m2 \u2192 j, trunk j \u2192 m3 \u2192 n3.
const vec3 NB0 = vec3(-.6, -.32, .08), NB1 = vec3(-.5, -.56, -.18), NJ = vec3(-.18, -.64, -.42);
const vec3 NV0 = vec3(.08, -.12, -.12), NV1 = vec3(.04, -.42, -.32);
const vec3 NT1 = vec3(.1, -.9, -.62), NT2 = vec3(.55, -1.12, -.9);

vec3 palette(int i) {
  if (i == 0) return vec3(.97, .50, .62);   // cochlea
  if (i == 1) return vec3(.95, .90, .79);   // vestibule and canals
  if (i == 2) return vec3(1., .80, .24);    // nerve
  if (i == 3) return vec3(.40, .90, 1.);    // sound waves
  if (i == 4) return vec3(.75, .97, 1.);    // light along the cochlea
  if (i == 5) return vec3(.55, 1., .88);    // fluid shimmer
  return vec3(.62, .96, 1.);                // nerve impulses
}

/**
 * Tube along a circular arc (centre c, in-plane unit axes u, w, normal n, radius R) spanning \xB1HW around
 * u. Returns (distance, arc length from one end). The full ring's distance, a lower bound, is returned
 * when it already exceeds best, which skips the angle.
 */
vec2 arc(vec3 p, vec3 c, vec3 u, vec3 w, vec3 n, float R, float best) {
  vec3 q = p - c;
  vec2 xy = vec2(dot(q, u), dot(q, w));
  float z = dot(q, n);
  float ring = length(vec2(length(xy) - R, z)) - .055;
  if (ring > best) return vec2(ring, 0.);
  float a = clamp(atan(xy.y, xy.x), -HW, HW);
  return vec2(length(vec3(xy - R * vec2(cos(a), sin(a)), z)) - .055, (a + HW) * R);
}
/** Limbs of a canal into the vestibule and its ampulla. */
float limbs(vec3 k, vec3 c, vec3 d, vec3 w, float R) {
  vec3 e0 = c + R * (cos(HW) * d - sin(HW) * w), e1 = c + R * (cos(HW) * d + sin(HW) * w);
  vec3 amp = c + R * (cos(1.95) * d - sin(1.95) * w);
  return smin(min(sdCapsule(k, e0, e0 * .3, .055), sdCapsule(k, e1, e1 * .3, .055)), sdSphere(k - amp, .088), .05);
}

/**
 * Cochlea in its own frame (y along the axis): a logarithmic spiral tube whose radius, height and tube
 * thickness shrink together, so neighbouring turns touch. Returns (distance, position 0 \u2192 1 base \u2192 apex,
 * distance to a thin streak of light running along the outer top of the tube at position front).
 */
vec3 cochlea(vec3 c, float front) {
  const float CR = .5, RHO = -1.4946, B = .845, C = .38;    // RHO = ln(.55) / .4 per unit t
  float ph = atan(c.z, c.x); if (ph < 0.) ph += TAU;
  float r = length(c.xz);
  vec3 best = vec3(1e5, 0., 1e5);
  for (int k = 0; k < 3; k++) {
    float t = (ph + TAU * float(k)) / (TAU * 2.5);
    if (t > 1.) break;
    float R = CR * exp(RHO * t), Y = B * (CR - R), rt = C * R;
    float d = length(vec2(r - R, c.y - Y)) - rt;
    if (d < best.x) best.xy = vec2(d, t);
    if (abs(t - front) < .16) {
      float I = exp(-pow((t - front) / .07, 2.));
      best.z = min(best.z, length(vec2(r - R - .8 * rt, c.y - Y - .62 * rt)) - (.004 + .026 * I));
    }
  }
  // Apex dome, a solid core and the rounded start of the basal turn.
  float apex = sdSphere(c - vec3(0., B * (CR - .112) - .01, 0.), .14);
  float core = sdRoundCone(c, vec3(0., -.05, 0.), vec3(0., .25, 0.), .26, .1);
  float d = smin(best.x * .8, min(apex, core), .06);
  d = min(d, sdSphere(c - vec3(CR, 0., 0.), C * CR));
  return vec3(d, best.y, best.z * .8);
}

/** Nerve segment a\u2192b of radius r with path length s0 at a: (distance, path length there). */
vec2 nseg(vec3 p, vec3 a, vec3 b, float r, float s0) {
  vec3 pa = p - a, ba = b - a; float L = length(ba);
  float h = clamp(dot(pa, ba) / (L * L), 0., 1.);
  return vec2(length(pa - ba * h) - r, s0 + h * L);
}

vec2 map(vec3 p) {
  float bound = min(sdSphere(p - vec3(-.12, -.12, -.1), 1.55), sdRoundCone(p, WS, OW, .25, .68));
  if (bound > .3) return vec2(bound, 0.);
  float t = uTime, ph = fract(t / T);

  // Vestibule and the three semicircular canals, joined by their limbs (crura); each canal has an
  // ampulla. Fluid glints slosh back and forth in the canals.
  float ves = sdEllipsoid(p, vec3(.28, .21, .2));
  vec2 res = vec2(ves, 21.);
  vec3 k = p; k.xz *= rot(.5);
  if (sdSphere(k - vec3(.15, .35, -.1), 1.) < res.x) {
    vec2 a = arc(k, C0, D0, W0, N0, R0, res.x); float ph0 = 0.;
    vec2 b = arc(k, C1, D1, W1, N1, R1, min(a.x, res.x)); if (b.x < a.x) { a = b; ph0 = 1.7; }
    b = arc(k, C2, D2, W2, N2, R2, min(a.x, res.x)); if (b.x < a.x) { a = b; ph0 = 3.4; }
    float can = a.x;
    if (length(k) < .85) can = smin(can, min(min(limbs(k, C0, D0, W0, R0), limbs(k, C1, D1, W1, R1)), limbs(k, C2, D2, W2, R2)), .03);
    float sg = mod(a.y - .16 * sin(t * TAU / 3.2 + ph0) + ph0, .62) - .31;
    float glint = exp(-sg * sg / .0009) * step(a.x, can + .002);
    res = vec2(smin(ves, can, .06), can < ves && glint > .5 ? 65. : 21.);
  }

  // Cochlea: a streak of light runs along the spiral from base to apex after each sound wave arrives.
  vec3 cq = p - CB;
  vec3 c = vec3(dot(cq, E1), dot(cq, AX), dot(cq, E2));
  float cb = length(c - vec3(0., .15, 0.)) - .8;
  if (cb < res.x) {
    vec3 co = cochlea(c, (ph - .22) * 1.6);
    res = U(res, vec2(smin(co.x, ves + .02, .1), 20.));
    res = U(res, vec2(co.z, 64.));
  }

  // Vestibulocochlear nerve: the cochlear branch leaves the core of the cochlea, the vestibular branch
  // the back of the vestibule; they join and run off toward the brain. Impulses travel along it.
  if (sdCapsule(p, vec3(-.3, -.4, -.2), vec3(.35, -1., -.8), .55) < res.x) {
    vec2 n = nseg(p, NB0, NB1, .07, 0.);
    vec2 m = nseg(p, NB1, NJ, .07, length(NB1 - NB0)); if (m.x < n.x) n = m;
    float nv = n.x;
    m = nseg(p, NV0, NV1, .055, 0.); nv = smin(nv, m.x, .04); if (m.x < n.x) n = m;
    m = nseg(p, NV1, NJ, .055, length(NV1 - NV0)); nv = smin(nv, m.x, .04); if (m.x < n.x) n = m;
    float sj = length(NB1 - NB0) + length(NJ - NB1);
    m = nseg(p, NJ, NT1, .092, sj); nv = smin(nv, m.x, .05); if (m.x < n.x) n = m;
    m = nseg(p, NT1, NT2, .08, sj + length(NT1 - NJ)); nv = smin(nv, m.x, .05); if (m.x < n.x) n = m;
    float x = mod(n.y - (ph - .45) * 2.6 + 1.3, 2.6) - 1.3;
    float I = exp(-x * x / .006);
    res = U(res, vec2(nv - .01 * I, I > .4 ? 66. : 22.));
  }

  // Sound waves: curved fronts closing in on the vestibule, fading as they arrive.
  vec3 w = p - WS;
  float rw = length(w), along = dot(w, WD);
  if (along > 0. && along < WL) {
    float kw = rw - (fract(t / T * 1.5) * .5 + .4);
    float rr = kw - floor(kw / .5 + .5) * .5;
    float R = rw - rr;
    float fade = smoothstep(.35, .6, R) * (1. - smoothstep(WL - .5, WL - .2, R));
    float wv = max(max(abs(rr) - .016 * fade, abs(dot(w, WN)) - .03), (rw * .95 - along) * .7);
    res = U(res, vec2(max(wv, (.25 - fade) * .2), 63.));
  }
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 19.5 && m < 20.5) return .0015 * noise3(p * 40.);
  if (m > 20.5 && m < 21.5) return .0012 * noise3(p * 55.);
  if (m > 21.5 && m < 22.5) return .0012 * sin(dot(p, vec3(.3, .9, .3)) * 120.);
  return 0.;
}`};export{e as scene};
