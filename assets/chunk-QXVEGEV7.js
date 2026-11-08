import{a as t}from"./chunk-4QM5HSGV.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var r={id:"D08-plywood",cam:[1.63,1.2,4.03],target:[0,-.3,0],floor:-1.6,ring:2,accent:e(t.D08),poster:1.5,orbit:{az:[-80,80]},parts:[{name:"veneer sheet",inside:!0,view:{az:-12,el:-4,zoom:.6}},{name:"glue layer",inside:!0,view:{az:-10,el:-2,zoom:.6}},{name:"crossed grain",inside:!0,view:{az:-14,el:4,zoom:.62}},{name:"relief cuts",view:{az:10,el:22,zoom:.8}},{name:"plaster mold",inside:!0,view:{az:-12,el:0,zoom:.7}},{name:"heating coils",inside:!0,view:{az:-12,el:8,zoom:.64}},{name:"rubber membrane",inside:!0,view:{az:-12,el:-2,zoom:.7}},{name:"bicycle pump",view:{az:-66,el:-2,zoom:.95}},{name:"molded shell",view:{az:12,el:12,zoom:.85}},{name:"trimmed edge",view:{az:30,el:6,zoom:.8}},{name:"heated platens",view:{az:36,el:-6,zoom:.85}}],glsl:`
const vec3 PC = vec3(-.38, -.95, 0.);   // the box, on the bench (y -.95)
const vec3 MC = vec3(-1.22, -.95, 0.);  // the pump
const vec3 SC = vec3(.15, .32, -.02);   // the shell, out of the mold
const vec3 FC = vec3(.72, -.95, 0.);    // the production press
const float T = .016;                   // one ply
const float G = .008;                   // one glue film
const float HP = .012;                  // ply and glue centres alternate every (T + G) / 2
const float TH = .112;                  // the stack: five plies and four glue films
const float LID = .62;                  // the top of the box's inside, over the bench
const float FLAT = .375;                // the flat stack's underside before pressing: the mold's highest point

vec3 palette(int i) {
  if (i == 0) return vec3(1., .84, .58);    // veneer sheet
  if (i == 1) return vec3(1., .64, .24);    // glue layer
  if (i == 2) return vec3(.96, .76, .5);    // crossed grain
  if (i == 3) return vec3(1., .44, .4);     // relief cuts
  if (i == 4) return vec3(.94, .95, .92);   // plaster mold
  if (i == 5) return vec3(1., .46, .22);    // heating coils
  if (i == 6) return vec3(.58, .82, 1.);    // rubber membrane
  if (i == 7) return vec3(.74, .8, .9);     // bicycle pump
  if (i == 8) return vec3(1., .78, .5);     // molded shell
  if (i == 9) return vec3(1., .92, .74);    // trimmed edge
  return vec3(.72, .78, .9);                // heated platens
}

float gCurve, gCuts;

