import{c as a}from"./chunk-W46U2OC5.js";import{a as e}from"./chunk-WY76X7OO.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var r={id:"D01",cam:[3.55,1.5,5.1],target:[0,.08,0],floor:-1.62,ring:1.85,accent:e(a.D01),poster:4.2,glsl:`
const float Y0 = -.85;                // the springing, on top of the drum
const float YT = 1.35;                // the eye, above the springing
const float RO = 1.7125, RI = 1.517;  // the sails' arcs: 3/4 of 55 m and 4/5 of 45.5 m, in units of 24 m
const float CX = -.57;                // the arcs' shared centre, across the octagon from each sail
const float TO = .036, TI = .085;     // the shells' thicknesses (illustrative: the inner is the more massive)
const float GM = (RI + TI + RO - TO) * .5;  // the middle of the space between the shells
const float LY = Y0 + YT;             // the lantern's foot
const vec3 HO = vec3(-1.3, -1.43, 1.5);   // the hoist's base

vec3 palette(int i) {
  if (i == 0) return vec3(.93, .90, .84);   // drum: stone and marble
  if (i == 1) return vec3(.86, .50, .36);   // inner shell: brick
  if (i == 2) return vec3(.90, .38, .22);   // outer shell: terracotta tiles
  if (i == 3) return vec3(1., .93, .84);    // ribs: white marble outside, stone within
  if (i == 4) return vec3(1., .66, .38);    // herringbone courses
  if (i == 5) return vec3(.78, .58, .36);   // chains: stone, and chestnut and iron
  if (i == 6) return vec3(.97, .96, .92);   // lantern: white marble (its ball gilt)
  if (i == 7) return vec3(.42, .72, 1.);    // round windows: stained glass
  if (i == 8) return vec3(.80, .62, .40);   // ox hoist: timber and rope
  return vec3(.72, .84, .96);               // pavement
}

float gCut;

/** The two sails removed: the quarter between the corners at 22.5\xB0 and 112.5\xB0 (negative inside it). */
float cutaway(vec3 p) {
  float a = .92388 * p.z - .38268 * p.x;
  float b = -.38268 * p.z - .92388 * p.x;
  return max(max(-a, b), -(p.y + 1.425));
}

vec2 lantern(vec3 p) {
  vec3 q = polarRep(p, 8.);
  float h = p.y - LY;
  float core = max(q.x - .125, abs(h - .22) - .22);
  core = min(core, max(q.x - .16, abs(h - .015) - .015));
  // Eight buttresses at the corners, stepping in toward the top.
  vec3 c = polarRep(vec3(p.x * .92388 - p.z * .38268, p.y, p.x * .38268 + p.z * .92388), 8.);
  float k = clamp(h / .38, 0., 1.);
  float fin = max(max(abs(c.z) - .02, max(c.x - mix(.29, .15, k * k), .11 - c.x)), abs(h - .19) - .19);
  core = min(core, fin);
  // Windows between the buttresses.
  core = max(core, -max(abs(q.z) - .045, abs(h - .24) - .12));
  float roof = sdTaper(p, vec3(0., LY + .44, 0.), vec3(0., LY + .76, 0.), .15, .016);
  roof = min(roof, sdCylinder(p - vec3(0., LY + .45, 0.), .012, .16));
  vec2 res = vec2(min(core, roof), 26.);
  float ball = sdSphere(p - vec3(0., LY + .8, 0.), .042);
  float cross_ = min(sdBox(p - vec3(0., LY + .89, 0.), vec3(.006, .055, .006)), sdBox(p - vec3(0., LY + .9, 0.), vec3(.03, .006, .006)));
  return U(res, vec2(min(ball, cross_), 66.));
}

