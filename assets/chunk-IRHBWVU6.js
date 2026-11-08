import{a}from"./chunk-4QM5HSGV.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var s={id:"D04-hearth",cam:[1.88,1.7,5.16],target:[0,-.36,.1],floor:-1.6,ring:1.95,accent:e(a.D04),poster:2.5,parts:[{name:"masonry core",view:{az:10,el:-6,zoom:.78}},{name:"chimney",view:{el:6,zoom:.9}},{name:"open fireplace",view:{az:-18,el:-12,zoom:.56}},{name:"hearthstone",view:{az:-18,el:-4,zoom:.58}},{name:"inglenook",view:{az:-10,el:-10,zoom:.66}},{name:"radiating wings",view:{el:18}},{name:"open living space",view:{az:4,el:6,zoom:.82}}],glsl:`
const float FY = -.75;                  // the floor's top
const vec2 KH = vec2(.26, .19);         // the masonry core's half-size (x, z)
const float RY = FY + .56;              // the roofs' underside (2.8 m rooms)
const float RT = .04;                   // the roof planes' thickness
const float CTOP = FY + 1.05;           // the chimney's top
const vec2 CHH = vec2(.21, .15);        // the chimney's half-size
const float AW = .42;                   // the wings' half-width
const float LX = 1.5, LZ = 1.35;        // the wings' reach along x and along z
const vec3 FO = vec3(.17, .25, .16);    // the fire opening: half-width, height, depth
const float NY = FY + .37;              // the inglenook's ceiling
const float CH = .045;                  // a course of the masonry (drawn coarse)

vec3 palette(int i) {
  if (i == 0) return vec3(.94, .62, .46);   // masonry core
  if (i == 1) return vec3(1., .52, .36);    // chimney
  if (i == 2) return vec3(1., .70, .30);    // open fireplace: lintel, logs and fire
  if (i == 3) return vec3(.86, .82, .74);   // hearthstone
  if (i == 4) return vec3(.90, .76, .58);   // inglenook
  if (i == 5) return vec3(.80, .88, 1.);    // radiating wings
  return vec3(.56, 1., .86);                // open living space
}

float sdRect(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }

/** The section: the half east of the core's axis is removed (through the fire, the flue and the inglenook). */
float cutS(vec3 p) { return p.x; }

