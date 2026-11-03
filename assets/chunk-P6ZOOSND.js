import"./chunk-KR4ZLU5I.js";var e={id:"N02",cam:[.7,1.75,4.95],target:[0,.1,0],floor:-1.75,ring:1.75,poster:2.6,glsl:`
const vec3 C = vec3(0., .15, 0.);
const vec3 NU = vec3(-.18, .1, -.18);
const float NR = .6;
const vec3 GO = vec3(.7, -.32, .38);
const vec3 CS = vec3(.3, -.62, .1);
const float VT = 4.;
const vec3 VEND[4] = vec3[4](vec3(1.3, -.2, .45), vec3(.25, -.88, .85), vec3(.45, .55, 1.1), vec3(1.2, -.45, -.4));
const vec3 MP[6] = vec3[6](vec3(.85, .55, .25), vec3(-.25, -.95, .45), vec3(.25, .85, .65), vec3(-.95, .55, .5), vec3(.75, -.1, -.8), vec3(-.45, .35, -1.));
const vec3 MD[6] = vec3[6](vec3(.08, .2, -.1), vec3(.22, .02, .1), vec3(.2, .06, -.08), vec3(.04, .2, .12), vec3(.1, .18, .12), vec3(.2, -.1, .04));
const vec3 LP[3] = vec3[3](vec3(1.08, -.55, -.15), vec3(-.6, .95, .25), vec3(.05, -.75, -.95));
const vec3 MTE[7] = vec3[7](vec3(1.209, -.5115, .093), vec3(.837, -.93, .5115), vec3(1.0695, .186, .6696), vec3(.2325, -1.0974, .5115), vec3(.558, -.837, -.7905), vec3(.9765, .651, .4185), vec3(-.3255, -1.0695, .4185));
const vec3 CUTN = vec3(.2996, .6492, .6991);
const vec3 GA = vec3(.9315, -.2329, .2794), E1 = vec3(-.2425, -.9701, 0.), E2 = vec3(.2711, -.0678, -.9602);
const vec3 EK[4] = vec3[4](vec3(-.6719, -.5194, .5281), vec3(-.759, -.436, .4835), vec3(-.8515, -.3199, .4155), vec3(-.934, -.1653, .3166));
const vec3 BUD[4] = vec3[4](vec3(0.8517, -0.8115, 0.4575), vec3(0.9354, -0.8633, 0.4848), vec3(1.0651, 0.0422, 0.4575), vec3(1.1633, 0.0486, 0.4848));

vec3 palette(int i) {
  if (i == 0) return vec3(.20, .72, .74);   // plasma membrane
  if (i == 1) return vec3(.48, .20, .95);   // nuclear envelope
  if (i == 2) return vec3(.62, .36, 1.);    // nucleoplasm (cut face)
  if (i == 3) return vec3(.28, .06, .60);   // nucleolus
  if (i == 4) return vec3(.98, .70, 1.);    // nuclear pores
  if (i == 5) return vec3(.60, .90, .10);   // rough ER
  if (i == 6) return vec3(.16, .18, .92);   // ribosomes
  if (i == 7) return vec3(1., .60, .06);    // Golgi
  if (i == 8) return vec3(1., .78, .22);    // vesicles
  if (i == 9) return vec3(1., .28, .10);    // mitochondria
  if (i == 10) return vec3(.95, .16, .55);  // lysosomes
  if (i == 11) return vec3(.32, .48, .62);  // microtubules
  return vec3(.95, .90, .58);               // centrioles
}

/** Nearest point of a near-uniform grid on the unit sphere (rows of latitude D apart); id gets the cell. */
vec3 sphereGrid(vec3 dir, float D, out vec2 id) {
  float th = acos(clamp(dir.y, -1., 1.));
  float bi = floor(th / D);
  float thc = (bi + .5) * D;
  float n = max(floor(TAU * sin(thc) / D), 1.);
  float pj = floor(atan(dir.z, dir.x) / TAU * n + .5);
  float phc = pj / n * TAU;
  id = vec2(bi, pj);
  return vec3(sin(thc) * cos(phc), cos(thc), sin(thc) * sin(phc));
}

/** Vesicle k on its way from the Golgi to the membrane: centre in xyz, radius in w. */
vec4 vesicle(int k) {
  float s = fract(uTime / VT + float(k) / 4.);
  vec3 a = GO + GA * .3 + E1 * .1 * float(k - 1);
  vec3 c = mix(a, VEND[k], smoothstep(0., 1., s)) + vec3(0., .07, 0.) * sin(s * PI);
  float r = .058 * smoothstep(0., .14, s) * (1. - smoothstep(.86, 1., s));
  return vec4(c, r);
}

vec2 map(vec3 p) {
  vec3 q = p - C;
  float bound = sdSphere(q, 1.62);
  if (bound > .3) return vec2(bound, 0.);
  float t = uTime;

  // Plasma membrane: a gently undulating envelope that bulges where a vesicle fuses with it.
  float mem = sdEllipsoid(q, vec3(1.5, 1.3, 1.4));
  mem += .026 * sin(q.x * 2.6 + t * .8) * sin(q.y * 2.3 - t * .6) * sin(q.z * 2.9 + t * .7 + 1.);
  if (abs(mem) < .25) {
    for (int k = 0; k < 4; k++) {
      float s = fract(t / VT + float(k) / 4.);
      float fuse = smoothstep(.8, .95, s) * (1. - smoothstep(.95, 1., s));
      if (fuse > 0.) mem = smin(mem, sdSphere(q - VEND[k] * 1.06, .07 * fuse), .1);
    }
  }
  vec2 res = vec2(SHELL(mem * .9), 80.);
  if (!gSkipShell) return res;

  // Nucleus, cut open toward the viewer: envelope with pores, nucleoplasm and nucleolus.
  vec3 v = q - NU;
  float r = length(v);
  vec3 dir = v / max(r, 1e-4);
  float env = r - NR;
  float cut = dot(v, CUTN) - .22;
  float nuc = max(env, cut);
  res = vec2(nuc, cut > env ? (env > -.035 ? 21. : 22.) : 21.);
  res = U(res, vec2(sdSphere(v - CUTN * .13 - vec3(.1, -.04, -.02), .18), 23.));
  if (abs(env) < .06) {
    vec2 id;
    vec3 c = sphereGrid(dir, .28, id);
    vec3 w = v - c * NR;
    float ax = dot(w, c);
    float pore = length(vec2(length(w - c * ax) - .032, ax)) - .013;
    if (dot(c * NR, CUTN) < .16) res = U(res, vec2(pore * .8, 24.));
  }
  // Rough ER: stacked sheets curving beside the nucleus, studded with ribosomes.
  if (r < 1.05 && dot(dir, EK[1]) > .2) {
    float k = clamp(floor((r - .69) / .1 + .5), 0., 3.);
    int ki = int(k);
    float R = .69 + .1 * k + .02 * sin(dir.y * 11. + dir.z * 7. + k * 2.);
    float sector = (.5 + .1 * k - dot(dir, EK[ki])) * r;
    float er = smax(abs(r - R) - .016, sector, .05);
    res = U(res, vec2(er, 25.));
    if (abs(r - R) < .055 && sector < .03) {
      vec2 id;
      vec3 c = sphereGrid(dir, .085, id);
      float side = r > R ? 1. : -1.;
      float rib = length(v - c * (R + side * .033)) - .016;
      if (hash21(id + k * 7.1) < .7 && dot(c, EK[ki]) > .52 + .1 * k) res = U(res, vec2(rib * .8, 26.));
    }
  }

  // Golgi apparatus: five curved cisternae with dilated rims, budding vesicles from the trans face.
  if (length(q - GO) - .5 < res.x) {
    vec3 u = q - (GO + GA * .9);
    float L = length(u);
    float z = dot(u, -GA);
    vec3 pe = u + GA * z;
    float rho = length(vec2(dot(pe, E1), dot(pe, E2) * 1.7));
    float g = 1e5;
    for (int i = 0; i < 5; i++) {
      float R = .98 - .08 * float(i);
      float w = .4 - .035 * abs(float(i) - 1.5);
      float th = .011 + .02 * smoothstep(w - .14, w, rho);
      g = min(g, max(smax(abs(L - R) - th, (rho - w) * .58, .025), -z));
    }
    res = U(res, vec2(g, 27.));
    float bud = 1e5;
    for (int i = 0; i < 4; i++) bud = min(bud, sdSphere(q - BUD[i], .042));
    res = U(res, vec2(bud, 28.));
  }

  // Secretory vesicles in transit to the membrane.
  if (sdBox(q - vec3(.8, -.17, .35), vec3(.68, .86, .88)) < res.x) {
    for (int k = 0; k < 4; k++) {
      vec4 ve = vesicle(k);
      if (ve.w > .002) res = U(res, vec2(sdSphere(q - ve.xyz, ve.w), 68.));
    }
  }

  // Mitochondria (beans with cristae ridges) and lysosomes, drifting slowly.
  vec3 dr = .05 * vec3(sin(t * .5), sin(t * .43 + 1.), sin(t * .37 + 2.));
  float mi = 1e5, mh = 0.;
  for (int i = 0; i < 6; i++) {
    vec3 c = MP[i] + ((i & 1) == 0 ? dr : -dr.yzx);
    vec3 pa = q - c + MD[i], ba = 2. * MD[i];
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
    float d = length(pa - ba * h) - .088 - .12 * h * (1. - h);
    if (d < mi) { mi = d; mh = h; }
  }
  res = U(res, vec2((mi + .0025 * sin(mh * 30.)) * .9, 29.));
  float ly = min(sdSphere(q - LP[0] - dr.zxy, .085), min(sdSphere(q - LP[1] + dr, .1), sdSphere(q - LP[2] - dr.yzx, .115)));
  res = U(res, vec2(ly, 30.));

  // Centrosome: two centrioles at right angles, with microtubules radiating to the membrane.
  vec3 cq = q - CS;
  if (length(cq) - .16 < res.x) {
    float cen = min(sdCylinder(cq, .055, .026), sdCylinder(cq.yxz - vec3(0., .07, 0.), .055, .026));
    res = U(res, vec2(cen, 32.));
  }
  float mt = 5.;
  for (int i = 0; i < 7; i++) mt = min(mt, sdCapsule(q, CS, MTE[i], .005));
  res = U(res, vec2(mt, 31.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 79.5 && m < 80.5) return .0012 * cellular(p * 30.) + .0006 * noise3(p * 90.);
  if (m > 21.5 && m < 22.5) return .006 * fbm(p * 22.);
  if (m > 20.5 && m < 21.5) return .0012 * noise3(p * 60.);
  if (m > 22.5 && m < 23.5) return .004 * noise3(p * 45.);
  if (m > 26.5 && m < 27.5) return .0015 * noise3(p * 50.);
  return 0.;
}`};export{e as scene};
