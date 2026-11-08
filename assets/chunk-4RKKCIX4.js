import{a as t}from"./chunk-4QM5HSGV.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var r={id:"D10-continuous-space",cam:[2.66,1.62,3.9],target:[0,-.25,.1],floor:-1.6,ring:1.9,accent:e(t.D10),poster:3,parts:[{name:"plaza",view:{az:-15,el:16,zoom:.82}},{name:"undulations",view:{az:5,el:24,zoom:.8}},{name:"bifurcations",view:{az:-55,el:12,zoom:.8}},{name:"folds",view:{az:40,el:6,zoom:.78}},{name:"inflections",view:{az:62,el:4,zoom:.82}},{name:"rising wall",view:{az:62,el:8,zoom:.88}},{name:"continuous envelope",view:{az:40,el:12,zoom:.92}},{name:"column-free interior",inside:!0,view:{az:10,el:12,zoom:.8}},{name:"crater landscape",inside:!0,view:{az:5,el:34,zoom:.74}}],glsl:`
const float GY = -.55;      // the plaza's level
const float FL = -.12;      // the interior floor, below it
const float HR = .72;       // the roof, above it

vec3 palette(int i) {
  if (i == 0) return vec3(.78, .84, .96);   // plaza
  if (i == 1) return vec3(.6, .82, 1.);     // undulations
  if (i == 2) return vec3(.45, 1., .86);    // bifurcations
  if (i == 3) return vec3(1., .7, .5);      // folds
  if (i == 4) return vec3(.82, .66, 1.);    // inflections
  if (i == 5) return vec3(.62, .92, 1.);    // rising wall
  if (i == 6) return vec3(.9, .88, 1.);     // continuous envelope
  if (i == 7) return vec3(.55, .72, 1.);    // column-free interior
  return vec3(1., .82, .5);                 // crater landscape
}

