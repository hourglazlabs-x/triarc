import"./chunk-KR4ZLU5I.js";var e={id:"N32",cam:[.88,1.18,4.75],target:[0,.18,0],fov:2.45,floor:-1.62,ring:1.6,poster:1.2,glsl:`
const float P = 3.2, TC = .95, H = .62;
const float TF = P - TC, G = 8. * H / (TF * TF), V0 = G * TF * .5, W = PI / TC, A = V0 / W;
const float YB = -1.02, L0 = 1.05, RS = .4, NT = 4.5, RC = .5, RW = .06;
float gComp, gFly, gX;

vec3 palette(int i) {
  if (i == 0) return vec3(.25, .13, .52);   // base plate
  if (i == 1) return vec3(.62, .46, .98);   // rims and cap
  if (i == 2) return vec3(.55, .36, .98);   // spring
  if (i == 3) return vec3(1., .64, .16);    // load
  if (i == 4) return vec3(.86, .70, 1.);    // shock rings
  return vec3(1., .66, .2);                 // energy in the spring
}

/** Coil spring between heights y0 and y1: (distance, position 0 \u2192 1 along the wire). */
vec2 coil(vec3 p, float y0, float y1) {
  float pt = (y1 - y0) / NT;
  float a = atan(p.z, p.x);
  float y = p.y - y0 - (a / TAU + .5) * pt;
  float n = clamp(floor(y / pt + .5), 0., NT - 1.);
  float d = length(vec2(length(p.xz) - RC, y - n * pt)) - RW;
  return vec2(d * .75, (n + a / TAU + .5) / NT);
}

vec2 map(vec3 p) {
  float bound = sdCylinder(p - vec3(0., .2, 0.), 1.55, 2.1);
  if (bound > .3) return vec2(bound, 0.);
  // Motion: in contact the spring compresses as a half oscillation; then the load flies up and back.
  gX = mod(uTime, P);
  if (gX < TC) { gComp = A * sin(W * gX); gFly = 0.; }
  else { float u = gX - TC; gComp = -.045 * sin(u * 17.) * exp(-u * 4.5); gFly = V0 * u - .5 * G * u * u; }
  float yc = YB + L0 - gComp;            // underside of the cap

  // Base plate with a light rim, the cap, and the load.
  vec2 res = vec2(sdCylinder(p - vec3(0., YB - .1, 0.), .1, .92) - .02, 20.);
  res = U(res, vec2(sdTorus(p - vec3(0., YB - .02, 0.), vec2(.93, .035)), 21.));
  res = U(res, vec2(sdCylinder(p - vec3(0., yc + .05, 0.), .04, .62) - .02, 21.));
  float ys = (gX < TC ? yc : YB + L0) + .11 + RS + gFly;
  res = U(res, vec2(sdSphere(p - vec3(0., ys, 0.), RS), 23.));

  // The spring; while it rebounds, light runs up the coil.
  if (max(length(p.xz) - RC - RW, abs(p.y - (YB + yc) * .5) - (yc - YB) * .5 - RW) < res.x) {
    vec2 c = coil(p, YB, yc);
    float rel = (gX - TC * .5) / (TC * .5);
    float I = rel > 0. && rel < 1.15 ? exp(-pow((c.y - rel) / .09, 2.)) : 0.;
    res = U(res, vec2(c.x - .008 * I, I > .4 ? 65. : 22.));
  }

  // Shock rings spreading from the base as the spring rebounds.
  float sr = 1e5;
  for (int i = 0; i < 2; i++) {
    float tau = mod(gX - TC * .5 - float(i) * .22, P);
    float k = tau / 1.5;
    if (k < 1.) sr = min(sr, sdTorus(p - vec3(0., YB - .06, 0.), vec2(.98 + k * 1.05, .022 * (1. - k) + .002)));
  }
  res = U(res, vec2(sr, 64.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 19.5 && m < 20.5) return .0015 * sin(length(p.xz) * 90.);
  if (m > 21.5 && m < 22.5) return .001 * noise3(p * 60.);
  if (m > 22.5 && m < 23.5) return .0008 * noise3(p * 30.);
  return 0.;
}`};export{e as scene};
