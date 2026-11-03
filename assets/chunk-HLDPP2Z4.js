import"./chunk-KR4ZLU5I.js";var i=Math.PI*2/6,o=(e,n)=>{let t=Math.sin(e*12.9898+n*78.233)*43758.5453;return t-Math.floor(t)-.5},s=[],r=(e,n,t,c,d)=>{let a=t+o(n+e*6,1)*.5,l=c*(1+o(n+e*6,2)*.24),f=d+o(n+e*6,3)*.3;s.push(`vec3(${(Math.cos(a)*l).toFixed(3)}, ${f.toFixed(3)}, ${(Math.sin(a)*l).toFixed(3)})`)};for(let e=0;e<6;e++)r(0,e,e*i,.92,.84);for(let e=0;e<6;e++)r(1,e,e*i+i/2,1.3,.16);for(let e=0;e<6;e++)r(2,e,e*i,.92,-.5);s.push("vec3(.08, 1.36, -.05)","vec3(-.06, -.98, .06)");var h={id:"N23",cam:[.9,1.15,5],target:[0,.18,0],fov:2.4,floor:-1.55,ring:1.7,poster:2.8,glsl:`
const vec3 NODE[20] = vec3[20](${s.join(", ")});
const float SEC = TAU / 6., SWEEP = 9.5;   // 18 nodes light in turn: one every .53 s
const vec3 CORE = vec3(0., .18, 0.);

vec3 palette(int i) {
  if (i == 0) return vec3(.20, .13, .56);   // links (faint violet light)
  if (i == 1) return vec3(.62, .52, 1.);    // core (violet glass)
  if (i == 2) return vec3(.26, .13, .80);   // resting nodes (violet glow)
  if (i == 3) return vec3(.22, .86, 1.);    // signals (cyan glow)
  if (i == 4) return vec3(.92, .84, 1.);    // integrating core (white-violet glow)
  return vec3(.16, .80, 1.);                // lit nodes (cyan)
}

/**
 * Activation order: a snake through the rings, sector by sector (upper, outer, lower in even sectors and
 * the reverse in odd ones). Phase of node n in the cycle: 0 when it lights; it then sends a signal on to the
 * next node, which lights 1/18 of a cycle later.
 */
float seqOf(int n) {
  int k = n % 6, j = n / 6;
  return float(k * 3 + (k % 2 == 0 ? j : 2 - j));
}
float phaseOf(int n) { return fract(uTime / SWEEP - seqOf(n) / 18.); }

float gBest, gI;   // winning link distance and its signal intensity
/** A link a\u2192b of radius r carrying a signal at position u (0..1; outside that range, none). */
void link(vec3 q, vec3 a, vec3 b, float u, float r) {
  vec3 ba = b - a; float L2 = dot(ba, ba);
  float h = clamp(dot(q - a, ba) / L2, 0., 1.);
  float d = length(q - a - ba * h) - r;
  if (d < gBest + .03) {
    float x2 = (h - u) * (h - u) * L2 * 178.;   // (distance from the signal / .075)^2
    float I = x2 < 1. ? (1. - x2) * (1. - x2) : 0.;
    d -= .024 * I;
    if (d < gBest) { gBest = d; gI = I; }
  }
}

vec2 map(vec3 p) {
  float bound = sdSphere(p - CORE, 1.72);
  if (bound > .3) return vec2(bound, 0.);
  float br = 1. + .035 * sin(TAU * uTime / 5.);
  vec3 q = (p - CORE) / br + CORE;

  // Core: violet glass around a glowing centre.
  vec2 res = vec2(SHELL(sdSphere(p - CORE, .34)), 41.);
  res = U(res, vec2(sdSphere(p - CORE, .14 + .012 * sin(TAU * uTime / 2.5)), 64.));

  // The network, in the sector q lies in and its nearer neighbour (six sectors around the vertical axis).
  float ang = atan(q.z, q.x) / SEC;
  float k0 = floor(ang + .5);
  float side = ang - k0 > 0. ? 1. : -1.;
  gBest = 1e5; gI = 0.;
  float node = 1e5, nsp = .5;
  for (int s = 0; s < 2; s++) {
    int k = int(mod(k0 + (s == 0 ? 0. : side), 6.));
    int kn = (k + 1) % 6;
    vec3 A = NODE[k], B = NODE[6 + k], C = NODE[12 + k];
    float pA = phaseOf(k), pB = phaseOf(6 + k), pC = phaseOf(12 + k);
    float ring = fract(uTime / 3.2 + float(k) * .37);
    // The chain of activation: A\u2192B\u2192C\u2192next C in even sectors, C\u2192B\u2192A\u2192next A in odd ones; the ring links
    // that are not part of it carry slower packets.
    bool even = k % 2 == 0;
    link(q, even ? A : B, even ? B : A, (even ? pA : pB) * 18., .01);
    link(q, even ? B : C, even ? C : B, (even ? pB : pC) * 18., .01);
    link(q, C, NODE[12 + kn], even ? pC * 18. : ring, .011);
    link(q, A, NODE[kn], even ? ring : pA * 18., .011);
    link(q, NODE[18], A, fract(uTime / 3.6 + float(k) * .53), .009);   // poles
    link(q, NODE[19], C, fract(uTime / 3.6 + float(k) * .29), .009);
    // Spokes carry each node's signal into the core as it lights.
    link(q, A, CORE, pA * 7., .01);
    link(q, C, CORE, pC * 7., .01);
    // Nodes swell as they light; the swell is at most .03, so the nearest centre decides.
    float dA = length(q - A) - .07, dB = length(q - B) - .082, dC = length(q - C) - .07;
    if (dA < node) { node = dA; nsp = pA; }
    if (dB < node) { node = dB; nsp = pB; }
    if (dC < node) { node = dC; nsp = pC; }
  }
  float lit = min(nsp, 1. - nsp) * (nsp < .5 ? 22. : 50.);
  lit = lit < 1. ? (1. - lit * lit) * (1. - lit * lit) : 0.;
  node -= .03 * lit;
  node = min(node, min(length(q - NODE[18]), length(q - NODE[19])) - .08);
  res = U(res, vec2(gBest * br, gI > .3 ? 63. : 60.));
  res = U(res, vec2(node * br, lit > .3 ? 65. : 62.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 40.5 && m < 41.5) return .004 * cellular((p - CORE) * 14.);
  return 0.;
}`};export{h as scene};
