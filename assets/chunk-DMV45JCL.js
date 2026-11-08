import{a}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var l={id:"D04-compression",cam:[2.75,1.05,4.9],target:[-.08,-.3,-.22],floor:-1.6,ring:1.95,accent:e(a.D04),poster:3,parts:[{name:"hidden entrance",view:{az:-50,el:18}},{name:"low entry hall",inside:!0,view:{az:-22,el:0,zoom:.72}},{name:"eave datum",view:{az:-34,el:-4,zoom:.95}},{name:"dim passage",inside:!0,view:{az:-12,el:2,zoom:.74}},{name:"turning stair",inside:!0,view:{az:-8,el:6,zoom:.58}},{name:"half-level rise",inside:!0,view:{az:6,el:12,zoom:.72}},{name:"tall main room",view:{az:10,el:-2}},{name:"light from above",view:{az:6,el:6,zoom:.9}},{name:"outward view",view:{az:18,el:-4,zoom:.92}}],glsl:`
const float Y0 = -.9;                   // the ground and the entry's floor
const float HE = .52;                   // the entry's ceiling and the eave: 6 ft 10 in
const float HP = .47;                   // the passage's ceiling, lower still (6 ft 2 in)
const float HS = .64;                   // the stair hall's ceiling, beginning to rise
const float HR = .35;                   // the half storey climbed into the room (1.4 m)
const float HT = 1.14;                  // the tall room's height over its floor (15 ft)
const float W = .04;                    // walls
const float ZC = -.05;                  // the section plane (all the way runs through it)
// plan (interiors): entry x -1.2..-.7, z -.45..ZC+.15; passage x -.7..-.15, z -.33..ZC; stair hall x -.15..3, z
// -.95..ZC; room x .3..1.3, z -.95..32
const float RISE = .0467;               // a riser (7.5 in)

vec3 palette(int i) {
  if (i == 0) return vec3(1., .74, .46);    // hidden entrance, and the way to it
  if (i == 1) return vec3(.62, .66, .84);   // low entry hall
  if (i == 2) return vec3(1., .86, .56);    // eave datum
  if (i == 3) return vec3(.40, .44, .60);   // dim passage
  if (i == 4) return vec3(.80, .74, .96);   // turning stair
  if (i == 5) return vec3(.96, .80, .62);   // half-level rise
  if (i == 6) return vec3(.92, .96, 1.);    // tall main room
  if (i == 7) return vec3(1., .94, .70);    // light from above
  return vec3(.56, .94, 1.);                // outward view
}

float sdRect(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
/** A box given by its corners. */
float box2(vec3 p, vec3 a, vec3 b) { return sdBox(p - (a + b) * .5, (b - a) * .5); }
/** A flight of n steps rising along +u from u = 0, risers r, treads t, width w (v up, s across, centred). */
float flight(vec3 q, float n, float r, float t, float w) {
  float k = clamp(floor(q.x / t), 0., n - 1.);
  float d = sdBox(q - vec3((k + .5) * t, (k + 1.) * r * .5, 0.), vec3(t * .5, (k + 1.) * r * .5, w));
  float k2 = clamp(k + 1., 0., n - 1.);
  return min(d, sdBox(q - vec3((k2 + .5) * t, (k2 + 1.) * r * .5, 0.), vec3(t * .5, (k2 + 1.) * r * .5, w)));
}
/** A standing figure 1.73 m (0.432 units) tall, its feet at the origin. */
float figure(vec3 f) { return min(sdCapsule(f, vec3(0., .045, 0.), vec3(0., .33, 0.), .028), sdSphere(f - vec3(0., .395, 0.), .034)); }

/** The section: everything in front of the plane z = ZC is removed, opening the whole path. */
float cutS(vec3 p) { return p.z - ZC; }

vec2 map(vec3 p) {
  float a = uApart;
  float bound = sdBox(p - vec3(-.12 + .05 * a, -.16 + .3 * a, -.1 + .1 * a), vec3(1.55 + .3 * a, .82 + .32 * a, .92 + .32 * a));
  if (bound > .2) return vec2(bound, 0.);
  float cs = cutS(p);
  float g2 = built(2), g4 = built(4), g7 = built(7), g8 = built(8);
  vec2 res = vec2(1e5, 0.);

  // The ground (not a part), and the two figures, 5 ft 8 in tall (the scale the heights are measured against).
  res = U(res, vec2(box2(p, vec3(-1.66, Y0 - .045, -1.05), vec3(1.42, Y0, .76)), 4.));
  if (built(1) > 0.) res = U(res, vec2(cutaway(figure(p - vec3(-.98, Y0, -.24)), cs), 4.));
  if (built(6) > 0.) res = U(res, vec2(cutaway(figure(p - apart(vec3(.3, 0., -.2)) - vec3(.86, Y0 + HR, -.5)), cs), 4.));

  // 0 \xB7 The hidden entrance: the door is in the entry's end wall, facing away from the approach, behind a screen
  // wall and under the eave; a dashed path shows the way round to it.
  {
    vec3 q = p - apart(vec3(-.35, 0., .1));
    float scr = box2(q, vec3(-1.54, Y0, -.4), vec3(-1.5, Y0 + .43, .16));
    float door = box2(q, vec3(-1.225, Y0, -.2), vec3(-1.21, Y0 + .44, 0.));     // the door, set back in its opening
    float step_ = box2(q, vec3(-1.4, Y0, -.24), vec3(-1.24, Y0 + .012, .02));
    float d = rise(min(min(scr, door), step_), 0, q.y, Y0, Y0 + .44);
    res = U(res, vec2(cutaway(d, cs), 20.));
    vec3 c = vec3(q.x, q.y - Y0 - .004, q.z);
    float path = min(sdCapsule(c, vec3(-1.37, 0., .74), vec3(-1.37, 0., -.11), .006), sdCapsule(c, vec3(-1.37, 0., -.11), vec3(-1.27, 0., -.11), .006));
    path = max(path, (abs(fract((q.z - q.x) * 9. + uTime * .5) - .5) - .22) / 9.);
    res = U(res, vec2(cutaway(rise(path, 0, -q.z, -.74, .11), cs), 60.));
  }

  // 1 \xB7 The low entry hall: a small room whose ceiling (the eave datum) is 6 ft 10 in over its floor.
  {
    float r = sdRect(p.xz - vec2(-.95, -.15), vec2(.29, .34));
    float d = max(abs(r + W * .5) - W * .5, abs(p.y - (Y0 + HE * .5)) - HE * .5);
    d = max(d, -box2(p, vec3(-1.3, Y0 - .1, -.2), vec3(-1.15, Y0 + .45, 0.)));         // the door's opening
    d = max(d, -box2(p, vec3(-.72, Y0 - .1, -.33), vec3(-.62, Y0 + HP, ZC)));          // on into the passage
    d = min(d, box2(p, vec3(-1.24, Y0, -.49), vec3(-.66, Y0 + .012, .19)));             // its floor
    d = rise(d, 1, p.y, Y0, Y0 + HE);
    res = U(res, vec2(cutaway(d, cs), 21.));
  }

  // 2 \xB7 The eave datum: one plane at 6 ft 10 in, the entry's ceiling inside and the eave outside, carried out over
  // the way in; its edge glows as a level line.
  if (g2 > 0.) {
    vec3 q = p - apart(vec3(0., .42, 0.));
    float e = smoothstep(0., 1., g2);
    vec3 lo = vec3(mix(-.95, -1.62, e), Y0 + HE, mix(-.15, -.5, e)), hi = vec3(mix(-.95, -.66, e), Y0 + HE + .035, mix(-.15, .46, e));
    float d = box2(q, lo, hi);
    res = U(res, vec2(cutaway(d, cs), 22.));
    float edge = max(abs(sdRect(q.xz - (lo.xz + hi.xz) * .5, (hi.xz - lo.xz) * .5 + .004)) - .004, abs(q.y - (Y0 + HE + .001)) - .006);
    res = U(res, vec2(cutaway(edge, cs), 62.));
  }

  // 3 \xB7 The dim passage: narrow, lower than the entry, no windows; walls and ceiling in a darker material.
  {
    vec3 q = p - apart(vec3(0., 0., .3));
    float walls = min(box2(q, vec3(-.7, Y0, -.37), vec3(-.15, Y0 + HP, -.33)), box2(q, vec3(-.7, Y0, ZC), vec3(-.15, Y0 + HP, ZC + W)));
    float ceil_ = box2(q, vec3(-.7, Y0 + HP, -.37), vec3(-.15, Y0 + HP + .03, ZC + W));
    // it runs on round the stair: the stair hall's walls, and its ceiling, which begins to rise
    vec3 h = p - apart(vec3(0., .12, 0.));
    float hall = min(box2(h, vec3(-.15, Y0, -.99), vec3(.3, Y0 + HS, -.95)), box2(h, vec3(-.15, Y0, ZC), vec3(.3, Y0 + HS, ZC + W)));
    hall = min(hall, box2(h, vec3(-.15, Y0, -.95), vec3(-.11, Y0 + HS, -.37)));
    hall = min(hall, box2(h, vec3(-.15, Y0 + HS, -.99), vec3(.3, Y0 + HS + .03, ZC + W)));
    hall = min(hall, box2(h, vec3(-.15, Y0 + HP, -.37), vec3(-.11, Y0 + HS, ZC)));
    float d = rise(min(min(walls, ceil_), hall), 3, q.y, Y0, Y0 + HS + .03);
    res = U(res, vec2(cutaway(d, cs), 23.));
  }

  // 4 \xB7 The turning stair: three steps on along the passage, a landing, a turn to the left and three more steps away
  // from the way in, a second landing: the goal stays out of sight.
  if (g4 > 0.) {
    vec3 q = p - apart(vec3(0., .12, 0.));
    float f1 = flight(vec3(q.x + .15, q.y - Y0, q.z + .19), 3., RISE, .07, .14);
    float l1 = box2(q, vec3(.06, Y0, -.42), vec3(.3, Y0 + 3. * RISE, ZC));
    float f2 = flight(vec3(-(q.z + .42), q.y - (Y0 + 3. * RISE), q.x - .18), 3., RISE, .07, .12);
    f2 = min(f2, box2(q, vec3(.06, Y0, -.63), vec3(.3, Y0 + 3. * RISE, -.42)));         // the flight's solid base
    float l2 = box2(q, vec3(.06, Y0, -.91), vec3(.3, Y0 + 6. * RISE, -.63));
    float d = min(min(f1, l1), min(f2, l2));
    d = rise(d, 4, q.y, Y0, Y0 + 6. * RISE);
    res = U(res, vec2(cutaway(d, cs), 24.));
  }

  // 5 \xB7 The half-level rise: two broad steps finish the half-storey climb, up into the room through a wide opening.
  {
    vec3 q = p - apart(vec3(0., .22, 0.));
    float d = flight(vec3(q.x - .3, q.y - (Y0 + 6. * RISE), q.z + .67), 2., (HR - 6. * RISE) * .5, .08, .26);
    d = min(d, box2(q, vec3(.3, Y0, -.93), vec3(.46, Y0 + 6. * RISE, -.41)));
    d = rise(d, 5, q.y, Y0, Y0 + HR);
    res = U(res, vec2(cutaway(d, cs), 25.));
  }

  // 6 \xB7 The tall main room: its floor half a storey up, its ceiling 15 ft over it; walls on three sides (one opened
  // for the steps), the fourth all glass (the outward view).
  {
    vec3 q = p - apart(vec3(.3, 0., -.2));
    float plinth = max(box2(q, vec3(.3, Y0, -.99), vec3(1.34, Y0 + HR, .32)), -box2(q, vec3(.28, Y0 + 6. * RISE - .001, -.935), vec3(.461, Y0 + HR + .1, -.405)));
    float r = sdRect(q.xz - vec2(.82, -.315), vec2(.52, .675));
    float walls = max(max(abs(r + W * .5) - W * .5, abs(q.y - (Y0 + HR + HT * .5)) - HT * .5), q.z - .3);
    walls = max(walls, -box2(q, vec3(.25, Y0 + HR - .01, -.91), vec3(.36, Y0 + HR + .62, -.41)));      // the opening the steps lead through
    walls = max(walls, -box2(q, vec3(.25, Y0 + HR + .93, -1.1), vec3(1.5, Y0 + HR + HT - .05, .4)));   // the clerestory band (light from above)
    float roof = box2(q, vec3(.26, Y0 + HR + HT, -.99), vec3(1.38, Y0 + HR + HT + .04, .36));
    float d = min(min(plinth, walls), roof);
    d = rise(d, 6, q.y, Y0, Y0 + HR + HT + .04);
    res = U(res, vec2(cutaway(d, cs), 26.));
  }

  // 7 \xB7 Light from above: a clerestory band of glass round the top of the room, and light falling from it, steep and
  // bright, onto the floor.
  if (g7 > 0.) {
    vec3 q = p - apart(vec3(.3, .34, -.2));
    float yb = Y0 + HR + .93, yt = Y0 + HR + HT - .05;
    float r = sdRect(q.xz - vec2(.82, -.315), vec2(.52, .675));
    float band = max(max(abs(r + W * .5) - .003, abs(q.y - (yb + yt) * .5) - (yt - yb) * .5), max(q.z - .3, .3 - q.x));
    res = U(res, vec2(SHELL(cutaway(rise(band, 7, q.y, yb, yt), cs)), 87.));
    // mullions every .13 along each wall of the band
    float mx = abs(fract(q.x / .13) - .5) * .13, mz = abs(fract(q.z / .13) - .5) * .13;
    float m = abs(q.z + .97) < min(abs(q.x - .32), abs(q.x - 1.32)) ? mx : mz;
    float mull = max(max(m - .006, abs(r + W * .5) - .012), max(abs(q.y - (yb + yt) * .5) - (yt - yb) * .5, max(q.z - .3, .3 - q.x)));
    res = U(res, vec2(cutaway(rise(mull, 7, q.y, yb, yt), cs), 27.));
    // the light: shafts falling steeply from the band at the back to the front of the floor, one every .16
    vec2 l = vec2(q.z + .93, q.y - (yt - .05));
    vec2 dir = vec2(.547, -.837);
    float along = dot(l, dir), across = l.x * dir.y - l.y * dir.x;
    float lx = abs(fract((q.x - .4) / .16 + .5) - .5) * .16;
    float shaft = max(length(vec2(lx, across)) - .008, max(max(.38 - q.x, q.x - 1.28), max(-along, along - 1.24 * g7)));
    res = U(res, vec2(cutaway(shaft, cs), 67.));
    float pool = box2(q, vec3(.4, Y0 + HR, -.42), vec3(1.28, Y0 + HR + .004, -.1));
    res = U(res, vec2(cutaway(rise(pool, 7, q.y, Y0 + HR - .01, Y0 + HR + .01), cs), 67.));
  }

  // 8 \xB7 The outward view: the room's front all glass, floor to ceiling, opening onto a terrace at the room's level;
  // lines of sight run out from the room across it.
  if (g8 > 0.) {
    vec3 q = p - apart(vec3(.3, 0., .45));
    float e = smoothstep(0., 1., g8);
    float glass = box2(q, vec3(.3, Y0 + HR, .3), vec3(1.34, Y0 + HR + HT * e, .306));
    res = U(res, vec2(SHELL(cutaway(glass, cs)), 88.));
    float mx = abs(fract((q.x - .3) / .173 + .5) - .5) * .173;
    float mull = max(max(mx - .008, abs(q.z - .303) - .012), abs(q.y - (Y0 + HR + HT * e * .5)) - HT * e * .5);
    mull = min(mull, box2(q, vec3(.3, Y0 + HR + .74, .29), vec3(1.34, Y0 + HR + .755, .316)));   // a transom
    mull = max(mull, max(.3 - q.x, q.x - 1.34));
    float terr = box2(q, vec3(.3, Y0 + HR - .045, .32), vec3(1.34, Y0 + HR - .012, .3 + .4 * e));   // cantilevered
    res = U(res, vec2(cutaway(min(mull, terr), cs), 28.));
    // three lines of sight fanning out from the room through the glass
    vec3 o = vec3(.86, Y0 + HR + .39, -.2);
    vec3 v = q - o;
    float ang = atan(v.x, v.z);
    float k = clamp(floor(ang / .35 + .5), -1., 1.);
    float ca = cos(k * .35), sa = sin(k * .35);
    vec3 dir = normalize(vec3(sa, -.12, ca));
    float tt = clamp(dot(v, dir), .3, .3 + .75 * e);
    float sight = length(v - dir * tt) - .006;
    sight = max(sight, (abs(fract(tt * 9. - uTime * .7) - .5) - .25) / 9.);
    res = U(res, vec2(cutaway(sight, cs), 68.));
  }
  return res;
}
`};export{l as scene};
