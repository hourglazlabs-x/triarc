import{a as t}from"./chunk-4QM5HSGV.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var o={id:"D08-design-diagram",cam:[1.58,2.18,4.87],target:[0,-.1,0],floor:-1.6,ring:1.9,accent:e(t.D08),poster:1.5,parts:[{name:"design office area",view:{az:-28,el:0,zoom:.9}},{name:"client area",view:{az:20,el:0,zoom:.9}},{name:"society area",view:{az:-4,el:14,zoom:1.08}},{name:"labels",view:{az:0,el:6,zoom:1.04}},{name:"overlap",inside:!0,view:{az:0,el:6,zoom:.62}},{name:"designer",inside:!0,view:{az:0,el:2,zoom:.45}}],glsl:`
const vec3 O = vec3(-.5, -.15, .71);    // the design office's area
const vec3 C = vec3(.5, -.15, .71);     // the client's
const vec3 S = vec3(0., -.15, -.457);   // society's, the largest
const float RO = .75;                   // office and client
const float RS = 1.;                    // society
const vec3 TOP = vec3(0., .328, .42);   // the one point on all three surfaces: the overlap's summit

vec3 palette(int i) {
  if (i == 0) return vec3(.6, .84, 1.);     // design office area
  if (i == 1) return vec3(1., .72, .46);    // client area
  if (i == 2) return vec3(.66, 1., .8);     // society area
  if (i == 3) return vec3(.92, .94, 1.);    // labels
  if (i == 4) return vec3(1., .88, .56);    // overlap
  return vec3(1., .98, .94);                // designer
}

/** The section: a plane just in front of the designer, so the spheres open and the core shows. */
float cutS(vec3 p) { return p.z - .52; }

/** Area i: a translucent sphere grown from its centre, and its equator ring. */
vec2 area(vec3 q, float r, vec3 c, int i) {
  float g = built(i);
  if (g <= 0.) return vec2(1e5, 0.);
  float s = cutS(q + c);
  vec2 res = vec2(SHELL(cutaway(abs(length(q) - r * g) - .004, s)), 40. + float(i));
  return U(res, vec2(cutaway(sdTorus(q, vec2(r * g, .008)), s), 20. + float(i)));
}

/** A label: a dot on the area's surface at a, a leader to e (drawn out as it is built), a blank tag turned by w. */
float tag(vec3 q, vec3 a, vec3 e, float w, float g) {
  float d = min(sdCapsule(q, a, mix(a, e, min(g * 1.25, 1.)), .0045), length(q - a) - .017);
  if (g < .8) return d;
  vec3 t = q - e; t.xz *= rot(w);
  return min(d, sdRoundBox(t - vec3(.11, .03, 0.), vec3(.11, .045, .007), .014));
}

vec2 map(vec3 p) {
  float bound = length(p - vec3(0., -.05, .1)) - 2. - .5 * uApart;
  if (bound > .2) return vec2(bound, 0.);
  // 0-2 \xB7 the three areas; taken apart they move away from one another, out of the overlap.
  vec2 res = area(p - O - apart(vec3(-.22, 0., 0.)), RO, O, 0);
  res = U(res, area(p - C - apart(vec3(.22, 0., 0.)), RO, C, 1));
  res = U(res, area(p - S - apart(vec3(0., .12, -.3)), RS, S, 2));
  // 3 \xB7 labels: office and client mirrored, society's above and behind; each goes with its area.
  float b3 = built(3);
  if (b3 > 0.) {
    vec3 q = vec3(abs(p.x), p.y, p.z) - apart(vec3(.22, 0., 0.));
    float d = tag(q, vec3(.7635, .452, 1.071), vec3(.87, .68, 1.), -.35, b3);
    q = p - apart(vec3(0., .12, -.3));
    d = min(d, tag(q, vec3(.42, .63, -.917), vec3(.56, .9, -.84), -.3, b3));
    res = U(res, vec2(cutaway(d, cutS(p)), 23.));
  }
  // 4 \xB7 overlap: the region inside all three, a little inset, solid and lit; it fills from the bottom as it is built.
  float ov = max(max(length(p - O) - RO, length(p - C) - RO), length(p - S) - RS) + .008;
  res = U(res, vec2(cutaway(rise(ov, 4, p.y, -.65, .35), cutS(p)), 64.));
  // 5 \xB7 designer: a small figure on a round base on the overlap's summit; it comes down onto it as it is built.
  float b5 = built(5);
  if (b5 > 0.) {
    vec3 q = p - TOP - apart(vec3(0., .25, 0.)) - vec3(0., .3 * (1. - b5), 0.);
    float d = min(sdCylinder(q - vec3(0., .004, 0.), .004, .05), sdRoundCone(q, vec3(0., .022, 0.), vec3(0., .13, 0.), .042, .022));
    d = min(d, length(q - vec3(0., .177, 0.)) - .03);
    res = U(res, vec2(cutaway(d, cutS(q + TOP)), 25.));
  }
  return res;
}
`};export{o as scene};
