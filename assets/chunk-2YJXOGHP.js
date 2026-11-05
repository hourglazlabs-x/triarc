import{c as s}from"./chunk-6Q7FPIH3.js";import{a as e}from"./chunk-WY76X7OO.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var t={id:"D08",cam:[2.15,1.3,4.75],target:[0,-.55,.12],floor:-1.6,ring:1.9,accent:e(s.D08),poster:8.6,glsl:`
const float GY = -1.;
const vec3 PR = vec3(-1., GY, -.2);     // the press
const vec3 FR = vec3(.82, GY, -.3);     // the frame

vec3 palette(int i) {
  if (i == 0) return vec3(1., .82, .55);    // veneer plies
  if (i == 1) return vec3(.94, .94, .90);   // plaster mold
  if (i == 2) return vec3(.62, .86, 1.);    // pressure box and membrane
  if (i == 3) return vec3(1., .78, .48);    // the molded shell
  if (i == 4) return vec3(.70, .78, .90);   // steel frame
  if (i == 5) return vec3(.92, .96, 1.);    // standard panels
  if (i == 6) return vec3(.96, .96, .96);   // slotted cards
  if (i == 7) return vec3(.55, .92, 1.);    // powers of ten
  if (i == 8) return vec3(1., .72, .40);    // three overlapping areas
  return vec3(1., .42, .22);                // heat
}

float gPress;

/** The mold's curved top: a shallow compound curve. */
float moldY(vec2 q) { return GY + .36 - .55 * q.x * q.x - .35 * q.y * q.y; }

vec2 press(vec3 p) {
  vec3 q = p - PR;
  float bound = sdBox(q - vec3(0., .5, 0.), vec3(.58, .56, .46));
  if (bound > .2) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  float my = moldY(q.xz) - GY;
  // The plaster mold, with heating coils just under its surface.
  float mold = max(max((q.y - my) * .8, -q.y), max(abs(q.x) - .46, abs(q.z) - .34));
  res = U(res, vec2(SHELL(mold), 41.));
  float coil = abs(fract(q.z * 6. + .5) - .5) / 6.;
  float coils = max(length(vec2(coil, (q.y - (my - .05)) * .9)) - .008, max(abs(q.x) - .42, abs(q.z) - .3));
  res = U(res, vec2(coils, gPress > .3 ? 69. : 29.));
  // Seven plies, their grain crossing, settling onto the mold and taking its curve.
  float lift = 1. - gPress;
  for (int k = 0; k < 7; k++) {
    float fk = float(k);
    float y = mix(my + .012 + fk * .009, .47 + fk * .037, lift);
    float curve = mix(1., .15, lift);
    float ply = max((abs(q.y - (y - (.55 * q.x * q.x + .35 * q.z * q.z) * curve)) - .0032) * .85, max(abs(q.x) - .44, abs(q.z) - .32));
    float grain = abs(fract((mod(fk, 2.) < .5 ? q.z : q.x) * 30.) - .5) / 30.;
    ply -= smoothstep(.006, 0., grain) * .0012;
    res = U(res, vec2(ply, 20.));
  }
  // The box, bolted shut, its membrane blown down onto the stack.
  float by = mix(.47, .78, lift);
  vec3 b = q - vec3(0., by + .12, 0.);
  float box = max(sdBox(b, vec3(.5, .13, .38)), -sdBox(b + vec3(0., .04, 0.), vec3(.48, .13, .36)));
  res = U(res, vec2(SHELL(box), 42.));
  float mem = max((abs(q.y - (by - .02 - (.08 * gPress) * (1. - q.x * q.x * 4.) * (1. - q.z * q.z * 6.))) - .004) * .8, max(abs(q.x) - .47, abs(q.z) - .35));
  res = U(res, vec2(SHELL(mem), 82.));
  vec3 bc = vec3(abs(q.x) - .5, q.y - by - .12, abs(q.z) - .38);
  res = U(res, vec2(length(bc) - .022, 22.));
  return res;
}

/** Distance to a box's twelve edges. */
float sdFrameB(vec3 p, vec3 b) {
  const float e = .004;
  p = abs(p) - b - e; vec3 q = abs(p + e) - e;
  return min(min(length(max(vec3(p.x, q.y, q.z), 0.)) + min(max(p.x, max(q.y, q.z)), 0.),
                 length(max(vec3(q.x, p.y, q.z), 0.)) + min(max(q.x, max(p.y, q.z)), 0.)),
                 length(max(vec3(q.x, q.y, p.z), 0.)) + min(max(q.x, max(q.y, p.z)), 0.));
}

