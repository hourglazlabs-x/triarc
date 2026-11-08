import{a as t}from"./chunk-4QM5HSGV.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var o={id:"D06-domino",cam:[3.047,1.89,5.542],target:[.1,-.15,0],floor:-1.3,ring:2.05,accent:e(t.D06),poster:2,parts:[{name:"posts",view:{az:-8,el:-6,zoom:.76}},{name:"lowest slab",view:{az:-8,el:-10,zoom:.64}},{name:"middle slab",view:{az:-6,el:4,zoom:.66}},{name:"staircase",inside:!0,view:{az:-16,el:4,zoom:.54}},{name:"top slab",view:{az:-8,el:24,zoom:.7}},{name:"slab edges",view:{az:26,el:8,zoom:.64}},{name:"infill elements",view:{az:150,el:8,zoom:.7}},{name:"joined frames",view:{el:12}}],glsl:`
const float GY = -.62;               // the plate's top
const float L0 = GY + .1;            // the lowest slab's top: threaded on the posts a little above the ground
const float ST = .38;                // a storey, slab top to slab top
const float TH = .028;               // a slab's thickness
const float PT = L0 + 2. * ST;       // the posts' top, flush with the top slab
const vec2 SB = vec2(.6, .42);       // a slab's half-size (x, z)
const vec2 PC = vec2(.4, .27);       // post centres: x = -.4, 0, .4, in two rows at z = -.27 and .27
const float PS = .022;               // a post's half-section
const vec2 CORE = vec2(.422, .292);  // the slab within the line of the posts (to their outer faces)
const float FL = 1.2;                // a frame's length: the pitch of the joined frames
const float SW = .06;                // the stair's half-width
const float SX = .3;                 // a flight's half-run
const float NS = 14.;                // steps a flight
const float HH = (ST - TH) * .5;     // half the clear height of a floor
const float UP = .3;                 // taken apart: each slab rises this much above the one below

vec3 palette(int i) {
  if (i == 0) return vec3(.93, .90, .84);   // posts
  if (i == 1) return vec3(.70, .84, 1.);    // lowest slab
  if (i == 2) return vec3(.78, .90, 1.);    // middle slab
  if (i == 3) return vec3(1., .78, .50);    // staircase
  if (i == 4) return vec3(.87, .95, 1.);    // top slab
  if (i == 5) return vec3(.46, .95, .68);   // slab edges
  if (i == 6) return vec3(1., .66, .50);    // infill elements
  return vec3(.60, .76, 1.);                // joined frames
}

float sdRect(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }

/** The section: a vertical plane along the frame just in front of the stair; the front strip is removed. */
float cutS(vec3 q) { return q.z - .16; }

/** Slab k's plate (0 lowest), of half-size hs, with the well over the flight below cut from the middle and top slabs. */
float plate(vec3 q, int k, vec2 hs) {
  float y = L0 + float(k) * ST - TH * .5;
  float d = sdBox(q - vec3(0., y, 0.), vec3(hs.x, TH * .5, hs.y));
  if (k == 1) d = max(d, -sdBox(q - vec3(.08, y, -.075), vec3(.22, TH, .068)));
  if (k == 2) d = max(d, -sdBox(q - vec3(-.08, y, .075), vec3(.22, TH, .068)));
  return d;
}

/** The six posts, square, from the ground to the top slab. */
float posts(vec3 q) {
  vec3 c = vec3(q.x - clamp(round(q.x / PC.x), -1., 1.) * PC.x, q.y - (GY + PT) * .5, abs(q.z) - PC.y);
  return sdBox(c, vec3(PS, (PT - GY) * .5, PS));
}

float stepBlock(vec3 q, vec2 a, vec2 s, float k, float zc) {
  vec2 c = a + s * (k + .5);
  return sdBox(vec3(q.x - c.x, q.y - c.y, q.z - zc), vec3(abs(s.x) * .5, abs(s.y) * .5, SW));
}
/** A straight flight of NS steps from a to b (x, y), about z = zc: steps on a sloped waist. */
float flight(vec3 q, vec2 a, vec2 b, float zc) {
  vec2 s = (b - a) / NS;
  float k = clamp(floor((q.x - a.x) / s.x), 0., NS - 1.);
  float d = min(stepBlock(q, a, s, k, zc), stepBlock(q, a, s, min(k + 1., NS - 1.), zc));
  vec2 pa = q.xy - a + vec2(0., .012), ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
  return min(d, max(length(pa - ba * h) - .013, abs(q.z - zc) - SW));
}
/** The stair: one flight from the lowest slab to the middle one, then one back from the middle slab to the top. */
float stair(vec3 q) {
  return min(flight(q, vec2(-SX, L0), vec2(SX, L0 + ST), -.075), flight(q, vec2(SX, L0 + ST), vec2(-SX, PT), .075));
}

