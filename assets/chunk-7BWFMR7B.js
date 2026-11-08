import{a as C}from"./chunk-WFBFTKL4.js";import{a as O}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var a=e=>e.toFixed(4),p=e=>`vec2(${a(e[0]??0)}, ${a(e[1]??0)})`,l=e=>`vec3(${a(e[0]??0)}, ${a(e[1]??0)}, ${a(e[2]??0)})`,q=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],V=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],$=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],v=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],S=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],g=e=>$(e,1/Math.hypot(...e));function G(e,t,n){let o=c=>{let[r,s,i]=c;return[r,s]=[r*Math.cos(n)-s*Math.sin(n),r*Math.sin(n)+s*Math.cos(n)],[s,i]=[s*Math.cos(t)-i*Math.sin(t),s*Math.sin(t)+i*Math.cos(t)],[r,i]=[r*Math.cos(e)+i*Math.sin(e),-r*Math.sin(e)+i*Math.cos(e)],[r,s,i]};return[o([1,0,0]),o([0,1,0]),o([0,0,1])]}var A=(e,t,n,o=0)=>{let[c,r,s]=G(t,n,o);return{o:e,x:c,y:r,z:s}};function H(e,t){let n=g(t),o=g(S([0,1,0],n));return{o:e,x:o,y:S(n,o),z:n}}var w=e=>`mat3(${l(e.x)}, ${l(e.y)}, ${l(e.z)})`,K=(e,t)=>{let n=V(t,e.o);return[v(n,e.x),v(n,e.y),v(n,e.z)]},h=[{f:A([-.52,.47,.04],.35,.85,.25),h:[.27,.075]},{f:A([-.3,.28,.16],-.5,.5,.7),h:[.13,.13]},{f:A([-.42,.41,-.14],.95,-.35,-.15),h:[.32,.04]}],U=.06,u=(e,t=0)=>[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n=0,o=0])=>q(q(q(e.f.o,$(e.f.x,n*e.h[0])),$(e.f.y,o*e.h[1])),$(e.f.z,t))),y=$(h.reduce((e,t)=>q(e,t.f.o),[0,0,0]),1/h.length);function J(e){let t=[...e].sort((r,s)=>r[0]-s[0]||r[1]-s[1]),n=(r,s,i)=>(s[0]-r[0])*(i[1]-r[1])-(s[1]-r[1])*(i[0]-r[0]),o=[];for(let r of t){for(;o.length>=2&&n(o[o.length-2],o[o.length-1],r)<=0;)o.pop();o.push(r)}let c=[];for(let r of[...t].reverse()){for(;c.length>=2&&n(c[c.length-2],c[c.length-1],r)<=0;)c.pop();c.push(r)}return[...o.slice(0,-1),...c.slice(0,-1)]}function Q(e,t){let n=J(e),o=n.reduce((s,i)=>s+i[0],0)/n.length,c=n.reduce((s,i)=>s+i[1],0)/n.length;return n.map((s,i)=>{let f=n[(i+1)%n.length]??s,L=Math.hypot(f[0]-s[0],f[1]-s[1])||1,m=[-(f[1]-s[1])/L,(f[0]-s[0])/L],z=m[0]*s[0]+m[1]*s[1];return m[0]*o+m[1]*c<z&&(m=[-m[0],-m[1]],z=-z),`${a(z)} - dot(${p(m)}, ${t})`}).reduce((s,i)=>s?`max(${s}, ${i})`:i,"")}var x=(e,t)=>e.map(n=>`abs(${Q(n,t)})`).reduce((n,o)=>n?`min(${n}, ${o})`:o,""),d={o:[-.45,-.15,.02],h:[.56,.46]},b={o:[-.45,.37,-.55],h:[.56,.42]},W=h.map(e=>u(e).map(t=>[t[0]-d.o[0],t[2]-d.o[2]])),X=h.map(e=>u(e).map(t=>[t[0]-b.o[0],t[1]-b.o[1]])),Z=[u(h[0])[0],u(h[2])[2]],ee=[u(h[1])[1],u(h[0])[3]],F=H([.4,.48,-.22],[.3,.42,.86]),k=[.36,.3],P=g([1,1,1]),D=g(S([0,1,0],P)),Y=S(P,D),I=e=>[v(V(e,y),D)*.72,v(V(e,y),Y)*.72],B=[];for(let e of h){let t=v(e.f.z,P)>0?1:-1;B.push([...u(e,-U/2),...u(e,U/2)].map(I)),B.push(u(e,t*U/2).map(I))}var j=e=>{let t=[v(e,D),v(e,Y)],n=Math.hypot(t[0],t[1]);return[-t[1]/n,t[0]/n]},E=[j([1,0,0]),j([0,1,0]),j([0,0,1])],te=[[-1.3,.55,.42],[-.72,1.22,-.06],[-.92,-.08,.86]].map(e=>{let t=H(e,V(y,e)),n=Math.hypot(...V(y,e)),o=.42*n,c=[.15,.11],r=h.map(s=>u(s).map(i=>{let f=K(t,i);return[f[0]*o/f[2],f[1]*o/f[2]]}));return{f:t,lf:o,fh:c,len:.86*n,view:r}}),N=A([.32,-.14,.56],.3,-1),R=[.48,.34],ne=W.map(e=>e.map(([t,n])=>[t*.75,-n*.75])),se=[.78,.88,-.25],_=[.74,-.44,-.3],T=[0,1,2,3].map(e=>({a:-.18+.12*e,o:[.03*e-.045,.055*e,.025*e-.04],h:[.4-.015*e,.3-.012*e],line:[.55,1.6,2.5,0][e]??0})),M=e=>`mat2(${[Math.cos(e),-Math.sin(e),Math.sin(e),Math.cos(e)].map(a).join(", ")})`,ae={id:"D10-painting",cam:[1.53,1.97,4.36],target:[-.05,.2,.02],floor:-1.6,ring:1.9,accent:O(C.D10),poster:2,parts:[{name:"flat planes",view:{az:-20,el:2,zoom:.72}},{name:"plan and elevation",view:{az:-35,el:14,zoom:.85}},{name:"isometric projection",view:{az:10,el:6,zoom:.8}},{name:"multiple viewpoints",view:{az:-50,el:6,zoom:.95}},{name:"warped space",view:{az:10,el:26,zoom:.8}},{name:"explosion",view:{az:20,el:-2,zoom:.82}},{name:"layered drawings",view:{az:30,el:24,zoom:.82}},{name:"lines into volumes",view:{az:50,el:6,zoom:.8}}],glsl:`
vec3 palette(int i) {
  if (i == 0) return vec3(1., .5, .42);     // flat planes: planes of colour
  if (i == 1) return vec3(.62, .86, 1.);    // plan and elevation
  if (i == 2) return vec3(.78, .66, 1.);    // isometric projection
  if (i == 3) return vec3(.45, 1., .86);    // multiple viewpoints
  if (i == 4) return vec3(.55, .7, 1.);     // warped space
  if (i == 5) return vec3(1., .74, .42);    // explosion
  if (i == 6) return vec3(.7, .8, .95);     // layered drawings
  return vec3(.92, .9, 1.);                 // lines into volumes
}

float sdRect(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.)) + min(max(d.x, d.y), 0.); }
/** The section: everything right of the layers' middle is removed. */
float cutS(vec3 p) { return p.x - .84; }
float cs;
vec2 cut(vec2 d) { return vec2(cutaway(d.x, cs), d.y); }
/** A drawing sheet in its own xy (normal z), half-size b, as part i: glass, its rim lit, and where ink is true, drawn. */
vec2 sheet(vec3 q, vec2 b, float i, bool ink) {
  float r = sdRect(q.xy, b);
  vec2 rim = vec2(max(abs(r + .006) - .006, abs(q.z) - .009), 60. + i);
  return cut(U(rim, vec2(SHELL(max(r, abs(q.z) - .005)), ink ? 60. + i : 80. + i)));
}
/** A group with bound bb is worth evaluating when it may come nearer than what is found so far; else its bound is kept. */
bool near(float bb, inout vec2 res) {
  if (bb < min(res.x, .05)) return true;
  res = U(res, vec2(bb, 0.));
  return false;
}
/** A line pattern: parallel lines of spacing s across the direction n, w wide. */
bool lines(vec2 q, vec2 n, float s, float w) { return abs(fract(dot(q, n) / s + .5) - .5) * s < w; }

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(-.15, .45 - .25 * uApart, .12), vec3(1.6, .98, 1.) + .45 * uApart);
  if (bound > .25) return vec2(bound, 0.);
  cs = cutS(p);
  vec2 res = vec2(1e5, 0.);
  float b;
  vec3 q;

  // 0 \xB7 Three planes of colour, floating with no up or down.
  b = built(0);
  q = p - apart(vec3(0., .25, .1));
  if (b > 0. && near(length(q - ${l(y)}) - .55, res)) {
${h.map(e=>`    q = (p - apart(vec3(0., .25, .1)) - ${l(e.f.o)}) * ${w(e.f)};
    {
      float r = sdRect(q.xy, ${p(e.h)});
      float y = (p - apart(vec3(0., .25, .1))).y;
      res = U(res, cut(vec2(rise(max(r, abs(q.z) - .011), 0, y, .1, .85), 60.)));
    }`).join(`
`)}
  }

  // 1 \xB7 Plan and elevation, each with the planes' true orthographic projection, and projector lines.
  b = built(1);
  if (b > 0.) {
    q = p - ${l(d.o)} - apart(vec3(0., -.3, 0.));
    bool ink = false;
    if (abs(q.y) < .02) ink = min(${x(W,"q.xz")}, 1.) < .006;
    vec2 e = sheet(q.xzy, ${p(d.h)}, 1., ink);
    res = U(res, vec2(rise(e.x, 1, q.z, -.47, .47), e.y));
    q = p - ${l(b.o)} - apart(vec3(0., 0., -.35));
    ink = false;
    if (abs(q.z) < .02) ink = min(${x(X,"q.xy")}, 1.) < .006;
    e = sheet(q, ${p(b.h)}, 1., ink);
    res = U(res, vec2(rise(e.x, 1, q.y, -.43, .43), e.y));
    // Projector lines, dashed: down to the plan, back to the elevation.
    float pl = 1e5;
${Z.map(e=>`    pl = min(pl, max(length(p.xz - ${p([e[0],e[2]])}) - .0028, abs(p.y - ${a((e[1]+d.o[1])/2)}) - ${a((e[1]-d.o[1])/2)}));`).join(`
`)}
${ee.map(e=>`    pl = min(pl, max(length(p.xy - ${p([e[0],e[1]])}) - .0028, abs(p.z - ${a((e[2]+b.o[2])/2)}) - ${a((e[2]-b.o[2])/2)}));`).join(`
`)}
    pl = max(pl, (abs(fract((p.x + p.y + p.z) * 14.) - .5) - .25) / 14.);
    res = U(res, cut(vec2(uApart > .01 || b < 1. ? 1e5 : pl, 61.)));
  }

  // 2 \xB7 The drawing tilts into isometric projection: a grid, and the planes drawn as prisms.
  b = built(2);
  q = (p - ${l(F.o)} - apart(vec3(.25, .2, 0.))) * ${w(F)};
  if (b > 0. && near(sdBox(q, vec3(${a(k[0]+.05)}, ${a(k[1]+.05)}, .3)), res)) {
    if (uBuild > 0.) q.yz *= rot((1. - b) * 1.1);
    bool ink = false;
    if (abs(q.z) < .02) {
      vec2 u = q.xy;
      ink = min(${x(B,"u")}, 1.) < .0055;
      ink = ink || lines(u, ${p(E[0])}, .06, .0016) || lines(u, ${p(E[1])}, .06, .0016) || lines(u, ${p(E[2])}, .06, .0016);
    }
    res = U(res, sheet(q, ${p(k)}, 2., ink));
  }

  // 3 \xB7 Three eyes, each looking through its own picture frame, which shows the planes from its side.
${te.map((e,t)=>`  b = built(3);
  q = (p - ${l(e.f.o)} - apart(${l($(g(V(e.f.o,y)),.35))})) * ${w(e.f)};
  if (b > 0. && near(sdCapsule(q, vec3(0.), vec3(0., 0., ${a(e.len)}), ${a(.36)}), res)) {
    float len = ${a(e.len)} * b;
    res = U(res, cut(vec2(length(q) - .03, 63.)));
    vec3 s = vec3(abs(q.xy), q.z);
    float d = sdCapsule(s, vec3(0.), vec3(${a(e.fh[0]/e.lf)}, ${a(e.fh[1]/e.lf)}, 1.) * len, .0025);
    res = U(res, cut(vec2(max(d, (abs(fract(q.z * 12. - uTime * .4) - .5) - .3) / 12.), 63.)));
    vec3 f = q - vec3(0., 0., ${a(e.lf)});
    bool ink = false;
    if (abs(f.z) < .02) ink = min(${x(e.view,"f.xy")}, 1.) < .005;
    if (b > .45) res = U(res, sheet(f, ${p(e.fh)}, 3., ink));
  }`).join(`
`)}

  // 4 \xB7 A sheet whose space warps: its grid and the planes drawn on it bend without breaking.
  b = built(4);
  q = (p - ${l(N.o)} - apart(vec3(.1, -.1, .35))) * ${w(N)};
  if (b > 0. && near(sdBox(q, vec3(${a(R[0]+.05)}, ${a(R[1]+.05)}, .2)), res)) {
    float s1 = sin(2.6 * q.x + .5), s2 = sin(2.2 * q.y - .3);
    float a = .085 * b;
    float w = a * (.7 * s1 + .5 * s2);
    vec2 gr = a * vec2(1.82 * cos(2.6 * q.x + .5), 1.1 * cos(2.2 * q.y - .3));
    vec3 t = vec3(q.xy, (q.z - w) / sqrt(1. + dot(gr, gr)));
    bool ink = false;
    if (abs(t.z) < .02) ink = min(${x(ne,"t.xy")}, 1.) < .006 || lines(t.xy, vec2(1., 0.), .08, .0018) || lines(t.xy, vec2(0., 1.), .08, .0018);
    res = U(res, sheet(t, ${p(R)}, 4., ink));
  }

  // 5 \xB7 The composition explodes: fragments fly out from one centre, each trailing its path.
  b = built(5);
  q = p - ${l(se)} - apart(vec3(.2, .35, -.1));
  if (b > 0. && near(length(q) - .55, res)) {
    float id = floor(atan(q.z, q.x) / (TAU / 8.) + .5);
    vec3 r = polarRep(q, 8.);
    float h1 = hash11(id * 7.31 + 2.), h2 = hash11(id * 3.17 + 5.);
    float rad = (.08 + .26 * b) + .07 * h2;
    vec3 c = vec3(rad, (h1 - .5) * .36 * b, 0.);
    vec3 s = r - c;
    s.xy *= ${M(.5)}; s.yz *= ${M(.7)};
    res = U(res, cut(vec2(sdBox(s, vec3(.065, .038, .006)), 25.)));
    float tr = sdCapsule(r, vec3(.04, 0., 0.), c - normalize(c) * .07, .0022);
    res = U(res, cut(vec2(max(tr, (abs(fract(length(r.xy) * 10. - uTime * .6) - .5) - .25) / 10.), 65.)));
    res = U(res, cut(vec2(length(q) - .022, 65.)));
  }

  // 6 \xB7 New drawings settle over the old ones, layer upon layer, each with its own lines.
  b = built(6);
  q = p - ${l(_)} - apart(vec3(.1, -.3, 0.));
  if (b > 0. && near(sdBox(q - vec3(0., .25, 0.), vec3(.5, .36, .42)), res)) {
${T.map((e,t)=>`    {
      float s = clamp(b * 4. - ${t}., 0., 1.);
      vec3 t = q - ${l(e.o)} - vec3(0., (1. - s) * .35 + ${a(.07*t)} * uApart, 0.);
      t.xz *= ${M(e.a)};
      bool ink = false;
      if (abs(t.y) < .02) ink = ${t===3?"abs(fract(t.z / .1 + .5) - .5) * .1 < .004 && abs(t.z) < .25 && abs(t.x) < .32":`lines(t.xz, ${p([Math.cos(e.line),Math.sin(e.line)])}, .07, .0022)`};
      if (s > 0.) res = U(res, sheet(t.xzy, ${p(e.h)}, 6., ink));
    }`).join(`
`)}
  }

  // 7 \xB7 On the top layer the drawn lines rise into volumes, each taller than the last.
  b = built(7);
  q = p - ${l(q(_,T[3].o))} - apart(vec3(.1, .15, 0.));
  q.xz *= ${M(T[3].a)};
  if (b > 0. && near(sdBox(q - vec3(0., .2, 0.), vec3(.4, .24, .3)), res)) {
    float j = clamp(floor(q.z / .1 + .5), -2., 2.);
    float h = (.08 + .075 * (j + 2.)) * b;
    float l = .3 - .03 * (j + 2.);
    vec3 t = q - vec3(.02 * (j + 2.) - .04, .006 + h * .5, j * .1);
    float d = sdBox(t, vec3(l, h * .5, .008));
    res = U(res, cut(vec2(d, 27.)));
    res = U(res, cut(vec2(max(d - .002, abs(t.y - h * .5) - .004), 67.)));
  }
  return res;
}
`};export{ae as scene};
