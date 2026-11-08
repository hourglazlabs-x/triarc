import{a}from"./chunk-4QM5HSGV.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var c={id:"D01-hoist",cam:[3.099,2.247,5.667],target:[.2,-.25,-.55],floor:-1.04,ring:2.05,accent:e(a.D01),poster:2,parts:[{name:"wooden frame",view:{el:4}},{name:"vertical shaft",view:{az:-10,el:2,zoom:.7}},{name:"oxen yoke",view:{el:14,zoom:.75}},{name:"reversing screw",inside:!0,view:{az:-18,el:-8,zoom:.5}},{name:"horizontal wheels",view:{az:-12,el:10,zoom:.58}},{name:"three drums",view:{az:-45,el:6,zoom:.62}},{name:"rope",view:{az:-55,el:2,zoom:.72}},{name:"large crane",view:{az:-140,el:8,zoom:.85}},{name:"lantern crane",view:{az:160,el:12,zoom:.85}},{name:"counterweighted crane",view:{az:114,el:6,zoom:.85}}],glsl:`
const float G = -1.;          // the ground inside the dome
const float YA = G + 1.1;     // the drum shaft

vec3 palette(int i) {
  if (i == 0) return vec3(.86, .66, .44);   // wooden frame: oak
  if (i == 1) return vec3(.96, .80, .54);   // vertical shaft
  if (i == 2) return vec3(1., .88, .60);    // oxen yoke
  if (i == 3) return vec3(.70, .86, 1.);    // reversing screw
  if (i == 4) return vec3(1., .66, .40);    // horizontal wheels
  if (i == 5) return vec3(.94, .56, .38);   // three drums
  if (i == 6) return vec3(.98, .94, .78);   // rope: hemp
  if (i == 7) return vec3(.62, .92, .84);   // large crane
  if (i == 8) return vec3(.80, .74, 1.);    // lantern crane
  return vec3(1., .74, .64);                // counterweighted crane
}

/** A screw along y, half-length h: rings every pitch P standing th proud of the core r (a thread, at this size). */
float thread(vec3 q, float r, float th, float P, float h) {
  return max(length(q.xz) - r - th * (1. - abs(fract(q.y / P) - .5) * 2.), abs(q.y) - h) * .8;
}
/** A disc of radius r and half-thickness t about the x axis, centred at x = c. */
float discX(vec3 q, float c, float r, float t) { return max(length(q.yz) - r, abs(q.x - c) - t); }

float cutS(vec3 p) { return p.z; }

