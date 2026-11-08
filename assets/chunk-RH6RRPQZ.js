import{a as t}from"./chunk-4QM5HSGV.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var o={id:"D04-box",cam:[3.46,.78,4.77],target:[0,-.36,0],floor:-1.6,ring:1.9,accent:e(t.D04),poster:6,parts:[{name:"closed box",inside:!0,view:{el:8,zoom:.9}},{name:"corner posts",inside:!0,view:{el:2,zoom:.85}},{name:"punched windows",inside:!0,view:{el:4,zoom:.82}},{name:"inset supports",inside:!0,view:{el:10,zoom:.85}},{name:"cantilevered roof",view:{az:-20,el:-6}},{name:"open corners",view:{az:8,el:8,zoom:.8}},{name:"free-standing screens",view:{az:-34,el:0}},{name:"corner glass",view:{az:8,el:-4,zoom:.72}},{name:"space within",inside:!0,view:{el:16,zoom:.88}}],glsl:`
const float GY = -.8;        // the top of the grid plate
const float M = .375;        // the planning module: 5 ft
const float B = .75;         // the box's half-width: two modules (20 ft square)
const float H = .75;         // its height: two modules (10 ft)
const float F0 = GY + .08;   // its floor, on the slab that hovers over the grid
const float T = .035;        // its walls' thickness
const float S = M;           // the supports, moved in one module from each corner (the quarter points)
const float BS = .94;        // where the screens end up: half a module out from the box
const float SL = .47;        // the screens' half-length: each corner released by .28
const float R = 1.125;       // the roof slab's half-width: three modules
const float RF = 1.03;       // the floor slab's
const float RT = .05;        // the roof slab's thickness
const float FT = .045;       // the floor slab's
const float BD = .07;        // the beams' depth
const float CG = .16;        // the clerestory gap left over the screens
const float WX = .24, WW = .09, WH = .12, WY = .02;   // the windows: centre along the wall, half-width, half-height, lift
const float UPB = .55, UPR = 1.05;                    // taken apart: the ghost box lifts, the roof lifts higher

vec3 palette(int i) {
  if (i == 0) return vec3(.56, .66, .92);   // closed box: a ghost once opened
  if (i == 1) return vec3(.86, .74, .66);   // corner posts
  if (i == 2) return vec3(.55, .84, 1.);    // punched windows
  if (i == 3) return vec3(1., .58, .34);    // inset supports: the move
  if (i == 4) return vec3(1., .93, .84);    // cantilevered roof and floor slabs
  if (i == 5) return vec3(1., .82, .42);    // open corners
  if (i == 6) return vec3(.88, .93, 1.);    // free-standing screens
  if (i == 7) return vec3(.58, .92, 1.);    // corner glass
  return vec3(.48, 1., .80);                // space within
}

float sdRect(vec2 p, vec2 b) { vec2 q = abs(p) - b; return length(max(q, 0.)) + min(max(q.x, q.y), 0.); }
/** Plan coordinates folded eightfold (the model is symmetric about both axes and both diagonals): x >= z >= 0. */
vec2 fold8(vec2 xz) { vec2 a = abs(xz); return vec2(max(a.x, a.y), min(a.x, a.y)); }

/** The section: one vertical plane across the diagonal, facing the scene's own view; the near corner is removed. */
float cutS(vec3 p) { return (p.x + p.z) * .70711 - .1; }

