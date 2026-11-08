import{a as t}from"./chunk-4QM5HSGV.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var s={id:"D04-cantilever",cam:[3.06,1,5.05],target:[-.05,-.25,0],floor:-1.6,ring:1.95,accent:e(t.D04),poster:4,orbit:{el:[-6,68]},parts:[{name:"support pier",view:{az:10,el:-12,zoom:.8}},{name:"cantilever beam",view:{az:18,el:-15,zoom:.85}},{name:"concrete joists",inside:!0,view:{az:6,el:-6,zoom:.72}},{name:"floor tray",view:{el:8,zoom:.85}},{name:"anchor mass",view:{az:-24,el:4,zoom:.85}},{name:"upper tray",view:{el:10}},{name:"central core",view:{az:-30,el:-2,zoom:.9}},{name:"post-tensioning cables",inside:!0,view:{az:-8,el:-14,zoom:.72}}],glsl:`
const float BY = -.95;                 // the base's top (grade)
const float BB = -.38, BT = -.22;      // the beams' underside and top
const float BX0 = -.75, BX1 = .914;    // the beams run from inside the anchor mass to 15 ft (0.914) past the piers (x = 0)
const float JD = .117, JW = .0102;     // a joist: 23 in deep, 4 in wide (half-width)
const float JS = .244;                 // the joists' spacing: 4 ft
const float ST = .03, RH = .07;        // the tray's slab and its rim
const float AX0 = -.98, AX1 = -.6;     // the anchor mass
const float ATOP = .44;
const float UBB = .17, UBT = .29;      // the upper tray's beams
const float UX1 = 1.28;                // its reach: 6 ft (0.366) beyond the floor below
const vec3 CORE = vec3(-1.32, 0., .2); // the upright core's axis (drawn at its own scale)
const float CR = .06, CTOP = .48, CROOT = -1.44;

vec3 palette(int i) {
  if (i == 0) return vec3(.80, .84, .90);   // support pier
  if (i == 1) return vec3(1., .66, .40);    // cantilever beam
  if (i == 2) return vec3(.98, .86, .62);   // concrete joists
  if (i == 3) return vec3(.86, .92, 1.);    // floor tray
  if (i == 4) return vec3(.86, .66, .56);   // anchor mass
  if (i == 5) return vec3(.70, .90, 1.);    // upper tray
  if (i == 6) return vec3(.70, 1., .80);    // central core
  return vec3(1., .42, .36);                // post-tensioning cables
}

float sdRect(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }

/** The section: everything in front of the plane z = 0.2 is removed (through the core's axis, behind the front beam). */
float cutS(vec3 p) { return p.z - .2; }

