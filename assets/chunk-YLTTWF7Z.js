import{a as go}from"./chunk-IVZFYQIE.js";import{$ as Z,B as Ge,F as ut,G as So,I as Fo,J as Mo,L as k,M as L,N as P,O as K,P as Qe,Q as Te,R as $,S as Q,T as Ze,U as be,V as We,W as ft,X as ne,Y as Fe,Z as dt,_ as Ee,a as kt,aa as Nt,b as lo,ba as ze,c as co,da as Me,ea as Ao,f as uo,fa as Je,g as fo,ga as ht,ha as Po,ia as wo,ja as Vt,ka as Ot,l as ho,la as Lo,ma as et,na as mt,oa as _o,p as Y,pa as Io,v as xo,x as To,y as Eo,z as Ro}from"./chunk-7PQBXVSE.js";import{b as mo,c as po,d as vo,e as bo,h as yo}from"./chunk-LLCKFUDP.js";import{b as X}from"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var Oe=Math.PI/180;function Ct(i,t){return[i[0]+t[0],i[1]+t[1],i[2]+t[2]]}function Re(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function sr(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function Ve(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function de(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function No(i){return Math.hypot(i[0],i[1],i[2])}function j(i){let t=No(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function ye(i,t,o){return i+(t-i)*o}function ge(i,t,o){return Math.min(o,Math.max(t,i))}function tt(i,t){let o=(t-i)%(Math.PI*2);return o>Math.PI&&(o-=Math.PI*2),o<-Math.PI&&(o+=Math.PI*2),o}function ot(i){let t=ge(i,0,1);return t*t*t*(t*(t*6-15)+10)}function Vo(i,t=0){let o=Math.cos(t);return[Math.sin(i)*o,Math.sin(t),-Math.cos(i)*o]}function nt(){let i=new Float32Array(16);return i[0]=i[5]=i[10]=i[15]=1,i}function Oo(i,t,o,n,e){let s=1/Math.tan(t/2);return i.fill(0),i[0]=s/o,i[5]=s,i[10]=(e+n)/(n-e),i[11]=-1,i[14]=2*e*n/(n-e),i}function Co(i,t,o,n,e,s,r){return i.fill(0),i[0]=2/(o-t),i[5]=2/(e-n),i[10]=-2/(r-s),i[12]=-(o+t)/(o-t),i[13]=-(e+n)/(e-n),i[14]=-(r+s)/(r-s),i[15]=1,i}function pt(i,t,o,n=[0,1,0]){let e=j(Re(t,o)),s=de(n,e);No(s)<1e-6&&(s=de([0,0,1],e)),s=j(s);let r=de(e,s);return i[0]=s[0],i[1]=r[0],i[2]=e[0],i[3]=0,i[4]=s[1],i[5]=r[1],i[6]=e[1],i[7]=0,i[8]=s[2],i[9]=r[2],i[10]=e[2],i[11]=0,i[12]=-Ve(s,t),i[13]=-Ve(r,t),i[14]=-Ve(e,t),i[15]=1,i}function rt(i,t,o){let n=new Float32Array(16);for(let e=0;e<4;e++)for(let s=0;s<4;s++){let r=0;for(let a=0;a<4;a++)r+=(t[a*4+s]??0)*(o[e*4+a]??0);n[e*4+s]=r}return i.set(n),i}function vt(i,t){let o=y=>t[y]??0,n=o(0)*o(5)-o(1)*o(4),e=o(0)*o(6)-o(2)*o(4),s=o(0)*o(7)-o(3)*o(4),r=o(1)*o(6)-o(2)*o(5),a=o(1)*o(7)-o(3)*o(5),l=o(2)*o(7)-o(3)*o(6),c=o(8)*o(13)-o(9)*o(12),h=o(8)*o(14)-o(10)*o(12),d=o(8)*o(15)-o(11)*o(12),u=o(9)*o(14)-o(10)*o(13),f=o(9)*o(15)-o(11)*o(13),p=o(10)*o(15)-o(11)*o(14),v=n*p-e*f+s*u+r*d-a*h+l*c;return v?(v=1/v,i[0]=(o(5)*p-o(6)*f+o(7)*u)*v,i[1]=(o(2)*f-o(1)*p-o(3)*u)*v,i[2]=(o(13)*l-o(14)*a+o(15)*r)*v,i[3]=(o(10)*a-o(9)*l-o(11)*r)*v,i[4]=(o(6)*d-o(4)*p-o(7)*h)*v,i[5]=(o(0)*p-o(2)*d+o(3)*h)*v,i[6]=(o(14)*s-o(12)*l-o(15)*e)*v,i[7]=(o(8)*l-o(10)*s+o(11)*e)*v,i[8]=(o(4)*f-o(5)*d+o(7)*c)*v,i[9]=(o(1)*d-o(0)*f-o(3)*c)*v,i[10]=(o(12)*a-o(13)*s+o(15)*n)*v,i[11]=(o(9)*s-o(8)*a-o(11)*n)*v,i[12]=(o(5)*h-o(4)*u-o(6)*c)*v,i[13]=(o(0)*u-o(1)*h+o(2)*c)*v,i[14]=(o(13)*e-o(12)*r-o(14)*n)*v,i[15]=(o(8)*r-o(9)*e+o(10)*n)*v,i):null}function ko(i,t){let o=(i[0]??0)*t[0]+(i[4]??0)*t[1]+(i[8]??0)*t[2]+(i[12]??0),n=(i[1]??0)*t[0]+(i[5]??0)*t[1]+(i[9]??0)*t[2]+(i[13]??0),e=(i[2]??0)*t[0]+(i[6]??0)*t[1]+(i[10]??0)*t[2]+(i[14]??0),s=(i[3]??0)*t[0]+(i[7]??0)*t[1]+(i[11]??0)*t[2]+(i[15]??0);return[o/s,n/s,e/s,s]}function Do(i,t,o){let n=ko(i,[t,o,-1]),e=ko(i,[t,o,1]),s=[n[0],n[1],n[2]];return{origin:s,dir:j(Re([e[0],e[1],e[2]],s))}}function Bo(i,t,o,n){let e=-1/0,s=1/0;for(let r=0;r<3;r++){let a=i[r]??0,l=t[r]??0,c=o[r]??0,h=n[r]??0;if(Math.abs(l)<1e-12){if(a<c||a>h)return null;continue}let d=(c-a)/l,u=(h-a)/l;if(d>u&&([d,u]=[u,d]),e=Math.max(e,d),s=Math.min(s,u),e>s)return null}return s<0?null:e>=0?e:s}function Dt(i,t,o,n,e,s,r,a){let l=Ve(t,n);if(Math.abs(l)<1e-9)return null;let c=Ve(Re(o,i),n)/l;if(c<0)return null;let h=Ct(i,sr(t,c)),d=Re(h,o);return Math.abs(Ve(d,e))>r||Math.abs(Ve(d,s))>a?null:c}var bt=13;function D(i){let t=parseInt(i.replace("#",""),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var Xe=class{data=[];get vertexCount(){return this.data.length/bt}toArray(){return new Float32Array(this.data)}vertex(t,o,n,e){this.data.push(t[0],t[1],t[2],o[0],o[1],o[2],n[0],n[1],n[2],e.gloss,e.emit??0,e.ao??1,e.pattern??0)}tri(t,o,n,e,s,r){let a=r??j(de(Re(o,t),Re(n,t)));this.vertex(t,a,e,s),this.vertex(o,a,e,s),this.vertex(n,a,e,s)}quad(t,o,n,e,s,r,a){let l=a??j(de(Re(o,t),Re(e,t)));this.tri(t,o,n,s,r,l),this.tri(t,n,e,s,r,l)}box(t,o,n,e,s={}){let[r,a,l]=t,[c,h,d]=o;s.top!==!1&&this.quad([r,h,l],[c,h,l],[c,h,d],[r,h,d],n,e,[0,1,0]),s.bottom!==!1&&this.quad([r,a,d],[c,a,d],[c,a,l],[r,a,l],n,e,[0,-1,0]),this.quad([r,a,d],[r,h,d],[c,h,d],[c,a,d],n,e,[0,0,1]),this.quad([c,a,l],[c,h,l],[r,h,l],[r,a,l],n,e,[0,0,-1]),this.quad([c,a,d],[c,h,d],[c,h,l],[c,a,l],n,e,[1,0,0]),this.quad([r,a,l],[r,h,l],[r,h,d],[r,a,d],n,e,[-1,0,0])}wall(t,o,n,e,s,r,a){let l=Math.hypot(o[0]-t[0],o[1]-t[1]);if(l<1e-6)return;let c=(o[0]-t[0])/l,h=(o[1]-t[1])/l,d=-h*(s/2),u=c*(s/2),f=(y,b,m)=>[y[0]+d*b,m,y[1]+u*b],p=[-h,0,c],v=[h,0,-c];this.quad(f(t,1,n),f(t,1,e),f(o,1,e),f(o,1,n),r,a,p),this.quad(f(o,-1,n),f(o,-1,e),f(t,-1,e),f(t,-1,n),r,a,v),this.quad(f(t,-1,e),f(o,-1,e),f(o,1,e),f(t,1,e),r,a,[0,1,0]),this.quad(f(t,1,n),f(o,1,n),f(o,-1,n),f(t,-1,n),r,a,[0,-1,0]),this.quad(f(t,-1,n),f(t,-1,e),f(t,1,e),f(t,1,n),r,a,[-c,0,-h]),this.quad(f(o,1,n),f(o,1,e),f(o,-1,e),f(o,-1,n),r,a,[c,0,h])}pane(t,o,n,e,s,r){let a=Math.hypot(o[0]-t[0],o[1]-t[1]);if(a<1e-6)return;let l=[-(o[1]-t[1])/a,0,(o[0]-t[0])/a];this.quad([t[0],n,t[1]],[t[0],e,t[1]],[o[0],e,o[1]],[o[0],n,o[1]],s,r,l)}prism(t,o,n,e,s,r={}){let a=t.length,l=c=>t[(c%a+a)%a]??[0,0];if(r.top!==!1)for(let c=1;c<a-1;c++)this.tri([l(0)[0],n,l(0)[1]],[l(c)[0],n,l(c)[1]],[l(c+1)[0],n,l(c+1)[1]],e,s,[0,1,0]);if(r.bottom!==!1)for(let c=1;c<a-1;c++)this.tri([l(0)[0],o,l(0)[1]],[l(c+1)[0],o,l(c+1)[1]],[l(c)[0],o,l(c)[1]],e,s,[0,-1,0]);if(r.sides!==!1){let c=t.reduce((d,u)=>d+u[0],0)/a,h=t.reduce((d,u)=>d+u[1],0)/a;for(let d=0;d<a;d++){let u=l(d),f=l(d+1),p=j([f[1]-u[1],0,-(f[0]-u[0])]),v=(u[0]+f[0])/2-c,y=(u[1]+f[1])/2-h;p[0]*v+p[2]*y<0&&(p=[-p[0],0,-p[2]]),this.quad([u[0],o,u[1]],[u[0],n,u[1]],[f[0],n,f[1]],[f[0],o,f[1]],e,s,p)}}}cylinder(t,o,n,e,s,r,a,l,c={}){let[h,d]=c.arc??[0,Math.PI*2],u=(p,v)=>[t+n*Math.sin(p),v,o+n*Math.cos(p)],f=p=>c.inward?[-Math.sin(p),0,-Math.cos(p)]:[Math.sin(p),0,Math.cos(p)];for(let p=0;p<r;p++){let v=h+(d-h)*p/r,y=h+(d-h)*(p+1)/r,b=u(v,e),m=u(v,s),g=u(y,s),R=u(y,e);this.vertex(b,f(v),a,l),this.vertex(m,f(v),a,l),this.vertex(g,f(y),a,l),this.vertex(b,f(v),a,l),this.vertex(g,f(y),a,l),this.vertex(R,f(y),a,l),c.caps!==!1&&!c.arc&&(this.tri([t,s,o],u(y,s),u(v,s),a,l,[0,1,0]),this.tri([t,e,o],u(v,e),u(y,e),a,l,[0,-1,0]))}}annulus(t,o,n,e,s,r,a,l){for(let c=0;c<r;c++){let h=c/r*Math.PI*2,d=(c+1)/r*Math.PI*2,u=(f,p)=>[t+f*Math.sin(p),s,o+f*Math.cos(p)];this.quad(u(n,h),u(e,h),u(e,d),u(n,d),a,l,[0,1,0])}}sphere(t,o,n,e,s,r=1){let a=Math.max(4,Math.round(n/2)),l=(c,h)=>{let d=c/a*Math.PI,u=h/n*Math.PI*2,f=[Math.sin(d)*Math.sin(u),Math.cos(d),Math.sin(d)*Math.cos(u)];return[[t[0]+f[0]*o,t[1]+f[1]*o*r,t[2]+f[2]*o],j([f[0],f[1]/r,f[2]])]};for(let c=0;c<a;c++)for(let h=0;h<n;h++){let[d,u]=l(c,h),[f,p]=l(c+1,h),[v,y]=l(c+1,h+1),[b,m]=l(c,h+1);this.vertex(d,u,e,s),this.vertex(f,p,e,s),this.vertex(v,y,e,s),this.vertex(d,u,e,s),this.vertex(v,y,e,s),this.vertex(b,m,e,s)}}pill(t,o,n,e,s,r,a,l){let c=Math.hypot(o[0]-t[0],o[1]-t[1]),h=(o[0]-t[0])/c,d=(o[1]-t[1])/c,u=Math.atan2(h,d);this.cylinder(t[0],t[1],n,e,s,r,a,l,{arc:[u+Math.PI/2,u+Math.PI*3/2]}),this.cylinder(o[0],o[1],n,e,s,r,a,l,{arc:[u-Math.PI/2,u+Math.PI/2]});let f=-d*n,p=h*n,v=[[t[0]+f,t[1]+p],[o[0]+f,o[1]+p],[o[0]-f,o[1]-p],[t[0]-f,t[1]-p]];this.prism(v,e,s,a,l,{bottom:!1});for(let[y,b]of[[t,u+Math.PI/2],[o,u-Math.PI/2]])for(let m=0;m<r;m++){let g=b+Math.PI*m/r,R=b+Math.PI*(m+1)/r;this.tri([y[0],s,y[1]],[y[0]+n*Math.sin(R),s,y[1]+n*Math.cos(R)],[y[0]+n*Math.sin(g),s,y[1]+n*Math.cos(g)],a,l,[0,1,0])}}};function J(i,t,o,n,e,s=0){let r=[Math.sin(o),0,-Math.cos(o)],a=[-Math.cos(o),0,-Math.sin(o)];return{centre:[i[0]+r[0]*s,t,i[1]+r[2]*s],u:a,v:[0,1,0],hu:n/2,hv:e/2}}function Bt(i,t,o,n,e){let s=[Math.sin(o),0,-Math.cos(o)],r=[Math.cos(o),0,Math.sin(o)];return{centre:[i[0],t,i[1]],u:r,v:s,hu:n/2,hv:e/2}}function Ut(i){return j(de(i.u,i.v))}function yt(i,t=!1){let o=(s,r)=>[i.centre[0]+i.u[0]*i.hu*s+i.v[0]*i.hv*r,i.centre[1]+i.u[1]*i.hu*s+i.v[1]*i.hv*r,i.centre[2]+i.u[2]*i.hu*s+i.v[2]*i.hv*r],n=(s,r)=>[t?(1-s)/2:(s+1)/2,(1-r)/2],e=[];for(let[s,r]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])e.push(...o(s,r),...n(s,r));return new Float32Array(e)}var re=1.78/489,ar=510;function ie(i,t,o=0){return[(i-120)*re,(ar-t)*re,o]}var Tt=6,C=(i,t,o,n,e=0)=>({x:i,y:t,w:o,d:n,z:e}),$o=[C(120,108,16,.052),C(120,118,34,.08),C(120,128,48,.1),C(120,144,49,.113),C(120,165,45,.118),C(120,186,43,.115),C(120,206,40,.108),C(120,228,37,.1),C(120,250,36.5,.1),C(120,270,40,.104),C(120,290,45,.11),C(120,306,45,.106),C(120,318,37,.09),C(120,326,18,.05)],lr=[C(120,84,11,.048),C(120,112,12.5,.052)],Ht=[C(70,132,13,.05),C(66,152,12,.045),C(63,180,10.5,.04),C(60,206,9.5,.036),C(57,228,8.6,.032),C(54,252,8.6,.032),C(51,276,7.8,.029),C(48,296,6.8,.025),C(46,308,6.2,.022)],Gt=[C(98,296,22,.085),C(96,326,20,.08),C(95,356,17,.07),C(95,384,13.5,.056),C(95,402,12.5,.05),C(96,426,12.5,.052),C(96,450,11,.046),C(97,470,9,.036),C(98,488,8,.03)];function cr(i,t){let o=[],n=s=>i[Math.max(0,Math.min(i.length-1,s))],e=(s,r,a,l,c)=>.5*(2*r+(-s+a)*c+(2*s-5*r+4*a-l)*c*c+(-s+3*r-3*a+l)*c*c*c);for(let s=0;s<i.length-1;s++){let[r,a,l,c]=[n(s-1),n(s),n(s+1),n(s+2)];for(let h=0;h<t;h++){let d=h/t;o.push({x:e(r.x,a.x,l.x,c.x,d),y:e(r.y,a.y,l.y,c.y,d),z:e(r.z,a.z,l.z,c.z,d),w:Math.max(.5,e(r.w,a.w,l.w,c.w,d)),d:Math.max(.004,e(r.d,a.d,l.d,c.d,d))})}}return o.push(n(i.length-1)),o}function gt(i,t,o=20,n=!0){let e=cr(t,3),s=e.map(r=>Array.from({length:o+1},(a,l)=>{let c=l/o*Math.PI*2,h=ie(r.x,r.y,r.z);return[h[0]+Math.sin(c)*r.w*re,h[1],h[2]+Math.cos(c)*r.d]}));if(n){let r=e[0],a=e[e.length-1],l=(c,h)=>[.7,.35,0].map(d=>Array.from({length:o+1},(u,f)=>{let p=f/o*Math.PI*2,v=ie(c.x,c.y,c.z),y=Math.sqrt(1-d*d)*Math.min(c.w*re,c.d)*.8*h;return[v[0]+Math.sin(p)*c.w*re*d,v[1]+y,v[2]+Math.cos(p)*c.d*d]}));s.unshift(...l(r,1).reverse()),s.push(...l(a,-1))}ur(i,s)}function ur(i,t){let o=t.length,n=t[0]?.length??0,e=(r,a)=>t[Math.max(0,Math.min(o-1,r))]?.[(a%(n-1)+(n-1))%(n-1)]??[0,0,0],s=(r,a)=>{let l=xt(e(r,a+1),e(r,a-1)),c=xt(e(r+1,a),e(r-1,a)),h=Wt(c,l);if(Math.hypot(h[0],h[1],h[2])<1e-12){let v=Uo(t[r===0?1:o-2]??[]);return j(xt(e(r,a),v))}let d=j(h),u=Uo(t[Math.max(0,Math.min(o-1,r))]??[]),f=e(r,a),p=[f[0]-u[0],0,f[2]-u[2]];return d[0]*p[0]+d[2]*p[2]<0?[-d[0],-d[1],-d[2]]:d};for(let r=0;r<o-1;r++)for(let a=0;a<n-1;a++){let l=[[r,a],[r+1,a],[r+1,a+1],[r,a],[r+1,a+1],[r,a+1]];for(let[c,h]of l)i.push(...e(c,h),...s(c,h))}}function Uo(i){let t=Math.max(1,i.length-1),o=0,n=0,e=0;for(let s=0;s<t;s++){let r=i[s]??[0,0,0];o+=r[0],n+=r[1],e+=r[2]}return[o/t,n/t,e/t]}var xt=(i,t)=>[i[0]-t[0],i[1]-t[1],i[2]-t[2]],Wt=(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]];function it(i,t,o,n=0,e=18){let s=Math.max(6,Math.round(e/2)),r=Math.cos(n),a=Math.sin(n),l=(c,h)=>{let d=c/s*Math.PI,u=h/e*Math.PI*2,f=[Math.sin(d)*Math.sin(u),Math.cos(d),Math.sin(d)*Math.cos(u)],p=f[0]*o[0],v=f[1]*o[1],y=[t[0]+p*r-v*a,t[1]+p*a+v*r,t[2]+f[2]*o[2]],b=f[0]/o[0],m=f[1]/o[1],g=j([b*r-m*a,b*a+m*r,f[2]/o[2]]);return[y,g]};for(let c=0;c<s;c++)for(let h=0;h<e;h++){let d=[[c,h],[c+1,h],[c+1,h+1],[c,h],[c+1,h+1],[c,h+1]];for(let[u,f]of d){let[p,v]=l(u,f);i.push(...p,...v)}}}function Ho(){let i=[];it(i,ie(120,55,.004),[27*re,35*re,.104],0,24),gt(i,lr,18,!1),gt(i,$o,28);for(let t of[1,-1]){let o=s=>({...s,x:t>0?s.x:240-s.x});gt(i,Ht.map(o),16),gt(i,Gt.map(o),18);let n=t>0?41:199;it(i,ie(n,330,.006),[7.5*re,17*re,.024],t>0?.08:-.08,14);let e=t>0?96:144;it(i,ie(e,501,.045),[9.5*re,7.5*re,.11],0,14)}return new Float32Array(i)}function Go(i=.6,t=2.3,o=48){let n=[];for(let e=0;e<o;e++){let s=e/o*Math.PI*2,r=(e+1)/o*Math.PI*2,a=(l,c)=>[Math.sin(l)*i,c,Math.cos(l)*i,Math.sin(l),0,Math.cos(l)];n.push(...a(s,0),...a(r,0),...a(r,t),...a(s,0),...a(r,t),...a(s,t))}return new Float32Array(n)}var Wo={brain:0,hypothalamus:-.005,brainstem:-.025,"visual-cortex":-.07,eyes:.086,ears:0,nose:.104,mouth:.09,thyroid:.035,thymus:.07,heart:.035,lungs:0,liver:.02,gallbladder:.055,stomach:.04,spleen:-.035,pancreas:-.02,kidneys:-.062,adrenals:-.062,"small-intestine":.04,"large-intestine":.035,bladder:.04,"spinal-cord":-.088,"sympathetic-chain":-.072,vagus:-.01,"arm-muscles":0,"thigh-muscles":0,"belly-fat":.07,"bone-marrow":0,"lymph-nodes":.03,scalp:0,fingernails:.02,toenails:.12,forearm:0,ankle:0,hand:.01,body:0};function zt(i,t){let o=[],n=[],e=0,s=0,r=i.match(/[MLHVQCSZmlhvqcsz]|-?\d*\.?\d+(?:e-?\d+)?/g)??[],a=0,l="M",c=()=>Number(r[a++]);for(;a<r.length;){let h=r[a]??"";if(/[A-Za-z]/.test(h)&&(l=h,a++,l==="Z"||l==="z")){n[0]&&n.push(n[0]);continue}if(l==="M")n.length>1&&o.push(n),e=c(),s=c(),n=[ie(e,s,t)],l="L";else if(l==="L")e=c(),s=c(),n.push(ie(e,s,t));else if(l==="H")e=c(),n.push(ie(e,s,t));else if(l==="V")s=c(),n.push(ie(e,s,t));else if(l==="Q"){let d=c(),u=c(),f=c(),p=c();for(let v=1;v<=6;v++){let y=v/6,b=1-y;n.push(ie(b*b*e+2*b*y*d+y*y*f,b*b*s+2*b*y*u+y*y*p,t))}e=f,s=p}else{let d=l==="c"||l==="C"?6:l==="s"||l==="S"||l==="q"?4:2;for(let u=0;u<d&&a<r.length&&!/[A-Za-z]/.test(r[a]??"");u++)a++;n.length>1&&o.push(n),n=[]}}return n.length>1&&o.push(n),o}function fr(i,t){let o=Wo[i];if("e"in t){let[c,h,d,u,f=0]=t.e,p=Math.max(.006,Math.min(.09,Math.min(d,u)*re*.9));return{organs:[{centre:ie(c,h,o),radii:[d*re,u*re,p],rotZ:-f*Math.PI/180}],strands:[]}}if(t.line!==void 0)return t.line<1?{organs:[],strands:[]}:{organs:[],strands:zt(t.d,o).map(c=>({points:c,radius:Math.max(.004,t.line*re*.5)}))};let n=zt(t.d,o).flat();if(n.length===0)return{organs:[],strands:[]};let e=n.map(c=>c[0]),s=n.map(c=>c[1]),r=[(Math.min(...e)+Math.max(...e))/2,(Math.min(...s)+Math.max(...s))/2,o],a=Math.max(.006,(Math.max(...e)-Math.min(...e))/2),l=Math.max(.006,(Math.max(...s)-Math.min(...s))/2);return{organs:[{centre:r,radii:[a,l,Math.min(a,l)],rotZ:0}],strands:[]}}var dr={vessels:[{key:"arteries",color:Ge.artery,z:.012},{key:"veins",color:Ge.vein,z:.004}],nerves:[{key:"nerves",color:Ge.nerve,z:-.012}],lymphatics:[{key:"lymphatics",color:Ge.lymph,z:.026}],autonomic:[{key:"autonomic",color:Ge.nerve,z:-.07}]};function hr(){let i=11,t=()=>(i=i*1664525+1013904223>>>0,i/4294967296),o=[[$o,140],[Ht,30],[Ht.map(e=>({...e,x:240-e.x})),30],[Gt,40],[Gt.map(e=>({...e,x:240-e.x})),40]],n=[ie(120,55,0)];for(let e=0;e<24;e++)n.push(ie(120+(t()-.5)*40,55+(t()-.5)*52,(t()-.5)*.12));for(let[e,s]of o)for(let r=0;r<s;r++){let a=Math.floor(t()*(e.length-1)),l=e[a],c=e[a+1],h=t(),d=(l.w+(c.w-l.w)*h)*.8,u=(l.d+(c.d-l.d)*h)*.8,f=t()*Math.PI*2,p=Math.sqrt(t());n.push(ie(l.x+(c.x-l.x)*h+Math.sin(f)*d*p,l.y+(c.y-l.y)*h,Math.cos(f)*u*p))}return n}var $t=null;function zo(i){let t=Y.node(i),o=t?.content?.bodyMap;if(!t||!o)return null;let n=ut(o),e=new Set(n.map(h=>h.region)),s=h=>{let d=[],u=[];for(let f of h)for(let p of To[f].shapes){let v=fr(f,p);d.push(...v.organs),u.push(...v.strands)}return{organs:d,strands:u}},r=o.overlays??[],a=[];for(let h of r)for(let d of dr[h]??[])for(let u of Eo[d.key])for(let f of zt(u,d.z))a.push({points:f,color:D(d.color)});let l=D(X[t.tier]),c=So(n,!1).filter(h=>h.region!=="body").map(h=>({at:ie(h.x,h.y,Wo[h.region]),r:Math.max(.035,h.r*re*.85),rows:h.rows}));return r.includes("cells")&&!$t&&($t=hr()),{node:i,tint:l,lit:s(e),ghosts:s(xo.filter(h=>!e.has(h))),lines:a,dots:r.includes("cells")?$t??[]:[],beads:r.includes("autonomic")?Ro.map(([h,d])=>ie(h,d,-.07)):[],targets:c,rows:n,map:o,whole:o.scope==="systemic"||e.has("body"),skin:r.includes("skin")}}function Xo(i,t,o,n,e,s){let a=(y,b)=>[o.centre[0]+o.u[0]*y+o.n[0]*.012,b,o.centre[2]+o.u[2]*y+o.n[2]*.012],l=o.centre[1]+o.hv,c=a(n*(o.hu+.12),0),h=y=>Math.hypot(y[0]-c[0],y[2]-c[2]),d=i.targets.map(y=>t(y.at)),u=[];i.rows.forEach((y,b)=>{let m=null;if(i.targets.forEach((g,R)=>{let E=d[R];E&&g.rows.includes(y.index)&&(!m||h(E)<h(m))&&(m=E)}),!m){let g=t([.31,1.25,0]),R=t([-.31,1.25,0]);m=h(g)<h(R)?g:R}u.push({row:y.index,start:m,end:l-(e[b]??0)*2*o.hv})});let f=u.filter(y=>y.end<=y.start[1]).sort((y,b)=>b.start[1]-y.start[1]),p=u.filter(y=>y.end>y.start[1]).sort((y,b)=>y.start[1]-b.start[1]),v=[];for(let y of[f,p])y.forEach((b,m)=>{let g=n*(o.hu+.1+m*.05);v.push({row:b.row,points:[b.start,a(g,b.start[1]),a(g,b.end),a(n*(o.hu-s),b.end)]})});return v.sort((y,b)=>y.row-b.row)}function Xt(i){let t=[];for(let o of i.organs)it(t,o.centre,o.radii,o.rotZ,16);for(let o of i.strands)for(let n=1;n<o.points.length;n++){let e=o.points[n-1],s=o.points[n];mr(t,e,s,o.radius)}return new Float32Array(t)}function mr(i,t,o,n){let e=xt(o,t);if(Math.hypot(e[0],e[1],e[2])<1e-6)return;let r=j(e),a=Math.abs(r[2])<.9?[0,0,1]:[1,0,0],l=j(Wt(a,r)),c=Wt(r,l),h=8,d=(u,f)=>{let p=[l[0]*Math.cos(f)+c[0]*Math.sin(f),l[1]*Math.cos(f)+c[1]*Math.sin(f),l[2]*Math.cos(f)+c[2]*Math.sin(f)];return[[u[0]+p[0]*n,u[1]+p[1]*n,u[2]+p[2]*n],p]};for(let u=0;u<h;u++){let f=u/h*Math.PI*2,p=(u+1)/h*Math.PI*2,[v,y]=d(t,f),[b,m]=d(t,p),[g,R]=d(o,f),[E,A]=d(o,p);i.push(...v,...y,...g,...R,...E,...A,...v,...y,...E,...A,...b,...m)}it(i,o,[n,n,n],0,8)}var pr=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyQ","KeyE","ShiftLeft","ShiftRight"]);function vr(i){return i instanceof HTMLElement&&(i.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(i.tagName))}var Et=class{keys=new Set;downAt=new Map;held=new Map;lastConsume=performance.now();dragX=0;dragY=0;zoom=0;pointers=new Map;press=null;pinch=0;el;h;off=[];constructor(t,o){this.el=t,this.h=o;let n=(r,a,l,c)=>{r.addEventListener(a,l,c),this.off.push(()=>r.removeEventListener(a,l,c))},e=(r,a)=>{window.addEventListener(r,a),this.off.push(()=>window.removeEventListener(r,a))};n(t,"pointerdown",r=>{r.button!==0&&r.pointerType==="mouse"||(t.setPointerCapture?.(r.pointerId),this.pointers.set(r.pointerId,{x:r.clientX,y:r.clientY}),this.pointers.size===1&&(this.press={x:r.clientX,y:r.clientY,moved:!1}),this.pointers.size===2&&(this.press=null,this.pinch=this.pinchDistance()),this.h.poke())}),n(t,"pointermove",r=>{let a=this.pointers.get(r.pointerId);if(!a){r.pointerType==="mouse"&&this.h.hover(r.clientX,r.clientY);return}let l=r.clientX-a.x,c=r.clientY-a.y;if(a.x=r.clientX,a.y=r.clientY,this.pointers.size===2){let h=this.pinchDistance();this.pinch>0&&h>0&&(this.zoom+=(this.pinch-h)*2.2),this.pinch=h}else this.press&&(!this.press.moved&&Math.hypot(r.clientX-this.press.x,r.clientY-this.press.y)>5&&(this.press.moved=!0),this.press.moved&&(this.dragX+=l,this.dragY+=c));this.h.poke()});let s=r=>{let a=this.press;this.pointers.delete(r.pointerId),this.pointers.size===0&&(a&&!a.moved&&r.type==="pointerup"&&this.h.click(r.clientX,r.clientY),this.press=null,this.pinch=0)};n(t,"pointerup",s),n(t,"pointercancel",s),n(t,"pointerleave",r=>{r.pointerType==="mouse"&&!this.pointers.has(r.pointerId)&&this.h.hover(-1,-1)}),n(t,"wheel",r=>{r.preventDefault(),this.zoom+=r.deltaMode===1?r.deltaY*32:r.deltaY,this.h.poke()},{passive:!1}),e("keydown",r=>{if(r.defaultPrevented||r.metaKey||r.ctrlKey||r.altKey||vr(r.target)||this.h.blocked())return;let a=r.target===t||r.target===document.body||r.target===document.documentElement;if(r.key==="Escape"&&a){r.preventDefault(),this.h.back();return}if(r.key==="Enter"&&r.target===t){r.preventDefault(),this.h.activate();return}!a||!pr.has(r.code)||(r.preventDefault(),this.keys.has(r.code)||this.downAt.set(r.code,performance.now()),this.keys.add(r.code),this.h.poke())}),e("keyup",r=>{if(!this.keys.has(r.code))return;let a=performance.now(),l=Math.max(this.downAt.get(r.code)??a,this.lastConsume);this.held.set(r.code,(this.held.get(r.code)??0)+Math.max(0,a-l)),this.keys.delete(r.code),this.downAt.delete(r.code),this.h.poke()}),e("blur",()=>{this.keys.clear(),this.downAt.clear(),this.held.clear()})}pinchDistance(){let[t,o]=[...this.pointers.values()];return t&&o?Math.hypot(t.x-o.x,t.y-o.y):0}get busy(){return this.keys.size>0||this.held.size>0||this.pointers.size>0}consume(){let t=performance.now(),o=Math.max(1,t-this.lastConsume),n=new Map;for(let r of new Set([...this.keys,...this.held.keys()])){let a=this.held.get(r)??0;this.keys.has(r)&&(a+=t-Math.max(this.downAt.get(r)??t,this.lastConsume)),n.set(r,Math.min(1,a/o))}this.held.clear(),this.lastConsume=t;let e=r=>n.get(r)??0,s={forward:e("KeyW")+e("ArrowUp")-e("KeyS")-e("ArrowDown"),strafe:e("KeyD")-e("KeyA"),turn:e("ArrowRight")+e("KeyE")-e("ArrowLeft")-e("KeyQ"),run:e("ShiftLeft")+e("ShiftRight")>.5,lookX:this.dragX,lookY:this.dragY,zoom:this.zoom};return this.dragX=0,this.dragY=0,this.zoom=0,s}dispose(){for(let t of this.off)t();this.keys.clear(),this.held.clear(),this.el}};var Yt=384,jt=288,Rt=class{gl;fbo;texture;tri;parallel;compiled=new Map;loading=new Set;order=[];showing=null;lastDraw=0;constructor(t){this.gl=t,this.parallel=t.getExtension("KHR_parallel_shader_compile");let o=t.createTexture();t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,Yt,jt,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),this.texture=o,this.fbo=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,this.fbo),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,o,0),t.bindFramebuffer(t.FRAMEBUFFER,null),this.tri=t.createVertexArray(),t.bindVertexArray(this.tri);let n=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,n),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.bindVertexArray(null)}prepare(t){let o=this.compiled.get(t);return o?(!o.ready&&!o.failed&&this.poll(o),o.ready):(this.loading.has(t)||(this.loading.add(t),go(t).then(n=>{this.loading.delete(t),this.compile(t,n)}).catch(()=>this.loading.delete(t))),!1)}compile(t,o){let n=this.gl,e=Y.node(t)?.tier??"T01",s=(h,d)=>{let u=n.createShader(h);return u&&(n.shaderSource(u,d),n.compileShader(u)),u},r=s(n.VERTEX_SHADER,po),a=s(n.FRAGMENT_SHADER,mo(o,1)),l=n.createProgram();if(!r||!a||!l)return;n.attachShader(l,r),n.attachShader(l,a),n.bindAttribLocation(l,0,"p"),n.linkProgram(l),n.deleteShader(r),n.deleteShader(a);let c={scene:o,tier:e,program:l,loc:new Map,ready:!1,failed:!1};for(this.compiled.set(t,c),this.order.push(t);this.order.length>3;){let h=this.order.findIndex(f=>f!==this.showing&&f!==t);if(h<0)break;let[d]=this.order.splice(h,1),u=d?this.compiled.get(d):void 0;d&&u&&(n.deleteProgram(u.program),this.compiled.delete(d))}this.poll(c)}poll(t){let o=this.gl;if(!(this.parallel&&!o.getProgramParameter(t.program,this.parallel.COMPLETION_STATUS_KHR))){if(!o.getProgramParameter(t.program,o.LINK_STATUS)){t.failed=!0;return}for(let n of["uRes","uOffset","uCamPos","uCamTarget","uFov","uAccent","uFloor","uRing","uTime","uZero"])t.loc.set(n,o.getUniformLocation(t.program,n));t.ready=!0}}render(t,o,n){let e=this.compiled.get(t);if(!e?.ready)return!1;let s=performance.now();if(this.showing===t&&s-this.lastDraw<n)return!1;this.lastDraw=s;let r=this.gl,a=vo(e.scene),l=bo(e.scene),c;if(l.az){let u=(l.az[0]+l.az[1])/2,f=(l.az[1]-l.az[0])/2;c={...a,az:u+Math.sin(o*.15)*f*.6}}else c={...a,az:a.az+o*6};let h=e.scene.poster??1.5,d=yo(e.scene,e.tier,c,h+o);r.bindFramebuffer(r.FRAMEBUFFER,this.fbo),r.viewport(0,0,Yt,jt),r.disable(r.DEPTH_TEST),r.disable(r.BLEND),r.useProgram(e.program),r.uniform2f(e.loc.get("uRes")??null,Yt,jt),r.uniform2f(e.loc.get("uOffset")??null,0,0),r.uniform1i(e.loc.get("uZero")??null,0);for(let[u,f]of Object.entries(d)){let p=e.loc.get(u)??null;f.length===3?r.uniform3f(p,f[0]??0,f[1]??0,f[2]??0):r.uniform1f(p,f[0]??0)}return r.bindVertexArray(this.tri),r.drawArrays(r.TRIANGLES,0,3),r.bindVertexArray(null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.enable(r.DEPTH_TEST),this.showing=t,!0}failed(t){return this.compiled.get(t)?.failed===!0}dispose(){let t=this.gl;for(let o of this.compiled.values())t.deleteProgram(o.program);t.deleteFramebuffer(this.fbo),t.deleteTexture(this.texture)}};var Ce=i=>i.toFixed(4),H=`#version 300 es
#ifndef Q
#define Q 0
#endif
precision highp float;
precision highp int;
precision highp sampler2DShadow;
`,he=`
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
`,qt=`
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
`,Kt=`
uniform sampler2D uSky;
uniform float uSkyLod;
vec2 skyUv(vec3 d) { return vec2(atan(d.x, -d.z) * 0.15915494 + 0.5, acos(clamp(d.y, -1.0, 1.0)) * 0.31830989); }
vec3 skyAt(vec3 d, float rough) { return textureLod(uSky, skyUv(d), rough * uSkyLod).rgb; }
`,Qt=`
uniform vec3 uFog;
uniform vec3 uFogDisplay;
uniform float uFogDensity;
// Aerial haze, denser near the ground: distance fades toward the silver horizon.
float hazeK(vec3 p, float dist) { return 1.0 - exp(-dist * uFogDensity * (0.35 + 0.65 * exp(-max(p.y, 0.0) * 0.015))); }
vec3 haze(vec3 col, vec3 p, float dist) { return mix(col, uFog, hazeK(p, dist)); }
`,Yo=`
const float HALF_ = ${Ce(k)};
const float RING_ = ${Ce(L)};
const float ATRIUM_ = ${Ce(P)};
const float FLOOR_H_ = ${Ce(Te)};
const float SLAB_ = ${Ce($)};
const float ROOF_ = ${Ce(Te*We)};
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
vec3 interiorEnv(vec3 p, vec3 R, float rough) {
  float lv = floor((p.y + 0.05) / FLOOR_H_);
  float y0 = lv * FLOOR_H_;
  float y1 = y0 + FLOOR_H_ - SLAB_;
  vec2 sr = sign(R.xz);
  vec2 tf2 = (HALF_ - p.xz * sr) / max(abs(R.xz), vec2(1e-4));
  float tFacade = min(tf2.x, tf2.y);
  float tUp = R.y > 1e-3 ? (y1 - p.y) / R.y : 1e9;
  float tDown = R.y < -1e-3 ? (y0 - p.y) / R.y : 1e9;
  vec3 res;
  if (tFacade < min(tUp, tDown)) {
    res = skyAt(R, rough) * 0.8;
  } else if (tUp < tDown) {
    vec2 q = p.xz + R.xz * tUp;
    float m = max(abs(q.x), abs(q.y));
    if (m < ATRIUM_) res = skyAt(vec3(R.x * 0.3, 1.0, R.z * 0.3), rough) * 1.2;
    else if (m < RING_ && lv < ${Ce(We-1)}) res = uInterior * 0.22;
    else {
      float blur = 0.03 + rough * 1.6 + tUp * rough * 0.25;
      res = mix(uInterior * 0.32, vec3(uPanel), coffer(q, blur) * (1.0 - smoothstep(0.5, 0.9, rough) * 0.6));
    }
  } else {
    res = uInterior * 0.5;
  }
  return mix(res, uInterior * 0.75, smoothstep(0.55, 1.0, rough));
}
`,br=`
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
`,jo=`
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
`,qo=`
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
`,Zt=`${H}
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
`,Ko=`${H}
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
${he}
${qt}
${Kt}
${Qt}
${Yo}
${br}
${jo}
out vec4 frag;
void main() {
  if (uClip > 0.5 && vPos.y < uClipY - 0.02) discard;
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
  vec3 env = mix(skyAt(R, rough), interiorEnv(vPos, R, rough), inside);
#if Q == 1
  if (uMirrorOn > 0.5 && N.y > 0.9 && abs(vPos.y - uMirrorY) < 0.12) env = mix(mirrorAt(mirrorOff, rough), env, smoothstep(0.1, 0.5, rough));
#endif
  vec3 Fr = F0 + (max(vec3(1.0 - rough), F0) - F0) * pow(1.0 - NdV, 5.0);
  vec3 col = diff * (amb * ao + sun) * (1.0 - Fr * 0.6) + sunSpec * sun + env * Fr * mix(1.0, ao, 0.6);
  col += albedo * emit * uEmitGain;
  col = haze(col, vPos, dist * (1.0 - inside * 0.9));
  frag = vec4(finish(col), 1.0);
}
`,Qo=`${H}
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
${he}
${Kt}
${Qt}
${Yo}
${jo}
out vec4 frag;
void main() {
  if (uClip > 0.5 && vPos.y < uClipY - 0.02) discard;
  vec3 N = normalize(vNormal);
  vec3 V = normalize(uCamPos - vPos);
  if (dot(N, V) < 0.0) N = -N;
  float cosT = max(dot(N, V), 0.0);
  // The second parameter is a reflective coating (the facade's glass): full strength seen from the bright
  // side outside, a quarter of it from inside. Interior glass has none.
  float F0 = 0.04 + vParams.y * mix(0.25, 1.0, 1.0 - insideAt(uCamPos));
  float F = F0 + (1.0 - F0) * pow(1.0 - cosT, 5.0);
  vec3 R = reflect(-V, N);
  // Seen from inside, glass reflects the interior; from outside, the sky.
  float inside = insideAt(vPos - V * 0.4);
  vec3 env = mix(skyAt(R, 0.0), interiorEnv(vPos, R, 0.02), inside);
#if Q == 1
  if (uMirrorOn > 0.5 && N.y > 0.9 && abs(vPos.y - uMirrorY) < 0.12) env = mirrorAt(vec2(0.0), 0.02);
#endif
  vec3 H = normalize(uSun + V);
  float spec = pow(max(dot(N, H), 0.0), 1400.0) * 90.0 * max(dot(N, uSun), 0.0);
  // Low-iron glass: nearly colourless, a faint green-blue body that thickens toward grazing angles. In
  // daylight, coated facade glass looks dark and mirror-like from outside (the interior is far dimmer than
  // the day) and clear from inside: the facade's body deepens when the viewer is outside.
  float viewerOut = 1.0 - insideAt(uCamPos);
  float base = vParams.x * mix(1.0, 2.3, viewerOut * step(0.001, vParams.y));
  float body = base * (0.55 + 0.45 * (1.0 - cosT));
  vec3 tint = toLinear(vColor) * mix(uInterior, uSkyAmb, 1.0 - inside) * 0.55;
  float alpha = clamp(body + F * (1.0 - body), 0.0, 0.96) * uFade;
  vec3 col = (env * F + tint * body + uSunColor * spec) * uFade;
  col = haze(col, vPos, length(uCamPos - vPos) * (1.0 - inside));
  frag = vec4(finish(col), alpha);
}
`,Ie=`${H}
layout(location = 0) in vec2 aPos;
out vec2 vNdc;
void main() {
  vNdc = aPos;
  gl_Position = vec4(aPos, 1.0, 1.0);
}
`,Zo=`${H}
in vec2 vNdc;
uniform mat4 uInvViewProj;
uniform vec3 uCamPos;
uniform vec3 uSun;
uniform vec3 uSunColor;
${he}
${Kt}
#if Q == 1
${qt}
${qo}
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
`,Jo=`${H}
in vec2 vNdc;
uniform vec3 uSun;
${qt}
${qo}
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
`,en=`${H}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
void main() {
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,tn=`${H}
void main() {}
`,on=`${H}
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
`,nn=`${H}
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
${he}
${Qt}
out vec4 frag;
void main() {
  if (uClip > 0.5 && vPos.y < uClipY - 0.02) discard;
  // Signs and screens show only their front: no mirrored text from behind the glass.
  if (!gl_FrontFacing) discard;
  // Live models render into a framebuffer, whose first row is the bottom of the picture.
  vec2 uv = uFlip > 0.5 ? vec2(vUv.x, 1.0 - vUv.y) : vUv;
  vec4 t = uHasTex > 0.5 ? texture(uTex, uv) : uPlaceholder;
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
`,rn=`${H}
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
`,sn=`${H}
in vec2 vUv;
in vec4 vCol;
in float vHard;
in vec3 vPos;
uniform float uClip;
uniform float uClipY;
${he}
out vec4 frag;
void main() {
  if (uClip > 0.5 && vPos.y < uClipY - 0.02) discard;
  float r = length(vUv * 2.0 - 1.0);
  float a = vHard > 0.5 ? 1.0 : pow(clamp(1.0 - r, 0.0, 1.0), 1.7);
  // Glows add light: in the HDR buffer, as light.
  vec3 c = uDirect > 0.5 ? vCol.rgb : toLinear(vCol.rgb) * 2.5;
  frag = vec4(c * a, vCol.a * a);
}
`,an=`${H}
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
`,ln=`${H}
in vec2 vC;
in float vFade;
${he}
out vec4 frag;
void main() {
  float r = length(vC);
  if (r > 1.0) discard;
  float a = pow(1.0 - r, 2.2) * vFade;
  // Added light, no coverage.
  vec3 c = uDirect > 0.5 ? vec3(1.0, 0.97, 0.92) * a * 0.5 : vec3(1.0, 0.95, 0.88) * a * 2.2;
  frag = vec4(c, 0.0);
}
`,cn=`${H}
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec2 aUv;
uniform mat4 uViewProj;
out vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,un=`${H}
in vec2 vUv;
uniform float uTime;
uniform float uLength;
${he}
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
`,fn=`${H}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
void main() {
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,dn=`${H}
uniform vec4 uColor;
${he}
out vec4 frag;
void main() {
  frag = vec4(uiOut(uColor.rgb / max(uColor.a, 1e-4)) * uColor.a, uColor.a);
}
`,St=`${H}
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
`,hn=`${H}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform vec3 uTint;
uniform float uWhole;
uniform float uTime;
uniform float uScanY;
${he}
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
`,mn=`${H}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uPulse;
${he}
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
`,pn=`${H}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform float uTime;
uniform float uSide;
${he}
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
`,vn=`${H}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
uniform mat4 uModel;
uniform float uPointSize;
void main() {
  gl_Position = uViewProj * uModel * vec4(aPos, 1.0);
  gl_PointSize = max(1.5, uPointSize / max(gl_Position.w, 0.1));
}
`,bn=`${H}
uniform vec4 uColor;
uniform float uRound;
${he}
out vec4 frag;
void main() {
  if (uRound > 0.5) {
    vec2 c = gl_PointCoord - 0.5;
    if (dot(c, c) > 0.25) discard;
  }
  frag = vec4(uiOut(uColor.rgb / max(uColor.a, 1e-4)) * uColor.a, uColor.a);
}
`,yn=`${H}
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
`,gn=`${H}
in vec2 vC;
uniform float uTime;
${he}
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
`,xn=`${H}
in vec2 vNdc;
uniform float uDim;
out vec4 frag;
void main() {
  float v = smoothstep(0.35, 1.45, length(vNdc));
  float a = uDim * (0.66 + 0.3 * v);
  frag = vec4(vec3(0.0) * a, a);
}
`,Tn=`${H}
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
`,En=`${H}
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
`,Rn=`${H}
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
`,Sn=`${H}
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
`;var ke=j([-.53,.6,.6]),B=ne(We),Fn=2.6,oe={sun:[2.55,2.42,2.22],sky:[.78,.84,.94],ground:[.4,.39,.37],interior:[.5,.495,.48],panel:3.4,emit:3.4,fog:[.86,.89,.93],fogDensity:45e-5,exposure:.8,exposureInside:1.35,bloomThreshold:2.2,bloomStrength:.16,grain:.016},Pn=10,Jt=7,T={stoneFloor:D("#C3BDB2"),lobbyFloor:D("#CBC5BA"),graphite:D("#3A3D42"),graphiteDeep:D("#25272B"),travertine:D("#E6E0D5"),band:D("#E2DCD1"),plaster:D("#EFEEEB"),panel:D("#FFFFFF"),titanium:D("#A9AEB4"),fin:D("#57524C"),steel:D("#CDD2D7"),bronze:D("#9E8566"),blackGlass:D("#0B0D10"),paving:D("#B5AFA5"),plateau:D("#7C7D75"),water:D("#0A0C0F"),glass:D("#CFE0DC"),facadeGlass:D("#9DB0BF"),glassFloor:D("#E4EBEA"),leather:D("#1B1A19"),carpet:D("#1F2225"),foliage:D("#34503A"),foliageLight:D("#4A6A45"),bark:D("#4B3D31"),soil:D("#2A2622"),runner:D("#E3232C"),runnerInlay:D("#A8262B"),warm:D("#FFE2B8")},S={stoneFloor:{gloss:.9,pattern:1},graphiteFloor:{gloss:.9,pattern:5},graphite:{gloss:.82,pattern:5},stoneWall:{gloss:.28,pattern:2},band:{gloss:.4,pattern:2},plaster:{gloss:.08,pattern:10},panel:{gloss:.1,emit:1},line:{gloss:.2,emit:.55},titanium:{gloss:.62,pattern:3},steel:{gloss:.94,pattern:4},bronze:{gloss:.6,pattern:9},blackGlass:{gloss:.96,pattern:13},paving:{gloss:.45,pattern:12},plateau:{gloss:.1,pattern:15},water:{gloss:.985,pattern:6},leather:{gloss:.55,pattern:7},carpet:{gloss:.05,pattern:8},foliage:{gloss:.3,pattern:11},bark:{gloss:.2,pattern:14},matte:{gloss:.15}};function yr(i){let t=Z[i]?.tier??"T01",[o,n,e]=D(X[t]),s=r=>Math.min(1,r*.7+.3);return[s(o),s(n),s(e)]}function gr(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Mn(i,t,o,n,e,s,r,a){let l=j(Re(o,t)),c=Math.abs(l[1])>.9?[1,0,0]:[0,1,0],h=j(de(l,c)),d=de(l,h),u=(f,p,v)=>{let y=[h[0]*Math.cos(v)+d[0]*Math.sin(v),h[1]*Math.cos(v)+d[1]*Math.sin(v),h[2]*Math.cos(v)+d[2]*Math.sin(v)];return[[f[0]+y[0]*p,f[1]+y[1]*p,f[2]+y[2]*p],y]};for(let f=0;f<s;f++){let p=f/s*Math.PI*2,v=(f+1)/s*Math.PI*2,[y,b]=u(t,n,p),[m,g]=u(t,n,v),[R]=u(o,e,p),[E]=u(o,e,v);i.vertex(y,b,r,a),i.vertex(R,b,r,a),i.vertex(E,g,r,a),i.vertex(y,b,r,a),i.vertex(E,g,r,a),i.vertex(m,g,r,a)}}function wn(){let i=new Xe,t=new Xe,o=[],n=[],e=[],s=[],r=[],a=[],l=gr(7),c=(b,m)=>{let g=t.vertexCount;m();let R=t.vertexCount-g;R>0&&o.push({first:g,count:R,centre:b})},h=(b,m=0)=>({gloss:b,emit:m}),d=(b,m,g,R,E)=>{let[A,N,x,M]=E,V=(_,G,W,O)=>n.push(_,m,G,W,O,A,N,x,M,0);V(b-R,g-R,0,0),V(b+R,g-R,1,0),V(b+R,g+R,1,1),V(b-R,g-R,0,0),V(b+R,g+R,1,1),V(b-R,g+R,0,1)},u=(b,m,g,R,E)=>d(b,m+.012,g,R,[0,0,0,E]),f=(b,m,g,R,E,A)=>d(b,m+.014,g,R,[E[0]*A,E[1]*A,E[2]*A,0]),p=(b,m)=>{let g=b.map(E=>E[0]),R=b.map(E=>E[1]);for(let E=Math.floor(Math.min(...g)/3)*3+1.5;E<Math.max(...g);E+=3)for(let A=Math.floor(Math.min(...R)/3)*3+1.5;A<Math.max(...R);A+=3){if(![[E-1.05,A-1.05],[E+1.05,A-1.05],[E+1.05,A+1.05],[E-1.05,A+1.05]].every(V=>Po(V,b)))continue;let M=.8;i.quad([E-M,m,A+M],[E+M,m,A+M],[E+M,m,A-M],[E-M,m,A-M],T.panel,S.panel,[0,-1,0])}},v=Te-$;for(let b of Z){let m=b.y,g=b.index,R=yr(g),E=new Set(b.stores.map(x=>x.bay.id));for(let x of b.bays){let M=E.has(x.id);i.prism(x.poly,m-$,m,M?T.graphite:x.use==="lobby"?T.lobbyFloor:T.stoneFloor,M?S.graphiteFloor:S.stoneFloor,{bottom:!1}),g>0&&(i.prism(x.poly,m-$,m-$,T.plaster,S.plaster,{top:!1,sides:!1}),p(x.poly,m-$-.012))}let A=[[[-P,P],[P,P],[L,L],[-L,L]],[[P,P],[P,-P],[L,-L],[L,L]],[[P,-P],[-P,-P],[-L,-L],[L,-L]],[[-P,-P],[-P,P],[-L,L],[-L,-L]]];for(let x of A)if(g===0)i.prism(x,m-$,m,T.stoneFloor,S.stoneFloor,{bottom:!1});else{let M=x.reduce((_,G)=>_+G[0],0)/4,V=x.reduce((_,G)=>_+G[1],0)/4;c([M,m,V],()=>{let _=pe=>[pe[0],m-.02,pe[1]],[G,W,O,z]=x;G&&W&&O&&z&&t.quad(_(G),_(W),_(O),_(z),T.glassFloor,h(.5),[0,1,0])})}for(let[x,M]of Tr(P))i.wall(x,M,m-$-.05,m+.02,.18,T.band,S.band),g>0&&i.wall(An(x,M,.12),An(M,x,.12),m-$-.09,m-$-.05,.05,T.panel,S.line);i.box([-Qe,m-.3,ft-.15],[Qe,m,P+.05],T.stoneFloor,S.stoneFloor);for(let x of[-1,1])for(let M of[-1,1])i.wall([x*L,M*L],[x*k,M*k],m,m+v,.3,T.travertine,S.stoneWall);i.wall([L,0],[k,0],m,m+v,.3,T.travertine,S.stoneWall),i.wall([0,-L],[0,-k],m,m+v,.3,T.travertine,S.stoneWall),i.wall([-L,0],[-k,0],m,m+v,.3,T.travertine,S.stoneWall);for(let[x,M,V]of Ft()){for(let O=0;O<4;O++){let z=O/4,pe=(O+1)/4,Se=[x[0]+(M[0]-x[0])*z,x[1]+(M[1]-x[1])*z],ce=[x[0]+(M[0]-x[0])*pe,x[1]+(M[1]-x[1])*pe],ae=[];if(g===0&&V[1]===1){let we=Math.min(Se[0],ce[0]),ee=Math.max(Se[0],ce[0]);ee<=-be||we>=be?ae.push([Se,ce]):(we<-be&&ae.push([[we,k],[-be,k]]),ee>be&&ae.push([[be,k],[ee,k]]))}else ae.push([Se,ce]);for(let[we,ee]of ae)c([(we[0]+ee[0])/2,m+v/2,(we[1]+ee[1])/2],()=>t.pane(we,ee,m,m+v,T.facadeGlass,h(.34,.32)))}let _=[x[0]+V[0]*.31,x[1]+V[1]*.31],G=[M[0]+V[0]*.31,M[1]+V[1]*.31],W=(O,z,pe)=>{let Se=Math.hypot(z[0]-O[0],z[1]-O[1]);return[O[0]-(z[0]-O[0])/Se*pe,O[1]-(z[1]-O[1])/Se*pe]};if(g>0){i.wall(W(_,G,.31),W(G,_,.31),m-$-.18,m+.14,.62,T.band,S.band);let O=[x[0]+V[0]*.625,x[1]+V[1]*.625],z=[M[0]+V[0]*.625,M[1]+V[1]*.625];i.wall(O,z,m-$-.17,m-$-.13,.01,R,S.line)}}e.push({key:`levelno:${g}`,rect:J([-13.5,k+.64],m+3.1,Math.PI,7.2,1.8,0)});for(let[x,M]of Er())c([(x[0]+M[0])/2,m+.55,(x[1]+M[1])/2],()=>t.pane(x,M,m,m+1.1,T.glass,h(.1))),i.wall(x,M,m+1.06,m+1.12,.07,T.steel,S.titanium);let N=Math.asin(Qe/K)+.05;c([0,m+Te/2,0],()=>{t.cylinder(0,0,K,m,m+2.7,26,T.glass,h(.08),{arc:[N,Math.PI*2-N]}),t.cylinder(0,0,K,m+2.7,m+Te,30,T.glass,h(.08),{caps:!1})}),i.cylinder(0,0,K+.06,m-$,m+.03,28,T.steel,S.steel,{caps:!1}),i.cylinder(0,0,K+.06,m+2.7,m+2.84,28,T.steel,S.steel,{caps:!1}),e.push({key:`level:${g}`,rect:J([0,(P+L)/2],m+4.82,0,4.2,.86,.075)}),e.push({key:`level:${g}`,rect:J([0,(P+L)/2],m+4.82,Math.PI,4.2,.86,.075)}),i.box([-2.16,m+4.36,(P+L)/2-.06],[2.16,m+5.28,(P+L)/2+.06],T.blackGlass,S.blackGlass);for(let x of[-1.7,1.7])i.box([x-.02,m+5.26,7.98],[x+.02,m+v,8.02],T.steel,S.steel);{let x=J(Me,m+1.95,Ao,2.9,2.2,.17),M=[Me[0]-x.u[0]*1.7,Me[1]-x.u[2]*1.7],V=[Me[0]+x.u[0]*1.7,Me[1]+x.u[2]*1.7];i.wall(M,V,m,m+3.4,.3,T.travertine,S.stoneWall),i.wall([M[0]+x.u[0]*.05,M[1]+x.u[2]*.05],[V[0]-x.u[0]*.05,V[1]-x.u[2]*.05],m+3.33,m+3.37,.31,R,S.line),s.push({kind:"directory",level:g,rect:x}),u(Me[0],m,Me[1],2.4,.14);for(let _ of[-1,1])i.box([_*3.6-.05,m,16.2],[_*6.4+.05,m+.44,17],T.travertine,S.band),i.box([_*3.6,m+.44,16.25],[_*6.4,m+.47,16.95],T.graphite,S.graphite),u(_*5,m,16.6,2,.12)}for(let x of b.stores){let M=x.bay.inward,V=Ee(-M[0],-M[1]),[_,G]=x.bay.front,W=x.bay.along,O=[x.door[0]-W[0]*Ze,x.door[1]-W[1]*Ze],z=[x.door[0]+W[0]*Ze,x.door[1]+W[1]*Ze];c([(_[0]+O[0])/2,m+2,(_[1]+O[1])/2],()=>t.pane(_,O,m,m+4,T.glass,h(.07))),c([(z[0]+G[0])/2,m+2,(z[1]+G[1])/2],()=>t.pane(z,G,m,m+4,T.glass,h(.07))),i.wall(_,G,m+4,m+v,.36,T.travertine,S.stoneWall);let pe=(I,te)=>[I[0]-W[0]*te,I[1]-W[1]*te];for(let[I,te]of[[O,1],[z,-1]]){let ve=pe(I,-te*.12);i.box([Math.min(I[0],ve[0])-Math.abs(M[0])*.22,m,Math.min(I[1],ve[1])-Math.abs(M[1])*.22],[Math.max(I[0],ve[0])+Math.abs(M[0])*.22,m+4.06,Math.max(I[1],ve[1])+Math.abs(M[1])*.22],T.steel,S.steel)}i.wall(pe(O,.12),pe(z,-.12),m+3.98,m+4.1,.44,T.steel,S.steel);for(let I of[_,G])i.box([I[0]-.05,m,I[1]-.05],[I[0]+.05,m+4,I[1]+.05],T.titanium,S.titanium);let Se=I=>[I[0]-M[0]*.19,I[1]-M[1]*.19];i.wall(Se(_),Se(G),m+4.32,m+4.35,.02,R,S.line),e.push({key:`store:${x.node}`,rect:J(x.door,m+4.85,V,5.6,.95,.2)});let[ce,ae]=x.display,we=x.heading+Math.PI;i.cylinder(ce,ae,1.15,m,m+.45,32,T.graphiteDeep,S.graphite),i.annulus(ce,ae,1.15,1.19,m+.45,40,T.steel,S.steel),i.annulus(ce,ae,1.19,1.23,m+.006,40,R,S.line);let ee=J(x.display,m+2.2,we,3.6,2.7,.09),Zn=[ce-ee.u[0]*1.9,ae-ee.u[2]*1.9],Jn=[ce+ee.u[0]*1.9,ae+ee.u[2]*1.9];i.wall(Zn,Jn,m+.78,m+3.62,.12,T.blackGlass,S.blackGlass),i.wall([ce-.1*ee.u[0],ae-.1*ee.u[2]],[ce+.1*ee.u[0],ae+.1*ee.u[2]],m+.45,m+.8,.08,T.titanium,S.titanium),s.push({kind:"store",node:x.node,level:g,rect:ee}),u(ce,m,ae,2.4,.22);let er=Ee(x.panel.normal[0],x.panel.normal[1]);s.push({kind:"panel",node:x.node,level:g,rect:J(x.panel.at,m+2.35,er,4.6,2.9,.03)});let[qe,Ke]=x.holo.at;i.cylinder(qe,Ke,.95,m,m+.18,40,T.steel,S.steel),i.annulus(qe,Ke,.8,.86,m+.182,48,T.panel,S.line),i.annulus(qe,Ke,.01,.76,m+.181,40,T.plaster,{gloss:.5,emit:.22}),i.annulus(qe,Ke,.94,1,m+v-.02,48,T.panel,S.line),u(qe,m,Ke,1.7,.22);let It=J(x.board.at,m+x.board.bottom+x.board.height/2,x.board.facing,x.board.width,x.board.height,.04),Ue=[It.u[0]*(x.board.width/2+.05),It.u[2]*(x.board.width/2+.05)];i.wall([x.board.at[0]-Ue[0],x.board.at[1]-Ue[1]],[x.board.at[0]+Ue[0],x.board.at[1]+Ue[1]],m+x.board.bottom-.05,m+x.board.bottom+x.board.height+.05,.06,T.titanium,S.titanium);for(let I of[-1,1]){let te=x.board.at[0]+Ue[0]*I*.8,ve=x.board.at[1]+Ue[1]*I*.8;i.box([te-.022,m,ve-.022],[te+.022,m+x.board.bottom,ve+.022],T.titanium,S.titanium)}s.push({kind:"board",node:x.node,level:g,rect:It}),s.push({kind:"examples",node:x.node,level:g,rect:J(x.examples.at,m+x.examples.bottom+x.examples.height/2,x.examples.facing,x.examples.width,x.examples.height,0)});let io=I=>[I[0]+M[0]*.06,I[1]+M[1]*.06],tr=io([(_[0]+O[0])/2,(_[1]+O[1])/2]),or=io([(z[0]+G[0])/2,(z[1]+G[1])/2]);r.push({key:`banner:${x.node}`,node:x.node,level:g,rect:J(tr,m+2.05,V,2.2,3.1,0)}),s.push({kind:"window",node:x.node,level:g,rect:J(or,m+2.25,V,2.4,1.8,0)});let so=Fe(x.bay.id,L-.78,9.25),nr=Fe(x.bay.id,L,9.25),rr=Fe(x.bay.id,L-1.45,9.25);i.wall(nr,rr,m+3.84,m+3.89,.04,T.steel,S.steel),e.push({key:`blade:${x.node}`,rect:J(so,m+3.45,Ee(W[0],W[1]),1.3,.62,.02)}),e.push({key:`blade:${x.node}`,rect:J(so,m+3.45,Ee(-W[0],-W[1]),1.3,.62,.02)});{let I=x.theater,te=J(I.at,m+I.bottom+I.height/2,I.facing,I.width,I.height,0),ve=[Math.sin(I.facing),-Math.cos(I.facing)],ao=[te.u[0],te.u[2]],ue=($e,le)=>[I.at[0]+ao[0]*$e+ve[0]*le,I.at[1]+ao[1]*$e+ve[1]*le],fe=I.width/2,ct=m+I.bottom+I.height;i.wall(ue(-fe-1.2,-.07),ue(fe+1.2,-.07),m,m+v,.04,T.graphiteDeep,S.graphite),i.wall(ue(-fe-.16,-.035),ue(fe+.16,-.035),m+I.bottom-.16,ct+.16,.04,T.blackGlass,S.blackGlass),i.wall(ue(-fe-.1,-.012),ue(fe+.1,-.012),m+I.bottom-.27,m+I.bottom-.25,.02,T.warm,S.line),i.wall(ue(-fe-.1,-.012),ue(fe+.1,-.012),ct+.25,ct+.27,.02,T.warm,S.line),s.push({kind:"theater",node:x.node,level:g,rect:te}),e.push({key:"theater:marquee",rect:J(I.at,ct+.62,I.facing,3.4,.66,.02)});let ir=[ue(-fe+.2,.06),ue(fe-.2,.06),ue(fe-.2,5.1),ue(-fe+.2,5.1)];i.prism(ir,m,m+.012,T.carpet,S.carpet,{bottom:!1});for(let $e of[-1,1])for(let le=0;le<6;le++){let[Le,He]=ue($e*(fe-.32),.7+le*.82);f(Le,m+.013,He,.12,T.warm,.7)}for(let $e of I.seats){let[le,Le]=$e,He=Math.atan2(I.at[0]-le,I.at[1]-Le);i.cylinder(le,Le,.14,m,m+.24,10,T.steel,S.steel,{caps:!1}),i.cylinder(le,Le,.42,m+.24,m+.3,16,T.steel,S.steel),i.cylinder(le,Le,.4,m+.3,m+.5,16,T.leather,S.leather),i.cylinder(le,Le,.42,m+.3,m+1.1,10,T.leather,S.leather,{arc:[He+Math.PI-1.3,He+Math.PI+1.3]}),i.cylinder(le,Le,.36,m+.5,m+1,10,T.leather,S.leather,{arc:[He+Math.PI-1.15,He+Math.PI+1.15],inward:!0}),u(le,m+.012,Le,.75,.24)}}r.push({key:`medallion:${x.node}`,node:x.node,level:g,rect:Bt(x.medallion,m+.016,Ee(M[0],M[1]),2.3,2.3)});for(let I of dt){let te=x.stations[I],ve=[te.p[0]+Math.sin(te.heading)*.95,te.p[1]-Math.cos(te.heading)*.95];e.push({key:`station:${I}`,rect:Bt(ve,m+.018,te.heading,1.3,.46)})}}for(let x of b.lounges)xr(i,x,m,l,a)}for(let b of[Z[We-1]])if(b){for(let m of b.bays)i.prism(m.poly,B-$,B,T.band,S.band,{bottom:!1}),i.prism(m.poly,B-$,B-$,T.plaster,S.plaster,{top:!1,sides:!1}),p(m.poly,B-$-.012);for(let m of[[[-P,P],[P,P],[L,L],[-L,L]],[[P,P],[P,-P],[L,-L],[L,L]],[[P,-P],[-P,-P],[-L,-L],[L,-L]],[[-P,-P],[-P,P],[-L,L],[-L,-L]]])i.prism(m,B-$,B,T.band,S.band,{bottom:!1}),i.prism(m,B-$,B-$,T.plaster,S.plaster,{top:!1,sides:!1})}c([0,B,0],()=>t.quad([-P,B,-P],[P,B,-P],[P,B,P],[-P,B,P],T.facadeGlass,h(.2,.08),[0,1,0]));for(let[b,m,g]of Ft()){let R=[b[0]+g[0]*.31,b[1]+g[1]*.31],E=[m[0]+g[0]*.31,m[1]+g[1]*.31],A=Math.hypot(E[0]-R[0],E[1]-R[1]),N=(E[0]-R[0])/A,x=(E[1]-R[1])/A;i.wall([R[0]-N*.31,R[1]-x*.31],[E[0]+N*.31,E[1]+x*.31],B-$-.18,B+1.1,.62,T.band,S.band);let M=[b[0]+g[0]*.625,b[1]+g[1]*.625],V=[m[0]+g[0]*.625,m[1]+g[1]*.625];i.wall(M,V,B-$-.17,B-$-.13,.01,T.panel,S.line);let _=O=>[O[0]-g[0]*1.2,O[1]-g[1]*1.2];i.wall(_(b),_(m),B,B+Fn,.4,T.band,S.band);let G=[(_(b)[0]+_(m)[0])/2,(_(b)[1]+_(m)[1])/2];e.push({key:"crown",rect:J(G,B+Fn/2+.1,Ee(g[0],g[1]),22,1.75,.21)});let W=O=>[O[0]+g[0]*.205,O[1]+g[1]*.205];i.wall(W(_(b)),W(_(m)),B+.22,B+.26,.01,T.runner,S.line)}c([0,B+2,0],()=>t.cylinder(0,0,K,B,B+3.4,30,T.glass,h(.1),{caps:!1})),i.cylinder(0,0,K+.08,B+3.4,B+3.62,36,T.steel,S.steel);{let m=B+1.1;for(let[g,R,E]of Ft()){let A=Math.hypot(R[0]-g[0],R[1]-g[1]),N=(R[0]-g[0])/A,x=(R[1]-g[1])/A;for(let M=1;M<Math.round(A/2.5);M++){let V=[g[0]+N*M*2.5,g[1]+x*M*2.5],_=E[1]===1&&Math.abs(V[0])<=be+.7?4.32:-.02,G=[V[0]+E[0]*.02,V[1]+E[1]*.02],W=[V[0]+E[0]*.62,V[1]+E[1]*.62];i.wall(G,W,_,m,.14,T.fin,S.titanium)}}for(let g of[-1,1])for(let R of[-1,1])i.box([g*k-.45+g*.17,-.02,R*k-.45+R*.17],[g*k+.45+g*.17,m+.02,R*k+.45+R*.17],T.band,S.band);for(let[g,R,E]of Ft()){let A=[g[0]+E[0]*.31,g[1]+E[1]*.31],N=[R[0]+E[0]*.31,R[1]+E[1]*.31];E[1]===1?(i.wall(A,[-be-.7,A[1]],-.02,.32,.62,T.graphite,S.graphite),i.wall([be+.7,N[1]],N,-.02,.32,.62,T.graphite,S.graphite)):i.wall(A,N,-.02,.32,.62,T.graphite,S.graphite)}}{i.box([-4.4,4.06,k+.1],[4.4,4.32,k+3.6],T.steel,S.steel),i.quad([-4.2,4.055,k+3.4],[4.2,4.055,k+3.4],[4.2,4.055,k+.3],[-4.2,4.055,k+.3],T.panel,{gloss:.1,emit:.55},[0,-1,0]);for(let b of[-1,1])i.box([b*(be+.36)-.34,-.02,k-.1],[b*(be+.36)+.34,4.06,k+.75],T.band,S.band);e.push({key:"entrance",rect:J([0,k+.12],4.95,Math.PI,7.6,1.3,.05)}),u(0,0,k+2.2,4.2,.1)}i.annulus(0,0,.01,54,-.02,120,T.paving,S.paving);for(let b of[29,38,47])i.annulus(0,0,b-.3,b+.3,-.015,160,T.graphite,S.graphite);i.cylinder(0,0,55,-.5,.04,120,T.graphite,S.graphite,{caps:!1}),i.annulus(0,0,54,55,.04,120,T.graphite,S.graphite),i.cylinder(0,0,54,-.5,.04,120,T.graphite,S.graphite,{caps:!1,inward:!0}),i.annulus(0,0,55,96,-.12,160,T.water,S.water),i.cylinder(0,0,96,-.12,-.02,160,T.graphite,S.graphite,{caps:!1,inward:!0}),i.annulus(0,0,96,97.2,-.02,160,T.graphite,S.graphite),i.annulus(0,0,97.2,2400,-.04,160,T.plateau,S.plateau);for(let b of[-1,1]){let m=b*9.5,g=k+12;i.cylinder(m,g,2.7,-.02,.32,56,T.steel,S.steel),i.annulus(m,g,2.45,2.7,.32,64,T.steel,S.steel),i.annulus(m,g,.01,2.45,.3,56,T.soil,S.matte),i.annulus(m,g,2.72,2.78,.004,64,T.panel,S.line),Ln(i,m,.3,g,1.45,b>0?.6:2.4)}i.quad([-.035,0,k+3.7],[.035,0,k+3.7],[.035,0,44],[-.035,0,44],T.runnerInlay,{gloss:.8},[0,1,0]);for(let b=0;b<260;b++){let m=l()*Math.PI*2,g=K+.5+l()*(P-K-.9);a.push(Math.sin(m)*g,l()*B,Math.cos(m)*g,.01+l()*.018,l(),B,.04+l()*.08)}let y=new Xe;return y.cylinder(0,0,K-.12,-.18,.01,40,T.graphite,S.graphiteFloor),y.annulus(0,0,K-.32,K-.26,.015,48,T.panel,S.line),y.cylinder(0,0,K-.12,2.58,2.66,40,T.steel,S.steel),y.annulus(0,0,.3,.55,2.575,32,T.panel,S.panel),{opaque:i.toArray(),glass:t.toArray(),glassPieces:o,decals:new Float32Array(n),signs:e,screens:s,overlays:r,bubbles:new Float32Array(a),cab:y.toArray()}}function Ln(i,t,o,n,e,s){let r=(h,d,u)=>[t+(h*Math.cos(s)-u*Math.sin(s))*e,o+d*e,n+(h*Math.sin(s)+u*Math.cos(s))*e],a=[r(0,0,0),r(.32,.68,.08),r(-.22,1.38,-.06),r(.18,2.03,.05),r(-.05,2.53,0)],l=[.21,.15,.11,.075,.045];for(let h=1;h<a.length;h++){let d=a[h-1],u=a[h];d&&u&&Mn(i,d,u,(l[h-1]??.05)*e,(l[h]??.04)*e,10,T.bark,S.bark)}let c=[[r(.32,.68,.08),r(1.1,.98,.3),.85],[r(-.22,1.38,-.06),r(-1.05,1.58,-.35),.8],[r(.18,2.03,.05),r(.85,2.23,-.4),.7],[r(-.05,2.53,0),r(-.05,2.78,.05),.75],[r(-.22,1.38,-.06),r(-.2,1.58,.75),.6]];for(let[h,d,u]of c)Mn(i,h,d,.05*e,.03*e,6,T.bark,S.bark),i.sphere(d,u*e,12,T.foliage,S.foliage,.32),i.sphere([d[0]+u*e*.3,d[1]+u*e*.16,d[2]-u*e*.2],u*e*.62,10,T.foliageLight,S.foliage,.36)}function xr(i,t,o,n,e){let[s,r]=Fe(t.id,15,6);i.cylinder(s,r,1.55,o,o+.5,40,T.graphiteDeep,S.graphite),i.annulus(s,r,1.42,1.55,o+.5,48,T.steel,S.steel),i.annulus(s,r,.01,1.42,o+.47,40,T.soil,S.matte),i.annulus(s,r,1.56,1.6,o+.006,48,T.panel,S.line),Ln(i,s,o+.47,r,1,n()*Math.PI*2);let[a,l]=Fe(t.id,13,11);i.cylinder(a,l,1.9,o,o+.34,40,T.graphiteDeep,S.graphite,{caps:!1}),i.annulus(a,l,1.78,1.9,o+.34,48,T.graphite,S.graphite),i.annulus(a,l,.01,1.78,o+.33,48,T.water,S.water);let c=Fe(t.id,17.2,2.5),h=Fe(t.id,17.2,6.5);i.box([Math.min(c[0],h[0])-.36,o,Math.min(c[1],h[1])-.36],[Math.max(c[0],h[0])+.36,o+.44,Math.max(c[1],h[1])+.36],T.travertine,S.band);for(let d=0;d<24;d++)e.push(s+(n()-.5)*5,o+n()*4,r+(n()-.5)*5,.008+n()*.012,n(),5.2,.03+n()*.05)}function Ft(){let i=k;return[[[-i,i],[i,i],[0,1]],[[i,i],[i,-i],[1,0]],[[i,-i],[-i,-i],[0,-1]],[[-i,-i],[-i,i],[-1,0]]]}function Tr(i){return[[[-i,i],[i,i]],[[i,i],[i,-i]],[[i,-i],[-i,-i]],[[-i,-i],[-i,i]]]}function An(i,t,o){let n=Math.hypot(t[0]-i[0],t[1]-i[1]);return[i[0]+(t[0]-i[0])/n*o,i[1]+(t[1]-i[1])/n*o]}function Er(){let i=P,t=Qe;return[[[-i,i],[-t,i]],[[t,i],[i,i]],[[i,i],[i,-i]],[[i,-i],[-i,-i]],[[-i,-i],[-i,i]],[[-t,ft],[-t,i]],[[t,ft],[t,i]]]}var Rr=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),Sr=[.89,.137,.173],Fr=[.55,.64,.73],Mr=[.77,.525,0];function q(i,t,o,n,e=0){let s=u=>u.replace(`#version 300 es
`,`#version 300 es
#define Q ${e}
`),r=(u,f)=>{let p=i.createShader(u);if(!p)throw new Error(`${n}: cannot create shader`);if(i.shaderSource(p,s(f)),i.compileShader(p),!i.getShaderParameter(p,i.COMPILE_STATUS))throw new Error(`${n}: ${i.getShaderInfoLog(p)??"compile failed"}`);return p},a=i.createProgram();if(!a)throw new Error(`${n}: cannot create program`);let l=r(i.VERTEX_SHADER,t),c=r(i.FRAGMENT_SHADER,o);if(i.attachShader(a,l),i.attachShader(a,c),i.linkProgram(a),!i.getProgramParameter(a,i.LINK_STATUS))throw new Error(`${n}: ${i.getProgramInfoLog(a)??"link failed"}`);i.deleteShader(l),i.deleteShader(c);let h=new Map,d=i.getProgramParameter(a,i.ACTIVE_UNIFORMS);for(let u=0;u<d;u++){let f=i.getActiveUniform(a,u);f&&h.set(f.name,i.getUniformLocation(a,f.name))}return{p:a,u:h}}function Ar(i,t){let o=n=>{let e=n*t;return Math.min(1,Math.max(0,e*(2.51*e+.03)/(e*(2.43*e+.59)+.14)))**.45454545454545453};return[o(i[0]),o(i[1]),o(i[2])]}var Mt=class i{gl;tier;prog;post=null;vaos;counts={opaque:0,cab:0,decal:0,signs:0,bubbles:0};world;skyTex=null;skyLod=6;atlasTex=null;black;shadowTex=null;shadowMat=new Float32Array(16);shadowTexel=1/2048;shadowBias=2e-4;screenTex=new Map;ribbonCount=0;ribbonLength=0;ribbonBuf;flatBuf;signBuf;leaderBuf;reticleBuf;shell=null;beam=null;holoGpu=new Map;order;dist;scene=null;hdr=null;mirror=null;bloom=[];samples=4;mirrorVP=new Float32Array(16);mirrorInv=new Float32Array(16);reflect=new Float32Array(16);constructor(t,o,n){this.gl=t,this.world=o,this.tier=n,this.prog=this.programs(n==="cinematic"?1:0),n==="cinematic"&&(this.post=this.postPrograms());let e=a=>this.vao(a,[3,3,3,4]);this.counts.opaque=o.opaque.length/bt,this.counts.cab=o.cab.length/bt,this.counts.decal=o.decals.length/Pn,this.counts.bubbles=o.bubbles.length/Jt;let s=new Float32Array(o.screens.length*30);o.screens.forEach((a,l)=>s.set(yt(a.rect),l*30));let r=new Float32Array(o.overlays.length*30);o.overlays.forEach((a,l)=>r.set(yt(a.rect),l*30)),this.signBuf=t.createBuffer(),this.ribbonBuf=t.createBuffer(),this.flatBuf=t.createBuffer(),this.leaderBuf=t.createBuffer(),this.reticleBuf=t.createBuffer(),this.vaos={opaque:e(o.opaque),glass:e(o.glass),cab:e(o.cab),decal:this.vao(o.decals,[3,2,4,1]),full:this.vao(new Float32Array([-1,-1,3,-1,-1,3]),[2]),signs:this.vaoFor(this.signBuf,[3,2]),screens:this.vao(s,[3,2]),overlays:this.vao(r,[3,2]),bubbles:this.bubbleVao(o.bubbles),ribbon:this.vaoFor(this.ribbonBuf,[3,2]),flat:this.vaoFor(this.flatBuf,[3]),leaders:this.vaoFor(this.leaderBuf,[3]),reticles:this.vaoFor(this.reticleBuf,[3,3])},this.order=o.glassPieces.map((a,l)=>l),this.dist=new Float32Array(o.glassPieces.length),this.black=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.black),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),this.makeSky(),this.makeShadows()}programs(t){let o=this.gl;return{lit:q(o,Zt,Ko,"lit",t),glass:q(o,Zt,Qo,"glass",t),sky:q(o,Ie,Zo,"sky",t),tex:q(o,on,nn,"textured",t),decal:q(o,rn,sn,"decal",t),mote:q(o,an,ln,"motes",t),ribbon:q(o,cn,un,"ribbon",t),flat:q(o,fn,dn,"flat",t),shell:q(o,St,hn,"hologram shell",t),organ:q(o,St,mn,"hologram organs",t),line:q(o,vn,bn,"hologram lines",t),reticle:q(o,yn,gn,"hologram targets",t),beam:q(o,St,pn,"hologram beam",t),dim:q(o,Ie,xn,"house lights",t)}}postPrograms(){let t=this.gl;return{pre:q(t,Ie,Tn,"bloom"),down:q(t,Ie,En,"bloom down"),up:q(t,Ie,Rn,"bloom up"),composite:q(t,Ie,Sn,"composite")}}setTier(t){if(t===this.tier||t==="cinematic")return;let o=this.gl,n=this.prog;this.prog=this.programs(0);for(let e of Object.values(n))o.deleteProgram(e.p);if(this.post)for(let e of Object.values(this.post))o.deleteProgram(e.p);this.post=null,this.freeTargets(),this.tier="basic"}vao(t,o){let n=this.gl,e=n.createBuffer();return n.bindBuffer(n.ARRAY_BUFFER,e),n.bufferData(n.ARRAY_BUFFER,t,n.STATIC_DRAW),this.vaoFor(e,o)}vaoFor(t,o){let n=this.gl,e=n.createVertexArray();n.bindVertexArray(e),n.bindBuffer(n.ARRAY_BUFFER,t);let s=o.reduce((a,l)=>a+l,0)*4,r=0;return o.forEach((a,l)=>{n.enableVertexAttribArray(l),n.vertexAttribPointer(l,a,n.FLOAT,!1,s,r),r+=a*4}),n.bindVertexArray(null),e}bubbleVao(t){let o=this.gl,n=o.createVertexArray();o.bindVertexArray(n);let e=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,e),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),o.STATIC_DRAW),o.enableVertexAttribArray(0),o.vertexAttribPointer(0,2,o.FLOAT,!1,0,0);let s=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,s),o.bufferData(o.ARRAY_BUFFER,t,o.STATIC_DRAW);let r=Jt*4;return o.enableVertexAttribArray(1),o.vertexAttribPointer(1,3,o.FLOAT,!1,r,0),o.vertexAttribDivisor(1,1),o.enableVertexAttribArray(2),o.vertexAttribPointer(2,4,o.FLOAT,!1,r,12),o.vertexAttribDivisor(2,1),o.bindVertexArray(null),n}makeSky(){let t=this.gl,o=this.tier==="cinematic",n=2048,e=n/2,s=t.createTexture();t.bindTexture(t.TEXTURE_2D,s),o?t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,n,e,0,t.RGBA,t.HALF_FLOAT,null):t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,n,e,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);let r=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,r),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,s,0);let a=q(t,Ie,Jo,"skygen");t.viewport(0,0,n,e),t.disable(t.DEPTH_TEST),t.disable(t.BLEND),t.useProgram(a.p),t.uniform3f(a.u.get("uSun")??null,ke[0],ke[1],ke[2]),t.bindVertexArray(this.vaos.full),t.drawArrays(t.TRIANGLES,0,3),t.bindVertexArray(null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteFramebuffer(r),t.deleteProgram(a.p),t.bindTexture(t.TEXTURE_2D,s),t.generateMipmap(t.TEXTURE_2D),this.skyTex=s,this.skyLod=Math.log2(n)-3}makeShadows(){let t=this.gl,o=t.getParameter(t.MAX_TEXTURE_SIZE),n=this.tier==="cinematic"&&o>=4096?3072:2048,e=t.createTexture();t.bindTexture(t.TEXTURE_2D,e),t.texStorage2D(t.TEXTURE_2D,1,t.DEPTH_COMPONENT24,n,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_COMPARE_FUNC,t.LEQUAL);let s=t.createFramebuffer();if(t.bindFramebuffer(t.FRAMEBUFFER,s),t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,e,0),t.drawBuffers([t.NONE]),t.readBuffer(t.NONE),t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE){t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteFramebuffer(s),t.deleteTexture(e);return}let r=new Float32Array(16),a=[0,18,0];pt(r,[a[0]+ke[0]*200,a[1]+ke[1]*200,a[2]+ke[2]*200],a);let l=1/0,c=-1/0,h=1/0,d=-1/0,u=1/0,f=-1/0;for(let y of[-82,82])for(let b of[-1.5,48])for(let m of[-82,82]){let g=(r[0]??0)*y+(r[4]??0)*b+(r[8]??0)*m+(r[12]??0),R=(r[1]??0)*y+(r[5]??0)*b+(r[9]??0)*m+(r[13]??0),E=(r[2]??0)*y+(r[6]??0)*b+(r[10]??0)*m+(r[14]??0);l=Math.min(l,g),c=Math.max(c,g),h=Math.min(h,R),d=Math.max(d,R),u=Math.min(u,E),f=Math.max(f,E)}let p=new Float32Array(16);Co(p,l,c,h,d,-f-5,-u+5),rt(this.shadowMat,p,r);let v=q(t,en,tn,"shadow");t.viewport(0,0,n,n),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.depthMask(!0),t.disable(t.BLEND),t.clear(t.DEPTH_BUFFER_BIT),t.useProgram(v.p),t.uniformMatrix4fv(v.u.get("uViewProj")??null,!1,this.shadowMat),t.bindVertexArray(this.vaos.opaque),t.enable(t.POLYGON_OFFSET_FILL),t.polygonOffset(1.5,3),t.drawArrays(t.TRIANGLES,0,this.counts.opaque),t.disable(t.POLYGON_OFFSET_FILL),t.bindVertexArray(null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteFramebuffer(s),t.deleteProgram(v.p),this.shadowTex=e,this.shadowTexel=1/n,this.shadowBias=.05/(f-u+10)}setAtlas(t){let o=this.gl,n=o.createTexture();o.bindTexture(o.TEXTURE_2D,n),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,t.canvas),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.generateMipmap(o.TEXTURE_2D),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR_MIPMAP_LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),this.atlasTex=n;let e=[];for(let s of this.world.signs){let r=t.rects.get(s.key);if(!r)continue;let a=yt(s.rect);for(let l=0;l<6;l++){let c=l*5,h=a[c+3]??0,d=a[c+4]??0;e.push(a[c]??0,a[c+1]??0,a[c+2]??0,r.u0+(r.u1-r.u0)*h,r.v0+(r.v1-r.v0)*d)}}o.bindBuffer(o.ARRAY_BUFFER,this.signBuf),o.bufferData(o.ARRAY_BUFFER,new Float32Array(e),o.STATIC_DRAW),this.counts.signs=e.length/5}static screenKey(t){return t.kind==="directory"?`directory:${t.level}`:t.kind==="window"?`store:${t.node??""}`:`${t.kind}:${t.node??""}`}screenGrade(t){return this.screenTex.get(t)?.grade??0}setScreenImage(t,o,n,e,s=!1){let r=this.gl,a=this.screenTex.get(t);if(a&&a.grade>n)return;let l=a?.tex&&a.grade!==4?a.tex:r.createTexture();r.bindTexture(r.TEXTURE_2D,l),s&&r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,o),s&&r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e&&r.generateMipmap(r.TEXTURE_2D),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,e?r.LINEAR_MIPMAP_LINEAR:r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),this.screenTex.set(t,{tex:l,grade:n,lastUsed:performance.now()})}setScreenTexture(t,o,n=null){let e=this.screenTex.get(t)??null;return o?this.screenTex.set(t,{tex:o,grade:4,lastUsed:performance.now()}):n?this.screenTex.set(t,n):this.screenTex.delete(t),e}evict(t){for(let[o,n]of this.screenTex)n.grade!==3||t(o)||(this.gl.deleteTexture(n.tex),this.screenTex.delete(o));for(let[o,n]of this.holoGpu)t(`holo:${o}`)||(this.freeHolo(n),this.holoGpu.delete(o))}setRibbon(t){let o=this.gl;if(!t||t.length<2){this.ribbonCount=0;return}let n=.26,e=[],s=0;for(let r=1;r<t.length;r++){let a=t[r-1],l=t[r];if(!a||!l)continue;let c=l[0]-a[0],h=l[2]-a[2],d=Math.hypot(c,h);if(d<.001)continue;let u=-h/d*n,f=c/d*n,p=(v,y,b)=>e.push(v[0]+u*y,v[1]+.03,v[2]+f*y,b,y);p(a,-1,s),p(l,-1,s+d),p(l,1,s+d),p(a,-1,s),p(l,1,s+d),p(a,1,s),s+=d}o.bindBuffer(o.ARRAY_BUFFER,this.ribbonBuf),o.bufferData(o.ARRAY_BUFFER,new Float32Array(e),o.DYNAMIC_DRAW),this.ribbonCount=e.length/5,this.ribbonLength=s}draw(t,o,n){if(this.tier==="cinematic"){try{if(this.drawCinematic(t,o,n))return}catch(s){console.warn("XI Outlet: the cinematic renderer failed; using the basic one",s)}this.setTier("basic")}let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,null),this.drawScene(t,{viewProj:t.viewProj,invViewProj:t.invViewProj,eye:t.eye,mirror:!1,clipY:0,w:o,h:n},!0)}drawCinematic(t,o,n){let e=this.gl;if(!this.ensureTargets(o,n))return!1;let s=this.scene,r=this.hdr,a=this.post;if(!s||!r||!a)return!1;if(t.mirrorY!==null&&this.mirror){let u=t.mirrorY,f=this.reflect;f.set([1,0,0,0,0,-1,0,0,0,0,1,0,0,2*u,0,1]),rt(this.mirrorVP,t.viewProj,f),vt(this.mirrorInv,this.mirrorVP),e.bindFramebuffer(e.FRAMEBUFFER,this.mirror.fbo),this.drawScene(t,{viewProj:this.mirrorVP,invViewProj:this.mirrorInv,eye:[t.eye[0],2*u-t.eye[1],t.eye[2]],mirror:!0,clipY:u,w:this.mirror.w,h:this.mirror.h},!1)}e.bindFramebuffer(e.FRAMEBUFFER,s.fbo),this.drawScene(t,{viewProj:t.viewProj,invViewProj:t.invViewProj,eye:t.eye,mirror:!1,clipY:0,w:o,h:n},!1),e.bindFramebuffer(e.READ_FRAMEBUFFER,s.fbo),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,r.fbo),e.blitFramebuffer(0,0,o,n,0,0,o,n,e.COLOR_BUFFER_BIT,e.NEAREST),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.disable(e.DEPTH_TEST),e.disable(e.BLEND),e.depthMask(!1),e.bindVertexArray(this.vaos.full),e.activeTexture(e.TEXTURE0);let l=(u,f,p)=>{e.bindFramebuffer(e.FRAMEBUFFER,p.fbo),e.viewport(0,0,p.w,p.h),e.useProgram(u.p),e.bindTexture(e.TEXTURE_2D,f.tex),e.uniform1i(u.u.get("uTex")??null,0),e.uniform2f(u.u.get("uTexel")??null,1/f.w,1/f.h),e.drawArrays(e.TRIANGLES,0,3)},c=this.bloom,h=c[0];if(h){e.useProgram(a.pre.p),e.uniform1f(a.pre.u.get("uThreshold")??null,oe.bloomThreshold),l(a.pre,r,h);for(let u=1;u<c.length;u++){let f=c[u-1],p=c[u];f&&p&&l(a.down,f,p)}e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE);for(let u=c.length-1;u>0;u--){let f=c[u],p=c[u-1];f&&p&&l(a.up,f,p)}e.disable(e.BLEND)}e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,o,n);let d=a.composite;return e.useProgram(d.p),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,r.tex),e.uniform1i(d.u.get("uScene")??null,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,h?.tex??this.black),e.uniform1i(d.u.get("uBloom")??null,1),e.activeTexture(e.TEXTURE0),e.uniform1f(d.u.get("uBloomStrength")??null,h?oe.bloomStrength:0),e.uniform1f(d.u.get("uExposure")??null,t.exposure),e.uniform1f(d.u.get("uGrain")??null,oe.grain),e.uniform1f(d.u.get("uTime")??null,t.time),e.drawArrays(e.TRIANGLES,0,3),e.bindVertexArray(null),e.depthMask(!0),!0}ensureTargets(t,o){if(this.scene&&this.scene.w===t&&this.scene.h===o)return!0;this.freeTargets();let n=this.gl;if(!n.getExtension("EXT_color_buffer_float"))return!1;let e=n.getInternalformatParameter(n.RENDERBUFFER,n.RGBA16F,n.SAMPLES);this.samples=Math.min(4,e&&e.length>0?e[0]??0:0);let s=(c,h)=>{let d=n.createTexture();return n.bindTexture(n.TEXTURE_2D,d),n.texImage2D(n.TEXTURE_2D,0,n.RGBA16F,c,h,0,n.RGBA,n.HALF_FLOAT,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),d},r=()=>n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;{let c=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,c);let h=n.createRenderbuffer();n.bindRenderbuffer(n.RENDERBUFFER,h),this.samples>0?n.renderbufferStorageMultisample(n.RENDERBUFFER,this.samples,n.RGBA16F,t,o):n.renderbufferStorage(n.RENDERBUFFER,n.RGBA16F,t,o),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,h);let d=n.createRenderbuffer();n.bindRenderbuffer(n.RENDERBUFFER,d),this.samples>0?n.renderbufferStorageMultisample(n.RENDERBUFFER,this.samples,n.DEPTH_COMPONENT24,t,o):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT24,t,o),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,d);let u=[h,d].filter(f=>f!==null);if(this.scene={fbo:c,tex:null,rbs:u,w:t,h:o},!r())return this.failTargets()}{let c=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,c);let h=s(t,o);if(n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,h,0),this.hdr={fbo:c,tex:h,rbs:[],w:t,h:o},!r())return this.failTargets()}{let c=Math.max(1,Math.round(t/2)),h=Math.max(1,Math.round(o/2)),d=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,d);let u=s(c,h);n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,u,0);let f=n.createRenderbuffer();if(n.bindRenderbuffer(n.RENDERBUFFER,f),n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_COMPONENT24,c,h),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,f),this.mirror={fbo:d,tex:u,rbs:f?[f]:[],w:c,h},!r())return this.failTargets()}let a=t,l=o;for(let c=0;c<5;c++){a=Math.max(1,Math.round(a/2)),l=Math.max(1,Math.round(l/2));let h=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,h);let d=s(a,l);if(n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,d,0),this.bloom.push({fbo:h,tex:d,rbs:[],w:a,h:l}),!r())return this.failTargets()}return n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindRenderbuffer(n.RENDERBUFFER,null),!0}failTargets(){return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.freeTargets(),!1}freeTargets(){let t=this.gl;for(let o of[this.scene,this.hdr,this.mirror,...this.bloom])if(o){t.deleteFramebuffer(o.fbo),t.deleteTexture(o.tex);for(let n of o.rbs)t.deleteRenderbuffer(n)}this.scene=null,this.hdr=null,this.mirror=null,this.bloom=[]}drawScene(t,o,n){let e=this.gl,s=this.prog;e.viewport(0,0,o.w,o.h),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.disable(e.CULL_FACE),e.disable(e.BLEND),e.depthMask(!0);let r=!o.mirror&&!n&&t.mirrorY!==null&&this.mirror!==null,a=Ar(oe.fog,t.exposure);e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.skyTex),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.shadowTex),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,r?this.mirror?.tex??this.black:this.black),e.activeTexture(e.TEXTURE0);let l=d=>{e.useProgram(d.p);let u=(b,m)=>{let g=d.u.get(b);g&&e.uniform1f(g,m)},f=(b,m)=>{let g=d.u.get(b);g&&e.uniform3f(g,m[0]??0,m[1]??0,m[2]??0)};e.uniformMatrix4fv(d.u.get("uViewProj")??null,!1,o.viewProj),f("uCamPos",o.eye),f("uSun",ke),f("uSunColor",oe.sun),f("uSkyAmb",oe.sky),f("uGroundAmb",oe.ground),f("uInterior",oe.interior),u("uPanel",oe.panel),u("uEmitGain",oe.emit),f("uFog",oe.fog),f("uFogDisplay",a),u("uFogDensity",oe.fogDensity),u("uTime",t.time),u("uDirect",n?1:0),u("uExposure",t.exposure),u("uSkyLod",this.skyLod),u("uClip",o.mirror?1:0),u("uClipY",o.clipY),u("uMirrorOn",r?1:0),u("uMirrorY",t.mirrorY??-1e3);let p=d.u.get("uViewport");p&&e.uniform2f(p,o.w,o.h),u("uShadowOn",this.shadowTex?1:0),u("uShadowTexel",this.shadowTexel),u("uShadowBias",this.shadowBias);let v=d.u.get("uShadowMat");v&&e.uniformMatrix4fv(v,!1,this.shadowMat);let y=(b,m)=>{let g=d.u.get(b);g&&e.uniform1i(g,m)};y("uSky",1),y("uShadow",2),y("uMirror",3)};l(s.lit),e.uniform3f(s.lit.u.get("uOffset")??null,0,0,0),e.bindVertexArray(this.vaos.opaque),e.drawArrays(e.TRIANGLES,0,this.counts.opaque),e.uniform3f(s.lit.u.get("uOffset")??null,0,t.cabY,0),e.bindVertexArray(this.vaos.cab),e.drawArrays(e.TRIANGLES,0,this.counts.cab),l(s.tex),e.uniform1i(s.tex.u.get("uTex")??null,0),e.bindVertexArray(this.vaos.screens);let c=performance.now();this.world.screens.forEach((d,u)=>{let f=i.screenKey(d),p=this.screenTex.get(f);p&&(p.lastUsed=c);let v=d.kind==="store"||d.kind==="directory",y=d.kind==="panel"||d.kind==="board"||d.kind==="examples";e.uniform1i(s.tex.u.get("uMode")??null,v?1:2),e.uniform1f(s.tex.u.get("uHasTex")??null,p?.tex?1:0),e.uniform1f(s.tex.u.get("uFlip")??null,p?.grade===4?1:0);let b=y?[.97,.97,.96]:d.kind==="directory"?[.05,.06,.08]:[.03,.04,.05];e.uniform4f(s.tex.u.get("uPlaceholder")??null,b[0]??0,b[1]??0,b[2]??0,1),e.bindTexture(e.TEXTURE_2D,p?.tex??this.black),e.drawArrays(e.TRIANGLES,u*6,6)}),e.depthMask(!1),l(s.sky),e.uniformMatrix4fv(s.sky.u.get("uInvViewProj")??null,!1,o.invViewProj),e.bindVertexArray(this.vaos.full),e.drawArrays(e.TRIANGLES,0,3),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.POLYGON_OFFSET_FILL),e.polygonOffset(-1,-4),l(s.decal),e.bindVertexArray(this.vaos.decal),e.drawArrays(e.TRIANGLES,0,this.counts.decal),this.ribbonCount>0&&!o.mirror&&(l(s.ribbon),e.uniform1f(s.ribbon.u.get("uLength")??null,this.ribbonLength),e.bindVertexArray(this.vaos.ribbon),e.drawArrays(e.TRIANGLES,0,this.ribbonCount)),this.atlasTex&&this.counts.signs>0&&(l(s.tex),e.uniform1i(s.tex.u.get("uMode")??null,0),e.uniform1f(s.tex.u.get("uHasTex")??null,1),e.uniform1f(s.tex.u.get("uFlip")??null,0),e.bindTexture(e.TEXTURE_2D,this.atlasTex),e.bindVertexArray(this.vaos.signs),e.drawArrays(e.TRIANGLES,0,this.counts.signs));{let d=!1;this.world.overlays.forEach((u,f)=>{let p=this.screenTex.get(u.key);p?.tex&&(d||(l(s.tex),e.uniform1i(s.tex.u.get("uMode")??null,0),e.uniform1f(s.tex.u.get("uHasTex")??null,1),e.uniform1f(s.tex.u.get("uFlip")??null,0),e.bindVertexArray(this.vaos.overlays),d=!0),p.lastUsed=c,e.bindTexture(e.TEXTURE_2D,p.tex),e.drawArrays(e.TRIANGLES,f*6,6))})}if(e.disable(e.POLYGON_OFFSET_FILL),!o.mirror)for(let d of t.holos)this.drawHolo(d,t,n);l(s.glass),e.uniform3f(s.glass.u.get("uOffset")??null,0,0,0),e.uniform1f(s.glass.u.get("uFade")??null,t.fade),e.bindVertexArray(this.vaos.glass);let h=this.world.glassPieces;for(let d=0;d<h.length;d++){let u=h[d]?.centre??[0,0,0];this.dist[d]=(u[0]-o.eye[0])**2+(u[1]-o.eye[1])**2+(u[2]-o.eye[2])**2}this.order.sort((d,u)=>(this.dist[u]??0)-(this.dist[d]??0));for(let d of this.order){let u=h[d];u&&e.drawArrays(e.TRIANGLES,u.first,u.count)}if(!o.mirror&&this.counts.bubbles>0&&(l(s.mote),e.uniform3f(s.mote.u.get("uRight")??null,t.right[0],t.right[1],t.right[2]),e.uniform3f(s.mote.u.get("uUp")??null,t.up[0],t.up[1],t.up[2]),e.bindVertexArray(this.vaos.bubbles),e.drawArraysInstanced(e.TRIANGLES,0,6,this.counts.bubbles)),!o.mirror&&t.dim>.001&&(e.disable(e.DEPTH_TEST),e.useProgram(s.dim.p),e.uniform1f(s.dim.u.get("uDim")??null,t.dim),e.bindVertexArray(this.vaos.full),e.drawArrays(e.TRIANGLES,0,3),e.enable(e.DEPTH_TEST)),!o.mirror&&t.highlight){let{min:d,max:u,rgba:f}=t.highlight;l(s.flat),e.uniform4f(s.flat.u.get("uColor")??null,f[0]*f[3],f[1]*f[3],f[2]*f[3],f[3]),e.bindBuffer(e.ARRAY_BUFFER,this.flatBuf),e.bufferData(e.ARRAY_BUFFER,Pr(d,u),e.DYNAMIC_DRAW),e.bindVertexArray(this.vaos.flat),e.drawArrays(e.TRIANGLES,0,36)}e.bindVertexArray(null),e.depthMask(!0),e.disable(e.BLEND)}owned(t,o,n,e){let s=this.gl,r=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,r),s.bufferData(s.ARRAY_BUFFER,t,s.STATIC_DRAW);let a=this.vaoFor(r,o);return r&&e.push(r),a&&n.push(a),a}holoBuffers(t){let o=this.holoGpu.get(t.node);if(o)return o;let n=[],e=[],s=c=>({vao:c.length>0?this.owned(c,[3,3],n,e):null,count:c.length/Tt}),r=c=>({vao:c.length>0?this.owned(new Float32Array(c.flat()),[3],n,e):null,count:c.length}),a=new Map;for(let c of t.lines){let h=c.color.join(","),d=a.get(h)??{color:c.color,data:[]};a.set(h,d);for(let u=1;u<c.points.length;u++)d.data.push(...c.points[u-1]??[0,0,0],...c.points[u]??[0,0,0])}let l={vaos:n,bufs:e,lit:s(Xt(t.lit)),ghosts:s(Xt(t.ghosts)),lines:[...a.values()].map(c=>({vao:this.owned(new Float32Array(c.data),[3],n,e),count:c.data.length/3,color:c.color})),dots:r(t.dots),beads:r(t.beads),lastUsed:performance.now()};return this.holoGpu.set(t.node,l),l}freeHolo(t){for(let o of t.vaos)this.gl.deleteVertexArray(o);for(let o of t.bufs)this.gl.deleteBuffer(o)}drawHolo(t,o,n){let e=this.gl,s=this.prog,r=t.holo,a=this.holoBuffers(r);if(a.lastUsed=performance.now(),!this.shell){let p=Ho();this.shell={vao:this.vao(p,[3,3]),count:p.length/Tt}}if(!this.beam){let p=Go();this.beam={vao:this.vao(p,[3,3]),count:p.length/Tt}}let l=r.tint,c=(p,v)=>{e.useProgram(p.p),e.uniformMatrix4fv(p.u.get("uViewProj")??null,!1,o.viewProj),e.uniformMatrix4fv(p.u.get("uModel")??null,!1,v);let y=p.u.get("uCamPos");y&&e.uniform3f(y,o.eye[0],o.eye[1],o.eye[2]);let b=p.u.get("uDirect");b&&e.uniform1f(b,n?1:0);let m=p.u.get("uExposure");m&&e.uniform1f(m,o.exposure)},h=p=>{this.beam&&(c(s.beam,t.model),e.uniform1f(s.beam.u.get("uTime")??null,o.time),e.uniform1f(s.beam.u.get("uSide")??null,p),e.bindVertexArray(this.beam.vao),e.drawArrays(e.TRIANGLES,0,this.beam.count))};h(-1),c(s.organ,t.model);let d=(p,v,y,b)=>{!p.vao||p.count===0||(e.uniform3f(s.organ.u.get("uColor")??null,v[0],v[1],v[2]),e.uniform1f(s.organ.u.get("uAlpha")??null,y),e.uniform1f(s.organ.u.get("uPulse")??null,b),e.bindVertexArray(p.vao),e.drawArrays(e.TRIANGLES,0,p.count))};d(a.ghosts,[.42,.5,.58],r.whole?.1:.14,0),d(a.lit,l,.86,t.pulse),c(s.line,t.model);let u=(p,v)=>e.uniform4f(s.line.u.get("uColor")??null,p[0]*v,p[1]*v,p[2]*v,v);e.uniform1f(s.line.u.get("uRound")??null,0);for(let p of a.lines)u(p.color,.92),e.bindVertexArray(p.vao),e.drawArrays(e.LINES,0,p.count);e.uniform1f(s.line.u.get("uRound")??null,1),a.dots.vao&&(u(l,.75),e.uniform1f(s.line.u.get("uPointSize")??null,.017*o.pxPerMetre),e.bindVertexArray(a.dots.vao),e.drawArrays(e.POINTS,0,a.dots.count)),a.beads.vao&&(u(Mr,.95),e.uniform1f(s.line.u.get("uPointSize")??null,.03*o.pxPerMetre),e.bindVertexArray(a.beads.vao),e.drawArrays(e.POINTS,0,a.beads.count)),c(s.line,Rr),e.uniform1f(s.line.u.get("uRound")??null,0),e.bindVertexArray(this.vaos.leaders);for(let[p,v,y]of[[t.rings,Fr,.5],[t.leaders,Sr,.9]])p.length!==0&&(u(v,y),e.bindBuffer(e.ARRAY_BUFFER,this.leaderBuf),e.bufferData(e.ARRAY_BUFFER,p,e.DYNAMIC_DRAW),e.drawArrays(e.LINES,0,p.length/3));let f=Math.floor(t.targets.length/4);if(f>0){let p=new Float32Array(f*36),v=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1];for(let y=0;y<f;y++){let b=t.targets[y*4]??0,m=t.targets[y*4+1]??0,g=t.targets[y*4+2]??0,R=t.targets[y*4+3]??0;for(let E=0;E<6;E++)p.set([b,m,g,v[E*2]??0,v[E*2+1]??0,R],(y*6+E)*6)}e.useProgram(s.reticle.p),e.uniformMatrix4fv(s.reticle.u.get("uViewProj")??null,!1,o.viewProj),e.uniform3f(s.reticle.u.get("uRight")??null,o.right[0],o.right[1],o.right[2]),e.uniform3f(s.reticle.u.get("uUp")??null,o.up[0],o.up[1],o.up[2]),e.uniform3f(s.reticle.u.get("uCamPos")??null,o.eye[0],o.eye[1],o.eye[2]),e.uniform1f(s.reticle.u.get("uTime")??null,o.time),e.uniform1f(s.reticle.u.get("uDirect")??null,n?1:0),e.uniform1f(s.reticle.u.get("uExposure")??null,o.exposure),e.bindBuffer(e.ARRAY_BUFFER,this.reticleBuf),e.bufferData(e.ARRAY_BUFFER,p,e.DYNAMIC_DRAW),e.bindVertexArray(this.vaos.reticles),e.drawArrays(e.TRIANGLES,0,f*6)}c(s.shell,t.model),e.uniform3f(s.shell.u.get("uTint")??null,l[0],l[1],l[2]),e.uniform1f(s.shell.u.get("uWhole")??null,r.whole||r.skin?1:0),e.uniform1f(s.shell.u.get("uTime")??null,o.time),e.uniform1f(s.shell.u.get("uScanY")??null,t.scanY),e.bindVertexArray(this.shell.vao),e.colorMask(!1,!1,!1,!1),e.depthMask(!0),e.drawArrays(e.TRIANGLES,0,this.shell.count),e.colorMask(!0,!0,!0,!0),e.depthMask(!1),e.drawArrays(e.TRIANGLES,0,this.shell.count),h(1)}dispose(){let t=this.gl;for(let o of this.holoGpu.values())this.freeHolo(o);this.holoGpu.clear();for(let o of Object.values(this.prog))t.deleteProgram(o.p);if(this.post)for(let o of Object.values(this.post))t.deleteProgram(o.p);this.freeTargets();for(let o of this.screenTex.values())o.grade!==4&&t.deleteTexture(o.tex);t.deleteTexture(this.skyTex),t.deleteTexture(this.atlasTex),t.deleteTexture(this.shadowTex),t.deleteTexture(this.black)}};function Pr(i,t){let[o,n,e]=i,[s,r,a]=t,l=(c,h,d,u)=>[...c,...h,...d,...c,...d,...u];return new Float32Array([...l([o,n,a],[s,n,a],[s,r,a],[o,r,a]),...l([s,n,e],[o,n,e],[o,r,e],[s,r,e]),...l([s,n,a],[s,n,e],[s,r,e],[s,r,a]),...l([o,n,e],[o,n,a],[o,r,a],[o,r,e]),...l([o,r,a],[s,r,a],[s,r,e],[o,r,e]),...l([o,n,e],[s,n,e],[s,n,a],[o,n,a])])}var Ye=[0,23,0],wr={az:34*Oe,el:7*Oe,dist:160},je=64*Oe,to=34*Oe,_n=[52,280],In=[3*Oe,62*Oe],Lr=3.4,_r=6.8,Ir=1.9;function kn(i){let t=Math.cos(i.el),o=[Ye[0]+i.dist*t*Math.sin(i.az),Ye[1]+i.dist*Math.sin(i.el),Ye[2]+i.dist*t*Math.cos(i.az)],n=Ye[0]-o[0],e=Ye[1]-o[1],s=Ye[2]-o[2];return{eye:o,heading:Ee(n,s),pitch:Math.atan2(e,Math.hypot(n,s)),fov:to,level:null}}function Pt(i,t,o,n,e=Q){return{eye:[t[0],ne(i)+e,t[1]],heading:o,pitch:n,fov:je,level:i}}function De(i){let t=ge(i,0,1);return t*t*(3-2*t)}function At(i,t,o,n){let e=Math.max(.001,Io(t)),s=ge(e/3,3.2,8),r=Math.max(.6,e/s),a=[0];for(let p=1;p<t.length;p++){let v=t[p-1],y=t[p];a.push((a[p-1]??0)+(v&&y?Math.hypot(y[0]-v[0],y[1]-v[1]):0))}let l=p=>{for(let v=1;v<t.length;v++){let y=a[v-1]??0,b=a[v]??0;if(p<=b||v===t.length-1){let m=t[v-1]??[0,0],g=t[v]??m,R=b>y?ge((p-y)/(b-y),0,1):1;return[ye(m[0],g[0],R),ye(m[1],g[1],R)]}}return t[t.length-1]??[0,0]},c=t[t.length-1]??[0,0],h=t[t.length-2]??c,d=Ee(c[0]-h[0],c[1]-h[1]),u=p=>{let v=l(p),y=l(Math.min(e,p+2.4));return Math.hypot(y[0]-v[0],y[1]-v[1])<.05?d:Ee(y[0]-v[0],y[1]-v[1])},f=ne(i);return{duration:r,interruptible:!0,route:t.map(p=>[p[0],f,p[1]]),at(p){let v=ot(p),y=l(v*e),b=u(v*e);b=o.heading+tt(o.heading,b)*De(p/.28),n.heading!==null&&(b+=tt(b,n.heading)*De((p-.66)/.34));let m=ye(ye(o.eye??Q,Q,De(p/.25)),n.eye??Q,De((p-.7)/.3));return Pt(i,y,b,ye(o.pitch,n.pitch,v),m)}}}function kr(i,t,o){let n=ge(.9*Math.abs(t-i)+.9,1.6,4.6),e=s=>ye(ne(i),ne(t),ot(s));return{duration:n,cab:e,at(s){let r=e(s),a=o+tt(o,Math.PI)*De(s*1.6);return{eye:[0,r+Q,0],heading:a,pitch:0,fov:je,level:Math.round(ye(i,t,ot(s)))}}}}function eo(i,t,o,n,e){let s=r=>{let a=1-r,l=a*a*a,c=3*a*a*r,h=3*a*r*r,d=r*r*r;return[0,1,2].map(u=>l*(i.eye[u]??0)+c*(o[u]??0)+h*(n[u]??0)+d*(t.eye[u]??0))};return{duration:e,at(r){let a=ot(r),l=De((r-.15)/.8);return{eye:s(a),heading:i.heading+tt(i.heading,t.heading)*l,pitch:ye(i.pitch,t.pitch,l),fov:ye(i.fov,t.fov,De((r-.3)/.7)),level:r>.7?t.level:i.level}}}}var wt=class{mode="exterior";orbit={...wr};level=0;pos=ht;heading=0;pitch=0;eye=Q;rising=!1;reducedMotion=!1;destination=null;vel=[0,0];legs=[];legT=0;finish=null;idleFor=0;stepBuffer=0;camera(){let t=this.mode==="travel"?this.legs[0]:void 0;return t?t.at(ge(this.legT/t.duration,0,1)):this.mode==="exterior"?kn(this.orbit):Pt(this.level,this.pos,this.heading,this.pitch,this.eye)}cabY(){let t=this.mode==="travel"?this.legs[0]:void 0;if(t?.cab)return t.cab(ge(this.legT/t.duration,0,1));let o=this.camera();return ne(o.level??this.level)}routeAhead(){let t=this.mode==="travel"?this.legs[0]:void 0;if(!t?.route)return null;let o=this.camera(),n=t.route,e=0,s=1/0;for(let r=0;r<n.length-1;r++){let a=n[r];if(!a)continue;let l=Math.hypot(a[0]-o.eye[0],a[2]-o.eye[2]);l<s&&(s=l,e=r)}return[[o.eye[0],n[0]?.[1]??0,o.eye[2]],...n.slice(e+1)]}get travelling(){return this.mode==="travel"}goTo(t,o=this.reducedMotion){let n=this.plan(t);return n?(this.destination=t.kind==="store"||t.kind==="level"?t:null,this.vel=[0,0],o||n.legs.length===0?(this.legs=[],n.finish(),!0):(this.legs=n.legs,this.legT=0,this.finish=n.finish,this.mode="travel",!0)):!1}here(){let t=this.camera();return t.level===null?null:{level:t.level,p:[t.eye[0],t.eye[2]],heading:t.heading,pitch:t.pitch,eye:t.eye[1]-ne(t.level)}}plan(t){let o=this.camera(),n=this.mode==="exterior"?null:this.here(),e=(d,u,f,p=0,v=Q)=>()=>{this.mode="walk",this.level=d,this.pos=u,this.heading=f,this.pitch=p,this.eye=v,this.rising=!1};if(t.kind==="exterior"){let d=kn(this.orbit);return{legs:n?[eo(o,d,[o.eye[0]*1.3,o.eye[1]+10,o.eye[2]*1.3+24],[d.eye[0]*.75,d.eye[1]+12,d.eye[2]*.75],2.6)]:[],finish:()=>{this.mode="exterior",this.idleFor=0}}}let s,r;if(t.kind==="plaza")s=0,r={p:ht,heading:0,pitch:.04,waypoint:"plaza"};else if(t.kind==="level")s=t.level,r=n&&n.level!==s?{p:[0,4],heading:Math.PI,pitch:.08,waypoint:"bridge"}:{p:Je,heading:0,pitch:0,waypoint:"lobby"};else if(t.kind==="store"){let d=ze(t.node);if(!d)return null;s=d.level;let u=t.station?d.stations[t.station]:null;r=u?{p:u.p,heading:u.heading,pitch:u.pitch,waypoint:`${t.station}:${d.node}`,eye:u.eye??Q}:{p:d.view,heading:d.heading,pitch:.09,waypoint:`store:${d.node}`}}else s=t.level,r={p:t.p,heading:Number.NaN,pitch:0,waypoint:null};let a=d=>e(s,r.p,Number.isNaN(d)?n?.heading??0:d,r.pitch,r.eye??Q);if(!n){if(t.kind==="plaza"){let v=Pt(0,ht,0,.04);return{legs:[eo(o,v,[o.eye[0]*.6,o.eye[1]*.55,o.eye[2]*.6+30],[0,10,62],3)],finish:a(0)}}let d=ne(s),u=Pt(s,Je,0,0),f=[eo(o,u,[o.eye[0]*.55,d+Q+14+o.eye[1]*.25,o.eye[2]*.5+42],[0,d+Q+1.5,34],3.2)];if(r.waypoint!=="lobby"){let v=r.waypoint?et(s,Je,r.waypoint):mt(s,Je,r.p);v&&f.push(At(s,v,{heading:0,pitch:0},{heading:Number.isNaN(r.heading)?null:r.heading,pitch:r.pitch,eye:r.eye}))}let p=f[f.length-1];return{legs:f,finish:a(Number.isNaN(r.heading)?p?p.at(1).heading:0:r.heading)}}let l=[],c={heading:n.heading,pitch:n.pitch,eye:n.eye};if(n.level!==s){let d=et(n.level,n.p,"lift");if(!d)return null;l.push(At(n.level,d,c,{heading:null,pitch:0}));let u=l[l.length-1]?.at(1).heading??0;l.push(kr(n.level,s,u)),c={heading:Math.PI,pitch:0,eye:Q};let p=Lo(s,"lift")?.p??[0,0],v=r.waypoint?et(s,p,r.waypoint):mt(s,p,r.p);v&&l.push(At(s,v,c,{heading:Number.isNaN(r.heading)?null:r.heading,pitch:r.pitch,eye:r.eye}))}else{let d=r.waypoint?et(s,n.p,r.waypoint):mt(s,n.p,r.p);if(!d)return null;l.push(At(s,d,c,{heading:Number.isNaN(r.heading)?null:r.heading,pitch:r.pitch,eye:r.eye}))}let h=l[l.length-1];return{legs:l,finish:a(Number.isNaN(r.heading)?h?h.at(1).heading:n.heading:r.heading)}}interrupt(){if(!this.legs[0]?.interruptible)return;let o=this.here();o&&(this.legs=[],this.finish=null,this.mode="walk",this.level=o.level,this.pos=Ot(o.level,o.p,0,0),this.heading=o.heading,this.pitch=o.pitch,this.eye=o.eye)}update(t,o){let n=o.forward!==0||o.strafe!==0||o.turn!==0||o.lookX!==0||o.lookY!==0||o.zoom!==0;if(this.mode==="travel")if(n&&this.legs[0]?.interruptible)this.interrupt();else{this.legT+=t;let f=this.legs[0];for(;f&&this.legT>=f.duration;)this.legT-=f.duration,this.legs.shift(),f=this.legs[0];if(!f){let p=this.finish;this.finish=null,this.legT=0,p?.()}return!0}if(this.mode==="exterior"){let f=this.orbit,p=f.az-o.lookX*.0052-o.turn*t*.9,v=ge(f.el+o.lookY*.0042+o.forward*t*.5,In[0],In[1]),y=ge(f.dist*Math.exp(o.zoom*.0011-o.strafe*0),_n[0],_n[1]);this.idleFor=n?0:this.idleFor+t,!this.reducedMotion&&this.idleFor>5&&(p+=t*.035);let b=p!==f.az||v!==f.el||y!==f.dist;return this.orbit={az:p,el:v,dist:y},b}this.heading+=o.lookX*.0042+o.turn*Ir*t,this.pitch=ge(this.pitch-o.lookY*.0036,-.95,.95),o.zoom!==0&&(this.stepBuffer=ge(this.stepBuffer-o.zoom*.01,-6,6));let e=this.stepBuffer*Math.min(1,t*6);if(this.stepBuffer-=e,(o.forward!==0||o.strafe!==0||Math.abs(this.stepBuffer)>.01)&&this.eye!==Q&&(this.rising=!0),this.rising){let f=this.eye+(Q-this.eye)*Math.min(1,t*5);this.eye=this.reducedMotion||Math.abs(Q-f)<.01?Q:f,this.eye===Q&&(this.rising=!1)}let r=o.run?_r:Lr,a=Math.sin(this.heading),l=-Math.cos(this.heading),c=[(a*o.forward-l*o.strafe)*r,(l*o.forward+a*o.strafe)*r],h=1-Math.exp(-t*10);this.vel=[ye(this.vel[0],c[0],h),ye(this.vel[1],c[1],h)];let d=this.vel[0]*t+a*e,u=this.vel[1]*t+l*e;return Math.abs(d)+Math.abs(u)>1e-6&&(this.pos=Ot(this.level,this.pos,d,u)),n||Math.abs(this.vel[0])+Math.abs(this.vel[1])>.01||this.eye!==Q&&this.rising}};var xe="#0C1824",Nn="#3A4A5A",se="#5A6A7A",Nr="#DCE2E8",Be="#0B0D10",lt="rgba(205,210,215,0.85)",Ae="#C9CED4",st="#23272C",Vr="#E2DCD1",me="#E3232C",U='"Poppins", "Inter", system-ui, sans-serif',w='"Inter", system-ui, sans-serif';async function Vn(){if(typeof document>"u"||!document.fonts)return;let i=["500 64px Poppins","700 64px Poppins","400 32px Inter","500 32px Inter","600 32px Inter"].map(t=>document.fonts.load(t).catch(()=>[]));await Promise.race([Promise.all(i),new Promise(t=>setTimeout(t,1500))])}function Ne(i,t){let o=document.createElement("canvas");o.width=i,o.height=t;let n=o.getContext("2d");if(!n)throw new Error("2D canvas unavailable");return[o,n]}function On(i,t,o,n,e,s){let r=Math.min(s,n/2,e/2);i.beginPath(),i.moveTo(t+r,o),i.arcTo(t+n,o,t+n,o+e,r),i.arcTo(t+n,o+e,t,o+e,r),i.arcTo(t,o+e,t,o,r),i.arcTo(t,o,t+n,o,r),i.closePath()}function F(i,t,o,n,e,s=!0){let r=i;if("letterSpacing"in r){r.letterSpacing=`${e}px`;let l=i.measureText(t).width;return s&&i.fillText(t,o,n),r.letterSpacing="0px",l}let a=o;for(let l of t)s&&i.fillText(l,a,n),a+=i.measureText(l).width+e;return a-o}function _t(i,t,o,n,e,s){i.beginPath(),i.moveTo(t+s,o),i.lineTo(t+n,o),i.lineTo(t+n,o+e-s),i.lineTo(t+n-s,o+e),i.lineTo(t,o+e),i.lineTo(t,o+s),i.closePath()}function Pe(i,t,o){let n=t.split(/\s+/),e=[],s="";for(let r of n){let a=s?`${s} ${r}`:r;i.measureText(a).width>o&&s?(e.push(s),s=r):s=a}return s&&e.push(s),e}var _e=i=>String(i).padStart(2,"0");function Or(i){let t=ze(i),o=Y.node(i),n=o?.tier??"T01";return{key:`store:${i}`,aspect:5.6/.95,draw(e,s,r){e.fillStyle=Be,e.fillRect(2,2,s-4,r-4),e.lineWidth=Math.max(2,r*.02),e.strokeStyle=lt,e.strokeRect(3,3,s-6,r-6),e.textBaseline="middle",e.font=`500 ${Math.round(r*.3)}px ${U}`,e.fillStyle=X[n];let a=r*.42,l=F(e,i,a,r/2+1,r*.06);e.fillStyle="rgba(205,210,215,0.5)",e.fillRect(a+l+r*.24,r*.3,Math.max(1,r*.012),r*.4),e.font=`500 ${Math.round(r*.17)}px ${w}`;let c=`LEVEL ${_e((t?.level??0)+1)} \xB7 ${_e(t?.number??0)}`,h=F(e,c,0,0,r*.05,!1),d=a+l+r*.5,u=(o?.name??i).toUpperCase(),f=r*.3,p=r*.16,v=g=>(e.font=`500 ${Math.round(f)}px ${U}`,F(e,u,0,0,p,!1)<=g),y=s-r*.5-h-r*.3-d,b=s-r*.5-d,m=!0;for(;!v(y)&&f>r*.24;)f-=1,p=Math.max(r*.05,p-.6);if(!v(y))for(m=!1,f=r*.3,p=r*.16;!v(b)&&f>r*.18;)f-=1,p=Math.max(r*.03,p-.6);e.fillStyle="#F1F3F5",e.font=`500 ${Math.round(f)}px ${U}`,F(e,u,d,r/2+1,p),m&&(e.fillStyle=Ae,e.font=`500 ${Math.round(r*.17)}px ${w}`,F(e,c,s-r*.5-h,r/2+1,r*.05))}}}function Cr(i){let t=Z[i];return{key:`level:${i}`,aspect:5.4/1.1,draw(o,n,e){o.fillStyle=Be,o.fillRect(2,2,n-4,e-4),o.lineWidth=Math.max(2,e*.02),o.strokeStyle=lt,o.strokeRect(3,3,n-6,e-6),o.textBaseline="alphabetic",o.fillStyle=X[t?.tier??"T01"],o.fillRect(e*.34,e*.24,Math.max(2,e*.025),e*.52);let s=e*.6;o.fillStyle="#F1F3F5",o.font=`500 ${Math.round(e*.28)}px ${U}`,F(o,`LEVEL ${_e(i+1)}`,s,e*.48,e*.12);let r=n-s-e*.3,a=`${t?.tier??""} \xB7 ${(t?.name??"").toUpperCase()}`,l=e*.14,c=e*.05;for(;o.font=`500 ${Math.round(l)}px ${w}`,!(F(o,a,0,0,c,!1)<=r||l<=e*.1);)l-=1,c=Math.max(e*.015,c-.3);o.fillStyle=Ae,F(o,a,s,e*.76,c)}}}function Dr(i){let t=Z[i];return{key:`levelno:${i}`,aspect:7.2/1.8,draw(o,n,e){o.fillStyle=Vr,o.fillRect(0,e*.08,n,e*.84),o.fillStyle="rgba(35,39,44,0.18)",o.fillRect(0,e*.08,n,Math.max(1,e*.01)),o.textBaseline="alphabetic",o.font=`500 ${Math.round(e*.58)}px ${U}`,o.fillStyle=st;let s=F(o,_e(i+1),e*.22,e*.72,e*.08);o.fillStyle=X[t?.tier??"T01"],o.fillRect(e*.22+s+e*.2,e*.3,Math.max(2,e*.025),e*.42),o.fillStyle=st,o.font=`500 ${Math.round(e*.12)}px ${U}`;let r=(t?.name??"").toUpperCase().split(" "),a=Math.ceil(r.length/2);F(o,r.slice(0,a).join(" "),e*.22+s+e*.42,e*.48,e*.05),F(o,r.slice(a).join(" "),e*.22+s+e*.42,e*.69,e*.05)}}}var Br={key:"crown",aspect:22/1.75,draw(i,t,o){i.textBaseline="middle",i.font=`500 ${Math.round(o*.44)}px ${U}`;let n=[[kt.parent,st],[" // ",me],["XI OUTLET",st]],e=o*.26,s=n.reduce((a,[l])=>a+F(i,l,0,0,e,!1),0),r=(t-s)/2;for(let[a,l]of n)i.fillStyle=l,r+=F(i,a,r,o*.5,e)}},Ur={key:"entrance",aspect:7.6/1.3,draw(i,t,o){i.fillStyle=Be,i.fillRect(2,2,t-4,o-4),i.lineWidth=Math.max(2,o*.02),i.strokeStyle=lt,i.strokeRect(3,3,t-6,o-6),i.textBaseline="middle",i.fillStyle="#F1F3F5",i.font=`500 ${Math.round(o*.3)}px ${U}`;let n="XI OUTLET",e=F(i,n,0,0,o*.2,!1);F(i,n,(t-e)/2,o*.4,o*.2),i.fillStyle=Ae,i.font=`500 ${Math.round(o*.12)}px ${w}`;let s=`${kt.research} \xB7 EXPERIENCE INTERFACE`,r=F(i,s,0,0,o*.06,!1);F(i,s,(t-r)/2,o*.74,o*.06),i.fillStyle=me,i.fillRect((t-o*.5)/2,o*.585,o*.5,Math.max(2,o*.025))}};function Cn(){let i=[...Y.nodes.map(c=>Or(c.id)),...Z.map(c=>Cr(c.index)),...Z.map(c=>Dr(c.index)),Br,Ur,...Y.nodes.map(c=>$r(c.id)),...Hr,Gr],t=2048,o=112,n=6,e=c=>{let h=0,d=0,u=0;for(let f of i){let p=f.key.startsWith("levelno")?o*1.5:o,v=Math.min(t,Math.round(p*f.aspect));h+v>t&&(h=0,d+=u+n,u=0),u=Math.max(u,p),c?.(f,h,d,v,p),h+=v+n}return d+u},s=Math.ceil(e(null)/256)*256,[r,a]=Ne(t,s),l=new Map;return e((c,h,d,u,f)=>{a.save(),a.translate(h,d),a.beginPath(),a.rect(0,0,u,f),a.clip(),c.draw(a,u,f),a.restore(),l.set(c.key,{u0:(h+.5)/t,v0:(d+.5)/s,u1:(h+u-.5)/t,v1:(d+f-.5)/s})}),{canvas:r,rects:l}}function $r(i){let t=Y.node(i);return{key:`blade:${i}`,aspect:1.3/.62,draw(o,n,e){o.fillStyle=Be,o.fillRect(2,2,n-4,e-4),o.lineWidth=Math.max(2,e*.025),o.strokeStyle=lt,o.strokeRect(3,3,n-6,e-6),o.fillStyle=X[t?.tier??"T01"],o.fillRect(e*.16,e*.2,Math.max(2,e*.03),e*.3),o.fillStyle="#F1F3F5",o.textBaseline="middle",o.font=`500 ${Math.round(e*.25)}px ${U}`,F(o,i,e*.3,e*.36,e*.05),o.fillStyle=Ae,o.font=`500 ${Math.round(e*.15)}px ${U}`;let s=(t?.name??"").toUpperCase();for(;s.length>3&&F(o,s,0,0,e*.05,!1)>n-e*.32;)s=s.slice(0,-1);F(o,s===(t?.name??"").toUpperCase()?s:`${s.trim()}\u2026`,e*.16,e*.72,e*.05)}}}var Hr=[["model","01","MODEL"],["body","02","BODY MAP"],["lesson","03","LESSON"],["examples","05","EXAMPLES"],["theater","07","THEATER"]].map(([i,t,o])=>({key:`station:${i}`,aspect:1.3/.46,draw(n,e,s){On(n,2,2,e-4,s-4,s*.1);let r=n.createLinearGradient(0,0,e,s);r.addColorStop(0,"#D3D8DD"),r.addColorStop(.5,"#BCC2C9"),r.addColorStop(1,"#CBD0D6"),n.fillStyle=r,n.fill(),n.textBaseline="middle",n.fillStyle=me,n.font=`600 ${Math.round(s*.32)}px ${w}`;let a=F(n,t,s*.36,s/2+1,s*.03);n.fillStyle=st,n.font=`500 ${Math.round(s*.26)}px ${U}`,F(n,o,s*.36+a+s*.22,s/2+1,s*.1)}})),Gr={key:"theater:marquee",aspect:3.4/.66,draw(i,t,o){i.fillStyle=Be,i.fillRect(2,2,t-4,o-4),i.strokeStyle="rgba(231,201,160,0.55)",i.lineWidth=Math.max(2,o*.025),i.strokeRect(3,3,t-6,o-6),i.textBaseline="middle",i.fillStyle="#E7C9A0",i.font=`600 ${Math.round(o*.15)}px ${w}`;let n="NOW SHOWING",e=F(i,n,0,0,o*.06,!1),s=t-o*.42-e;F(i,n,s,o/2+1,o*.06),i.beginPath(),i.arc(s-o*.2,o/2,o*.055,0,Math.PI*2),i.fill(),i.fillStyle=me,i.font=`600 ${Math.round(o*.28)}px ${w}`;let r=F(i,"07",o*.42,o/2+1,o*.02);i.fillStyle="#F1F3F5";let a=o*.28;i.font=`500 ${Math.round(a)}px ${U}`;let l=o*.42+r+o*.24;for(;F(i,"XI THEATER",0,0,a*.3,!1)>s-o*.5-l&&a>o*.18;)a-=1,i.font=`500 ${Math.round(a)}px ${U}`;F(i,"XI THEATER",l,o/2+1,a*.3)}};function Lt(i,t,o,n,e){i.font=`600 ${e}px ${w}`,i.fillStyle=t.status==="sourced"?"#0672A8":se,F(i,uo[t.status].toUpperCase(),o,n,e*.08)}function Dn(i){let[n,e]=Ne(1024,646),s=Y.node(i),r=s?.content;e.fillStyle="#FFFFFF",e.fillRect(0,0,1024,646),e.fillStyle=X[s?.tier??"T01"],e.fillRect(0,0,10,646),e.textBaseline="alphabetic";let a=56;e.font=`500 34px ${U}`;let l=F(e,i,0,0,2,!1);_t(e,a,40,l+30,52,10),e.fillStyle=X[s?.tier??"T01"],e.fill(),e.fillStyle="#FFFFFF",F(e,i,a+15,79,2),e.fillStyle=xe,e.font=`500 40px ${U}`,F(e,(s?.name??i).toUpperCase(),a+l+54,81,5),e.fillStyle=se,e.font=`400 22px ${w}`,r&&e.fillText(`${r.kind[0]?.toUpperCase()??""}${r.kind.slice(1)} \xB7 ${r.category}`,a,128);let c=182,h=d=>{e.fillStyle=se,e.font=`600 18px ${w}`,F(e,d,a,c,3),e.fillStyle=me,e.fillRect(a,c+10,34,3),c+=44};if(r){h("03  WHAT IT IS"),e.fillStyle=xe,e.font=`400 25px ${w}`;let d=Pe(e,r.definition.text,1024-a*2);for(let u of d.slice(0,4))e.fillText(u,a,c),c+=34;if(Lt(e,r.definition,a,c+2,14),c+=46,r.functions.length>0){h("04  WHAT IT DOES"),e.font=`400 23px ${w}`;for(let u of r.functions.slice(0,4)){if(c>606)break;e.fillStyle=X[s?.tier??"T01"],e.fillRect(a,c-9,8,8),e.fillStyle=xe,e.font=`400 23px ${w}`;let f=Pe(e,u.text,1024-a*2-160);e.fillText(f[0]??"",a+24,c),Lt(e,u,1024-a-120,c-2,13),c+=f.length>1?30:36,f[1]&&(e.fillStyle=xe,e.font=`400 23px ${w}`,e.fillText(`${f[1]}${f.length>2?"\u2026":""}`,a+24,c),c+=36)}}}return e.fillStyle=se,e.font=`400 16px ${w}`,e.fillText("Illustrative and educational. Full entry, with sources: the store panel or the node page.",a,620),n}var Bn={SW:"SOUTH",SE:"SOUTH",ES:"EAST",EN:"EAST",NE:"NORTH",NW:"NORTH",WN:"WEST",WS:"WEST"};function Un(i){let[n,e]=Ne(1024,777),s=Z[i],r=X[s?.tier??"T01"],a=e.createLinearGradient(0,0,0,777);a.addColorStop(0,"#15181C"),a.addColorStop(1,Be),e.fillStyle=a,e.fillRect(0,0,1024,777),e.textBaseline="alphabetic",e.fillStyle="#F1F3F5",e.font=`500 44px ${U}`,F(e,`LEVEL ${_e(i+1)}`,48,86,14),e.fillStyle=r,e.fillRect(48,104,60,5),e.fillStyle=Ae,e.font=`500 18px ${w}`,F(e,`${s?.tier??""} \xB7 ${(s?.name??"").toUpperCase()}`,48,146,4);let l=400,c=48,h=190,d=l/(k*2),u=N=>[c+(N[0]+k)*d,h+(N[1]+k)*d];e.lineWidth=2,e.strokeStyle="#3A3F46",e.strokeRect(c,h,l,l);for(let N of s?.bays??[]){e.beginPath(),N.poly.forEach((G,W)=>{let[O,z]=u(G);W===0?e.moveTo(O,z):e.lineTo(O,z)}),e.closePath();let x=s?.stores.find(G=>G.bay.id===N.id);e.fillStyle=x?`${r}55`:N.use==="lobby"?"#2A2F3680":"#3A403A60",e.fill(),e.stroke();let[M,V]=u(Fe(N.id,(L+k)/2,N.use==="lobby"?0:6));e.fillStyle="#FFFFFF",e.font=`600 17px ${w}`;let _=x?x.node:N.use==="lounge"?"LOUNGE":N.id==="SW"?"":"LOBBY";_&&e.fillText(_,M-e.measureText(_).width/2,V+6)}let[f,p]=u([-1.3,0]);e.fillStyle="#3A3F46",e.fillRect(f,p,2.6*d,P*d);let[v,y]=u([-P,-P]);e.strokeStyle="#6A717A",e.setLineDash([6,5]),e.strokeRect(v,y,P*2*d,P*2*d),e.setLineDash([]);let[b,m]=u([0,0]);e.beginPath(),e.arc(b,m,K*d,0,Math.PI*2),e.fillStyle="#9AA1A9",e.fill(),e.fillStyle=Be,e.font=`600 13px ${w}`,e.fillText("LIFT",b-e.measureText("LIFT").width/2,m+5);let[g,R]=u(Me);e.beginPath(),e.arc(g,R,9,0,Math.PI*2),e.fillStyle=me,e.fill(),e.fillStyle="#FFFFFF",e.font=`600 15px ${w}`,F(e,"YOU ARE HERE",g+16,R+5,1),e.fillStyle=Ae,e.font=`600 14px ${w}`,e.fillText("N",c+l/2-5,h-10);let E=220,A=500;e.fillStyle=Ae,e.font=`600 15px ${w}`,F(e,"STORES ON THIS LEVEL",A,E-26,4);for(let N of s?.stores??[])e.fillStyle=r,_t(e,A,E,74,38,8),e.fill(),e.fillStyle="#FFFFFF",e.font=`500 20px ${U}`,e.fillText(N.node,A+12,E+27),e.font=`500 23px ${U}`,F(e,N.name.toUpperCase(),A+92,E+27,2),e.fillStyle=Ae,e.font=`500 14px ${w}`,F(e,`${Bn[N.bay.id]} WING`,A+92,E+52,3),E+=84;return e.fillStyle=Ae,e.font=`400 16px ${w}`,e.fillText("Lift in the atrium: every level, Level 01 at the street.",48,737),n}var at={w:560,h:797};function oo(i){let o=at.h-128,n=Math.min(68,(o-338)/Math.max(1,i));return Array.from({length:i},(e,s)=>(338+n*(s+.5))/at.h)}function $n(i,t){let{w:o,h:n}=at,[e,s]=Ne(o,n),r=Y.node(i),a=r?.content?.bodyMap,l=r?.tier??"T01";s.fillStyle="#FFFFFF",s.fillRect(0,0,o,n),s.strokeStyle=Nr,s.lineWidth=3,s.strokeRect(1.5,1.5,o-3,n-3),s.strokeStyle=xe,s.lineWidth=3;for(let[v,y,b,m]of[[10,10,1,1],[o-10,10,-1,1],[10,n-10,1,-1],[o-10,n-10,-1,-1]])s.beginPath(),s.moveTo(v+b*22,y),s.lineTo(v,y),s.lineTo(v,y+m*22),s.stroke();s.textBaseline="alphabetic",s.fillStyle=me,s.beginPath(),s.arc(34,44,5,0,Math.PI*2),s.fill(),s.fillStyle=se,s.font=`600 15px ${w}`,F(s,"02  SUBJECT // BODY MAP",48,50,2.5),s.fillStyle=X[l],s.font=`600 15px ${w}`;let c=F(s,`${i} \xB7 ${l}`,0,0,2,!1);F(s,`${i} \xB7 ${l}`,o-30-c,50,2),s.fillStyle=xe,s.font=`500 36px ${U}`,F(s,(r?.name??i).toUpperCase(),30,104,4),s.fillStyle=se,s.font=`600 14px ${w}`,a&&F(s,Fo[a.scope].toUpperCase(),30,136,2);let h=178;if(a){s.fillStyle=xe,s.font=`400 20px ${w}`;for(let v of Pe(s,a.where.text,o-60).slice(0,5))s.fillText(v,30,h),h+=27;Lt(s,a.where,30,h+2,12)}let d=a?ut(a):[],u=oo(d.length);d.forEach((v,y)=>{let b=(u[y]??0)*n,m=52,g=t?o-30-m:30;s.strokeStyle=me,s.lineWidth=2.5,s.strokeRect(g,b-17,m,34),s.fillStyle="#C9141E",s.font=`600 18px ${w}`;let R=String(v.index+1).padStart(2,"0");s.fillText(R,g+(m-s.measureText(R).width)/2,b+6);let E=t?30:30+m+16,A=o-60-m-16;s.fillStyle=xe,s.font=`600 19px ${w}`,s.fillText(Pe(s,v.label,A)[0]??v.label,E,b-2),s.fillStyle=se,s.font=`600 12px ${w}`;let N=[v.zone,v.region==="body"?"":`GRID ${v.grid}`,v.posterior?"BEHIND OTHER ORGANS":"",v.example?"EXAMPLE SITE":""].filter(Boolean).join(" \xB7 ");F(s,N.toUpperCase(),E,b+18,1.2)});let f=a?.overlays??[],p=n-98;if(f.length>0){s.fillStyle=se,s.font=`600 12px ${w}`,F(s,"OVERLAY",30,p,2);let v=110;for(let y of f)for(let b of Mo[y])s.fillStyle=b.color==="accent"?X[l]:b.color,s.fillRect(v,p-6,18,3),s.fillStyle=Nn,s.font=`400 13px ${w}`,s.fillText(b.label,v+24,p),v+=24+s.measureText(b.label).width+18,v>o-120&&(v=110,p+=20)}return s.fillStyle=se,s.font=`600 11px ${w}`,F(s,"ILLUSTRATIVE \xB7 NOT TO SCALE \xB7 FRONT VIEW",30,n-44,1.5),F(s,"THE SUBJECT'S RIGHT IS ON YOUR LEFT",30,n-26,1.5),e}function Hn(i){let[n,e]=Ne(1024,853),s=Y.node(i),r=s?.content,a=s?.tier??"T01";e.fillStyle="#FFFFFF",e.fillRect(0,0,1024,853),e.fillStyle=X[a],e.fillRect(0,0,1024,8),e.textBaseline="alphabetic";let l=(y,b,m,g)=>{e.fillStyle=xe,e.font=`600 30px ${w}`;let R=F(e,y,m,g,1);e.font=`500 22px ${U}`,F(e,b,m+R+16,g-2,4),e.fillStyle=me,e.fillRect(m,g+12,34,3)};l("05","EXAMPLES",48,72),l("06","CONNECTED STORES",580,72);let c=Y.factorsOf(i).flatMap(y=>y.links.filter(b=>b.node===i).map(b=>({head:lo.find(m=>m.id===y.discipline)?.name??"",name:y.name,claim:b.effect}))),h=Y.systemsOf(i).map(y=>({head:co.find(b=>b.id===y.system)?.name??"",name:"",claim:y.rationale})),d=(c.length>0?c:h).slice(0,3),u=132,f=470;if(d.length===0){e.fillStyle=se,e.font=`400 20px ${w}`;for(let y of Pe(e,"No nutrition, movement or operating-system examples are linked to this node yet.",f))e.fillText(y,48,u),u+=28;u+=16}for(let y of d){if(e.fillStyle=X[a],e.fillRect(48,u-16,4,20),e.fillStyle=se,e.font=`600 14px ${w}`,F(e,y.head,62,u,2.5),y.name){e.fillStyle=xe,e.font=`600 18px ${w}`;let m=F(e,y.head,0,0,2.5,!1);e.fillText(y.name,62+m+14,u+1)}u+=30,e.fillStyle=xe,e.font=`400 19px ${w}`;let b=Pe(e,y.claim.text,f-14);for(let m of b.slice(0,4))e.fillText(m,62,u),u+=26;if(Lt(e,y.claim,62,u+2,12),u+=38,u>633)break}let p=r?.synonyms??[];if(p.length>0&&u<733){e.fillStyle=se,e.font=`600 14px ${w}`,F(e,"ALSO KNOWN AS",48,u+6,2.5),u+=34,e.fillStyle=Nn,e.font=`400 18px ${w}`;for(let y of Pe(e,p.slice(0,8).join(" \xB7 "),f).slice(0,3))e.fillText(y,48,u),u+=25}let v=132;for(let y of Y.relationshipsOf(i).slice(0,6)){let b=y.from===i,m=Y.node(b?y.to:y.from),g=m?ze(m.id):void 0;if(!m)continue;e.fillStyle=se,e.font=`400 16px ${w}`;let R=ho.find(E=>E.id===y.type)?.verb??y.type;e.fillText(b?`This ${R}`:`${R[0]?.toUpperCase()??""}${R.slice(1)} this`,580,v),v+=12,e.fillStyle=X[m.tier],_t(e,580,v,64,30,7),e.fill(),e.fillStyle="#FFFFFF",e.font=`500 16px ${U}`,e.fillText(m.id,589,v+21),e.fillStyle=xe,e.font=`600 19px ${w}`,e.fillText(m.name,656,v+21),e.fillStyle=se,e.font=`600 12px ${w}`,F(e,`LEVEL ${_e((g?.level??0)+1)} \xB7 ${g?Bn[g.bay.id]:""} WING`,656,v+42,1.5),v+=72}return e.fillStyle=se,e.font=`400 15px ${w}`,e.fillText("Every line comes from the registry, with its evidence status. Sources are on the node page.",48,823),n}function Gn(i){let[n,e]=Ne(384,544),s=Y.node(i),r=ze(i),a=s?.tier??"T01";e.fillStyle="rgba(11,13,16,0.9)",e.fillRect(0,0,384,544),e.strokeStyle=lt,e.lineWidth=3,e.strokeRect(1.5,1.5,381,541),e.fillStyle=X[a],e.fillRect(30,40,4,64),e.textBaseline="alphabetic",e.font=`500 112px ${U}`,F(e,i,26,210,6),e.fillStyle=me,e.fillRect(30,240,46,4),e.fillStyle="#F1F3F5";let l=34;e.font=`500 ${l}px ${U}`;let c=(s?.name??i).toUpperCase();for(;F(e,c,0,0,7,!1)>324&&l>18;)l-=2,e.font=`500 ${l}px ${U}`;F(e,c,30,300,7),e.fillStyle=Ae,e.font=`400 18px ${w}`;let h=340;for(let d of Pe(e,s?.content?.category??"",324).slice(0,2))e.fillText(d,30,h),h+=25;return e.font=`600 13px ${w}`,F(e,`LEVEL ${_e((r?.level??0)+1)} \xB7 STORE ${_e(r?.number??0)}`,30,478,3.5),F(e,"LIVE MODEL \xB7 BODY MAP \xB7 LESSON",30,504,3),n}function Wn(i){let[o,n]=Ne(384,384),e=Y.node(i),s=e?.tier??"T01",r=384/2;n.beginPath(),n.arc(r,r,r-6,0,Math.PI*2),n.lineWidth=10,n.strokeStyle="rgba(200,206,212,0.95)",n.stroke(),n.beginPath(),n.arc(r,r,r-20,0,Math.PI*2),n.lineWidth=3,n.strokeStyle=X[s],n.stroke(),n.strokeStyle="rgba(200,206,212,0.85)",n.lineWidth=2;for(let h=0;h<48;h++){let d=h/48*Math.PI*2,u=r-30,f=r-(h%12===0?50:h%4===0?42:36);n.beginPath(),n.moveTo(r+Math.sin(d)*u,r-Math.cos(d)*u),n.lineTo(r+Math.sin(d)*f,r-Math.cos(d)*f),n.stroke()}n.textBaseline="alphabetic",n.fillStyle="rgba(214,219,224,0.96)",n.font=`500 70px ${U}`;let a=F(n,i,0,0,6,!1);F(n,i,r-a/2,r+16,6),n.font=`600 16px ${w}`;let l=(e?.name??"").toUpperCase(),c=F(n,l,0,0,5,!1);return F(n,l,r-c/2,r+56,5),n.fillStyle=me,n.fillRect(r-16,r+72,32,3),o}function zn(i){return new Promise(t=>{let o=new Image;o.decoding="async",o.onload=()=>t(o),o.onerror=()=>t(null),o.src=i})}var Wr={w:1280,h:720};function Xn(i){let{w:t,h:o}=Wr,[n,e]=Ne(t,o),s=Y.node(i),r=s?.tier??"T01",a=Y.videosOf(i),l=e.createRadialGradient(t*.42,o*.38,40,t*.5,o*.5,t*.75);l.addColorStop(0,"#1B1D21"),l.addColorStop(1,"#060708"),e.fillStyle=l,e.fillRect(0,0,t,o);let c=e.createLinearGradient(0,0,t*.6,0);c.addColorStop(0,`${X[r]}55`),c.addColorStop(1,`${X[r]}00`),e.fillStyle=c,e.fillRect(0,0,t*.6,6),e.fillStyle="rgba(255,255,255,0.025)";for(let g=0;g<o;g+=4)e.fillRect(0,g,t,1);e.textBaseline="alphabetic",e.fillStyle=me,e.font=`600 26px ${w}`;let h=F(e,"07",56,78,1);e.fillStyle="#FFFFFF",e.font=`500 28px ${U}`,F(e,"XI THEATER",56+h+18,78,8),e.font=`500 26px ${U}`;let d=(s?.name??i).toUpperCase(),u=F(e,d,0,0,4,!1);e.font=`500 22px ${U}`;let f=F(e,i,0,0,2,!1)+26,p=t-56;if(e.fillStyle="#FFFFFF",e.font=`500 26px ${U}`,F(e,d,p-u,78,4),e.fillStyle=X[r],_t(e,p-u-18-f,50,f,38,8),e.fill(),e.fillStyle="#FFFFFF",e.font=`500 22px ${U}`,F(e,i,p-u-18-f+13,77,2),e.fillStyle="#E7C9A0",e.font=`600 15px ${w}`,F(e,a.length>0?`NOW SHOWING \xB7 ${a.length===1?"ONE FILM":`${a.length} FILMS`}`:"PROGRAMME IN PREPARATION",56,122,3.5),a.length===0){e.fillStyle="#FFFFFF",e.font=`500 40px ${U}`;let g="PROGRAMME IN PREPARATION",R=F(e,g,0,0,6,!1);F(e,g,(t-R)/2,o/2,6),e.fillStyle="#9FB0C2",e.font=`400 22px ${w}`;let E="No video meets the bar for this subject yet. The other stations teach it.";e.fillText(E,(t-e.measureText(E).width)/2,o/2+46)}let v=a.length===1?760:560,y=48,b=a.length===1?(t-v)/2:(t-v*2-y)/2;a.forEach((g,R)=>{let E=b+R*(v+y),A=168;On(e,E,A,v,400,20),e.fillStyle="rgba(255,255,255,0.055)",e.fill(),e.strokeStyle="rgba(255,255,255,0.16)",e.lineWidth=2,e.stroke(),e.fillStyle=me,e.font=`600 16px ${w}`;let x=F(e,_e(R+1),E+32,A+52,1);e.fillStyle="#FFFFFF",F(e,fo[g.role].toUpperCase(),E+32+x+12,A+52,3),e.strokeStyle="#E7C9A0",e.lineWidth=3,e.beginPath(),e.arc(E+v-62,A+58,28,0,Math.PI*2),e.stroke(),e.fillStyle="#E7C9A0",e.beginPath(),e.moveTo(E+v-70,A+44),e.lineTo(E+v-48,A+58),e.lineTo(E+v-70,A+72),e.closePath(),e.fill(),e.fillStyle="#FFFFFF",e.font=`500 30px ${U}`;let M=A+124;for(let _ of Pe(e,g.title,v-64).slice(0,3))e.fillText(_,E+32,M),M+=40;e.fillStyle="#C9D6E3",e.font=`600 18px ${w}`,e.fillText(`${g.channel} \xB7 ${g.published}`,E+32,M+10),e.fillStyle="#9FB0C2",e.font=`400 19px ${w}`;let V=M+52;for(let _ of Pe(e,g.about,v-64).slice(0,3))e.fillText(_,E+32,V),V+=27}),e.fillStyle="#9FB0C2",e.font=`400 16px ${w}`;let m=a.length>0?"Click the screen or press Enter to watch. Plays from YouTube in privacy-enhanced mode; nothing loads from YouTube until you press play.":"";return e.fillText(m,56,o-74),e.fillText(a.length>0?"Chosen for teaching from established educational publishers. Their claims are theirs; TRIARC does not cite them as sources.":"",56,o-48),n}var no=.35,Yn=1,zr=80*Math.PI/180,Xr=17,Yr=2,ro=.18,jn=1.2,jr={store:"model",panel:"lesson",board:"body",examples:"examples",theater:"theater",window:"front",directory:null},qn=class{canvas;host;opts;gl=null;renderer=null;world=null;live=null;rig=new wt;input=null;raf=0;lastFrame=0;lastRender=0;time=0;disposed=!1;failed=!1;visible=!0;dirty=!0;ready=!1;reduced;scale=.9;exposure=oe.exposure;ema=16;calm=0;slowSince=0;busyFrames=0;wasBusy=!1;proj=nt();view=nt();viewProj=nt();invViewProj=nt();pointer=null;pointerDirty=!1;hover=null;focus=null;focusAt=0;snapKey="";snapAt=0;highlightLevel=null;fronts;opaqueWalls;holoCache=new Map;boards=new Map;cinemaScreens=new Map;drawnHolos=[];theaterPlaying=!1;dim=0;theaterKey="";uploaded=!1;resizeObserver=null;livePrev=null;postersLoading=new Set;observer=null;onLost=t=>{t.preventDefault(),this.fail("lost")};fixedScale;constructor(t,o,n){this.canvas=t,this.host=o,this.opts=n;let e=globalThis.__OUTLET_SCALE__;this.fixedScale=typeof e=="number"&&e>0&&e<=1?e:null,this.fixedScale&&(this.scale=this.fixedScale),this.reduced=n.reducedMotion,this.rig.reducedMotion=n.reducedMotion,this.fronts=Nt.map(l=>({node:l.node,level:l.level,centre:[l.door[0],ne(l.level)+2.8,l.door[1]],normal:[-l.bay.inward[0],0,-l.bay.inward[1]],u:[l.bay.along[0],0,l.bay.along[1]]}));let s=k,r=L;this.opaqueWalls=[...[-1,1].flatMap(l=>[-1,1].map(c=>({a:[l*r,c*r],b:[l*s,c*s]}))),{a:[r,0],b:[s,0]},{a:[0,-r],b:[0,-s]},{a:[-r,0],b:[-s,0]}];let a=t.getContext("webgl2",{antialias:!0,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(!a){queueMicrotask(()=>this.fail("webgl"));return}this.gl=a,t.addEventListener("webglcontextlost",this.onLost);try{this.world=wn();for(let c of this.world.screens)c.kind==="board"&&c.node&&this.boards.set(c.node,c.rect),c.kind==="theater"&&c.node&&this.cinemaScreens.set(c.node,c.rect);let l=Kr(a);this.renderer=new Mt(a,this.world,l),o.dataset.quality=l,!this.fixedScale&&Qn(a)&&(this.scale=.5),this.live=new Rt(a)}catch(l){console.warn("XI Outlet could not start its renderer",l),queueMicrotask(()=>this.fail("compile"));return}this.rig.goTo(n.start,!0),this.input=new Et(o,{click:(l,c)=>this.click(l,c),hover:(l,c)=>{this.pointer=l<0?null:[l,c],this.pointerDirty=!0},back:()=>this.back(),activate:()=>this.activate(),poke:()=>{this.dirty=!0},blocked:()=>document.querySelector("dialog[open]")!==null}),typeof IntersectionObserver<"u"&&(this.observer=new IntersectionObserver(l=>{for(let c of l)this.visible=c.isIntersecting;this.visible&&(this.dirty=!0)}),this.observer.observe(o)),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.dirty=!0}),this.resizeObserver.observe(o)),Vn().then(()=>{this.disposed||!this.renderer||(this.renderer.setAtlas(Cn()),this.dirty=!0)}),this.raf=requestAnimationFrame(this.tick)}goTo(t,o=this.reduced){this.renderer&&(this.rig.goTo(t,o),this.dirty=!0)}activate(){let t=this.focus;t&&(t.kind==="store"&&t.part==="theater"&&this.seatedAt()===t.node?this.opts.onSelect?.(t):t.kind==="store"?this.goTo(Kn(t.node,t.part)):t.kind==="level"?this.goTo({kind:"level",level:t.level}):(t.kind==="lift"||t.kind==="directory")&&this.opts.onSelect?.(t))}back(){if(this.theaterPlaying){this.setTheaterPlaying(!1),this.opts.onTheaterExit?.();return}this.rig.mode!=="exterior"&&this.goTo({kind:"exterior"})}setTheaterPlaying(t){this.theaterPlaying!==t&&(this.theaterPlaying=t,this.dirty=!0)}seatedAt(){if(this.rig.mode!=="walk")return null;let t=this.rig.camera();if(t.level===null)return null;for(let o of Z[t.level]?.stores??[]){let n=o.stations.theater;if(Math.hypot(n.p[0]-t.eye[0],n.p[1]-t.eye[2])<.9)return o.node}return null}setReducedMotion(t){this.reduced=t,this.rig.reducedMotion=t,this.dirty=!0}highlight(t){this.highlightLevel=t,this.dirty=!0}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.input?.dispose(),this.observer?.disconnect(),this.resizeObserver?.disconnect(),this.canvas.removeEventListener("webglcontextlost",this.onLost),this.live?.dispose(),this.renderer?.dispose(),this.gl?.getExtension("WEBGL_lose_context")?.loseContext(),this.gl=null}fail(t){this.failed||this.disposed||(this.failed=!0,cancelAnimationFrame(this.raf),this.opts.onFail(t))}tick=t=>{if(this.disposed||this.failed)return;if(this.raf=requestAnimationFrame(this.tick),!this.visible||document.hidden){this.lastFrame=0;return}let o=this.lastFrame?Math.min(.5,(t-this.lastFrame)/1e3):1/60;this.lastFrame=t;let n=this.input?.consume();this.theaterPlaying&&n&&(n.forward!==0||n.strafe!==0||n.turn!==0||n.zoom!==0?(this.setTheaterPlaying(!1),this.opts.onTheaterExit?.()):n={...n,lookX:0,lookY:0});let e=n?this.rig.update(o,n):!1;this.reduced||(this.time+=o);let s=this.theaterPlaying?1:0,r=this.dim!==s;r&&(this.dim=this.reduced||Math.abs(s-this.dim)<.02?s:this.dim+(s-this.dim)*Math.min(1,o*5));let a=e||this.rig.travelling||this.dirty||this.pointerDirty||r;!a&&(this.reduced||this.theaterPlaying||t-this.lastRender<33)||this.render(t,a)};render(t,o){let n=this.gl,e=this.renderer;if(!n||!e)return;let s=this.lastRender?t-this.lastRender:16;this.lastRender=t;let r=this.uploaded;this.uploaded=!1,this.dirty=!1;let a=this.rig.camera(),l=Math.min(window.devicePixelRatio||1,e.tier==="cinematic"?1.5:2),c=Math.max(1,this.canvas.clientWidth),h=Math.max(1,this.canvas.clientHeight),d=Math.max(1,Math.round(c*l*this.scale)),u=Math.max(1,Math.round(h*l*this.scale));(this.canvas.width!==d||this.canvas.height!==u)&&(this.canvas.width=d,this.canvas.height=u);let f=Math.min(1,Math.max(0,(a.fov-je)/(to-je))),p=c/h,v=a.fov+Math.max(0,Math.min(zr,2*Math.atan(1/p))-je)*(1-f);Oo(this.proj,v,p,a.level===null?.5:.08,3200),c>640&&(this.proj[8]=(this.proj[8]??0)-.16*f);let y=Vo(a.heading,a.pitch);pt(this.view,a.eye,Ct(a.eye,y)),rt(this.viewProj,this.proj,this.view),vt(this.invViewProj,this.viewProj);let b=j(de(y,[0,1,0])),m=de(b,y);this.pointerDirty&&(this.pointerDirty=!1,this.hover=this.pointer?this.pickClient(this.pointer[0],this.pointer[1]):null,this.host.style.cursor=this.hover&&this.hover.kind!=="floor"?"pointer":""),t-this.focusAt>140&&(this.focusAt=t,this.focus=this.rig.mode==="exterior"?this.hover:this.pick(0,0),this.focus?.kind==="floor"&&(this.focus=null)),e.setRibbon(this.rig.routeAhead()),this.feedTextures(a.level,a.eye),this.updateLive(a.level,a.eye,y,s);let g=this.holoFrame(a.level,a.eye,y);this.drawnHolos=g.map(x=>x.holo.node);let E=this.rig.mode!=="exterior"&&Math.max(Math.abs(a.eye[0]),Math.abs(a.eye[2]))<k-.3&&a.eye[1]<B?oe.exposureInside:oe.exposure;this.exposure=this.reduced?E:this.exposure+(E-this.exposure)*Math.min(1,s/1e3*3),Math.abs(E-this.exposure)<.01?this.exposure=E:this.dirty=!0;let A=this.rig.mode==="exterior"?this.highlightLevel??(this.hover?.kind==="level"?this.hover.level:null):null,N=A!==null?ne(A):0;e.draw({viewProj:this.viewProj,invViewProj:this.invViewProj,eye:a.eye,right:b,up:m,time:this.time,cabY:this.rig.cabY(),fade:1,holos:g,pxPerMetre:u/(2*Math.tan(v/2)),dim:this.dim,mirrorY:this.rig.mode==="exterior"||a.level===null||a.level===0?-.05:ne(a.level),exposure:this.exposure,highlight:A!==null?{min:[-k-.45,N-$-.05,-k-.45],max:[k+.45,N+Te-$,k+.45],rgba:[.89,.14,.17,.16]}:null},d,u),o&&this.wasBusy&&!r&&this.adapt(s,t),this.wasBusy=o,this.ready||(this.ready=!0,this.host.dataset.state="live",this.opts.onReady()),this.emit(t,a.level,a.eye,a.heading),this.reportTheater(c,h)}reportTheater(t,o){let n=this.seatedAt(),e=n?this.cinemaScreens.get(n):void 0,s=null;if(n&&e){let a=(u,f)=>{let p=e.centre[0]+e.u[0]*e.hu*u+e.v[0]*e.hv*f,v=e.centre[1]+e.u[1]*e.hu*u+e.v[1]*e.hv*f,y=e.centre[2]+e.u[2]*e.hu*u+e.v[2]*e.hv*f,b=this.viewProj,m=(b[0]??0)*p+(b[4]??0)*v+(b[8]??0)*y+(b[12]??0),g=(b[1]??0)*p+(b[5]??0)*v+(b[9]??0)*y+(b[13]??0),R=(b[3]??0)*p+(b[7]??0)*v+(b[11]??0)*y+(b[15]??0);return R<.05?null:[(m/R+1)/2*t,(1-g/R)/2*o]},l=a(-1,1),c=a(1,1),h=a(1,-1),d=a(-1,-1);l&&c&&h&&d&&(s={node:n,corners:[l,c,h,d]})}let r=s?`${this.theaterPlaying?"playing":"seated"}:${s.node}:${s.corners.map(a=>`${a[0].toFixed(1)},${a[1].toFixed(1)}`).join(";")}`:"";r!==this.theaterKey&&(this.theaterKey=r,this.host.dataset.theater=s?this.theaterPlaying?"playing":"seated":"",this.opts.onTheaterScreen?.(s))}adapt(t,o){if(!(this.fixedScale||++this.busyFrames<5)){if(this.ema=this.ema*.85+t*.15,this.renderer?.tier==="cinematic"&&this.scale<=.6&&this.ema>40){this.renderer.setTier("basic"),this.host.dataset.quality="basic",this.scale=.85,this.ema=24,this.calm=0;return}this.ema>42&&this.scale>no?(this.scale=Math.max(no,this.scale*.88),this.calm=0):this.ema<22?++this.calm>50&&this.scale<Yn&&(this.scale=Math.min(Yn,this.scale*1.08),this.calm=0):this.calm=0,this.scale<=no&&this.ema>650?this.slowSince?o-this.slowSince>9e3&&this.fail("slow"):this.slowSince=o:this.slowSince=0}}posterUrl(t,o){let n=Y.node(t)?.content?.rendering?.asset;return n?`${this.opts.base}visuals/${n}-${o}.webp`:null}feedTextures(t,o){let n=this.renderer;if(!n)return;for(let a of Nt){let l=t===a.level?640:320,c=l===640?2:1,h=`store:${a.node}`;if(n.screenGrade(h)>=c)continue;let d=`${h}@${l}`;if(this.postersLoading.has(d)||this.postersLoading.size>=4)continue;let u=this.posterUrl(a.node,l);u&&(this.postersLoading.add(d),zn(u).then(f=>{this.postersLoading.delete(d),!(!f||this.disposed||!this.renderer)&&(this.renderer.setScreenImage(h,f,c,!0),this.dirty=!0,this.uploaded=!0)}))}if(t===null)return;let e=Z[t];if(!e)return;let s=`directory:${t}`;if(n.screenGrade(s)<3)n.setScreenImage(s,Un(t),3,!0),this.dirty=!0,this.uploaded=!0;else{let a=e.stores.slice().sort((l,c)=>Math.hypot(l.display[0]-o[0],l.display[1]-o[2])-Math.hypot(c.display[0]-o[0],c.display[1]-o[2]));e:for(let l of a)for(let[c,h,d]of this.storeCanvases(l))if(!(n.screenGrade(c)>=3)){n.setScreenImage(c,h(),3,!0,d),this.dirty=!0,this.uploaded=!0;break e}}let r=new Set([s]);for(let a of e.stores){for(let[l]of this.storeCanvases(a))r.add(l);r.add(`holo:${a.node}`)}n.evict(a=>r.has(a))}storeCanvases(t){let o=t.node;return[[`board:${o}`,()=>$n(o,this.boardSide(t)>0),!1],[`panel:${o}`,()=>Dn(o),!1],[`examples:${o}`,()=>Hn(o),!1],[`theater:${o}`,()=>Xn(o),!1],[`banner:${o}`,()=>Gn(o),!0],[`medallion:${o}`,()=>Wn(o),!0]]}boardSide(t){let o=this.boards.get(t.node);return o?(t.holo.at[0]-o.centre[0])*o.u[0]+(t.holo.at[1]-o.centre[2])*o.u[2]>=0?1:-1:1}holoOf(t){return this.holoCache.has(t)||this.holoCache.set(t,zo(t)),this.holoCache.get(t)??null}holoFrame(t,o,n){if(t===null||this.rig.mode==="exterior")return[];let e=Math.hypot(n[0],n[2])||1,s=[];for(let a of Z[t]?.stores??[]){let l=a.holo.at[0]-o[0],c=a.holo.at[1]-o[2],h=Math.hypot(l,c);if(h>Xr||h>1.6&&(l*n[0]+c*n[2])/(h*e)<.15)continue;let d={a:[o[0],o[2]],b:a.holo.at};this.opaqueWalls.every(u=>Vt(d,u)>.05)&&s.push({s:a,d:h})}s.sort((a,l)=>a.d-l.d);let r=[];for(let{s:a}of s.slice(0,Yr).reverse()){let l=this.holoDraw(a);l&&r.push(l)}return r}holoDraw(t){let o=this.holoOf(t.node);if(!o)return null;let n=this.time,e=Math.PI-t.holo.facing+(this.reduced?0:Math.sin(n*.35)*.32),s=jn,r=Math.cos(e)*s,a=Math.sin(e)*s,[l,c]=t.holo.at,h=ne(t.level)+ro,d=new Float32Array([r,0,-a,0,0,s,0,0,a,0,r,0,l,h,c,1]),u=b=>[r*b[0]+a*b[2]+l,b[1]*s+h,-a*b[0]+r*b[2]+c],f=new Float32Array(o.targets.length*4);o.targets.forEach((b,m)=>{let g=u(b.at);f.set([g[0],g[1],g[2],b.r*s],m*4)});let p=[],v=this.boards.get(t.node);if(v&&o.rows.length>0){let b={centre:v.centre,u:v.u,n:Ut(v),hu:v.hu,hv:v.hv};for(let m of Xo(o,u,b,this.boardSide(t),oo(o.rows.length),30/at.w*v.hu*2)){let[g,R,E,A]=m.points;p.push(...g,...R,...R,...E,...E,...A)}}if(o.whole)for(let[g,R,E,A]of[[-.4,.02,1,1],[.4,.02,-1,1],[-.4,1.92,1,-1],[.4,1.92,-1,-1]]){let N=u([g,R,.14]);p.push(...u([g+E*.15,R,.14]),...N,...N,...u([g,R+A*.15,.14]))}let y=[];for(let[b,m,g]of[[.96,.5,.25],[1.52,.42,-.4]]){let E=this.reduced?0:n*g;for(let A=0;A<40;A+=2){let N=E+A/40*Math.PI*2,x=E+(A+1)/40*Math.PI*2;y.push(...u([Math.sin(N)*m,b,Math.cos(N)*m]),...u([Math.sin(x)*m,b,Math.cos(x)*m]))}}return{holo:o,model:d,rings:new Float32Array(y),leaders:new Float32Array(p),targets:f,scanY:this.reduced?-10:.05+(1-Math.abs(n*.2%2-1))*1.8,pulse:this.reduced?.4:.5+.5*Math.sin(n*2.2)}}updateLive(t,o,n,e){let s=this.live,r=this.renderer;if(!s||!r)return;let a=null;if(!this.reduced&&t!==null&&this.ema<(this.opts.liveBudget??60)){let h=18;for(let d of Z[t]?.stores??[]){let u=d.display[0]-o[0],f=d.display[1]-o[2],p=Math.hypot(u,f);p<h&&u*n[0]+f*n[2]>-2&&(h=p,a=d.node)}}let l=a?`store:${a}`:null;if(this.livePrev&&this.livePrev.key!==l){let h=this.livePrev;this.livePrev=null,r.setScreenTexture(h.key,null,h.saved),s.showing=null,this.dirty=!0}if(!a||!l||!s.prepare(a))return;s.render(a,this.time,this.ema<24?0:66)&&this.livePrev?.key!==l&&(this.livePrev={key:l,saved:r.setScreenTexture(l,s.texture)})}pickClient(t,o){let n=this.canvas.getBoundingClientRect();return n.width===0||n.height===0?null:this.pick((t-n.left)/n.width*2-1,1-(o-n.top)/n.height*2)}pick(t,o){let{origin:n,dir:e}=Do(this.invViewProj,t,o),s=this.rig.camera();if(this.rig.mode==="exterior"||s.level===null){let f=null,p=1/0;for(let v of Z){let y=Bo(n,e,[-k-.6,v.y-$,-k-.6],[k+.6,v.y+Te-$,k+.6]);y!==null&&y<p&&(p=y,f={kind:"level",level:v.index})}if(!f&&e[1]<0){let v=-n[1]/e[1];Math.hypot(n[0]+e[0]*v,n[2]+e[2]*v)<52&&(f={kind:"plaza"})}return f}let r=s.level,a=ne(r),l=null,c=1/0,h=[s.eye[0],s.eye[2]],d=f=>{let p=[n[0]+e[0]*f,n[2]+e[2]*f],v={a:h,b:[p[0]-(p[0]-h[0])*.02,p[1]-(p[1]-h[1])*.02]};return this.opaqueWalls.every(y=>Vt(v,y)>.01)},u=(f,p)=>{f!==null&&f<c&&f<70&&d(f)&&(c=f,l=p)};for(let f of this.world?.screens??[]){if(f.level!==r)continue;let p=Dt(n,e,f.rect.centre,Ut(f.rect),f.rect.u,f.rect.v,f.rect.hu,f.rect.hv),v=jr[f.kind];f.kind==="directory"?u(p,{kind:"directory",level:r,distance:p??0}):f.node&&v&&u(p,{kind:"store",node:f.node,part:v,distance:p??0})}for(let f of Z[r]?.stores??[]){let p=qr(n,e,f.holo.at,.45,a+ro,a+ro+1.82*jn);p!==null&&u(p,{kind:"store",node:f.node,part:"body",distance:p})}for(let f of this.fronts)f.level===r&&u(Dt(n,e,f.centre,f.normal,f.u,[0,1,0],L/2,2.8),{kind:"store",node:f.node,part:"front",distance:0});{let f=e[0]*e[0]+e[2]*e[2],p=2*(n[0]*e[0]+n[2]*e[2]),v=n[0]*n[0]+n[2]*n[2]-K*K,y=p*p-4*f*v;if(f>1e-9&&y>=0){let b=(-p-Math.sqrt(y))/(2*f),m=n[1]+e[1]*b;b>0&&m>a&&m<a+Te&&u(b,{kind:"lift",distance:b})}}if(l){let f=l;return f.kind==="store"&&f.part==="front"?{...f,distance:c}:f}if(e[1]<-.02){let f=(a-n[1])/e[1],p=[n[0]+e[0]*f,n[2]+e[2]*f];if(f<40&&_o(r,p))return{kind:"floor",level:r,p,distance:f}}return null}click(t,o){let n=this.pickClient(t,o);if(n)switch(n.kind){case"level":this.goTo({kind:"level",level:n.level});break;case"plaza":this.goTo({kind:"plaza"});break;case"store":this.goTo(Kn(n.node,n.part));break;case"floor":this.goTo({kind:"point",level:n.level,p:n.p});break;case"lift":case"directory":this.opts.onSelect?.(n);break}}emit(t,o,n,e){let s=o!==null?Z[o]:void 0,r=[n[0],n[2]],a=s&&this.rig.mode!=="exterior"?wo(s,r):null,l=null;if(a?.kind==="store"&&this.rig.mode==="walk")for(let f of dt){let p=a.store.stations[f].p;Math.hypot(p[0]-r[0],p[1]-r[1])<.9&&(l=f)}let c={mode:this.rig.mode,level:this.rig.mode==="exterior"?null:o,region:a?.kind??null,store:a?.kind==="store"?a.store.node:null,focus:this.focus,x:r[0],z:r[1],heading:e,destination:this.rig.destination,live:this.live?.showing??null,station:l,holos:this.drawnHolos},h=c.focus,d=JSON.stringify([c.mode,c.level,c.region,c.store,h?[h.kind,"node"in h?h.node:"","level"in h?h.level:"","part"in h?h.part:""]:null,c.destination,c.live,c.station,c.holos]);if(d===this.snapKey&&t-this.snapAt<120)return;this.snapKey=d,this.snapAt=t;let u=this.host.dataset;u.mode=c.mode,u.level=c.level===null?"":String(c.level+1),u.store=c.store??"",u.live=c.live??"",u.region=c.region??"",u.station=c.station??"",u.holo=c.holos.join(","),u.frame=`${Math.round(this.ema)}ms@${this.scale.toFixed(2)}`,u.pos=`${c.x.toFixed(1)},${c.z.toFixed(1)}`,this.opts.onSnapshot(c)}};function Kn(i,t){return t==="front"?{kind:"store",node:i}:{kind:"store",node:i,station:t}}function qr(i,t,o,n,e,s){let r=i[0]-o[0],a=i[2]-o[1],l=t[0]*t[0]+t[2]*t[2];if(l<1e-9)return null;let c=2*(r*t[0]+a*t[2]),h=r*r+a*a-n*n,d=c*c-4*l*h;if(d<0)return null;let u=(-c-Math.sqrt(d))/(2*l);if(u<=0)return null;let f=i[1]+t[1]*u;return f>=e&&f<=s?u:null}function Kr(i){let t=i.getExtension("EXT_color_buffer_float")!==null,o=globalThis.__OUTLET_QUALITY__;return o==="basic"?"basic":o==="cinematic"?t?"cinematic":"basic":t?Qn(i)?"basic":"cinematic":"basic"}function Qn(i){let t=String(i.getParameter(i.RENDERER));if(/^webkit webgl$/i.test(t)){let o=i.getExtension("WEBGL_debug_renderer_info");o&&(t=String(i.getParameter(o.UNMASKED_RENDERER_WEBGL)))}return/swiftshader|llvmpipe|softpipe|software|basic render/i.test(t)}export{qn as OutletEngine};