/** A slab laid across the posts: it spreads from the middle out as it is built (unbuilt, a distance that never hits). */
float spread(float d, int i, float x) { float g = built(i); return g <= 0. ? d + .03 : g >= 1. ? d : max(d, abs(x) - CORE.x * smoothstep(0., 1., g)); }

/** One factory unit of the fa\xE7ade rows (pitch .16, a floor high): its frame and transom; glass or a panel inside. */
void unit(vec3 l, bool glazed, inout float fr, inout float gl) {
  float f = max(max(sdRect(l.xy, vec2(.078, HH)), -sdRect(l.xy, vec2(.068, HH - .011))), abs(l.z) - .008);
  f = min(f, max(max(abs(l.y - .055) - .0045, abs(l.x) - .07), abs(l.z) - .006));
  fr = min(fr, f);
  float pane = sdRect(l.xy, vec2(.069, HH - .012));
  if (glazed) gl = min(gl, max(pane, abs(l.z) - .0015));
  else fr = min(fr, max(pane, abs(l.z + .002) - .004));
}

float sceneDetail(vec3 p, float m) {
  int k = int(m + .5);
  // Formwork boards: rings up the posts, lines along the slabs' edges and soffits.
  if (k == 20 || k == 27) return (abs(fract(p.y * 46.) - .5) - .25) * .0007;
  if (k == 21 || k == 22 || k == 24 || k == 25) return (abs(fract(p.z * 34. + p.y * 20.) - .5) - .25) * .0005;
  return 0.;
}

