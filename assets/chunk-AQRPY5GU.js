import{c as h}from"./chunk-6Q7FPIH3.js";import{a as f}from"./chunk-WY76X7OO.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var c=-.9,i=[[-1.45,c+1.45,-.95],[1.5,c+1.5,-.9],[.05,c+1.85,-1.15]],g=[[[1.62,c+1.02,-.3],[1.5,c+.28,1.12],[.58,c+.95,-.4]],[[-1.25,c+.87,-.75],[-1.38,c,1.12],[-.66,c+.95,-.45]],[[-1.38,c,1.12],[.06,c+.14,1.12],[1.5,c+.28,1.12]]],b=.56,r=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],p=(e,t,a)=>[e[0]+(t[0]-e[0])*a,e[1]+(t[1]-e[1])*a,e[2]+(t[2]-e[2])*a],l=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];function q(e,t,a){let o=r(a,t),n=Math.min(1,Math.max(0,l(r(e,t),o)/l(o,o))),s=r(e,p(t,a,n));return Math.sqrt(l(s,s))}var u=i.map((e,t)=>(g[t]??[]).map(a=>p(e,a,b))),y=i.map((e,t)=>{let a=u[t]??[],o=s=>a.reduce((m,x)=>m+x[s],0)/a.length,n=[o(0),o(1),o(2)];return[...n,Math.max(...a.map(s=>q(s,e,n)))+.012]}),v=e=>e.toFixed(4),d=e=>`vec3(${e.slice(0,3).map(v).join(", ")})`,w={id:"D10",cam:[3.02,1.34,5.23],target:[0,-.28,0],floor:-1.6,ring:1.9,accent:f(h.D10),poster:5,glsl:`
const float GY = ${v(c)};                    // the ground, where it is lowest
const float DATUM = GY + .55;                // the posts' tops
const vec3 SC = vec3(-.04, GY, -.97);        // the continuous surface: its middle, at the foot of its wall
const float SW = .62;                        // and its half-width
const vec3 CV = vec3(-1.08, GY + .58, -.36); // the canvas
const vec3 FC = vec3(1.17, GY + .5, -.3);    // the breaking planes

vec3 palette(int i) {
  if (i == 0) return vec3(.94, .96, 1.);    // the field of lines
  if (i == 1) return vec3(.62, .92, 1.);    // light posts and their datum
  if (i == 2) return vec3(.86, .84, 1.);    // the continuous surface
  if (i == 3) return vec3(.76, .62, 1.);    // tilted, breaking planes
  if (i == 4) return vec3(1., .50, .44);    // the painting and its shapes
  if (i == 5) return vec3(.45, .84, 1.);    // lines to three vanishing points
  return vec3(.32, .38, .52);               // the ground
}

float gRise;   // how far the ground has risen, 0\u20131

/** The ground's height: flat at the back, rising toward the front right as gRise grows. */
float groundY(vec2 xz) { return GY + .28 * gRise * smoothstep(-1.5, 1.6, xz.x) * smoothstep(-.1, .4, xz.y); }

float sdRect(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.)) + min(max(d.x, d.y), 0.); }

vec2 field(vec3 p, float best) {
  float bound = sdBox(p - vec3(.06, GY + .29, .74), vec3(1.53, .31, .38));
  if (bound > min(best, .2)) return vec2(bound, 0.);
  // One short line per place, in four rows; each turns with the height of the ground under it.
  float j = clamp(floor((p.z - .36) / .19), 0., 3.);
  float zc = .455 + j * .19;
  float i0 = floor((p.x + 1.38) / .064);
  float d = 1e5;
  for (int k = -1; k <= 1; k++) {
    float i = clamp(i0 + float(k), 0., 44.);
    vec2 c = vec2(-1.38 + (i + .5) * .064, zc);
    float th = .95 * (groundY(c) - GY) / .28;
    vec2 dir = vec2(sin(th), cos(th));
    vec2 q = p.xz - c;
    d = min(d, length(q - dir * clamp(dot(q, dir), -.07, .07)));
  }
  float y = p.y - groundY(p.xz) - .004;
  vec2 res = vec2(length(vec2(d, y)) - .0042, 60.);

  // Light posts: their tops at one datum height, however the ground slopes.
  float ix = clamp(floor((p.x + 1.2) / .5 + .5), 0., 5.);
  vec2 pc = vec2(-1.2 + ix * .5, p.z < .74 ? .55 : .93);
  float base = groundY(pc);
  vec3 a = vec3(pc.x, base, pc.y), b = vec3(pc.x, DATUM - .02, pc.y);
  res = U(res, vec2(sdCapsule(p, a, b, .007), 21.));
  res = U(res, vec2(length(p - vec3(pc.x, DATUM, pc.y)) - .02, 61.));
  // The datum, drawn through their tops.
  float zl = p.z < .74 ? .55 : .93;
  float datum = max(length(vec2(p.y - DATUM, p.z - zl)) - .0028, abs(p.x - .05) - 1.37);
  datum = max(datum, (abs(fract(p.x * 7. - uTime * .3) - .5) - .22) / 7.);
  return U(res, vec2(datum, 61.));
}

