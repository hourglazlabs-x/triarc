import"./chunk-KR4ZLU5I.js";var e={id:"N22",cam:[.4,.95,5.5],target:[.05,-.02,0],fov:2.4,floor:-1.6,ring:1.8,poster:1.15,glsl:`
const float T = 2.4;
const vec3 SOMA = vec3(-1.45, .35, 0.), HILL = vec3(-1.12, .27, 0.), TERM = vec3(1.55, -.3, 0.);
float gPh;

vec3 palette(int i) {
  if (i == 0) return vec3(1., .74, .28);    // neuron membrane, dendrites
  if (i == 1) return vec3(.62, .38, 1.);    // nucleus
  if (i == 2) return vec3(.97, .95, .90);   // myelin
  if (i == 3) return vec3(.86, .62, 1.);    // Schwann cell nuclei
  if (i == 4) return vec3(1., .36, .70);    // synaptic terminals
  if (i == 5) return vec3(.55, .95, 1.);    // impulse
  return vec3(.40, .20, .80);               // nucleolus
}

/** Pulses running inward along a dendrite branch from its tip (s = 0 at the soma). */
float spark(float s, float seed) { return wave(s, -uTime, .9, 1.9 + seed, .07); }

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., .1, 0.), vec3(2.5, 1.5, 1.1));
  if (bound > .3) return vec2(bound, 0.);
  gPh = fract(uTime / T);

  // Cell body: a translucent membrane over the nucleus.
  vec3 sq = p - SOMA;
  float soma = sdSphere(sq, .31) + .018 * sin(sq.x * 18.) * sin(sq.y * 15.) * sin(sq.z * 17.);
  soma = smin(soma, sdRoundCone(p, SOMA, HILL, .2, .06), .1);
  vec2 res = vec2(SHELL(soma), 40.);
  if (gSkipShell && soma < res.x + .1) {
    res = U(res, vec2(sdSphere(sq - vec3(.03, .03, .04), .14), 21.));
    res = U(res, vec2(sdSphere(sq - vec3(.07, .07, .1), .05), 26.));
  }

  // Dendrites: three levels of branches; sparks of input travel toward the cell body.
  float den = 1e5, sp = 0.;
  if (length(sq) < 1.45) {
    for (int i = 0; i < 6; i++) {
      float a = float(i) * 1.047 + .5;
      vec3 d1 = vec3(cos(a) * .72, sin(a) * .72 + .08, sin(a * 2.) * .32);
      vec3 d2 = d1 + vec3(cos(a + .55), sin(a + .55), .25) * .36;
      vec3 d3 = d1 + vec3(cos(a - .6), sin(a - .6), -.22) * .32;
      vec3 d4 = d2 + vec3(cos(a + .1), sin(a + .1), -.3) * .22;
      float e1 = sdRoundCone(sq, vec3(0.), d1, .085, .032);
      float e2 = sdRoundCone(sq, d1, d2, .03, .014);
      float e3 = sdRoundCone(sq, d1, d3, .028, .012);
      float e4 = sdRoundCone(sq, d2, d4, .014, .008);
      float e = min(min(e1, e2), min(e3, e4));
      if (e < den) {
        den = e;
        // Arc length from the soma along the branch the point is on, for the spark position.
        float s = e1 <= min(min(e2, e3), e4) ? dot(sq, normalize(d1)) : length(d1) + length(sq - d1);
        sp = spark(s, float(i) * .37);
      }
    }
    res = U(res, vec2(den - .006 * sp, sp > .5 ? 65. : 20.));
  }

  // Axon: the impulse starts at the hillock at phase 0 and crosses the axon by phase .55.
  vec3 dir = normalize(TERM - HILL);
  float L = length(TERM - HILL);
  vec3 a = p - HILL;
  float t = dot(a, dir);
  float rad = length(a - dir * clamp(t, 0., L));
  float front = gPh / .55 * L;
  // Saltatory conduction: the signal is at the gap (node) it has reached most recently.
  float seg = mod(t - .15, .42) - .21;
  float nodeIdx = floor((t - .15) / .42 + .5);
  float atNode = exp(-pow((nodeIdx * .42 + .15 - front) / .16, 2.));
  float core = max(rad - .045, max(-t, t - L));
  res = U(res, vec2(core - .012 * atNode, (atNode > .4 && abs(seg) > .16) || (t < .2 && gPh < .06) ? 65. : 20.));
  // A ring of light flashes at the node the impulse has reached.
  vec3 rq = a - dir * (nodeIdx * .42 + .15);
  vec3 rl = vec3(dot(rq, dir), 0., 0.); rl.y = length(rq - dir * rl.x);
  float flash = length(vec2(rl.x, rl.y - .17 - .05 * atNode)) - .012;
  if (atNode > .25 && t > .1 && t < L) res = U(res, vec2(flash, 65.));
  float myelin = max(max(abs(seg) - .17, rad - .115), max(.2 - t, t - (L - .2)));
  myelin = smax(myelin, -(rad - .05), .02);
  res = U(res, vec2(myelin, 22.));
  // Schwann cell nuclei: a bump on each sheath.
  vec3 nq = a - dir * (floor((t - .36) / .42 + .5) * .42 + .36);
  res = U(res, vec2(max(sdEllipsoid(nq - vec3(0., .1, .02), vec3(.07, .035, .05)), max(.2 - t, t - (L - .2))), 23.));

  // Terminals: branches ending in boutons that flash as the impulse arrives and release vesicles.
  float arrive = exp(-pow((gPh - .58) / .05, 2.));
  float rel = clamp((gPh - .58) / .3, 0., 1.);
  float term = 1e5, bout = 1e5, ves = 1e5;
  if (length(p - TERM) < 1.2) {
    for (int i = 0; i < 5; i++) {
      float b = -1.1 + float(i) * .55;
      vec3 e = TERM + vec3(cos(b), sin(b), sin(b * 2.3) * .55) * .5;
      vec3 m = TERM + (e - TERM) * .5 + vec3(0., .06, .04) * sin(float(i) * 2.);
      term = min(term, min(sdRoundCone(p, TERM, m, .035, .024), sdRoundCone(p, m, e, .024, .02)));
      bout = min(bout, sdSphere(p - e, .075 + .02 * arrive));
      vec3 outward = normalize(e - TERM);
      for (int k = 0; k < 3; k++) {
        float fk = float(k);
        vec3 c = e + outward * (.08 + rel * (.18 + .07 * fk)) + vec3(sin(fk * 2.1 + float(i)), cos(fk * 1.7 + float(i)), sin(fk * 3.1)) * .05 * rel;
        ves = min(ves, sdSphere(p - c, .022 * (1. - rel * .6)));
      }
    }
    res = U(res, vec2(term, 20.));
    res = U(res, vec2(bout, arrive > .3 ? 64. : 24.));
    if (rel > 0. && rel < 1.) res = U(res, vec2(ves, 65.));
  }
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 19.5 && m < 20.5) return .0025 * noise3(p * 70.);
  if (m > 21.5 && m < 22.5) return .0015 * sin(atan(p.y + .3 * p.x, p.z) * 40.);
  if (m > 39.5 && m < 40.5) return .003 * noise3(p * 35.);
  return 0.;
}`};export{e as scene};