float sdRect(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
/** The mold's face, a generic shallow saddle: the ends curl up, most sharply at the tips; front and back fall away. */
float moldY(vec2 q) { float x2 = q.x * q.x; return .25 + .35 * x2 + .6 * x2 * x2 - .55 * q.y * q.y; }
/** The relief cuts in the sheet's plane: at each curled end a keyhole on the centre line and two slits, sawn in from
 * the edge (k: how far they are cut, 0 ... 1). */
float relief(vec2 q, float k) {
  if (k <= 0.) return 1e5;
  float ax = abs(q.x), i0 = mix(.54, .3, k), i1 = mix(.54, .4, k);
  float key = min(sdRect(vec2(ax - (i0 + .54) * .5, q.y), vec2((.54 - i0) * .5, .011)), length(vec2(ax - i0, q.y)) - .034 * k);
  return min(key, sdRect(vec2(ax - (i1 + .54) * .5, abs(q.y) - .17), vec2((.54 - i1) * .5, .008)));
}

/** Layer j of the stack as (distance, material): even j a ply (0 the first sheet, then sheets laid crosswise), odd j a
 * glue film. h: height over the first ply's middle; pitch: spacing of the layer centres (wider when taken apart). */
vec2 lay(vec3 q, float h, float pitch, float j, float cut) {
  float g = j < .5 ? built(0) : j < 1.5 ? built(1) : clamp(built(2) * 7. - j + 2., 0., 1.);
  if (g <= 0.) return vec2(1e5, 0.);
  bool ply = mod(j, 2.) < .5;
  float d = (abs(h - j * pitch) - (ply ? T : G) * .5) * .8;
  // the grain, as grooves: along the length in sheets 0, 2, 4, across it in sheets 1, 3
  if (ply) d += .003 * (1. - smoothstep(0., .009, abs(fract((mod(j, 4.) < .5 ? q.z : q.x) * 25.) - .5) * .04));
  d = max(max(d, sdRect(q.xz, vec2(.5, .34))), q.x - mix(-.52, .52, g));
  return -cut > d ? vec2(-cut, 23.) : vec2(d, j < .5 ? 20. : ply ? 22. : 21.);
}

vec2 press(vec3 p) {
  // 0-3 \xB7 the stack: the two layers either side of the point (plies and glue films are evenly spaced).
  vec3 q = p - PC;
  float pitch = HP + .045 * uApart;
  float h = q.y - mix(FLAT, moldY(q.xz), gCurve) - .04 * uApart - T * .5;
  vec2 res = vec2(max(abs(h - 4. * pitch) - 4. * pitch - T, sdRect(q.xz, vec2(.5, .34))) * .8, 0.);
  if (res.x < .03) {
    float j = clamp(floor(h / pitch), 0., 7.), cut = relief(q.xz, gCuts);
    res = vec2(1e5, 0.);
    for (int k = ZERO; k < 2; k++) res = U(res, lay(q, h, pitch, j + float(k), cut));
    res.x = cutaway(res.x, q.z);
  }
  // 4 \xB7 plaster mold, cast in the lower half of the box, its face the saddle (translucent, so the coils show).
  q = p - PC - apart(vec3(0., -.3, 0.));
  float d = max(sdRect(q.xz, vec2(.5, .34)), max(.03 - q.y, (q.y - moldY(q.xz)) * .8));
  res = U(res, vec2(SHELL(cutaway(rise(d, 4, q.y, .03, .4), q.z)), 44.));
  if (built(4) > 0.) {
    // the box's lower half (not a part): a tray with ears for the bolts
    d = max(sdBox(q - vec3(0., .07, 0.), vec3(.53, .07, .37)), -sdBox(q - vec3(0., .12, 0.), vec3(.5, .09, .34)));
    d = min(d, sdBox(vec3(abs(q.x) - .575, q.y - .125, abs(q.z) - .3), vec3(.045, .015, .04)));
    res = U(res, vec2(cutaway(rise(d, 4, q.y, 0., .14), q.z), 4.));
  }
  // 5 \xB7 heating coils: runs every .085 just under the face, joined by U-bends at alternate ends; laid in along the mold.
  if (built(5) > 0.) {
    q = p - PC - apart(vec3(0., -.08, 0.));
    float my = moldY(q.xz) - .045;
    d = max((abs(q.y - my) - .045) * .75, sdRect(q.xz, vec2(.45, .33)));
    if (d < .03) {
      float xr = q.x - clamp(floor(q.x / .085 + .5), -5., 5.) * .085;
      float run = max(length(vec2(xr, (q.y - moldY(vec2(q.x - xr, q.z)) + .045) * .85)) - .011, abs(q.z) - .27);
      float off = q.z > 0. ? 4.5 : 3.5;
      float xc = (clamp(floor((q.x / .085 + off) * .5 + .5), 0., 4.) * 2. - off) * .085;
      float bend = length(vec2(length(vec2(q.x - xc, max(abs(q.z) - .27, 0.))) - .0425, (q.y - my) * .85)) - .011;
      d = cutaway(max(min(run, bend), q.x - mix(-.5, .5, built(5))), q.z);
    }
    res = U(res, vec2(d, 65.));
  }
  if (built(6) > 0.) {
    // the box's upper half (not a part), bolted to the lower at the corners; it comes down as the box is shut
    float down = .25 * (1. - built(6));
    q = p - PC - apart(vec3(0., .82, 0.)) - vec3(0., down, 0.);
    d = max(sdBox(q - vec3(0., LID - .03, 0.), vec3(.53, .07, .37)), -sdBox(q - vec3(0., LID - .12, 0.), vec3(.5, .12, .34)));
    vec3 bq = vec3(abs(q.x) - .575, q.y, abs(q.z) - .3);
    d = min(d, sdBox(bq - vec3(0., LID - .085, 0.), vec3(.045, .015, .04)));
    d = min(d, min(sdCylinder(bq - vec3(0., .331, 0.), .243, .012), sdCylinder(vec3(bq.x, abs(bq.y - .331) - .231, bq.z), .012, .026)));
    res = U(res, vec2(cutaway(d, q.z), 4.));
    // 6 \xB7 rubber membrane: a bag in the upper half; the pump blows it down onto the stack (its underside follows it).
    q = p - PC - apart(vec3(0., .62, 0.)) - vec3(0., down, 0.);
    d = sdBox(q - vec3(0., .43, 0.), vec3(.5, .2, .34));
    if (d < .03) {
      float mb = mix(LID - .035, mix(FLAT, moldY(q.xz), gCurve) + TH + .004, built(7));
      d = cutaway(abs(max(sdRoundBox(q - vec3(0., .4, 0.), vec3(.495, .218, .335), .05), (mb - q.y) * .8)) - .005, q.z);
    }
    res = U(res, vec2(d, 26.));
  }
  return res;
}

/** 7 \xB7 bicycle pump: a plain floor pump (barrel, piston, rod, handle, foot) and its hose into the box's upper half. */
vec2 pump(vec3 p) {
  vec3 m = p - MC - apart(vec3(-.25, 0., 0.));
  float d = sdBox(m - vec3(0., .012, 0.), vec3(.13, .012, .045));
  d = min(d, max(abs(length(m.xz) - .038) - .004, abs(m.y - .345) - .3));
  d = min(d, sdCylinder(m - vec3(0., .05, 0.), .016, .046));
  d = min(d, max(sdCylinder(m - vec3(0., .648, 0.), .009, .045), .013 - length(m.xz)));
  d = min(d, sdCylinder(m - vec3(0., .5, 0.), .012, .034));
  d = min(d, sdCylinder(m - vec3(0., .66, 0.), .16, .008));
  d = min(d, sdCapsule(m, vec3(0., .82, -.11), vec3(0., .82, .11), .02));
  float h = sdBox(m - vec3(.19, .3, 0.), vec3(.15, .3, .02));
  d = min(d, h > .02 ? h : sdBezier(m, vec3(.05, .04, 0.), vec3(.24, .0, 0.), vec3(.32, .58, 0.)).x - .012);
  return vec2(cutaway(rise(d, 7, m.y, 0., .86), m.z), 27.);
}

/** 8 \xB7 molded shell, out of the mold, and 9 \xB7 its trimmed edge: sawn to the finished outline and sanded round. */
vec2 shell(vec3 p) {
  float b8 = built(8);
  if (b8 <= 0.) return vec2(1e5, 0.);
  vec3 s = p - mix(PC + vec3(0., .4, 0.), SC, b8) - apart(vec3(.3, .12, 0.));
  float cz = s.z, bound = length(s) - .7;
  if (bound > .1) return vec2(bound, 0.);
  s.yz *= rot(-.6 * b8); s.xy *= rot(.18 * b8);
  float b9 = built(9), rr = .16 * b9, R = .035 * b9, ring = b9 > 0. ? .04 : 0.;
  float n = (s.y - moldY(s.xz) + .25) * .8;
  float o = sdRect(s.xz, mix(vec2(.5, .34), vec2(.46, .3), b9) - rr) - rr;
  float cut = relief(s.xz, 1.);
  vec2 w = vec2(o + R, abs(n) - TH * .5 + R);
  float body = max(length(max(w, 0.)) + min(max(w.x, w.y), 0.) - R, o + ring);
  vec2 r = -cut > body ? vec2(-cut, 23.) : vec2(body, 28.);
  if (b9 > 0.) {
    // the band; apart, it lifts off the shell. The plies show in the sanded edge.
    float ne = n - .1 * uApart;
    w = vec2(o + R, abs(ne) - TH * .5 + R);
    float e = max(length(max(w, 0.)) + min(max(w.x, w.y), 0.) - R, -(o + ring));
    e += .002 * (1. - smoothstep(0., .004, abs(fract((ne / .8 + TH * .5 - T - G * .5) / (T + G) + .5) - .5) * (T + G)));
    r = U(r, -cut > e ? vec2(-cut, 23.) : vec2(e, 29.));
  }
  r.x = cutaway(r.x, cz);
  return r;
}

/** 10 \xB7 heated platens: two thick plates whose dies are a saddle, heaters in channels through them, in a plain press. */
vec2 platens(vec3 p) {
  if (built(10) <= 0.) return vec2(1e5, 0.);
  vec3 f = p - FC;
  float s10 = .8 * f.x * f.x - .9 * f.z * f.z;
  float xr = f.x - clamp(floor(f.x / .15 + .5), -1., 1.) * .15;
  // the press frame (not a part): four columns between a base and a crown
  float fr = min(sdCylinder(vec3(abs(f.x) - .345, f.y - .47, abs(f.z) - .245), .46, .014), sdBox(vec3(f.x, abs(f.y - .47) - .45, f.z), vec3(.38, .02, .28)));
  vec2 res = vec2(cutaway(rise(fr, 10, f.y, 0., .95), f.z), 4.);
  float bp = sdBox(f - vec3(0., .49 + .05 * uApart, 0.), vec3(.31, .32 + .15 * uApart, .23));
  if (bp > .03) return U(res, vec2(bp, 0.));
  vec3 lo = f - apart(vec3(0., -.1, 0.)), up = f - apart(vec3(0., .2, 0.));
  float lower = max(max(sdBox(lo - vec3(0., .35, 0.), vec3(.3, .15, .22)), (lo.y - .42 - s10) * .8), .02 - length(vec2(xr, lo.y - .28)));
  float upper = max(max(sdBox(up - vec3(0., .64, 0.), vec3(.3, .16, .22)), (.52 + s10 - up.y) * .8), .02 - length(vec2(xr, up.y - .7)));
  res = U(res, vec2(cutaway(rise(min(lower, upper), 10, f.y, 0., .82), f.z), 30.));
  float rods = max(min(length(vec2(xr, lo.y - .28)), length(vec2(xr, up.y - .7))) - .011, abs(f.z) - .218);
  res = U(res, vec2(cutaway(rise(rods, 10, f.y, 0., .82), f.z), 70.));
  // a sheet of veneer on the lower die (part 0's material: the lesson names it with the platens)
  float ven = max((abs(f.y - .435 - s10) - .015) * .8, sdRect(f.xz, vec2(.29, .21)));
  res = U(res, vec2(cutaway(rise(ven, 10, f.y, .3, .55), f.z), 20.));
  return res;
}

vec2 map(vec3 p) {
  gCurve = built(7); gCuts = built(3);
  vec2 res = vec2(1e5, 0.);
  float b = sdBox(p - PC - vec3(0., .42 + .26 * uApart, 0.), vec3(.66, .5 + .56 * uApart, .42));
  res = U(res, b < .05 ? press(p) : vec2(b, 0.));
  b = sdBox(p - MC - vec3(.11 - .25 * uApart, .43, 0.), vec3(.26, .46, .13));
  res = U(res, b < .05 ? pump(p) : vec2(b, 0.));
  res = U(res, shell(p));
  b = sdBox(p - FC - vec3(0., .47, 0.), vec3(.42, .5 + .2 * uApart, .3));
  res = U(res, b < .05 ? platens(p) : vec2(b, 0.));
  return res;
}
`};export{r as scene};
