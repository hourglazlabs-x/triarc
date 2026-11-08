import{a as t}from"./chunk-WFBFTKL4.js";import{a as e}from"./chunk-J3JRVZSH.js";import"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var r={id:"D08-discipline-and-play",cam:[1.48,1.47,3.68],target:[0,-.3,0],floor:-1.6,ring:2,accent:e(t.D08),poster:1.5,orbit:{az:[-80,80]},parts:[{name:"purpose",view:{az:6,el:6,zoom:.62}},{name:"elements",view:{az:-10,el:22,zoom:.75}},{name:"constraints",view:{az:0,el:8,zoom:1.05}},{name:"trial forms",view:{az:-10,el:20,zoom:.8}},{name:"slotted card",view:{az:-18,el:2,zoom:.6}},{name:"structure",view:{az:10,el:4,zoom:.8}}],glsl:`
const float Y0 = -.95;                  // the floor of the work
const float CW = .44;                   // a card: length,
const float CH = .29;                   // height (3 : 2, this model's own),
const float CT = .008;                  // thickness
const vec3 ST = vec3(.45, -.95, .02);   // the structure
const vec3 PU = vec3(.45, .04, .02);    // the purpose
const vec3 BH = vec3(.95, .65, .55);    // the constraints: the box's half size, from the floor up
const vec3 RC = vec3(-.5, -.14, .33);   // the rule card
const vec3 E1 = vec3(-.55, -.95, .3);   // the elements: a stack,
const vec3 E2 = vec3(-.12, -.95, .38);  // and two laid out

vec3 palette(int i) {
  if (i == 0) return vec3(1., .82, .45);    // purpose
  if (i == 1) return vec3(.92, .94, .98);   // elements
  if (i == 2) return vec3(.6, .86, 1.);     // constraints
  if (i == 3) return vec3(.8, .76, 1.);     // trial forms
  if (i == 4) return vec3(1., .88, .66);    // slotted card
  return vec3(.95, .92, .86);               // structure
}

/** The section: a plane through the structure's middle, the right half removed. */
float cutS(vec3 p) { return p.x - .45; }

/** A plain card with six slots (two in each long edge, a quarter in from each end; one in each end), in its own frame:
 * x along it, y up it, z through it, scaled by s. Returns (distance, 1 where the nearest face is a slot's). */
vec2 card(vec3 q, float s) {
  q /= s;
  float d = sdBox(q, vec3(CW * .5, CH * .5, CT * .5));
  float sl = min(sdBox(vec3(abs(q.x) - CW * .25, abs(q.y) - CH * .375 - .004, q.z), vec3(.006, CH * .125 + .004, CT)),
                 sdBox(vec3(abs(q.x) - CW * .4375 - .004, q.y, q.z), vec3(CW * .0625 + .004, .006, CT)));
  return vec2(max(d, -sl) * s, -sl > d ? 1. : 0.);
}
/** A box's twelve edges, e thick. */
float sdFrame(vec3 p, vec3 b, float e) {
  p = abs(p) - b; vec3 q = abs(p + e) - e;
  return min(min(length(max(vec3(p.x, q.y, q.z), 0.)) + min(max(p.x, max(q.y, q.z)), 0.),
                 length(max(vec3(q.x, p.y, q.z), 0.)) + min(max(q.x, max(p.y, q.z)), 0.)),
                 length(max(vec3(q.x, q.y, p.z), 0.)) + min(max(q.x, max(q.y, p.z)), 0.));
}
/** Storey s of the structure (l: the point over its floor): a frame of four cards crossing at their slots (the middle
 * one turned an eighth), a card laid flat on top of the lower two; the top storey three cards. */
