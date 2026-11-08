import{a as K}from"./chunk-4QM5HSGV.js";import{a as G}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var l=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],d=(t,e)=>[t[0]+e[0],t[1]+e[1],t[2]+e[2]],f=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],i=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],y=t=>Math.hypot(t[0],t[1],t[2]),p=t=>i(t,1/y(t)),k=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],L=(t,e,n)=>d(d(i(t,Math.cos(n)),i(k(e,t),Math.sin(n))),i(e,l(e,t)*(1-Math.cos(n)))),m=(t,e)=>[t[0][e],t[1][e],t[2][e]],at=(t,e)=>[l(t[0],e),l(t[1],e),l(t[2],e)],gt=(t,e)=>[[l(t[0],m(e,0)),l(t[0],m(e,1)),l(t[0],m(e,2))],[l(t[1],m(e,0)),l(t[1],m(e,1)),l(t[1],m(e,2))],[l(t[2],m(e,0)),l(t[2],m(e,1)),l(t[2],m(e,2))]],vt=t=>l(t[0],k(t[1],t[2])),D=t=>[[1-2*t[0]*t[0],-2*t[0]*t[1],-2*t[0]*t[2]],[-2*t[1]*t[0],1-2*t[1]*t[1],-2*t[1]*t[2]],[-2*t[2]*t[0],-2*t[2]*t[1],1-2*t[2]*t[2]]];function Vt(t,e){let n=k(t,e),s=y(n);if(s<1e-9)return[[1,0,0],[0,1,0],[0,0,1]];let o=i(n,1/s),r=Math.atan2(s,l(t,e)),a=L([1,0,0],o,r),c=L([0,1,0],o,r),h=L([0,0,1],o,r);return[[a[0],c[0],h[0]],[a[1],c[1],h[1]],[a[2],c[2],h[2]]]}var _=(t,e,n)=>{let s=f(n,e),o=Math.min(1,Math.max(0,l(f(t,e),s)/l(s,s)));return{d:y(f(f(t,e),i(s,o))),t:o}},A=Math.cos(Math.PI/5),q=Math.sqrt(.75-A*A),St=[-.5,-A,q],v=p([q,0,.5]),T=p([0,q,A]),B=[0,0,1],x=[[[1,0,0],[0,1,0],[0,0,1]]];{let t=s=>s.flat().map(o=>Math.round(o*1e4)+0).join(","),e=new Set([t(x[0])]),n=[D([1,0,0]),D([0,1,0]),D(St)];for(let s=0;s<x.length;s++)for(let o of n){let r=gt(o,x[s]),a=t(r);e.has(a)||(e.add(a),x.push(r))}}var yt=x.filter(t=>vt(t)>0),$=[];for(let t of x){let e=at(t,v);$.some(n=>y(f(n,e))<1e-6)||$.push(e)}var H=Math.atan(2),rt=[];for(let t=0;t<12;t++)for(let e=t+1;e<12;e++)for(let n=e+1;n<12;n++){let s=(o,r)=>Math.abs(Math.acos(Math.min(1,l($[o],$[r])))-H)<1e-4;s(t,e)&&s(e,n)&&s(t,n)&&rt.push([t,e,n])}var Ut=36*Math.PI/180,wt=1.32,j=[],Ct=t=>{let e=j.findIndex(n=>y(f(n,t))<1e-6);return e<0&&(e=j.push(t)-1),e},ct=new Set;for(let[t,e,n]of rt){let s=new Map;for(let o=0;o<=3;o++)for(let r=0;r<=3-o;r++)s.set(`${o},${r}`,Ct(p(d(d(i($[t],o),i($[e],r)),i($[n],3-o-r)))));for(let o=0;o<=3;o++)for(let r=0;r<=3-o;r++)for(let[a,c]of[[1,0],[0,1],[-1,1]]){let h=s.get(`${o},${r}`),V=s.get(`${o+a},${r+c}`);V!==void 0&&ct.add(h<V?`${h},${V}`:`${V},${h}`)}}var u=[...ct].map(t=>{let[e,n]=t.split(",").map(Number),s=j[e],o=j[n],r=p(d(s,o)),a=i(d(s,o),.5),c=L(p(f(o,s)),r,Ut),h=y(f(o,s))/2*wt;return{a:f(a,i(c,h)),b:d(a,i(c,h)),kind:0,ta:[0,0,0],tb:[0,0,0]}});{let t=a=>a.map(c=>Math.round(c*1e4)+0).join(","),e=a=>p(d(a.a,a.b)),n=new Map(u.map((a,c)=>[t(e(a)),c])),s=u.map((a,c)=>c),o=a=>s[a]===a?a:s[a]=o(s[a]);u.forEach((a,c)=>{for(let h of yt){let V=n.get(t(at(h,e(a))));V!==void 0&&(s[o(c)]=o(V))}});let r=[...new Set(u.map((a,c)=>o(c)))];u.forEach((a,c)=>a.kind=r.indexOf(o(c))+1)}u.forEach((t,e)=>{for(let n of[t.a,t.b]){let s={d:1e9,j:-1,t:0};u.forEach((r,a)=>{if(a===e)return;let c=_(n,r.a,r.b);c.d<s.d&&(s={d:c.d,j:a,t:c.t})});let o=u[s.j];s.t<.5?o.ta=n:o.tb=n}});var w=.8,F=[.34,-.12,-.12],it=[1.319,1.601,5.69],P=Vt(p(f(it,F)),v),J=t=>d(F,i([l(m(P,0),t),l(m(P,1),t),l(m(P,2),t)],w)),S=u.filter(t=>l(p(d(t.a,t.b)),v)>.95).map(t=>({s:t,a:J(t.a),b:J(t.b)})).sort((t,e)=>e.a[1]+e.b[1]-(t.a[1]+t.b[1]))[0],$t=[v,T,B],xt=t=>{let e=p(t),n=l(e,v),s=l(e,T),o=l(e,B);return n>=s&&n>=o?0:s>=o?1:2},lt=[];{let t=7,e=()=>(t=t*16807%2147483647)/2147483647;for(let n=0;n<4e3;n++){let s=e(),o=e();s+o>1&&([s,o]=[1-s,1-o]),lt.push(i(p(d(d(i(v,s),i(T,o)),i(B,1-s-o))),.962+.068*e()))}}function E(t,e,n){let s=p(d(d(v,T),B)),o=t.filter(a=>e(s,a)<.75),r=$t.map(()=>new Set);for(let a of lt){let c=o.map(N=>e(a,N)),h=Math.min(...c),V=r[xt(a)];o.forEach((N,bt)=>{c[bt]<=h+n&&V.add(N)})}return r.map(a=>[...a])}var M=t=>[-t[0],t[1],t[2]],Q=(t,e)=>_(t,e.a,e.b).d,Y=(t,e)=>_(t,e[0],e[1]).d,tt=u.flatMap(t=>[[t.ta,t.a],[t.ta,d(t.a,i(f(t.b,t.a),.45))],[t.tb,t.b],[t.tb,d(t.a,i(f(t.b,t.a),.55))]]),dt=[...E(u,Q,.002),...E(u.map(t=>({a:M(t.a),b:M(t.b),kind:t.kind,ta:M(t.ta),tb:M(t.tb)})),Q,.002)],ft=[...E(tt,Y,.0015),...E(tt.map(([t,e])=>[M(t),M(e)]),Y,.0015)],C=[-1.18,-.965,.46],pt=.95,et=.36,ot=.27,R=[0,1,2].map(t=>d(C,[et*Math.cos(Math.PI*(100+120*t)/180),0,et*Math.sin(Math.PI*(100+120*t)/180)])),z=[0,1,2].map(t=>d(C,[ot*Math.cos(Math.PI*(250+120*t)/180),pt,ot*Math.sin(Math.PI*(250+120*t)/180)])),g=t=>t.toFixed(5),b=t=>`vec3(${t.map(g).join(", ")})`,U=(t,e)=>`const vec3 ${t}[${e.length}] = vec3[${e.length}](${e.map(b).join(", ")});`;var Mt=t=>[...m(t,0),...m(t,1),...m(t,2)],O=[9,9,9],W=Math.max(...dt.map(t=>t.length)),X=Math.max(...ft.map(t=>t.length)),st=dt.flatMap(t=>[...t,...Array(W-t.length).fill({a:O,b:[9,9,9.1],kind:1,ta:O,tb:O})]),nt=ft.flatMap(t=>[...t,...Array(X-t.length).fill([O,[9,9,9.1]])]),I=(t,e)=>`const vec4 ${t}[${e.length}] = vec4[${e.length}](${e.map(([n,s])=>`vec4(${n.map(g).join(", ")}, ${s.toFixed(4)})`).join(", ")});`,Z=p(f(S.b,S.a)),mt=p(k(Z,Math.abs(Z[1])<.9?[0,1,0]:[1,0,0])),Tt=k(Z,mt),ht=(t,e,n)=>d(d(S.a,i(f(S.b,S.a),t)),d(i(mt,n*Math.cos(e)),i(Tt,n*Math.sin(e)))),ut=.0115,kt=[0,1,2].map(t=>ht(.2,2*Math.PI*t/3,ut)),Rt=[0,1,2].map(t=>ht(.8,2*Math.PI*t/3+150*Math.PI/180,ut)),zt=p(f(i(d(S.a,S.b),.5),F)),Lt={id:"D07-tensegrity",cam:it,target:[-.1,-.08,0],floor:-1.6,ring:1.85,accent:G(K.D07),poster:2,parts:[{name:"struts",view:{az:-48,el:-2,zoom:.6}},{name:"tension triangle",view:{az:-48,el:6,zoom:.6}},{name:"tension ties",view:{az:-48,el:-2,zoom:.6}},{name:"three-strut unit",view:{az:-40,el:4,zoom:.68}},{name:"booms",view:{az:12,el:2,zoom:.72}},{name:"fastenings",view:{az:12,el:2,zoom:.55}},{name:"colour code",view:{az:12,el:2,zoom:.5}},{name:"tension network",view:{az:12,el:2,zoom:.72}},{name:"tensegrity sphere",view:{az:10,el:4,zoom:.84}},{name:"compression column",view:{az:6,el:2,zoom:.36}}],glsl:`
const vec3 NC = vec3(${g(-.5)}, ${g(-A)}, ${g(q)});
const vec3 FN = ${b(T)};
const vec3 CS = ${b(F)};            // the sphere's centre
const float RS = ${g(w)};
const mat3 ROTS = mat3(${Mt(P).map(g).join(", ")});   // world \u2192 fold frame
const float SRS = .0045;              // the sphere's struts (they pass at least .0109 apart)
const float R8 = RS * .955;           // the globe with the icosahedron's edges, divided into six
const vec3 CV = ${b(v)};
const vec3 EN = ${b(p(k(v,B)))};   // the normal of the great circle through VX and Mid
${I("SPA",st.map(t=>[i(t.a,w),y(f(t.b,t.a))*w]))}   // a strut's start, its length
${I("SPU",st.map(t=>[p(f(t.b,t.a)),t.kind]))}   // its direction, its kind
${I("LPA",nt.map(([t,e])=>{let n=y(f(e,t))*w;return[i(t,w),n>1e-6?1/(n*n):0]}))}   // a sling segment's tip, 1/length\xB2
${U("LPD",nt.map(([t,e])=>i(f(e,t),w)))}
/** The list to read for a folded point: parity, then the cell (the nearest of the domain's three corners). */
int cellOf(vec3 f, float par) {
  float a = dot(f, ${b(v)}), b = dot(f, ${b(T)}), c = f.z;
  return (par > 0. ? 0 : 3) + (a >= b && a >= c ? 0 : b >= c ? 1 : 2);
}
const vec3 CA = ${b(S.a)};    // the boom made as a compression column
const vec3 CB = ${b(S.b)};
const vec3 COUT = ${b(zt)};
${U("CLB",kt)}
${U("CLT",Rt)}
${U("UBV",R)}
${U("UTV",z)}
${U("UOS",[0,1,2].map(t=>p([(R[t][0]+z[t][0])/2-C[0],0,(R[t][2]+z[t][2])/2-C[2]])))}   // the struts' way out, taken apart
${U("UOT",[0,1,2].map(t=>p([(R[t][0]+z[(t+2)%3][0])/2-C[0],0,(R[t][2]+z[(t+2)%3][2])/2-C[2]])))}   // the ties'
const vec3 UB = ${b(C)};
const float UH = ${g(pt)};

vec3 palette(int i) {
  if (i == 0) return vec3(1., .80, .50);    // struts: compression
  if (i == 1) return vec3(.45, .95, 1.);    // tension triangle
  if (i == 2) return vec3(.55, 1., .80);    // tension ties
  if (i == 3) return vec3(.80, .86, 1.);    // three-strut unit
  if (i == 4) return vec3(1., .86, .62);    // booms
  if (i == 5) return vec3(1., .97, .90);    // fastenings
  if (i == 6) return vec3(1., .45, .70);    // colour code
  if (i == 7) return vec3(.40, .92, 1.);    // tension network
  if (i == 8) return vec3(.62, .80, 1.);    // tensegrity sphere
  return vec3(1., .66, .36);                // compression column
}

float sdBox2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }

/** The icosahedral fold, also counting the mirrors used (par -1 for an odd number). */
vec3 foldP(vec3 p, out float par) {
  par = 1.;
  for (int i = 0; i < 5; i++) {
    par *= (p.x < 0. ? -1. : 1.) * (p.y < 0. ? -1. : 1.);
    p.xy = abs(p.xy);
    float t = min(0., dot(p, NC));
    par *= t < 0. ? -1. : 1.;
    p -= 2. * t * NC;
  }
  return p;
}

/** A thin rod from a to b. */
float rod(vec3 p, vec3 a, vec3 b, float r) { vec3 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.); return length(pa - ba * h) - r; }

/** The section: the side toward the viewer of the plane through the unit's and the sphere's centres. */
float cutS(vec3 p) { return dot(p.xz - CS.xz, vec2(.3313, .9435)); }

// The sphere's layers share one fold; taken apart, each is evaluated at s times its size: q = ROTS (p - CS) / s.
struct SF { vec3 q; float r; vec3 f; float par; };
SF sfold(vec3 p, float s) {
  SF o;
  o.q = ROTS * (p - CS) / s;
  o.r = length(o.q);
  o.f = foldP(o.q, o.par);
  return o;
}
/** From the top of the sphere down, to the share g (a distance bound). */
float fromTop(float d, float g, vec3 p) {
  return g <= 0. ? 1e5 : g >= 1. ? d : max(d, ((RS - p.y + CS.y) / (2. * RS) - g) * .6);
}

/** Booms near a folded point: the distance to the nearest strut (x) and to the colour bands on it (y). */
vec2 boomsAt(vec3 f, int cell) {
  float db = 1e5, t1 = 0., r1 = 0., L1 = 1., k1 = 1.;
  int base = cell * ${W};
  for (int i = ZERO; i < ${W}; i++) {   // ZERO: not unrolled (short compiles)
    vec4 A = SPA[base + i], W = SPU[base + i];
    vec3 pa = f - A.xyz;
    float t = dot(pa, W.xyz);
    float rr = sqrt(max(dot(pa, pa) - t * t, 0.));
    float d = length(vec2(rr, t - clamp(t, 0., A.w))) - SRS;
    bool nr = d < db;
    db = nr ? d : db; t1 = nr ? t : t1; r1 = nr ? rr : r1; L1 = nr ? A.w : L1; k1 = nr ? W.w : k1;
  }
  float e = min(t1, L1 - t1);
  float j = clamp(floor((e - .022) / .0105 + .5), 0., k1 - 1.);
  return vec2(db, length(vec2(r1 - SRS - .0006, e - .022 - j * .0105)) - .0019);
}
/** Slings near a folded point: the distance to the nearest sling's axis (x) and to the nearest tip it holds (y). */
vec2 slingsAt(vec3 f, int cell) {
  float dn = 1e5, df = 1e5;
  int base = cell * ${X};
  for (int i = ZERO; i < ${X}; i++) {
    vec4 A = LPA[base + i];
    vec3 pa = f - A.xyz, D = LPD[base + i];
    dn = min(dn, length(pa - D * clamp(dot(pa, D) * A.w, 0., 1.)));
    df = min(df, length(pa));
  }
  return vec2(dn, df);
}

vec2 sphere(vec3 p, float cs) {
  float ap = uApart;
  float r0 = length(p - CS);
  float bnd = r0 - RS * (1.05 + .24 * ap) - .45 * ap;
  if (bnd > .1) return vec2(bnd, 0.);
  float g4 = built(4), g5 = built(5), g6 = built(6), g7 = built(7), g8 = built(8), g9 = built(9);
  vec2 res = vec2(1e5, 0.);
  SF o;
  // 4 \xB7 Booms: each strut a rod (built: from the top of the sphere down). 6 \xB7 Colour code: k bands at each end of a
  // boom of kind k (1 to 5). Whole, one fold also serves 5 and 7.
  float dr = abs(r0 - .9983 * RS);
  bool have = false;
  if (dr < .027 * RS) {
    o = sfold(p, 1.);
    have = true;
    int cell = cellOf(o.f, o.par);
    vec2 bm = boomsAt(o.f, cell);
    float db = max(bm.x, -rod(p, mix(CA, CB, .17), mix(CA, CB, .83), .0062));   // the column's boom, hollowed
    if (g4 > 0.) res = U(res, vec2(cutaway(fromTop(db, g4, p), cs), 24.));
    if (g6 > 0.) res = U(res, vec2(cutaway(fromTop(bm.y, g6, p), cs), 66.));
    if (ap <= 0. && (g5 > 0. || g7 > 0.)) {
      // 5 \xB7 Fastenings: knobs where each boom's tip is fastened into the next boom's sling. 7 \xB7 Tension network: the
      // slings, one continuous net (built: closing from the top down); each lies within .053 RS of a boom's axis, so far
      // from the struts a bound serves.
      if (bm.x > .052 * RS) res = U(res, vec2(bm.x - .05 * RS, 0.));
      else {
        vec2 sl = slingsAt(o.f, cell);
        if (g5 > 0.) res = U(res, vec2(cutaway(fromTop(sl.y - .0075, g5, p), cs), 25.));
        if (g7 > 0.) res = U(res, vec2(cutaway(fromTop(sl.x - .0024, g7, p), cs), 67.));
      }
    }
  } else res = U(res, vec2(dr - .0217 * RS, 0.));
  // Taken apart: the fastenings move out a little, the network further.
  if (ap > 0.) {
    for (int layer = 0; layer < 2; layer++) {
      float sc = 1. + (layer == 0 ? .1 : .22) * ap;
      float g = layer == 0 ? g5 : g7;
      dr = abs(r0 / sc - .9983 * RS);
      if (g <= 0.) continue;
      if (dr > .027 * RS) { res = U(res, vec2((dr - .0217 * RS) * sc, 0.)); continue; }
      o = sfold(p, sc);
      vec2 sl = slingsAt(o.f, cellOf(o.f, o.par));
      if (layer == 0) res = U(res, vec2(cutaway(fromTop((sl.y - .0075) * sc, g, p), cs), 25.));
      else res = U(res, vec2(cutaway(fromTop((sl.x - .0024) * sc, g, p), cs), 67.));
    }
  }
  // 8 \xB7 The tensegrity sphere: the icosahedron it is based on, its edges drawn on a globe inside the booms (clear of
  // them by 2% of the radius), each edge divided into six (the six-frequency subdivision); the globe also stops
  // the eye at the near side of the net (shrinks, taken apart; built: growing from the centre).
  if (g8 > 0.) {
    float sc = 1. - .32 * ap;
    float r8 = r0 / sc;
    dr = r8 - R8;
    if (dr < .022) {
      if (!have || ap > 0.) o = sfold(p, sc);
      float across = abs(dot(o.f, EN));                              // to the edge VX\u2013Mid's great circle
      float phi = acos(clamp(dot(o.f / o.r, CV), -1., 1.));          // along it from the vertex
      float k = clamp(floor(phi / ${g(H/6)} + .5), 1., 3.);
      float d = length(vec2(o.r - R8, across)) - .0026;
      d = min(d, sdBox(vec3((phi - k * ${g(H/6)}) * R8, across, o.r - R8), vec3(.0026, .017, .0026)));
      float grow = g8 >= 1. ? -1. : r0 - R8 * sc * g8 - .01;
      res = U(res, vec2(cutaway(max(d * sc, grow), cs), 68.));
      res = U(res, vec2(cutaway(max((o.r - R8 + .0012) * sc, grow), cs), 28.));
    } else res = U(res, vec2((dr - .018) * sc, 0.));
  }
  // 9 \xB7 The compression column: one boom's middle made as a small three-strut prism, its struts not touching, held by
  // two small tension triangles and three ties (slides out of its boom when taken apart; built: grows along the boom).
  if (g9 > 0.) {
    vec3 c = p - COUT * (.42 * ap);
    float bc = rod(c, CA, CB, .05);
    if (bc < .03) {
      float d = 1e5, t = 1e5;
      for (int i = 0; i < 3; i++) {
        int j = (i + 2) % 3, k = (i + 1) % 3;
        d = min(d, rod(c, CLB[i], CLT[i], .0021));
        t = min(t, min(rod(c, CLB[i], CLB[k], .0009), rod(c, CLT[i], CLT[k], .0009)));
        t = min(t, rod(c, CLB[i], CLT[j], .0009));
      }
      float along = dot(c - CA, CB - CA) / dot(CB - CA, CB - CA);
      float grow = g9 >= 1. ? -1. : (along - .2 - .6 * g9) * .3;
      res = U(res, vec2(cutaway(max(d, grow), cs), 29.));
      res = U(res, vec2(cutaway(max(t, grow), cs), 69.));
    } else res = U(res, vec2(bc - .02, 0.));
  }
  return res;
}

vec2 unit(vec3 p, float cs) {
  float ap = uApart;
  vec3 o = p - UB;
  float bnd = sdBox(o - vec3(0., UH * .5 + .25 * ap, 0.), vec3(.42 + .32 * ap, UH * .5 + .06 + .3 * ap, .42 + .32 * ap));
  if (bnd > .1) return vec2(bnd, 0.);
  vec2 res = vec2(1e5, 0.);
  float d = 1e5;
  // 0 \xB7 Struts: three columns crossed like a tepee's poles, not touching (apart: each moves out from the axis; built:
  // rising from their feet).
  for (int i = 0; i < 3; i++) d = min(d, rod(p - UOS[i] * (.18 * ap), UBV[i], UTV[i], .019));
  res = U(res, vec2(cutaway(rise(d, 0, p.y, UB.y, UB.y + UH + .03), cs), 20.));
  // 1 \xB7 Tension triangle: cables joining the columns' heads, and their feet (apart: the top triangle lifts; built:
  // drawn round). 2 \xB7 Tension ties: from each corner of the top triangle down to the next column's foot (apart: out
  // beyond the columns; built: let down from the top).
  float d1 = 1e5, d2 = 1e5;
  for (int i = 0; i < 3; i++) {
    int k = (i + 1) % 3, j = (i + 2) % 3;
    d1 = min(d1, rod(p - vec3(0., .32 * ap, 0.), UTV[i], UTV[k], .005));
    d1 = min(d1, rod(p, UBV[i], UBV[k], .005));
    d2 = min(d2, rod(p - UOT[i] * (.34 * ap), UBV[i], UTV[j], .005));
  }
  float g1 = built(1), g2 = built(2);
  d1 = g1 <= 0. ? 1e5 : g1 >= 1. ? d1 : max(d1, (fract(atan(o.z, o.x) / TAU) - g1) * .3);
  d2 = g2 <= 0. ? 1e5 : g2 >= 1. ? d2 : max(d2, (UB.y + UH - p.y) / UH - g2);
  res = U(res, vec2(cutaway(d1, cs), 61.));
  res = U(res, vec2(cutaway(d2, cs), 62.));
  // 3 \xB7 The three-strut unit: its six vertexes, the octahedron's, where columns and cables meet (apart: lifted clear).
  vec3 h = p - vec3(0., .62 * ap, 0.);
  d = 1e5;
  for (int i = 0; i < 3; i++) d = min(d, min(length(h - UBV[i]), length(h - UTV[i])) - .03);
  res = U(res, vec2(cutaway(rise(d, 3, h.y, UB.y - .04, UB.y + UH + .04), cs), 23.));
  return res;
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(-.12, .02 + .3 * uApart, 0.), vec3(1.66 + .25 * uApart, 1.16 + .3 * uApart, 1.12 + .3 * uApart));
  if (bound > .2) return vec2(bound, 0.);
  float cs = cutS(p);
  vec2 res = sphere(p, cs);
  res = U(res, unit(p, cs));
  // Not parts: a plinth under the unit, a cup and plinth under the sphere.
  float d = p.y - CS.y + RS * .97;
  if (d < .02) {
    d = sdCylinder(p - vec3(UB.x, UB.y - .04, UB.z), .02, .5);
    d = min(d, sdCylinder(p - vec3(CS.x, UB.y - .04, CS.z), .02, .3));
    d = min(d, rod(p, vec3(CS.x, UB.y - .02, CS.z), vec3(CS.x, CS.y - RS * .97, CS.z), .018));
    d = min(d, sdTorus(p - vec3(CS.x, CS.y - RS * .985, CS.z), vec2(.07, .008)));
  }
  res = U(res, vec2(d, 4.));
  return res;
}
`};export{Lt as scene};
