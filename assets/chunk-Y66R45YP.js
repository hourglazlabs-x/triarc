import{a as Kt}from"./chunk-B74KHNJF.js";import{$ as Zt,A as xn,Aa as Cn,B as En,Ba as On,Ca as Dn,D as dt,Da as Bn,Ea as Un,Ga as Hn,H as qt,Ha as oo,I as Tn,Ja as $n,K as Rn,Ka as Wn,L as Mn,La as Uo,N as W,O as N,Oa as mt,P as $,Pa as no,Q as be,Qa as Gn,R as Et,Ra as zn,S as Ue,Sa as kn,T as ae,Ta as Xn,U as ve,Ua as Yn,V as Tt,W as Ne,Wa as jn,X as ft,Y as Qt,Z as Ee,_ as Ve,a as Io,aa as Ie,ba as Pe,ca as me,da as Jt,ea as ht,ga as ze,h as Co,ha as wn,i as mn,ia as Rt,ja as eo,ka as Sn,l as pn,la as Oo,ma as Do,na as Bo,oa as An,pa as Mt,qa as to,r as ie,ra as Fn,sa as Pn,ua as Ln,va as _n,wa as Nn,x as yn,xa as Vn,z as gn,za as In}from"./chunk-C5ODX625.js";import{a as bn,b as vn,c as zt,d as kt,e as Xt,f as Yt,i as jt}from"./chunk-WY76X7OO.js";import{b as he}from"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var Kn=1.3;function ro(n){let e=[.93,.3,1],o=[n[0]*.5+e[0]*.5,n[1]*.5+e[1]*.5,n[2]*.5+e[2]*.5],r=1/Math.max(o[0],o[1],o[2],.001);return{a:[.3,.92,1],b:[o[0]*r,o[1]*r,o[2]*r]}}function Oa(n){let e=zt({id:"N01",cam:[0,0,1],target:[0,0,0],glsl:""},n),o=e.indexOf(`
void main() {`);return e.slice(0,o)}var Da=`
uniform float uFocus;
int partOf(float m) { int k = int(m + .5); return k >= 20 && k < 100 ? (k - 20) % 20 : -1; }
bool isFocused(float m) { int p = partOf(m); int f = int(uFocus + .5); return p >= 0 && ((f >> p) & 1) == 1; }
`,Ba=`
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
`;function qn(n,e){return`${Oa(e)}
${n.glsl}
${Ua(n)}
${Da}
${Ba}`}function Ua(n){let e=[];return/vec3\s+palette\s*\(\s*int/.test(n.glsl)||e.push("vec3 palette(int i) { return vec3(.82, .9, .97); }"),/float\s+sceneDetail\s*\(/.test(n.glsl)||e.push("float sceneDetail(vec3 p, float m) { return 0.; }"),e.join(`
`)}var ot=Math.PI/180;function Ho(n,e){return[n[0]+e[0],n[1]+e[1],n[2]+e[2]]}function Le(n,e){return[n[0]-e[0],n[1]-e[1],n[2]-e[2]]}function Ha(n,e){return[n[0]*e,n[1]*e,n[2]*e]}function tt(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function ye(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function Zn(n){return Math.hypot(n[0],n[1],n[2])}function ee(n){let e=Zn(n)||1;return[n[0]/e,n[1]/e,n[2]/e]}function Ce(n,e,o){return n+(e-n)*o}function Oe(n,e,o){return Math.min(o,Math.max(e,n))}function wt(n,e){let o=(e-n)%(Math.PI*2);return o>Math.PI&&(o-=Math.PI*2),o<-Math.PI&&(o+=Math.PI*2),o}function St(n){let e=Oe(n,0,1);return e*e*e*(e*(e*6-15)+10)}function Jn(n,e=0){let o=Math.cos(e);return[Math.sin(n)*o,Math.sin(e),-Math.cos(n)*o]}function At(){let n=new Float32Array(16);return n[0]=n[5]=n[10]=n[15]=1,n}function er(n,e,o,r,t){let a=1/Math.tan(e/2);return n.fill(0),n[0]=a/o,n[5]=a,n[10]=(t+r)/(r-t),n[11]=-1,n[14]=2*t*r/(r-t),n}function tr(n,e,o,r,t,a,s){return n.fill(0),n[0]=2/(o-e),n[5]=2/(t-r),n[10]=-2/(s-a),n[12]=-(o+e)/(o-e),n[13]=-(t+r)/(t-r),n[14]=-(s+a)/(s-a),n[15]=1,n}function ao(n,e,o,r=[0,1,0]){let t=ee(Le(e,o)),a=ye(r,t);Zn(a)<1e-6&&(a=ye([0,0,1],t)),a=ee(a);let s=ye(t,a);return n[0]=a[0],n[1]=s[0],n[2]=t[0],n[3]=0,n[4]=a[1],n[5]=s[1],n[6]=t[1],n[7]=0,n[8]=a[2],n[9]=s[2],n[10]=t[2],n[11]=0,n[12]=-tt(a,e),n[13]=-tt(s,e),n[14]=-tt(t,e),n[15]=1,n}function Ft(n,e,o){let r=new Float32Array(16);for(let t=0;t<4;t++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=(e[i*4+a]??0)*(o[t*4+i]??0);r[t*4+a]=s}return n.set(r),n}function so(n,e){let o=b=>e[b]??0,r=o(0)*o(5)-o(1)*o(4),t=o(0)*o(6)-o(2)*o(4),a=o(0)*o(7)-o(3)*o(4),s=o(1)*o(6)-o(2)*o(5),i=o(1)*o(7)-o(3)*o(5),l=o(2)*o(7)-o(3)*o(6),c=o(8)*o(13)-o(9)*o(12),u=o(8)*o(14)-o(10)*o(12),f=o(8)*o(15)-o(11)*o(12),d=o(9)*o(14)-o(10)*o(13),h=o(9)*o(15)-o(11)*o(13),m=o(10)*o(15)-o(11)*o(14),p=r*m-t*h+a*d+s*f-i*u+l*c;return p?(p=1/p,n[0]=(o(5)*m-o(6)*h+o(7)*d)*p,n[1]=(o(2)*h-o(1)*m-o(3)*d)*p,n[2]=(o(13)*l-o(14)*i+o(15)*s)*p,n[3]=(o(10)*i-o(9)*l-o(11)*s)*p,n[4]=(o(6)*f-o(4)*m-o(7)*u)*p,n[5]=(o(0)*m-o(2)*f+o(3)*u)*p,n[6]=(o(14)*a-o(12)*l-o(15)*t)*p,n[7]=(o(8)*l-o(10)*a+o(11)*t)*p,n[8]=(o(4)*h-o(5)*f+o(7)*c)*p,n[9]=(o(1)*f-o(0)*h-o(3)*c)*p,n[10]=(o(12)*i-o(13)*a+o(15)*r)*p,n[11]=(o(9)*a-o(8)*i-o(11)*r)*p,n[12]=(o(5)*u-o(4)*d-o(6)*c)*p,n[13]=(o(0)*d-o(1)*u+o(2)*c)*p,n[14]=(o(13)*t-o(12)*s-o(14)*r)*p,n[15]=(o(8)*s-o(9)*t+o(10)*r)*p,n):null}function Qn(n,e){let o=(n[0]??0)*e[0]+(n[4]??0)*e[1]+(n[8]??0)*e[2]+(n[12]??0),r=(n[1]??0)*e[0]+(n[5]??0)*e[1]+(n[9]??0)*e[2]+(n[13]??0),t=(n[2]??0)*e[0]+(n[6]??0)*e[1]+(n[10]??0)*e[2]+(n[14]??0),a=(n[3]??0)*e[0]+(n[7]??0)*e[1]+(n[11]??0)*e[2]+(n[15]??0);return[o/a,r/a,t/a,a]}function or(n,e,o){let r=Qn(n,[e,o,-1]),t=Qn(n,[e,o,1]),a=[r[0],r[1],r[2]];return{origin:a,dir:ee(Le([t[0],t[1],t[2]],a))}}function nr(n,e,o,r){let t=-1/0,a=1/0;for(let s=0;s<3;s++){let i=n[s]??0,l=e[s]??0,c=o[s]??0,u=r[s]??0;if(Math.abs(l)<1e-12){if(i<c||i>u)return null;continue}let f=(c-i)/l,d=(u-i)/l;if(f>d&&([f,d]=[d,f]),t=Math.max(t,f),a=Math.min(a,d),t>a)return null}return a<0?null:t>=0?t:a}function io(n,e,o,r,t,a,s,i){let l=tt(e,r);if(Math.abs(l)<1e-9)return null;let c=tt(Le(o,n),r)/l;if(c<0)return null;let u=Ho(n,Ha(e,c)),f=Le(u,o);return Math.abs(tt(f,t))>s||Math.abs(tt(f,a))>i?null:c}var Pt=13;function X(n){let e=parseInt(n.replace("#",""),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var nt=class{data=[];get vertexCount(){return this.data.length/Pt}toArray(){return new Float32Array(this.data)}vertex(e,o,r,t){this.data.push(e[0],e[1],e[2],o[0],o[1],o[2],r[0],r[1],r[2],t.gloss,t.emit??0,t.ao??1,t.pattern??0)}tri(e,o,r,t,a,s){let i=s??ee(ye(Le(o,e),Le(r,e)));this.vertex(e,i,t,a),this.vertex(o,i,t,a),this.vertex(r,i,t,a)}quad(e,o,r,t,a,s,i){let l=i??ee(ye(Le(o,e),Le(t,e)));this.tri(e,o,r,a,s,l),this.tri(e,r,t,a,s,l)}box(e,o,r,t,a={}){let[s,i,l]=e,[c,u,f]=o;a.top!==!1&&this.quad([s,u,l],[c,u,l],[c,u,f],[s,u,f],r,t,[0,1,0]),a.bottom!==!1&&this.quad([s,i,f],[c,i,f],[c,i,l],[s,i,l],r,t,[0,-1,0]),this.quad([s,i,f],[s,u,f],[c,u,f],[c,i,f],r,t,[0,0,1]),this.quad([c,i,l],[c,u,l],[s,u,l],[s,i,l],r,t,[0,0,-1]),this.quad([c,i,f],[c,u,f],[c,u,l],[c,i,l],r,t,[1,0,0]),this.quad([s,i,l],[s,u,l],[s,u,f],[s,i,f],r,t,[-1,0,0])}wall(e,o,r,t,a,s,i){let l=Math.hypot(o[0]-e[0],o[1]-e[1]);if(l<1e-6)return;let c=(o[0]-e[0])/l,u=(o[1]-e[1])/l,f=-u*(a/2),d=c*(a/2),h=(b,v,T)=>[b[0]+f*v,T,b[1]+d*v],m=[-u,0,c],p=[u,0,-c];this.quad(h(e,1,r),h(e,1,t),h(o,1,t),h(o,1,r),s,i,m),this.quad(h(o,-1,r),h(o,-1,t),h(e,-1,t),h(e,-1,r),s,i,p),this.quad(h(e,-1,t),h(o,-1,t),h(o,1,t),h(e,1,t),s,i,[0,1,0]),this.quad(h(e,1,r),h(o,1,r),h(o,-1,r),h(e,-1,r),s,i,[0,-1,0]),this.quad(h(e,-1,r),h(e,-1,t),h(e,1,t),h(e,1,r),s,i,[-c,0,-u]),this.quad(h(o,1,r),h(o,1,t),h(o,-1,t),h(o,-1,r),s,i,[c,0,u])}pane(e,o,r,t,a,s){let i=Math.hypot(o[0]-e[0],o[1]-e[1]);if(i<1e-6)return;let l=[-(o[1]-e[1])/i,0,(o[0]-e[0])/i];this.quad([e[0],r,e[1]],[e[0],t,e[1]],[o[0],t,o[1]],[o[0],r,o[1]],a,s,l)}prism(e,o,r,t,a,s={}){let i=e.length,l=c=>e[(c%i+i)%i]??[0,0];if(s.top!==!1)for(let c=1;c<i-1;c++)this.tri([l(0)[0],r,l(0)[1]],[l(c)[0],r,l(c)[1]],[l(c+1)[0],r,l(c+1)[1]],t,a,[0,1,0]);if(s.bottom!==!1)for(let c=1;c<i-1;c++)this.tri([l(0)[0],o,l(0)[1]],[l(c+1)[0],o,l(c+1)[1]],[l(c)[0],o,l(c)[1]],t,a,[0,-1,0]);if(s.sides!==!1){let c=e.reduce((f,d)=>f+d[0],0)/i,u=e.reduce((f,d)=>f+d[1],0)/i;for(let f=0;f<i;f++){let d=l(f),h=l(f+1),m=ee([h[1]-d[1],0,-(h[0]-d[0])]),p=(d[0]+h[0])/2-c,b=(d[1]+h[1])/2-u;m[0]*p+m[2]*b<0&&(m=[-m[0],0,-m[2]]),this.quad([d[0],o,d[1]],[d[0],r,d[1]],[h[0],r,h[1]],[h[0],o,h[1]],t,a,m)}}}cylinder(e,o,r,t,a,s,i,l,c={}){let[u,f]=c.arc??[0,Math.PI*2],d=(m,p)=>[e+r*Math.sin(m),p,o+r*Math.cos(m)],h=m=>c.inward?[-Math.sin(m),0,-Math.cos(m)]:[Math.sin(m),0,Math.cos(m)];for(let m=0;m<s;m++){let p=u+(f-u)*m/s,b=u+(f-u)*(m+1)/s,v=d(p,t),T=d(p,a),S=d(b,a),P=d(b,t);this.vertex(v,h(p),i,l),this.vertex(T,h(p),i,l),this.vertex(S,h(b),i,l),this.vertex(v,h(p),i,l),this.vertex(S,h(b),i,l),this.vertex(P,h(b),i,l),c.caps!==!1&&!c.arc&&(this.tri([e,a,o],d(b,a),d(p,a),i,l,[0,1,0]),this.tri([e,t,o],d(p,t),d(b,t),i,l,[0,-1,0]))}}annulus(e,o,r,t,a,s,i,l){for(let c=0;c<s;c++){let u=c/s*Math.PI*2,f=(c+1)/s*Math.PI*2,d=(h,m)=>[e+h*Math.sin(m),a,o+h*Math.cos(m)];this.quad(d(r,u),d(t,u),d(t,f),d(r,f),i,l,[0,1,0])}}sphere(e,o,r,t,a,s=1){let i=Math.max(4,Math.round(r/2)),l=(c,u)=>{let f=c/i*Math.PI,d=u/r*Math.PI*2,h=[Math.sin(f)*Math.sin(d),Math.cos(f),Math.sin(f)*Math.cos(d)];return[[e[0]+h[0]*o,e[1]+h[1]*o*s,e[2]+h[2]*o],ee([h[0],h[1]/s,h[2]])]};for(let c=0;c<i;c++)for(let u=0;u<r;u++){let[f,d]=l(c,u),[h,m]=l(c+1,u),[p,b]=l(c+1,u+1),[v,T]=l(c,u+1);this.vertex(f,d,t,a),this.vertex(h,m,t,a),this.vertex(p,b,t,a),this.vertex(f,d,t,a),this.vertex(p,b,t,a),this.vertex(v,T,t,a)}}sweep(e,o,r,t,a,s=!1){let i=e.length;if(i<2)return;let l=b=>typeof o=="number"?o:o[Math.min(b,o.length-1)]??.02,c=b=>e[s?(b%i+i)%i:Math.max(0,Math.min(i-1,b))],u=b=>ee(Le(c(b+1),c(b-1))),f=u(0),d=Math.abs(f[1])<.9?[0,1,0]:[1,0,0],h=ee(ye(ye(f,d),f)),m=[];for(let b=0;b<i;b++){let v=u(b),T=h[0]*v[0]+h[1]*v[1]+h[2]*v[2];h=ee([h[0]-v[0]*T,h[1]-v[1]*T,h[2]-v[2]*T]);let S=ye(v,h),P=c(b),_=l(b),U=[];for(let G=0;G<r;G++){let x=G/r*Math.PI*2,y=Math.cos(x),g=Math.sin(x),M=[h[0]*y+S[0]*g,h[1]*y+S[1]*g,h[2]*y+S[2]*g];U.push([[P[0]+M[0]*_,P[1]+M[1]*_,P[2]+M[2]*_],M])}m.push(U)}let p=s?i:i-1;for(let b=0;b<p;b++){let v=m[b],T=m[(b+1)%i];if(!(!v||!T))for(let S=0;S<r;S++){let P=(S+1)%r,[_,U]=v[S],[G,x]=v[P],[y,g]=T[S],[M,L]=T[P];this.vertex(_,U,t,a),this.vertex(y,g,t,a),this.vertex(M,L,t,a),this.vertex(_,U,t,a),this.vertex(M,L,t,a),this.vertex(G,x,t,a)}}s||(this.disc(c(0),u(0),0,l(0),r,t,a),this.disc(c(i-1),u(i-1),0,l(i-1),r,t,a))}strip(e,o,r,t,a){let s=i=>Array.isArray(o[0])?o[i]:o;for(let i=1;i<e.length;i++){let l=e[i-1],c=e[i],u=s(i-1),f=s(i),d=r/2,h=[l[0]-u[0]*d,l[1]-u[1]*d,l[2]-u[2]*d],m=[l[0]+u[0]*d,l[1]+u[1]*d,l[2]+u[2]*d],p=[c[0]+f[0]*d,c[1]+f[1]*d,c[2]+f[2]*d],b=[c[0]-f[0]*d,c[1]-f[1]*d,c[2]-f[2]*d],v=ee(ye(Le(c,l),u));this.quad(h,m,p,b,t,a,v)}}disc(e,o,r,t,a,s,i){let l=ee(o),c=Math.abs(l[1])<.9?[0,1,0]:[1,0,0],u=ee(ye(c,l)),f=ye(l,u),d=(h,m)=>[e[0]+(u[0]*Math.cos(m)+f[0]*Math.sin(m))*h,e[1]+(u[1]*Math.cos(m)+f[1]*Math.sin(m))*h,e[2]+(u[2]*Math.cos(m)+f[2]*Math.sin(m))*h];for(let h=0;h<a;h++){let m=h/a*Math.PI*2,p=(h+1)/a*Math.PI*2;r<=0?this.tri(e,d(t,m),d(t,p),s,i,l):this.quad(d(r,m),d(t,m),d(t,p),d(r,p),s,i,l)}}pill(e,o,r,t,a,s,i,l){let c=Math.hypot(o[0]-e[0],o[1]-e[1]),u=(o[0]-e[0])/c,f=(o[1]-e[1])/c,d=Math.atan2(u,f);this.cylinder(e[0],e[1],r,t,a,s,i,l,{arc:[d+Math.PI/2,d+Math.PI*3/2]}),this.cylinder(o[0],o[1],r,t,a,s,i,l,{arc:[d-Math.PI/2,d+Math.PI/2]});let h=-f*r,m=u*r,p=[[e[0]+h,e[1]+m],[o[0]+h,o[1]+m],[o[0]-h,o[1]-m],[e[0]-h,e[1]-m]];this.prism(p,t,a,i,l,{bottom:!1});for(let[b,v]of[[e,d+Math.PI/2],[o,d-Math.PI/2]])for(let T=0;T<s;T++){let S=v+Math.PI*T/s,P=v+Math.PI*(T+1)/s;this.tri([b[0],a,b[1]],[b[0]+r*Math.sin(P),a,b[1]+r*Math.cos(P)],[b[0]+r*Math.sin(S),a,b[1]+r*Math.cos(S)],i,l,[0,1,0])}}};function ue(n,e,o,r,t,a=0){let s=[Math.sin(o),0,-Math.cos(o)],i=[-Math.cos(o),0,-Math.sin(o)];return{centre:[n[0]+s[0]*a,e,n[1]+s[2]*a],u:i,v:[0,1,0],hu:r/2,hv:t/2}}function $o(n,e,o,r,t){let a=[Math.sin(o),0,-Math.cos(o)],s=[Math.cos(o),0,Math.sin(o)];return{centre:[n[0],e,n[1]],u:s,v:a,hu:r/2,hv:t/2}}function rt(n){return ee(ye(n.u,n.v))}function lo(n,e=!1){let o=(a,s)=>[n.centre[0]+n.u[0]*n.hu*a+n.v[0]*n.hv*s,n.centre[1]+n.u[1]*n.hu*a+n.v[1]*n.hv*s,n.centre[2]+n.u[2]*n.hu*a+n.v[2]*n.hv*s],r=(a,s)=>[e?(1-a)/2:(a+1)/2,(1-s)/2],t=[];for(let[a,s]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])t.push(...o(a,s),...r(a,s));return new Float32Array(t)}var Me=1.78/489,$a=510;function we(n,e,o=0){return[(n-120)*Me,($a-e)*Me,o]}var fo=6,Z=(n,e,o,r,t=0)=>({x:n,y:e,w:o,d:r,z:t}),ar=[Z(120,108,16,.052),Z(120,118,34,.08),Z(120,128,48,.1),Z(120,144,49,.113),Z(120,165,45,.118),Z(120,186,43,.115),Z(120,206,40,.108),Z(120,228,37,.1),Z(120,250,36.5,.1),Z(120,270,40,.104),Z(120,290,45,.11),Z(120,306,45,.106),Z(120,318,37,.09),Z(120,326,18,.05)],Wa=[Z(120,84,11,.048),Z(120,112,12.5,.052)],Go=[Z(70,132,13,.05),Z(66,152,12,.045),Z(63,180,10.5,.04),Z(60,206,9.5,.036),Z(57,228,8.6,.032),Z(54,252,8.6,.032),Z(51,276,7.8,.029),Z(48,296,6.8,.025),Z(46,308,6.2,.022)],zo=[Z(98,296,22,.085),Z(96,326,20,.08),Z(95,356,17,.07),Z(95,384,13.5,.056),Z(95,402,12.5,.05),Z(96,426,12.5,.052),Z(96,450,11,.046),Z(97,470,9,.036),Z(98,488,8,.03)];function Ga(n,e){let o=[],r=a=>n[Math.max(0,Math.min(n.length-1,a))],t=(a,s,i,l,c)=>.5*(2*s+(-a+i)*c+(2*a-5*s+4*i-l)*c*c+(-a+3*s-3*i+l)*c*c*c);for(let a=0;a<n.length-1;a++){let[s,i,l,c]=[r(a-1),r(a),r(a+1),r(a+2)];for(let u=0;u<e;u++){let f=u/e;o.push({x:t(s.x,i.x,l.x,c.x,f),y:t(s.y,i.y,l.y,c.y,f),z:t(s.z,i.z,l.z,c.z,f),w:Math.max(.5,t(s.w,i.w,l.w,c.w,f)),d:Math.max(.004,t(s.d,i.d,l.d,c.d,f))})}}return o.push(r(n.length-1)),o}function co(n,e,o=20,r=!0){let t=Ga(e,3),a=t.map(s=>Array.from({length:o+1},(i,l)=>{let c=l/o*Math.PI*2,u=we(s.x,s.y,s.z);return[u[0]+Math.sin(c)*s.w*Me,u[1],u[2]+Math.cos(c)*s.d]}));if(r){let s=t[0],i=t[t.length-1],l=(c,u)=>[.7,.35,0].map(f=>Array.from({length:o+1},(d,h)=>{let m=h/o*Math.PI*2,p=we(c.x,c.y,c.z),b=Math.sqrt(1-f*f)*Math.min(c.w*Me,c.d)*.8*u;return[p[0]+Math.sin(m)*c.w*Me*f,p[1]+b,p[2]+Math.cos(m)*c.d*f]}));a.unshift(...l(s,1).reverse()),a.push(...l(i,-1))}za(n,a)}function za(n,e){let o=e.length,r=e[0]?.length??0,t=(s,i)=>e[Math.max(0,Math.min(o-1,s))]?.[(i%(r-1)+(r-1))%(r-1)]??[0,0,0],a=(s,i)=>{let l=uo(t(s,i+1),t(s,i-1)),c=uo(t(s+1,i),t(s-1,i)),u=ko(c,l);if(Math.hypot(u[0],u[1],u[2])<1e-12){let p=rr(e[s===0?1:o-2]??[]);return ee(uo(t(s,i),p))}let f=ee(u),d=rr(e[Math.max(0,Math.min(o-1,s))]??[]),h=t(s,i),m=[h[0]-d[0],0,h[2]-d[2]];return f[0]*m[0]+f[2]*m[2]<0?[-f[0],-f[1],-f[2]]:f};for(let s=0;s<o-1;s++)for(let i=0;i<r-1;i++){let l=[[s,i],[s+1,i],[s+1,i+1],[s,i],[s+1,i+1],[s,i+1]];for(let[c,u]of l)n.push(...t(c,u),...a(c,u))}}function rr(n){let e=Math.max(1,n.length-1),o=0,r=0,t=0;for(let a=0;a<e;a++){let s=n[a]??[0,0,0];o+=s[0],r+=s[1],t+=s[2]}return[o/e,r/e,t/e]}var uo=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],ko=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]];function Lt(n,e,o,r=0,t=18){let a=Math.max(6,Math.round(t/2)),s=Math.cos(r),i=Math.sin(r),l=(c,u)=>{let f=c/a*Math.PI,d=u/t*Math.PI*2,h=[Math.sin(f)*Math.sin(d),Math.cos(f),Math.sin(f)*Math.cos(d)],m=h[0]*o[0],p=h[1]*o[1],b=[e[0]+m*s-p*i,e[1]+m*i+p*s,e[2]+h[2]*o[2]],v=h[0]/o[0],T=h[1]/o[1],S=ee([v*s-T*i,v*i+T*s,h[2]/o[2]]);return[b,S]};for(let c=0;c<a;c++)for(let u=0;u<t;u++){let f=[[c,u],[c+1,u],[c+1,u+1],[c,u],[c+1,u+1],[c,u+1]];for(let[d,h]of f){let[m,p]=l(d,h);n.push(...m,...p)}}}function sr(){let n=[];Lt(n,we(120,55,.004),[27*Me,35*Me,.104],0,24),co(n,Wa,18,!1),co(n,ar,28);for(let e of[1,-1]){let o=a=>({...a,x:e>0?a.x:240-a.x});co(n,Go.map(o),16),co(n,zo.map(o),18);let r=e>0?41:199;Lt(n,we(r,330,.006),[7.5*Me,17*Me,.024],e>0?.08:-.08,14);let t=e>0?96:144;Lt(n,we(t,501,.045),[9.5*Me,7.5*Me,.11],0,14)}return new Float32Array(n)}function ir(n=.6,e=2.3,o=48){let r=[];for(let t=0;t<o;t++){let a=t/o*Math.PI*2,s=(t+1)/o*Math.PI*2,i=(l,c)=>[Math.sin(l)*n,c,Math.cos(l)*n,Math.sin(l),0,Math.cos(l)];r.push(...i(a,0),...i(s,0),...i(s,e),...i(a,0),...i(s,e),...i(a,e))}return new Float32Array(r)}var lr={brain:0,hypothalamus:-.005,brainstem:-.025,"visual-cortex":-.07,eyes:.086,ears:0,nose:.104,mouth:.09,thyroid:.035,thymus:.07,heart:.035,lungs:0,liver:.02,gallbladder:.055,stomach:.04,spleen:-.035,pancreas:-.02,kidneys:-.062,adrenals:-.062,"small-intestine":.04,"large-intestine":.035,bladder:.04,"spinal-cord":-.088,"sympathetic-chain":-.072,vagus:-.01,"arm-muscles":0,"thigh-muscles":0,"belly-fat":.07,"bone-marrow":0,"lymph-nodes":.03,scalp:0,fingernails:.02,toenails:.12,forearm:0,ankle:0,hand:.01,body:0};function Xo(n,e){let o=[],r=[],t=0,a=0,s=n.match(/[MLHVQCSZmlhvqcsz]|-?\d*\.?\d+(?:e-?\d+)?/g)??[],i=0,l="M",c=()=>Number(s[i++]);for(;i<s.length;){let u=s[i]??"";if(/[A-Za-z]/.test(u)&&(l=u,i++,l==="Z"||l==="z")){r[0]&&r.push(r[0]);continue}if(l==="M")r.length>1&&o.push(r),t=c(),a=c(),r=[we(t,a,e)],l="L";else if(l==="L")t=c(),a=c(),r.push(we(t,a,e));else if(l==="H")t=c(),r.push(we(t,a,e));else if(l==="V")a=c(),r.push(we(t,a,e));else if(l==="Q"){let f=c(),d=c(),h=c(),m=c();for(let p=1;p<=6;p++){let b=p/6,v=1-b;r.push(we(v*v*t+2*v*b*f+b*b*h,v*v*a+2*v*b*d+b*b*m,e))}t=h,a=m}else{let f=l==="c"||l==="C"?6:l==="s"||l==="S"||l==="q"?4:2;for(let d=0;d<f&&i<s.length&&!/[A-Za-z]/.test(s[i]??"");d++)i++;r.length>1&&o.push(r),r=[]}}return r.length>1&&o.push(r),o}function ka(n,e){let o=lr[n];if("e"in e){let[c,u,f,d,h=0]=e.e,m=Math.max(.006,Math.min(.09,Math.min(f,d)*Me*.9));return{organs:[{centre:we(c,u,o),radii:[f*Me,d*Me,m],rotZ:-h*Math.PI/180}],strands:[]}}if(e.line!==void 0)return e.line<1?{organs:[],strands:[]}:{organs:[],strands:Xo(e.d,o).map(c=>({points:c,radius:Math.max(.004,e.line*Me*.5)}))};let r=Xo(e.d,o).flat();if(r.length===0)return{organs:[],strands:[]};let t=r.map(c=>c[0]),a=r.map(c=>c[1]),s=[(Math.min(...t)+Math.max(...t))/2,(Math.min(...a)+Math.max(...a))/2,o],i=Math.max(.006,(Math.max(...t)-Math.min(...t))/2),l=Math.max(.006,(Math.max(...a)-Math.min(...a))/2);return{organs:[{centre:s,radii:[i,l,Math.min(i,l)],rotZ:0}],strands:[]}}var Xa={vessels:[{key:"arteries",color:dt.artery,z:.012},{key:"veins",color:dt.vein,z:.004}],nerves:[{key:"nerves",color:dt.nerve,z:-.012}],lymphatics:[{key:"lymphatics",color:dt.lymph,z:.026}],autonomic:[{key:"autonomic",color:dt.nerve,z:-.07}]};function Ya(){let n=11,e=()=>(n=n*1664525+1013904223>>>0,n/4294967296),o=[[ar,140],[Go,30],[Go.map(t=>({...t,x:240-t.x})),30],[zo,40],[zo.map(t=>({...t,x:240-t.x})),40]],r=[we(120,55,0)];for(let t=0;t<24;t++)r.push(we(120+(e()-.5)*40,55+(e()-.5)*52,(e()-.5)*.12));for(let[t,a]of o)for(let s=0;s<a;s++){let i=Math.floor(e()*(t.length-1)),l=t[i],c=t[i+1],u=e(),f=(l.w+(c.w-l.w)*u)*.8,d=(l.d+(c.d-l.d)*u)*.8,h=e()*Math.PI*2,m=Math.sqrt(e());r.push(we(l.x+(c.x-l.x)*u+Math.sin(h)*f*m,l.y+(c.y-l.y)*u,Math.cos(h)*d*m))}return r}var Wo=null;function cr(n){let e=ie.node(n),o=e?.content?.bodyMap;if(!e||!o)return null;let r=qt(o),t=new Set(r.map(u=>u.region)),a=u=>{let f=[],d=[];for(let h of u)for(let m of gn[h].shapes){let p=ka(h,m);f.push(...p.organs),d.push(...p.strands)}return{organs:f,strands:d}},s=o.overlays??[],i=[];for(let u of s)for(let f of Xa[u]??[])for(let d of xn[f.key])for(let h of Xo(d,f.z))i.push({points:h,color:X(f.color)});let l=X(he[e.tier]),c=Tn(r,!1).filter(u=>u.region!=="body").map(u=>({at:we(u.x,u.y,lr[u.region]),r:Math.max(.035,u.r*Me*.85),rows:u.rows}));return s.includes("cells")&&!Wo&&(Wo=Ya()),{node:n,tint:l,lit:a(t),ghosts:a(yn.filter(u=>!t.has(u))),lines:i,dots:s.includes("cells")?Wo??[]:[],beads:s.includes("autonomic")?En.map(([u,f])=>we(u,f,-.07)):[],targets:c,rows:r,map:o,whole:o.scope==="systemic"||t.has("body"),skin:s.includes("skin")}}function ur(n,e,o,r,t,a){let i=(b,v)=>[o.centre[0]+o.u[0]*b+o.n[0]*.012,v,o.centre[2]+o.u[2]*b+o.n[2]*.012],l=o.centre[1]+o.hv,c=i(r*(o.hu+.12),0),u=b=>Math.hypot(b[0]-c[0],b[2]-c[2]),f=n.targets.map(b=>e(b.at)),d=[];n.rows.forEach((b,v)=>{let T=null;if(n.targets.forEach((S,P)=>{let _=f[P];_&&S.rows.includes(b.index)&&(!T||u(_)<u(T))&&(T=_)}),!T){let S=e([.31,1.25,0]),P=e([-.31,1.25,0]);T=u(S)<u(P)?S:P}d.push({row:b.index,start:T,end:l-(t[v]??0)*2*o.hv})});let h=d.filter(b=>b.end<=b.start[1]).sort((b,v)=>v.start[1]-b.start[1]),m=d.filter(b=>b.end>b.start[1]).sort((b,v)=>b.start[1]-v.start[1]),p=[];for(let b of[h,m])b.forEach((v,T)=>{let S=r*(o.hu+.1+T*.05);p.push({row:v.row,points:[v.start,i(S,v.start[1]),i(S,v.end),i(r*(o.hu-a),v.end)]})});return p.sort((b,v)=>b.row-v.row)}function Yo(n){let e=[];for(let o of n.organs)Lt(e,o.centre,o.radii,o.rotZ,16);for(let o of n.strands)for(let r=1;r<o.points.length;r++){let t=o.points[r-1],a=o.points[r];ja(e,t,a,o.radius)}return new Float32Array(e)}function ja(n,e,o,r){let t=uo(o,e);if(Math.hypot(t[0],t[1],t[2])<1e-6)return;let s=ee(t),i=Math.abs(s[2])<.9?[0,0,1]:[1,0,0],l=ee(ko(i,s)),c=ko(s,l),u=8,f=(d,h)=>{let m=[l[0]*Math.cos(h)+c[0]*Math.sin(h),l[1]*Math.cos(h)+c[1]*Math.sin(h),l[2]*Math.cos(h)+c[2]*Math.sin(h)];return[[d[0]+m[0]*r,d[1]+m[1]*r,d[2]+m[2]*r],m]};for(let d=0;d<u;d++){let h=d/u*Math.PI*2,m=(d+1)/u*Math.PI*2,[p,b]=f(e,h),[v,T]=f(e,m),[S,P]=f(o,h),[_,U]=f(o,m);n.push(...p,...b,...S,...P,..._,...U,...p,...b,..._,...U,...v,...T)}Lt(n,o,[r,r,r],0,8)}var J=(n,e,o,r,t,a,s,i,l)=>({node:n,mood:e,wall:o,wallFinish:r,floor:t,stele:a,accent:s,installation:i,shape:l}),Ka=[J("N01","noir","#121820","plaster","graphite","blackGlass","#7BE0C3",{motif:"helix"},"Double helix"),J("N02","gallery","#F2F1EC","plaster","pale","marble","#5DBB7A",{motif:"cluster",variant:"cells"},"Cluster"),J("N03","chroma","#4A2618","plaster","graphite","bronze","#FFB45C",{motif:"ribbons",variant:"folds"},"Folded ribbons"),J("N04","warm","#6A4A33","walnut","terrazzo","marble","#9BD7A8",{motif:"chain",variant:"fold"},"Folded chain"),J("N05","gallery","#E6E9EB","plaster","pale","steel","#7FB8D8",{motif:"rings",variant:"gyro"},"Gyroscope"),J("N06","chroma","#0E3634","plaster","graphite","bronze","#F4C455",{motif:"ribbons",variant:"waves"},"Waves"),J("N07","chroma","#45121A","plaster","graphite","blackGlass","#FF5C63",{motif:"loops",variant:"eight"},"Figure of eight"),J("N08","warm","#B48A60","plaster","terrazzo","travertine","#F2A04D",{motif:"wheel"},"Wheel"),J("N09","gallery","#F0EEE8","plaster","pale","marble","#4FC09A",{motif:"lattice",variant:"weave"},"Weave"),J("N10","noir","#1A2026","plaster","graphite","steel","#93E0B0",{motif:"strata",variant:"steps"},"Steps"),J("N11","chroma","#13233D","plaster","graphite","bronze","#FFC86E",{motif:"lattice",variant:"network"},"Network"),J("N12","gallery","#F1F3F4","plaster","pale","marble","#4AA8E0",{motif:"cluster",variant:"guard"},"Cluster"),J("N13","chroma","#561A10","plaster","graphite","graphite","#FF7B47",{motif:"rings",variant:"ripples"},"Ripples"),J("N14","noir","#13181D","plaster","graphite","blackGlass","#77C6FF",{motif:"chain",variant:"twin"},"Twin chains"),J("N15","warm","#7B4E51","plaster","terrazzo","bronze","#FF9EBE",{motif:"ribbons",variant:"waves"},"Waves"),J("N16","chroma","#3C0E14","plaster","graphite","blackGlass","#FF4B58",{motif:"rings",variant:"pulse"},"Pulse rings"),J("N17","gallery","#EDF2F5","plaster","pale","marble","#78C3EE",{motif:"branches",variant:"down"},"Branching tree"),J("N18","warm","#5E3F2C","walnut","terrazzo","bronze","#E9A55E",{motif:"lattice",variant:"hex"},"Hexagons"),J("N19","chroma","#0F2940","plaster","graphite","steel","#6CD2FF",{motif:"loops",variant:"hairpin"},"Hairpin loops"),J("N20","warm","#535A37","plaster","terrazzo","travertine","#C9E27D",{motif:"loops",variant:"coil"},"Coil"),J("N21","noir","#16122A","plaster","graphite","blackGlass","#A99CFF",{motif:"lattice",variant:"network"},"Network"),J("N22","noir","#121619","plaster","graphite","steel","#F4DF78",{motif:"branches",variant:"side"},"Branches"),J("N23","gallery","#ECEDF1","plaster","pale","marble","#8C84FF",{motif:"lattice",variant:"grid"},"Grid"),J("N24","chroma","#3B1F40","plaster","graphite","bronze","#FFA06F",{motif:"ribbons",variant:"waves"},"Waves"),J("N25","noir","#0D0E12","plaster","graphite","blackGlass","#63DEFF",{motif:"rings",variant:"lens"},"Lens"),J("N26","warm","#C7A486","plaster","pale","travertine","#F3B48C",{motif:"strata",variant:"sheets"},"Layers"),J("N27","warm","#5A3B28","walnut","terrazzo","bronze","#E3C38B",{motif:"strands"},"Strands"),J("N28","gallery","#F6F4EF","plaster","pale","marble","#9BD5FF",{motif:"strata",variant:"arch"},"Arch"),J("N29","warm","#D8B9AE","plaster","pale","travertine","#D7A1C6",{motif:"strata",variant:"plates"},"Plates"),J("N30","noir","#141226","plaster","graphite","blackGlass","#C49AFF",{motif:"rings",variant:"ripples"},"Ripples"),J("N31","warm","#D9D0C1","travertine","pale","bronze","#E8C27C",{motif:"spiral",variant:"spiral"},"Spiral"),J("N32","chroma","#1B2936","plaster","graphite","steel","#7ED4FF",{motif:"lattice",variant:"struts"},"Struts"),J("N33","gallery","#EDEFEB","plaster","pale","marble","#B38BFF",{motif:"strata",variant:"steps"},"Steps"),J("N34","noir","#0B0C10","plaster","graphite","blackGlass","#D79BFF",{motif:"spiral",variant:"orbit"},"Orbits")],qa=new Map(Ka.map(n=>[n.node,n]));function ke(n){let e=qa.get(n);if(!e)throw new Error(`No exhibit for ${n}`);return e}var mo={gallery:1,warm:.88,chroma:.6,noir:.42},pt=.3;function fr(n){return n==="bronze"||n==="steel"}function Ko(n){return n==="gallery"||n==="warm"}function jo(n){let e=Number.parseInt(n.slice(1),16),o=r=>{let t=r/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4};return .2126*o(e>>16&255)+.7152*o(e>>8&255)+.0722*o(e&255)}function Qa(n){let e=jo(n);return 1.05/(e+.05)>=(e+.05)/.0585?"light":"ink"}function Za(n,e){let[o,r]=[jo(n),jo(e)].sort((t,a)=>a-t);return(o+.05)/(r+.05)}var dr=n=>[1,3,5].map(e=>Number.parseInt(n.slice(e,e+2),16));function ho(n,e,o){let r=dr(n),t=dr(e);return`#${r.map((s,i)=>Math.round(Math.min(255,Math.max(0,s*o+(t[i]??0)*(1-o))))).map(s=>s.toString(16).padStart(2,"0")).join("").toUpperCase()}`}var Ja=4.5;function Qe(n,e,o){for(let r=0;r<=40;r++){let t=ho(o,n,r/40);if(Za(t,e)>=Ja)return t}return o}function hr(n,e){if(Qa(n)==="light"){let r="#F4F2EE";return{text:r,text2:Qe(ho(r,n,.78),n,r),text3:Qe(ho(r,n,.56),n,r),accent:Qe(e,n,"#FFFFFF"),sourced:Qe(e,n,"#FFFFFF")}}let o="#0C1824";return{text:o,text2:Qe("#3A4A5A",n,o),text3:Qe("#5A6A7A",n,o),accent:Qe(ho("#000000",e,.38),n,"#000000"),sourced:Qe("#0672A8",n,"#000000")}}var po={blackGlass:"#0B0D10",bronze:"#2B241D",steel:"#23272C",travertine:"#DED6C8",marble:"#E9E6E0",graphite:"#2E3136",terrazzo:"#D8D2C8"};var es=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyQ","KeyE","ShiftLeft","ShiftRight"]);function ts(n){return n instanceof HTMLElement&&(n.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(n.tagName))}var bo=class{keys=new Set;downAt=new Map;held=new Map;lastConsume=performance.now();dragX=0;dragY=0;zoom=0;pointers=new Map;press=null;pinch=0;el;h;off=[];constructor(e,o){this.el=e,this.h=o;let r=(s,i,l,c)=>{s.addEventListener(i,l,c),this.off.push(()=>s.removeEventListener(i,l,c))},t=(s,i)=>{window.addEventListener(s,i),this.off.push(()=>window.removeEventListener(s,i))};r(e,"pointerdown",s=>{s.button!==0&&s.pointerType==="mouse"||(e.setPointerCapture?.(s.pointerId),this.pointers.set(s.pointerId,{x:s.clientX,y:s.clientY}),this.pointers.size===1&&(this.press={x:s.clientX,y:s.clientY,moved:!1}),this.pointers.size===2&&(this.press=null,this.pinch=this.pinchDistance()),this.h.poke())}),r(e,"pointermove",s=>{let i=this.pointers.get(s.pointerId);if(!i){s.pointerType==="mouse"&&this.h.hover(s.clientX,s.clientY);return}let l=s.clientX-i.x,c=s.clientY-i.y;if(i.x=s.clientX,i.y=s.clientY,this.pointers.size===2){let u=this.pinchDistance();this.pinch>0&&u>0&&(this.zoom+=(this.pinch-u)*2.2),this.pinch=u}else this.press&&(!this.press.moved&&Math.hypot(s.clientX-this.press.x,s.clientY-this.press.y)>5&&(this.press.moved=!0),this.press.moved&&(this.dragX+=l,this.dragY+=c));this.h.poke()});let a=s=>{let i=this.press;this.pointers.delete(s.pointerId),this.pointers.size===0&&(i&&!i.moved&&s.type==="pointerup"&&this.h.click(s.clientX,s.clientY),this.press=null,this.pinch=0)};r(e,"pointerup",a),r(e,"pointercancel",a),r(e,"pointerleave",s=>{s.pointerType==="mouse"&&!this.pointers.has(s.pointerId)&&this.h.hover(-1,-1)}),r(e,"wheel",s=>{s.preventDefault(),this.zoom+=s.deltaMode===1?s.deltaY*32:s.deltaY,this.h.poke()},{passive:!1}),t("keydown",s=>{if(s.defaultPrevented||s.metaKey||s.ctrlKey||s.altKey||ts(s.target)||this.h.blocked())return;let i=s.target===e||s.target===document.body||s.target===document.documentElement;if(s.key==="Escape"&&i){s.preventDefault(),this.h.back();return}if(s.key==="Enter"&&s.target===e){s.preventDefault(),this.h.activate();return}!i||!es.has(s.code)||(s.preventDefault(),this.keys.has(s.code)||this.downAt.set(s.code,performance.now()),this.keys.add(s.code),this.h.poke())}),t("keyup",s=>{if(!this.keys.has(s.code))return;let i=performance.now(),l=Math.max(this.downAt.get(s.code)??i,this.lastConsume);this.held.set(s.code,(this.held.get(s.code)??0)+Math.max(0,i-l)),this.keys.delete(s.code),this.downAt.delete(s.code),this.h.poke()}),t("blur",()=>{this.keys.clear(),this.downAt.clear(),this.held.clear()})}pinchDistance(){let[e,o]=[...this.pointers.values()];return e&&o?Math.hypot(e.x-o.x,e.y-o.y):0}get busy(){return this.keys.size>0||this.held.size>0||this.pointers.size>0}consume(){let e=performance.now(),o=Math.max(1,e-this.lastConsume),r=new Map;for(let s of new Set([...this.keys,...this.held.keys()])){let i=this.held.get(s)??0;this.keys.has(s)&&(i+=e-Math.max(this.downAt.get(s)??e,this.lastConsume)),r.set(s,Math.min(1,i/o))}this.held.clear(),this.lastConsume=e;let t=s=>r.get(s)??0,a={forward:t("KeyW")+t("ArrowUp")-t("KeyS")-t("ArrowDown"),strafe:t("KeyD")-t("KeyA"),turn:t("ArrowRight")+t("KeyE")-t("ArrowLeft")-t("KeyQ"),run:t("ShiftLeft")+t("ShiftRight")>.5,lookX:this.dragX,lookY:this.dragY,zoom:this.zoom};return this.dragX=0,this.dragY=0,this.zoom=0,a}dispose(){for(let e of this.off)e();this.keys.clear(),this.held.clear(),this.el}};var qo=384,Qo=288,vo=class{gl;fbo;texture;tri;parallel;compiled=new Map;loading=new Set;order=[];showing=null;lastDraw=0;constructor(e){this.gl=e,this.parallel=e.getExtension("KHR_parallel_shader_compile");let o=e.createTexture();e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,qo,Qo,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.texture=o,this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.tri=e.createVertexArray(),e.bindVertexArray(this.tri);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}prepare(e){let o=this.compiled.get(e);return o?(!o.ready&&!o.failed&&this.poll(o),o.ready):(this.loading.has(e)||(this.loading.add(e),Kt(e).then(r=>{this.loading.delete(e),this.compile(e,r)}).catch(()=>this.loading.delete(e))),!1)}compile(e,o){let r=this.gl,t=ie.node(e)?.tier??"T01",a=(u,f)=>{let d=r.createShader(u);return d&&(r.shaderSource(d,f),r.compileShader(d)),d},s=a(r.VERTEX_SHADER,kt),i=a(r.FRAGMENT_SHADER,zt(o,1)),l=r.createProgram();if(!s||!i||!l)return;r.attachShader(l,s),r.attachShader(l,i),r.bindAttribLocation(l,0,"p"),r.linkProgram(l),r.deleteShader(s),r.deleteShader(i);let c={scene:o,tier:t,program:l,loc:new Map,ready:!1,failed:!1};for(this.compiled.set(e,c),this.order.push(e);this.order.length>3;){let u=this.order.findIndex(h=>h!==this.showing&&h!==e);if(u<0)break;let[f]=this.order.splice(u,1),d=f?this.compiled.get(f):void 0;f&&d&&(r.deleteProgram(d.program),this.compiled.delete(f))}this.poll(c)}poll(e){let o=this.gl;if(!(this.parallel&&!o.getProgramParameter(e.program,this.parallel.COMPLETION_STATUS_KHR))){if(!o.getProgramParameter(e.program,o.LINK_STATUS)){e.failed=!0;return}for(let r of["uRes","uOffset","uCamPos","uCamTarget","uFov","uAccent","uFloor","uRing","uTime","uZero"])e.loc.set(r,o.getUniformLocation(e.program,r));e.ready=!0}}render(e,o,r){let t=this.compiled.get(e);if(!t?.ready)return!1;let a=performance.now();if(this.showing===e&&a-this.lastDraw<r)return!1;this.lastDraw=a;let s=this.gl,i=Xt(t.scene),l=Yt(t.scene),c;if(l.az){let d=(l.az[0]+l.az[1])/2,h=(l.az[1]-l.az[0])/2;c={...i,az:d+Math.sin(o*.15)*h*.6}}else c={...i,az:i.az+o*6};let u=t.scene.poster??1.5,f=jt(t.scene,t.tier,c,u+o);s.bindFramebuffer(s.FRAMEBUFFER,this.fbo),s.viewport(0,0,qo,Qo),s.disable(s.DEPTH_TEST),s.disable(s.BLEND),s.useProgram(t.program),s.uniform2f(t.loc.get("uRes")??null,qo,Qo),s.uniform2f(t.loc.get("uOffset")??null,0,0),s.uniform1i(t.loc.get("uZero")??null,0);for(let[d,h]of Object.entries(f)){let m=t.loc.get(d)??null;h.length===3?s.uniform3f(m,h[0]??0,h[1]??0,h[2]??0):s.uniform1f(m,h[0]??0)}return s.bindVertexArray(this.tri),s.drawArrays(s.TRIANGLES,0,3),s.bindVertexArray(null),s.bindFramebuffer(s.FRAMEBUFFER,null),s.enable(s.DEPTH_TEST),this.showing=e,!0}failed(e){return this.compiled.get(e)?.failed===!0}dispose(){let e=this.gl;for(let o of this.compiled.values())e.deleteProgram(o.program);e.deleteFramebuffer(this.fbo),e.deleteTexture(this.texture)}};var bt=320,yo=class{gl;fbo;texture;tri;parallel;compiled=null;loading=null;stills=new Map;base;onLoad;constructor(e,o,r){this.gl=e,this.base=o,this.onLoad=r,this.parallel=e.getExtension("KHR_parallel_shader_compile");let t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,bt,bt,0,e.RGBA,e.UNSIGNED_BYTE,null);for(let[s,i]of[[e.TEXTURE_MIN_FILTER,e.LINEAR],[e.TEXTURE_MAG_FILTER,e.LINEAR],[e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE],[e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE]])e.texParameteri(e.TEXTURE_2D,s,i);this.texture=t,this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.tri=e.createVertexArray(),e.bindVertexArray(this.tri);let a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}prepare(e){let o=this.compiled;return o?.node===e?(!o.ready&&!o.failed&&this.poll(o),o.ready):(this.loading===e||(this.loading=e,Kt(e).then(r=>{this.loading===e&&(this.loading=null,this.compile(e,r))}).catch(()=>{this.loading===e&&(this.loading=null)})),!1)}compile(e,o){let r=this.gl;this.compiled&&r.deleteProgram(this.compiled.program),this.compiled=null;let t=(l,c)=>{let u=r.createShader(l);return u&&(r.shaderSource(u,c),r.compileShader(u)),u},a=t(r.VERTEX_SHADER,kt),s=t(r.FRAGMENT_SHADER,qn(o,1)),i=r.createProgram();!a||!s||!i||(r.attachShader(i,a),r.attachShader(i,s),r.bindAttribLocation(i,0,"p"),r.linkProgram(i),r.deleteShader(a),r.deleteShader(s),this.compiled={node:e,scene:o,tier:ie.node(e)?.tier??"T01",program:i,loc:new Map,ready:!1,failed:!1},this.poll(this.compiled))}poll(e){let o=this.gl;if(!(this.parallel&&!o.getProgramParameter(e.program,this.parallel.COMPLETION_STATUS_KHR))){if(!o.getProgramParameter(e.program,o.LINK_STATUS)){e.failed=!0;return}for(let r of["uRes","uOffset","uCamPos","uCamTarget","uFov","uAccent","uFloor","uRing","uTime","uZero","uFocus","uMask","uNeonA","uNeonB"])e.loc.set(r,o.getUniformLocation(e.program,r));e.ready=!0}}render(e,o){let r=this.compiled;if(!r||r.node!==e||!r.ready)return!1;let t=this.gl,a=Xt(r.scene),s=Yt(r.scene),i=a.az+o.az+Math.sin(o.time*.18)*16;s.az&&(i=Math.min(s.az[1],Math.max(s.az[0],i)));let l=jt(r.scene,r.tier,{...a,az:i},(r.scene.poster??1.5)+o.time),c=ro(vn(r.scene,r.tier));t.bindFramebuffer(t.FRAMEBUFFER,this.fbo),t.viewport(0,0,bt,bt),t.disable(t.DEPTH_TEST),t.disable(t.BLEND),t.useProgram(r.program);let u=(f,d)=>{let h=r.loc.get(f)??null;d.length===3?t.uniform3f(h,d[0]??0,d[1]??0,d[2]??0):d.length===2?t.uniform2f(h,d[0]??0,d[1]??0):t.uniform1f(h,d[0]??0)};u("uRes",[bt,bt]),u("uOffset",[0,0]),t.uniform1i(r.loc.get("uZero")??null,0);for(let[f,d]of Object.entries(l))u(f,f==="uFov"?[(d[0]??2.4)*Kn]:d);return u("uFocus",[oo(o.parts)]),u("uMask",[0]),u("uNeonA",c.a),u("uNeonB",c.b),t.bindVertexArray(this.tri),t.drawArrays(t.TRIANGLES,0,3),t.bindVertexArray(null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.enable(t.DEPTH_TEST),!0}still(e,o){let r=Uo(e,o)??Uo(e,[]);if(!r)return null;let t=`${this.base}${$n(e)}`,a=Wn(e),s=[r.x/a.w,1-(r.y+r.h)/a.h,r.w/a.w,r.h/a.h];if(this.stills.has(t)){let l=this.stills.get(t);return l?{tex:l,rect:s}:null}this.stills.set(t,null);let i=new Image;return i.decoding="async",i.onload=()=>{let l=this.gl,c=l.createTexture();if(l.bindTexture(l.TEXTURE_2D,c),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,!0),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,i),l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,!1),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),this.stills.size>4){let[u]=this.stills;u&&(u[1]&&l.deleteTexture(u[1]),this.stills.delete(u[0]))}this.stills.set(t,c),this.onLoad()},i.src=t,null}dispose(){let e=this.gl;this.compiled&&e.deleteProgram(this.compiled.program);for(let o of this.stills.values())o&&e.deleteTexture(o);e.deleteFramebuffer(this.fbo),e.deleteTexture(this.texture)}};var Ze=n=>n.toFixed(4),K=`#version 300 es
#ifndef Q
#define Q 0
#endif
precision highp float;
precision highp int;
precision highp sampler2DShadow;
`,Te=`
uniform float uDirect;
uniform float uExposure;
vec3 toLinear(vec3 c) { return pow(max(c, vec3(0.0)), vec3(2.2)); }
// The filmic curve (ACES, Narkowicz's fit): invertible, so screen colours can be written exactly.
vec3 tone(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
vec3 invTone(vec3 y) {
  y = clamp(y, 0.0, 0.985);
  vec3 a = 2.43 * y - 2.51;
  vec3 b = 0.59 * y - 0.03;
  vec3 c = 0.14 * y;
  return (-b - sqrt(max(b * b - 4.0 * a * c, vec3(0.0)))) / (2.0 * a);
}
vec3 display(vec3 hdr) { return pow(tone(hdr * uExposure), vec3(1.0 / 2.2)); }
// Scene light: linear HDR for the composite, or display colour on the basic tier.
vec3 finish(vec3 hdr) { return uDirect > 0.5 ? display(hdr) : hdr; }
// A colour designed for the screen: on the HDR tier, the light value the composite turns back into it.
vec3 uiOut(vec3 srgb) { return uDirect > 0.5 ? srgb : invTone(toLinear(min(srgb, vec3(0.95)))) / uExposure; }
`,_t=`
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 u = fract(p);
  u = u * u * (3.0 - 2.0 * u);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x), mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) { return vnoise(p) * 0.5 + vnoise(p * 2.03 + 11.7) * 0.3 + vnoise(p * 4.11 + 3.9) * 0.2; }
