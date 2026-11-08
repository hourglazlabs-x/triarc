import{a}from"./chunk-4QM5HSGV.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var s={id:"D06-five-points",cam:[2.9,1.66,5.02],target:[0,0,0],floor:-1.25,ring:1.95,accent:e(a.D06),poster:2,parts:[{name:"individual foundations",inside:!0,view:{az:-8,el:-12,zoom:.72}},{name:"pilotis",view:{az:-6,el:-12,zoom:.82}},{name:"floor slabs",view:{az:-10,el:4,zoom:.92}},{name:"garden under the house",view:{az:8,el:-13,zoom:.86}},{name:"free plan",inside:!0,view:{az:-22,el:2,zoom:.74}},{name:"free fa\xE7ade",view:{az:-24,el:2,zoom:.92}},{name:"horizontal window",view:{az:-16,el:-2,zoom:.78}},{name:"roof garden",view:{az:-10,el:34,zoom:.8}}],glsl:`
const float G = -.55;                // the ground: the garden's surface
const float BAY = .6;                // the equal interval of the supports (4.75 m)
const vec2 OV = vec2(1.04, .74);     // the slabs' half-size: the grid (.9 by .6 from the middle) plus the overhang
const float TH = .035;               // a slab's thickness
const float S1 = G + .42;            // the slabs' tops: first floor, second floor, roof
const float FS = .38;                // floor to floor above the pilotis storey
const float RT = S1 + 2. * FS;       // the roof's top
const float PR = .027;               // a support's radius
const float CL = FS - TH;            // a floor's clear height
const vec3 BOX = vec3(1.32, .14, .92);   // the plot's open box: half-size, from G - .28 to G

vec3 palette(int i) {
  if (i == 0) return vec3(1., .74, .52);    // individual foundations
  if (i == 1) return vec3(.92, .93, .96);   // pilotis
  if (i == 2) return vec3(.80, .90, 1.);    // floor slabs
  if (i == 3) return vec3(.50, .92, .52);   // garden under the house
  if (i == 4) return vec3(1., .82, .52);    // free plan
  if (i == 5) return vec3(.95, .95, .90);   // free fa\xE7ade
  if (i == 6) return vec3(.55, .88, 1.);    // horizontal window
  return vec3(.62, 1., .62);                // roof garden
}

