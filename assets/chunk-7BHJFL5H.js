import"./chunk-KR4ZLU5I.js";var e={id:"N19",cam:[0,.9,6.3],target:[0,0,0],fov:2.5,floor:-1.95,ring:1.75,poster:5.2,glsl:`
const float FILL_T = 9.;
float gFill;

vec3 palette(int i) {
  if (i == 0) return vec3(.55, .07, .09);   // kidney capsule (glass)
  if (i == 1) return vec3(.96, .20, .17);   // arteries (glass)
  if (i == 2) return vec3(.16, .36, 1.);    // veins (glass)
  if (i == 3) return vec3(1., .86, .36);    // bladder wall (glass)
  if (i == 4) return vec3(.64, .17, .15);   // renal cortex
  if (i == 5) return vec3(.42, .05, .09);   // medullary pyramids
  if (i == 6) return vec3(1., .88, .46);    // calyces, pelvis, ureters, urethra
  if (i == 7) return vec3(1., .74, .16);    // urine
  if (i == 8) return vec3(1., .56, .12);    // adrenal glands
  if (i == 9) return vec3(.72, .07, .05);   // red blood cells (glowing)
  if (i == 10) return vec3(.10, .18, .78);  // blood cells in veins (glowing)
  return vec3(1., .62, .10);                // drops of urine (glowing)
}

/**
 * Kidney-local frame for the kidney on p's side (mirrored): x lateral, y along the long axis, z forward.
 * Local units are world units divided by KS; multiply local distances by KS.
 */
const float KS = 1.18;
vec3 kidneyLocal(vec3 p) {
  vec3 k = (vec3(abs(p.x), p.y, p.z) - vec3(.98, p.x > 0. ? .3 : .14, -.06)) / KS;
  k.xy *= rot(-.2);   // upper pole leans toward the midline
  k.xz *= rot(.35);   // hilum turned a little forward
  return k;
}
float bean(vec3 k) {
  float d = sdEllipsoid(k, vec3(.36, .6, .27));
  return smax(d, -sdEllipsoid(k - vec3(-.44, -.03, .02), vec3(.19, .25, .32)), .1);
}
const vec3 SINUS = vec3(-.12, -.02, 0.);
/** Apex (papilla) and base of medullary pyramid j of 8, fanned around the renal sinus. */
void pyramid(float j, out vec3 a, out vec3 b) {
  float th = -2.45 + j * .7;
  vec2 u = vec2(cos(th), sin(th));
  a = SINUS + vec3(u * vec2(.13, .19), 0.);
  b = vec3(u * vec2(.26, .45), -.01);
}

/** Blood cells flowing along a vessel segment a\u2192b of radius R; phase in world units. */
float cells(vec3 p, vec3 a, vec3 b, float R, float phase, float rc) {
  vec3 ba = b - a; float L = length(ba); vec3 d = ba / L;
  vec3 pa = p - a; float h = dot(pa, d);
  float id = floor((h - phase) / .17);
  float c = (id + .5) * .17 + phase;
  vec3 e1 = normalize(cross(d, vec3(.31, .87, .38))), e2 = cross(d, e1);
  float an = hash11(id * 7.31 + L) * TAU;
  vec3 ctr = a + d * c + (e1 * cos(an) + e2 * sin(an)) * R * .42;
  return max(length(p - ctr) - rc, max(-h, h - L));
}

// Great vessels and renal vessels.
const vec3 AOT = vec3(.16, 1.62, -.26), AOB = vec3(.16, -.92, -.26);
const vec3 VCT = vec3(-.2, 1.62, -.1), VCB = vec3(-.2, -1.0, -.1);
const vec3 RRA_A = vec3(.16, .3, -.26), RRA_B = vec3(-.26, .2, -.5), RRA_C = vec3(-.64, .06, 0.);
const vec3 LRA_A = vec3(.16, .32, -.26), LRA_B = vec3(.64, .22, 0.);
const vec3 LRV_A = vec3(.6, .27, .07), LRV_B = vec3(-.2, .25, -.1);
const vec3 RRV_A = vec3(-.6, .11, .07), RRV_B = vec3(-.2, .18, -.1);
const vec3 BLAD = vec3(0., -1.3, .16);

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., -.05, -.04), vec3(1.42, 1.85, .52));
  if (bound > .3) return vec2(bound, 0.);
  gFill = fract(uTime / FILL_T);
  gFill = gFill < .82 ? smoothstep(0., .82, gFill) : 1. - smoothstep(.82, 1., gFill);

  // Kidneys: dark red glass.
  vec3 k = kidneyLocal(p);
  float kb = bean(k) * KS;
  vec2 res = vec2(SHELL(kb), 40.);

  // Adrenal glands sitting on the upper poles: pyramidal on the right, crescent-shaped on the left.
  if (kb < .5) {
    float ad;
    if (p.x < 0.) {
      vec3 ak = k - vec3(-.06, .5, -.03); ak.z *= 1.9;
      ad = sdRoundCone(ak, vec3(0.), vec3(.02, .22, 0.), .16, .035) * .5;
    } else {
      vec3 ak = k - vec3(-.2, .4, -.03); ak.xy *= rot(.5);
      ad = sdEllipsoid(ak, vec3(.11, .29, .08));
    }
    ad = smax(ad * KS, -(kb - .01), .05);
    res = U(res, vec2(ad * .9, 28.));
  }

  // Renal pelvis leaving the hilum and the ureter running down to the bladder (always drawn, so the part
  // outside the kidney shows); drops of urine travel down it.
  vec3 m = vec3(abs(p.x), p.y, p.z);
  float ky = p.x > 0. ? .3 : .14;
  vec2 ub = sdBezier(m, vec3(.7, ky - .17, 0.), vec3(.4, -.6, -.1), vec3(.2, -1.2, -.02));
  float drop = wave(ub.y * 1.45, uTime + (p.x > 0. ? .9 : 0.), .32, .72, .055);
  float ureter = ub.x - .034 - .022 * drop;
  float pelvis = sdEllipsoid(k - vec3(-.24, -.1, -.02), vec3(.13, .15, .08));
  pelvis = smin(pelvis, sdCapsule(k, vec3(-.26, -.12, -.02), vec3(-.36, -.24, -.04), .045), .06) * KS;
  res = U(res, vec2(min(ureter, pelvis), drop > .45 && ub.y > .18 ? 71. : 26.));

  // Aorta and its branches (red glass); vena cava and its tributaries (blue glass).
  float aor = sdCapsule(p, AOB, AOT, .11), cav = sdCapsule(p, VCB, VCT, .125);
  float ra1 = 1e5, ra2 = 1e5, rv1 = 1e5, rv2 = 1e5, ilA = 1e5, ilV = 1e5;
  if (abs(p.x) < 1.) {
    ra1 = sdBezier(p, RRA_A, RRA_B, RRA_C).x - .055;
    ra2 = sdCapsule(p, LRA_A, LRA_B, .055);
    rv1 = sdCapsule(p, RRV_A, RRV_B, .068);
    rv2 = sdCapsule(p, LRV_A, LRV_B, .068);
    vec3 ia = vec3(.16 + abs(p.x - .16), p.y, p.z);
    ilA = sdTaper(ia, AOB, vec3(.52, -1.48, -.38), .1, .07);
    vec3 iv = vec3(-.2 - abs(p.x + .2), p.y, p.z);
    ilV = sdTaper(iv, VCB + vec3(0., .04, 0.), vec3(-.62, -1.52, -.34), .11, .075);
  }
  float art = smin(aor, min(min(ra1, ra2), ilA), .05);
  float vei = smin(cav, min(min(rv1, rv2), ilV), .05);
  res = U(res, vec2(SHELL(art), 41.));
  res = U(res, vec2(SHELL(vei), 42.));

  // Bladder: yellow glass that swells a little as it fills.
  vec3 br = vec3(.36, .3, .3) * (1. + .07 * gFill);
  float blad = sdEllipsoid(p - BLAD, br);
  blad = smin(blad, sdCapsule(p, BLAD, BLAD + vec3(0., .3, .08), .06), .12);
  res = U(res, vec2(SHELL(blad), 43.));
  float ure = sdCapsule(p, BLAD - vec3(0., .22, 0.), vec3(0., -1.76, .17), .035);
  res = U(res, vec2(ure, 26.));

  // Everything below lies inside a shell.
  if (!gSkipShell) return res;

  // Inside the kidney: a coronal section through the cortex, with the pyramids, calyces and pelvis.
  if (kb < res.x) {
    float sect = max(kb + .012, (k.z + .02) * KS);
    res = U(res, vec2(sect, 24.));
    float th = atan(k.y / .6, k.x / .36);
    float j0 = clamp(floor((th + 2.45) / .7 + .5), 0., 7.);
    float j1 = clamp(j0 + ((th + 2.45) / .7 + .5 - j0 > .5 ? 1. : -1.), 0., 7.);
    vec3 a0, b0, a1, b1;
    pyramid(j0, a0, b0); pyramid(j1, a1, b1);
    float pyr = min(sdRoundCone(k, a0, b0, .028, .088), sdRoundCone(k, a1, b1, .028, .088)) * KS;
    res = U(res, vec2(max(pyr, kb + .03), 25.));
    // Minor calyces cup each papilla and drain through two major calyces into the pelvis.
    vec3 mj0 = j0 < 3.5 ? vec3(-.1, -.2, -.01) : vec3(-.1, .18, -.01);
    vec3 mj1 = j1 < 3.5 ? vec3(-.1, -.2, -.01) : vec3(-.1, .18, -.01);
    vec3 d0 = normalize(a0 - SINUS), d1 = normalize(a1 - SINUS);
    float cal = min(sdSphere(k - a0 + d0 * .025, .048), sdSphere(k - a1 + d1 * .025, .048));
    cal = smin(cal, min(sdCapsule(k, a0 - d0 * .05, mj0, .024), sdCapsule(k, a1 - d1 * .05, mj1, .024)), .03);
    cal = smin(cal, min(sdCapsule(k, vec3(-.1, -.2, -.01), vec3(-.22, -.1, -.02), .04), sdCapsule(k, vec3(-.1, .18, -.01), vec3(-.22, -.08, -.02), .04)), .05);
    res = U(res, vec2(cal * KS, 26.));
  }

  // Blood cells in the vessels: down the aorta, up the vena cava, out to the kidneys and back.
  float fl = uTime * .45;
  if (art < res.x) {
    float c = cells(p, AOT, AOB, .11, fl, .042);
    c = min(c, cells(p, LRA_A, LRA_B, .055, fl, .028));
    vec3 mid = bezier(RRA_A, RRA_B, RRA_C, .5);
    c = min(c, cells(p, RRA_A, mid, .05, fl, .028));
    c = min(c, cells(p, mid, RRA_C, .05, fl, .028));
    res = U(res, vec2(c, 69.));
  }
  if (vei < res.x) {
    float c = cells(p, VCB, VCT, .125, fl, .044);
    c = min(c, cells(p, LRV_A, LRV_B, .068, fl, .03));
    c = min(c, cells(p, RRV_A, RRV_B, .068, fl, .03));
    res = U(res, vec2(c, 70.));
  }
  // Urine in the bladder, its level rising through the cycle.
  if (blad < res.x) {
    float level = BLAD.y - .25 + .42 * gFill;
    float urine = max(sdEllipsoid(p - BLAD, br - .035), p.y - level - .006 * sin(p.x * 18. + uTime * 2.));
    res = U(res, vec2(urine, 27.));
  }
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 24.5 && m < 25.5) {
    vec3 k = kidneyLocal(p) - SINUS;
    return .003 * sin(atan(k.y, k.x) * 90.);
  }
  if (m > 23.5 && m < 24.5) return .002 * noise3(p * 70.);
  if (m > 27.5 && m < 28.5) return .004 * noise3(p * 30.);
  if (m > 39.5 && m < 40.5) return .0015 * noise3(p * 25.);
  return 0.;
}`};export{e as scene};
