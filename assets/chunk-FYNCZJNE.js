import"./chunk-KR4ZLU5I.js";var e={id:"N33",cam:[.85,1.25,5.3],target:[0,.22,0],fov:2.45,floor:-1.55,ring:1.6,poster:2,glsl:`
const vec3 CEN = vec3(0., .25, 0.);
const float PER = 10.;

vec3 palette(int i) {
  if (i == 0) return vec3(.34, .25, .62);   // glass sphere
  if (i == 1) return vec3(.40, .27, .86);   // lattice
  if (i == 2) return vec3(.88, .46, .86);   // lattice, adapting
  if (i == 3) return vec3(1., .70, .26);    // lattice, adapted
  return vec3(1., .70, .25);                // load point
}

/** Position of the load point at time t: a tilted orbit inside the sphere. */
vec3 loadAt(float t) {
  float a = t * TAU / PER;
  vec3 o = vec3(cos(a), .35 * sin(a * 2.), sin(a)) * .86;
  o.xy *= rot(.45);
  return o;
}
float gyroid(vec3 p) { return dot(sin(p), cos(p.zxy)); }

vec2 map(vec3 p) {
  vec3 q = p - CEN;
  float bound = sdSphere(q, 1.32);
  if (bound > .3) return vec2(bound, 0.);
  vec2 res = vec2(SHELL(bound), 80.);
  float t = uTime;
  if (!gSkipShell) return res;
  vec3 L = loadAt(t);

  // How strongly the load has acted here: now, and fading along the path it has just taken.
  float infl = 0.;
  for (int i = 0; i < 4; i++) {
    vec3 d = q - loadAt(t - float(i) * .55);
    infl = max(infl, (1. - float(i) * .2) * exp(-dot(d, d) / .17));
  }
  // Coarse network everywhere, thickening under load; a fine network filling in near the load.
  // Both thin out toward the glass, so no strut is cut off flat at the edge.
  float edge = smoothstep(.95, 1.18, length(q)) * .7;
  float c1 = mix(1.28, .72, infl) + edge, c2 = mix(1.75, 1.02, infl) + edge;
  float g1 = (c1 - gyroid(q * 7.2)) / (7.2 * 1.9);
  float g2 = (c2 - gyroid(q * 14.4 + 1.3)) / (14.4 * 1.9);
  float lat = max(max(min(g1, g2), sdSphere(q, 1.2)), .19 - length(q - L));
  res = U(res, vec2(lat, infl > .58 ? 23. : infl > .3 ? 22. : 21.));
  // The load point.
  res = U(res, vec2(sdSphere(q - L, .1), 64.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 20.5 && m < 23.5) return .0015 * noise3(p * 50.);
  return 0.;
}`};export{e as scene};