/** The section: everything right of the middle is removed, showing the surface's one line. */
float cutS(vec3 p) { return p.x - .2; }
float cs;
/** A piece of the surface, part i: distance d to its line in section; light lines along the surface across it. */
vec2 piece(float d, float x, float i, bool solid, bool lit) {
  d = max(d - .006, abs(x) - 1.1);
  bool flow = abs(fract(x / .14 + .5) - .5) * .14 < .0028 || lit;
  return vec2(cutaway(solid ? d : SHELL(d), cs), flow ? 60. + i : (solid ? 20. : 80.) + i);
}
/** The undulating ground between u = .08 and .78, and its slope: two waves, tapering to nothing at both ends. */
vec2 waves(float u, float x, float a) {
  float e = sin(3.14159 * clamp((u - .08) / .7, 0., 1.));
  float k = 17.95, ph = k * (u - .06 * sin(1.3 * x));
  return vec2(a * sin(ph) * e, a * k * cos(ph) * e);
}
/** The craters: the nearest one to x, as (centre x, centre u, radius). */
vec3 crater(float x) { return x < -.25 ? vec3(-.55, -.42, .13) : x < .32 ? vec3(.05, -.4, .15) : vec3(.6, -.44, .12); }

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., -.2, .17), vec3(1.15, .42, 1.15) + .4 * uApart);
  if (bound > .25) return vec2(bound, 0.);
  cs = cutS(p);
  vec2 res = vec2(1e5, 0.);
  float b;
  vec3 q;
  float u, v;

  // 0 \xB7 The plaza: flat, open at the front; it spreads out from the middle.
  b = built(0);
  if (b > 0.) {
    q = p - apart(vec3(0., 0., .35)); u = q.z; v = q.y - GY;
    float d = length(vec2(max(abs(u - 1.015) - .235, 0.), v));
    res = U(res, piece(max(d, abs(q.x) - 1.1 * b), q.x, 0., true, false));
  }

  // 1 \xB7 Undulations: long waves run through the ground, their crests curving across it.
  b = built(1);
  if (b > 0.) {
    q = p - apart(vec3(0., .12, .2)); u = q.z; v = q.y - GY;
    vec2 w = waves(u, q.x, .06 * b);
    float d = length(vec2(max(abs(u - .43) - .35, 0.), (v - w.x) / sqrt(1. + w.y * w.y)));
    res = U(res, piece(max(d, .78 - 1.1 * b - u), q.x, 1., true, false));
  }

  // 2 \xB7 A bifurcation: on one side the ground splits, an upper branch peeling off it.
  b = built(2);
  if (b > 0.) {
    q = p - apart(vec3(-.3, .15, 0.)); u = q.z; v = q.y - GY;
    float t = clamp((.62 - u) / .42, 0., 1.);
    float f = waves(u, q.x, .06).x + .3 * b * t * t * (3. - 2. * t);
    float s = .3 * b * 6. * t * (1. - t) / .42;
    float d = length(vec2(max(abs(u - .41) - .21, 0.), (v - f) / sqrt(1. + s * s)));
    d = max(d, q.x + .35);
    res = U(res, piece(d, q.x, 2., true, false));
  }

  // 3 \xB7 A fold: on the other side the front edge bends sharply back over itself.
  b = built(3);
  if (b > 0.) {
    q = p - apart(vec3(.3, 0., .15)); u = q.z; v = q.y - GY;
    vec2 e = vec2(u - 1.25, v - .08);
    float arc = e.x > 0. ? abs(length(e) - .08) : 1e5;
    float flap = length(vec2(max(abs(u - (1.25 - .2 * b)) - .2 * b, 0.), v - .16));
    float d = max(min(arc, flap), .35 - q.x);
    res = U(res, piece(d, q.x, 3., true, false));
  }

  // 4 \xB7 Inflections: an S-curve, its line of changing curvature lit, leading down to the interior floor.
  b = built(4);
  if (b > 0.) {
    q = p - apart(vec3(0., 0., 0.)); u = q.z; v = q.y - GY;
    float t = clamp((.08 - u) / .28, 0., 1.);
    float f = FL * b * t * t * (3. - 2. * t);
    float s = FL * b * 6. * t * (1. - t) / .28;
    float d = length(vec2(max(abs(u + .27) - .35, 0.), (v - f) / sqrt(1. + s * s)));
    d = max(d, .08 - 1.1 * b - u);
    // Holes where the craters will be.
    vec3 c = crater(q.x);
    if (built(8) > 0.) d = max(d, c.z + .05 - length(vec2(q.x - c.x, u - c.y)));
    res = U(res, piece(d, q.x, 4., true, abs(t - .5) < .035 && b >= 1.));
  }

  // 5 \xB7 The rising wall: the floor curves slowly upward and becomes the back wall.
  b = built(5);
  if (b > 0.) {
    q = p - apart(vec3(0., 0., -.35)); u = q.z; v = q.y - GY;
    vec2 e = vec2(u + .62, v - .2);
    float arc = e.x < 0. && e.y < 0. ? abs(length(e) - .32) : 1e5;
    float wall = length(vec2(u + .94, max(abs(v - .32) - .12, 0.)));
    float d = max(min(arc, wall), v - FL - .56 * b);
    res = U(res, piece(d, q.x, 5., false, false));
  }

  // 6 \xB7 The continuous envelope: the wall bends over into the roof, one surface without a break.
  b = built(6);
  float ue = -.12 + .07 * cos(1.4 * p.x);
  if (b > 0.) {
    q = p - apart(vec3(0., .4, 0.)); u = q.z; v = q.y - GY;
    vec2 e = vec2(u + .66, v - HR + .28);
    float arc = e.x < 0. && e.y > 0. ? abs(length(e) - .28) : 1e5;
    float roof = length(vec2(max(max(-.66 - u, u - ue), 0.), v - HR));
    float d = max(min(arc, roof), u - mix(-.94, ue + .01, b));
    res = U(res, piece(d, q.x, 6., false, false));
  }

  // 7 \xB7 The column-free interior: closed by a glass wall under the roof's edge; in the build, columns vanish into it.
  b = built(7);
  if (b > 0.) {
    q = p - apart(vec3(0., 0., .25)); u = q.z; v = q.y - GY;
    float t = clamp((.08 - u) / .28, 0., 1.);
    float g = FL * t * t * (3. - 2. * t);
    float d = max(abs(u - ue + .03) * .94 - .004, max(g - v, v - HR + .01));
    d = max(d, v - g - (HR - g) * smoothstep(.25, .9, b));
    bool mullion = abs(fract(q.x / .12 + .5) - .5) * .12 < .004;
    res = U(res, vec2(cutaway(mullion ? max(d - .003, abs(q.x) - 1.09) : SHELL(max(d, abs(q.x) - 1.09)), cs), mullion ? 67. : 87.));
    if (b < 1.) {
      float r = .028 * (1. - smoothstep(.35, .95, b));
      float cx = clamp(floor(q.x / .6 + .5), -1., 1.) * .6;
      res = U(res, vec2(cutaway(max(length(vec2(q.x - cx, u + .45)) - r, max(FL - v, v - HR)), cs), 27.));
    }
  }

  // 8 \xB7 The interior floor shapes itself into an artificial landscape of craters, each with a raised rim.
  b = built(8);
  if (b > 0.) {
    q = p - apart(vec3(0., -.25, 0.)); u = q.z; v = q.y - GY;
    vec3 c = crater(q.x);
    float rho = length(vec2(q.x - c.x, u - c.y));
    float x = rho / c.z;
    float h = b * (-.075 * max(1. - x * x, 0.) + .028 * exp(-(rho - c.z) * (rho - c.z) / .0012));
    float d = max((abs(v - FL - h) - .006) * .7, rho - c.z - .06);
    res = U(res, vec2(cutaway(d, cs), abs(fract(rho / .035) - .5) < .08 ? 68. : 28.));
  }
  return res;
}
`};export{r as scene};