/** Brunelleschi's ox hoist, simplified and much enlarged: oxen turn the tiller; the shaft winds the rope. */
vec2 hoist(vec3 p) {
  const float S = .74;
  vec3 b = (p - HO) / S;
  float bound = sdBox(b - vec3(0., .55, 0.), vec3(.62, .62, .62));
  if (bound > .2) return vec2(bound * S, 28.);
  float t = uTime * .55;
  vec3 r = b; r.xz *= rot(t);
  float d = sdCylinder(b - vec3(0., .31, 0.), .31, .02);                          // the upright shaft
  d = min(d, sdCapsule(r, vec3(0., .09, 0.), vec3(.5, .09, 0.), .014));           // the tiller
  d = min(d, sdBox(r - vec3(.5, .09, 0.), vec3(.018, .018, .1)));                 // the yoke
  d = min(d, sdCylinder(b - vec3(0., .46, 0.), .012, .17));                       // the crown wheel
  vec3 pg = polarRep(r - vec3(0., .48, 0.), 14.);
  d = min(d, sdCylinder(pg - vec3(.15, 0., 0.), .02, .01));                       // its pegs
  vec3 fr = vec3(abs(b.x), b.y, abs(b.z));
  d = min(d, sdBox(fr - vec3(.22, .29, .22), vec3(.014, .29, .014)));             // the frame
  d = min(d, sdBox(vec3(b.x, b.y - .57, abs(b.z) - .22), vec3(.23, .012, .012)));
  d = min(d, sdCylinder(b.yxz - vec3(.54, .25, 0.), .1, .04));                    // the rope drum
  d = min(d, sdBox(b - vec3(.36, .82, 0.), vec3(.012, .25, .012)));               // the mast
  d = min(d, sdCylinder((b - vec3(.36, 1.07, 0.)).xzy, .012, .05));               // its pulley
  float load = .32 + .38 * (.5 + .5 * sin(t * 1.3));
  d = min(d, sdBox(b - vec3(.42, load - .05, 0.), vec3(.05, .045, .045)));        // a load of stone
  float rope = min(sdCapsule(b, vec3(.33, .58, 0.), vec3(.33, 1.07, 0.), .005), sdCapsule(b, vec3(.41, 1.07, 0.), vec3(.42, load, 0.), .005));
  return U(vec2(d * S, 28.), vec2(rope * S, 68.));
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., .07, 0.), vec3(2.05, 1.62, 2.05));
  if (bound > .25) return vec2(bound, 0.);
  vec3 q = polarRep(p, 8.);
  float u = q.x, av = abs(q.z);
  float yy = p.y - Y0;
  float r = length(vec2(u - CX, max(yy, 0.)));
  gCut = cutaway(p);
  float keep = -gCut;   // > 0 inside the removed quarter
  float vclip = max(-yy, yy - YT);

  // The pavement under it all, with its grid: the orthogonals of a perspective.
  float pave = max(sdBox(p - vec3(0., -1.445, 0.), vec3(1.95, .012, 1.95)), 0.);
  vec2 g = abs(fract(p.xz / .325 + .5) - .5) * .325;
  float lines = max(sdBox(p - vec3(0., -1.43, 0.), vec3(1.95, .005, 1.95)), min(g.x, g.y) - .007);
  vec2 res = vec2(SHELL(pave), 89.);
  res = U(res, vec2(lines, 29.));

  // The drum: a thick octagonal wall with a round window in each face, and a cornice.
  float drum = max(max(u - 1.17, .93 - u), abs(p.y + 1.135) - .29);
  drum = min(drum, max(max(u - 1.205, .93 - u), abs(p.y + .865) - .022));
  float hole = length(vec2(q.z, p.y + 1.12)) - .104;
  drum = max(drum, -hole);
  drum = max(drum, keep);
  res = U(res, vec2(SHELL(drum), 40.));
  float glass = max(max(hole, abs(u - 1.05) - .006), keep);
  res = U(res, vec2(glass, 67.));

  if (yy > -.05 && yy < YT + .12) {
    // The two shells: the sails of each lie on one arc about the shared centre.
    float so = max(abs(r - (RO - TO * .5)) - TO * .5, vclip);
    float si = max(abs(r - (RI + TI * .5)) - TI * .5, vclip);
    res = U(res, vec2(SHELL(max(so, keep)), 82.));
    res = U(res, vec2(SHELL(max(si, keep)), 41.));
    // Ribs: eight at the corners, through both shells and proud of the tiles; two more hidden in each sail;
    // ten horizontal ones joining the shells.
    float seam = abs(-.38268 * u + .92388 * av);
    float corner = max(max(seam - .03, max(RI - r, r - (RO + .02))), vclip);
    res = U(res, vec2(max(corner, keep), 63.));
    float ribs = 1e5;
    float mid = abs(-.130526 * u + .991445 * av);
    float gap = max((RI + TI) - r, r - (RO - TO));
    ribs = min(ribs, max(max(mid - .016, gap), vclip));
    float yk = YT / 11.;
    float hr = abs(yy - clamp(floor(yy / yk + .5), 1., 10.) * yk) - .009;
    ribs = min(ribs, max(max(max(hr, gap), vclip), .034 - seam));
    ribs = min(ribs, max(max(.1 - u, r - (RO + .012)), abs(yy - (YT - .022)) - .022));   // the eye's ring
    res = U(res, vec2(max(ribs, keep), 23.));
    // The herringbone: courses of bricks set on edge, spiralling up the inner shell's back.
    float phi = atan(av, u) / (PI / 8.);
    float tc = yy * 7.2 - phi * 2.4;
    float hb = max(abs(r - (RI + TI + .004)) - .0045, abs(fract(tc + .5) - .5) / 7.2 - .0075);
    // And one course glowing as it is laid, rising from the springing to the eye.
    float yc = mod(uTime * .16, YT * 1.3);
    float course = yc < YT ? max(abs(r - (RO + .004)) - .006, abs(yy - yc) - .009) : 1e5;
    res = U(res, vec2(max(max(min(hb, course), vclip), keep), 64.));
    // The chains: one of stone near the springing, and the one wooden chain that was built.
    float ch = min(max(abs(r - GM) - .034, abs(yy - .07) - .022), max(abs(r - GM) - .03, abs(yy - .25) - .02));
    res = U(res, vec2(max(ch, keep), 25.));
  }
  if (p.y > LY - .05) res = U(res, lantern(p));
  res = U(res, hoist(p));
  return res;
}
`};export{r as scene};
