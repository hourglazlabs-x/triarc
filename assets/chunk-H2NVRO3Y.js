import{a as q}from"./chunk-4QM5HSGV.js";import{a as z}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var g=-.85,$=-.59,y=1.25,Z=1.2,H=.7,o=-.95,t=.5,d=.24,c=Math.tan(Math.PI/8);function n(a,b,i){return[d*a/(y-i),d*(g+b-$)/(y-i)]}var e=a=>a.toFixed(5),r=a=>`vec2(${e(a[0])}, ${e(a[1])})`,s=a=>n(t*c,a,o+t),h=a=>n(t,a,o+t*c);var Y=n(.52*c,1.01,o+.52),l=n(.52,1.01,o+.52*c),U=n(.11*c,1.27,o+.11),m=n(.11,1.27,o+.11*c),v=n(.075,1.27,o+.075*c),f=n(.075,1.43,o+.075*c),u=n(0,1.53,o),x=n(.06,.31,o+t),T=n(.06,.03,o+t),w=n(0,.62,o+t),B=n(.138,.62,o+t),E=d*.045/(y-o-t),p=a=>s(a)[1]/(s(a)[0]-d),A=`
/** The picture painted on the panel (P: across from its centre, folded, and up from the vanishing point): the model
 *  Baptistery projected from the eye. Returns the distance to the nearest painted line. */
float paint(vec2 P) {
  float d = max(abs(P.x - ${e(s(0)[0])}), slab(P.y, ${e(s(0)[1])}, ${e(s(1.01)[1])}));
  d = min(d, max(abs(P.x - ${e(h(0)[0])}), slab(P.y, ${e(h(0)[1])}, ${e(h(1.01)[1])})));
  d = min(d, max(abs(P.x - ${e(x[0])}), slab(P.y, ${e(T[1])}, ${e(x[1])})));
  d = min(d, max(abs(P.y - ${e(x[1])}), P.x - ${e(x[0])}));
  d = min(d, max(abs(P.x - ${e(v[0])}), slab(P.y, ${e(v[1])}, ${e(f[1])})));
  float h = min(min(abs(P.y - ${e(s(0)[1])}), abs(P.y - ${e(s(.47)[1])})), min(abs(P.y - ${e(s(.81)[1])}), abs(P.y - ${e(s(1.01)[1])})));
  d = min(d, max(h, P.x - ${e(s(0)[0])}));
  float s = P.x - ${e(d)};
  h = min(min(abs(P.y - ${e(p(0))} * s), abs(P.y - ${e(p(.47))} * s)), min(abs(P.y - ${e(p(.81))} * s), abs(P.y - ${e(p(1.01))} * s)));
  d = min(d, max(h, slab(P.x, ${e(s(0)[0])}, ${e(h(0)[0])})));
  d = min(d, seg(P, ${r(Y)}, ${r(U)}));
  d = min(d, seg(P, ${r(l)}, ${r(m)}));
  d = min(d, seg(P, ${r(Y)}, ${r(l)}));
  d = min(d, seg(P, ${r(f)}, ${r(u)}));
  float a = min(abs(length(P - ${r(w)}) - ${e(E)}), abs(length(P - ${r(B)}) - ${e(E)}));
  return min(d, max(a, ${e(w[1])} - P.y));
}
/** The sky: above the horizon and the Baptistery's outline (the lantern's cap, the roof). */
float skyline(float x) {
  return x < ${e(v[0])} ? ${e(u[1])} + (${e(f[1])} - ${e(u[1])}) * x / ${e(v[0])}
    : x < ${e(l[0])} ? ${e(m[1])} + (${e(l[1])} - ${e(m[1])}) * clamp((x - ${e(m[0])}) / ${e(l[0]-m[0])}, 0., 1.) : -1.;
}
`,k=[[t,0],[t*c,0],[t,.47],[t,.81],[t,1.01]].map(([a=0,b=0])=>{let i=g+b-$,P=Math.hypot(a,i);return`vec2(${e(a/P)}, ${e(i/P)})`}),N={id:"D01-perspective",cam:[2.017,1.094,5.741],target:[0,-.45,.75],floor:-1.05,ring:1.9,accent:z(q.D01),poster:1.5,parts:[{name:"Baptistery",view:{az:138,el:2,zoom:1.05}},{name:"cathedral doorway",view:{az:-7,el:-4,zoom:.72}},{name:"viewer's eye",view:{az:48,el:-14,zoom:.4}},{name:"horizon line",view:{az:-2,el:-6,zoom:.5}},{name:"vanishing point",view:{az:158,el:-16,zoom:.18}},{name:"orthogonals",view:{az:3,el:-8,zoom:.42}},{name:"painted panel",view:{az:158,el:-15,zoom:.2}},{name:"silvered sky",view:{az:158,el:-12,zoom:.2}},{name:"peephole",view:{az:-22,el:-10,zoom:.28}},{name:"mirror",view:{az:3,el:-6,zoom:.4}}],glsl:`
const float YG = ${e(g)};            // the ground
const float YEY = ${e($)};          // the eye's height: the horizon's
const float ZE = ${e(y)};            // the eye
const float ZP = ${e(Z)};            // the panel's painted face
const float ZM = ${e(H)};            // the mirror's face
const float ZB = ${e(o)};            // the Baptistery's centre
const float A = ${e(t)};              // its apothem
const float H = .15;                  // half the panel's side (and the mirror's)
const float ZO = ZP - .004;           // the construction lines, just in front of the painted face
const float ZD = .3;                  // the cathedral's doorway

vec3 palette(int i) {
  if (i == 0) return vec3(.90, .96, .92);   // Baptistery: white and green marble
  if (i == 1) return vec3(.92, .84, .72);   // cathedral doorway
  if (i == 2) return vec3(1., .86, .72);    // viewer's eye
  if (i == 3) return vec3(1., .62, .38);    // horizon line
  if (i == 4) return vec3(1., .86, .36);    // vanishing point
  if (i == 5) return vec3(.46, .86, 1.);    // orthogonals
  if (i == 6) return vec3(.86, .70, .52);   // painted panel
  if (i == 7) return vec3(.86, .93, 1.);    // silvered sky
  if (i == 8) return vec3(1., .72, .46);    // peephole
  return vec3(.72, .86, 1.);                // mirror
}

// The software renderer runs every branch, so map() is straight code: one symmetry fold for the octagon, the picture
// computed once, the build's clip once per part. CHUNK (always true) splits it in blocks, quick to compile.
#define CHUNK if (uZero == 0)
float box2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
float slab(float x, float a, float b) { return max(a - x, x - b); }
float seg(vec2 p, vec2 a, vec2 b) { vec2 pa = p - a, ba = b - a; return length(pa - ba * clamp(dot(pa, ba) / dot(ba, ba), 0., 1.)); }
/** The build's clip for part i: absent before its turn, then cut beyond the level s it has reached (s0 to s1). */
float upTo(int i, float s, float s0, float s1) { float g = built(i); return g <= 0. ? 1e5 : s - mix(s0, s1, g); }
${A}
vec2 map(vec3 p) {
  vec2 res = vec2(1e5, 0.);
  vec3 q, c;
  float d, e;

  CHUNK {
    // the ground: the piazza and the cathedral's floor (not a part)
    res = U(res, vec2(SHELL(sdBox(p - vec3(0., YG - .012, -.15), vec3(.68, .012, 1.6))), 5.));

    // 0 \xB7 the Baptistery: an octagon faced in marble, in three registers with corner pilasters and cornices, blind
    // arches in the second, a striped attic; a door on each cardinal face; an eight-sided roof and the lantern; the
    // scarsella to the west. Folded to a sixteenth: u out from a face, v along it.
    q = p - apart(vec3(0., 0., -.36));
    c = vec3(q.x, q.y - YG, q.z - ZB);
    vec2 g = abs(c.xz);
    g = vec2(max(g.x, g.y), min(g.x, g.y));
    bool card = dot(g, vec2(-.38268, .92388)) <= 0.;
    vec2 f = g - 2. * max(dot(g, vec2(-.38268, .92388)), 0.) * vec2(-.38268, .92388);
    float u = f.x, v = f.y, y = c.y;
    d = max(u - A, slab(y, 0., 1.01));
    d = min(d, max(u - A - .03, slab(y, 0., .03)));
    d = min(d, max(u - A - .022, min(min(abs(y - .455), abs(y - .795)), abs(y - .995)) - .015));
    d = min(d, max(max(u - A - .012, .182 - v), slab(y, 0., .99)));
    d = min(d, max(max(u - A - .007, abs(v - .069) - .011), slab(y, .03, .44)));
    float vv = v - (v < .069 ? 0. : .138);
    e = min(box2(vec2(vv, y - .56), vec2(.045, .06)), length(vec2(vv, y - .62)) - .045);
    d = max(d, -max(e, A - .012 - u));
    d = max(d, -max(card ? box2(vec2(v, y - .17), vec2(.06, .14)) : 1e5, A - .025 - u));
    d = max(d, -max(max(abs(fract((y - .835) / .05) - .5) * .05 - .006, A - .004 - u), slab(y, .82, .97)));
    d = min(d, max(.5355 * u + .8445 * (y - 1.01) - .2785, 1. - y));
    e = max(max(u - .075, slab(y, 1.25, 1.43)), -max(max(v - .018, slab(y, 1.3, 1.4)), .06 - u));
    e = min(e, max(.762 * u + .648 * (y - 1.43) - .0648, 1.43 - y));
    d = min(min(d, e), length(c - vec3(0., 1.55, 0.)) - .018);
    d = min(d, sdBox(c - vec3(0., .26, -.6), vec3(.16, .26, .15)));
    d = min(d, sdBox(c - vec3(0., .52, -.6), vec3(.175, .012, .165)));
    res = U(res, vec2(max(d, upTo(0, y, 0., 1.58)), 20.));

    // 1 \xB7 the cathedral's central doorway: a fragment of the front wall (translucent) and the stone frame, its
    // lintel's cornice and the threshold
    q = p - apart(vec3(0., 0., -.16));
    y = q.y - YG;
    float ax = abs(q.x), dz = q.z - ZD;
    e = upTo(1, y, 0., 1.3);
    d = max(sdBox(vec3(q.x, y - .64, dz), vec3(.62, .64, .06)), -box2(vec2(ax, y - .49), vec2(.3, .51)));
    res = U(res, vec2(SHELL(max(d, e)), 41.));
    d = max(max(box2(vec2(ax, y - .53), vec2(.36, .53)), -box2(vec2(ax, y - .49), vec2(.3, .51))), abs(dz) - .08);
    d = min(d, sdBox(vec3(q.x, y - 1.08, dz), vec3(.4, .022, .09)));
    d = min(d, sdBox(vec3(q.x, y - .01, dz), vec3(.36, .01, .1)));
    res = U(res, vec2(max(d, e), 21.));
  }

  CHUNK {
    // 2 \xB7 the viewer's eye, fixed behind the peephole, and its line of sight through it to the mirror
    q = p - apart(vec3(0., 0., .2));
    c = q - vec3(0., YEY, ZE);
    e = upTo(2, q.y, YEY - .035, YEY + .035);
    res = U(res, vec2(max(length(c) - .03, e), 22.));
    d = max(length(c.xy) - .013, abs(c.z + .028) - .003);
    d = min(d, max(length(c.xy) - .0022, slab(q.z, ZM, ZE - .03)));
    res = U(res, vec2(max(d, e), 62.));

    // 3 \xB7 the horizon line, at the eye's height, in the panel's plane, drawn out from the middle
    q = p - apart(vec3(0., 0., -.24));
    d = max(length(vec2(q.y - YEY, q.z - ZO + .002)) - .0035, abs(q.x) - .62);
    res = U(res, vec2(max(d, upTo(3, abs(q.x), 0., .63)), 63.));

    // 4 \xB7 the vanishing point on it, at the panel's centre, and 5 \xB7 the orthogonals converging on it, drawn in
    // toward it
    q = p - apart(vec3(0., 0., -.14));
    vec2 o = vec2(abs(q.x), q.y - YEY);
    float zo = q.z - ZO;
    d = min(length(vec3(o, zo + .003)) - .011, length(vec2(length(o) - .024, zo + .003)) - .0025);
    res = U(res, vec2(max(d, upTo(4, q.y, YEY - .03, YEY + .03)), 64.));
    d = 1e5;
    ${k.map(a=>`d = min(d, length(o - ${a} * clamp(dot(o, ${a}), 0., .56)));`).join(`
    `)}
    d = min(d, length(vec2(o.x, o.y + clamp(-o.y, 0., .56))));
    d = length(vec2(d, zo)) - .0026;
    float gr = built(5);
    res = U(res, vec2(max(d, gr <= 0. ? 1e5 : (1. - gr) * .57 - length(o)), 65.));
  }

  CHUNK {
    // 6 \xB7 the painted panel: a square board, the picture on the side away from the eye
    q = p;
    vec2 P = vec2(abs(q.x), q.y - YEY);
    float cz = q.z - ZP;
    e = upTo(6, q.y, YEY - H, YEY + H);
    float hole = length(P) - mix(.006, .024, clamp(cz / .026, 0., 1.));
    d = max(max(box2(P, vec2(H)), abs(cz - .013) - .013), -hole);
    res = U(res, vec2(max(d, e), paint(P) < .0019 && cz < .004 ? 66. : 26.));

    // 7 \xB7 the silvered sky: a leaf of silver over the picture's sky, above the horizon and the building
    d = max(max(box2(P, vec2(H)), max(-P.y, skyline(P.x) - P.y)), abs(cz + .0012) - .0012);
    res = U(res, vec2(max(max(d, -hole), upTo(7, q.y, YEY, YEY + H)), 67.));

    // 8 \xB7 the peephole: the hole's lining, lentil-small on the painted side, opening like a cone to the back, its
    // rim there
    q = p - apart(vec3(0., 0., .1));
    P = vec2(length(q.xy - vec2(0., YEY)), q.z - ZP);
    e = upTo(8, q.y, YEY - .03, YEY + .03);
    d = max(abs(P.x - mix(.006, .024, clamp(P.y / .026, 0., 1.)) - .0015) - .0015, slab(P.y, 0., .026));
    res = U(res, vec2(max(d, e), 28.));
    res = U(res, vec2(max(length(vec2(P.x - .027, P.y - .027)) - .0035, e), 68.));

    // 9 \xB7 the mirror at arm's length, the same size as the panel, facing it: a frame, and its glass
    q = p - apart(vec3(0., 0., -.1));
    P = vec2(abs(q.x), q.y - YEY);
    e = upTo(9, q.y, YEY - H - .02, YEY + H + .02);
    d = max(max(box2(P, vec2(H + .015)), -box2(P, vec2(H))), abs(q.z - ZM + .006) - .012);
    res = U(res, vec2(max(d, e), 29.));
    res = U(res, vec2(SHELL(max(max(box2(P, vec2(H)), abs(q.z - ZM + .004) - .003), e)), 49.));
  }

  res.x = cutaway(res.x, p.x);
  return res;
}
`};export{N as scene};
