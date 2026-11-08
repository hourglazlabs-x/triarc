import{a as t}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var o={id:"D04-prairie",cam:[2.48,.9,5.06],target:[.1,-.3,0],floor:-1.6,ring:1.95,accent:e(t.D04),poster:3,parts:[{name:"ground plane",view:{el:16}},{name:"sliding rectangles",view:{az:-14,el:4,zoom:.85}},{name:"outreaching walls",view:{az:-22,el:12}},{name:"Roman brick walls",view:{az:6,el:-4,zoom:.62}},{name:"raised living floor",inside:!0,view:{az:30,el:2,zoom:.8}},{name:"window band",view:{az:-8,el:-3,zoom:.72}},{name:"central chimney",view:{el:14,zoom:.8}},{name:"low hipped roof",view:{el:16}},{name:"cantilevered eaves",view:{az:-12,el:-8,zoom:.85}}],glsl:`
const float GY = -.72;                  // the ground's top
const float PH = .04;                   // the plinths' height
const float Y0 = GY + PH;               // the ground floor
const float Y1 = Y0 + .42;              // the raised living floor's underside (a storey, 2.5 m)
const float FT = .035;                  // its thickness
const float SH = .05;                   // the band's sill
const float Y2 = Y1 + FT + .34;         // the upper storey's top: the eaves' soffit
const float YB = Y0 + .37;              // the lower wing's top
const float TR = .028;                  // the roofs' edge (fascia) thickness
const float K = .36;                    // the roofs' pitch, about 4 in 11
const float EA = .3, EB = .26;          // the eaves' reach: 1.8 m and 1.6 m
const vec2 AC = vec2(-.2, -.21), AH = vec2(.9, .23);   // the upper, two-storey rectangle: centre and half-size
const vec2 BC = vec2(.45, .23), BH = vec2(.9, .21);    // the lower wing, sliding past it along z = .02
const float CH = .034;                  // a brick course (drawn about 4 times its height, so that it reads)
const vec3 CHM = vec3(.05, 0., -.2);    // the chimney's axis
const float CTOP = .44;                 // the chimney's top

vec3 palette(int i) {
  if (i == 0) return vec3(.56, .74, .56);   // ground plane: the prairie
  if (i == 1) return vec3(.84, .80, .70);   // sliding rectangles: the plinths
  if (i == 2) return vec3(.86, .62, .48);   // outreaching walls and the terrace
  if (i == 3) return vec3(.96, .58, .42);   // Roman brick walls
  if (i == 4) return vec3(1., .90, .76);    // raised living floor
  if (i == 5) return vec3(.60, .88, 1.);    // window band: plain glass, and its mullions
  if (i == 6) return vec3(1., .46, .30);    // central chimney
  if (i == 7) return vec3(.80, .84, .96);   // low hipped roof
  return vec3(.74, .98, 1.);                // cantilevered eaves, and the steel that carries them
}

float sdRect(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }

/** A hipped roof over the rectangle c \xB1 h: soffit at y0, edge tr thick, pitch k (a solid, as in a massing model). */
float hipRoof(vec3 p, vec2 c, vec2 h, float y0, float tr, float k) {
  vec2 d = abs(p.xz - c);
  float n = inversesqrt(1. + k * k);
  float s = max(p.y - (y0 + tr) - k * (h.x - d.x), p.y - (y0 + tr) - k * (h.y - d.y)) * n;
  return max(max(s, y0 - p.y), max(d.x - h.x, d.y - h.y));
}

/** The section: everything east of the chimney's east flue is removed (a cross-section through the flue and both wings). */
float cutS(vec3 p) { return p.x - (CHM.x + .075); }

vec2 map(vec3 p) {
  float lift = uApart;
  float bound = sdBox(p - vec3(0., -.14 + .5 * lift, -.12 * lift), vec3(1.86 + .32 * lift, .68 + .55 * lift, 1.12 + .5 * lift));
  if (bound > .2) return vec2(bound, 0.);
  float cs = cutS(p);
  float g0 = built(0), g1 = built(1), g2 = built(2), g4 = built(4), g5 = built(5), g8 = built(8);
  vec2 res = vec2(1e5, 0.);

  // 0 \xB7 The ground plane: level and plain, drawn as a clear sheet with a solid edge; it spreads out from the middle as
  // it is laid.
  if (g0 > 0.) {
    vec3 q = p - apart(vec3(0., -.14, 0.));
    float e = smoothstep(0., 1., g0);
    vec3 c = q - vec3(0., GY - .02, 0.);
    vec2 h = vec2(1.8, 1.05) * e;
    float sheet = sdBox(c, vec3(h.x - .03, .02, h.y - .03));
    float edge = max(sdBox(c, vec3(h.x, .02, h.y)), -sheet);
    res = U(res, vec2(SHELL(cutaway(sheet, cs)), 40.));
    res = U(res, vec2(cutaway(edge, cs), 20.));
  }

  // 1 \xB7 Sliding rectangles: two long plinths, the plan made visible, sliding past each other along a shared line; each
  // runs on past its building as a terrace at its free end.
  if (g1 > 0.) {
    vec3 q = p - apart(vec3(0., -.07, 0.));
    float sl = smoothstep(0., 1., g1);
    vec2 ca = vec2(mix(.125, AC.x - .1325, sl), AC.y), cb = vec2(mix(.125, BC.x + .1325, sl), BC.y);
    float d = min(sdRect(q.xz - ca, vec2(AH.x + .1675, AH.y + .035)), sdRect(q.xz - cb, vec2(BH.x + .1675, BH.y + .035)));
    d = max(d, abs(q.y - (GY + PH * .5)) - PH * .5);
    res = U(res, vec2(cutaway(d, cs), 21.));
  }

  // 2 \xB7 Outreaching walls: low garden walls run out from the ends of the house into the site, and a low terrace with
  // its parapet lies in front of the wing. They grow out from the house as they are built.
  if (g2 > 0.) {
    float e = smoothstep(0., 1., g2);
    vec3 qw = p - apart(vec3(-.32, 0., 0.)), qe = p - apart(vec3(.32, 0., 0.)), qt = p - apart(vec3(0., 0., .3));
    float xw = -1.1 - .52 * e, xe = 1.35 + .31 * e;
    float w = sdRect(qw.xz - vec2(-1.1 - .26 * e, -.4225), vec2(.26 * e, .0175));       // west, on the back line
    w = min(w, sdRect(qw.xz - vec2(xw + .0175, -.4225 + .26 * e), vec2(.0175, .26 * e)));  // and its return
    w = min(w, sdRect(qe.xz - vec2(1.35 + .155 * e, .4225), vec2(.155 * e, .0175)));     // east, on the front line
    w = min(w, sdRect(qe.xz - vec2(xe - .0175, .4225 - .31 * e), vec2(.0175, .31 * e)));   // and its return
    float pr = sdRect(qt.xz - vec2(.35, .7625), vec2(.6 * e, .0175));                    // the terrace's parapet
    float walls = max(min(w, pr), abs(p.y - (GY + .0425)) - .0425);
    float cope = max(min(w, pr) - .009, abs(p.y - (GY + .091)) - .006);
    float terr = sdBox(qt - vec3(.35, GY + .0125, .6), vec3(.6 * e, .0125, .16));
    res = U(res, vec2(cutaway(min(min(walls, cope), terr), cs), 22.));
  }

  // 3 \xB7 Roman brick walls: the lower storey of both rectangles, in long thin brick: deep horizontal joints (grooves),
  // the vertical ones flush and unseen. A door at the west end, three openings in the wing.
  {
    float wa = max(abs(sdRect(p.xz - AC, AH - .0175)) - .0175, abs(p.y - (Y0 + Y1) * .5) - (Y1 - Y0) * .5);
    float wb = max(abs(sdRect(p.xz - BC, BH - .0175)) - .0175, abs(p.y - (Y0 + YB) * .5) - (YB - Y0) * .5);
    float d = min(wa, wb);
    // openings: a door in the west end; three in the wing's front, between brick piers
    vec3 o = p - vec3(AC.x - AH.x, Y0 + .16, AC.y);
    d = max(d, -sdBox(o, vec3(.05, .16, .07)));
    vec2 ob = vec2(p.x - BC.x, p.z - (BC.y + BH.y));
    ob.x = abs(ob.x) - .44; ob.x = abs(ob.x) - .22;
    d = max(d, -sdBox(vec3(ob.x, p.y - (Y0 + .15), ob.y), vec3(.09, .15, .05)));
    // the courses: grooves in a thin outer layer
    float outer = min(sdRect(p.xz - AC, AH), sdRect(p.xz - BC, BH));
    float row = abs(fract((p.y - Y0) / CH) - .5) * CH;
    d = max(d, -max(-outer - .0045, row - .0036));
    d = rise(d, 3, p.y, Y0, Y1);
    res = U(res, vec2(cutaway(d, cs), 23.));
  }

  // 4 \xB7 The raised living floor: a slab lifted a storey from the ground as it is built, its edge run out beyond the
  // walls as a level line.
  if (g4 > 0.) {
    vec3 q = p - apart(vec3(0., .2, 0.));
    float y = mix(Y0 + .02, Y1, smoothstep(0., 1., g4));
    float d = sdBox(q - vec3(AC.x, y + FT * .5, AC.y), vec3(AH.x + .07, FT * .5, AH.y + .07));
    res = U(res, vec2(cutaway(d, cs), 24.));
  }

  // 5 \xB7 The window band: one continuous band of plain glass wrapping the living floor, on a low sill, with slender
  // mullions (and one at each corner).
  if (g5 > 0.) {
    vec3 q = p - apart(vec3(0., .38, 0.));
    float yb = Y1 + FT, yg = yb + SH;
    vec2 d2 = q.xz - AC;
    float ring = sdRect(d2, AH - .0175);
    float sill = max(abs(ring) - .0175, abs(q.y - (yb + SH * .5)) - SH * .5);
    float glass = max(abs(sdRect(d2, AH - .018)) - .003, abs(q.y - (yg + Y2) * .5) - (Y2 - yg) * .5);
    vec2 ad = abs(d2);
    float mx = abs(fract(d2.x / .1 + .5) - .5) * .1, mz = abs(fract(d2.y / .115 + .5) - .5) * .115;
    float m = (AH.x - ad.x) < (AH.y - ad.y) ? mz : mx;
    float mull = max(max(m - .006, abs(ring) - .013), abs(q.y - (yg + Y2) * .5) - (Y2 - yg) * .5);
    float solid = rise(min(sill, mull), 5, q.y, yb, Y2);
    res = U(res, vec2(cutaway(solid, cs), 25.));
    res = U(res, vec2(SHELL(cutaway(rise(glass, 5, q.y, yb, Y2), cs)), 85.));
  }

  // 6 \xB7 The central chimney: one broad, low mass of the same brick at the middle, rising through floor and roof and
  // stopping just above the ridge; a stone cap, two flues.
  {
    vec3 q = p - apart(vec3(0., .1, -.62));
    vec3 c = q - CHM;
    float d = sdBox(vec3(c.x, q.y - (Y0 + CTOP) * .5, c.z), vec3(.16, (CTOP - Y0) * .5, .09));
    float row = abs(fract((q.y - Y0) / CH) - .5) * CH;
    d = max(d, -max(-sdRect(c.xz, vec2(.16, .09)) - .0045, row - .0036));
    d = min(d, sdBox(vec3(c.x, q.y - (CTOP + .006), c.z), vec3(.175, .006, .105)));
    d = max(d, -sdBox(vec3(abs(c.x) - .075, q.y - (CTOP - .3), c.z), vec3(.035, .3, .035)));   // two flues
    d = rise(d, 6, q.y, Y0, CTOP + .012);
    res = U(res, vec2(cutaway(d, cs), 26.));
  }

  // 7, 8 \xB7 Low hipped roofs over both rectangles (the wing's tucked under the living floor's sill), and their eaves:
  // the part of each roof that reaches past the walls, carried on steel outriggers (seen in the section). The roofs
  // are laid over the walls first; then the eaves reach out.
  {
    float ea = EA * g8, eb = EB * g8;
    vec3 qc = p - apart(vec3(0., .62, 0.)), qe = p - apart(vec3(0., .9, 0.));
    // the same roofs, evaluated where the core and where the eaves are taken
    float ra = hipRoof(qc, AC, AH + ea, Y2, TR, K), rb = max(hipRoof(qc, BC, BH + eb, YB, TR, K), .02 - qc.z);
    float core = min(max(ra, sdRect(qc.xz - AC, AH)), max(rb, sdRect(qc.xz - BC, BH)));
    core = rise(core, 7, qc.y, YB, Y2 + TR + K * (AH.y + EA));
    res = U(res, vec2(cutaway(core, cs), 27.));
    if (g8 > 0.) {
      float sa = hipRoof(qe, AC, AH + ea, Y2, TR, K), sb = max(hipRoof(qe, BC, BH + eb, YB, TR, K), .02 - qe.z);
      float eav = min(max(sa, -sdRect(qe.xz - AC, AH)), max(sb, -sdRect(qe.xz - BC, BH)));
      // steel outriggers in the long eaves, one every 1.2 m, cutting out of the roof (so the section shows them)
      float sx = abs(fract((qe.x - CHM.x - .075) / .2 + .5) - .5) * .2;   // one falls in the section plane
      float steelA = max(max(sx - .006, abs(qe.y - (Y2 + .013)) - .01), max(AH.y - .05 - abs(qe.z - AC.y), sdRect(qe.xz - AC, AH + ea - .012)));
      float steelB = max(max(sx - .006, abs(qe.y - (YB + .013)) - .01), max(BH.y - .05 - abs(qe.z - BC.y), max(sdRect(qe.xz - BC, BH + eb - .012), .04 - qe.z)));
      float steel = min(steelA, steelB);
      res = U(res, vec2(cutaway(max(eav, -steel), cs), 28.));
      res = U(res, vec2(cutaway(steel, cs), 68.));
    }
  }

  // A figure 1.73 m tall (5 ft 8 in), on the terrace: the scale the house was brought down to (not a part).
  {
    vec3 f = p - apart(vec3(0., 0., .3)) - vec3(-.02, GY + .025, .6);
    float man = min(sdCapsule(f, vec3(0., .03, 0.), vec3(0., .2, 0.), .022), sdSphere(f - vec3(0., .262, 0.), .024));
    res = U(res, vec2(g2 > 0. ? man : 1e5, 4.));
  }
  return res;
}
`};export{o as scene};
