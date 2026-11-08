import{a as t}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var a={id:"D09-systems",cam:[1.95,1.35,4.75],target:[-.1,-.08,-.1],floor:-1.6,ring:2.1,accent:e(t.D09),poster:2,orbit:{az:[-75,75]},parts:[{name:"wall",view:{az:-4,el:2,zoom:1}},{name:"vertical tracks",view:{az:-16,el:4,zoom:.8}},{name:"bay spacing",view:{az:-20,el:8,zoom:.84}},{name:"pins",view:{az:4,el:-8,zoom:.6}},{name:"shelves",view:{az:-12,el:10,zoom:.82}},{name:"cabinets and tables",view:{az:-14,el:8,zoom:.8}},{name:"posts",view:{az:22,el:6,zoom:.84}},{name:"equal units",view:{az:-8,el:6,zoom:.8}},{name:"joined seats",view:{az:-6,el:20,zoom:.84}}],glsl:`
// Kept compact on purpose: the software renderer slows with the size of map()'s code, so each kind of member is drawn
// once, for the bay or the cell the point is in, and the build and the whole model share one path.
const float PY = -.95;                 // the floor
const float WZ = -.55;                 // the wall's face
const float T0 = -1.3;                 // the wall's tracks: narrow bay 0.667, then wide bay 0.912 (Vits\u0153)
const float T1 = -.633;
const float T2 = .279;
const float TB = -.76;                 // the tracks' foot: they are 1.71 long (3 x 57 cm)
const float P0 = .72;                  // the posts in the room: a narrow bay
const float P1 = 1.387;
const float PZ = -.2;

vec3 palette(int i) {
  if (i == 0) return vec3(.82, .86, .92);   // wall
  if (i == 1) return vec3(.72, .8, .9);     // vertical tracks: anodised aluminium
  if (i == 2) return vec3(1., .72, .42);    // bay spacing: its dimension lines
  if (i == 3) return vec3(.9, .94, 1.);     // pins
  if (i == 4) return vec3(.86, .92, 1.);    // shelves
  if (i == 5) return vec3(.78, .86, .96);   // cabinets and tables
  if (i == 6) return vec3(.66, .76, .9);    // posts
  if (i == 7) return vec3(.94, .95, .97);   // equal units
  return vec3(.62, .7, .86);                // joined seats
}

/** The section: a plane through the middle track, so the cut shows a track and its pins in section. */
float cutS(vec3 q) { return q.x - T1; }

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(-.02, .05 + .1 * uApart, .1 + .2 * uApart), vec3(1.5 + .25 * uApart, 1.06 + .1 * uApart, .9 + .25 * uApart));
  if (bound > .3) return vec2(bound, 0.);
  float b2 = built(2), b3 = built(3), b4 = built(4), b5 = built(5), b6 = built(6), b7 = built(7), b8 = built(8);
  // The bay the point is in: its two tracks, its shelves' heights and its other element's (the desk's top, the
  // cabinet's top; none among the posts), and the plane its members hang from.
  bool post = p.x > .5, wide = !post && p.x > T1;
  float L = post ? P0 : wide ? T1 : T0, R = post ? P1 : wide ? T2 : T1;
  vec2 sy = post ? vec2(.72, -.1) : wide ? vec2(.7, -.52) : vec2(.66, .28);
  float oy = post ? -9. : wide ? .09 : -.2;
  float tx = p.x < (L + R) * .5 ? L : R;      // the nearer of its tracks
  float on = post ? step(.001, b6) : 1.;      // the posts' bay is hung once the posts stand

  // 0 \xB7 wall.
  vec3 q = p - apart(vec3(0., 0., -.36));
  vec2 res = vec2(cutaway(rise(sdBox(q - vec3(-.52, .025, WZ - .03), vec3(.9, .975, .03)), 0, q.y, PY, 1.), cutS(q)), 20.);

  // 1 \xB7 vertical tracks: bars with one row of round holes, 1.71 long.
  q = p - apart(vec3(0., 0., -.16));
  if (!post) {
    vec3 l = q - vec3(tx, TB + .855, WZ + .01);
    float t = max(sdBox(l, vec3(.014, .855, .01)), -(length(vec2(l.x, mod(l.y, .032) - .016)) - .0055));
    res = U(res, vec2(cutaway(rise(t, 1, q.y, TB, TB + 1.71), cutS(q)), 21.));
  }
  // 2 \xB7 bay spacing: the two spans, narrow and wide, as a dimension line with a tick at each track.
  q = p - apart(vec3(0., .16, 0.));
  if (b2 > 0. && !post) {
    float d = max(sdBox(q - vec3((T0 + T2) * .5, 1.04, WZ + .02), vec3((T2 - T0) * .5, .004, .004)), q.x - T0 - (T2 - T0) * b2);
    d = min(d, max(sdBox(q - vec3(tx, 1.02, WZ + .02), vec3(.004, .045, .004)), q.x - T0 - (T2 - T0) * b2 - .01));
    res = U(res, vec2(cutaway(d, cutS(q)), 62.));
  }
  // 3 \xB7 pins: slipped into the tracks under each thing that hangs (sideways into the posts' tracks).
  q = p - apart(vec3(0., 0., .12));
  if (b3 > 0. && on > 0.) {
    vec3 lv = vec3(sy, oy);
    vec3 dy = abs(q.y - lv - .02);
    float ly = dy.x < dy.y && dy.x < dy.z ? lv.x : dy.y < dy.z ? lv.y : lv.z;
    vec3 l = q - vec3(post ? tx + sign((L + R) * .5 - tx) * .04 : tx, ly - .02, post ? PZ : WZ + .04 + .06 * (1. - b3));
    res = U(res, vec2(cutaway(sdCylinder(post ? l.yxz : l.xzy, .032, .015), cutS(q)), 23.));
  }
  // 4 \xB7 shelves: flat plates on the pins, at any height (in the build they come down onto them).
  q = p - apart(vec3(0., 0., .3)) - vec3(0., .25 * (1. - b4), 0.);
  if (b4 > 0. && on > 0.) {
    float y = abs(q.y - sy.x) < abs(q.y - sy.y) ? sy.x : sy.y;
    float zc = post ? PZ : WZ + .17;
    res = U(res, vec2(cutaway(sdBox(q - vec3((L + R) * .5, y + .012, zc), vec3((R - L) * .5 - .02, .012, .15)), cutS(q)), 24.));
  }
  // 5 \xB7 cabinets and tables: a desk in the narrow bay, a closed cabinet (two sliding doors) in the wide one.
  q = p - apart(vec3(0., 0., .44)) - vec3(0., 0., .4 * (1. - b5));
  if (b5 > 0. && !post) {
    float c = wide ? sdBox(q - vec3((T1 + T2) * .5, -.09, WZ + .2), vec3(.436, .18, .18))
                   : sdBox(q - vec3((T0 + T1) * .5, -.215, WZ + .32), vec3(.315, .015, .3));
    if (wide) c = max(c, -sdBox(q - vec3((T1 + T2) * .5, -.09, WZ + .38), vec3(.003, .16, .006)));
    res = U(res, vec2(cutaway(c, cutS(q)), 25.));
  }
  // 6 \xB7 posts: two square posts on feet, 1.915 high, with tracks on their inner sides.
  q = p - apart(vec3(.34, 0., 0.));
  if (b6 > 0. && p.x > .4) {
    vec3 l = vec3(abs(q.x - (P0 + P1) * .5) - (P1 - P0) * .5, q.y - PY, q.z - PZ);
    float d = min(sdBox(l - vec3(0., .9575, 0.), vec3(.02, .9575, .02)), sdBox(l - vec3(-.026, .96, 0.), vec3(.008, .855, .012)));
    d = min(d, sdBox(l - vec3(0., .012, 0.), vec3(.022, .012, .23)));
    res = U(res, vec2(cutaway(rise(d, 6, q.y, PY, PY + 1.915), cutS(q)), 26.));
  }
  // 7 \xB7 equal units, all the same size: three stacked on the posts' lower shelf, then three in a row on the wide bay's
  // top shelf, one by one.
  q = p - apart(vec3(0., .1, .55));
  if (b7 > 0. && (post || wide)) {
    float i = clamp(floor(post ? (q.y + .076) / .2 : (q.x - (T1 + T2) * .5) / .25 + 1.5), 0., 2.);
    float g = smoothstep(0., .1, b7 - (post ? i : 3. + i) * .15);
    vec3 c = post ? vec3((P0 + P1) * .5, .022 + i * .2, PZ) : vec3((T1 + T2) * .5 + (i - 1.) * .25, .822, WZ + .17);
    vec3 l = q - c - vec3(0., .3 * (1. - g), 0.);
    float u = max(sdRoundBox(l, vec3(.1, .098, .12), .008), -sdBox(l - vec3(0., 0., .12), vec3(.082, .07, .004)));
    if (g > 0.) res = U(res, vec2(cutaway(u, cutS(q)), 27.));
  }
  // 8 \xB7 joined seats: three single seats, which move together and join into one sofa.
  q = p - apart(vec3(0., 0., .34));
  if (b8 > 0. && p.z > -.1) {
    float s = mix(.78, .56, b8) + .2 * uApart;
    vec3 l = q - vec3(-.45, PY + .16, .45);
    l.x -= clamp(floor(l.x / s + .5), -1., 1.) * s;
    float d = min(sdRoundBox(l, vec3(.27, .16, .26), .045), sdRoundBox(l - vec3(0., .32, -.21), vec3(.27, .16, .05), .045));
    res = U(res, vec2(cutaway(d, cutS(q)), 28.));
  }
  return res;
}
`};export{a as scene};
