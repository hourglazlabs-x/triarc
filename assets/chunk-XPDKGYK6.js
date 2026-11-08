import{a as o}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var s={id:"D05-less-is-more",cam:[3.56,2.56,5.29],target:[.26,.42,0],floor:-1.25,ring:2.1,accent:e(o.D05),poster:2,parts:[{name:"ornament",view:{el:-6,zoom:.88}},{name:"module grid",view:{az:-6,el:22,zoom:1.1}},{name:"floor plane",view:{az:-20,el:12,zoom:.9}},{name:"steel columns",view:{az:-14,el:-10,zoom:.8}},{name:"roof plane",view:{el:16,zoom:.9}},{name:"glass skin",view:{az:18,el:-8,zoom:.84}},{name:"the detail",view:{az:40,el:2,zoom:.78}}],glsl:`
const float M = .25;                 // the module
const float GY = -.62;               // the ground, where the grid lies
const float FY = GY + .1;            // top of the floor plane
const float RY = FY + .625;          // underside of the roof plane: 2.5 modules clear
const float RT = .055;               // the roof plane's thickness
const vec2 SLAB = vec2(1., .75);     // both planes: 8 by 6 modules
const vec2 GL = vec2(.75, .5);       // the glass: 6 by 4 modules
const vec2 CO = vec2(.5, .25);       // four columns: a bay of 4 by 2 modules
const float LIFT = 1.1;              // how far the ornament has been taken away
const float OT = RY + .34;           // the ornament's top, in place
const vec3 CALL = vec3(1.52, .34, -.3);   // where the magnified head stands (its roof underside)
const float MAG = 5.;                // its magnification
const vec3 HB = vec3(.06, .074, .045);    // its box, at its own size, centred .0185 above the roof underside
const mat2 TIP1 = mat2(cos(.09), sin(.09), -sin(.09), cos(.09));   // the ornament, tipped as it goes
const mat2 TIP2 = mat2(cos(.05), -sin(.05), sin(.05), cos(.05));

vec3 palette(int i) {
  if (i == 0) return vec3(1., .80, .48);    // ornament: a gilded ghost
  if (i == 1) return vec3(.42, .86, 1.);    // module grid
  if (i == 2) return vec3(.86, .93, .98);   // floor plane
  if (i == 3) return vec3(.76, .85, 1.);    // steel columns
  if (i == 4) return vec3(.95, .96, 1.);    // roof plane
  if (i == 5) return vec3(.62, .92, 1.);    // glass skin
  return vec3(1., .62, .34);                // the detail
}

float sdBox2(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }

/** An H-section in plan, half sizes: flanges b wide (x), depth h (y of p), flange and web half-thicknesses tf, tw. */
float sdH(vec2 p, float b, float h, float tf, float tw) {
  p = abs(p);
  return min(sdBox2(p - vec2(0., h - tf), vec2(b, tf)), sdBox2(p, vec2(tw, h)));
}

/** Section the model: everything in front of the plane through the front columns' axes is removed. */
float cutS(vec3 q) { return q.z - CO.y; }

/** 0 \xB7 The ornament, in its own frame: as it stood on the outline, before it was lifted away. */
float ornament(vec3 o) {
  // The entablature round the roof's edge: frieze, dentils, ovolo and corona, wreaths on the frieze.
  float r = sdBox2(o.xz, SLAB), y = o.y - RY;
  vec2 a = abs(o.xz) - SLAB;
  float s = a.x > a.y ? o.z : o.x;
  float d = sdBox2(vec2(r + .008, y + .025), vec2(.032, .095));
  d = min(d, sdBox2(vec2(r - .022, y - .148), vec2(.062, .022)));
  d = min(d, max(length(vec2(r - .02, y - .126)) - .036, y - .126));
  d = min(d, sdBox(vec3(s - round(s / .04) * .04, r - .036, y - .078), vec3(.011, .012, .012)));
  vec2 w = vec2(s - (round((s - .125) / M) * M + .125), y + .025);
  d = min(d, length(vec2(length(w) - .03, r - .024)) - .0085);
  // An urn on each corner of the cornice.
  vec3 c = vec3(abs(o.x) - SLAB.x + .025, y - .21, abs(o.z) - SLAB.y + .025);
  d = min(d, min(sdEllipsoid(c, vec3(.031, .042, .031)), length(c - vec3(0., .055, 0.)) - .013));
  // Pilasters on the old wall line, where the glass now stands: fluted shafts, capitals with volutes, bases.
  vec2 g = abs(o.xz) - GL;
  float v = sdBox2(o.xz, GL);
  float u = g.x > g.y ? o.z - round(o.z / .5) * .5 : o.x - .25 - round((o.x - .25) / .5) * .5;
  float yp = abs(o.y - (FY + RY - .118) * .5), hp = (RY - .166 - FY) * .5;
  float sh = max(sdBox2(vec2(u, v - .0125), vec2(.033, .0125)), yp - hp);
  float fl = u - clamp(round(u / .017), -1., 1.) * .017;
  sh = max(sh, .0065 - length(vec2(fl, v - .027)));
  sh = min(sh, max(sdBox2(vec2(u, v - .018), vec2(.046, .018)), abs(yp - hp - .012) - .012));
  sh = min(sh, max(length(vec2(abs(u) - .036, o.y - (RY - .15))) - .014, abs(v - .02) - .012));
  return min(d, sh);
}

/** 6 \xB7 One column head at its own size, the roof's underside at y = 0, drawn apart upward as in an exploded
 * axonometric: the H-column with its stiffener and the cap plate welded on; four bolts; the roof beam; the roof.
 * Returns the steel and the bolts. */
vec2 head(vec3 k) {
  float st = sdH(k.xz, .026, .026, .0045, .0035);
  st = max(min(st, max(sdBox2(k.xz, vec2(.0225, .0012)), -k.y - .03)), abs(k.y + .0315) - .0235);
  st = min(st, sdBox(k - vec3(0., -.004, 0.), vec3(.036, .004, .036)));
  st = min(st, sdH(vec2(k.z, k.y - .051), .013, .015, .0015, .0018));
  st = min(st, sdBox(k - vec3(0., .085, 0.), vec3(.06, .007, .045)));
  float br = length(vec2(abs(k.x) - .02, abs(k.z) - .008));
  float bolts = min(max(br - .0021, abs(k.y - .016) - .011), max(br - .0038, abs(abs(k.y - .016) - .009) - .002));
  return vec2(st, bolts);
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(.3, .5 + uApart * .2, -.05), vec3(1.85, 1.25 + uApart * .45, 1.1));
  if (bound > .25) return vec2(bound, 0.);
  vec3 q;
  float d;
  vec2 res = vec2(1e5, 0.);

  // 0 \xB7 The ornament: in place on the outline until the structure arrives, then lifted away and tipped (a shell,
  // so the second layer, behind shells, skips it). Bounded without its tilt, which moves it by less than .25.
  q = p - apart(vec3(0., .4, 0.));
  float k = smoothstep(0., 1., (built(2) + built(3) + built(4)) / 3.);
  d = sdBox(q - vec3(0., (FY + OT) * .5 + LIFT * k, 0.), vec3(SLAB.x + .25, (OT - FY) * .5 + .25, SLAB.y + .2));
  if (gSkipShell || built(0) <= 0.) d = 1e5;
  else if (d < .1) {
    vec3 o = q - vec3(0., LIFT * k + RY, 0.);
    if (k >= 1.) { o.xy = TIP1 * o.xy; o.yz = TIP2 * o.yz; }
    else { o.xy = rot(-.09 * k) * o.xy; o.yz = rot(.05 * k) * o.yz; }
    o.y += RY;
    d = SHELL(cutaway(rise(ornament(o), 0, o.y, FY - .02, OT), cutS(q)));
  }
  res = U(res, vec2(d, 40.));

  // 1 \xB7 The module grid: lines on the ground, a cross at each node, built from the middle out.
  q = p - apart(vec3(0., -.32, 0.)) - vec3(0., GY, 0.);
  vec2 gl = abs(fract(q.xz / M + .5) - .5) * M;
  vec2 nd = q.xz - round(q.xz / M) * M;
  float field = sdBox2(q.xz, vec2(1.5, 1.));
  d = max(min(min(gl.x, gl.y) - .0045, min(sdBox2(nd, vec2(.022, .0055)), sdBox2(nd, vec2(.0055, .022)))), field - .0045);
  d = max(max(d, abs(q.y - .003) - .003), max(abs(q.x), abs(q.z) * 1.5) - 1.65 * built(1));
  res = U(res, vec2(built(1) > 0. ? cutaway(d, cutS(q)) : 1e5, 61.));

  // 2 \xB7 The floor plane, on a recessed base, its paving jointed on the module.
  q = p - apart(vec3(0., -.14, 0.));
  d = min(sdBox(q - vec3(0., (GY + .025 + FY) * .5, 0.), vec3(SLAB.x, (FY - GY - .025) * .5, SLAB.y)),
          sdBox(q - vec3(0., GY + .0125, 0.), vec3(SLAB.x - .05, .0125, SLAB.y - .05)));
  vec2 pj = abs(fract(q.xz / M + .5) - .5) * M;
  d = max(d, min(.0028 - min(pj.x, pj.y), q.y - FY + .005));
  res = U(res, vec2(cutaway(rise(d, 2, q.y, GY - .01, FY + .01), cutS(q)), 22.));

  // 3 \xB7 Four slender steel H-columns.
  q = p;
  d = max(sdH(abs(q.xz) - CO, .026, .026, .0045, .0035), abs(q.y - (FY + RY) * .5) - (RY - FY) * .5);
  res = U(res, vec2(cutaway(rise(d, 3, q.y, FY, RY + .002), cutS(q)), 23.));

  // 4 \xB7 The roof plane: one thin flat slab with a shadow reveal round its soffit, lowered onto the columns.
  q = p - apart(vec3(0., .3, 0.)) - vec3(0., (1. - built(4)) * .35, 0.);
  d = sdBox(q - vec3(0., RY + RT * .5, 0.), vec3(SLAB.x, RT * .5, SLAB.y));
  d = max(d, -max(abs(sdBox2(q.xz, SLAB) + .024) - .0035, q.y - (RY + .009)));
  res = U(res, vec2(built(4) > 0. ? cutaway(d, cutS(q)) : 1e5, 24.));

  // 5 \xB7 The glass skin: floor-to-ceiling panes, one to a module, in fine steel stops; rising floor to ceiling.
  q = p - apart(vec3(0., .1, .5));
  float yy = abs(q.y - (FY + RY) * .5) - (RY - FY) * .5;
  float rg = sdBox2(q.xz, GL);
  vec2 ga = abs(q.xz) - GL;
  float sg = ga.x > ga.y ? q.z : q.x;
  d = min(max(abs(rg) - .0065, abs(yy + .007) - .007), max(max(abs(sg - round(sg / M) * M) - .0024, abs(rg) - .0055), yy));
  res = U(res, vec2(cutaway(rise(d, 5, q.y, FY, RY), cutS(q)), 25.));
  d = SHELL(max(abs(rg) - .0028, yy));
  res = U(res, vec2(cutaway(rise(d, 5, q.y, FY, RY), cutS(q)), 85.));

  // 6 \xB7 The detail: a cap plate on each column head and a base plate at each foot; one head five times larger,
  // drawn apart, with a leader from its column, ringed, under the roof and out to the magnified head's foot.
  q = p - apart(vec3(.28, .12, -.12));
  vec3 c = vec3(abs(q.x) - CO.x, q.y, abs(q.z) - CO.y);
  d = min(sdBox(c - vec3(0., RY - .004, 0.), vec3(.036, .004, .036)), sdBox(c - vec3(0., FY + .003, 0.), vec3(.04, .003, .04)));
  res = U(res, vec2(cutaway(rise(d, 6, q.y, FY - .01, RY + .01), cutS(q)), 26.));
  if (built(6) > 0.) {
    const vec3 J = vec3(CO.x, RY - .02, -CO.y), F = CALL + vec3(0., -.055, 0.) * MAG;
    d = min(sdCapsule(q, J + vec3(.07, 0., -.01), F, .0032), sdTorus(q - J, vec2(.075, .0032)));
    res = U(res, vec2(cutaway(rise(d, 6, q.y, FY, RY + .1), cutS(q)), 66.));
    vec3 hc = CALL + vec3(0., .0185, 0.) * MAG;
    d = sdBox(q - hc, HB * MAG);
    vec2 h = vec2(d);
    if (d < .05) {
      h = head((q - CALL) / MAG) * MAG;
      h = max(h, d);
    }
    float up = CALL.y + .1 * MAG;
    res = U(res, vec2(cutaway(rise(h.x, 6, q.y, FY, up), cutS(q)), 26.));
    res = U(res, vec2(cutaway(rise(h.y, 6, q.y, FY, up), cutS(q)), 66.));
  }
  return res;
}
`};export{s as scene};
