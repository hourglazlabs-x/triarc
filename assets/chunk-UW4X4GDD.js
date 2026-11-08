import{a}from"./chunk-4QM5HSGV.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var o={id:"D08-kit-of-parts",cam:[2.04,1.3,5],target:[.02,-.25,0],floor:-1.6,ring:2.1,accent:e(a.D08),poster:1.5,orbit:{az:[-80,80]},parts:[{name:"bay module",view:{az:-10,el:26,zoom:.85}},{name:"steel columns",view:{az:-16,el:2,zoom:.82}},{name:"open-web trusses",view:{az:-70,el:-4,zoom:.85}},{name:"steel decking",view:{az:-8,el:30,zoom:.85}},{name:"infill panels",view:{az:-10,el:4}},{name:"extra beam",view:{az:-6,el:6,zoom:.85}},{name:"storage frame",view:{az:20,el:4,zoom:.8}},{name:"diagonal bracing",view:{az:55,el:4,zoom:.75}},{name:"shelves and drawers",view:{az:14,el:8,zoom:.8}}],glsl:`
const float Y0 = -.92;                  // the ground
const float BAY = .447;                 // one bay: 7 ft 4 in (2.235 m) at one unit = 5 m
const float BX = -1.32;                 // the first bay line
const float XM = BX + 1.5 * BAY;        // the frame's middle
const float ZC = .447;                  // the column rows, front and back
const float L1 = Y0 + .58;              // the first floor's trusses, underside
const float L2 = Y0 + 1.28;             // the roof's trusses, underside
const float TD = .061;                  // a truss: 12 in deep
const float CW = .0102;                 // half a column: a 4 in H-section
const vec3 SU = vec3(.9, -.92, 0.);     // the storage unit, at one unit = 1.2 m
const float SW = .463;                  // its half width (111.1 cm)
const float SD = .18;                   // its half depth (43.2 cm)
const float SH = 1.243;                 // its height (149.2 cm)
const float TR = .29825;              // four tiers over a .05 base
// The panels' finish in each opening: 0 open, 1 solid, 2 translucent, 3 glass. Front (bays 0-2, ground then upper
// storey), back, left side, right side.
const int FIN[16] = int[16](1, 3, 0, 3, 2, 1,  2, 1, 1, 1, 0, 2,  3, 1,  2, 0);
// The storage cells (left bay tiers 0-3, then right bay): 0 open, 1 drawers, 2 sliding doors, 3 back panel.
const int CELL[8] = int[8](1, 0, 2, 3,  2, 3, 1, 0);

vec3 palette(int i) {
  if (i == 0) return vec3(.55, .92, 1.);    // bay module
  if (i == 1) return vec3(.7, .76, .86);    // steel columns
  if (i == 2) return vec3(.8, .86, .96);    // open-web trusses
  if (i == 3) return vec3(.86, .9, .96);    // steel decking
  if (i == 4) return vec3(.96, .9, .8);     // infill panels
  if (i == 5) return vec3(1., .7, .38);     // extra beam
  if (i == 6) return vec3(.72, .78, .88);   // storage frame
  if (i == 7) return vec3(.9, .95, 1.);     // diagonal bracing
  return vec3(.94, .88, .8);                // shelves and drawers
}

float sdRect(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }

vec2 frame(vec3 p) {
  float x0 = BX - .06, x1 = BX + 3. * BAY + .06;
  float kx = clamp(floor((p.x - BX) / BAY + .5), 0., 3.), lx = p.x - BX - kx * BAY;   // from the nearest bay line
  // 0 \xB7 bay module: the slab set out in equal bays (a groove on each bay line, a pad under each column) and a
  // dimension line along the front, ticked at every bay line; laid bay by bay.
  vec3 q = p - apart(vec3(0., -.2, 0.));
  float sw = q.x - mix(x0, x1, built(0));
  float d = max(sdBox(q - vec3(XM, Y0 - .015, 0.), vec3(1.5 * BAY + .06, .015, ZC + .06)), .005 - length(vec2(lx, q.y - Y0)));
  d = min(d, sdBox(vec3(lx, q.y - Y0 - .004, abs(q.z) - ZC), vec3(.025, .004, .025)));
  vec2 res = vec2(cutaway(max(d, sw), q.z), 20.);
  d = min(sdBox(vec3(q.x - XM, q.y - Y0 - .004, q.z - ZC - .1), vec3(1.5 * BAY, .003, .003)), sdBox(vec3(lx, q.y - Y0 - .012, q.z - ZC - .1), vec3(.003, .012, .003)));
  res = U(res, vec2(cutaway(max(d, sw), q.z), 60.));
  // 1 \xB7 steel columns: 4 in H-sections on the bay lines, front and back, the frame's full height.
  float hc = L2 + TD - Y0;
  vec3 c = vec3(lx, p.y - Y0 - hc * .5, abs(p.z) - ZC);
  d = min(sdBox(vec3(c.x, c.y, abs(c.z) - CW + .0015), vec3(CW, hc * .5, .0015)), sdBox(c, vec3(.0012, hc * .5, CW)));
  res = U(res, vec2(cutaway(rise(d, 1, p.y, Y0, Y0 + hc), p.z), 21.));
  // 2 \xB7 open-web trusses: on each bay line, front to back, at the first floor and the roof (the nearer of the two).
  float o2 = .36 * uApart, ly1 = p.y - L1 - .12 * uApart, ly2 = p.y - L2 - o2;
  float ly = abs(ly1 - TD * .5) < abs(ly2 - TD * .5) ? ly1 : ly2;
  d = sdBox(vec3(lx, abs(ly - TD * .5) - TD * .5 + .004, p.z), vec3(.009, .004, ZC + .012));
  float tw = abs(fract(p.z / .1) * 2. - 1.);
  d = min(d, max(max(abs(ly - .004 - (TD - .008) * tw) * .6 - .0035, abs(lx) - .003), abs(p.z) - ZC));
  res = U(res, vec2(cutaway(rise(d, 2, p.y, L1, L2 + TD + o2), p.z), 22.));
  // 3 \xB7 steel decking: ribbed sheets across the trusses at both levels, laid sheet by sheet.
  float d1 = p.y - L1 - TD - .24 * uApart, d2 = p.y - L2 - TD - .5 * uApart;
  float dy = abs(d1 - .006) < abs(d2 - .006) ? d1 : d2;
  d = max(abs(dy - .005 - .005 * smoothstep(.15, .3, abs(fract(p.z / .065) - .5))) - .002, sdRect(vec2(p.x - XM, p.z), vec2(1.5 * BAY + .02, ZC + .02))) * .7;
  res = U(res, vec2(cutaway(max(d, p.x - mix(x0, x1, built(3))), p.z), 23.));
  // 4 \xB7 infill panels: in the opening nearest the point (front and back, or the sides), as FIN gives its finish;
  // taken apart they move out from their face. An open bay is stood in for by a lower bound to its neighbours.
  if (built(4) > 0.) {
    float fz = abs(p.z) - ZC, fx = abs(p.x - XM) - 1.5 * BAY;
    bool side = abs(fx) < abs(fz);
    float s = p.y < L1 + TD * .5 ? 0. : 1.;
    float yb = s < .5 ? Y0 + .01 : L1 + TD + .005, yt = s < .5 ? L1 - .005 : L2 - .005;
    float i = side ? 0. : clamp(floor((p.x - BX) / BAY), 0., 2.);
    int k = side ? (p.x < XM ? 12 : 14) + int(s) : (p.z > 0. ? 0 : 6) + int(i) + 3 * int(s);
    float u = side ? p.z : p.x - BX - (i + .5) * BAY, hw = side ? ZC - .018 : BAY * .5 - .018;
    float w = (side ? fx : fz) - .25 * uApart, v = p.y - (yb + yt) * .5, hh = (yt - yb) * .5;
    int f = FIN[k];
    vec2 pr = f == 0 ? vec2(max(max(abs(w) - .004, max(min(hw + .036 - abs(u), hh + .045 - abs(v)), .012)), sdBox(p - vec3(XM, (Y0 + L2) * .5, 0.), vec3(1.5 * BAY + .01 + .25 * uApart, (L2 - Y0) * .5, ZC + .01 + .25 * uApart))), 0.)
                     : vec2(max(sdRect(vec2(u, v), vec2(hw, hh)), abs(w) - (f == 3 ? .0025 : .004)), f == 1 ? 24. : f == 2 ? 44. : 84.);
    pr.x = cutaway(rise(pr.x, 4, p.y, Y0, L2), p.z);
    if (f > 1) pr.x = SHELL(pr.x);
    res = U(res, pr);
  }
  // 5 \xB7 extra beam: one more steel beam, an I-section along the front at the roof, lowered into place.
  if (built(5) > 0.) {
    vec3 e = p - apart(vec3(0., .3, .3)) - vec3(XM, L2 + TD * .5 + .2 * (1. - built(5)), ZC + .03);
    d = min(sdBox(vec3(e.x, abs(e.y) - .023, e.z), vec3(1.5 * BAY + .03, .0025, .013)), sdBox(e, vec3(1.5 * BAY + .03, .023, .0016)));
    res = U(res, vec2(cutaway(d, e.z + ZC + .03), 25.));
  }
  return res;
}

