import"./chunk-KR4ZLU5I.js";var e={id:"N04",cam:[1.6,.95,5.4],target:[-.08,.02,0],floor:-2,ring:1.65,poster:2.6,glsl:`
const float T = 7., R = .17, P = .36;
const vec3 HINGE = vec3(0., .1, -.45);
const vec3 SA[4] = vec3[4](vec3(-.95, -1.1, -.05), vec3(.45, -.75, .1), vec3(-.95, -.52, -.02), vec3(.45, -.19, -.05));
const vec3 SB[4] = vec3[4](vec3(.45, -1.02, .18), vec3(-.95, -.83, -.05), vec3(.45, -.47, .04), vec3(-.95, -.24, .08));
const vec3 SW[4] = vec3[4](vec3(-.007, .957, -.292), vec3(.067, -.993, -.099), vec3(-.04, .994, .1), vec3(.061, -.954, .294));
const vec3 SN[4] = vec3[4](vec3(-.171, .286, .943), vec3(-.1, -.106, .989), vec3(-.039, -.101, .994), vec3(.078, .298, .951));
const vec2 SS[4] = vec2[4](vec2(.028, .083), vec2(.099, .154), vec2(.171, .225), vec2(.242, .296));
const vec3 HA[4] = vec3[4](vec3(-.75, .2, .2), vec3(.1, 1.28, .32), vec3(.72, .28, -.3), vec3(.8, -.02, -.52));
const vec3 HB[4] = vec3[4](vec3(-.35, 1.3, -.05), vec3(.25, .22, .38), vec3(.85, 1.25, -.28), vec3(1.02, -1.22, -.36));
const vec3 HX[4] = vec3[4](vec3(.94, -.342, 0.), vec3(-.99, -.14, 0.), vec3(.991, -.133, 0.), vec3(-.984, -.18, 0.));
const vec3 HY[4] = vec3[4](vec3(-.071, -.196, -.978), vec3(.008, -.055, -.998), vec3(.003, .02, -1.), vec3(.023, -.128, -.992));
const float HP[4] = float[4](2.4, .6, 3.6, 1.2);
const vec2 HS[4] = vec2[4](vec2(.32, .465), vec2(.488, .618), vec2(.651, .77), vec2(.825, .974));
const vec3 LP[36] = vec3[36](vec3(-1.220, -1.500, .420), vec3(-1.217, -1.313, .234), vec3(-1.127, -1.180, .078), vec3(-.950, -1.100, -.050), vec3(.450, -1.020, .180), vec3(.579, -.928, .162), vec3(.579, -.838, .136), vec3(.450, -.750, .100), vec3(-.950, -.830, -.050), vec3(-1.079, -.729, -.042), vec3(-1.079, -.626, -.032), vec3(-.950, -.520, -.020), vec3(.450, -.470, .040), vec3(.579, -.377, .012), vec3(.579, -.283, -.018), vec3(.450, -.190, -.050), vec3(-.950, -.240, .080), vec3(-1.044, -.091, .196), vec3(-1.019, .062, .199), vec3(-.876, .220, .088), vec3(-.381, 1.348, .110), vec3(-.227, 1.503, .172), vec3(-.113, 1.472, .210), vec3(-.038, 1.255, .224), vec3(.100, .194, .304), vec3(.383, .097, .190), vec3(.539, .132, .014), vec3(.569, .299, -.225), vec3(.806, 1.259, -.444), vec3(.974, .830, -.566), vec3(.953, .393, -.644), vec3(.743, -.051, -.677), vec3(1.147, -1.183, -.253), vec3(1.050, -1.381, -.150), vec3(.927, -1.487, -.019), vec3(.780, -1.500, .140));
const vec2 LS[9] = vec2[9](vec2(0., .028), vec2(.083, .099), vec2(.154, .171), vec2(.225, .242), vec2(.296, .32), vec2(.465, .488), vec2(.618, .651), vec2(.77, .825), vec2(.974, 1.));
const vec4 LBND[9] = vec4[9](vec4(-1.142, -1.265, .166, .405), vec4(.535, -.884, .146, .215), vec4(-1.035, -.676, -.036, .229), vec4(.535, -.33, -.004, .22), vec4(-.991, -.013, .159, .439), vec4(-.184, 1.423, .183, .276), vec4(.418, .16, .081, .44), vec4(.899, .609, -.59, .854), vec4(.98, -1.402, -.075, .379));
const vec3 POCKET = vec3(-.2, .05, .34);
vec2 gBest;
float gClose;
mat2 gR1, gR2, gR3;   // the upper lobe's turn: a third, two thirds and all of the closing angle

vec3 palette(int i) {
  if (i < 14) {
    float h = .67 * (1. - float(i) / 13.);
    vec3 c = clamp(abs(mod(h * 6. + vec3(0., 4., 2.), 6.) - 3.) - 1., 0., 1.);
    return mix(vec3(1.), c, .8);
  }
  return vec3(1., .18, .70);                // ligand
}

void take(float d, float s) { if (d < gBest.x) gBest = vec2(d, s); }
/** The upper lobe's rest frame: points rotated back about the hinge by the closing angle a. */
vec3 lobeRest(vec3 p) { vec3 q = p - HINGE; q.yz = q.yz * transpose(gR3); return q + HINGE; }
vec3 lobeMove(vec3 p, mat2 m) { vec3 q = p - HINGE; q.yz *= m; return q + HINGE; }

/** Flat beta-strand arrow i: a body and an arrowhead. */
void strand(vec3 p, int i) {
  vec3 a = SA[i], ab = SB[i] - a; float L = length(ab); vec3 d = ab / L;
  vec3 l = p - a;
  float x = abs(dot(l, SW[i])), y = dot(l, d), z = abs(dot(l, SN[i])) - .028;
  const float H = .26;
  float body = max(max(x - .1, z), max(-y, y - (L - H)));
  float head = max(max((x * H + .17 * (y - L)) / length(vec2(H, .17)), z), (L - H) - y);
  take(min(body, head) * .9 - .01, mix(SS[i].x, SS[i].y, clamp(y / L, 0., 1.)));
}

/** Ribbon helix i (right-handed): a band on a cylinder of radius R, tapering into round ends. */
void helix(vec3 p, int i) {
  vec3 a = HA[i], ab = HB[i] - a; float L = length(ab); vec3 u = ab / L;
  vec3 l = p - a;
  vec3 lp = vec3(dot(l, HX[i]), dot(l, u), dot(l, HY[i]));
  float th = atan(lp.z, lp.x) - HP[i];
  float y0 = th * P / TAU;
  float yt = y0 + floor((lp.y - y0) / P + .5) * P;
  if (yt < 0.) yt += P;
  if (yt > L) yt -= P;
  float tp = clamp(yt * 6.25, 0., 1.) * clamp((L - yt) * 6.25, 0., 1.);
  vec2 hw = vec2(mix(.034, .028, tp), mix(.034, .078, tp));
  vec2 q = abs(vec2(length(lp.xz) - R, (lp.y - yt) * .95)) - hw;
  float d = length(max(q, 0.)) + min(max(q.x, q.y), 0.) - .006;
  take(d * .82, mix(HS[i].x, HS[i].y, clamp(yt / L, 0., 1.)));
}

/** A loop as a chain of three capsules through four points, with chain positions s.x \u2192 s.y. */
void chain4(vec3 p, vec3 a, vec3 b, vec3 c, vec3 d, vec2 s) {
  vec3 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
  take(length(pa - ba * h) - .036, mix(s.x, s.y, h / 3.));
  pa = p - b; ba = c - b; h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
  take(length(pa - ba * h) - .036, mix(s.x, s.y, (1. + h) / 3.));
  pa = p - c; ba = d - c; h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
  take(length(pa - ba * h) - .036, mix(s.x, s.y, (2. + h) / 3.));
}
void chain(vec3 p, int i) { if (length(p - LBND[i].xyz) - LBND[i].w < gBest.x) chain4(p, LP[4 * i], LP[4 * i + 1], LP[4 * i + 2], LP[4 * i + 3], LS[i]); }

/** The ligand's centre (xyz) and size (w) through the docking cycle. */
vec4 ligand() {
  float s = fract(uTime / T);
  vec3 far = vec3(-.55, .62, 1.55), far2 = vec3(.35, .75, 1.55);
  vec3 c = s < .5 ? mix(far, POCKET, smoothstep(0., .26, s)) : mix(POCKET, far2, smoothstep(.66, .92, s));
  c += vec3(.03, .02, .025) * sin(uTime * 2.1) * (1. - smoothstep(.2, .26, s) * (1. - smoothstep(.66, .7, s)));
  float k = smoothstep(0., .07, s) * (1. - smoothstep(.9, 1., s));
  return vec4(c, k);
}

vec2 map(vec3 p) {
  float s = fract(uTime / T);
  gClose = .2 * smoothstep(.2, .3, s) * (1. - smoothstep(.62, .72, s));
  gR1 = rot(gClose / 3.); gR2 = gR1 * gR1; gR3 = gR2 * gR1;
  vec3 pb = lobeRest(p);
  float bA = sdBox(p - vec3(-.3, -.65, .1), vec3(1.02, .92, .46));
  float bB = sdBox(pb - vec3(0., .8, .02), vec3(1.06, .92, .56));
  float bC = sdBox(p - vec3(.925, -.125, -.35), vec3(.44, 1.48, .62));
  // The ligand's whole path lies in this box; find where it is only when near it.
  float bL = sdBox(p - vec3(-.1, .42, .95), vec3(.92, .66, 1.));
  vec4 lg = vec4(0., -9., 0., 0.);
  if (bL < .3) { lg = ligand(); bL = length(p - lg.xyz) - .4; }
  float bound = min(min(bA, bB), min(bC, bL));
  if (bound > .3) return vec2(bound, 0.);
  gBest = vec2(5., 0.);

  // Lower lobe: the twisted sheet, its hairpins and tail, and a side chain reaching into the pocket.
  if (bA < gBest.x) {
    for (int i = 0; i < 4; i++) if (sdCapsule(p, SA[i], SB[i], .2) < gBest.x) strand(p, i);
    for (int i = 0; i < 4; i++) chain(p, i);
    if (length(p - LBND[4].xyz) - LBND[4].w < gBest.x) chain4(p, LP[16], lobeMove(LP[17], gR1), lobeMove(LP[18], gR2), lobeMove(LP[19], gR3), LS[4]);
    take(min(sdCapsule(p, vec3(-.2, -.2, .02), vec3(-.22, -.05, .16), .026), sdSphere(p - vec3(-.22, -.05, .16), .05)), .27);
  }
  // Upper lobe (turns about the hinge): three helices, their turns and two pocket side chains.
  if (bB < gBest.x) {
    for (int i = 0; i < 3; i++) if (sdCapsule(pb, HA[i], HB[i], .25) < gBest.x) helix(pb, i);
    chain(pb, 5);
    chain(pb, 6);
    take(min(sdCapsule(pb, vec3(.17, .26, .3), vec3(.02, .17, .36), .026), sdSphere(pb - vec3(.02, .17, .36), .05)), .61);
    take(min(sdCapsule(pb, vec3(-.62, .3, .26), vec3(-.45, .17, .36), .026), sdSphere(pb - vec3(-.45, .17, .36), .05)), .335);
  }
  // The C-terminal helix at the back, with the long loop that reaches it and the tail.
  if (bC < gBest.x) {
    if (sdCapsule(p, HA[3], HB[3], .25) < gBest.x) helix(p, 3);
    if (length(p - LBND[7].xyz) - LBND[7].w < gBest.x) chain4(p, lobeMove(LP[28], gR3), lobeMove(LP[29], gR2), lobeMove(LP[30], gR1), LP[31], LS[7]);
    chain(p, 8);
  }
  vec2 res = vec2(gBest.x, 20. + floor(clamp(gBest.y, 0., .999) * 14.));

  // Ligand: a small ring compound that glows.
  if (lg.w > .01 && bL < res.x) {
    vec3 q = p - lg.xyz;
    q.xz *= rot(uTime * .5);
    q.xy *= rot(.6);
    q /= lg.w * 1.25;
    vec3 r6 = polarRep(q, 6.);
    float d = sdSphere(r6 - vec3(.1, 0., 0.), .045);
    d = min(d, sdCapsule(q, vec3(.1, 0., 0.), vec3(.24, .07, 0.), .022));
    d = min(d, sdSphere(q - vec3(.24, .07, 0.), .05));
    d = min(d, sdCapsule(q, vec3(-.05, 0., .087), vec3(-.12, 0., .2), .02));
    d = min(d, sdSphere(q - vec3(-.12, 0., .2), .042));
    d = min(d, length(vec2(length(q.xz) - .1, q.y)) - .016);
    res = U(res, vec2(d * lg.w * 1.25, 74.));
  }
  return res;
}`};export{e as scene};
