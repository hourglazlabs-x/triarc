import{a as k}from"./chunk-WFBFTKL4.js";import{a as U}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var T=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],I=e=>{let t=Math.hypot(...e);return[e[0]/t,e[1]/t,e[2]/t]},z=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],b=(e,t,a)=>{let c=Math.cos(a),n=Math.sin(a),r=z(t,e),i=T(t,e)*(1-c);return[e[0]*c+r[0]*n+t[0]*i,e[1]*c+r[1]*n+t[1]*i,e[2]*c+r[2]*n+t[2]*i]};function A(e,t){let a=z(e,t),c=Math.hypot(...a),n=[a[0]/c,a[1]/c,a[2]/c],r=Math.atan2(c,T(e,t)),i=b([1,0,0],n,r),p=b([0,1,0],n,r),y=b([0,0,1],n,r);return[[i[0],p[0],y[0]],[i[1],p[1],y[1]],[i[2],p[2],y[2]]]}var w=e=>[e[0][0],e[1][0],e[2][0],e[0][1],e[1][1],e[2][1],e[0][2],e[1][2],e[2][2]],x=.24,M=4/3*Math.PI*x**3,G=Math.cbrt(6*Math.SQRT2*M),H=Math.cbrt(3*M/Math.SQRT2),K=Math.cbrt(M/(5/12*(3+Math.sqrt(5)))),v=G*Math.sqrt(3/8),E=H/Math.SQRT2,X=K*Math.sin(2*Math.PI/5),V=2*x,d=18;for(let e=0;e<40;e++)d-=(Math.PI*d*(3*24.5**2+d*d)/6-20815)/(Math.PI*(3*24.5**2+3*d*d)/6);var B=(24.5**2+d**2)/(2*d),D=d/B*V,$=V-D,P=[[0,v,0],...[0,1,2].map(e=>[v*(2*Math.SQRT2/3)*Math.cos(Math.PI*(90+120*e)/180),-v/3,v*(2*Math.SQRT2/3)*Math.sin(Math.PI*(90+120*e)/180)])],q=Math.cos(Math.PI/5),S=Math.sqrt(.75-q*q),l=I([S,0,.5]),R=I([0,S,q]),m=b(l,R,2*Math.PI/3),g=b(l,R,-2*Math.PI/3),Q=[0,0,1],j=A([0,1,0],l),Y=(()=>{let[e,t,a]=[l[0],m[0],g[0]],[c,n,r]=[l[1],m[1],g[1]],[i,p,y]=[l[2],m[2],g[2]],C=n*y-r*p,F=-(c*y-r*i),N=c*p-n*i,h=e*C+t*F+a*N,O=[[C/h,-(t*y-a*p)/h,(t*r-a*n)/h],[F/h,(e*y-a*i)/h,-(e*r-a*c)/h],[N/h,-(e*p-t*i)/h,(e*n-t*c)/h]];return w(O)})(),L=T(l,R),J=Math.hypot(l[0]-(m[0]+g[0])/2,l[1]-(m[1]+g[1])/2,l[2]-(m[2]+g[2])/2),u=I(z(l,Q)),W=T(u,R)>0?u:[-u[0],-u[1],-u[2]],Z=-.26,_=[160,125,90,55,20].map(e=>[.1+1.45*Math.cos(e*Math.PI/180),Z,-.55+1.45*Math.sin(e*Math.PI/180)]),f=[..._,[.1,.34,-.55],[.1,-.6,-.55]],ee=I([0,1.45+0,.6]),s=e=>e.toFixed(5),o=e=>`vec3(${e.map(s).join(", ")})`,oe={id:"D07-volume-surface",cam:[.05,2.594,5.483],target:[.05,-.08,0],floor:-1.6,ring:1.8,accent:U(k.D07),poster:2,parts:[{name:"tetrahedron",view:{az:-30,el:-6,zoom:.62}},{name:"octahedron",view:{az:-18,el:-6,zoom:.6}},{name:"icosahedron",view:{az:-2,el:-6,zoom:.58}},{name:"geodesic sphere",view:{az:12,el:-6,zoom:.58}},{name:"sphere",view:{az:22,el:-6,zoom:.6}},{name:"doubled sphere",view:{az:18,el:6,zoom:.72}},{name:"dome shell",view:{az:-12,el:8,zoom:.72}}],glsl:`
const vec3 P0 = ${o(f[0])}, P1 = ${o(f[1])}, P2 = ${o(f[2])}, P3 = ${o(f[3])}, P4 = ${o(f[4])};
const vec3 P5 = ${o(f[5])}, P6 = ${o(f[6])};
const float R1 = ${s(x)}, R2 = ${s(V)};
const vec3 TV0 = ${o(P[0])}, TV1 = ${o(P[1])}, TV2 = ${o(P[2])}, TV3 = ${o(P[3])};
const float TIN = ${s(v/3)};       // the tetrahedron's inradius
const float OS = ${s(E)};            // the octahedron, centre to vertex
const float IR = ${s(X)};            // the icosahedron's circumradius
const float RG = ${s(x*1.012)};    // the geodesic sphere (a little larger for the same volume)
const vec3 NC = vec3(${s(-.5)}, ${s(-q)}, ${s(S)});
const vec3 FN = ${o(R)};
const vec3 VX = ${o(l)}, VX2 = ${o(m)}, VX3 = ${o(g)};
const vec3 ENF = ${o(W)};
const mat3 ROTI = mat3(${w(j).map(s).join(", ")});
const mat3 BARY = mat3(${Y.map(s).join(", ")});
const float DVF = ${s(L)}, FHT = ${s(J)};
const float HD = ${s(D)}, DC = ${s($)};   // the dome: height, its sphere's centre below the base
const float SK = .0016;              // skin half-thickness
const float CI = .014;               // the core's inset under the skin

vec3 palette(int i) {
  if (i == 0) return vec3(1., .52, .42);    // tetrahedron: most surface
  if (i == 1) return vec3(1., .70, .40);    // octahedron
  if (i == 2) return vec3(.98, .90, .48);   // icosahedron
  if (i == 3) return vec3(.62, 1., .66);    // geodesic sphere
  if (i == 4) return vec3(.42, .92, 1.);    // sphere: least surface
  if (i == 5) return vec3(.58, .74, 1.);    // doubled sphere
  return vec3(.82, .70, 1.);                // dome shell
}

vec3 fold(vec3 p) {
  for (int i = 0; i < 5; i++) {
    p.xy = abs(p.xy);
    p -= 2. * min(0., dot(p, NC)) * NC;
  }
  return p;
}
/** Distances to the triangle (a, b, c) as a plate and to its border. */
vec2 tri(vec3 p, vec3 a, vec3 b, vec3 c) {
  vec3 ba = b - a, pa = p - a, cb = c - b, pb = p - b, ac = a - c, pc = p - c;
  vec3 nor = cross(ba, ac);
  float e = min(min(dot2(ba * clamp(dot(ba, pa) / dot2(ba), 0., 1.) - pa), dot2(cb * clamp(dot(cb, pb) / dot2(cb), 0., 1.) - pb)),
                dot2(ac * clamp(dot(ac, pc) / dot2(ac), 0., 1.) - pc));
  bool inside = sign(dot(cross(ba, nor), pa)) + sign(dot(cross(cb, nor), pb)) + sign(dot(cross(ac, nor), pc)) >= 2.;
  return sqrt(vec2(inside ? dot(nor, pa) * dot(nor, pa) / dot2(nor) : e, e));
}
/** A solid: its core (volume) solid, its skin (surface) thin glass, its edges solid; part i. */
vec2 solid(float core, float skin, float edge, int i, float cs) {
  vec2 res = vec2(cutaway(min(core, edge), cs), float(20 + i));
  return U(res, vec2(SHELL(cutaway(skin, cs)), float(80 + i)));
}

float cutS(vec3 p) { return dot(p - P2, ${o(ee)}); }

vec2 map(vec3 p) {
  float ap = uApart;
  float bound = sdBox(p - vec3(.05, .07 + .05 * ap, -.05), vec3(1.82, .78 + .1 * ap, 1.12));
  if (bound > .2) return vec2(bound, 0.);
  float cs = cutS(p);
  vec2 res = vec2(1e5, 0.);
  float core, skin, edge;

  // 0 \xB7 Tetrahedron: four triangles (apart: each face moves out from the core along its normal).
  {
    vec3 q = p - P0;
    float b = length(q) - ${s(v)} - .12;
    if (b > .05) res = U(res, vec2(b, 0.));
    else {
      vec3 n0 = -normalize(TV0), n1 = -normalize(TV1), n2 = -normalize(TV2), n3 = -normalize(TV3);
      float d0 = dot(q, n0), d1 = dot(q, n1), d2 = dot(q, n2), d3 = dot(q, n3);
      core = max(max(d0, d1), max(d2, d3)) - TIN + CI;
      float o = .085 * ap;
      vec2 f0 = tri(q - n0 * o, TV1, TV2, TV3), f1 = tri(q - n1 * o, TV0, TV2, TV3);
      vec2 f2 = tri(q - n2 * o, TV0, TV1, TV3), f3 = tri(q - n3 * o, TV0, TV1, TV2);
      skin = min(min(f0.x, f1.x), min(f2.x, f3.x)) - SK;
      edge = min(min(f0.y, f1.y), min(f2.y, f3.y)) - .006;
      float y0 = P0.y - TIN - .02, y1 = P0.y + ${s(v)} + .02;
      res = U(res, solid(rise(core, 0, p.y, y0, y1), rise(skin, 0, p.y, y0, y1), rise(edge, 0, p.y, y0, y1), 0, cs));
    }
  }
  // 1 \xB7 Octahedron: eight triangles, a vertex up (apart: faces out).
  {
    vec3 q = p - P1;
    float b = length(q) - OS - .1;
    if (b > .05) res = U(res, vec2(b, 0.));
    else {
      vec3 a = abs(q);
      core = (a.x + a.y + a.z - OS) * .57735 + CI;
      vec2 f = tri(a - vec3(.57735) * (.075 * ap), vec3(OS, 0., 0.), vec3(0., OS, 0.), vec3(0., 0., OS));
      float y0 = P1.y - OS - .02, y1 = P1.y + OS + .02;
      res = U(res, solid(rise(core, 1, p.y, y0, y1), rise(f.x - SK, 1, p.y, y0, y1), rise(f.y - .006, 1, p.y, y0, y1), 1, cs));
    }
  }
  // 2 \xB7 Icosahedron: twenty triangles, a vertex up (apart: faces out).
  {
    vec3 q = p - P2;
    float b = length(q) - IR - .09;
    if (b > .05) res = U(res, vec2(b, 0.));
    else {
      vec3 f = fold(ROTI * q);
      core = dot(f, FN) - IR * DVF + CI;
      vec2 t = tri(f - FN * (.065 * ap), VX * IR, VX2 * IR, VX3 * IR);
      float y0 = P2.y - IR - .02, y1 = P2.y + IR + .02;
      res = U(res, solid(rise(core, 2, p.y, y0, y1), rise(t.x - SK, 2, p.y, y0, y1), rise(t.y - .0055, 2, p.y, y0, y1), 2, cs));
    }
  }
  // 3 \xB7 Geodesic sphere: the icosahedron projected onto a sphere, each face divided into sixteen smaller triangles by
  // great circles (apart: its twenty sections move out).
  {
    vec3 q = p - P3;
    float b = length(q) - RG - .08;
    if (b > .05) res = U(res, vec2(b, 0.));
    else {
      vec3 f = fold(ROTI * q);
      core = length(f) - RG + CI;
      vec3 s = f - FN * (.055 * ap);
      float r = length(s);
      float clip = -dot(s, ENF);                       // inside its face's section
      vec3 u = s / r;
      float cf = dot(u, FN);
      vec3 bc = BARY * (u * (DVF / cf));
      vec3 e = abs(fract(bc * 4. + .5) - .5) * (FHT / 4. * cf * sqrt(cf) / DVF * RG);
      skin = max(abs(r - RG) - SK, clip);
      edge = max(length(vec2(r - RG, min(e.x, min(e.y, e.z)) * .92)) - .0042, clip);
      float y0 = P3.y - RG - .02, y1 = P3.y + RG + .02;
      res = U(res, solid(rise(core, 3, p.y, y0, y1), rise(skin, 3, p.y, y0, y1), rise(edge, 3, p.y, y0, y1), 3, cs));
    }
  }
  // 4 \xB7 Sphere (apart: its skin parts into hemispheres, up and down, from the core).
  {
    vec3 q = p - P4;
    float b = length(q) - R1 - .1;
    if (b > .05) res = U(res, vec2(b, 0.));
    else {
      core = length(q) - R1 + CI;
      float hs = sign(q.y + 1e-5);
      vec3 s = q - vec3(0., hs * .075 * ap, 0.);
      skin = max(abs(length(s) - R1) - SK, -hs * s.y);
      edge = length(vec2(length(s.xz) - R1, s.y)) - .0045;          // the great circle the sphere is measured by
      float y0 = P4.y - R1 - .02, y1 = P4.y + R1 + .02;
      res = U(res, solid(rise(core, 4, p.y, y0, y1), rise(skin, 4, p.y, y0, y1), rise(edge, 4, p.y, y0, y1), 4, cs));
    }
  }
  // 5 \xB7 Doubled sphere: twice the diameter. The equator and two meridians cut it into eight octants, each the small
  // sphere's volume; the equator and two parallels at half the radius into four zones of equal height, each the small
  // sphere's surface (apart: the octants move apart).
  {
    vec3 q = p - P5;
    float b = length(q) - R2 - .12;
    if (b > .05) res = U(res, vec2(b, 0.));
    else {
      vec3 sg = sign(q + 1e-5);
      vec3 s = q - sg * (.07 * ap);
      float clip = max(max(-sg.x * s.x, -sg.y * s.y), -sg.z * s.z);
      float r = length(s);
      core = max(r - R2 + CI, clip);
      skin = max(abs(r - R2) - SK, clip);
      vec3 a = abs(s);
      float ring = min(min(length(vec2(length(s.xz) - R2, s.y)), length(vec2(length(s.xy) - R2, s.z))), length(vec2(length(s.yz) - R2, s.x)));
      ring = min(ring, length(vec2(length(s.xz) - R2 * .866, a.y - R2 * .5)));
      edge = max(ring - .0048, clip - .006);
      float y0 = P5.y - R2 - .02, y1 = P5.y + R2 + .02;
      res = U(res, solid(rise(core, 5, p.y, y0, y1), rise(skin, 5, p.y, y0, y1), rise(edge, 5, p.y, y0, y1), 5, cs));
    }
  }
  // 6 \xB7 Dome shell: a cap of the doubled sphere, as high (0.728 of the radius) as the patent example's proportion; a
  // light shell over a volume of air, a ring at its foot (apart: the shell lifts off the air).
  {
    vec3 q = p - P6;
    float b = length(q - vec3(0., .1, 0.)) - R2 - .1 - .25 * ap;
    if (b > .05) res = U(res, vec2(b, 0.));
    else {
      vec3 c = q + vec3(0., DC, 0.);
      core = max(length(c) - R2 + CI, -q.y);
      vec3 s = c - vec3(0., .22 * ap, 0.);
      float sy = q.y - .22 * ap;
      skin = max(abs(length(s) - R2) - SK, -sy);
      edge = length(vec2(length(s.xz) - ${s(Math.sqrt(V*V-$*$))}, sy - .006)) - .0065;
      float y0 = P6.y - .02, y1 = P6.y + HD + .02;
      res = U(res, solid(rise(core, 6, p.y, y0, y1), rise(skin, 6, p.y, y0, y1), rise(edge, 6, p.y, y0, y1), 6, cs));
    }
  }
  // Not parts: a small plinth under each solid in front, a round base under the dome.
  float d = sdCylinder(p - vec3(P0.x, -.66, P0.z), .02, .3);
  d = min(d, sdCylinder(p - vec3(P1.x, -.66, P1.z), .02, .26));
  d = min(d, sdCylinder(p - vec3(P2.x, -.66, P2.z), .02, .24));
  d = min(d, sdCylinder(p - vec3(P3.x, -.66, P3.z), .02, .22));
  d = min(d, sdCylinder(p - vec3(P4.x, -.66, P4.z), .02, .22));
  d = min(d, sdCylinder(p - vec3(P6.x, -.62, P6.z), .02, .58));
  res = U(res, vec2(d, 4.));
  return res;
}
`};export{oe as scene};
