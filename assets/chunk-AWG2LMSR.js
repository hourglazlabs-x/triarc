import{c as e}from"./chunk-W46U2OC5.js";import{a}from"./chunk-WY76X7OO.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var s={id:"D02",cam:[3.1,2.95,6.95],target:[-.12,-.32,.32],floor:-1.6,ring:2.1,accent:a(e.D02),poster:3.3,glsl:`
const float G = -.55;        // the ground
const float XE = 1.5;        // the model's ends: the hall runs on beyond them
const float ZE = 1.7;        // the outer walls: 408 ft across
const float HT = .6;         // the transept's walls, under the springing of its vault (radius .3: 108 ft at the crown)

vec3 palette(int i) {
  if (i == 0) return vec3(.62, .80, .98);   // columns: cast iron, hollow
  if (i == 1) return vec3(.70, .84, 1.);    // girders
  if (i == 2) return vec3(.62, .95, .88);   // ridge-and-furrow glass
  if (i == 3) return vec3(.70, 1., .92);    // transept vault
  if (i == 4) return vec3(.66, .90, .96);   // glass walls
  if (i == 5) return vec3(.45, .80, 1.);    // gutters and rain
  if (i == 6) return vec3(.55, .86, .42);   // elm trees
  if (i == 7) return vec3(1.);
  if (i == 8) return vec3(.42, .92, .52);   // lily leaf
  return vec3(.68, .86, .95);               // floor
}

/** The roof's height over the ground at a distance az from the building's long axis: nave, inner and outer aisles. */
float tier(float az) { return az < .3 ? .533 : az < 1.1 ? .367 : .2; }

/** The nearest line of columns across the building: (distance, its height). */
vec2 colLine(float az) {
  float d = abs(az - .3); vec2 r = vec2(d, .533);
  d = abs(az - .5); if (d < r.x) r = vec2(d, .367);
  d = abs(az - .9); if (d < r.x) r = vec2(d, .367);
  d = abs(az - 1.1); if (d < r.x) r = vec2(d, .367);
  d = abs(az - 1.5); if (d < r.x) r = vec2(d, .2);
  d = abs(az - 1.7); if (d < r.x) r = vec2(d, .2);
  return r;
}

float tri(float x) { return abs(fract(x) - .5) * 2.; }

vec2 elm(vec3 p, vec3 at, float s) {
  vec3 q = (p - at) / s;
  float trunk = sdTaper(q, vec3(0.), vec3(0., .42, 0.), .035, .022);
  trunk = min(trunk, sdCapsule(q, vec3(0., .3, 0.), vec3(.12, .5, .04), .014));
  trunk = min(trunk, sdCapsule(q, vec3(0., .34, 0.), vec3(-.1, .52, -.05), .013));
  float crown = sdEllipsoid(q - vec3(0., .6, 0.), vec3(.25, .24, .25));
  crown = smin(crown, sdEllipsoid(q - vec3(.12, .5, .05), vec3(.15, .14, .15)), .08);
  crown = smin(crown, sdEllipsoid(q - vec3(-.12, .52, -.06), vec3(.15, .14, .15)), .08);
  crown += (noise3(q * 9.) - .5) * .05;
  return U(vec2(trunk * s, 26.), vec2(crown * s * .8, 46.));
}

