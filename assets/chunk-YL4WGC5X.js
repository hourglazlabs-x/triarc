import"./chunk-KR4ZLU5I.js";var e={id:"N29",cam:[2.1,1.6,3.55],target:[.38,.2,0],fov:2.8,floor:-1.2,ring:1.5,poster:1.2,orbit:{az:[-60,40]},glsl:`
const float S = 1.4, TILT = .2, ROLL = .32;

vec3 palette(int i) {
  if (i == 0) return vec3(.96, .55, .39);   // skin
  if (i == 1) return vec3(1., .80, .84);    // nail plate
  if (i == 2) return vec3(1., .98, .98);    // growth line in the plate
  if (i == 3) return vec3(.98, .96, .94);   // free edge
  if (i == 4) return vec3(.94, .34, .42);   // nail bed
  if (i == 5) return vec3(.98, .95, .93);   // lunula
  if (i == 6) return vec3(1., .46, .62);    // matrix glow
  if (i == 7) return vec3(.93, .88, .76);   // bone
  return vec3(.55, .95, 1.);                // growth-direction markers
}

vec3 local(vec3 p) { vec3 q = p - vec3(-.1, -.1, 0.); q.xy *= rot(-TILT); q.yz *= rot(-ROLL); return q / S; }
float rrect(vec2 p, vec2 b, float r) { vec2 d = abs(p) - b + r; return length(max(d, 0.)) + min(max(d.x, d.y), 0.) - r; }
/** Height of the nail plate's upper surface (local units): curved across, bending down past the bed. */
float nailTop(vec3 q) { return .4 - q.z * q.z - .35 * pow(max(q.x - .7, 0.), 2.); }
/** The nail's outline in plan, from its root under the fold to the curved free edge. */
float nailOutline(vec3 q) {
  float o = length(max(abs(vec2(q.x - .4, q.z)) - vec2(.76, .26), 0.)) - .04;
  return max(o, q.x - (1.17 - .7 * q.z * q.z));
}

float skin(vec3 q) {
  // A flat-topped finger, so the curved nail dips under the skin at its sides (the lateral folds).
  float tube = max(rrect(q.yz - vec2(-.02, 0.), vec2(.385, .4), .3), q.x - .7);
  float d = smin(tube, sdEllipsoid(q - vec3(.68, -.06, 0.), vec3(.42, .36, .4)), .17);
  d = smin(d, sdEllipsoid(q - vec3(-.62, .05, 0.), vec3(.32, .34, .41)), .1);   // knuckle of the end joint
  return smin(d, sdEllipsoid(q - vec3(-.27, .37, 0.), vec3(.3, .072, .29)), .07); // proximal nail fold
}

vec2 map(vec3 p) {
  vec3 q = local(p);
  float bound = sdBox(q - vec3(-3.6, .12, 0.), vec3(5., .7, .55)) * S;
  if (bound > .3) return vec2(bound, 0.);
  float t = uTime;
  float ny = nailTop(q);

  vec2 res = vec2(SHELL(skin(q) * S), 80.);
  // Nail plate: clear, with growth lines drifting toward the tip; white past the nail bed.
  float plate = max((abs(q.y - ny + .016) - .016) * .85, nailOutline(q));
  float g = fract((q.x - t * .045) / .13);
  float pm = q.x > .84 - .45 * q.z * q.z ? 43. : g < .2 ? 42. : 41.;
  res = U(res, vec2(SHELL(plate * S), pm));

  // Growth markers above the nail: dots moving toward the tip, then an arrowhead.
  vec3 m = q - vec3(0., .64, 0.);
  float ph = m.x - t * .16;
  float c = (floor(ph / .2) + .5) * .2 + t * .16;
  float fade = smoothstep(-.05, .12, c) * (1. - smoothstep(.85, 1.02, c));
  float dots = max(length(vec3(m.x - c, m.y, m.z)) - .022 * fade, abs(m.x - .5) - .58);
  vec3 a = m - vec3(1.1, 0., 0.);
  float arrow = max((length(a.yz) - (.048 - a.x * .42)) * .9, max(-a.x, a.x - .115));
  res = U(res, vec2(min(dots, arrow) * S, 68.));

  // Inside the skin and under the nail.
  if (!gSkipShell) return res;
  // Nail bed (pink: it colors the nail), lunula and the glowing matrix under the fold.
  float under = abs(q.y - (ny - .055)) - .022;
  float bedOut = max(nailOutline(q) - .03, max(-q.x - .04, q.x - (.84 - .45 * q.z * q.z)));
  float lun = max(q.x - (.16 - .9 * q.z * q.z), -q.x - .06);
  res = U(res, vec2(max(max(under, bedOut), -lun) * S, 24.));
  res = U(res, vec2(max(max(under - .004, bedOut), lun) * S, 25.));
  float pulse = .5 + .5 * sin(t * TAU / 3.);
  float mtx = sdEllipsoid(q - vec3(-.2, .345 - .3 * q.z * q.z, 0.), vec3(.14 + .015 * pulse, .024 + .006 * pulse, .19 + .012 * pulse));
  res = U(res, vec2(mtx * S, 66.));
  // Bones: the end phalanx (base, shaft and the spade-shaped tuft) and the head of the middle phalanx.
  float b = sdRoundCone(q, vec3(-.45, .03, 0.), vec3(.5, .08, 0.), .16, .075);
  b = smin(b, sdEllipsoid(q - vec3(.72, .1, 0.), vec3(.18, .06, .17)), .08);
  b = smin(b, sdEllipsoid(q - vec3(-.47, .03, 0.), vec3(.08, .19, .22)), .06);
  float mid = sdCapsule(q, vec3(-9., 0., 0.), vec3(-.84, .01, 0.), .17);
  mid = smin(mid, sdEllipsoid(q - vec3(-.73, .01, 0.), vec3(.13, .18, .21)), .08);
  res = U(res, vec2(min(b, mid) * S, 27.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  vec3 q = local(p);
  if (m > 39.5 && m < 40.5) {
    // Creases over the joint, fingerprint ridges on the pad, fine skin texture elsewhere.
    float crease = exp(-pow((q.x + .62) * 6., 2.)) * smoothstep(.1, .3, q.y) * sin(q.x * 160.);
    float print = smoothstep(.0, -.2, q.y) * smoothstep(-.2, .3, q.x) * sin(length(q.xz - vec2(.55, 0.)) * 190.);
    return .0025 * crease + .0012 * print + .0008 * noise3(q * 90.);
  }
  if (m > 40.5 && m < 43.5) return .001 * sin((q.x - uTime * .045) * TAU / .065);
  if (m > 26.5 && m < 27.5) return .002 * noise3(p * 50.);
  return 0.;
}`};export{e as scene};
