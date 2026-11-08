import{a as b}from"./chunk-4QM5HSGV.js";import{a as d}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var t=e=>e.toFixed(4),c=e=>`vec2(${e.slice(0,2).map(t).join(", ")})`,n=e=>`vec3(${e.slice(0,3).map(t).join(", ")})`,i=e=>`mat2(${[Math.cos(e),-Math.sin(e),Math.sin(e),Math.cos(e)].map(t).join(", ")})`,h={c:[0,.1,0],h:[.56,.33,.3]};function y(e,a,r){let o=a[0]-e[0],v=a[1]-e[1],m=Math.hypot(o,v),s=[v/m,-o/m],l=s[0]*e[0]+s[1]*e[1];return s[0]*r[0]+s[1]*r[1]<l&&(s=[-s[0],-s[1]],l=-l),`vec3(${t(s[0])}, ${t(s[1])}, ${t(l)})`}var B=[{z:-.12,w:.18,o:[.34,.05,-.08],yaw:.3,lean:-.42},{z:.18,w:.12,o:[.15,-.03,.12],yaw:-.45,lean:.3}],q=[{o:[-.3,.06,-.14],h:[.5,.29],phase:0,apart:-.3},{o:[.02,.02,-.26],h:[.46,.26],phase:2.1,apart:-.5},{o:[.34,.1,-.38],h:[.42,.23],phase:4.2,apart:-.7}],p=[[-.1,.42],[.09,-.42]],u=[[.02,.07],[.64,-.13]],$=[{at:[-.3,0],lines:[p,p],m:[-.09,.03,.06],spin:.12,tip:.24},{at:[.3,.16],lines:[p,u],m:[.08,.08,.1],spin:-.14,tip:.3},{at:[.34,-.2],lines:[p,u],m:[.1,-.06,.02],spin:.2,tip:-.16}],z=[{o:[.2,-.1],a:0,c:.6},{o:[-.06,.12],a:1.9,c:2.8},{o:[.02,-.17],a:3.7,c:4.6}],f=[{c:[-.18,.58,.03],h:[.1,.012,.05],a:[.5,.3],pin:[-.1,.74,.06]},{c:[-.74,.2,-.06],h:[.012,.07,.1],a:[.6,-.25],pin:[-.9,.3,0]},{c:[.12,.03,.43],h:[.08,.05,.012],a:[-.4,.35],pin:[.22,-.23,.3]},{c:[.74,.3,-.08],h:[.012,.05,.09],a:[-.5,.4],pin:[.56,.43,-.12]}],g=[{c:[.05,.03],h:[1.12,.8],a:0,y:-1,t:.08},{c:[-.08,-.05],h:[1.02,.74],a:.12,y:-.905,t:.075},{c:[.09,.06],h:[.93,.68],a:-.09,y:-.815,t:.07},{c:[-.04,-.03],h:[.85,.62],a:.19,y:-.73,t:.065}],V=g.map((e,a)=>`  r = q.xz - ${c(e.c)}; r *= ${i(e.a)}; y = q.y + ${t(.08*(3-a))} * uApart - ${t(e.y+e.t/2)};
  poly = sdRect(r, ${c(e.h)});
  d = min(d, max(poly, abs(y) - ${t(e.t/2)}));
  e = min(e, max(abs(poly + .005) - .005, abs(y - ${t(e.t/2-.004)}) - .006));`).join(`
`),x=$.map((e,a)=>`shard(f, ${y(e.lines[0][0],e.lines[0][1],e.at)}, ${y(e.lines[1][0],e.lines[1][1],e.at)}, ${c(e.at)}, ${n(e.m)}, gSS${a}, gST${a}, b)`),T={id:"D10-fragmentation",cam:[2.55,1.53,4.08],target:[0,-.12,0],floor:-1.6,ring:1.9,accent:d(b.D10),poster:3,parts:[{name:"hermetic volume",view:{el:6,zoom:.72}},{name:"free planes",view:{az:-25,el:14,zoom:.9}},{name:"tilted planes",view:{az:48,el:4,zoom:.8}},{name:"sliding layers",view:{az:140,el:12,zoom:.85}},{name:"breaks",view:{az:-12,el:-2,zoom:.78}},{name:"pores",view:{az:-70,el:10,zoom:.82}},{name:"floating fragments",view:{az:15,el:12,zoom:.7}},{name:"stacked plates",view:{el:-10,zoom:.92}}],glsl:`
const vec3 BC = ${n(h.c)};   // the box's centre
const vec3 BH = ${n(h.h)};   // and its half-size

vec3 palette(int i) {
  if (i == 0) return vec3(.88, .86, 1.);    // hermetic volume
  if (i == 1) return vec3(.62, .9, 1.);     // free planes
  if (i == 2) return vec3(.8, .62, 1.);     // tilted planes
  if (i == 3) return vec3(.5, .7, 1.);      // sliding layers
  if (i == 4) return vec3(1., .56, .5);     // breaks
  if (i == 5) return vec3(.45, 1., .86);    // pores
  if (i == 6) return vec3(1., .8, .45);     // floating fragments
  return vec3(.48, .54, .7);                // stacked plates
}

float sdRect(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.)) + min(max(d.x, d.y), 0.); }
float sdFrame(vec3 p, vec3 b, float e) {
  p = abs(p) - b;
  vec3 q = abs(p + e) - e;
  return min(min(length(max(vec3(p.x, q.y, q.z), 0.)) + min(max(p.x, max(q.y, q.z)), 0.),
                 length(max(vec3(q.x, p.y, q.z), 0.)) + min(max(q.x, max(p.y, q.z)), 0.)),
             length(max(vec3(q.x, q.y, p.z), 0.)) + min(max(q.x, max(q.y, p.z)), 0.));
}
/** Outside a half-plane (n, c) by how much: c - n \xB7 q. */
float edge(vec3 l, vec2 q) { return l.z - dot(l.xy, q); }
/** The section: everything in front of the box's middle is removed. */
float cutS(vec3 p) { return p.z - .02; }
float cs;
vec2 cut(vec2 d) { return vec2(cutaway(d.x, cs), d.y); }
/** A group with bound bb is worth evaluating when it may come nearer than what is found so far; else its bound is kept. */
bool near(float bb, inout vec2 res) {
  if (bb < min(res.x, .05)) return true;
  res = U(res, vec2(bb, 0.));
  return false;
}
/** A sharp-edged plane in its own xy (normal z), half-size b, as part i: glass, and a lit rim seen through other glass. */
vec2 plane(vec3 q, vec2 b, float i) {
  float r = sdRect(q.xy, b);
  return cut(U(vec2(max(abs(r + .006) - .006, abs(q.z) - .01), 60. + i), vec2(SHELL(max(r, abs(q.z) - .006)), 80. + i)));
}
/** A shard of the front face: where both fracture lines hold (n \xB7 q >= c), carried away by e about its pivot c. */
vec2 shard(vec3 q, vec3 l1, vec3 l2, vec2 c, vec3 m, mat2 spin, mat2 tip, float e) {
  q -= m * e;
  q.xy -= c; q.xy *= spin; q.yz *= tip; q.xy += c;
  float poly = max(sdRect(q.xy, BH.xy), max(edge(l1, q.xy), edge(l2, q.xy)));
  return vec2(max(poly, abs(q.z) - .006), max(abs(poly + .006) - .006, abs(q.z) - .01));
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., -.1 - .3 * uApart, 0.), vec3(1.5, 1.05, 1.1) + .5 * uApart);
  if (bound > .25) return vec2(bound, 0.);
  cs = cutS(p);
  vec2 res = vec2(1e5, 0.);
  vec3 q = p - BC;
  float b;

  // 0 \xB7 The box: solid faces while no part has taken them (in the build), then a glass ghost with its edges drawn.
  b = built(0);
  if (b > 0.) {
    float y0 = -BH.y - .02, y1 = BH.y + .02;
    res = U(res, cut(vec2(rise(sdFrame(q, BH, .0075), 0, q.y, y0, y1), 60.)));
    res = U(res, cut(vec2(SHELL(rise(abs(sdBox(q, BH) + .004) - .004, 0, q.y, y0, y1)), 80.)));
    if (uBuild > 0.) {
      float f = 1e5;
      const float T = .014;
      if (built(1) <= 0.) {
        f = min(f, sdBox(q - vec3(0., BH.y - T, 0.), vec3(BH.x, T, BH.z)));
        f = min(f, sdBox(q + vec3(0., BH.y - T, 0.), vec3(BH.x, T, BH.z)));
        f = min(f, sdBox(q + vec3(BH.x - T, 0., 0.), vec3(T, BH.y, BH.z)));
      }
      if (built(2) <= 0.) f = min(f, sdBox(q - vec3(BH.x - T, 0., 0.), vec3(T, BH.y, BH.z)));
      if (built(3) <= 0.) f = min(f, sdBox(q + vec3(0., 0., BH.z - T), vec3(BH.x, BH.y, T)));
      if (built(4) <= 0.) f = min(f, sdBox(q - vec3(0., 0., BH.z - T), vec3(BH.x, BH.y, T)));
      res = U(res, cut(vec2(rise(f, 0, q.y, y0, y1), 20.)));
    }
  }

  // 1 \xB7 Roof, floor and one end leave the box, still square to it; each starts on its face.
  b = built(1);
  if (b > 0.) {
    res = U(res, plane((q - vec3(.24 * b, BH.y + .3 * b, -.07 * b) - apart(vec3(0., .38, 0.))).xzy, BH.xz, 1.));
    res = U(res, plane((q - vec3(-.28 * b, -BH.y - .19 * b, .1 * b) - apart(vec3(0., -.12, .3))).xzy, BH.xz, 1.));
    res = U(res, plane((q - vec3(-BH.x - .36 * b, .07 * b, .12 * b) - apart(vec3(-.42, 0., 0.))).zyx, BH.zy, 1.));
  }

  // 2 \xB7 The other end leaves as two planes, leaning off the vertical and turned: the right angles go.
  b = built(2);
  if (b > 0. && near(sdBox(q - apart(vec3(.45, 0., 0.)) - vec3(BH.x + .22 * b, 0., 0.), vec3(.3, BH.y + .07, BH.z + .14)), res)) {
${B.map((e,a)=>`    mat2 ty${a} = ${i(e.yaw)}, tt${a} = ${i(e.lean)};
    if (uBuild > 0.) { ty${a} = rot(${t(e.yaw)} * b); tt${a} = rot(${t(e.lean)} * b); }
    vec3 t${a} = q - apart(vec3(.45, 0., 0.)) - vec3(BH.x, 0., ${t(e.z)}) - ${n(e.o)} * b;
    t${a}.xz *= ty${a}; t${a}.xy *= tt${a};
    res = U(res, plane(t${a}.zyx, vec2(${t(e.w)}, BH.y), 2.));`).join(`
`)}
  }

  // 3 \xB7 The back face splits into three parallel layers that slide one across another, drifting slowly.
  b = built(3);
  vec3 t3 = q + vec3(0., 0., BH.z);
  if (b > 0. && near(sdBox(t3 - vec3(.03, .02, -.26 * b - .5 * uApart), vec3(.92, .42, .16 + .3 * uApart)), res)) {
    vec3 t = t3;
    vec2 w = vec2(sin(uTime * .5), cos(uTime * .5)) * .05;
${q.map(e=>`    res = U(res, plane(t - (${n(e.o)} + vec3(dot(w, ${c([Math.cos(e.phase),Math.sin(e.phase)])}), 0., 0.)) * b - apart(vec3(0., 0., ${t(e.apart)})), mix(BH.xy, ${c(e.h)}, b), 3.));`).join(`
`)}
  }

  // 4 \xB7 The front face breaks into three shards along two different lines, and they part.
  b = built(4);
  vec3 f = q - vec3(0., -.02, BH.z + .26 * b) - apart(vec3(0., 0., .45));
  if (b > 0. && near(sdBox(f, vec3(BH.x + .14, BH.y + .12, .13)), res)) {
${$.map((e,a)=>`    mat2 gSS${a} = ${i(e.spin)}, gST${a} = ${i(e.tip)};
    if (uBuild > 0.) { gSS${a} = rot(${t(e.spin)} * b); gST${a} = rot(${t(e.tip)} * b); }`).join(`
`)}
    vec2 s = ${x[0]};
${x.slice(1).map(e=>`    s = min(s, ${e});`).join(`
`)}
    res = U(res, cut(vec2(SHELL(s.x), 84.)));
    res = U(res, cut(vec2(s.y, 64.)));
  }

  // 5 \xB7 Streams of space pass through the opened box: gathered inside it, spreading out beyond its ends.
  b = built(5);
  vec3 t5 = q - apart(vec3(0., .1, 0.));
  float spread = 1. + 1.1 * smoothstep(.45, 1.25, abs(t5.x));
  if (b > 0. && near(max(length(t5.yz - vec2(.04, 0.)) - .26 * spread - .09, abs(t5.x) - 1.24) * .9, res)) {
    // Each wavers along x as sin(2.3x + a) in y and sin(1.6x + c) in z.
    vec2 w1 = vec2(sin(2.3 * t5.x), cos(2.3 * t5.x)) * .05, w2 = vec2(sin(1.6 * t5.x), cos(1.6 * t5.x)) * .06;
    vec2 e;
    float d = 1e5, k = 0., dk;
${z.map((e,a)=>`    e = t5.yz - ${c(e.o)} * spread - vec2(dot(w1, ${c([Math.cos(e.a),Math.sin(e.a)])}), dot(w2, ${c([Math.cos(e.c),Math.sin(e.c)])}));
    dk = dot(e, e); k = dk < d ? ${a}. : k; d = min(d, dk);`).join(`
`)}
    d = max(sqrt(d) * .8 - .006, abs(t5.x) - 1.22 * b);
    // Light flowing through, left to right.
    d = max(d, (abs(fract(t5.x * 3. - uTime * .45 + k * .37) - .5) - .36) / 3.);
    res = U(res, cut(vec2(d, 65.)));
  }

  // 6 \xB7 Small fragments float in the gaps, each held only by a thin pin; in the build they appear one by one.
  b = built(6);
  vec3 t6 = p - apart(vec3(0., .16, .14));
  if (b > 0. && near(sdBox(t6 - vec3(0., .2, 0.), vec3(.98, .62, .58)), res)) {
    float d = 1e5, pin = 1e5, s;
    vec3 t, u;
${f.map((e,a)=>`    s = max(clamp(b * ${f.length}. - ${a}., 0., 1.), 1e-3);
    t = t6 - ${n(e.c)}; u = t; u.xz *= ${i(e.a[0])}; u.xy *= ${i(e.a[1])};
    d = min(d, s > .002 ? sdBox(u / s, ${n(e.h)}) * s : 1e5);
    pin = min(pin, s > .002 ? sdCapsule(t, vec3(0.), ${n(e.pin.map((r,o)=>r-(e.c[o]??0)))} * s, .0035) : 1e5);`).join(`
`)}
    res = U(res, cut(vec2(d, 26.)));
    res = U(res, cut(vec2(pin, 66.)));
  }

  // 7 \xB7 Below, plates pile up like strata, each shifted and turned from the one beneath.
  b = built(7);
  vec3 t7 = p - apart(vec3(0., -.3, 0.));
  if (b > 0. && near(t7.y + .6, res)) {
    float d = 1e5, e = 1e5, poly, y;
    vec2 r;
${V.split(`
`).map(e=>`  ${e}`).join(`
`).replace(/q\./g,"t7.")}
    res = U(res, cut(vec2(rise(d, 7, t7.y, -1.02, -.64), 27.)));
    res = U(res, cut(vec2(rise(e, 7, t7.y, -1.02, -.64), 67.)));
  }
  return res;
}

float sceneDetail(vec3 p, float m) {
  // Fine strata in the plates' sides.
  if (m > 26.5 && m < 27.5) return sin(p.y * 260.) * .0006;
  return 0.;
}
`};export{T as scene};