vec2 frame(vec3 p) {
  vec3 q = p - FR;
  float bound = sdBox(q - vec3(0., .45, 0.), vec3(.68, .52, .4));
  if (bound > .2) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  // Columns every bay, trusses across, a deck on top.
  float cx = clamp(floor((q.x - .19) / .38 + .5), -2., 1.) * .38 + .19;
  vec3 c = vec3(q.x - cx, q.y, abs(q.z) - .3);
  float col = max(sdBox(c - vec3(0., .4, 0.), vec3(.014, .4, .014)), -sdBox(vec3(abs(c.x) - .014, c.y - .4, c.z), vec3(.008, .41, .009)));
  float tq = q.x - cx;
  float chords = min(sdBox(vec3(tq, q.y - .8, q.z), vec3(.008, .008, .31)), sdBox(vec3(tq, q.y - .72, q.z), vec3(.008, .008, .31)));
  float web = abs(fract(q.z * 6.25 + .5) - .5) / 6.25;
  float zig = max(max(abs(tq) - .006, abs(q.z) - .3), abs(q.y - .76 - (web - .04) * .9) - .006);
  float deck = sdBox(q - vec3(0., .82, 0.), vec3(.6, .008, .34));
  deck += smoothstep(.004, 0., abs(fract(q.x * 25.) - .5) / 25.) * .002;
  res = U(res, vec2(min(min(col, chords), min(zig, deck)), 24.));
  // Standard panels: two bays filled, one coming down into its slot.
  float slide = .9 * smoothstep(.0, .5, 1. - fract(uTime * .12) * 2.2);
  float panels = min(sdBox(vec3(q.x + .38, q.y - .36, abs(q.z) - .3), vec3(.17, .34, .006)), sdBox(vec3(q.x, q.y - .36, q.z + .3), vec3(.17, .34, .006)));
  float moving = sdBox(vec3(q.x - .38, q.y - .36 - slide, q.z + .3), vec3(.17, .34, .006));
  res = U(res, vec2(SHELL(min(panels, moving)), 45.));
  res = U(res, vec2(min(sdFrameB(vec3(q.x + .38, q.y - .36, abs(q.z) - .3), vec3(.17, .34, .006)), min(sdFrameB(vec3(q.x, q.y - .36, q.z + .3), vec3(.17, .34, .006)), sdFrameB(vec3(q.x - .38, q.y - .36 - slide, q.z + .3), vec3(.17, .34, .006)))), 65.));
  return res;
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., -.45, .2), vec3(1.95, .7, 1.35));
  if (bound > .25) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  float t = uTime;
  float cyc = fract(t / 9.);
  gPress = smoothstep(.12, .3, cyc) * (1. - smoothstep(.72, .9, cyc));

  // The ground.
  res = U(res, vec2(sdFrameB(p - vec3(0., GY - .006, .2), vec3(1.6, .002, 1.15)), 4.));
  res = U(res, press(p));
  res = U(res, frame(p));

  // The piece that came out of the press, lying beside it: one shell curved two ways, its plies showing at the edge.
  {
    vec3 q = p - vec3(-.22, GY + .1, .38);
    q.xz *= rot(.5); q.xy *= rot(-.12);
    float cur = q.y + .55 * q.x * q.x + .35 * q.z * q.z;
    float sh = max((abs(cur) - .017) * .85, max(abs(q.x) - .3, abs(q.z) - .22));
    sh += smoothstep(.2, .0, abs(fract(cur * 190. + .5) - .5)) * .0008;
    res = U(res, vec2(sh, 23.));
  }

  // Powers of ten: square frames, each ten times the last, growing out from one point as the camera rises.
  {
    vec3 q = p - vec3(-1.02, GY + .42, .72);
    q.yz *= rot(-.85);
    float z = fract(t * .1);
    float sq = 1e5;
    for (int k = 0; k < 2; k++) {
      float s = .036 * pow(10., float(k) + z - 1.);
      vec2 a = abs(q.xy) - s;
      float fr = abs(max(a.x, a.y)) - .0045;
      sq = min(sq, max(fr, abs(q.z) - .004));
    }
    float grow = .036 * pow(10., z);
    if (grow > .34) sq = 1e5;
    res = U(res, vec2(sq, 67.));
    res = U(res, vec2(length(q) - .014, 67.));
    res = U(res, vec2(sdCapsule(p, vec3(-1.02, GY, .72), vec3(-1.02, GY + .26, .72), .004), 24.));
  }

  // The design diagram's idea: three overlapping areas, the work where all three meet.
  {
    vec3 q = p - vec3(.05, GY + .006, .82);
    float c1 = length(q.xz - vec2(0., -.13)) - .26, c2 = length(q.xz - vec2(-.115, .07)) - .26, c3 = length(q.xz - vec2(.115, .07)) - .26;
    float rings = max(min(min(abs(c1), abs(c2)), abs(c3)) - .005, abs(q.y) - .004);
    res = U(res, vec2(rings, 28.));
    float meet = max(max(max(c1, c2), c3), abs(q.y - .01) - .01);
    res = U(res, vec2(meet, 68.));
  }

  // Play: plain cards with slots, built into a little tower.
  {
    vec3 q = p - vec3(1.12, GY, .78);
    float c = sdBox(q - vec3(0., .09, 0.), vec3(.13, .09, .003));
    c = min(c, sdBox(q - vec3(0., .09, 0.), vec3(.003, .09, .13)));
    c = min(c, sdBox(q - vec3(0., .183, 0.), vec3(.13, .003, .13)));
    c = min(c, sdBox(q - vec3(.06, .275, .0), vec3(.09, .09, .003)));
    c = min(c, sdBox(q - vec3(.06, .275, .0), vec3(.003, .09, .09)));
    vec3 s = vec3(abs(q.x) - .065, q.y - .03, q.z);
    c = max(c, -sdBox(s, vec3(.004, .035, .01)));
    res = U(res, vec2(c, 26.));
  }
  return res;
}
`};export{t as scene};
