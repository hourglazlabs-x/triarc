import{a as h}from"./chunk-4QM5HSGV.js";import{a as d}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var i=-.2,u=-.765,m=1.245,p=1.47,b=1.7,l=e=>{let t=Math.sin(e*127.1+311.7)*43758.5453;return t-Math.floor(t)},a=e=>e.toFixed(4),f=(e,t,c)=>{let r=e*Math.PI/180;return[t*Math.sin(r),c,u+t*Math.cos(r)]},g=[0,1,2,3,4,5,6].map(e=>f(-30+10*e,m,i+.405+(e%2?-.022:.022)+.01*(l(e)-.5))),x=[0,1,2,3,4,5,6].map(e=>f(-30+10*e,p,i+.355+(e%2?.024:-.024)+.01*(l(e+9)-.5))),y=[0,1,2,3,4,5,6,7].map(e=>f(-35+10*e,b,i+.3+(e%2?-.02:.02)+.01*(l(e+19)-.5))),w=(e,t)=>{let c=l(t+40)*Math.PI*2,r=.04+.04*l(t+60);return[e[0]+Math.cos(c)*r,e[2]+Math.sin(c)*r]},v=e=>`vec3(${e.map(a).join(", ")})`,q=x.map((e,t)=>`vec2(${w(e,t).map(a).join(", ")})`).join(", "),z=y.map((e,t)=>`vec2(${w(e,t+10).map(a).join(", ")})`).join(", "),n=(e,t,c)=>Array.from({length:e},(r,s)=>a(t*(.85+.3*l(s+c)))).join(", "),o={y:i-.75,z:.1,rx:1.6,ry:1,rz:1.5},P=[[-1.22,-.32,.62],[-.6,-1,.55],[.56,-1.02,.66],[1.24,-.28,.58],[1.2,.5,.6]].map(([e=0,t=0,c=0])=>{let r=1-(e/o.rx)**2-((t-o.z)/o.rz)**2,s=Math.min(i,o.y+o.ry*Math.sqrt(Math.max(r,0)));return`vec4(${a(e)}, ${a(s)}, ${a(t)}, ${a(c)})`}),A={id:"D03-crypt",cam:[2.08,1.28,4.55],target:[0,-.05,.08],floor:-.8,ring:2,accent:d(h.D03),poster:1.5,parts:[{name:"hilltop site",view:{el:2,zoom:1.05}},{name:"rough walls",view:{az:-14,el:4,zoom:.8}},{name:"basalt columns",inside:!0,view:{el:24,zoom:.55}},{name:"brick columns",inside:!0,view:{az:-20,el:20,zoom:.62}},{name:"brick ribs",inside:!0,view:{az:18,el:16,zoom:.6}},{name:"flat roof",view:{el:22,zoom:.8}},{name:"butterfly windows",view:{az:-95,el:-2,zoom:.62}},{name:"porch",view:{az:-8,el:-8,zoom:.68}},{name:"porch vaults",view:{az:-8,el:10,zoom:.6}},{name:"porch stair",view:{az:30,el:6,zoom:.72}},{name:"entrance mosaic",view:{az:-25,el:-12,zoom:.46}},{name:"benches",inside:!0,view:{az:-10,el:30,zoom:.55}}],glsl:`
const float F0 = ${a(i)};                 // the floor
const float RH = F0 + .5;                  // the flat roof
const vec2 NC = vec2(0., -.2), NA = vec2(.92, .68);   // the nave: centre and half-axes in plan
const vec2 PC0 = vec2(0., ${a(u)});      // the porch's arcs: centre and radii
const float RW = ${a(m)}, RM = ${a(p)}, RO = ${a(b)};
const vec3 WP[7] = vec3[7](${g.map(v).join(", ")});
const vec3 MP[7] = vec3[7](${x.map(v).join(", ")});
const vec3 OP[8] = vec3[8](${y.map(v).join(", ")});
const vec2 MF[7] = vec2[7](${q});    // the pillars' feet
const vec2 OF[8] = vec2[8](${z});
const float RWR[6] = float[6](${n(6,.045,3)});   // the arches' rises: facade row, middle, outer, diagonals
const float RMR[6] = float[6](${n(6,.04,7)});
const float ROR[7] = float[7](${n(7,.036,11)});
const float RDR[7] = float[7](${n(7,.034,17)});
const vec4 PINE[5] = vec4[5](${P.join(", ")});   // x, foot height, z, height
const vec3 ST[3] = vec3[3](vec3(1.02, F0, .2), vec3(.56, F0 + .5, .7), vec3(.17, F0 + .56, .58));   // the stair's path

vec3 palette(int i) {
  if (i == 0) return vec3(.58, .80, .52);    // hilltop site, pines
  if (i == 1) return vec3(.84, .55, .40);    // rough walls: burnt brick, slag
  if (i == 2) return vec3(.52, .58, .70);    // basalt columns
  if (i == 3) return vec3(.96, .60, .42);    // brick columns
  if (i == 4) return vec3(1., .72, .48);     // brick ribs
  if (i == 5) return vec3(.88, .84, .78);    // flat roof
  if (i == 6) return vec3(.55, .86, 1.);     // butterfly windows
  if (i == 7) return vec3(.92, .66, .50);    // porch
  if (i == 8) return vec3(1., .82, .56);     // porch vaults
  if (i == 9) return vec3(.82, .82, .90);    // porch stair
  if (i == 10) return vec3(.42, .96, .76);   // entrance mosaic: glazed ceramic
  return vec3(.88, .70, .48);                // benches: packaging wood
}

float slab(float y, float lo, float hi) { return max(lo - y, y - hi); }
float box2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
/** The section: everything above the ribs' crowns (the roof) is lifted off, to look in from above. */
float cutS(vec3 p) { return p.y - (F0 + .455); }

/** An arch between P and Q rising by rise at its middle (a parabola in their vertical plane), radius r. */
float arch(vec3 p, vec3 P, vec3 Q, float rise, float r) {
  vec2 d = Q.xz - P.xz; float L = max(length(d), 1e-3); vec2 u = d / L;
  vec2 rel = p.xz - P.xz;
  float x = dot(rel, u), z = rel.x * u.y - rel.y * u.x;
  float w = clamp(x / L, 0., 1.);
  float y = mix(P.y, Q.y, w) + rise * 4. * w * (1. - w);
  float sl = ((Q.y - P.y) + rise * 4. * (1. - 2. * w)) / L;
  return length(vec3(x - w * L, (p.y - y) * inversesqrt(1. + sl * sl), z)) - r;
}
/** A leaning column from foot a to head b: basalt (hewn, six-sided, s > .5) or brick (round, in courses); a capital. */
float column(vec3 p, vec3 a, vec3 b, float r, float basalt, float seed) {
  vec3 ba = b - a; float L = length(ba); vec3 u = ba / L;
  float t = dot(p - a, u);
  vec3 v = p - a - u * clamp(t, 0., L);
  float c = cos(seed * 3.1), s = sin(seed * 3.1);
  vec2 w = vec2(c * v.x - s * v.z, s * v.x + c * v.z);
  float rad = basalt > .5 ? max(abs(w.x) * .866 + abs(w.y) * .5, abs(w.y)) + .005 * sin(t * 61. + seed * 7.)
                          : length(w) + .0035 * smoothstep(.32, .5, abs(fract(t / .021) - .5));
  float d = max(rad - r, max(-t, t - L)) * .85;
  return min(d, sdBox(p - b - vec3(0., .012, 0.), vec3(r * 1.45, .012, r * 1.45)));
}
/** A flight of n steps from a (foot) to b (head), half-width hw, on a sloping slab. */
float flight(vec3 p, vec3 a, vec3 b, float hw, float n) {
  vec2 d = b.xz - a.xz; float L = length(d); vec2 u = d / L;
  vec2 rel = p.xz - a.xz;
  float al = dot(rel, u), ac = rel.x * u.y - rel.y * u.x;
  float k = clamp(floor(al / L * n), 0., n - 1.);
  float top = a.y + (k + 1.) * (b.y - a.y) / n;
  float soffit = a.y + clamp(al / L, 0., 1.) * (b.y - a.y) - .06;
  return max(max(p.y - top, soffit - p.y), max(abs(ac) - hw, max(-al, al - L))) * .7;
}
/** Barycentric (weights of P1, P2) of x in the triangle V, P1, P2. */
vec2 bary(vec2 x, vec2 V, vec2 P1, vec2 P2) {
  vec2 e1 = P1 - V, e2 = P2 - V, q = x - V;
  float det = e1.x * e2.y - e1.y * e2.x;
  return vec2(q.x * e2.y - q.y * e2.x, e1.x * q.y - e1.y * q.x) / det;
}

vec2 map(vec3 p) {
  float ua = uApart;
  float bound = sdBox(p - vec3(0., F0 + .15 + .25 * ua, .05 + .2 * ua), vec3(1.65, .65 + .55 * ua, 1.6 + .3 * ua));
  if (bound > .25) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  float bNave = sdBox(p - vec3(0., F0 + .28 + .35 * ua, -.2), vec3(1.0, .36 + .45 * ua, .78 + .5 * ua));
  float bPorch = sdBox(p - vec3(.1, F0 + .3 + .35 * ua, .55 + .45 * ua), vec3(1.05, .38 + .4 * ua, .5));

  // 0 \xB7 The hilltop site: a hill with a terrace for the church, and umbrella pines on its slopes.
  {
    vec3 q = p - apart(vec3(0., -.4, 0.));
    float d = max(max(sdEllipsoid(q - vec3(0., ${a(o.y)}, ${a(o.z)}), vec3(${a(o.rx)}, ${a(o.ry)}, ${a(o.rz)})), q.y - F0), F0 - .4 - q.y);
    for (int i = ZERO; i < 5; i++) {
      vec4 t = PINE[i];
      vec3 l = q - t.xyz;
      if (dot(l.xz, l.xz) < .09) {
        d = min(d, sdCapsule(l, vec3(0.), vec3(.04, t.w, .02), .016));
        d = min(d, sdEllipsoid(l - vec3(.04, t.w + .02, .02), vec3(.21, .065, .2)));
      } else d = min(d, length(l.xz) - .24);
    }
    res = U(res, vec2(cutaway(rise(d, 0, q.y, F0 - .4, F0 + .75), cutS(q)), 20.));
  }

  if (bNave < .2) {
    float g1 = built(1), g5 = built(5), g6 = built(6);
    // 1 \xB7 Rough walls round the oval, with the door at the front and an opening for each of the 22 windows.
    vec3 q = p - apart(vec3(0., -.04, -.5));
    vec2 n = (q.xz - NC) / NA;
    float rho = length(n), an = atan(n.x, n.y);
    // 11 windows each side of the door, spread over the rest of the wall.
    float aa = abs(an), wcell = clamp(floor((aa - .2) / (PI - .2) * 11.), 0., 10.);
    vec2 wu = vec2((aa - .2 - (wcell + .5) / 11. * (PI - .2)) * .78, q.y - (F0 + .26));
    // A butterfly: two wings tilted apart.
    vec2 wl = vec2(abs(wu.x) - .036, wu.y);
    wl = vec2(.9 * wl.x - .43 * wl.y, .43 * wl.x + .9 * wl.y);
    float win = (length(wl / vec2(.037, .072)) - 1.) * .037;
    {
      float d = max(abs((rho - .965) * NA.y) - .024, slab(q.y, F0, RH));
      d += .0035 * sin(q.x * 61.) * sin(q.y * 47.) * sin(q.z * 53.);
      vec2 dq = vec2(an * .68, q.y - F0);
      float door = min(box2(dq - vec2(0., .1), vec2(.06, .1)), length(dq - vec2(0., .2)) - .06);
      d = max(d, -min(win, door));
      res = U(res, vec2(cutaway(rise(d, 1, q.y, F0, RH), cutS(q)), 21.));
    }
    // 6 \xB7 Butterfly windows: a glowing pane of stained glass in each opening, behind a lattice of loom needles.
    if (g6 > 0.) {
      vec3 o = q - apart(vec3(0., .14, -.06));
      float rr = abs((rho - .965) * NA.y);
      float pane = max(max(win, rr - .003), wu.y - mix(-.1, .1, g6));
      res = U(res, vec2(cutaway(pane, cutS(o)), 66.));
      float bars = max(max(abs(fract(wu.x / .014) - .5) * .014 - .0013, win - .004), abs(rr - .012) - .0025);
      bars = min(bars, max(abs(win) - .003, rr - .016));
      res = U(res, vec2(cutaway(max(bars, wu.y - mix(-.1, .1, g6)), cutS(o)), 26.));
    }
    // 5 \xB7 The flat roof, over the walls.
    if (g5 > 0.) {
      vec3 o = p - apart(vec3(0., .8, 0.));
      float rr = length((o.xz - NC) / NA);
      float d = max(max(abs(o.y - (RH + .002)) - .022, (rr - 1.01) * NA.y), rr - 1.1 * g5);
      res = U(res, vec2(cutaway(d, cutS(o)), 25.));
    }
    // 2 \xB7 Four basalt columns at the centre, hewn, leaning outward; 3 \xB7 twelve brick columns round them, each leaning
    // its own way; 4 \xB7 brick ribs from column to column and out to the walls, under the roof.
    {
      float g2 = built(2), g3 = built(3), g4 = built(4);
      vec3 qb = p - apart(vec3(0., .14, 0.));
      vec2 sq = vec2(qb.x < NC.x ? -1. : 1., qb.z < NC.y ? -1. : 1.);
      float seed = sq.x + 2. * sq.y;
      vec2 ba = NC + sq * vec2(.17, .13), bt = NC + sq * vec2(.23 + .015 * seed, .19 - .01 * seed);
      if (g2 > 0.) {
        float d = column(qb, vec3(ba.x, F0, ba.y), vec3(bt.x, F0 + .315, bt.y), .033, 1., seed);
        res = U(res, vec2(cutaway(rise(d, 2, qb.y, F0, F0 + .34), cutS(qb)), 22.));
      }
      vec3 qc = p - apart(vec3(0., .07, 0.));
      vec2 m = (qc.xz - NC) / (NA * .62);
      float k0 = floor(atan(m.y, m.x) / (TAU / 12.));
      vec3 top0, top1;
      float dc = 1e5;
      for (int i = ZERO; i < 2; i++) {
        float k = k0 + float(i), a = k * TAU / 12., hk = hash11(mod(k, 12.) * 3.7 + 1.);
        vec2 b = NC + NA * .62 * vec2(cos(a), sin(a));
        vec3 tp = vec3(b + .05 * vec2(cos(hk * TAU), sin(hk * TAU)), F0 + .29 + .02 * hk).xzy;
        if (i == 0) top0 = tp; else top1 = tp;
        dc = min(dc, column(qc, vec3(b.x, F0, b.y), tp, .027, 0., k));
      }
      if (g3 > 0.) res = U(res, vec2(cutaway(rise(dc, 3, qc.y, F0, F0 + .33), cutS(qc)), 23.));
      if (g4 > 0.) {
        vec3 qr = p - apart(vec3(0., .44, 0.));
        float crown = RH - .026, d = 1e5;
        for (int i = ZERO; i < 4; i++) {   // the ring between the two nearest, each out to the wall, one in to basalt
          vec3 a = (i == 1 ? top1 : top0) + vec3(0., .024, 0.), b;
          if (i == 0) b = top1 + vec3(0., .024, 0.);
          else if (i == 3) b = vec3(bt.x, F0 + .34, bt.y);
          else b = vec3(NC + ((i == 1 ? top1.xz : top0.xz) - NC) * 1.53, F0 + .3).xzy;
          d = min(d, arch(qr, a, b, crown - .012 - max(a.y, b.y), .015));
        }
        res = U(res, vec2(cutaway(rise(d, 4, qr.y, F0 + .28, RH), cutS(qr)), 24.));
      }
    }
    // 11 \xB7 Benches in rows before the altar, either side of the aisle: wooden seats and backs on iron.
    {
      float g11 = built(11);
      if (g11 > 0.) {
        vec3 o = p - apart(vec3(0., -.08, .16));
        vec2 bq = vec2(abs(o.x - NC.x), o.z);
        float row = clamp(round((bq.y - .02) / .07), 0., 2.);
        vec3 l = vec3(bq.x - .12, o.y - F0, bq.y - (.02 + row * .07));
        float d = min(sdBox(l - vec3(0., .048, 0.), vec3(.075, .005, .02)), sdBox(l - vec3(0., .085, .018), vec3(.075, .028, .004)));
        d = min(d, sdBox(vec3(abs(l.x) - .066, l.y - .05, l.z), vec3(.004, .05, .019)));
        res = U(res, vec2(cutaway(rise(d, 11, o.y, F0, F0 + .12), cutS(o)), 31.));
      }
    }
    // 10 \xB7 The entrance mosaic: trencad\xEDs of glazed ceramic and brick over the door, on the facade.
    {
      float g10 = built(10);
      if (g10 > 0. && abs(an) < .35) {
        vec3 o = p - apart(vec3(0., .16, .22));
        vec2 m2 = (o.xz - NC) / NA;
        float x = atan(m2.x, m2.y) * .68, y = o.y - (F0 + .29);
        float face = (length(m2) - 1.003) * NA.y;
        float panel = max(box2(vec2(x, y + .02), vec2(.13, .05)), -(y + .05)) ;
        panel = min(panel, max(length(vec2(x, y - .03)) - .13, -y - .02));
        panel = max(panel, y - mix(-.1, .17, g10));
        vec2 tl = vec2(x, y) / .02;
        tl.x += .5 * floor(tl.y);
        vec2 cell = floor(tl);
        float hgt = .003 + .003 * hash21(cell);
        float grout = min(abs(fract(tl.x) - .5), abs(fract(tl.y) - .5));
        float d = max(panel, abs(face - hgt * .5) - hgt * .5) + .0015 * smoothstep(.42, .5, 1. - grout);
        bool glaze = hash21(cell + 3.1) > .45;
        res = U(res, vec2(cutaway(d, cutS(o)), glaze ? 70. : 30.));
      }
    }
  } else res = U(res, vec2(bNave, 0.));

  if (bPorch < .2) {
    float g7 = built(7), g8 = built(8), g9 = built(9);
    // The porch's plan: three arcs of nodes, a strip of trapezoids (facade to middle row) and of triangles (middle
    // to outer row). Each vault is ruled: straight lines join two of its arches (its guides) point by point.
    vec3 q = p - apart(vec3(0., -.02, .45));
    vec2 pr = q.xz - PC0;
    float r = length(pr), th = degrees(atan(pr.x, pr.y));
    float thc = clamp(th, -34.9, 34.9), rc = clamp(r, RW, RO);
    vec3 A0, A1, B0, B1; float rA, rB, s, v, cid;
    if (rc < RM) {
      int i = int(clamp(floor((thc + 30.) / 10.), 0., 5.));
      A0 = WP[i]; A1 = WP[i + 1]; B0 = MP[i]; B1 = MP[i + 1]; rA = RWR[i]; rB = RMR[i];
      s = (thc - (-30. + 10. * float(i))) / 10.; v = (rc - RW) / (RM - RW); cid = float(i);
    } else {
      float w = (rc - RM) / (RO - RM), u = thc + 35.;
      int j = int(clamp(floor(u / 10.), 0., 6.));
      float a = u - 10. * float(j);
      int t = a < 5. * (1. - w) ? (j > 0 ? 2 : 1) : a > 5. + 5. * w ? (j < 6 ? 3 : 1) : 1;
      vec2 x2 = vec2(u, w), V, P1, P2;
      if (t == 1) {   // outer pair and the middle pillar between: guides the outer arch and a diagonal from O[j+1]
        A0 = OP[j + 1]; A1 = OP[j]; B0 = OP[j + 1]; B1 = MP[j]; rA = ROR[j]; rB = RDR[j]; cid = 6. + float(j);
        V = vec2(10. * float(j) + 10., 1.); P1 = vec2(10. * float(j), 1.); P2 = vec2(10. * float(j) + 5., 0.);
      } else {        // middle pair and the outer pillar between: guides the middle arch and a diagonal from M[i]
        int i = t == 2 ? j - 1 : j;
        A0 = MP[i]; A1 = MP[i + 1]; B0 = MP[i]; B1 = OP[i + 1]; rA = RMR[i]; rB = RDR[i]; cid = 13. + float(i);
        V = vec2(10. * float(i) + 5., 0.); P1 = vec2(10. * float(i) + 15., 0.); P2 = vec2(10. * float(i) + 10., 1.);
      }
      vec2 l = bary(x2, V, P1, P2);
      s = l.x + l.y; v = l.y / max(s, 1e-4);
    }
    s = clamp(s, 0., 1.); v = clamp(v, 0., 1.);
    float outP = max(max(RW - r, r - RO), (abs(th) - 35.) * r * .01745);
    // 8 \xB7 The vaults: the ruled surface, a thin brick shell, its straight generating lines raised; crosses on 13.
    if (g8 > 0.) {
      vec3 o = q - apart(vec3(0., .32, 0.));
      float hA = mix(A0.y, A1.y, s) + rA * 4. * s * (1. - s), hB = mix(B0.y, B1.y, s) + rB * 4. * s * (1. - s);
      float hv = mix(hA, hB, v);
      float rule = abs(fract(s * 6.) - .5) / 6. * .22;
      float d = max((abs(o.y - hv + .01) - .009 - .0035 * (1. - smoothstep(0., .007, rule))) * .75, outP);
      d = max(d, s - g8 * 1.02);
      res = U(res, vec2(cutaway(d, cutS(o)), 28.));
      if (mod(cid, 3.) != 1.) {
        vec2 c = vec2(s - .5, v - .5);
        float cr = min(box2(c, vec2(.2, .035)), box2(c, vec2(.035, .2))) * .2;
        float dx = max(max(cr, abs(o.y - hv + .022) - .003), outP);
        res = U(res, vec2(cutaway(max(dx, s - g8 * 1.02), cutS(o)), 68.));
      }
    }
    // 7 \xB7 The porch: leaning pillars of basalt and brick under the middle and outer nodes, corbels on the facade, and
    // the arches along the vaults' edges (straight where a vault's edge is one of its straight lines).
    if (g7 > 0.) {
      float d = 1e5;
      for (int k = ZERO; k < 2; k++) {
        int i = k == 0 ? int(clamp(round((th + 30.) / 10.), 0., 6.)) : int(clamp(round((th + 35.) / 10.), 0., 7.));
        vec3 top = k == 0 ? MP[i] : OP[i];
        vec2 ft = k == 0 ? MF[i] : OF[i];
        float id = float(i) + 7. * float(k);
        d = min(d, column(q, vec3(ft.x, F0, ft.y), top - vec3(0., .026, 0.), .026, mod(id, 2.), id));
      }
      int iw = int(clamp(round((th + 30.) / 10.), 0., 6.));
      d = min(d, sdBox(q - WP[iw] + vec3(0., .025, 0.), vec3(.03, .025, .03)));
      for (int e = ZERO; e < 4; e++) {
        vec3 P = e == 0 ? A0 : e == 1 ? B0 : e == 2 ? A1 : A0, Q = e == 0 ? A1 : e == 1 ? B1 : e == 2 ? B1 : B0;
        float rs = e == 0 ? rA : e == 1 ? rB : 0.;
        if (length(Q.xz - P.xz) > .01) d = min(d, arch(q, P - vec3(0., .016, 0.), Q - vec3(0., .016, 0.), rs, .015));
      }
      res = U(res, vec2(cutaway(rise(d, 7, q.y, F0, F0 + .47), cutS(q)), 27.));
    }
    // 9 \xB7 The stair over the porch, toward the upper church that was never built, turned aside round a pine.
    if (g9 > 0.) {
      vec3 o = p - apart(vec3(0., .62, .5));
      float d = 1e5;
      for (int i = ZERO; i < 2; i++) d = min(d, flight(o, ST[i], ST[i + 1], .055, i == 0 ? 13. : 3.));
      d = min(d, sdBox(o - ST[1] + vec3(0., .03, 0.), vec3(.075, .03, .075)));
      res = U(res, vec2(cutaway(max(d, o.y - mix(F0, F0 + .6, g9)), cutS(o)), 29.));
    }
  } else res = U(res, vec2(bPorch, 0.));
  return res;
}
`};export{A as scene};
