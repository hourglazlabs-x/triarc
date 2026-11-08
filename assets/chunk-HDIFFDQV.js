import{a}from"./chunk-4QM5HSGV.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var s={id:"D03-ruled-surfaces",cam:[1.3,1.85,4.66],target:[0,-.2,-.1],floor:-.8,ring:2,accent:e(a.D03),poster:2.2,parts:[{name:"straight line",view:{az:-75,el:-6,zoom:.76}},{name:"guide lines",view:{az:-75,el:-6,zoom:.76}},{name:"hyperbolic paraboloid",view:{az:-75,el:4,zoom:.76}},{name:"porch vault",view:{az:-110,el:-2,zoom:.8}},{name:"conoid",view:{az:49,el:-6,zoom:.76}},{name:"Schools roof",view:{az:-4,el:-6,zoom:.62}},{name:"hyperboloid",view:{az:-22,el:-8,zoom:.64}},{name:"hyperboloid opening",view:{az:-2,el:-12,zoom:.6}},{name:"helicoid",view:{az:22,el:-8,zoom:.64}},{name:"double-twist column",view:{az:44,el:-10,zoom:.72}},{name:"nave model",view:{az:0,el:8,zoom:.66}}],glsl:`
const float Y0 = -.55;                       // the front step of the plinth; the middle is .08 higher, the back .16
const vec3 HPC = vec3(-1.05, Y0 + .3, .5);   // the hyperbolic paraboloid's centre
const float HA = .26, HK = 2.2;              // its half-size and twist: y = HK u w
const vec3 SC = vec3(.1, Y0, .5);            // the Schools, 1 unit = 15 m
const float LX = .8, LZ = .4, HB = .3;       // 24 x 12 m; the beam's height
const vec3 CC = vec3(1.25, Y0, .5);          // the conoid
const vec3 VC = vec3(-1.15, Y0 + .08, -.2);  // the porch vault
const vec3 YC = vec3(-.58, Y0 + .08, -.2);   // the hyperboloid of strings
const vec3 OC = vec3(0., Y0 + .08, -.2);     // the hyperboloid openings
const vec3 EC = vec3(.58, Y0 + .08, -.2);    // the helicoid
const vec3 DC = vec3(1.15, Y0 + .08, -.2);   // the double-twist column
const vec3 NM = vec3(0., Y0 + .16, -.85);    // the nave model

vec3 palette(int i) {
  if (i == 0) return vec3(1., .88, .52);    // straight line
  if (i == 1) return vec3(.58, .90, 1.);    // guide lines
  if (i == 2) return vec3(.74, .84, 1.);    // hyperbolic paraboloid
  if (i == 3) return vec3(1., .74, .50);    // porch vault: brick
  if (i == 4) return vec3(.66, 1., .80);    // conoid
  if (i == 5) return vec3(.96, .78, .60);   // Schools roof: tile
  if (i == 6) return vec3(.64, .80, 1.);    // hyperboloid
  if (i == 7) return vec3(.92, .90, .80);   // hyperboloid opening: stone, and light
  if (i == 8) return vec3(.82, .70, 1.);    // helicoid
  if (i == 9) return vec3(.94, .88, .78);   // double-twist column: stone
  return vec3(.97, .96, .92);               // nave model: plaster
}

float box2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
/** Raised along lines: x's distance to the nearest multiple of k (for rulings drawn on a surface). */
float rul(float x, float k) { return abs(fract(x / k + .5) - .5) * k; }
/** The section, through the front row's axis: the front halves of the Schools (their 9 cm walls, the beam, the
 * classrooms), the paraboloid and the conoid are removed. */
float cutS(vec3 p) { return p.z - .5; }
float sq(vec2 q, float s) { q = abs(q); return max(q.x, q.y) - s; }
/** An eight-pointed star: two squares, one turned 45\xB0. */
float star(vec2 q, float s) { return min(sq(q, s), sq(vec2(q.x + q.y, q.y - q.x) * .7071, s)); }
/** An arch between P and Q rising by rise at its middle, radius r. */
float arch(vec3 p, vec3 P, vec3 Q, float rise, float r) {
  vec2 d = Q.xz - P.xz; float L = max(length(d), 1e-3); vec2 u = d / L;
  vec2 rel = p.xz - P.xz;
  float x = dot(rel, u), z = rel.x * u.y - rel.y * u.x;
  float w = clamp(x / L, 0., 1.);
  float y = mix(P.y, Q.y, w) + rise * 4. * w * (1. - w);
  float sl = ((Q.y - P.y) + rise * 4. * (1. - 2. * w)) / L;
  return length(vec3(x - w * L, (p.y - y) * inversesqrt(1. + sl * sl), z)) - r;
}