/** The continuous surface's section: distance in the (u, v) plane (u forward from the wall, v up from the floor) to the curve that runs along the floor, up into the wall and over into the roof, and the length along it from the floor's front edge. */
vec2 section(vec2 q, float lf, float lr) {
  const float R1 = .3, R2 = .24, H = .95;
  float s1 = lf + R1 * 1.5708, s2 = s1 + H - R2 - R1, s3 = s2 + R2 * 1.5708;
  float u = clamp(q.x, R1, R1 + lf);
  vec2 res = vec2(length(q - vec2(u, 0.)), R1 + lf - u);
  if (q.x < R1 && q.y < R1) {
    vec2 c = q - vec2(R1);
    float d = abs(length(c) - R1);
    if (d < res.x) res = vec2(d, lf + R1 * atan(-c.x, -c.y));
  }
  float v = clamp(q.y, R1, H - R2);
  float dw = length(q - vec2(0., v));
  if (dw < res.x) res = vec2(dw, s1 + v - R1);
  if (q.x < R2 && q.y > H - R2) {
    vec2 c = q - vec2(R2, H - R2);
    float d = abs(length(c) - R2);
    if (d < res.x) res = vec2(d, s2 + R2 * atan(c.y, -c.x));
  }
  float u2 = clamp(q.x, R2, R2 + lr);
  float dr = length(q - vec2(u2, H));
  if (dr < res.x) res = vec2(dr, s3 + u2 - R2);
  return res;
}

vec2 surface(vec3 p, float best) {
  vec3 q = p - SC;
  float bound = sdBox(q - vec3(0., .5, .45), vec3(SW + .05, .55, .55));
  if (bound > min(best, .2)) return vec2(bound, 0.);
  // Its wall bends gently in plan, and its floor and roof reach out by different amounts along it.
  float x = q.x;
  float lf = .42 + .07 * sin(x * 1.7 + .8), lr = .5 + .12 * cos(x * 1.9 - .3);
  vec2 uv = vec2(q.z - .05 * sin(x * 2.2 + .4), q.y - .004);
  vec2 sec = section(uv, lf, lr);
  float ex = abs(x) - SW;
  vec2 res = vec2(SHELL(max(sec.x - .004, ex) * .95), 82.);
  // Its edges: the section at each end, and the free edges of the floor and the roof.
  float edge = length(vec2(sec.x, ex)) - .0045;
  edge = min(edge, length(vec2(length(uv - vec2(.3 + lf, 0.)), max(ex, 0.))) - .0045);
  edge = min(edge, length(vec2(length(uv - vec2(.24 + lr, .95)), max(ex, 0.))) - .0045);
  res = U(res, vec2(edge * .95, 62.));
  // Lines along it, from the floor up the wall and over the roof, and light flowing along them.
  float lx = abs(fract(x / .16 + .5) - .5) * .16;
  float flow = max(length(vec2(lx, sec.x)) - .004, ex + .04);
  flow = max(flow, (abs(fract(sec.y * 2.5 - uTime * .35) - .5) - .3) * .4);
  return U(res, vec2(flow * .95, 62.));
}

