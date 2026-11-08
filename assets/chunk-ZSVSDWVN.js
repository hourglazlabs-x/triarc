import{a as t}from"./chunk-4QM5HSGV.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var r={id:"D09-unobtrusive",cam:[1.85,.83,3.66],target:[0,-.22,-.3],floor:-1.6,ring:1.9,accent:e(t.D09),poster:3,orbit:{az:[-80,80]},parts:[{name:"user's things",view:{az:-8,el:2,zoom:.96}},{name:"tool",view:{az:-14,el:12,zoom:.5}},{name:"neutral palette",view:{az:-20,el:16,zoom:.48}},{name:"restrained form",view:{az:8,el:10,zoom:.5}},{name:"signal colour",view:{az:-12,el:26,zoom:.46}},{name:"background",view:{az:-18,el:28,zoom:.62}},{name:"ready at hand",view:{az:-4,el:20,zoom:.64}}],glsl:`
// Kept compact on purpose: the software renderer slows with the size of map()'s code, so repeated things are drawn
// by repetition or symmetry, and the build and the whole model share one path.
const float PY = -.9;                  // the floor under the sideboard
const float TY = -.4;                  // the sideboard's top
const float WZ = -.62;                 // the wall's face

vec3 gThing = vec3(1., .4, .3);        // the colour of the nearest of the owner's things (map() sets it at the hit)
float gGrey = 0.;                      // 1 where the grey plate is nearer than the white

vec3 palette(int i) {
  // The shading reads the palette right after the normal's four map() calls at the hit, so a thing or a plate takes
  // the colour map() last set for it.
  if (i == 0) return gThing;                // user's things: every colour
  if (i == 1) return vec3(.86, .88, .9);    // tool: its pale body
  if (i == 2) return gGrey > .5 ? vec3(.42, .45, .5) : vec3(.97, .97, .98);   // neutral palette: grey and white
  if (i == 3) return vec3(.92, .95, 1.);    // restrained form: its edges
  if (i == 4) return vec3(.25, .95, .35);   // signal colour: green
  if (i == 5) return vec3(.62, .7, .82);    // background: its place at the back
  return vec3(.55, .9, 1.);                 // ready at hand: its place at the front
}

/** The section: a plane through the middle, so the cut halves the tool and shows its plates on its body. */
float cutS(vec3 q) { return q.x; }

