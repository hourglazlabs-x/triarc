import"./chunk-KR4ZLU5I.js";var e={id:"N24",cam:[.5,.8,4.55],target:[0,.12,0],fov:2.4,floor:-1.55,ring:1.75,poster:1.6,glsl:`
const float XL = 2.05, K = 2.25, OMEGA = 1.25, BAL = 7.;
const vec3 CORE = vec3(0., .12, 0.);
float gTilt, gAmp;

vec3 palette(int i) {
  if (i == 0) return vec3(.50, .40, 1.);    // ribbon one (violet)
  if (i == 1) return vec3(.26, .78, .95);   // ribbon two (cyan)
  if (i == 2) return vec3(.80, .74, 1.);    // core (pale violet glass)
  if (i == 3) return vec3(.58, .48, 1.);    // ribbon one, glowing edge
  if (i == 4) return vec3(.36, .88, 1.);    // ribbon two, glowing edge
  if (i == 5) return vec3(.95, .52, .02);   // gold particles
  if (i == 6) return vec3(.95, .18, .48);   // pink particles
  return vec3(1., .74, .40);                // core light (warm, steady)
}

/**
 * Ribbon s (+1 or -1) around the x axis: its centre line winds on an ellipse (tall .8, shallow .24) that
 * opens to a circle around the core; the band lies across the winding, so it turns as it goes.
 * Returns (distance, edge closeness 0..1).
 */
vec2 ribbon(vec3 q, float s) {
  float x = clamp(q.x, -XL, XL);
  float env = 1. - x * x / (XL * XL);
  float tap = env * (2. - env);   // tapers to the tips with a finite slope
  float open = exp(-x * x * 1.6);
  float amp = (1.06 + .15 * s * gAmp) * tap;
  float ay = mix(amp, .6, open), az = mix(.26 * tap, .6, open);
  float th = K * x - OMEGA * uTime + (s > 0. ? 0. : PI);
  vec2 c = vec2(ay * sin(th), az * cos(th));
  vec2 dc = vec2(ay * K * cos(th), -az * K * sin(th));   // slope of the centre line along x
  vec2 n = normalize(vec2(c.x / (ay * ay + 1e-3), c.y / (az * az + 1e-3)) + 1e-4);
  vec2 t = vec2(-n.y, n.x);
  vec2 d = q.yz - c;
  float w = .13 * tap + .006, h = .016;
  vec2 b = abs(vec2(dot(d, t), dot(d, n))) - vec2(w, h);
  float dist = length(max(b, 0.)) + min(max(b.x, b.y), 0.);
  dist = max(dist, abs(q.x) - XL);
  // The centre line's slope and the band's turning both steepen the field along x.
  return vec2(dist / sqrt(1. + dot(dc, dc) + w * w * K * K * 4.), abs(dot(d, t)) / w);
}

vec2 map(vec3 p) {
  float bound = sdBox(p - CORE, vec3(2.2, 1.36, .9));
  if (bound > .3) return vec2(bound, 0.);
  float ph = TAU * uTime / BAL;
  gTilt = .07 * sin(ph);
  gAmp = sin(ph);
  vec3 q = p - CORE;
  q.xy *= rot(gTilt);

  // The steady core: pale glass around a warm light.
  vec2 res = vec2(SHELL(length(q) - .34), 42.);
  res = U(res, vec2(length(q) - .15, 67.));

  // Two ribbons in opposite phase; their edges glow.
  vec2 r1 = ribbon(q, 1.), r2 = ribbon(q, -1.);
  res = U(res, vec2(r1.x * .8, r1.y > .72 ? 63. : 20.));
  res = U(res, vec2(r2.x * .8, r2.y > .72 ? 64. : 21.));

  // Particles drifting along between the ribbons (one per cell along x; the nearer neighbour is checked).
  const float CELL = .34;
  float xx = q.x + uTime * .16;
  float id0 = floor(xx / CELL);
  float u0 = xx - (id0 + .5) * CELL;
  for (int k = 0; k < 2; k++) {
    float id = id0 + (k == 0 ? 0. : sign(u0));
    float u = xx - (id + .5) * CELL;
    float cx = q.x - u;   // cell centre in q.x
    float h1 = hash11(id * 3.17 + 1.1), h2 = hash11(id * 7.31 + 2.3);
    float env = 1. - cx * cx / (XL * XL);
    if (env < .08) continue;
    vec3 c = vec3((h1 - .5) * .14, .66 * sin(uTime * (.5 + .3 * h1) + h2 * TAU) * env, .3 * cos(uTime * .6 + h1 * TAU) * env);
    float rr = max(length(c.yz), 1e-3);
    c.yz *= max(rr, .46 * exp(-cx * cx * 3.)) / rr;   // keep clear of the core
    float d = length(vec3(u, q.y, q.z) - c) - (.036 + .022 * h2) * smoothstep(.08, .3, env);
    res = U(res, vec2(d, h2 > .5 ? 65. : 66.));
  }
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 19.5 && m < 21.5) return .0012 * sin(p.x * 160.);
  return 0.;
}`};export{e as scene};