vec2 map(vec3 p) {
  // One bound round everything (rays far from the model step straight to it). Inside it the code runs straight
  // through: on the software renderer, branches that differ between neighbouring pixels cost more than they save.
  float top = F0 + H + RT + UPR * uApart + .02, wide = 1.34 + .36 * uApart;
  float bound = sdBox(p - vec3(0., (top + GY - .04) * .5, 0.), vec3(wide, (top - GY + .04) * .5, wide));
  if (bound > .2) return vec2(bound, 0.);
  float cs = cutS(p);
  float g2 = built(2), g3 = built(3), g4 = built(4), g5 = built(5), g6 = built(6), g7 = built(7), g8 = built(8);
  float e3 = smoothstep(.12, .88, g3), e4 = smoothstep(0., 1., g4), e6 = smoothstep(0., 1., g6);
  vec2 fp = fold8(p.xz);

  // The neutral planning grid under it all (not a part): a plate ruled every module.
  vec2 res = vec2(sdBox(p - vec3(0., GY - .02, 0.), vec3(1.32, .02, 1.32)), 4.);
  vec2 gl = abs(fract(p.xz / M + .5) - .5) * M;
  res = U(res, vec2(max(abs(p.y - GY) - .0025, max(min(gl.x, gl.y) - .0025, max(abs(p.x), abs(p.z)) - 1.32)), 3.));

  // 0 \xB7 The closed box: four walls, a floor and a lid. Holes are bored in it, its corners are cut back as they open,
  // its lid and floor give way to the slabs, its walls to the screens; what stays is its ghost, its outline at the
  // floor and the ceiling. Lifted, with its posts and windows, when taken apart.
  vec3 q = p - apart(vec3(0., UPB, 0.));
  vec3 c = q - vec3(0., F0 + H * .5, 0.);
  if (g6 <= 0. || g4 < .5) {
    float d = 1e5;
    if (g6 <= 0.) {
      float len = B - (B - SL) * g5;
      d = sdBox(vec3(fp.x - (B - T * .5), c.y, fp.y - len * .5), vec3(T * .5, H * .5, len * .5));
      d = max(d, -sdBox(vec3(fp.x - B, c.y - WY, fp.y - WX), vec3(.1, WH * g2, WW * g2)));
    }
    if (g4 < .5) d = min(d, sdBox(vec3(c.x, abs(c.y) - (H - T) * .5, c.z), vec3(B, T * .5, B)));
    res = U(res, vec2(cutaway(rise(d, 0, q.y, F0, F0 + H), cs), 20.));
  }
  float ghost = length(vec3(fp.x - B, abs(c.y) - H * .5, max(fp.y - B, 0.))) - .006;
  res = U(res, vec2(cutaway(rise(ghost, 0, q.y, F0, F0 + H), cs), 60.));

  // 1 \xB7 Corner posts: the four sticks at the corners that carry the box; once the supports move in, only their ghosts
  // stand there, thin rods.
  {
    float pt = F0 + H + .02, pm = (GY + pt) * .5, ph = (pt - GY) * .5;
    vec2 fo = fp - .2 * uApart;
    float post;
    if (g3 <= 0.) post = sdBox(vec3(fo.x - B, q.y - pm, fo.y - B), vec3(.0425, ph, .0425));
    else post = min(length(vec3(fo.x - B, max(abs(q.y - pm) - ph, 0.), fo.y - B)) - .013,
                    sdBox(vec3(fo.x - B, abs(q.y - pm) - ph + .006, fo.y - B), vec3(.045, .006, .045)));
    res = U(res, vec2(cutaway(rise(post, 1, q.y, GY, pt), cs), g3 <= 0. ? 21. : 61.));
  }

  // 2 \xB7 Punched windows: holes bored through the walls, framed and glazed; when the walls let go, their outlines stay
  // on the ghost.
  if (g2 > 0.) {
    vec3 w = vec3(fp.x - B - .2 * uApart, c.y - WY, fp.y - WX);
    if (g6 <= 0.) {
      vec2 hs = vec2(WW, WH) * g2;
      float fr = max(max(sdRect(w.zy, hs + .016), -sdRect(w.zy, hs)), abs(w.x + T * .5) - T * .5 - .006);
      res = U(res, vec2(cutaway(fr, cs), 22.));
      float pane = max(sdRect(w.zy, hs), abs(w.x + T * .5) - .003);
      res = U(res, vec2(SHELL(cutaway(pane, cs)), 82.));
    } else {
      float o = max(abs(sdRect(w.zy, vec2(WW, WH))) - .0055, abs(w.x) - .0055);
      res = U(res, vec2(cutaway(o, cs), 62.));
    }
  }

  // 3 \xB7 Inset supports: each support leaves its corner and moves in, along the diagonal, to the quarter point; a
  // dashed trace on the floor shows the move.
  if (g3 > 0.) {
    float s = mix(B, S, e3);
    float pt = F0 + H - BD, pm = (GY + pt) * .5, ph = (pt - GY) * .5;
    float post = min(sdBox(vec3(fp.x - s, p.y - pm, fp.y - s), vec3(.04, ph, .04)),
                     sdBox(vec3(fp.x - s, abs(p.y - pm) - ph + .012, fp.y - s), vec3(.058, .012, .058)));
    res = U(res, vec2(cutaway(post, cs), 23.));
    float fy = F0 + .005 + (g4 < .5 ? T : 0.);
    vec3 fq = vec3(fp.x, p.y, fp.y);
    float trace = sdCapsule(fq, vec3(s + .07, fy, s + .07), vec3(B, fy, B), .005);
    trace = max(trace, (abs(fract((fp.x + fp.y) * 11.3 - uTime * .6) - .5) - .22) / 16.);
    float tip = s + .075;
    trace = min(trace, sdCapsule(fq, vec3(tip, fy, tip), vec3(tip + .065, fy, tip), .005));
    res = U(res, vec2(cutaway(trace, cs), 63.));
  }

  // 4 \xB7 Cantilevered roof: the roof slab on four beams that rest on the supports and run out past them; and the floor
  // slab, reaching out the same way.
  if (g4 > 0.) {
    float rr = mix(S + .07, R, e4), rf = mix(S + .07, RF, e4);
    vec3 r = p - apart(vec3(0., UPR, 0.));
    vec3 rc = r - vec3(0., F0 + H + RT * .5, 0.);
    float slab = sdBox(rc, vec3(rr, RT * .5, rr));
    // a fascia: a thin band proud of the slab's edge, so its thickness reads
    slab = min(slab, max(sdBox(rc - vec3(0., -.006, 0.), vec3(rr + .006, RT * .5 - .018, rr + .006)), .03 - (rr - max(abs(rc.x), abs(rc.z)))));
    res = U(res, vec2(cutaway(slab, cs), 24.));
    // The beams: in plan a square grid of two lines each way, on the supports, clipped at the slab's edge.
    vec2 f = fold8(r.xz);
    float plan = max(min(abs(f.x - S), abs(f.y - S)) - .025, f.x - (rr - .03));
    float beam = max(plan, abs(r.y - (F0 + H - BD * .5)) - BD * .5);
    res = U(res, vec2(cutaway(beam, cs), 24.));
    res = U(res, vec2(cutaway(sdBox(p - vec3(0., F0 - FT * .5, 0.), vec3(rf, FT * .5, rf)), cs), 24.));
  }

  // 5 \xB7 Open corners: the walls are cut back from the corners; each opened corner is marked by a pad on the floor and
  // its outline at the floor and at the head.
  if (g5 > 0.) {
    float cn = mix(B, BS, e6);
    float len = mix(B - (B - SL) * g5, SL, e6);
    vec2 f = fp - .22 * uApart;
    float m = (len + cn) * .5, h = (cn - len) * .5;
    float pad = sdBox(vec3(f.x - m, p.y - (F0 + .003), f.y - m), vec3(h - .014, .003, h - .014));
    float ln = sdBox(vec3(f.x - (cn - .02), abs(p.y - (F0 + H * .5)) - (H * .5 - .007), f.y - m), vec3(.0055, .0055, h));
    res = U(res, vec2(cutaway(pad, cs), 25.));
    res = U(res, vec2(cutaway(ln, cs), 65.));
  }

  // 6 \xB7 Free-standing screens: the walls, released from the corners, slide out half a module and stand free, clear
  // of the roof; the windows' holes close as they go.
  if (g6 > 0.) {
    float off = mix(B, BS, e6) + .3 * uApart;
    float st = F0 + mix(H, H - CG, e6);
    float scr = sdBox(vec3(fp.x - (off - .02), p.y - (F0 + st) * .5, fp.y), vec3(.02, (st - F0) * .5, SL));
    float rv = abs(abs(p.y - (F0 + .3)) - .1);
    scr = max(scr, -max(min(abs(fp.x - off), abs(fp.x - off + .04)) - .005, rv - .005));
    float hs = 1. - smoothstep(0., .6, g6);
    if (hs > 0.) scr = max(scr, -sdBox(vec3(fp.x - off, p.y - (F0 + H * .5 + WY), fp.y - WX), vec3(.1, WH * hs, WW * hs)));
    res = U(res, vec2(cutaway(scr, cs), 26.));
  }

  // 7 \xB7 Corner glass: two panes meet at each open corner with no post between them; the view turns the corner.
  if (g7 > 0.) {
    vec2 f = fp - .3 * uApart;
    float x = BS - .02;
    vec3 r = vec3(f.x - x, p.y - (F0 + H * .5), f.y - (SL + x) * .5);
    float pane = rise(sdBox(r, vec3(.003, H * .5, (x - SL) * .5 + .003)), 7, p.y, F0, F0 + H);
    res = U(res, vec2(SHELL(cutaway(pane, cs)), 87.));
    float rail = sdBox(vec3(r.x, abs(r.y) - (H * .5 - .008), r.z), vec3(.009, .008, (x - SL) * .5 + .009));
    res = U(res, vec2(cutaway(rise(rail, 7, p.y, F0, F0 + H), cs), 27.));
  }

  // 8 \xB7 The space within: lines of light that start at the centre and run out through the open corners, the way the
  // space flows out (and the outside in), in eight directions and at three heights.
  if (g8 > 0.) {
    float yy = p.y - F0;
    float along = dot(fp, vec2(.866, .5)), across = dot(fp, vec2(-.5, .866));
    float hy = yy - clamp(floor(yy / .18 + .5), 1., 3.) * .18;
    float ln = length(vec2(across, hy)) - .008;
    ln = max(ln, max(.1 - along, along - mix(.12, 1.32, g8)));
    ln = max(ln, (abs(fract(along * 5. - uTime * .45) - .5) - .2) / 5.);
    res = U(res, vec2(cutaway(ln, cs), 68.));
  }
  return res;
}
`};export{o as scene};
