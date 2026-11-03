import"./chunk-KR4ZLU5I.js";var e={id:"N10",cam:[1.2,1.05,5.2],target:[.1,-.05,0],fov:3,floor:-1.5,ring:1.75,poster:1.15,glsl:`
const float T = 2.6, X0 = -1.75, X1 = 1.45, XS = .8;
float gC, gXP, gPI;

vec3 palette(int i) {
  if (i == 0) return vec3(.84, .15, .19);   // muscle fibre, dark (A) bands
  if (i == 1) return vec3(.97, .40, .42);   // light (I) bands
  if (i == 2) return vec3(.96, .52, .58);   // perimysium: the sheath around the bundle
  if (i == 3) return vec3(.58, .36, 1.);    // nuclei
  if (i == 4) return vec3(1., .78, .30);    // load pulse
  if (i == 5) return vec3(.78, .10, .16);   // cut fibre ends
  return vec3(.96, .20, .17);
}

/** Bundle radius at rest-frame position x: thin at X0, thick at X1. */
float bundleR(float x) { return .3 + .46 * smoothstep(X0, X1, x); }
/** Striation at x: dark A bands and light I bands; the I bands narrow as the fibres shorten. */
float band(float x, float ph) { return fract(x * 15. + ph) < .42 - .18 * gC ? 21. : 20.; }

/** Fibre j of a ring of n fibres (angle offset a0, at ring * rf0 from the axis); rf = fibre radius. */
vec2 ringFibre(vec3 r, float n, float a0, float ring, float rf0, float rf, float j) {
  float ang = a0 + j * TAU / n;
  vec2 c = r.yz - vec2(cos(ang), sin(ang)) * ring * rf0;
  float id = mod(j, n) + n;
  float h = hash11(id * 3.7 + 1.3);
  float xr = X1 - .05 + .15 * h, xl = X0 + .1 * hash11(id * 5.3 + .7);
  float side = length(c) - rf;
  float cap = max(xl - r.x, r.x - xr);
  return vec2(max(side, cap), cap > side ? 25. : band(r.x, h));
}

vec2 map(vec3 p) {
  vec3 q = p - vec3(.05, .05, 0.);
  q.xy *= rot(-.5);
  q.xz *= rot(-.24);
  float bound = sdCapsule(q, vec3(X0 - .15, 0., 0.), vec3(X1 + .5, 0., 0.), 1.);
  if (bound > .3) return vec2(bound, 0.);
  float ph = fract(uTime / T);
  gC = smoothstep(.12, .5, ph) * (1. - smoothstep(.58, .98, ph));
  gXP = mix(X0 - .05, X1 + .05, smoothstep(.0, .7, ph));
  gPI = smoothstep(0., .08, ph) * (1. - smoothstep(.6, .7, ph));

  // Contraction: the bundle shortens and bulges. Work in its rest frame r; k keeps distances conservative.
  float sx = 1. + .14 * gC, sr = 1. + .1 * gC;
  vec3 r = vec3(q.x * sx, q.yz / sr);
  float k = 1. / sx;
  float R = bundleR(r.x);
  float rf0 = R / 4.9;
  float dx = (r.x - gXP) / .3;
  float rf = rf0 * (1. + .08 * gPI * exp(-dx * dx));
  float rr = length(r.yz);

  // Envelope of the fibres and myofibrils: the detail below is only needed close to it.
  float env = max(rr - R - .02, max(X0 - .05 - r.x, r.x - X1 - .55));
  vec2 res = vec2(env * k, 20.);
  if (env < .06) {
    float a = atan(r.z, r.y);
    // Nineteen fibres: one in the centre, rings of 6 and 12. Near the staggered ends each ring also checks
    // the neighbouring sector.
    bool ends = r.x > X1 - .12 || r.x < X0 + .14;
    float o = floor((a - PI / 12.) / (TAU / 12.) + .5);
    vec2 f = ringFibre(r, 12., PI / 12., 3.9, rf0, rf, o);
    if (ends) f = U(f, ringFibre(r, 12., PI / 12., 3.9, rf0, rf, o + (a - PI / 12. > o * TAU / 12. ? 1. : -1.)));
    // The inner fibres lie within 3.1 rf0 of the axis: skip them when they cannot be nearer.
    if (rr - 3.1 * rf0 < f.x) {
      float cs = max(X0 - .02 - r.x, r.x - (X1 + .17));
      float side = rr - rf;
      f = U(f, vec2(max(side, cs), cs > side ? 25. : band(r.x, .3)));
      float j = floor(a / (TAU / 6.) + .5);
      f = U(f, ringFibre(r, 6., 0., 2.03, rf0, rf, j));
      if (ends) f = U(f, ringFibre(r, 6., 0., 2.03, rf0, rf, j + (a > j * TAU / 6. ? 1. : -1.)));
    }
    res = vec2(f.x * k, f.y);

    // Nuclei: flattened, just under the surface of the outer fibres.
    if (rr > 2.85 * rf0) {
      float ang = PI / 12. + o * TAU / 12.;
      float id = mod(o, 12.);
      float cell = floor(r.x / .36 + id * .37);
      float xm = (cell + .5 - id * .37) * .36;
      float na = ang + (hash11(cell * 7.1 + id * 13.3) - .5) * 2.;
      vec2 nd = vec2(cos(na), sin(na));
      vec2 c = r.yz - vec2(cos(ang), sin(ang)) * 3.9 * rf0 - nd * rf * .9;
      vec3 e = vec3(r.x - xm, dot(c, nd), dot(c, vec2(-nd.y, nd.x)));
      float nuc = sdEllipsoid(e, vec3(.075, .022, .038));
      if (xm > X0 + .15 && xm < X1 - .12) res = U(res, vec2(nuc * k, 23.));
    }

    // Myofibrils fanning out of the central fibre at the thick end, striated in register with it.
    if (r.x > X1 && rr < .45) {
      float x0 = X1 + .15;
      float t = clamp(r.x - x0, 0., .4);
      float ma = a + .3;
      float mi = floor(ma / (TAU / 6.) + .5);
      float mm = ma - mi * TAU / 6.;
      vec2 ml = vec2(rr * cos(mm) - rf0 * .56 - t * .5, rr * sin(mm));
      float mr = rf0 * .24;
      float myo = max(length(ml) - mr, max(x0 - .05 - r.x, r.x - (x0 + .2 + .1 * hash11(mod(mi, 6.) * 2.3 + 4.))));
      myo = min(myo, max(rr - mr, max(x0 - .05 - r.x, r.x - (x0 + .34))));
      res = U(res, vec2(myo * k * .88, band(r.x, .3)));
    }
  }

  // The sheath, cut open at the thin end and peeled back from the thick end to show the fibres.
  float sh = max(abs(rr - R - .05) - .008, abs(r.x - (X0 + XS) * .5) - (XS - X0) * .5 + .04);
  res = U(res, vec2(SHELL(sh * k), 42.));

  // The load pulse: a ring of light that runs from the thin end to the thick end.
  float pr = sdTorus(vec3(r.y, r.x - gXP, r.z), vec2(bundleR(gXP) + .1, .024 * gPI + .001));
  if (gPI > .01) res = U(res, vec2(pr * k, 64.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 41.5 && m < 42.5) {
    vec3 q = p - vec3(.05, .05, 0.); q.xy *= rot(-.5); q.xz *= rot(-.24);
    return .0012 * sin(atan(q.z, q.y) * 30. + q.x * 9. + 3. * noise3(q * 4.));
  }
  if (m > 19.5 && m < 21.5) {
    vec3 q = p - vec3(.05, .05, 0.); q.xy *= rot(-.5); q.xz *= rot(-.24);
    return .0018 * noise3(vec3(q.x * 3., q.yz * 75.));
  }
  if (m > 24.5 && m < 25.5) return .0009 * smoothstep(.2, .5, cellular(p * 38.));
  return 0.;
}`};export{e as scene};