vec2 map(vec3 p) {
  float bnd = max(max(abs(p.x) - 2.3, abs(p.z + .45) - 2.45), max(G - .32 - p.y, p.y - .95 - .35 * uApart));
  if (bnd > .15) return vec2(bnd, 0.);
  float cs = cutS(p);
  // The working cycle: the oxen walk one way all the time; the load rises, then is lowered.
  float ph = fract(uTime / 24.);
  float up = ph < .5 ? 1. : -1.;
  float sl = -.012 * up;                                    // the shaft lowered (upper wheel engaged) or raised
  float yl = G + .5 + .9 * (ph < .5 ? ph : 1. - ph);         // the load
  float A = .3 * uTime - .16;                                // the shaft's turn
  vec2 res = vec2(1e5, 0.);
  float d;

  // The ground inside the dome, with the oxen's worn circle (not a part).
  float rg = length(p.xz);
  d = max(max(rg - 1.24, abs(p.y - G + .015) - .015), .008 - length(vec2(rg - .82, p.y - G)));
  res = U(res, vec2(d, 4.));

  // 0 Wooden frame: posts outside the oxen's circle, beams overhead, the shaft's nut in the ground, the pulley's mast.
  vec3 q = p - apart(vec3(0., 0., -.55));
  vec3 f = vec3(abs(q.x), q.y - G, abs(q.z));
  d = sdBox(f - vec3(1.18, .72, .34), vec3(.035, .72, .035));
  d = min(d, sdBox(f - vec3(0., 1.4, .34), vec3(1.25, .04, .035)));
  d = min(d, sdBox(f - vec3(1.18, 1.4, 0.), vec3(.035, .04, .38)));
  d = min(d, sdBox(vec3(q.x, f.y - 1.4, q.z), vec3(.045, .04, .37)));
  d = min(d, sdBox(f - vec3(1.18, .03, 0.), vec3(.05, .03, .42)));
  d = min(d, sdCapsule(f, vec3(1.18, 1.06, .34), vec3(.86, 1.38, .34), .02));
  d = min(d, sdBox(vec3(q.x - 1.18, f.y - 1.1, q.z), vec3(.035, .035, .37)));          // the drums' bearings
  d = min(d, sdBox(vec3(q.x - .38, f.y - 1.24, f.z - .34), vec3(.022, .15, .022)));
  d = min(d, sdBox(vec3(q.x - .38, f.y - 1.1, q.z), vec3(.022, .028, .36)));
  d = min(d, max(sdBox(vec3(q.x, f.y - .07, q.z), vec3(.11, .07, .11)), .052 - length(q.xz)));   // the nut
  d = min(d, sdBox(vec3(q.x - 1.21, f.y - 1.62, q.z + .1), vec3(.025, .2, .025)));      // the mast
  d = min(d, sdBox(vec3(q.x - 1.37, f.y - 1.8, q.z + .1), vec3(.16, .022, .022)));
  d = min(d, max(length(vec2(q.x - 1.5, f.y - 1.74)) - .06, abs(q.z) - .012));         // the pulley
  d = min(d, sdBox(vec3(q.x - 1.5, f.y - 1.77, q.z + .05), vec3(.008, .035, .05)));
  res = U(res, vec2(cutaway(rise(d, 0, f.y, 0., 1.85), cs), 20.));

  // 1 Vertical shaft.
  q = p - apart(vec3(0., .12, .22));
  float ys = q.y - G - sl;
  d = sdCylinder(vec3(q.x, ys - .79, q.z), .65, .045);
  res = U(res, vec2(cutaway(rise(d, 1, ys, .14, 1.44), cs), 21.));

  // 3 Reversing screw: under the shaft's foot, in its nut; a bar turns it, raising or lowering the shaft.
  q = p - apart(vec3(0., -.3, .22));
  float yw = q.y - G;
  d = max(min(sdHelix(vec3(q.x, yw, q.z), .046, .03, 0., .01), length(q.xz) - .04), abs(yw - .075 - sl * .5) - .07 - sl * .5);
  d = min(d, sdCylinder(vec3(q.x, yw - .152 - sl, q.z), .012, .055));
  d = min(d, sdBox(vec3(q.x, yw - .152 - sl, q.z), vec3(.17, .009, .009)));
  res = U(res, vec2(cutaway(rise(d, 3, yw, 0., .17), cs), 23.));

  // 4 Horizontal wheels: two crown wheels on the shaft, their oak cogs facing each other across the pinion.
  q = p - apart(vec3(0., .34, .22));
  q.y -= G + sl;
  q.xz *= rot(-A);
  vec3 w = vec3(q.x, abs(q.y - 1.1), q.z);
  float rr = length(q.xz);
  d = max(abs(rr - .29) - .035, abs(w.y - .14) - .018);
  vec3 sp = vec3(abs(q.x), w.y - .14, abs(q.z));
  d = min(d, sdBox(vec3(max(sp.x, sp.z), sp.y, min(sp.x, sp.z)), vec3(.27, .014, .016)));
  d = min(d, sdCylinder(vec3(q.x, w.y - .14, q.z), .03, .062));
  vec3 pc = polarRep(w, 20.);
  d = min(d, sdCylinder(pc - vec3(.29, .097, 0.), .026, .011));
  res = U(res, vec2(cutaway(rise(d, 4, q.y, .92, 1.28), cs), 24.));

  // 5 Three drums on one horizontal shaft (1.2, 0.9 and 0.6 m across), with the shaft's lantern pinion.
  q = p - apart(vec3(.24, .1, .22));
  vec3 a5 = vec3(q.x, q.y - YA, q.z);
  a5.yz *= rot(-A * 2.4 * up);
  float ra = length(a5.yz);
  d = max(ra - .022, abs(q.x - .72) - .49);
  d = min(d, discX(a5, .52, .15, .08));
  d = min(d, discX(a5, .75, .11, .07));
  d = min(d, discX(a5, .95, .075, .065));
  d = min(d, max(ra - .172, abs(abs(q.x - .52) - .08) - .007));                        // the drums' flanges
  d = min(d, max(ra - .132, abs(abs(q.x - .75) - .07) - .007));
  d = min(d, max(ra - .097, abs(abs(q.x - .95) - .065) - .007));
  d = min(d, max(ra - .066, abs(abs(q.x - .29) - .042) - .006));                       // the pinion: two discs
  vec3 pv = polarRep(a5.yxz, 6.);
  d = min(d, max(length(pv.xz - vec2(.05, 0.)) - .009, abs(q.x - .29) - .045));        // and six staves
  res = U(res, vec2(cutaway(rise(d, 5, q.x, .2, 1.24), cs), 25.));

  // 6 Rope: wound on the largest drum (more of it as the load rises), over the pulley, down to the load.
  q = p - apart(vec3(.4, .22, .22));
  float L = .04 + .12 * clamp((yl - G - .5) / .45, 0., 1.);
  vec3 c6 = vec3(q.x - .44, q.y - YA, q.z);
  d = max(length(vec2(length(c6.yz) - .161, (fract(c6.x / .022) - .5) * .022)) - .011, abs(c6.x - L * .5) - L * .5);
  d = min(d, sdCapsule(q, vec3(.44 + L, YA + .161, 0.), vec3(1.49, G + 1.81, 0.), .011));
  d = min(d, sdCapsule(q, vec3(1.565, G + 1.74, 0.), vec3(1.565, yl + .06, 0.), .011));
  d = min(d, sdTorus(vec3(q.x - 1.565, q.z, q.y - yl - .04), vec2(.022, .008)));
  float gr = built(6);
  res = U(res, vec2(cutaway(rise(d, 6, q.x, .42, 1.6), cs), 26.));
  d = gr <= 0. ? 1e5 : sdBox(q - vec3(1.56, yl - .035, 0.), vec3(.07, .045, .055));   // the load (not a part)
  res = U(res, vec2(d, 1.));

  // 2 Oxen yoke: the sweep from the shaft, its strut, and the yoke with a bow round each ox's neck; the oxen under it.
  q = p - apart(vec3(-.1, -.06, .45));
  q.y -= G;
  q.xz *= rot(-A);
  d = sdBox(vec3(q.x - .435, q.y - .4, q.z), vec3(.385, .022, .022));
  d = min(d, sdCapsule(q, vec3(.04, .78, 0.), vec3(.45, .42, 0.), .015));
  d = min(d, sdBox(vec3(q.x - .82, q.y - .4, q.z), vec3(.21, .018, .026)));
  vec3 o = vec3(abs(q.x - .82) - .115, q.y, q.z);
  d = min(d, max(length(vec2(length(o.xy - vec2(0., .36)) - .05, q.z)) - .008, o.y - .36));
  res = U(res, vec2(cutaway(rise(d, 2, length(q.xz), 0., 1.04), cs), 22.));
  // The pair of oxen (not a part), walking toward +z of the sweep, shown once their yoke is built.
  float ox = sdEllipsoid(o - vec3(0., .25, -.29), vec3(.095, .12, .29));
  ox = min(ox, sdEllipsoid(o - vec3(0., .3, .06), vec3(.055, .06, .09)));
  vec3 lg = vec3(abs(o.x) - .05, o.y, abs(o.z + .29) - .19);
  ox = min(ox, sdCapsule(lg, vec3(0., .02, 0.), vec3(0., .2, 0.), .021));
  ox = min(ox, sdCapsule(vec3(abs(o.x), o.y, o.z), vec3(.03, .36, .04), vec3(.085, .41, .03), .008));
  res = U(res, vec2(built(2) <= 0. ? 1e5 : cutaway(ox, cs), 1.));

  // The cranes, smaller, each on its own plinth (the plinths are not parts), arms turned toward the viewer's right.
  // 7 Large crane: a timber tower, an arm projecting from it, a carriage on a screw, a screw lowering the block.
  q = (p - vec3(-1.2, G, -1.65) - apart(vec3(-.22, 0., -.12))) / 1.2;
  q.xz *= rot(.49);
  vec3 t7 = vec3(abs(q.x), q.y, abs(q.z));
  d = sdBox(t7 - vec3(.1, .34, .1), vec3(.016, .3, .016));
  d = min(d, sdBox(q - vec3(0., .65, 0.), vec3(.13, .018, .13)));
  d = min(d, sdCapsule(t7, vec3(.1, .08, .1), vec3(.1, .6, -.1), .009));
  d = min(d, sdBox(q - vec3(.2, .69, 0.), vec3(.44, .018, .024)));
  d = min(d, thread(vec3(q.y - .725, q.x - .28, q.z), .009, .005, .018, .3));
  d = min(d, sdBox(q - vec3(.42, .66, 0.), vec3(.032, .028, .036)));
  d = min(d, thread(vec3(q.x - .42, q.y - .53, q.z), .009, .005, .018, .11));
  d = min(d, sdBox(q - vec3(.42, .38, 0.), vec3(.06, .04, .045)));
  res = U(res, vec2(cutaway(rise(d * 1.2, 7, q.y, .04, .74), cs), 27.));
  float pl = sdCylinder(q - vec3(0., .02, 0.), .02, .3);
  // 8 Lantern crane: a round platform raised on four screws, a mast, a swivelling arm with two endless screws and
  // two wooden disks, a marble block hanging from one.
  q = (p - vec3(.1, G, -2.05) - apart(vec3(0., 0., -.22))) / 1.2;
  q.xz *= rot(.49);
  vec3 l8 = vec3(abs(q.x), q.y, abs(q.z));
  d = thread(l8 - vec3(.16, .13, .16), .012, .005, .02, .1);
  d = min(d, sdCylinder(q - vec3(0., .245, 0.), .013, .25));
  d = min(d, sdCylinder(q - vec3(0., .5, 0.), .25, .018));
  d = min(d, sdBox(q - vec3(0., .76, 0.), vec3(.32, .016, .016)));
  d = min(d, thread(vec3(q.y - .73, l8.x - .18, q.z), .008, .004, .016, .11));
  d = min(d, discX(vec3(l8.x, q.y - .73, q.z), .21, .045, .008));
  d = min(d, sdCapsule(q, vec3(.21, .69, 0.), vec3(.21, .6, 0.), .004));
  d = min(d, sdBox(q - vec3(.21, .56, 0.), vec3(.04, .035, .035)));
  res = U(res, vec2(cutaway(rise(d * 1.2, 8, q.y, .04, .78), cs), 28.));
  pl = min(pl, sdCylinder(q - vec3(0., .02, 0.), .02, .3));
  // 9 Counterweighted crane: the tall mast on its legs, the arm with load and counterweight on screws either side,
  // the vertical screw for the load, and the long oblique beam that swung it.
  q = (p - vec3(1.2, G, -1.7) - apart(vec3(.22, 0., -.12))) / 1.2;
  q.xz *= rot(.49);
  d = sdCylinder(q - vec3(0., .67, 0.), .65, .022);
  d = min(d, sdCapsule(vec3(abs(q.x), q.y, abs(q.z)), vec3(0., .26, 0.), vec3(.15, .02, .15), .011));
  d = min(d, sdBox(q - vec3(0., 1.31, 0.), vec3(.5, .016, .02)));
  d = min(d, thread(vec3(q.y - 1.28, abs(q.x) - .27, q.z), .008, .004, .016, .2));
  d = min(d, sdBox(q - vec3(-.34, 1.2, 0.), vec3(.055, .055, .045)));
  d = min(d, thread(vec3(q.x - .34, q.y - 1.13, q.z), .008, .004, .016, .14));
  d = min(d, sdBox(q - vec3(.34, .96, 0.), vec3(.05, .035, .04)));
  d = min(d, sdCapsule(q, vec3(-.02, .45, 0.), vec3(-.58, .03, .26), .012));
  res = U(res, vec2(cutaway(rise(d * 1.2, 9, q.y, .02, 1.33), cs), 29.));
  pl = min(pl, sdCylinder(q - vec3(0., .02, 0.), .02, .3));
  res = U(res, vec2(pl * 1.2, 4.));
  return res;
}
`};export{c as scene};
