import{a as $}from"./chunk-WFBFTKL4.js";import{a as C}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var T=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],q=e=>{let t=Math.hypot(...e);return[e[0]/t,e[1]/t,e[2]/t]},U=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],h=(e,t,o)=>{let s=Math.cos(o),n=Math.sin(o),d=U(t,e),v=T(t,e)*(1-s);return[e[0]*s+d[0]*n+t[0]*v,e[1]*s+d[1]*n+t[1]*v,e[2]*s+d[2]*n+t[2]*v]},M=e=>[e[0][0],e[1][0],e[2][0],e[0][1],e[1][1],e[2][1],e[0][2],e[1][2],e[2][2]],u=Math.cos(Math.PI/5),k=Math.sqrt(.75-u*u),c=q([k,0,.5]),g=q([0,k,u]),f=h(c,g,2*Math.PI/3),m=h(c,g,-2*Math.PI/3),Y=(()=>{let[e,t,o]=[c[0],f[0],m[0]],[s,n,d]=[c[1],f[1],m[1]],[v,b,x]=[c[2],f[2],m[2]],D=n*x-d*b,R=-(s*x-d*v),V=s*b-n*v,l=e*D+t*R+o*V,L=[[D/l,-(t*x-o*b)/l,(t*d-o*n)/l],[R/l,(e*x-o*v)/l,-(e*d-o*s)/l],[V/l,-(e*b-t*v)/l,(e*n-t*s)/l]];return M(L)})(),P=T(c,g),S=Math.hypot(c[0]-(f[0]+m[0])/2,c[1]-(f[1]+m[1])/2,c[2]-(f[2]+m[2])/2),H=Math.acos(T(c,f)),F=Math.tan(H/2),A=(()=>{let e=q([c[2],0,-c[0]]),t=Math.acos(c[1]),o=h([1,0,0],e,t),s=h([0,1,0],e,t),n=h([0,0,1],e,t);return[[o[0],s[0],n[0]],[o[1],s[1],n[1]],[o[2],s[2],n[2]]]})(),w=1/30,r=18;for(let e=0;e<40;e++)r-=(Math.PI*r*(3*24.5**2+r*r)/6-20815)/(Math.PI*(3*24.5**2+3*r*r)/6);var y=(24.5**2+r**2)/(2*r),N=y*w,B=-.75,E=[.15,B-(y-r)*w,.3],G=B+r*w,O=24.5*w,j=Math.acos((y-r)/y),p=[1.28,B+.03,-.22],K=.36,z=[0,1,2].map(e=>[p[0]+.13*Math.cos(Math.PI*(60+120*e)/180),p[1],p[2]+.13*Math.sin(Math.PI*(60+120*e)/180)]),I=[0,1,2].map(e=>[p[0]+.1*Math.cos(Math.PI*(210+120*e)/180),p[1]+K,p[2]+.1*Math.sin(Math.PI*(210+120*e)/180)]),a=e=>e.toFixed(6),i=e=>`vec3(${e.map(a).join(", ")})`,Q={id:"D07-ephemeralization",cam:[.65,2.37,5.66],target:[0,-.15,0],floor:-1.6,ring:1.9,accent:C($.D07),poster:2.6,parts:[{name:"heavy wall",view:{az:-38,el:-4,zoom:.55}},{name:"light frame",view:{az:-30,el:0,zoom:.48}},{name:"balance",view:{az:-34,el:-2,zoom:.62}},{name:"strut bundle",view:{az:-22,el:2,zoom:.4}},{name:"dome frame",view:{el:2,zoom:.72}},{name:"plastic skin",view:{el:0,zoom:.78}},{name:"test load",inside:!0,view:{az:-6,el:-14,zoom:.62}},{name:"wind",view:{az:-10,el:4,zoom:.8}},{name:"tension islands",view:{az:30,el:-2,zoom:.5}},{name:"cable and satellite",view:{az:22,el:4,zoom:.62}}],glsl:`
const vec3 NC = vec3(${a(-.5)}, ${a(-u)}, ${a(k)});
const vec3 FN = ${i(g)};
const mat3 BARY = mat3(${Y.map(a).join(", ")});
const mat3 ROTM = mat3(${M(A).map(a).join(", ")});
const float DVF = ${a(P)}, FH = ${a(S)}, THE = ${a(H)}, TH2 = ${a(F)};
const float N = 16.;
const float RD = ${a(N)};            // the dome's sphere: 25.46 ft
const vec3 CD = ${i(E)};
const float YB = ${a(B)}, YT = ${a(G)}, AD = ${a(O)}, THB = ${a(j)};
const float SRD = .0042, HBD = .0066; // the dome's struts and hubs
const float RSK = RD + .03;           // its skin
// The balance (1 ft = 0.3): pivot, beam half-length, tilt (toward the wall).
const vec3 PIV = vec3(-1.2, .18, -.42);
const float BL = .5, TILT = .245;     // 14\xB0
const vec3 IB = ${i(p)};
const vec3 IB0 = ${i(z[0])}, IB1 = ${i(z[1])}, IB2 = ${i(z[2])};
const vec3 IT0 = ${i(I[0])}, IT1 = ${i(I[1])}, IT2 = ${i(I[2])};
const vec3 COIL = vec3(.98, YB, -.78);    // the cable's coil
const vec3 SAT = vec3(.98, .5, -.78);     // the satellite

vec3 palette(int i) {
  if (i == 0) return vec3(.92, .56, .42);   // heavy wall: brick and plaster
  if (i == 1) return vec3(.62, .92, 1.);    // light frame
  if (i == 2) return vec3(.86, .86, .90);   // balance
  if (i == 3) return vec3(1., .82, .52);    // strut bundle
  if (i == 4) return vec3(.80, .92, 1.);    // dome frame
  if (i == 5) return vec3(.70, .92, 1.);    // plastic skin
  if (i == 6) return vec3(1., .66, .42);    // test load
  if (i == 7) return vec3(.55, 1., .90);    // wind
  if (i == 8) return vec3(1., .80, .50);    // tension islands
  return vec3(.72, .78, 1.);                // cable and satellite
}

float sdBox2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
float rod(vec3 p, vec3 a, vec3 b, float r) { vec3 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.); return length(pa - ba * h) - r; }

vec3 fold(vec3 p) {
  for (int i = 0; i < 5; i++) {
    p.xy = abs(p.xy);
    p -= 2. * min(0., dot(p, NC)) * NC;
  }
  return p;
}
/** The patent frame's grid at a folded direction f: distance along the sphere to the nearest line (x) and point (y). */
vec2 grid(vec3 f) {
  float cf = dot(f, FN);
  vec3 b = BARY * (f * (DVF / cf));
  vec3 w = (2. * b - 1.) * TH2;
  vec3 w2 = w * w;
  vec3 a = .5 + w * (.999967 + w2 * (-.332012 + w2 * (.185643 - .081501 * w2))) / THE;
  float s = a.x + a.y + a.z;
  vec3 G = a * (N / s);
  vec3 hl = (FH * cf * sqrt(cf) / DVF / N * RD * s * THE / (2. * TH2)) * (1. + w2);
  vec3 e = abs(fract(G + .5) - .5) * hl;
  vec3 k = floor(G + .5);
  vec3 d = G - k;
  float ex = k.x + k.y + k.z - N;
  if (ex > .5) { if (d.x <= d.y && d.x <= d.z) k.x -= 1.; else if (d.y <= d.z) k.y -= 1.; else k.z -= 1.; }
  else if (ex < -.5) { if (d.x >= d.y && d.x >= d.z) k.x += 1.; else if (d.y >= d.z) k.y += 1.; else k.z += 1.; }
  d = G - k;
  return vec2(min(e.x, min(e.y, e.z)) * .92, sqrt(dot(d, d) * (2. / 3.)) * (hl.x + hl.y + hl.z) * .3);
}
/** Shown from the zenith down to the share g (a distance bound). */
float fromTop(float d, float g, vec3 q, float r) {
  return g <= 0. ? 1e5 : g >= 1. ? d : max(d, (acos(clamp(q.y / r, -1., 1.)) - g * THB * 1.04) * RD);
}

float cutS(vec3 p) { return p.z - .3; }

float sceneDetail(vec3 p, float m) {
  int k = int(m + .5);
  if (k != 20) return 0.;
  // The wall's brick courses (2.5 in), header joints staggered (scaled: 1 ft = 0.3).
  float c = (p.y - .0) / .0625;
  float row = floor(c);
  float x = (p.x + p.z) / .2 + .5 * mod(row, 2.);
  return -.0012 * (smoothstep(.08, 0., abs(fract(c) - .5) - .42) + smoothstep(.06, 0., abs(fract(x) - .5) - .45));
}

vec2 map(vec3 p) {
  float ap = uApart;
  float bound = sdBox(p - vec3(-.18, .02 + .2 * ap, -.05), vec3(1.68, .82 + .22 * ap, 1.3 + .2 * ap));
  if (bound > .2) return vec2(bound, 0.);
  float cs = cutS(p);
  vec2 res = vec2(1e5, 0.);
  float d;

  // \u2500\u2500 The balance group: 2 balance; 0 heavy wall in the pan that drops, 1 light frame in the pan that rises.
  {
    vec3 q = p - PIV;
    float bb = sdBox(q - vec3(0., -.38, 0.), vec3(.82, .62, .3));
    if (bb > .1) res = U(res, vec2(bb, 0.));
    else {
      vec2 dir = vec2(cos(TILT), -sin(TILT));                // along the beam toward the wall's side (-x)
      vec3 eL = vec3(-dir.x * BL, dir.y * BL, 0.), eR = -eL;   // beam ends
      vec3 pL = eL - vec3(0., .4, 0.), pR = eR - vec3(0., .4, 0.);   // pans' centres
      // 2 \xB7 Balance: base, pillar, the beam on its pivot, three hangers to each pan, the pans.
      d = sdCylinder(q - vec3(0., YB - PIV.y + .02, 0.), .02, .2);
      d = min(d, rod(q, vec3(0., YB - PIV.y, 0.), vec3(0., -.02, 0.), .022));
      d = min(d, sdCylinder(q, .035, .03));
      d = min(d, rod(q, eL, eR, .016));
      d = min(d, min(length(q - eL), length(q - eR)) - .024);
      for (int s = 0; s < 2; s++) {
        vec3 e = s == 0 ? eL : eR, c = s == 0 ? pL : pR;
        vec3 h = q - c;
        float a = atan(h.z, h.x);
        float sec = TAU / 3.;
        float an = mod(a + sec * .5 + .5, sec) - sec * .5 - .5;
        vec3 rim = c + vec3(cos(a - an) * .15, .012, sin(a - an) * .15);
        d = min(d, rod(q, e, rim, .0045));
        d = min(d, max(sdCylinder(h, .008, .17), -(sdCylinder(h - vec3(0., .012, 0.), .008, .15))));
      }
      res = U(res, vec2(cutaway(rise(d, 2, p.y, YB, PIV.y + .05), cs), 22.));
      // 0 \xB7 Heavy wall: a square foot of conventional wall, 9 in of brick, on the dropping pan
      // (apart: lifted off).
      vec3 w = q - pL - vec3(0., .006 + .15 + .18 * ap, 0.);
      d = sdBox(w, vec3(.15, .15, .1125));
      res = U(res, vec2(cutaway(rise(d, 0, w.y, -.16, .16), cs), 20.));
      // 1 \xB7 Light frame: the same square foot of the patent's frame: a hub, its six struts (each 1.76 ft long, so
      // cut by the square), the plastic skin over it; standing in the rising pan (apart: lifted off).
      vec3 f = q - pR - vec3(0., .006 + .15 + .18 * ap, 0.);
      float sq = sdBox2(f.xy, vec2(.15));
      float st = 1e5;
      for (int i = 0; i < 3; i++) {
        float an = float(i) * PI / 3. + .2;
        vec2 u = vec2(cos(an), sin(an));
        st = min(st, length(vec2(dot(f.xy, vec2(-u.y, u.x)), f.z)) - .0125);
      }
      st = max(min(st, length(f) - .03), sq);
      res = U(res, vec2(cutaway(rise(st, 1, f.y, -.16, .16), cs), 21.));
      float skin = max(abs(f.z - .02) - .002, sq);
      res = U(res, vec2(SHELL(cutaway(rise(skin, 1, f.y, -.16, .16), cs)), 81.));
    }
  }

  // \u2500\u2500 The dome group (1 unit = 30 ft).
  {
    vec3 q = p - CD;
    float r = length(q);
    float clip = YB - p.y;
    // 4 \xB7 Dome frame: struts on the frequency-16 grid with their hubs (built: rising from the ground).
    float bd = max(abs(r - RD) - .02, clip);
    if (bd > .012) res = U(res, vec2(bd, 0.));
    else {
      vec2 gd = grid(fold(ROTM * q) / r);
      d = min(length(vec2(r - RD, gd.x)) - SRD, length(vec2(r - RD, gd.y)) - HBD);
      res = U(res, vec2(cutaway(rise(max(d, clip), 4, p.y, YB, YT + .02), cs), 24.));
    }
    // 5 \xB7 Plastic skin (apart: lifted; built: draped from the zenith).
    {
      vec3 s = q - vec3(0., .4 * ap, 0.);
      float rs = length(s);
      d = max(abs(rs - RSK) - .0016, YB - (p.y - .4 * ap));
      res = U(res, vec2(SHELL(cutaway(fromTop(d, built(5), s, rs), cs)), 85.));
    }
    // 6 \xB7 Test load: eleven weights hung inside from the frame (apart: slid out toward the viewer; built: lowered).
    {
      vec3 l = q - vec3(0., 0., .62 * ap);
      vec3 rp = polarRep(l, 10.);
      float top = sqrt(RD * RD - .45 * .45);
      float g6 = built(6);
      float drop = mix(top - .04, .42, g6);                 // the weights hang 0.16 above the ground
      d = sdCylinder(rp - vec3(.45, drop - .03, 0.), .028, .032);
      d = min(d, rod(rp, vec3(.45, top - .01, 0.), vec3(.45, drop, 0.), .0022));
      d = min(d, sdCylinder(l - vec3(0., drop + .02, 0.), .04, .045));
      d = min(d, rod(l, vec3(0., RD - .01, 0.), vec3(0., drop + .06, 0.), .0026));
      res = U(res, vec2(cutaway(g6 <= 0. ? 1e5 : d, cs), 26.));
    }
    // 7 \xB7 Wind: streamlines over the dome from the west, dashes running (apart: lifted; built: blowing in).
    {
      vec3 w = p - CD - vec3(0., .2 * ap, 0.);
      float k = clamp(floor((w.z + .36) / .18 + .5), 0., 4.);
      float zk = k * .18 - .36;
      float rk = sqrt(max(RD * RD - zk * zk, 0.)) + .07 + .02 * k;
      vec2 xy = w.xy;
      float ang = atan(xy.y, -xy.x);                      // 0 at the windward foot, \u03C0 at the leeward
      float arc = length(vec2(length(xy) - rk, w.z - zk));
      float base = YB - CD.y + .02;
      d = max(arc, base - xy.y) - .004;
      // The approach, level along the ground upwind and downwind.
      float lane = length(vec2(xy.y - base - .004, w.z - zk)) - .004;
      float x0 = -sqrt(max(rk * rk - base * base, 0.));
      d = min(d, max(lane, max(xy.x - x0, -x0 - .5 - xy.x)));
      d = min(d, max(lane, max(-x0 - xy.x, xy.x + x0 - .4)));
      float sx = xy.y > base ? ang * rk : (xy.x < 0. ? xy.x - x0 : xy.x + x0 + PI * rk);
      float dash = (abs(fract(sx * 5. - uTime * 1.6) - .5) - .3) / 5.;
      d = max(d, dash);
      float g7 = built(7);
      d = g7 <= 0. ? 1e5 : g7 >= 1. ? d : max(d, xy.x - (-1.1 + 2.4 * g7));
      res = U(res, vec2(cutaway(d, cs), 67.));
    }
  }

  // 3 \xB7 Strut bundle: the dome's struts packed into a bundle 2 by 4 by 5 ft, at the dome's scale: tubes in rows, two
  // straps (apart: the tubes fan up; built: stacked row by row).
  {
    vec3 q = p - vec3(-.86, YB + .0333, .18);
    float bb = sdBox(q, vec3(.12, .06, .12));
    if (bb > .05) res = U(res, vec2(bb, 0.));
    else {
      q.xz *= rot(.35);
      float g3 = built(3);
      vec3 c = q;
      c.y -= .5 * ap * max(q.x + .083, 0.);              // fanned up toward one end
      vec2 cell = vec2(.0111);                           // 12 by 6 tubes across the 4 by 2 ft end, illustrative
      vec2 id = clamp(floor((c.zy + vec2(.0667, .0333)) / cell), vec2(0.), vec2(11., 5.));
      vec2 cc = (id + .5) * cell - vec2(.0667, .0333);
      d = length(c.zy - cc) - .0045;
      d = max(d, abs(c.x) - .0833);
      float box = sdBox(c, vec3(.0833, .0333, .0667));
      d = max(d, box - .001);
      float strap = max(abs(abs(c.x) - .045) - .004, sdBox(c, vec3(.09, .036, .07)));
      strap = max(strap, -sdBox(c, vec3(.1, .0325, .0657)));
      d = min(d, strap);
      d = g3 <= 0. ? 1e5 : g3 >= 1. ? d : max(d, (c.y + .0333) / .0667 - g3);
      res = U(res, vec2(cutaway(d, cs), 23.));
    }
  }

  // 8 \xB7 Tension islands: compression reduced to small islands in a sea of tension: three short struts, not touching,
  // in a net of cables (apart: the struts move out; built: struts rise, then cables).
  {
    vec3 q = p - IB;
    float bb = sdBox(q - vec3(0., .18, 0.), vec3(.2 + .1 * ap, .22, .2 + .1 * ap));
    if (bb > .05) res = U(res, vec2(bb, 0.));
    else {
      float ds = 1e5, dc = 1e5;
      for (int i = 0; i < 3; i++) {
        vec3 a = i == 0 ? IB0 : i == 1 ? IB1 : IB2, b = i == 0 ? IT0 : i == 1 ? IT1 : IT2;
        vec3 n = i == 0 ? IB1 : i == 1 ? IB2 : IB0, m = i == 0 ? IT1 : i == 1 ? IT2 : IT0;
        vec3 l = i == 0 ? IT2 : i == 1 ? IT0 : IT1;
        vec3 o = normalize(vec3((a + b).x * .5 - IB.x, 0., (a + b).z * .5 - IB.z)) * (.08 * ap);
        ds = min(ds, rod(p - o, a, b, .014));
        dc = min(dc, min(rod(p, a, n, .0032), rod(p, b, m, .0032)));
        dc = min(dc, rod(p, a, l, .0032));
      }
      float g8 = built(8);
      res = U(res, vec2(cutaway(rise(ds, 8, p.y, IB.y, IB.y + .37), cs), 28.));
      res = U(res, vec2(cutaway(g8 < .5 ? 1e5 : rise(dc, 8, p.y, IB.y - .37, IB.y + .37), cs), 68.));
    }
  }

  // 9 \xB7 Cable and satellite: a coil of heavy ocean cable on the ground, one small satellite above it (apart: the
  // satellite climbs; built: the coil winds up, then the satellite).
  {
    vec3 q = p - COIL;
    float bb = sdBox(q - vec3(0., .2, 0.), vec3(.3, .22, .3));
    if (bb > .05) res = U(res, vec2(bb, 0.));
    else {
      d = max(sdHelix(q, .2, .066, 0., .03), max(-q.y + .03, q.y - .35));
      d = min(d, max(length(q.xz) - .21, abs(q.y - .006) - .006));
      res = U(res, vec2(cutaway(rise(d, 9, p.y, YB, YB + .38), cs), 29.));
    }
    vec3 s = p - SAT - vec3(0., .25 * ap, 0.);
    float sb = length(s) - .34;
    if (sb > .05) res = U(res, vec2(sb, 0.));
    else {
      s.xz *= rot(.6);
      s /= 1.3;
      d = sdRoundBox(s, vec3(.045, .06, .045), .006);                       // the body
      d = min(d, rod(s, vec3(-.2, 0., 0.), vec3(.2, 0., 0.), .004));       // the panels' boom
      float panel = sdBox(vec3(abs(s.x) - .14, s.y, s.z), vec3(.085, .002, .045));
      d = min(d, length(s - vec3(0., -.075, 0.)) - .02);                   // the antenna feed
      float dish = max(abs(length(s - vec3(0., -.03, 0.)) - .07) - .003, s.y + .07);
      d = min(d, dish);
      float g9 = built(9);
      float show = g9 >= 1. ? -1. : .7 - g9;                               // after the coil
      res = U(res, vec2(cutaway(max(d * 1.3, show), cs), 29.));
      vec2 cell = abs(fract(vec2((abs(s.x) - .055) / .034, s.z / .03)) - .5);
      res = U(res, vec2(cutaway(max(panel * 1.3, show), cs), max(cell.x, cell.y) < .42 ? 69. : 29.));
    }
  }

  // Not parts: a round platform under the dome group, small ones under the islands.
  d = sdCylinder(p - vec3(CD.x - .05, YB - .02, CD.z), .02, 1.1);
  d = min(d, sdCylinder(p - vec3(IB.x, YB - .01, IB.z), .015, .2));
  res = U(res, vec2(d, 4.));
  return res;
}
`};export{Q as scene};