vec2 storage(vec3 p) {
  vec3 q = p - SU;
  // 6 \xB7 storage frame: perforated steel uprights (square tubes holed on two faces) on feet, rails at top and bottom.
  float ux = clamp(floor(q.x / SW + .5), -1., 1.) * SW;
  vec3 l = vec3(q.x - ux, q.y - SH * .5, abs(q.z) - SD);
  float d = max(sdBox(l, vec3(.015, SH * .5, .015)), -sdBox(l, vec3(.012, SH, .012)));
  float hy = mod(l.y, .045) - .0225;
  d = max(d, .006 - min(length(vec2(l.x, hy)), length(vec2(l.z, hy))));
  d = min(d, min(sdBox(vec3(q.x, abs(q.y - (SH + .05) * .5) - (SH - .05) * .5, abs(q.z) - SD), vec3(SW, .008, .008)), sdBox(vec3(abs(q.x) - SW, abs(q.y - (SH + .05) * .5) - (SH - .05) * .5, q.z), vec3(.008, .008, SD))));
  d = min(d, sdCylinder(vec3(l.x, q.y - .025, l.z), .025, .01));
  vec2 res = vec2(cutaway(rise(d, 6, q.y, 0., SH), q.z), 26.);
  // 7 \xB7 diagonal bracing: wire crosses on both sides, each over two tiers; apart, they move out sideways.
  if (built(7) > 0.) {
    float by = mod(q.y - .05, 2. * TR) - TR;
    d = sdCapsule(vec3(abs(q.x) - SW - .02 - .15 * uApart, abs(by), abs(q.z)), vec3(0.), vec3(0., TR - .012, SD - .012), .005);
    res = U(res, vec2(cutaway(rise(max(d, abs(q.y - SH * .5 - .025) - SH * .5 + .025), 7, q.y, .05, SH), q.z), 27.));
  }
  // 8 \xB7 shelves and drawers: a shelf at every level; in the cells, drawers or sliding doors, as CELL gives; and
  // 4 \xB7 infill panels at the back of other cells. They slide in from the front as they are fitted; apart, they come out.
  float b8 = built(8);
  if (b8 > 0.) {
    vec3 s = q - apart(vec3(0., 0., .3)) - vec3(0., 0., .25 * (1. - b8));
    float ky = clamp(floor((s.y - .05) / TR + .5), 0., 4.);
    d = sdBox(vec3(s.x, s.y - .05 - ky * TR, s.z), vec3(SW - .016, .007, SD - .016));
    float t = clamp(floor((s.y - .05) / TR), 0., 3.), bx = s.x < 0. ? 0. : 1.;
    int c = CELL[int(bx) * 4 + int(t)];
    vec3 cl = vec3(s.x - (bx - .5) * SW, s.y - .05 - (t + .5) * TR, s.z);
    if (c == 1) {
      // two drawers, open boxes, each with a small knob
      vec3 dl = vec3(cl.x, abs(cl.y) - TR * .25, cl.z);
      float dr = max(sdBox(dl, vec3(SW * .5 - .02, TR * .25 - .012, SD - .02)), -sdBox(dl - vec3(0., .02, 0.), vec3(SW * .5 - .028, TR * .25 - .012, SD - .028)));
      dr = min(dr, length(dl - vec3(0., 0., SD - .008)) - .012);
      d = min(d, dr);
    } else if (c == 2) {
      // two sliding leaves in two tracks, overlapping at the middle
      float hw = SW * .5 - .02;
      d = min(d, min(sdBox(vec3(cl.x + (hw - .03) * .5, cl.y, cl.z - SD - .005), vec3((hw + .03) * .5, TR * .5 - .014, .003)),
                     sdBox(vec3(cl.x - (hw - .03) * .5, cl.y, cl.z - SD - .013), vec3((hw + .03) * .5, TR * .5 - .014, .003))));
    } else {
      // no front: a lower bound to the neighbouring cells' contents, which stand at least .012 in from the cell's edge
      d = min(d, max(max(abs(cl.z) - SD - .02, max(min(TR * .5 - abs(cl.y), SW * .5 - abs(cl.x)), 0.) + .012), sdBox(s - vec3(0., (SH + .05) * .5, 0.), vec3(SW, (SH - .05) * .5, SD + .02))));
    }
    res = U(res, vec2(cutaway(d, s.z), 28.));
    if (c == 3) {
      vec3 bk = q - apart(vec3(0., 0., -.15)) + vec3(0., 0., .25 * (1. - b8));
      res = U(res, vec2(cutaway(sdBox(bk - vec3((bx - .5) * SW, .05 + (t + .5) * TR, -SD + .006), vec3(SW * .5 - .018, TR * .5 - .014, .004)), bk.z), 24.));
    }
  }
  return res;
}

vec2 map(vec3 p) {
  vec2 res = vec2(1e5, 0.);
  float b = sdBox(p - vec3(XM, Y0 + .65 + .3 * uApart, .1 * uApart), vec3(1.5 * BAY + .12 + .25 * uApart, .9 + .35 * uApart, ZC + .16 + .25 * uApart));
  res = U(res, b < .1 ? frame(p) : vec2(b, 0.));
  b = sdBox(p - SU - vec3(0., SH * .5, .15 * uApart), vec3(SW + .06 + .15 * uApart, SH * .5 + .04, SD + .3 + .4 * uApart));
  res = U(res, b < .1 ? storage(p) : vec2(b, 0.));
  return res;
}
`};export{o as scene};