`,Zo=`
uniform sampler2D uSky;
uniform float uSkyLod;
vec2 skyUv(vec3 d) { return vec2(atan(d.x, -d.z) * 0.15915494 + 0.5, acos(clamp(d.y, -1.0, 1.0)) * 0.31830989); }
vec3 skyAt(vec3 d, float rough) { return textureLod(uSky, skyUv(d), rough * uSkyLod).rgb; }
`,Jo=`
uniform vec3 uFog;
uniform vec3 uFogDisplay;
uniform float uFogDensity;
// Aerial haze, denser near the ground: distance fades toward the silver horizon.
float hazeK(vec3 p, float dist) { return 1.0 - exp(-dist * uFogDensity * (0.35 + 0.65 * exp(-max(p.y, 0.0) * 0.015))); }
vec3 haze(vec3 col, vec3 p, float dist) { return mix(col, uFog, hazeK(p, dist)); }
`,mr=`
const float HALF_ = ${Ze(W)};
const float RING_ = ${Ze(N)};
const float ATRIUM_ = ${Ze($)};
const float FLOOR_H_ = ${Ze(Ue)};
const float SLAB_ = ${Ze(ae)};
const float ROOF_ = ${Ze(Ue*ft)};
const float CINEMA_ = ${Ze(pt)};
uniform vec3 uInterior;
uniform float uPanel;
float insideAt(vec3 p) {
  float m = max(abs(p.x), abs(p.z));
  return (1.0 - smoothstep(HALF_ - 0.5, HALF_ + 0.3, m)) * step(-0.05, p.y) * (1.0 - step(ROOF_ - 0.3, p.y));
}
float coffer(vec2 q, float blur) {
  vec2 g = abs(fract(q / 3.0) - 0.5) * 3.0;
  return 1.0 - smoothstep(0.8 - blur, 0.8 + blur, max(g.x, g.y));
}
// \`room\` is the share of the interior's ambient light where p is (1 in public areas; less in a store's dark
// rooms and its cinema), carried by the surface's vertices.
vec3 interiorEnv(vec3 p, vec3 R, float rough, float room) {
  float lv = floor((p.y + 0.05) / FLOOR_H_);
  float y0 = lv * FLOOR_H_;
  float y1 = y0 + FLOOR_H_ - SLAB_;
  vec2 sr = sign(R.xz);
  vec2 tf2 = (HALF_ - p.xz * sr) / max(abs(R.xz), vec2(1e-4));
  float tFacade = min(tf2.x, tf2.y);
  float tUp = R.y > 1e-3 ? (y1 - p.y) / R.y : 1e9;
  float tDown = R.y < -1e-3 ? (y0 - p.y) / R.y : 1e9;
  vec3 res;
  // A dark room (a noir or chroma store, or a cinema) is closed but for its own windows: it reflects its dark
  // ceiling and walls, and the sky only through the facade it faces (a cinema's windows are curtained). This
  // model has no walls, so without it the atrium's skylight and the walkway's ceilings would show through.
  float here = room;
  bool darkRoom = here < 0.8;
  if (tFacade < min(tUp, tDown)) {
    res = here < CINEMA_ + 0.01 || (darkRoom && dot(R.xz, p.xz) < 0.0) ? uInterior * 0.03 : skyAt(R, rough) * 0.8;
  } else if (tUp < tDown) {
    vec2 q = p.xz + R.xz * tUp;
    float m = max(abs(q.x), abs(q.y));
    if (darkRoom) res = uInterior * 0.03;
    else if (m < ATRIUM_) res = skyAt(vec3(R.x * 0.3, 1.0, R.z * 0.3), rough) * 1.2;
    else if (m < RING_ && lv < ${Ze(ft-1)}) res = uInterior * 0.22;
    else {
      float blur = 0.03 + rough * 1.6 + tUp * rough * 0.25;
      res = mix(uInterior * 0.32, vec3(uPanel), coffer(q, blur) * (1.0 - smoothstep(0.5, 0.9, rough) * 0.6));
    }
  } else {
    res = uInterior * 0.5 * here;
  }
  return mix(res, uInterior * 0.75 * here, smoothstep(0.55, 1.0, rough));
}
`,os=`
uniform highp sampler2DShadow uShadow;
uniform mat4 uShadowMat;
uniform float uShadowOn;
uniform float uShadowTexel;
uniform float uShadowBias;
float sunVisibility(vec3 p, vec3 n) {
  if (uShadowOn < 0.5) return 1.0;
  vec4 s = uShadowMat * vec4(p + n * 0.04, 1.0);
  vec3 c = s.xyz / s.w * 0.5 + 0.5;
  if (c.x <= 0.0 || c.x >= 1.0 || c.y <= 0.0 || c.y >= 1.0 || c.z >= 1.0) return 1.0;
  float z = c.z - uShadowBias;
#if Q == 1
  float t = uShadowTexel * 1.4;
  float v = texture(uShadow, vec3(c.xy, z)) * 0.28;
  v += texture(uShadow, vec3(c.xy + vec2(t, t), z)) * 0.18;
  v += texture(uShadow, vec3(c.xy + vec2(-t, t), z)) * 0.18;
  v += texture(uShadow, vec3(c.xy + vec2(t, -t), z)) * 0.18;
  v += texture(uShadow, vec3(c.xy + vec2(-t, -t), z)) * 0.18;
  return v;
#else
  return texture(uShadow, vec3(c.xy, z));
#endif
}
`,pr=`
uniform sampler2D uMirror;
uniform float uMirrorOn;
uniform float uMirrorY;
uniform vec2 uViewport;
vec3 mirrorAt(vec2 off, float rough) {
  vec2 uv = gl_FragCoord.xy / uViewport + off;
  float r = 0.002 + rough * 0.03;
  vec3 m = texture(uMirror, uv).rgb * 0.36;
  m += texture(uMirror, uv + vec2(r, 0.0)).rgb * 0.16;
  m += texture(uMirror, uv - vec2(r, 0.0)).rgb * 0.16;
  m += texture(uMirror, uv + vec2(0.0, r)).rgb * 0.16;
  m += texture(uMirror, uv - vec2(0.0, r)).rgb * 0.16;
  return m;
}
`,br=`
const vec3 SKY_HORIZON = vec3(0.78, 0.84, 0.90);
float h1(float i) { return fract(sin(i * 127.1 + 311.7) * 43758.5453); }
// Periodic 1D gradient noise around the horizon: smooth slopes, no plateaus at the lattice.
float grad1(float x, float period) {
  float i = floor(x);
  float f = fract(x);
  float g0 = h1(mod(i, period)) * 2.0 - 1.0;
  float g1 = h1(mod(i + 1.0, period)) * 2.0 - 1.0;
  float u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(g0 * f, g1 * (f - 1.0), u) * 2.0;
}
// A ridged multifractal profile: sharp peaks and ridges, smoother valleys.
float ridgeline(float az, float cells, float seed) {
  float x = az / 6.2831853 + 0.5;
  float s = 0.0;
  float a = 0.6;
  float w = 1.0;
  float period = cells;
  for (int i = 0; i < 7; i++) {
    float n = 1.0 - abs(grad1(x * period + seed, period));
    n *= n;
    s += a * n * w;
    w = clamp(n * 1.3, 0.0, 1.0);
    period *= 2.0;
    a *= 0.5;
  }
  return s;
}
vec2 g2(vec2 p) {
  float a = hash12(p) * 6.2831853;
  return vec2(cos(a), sin(a));
}
// 2D gradient noise, about -1\u20261.
float gnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(g2(i), f);
  float b = dot(g2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(g2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(g2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y) * 1.6;
}
float reliefAt(vec2 q) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    float n = 1.0 - abs(gnoise(q));
    s += a * n * n;
    q = q * 2.03 + vec2(7.1, 3.3);
    a *= 0.5;
  }
  return s;
}
// The faces' relief, continuous across the back of the panorama (phi = \xB1pi).
float relief(vec2 q, float phi, float k) {
  float w = smoothstep(2.7, 3.14159265, phi);
  float r = reliefAt(q);
  return w > 0.0 ? mix(r, reliefAt(q - vec2(6.2831853 * k, 0.0)), w) : r;
}
// The mountains' colour and coverage in direction d (phi its azimuth, h its elevation); aa is the edge width.
vec4 mountains(float phi, float h, vec3 sunDir, float aa) {
  if (h < -0.03 || h > 0.2) return vec4(0.0);
  // Two ranges of mountains: a far one, high, pale and snowed; a nearer one, lower and darker. Each has a
  // ridgeline (the silhouette) and faces (2D relief lit from the sun's side), gullies and a snowline.
  float sunAz = atan(sunDir.x, -sunDir.z);
  float side = sin(sunAz - phi);
  float back = cos(sunAz - phi);
  // Higher to the north and west, behind the building from the usual view; lower toward the entrance.
  float envelope = 0.55 + 0.45 * smoothstep(-0.2, 1.0, -cos(phi));
  float farR = 0.01 + 0.135 * envelope * ridgeline(phi, 7.0, 3.0);
  float nearR = 0.004 + 0.065 * envelope * ridgeline(phi, 13.0, 11.0);
  vec4 res = vec4(0.0);
  if (h > -0.02 && h < farR + aa) {
    vec2 q = vec2(phi * 6.0, h * 36.0);
    float r0 = relief(q, phi, 6.0);
    float rx = relief(q + vec2(0.15, 0.0), phi + 0.15 / 6.0, 6.0);
    float ry = relief(q + vec2(0.0, 0.15), phi, 6.0);
    float lit = 0.66 - 0.2 * back + ((rx - r0) * side * 3.0 - (ry - r0) * 2.0);
    float depth = (farR - h) / max(farR, 1e-3);
    float snow = smoothstep(0.42, 0.3, depth + (r0 - 0.5) * 0.35);
    vec3 rock = vec3(0.20, 0.23, 0.28) * (0.85 + r0 * 0.35);
    vec3 m = mix(rock, vec3(0.97, 0.98, 1.0), snow) * clamp(lit, 0.35, 1.3);
    res = vec4(mix(m, SKY_HORIZON, 0.44 - smoothstep(0.0, 0.15, h) * 0.12), smoothstep(farR + aa, farR - aa, h));
  }
  if (h > -0.02 && h < nearR + aa) {
    vec2 q = vec2(phi * 11.0, h * 70.0);
    float r0 = relief(q + 31.0, phi, 11.0);
    float rx = relief(q + 31.0 + vec2(0.15, 0.0), phi + 0.15 / 11.0, 11.0);
    float ry = relief(q + 31.0 + vec2(0.0, 0.15), phi, 11.0);
    float lit = 0.58 - 0.22 * back + ((rx - r0) * side * 3.0 - (ry - r0) * 2.0);
    float depth = (nearR - h) / max(nearR, 1e-3);
    float snow = smoothstep(0.3, 0.18, depth + (r0 - 0.5) * 0.3) * 0.9;
    vec3 rock = vec3(0.13, 0.15, 0.18) * (0.85 + r0 * 0.35);
    vec3 m = mix(rock, vec3(0.92, 0.94, 0.97), snow) * clamp(lit, 0.3, 1.25);
    res = mix(res, vec4(mix(m, SKY_HORIZON, 0.26), 1.0), smoothstep(nearR + aa, nearR - aa, h));
  }
  return res;
}
`,go=`${K}
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec3 aColor;
layout(location = 3) in vec4 aParams;
uniform mat4 uViewProj;
uniform vec3 uOffset;
out vec3 vPos;
out vec3 vNormal;
out vec3 vColor;
out vec4 vParams;
void main() {
  vPos = aPos + uOffset;
  vNormal = aNormal;
  vColor = aColor;
  vParams = aParams;
  gl_Position = uViewProj * vec4(vPos, 1.0);
}
`,en=`${K}
in vec3 vPos;
in vec3 vNormal;
in vec3 vColor;
in vec4 vParams;
uniform vec3 uCamPos;
uniform vec3 uSun;
uniform vec3 uSunColor;
uniform vec3 uSkyAmb;
uniform vec3 uGroundAmb;
uniform float uEmitGain;
uniform float uClip;
uniform float uClipY;
uniform float uTime;
${Te}
${_t}
${Zo}
${Jo}
${mr}
${os}
${pr}
out vec4 frag;
void main() {
#ifdef CLIP
  // The mirror pass only: below the mirror's plane nothing is drawn. Kept out of the main pass, where a
  // possible discard would cost the early depth test and shade every hidden surface.
  if (uClip > 0.5 && vPos.y < uClipY - 0.02) discard;
#endif
  vec3 N = normalize(vNormal);
  vec3 V = normalize(uCamPos - vPos);
  if (dot(N, V) < 0.0) N = -N;
  int id = int(vParams.w + 0.5);
  float rough = clamp(1.0 - vParams.x, 0.04, 1.0);
  float emit = vParams.y;
  float ao = vParams.z;
  vec3 albedo = toLinear(vColor);
  float metal = 0.0;
  bool level = abs(N.y) > 0.7;
  vec2 st = level ? vPos.xz : vec2(abs(N.x) > abs(N.z) ? vPos.z : vPos.x, vPos.y);
  float dist = length(uCamPos - vPos);
  float fadeFar = smoothstep(16.0, 48.0, dist);
  vec2 mirrorOff = vec2(0.0);

  if (id == 1) {
    // Polished pale stone: 1.5 m slabs, hairline joints, faint veins, a little tone from slab to slab.
    vec2 cell = floor(st / 1.5);
    albedo *= 1.0 + (hash12(cell) - 0.5) * 0.05;
#if Q == 1
    float v = fbm(st * 0.3 + vec2(fbm(st * 0.6 + cell * 3.1), 0.0) * 0.9);
    albedo *= 1.0 - (1.0 - smoothstep(0.0, 0.012, abs(v - 0.52))) * 0.04 * (1.0 - fadeFar);
    albedo *= 0.97 + fbm(st * 2.3 + cell * 1.7) * 0.06;
#endif
    vec2 d = abs(fract(st / 1.5) - 0.5) * 1.5;
    float joint = (1.0 - smoothstep(0.002, 0.007, 0.75 - max(d.x, d.y))) * (1.0 - fadeFar);
    albedo *= 1.0 - joint * 0.4;
    rough = mix(rough, 0.6, joint);
  } else if (id == 2) {
    // Stone panels: 1.2 m \xD7 0.6 m in running bond, shadow joints, soft bands and fine pores.
    vec2 q = st / vec2(1.2, 0.6);
    q.x += floor(q.y) * 0.5;
    vec2 d = abs(fract(q) - 0.5) * vec2(1.2, 0.6);
    float joint = (1.0 - smoothstep(0.003, 0.01, min(0.6 - d.x, 0.3 - d.y))) * (1.0 - fadeFar);
    albedo *= 1.0 - joint * 0.5;
#if Q == 1
    float band = vnoise(vec2(st.x * 0.35, st.y * 7.0));
    float pores = smoothstep(0.78, 0.92, vnoise(st * 34.0)) * (1.0 - fadeFar);
    albedo *= (0.965 + band * 0.05) * (1.0 - pores * 0.16);
#endif
  } else if (id == 3 || id == 9) {
    // Brushed metal, titanium or bronze: fine streaks along its length.
    metal = 1.0;
#if Q == 1
    float streak = vnoise(level ? vec2(st.x * 1.5, st.y * 150.0) : vec2(st.x * 150.0, st.y * 1.5));
    rough = clamp(rough + (streak - 0.5) * 0.1, 0.05, 1.0);
    albedo *= 0.95 + streak * 0.08;
#endif
  } else if (id == 4) {
    metal = 1.0;
  } else if (id == 5) {
    // Polished graphite stone: granite speckle, slab joints on floors.
#if Q == 1
    albedo *= 0.82 + 0.4 * smoothstep(0.6, 0.92, vnoise(st * 48.0));
#endif
    if (level) {
      vec2 d = abs(fract(st / 1.2) - 0.5) * 1.2;
      albedo *= 1.0 - (1.0 - smoothstep(0.002, 0.007, 0.6 - max(d.x, d.y))) * (1.0 - fadeFar) * 0.5;
    }
  } else if (id == 6) {
    // Still water over a black basin: a slow, faint swell.
#if Q == 1
    vec2 w = vec2(vnoise(vPos.xz * 0.3 + uTime * 0.05), vnoise(vPos.xz * 0.3 - uTime * 0.04 + 5.0)) - 0.5;
    w += (vec2(vnoise(vPos.xz * 1.7 + uTime * 0.11), vnoise(vPos.xz * 1.7 + 9.0 - uTime * 0.09)) - 0.5) * 0.4;
    N = normalize(N + vec3(w.x, 0.0, w.y) * 0.05);
    mirrorOff = w * 0.012;
#endif
  } else if (id == 7) {
#if Q == 1
    albedo *= 0.9 + vnoise(st * 70.0) * 0.18;
#endif
  } else if (id == 8) {
#if Q == 1
    albedo *= 0.88 + vnoise(st * 110.0) * 0.22;
#endif
  } else if (id == 11) {
    albedo *= 0.7 + vnoise(vPos.xz * 7.0 + vPos.y * 5.0) * 0.55;
  } else if (id == 12) {
    // Paving: 2 m slabs of pale stone, honed.
    vec2 cell = floor(st / 2.0);
    albedo *= 1.0 + (hash12(cell) - 0.5) * 0.07;
    vec2 d = abs(fract(st / 2.0) - 0.5) * 2.0;
    albedo *= 1.0 - (1.0 - smoothstep(0.004, 0.012, 1.0 - max(d.x, d.y))) * (1.0 - fadeFar) * 0.3;
  } else if (id == 14) {
    albedo *= 0.75 + vnoise(vec2(st.x * 26.0, vPos.y * 2.5)) * 0.45;
  } else if (id == 16) {
    // Walnut veneer: vertical panels 0.6 m wide with fine joints, and a flowing grain.
    float panel = floor(st.x / 0.6);
    albedo *= 1.0 + (hash12(vec2(panel, 3.0)) - 0.5) * 0.1;
#if Q == 1
    vec2 q = vec2(st.x * 10.0 + hash12(vec2(panel, 1.0)) * 40.0, st.y * 0.5);
    float grain = vnoise(vec2(q.x + vnoise(q * vec2(0.6, 1.4)) * 2.5, q.y));
    albedo *= 0.84 + grain * 0.3;
#endif
    float jx = abs(fract(st.x / 0.6) - 0.5) * 0.6;
    albedo *= 1.0 - (1.0 - smoothstep(0.002, 0.006, 0.3 - jx)) * (1.0 - fadeFar) * 0.6;
  } else if (id == 17) {
    // Terrazzo: chips of grey and dark stone in a pale matrix, polished.
    vec2 c = floor(st * 16.0);
    vec2 f = fract(st * 16.0) - 0.5 - (vec2(hash12(c + 1.3), hash12(c + 2.7)) - 0.5) * 0.4;
    float chip = step(0.66, hash12(c)) * (1.0 - smoothstep(0.16, 0.27, length(f))) * (1.0 - fadeFar);
    vec3 tone = mix(vec3(0.78, 0.76, 0.72), vec3(0.5, 0.5, 0.52), hash12(c + 5.0));
    albedo = mix(albedo, albedo * tone, chip);
  } else if (id == 15) {
    // Terrain: the plateau's rock and alpine grass, in broad patches that fade into the haze.
    float n = fbm(vPos.xz * 0.004) * 0.6 + fbm(vPos.xz * 0.03 + 7.0) * 0.4;
    albedo *= 0.7 + n * 0.6;
    albedo = mix(albedo, albedo * vec3(0.9, 1.04, 0.9), smoothstep(0.45, 0.7, fbm(vPos.xz * 0.012 + 3.0)));
  }

  vec3 F0 = mix(vec3(0.04), albedo, metal);
  vec3 diff = albedo * (1.0 - metal);
  float NdV = max(dot(N, V), 1e-3);
  float inside = insideAt(vPos);

  // The sun, where the shadow map lets it through.
  float NdL = dot(N, uSun);
  float vis = NdL > 0.0 ? sunVisibility(vPos, N) : 0.0;
  vec3 H = normalize(uSun + V);
  float NdH = max(dot(N, H), 0.0);
  float a = rough * rough;
  vec3 Fs = F0 + (1.0 - F0) * pow(1.0 - max(dot(V, H), 0.0), 5.0);
#if Q == 1
  float a2 = a * a;
  float dd = NdH * NdH * (a2 - 1.0) + 1.0;
  float D = a2 / (3.14159265 * dd * dd);
  float k = (rough + 1.0) * (rough + 1.0) / 8.0;
  float G = 1.0 / ((max(NdL, 0.0) * (1.0 - k) + k) * (NdV * (1.0 - k) + k));
  vec3 sunSpec = D * G * Fs * 0.25;
#else
  float shin = 2.0 / max(a * a, 1e-4) - 2.0;
  vec3 sunSpec = Fs * pow(NdH, shin) * (shin + 8.0) / 25.13;
#endif
  // Indoors the sun comes through coated glass, which passes a little over half of it.
  vec3 sun = uSunColor * max(NdL, 0.0) * vis * mix(1.0, 0.55, inside);

  // Ambient light: sky and ground outside, the luminous ceilings inside (more on what faces up).
  float up = N.y * 0.5 + 0.5;
  vec3 amb = mix(mix(uGroundAmb, uSkyAmb, up), uInterior * mix(0.42, 1.0, up), inside);

  // Reflections: the sky outside, the interior inside, and the mirror for the floor underfoot.
  vec3 R = reflect(-V, N);
  vec3 env = mix(skyAt(R, rough), interiorEnv(vPos, R, rough, ao), inside);
#if Q == 1
  if (uMirrorOn > 0.5 && N.y > 0.9 && abs(vPos.y - uMirrorY) < 0.12) env = mix(mirrorAt(mirrorOff, rough), env, smoothstep(0.1, 0.5, rough));
#endif
  vec3 Fr = F0 + (max(vec3(1.0 - rough), F0) - F0) * pow(1.0 - NdV, 5.0);
  vec3 col = diff * (amb * ao + sun) * (1.0 - Fr * 0.6) + sunSpec * sun + env * Fr * mix(1.0, ao, 0.6);
  col += albedo * emit * uEmitGain;
  col = haze(col, vPos, dist * (1.0 - inside * 0.9));
  frag = vec4(finish(col), 1.0);
}
`,vr=en.replace(`#version 300 es
`,`#version 300 es
#define CLIP 1
`),yr=`${K}
in vec3 vPos;
in vec3 vNormal;
in vec3 vColor;
in vec4 vParams;
uniform vec3 uCamPos;
uniform vec3 uSun;
uniform vec3 uSunColor;
uniform vec3 uSkyAmb;
uniform float uFade;
uniform float uClip;
uniform float uClipY;
${Te}
${_t}
${Zo}
${Jo}
${mr}
${pr}
out vec4 frag;
void main() {
  if (uClip > 0.5 && vPos.y < uClipY - 0.02) discard;
  vec3 N = normalize(vNormal);
  vec3 V = normalize(uCamPos - vPos);
  if (dot(N, V) < 0.0) N = -N;
  // Insulated panes are never quite flat: each sits a touch off true and bows a little, so neighbouring panes
  // catch slightly different parts of the sky, the tell of a real curtain wall. One pane per fin bay and floor
  // (fins every 2.5 m from the corners); the joints hide behind the fins and the stone bands.
  if (vParams.y > 0.001 && abs(N.y) < 0.5) {
    float u = (abs(N.z) > abs(N.x) ? vPos.x : vPos.z) + HALF_;
    vec2 cell = vec2(floor(u / 2.5), floor(vPos.y / FLOOR_H_));
    vec2 f = vec2(fract(u / 2.5), clamp(fract(vPos.y / FLOOR_H_) * FLOOR_H_ / (FLOOR_H_ - SLAB_), 0.0, 1.0)) - 0.5;
    vec3 tilt = vec3(hash12(cell + 11.3), hash12(cell * 1.7 + 4.1), hash12(cell * 2.3 + 7.9)) - 0.5;
    float bow = tilt.z * 0.09;
    vec3 side = normalize(cross(vec3(0.0, 1.0, 0.0), N));
    N = normalize(N + side * (tilt.x * 0.05 + f.x * bow) + vec3(0.0, 1.0, 0.0) * (tilt.y * 0.08 + f.y * bow));
  }
  float cosT = max(dot(N, V), 0.0);
  // The second parameter is a reflective coating (the facade's glass). Seen from the bright side outside it
  // is a strong mirror over a dark body, as coated curtain walls are by day; from inside, a quarter of the
  // coating and a clear body, so the view out stays open. Interior glass has none.
  float viewerOut = (1.0 - insideAt(uCamPos)) * step(0.001, vParams.y);
  float F0 = 0.04 + vParams.y * mix(0.25, 1.0, viewerOut);
  float F = F0 + (1.0 - F0) * pow(1.0 - cosT, 5.0);
  vec3 R = reflect(-V, N);
  // Glass reflects the viewer's side (the interior seen from inside, the sky from outside), and its body
  // glows with the light of the far side.
  float nearIn = insideAt(vPos + V * 0.4);
  float farIn = insideAt(vPos - V * 0.4);
  vec3 env = mix(skyAt(R, 0.0), interiorEnv(vPos, R, 0.02, 1.0), nearIn);
#if Q == 1
  if (uMirrorOn > 0.5 && N.y > 0.9 && abs(vPos.y - uMirrorY) < 0.12) env = mirrorAt(vec2(0.0), 0.02);
#endif
  vec3 H = normalize(uSun + V);
  float spec = pow(max(dot(N, H), 0.0), 1400.0) * 90.0 * max(dot(N, uSun), 0.0);
  // Low-iron glass: nearly colourless, a faint green-blue body that thickens toward grazing angles. By day
  // the interior is far dimmer than the sky, so from outside the coated facade shows mostly its reflection:
  // the body absorbs (about a fifth of the interior shows through head-on) and scatters little light of its own.
  float base = vParams.x * mix(1.0, 3.6, viewerOut);
  float body = base * (0.55 + 0.45 * (1.0 - cosT));
  vec3 tint = toLinear(vColor) * mix(uSkyAmb, uInterior, farIn) * 0.55 * mix(1.0, 0.2, viewerOut);
  float alpha = clamp(body + F * (1.0 - body), 0.0, 0.96) * uFade;
  vec3 col = (env * F + tint * body + uSunColor * spec) * uFade;
  col = haze(col, vPos, length(uCamPos - vPos) * (1.0 - nearIn));
  frag = vec4(finish(col), alpha);
}
`,qe=`${K}
layout(location = 0) in vec2 aPos;
out vec2 vNdc;
void main() {
  vNdc = aPos;
  gl_Position = vec4(aPos, 1.0, 1.0);
}
`,gr=`${K}
in vec2 vNdc;
uniform mat4 uInvViewProj;
uniform vec3 uCamPos;
uniform vec3 uSun;
uniform vec3 uSunColor;
${Te}
${Zo}
#if Q == 1
${_t}
${br}
#endif
out vec4 frag;
void main() {
  vec4 p = uInvViewProj * vec4(vNdc, 1.0, 1.0);
  vec3 d = normalize(p.xyz / p.w - uCamPos);
  vec3 col = skyAt(d, 0.0);
#if Q == 1
  // The mountains drawn per pixel: crisp at any size (the texture holds them for reflections).
  vec4 mt = mountains(atan(d.x, -d.z), d.y, uSun, max(fwidth(d.y), 1e-4) * 1.2);
  col = mix(col, mt.rgb, mt.a);
#endif
  float s = max(dot(d, uSun), 0.0);
  col += uSunColor * (pow(s, 5000.0) * 60.0 + pow(s, 500.0) * 0.5);
  frag = vec4(finish(col), 1.0);
}
`,xr=`${K}
in vec2 vNdc;
uniform vec3 uSun;
${_t}
${br}
out vec4 frag;
void main() {
  vec2 uv = vNdc * 0.5 + 0.5;
  float phi = (uv.x - 0.5) * 6.2831853;
  // Texel row 0 is the zenith, matching skyUv(): v = acos(d.y) / pi.
  float th = uv.y * 3.14159265;
  vec3 d = vec3(sin(th) * sin(phi), cos(th), -sin(th) * cos(phi));
  float h = d.y;
  vec3 zenith = vec3(0.085, 0.17, 0.36);
  vec3 mid = vec3(0.30, 0.44, 0.64);
  vec3 horizon = SKY_HORIZON;
  float e = max(h, 0.0);
  vec3 col = mix(mix(horizon, mid, smoothstep(0.0, 0.22, e)), zenith, smoothstep(0.18, 0.95, e));
  float s = max(dot(d, uSun), 0.0);
  col += vec3(1.0, 0.93, 0.82) * (pow(s, 6.0) * 0.22 + pow(s, 48.0) * 0.7 + pow(s, 700.0) * 5.0);
  if (h > 0.0) {
    // Thin, high cloud: long soft streaks, very low contrast.
    vec2 q = d.xz / (h + 0.12);
    float c = fbm(q * vec2(0.5, 2.0) + vec2(2.0, 7.0));
    float cover = smoothstep(0.6, 0.9, c) * smoothstep(0.05, 0.35, h) * 0.22;
    col = mix(col, vec3(0.98, 0.99, 1.02) + vec3(1.0, 0.9, 0.78) * pow(s, 5.0) * 0.4, cover);
  } else {
    col = mix(horizon * 0.95, vec3(0.48, 0.48, 0.47), smoothstep(0.0, 0.3, -h));
  }
  vec4 mt = mountains(phi, h, uSun, 0.0016);
  col = mix(col, mt.rgb, mt.a);
  frag = vec4(col, 1.0);
}
`,Er=`${K}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
void main() {
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,Tr=`${K}
void main() {}
`,Rr=`${K}
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec2 aUv;
uniform mat4 uViewProj;
out vec2 vUv;
out vec3 vPos;
void main() {
  vUv = aUv;
  vPos = aPos;
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,Mr=`${K}
in vec2 vUv;
in vec3 vPos;
uniform sampler2D uTex;
uniform int uMode;
uniform vec3 uCamPos;
uniform vec4 uPlaceholder;
uniform float uHasTex;
uniform float uFlip;
uniform float uClip;
uniform float uClipY;
${Te}
${Jo}
out vec4 frag;
void main() {
  if (uClip > 0.5 && vPos.y < uClipY - 0.02) discard;
  // Signs and screens show only their front: no mirrored text from behind the glass.
  if (!gl_FrontFacing) discard;
  // Live models render into a framebuffer, whose first row is the bottom of the picture.
  vec2 uv = uFlip > 0.5 ? vec2(vUv.x, 1.0 - vUv.y) : vUv;
  vec4 t = uHasTex > 0.5 ? texture(uTex, uv) : uPlaceholder;
  // Lettering and see-through pictures are mostly clear: stop there, before any of the colour work.
  if (uMode == 0 && t.a < 0.003) discard;
  float k = hazeK(vPos, length(uCamPos - vPos)) * 0.85;
  if (uMode == 0) {
    // Sign: premultiplied alpha from the atlas.
    vec3 c = mix(t.rgb / max(t.a, 1e-4), uFogDisplay, k);
    frag = vec4(uiOut(c) * t.a, t.a);
    return;
  }
  vec3 col = t.rgb;
  if (uMode == 1) {
    // A display: a soft fall-off at the edges and a faint sheen on its glass.
    vec2 e = vUv * (1.0 - vUv.yx);
    float vig = pow(clamp(e.x * e.y * 18.0, 0.0, 1.0), 0.18);
    float sheen = smoothstep(0.2, 0.0, abs(vUv.x - vUv.y * 0.55 - 0.25)) * 0.04;
    col = col * vig + sheen;
  }
  frag = vec4(uiOut(mix(col, uFogDisplay, k)), 1.0);
}
`,wr=`${K}
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec2 aUv;
layout(location = 2) in vec4 aCol;
layout(location = 3) in float aHard;
uniform mat4 uViewProj;
out vec2 vUv;
out vec4 vCol;
out float vHard;
out vec3 vPos;
void main() {
  vUv = aUv;
  vCol = aCol;
  vHard = aHard;
  vPos = aPos;
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,Sr=`${K}
in vec2 vUv;
in vec4 vCol;
in float vHard;
in vec3 vPos;
uniform float uClip;
uniform float uClipY;
${Te}
out vec4 frag;
void main() {
  if (uClip > 0.5 && vPos.y < uClipY - 0.02) discard;
  float r = length(vUv * 2.0 - 1.0);
  float a = vHard > 0.5 ? 1.0 : pow(clamp(1.0 - r, 0.0, 1.0), 1.7);
  // Glows add light: in the HDR buffer, as light.
  vec3 c = uDirect > 0.5 ? vCol.rgb : toLinear(vCol.rgb) * 2.5;
  frag = vec4(c * a, vCol.a * a);
}
`,Ar=`${K}
layout(location = 0) in vec2 aCorner;
layout(location = 1) in vec3 aCentre;
layout(location = 2) in vec4 aMotion;
uniform mat4 uViewProj;
uniform vec3 uRight;
uniform vec3 uUp;
uniform float uTime;
out vec2 vC;
out float vFade;
void main() {
  float r = aMotion.x;
  float t = fract(aMotion.y + uTime * aMotion.w / aMotion.z);
  float wob = uTime * 0.12 + aMotion.y * 6.2831853;
  vec3 c = vec3(aCentre.x + sin(wob) * 0.6, aCentre.y + t * aMotion.z, aCentre.z + cos(wob * 0.7) * 0.6);
  vFade = smoothstep(0.0, 0.15, t) * (1.0 - smoothstep(0.8, 1.0, t)) * (0.55 + 0.45 * sin(uTime * 0.9 + aMotion.y * 40.0));
  vC = aCorner;
  gl_Position = uViewProj * vec4(c + (uRight * aCorner.x + uUp * aCorner.y) * r, 1.0);
}
`,Fr=`${K}
in vec2 vC;
in float vFade;
${Te}
out vec4 frag;
void main() {
  float r = length(vC);
  if (r > 1.0) discard;
  float a = pow(1.0 - r, 2.2) * vFade;
  // Added light, no coverage.
  vec3 c = uDirect > 0.5 ? vec3(1.0, 0.97, 0.92) * a * 0.5 : vec3(1.0, 0.95, 0.88) * a * 2.2;
  frag = vec4(c, 0.0);
}
`,Pr=`${K}
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec2 aUv;
uniform mat4 uViewProj;
out vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,Lr=`${K}
in vec2 vUv;
uniform float uTime;
uniform float uLength;
${Te}
out vec4 frag;
void main() {
  float across = abs(vUv.y);
  float edge = 1.0 - smoothstep(0.82, 1.0, across);
  float chevron = step(0.55, fract((vUv.x - uTime * 1.4) * 0.7 - across * 0.32));
  float ends = smoothstep(0.0, 0.6, vUv.x) * (1.0 - smoothstep(uLength - 0.6, uLength, vUv.x));
  vec3 red = vec3(0.89, 0.137, 0.173);
  vec3 col = mix(red, vec3(1.0), chevron * 0.28);
  float a = edge * ends * 0.9;
  frag = vec4(uiOut(col) * a, a);
}
`,_r=`${K}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
void main() {
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,Nr=`${K}
uniform vec4 uColor;
${Te}
out vec4 frag;
void main() {
  frag = vec4(uiOut(uColor.rgb / max(uColor.a, 1e-4)) * uColor.a, uColor.a);
}
`,Nt=`${K}
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;
uniform mat4 uViewProj;
uniform mat4 uModel;
out vec3 vWorld;
out vec3 vNormal;
out float vLocalY;
void main() {
  vec4 w = uModel * vec4(aPos, 1.0);
  vWorld = w.xyz;
  vNormal = mat3(uModel) * aNormal;
  vLocalY = aPos.y;
  gl_Position = uViewProj * w;
}
`,Vr=`${K}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform vec3 uTint;
uniform float uWhole;
uniform float uTime;
uniform float uScanY;
${Te}
out vec4 frag;
void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(uCamPos - vWorld);
  float facing = dot(N, V);
  if (facing < -0.05) discard;
  float rim = pow(1.0 - clamp(facing, 0.0, 1.0), 2.2);
  float lines = smoothstep(0.38, 0.5, abs(fract(vLocalY * 36.0 - uTime * 0.4) - 0.5));
  float scan = exp(-pow((vLocalY - uScanY) * 7.0, 2.0));
  vec3 deep = mix(vec3(0.16, 0.27, 0.38), uTint * 0.8, uWhole * 0.6);
  vec3 fill = mix(vec3(0.86, 0.91, 0.95), mix(vec3(1.0), uTint, 0.3), uWhole * 0.6);
  vec3 col = mix(fill, deep, smoothstep(0.05, 0.75, rim));
  col = mix(col, deep, scan * 0.5);
  float a = clamp(0.06 + rim * 0.6 + lines * 0.03 + scan * 0.18 + uWhole * 0.06, 0.0, 0.8);
  vec3 R = reflect(-V, N);
  float spec = pow(max(dot(R, normalize(vec3(0.3, 1.0, 0.45))), 0.0), 40.0) * 0.5;
  vec3 c = (col * a + vec3(spec)) / max(a + spec * 0.4, 1e-3);
  float alpha = clamp(a + spec * 0.4, 0.0, 0.9);
  frag = vec4(uiOut(c) * alpha, alpha);
}
`,Ir=`${K}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uPulse;
${Te}
out vec4 frag;
void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(uCamPos - vWorld);
  float d = dot(N, V);
  // Organs are closed and convex: their near side is enough, and blends cleanly.
  if (d < -0.05) discard;
  float facing = clamp(d, 0.0, 1.0);
  float rim = pow(1.0 - facing, 1.6);
  vec3 col = uColor * (0.62 + 0.38 * facing) + vec3(1.0) * rim * 0.3 + uColor * uPulse * 0.25;
  frag = vec4(uiOut(col) * uAlpha, uAlpha);
}
`,Cr=`${K}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform float uTime;
uniform float uSide;
${Te}
out vec4 frag;
void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(uCamPos - vWorld);
  float d = dot(N, V);
  // Far side first (behind the figure), near side last (in front of it).
  if (d * uSide < 0.0) discard;
  float edge = pow(1.0 - abs(d), 1.5);
  float fade = 1.0 - smoothstep(0.0, 2.2, vLocalY);
  float streak = 0.8 + 0.2 * sin(vLocalY * 16.0 - uTime * 1.6);
  float a = (0.012 + edge * 0.08) * fade * fade * streak;
  frag = vec4(uiOut(vec3(0.93, 0.95, 0.97)) * a, a);
}
`,Or=`${K}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
uniform mat4 uModel;
uniform float uPointSize;
void main() {
  gl_Position = uViewProj * uModel * vec4(aPos, 1.0);
  gl_PointSize = max(1.5, uPointSize / max(gl_Position.w, 0.1));
}
`,Dr=`${K}
uniform vec4 uColor;
uniform float uRound;
${Te}
out vec4 frag;
void main() {
  if (uRound > 0.5) {
    vec2 c = gl_PointCoord - 0.5;
    if (dot(c, c) > 0.25) discard;
  }
  frag = vec4(uiOut(uColor.rgb / max(uColor.a, 1e-4)) * uColor.a, uColor.a);
}
`,Br=`${K}
layout(location = 0) in vec3 aCentre;
layout(location = 1) in vec3 aCorner;
uniform mat4 uViewProj;
uniform vec3 uRight;
uniform vec3 uUp;
uniform vec3 uCamPos;
out vec2 vC;
void main() {
  float r = aCorner.z;
  vec3 c = aCentre + normalize(uCamPos - aCentre) * r * 1.3;
  vC = aCorner.xy;
  gl_Position = uViewProj * vec4(c + (uRight * aCorner.x + uUp * aCorner.y) * r * 2.6, 1.0);
}
`,Ur=`${K}
in vec2 vC;
uniform float uTime;
${Te}
out vec4 frag;
void main() {
  // A hollow ring around the organ (it stays visible inside), four ticks and a ping that ripples out.
  float d = length(vC);
  float w = fwidth(d) * 1.2 + 0.012;
  float ring = 1.0 - smoothstep(0.0, w, abs(d - 0.56));
  float ping = fract(uTime * 0.45);
  float pr = (1.0 - smoothstep(0.0, w, abs(d - (0.56 + ping * 0.4)))) * (1.0 - ping);
  float tick = max(1.0 - smoothstep(0.0, w * 0.8, abs(vC.x)), 1.0 - smoothstep(0.0, w * 0.8, abs(vC.y))) * step(0.66, d) * step(d, 0.92);
  float a = clamp(ring + pr * 0.6 + tick, 0.0, 1.0);
  frag = vec4(uiOut(vec3(0.89, 0.137, 0.173)) * a, a);
}
`,Hr=`${K}
in vec2 vNdc;
uniform float uDim;
out vec4 frag;
void main() {
  float v = smoothstep(0.35, 1.45, length(vNdc));
  float a = uDim * (0.66 + 0.3 * v);
  frag = vec4(vec3(0.0) * a, a);
}
`,$r=`${K}
in vec2 vNdc;
uniform sampler2D uTex;
uniform vec2 uTexel;
uniform float uThreshold;
out vec4 frag;
void main() {
  vec2 uv = vNdc * 0.5 + 0.5;
  vec3 c = texture(uTex, uv + uTexel * vec2(-1.0, -1.0)).rgb + texture(uTex, uv + uTexel * vec2(1.0, -1.0)).rgb
         + texture(uTex, uv + uTexel * vec2(-1.0, 1.0)).rgb + texture(uTex, uv + uTexel * vec2(1.0, 1.0)).rgb;
  c = min(c * 0.25, vec3(60.0));
  float br = max(c.r, max(c.g, c.b));
  float knee = uThreshold * 0.5;
  float soft = clamp(br - uThreshold + knee, 0.0, 2.0 * knee);
  soft = soft * soft / (4.0 * knee + 1e-4);
  frag = vec4(c * max(soft, br - uThreshold) / max(br, 1e-4), 1.0);
}
`,Wr=`${K}
in vec2 vNdc;
uniform sampler2D uTex;
uniform vec2 uTexel;
out vec4 frag;
void main() {
  vec2 uv = vNdc * 0.5 + 0.5;
  vec3 s = texture(uTex, uv).rgb * 4.0;
  s += texture(uTex, uv - uTexel).rgb;
  s += texture(uTex, uv + uTexel).rgb;
  s += texture(uTex, uv + vec2(uTexel.x, -uTexel.y)).rgb;
  s += texture(uTex, uv - vec2(uTexel.x, -uTexel.y)).rgb;
  frag = vec4(s / 8.0, 1.0);
}
`,Gr=`${K}
in vec2 vNdc;
uniform sampler2D uTex;
uniform vec2 uTexel;
out vec4 frag;
void main() {
  vec2 uv = vNdc * 0.5 + 0.5;
  vec2 o = uTexel;
  vec3 s = texture(uTex, uv + vec2(-o.x * 2.0, 0.0)).rgb;
  s += texture(uTex, uv + vec2(-o.x, o.y)).rgb * 2.0;
  s += texture(uTex, uv + vec2(0.0, o.y * 2.0)).rgb;
  s += texture(uTex, uv + vec2(o.x, o.y)).rgb * 2.0;
  s += texture(uTex, uv + vec2(o.x * 2.0, 0.0)).rgb;
  s += texture(uTex, uv + vec2(o.x, -o.y)).rgb * 2.0;
  s += texture(uTex, uv + vec2(0.0, -o.y * 2.0)).rgb;
  s += texture(uTex, uv + vec2(-o.x, -o.y)).rgb * 2.0;
  frag = vec4(s / 12.0, 1.0);
}
`,zr=`${K}
in vec2 vNdc;
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform float uBloomStrength;
uniform float uExposure;
uniform float uGrain;
uniform float uTime;
out vec4 frag;
vec3 tone(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
void main() {
  vec2 uv = vNdc * 0.5 + 0.5;
  vec3 c = texture(uScene, uv).rgb + texture(uBloom, uv).rgb * uBloomStrength;
  c = tone(c * uExposure);
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(c, c * vec3(0.96, 0.99, 1.05), (1.0 - l) * 0.3);
  c = mix(c, c * vec3(1.015, 1.0, 0.985), l * 0.2);
  c = pow(c, vec3(1.0 / 2.2));
  vec2 q = uv - 0.5;
  c *= 1.0 - smoothstep(0.25, 0.95, length(q * vec2(1.0, 0.82))) * 0.22;
  c += (hash(gl_FragCoord.xy + fract(uTime * 7.31) * 113.0) - 0.5) * uGrain;
  frag = vec4(c, 1.0);
}
`,kr=`${K}
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in float aPart;
layout(location = 3) in float aGlow;
uniform mat4 uViewProj;
uniform mat4 uModel;
uniform float uAssemble;
out vec3 vWorld;
out vec3 vNormal;
out float vPart;
out float vGlow;
out float vShow;
float ease(float x) { x = clamp(x, 0.0, 1.0); return x * x * (3.0 - 2.0 * x); }
mat2 turn(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
void main() {
  vec3 p = aPos;
  vec3 n = aNormal;
  float a = uAssemble;
  float show = 1.0;
  int part = int(aPart + 0.5);
  if (part == 0) { show = ease(a / 0.22); p.xz *= mix(0.25, 1.0, show); p.y *= show; }
  else if (part == 1) { show = ease((a - 0.12) / 0.34); p.y = mix(0.05, p.y, show); }
  else if (part <= 7) {
    float i = float(part - 2);
    show = ease((a - 0.44 - i * 0.04) / 0.3);
    float ang = (i + 0.5) * 1.0471976;
    p.xz = turn((1.0 - show) * 0.9) * p.xz;
    n.xz = turn((1.0 - show) * 0.9) * n.xz;
    p.xz = p.xz * mix(0.55, 1.0, show) + vec2(cos(ang), sin(ang)) * (1.0 - show) * 0.42;
    p.y -= (1.0 - show) * 0.3;
  } else if (part == 8) { show = ease((a - 0.8) / 0.14); p.xz *= show; }
  else { show = ease((a - 0.74) / 0.2); }
  // Parts not yet there collapse to a point: no fragments.
  if (show < 0.002) p = vec3(0.0);
  vec4 w = uModel * vec4(p, 1.0);
  vWorld = w.xyz;
  vNormal = mat3(uModel) * n;
  vPart = aPart;
  vGlow = aGlow;
  vShow = show;
  gl_Position = uViewProj * w;
}
`,Xr=`${K}
in vec3 vWorld;
in vec3 vNormal;
in float vPart;
in float vGlow;
in float vShow;
uniform vec3 uCamPos;
uniform vec3 uNeonA;
uniform vec3 uNeonB;
uniform float uTime;
${Te}
out vec4 frag;
void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(uCamPos - vWorld);
  if (dot(N, V) < 0.0) N = -N;
  float fres = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 3.0);
  float top = clamp(N.y, 0.0, 1.0);
  vec3 col = vec3(0.05, 0.056, 0.07) * (0.45 + 1.6 * top);
  col += vec3(0.62, 0.78, 1.0) * pow(max(dot(reflect(-V, N), vec3(0.0, 1.0, 0.0)), 0.0), 30.0) * 0.4;
  col += mix(uNeonA, uNeonB, 0.35) * fres * 0.45;
  float pulse = 0.86 + 0.14 * sin(uTime * 2.3);
  vec3 neon = vPart < 0.5 ? uNeonB : vPart > 7.5 && vPart < 8.5 ? mix(uNeonA, vec3(1.0), 0.15) : uNeonA;
  float g = vGlow * vShow * pulse;
  // The lens glows from its rim in; the strips and rings are lines of light.
  float lensFade = vPart > 7.5 && vPart < 8.5 ? 0.55 : 1.0;
  col = mix(col, neon, clamp(g, 0.0, 1.0) * 0.85 * lensFade);
  frag = vec4(uiOut(min(col, vec3(0.95))) + neon * g * 1.2 / uExposure * (1.0 - uDirect), 1.0);
}
`,Yr=`${K}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform float uTime;
uniform float uLight;
uniform float uHeight;
${Te}
${_t}
out vec4 frag;
void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(uCamPos - vWorld);
  float core = pow(abs(dot(N, V)), 1.4);
  float down = 1.0 - clamp(vLocalY / uHeight, 0.0, 1.0);
  float dust = 0.75 + 0.25 * fbm(vec2(atan(vWorld.x, vWorld.z) * 3.0, vWorld.y * 2.0 - uTime * 0.15));
  float a = (0.005 + core * 0.034) * (0.3 + 0.7 * down) * dust * uLight;
  frag = vec4(uiOut(vec3(0.86, 0.92, 1.0)) * a, a);
}
`,jr=`${K}
layout(location = 0) in vec2 aPos;
uniform mat4 uViewProj;
uniform vec3 uCentre;
uniform vec3 uRight;
uniform vec3 uUp;
uniform float uHalf;
out vec2 vUv;
out vec3 vWorld;
void main() {
  vec3 w = uCentre + (uRight * aPos.x + uUp * aPos.y) * uHalf;
  vUv = aPos * 0.5 + 0.5;
  vWorld = w;
  gl_Position = uViewProj * vec4(w, 1.0);
}
`,Kr=`${K}
in vec2 vUv;
in vec3 vWorld;
uniform sampler2D uTex;
uniform vec4 uRect;
uniform float uReveal;
uniform float uTime;
uniform float uFlash;
uniform float uMotion;
uniform vec3 uNeonA;
${Te}
out vec4 frag;
void main() {
  vec4 t = texture(uTex, uRect.xy + vUv * uRect.zw);
  float line = uReveal * 1.04;
  float shown = 1.0 - smoothstep(line - 0.015, line + 0.015, vUv.y);
  float edge = exp(-pow((vUv.y - line) * 70.0, 2.0)) * step(uReveal, 0.999);
  float vign = smoothstep(0.5, 0.4, length(vUv - 0.5));
  float scan = 1.0 - 0.2 * uMotion * step(0.5, fract(vWorld.y * 220.0 - uTime * 1.5));
  float flick = 1.0 - uMotion * 0.08 * step(0.96, fract(sin(floor(uTime * 20.0) * 12.9898) * 43758.5453));
  float a = clamp((t.a * shown * scan * flick + edge * 0.45) * vign, 0.0, 1.0);
  vec3 c = (t.rgb * shown * scan * flick * (1.0 + uFlash * 0.5) + uNeonA * edge * 0.6) * vign;
  vec3 straight = c / max(a, 1e-3);
  frag = vec4(uiOut(min(straight, vec3(0.95))) * a, a);
}
`,qr=`${K}
in vec2 vNdc;
uniform float uStudy;
uniform vec4 uSpotA;
uniform vec4 uSpotB;
uniform vec4 uSpotC;
uniform vec3 uSpotW;
out vec4 frag;
float spot(vec4 s, vec2 p) {
  if (s.z <= 0.0) return 0.0;
  vec2 d = max(abs(p - s.xy) - s.zw, 0.0) / vec2(0.16, 0.2);
  return exp(-dot(d, d) * 2.5);
}
void main() {
  float l = max(max(spot(uSpotA, vNdc) * uSpotW.x, spot(uSpotB, vNdc) * uSpotW.y), spot(uSpotC, vNdc) * uSpotW.z);
  float v = smoothstep(0.4, 1.5, length(vNdc));
  float a = clamp(uStudy * (0.82 + 0.12 * v) * (1.0 - l), 0.0, 0.95);
  frag = vec4(vec3(0.004, 0.008, 0.03) * a, a);
}
`,Qr=`${K}
layout(location = 0) in vec2 aPos;
uniform mat4 uViewProj;
uniform vec3 uCentre;
uniform vec3 uU;
uniform vec3 uV;
uniform vec2 uHalf;
out vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = uViewProj * vec4(uCentre + uU * aPos.x * uHalf.x + uV * aPos.y * uHalf.y, 1.0);
}
`,Zr=`${K}
in vec2 vUv;
uniform vec2 uHalf;
uniform vec3 uNeonA;
uniform float uOn;
${Te}
out vec4 frag;
void main() {
  vec2 m = min(vUv, 1.0 - vUv) * uHalf * 2.0;
  float e = min(m.x, m.y);
  float frame = exp(-e * 140.0);
  float bar = 1.0 - smoothstep(0.006, 0.011, vUv.x * uHalf.x * 2.0);
  float a = uOn * clamp(0.07 + frame * 0.55 + bar * 0.95, 0.0, 1.0);
  vec3 c = mix(uNeonA * 0.5, uNeonA, clamp(frame + bar, 0.0, 1.0));
  frag = vec4(uiOut(c) * a, a);
}
`;var Jr={gloss:.4,emit:1},ns={gloss:.9,pattern:4},Fe=Math.PI*2;function rs(n){let e=n>>>0||1;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function ea(n,e,o,r){let t=o.span,a=o.depth,s=o.top-o.bottom,i=(d,h,m)=>[o.at[0]+o.along[0]*d+o.inward[0]*m,o.bottom+h,o.at[1]+o.along[1]*d+o.inward[1]*m],l=d=>d?r.glow:r.body,c=d=>d?Jr:r.material,u={p:i,W:t,D:a,H:s,rand:rs(r.seed),m:n,body:r.body,material:r.material,glow:r.glow,curve:(d,h,m=8,p=!1,b=!1)=>n.sweep(d,h,m,l(b),c(b),p),rod:(d,h,m,p=!1)=>n.sweep([d,h],m,5,l(p),c(p)),bead:(d,h,m=!1,p=6)=>n.sphere(d,h,p,l(m),c(m)),box:(d,h,m,p,b,v,T=!1)=>{let S=i(d,h,m),P=i(p,b,v);n.box([Math.min(S[0],P[0]),Math.min(S[1],P[1]),Math.min(S[2],P[2])],[Math.max(S[0],P[0]),Math.max(S[1],P[1]),Math.max(S[2],P[2])],l(T),c(T))},strip:(d,h,m,p=!1)=>n.strip(d,h,m,l(p),c(p)),hang:d=>{for(let h of d)n.sweep([h,[h[0],o.ceiling,h[2]]],.006,4,[.75,.77,.8],{...ns,ao:r.light})},inside:d=>{let h=d[0]-o.at[0],m=d[2]-o.at[1],p=Math.max(-t/2,Math.min(t/2,h*o.along[0]+m*o.along[1])),b=Math.max(-a/2,Math.min(a/2,h*o.inward[0]+m*o.inward[1]));return i(p,Math.max(0,Math.min(s,d[1]-o.bottom)),b)}},f=(d,h,m)=>ee([o.along[0]*d+o.inward[0]*m,h,o.along[1]*d+o.inward[1]*m]);switch(e.motif){case"helix":return as(u);case"cluster":return ss(u,e.variant);case"ribbons":return is(u,e.variant,f);case"chain":return ls(u,e.variant);case"rings":return cs(u,e.variant);case"loops":return us(u,e.variant);case"wheel":return ds(u);case"branches":return fs(u,e.variant,f);case"lattice":return hs(u,e.variant);case"strata":return ps(u,e.variant,f);case"strands":return bs(u);case"spiral":return vs(u,e.variant)}}function Je(n,e,o,r,t,a,s,i,l=0){let c=[];for(let u=0;u<i;u++){let f=u/i*Fe,d=Math.cos(f)*t,h=Math.sin(f)*a;s==="uv"?c.push(n.p(e+d,o+h*Math.sin(l),r+h*Math.cos(l))):s==="uh"?c.push(n.p(e+d,o+h,r+d*Math.sin(l))):c.push(n.p(e+d*Math.sin(l),o+h,r+d))}return c}function as(n){let e=n.W*.92,o=Math.min(.56,n.H*.36),r=n.H*.5,t=3.2,a=.42*Fe,s=(l,c)=>{let u=Fe*t*l+c;return n.p(-e/2+e*l,r+o*Math.sin(u),o*Math.cos(u))};for(let l of[0,a]){let c=[];for(let u=0;u<=60;u++)c.push(s(u/60,l));n.curve(c,.045,7)}let i=Math.round(t*9);for(let l=0;l<i;l++){let c=(l+.5)/i,u=s(c,0),f=s(c,a);n.rod(u,f,.014),n.bead([(u[0]+f[0])/2,(u[1]+f[1])/2,(u[2]+f[2])/2],.032,!0)}n.hang([s(.02,0),s(.5,0),s(.98,0)].map(l=>[l[0],n.p(0,r+o,0)[1],l[2]]))}function ss(n,e){let o=[],r=e==="cells"?13:9;for(let t=0;t<900&&o.length<r;t++){let a=e==="cells"?.16+n.rand()*.28:.17+n.rand()*.16,s=[(n.rand()-.5)*(n.W-2*a-.4),a+.1+n.rand()*(n.H-2*a-.2),(n.rand()-.5)*(n.D-2*a-.3)];o.every(i=>Math.hypot(i.c[0]-s[0],i.c[1]-s[1],i.c[2]-s[2])>i.r+a+.08)&&o.push({c:s,r:a})}o.forEach(({c:t,r:a},s)=>{let i=n.p(t[0],t[1],t[2]);if(n.m.sphere(i,a,12,n.body,n.material),e==="cells")n.bead(n.p(t[0]+a*.18,t[1]-a*.78,t[2]-a*.25),a*.36,!0,8);else for(let l=0;l<12;l++){let c=Math.acos(1-2*(l+.5)/12),u=l*2.39996+s,f=[Math.sin(c)*Math.cos(u),Math.cos(c),Math.sin(c)*Math.sin(u)],d=n.p(t[0]+f[0]*a,t[1]+f[1]*a,t[2]+f[2]*a),h=n.p(t[0]+f[0]*(a+.13),t[1]+f[1]*(a+.13),t[2]+f[2]*(a+.13));n.rod(d,h,.012,s%3===0)}}),n.hang(o.slice(0,5).map(({c:t,r:a})=>n.p(t[0],t[1]+a,t[2])))}function is(n,e,o){let r=n.W*.9,t=n.H*.5;(e==="folds"?[-.9,-.3,.3,.9]:[-.7,0,.7]).forEach((s,i)=>{let l=[],c=[],u=[],f=e==="folds"?150:110;for(let d=0;d<=f;d++){let h=d/f,m=-r/2+r*h,p,b=0;if(e==="folds"){let T=Math.sin(m/.85*Fe+i*.9);p=t+.5*(Math.tanh(3*T)/Math.tanh(3))}else p=t+.38*Math.sin(m/3.1*Fe+i*1.7)+.08*Math.sin(m/.9*Fe+i),b=.9*Math.sin(m/2.4*Fe+i*2.1);let v=s+(e==="waves"?.18*Math.sin(m/1.7*Fe+i):0);l.push(n.p(m,p,v)),c.push(e==="folds"?o(0,0,1):o(0,Math.sin(b),Math.cos(b))),u.push(n.p(m,p+(e==="folds"?.012:0),v+(e==="folds"?-.21:0)))}n.strip(l,c,e==="folds"?.42:.34),i%2===0&&n.curve(u.filter((d,h)=>h%2===0),.009,4,!1,!0)}),n.hang([n.p(-r/2+.2,t+.5,0),n.p(0,t+.5,0),n.p(r/2-.2,t+.5,0)])}function ls(n,e){let o=n.H*.5;if(e==="twin"){for(let l of[-.48,.48]){let c=n.W*.88;n.rod(n.p(-c/2,o,l),n.p(c/2,o,l),.02);let u=12;for(let f=0;f<u;f++){let d=-c/2+.25+f/(u-1)*(c-.5),h=n.p(d,o,l);n.bead(h,.075,f%3===1,8),n.rod(h,n.p(d+.12,o-.32,l+Math.sign(l)*.34),.008)}}n.hang([n.p(-n.W*.4,o,0),n.p(n.W*.4,o,0)]);return}let r=[];for(let l=0;l<9;l++)r.push([-n.W*.42+l/8*n.W*.84,.25+n.rand()*(n.H-.5),(n.rand()-.5)*(n.D-.6)]);let t=[],a=(l,c,u,f,d)=>.5*(2*c+(-l+u)*d+(2*l-5*c+4*u-f)*d*d+(-l+3*c-3*u+f)*d*d*d);for(let l=0;l<r.length-1;l++)for(let c=0;c<14;c++){let u=c/14,f=d=>r[Math.max(0,Math.min(r.length-1,d))];t.push([0,1,2].map(d=>a(f(l-1)[d]??0,f(l)[d]??0,f(l+1)[d]??0,f(l+2)[d]??0,u)))}let i=t.map((l,c)=>{let u=c/t.length;if(![.18,.5,.78].some(h=>Math.abs(u-h)<.07))return l;let d=c*1.1;return[l[0],l[1]+Math.sin(d)*.12,l[2]+Math.cos(d)*.12]}).map(l=>n.p(l[0],l[1],l[2]));n.curve(i,.018,5);for(let l=0;l<i.length;l+=3)n.bead(i[l],.05,l%21===0,6);n.hang([i[0],i[Math.floor(i.length/2)],i[i.length-1]])}function cs(n,e){let o=n.H*.5;if(e==="gyro"){let a=Math.min(.7,n.H*.45);n.bead(n.p(0,o,0),.12,!0,12),[a,a*.8,a*.6].forEach((s,i)=>n.curve(Je(n,0,o,0,s,s,i===1?"uh":"hv",48,i*.6),.024,6,!0)),n.rod(n.p(-n.W*.36,o,0),n.p(n.W*.36,o,0),.02);for(let s of[-1,1])n.bead(n.p(s*n.W*.36,o,0),.13,!1,12);n.hang([n.p(0,o+a,0),n.p(-n.W*.36,o,0),n.p(n.W*.36,o,0)]);return}if(e==="ripples"){for(let a=0;a<6;a++){let s=.28+a*.47;n.curve(Je(n,0,o+.32-a*.1,0,s,s*.42,"uv",48),.03-a*.003,4,!0,a===0||a===3)}n.bead(n.p(0,o+.55,0),.09,!0,10),n.hang([n.p(0,o+.55,0),n.p(-2.5,o-.18,0),n.p(2.5,o-.18,0)]);return}if(e==="pulse"){let a=i=>{let l=(c,u,f)=>f*Math.exp(-(((i-c)/u)**2));return .2+l(.14,.05,.1)+l(.34,.035,.5)+l(.42,.04,-.06)+l(.6,.06,.14)+l(.86,.035,.42)};for(let i=0;i<15;i++){let l=i/14,c=Math.min(n.H*.47,a(l));n.curve(Je(n,-n.W*.44+l*n.W*.88,o,0,c,c,"hv",24),.02,4,!0,c>.5)}n.rod(n.p(-n.W*.46,o,0),n.p(n.W*.46,o,0),.01,!0),n.hang([n.p(-n.W*.44,o+.2,0),n.p(0,o+.3,0),n.p(n.W*.44,o+.2,0)]);return}let r=7,t=Math.min(n.H*.47,.72);for(let a=0;a<r;a++){let s=-n.D*.42+a/(r-1)*n.D*.84,i=t*(1-a*.1);n.curve(Je(n,0,o,s,i,i,"uh",40),.02,5,!0,a===2||a===5)}n.bead(n.p(0,o,n.D*.42),.15,!0,12);for(let a of[-1,1])n.curve(Je(n,a*n.W*.31,o,0,.62,.62*.4,"uv",40),.016,4,!0);n.hang([n.p(0,o+t,-n.D*.42),n.p(0,o+t*.4,n.D*.42),n.p(-n.W*.31,o,0),n.p(n.W*.31,o,0)])}function us(n,e){let o=n.H*.5;if(e==="eight"){let a=[],s=n.W*.46;for(let i=0;i<120;i++){let l=i/120*Fe,c=1+Math.sin(l)**2;a.push(n.p(s*Math.cos(l)/c,o+.3*Math.sin(l),s*Math.sin(l)*Math.cos(l)/c*.62))}n.curve(a,.055,8,!0);for(let i=0;i<120;i+=9)n.bead(a[i],.07,!0,8);n.hang([a[0],a[30],a[60],a[90]]);return}if(e==="hairpin"){let a=n.H-.08;n.rod(n.p(-n.W*.44,a,0),n.p(n.W*.44,a,0),.03);for(let s=0;s<5;s++){let i=-n.W*.34+s/4*n.W*.68,l=.75+s*37%5*.1,c=.14,u=[];for(let f=0;f<=10;f++)u.push(n.p(i-c,a-f/10*l,0));for(let f=1;f<10;f++){let d=Math.PI+f/10*Math.PI;u.push(n.p(i+Math.cos(d)*c,a-l+Math.sin(d)*c,0))}for(let f=10;f>=0;f--)u.push(n.p(i+c,a-f/10*l,0));n.curve(u,.03,5),n.bead(n.p(i,a-l-c,0),.055,!0,8)}n.hang([n.p(-n.W*.4,a,0),n.p(0,a,0),n.p(n.W*.4,a,0)]);return}let r=n.W*.9,t=[];for(let a=0;a<=120;a++){let s=a/120,i=s*Fe*6.5;t.push(n.p(-r/2+r*s,o+.42*Math.sin(i),.42*Math.cos(i)+.25*Math.sin(s*Math.PI*2)))}n.curve(t,.05,8);for(let a=6;a<t.length;a+=18)n.bead(t[a],.06,!0,8);n.hang([t[10],t[60],t[110]])}function ds(n){let e=n.H*.5,o=Math.min(.68,n.H*.44),r=Je(n,-.62,e,0,o,o,"uh",56),t=Je(n,.62,e,0,o*.82,o*.82,"hv",56);n.curve(r,.04,8,!0),n.curve(t,.04,8,!0);for(let a=0;a<56;a+=7)n.bead(r[a],.075,a%14===0,8),n.bead(t[(a+3)%56],.065,a%14===7,8);n.hang([n.p(-.62,e+o,0),n.p(.62,e+o*.82,0)])}function fs(n,e,o){let r=[],t=(a,s,i,l,c,u)=>{let f=n.inside([a[0]+s[0]*i,a[1]+s[1]*i,a[2]+s[2]*i]);if(n.m.sweep([a,f],[l,l*.72],5,n.body,n.material),c===0){r.push(f);return}for(let d of[-1,1]){let h=(n.rand()-.5)*.2,m=e==="down"?u%2===1?xo(s,o(0,-.15,d*(.62+h))):xo(s,o(d*(.55+h),-.25,0)):u%2===1?xo(s,o(0,0,d*(.42+h))):xo(s,o(0,d*(.3+h),0));t(f,ee(m),i*(.7+n.rand()*.06),l*.74,c-1,u+1)}};if(e==="down"){let a=n.p(0,n.H,0),s=n.p(0,n.H-.32,0);n.m.sweep([a,s],[.075,.065],6,n.body,n.material);for(let i of[-1,1])t(s,ee(o(i,-.42,0)),1.25,.055,4,1)}else{let a=n.p(-n.W*.47,n.H*.55,0);t(a,o(1,0,0),1.05,.055,5,0)}for(let a of r)n.bead(a,.045,!0,6);n.hang(e==="down"?[]:[n.p(-n.W*.4,n.H*.55,0),n.p(-n.W*.1,n.H*.55,0)])}function xo(n,e){return[n[0]+e[0],n[1]+e[1],n[2]+e[2]]}function hs(n,e){let o=n.H*.5,r=n.W*.46,t=n.D*.42;if(e==="weave"){[-.36,0,.36].forEach((a,s)=>{let i=(s%2===0?1:-1)*.5,l=Math.cos(i),c=Math.sin(i);for(let u=-12;u<=12;u++){let f=u*.42,d=-10,h=10,m=[];for(let b of[d,h])m.push([l*b-c*f,c*b+l*f]);let p=ms(m[0],m[1],r,t);p&&n.rod(n.p(p[0][0],o+a,p[0][1]),n.p(p[1][0],o+a,p[1][1]),.012,u%5===0)}}),n.hang([n.p(-r*.8,o+.36,0),n.p(0,o+.36,0),n.p(r*.8,o+.36,0)]);return}if(e==="network"||e==="struts"){if(e==="struts"){let l=[[.25,-.45],[.25,.45],[n.H-.3,0]];for(let[u,f]of l)n.rod(n.p(-r,u,f),n.p(r,u,f),.022);let c=12;for(let u=0;u<=c;u++){let f=-r+u/c*2*r,d=-r+(u+.5)/c*2*r;u<c&&(n.rod(n.p(f,.25,-.45),n.p(d,n.H-.3,0),.014),n.rod(n.p(f,.25,.45),n.p(d,n.H-.3,0),.014),n.rod(n.p(f,.25,-.45),n.p(d,.25,.45),.006,!0))}n.hang([n.p(-r*.9,n.H-.3,0),n.p(0,n.H-.3,0),n.p(r*.9,n.H-.3,0)]);return}let a=[];for(let l=0;l<600&&a.length<24;l++){let c=[(n.rand()-.5)*2*r,.15+n.rand()*(n.H-.3),(n.rand()-.5)*2*t];a.every(u=>Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])>.55)&&a.push(c)}let s=new Set;a.forEach((l,c)=>{let u=a.map((f,d)=>({j:d,d:Math.hypot(f[0]-l[0],f[1]-l[1],f[2]-l[2])})).filter(f=>f.j!==c).sort((f,d)=>f.d-d.d).slice(0,3);for(let{j:f}of u){let d=c<f?`${c}-${f}`:`${f}-${c}`;if(s.has(d))continue;s.add(d);let h=a[f];n.rod(n.p(l[0],l[1],l[2]),n.p(h[0],h[1],h[2]),.01,(c+f)%7===0)}n.bead(n.p(l[0],l[1],l[2]),.06+c%3*.02,c%3===0,8)});let i=a.slice().sort((l,c)=>c[1]-l[1]).slice(0,4);n.hang(i.map(l=>n.p(l[0],l[1],l[2])));return}if(e==="hex"){let s=Math.sqrt(3)*.42,i=new Map,l=[];for(let c=-1;c<=1;c++)for(let u=-4;u<=4;u++){let f=u*1.5*.42,d=c*s+(u%2===0?0:s/2);if(Math.abs(f)>r-.42||Math.abs(d)+.42>n.D/2)continue;let h=o+.06*Math.sin(u*1.3+c);l.push(n.p(f,h,d));for(let m=0;m<6;m++){let p=m/6*Fe,b=(m+1)/6*Fe,v=[f+Math.cos(p)*.42,d+Math.sin(p)*.42],T=[f+Math.cos(b)*.42,d+Math.sin(b)*.42],S=[v,T].map(P=>`${P[0].toFixed(2)},${P[1].toFixed(2)}`).sort().join("|");i.has(S)||i.set(S,[n.p(v[0],h,v[1]),n.p(T[0],h,T[1])])}}for(let[c,u]of i.values())n.rod(c,u,.014);for(let c of l)n.bead(c,.05,!0,6);n.hang([l[0],l[Math.floor(l.length/2)],l[l.length-1]].filter(c=>c!==void 0));return}for(let a=0;a<9;a++)for(let s=0;s<2;s++)for(let i=0;i<3;i++){let l=-r+.2+a/8*(2*r-.4),c=.25+s/1*(n.H-.5),u=-t+.15+i/2*(2*t-.3),f=.07+(a+s*3+i*5)%4*.012;n.box(l-f,c-f,u-f,l+f,c+f,u+f,(a*7+s*3+i*11)%9===0)}for(let a=0;a<9;a++){let s=-r+.2+a/8*(2*r-.4);n.rod(n.p(s,.25,-t+.15),n.p(s,.25,t-.15),.006),n.rod(n.p(s,n.H-.25,-t+.15),n.p(s,n.H-.25,t-.15),.006)}n.hang([n.p(-r+.2,n.H-.25,0),n.p(r-.2,n.H-.25,0)])}function ms(n,e,o,r){let t=0,a=1,s=[e[0]-n[0],e[1]-n[1]],i=[[-s[0],n[0]+o],[s[0],o-n[0]],[-s[1],n[1]+r],[s[1],r-n[1]]];for(let[l,c]of i){if(l===0){if(c<0)return null;continue}let u=c/l;if(l<0?t=Math.max(t,u):a=Math.min(a,u),t>a)return null}return[[n[0]+s[0]*t,n[1]+s[1]*t],[n[0]+s[0]*a,n[1]+s[1]*a]]}function ps(n,e,o){let r=n.W*.46;if(e==="steps"){for(let s=0;s<7;s++){let i=-r+s/7*2*r+.05,l=i+2*r/7-.14,c=.12+s/6*(n.H-.4);n.box(i,c,-.75,l,c+.05,.75),n.box(i,c+.05,.73,l,c+.065,.75,!0),n.hang([n.p((i+l)/2,c+.05,-.6),n.p((i+l)/2,c+.05,.6)])}return}if(e==="sheets"){for(let a=0;a<4;a++){let s=.25+a*((n.H-.5)/3),i=24,l=6,c=n.D*.36-a*.05,u=(f,d)=>{let h=-r+f/i*2*r,m=-c+d/l*2*c;return n.p(h,s+.07*Math.sin(h*1.6+a*1.1)*Math.cos(m*2.1+a),m)};for(let f=0;f<i;f++)for(let d=0;d<l;d++)n.m.quad(u(f,d),u(f+1,d),u(f+1,d+1),u(f,d+1),n.body,n.material);a===3&&n.curve(Array.from({length:i+1},(f,d)=>u(d,l)),.008,4,!1,!0),a===3&&n.hang([u(2,3),u(12,3),u(22,3)])}return}if(e==="arch"){for(let s=0;s<12;s++){let i=Math.PI*(.08+.84*s/11),l=Math.cos(i)*r*.82,c=-Math.sin(i)*n.D*.32+n.D*.14,u=.55+.6*Math.sin(i)**2,f=.1+.05*Math.sin(i),d=n.p(l,0,c);n.m.cylinder(d[0],d[2],f,Eo(n)-u,Eo(n),16,n.body,n.material),n.m.disc([d[0],Eo(n)-u-.002,d[2]],[0,1,0],f*.55,f*.8,16,n.glow,Jr),n.hang([[d[0],Eo(n),d[2]]])}return}let t=9;for(let a=0;a<t;a++){let s=-r+.3+a/(t-1)*(2*r-.6),i=n.H*.5+.12*Math.sin(a*1.3),l=(c,u)=>{let f=Math.sin(c)*.36,d=(1-Math.cos(c))*.3;return n.p(s+d*.6,i+f*.25,u*.55)};for(let c=0;c<6;c++)for(let u=-2;u<2;u++){let f=-.9+c/6*1.8,d=-.9+(c+1)/6*1.8;n.m.quad(l(f,u/2),l(d,u/2),l(d,(u+1)/2),l(f,(u+1)/2),n.body,n.material,o(-1,0,0))}n.rod(l(-.9,0),l(.9,0),.006,a%3===1),n.hang([l(0,-.8),l(0,.8)])}}function Eo(n){return n.p(0,n.H,0)[1]}function bs(n){let e=n.H-.05,o=n.W*.44;n.rod(n.p(-o,e,0),n.p(o,e,0),.03);for(let r=0;r<38;r++){let t=-o+.1+r/37*(2*o-.2),a=(n.rand()-.5)*.5,s=.7+n.rand()*.6,i=n.rand()*Fe,l=[];for(let c=0;c<=5;c++){let u=c/5;l.push(n.p(t+.06*Math.sin(i+u*3),e-u*s,a+.05*Math.cos(i+u*2.4)))}n.curve(l,[.012,.011,.01,.009,.008,.007],4,!1,r%7===3)}n.hang([n.p(-o*.9,e,0),n.p(0,e,0),n.p(o*.9,e,0)])}function vs(n,e){let o=n.H*.5;if(e==="spiral"){let r=[],t=[];for(let a=0;a<=140;a++){let s=a/140,i=s*Fe*3,l=.12+1.15*s**1.3;r.push(n.p(Math.cos(i)*l*2,o-.3+s*.55,Math.sin(i)*l*.85)),t.push(.012+.04*s)}n.curve(r,t,6);for(let a=10;a<r.length;a+=13)n.bead(r[a],.05,!0,6);n.hang([r[20],r[80],r[139]]);return}n.bead(n.p(0,o,0),.16,!0,14);for(let r=0;r<5;r++){let t=.7+r*.5,a=Math.min(n.D*.45,.32+r*.2),s=Je(n,0,o,0,t,a,"uv",56,(r-2)*.12);n.curve(s,.014,4,!0),n.bead(s[r*11%56],.06+r%2*.02,r%2===0,8)}n.hang([n.p(0,o+.16,0),n.p(-2.6,o,0),n.p(2.6,o,0)])}var et=ee([-.53,.6,.6]),te=Ee(ft),ta=2.6,Re={sun:[2.55,2.42,2.22],sky:[.78,.84,.94],ground:[.4,.39,.37],interior:[.5,.495,.48],panel:3.4,emit:3.4,fog:[.86,.89,.93],fogDensity:45e-5,exposure:.8,exposureInside:1.35,bloomThreshold:2.2,bloomStrength:.16,grain:.016},ra=10,tn=7,R={stoneFloor:X("#C3BDB2"),lobbyFloor:X("#CBC5BA"),graphite:X("#3A3D42"),graphiteDeep:X("#25272B"),travertine:X("#E6E0D5"),band:X("#E2DCD1"),plaster:X("#EFEEEB"),panel:X("#FFFFFF"),titanium:X("#A9AEB4"),fin:X("#57524C"),steel:X("#CDD2D7"),bronze:X("#9E8566"),blackGlass:X("#0B0D10"),paving:X("#B5AFA5"),plateau:X("#7C7D75"),water:X("#0A0C0F"),glass:X("#CFE0DC"),facadeGlass:X("#9DB0BF"),glassFloor:X("#E4EBEA"),leather:X("#1B1A19"),carpet:X("#1F2225"),foliage:X("#34503A"),foliageLight:X("#4A6A45"),bark:X("#4B3D31"),soil:X("#2A2622"),runner:X("#E3232C"),runnerInlay:X("#A8262B"),warm:X("#FFE2B8"),marble:X("#ECE9E3"),terrazzo:X("#D8D2C8"),darkCeiling:X("#17181B"),fabric:X("#1C1D20"),cushion:X("#2A2B2E"),porcelain:X("#F3F1EC"),brass:X("#B99B66")},w={stoneFloor:{gloss:.9,pattern:1},graphiteFloor:{gloss:.9,pattern:5},graphite:{gloss:.82,pattern:5},stoneWall:{gloss:.28,pattern:2},band:{gloss:.4,pattern:2},plaster:{gloss:.08,pattern:10},panel:{gloss:.1,emit:1},line:{gloss:.2,emit:.55},titanium:{gloss:.62,pattern:3},steel:{gloss:.94,pattern:4},bronze:{gloss:.6,pattern:9},blackGlass:{gloss:.96,pattern:13},paving:{gloss:.45,pattern:12},plateau:{gloss:.1,pattern:15},water:{gloss:.985,pattern:6},leather:{gloss:.55,pattern:7},carpet:{gloss:.05,pattern:8},foliage:{gloss:.3,pattern:11},bark:{gloss:.2,pattern:14},matte:{gloss:.15},paint:{gloss:.18,pattern:10},walnut:{gloss:.42,pattern:16},marble:{gloss:.88,pattern:1},terrazzo:{gloss:.78,pattern:17},terrazzoFloor:{gloss:.86,pattern:17},fabric:{gloss:.04,pattern:8},chrome:{gloss:.95,pattern:4},porcelain:{gloss:.7},polishedBrass:{gloss:.86,pattern:4}},ys={blackGlass:[X("#0E0F12"),{gloss:.3}],bronze:[R.bronze,{gloss:.38,pattern:9}],steel:[R.titanium,{gloss:.38,pattern:3}],travertine:[R.travertine,w.stoneWall],marble:[R.marble,{gloss:.45,pattern:1}],graphite:[R.graphite,{gloss:.32,pattern:5}],terrazzo:[R.terrazzo,{gloss:.4,pattern:17}]},gs={noir:[R.steel,w.chrome],chroma:[R.bronze,w.bronze],warm:[R.brass,w.polishedBrass],gallery:[R.porcelain,w.porcelain]};function xs(n){return n.wallFinish==="walnut"?[X(n.wall),w.walnut]:n.wallFinish==="travertine"?[X(n.wall),w.stoneWall]:[X(n.wall),w.paint]}function Es(n){return[...n].reduce((e,o)=>e*31+o.charCodeAt(0)>>>0,7)}function Ts(n){let e=me[n]?.tier??"T01",[o,r,t]=X(he[e]),a=s=>Math.min(1,s*.7+.3);return[a(o),a(r),a(t)]}function Rs(n){let e=n>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function oa(n,e,o,r,t,a,s,i){let l=ee(Le(o,e)),c=Math.abs(l[1])>.9?[1,0,0]:[0,1,0],u=ee(ye(l,c)),f=ye(l,u),d=(h,m,p)=>{let b=[u[0]*Math.cos(p)+f[0]*Math.sin(p),u[1]*Math.cos(p)+f[1]*Math.sin(p),u[2]*Math.cos(p)+f[2]*Math.sin(p)];return[[h[0]+b[0]*m,h[1]+b[1]*m,h[2]+b[2]*m],b]};for(let h=0;h<a;h++){let m=h/a*Math.PI*2,p=(h+1)/a*Math.PI*2,[b,v]=d(e,r,m),[T,S]=d(e,r,p),[P]=d(o,t,m),[_]=d(o,t,p);n.vertex(b,v,s,i),n.vertex(P,v,s,i),n.vertex(_,S,s,i),n.vertex(b,v,s,i),n.vertex(_,S,s,i),n.vertex(T,S,s,i)}}function aa(){let n=new nt,e=new nt,o=new nt,r=[],t=[],a=[],s=[],i=[],l=[],c=[],u=[],f=Rs(7),d=(x,y)=>{let g=e.vertexCount;y();let M=e.vertexCount-g;M>0&&a.push({first:g,count:M,centre:x})},h=(x,y=0)=>({gloss:x,emit:y}),m=(x,y,g,M,L)=>{let[H,V,j,I]=L,E=(F,k,D,B)=>s.push(F,y,k,D,B,H,V,j,I,0);E(x-M,g-M,0,0),E(x+M,g-M,1,0),E(x+M,g+M,1,1),E(x-M,g-M,0,0),E(x+M,g+M,1,1),E(x-M,g+M,0,1)},p=(x,y,g,M,L)=>m(x,y+.012,g,M,[0,0,0,L]),b=(x,y,g,M,L,H)=>m(x,y+.014,g,M,[L[0]*H,L[1]*H,L[2]*H,0]),v=(x,y)=>{let g=x.map(L=>L[0]),M=x.map(L=>L[1]);for(let L=Math.floor(Math.min(...g)/3)*3+1.5;L<Math.max(...g);L+=3)for(let H=Math.floor(Math.min(...M)/3)*3+1.5;H<Math.max(...M);H+=3){if(![[L-1.05,H-1.05],[L+1.05,H-1.05],[L+1.05,H+1.05],[L-1.05,H+1.05]].every(E=>Sn(E,x)))continue;let I=.8;n.quad([L-I,y,H+I],[L+I,y,H+I],[L+I,y,H-I],[L-I,y,H-I],R.panel,w.panel,[0,-1,0])}},T=Ue-ae,S=(x,y,g)=>{if(!y){n.prism(x.poly,g,g,R.plaster,w.plaster,{top:!1,sides:!1}),v(x.poly,g-.012);return}let M=(I,E)=>Ve(x.id,I,E),L=[M(N,0),M(N,N),M(W,N),M(W,0)],H=[M(N,N),M(W,W),M(W,N)],V=mo[y.mood],j=(I,E,F)=>{let[k,D]=M(I,E);n.annulus(k,D,.001,.065,g-.012,12,R.panel,{gloss:.1,emit:1.6}),n.annulus(k,D,.065,.11,g-.01,16,R.graphite,{...w.graphite,ao:F})};n.prism(H,g,g,R.darkCeiling,{...w.plaster,ao:pt},{top:!1,sides:!1});for(let[I,E]of[[N+5.6,N+2.4],[N+8.2,N+4.6],[N+8.4,N+1.6]])j(I,E,pt);if(Ko(y.mood))n.prism(L,g,g,R.plaster,{...w.plaster,ao:V},{top:!1,sides:!1}),v(L,g-.012);else{n.prism(L,g,g,R.darkCeiling,{...w.plaster,ao:V},{top:!1,sides:!1});for(let I of[N+2.1,N+7.3])for(let E of[1.4,3.8,6.2,8.6])j(I,E,V)}},P=(x,y,g,M,L,H,V)=>{let j=Math.hypot(y[0]-x[0],y[1]-x[1]),I=(y[0]-x[0])/j,E=(y[1]-x[1])/j,F=Math.max(8,Math.round(j/.11)),k=D=>{let B=D/F,O=B*Math.PI*2*(F/2),z=Math.sin(O)*L,Y=Math.cos(O)*L*Math.PI*2*(F/2)/j,le=-E-I*Y,oe=I-E*Y,ne=Math.hypot(le,oe);return[[x[0]+I*j*B-E*z,x[1]+E*j*B+I*z],[le/ne,oe/ne]]};for(let D=0;D<F;D++){let[B,O]=k(D),[z,Y]=k(D+1),le=[B[0],g,B[1]],oe=[z[0],g,z[1]],ne=[z[0],M,z[1]],de=[B[0],M,B[1]];n.vertex(le,[O[0],0,O[1]],H,V),n.vertex(oe,[Y[0],0,Y[1]],H,V),n.vertex(ne,[Y[0],0,Y[1]],H,V),n.vertex(le,[O[0],0,O[1]],H,V),n.vertex(ne,[Y[0],0,Y[1]],H,V),n.vertex(de,[O[0],0,O[1]],H,V)}},_=(x,y,g)=>{let M=ke(x.node),L=x.rooms,H=x.bay.id,V=(ce,xe)=>Ve(H,ce,xe),j=x.bay.inward,I=x.bay.along,E=X(M.accent),[F,k]=xs(M),D=g+T,B=!Ko(M.mood),{stele:O,screen:z,partition:Y}=Ie,le=mo[M.mood],oe=ce=>({...ce,ao:le}),ne=ce=>({...ce,ao:pt});n.wall(V(N+.2,.17),V(W-.02,.17),g,D,.04,F,oe(k));let de=Y.l,se=Y.thick/4;for(let[ce,xe,_e]of[[N+.02,Y.d0,g],[Y.d1,W-.02,g],[Y.d0,Y.d1,g+2.75]])n.wall(V(ce,de-se),V(xe,de-se),_e,D,2*se,F,oe(k)),n.wall(V(ce,de+se),V(xe,de+se),_e,D,2*se,R.fabric,ne(w.fabric));let Se=(Y.d0+Y.d1)/2;i.push({key:"theater:marquee",rect:ue(V(Se,de-2*se-.02),g+3.15,Pe(-I[0],-I[1]),2.1,.41,0)});let[pe,$e]=ys[M.stele],Q=O.d+O.thick/2;n.wall(V(Q,O.l0),V(Q,O.l1),g+.07,g+O.height,O.thick,pe,oe($e)),n.wall(V(Q,O.l0+.06),V(Q,O.l1-.06),g,g+.07,O.thick-.12,R.graphiteDeep,oe(w.graphite));for(let ce of[O.d+.055,O.d+O.thick-.055])n.wall(V(ce,O.l0+.08),V(ce,O.l1-.08),g+.012,g+.026,.008,E,w.line);n.wall(V(Q,O.l0+.02),V(Q,O.l1-.02),g+O.height,g+O.height+.012,O.thick-.04,E,w.line),fr(M.stele)&&n.wall(V(O.d-.002,O.l0+.08),V(O.d-.002,z.l0-.14),g+.14,g+O.height-.1,.004,X(po[M.stele]),oe({gloss:.12}));let Ae=Pe(-j[0],-j[1]),je=z.l1-z.l0,Ot=je*3/4,_o=g+z.bottom+Ot/2;n.wall(V(O.d-.0075,z.l0-.05),V(O.d-.0075,z.l1+.05),_o-Ot/2-.05,_o+Ot/2+.05,.015,R.blackGlass,oe(w.blackGlass)),l.push({kind:"store",node:x.node,level:y,rect:ue(x.display,_o,Ae,je,Ot,0)});let it=L.lettering;c.push({key:`stele:${x.node}`,node:x.node,level:y,station:"model",rect:ue(it.at,g+it.bottom+it.height/2,it.facing,it.width,it.height,0)});let cn=V(O.d-1.5,5);b(cn[0],g,cn[1],2.1,B?E:R.warm,B?.15:.05);let ge=L.print,No=g+ge.bottom+ge.height/2,Dt=ce=>j[0]*ce[0]+j[1]*ce[1],La=Dt(ge.at)-ge.width/2,_a=Dt(ge.at)+ge.width/2;n.wall(V(La-.05,de-2*se-.035),V(_a+.05,de-2*se-.035),No-ge.height/2-.05,No+ge.height/2+.05,.07,R.panel,{gloss:.2,emit:.32}),l.push({kind:"print",node:x.node,level:y,rect:ue(ge.at,No,ge.facing,ge.width,ge.height,0)}),c.push({key:`caption:${x.node}`,node:x.node,level:y,rect:ue(V(Dt(ge.at),de-2*se-.005),g+ge.bottom-.3,ge.facing,ge.width,ge.width/8,0)}),c.push({key:`lesson:${x.node}`,node:x.node,level:y,station:"lesson",rect:ue(x.panel.at,g+1.85,Pe(I[0],I[1]),4.3,2.5,0)});let lt=x.examples;c.push({key:`examples:${x.node}`,node:x.node,level:y,station:"examples",rect:ue(lt.at,g+lt.bottom+lt.height/2,lt.facing,lt.width,lt.height,0)});let[Bt,Ut]=x.holo.at;n.cylinder(Bt,Ut,.95,g,g+.18,40,R.steel,oe(w.steel)),n.annulus(Bt,Ut,.8,.86,g+.182,48,R.panel,w.line),n.annulus(Bt,Ut,.01,.76,g+.181,40,R.plaster,{gloss:.5,emit:B?.08:.18}),p(Bt,g,Ut,1.7,.22);let un=Dt(x.board.at),dn=I[0]*x.board.at[0]+I[1]*x.board.at[1];n.wall(V(un-.023,dn-x.board.width/2-.05),V(un-.023,dn+x.board.width/2+.05),g+x.board.bottom-.05,g+x.board.bottom+x.board.height+.05,.024,R.titanium,oe(w.titanium)),l.push({kind:"board",node:x.node,level:y,rect:ue(x.board.at,g+x.board.bottom+x.board.height/2,x.board.facing,x.board.width,x.board.height,0)});let xt=L.bench,Ht=xt.depth/2,We=[xt.a[0]-j[0]*Ht,xt.a[1]-j[1]*Ht],Ge=[xt.b[0]+j[0]*Ht,xt.b[1]+j[1]*Ht],[Na,Va]=B?[R.graphite,w.graphite]:[R.travertine,w.band];n.box([Math.min(We[0],Ge[0])+.04,g,Math.min(We[1],Ge[1])+.04],[Math.max(We[0],Ge[0])-.04,g+.06,Math.max(We[1],Ge[1])-.04],R.graphiteDeep,oe(w.graphite)),n.box([Math.min(We[0],Ge[0]),g+.06,Math.min(We[1],Ge[1])],[Math.max(We[0],Ge[0]),g+.44,Math.max(We[1],Ge[1])],Na,oe(Va)),p((We[0]+Ge[0])/2,g,(We[1]+Ge[1])/2,2.4,.14),n.prism(L.cinema.floor,g,g+.012,R.carpet,ne(w.carpet),{bottom:!1});let $t=Math.SQRT1_2;n.wall(V(N+.5+.17*$t,N+.5-.17*$t),V(W-.4+.17*$t,W-.4-.17*$t),g,D,.04,R.fabric,ne(w.fabric)),P(L.cinema.curtain[0],L.cinema.curtain[1],g+.02,D-.04,.05,R.fabric,ne(w.fabric));let fe=x.theater,Vo=ue(fe.at,g+fe.bottom+fe.height/2,fe.facing,fe.width,fe.height,0),fn=[Math.sin(fe.facing),-Math.cos(fe.facing)],hn=[Vo.u[0],Vo.u[2]],ct=(ce,xe)=>[fe.at[0]+hn[0]*ce+fn[0]*xe,fe.at[1]+hn[1]*ce+fn[1]*xe],ut=fe.width/2,Wt=g+fe.bottom+fe.height;n.wall(ct(-ut-.16,-.035),ct(ut+.16,-.035),g+fe.bottom-.16,Wt+.16,.04,R.blackGlass,ne({gloss:.45})),n.wall(ct(-ut-.1,-.012),ct(ut+.1,-.012),g+fe.bottom-.27,g+fe.bottom-.25,.02,R.warm,w.line),n.wall(ct(-ut-.1,-.012),ct(ut+.1,-.012),Wt+.25,Wt+.27,.02,R.warm,w.line),l.push({kind:"theater",node:x.node,level:y,rect:Vo}),i.push({key:"theater:marquee",rect:ue(fe.at,Wt+.62,fe.facing,3.4,.66,.02)});for(let ce of fe.seats){let[xe,_e]=ce,Gt=Math.atan2(fe.at[0]-xe,fe.at[1]-_e);n.cylinder(xe,_e,.14,g,g+.24,10,R.steel,ne(w.steel),{caps:!1}),n.cylinder(xe,_e,.42,g+.24,g+.3,16,R.steel,ne(w.steel)),n.cylinder(xe,_e,.4,g+.3,g+.5,16,R.leather,ne(w.leather)),n.cylinder(xe,_e,.42,g+.3,g+1.1,10,R.leather,ne(w.leather),{arc:[Gt+Math.PI-1.3,Gt+Math.PI+1.3]}),n.cylinder(xe,_e,.36,g+.5,g+1,10,R.leather,ne(w.leather),{arc:[Gt+Math.PI-1.15,Gt+Math.PI+1.15],inward:!0}),p(xe,g+.012,_e,.75,.24)}for(let ce=0;ce<6;ce++){let[xe,_e]=V(Se-.6-ce*.95,de+.36);b(xe,g+.013,_e,.11,R.warm,.7)}let Ke=L.installation,[Ia,Ca]=gs[M.mood];ea(o,M.installation,{at:Ke.at,bottom:g+Ke.bottom,top:g+Ke.top,along:Ke.along,inward:Ke.inward,span:Ke.span,depth:Ke.depth,ceiling:D},{body:Ia,material:oe(Ca),glow:E,seed:Es(x.node),light:le}),b(Ke.at[0]+j[0]*.8,g,Ke.at[1]+j[1]*.8,2.4,E,B?.12:.04)},U={graphite:[R.graphite,w.graphiteFloor],pale:[R.stoneFloor,w.stoneFloor],terrazzo:[R.terrazzo,w.terrazzoFloor]};for(let x of me){let y=x.y,g=x.index,M=Ts(g),L=new Set(x.stores.map(E=>E.bay.id)),H=o.vertexCount,V=n.vertexCount;for(let E of x.bays){let F=x.stores.find(O=>O.bay.id===E.id),k=F?ke(F.node):null,[D,B]=k?U[k.floor]:E.use==="lobby"?[R.lobbyFloor,w.stoneFloor]:[R.stoneFloor,w.stoneFloor];n.prism(E.poly,y-ae,y,D,k?{...B,ao:mo[k.mood]}:B,{bottom:!1}),S(E,k,y+T)}let j=[[[-$,$],[$,$],[N,N],[-N,N]],[[$,$],[$,-$],[N,-N],[N,N]],[[$,-$],[-$,-$],[-N,-N],[N,-N]],[[-$,-$],[-$,$],[-N,N],[-N,-N]]];for(let E of j)if(g===0)n.prism(E,y-ae,y,R.stoneFloor,w.stoneFloor,{bottom:!1});else{let F=E.reduce((D,B)=>D+B[0],0)/4,k=E.reduce((D,B)=>D+B[1],0)/4;d([F,y,k],()=>{let D=le=>[le[0],y-.02,le[1]],[B,O,z,Y]=E;B&&O&&z&&Y&&e.quad(D(B),D(O),D(z),D(Y),R.glassFloor,h(.5),[0,1,0])})}for(let[E,F]of ws($))n.wall(E,F,y-ae-.05,y+.02,.18,R.band,w.band),g>0&&n.wall(na(E,F,.12),na(F,E,.12),y-ae-.09,y-ae-.05,.05,R.panel,w.line);n.box([-Et,y-.3,Qt-.15],[Et,y,$+.05],R.stoneFloor,w.stoneFloor);for(let E of[-1,1])for(let F of[-1,1])n.wall([E*N,F*N],[E*W,F*W],y,y+T,.3,R.travertine,w.stoneWall);n.wall([N,0],[W,0],y,y+T,.3,R.travertine,w.stoneWall),n.wall([0,-N],[0,-W],y,y+T,.3,R.travertine,w.stoneWall),n.wall([-N,0],[-W,0],y,y+T,.3,R.travertine,w.stoneWall);for(let[E,F,k]of To()){for(let z=0;z<4;z++){let Y=z/4,le=(z+1)/4,oe=[E[0]+(F[0]-E[0])*Y,E[1]+(F[1]-E[1])*Y],ne=[E[0]+(F[0]-E[0])*le,E[1]+(F[1]-E[1])*le],de=[];if(g===0&&k[1]===1){let se=Math.min(oe[0],ne[0]),Se=Math.max(oe[0],ne[0]);Se<=-Ne||se>=Ne?de.push([oe,ne]):(se<-Ne&&de.push([[se,W],[-Ne,W]]),Se>Ne&&de.push([[Ne,W],[Se,W]]))}else de.push([oe,ne]);for(let[se,Se]of de)d([(se[0]+Se[0])/2,y+T/2,(se[1]+Se[1])/2],()=>e.pane(se,Se,y,y+T,R.facadeGlass,h(.34,.32)))}let D=[E[0]+k[0]*.31,E[1]+k[1]*.31],B=[F[0]+k[0]*.31,F[1]+k[1]*.31],O=(z,Y,le)=>{let oe=Math.hypot(Y[0]-z[0],Y[1]-z[1]);return[z[0]-(Y[0]-z[0])/oe*le,z[1]-(Y[1]-z[1])/oe*le]};if(g>0){n.wall(O(D,B,.31),O(B,D,.31),y-ae-.18,y+.14,.62,R.band,w.band);let z=[E[0]+k[0]*.625,E[1]+k[1]*.625],Y=[F[0]+k[0]*.625,F[1]+k[1]*.625];n.wall(z,Y,y-ae-.17,y-ae-.13,.01,M,w.line)}}i.push({key:`levelno:${g}`,rect:ue([-13.5,W+.64],y+3.1,Math.PI,7.2,1.8,0)});for(let[E,F]of Ss())d([(E[0]+F[0])/2,y+.55,(E[1]+F[1])/2],()=>e.pane(E,F,y,y+1.1,R.glass,h(.1))),n.wall(E,F,y+1.06,y+1.12,.07,R.steel,w.titanium);let I=Math.asin(Et/be)+.05;d([0,y+Ue/2,0],()=>{e.cylinder(0,0,be,y,y+2.7,26,R.glass,h(.08),{arc:[I,Math.PI*2-I]}),e.cylinder(0,0,be,y+2.7,y+Ue,30,R.glass,h(.08),{caps:!1})}),n.cylinder(0,0,be+.06,y-ae,y+.03,28,R.steel,w.steel,{caps:!1}),n.cylinder(0,0,be+.06,y+2.7,y+2.84,28,R.steel,w.steel,{caps:!1}),i.push({key:`level:${g}`,rect:ue([0,($+N)/2],y+4.82,0,4.2,.86,.075)}),i.push({key:`level:${g}`,rect:ue([0,($+N)/2],y+4.82,Math.PI,4.2,.86,.075)}),n.box([-2.16,y+4.36,($+N)/2-.06],[2.16,y+5.28,($+N)/2+.06],R.blackGlass,w.blackGlass);for(let E of[-1.7,1.7])n.box([E-.02,y+5.26,7.98],[E+.02,y+T,8.02],R.steel,w.steel);{let E=ue(ze,y+1.95,wn,2.9,2.2,.17),F=[ze[0]-E.u[0]*1.7,ze[1]-E.u[2]*1.7],k=[ze[0]+E.u[0]*1.7,ze[1]+E.u[2]*1.7];n.wall(F,k,y,y+3.4,.3,R.travertine,w.stoneWall),n.wall([F[0]+E.u[0]*.05,F[1]+E.u[2]*.05],[k[0]-E.u[0]*.05,k[1]-E.u[2]*.05],y+3.33,y+3.37,.31,M,w.line),l.push({kind:"directory",level:g,rect:E}),p(ze[0],y,ze[1],2.4,.14);for(let D of[-1,1])n.box([D*3.6-.05,y,16.2],[D*6.4+.05,y+.44,17],R.travertine,w.band),n.box([D*3.6,y+.44,16.25],[D*6.4,y+.47,16.95],R.graphite,w.graphite),p(D*5,y,16.6,2,.12)}for(let E of x.stores){let F=E.bay.inward,k=Pe(-F[0],-F[1]),[D,B]=E.bay.front,O=E.bay.along,z=[E.door[0]-O[0]*Tt,E.door[1]-O[1]*Tt],Y=[E.door[0]+O[0]*Tt,E.door[1]+O[1]*Tt];d([(D[0]+z[0])/2,y+2,(D[1]+z[1])/2],()=>e.pane(D,z,y,y+4,R.glass,h(.07))),d([(Y[0]+B[0])/2,y+2,(Y[1]+B[1])/2],()=>e.pane(Y,B,y,y+4,R.glass,h(.07))),n.wall(D,B,y+4,y+T,.36,R.travertine,w.stoneWall);let le=(Q,Ae)=>[Q[0]-O[0]*Ae,Q[1]-O[1]*Ae];for(let[Q,Ae]of[[z,1],[Y,-1]]){let je=le(Q,-Ae*.12);n.box([Math.min(Q[0],je[0])-Math.abs(F[0])*.22,y,Math.min(Q[1],je[1])-Math.abs(F[1])*.22],[Math.max(Q[0],je[0])+Math.abs(F[0])*.22,y+4.06,Math.max(Q[1],je[1])+Math.abs(F[1])*.22],R.steel,w.steel)}n.wall(le(z,.12),le(Y,-.12),y+3.98,y+4.1,.44,R.steel,w.steel);for(let Q of[D,B])n.box([Q[0]-.05,y,Q[1]-.05],[Q[0]+.05,y+4,Q[1]+.05],R.titanium,w.titanium);let oe=Q=>[Q[0]-F[0]*.19,Q[1]-F[1]*.19];n.wall(oe(D),oe(B),y+4.32,y+4.35,.02,M,w.line),i.push({key:`store:${E.node}`,rect:ue(E.door,y+4.85,k,5.6,.95,.2)});let ne=Q=>[Q[0]+F[0]*.06,Q[1]+F[1]*.06],de=ne([(D[0]+z[0])/2,(D[1]+z[1])/2]),se=ne([(Y[0]+B[0])/2,(Y[1]+B[1])/2]);c.push({key:`banner:${E.node}`,node:E.node,level:g,rect:ue(de,y+2.05,k,2.2,3.1,0)}),l.push({kind:"window",node:E.node,level:g,rect:ue(se,y+2.25,k,2.4,1.8,0)});let Se=Ve(E.bay.id,N-.78,9.25),pe=Ve(E.bay.id,N,9.25),$e=Ve(E.bay.id,N-1.45,9.25);n.wall(pe,$e,y+3.84,y+3.89,.04,R.steel,w.steel),i.push({key:`blade:${E.node}`,rect:ue(Se,y+3.45,Pe(O[0],O[1]),1.3,.62,.02)}),i.push({key:`blade:${E.node}`,rect:ue(Se,y+3.45,Pe(-O[0],-O[1]),1.3,.62,.02)}),_(E,g,y),c.push({key:`medallion:${E.node}`,node:E.node,level:g,rect:$o(E.medallion,y+.016,Pe(F[0],F[1]),2.3,2.3)});for(let Q of Zt){let Ae=E.stations[Q],je=[Ae.p[0]+Math.sin(Ae.heading)*.95,Ae.p[1]-Math.cos(Ae.heading)*.95];i.push({key:`station:${Q}`,rect:$o(je,y+.018,Ae.heading,1.3,.46)})}}for(let E of x.lounges)Ms(n,E,y,f,u);r.push({first:H,count:o.vertexCount-H}),t.push({first:V,count:n.vertexCount-V})}for(let x of[me[ft-1]])if(x){for(let y of x.bays)n.prism(y.poly,te-ae,te,R.band,w.band,{bottom:!1});for(let y of[[[-$,$],[$,$],[N,N],[-N,N]],[[$,$],[$,-$],[N,-N],[N,N]],[[$,-$],[-$,-$],[-N,-N],[N,-N]],[[-$,-$],[-$,$],[-N,N],[-N,-N]]])n.prism(y,te-ae,te,R.band,w.band,{bottom:!1}),n.prism(y,te-ae,te-ae,R.plaster,w.plaster,{top:!1,sides:!1})}d([0,te,0],()=>e.quad([-$,te,-$],[$,te,-$],[$,te,$],[-$,te,$],R.facadeGlass,h(.2,.08),[0,1,0]));for(let[x,y,g]of To()){let M=[x[0]+g[0]*.31,x[1]+g[1]*.31],L=[y[0]+g[0]*.31,y[1]+g[1]*.31],H=Math.hypot(L[0]-M[0],L[1]-M[1]),V=(L[0]-M[0])/H,j=(L[1]-M[1])/H;n.wall([M[0]-V*.31,M[1]-j*.31],[L[0]+V*.31,L[1]+j*.31],te-ae-.18,te+1.1,.62,R.band,w.band);let I=[x[0]+g[0]*.625,x[1]+g[1]*.625],E=[y[0]+g[0]*.625,y[1]+g[1]*.625];n.wall(I,E,te-ae-.17,te-ae-.13,.01,R.panel,w.line);let F=B=>[B[0]-g[0]*1.2,B[1]-g[1]*1.2];n.wall(F(x),F(y),te,te+ta,.4,R.band,w.band);let k=[(F(x)[0]+F(y)[0])/2,(F(x)[1]+F(y)[1])/2];i.push({key:"crown",rect:ue(k,te+ta/2+.1,Pe(g[0],g[1]),22,1.75,.21)});let D=B=>[B[0]+g[0]*.205,B[1]+g[1]*.205];n.wall(D(F(x)),D(F(y)),te+.22,te+.26,.01,R.runner,w.line)}d([0,te+2,0],()=>e.cylinder(0,0,be,te,te+3.4,30,R.glass,h(.1),{caps:!1})),n.cylinder(0,0,be+.08,te+3.4,te+3.62,36,R.steel,w.steel);{let y=te+1.1;for(let[g,M,L]of To()){let H=Math.hypot(M[0]-g[0],M[1]-g[1]),V=(M[0]-g[0])/H,j=(M[1]-g[1])/H;for(let I=1;I<Math.round(H/2.5);I++){let E=[g[0]+V*I*2.5,g[1]+j*I*2.5],F=L[1]===1&&Math.abs(E[0])<=Ne+.7?4.32:-.02,k=[E[0]+L[0]*.02,E[1]+L[1]*.02],D=[E[0]+L[0]*.62,E[1]+L[1]*.62];n.wall(k,D,F,y,.14,R.fin,w.titanium)}}for(let g of[-1,1])for(let M of[-1,1])n.box([g*W-.45+g*.17,-.02,M*W-.45+M*.17],[g*W+.45+g*.17,y+.02,M*W+.45+M*.17],R.band,w.band);for(let[g,M,L]of To()){let H=[g[0]+L[0]*.31,g[1]+L[1]*.31],V=[M[0]+L[0]*.31,M[1]+L[1]*.31];L[1]===1?(n.wall(H,[-Ne-.7,H[1]],-.02,.32,.62,R.graphite,w.graphite),n.wall([Ne+.7,V[1]],V,-.02,.32,.62,R.graphite,w.graphite)):n.wall(H,V,-.02,.32,.62,R.graphite,w.graphite)}}{n.box([-4.4,4.06,W+.1],[4.4,4.32,W+3.6],R.steel,w.steel),n.quad([-4.2,4.055,W+3.4],[4.2,4.055,W+3.4],[4.2,4.055,W+.3],[-4.2,4.055,W+.3],R.panel,{gloss:.1,emit:.55},[0,-1,0]);for(let x of[-1,1])n.box([x*(Ne+.36)-.34,-.02,W-.1],[x*(Ne+.36)+.34,4.06,W+.75],R.band,w.band);i.push({key:"entrance",rect:ue([0,W+.12],4.95,Math.PI,7.6,1.3,.05)}),p(0,0,W+2.2,4.2,.1)}n.annulus(0,0,.01,54,-.02,120,R.paving,w.paving);for(let x of[29,38,47])n.annulus(0,0,x-.3,x+.3,-.015,160,R.graphite,w.graphite);n.cylinder(0,0,55,-.5,.04,120,R.graphite,w.graphite,{caps:!1}),n.annulus(0,0,54,55,.04,120,R.graphite,w.graphite),n.cylinder(0,0,54,-.5,.04,120,R.graphite,w.graphite,{caps:!1,inward:!0}),n.annulus(0,0,55,96,-.12,160,R.water,w.water),n.cylinder(0,0,96,-.12,-.02,160,R.graphite,w.graphite,{caps:!1,inward:!0}),n.annulus(0,0,96,97.2,-.02,160,R.graphite,w.graphite),n.annulus(0,0,97.2,2400,-.04,160,R.plateau,w.plateau);for(let x of[-1,1]){let y=x*9.5,g=W+12;n.cylinder(y,g,2.7,-.02,.32,56,R.steel,w.steel),n.annulus(y,g,2.45,2.7,.32,64,R.steel,w.steel),n.annulus(y,g,.01,2.45,.3,56,R.soil,w.matte),n.annulus(y,g,2.72,2.78,.004,64,R.panel,w.line),sa(n,y,.3,g,1.45,x>0?.6:2.4)}n.quad([-.035,0,W+3.7],[.035,0,W+3.7],[.035,0,44],[-.035,0,44],R.runnerInlay,{gloss:.8},[0,1,0]);for(let x=0;x<260;x++){let y=f()*Math.PI*2,g=be+.5+f()*($-be-.9);u.push(Math.sin(y)*g,f()*te,Math.cos(y)*g,.01+f()*.018,f(),te,.04+f()*.08)}let G=new nt;return G.cylinder(0,0,be-.12,-.18,.01,40,R.graphite,w.graphiteFloor),G.annulus(0,0,be-.32,be-.26,.015,48,R.panel,w.line),G.cylinder(0,0,be-.12,2.58,2.66,40,R.steel,w.steel),G.annulus(0,0,.3,.55,2.575,32,R.panel,w.panel),{opaque:n.toArray(),glass:e.toArray(),glassPieces:a,decals:new Float32Array(s),signs:i,screens:l,overlays:c,bubbles:new Float32Array(u),cab:G.toArray(),detail:o.toArray(),detailLevels:r,opaqueLevels:t}}function sa(n,e,o,r,t,a){let s=(u,f,d)=>[e+(u*Math.cos(a)-d*Math.sin(a))*t,o+f*t,r+(u*Math.sin(a)+d*Math.cos(a))*t],i=[s(0,0,0),s(.32,.68,.08),s(-.22,1.38,-.06),s(.18,2.03,.05),s(-.05,2.53,0)],l=[.21,.15,.11,.075,.045];for(let u=1;u<i.length;u++){let f=i[u-1],d=i[u];f&&d&&oa(n,f,d,(l[u-1]??.05)*t,(l[u]??.04)*t,10,R.bark,w.bark)}let c=[[s(.32,.68,.08),s(1.1,.98,.3),.85],[s(-.22,1.38,-.06),s(-1.05,1.58,-.35),.8],[s(.18,2.03,.05),s(.85,2.23,-.4),.7],[s(-.05,2.53,0),s(-.05,2.78,.05),.75],[s(-.22,1.38,-.06),s(-.2,1.58,.75),.6]];for(let[u,f,d]of c)oa(n,u,f,.05*t,.03*t,6,R.bark,w.bark),n.sphere(f,d*t,12,R.foliage,w.foliage,.32),n.sphere([f[0]+d*t*.3,f[1]+d*t*.16,f[2]-d*t*.2],d*t*.62,10,R.foliageLight,w.foliage,.36)}function Ms(n,e,o,r,t){let[a,s]=Ve(e.id,15,6);n.cylinder(a,s,1.55,o,o+.5,40,R.graphiteDeep,w.graphite),n.annulus(a,s,1.42,1.55,o+.5,48,R.steel,w.steel),n.annulus(a,s,.01,1.42,o+.47,40,R.soil,w.matte),n.annulus(a,s,1.56,1.6,o+.006,48,R.panel,w.line),sa(n,a,o+.47,s,1,r()*Math.PI*2);let[i,l]=Ve(e.id,13,11);n.cylinder(i,l,1.9,o,o+.34,40,R.graphiteDeep,w.graphite,{caps:!1}),n.annulus(i,l,1.78,1.9,o+.34,48,R.graphite,w.graphite),n.annulus(i,l,.01,1.78,o+.33,48,R.water,w.water);let c=Ve(e.id,17.2,2.5),u=Ve(e.id,17.2,6.5);n.box([Math.min(c[0],u[0])-.36,o,Math.min(c[1],u[1])-.36],[Math.max(c[0],u[0])+.36,o+.44,Math.max(c[1],u[1])+.36],R.travertine,w.band);for(let f=0;f<24;f++)t.push(a+(r()-.5)*5,o+r()*4,s+(r()-.5)*5,.008+r()*.012,r(),5.2,.03+r()*.05)}function To(){let n=W;return[[[-n,n],[n,n],[0,1]],[[n,n],[n,-n],[1,0]],[[n,-n],[-n,-n],[0,-1]],[[-n,-n],[-n,n],[-1,0]]]}function ws(n){return[[[-n,n],[n,n]],[[n,n],[n,-n]],[[n,-n],[-n,-n]],[[-n,-n],[-n,n]]]}function na(n,e,o){let r=Math.hypot(e[0]-n[0],e[1]-n[1]);return[n[0]+(e[0]-n[0])/r*o,n[1]+(e[1]-n[1])/r*o]}function Ss(){let n=$,e=Et;return[[[-n,n],[-e,n]],[[e,n],[n,n]],[[n,n],[n,-n]],[[n,-n],[-n,-n]],[[-n,-n],[-n,n]],[[-e,Qt],[-e,n]],[[e,Qt],[e,n]]]}var As=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),Fs=[.89,.137,.173],Ps=[.55,.64,.73],Ls=[.77,.525,0];function re(n,e,o,r,t=0){let a=d=>d.replace(`#version 300 es
`,`#version 300 es
#define Q ${t}
`),s=(d,h)=>{let m=n.createShader(d);if(!m)throw new Error(`${r}: cannot create shader`);if(n.shaderSource(m,a(h)),n.compileShader(m),!n.getShaderParameter(m,n.COMPILE_STATUS))throw new Error(`${r}: ${n.getShaderInfoLog(m)??"compile failed"}`);return m},i=n.createProgram();if(!i)throw new Error(`${r}: cannot create program`);let l=s(n.VERTEX_SHADER,e),c=s(n.FRAGMENT_SHADER,o);if(n.attachShader(i,l),n.attachShader(i,c),n.linkProgram(i),!n.getProgramParameter(i,n.LINK_STATUS))throw new Error(`${r}: ${n.getProgramInfoLog(i)??"link failed"}`);n.deleteShader(l),n.deleteShader(c);let u=new Map,f=n.getProgramParameter(i,n.ACTIVE_UNIFORMS);for(let d=0;d<f;d++){let h=n.getActiveUniform(i,d);h&&u.set(h.name,n.getUniformLocation(i,h.name))}return{p:i,u}}function _s(n,e){let o=r=>{let t=r*e;return Math.min(1,Math.max(0,t*(2.51*t+.03)/(t*(2.43*t+.59)+.14)))**.45454545454545453};return[o(n[0]),o(n[1]),o(n[2])]}var Ro=class n{gl;tier;prog;post=null;vaos;counts={opaque:0,cab:0,decal:0,signs:0,bubbles:0,detail:0};overlayNormals;world;skyTex=null;skyLod=6;atlasTex=null;black;shadowTex=null;shadowMat=new Float32Array(16);shadowTexel=1/2048;shadowBias=2e-4;screenTex=new Map;ribbonCount=0;ribbonLength=0;ribbonBuf;flatBuf;signBuf;leaderBuf;reticleBuf;shell=null;beam=null;studyGpu=null;holoGpu=new Map;order;dist;scene=null;hdr=null;mirror=null;bloom=[];samples=4;mirrorVP=new Float32Array(16);mirrorInv=new Float32Array(16);reflect=new Float32Array(16);constructor(e,o,r){this.gl=e,this.world=o,this.tier=r,this.prog=this.programs(r==="cinematic"?1:0),r==="cinematic"&&(this.post=this.postPrograms());let t=i=>this.vao(i,[3,3,3,4]);this.counts.opaque=o.opaque.length/Pt,this.counts.cab=o.cab.length/Pt,this.counts.decal=o.decals.length/ra,this.counts.bubbles=o.bubbles.length/tn,this.counts.detail=o.detail.length/Pt;let a=new Float32Array(o.screens.length*30);o.screens.forEach((i,l)=>a.set(lo(i.rect),l*30));let s=new Float32Array(o.overlays.length*30);o.overlays.forEach((i,l)=>s.set(lo(i.rect),l*30)),this.signBuf=e.createBuffer(),this.ribbonBuf=e.createBuffer(),this.flatBuf=e.createBuffer(),this.leaderBuf=e.createBuffer(),this.reticleBuf=e.createBuffer(),this.vaos={opaque:t(o.opaque),glass:t(o.glass),cab:t(o.cab),detail:t(o.detail),decal:this.vao(o.decals,[3,2,4,1]),full:this.vao(new Float32Array([-1,-1,3,-1,-1,3]),[2]),signs:this.vaoFor(this.signBuf,[3,2]),screens:this.vao(a,[3,2]),overlays:this.vao(s,[3,2]),bubbles:this.bubbleVao(o.bubbles),ribbon:this.vaoFor(this.ribbonBuf,[3,2]),flat:this.vaoFor(this.flatBuf,[3]),leaders:this.vaoFor(this.leaderBuf,[3]),reticles:this.vaoFor(this.reticleBuf,[3,3])},this.overlayNormals=o.overlays.map(i=>rt(i.rect)),this.order=o.glassPieces.map((i,l)=>l),this.dist=new Float32Array(o.glassPieces.length),this.black=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),this.makeSky(),this.makeShadows()}programs(e){let o=this.gl;return{lit:re(o,go,en,"lit",e),litClip:e===1?re(o,go,vr,"lit (mirror)",e):null,glass:re(o,go,yr,"glass",e),sky:re(o,qe,gr,"sky",e),tex:re(o,Rr,Mr,"textured",e),decal:re(o,wr,Sr,"decal",e),mote:re(o,Ar,Fr,"motes",e),ribbon:re(o,Pr,Lr,"ribbon",e),flat:re(o,_r,Nr,"flat",e),shell:re(o,Nt,Vr,"hologram shell",e),organ:re(o,Nt,Ir,"hologram organs",e),line:re(o,Or,Dr,"hologram lines",e),reticle:re(o,Br,Ur,"hologram targets",e),beam:re(o,Nt,Cr,"hologram beam",e),dim:re(o,qe,Hr,"house lights",e),studyTable:re(o,kr,Xr,"study table",e),studyBeam:re(o,Nt,Yr,"study spotlight",e),studyHolo:re(o,jr,Kr,"study hologram",e),studyDim:re(o,qe,qr,"study lights",e),studyGlow:re(o,Qr,Zr,"study claim",e)}}postPrograms(){let e=this.gl;return{pre:re(e,qe,$r,"bloom"),down:re(e,qe,Wr,"bloom down"),up:re(e,qe,Gr,"bloom up"),composite:re(e,qe,zr,"composite")}}setTier(e){if(e===this.tier||e==="cinematic")return;let o=this.gl,r=this.prog;this.prog=this.programs(0);for(let t of Object.values(r))t&&o.deleteProgram(t.p);if(this.post)for(let t of Object.values(this.post))o.deleteProgram(t.p);this.post=null,this.freeTargets(),this.tier="basic"}vao(e,o){let r=this.gl,t=r.createBuffer();return r.bindBuffer(r.ARRAY_BUFFER,t),r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW),this.vaoFor(t,o)}vaoFor(e,o){let r=this.gl,t=r.createVertexArray();r.bindVertexArray(t),r.bindBuffer(r.ARRAY_BUFFER,e);let a=o.reduce((i,l)=>i+l,0)*4,s=0;return o.forEach((i,l)=>{r.enableVertexAttribArray(l),r.vertexAttribPointer(l,i,r.FLOAT,!1,a,s),s+=i*4}),r.bindVertexArray(null),t}bubbleVao(e){let o=this.gl,r=o.createVertexArray();o.bindVertexArray(r);let t=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,t),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),o.STATIC_DRAW),o.enableVertexAttribArray(0),o.vertexAttribPointer(0,2,o.FLOAT,!1,0,0);let a=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,a),o.bufferData(o.ARRAY_BUFFER,e,o.STATIC_DRAW);let s=tn*4;return o.enableVertexAttribArray(1),o.vertexAttribPointer(1,3,o.FLOAT,!1,s,0),o.vertexAttribDivisor(1,1),o.enableVertexAttribArray(2),o.vertexAttribPointer(2,4,o.FLOAT,!1,s,12),o.vertexAttribDivisor(2,1),o.bindVertexArray(null),r}makeSky(){let e=this.gl,o=this.tier==="cinematic",r=2048,t=r/2,a=e.createTexture();e.bindTexture(e.TEXTURE_2D,a),o?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,r,t,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,r,t,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let s=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0);let i=re(e,qe,xr,"skygen");e.viewport(0,0,r,t),e.disable(e.DEPTH_TEST),e.disable(e.BLEND),e.useProgram(i.p),e.uniform3f(i.u.get("uSun")??null,et[0],et[1],et[2]),e.bindVertexArray(this.vaos.full),e.drawArrays(e.TRIANGLES,0,3),e.bindVertexArray(null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(s),e.deleteProgram(i.p),e.bindTexture(e.TEXTURE_2D,a),e.generateMipmap(e.TEXTURE_2D),this.skyTex=a,this.skyLod=Math.log2(r)-3}makeShadows(){let e=this.gl,o=e.getParameter(e.MAX_TEXTURE_SIZE),r=this.tier==="cinematic"&&o>=4096?3072:2048,t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),e.texStorage2D(e.TEXTURE_2D,1,e.DEPTH_COMPONENT24,r,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_COMPARE_FUNC,e.LEQUAL);let a=e.createFramebuffer();if(e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,t,0),e.drawBuffers([e.NONE]),e.readBuffer(e.NONE),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE){e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(a),e.deleteTexture(t);return}let s=new Float32Array(16),i=[0,18,0];ao(s,[i[0]+et[0]*200,i[1]+et[1]*200,i[2]+et[2]*200],i);let l=1/0,c=-1/0,u=1/0,f=-1/0,d=1/0,h=-1/0;for(let b of[-82,82])for(let v of[-1.5,48])for(let T of[-82,82]){let S=(s[0]??0)*b+(s[4]??0)*v+(s[8]??0)*T+(s[12]??0),P=(s[1]??0)*b+(s[5]??0)*v+(s[9]??0)*T+(s[13]??0),_=(s[2]??0)*b+(s[6]??0)*v+(s[10]??0)*T+(s[14]??0);l=Math.min(l,S),c=Math.max(c,S),u=Math.min(u,P),f=Math.max(f,P),d=Math.min(d,_),h=Math.max(h,_)}let m=new Float32Array(16);tr(m,l,c,u,f,-h-5,-d+5),Ft(this.shadowMat,m,s);let p=re(e,Er,Tr,"shadow");e.viewport(0,0,r,r),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.depthMask(!0),e.disable(e.BLEND),e.clear(e.DEPTH_BUFFER_BIT),e.useProgram(p.p),e.uniformMatrix4fv(p.u.get("uViewProj")??null,!1,this.shadowMat),e.bindVertexArray(this.vaos.opaque),e.enable(e.POLYGON_OFFSET_FILL),e.polygonOffset(1.5,3),e.drawArrays(e.TRIANGLES,0,this.counts.opaque),e.bindVertexArray(this.vaos.detail),e.drawArrays(e.TRIANGLES,0,this.counts.detail),e.disable(e.POLYGON_OFFSET_FILL),e.bindVertexArray(null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(a),e.deleteProgram(p.p),this.shadowTex=t,this.shadowTexel=1/r,this.shadowBias=.05/(h-d+10)}setAtlas(e){let o=this.gl,r=o.createTexture();o.bindTexture(o.TEXTURE_2D,r),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,e.canvas),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.generateMipmap(o.TEXTURE_2D),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR_MIPMAP_LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),this.atlasTex=r;let t=[];for(let a of this.world.signs){let s=e.rects.get(a.key);if(!s)continue;let i=lo(a.rect);for(let l=0;l<6;l++){let c=l*5,u=i[c+3]??0,f=i[c+4]??0;t.push(i[c]??0,i[c+1]??0,i[c+2]??0,s.u0+(s.u1-s.u0)*u,s.v0+(s.v1-s.v0)*f)}}o.bindBuffer(o.ARRAY_BUFFER,this.signBuf),o.bufferData(o.ARRAY_BUFFER,new Float32Array(t),o.STATIC_DRAW),this.counts.signs=t.length/5}static screenKey(e){return e.kind==="directory"?`directory:${e.level}`:e.kind==="window"?`store:${e.node??""}`:`${e.kind}:${e.node??""}`}screenGrade(e){return this.screenTex.get(e)?.grade??0}setScreenImage(e,o,r,t,a=!1){let s=this.gl,i=this.screenTex.get(e);if(i&&i.grade>r)return;let l=i?.tex&&i.grade!==4?i.tex:s.createTexture();s.bindTexture(s.TEXTURE_2D,l),a&&s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,o),a&&s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t&&s.generateMipmap(s.TEXTURE_2D),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,t?s.LINEAR_MIPMAP_LINEAR:s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),this.screenTex.set(e,{tex:l,grade:r,lastUsed:performance.now()})}setScreenTexture(e,o,r=null){let t=this.screenTex.get(e)??null;return o?this.screenTex.set(e,{tex:o,grade:4,lastUsed:performance.now()}):r?this.screenTex.set(e,r):this.screenTex.delete(e),t}evict(e){for(let[o,r]of this.screenTex)r.grade!==3||e(o)||(this.gl.deleteTexture(r.tex),this.screenTex.delete(o));for(let[o,r]of this.holoGpu)e(`holo:${o}`)||(this.freeHolo(r),this.holoGpu.delete(o))}setRibbon(e){let o=this.gl;if(!e||e.length<2){this.ribbonCount=0;return}let r=.26,t=[],a=0;for(let s=1;s<e.length;s++){let i=e[s-1],l=e[s];if(!i||!l)continue;let c=l[0]-i[0],u=l[2]-i[2],f=Math.hypot(c,u);if(f<.001)continue;let d=-u/f*r,h=c/f*r,m=(p,b,v)=>t.push(p[0]+d*b,p[1]+.03,p[2]+h*b,v,b);m(i,-1,a),m(l,-1,a+f),m(l,1,a+f),m(i,-1,a),m(l,1,a+f),m(i,1,a),a+=f}o.bindBuffer(o.ARRAY_BUFFER,this.ribbonBuf),o.bufferData(o.ARRAY_BUFFER,new Float32Array(t),o.DYNAMIC_DRAW),this.ribbonCount=t.length/5,this.ribbonLength=a}draw(e,o,r){if(this.tier==="cinematic"){try{if(this.drawCinematic(e,o,r))return}catch(a){console.warn("XI Outlet: the cinematic renderer failed; using the basic one",a)}this.setTier("basic")}let t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,null),this.drawScene(e,{viewProj:e.viewProj,invViewProj:e.invViewProj,eye:e.eye,mirror:!1,clipY:0,w:o,h:r},!0)}drawCinematic(e,o,r){let t=this.gl;if(!this.ensureTargets(o,r))return!1;let a=this.scene,s=this.hdr,i=this.post;if(!a||!s||!i)return!1;if(e.mirrorY!==null&&this.mirror){let d=e.mirrorY,h=this.reflect;h.set([1,0,0,0,0,-1,0,0,0,0,1,0,0,2*d,0,1]),Ft(this.mirrorVP,e.viewProj,h),so(this.mirrorInv,this.mirrorVP),t.bindFramebuffer(t.FRAMEBUFFER,this.mirror.fbo),this.drawScene(e,{viewProj:this.mirrorVP,invViewProj:this.mirrorInv,eye:[e.eye[0],2*d-e.eye[1],e.eye[2]],mirror:!0,clipY:d,w:this.mirror.w,h:this.mirror.h},!1)}t.bindFramebuffer(t.FRAMEBUFFER,a.fbo),this.drawScene(e,{viewProj:e.viewProj,invViewProj:e.invViewProj,eye:e.eye,mirror:!1,clipY:0,w:o,h:r},!1),t.bindFramebuffer(t.READ_FRAMEBUFFER,a.fbo),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,s.fbo),t.blitFramebuffer(0,0,o,r,0,0,o,r,t.COLOR_BUFFER_BIT,t.NEAREST),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.disable(t.DEPTH_TEST),t.disable(t.BLEND),t.depthMask(!1),t.bindVertexArray(this.vaos.full),t.activeTexture(t.TEXTURE0);let l=(d,h,m)=>{t.bindFramebuffer(t.FRAMEBUFFER,m.fbo),t.viewport(0,0,m.w,m.h),t.useProgram(d.p),t.bindTexture(t.TEXTURE_2D,h.tex),t.uniform1i(d.u.get("uTex")??null,0),t.uniform2f(d.u.get("uTexel")??null,1/h.w,1/h.h),t.drawArrays(t.TRIANGLES,0,3)},c=this.bloom,u=c[0];if(u){t.useProgram(i.pre.p),t.uniform1f(i.pre.u.get("uThreshold")??null,Re.bloomThreshold),l(i.pre,s,u);for(let d=1;d<c.length;d++){let h=c[d-1],m=c[d];h&&m&&l(i.down,h,m)}t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE);for(let d=c.length-1;d>0;d--){let h=c[d],m=c[d-1];h&&m&&l(i.up,h,m)}t.disable(t.BLEND)}t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,o,r);let f=i.composite;return t.useProgram(f.p),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,s.tex),t.uniform1i(f.u.get("uScene")??null,0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,u?.tex??this.black),t.uniform1i(f.u.get("uBloom")??null,1),t.activeTexture(t.TEXTURE0),t.uniform1f(f.u.get("uBloomStrength")??null,u?Re.bloomStrength:0),t.uniform1f(f.u.get("uExposure")??null,e.exposure),t.uniform1f(f.u.get("uGrain")??null,Re.grain),t.uniform1f(f.u.get("uTime")??null,e.time),t.drawArrays(t.TRIANGLES,0,3),t.bindVertexArray(null),t.depthMask(!0),!0}ensureTargets(e,o){if(this.scene&&this.scene.w===e&&this.scene.h===o)return!0;this.freeTargets();let r=this.gl;if(!r.getExtension("EXT_color_buffer_float"))return!1;let t=r.getInternalformatParameter(r.RENDERBUFFER,r.RGBA16F,r.SAMPLES);this.samples=Math.min(4,t&&t.length>0?t[0]??0:0);let a=(c,u)=>{let f=r.createTexture();return r.bindTexture(r.TEXTURE_2D,f),r.texImage2D(r.TEXTURE_2D,0,r.RGBA16F,c,u,0,r.RGBA,r.HALF_FLOAT,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),f},s=()=>r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;{let c=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,c);let u=r.createRenderbuffer();r.bindRenderbuffer(r.RENDERBUFFER,u),this.samples>0?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,r.RGBA16F,e,o):r.renderbufferStorage(r.RENDERBUFFER,r.RGBA16F,e,o),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,u);let f=r.createRenderbuffer();r.bindRenderbuffer(r.RENDERBUFFER,f),this.samples>0?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,r.DEPTH_COMPONENT24,e,o):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT24,e,o),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,f);let d=[u,f].filter(h=>h!==null);if(this.scene={fbo:c,tex:null,rbs:d,w:e,h:o},!s())return this.failTargets()}{let c=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,c);let u=a(e,o);if(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,u,0),this.hdr={fbo:c,tex:u,rbs:[],w:e,h:o},!s())return this.failTargets()}{let c=Math.max(1,Math.round(e/2)),u=Math.max(1,Math.round(o/2)),f=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,f);let d=a(c,u);r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,d,0);let h=r.createRenderbuffer();if(r.bindRenderbuffer(r.RENDERBUFFER,h),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT24,c,u),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,h),this.mirror={fbo:f,tex:d,rbs:h?[h]:[],w:c,h:u},!s())return this.failTargets()}let i=e,l=o;for(let c=0;c<5;c++){i=Math.max(1,Math.round(i/2)),l=Math.max(1,Math.round(l/2));let u=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,u);let f=a(i,l);if(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,f,0),this.bloom.push({fbo:u,tex:f,rbs:[],w:i,h:l}),!s())return this.failTargets()}return r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindRenderbuffer(r.RENDERBUFFER,null),!0}failTargets(){return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.freeTargets(),!1}freeTargets(){let e=this.gl;for(let o of[this.scene,this.hdr,this.mirror,...this.bloom])if(o){e.deleteFramebuffer(o.fbo),e.deleteTexture(o.tex);for(let r of o.rbs)e.deleteRenderbuffer(r)}this.scene=null,this.hdr=null,this.mirror=null,this.bloom=[]}drawScene(e,o,r){let t=this.gl,a=this.prog;t.viewport(0,0,o.w,o.h),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.disable(t.CULL_FACE),t.disable(t.BLEND),t.depthMask(!0);let s=!o.mirror&&!r&&e.mirrorY!==null&&this.mirror!==null,i=_s(Re.fog,e.exposure);t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.skyTex),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.shadowTex),t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,s?this.mirror?.tex??this.black:this.black),t.activeTexture(t.TEXTURE0);let l=m=>{t.useProgram(m.p);let p=(P,_)=>{let U=m.u.get(P);U&&t.uniform1f(U,_)},b=(P,_)=>{let U=m.u.get(P);U&&t.uniform3f(U,_[0]??0,_[1]??0,_[2]??0)};t.uniformMatrix4fv(m.u.get("uViewProj")??null,!1,o.viewProj),b("uCamPos",o.eye),b("uSun",et),b("uSunColor",Re.sun),b("uSkyAmb",Re.sky),b("uGroundAmb",Re.ground),b("uInterior",Re.interior),p("uPanel",Re.panel),p("uEmitGain",Re.emit),b("uFog",Re.fog),b("uFogDisplay",i),p("uFogDensity",Re.fogDensity),p("uTime",e.time),p("uDirect",r?1:0),p("uExposure",e.exposure),p("uSkyLod",this.skyLod),p("uClip",o.mirror?1:0),p("uClipY",o.clipY),p("uMirrorOn",s?1:0),p("uMirrorY",e.mirrorY??-1e3);let v=m.u.get("uViewport");v&&t.uniform2f(v,o.w,o.h),p("uShadowOn",this.shadowTex?1:0),p("uShadowTexel",this.shadowTexel),p("uShadowBias",this.shadowBias);let T=m.u.get("uShadowMat");T&&t.uniformMatrix4fv(T,!1,this.shadowMat);let S=(P,_)=>{let U=m.u.get(P);U&&t.uniform1i(U,_)};S("uSky",1),S("uShadow",2),S("uMirror",3)},c=o.mirror?a.litClip??a.lit:a.lit;l(c),t.uniform3f(c.u.get("uOffset")??null,0,0,0),t.bindVertexArray(this.vaos.opaque);let u=e.level===null?void 0:this.world.opaqueLevels[e.level];if(u&&u.count>0){t.drawArrays(t.TRIANGLES,u.first,u.count),u.first>0&&t.drawArrays(t.TRIANGLES,0,u.first);let m=u.first+u.count;m<this.counts.opaque&&t.drawArrays(t.TRIANGLES,m,this.counts.opaque-m)}else t.drawArrays(t.TRIANGLES,0,this.counts.opaque);t.uniform3f(c.u.get("uOffset")??null,0,e.cabY,0),t.bindVertexArray(this.vaos.cab),t.drawArrays(t.TRIANGLES,0,this.counts.cab);let f=e.level===null?void 0:this.world.detailLevels[e.level];f&&f.count>0&&(t.uniform3f(c.u.get("uOffset")??null,0,0,0),t.bindVertexArray(this.vaos.detail),t.drawArrays(t.TRIANGLES,f.first,f.count)),l(a.tex),t.uniform1i(a.tex.u.get("uTex")??null,0),t.bindVertexArray(this.vaos.screens);let d=performance.now();this.world.screens.forEach((m,p)=>{let b=n.screenKey(m),v=this.screenTex.get(b);v&&(v.lastUsed=d);let T=m.kind==="store"||m.kind==="directory",S=m.kind==="board";t.uniform1i(a.tex.u.get("uMode")??null,T?1:2),t.uniform1f(a.tex.u.get("uHasTex")??null,v?.tex?1:0),t.uniform1f(a.tex.u.get("uFlip")??null,v?.grade===4?1:0);let P=S?[.97,.97,.96]:m.kind==="directory"?[.05,.06,.08]:[.03,.04,.05];t.uniform4f(a.tex.u.get("uPlaceholder")??null,P[0]??0,P[1]??0,P[2]??0,1),t.bindTexture(t.TEXTURE_2D,v?.tex??this.black),t.drawArrays(t.TRIANGLES,p*6,6)}),t.depthMask(!1),l(a.sky),t.uniformMatrix4fv(a.sky.u.get("uInvViewProj")??null,!1,o.invViewProj),t.bindVertexArray(this.vaos.full),t.drawArrays(t.TRIANGLES,0,3),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.POLYGON_OFFSET_FILL),t.polygonOffset(-1,-4),l(a.decal),t.bindVertexArray(this.vaos.decal),t.drawArrays(t.TRIANGLES,0,this.counts.decal),this.ribbonCount>0&&!o.mirror&&(l(a.ribbon),t.uniform1f(a.ribbon.u.get("uLength")??null,this.ribbonLength),t.bindVertexArray(this.vaos.ribbon),t.drawArrays(t.TRIANGLES,0,this.ribbonCount)),this.atlasTex&&this.counts.signs>0&&(l(a.tex),t.uniform1i(a.tex.u.get("uMode")??null,0),t.uniform1f(a.tex.u.get("uHasTex")??null,1),t.uniform1f(a.tex.u.get("uFlip")??null,0),t.bindTexture(t.TEXTURE_2D,this.atlasTex),t.bindVertexArray(this.vaos.signs),t.drawArrays(t.TRIANGLES,0,this.counts.signs));{let m=!1;this.world.overlays.forEach((p,b)=>{if(e.level===null||p.level!==e.level)return;let v=this.overlayNormals[b];if(v&&(o.eye[0]-p.rect.centre[0])*v[0]+(o.eye[1]-p.rect.centre[1])*v[1]+(o.eye[2]-p.rect.centre[2])*v[2]<0)return;let T=this.screenTex.get(p.key);T?.tex&&(m||(l(a.tex),t.uniform1i(a.tex.u.get("uMode")??null,0),t.uniform1f(a.tex.u.get("uHasTex")??null,1),t.uniform1f(a.tex.u.get("uFlip")??null,0),t.bindVertexArray(this.vaos.overlays),m=!0),T.lastUsed=d,t.bindTexture(t.TEXTURE_2D,T.tex),t.drawArrays(t.TRIANGLES,b*6,6))})}if(t.disable(t.POLYGON_OFFSET_FILL),!o.mirror)for(let m of e.holos)this.drawHolo(m,e,r);l(a.glass),t.uniform3f(a.glass.u.get("uOffset")??null,0,0,0),t.uniform1f(a.glass.u.get("uFade")??null,e.fade),t.bindVertexArray(this.vaos.glass);let h=this.world.glassPieces;for(let m=0;m<h.length;m++){let p=h[m]?.centre??[0,0,0];this.dist[m]=(p[0]-o.eye[0])**2+(p[1]-o.eye[1])**2+(p[2]-o.eye[2])**2}this.order.sort((m,p)=>(this.dist[p]??0)-(this.dist[m]??0));for(let m of this.order){let p=h[m];p&&t.drawArrays(t.TRIANGLES,p.first,p.count)}if(!o.mirror&&this.counts.bubbles>0&&(l(a.mote),t.uniform3f(a.mote.u.get("uRight")??null,e.right[0],e.right[1],e.right[2]),t.uniform3f(a.mote.u.get("uUp")??null,e.up[0],e.up[1],e.up[2]),t.bindVertexArray(this.vaos.bubbles),t.drawArraysInstanced(t.TRIANGLES,0,6,this.counts.bubbles)),!o.mirror&&e.dim>.001&&(t.disable(t.DEPTH_TEST),t.useProgram(a.dim.p),t.uniform1f(a.dim.u.get("uDim")??null,e.dim),t.bindVertexArray(this.vaos.full),t.drawArrays(t.TRIANGLES,0,3),t.enable(t.DEPTH_TEST)),!o.mirror&&e.study&&this.drawStudy(e.study,e,o,r),!o.mirror&&e.highlight){let{min:m,max:p,rgba:b}=e.highlight;l(a.flat),t.uniform4f(a.flat.u.get("uColor")??null,b[0]*b[3],b[1]*b[3],b[2]*b[3],b[3]),t.bindBuffer(t.ARRAY_BUFFER,this.flatBuf),t.bufferData(t.ARRAY_BUFFER,Ns(m,p),t.DYNAMIC_DRAW),t.bindVertexArray(this.vaos.flat),t.drawArrays(t.TRIANGLES,0,36)}t.bindVertexArray(null),t.depthMask(!0),t.disable(t.BLEND)}owned(e,o,r,t){let a=this.gl,s=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,s),a.bufferData(a.ARRAY_BUFFER,e,a.STATIC_DRAW);let i=this.vaoFor(s,o);return s&&t.push(s),i&&r.push(i),i}holoBuffers(e){let o=this.holoGpu.get(e.node);if(o)return o;let r=[],t=[],a=c=>({vao:c.length>0?this.owned(c,[3,3],r,t):null,count:c.length/fo}),s=c=>({vao:c.length>0?this.owned(new Float32Array(c.flat()),[3],r,t):null,count:c.length}),i=new Map;for(let c of e.lines){let u=c.color.join(","),f=i.get(u)??{color:c.color,data:[]};i.set(u,f);for(let d=1;d<c.points.length;d++)f.data.push(...c.points[d-1]??[0,0,0],...c.points[d]??[0,0,0])}let l={vaos:r,bufs:t,lit:a(Yo(e.lit)),ghosts:a(Yo(e.ghosts)),lines:[...i.values()].map(c=>({vao:this.owned(new Float32Array(c.data),[3],r,t),count:c.data.length/3,color:c.color})),dots:s(e.dots),beads:s(e.beads),lastUsed:performance.now()};return this.holoGpu.set(e.node,l),l}freeHolo(e){for(let o of e.vaos)this.gl.deleteVertexArray(o);for(let o of e.bufs)this.gl.deleteBuffer(o)}drawHolo(e,o,r){let t=this.gl,a=this.prog,s=e.holo,i=this.holoBuffers(s);if(i.lastUsed=performance.now(),!this.shell){let m=sr();this.shell={vao:this.vao(m,[3,3]),count:m.length/fo}}if(!this.beam){let m=ir();this.beam={vao:this.vao(m,[3,3]),count:m.length/fo}}let l=s.tint,c=(m,p)=>{t.useProgram(m.p),t.uniformMatrix4fv(m.u.get("uViewProj")??null,!1,o.viewProj),t.uniformMatrix4fv(m.u.get("uModel")??null,!1,p);let b=m.u.get("uCamPos");b&&t.uniform3f(b,o.eye[0],o.eye[1],o.eye[2]);let v=m.u.get("uDirect");v&&t.uniform1f(v,r?1:0);let T=m.u.get("uExposure");T&&t.uniform1f(T,o.exposure)},u=m=>{this.beam&&(c(a.beam,e.model),t.uniform1f(a.beam.u.get("uTime")??null,o.time),t.uniform1f(a.beam.u.get("uSide")??null,m),t.bindVertexArray(this.beam.vao),t.drawArrays(t.TRIANGLES,0,this.beam.count))};u(-1),c(a.organ,e.model);let f=(m,p,b,v)=>{!m.vao||m.count===0||(t.uniform3f(a.organ.u.get("uColor")??null,p[0],p[1],p[2]),t.uniform1f(a.organ.u.get("uAlpha")??null,b),t.uniform1f(a.organ.u.get("uPulse")??null,v),t.bindVertexArray(m.vao),t.drawArrays(t.TRIANGLES,0,m.count))};f(i.ghosts,[.42,.5,.58],s.whole?.1:.14,0),f(i.lit,l,.86,e.pulse),c(a.line,e.model);let d=(m,p)=>t.uniform4f(a.line.u.get("uColor")??null,m[0]*p,m[1]*p,m[2]*p,p);t.uniform1f(a.line.u.get("uRound")??null,0);for(let m of i.lines)d(m.color,.92),t.bindVertexArray(m.vao),t.drawArrays(t.LINES,0,m.count);t.uniform1f(a.line.u.get("uRound")??null,1),i.dots.vao&&(d(l,.75),t.uniform1f(a.line.u.get("uPointSize")??null,.017*o.pxPerMetre),t.bindVertexArray(i.dots.vao),t.drawArrays(t.POINTS,0,i.dots.count)),i.beads.vao&&(d(Ls,.95),t.uniform1f(a.line.u.get("uPointSize")??null,.03*o.pxPerMetre),t.bindVertexArray(i.beads.vao),t.drawArrays(t.POINTS,0,i.beads.count)),c(a.line,As),t.uniform1f(a.line.u.get("uRound")??null,0),t.bindVertexArray(this.vaos.leaders);for(let[m,p,b]of[[e.rings,Ps,.5],[e.leaders,Fs,.9]])m.length!==0&&(d(p,b),t.bindBuffer(t.ARRAY_BUFFER,this.leaderBuf),t.bufferData(t.ARRAY_BUFFER,m,t.DYNAMIC_DRAW),t.drawArrays(t.LINES,0,m.length/3));let h=Math.floor(e.targets.length/4);if(h>0){let m=new Float32Array(h*36),p=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1];for(let b=0;b<h;b++){let v=e.targets[b*4]??0,T=e.targets[b*4+1]??0,S=e.targets[b*4+2]??0,P=e.targets[b*4+3]??0;for(let _=0;_<6;_++)m.set([v,T,S,p[_*2]??0,p[_*2+1]??0,P],(b*6+_)*6)}t.useProgram(a.reticle.p),t.uniformMatrix4fv(a.reticle.u.get("uViewProj")??null,!1,o.viewProj),t.uniform3f(a.reticle.u.get("uRight")??null,o.right[0],o.right[1],o.right[2]),t.uniform3f(a.reticle.u.get("uUp")??null,o.up[0],o.up[1],o.up[2]),t.uniform3f(a.reticle.u.get("uCamPos")??null,o.eye[0],o.eye[1],o.eye[2]),t.uniform1f(a.reticle.u.get("uTime")??null,o.time),t.uniform1f(a.reticle.u.get("uDirect")??null,r?1:0),t.uniform1f(a.reticle.u.get("uExposure")??null,o.exposure),t.bindBuffer(t.ARRAY_BUFFER,this.reticleBuf),t.bufferData(t.ARRAY_BUFFER,m,t.DYNAMIC_DRAW),t.bindVertexArray(this.vaos.reticles),t.drawArrays(t.TRIANGLES,0,h*6)}c(a.shell,e.model),t.uniform3f(a.shell.u.get("uTint")??null,l[0],l[1],l[2]),t.uniform1f(a.shell.u.get("uWhole")??null,s.whole||s.skin?1:0),t.uniform1f(a.shell.u.get("uTime")??null,o.time),t.uniform1f(a.shell.u.get("uScanY")??null,e.scanY),t.bindVertexArray(this.shell.vao),t.colorMask(!1,!1,!1,!1),t.depthMask(!0),t.drawArrays(t.TRIANGLES,0,this.shell.count),t.colorMask(!0,!0,!0,!0),t.depthMask(!1),t.drawArrays(t.TRIANGLES,0,this.shell.count),u(1)}drawStudy(e,o,r,t){let a=this.gl,s=this.prog;if(!this.studyGpu){let c=Xn(),u=jn(.5,.08,no);this.studyGpu={table:this.vao(c,[3,3,1,1]),tableCount:c.length/8,cone:this.vao(u,[3,3]),coneCount:u.length/6,quad:this.vao(new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),[2])}}let i=this.studyGpu,l=c=>{a.useProgram(c.p);let u=(p,b)=>{let v=c.u.get(p);v&&a.uniform1f(v,b)},f=c.u.get("uViewProj");f&&a.uniformMatrix4fv(f,!1,r.viewProj);let d=c.u.get("uCamPos");d&&a.uniform3f(d,r.eye[0],r.eye[1],r.eye[2]),u("uDirect",t?1:0),u("uExposure",o.exposure),u("uTime",o.time);let h=c.u.get("uNeonA");h&&a.uniform3f(h,e.neonA[0],e.neonA[1],e.neonA[2]);let m=c.u.get("uNeonB");m&&a.uniform3f(m,e.neonB[0],e.neonB[1],e.neonB[2])};if(e.lights>.001&&(a.disable(a.DEPTH_TEST),a.useProgram(s.studyDim.p),a.uniform1f(s.studyDim.u.get("uStudy")??null,e.lights),["uSpotA","uSpotB","uSpotC"].forEach((c,u)=>{let f=e.spots[u]??[0,0,0,0];a.uniform4f(s.studyDim.u.get(c)??null,f[0],f[1],f[2],f[3])}),a.uniform3f(s.studyDim.u.get("uSpotW")??null,e.spotW[0],e.spotW[1],e.spotW[2]),a.bindVertexArray(this.vaos.full),a.drawArrays(a.TRIANGLES,0,3),a.enable(a.DEPTH_TEST)),e.assemble>.001&&i.table&&(a.disable(a.BLEND),a.depthMask(!0),l(s.studyTable),a.uniformMatrix4fv(s.studyTable.u.get("uModel")??null,!1,e.table),a.uniform1f(s.studyTable.u.get("uAssemble")??null,e.assemble),a.bindVertexArray(i.table),a.drawArrays(a.TRIANGLES,0,i.tableCount),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE_MINUS_SRC_ALPHA),a.depthMask(!1)),e.lights>.001&&i.cone&&(l(s.studyBeam),a.uniformMatrix4fv(s.studyBeam.u.get("uModel")??null,!1,e.beam),a.uniform1f(s.studyBeam.u.get("uLight")??null,e.lights),a.uniform1f(s.studyBeam.u.get("uHeight")??null,e.beamHeight),a.bindVertexArray(i.cone),a.drawArrays(a.TRIANGLES,0,i.coneCount)),e.claim){let c=e.claim;l(s.studyGlow),a.uniform3f(s.studyGlow.u.get("uCentre")??null,c.centre[0],c.centre[1],c.centre[2]),a.uniform3f(s.studyGlow.u.get("uU")??null,c.u[0],c.u[1],c.u[2]),a.uniform3f(s.studyGlow.u.get("uV")??null,c.v[0],c.v[1],c.v[2]),a.uniform2f(s.studyGlow.u.get("uHalf")??null,c.hu,c.hv),a.uniform1f(s.studyGlow.u.get("uOn")??null,e.lights),a.bindVertexArray(i.quad),a.drawArrays(a.TRIANGLES,0,6)}if(e.holo&&e.holo.reveal>.001){let c=e.holo;l(s.studyHolo),a.uniform3f(s.studyHolo.u.get("uCentre")??null,c.centre[0],c.centre[1],c.centre[2]),a.uniform3f(s.studyHolo.u.get("uRight")??null,c.right[0],c.right[1],c.right[2]),a.uniform3f(s.studyHolo.u.get("uUp")??null,c.up[0],c.up[1],c.up[2]),a.uniform1f(s.studyHolo.u.get("uHalf")??null,c.half),a.uniform1f(s.studyHolo.u.get("uReveal")??null,c.reveal),a.uniform1f(s.studyHolo.u.get("uFlash")??null,c.flash),a.uniform1f(s.studyHolo.u.get("uMotion")??null,e.motion?1:0),a.uniform4f(s.studyHolo.u.get("uRect")??null,c.rect[0],c.rect[1],c.rect[2],c.rect[3]),a.uniform1i(s.studyHolo.u.get("uTex")??null,0),a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,c.tex),a.bindVertexArray(i.quad),a.drawArrays(a.TRIANGLES,0,6)}}dispose(){let e=this.gl;for(let o of this.holoGpu.values())this.freeHolo(o);this.holoGpu.clear();for(let o of Object.values(this.prog))o&&e.deleteProgram(o.p);if(this.post)for(let o of Object.values(this.post))e.deleteProgram(o.p);this.freeTargets();for(let o of this.screenTex.values())o.grade!==4&&e.deleteTexture(o.tex);e.deleteTexture(this.skyTex),e.deleteTexture(this.atlasTex),e.deleteTexture(this.shadowTex),e.deleteTexture(this.black)}};function Ns(n,e){let[o,r,t]=n,[a,s,i]=e,l=(c,u,f,d)=>[...c,...u,...f,...c,...f,...d];return new Float32Array([...l([o,r,i],[a,r,i],[a,s,i],[o,s,i]),...l([a,r,t],[o,r,t],[o,s,t],[a,s,t]),...l([a,r,i],[a,r,t],[a,s,t],[a,s,i]),...l([o,r,t],[o,r,i],[o,s,i],[o,s,t]),...l([o,s,i],[a,s,i],[a,s,t],[o,s,t]),...l([o,r,t],[a,r,t],[a,r,i],[o,r,i])])}var vt=[0,23,0],Vs={az:34*ot,el:7*ot,dist:160},yt=64*ot,nn=34*ot,ia=[52,280],la=[3*ot,62*ot],Is=3.4,Cs=6.8,Os=1.9;function ca(n){let e=Math.cos(n.el),o=[vt[0]+n.dist*e*Math.sin(n.az),vt[1]+n.dist*Math.sin(n.el),vt[2]+n.dist*e*Math.cos(n.az)],r=vt[0]-o[0],t=vt[1]-o[1],a=vt[2]-o[2];return{eye:o,heading:Pe(r,a),pitch:Math.atan2(t,Math.hypot(r,a)),fov:nn,level:null}}function wo(n,e,o,r,t=ve){return{eye:[e[0],Ee(n)+t,e[1]],heading:o,pitch:r,fov:yt,level:n}}function at(n){let e=Oe(n,0,1);return e*e*(3-2*e)}function Mo(n,e,o,r){let t=Math.max(.001,Pn(e)),a=Oe(t/3,3.2,8),s=Math.max(.6,t/a),i=[0];for(let m=1;m<e.length;m++){let p=e[m-1],b=e[m];i.push((i[m-1]??0)+(p&&b?Math.hypot(b[0]-p[0],b[1]-p[1]):0))}let l=m=>{for(let p=1;p<e.length;p++){let b=i[p-1]??0,v=i[p]??0;if(m<=v||p===e.length-1){let T=e[p-1]??[0,0],S=e[p]??T,P=v>b?Oe((m-b)/(v-b),0,1):1;return[Ce(T[0],S[0],P),Ce(T[1],S[1],P)]}}return e[e.length-1]??[0,0]},c=e[e.length-1]??[0,0],u=e[e.length-2]??c,f=Pe(c[0]-u[0],c[1]-u[1]),d=m=>{let p=l(m),b=l(Math.min(t,m+2.4));return Math.hypot(b[0]-p[0],b[1]-p[1])<.05?f:Pe(b[0]-p[0],b[1]-p[1])},h=Ee(n);return{duration:s,interruptible:!0,route:e.map(m=>[m[0],h,m[1]]),at(m){let p=St(m),b=l(p*t),v=d(p*t);v=o.heading+wt(o.heading,v)*at(m/.28),r.heading!==null&&(v+=wt(v,r.heading)*at((m-.66)/.34));let T=Ce(Ce(o.eye??ve,ve,at(m/.25)),r.eye??ve,at((m-.7)/.3));return wo(n,b,v,Ce(o.pitch,r.pitch,p),T)}}}function Ds(n,e,o){let r=Oe(.9*Math.abs(e-n)+.9,1.6,4.6),t=a=>Ce(Ee(n),Ee(e),St(a));return{duration:r,cab:t,at(a){let s=t(a),i=o+wt(o,Math.PI)*at(a*1.6);return{eye:[0,s+ve,0],heading:i,pitch:0,fov:yt,level:Math.round(Ce(n,e,St(a)))}}}}function on(n,e,o,r,t){let a=s=>{let i=1-s,l=i*i*i,c=3*i*i*s,u=3*i*s*s,f=s*s*s;return[0,1,2].map(d=>l*(n.eye[d]??0)+c*(o[d]??0)+u*(r[d]??0)+f*(e.eye[d]??0))};return{duration:t,at(s){let i=St(s),l=at((s-.15)/.8);return{eye:a(i),heading:n.heading+wt(n.heading,e.heading)*l,pitch:Ce(n.pitch,e.pitch,l),fov:Ce(n.fov,e.fov,at((s-.3)/.7)),level:s>.7?e.level:n.level}}}}var So=class{mode="exterior";orbit={...Vs};level=0;pos=eo;heading=0;pitch=0;eye=ve;rising=!1;reducedMotion=!1;destination=null;vel=[0,0];legs=[];legT=0;finish=null;idleFor=0;stepBuffer=0;camera(){let e=this.mode==="travel"?this.legs[0]:void 0;return e?e.at(Oe(this.legT/e.duration,0,1)):this.mode==="exterior"?ca(this.orbit):wo(this.level,this.pos,this.heading,this.pitch,this.eye)}cabY(){let e=this.mode==="travel"?this.legs[0]:void 0;if(e?.cab)return e.cab(Oe(this.legT/e.duration,0,1));let o=this.camera();return Ee(o.level??this.level)}routeAhead(){let e=this.mode==="travel"?this.legs[0]:void 0;if(!e?.route)return null;let o=this.camera(),r=e.route,t=0,a=1/0;for(let s=0;s<r.length-1;s++){let i=r[s];if(!i)continue;let l=Math.hypot(i[0]-o.eye[0],i[2]-o.eye[2]);l<a&&(a=l,t=s)}return[[o.eye[0],r[0]?.[1]??0,o.eye[2]],...r.slice(t+1)]}get travelling(){return this.mode==="travel"}goTo(e,o=this.reducedMotion){let r=this.plan(e);return r?(this.destination=e.kind==="store"||e.kind==="level"?e:null,this.vel=[0,0],o||r.legs.length===0?(this.legs=[],r.finish(),!0):(this.legs=r.legs,this.legT=0,this.finish=r.finish,this.mode="travel",!0)):!1}here(){let e=this.camera();return e.level===null?null:{level:e.level,p:[e.eye[0],e.eye[2]],heading:e.heading,pitch:e.pitch,eye:e.eye[1]-Ee(e.level)}}plan(e){let o=this.camera(),r=this.mode==="exterior"?null:this.here(),t=(f,d,h,m=0,p=ve)=>()=>{this.mode="walk",this.level=f,this.pos=d,this.heading=h,this.pitch=m,this.eye=p,this.rising=!1};if(e.kind==="exterior"){let f=ca(this.orbit);return{legs:r?[on(o,f,[o.eye[0]*1.3,o.eye[1]+10,o.eye[2]*1.3+24],[f.eye[0]*.75,f.eye[1]+12,f.eye[2]*.75],2.6)]:[],finish:()=>{this.mode="exterior",this.idleFor=0}}}let a,s;if(e.kind==="plaza")a=0,s={p:eo,heading:0,pitch:.04,waypoint:"plaza"};else if(e.kind==="level")a=e.level,s=r&&r.level!==a?{p:[0,4],heading:Math.PI,pitch:.08,waypoint:"bridge"}:{p:Rt,heading:0,pitch:0,waypoint:"lobby"};else if(e.kind==="store"){let f=ht(e.node);if(!f)return null;a=f.level;let d=e.station?f.stations[e.station]:null;s=d?{p:d.p,heading:d.heading,pitch:d.pitch,waypoint:`${e.station}:${f.node}`,eye:d.eye??ve}:{p:f.view,heading:f.heading,pitch:.09,waypoint:`store:${f.node}`}}else a=e.level,s={p:e.p,heading:Number.NaN,pitch:0,waypoint:null};let i=f=>t(a,s.p,Number.isNaN(f)?r?.heading??0:f,s.pitch,s.eye??ve);if(!r){if(e.kind==="plaza"){let p=wo(0,eo,0,.04);return{legs:[on(o,p,[o.eye[0]*.6,o.eye[1]*.55,o.eye[2]*.6+30],[0,10,62],3)],finish:i(0)}}let f=Ee(a),d=wo(a,Rt,0,0),h=[on(o,d,[o.eye[0]*.55,f+ve+14+o.eye[1]*.25,o.eye[2]*.5+42],[0,f+ve+1.5,34],3.2)];if(s.waypoint!=="lobby"){let p=s.waypoint?Mt(a,Rt,s.waypoint):to(a,Rt,s.p);p&&h.push(Mo(a,p,{heading:0,pitch:0},{heading:Number.isNaN(s.heading)?null:s.heading,pitch:s.pitch,eye:s.eye}))}let m=h[h.length-1];return{legs:h,finish:i(Number.isNaN(s.heading)?m?m.at(1).heading:0:s.heading)}}let l=[],c={heading:r.heading,pitch:r.pitch,eye:r.eye};if(r.level!==a){let f=Mt(r.level,r.p,"lift");if(!f)return null;l.push(Mo(r.level,f,c,{heading:null,pitch:0}));let d=l[l.length-1]?.at(1).heading??0;l.push(Ds(r.level,a,d)),c={heading:Math.PI,pitch:0,eye:ve};let m=An(a,"lift")?.p??[0,0],p=s.waypoint?Mt(a,m,s.waypoint):to(a,m,s.p);p&&l.push(Mo(a,p,c,{heading:Number.isNaN(s.heading)?null:s.heading,pitch:s.pitch,eye:s.eye}))}else{let f=s.waypoint?Mt(a,r.p,s.waypoint):to(a,r.p,s.p);if(!f)return null;l.push(Mo(a,f,c,{heading:Number.isNaN(s.heading)?null:s.heading,pitch:s.pitch,eye:s.eye}))}let u=l[l.length-1];return{legs:l,finish:i(Number.isNaN(s.heading)?u?u.at(1).heading:r.heading:s.heading)}}interrupt(){if(!this.legs[0]?.interruptible)return;let o=this.here();o&&(this.legs=[],this.finish=null,this.mode="walk",this.level=o.level,this.pos=Bo(o.level,o.p,0,0),this.heading=o.heading,this.pitch=o.pitch,this.eye=o.eye)}update(e,o){let r=o.forward!==0||o.strafe!==0||o.turn!==0||o.lookX!==0||o.lookY!==0||o.zoom!==0;if(this.mode==="travel")if(r&&this.legs[0]?.interruptible)this.interrupt();else{this.legT+=e;let h=this.legs[0];for(;h&&this.legT>=h.duration;)this.legT-=h.duration,this.legs.shift(),h=this.legs[0];if(!h){let m=this.finish;this.finish=null,this.legT=0,m?.()}return!0}if(this.mode==="exterior"){let h=this.orbit,m=h.az-o.lookX*.0052-o.turn*e*.9,p=Oe(h.el+o.lookY*.0042+o.forward*e*.5,la[0],la[1]),b=Oe(h.dist*Math.exp(o.zoom*.0011-o.strafe*0),ia[0],ia[1]);this.idleFor=r?0:this.idleFor+e,!this.reducedMotion&&this.idleFor>5&&(m+=e*.035);let v=m!==h.az||p!==h.el||b!==h.dist;return this.orbit={az:m,el:p,dist:b},v}this.heading+=o.lookX*.0042+o.turn*Os*e,this.pitch=Oe(this.pitch-o.lookY*.0036,-.95,.95),o.zoom!==0&&(this.stepBuffer=Oe(this.stepBuffer-o.zoom*.01,-6,6));let t=this.stepBuffer*Math.min(1,e*6);if(this.stepBuffer-=t,(o.forward!==0||o.strafe!==0||Math.abs(this.stepBuffer)>.01)&&this.eye!==ve&&(this.rising=!0),this.rising){let h=this.eye+(ve-this.eye)*Math.min(1,e*5);this.eye=this.reducedMotion||Math.abs(ve-h)<.01?ve:h,this.eye===ve&&(this.rising=!1)}let s=o.run?Cs:Is,i=Math.sin(this.heading),l=-Math.cos(this.heading),c=[(i*o.forward-l*o.strafe)*s,(l*o.forward+i*o.strafe)*s],u=1-Math.exp(-e*10);this.vel=[Ce(this.vel[0],c[0],u),Ce(this.vel[1],c[1],u)];let f=this.vel[0]*e+i*t,d=this.vel[1]*e+l*t;return Math.abs(f)+Math.abs(d)>1e-6&&(this.pos=Bo(this.level,this.pos,f,d)),r||Math.abs(this.vel[0])+Math.abs(this.vel[1])>.01||this.eye!==ve&&this.rising}};var Ao="#0C1824",Bs="#3A4A5A",gt="#5A6A7A",Us="#DCE2E8",st="#0B0D10",Ct="rgba(205,210,215,0.85)",Xe="#C9CED4",Vt="#23272C",Hs="#E2DCD1",He="#E3232C",q='"Poppins", "Inter", system-ui, sans-serif',C='"Inter", system-ui, sans-serif';async function ua(){if(typeof document>"u"||!document.fonts)return;let n=["500 64px Poppins","700 64px Poppins","400 32px Inter","500 32px Inter","600 32px Inter"].map(e=>document.fonts.load(e).catch(()=>[]));await Promise.race([Promise.all(n),new Promise(e=>setTimeout(e,1500))])}function Ye(n,e,o=1){let r=document.createElement("canvas");r.width=Math.round(n*o),r.height=Math.round(e*o);let t=r.getContext("2d");if(!t)throw new Error("2D canvas unavailable");return o!==1&&t.scale(r.width/n,r.height/e),[r,t]}function da(n,e,o,r,t,a){let s=Math.min(a,r/2,t/2);n.beginPath(),n.moveTo(e+s,o),n.arcTo(e+r,o,e+r,o+t,s),n.arcTo(e+r,o+t,e,o+t,s),n.arcTo(e,o+t,e,o,s),n.arcTo(e,o,e+r,o,s),n.closePath()}function A(n,e,o,r,t,a=!0){let s=n;if("letterSpacing"in s){s.letterSpacing=`${t}px`;let l=n.measureText(e).width;return a&&n.fillText(e,o,r),s.letterSpacing="0px",l}let i=o;for(let l of e)a&&n.fillText(l,i,r),i+=n.measureText(l).width+t;return i-o}function Po(n,e,o,r,t,a){n.beginPath(),n.moveTo(e+a,o),n.lineTo(e+r,o),n.lineTo(e+r,o+t-a),n.lineTo(e+r-a,o+t),n.lineTo(e,o+t),n.lineTo(e,o+a),n.closePath()}function De(n,e,o){let r=e.split(/\s+/),t=[],a="";for(let s of r){let i=a?`${a} ${s}`:s;n.measureText(i).width>o&&a?(t.push(a),a=s):a=i}return a&&t.push(a),t}var Be=n=>String(n).padStart(2,"0");function $s(n){let e=ht(n),o=ie.node(n),r=o?.tier??"T01";return{key:`store:${n}`,aspect:5.6/.95,draw(t,a,s){t.fillStyle=st,t.fillRect(2,2,a-4,s-4),t.lineWidth=Math.max(2,s*.02),t.strokeStyle=Ct,t.strokeRect(3,3,a-6,s-6),t.textBaseline="middle",t.font=`500 ${Math.round(s*.3)}px ${q}`,t.fillStyle=he[r];let i=s*.42,l=A(t,n,i,s/2+1,s*.06);t.fillStyle="rgba(205,210,215,0.5)",t.fillRect(i+l+s*.24,s*.3,Math.max(1,s*.012),s*.4),t.font=`500 ${Math.round(s*.17)}px ${C}`;let c=`LEVEL ${Be((e?.level??0)+1)} \xB7 ${Be(e?.number??0)}`,u=A(t,c,0,0,s*.05,!1),f=i+l+s*.5,d=(o?.name??n).toUpperCase(),h=s*.3,m=s*.16,p=S=>(t.font=`500 ${Math.round(h)}px ${q}`,A(t,d,0,0,m,!1)<=S),b=a-s*.5-u-s*.3-f,v=a-s*.5-f,T=!0;for(;!p(b)&&h>s*.24;)h-=1,m=Math.max(s*.05,m-.6);if(!p(b))for(T=!1,h=s*.3,m=s*.16;!p(v)&&h>s*.18;)h-=1,m=Math.max(s*.03,m-.6);t.fillStyle="#F1F3F5",t.font=`500 ${Math.round(h)}px ${q}`,A(t,d,f,s/2+1,m),T&&(t.fillStyle=Xe,t.font=`500 ${Math.round(s*.17)}px ${C}`,A(t,c,a-s*.5-u,s/2+1,s*.05))}}}function Ws(n){let e=me[n];return{key:`level:${n}`,aspect:5.4/1.1,draw(o,r,t){o.fillStyle=st,o.fillRect(2,2,r-4,t-4),o.lineWidth=Math.max(2,t*.02),o.strokeStyle=Ct,o.strokeRect(3,3,r-6,t-6),o.textBaseline="alphabetic",o.fillStyle=he[e?.tier??"T01"],o.fillRect(t*.34,t*.24,Math.max(2,t*.025),t*.52);let a=t*.6;o.fillStyle="#F1F3F5",o.font=`500 ${Math.round(t*.28)}px ${q}`,A(o,`LEVEL ${Be(n+1)}`,a,t*.48,t*.12);let s=r-a-t*.3,i=`${e?.tier??""} \xB7 ${(e?.name??"").toUpperCase()}`,l=t*.14,c=t*.05;for(;o.font=`500 ${Math.round(l)}px ${C}`,!(A(o,i,0,0,c,!1)<=s||l<=t*.1);)l-=1,c=Math.max(t*.015,c-.3);o.fillStyle=Xe,A(o,i,a,t*.76,c)}}}function Gs(n){let e=me[n];return{key:`levelno:${n}`,aspect:7.2/1.8,draw(o,r,t){o.fillStyle=Hs,o.fillRect(0,t*.08,r,t*.84),o.fillStyle="rgba(35,39,44,0.18)",o.fillRect(0,t*.08,r,Math.max(1,t*.01)),o.textBaseline="alphabetic",o.font=`500 ${Math.round(t*.58)}px ${q}`,o.fillStyle=Vt;let a=A(o,Be(n+1),t*.22,t*.72,t*.08);o.fillStyle=he[e?.tier??"T01"],o.fillRect(t*.22+a+t*.2,t*.3,Math.max(2,t*.025),t*.42),o.fillStyle=Vt,o.font=`500 ${Math.round(t*.12)}px ${q}`;let s=(e?.name??"").toUpperCase().split(" "),i=Math.ceil(s.length/2);A(o,s.slice(0,i).join(" "),t*.22+a+t*.42,t*.48,t*.05),A(o,s.slice(i).join(" "),t*.22+a+t*.42,t*.69,t*.05)}}}var zs={key:"crown",aspect:22/1.75,draw(n,e,o){n.textBaseline="middle",n.font=`500 ${Math.round(o*.44)}px ${q}`;let r=[[Io.parent,Vt],[" // ",He],["XI OUTLET",Vt]],t=o*.26,a=r.reduce((i,[l])=>i+A(n,l,0,0,t,!1),0),s=(e-a)/2;for(let[i,l]of r)n.fillStyle=l,s+=A(n,i,s,o*.5,t)}},ks={key:"entrance",aspect:7.6/1.3,draw(n,e,o){n.fillStyle=st,n.fillRect(2,2,e-4,o-4),n.lineWidth=Math.max(2,o*.02),n.strokeStyle=Ct,n.strokeRect(3,3,e-6,o-6),n.textBaseline="middle",n.fillStyle="#F1F3F5",n.font=`500 ${Math.round(o*.3)}px ${q}`;let r="XI OUTLET",t=A(n,r,0,0,o*.2,!1);A(n,r,(e-t)/2,o*.4,o*.2),n.fillStyle=Xe,n.font=`500 ${Math.round(o*.12)}px ${C}`;let a=`${Io.research} \xB7 EXPERIENCE INTERFACE`,s=A(n,a,0,0,o*.06,!1);A(n,a,(e-s)/2,o*.74,o*.06),n.fillStyle=He,n.fillRect((e-o*.5)/2,o*.585,o*.5,Math.max(2,o*.025))}};function fa(){let n=[...ie.nodes.map(c=>$s(c.id)),...me.map(c=>Ws(c.index)),...me.map(c=>Gs(c.index)),zs,ks,...ie.nodes.map(c=>Xs(c.id)),...Ys,js],e=2048,o=112,r=6,t=c=>{let u=0,f=0,d=0;for(let h of n){let m=h.key.startsWith("levelno")?o*1.5:o,p=Math.min(e,Math.round(m*h.aspect));u+p>e&&(u=0,f+=d+r,d=0),d=Math.max(d,m),c?.(h,u,f,p,m),u+=p+r}return f+d},a=Math.ceil(t(null)/256)*256,[s,i]=Ye(e,a),l=new Map;return t((c,u,f,d,h)=>{i.save(),i.translate(u,f),i.beginPath(),i.rect(0,0,d,h),i.clip(),c.draw(i,d,h),i.restore(),l.set(c.key,{u0:(u+.5)/e,v0:(f+.5)/a,u1:(u+d-.5)/e,v1:(f+h-.5)/a})}),{canvas:s,rects:l}}function Xs(n){let e=ie.node(n);return{key:`blade:${n}`,aspect:1.3/.62,draw(o,r,t){o.fillStyle=st,o.fillRect(2,2,r-4,t-4),o.lineWidth=Math.max(2,t*.025),o.strokeStyle=Ct,o.strokeRect(3,3,r-6,t-6),o.fillStyle=he[e?.tier??"T01"],o.fillRect(t*.16,t*.2,Math.max(2,t*.03),t*.3),o.fillStyle="#F1F3F5",o.textBaseline="middle",o.font=`500 ${Math.round(t*.25)}px ${q}`,A(o,n,t*.3,t*.36,t*.05),o.fillStyle=Xe,o.font=`500 ${Math.round(t*.15)}px ${q}`;let a=(e?.name??"").toUpperCase();for(;a.length>3&&A(o,a,0,0,t*.05,!1)>r-t*.32;)a=a.slice(0,-1);A(o,a===(e?.name??"").toUpperCase()?a:`${a.trim()}\u2026`,t*.16,t*.72,t*.05)}}}var Ys=[["model","01","MODEL"],["body","02","BODY MAP"],["lesson","03","LESSON"],["examples","05","EXAMPLES"],["theater","07","THEATER"]].map(([n,e,o])=>({key:`station:${n}`,aspect:1.3/.46,draw(r,t,a){da(r,2,2,t-4,a-4,a*.1);let s=r.createLinearGradient(0,0,t,a);s.addColorStop(0,"#D3D8DD"),s.addColorStop(.5,"#BCC2C9"),s.addColorStop(1,"#CBD0D6"),r.fillStyle=s,r.fill(),r.textBaseline="middle",r.fillStyle=He,r.font=`600 ${Math.round(a*.32)}px ${C}`;let i=A(r,e,a*.36,a/2+1,a*.03);r.fillStyle=Vt,r.font=`500 ${Math.round(a*.26)}px ${q}`,A(r,o,a*.36+i+a*.22,a/2+1,a*.1)}})),js={key:"theater:marquee",aspect:3.4/.66,draw(n,e,o){n.fillStyle=st,n.fillRect(2,2,e-4,o-4),n.strokeStyle="rgba(231,201,160,0.55)",n.lineWidth=Math.max(2,o*.025),n.strokeRect(3,3,e-6,o-6),n.textBaseline="middle",n.fillStyle="#E7C9A0",n.font=`600 ${Math.round(o*.15)}px ${C}`;let r="NOW SHOWING",t=A(n,r,0,0,o*.06,!1),a=e-o*.42-t;A(n,r,a,o/2+1,o*.06),n.beginPath(),n.arc(a-o*.2,o/2,o*.055,0,Math.PI*2),n.fill(),n.fillStyle=He,n.font=`600 ${Math.round(o*.28)}px ${C}`;let s=A(n,"07",o*.42,o/2+1,o*.02);n.fillStyle="#F1F3F5";let i=o*.28;n.font=`500 ${Math.round(i)}px ${q}`;let l=o*.42+s+o*.24;for(;A(n,"XI THEATER",0,0,i*.3,!1)>a-o*.5-l&&i>o*.18;)i-=1,n.font=`500 ${Math.round(i)}px ${q}`;A(n,"XI THEATER",l,o/2+1,i*.3)}};function Ks(n,e,o,r,t){n.font=`600 ${t}px ${C}`,n.fillStyle=e.status==="sourced"?"#0672A8":gt,A(n,Co[e.status].toUpperCase(),o,r,t*.08)}var qs={SW:"SOUTH",SE:"SOUTH",ES:"EAST",EN:"EAST",NE:"NORTH",NW:"NORTH",WN:"WEST",WS:"WEST"};function ha(n){let[r,t]=Ye(1024,777),a=me[n],s=he[a?.tier??"T01"],i=t.createLinearGradient(0,0,0,777);i.addColorStop(0,"#15181C"),i.addColorStop(1,st),t.fillStyle=i,t.fillRect(0,0,1024,777),t.textBaseline="alphabetic",t.fillStyle="#F1F3F5",t.font=`500 44px ${q}`,A(t,`LEVEL ${Be(n+1)}`,48,86,14),t.fillStyle=s,t.fillRect(48,104,60,5),t.fillStyle=Xe,t.font=`500 18px ${C}`,A(t,`${a?.tier??""} \xB7 ${(a?.name??"").toUpperCase()}`,48,146,4);let l=400,c=48,u=190,f=l/(W*2),d=G=>[c+(G[0]+W)*f,u+(G[1]+W)*f];t.lineWidth=2,t.strokeStyle="#3A3F46",t.strokeRect(c,u,l,l);for(let G of a?.bays??[]){t.beginPath(),G.poly.forEach((L,H)=>{let[V,j]=d(L);H===0?t.moveTo(V,j):t.lineTo(V,j)}),t.closePath();let x=a?.stores.find(L=>L.bay.id===G.id);t.fillStyle=x?`${s}55`:G.use==="lobby"?"#2A2F3680":"#3A403A60",t.fill(),t.stroke();let[y,g]=d(Ve(G.id,(N+W)/2,G.use==="lobby"?0:6));t.fillStyle="#FFFFFF",t.font=`600 17px ${C}`;let M=x?x.node:G.use==="lounge"?"LOUNGE":G.id==="SW"?"":"LOBBY";M&&t.fillText(M,y-t.measureText(M).width/2,g+6)}let[h,m]=d([-1.3,0]);t.fillStyle="#3A3F46",t.fillRect(h,m,2.6*f,$*f);let[p,b]=d([-$,-$]);t.strokeStyle="#6A717A",t.setLineDash([6,5]),t.strokeRect(p,b,$*2*f,$*2*f),t.setLineDash([]);let[v,T]=d([0,0]);t.beginPath(),t.arc(v,T,be*f,0,Math.PI*2),t.fillStyle="#9AA1A9",t.fill(),t.fillStyle=st,t.font=`600 13px ${C}`,t.fillText("LIFT",v-t.measureText("LIFT").width/2,T+5);let[S,P]=d(ze);t.beginPath(),t.arc(S,P,9,0,Math.PI*2),t.fillStyle=He,t.fill(),t.fillStyle="#FFFFFF",t.font=`600 15px ${C}`,A(t,"YOU ARE HERE",S+16,P+5,1),t.fillStyle=Xe,t.font=`600 14px ${C}`,t.fillText("N",c+l/2-5,u-10);let _=220,U=500;t.fillStyle=Xe,t.font=`600 15px ${C}`,A(t,"STORES ON THIS LEVEL",U,_-26,4);for(let G of a?.stores??[])t.fillStyle=s,Po(t,U,_,74,38,8),t.fill(),t.fillStyle="#FFFFFF",t.font=`500 20px ${q}`,t.fillText(G.node,U+12,_+27),t.font=`500 23px ${q}`,A(t,G.name.toUpperCase(),U+92,_+27,2),t.fillStyle=Xe,t.font=`500 14px ${C}`,A(t,`${qs[G.bay.id]} WING`,U+92,_+52,3),_+=84;return t.fillStyle=Xe,t.font=`400 16px ${C}`,t.fillText("Lift in the atrium: every level, Level 01 at the street.",48,737),r}var It={w:560,h:797};function rn(n){let o=It.h-128,r=Math.min(68,(o-338)/Math.max(1,n));return Array.from({length:n},(t,a)=>(338+r*(a+.5))/It.h)}function ma(n,e){let{w:o,h:r}=It,[t,a]=Ye(o,r),s=ie.node(n),i=s?.content?.bodyMap,l=s?.tier??"T01";a.fillStyle="#FFFFFF",a.fillRect(0,0,o,r),a.strokeStyle=Us,a.lineWidth=3,a.strokeRect(1.5,1.5,o-3,r-3),a.strokeStyle=Ao,a.lineWidth=3;for(let[p,b,v,T]of[[10,10,1,1],[o-10,10,-1,1],[10,r-10,1,-1],[o-10,r-10,-1,-1]])a.beginPath(),a.moveTo(p+v*22,b),a.lineTo(p,b),a.lineTo(p,b+T*22),a.stroke();a.textBaseline="alphabetic",a.fillStyle=He,a.beginPath(),a.arc(34,44,5,0,Math.PI*2),a.fill(),a.fillStyle=gt,a.font=`600 15px ${C}`,A(a,"02  SUBJECT // BODY MAP",48,50,2.5),a.fillStyle=he[l],a.font=`600 15px ${C}`;let c=A(a,`${n} \xB7 ${l}`,0,0,2,!1);A(a,`${n} \xB7 ${l}`,o-30-c,50,2),a.fillStyle=Ao,a.font=`500 36px ${q}`,A(a,(s?.name??n).toUpperCase(),30,104,4),a.fillStyle=gt,a.font=`600 14px ${C}`,i&&A(a,Rn[i.scope].toUpperCase(),30,136,2);let u=178;if(i){a.fillStyle=Ao,a.font=`400 20px ${C}`;for(let p of De(a,i.where.text,o-60).slice(0,5))a.fillText(p,30,u),u+=27;Ks(a,i.where,30,u+2,12)}let f=i?qt(i):[],d=rn(f.length);f.forEach((p,b)=>{let v=(d[b]??0)*r,T=52,S=e?o-30-T:30;a.strokeStyle=He,a.lineWidth=2.5,a.strokeRect(S,v-17,T,34),a.fillStyle="#C9141E",a.font=`600 18px ${C}`;let P=String(p.index+1).padStart(2,"0");a.fillText(P,S+(T-a.measureText(P).width)/2,v+6);let _=e?30:30+T+16,U=o-60-T-16;a.fillStyle=Ao,a.font=`600 19px ${C}`,a.fillText(De(a,p.label,U)[0]??p.label,_,v-2),a.fillStyle=gt,a.font=`600 12px ${C}`;let G=[p.zone,p.region==="body"?"":`GRID ${p.grid}`,p.posterior?"BEHIND OTHER ORGANS":"",p.example?"EXAMPLE SITE":""].filter(Boolean).join(" \xB7 ");A(a,G.toUpperCase(),_,v+18,1.2)});let h=i?.overlays??[],m=r-98;if(h.length>0){a.fillStyle=gt,a.font=`600 12px ${C}`,A(a,"OVERLAY",30,m,2);let p=110;for(let b of h)for(let v of Mn[b])a.fillStyle=v.color==="accent"?he[l]:v.color,a.fillRect(p,m-6,18,3),a.fillStyle=Bs,a.font=`400 13px ${C}`,a.fillText(v.label,p+24,m),p+=24+a.measureText(v.label).width+18,p>o-120&&(p=110,m+=20)}return a.fillStyle=gt,a.font=`600 11px ${C}`,A(a,"ILLUSTRATIVE \xB7 NOT TO SCALE \xB7 FRONT VIEW",30,r-44,1.5),A(a,"THE SUBJECT'S RIGHT IS ON YOUR LEFT",30,r-26,1.5),t}var Lo=hr;function Qs(n,e,o,r,t,a){n.font=`600 ${a}px ${C}`,n.fillStyle=o.status==="sourced"?e.sourced:e.text3,A(n,Co[o.status].toUpperCase(),r,t,a*.12)}function Fo(n,e,o,r,t,a,s){n.fillStyle=e.accent,n.font=`600 ${s}px ${C}`;let i=A(n,o,t,a,s*.05);n.fillStyle=e.text,n.font=`500 ${s*.78}px ${q}`,A(n,r,t+i+s*.6,a-s*.05,s*.2),n.fillStyle=e.accent,n.fillRect(t,a+s*.42,s*1.3,Math.max(2,s*.08))}function pa(n,e,o,r,t,a,s,i,l){n.font=`400 ${s}px ${C}`;let c=De(n,o.text,a),u=c.length*i+s*1.4;if(t+u>l)return null;n.fillStyle=e.text;for(let f of c)n.fillText(f,r,t),t+=i;return Qs(n,e,o,r,t+s*.1,Math.round(s*.56)),t+s*1.4}function ba(n){let e=ie.node(n),o=ht(n),r=e?.content,t=ke(n),a=Lo(po[t.stele],t.accent),s=o?.rooms.lettering,i=1536,l=808,[c,u]=Ye(i,l,.84);if(!o||!s||!e)return c;let f=i/s.width,d=-Math.cos(s.facing),h=-Math.sin(s.facing),m=d*o.bay.along[0]+h*o.bay.along[1]>0,p=Ie.stele.l0+.05,b=pe=>m?(pe-p)*f:(p+s.width-pe)*f,v=pe=>(s.bottom+s.height-pe)*f,T=Math.min(b(Ie.screen.l0-.05),b(Ie.screen.l1+.05)),S=Math.max(b(Ie.screen.l0-.05),b(Ie.screen.l1+.05)),P=v(Ie.screen.bottom+(Ie.screen.l1-Ie.screen.l0)*3/4+.05),_=v(Ie.screen.bottom-.05),U=(T+S)/2>i/2,G=U?46:S+60,y=(U?T-60:i-46)-G;u.textBaseline="alphabetic";let g=me[o.level];u.font=`600 30px ${q}`;let M=A(u,n,0,0,2,!1)+28,L=e.name.toUpperCase(),H=pe=>(u.font=`500 ${pe}px ${q}`,A(u,L,0,0,pe*.22,!1)),V=pe=>(u.font=`600 18px ${C}`,A(u,pe,0,0,2.6,!1)),j=pe=>{let $e=i-92-M-24-V(pe)-64,Q=92;for(;Q>44&&H(Q)>$e;)Q-=2;return Q},I=`LEVEL ${Be(o.level+1)} \xB7 ${(g?.name??"").toUpperCase()}`,E=j(I)>=64?I:`LEVEL ${Be(o.level+1)}`,F=j(E),k=Math.min(P-26,112),D=U?46:i-46-H(F);u.fillStyle=a.text,u.font=`500 ${F}px ${q}`,A(u,L,D,k,F*.22),u.font=`600 30px ${q}`;let B=U?i-46-M:46;Po(u,B,k-46,M,50,9),u.fillStyle=he[e.tier],u.fill(),u.fillStyle="#FFFFFF",A(u,n,B+14,k-10,2),u.fillStyle=a.text2;let O=V(E);A(u,E,U?B-24-O:B+M+24,k-14,2.6);let z=Math.max(k+92,210),Y=l-150;if(r){u.fillStyle=a.text3,u.font=`600 16px ${C}`;let pe=`${r.kind[0]?.toUpperCase()??""}${r.kind.slice(1)} \xB7 ${r.category}`;u.fillText(pe,G,z),z+=46,Fo(u,a,"00","WHAT IT IS",G,z,26),z+=52;let $e=pa(u,a,r.definition,G,z,y,27,37,Y);$e!==null&&(z=$e+8);let Q=r.synonyms.slice(0,5);if(Q.length>0&&z+70<Y){u.fillStyle=a.text3,u.font=`600 14px ${C}`,A(u,"ALSO CALLED",G,z,2.4),z+=30,u.fillStyle=a.text2,u.font=`400 20px ${C}`;for(let Ae of De(u,Q.join(" \xB7 "),y).slice(0,2))u.fillText(Ae,G,z),z+=28}}u.fillStyle=a.accent,u.fillRect(G,l-132,y,2),u.fillStyle=a.text3,u.font=`600 14px ${C}`,A(u,"IN THIS GALLERY",G,l-102,2.4),u.fillStyle=a.text2,u.font=`400 19px ${C}`;let le=["01 The model","02 Where it is in the body","03 How it works","05 In practice","07 Cinema"].join("   \xB7   ");De(u,le,y).slice(0,2).forEach((pe,$e)=>u.fillText(pe,G,l-72+$e*26));let ne=r?.review.status==="reviewed"?"Reviewed":"Not yet reviewed by a qualified reviewer",de=r?.evidence?`Evidence: ${pn[r.evidence.grade]} \xB7 `:"";u.fillStyle=a.text3,u.font=`400 15px ${C}`,u.fillText(`${de}${ne}`,G,l-18);let se=T+6;u.fillStyle=a.accent,u.font=`600 15px ${C}`;let Se=A(u,"01  THE MODEL",se,_+28,2.4);return u.fillStyle=a.text3,u.font=`400 15px ${C}`,u.fillText("Illustrative 3D model: conceptual, not to scale.",se+Se+18,_+28),u.fillStyle=a.text3,u.font=`600 13px ${C}`,A(u,`ABOVE \xB7 INSTALLATION \xB7 ${t.shape.toUpperCase()} \xB7 CONCEPTUAL, NOT TO SCALE`,se,_+54,2),c}function va(n,e,o,r,t,a,s,i,l,c,u=0,f=!1){let d=s,h=i,m=()=>(n.font=`400 ${d}px ${C}`,o.reduce((v,T)=>v+u+De(n,T.text,a).length*h+d*1.4+c,-c));for(;o.length>0&&d>16&&t+m()>l;)d-=1,h=Math.round(d*1.39);let p=[],b=t;return o.forEach((v,T)=>{p.push(b),f&&o.length>1&&(n.font=`600 ${Math.round(d*.78)}px ${q}`,n.fillStyle=e.accent,n.textAlign="right",n.fillText(Be(T+1),r-12,b+u),n.textAlign="left"),b=(pa(n,e,v,r,b+u,a,d,h,1/0)??b+u)+c}),{tops:p,end:o.length>0?b-c:t}}function ya(n){let e=Ln,[o,r]=Ye(e.w,e.h,.84),t=ie.node(n),a=In(n),s=ke(n),i=Lo(s.wall,s.accent);if(r.textBaseline="alphabetic",!t||!a)return o;r.fillStyle=i.accent,r.font=`500 108px ${q}`;let l=A(r,"03",40,118,4);r.fillStyle=i.text,r.font=`500 40px ${q}`,A(r,"THE LESSON",40+l+30,78,9),r.fillStyle=i.text3,r.font=`600 16px ${C}`,A(r,`${t.name.toUpperCase()} \xB7 ${n}`,40+l+32,114,3);let c=Vn;if(a.columns.forEach((u,f)=>{let d=c[f]??40;Fo(r,i,u.num,u.title,d,e.top,24);let{end:h}=va(r,i,u.claims.slice(0,u.shown),d,e.top+54,e.colW,u.size,u.lead,e.maxY,10,0,!0),m=u.shown>0?h+10:e.top+54;u.shown<u.claims.length&&(r.fillStyle=i.text3,r.font=`400 17px ${C}`,r.fillText(`${u.claims.length-u.shown} more in the store panel and on the node page.`,d,Math.min(m+4,e.maxY+30)))}),a.preparing){let u=c[1]??0;Fo(r,i,"\xB7\xB7","IN PREPARATION",u,e.top,24),r.fillStyle=i.text2,r.font=`400 22px ${C}`;let f=e.top+54;for(let d of De(r,_n,e.colW))r.fillText(d,u,f),f+=32}return r.fillStyle=i.text3,r.font=`400 15px ${C}`,r.fillText(Nn,40,e.h-16),o}function ga(n){let e=Cn,o=e.w,r=e.h,[t,a]=Ye(o,r,.88),s=ie.node(n),i=ke(n),l=Lo(i.wall,i.accent);if(a.textBaseline="alphabetic",!s)return t;let c=Un(n),u=e.x,f=e.width;a.fillStyle=l.accent,a.font=`500 84px ${q}`;let d=A(a,"05",u,96,3);a.fillStyle=l.text,a.font=`500 34px ${q}`,A(a,"IN PRACTICE",u+d+24,66,7),a.fillStyle=l.text3,a.font=`600 15px ${C}`,A(a,On,u+d+26,96,2.4);let h=e.top;if(c.items.length===0){a.fillStyle=l.text2,a.font=`400 21px ${C}`;for(let v of De(a,Dn,f))a.fillText(v,u,h),h+=30;h+=14}let m=c.items.slice(0,c.shown),{tops:p,end:b}=va(a,l,m.map(v=>v.claim),u+14,h,f-14,21,29,e.maxY,14,34);m.forEach((v,T)=>{let S=p[T]??h;a.fillStyle=l.accent,a.fillRect(u,S-15,4,19),a.fillStyle=l.text3,a.font=`600 15px ${C}`;let P=A(a,v.head,u+14,S,2.4);v.name&&(a.fillStyle=l.text,a.font=`600 20px ${C}`,a.fillText(v.name,u+14+P+14,S+1))}),m.length>0&&(h=b+14),c.shown<c.items.length&&(a.fillStyle=l.text3,a.font=`400 16px ${C}`,a.fillText(`${c.items.length-c.shown} more in the store panel.`,u+14,h),h+=30),h=Math.max(h+16,610),Fo(a,l,"06","CONNECTED GALLERIES",u,h,22),h+=50;for(let v of c.links){if(h>r-70)break;a.fillStyle=he[ie.node(v.node)?.tier??"T01"],Po(a,u,h-22,62,30,7),a.fill(),a.fillStyle="#FFFFFF",a.font=`500 16px ${q}`,a.fillText(v.node,u+9,h-1),a.fillStyle=l.text,a.font=`600 20px ${C}`;let T=a.measureText(v.name).width;a.fillText(v.name,u+76,h),a.fillStyle=l.text3,a.font=`400 16px ${C}`,a.fillText(`${v.out?`This ${v.verb}`:`${v.verb[0]?.toUpperCase()??""}${v.verb.slice(1)} this`} \xB7 Level ${Be(v.level)}, ${v.wing} wing`,u+76+T+14,h),h+=50}return a.fillStyle=l.text3,a.font=`400 14px ${C}`,a.fillText(Bn,u,r-18),t}function xa(n){let[r,t]=Ye(1024,128,.75),a=ie.node(n),s=ke(n),i=Lo(s.wall,s.accent),l=a?.content?.rendering;if(!l)return r;t.textBaseline="alphabetic",t.fillStyle=i.accent,t.font=`600 15px ${C}`;let c=A(t,"THE SUBJECT, RENDERED",4,24,2.4);return t.fillStyle=i.text3,t.font=`400 15px ${C}`,t.fillText("Illustration: conceptual, not to scale.",4+c+16,24),t.fillStyle=i.text2,t.font=`400 18px ${C}`,De(t,l.caption,1016).slice(0,3).forEach((u,f)=>t.fillText(u,4,56+f*25)),r}function Ea(n){let[r,t]=Ye(384,544),a=ie.node(n),s=ht(n),i=a?.tier??"T01";t.fillStyle="rgba(11,13,16,0.9)",t.fillRect(0,0,384,544),t.strokeStyle=Ct,t.lineWidth=3,t.strokeRect(1.5,1.5,381,541),t.fillStyle=he[i],t.fillRect(30,40,4,64),t.textBaseline="alphabetic",t.font=`500 112px ${q}`,A(t,n,26,210,6),t.fillStyle=He,t.fillRect(30,240,46,4),t.fillStyle="#F1F3F5";let l=34;t.font=`500 ${l}px ${q}`;let c=(a?.name??n).toUpperCase();for(;A(t,c,0,0,7,!1)>324&&l>18;)l-=2,t.font=`500 ${l}px ${q}`;A(t,c,30,300,7),t.fillStyle=Xe,t.font=`400 18px ${C}`;let u=340;for(let f of De(t,a?.content?.category??"",324).slice(0,2))t.fillText(f,30,u),u+=25;return t.font=`600 13px ${C}`,A(t,`LEVEL ${Be((s?.level??0)+1)} \xB7 STORE ${Be(s?.number??0)}`,30,478,3.5),A(t,"LIVE MODEL \xB7 BODY MAP \xB7 LESSON",30,504,3),r}function Ta(n){let[o,r]=Ye(384,384),t=ie.node(n),a=t?.tier??"T01",s=384/2;r.beginPath(),r.arc(s,s,s-6,0,Math.PI*2),r.lineWidth=10,r.strokeStyle="rgba(200,206,212,0.95)",r.stroke(),r.beginPath(),r.arc(s,s,s-20,0,Math.PI*2),r.lineWidth=3,r.strokeStyle=he[a],r.stroke(),r.strokeStyle="rgba(200,206,212,0.85)",r.lineWidth=2;for(let u=0;u<48;u++){let f=u/48*Math.PI*2,d=s-30,h=s-(u%12===0?50:u%4===0?42:36);r.beginPath(),r.moveTo(s+Math.sin(f)*d,s-Math.cos(f)*d),r.lineTo(s+Math.sin(f)*h,s-Math.cos(f)*h),r.stroke()}r.textBaseline="alphabetic",r.fillStyle="rgba(214,219,224,0.96)",r.font=`500 70px ${q}`;let i=A(r,n,0,0,6,!1);A(r,n,s-i/2,s+16,6),r.font=`600 16px ${C}`;let l=(t?.name??"").toUpperCase(),c=A(r,l,0,0,5,!1);return A(r,l,s-c/2,s+56,5),r.fillStyle=He,r.fillRect(s-16,s+72,32,3),o}function an(n){return new Promise(e=>{let o=new Image;o.decoding="async",o.onload=()=>e(o),o.onerror=()=>e(null),o.src=n})}var Zs={w:1280,h:720};function Ra(n){let{w:e,h:o}=Zs,[r,t]=Ye(e,o),a=ie.node(n),s=a?.tier??"T01",i=ie.videosOf(n),l=t.createRadialGradient(e*.42,o*.38,40,e*.5,o*.5,e*.75);l.addColorStop(0,"#1B1D21"),l.addColorStop(1,"#060708"),t.fillStyle=l,t.fillRect(0,0,e,o);let c=t.createLinearGradient(0,0,e*.6,0);c.addColorStop(0,`${he[s]}55`),c.addColorStop(1,`${he[s]}00`),t.fillStyle=c,t.fillRect(0,0,e*.6,6),t.fillStyle="rgba(255,255,255,0.025)";for(let S=0;S<o;S+=4)t.fillRect(0,S,e,1);t.textBaseline="alphabetic",t.fillStyle=He,t.font=`600 26px ${C}`;let u=A(t,"07",56,78,1);t.fillStyle="#FFFFFF",t.font=`500 28px ${q}`,A(t,"XI THEATER",56+u+18,78,8),t.font=`500 26px ${q}`;let f=(a?.name??n).toUpperCase(),d=A(t,f,0,0,4,!1);t.font=`500 22px ${q}`;let h=A(t,n,0,0,2,!1)+26,m=e-56;if(t.fillStyle="#FFFFFF",t.font=`500 26px ${q}`,A(t,f,m-d,78,4),t.fillStyle=he[s],Po(t,m-d-18-h,50,h,38,8),t.fill(),t.fillStyle="#FFFFFF",t.font=`500 22px ${q}`,A(t,n,m-d-18-h+13,77,2),t.fillStyle="#E7C9A0",t.font=`600 15px ${C}`,A(t,i.length>0?`NOW SHOWING \xB7 ${i.length===1?"ONE FILM":`${i.length} FILMS`}`:"PROGRAMME IN PREPARATION",56,122,3.5),i.length===0){t.fillStyle="#FFFFFF",t.font=`500 40px ${q}`;let S="PROGRAMME IN PREPARATION",P=A(t,S,0,0,6,!1);A(t,S,(e-P)/2,o/2,6),t.fillStyle="#9FB0C2",t.font=`400 22px ${C}`;let _="No video meets the bar for this subject yet. The other stations teach it.";t.fillText(_,(e-t.measureText(_).width)/2,o/2+46)}let p=i.length===1?760:560,b=48,v=i.length===1?(e-p)/2:(e-p*2-b)/2;i.forEach((S,P)=>{let _=v+P*(p+b),U=168;da(t,_,U,p,400,20),t.fillStyle="rgba(255,255,255,0.055)",t.fill(),t.strokeStyle="rgba(255,255,255,0.16)",t.lineWidth=2,t.stroke(),t.fillStyle=He,t.font=`600 16px ${C}`;let x=A(t,Be(P+1),_+32,U+52,1);t.fillStyle="#FFFFFF",A(t,mn[S.role].toUpperCase(),_+32+x+12,U+52,3),t.strokeStyle="#E7C9A0",t.lineWidth=3,t.beginPath(),t.arc(_+p-62,U+58,28,0,Math.PI*2),t.stroke(),t.fillStyle="#E7C9A0",t.beginPath(),t.moveTo(_+p-70,U+44),t.lineTo(_+p-48,U+58),t.lineTo(_+p-70,U+72),t.closePath(),t.fill(),t.fillStyle="#FFFFFF",t.font=`500 30px ${q}`;let y=U+124;for(let M of De(t,S.title,p-64).slice(0,3))t.fillText(M,_+32,y),y+=40;t.fillStyle="#C9D6E3",t.font=`600 18px ${C}`,t.fillText(`${S.channel} \xB7 ${S.published}`,_+32,y+10),t.fillStyle="#9FB0C2",t.font=`400 19px ${C}`;let g=y+52;for(let M of De(t,S.about,p-64).slice(0,3))t.fillText(M,_+32,g),g+=27}),t.fillStyle="#9FB0C2",t.font=`400 16px ${C}`;let T=i.length>0?"Click the screen or press Enter to watch. Plays from YouTube in privacy-enhanced mode; nothing loads from YouTube until you press play.":"";return t.fillText(T,56,o-74),t.fillText(i.length>0?"Chosen for teaching from established educational publishers. Their claims are theirs; TRIARC does not cite them as sources.":"",56,o-48),r}function Js(n,e,o,r){let t=(c,u,f)=>(u[0]-c[0])*(f[1]-c[1])-(u[1]-c[1])*(f[0]-c[0]),a=t(o,r,n),s=t(o,r,e),i=t(n,e,o),l=t(n,e,r);return(a>0&&s<0||a<0&&s>0)&&(i>0&&l<0||i<0&&l>0)}var sn=.35,Ma=1,ei=80*Math.PI/180,ti=17,oi=2,ln=.18,wa=1.2,ni=12,Sa={gallery:1,warm:1.04,chroma:1.16,noir:1.3,cinema:1.3},ri={store:"model",board:"body",theater:"theater",window:"front",print:"model",directory:null},Aa=class{canvas;host;opts;gl=null;renderer=null;world=null;live=null;studyHolo=null;studyOn=!0;studyT=0;studyStore=null;studyClaim=null;studyMask=-1;studyFlash=0;lessonRects=new Map;rig=new So;input=null;raf=0;lastFrame=0;lastRender=0;time=0;disposed=!1;failed=!1;visible=!0;dirty=!0;ready=!1;reduced;scale=.9;exposure=Re.exposure;ema=16;calm=0;slowSince=0;busyFrames=0;wasBusy=!1;proj=At();view=At();viewProj=At();invViewProj=At();pointer=null;pointerDirty=!1;hover=null;focus=null;focusAt=0;snapKey="";snapAt=0;highlightLevel=null;fronts;opaqueWalls;holoCache=new Map;boards=new Map;cinemaScreens=new Map;drawnHolos=[];theaterPlaying=!1;dim=0;theaterKey="";uploaded=!1;resizeObserver=null;livePrev=null;postersLoading=new Set;observer=null;onLost=e=>{e.preventDefault(),this.fail("lost")};fixedScale;fixedDpr;constructor(e,o,r){this.canvas=e,this.host=o,this.opts=r;let t=globalThis.__OUTLET_SCALE__;this.fixedScale=typeof t=="number"&&t>0&&t<=1?t:null,this.fixedScale&&(this.scale=this.fixedScale);let a=globalThis.__OUTLET_DPR__;this.fixedDpr=typeof a=="number"&&a>=1&&a<=3?a:null,this.reduced=r.reducedMotion,this.rig.reducedMotion=r.reducedMotion,this.fronts=Jt.map(c=>({node:c.node,level:c.level,centre:[c.door[0],Ee(c.level)+2.8,c.door[1]],normal:[-c.bay.inward[0],0,-c.bay.inward[1]],u:[c.bay.along[0],0,c.bay.along[1]]}));let s=W,i=N;this.opaqueWalls=[...[-1,1].flatMap(c=>[-1,1].map(u=>({a:[c*i,u*i],b:[c*s,u*s]}))),{a:[i,0],b:[s,0]},{a:[0,-i],b:[0,-s]},{a:[-i,0],b:[-s,0]},...Jt.flatMap(c=>{let u=c.rooms,f=c.bay.inward,d=b=>[b[0]+f[0]*u.stele.thick,b[1]+f[1]*u.stele.thick],h=(b,v)=>[u.partition.door[0]+(b[0]-u.partition.door[0])*v,u.partition.door[1]+(b[1]-u.partition.door[1])*v],m=Math.hypot(u.partition.a[0]-u.partition.door[0],u.partition.a[1]-u.partition.door[1]),p=Math.hypot(u.partition.b[0]-u.partition.door[0],u.partition.b[1]-u.partition.door[1]);return[{a:u.stele.a,b:u.stele.b},{a:d(u.stele.a),b:d(u.stele.b)},{a:u.partition.a,b:h(u.partition.a,u.partition.doorHalf/m)},{a:h(u.partition.b,u.partition.doorHalf/p),b:u.partition.b}]})];let l=e.getContext("webgl2",{antialias:!0,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(!l){queueMicrotask(()=>this.fail("webgl"));return}this.gl=l,e.addEventListener("webglcontextlost",this.onLost);try{this.world=aa();for(let u of this.world.screens)u.kind==="board"&&u.node&&this.boards.set(u.node,u.rect),u.kind==="theater"&&u.node&&this.cinemaScreens.set(u.node,u.rect);let c=si(l);this.renderer=new Ro(l,this.world,c),o.dataset.quality=c,!this.fixedScale&&Pa(l)&&(this.scale=.5),this.live=new vo(l),this.studyHolo=new yo(l,r.base,()=>{this.uploaded=!0,this.dirty=!0});for(let u of this.world.overlays)u.key.startsWith("lesson:")&&u.node&&this.lessonRects.set(u.node,u.rect)}catch(c){console.warn("XI Outlet could not start its renderer",c),queueMicrotask(()=>this.fail("compile"));return}this.rig.goTo(r.start,!0),this.input=new bo(o,{click:(c,u)=>this.click(c,u),hover:(c,u)=>{this.pointer=c<0?null:[c,u],this.pointerDirty=!0},back:()=>this.back(),activate:()=>this.activate(),poke:()=>{this.dirty=!0},blocked:()=>document.querySelector("dialog[open]")!==null}),typeof IntersectionObserver<"u"&&(this.observer=new IntersectionObserver(c=>{for(let u of c)this.visible=u.isIntersecting;this.visible&&(this.dirty=!0)}),this.observer.observe(o)),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.dirty=!0}),this.resizeObserver.observe(o)),ua().then(()=>{this.disposed||!this.renderer||(this.renderer.setAtlas(fa()),this.dirty=!0)}),this.raf=requestAnimationFrame(this.tick)}goTo(e,o=this.reduced){this.renderer&&(this.rig.goTo(e,o),this.dirty=!0)}activate(){let e=this.focus;e&&(e.kind==="store"&&e.part==="theater"&&this.seatedAt()===e.node?this.opts.onSelect?.(e):e.kind==="store"?this.goTo(Fa(e.node,e.part)):e.kind==="level"?this.goTo({kind:"level",level:e.level}):(e.kind==="lift"||e.kind==="directory")&&this.opts.onSelect?.(e))}back(){if(this.theaterPlaying){this.setTheaterPlaying(!1),this.opts.onTheaterExit?.();return}this.rig.mode!=="exterior"&&this.goTo({kind:"exterior"})}setTheaterPlaying(e){this.theaterPlaying!==e&&(this.theaterPlaying=e,this.dirty=!0)}seatedAt(){if(this.rig.mode!=="walk")return null;let e=this.rig.camera();if(e.level===null)return null;for(let o of me[e.level]?.stores??[]){let r=o.stations.theater;if(Math.hypot(r.p[0]-e.eye[0],r.p[1]-e.eye[2])<.9)return o.node}return null}setStudy(e){this.studyOn!==e&&(this.studyOn=e,this.dirty=!0)}setStudyClaim(e){e?.node===this.studyClaim?.node&&e?.claim===this.studyClaim?.claim||(this.studyClaim=e,this.dirty=!0)}studyHere(){if(!this.studyOn||this.rig.mode!=="walk"||this.rig.travelling)return null;let e=this.rig.camera();if(e.level===null)return null;for(let o of me[e.level]?.stores??[]){let r=o.stations.lesson.p;if(Math.hypot(r[0]-e.eye[0],r[1]-e.eye[2])<.9)return o}return null}setReducedMotion(e){this.reduced=e,this.rig.reducedMotion=e,this.dirty=!0}highlight(e){this.highlightLevel=e,this.dirty=!0}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.input?.dispose(),this.observer?.disconnect(),this.resizeObserver?.disconnect(),this.canvas.removeEventListener("webglcontextlost",this.onLost),this.live?.dispose(),this.studyHolo?.dispose(),this.renderer?.dispose(),this.gl?.getExtension("WEBGL_lose_context")?.loseContext(),this.gl=null}fail(e){this.failed||this.disposed||(this.failed=!0,cancelAnimationFrame(this.raf),this.opts.onFail(e))}tick=e=>{if(this.disposed||this.failed)return;if(this.raf=requestAnimationFrame(this.tick),!this.visible||document.hidden){this.lastFrame=0;return}let o=this.lastFrame?Math.min(.5,(e-this.lastFrame)/1e3):1/60;this.lastFrame=e;let r=this.input?.consume();this.theaterPlaying&&r&&(r.forward!==0||r.strafe!==0||r.turn!==0||r.zoom!==0?(this.setTheaterPlaying(!1),this.opts.onTheaterExit?.()):r={...r,lookX:0,lookY:0});let t=r?this.rig.update(o,r):!1;this.reduced||(this.time+=o);let a=this.theaterPlaying?1:0,s=this.dim!==a;s&&(this.dim=this.reduced||Math.abs(a-this.dim)<.02?a:this.dim+(a-this.dim)*Math.min(1,o*5));let i=this.studyHere();i&&(this.studyStore=i);let l=i?1:0,c=this.studyT!==l;c&&(this.reduced?this.studyT=l:l>this.studyT?this.studyT=Math.min(1,this.studyT+o/Gn):this.studyT=Math.max(0,this.studyT-o/zn)),this.studyT===0&&!i&&(this.studyStore=null),this.studyFlash>0&&(this.studyFlash=Math.max(0,this.studyFlash-o*2.2));let u=t||this.rig.travelling||this.dirty||this.pointerDirty||s||c||this.studyFlash>0;!u&&(this.reduced||this.theaterPlaying||e-this.lastRender<33)||this.render(e,u)};render(e,o){let r=this.gl,t=this.renderer;if(!r||!t)return;let a=this.lastRender?e-this.lastRender:16;this.lastRender=e;let s=this.uploaded;this.uploaded=!1,this.dirty=!1;let i=this.rig.camera(),l=this.fixedDpr??Math.min(window.devicePixelRatio||1,t.tier==="cinematic"?1.5:2),c=Math.max(1,this.canvas.clientWidth),u=Math.max(1,this.canvas.clientHeight),f=Math.max(1,Math.round(c*l*this.scale)),d=Math.max(1,Math.round(u*l*this.scale));(this.canvas.width!==f||this.canvas.height!==d)&&(this.canvas.width=f,this.canvas.height=d);let h=Math.min(1,Math.max(0,(i.fov-yt)/(nn-yt))),m=c/u,p=i.fov+Math.max(0,Math.min(ei,2*Math.atan(1/m))-yt)*(1-h);er(this.proj,p,m,i.level===null?.5:.08,3200),c>640&&(this.proj[8]=(this.proj[8]??0)-.16*h);let b=Jn(i.heading,i.pitch);ao(this.view,i.eye,Ho(i.eye,b)),Ft(this.viewProj,this.proj,this.view),so(this.invViewProj,this.viewProj);let v=ee(ye(b,[0,1,0])),T=ye(v,b);this.pointerDirty&&(this.pointerDirty=!1,this.hover=this.pointer?this.pickClient(this.pointer[0],this.pointer[1]):null,this.host.style.cursor=this.hover&&this.hover.kind!=="floor"?"pointer":""),e-this.focusAt>140&&(this.focusAt=e,this.focus=this.rig.mode==="exterior"?this.hover:this.pick(0,0),this.focus?.kind==="floor"&&(this.focus=null)),t.setRibbon(this.rig.routeAhead()),this.feedTextures(i.level,i.eye),this.updateLive(i.level,i.eye,b,a);let S=this.holoFrame(i.level,i.eye,b);this.drawnHolos=S.map(x=>x.holo.node);let _=this.rig.mode!=="exterior"&&Math.max(Math.abs(i.eye[0]),Math.abs(i.eye[2]))<W-.3&&i.eye[1]<te?Re.exposureInside*this.roomGain(i.level,i.eye):Re.exposure;this.exposure=this.reduced?_:this.exposure+(_-this.exposure)*Math.min(1,a/1e3*3),Math.abs(_-this.exposure)<.01?this.exposure=_:this.dirty=!0;let U=this.rig.mode==="exterior"?this.highlightLevel??(this.hover?.kind==="level"?this.hover.level:null):null,G=U!==null?Ee(U):0;if(t.draw({viewProj:this.viewProj,invViewProj:this.invViewProj,eye:i.eye,right:v,up:T,time:this.time,cabY:this.rig.cabY(),fade:1,holos:S,pxPerMetre:d/(2*Math.tan(p/2)),dim:this.dim,mirrorY:this.rig.mode==="exterior"||i.level===null||i.level===0?-.05:Ee(i.level),level:this.rig.mode==="exterior"?null:i.level,exposure:this.exposure,highlight:U!==null?{min:[-W-.45,G-ae-.05,-W-.45],max:[W+.45,G+Ue-ae,W+.45],rgba:[.89,.14,.17,.16]}:null,study:this.studyFrame(i.eye)},f,d),o&&this.wasBusy&&!s&&this.adapt(a,e),this.wasBusy=o,this.ready||(this.ready=!0,this.host.dataset.state="live",this.opts.onReady()),this.emit(e,i.level,i.eye,i.heading),this.reportTheater(c,u),this.opts.onFrame){let x=Float32Array.from(this.viewProj);this.opts.onFrame({mode:this.rig.mode,level:i.level,x:i.eye[0],z:i.eye[2],eyeY:i.eye[1],heading:i.heading,pitch:i.pitch,width:c,height:u,project:(y,g,M)=>{let L=(x[3]??0)*y+(x[7]??0)*g+(x[11]??0)*M+(x[15]??0);if(L<.05)return null;let H=((x[0]??0)*y+(x[4]??0)*g+(x[8]??0)*M+(x[12]??0))/L,V=((x[1]??0)*y+(x[5]??0)*g+(x[9]??0)*M+(x[13]??0))/L;return[(H+1)/2*c,(1-V)/2*u,L]},blocked:(y,g)=>{let M=[i.eye[0],i.eye[2]];return this.opaqueWalls.some(L=>Js(M,[y,g],L.a,L.b))}})}}reportTheater(e,o){let r=this.seatedAt(),t=r?this.cinemaScreens.get(r):void 0,a=null;if(r&&t){let i=(d,h)=>{let m=t.centre[0]+t.u[0]*t.hu*d+t.v[0]*t.hv*h,p=t.centre[1]+t.u[1]*t.hu*d+t.v[1]*t.hv*h,b=t.centre[2]+t.u[2]*t.hu*d+t.v[2]*t.hv*h,v=this.viewProj,T=(v[0]??0)*m+(v[4]??0)*p+(v[8]??0)*b+(v[12]??0),S=(v[1]??0)*m+(v[5]??0)*p+(v[9]??0)*b+(v[13]??0),P=(v[3]??0)*m+(v[7]??0)*p+(v[11]??0)*b+(v[15]??0);return P<.05?null:[(T/P+1)/2*e,(1-S/P)/2*o]},l=i(-1,1),c=i(1,1),u=i(1,-1),f=i(-1,-1);l&&c&&u&&f&&(a={node:r,corners:[l,c,u,f]})}let s=a?`${this.theaterPlaying?"playing":"seated"}:${a.node}:${a.corners.map(i=>`${i[0].toFixed(1)},${i[1].toFixed(1)}`).join(";")}`:"";s!==this.theaterKey&&(this.theaterKey=s,this.host.dataset.theater=a?this.theaterPlaying?"playing":"seated":"",this.opts.onTheaterScreen?.(a))}adapt(e,o){if(!(this.fixedScale||++this.busyFrames<5)){if(this.ema=this.ema*.85+e*.15,this.renderer?.tier==="cinematic"&&this.scale<=.6&&this.ema>40){this.renderer.setTier("basic"),this.host.dataset.quality="basic",this.scale=.85,this.ema=24,this.calm=0;return}this.ema>42&&this.scale>sn?(this.scale=Math.max(sn,this.scale*.88),this.calm=0):this.ema<22?++this.calm>50&&this.scale<Ma&&(this.scale=Math.min(Ma,this.scale*1.08),this.calm=0):this.calm=0,this.scale<=sn&&this.ema>650?this.slowSince?o-this.slowSince>9e3&&this.fail("slow"):this.slowSince=o:this.slowSince=0}}roomGain(e,o){let r=e===null?void 0:me[e];if(!r)return 1;let t=Oo(r,[o[0],o[2]]);return t.kind!=="store"?1:Math.min(Math.abs(o[0]),Math.abs(o[2]))>N?Sa.cinema:Sa[ke(t.store.node).mood]}posterUrl(e,o){let r=ie.node(e)?.content?.rendering?.asset;return r?`${this.opts.base}visuals/${r}-${o}.webp`:null}feedTextures(e,o){let r=this.renderer;if(!r)return;for(let i of Jt){let l=e===i.level?640:320,c=l===640?2:1,u=`store:${i.node}`;if(r.screenGrade(u)>=c)continue;let f=`${u}@${l}`;if(this.postersLoading.has(f)||this.postersLoading.size>=4)continue;let d=this.posterUrl(i.node,l);d&&(this.postersLoading.add(f),an(d).then(h=>{if(this.postersLoading.delete(f),!h||this.disposed||!this.renderer)return;this.renderer.setScreenImage(u,h,c,!0);let m=this.rig.camera().level;(m===null||m===i.level)&&(this.dirty=!0,this.uploaded=!0)}))}if(e===null)return;let t=me[e];if(!t)return;let a=`directory:${e}`;if(r.screenGrade(a)<3)r.setScreenImage(a,ha(e),3,!0),this.dirty=!0,this.uploaded=!0;else{let i=t.stores.slice().sort((l,c)=>Math.hypot(l.display[0]-o[0],l.display[1]-o[2])-Math.hypot(c.display[0]-o[0],c.display[1]-o[2]));e:for(let l of i){let c=this.nearStore(l,o);for(let[u,f,d,h]of this.storeCanvases(l))if(!(h&&!c)&&!(r.screenGrade(u)>=3)){r.setScreenImage(u,f(),3,!0,d),this.dirty=!0,this.uploaded=!0;break e}}}for(let i of t.stores){if(!this.nearStore(i,o))continue;let l=`print:${i.node}`;if(r.screenGrade(l)>=3||this.postersLoading.has(l)||this.postersLoading.size>=4)continue;let c=this.posterUrl(i.node,640);c&&(this.postersLoading.add(l),an(c).then(u=>{this.postersLoading.delete(l),!(!u||this.disposed||!this.renderer)&&(this.renderer.setScreenImage(l,u,3,!0),this.dirty=!0,this.uploaded=!0)}))}let s=new Set([a]);for(let i of t.stores){for(let[l]of this.storeCanvases(i))s.add(l);s.add(`print:${i.node}`),s.add(`holo:${i.node}`)}r.evict(i=>s.has(i))}nearStore(e,o){return Math.hypot(e.door[0]-o[0],e.door[1]-o[2])<ni}storeCanvases(e){let o=e.node;return[[`banner:${o}`,()=>Ea(o),!0,!1],[`stele:${o}`,()=>ba(o),!0,!0],[`board:${o}`,()=>ma(o,this.boardSide(e)>0),!1,!0],[`lesson:${o}`,()=>ya(o),!0,!0],[`examples:${o}`,()=>ga(o),!0,!0],[`caption:${o}`,()=>xa(o),!0,!0],[`theater:${o}`,()=>Ra(o),!1,!0],[`medallion:${o}`,()=>Ta(o),!0,!0]]}boardSide(e){let o=this.boards.get(e.node);return o?(e.holo.at[0]-o.centre[0])*o.u[0]+(e.holo.at[1]-o.centre[2])*o.u[2]>=0?1:-1:1}studyFrame(e){let o=this.studyStore,r=this.studyT,t=this.studyHolo;if(!o||r<=0||!t)return null;let a=I=>{let E=Math.min(1,Math.max(0,I));return E*E*(3-2*E)},s=ie.node(o.node)?.tier??"T01",i=ro(bn(he[s])),l=kn(o),c=Ee(o.level),u=Math.cos(l.facing),f=Math.sin(l.facing),d=this.studyClaim?.node===o.node?this.studyClaim.claim:null,h=Hn(o.node,d)?.parts??[],m=oo(h);m!==this.studyMask&&(this.studyMask>=0&&!this.reduced&&(this.studyFlash=1),this.studyMask=m);let p=[l.at[0],c+mt.holoY,l.at[1]],b=e[0]-p[0],v=e[2]-p[2],T=Math.hypot(b,v)||1,S=[v/T,0,-b/T],P=Math.atan2(b,-v)-l.facing,_=-Math.atan2(Math.sin(P),Math.cos(P))*180/Math.PI,U=a((r-.7)/.3),G=null;U>0&&!this.reduced&&this.ema<40&&t.prepare(o.node)&&t.render(o.node,{az:_,time:this.time,parts:h})&&t.texture?G={tex:t.texture,rect:[0,0,1,1]}:G=t.still(o.node,h);let x=this.viewProj,y=I=>{let E=1/0,F=1/0,k=-1/0,D=-1/0;for(let B of I){let O=(x[3]??0)*B[0]+(x[7]??0)*B[1]+(x[11]??0)*B[2]+(x[15]??0);if(O<.05)continue;let z=((x[0]??0)*B[0]+(x[4]??0)*B[1]+(x[8]??0)*B[2]+(x[12]??0))/O,Y=((x[1]??0)*B[0]+(x[5]??0)*B[1]+(x[9]??0)*B[2]+(x[13]??0))/O;E=Math.min(E,z),k=Math.max(k,z),F=Math.min(F,Y),D=Math.max(D,Y)}return k>E?[(E+k)/2,(F+D)/2,(k-E)/2,(D-F)/2]:[0,0,0,0]},g=I=>[[-1,-1],[1,-1],[1,1],[-1,1]].map(([E=0,F=0])=>[I.centre[0]+I.u[0]*I.hu*E+I.v[0]*I.hv*F,I.centre[1]+I.u[1]*I.hu*E+I.v[1]*I.hv*F,I.centre[2]+I.u[2]*I.hu*E+I.v[2]*I.hv*F]),M=this.lessonRects.get(o.node)??null,L=null,H=Yn(o.node,d);if(M&&H){let I=rt(M),E=H.u0+H.u1-1,F=1-(H.v0+H.v1);L={centre:[M.centre[0]+M.u[0]*M.hu*E+M.v[0]*M.hv*F+I[0]*.01,M.centre[1]+M.v[1]*M.hv*F,M.centre[2]+M.u[2]*M.hu*E+M.v[2]*M.hv*F+I[2]*.01],u:M.u,v:M.v,hu:(H.u1-H.u0)*M.hu,hv:(H.v1-H.v0)*M.hv}}let V=.55,j=[];for(let[I,E]of[[-V,-V],[V,-V],[V,V],[-V,V]])j.push([l.at[0]+I,c,l.at[1]+E],[l.at[0]+I,c+mt.holoY+mt.holoHalf+.1,l.at[1]+E]);return{lights:a(r/.45)*.92,spots:[L?y(g(L)):[0,0,0,0],M?y(g(M)):[0,0,0,0],y(j)],spotW:[1,.62,0],table:new Float32Array([u,0,-f,0,0,1,0,0,f,0,u,0,l.at[0],c,l.at[1],1]),assemble:a((r-.1)/.65),beam:new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,l.at[0],c+mt.top,l.at[1],1]),beamHeight:no,holo:G?{centre:p,right:S,up:[0,1,0],half:mt.holoHalf,tex:G.tex,rect:G.rect,reveal:U,flash:this.studyFlash}:null,claim:L,neonA:i.a,neonB:i.b,motion:!this.reduced}}holoOf(e){return this.holoCache.has(e)||this.holoCache.set(e,cr(e)),this.holoCache.get(e)??null}holoFrame(e,o,r){if(e===null||this.rig.mode==="exterior")return[];let t=Math.hypot(r[0],r[2])||1,a=[];for(let i of me[e]?.stores??[]){let l=i.holo.at[0]-o[0],c=i.holo.at[1]-o[2],u=Math.hypot(l,c);if(u>ti||u>1.6&&(l*r[0]+c*r[2])/(u*t)<.15)continue;let f={a:[o[0],o[2]],b:i.holo.at};this.opaqueWalls.every(d=>Do(f,d)>.05)&&a.push({s:i,d:u})}a.sort((i,l)=>i.d-l.d);let s=[];for(let{s:i}of a.slice(0,oi).reverse()){let l=this.holoDraw(i);l&&s.push(l)}return s}holoDraw(e){let o=this.holoOf(e.node);if(!o)return null;let r=this.time,t=Math.PI-e.holo.facing+(this.reduced?0:Math.sin(r*.35)*.32),a=wa,s=Math.cos(t)*a,i=Math.sin(t)*a,[l,c]=e.holo.at,u=Ee(e.level)+ln,f=new Float32Array([s,0,-i,0,0,a,0,0,i,0,s,0,l,u,c,1]),d=v=>[s*v[0]+i*v[2]+l,v[1]*a+u,-i*v[0]+s*v[2]+c],h=new Float32Array(o.targets.length*4);o.targets.forEach((v,T)=>{let S=d(v.at);h.set([S[0],S[1],S[2],v.r*a],T*4)});let m=[],p=this.boards.get(e.node);if(p&&o.rows.length>0){let v={centre:p.centre,u:p.u,n:rt(p),hu:p.hu,hv:p.hv};for(let T of ur(o,d,v,this.boardSide(e),rn(o.rows.length),30/It.w*p.hu*2)){let[S,P,_,U]=T.points;m.push(...S,...P,...P,..._,..._,...U)}}if(o.whole)for(let[S,P,_,U]of[[-.4,.02,1,1],[.4,.02,-1,1],[-.4,1.92,1,-1],[.4,1.92,-1,-1]]){let G=d([S,P,.14]);m.push(...d([S+_*.15,P,.14]),...G,...G,...d([S,P+U*.15,.14]))}let b=[];for(let[v,T,S]of[[.96,.5,.25],[1.52,.42,-.4]]){let _=this.reduced?0:r*S;for(let U=0;U<40;U+=2){let G=_+U/40*Math.PI*2,x=_+(U+1)/40*Math.PI*2;b.push(...d([Math.sin(G)*T,v,Math.cos(G)*T]),...d([Math.sin(x)*T,v,Math.cos(x)*T]))}}return{holo:o,model:f,rings:new Float32Array(b),leaders:new Float32Array(m),targets:h,scanY:this.reduced?-10:.05+(1-Math.abs(r*.2%2-1))*1.8,pulse:this.reduced?.4:.5+.5*Math.sin(r*2.2)}}updateLive(e,o,r,t){let a=this.live,s=this.renderer;if(!a||!s)return;let i=null;if(!this.reduced&&e!==null&&this.studyT===0&&this.ema<(this.opts.liveBudget??60)){let u=18;for(let f of me[e]?.stores??[]){let d=f.display[0]-o[0],h=f.display[1]-o[2],m=Math.hypot(d,h);m<u&&d*r[0]+h*r[2]>-2&&(u=m,i=f.node)}}let l=i?`store:${i}`:null;if(this.livePrev&&this.livePrev.key!==l){let u=this.livePrev;this.livePrev=null,s.setScreenTexture(u.key,null,u.saved),a.showing=null,this.dirty=!0}if(!i||!l||!a.prepare(i))return;a.render(i,this.time,this.ema<24?0:66)&&this.livePrev?.key!==l&&(this.livePrev={key:l,saved:s.setScreenTexture(l,a.texture)})}pickClient(e,o){let r=this.canvas.getBoundingClientRect();return r.width===0||r.height===0?null:this.pick((e-r.left)/r.width*2-1,1-(o-r.top)/r.height*2)}pick(e,o){let{origin:r,dir:t}=or(this.invViewProj,e,o),a=this.rig.camera();if(this.rig.mode==="exterior"||a.level===null){let h=null,m=1/0;for(let p of me){let b=nr(r,t,[-W-.6,p.y-ae,-W-.6],[W+.6,p.y+Ue-ae,W+.6]);b!==null&&b<m&&(m=b,h={kind:"level",level:p.index})}if(!h&&t[1]<0){let p=-r[1]/t[1];Math.hypot(r[0]+t[0]*p,r[2]+t[2]*p)<52&&(h={kind:"plaza"})}return h}let s=a.level,i=Ee(s),l=null,c=1/0,u=[a.eye[0],a.eye[2]],f=h=>{let m=[r[0]+t[0]*h,r[2]+t[2]*h],p={a:u,b:[m[0]-(m[0]-u[0])*.02,m[1]-(m[1]-u[1])*.02]};return this.opaqueWalls.every(b=>Do(p,b)>.01)},d=(h,m)=>{h!==null&&h<c&&h<70&&f(h)&&(c=h,l=m)};for(let h of this.world?.screens??[]){if(h.level!==s)continue;let m=io(r,t,h.rect.centre,rt(h.rect),h.rect.u,h.rect.v,h.rect.hu,h.rect.hv),p=ri[h.kind];h.kind==="directory"?d(m,{kind:"directory",level:s,distance:m??0}):h.node&&p&&d(m,{kind:"store",node:h.node,part:p,distance:m??0})}for(let h of this.world?.overlays??[]){if(h.level!==s||!h.station)continue;let m=io(r,t,h.rect.centre,rt(h.rect),h.rect.u,h.rect.v,h.rect.hu,h.rect.hv);d(m,{kind:"store",node:h.node,part:h.station,distance:m??0})}for(let h of me[s]?.stores??[]){let m=ai(r,t,h.holo.at,.45,i+ln,i+ln+1.82*wa);m!==null&&d(m,{kind:"store",node:h.node,part:"body",distance:m})}for(let h of this.fronts)h.level===s&&d(io(r,t,h.centre,h.normal,h.u,[0,1,0],N/2,2.8),{kind:"store",node:h.node,part:"front",distance:0});{let h=t[0]*t[0]+t[2]*t[2],m=2*(r[0]*t[0]+r[2]*t[2]),p=r[0]*r[0]+r[2]*r[2]-be*be,b=m*m-4*h*p;if(h>1e-9&&b>=0){let v=(-m-Math.sqrt(b))/(2*h),T=r[1]+t[1]*v;v>0&&T>i&&T<i+Ue&&d(v,{kind:"lift",distance:v})}}if(l){let h=l;return h.kind==="store"&&h.part==="front"?{...h,distance:c}:h}if(t[1]<-.02){let h=(i-r[1])/t[1],m=[r[0]+t[0]*h,r[2]+t[2]*h];if(h<40&&Fn(s,m))return{kind:"floor",level:s,p:m,distance:h}}return null}click(e,o){let r=this.pickClient(e,o);if(r)switch(r.kind){case"level":this.goTo({kind:"level",level:r.level});break;case"plaza":this.goTo({kind:"plaza"});break;case"store":this.goTo(Fa(r.node,r.part));break;case"floor":this.goTo({kind:"point",level:r.level,p:r.p});break;case"lift":case"directory":this.opts.onSelect?.(r);break}}emit(e,o,r,t){let a=o!==null?me[o]:void 0,s=[r[0],r[2]],i=a&&this.rig.mode!=="exterior"?Oo(a,s):null,l=null;if(i?.kind==="store"&&this.rig.mode==="walk")for(let h of Zt){let m=i.store.stations[h].p;Math.hypot(m[0]-s[0],m[1]-s[1])<.9&&(l=h)}let c={mode:this.rig.mode,level:this.rig.mode==="exterior"?null:o,region:i?.kind??null,store:i?.kind==="store"?i.store.node:null,focus:this.focus,x:s[0],z:s[1],heading:t,destination:this.rig.destination,live:this.live?.showing??null,station:l,holos:this.drawnHolos,study:this.studyT>.5&&this.studyStore?this.studyStore.node:null},u=c.focus,f=JSON.stringify([c.mode,c.level,c.region,c.store,u?[u.kind,"node"in u?u.node:"","level"in u?u.level:"","part"in u?u.part:""]:null,c.destination,c.live,c.station,c.holos,c.study]);if(f===this.snapKey&&e-this.snapAt<120)return;this.snapKey=f,this.snapAt=e;let d=this.host.dataset;d.mode=c.mode,d.level=c.level===null?"":String(c.level+1),d.store=c.store??"",d.live=c.live??"",d.region=c.region??"",d.station=c.station??"",d.holo=c.holos.join(","),d.study=c.study??"",d.frame=`${Math.round(this.ema)}ms@${this.scale.toFixed(2)}`,d.pos=`${c.x.toFixed(1)},${c.z.toFixed(1)}`,this.opts.onSnapshot(c)}};function Fa(n,e){return e==="front"?{kind:"store",node:n}:{kind:"store",node:n,station:e}}function ai(n,e,o,r,t,a){let s=n[0]-o[0],i=n[2]-o[1],l=e[0]*e[0]+e[2]*e[2];if(l<1e-9)return null;let c=2*(s*e[0]+i*e[2]),u=s*s+i*i-r*r,f=c*c-4*l*u;if(f<0)return null;let d=(-c-Math.sqrt(f))/(2*l);if(d<=0)return null;let h=n[1]+e[1]*d;return h>=t&&h<=a?d:null}function si(n){let e=n.getExtension("EXT_color_buffer_float")!==null,o=globalThis.__OUTLET_QUALITY__;return o==="basic"?"basic":o==="cinematic"?e?"cinematic":"basic":e?Pa(n)?"basic":"cinematic":"basic"}function Pa(n){let e=String(n.getParameter(n.RENDERER));if(/^webkit webgl$/i.test(e)){let o=n.getExtension("WEBGL_debug_renderer_info");o&&(e=String(n.getParameter(o.UNMASKED_RENDERER_WEBGL)))}return/swiftshader|llvmpipe|softpipe|software|basic render/i.test(e)}export{Aa as OutletEngine};
