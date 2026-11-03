import"./chunk-KR4ZLU5I.js";var e={id:"N09",cam:[.78,1.32,4.55],target:[0,-.34,0],fov:2.45,floor:-1.75,ring:1.75,poster:3.2,orbit:{az:[-75,75]},glsl:`
const float TOP = .34, EPI = .16, FAT = -.62, FLOOR = -.4, BT = 8.;
const vec3 FD[3] = vec3[3](vec3(.8, .25, .55), vec3(-.3, .6, .74), vec3(.45, -.55, .7));
const vec3 RBCP[4] = vec3[4](vec3(-.22, .24, .55), vec3(.2, .28, -.15), vec3(-.12, .22, -.65), vec3(.1, .26, .22));
float gBreath;

vec3 palette(int i) {
  if (i == 0) return vec3(.98, .62, .44);   // epidermis
  if (i == 1) return vec3(1., .58, .62);    // papillary dermis
  if (i == 2) return vec3(.92, .42, .52);   // reticular dermis
  if (i == 3) return vec3(1., .80, .30);    // fat
  if (i == 4) return vec3(1., .34, .40);    // granulation tissue (wound bed)
  if (i == 5) return vec3(.82, .12, .11);   // fibrin clot
  if (i == 6) return vec3(.94, .14, .10);   // red blood cells
  if (i == 7) return vec3(1., .40, .07);    // fibroblasts
  if (i == 8) return vec3(.55, .28, .95);   // fibroblast nuclei
  if (i == 9) return vec3(1., .78, .36);    // collagen
  return vec3(.96, .18, .15);               // vessels and capillaries
}

float wob(float z) { return .05 * sin(z * 2.4 + .5); }
/** Half-width of the wound at height y: a U that narrows toward the wound bed. */
float hw(float y) { return mix(.24, .74, smoothstep(FLOOR - .05, TOP, y)) * gBreath; }
float block(vec3 p) { return sdRoundBox(p - vec3(0., -.38, 0.), vec3(1.6, .72, 1.), .03); }
/** The wound space (negative inside), open at the top and at both cut faces. */
float wound(vec3 p) {
  float fl = FLOOR + .025 * sin(p.z * 4.) * sin(p.x * 7.);
  return max((abs(p.x - wob(p.z)) - hw(p.y)) * .78, fl - p.y);
}
float rbc(vec3 q, vec3 n, float r) {
  float y = dot(q, n), x = length(q - n * y);
  return smin(length(vec2(x - r * .62, y)) - r * .36, max(abs(y) - r * .13, x - r * .7), r * .2);
}

vec2 map(vec3 p) {
  float blk = block(p);
  float bound = max(blk, p.y - TOP - .2);
  if (bound > .3) return vec2(bound, 0.);
  gBreath = 1. + .1 * sin(uTime * TAU / BT);
  float W = wound(p);

  // The tissue block, with the wound cut out of it; layers by depth, the wound bed in its own colour.
  float tis = smax(blk, -W, .06);
  float yE = EPI + .03 * sin(p.x * 11.) * sin(p.z * 9.);
  float m = p.y > yE ? 20. : (-W > blk - .004 ? 24. : p.y > -.06 ? 21. : p.y > FAT + .04 * sin(p.x * 6. + p.z * 4.) ? 22. : 23.);
  vec2 res = vec2(tis, m);
  // Small vessels running through the dermis, seen cut across on the faces.
  float ves = min(sdCapsule(p, vec3(-1.05, -.34, -1.01), vec3(-1.05, -.34, 1.01), .07), sdCapsule(p, vec3(1.08, -.42, -1.01), vec3(1.08, -.42, 1.01), .06));
  ves = min(ves, sdCapsule(p, vec3(-1.615, -.16, .4), vec3(-1.3, -.16, .4), .045));
  res = U(res, vec2(ves, 30.));

  // Everything inside the wound.
  if (sdBox(p - vec3(0., -.05, 0.), vec3(.95, .52, 1.02)) < res.x) {
    float ax = abs(p.x - wob(p.z));
    // Fibrin clot: an open mesh of fibres across the top of the gap, sagging in the middle and
    // bulging a little above the skin.
    float sag = 1. - smoothstep(0., .7, ax);
    float clotR = max(max(W, blk), max(.22 - .1 * sag - p.y, p.y - (TOP + .03 + .06 * sag)));
    if (clotR < res.x) {
      float mesh = 5.;
      for (int f = 0; f < 3; f++) {
        vec3 d = normalize(FD[f]);
        vec3 e1 = normalize(cross(d, vec3(0., 1., .2))), e2 = cross(d, e1);
        vec2 uv = vec2(dot(p, e1), dot(p, e2)) + .025 * sin(dot(p, d) * 8. + vec2(0., 1.7) + float(f) * 2.);
        vec2 c = mod(uv, .19) - .095;
        mesh = min(mesh, length(c) - .012);
      }
      res = U(res, vec2(max(mesh * .88, clotR), 25.));
      float cells = 5.;
      for (int k = 0; k < 4; k++) cells = min(cells, rbc(p - RBCP[k], normalize(vec3(sin(float(k) * 2.3), 1., cos(float(k) * 1.7))), .075));
      res = U(res, vec2(cells, 26.));
    }
    // Tongues of epidermis creeping in from both edges, just beneath the clot.
    float ext = .13 + .06 * sin(uTime * TAU / BT);
    float hT = hw(.1);
    float tongue = max(abs(p.y - .1 + .05 * (ax - hT)) - .024, max(hT - ext - ax, ax - hT - .12));
    res = U(res, vec2(max(tongue, blk), 20.));

    if (p.y - .08 < res.x) {
      // Collagen fibres laid from wall to wall, settling slowly into the wound bed.
      float fib = 5.;
      for (int j = 0; j < 7; j++) {
        float fj = float(j);
        float ph = fract(uTime / 12. + fj / 7.);
        float yf = .02 - ph * .48;
        float zf = -.7 + fract(fj * .618 + .1) * 1.58;
        float span = hw(yf) + .06;
        float sd = mod(fj, 2.) < .5 ? 1. : -1.;
        vec3 a = vec3(wob(zf) - sd * span, yf, zf);
        vec3 b = a + vec3(sd * 2. * span * smoothstep(0., .3, ph), .03 * sin(fj * 2.1), .12 * sin(fj * 1.7));
        fib = min(fib, sdCapsule(p, a, b, .018));
      }
      res = U(res, vec2(max(fib, blk), 29.));
      // Fibroblasts: spindles that emerge from the wound walls and crawl inward over the wound bed.
      float fb = 5., nu = 5.;
      for (int j = 0; j < 6; j++) {
        float fj = float(j);
        float sd = mod(fj, 2.) < .5 ? 1. : -1.;
        float zc = -.62 + fj * .29;
        float ph = fract(uTime / 10. + fj * .37);
        float yc = FLOOR + .07 - .2 * smoothstep(.65, 1., ph);
        float xc = wob(zc) + sd * (hw(yc) + .12 - .55 * ph);
        vec3 lq = p - vec3(xc, yc, zc);
        lq.xz *= rot(.3 * sin(fj * 2.4));
        float cell = sdEllipsoid(lq, vec3(.2, .05, .065));
        cell = smin(cell, sdCapsule(lq, vec3(-sd * .17, 0., 0.), vec3(-sd * .32, .01, .03), .014), .03);
        fb = min(fb, cell);
        nu = min(nu, sdEllipsoid(lq - vec3(0., .022, 0.), vec3(.06, .036, .045)));
      }
      res = U(res, vec2(max(fb, blk), 27.));
      res = U(res, vec2(max(nu, blk), 28.));
      // New capillaries: sprouts with tip cells, and loops arching up from the bed.
      float cap = 5.;
      for (int k = 0; k < 3; k++) {
        float fk = float(k);
        float zk = -.62 + fk * .62;
        float xk = wob(zk) + .12 * sin(fk * 2.3 + 1.);
        float L = .22 + .1 * sin(uTime * TAU / BT + fk * 1.9);
        vec3 a = vec3(xk, FLOOR - .1, zk), b = vec3(xk + .08 * sin(fk * 3. + 1.), FLOOR + L, zk + .06 * cos(fk * 2.));
        cap = min(cap, min(sdCapsule(p, a, b, .026), length(p - b) - .038));
        vec3 lq = p - vec3(wob(zk + .3) - .1 * sin(fk * 1.3), FLOOR - .02, zk + .3);
        float Rl = .13 + .04 * sin(uTime * TAU / BT + fk * 2.6 + 1.);
        cap = min(cap, length(vec2(length(lq.yz) - Rl, lq.x)) - .024);
      }
      res = U(res, vec2(max(cap, blk), 30.));
    }
  }
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 19.5 && m < 20.5) return .0025 * cellular(p * 26.);
  if (m > 21.5 && m < 22.5) return .002 * sin(p.x * 40. + 6. * noise3(p * 5.)) * sin(p.y * 30. + 4. * noise3(p * 6.));
  if (m > 22.5 && m < 23.5) return -.008 * cellular(p * 9.);
  if (m > 23.5 && m < 24.5) return .0022 * noise3(p * 24.);
  return 0.;
}`};export{e as scene};
