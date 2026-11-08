import{a as t}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var a={id:"D09-less-but-better",cam:[2.31,1.04,4.83],target:[0,-.08,0],floor:-1.6,ring:1.9,accent:e(t.D09),poster:2,parts:[{name:"confusion of forms",view:{az:-12,el:4,zoom:.86}},{name:"superfluous elements",view:{az:-20,el:-2,zoom:.8}},{name:"essential body",inside:!0,view:{az:-14,el:2,zoom:.8}},{name:"reduced controls",inside:!0,view:{az:-20,el:-2,zoom:.7}},{name:"functional groups",inside:!0,view:{az:-22,el:-2,zoom:.7}},{name:"ordering system",inside:!0,view:{az:-26,el:0,zoom:.74}},{name:"single accent",inside:!0,view:{az:-16,el:-2,zoom:.66}},{name:"ten principles",view:{az:8,el:16,zoom:1.02}}],glsl:`
// Kept compact on purpose: the software renderer slows with the size of map()'s code, executed or not, so repeated
// things are drawn by symmetry, repetition or one loop, and the build and the whole model share one path.
const float PY = -.95;                 // the base: where the box, the skirt and the panels stand
const vec3 EB = vec3(0., -.56, 0.);    // the essential body: its centre
const vec3 EH = vec3(.6, .36, .28);    // and half-size: its face is 10 by 6 modules
const float MD = .12;                  // the module of the ordering system
const float FZ = .28;                  // the face's plane
const float RS = 1.3;                  // the ring of ten panels: its radius
const float A0 = 1.702;                // where the ring starts: the tenth panel stands front right of the scene's own view

vec3 gC0 = vec3(1., .46, .5);          // the colour of the crowded object's nearest volume (map() sets it at the hit)
vec3 gC1 = vec3(1., .78, .36);         // of the nearest ornament

vec3 palette(int i) {
  // The shading reads the palette right after the normal's four map() calls at the hit, so a volume or an ornament
  // takes the colour map() last set for it.
  if (i == 0) return gC0;                   // confusion of forms: competing colours
  if (i == 1) return gC1;                   // superfluous elements: gilt, pink, turquoise, violet
  if (i == 2) return vec3(.93, .95, .98);   // the essential body: white
  if (i == 3) return vec3(.64, .68, .74);   // the controls: grey
  if (i == 4) return vec3(.76, .82, .90);   // functional groups: pale grey fields and blank labels
  if (i == 5) return vec3(.42, .76, 1.);    // the ordering system: its grid
  if (i == 6) return vec3(1., .5, .16);     // the single accent
  return vec3(.88, .93, 1.);                // ten principles
}

/** The section: a plane just in front of the box's face, so the cut takes the ghost's front off and keeps the face. */
float cutS(vec3 q) { return q.z - .36; }

float sdRect(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.)) + min(max(d.x, d.y), 0.); }

// \u2500\u2500 0 \xB7 the crowded object \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
/** Its competing volumes (frame: the model's centre at the base), and the colour of the nearest. */
float crowd(vec3 p, out vec3 col) {
  float d = sdRoundBox(p - vec3(0., -.53, 0.), vec3(.74, .36, .41), .09);
  col = vec3(1., .46, .5);                                                 // a carcass: coral
  vec3 a = p - vec3(0., -.16, 0.);
  float arch = max(max((length(a.xy / vec2(.72, .48)) - 1.) * .45, abs(a.z) - .35), -a.y);
  if (arch < d) col = vec3(.46, 1., .76);                                  // an arched top: mint
  d = min(d, arch);
  float bow = sdEllipsoid(p - vec3(0., -.57, .37), vec3(.58, .25, .17));
  if (bow < d) col = vec3(1., .82, .3);                                    // a bowed front: mustard
  d = smin(d, bow, .03);
  vec3 s = vec3(abs(p.x) - .76, p.y + .36, p.z);
  s.y -= clamp(floor(s.y / -.24 + .5), 0., 1.) * -.24;                     // two scrolls a side
  float scroll = max(sdTorus(s.xzy, vec2(.095, .03)), -s.x);
  if (scroll < d) col = vec3(.72, .52, 1.);                                // scrolls: violet
  d = min(d, scroll);
  float skirt = sdRoundBox(p - vec3(0., PY + .045, 0.), vec3(.84, .045, .48), .03);
  if (skirt < d) col = vec3(.3, .82, .9);                                  // a skirt: teal
  return min(d, skirt);
}

// \u2500\u2500 1 \xB7 ornaments, each in its own frame \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
float band(vec3 o) { return max(abs(sdRect(o.xz, vec2(.66, .33)) - .1) - .011, abs(o.y) - .018); }
float fins(vec3 o) {
  vec3 f = o - vec3(.06, clamp(floor(o.y / .1 + .5), -1., 1.) * .1, 0.);
  f.z += f.x * .9;
  return sdBox(f, vec3(.06, .007, .1)) * .7;
}
float knobs(vec3 o) {
  vec3 k = o - vec3(clamp(floor(o.x / .13 + .5), -1., 1.) * .13, 0., 0.);
  return sdRoundBox(k, vec3(.036, .036, .03), .03);
}
float crest(vec3 o) {
  // a half-disc fan with a ball on top; its ribs are slots cut across it
  float r = length(o.xy);
  float fan = max(max(max(r - .2, -o.y), abs(o.z) - .012), .05 - r);
  fan = max(fan, -max(abs(fract(o.x / .06 + .5) - .5) * .06 - .008, .17 - r - .1));
  return min(fan, length(o - vec3(0., .25, 0.)) - .032);
}

/**
 * The ornaments: a band, a pair of fins, three knobs and a crest. On the crowded object until they are taken away
 * (part 0's then); then lifted one by one, and the higher one ends, the more it breaks up into thin slices. Each is
 * drawn only where its own bound is nearer than what is already near.
 */
vec2 ornaments(vec3 p, float best) {
  float b1 = built(1);
  bool on = b1 <= 0.;
  if (uBuild <= 0. || b1 >= 1.) {
    float bound = sdBox(p - vec3(0., .78, .1), vec3(.86, .44, .5));
    if (bound > min(best, .2)) return vec2(bound, 0.);
  }
  float d = 1e5, e, k = 0., y = 0.; vec3 col = vec3(1.);
  float lk = on ? 0. : smoothstep(0., .4, b1);
  vec3 o = p - mix(vec3(0., -.34, 0.), vec3(0., .46, -.04), lk);
  if (sdBox(o, vec3(.79, .03, .46)) < min(d, best)) { e = band(o); if (e < d) { d = e; col = vec3(1., .8, .34); k = .1 * lk; y = o.y; } }
  lk = on ? 0. : smoothstep(.2, .6, b1);
  o = p - mix(vec3(0., -.02, .02), vec3(0., .66, .06), lk);
  o.x = abs(o.x) - mix(.72, .5, lk);
  if (length(o - vec3(.06, 0., -.04)) - .2 < min(d, best)) { e = fins(o); if (e < d) { d = e; col = vec3(.36, .92, 1.); k = .3 * lk; y = o.y; } }
  lk = on ? 0. : smoothstep(.4, .8, b1);
  o = p - mix(vec3(0., -.6, .52), vec3(.28, .82, .32), lk);
  if (length(o) - .2 < min(d, best)) { e = knobs(o); if (e < d) { d = e; col = vec3(1., .5, .74); k = .5 * lk; y = o.y; } }
  lk = on ? 0. : smoothstep(.6, 1., b1);
  o = p - mix(vec3(0., .32, 0.), vec3(-.06, 1.02, .04), lk);
  if (length(o - vec3(0., .12, 0.)) - .25 < min(d, best)) { e = crest(o); if (e < d) { d = e; col = vec3(1., .72, .3); k = .75 * lk; y = o.y; } }
  // Dissolving: the nearest ornament cut into slices whose gaps widen with how far it has gone.
  if (k > .01) d = max(d, (abs(fract(y / .028) - .5) - .5 + .42 * k) * .028);
  if (on) { d = rise(d, 0, p.y, PY, .62); if (d < best) gC0 = col; return vec2(d, 20.); }
  if (d < best) gC1 = col;
  return vec2(d, 21.);
}

// \u2500\u2500 3\u20136 \xB7 the face \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
/**
 * The face: 5 the ordering system's grid of modules; 4 a raised field for each group (dials, keys, switch) and a
 * blank label bar under each control; 3 the six controls, two dials and a row of four keys, the switch last; 6 the
 * switch's cap, the one colour. In the build the key row first runs on with extra keys, which shrink away.
 */
vec2 face(vec3 p, float best) {
  float b3 = built(3), b4 = built(4), b5 = built(5), b6 = built(6);
  vec2 res = vec2(1e5, 0.);
  vec3 q = p - apart(vec3(0., 0., .16));
  if (b5 > 0.) {
    vec2 g = abs(fract((q.xy - vec2(-.54, -.86)) / MD + .5) - .5) * MD;
    float gr = max(sdBox(q - vec3(0., EB.y, FZ + .0008), vec3(EH.x - .03, EH.y - .03, .0012)), min(g.x, g.y) - .0017);
    res = vec2(cutaway(max(gr, length(q.xy - EB.xy) - .72 * b5 - .01 * step(1., b5)), cutS(q)), 25.);
  }
  // The controls' region, on its three layers and their aparts (in the build, the extra keys' too).
  float bound = sdBox(p - vec3(.1, -.6, FZ + .025 + .21 * uApart), vec3(.47, .25, .04 + .21 * uApart));
  if (bound > min(min(best, res.x), .05)) return U(res, vec2(bound, 0.));
  q = p - apart(vec3(0., 0., .3));
  bool up = q.y > -.644;
  if (b4 > 0.) {
    // the field and the label row nearest q, chosen across the gaps between them
    vec2 fc = up ? vec2(.3, -.5) : q.x > .356 ? vec2(.42, -.745) : vec2(.18, -.745);
    vec2 fh = up ? vec2(.215, .115) : q.x > .356 ? vec2(.058, .072) : vec2(.17, .072);
    float f = sdRoundBox(q - vec3(fc, FZ), vec3(fh, .0045), .012);
    float lx = up ? abs(q.x - .3) - .12 : q.x - .06 - clamp(floor((q.x - .06) / MD + .5), 0., 3.) * MD;
    f = min(f, sdBox(vec3(lx, q.y + (up ? .597 : .797), q.z - FZ - .0055), vec3(up ? .03 : .024, .0032, .0016)));
    res = U(res, vec2(cutaway(max(f, q.y + .82 - .44 * b4), cutS(q)), 24.));
  }
  q = p - apart(vec3(0., 0., .44));
  if (b3 > 0.) {
    float grow = smoothstep(.02, .25, b3), extra = 1. - smoothstep(.3, .85, b3);
    float d;
    if (up) {
      // the two dials, mirrored about their group's centre
      vec3 l = q - vec3(.3, -.5, FZ + .0245);
      l.x = abs(l.x) - .12;
      d = sdCylinder(l.xzy, .02, .075 * grow);
    } else {
      // the keys, the switch first from the right; while the build runs on, two more that shrink away
      vec3 l = q - vec3(.42, -.74, FZ + .0045);
      float i = clamp(floor(-l.x / MD + .5), 0., extra > 0. ? 5. : 3.);
      l.x += i * MD;
      float w = .036 * grow * (i > 3.5 ? extra : 1.), kh = i < .5 ? .013 : .009;
      d = max(sdRect(l.xy, vec2(w - .008)) - .008, abs(l.z - kh) - kh);
    }
    res = U(res, vec2(cutaway(d, cutS(q)), 23.));
  }
  q = p - apart(vec3(0., 0., .58));
  if (b6 > 0. && !up && q.x > .36) {
    float s = .027 * smoothstep(0., .6, b6);
    res = U(res, vec2(cutaway(sdRoundBox(q - vec3(.42, -.74, FZ + .0335), vec3(s, s, .0035), .006), cutS(q)), 66.));
  }
  return res;
}

// \u2500\u2500 7 \xB7 ten panels in a ring \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
vec2 panels(vec3 p, float best) {
  float b7 = built(7);
  if (b7 <= 0.) return vec2(1e5, 0.);
  float R = RS + .36 * uApart;
  float bound = max(abs(length(p.xz) - R) - .12, abs(p.y - PY - .16) - .2);
  if (bound > min(best, .1)) return vec2(bound, 0.);
  const float st = TAU / 10.;
  float k = floor((atan(p.x, p.z) - A0) / st);
  float ac = A0 + (k + .5) * st;
  float idx = mod(k, 10.);
  vec2 dir = vec2(sin(ac), cos(ac));
  vec3 l = vec3(p.x * dir.y - p.z * dir.x, p.y - PY - .165, dot(p.xz, dir) - R);
  // Each rises in turn; the tenth, the last, lights.
  float top = PY + .025 + .29 * smoothstep(idx * .075, idx * .075 + .3, b7);
  float slab = cutaway(max(sdBox(l, vec3(.1, .14, .008)), p.y - top), cutS(p));
  return vec2(slab, idx > 8.5 && b7 > .94 ? 67. : 27.);
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., .16 + .26 * uApart, -.15), vec3(1.95 + .3 * uApart, 1.32 + .26 * uApart, 2. + .3 * uApart));
  if (bound > .3) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);

  // 2 \xB7 the essential body: a plain white box on a recessed base, its size kept to the module; and its face (3\u20136).
  float bb = sdBox(p - EB - vec3(0., 0., .03 + .29 * uApart), EH + vec3(.04, .05, .07 + .29 * uApart));
  if (bb > min(res.x, .2)) res = U(res, vec2(bb, 0.));
  else {
    if (built(2) > 0.) {
      float body = min(sdRoundBox(p - EB, EH, .026), sdBox(p - vec3(0., PY + .016, 0.), vec3(EH.x - .04, .016, EH.z - .04)));
      res = U(res, vec2(cutaway(rise(body, 2, p.y, PY, EB.y + EH.y + .01), cutS(p)), 22.));
    }
    res = U(res, face(p, res.x));
  }

  // 0 \xB7 the crowded object: solid while it is built and stripped, a glass ghost once the essential body shows (and
  // then not drawn at all behind glass, where the hologram looks through every shell).
  vec3 q = p - apart(vec3(0., .32, -.72));
  bool glass = built(2) > 0.;
  if (built(0) > 0. && !(glass && gSkipShell)) {
    bb = sdBox(q - vec3(0., -.3, .06), vec3(.98, .68, .64));
    if (bb > min(res.x, .2)) res = U(res, vec2(bb, 0.));
    else {
      vec3 col;
      float d = cutaway(rise(abs(crowd(q, col)) - .006, 0, q.y, PY, .62), cutS(q));
      if (d < res.x) gC0 = col;
      res = U(res, glass ? vec2(SHELL(d), 80.) : vec2(d, 20.));
    }
  }
  // 1 \xB7 superfluous elements.
  q = p - apart(vec3(0., .52, -.34));
  vec2 o = ornaments(q, res.x);
  res = U(res, vec2(cutaway(o.x, cutS(q)), o.y));
  // 7 \xB7 ten principles.
  return U(res, panels(p, res.x));
}
`};export{a as scene};
