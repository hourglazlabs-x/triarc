import"./chunk-KR4ZLU5I.js";var e={id:"N21",cam:[-4.05,.95,-1.35],target:[0,-.1,.05],fov:2.4,floor:-1.75,ring:1.75,poster:2.2,glsl:`
vec3 palette(int i) {
  if (i == 0) return vec3(.36, .56, 1.);    // frontal lobe
  if (i == 1) return vec3(1., .80, .30);    // parietal lobe
  if (i == 2) return vec3(.36, .82, .46);   // temporal lobe
  if (i == 3) return vec3(1., .44, .44);    // occipital lobe
  if (i == 4) return vec3(.66, .46, .95);   // cerebellum
  if (i == 5) return vec3(1., .58, .24);    // brainstem
  return vec3(.10, .78, 1.);                // activity
}

/** Hemisphere outline (x \u2265 0 lateral, y up, z forward), before folding; tl = distance to the temporal lobe. */
float hemi(vec3 q, out float tl) {
  float d = sdEllipsoid(q - vec3(.4, .2, -.05), vec3(.6, .74, 1.18));
  d = smin(d, sdEllipsoid(q - vec3(.36, .17, .45), vec3(.56, .68, .76)), .2);
  // Underside of the frontal lobe flattened a little.
  d = smax(d, -(q.y + .36 - .12 * q.z), .12);
  // Temporal lobe: its own swelling below; the crease above it is the lateral sulcus.
  vec3 t = q - vec3(.57, -.3, .1); t.yz *= rot(-.26);
  tl = sdEllipsoid(t, vec3(.4, .29, .66));
  d = smin(d, tl, .045);
  // Longitudinal fissure between the hemispheres.
  return smax(d, -(q.x - .022), .03);
}
/** Gyri and sulci: the zero set of a warped gyroid; 1 in a sulcus, 0 on the crown of a gyrus. */
float folds(vec3 q) {
  vec3 w = q * vec3(15., 16.5, 10.5);
  w += 1.3 * sin(w.yzx * vec3(.31, .45, .37) + vec3(1.3, 2.1, .7));
  float g = sin(w.x) * cos(w.y) + sin(w.y) * cos(w.z) + sin(w.z) * cos(w.x);
  return 1. - smoothstep(0., 1., abs(g));
}
/** Lobe of a cortex point above the temporal lobe: 0 frontal, 1 parietal, 3 occipital. */
float lobe(vec3 q) {
  if (.985 * q.z - .174 * q.y + .72 + .03 * sin(q.y * 13.) < 0.) return 3.;   // behind the parieto-occipital line
  return q.z - (.3 - .38 * q.y) + .035 * sin(q.y * 15. + 1.) > 0. ? 0. : 1.;  // central sulcus, slanting back toward the top
}

vec2 map(vec3 p) {
  float bound = sdBox(p - vec3(0., -.15, .02), vec3(1.02, 1.18, 1.32));
  if (bound > .3) return vec2(bound, 0.);
  vec3 q = vec3(abs(p.x), p.y, -p.z);

  // Cerebrum.
  float tl;
  float d = hemi(q, tl);
  float f = 0.;
  if (d < .1) {
    f = folds(q);
    d += .044 * f;
  }
  vec2 res = vec2(d * .48, 20.);
  if (d < .03) {
    float lb = tl < d + .02 && .985 * q.z - .174 * q.y + .72 > 0. ? 2. : lobe(q);
    float m = 20. + lb;
    // Waves of activity: rings spreading from two sources, carrying sparks on the gyral crowns.
    float band = max(wave(length(q - vec3(.5, .5, .75)), uTime, .42, 2.1, .16),
                     wave(length(q - vec3(.45, -.1, -1.05)), uTime + 1.4, .42, 2.1, .16));
    if (band > .3 && f < .45) {
      vec3 c = floor(q * 11.);
      vec3 j = vec3(hash31(c), hash31(c + 7.1), hash31(c + 3.7)) - .5;
      if (hash31(c + 1.9) > .12 && length(fract(q * 11.) - .5 - j * .4) < .17 + .13 * band) m = 66.;
    }
    res.y = m;
  }

  // Cerebellum: two lobes and the vermis under the occipital lobes.
  float cb = sdEllipsoid(q - vec3(.3, -.56, -.78), vec3(.36, .29, .38));
  cb = smin(cb, sdEllipsoid(q - vec3(0., -.54, -.84), vec3(.2, .25, .3)), .12);
  cb = smax(cb, -(q.x - .012), .03);
  res = U(res, vec2(cb + .006 * sin((q.y + .45 * q.z * q.z) * 70.), 24.));

  // Brainstem: midbrain, the bulging pons and the medulla tapering down.
  float bs = sdTaper(q, vec3(0., -.2, -.28), vec3(0., -1.2, -.46), .17, .1);
  bs = smin(bs, sdEllipsoid(q - vec3(0., -.6, -.26), vec3(.22, .2, .2)), .1);
  res = U(res, vec2(bs, 25.));
  return res;
}

float sceneDetail(vec3 p, float m) {
  if (m > 23.5 && m < 24.5) return .0025 * sin((p.y + .45 * p.z * p.z) * 230.);
  if (m > 24.5 && m < 25.5) return .002 * sin(p.y * 120.) + .0015 * noise3(p * 40.);
  if (m < 23.5) return .0018 * noise3(p * 50.);
  return 0.;
}`};export{e as scene};
