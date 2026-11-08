import{a as c}from"./chunk-4QM5HSGV.js";import{a as o}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var s=e=>e.toFixed(4),r=[[-.35,.7,.95,.3],[.55,1.3,1.4,.85],[.7,1.35,1.15,.65],[-.3,.8,.55,-.35]],l=r.flat(),n=[0,1,2,3].map(e=>{let a=t=>e===1&&t===1?"h5":e===2&&t===2?"h10":s(r[t][e]);return`  float r${e} = dot(vec4(${[0,1,2,3].map(a).join(", ")}), bv), s${e} = dot(vec4(${[0,1,2,3].map(a).join(", ")}), dv);`}).join(`
`),v={id:"D10-parametric",cam:[2.43,1.75,4.2],target:[0,-.05,0],floor:-1.6,ring:1.9,accent:o(c.D10),poster:2,parts:[{name:"digital model",view:{el:12,zoom:.92}},{name:"free-form surface",view:{az:-35,el:18,zoom:.82}},{name:"concrete structure",inside:!0,view:{az:12,el:8,zoom:.82}},{name:"space frame",inside:!0,view:{az:-18,el:14,zoom:.82}},{name:"absorbed columns",inside:!0,view:{az:-70,el:4,zoom:.84}},{name:"panel seams",view:{el:34,zoom:.78}},{name:"rationalised panels",view:{az:4,el:28,zoom:.74}},{name:"cladding",view:{az:42,el:18,zoom:.78}}],glsl:`
const float GY = -.6;   // the ground
const float H[16] = float[16](${l.map(s).join(", ")});

vec3 palette(int i) {
  if (i == 0) return vec3(.45, 1., .86);    // digital model
  if (i == 1) return vec3(.66, .86, 1.);    // free-form surface
  if (i == 2) return vec3(.62, .64, .7);    // concrete structure
  if (i == 3) return vec3(.82, .68, 1.);    // space frame
  if (i == 4) return vec3(1., .66, .5);     // absorbed columns
  if (i == 5) return vec3(1., .9, .6);      // panel seams
  if (i == 6) return vec3(.6, .74, 1.);     // rationalised panels
  return vec3(.95, .95, 1.);                // cladding
}

float h5, h10;
/** Bernstein weights of the cubic, and their derivatives. */
vec4 bern(float t) { float s = 1. - t; return vec4(s * s * s, 3. * t * s * s, 3. * t * t * s, t * t * t); }
vec4 dbern(float t) { float s = 1. - t; return vec4(-3. * s * s, 3. * s * s - 6. * t * s, 6. * t * s - 3. * t * t, 3. * t * t); }
/** The surface over (x, z): its height above the ground and its slope (d/dx, d/dz). */
vec3 surf(vec2 xz) {
  float u = clamp((xz.x + 1.2) / 2.4, 0., 1.), v = clamp((xz.y + .9) / 1.8, 0., 1.);
  vec4 bv = bern(v), dv = dbern(v), bu = bern(u), du = dbern(u);
${n}
  vec4 r = vec4(r0, r1, r2, r3), s = vec4(s0, s1, s2, s3);
  return vec3(dot(bu, r), dot(du, r) / 2.4, dot(bu, s) / 1.8);
}
/** The shell's outline in plan: a rounded rectangle (negative inside). */
float outline(vec2 xz) { vec2 a = abs(xz / vec2(1.16, .87)); return (pow(a.x, 4.) + pow(a.y, 4.) - 1.) * .25; }
/** The section: the clad side is removed, through the podium, frame and shell; both left legs stay. */
float cutS(vec3 p) { return p.x - .45; }
float cs;
vec2 cut(vec2 d) { return vec2(cutaway(d.x, cs), d.y); }
/** A group with bound bb is worth evaluating when it may come nearer than what is found so far; else its bound is kept. */
bool near(float bb, inout vec2 res) {
  if (bb < min(res.x, .05)) return true;
  res = U(res, vec2(bb, 0.));
  return false;
}
/** The legs, where the surface meets the ground, and their columns' feet. */
const vec2 L0 = vec2(-.93, -.66), L1 = vec2(-.92, .64), L2 = vec2(.94, .66);
float legs(vec2 xz) { return exp(-dot(xz - L0, xz - L0) / .05) + exp(-dot(xz - L1, xz - L1) / .05) + exp(-dot(xz - L2, xz - L2) / .05); }

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., -.05 + .05 * uApart, 0.), vec3(1.25, .95, .95) + vec3(0., .5, 0.) * uApart);
  if (bound > .25) return vec2(bound, 0.);
  cs = cutS(p);
  h5 = 1.3 + .08 * sin(uTime * .6);
  h10 = 1.15 + .08 * sin(uTime * .45 + 2.);
  vec2 res = vec2(1e5, 0.);
  float b;
  vec3 q;

  // 0 \xB7 The digital model: the 4 \xD7 4 control net that defines the surface (points first, then their lines).
  b = built(0);
  q = p - apart(vec3(0., .45, 0.));
  if (b > 0. && near(sdBox(q - vec3(0., GY + .55, 0.), vec3(1.25, .95, .95)), res)) {
    float u = clamp((q.x + 1.2) / 2.4, 0., 1.) * 3., v = clamp((q.z + .9) / 1.8, 0., 1.) * 3.;
    float i = floor(u + .5), j = floor(v + .5), i0 = min(floor(u), 2.), j0 = min(floor(v), 2.);
    float hij = H[int(i + 4. * j)];
    if (i == 1. && j == 1.) hij = h5;
    if (i == 2. && j == 2.) hij = h10;
    vec3 c = vec3(i * .8 - 1.2, GY + hij, j * .6 - .9);
    float d = length(q - c) - .024 * min(b * 2., 1.);
    float ha = H[int(i0 + 4. * j)], hb = H[int(i0 + 1. + 4. * j)], hc = H[int(i + 4. * j0)], hd = H[int(i + 4. * (j0 + 1.))];
    float ln = sdCapsule(q, vec3(i0 * .8 - 1.2, GY + ha, c.z), vec3(i0 * .8 - .4, GY + hb, c.z), .0032);
    ln = min(ln, sdCapsule(q, vec3(c.x, GY + hc, j0 * .6 - .9), vec3(c.x, GY + hd, j0 * .6 - .3), .0032));
    if (b > .5) d = min(d, max(ln, (abs(fract((q.x + q.z) * 9. - uTime * .3) - .5) - .3) / 9.));
    res = U(res, cut(vec2(d, 60.)));
  }

  // The surface, shared by parts 1, 5, 6 and 7: its height f above the ground and its slope.
  q = p;
  vec3 s = surf(q.xz);
  float sl = sqrt(1. + dot(s.yz, s.yz));
  float ol = outline(q.xz);
  float b6 = built(6), b7 = built(7);
  float zone = q.x < -.4 ? 0. : q.x < .4 ? 1. : 2.;

  // 1, 7 \xB7 The free-form surface (glass), and where it is clad, a closed solid skin; the legs thicken round the columns.
  b = built(1);
  if (b > 0. && near(max(abs(q.y - GY - s.x) / sl - .08 - .3 * uApart, ol), res)) {
    bool clad = zone == 2. && b7 > 0. && q.x < mix(.4, 1.2, b7);
    bool paneled = zone == 1. && b6 > 0.;
    float lift = clad ? apart(vec3(0., .32, 0.)).y : apart(vec3(0., .25, 0.)).y;
    float w = (q.y - lift - GY - s.x) / sl;
    float t = (clad ? .016 : .007) + .05 * legs(q.xz) * built(4);
    float d = max(max(abs(w) - t, ol), max(GY - q.y + lift, q.x - mix(-1.2, 1.2, b)));
    if (!paneled) res = U(res, cut(vec2(clad ? d : SHELL(d), clad ? 27. : 81.)));
  }

  // 6 \xB7 Rationalised panels: each cell replaced by a flat panel, the plane touching the surface at the cell's centre.
  if (b6 > 0. && zone == 1. && near(max(abs(q.y - GY - s.x) / sl - .08 - .3 * uApart, ol), res)) {
    vec2 cell = vec2(.2, .225);
    vec2 cc = (floor(q.xz / cell) + .5) * cell;
    vec3 sc = surf(cc);
    vec3 t = q - vec3(0., apart(vec3(0., .32, 0.)).y, 0.);
    float pl = (t.y - GY - sc.x - dot(sc.yz, t.xz - cc)) / sqrt(1. + dot(sc.yz, sc.yz));
    vec2 e = abs(t.xz - cc) - cell * .5 + .011;
    float d = max(max(abs(pl) - .007, max(e.x, e.y)), max(ol, cc.x - mix(-.4, .4, b6)));
    res = U(res, cut(vec2(max(d, GY - t.y), 26.)));
  }

  // 5 \xB7 Seams along the surface's own parameter lines, gently curving with it: the rhythm of the panels.
  b = built(5);
  if (b > 0. && near(max(abs(q.y - GY - s.x) / sl - .1 - .45 * uApart, ol), res)) {
    float y = q.y - apart(vec3(0., .4, 0.)).y;
    float w = (y - GY - s.x) / sl;
    float u = (q.x + 1.2) / 2.4 + .012 * sin(6.3 * (q.z + .9) / 1.8);
    float sx = abs(fract(u * 12. + .5) - .5) * .2, sz = abs(fract((q.z + .9) / 1.8 * 8. + .5) - .5) * .225;
    float lift = zone == 2. && b7 > 0. ? .016 : .007;
    float d = max(length(vec2(min(sx, sz), w - lift)) - .0042, max(max(ol, GY - y), q.x - mix(-1.2, 1.2, b)));
    res = U(res, cut(vec2(d, 65.)));
  }

  // 3 \xB7 The space frame: two layers of chords and diagonals that follow the surface, over the concrete.
  b = built(3);
  if (b > 0. && near(max(max(abs(q.y - GY - s.x + .1) / sl - .1, ol + .03), .2 - s.x), res)) {
    float w = (q.y - GY - s.x) / sl;
    vec2 gx = q.xz - floor(q.xz / .2 + .5) * .2;
    float top = w + .04, bot = w + .16;
    float d = min(length(vec2(gx.y, top)), length(vec2(gx.x, top)));
    d = min(d, min(length(vec2(gx.y, bot)), length(vec2(gx.x, bot))));
    // Diagonals, zigzagging cell by cell, in the rows along x.
    float par = mod(floor(q.x / .2 + .5), 2.) * 2. - 1.;
    vec2 a = vec2(-.1, -.04), c = vec2(.1, -.16);
    vec2 e = vec2(gx.x * par, w) - a, ca = c - a;
    d = min(d, length(vec2(gx.y, length(e - ca * clamp(dot(e, ca) / dot(ca, ca), 0., 1.)))));
    d = max(d - .0045, max(max(ol + .03, .2 - s.x), q.x - mix(-1.2, 1.2, b)));
    float nd = length(vec3(gx.x, min(abs(top), abs(bot)), gx.y)) - .011;
    nd = max(nd, max(max(ol + .03, .2 - s.x), q.x - mix(-1.2, 1.2, b)));
    res = U(res, cut(vec2(d, 23.)));
    res = U(res, cut(vec2(nd, 63.)));
  }

  // 2 \xB7 The concrete structure: a podium and two cores, under the frame.
  b = built(2);
  q = p - apart(vec3(0., -.35, 0.));
  if (b > 0. && near(sdBox(q - vec3(0., GY + .32, 0.), vec3(.62, .35, .45)), res)) {
    float d = sdBox(q - vec3(0., GY + .11, 0.), vec3(.55, .11, .4));
    d = min(d, sdBox(q - vec3(-.25, GY + .38, -.05), vec3(.08, .27, .08)));
    d = min(d, sdBox(q - vec3(.3, GY + .36, .1), vec3(.07, .25, .07)));
    res = U(res, cut(vec2(rise(d, 2, q.y, GY - .01, GY + .66), 22.)));
  }

  // 4 \xB7 The columns in the legs, which the envelope thickens to absorb.
  b = built(4);
  q = p - apart(vec3(0., -.2, 0.));
  if (b > 0. && near(min(min(length(q.xz - L0), length(q.xz - L1)), length(q.xz - L2)) - .3, res)) {
    float d = sdRoundCone(q, vec3(L0.x, GY, L0.y), vec3(L0.x * .78, GY + .42, L0.y * .78), .045, .026);
    d = min(d, sdRoundCone(q, vec3(L1.x, GY, L1.y), vec3(L1.x * .78, GY + .42, L1.y * .78), .045, .026));
    d = min(d, sdRoundCone(q, vec3(L2.x, GY, L2.y), vec3(L2.x * .78, GY + .42, L2.y * .78), .045, .026));
    res = U(res, cut(vec2(rise(d, 4, q.y, GY, GY + .46), 24.)));
  }
  return res;
}
`};export{v as scene};