vec2 map(vec3 p) {
  float top = PT + .02 + (2. * UP + .12) * uApart;
  float bound = sdBox(p - vec3(.0, (top + GY - .05) * .5, -.04 * uApart), vec3(1.9 + .08 * uApart, (top - GY + .05) * .5, .52 + .68 * uApart));
  if (bound > .2) return vec2(bound, 0.);
  vec3 q;
  float d;

  // The plate under it all (not a part).
  vec2 res = vec2(sdBox(p - vec3(0., GY - .02, 0.), vec3(1.875, .02, .5)), 4.);

  // The first frame, in its own bound (rays elsewhere skip it).
  float fb = sdBox(p - vec3(0., (top + GY) * .5, -.04 * uApart), vec3(.63, (top - GY) * .5, .45 + .68 * uApart));
  if (fb > .1) res = U(res, vec2(fb, 0.));
  else {
    // 0 \xB7 Posts: six, in two rows of three, the only vertical supports, standing on their setting-out lines. Taken
    // apart, the two rows step out to the front and back, clear of the slabs.
    q = p - apart(vec3(0., 0., sign(p.z) * .3));
    res = U(res, vec2(cutaway(rise(posts(q), 0, q.y, GY, PT), cutS(q)), 20.));
    if (built(0) > 0. && p.y < GY + .05) {
      float sl = min(abs(abs(p.z) - PC.y), abs(p.x - clamp(round(p.x / PC.x), -1., 1.) * PC.x)) - .0035;
      sl = max(max(sl, sdRect(p.xz, vec2(.5, .36))), abs(p.y - GY) - .002);
      res = U(res, vec2(cutaway(sl, cutS(p)), 60.));
    }

    // 1, 2, 4 \xB7 The three slabs: flat plates threaded on the posts, each within the line of the posts (its overhang is
    // part 5), laid across them from the middle out. Taken apart they stack up, UP apart. Only the nearest is
    // evaluated (they share one footprint).
    float sp = ST + UP * uApart;
    float kc = clamp(round((p.y - L0 + TH * .5) / sp), 0., 2.);
    int ik = int(kc);
    int pk = ik == 0 ? 1 : ik == 1 ? 2 : 4;
    q = p - apart(vec3(0., kc * UP, 0.));
    res = U(res, vec2(cutaway(spread(plate(q, ik, CORE), pk, q.x), cutS(q)), float(20 + pk)));

    // 3 \xB7 The staircase between the two rows, linking the slabs; it comes forward when taken apart.
    q = p - apart(vec3(0., .2, .95));
    float sb = sdBox(q - vec3(0., (L0 + PT) * .5, 0.), vec3(SX + .02, ST + .02, .16));
    res = U(res, sb > .08 ? vec2(sb, 0.) : vec2(cutaway(rise(stair(q), 3, q.y, L0 - .03, PT), cutS(q)), 23.));

    // 5 \xB7 Slab edges: each slab's band beyond the line of the posts, reaching out as it is built; on each slab's top
    // a line of light marks the line of the posts. Taken apart, each band hovers above its slab.
    float g5 = built(5);
    if (g5 > 0.) {
      vec2 hs = mix(CORE, SB, smoothstep(0., 1., g5));
      float kr = clamp(round((p.y - L0 - .12 * uApart + TH * .5) / sp), 0., 2.);
      q = p - apart(vec3(0., kr * UP + .12, 0.));
      float y = L0 + kr * ST;
      d = max(plate(q, int(kr), hs), -sdBox(q - vec3(0., y - TH * .5, 0.), vec3(CORE.x, TH, CORE.y)));
      res = U(res, vec2(cutaway(d, cutS(q)), 25.));
      d = max(abs(sdRect(q.xz, CORE)) - .0035, abs(q.y - y - .0015) - .0025);
      res = U(res, vec2(cutaway(d, cutS(q)), 65.));
    }

    // 6 \xB7 Infill elements, factory-made and placed freely, each floor its own: on the lowest floor a band of window
    // units out in the overhang behind the back row, a partition in the end overhang and a cupboard between the back
    // posts and the windows; on the middle floor panels with two window units over part of the back, two bays left
    // open, and a partition behind the stair. Taken apart they go back, each with its floor.
    if (built(6) > 0.) {
      float fr = 1e5, gl = 1e5;
      q = p - apart(vec3(0., 0., -.75));
      float b = sdBox(q - vec3(0., L0 + HH, -.25), vec3(.62, HH + .02, .2));
      if (b > .08) res = U(res, vec2(b, 0.));
      else {
        float yc = L0 + HH;
        float ix = clamp(round(q.x / .16), -3., 3.);
        unit(vec3(q.x - ix * .16, q.y - yc, q.z + .405), true, fr, gl);
        fr = min(fr, sdBox(q - vec3(-.5, yc, -.21), vec3(.006, HH, .165)));
        float cup = sdBox(q - vec3(.22, L0 + .13, -.351), vec3(.12, .13, .038));
        float dx = q.x - .22;
        float joint = max(abs(dx - clamp(round(dx / .06), -1., 1.) * .06) - .0018, -(q.z + .317));
        fr = min(fr, max(cup, -joint));
        fr = rise(fr, 6, q.y, L0, PT);
        gl = rise(gl, 6, q.y, L0, PT);
      }
      q = p - apart(vec3(0., UP, -.75));
      b = sdBox(q - vec3(0., L0 + ST + HH, -.25), vec3(.62, HH + .02, .2));
      if (b > .08) res = U(res, vec2(b, 0.));
      else {
        float yc = L0 + ST + HH;
        float ix = clamp(round(q.x / .16), -3., 1.);
        float f2 = 1e5, g2 = 1e5;
        unit(vec3(q.x - ix * .16, q.y - yc, q.z + .405), ix == -2. || ix == 1., f2, g2);
        f2 = min(f2, sdBox(q - vec3(-.2, yc, -.205), vec3(.18, HH, .006)));
        fr = min(fr, rise(f2, 6, q.y, L0, PT));
        gl = min(gl, rise(g2, 6, q.y, L0, PT));
      }
      res = U(res, vec2(cutaway(fr, cutS(p)), 26.));
      res = U(res, vec2(SHELL(cutaway(gl, cutS(p))), 86.));
    }
  }

  // 7 \xB7 Joined frames: identical frames (posts, slabs, stair) set against the first at both ends, in their own colour
  // with a lit rim round each slab, so the row can go on. They join on from the first frame outwards; taken apart they
  // step away.
  float g7 = built(7);
  if (g7 > 0.) {
    q = p - apart(vec3(sign(p.x) * .08, 0., 0.));
    float jb = sdBox(vec3(abs(q.x) - 1.2, q.y - (GY + PT) * .5, q.z), vec3(.62, (PT - GY) * .5 + .01, .44));
    if (jb > .08) res = U(res, vec2(jb, 0.));
    else {
      vec3 j = vec3(q.x - sign(q.x) * FL, q.y, q.z);
      float reach = abs(q.x) - mix(.6, 1.81, smoothstep(0., 1., g7));
      float sb = sdBox(j - vec3(0., (L0 + PT) * .5, 0.), vec3(SX + .02, ST + .02, .16));
      float solid = max(min(posts(j), sb > .05 ? sb : stair(j)), reach);
      float ky = clamp(round((j.y - L0 + TH * .5) / ST), 0., 2.);
      float slabs = max(plate(j, int(ky), SB), reach);
      float rim = max(max(abs(sdRect(j.xz, SB)) - .0045, abs(j.y - (L0 + ky * ST - TH * .5)) - TH * .5 - .0015), reach);
      res = U(res, vec2(cutaway(solid, cutS(q)), 27.));
      res = U(res, vec2(cutaway(slabs, cutS(q)), 27.));
      res = U(res, vec2(cutaway(rim, cutS(q)), 67.));
    }
  }
  return res;
}
`};export{o as scene};