float sdRect(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
/** Distance to a box's twelve edges, each a bar of half-thickness e. */
float sdFrame(vec3 p, vec3 b, float e) {
  p = abs(p) - b; vec3 q = abs(p + e) - e;
  return min(min(length(max(vec3(p.x, q.y, q.z), 0.)) + min(max(p.x, max(q.y, q.z)), 0.),
                 length(max(vec3(q.x, p.y, q.z), 0.)) + min(max(q.x, max(p.y, q.z)), 0.)),
                 length(max(vec3(q.x, q.y, p.z), 0.)) + min(max(q.x, max(q.y, p.z)), 0.));
}
/** Offsets from the nearest of the 4 by 3 supports (at x = -.9, -.3, .3, .9 and z = -.6, 0, .6). */
vec2 gridLocal(vec2 xz) {
  return vec2(xz.x - (clamp(floor(xz.x / BAY), -2., 1.) + .5) * BAY, xz.y - clamp(round(xz.y / BAY), -1., 1.) * BAY);
}
/** A bush: two overlapping spheres, size s. */
float bush(vec3 q, float s) { return min(length(q) - s, length(q - vec3(s * .7, -s * .2, s * .3)) - s * .75); }

/** The section: a vertical plane through the middle row of supports; the front half is removed. */
float cutS(vec3 q) { return q.z; }

float sceneDetail(vec3 p, float m) {
  int k = int(m + .5);
  if (k == 23 || k == 27) return (noise3(p * 90.) - .5) * .0016;   // grass and leaves
  if (k == 25) return (abs(fract(p.y * 30.) - .5) - .25) * .0004;  // panel courses
  return 0.;
}

vec2 map(vec3 p) {
  float top = RT + .25 + .72 * uApart;
  float bound = sdBox(p - vec3(0., (top + G - .62) * .5, 0.), vec3(BOX.x + .15 * uApart, (top - G + .62) * .5, BOX.z + .5 * uApart));
  if (bound > .2) return vec2(bound, 0.);
  vec3 q;
  float d;

  // The plot's open box (not a part): its edges and its floor, so the footings show under the garden.
  vec2 res = vec2(sdFrame(p - vec3(0., G - BOX.y, 0.), BOX, .006), 4.);
  res = U(res, vec2(sdBox(p - vec3(0., G - 2. * BOX.y + .006, 0.), vec3(BOX.x, .006, BOX.z)), 4.));

  // 0 \xB7 Individual foundations: under each support its own footing, a square pad and a pedestal, in the ground.
  // Taken apart they drop below the box.
  q = p - apart(vec3(0., -.36, 0.));
  if (q.y < G + .05) {
    vec2 l = gridLocal(q.xz);
    d = min(sdBox(vec3(l.x, q.y - (G - .19), l.y), vec3(.075, .028, .075)), sdBox(vec3(l.x, q.y - (G - .08), l.y), vec3(.036, .085, .036)));
    d = min(d, sdBox(vec3(l.x, q.y - (G - .158), l.y), vec3(.052, .006, .052)));
    res = U(res, vec2(cutaway(rise(d, 0, q.y, G - .22, G), cutS(q)), 20.));
  } else res = U(res, vec2(q.y - G, 0.));

  // 1 \xB7 Pilotis: twelve round supports at equal intervals, from the footings up through the floors to the roof.
  q = p;
  {
    vec2 l = gridLocal(q.xz);
    d = max(length(l) - PR, abs(q.y - (G + RT - TH) * .5) - (RT - TH - G) * .5);
    res = U(res, vec2(cutaway(rise(d, 1, q.y, G, RT), cutS(q)), 21.));
  }

  // 2 \xB7 Floor slabs: the two floors and the roof, carried by the supports and reaching out past them all round.
  // Taken apart they stack up; only the nearest is evaluated (they share one footprint).
  float sp = FS + .16 * uApart;
  float ks = clamp(round((p.y - S1 - .16 * uApart + TH * .5) / sp), 0., 2.);
  q = p - apart(vec3(0., .16 * (ks + 1.), 0.));
  float sy = S1 + ks * FS;
  d = sdBox(q - vec3(0., sy - TH * .5, 0.), vec3(OV.x, TH * .5, OV.y));
  res = U(res, vec2(cutaway(rise(d, 2, q.y, S1 - TH, RT), cutS(q)), 22.));

  // 3 \xB7 The garden under the house: the plot's lawn runs on under the raised house, with a path in under it, bushes
  // between the supports and out in the plot, and two trees. It spreads from under the house as it is built.
  float g3 = built(3);
  if (g3 > 0.) {
    q = p;
    float spr = length(q.xz) - mix(0., 1.7, smoothstep(0., 1., g3));
    d = sdBox(q - vec3(0., G - .007, 0.), vec3(BOX.x - .008, .007, BOX.z - .008));
    d = min(d, sdBox(q - vec3(.12, G + .001, .46), vec3(.07, .004, .46)));
    if (q.y > G + .6) d = min(d, q.y - G - .45);
    else {
      d = min(d, bush(q - vec3(-.58, G + .03, .3), .045));
      d = min(d, bush(q - vec3(.6, G + .03, -.32), .045));
      d = min(d, bush(q - vec3(-.05, G + .025, -.3), .035));
      d = min(d, bush(q - vec3(-1.16, G + .04, .62), .06));
      d = min(d, bush(q - vec3(1.16, G + .04, -.56), .055));
      vec3 t1 = q - vec3(1.17, G, .66), t2 = q - vec3(-1.17, G, -.62);
      d = min(d, min(sdCapsule(t1, vec3(0.), vec3(0., .24, 0.), .012), bush(t1 - vec3(0., .32, 0.), .1)));
      d = min(d, min(sdCapsule(t2, vec3(0.), vec3(0., .2, 0.), .011), bush(t2 - vec3(0., .27, 0.), .085)));
    }
    res = U(res, vec2(cutaway(max(d, spr), cutS(q)), 23.));
  }

  // 4 \xB7 Free plan: partitions set freely, curved and straight, clear of the supports, each level laid out on its own.
  // Taken apart they go up with their floor.
  if (built(4) > 0.) {
    q = p - apart(vec3(0., .16, 0.));
    float y0 = S1;
    float hy = abs(q.y - y0 - CL * .5) - CL * .5;
    float w = max(abs(length(q.xz - vec2(-.62, -.26)) - .2) - .006, q.z + .26);
    w = min(w, sdRect(q.xz - vec2(.22, -.33), vec2(.33, .006)));
    w = min(w, sdRect(q.xz - vec2(.63, .3), vec2(.006, .17)));
    float f1 = max(w, hy);
    q = p - apart(vec3(0., .32, 0.));
    y0 = S1 + FS;
    hy = abs(q.y - y0 - CL * .5) - CL * .5;
    float sw = (q.z + .24 - .07 * sin(q.x * 7. + .6)) * .85;
    w = max(abs(sw) - .006, abs(q.x + .32) - .42);
    w = min(w, sdRect(q.xz - vec2(.6, -.33), vec2(.006, .22)));
    w = min(w, max(abs(length(q.xz - vec2(-.02, .34)) - .18) - .006, -(q.x + .02)));
    float f2 = max(w, hy);
    d = min(rise(f1, 4, p.y, S1, S1 + 2. * FS), rise(f2, 4, p.y, S1, S1 + 2. * FS));
    res = U(res, vec2(cutaway(d, cutS(p)), 24.));
  }

  // 5 \xB7 Free fa\xE7ade: thin panels hung at the slab edges, outside the supports, on both floors: on the long sides a
  // band below and above each window, the two ends closed. Taken apart, each side steps outwards.
  float g5 = built(5);
  if (g5 > 0.) {
    // the long sides: a band below and above each floor's window, jointed every .25
    q = p - apart(vec3(0., .24, sign(p.z) * .36));
    float ky = clamp(floor((q.y - S1) / FS), 0., 1.);
    float yl = q.y - (S1 + ky * FS);   // height above this floor's slab top
    float band = max(max(abs(abs(q.z) - OV.y + .007) - .007, abs(q.x) - OV.x), abs(yl - CL * .5) - CL * .5);
    band = max(band, -max(abs(yl - .175) - .085, abs(q.x) - (OV.x - .03)));
    float joint = abs(q.x - round(q.x / .25) * .25) - .003;
    band = max(band, -max(joint, OV.y - .004 - abs(q.z)));
    // the ends, closed
    q = p - apart(vec3(sign(p.x) * .25, .24, 0.));
    ky = clamp(floor((q.y - S1) / FS), 0., 1.);
    yl = q.y - (S1 + ky * FS);
    float en = max(max(abs(abs(q.x) - OV.x + .007) - .007, abs(q.z) - OV.y), abs(yl - CL * .5) - CL * .5);
    joint = abs(q.z - round(q.z / .25) * .25) - .003;
    en = max(en, -max(joint, OV.x - .004 - abs(q.x)));
    d = min(band, en);
    res = U(res, vec2(cutaway(rise(d, 5, p.y, S1, RT), cutS(p)), 25.));
  }

  // 6 \xB7 Horizontal window: on each long side of each floor one window running the whole length between the closed
  // ends, past the supports behind it, glazed, its mullions on a rhythm of their own. It runs out from the middle as it
  // is built; taken apart it steps out beyond the fa\xE7ade.
  float g6 = built(6);
  if (g6 > 0.) {
    q = p - apart(vec3(0., .24, sign(p.z) * .56));
    float ky = clamp(floor((q.y - S1) / FS), 0., 1.);
    float yl = q.y - (S1 + ky * FS) - .175;
    float run = abs(q.x) - (OV.x - .03) * smoothstep(0., 1., g6);
    float zf = abs(q.z) - OV.y + .007;
    float frame = max(max(abs(sdRect(vec2(q.x, yl), vec2(OV.x - .03, .085))) - .006, abs(zf) - .008), run);
    float mul = max(max(abs(q.x - round(q.x / .125) * .125) - .003, abs(yl) - .085), max(abs(zf) - .006, run));
    res = U(res, vec2(cutaway(min(frame, mul), cutS(q)), 26.));
    float gl = max(max(sdRect(vec2(q.x, yl), vec2(OV.x - .03, .085)), abs(zf) - .0015), run);
    res = U(res, vec2(SHELL(cutaway(gl, cutS(q))), 86.));
  }

  // 7 \xB7 Roof garden: on the flat roof a low parapet, paving, three planters with bushes, a bed of grass and a small
  // tree. It lifts clear of the roof slab when taken apart.
  float g7 = built(7);
  if (g7 > 0.) {
    q = p - apart(vec3(0., .72, 0.));
    float yb = q.y - RT;
    if (yb < .4 && yb > -.05) {
      d = max(abs(sdRect(q.xz, OV - .007)) - .007, abs(yb - .035) - .035);
      d = min(d, sdBox(q - vec3(0., RT + .004, 0.), vec3(OV.x - .015, .004, OV.y - .015)));
      float kx = clamp(round((q.x + .5) / .5), 0., 2.);
      vec3 pl = q - vec3(-.5 + kx * .5, RT + .03, -.42);
      d = min(d, sdBox(pl, vec3(.17, .03, .07)));
      d = min(d, bush(pl - vec3(-.06, .05, 0.), .045));
      d = min(d, bush(pl - vec3(.07, .045, .01), .04));
      d = min(d, sdBox(q - vec3(-.5, RT + .012, .3), vec3(.36, .012, .2)));
      vec3 tq = q - vec3(.55, RT, .32);
      d = min(d, sdBox(tq - vec3(0., .025, 0.), vec3(.07, .025, .07)));
      d = min(d, min(sdCapsule(tq, vec3(0.), vec3(0., .16, 0.), .009), bush(tq - vec3(0., .21, 0.), .07)));
      res = U(res, vec2(cutaway(rise(d, 7, q.y, RT, RT + .3), cutS(q)), 27.));
    } else res = U(res, vec2(abs(yb - .17) - .2, 0.));
  }
  return res;
}
`};export{s as scene};
