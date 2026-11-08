import{a as t}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var r={id:"D10-fields-of-lines",cam:[1.89,2.48,3.88],target:[.08,-.3,0],floor:-1.6,ring:1.9,accent:e(t.D10),poster:4,parts:[{name:"dark ground",view:{el:10,zoom:.95}},{name:"parallel lines",view:{az:-32,el:18,zoom:.74}},{name:"rotation",view:{az:22,el:28,zoom:.72}},{name:"curved boundary",view:{az:40,el:2,zoom:.85}},{name:"sloping floor",view:{az:-8,el:-30,zoom:.92}},{name:"post field",view:{az:-5,el:-18,zoom:.85}},{name:"constant datum",view:{az:-18,el:-31,zoom:.85}},{name:"movement traces",view:{el:22,zoom:.82}},{name:"lines of light",view:{az:-62,el:-16,zoom:.78}},{name:"bundled paths",view:{az:72,el:2,zoom:.8}}],glsl:`
const float GY = -.55;              // the ground at the lowest part of the site
const float DATUM = GY + .5;        // the lamps' one height
const vec2 CB = vec2(-1.75, 0.);    // the curved boundary: an arc of this centre (x, z) ...
const float RB = 2.7;               // ... and radius
const float SX = .07;               // the lines' spacing

vec3 palette(int i) {
  if (i == 0) return vec3(.3, .34, .46);    // dark ground
  if (i == 1) return vec3(.95, .97, 1.);    // parallel lines
  if (i == 2) return vec3(.68, .86, 1.);    // rotation
  if (i == 3) return vec3(.86, .62, 1.);    // curved boundary
  if (i == 4) return vec3(.5, .62, .86);    // sloping floor
  if (i == 5) return vec3(.62, .92, 1.);    // post field
  if (i == 6) return vec3(1., .84, .5);     // constant datum
  if (i == 7) return vec3(.45, 1., .8);     // movement traces
  if (i == 8) return vec3(1., .95, .7);     // lines of light
  return vec3(.9, .6, 1.);                  // bundled paths
}

float gb;   // how far the ground has tilted (built(4))
/** The ground's height: level at the left, rising to the right as it tilts. */
float G(float x) { return GY + .11 * (x + 1.3) * gb; }
/** The site in plan: a band cut by the curved boundary (negative inside). */
float site(vec2 c) { return max(max(-1.3 - c.x, abs(c.y) - .85), length(c - CB) - RB); }
/** The section: everything in front of the middle row of posts is removed. */
float cutS(vec3 p) { return p.z - .02; }
float cs;
vec2 cut(vec2 d) { return vec2(cutaway(d.x, cs), d.y); }
/** A group with bound bb is worth evaluating when it may come nearer than what is found so far; else its bound is kept. */
bool near(float bb, inout vec2 res) {
  if (bb < min(res.x, .05)) return true;
  res = U(res, vec2(bb, 0.));
  return false;
}
/** One line of the field: centre c (x, z), turned toward the boundary's tangent by w; part 1, or 2 where it turns. */
vec2 fieldLine(vec3 q, vec2 c, float b1, float b2) {
  float w = smoothstep(-.6, .75, c.x) * b2;
  vec2 r = normalize(c - CB);
  vec2 dir = normalize(mix(vec2(0., 1.), vec2(-r.y, r.x), w));
  vec2 e = q.xz - c;
  float lift = c.x > -.35 && b2 > 0. ? apart(vec3(0., .1, 0.)).y : 0.;
  float d = length(vec2(length(e - dir * clamp(dot(e, dir), -.075, .075)), q.y - lift - G(c.x) - .004)) - .0045;
  bool on = site(c) < -.05 && c.x < mix(-1.4, 1., b1);
  return vec2(on ? d : 1e5, c.x > -.35 && b2 > 0. ? 62. : 61.);
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(.15, GY + .2 + .1 * uApart, 0.), vec3(1.55, .55, .95) + vec3(.3, .4, .1) * uApart);
  if (bound > .25) return vec2(bound, 0.);
  cs = cutS(p);
  gb = built(4);
  vec2 res = vec2(1e5, 0.);
  float b;
  vec3 q;

  // 0 \xB7 The dark ground: a thin slab over the site, following the floor's tilt.
  b = built(0);
  q = p - apart(vec3(0., -.15, 0.));
  if (b > 0.) {
    float d = max(abs(q.y - G(q.x) + .015) - .015, max(site(q.xz), q.x - mix(-1.3, 1., b)));
    res = U(res, cut(vec2(d * .99, 20.)));
  }

  // 4 \xB7 The sloping floor: the wedge under the ground, its side ruled with level lines.
  b = gb;
  q = p - apart(vec3(0., -.35, 0.));
  if (b > 0.) {
    float d = max(max(q.y - G(q.x) + .03, GY - .12 - q.y), site(q.xz));
    bool ruled = site(q.xz) > -.012 && abs(fract((q.y - GY + .12) / .04) - .5) > .4;
    res = U(res, cut(vec2(SHELL(d * .99), ruled ? 64. : 44.)));
  }

  // 1, 2 \xB7 One white line per space, in four rows: parallel at the left, turning toward the boundary at the right.
  b = built(1);
  q = p - apart(vec3(0., .12, 0.));
  if (b > 0. && near(max(abs(q.y - G(q.x)) - .03 - .1 * uApart, site(q.xz) - .02), res)) {
    float zc = -.6 + .4 * clamp(floor((q.z + .8) / .4), 0., 3.);
    float i0 = floor(q.x / SX + .5);
    float b2 = built(2);
    vec2 l = fieldLine(q, vec2((i0 - 1.) * SX, zc), b, b2);
    l = U(l, fieldLine(q, vec2(i0 * SX, zc), b, b2));
    l = U(l, fieldLine(q, vec2((i0 + 1.) * SX, zc), b, b2));
    res = U(res, cut(l));
  }

  // 3 \xB7 The curved boundary: a low curb along the arc, its top lit.
  b = built(3);
  q = p - apart(vec3(.18, 0., 0.));
  if (b > 0. && near(max(abs(length(q.xz - CB) - RB + .012) - .05, abs(q.y - G(q.x) - .01) - .07), res)) {
    float a = max(abs(length(q.xz - CB) - RB + .012) - .01, abs(q.z) - .85 * b);
    float y = q.y - G(q.x);
    res = U(res, cut(vec2(max(a, abs(y - .01) - .035), 23.)));
    res = U(res, cut(vec2(max(a - .003, abs(y - .047) - .004), 63.)));
  }

  // 5 \xB7 A second field: light posts on a coarser grid, standing on the floor.
  b = built(5);
  q = p - apart(vec3(0., .3, 0.));
  vec2 pc = vec2(clamp(floor((q.x + 1.12) / .36 + .5), 0., 5.) * .36 - 1.12, clamp(floor(q.z / .4 + .5), -1., 1.) * .4);
  if (b > 0. && near(max(site(q.xz) - .05, max(q.y - DATUM - .05, G(q.x) - .05 - q.y)), res)) {
    float d = site(pc) < -.08 ? sdCapsule(q, vec3(pc.x, G(pc.x), pc.y), vec3(pc.x, mix(G(pc.x), DATUM - .012, b), pc.y), .0075) : 1e5;
    res = U(res, cut(vec2(d, 25.)));
  }

  // 6 \xB7 Their lamps keep one datum height, drawn through them as dashed lines.
  b = built(6);
  q = p - apart(vec3(0., .5, 0.));
  if (b > 0. && near(max(abs(q.y - DATUM) - .04, site(q.xz) - .05), res)) {
    float head = site(pc) < -.08 ? max(length(q.xz - pc) - .03 * b, abs(q.y - DATUM) - .006) : 1e5;
    float zl = clamp(floor(q.z / .4 + .5), -1., 1.) * .4;
    float ln = max(length(vec2(q.y - DATUM, q.z - zl)) - .0025, max(-1.16 - q.x, q.x - mix(-1.16, .95, b)));
    ln = max(max(ln, site(vec2(q.x, zl)) + .03), (abs(fract(q.x * 8. - uTime * .2) - .5) - .3) / 8.);
    res = U(res, cut(vec2(min(head, ln), 66.)));
  }

  // 7 \xB7 Traces of movement cross both fields: a tram (two rails), a car, a bicycle and a walker (dots), moving on.
  b = built(7);
  q = p - apart(vec3(0., .28, .1));
  if (b > 0. && near(max(abs(q.y - G(q.x) - .018) - .03, site(q.xz) - .02), res)) {
    float x = q.x, y = q.y - G(x) - .018;
    float a = 1.4 * x + .3, f = -.05 + .25 * sin(a), k = .35 * cos(a);
    float d = length(vec2(abs(abs(q.z - f) - .022) / sqrt(1. + k * k), y)) - .004;
    a = 2.1 * x - .4; f = .43 + .14 * sin(a); k = .294 * cos(a);
    float e = length(vec2(abs(q.z - f) / sqrt(1. + k * k), y)) - .0045;
    d = min(d, max(e, (abs(fract(x * 4. - uTime * .5) - .5) - .32) / 4.));
    a = 3. * x + 1.; f = -.42 + .11 * sin(a); k = .33 * cos(a);
    e = length(vec2(abs(q.z - f) / sqrt(1. + k * k), y)) - .003;
    d = min(d, max(e, (abs(fract(x * 7. - uTime * .35) - .5) - .25) / 7.));
    a = 1.1 * x - 1.2; f = .1 + .3 * sin(a); k = .33 * cos(a);
    e = length(vec3(abs(q.z - f) / sqrt(1. + k * k), y, (fract(x * 14. - uTime * .25) - .5) / 14.)) - .006;
    d = min(d, e);
    d = max(d, max(max(x - mix(-1.3, 1., b), -1.25 - x), site(q.xz) + .02));
    res = U(res, cut(vec2(d, 67.)));
  }

  // 8 \xB7 At the left the floor lines run on, climb round a bend and continue in a ceiling as strips of light.
  b = built(8);
  q = p - apart(vec3(-.25, .12, 0.));
  if (b > 0. && near(sdBox(q - vec3(-.9, GY + .24, 0.), vec3(.4, .3, .36)), res)) {
    const float H1 = GY + .44;
    float yb = G(-1.24) + .006;
    float zr = q.z - clamp(floor(q.z / .07 + .5), -4., 4.) * .07;
    float df = length(vec2(max(abs(q.x + .91) - .33, 0.), q.y - G(q.x) - .006));
    float dw = length(vec2(q.x + 1.24, max(abs(q.y - (yb + H1) * .5) - (H1 - yb) * .5, 0.)));
    float dc = length(vec2(max(abs(q.x + .89) - .35, 0.), q.y - H1));
    float s = -.58 - q.x;
    if (dw < df) s = .66 + q.y - yb;
    if (dc < min(df, dw)) s = .66 + H1 - yb + q.x + 1.24;
    float d = max(length(vec2(min(df, min(dw, dc)), zr)) - .0045, s - 1.8 * b);
    res = U(res, cut(vec2(d, 68.)));
    float c = sdBox(q - vec3(-1.24 + .35 * smoothstep(.55, 1., b), H1 + .014, 0.), vec3(.35 * smoothstep(.55, 1., b), .005, .33));
    if (b > .55) res = U(res, cut(vec2(SHELL(c), 88.)));
  }

  // 9 \xB7 Elsewhere, three paths come in from three sides, meet, twist into a bundle, and the bundle becomes a building.
  b = built(9);
  q = p - apart(vec3(.25, 0., 0.)) - vec3(1.18, GY, 0.);
  if (b > 0. && near(sdBox(q - vec3(0., .25, -.15), vec3(.34, .33, .72)), res)) {
    float reach = mix(-.86, .5, b);
    // The paths, flat on the ground, meeting at (0, -.3).
    float pa = sdCapsule(q, vec3(-.27, .016, -.82), vec3(0., .016, -.3), .018);
    pa = min(pa, sdCapsule(q, vec3(.29, .016, -.78), vec3(0., .016, -.3), .018));
    pa = min(pa, sdCapsule(q, vec3(.02, .016, -.86), vec3(0., .016, -.3), .018));
    // The bundle: three strands twisting round a rising axis.
    float t = clamp((q.z + .3) / .8, 0., 1.);
    float ya = .03 + .4 * smoothstep(.25, 1., t);
    float r = .085 * (1. - .5 * t);
    float ph = 7. * t;
    vec2 o = vec2(cos(ph), sin(ph)) * r;
    vec2 e = vec2(q.x, q.y - ya);
    float st = length(e - o);
    o *= mat2(-.5, -.866, .866, -.5); st = min(st, length(e - o));
    o *= mat2(-.5, -.866, .866, -.5); st = min(st, length(e - o));
    st = max(st * .7 - .018, max(-.3 - q.z, q.z - .5));
    pa = max(min(pa, st), q.z - reach);
    res = U(res, cut(vec2(pa, 29.)));
    // The building it becomes: a swelling volume round the axis at the bundle's end.
    float rb = .13 * smoothstep(.4, .85, t) * smoothstep(.4, 1., b);
    float bd = max(length(vec2(q.x, (q.y - ya) * 1.25)) - rb, max(-.05 - q.z, q.z - .5));
    if (b > .4) res = U(res, cut(vec2(SHELL(bd * .8), 49.)));
  }
  return res;
}
`};export{r as scene};