/** A shard of a broken plane: the part of the rectangle (half-size b) on the positive side of two cut lines (n.xy \xB7 q > n.z), moved apart by e: shifted by m, turned in its plane and tipped, about its centre c. Returns (fill, edge). */
vec2 shard(vec3 q, vec2 b, vec3 l1, vec3 l2, vec2 c, vec3 m, float spin, float tip, float e) {
  q -= m * e;
  q.xy -= c;
  q.xy *= rot(spin * e);
  q.yz *= rot(tip * e);
  q.xy += c;
  float poly = max(sdRect(q.xy, b), max(l1.z - dot(l1.xy, q.xy), l2.z - dot(l2.xy, q.xy)));
  return vec2(max(poly, abs(q.z) - .007), max(abs(poly) - .0045, abs(q.z) - .011));
}

vec2 planes(vec3 p, float best) {
  vec3 q = p - FC;
  float bound = sdBox(q - vec3(.05, .1, -.05), vec3(.62, .6, .5));
  if (bound > min(best, .2)) return vec2(bound, 0.);
  float v = fract(uTime / 9.);
  float e = smoothstep(.12, .42, v) * (1. - smoothstep(.62, .92, v));
  const vec3 NONE = vec3(0., 0., -1e3);
  // The front layer, leaning back, broken in three.
  vec3 a = q - vec3(0., 0., .12);
  a.xz *= rot(-.45); a.yz *= rot(.32);
  vec3 l1 = vec3(.949, -.316, .0094), l2 = vec3(.781, .625, .2936);
  vec2 s = shard(a, vec2(.4, .27), -l1, NONE, vec2(-.2, 0.), vec3(-.16, .05, .1), .18, .25, e);
  s = min(s, shard(a, vec2(.4, .27), l1, -l2, vec2(.15, -.06), vec3(.03, -.1, .2), -.12, -.3, e));
  s = min(s, shard(a, vec2(.4, .27), l2, NONE, vec2(.3, .17), vec3(.17, .14, .06), .3, .4, e));
  // The back layer, higher, leaning forward, broken in three.
  vec3 bq = q - vec3(.1, .24, -.18);
  bq.xz *= rot(-.2); bq.yz *= rot(-.28);
  vec3 l3 = vec3(.985, .172, -.0838), l4 = vec3(.316, .949, .0254);
  s = min(s, shard(bq, vec2(.32, .2), -l3, NONE, vec2(-.2, 0.), vec3(-.12, .1, -.08), -.2, .3, e));
  s = min(s, shard(bq, vec2(.32, .2), l3, l4, vec2(.12, .1), vec3(.1, .16, -.1), .25, -.2, e));
  s = min(s, shard(bq, vec2(.32, .2), l3, -l4, vec2(.12, -.1), vec3(.12, -.04, -.16), -.15, .35, e));
  return U(vec2(SHELL(s.x), 83.), vec2(s.y, 63.));
}

/** A flat shape on the canvas: a rectangle at c, half-size h, turned by a. */
float shape(vec2 q, vec2 c, vec2 h, float a) { q -= c; q *= rot(a); return sdRect(q, h); }

/** A painted shape lifted off the canvas by l: carried out along the canvas's normal, tipped, and given depth. */
float lifted(vec3 q, vec2 c, vec2 h, float a, vec3 m, vec2 tip, float l) {
  q -= vec3(c, .009) + m * l;
  q.yz *= rot(tip.x * l); q.xz *= rot(tip.y * l);
  q.xy *= rot(a);
  return sdBox(q, vec3(h, .003 + .025 * l));
}

