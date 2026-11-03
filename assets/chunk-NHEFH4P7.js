import"./chunk-KR4ZLU5I.js";var e={id:"N26",cam:[-2.3,1.9,4.3],target:[0,-.12,0],fov:2.5,floor:-1.65,ring:1.8,poster:4.5,orbit:{az:[-80,80]},glsl:`
const vec3 BLK = vec3(1.25, 0., .875);     // half-size of the block in x and z
const float TOP = .8, DTOP = .66, FTOP = -.625, FBOT = -1.125;
const vec3 PORE = vec3(.66, .8, .4);
const vec3 BULB = vec3(-.42, -.42, .4), OPEN = vec3(-.88, .8, .42);
const float SWEAT = 5.5;

vec3 palette(int i) {
  if (i == 0) return vec3(.94, .55, .38);   // epidermis
  if (i == 1) return vec3(1., .80, .64);    // horny layer
  if (i == 2) return vec3(.78, .46, .32);   // basal layer
  if (i == 3) return vec3(1., .42, .56);    // dermis (thin glass)
  if (i == 5) return vec3(1., .80, .24);    // fat
  if (i == 6) return vec3(.42, .24, .12);   // hair
  if (i == 7) return vec3(1., .70, .60);    // follicle sheath
  if (i == 8) return vec3(.90, .16, .18);   // dermal papilla
  if (i == 9) return vec3(1., .86, .30);    // sebaceous gland
  if (i == 10) return vec3(.88, .26, .30);  // arrector pili muscle
  if (i == 11) return vec3(.30, .54, 1.);   // sweat gland
  if (i == 12) return vec3(.96, .20, .17);  // arteriole, capillaries
  if (i == 13) return vec3(.16, .36, 1.);   // venule
  if (i == 14) return vec3(1., .74, .24);   // nerve
  if (i == 15) return vec3(1., .88, .60);   // Pacinian corpuscle
  if (i == 16) return vec3(.62, .86, 1.);   // sweat (glass)
  if (i == 17) return vec3(.72, .07, .05);  // blood cells, arterial (glow)
  if (i == 18) return vec3(.10, .18, .78);  // blood cells, venous (glow)
  return vec3(.50, .82, 1.);                // sweat rising (glow)
}

/** Underside of the epidermis: the wavy dermal-epidermal junction with its papillae. */
float junction(vec3 p) { return DTOP + .04 * sin(p.x * 12. + .5) * sin(p.z * 10.); }

/** Blood cells moving along a segment a\u2192b; phase in world units. */
float cells(vec3 p, vec3 a, vec3 b, float phase, float rc) {
  vec3 ba = b - a; float L = length(ba); vec3 d = ba / L;
  float h = dot(p - a, d);
  float c = (floor((h - phase) / .16) + .5) * .16 + phase;
  return max(length(p - a - d * c) - rc, max(-h, h - L));
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(-.1, -.05, 0.), vec3(1.4, 1.38, 1.02));
  if (bound > .3) return vec2(bound, 0.);
  float side = max(abs(p.x) - BLK.x, abs(p.z) - BLK.z);
  float ph = fract(uTime / SWEAT);

  // Epidermis: peach, with the pale horny layer on top and darker basal cells along the junction (the
  // bands show on the cut faces).
  float jy = junction(p);
  float ytop = TOP + .01 * sin(p.x * 9. + p.z * 4.);
  float epi = max(max(p.y - ytop, jy - p.y) * .85, side);
  epi = smax(epi, -(length(p - PORE) - .045), .02);   // the sweat pore
  vec2 res = vec2(epi, side > -.01 && ytop - p.y < .026 ? 21. : p.y - jy < .032 ? 22. : 20.);

  // Hair shaft leaving the follicle, swaying a little.
  vec3 ax = normalize(OPEN - BULB);
  vec3 hq = p - OPEN;
  hq.xy *= rot(.08 * sin(uTime * 1.1) * clamp(dot(hq, ax), 0., 1.));
  float shaft = sdTaper(hq, -ax * .3, ax * .72 + vec3(-.1, 0., .04), .05, .028);
  res = U(res, vec2(shaft, 26.));

  // A sweat droplet beading on the pore, then drying.
  float drop = smoothstep(.42, .72, ph) * (1. - smoothstep(.84, 1., ph));
  if (drop > .01) res = U(res, vec2(sdSphere(p - PORE - vec3(0., .03 + .05 * drop, 0.), .11 * drop), 56.));

  // Dermis: pink glass.
  float der = max(max(p.y - jy, FTOP - p.y), side);
  res = U(res, vec2(SHELL(der), 83.));

  // Fat: two rows of globules (one per cell, kept inside it) over an inner core.
  vec3 pp = p - vec3(0., -.125, .125);   // cells line up with the block's faces
  vec3 fc = floor(pp / .25);
  vec3 fq = pp - (fc + .5) * .25;
  float fat = length(fq) - .118 + .014 * hash31(fc);
  vec3 fb = vec3(BLK.x, (FTOP - FBOT) * .5, BLK.z);
  vec3 fo = p - vec3(0., (FTOP + FBOT) * .5, 0.);
  fat = min(max(fat, sdBox(fo, fb)), sdBox(fo, fb - .09));
  res = U(res, vec2(fat, 25.));

  if (!gSkipShell || der > res.x) return res;

  // Hair follicle: the sheath around the root, the bulb at its base with the red papilla pushing in.
  float fol = sdCapsule(p, BULB + ax * .12, OPEN - ax * .14, .1);
  fol = smin(fol, sdEllipsoid(p - BULB, vec3(.17, .18, .17)), .07);
  fol = smax(fol, -sdEllipsoid(p - BULB + ax * .1, vec3(.08, .12, .08)), .02);
  res = U(res, vec2(fol, 27.));
  float pap = sdEllipsoid(p - BULB + ax * .07, vec3(.068, .1, .068)) - .008 * sin(uTime * 2.);
  res = U(res, vec2(pap, 28.));
  // Sebaceous gland: lobes on the follicle's lower side; the arrector pili runs from below it up to the
  // junction.
  vec3 sg = BULB + ax * .78 + vec3(.18, -.02, .0);
  float seb = min(min(sdSphere(p - sg, .1), sdSphere(p - sg - vec3(.085, -.095, .03), .082)), sdSphere(p - sg - vec3(.07, .085, -.06), .072));
  res = U(res, vec2(seb, 29.));
  float arr = sdTaper(p, BULB + ax * .4 + vec3(.08, 0., 0.), vec3(-.08, .62, .4), .042, .024);
  res = U(res, vec2(arr, 30.));

  // Sweat gland: a coil deep in the dermis and its duct rising to the pore; sweat rises up the duct.
  vec3 gq = p - vec3(PORE.x, -.4, PORE.z);
  float coil = max(sdHelix(gq, .14, .085, 0., .044), abs(gq.y) - .15);
  coil = smin(coil, sdEllipsoid(gq, vec3(.12, .11, .12)), .05);
  float duct = sdCapsule(p, vec3(PORE.x, -.25, PORE.z), vec3(PORE.x, jy, PORE.z), .032);
  res = U(res, vec2(min(coil, duct), 31.));
  float rise = mix(-.32, .64, smoothstep(0., .42, ph));
  if (ph < .45) res = U(res, vec2(sdSphere(p - vec3(PORE.x, rise, PORE.z), .044 * sin(PI * ph / .45)), 79.));

  // Arteriole and venule across the deep dermis, with capillary loops rising into the papillae.
  float fl = uTime * .3;
  const float ZA = -.2, ZV = .04, YV = -.3, YT = .56;
  float art = sdCapsule(p, vec3(-BLK.x, YV, ZA), vec3(BLK.x, YV, ZA), .065);
  float ven = sdCapsule(p, vec3(-BLK.x, YV, ZV), vec3(BLK.x, YV, ZV), .072);
  float lx = (floor((p.x - .2) / .55 + .5)) * .55 + .2;
  bool loop = abs(lx - .2) < .7 || abs(lx - 1.03) < .1;
  if (abs(lx - .75) < .1) lx = 1.03;
  if (loop) {
    vec3 lq = p - vec3(lx, 0., 0.);
    art = min(art, sdCapsule(lq, vec3(0., YV, ZA), vec3(0., YT, ZA + .02), .036));
    ven = min(ven, sdCapsule(lq, vec3(0., YT, ZV - .02), vec3(0., YV, ZV), .04));
    vec3 tq = lq - vec3(0., YT, (ZA + ZV) * .5);
    float top = max(length(vec2(length(tq.yz) - .1, tq.x)) - .036, -tq.y);
    art = min(art, max(top, tq.z));
    ven = min(ven, max(top, -tq.z));
  }
  res = U(res, vec2(art, 32.));
  res = U(res, vec2(ven, 33.));
  if (min(art, ven) < res.x + .02) {
    float c = cells(p, vec3(-BLK.x, YV, ZA), vec3(BLK.x, YV, ZA), fl, .04);
    float vc = cells(p, vec3(BLK.x, YV, ZV), vec3(-BLK.x, YV, ZV), fl, .044);
    if (loop) {
      vec3 lq = p - vec3(lx, 0., 0.);
      c = min(c, cells(lq, vec3(0., YV, ZA), vec3(0., YT, ZA + .02), fl, .024));
      vc = min(vc, cells(lq, vec3(0., YT, ZV - .02), vec3(0., YV, ZV), fl, .026));
    }
    res = U(res, vec2(c, 77.));
    res = U(res, vec2(vc, 78.));
  }

  // Sensory nerve near the front: free endings reaching up to the epidermis, a Meissner corpuscle just
  // under it, and a layered Pacinian corpuscle deep down.
  const float ZN = .64, YN = -.14;
  float nv = sdCapsule(p, vec3(-BLK.x, YN, ZN), vec3(BLK.x, YN + .04, ZN), .044);
  nv = min(nv, sdCapsule(p, vec3(-.2, YN, ZN), vec3(-.26, .64, ZN + .08), .018));
  nv = min(nv, sdCapsule(p, vec3(1., YN + .03, ZN), vec3(1.06, .64, ZN - .1), .018));
  nv = min(nv, sdCapsule(p, vec3(.3, YN + .01, ZN), vec3(.26, .5, ZN + .03), .02));
  nv = min(nv, sdEllipsoid(p - vec3(.26, .57, ZN + .03), vec3(.055, .085, .055)));
  nv = min(nv, sdCapsule(p, vec3(.0, YN, ZN), vec3(.02, -.3, ZN + .02), .022));
  res = U(res, vec2(nv, 34.));
  res = U(res, vec2(sdEllipsoid(p - vec3(.02, -.43, ZN + .02), vec3(.11, .17, .11)), 35.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 19.5 && m < 22.5) return .003 * sin(p.x * 70. + 4. * noise3(p * 6.)) * sin(p.z * 60.) + .002 * noise3(p * 40.);
  if (m > 24.5 && m < 25.5) return .002 * noise3(p * 30.);
  if (m > 25.5 && m < 26.5) return .002 * sin((p.y - p.x * .4) * 150. - uTime * 1.2);
  if (m > 34.5 && m < 35.5) return .005 * sin(length((p - vec3(.02, -.43, .66)) * vec3(1., .62, 1.)) * 140.);
  if (m > 82.5 && m < 83.5) return .001 * noise3(p * 40.);
  return 0.;
}`};export{e as scene};
