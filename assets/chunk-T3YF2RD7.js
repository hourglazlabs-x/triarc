import{a as A}from"./chunk-WFBFTKL4.js";import{a as S}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var f=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],z=e=>{let t=Math.hypot(...e);return[e[0]/t,e[1]/t,e[2]/t]};function T(e,t){let n=Math.cos(t),s=Math.sin(t),a=1-n,[r,i,l]=e;return[[a*r*r+n,a*r*i-s*l,a*r*l+s*i],[a*r*i+s*l,a*i*i+n,a*i*l-s*r],[a*r*l-s*i,a*i*l+s*r,a*l*l+n]]}var u=(e,t)=>[e[0][t],e[1][t],e[2][t]],N=(e,t)=>{let n=[u(t,0),u(t,1),u(t,2)];return[0,1,2].map(s=>{let a=e[s];return[f(a,n[0]),f(a,n[1]),f(a,n[2])]})},F=(e,t)=>[f(e[0],t),f(e[1],t),f(e[2],t)],H=e=>[...u(e,0),...u(e,1),...u(e,2)],L=Math.cos(Math.PI/5),M=Math.sqrt(.75-L*L),c=z([M,0,.5]),R=z([0,M,L]),p=F(T(R,2*Math.PI/3),c),v=F(T(R,-2*Math.PI/3),c);function G(){let e=[[c[0],p[0],v[0]],[c[1],p[1],v[1]],[c[2],p[2],v[2]]],[[t,n,s],[a,r,i],[l,g,b]]=e,Y=r*b-i*g,k=-(a*b-i*l),B=a*g-r*l,h=t*Y+n*k+s*B,D=[[Y/h,-(n*b-s*g)/h,(n*i-s*r)/h],[k/h,(t*b-s*l)/h,-(t*i-s*a)/h],[B/h,-(t*g-n*l)/h,(t*r-n*a)/h]];return H(D)}var C=f(c,R),U=Math.hypot(c[0]-(p[0]+v[0])/2,c[1]-(p[1]+v[1])/2,c[2]-(p[2]+v[2])/2),$=Math.acos(f(c,p)),X=Math.tan($/2),q=1/20,m=24.5,d=18;for(let e=0;e<40;e++)d-=(Math.PI*d*(3*m*m+d*d)/6-20815)/(Math.PI*(3*m*m+3*d*d)/6);var w=(m*m+d*d)/(2*d),P=w*q,V=-.5,E=V-(w-d)*q,I=V+d*q,O=Math.acos((w-d)/w),x=6.28*Math.PI/180,Z=[[Math.cos(x),0,-Math.sin(x)],[0,1,0],[Math.sin(x),0,Math.cos(x)]],j=N(T(z([c[2],0,-c[0]]),Math.acos(c[1])),Z),K=34*Math.PI/180,o=e=>e.toFixed(7),y=e=>`vec3(${e.map(o).join(", ")})`,W={id:"D07-geodesic-dome",cam:[1.659,2.74,4.557],target:[0,-.06,0],floor:-1.6,ring:1.72,accent:S(A.D07),poster:3,parts:[{name:"icosahedron",inside:!0,view:{az:-20,el:-22,zoom:.82}},{name:"spherical icosahedron",view:{el:14,zoom:.92}},{name:"edge modules",view:{az:-6,el:6,zoom:.56}},{name:"great circle grid",inside:!0,view:{az:-20,el:-22,zoom:.74}},{name:"struts",view:{el:-2,zoom:.6}},{name:"hubs",view:{el:4,zoom:.44}},{name:"triangles",inside:!0,view:{az:-20,el:-22,zoom:.78}},{name:"pentagon points",view:{el:34,zoom:.86}},{name:"foundation",view:{el:-18,zoom:.92}},{name:"plastic skin",view:{el:-4}}],glsl:`
const vec3 NC = vec3(${o(-.5)}, ${o(-L)}, ${o(M)});
const vec3 FN = ${y(R)};
const vec3 VX = ${y(c)};
const vec3 VX2 = ${y(p)};
const vec3 VX3 = ${y(v)};
const mat3 BARY = mat3(${G().map(o).join(", ")});
const mat3 ROTM = mat3(${H(j).map(o).join(", ")});   // world \u2192 fold frame
const float DVF = ${o(C)};
const float FH = ${o(U)};
const float THE = ${o($)};         // an edge's arc
const float TH2 = ${o(X)};
const float N = 16.;                 // the frequency
const float R = ${o(P)};             // the sphere: 25.46 ft
const vec3 C0 = vec3(0., ${o(E)}, 0.);
const float YB = ${o(V)};           // the base plane
const float YT = ${o(I)};           // the zenith, 18.54 ft up
const float A = ${o(m*q)};     // the base's radius: 24.5 ft
const float THB = ${o(O)};         // the base's angle from the zenith
const float BAZ = ${o(K)};
const float SR = .0068, HB = .0102;  // strut and hub radii
const float RF = R - SR - .0028;     // the triangles' panes
const float RG = R - SR - .0046;     // the grid lines, along the struts' inner side
const float RA = R + SR + .0026;     // the arcs and pentagons, riding on the struts
const float RT = R + SR + .0085;     // the division ticks
const float RBN = R + .0205;         // the bands
const float RSK = R + .042;          // the skin, clear of the bands
const float DY1 = .36, DY2 = .78, DY3 = 1.16, DYF = -.3;   // taken apart

vec3 palette(int i) {
  if (i == 0) return vec3(.80, .90, 1.);    // icosahedron
  if (i == 1) return vec3(.42, .86, 1.);    // spherical icosahedron
  if (i == 2) return vec3(1., .80, .42);    // edge modules
  if (i == 3) return vec3(.52, 1., .82);    // great circle grid
  if (i == 4) return vec3(.86, .91, .97);   // struts: aluminium
  if (i == 5) return vec3(1., .97, .90);    // hubs
  if (i == 6) return vec3(.62, .84, 1.);    // triangles
  if (i == 7) return vec3(1., .52, .86);    // pentagon points
  if (i == 8) return vec3(.78, .80, .86);   // foundation
  return vec3(.72, .93, 1.);                // plastic skin
}

float sdBox2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }

vec3 fold(vec3 p) {
  for (int i = 0; i < 5; i++) {
    p.xy = abs(p.xy);
    p -= 2. * min(0., dot(p, NC)) * NC;
  }
  return p;
}

// The frame's grid at a folded direction f (in the face VX, VX2, VX3): lattice coordinates G (sum N, whole numbers on
// the grid lines: equal arcs along the icosahedron's edges, the three families meeting at every point), the world length
// of one lattice row in each family (hl), and the distance along the sphere to the nearest grid line (dl).
struct Lat { vec3 G; vec3 hl; float dl; };
Lat latOf(vec3 b, float cf) {
  Lat L;
  vec3 w = (2. * b - 1.) * TH2;
  vec3 w2 = w * w;
  vec3 a = .5 + w * (.999967 + w2 * (-.332012 + w2 * (.185643 - .081501 * w2))) / THE;   // atan(w), |w| < .62
  float s = a.x + a.y + a.z;
  L.G = a * (N / s);
  L.hl = (FH * cf * sqrt(cf) / DVF / N * R * s * THE / (2. * TH2)) * (1. + w2);
  vec3 e = abs(fract(L.G + .5) - .5) * L.hl;
  L.dl = min(e.x, min(e.y, e.z)) * .92;
  return L;
}
Lat latAt(vec3 q) {
  vec3 f = fold(ROTM * q) / length(q);
  float cf = dot(f, FN);
  return latOf(BARY * (f * (DVF / cf)), cf);
}
/** Distance along the sphere to the nearest grid point. */
float vertDist(Lat L) {
  vec3 k = floor(L.G + .5);
  vec3 d = L.G - k;
  float ex = k.x + k.y + k.z - N;
  if (ex > .5) { if (d.x <= d.y && d.x <= d.z) k.x -= 1.; else if (d.y <= d.z) k.y -= 1.; else k.z -= 1.; }
  else if (ex < -.5) { if (d.x >= d.y && d.x >= d.z) k.x += 1.; else if (d.y >= d.z) k.y += 1.; else k.z += 1.; }
  d = L.G - k;
  return sqrt(dot(d, d) * (2. / 3.)) * (L.hl.x + L.hl.y + L.hl.z) * .3;
}
/** Shown from the zenith down to the angle g of the way to the base (a distance bound). */
float fromTop(float d, float g, vec3 q, float r) {
  return g <= 0. ? 1e5 : g >= 1. ? d : max(d, (acos(clamp(q.y / r, -1., 1.)) - g * THB * 1.04) * R);
}

float cutS(vec3 p) { return p.z; }

// The construction on the sphere, in place when taken apart: 2 edge modules, 3 grid.
vec2 construction(vec3 p, vec3 q, float r, Lat L, float cs, float clip) {
  vec2 res = vec2(1e5, 0.);
  vec3 eg = L.G * L.hl;
  float de = min(eg.x, min(eg.y, eg.z)) * .92;   // along the sphere to the icosahedron's edges
  float d;
  // 2 \xB7 Edge modules: a tick at each of the 16 equal divisions of every edge (built: ticked off from each vertex).
  float g2 = built(2);
  if (g2 > 0. && de < .03) {
    float gm = max(L.G.x, max(L.G.y, L.G.z));
    float km = floor(gm + .5);
    float side = (L.hl.x + L.hl.y + L.hl.z) * .3849;          // a strut's length: a row's height \xD7 2/\u221A3
    d = sdBox(vec3(abs(gm - km) * side, de, r - RT), vec3(.0034, .019, .0032));
    bool hide = km > N - .5 || N - km > g2 * 8.5 + .5;
    d = hide ? max(d, side * .5 - .004) : d;
    res = U(res, vec2(cutaway(max(d, clip), cs), 62.));
  }
  // 3 \xB7 Great circle grid: the lines joining the divisions in three directions (built: spreading down from the zenith).
  d = length(vec2(r - RG, L.dl)) - .0034;
  res = U(res, vec2(cutaway(max(fromTop(d, built(3), q, r), clip), cs), 63.));
  return res;
}

// The frame, lifted when taken apart: 4 struts, 6 triangles.
vec2 frame(vec3 p, Lat S, float cs) {
  vec3 pp = p - vec3(0., DY1 * uApart, 0.);
  vec3 q = pp - C0;
  float r = length(q);
  float clip = YB - pp.y;
  float bnd = max(abs(r - R) - .022, clip);
  if (bnd > .015) return vec2(bnd, 0.);
  Lat L = S;
  if (uApart > 0.) L = latAt(q);
  // 4 \xB7 Struts: a light tube on every line of the grid (built: rising from the base).
  float d = length(vec2(r - R, L.dl)) - SR;
  vec2 res = vec2(cutaway(rise(max(d, clip), 4, pp.y, YB, YT + .02), cs), 24.);
  // 6 \xB7 Triangles: each closed by three struts, shown as a thin pane inside them (built: glazed from the top down).
  d = max(max(abs(r - RF) - .0012, SR + .0055 - L.dl), clip);
  res = U(res, vec2(SHELL(cutaway(fromTop(d, built(6), q, r), cs)), 46.));
  return res;
}

// The nodes, lifted higher when taken apart: 5 hubs, 7 pentagon points.
vec2 nodes(vec3 p, Lat S, float cs) {
  vec3 pp = p - vec3(0., DY2 * uApart, 0.);
  vec3 q = pp - C0;
  float r = length(q);
  float clip = YB - pp.y;
  float bnd = max(abs(r - R) - .025, clip);
  if (bnd > .012) return vec2(bnd, 0.);
  Lat L = S;
  if (uApart > 0.) L = latAt(q);
  // 5 \xB7 Hubs: a ball where the struts meet, a bolt through it along the radius.
  float dv = vertDist(L);
  float d = min(length(vec2(r - R, dv)) - HB, length(vec2(max(abs(r - R) - .0165, 0.), dv)) - .0042);
  vec2 res = vec2(cutaway(rise(max(d, clip), 5, pp.y, YB, YT + .02), cs), 25.);
  // 7 \xB7 Pentagon points: where five triangles meet (the icosahedron's vertexes), a ring round the hub and the small
  // pentagon of struts round it.
  if (L.G.x > N - 2.5) {
    vec3 d0 = L.G - vec3(N, 0., 0.);
    float dv0 = sqrt(dot(d0, d0) * (2. / 3.)) * (L.hl.x + L.hl.y + L.hl.z) * .3;
    float pent = length(vec2(r - RA, abs(L.G.x - (N - 1.)) * L.hl.x * .92)) - .0046;
    float ring = length(vec2(r - R - .0045, dv0 - .03)) - .0042;
    d = min(pent, ring);
  } else d = (N - 1.5 - L.G.x) * L.hl.x * .9;
  res = U(res, vec2(cutaway(rise(max(d, clip), 7, pp.y, YB, YT + .02), cs), 67.));
  return res;
}

vec2 map(vec3 p) {
  float ap = uApart;
  float bound = sdBox(p - vec3(0., -.057 + .44 * ap, 0.), vec3(1.33, .53 + .74 * ap, 1.33));
  if (bound > .15) return vec2(bound, 0.);
  float cs = cutS(p);
  vec3 q = p - C0;
  float r = length(q);
  float clip = YB - p.y;
  vec2 res = vec2(max(max(R * .83 - r, r - R - .045), clip - .03), 0.);
  Lat S = Lat(vec3(0.), vec3(1.), 1.);
  if (res.x <= .01) {
    vec3 f = fold(ROTM * q) / r;
    float cf = dot(f, FN);
    vec3 b = BARY * (f * (DVF / cf));
    // 0 \xB7 The icosahedron: its edges as rods between the twelve vertexes on the sphere (the fold's domain meets only
    // the edge VX\u2013VX3); cut off at the base, rising.
    float d = sdCapsule(f * r, VX * R, VX3 * R, .0085);
    res = vec2(cutaway(rise(max(d, clip), 0, p.y, YB, YT + .02), cs), 20.);
    // 1 \xB7 The spherical icosahedron: the edges exploded onto the sphere as arcs riding on the struts (built: swelling out
    // from the flat edges).
    float g1 = built(1);
    float mb = min(b.x, min(b.y, b.z));
    if (g1 > 0. && mb < .08) {
      float ra = mix(R * DVF / cf, RA, g1);
      d = length(vec2(r - ra, mb * FH * cf * sqrt(cf) / DVF * ra * .92)) - .0042;
      res = U(res, vec2(cutaway(max(d, clip), cs), 61.));
    } else if (g1 > 0. && g1 < 1.) res = U(res, vec2(.06, 0.));
    float dr = abs(r - R);
    if (dr < .04) {
      S = latOf(b, cf);
      res = U(res, construction(p, q, r, S, cs, clip));
    } else res = U(res, vec2(dr - .035, 0.));
  }
  res = U(res, frame(p, S, cs));
  res = U(res, nodes(p, S, cs));

  // 8 \xB7 Foundation: a concrete footing under the base ring, and five great circle bands over the frame from the footing
  // to the zenith (dropped when taken apart; built: the footing, then the bands climbing).
  {
    vec3 pp = p - vec3(0., DYF * ap, 0.);
    vec3 qq = pp - C0;
    float d = sdBox2(vec2(length(pp.xz) - A, pp.y - YB + .032), vec2(.048, .032));
    float band = abs(length(qq) - RBN) - .0019;
    if (band < .02) {
      float sct = TAU / 5.;
      float an = mod(atan(qq.z, qq.x) - BAZ + sct * .5, sct) - sct * .5;
      float rh = length(qq.xz);
      band = max(max(abs(sin(an)) * rh - .0095, band), max(-cos(an) * rh, YB - .01 - pp.y));
    }
    d = min(d, band);
    res = U(res, vec2(cutaway(rise(d, 8, pp.y, YB - .07, YT + .04), cs), 28.));
  }
  // 9 \xB7 Plastic skin: a thin membrane over the frame (lifted highest when taken apart; built: draped from the zenith).
  {
    vec3 pp = p - vec3(0., DY3 * ap, 0.);
    vec3 qq = pp - C0;
    float rr = length(qq);
    float d = max(abs(rr - RSK) - .0016, YB - pp.y);
    res = U(res, vec2(SHELL(cutaway(fromTop(d, built(9), qq, rr), cs)), 89.));
  }
  return res;
}
`};export{W as scene};
