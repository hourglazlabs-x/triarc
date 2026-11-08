import{a as b}from"./chunk-WFBFTKL4.js";import{a as p}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var m=1.05,x=1.15,h=Math.SQRT1_2,R=20/20/Math.SQRT2,q=(m-R+x)*h,w=.39,l=[-.42,.25],g=.3,c=[.38,-.4],u=[.42,.3],o=(()=>{let e=[c[0]-l[0],c[1]-l[1]],a=Math.hypot(e[0]??0,e[1]??0);return[(e[0]??0)/a,(e[1]??0)/a]})(),v=o[0]*(l[0]+c[0])*.5+o[1]*(l[1]+c[1])*.5;function k(e,a,s){let n=1e5,r=(f,d)=>{f>1e-4&&(n=Math.min(n,d/f))};r(a[1],x-.035-e[1]),r(a[0],m-.035-e[0]),r((a[0]+a[1])*h,q-.035-(e[0]+e[1])*h),r(-a[1],x-.035+e[1]),r(-a[0],m-.035+e[0]);let i=s?1:-1;return r(i*(o[0]*a[0]+o[1]*a[1]),i*(v-(o[0]*e[0]+o[1]*e[1]))),n}function T(e,a){let s=o[0]*e+o[1]*a<v,n=s?l:c,r=[e-n[0],a-n[1]],i=Math.hypot(r[0],r[1]),f=[r[0]/i,r[1]/i],d=s?g+.025:1/Math.hypot(f[0]/u[0],f[1]/u[1])+.025,y=Math.min(k(n,f,s)-d,.8),z=i-d,Y=.3*y*Math.max(0,1-(2*z/y-1)**2);return w+Math.max(.1,Y+.02)+.006}var C=[[-.42,.78,0],[-.86,0,0],[-.05,.42,0],[-.85,.72,1],[-.75,-.4,9],[-.1,.9,4],[-.3,-.25,4],[-.62,.92,3],[.38,.12,0],[.88,.12,0],[0,-.85,0],[.85,-.95,1],[.55,.45,9],[-.15,-.5,7],[.45,-.95,4],[.88,-.55,4],[.55,.15,3]],t=e=>e.toFixed(4),S=C.map(([e,a,s])=>`vec4(${t(e)}, ${t(a)}, ${t(T(e,a))}, ${s}.)`).join(", "),B={id:"D03-mila",cam:[3.79,2.6,4.69],target:[0,-.08,0],floor:-1.65,ring:2.2,accent:p(b.D03),poster:1.5,parts:[{name:"basement garage",inside:!0,view:{el:-12,zoom:.8}},{name:"wheel girder",inside:!0,view:{az:-8,el:30,zoom:.7}},{name:"stone pillars",inside:!0,view:{el:-4,zoom:.8}},{name:"two courtyards",inside:!0,view:{el:22,zoom:.85}},{name:"floors of flats",inside:!0,view:{el:4,zoom:.85}},{name:"stone fa\xE7ade",view:{az:-12,el:-10,zoom:.85}},{name:"iron balconies",view:{az:-16,el:-8,zoom:.7}},{name:"attic arches",inside:!0,view:{el:8,zoom:.68}},{name:"stairwell exits",view:{el:14,zoom:.7}},{name:"chimneys",view:{az:10,el:18,zoom:.7}},{name:"ventilation towers",view:{az:-10,el:14,zoom:.7}}],glsl:`
const float XE = ${t(m)}, ZE = ${t(x)}, S2 = ${t(h)}, CH = ${t(q)};  // the plan: half-sizes, the chamfer's line
const float Y0 = -.95;          // the street
const float YB = -1.17;         // the garage's floor
const float YF = -.63;          // the first residential floor; six floors of FH up to the attic
const float FH = .17;
const float YAT = ${t(w)};          // the attic's floor
const float YP = .52;           // the parapet
const vec2 CR = vec2(${t(l[0])}, ${t(l[1])}); const float RR = ${t(g)};   // the round courtyard (12 m across)
const vec2 CO = vec2(${t(c[0])}, ${t(c[1])}); const vec2 RO = vec2(${t(u[0])}, ${t(u[1])});   // the oval one
const vec2 NB = vec2(${t(o[0])}, ${t(o[1])}); const float KB = ${t(v)};   // the line between the two houses' roofs
const vec2 NC = vec2(${t(-o[1])}, ${t(o[0])});    // the section's normal, toward the corner
const vec4 ROOF[17] = vec4[17](${S});

vec3 palette(int i) {
  if (i == 0) return vec3(.70, .78, .92);   // basement garage
  if (i == 1) return vec3(1., .66, .38);    // wheel girder: iron
  if (i == 2) return vec3(.96, .88, .72);   // stone pillars
  if (i == 3) return vec3(.52, .84, 1.);    // two courtyards
  if (i == 4) return vec3(.80, .84, .94);   // floors of flats
  if (i == 5) return vec3(.99, .93, .80);   // stone fa\xE7ade: limestone
  if (i == 6) return vec3(.62, .72, .90);   // iron balconies
  if (i == 7) return vec3(.96, .58, .40);   // attic arches: brick
  if (i == 8) return vec3(.94, .84, .70);   // stairwell exits
  if (i == 9) return vec3(.80, .96, .78);   // chimneys
  return vec3(.80, .88, 1.);                // ventilation towers
}

float sdRRect(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, 0.)) + min(max(q.x, q.y), 0.) - r; }
/** A smooth periodic wave from -1 to 1 without trigonometry. */
float pwave(float x) { float u = fract(x) * 2. - 1.; return 4. * abs(u) * (1. - abs(u)) * sign(u); }
/** The plan's outline: positive outside, the five faces' distances combined. */
float plan(vec2 xz) { return max(max(max(xz.y - ZE, xz.x - XE), (xz.x + xz.y) * S2 - CH), max(-xz.y - ZE, -xz.x - XE)); }
/** Outside the oval courtyard, scaled to stay a bound. */
float oval(vec2 xz) { return (length((xz - CO) / RO) - 1.) * RO.y; }

/** The section: a vertical plane through both courtyards' centres; the corner's side is removed. */
float cutS(vec3 q) { return dot(q.xz - CR, NC); }

// Each part's function takes the nearest distance found so far (best) and skips what cannot come nearer.

// 0 \xB7 The basement garage: its floor and walls, the two ramps up into the courtyards, and the cast-iron pillars that
// carry the oval courtyard's floor.
float ramp(vec3 q, vec3 a, vec3 b, float w) {
  vec3 m = (a + b) * .5, ax = normalize(b - a);
  vec3 sd = normalize(cross(ax, vec3(0., 1., 0.))), up = cross(sd, ax);
  vec3 r = q - m;
  return max(max(abs(dot(r, up)) - .008, abs(dot(r, sd)) - w), abs(dot(r, ax)) - length(b - a) * .5);
}
float garage(vec3 q, float best) {
  float n = plan(q.xz);
  float d = max(abs(n + .015) - .015, max(YB - q.y, q.y - Y0 + .012));
  d = min(d, max(abs(q.y - YB) - .012, n));
  vec3 s = vec3(q.x - CO.x, q.y, q.z - CO.y);
  s = polarRep(s, 6.);
  d = min(d, max(length(s.xz - vec2(.2, 0.)) - .009, max(YB - q.y, q.y - Y0)));
  d = min(d, ramp(q, vec3(CR.x + .05, Y0 - .02, CR.y - .18), vec3(CR.x + .05, YB + .01, CR.y - .78), .045));
  d = min(d, ramp(q, vec3(CO.x - .22, Y0 - .02, CO.y + .05), vec3(CO.x - .82, YB + .01, CO.y + .05), .045));
  return d;
}

// 1 \xB7 The wheel girder under the round courtyard: two concentric ring girders tensioned by sixteen radial beams,
// 0.8 m deep (.04), carrying the courtyard's floor 12 m across.
float girder(vec3 q) {
  vec2 r = q.xz - CR;
  float l = length(r);
  float rings = min(abs(l - RR + .008) - .008, abs(l - .12) - .007);
  vec3 s = polarRep(vec3(r.x, 0., r.y), 16.);
  float spokes = max(abs(s.z) - .004, max(.12 - s.x, s.x - RR + .01));
  return max(min(rings, spokes), abs(q.y - (Y0 - .032)) - .02);
}

// 2 \xB7 The stone pillars: a grid of round pillars through all the floors, none where the courtyards are.
float pillars(vec3 q) {
  vec2 c = floor(q.xz / .3 + .5) * .3;
  vec2 l = q.xz - c;
  bool ok = plan(c) < -.08 && length(c - CR) > RR + .07 && length((c - CO) / RO) > 1.2;
  float d = ok ? length(l) - .022 : .278 - max(abs(l.x), abs(l.y));
  return max(d, max(Y0 - q.y, q.y - YAT));
}

// 3 \xB7 The two courtyards: their walls with windows on every floor, and their floors (translucent, so the girder and
// the garage show under them). Returns (walls, floors).
float storeyBand(float y, out float yc, out float h) {
  if (y < YF) { yc = Y0 + .145; h = .11; return 0.; }
  if (y < YAT) { float k = floor((y - YF) / FH); yc = YF + k * FH + .085; h = .05; return 1. + k; }
  yc = YAT + .06; h = .025; return 7.;
}
vec2 courts(vec3 q, float best) {
  vec2 r1 = q.xz - CR, r2 = q.xz - CO;
  float l1 = length(r1), e2 = oval(q.xz);
  float inY = max(Y0 - q.y, q.y - YP);
  float w = min(abs(l1 - RR - .0125) - .0125, abs(e2 - .0125) - .0125);
  w = max(w, inY);
  if (w < best + .02) {
    float yc, h;
    float k = storeyBand(q.y, yc, h);
    bool one = l1 - RR < e2;
    vec2 r = one ? r1 : r2;
    float a = atan(r.y, r.x), da = TAU / (one ? 16. : 22.);
    float t = (a - floor(a / da + .5) * da) * length(r);
    float op = sdRRect(vec2(t, q.y - yc), vec2(k > 6.5 ? .02 : .04, h), .025);
    float face = one ? RR + .006 - l1 : -e2 + .006;
    w = max(w, -max(op, abs(face) - .012));
  }
  float fl = max(abs(q.y - Y0 + .006) - .006, min(l1 - RR, e2));
  return vec2(w, fl);
}

// 4 \xB7 The floors of flats: free slabs at every floor round the courtyards, and the party wall.
float floors(vec3 q, float best) {
  float lv = q.y < (Y0 + YF) * .5 ? Y0 : YF + clamp(floor((q.y - YF) / FH + .5), 0., 6.) * FH;
  float n = plan(q.xz);
  float d = max(abs(q.y - lv) - .01, max(n + .035, max(RR + .025 - length(q.xz - CR), .025 - oval(q.xz))));
  float wall = max(abs(-q.x - XE + .0175) - .0175, max(max(q.z - ZE, -q.z - ZE), max(Y0 - q.y, q.y - YP)));
  return min(d, wall);
}

// 5 \xB7 The stone fa\xE7ade: a skin of stone round the street fronts, the chamfer and the rear, waving in plan and
// shifting floor by floor, its openings rounded (drawn as deep recesses), stone ledges where the balconies are; its
// parapet waves too.
// Balconies: seven on the main floor and five on each floor above, on the street fronts (j across the openings).
bool balcony(float j, float k) { float a = abs(j); return k < 1.5 ? (a < .5 || abs(a - 5.) < .5 || abs(a - 7.) < .5 || abs(a - 9.) < .5) : (a < .5 || abs(a - 5.) < .5 || abs(a - 8.) < .5); }
float facade(vec3 q, float best) {
  float fF = q.z - ZE, fS = q.x - XE, fC = (q.x + q.z) * S2 - CH, fR = -q.z - ZE, fL = -q.x - XE;
  float street = max(max(fF, fS), fC), no = max(street, fR);
  float n = max(no, fL);
  float u = q.x - q.z;
  float w = .03 * pwave(u * 1.1 + q.y * 2.2);
  float top = YP + .014 * pwave(u * .9 + .3);
  float nn = n - w;
  float skin = max(max(abs(nn + .0175) - .0175, max(Y0 - q.y, q.y - top)), (fL - no) * .5);
  if (skin - .05 > best) return skin - .05;
  float yc, h;
  float k = storeyBand(q.y, yc, h);
  float j = floor(u / .21 + .5);
  float t = u - j * .21;
  float hw = k < .5 ? .075 : k > 6.5 ? .03 : .06;
  skin = max(skin, -max(sdRRect(vec2(t, q.y - yc), vec2(hw, h), min(hw, h) * .8), abs(nn + .007) - .013));
  if (k > .5 && k < 6.5 && street >= fR && street >= fL && balcony(j, k)) {
    float ly = yc - .05;
    skin = min(skin, max(max(abs(q.y - ly) - .007, max(nn - .05, -nn - .02)), abs(t) - .085));
  }
  return skin;
}

// 6 \xB7 The iron balconies: railings of two bars twisted round each other, with a post at each end, on the ledges.
float rails(vec3 q, float best) {
  float street = max(max(q.z - ZE, q.x - XE), (q.x + q.z) * S2 - CH);
  float u = q.x - q.z;
  float nn = street - .03 * pwave(u * 1.1 + q.y * 2.2);
  float yc, h;
  float k = storeyBand(q.y, yc, h);
  float j = floor(u / .21 + .5);
  float t = u - j * .21;
  if (!balcony(j, k)) {
    // the nearest railing is in another opening (along the front) or on another floor
    float fy = yc - .085;
    return max(min((.125 - abs(t)) * .7, min(q.y - fy, fy + FH - q.y) + .035), abs(nn - .03) - .03);
  }
  vec2 l = vec2(nn - .03, q.y - (yc - .05 + .03));
  float b = max(max(abs(t) - .085, abs(l.x) - .025), abs(l.y) - .03);
  if (b > best) return b;
  float d = 1e5;
  for (int i = 0; i < 2; i++) {
    float ph = t * 12. + float(i) * .5;
    d = min(d, length(l - vec2(.012 * pwave(ph + .25), .014 * pwave(ph))) - .0028);
  }
  d = max(d * .6, abs(t) - .08);
  d = min(d, max(length(vec2(abs(t) - .08, l.x)) - .0045, abs(l.y) - .025));
  return d;
}

// 7 \xB7 The attic: 270 brick catenary arches standing on the attic's floor in radial planes round the two courtyards
// (120 round the round one, 150 round the oval one), each spanning from the courtyard's wall to the fa\xE7ade or to the
// line between the two houses (at most 16 m), all of one shape; on them the roof terrace, flat by the walls, rising
// over the crowns.
float span(vec2 o, vec2 d, bool rs) {
  float t = 1e5, den;
  den = d.y; if (den > 1e-4) t = min(t, (ZE - .035 - o.y) / den);
  den = d.x; if (den > 1e-4) t = min(t, (XE - .035 - o.x) / den);
  den = (d.x + d.y) * S2; if (den > 1e-4) t = min(t, (CH - .035 - (o.x + o.y) * S2) / den);
  den = -d.y; if (den > 1e-4) t = min(t, (ZE - .035 + o.y) / den);
  den = -d.x; if (den > 1e-4) t = min(t, (XE - .035 + o.x) / den);
  float sg = rs ? 1. : -1.;
  den = sg * dot(NB, d); if (den > 1e-4) t = min(t, sg * (KB - dot(NB, o)) / den);
  return t;
}
float wallR(bool rs, vec2 d) { return rs ? RR + .025 : 1. / length(d / RO) + .025; }
float attic(vec3 q, float n) {
  bool rs = dot(NB, q.xz) < KB;
  vec2 c = rs ? CR : CO;
  vec2 rel = q.xz - c;
  float r = length(rel);
  // the arch of the point's sector
  float N = rs ? 120. : 150., da = TAU / N;
  float a = atan(rel.y, rel.x);
  float kk = floor(a / da + .5);
  float dl = kk * da - a;
  vec2 dd = rel / max(r, 1e-4);
  float cd = 1. - dl * dl * .5, sd = dl - dl * dl * dl / 6.;
  vec2 dk = vec2(dd.x * cd - dd.y * sd, dd.x * sd + dd.y * cd);
  float rk = wallR(rs, dk);
  float Lk = min(span(c, dk, rs) - rk, .8);
  float tang = dot(rel, vec2(-dk.y, dk.x));
  float sk = dot(rel, dk) - rk;
  float cc = Lk / 2.2, H = .3 * Lk;
  float uu = sk - Lk * .5, uc = clamp(uu, -Lk * .5, Lk * .5);
  float ch = cosh(uc / cc);
  float v = q.y - (YAT + .012);
  float dc = max(abs(v - (H - cc * (ch - 1.))) / ch, abs(uu) - Lk * .5);
  float rib = max(max(dc - .008, abs(tang) - .003), -v);
  // the terrace on the arches, from the sector's span: flat by the walls, rising over the crowns
  float s = r - rk;
  float prof = H * max(0., 1. - (2. * s / Lk - 1.) * (2. * s / Lk - 1.));
  float yd = YAT + max(.1, prof + .02) + .006;
  float deckD = max(max(abs(q.y - yd) - .006, -s), plan(q.xz) + .035) * .6;
  // built one by one round each courtyard
  float idx = mod(kk + N, N);
  if (idx >= n * N) rib = max(rib, .02);
  return min(rib, n >= 1. ? deckD : 1e5);
}

// 8, 9, 10 \xB7 The roof's parts, standing on the terrace: the stairwell exits (7 m, the largest: twisted, tapering,
// a door at the foot), the ventilation towers (5 m: slender, spiralling, a ball on top) and the chimneys (4 m: fluted
// shafts twisted into spirals under round caps), alone or in sets.
float stairExit(vec3 s) {
  float t = clamp(s.y / .35, 0., 1.);
  vec2 xz = rot(s.y * 4.) * s.xz;
  float w = .062 * (1. - .4 * t);
  float d = sdRRect(xz, vec2(w), w * .6);
  d = max(d * .8, max(-s.y, s.y - .3));
  d = min(d, length(s - vec3(0., .3, 0.)) - .045);
  return max(d, -max(sdRRect(vec2(s.x, s.y - .04), vec2(.018, .04), .015), .025 - s.z));
}
float ventTower(vec3 s) {
  float t = clamp(s.y / .25, 0., 1.);
  float a = atan(s.z, s.x) + s.y * 30.;
  float d = length(s.xz) - (.042 * (1. - .5 * t) + .004 * cos(a * 4.));
  d = max(d * .7, max(-s.y, s.y - .22));
  return min(d, length(s - vec3(0., .225, 0.)) - .03);
}
float chimney(vec3 s) {
  float a = atan(s.z, s.x) + s.y * 25.;
  float d = length(s.xz) - .016 - .003 * cos(a * 5.);
  d = max(d * .75, max(-s.y, s.y - .17));
  return min(d, sdEllipsoid(s - vec3(0., .182, 0.), vec3(.026, .02, .026)));
}
float chimSet(vec3 s, float n) {
  if (n < 1.5) return chimney(s);
  if (n < 2.5) return chimney(vec3(abs(s.x) - .024, s.y, s.z));
  vec3 r = polarRep(s, n < 6. ? 5. : 6.);
  float d = chimney(r - vec3(n < 6. ? .036 : .046, 0., 0.));
  return n > 6. ? min(d, chimney(s - vec3(0., 0., 0.))) : d;
}
vec3 roofParts(vec3 ps, vec3 pc, vec3 pv, float best) {
  vec3 d = vec3(1e5);
  bool rs = dot(NB, ps.xz) < KB;
  int i0 = rs ? 0 : 8, i1 = rs ? 7 : 16;
  for (int i = 0; i < 9; i++) {
    int k = i0 + i;
    if (k > i1) break;
    vec4 e = ROOF[k];
    if (e.w < .5) {
      vec3 s = ps - vec3(e.x, e.z, e.y);
      float b = length(s.xz) - .1;
      d.x = min(d.x, b > best ? b : stairExit(s));
    } else if (e.w < 1.5) {
      vec3 s = pv - vec3(e.x, e.z, e.y);
      float b = length(s.xz) - .07;
      d.z = min(d.z, b > best ? b : ventTower(s));
    } else {
      vec3 s = pc - vec3(e.x, e.z, e.y);
      float b = length(s.xz) - .085;
      d.y = min(d.y, b > best ? b : chimSet(s, e.w - 2.));
    }
  }
  return d;
}

vec2 map(vec3 p) {
  float ua = uApart;
  float bound = sdBox(p - vec3(.195 * ua, -.09 + .255 * ua, .36 * ua), vec3(1.12 + .365 * ua, 1.11 + .655 * ua, 1.2 + .36 * ua));
  if (bound > .06) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  vec3 q;
  float d, b;

  // 5, 6 \xB7 The fa\xE7ade and its balconies first: the nearest surfaces for most rays.
  q = p - apart(vec3(.3, .04, .37));
  float pl = plan(q.xz);
  b = max(max(pl - .085, -pl - .07), max(Y0 - q.y, q.y - YP - .02));
  if (b < res.x) {
    d = rise(facade(q, res.x), 5, q.y, Y0, YP + .02);
    res = U(res, vec2(cutaway(d, cutS(q)), 25.));
  }
  q = p - apart(vec3(.48, .06, .6));
  pl = plan(q.xz);
  b = max(max(pl - .1, -pl - .05), max(YF - q.y, q.y - YAT));
  if (b < res.x) {
    d = rise(rails(q, res.x), 6, q.y, YF, YAT);
    res = U(res, vec2(cutaway(d, cutS(q)), 26.));
  }

  // 4, 2, 3 \xB7 The floors, the pillars and the courtyards.
  q = p;
  b = max(plan(q.xz), max(Y0 - .02 - q.y, q.y - YP));
  if (b < res.x) {
    d = rise(floors(q, res.x), 4, q.y, Y0 - .01, YP);
    res = U(res, vec2(cutaway(d, cutS(q)), 24.));
    d = rise(pillars(q), 2, q.y, Y0, YAT);
    res = U(res, vec2(cutaway(d, cutS(q)), 22.));
  }
  q = p - apart(vec3(0., .3, 0.));
  b = max(min(length(q.xz - CR) - RR - .03, oval(q.xz) - .03), max(Y0 - .02 - q.y, q.y - YP));
  if (b < res.x) {
    vec2 c = courts(q, res.x);
    res = U(res, vec2(cutaway(rise(c.x, 3, q.y, Y0, YP), cutS(q)), 23.));
    res = U(res, vec2(SHELL(cutaway(rise(c.y, 3, q.y, Y0 - .02, Y0 + .02), cutS(q))), 43.));
  }

  // 0, 1 \xB7 Below the street: the garage and the girder.
  q = p - apart(vec3(0., -.38, 0.));
  b = max(plan(q.xz), max(YB - .02 - q.y, q.y - Y0));
  if (b < res.x) {
    d = rise(garage(q, res.x), 0, q.y, YB - .02, Y0);
    res = U(res, vec2(cutaway(d, cutS(q)), 20.));
  }
  q = p - apart(vec3(-.55, -.18, .45));
  b = max(length(q.xz - CR) - RR - .01, abs(q.y - (Y0 - .032)) - .022);
  if (b < res.x) {
    d = girder(q);
    float g = built(1);
    d = g <= 0. ? 1e5 : max(d, length(q.xz - CR) - mix(.1, RR + .01, g));
    res = U(res, vec2(cutaway(d, cutS(q)), 21.));
  }

  // 7 \xB7 The attic's arches and the roof terrace on them.
  q = p - apart(vec3(0., .5, 0.));
  b = max(plan(q.xz), max(YAT - q.y, q.y - YAT - .275));
  float n7 = built(7);
  if (b < res.x && n7 > 0.) {
    d = attic(q, n7);
    res = U(res, vec2(cutaway(d, cutS(q)), 27.));
  }

  // 8, 9, 10 \xB7 The roof's parts.
  vec3 ps = p - apart(vec3(0., .86, 0.)), pc = p - apart(vec3(0., .74, 0.)), pv = p - apart(vec3(0., .96, 0.));
  b = max(plan(pc.xz), max(YAT + .08 - pc.y, pc.y - 1.06));
  b = min(b, max(plan(ps.xz), max(YAT + .08 - ps.y, ps.y - 1.06)));
  b = min(b, max(plan(pv.xz), max(YAT + .08 - pv.y, pv.y - 1.06)));
  if (b < res.x) {
    vec3 r = roofParts(ps, pc, pv, res.x);
    res = U(res, vec2(cutaway(rise(r.x, 8, ps.y, YAT + .08, YAT + .6), cutS(ps)), 28.));
    res = U(res, vec2(cutaway(rise(r.y, 9, pc.y, YAT + .08, YAT + .55), cutS(pc)), 29.));
    res = U(res, vec2(cutaway(rise(r.z, 10, pv.y, YAT + .08, YAT + .55), cutS(pv)), 30.));
  }
  return res;
}

float sceneDetail(vec3 p, float m) {
  int k = int(m + .5);
  if (k == 25) { vec2 j = abs(fract(vec2((p.x - p.z) * 18., p.y * 30.) + vec2(.5 * step(.5, fract(p.y * 15.)), 0.)) - .5); return -.0006 * smoothstep(.44, .5, max(j.x, j.y)) + .0008 * noise3(p * 60.); }
  if (k == 27) { return -.0004 * smoothstep(.4, .5, abs(fract(p.y * 90.) - .5)); }
  if (k == 22) return .0008 * fbm(p * 30.);
  return 0.;
}
`};export{B as scene};
