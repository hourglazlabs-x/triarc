import"./chunk-KR4ZLU5I.js";var e={id:"N31",cam:[.5,.95,6.2],target:[0,.15,0],fov:2.45,floor:-1.85,ring:1.7,poster:2,glsl:`
vec3 palette(int i) {
  if (i == 0) return vec3(.62, .58, 1.);    // chromatid, light bands
  if (i == 1) return vec3(.27, .19, .72);   // chromatid, dark bands
  if (i == 2) return vec3(.84, .76, 1.);    // centromere
  if (i == 3) return vec3(1., .58, .10);    // telomeres, ring markers
  if (i == 4) return vec3(.80, .80, .97);   // rings
  return vec3(.55, .95, 1.);                // time marks
}

/** One chromatid arm from the centromere c to its end e, pinched at the centromere and rounded at the
 *  end. Returns (distance, distance along the arm from the centromere). */
vec2 arm(vec3 p, vec3 c, vec3 e) {
  vec3 pa = p - c, ba = e - c;
  float L = length(ba);
  float h = clamp(dot(pa, ba) / (L * L), 0., 1.);
  float r = mix(.095, .19, smoothstep(0., .22, h)) - .015 * smoothstep(.75, 1., h);
  return vec2((length(pa - ba * h) - r) * .92, h * L);
}
/** Light or dark band at distance s along an arm; the two sister chromatids share each pattern. */
float band(float s, float seed) { return hash11(floor(s / .072) * 7.31 + seed) > .5 ? 21. : 20.; }
/** Clock ring of radius R in the frame f (ring in its xz plane), turned by spin: the ring, n marks
 *  (every third one larger) and a gold marker at angle mk. Returns (distance, material). */
vec2 dial(vec3 f, float R, float n, float spin, float mk) {
  vec2 res = vec2(sdTorus(f, vec2(R, .011)), 24.);
  vec3 g = f; g.xz *= rot(spin);
  float a = atan(g.z, g.x), s = TAU / n;
  float id = floor(a / s + .5);
  float aa = a - id * s;
  vec3 l = vec3(cos(aa), 0., sin(aa)) * length(g.xz) + vec3(0., g.y, 0.);
  bool major = mod(id, 3.) < .5;
  float tick = sdBox(l - vec3(R, 0., 0.), major ? vec3(.06, .016, .016) : vec3(.035, .01, .01));
  res = U(res, vec2(tick, 65.));
  vec3 m = f; m.xz *= rot(mk);
  res = U(res, vec2(sdSphere(m - vec3(R, 0., 0.), .045), 63.));
  return res;
}

vec2 map(vec3 p) {
  vec3 q = p - vec3(0., .15, 0.);
  float bound = sdSphere(q, 2.05);
  if (bound > .3) return vec2(bound, 0.);
  float t = uTime;

  // Two clock rings around the chromosome, turning at different rates.
  vec3 f1 = q; f1.yz *= rot(1.2); f1.xy *= rot(.28);
  vec3 f2 = q; f2.yz *= rot(1.42); f2.xy *= rot(-.42);
  vec2 res = dial(f1, 1.48, 12., t * .11, -t * .55);
  res = U(res, dial(f2, 1.72, 24., -t * .07, t * .4 + 2.));

  // Chromosome, turning slowly back and forth.
  vec3 c = q; c.xz *= rot(.55 * sin(t * TAU / 14.));
  if (sdCapsule(c, vec3(0., -1.35, 0.), vec3(0., 1.25, 0.), .85) > res.x) return res;
  vec3 cL = vec3(-.1, .08, 0.), cR = vec3(.1, .08, 0.);
  vec3 e0 = vec3(-.5, 1.07, .24), e1 = vec3(.5, 1.07, -.24), e2 = vec3(-.6, -1.24, -.24), e3 = vec3(.6, -1.24, .24);
  vec2 a0 = arm(c, cL, e0), a1 = arm(c, cR, e1), a2 = arm(c, cL, e2), a3 = arm(c, cR, e3);
  vec2 up = a0.x < a1.x ? a0 : a1, dn = a2.x < a3.x ? a2 : a3;
  float chrom = smin(min(a0.x, a1.x), min(a2.x, a3.x), .05);
  vec2 w = up.x < dn.x ? up : dn;
  float L = up.x < dn.x ? length(e0 - cL) : length(e2 - cL);
  float mt = w.y < .14 ? 22. : band(w.y, up.x < dn.x ? 3.1 : 8.7);
  if (w.y > L - .12) mt = 20.;
  res = U(res, vec2(chrom, mt));

  // Telomeres: glowing caps over the four arm ends, pulsing softly one after another.
  float tel = 1e5;
  for (int i = 0; i < 4; i++) {
    vec3 e = i == 0 ? e0 : i == 1 ? e1 : i == 2 ? e2 : e3;
    vec3 d = normalize(e - (i < 2 ? (i == 0 ? cL : cR) : (i == 2 ? cL : cR)));
    float pulse = .5 + .5 * sin(t * TAU / 3.2 - float(i) * 1.57);
    float cap = max(sdSphere(c - e, .19 + .018 * pulse), -(dot(c - e, d) + .0));
    tel = min(tel, cap);
  }
  res = U(res, vec2(tel, 63.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  // Coiled chromatin on the chromatids.
  if (m > 19.5 && m < 22.5) return .0025 * sin(p.y * 70. + 6. * noise3(p * 9.)) + .0015 * noise3(p * 45.);
  return 0.;
}`};export{e as scene};
