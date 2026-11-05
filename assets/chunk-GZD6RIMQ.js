import{c as B}from"./chunk-W46U2OC5.js";import{a as T}from"./chunk-WY76X7OO.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var q=Math.cos(Math.PI/5),x=Math.sqrt(.75-q*q),R=e=>{let t=Math.hypot(...e);return[e[0]/t,e[1]/t,e[2]/t]},s=R([x,0,.5]),l=R([0,x,q]);function U(e,t,f){let a=Math.cos(f),r=Math.sin(f),n=e[0]*t[0]+e[1]*t[1]+e[2]*t[2],c=[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]];return[e[0]*a+c[0]*r+t[0]*n*(1-a),e[1]*a+c[1]*r+t[1]*n*(1-a),e[2]*a+c[2]*r+t[2]*n*(1-a)]}var p=U(s,l,2*Math.PI/3),m=U(s,l,-2*Math.PI/3);function S(e,t,f){let a=[e[0],t[0],f[0],e[1],t[1],f[1],e[2],t[2],f[2]],[r,n,c,u,b,h,v,d,g]=a,y=b*g-h*d,F=-(u*g-h*v),C=u*d-b*v,A=r*y+n*F+c*C,o=[y,-(n*g-c*d),n*h-c*b,F,r*g-c*v,-(r*h-c*u),C,-(r*d-n*v),r*b-n*u].map(M=>M/A);return[o[0],o[3],o[6],o[1],o[4],o[7],o[2],o[5],o[8]]}var $=S(s,p,m),j=s[0]*l[0]+s[1]*l[1]+s[2]*l[2],V=[(p[0]+m[0])/2,(p[1]+m[1])/2,(p[2]+m[2])/2],w=Math.hypot(s[0]-V[0],s[1]-V[1],s[2]-V[2]),i=e=>e.toFixed(7),z=e=>`vec3(${e.map(i).join(", ")})`,N={id:"D05",cam:[2.2,1.25,5.6],target:[.18,-.05,0],floor:-1.6,ring:1.9,accent:T(B.D05),poster:10.2,glsl:`
const vec3 NC = vec3(${i(-.5)}, ${i(-q)}, ${i(x)});
const vec3 FN = ${z(l)};           // the folded face's centre direction
const mat3 BARY = mat3(${$.map(i).join(", ")});
const mat3 FACE = mat3(${[...s,...p,...m].map(i).join(", ")});   // columns: the face's vertices
const float DVF = ${i(j)};        // the face plane's distance from the centre, on the unit sphere
const float FH = ${i(w)};           // the plane triangle's height
const vec3 GC = vec3(-.32, .05, -.05);  // the geodesic sphere's centre
const float R = .98;

vec3 palette(int i) {
  if (i == 0) return vec3(.80, .90, 1.);    // icosahedron
  if (i == 1) return vec3(.42, .86, 1.);    // geodesic struts
  if (i == 2) return vec3(.70, .90, 1.);    // the sphere
  if (i == 3) return vec3(.96, .98, 1.);    // hubs
  if (i == 4) return vec3(.95, .80, .52);   // tensegrity struts, in compression
  if (i == 5) return vec3(.52, .95, .90);   // cables, in tension
  if (i == 6) return vec3(.62, .82, 1.);    // two spheres
  return vec3(.40, .78, .66);               // the globe
}

vec3 fold(vec3 p) {
  for (int i = 0; i < 5; i++) {
    p.xy = abs(p.xy);
    p -= 2. * min(0., dot(p, NC)) * NC;
  }
  return p;
}

float gFreq;

vec2 geodesic(vec3 p) {
  vec3 q = p - GC;
  float r = length(q);
  if (r < .45 || r > R + .2) return vec2(min(abs(r - R) - .1, max(.45 - r, 0.) + .1), 0.);
  vec3 f = fold(q);
  vec3 n = f / r;
  float cf = dot(n, FN);
  vec3 gp = n * (DVF / cf);                 // onto the face's plane
  vec3 b = BARY * gp;                       // barycentric coordinates in the face
  float fq = gFreq;
  vec3 e = abs(fract(b * fq + .5) - .5) / fq * FH;
  float planar = min(e.x, min(e.y, e.z));
  float ang = planar * pow(cf, 1.5) / DVF;
  vec2 res = vec2(length(vec2(r - R, ang * R)) - .011, 21.);
  // Hubs where the struts meet.
  vec3 k = floor(b * fq + .5);
  k.z = fq - k.x - k.y;
  vec3 hb = normalize(FACE * (k / fq));
  res = U(res, vec2(length(f - hb * R) - .026, 23.));
  // The icosahedron inside, flat-faced, its vertices touching the sphere.
  float ico = abs(dot(f, FN) - DVF * R * .995) - .003;
  res = U(res, vec2(SHELL(max(ico, r - R)), 80.));
  res = U(res, vec2(SHELL(abs(r - R) - .002), 82.));
  return res;
}

vec2 tensegrity(vec3 p) {
  vec3 q = p - vec3(1.42, -.95, -.12);
  if (sdBox(q - vec3(0., .5, 0.), vec3(.5, .6, .5)) > .15) return vec2(.15, 0.);
  float tw = uTime * .25;
  vec3 B[3], T[3];
  for (int i = 0; i < 3; i++) {
    float a = float(i) * TAU / 3. + tw;
    B[i] = vec3(cos(a) * .34, .05, sin(a) * .34);
    T[i] = vec3(cos(a + 2.618) * .34, .98, sin(a + 2.618) * .34);
  }
  float struts = 1e5, cables = 1e5;
  for (int i = 0; i < 3; i++) {
    int j = (i + 1) % 3;
    struts = min(struts, sdCapsule(q, B[i], T[i], .022));
    cables = min(cables, sdCapsule(q, B[i], B[j], .0045));
    cables = min(cables, sdCapsule(q, T[i], T[j], .0045));
    cables = min(cables, sdCapsule(q, B[i], T[j], .0045));
  }
  return U(vec2(struts, 24.), vec2(cables, 65.));
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(.25, -.05, .2), vec3(2., 1.25, 1.4));
  if (bound > .25) return vec2(bound, 0.);
  float t = uTime;
  // The frequency steps up: 1, 2, 3, 4, 6.
  float step = mod(floor(t / 3.4), 5.);
  gFreq = step < .5 ? 1. : step < 1.5 ? 2. : step < 2.5 ? 3. : step < 3.5 ? 4. : 6.;
  vec2 res = geodesic(p);
  res = U(res, tensegrity(p));

  // Two spheres: twice the diameter, four times the floor, eight times the volume.
  {
    vec3 a = p - vec3(.95, -.98, .95), b = p - vec3(1.42, -.86, .95);
    float s = min(sdSphere(a, .07), sdSphere(b, .14));
    res = U(res, vec2(SHELL(s), 46.));
    float rings = min(max(abs(length(a.xz) - .07) - .003, abs(a.y) - .003), max(abs(length(b.xz) - .14) - .003, abs(b.y) - .003));
    res = U(res, vec2(rings, 66.));
  }

  // A small globe on its orbit: Spaceship Earth.
  {
    vec3 e = p - vec3(-1.22, -.78, .95);
    vec3 er = e; er.xz *= rot(t * .3);
    float land = fbm(er * 7.) - .5;
    float globe = sdSphere(e, .16);
    res = U(res, vec2(globe, land > .02 ? 27. : 47.));
    vec3 o = e; o.xy *= rot(.35);
    res = U(res, vec2(max(abs(length(o.xz) - .3) - .003, abs(o.y) - .003), 67.));
  }
  return res;
}
`};export{N as scene};
