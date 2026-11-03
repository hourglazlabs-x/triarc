import"./chunk-KR4ZLU5I.js";var r=[[-.86,-.32,-.28,-.05,1.05,0],[-.66,.18,-.12,.1,1.15,1.7],[.52,-.3,.2,-.12,1.15,3.1],[.9,.24,.3,.06,.95,4.4],[-.12,-.48,-.05,-.2,1.1,2.4]],e=t=>t.toFixed(3),o=r.map(([t,i,s,a])=>`vec4(${e(t)}, ${e(i)}, ${e(s)}, ${e(a)})`).join(", "),n=r.map(([,,,,t,i])=>`vec2(${e(t)}, ${e(i)})`).join(", "),l={id:"N27",cam:[-2,1.2,4.35],target:[0,-.18,0],fov:2.45,floor:-1.65,ring:1.75,poster:2.6,orbit:{az:[-80,80]},glsl:`
const vec3 BLK = vec3(1.2, 0., .62);       // half-size of the block in x and z
const float BOT = -1.32, DTOP = -.1;
const vec4 HP[5] = vec4[5](${o});   // surface x, z; lean x, z
const vec2 HL[5] = vec2[5](${n});   // length above the skin, sway phase
// The opened follicle: opening on the surface, axis, and the plane that cuts it (normal toward the viewer).
const vec3 MO = vec3(.06, 0., .36);
const vec3 MD = vec3(.164, .985, .055);    // normalised (.17, 1., .056)
const float MDEPTH = 1.;

vec3 palette(int i) {
  if (i == 0) return vec3(.92, .52, .36);   // epidermis
  if (i == 1) return vec3(1., .38, .55);    // dermis (thin glass)
  if (i == 2) return vec3(.40, .22, .10);   // hair
  if (i == 3) return vec3(1., .86, .56);    // inner root sheath
  if (i == 4) return vec3(1., .60, .48);    // outer root sheath
  if (i == 5) return vec3(.88, .34, .40);   // connective tissue sheath
  if (i == 6) return vec3(1., .44, .58);    // bulb (matrix)
  if (i == 7) return vec3(.88, .08, .13);   // dermal papilla
  if (i == 8) return vec3(1., .84, .28);    // sebaceous gland
  if (i == 9) return vec3(.86, .24, .30);   // arrector pili muscle
  if (i == 10) return vec3(1., .74, .64);   // follicles of the other hairs
  return vec3(1., .62, .74);                // new cells rising from the bulb (glow)
}

/** Unit vector across the cut, toward the viewer, and the in-plane side direction. */
vec3 cutN() { return normalize(vec3(-.42, 0., .9) - MD * dot(vec3(-.42, 0., .9), MD)); }

/** Hair shaft from base along dir, bending a little with its sway. */
float shaft(vec3 p, vec3 base, vec3 dir, float len, float r0, float ph) {
  vec3 q = p - base;
  float h = clamp(dot(q, dir), 0., len);
  q.xy *= rot(.07 * sin(uTime * 1.05 + ph) * h);
  q.zy *= rot(.04 * sin(uTime * .8 + ph * 1.3) * h);
  return sdTaper(q, -dir * .12, dir * len, r0, r0 * .5);
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., -.05, 0.), vec3(1.42, 1.4, .98));
  if (bound > .3) return vec2(bound, 0.);
  float side = max(abs(p.x) - BLK.x, abs(p.z) - BLK.z);
  vec3 nc = cutN();
  float cut = dot(p - MO, nc);   // > 0 on the viewer's side of the opened follicle

  // Epidermis with the openings of the follicles.
  float top = .012 * sin(p.x * 8. + p.z * 5.);
  float epi = max(max(p.y - top, DTOP - p.y) * .9, side);
  epi = smax(epi, -(length(p - MO) - .06), .03);
  vec2 res = vec2(epi, 20.);

  // Hair shafts: the other hairs, then the one from the opened follicle.
  float hs = 1e5;
  for (int i = 0; i < 5; i++) {
    vec3 base = vec3(HP[i].x, 0., HP[i].y);
    vec3 dir = normalize(vec3(HP[i].z, 1., HP[i].w));
    if (length(p - base - dir * HL[i].x * .5) > HL[i].x * .5 + .3) continue;
    hs = min(hs, shaft(p, base, dir, HL[i].x, .036, HL[i].y));
  }
  hs = min(hs, shaft(p, MO, MD, 1.2, .048, 5.3));
  res = U(res, vec2(hs, 22.));

  // Dermis: thin pink glass.
  float der = max(max(p.y - DTOP, BOT - p.y), side);
  res = U(res, vec2(SHELL(der), 81.));
  if (!gSkipShell || der > res.x) return res;

  // Follicles of the other hairs: sheaths reaching down to their bulbs.
  for (int i = 0; i < 5; i++) {
    vec3 base = vec3(HP[i].x, DTOP, HP[i].y);
    vec3 dir = normalize(vec3(HP[i].z, 1., HP[i].w));
    vec3 b = base - dir * (.82 + .1 * sin(float(i) * 2.3));
    float f = smin(sdCapsule(p, base, b, .06), sdSphere(p - b, .1), .05);
    res = U(res, vec2(f, 30.));
  }

  // The opened follicle, cut lengthwise: the hair in the middle, then the inner and outer root sheaths and
  // the connective tissue sheath; the bulb at the base with the red papilla pushing in from below.
  vec3 bulbC = MO - MD * MDEPTH;
  vec3 q = p - MO;
  float ax = dot(q, -MD);                          // depth along the follicle
  float rad = length(q + MD * ax);                 // distance from its axis
  float fol = sdCapsule(p, MO + MD * .04, bulbC + MD * .14, .19);
  float beatP = beat(uTime, 2.2, 0.);
  float bulb = sdEllipsoid(p - bulbC, vec3(.31, .33, .31));
  float pap = sdEllipsoid(p - bulbC + MD * .08, vec3(.12, .185, .12) * (1. + .07 * beatP));
  float fb = max(smin(fol, bulb, .09), cut);
  float m = rad < .056 && ax < MDEPTH - .14 ? 22. : rad < .09 ? 23. : rad < .155 ? 24. : 25.;
  if (bulb < .002 && ax > MDEPTH - .42) m = rad < .06 && ax < MDEPTH - .16 ? 22. : 26.;
  if (pap < .002) m = 27.;
  res = U(res, vec2(fb, m));
  // The papilla and the hair stand a little proud of the cut.
  res = U(res, vec2(max(pap, cut - .02), 27.));
  res = U(res, vec2(max(max(rad - .054, ax - MDEPTH + .14), max(cut - .014, -ax - .02)), 22.));
  // New cells rising from the matrix into the hair.
  float cy = fract(uTime / 2.4);
  float cells = 1e5;
  for (int k = 0; k < 3; k++) {
    float u = fract(cy + float(k) / 3.);
    float a = MDEPTH - .2 - u * .55;
    cells = min(cells, length(q + MD * a - nc * .03 + cross(nc, MD) * .03 * sin(float(k) * 2.1)) - .022 * sin(PI * u));
  }
  res = U(res, vec2(cells, 71.));

  // Sebaceous gland: lobes beside the upper follicle, cut with it, its duct opening into the canal.
  vec3 sd = normalize(cross(nc, MD));
  vec3 sg = MO - MD * .36 + sd * .3;
  float seb = min(min(sdSphere(p - sg, .135), sdSphere(p - sg - MD * .12 + sd * .1, .105)), sdSphere(p - sg + MD * .12 + sd * .09, .095));
  seb = smin(seb, sdCapsule(p, sg, MO - MD * .27 + sd * .1, .045), .03);
  res = U(res, vec2(max(seb, cut - .008), 28.));
  // Arrector pili: from the follicle below the gland up to the underside of the epidermis.
  float arr = sdTaper(p, MO - MD * .58 + sd * .16 - nc * .02, MO + sd * .72 + vec3(0., DTOP - .03, 0.) - nc * .04, .055, .034);
  res = U(res, vec2(arr, 29.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  // Cuticle scales: overlapping edges that move outward along the hair as it grows.
  if (m > 21.5 && m < 22.5) return .0035 * fract(p.y * 55. + 1.6 * noise3(p * vec3(14., 3., 14.)) - uTime * .35);
  if (m > 27.5 && m < 28.5) return .006 * (1. - cellular(p * 38.));
  if (m > 28.5 && m < 29.5) return .002 * sin(dot(p, vec3(.6, .5, .1)) * 150.);
  if (m > 19.5 && m < 20.5) return .0025 * sin(p.x * 60. + 3. * noise3(p * 5.)) * sin(p.z * 55.) + .0015 * noise3(p * 40.);
  return 0.;
}`};export{l as scene};