float storey(vec3 l, float s) {
  if (s > .5 && s < 1.5) l.xz *= rot(.785);
  vec3 w = vec3(l.x, l.y - CH * .5, abs(l.z) - CW * .25);
  float d = card(w, 1.).x;
  w = s > 1.5 ? vec3(l.z, l.y - CH * .5, l.x - CW * .25) : vec3(l.z, l.y - CH * .5, abs(l.x) - CW * .25);
  d = min(d, card(w, 1.).x);
  return s < 1.5 ? min(d, card(vec3(l.x, l.z, l.y - CH - CT * .5), 1.).x) : d;
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., -.3 + .12 * uApart, 0.), BH * (1.45 + .1 * uApart) + .1);
  if (bound > .2) return vec2(bound, 0.);
  vec2 res = vec2(1e5, 0.);
  // 2 \xB7 constraints: the box's edges; they close in from wider as they are set; apart, they stand wider again.
  float b2 = built(2);
  if (b2 > 0.) {
    vec3 q = p - vec3(0., Y0 + BH.y, 0.);
    float sc = mix(1.4, 1., b2) + .1 * uApart;
    res = vec2(cutaway(sdFrame(q, BH * sc, .01), cutS(p)), 22.);
  }
  // 0 \xB7 purpose: a lit point with a ring, the aim, over the structure; apart, it rises.
  float b0 = built(0);
  vec3 q = p - PU - apart(vec3(0., .25, 0.));
  float d = length(q) - .14;
  if (d >= .05) res = U(res, vec2(d, 0.));
  else if (b0 > 0.) {
    vec3 r = q; r.yz *= rot(.35);
    d = min(length(q) - .055 * b0, sdTorus(r, vec2(.11 * b0, .005)));
    res = U(res, vec2(cutaway(d, cutS(q + PU)), 60.));
  }
  // 1 \xB7 elements: blank cards, a stack of five (each turned a little) and two laid out; apart, they come forward.
  if (built(1) > 0.) {
    q = p - E1 - apart(vec3(0., 0., .2));
    float pitch = CT + .002 + .03 * uApart;
    float k = clamp(floor(q.y / pitch), 0., 4.);
    vec3 c = q - vec3(0., (k + .5) * pitch, 0.);
    c.xz *= rot(k * .12 - .2);
    vec2 e = card(vec3(c.x, c.z, c.y), 1.);
    q = p - E2 - apart(vec3(0., 0., .2));
    c = q - vec3(0., CT * .5, 0.); c.xz *= rot(.35);
    e.x = min(e.x, card(vec3(c.x, c.z, c.y), 1.).x);
    c = q - vec3(.06, CT * 1.5, .04); c.xz *= rot(-.25);
    e.x = min(e.x, card(vec3(c.x, c.z, c.y), 1.).x);
    res = U(res, vec2(cutaway(rise(e.x, 1, p.y, Y0, Y0 + .06), cutS(p)), 21.));
  }
  // 3 \xB7 trial forms: three attempts along the back, ghostly, one after another: two cards leaning together, a card
  // fallen beside a standing one, a small frame that holds. Apart, they move back.
  float b3 = built(3);
  q = p - vec3(-.4, Y0, -.38) - apart(vec3(0., 0., -.2));
  d = sdBox(q - vec3(0., .12, 0.), vec3(.58, .14, .22));
  if (d >= .05) res = U(res, vec2(d, 0.));
  else if (b3 > 0.) {
    float i = clamp(floor((q.x + .57) / .38), 0., 2.);
    vec3 l = q - vec3((i - 1.) * .38, 0., 0.);
    float g = clamp(b3 * 3. - i, 0., 1.);
    if (i < .5) {
      vec3 c = vec3(l.x, l.y, abs(l.z) - .09); c.yz *= rot(.42);
      d = card(c - vec3(0., CH * .35, 0.), .7).x;
    } else if (i < 1.5) {
      d = card(l - vec3(0., CH * .35, 0.), .7).x;
      vec3 c = l - vec3(.03, .012, .12); c.xz *= rot(.5); c.yz *= rot(.12);
      d = min(d, card(vec3(c.x, c.z, c.y), .7).x);
    } else {
      d = min(card(vec3(l.x, l.y - CH * .35, abs(l.z) - CW * .175), .7).x, card(vec3(l.z, l.y - CH * .35, abs(l.x) - CW * .175), .7).x);
    }
    d = g <= 0. ? 1e5 : g >= 1. ? d : max(d, l.y - .26 * g);
    res = U(res, vec2(SHELL(cutaway(d, cutS(p))), 43.));
  }
  // 4 \xB7 slotted card: the rule, one plain card with its six slots lit, floating over the elements; apart, it comes out.
  float b4 = built(4);
  q = p - RC - apart(vec3(0., .15, .2));
  d = length(q) - .36;
  if (d >= .05) res = U(res, vec2(d, 0.));
  else if (b4 > 0.) {
    q.xz *= rot(.35); q.yz *= rot(-.12);
    vec2 c = card(q, 1.25 * b4);
    res = U(res, vec2(cutaway(c.x, cutS(p)), c.y > .5 ? 64. : 24.));
  }
  // 5 \xB7 structure: three storeys of the same cards, built from the floor up; apart, the storeys lift off one another.
  float b5 = built(5);
  q = p - ST;
  float lift = CH + CT + .15 * uApart;
  d = sdBox(q - vec3(0., 1.5 * lift, 0.), vec3(.34, 1.5 * lift + .02, .34));
  if (d >= .05) res = U(res, vec2(d, 0.));
  else if (b5 > 0.) {
    float s = clamp(floor(q.y / lift), 0., 1.);
    d = min(storey(q - vec3(0., s * lift, 0.), s), storey(q - vec3(0., (s + 1.) * lift, 0.), s + 1.));
    res = U(res, vec2(cutaway(rise(d, 5, q.y, 0., 3. * lift), cutS(p)), 25.));
  }
  return res;
}
`};export{r as scene};