vec2 map(vec3 p) {
  float a = uApart;
  float bound = sdBox(p - vec3(0., -.2 + .2 * a, .1 * a), vec3(1.62 + .3 * a, .62 + .25 * a, 1.47 + .45 * a));
  if (bound > .2) return vec2(bound, 0.);
  float cs = cutS(p);
  float g2 = built(2), g3 = built(3), g4 = built(4), g5 = built(5), g6 = built(6);
  vec2 res = vec2(1e5, 0.);

  // The floor (not a part): a cross-shaped platform; the plan's two bars.
  {
    vec2 q = abs(p.xz);
    float pl = min(sdRect(q - vec2(0., 0.), vec2(LX + .04, AW + .04)), sdRect(q, vec2(AW + .04, LZ + .04)));
    res = U(res, vec2(max(pl, abs(p.y - (FY - .025)) - .025), 4.));
  }

  // The fire opening, shared by the core (carved out) and the fireplace (its lining and fire).
  vec3 fo = vec3(p.x, p.y - FY, p.z - (KH.y - FO.z * .5));
  float g2o = smoothstep(0., .5, g2);
  float hole = sdBox(fo - vec3(0., FO.y * .5 * g2o, 0.), vec3(FO.x * g2o, FO.y * .5 * g2o, FO.z * .5 + .02));
  // and the flue that rises from it through the core and the chimney (seen in the section)
  vec3 fq = vec3(p.x, p.y - (FY + FO.y + CTOP) * .5, p.z - .07);
  vec3 fh = vec3(.055, (CTOP - FY - FO.y) * .5 + .02, .05);

  // 0 \xB7 The masonry core: a solid mass of coursed masonry at the centre of the plan.
  {
    float d = sdBox(p - vec3(0., (FY - .05 + RY + RT) * .5, 0.), vec3(KH.x, (RY + RT - FY + .05) * .5, KH.y));
    float row = abs(fract((p.y - FY) / CH) - .5) * CH;
    d = max(d, -max(-sdRect(p.xz, KH) - .006, row - .0045));
    if (g2 > 0.) d = max(max(d, -hole), -sdBox(fq, fh));
    d = rise(d, 0, p.y, FY - .05, RY + RT);
    res = U(res, vec2(cutaway(d, cs), 20.));
  }

  // 1 \xB7 The chimney: the core carried up through the roofs as one broad stack, capped, with two flues.
  {
    vec3 q = p - apart(vec3(0., .48, 0.));
    float d = sdBox(q - vec3(0., (RY + CTOP) * .5, 0.), vec3(CHH.x, (CTOP - RY) * .5, CHH.y));
    float row = abs(fract((q.y - FY) / CH) - .5) * CH;
    d = max(d, -max(-sdRect(q.xz, CHH) - .006, row - .0045));
    d = min(d, sdBox(q - vec3(0., CTOP + .008, 0.), vec3(CHH.x + .018, .008, CHH.y + .018)));
    d = max(d, -sdBox(fq - (q - p), fh));   // the flue, open at the top
    d = rise(d, 1, q.y, RY, CTOP + .016);
    res = U(res, vec2(cutaway(d, cs), 21.));
  }

  // 2 \xB7 The open fireplace: the opening, faced with a long stone lintel and no frame; a firebox lining; logs and the
  // fire itself, on the hearth.
  if (g2 > 0.) {
    vec3 q = p - apart(vec3(0., 0., .3));
    vec3 f = vec3(q.x, q.y - FY, q.z - (KH.y - FO.z * .5));
    float lintel = sdBox(f - vec3(0., FO.y + .028, FO.z * .5 + .004), vec3(FO.x + .07, .028, .012));
    float lining = max(abs(sdBox(f - vec3(0., FO.y * .5, -.01), vec3(FO.x + .006, FO.y * .5 + .006, FO.z * .5 + .006))) - .006, f.z - FO.z * .5 + .03);
    lining = max(lining, -(f.y - .002));
    float logs = min(sdCapsule(f, vec3(-.09, .025, -.01), vec3(.08, .03, .03), .022), sdCapsule(f, vec3(-.07, .03, .04), vec3(.1, .022, -.02), .02));
    float solid = rise(min(min(lintel, lining), logs), 2, f.y, 0., FO.y + .06);
    res = U(res, vec2(cutaway(solid, cs), 22.));
    float t = uTime;
    vec3 fl = f - vec3(0., .06, .01);
    if (g2 > .5) {
      float ig = smoothstep(.5, 1., g2);   // the fire catches
      fl /= ig;
      float flame = sdEllipsoid(fl - vec3(0., .06, 0.), vec3(.12, .085 + .014 * sin(t * 6.), .055));
      flame = min(flame, sdEllipsoid(fl - vec3(-.06, .085, .01), vec3(.04, .085 + .012 * sin(t * 7.3 + 1.), .034)));
      flame = min(flame, sdEllipsoid(fl - vec3(.065, .08, -.01), vec3(.04, .075 + .012 * sin(t * 5.1 + 2.), .034)));
      flame += (noise3(fl * 22. + vec3(0., -t * 3.5, 0.)) - .5) * .022;
      flame = max(flame, -fl.y - .01) * ig;
      res = U(res, vec2(cutaway(flame, cs), 62.));
    }
  }

  // 3 \xB7 The hearthstone: the floor run on into the fire, three stones flush with the floor, from the back of the
  // firebox out into the room.
  if (g3 > 0.) {
    vec3 q = p - apart(vec3(0., 0., .52));
    float z0 = KH.y - FO.z, z1 = mix(KH.y, KH.y + .34, smoothstep(0., 1., g3));
    float d = sdBox(q - vec3(0., FY - .012, (z0 + z1) * .5), vec3(.22, .014, (z1 - z0) * .5));
    float j = abs(fract((q.z - z0) / .17) - .5) * .17;     // the joints between the stones
    d = max(d, -max(j - .003, FY - .003 - q.y));
    res = U(res, vec2(cutaway(d, cs), 23.));
  }

  // 4 \xB7 The inglenook: a recess round the fire, a room within the room: two benches with high backs facing each
  // other across the hearth, under a lowered ceiling.
  if (g4 > 0.) {
    vec3 q = p - apart(vec3(0., .05, .82));
    vec3 n = vec3(abs(q.x), q.y - FY, q.z - .4);
    float seat = sdBox(n - vec3(.295, .045, 0.), vec3(.045, .045, .17));
    float back = sdBox(n - vec3(.35, .155, 0.), vec3(.012, .155, .2));
    float ceil = sdBox(n - vec3(0., NY - FY + .01, .0), vec3(.362, .01, .21));
    float d = rise(min(min(seat, back), ceil), 4, n.y, 0., NY - FY + .02);
    res = U(res, vec2(cutaway(d, cs), 24.));
  }

  // 5 \xB7 Radiating wings: four wings reaching out from the core in a cross, each under a thin roof plane; three are
  // closed by end walls, the fourth opens the living space toward the outside. They grow out from the core.
  if (g5 > 0.) {
    float e = smoothstep(0., 1., g5);
    vec3 q = p;
    // folded so that every wing lies along +x: (along the wing, height, across it)
    vec2 aq = abs(q.xz);
    bool alongX = aq.x > aq.y;
    float along = alongX ? aq.x : aq.y, across = alongX ? q.z : q.x;
    float reach = alongX ? LX : LZ;
    float off = .32 * uApart;
    along -= off;
    float tip = KH.x + (reach + .06 - KH.x) * e;
    // the roof plane, drawn as a hologram draws a plane: a clear sheet in a solid edge (so the core shows through)
    float ry = abs(q.y - (RY + RT * .5)) - RT * .5;
    float plate = max(max(abs(across) - (AW + .07), along - tip), ry);
    float sheetPlan = max(abs(across) - (AW + .04), along - (tip - .03));
    float sheet = max(sheetPlan, ry + .006);
    plate = max(plate, -sdRect(q.xz, CHH + .005));
    float edge = max(plate, -sheetPlan);
    float wall = max(max(abs(across) - (AW - .02), abs(along - (reach - .02) * e - (1. - e) * KH.x) - .02), abs(q.y - (FY + RY) * .5) - (RY - FY) * .5);
    bool front = !alongX && q.z > 0.;
    res = U(res, vec2(cutaway(min(edge, front ? 1e5 : wall), cs), 25.));
    res = U(res, vec2(SHELL(cutaway(max(sheet, -sdRect(q.xz, CHH + .005)), cs)), 85.));
  }

  // 6 \xB7 The open living space: living and dining flow round the core, divided only by the chimney; drawn as rings of
  // light that spread across the floor from the hearth, out into the wings.
  if (g6 > 0.) {
    float r = sdRect(p.xz, KH);
    float x = r / .16 - uTime * .25;
    float ring = (abs(fract(x) - .5) - .035) * .16;
    float plan = min(sdRect(abs(p.xz), vec2(LX, AW)), sdRect(abs(p.xz), vec2(AW, LZ)));
    float d = max(max(ring, abs(p.y - (FY + .004)) - .004), max(plan, r - mix(.05, 1.15, g6)));
    d = max(max(d, .02 - r), -sdRect(p.xz - vec2(0., .4), vec2(.38, .22)));   // not under the hearth and the nook
    res = U(res, vec2(cutaway(d, cs), 66.));
  }
  return res;
}
`};export{s as scene};