vec2 map(vec3 p) {
  float a = uApart;
  float bound = sdBox(p - vec3(.05 - .05 * a, -.5 + .45 * a, -.2 * a), vec3(1.6 + .05 * a, 1.0 + .45 * a, .66 + .35 * a));
  if (bound > .2) return vec2(bound, 0.);
  float cs = cutS(p);
  float g1 = built(1), g2 = built(2), g3 = built(3), g5 = built(5), g7 = built(7);
  vec2 res = vec2(1e5, 0.);

  // The base (not a part): a plain plate, grade for the core.
  res = U(res, vec2(sdBox(p - vec3(.0, BY - .025, 0.), vec3(1.58, .025, .64)), 4.));

  // 0 \xB7 Support piers: one concrete pier under each beam, at x = 0.
  {
    vec3 q = p;
    float z = abs(abs(q.z) - .3) - .15;   // the beams at z = \xB1.15, \xB1.45
    float d = sdBox(vec3(q.x, q.y - (BY + BB) * .5, z), vec3(.05, (BB - BY) * .5, .045));
    d = min(d, sdBox(vec3(q.x, q.y - (BY + .02), z), vec3(.08, .02, .07)));     // footing
    d = rise(d, 0, q.y, BY, BB);
    res = U(res, vec2(cutaway(d, cs), 20.));
  }

  // 1 \xB7 Cantilever beams: four girders over the piers, reaching 15 ft beyond them, their back ends running into the
  // anchor mass. Built out from the pier both ways.
  if (g1 > 0.) {
    vec3 q = p - apart(vec3(0., .22, 0.));
    float z = abs(abs(q.z) - .3) - .15;
    float x0 = mix(-.05, BX0, g1), x1 = mix(.05, BX1, g1);
    float d = sdBox(vec3(q.x - (x0 + x1) * .5, q.y - (BB + BT) * .5, z), vec3((x1 - x0) * .5, (BT - BB) * .5, .025));
    res = U(res, vec2(cutaway(d, cs), 21.));
  }

  // 2 \xB7 Concrete joists: deep, thin ribs between the beams, 4 ft apart; laid one after another from the anchor out.
  if (g2 > 0.) {
    vec3 q = p - apart(vec3(0., .4, 0.));
    float xr = q.x - clamp(floor(q.x / JS + .5), -2., 3.) * JS;
    float d = sdBox(vec3(xr, q.y - (BT - JD * .5), q.z), vec3(JW, JD * .5, .45));
    d = min(d, sdBox(vec3(q.x - (BX1 - JW), q.y - (BT - JD * .5), q.z), vec3(JW, JD * .5, .475)));   // the edge rib at the tip
    d = max(d, q.x - mix(-.6, BX1 + .02, g2));
    res = U(res, vec2(cutaway(d, cs), 22.));
  }

  // 3 \xB7 The floor tray: a slab on the beams and joists, with an upturned rim on its three free sides.
  if (g3 > 0.) {
    vec3 q = p - apart(vec3(0., .56, 0.));
    vec3 c = q - vec3((AX1 + BX1 + .03) * .5, BT + ST * .5, 0.);
    vec3 h = vec3((BX1 + .03 - AX1) * .5, ST * .5, .5);
    float slab = sdBox(c, h);
    float rim = max(abs(sdRect(c.xz - vec2(-.04, 0.), h.xz + vec2(.04, 0.))) - .0125, abs(q.y - (BT + ST + RH * .5 - .015)) - RH * .5 - .015);
    rim = max(rim, -(q.x - (AX1 + .02)));
    float d = max(min(slab, rim), q.x - mix(AX1, BX1 + .06, g3));
    res = U(res, vec2(cutaway(d, cs), 23.));
  }

  // 4 \xB7 The anchor mass: a heavy block of coursed masonry at the centre of the system, rising through both trays;
  // the beams run into it.
  {
    vec3 q = p - apart(vec3(0., 0., -.5));
    float d = sdBox(q - vec3((AX0 + AX1) * .5, (BY + ATOP) * .5, 0.), vec3((AX1 - AX0) * .5, (ATOP - BY) * .5, .55));
    float row = abs(fract((q.y - BY) / .07) - .5) * .07;
    float outer = sdRect(q.xz - vec2((AX0 + AX1) * .5, 0.), vec2((AX1 - AX0) * .5, .55));
    d = max(d, -max(-outer - .006, row - .005));
    d = rise(d, 4, q.y, BY, ATOP);
    res = U(res, vec2(cutaway(d, cs), 24.));
  }

  // 5 \xB7 The upper tray: a second slab with its rim, on two beams anchored in the mass, reaching 6 ft beyond the
  // floor below; it slides out of the anchor as it is built.
  if (g5 > 0.) {
    vec3 q = p - apart(vec3(0., .82, 0.));
    float x1 = mix(AX1, UX1, smoothstep(0., 1., g5));
    vec3 c = q - vec3((AX1 + x1) * .5, UBT + ST * .5, 0.);
    float slab = sdBox(c, vec3((x1 - AX1) * .5, ST * .5, .34));
    float rim = max(abs(sdRect(c.xz - vec2(-.04, 0.), vec2((x1 - AX1) * .5 + .04, .34))) - .0125, abs(q.y - (UBT + ST + RH * .5 - .015)) - RH * .5 - .015);
    rim = max(rim, AX1 + .02 - q.x);
    float beams = sdBox(vec3(q.x - (BX0 + x1) * .5, q.y - (UBB + UBT) * .5, abs(q.z) - .2), vec3((x1 - BX0) * .5, (UBT - UBB) * .5, .025));
    res = U(res, vec2(cutaway(min(min(slab, rim), beams), cs), 25.));
  }

  // 6 \xB7 The central core, the idea turned upright (at its own scale): one slender core, its root sunk below the base,
  // and five whole floors cantilevered from it, thick at the core and thin at their edges, like branches.
  {
    vec3 q = p - apart(vec3(-.1, 0., -.3)) - CORE;
    float core = sdCylinder(vec3(q.x, q.y - (CTOP + CROOT) * .5, q.z), (CTOP - CROOT) * .5, CR);
    float k = clamp(floor((q.y - (BY + .33)) / .26 + .5), 0., 4.);
    float yk = BY + .33 + k * .26;
    float r = max(abs(q.x), abs(q.z));
    float th = mix(.026, .008, clamp((r - CR) / .17, 0., 1.));
    float fl = max(abs(q.y - yk) - th, r - .23) * .85;
    float d = rise(min(core, fl), 6, q.y, CROOT, CTOP);
    res = U(res, vec2(cutaway(d, cs), q.y < BY ? 66. : 26.));
  }

  // 7 \xB7 Post-tensioning cables: steel tendons on each side of the two inner beams, anchored in the piers and at the
  // beams' ends, drawn out along the beams as they are tightened.
  if (g7 > 0.) {
    vec3 q = p - apart(vec3(0., .1, 0.));
    float z = abs(abs(q.z) - .15) - .042;
    vec3 c = vec3(q.x, q.y, z);
    vec3 a0 = vec3(-.02, BB - .1, 0.), a1 = vec3(BX1 - .03, BB + .1, 0.);
    float cab = sdCapsule(c, a0, mix(a0, a1, g7), .0075);
    res = U(res, vec2(cutaway(cab, cs), 67.));
    float plates = min(sdBox(c - a0, vec3(.03, .02, .016)), sdBox(c - a1, vec3(.008, .025, .016)));
    res = U(res, vec2(cutaway(plates, cs), 27.));
  }
  return res;
}
`};export{s as scene};