vec2 map(vec3 p) {
  float ua = uApart;
  float bound = sdBox(p - vec3(0., -.15 + .2 * ua, -.1), vec3(1.6, .55 + .3 * ua, 1.1));
  if (bound > .25) return vec2(bound, 0.);
  // The stepped plinth (not a part).
  float pl = sdBox(p - vec3(0., Y0 - .03, .5), vec3(1.52, .03, .46));
  pl = min(pl, sdBox(p - vec3(0., Y0 + .01, -.25), vec3(1.52, .07, .3)));
  pl = min(pl, sdBox(p - vec3(0., Y0 + .05, -.85), vec3(1.52, .11, .3)));
  vec2 res = vec2(pl, 4.);

  // 0, 1, 2 \xB7 The hyperbolic paraboloid: two skew guide lines (its edges w = \xB1a), the straight line that slides along
  // them (to and fro in time), and the saddle it sweeps, with both families of straight lines raised on it.
  {
    vec3 q = p - HPC;
    if (sdBox(q - vec3(0., .25 * ua, 0.), vec3(HA + .08, .25 + .3 * ua, HA + .08)) < .1) {
      float g0 = built(0), g1 = built(1), g2 = built(2);
      float u0 = HA * .92 * sin(uTime * .55 + .4);
      if (g0 > 0.) {
        vec3 o = q - apart(vec3(0., .34, 0.));
        float d = sdCapsule(o, vec3(u0, -HK * u0 * HA, -HA), vec3(u0, HK * u0 * HA, HA), .009);
        res = U(res, vec2(cutaway(max(d, abs(o.z) - HA * g0 - .01), cutS(o + HPC)), 60.));
      }
      if (g1 > 0.) {
        vec3 o = q - apart(vec3(0., .17, 0.));
        float w = o.z < 0. ? -HA : HA, e = HA * 1.25 * g1;
        float d = sdCapsule(o, vec3(-e, -HK * e * w, w), vec3(e, HK * e * w, w), .008);
        d = min(d, length(o - vec3(clamp(o.x, -e, e) > 0. ? e : -e, HK * (o.x > 0. ? e : -e) * w, w)) - .016);
        res = U(res, vec2(cutaway(d, cutS(o + HPC)), 21.));
      }
      if (g2 > 0.) {
        vec3 o = q;
        float hs = HK * o.x * o.z;
        float d = (o.y - hs) * inversesqrt(1. + HK * HK * (o.x * o.x + o.z * o.z));
        float rl = min(rul(o.x, HA / 4.), rul(o.z, HA / 4.));
        d = max(abs(d) - .0028 - .0035 * (1. - smoothstep(0., .006, rl)), max(abs(o.x), abs(o.z)) - HA);
        d = max(d, o.x - mix(-HA, HA, g2));
        res = U(res, vec2(cutaway(d, cutS(o + HPC)), 22.));
      }
      // Its stand (not a part).
      res = U(res, vec2(min(sdCapsule(q, vec3(0., Y0 - HPC.y, 0.), vec3(0., -.06, 0.), .012), sdCylinder(q - vec3(0., Y0 - HPC.y + .01, 0.), .01, .07)), 4.));
    }
  }

  // 3 \xB7 A porch vault of the crypt: a brick vault between two arches on leaning pillars, swept by straight lines from
  // one arch to the other (ruled, close to a hyperbolic paraboloid), its straight edges, a ceramic cross.
  {
    vec3 q = p - VC - apart(vec3(-.1, .3, 0.));
    if (sdBox(q - vec3(0., .2, 0.), vec3(.3, .24, .25)) < .1) {
      float g = built(3);
      if (g > 0.) {
        vec3 A0 = vec3(-.21, .36, -.15), A1 = vec3(.21, .3, -.15), B0 = vec3(-.18, .29, .15), B1 = vec3(.18, .35, .15);
        float v = clamp((q.z + .15) / .3, 0., 1.);
        float xa = mix(A0.x, B0.x, v), xb = mix(A1.x, B1.x, v);
        float s = clamp((q.x - xa) / (xb - xa), 0., 1.);
        float hA = mix(A0.y, A1.y, s) + .05 * 4. * s * (1. - s), hB = mix(B0.y, B1.y, s) + .045 * 4. * s * (1. - s);
        float hv = mix(hA, hB, v);
        float inside = max(max(xa - q.x, q.x - xb), abs(q.z) - .15);
        float d = max((abs(q.y - hv + .008) - .007 - .003 * (1. - smoothstep(0., .005, rul(s * .4, .05)))) * .75, inside);
        d = max(d, s - g * 1.02);
        float rib = 1e5, col = 1e5;
        for (int e = ZERO; e < 4; e++) {
          vec3 P = e == 0 ? A0 : e == 1 ? B0 : e == 2 ? A0 : A1, Q = e == 0 ? A1 : e == 1 ? B1 : e == 2 ? B0 : B1;
          rib = min(rib, arch(q, P - vec3(0., .014, 0.), Q - vec3(0., .014, 0.), e == 0 ? .05 : e == 1 ? .045 : 0., .012));
          vec3 T = e == 0 ? A0 : e == 1 ? A1 : e == 2 ? B0 : B1;   // a leaning pillar under each corner
          vec3 ft = vec3(T.x * 1.18 + (e == 1 ? .03 : -.02), 0., T.z * 1.25 + (e == 2 ? .02 : 0.));
          col = min(col, sdCapsule(q, ft, T - vec3(0., .02, 0.), .018 - .004 * float(e & 1)));
        }
        d = min(d, max(min(rib, col), q.y - mix(0., .45, g)));
        res = U(res, vec2(cutaway(d, cutS(q + VC)), 23.));
        vec2 c = vec2(s - .5, v - .5);
        float cr = max(min(box2(c, vec2(.2, .04)), box2(c, vec2(.04, .2))) * .2, abs(q.y - hv + .019) - .0025);
        res = U(res, vec2(cutaway(max(max(cr, inside), s - g * 1.02), cutS(q + VC)), 63.));
      }
    }
  }

  // 4 \xB7 A conoid: lines in parallel vertical planes from a straight axis (the top bar) to a wave (the lower wire).
  {
    vec3 q = p - CC - apart(vec3(.12, .22, 0.));
    if (sdBox(q - vec3(0., .2, 0.), vec3(.28, .26, .24)) < .1) {
      float g = built(4);
      if (g > 0.) {
        float x = clamp(q.x, -.22, .22);
        float yc = .14 + .07 * sin(x * 21.4);
        float t = clamp((q.z + .18) / .36, 0., 1.);
        float ys = mix(yc, .4, t);
        float sl = (.4 - yc) / .36;
        float d = (q.y - ys) * inversesqrt(1. + sl * sl);
        d = max(abs(d) - .0025 - .003 * (1. - smoothstep(0., .005, rul(q.x, .033))), max(abs(q.x) - .22, abs(q.z) - .18));
        float axis = sdCapsule(q, vec3(-.25, .4, .18), vec3(.25, .4, .18), .009);
        float wave = length(vec2(q.y - yc, q.z + .18)) - .006;
        wave = max(wave, abs(q.x) - .23);
        d = min(d, min(axis, wave));
        d = max(d, q.x - mix(-.26, .26, g));
        res = U(res, vec2(cutaway(d, cutS(q + CC)), 24.));
        res = U(res, vec2(min(sdCapsule(q, vec3(-.25, 0., .18), vec3(-.25, .4, .18), .008), sdCapsule(q, vec3(.25, 0., .18), vec3(.25, .4, .18), .008)), 4.));
      }
    }
  }

  // 5 \xB7 The Sagrada Fam\xEDlia Schools: a roof of straight lines across a central beam on three pillars, waving with the
  // fa\xE7ades (a conoid each side); walls only 9 cm thick, conoids too (wavy at the foot, straight at the top); two
  // partitions for the three classrooms. The generating lines are raised on roof and walls.
  {
    vec3 q = p - SC - apart(vec3(0., .26, 0.));
    if (sdBox(q - vec3(0., .2, 0.), vec3(LX + .06, .25, LZ + .06)) < .1) {
      float g = built(5);
      if (g > 0.) {
        float x = clamp(q.x, -LX, LX), sw = .15 * sin(x * 11.781);
        float yr = HB + q.z * sw;
        float slx = q.z * .15 * 11.781 * cos(x * 11.781);
        float roof = (q.y - yr) * inversesqrt(1. + sw * sw + slx * slx);
        roof = abs(roof) - .003 - .0025 * (1. - smoothstep(0., .004, rul(q.x, .05)));
        roof = max(roof, max(abs(q.x) - LX - .025, abs(q.z) - LZ - .025));
        // The long walls: from a wave at the foot to the straight eave, point by point in each cross-section.
        float sz = q.z < 0. ? -1. : 1.;
        float ye = HB + sz * LZ * sw;
        float zb = sz * (LZ + .03 * sin(x * 11.781 + sz * 1.3));
        float zw = mix(zb, sz * LZ, clamp(q.y / ye, 0., 1.));
        float wall = max(abs(q.z - zw) * .9 - .003 - .002 * (1. - smoothstep(0., .004, rul(q.x, .04))), max(max(-q.y, q.y - ye), abs(q.x) - LX));
        // The end walls, the same way across.
        float sx = q.x < 0. ? -1. : 1.;
        float zc = clamp(q.z, -LZ, LZ);
        float yee = HB + zc * .15 * sin(sx * LX * 11.781);
        float xb = sx * (LX + .025 * sin(zc * 11.78 + 1.));
        float xw = mix(xb, sx * LX, clamp(q.y / yee, 0., 1.));
        wall = min(wall, max(abs(q.x - xw) * .9 - .003, max(max(-q.y, q.y - yee), abs(q.z) - LZ)));
        // The two partitions, the beam and its three pillars.
        float part = max(max(abs(abs(q.x) - .267) - .003, abs(q.z) - LZ), max(-q.y, q.y - yr));
        float beam = sdBox(q - vec3(0., HB - .014, 0.), vec3(LX, .012, .01));
        vec3 pq = vec3(abs(q.x) > LX * .5 ? abs(q.x) - (LX - .03) : q.x, q.y, q.z);
        beam = min(beam, sdBox(pq - vec3(0., HB * .5, 0.), vec3(.008, HB * .5, .008)));
        float d = min(min(roof, wall), min(part, beam));
        res = U(res, vec2(cutaway(rise(d, 5, q.y, 0., HB + .07), cutS(q + SC)), 25.));
      }
    }
  }

  // 6 \xB7 Strings between two circles: the upper circle turned, they outline a hyperboloid (one family of its lines).
  {
    vec3 q = p - YC - apart(vec3(0., .2, 0.));
    if (sdBox(q - vec3(0., .3, 0.), vec3(.2, .34, .2)) < .1) {
      float g = built(6);
      if (g > 0.) {
        float R = .15, H = .58, tw = 2.2 * smoothstep(0., 1., g), t = clamp((q.y - .04) / H, 0., 1.);
        float a = atan(q.z, q.x) - tw * .5 - atan((2. * t - 1.) * tan(tw * .5));
        float n = 28., kf = floor(a / TAU * n);
        float d = 1e5;
        for (int i = ZERO; i < 2; i++) {
          float th = (kf + float(i)) * TAU / n;
          d = min(d, sdCapsule(q, vec3(R * cos(th), .04, R * sin(th)), vec3(R * cos(th + tw), .04 + H, R * sin(th + tw)), .0035));
        }
        d = min(d, min(sdTorus(q - vec3(0., .04, 0.), vec2(R, .009)), sdTorus(q - vec3(0., .04 + H, 0.), vec2(R, .009))));
        d = min(d, sdCylinder(q - vec3(0., .015, 0.), .015, .19));
        res = U(res, vec2(cutaway(d, cutS(q + YC)), 26.));
      }
    }
  }

  // 7 \xB7 Openings shaped as hyperboloids cut out of a block, their straight lines raised, light in their throats.
  {
    vec3 q = p - OC - apart(vec3(0., .16, 0.));
    if (sdBox(q - vec3(0., .25, 0.), vec3(.26, .27, .1)) < .1) {
      float g = built(7);
      if (g > 0.) {
        float block = sdBox(q - vec3(0., .25, 0.), vec3(.23, .22, .055));
        vec3 h = vec3(q.x - clamp(round(q.x / .145), -1., 1.) * .145, q.y - .26, q.z);
        float rr = length(h.xy), rz = .038 * sqrt(1. + h.z * h.z / .0009);
        float an = atan(h.y, h.x), sk = atan(h.z / .03);
        float lines = min(rul(an - sk, TAU / 16.), rul(an + sk, TAU / 16.)) * rr;
        float hole = (rz - rr) * .6 + .0025 * (1. - smoothstep(0., .005, lines));
        float d = max(block, hole);
        d = max(d, q.y - mix(0., .5, g));
        res = U(res, vec2(cutaway(d, cutS(q + OC)), 27.));
        float glow = max(rr - .038 + .004, abs(h.z) - .002);
        res = U(res, vec2(cutaway(max(glow, q.y - mix(0., .5, g)), cutS(q + OC)), 67.));
      }
    }
  }

  // 8 \xB7 A helicoid: a straight line wrapping round a vertical axis along a helix, its rulings raised.
  {
    vec3 q = p - EC - apart(vec3(0., .2, 0.));
    if (sdBox(q - vec3(0., .32, 0.), vec3(.18, .34, .18)) < .1) {
      float g = built(8);
      if (g > 0.) {
        float P = .24, r = length(q.xz), a = atan(q.z, q.x);
        float y0 = (a / TAU) * P;
        float y = q.y - .06 - y0;
        y -= round(y / P) * P;
        float d = abs(y) * inversesqrt(1. + pow(P / (TAU * max(r, .02)), 2.)) - .003;
        d -= .003 * (1. - smoothstep(0., .006, rul(a, TAU / 18.) * r));
        d = max(d, max(r - .155, max(.012 - r, max(.05 - q.y, q.y - .6))));
        d = min(d, sdCapsule(q, vec3(0., .02, 0.), vec3(0., .62, 0.), .014));
        res = U(res, vec2(cutaway(rise(d, 8, q.y, 0., .64), cutS(q + EC)), 28.));
      }
    }
  }

  // 9 \xB7 A double-twist column: an eight-pointed star (two squares), intersected with itself twisted the other way;
  // it turns toward a circle as it rises (the section's points double where the two twists interleave).
  {
    vec3 q = p - DC - apart(vec3(.1, .2, 0.));
    if (sdBox(q - vec3(0., .4, 0.), vec3(.14, .42, .14)) < .1) {
      float g = built(9);
      if (g > 0.) {
        // Up to .35 the star twists 22.5\xB0 each way (eight points become sixteen), then that section twists 11.25\xB0
        // more each way (sixteen become thirty-two): four turned copies of the star, intersected.
        float y = q.y - .06, t1 = clamp(y / .35, 0., 1.) * .3927, t2 = clamp((y - .35) / .35, 0., 1.) * .19635;
        float d = -1e5;
        for (int i = ZERO; i < 4; i++) {
          float th = ((i & 1) == 0 ? t1 : -t1) + (i < 2 ? t2 : -t2), c = cos(th), s = sin(th);
          d = max(d, star(vec2(c * q.x - s * q.z, s * q.x + c * q.z), .085));
        }
        d *= .6;
        d = max(d, max(.06 - q.y, q.y - .76));
        d = min(d, sdBox(q - vec3(0., .03, 0.), vec3(.12, .03, .12)));
        d = min(d, sdCylinder(q - vec3(0., .78, 0.), .02, .1));
        res = U(res, vec2(cutaway(rise(d, 9, q.y, 0., .8), cutS(q + DC)), 29.));
      }
    }
  }

  // 10 \xB7 A bay of the nave model: tree-like columns branching to carry a vault of hyperboloids (a slab pierced by
  // waisted openings), on the model's own base.
  {
    vec3 q = p - NM - apart(vec3(0., .3, -.05));
    if (sdBox(q - vec3(0., .38, 0.), vec3(.58, .42, .3)) < .1) {
      float g = built(10);
      if (g > 0.) {
        float d = sdBox(q - vec3(0., .012, 0.), vec3(.56, .012, .27));
        vec3 f = vec3(abs(q.x) - .22, q.y, abs(q.z) - .11);
        d = min(d, sdCapsule(f, vec3(0., .02, 0.), vec3(0., .44, 0.), .02));
        vec3 br = polarRep(f - vec3(0., .44, 0.), 4.);
        d = min(d, sdCapsule(br, vec3(0.), vec3(.1, .2, 0.), .011));
        // The vault: a slab with a hyperboloid opening in every cell.
        vec3 c = vec3(q.x - (clamp(floor(q.x / .14), -4., 3.) + .5) * .14, q.y - .68, q.z - (clamp(floor(q.z / .135), -2., 1.) + .5) * .135);
        float rc = length(c.xz), rz = .03 * sqrt(1. + c.y * c.y / .0004);
        float vault = max(sdBox(q - vec3(0., .68, 0.), vec3(.56, .035, .27)), (rz - rc) * .55);
        float an = atan(c.z, c.x), sk = atan(c.y / .02);
        vault += .0025 * (1. - smoothstep(0., .004, min(rul(an - sk, TAU / 12.), rul(an + sk, TAU / 12.)) * rc)) * step(rc, rz + .006);
        d = min(d, vault);
        res = U(res, vec2(cutaway(rise(d, 10, q.y, 0., .74), cutS(q + NM)), 30.));
      }
    }
  }
  return res;
}
`};export{s as scene};
