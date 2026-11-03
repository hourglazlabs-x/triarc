import"./chunk-KR4ZLU5I.js";var e={id:"N25",cam:[-3.85,.95,-2.25],target:[0,.18,-.15],fov:2.5,floor:-1.45,ring:1.7,poster:1.35,orbit:{az:[-45,60],el:[4,55]},glsl:`
const vec3 EYE = vec3(0., .2, 0.);
const vec3 CC = vec3(0., 0., .55);           // centre of the cornea's curvature
const float LZ = .55;                       // lens centre
const vec3 FOV = vec3(0., 0., -.875);        // fovea
const vec3 DISC = vec3(-.25, .02, -.84);     // optic disc
float gPupil;

vec3 palette(int i) {
  if (i == 0) return vec3(.93, .91, .86);   // sclera
  if (i == 1) return vec3(.42, .13, .12);   // choroid
  if (i == 2) return vec3(.98, .42, .20);   // retina
  if (i == 3) return vec3(.20, .46, .96);   // iris
  if (i == 4) return vec3(1., .66, .16);    // lens
  if (i == 5) return vec3(.70, .30, .26);   // ciliary body
  if (i == 6) return vec3(1., .82, .30);    // optic nerve
  if (i == 7) return vec3(.96, .20, .17);   // retinal arteries
  if (i == 8) return vec3(.16, .36, 1.);    // retinal veins
  if (i == 9) return vec3(.10, .06, .07);   // pupil margin
  if (i == 10) return vec3(.72, .88, 1.);   // cornea (thin glass)
  if (i == 11) return vec3(.62, .38, .02);  // light rays (glow)
  if (i == 12) return vec3(1., .74, .22);   // pulses of light (glow)
  if (i == 13) return vec3(.30, .88, 1.);   // nerve signals (glow)
  return vec3(.80, .92, 1.);                // vitreous (thin glass)
}

/** Distance in the (y, z) plane to a segment, and the arc length along it from s0. */
vec2 seg2(vec2 p, vec2 a, vec2 b, float s0) {
  vec2 pa = p - a, ba = b - a; float L = length(ba);
  float h = clamp(dot(pa, ba) / (L * L), 0., 1.);
  return vec2(length(pa - ba * h), s0 + h * L);
}
vec2 nearer(vec2 a, vec2 b) { return a.x < b.x ? a : b; }
/** One ray entering at height y0: straight in, bent at the cornea, through the lens, on to the fovea. */
vec2 ray(vec2 p, float y0) {
  vec2 a = vec2(y0, 1.66);
  vec2 b = vec2(y0, CC.z + sqrt(.4225 - y0 * y0));
  vec2 c = vec2(y0 * .62, LZ + .17 * sqrt(1. - pow(y0 * .62 / .36, 2.)));
  vec2 d = vec2(y0 * .4, LZ - .17 * sqrt(1. - pow(y0 * .4 / .36, 2.)));
  vec2 f = FOV.yz;
  float sb = length(b - a), sc = sb + length(c - b), sd = sc + length(d - c);
  vec2 r = seg2(p, a, b, 0.);
  r = nearer(r, seg2(p, b, c, sb));
  r = nearer(r, seg2(p, c, d, sc));
  return nearer(r, seg2(p, d, f, sd));
}

vec2 map(vec3 p) {
  vec3 q = p - EYE; q.xz = -q.xz;
  float bound = sdBox(q - vec3(-.3, 0., -.02), vec3(1.15, 1.12, 1.82));
  if (bound > .3) return vec2(bound, 0.);
  gPupil = .25 + .045 * sin(TAU * uTime / 6.);
  float cut = q.x;   // the half facing the camera is removed
  float r = length(q);

  // Wall of the globe behind the cornea: sclera, choroid, retina (from the ora serrata back).
  float front = q.z - .8;
  vec2 res = vec2(max(max(abs(r - .97) - .03, front), cut), 20.);
  res = U(res, vec2(max(max(abs(r - .93) - .012, q.z - .7), cut), 21.));
  float ret = max(max(abs(r - .905) - .016, q.z - .52), cut);
  // Retinal vessels: an artery and a vein leave the optic disc above and below and arch around the fovea
  // (circles on the retina around the fovea's direction), with a smaller pair running toward the nose.
  if (abs(r - .89) < .05 && q.z < -.3) {
    float an = acos(clamp(-q.z / r, -1., 1.));                  // angle from the fovea's direction
    float art = length(vec2(r - .884, (an - .27) * .9)) - .011;
    float vei = length(vec2(r - .884, (an - .33) * .9)) - .013;
    vec3 v = q - DISC;
    float an2 = acos(clamp(dot(normalize(q), normalize(vec3(-.62, .02, -.78))), -1., 1.));
    art = min(art, max(length(vec2(r - .884, (an2 - .2) * .9)) - .009, -v.x));
    vei = min(vei, max(length(vec2(r - .884, (an2 - .24) * .9)) - .011, -v.x));
    res = U(res, vec2(max(art, cut), 27.));
    res = U(res, vec2(max(vei, cut), 28.));
  }
  // Signals gather from the fovea to the optic disc and run down the nerve; the fovea glows softly.
  float sig = wave(-length(q - DISC) + .3, uTime, .55, 1.2, .07);
  res = U(res, vec2(ret, sig > .55 && length(q - DISC) < .3 ? 73. : 22.));
  res = U(res, vec2(max(length(q - FOV) - .045, cut), 72.));

  // Optic nerve, leaving the back of the globe at the disc.
  vec3 na = DISC * 1.06, nb = vec3(-.48, -.08, -1.72);
  vec3 nq = q - na; vec3 nd = normalize(nb - na);
  float nh = dot(nq, nd);
  float nerve = max(length(nq - nd * clamp(nh, 0., 2.)) - .16 + .02 * smoothstep(.0, 1., nh), max(-nh, nh - length(nb - na)));
  nerve = smax(nerve, -(r - .95), .03);
  float pulse = wave(nh, uTime - .5, .55, 1.2, .08);
  res = U(res, vec2(nerve, pulse > .5 ? 73. : 26.));

  // Front of the eye: ciliary body, iris around the pupil (dark at its margin), lens; the clear cornea.
  vec3 ci = q - vec3(0., 0., .68);
  res = U(res, vec2(max(sdTorus(ci.xzy, vec2(.6, .065)), cut), 25.));
  float rr = length(q.xy);
  float iris = max(abs(q.z - .73) - .02 - .012 * smoothstep(gPupil + .12, gPupil, rr), max(gPupil - rr, rr - .6));
  res = U(res, vec2(max(iris, cut), rr < gPupil + .012 ? 29. : 23.));
  float lens = sdEllipsoid(q - vec3(0., 0., LZ), vec3(.36, .36, .17));
  res = U(res, vec2(max(lens, cut), 24.));
  // The vitreous: clear gel filling the globe behind the lens.
  float vit = smax(max(r - .885, q.z - .5), -(lens - .015), .03);
  res = U(res, vec2(SHELL(max(vit, cut + .004)), 94.));
  float cornea = max(abs(length(q - CC) - .64) - .018, .8 - q.z);
  res = U(res, vec2(SHELL(max(cornea, cut)), 90.));

  // Light rays, just in front of the cut: dim gold with brighter pulses flowing toward the retina.
  if (abs(q.x - .05) < res.x + .05 && q.z > -1. && abs(q.y) < .45) {
    vec2 yz = vec2(abs(q.y), q.z);
    vec2 rd = nearer(ray(yz, 0.), nearer(ray(yz, .14), ray(yz, .28)));
    float rl = length(vec2(rd.x, q.x - .05)) - .0085;
    float pl = wave(rd.y, uTime, .9, .62, .06);
    res = U(res, vec2(rl - .009 * pl, pl > .45 ? 72. : 71.));
  }
  return res;
}

float sceneDetail(vec3 p, float m) {
  vec3 q = p - EYE; q.xz = -q.xz;
  // Iris: radial fibres and a ring of crypts.
  if (m > 22.5 && m < 23.5) return .004 * sin(atan(q.y, q.x) * 48.) * smoothstep(.2, .45, length(q.xy)) + .002 * noise3(q * 60.);
  if (m > 21.5 && m < 22.5) return .002 * noise3(q * 50.);
  if (m > 25.5 && m < 26.5) return .003 * sin(atan(q.y + .05, q.x + .4) * 26.);
  if (m > 19.5 && m < 20.5) return .0015 * noise3(q * 30.);
  return 0.;
}`};export{e as scene};
