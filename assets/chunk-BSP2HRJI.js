import"./chunk-KR4ZLU5I.js";var e={id:"N18",cam:[.5,1.3,6],target:[.05,-.12,0],fov:3.4,floor:-1.55,ring:1.75,poster:1,glsl:`
const vec3 HL = vec3(.02, -.3, .02);                       // hilum (porta hepatis)
const vec3 JN = vec3(-.02, -.56, .1), GN = vec3(-.18, -.38, .26), GF = vec3(-.34, -.68, .46);  // duct junction, gallbladder neck, fundus
float gT;

vec3 palette(int i) {
  if (i == 0) return vec3(.74, .24, .16);   // liver (glass)
  if (i == 1) return vec3(.56, .32, .92);   // portal vein
  if (i == 2) return vec3(.96, .20, .17);   // hepatic artery
  if (i == 3) return vec3(.30, .80, .34);   // bile ducts, gallbladder
  if (i == 4) return vec3(0., .44, 1.);     // hepatic veins, inferior vena cava
  if (i == 5) return vec3(.48, .24, .86);   // portal blood (glowing)
  if (i == 6) return vec3(.90, .20, .14);   // arterial blood (glowing)
  if (i == 7) return vec3(.30, .85, .28);   // bile droplets (glowing)
  return vec3(.16, .40, .95);               // venous blood (glowing)
}

float liver(vec3 p) {
  float d = sdEllipsoid(p - vec3(-.52, .08, 0.), vec3(1.0, .8, .76));
  d = smin(d, sdRoundCone(p, vec3(-.3, .12, 0.), vec3(1.42, .3, .06), .6, .1), .42);
  d = smax(d, -(p.y + .42 - .13 * p.x), .22);                                    // visceral (under) surface
  d = smax(d, -sdCapsule(p, vec3(.18, .85, .45), vec3(.12, .25, .75), .07), .06);  // notch between the lobes
  return smax(d, -sdSphere(p - vec3(-.3, -.62, .44), .2), .1);                     // bed of the gallbladder
}

/** Rotates unit vector d about unit axis k (perpendicular to d) by angle a. */
vec3 turn(vec3 d, vec3 k, float a) { return d * cos(a) + cross(k, d) * sin(a); }

/**
 * Portal triad subtree from a along d: the portal vein, with the artery and the bile duct alongside, over
 * four generations; the point follows only the child on its side. Returns (portal, artery, bile) distances
 * and the arc length from the hilum along the portal vein.
 */
vec4 triad(vec3 q, vec3 a, vec3 d, float L, float r, float s0) {
  float pv = 1e5, ha = 1e5, bd = 1e5, sp = 0., s = s0;
  for (int g = 0; g < 4; g++) {
    vec3 b = a + d * L;
    vec3 k = normalize(cross(d, g % 2 == 0 ? vec3(0., 0., 1.) : vec3(.3, 1., .2)));
    vec3 ba = b - a; float h = clamp(dot(q - a, ba) / (L * L), 0., 1.);
    float dv = length(q - a - ba * h) - mix(r, r * .8, h);
    if (dv < pv) { pv = dv; sp = s + h * L; }
    ha = min(ha, sdCapsule(q, a + k * r * 1.45, b + k * r * 1.25, r * .42));
    bd = min(bd, sdCapsule(q, a - k * r * 1.45, b - k * r * 1.25, r * .4));
    float sg = dot(q - b, cross(k, d)) > 0. ? 1. : -1.;
    d = turn(d, k, sg * (g == 0 ? .7 : .6));
    a = b; s += L; L *= .74; r *= .74;
  }
  return vec4(pv * .9, ha, bd, sp);
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(.1, -.15, 0.), vec3(1.65, 1.1, .95));
  if (bound > .3) return vec2(bound, 0.);
  gT = uTime;
  vec2 res = vec2(SHELL(liver(p)), 40.);

  // Outside the liver: the gallbladder and its cystic duct, the hepatic and common bile ducts, the portal
  // vein and hepatic artery entering the hilum, and the inferior vena cava behind.
  float gb = sdRoundCone(p, GF, GN, .17, .075);
  float duct = min(sdCapsule(p, GN, JN, .03), sdCapsule(p, HL, JN, .035));
  duct = min(duct, sdCapsule(p, JN, vec3(.02, -1.0, .06), .04));
  // Bile droplets: down the hepatic duct, then up the cystic duct into the gallbladder.
  float u = fract(gT * .5);
  vec3 dp = u < .4 ? mix(HL, JN, u / .4) : mix(JN, GN, (u - .4) / .6);
  float drop = length(p - dp) - .045;
  vec3 dp2 = fract(gT * .5 + .5) < .4 ? mix(HL, JN, fract(gT * .5 + .5) / .4) : mix(JN, GN, (fract(gT * .5 + .5) - .4) / .6);
  drop = min(drop, length(p - dp2) - .045);
  res = U(res, vec2(min(gb, duct), 23.));
  res = U(res, vec2(drop, 67.));
  vec3 pva = vec3(.16, -1.02, -.06), haa = vec3(-.2, -1.0, .1);
  vec2 pvIn = vec2(sdCapsule(p, pva, HL + vec3(.04, 0., -.06), .085), 0.);
  pvIn.y = clamp(dot(p - pva, normalize(HL - pva)), 0., 1.);
  float haIn = sdCapsule(p, haa, HL + vec3(-.04, 0., .06), .04);
  vec3 iv = vec3(-.3, 0., -.5);
  float ivc = sdCapsule(p, iv + vec3(0., -.62, 0.), iv + vec3(0., .72, .03), .1);

  // Flow: pulses travel in along the portal vein and artery, out along the hepatic veins to the vena cava.
  float wIn = wave(pvIn.y, gT, .5, 1.1, .06);
  res = U(res, vec2(pvIn.x - .012 * wIn, wIn > .5 ? 65. : 21.));
  res = U(res, vec2(haIn, 22.));
  float wIv = wave(p.y, gT, .5, 1.1, .06);
  res = U(res, vec2(ivc - .012 * wIv, wIv > .5 ? 68. : 24.));

  // Inside the liver.
  if (!gSkipShell) return res;

  // Portal triad: right and left branches from the hilum, then four generations in each lobe.
  bool right = p.x < HL.x;
  vec3 d0 = right ? normalize(vec3(-1., .35, -.05)) : normalize(vec3(1., .3, .02));
  vec4 tr = triad(p, HL, d0, right ? .42 : .48, .07, 0.);
  float wp = wave(tr.w, gT, .5, 1.3, .06), wb = wave(tr.w, -gT, .4, 1.2, .05);
  res = U(res, vec2(tr.x - .01 * wp, wp > .5 ? 65. : 21.));
  res = U(res, vec2(tr.y, 22.));
  res = U(res, vec2(tr.z - .008 * wb, wb > .5 ? 67. : 23.));

  // Hepatic veins: right, middle and left, each with a side branch, rising into the vena cava.
  vec3 top = iv + vec3(0., .45, .04);
  float hv = 1e5, hs = 0.;
  for (int i = 0; i < 3; i++) {
    float f = float(i) - 1.;
    vec3 e = vec3(-.15 + f * .95, .02 - .12 * abs(f), .1 + .2 * (1. - abs(f)));
    vec3 m = mix(top, e, .55) + vec3(0., .12, .1);
    float a = sdRoundCone(p, e, top, .035, .07);
    float b = sdCapsule(p, m, m + vec3(f * .2 + .12, -.32, .15), .028);
    float c = min(a, b);
    if (c < hv) { hv = c; hs = length(p - top); }
  }
  float wv = wave(-hs, gT, .5, 1.2, .06);
  res = U(res, vec2(hv - .008 * wv, wv > .5 ? 68. : 24.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 39.5 && m < 40.5) return .0022 * smoothstep(.45, .75, cellular(p * 7.5));
  if (m > 22.5 && m < 23.5) return .0015 * noise3(p * 50.);
  return 0.;
}`};export{e as scene};
