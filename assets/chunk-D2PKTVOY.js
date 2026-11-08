import{a}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var o={id:"D02-lily-leaf",cam:[2.08,2.28,4.91],target:[0,-.2,-.25],floor:-2,ring:2.2,accent:e(a.D02),poster:1.5,orbit:{el:[-12,68]},parts:[{name:"radial veins",view:{az:-53,el:-32,zoom:.62}},{name:"ring veins",view:{az:-45,el:-32,zoom:.56}},{name:"leaf blade",view:{az:-40,el:6,zoom:.62}},{name:"upturned rim",view:{az:-53,el:-20,zoom:.55}},{name:"spines",view:{az:-60,el:-34,zoom:.5}},{name:"Lily House",view:{az:131,el:8,zoom:.62}},{name:"wrought-iron girders",view:{az:131,el:-2,zoom:.62}},{name:"flat ridge-and-furrow roof",view:{az:125,el:20,zoom:.58}}],glsl:`
const vec3 LC = vec3(-.3, -.25, .42);   // the leaf's centre, on its upper face
const float R = 1.05;                  // its radius: nearly 3 m across
const float RIMH = .085;               // the rim's height
const float N0 = 24.;                  // main veins from the stem
const float R1 = .42 * R;              // where each divides...
const float R2 = .7 * R;               // ...and divides again
const float RS = .09;                  // the rings' spacing
const vec3 HC = vec3(.5, 0., -1.05);  // the Lily House: the middle of its plan
const vec2 HP = vec2(.6145, .4750);    // half its plan: 60 ft 6 in by 46 ft 9 in, one unit 15 m
const float HG = .42;                  // the girders' underside over the plan (illustrative)

vec3 palette(int i) {
  if (i == 0) return vec3(1., .54, .62);    // radial veins
  if (i == 1) return vec3(1., .70, .56);    // ring veins
  if (i == 2) return vec3(.46, .94, .52);   // leaf blade
  if (i == 3) return vec3(.70, 1., .46);    // upturned rim
  if (i == 4) return vec3(1., .42, .50);    // spines
  if (i == 5) return vec3(.80, .88, 1.);    // Lily House: its plan
  if (i == 6) return vec3(.60, .78, 1.);    // wrought-iron girders
  return vec3(.64, .95, 1.);                // flat ridge-and-furrow roof
}

float sdBox2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
float band(float x, float lo, float hi) { return max(lo - x, x - hi); }
/** A vein's section, hanging under the blade: half-width w, depth h, rounded. */
float rib(float t, float y, float w, float h) {
  float rr = min(w, h * .5) * .9;
  vec2 q = abs(vec2(t, y + h * .5)) - vec2(w, h * .5) + rr;
  return length(max(q, 0.)) + min(max(q.x, q.y), 0.) - rr;
}
/** The veins' depth under the blade: thick near the centre, tapering toward the edge. */
float veinH(float r) { float u = 1. - min(r / R, 1.); return .011 + .072 * u * sqrt(u); }

// \u2500\u2500 the leaf \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
/** The radial veins' fold: the distance across from the nearest vein's line; lvl counts its divisions. */
float veinT(float r, float a, out float lvl) {
  float s = TAU / N0;
  float f = abs(a - s * floor(a / s + .5));
  f = abs(f - s * .25 * smoothstep(R1, R1 + .16, r));
  f = abs(f - s * .125 * smoothstep(R2, R2 + .12, r));
  lvl = smoothstep(R1, R1 + .16, r) + smoothstep(R2, R2 + .12, r);
  return r * f;
}
/** The stem under the leaf's centre (local to the leaf). */
vec3 stemA() { return vec3(0., -.05, 0.); }
vec3 stemB() { return vec3(.16, -.92, .1); }

/** The leaf's parts at a point local to its centre: radial veins and stem, ring veins, blade, rim, spines. */
float radialVeins(vec3 q, float r, float t, float lvl) {
  float h = veinH(r);
  float w = (.02 - .009 * r / R) * (1. - .22 * lvl);
  float d = rib(t, q.y, w, h) * .8;
  d = max(d, r - R + .05);
  return min(d, sdTaper(q, stemA(), stemB(), .042, .03));
}
float ringVeins(vec3 q, float r) {
  float dr = r - RS * clamp(floor(r / RS + .5), 1., 11.);
  return rib(dr, q.y, .0055, veinH(r) * .5 + .004);
}
float blade(vec3 q, float r) { return max(abs(q.y + .001) - .0012, r - R + .045); }
float rim(vec3 q, float r) {
  vec2 f = vec2(r - R + .045, q.y - .045);
  float fil = max(max(abs(length(f) - .045) - .003, -f.x), f.y);
  return min(fil, max(abs(r - R) - .003, band(q.y, .045, RIMH)));
}
float spines(vec3 q, float r, float t) {
  // under the veins, every 7 cm or so along them, pointing down
  float rk = clamp(.075 * floor(r / .075 + .5), .075, R - .08);
  float hk = veinH(rk);
  float d = sdTaper(vec3(r - rk, q.y, t), vec3(0., -hk + .004, 0.), vec3(0., -hk - .03, 0.), .0045, .0006);
  // and all round the stem
  vec3 a = stemA(), b = stemB(), ax = normalize(b - a);
  vec3 v = q - a;
  float u = dot(v, ax);
  vec3 rv = v - ax * u;
  vec3 e1 = normalize(cross(ax, vec3(0., 0., 1.))), e2 = cross(ax, e1);
  float th = atan(dot(rv, e2), dot(rv, e1));
  float sth = TAU / 7.;
  float thl = th - sth * floor(th / sth + .5) + (fract(u / .14) < .5 ? 0. : sth * .5);
  thl = thl - sth * floor(thl / sth + .5);
  float uk = clamp(.07 * floor(u / .07 + .5), .07, length(b - a) - .03);
  float rad = mix(.042, .03, uk / length(b - a));
  vec2 lp = vec2(length(rv) * cos(thl), length(rv) * sin(thl));
  float sp = sdTaper(vec3(lp.x, u - uk, lp.y), vec3(rad - .004, 0., 0.), vec3(rad + .03, 0., 0.), .0045, .0006);
  return min(d, sp);
}

// \u2500\u2500 the Lily House \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
/** Its plan (y up from the plan, x along it, z across), with the lines of its girders and furrows drawn on it. */
float plan(vec3 h) {
  float d = sdBox(h - vec3(0., -.006, 0.), vec3(HP.x, .006, HP.y));
  float edge = max(abs(sdBox2(h.xz, HP - .008)) - .008, band(h.y, -.012, .01));
  float gx = h.x - (2. * HP.x / 8.) * floor(h.x / (2. * HP.x / 8.) + .5);
  float gz = h.z + HP.y - (2. * HP.y / 6.) * floor((h.z + HP.y) / (2. * HP.y / 6.) + .5);
  float lines = max(max(min(abs(gx), abs(gz)) - .0022, band(h.y, -.012, .0025)), sdBox2(h.xz, HP - .016));
  return min(min(d, edge), lines);
}
/** Its wrought-iron girders, spanning it across, nine of them, and an edge beam along each side. */
float houseGirders(vec3 h) {
  float y = h.y - HG;
  if (abs(y - .0175) > .03) return abs(y - .0175) - .025;
  float sx = 2. * HP.x / 8.;
  float xl = clamp(sx * floor(h.x / sx + .5), -HP.x, HP.x);
  const float P = 2. * .475 / 6., D = .035;
  float pu = h.z + HP.y - P * floor((h.z + HP.y) / P + .5);
  float chord = min(abs(y - .003), abs(y - D + .003)) - .003;
  float post = abs(abs(pu) - P * .5) - .0022;
  float xd = min(abs(pu * D - (y - D * .5) * P), abs(pu * D + (y - D * .5) * P)) / length(vec2(P, D)) - .0018;
  float web = max(min(chord, min(post, xd)), band(y, 0., D));
  float d = max(max(web, abs(h.x - xl) - .004), abs(h.z) - HP.y);
  float edge = max(max(sdBox2(vec2(abs(h.z) - HP.y, y - D * .5), vec2(.005, D * .5)), abs(h.x) - HP.x), 0.);
  return min(d, edge);
}
/** Its flat ridge-and-furrow roof: valley rafters and ridges laid level along it, sash-bars between, and the glass. */
vec2 houseRoof(vec3 h) {
  float y = h.y - HG - .035;
  if (abs(y - .02) > .04) return vec2(abs(y - .02) - .035);
  const float P = 2. * .475 / 6.;
  float zz = h.z + HP.y;
  float fz = 1. - abs(fract(zz / P) - .5) * 2.;           // 0 over a valley, 1 under a ridge
  float ys = .004 + .032 * fz;
  float glass = max((abs(y - ys) - .0007) * .93, max(abs(h.x) - HP.x, abs(h.z) - HP.y));
  float zv = zz - P * floor(zz / P + .5);
  float zr = zz - P * (floor(zz / P) + .5);
  float fr = sdBox2(vec2(zv, y - .002), vec2(.0045, .004));
  fr = min(fr, sdBox2(vec2(zr, y - .035), vec2(.0028, .003)));
  float xb = h.x - .026 * floor(h.x / .026 + .5);
  fr = min(fr, max(abs(xb) - .0014, abs(y - ys + .002) - .0022) * .9);
  fr = max(fr, max(abs(h.x) - HP.x, abs(h.z) - HP.y - .004));
  return vec2(glass, fr);
}
/** Dashed lines up from the plan's corners to the roof's (a drawing's convention, not supports). */
float corners(vec3 h) {
  vec2 c = abs(h.xz) - HP;
  float d = max(length(c) - .0018, band(h.y, .01, HG));
  return max(d, (abs(fract(h.y / .04) - .5) - .22) * .04);
}

float cutS(vec3 p) { return p.z - LC.z; }

vec2 map(vec3 p) {
  float A = uApart;
  float s = cutS(p);
  vec2 res = vec2(1e5, 0.);
  float d, g;

  // The leaf, taken apart in layers: the rim and blade lift off, the rings and spines drop away from the radial veins.
  vec3 q0 = p - LC;
  float lb = max(length(q0.xz) - R - .03, max(q0.y - RIMH - .02 - .45 * A, -q0.y - .14 - .5 * A));
  float lbs = min(sdCapsule(q0, stemA(), stemB(), .09), sdCapsule(q0 + vec3(0., .5 * A, 0.), stemA(), stemB(), .09));
  if (min(lb, lbs) < .05) {
    float r = length(q0.xz);
    float a = atan(q0.z, q0.x);
    float lvl;
    float t = veinT(r, a, lvl);
    vec3 q = q0;
    g = built(0);
    d = g <= 0. ? 1e5 : max(radialVeins(q, r, t, lvl), length(q) - mix(0., R + .9, g));
    res = U(res, vec2(cutaway(d, s), 20.));
    q = q0 + vec3(0., .22 * A, 0.);
    g = built(1);
    d = g <= 0. ? 1e5 : max(ringVeins(q, r), r - mix(0., R, g));
    res = U(res, vec2(cutaway(d, s), 21.));
    q = q0 - vec3(0., .26 * A, 0.);
    g = built(2);
    d = g <= 0. ? 1e5 : max(blade(q, r), r - mix(0., R, g));
    res = U(res, vec2(SHELL(cutaway(d, s)), 42.));
    q = q0 - vec3(0., .44 * A, 0.);
    d = rise(rim(q, r), 3, q.y, -.004, RIMH);
    res = U(res, vec2(cutaway(d, s), 23.));
    q = q0 + vec3(0., .5 * A, 0.);
    g = built(4);
    d = g <= 0. ? 1e5 : max(spines(q, r, t), length(q) - mix(0., R + .9, g));
    res = U(res, vec2(cutaway(d, s), 24.));
  } else {
    res = vec2(min(lb, lbs), 0.);
  }

  // The house: the plan drops a little, the roof lifts off the girders.
  vec3 h0 = p - HC;
  float hb = sdBox(h0 - vec3(0., .25 + .05 * A, 0.), vec3(HP.x + .03, .3 + .25 * A, HP.y + .03));
  if (hb < .05) {
    vec3 h = h0 + vec3(0., .16 * A, 0.);
    g = built(5);
    d = g <= 0. ? 1e5 : max(plan(h), h.x - mix(-HP.x - .01, HP.x + .01, g));
    res = U(res, vec2(cutaway(d, s), 25.));
    h = h0;
    g = built(6);
    d = g <= 0. ? 1e5 : max(houseGirders(h), h.x - mix(-HP.x - .01, HP.x + .01, g));
    res = U(res, vec2(cutaway(d, s), 26.));
    d = built(7) <= 0. || A > .01 ? 1e5 : corners(h);
    res = U(res, vec2(cutaway(d, s), 4.));
    h = h0 - vec3(0., .24 * A, 0.);
    g = built(7);
    vec2 rr = houseRoof(h);
    float grow = g <= 0. ? 1e5 : h.x - mix(-HP.x - .01, HP.x + .01, g);
    res = U(res, vec2(SHELL(cutaway(max(rr.x, grow), s)), 87.));
    res = U(res, vec2(cutaway(max(rr.y, grow), s), 27.));
  } else {
    res = U(res, vec2(hb, 0.));
  }
  return res;
}
`};export{o as scene};
