import{a as h}from"./chunk-WFBFTKL4.js";import{a as d}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var r=1.05,c=.42,s=.86,l=.74,t=[.27,.115];function g(e){let o=Math.cos(e),n=Math.sin(e),v=1/Math.sqrt(o*o/r+n*n/c);return[Math.sqrt(r)*o*v,Math.sqrt(c)*n*v]}var a=e=>e.toFixed(5),p=[0,1,2,3,4].map(e=>g(e*Math.PI/8)),f=g(Math.PI/4),i=[{x:t[0],z:-t[1],sag:.04},...p.map(([e,o])=>{let n=Math.hypot(e*s-t[0],o*s-t[1]);return{x:e*s,z:o*s,sag:.12*n+.02}}),{x:-t[0],z:t[1],sag:.06}].map(e=>({...e,ang:Math.atan2(e.z-t[1],e.x-t[0])})),m=i.map(e=>`vec3(${a(e.x)}, ${a(e.sag)}, ${a(e.z)})`).join(", "),b=i.map(e=>`vec2(${a(Math.cos(e.ang))}, ${a(Math.sin(e.ang))})`).join(", "),x=i.map(e=>a(e.ang)).join(", "),Y={id:"D03-hanging-model",cam:[1.83,.9,5.47],target:[0,.06,-.15],floor:-1.5,ring:1.9,accent:d(h.D03),poster:1.5,orbit:{az:[-80,80]},parts:[{name:"workshop ceiling",view:{el:-6,zoom:.85}},{name:"cords",view:{el:2,zoom:.8}},{name:"lead-shot bags",view:{az:-12,el:0,zoom:.62}},{name:"inverted arches",view:{el:4,zoom:.72}},{name:"column threads",view:{az:25,el:-4,zoom:.72}},{name:"cloth covering",view:{az:-8,el:6,zoom:.7}},{name:"photographs",view:{az:-14,el:2,zoom:.62}},{name:"painted inversion",view:{az:6,el:2,zoom:.62}},{name:"lower nave",view:{el:14,zoom:.72}}],glsl:`
const float YC = 1.30;                 // underside of the workshop ceiling (the church's ground, upside down)
const float A = ${a(r)}, B = ${a(c)}, SA = ${a(Math.sqrt(r))}, SB = ${a(Math.sqrt(c))};
const float Y1 = 1.00;                 // ring 1: the lower nave's capitals, 9 m down
const float Y2 = .52;                  // ring 2: the upper nave's eaves
const float Y3 = .36;                  // ring 3: the dome's springing
const float YDM = .1455;               // the dome cords' bend
const float YAP = -.03;                // the dome's apex: 40 m below the ceiling
const float YT = .20, YTM = .3442;     // the towers' tips, and their cords' bend
const float S1 = ${a(s)}, S2 = ${a(l)};
const float R3 = .22, RT = .085;       // ring 3's radius; the towers' hoops
const float SAG1 = .085, SAG2 = .065;  // the rings' arches sag
const float YG = -1.20;                // the ground of the built lower nave
const float DT = .39269908;            // 16 nodes round the oval
const vec3 IA = vec3(.20, YC, .075);   // an inner column's anchor (folded into x, z > 0)
const vec3 IN = vec3(${a(t[0])}, Y1, ${a(t[1])});
const vec2 TW = vec2(${a(f[0]*l)}, ${a(f[1]*l)});   // a tower's axis: ring 2 at t = 45\xB0
const vec3 RIB[7] = vec3[7](${m});  // the inner ribs' far ends (x, sag, z), by direction
const float RIBA[7] = float[7](${x});
const vec2 RIBD[7] = vec2[7](${b});   // and their directions
const float SCI = .22, ECY = .62;      // the prints: plate units per unit, and the drawing's centre height
const float PB = .1392, PC = .9903;    // the prints lean back 8\xB0
const vec3 P6 = vec3(-.47, -.40, -.72), P7 = vec3(.47, -.40, -.72);

vec3 palette(int i) {
  if (i == 0) return vec3(.86, .76, .62);   // workshop ceiling: timber
  if (i == 1) return vec3(.62, .86, 1.);    // cords, in tension
  if (i == 2) return vec3(.86, .82, .70);   // lead-shot bags: canvas
  if (i == 3) return vec3(1., .70, .40);    // inverted arches
  if (i == 4) return vec3(.56, 1., .78);    // column threads
  if (i == 5) return vec3(.96, .97, 1.);    // cloth covering
  if (i == 6) return vec3(.90, .80, .62);   // photographs: a sepia print
  if (i == 7) return vec3(1., .58, .40);    // painted inversion: gouache
  return vec3(.92, .54, .38);               // lower nave: brick
}

vec2 ell(float t) { float c = cos(t), s = sin(t); return vec2(SA * c, SB * s) * inversesqrt(c * c / A + s * s / B); }
float tOf(vec2 xz) { return atan(xz.y / SB, xz.x / SA); }
vec3 at(vec2 e, float s, float y) { return vec3(e.x * s, y, e.y * s); }
vec3 fold(vec3 p) { return vec3(abs(p.x), p.y, abs(p.z)); }
float slab(float y, float lo, float hi) { return max(lo - y, y - hi); }
float seg2(vec2 p, vec2 a, vec2 b) { vec2 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.); return length(pa - ba * h); }
float box2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
/** The section: the front half (toward the scene's own view) is removed. */
float cutS(vec3 p) { return p.z; }

/** Where the point lies in plan, set once per map(): its two nearest nodes round the oval (every cord, outer column
 * and node bag lies in the vertical half-planes through the axis and the nodes), and distances. */
float gF, gK0, gMer, gRho, gRc, gRtw, gRin;
vec2 gE0, gE1;
float halfPlane(vec2 xz, vec2 e) { vec2 d = normalize(e); return dot(xz, d) < 0. ? length(xz) : abs(xz.x * d.y - xz.y * d.x); }
void planOf(vec2 xz) {
  float t = tOf(xz) / DT;
  gK0 = floor(t); gF = t - gK0;
  gE0 = ell(gK0 * DT); gE1 = ell(gK0 * DT + DT);
  gMer = min(halfPlane(xz, gE0), halfPlane(xz, gE1));
  gRho = length(xz / vec2(A, B));
  gRc = length(xz);
  gRtw = length(abs(xz) - TW);
  gRin = length(abs(xz) - IN.xz);
}

/** A cord hung between P and Q, sagging by sag at its middle (a parabola in their vertical plane), radius r. */
float arch(vec3 p, vec3 P, vec3 Q, float sag, float r) {
  vec2 d = Q.xz - P.xz; float L = length(d); vec2 u = d / L;
  vec2 rel = p.xz - P.xz;
  float x = dot(rel, u), z = rel.x * u.y - rel.y * u.x;
  float w = clamp(x / L, 0., 1.);
  float y = mix(P.y, Q.y, w) - sag * 4. * w * (1. - w);
  float sl = ((Q.y - P.y) - sag * 4. * (1. - 2. * w)) / L;
  return length(vec3(x - w * L, (p.y - y) * inversesqrt(1. + sl * sl), z)) - r;
}
/** A small bag of lead shot on a thread from h, body radius r. */
float bagD(vec3 p, vec3 h, float r) {
  vec3 q = p - h;
  float bb = length(q + vec3(0., .03 + r, 0.)) - (r * 1.6 + .032);
  if (bb > .015) return bb;
  return min(sdCapsule(q, vec3(0.), vec3(0., -.03, 0.), .0026), sdEllipsoid(q + vec3(0., .03 + r * 1.1, 0.), vec3(r, r * 1.25, r)));
}

// \u2500\u2500 the net's top band, shared by the hanging model and (upside down, thick) by the built lower nave \u2500\u2500
/** The column threads: the two nearest round the oval and the inner one; lean 0 hangs plumb, 1 leans. */
vec2 columns(vec3 q, float lean, float r, float ri) {
  float d = 1e5, b = 1e5;
  for (int i = ZERO; i < 3; i++) {
    vec3 x = q, a, c;
    float rr = r, g;
    if (i < 2) { vec2 e = i == 0 ? gE0 : gE1; a = vec3(mix(e * S1, e, lean), YC).xzy; c = at(e, S1, Y1); g = max(gMer - r - .006, slab(q.y, Y1 - r, YC + r)); }
    else { x = fold(q); a = vec3(mix(IN.xz, IA.xz, lean), YC).xzy; c = IN; rr = ri; g = gRin - .1 - ri; }
    if (g < .02) d = min(d, sdCapsule(x, a, c, rr)); else b = min(b, g);
  }
  return vec2(d, b);
}
/** The arches: ring 1 between the two nearest nodes, the two ribs from the inner node nearest in direction (seven
 * fan out from each inner node: to ring 1 and to the inner neighbours), and (ring2 > 0) ring 2 at the eaves. */
vec2 archesTop(vec3 q, float sag, float r, float ring2) {
  vec3 fq = fold(q);
  vec2 w = fq.xz - IN.xz;
  float a = atan(w.y, w.x);
  int j = 6;
  for (int i = ZERO; i < 7; i++) if (a >= RIBA[i]) j = i;
  float d = 1e5, bd = 1e5;
  for (int i = ZERO; i < 4; i++) {
    vec3 x = q, P, Q;
    float sg, g;
    if (i == 0) { P = at(gE0, S1, Y1); Q = at(gE1, S1, Y1); sg = SAG1; g = max((abs(gRho - (S1 - .035)) - .045) * B - r, slab(q.y, Y1 - SAG1 - r, Y1 + r)); }
    else if (i == 3) { P = at(gE0, S2, Y2); Q = at(gE1, S2, Y2); sg = SAG2; g = ring2 > 0. ? max((abs(gRho - .74) - .05) * B - r, slab(q.y, Y2 - SAG2 - r, Y2 + r)) : 1e5; }
    else {
      int k = i == 1 ? j : (j == 6 ? 0 : j + 1);
      vec2 u = RIBD[k];
      vec3 rb = RIB[k];
      x = fq; P = IN; Q = vec3(rb.x, Y1, rb.z); sg = rb.y;
      g = max((dot(w, u) < 0. ? length(w) : abs(w.x * u.y - w.y * u.x)) - r, slab(q.y, Y1 - rb.y - r, Y1 + r));
    }
    if (g < .02) d = min(d, arch(x, P, Q, sg * sag, r)); else bd = min(bd, g);
  }
  return vec2(d, bd);
}
/** Segment i of the net's cords along the meridian through node e: 0 a plumb thread (before the columns lean),
 * 1 the wall (ring 1 to 2), 2 the roof (ring 2 to 3), 3 and 4 the dome (ring 3, bend, apex). */
void cordSeg(int i, vec2 e, out vec3 a, out vec3 b) {
  vec2 dir = normalize(e);
  if (i == 0) { a = at(e, S1, YC); b = at(e, S1, Y1); }
  else if (i == 1) { a = at(e, S1, Y1); b = at(e, S2, Y2); }
  else if (i == 2) { a = at(e, S2, Y2); b = at(dir, R3, Y3); }
  else if (i == 3) { a = at(dir, R3, Y3); b = at(dir, R3 * .67, YDM); }
  else { a = at(dir, R3 * .67, YDM); b = vec3(0., YAP, 0.); }
}
/** Keeps the bag (hung from h, radius r) whose body is nearest q. */
void cand(vec3 q, vec3 h, float r, inout vec4 best, inout float bd) {
  float c = length(q - h + vec3(0., .03 + 1.15 * r, 0.)) - 1.25 * r;
  if (c < bd) { bd = c; best = vec4(h, r); }
}

// \u2500\u2500 the prints: an elevation of the net (x folded), and the shapes filled in \u2500\u2500
/** The drawing's lines. In each band the cords are drawn vertical in x scaled by the band's narrowing and repeated
 * at about the node spacing; arches sag between them; the roof's edge, the dome and a tower in outline; bags. */
float picLines(vec2 e) {
  vec2 p = vec2(abs(e.x), e.y);
  float sc = p.y > Y1 ? mix(S1, 1., (p.y - Y1) / (YC - Y1)) : mix(S2, S1, (p.y - Y2) / (Y1 - Y2));
  float xs = p.x / sc, cx = min(round(xs / .25) * .25, 1.);
  float d = max(abs(xs - cx) * sc, slab(p.y, Y2, YC));
  for (int i = ZERO; i < 2; i++) {
    float rs = i == 0 ? S1 : S2, y0 = i == 0 ? Y1 : Y2, sg = i == 0 ? SAG1 : SAG2;
    float x = p.x / rs, u = fract(x / .25), ya = y0 - sg * 4. * u * (1. - u);
    d = min(d, max(abs(p.y - ya) * .8, (x - 1.) * rs));
    d = min(d, length(vec2((x - min(round(x / .25) * .25, 1.)) * rs, p.y - y0 + .055)) - .018);
  }
  d = min(d, seg2(p, vec2(A * S2, Y2), vec2(R3, Y3)));
  vec2 t = vec2(abs(p.x - TW.x), p.y);
  d = min(d, min(seg2(t, vec2(RT, Y2), vec2(RT * .62, YTM)), seg2(t, vec2(RT * .62, YTM), vec2(0., YT))));
  d = min(d, min(seg2(p, vec2(R3, Y3), vec2(R3 * .67, YDM)), seg2(p, vec2(R3 * .67, YDM), vec2(0., YAP))));
  return min(d, length(p - vec2(0., YAP - .085)) - .04);
}
/** The half-width of a hanging spire (dome or tower) at height y: top radius r0 at y0, bend at ym, tip at y1. */
float spire(float y, float r0, float y0, float ym, float y1) {
  return y > ym ? mix(r0 * .67, r0, (y - ym) / (y0 - ym)) : mix(0., r0 * .67, (y - y1) / (ym - y1));
}
/** Filled (x: as photographed, the cloth's shapes and the ceiling; y: as painted, the church's mass and windows). */
vec2 picFill(vec2 e) {
  vec2 p = vec2(abs(e.x), e.y);
  float d = box2(p - vec2(0., YC + .035), vec2(A + .2, .035));
  d = min(d, max(p.x - spire(p.y, R3, Y3, YDM, YAP), max(YAP - p.y, p.y - Y3)) * .8);
  vec2 t = vec2(abs(p.x - TW.x), p.y);
  d = min(d, max(t.x - spire(t.y, RT, Y2, YTM, YT) * 1.1, max(YT - t.y, t.y - Y2)) * .8);
  float w = p.y > Y1 ? mix(A * S1, A, (p.y - Y1) / (YC - Y1)) : p.y > Y2 ? mix(A * S2, A * S1, (p.y - Y2) / (Y1 - Y2))
                                                                       : mix(R3, A * S2, (p.y - Y3) / (Y2 - Y3));
  float mass = max(p.x - w, max(Y3 - p.y, p.y - YC)) * .7;
  vec2 wq = vec2(p.x - (floor(p.x / .19) + .5) * .19, p.y);
  float win = min(box2(wq - vec2(0., Y1 + .13), vec2(.035, .07)), box2(wq - vec2(0., Y2 + .26), vec2(.03, .12)));
  return vec2(d, min(d, max(mass, -max(win, p.x - w + .06))));
}
/**
 * A print in its own frame (u across, v up, w out of its face): (plate and fill, lines). ang turns the picture;
 * develop brings the photograph up from the bottom; paint lays the gouache on, bottom to top.
 */
vec2 print(vec3 l, float ang, float develop, float paint) {
  float plate = sdBox(l - vec3(0., 0., -.007), vec3(.31, .23, .007));
  plate = min(plate, max(sdBox(l - vec3(0., 0., .0015), vec3(.31, .23, .0035)), -sdBox(l, vec3(.285, .205, .01))));
  plate = min(plate, sdBox(l - vec3(0., -.238, .012), vec3(.3, .008, .016)));   // the easel's ledge
  float lines = max(plate + .004, .01);
  if (abs(l.z - .003) < .012 && abs(l.x) < .29 && abs(l.y) < .21) {
    vec2 uv = l.xy;
    float c = cos(ang), s = sin(ang);
    uv = vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y);
    vec2 e = uv / SCI + vec2(0., ECY);
    float frame = box2(l.xy, vec2(.28, .2));
    float clip = max(frame, l.y - mix(-.22, .22, develop));
    vec2 pf = picFill(e) * SCI;
    float fl = max(pf.x, clip);
    if (paint > 0.) fl = min(fl, max(pf.y, max(frame, l.y - mix(-.22, .22, paint))));
    float hf = .0015 + .0015 * step(.001, paint);
    plate = min(plate, max(fl, abs(l.z - hf) - hf));
    float ln = max(picLines(e) * SCI - .0028, clip);
    lines = max(ln, abs(l.z - hf - .001) - hf - .001);
  }
  return vec2(plate, lines);
}
/** The easel under a print at C (legs to the ground). */
float easel(vec3 p, vec3 C) {
  vec3 V = vec3(0., PC, -PB), W = vec3(0., PB, PC);
  vec3 a = C - .2 * V + .004 * W;
  float d = min(sdCapsule(p, a - vec3(.25, 0., 0.), vec3(C.x - .29, YG, a.z + .07), .0075),
                sdCapsule(p, a + vec3(.25, 0., 0.), vec3(C.x + .29, YG, a.z + .07), .0075));
  return min(d, sdCapsule(p, C + .16 * V - .012 * W, vec3(C.x, YG, C.z - .34), .0075));
}

vec2 map(vec3 p) {
  float ua = uApart;
  float bH = sdBox(p - vec3(0., .62 + .1 * ua, .26 * ua), vec3(1.33, .84 + .5 * ua, .68 + .26 * ua));
  float bN = sdBox(p - vec3(0., YG + .2 - .1 * ua, 0.), vec3(1.15, .27 + .1 * ua, .5));
  float bP = sdBox(p - vec3(0., -.66, -.82 + .06 * ua), vec3(.84 + .34 * ua, .58, .27));
  float bG = sdBox(p - vec3(0., YG - .025, -.25), vec3(1.34, .028, .88));
  float bound = min(min(bH, bN), min(bP, bG));
  if (bound > .25) return vec2(bound, 0.);
  // The ground the built nave and the easels stand on (not a part).
  vec2 res = vec2(max((length((p.xz - vec2(0., -.25)) / vec2(1.32, .86)) - 1.) * .86, abs(p.y - (YG - .022)) - .022), 4.);
  float g3 = built(3), g4 = built(4), g8 = built(8);
  float e3 = smoothstep(0., 1., g3), e4 = smoothstep(0., 1., g4);
  bool low = p.y < -.45;   // the built nave's height, below the prints' tops
  bool net = low ? bN < .2 : bH < .2;
  if (net) planOf(p.xz);   // every part of the net moves apart vertically, except the bags

  if (bH < .2 && !low) {
    float g0 = built(0), g1 = built(1), g2 = built(2), g5 = built(5);
    // 0 \xB7 The workshop ceiling: a frame of beams and joists, hooks where the threads hang, and the church's oval
    // plan strung under it.
    {
      vec3 q = p - apart(vec3(0., .48, 0.));
      float bc = sdBox(q - vec3(0., YC + .03, -.02), vec3(1.29, .05, .66));
      if (bc < .05) {
        float grow = abs(q.x) - 1.3 * g0;
        vec3 j = q - vec3(0., YC + .03, -.02);
        float wood = max(sdBox(j, vec3(1.27, .03, .64)), -sdBox(j, vec3(1.22, .05, .59)));
        wood = min(wood, sdBox(vec3(j.x, j.y - .012, abs(j.z) - .3), vec3(1.25, .018, .022)));
        j.x = mod(j.x + .125, .25) - .125;
        wood = min(wood, max(sdBox(j, vec3(.018, .028, .62)), abs(q.x) - 1.23));
        vec2 h = gF < .5 ? gE0 : gE1;
        wood = min(wood, sdTorus((gRho > .7 ? q - vec3(h.x, YC - .006, h.y) : fold(q) - vec3(IA.x, YC - .006, IA.z)).xzy, vec2(.009, .003)));
        res = U(res, vec2(cutaway(max(wood, grow), cutS(q)), 20.));
        float plan = length(vec2((gRho - 1.) * B, q.y - (YC - .002))) - .0035;
        res = U(res, vec2(cutaway(max(plan, grow), cutS(q)), 60.));
      } else res = U(res, vec2(bc, 0.));
    }

    // 1 \xB7 Cords: down the walls from ring 1 to ring 2, in over the roof to ring 3, down to the dome's apex (on the
    // nearest meridian); the towers' hoops and cords. Until the columns lean, plumb threads hold the net up.
    if (g1 > 0.) {
      vec3 q = p - apart(vec3(0., -.26, 0.));
      float top = g4 > 0. ? Y1 + .01 : YC + .01;
      float d = 1e5, db = max(max(slab(q.y, YAP - .02, top), (gRho - (g4 > 0. ? .92 : 1.03)) * B), gMer - .007);
      if (db < .02) {
        db = 1e5;
        int i0 = q.y > Y1 ? 0 : q.y > Y2 ? 1 : q.y > Y3 ? 2 : q.y > YDM ? 3 : 4;
        float yt = i0 == 0 ? YC : i0 == 1 ? Y1 : i0 == 2 ? Y2 : i0 == 3 ? Y3 : YDM;
        float yb = i0 == 0 ? Y1 : i0 == 1 ? Y2 : i0 == 2 ? Y3 : i0 == 3 ? YDM : YAP;
        int i1 = yt - q.y < q.y - yb ? max(i0 - 1, g4 > 0. ? 1 : 0) : min(i0 + 1, 4);
        vec2 e = gF < .5 ? gE0 : gE1;
        for (int m = ZERO; m < 2; m++) {
          vec3 a, b;
          cordSeg(m == 0 ? i0 : i1, e, a, b);
          d = min(d, sdCapsule(q, a, b, .006));
        }
      }
      if (g4 <= 0.) { if (gRin < .03) d = min(d, sdCapsule(fold(q), vec3(IN.x, YC, IN.z), IN, .006)); else db = min(db, gRin - .01); }
      float r = max(slab(q.y, YT - .02, Y2 + .01), gRtw - RT - .02);
      if (r < .02) {
        vec3 tl = fold(q) - vec3(TW.x, 0., TW.y);
        d = min(d, min(sdTorus(tl - vec3(0., Y2 - .006, 0.), vec2(RT, .005)), sdCapsule(polarRep(tl, 6.), vec3(RT, Y2 - .006, 0.), vec3(0., YT, 0.), .005)));
      } else db = min(db, r);
      res = U(res, vec2(cutaway(rise(d, 1, -q.y, -YC, -(YAP - .02)), cutS(q)), 61.));
      res = U(res, vec2(db, 0.));
    }

    // 2 \xB7 Lead-shot bags: at the nodes, each sized for its own point; the bag whose body is nearest is drawn.
    if (g2 > 0.) {
      vec3 q = p - apart(vec3(0., -.06, .52));
      if (ua > 0.) planOf(q.xz);
      float sz = smoothstep(0., 1., g2);
      vec2 sg = vec2(q.x < 0. ? -1. : 1., q.z < 0. ? -1. : 1.);
      vec4 best = vec4(0., 1e3, 0., .01);
      float bd = 1e5, far = 1e5;
      if (gMer < .05) {   // node bags, in the meridian planes: the nearest node at the level nearest the point
        float y = q.y + .05;
        float lv = y > (Y1 + Y2) * .5 ? Y1 : y > (Y2 + Y3) * .5 ? Y2 : y > (Y3 + YDM) * .5 ? Y3 : YDM;
        vec2 e = gF < .5 ? gE0 : gE1;
        vec3 h = lv == Y1 ? at(e, S1, Y1) : lv == Y2 ? at(e, S2, Y2) : at(normalize(e), lv == Y3 ? R3 : R3 * .67, lv);
        float v = .85 + .3 * hash11(mod(gK0 + step(.5, gF), 16.) * 7.13 + 1.);
        cand(q, h, (lv == Y1 ? .019 : lv == YDM ? .017 : .016) * v * sz, best, bd);
      } else far = gMer - .03;
      if (gRin < .06) cand(q, vec3(IN.x * sg.x, IN.y, IN.z * sg.y), .021 * sz, best, bd);
      else far = min(far, gRin - .035);
      if (gRc < .07) cand(q, vec3(0., YAP, 0.), .04 * sz, best, bd);
      else far = min(far, gRc - .055);
      if (gRtw < .05) cand(q, vec3(TW.x * sg.x, YT, TW.y * sg.y), .025 * sz, best, bd);
      else far = min(far, gRtw - .035);
      if (bd < 1e4) res = U(res, vec2(cutaway(bagD(q, best.xyz, best.w), cutS(q)), 22.));
      res = U(res, vec2(far, 0.));
      if (ua > 0.) planOf(p.xz);
    }

    // 5 \xB7 Cloth covering: white cloth over the dome's and the towers' cords turns the lines into surfaces.
    if (g5 > 0.) {
      vec3 q = p - apart(vec3(0., -.5, 0.));
      bool tower = gRtw < gRc;
      vec3 tl = fold(q) - vec3(TW.x, 0., TW.y);
      vec2 rr = tower ? vec2(length(tl.xz), tl.y) : vec2(gRc, q.y);
      vec3 sp = tower ? vec3(RT, Y2 - .006, (Y2 + YT) * .5) : vec3(R3, Y3, YDM);
      float tip = tower ? YT : YAP, k = tower ? .5 : .67;
      float r = tower ? max(slab(q.y, YT - .02, Y2 + .01), gRtw - RT - .03) : max(slab(q.y, YAP - .02, Y3 + .02), gRc - R3 - .03);
      if (r < .02) {
        float d = min(seg2(rr, sp.xy, vec2(sp.x * k, sp.z)), seg2(rr, vec2(sp.x * k, sp.z), vec2(0., tip))) - .004;
        d = min(d, length(rr - vec2(sp.x + .002, sp.y - .005)) - .006);
        res = U(res, vec2(cutaway(rise(d, 5, -q.y, -(Y2 + .01), -(YAP - .01)), cutS(q)), 25.));
      } else res = U(res, vec2(r, 0.));
    }
  } else if (!low) res = U(res, vec2(bH, 0.));

  // 3, 4 and 8 \xB7 The net's top band: in the model, the inverted arches (3) and the column threads (4), thin; in the
  // lower nave as built (8), the same band upside down and thick, in brick: leaning columns, standing arches and ribs.
  if (net) {
    vec3 qc, qa, o = p;
    float lean = e4, sag = e3, rc = .006, rci = .0062, ra = .0052, mc = 64., ma = 63., gc = g4, ga = g3;
    if (low) {
      o = p - apart(vec3(0., -.2, 0.));
      qc = vec3(o.x, YC + YG - o.y, o.z); qa = qc;
      lean = 1.; sag = 1.; rc = .024; rci = .032; ra = .02; mc = 28.; ma = 28.; gc = g8; ga = g8;
    } else { qc = p - apart(vec3(0., .24, 0.)); qa = p; }
    float rr = (gRho - (low ? 1.08 : 1.03)) * B;
    vec2 dc = vec2(1e5, max(slab(qc.y, Y1 - .01, YC + .005), rr));
    vec2 da = vec2(1e5, max(min(slab(qa.y, Y1 - .12, Y1 + .01), low ? 1e5 : slab(qa.y, Y2 - .09, Y2 + .005)), rr));
    if (gc > 0. && dc.y < .02) dc = columns(qc, lean, rc, rci);
    if (ga > 0. && da.y < .02) da = archesTop(qa, sag, ra, low ? 0. : 1.);
    float top = low ? mix(YG, YG + .425, g8) : 1e5;
    if (gc > 0.) res = U(res, vec2(cutaway(max(dc.x, o.y - top), cutS(qc)), mc));
    if (ga > 0.) res = U(res, vec2(cutaway(max(da.x, o.y - top), cutS(qa)), ma));
    res = U(res, vec2(min(gc > 0. ? dc.y : 1e5, ga > 0. ? da.y : 1e5), 0.));   // bounds of built parts, not surfaces
    // The built nave's flat roof, and its walls with a window in every bay.
    if (low && g8 > 0. && bN < .2) {
      float ry = YG + .405;
      float d = max(abs(o.y - ry) - .016, (gRho - 1.065) * B);
      float wall = max(abs((gRho - 1.055) * B) - .01, abs(o.y - (YG + .195)) - .195);
      float wx = gF - .5, wy = o.y - (YG + .2);
      wall = max(wall, -(length(vec2(wx / .17, max(abs(wy) - .035, 0.) / .045)) - 1.) * .04);
      res = U(res, vec2(cutaway(max(min(d, wall), o.y - top), cutS(o)), 28.));
    }
  }

  // 6, 7 \xB7 The prints on their easels: on the left the photograph of the hanging net; on the right the same
  // photograph turned upside down and painted over: the church standing.
  if (bP < .2) {
    bool left = p.x < 0.;
    float g = left ? built(6) : built(7);
    if (g > 0.) {
      vec3 C = left ? P6 : P7;
      vec3 o = p - apart(vec3(left ? -.34 : .34, 0., .06));
      float ang = left ? 0. : PI * smoothstep(.3, .65, g);
      float dev = left ? smoothstep(.3, 1., g) : 1., paint = left ? 0. : smoothstep(.65, 1., g);
      vec3 l = o - C;
      l = vec3(l.x, l.y * PC - l.z * PB, l.y * PB + l.z * PC);
      vec2 pr = print(l, ang, dev, paint);
      float top = mix(YG, C.y + .25, smoothstep(0., .3, g));
      res = U(res, vec2(cutaway(max(min(pr.x, easel(o, C)), o.y - top), cutS(o)), left ? 26. : 27.));
      res = U(res, vec2(cutaway(max(pr.y, o.y - top), cutS(o)), left ? 66. : 67.));
    }
  } else res = U(res, vec2(bP, 0.));
  return res;
}
`};export{Y as scene};