vec2 painting(vec3 p, float best) {
  vec3 q = p - CV;
  float bound = sdBox(q - vec3(.2, 0., .05), vec3(.72, .66, .66));
  if (bound > min(best, .2)) return vec2(bound, 0.);
  const float K = 1.18;   // the canvas is drawn in units of K
  q.xz *= rot(1.15); q.yz *= rot(-.1);
  q /= K;
  // The canvas, and the flat shapes painted on it.
  vec2 res = vec2(SHELL(sdBox(q, vec3(.34, .25, .006)) * K), 84.);
  res = U(res, vec2(max(abs(sdRect(q.xy, vec2(.34, .25))) - .005, abs(q.z) - .009) * K, 64.));
  float flat_ = min(shape(q.xy, vec2(.06, -.17), vec2(.17, .011), .42), shape(q.xy, vec2(.21, .13), vec2(.032), .42));
  flat_ = min(flat_, shape(q.xy, vec2(-.03, .18), vec2(.13, .008), -.5));
  res = U(res, vec2(max(flat_, abs(q.z - .007) - .002) * K, 24.));
  // Three of them lift off into space, one after another, and settle back; their outlines stay on the canvas.
  float v = fract(uTime / 10.);
  float l0 = smoothstep(.06, .3, v) * (1. - smoothstep(.62, .86, v));
  float l1 = smoothstep(.16, .4, v) * (1. - smoothstep(.68, .92, v));
  float l2 = smoothstep(.26, .5, v) * (1. - smoothstep(.74, .98, v));
  float sh = lifted(q, vec2(-.09, .07), vec2(.21, .022), .42, vec3(.06, .12, .34), vec2(.5, -.6), l0);
  sh = min(sh, lifted(q, vec2(.13, -.06), vec2(.08, .05), -.24, vec3(.12, -.04, .5), vec2(-.4, .5), l1));
  sh = min(sh, lifted(q, vec2(-.17, -.12), vec2(.055), .7, vec3(-.06, -.1, .24), vec2(.6, .4), l2));
  res = U(res, vec2(sh * K, 24.));
  float trace = min(min(abs(shape(q.xy, vec2(-.09, .07), vec2(.21, .022), .42)), abs(shape(q.xy, vec2(.13, -.06), vec2(.08, .05), -.24))), abs(shape(q.xy, vec2(-.17, -.12), vec2(.055), .7)));
  res = U(res, vec2(max(trace - .0025, abs(q.z - .007) - .0025) * K, 64.));
  // A slim stand.
  res = U(res, vec2(sdCapsule(q, vec3(0., -.25, -.02), vec3(0., -.49, -.02), .005) * K, 24.));
  return res;
}

const vec3 VP[3] = vec3[3](${i.map(d).join(", ")});
const vec3 LE[9] = vec3[9](${u.flat().map(d).join(", ")});   // where each line stops
const vec4 FAN[3] = vec4[3](${y.map(e=>`vec4(${e.map(v).join(", ")})`).join(", ")});   // each fan's bound: its axis's end, its radius

vec2 perspective(vec3 p, float best) {
  // Three vanishing points at once, each with a fan of faint construction lines; light runs along them to the points.
  float d = 1e5, s = 0.;
  for (int f = 0; f < 3; f++) {
    vec3 a = VP[f];
    if (sdCapsule(p, a, FAN[f].xyz, FAN[f].w) > min(d, best)) continue;
    for (int k = 0; k < 3; k++) {
      vec3 pa = p - a, ba = LE[f * 3 + k] - a;
      float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
      float di = length(pa - ba * h);
      if (di < d) { d = di; s = h * length(ba); }
    }
  }
  d = max(d - .0022, (abs(fract(s * 10. + uTime * .5) - .5) - .2) / 10.);
  float pt = min(min(length(p - VP[0]), length(p - VP[1])), length(p - VP[2])) - .022;
  return vec2(min(d, pt), 65.);
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(.05, GY + .9, .04), vec3(1.72, 1.02, 1.2));
  if (bound > .25) return vec2(bound, 0.);
  gRise = .5 - .5 * cos(TAU * uTime / 12.);
  // The ground: a dark slab, its top rising toward the front right.
  float gy = groundY(p.xz);
  float fp = sdRect(p.xz - vec2(.065, .04), vec2(1.615, 1.14));
  vec2 res = vec2(SHELL(max((abs(p.y - gy + .015) - .015) * .95, fp)), 86.);
  res = U(res, vec2(length(vec2(fp, p.y - gy)) - .004, 66.));
  res = U(res, field(p, res.x));
  res = U(res, surface(p, res.x));
  res = U(res, planes(p, res.x));
  res = U(res, painting(p, res.x));
  res = U(res, perspective(p, res.x));
  return res;
}
`};export{w as scene};
