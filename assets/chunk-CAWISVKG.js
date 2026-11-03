import"./chunk-KR4ZLU5I.js";var e={id:"N20",cam:[.3,1,5.5],target:[0,-.12,0],fov:2.5,floor:-1.95,ring:1.75,poster:2.3,glsl:`
// Small intestine: NR rows of a meander, half-width W, row spacing H, tube radius R.
const float W = .5, H = .33, R = .135, Y0 = .2;
const float NR = 4.;

vec3 palette(int i) {
  if (i == 0) return vec3(.98, .46, .36);   // large intestine
  if (i == 1) return vec3(1., .46, .64);    // small intestine wall (thin glass)
  if (i == 2) return vec3(.86, .26, .42);   // small intestine lining
  if (i == 3) return vec3(.12, .80, .26);   // microbes: green
  if (i == 4) return vec3(.55, .22, 1.);    // microbes: purple
  if (i == 5) return vec3(1., .48, .05);    // microbes: orange
  if (i == 6) return vec3(.55, .92, .12);   // microbes: lime
  return vec3(1., .80, .36);                // fat tags on the colon
}

/** A smooth pulse repeating every spacing along s and moving at speed; about w wide (cheap Gaussian). */
float pulse(float s, float speed, float spacing, float w) {
  float x = mod(s - uTime * speed, spacing);
  x = min(x, spacing - x) / w;
  x = max(1. - x * x * .3, 0.);
  return x * x;
}
/** Peristaltic contraction rings travelling along a path coordinate s, each with a bulge ahead of it. */
float peri(float s, float speed, float spacing) {
  return -.3 * pulse(s, speed, spacing, .09) + .13 * pulse(s - .2, speed, spacing, .12);
}

// Large intestine from the cecum to the rectum: segment i runs CA[i] \u2192 CB[i] \u2192 CC[i] (a straight
// segment when CB[i] is the midpoint, a quadratic Bezier otherwise; the transverse colon is three straight
// pieces). CL holds the cumulative path length.
const vec3 CA[9] = vec3[9](vec3(-1.08, -.98, .04), vec3(-1.1, .32, 0.), vec3(-.7, .72, .06), vec3(-.233, .496, .236), vec3(.233, .516, .243), vec3(.7, .78, .08), vec3(1.12, .4, 0.), vec3(1.08, -.72, .04), vec3(.42, -1.02, .16));
const vec3 CB[9] = vec3[9](vec3(-1.09, -.33, .02), vec3(-1.12, .78, .02), vec3(-.4665, .608, .148), vec3(0., .506, .2395), vec3(.4665, .648, .1615), vec3(1.18, .9, .05), vec3(1.1, -.16, .02), vec3(1.04, -1.2, .12), vec3(.08, -.86, .16));
const vec3 CC[9] = vec3[9](vec3(-1.1, .32, 0.), vec3(-.7, .72, .06), vec3(-.233, .496, .236), vec3(.233, .516, .243), vec3(.7, .78, .08), vec3(1.12, .4, 0.), vec3(1.08, -.72, .04), vec3(.42, -1.02, .16), vec3(.1, -1.36, .06));
const float CL[10] = float[10](0., 1.3, 1.99, 2.53, 3., 3.56, 4.29, 5.41, 6.29, 6.92);
float gBest, gT; int gI;
void cStraight(vec3 p, int i, vec3 a, vec3 c) {
  vec3 ca = c - a;
  float h = clamp(dot(p - a, ca) / dot(ca, ca), 0., 1.);
  float d = length(p - a - ca * h);
  if (d < gBest) { gBest = d; gI = i; gT = h; }
}
void cCurved(vec3 p, int i, vec3 a, vec3 b, vec3 c) {
  vec3 ca = c - a;
  float h = clamp(dot(p - a, ca) / dot(ca, ca), 0., 1.);
  // A Bezier lies within half its control point's offset from its chord.
  if (length(p - a - ca * h) - .5 * length(b - (a + c) * .5) < gBest) {
    vec2 q = sdBezier(p, a, b, c);
    if (q.x < gBest) { gBest = q.x; gI = i; gT = q.y; }
  }
}

vec2 colon(vec3 p, out float s, out float ang) {
  // Straight segments first (cheap, and they make the bound for the Beziers tight).
  gBest = 1e5; gT = 0.; gI = 0;
  cStraight(p, 0, CA[0], CC[0]);
  cStraight(p, 2, CA[2], CC[2]);
  cStraight(p, 3, CA[3], CC[3]);
  cStraight(p, 4, CA[4], CC[4]);
  cStraight(p, 6, CA[6], CC[6]);
  cCurved(p, 1, CA[1], CB[1], CC[1]);
  cCurved(p, 5, CA[5], CB[5], CC[5]);
  cCurved(p, 7, CA[7], CB[7], CC[7]);
  cCurved(p, 8, CA[8], CB[8], CC[8]);
  float best = gBest, bt = gT;
  int bi = gI;
  s = mix(CL[bi], CL[bi + 1], bt);
  ang = 0.;
  if (best < .42) {
    // Angle around the tube, for the three taeniae.
    vec3 A = CA[bi], B = CB[bi], C = CC[bi];
    vec3 T = normalize(mix(B - A, C - B, bt));
    vec3 v = p - bezier(A, B, C, bt);
    vec3 e1 = normalize(cross(T, vec3(0., 0., 1.))), e2 = cross(T, e1);
    ang = atan(dot(v, e2), dot(v, e1));
  }
  return vec2(best, float(bi));
}

/** Centre line of small-intestine row i at x (rows wiggle up/down and in depth, flat at the ends). */
vec3 rowLine(float i, float x) {
  float e = 1. - x * x / (W * W);
  return vec3(x, Y0 - i * H + .045 * sin(4.2 * x + i * 1.7) * e, .2 * sin(2.6 * x + i * 2.1) * e);
}

void seg(vec3 p, vec3 a, vec3 b, float s0, inout float best, inout float s, inout vec3 off, inout vec3 T) {
  vec3 ba = b - a; float L = length(ba);
  float h = clamp(dot(p - a, ba) / (L * L), 0., 1.);
  vec3 c = a + ba * h; float d = length(p - c);
  if (d < best) { best = d; off = p - c; s = s0 + h * L; T = ba / L; }
}
/**
 * Small intestine: distance to the centre line; out: path coordinate, the 3D offset from the centre line,
 * and the unit tangent in the direction of increasing path coordinate.
 */
float smallInt(vec3 p, out float s, out vec3 off, out vec3 T) {
  float best = 1e5; s = 0.; off = vec3(0.); T = vec3(1., 0., 0.);
  float rowLen = 2. * W, turnLen = PI * H * .5, per = rowLen + turnLen;
  float fi = clamp(floor((Y0 - p.y) / H + .5), 0., NR - 1.);
  float x = clamp(p.x, -W, W);
  float e = 1. - x * x / (W * W);
  for (int k = 0; k < 2; k++) {
    float i = clamp(fi + (k == 0 ? 0. : (Y0 - fi * H > p.y ? 1. : -1.)), 0., NR - 1.);
    vec3 c = rowLine(i, x);
    float d = length(p - c);
    if (d < best) { best = d; off = p - c; s = i; }
  }
  {
    float i = s, dir = mod(i, 2.) < .5 ? 1. : -1.;
    s = i * per + (dir > 0. ? x + W : W - x);
    T = normalize(vec3(1., .19 * cos(4.2 * x + i * 1.7) * e, .52 * cos(2.6 * x + i * 2.1) * e)) * dir;
  }
  // Turns: right-hand ones join rows (0,1) and (2,3), the left-hand one joins rows (1,2).
  float side = p.x > 0. ? 1. : -1.;
  float i0 = side > 0. ? (p.y > Y0 - 1.5 * H ? 0. : 2.) : 1.;
  vec3 q = p - vec3(side * W, Y0 - i0 * H - H * .5, 0.);
  if (q.x * side > 0.) {
    float th = atan(q.y, abs(q.x));
    vec3 c = vec3(side * W + side * cos(th) * H * .5, Y0 - i0 * H - H * .5 + sin(th) * H * .5, 0.);
    float d = length(p - c);
    if (d < best) { best = d; off = p - c; s = i0 * per + rowLen + (PI * .5 - th) * H * .5; T = vec3(side * sin(th), -cos(th), 0.); }
  }
  // The start, coming from behind the transverse colon, and the end (the ileum) entering the cecum.
  vec3 a = vec3(-.32, Y0 + .34, -.36), b = rowLine(0., -W);
  seg(p, a, b, -length(b - a), best, s, off, T);
  seg(p, rowLine(NR - 1., -W), vec3(-.86, -.86, .02), (NR - 1.) * per + rowLen, best, s, off, T);
  return best;
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., -.32, .05), vec3(1.5, 1.42, .62));
  if (bound > .3) return vec2(bound, 0.);

  // Large intestine: haustra between creases, flattened along three taeniae; a slow peristaltic wave.
  float cs, ang;
  vec2 ch = colon(p, cs, ang);
  float haus = sqrt(abs(sin(PI * cs / .21)));
  float band = max(max(cos(ang * 3. + PI * 1.5), 0.) - .82, 0.) * 5.5;
  float rc = (.215 + .04 * haus - .03 * band) * (1. + .8 * peri(cs * .5, .2, 2.4));
  rc *= 1. + .35 * smoothstep(.4, 0., cs);                  // the cecum is a wider pouch
  float col = (ch.x - rc) * .8;
  vec2 res = vec2(col, 20.);
  // Appendix: a thin worm hanging from the cecum.
  if (length(p - vec3(-.84, -1.24, .12)) < .5) {
    vec2 ap = sdBezier(p, vec3(-.98, -1.12, .06), vec3(-.88, -1.42, .12), vec3(-.66, -1.32, .2));
    res = U(res, vec2(smin(col, ap.x - .045 + .012 * ap.y, .06), 20.));
  }
  // Fatty tags hanging from one band.
  if (ch.x < .4 && cs < 5.9) {
    float fid = floor(cs / .42);
    float u = cs - (fid + .5) * .42;
    float tag = length(vec3(u, ch.x - rc - .025, (ang + .95) * .22)) - .034;
    if (hash11(fid * 3.7) > .35) res = U(res, vec2(tag * .8, 27.));
  }

  // Small intestine: pink glass tube coiled in rows, joined to the cecum by the last loop (the ileum).
  if (sdBox(p - vec3(-.05, -.25, -.05), vec3(.92, .72, .44)) > res.x) return res;
  float ss; vec3 off, T;
  float sd = smallInt(p, ss, off, T);
  float rs = R * (1. + peri(ss, .32, 1.55));
  float tube = (sd - rs) * .85;
  res = U(res, vec2(SHELL(tube), 81.));
  if (!gSkipShell) return res;

  // Inside: the far half of the lining (velvety, behind the microbes), and the microbes drifting along.
  if (sd - rs < res.x && sd < rs) {
    vec3 vd = normalize(p - uCamPos);
    float lin = max(max(sd - rs + .004, -(sd - rs + .04)), -dot(off, vd));
    res = U(res, vec2(lin * .85, 22.));
    // Microbes in cells along the path, at most one per cell and never reaching past its ends; the
    // nearer neighbouring cell is checked too, so no step can skip over a microbe.
    const float CELL = .11;
    float sp = ss - uTime * .06;
    float id0 = floor(sp / CELL);
    float u0 = sp - (id0 + .5) * CELL;
    vec3 e1 = normalize(cross(T, vec3(0., 0., 1.))), e2 = cross(T, e1);
    for (int k = 0; k < 2; k++) {
      float id = id0 + (k == 0 ? 0. : sign(u0));
      float u = sp - (id + .5) * CELL;
      float h1 = hash11(id * 13.7 + 1.3), h2 = hash11(id * 5.1 + 7.7), h3 = hash11(id * 9.3 + 2.1);
      if (h1 < .15) continue;
      float a = h2 * TAU + uTime * (.4 + h3 * .4);
      vec3 lp = off + T * u - (e1 * cos(a) + e2 * sin(a)) * rs * (.12 + .3 * h3);
      lp.xy *= rot(h1 * 6. + uTime * .3);
      lp.yz *= rot(h2 * 4.);
      float mic = h3 > .45 ? sdCapsule(lp, vec3(-.03, 0., 0.), vec3(.03, 0., 0.), .019)
                           : min(sdSphere(lp - vec3(.014, 0., 0.), .022), sdSphere(lp + vec3(.016, 0., 0.), h3 > .25 ? .022 : .0));
      res = U(res, vec2(mic, 23. + floor(h2 * 3.99)));
    }
  }
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 19.5 && m < 20.5) return .003 * noise3(p * 28.) + .0015 * noise3(p * 90.);
  if (m > 80.5 && m < 81.5) return .0012 * noise3(p * 60.);
  if (m > 21.5 && m < 22.5) return .006 * (1. - cellular(p * 55.));
  return 0.;
}`};export{e as scene};