vec2 lily(vec3 p) {
  vec3 q = p - vec3(-1.05, G + .1, 2.2);
  q.yz *= rot(-.32);
  float r = length(q.xz);
  float leaf = max(abs(q.y - .0) - .006, r - .42);
  leaf = min(leaf, max(sdTorus(q - vec3(0., .025, 0.), vec2(.42, .02)), -q.y));   // the upturned rim
  vec2 res = vec2(SHELL(leaf), 48.);
  // Underneath: ribs radiating from the centre, and rings crossing them.
  vec3 pr = polarRep(q, 22.);
  float ribs = max(max(abs(pr.z) - .006, abs(q.y + .018) - .016), r - .41);
  ribs = min(ribs, max(abs(q.y + .012) - .01, min(abs(r - .16), abs(r - .3)) - .006));
  return U(res, vec2(ribs, 28.));
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., G + .2, .25), vec3(XE + .1, .75, ZE + .9));
  if (bound > .25) return vec2(bound, 0.);
  float ax = abs(p.x), az = abs(p.z), y = p.y - G;
  vec2 res = vec2(1e5, 0.);
  bool inside = ax < XE && az < ZE;

  // The floor and its 24 ft grid.
  float fl = sdBox(p - vec3(0., G - .008, 0.), vec3(XE, .008, ZE));
  res = U(res, vec2(SHELL(fl), 89.));
  vec2 g = abs(fract((p.xz - .1) / .2 + .5) - .5) * .2;
  res = U(res, vec2(max(sdBox(p - vec3(0., G + .001, 0.), vec3(XE, .002, ZE)), min(g.x, g.y) - .004), 29.));

  if (y < 1.) {
    // Columns: on the 24 ft grid along the hall, on the aisle lines across it; none inside the transept.
    float cx = clamp(max(floor((ax - .1) / .2 + .5) * .2 + .1, .3), .3, XE);
    vec2 cl = colLine(az);
    float h = abs(cx - .3) < .01 ? HT : cl.y;
    float col = max(length(vec2(ax - cx, cl.x)) - .014, max(-y, y - h));
    res = U(res, vec2(SHELL(col), 40.));
    // Rain running down inside them, dashes falling.
    float fall = fract(y * 9. + uTime * 2.2 + cx * 3.1);
    float rain = max(length(vec2(ax - cx, cl.x)) - .005, max(abs(fall - .5) - .25, max(-y, y - h)) / 9.);
    res = U(res, vec2(rain, 65.));

    // Girders across the building at every column line along it, at each tier; and along it on every aisle line.
    float cxg = abs(ax - cx);
    float gz = max(max(cxg - .007, abs(y - .19) - .012), az - ZE);
    gz = min(gz, max(max(cxg - .007, abs(y - .356) - .012), az - 1.1));
    float gx = max(max(cl.x - .007, abs(y - (cl.y - .012)) - .012), max(.3 - ax, ax - XE));
    gx = min(gx, max(max(cl.x - .007, abs(y - .19) - .012), max(.3 - ax, ax - XE)));
    res = U(res, vec2(min(gz, gx), 21.));
    // The nave's top girders are the transverse gutters, every 24 ft, carrying the rain to the columns.
    float gut = max(max(cxg - .01, abs(y - .528) - .01), az - .3);
    gut = min(gut, max(max(cxg - .01, abs(y - .362) - .01), max(.3 - az, az - 1.1)));
    gut = min(gut, max(max(cxg - .01, abs(y - .195) - .01), max(1.1 - az, az - ZE)));
    res = U(res, vec2(max(gut, .3 - ax), 25.));

    // Ridge-and-furrow roofs over the nave and the aisles: ridges along the hall, three to a bay.
    if (ax > .29) {
      float ht = tier(az);
      float rf = (abs(y - ht - .016 * tri(p.z / .0667)) - .0025) * .7;
      rf = max(rf, max(ax - XE, az - ZE));
      res = U(res, vec2(SHELL(rf), 82.));
    }

    // The transept: walls to the springing, then a semicircular vault, ribbed every 24 ft, over the crossing.
    vec2 vc = vec2(p.x, y - HT);
    float vr = length(vc);
    float vault = max(max(abs(vr - .3) - .003, -vc.y), az - ZE);
    res = U(res, vec2(SHELL(vault), 83.));
    float zc = abs(fract((p.z - .1) / .2 + .5) - .5) * .2;
    float vrib = max(max(abs(vr - .3) - .012, -vc.y + .0), max(zc - .007, az - ZE));
    vrib = min(vrib, max(max(abs(vr - .3) - .006, -vc.y), abs(fract(atan(vc.y, vc.x) * 3.8197) - .5) * .08 - .002 + max(0., az - ZE) * 10.));
    res = U(res, vec2(vrib, 23.));

    // Glass walls: the outer walls, the steps of the section, and the transept's sides and arched ends.
    float wall = max(max(abs(az - ZE) - .002, abs(y - .1) - .1), ax - XE);
    wall = min(wall, max(max(abs(az - 1.1) - .002, abs(y - .283) - .084), max(.3 - ax, ax - XE)));
    wall = min(wall, max(max(abs(az - .3) - .002, abs(y - .45) - .084), max(.3 - ax, ax - XE)));
    float tw = max(max(abs(ax - .3) - .002, max(tier(az) - y, y - HT)), az - ZE);
    wall = min(wall, tw);
    wall = min(wall, max(abs(az - ZE) - .002, max(vr - .3, -vc.y)));
    wall = min(wall, max(abs(az - ZE) - .002, max(ax - .3, abs(y - HT * .5) - HT * .5)));
    res = U(res, vec2(SHELL(wall), 84.));
  }

  // Three elms, left standing inside the transept.
  if (ax < .32 && y < .9) {
    res = U(res, elm(p, vec3(.02, G, -1.05), 1.));
    res = U(res, elm(p, vec3(-.04, G, -.2), 1.1));
    res = U(res, elm(p, vec3(.03, G, .8), .95));
  }
  res = U(res, lily(p));
  return res;
}
`};export{s as scene};
