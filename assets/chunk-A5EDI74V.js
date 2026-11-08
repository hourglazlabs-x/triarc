import{a as t}from"./chunk-4QM5HSGV.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var o={id:"D09-honest",cam:[1.95,.84,4.05],target:[0,-.26,0],floor:-1.6,ring:1.9,accent:e(t.D09),poster:2,parts:[{name:"working core",view:{az:-30,el:6,zoom:.55}},{name:"inflated shell",view:{az:-10,el:-6,zoom:1}},{name:"false finish",view:{az:-22,el:0,zoom:.96}},{name:"true casing",view:{az:12,el:6,zoom:.7}},{name:"clear cover",view:{az:-14,el:8,zoom:.62}},{name:"visible controls",view:{az:-18,el:12,zoom:.58}},{name:"readable structure",view:{az:-24,el:14,zoom:.64}}],glsl:`
// Kept compact on purpose: the software renderer slows with the size of map()'s code, so repeated things are drawn
// by symmetry or repetition, and the build and the whole model share one path.
const float PY = -.9;                  // the base
const vec3 CS = vec3(.48, .14, .4);    // the true casing's half-size: it fits what it holds
const float DY = PY + .28;             // the casing's deck
const vec3 SH = vec3(.8, .34, .62);    // the inflated shell's half-size: about 1.7 times the casing every way
const float SY = .32;                  // where the shell hangs once it is taken off (its centre)
const vec2 G1 = vec2(.02, -.1);        // the large gear's centre (x, z) on its post
const vec2 G2 = vec2(.24, -.1);        // the small gear's, on the motor

vec3 palette(int i) {
  if (i == 0) return vec3(1., .68, .38);    // working core: brass and copper
  if (i == 1) return vec3(.96, .62, .9);    // inflated shell
  if (i == 2) return vec3(1., .84, .36);    // false finish: gilt
  if (i == 3) return vec3(.9, .93, .97);    // true casing: white-lacquered sheet steel
  if (i == 4) return vec3(.72, .95, 1.);    // clear cover
  if (i == 5) return vec3(.6, .65, .72);    // visible controls: grey
  return vec3(.45, .86, 1.);                // readable structure: its lines of light
}

/** The section: a plane through the middle, so the cut halves the shell (empty inside) and opens casing and cover. */
float cutS(vec3 q) { return q.x - .03; }

float sdRect(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.)) + min(max(d.x, d.y), 0.); }

/** 0 \xB7 the working core: the gear nearer p (14 or 8 teeth, turning at their ratio), its post or the motor, its shaft. */
float core(vec3 p) {
  bool big = length(p.xz - G1) - .15 < length(p.xz - G2) - .09;
  vec2 c = big ? G1 : G2;
  vec2 l = p.xz - c;
  float r = length(l);
  float a = atan(l.y, l.x) + (big ? -.35 : .35 * 1.75) * uTime + (big ? 0. : PI / 8.);
  float g = max(max(r - (big ? .14 : .08) - .011 * clamp(cos(a * (big ? 14. : 8.)) * 2.5, -1., 1.), abs(p.y - DY - .17) - .012), .022 - r);
  float under = sdCylinder(p - vec3(c.x, DY + .078, c.y), .078, big ? .016 : .062);
  float shaft = sdCylinder(p - vec3(c.x, DY + .17, c.y), .032, .011);
  return min(min(g, under), shaft);
}

