import{a}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var c={id:"D01-sacristy",cam:[-3.122,2.073,4.101],target:[-.25,.05,0],floor:-1.45,ring:1.75,accent:e(a.D01),poster:1.5,parts:[{name:"square room",view:{zoom:.92}},{name:"scarsella",view:{az:-35,el:-6,zoom:.72}},{name:"pilasters",inside:!0,view:{az:0,el:-8,zoom:.68}},{name:"entablature",inside:!0,view:{az:0,el:-4,zoom:.68}},{name:"pendentives",inside:!0,view:{az:0,el:6,zoom:.62}},{name:"umbrella dome",inside:!0,view:{az:0,el:23,zoom:.56}},{name:"dome windows",inside:!0,view:{az:0,el:18,zoom:.5}},{name:"chapel dome",inside:!0,view:{az:-10,el:-7,zoom:.55}},{name:"lantern",view:{az:0,el:18,zoom:.6}},{name:"Donatello reliefs",inside:!0,view:{az:0,el:-2,zoom:.72}},{name:"bronze doors",inside:!0,view:{az:80,el:-10,zoom:.72}}],glsl:`
const float Y0 = -1.15;              // the floor
const float MO = .0711;              // the module: the pilasters' width at the foot, 64 cm
const float YP = Y0 + 9.5 * MO;      // the pilasters' tops: base, shaft and capital are 9.5 modules
const float YE = Y0 + 11. * MO;      // the entablature's top: the order is 11 modules
const float HS = .648;               // half the room's side (illustrative: 20 braccia)
const float T = .09;                 // the walls' thickness (illustrative)
const float YD = YE + HS;            // the dome's springing: the top of the wall arches and pendentives
const float RP = HS * 1.41421;       // the pendentives' sphere, through the room's corners
const float RD = HS;                 // the dome's inner radius
const float HC = .22;                // half the chapel's side: its dome is a hemisphere 3.96 m across
const float XC = -HS - T - HC;       // the chapel's centre, beyond the altar wall (x = -HS)
const float ZD = .434;               // the doors' centres either side of the chapel

vec3 palette(int i) {
  if (i == 0) return vec3(.92, .93, .96);   // square room: stucco
  if (i == 1) return vec3(.86, .90, 1.);    // scarsella
  if (i == 2) return vec3(.54, .66, .82);   // pilasters: pietra serena
  if (i == 3) return vec3(.62, .74, .90);   // entablature
  if (i == 4) return vec3(.78, .84, .98);   // pendentives
  if (i == 5) return vec3(.84, .90, 1.);    // umbrella dome
  if (i == 6) return vec3(.70, .94, 1.);    // dome windows
  if (i == 7) return vec3(.40, .56, 1.);    // chapel dome (its sky blue, the circles gold)
  if (i == 8) return vec3(.96, .94, .90);   // lantern
  if (i == 9) return vec3(.98, .68, .50);   // Donatello reliefs: terracotta
  return vec3(.90, .64, .34);               // bronze doors
}

// The software renderer runs every branch, so map() is straight code with cheap, shared pieces: symmetry folds
// instead of angles, Chebyshev distances for the square plan, the build's clip once per group. CHUNK (always true)
// splits it in blocks, which keeps the shader quick to compile.
#define CHUNK if (uZero == 0)
float box2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
/** The build's clip for part i: absent before its turn, then cut beyond the level s it has reached (s0 to s1). */
float upTo(int i, float s, float s0, float s1) { float g = built(i); return g <= 0. ? 1e5 : s - mix(s0, s1, g); }
/** The order's profile on a wall, w out from the wall's face and y up from the entablature's foot: architrave (half
 *  a module), frieze, cornice (a third of a module). */
float entab(float w, float y) {
  float d = box2(vec2(w - .01, y - .0178), vec2(.01, .0178));
  d = min(d, box2(vec2(w - .006, y - .0595), vec2(.006, .024)));
  return min(d, box2(vec2(w - .025, y - .0953), vec2(.025, .0118)));
}

vec2 map(vec3 p) {
  vec2 res = vec2(1e5, 0.);
  vec3 q, c;
  float d, e, g, ax, az, ch, l, w;

  CHUNK {
    // 0 \xB7 the square room: stucco walls, with the chapel's arch and two doors through the altar wall; the floor
    q = p - apart(vec3(0., -.2, 0.));
    g = upTo(0, q.y, Y0 - .04, YD + .05);
    ax = abs(q.x); az = abs(q.z); ch = max(ax, az);
    d = max(max(ch - HS - T, HS - ch), max(Y0 - q.y, q.y - YD - .04));
    e = min(box2(vec2(q.z, q.y - (Y0 + YE) * .5), vec2(HC, (YE - Y0) * .5)), length(vec2(q.z, q.y - YE)) - HC);
    e = min(e, box2(vec2(az - ZD, q.y - Y0 - .13), vec2(.06, .13)));
    d = max(d, -max(e, max(q.x + HS - .02, -q.x - HS - T - .01)));
    res = U(res, vec2(SHELL(max(d, g)), 40.));
    res = U(res, vec2(max(box2(vec2(ch, q.y - Y0 + .02), vec2(HS + T, .02)), g), 20.));

    // 1 \xB7 the scarsella: a smaller cube beyond the altar wall, open to the room; its floor; the arch of its opening
    q = p - apart(vec3(-.4, -.2, 0.));
    g = upTo(1, q.y, Y0 - .04, YE + HC + .05);
    c = vec3(q.x - XC, q.y, q.z);
    ch = max(abs(c.x), abs(c.z));
    d = max(max(ch - HC - .07, HC - ch), max(Y0 - q.y, q.y - YE - HC - .03));
    d = max(d, c.x - HC);
    res = U(res, vec2(SHELL(max(d, g)), 41.));
    d = box2(vec2(ch, q.y - Y0 + .02), vec2(HC + .07, .02));
    e = max(box2(vec2(length(vec2(q.z, q.y - YE)) - HC - .0175, q.x + HS - .006), vec2(.0175, .006)), YE - q.y);
    res = U(res, vec2(max(min(d, e), g), 21.));

    // 2 \xB7 the pilasters: folded round each corner of the room, a pair flanking the chapel's arch, a pair in the
    // chapel's far corners; a base of half a module, the shaft, a capital of one module flaring to the abacus
    q = p;
    ax = abs(q.x); az = abs(q.z); ch = max(ax, az);
    float y = q.y - Y0;
    float k = clamp((y - .605) / .071, 0., 1.);
    float t = y < .0356 ? .022 : .012 + .012 * k;
    float h = y < .0356 ? .043 : .0356 + .007 * k;
    d = box2(vec2(HS - ch - t * .5, min(ax, az) - HS + .0356), vec2(t * .5, h));
    d = min(d, box2(vec2(q.x + HS - t * .5, az - HC - .0356), vec2(t * .5, h)));
    float u = HC - az, v = q.x - XC + HC;
    d = min(d, box2(vec2(min(u, v) - t * .5, max(u, v) - .0356), vec2(t * .5, h)));
    d = max(d, max(-y, y - 9.5 * MO));
    res = U(res, vec2(max(d, upTo(2, q.y, Y0, YP + .01)), 22.));

    // 3 \xB7 the entablature, round the room and on round the chapel, broken by the chapel's arch; laid from the chapel
    // across the room
    q = p - apart(vec3(0., .1, 0.));
    az = abs(q.z); ch = max(abs(q.x), az);
    bool inChapel = q.x < -HS - .005;
    w = inChapel ? min(HC - az, q.x - XC + HC) : HS - ch;
    d = entab(w, q.y - YP);
    d = max(d, inChapel ? -1e5 : min(HC - az, -q.x - HS + .08));
    res = U(res, vec2(max(d, upTo(3, q.x, XC - HC - .1, HS + T + .1)), 23.));
  }

  CHUNK {
    // 4 \xB7 the pendentives: the sphere through the room's corners, between the four wall arches, up to the dome's
    // circular base; the wall arches' archivolts; the ring at the springing
    q = p - apart(vec3(0., .22, 0.));
    g = upTo(4, q.y, YE, YD + .04);
    ax = abs(q.x); az = abs(q.z); ch = max(ax, az);
    c = q - vec3(0., YE, 0.);
    d = max(max(abs(length(c) - RP - .02) - .02, ch - HS - T + .015), max(-c.y, q.y - YD));
    d = min(d, max(box2(vec2(length(vec2(min(ax, az), c.y)) - HS + .0225, HS - ch - .006), vec2(.0225, .006)), -c.y));
    d = min(d, box2(vec2(length(q.xz) - HS + .012, q.y - YD - .012), vec2(.024, .012)));
    res = U(res, vec2(max(d, g), 24.));

    // 5 \xB7 the umbrella dome: a hemisphere whose twelve webs bulge between twelve ribs, each web's foot rising in a
    // segmental curve; open at the eye. 6 \xB7 a round window in each web. Folded into a twelfth: ribs at 0\xB0 and 30\xB0.
    q = p - apart(vec3(0., .42, 0.));
    g = upTo(5, q.y, YD, YD + RD + .06);
    c = q - vec3(0., YD, 0.);
    vec2 f = abs(c.xz);
    f = vec2(max(f.x, f.y), min(f.x, f.y));
    f -= 2. * max(dot(f, vec2(-.5, .86603)), 0.) * vec2(-.5, .86603);
    float s = min(f.y, .5 * f.x - .86603 * f.y);          // across to the nearer rib
    float hr = length(c.xz), rr = length(c);
    float ri = RD + .2 * s;                                 // the web's inner face
    float tg = dot(f, vec2(-.25882, .96593));               // across the web's middle
    float hole = length(vec2(tg, c.y - .075)) - .042;       // its window
    d = max(max(abs(rr - ri - .02) - .02, -c.y), max(.085 - hr, -hole));
    res = U(res, vec2(SHELL(max(d, g)), 45.));
    float tw = clamp(s / (.2588 * hr + .001), 0., 1.);
    e = max(abs(c.y - .015 - .135 * tw * (2. - tw)) - .007, abs(rr - ri + .004) - .012);
    e = min(e, max(max(s - .016, abs(rr - RD + .006) - .018), max(-c.y, .085 - hr)));
    res = U(res, vec2(max(e, g), 25.));
    q = p - apart(vec3(0., .32, 0.));
    g = upTo(6, q.y, YD, YD + .13);
    float oy = q.y - YD - .075, rad = dot(f, vec2(.96593, .25882)) - RD - .022;
    float oc = length(vec2(tg, oy));
    res = U(res, vec2(max(length(vec2(oc - .046, rad)) - .009, g), 26.));
    res = U(res, vec2(max(max(oc - .042, abs(rad) - .003), g), 66.));
  }

  CHUNK {
    // 7 \xB7 the chapel's dome: its own pendentives, and a hemisphere on them; the painted sky (two gold circles of the
    // sphere) appears later, with Donatello's decoration
    q = p - apart(vec3(-.4, .2, 0.));
    g = upTo(7, q.y, YE, YE + 2. * HC + .04);
    c = q - vec3(XC, YE, 0.);
    d = max(max(abs(length(c) - HC * 1.41421 - .012) - .012, max(abs(c.x), abs(c.z)) - HC - .055), max(-c.y, c.y - HC));
    res = U(res, vec2(max(d, g), 27.));
    c.y -= HC;
    float rk = length(c);
    res = U(res, vec2(SHELL(max(max(abs(rk - HC - .0125) - .0125, -c.y), g)), 47.));
    e = min(abs(dot(c, vec3(0., .692, .722))), abs(dot(c, vec3(.397, .608, .688))));
    res = U(res, vec2(max(max(max(abs(rk - HC + .002) - .003, e - .004), -c.y), max(g, upTo(9, q.y, Y0 + .3, YE + .55))), 67.));

    // 8 \xB7 the lantern: a drum with eight openings on a ring, a cone, a ball
    q = p - apart(vec3(0., .54, 0.));
    c = q - vec3(0., YD + .675, 0.);
    float lr = length(c.xz);
    vec2 o = abs(c.xz);
    o = vec2(max(o.x, o.y), min(o.x, o.y));
    o -= 2. * max(dot(o, vec2(-.38268, .92388)), 0.) * vec2(-.38268, .92388);
    d = max(max(lr - .075, abs(c.y - .07) - .07), -max(o.y - .016, abs(c.y - .075) - .04));
    d = min(d, box2(vec2(lr - .06, c.y + .005), vec2(.04, .015)));
    d = min(d, max((lr - .082 + (c.y - .14) * .533) * .88, .14 - c.y));
    d = min(d, length(c - vec3(0., .31, 0.)) - .022);
    res = U(res, vec2(max(d, upTo(8, q.y, YD + .66, YD + 1.02)), 28.));

    // 9 \xB7 Donatello's reliefs, plain: a roundel in each lunette and in each pendentive, a panel over each door
    q = p - apart(vec3(.3, .05, 0.));
    ax = abs(q.x); az = abs(q.z); ch = max(ax, az);
    w = HS - ch;
    l = length(vec2(min(ax, az), q.y - YE - .39));
    d = min(max(l - .11, abs(w - .008) - .008), length(vec2(l - .118, w - .01)) - .011);
    vec2 dg = vec2((ax + az) * .70711, q.y - YE);
    e = dot(dg, vec2(.9446, .3283));
    d = min(d, max(length(vec2(abs(ax - az) * .70711, dot(dg, vec2(-.3283, .9446)))) - .085, abs(e - RP + .01) - .01));
    d = min(d, max(box2(vec2(az - ZD, q.y - Y0 - .36), vec2(.07, .05)), abs(q.x + HS - .008) - .008));
    res = U(res, vec2(max(d, upTo(9, q.y, Y0 + .3, YE + .55)), 29.));

    // 10 \xB7 the bronze doors either side of the chapel: two leaves of five panels each, in a stone frame with a cornice
    q = p - apart(vec3(.4, 0., 0.));
    az = abs(q.z);
    float du = az - ZD, dy = q.y - Y0, dx = q.x + HS;
    d = max(box2(vec2(du, dy - .13), vec2(.058, .13)), abs(dx + .03) - .012);
    vec2 pc = vec2(abs(du) - .029, dy - (clamp(floor(dy / .052), 0., 4.) + .5) * .052);
    d = max(d, -max(box2(pc, vec2(.02, .019)), -dx - .022));
    e = max(max(box2(vec2(du, dy - .145), vec2(.085, .145)), -box2(vec2(du, dy - .13), vec2(.06, .13))), abs(dx - .008) - .008);
    e = min(e, max(box2(vec2(du, dy - .3), vec2(.095, .012)), abs(dx - .015) - .015));
    res = U(res, vec2(max(min(d, e), upTo(10, q.y, Y0, Y0 + .32)), 30.));
  }

  res.x = cutaway(res.x, p.z);
  return res;
}
`};export{c as scene};