float sdRect(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.)) + min(max(d.x, d.y), 0.); }
vec3 hue(float h) { return .55 + .45 * cos(TAU * (h + vec3(0., .33, .67))); }

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., .02 + .3 * uApart, -.32 + .1 * uApart), vec3(1.2, .95 + .3 * uApart, .55 + .15 * uApart));
  if (bound > .3) return vec2(bound, 0.);
  // The room (not a part): the wall and the sideboard.
  vec2 res = vec2(min(sdBox(p - vec3(0., PY + .87, WZ - .02), vec3(1.15, .87, .02)), sdRoundBox(p - vec3(0., PY + .25, -.35), vec3(1., .25, .27), .01)), 4.);

  // 0 \xB7 the owner's things: books in two runs along the back, three pictures, a vase and a bowl that come forward.
  vec3 q = p - apart(vec3(0., .14, .22));
  if (built(0) > 0.) {
    float d = 1e5; vec3 col = vec3(1.);
    float bb = sdBox(q - vec3(0., TY + .13, -.5), vec3(.97, .14, .12));
    if (bb > min(res.x, .1)) d = bb;
    else {
      float cx = clamp(floor(q.x / .056 + .5), -17., 17.);
      if (abs(cx) < 5.5) cx = q.x < 0. ? -6. : 6.;                 // no books in the middle: the tool's way
      float h1 = hash11(cx * 1.7 + 3.), h2 = hash11(cx * 3.1 + 7.);
      d = sdRoundBox(q - vec3(cx * .056, TY + .07 + .05 * h1, -.5), vec3(.018 + .008 * h2, .07 + .05 * h1, .09 + .015 * h2), .004);
      col = hue(h1 * .7 + h2 * .5);
    }
    bb = sdBox(q - vec3(0., .3, WZ + .02), vec3(1., .36, .04));
    if (bb > min(min(d, res.x), .1)) d = min(d, bb);
    else {
      vec4 pc = q.x < -.35 ? vec4(-.66, .3, .2, .26) : q.x < .38 ? vec4(.02, .44, .26, .18) : vec4(.7, .22, .16, .2);
      vec3 l = q - vec3(pc.xy, WZ + .016);
      float fr = max(abs(sdRect(l.xy, pc.zw)) - .012, abs(l.z) - .014);
      float cv = sdBox(l - vec3(0., 0., -.004), vec3(pc.zw - .012, .006));
      float e = min(fr, cv);
      if (e < d) { d = e; col = fr < cv ? hue(pc.x * .4 + .1) * .6 : hue(dot(l.xy, vec2(1., .6)) > 0. ? pc.x + .3 : pc.x * 1.7 + .7); }
    }
    float fw = .06 * built(5);
    vec3 v = q - vec3(-.55, TY, -.24 + fw);
    float e = max(length(v.xz) - .05 - .028 * sin(v.y * 16. + .6), abs(v.y - .13) - .13) * .7;
    if (e < d) { d = e; col = vec3(.2, .55, 1.); }
    v = q - vec3(.58, TY + .09, -.26 + fw);
    e = max(abs(length(v) - .09) - .007, v.y);
    if (e < d) { d = e; col = vec3(1., .55, .2); }
    d = cutaway(rise(d, 0, q.y, TY - .01, .7), cutS(q));
    if (d < res.x) gThing = col;
    res = U(res, vec2(d, 20.));
  }

  // The tool's place: among the things, then stood back (background), and brought forward when needed (ready at hand):
  // in the build once, as the narration says; in the whole model every twelve seconds.
  float b5 = built(5), b6 = built(6);
  float tc = mod(uTime, 12.);
  float f = uBuild > 0. ? sin(PI * b6) : smoothstep(6., 7.4, tc) - smoothstep(9.6, 11., tc);
  vec3 tp = vec3(0., TY + .106, mix(mix(-.25, -.47, b5), .06, f));
  float tb = sdBox(p - tp - vec3(0., .12 + .4 * uApart, .1 * uApart), vec3(.24, .17 + .4 * uApart, .18 + .1 * uApart));
  if (tb > min(res.x, .2)) res = U(res, vec2(tb, 0.));
  else {
    // 1 \xB7 the tool: a plain box made for one purpose.
    vec3 t = p - tp - apart(vec3(0., .24, 0.));
    if (built(1) > 0.) res = U(res, vec2(cutaway(rise(sdRoundBox(t, vec3(.2, .1, .13), .02), 1, t.y, -.1, .11), cutS(t)), 21.));
    // 2 \xB7 neutral palette: a white top plate and a grey front plate.
    t = p - tp - apart(vec3(0., .44, .2));
    if (built(2) > 0.) {
      float w = sdBox(t - vec3(0., .104, 0.), vec3(.183, .004, .113));
      float g = sdBox(t - vec3(0., -.012, .134), vec3(.183, .072, .004));
      float d = cutaway(rise(min(w, g), 2, t.y, -.1, .12), cutS(t));
      if (d < res.x) gGrey = g < w ? 1. : 0.;
      res = U(res, vec2(d, 22.));
    }
    // 3 \xB7 restrained form: the quiet shape drawn out by its edges, the four upright ones and the top's.
    t = p - tp - apart(vec3(0., .62, 0.));
    if (built(3) > 0.) {
      float e = max(length(abs(t.xz) - vec2(.195, .125)) - .006, abs(t.y) - .094);
      e = min(e, max(abs(sdRect(t.xz, vec2(.195, .125))) - .006, abs(t.y - .094) - .006));
      res = U(res, vec2(cutaway(rise(e, 3, t.y, -.1, .11), cutS(t)), 23.));
    }
    // 4 \xB7 signal colour: one green switch, where the hand acts.
    t = p - tp - apart(vec3(0., .8, 0.));
    float b4 = built(4);
    if (b4 > 0.) {
      float s = smoothstep(0., .7, b4);
      res = U(res, vec2(cutaway(sdRoundBox(t - vec3(.12, .114, -.06), vec3(.034, .011, .024) * s, .008 * s), cutS(t)), 64.));
    }
  }
  // 5 \xB7 background: its place when it is not in use, at the back between the books.
  q = p - apart(vec3(0., 0., -.14));
  if (b5 > 0.) res = U(res, vec2(cutaway(sdBox(q - vec3(0., TY + .003, -.47), vec3(.23, .003, .155) * vec3(b5, 1., b5)), cutS(q)), 25.));
  // 6 \xB7 ready at hand: a ledge drawn out at the front, the tool's footprint lit on it, and its way forward.
  q = p - apart(vec3(0., 0., .2));
  if (b6 > 0.) {
    float lz = mix(-.1, .06, smoothstep(0., .5, b6));
    float d = sdBox(q - vec3(0., TY - .009, lz), vec3(.25, .009, .135));
    res = U(res, vec2(cutaway(d, cutS(q)), 26.));
    float o = max(abs(sdRect(q.xz - vec2(0., lz), vec2(.215, .145))) - .005, abs(q.y - TY - .002) - .002);
    o = min(o, max(sdBox(q - vec3(0., TY + .002, -.2), vec3(.004, .002, .1)), (abs(fract(q.z / .04) - .5) - .25) * .04));
    res = U(res, vec2(cutaway(o, cutS(q)), 66.));
  }
  return res;
}
`};export{r as scene};
