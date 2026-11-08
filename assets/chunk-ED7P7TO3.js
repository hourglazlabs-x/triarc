import{c as l}from"./chunk-J3JRVZSH.js";var h=1.3;function u(o){let e=[.93,.3,1],t=[o[0]*.5+e[0]*.5,o[1]*.5+e[1]*.5,o[2]*.5+e[2]*.5],a=1/Math.max(t[0],t[1],t[2],.001);return{a:[.3,.92,1],b:[t[0]*a,t[1]*a,t[2]*a]}}function r(o){let e=l({id:"N01",cam:[0,0,1],target:[0,0,0],glsl:""},o),t=e.indexOf(`
void main() {`);return e.slice(0,t)}var c=`
uniform float uFocus;
int partOf(float m) { int k = int(m + .5); return k >= 20 && k < 100 ? (k - 20) % 20 : -1; }
bool isFocused(float m) { int p = partOf(m); int f = int(uFocus + .5); return p >= 0 && ((f >> p) & 1) == 1; }
`,n=`
uniform float uMask;
uniform vec3 uNeonA;
uniform vec3 uNeonB;
struct HoloHit { float t; float m; float glow; float fglow; bool ok; };
/** The library's march, also gathering the glow of the named parts where they are the nearest surface. */
HoloHit marchHolo(vec3 ro, vec3 rd, float tmax) {
  HoloHit h; h.t = 0.; h.ok = false; h.glow = 0.; h.fglow = 0.; h.m = 0.;
  for (int i = ZERO; i < MARCH_STEPS; i++) {
    vec2 d = map(ro + rd * h.t);
    h.glow += exp(-max(d.x, 0.) * 16.) * .01;
    if (isFocused(d.y)) h.fglow += exp(-max(d.x, 0.) * 10.) * .016;
    if (d.x < .0005 * h.t + .0003) { h.ok = true; h.m = d.y; break; }
    h.t += d.x * .8;
    if (h.t > tmax) break;
  }
  return h;
}
void main() {
  vec2 frag = gl_FragCoord.xy + uOffset;
  vec2 uv = (2. * frag - uRes) / uRes.y;
  vec3 ro = uCamPos;
  vec3 ww = normalize(uCamTarget - ro), uu = normalize(cross(ww, vec3(0, 1, 0))), vv = cross(uu, ww);
  vec3 rd = normalize(uv.x * uu + uv.y * vv + uFov * ww);
  bool focusOn = uFocus > .5;
  vec3 col = vec3(0.);
  float alpha = 0., glow = 0., fglow = 0., mask = 0., any = 0., travelled = 0.;
  vec3 o = ro;
  for (int layer = ZERO; layer < 2; layer++) {
    HoloHit h = marchHolo(o, rd, 40. - travelled);
    glow += h.glow;
    fglow += h.fglow;
    if (!h.ok) break;
    vec3 p = o + rd * h.t;
    any = 1.;
    bool f = isFocused(h.m);
    if (f) mask = 1.;
    vec3 n = calcNormal(p);
    float fres = pow(1. - clamp(dot(n, -rd), 0., 1.), 2.);
    vec3 base; float emit, rough, rim, wrap;
    material(h.m, base, emit, rough, rim, wrap);
    float lit = clamp(dot(n, normalize(vec3(-.45, .8, .4))) * .5 + .5, 0., 1.);
    vec3 neon = mix(uNeonA, uNeonB, smoothstep(.15, .95, fres));
    // Neon at the edges, the part's own colour faintly across its face, its own light where it has some.
    vec3 hc = neon * (.3 + 1.05 * fres) + base * (.12 + .3 * lit) + base * min(emit, 1.) * .6;
    float a = clamp(.2 + .78 * fres + .22 * lit + min(emit, 1.) * .3, 0., 1.);
    if (focusOn) {
      if (f) { hc = mix(hc, vec3(1.), .2) * 1.55 + uNeonA * .25; a = min(1., a * 1.4 + .22); }
      else { hc *= .55; a *= .46; }
    }
    if (isShell(h.m)) a *= f ? .7 : .45;
    col += (1. - alpha) * hc * a;
    alpha += (1. - alpha) * a;
    if (!isShell(h.m) || alpha > .97) break;
    gSkipShell = true;
    travelled += h.t + .015;
    o = p + rd * .015;
  }
  gSkipShell = false;
  if (uMask > .5) { fragColor = vec4(mask, any, 0., 1.); return; }
  // A halo round the model, and a stronger one round the named parts, so thin ones (a nerve, a valve) read.
  float halo = glow * (focusOn ? .2 : .34);
  float fh = focusOn ? min(fglow, 1.2) : 0.;
  col += (uNeonA * .55 + uNeonB * .45) * halo * (1. - alpha) + mix(uNeonA, vec3(1.), .25) * fh * .9 * (1. - alpha * .6);
  alpha = clamp(alpha + (halo * .4 + fh * .6) * (1. - alpha), 0., 1.);
  fragColor = vec4(min(col, vec3(1.)), alpha);
}
`;function f(o,e){return`${r(e)}
${o.glsl}
${s(o)}
${c}
${n}`}function s(o){let e=[];return/vec3\s+palette\s*\(\s*int/.test(o.glsl)||e.push("vec3 palette(int i) { return vec3(.82, .9, .97); }"),/float\s+sceneDetail\s*\(/.test(o.glsl)||e.push("float sceneDetail(vec3 p, float m) { return 0.; }"),e.join(`
`)}export{h as a,u as b,f as c};