/** The inflated shell's body (frame: its centre): a swollen box with a hump on top. */
float swell(vec3 s) { return smin(sdRoundBox(s, SH, .3), sdEllipsoid(s - vec3(0., SH.y - .02, -.06), vec3(.5, .2, .38)), .1); }

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., .05 + .25 * uApart, 0.), vec3(.95, 1. + .25 * uApart, .8));
  if (bound > .3) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  float b3 = built(3), b4 = built(4), b5 = built(5), b6 = built(6);

  // The honest object: casing, core, cover, controls and lines.
  bound = sdBox(p - vec3(0., PY + .25 + .2 * uApart, .04 + .1 * uApart), vec3(.55, .3 + .2 * uApart, .48 + .1 * uApart));
  if (bound > .2) res = vec2(bound, 0.);
  else {
    // 3 \xB7 the true casing: a plain box of sheet steel, at the size of what it holds.
    if (b3 > 0.) res = vec2(cutaway(rise(sdRoundBox(p - vec3(0., PY + CS.y, 0.), CS, .016), 3, p.y, PY, DY + .01), cutS(p)), 23.);
    // 0 \xB7 the working core.
    vec3 q = p - apart(vec3(0., .16, 0.));
    res = U(res, vec2(cutaway(rise(core(q), 0, q.y, DY, DY + .21), cutS(q)), 20.));
    // 4 \xB7 the clear cover: a thin transparent hood over the mechanism, lowered into place.
    q = p - apart(vec3(0., .38, 0.)) - vec3(0., .5 * (1. - b4), 0.);
    if (b4 > 0. && !gSkipShell) {
      float cv = max(abs(sdRoundBox(q - vec3(.1, DY + .135, -.08), vec3(.3, .13, .26), .05)) - .004, DY + .012 - q.y);
      res = U(res, vec2(SHELL(cutaway(cv, cutS(q))), 84.));
    }
    // 5 \xB7 visible controls: four knobs on the top, which in the build swing up from the front face.
    q = p - apart(vec3(0., .1, .26));
    if (b5 > 0. && q.z > 0.) {
      vec3 l = q - mix(vec3(0., DY - .1, CS.z), vec3(0., DY, CS.z - .1), b5);
      l.yz = rot((1. - b5) * 1.5708) * l.yz;
      l.x -= clamp(floor((l.x + .33) / .14 + .5), 0., 3.) * .14 - .33;
      float k = sdCylinder(l - vec3(0., .018, 0.), .018, .034) - .004;
      k = max(k, -sdBox(l - vec3(0., .04, .016), vec3(.004, .006, .014)));   // a notch: which way it is turned
      res = U(res, vec2(cutaway(k, cutS(q)), 25.));
    }
    // 6 \xB7 readable structure: each knob's line back to the mechanism, the shafts' axes, the casing's seams and screws.
    q = p - apart(vec3(0., .05, 0.));
    if (b6 > 0.) {
      float lx = q.x + .33 - clamp(floor((q.x + .33) / .14 + .5), 0., 3.) * .14;
      float ln = max(sdBox(vec3(lx, q.y - DY - .002, q.z - .08), vec3(.0035, .002, .18)), .26 - .36 * b6 - q.z);
      vec2 c = length(q.xz - G1) < length(q.xz - G2) ? G1 : G2;
      ln = min(ln, sdCylinder(q - vec3(c.x, DY + .14, c.y), .14 * b6, .004));
      vec2 sc = abs(q.xz) - CS.xz + .035;
      float seam = max(abs(sdRect(q.xz, CS.xz - .012)) - .003, abs(q.y - DY - .001) - .002);
      seam = min(seam, max(length(sc) - .011, abs(q.y - DY - .002) - .003));
      ln = min(ln, max(seam, (.4 - b6) * .1));
      res = U(res, vec2(cutaway(ln, cutS(q)), 66.));
    }
  }

  // The inflated shell and its false finish: they wrap the core, then are lifted off as the true casing closes.
  float lt = smoothstep(0., .55, b3);
  vec3 s = p - vec3(0., mix(PY + SH.y + .01, SY, lt), -.04);
  bool ghost = b3 > 0.;
  if (built(1) > 0.) {
    vec3 q = s - apart(vec3(0., .26, 0.));
    float sb = sdBox(q - vec3(0., .1 + .1 * uApart, .06 * uApart), SH + vec3(.08, .2 + .1 * uApart, .08 + .06 * uApart));
    if (sb > min(res.x, .2)) res = U(res, vec2(sb, 0.));
    else {
      // 1 \xB7 the inflated shell: hollow, open underneath; solid while it hides the core, a ghost once taken off.
      float body = swell(q);
      if (!(ghost && gSkipShell)) {
        float sh = cutaway(rise(max(abs(body) - .012, .03 - q.y - SH.y), 1, q.y, -SH.y, SH.y + .25), cutS(q));
        res = U(res, ghost ? vec2(SHELL(sh), 41.) : vec2(sh, 21.));
      }
      // 2 \xB7 the false finish: gilt bands round it, three swept fins on its hump, a blank badge on its front.
      q = s - apart(vec3(0., .46, .12));
      if (built(2) > 0.) {
        float f = max(abs(swell(q)) - .02, abs(abs(q.y + .02) - .13) - .016);
        vec3 fn = q - vec3(clamp(floor(q.x / .16 + .5), -1., 1.) * .16, SH.y + .17, -.12);
        fn.z += fn.y * 1.2;
        f = min(f, sdBox(fn, vec3(.008, .07, .13)));
        f = min(f, sdEllipsoid(q - vec3(0., .0, SH.z + .02), vec3(.13, .09, .03)));
        res = U(res, vec2(cutaway(rise(f, 2, q.y, -SH.y, SH.y + .3), cutS(q)), 22.));
      }
    }
  }
  return res;
}
`};export{o as scene};
