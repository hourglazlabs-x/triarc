import{a as St}from"./chunk-B74KHNJF.js";import{b as Tr,c as Ht,e as Er,f as wr,g as Rr,j as Ar,k as Gt,l as Pr,m as Mr,n as Fr,o as Sr,p as _r,q as po,r as Lr,t as Nr,u as Vr,v as Ir,w as vo}from"./chunk-VGWI424W.js";import{$ as nt,$a as hr,A as zo,Ab as Be,B as Wo,Bb as Bt,D as je,Fa as it,Ga as It,H as Yo,Ha as Ke,I as $o,Ia as Jo,Ja as ho,Ka as er,N as U,Na as tr,O as _,P as C,Q as de,R as ot,Ra as or,S as Ae,Sa as rr,T as ee,Ta as nr,U as ie,Ua as ar,V as rt,Va as sr,W as we,Wa as ir,X as ke,Xa as lr,Y as _t,Ya as ur,Z as he,Za as cr,_ as _e,_a as dr,aa as Xo,ab as fo,ba as Te,bb as fr,ca as ge,cb as Ce,da as Lt,db as mr,ea as jo,eb as pr,fb as qe,ga as De,gb as ve,ha as ko,hb as Re,ia as at,ib as Pe,ja as Nt,jb as lt,ka as Ko,kb as ut,la as lo,lb as vr,ma as uo,mb as ct,na as co,nb as br,oa as qo,ob as yr,pa as st,pb as Dt,qa as Vt,qb as dt,r as Ve,ra as Qo,rb as Ot,sa as Zo,sb as gr,tb as xr,ub as Ut,vb as Ct,wb as H,x as Ho,xb as ht,yb as ae,z as Go,zb as mo}from"./chunk-MOOGBU35.js";import{a as Co,b as Bo,c as Rt,d as At,e as Pt,f as Mt,i as Ft}from"./chunk-WY76X7OO.js";import{b as Xe}from"./chunk-Z7BKUDRS.js";var Dr=1.3;function zt(o){let e=[.93,.3,1],t=[o[0]*.5+e[0]*.5,o[1]*.5+e[1]*.5,o[2]*.5+e[2]*.5],n=1/Math.max(t[0],t[1],t[2],.001);return{a:[.3,.92,1],b:[t[0]*n,t[1]*n,t[2]*n]}}function Zn(o){let e=Rt({id:"N01",cam:[0,0,1],target:[0,0,0],glsl:""},o),t=e.indexOf(`
void main() {`);return e.slice(0,t)}var Jn=`
uniform float uFocus;
int partOf(float m) { int k = int(m + .5); return k >= 20 && k < 100 ? (k - 20) % 20 : -1; }
bool isFocused(float m) { int p = partOf(m); int f = int(uFocus + .5); return p >= 0 && ((f >> p) & 1) == 1; }
`,ea=`
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
`;function Or(o,e){return`${Zn(e)}
${o.glsl}
${ta(o)}
${Jn}
${ea}`}function ta(o){let e=[];return/vec3\s+palette\s*\(\s*int/.test(o.glsl)||e.push("vec3 palette(int i) { return vec3(.82, .9, .97); }"),/float\s+sceneDetail\s*\(/.test(o.glsl)||e.push("float sceneDetail(vec3 p, float m) { return 0.; }"),e.join(`
`)}var be=1.78/489,oa=510;function ye(o,e,t=0){return[(o-120)*be,(oa-e)*be,t]}var $t=6,X=(o,e,t,n,r=0)=>({x:o,y:e,w:t,d:n,z:r}),Cr=[X(120,108,16,.052),X(120,118,34,.08),X(120,128,48,.1),X(120,144,49,.113),X(120,165,45,.118),X(120,186,43,.115),X(120,206,40,.108),X(120,228,37,.1),X(120,250,36.5,.1),X(120,270,40,.104),X(120,290,45,.11),X(120,306,45,.106),X(120,318,37,.09),X(120,326,18,.05)],ra=[X(120,84,11,.048),X(120,112,12.5,.052)],yo=[X(70,132,13,.05),X(66,152,12,.045),X(63,180,10.5,.04),X(60,206,9.5,.036),X(57,228,8.6,.032),X(54,252,8.6,.032),X(51,276,7.8,.029),X(48,296,6.8,.025),X(46,308,6.2,.022)],go=[X(98,296,22,.085),X(96,326,20,.08),X(95,356,17,.07),X(95,384,13.5,.056),X(95,402,12.5,.05),X(96,426,12.5,.052),X(96,450,11,.046),X(97,470,9,.036),X(98,488,8,.03)];function na(o,e){let t=[],n=s=>o[Math.max(0,Math.min(o.length-1,s))],r=(s,a,i,c,l)=>.5*(2*a+(-s+i)*l+(2*s-5*a+4*i-c)*l*l+(-s+3*a-3*i+c)*l*l*l);for(let s=0;s<o.length-1;s++){let[a,i,c,l]=[n(s-1),n(s),n(s+1),n(s+2)];for(let u=0;u<e;u++){let h=u/e;t.push({x:r(a.x,i.x,c.x,l.x,h),y:r(a.y,i.y,c.y,l.y,h),z:r(a.z,i.z,c.z,l.z,h),w:Math.max(.5,r(a.w,i.w,c.w,l.w,h)),d:Math.max(.004,r(a.d,i.d,c.d,l.d,h))})}}return t.push(n(o.length-1)),t}function Wt(o,e,t=20,n=!0){let r=na(e,3),s=r.map(a=>Array.from({length:t+1},(i,c)=>{let l=c/t*Math.PI*2,u=ye(a.x,a.y,a.z);return[u[0]+Math.sin(l)*a.w*be,u[1],u[2]+Math.cos(l)*a.d]}));if(n){let a=r[0],i=r[r.length-1],c=(l,u)=>[.7,.35,0].map(h=>Array.from({length:t+1},(d,f)=>{let m=f/t*Math.PI*2,p=ye(l.x,l.y,l.z),b=Math.sqrt(1-h*h)*Math.min(l.w*be,l.d)*.8*u;return[p[0]+Math.sin(m)*l.w*be*h,p[1]+b,p[2]+Math.cos(m)*l.d*h]}));s.unshift(...c(a,1).reverse()),s.push(...c(i,-1))}aa(o,s)}function aa(o,e){let t=e.length,n=e[0]?.length??0,r=(a,i)=>e[Math.max(0,Math.min(t-1,a))]?.[(i%(n-1)+(n-1))%(n-1)]??[0,0,0],s=(a,i)=>{let c=Yt(r(a,i+1),r(a,i-1)),l=Yt(r(a+1,i),r(a-1,i)),u=xo(l,c);if(Math.hypot(u[0],u[1],u[2])<1e-12){let p=Ur(e[a===0?1:t-2]??[]);return ve(Yt(r(a,i),p))}let h=ve(u),d=Ur(e[Math.max(0,Math.min(t-1,a))]??[]),f=r(a,i),m=[f[0]-d[0],0,f[2]-d[2]];return h[0]*m[0]+h[2]*m[2]<0?[-h[0],-h[1],-h[2]]:h};for(let a=0;a<t-1;a++)for(let i=0;i<n-1;i++){let c=[[a,i],[a+1,i],[a+1,i+1],[a,i],[a+1,i+1],[a,i+1]];for(let[l,u]of c)o.push(...r(l,u),...s(l,u))}}function Ur(o){let e=Math.max(1,o.length-1),t=0,n=0,r=0;for(let s=0;s<e;s++){let a=o[s]??[0,0,0];t+=a[0],n+=a[1],r+=a[2]}return[t/e,n/e,r/e]}var Yt=(o,e)=>[o[0]-e[0],o[1]-e[1],o[2]-e[2]],xo=(o,e)=>[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]];function ft(o,e,t,n=0,r=18){let s=Math.max(6,Math.round(r/2)),a=Math.cos(n),i=Math.sin(n),c=(l,u)=>{let h=l/s*Math.PI,d=u/r*Math.PI*2,f=[Math.sin(h)*Math.sin(d),Math.cos(h),Math.sin(h)*Math.cos(d)],m=f[0]*t[0],p=f[1]*t[1],b=[e[0]+m*a-p*i,e[1]+m*i+p*a,e[2]+f[2]*t[2]],E=f[0]/t[0],A=f[1]/t[1],M=ve([E*a-A*i,E*i+A*a,f[2]/t[2]]);return[b,M]};for(let l=0;l<s;l++)for(let u=0;u<r;u++){let h=[[l,u],[l+1,u],[l+1,u+1],[l,u],[l+1,u+1],[l,u+1]];for(let[d,f]of h){let[m,p]=c(d,f);o.push(...m,...p)}}}function Br(){let o=[];ft(o,ye(120,55,.004),[27*be,35*be,.104],0,24),Wt(o,ra,18,!1),Wt(o,Cr,28);for(let e of[1,-1]){let t=s=>({...s,x:e>0?s.x:240-s.x});Wt(o,yo.map(t),16),Wt(o,go.map(t),18);let n=e>0?41:199;ft(o,ye(n,330,.006),[7.5*be,17*be,.024],e>0?.08:-.08,14);let r=e>0?96:144;ft(o,ye(r,501,.045),[9.5*be,7.5*be,.11],0,14)}return new Float32Array(o)}function Hr(o=.6,e=2.3,t=48){let n=[];for(let r=0;r<t;r++){let s=r/t*Math.PI*2,a=(r+1)/t*Math.PI*2,i=(c,l)=>[Math.sin(c)*o,l,Math.cos(c)*o,Math.sin(c),0,Math.cos(c)];n.push(...i(s,0),...i(a,0),...i(a,e),...i(s,0),...i(a,e),...i(s,e))}return new Float32Array(n)}var Gr={brain:0,hypothalamus:-.005,brainstem:-.025,"visual-cortex":-.07,eyes:.086,ears:0,nose:.104,mouth:.09,thyroid:.035,thymus:.07,heart:.035,lungs:0,liver:.02,gallbladder:.055,stomach:.04,spleen:-.035,pancreas:-.02,kidneys:-.062,adrenals:-.062,"small-intestine":.04,"large-intestine":.035,bladder:.04,"spinal-cord":-.088,"sympathetic-chain":-.072,vagus:-.01,"arm-muscles":0,"thigh-muscles":0,"belly-fat":.07,"bone-marrow":0,"lymph-nodes":.03,scalp:0,fingernails:.02,toenails:.12,forearm:0,ankle:0,hand:.01,body:0};function To(o,e){let t=[],n=[],r=0,s=0,a=o.match(/[MLHVQCSZmlhvqcsz]|-?\d*\.?\d+(?:e-?\d+)?/g)??[],i=0,c="M",l=()=>Number(a[i++]);for(;i<a.length;){let u=a[i]??"";if(/[A-Za-z]/.test(u)&&(c=u,i++,c==="Z"||c==="z")){n[0]&&n.push(n[0]);continue}if(c==="M")n.length>1&&t.push(n),r=l(),s=l(),n=[ye(r,s,e)],c="L";else if(c==="L")r=l(),s=l(),n.push(ye(r,s,e));else if(c==="H")r=l(),n.push(ye(r,s,e));else if(c==="V")s=l(),n.push(ye(r,s,e));else if(c==="Q"){let h=l(),d=l(),f=l(),m=l();for(let p=1;p<=6;p++){let b=p/6,E=1-b;n.push(ye(E*E*r+2*E*b*h+b*b*f,E*E*s+2*E*b*d+b*b*m,e))}r=f,s=m}else{let h=c==="c"||c==="C"?6:c==="s"||c==="S"||c==="q"?4:2;for(let d=0;d<h&&i<a.length&&!/[A-Za-z]/.test(a[i]??"");d++)i++;n.length>1&&t.push(n),n=[]}}return n.length>1&&t.push(n),t}function sa(o,e){let t=Gr[o];if("e"in e){let[l,u,h,d,f=0]=e.e,m=Math.max(.006,Math.min(.09,Math.min(h,d)*be*.9));return{organs:[{centre:ye(l,u,t),radii:[h*be,d*be,m],rotZ:-f*Math.PI/180}],strands:[]}}if(e.line!==void 0)return e.line<1?{organs:[],strands:[]}:{organs:[],strands:To(e.d,t).map(l=>({points:l,radius:Math.max(.004,e.line*be*.5)}))};let n=To(e.d,t).flat();if(n.length===0)return{organs:[],strands:[]};let r=n.map(l=>l[0]),s=n.map(l=>l[1]),a=[(Math.min(...r)+Math.max(...r))/2,(Math.min(...s)+Math.max(...s))/2,t],i=Math.max(.006,(Math.max(...r)-Math.min(...r))/2),c=Math.max(.006,(Math.max(...s)-Math.min(...s))/2);return{organs:[{centre:a,radii:[i,c,Math.min(i,c)],rotZ:0}],strands:[]}}var ia={vessels:[{key:"arteries",color:je.artery,z:.012},{key:"veins",color:je.vein,z:.004}],nerves:[{key:"nerves",color:je.nerve,z:-.012}],lymphatics:[{key:"lymphatics",color:je.lymph,z:.026}],autonomic:[{key:"autonomic",color:je.nerve,z:-.07}]};function la(){let o=11,e=()=>(o=o*1664525+1013904223>>>0,o/4294967296),t=[[Cr,140],[yo,30],[yo.map(r=>({...r,x:240-r.x})),30],[go,40],[go.map(r=>({...r,x:240-r.x})),40]],n=[ye(120,55,0)];for(let r=0;r<24;r++)n.push(ye(120+(e()-.5)*40,55+(e()-.5)*52,(e()-.5)*.12));for(let[r,s]of t)for(let a=0;a<s;a++){let i=Math.floor(e()*(r.length-1)),c=r[i],l=r[i+1],u=e(),h=(c.w+(l.w-c.w)*u)*.8,d=(c.d+(l.d-c.d)*u)*.8,f=e()*Math.PI*2,m=Math.sqrt(e());n.push(ye(c.x+(l.x-c.x)*u+Math.sin(f)*h*m,c.y+(l.y-c.y)*u,Math.cos(f)*d*m))}return n}var bo=null;function zr(o){let e=Ve.node(o),t=e?.content?.bodyMap;if(!e||!t)return null;let n=Yo(t),r=new Set(n.map(u=>u.region)),s=u=>{let h=[],d=[];for(let f of u)for(let m of Go[f].shapes){let p=sa(f,m);h.push(...p.organs),d.push(...p.strands)}return{organs:h,strands:d}},a=t.overlays??[],i=[];for(let u of a)for(let h of ia[u]??[])for(let d of zo[h.key])for(let f of To(d,h.z))i.push({points:f,color:H(h.color)});let c=H(Xe[e.tier]),l=$o(n,!1).filter(u=>u.region!=="body").map(u=>({at:ye(u.x,u.y,Gr[u.region]),r:Math.max(.035,u.r*be*.85),rows:u.rows}));return a.includes("cells")&&!bo&&(bo=la()),{node:o,tint:c,lit:s(r),ghosts:s(Ho.filter(u=>!r.has(u))),lines:i,dots:a.includes("cells")?bo??[]:[],beads:a.includes("autonomic")?Wo.map(([u,h])=>ye(u,h,-.07)):[],targets:l,rows:n,map:t,whole:t.scope==="systemic"||r.has("body"),skin:a.includes("skin")}}function Wr(o,e,t,n,r,s){let i=(b,E)=>[t.centre[0]+t.u[0]*b+t.n[0]*.012,E,t.centre[2]+t.u[2]*b+t.n[2]*.012],c=t.centre[1]+t.hv,l=i(n*(t.hu+.12),0),u=b=>Math.hypot(b[0]-l[0],b[2]-l[2]),h=o.targets.map(b=>e(b.at)),d=[];o.rows.forEach((b,E)=>{let A=null;if(o.targets.forEach((M,N)=>{let B=h[N];B&&M.rows.includes(b.index)&&(!A||u(B)<u(A))&&(A=B)}),!A){let M=e([.31,1.25,0]),N=e([-.31,1.25,0]);A=u(M)<u(N)?M:N}d.push({row:b.index,start:A,end:c-(r[E]??0)*2*t.hv})});let f=d.filter(b=>b.end<=b.start[1]).sort((b,E)=>E.start[1]-b.start[1]),m=d.filter(b=>b.end>b.start[1]).sort((b,E)=>b.start[1]-E.start[1]),p=[];for(let b of[f,m])b.forEach((E,A)=>{let M=n*(t.hu+.1+A*.05);p.push({row:E.row,points:[E.start,i(M,E.start[1]),i(M,E.end),i(n*(t.hu-s),E.end)]})});return p.sort((b,E)=>b.row-E.row)}function Eo(o){let e=[];for(let t of o.organs)ft(e,t.centre,t.radii,t.rotZ,16);for(let t of o.strands)for(let n=1;n<t.points.length;n++){let r=t.points[n-1],s=t.points[n];ua(e,r,s,t.radius)}return new Float32Array(e)}function ua(o,e,t,n){let r=Yt(t,e);if(Math.hypot(r[0],r[1],r[2])<1e-6)return;let a=ve(r),i=Math.abs(a[2])<.9?[0,0,1]:[1,0,0],c=ve(xo(i,a)),l=xo(a,c),u=8,h=(d,f)=>{let m=[c[0]*Math.cos(f)+l[0]*Math.sin(f),c[1]*Math.cos(f)+l[1]*Math.sin(f),c[2]*Math.cos(f)+l[2]*Math.sin(f)];return[[d[0]+m[0]*n,d[1]+m[1]*n,d[2]+m[2]*n],m]};for(let d=0;d<u;d++){let f=d/u*Math.PI*2,m=(d+1)/u*Math.PI*2,[p,b]=h(e,f),[E,A]=h(e,m),[M,N]=h(t,f),[B,K]=h(t,m);o.push(...p,...b,...M,...N,...B,...K,...p,...b,...B,...K,...E,...A)}ft(o,t,[n,n,n],0,8)}var ca=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyQ","KeyE","ShiftLeft","ShiftRight"]);function da(o){return o instanceof HTMLElement&&(o.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(o.tagName))}var Xt=class{keys=new Set;downAt=new Map;held=new Map;lastConsume=performance.now();dragX=0;dragY=0;zoom=0;pointers=new Map;press=null;pinch=0;el;h;off=[];constructor(e,t){this.el=e,this.h=t;let n=(a,i,c,l)=>{a.addEventListener(i,c,l),this.off.push(()=>a.removeEventListener(i,c,l))},r=(a,i)=>{window.addEventListener(a,i),this.off.push(()=>window.removeEventListener(a,i))};n(e,"pointerdown",a=>{a.button!==0&&a.pointerType==="mouse"||(e.setPointerCapture?.(a.pointerId),this.pointers.set(a.pointerId,{x:a.clientX,y:a.clientY}),this.pointers.size===1&&(this.press={x:a.clientX,y:a.clientY,moved:!1}),this.pointers.size===2&&(this.press=null,this.pinch=this.pinchDistance()),this.h.poke())}),n(e,"pointermove",a=>{let i=this.pointers.get(a.pointerId);if(!i){a.pointerType==="mouse"&&this.h.hover(a.clientX,a.clientY);return}let c=a.clientX-i.x,l=a.clientY-i.y;if(i.x=a.clientX,i.y=a.clientY,this.pointers.size===2){let u=this.pinchDistance();this.pinch>0&&u>0&&(this.zoom+=(this.pinch-u)*2.2),this.pinch=u}else this.press&&(!this.press.moved&&Math.hypot(a.clientX-this.press.x,a.clientY-this.press.y)>5&&(this.press.moved=!0),this.press.moved&&(this.dragX+=c,this.dragY+=l));this.h.poke()});let s=a=>{let i=this.press;this.pointers.delete(a.pointerId),this.pointers.size===0&&(i&&!i.moved&&a.type==="pointerup"&&this.h.click(a.clientX,a.clientY),this.press=null,this.pinch=0)};n(e,"pointerup",s),n(e,"pointercancel",s),n(e,"pointerleave",a=>{a.pointerType==="mouse"&&!this.pointers.has(a.pointerId)&&this.h.hover(-1,-1)}),n(e,"wheel",a=>{a.preventDefault(),this.zoom+=a.deltaMode===1?a.deltaY*32:a.deltaY,this.h.poke()},{passive:!1}),r("keydown",a=>{if(a.defaultPrevented||a.metaKey||a.ctrlKey||a.altKey||da(a.target)||this.h.blocked())return;let i=a.target===e||a.target===document.body||a.target===document.documentElement;if(a.key==="Escape"&&i){a.preventDefault(),this.h.back();return}if(a.key==="Enter"&&a.target===e){a.preventDefault(),this.h.activate();return}!i||!ca.has(a.code)||(a.preventDefault(),this.keys.has(a.code)||this.downAt.set(a.code,performance.now()),this.keys.add(a.code),this.h.poke())}),r("keyup",a=>{if(!this.keys.has(a.code))return;let i=performance.now(),c=Math.max(this.downAt.get(a.code)??i,this.lastConsume);this.held.set(a.code,(this.held.get(a.code)??0)+Math.max(0,i-c)),this.keys.delete(a.code),this.downAt.delete(a.code),this.h.poke()}),r("blur",()=>{this.keys.clear(),this.downAt.clear(),this.held.clear()})}pinchDistance(){let[e,t]=[...this.pointers.values()];return e&&t?Math.hypot(e.x-t.x,e.y-t.y):0}get busy(){return this.keys.size>0||this.held.size>0||this.pointers.size>0}consume(){let e=performance.now(),t=Math.max(1,e-this.lastConsume),n=new Map;for(let a of new Set([...this.keys,...this.held.keys()])){let i=this.held.get(a)??0;this.keys.has(a)&&(i+=e-Math.max(this.downAt.get(a)??e,this.lastConsume)),n.set(a,Math.min(1,i/t))}this.held.clear(),this.lastConsume=e;let r=a=>n.get(a)??0,s={forward:r("KeyW")+r("ArrowUp")-r("KeyS")-r("ArrowDown"),strafe:r("KeyD")-r("KeyA"),turn:r("ArrowRight")+r("KeyE")-r("ArrowLeft")-r("KeyQ"),run:r("ShiftLeft")+r("ShiftRight")>.5,lookX:this.dragX,lookY:this.dragY,zoom:this.zoom};return this.dragX=0,this.dragY=0,this.zoom=0,s}dispose(){for(let e of this.off)e();this.keys.clear(),this.held.clear(),this.el}};var wo=384,Ro=288,jt=class{gl;fbo;texture;tri;parallel;compiled=new Map;loading=new Set;order=[];showing=null;lastDraw=0;constructor(e){this.gl=e,this.parallel=e.getExtension("KHR_parallel_shader_compile");let t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,wo,Ro,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.texture=t,this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.tri=e.createVertexArray(),e.bindVertexArray(this.tri);let n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}prepare(e){let t=this.compiled.get(e);return t?(!t.ready&&!t.failed&&this.poll(t),t.ready):(this.loading.has(e)||(this.loading.add(e),St(e).then(n=>{this.loading.delete(e),this.compile(e,n)}).catch(()=>this.loading.delete(e))),!1)}compile(e,t){let n=this.gl,r=Ve.node(e)?.tier??"T01",s=(u,h)=>{let d=n.createShader(u);return d&&(n.shaderSource(d,h),n.compileShader(d)),d},a=s(n.VERTEX_SHADER,At),i=s(n.FRAGMENT_SHADER,Rt(t,1)),c=n.createProgram();if(!a||!i||!c)return;n.attachShader(c,a),n.attachShader(c,i),n.bindAttribLocation(c,0,"p"),n.linkProgram(c),n.deleteShader(a),n.deleteShader(i);let l={scene:t,tier:r,program:c,loc:new Map,ready:!1,failed:!1};for(this.compiled.set(e,l),this.order.push(e);this.order.length>3;){let u=this.order.findIndex(f=>f!==this.showing&&f!==e);if(u<0)break;let[h]=this.order.splice(u,1),d=h?this.compiled.get(h):void 0;h&&d&&(n.deleteProgram(d.program),this.compiled.delete(h))}this.poll(l)}poll(e){let t=this.gl;if(!(this.parallel&&!t.getProgramParameter(e.program,this.parallel.COMPLETION_STATUS_KHR))){if(!t.getProgramParameter(e.program,t.LINK_STATUS)){e.failed=!0;return}for(let n of["uRes","uOffset","uCamPos","uCamTarget","uFov","uAccent","uFloor","uRing","uTime","uZero"])e.loc.set(n,t.getUniformLocation(e.program,n));e.ready=!0}}render(e,t,n){let r=this.compiled.get(e);if(!r?.ready)return!1;let s=performance.now();if(this.showing===e&&s-this.lastDraw<n)return!1;this.lastDraw=s;let a=this.gl,i=Pt(r.scene),c=Mt(r.scene),l;if(c.az){let d=(c.az[0]+c.az[1])/2,f=(c.az[1]-c.az[0])/2;l={...i,az:d+Math.sin(t*.15)*f*.6}}else l={...i,az:i.az+t*6};let u=r.scene.poster??1.5,h=Ft(r.scene,r.tier,l,u+t);a.bindFramebuffer(a.FRAMEBUFFER,this.fbo),a.viewport(0,0,wo,Ro),a.disable(a.DEPTH_TEST),a.disable(a.BLEND),a.useProgram(r.program),a.uniform2f(r.loc.get("uRes")??null,wo,Ro),a.uniform2f(r.loc.get("uOffset")??null,0,0),a.uniform1i(r.loc.get("uZero")??null,0);for(let[d,f]of Object.entries(h)){let m=r.loc.get(d)??null;f.length===3?a.uniform3f(m,f[0]??0,f[1]??0,f[2]??0):a.uniform1f(m,f[0]??0)}return a.bindVertexArray(this.tri),a.drawArrays(a.TRIANGLES,0,3),a.bindVertexArray(null),a.bindFramebuffer(a.FRAMEBUFFER,null),a.enable(a.DEPTH_TEST),this.showing=e,!0}failed(e){return this.compiled.get(e)?.failed===!0}dispose(){let e=this.gl;for(let t of this.compiled.values())e.deleteProgram(t.program);e.deleteFramebuffer(this.fbo),e.deleteTexture(this.texture)}};var Qe=320,ha={load:o=>St(o),tier:o=>Ve.node(o)?.tier??"T01",atlas:o=>Er(o),atlasSize:o=>wr(o),holoCell:(o,e)=>Rr(o,e)},kt=class{gl;fbo;texture;tri;parallel;compiled=null;loading=null;stills=new Map;base;onLoad;catalog;constructor(e,t,n,r=ha){this.gl=e,this.base=t,this.onLoad=n,this.catalog=r,this.parallel=e.getExtension("KHR_parallel_shader_compile");let s=e.createTexture();e.bindTexture(e.TEXTURE_2D,s),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,Qe,Qe,0,e.RGBA,e.UNSIGNED_BYTE,null);for(let[i,c]of[[e.TEXTURE_MIN_FILTER,e.LINEAR],[e.TEXTURE_MAG_FILTER,e.LINEAR],[e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE],[e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE]])e.texParameteri(e.TEXTURE_2D,i,c);this.texture=s,this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,s,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.tri=e.createVertexArray(),e.bindVertexArray(this.tri);let a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}prepare(e){let t=this.compiled;return t?.node===e?(!t.ready&&!t.failed&&this.poll(t),t.ready):(this.loading===e||(this.loading=e,this.catalog.load(e).then(n=>{this.loading===e&&(this.loading=null,this.compile(e,n))}).catch(()=>{this.loading===e&&(this.loading=null)})),!1)}compile(e,t){let n=this.gl;this.compiled&&n.deleteProgram(this.compiled.program),this.compiled=null;let r=(c,l)=>{let u=n.createShader(c);return u&&(n.shaderSource(u,l),n.compileShader(u)),u},s=r(n.VERTEX_SHADER,At),a=r(n.FRAGMENT_SHADER,Or(t,1)),i=n.createProgram();!s||!a||!i||(n.attachShader(i,s),n.attachShader(i,a),n.bindAttribLocation(i,0,"p"),n.linkProgram(i),n.deleteShader(s),n.deleteShader(a),this.compiled={node:e,scene:t,tier:this.catalog.tier(e),program:i,loc:new Map,ready:!1,failed:!1},this.poll(this.compiled))}poll(e){let t=this.gl;if(!(this.parallel&&!t.getProgramParameter(e.program,this.parallel.COMPLETION_STATUS_KHR))){if(!t.getProgramParameter(e.program,t.LINK_STATUS)){e.failed=!0;return}for(let n of["uRes","uOffset","uCamPos","uCamTarget","uFov","uAccent","uFloor","uRing","uTime","uZero","uFocus","uMask","uNeonA","uNeonB"])e.loc.set(n,t.getUniformLocation(e.program,n));e.ready=!0}}render(e,t){let n=this.compiled;if(!n||n.node!==e||!n.ready)return!1;let r=this.gl,s=Pt(n.scene),a=Mt(n.scene),i=s.az+t.az+Math.sin(t.time*.18)*16;a.az&&(i=Math.min(a.az[1],Math.max(a.az[0],i)));let c=Ft(n.scene,n.tier,{...s,az:i},(n.scene.poster??1.5)+t.time),l=zt(Bo(n.scene,n.tier));r.bindFramebuffer(r.FRAMEBUFFER,this.fbo),r.viewport(0,0,Qe,Qe),r.disable(r.DEPTH_TEST),r.disable(r.BLEND),r.useProgram(n.program);let u=(h,d)=>{let f=n.loc.get(h)??null;d.length===3?r.uniform3f(f,d[0]??0,d[1]??0,d[2]??0):d.length===2?r.uniform2f(f,d[0]??0,d[1]??0):r.uniform1f(f,d[0]??0)};u("uRes",[Qe,Qe]),u("uOffset",[0,0]),r.uniform1i(n.loc.get("uZero")??null,0);for(let[h,d]of Object.entries(c))u(h,h==="uFov"?[(d[0]??2.4)*Dr]:d);return u("uFocus",[Ht(t.parts)]),u("uMask",[0]),u("uNeonA",l.a),u("uNeonB",l.b),r.bindVertexArray(this.tri),r.drawArrays(r.TRIANGLES,0,3),r.bindVertexArray(null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.enable(r.DEPTH_TEST),!0}still(e,t){let n=this.catalog,r=n.holoCell(e,t)??n.holoCell(e,[]);if(!r)return null;let s=`${this.base}${n.atlas(e)}`,a=n.atlasSize(e),i=[r.x/a.w,1-(r.y+r.h)/a.h,r.w/a.w,r.h/a.h];if(this.stills.has(s)){let l=this.stills.get(s);return l?{tex:l,rect:i}:null}this.stills.set(s,null);let c=new Image;return c.decoding="async",c.onload=()=>{let l=this.gl,u=l.createTexture();if(l.bindTexture(l.TEXTURE_2D,u),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,!0),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,c),l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,!1),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),this.stills.size>6){let[h]=this.stills;h&&(h[1]&&l.deleteTexture(h[1]),this.stills.delete(h[0]))}this.stills.set(s,u),this.onLoad()},c.src=s,null}dispose(){let e=this.gl;this.compiled&&e.deleteProgram(this.compiled.program);for(let t of this.stills.values())t&&e.deleteTexture(t);e.deleteFramebuffer(this.fbo),e.deleteTexture(this.texture)}};var Me=o=>o.toFixed(4),Y=`#version 300 es
#ifndef Q
#define Q 0
#endif
precision highp float;
precision highp int;
precision highp sampler2DShadow;
`,fe=`
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
`,mt=`
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
`,Ao=`
uniform sampler2D uSky;
uniform float uSkyLod;
vec2 skyUv(vec3 d) { return vec2(atan(d.x, -d.z) * 0.15915494 + 0.5, acos(clamp(d.y, -1.0, 1.0)) * 0.31830989); }
vec3 skyAt(vec3 d, float rough) { return textureLod(uSky, skyUv(d), rough * uSkyLod).rgb; }
`,Po=`
uniform vec3 uFog;
uniform vec3 uFogDisplay;
uniform float uFogDensity;
// Aerial haze, denser near the ground: distance fades toward the silver horizon.
float hazeK(vec3 p, float dist) { return 1.0 - exp(-dist * uFogDensity * (0.35 + 0.65 * exp(-max(p.y, 0.0) * 0.015))); }
vec3 haze(vec3 col, vec3 p, float dist) { return mix(col, uFog, hazeK(p, dist)); }
`;function Kt(o,e){return e?o.replace(/const float HALF_ = [^;]+;/,`const float HALF_ = ${Me(e.half)};`).replace(/const float RING_ = [^;]+;/,`const float RING_ = ${Me(e.ring)};`).replace(/const float ATRIUM_ = [^;]+;/,`const float ATRIUM_ = ${Me(e.atrium)};`):o}var Yr=`
const float HALF_ = ${Me(U)};
const float RING_ = ${Me(_)};
const float ATRIUM_ = ${Me(C)};
const float FLOOR_H_ = ${Me(Ae)};
const float SLAB_ = ${Me(ee)};
const float ROOF_ = ${Me(Ae*ke)};
const float CINEMA_ = ${Me(Ke)};
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
    else if (m < RING_ && lv < ${Me(ke-1)}) res = uInterior * 0.22;
    else {
      float blur = 0.03 + rough * 1.6 + tUp * rough * 0.25;
      res = mix(uInterior * 0.32, vec3(uPanel), coffer(q, blur) * (1.0 - smoothstep(0.5, 0.9, rough) * 0.6));
    }
  } else {
    res = uInterior * 0.5 * here;
  }
  return mix(res, uInterior * 0.75 * here, smoothstep(0.55, 1.0, rough));
}
`,fa=`
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
`,$r=`
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
`,Xr=`
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
`,qt=`${Y}
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
`,Mo=`${Y}
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
${fe}
${mt}
${Ao}
${Po}
${Yr}
${fa}
${$r}
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
`,jr=Mo.replace(`#version 300 es
`,`#version 300 es
#define CLIP 1
`),kr=`${Y}
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
${fe}
${mt}
${Ao}
${Po}
${Yr}
${$r}
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
`,Ie=`${Y}
layout(location = 0) in vec2 aPos;
out vec2 vNdc;
void main() {
  vNdc = aPos;
  gl_Position = vec4(aPos, 1.0, 1.0);
}
`,Kr=`${Y}
in vec2 vNdc;
uniform mat4 uInvViewProj;
uniform vec3 uCamPos;
uniform vec3 uSun;
uniform vec3 uSunColor;
${fe}
${Ao}
#if Q == 1
${mt}
${Xr}
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
`,qr=`${Y}
in vec2 vNdc;
uniform vec3 uSun;
${mt}
${Xr}
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
`,Qr=`${Y}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
void main() {
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,Zr=`${Y}
void main() {}
`,Jr=`${Y}
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
`,en=`${Y}
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
${fe}
${Po}
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
`,tn=`${Y}
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
`,on=`${Y}
in vec2 vUv;
in vec4 vCol;
in float vHard;
in vec3 vPos;
uniform float uClip;
uniform float uClipY;
${fe}
out vec4 frag;
void main() {
  if (uClip > 0.5 && vPos.y < uClipY - 0.02) discard;
  float r = length(vUv * 2.0 - 1.0);
  float a = vHard > 0.5 ? 1.0 : pow(clamp(1.0 - r, 0.0, 1.0), 1.7);
  // Glows add light: in the HDR buffer, as light.
  vec3 c = uDirect > 0.5 ? vCol.rgb : toLinear(vCol.rgb) * 2.5;
  frag = vec4(c * a, vCol.a * a);
}
`,rn=`${Y}
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
`,nn=`${Y}
in vec2 vC;
in float vFade;
${fe}
out vec4 frag;
void main() {
  float r = length(vC);
  if (r > 1.0) discard;
  float a = pow(1.0 - r, 2.2) * vFade;
  // Added light, no coverage.
  vec3 c = uDirect > 0.5 ? vec3(1.0, 0.97, 0.92) * a * 0.5 : vec3(1.0, 0.95, 0.88) * a * 2.2;
  frag = vec4(c, 0.0);
}
`,an=`${Y}
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec2 aUv;
uniform mat4 uViewProj;
out vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,sn=`${Y}
in vec2 vUv;
uniform float uTime;
uniform float uLength;
${fe}
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
`,ln=`${Y}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
void main() {
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,un=`${Y}
uniform vec4 uColor;
${fe}
out vec4 frag;
void main() {
  frag = vec4(uiOut(uColor.rgb / max(uColor.a, 1e-4)) * uColor.a, uColor.a);
}
`,pt=`${Y}
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
`,cn=`${Y}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform vec3 uTint;
uniform float uWhole;
uniform float uTime;
uniform float uScanY;
${fe}
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
`,dn=`${Y}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uPulse;
${fe}
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
`,hn=`${Y}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform float uTime;
uniform float uSide;
${fe}
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
`,fn=`${Y}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
uniform mat4 uModel;
uniform float uPointSize;
void main() {
  gl_Position = uViewProj * uModel * vec4(aPos, 1.0);
  gl_PointSize = max(1.5, uPointSize / max(gl_Position.w, 0.1));
}
`,mn=`${Y}
uniform vec4 uColor;
uniform float uRound;
${fe}
out vec4 frag;
void main() {
  if (uRound > 0.5) {
    vec2 c = gl_PointCoord - 0.5;
    if (dot(c, c) > 0.25) discard;
  }
  frag = vec4(uiOut(uColor.rgb / max(uColor.a, 1e-4)) * uColor.a, uColor.a);
}
`,pn=`${Y}
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
`,vn=`${Y}
in vec2 vC;
uniform float uTime;
${fe}
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
`,bn=`${Y}
in vec2 vNdc;
uniform float uDim;
out vec4 frag;
void main() {
  float v = smoothstep(0.35, 1.45, length(vNdc));
  float a = uDim * (0.66 + 0.3 * v);
  frag = vec4(vec3(0.0) * a, a);
}
`,yn=`${Y}
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
`,gn=`${Y}
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
`,xn=`${Y}
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
`,Tn=`${Y}
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
`,En=`${Y}
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
`,wn=`${Y}
in vec3 vWorld;
in vec3 vNormal;
in float vPart;
in float vGlow;
in float vShow;
uniform vec3 uCamPos;
uniform vec3 uNeonA;
uniform vec3 uNeonB;
uniform float uTime;
uniform float uPop;
${fe}
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
  float g = vGlow * vShow * pulse * (1.0 + uPop * 0.9);
  // The lens glows from its rim in; the strips and rings are lines of light.
  float lensFade = vPart > 7.5 && vPart < 8.5 ? 0.55 : 1.0;
  col = mix(col, neon, clamp(g, 0.0, 1.0) * 0.85 * lensFade);
  frag = vec4(uiOut(min(col, vec3(0.95))) + neon * g * 1.2 / uExposure * (1.0 - uDirect), 1.0);
}
`,Rn=`${Y}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform float uTime;
uniform float uLight;
uniform float uHeight;
uniform vec3 uTint;
uniform float uGain;
${fe}
${mt}
out vec4 frag;
void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(uCamPos - vWorld);
  float core = pow(abs(dot(N, V)), 1.4);
  float down = 1.0 - clamp(vLocalY / uHeight, 0.0, 1.0);
  float dust = 0.75 + 0.25 * fbm(vec2(atan(vWorld.x, vWorld.z) * 3.0, vWorld.y * 2.0 - uTime * 0.15));
  float a = clamp((0.005 + core * 0.034) * (0.3 + 0.7 * down) * dust * uLight * uGain, 0.0, 0.6);
  frag = vec4(uiOut(uTint) * a, a);
}
`,An=`${Y}
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
`,Pn=`${Y}
in vec2 vUv;
in vec3 vWorld;
uniform sampler2D uTex;
uniform vec4 uRect;
uniform float uReveal;
uniform float uTime;
uniform float uFlash;
uniform float uMotion;
uniform float uGlow;
uniform float uScan;
uniform vec3 uNeonA;
${fe}
out vec4 frag;
float alphaAt(vec2 o) { return texture(uTex, uRect.xy + clamp(vUv + o, 0.0, 1.0) * uRect.zw).a; }
void main() {
  vec4 t = texture(uTex, uRect.xy + vUv * uRect.zw);
  float line = uReveal * 1.04;
  float shown = 1.0 - smoothstep(line - 0.015, line + 0.015, vUv.y);
  float edge = exp(-pow((vUv.y - line) * 70.0, 2.0)) * step(uReveal, 0.999);
  float vign = smoothstep(0.5, 0.4, length(vUv - 0.5));
  float scan = 1.0 - 0.2 * uMotion * step(0.5, fract(vWorld.y * 220.0 - uTime * 1.5));
  float flick = 1.0 - uMotion * 0.08 * step(0.96, fract(sin(floor(uTime * 20.0) * 12.9898) * 43758.5453));
  float band = uScan < -0.5 ? 0.0 : exp(-pow((vUv.y - uScan) * 16.0, 2.0));
  float halo = 0.0;
  if (uGlow > 0.002 || band > 0.002) {
    float d = 0.024;
    halo = (alphaAt(vec2(d, 0.0)) + alphaAt(vec2(-d, 0.0)) + alphaAt(vec2(0.0, d)) + alphaAt(vec2(0.0, -d))
      + alphaAt(vec2(d, d) * 0.7) + alphaAt(vec2(-d, d) * 0.7) + alphaAt(vec2(d, -d) * 0.7) + alphaAt(vec2(-d, -d) * 0.7)) / 8.0;
  }
  float glowA = (max(halo - t.a * 0.6, 0.0) * 0.7 + t.a * 0.1) * uGlow * shown;
  float bandA = band * shown * (t.a * 0.55 + halo * 0.35 + 0.035);
  float a = clamp((t.a * shown * scan * flick + edge * 0.45 + glowA + bandA) * vign, 0.0, 1.0);
  vec3 c = (t.rgb * shown * scan * flick * (1.0 + uFlash * 0.5 + uGlow * 0.4 + band * 0.7) + uNeonA * (edge * 0.6 + glowA * 1.3) + mix(uNeonA, vec3(1.0), 0.45) * bandA * 1.1) * vign;
  vec3 straight = c / max(a, 1e-3);
  // A hologram is light: on the basic tier (no bloom, blended on the screen's colours) it is brighter and lets a
  // little more of the room through, as the cinematic tier's light blending does of itself.
  straight *= 1.0 + 0.45 * uDirect;
  frag = vec4(uiOut(min(straight, vec3(0.95))) * a, a * (1.0 - 0.3 * uDirect));
}
`,Mn=`${Y}
in vec2 vNdc;
uniform float uStudy;
uniform vec4 uSpotA;
uniform vec4 uSpotB;
uniform vec4 uSpotC;
uniform vec3 uSpotW;
uniform float uDeep;
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
  a = max(a, uDeep * spot(uSpotC, vNdc));
  frag = vec4(vec3(0.004, 0.008, 0.03) * a, a);
}
`,Fn=`${Y}
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
`,Sn=`${Y}
in vec2 vUv;
uniform vec2 uHalf;
uniform vec3 uNeonA;
uniform float uOn;
${fe}
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
`;var _n={gloss:.4,emit:1},ma={gloss:.9,pattern:4},xe=Math.PI*2;function pa(o){let e=o>>>0||1;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Ln(o,e,t,n){let r=t.span,s=t.depth,a=t.top-t.bottom,i=(d,f,m)=>[t.at[0]+t.along[0]*d+t.inward[0]*m,t.bottom+f,t.at[1]+t.along[1]*d+t.inward[1]*m],c=d=>d?n.glow:n.body,l=d=>d?_n:n.material,u={p:i,W:r,D:s,H:a,rand:pa(n.seed),m:o,body:n.body,material:n.material,glow:n.glow,curve:(d,f,m=8,p=!1,b=!1)=>o.sweep(d,f,m,c(b),l(b),p),rod:(d,f,m,p=!1)=>o.sweep([d,f],m,5,c(p),l(p)),bead:(d,f,m=!1,p=6)=>o.sphere(d,f,p,c(m),l(m)),box:(d,f,m,p,b,E,A=!1)=>{let M=i(d,f,m),N=i(p,b,E);o.box([Math.min(M[0],N[0]),Math.min(M[1],N[1]),Math.min(M[2],N[2])],[Math.max(M[0],N[0]),Math.max(M[1],N[1]),Math.max(M[2],N[2])],c(A),l(A))},strip:(d,f,m,p=!1)=>o.strip(d,f,m,c(p),l(p)),hang:d=>{for(let f of d)o.sweep([f,[f[0],t.ceiling,f[2]]],.006,4,[.75,.77,.8],{...ma,ao:n.light})},inside:d=>{let f=d[0]-t.at[0],m=d[2]-t.at[1],p=Math.max(-r/2,Math.min(r/2,f*t.along[0]+m*t.along[1])),b=Math.max(-s/2,Math.min(s/2,f*t.inward[0]+m*t.inward[1]));return i(p,Math.max(0,Math.min(a,d[1]-t.bottom)),b)}},h=(d,f,m)=>ve([t.along[0]*d+t.inward[0]*m,f,t.along[1]*d+t.inward[1]*m]);switch(e.motif){case"helix":return va(u);case"cluster":return ba(u,e.variant);case"ribbons":return ya(u,e.variant,h);case"chain":return ga(u,e.variant);case"rings":return xa(u,e.variant);case"loops":return Ta(u,e.variant);case"wheel":return Ea(u);case"branches":return wa(u,e.variant,h);case"lattice":return Ra(u,e.variant);case"strata":return Pa(u,e.variant,h);case"strands":return Ma(u);case"spiral":return Fa(u,e.variant)}}function Oe(o,e,t,n,r,s,a,i,c=0){let l=[];for(let u=0;u<i;u++){let h=u/i*xe,d=Math.cos(h)*r,f=Math.sin(h)*s;a==="uv"?l.push(o.p(e+d,t+f*Math.sin(c),n+f*Math.cos(c))):a==="uh"?l.push(o.p(e+d,t+f,n+d*Math.sin(c))):l.push(o.p(e+d*Math.sin(c),t+f,n+d))}return l}function va(o){let e=o.W*.92,t=Math.min(.56,o.H*.36),n=o.H*.5,r=3.2,s=.42*xe,a=(c,l)=>{let u=xe*r*c+l;return o.p(-e/2+e*c,n+t*Math.sin(u),t*Math.cos(u))};for(let c of[0,s]){let l=[];for(let u=0;u<=60;u++)l.push(a(u/60,c));o.curve(l,.045,7)}let i=Math.round(r*9);for(let c=0;c<i;c++){let l=(c+.5)/i,u=a(l,0),h=a(l,s);o.rod(u,h,.014),o.bead([(u[0]+h[0])/2,(u[1]+h[1])/2,(u[2]+h[2])/2],.032,!0)}o.hang([a(.02,0),a(.5,0),a(.98,0)].map(c=>[c[0],o.p(0,n+t,0)[1],c[2]]))}function ba(o,e){let t=[],n=e==="cells"?13:9;for(let r=0;r<900&&t.length<n;r++){let s=e==="cells"?.16+o.rand()*.28:.17+o.rand()*.16,a=[(o.rand()-.5)*(o.W-2*s-.4),s+.1+o.rand()*(o.H-2*s-.2),(o.rand()-.5)*(o.D-2*s-.3)];t.every(i=>Math.hypot(i.c[0]-a[0],i.c[1]-a[1],i.c[2]-a[2])>i.r+s+.08)&&t.push({c:a,r:s})}t.forEach(({c:r,r:s},a)=>{let i=o.p(r[0],r[1],r[2]);if(o.m.sphere(i,s,12,o.body,o.material),e==="cells")o.bead(o.p(r[0]+s*.18,r[1]-s*.78,r[2]-s*.25),s*.36,!0,8);else for(let c=0;c<12;c++){let l=Math.acos(1-2*(c+.5)/12),u=c*2.39996+a,h=[Math.sin(l)*Math.cos(u),Math.cos(l),Math.sin(l)*Math.sin(u)],d=o.p(r[0]+h[0]*s,r[1]+h[1]*s,r[2]+h[2]*s),f=o.p(r[0]+h[0]*(s+.13),r[1]+h[1]*(s+.13),r[2]+h[2]*(s+.13));o.rod(d,f,.012,a%3===0)}}),o.hang(t.slice(0,5).map(({c:r,r:s})=>o.p(r[0],r[1]+s,r[2])))}function ya(o,e,t){let n=o.W*.9,r=o.H*.5;(e==="folds"?[-.9,-.3,.3,.9]:[-.7,0,.7]).forEach((a,i)=>{let c=[],l=[],u=[],h=e==="folds"?150:110;for(let d=0;d<=h;d++){let f=d/h,m=-n/2+n*f,p,b=0;if(e==="folds"){let A=Math.sin(m/.85*xe+i*.9);p=r+.5*(Math.tanh(3*A)/Math.tanh(3))}else p=r+.38*Math.sin(m/3.1*xe+i*1.7)+.08*Math.sin(m/.9*xe+i),b=.9*Math.sin(m/2.4*xe+i*2.1);let E=a+(e==="waves"?.18*Math.sin(m/1.7*xe+i):0);c.push(o.p(m,p,E)),l.push(e==="folds"?t(0,0,1):t(0,Math.sin(b),Math.cos(b))),u.push(o.p(m,p+(e==="folds"?.012:0),E+(e==="folds"?-.21:0)))}o.strip(c,l,e==="folds"?.42:.34),i%2===0&&o.curve(u.filter((d,f)=>f%2===0),.009,4,!1,!0)}),o.hang([o.p(-n/2+.2,r+.5,0),o.p(0,r+.5,0),o.p(n/2-.2,r+.5,0)])}function ga(o,e){let t=o.H*.5;if(e==="twin"){for(let c of[-.48,.48]){let l=o.W*.88;o.rod(o.p(-l/2,t,c),o.p(l/2,t,c),.02);let u=12;for(let h=0;h<u;h++){let d=-l/2+.25+h/(u-1)*(l-.5),f=o.p(d,t,c);o.bead(f,.075,h%3===1,8),o.rod(f,o.p(d+.12,t-.32,c+Math.sign(c)*.34),.008)}}o.hang([o.p(-o.W*.4,t,0),o.p(o.W*.4,t,0)]);return}let n=[];for(let c=0;c<9;c++)n.push([-o.W*.42+c/8*o.W*.84,.25+o.rand()*(o.H-.5),(o.rand()-.5)*(o.D-.6)]);let r=[],s=(c,l,u,h,d)=>.5*(2*l+(-c+u)*d+(2*c-5*l+4*u-h)*d*d+(-c+3*l-3*u+h)*d*d*d);for(let c=0;c<n.length-1;c++)for(let l=0;l<14;l++){let u=l/14,h=d=>n[Math.max(0,Math.min(n.length-1,d))];r.push([0,1,2].map(d=>s(h(c-1)[d]??0,h(c)[d]??0,h(c+1)[d]??0,h(c+2)[d]??0,u)))}let i=r.map((c,l)=>{let u=l/r.length;if(![.18,.5,.78].some(f=>Math.abs(u-f)<.07))return c;let d=l*1.1;return[c[0],c[1]+Math.sin(d)*.12,c[2]+Math.cos(d)*.12]}).map(c=>o.p(c[0],c[1],c[2]));o.curve(i,.018,5);for(let c=0;c<i.length;c+=3)o.bead(i[c],.05,c%21===0,6);o.hang([i[0],i[Math.floor(i.length/2)],i[i.length-1]])}function xa(o,e){let t=o.H*.5;if(e==="gyro"){let s=Math.min(.7,o.H*.45);o.bead(o.p(0,t,0),.12,!0,12),[s,s*.8,s*.6].forEach((a,i)=>o.curve(Oe(o,0,t,0,a,a,i===1?"uh":"hv",48,i*.6),.024,6,!0)),o.rod(o.p(-o.W*.36,t,0),o.p(o.W*.36,t,0),.02);for(let a of[-1,1])o.bead(o.p(a*o.W*.36,t,0),.13,!1,12);o.hang([o.p(0,t+s,0),o.p(-o.W*.36,t,0),o.p(o.W*.36,t,0)]);return}if(e==="ripples"){for(let s=0;s<6;s++){let a=.28+s*.47;o.curve(Oe(o,0,t+.32-s*.1,0,a,a*.42,"uv",48),.03-s*.003,4,!0,s===0||s===3)}o.bead(o.p(0,t+.55,0),.09,!0,10),o.hang([o.p(0,t+.55,0),o.p(-2.5,t-.18,0),o.p(2.5,t-.18,0)]);return}if(e==="pulse"){let s=i=>{let c=(l,u,h)=>h*Math.exp(-(((i-l)/u)**2));return .2+c(.14,.05,.1)+c(.34,.035,.5)+c(.42,.04,-.06)+c(.6,.06,.14)+c(.86,.035,.42)};for(let i=0;i<15;i++){let c=i/14,l=Math.min(o.H*.47,s(c));o.curve(Oe(o,-o.W*.44+c*o.W*.88,t,0,l,l,"hv",24),.02,4,!0,l>.5)}o.rod(o.p(-o.W*.46,t,0),o.p(o.W*.46,t,0),.01,!0),o.hang([o.p(-o.W*.44,t+.2,0),o.p(0,t+.3,0),o.p(o.W*.44,t+.2,0)]);return}let n=7,r=Math.min(o.H*.47,.72);for(let s=0;s<n;s++){let a=-o.D*.42+s/(n-1)*o.D*.84,i=r*(1-s*.1);o.curve(Oe(o,0,t,a,i,i,"uh",40),.02,5,!0,s===2||s===5)}o.bead(o.p(0,t,o.D*.42),.15,!0,12);for(let s of[-1,1])o.curve(Oe(o,s*o.W*.31,t,0,.62,.62*.4,"uv",40),.016,4,!0);o.hang([o.p(0,t+r,-o.D*.42),o.p(0,t+r*.4,o.D*.42),o.p(-o.W*.31,t,0),o.p(o.W*.31,t,0)])}function Ta(o,e){let t=o.H*.5;if(e==="eight"){let s=[],a=o.W*.46;for(let i=0;i<120;i++){let c=i/120*xe,l=1+Math.sin(c)**2;s.push(o.p(a*Math.cos(c)/l,t+.3*Math.sin(c),a*Math.sin(c)*Math.cos(c)/l*.62))}o.curve(s,.055,8,!0);for(let i=0;i<120;i+=9)o.bead(s[i],.07,!0,8);o.hang([s[0],s[30],s[60],s[90]]);return}if(e==="hairpin"){let s=o.H-.08;o.rod(o.p(-o.W*.44,s,0),o.p(o.W*.44,s,0),.03);for(let a=0;a<5;a++){let i=-o.W*.34+a/4*o.W*.68,c=.75+a*37%5*.1,l=.14,u=[];for(let h=0;h<=10;h++)u.push(o.p(i-l,s-h/10*c,0));for(let h=1;h<10;h++){let d=Math.PI+h/10*Math.PI;u.push(o.p(i+Math.cos(d)*l,s-c+Math.sin(d)*l,0))}for(let h=10;h>=0;h--)u.push(o.p(i+l,s-h/10*c,0));o.curve(u,.03,5),o.bead(o.p(i,s-c-l,0),.055,!0,8)}o.hang([o.p(-o.W*.4,s,0),o.p(0,s,0),o.p(o.W*.4,s,0)]);return}let n=o.W*.9,r=[];for(let s=0;s<=120;s++){let a=s/120,i=a*xe*6.5;r.push(o.p(-n/2+n*a,t+.42*Math.sin(i),.42*Math.cos(i)+.25*Math.sin(a*Math.PI*2)))}o.curve(r,.05,8);for(let s=6;s<r.length;s+=18)o.bead(r[s],.06,!0,8);o.hang([r[10],r[60],r[110]])}function Ea(o){let e=o.H*.5,t=Math.min(.68,o.H*.44),n=Oe(o,-.62,e,0,t,t,"uh",56),r=Oe(o,.62,e,0,t*.82,t*.82,"hv",56);o.curve(n,.04,8,!0),o.curve(r,.04,8,!0);for(let s=0;s<56;s+=7)o.bead(n[s],.075,s%14===0,8),o.bead(r[(s+3)%56],.065,s%14===7,8);o.hang([o.p(-.62,e+t,0),o.p(.62,e+t*.82,0)])}function wa(o,e,t){let n=[],r=(s,a,i,c,l,u)=>{let h=o.inside([s[0]+a[0]*i,s[1]+a[1]*i,s[2]+a[2]*i]);if(o.m.sweep([s,h],[c,c*.72],5,o.body,o.material),l===0){n.push(h);return}for(let d of[-1,1]){let f=(o.rand()-.5)*.2,m=e==="down"?u%2===1?Qt(a,t(0,-.15,d*(.62+f))):Qt(a,t(d*(.55+f),-.25,0)):u%2===1?Qt(a,t(0,0,d*(.42+f))):Qt(a,t(0,d*(.3+f),0));r(h,ve(m),i*(.7+o.rand()*.06),c*.74,l-1,u+1)}};if(e==="down"){let s=o.p(0,o.H,0),a=o.p(0,o.H-.32,0);o.m.sweep([s,a],[.075,.065],6,o.body,o.material);for(let i of[-1,1])r(a,ve(t(i,-.42,0)),1.25,.055,4,1)}else{let s=o.p(-o.W*.47,o.H*.55,0);r(s,t(1,0,0),1.05,.055,5,0)}for(let s of n)o.bead(s,.045,!0,6);o.hang(e==="down"?[]:[o.p(-o.W*.4,o.H*.55,0),o.p(-o.W*.1,o.H*.55,0)])}function Qt(o,e){return[o[0]+e[0],o[1]+e[1],o[2]+e[2]]}function Ra(o,e){let t=o.H*.5,n=o.W*.46,r=o.D*.42;if(e==="weave"){[-.36,0,.36].forEach((s,a)=>{let i=(a%2===0?1:-1)*.5,c=Math.cos(i),l=Math.sin(i);for(let u=-12;u<=12;u++){let h=u*.42,d=-10,f=10,m=[];for(let b of[d,f])m.push([c*b-l*h,l*b+c*h]);let p=Aa(m[0],m[1],n,r);p&&o.rod(o.p(p[0][0],t+s,p[0][1]),o.p(p[1][0],t+s,p[1][1]),.012,u%5===0)}}),o.hang([o.p(-n*.8,t+.36,0),o.p(0,t+.36,0),o.p(n*.8,t+.36,0)]);return}if(e==="network"||e==="struts"){if(e==="struts"){let c=[[.25,-.45],[.25,.45],[o.H-.3,0]];for(let[u,h]of c)o.rod(o.p(-n,u,h),o.p(n,u,h),.022);let l=12;for(let u=0;u<=l;u++){let h=-n+u/l*2*n,d=-n+(u+.5)/l*2*n;u<l&&(o.rod(o.p(h,.25,-.45),o.p(d,o.H-.3,0),.014),o.rod(o.p(h,.25,.45),o.p(d,o.H-.3,0),.014),o.rod(o.p(h,.25,-.45),o.p(d,.25,.45),.006,!0))}o.hang([o.p(-n*.9,o.H-.3,0),o.p(0,o.H-.3,0),o.p(n*.9,o.H-.3,0)]);return}let s=[];for(let c=0;c<600&&s.length<24;c++){let l=[(o.rand()-.5)*2*n,.15+o.rand()*(o.H-.3),(o.rand()-.5)*2*r];s.every(u=>Math.hypot(u[0]-l[0],u[1]-l[1],u[2]-l[2])>.55)&&s.push(l)}let a=new Set;s.forEach((c,l)=>{let u=s.map((h,d)=>({j:d,d:Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2])})).filter(h=>h.j!==l).sort((h,d)=>h.d-d.d).slice(0,3);for(let{j:h}of u){let d=l<h?`${l}-${h}`:`${h}-${l}`;if(a.has(d))continue;a.add(d);let f=s[h];o.rod(o.p(c[0],c[1],c[2]),o.p(f[0],f[1],f[2]),.01,(l+h)%7===0)}o.bead(o.p(c[0],c[1],c[2]),.06+l%3*.02,l%3===0,8)});let i=s.slice().sort((c,l)=>l[1]-c[1]).slice(0,4);o.hang(i.map(c=>o.p(c[0],c[1],c[2])));return}if(e==="hex"){let a=Math.sqrt(3)*.42,i=new Map,c=[];for(let l=-1;l<=1;l++)for(let u=-4;u<=4;u++){let h=u*1.5*.42,d=l*a+(u%2===0?0:a/2);if(Math.abs(h)>n-.42||Math.abs(d)+.42>o.D/2)continue;let f=t+.06*Math.sin(u*1.3+l);c.push(o.p(h,f,d));for(let m=0;m<6;m++){let p=m/6*xe,b=(m+1)/6*xe,E=[h+Math.cos(p)*.42,d+Math.sin(p)*.42],A=[h+Math.cos(b)*.42,d+Math.sin(b)*.42],M=[E,A].map(N=>`${N[0].toFixed(2)},${N[1].toFixed(2)}`).sort().join("|");i.has(M)||i.set(M,[o.p(E[0],f,E[1]),o.p(A[0],f,A[1])])}}for(let[l,u]of i.values())o.rod(l,u,.014);for(let l of c)o.bead(l,.05,!0,6);o.hang([c[0],c[Math.floor(c.length/2)],c[c.length-1]].filter(l=>l!==void 0));return}for(let s=0;s<9;s++)for(let a=0;a<2;a++)for(let i=0;i<3;i++){let c=-n+.2+s/8*(2*n-.4),l=.25+a/1*(o.H-.5),u=-r+.15+i/2*(2*r-.3),h=.07+(s+a*3+i*5)%4*.012;o.box(c-h,l-h,u-h,c+h,l+h,u+h,(s*7+a*3+i*11)%9===0)}for(let s=0;s<9;s++){let a=-n+.2+s/8*(2*n-.4);o.rod(o.p(a,.25,-r+.15),o.p(a,.25,r-.15),.006),o.rod(o.p(a,o.H-.25,-r+.15),o.p(a,o.H-.25,r-.15),.006)}o.hang([o.p(-n+.2,o.H-.25,0),o.p(n-.2,o.H-.25,0)])}function Aa(o,e,t,n){let r=0,s=1,a=[e[0]-o[0],e[1]-o[1]],i=[[-a[0],o[0]+t],[a[0],t-o[0]],[-a[1],o[1]+n],[a[1],n-o[1]]];for(let[c,l]of i){if(c===0){if(l<0)return null;continue}let u=l/c;if(c<0?r=Math.max(r,u):s=Math.min(s,u),r>s)return null}return[[o[0]+a[0]*r,o[1]+a[1]*r],[o[0]+a[0]*s,o[1]+a[1]*s]]}function Pa(o,e,t){let n=o.W*.46;if(e==="steps"){for(let a=0;a<7;a++){let i=-n+a/7*2*n+.05,c=i+2*n/7-.14,l=.12+a/6*(o.H-.4);o.box(i,l,-.75,c,l+.05,.75),o.box(i,l+.05,.73,c,l+.065,.75,!0),o.hang([o.p((i+c)/2,l+.05,-.6),o.p((i+c)/2,l+.05,.6)])}return}if(e==="sheets"){for(let s=0;s<4;s++){let a=.25+s*((o.H-.5)/3),i=24,c=6,l=o.D*.36-s*.05,u=(h,d)=>{let f=-n+h/i*2*n,m=-l+d/c*2*l;return o.p(f,a+.07*Math.sin(f*1.6+s*1.1)*Math.cos(m*2.1+s),m)};for(let h=0;h<i;h++)for(let d=0;d<c;d++)o.m.quad(u(h,d),u(h+1,d),u(h+1,d+1),u(h,d+1),o.body,o.material);s===3&&o.curve(Array.from({length:i+1},(h,d)=>u(d,c)),.008,4,!1,!0),s===3&&o.hang([u(2,3),u(12,3),u(22,3)])}return}if(e==="arch"){for(let a=0;a<12;a++){let i=Math.PI*(.08+.84*a/11),c=Math.cos(i)*n*.82,l=-Math.sin(i)*o.D*.32+o.D*.14,u=.55+.6*Math.sin(i)**2,h=.1+.05*Math.sin(i),d=o.p(c,0,l);o.m.cylinder(d[0],d[2],h,Zt(o)-u,Zt(o),16,o.body,o.material),o.m.disc([d[0],Zt(o)-u-.002,d[2]],[0,1,0],h*.55,h*.8,16,o.glow,_n),o.hang([[d[0],Zt(o),d[2]]])}return}let r=9;for(let s=0;s<r;s++){let a=-n+.3+s/(r-1)*(2*n-.6),i=o.H*.5+.12*Math.sin(s*1.3),c=(l,u)=>{let h=Math.sin(l)*.36,d=(1-Math.cos(l))*.3;return o.p(a+d*.6,i+h*.25,u*.55)};for(let l=0;l<6;l++)for(let u=-2;u<2;u++){let h=-.9+l/6*1.8,d=-.9+(l+1)/6*1.8;o.m.quad(c(h,u/2),c(d,u/2),c(d,(u+1)/2),c(h,(u+1)/2),o.body,o.material,t(-1,0,0))}o.rod(c(-.9,0),c(.9,0),.006,s%3===1),o.hang([c(0,-.8),c(0,.8)])}}function Zt(o){return o.p(0,o.H,0)[1]}function Ma(o){let e=o.H-.05,t=o.W*.44;o.rod(o.p(-t,e,0),o.p(t,e,0),.03);for(let n=0;n<38;n++){let r=-t+.1+n/37*(2*t-.2),s=(o.rand()-.5)*.5,a=.7+o.rand()*.6,i=o.rand()*xe,c=[];for(let l=0;l<=5;l++){let u=l/5;c.push(o.p(r+.06*Math.sin(i+u*3),e-u*a,s+.05*Math.cos(i+u*2.4)))}o.curve(c,[.012,.011,.01,.009,.008,.007],4,!1,n%7===3)}o.hang([o.p(-t*.9,e,0),o.p(0,e,0),o.p(t*.9,e,0)])}function Fa(o,e){let t=o.H*.5;if(e==="spiral"){let n=[],r=[];for(let s=0;s<=140;s++){let a=s/140,i=a*xe*3,c=.12+1.15*a**1.3;n.push(o.p(Math.cos(i)*c*2,t-.3+a*.55,Math.sin(i)*c*.85)),r.push(.012+.04*a)}o.curve(n,r,6);for(let s=10;s<n.length;s+=13)o.bead(n[s],.05,!0,6);o.hang([n[20],n[80],n[139]]);return}o.bead(o.p(0,t,0),.16,!0,14);for(let n=0;n<5;n++){let r=.7+n*.5,s=Math.min(o.D*.45,.32+n*.2),a=Oe(o,0,t,0,r,s,"uv",56,(n-2)*.12);o.curve(a,.014,4,!0),o.bead(a[n*11%56],.06+n%2*.02,n%2===0,8)}o.hang([o.p(0,t+.16,0),o.p(-2.6,t,0),o.p(2.6,t,0)])}var Ue=ve([-.53,.6,.6]),k=he(ke),Nn=2.6,me={sun:[2.55,2.42,2.22],sky:[.78,.84,.94],ground:[.4,.39,.37],interior:[.5,.495,.48],panel:3.4,emit:3.4,fog:[.86,.89,.93],fogDensity:45e-5,exposure:.8,exposureInside:1.35,bloomThreshold:2.2,bloomStrength:.16,grain:.016},Dn=10,Fo=7,T={stoneFloor:H("#C3BDB2"),lobbyFloor:H("#CBC5BA"),graphite:H("#3A3D42"),graphiteDeep:H("#25272B"),travertine:H("#E6E0D5"),band:H("#E2DCD1"),plaster:H("#EFEEEB"),panel:H("#FFFFFF"),titanium:H("#A9AEB4"),fin:H("#57524C"),steel:H("#CDD2D7"),bronze:H("#9E8566"),blackGlass:H("#0B0D10"),paving:H("#B5AFA5"),plateau:H("#7C7D75"),water:H("#0A0C0F"),glass:H("#CFE0DC"),facadeGlass:H("#9DB0BF"),glassFloor:H("#E4EBEA"),leather:H("#1B1A19"),carpet:H("#1F2225"),foliage:H("#34503A"),foliageLight:H("#4A6A45"),bark:H("#4B3D31"),soil:H("#2A2622"),runner:H("#E3232C"),runnerInlay:H("#A8262B"),warm:H("#FFE2B8"),marble:H("#ECE9E3"),terrazzo:H("#D8D2C8"),darkCeiling:H("#17181B"),fabric:H("#1C1D20"),cushion:H("#2A2B2E"),porcelain:H("#F3F1EC"),brass:H("#B99B66")},w={stoneFloor:{gloss:.9,pattern:1},graphiteFloor:{gloss:.9,pattern:5},graphite:{gloss:.82,pattern:5},stoneWall:{gloss:.28,pattern:2},band:{gloss:.4,pattern:2},plaster:{gloss:.08,pattern:10},panel:{gloss:.1,emit:1},line:{gloss:.2,emit:.55},titanium:{gloss:.62,pattern:3},steel:{gloss:.94,pattern:4},bronze:{gloss:.6,pattern:9},blackGlass:{gloss:.96,pattern:13},paving:{gloss:.45,pattern:12},plateau:{gloss:.1,pattern:15},water:{gloss:.985,pattern:6},leather:{gloss:.55,pattern:7},carpet:{gloss:.05,pattern:8},foliage:{gloss:.3,pattern:11},bark:{gloss:.2,pattern:14},matte:{gloss:.15},paint:{gloss:.18,pattern:10},walnut:{gloss:.42,pattern:16},marble:{gloss:.88,pattern:1},terrazzo:{gloss:.78,pattern:17},terrazzoFloor:{gloss:.86,pattern:17},fabric:{gloss:.04,pattern:8},chrome:{gloss:.95,pattern:4},porcelain:{gloss:.7},polishedBrass:{gloss:.86,pattern:4}},Sa={blackGlass:[H("#0E0F12"),{gloss:.3}],bronze:[T.bronze,{gloss:.38,pattern:9}],steel:[T.titanium,{gloss:.38,pattern:3}],travertine:[T.travertine,w.stoneWall],marble:[T.marble,{gloss:.45,pattern:1}],graphite:[T.graphite,{gloss:.32,pattern:5}],terrazzo:[T.terrazzo,{gloss:.4,pattern:17}]},_a={noir:[T.steel,w.chrome],chroma:[T.bronze,w.bronze],warm:[T.brass,w.polishedBrass],gallery:[T.porcelain,w.porcelain]};function La(o){return o.wallFinish==="walnut"?[H(o.wall),w.walnut]:o.wallFinish==="travertine"?[H(o.wall),w.stoneWall]:[H(o.wall),w.paint]}function Na(o){return[...o].reduce((e,t)=>e*31+t.charCodeAt(0)>>>0,7)}function Va(o){let e=ge[o]?.tier??"T01",[t,n,r]=H(Xe[e]),s=a=>Math.min(1,a*.7+.3);return[s(t),s(n),s(r)]}function Ia(o){let e=o>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Vn(o,e,t,n,r,s,a,i){let c=ve(pr(t,e)),l=Math.abs(c[1])>.9?[1,0,0]:[0,1,0],u=ve(qe(c,l)),h=qe(c,u),d=(f,m,p)=>{let b=[u[0]*Math.cos(p)+h[0]*Math.sin(p),u[1]*Math.cos(p)+h[1]*Math.sin(p),u[2]*Math.cos(p)+h[2]*Math.sin(p)];return[[f[0]+b[0]*m,f[1]+b[1]*m,f[2]+b[2]*m],b]};for(let f=0;f<s;f++){let m=f/s*Math.PI*2,p=(f+1)/s*Math.PI*2,[b,E]=d(e,n,m),[A,M]=d(e,n,p),[N]=d(t,r,m),[B]=d(t,r,p);o.vertex(b,E,a,i),o.vertex(N,E,a,i),o.vertex(B,M,a,i),o.vertex(b,E,a,i),o.vertex(B,M,a,i),o.vertex(A,M,a,i)}}function On(){let o=new ht,e=new ht,t=new ht,n=[],r=[],s=[],a=[],i=[],c=[],l=[],u=[],h=Ia(7),d=(x,v)=>{let y=e.vertexCount;v();let P=e.vertexCount-y;P>0&&s.push({first:y,count:P,centre:x})},f=(x,v=0)=>({gloss:x,emit:v}),m=(x,v,y,P,S)=>{let[G,D,$,W]=S,g=(R,V,L,I)=>a.push(R,v,V,L,I,G,D,$,W,0);g(x-P,y-P,0,0),g(x+P,y-P,1,0),g(x+P,y+P,1,1),g(x-P,y-P,0,0),g(x+P,y+P,1,1),g(x-P,y+P,0,1)},p=(x,v,y,P,S)=>m(x,v+.012,y,P,[0,0,0,S]),b=(x,v,y,P,S,G)=>m(x,v+.014,y,P,[S[0]*G,S[1]*G,S[2]*G,0]),E=(x,v)=>{let y=x.map(S=>S[0]),P=x.map(S=>S[1]);for(let S=Math.floor(Math.min(...y)/3)*3+1.5;S<Math.max(...y);S+=3)for(let G=Math.floor(Math.min(...P)/3)*3+1.5;G<Math.max(...P);G+=3){if(![[S-1.05,G-1.05],[S+1.05,G-1.05],[S+1.05,G+1.05],[S-1.05,G+1.05]].every(g=>Ko(g,x)))continue;let W=.8;o.quad([S-W,v,G+W],[S+W,v,G+W],[S+W,v,G-W],[S-W,v,G-W],T.panel,w.panel,[0,-1,0])}},A=Ae-ee,M=(x,v,y)=>{if(!v){o.prism(x.poly,y,y,T.plaster,w.plaster,{top:!1,sides:!1}),E(x.poly,y-.012);return}let P=(W,g)=>_e(x.id,W,g),S=[P(_,0),P(_,_),P(U,_),P(U,0)],G=[P(_,_),P(U,U),P(U,_)],D=It[v.mood],$=(W,g,R)=>{let[V,L]=P(W,g);o.annulus(V,L,.001,.065,y-.012,12,T.panel,{gloss:.1,emit:1.6}),o.annulus(V,L,.065,.11,y-.01,16,T.graphite,{...w.graphite,ao:R})};o.prism(G,y,y,T.darkCeiling,{...w.plaster,ao:Ke},{top:!1,sides:!1});for(let[W,g]of[[_+5.6,_+2.4],[_+8.2,_+4.6],[_+8.4,_+1.6]])$(W,g,Ke);if(ho(v.mood))o.prism(S,y,y,T.plaster,{...w.plaster,ao:D},{top:!1,sides:!1}),E(S,y-.012);else{o.prism(S,y,y,T.darkCeiling,{...w.plaster,ao:D},{top:!1,sides:!1});for(let W of[_+2.1,_+7.3])for(let g of[1.4,3.8,6.2,8.6])$(W,g,D)}},N=(x,v,y,P,S,G,D)=>{let $=Math.hypot(v[0]-x[0],v[1]-x[1]),W=(v[0]-x[0])/$,g=(v[1]-x[1])/$,R=Math.max(8,Math.round($/.11)),V=L=>{let I=L/R,F=I*Math.PI*2*(R/2),O=Math.sin(F)*S,z=Math.cos(F)*S*Math.PI*2*(R/2)/$,Z=-g-W*z,q=W-g*z,Q=Math.hypot(Z,q);return[[x[0]+W*$*I-g*O,x[1]+g*$*I+W*O],[Z/Q,q/Q]]};for(let L=0;L<R;L++){let[I,F]=V(L),[O,z]=V(L+1),Z=[I[0],y,I[1]],q=[O[0],y,O[1]],Q=[O[0],P,O[1]],re=[I[0],P,I[1]];o.vertex(Z,[F[0],0,F[1]],G,D),o.vertex(q,[z[0],0,z[1]],G,D),o.vertex(Q,[z[0],0,z[1]],G,D),o.vertex(Z,[F[0],0,F[1]],G,D),o.vertex(Q,[z[0],0,z[1]],G,D),o.vertex(re,[F[0],0,F[1]],G,D)}},B=(x,v,y)=>{let P=it(x.node),S=x.rooms,G=x.bay.id,D=(ne,ce)=>_e(G,ne,ce),$=x.bay.inward,W=x.bay.along,g=H(P.accent),[R,V]=La(P),L=y+A,I=!ho(P.mood),{stele:F,screen:O,partition:z}=Xo,Z=It[P.mood],q=ne=>({...ne,ao:Z}),Q=ne=>({...ne,ao:Ke});o.wall(D(_+.2,.17),D(U-.02,.17),y,L,.04,R,q(V));let re=z.l,oe=z.thick/4;for(let[ne,ce,Ee]of[[_+.02,z.d0,y],[z.d1,U-.02,y],[z.d0,z.d1,y+2.75]])o.wall(D(ne,re-oe),D(ce,re-oe),Ee,L,2*oe,R,q(V)),o.wall(D(ne,re+oe),D(ce,re+oe),Ee,L,2*oe,T.fabric,Q(w.fabric));let pe=(z.d0+z.d1)/2;i.push({key:"theater:marquee",rect:ae(D(pe,re-2*oe-.02),y+3.15,Te(-W[0],-W[1]),2.1,.41,0)});let[et,Ge]=Sa[P.stele],j=F.d+F.thick/2;o.wall(D(j,F.l0),D(j,F.l1),y+.07,y+F.height,F.thick,et,q(Ge)),o.wall(D(j,F.l0+.06),D(j,F.l1-.06),y,y+.07,F.thick-.12,T.graphiteDeep,q(w.graphite));for(let ne of[F.d+.055,F.d+F.thick-.055])o.wall(D(ne,F.l0+.08),D(ne,F.l1-.08),y+.012,y+.026,.008,g,w.line);o.wall(D(j,F.l0+.02),D(j,F.l1-.02),y+F.height,y+F.height+.012,F.thick-.04,g,w.line),Jo(P.stele)&&o.wall(D(F.d-.002,F.l0+.08),D(F.d-.002,O.l0-.14),y+.14,y+F.height-.1,.004,H(er[P.stele]),q({gloss:.12}));let le=Te(-$[0],-$[1]),Le=O.l1-O.l0,vt=Le*3/4,ao=y+O.bottom+vt/2;o.wall(D(F.d-.0075,O.l0-.05),D(F.d-.0075,O.l1+.05),ao-vt/2-.05,ao+vt/2+.05,.015,T.blackGlass,q(w.blackGlass)),c.push({kind:"store",node:x.node,level:v,rect:ae(x.display,ao,le,Le,vt,0)});let ze=S.lettering;l.push({key:`stele:${x.node}`,node:x.node,level:v,station:"model",rect:ae(ze.at,y+ze.bottom+ze.height/2,ze.facing,ze.width,ze.height,0)});let Vo=D(F.d-1.5,5);b(Vo[0],y,Vo[1],2.1,I?g:T.warm,I?.15:.05);let ue=S.print,so=y+ue.bottom+ue.height/2,bt=ne=>$[0]*ne[0]+$[1]*ne[1],Xn=bt(ue.at)-ue.width/2,jn=bt(ue.at)+ue.width/2;o.wall(D(Xn-.05,re-2*oe-.035),D(jn+.05,re-2*oe-.035),so-ue.height/2-.05,so+ue.height/2+.05,.07,T.panel,{gloss:.2,emit:.32}),c.push({kind:"print",node:x.node,level:v,rect:ae(ue.at,so,ue.facing,ue.width,ue.height,0)}),l.push({key:`caption:${x.node}`,node:x.node,level:v,rect:ae(D(bt(ue.at),re-2*oe-.005),y+ue.bottom-.3,ue.facing,ue.width,ue.width/8,0)}),l.push({key:`lesson:${x.node}`,node:x.node,level:v,station:"lesson",rect:ae(x.panel.at,y+1.85,Te(W[0],W[1]),4.3,2.5,0)});let We=x.examples;l.push({key:`examples:${x.node}`,node:x.node,level:v,station:"examples",rect:ae(We.at,y+We.bottom+We.height/2,We.facing,We.width,We.height,0)});let[yt,gt]=x.holo.at;o.cylinder(yt,gt,.95,y,y+.18,40,T.steel,q(w.steel)),o.annulus(yt,gt,.8,.86,y+.182,48,T.panel,w.line),o.annulus(yt,gt,.01,.76,y+.181,40,T.plaster,{gloss:.5,emit:I?.08:.18}),p(yt,y,gt,1.7,.22);let Io=bt(x.board.at),Do=W[0]*x.board.at[0]+W[1]*x.board.at[1];o.wall(D(Io-.023,Do-x.board.width/2-.05),D(Io-.023,Do+x.board.width/2+.05),y+x.board.bottom-.05,y+x.board.bottom+x.board.height+.05,.024,T.titanium,q(w.titanium)),c.push({kind:"board",node:x.node,level:v,rect:ae(x.board.at,y+x.board.bottom+x.board.height/2,x.board.facing,x.board.width,x.board.height,0)});let tt=S.bench,xt=tt.depth/2,Fe=[tt.a[0]-$[0]*xt,tt.a[1]-$[1]*xt],Se=[tt.b[0]+$[0]*xt,tt.b[1]+$[1]*xt],[kn,Kn]=I?[T.graphite,w.graphite]:[T.travertine,w.band];o.box([Math.min(Fe[0],Se[0])+.04,y,Math.min(Fe[1],Se[1])+.04],[Math.max(Fe[0],Se[0])-.04,y+.06,Math.max(Fe[1],Se[1])-.04],T.graphiteDeep,q(w.graphite)),o.box([Math.min(Fe[0],Se[0]),y+.06,Math.min(Fe[1],Se[1])],[Math.max(Fe[0],Se[0]),y+.44,Math.max(Fe[1],Se[1])],kn,q(Kn)),p((Fe[0]+Se[0])/2,y,(Fe[1]+Se[1])/2,2.4,.14),o.prism(S.cinema.floor,y,y+.012,T.carpet,Q(w.carpet),{bottom:!1});let Tt=Math.SQRT1_2;o.wall(D(_+.5+.17*Tt,_+.5-.17*Tt),D(U-.4+.17*Tt,U-.4-.17*Tt),y,L,.04,T.fabric,Q(w.fabric)),N(S.cinema.curtain[0],S.cinema.curtain[1],y+.02,L-.04,.05,T.fabric,Q(w.fabric));let se=x.theater,io=ae(se.at,y+se.bottom+se.height/2,se.facing,se.width,se.height,0),Oo=[Math.sin(se.facing),-Math.cos(se.facing)],Uo=[io.u[0],io.u[2]],Ye=(ne,ce)=>[se.at[0]+Uo[0]*ne+Oo[0]*ce,se.at[1]+Uo[1]*ne+Oo[1]*ce],$e=se.width/2,Et=y+se.bottom+se.height;o.wall(Ye(-$e-.16,-.035),Ye($e+.16,-.035),y+se.bottom-.16,Et+.16,.04,T.blackGlass,Q({gloss:.45})),o.wall(Ye(-$e-.1,-.012),Ye($e+.1,-.012),y+se.bottom-.27,y+se.bottom-.25,.02,T.warm,w.line),o.wall(Ye(-$e-.1,-.012),Ye($e+.1,-.012),Et+.25,Et+.27,.02,T.warm,w.line),c.push({kind:"theater",node:x.node,level:v,rect:io}),i.push({key:"theater:marquee",rect:ae(se.at,Et+.62,se.facing,3.4,.66,.02)});for(let ne of se.seats){let[ce,Ee]=ne,wt=Math.atan2(se.at[0]-ce,se.at[1]-Ee);o.cylinder(ce,Ee,.14,y,y+.24,10,T.steel,Q(w.steel),{caps:!1}),o.cylinder(ce,Ee,.42,y+.24,y+.3,16,T.steel,Q(w.steel)),o.cylinder(ce,Ee,.4,y+.3,y+.5,16,T.leather,Q(w.leather)),o.cylinder(ce,Ee,.42,y+.3,y+1.1,10,T.leather,Q(w.leather),{arc:[wt+Math.PI-1.3,wt+Math.PI+1.3]}),o.cylinder(ce,Ee,.36,y+.5,y+1,10,T.leather,Q(w.leather),{arc:[wt+Math.PI-1.15,wt+Math.PI+1.15],inward:!0}),p(ce,y+.012,Ee,.75,.24)}for(let ne=0;ne<6;ne++){let[ce,Ee]=D(pe-.6-ne*.95,re+.36);b(ce,y+.013,Ee,.11,T.warm,.7)}let Ne=S.installation,[qn,Qn]=_a[P.mood];Ln(t,P.installation,{at:Ne.at,bottom:y+Ne.bottom,top:y+Ne.top,along:Ne.along,inward:Ne.inward,span:Ne.span,depth:Ne.depth,ceiling:L},{body:qn,material:q(Qn),glow:g,seed:Na(x.node),light:Z}),b(Ne.at[0]+$[0]*.8,y,Ne.at[1]+$[1]*.8,2.4,g,I?.12:.04)},K={graphite:[T.graphite,w.graphiteFloor],pale:[T.stoneFloor,w.stoneFloor],terrazzo:[T.terrazzo,w.terrazzoFloor]};for(let x of ge){let v=x.y,y=x.index,P=Va(y),S=new Set(x.stores.map(g=>g.bay.id)),G=t.vertexCount,D=o.vertexCount;for(let g of x.bays){let R=x.stores.find(F=>F.bay.id===g.id),V=R?it(R.node):null,[L,I]=V?K[V.floor]:g.use==="lobby"?[T.lobbyFloor,w.stoneFloor]:[T.stoneFloor,w.stoneFloor];o.prism(g.poly,v-ee,v,L,V?{...I,ao:It[V.mood]}:I,{bottom:!1}),M(g,V,v+A)}let $=[[[-C,C],[C,C],[_,_],[-_,_]],[[C,C],[C,-C],[_,-_],[_,_]],[[C,-C],[-C,-C],[-_,-_],[_,-_]],[[-C,-C],[-C,C],[-_,_],[-_,-_]]];for(let g of $)if(y===0)o.prism(g,v-ee,v,T.stoneFloor,w.stoneFloor,{bottom:!1});else{let R=g.reduce((L,I)=>L+I[0],0)/4,V=g.reduce((L,I)=>L+I[1],0)/4;d([R,v,V],()=>{let L=Z=>[Z[0],v-.02,Z[1]],[I,F,O,z]=g;I&&F&&O&&z&&e.quad(L(I),L(F),L(O),L(z),T.glassFloor,f(.5),[0,1,0])})}for(let[g,R]of Oa(C))o.wall(g,R,v-ee-.05,v+.02,.18,T.band,w.band),y>0&&o.wall(In(g,R,.12),In(R,g,.12),v-ee-.09,v-ee-.05,.05,T.panel,w.line);o.box([-ot,v-.3,_t-.15],[ot,v,C+.05],T.stoneFloor,w.stoneFloor);for(let g of[-1,1])for(let R of[-1,1])o.wall([g*_,R*_],[g*U,R*U],v,v+A,.3,T.travertine,w.stoneWall);o.wall([_,0],[U,0],v,v+A,.3,T.travertine,w.stoneWall),o.wall([0,-_],[0,-U],v,v+A,.3,T.travertine,w.stoneWall),o.wall([-_,0],[-U,0],v,v+A,.3,T.travertine,w.stoneWall);for(let[g,R,V]of Jt()){for(let O=0;O<4;O++){let z=O/4,Z=(O+1)/4,q=[g[0]+(R[0]-g[0])*z,g[1]+(R[1]-g[1])*z],Q=[g[0]+(R[0]-g[0])*Z,g[1]+(R[1]-g[1])*Z],re=[];if(y===0&&V[1]===1){let oe=Math.min(q[0],Q[0]),pe=Math.max(q[0],Q[0]);pe<=-we||oe>=we?re.push([q,Q]):(oe<-we&&re.push([[oe,U],[-we,U]]),pe>we&&re.push([[we,U],[pe,U]]))}else re.push([q,Q]);for(let[oe,pe]of re)d([(oe[0]+pe[0])/2,v+A/2,(oe[1]+pe[1])/2],()=>e.pane(oe,pe,v,v+A,T.facadeGlass,f(.34,.32)))}let L=[g[0]+V[0]*.31,g[1]+V[1]*.31],I=[R[0]+V[0]*.31,R[1]+V[1]*.31],F=(O,z,Z)=>{let q=Math.hypot(z[0]-O[0],z[1]-O[1]);return[O[0]-(z[0]-O[0])/q*Z,O[1]-(z[1]-O[1])/q*Z]};if(y>0){o.wall(F(L,I,.31),F(I,L,.31),v-ee-.18,v+.14,.62,T.band,w.band);let O=[g[0]+V[0]*.625,g[1]+V[1]*.625],z=[R[0]+V[0]*.625,R[1]+V[1]*.625];o.wall(O,z,v-ee-.17,v-ee-.13,.01,P,w.line)}}i.push({key:`levelno:${y}`,rect:ae([-13.5,U+.64],v+3.1,Math.PI,7.2,1.8,0)});for(let[g,R]of Ua())d([(g[0]+R[0])/2,v+.55,(g[1]+R[1])/2],()=>e.pane(g,R,v,v+1.1,T.glass,f(.1))),o.wall(g,R,v+1.06,v+1.12,.07,T.steel,w.titanium);let W=Math.asin(ot/de)+.05;d([0,v+Ae/2,0],()=>{e.cylinder(0,0,de,v,v+2.7,26,T.glass,f(.08),{arc:[W,Math.PI*2-W]}),e.cylinder(0,0,de,v+2.7,v+Ae,30,T.glass,f(.08),{caps:!1})}),o.cylinder(0,0,de+.06,v-ee,v+.03,28,T.steel,w.steel,{caps:!1}),o.cylinder(0,0,de+.06,v+2.7,v+2.84,28,T.steel,w.steel,{caps:!1}),i.push({key:`level:${y}`,rect:ae([0,(C+_)/2],v+4.82,0,4.2,.86,.075)}),i.push({key:`level:${y}`,rect:ae([0,(C+_)/2],v+4.82,Math.PI,4.2,.86,.075)}),o.box([-2.16,v+4.36,(C+_)/2-.06],[2.16,v+5.28,(C+_)/2+.06],T.blackGlass,w.blackGlass);for(let g of[-1.7,1.7])o.box([g-.02,v+5.26,7.98],[g+.02,v+A,8.02],T.steel,w.steel);{let g=ae(De,v+1.95,ko,2.9,2.2,.17),R=[De[0]-g.u[0]*1.7,De[1]-g.u[2]*1.7],V=[De[0]+g.u[0]*1.7,De[1]+g.u[2]*1.7];o.wall(R,V,v,v+3.4,.3,T.travertine,w.stoneWall),o.wall([R[0]+g.u[0]*.05,R[1]+g.u[2]*.05],[V[0]-g.u[0]*.05,V[1]-g.u[2]*.05],v+3.33,v+3.37,.31,P,w.line),c.push({kind:"directory",level:y,rect:g}),p(De[0],v,De[1],2.4,.14);for(let L of[-1,1])o.box([L*3.6-.05,v,16.2],[L*6.4+.05,v+.44,17],T.travertine,w.band),o.box([L*3.6,v+.44,16.25],[L*6.4,v+.47,16.95],T.graphite,w.graphite),p(L*5,v,16.6,2,.12)}for(let g of x.stores){let R=g.bay.inward,V=Te(-R[0],-R[1]),[L,I]=g.bay.front,F=g.bay.along,O=[g.door[0]-F[0]*rt,g.door[1]-F[1]*rt],z=[g.door[0]+F[0]*rt,g.door[1]+F[1]*rt];d([(L[0]+O[0])/2,v+2,(L[1]+O[1])/2],()=>e.pane(L,O,v,v+4,T.glass,f(.07))),d([(z[0]+I[0])/2,v+2,(z[1]+I[1])/2],()=>e.pane(z,I,v,v+4,T.glass,f(.07))),o.wall(L,I,v+4,v+A,.36,T.travertine,w.stoneWall);let Z=(j,le)=>[j[0]-F[0]*le,j[1]-F[1]*le];for(let[j,le]of[[O,1],[z,-1]]){let Le=Z(j,-le*.12);o.box([Math.min(j[0],Le[0])-Math.abs(R[0])*.22,v,Math.min(j[1],Le[1])-Math.abs(R[1])*.22],[Math.max(j[0],Le[0])+Math.abs(R[0])*.22,v+4.06,Math.max(j[1],Le[1])+Math.abs(R[1])*.22],T.steel,w.steel)}o.wall(Z(O,.12),Z(z,-.12),v+3.98,v+4.1,.44,T.steel,w.steel);for(let j of[L,I])o.box([j[0]-.05,v,j[1]-.05],[j[0]+.05,v+4,j[1]+.05],T.titanium,w.titanium);let q=j=>[j[0]-R[0]*.19,j[1]-R[1]*.19];o.wall(q(L),q(I),v+4.32,v+4.35,.02,P,w.line),i.push({key:`store:${g.node}`,rect:ae(g.door,v+4.85,V,5.6,.95,.2)});let Q=j=>[j[0]+R[0]*.06,j[1]+R[1]*.06],re=Q([(L[0]+O[0])/2,(L[1]+O[1])/2]),oe=Q([(z[0]+I[0])/2,(z[1]+I[1])/2]);l.push({key:`banner:${g.node}`,node:g.node,level:y,rect:ae(re,v+2.05,V,2.2,3.1,0)}),c.push({kind:"window",node:g.node,level:y,rect:ae(oe,v+2.25,V,2.4,1.8,0)});let pe=_e(g.bay.id,_-.78,9.25),et=_e(g.bay.id,_,9.25),Ge=_e(g.bay.id,_-1.45,9.25);o.wall(et,Ge,v+3.84,v+3.89,.04,T.steel,w.steel),i.push({key:`blade:${g.node}`,rect:ae(pe,v+3.45,Te(F[0],F[1]),1.3,.62,.02)}),i.push({key:`blade:${g.node}`,rect:ae(pe,v+3.45,Te(-F[0],-F[1]),1.3,.62,.02)}),B(g,y,v),l.push({key:`medallion:${g.node}`,node:g.node,level:y,rect:mo(g.medallion,v+.016,Te(R[0],R[1]),2.3,2.3)});for(let j of nt){let le=g.stations[j],Le=[le.p[0]+Math.sin(le.heading)*.95,le.p[1]-Math.cos(le.heading)*.95];i.push({key:`station:${j}`,rect:mo(Le,v+.018,le.heading,1.3,.46)})}}for(let g of x.lounges)Da(o,g,v,h,u);n.push({first:G,count:t.vertexCount-G}),r.push({first:D,count:o.vertexCount-D})}for(let x of[ge[ke-1]])if(x){for(let v of x.bays)o.prism(v.poly,k-ee,k,T.band,w.band,{bottom:!1});for(let v of[[[-C,C],[C,C],[_,_],[-_,_]],[[C,C],[C,-C],[_,-_],[_,_]],[[C,-C],[-C,-C],[-_,-_],[_,-_]],[[-C,-C],[-C,C],[-_,_],[-_,-_]]])o.prism(v,k-ee,k,T.band,w.band,{bottom:!1}),o.prism(v,k-ee,k-ee,T.plaster,w.plaster,{top:!1,sides:!1})}d([0,k,0],()=>e.quad([-C,k,-C],[C,k,-C],[C,k,C],[-C,k,C],T.facadeGlass,f(.2,.08),[0,1,0]));for(let[x,v,y]of Jt()){let P=[x[0]+y[0]*.31,x[1]+y[1]*.31],S=[v[0]+y[0]*.31,v[1]+y[1]*.31],G=Math.hypot(S[0]-P[0],S[1]-P[1]),D=(S[0]-P[0])/G,$=(S[1]-P[1])/G;o.wall([P[0]-D*.31,P[1]-$*.31],[S[0]+D*.31,S[1]+$*.31],k-ee-.18,k+1.1,.62,T.band,w.band);let W=[x[0]+y[0]*.625,x[1]+y[1]*.625],g=[v[0]+y[0]*.625,v[1]+y[1]*.625];o.wall(W,g,k-ee-.17,k-ee-.13,.01,T.panel,w.line);let R=I=>[I[0]-y[0]*1.2,I[1]-y[1]*1.2];o.wall(R(x),R(v),k,k+Nn,.4,T.band,w.band);let V=[(R(x)[0]+R(v)[0])/2,(R(x)[1]+R(v)[1])/2];i.push({key:"crown",rect:ae(V,k+Nn/2+.1,Te(y[0],y[1]),22,1.75,.21)});let L=I=>[I[0]+y[0]*.205,I[1]+y[1]*.205];o.wall(L(R(x)),L(R(v)),k+.22,k+.26,.01,T.runner,w.line)}d([0,k+2,0],()=>e.cylinder(0,0,de,k,k+3.4,30,T.glass,f(.1),{caps:!1})),o.cylinder(0,0,de+.08,k+3.4,k+3.62,36,T.steel,w.steel);{let v=k+1.1;for(let[y,P,S]of Jt()){let G=Math.hypot(P[0]-y[0],P[1]-y[1]),D=(P[0]-y[0])/G,$=(P[1]-y[1])/G;for(let W=1;W<Math.round(G/2.5);W++){let g=[y[0]+D*W*2.5,y[1]+$*W*2.5],R=S[1]===1&&Math.abs(g[0])<=we+.7?4.32:-.02,V=[g[0]+S[0]*.02,g[1]+S[1]*.02],L=[g[0]+S[0]*.62,g[1]+S[1]*.62];o.wall(V,L,R,v,.14,T.fin,w.titanium)}}for(let y of[-1,1])for(let P of[-1,1])o.box([y*U-.45+y*.17,-.02,P*U-.45+P*.17],[y*U+.45+y*.17,v+.02,P*U+.45+P*.17],T.band,w.band);for(let[y,P,S]of Jt()){let G=[y[0]+S[0]*.31,y[1]+S[1]*.31],D=[P[0]+S[0]*.31,P[1]+S[1]*.31];S[1]===1?(o.wall(G,[-we-.7,G[1]],-.02,.32,.62,T.graphite,w.graphite),o.wall([we+.7,D[1]],D,-.02,.32,.62,T.graphite,w.graphite)):o.wall(G,D,-.02,.32,.62,T.graphite,w.graphite)}}{o.box([-4.4,4.06,U+.1],[4.4,4.32,U+3.6],T.steel,w.steel),o.quad([-4.2,4.055,U+3.4],[4.2,4.055,U+3.4],[4.2,4.055,U+.3],[-4.2,4.055,U+.3],T.panel,{gloss:.1,emit:.55},[0,-1,0]);for(let x of[-1,1])o.box([x*(we+.36)-.34,-.02,U-.1],[x*(we+.36)+.34,4.06,U+.75],T.band,w.band);i.push({key:"entrance",rect:ae([0,U+.12],4.95,Math.PI,7.6,1.3,.05)}),p(0,0,U+2.2,4.2,.1)}o.annulus(0,0,.01,54,-.02,120,T.paving,w.paving);for(let x of[29,38,47])o.annulus(0,0,x-.3,x+.3,-.015,160,T.graphite,w.graphite);o.cylinder(0,0,55,-.5,.04,120,T.graphite,w.graphite,{caps:!1}),o.annulus(0,0,54,55,.04,120,T.graphite,w.graphite),o.cylinder(0,0,54,-.5,.04,120,T.graphite,w.graphite,{caps:!1,inward:!0}),o.annulus(0,0,55,96,-.12,160,T.water,w.water),o.cylinder(0,0,96,-.12,-.02,160,T.graphite,w.graphite,{caps:!1,inward:!0}),o.annulus(0,0,96,97.2,-.02,160,T.graphite,w.graphite),o.annulus(0,0,97.2,2400,-.04,160,T.plateau,w.plateau);for(let x of[-1,1]){let v=x*9.5,y=U+12;o.cylinder(v,y,2.7,-.02,.32,56,T.steel,w.steel),o.annulus(v,y,2.45,2.7,.32,64,T.steel,w.steel),o.annulus(v,y,.01,2.45,.3,56,T.soil,w.matte),o.annulus(v,y,2.72,2.78,.004,64,T.panel,w.line),Un(o,v,.3,y,1.45,x>0?.6:2.4)}o.quad([-.035,0,U+3.7],[.035,0,U+3.7],[.035,0,44],[-.035,0,44],T.runnerInlay,{gloss:.8},[0,1,0]);for(let x=0;x<260;x++){let v=h()*Math.PI*2,y=de+.5+h()*(C-de-.9);u.push(Math.sin(v)*y,h()*k,Math.cos(v)*y,.01+h()*.018,h(),k,.04+h()*.08)}let te=new ht;return te.cylinder(0,0,de-.12,-.18,.01,40,T.graphite,w.graphiteFloor),te.annulus(0,0,de-.32,de-.26,.015,48,T.panel,w.line),te.cylinder(0,0,de-.12,2.58,2.66,40,T.steel,w.steel),te.annulus(0,0,.3,.55,2.575,32,T.panel,w.panel),{opaque:o.toArray(),glass:e.toArray(),glassPieces:s,decals:new Float32Array(a),signs:i,screens:c,overlays:l,bubbles:new Float32Array(u),cab:te.toArray(),detail:t.toArray(),detailLevels:n,opaqueLevels:r}}function Un(o,e,t,n,r,s){let a=(u,h,d)=>[e+(u*Math.cos(s)-d*Math.sin(s))*r,t+h*r,n+(u*Math.sin(s)+d*Math.cos(s))*r],i=[a(0,0,0),a(.32,.68,.08),a(-.22,1.38,-.06),a(.18,2.03,.05),a(-.05,2.53,0)],c=[.21,.15,.11,.075,.045];for(let u=1;u<i.length;u++){let h=i[u-1],d=i[u];h&&d&&Vn(o,h,d,(c[u-1]??.05)*r,(c[u]??.04)*r,10,T.bark,w.bark)}let l=[[a(.32,.68,.08),a(1.1,.98,.3),.85],[a(-.22,1.38,-.06),a(-1.05,1.58,-.35),.8],[a(.18,2.03,.05),a(.85,2.23,-.4),.7],[a(-.05,2.53,0),a(-.05,2.78,.05),.75],[a(-.22,1.38,-.06),a(-.2,1.58,.75),.6]];for(let[u,h,d]of l)Vn(o,u,h,.05*r,.03*r,6,T.bark,w.bark),o.sphere(h,d*r,12,T.foliage,w.foliage,.32),o.sphere([h[0]+d*r*.3,h[1]+d*r*.16,h[2]-d*r*.2],d*r*.62,10,T.foliageLight,w.foliage,.36)}function Da(o,e,t,n,r){let[s,a]=_e(e.id,15,6);o.cylinder(s,a,1.55,t,t+.5,40,T.graphiteDeep,w.graphite),o.annulus(s,a,1.42,1.55,t+.5,48,T.steel,w.steel),o.annulus(s,a,.01,1.42,t+.47,40,T.soil,w.matte),o.annulus(s,a,1.56,1.6,t+.006,48,T.panel,w.line),Un(o,s,t+.47,a,1,n()*Math.PI*2);let[i,c]=_e(e.id,13,11);o.cylinder(i,c,1.9,t,t+.34,40,T.graphiteDeep,w.graphite,{caps:!1}),o.annulus(i,c,1.78,1.9,t+.34,48,T.graphite,w.graphite),o.annulus(i,c,.01,1.78,t+.33,48,T.water,w.water);let l=_e(e.id,17.2,2.5),u=_e(e.id,17.2,6.5);o.box([Math.min(l[0],u[0])-.36,t,Math.min(l[1],u[1])-.36],[Math.max(l[0],u[0])+.36,t+.44,Math.max(l[1],u[1])+.36],T.travertine,w.band);for(let h=0;h<24;h++)r.push(s+(n()-.5)*5,t+n()*4,a+(n()-.5)*5,.008+n()*.012,n(),5.2,.03+n()*.05)}function Jt(){let o=U;return[[[-o,o],[o,o],[0,1]],[[o,o],[o,-o],[1,0]],[[o,-o],[-o,-o],[0,-1]],[[-o,-o],[-o,o],[-1,0]]]}function Oa(o){return[[[-o,o],[o,o]],[[o,o],[o,-o]],[[o,-o],[-o,-o]],[[-o,-o],[-o,o]]]}function In(o,e,t){let n=Math.hypot(e[0]-o[0],e[1]-o[1]);return[o[0]+(e[0]-o[0])/n*t,o[1]+(e[1]-o[1])/n*t]}function Ua(){let o=C,e=ot;return[[[-o,o],[-e,o]],[[e,o],[o,o]],[[o,o],[o,-o]],[[o,-o],[-o,-o]],[[-o,-o],[-o,o]],[[-e,_t],[-e,o]],[[e,_t],[e,o]]]}var Ca=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),Ba=[.89,.137,.173],Ha=[.55,.64,.73],Ga=[.77,.525,0];function J(o,e,t,n,r=0){let s=d=>d.replace(`#version 300 es
`,`#version 300 es
#define Q ${r}
`),a=(d,f)=>{let m=o.createShader(d);if(!m)throw new Error(`${n}: cannot create shader`);if(o.shaderSource(m,s(f)),o.compileShader(m),!o.getShaderParameter(m,o.COMPILE_STATUS))throw new Error(`${n}: ${o.getShaderInfoLog(m)??"compile failed"}`);return m},i=o.createProgram();if(!i)throw new Error(`${n}: cannot create program`);let c=a(o.VERTEX_SHADER,e),l=a(o.FRAGMENT_SHADER,t);if(o.attachShader(i,c),o.attachShader(i,l),o.linkProgram(i),!o.getProgramParameter(i,o.LINK_STATUS))throw new Error(`${n}: ${o.getProgramInfoLog(i)??"link failed"}`);o.deleteShader(c),o.deleteShader(l);let u=new Map,h=o.getProgramParameter(i,o.ACTIVE_UNIFORMS);for(let d=0;d<h;d++){let f=o.getActiveUniform(i,d);f&&u.set(f.name,o.getUniformLocation(i,f.name))}return{p:i,u}}function za(o,e){let t=n=>{let r=n*e;return Math.min(1,Math.max(0,r*(2.51*r+.03)/(r*(2.43*r+.59)+.14)))**.45454545454545453};return[t(o[0]),t(o[1]),t(o[2])]}var eo=class o{gl;tier;prog;post=null;vaos;counts={opaque:0,cab:0,decal:0,signs:0,bubbles:0,detail:0};overlayNormals;world;skyTex=null;skyLod=6;atlasTex=null;black;shadowTex=null;shadowMat=new Float32Array(16);shadowTexel=1/2048;shadowBias=2e-4;screenTex=new Map;ribbonCount=0;ribbonLength=0;ribbonBuf;flatBuf;signBuf;leaderBuf;reticleBuf;shell=null;beam=null;studyGpu=null;holoGpu=new Map;order;dist;scene=null;hdr=null;mirror=null;bloom=[];samples=4;mirrorVP=new Float32Array(16);mirrorInv=new Float32Array(16);reflect=new Float32Array(16);constructor(e,t,n){this.gl=e,this.world=t,this.tier=n,this.prog=this.programs(n==="cinematic"?1:0),n==="cinematic"&&(this.post=this.postPrograms());let r=i=>this.vao(i,[3,3,3,4]);this.counts.opaque=t.opaque.length/Ct,this.counts.cab=t.cab.length/Ct,this.counts.decal=t.decals.length/Dn,this.counts.bubbles=t.bubbles.length/Fo,this.counts.detail=t.detail.length/Ct;let s=new Float32Array(t.screens.length*30);t.screens.forEach((i,c)=>s.set(Bt(i.rect),c*30));let a=new Float32Array(t.overlays.length*30);t.overlays.forEach((i,c)=>a.set(Bt(i.rect),c*30)),this.signBuf=e.createBuffer(),this.ribbonBuf=e.createBuffer(),this.flatBuf=e.createBuffer(),this.leaderBuf=e.createBuffer(),this.reticleBuf=e.createBuffer(),this.vaos={opaque:r(t.opaque),glass:r(t.glass),cab:r(t.cab),detail:r(t.detail),decal:this.vao(t.decals,[3,2,4,1]),full:this.vao(new Float32Array([-1,-1,3,-1,-1,3]),[2]),signs:this.vaoFor(this.signBuf,[3,2]),screens:this.vao(s,[3,2]),overlays:this.vao(a,[3,2]),bubbles:this.bubbleVao(t.bubbles),ribbon:this.vaoFor(this.ribbonBuf,[3,2]),flat:this.vaoFor(this.flatBuf,[3]),leaders:this.vaoFor(this.leaderBuf,[3]),reticles:this.vaoFor(this.reticleBuf,[3,3])},this.overlayNormals=t.overlays.map(i=>Be(i.rect)),this.order=t.glassPieces.map((i,c)=>c),this.dist=new Float32Array(t.glassPieces.length),this.black=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),this.makeSky(),this.makeShadows()}programs(e){let t=this.gl;return{lit:J(t,qt,Kt(Mo,this.world.interior),"lit",e),litClip:e===1?J(t,qt,Kt(jr,this.world.interior),"lit (mirror)",e):null,glass:J(t,qt,Kt(kr,this.world.interior),"glass",e),sky:J(t,Ie,Kr,"sky",e),tex:J(t,Jr,en,"textured",e),decal:J(t,tn,on,"decal",e),mote:J(t,rn,nn,"motes",e),ribbon:J(t,an,sn,"ribbon",e),flat:J(t,ln,un,"flat",e),shell:J(t,pt,cn,"hologram shell",e),organ:J(t,pt,dn,"hologram organs",e),line:J(t,fn,mn,"hologram lines",e),reticle:J(t,pn,vn,"hologram targets",e),beam:J(t,pt,hn,"hologram beam",e),dim:J(t,Ie,bn,"house lights",e),studyTable:J(t,En,wn,"study table",e),studyBeam:J(t,pt,Rn,"study spotlight",e),studyHolo:J(t,An,Pn,"study hologram",e),studyDim:J(t,Ie,Mn,"study lights",e),studyGlow:J(t,Fn,Sn,"study claim",e)}}postPrograms(){let e=this.gl;return{pre:J(e,Ie,yn,"bloom"),down:J(e,Ie,gn,"bloom down"),up:J(e,Ie,xn,"bloom up"),composite:J(e,Ie,Tn,"composite")}}setTier(e){if(e===this.tier||e==="cinematic")return;let t=this.gl,n=this.prog;this.prog=this.programs(0);for(let r of Object.values(n))r&&t.deleteProgram(r.p);if(this.post)for(let r of Object.values(this.post))t.deleteProgram(r.p);this.post=null,this.freeTargets(),this.tier="basic"}vao(e,t){let n=this.gl,r=n.createBuffer();return n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW),this.vaoFor(r,t)}vaoFor(e,t){let n=this.gl,r=n.createVertexArray();n.bindVertexArray(r),n.bindBuffer(n.ARRAY_BUFFER,e);let s=t.reduce((i,c)=>i+c,0)*4,a=0;return t.forEach((i,c)=>{n.enableVertexAttribArray(c),n.vertexAttribPointer(c,i,n.FLOAT,!1,s,a),a+=i*4}),n.bindVertexArray(null),r}bubbleVao(e){let t=this.gl,n=t.createVertexArray();t.bindVertexArray(n);let r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0);let s=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,s),t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW);let a=Fo*4;return t.enableVertexAttribArray(1),t.vertexAttribPointer(1,3,t.FLOAT,!1,a,0),t.vertexAttribDivisor(1,1),t.enableVertexAttribArray(2),t.vertexAttribPointer(2,4,t.FLOAT,!1,a,12),t.vertexAttribDivisor(2,1),t.bindVertexArray(null),n}makeSky(){let e=this.gl,t=this.tier==="cinematic",n=2048,r=n/2,s=e.createTexture();e.bindTexture(e.TEXTURE_2D,s),t?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,n,r,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,n,r,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let a=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,s,0);let i=J(e,Ie,qr,"skygen");e.viewport(0,0,n,r),e.disable(e.DEPTH_TEST),e.disable(e.BLEND),e.useProgram(i.p),e.uniform3f(i.u.get("uSun")??null,Ue[0],Ue[1],Ue[2]),e.bindVertexArray(this.vaos.full),e.drawArrays(e.TRIANGLES,0,3),e.bindVertexArray(null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(a),e.deleteProgram(i.p),e.bindTexture(e.TEXTURE_2D,s),e.generateMipmap(e.TEXTURE_2D),this.skyTex=s,this.skyLod=Math.log2(n)-3}makeShadows(){let e=this.gl,t=e.getParameter(e.MAX_TEXTURE_SIZE),n=this.tier==="cinematic"&&t>=4096?3072:2048,r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texStorage2D(e.TEXTURE_2D,1,e.DEPTH_COMPONENT24,n,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_COMPARE_FUNC,e.LEQUAL);let s=e.createFramebuffer();if(e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,r,0),e.drawBuffers([e.NONE]),e.readBuffer(e.NONE),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE){e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(s),e.deleteTexture(r);return}let a=new Float32Array(16),i=[0,18,0];Dt(a,[i[0]+Ue[0]*200,i[1]+Ue[1]*200,i[2]+Ue[2]*200],i);let c=1/0,l=-1/0,u=1/0,h=-1/0,d=1/0,f=-1/0;for(let b of[-82,82])for(let E of[-1.5,48])for(let A of[-82,82]){let M=(a[0]??0)*b+(a[4]??0)*E+(a[8]??0)*A+(a[12]??0),N=(a[1]??0)*b+(a[5]??0)*E+(a[9]??0)*A+(a[13]??0),B=(a[2]??0)*b+(a[6]??0)*E+(a[10]??0)*A+(a[14]??0);c=Math.min(c,M),l=Math.max(l,M),u=Math.min(u,N),h=Math.max(h,N),d=Math.min(d,B),f=Math.max(f,B)}let m=new Float32Array(16);yr(m,c,l,u,h,-f-5,-d+5),dt(this.shadowMat,m,a);let p=J(e,Qr,Zr,"shadow");e.viewport(0,0,n,n),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.depthMask(!0),e.disable(e.BLEND),e.clear(e.DEPTH_BUFFER_BIT),e.useProgram(p.p),e.uniformMatrix4fv(p.u.get("uViewProj")??null,!1,this.shadowMat),e.bindVertexArray(this.vaos.opaque),e.enable(e.POLYGON_OFFSET_FILL),e.polygonOffset(1.5,3),e.drawArrays(e.TRIANGLES,0,this.counts.opaque),e.bindVertexArray(this.vaos.detail),e.drawArrays(e.TRIANGLES,0,this.counts.detail),e.disable(e.POLYGON_OFFSET_FILL),e.bindVertexArray(null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(s),e.deleteProgram(p.p),this.shadowTex=r,this.shadowTexel=1/n,this.shadowBias=.05/(f-d+10)}setAtlas(e){let t=this.gl,n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e.canvas),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.generateMipmap(t.TEXTURE_2D),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),this.atlasTex=n;let r=[];for(let s of this.world.signs){let a=e.rects.get(s.key);if(!a)continue;let i=Bt(s.rect);for(let c=0;c<6;c++){let l=c*5,u=i[l+3]??0,h=i[l+4]??0;r.push(i[l]??0,i[l+1]??0,i[l+2]??0,a.u0+(a.u1-a.u0)*u,a.v0+(a.v1-a.v0)*h)}}t.bindBuffer(t.ARRAY_BUFFER,this.signBuf),t.bufferData(t.ARRAY_BUFFER,new Float32Array(r),t.STATIC_DRAW),this.counts.signs=r.length/5}static screenKey(e){return e.kind==="directory"?`directory:${e.level}`:e.kind==="window"?`store:${e.node??""}`:`${e.kind}:${e.node??""}`}screenGrade(e){return this.screenTex.get(e)?.grade??0}setScreenImage(e,t,n,r,s=!1){let a=this.gl,i=this.screenTex.get(e);if(i&&i.grade>n)return;let c=i?.tex&&i.grade!==4?i.tex:a.createTexture();a.bindTexture(a.TEXTURE_2D,c),s&&a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,t),s&&a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r&&a.generateMipmap(a.TEXTURE_2D),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,r?a.LINEAR_MIPMAP_LINEAR:a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),this.screenTex.set(e,{tex:c,grade:n,lastUsed:performance.now()})}setScreenTexture(e,t,n=null){let r=this.screenTex.get(e)??null;return t?this.screenTex.set(e,{tex:t,grade:4,lastUsed:performance.now()}):n?this.screenTex.set(e,n):this.screenTex.delete(e),r}evict(e){for(let[t,n]of this.screenTex)n.grade!==3||e(t)||(this.gl.deleteTexture(n.tex),this.screenTex.delete(t));for(let[t,n]of this.holoGpu)e(`holo:${t}`)||(this.freeHolo(n),this.holoGpu.delete(t))}setRibbon(e){let t=this.gl;if(!e||e.length<2){this.ribbonCount=0;return}let n=.26,r=[],s=0;for(let a=1;a<e.length;a++){let i=e[a-1],c=e[a];if(!i||!c)continue;let l=c[0]-i[0],u=c[2]-i[2],h=Math.hypot(l,u);if(h<.001)continue;let d=-u/h*n,f=l/h*n,m=(p,b,E)=>r.push(p[0]+d*b,p[1]+.03,p[2]+f*b,E,b);m(i,-1,s),m(c,-1,s+h),m(c,1,s+h),m(i,-1,s),m(c,1,s+h),m(i,1,s),s+=h}t.bindBuffer(t.ARRAY_BUFFER,this.ribbonBuf),t.bufferData(t.ARRAY_BUFFER,new Float32Array(r),t.DYNAMIC_DRAW),this.ribbonCount=r.length/5,this.ribbonLength=s}draw(e,t,n){if(this.tier==="cinematic"){try{if(this.drawCinematic(e,t,n))return}catch(s){console.warn("XI Outlet: the cinematic renderer failed; using the basic one",s)}this.setTier("basic")}let r=this.gl;r.bindFramebuffer(r.FRAMEBUFFER,null),this.drawScene(e,{viewProj:e.viewProj,invViewProj:e.invViewProj,eye:e.eye,mirror:!1,clipY:0,w:t,h:n},!0)}drawCinematic(e,t,n){let r=this.gl;if(!this.ensureTargets(t,n))return!1;let s=this.scene,a=this.hdr,i=this.post;if(!s||!a||!i)return!1;if(e.mirrorY!==null&&this.mirror){let d=e.mirrorY,f=this.reflect;f.set([1,0,0,0,0,-1,0,0,0,0,1,0,0,2*d,0,1]),dt(this.mirrorVP,e.viewProj,f),Ot(this.mirrorInv,this.mirrorVP),r.bindFramebuffer(r.FRAMEBUFFER,this.mirror.fbo),this.drawScene(e,{viewProj:this.mirrorVP,invViewProj:this.mirrorInv,eye:[e.eye[0],2*d-e.eye[1],e.eye[2]],mirror:!0,clipY:d,w:this.mirror.w,h:this.mirror.h},!1)}r.bindFramebuffer(r.FRAMEBUFFER,s.fbo),this.drawScene(e,{viewProj:e.viewProj,invViewProj:e.invViewProj,eye:e.eye,mirror:!1,clipY:0,w:t,h:n},!1),r.bindFramebuffer(r.READ_FRAMEBUFFER,s.fbo),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,a.fbo),r.blitFramebuffer(0,0,t,n,0,0,t,n,r.COLOR_BUFFER_BIT,r.NEAREST),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.disable(r.DEPTH_TEST),r.disable(r.BLEND),r.depthMask(!1),r.bindVertexArray(this.vaos.full),r.activeTexture(r.TEXTURE0);let c=(d,f,m)=>{r.bindFramebuffer(r.FRAMEBUFFER,m.fbo),r.viewport(0,0,m.w,m.h),r.useProgram(d.p),r.bindTexture(r.TEXTURE_2D,f.tex),r.uniform1i(d.u.get("uTex")??null,0),r.uniform2f(d.u.get("uTexel")??null,1/f.w,1/f.h),r.drawArrays(r.TRIANGLES,0,3)},l=this.bloom,u=l[0];if(u){r.useProgram(i.pre.p),r.uniform1f(i.pre.u.get("uThreshold")??null,me.bloomThreshold),c(i.pre,a,u);for(let d=1;d<l.length;d++){let f=l[d-1],m=l[d];f&&m&&c(i.down,f,m)}r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE);for(let d=l.length-1;d>0;d--){let f=l[d],m=l[d-1];f&&m&&c(i.up,f,m)}r.disable(r.BLEND)}r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,t,n);let h=i.composite;return r.useProgram(h.p),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,a.tex),r.uniform1i(h.u.get("uScene")??null,0),r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,u?.tex??this.black),r.uniform1i(h.u.get("uBloom")??null,1),r.activeTexture(r.TEXTURE0),r.uniform1f(h.u.get("uBloomStrength")??null,u?me.bloomStrength:0),r.uniform1f(h.u.get("uExposure")??null,e.exposure),r.uniform1f(h.u.get("uGrain")??null,me.grain),r.uniform1f(h.u.get("uTime")??null,e.time),r.drawArrays(r.TRIANGLES,0,3),r.bindVertexArray(null),r.depthMask(!0),!0}ensureTargets(e,t){if(this.scene&&this.scene.w===e&&this.scene.h===t)return!0;this.freeTargets();let n=this.gl;if(!n.getExtension("EXT_color_buffer_float"))return!1;let r=n.getInternalformatParameter(n.RENDERBUFFER,n.RGBA16F,n.SAMPLES);this.samples=Math.min(4,r&&r.length>0?r[0]??0:0);let s=(l,u)=>{let h=n.createTexture();return n.bindTexture(n.TEXTURE_2D,h),n.texImage2D(n.TEXTURE_2D,0,n.RGBA16F,l,u,0,n.RGBA,n.HALF_FLOAT,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),h},a=()=>n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;{let l=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,l);let u=n.createRenderbuffer();n.bindRenderbuffer(n.RENDERBUFFER,u),this.samples>0?n.renderbufferStorageMultisample(n.RENDERBUFFER,this.samples,n.RGBA16F,e,t):n.renderbufferStorage(n.RENDERBUFFER,n.RGBA16F,e,t),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,u);let h=n.createRenderbuffer();n.bindRenderbuffer(n.RENDERBUFFER,h),this.samples>0?n.renderbufferStorageMultisample(n.RENDERBUFFER,this.samples,n.DEPTH_COMPONENT24,e,t):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT24,e,t),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,h);let d=[u,h].filter(f=>f!==null);if(this.scene={fbo:l,tex:null,rbs:d,w:e,h:t},!a())return this.failTargets()}{let l=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,l);let u=s(e,t);if(n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,u,0),this.hdr={fbo:l,tex:u,rbs:[],w:e,h:t},!a())return this.failTargets()}{let l=Math.max(1,Math.round(e/2)),u=Math.max(1,Math.round(t/2)),h=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,h);let d=s(l,u);n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,d,0);let f=n.createRenderbuffer();if(n.bindRenderbuffer(n.RENDERBUFFER,f),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT24,l,u),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,f),this.mirror={fbo:h,tex:d,rbs:f?[f]:[],w:l,h:u},!a())return this.failTargets()}let i=e,c=t;for(let l=0;l<5;l++){i=Math.max(1,Math.round(i/2)),c=Math.max(1,Math.round(c/2));let u=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,u);let h=s(i,c);if(n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,h,0),this.bloom.push({fbo:u,tex:h,rbs:[],w:i,h:c}),!a())return this.failTargets()}return n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindRenderbuffer(n.RENDERBUFFER,null),!0}failTargets(){return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.freeTargets(),!1}freeTargets(){let e=this.gl;for(let t of[this.scene,this.hdr,this.mirror,...this.bloom])if(t){e.deleteFramebuffer(t.fbo),e.deleteTexture(t.tex);for(let n of t.rbs)e.deleteRenderbuffer(n)}this.scene=null,this.hdr=null,this.mirror=null,this.bloom=[]}drawScene(e,t,n){let r=this.gl,s=this.prog;r.viewport(0,0,t.w,t.h),r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.enable(r.DEPTH_TEST),r.depthFunc(r.LEQUAL),r.disable(r.CULL_FACE),r.disable(r.BLEND),r.depthMask(!0);let a=!t.mirror&&!n&&e.mirrorY!==null&&this.mirror!==null,i=za(me.fog,e.exposure);r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,this.skyTex),r.activeTexture(r.TEXTURE2),r.bindTexture(r.TEXTURE_2D,this.shadowTex),r.activeTexture(r.TEXTURE3),r.bindTexture(r.TEXTURE_2D,a?this.mirror?.tex??this.black:this.black),r.activeTexture(r.TEXTURE0);let c=m=>{r.useProgram(m.p);let p=(N,B)=>{let K=m.u.get(N);K&&r.uniform1f(K,B)},b=(N,B)=>{let K=m.u.get(N);K&&r.uniform3f(K,B[0]??0,B[1]??0,B[2]??0)};r.uniformMatrix4fv(m.u.get("uViewProj")??null,!1,t.viewProj),b("uCamPos",t.eye),b("uSun",Ue),b("uSunColor",me.sun),b("uSkyAmb",me.sky),b("uGroundAmb",me.ground),b("uInterior",me.interior),p("uPanel",me.panel),p("uEmitGain",me.emit),b("uFog",me.fog),b("uFogDisplay",i),p("uFogDensity",me.fogDensity),p("uTime",e.time),p("uDirect",n?1:0),p("uExposure",e.exposure),p("uSkyLod",this.skyLod),p("uClip",t.mirror?1:0),p("uClipY",t.clipY),p("uMirrorOn",a?1:0),p("uMirrorY",e.mirrorY??-1e3);let E=m.u.get("uViewport");E&&r.uniform2f(E,t.w,t.h),p("uShadowOn",this.shadowTex?1:0),p("uShadowTexel",this.shadowTexel),p("uShadowBias",this.shadowBias);let A=m.u.get("uShadowMat");A&&r.uniformMatrix4fv(A,!1,this.shadowMat);let M=(N,B)=>{let K=m.u.get(N);K&&r.uniform1i(K,B)};M("uSky",1),M("uShadow",2),M("uMirror",3)},l=t.mirror?s.litClip??s.lit:s.lit;c(l),r.uniform3f(l.u.get("uOffset")??null,0,0,0),r.bindVertexArray(this.vaos.opaque);let u=e.level===null?void 0:this.world.opaqueLevels[e.level];if(u&&u.count>0){r.drawArrays(r.TRIANGLES,u.first,u.count),u.first>0&&r.drawArrays(r.TRIANGLES,0,u.first);let m=u.first+u.count;m<this.counts.opaque&&r.drawArrays(r.TRIANGLES,m,this.counts.opaque-m)}else r.drawArrays(r.TRIANGLES,0,this.counts.opaque);r.uniform3f(l.u.get("uOffset")??null,0,e.cabY,0),r.bindVertexArray(this.vaos.cab),r.drawArrays(r.TRIANGLES,0,this.counts.cab);let h=e.level===null?void 0:this.world.detailLevels[e.level];h&&h.count>0&&(r.uniform3f(l.u.get("uOffset")??null,0,0,0),r.bindVertexArray(this.vaos.detail),r.drawArrays(r.TRIANGLES,h.first,h.count)),c(s.tex),r.uniform1i(s.tex.u.get("uTex")??null,0),r.bindVertexArray(this.vaos.screens);let d=performance.now();this.world.screens.forEach((m,p)=>{let b=o.screenKey(m),E=this.screenTex.get(b);E&&(E.lastUsed=d);let A=m.kind==="store"||m.kind==="directory",M=m.kind==="board";r.uniform1i(s.tex.u.get("uMode")??null,A?1:2),r.uniform1f(s.tex.u.get("uHasTex")??null,E?.tex?1:0),r.uniform1f(s.tex.u.get("uFlip")??null,E?.grade===4?1:0);let N=M?[.97,.97,.96]:m.kind==="directory"?[.05,.06,.08]:[.03,.04,.05];r.uniform4f(s.tex.u.get("uPlaceholder")??null,N[0]??0,N[1]??0,N[2]??0,1),r.bindTexture(r.TEXTURE_2D,E?.tex??this.black),r.drawArrays(r.TRIANGLES,p*6,6)}),r.depthMask(!1),c(s.sky),r.uniformMatrix4fv(s.sky.u.get("uInvViewProj")??null,!1,t.invViewProj),r.bindVertexArray(this.vaos.full),r.drawArrays(r.TRIANGLES,0,3),r.enable(r.BLEND),r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),r.enable(r.POLYGON_OFFSET_FILL),r.polygonOffset(-1,-4),c(s.decal),r.bindVertexArray(this.vaos.decal),r.drawArrays(r.TRIANGLES,0,this.counts.decal),this.ribbonCount>0&&!t.mirror&&(c(s.ribbon),r.uniform1f(s.ribbon.u.get("uLength")??null,this.ribbonLength),r.bindVertexArray(this.vaos.ribbon),r.drawArrays(r.TRIANGLES,0,this.ribbonCount)),this.atlasTex&&this.counts.signs>0&&(c(s.tex),r.uniform1i(s.tex.u.get("uMode")??null,0),r.uniform1f(s.tex.u.get("uHasTex")??null,1),r.uniform1f(s.tex.u.get("uFlip")??null,0),r.bindTexture(r.TEXTURE_2D,this.atlasTex),r.bindVertexArray(this.vaos.signs),r.drawArrays(r.TRIANGLES,0,this.counts.signs));{let m=!1;this.world.overlays.forEach((p,b)=>{if(e.level===null||p.level!==e.level)return;let E=this.overlayNormals[b];if(E&&(t.eye[0]-p.rect.centre[0])*E[0]+(t.eye[1]-p.rect.centre[1])*E[1]+(t.eye[2]-p.rect.centre[2])*E[2]<0)return;let A=this.screenTex.get(p.key);A?.tex&&(m||(c(s.tex),r.uniform1i(s.tex.u.get("uMode")??null,0),r.uniform1f(s.tex.u.get("uHasTex")??null,1),r.uniform1f(s.tex.u.get("uFlip")??null,0),r.bindVertexArray(this.vaos.overlays),m=!0),A.lastUsed=d,r.bindTexture(r.TEXTURE_2D,A.tex),r.drawArrays(r.TRIANGLES,b*6,6))})}if(r.disable(r.POLYGON_OFFSET_FILL),!t.mirror)for(let m of e.holos)this.drawHolo(m,e,n);c(s.glass),r.uniform3f(s.glass.u.get("uOffset")??null,0,0,0),r.uniform1f(s.glass.u.get("uFade")??null,e.fade),r.bindVertexArray(this.vaos.glass);let f=this.world.glassPieces;for(let m=0;m<f.length;m++){let p=f[m]?.centre??[0,0,0];this.dist[m]=(p[0]-t.eye[0])**2+(p[1]-t.eye[1])**2+(p[2]-t.eye[2])**2}this.order.sort((m,p)=>(this.dist[p]??0)-(this.dist[m]??0));for(let m of this.order){let p=f[m];p&&r.drawArrays(r.TRIANGLES,p.first,p.count)}if(!t.mirror&&this.counts.bubbles>0&&(c(s.mote),r.uniform3f(s.mote.u.get("uRight")??null,e.right[0],e.right[1],e.right[2]),r.uniform3f(s.mote.u.get("uUp")??null,e.up[0],e.up[1],e.up[2]),r.bindVertexArray(this.vaos.bubbles),r.drawArraysInstanced(r.TRIANGLES,0,6,this.counts.bubbles)),!t.mirror&&e.dim>.001&&(r.disable(r.DEPTH_TEST),r.useProgram(s.dim.p),r.uniform1f(s.dim.u.get("uDim")??null,e.dim),r.bindVertexArray(this.vaos.full),r.drawArrays(r.TRIANGLES,0,3),r.enable(r.DEPTH_TEST)),!t.mirror&&e.study&&this.drawStudy(e.study,e,t,n),!t.mirror&&e.stages&&e.stages.length>0&&this.drawStages(e.stages,e,t,n),!t.mirror&&e.highlight){let{min:m,max:p,rgba:b}=e.highlight;c(s.flat),r.uniform4f(s.flat.u.get("uColor")??null,b[0]*b[3],b[1]*b[3],b[2]*b[3],b[3]),r.bindBuffer(r.ARRAY_BUFFER,this.flatBuf),r.bufferData(r.ARRAY_BUFFER,Wa(m,p),r.DYNAMIC_DRAW),r.bindVertexArray(this.vaos.flat),r.drawArrays(r.TRIANGLES,0,36)}r.bindVertexArray(null),r.depthMask(!0),r.disable(r.BLEND)}owned(e,t,n,r){let s=this.gl,a=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,a),s.bufferData(s.ARRAY_BUFFER,e,s.STATIC_DRAW);let i=this.vaoFor(a,t);return a&&r.push(a),i&&n.push(i),i}holoBuffers(e){let t=this.holoGpu.get(e.node);if(t)return t;let n=[],r=[],s=l=>({vao:l.length>0?this.owned(l,[3,3],n,r):null,count:l.length/$t}),a=l=>({vao:l.length>0?this.owned(new Float32Array(l.flat()),[3],n,r):null,count:l.length}),i=new Map;for(let l of e.lines){let u=l.color.join(","),h=i.get(u)??{color:l.color,data:[]};i.set(u,h);for(let d=1;d<l.points.length;d++)h.data.push(...l.points[d-1]??[0,0,0],...l.points[d]??[0,0,0])}let c={vaos:n,bufs:r,lit:s(Eo(e.lit)),ghosts:s(Eo(e.ghosts)),lines:[...i.values()].map(l=>({vao:this.owned(new Float32Array(l.data),[3],n,r),count:l.data.length/3,color:l.color})),dots:a(e.dots),beads:a(e.beads),lastUsed:performance.now()};return this.holoGpu.set(e.node,c),c}freeHolo(e){for(let t of e.vaos)this.gl.deleteVertexArray(t);for(let t of e.bufs)this.gl.deleteBuffer(t)}drawHolo(e,t,n){let r=this.gl,s=this.prog,a=e.holo,i=this.holoBuffers(a);if(i.lastUsed=performance.now(),!this.shell){let m=Br();this.shell={vao:this.vao(m,[3,3]),count:m.length/$t}}if(!this.beam){let m=Hr();this.beam={vao:this.vao(m,[3,3]),count:m.length/$t}}let c=a.tint,l=(m,p)=>{r.useProgram(m.p),r.uniformMatrix4fv(m.u.get("uViewProj")??null,!1,t.viewProj),r.uniformMatrix4fv(m.u.get("uModel")??null,!1,p);let b=m.u.get("uCamPos");b&&r.uniform3f(b,t.eye[0],t.eye[1],t.eye[2]);let E=m.u.get("uDirect");E&&r.uniform1f(E,n?1:0);let A=m.u.get("uExposure");A&&r.uniform1f(A,t.exposure)},u=m=>{this.beam&&(l(s.beam,e.model),r.uniform1f(s.beam.u.get("uTime")??null,t.time),r.uniform1f(s.beam.u.get("uSide")??null,m),r.bindVertexArray(this.beam.vao),r.drawArrays(r.TRIANGLES,0,this.beam.count))};u(-1),l(s.organ,e.model);let h=(m,p,b,E)=>{!m.vao||m.count===0||(r.uniform3f(s.organ.u.get("uColor")??null,p[0],p[1],p[2]),r.uniform1f(s.organ.u.get("uAlpha")??null,b),r.uniform1f(s.organ.u.get("uPulse")??null,E),r.bindVertexArray(m.vao),r.drawArrays(r.TRIANGLES,0,m.count))};h(i.ghosts,[.42,.5,.58],a.whole?.1:.14,0),h(i.lit,c,.86,e.pulse),l(s.line,e.model);let d=(m,p)=>r.uniform4f(s.line.u.get("uColor")??null,m[0]*p,m[1]*p,m[2]*p,p);r.uniform1f(s.line.u.get("uRound")??null,0);for(let m of i.lines)d(m.color,.92),r.bindVertexArray(m.vao),r.drawArrays(r.LINES,0,m.count);r.uniform1f(s.line.u.get("uRound")??null,1),i.dots.vao&&(d(c,.75),r.uniform1f(s.line.u.get("uPointSize")??null,.017*t.pxPerMetre),r.bindVertexArray(i.dots.vao),r.drawArrays(r.POINTS,0,i.dots.count)),i.beads.vao&&(d(Ga,.95),r.uniform1f(s.line.u.get("uPointSize")??null,.03*t.pxPerMetre),r.bindVertexArray(i.beads.vao),r.drawArrays(r.POINTS,0,i.beads.count)),l(s.line,Ca),r.uniform1f(s.line.u.get("uRound")??null,0),r.bindVertexArray(this.vaos.leaders);for(let[m,p,b]of[[e.rings,Ha,.5],[e.leaders,Ba,.9]])m.length!==0&&(d(p,b),r.bindBuffer(r.ARRAY_BUFFER,this.leaderBuf),r.bufferData(r.ARRAY_BUFFER,m,r.DYNAMIC_DRAW),r.drawArrays(r.LINES,0,m.length/3));let f=Math.floor(e.targets.length/4);if(f>0){let m=new Float32Array(f*36),p=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1];for(let b=0;b<f;b++){let E=e.targets[b*4]??0,A=e.targets[b*4+1]??0,M=e.targets[b*4+2]??0,N=e.targets[b*4+3]??0;for(let B=0;B<6;B++)m.set([E,A,M,p[B*2]??0,p[B*2+1]??0,N],(b*6+B)*6)}r.useProgram(s.reticle.p),r.uniformMatrix4fv(s.reticle.u.get("uViewProj")??null,!1,t.viewProj),r.uniform3f(s.reticle.u.get("uRight")??null,t.right[0],t.right[1],t.right[2]),r.uniform3f(s.reticle.u.get("uUp")??null,t.up[0],t.up[1],t.up[2]),r.uniform3f(s.reticle.u.get("uCamPos")??null,t.eye[0],t.eye[1],t.eye[2]),r.uniform1f(s.reticle.u.get("uTime")??null,t.time),r.uniform1f(s.reticle.u.get("uDirect")??null,n?1:0),r.uniform1f(s.reticle.u.get("uExposure")??null,t.exposure),r.bindBuffer(r.ARRAY_BUFFER,this.reticleBuf),r.bufferData(r.ARRAY_BUFFER,m,r.DYNAMIC_DRAW),r.bindVertexArray(this.vaos.reticles),r.drawArrays(r.TRIANGLES,0,f*6)}l(s.shell,e.model),r.uniform3f(s.shell.u.get("uTint")??null,c[0],c[1],c[2]),r.uniform1f(s.shell.u.get("uWhole")??null,a.whole||a.skin?1:0),r.uniform1f(s.shell.u.get("uTime")??null,t.time),r.uniform1f(s.shell.u.get("uScanY")??null,e.scanY),r.bindVertexArray(this.shell.vao),r.colorMask(!1,!1,!1,!1),r.depthMask(!0),r.drawArrays(r.TRIANGLES,0,this.shell.count),r.colorMask(!0,!0,!0,!0),r.depthMask(!1),r.drawArrays(r.TRIANGLES,0,this.shell.count),u(1)}drawStudy(e,t,n,r){let s=this.gl,a=this.prog;this.ensureStudyGpu();let i=this.studyGpu;if(!i)return;let c=d=>{s.useProgram(d.p);let f=(A,M)=>{let N=d.u.get(A);N&&s.uniform1f(N,M)},m=d.u.get("uViewProj");m&&s.uniformMatrix4fv(m,!1,n.viewProj);let p=d.u.get("uCamPos");p&&s.uniform3f(p,n.eye[0],n.eye[1],n.eye[2]),f("uDirect",r?1:0),f("uExposure",t.exposure),f("uTime",t.time);let b=d.u.get("uNeonA");b&&s.uniform3f(b,e.neonA[0],e.neonA[1],e.neonA[2]);let E=d.u.get("uNeonB");E&&s.uniform3f(E,e.neonB[0],e.neonB[1],e.neonB[2])};(e.lights>.001||e.deep>.001)&&(s.disable(s.DEPTH_TEST),s.useProgram(a.studyDim.p),s.uniform1f(a.studyDim.u.get("uStudy")??null,e.lights),["uSpotA","uSpotB","uSpotC"].forEach((d,f)=>{let m=e.spots[f]??[0,0,0,0];s.uniform4f(a.studyDim.u.get(d)??null,m[0],m[1],m[2],m[3])}),s.uniform3f(a.studyDim.u.get("uSpotW")??null,e.spotW[0],e.spotW[1],e.spotW[2]),s.uniform1f(a.studyDim.u.get("uDeep")??null,e.deep),s.bindVertexArray(this.vaos.full),s.drawArrays(s.TRIANGLES,0,3),s.enable(s.DEPTH_TEST));let l=e.pod,u=l?.kind==="table"?{vao:i.table,count:i.tableCount}:{vao:i.pod,count:i.podCount};l&&l.assemble>.001&&u.vao&&(s.disable(s.BLEND),s.depthMask(!0),c(a.studyTable),s.uniformMatrix4fv(a.studyTable.u.get("uModel")??null,!1,l.frame),s.uniform1f(a.studyTable.u.get("uAssemble")??null,l.assemble),s.uniform1f(a.studyTable.u.get("uPop")??null,l.pop),s.bindVertexArray(u.vao),s.drawArrays(s.TRIANGLES,0,u.count),s.enable(s.BLEND),s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA),s.depthMask(!1));let h=l?.kind==="table"?{vao:i.cone,count:i.coneCount}:{vao:i.column,count:i.columnCount};if(l&&l.beamLight>.001&&h.vao){c(a.studyBeam),s.uniformMatrix4fv(a.studyBeam.u.get("uModel")??null,!1,l.beam),s.uniform1f(a.studyBeam.u.get("uLight")??null,l.beamLight),s.uniform1f(a.studyBeam.u.get("uHeight")??null,l.beamHeight);let d=l.kind==="table"?[.86,.92,1]:[e.neonA[0]*.75+.25,e.neonA[1]*.75+.25,e.neonA[2]*.75+.25];s.uniform3f(a.studyBeam.u.get("uTint")??null,d[0],d[1],d[2]),s.uniform1f(a.studyBeam.u.get("uGain")??null,l.kind==="table"?1:3.2),s.bindVertexArray(h.vao),s.drawArrays(s.TRIANGLES,0,h.count)}if(e.claim){let d=e.claim;c(a.studyGlow),s.uniform3f(a.studyGlow.u.get("uCentre")??null,d.centre[0],d.centre[1],d.centre[2]),s.uniform3f(a.studyGlow.u.get("uU")??null,d.u[0],d.u[1],d.u[2]),s.uniform3f(a.studyGlow.u.get("uV")??null,d.v[0],d.v[1],d.v[2]),s.uniform2f(a.studyGlow.u.get("uHalf")??null,d.hu,d.hv),s.uniform1f(a.studyGlow.u.get("uOn")??null,e.lights),s.bindVertexArray(i.quad),s.drawArrays(s.TRIANGLES,0,6)}if(e.holo&&e.holo.reveal>.001){let d=e.holo;c(a.studyHolo),s.uniform3f(a.studyHolo.u.get("uCentre")??null,d.centre[0],d.centre[1],d.centre[2]),s.uniform3f(a.studyHolo.u.get("uRight")??null,d.right[0],d.right[1],d.right[2]),s.uniform3f(a.studyHolo.u.get("uUp")??null,d.up[0],d.up[1],d.up[2]),s.uniform1f(a.studyHolo.u.get("uHalf")??null,d.half),s.uniform1f(a.studyHolo.u.get("uReveal")??null,d.reveal),s.uniform1f(a.studyHolo.u.get("uFlash")??null,d.flash),s.uniform1f(a.studyHolo.u.get("uGlow")??null,d.glow),s.uniform1f(a.studyHolo.u.get("uScan")??null,d.scan),s.uniform1f(a.studyHolo.u.get("uMotion")??null,e.motion?1:0),s.uniform4f(a.studyHolo.u.get("uRect")??null,d.rect[0],d.rect[1],d.rect[2],d.rect[3]),s.uniform1i(a.studyHolo.u.get("uTex")??null,0),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,d.tex),s.bindVertexArray(i.quad),s.drawArrays(s.TRIANGLES,0,6)}}ensureStudyGpu(){if(!this.studyGpu){let e=Nr(),t=Vr(),n=vo(.5,.08,Gt),r=vo(.06,.22,1);this.studyGpu={table:this.vao(e,[3,3,1,1]),tableCount:e.length/8,pod:this.vao(t,[3,3,1,1]),podCount:t.length/8,cone:this.vao(n,[3,3]),coneCount:n.length/6,column:this.vao(r,[3,3]),columnCount:r.length/6,quad:this.vao(new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),[2])}}}drawStages(e,t,n,r){let s=this.gl,a=this.prog;this.ensureStudyGpu();let i=this.studyGpu;if(!i)return;let c=(l,u)=>{s.useProgram(l.p);let h=(b,E)=>{let A=l.u.get(b);A&&s.uniform1f(A,E)},d=l.u.get("uViewProj");d&&s.uniformMatrix4fv(d,!1,n.viewProj);let f=l.u.get("uCamPos");f&&s.uniform3f(f,n.eye[0],n.eye[1],n.eye[2]),h("uDirect",r?1:0),h("uExposure",t.exposure),h("uTime",t.time);let m=l.u.get("uNeonA");m&&s.uniform3f(m,u.neonA[0],u.neonA[1],u.neonA[2]);let p=l.u.get("uNeonB");p&&s.uniform3f(p,u.neonB[0],u.neonB[1],u.neonB[2])};s.enable(s.BLEND),s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA),s.depthMask(!1);for(let l of e){l.beamLight>.001&&i.column&&(c(a.studyBeam,l),s.uniformMatrix4fv(a.studyBeam.u.get("uModel")??null,!1,l.beam),s.uniform1f(a.studyBeam.u.get("uLight")??null,l.beamLight),s.uniform1f(a.studyBeam.u.get("uHeight")??null,1),s.uniform3f(a.studyBeam.u.get("uTint")??null,l.neonA[0]*.75+.25,l.neonA[1]*.75+.25,l.neonA[2]*.75+.25),s.uniform1f(a.studyBeam.u.get("uGain")??null,3.2),s.bindVertexArray(i.column),s.drawArrays(s.TRIANGLES,0,i.columnCount));let u=l.holo;u.reveal<=.001||(c(a.studyHolo,l),s.uniform3f(a.studyHolo.u.get("uCentre")??null,u.centre[0],u.centre[1],u.centre[2]),s.uniform3f(a.studyHolo.u.get("uRight")??null,u.right[0],u.right[1],u.right[2]),s.uniform3f(a.studyHolo.u.get("uUp")??null,u.up[0],u.up[1],u.up[2]),s.uniform1f(a.studyHolo.u.get("uHalf")??null,u.half),s.uniform1f(a.studyHolo.u.get("uReveal")??null,u.reveal),s.uniform1f(a.studyHolo.u.get("uFlash")??null,u.flash),s.uniform1f(a.studyHolo.u.get("uGlow")??null,u.glow),s.uniform1f(a.studyHolo.u.get("uScan")??null,u.scan),s.uniform1f(a.studyHolo.u.get("uMotion")??null,l.motion?1:0),s.uniform4f(a.studyHolo.u.get("uRect")??null,u.rect[0],u.rect[1],u.rect[2],u.rect[3]),s.uniform1i(a.studyHolo.u.get("uTex")??null,0),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,u.tex),s.bindVertexArray(i.quad),s.drawArrays(s.TRIANGLES,0,6))}}dispose(){let e=this.gl;for(let t of this.holoGpu.values())this.freeHolo(t);this.holoGpu.clear();for(let t of Object.values(this.prog))t&&e.deleteProgram(t.p);if(this.post)for(let t of Object.values(this.post))e.deleteProgram(t.p);this.freeTargets();for(let t of this.screenTex.values())t.grade!==4&&e.deleteTexture(t.tex);e.deleteTexture(this.skyTex),e.deleteTexture(this.atlasTex),e.deleteTexture(this.shadowTex),e.deleteTexture(this.black)}};function Wa(o,e){let[t,n,r]=o,[s,a,i]=e,c=(l,u,h,d)=>[...l,...u,...h,...l,...h,...d];return new Float32Array([...c([t,n,i],[s,n,i],[s,a,i],[t,a,i]),...c([s,n,r],[t,n,r],[t,a,r],[s,a,r]),...c([s,n,i],[s,n,r],[s,a,r],[s,a,i]),...c([t,n,r],[t,n,i],[t,a,i],[t,a,r]),...c([t,a,i],[s,a,i],[s,a,r],[t,a,r]),...c([t,n,r],[s,n,r],[s,n,i],[t,n,i])])}var Ze=[0,23,0],Ya={az:34*Ce,el:7*Ce,dist:160},Je=64*Ce,_o=34*Ce,Cn=[52,280],Bn=[3*Ce,62*Ce],$a=3.4,Xa=6.8,ja=1.9;function Hn(o){let e=Math.cos(o.el),t=[Ze[0]+o.dist*e*Math.sin(o.az),Ze[1]+o.dist*Math.sin(o.el),Ze[2]+o.dist*e*Math.cos(o.az)],n=Ze[0]-t[0],r=Ze[1]-t[1],s=Ze[2]-t[2];return{eye:t,heading:Te(n,s),pitch:Math.atan2(r,Math.hypot(n,s)),fov:_o,level:null}}function oo(o,e,t,n,r=ie){return{eye:[e[0],he(o)+r,e[1]],heading:t,pitch:n,fov:Je,level:o}}function He(o){let e=Pe(o,0,1);return e*e*(3-2*e)}function to(o,e,t,n){let r=Math.max(.001,Zo(e)),s=Pe(r/3,3.2,8),a=Math.max(.6,r/s),i=[0];for(let m=1;m<e.length;m++){let p=e[m-1],b=e[m];i.push((i[m-1]??0)+(p&&b?Math.hypot(b[0]-p[0],b[1]-p[1]):0))}let c=m=>{for(let p=1;p<e.length;p++){let b=i[p-1]??0,E=i[p]??0;if(m<=E||p===e.length-1){let A=e[p-1]??[0,0],M=e[p]??A,N=E>b?Pe((m-b)/(E-b),0,1):1;return[Re(A[0],M[0],N),Re(A[1],M[1],N)]}}return e[e.length-1]??[0,0]},l=e[e.length-1]??[0,0],u=e[e.length-2]??l,h=Te(l[0]-u[0],l[1]-u[1]),d=m=>{let p=c(m),b=c(Math.min(r,m+2.4));return Math.hypot(b[0]-p[0],b[1]-p[1])<.05?h:Te(b[0]-p[0],b[1]-p[1])},f=he(o);return{duration:a,interruptible:!0,route:e.map(m=>[m[0],f,m[1]]),at(m){let p=ut(m),b=c(p*r),E=d(p*r);E=t.heading+lt(t.heading,E)*He(m/.28),n.heading!==null&&(E+=lt(E,n.heading)*He((m-.66)/.34));let A=Re(Re(t.eye??ie,ie,He(m/.25)),n.eye??ie,He((m-.7)/.3));return oo(o,b,E,Re(t.pitch,n.pitch,p),A)}}}function ka(o,e,t){let n=Pe(.9*Math.abs(e-o)+.9,1.6,4.6),r=s=>Re(he(o),he(e),ut(s));return{duration:n,cab:r,at(s){let a=r(s),i=t+lt(t,Math.PI)*He(s*1.6);return{eye:[0,a+ie,0],heading:i,pitch:0,fov:Je,level:Math.round(Re(o,e,ut(s)))}}}}function So(o,e,t,n,r){let s=a=>{let i=1-a,c=i*i*i,l=3*i*i*a,u=3*i*a*a,h=a*a*a;return[0,1,2].map(d=>c*(o.eye[d]??0)+l*(t[d]??0)+u*(n[d]??0)+h*(e.eye[d]??0))};return{duration:r,at(a){let i=ut(a),c=He((a-.15)/.8);return{eye:s(i),heading:o.heading+lt(o.heading,e.heading)*c,pitch:Re(o.pitch,e.pitch,c),fov:Re(o.fov,e.fov,He((a-.3)/.7)),level:a>.7?e.level:o.level}}}}var ro=class{mode="exterior";orbit={...Ya};level=0;pos=Nt;heading=0;pitch=0;eye=ie;rising=!1;reducedMotion=!1;destination=null;vel=[0,0];legs=[];legT=0;finish=null;idleFor=0;stepBuffer=0;camera(){let e=this.mode==="travel"?this.legs[0]:void 0;return e?e.at(Pe(this.legT/e.duration,0,1)):this.mode==="exterior"?Hn(this.orbit):oo(this.level,this.pos,this.heading,this.pitch,this.eye)}cabY(){let e=this.mode==="travel"?this.legs[0]:void 0;if(e?.cab)return e.cab(Pe(this.legT/e.duration,0,1));let t=this.camera();return he(t.level??this.level)}routeAhead(){let e=this.mode==="travel"?this.legs[0]:void 0;if(!e?.route)return null;let t=this.camera(),n=e.route,r=0,s=1/0;for(let a=0;a<n.length-1;a++){let i=n[a];if(!i)continue;let c=Math.hypot(i[0]-t.eye[0],i[2]-t.eye[2]);c<s&&(s=c,r=a)}return[[t.eye[0],n[0]?.[1]??0,t.eye[2]],...n.slice(r+1)]}get travelling(){return this.mode==="travel"}goTo(e,t=this.reducedMotion){let n=this.plan(e);return n?(this.destination=e.kind==="store"||e.kind==="level"?e:null,this.vel=[0,0],t||n.legs.length===0?(this.legs=[],n.finish(),!0):(this.legs=n.legs,this.legT=0,this.finish=n.finish,this.mode="travel",!0)):!1}here(){let e=this.camera();return e.level===null?null:{level:e.level,p:[e.eye[0],e.eye[2]],heading:e.heading,pitch:e.pitch,eye:e.eye[1]-he(e.level)}}plan(e){let t=this.camera(),n=this.mode==="exterior"?null:this.here(),r=(h,d,f,m=0,p=ie)=>()=>{this.mode="walk",this.level=h,this.pos=d,this.heading=f,this.pitch=m,this.eye=p,this.rising=!1};if(e.kind==="exterior"){let h=Hn(this.orbit);return{legs:n?[So(t,h,[t.eye[0]*1.3,t.eye[1]+10,t.eye[2]*1.3+24],[h.eye[0]*.75,h.eye[1]+12,h.eye[2]*.75],2.6)]:[],finish:()=>{this.mode="exterior",this.idleFor=0}}}let s,a;if(e.kind==="plaza")s=0,a={p:Nt,heading:0,pitch:.04,waypoint:"plaza"};else if(e.kind==="level")s=e.level,a=n&&n.level!==s?{p:[0,4],heading:Math.PI,pitch:.08,waypoint:"bridge"}:{p:at,heading:0,pitch:0,waypoint:"lobby"};else if(e.kind==="store"){let h=jo(e.node);if(!h)return null;s=h.level;let d=e.station?h.stations[e.station]:null;a=d?{p:d.p,heading:d.heading,pitch:d.pitch,waypoint:`${e.station}:${h.node}`,eye:d.eye??ie}:{p:h.view,heading:h.heading,pitch:.09,waypoint:`store:${h.node}`}}else s=e.level,a={p:e.p,heading:Number.NaN,pitch:0,waypoint:null};let i=h=>r(s,a.p,Number.isNaN(h)?n?.heading??0:h,a.pitch,a.eye??ie);if(!n){if(e.kind==="plaza"){let p=oo(0,Nt,0,.04);return{legs:[So(t,p,[t.eye[0]*.6,t.eye[1]*.55,t.eye[2]*.6+30],[0,10,62],3)],finish:i(0)}}let h=he(s),d=oo(s,at,0,0),f=[So(t,d,[t.eye[0]*.55,h+ie+14+t.eye[1]*.25,t.eye[2]*.5+42],[0,h+ie+1.5,34],3.2)];if(a.waypoint!=="lobby"){let p=a.waypoint?st(s,at,a.waypoint):Vt(s,at,a.p);p&&f.push(to(s,p,{heading:0,pitch:0},{heading:Number.isNaN(a.heading)?null:a.heading,pitch:a.pitch,eye:a.eye}))}let m=f[f.length-1];return{legs:f,finish:i(Number.isNaN(a.heading)?m?m.at(1).heading:0:a.heading)}}let c=[],l={heading:n.heading,pitch:n.pitch,eye:n.eye};if(n.level!==s){let h=st(n.level,n.p,"lift");if(!h)return null;c.push(to(n.level,h,l,{heading:null,pitch:0}));let d=c[c.length-1]?.at(1).heading??0;c.push(ka(n.level,s,d)),l={heading:Math.PI,pitch:0,eye:ie};let m=qo(s,"lift")?.p??[0,0],p=a.waypoint?st(s,m,a.waypoint):Vt(s,m,a.p);p&&c.push(to(s,p,l,{heading:Number.isNaN(a.heading)?null:a.heading,pitch:a.pitch,eye:a.eye}))}else{let h=a.waypoint?st(s,n.p,a.waypoint):Vt(s,n.p,a.p);if(!h)return null;c.push(to(s,h,l,{heading:Number.isNaN(a.heading)?null:a.heading,pitch:a.pitch,eye:a.eye}))}let u=c[c.length-1];return{legs:c,finish:i(Number.isNaN(a.heading)?u?u.at(1).heading:n.heading:a.heading)}}interrupt(){if(!this.legs[0]?.interruptible)return;let t=this.here();t&&(this.legs=[],this.finish=null,this.mode="walk",this.level=t.level,this.pos=co(t.level,t.p,0,0),this.heading=t.heading,this.pitch=t.pitch,this.eye=t.eye)}update(e,t){let n=t.forward!==0||t.strafe!==0||t.turn!==0||t.lookX!==0||t.lookY!==0||t.zoom!==0;if(this.mode==="travel")if(n&&this.legs[0]?.interruptible)this.interrupt();else{this.legT+=e;let f=this.legs[0];for(;f&&this.legT>=f.duration;)this.legT-=f.duration,this.legs.shift(),f=this.legs[0];if(!f){let m=this.finish;this.finish=null,this.legT=0,m?.()}return!0}if(this.mode==="exterior"){let f=this.orbit,m=f.az-t.lookX*.0052-t.turn*e*.9,p=Pe(f.el+t.lookY*.0042+t.forward*e*.5,Bn[0],Bn[1]),b=Pe(f.dist*Math.exp(t.zoom*.0011-t.strafe*0),Cn[0],Cn[1]);this.idleFor=n?0:this.idleFor+e,!this.reducedMotion&&this.idleFor>5&&(m+=e*.035);let E=m!==f.az||p!==f.el||b!==f.dist;return this.orbit={az:m,el:p,dist:b},E}this.heading+=t.lookX*.0042+t.turn*ja*e,this.pitch=Pe(this.pitch-t.lookY*.0036,-.95,.95),t.zoom!==0&&(this.stepBuffer=Pe(this.stepBuffer-t.zoom*.01,-6,6));let r=this.stepBuffer*Math.min(1,e*6);if(this.stepBuffer-=r,(t.forward!==0||t.strafe!==0||Math.abs(this.stepBuffer)>.01)&&this.eye!==ie&&(this.rising=!0),this.rising){let f=this.eye+(ie-this.eye)*Math.min(1,e*5);this.eye=this.reducedMotion||Math.abs(ie-f)<.01?ie:f,this.eye===ie&&(this.rising=!1)}let a=t.run?Xa:$a,i=Math.sin(this.heading),c=-Math.cos(this.heading),l=[(i*t.forward-c*t.strafe)*a,(c*t.forward+i*t.strafe)*a],u=1-Math.exp(-e*10);this.vel=[Re(this.vel[0],l[0],u),Re(this.vel[1],l[1],u)];let h=this.vel[0]*e+i*r,d=this.vel[1]*e+c*r;return Math.abs(h)+Math.abs(d)>1e-6&&(this.pos=co(this.level,this.pos,h,d)),n||Math.abs(this.vel[0])+Math.abs(this.vel[1])>.01||this.eye!==ie&&this.rising}};function Ka(o,e,t,n){let r=(l,u,h)=>(u[0]-l[0])*(h[1]-l[1])-(u[1]-l[1])*(h[0]-l[0]),s=r(t,n,o),a=r(t,n,e),i=r(o,e,t),c=r(o,e,n);return(s>0&&a<0||s<0&&a>0)&&(i>0&&c<0||i<0&&c>0)}var Lo=.35,Gn=1,qa=80*Math.PI/180,Qa=17,Za=2,no=.18,No=1.2,Ja=12,zn={gallery:1,warm:1.04,chroma:1.16,noir:1.3,cinema:1.3},es={store:"model",board:"body",theater:"theater",window:"front",print:"model",directory:null},Wn=class{canvas;host;opts;gl=null;renderer=null;world=null;live=null;studyHolo=null;studyOn=!0;studyT=0;studyAt=null;studyLine=null;studyMask=-1;studyFlash=0;studyPop=0;studyLive=!0;studyRise=1;studyPreshow=0;studyPreshowFor=null;studyShown=0;lessonRects=new Map;examplesRects=new Map;steleRects=new Map;modelScreens=new Map;rig=new ro;input=null;raf=0;lastFrame=0;lastRender=0;time=0;disposed=!1;failed=!1;visible=!0;dirty=!0;ready=!1;reduced;scale=.9;exposure=me.exposure;ema=16;calm=0;slowSince=0;busyFrames=0;wasBusy=!1;proj=ct();view=ct();viewProj=ct();invViewProj=ct();pointer=null;pointerDirty=!1;hover=null;focus=null;focusAt=0;snapKey="";snapAt=0;highlightLevel=null;fronts;opaqueWalls;holoCache=new Map;boards=new Map;cinemaScreens=new Map;drawnHolos=[];theaterPlaying=!1;dim=0;theaterKey="";uploaded=!1;resizeObserver=null;livePrev=null;postersLoading=new Set;observer=null;onLost=e=>{e.preventDefault(),this.fail("lost")};fixedScale;fixedDpr;constructor(e,t,n){this.canvas=e,this.host=t,this.opts=n;let r=globalThis.__OUTLET_SCALE__;this.fixedScale=typeof r=="number"&&r>0&&r<=1?r:null,this.fixedScale&&(this.scale=this.fixedScale);let s=globalThis.__OUTLET_DPR__;this.fixedDpr=typeof s=="number"&&s>=1&&s<=3?s:null,this.reduced=n.reducedMotion,this.rig.reducedMotion=n.reducedMotion,this.fronts=Lt.map(l=>({node:l.node,level:l.level,centre:[l.door[0],he(l.level)+2.8,l.door[1]],normal:[-l.bay.inward[0],0,-l.bay.inward[1]],u:[l.bay.along[0],0,l.bay.along[1]]}));let a=U,i=_;this.opaqueWalls=[...[-1,1].flatMap(l=>[-1,1].map(u=>({a:[l*i,u*i],b:[l*a,u*a]}))),{a:[i,0],b:[a,0]},{a:[0,-i],b:[0,-a]},{a:[-i,0],b:[-a,0]},...Lt.flatMap(l=>{let u=l.rooms,h=l.bay.inward,d=b=>[b[0]+h[0]*u.stele.thick,b[1]+h[1]*u.stele.thick],f=(b,E)=>[u.partition.door[0]+(b[0]-u.partition.door[0])*E,u.partition.door[1]+(b[1]-u.partition.door[1])*E],m=Math.hypot(u.partition.a[0]-u.partition.door[0],u.partition.a[1]-u.partition.door[1]),p=Math.hypot(u.partition.b[0]-u.partition.door[0],u.partition.b[1]-u.partition.door[1]);return[{a:u.stele.a,b:u.stele.b},{a:d(u.stele.a),b:d(u.stele.b)},{a:u.partition.a,b:f(u.partition.a,u.partition.doorHalf/m)},{a:f(u.partition.b,u.partition.doorHalf/p),b:u.partition.b}]})];let c=e.getContext("webgl2",{antialias:!0,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(!c){queueMicrotask(()=>this.fail("webgl"));return}this.gl=c,e.addEventListener("webglcontextlost",this.onLost);try{this.world=On();for(let u of this.world.screens)u.kind==="board"&&u.node&&this.boards.set(u.node,u.rect),u.kind==="theater"&&u.node&&this.cinemaScreens.set(u.node,u.rect),u.kind==="store"&&u.node&&this.modelScreens.set(u.node,u.rect);let l=os(c);this.renderer=new eo(c,this.world,l),t.dataset.quality=l,!this.fixedScale&&$n(c)&&(this.scale=.5),this.live=new jt(c),this.studyHolo=new kt(c,n.base,()=>{this.uploaded=!0,this.dirty=!0});for(let u of this.world.overlays)u.node&&(u.key.startsWith("lesson:")?this.lessonRects.set(u.node,u.rect):u.key.startsWith("examples:")?this.examplesRects.set(u.node,u.rect):u.key.startsWith("stele:")&&this.steleRects.set(u.node,u.rect))}catch(l){console.warn("XI Outlet could not start its renderer",l),queueMicrotask(()=>this.fail("compile"));return}this.rig.goTo(n.start,!0),this.input=new Xt(t,{click:(l,u)=>this.click(l,u),hover:(l,u)=>{this.pointer=l<0?null:[l,u],this.pointerDirty=!0},back:()=>this.back(),activate:()=>this.activate(),poke:()=>{this.dirty=!0},blocked:()=>document.querySelector("dialog[open]")!==null}),typeof IntersectionObserver<"u"&&(this.observer=new IntersectionObserver(l=>{for(let u of l)this.visible=u.isIntersecting;this.visible&&(this.dirty=!0)}),this.observer.observe(t)),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.dirty=!0}),this.resizeObserver.observe(t)),tr().then(()=>{this.disposed||!this.renderer||(this.renderer.setAtlas(or()),this.dirty=!0)}),this.raf=requestAnimationFrame(this.tick)}goTo(e,t=this.reduced){this.renderer&&(this.rig.goTo(e,t),this.dirty=!0)}activate(){let e=this.focus;e&&(e.kind==="store"&&e.part==="theater"&&this.seatedAt()===e.node?this.opts.onSelect?.(e):e.kind==="store"?this.goTo(Yn(e.node,e.part)):e.kind==="level"?this.goTo({kind:"level",level:e.level}):(e.kind==="lift"||e.kind==="directory")&&this.opts.onSelect?.(e))}back(){if(this.theaterPlaying){this.setTheaterPlaying(!1),this.opts.onTheaterExit?.();return}this.rig.mode!=="exterior"&&this.goTo({kind:"exterior"})}setTheaterPlaying(e){this.theaterPlaying!==e&&(this.theaterPlaying=e,this.dirty=!0)}seatedAt(){if(this.rig.mode!=="walk")return null;let e=this.rig.camera();if(e.level===null)return null;for(let t of ge[e.level]?.stores??[]){let n=t.stations.theater;if(Math.hypot(n.p[0]-e.eye[0],n.p[1]-e.eye[2])<.9)return t.node}return null}setStudy(e){this.studyOn!==e&&(this.studyOn=e,this.dirty=!0)}setStudyLine(e){let t=this.studyLine;e?.node===t?.node&&e?.station===t?.station&&e?.line===t?.line&&e?.claim===t?.claim||(this.studyLine=e,e&&!this.reduced&&(this.studyPop=1),(e&&!this.reduced||e?.claim!==t?.claim||e?.node!==t?.node||e?.station!==t?.station)&&(this.dirty=!0))}studyHere(){if(!this.studyOn||this.rig.mode!=="walk"||this.rig.travelling)return null;let e=this.rig.camera();if(e.level===null)return null;let t=null,n=.9;for(let r of ge[e.level]?.stores??[])for(let s of nt){if(s==="theater"&&this.theaterPlaying)continue;let a=r.stations[s].p,i=Math.hypot(a[0]-e.eye[0],a[1]-e.eye[2]);i<n&&(n=i,t={s:r,station:s})}return t}setReducedMotion(e){this.reduced=e,this.rig.reducedMotion=e,this.dirty=!0}highlight(e){this.highlightLevel=e,this.dirty=!0}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.input?.dispose(),this.observer?.disconnect(),this.resizeObserver?.disconnect(),this.canvas.removeEventListener("webglcontextlost",this.onLost),this.live?.dispose(),this.studyHolo?.dispose(),this.renderer?.dispose(),this.gl?.getExtension("WEBGL_lose_context")?.loseContext(),this.gl=null}fail(e){this.failed||this.disposed||(this.failed=!0,cancelAnimationFrame(this.raf),this.opts.onFail(e))}tick=e=>{if(this.disposed||this.failed)return;if(this.raf=requestAnimationFrame(this.tick),!this.visible||document.hidden){this.lastFrame=0;return}let t=this.lastFrame?Math.min(.5,(e-this.lastFrame)/1e3):1/60;this.lastFrame=e;let n=this.input?.consume();this.theaterPlaying&&n&&(n.forward!==0||n.strafe!==0||n.turn!==0||n.zoom!==0?(this.setTheaterPlaying(!1),this.opts.onTheaterExit?.()):n={...n,lookX:0,lookY:0});let r=n?this.rig.update(t,n):!1;this.reduced||(this.time+=t);let s=this.theaterPlaying?1:0,a=this.dim!==s;a&&(this.dim=this.reduced||Math.abs(s-this.dim)<.02?s:this.dim+(s-this.dim)*Math.min(1,t*5));let i=this.studyHere(),c=(A,M)=>A!==null&&M!==null&&A.s.node===M.s.node&&A.station===M.station;this.studyPreshowFor&&this.seatedAt()!==this.studyPreshowFor&&(this.studyPreshowFor=null),this.studyT===0&&!c(i,this.studyAt)&&(this.studyAt=i,this.studyMask=-1,this.studyPreshow=i?.station==="theater"&&this.studyPreshowFor!==i.s.node?_r:0,i?.station==="theater"&&(this.studyPreshowFor=i.s.node),this.studyRise=i?.station==="theater"?0:1);let l=c(i,this.studyAt),u=l?1:0,h=this.studyT!==u;h&&(this.reduced?this.studyT=u:u>this.studyT?this.studyT=Math.min(1,this.studyT+t/Pr):this.studyT=Math.max(0,this.studyT-t/Mr)),this.studyT===0&&!l&&(this.studyAt=null),this.studyFlash>0&&(this.studyFlash=Math.max(0,this.studyFlash-t*2.2)),this.studyPop>0&&(this.studyPop=this.reduced?0:Math.max(0,this.studyPop-t/Fr));let d=(this.studyFlash>0||this.studyPop>0)&&this.studyT>0,f=this.studyAt,m=f!==null&&this.studyLine?.node===f.s.node&&this.studyLine.station===f.station&&this.studyLine.claim!==null;f?.station==="theater"&&this.studyT>=1&&this.studyPreshow>0&&(this.studyPreshow=Math.max(0,this.studyPreshow-t));let p=f?.station!=="theater"||this.studyPreshow>0||m?1:0,b=this.studyRise!==p;b&&(this.studyRise=this.reduced?p:p>this.studyRise?Math.min(1,this.studyRise+t/.9):Math.max(0,this.studyRise-t/.7));let E=r||this.rig.travelling||this.dirty||this.pointerDirty||a||h||d||b;if(!E&&(this.reduced||this.theaterPlaying||e-this.lastRender<33)){this.wasBusy=!1;return}this.render(e,E)};render(e,t){let n=this.gl,r=this.renderer;if(!n||!r)return;let s=this.lastRender?e-this.lastRender:16;this.lastRender=e;let a=this.uploaded;this.uploaded=!1,this.dirty=!1;let i=this.rig.camera(),c=this.fixedDpr??Math.min(window.devicePixelRatio||1,r.tier==="cinematic"?1.5:2),l=Math.max(1,this.canvas.clientWidth),u=Math.max(1,this.canvas.clientHeight),h=Math.max(1,Math.round(l*c*this.scale)),d=Math.max(1,Math.round(u*c*this.scale));(this.canvas.width!==h||this.canvas.height!==d)&&(this.canvas.width=h,this.canvas.height=d);let f=Math.min(1,Math.max(0,(i.fov-Je)/(_o-Je))),m=l/u,p=i.fov+Math.max(0,Math.min(qa,2*Math.atan(1/m))-Je)*(1-f);br(this.proj,p,m,i.level===null?.5:.08,3200),l>640&&(this.proj[8]=(this.proj[8]??0)-.16*f);let b=vr(i.heading,i.pitch);Dt(this.view,i.eye,mr(i.eye,b)),dt(this.viewProj,this.proj,this.view),Ot(this.invViewProj,this.viewProj);let E=ve(qe(b,[0,1,0])),A=qe(E,b);this.pointerDirty&&(this.pointerDirty=!1,this.hover=this.pointer?this.pickClient(this.pointer[0],this.pointer[1]):null,this.host.style.cursor=this.hover&&this.hover.kind!=="floor"?"pointer":""),e-this.focusAt>140&&(this.focusAt=e,this.focus=this.rig.mode==="exterior"?this.hover:this.pick(0,0),this.focus?.kind==="floor"&&(this.focus=null)),r.setRibbon(this.rig.routeAhead()),this.feedTextures(i.level,i.eye),this.updateLive(i.level,i.eye,b,s);let M=this.holoFrame(i.level,i.eye,b);this.drawnHolos=M.map(x=>x.holo.node);let B=this.rig.mode!=="exterior"&&Math.max(Math.abs(i.eye[0]),Math.abs(i.eye[2]))<U-.3&&i.eye[1]<k?me.exposureInside*this.roomGain(i.level,i.eye):me.exposure;this.exposure=this.reduced?B:this.exposure+(B-this.exposure)*Math.min(1,s/1e3*3),Math.abs(B-this.exposure)<.01?this.exposure=B:this.dirty=!0;let K=this.rig.mode==="exterior"?this.highlightLevel??(this.hover?.kind==="level"?this.hover.level:null):null,te=K!==null?he(K):0;if(r.draw({viewProj:this.viewProj,invViewProj:this.invViewProj,eye:i.eye,right:E,up:A,time:this.time,cabY:this.rig.cabY(),fade:1,holos:M,pxPerMetre:d/(2*Math.tan(p/2)),dim:this.dim,mirrorY:this.rig.mode==="exterior"||i.level===null||i.level===0?-.05:he(i.level),level:this.rig.mode==="exterior"?null:i.level,exposure:this.exposure,highlight:K!==null?{min:[-U-.45,te-ee-.05,-U-.45],max:[U+.45,te+Ae-ee,U+.45],rgba:[.89,.14,.17,.16]}:null,study:this.studyFrame(i.eye)},h,d),t&&this.wasBusy&&!a&&this.adapt(s,e),this.wasBusy=t,this.ready||(this.ready=!0,this.host.dataset.state="live",this.opts.onReady()),this.emit(e,i.level,i.eye,i.heading),this.reportTheater(l,u),this.opts.onFrame){let x=Float32Array.from(this.viewProj);this.opts.onFrame({mode:this.rig.mode,level:i.level,x:i.eye[0],z:i.eye[2],eyeY:i.eye[1],heading:i.heading,pitch:i.pitch,width:l,height:u,project:(v,y,P)=>{let S=(x[3]??0)*v+(x[7]??0)*y+(x[11]??0)*P+(x[15]??0);if(S<.05)return null;let G=((x[0]??0)*v+(x[4]??0)*y+(x[8]??0)*P+(x[12]??0))/S,D=((x[1]??0)*v+(x[5]??0)*y+(x[9]??0)*P+(x[13]??0))/S;return[(G+1)/2*l,(1-D)/2*u,S]},blocked:(v,y)=>{let P=[i.eye[0],i.eye[2]];return this.opaqueWalls.some(S=>Ka(P,[v,y],S.a,S.b))},studyHolo:this.studyShown})}}reportTheater(e,t){let n=this.seatedAt(),r=n?this.cinemaScreens.get(n):void 0,s=null;if(n&&r){let i=(d,f)=>{let m=r.centre[0]+r.u[0]*r.hu*d+r.v[0]*r.hv*f,p=r.centre[1]+r.u[1]*r.hu*d+r.v[1]*r.hv*f,b=r.centre[2]+r.u[2]*r.hu*d+r.v[2]*r.hv*f,E=this.viewProj,A=(E[0]??0)*m+(E[4]??0)*p+(E[8]??0)*b+(E[12]??0),M=(E[1]??0)*m+(E[5]??0)*p+(E[9]??0)*b+(E[13]??0),N=(E[3]??0)*m+(E[7]??0)*p+(E[11]??0)*b+(E[15]??0);return N<.05?null:[(A/N+1)/2*e,(1-M/N)/2*t]},c=i(-1,1),l=i(1,1),u=i(1,-1),h=i(-1,-1);c&&l&&u&&h&&(s={node:n,corners:[c,l,u,h]})}let a=s?`${this.theaterPlaying?"playing":"seated"}:${s.node}:${s.corners.map(i=>`${i[0].toFixed(1)},${i[1].toFixed(1)}`).join(";")}`:"";a!==this.theaterKey&&(this.theaterKey=a,this.host.dataset.theater=s?this.theaterPlaying?"playing":"seated":"",this.opts.onTheaterScreen?.(s))}adapt(e,t){if(!(this.fixedScale||++this.busyFrames<5)){if(this.ema=this.ema*.85+e*.15,this.renderer?.tier==="cinematic"&&this.scale<=.6&&this.ema>40){this.renderer.setTier("basic"),this.host.dataset.quality="basic",this.scale=.85,this.ema=24,this.calm=0;return}this.ema>42&&this.scale>Lo?(this.scale=Math.max(Lo,this.scale*.88),this.calm=0):this.ema<22?++this.calm>50&&this.scale<Gn&&(this.scale=Math.min(Gn,this.scale*1.08),this.calm=0):this.calm=0,this.scale<=Lo&&this.ema>650?this.slowSince?t-this.slowSince>9e3&&this.fail("slow"):this.slowSince=t:this.slowSince=0}}roomGain(e,t){let n=e===null?void 0:ge[e];if(!n)return 1;let r=lo(n,[t[0],t[2]]);return r.kind!=="store"?1:Math.min(Math.abs(t[0]),Math.abs(t[2]))>_?zn.cinema:zn[it(r.store.node).mood]}posterUrl(e,t){let n=Ve.node(e)?.content?.rendering?.asset;return n?`${this.opts.base}visuals/${n}-${t}.webp`:null}feedTextures(e,t){let n=this.renderer;if(!n)return;for(let i of Lt){let c=e===i.level?640:320,l=c===640?2:1,u=`store:${i.node}`;if(n.screenGrade(u)>=l)continue;let h=`${u}@${c}`;if(this.postersLoading.has(h)||this.postersLoading.size>=4)continue;let d=this.posterUrl(i.node,c);d&&(this.postersLoading.add(h),fo(d).then(f=>{if(this.postersLoading.delete(h),!f||this.disposed||!this.renderer)return;this.renderer.setScreenImage(u,f,l,!0);let m=this.rig.camera().level;(m===null||m===i.level)&&(this.dirty=!0,this.uploaded=!0)}))}if(e===null)return;let r=ge[e];if(!r)return;let s=`directory:${e}`;if(n.screenGrade(s)<3)n.setScreenImage(s,rr(e),3,!0),this.dirty=!0,this.uploaded=!0;else{let i=r.stores.slice().sort((c,l)=>Math.hypot(c.display[0]-t[0],c.display[1]-t[2])-Math.hypot(l.display[0]-t[0],l.display[1]-t[2]));e:for(let c of i){let l=this.nearStore(c,t);for(let[u,h,d,f]of this.storeCanvases(c))if(!(f&&!l)&&!(n.screenGrade(u)>=3)){n.setScreenImage(u,h(),3,!0,d),this.dirty=!0,this.uploaded=!0;break e}}}for(let i of r.stores){if(!this.nearStore(i,t))continue;let c=`print:${i.node}`;if(n.screenGrade(c)>=3||this.postersLoading.has(c)||this.postersLoading.size>=4)continue;let l=this.posterUrl(i.node,640);l&&(this.postersLoading.add(c),fo(l).then(u=>{this.postersLoading.delete(c),!(!u||this.disposed||!this.renderer)&&(this.renderer.setScreenImage(c,u,3,!0),this.dirty=!0,this.uploaded=!0)}))}let a=new Set([s]);for(let i of r.stores){for(let[c]of this.storeCanvases(i))a.add(c);a.add(`print:${i.node}`),a.add(`holo:${i.node}`)}n.evict(i=>a.has(i))}nearStore(e,t){return Math.hypot(e.door[0]-t[0],e.door[1]-t[2])<Ja}storeCanvases(e){let t=e.node;return[[`banner:${t}`,()=>dr(t),!0,!1],[`stele:${t}`,()=>ir(t),!0,!0],[`board:${t}`,()=>sr(t,this.boardSide(e)>0),!1,!0],[`lesson:${t}`,()=>lr(t),!0,!0],[`examples:${t}`,()=>ur(t),!0,!0],[`caption:${t}`,()=>cr(t),!0,!0],[`theater:${t}`,()=>fr(t),!1,!0],[`medallion:${t}`,()=>hr(t),!0,!0]]}boardSide(e){let t=this.boards.get(e.node);return t?(e.holo.at[0]-t.centre[0])*t.u[0]+(e.holo.at[1]-t.centre[2])*t.u[2]>=0?1:-1:1}studyFrame(e){let t=this.studyAt,n=this.studyT,r=this.studyHolo;if(this.studyShown=0,!t||n<=0||!r)return null;let{s,station:a}=t,i=g=>{let R=Math.min(1,Math.max(0,g));return R*R*(3-2*R)},c=Ve.node(s.node)?.tier??"T01",l=zt(Co(Xe[c])),u=he(s.level),h=Lr(s,a),d=this.studyLine?.node===s.node&&this.studyLine.station===a?this.studyLine:null,f=d?.claim??null,m=h?Tr(s.node,f)?.parts??[]:[],p=Ht(m);h&&p!==this.studyMask&&(this.studyMask>=0&&!this.reduced&&(this.studyFlash=1),this.studyMask=p);let b=d?this.studyPop:0,E=1-b,A=b>0?i(E/.12)*(1-i((E-.3)/.7)):0,M=this.viewProj,N=[0,0,0,0],B=g=>{let R=1/0,V=1/0,L=-1/0,I=-1/0;for(let F of g){let O=(M[3]??0)*F[0]+(M[7]??0)*F[1]+(M[11]??0)*F[2]+(M[15]??0);if(O<.05)continue;let z=((M[0]??0)*F[0]+(M[4]??0)*F[1]+(M[8]??0)*F[2]+(M[12]??0))/O,Z=((M[1]??0)*F[0]+(M[5]??0)*F[1]+(M[9]??0)*F[2]+(M[13]??0))/O;R=Math.min(R,z),L=Math.max(L,z),V=Math.min(V,Z),I=Math.max(I,Z)}return L>R?[(R+L)/2,(V+I)/2,(L-R)/2,(I-V)/2]:N},K=g=>[[-1,-1],[1,-1],[1,1],[-1,1]].map(([R=0,V=0])=>[g.centre[0]+g.u[0]*g.hu*R+g.v[0]*g.hv*V,g.centre[1]+g.u[1]*g.hu*R+g.v[1]*g.hv*V,g.centre[2]+g.u[2]*g.hu*R+g.v[2]*g.hv*V]),te=g=>g?B(K(g)):N,x=(g,R,V,L)=>{let I=[];for(let[F,O]of[[-R,-R],[R,-R],[R,R],[-R,R]])I.push([g[0]+F,V,g[1]+O],[g[0]+F,L,g[1]+O]);return B(I)},v=a==="lesson"?this.lessonRects.get(s.node):a==="examples"?this.examplesRects.get(s.node):void 0,y=null,P=v?Ir(s.node,f,a):null;if(v&&P){let g=Be(v),R=P.u0+P.u1-1,V=1-(P.v0+P.v1);y={centre:[v.centre[0]+v.u[0]*v.hu*R+v.v[0]*v.hv*V+g[0]*.01,v.centre[1]+v.v[1]*v.hv*V,v.centre[2]+v.u[2]*v.hu*R+v.v[2]*v.hv*V+g[2]*.01],u:v.u,v:v.v,hu:(P.u1-P.u0)*v.hu,hv:(P.v1-P.v0)*v.hv}}let S=N;if(h){let g=e[0]-h.at[0],R=e[2]-h.at[1],V=Math.hypot(g,R)||1,L=h.half*.62,I=[h.at[0],u+h.holoY,h.at[1]];S=B([-1,1].flatMap(F=>[-1,1].map(O=>[I[0]+R/V*L*F,I[1]+L*O,I[2]-g/V*L*F])))}let G={lesson:{spots:[y?B(K(y)):N,te(v),S],w:[1,.62,0]},examples:{spots:[y?B(K(y)):N,te(v),S],w:[1,.62,0]},model:{spots:[te(this.steleRects.get(s.node)),te(this.modelScreens.get(s.node)),S],w:[.8,1,0]},body:{spots:[te(this.boards.get(s.node)),x(s.holo.at,.62,u,u+no+2.35*No*.98),N],w:[1,1,0]},theater:{spots:[te(this.cinemaScreens.get(s.node)),N,S],w:[1,0,0]}},D=null,$=null;if(h){let g=h.kind==="table",R=i((n-.05)/.5),V=g?i((n-.1)/.65):R<.5?R*.44:.74+(R-.5)*.52,L=this.studyRise,I=i(g?(n-.7)/.3:(n-.5)/.4)*i(L/.8),F=Math.cos(h.facing),O=Math.sin(h.facing),z=u+h.holoY-h.half,Z=g?1:i((n-.36)/.26)*i(L/.5),q=Math.max(.01,z-(u+po)+.04);D={kind:h.kind,frame:new Float32Array([F,0,-O,0,0,1,0,0,O,0,F,0,h.at[0],u,h.at[1],1]),assemble:V,beam:g?new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,h.at[0],u+Ar.top,h.at[1],1]):new Float32Array([1,0,0,0,0,q*Z,0,0,0,0,1,0,h.at[0],u+po,h.at[1],1]),beamHeight:g?Gt:1,beamLight:g?i(n/.45):Z*(1+A*.9),pop:A};let Q=[h.at[0],u+h.holoY,h.at[1]],re=e[0]-Q[0],oe=e[2]-Q[2],pe=Math.hypot(re,oe)||1,et=[oe/pe,0,-re/pe],Ge=Math.atan2(re,-oe)-h.facing,j=-Math.atan2(Math.sin(Ge),Math.cos(Ge))*180/Math.PI;this.reduced||this.ema>46?this.studyLive=!1:this.ema<34&&(this.studyLive=!0);let le=null;I>0&&this.studyLive&&r.prepare(s.node)&&r.render(s.node,{az:j,time:this.time,parts:m})&&r.texture?le={tex:r.texture,rect:[0,0,1,1]}:le=r.still(s.node,m),this.studyShown=I,le&&($={centre:Q,right:et,up:[0,1,0],half:h.half,tex:le.tex,rect:le.rect,reveal:I,flash:this.studyFlash,glow:m.length>0?A*.3:A,scan:b>0?-.1+E*1.25:-1})}let W=G[a];return{lights:i(n/.45)*Sr[a].lights,spots:W.spots,spotW:W.w,deep:$?$.reveal*.74:0,pod:D,holo:$,claim:y,neonA:l.a,neonB:l.b,motion:!this.reduced}}holoOf(e){return this.holoCache.has(e)||this.holoCache.set(e,zr(e)),this.holoCache.get(e)??null}holoFrame(e,t,n){if(e===null||this.rig.mode==="exterior")return[];let r=Math.hypot(n[0],n[2])||1,s=[];for(let i of ge[e]?.stores??[]){let c=i.holo.at[0]-t[0],l=i.holo.at[1]-t[2],u=Math.hypot(c,l);if(u>Qa||u>1.6&&(c*n[0]+l*n[2])/(u*r)<.15)continue;let h={a:[t[0],t[2]],b:i.holo.at};this.opaqueWalls.every(d=>uo(h,d)>.05)&&s.push({s:i,d:u})}s.sort((i,c)=>i.d-c.d);let a=[];for(let{s:i}of s.slice(0,Za).reverse()){let c=this.holoDraw(i);c&&a.push(c)}return a}holoDraw(e){let t=this.holoOf(e.node);if(!t)return null;let n=this.time,r=Math.PI-e.holo.facing+(this.reduced?0:Math.sin(n*.35)*.32),s=No,a=Math.cos(r)*s,i=Math.sin(r)*s,[c,l]=e.holo.at,u=he(e.level)+no,h=new Float32Array([a,0,-i,0,0,s,0,0,i,0,a,0,c,u,l,1]),d=A=>[a*A[0]+i*A[2]+c,A[1]*s+u,-i*A[0]+a*A[2]+l],f=new Float32Array(t.targets.length*4);t.targets.forEach((A,M)=>{let N=d(A.at);f.set([N[0],N[1],N[2],A.r*s],M*4)});let m=[],p=this.boards.get(e.node);if(p&&t.rows.length>0){let A={centre:p.centre,u:p.u,n:Be(p),hu:p.hu,hv:p.hv};for(let M of Wr(t,d,A,this.boardSide(e),ar(t.rows.length),30/nr.w*p.hu*2)){let[N,B,K,te]=M.points;m.push(...N,...B,...B,...K,...K,...te)}}if(t.whole)for(let[N,B,K,te]of[[-.4,.02,1,1],[.4,.02,-1,1],[-.4,1.92,1,-1],[.4,1.92,-1,-1]]){let x=d([N,B,.14]);m.push(...d([N+K*.15,B,.14]),...x,...x,...d([N,B+te*.15,.14]))}let b=[];for(let[A,M,N]of[[.96,.5,.25],[1.52,.42,-.4]]){let K=this.reduced?0:n*N;for(let te=0;te<40;te+=2){let x=K+te/40*Math.PI*2,v=K+(te+1)/40*Math.PI*2;b.push(...d([Math.sin(x)*M,A,Math.cos(x)*M]),...d([Math.sin(v)*M,A,Math.cos(v)*M]))}}let E=this.studyAt?.station==="body"&&this.studyAt.s.node===e.node&&this.studyLine?.node===e.node&&this.studyLine.station==="body"&&this.studyT>0?this.studyPop:0;return{holo:t,model:h,rings:new Float32Array(b),leaders:new Float32Array(m),targets:f,scanY:this.reduced?-10:E>0?.02+(1-E)*1.95:.05+(1-Math.abs(n*.2%2-1))*1.8,pulse:this.reduced?.4:Math.max(.5+.5*Math.sin(n*2.2),E)}}updateLive(e,t,n,r){let s=this.live,a=this.renderer;if(!s||!a)return;let i=null;if(!this.reduced&&e!==null&&(this.studyT===0||this.studyAt?.station==="model")&&this.ema<(this.opts.liveBudget??60)){let u=18;for(let h of ge[e]?.stores??[]){let d=h.display[0]-t[0],f=h.display[1]-t[2],m=Math.hypot(d,f);m<u&&d*n[0]+f*n[2]>-2&&(u=m,i=h.node)}}let c=i?`store:${i}`:null;if(this.livePrev&&this.livePrev.key!==c){let u=this.livePrev;this.livePrev=null,a.setScreenTexture(u.key,null,u.saved),s.showing=null,this.dirty=!0}if(!i||!c||!s.prepare(i))return;s.render(i,this.time,this.ema<24?0:66)&&this.livePrev?.key!==c&&(this.livePrev={key:c,saved:a.setScreenTexture(c,s.texture)})}pickClient(e,t){let n=this.canvas.getBoundingClientRect();return n.width===0||n.height===0?null:this.pick((e-n.left)/n.width*2-1,1-(t-n.top)/n.height*2)}pick(e,t){let{origin:n,dir:r}=gr(this.invViewProj,e,t),s=this.rig.camera();if(this.rig.mode==="exterior"||s.level===null){let f=null,m=1/0;for(let p of ge){let b=xr(n,r,[-U-.6,p.y-ee,-U-.6],[U+.6,p.y+Ae-ee,U+.6]);b!==null&&b<m&&(m=b,f={kind:"level",level:p.index})}if(!f&&r[1]<0){let p=-n[1]/r[1];Math.hypot(n[0]+r[0]*p,n[2]+r[2]*p)<52&&(f={kind:"plaza"})}return f}let a=s.level,i=he(a),c=null,l=1/0,u=[s.eye[0],s.eye[2]],h=f=>{let m=[n[0]+r[0]*f,n[2]+r[2]*f],p={a:u,b:[m[0]-(m[0]-u[0])*.02,m[1]-(m[1]-u[1])*.02]};return this.opaqueWalls.every(b=>uo(p,b)>.01)},d=(f,m)=>{f!==null&&f<l&&f<70&&h(f)&&(l=f,c=m)};for(let f of this.world?.screens??[]){if(f.level!==a)continue;let m=Ut(n,r,f.rect.centre,Be(f.rect),f.rect.u,f.rect.v,f.rect.hu,f.rect.hv),p=es[f.kind];f.kind==="directory"?d(m,{kind:"directory",level:a,distance:m??0}):f.node&&p&&d(m,{kind:"store",node:f.node,part:p,distance:m??0})}for(let f of this.world?.overlays??[]){if(f.level!==a||!f.station)continue;let m=Ut(n,r,f.rect.centre,Be(f.rect),f.rect.u,f.rect.v,f.rect.hu,f.rect.hv);d(m,{kind:"store",node:f.node,part:f.station,distance:m??0})}for(let f of ge[a]?.stores??[]){let m=ts(n,r,f.holo.at,.45,i+no,i+no+1.82*No);m!==null&&d(m,{kind:"store",node:f.node,part:"body",distance:m})}for(let f of this.fronts)f.level===a&&d(Ut(n,r,f.centre,f.normal,f.u,[0,1,0],_/2,2.8),{kind:"store",node:f.node,part:"front",distance:0});{let f=r[0]*r[0]+r[2]*r[2],m=2*(n[0]*r[0]+n[2]*r[2]),p=n[0]*n[0]+n[2]*n[2]-de*de,b=m*m-4*f*p;if(f>1e-9&&b>=0){let E=(-m-Math.sqrt(b))/(2*f),A=n[1]+r[1]*E;E>0&&A>i&&A<i+Ae&&d(E,{kind:"lift",distance:E})}}if(c){let f=c;return f.kind==="store"&&f.part==="front"?{...f,distance:l}:f}if(r[1]<-.02){let f=(i-n[1])/r[1],m=[n[0]+r[0]*f,n[2]+r[2]*f];if(f<40&&Qo(a,m))return{kind:"floor",level:a,p:m,distance:f}}return null}click(e,t){let n=this.pickClient(e,t);if(n)switch(n.kind){case"level":this.goTo({kind:"level",level:n.level});break;case"plaza":this.goTo({kind:"plaza"});break;case"store":this.goTo(Yn(n.node,n.part));break;case"floor":this.goTo({kind:"point",level:n.level,p:n.p});break;case"lift":case"directory":this.opts.onSelect?.(n);break}}emit(e,t,n,r){let s=t!==null?ge[t]:void 0,a=[n[0],n[2]],i=s&&this.rig.mode!=="exterior"?lo(s,a):null,c=null;if(i?.kind==="store"&&this.rig.mode==="walk")for(let f of nt){let m=i.store.stations[f].p;Math.hypot(m[0]-a[0],m[1]-a[1])<.9&&(c=f)}let l={mode:this.rig.mode,level:this.rig.mode==="exterior"?null:t,region:i?.kind??null,store:i?.kind==="store"?i.store.node:null,focus:this.focus,x:a[0],z:a[1],heading:r,destination:this.rig.destination,live:this.live?.showing??null,station:c,holos:this.drawnHolos,study:this.studyT>.5&&this.studyAt?this.studyAt.s.node:null,studyStop:this.studyT>.5&&this.studyAt?this.studyAt.station:null},u=l.focus,h=JSON.stringify([l.mode,l.level,l.region,l.store,u?[u.kind,"node"in u?u.node:"","level"in u?u.level:"","part"in u?u.part:""]:null,l.destination,l.live,l.station,l.holos,l.study,l.studyStop]);if(h===this.snapKey&&e-this.snapAt<120)return;this.snapKey=h,this.snapAt=e;let d=this.host.dataset;d.mode=l.mode,d.level=l.level===null?"":String(l.level+1),d.store=l.store??"",d.live=l.live??"",d.region=l.region??"",d.station=l.station??"",d.holo=l.holos.join(","),d.study=l.study??"",d.studyStop=l.studyStop??"",d.frame=`${Math.round(this.ema)}ms@${this.scale.toFixed(2)}`,d.pos=`${l.x.toFixed(1)},${l.z.toFixed(1)}`,this.opts.onSnapshot(l)}};function Yn(o,e){return e==="front"?{kind:"store",node:o}:{kind:"store",node:o,station:e}}function ts(o,e,t,n,r,s){let a=o[0]-t[0],i=o[2]-t[1],c=e[0]*e[0]+e[2]*e[2];if(c<1e-9)return null;let l=2*(a*e[0]+i*e[2]),u=a*a+i*i-n*n,h=l*l-4*c*u;if(h<0)return null;let d=(-l-Math.sqrt(h))/(2*c);if(d<=0)return null;let f=o[1]+e[1]*d;return f>=r&&f<=s?d:null}function os(o){let e=o.getExtension("EXT_color_buffer_float")!==null,t=globalThis.__OUTLET_QUALITY__;return t==="basic"?"basic":t==="cinematic"?e?"cinematic":"basic":e?$n(o)?"basic":"cinematic":"basic"}function $n(o){let e=String(o.getParameter(o.RENDERER));if(/^webkit webgl$/i.test(e)){let t=o.getExtension("WEBGL_debug_renderer_info");t&&(e=String(o.getParameter(t.UNMASKED_RENDERER_WEBGL)))}return/swiftshader|llvmpipe|softpipe|software|basic render/i.test(e)}export{zt as a,kt as b,me as c,eo as d,Wn as e,os as f,$n as g};
