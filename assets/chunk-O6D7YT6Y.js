import"./chunk-KR4ZLU5I.js";var e={id:"N28",cam:[2.04,1.57,4.9],target:[0,-.1,-.15],fov:2.85,floor:-1.66,ring:1.55,poster:.8,orbit:{az:[-62,45]},glsl:`
const float T = 2.6, ZC = -.032;
float gB;
vec2 gS;

vec3 palette(int i) {
  if (i == 0) return vec3(.95, .95, .92);   // enamel
  if (i == 1) return vec3(.94, .66, .27);   // dentin
  if (i == 2) return vec3(.90, .24, .33);   // pulp
  if (i == 3) return vec3(.96, .20, .17);   // arteries, arterial blood
  if (i == 4) return vec3(.16, .36, 1.);    // veins, venous blood
  if (i == 5) return vec3(1., .82, .22);    // nerve
  if (i == 6) return vec3(.62, .96, 1.);    // nerve impulse
  if (i == 7) return vec3(.94, .37, .50);   // gum
  if (i == 8) return vec3(.74, .68, .57);   // bone
  return vec3(.50, .33, .28);               // marrow spaces
}

float crownShape(vec3 p) {
  vec3 q = p - vec3(0., .68, 0.);
  float d = sdEllipsoid(q, vec3(.6, .36, .52));
  for (int i = 0; i < 4; i++) {
    vec3 c = vec3(i < 2 ? -.29 : .29, .29, (i == 0 || i == 2) ? -.14 : .14);
    d = smin(d, sdSphere(q - c, .22), .14);
  }
  return smax(d, -sdEllipsoid(q - vec3(0., .55, 0.), vec3(.1, .13, .35)), .05);
}
float rootShape(vec3 p) {
  float d = sdEllipsoid(p - vec3(0., .2, 0.), vec3(.44, .3, .4));
  d = smin(d, sdRoundCone(p, vec3(-.23, .03, 0.), vec3(-.35, -.82, 0.), .2, .075), .13);
  return smin(d, sdRoundCone(p, vec3(.23, .03, 0.), vec3(.36, -.8, 0.), .2, .075), .13);
}
float pulpShape(vec3 p) {
  float d = sdEllipsoid(p - vec3(0., .42, 0.), vec3(.28, .15, .2));
  d = smin(d, sdRoundCone(p, vec3(-.16, .44, 0.), vec3(-.26, .76, 0.), .11, .05), .07);
  d = smin(d, sdRoundCone(p, vec3(.16, .44, 0.), vec3(.26, .76, 0.), .11, .05), .07);
  d = smin(d, sdRoundCone(p, vec3(-.18, .3, 0.), vec3(-.345, -.78, 0.), .085, .032), .07);
  return smin(d, sdRoundCone(p, vec3(.18, .3, 0.), vec3(.355, -.76, 0.), .085, .032), .07);
}
/** Holes of spongy bone in the cut face: one jittered hole per cell, kept inside its cell. */
float pores(vec3 p, float cell, float r0, float r1, float seed) {
  vec2 id = floor(p.xy / cell);
  vec2 f = p.xy - (id + .5) * cell;
  vec2 j = (vec2(hash21(id + seed), hash21(id + seed + 17.3)) - .5) * (cell * .5 - r1 * 1.18) * 2.;
  vec2 e = .85 + .3 * vec2(hash21(id + seed + 3.1), hash21(id + seed + 8.9));
  return (length(vec3((f - j) * e, p.z + .015)) - mix(r0, r1, hash21(id + seed + 5.7))) / 1.15;
}

/**
 * Artery, nerve and vein side by side along a canal segment from a (upper) to b (lower), canal radius
 * ra \u2192 rb, lying on the recessed pulp face. u0 is the path length (measured up from the mandibular
 * canal) at b. Keeps the nearest strand in gS = (strand: 0 artery, 1 nerve, 2 vein; path length).
 */
void strands(vec3 p, vec3 a, vec3 b, float ra, float rb, float u0) {
  vec3 ab = b - a; float L = length(ab); vec3 d = ab / L;
  vec3 lat = vec3(-d.y, d.x, 0.);
  vec3 r = p - a; float h = clamp(dot(r, d), 0., L);
  vec3 rel = r - d * h;
  float rc = mix(ra, rb, h / L);
  float o = rc * .52, tr = clamp(rc * .27, .009, .022);
  float l = dot(rel, lat), e = dot(rel, d), w = p.z - ZC;
  float dA = length(vec3(l + o, w, e)) - tr;
  float dN = length(vec3(l, w, e)) - tr * 1.15;
  float dV = length(vec3(l - o, w, e)) - tr;
  float m = min(dA, min(dN, dV));
  if (m < gB) { gB = m; gS = vec2(m == dA ? 0. : m == dN ? 1. : 2., u0 + L - h); }
}
/** The capillary loop over a pulp horn at H joining the artery to the vein (radius o); u at its start. */
void hornLoop(vec3 p, vec3 H, vec3 up, float o, float u0) {
  vec3 lat = vec3(-up.y, up.x, 0.);
  vec3 q = p - H;
  float al = dot(q, up), l = dot(q, lat);
  float d = max(length(vec2(length(vec2(al, l)) - o, p.z - ZC)) - .013, -al);
  if (d < gB) { gB = d; gS = vec2(l < 0. ? 3. : 4., u0 + atan(al, -l) * o); }
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., -.08, -.3), vec3(1.25, 1.4, 1.1));
  if (bound > .3) return vec2(bound, 0.);
  float crown = crownShape(p), root = rootShape(p);
  float tooth = smin(crown, root, .08);
  float dent = smin(crown + .11 * smoothstep(.3, .64, p.y), root, .08);
  float pulp = pulpShape(p);

  // Enamel: a thin solid face on the cut, translucent glass behind it, so the dentin cusps show through.
  // The cut has slightly rounded edges, so each layer's boundary shows as a fine groove.
  float enamel = smax(max(crown, -dent), p.z, .012);
  vec2 res = vec2(SHELL(max(enamel, p.z + .012)), 40.);
  res = U(res, vec2(max(enamel, -p.z - .012), 20.));
  res = U(res, vec2(smax(max(dent, -pulp), p.z, .012), 21.));
  res = U(res, vec2(smax(pulp, p.z - ZC, .01), 22.));

  // Gum over the bone and cuffing the neck of the tooth.
  float boneB = sdRoundBox(p - vec3(0., -.6, 0.), vec3(1.05, .72, .84), .14);
  float gum = smin(sdRoundBox(p - vec3(0., .17, 0.), vec3(1.05, .13, .84), .1), sdEllipsoid(p - vec3(0., .3, 0.), vec3(.68, .21, .62)), .14);
  gum = smax(max(gum, -boneB), max(-tooth, p.z), .012);
  res = U(res, vec2(gum, 27.));

  // Jaw bone: the socket with the ligament gap around the roots, the mandibular canal and the channels
  // from each root tip down to it, and spongy bone inside the dense outer layer.
  float bone = max(smax(boneB, p.z, .012), -(tooth - .022));
  float canal = length(p.yz - vec2(-1.08, 0.)) - .125;
  canal = min(canal, sdCapsule(p, vec3(-.35, -.8, 0.), vec3(-.36, -1., 0.), .045));
  canal = min(canal, sdCapsule(p, vec3(.36, -.78, 0.), vec3(.37, -1., 0.), .045));
  bone = max(bone, -canal);
  float mat = 28.;
  if (p.z > -.1) {
    float m = smoothstep(.06, .13, -boneB) * smoothstep(.04, .09, tooth) * smoothstep(.03, .07, canal);
    if (m > 0.) {
      float po = min(pores(p, .16, .025, .05, 0.), pores(p + vec3(.05, .07, 0.), .11, .015, .034, 11.));
      po += (1. - m) * .08;
      if (-po > bone) { bone = -po; mat = 29.; }
    }
  }
  res = U(res, vec2(bone, mat));

  // Vessels and nerve: in each root canal and up into the pulp horns, down through the bone to the
  // mandibular canal.
  if (p.z > -.1 && min(pulp, canal) < .06) {
    gB = 1e5; gS = vec2(0.);
    float uTop = 0.;
    for (int k = 0; k < 2; k++) {
      float s = k == 0 ? -1. : 1.;
      vec3 J = vec3(s * .36 + .005, -.99, 0.), B = vec3(s * .35 + .005, -.78, 0.), A = vec3(s * .18, .3, 0.), H = vec3(s * .25, .7, 0.);
      float lBJ = length(J - B), lAB = length(B - A), lHA = length(A - H);
      strands(p, B, J, .032, .036, 0.);
      strands(p, A, B, .085, .032, lBJ);
      strands(p, H, A, .058, .085, lBJ + lAB);
      uTop = lBJ + lAB + lHA;
      hornLoop(p, H, normalize(H - A), .058 * .52, uTop);
    }
    float rs = gB;
    // Mandibular canal: artery, nerve and vein along the jaw.
    float cl = abs(p.x) - 1.04;
    float ma = max(length(p.yz - vec2(-1.002, ZC)) - .026, cl);
    float mn = max(length(p.yz - vec2(-1.08, ZC - .01)) - .043, cl);
    float mv = max(length(p.yz - vec2(-1.157, ZC)) - .03, cl);
    float mm = min(ma, min(mn, mv));
    float id = gS.x, u = gS.y, d = rs;
    if (mm < rs) { d = mm; id = mm == ma ? 5. : mm == mn ? 6. : 7.; }
    // Blood pulses along the flow path (artery up, loop, vein down); the nerve impulse runs down.
    float t = uTime;
    float front = mod(t, T) * 1.4 - .15;
    float I = 0., mt = 22.;
    if (id < .5) { I = wave(u, t, .45, .34, .05); mt = I > .45 ? 63. : 23.; }
    else if (id < 1.5) { I = exp(-pow((uTop - u - front) / .13, 2.)); d -= .018 * I; mt = I > .3 ? 66. : 25.; }
    else if (id < 2.5) { I = wave(2. * uTop + .095 - u, t, .45, .34, .05); mt = I > .45 ? 64. : 24.; }
    else if (id < 4.5) { I = wave(u, t, .45, .34, .05); mt = I > .45 ? (id < 3.5 ? 63. : 64.) : (id < 3.5 ? 23. : 24.); }
    else if (id < 5.5) { I = wave(p.x, t, .45, .34, .05); mt = I > .45 ? 63. : 23.; }
    else if (id < 6.5) {
      float n1 = uTop + .365 - p.x, n2 = uTop - .355 - p.x;
      I = max(p.x < .365 ? exp(-pow((n1 - front) / .13, 2.)) : 0., p.x < -.355 ? exp(-pow((n2 - front) / .13, 2.)) : 0.);
      d -= .018 * I; mt = I > .3 ? 66. : 25.;
    }
    else { I = wave(-p.x, t, .45, .34, .05); mt = I > .45 ? 64. : 24.; }
    if (id != 1. && id != 6.) d -= .006 * I;
    res = U(res, vec2(d, mt));
  }
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 19.5 && m < 20.5) return .0008 * sin(crownShape(p) * 260.);
  if (m > 20.5 && m < 21.5) return .001 * sin(pulpShape(p) * 170.);
  if (m > 26.5 && m < 27.5) return .002 * noise3(p * 60.);
  if (m > 27.5 && m < 29.5) return .003 * noise3(p * 45.);
  if (m > 39.5 && m < 40.5) return .0008 * sin(p.y * 160. + 3. * noise3(p * 8.));
  return 0.;
}`};export{e as scene};
