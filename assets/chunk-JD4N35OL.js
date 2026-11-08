import{a as e}from"./chunk-4QM5HSGV.js";import{a}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var o={id:"D02-great-conservatory",cam:[2.43,2.21,3.89],target:[0,-.22,0],floor:-1.6,ring:2.1,accent:a(e.D02),poster:1.5,parts:[{name:"foundation walls",view:{az:18,el:-14,zoom:.42}},{name:"battered piers",view:{az:8,el:-12,zoom:.34}},{name:"heating system",inside:!0,view:{az:-4,el:20,zoom:.5}},{name:"cast-iron columns",inside:!0,view:{az:-8,el:-4,zoom:.62}},{name:"laminated ribs",view:{az:62,el:-4,zoom:.7}},{name:"side arches",view:{az:64,el:-8,zoom:.66}},{name:"curved ridge-and-furrow roof",view:{az:20,el:14,zoom:.48}},{name:"sash-bars",view:{az:20,el:10,zoom:.34}},{name:"glass sheets",view:{az:4,el:4,zoom:.9}},{name:"carriage way",inside:!0,view:{az:-14,el:22,zoom:.62}},{name:"gallery",inside:!0,view:{az:-24,el:-2,zoom:.55}}],glsl:`
const float G = -.45;              // the floor inside
const float XE = 1.385;            // half the length: 277 ft
const float ZE = .615;             // half the width over the walls: 123 ft
const float HT = .67;              // 67 ft to the highest part
const float BX = 2. * XE / 19.;    // the long walls' nineteen bays
const float BZ = 2. * ZE / 8.;     // the end walls' eight bays
const float ZC = 2. * BZ;          // the columns' lines: the vault over the middle four bays
const float RN = ZC;               // the vault's radius
const float YS = HT - RN;          // its springing, on the columns
const float YW = .03;              // the walls' height: about 3 ft
const float AA = ZE - ZC;          // an aisle's curve: across...
const float AB = YS - YW;          // ...and up
const float FP = BX * .5;          // the folds: two to a bay
const float FH = .0165;            // a fold's depth: each face one 48 in bar long
const float SBS = .02;             // sash-bars drawn every 2 ft
const float YG = .27;              // the gallery's floor

vec3 palette(int i) {
  if (i == 0) return vec3(.98, .84, .62);   // foundation walls: sandstone
  if (i == 1) return vec3(1., .76, .54);    // battered piers
  if (i == 2) return vec3(1., .52, .38);    // heating system
  if (i == 3) return vec3(.60, .78, 1.);    // cast-iron columns
  if (i == 4) return vec3(.98, .80, .50);   // laminated ribs: timber
  if (i == 5) return vec3(.94, .86, .56);   // side arches
  if (i == 6) return vec3(.70, .96, .84);   // curved ridge-and-furrow roof: its rafters and ridges
  if (i == 7) return vec3(.90, .94, .72);   // sash-bars
  if (i == 8) return vec3(.62, .93, 1.);    // glass sheets
  if (i == 9) return vec3(.86, .80, .70);   // carriage way
  return vec3(1., .66, .52);                // gallery
}

float sdBox2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
float band(float x, float lo, float hi) { return max(lo - x, x - hi); }
/** The nearest bay line along the building: the nineteen bays' twenty lines. */
float bayX(float x) { return clamp(-XE + BX * floor((x + XE) / BX + .5), -XE, XE); }
/** The fold along the building: 0 over a furrow (on the bay lines and halfway), 1 under a ridge. */
float foldX(float x) { return 1. - abs(fract((x + XE) / FP) - .5) * 2.; }
/** Distance outward from the roof's frame line in the section (y from the floor): the vault, or an aisle's curve. */
float roofD(float az, float y) {
  if (az < ZC) return length(vec2(az, y - YS)) - RN;
  vec2 e = vec2((az - ZC) / AA, (y - YW) / AB);
  return (length(e) - 1.) * AA;
}
/** Where along the roof's curve a point is (arc length from its foot or crown), for the sash-bars. */
float roofS(float az, float y) {
  if (az < ZC) return RN * atan(max(y - YS, 0.), az);
  return AA * atan(max(y - YW, 0.) / AB, (az - ZC) / AA);
}
/** Where the roof may be: above the springing over the vault, above the walls over the aisles (negative). */
float roofFoot(float az, float y) { return (az < ZC ? YS : YW) - y; }
/** Inside the section's outline (negative) for the glazed gable ends. */
float profile(float az, float y) {
  float d = max(roofD(az, y), az - ZE);
  d = min(d, max(az - ZC, y - YS));
  return max(max(d, YW - y), -y);
}

// \u2500\u2500 0 \xB7 foundation walls, with a blind segmental arch in each bay \u2500\u2500
float walls(vec3 q) {
  float ax = abs(q.x), az = abs(q.z), y = q.y - G;
  if (y > YW + .02) return y - YW - .006;
  // the nearest wall: a long side, or an end
  bool side = (ZE - az) < (XE - ax);
  float w = side ? ZE - az : XE - ax;           // inward from the outer face
  float u = side ? q.x - bayX(q.x) : az - BZ * floor(az / BZ + .5);
  float t = .025 - .005 * clamp(y / YW, 0., 1.);   // battered: thinner as it rises
  float d = max(max(-w, w - t), band(y, 0., YW));
  d = max(d, side ? ax - XE : az - ZE);
  // the blind arch: a shallow recess in the outer face, under a segmental curve
  float arch = y - .012 - (sqrt(max(.159 * .159 - u * u, 0.)) - (.159 - .01));
  d = max(d, -max(max(arch, .004 - y), max(w - .0025, -w - .01)));
  return d;
}

// \u2500\u2500 1 \xB7 battered piers with flat copings, dividing the bays \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
float piers(vec3 q) {
  float ax = abs(q.x), az = abs(q.z), y = q.y - G;
  if (y > .06) return y - .05;
  bool side = (ZE - az) < (XE - ax);
  vec2 c = side ? vec2(q.x - bayX(q.x), az - ZE + .0125) : vec2(az - BZ * floor(az / BZ + .5), ax - XE + .0125);
  float hw = .018 - .004 * clamp(y / .042, 0., 1.);
  float d = max(sdBox2(c, vec2(hw)), band(y, 0., .042));
  return min(d, max(sdBox2(c, vec2(.0195)), band(y, .042, .047)));
}

// \u2500\u2500 2 \xB7 the heating: eight boilers under the floor, pipes, the coal railway and the flue \u2500\u2500
float heating(vec3 q) {
  float y = q.y - G;
  if (y > .01) return y - .004;
  float ax = abs(q.x), az = abs(q.z);
  // eight boilers, four under each aisle
  vec3 b = vec3(abs(ax - .5) - .25, y + .055, az - .45);
  float d = max(length(b.yz) - .024, abs(b.x) - .06);
  d = min(d, sdBox(b - vec3(0., -.006, 0.), vec3(.065, .022, .03)));
  // the hot-water pipes: four lines along the outer walls, three under each column line
  float pz = min(abs(az - ZE + .04), abs(az - ZE + .052));
  pz = min(pz, min(abs(az - ZC - .012), abs(az - ZC + .012)));
  float pipes = max(length(vec2(pz, y + .016)) - .0035, ax - XE + .03);
  pipes = min(pipes, max(length(vec2(min(abs(az - ZE + .046), abs(az - ZC)), y + .028)) - .0035, ax - XE + .03));
  // risers from the boilers to the pipes
  pipes = min(pipes, max(length(vec2(b.x - .045, abs(az - .45) - .0)) - .0035, band(y, -.05, -.016)));
  pipes = max(pipes, -y - .1);
  d = min(d, pipes);
  // the coal railway along the middle, two rails and a few wagons
  float rails = max(length(vec2(abs(q.z) - .012, y + .088)) - .0025, ax - XE - .05);
  vec3 wg = vec3(q.x - .32 * floor(q.x / .32 + .5), y + .074, q.z);
  rails = min(rails, max(sdBox(wg, vec3(.03, .011, .02)), ax - XE + .08));
  d = min(d, rails);
  // the flue, out under the east end toward the chimney in Stand Wood
  d = min(d, max(sdBox2(vec2(q.z + .45, y + .04), vec2(.014, .012)), band(q.x, .76, XE + .1)));
  return d;
}

// \u2500\u2500 3 \xB7 cast-iron columns, one at each bay along both lines \u2500\u2500\u2500\u2500\u2500\u2500\u2500
float columns(vec3 q) {
  float y = q.y - G;
  vec2 c = vec2(q.x - bayX(q.x), abs(q.z) - ZC);
  float d = max(length(c) - .0065, band(y, 0., YS));
  d = min(d, max(sdBox2(c, vec2(.011)), band(y, YS - .016, YS)));      // the head the frames rest on
  d = min(d, max(sdBox2(c, vec2(.01)), band(y, 0., .01)));             // the base
  d = min(d, max(sdBox2(c, vec2(.0085)), abs(y - YG + .004) - .004));  // a band where the gallery is fixed
  return d;
}

// \u2500\u2500 4 \xB7 laminated ribs over the vault, 5 \xB7 side arches over the aisles \u2500\u2500
float ribs(vec3 q) {
  float y = q.y - G, az = abs(q.z);
  if (y < YS - .01 || az > ZC + .02) return max(YS - .01 - y, az - ZC - .02) + .004;
  float xl = q.x - bayX(q.x);
  float r = RN - length(vec2(az, y - YS));               // in from the frame's outer edge
  float layer = floor(clamp(r, 0., .0219) / .0055);
  float wd = mod(layer, 2.) < .5 ? .0052 : .0042;        // boards nailed together, alternate ones set back
  return max(max(abs(xl) - wd, band(r, 0., .022)), YS - y);
}
float sideArches(vec3 q) {
  float y = q.y - G, az = abs(q.z);
  if (az < ZC - .01 || y > YS + .02) return max(ZC - .01 - az, y - YS - .02) + .004;
  float xl = q.x - bayX(q.x);
  float r = -roofD(az, y);
  float layer = floor(clamp(r, 0., .0159) / .0053);
  float wd = mod(layer, 2.) < .5 ? .0046 : .0037;
  return max(max(max(abs(xl) - wd, band(r, 0., .016)), YW - y), band(az, ZC, ZE));
}

// \u2500\u2500 6 \xB7 the curved ridge-and-furrow roof: curved rafters in the furrows, ridges, and the gutters \u2500\u2500
float rfFrame(vec3 q) {
  float y = q.y - G, az = abs(q.z);
  float rd = roofD(az, y);
  if (rd < -.02 || rd > FH + .02) return max(-.02 - rd, rd - FH - .02) * .8 + .004;
  float fz = foldX(q.x);
  float xf = q.x + XE - FP * floor((q.x + XE) / FP + .5);
  float d = max(abs(xf) - .0022, band(rd, 0., .006));                       // a rafter in each furrow
  float xr = q.x + XE - FP * (floor((q.x + XE) / FP) + .5);
  d = min(d, max(abs(xr) - .0018, abs(rd - .006 - FH) - .0022));            // a ridge
  d = max(max(d, roofFoot(az, y)), az - ZE);
  // the valley gutter where the aisles meet the vault, and the eaves on the walls
  d = min(d, sdBox2(vec2(az - ZC - .006, y - YS + .004), vec2(.008, .004)));
  d = min(d, sdBox2(vec2(az - ZE + .006, y - YW - .004), vec2(.008, .004)));
  return max(d, abs(q.x) - XE);
}

// \u2500\u2500 7 \xB7 sash-bars, 8 \xB7 glass sheets \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
float sashbars(vec3 q) {
  float y = q.y - G, az = abs(q.z);
  float rd = roofD(az, y);
  float gs = .006 + FH * foldX(q.x);
  float d = 1e5;
  if (abs(rd - gs) < .03) {
    float s = roofS(az, y);
    d = max(abs(s - SBS * floor(s / SBS + .5)) - .001, abs(rd - gs + .0018) - .0014) * .85;
    d = max(max(d, roofFoot(az, y)), az - ZE);
  } else d = abs(rd - gs) - .02;
  // the gable ends' glazing bars
  float e = abs(abs(q.x) - XE);
  float zb = az - BZ * .5 * floor(az / (BZ * .5) + .5);
  float yb = y - .1 * floor(y / .1 + .5);
  d = min(d, max(min(sdBox2(vec2(zb, e), vec2(.0014, .002)), sdBox2(vec2(yb, e), vec2(.0014, .002))), profile(az, y)));
  d = min(d, max(e - .002, abs(profile(az, y) + .002) - .002));
  return max(d, abs(q.x) - XE - .002);
}
float glass(vec3 q) {
  float y = q.y - G, az = abs(q.z);
  float rd = roofD(az, y);
  float d = (abs(rd - .006 - FH * foldX(q.x)) - .0006) * .85;
  d = max(max(d, roofFoot(az, y)), max(az - ZE, abs(q.x) - XE));
  // the gable ends, with the doorway for the carriage way
  float e = max(abs(abs(q.x) - XE) - .0006, profile(az, y));
  e = max(e, -sdBox2(vec2(az, y), vec2(.1, .16)));
  return min(d, e);
}

// \u2500\u2500 9 \xB7 the carriage way, 10 \xB7 the gallery and the stairs hidden in rocks \u2500\u2500
float carriage(vec3 q) {
  float y = q.y - G, az = abs(q.z);
  if (y > .02) return y - .009;
  float d = max(sdBox2(vec2(az, y - .002), vec2(.1, .002)), abs(q.x) - XE - .03);
  return min(d, max(sdBox2(vec2(az - .1, y - .004), vec2(.0035, .004)), abs(q.x) - XE - .03));
}
float gallery(vec3 q) {
  float y = q.y - G, az = abs(q.z);
  float d = 1e5;
  float gb = max(abs(y - YG - .015) - .03, max(az - ZC - .02, ZC - .08 - az));
  if (gb < .02) {
    d = max(sdBox2(vec2(az - ZC + .032, y - YG + .002), vec2(.028, .002)), abs(q.x) - XE + BX);
    float rail = min(length(vec2(az - ZC + .059, y - YG - .035)), length(vec2(az - ZC + .059, y - YG - .018))) - .0016;
    float xp = q.x - .02 * floor(q.x / .02 + .5);
    rail = min(rail, max(sdBox2(vec2(xp, az - ZC + .059), vec2(.0012)), band(y, YG, YG + .035)));
    d = min(d, max(rail, abs(q.x) - XE + BX));
    // brackets from the columns
    vec2 c = vec2(q.x - bayX(q.x), y - YG + .012);
    d = min(d, max(max(abs(c.x) - .002, abs(c.y + (az - ZC) * .5) - .004), band(az, ZC - .058, ZC)));
  } else d = gb;
  // the rocks at the west end, rising to the gallery, with the stair's last steps showing
  vec3 r = vec3(q.x + 1.1, y, q.z + .2);
  float rb = sdBox(r - vec3(0., .14, 0.), vec3(.16, .16, .1));
  if (rb < .03) {
    float rk = sdEllipsoid(r - vec3(.02, .06, 0.), vec3(.15, .1, .09));
    rk = smin(rk, sdEllipsoid(r - vec3(-.06, .16, -.02), vec3(.07, .12, .06)), .04);
    rk = smin(rk, sdEllipsoid(r - vec3(.06, .2, -.05), vec3(.06, .09, .05)), .04);
    rk += (noise3(r * 42.) - .5) * .022 + (noise3(r * 97.) - .5) * .008;
    vec3 st = vec3(r.x - .03, r.y - .2, r.z + .065);
    float steps = max(sdBox(st, vec3(.035, .06, .018)), (fract((st.y - st.x * 1.2) / .016) - .5) * .012);
    float stair = max(sdBox(st, vec3(.035, .07, .018)), st.y - .07 - st.x * 0.);
    rk = max(rk, -stair);
    d = min(d, min(rk * .75, max(steps, -st.y - .02)));
  } else d = min(d, rb);
  return d;
}

float cutS(vec3 q) { return q.z; }

vec2 map(vec3 p) {
  float A = uApart;
  float bound = sdBox(p - vec3(0., G + .3 + .2 * A, 0.), vec3(XE + .06, .44 + .62 * A, ZE + .04 + .14 * A));
  if (bound > .02) return vec2(bound, 0.);
  float s = cutS(p);
  vec2 res = vec2(1e5, 0.);
  vec3 q;
  float d, g;

  // the floor inside the walls (not a part): a clear film over the heating
  d = max(abs(p.y - G + .003) - .003, max(abs(p.x) - XE + .025, abs(p.z) - ZE + .025));
  res = U(res, vec2(SHELL(cutaway(d, s)), 5.));

  q = p - apart(vec3(0., -.24, 0.));
  res = U(res, vec2(cutaway(rise(walls(q), 0, q.y, G - .005, G + YW + .001), s), 20.));
  q = p - apart(vec3(0., -.14, 0.));
  res = U(res, vec2(cutaway(rise(piers(q), 1, q.y, G - .005, G + .048), s), 21.));
  q = p - apart(vec3(0., -.42, 0.));
  res = U(res, vec2(cutaway(rise(heating(q), 2, q.y, G - .12, G + .002), s), 22.));
  q = p;
  res = U(res, vec2(cutaway(rise(columns(q), 3, q.y, G, G + YS), s), 23.));
  q = p - apart(vec3(0., .3, 0.));
  res = U(res, vec2(cutaway(rise(ribs(q), 4, q.y, G + YS, G + HT + .001), s), 24.));
  q = p - apart(vec3(0., .12, sign(p.z) * .14));
  res = U(res, vec2(cutaway(rise(sideArches(q), 5, q.y, G + YW, G + YS + .001), s), 25.));

  q = p - apart(vec3(0., .46, 0.));
  g = built(6);
  d = g <= 0. ? 1e5 : max(rfFrame(q), q.x - mix(-XE - .01, XE + .01, g));
  res = U(res, vec2(cutaway(d, s), 26.));
  q = p - apart(vec3(0., .6, 0.));
  g = built(7);
  d = g <= 0. ? 1e5 : max(sashbars(q), q.x - mix(-XE - .01, XE + .01, g));
  res = U(res, vec2(cutaway(d, s), 27.));
  q = p - apart(vec3(0., .74, 0.));
  g = built(8);
  d = g <= 0. ? 1e5 : max(glass(q), q.x - mix(-XE - .01, XE + .01, g));
  res = U(res, vec2(SHELL(cutaway(d, s)), 88.));

  q = p - apart(vec3(0., -.07, 0.));
  g = built(9);
  d = g <= 0. ? 1e5 : max(carriage(q), q.x - mix(-XE - .04, XE + .04, g));
  res = U(res, vec2(cutaway(d, s), 29.));
  q = p - apart(vec3(0., .05, 0.));
  res = U(res, vec2(cutaway(rise(gallery(q), 10, q.y, G, G + YG + .04), s), 30.));
  return res;
}
`};export{o as scene};
