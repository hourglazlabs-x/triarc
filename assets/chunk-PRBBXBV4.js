import{a as go}from"./chunk-IVZFYQIE.js";import{$ as Z,B as Ge,F as ut,G as So,I as Fo,J as Mo,L as k,M as L,N as P,O as K,P as Qe,Q as Te,R as $,S as Q,T as Ze,U as be,V as We,W as ft,X as re,Y as Fe,Z as dt,_ as Ee,a as Nt,aa as Ot,b as lo,ba as ze,c as co,da as Me,ea as Ao,f as uo,fa as Je,g as fo,ga as ht,ha as Po,ia as wo,ja as Vt,ka as Ct,l as ho,la as Lo,ma as et,na as mt,oa as _o,p as Y,pa as Io,v as xo,x as To,y as Eo,z as Ro}from"./chunk-7PQBXVSE.js";import{b as mo,c as po,d as vo,e as bo,h as yo}from"./chunk-LLCKFUDP.js";import{b as X}from"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var Ve=Math.PI/180;function Dt(i,t){return[i[0]+t[0],i[1]+t[1],i[2]+t[2]]}function Re(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function sn(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function Oe(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function de(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function No(i){return Math.hypot(i[0],i[1],i[2])}function j(i){let t=No(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function ye(i,t,o){return i+(t-i)*o}function ge(i,t,o){return Math.min(o,Math.max(t,i))}function tt(i,t){let o=(t-i)%(Math.PI*2);return o>Math.PI&&(o-=Math.PI*2),o<-Math.PI&&(o+=Math.PI*2),o}function ot(i){let t=ge(i,0,1);return t*t*t*(t*(t*6-15)+10)}function Oo(i,t=0){let o=Math.cos(t);return[Math.sin(i)*o,Math.sin(t),-Math.cos(i)*o]}function rt(){let i=new Float32Array(16);return i[0]=i[5]=i[10]=i[15]=1,i}function Vo(i,t,o,r,e){let s=1/Math.tan(t/2);return i.fill(0),i[0]=s/o,i[5]=s,i[10]=(e+r)/(r-e),i[11]=-1,i[14]=2*e*r/(r-e),i}function Co(i,t,o,r,e,s,n){return i.fill(0),i[0]=2/(o-t),i[5]=2/(e-r),i[10]=-2/(n-s),i[12]=-(o+t)/(o-t),i[13]=-(e+r)/(e-r),i[14]=-(n+s)/(n-s),i[15]=1,i}function pt(i,t,o,r=[0,1,0]){let e=j(Re(t,o)),s=de(r,e);No(s)<1e-6&&(s=de([0,0,1],e)),s=j(s);let n=de(e,s);return i[0]=s[0],i[1]=n[0],i[2]=e[0],i[3]=0,i[4]=s[1],i[5]=n[1],i[6]=e[1],i[7]=0,i[8]=s[2],i[9]=n[2],i[10]=e[2],i[11]=0,i[12]=-Oe(s,t),i[13]=-Oe(n,t),i[14]=-Oe(e,t),i[15]=1,i}function nt(i,t,o){let r=new Float32Array(16);for(let e=0;e<4;e++)for(let s=0;s<4;s++){let n=0;for(let a=0;a<4;a++)n+=(t[a*4+s]??0)*(o[e*4+a]??0);r[e*4+s]=n}return i.set(r),i}function vt(i,t){let o=y=>t[y]??0,r=o(0)*o(5)-o(1)*o(4),e=o(0)*o(6)-o(2)*o(4),s=o(0)*o(7)-o(3)*o(4),n=o(1)*o(6)-o(2)*o(5),a=o(1)*o(7)-o(3)*o(5),c=o(2)*o(7)-o(3)*o(6),l=o(8)*o(13)-o(9)*o(12),h=o(8)*o(14)-o(10)*o(12),d=o(8)*o(15)-o(11)*o(12),u=o(9)*o(14)-o(10)*o(13),f=o(9)*o(15)-o(11)*o(13),p=o(10)*o(15)-o(11)*o(14),v=r*p-e*f+s*u+n*d-a*h+c*l;return v?(v=1/v,i[0]=(o(5)*p-o(6)*f+o(7)*u)*v,i[1]=(o(2)*f-o(1)*p-o(3)*u)*v,i[2]=(o(13)*c-o(14)*a+o(15)*n)*v,i[3]=(o(10)*a-o(9)*c-o(11)*n)*v,i[4]=(o(6)*d-o(4)*p-o(7)*h)*v,i[5]=(o(0)*p-o(2)*d+o(3)*h)*v,i[6]=(o(14)*s-o(12)*c-o(15)*e)*v,i[7]=(o(8)*c-o(10)*s+o(11)*e)*v,i[8]=(o(4)*f-o(5)*d+o(7)*l)*v,i[9]=(o(1)*d-o(0)*f-o(3)*l)*v,i[10]=(o(12)*a-o(13)*s+o(15)*r)*v,i[11]=(o(9)*s-o(8)*a-o(11)*r)*v,i[12]=(o(5)*h-o(4)*u-o(6)*l)*v,i[13]=(o(0)*u-o(1)*h+o(2)*l)*v,i[14]=(o(13)*e-o(12)*n-o(14)*r)*v,i[15]=(o(8)*n-o(9)*e+o(10)*r)*v,i):null}function ko(i,t){let o=(i[0]??0)*t[0]+(i[4]??0)*t[1]+(i[8]??0)*t[2]+(i[12]??0),r=(i[1]??0)*t[0]+(i[5]??0)*t[1]+(i[9]??0)*t[2]+(i[13]??0),e=(i[2]??0)*t[0]+(i[6]??0)*t[1]+(i[10]??0)*t[2]+(i[14]??0),s=(i[3]??0)*t[0]+(i[7]??0)*t[1]+(i[11]??0)*t[2]+(i[15]??0);return[o/s,r/s,e/s,s]}function Do(i,t,o){let r=ko(i,[t,o,-1]),e=ko(i,[t,o,1]),s=[r[0],r[1],r[2]];return{origin:s,dir:j(Re([e[0],e[1],e[2]],s))}}function Bo(i,t,o,r){let e=-1/0,s=1/0;for(let n=0;n<3;n++){let a=i[n]??0,c=t[n]??0,l=o[n]??0,h=r[n]??0;if(Math.abs(c)<1e-12){if(a<l||a>h)return null;continue}let d=(l-a)/c,u=(h-a)/c;if(d>u&&([d,u]=[u,d]),e=Math.max(e,d),s=Math.min(s,u),e>s)return null}return s<0?null:e>=0?e:s}function Bt(i,t,o,r,e,s,n,a){let c=Oe(t,r);if(Math.abs(c)<1e-9)return null;let l=Oe(Re(o,i),r)/c;if(l<0)return null;let h=Dt(i,sn(t,l)),d=Re(h,o);return Math.abs(Oe(d,e))>n||Math.abs(Oe(d,s))>a?null:l}var bt=13;function D(i){let t=parseInt(i.replace("#",""),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var Xe=class{data=[];get vertexCount(){return this.data.length/bt}toArray(){return new Float32Array(this.data)}vertex(t,o,r,e){this.data.push(t[0],t[1],t[2],o[0],o[1],o[2],r[0],r[1],r[2],e.gloss,e.emit??0,e.ao??1,e.pattern??0)}tri(t,o,r,e,s,n){let a=n??j(de(Re(o,t),Re(r,t)));this.vertex(t,a,e,s),this.vertex(o,a,e,s),this.vertex(r,a,e,s)}quad(t,o,r,e,s,n,a){let c=a??j(de(Re(o,t),Re(e,t)));this.tri(t,o,r,s,n,c),this.tri(t,r,e,s,n,c)}box(t,o,r,e,s={}){let[n,a,c]=t,[l,h,d]=o;s.top!==!1&&this.quad([n,h,c],[l,h,c],[l,h,d],[n,h,d],r,e,[0,1,0]),s.bottom!==!1&&this.quad([n,a,d],[l,a,d],[l,a,c],[n,a,c],r,e,[0,-1,0]),this.quad([n,a,d],[n,h,d],[l,h,d],[l,a,d],r,e,[0,0,1]),this.quad([l,a,c],[l,h,c],[n,h,c],[n,a,c],r,e,[0,0,-1]),this.quad([l,a,d],[l,h,d],[l,h,c],[l,a,c],r,e,[1,0,0]),this.quad([n,a,c],[n,h,c],[n,h,d],[n,a,d],r,e,[-1,0,0])}wall(t,o,r,e,s,n,a){let c=Math.hypot(o[0]-t[0],o[1]-t[1]);if(c<1e-6)return;let l=(o[0]-t[0])/c,h=(o[1]-t[1])/c,d=-h*(s/2),u=l*(s/2),f=(y,b,m)=>[y[0]+d*b,m,y[1]+u*b],p=[-h,0,l],v=[h,0,-l];this.quad(f(t,1,r),f(t,1,e),f(o,1,e),f(o,1,r),n,a,p),this.quad(f(o,-1,r),f(o,-1,e),f(t,-1,e),f(t,-1,r),n,a,v),this.quad(f(t,-1,e),f(o,-1,e),f(o,1,e),f(t,1,e),n,a,[0,1,0]),this.quad(f(t,1,r),f(o,1,r),f(o,-1,r),f(t,-1,r),n,a,[0,-1,0]),this.quad(f(t,-1,r),f(t,-1,e),f(t,1,e),f(t,1,r),n,a,[-l,0,-h]),this.quad(f(o,1,r),f(o,1,e),f(o,-1,e),f(o,-1,r),n,a,[l,0,h])}pane(t,o,r,e,s,n){let a=Math.hypot(o[0]-t[0],o[1]-t[1]);if(a<1e-6)return;let c=[-(o[1]-t[1])/a,0,(o[0]-t[0])/a];this.quad([t[0],r,t[1]],[t[0],e,t[1]],[o[0],e,o[1]],[o[0],r,o[1]],s,n,c)}prism(t,o,r,e,s,n={}){let a=t.length,c=l=>t[(l%a+a)%a]??[0,0];if(n.top!==!1)for(let l=1;l<a-1;l++)this.tri([c(0)[0],r,c(0)[1]],[c(l)[0],r,c(l)[1]],[c(l+1)[0],r,c(l+1)[1]],e,s,[0,1,0]);if(n.bottom!==!1)for(let l=1;l<a-1;l++)this.tri([c(0)[0],o,c(0)[1]],[c(l+1)[0],o,c(l+1)[1]],[c(l)[0],o,c(l)[1]],e,s,[0,-1,0]);if(n.sides!==!1){let l=t.reduce((d,u)=>d+u[0],0)/a,h=t.reduce((d,u)=>d+u[1],0)/a;for(let d=0;d<a;d++){let u=c(d),f=c(d+1),p=j([f[1]-u[1],0,-(f[0]-u[0])]),v=(u[0]+f[0])/2-l,y=(u[1]+f[1])/2-h;p[0]*v+p[2]*y<0&&(p=[-p[0],0,-p[2]]),this.quad([u[0],o,u[1]],[u[0],r,u[1]],[f[0],r,f[1]],[f[0],o,f[1]],e,s,p)}}}cylinder(t,o,r,e,s,n,a,c,l={}){let[h,d]=l.arc??[0,Math.PI*2],u=(p,v)=>[t+r*Math.sin(p),v,o+r*Math.cos(p)],f=p=>l.inward?[-Math.sin(p),0,-Math.cos(p)]:[Math.sin(p),0,Math.cos(p)];for(let p=0;p<n;p++){let v=h+(d-h)*p/n,y=h+(d-h)*(p+1)/n,b=u(v,e),m=u(v,s),g=u(y,s),R=u(y,e);this.vertex(b,f(v),a,c),this.vertex(m,f(v),a,c),this.vertex(g,f(y),a,c),this.vertex(b,f(v),a,c),this.vertex(g,f(y),a,c),this.vertex(R,f(y),a,c),l.caps!==!1&&!l.arc&&(this.tri([t,s,o],u(y,s),u(v,s),a,c,[0,1,0]),this.tri([t,e,o],u(v,e),u(y,e),a,c,[0,-1,0]))}}annulus(t,o,r,e,s,n,a,c){for(let l=0;l<n;l++){let h=l/n*Math.PI*2,d=(l+1)/n*Math.PI*2,u=(f,p)=>[t+f*Math.sin(p),s,o+f*Math.cos(p)];this.quad(u(r,h),u(e,h),u(e,d),u(r,d),a,c,[0,1,0])}}sphere(t,o,r,e,s,n=1){let a=Math.max(4,Math.round(r/2)),c=(l,h)=>{let d=l/a*Math.PI,u=h/r*Math.PI*2,f=[Math.sin(d)*Math.sin(u),Math.cos(d),Math.sin(d)*Math.cos(u)];return[[t[0]+f[0]*o,t[1]+f[1]*o*n,t[2]+f[2]*o],j([f[0],f[1]/n,f[2]])]};for(let l=0;l<a;l++)for(let h=0;h<r;h++){let[d,u]=c(l,h),[f,p]=c(l+1,h),[v,y]=c(l+1,h+1),[b,m]=c(l,h+1);this.vertex(d,u,e,s),this.vertex(f,p,e,s),this.vertex(v,y,e,s),this.vertex(d,u,e,s),this.vertex(v,y,e,s),this.vertex(b,m,e,s)}}pill(t,o,r,e,s,n,a,c){let l=Math.hypot(o[0]-t[0],o[1]-t[1]),h=(o[0]-t[0])/l,d=(o[1]-t[1])/l,u=Math.atan2(h,d);this.cylinder(t[0],t[1],r,e,s,n,a,c,{arc:[u+Math.PI/2,u+Math.PI*3/2]}),this.cylinder(o[0],o[1],r,e,s,n,a,c,{arc:[u-Math.PI/2,u+Math.PI/2]});let f=-d*r,p=h*r,v=[[t[0]+f,t[1]+p],[o[0]+f,o[1]+p],[o[0]-f,o[1]-p],[t[0]-f,t[1]-p]];this.prism(v,e,s,a,c,{bottom:!1});for(let[y,b]of[[t,u+Math.PI/2],[o,u-Math.PI/2]])for(let m=0;m<n;m++){let g=b+Math.PI*m/n,R=b+Math.PI*(m+1)/n;this.tri([y[0],s,y[1]],[y[0]+r*Math.sin(R),s,y[1]+r*Math.cos(R)],[y[0]+r*Math.sin(g),s,y[1]+r*Math.cos(g)],a,c,[0,1,0])}}};function J(i,t,o,r,e,s=0){let n=[Math.sin(o),0,-Math.cos(o)],a=[-Math.cos(o),0,-Math.sin(o)];return{centre:[i[0]+n[0]*s,t,i[1]+n[2]*s],u:a,v:[0,1,0],hu:r/2,hv:e/2}}function Ut(i,t,o,r,e){let s=[Math.sin(o),0,-Math.cos(o)],n=[Math.cos(o),0,Math.sin(o)];return{centre:[i[0],t,i[1]],u:n,v:s,hu:r/2,hv:e/2}}function $t(i){return j(de(i.u,i.v))}function yt(i,t=!1){let o=(s,n)=>[i.centre[0]+i.u[0]*i.hu*s+i.v[0]*i.hv*n,i.centre[1]+i.u[1]*i.hu*s+i.v[1]*i.hv*n,i.centre[2]+i.u[2]*i.hu*s+i.v[2]*i.hv*n],r=(s,n)=>[t?(1-s)/2:(s+1)/2,(1-n)/2],e=[];for(let[s,n]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])e.push(...o(s,n),...r(s,n));return new Float32Array(e)}var ne=1.78/489,an=510;function ie(i,t,o=0){return[(i-120)*ne,(an-t)*ne,o]}var Tt=6,C=(i,t,o,r,e=0)=>({x:i,y:t,w:o,d:r,z:e}),$o=[C(120,108,16,.052),C(120,118,34,.08),C(120,128,48,.1),C(120,144,49,.113),C(120,165,45,.118),C(120,186,43,.115),C(120,206,40,.108),C(120,228,37,.1),C(120,250,36.5,.1),C(120,270,40,.104),C(120,290,45,.11),C(120,306,45,.106),C(120,318,37,.09),C(120,326,18,.05)],ln=[C(120,84,11,.048),C(120,112,12.5,.052)],Gt=[C(70,132,13,.05),C(66,152,12,.045),C(63,180,10.5,.04),C(60,206,9.5,.036),C(57,228,8.6,.032),C(54,252,8.6,.032),C(51,276,7.8,.029),C(48,296,6.8,.025),C(46,308,6.2,.022)],Wt=[C(98,296,22,.085),C(96,326,20,.08),C(95,356,17,.07),C(95,384,13.5,.056),C(95,402,12.5,.05),C(96,426,12.5,.052),C(96,450,11,.046),C(97,470,9,.036),C(98,488,8,.03)];function cn(i,t){let o=[],r=s=>i[Math.max(0,Math.min(i.length-1,s))],e=(s,n,a,c,l)=>.5*(2*n+(-s+a)*l+(2*s-5*n+4*a-c)*l*l+(-s+3*n-3*a+c)*l*l*l);for(let s=0;s<i.length-1;s++){let[n,a,c,l]=[r(s-1),r(s),r(s+1),r(s+2)];for(let h=0;h<t;h++){let d=h/t;o.push({x:e(n.x,a.x,c.x,l.x,d),y:e(n.y,a.y,c.y,l.y,d),z:e(n.z,a.z,c.z,l.z,d),w:Math.max(.5,e(n.w,a.w,c.w,l.w,d)),d:Math.max(.004,e(n.d,a.d,c.d,l.d,d))})}}return o.push(r(i.length-1)),o}function gt(i,t,o=20,r=!0){let e=cn(t,3),s=e.map(n=>Array.from({length:o+1},(a,c)=>{let l=c/o*Math.PI*2,h=ie(n.x,n.y,n.z);return[h[0]+Math.sin(l)*n.w*ne,h[1],h[2]+Math.cos(l)*n.d]}));if(r){let n=e[0],a=e[e.length-1],c=(l,h)=>[.7,.35,0].map(d=>Array.from({length:o+1},(u,f)=>{let p=f/o*Math.PI*2,v=ie(l.x,l.y,l.z),y=Math.sqrt(1-d*d)*Math.min(l.w*ne,l.d)*.8*h;return[v[0]+Math.sin(p)*l.w*ne*d,v[1]+y,v[2]+Math.cos(p)*l.d*d]}));s.unshift(...c(n,1).reverse()),s.push(...c(a,-1))}un(i,s)}function un(i,t){let o=t.length,r=t[0]?.length??0,e=(n,a)=>t[Math.max(0,Math.min(o-1,n))]?.[(a%(r-1)+(r-1))%(r-1)]??[0,0,0],s=(n,a)=>{let c=xt(e(n,a+1),e(n,a-1)),l=xt(e(n+1,a),e(n-1,a)),h=zt(l,c);if(Math.hypot(h[0],h[1],h[2])<1e-12){let v=Uo(t[n===0?1:o-2]??[]);return j(xt(e(n,a),v))}let d=j(h),u=Uo(t[Math.max(0,Math.min(o-1,n))]??[]),f=e(n,a),p=[f[0]-u[0],0,f[2]-u[2]];return d[0]*p[0]+d[2]*p[2]<0?[-d[0],-d[1],-d[2]]:d};for(let n=0;n<o-1;n++)for(let a=0;a<r-1;a++){let c=[[n,a],[n+1,a],[n+1,a+1],[n,a],[n+1,a+1],[n,a+1]];for(let[l,h]of c)i.push(...e(l,h),...s(l,h))}}function Uo(i){let t=Math.max(1,i.length-1),o=0,r=0,e=0;for(let s=0;s<t;s++){let n=i[s]??[0,0,0];o+=n[0],r+=n[1],e+=n[2]}return[o/t,r/t,e/t]}var xt=(i,t)=>[i[0]-t[0],i[1]-t[1],i[2]-t[2]],zt=(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]];function it(i,t,o,r=0,e=18){let s=Math.max(6,Math.round(e/2)),n=Math.cos(r),a=Math.sin(r),c=(l,h)=>{let d=l/s*Math.PI,u=h/e*Math.PI*2,f=[Math.sin(d)*Math.sin(u),Math.cos(d),Math.sin(d)*Math.cos(u)],p=f[0]*o[0],v=f[1]*o[1],y=[t[0]+p*n-v*a,t[1]+p*a+v*n,t[2]+f[2]*o[2]],b=f[0]/o[0],m=f[1]/o[1],g=j([b*n-m*a,b*a+m*n,f[2]/o[2]]);return[y,g]};for(let l=0;l<s;l++)for(let h=0;h<e;h++){let d=[[l,h],[l+1,h],[l+1,h+1],[l,h],[l+1,h+1],[l,h+1]];for(let[u,f]of d){let[p,v]=c(u,f);i.push(...p,...v)}}}function Ho(){let i=[];it(i,ie(120,55,.004),[27*ne,35*ne,.104],0,24),gt(i,ln,18,!1),gt(i,$o,28);for(let t of[1,-1]){let o=s=>({...s,x:t>0?s.x:240-s.x});gt(i,Gt.map(o),16),gt(i,Wt.map(o),18);let r=t>0?41:199;it(i,ie(r,330,.006),[7.5*ne,17*ne,.024],t>0?.08:-.08,14);let e=t>0?96:144;it(i,ie(e,501,.045),[9.5*ne,7.5*ne,.11],0,14)}return new Float32Array(i)}function Go(i=.6,t=2.3,o=48){let r=[];for(let e=0;e<o;e++){let s=e/o*Math.PI*2,n=(e+1)/o*Math.PI*2,a=(c,l)=>[Math.sin(c)*i,l,Math.cos(c)*i,Math.sin(c),0,Math.cos(c)];r.push(...a(s,0),...a(n,0),...a(n,t),...a(s,0),...a(n,t),...a(s,t))}return new Float32Array(r)}var Wo={brain:0,hypothalamus:-.005,brainstem:-.025,"visual-cortex":-.07,eyes:.086,ears:0,nose:.104,mouth:.09,thyroid:.035,thymus:.07,heart:.035,lungs:0,liver:.02,gallbladder:.055,stomach:.04,spleen:-.035,pancreas:-.02,kidneys:-.062,adrenals:-.062,"small-intestine":.04,"large-intestine":.035,bladder:.04,"spinal-cord":-.088,"sympathetic-chain":-.072,vagus:-.01,"arm-muscles":0,"thigh-muscles":0,"belly-fat":.07,"bone-marrow":0,"lymph-nodes":.03,scalp:0,fingernails:.02,toenails:.12,forearm:0,ankle:0,hand:.01,body:0};function Xt(i,t){let o=[],r=[],e=0,s=0,n=i.match(/[MLHVQCSZmlhvqcsz]|-?\d*\.?\d+(?:e-?\d+)?/g)??[],a=0,c="M",l=()=>Number(n[a++]);for(;a<n.length;){let h=n[a]??"";if(/[A-Za-z]/.test(h)&&(c=h,a++,c==="Z"||c==="z")){r[0]&&r.push(r[0]);continue}if(c==="M")r.length>1&&o.push(r),e=l(),s=l(),r=[ie(e,s,t)],c="L";else if(c==="L")e=l(),s=l(),r.push(ie(e,s,t));else if(c==="H")e=l(),r.push(ie(e,s,t));else if(c==="V")s=l(),r.push(ie(e,s,t));else if(c==="Q"){let d=l(),u=l(),f=l(),p=l();for(let v=1;v<=6;v++){let y=v/6,b=1-y;r.push(ie(b*b*e+2*b*y*d+y*y*f,b*b*s+2*b*y*u+y*y*p,t))}e=f,s=p}else{let d=c==="c"||c==="C"?6:c==="s"||c==="S"||c==="q"?4:2;for(let u=0;u<d&&a<n.length&&!/[A-Za-z]/.test(n[a]??"");u++)a++;r.length>1&&o.push(r),r=[]}}return r.length>1&&o.push(r),o}function fn(i,t){let o=Wo[i];if("e"in t){let[l,h,d,u,f=0]=t.e,p=Math.max(.006,Math.min(.09,Math.min(d,u)*ne*.9));return{organs:[{centre:ie(l,h,o),radii:[d*ne,u*ne,p],rotZ:-f*Math.PI/180}],strands:[]}}if(t.line!==void 0)return t.line<1?{organs:[],strands:[]}:{organs:[],strands:Xt(t.d,o).map(l=>({points:l,radius:Math.max(.004,t.line*ne*.5)}))};let r=Xt(t.d,o).flat();if(r.length===0)return{organs:[],strands:[]};let e=r.map(l=>l[0]),s=r.map(l=>l[1]),n=[(Math.min(...e)+Math.max(...e))/2,(Math.min(...s)+Math.max(...s))/2,o],a=Math.max(.006,(Math.max(...e)-Math.min(...e))/2),c=Math.max(.006,(Math.max(...s)-Math.min(...s))/2);return{organs:[{centre:n,radii:[a,c,Math.min(a,c)],rotZ:0}],strands:[]}}var dn={vessels:[{key:"arteries",color:Ge.artery,z:.012},{key:"veins",color:Ge.vein,z:.004}],nerves:[{key:"nerves",color:Ge.nerve,z:-.012}],lymphatics:[{key:"lymphatics",color:Ge.lymph,z:.026}],autonomic:[{key:"autonomic",color:Ge.nerve,z:-.07}]};function hn(){let i=11,t=()=>(i=i*1664525+1013904223>>>0,i/4294967296),o=[[$o,140],[Gt,30],[Gt.map(e=>({...e,x:240-e.x})),30],[Wt,40],[Wt.map(e=>({...e,x:240-e.x})),40]],r=[ie(120,55,0)];for(let e=0;e<24;e++)r.push(ie(120+(t()-.5)*40,55+(t()-.5)*52,(t()-.5)*.12));for(let[e,s]of o)for(let n=0;n<s;n++){let a=Math.floor(t()*(e.length-1)),c=e[a],l=e[a+1],h=t(),d=(c.w+(l.w-c.w)*h)*.8,u=(c.d+(l.d-c.d)*h)*.8,f=t()*Math.PI*2,p=Math.sqrt(t());r.push(ie(c.x+(l.x-c.x)*h+Math.sin(f)*d*p,c.y+(l.y-c.y)*h,Math.cos(f)*u*p))}return r}var Ht=null;function zo(i){let t=Y.node(i),o=t?.content?.bodyMap;if(!t||!o)return null;let r=ut(o),e=new Set(r.map(h=>h.region)),s=h=>{let d=[],u=[];for(let f of h)for(let p of To[f].shapes){let v=fn(f,p);d.push(...v.organs),u.push(...v.strands)}return{organs:d,strands:u}},n=o.overlays??[],a=[];for(let h of n)for(let d of dn[h]??[])for(let u of Eo[d.key])for(let f of Xt(u,d.z))a.push({points:f,color:D(d.color)});let c=D(X[t.tier]),l=So(r,!1).filter(h=>h.region!=="body").map(h=>({at:ie(h.x,h.y,Wo[h.region]),r:Math.max(.035,h.r*ne*.85),rows:h.rows}));return n.includes("cells")&&!Ht&&(Ht=hn()),{node:i,tint:c,lit:s(e),ghosts:s(xo.filter(h=>!e.has(h))),lines:a,dots:n.includes("cells")?Ht??[]:[],beads:n.includes("autonomic")?Ro.map(([h,d])=>ie(h,d,-.07)):[],targets:l,rows:r,map:o,whole:o.scope==="systemic"||e.has("body"),skin:n.includes("skin")}}function Xo(i,t,o,r,e,s){let a=(y,b)=>[o.centre[0]+o.u[0]*y+o.n[0]*.012,b,o.centre[2]+o.u[2]*y+o.n[2]*.012],c=o.centre[1]+o.hv,l=a(r*(o.hu+.12),0),h=y=>Math.hypot(y[0]-l[0],y[2]-l[2]),d=i.targets.map(y=>t(y.at)),u=[];i.rows.forEach((y,b)=>{let m=null;if(i.targets.forEach((g,R)=>{let E=d[R];E&&g.rows.includes(y.index)&&(!m||h(E)<h(m))&&(m=E)}),!m){let g=t([.31,1.25,0]),R=t([-.31,1.25,0]);m=h(g)<h(R)?g:R}u.push({row:y.index,start:m,end:c-(e[b]??0)*2*o.hv})});let f=u.filter(y=>y.end<=y.start[1]).sort((y,b)=>b.start[1]-y.start[1]),p=u.filter(y=>y.end>y.start[1]).sort((y,b)=>y.start[1]-b.start[1]),v=[];for(let y of[f,p])y.forEach((b,m)=>{let g=r*(o.hu+.1+m*.05);v.push({row:b.row,points:[b.start,a(g,b.start[1]),a(g,b.end),a(r*(o.hu-s),b.end)]})});return v.sort((y,b)=>y.row-b.row)}function Yt(i){let t=[];for(let o of i.organs)it(t,o.centre,o.radii,o.rotZ,16);for(let o of i.strands)for(let r=1;r<o.points.length;r++){let e=o.points[r-1],s=o.points[r];mn(t,e,s,o.radius)}return new Float32Array(t)}function mn(i,t,o,r){let e=xt(o,t);if(Math.hypot(e[0],e[1],e[2])<1e-6)return;let n=j(e),a=Math.abs(n[2])<.9?[0,0,1]:[1,0,0],c=j(zt(a,n)),l=zt(n,c),h=8,d=(u,f)=>{let p=[c[0]*Math.cos(f)+l[0]*Math.sin(f),c[1]*Math.cos(f)+l[1]*Math.sin(f),c[2]*Math.cos(f)+l[2]*Math.sin(f)];return[[u[0]+p[0]*r,u[1]+p[1]*r,u[2]+p[2]*r],p]};for(let u=0;u<h;u++){let f=u/h*Math.PI*2,p=(u+1)/h*Math.PI*2,[v,y]=d(t,f),[b,m]=d(t,p),[g,R]=d(o,f),[E,A]=d(o,p);i.push(...v,...y,...g,...R,...E,...A,...v,...y,...E,...A,...b,...m)}it(i,o,[r,r,r],0,8)}var pn=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyQ","KeyE","ShiftLeft","ShiftRight"]);function vn(i){return i instanceof HTMLElement&&(i.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(i.tagName))}var Et=class{keys=new Set;downAt=new Map;held=new Map;lastConsume=performance.now();dragX=0;dragY=0;zoom=0;pointers=new Map;press=null;pinch=0;el;h;off=[];constructor(t,o){this.el=t,this.h=o;let r=(n,a,c,l)=>{n.addEventListener(a,c,l),this.off.push(()=>n.removeEventListener(a,c,l))},e=(n,a)=>{window.addEventListener(n,a),this.off.push(()=>window.removeEventListener(n,a))};r(t,"pointerdown",n=>{n.button!==0&&n.pointerType==="mouse"||(t.setPointerCapture?.(n.pointerId),this.pointers.set(n.pointerId,{x:n.clientX,y:n.clientY}),this.pointers.size===1&&(this.press={x:n.clientX,y:n.clientY,moved:!1}),this.pointers.size===2&&(this.press=null,this.pinch=this.pinchDistance()),this.h.poke())}),r(t,"pointermove",n=>{let a=this.pointers.get(n.pointerId);if(!a){n.pointerType==="mouse"&&this.h.hover(n.clientX,n.clientY);return}let c=n.clientX-a.x,l=n.clientY-a.y;if(a.x=n.clientX,a.y=n.clientY,this.pointers.size===2){let h=this.pinchDistance();this.pinch>0&&h>0&&(this.zoom+=(this.pinch-h)*2.2),this.pinch=h}else this.press&&(!this.press.moved&&Math.hypot(n.clientX-this.press.x,n.clientY-this.press.y)>5&&(this.press.moved=!0),this.press.moved&&(this.dragX+=c,this.dragY+=l));this.h.poke()});let s=n=>{let a=this.press;this.pointers.delete(n.pointerId),this.pointers.size===0&&(a&&!a.moved&&n.type==="pointerup"&&this.h.click(n.clientX,n.clientY),this.press=null,this.pinch=0)};r(t,"pointerup",s),r(t,"pointercancel",s),r(t,"pointerleave",n=>{n.pointerType==="mouse"&&!this.pointers.has(n.pointerId)&&this.h.hover(-1,-1)}),r(t,"wheel",n=>{n.preventDefault(),this.zoom+=n.deltaMode===1?n.deltaY*32:n.deltaY,this.h.poke()},{passive:!1}),e("keydown",n=>{if(n.defaultPrevented||n.metaKey||n.ctrlKey||n.altKey||vn(n.target)||this.h.blocked())return;let a=n.target===t||n.target===document.body||n.target===document.documentElement;if(n.key==="Escape"&&a){n.preventDefault(),this.h.back();return}if(n.key==="Enter"&&n.target===t){n.preventDefault(),this.h.activate();return}!a||!pn.has(n.code)||(n.preventDefault(),this.keys.has(n.code)||this.downAt.set(n.code,performance.now()),this.keys.add(n.code),this.h.poke())}),e("keyup",n=>{if(!this.keys.has(n.code))return;let a=performance.now(),c=Math.max(this.downAt.get(n.code)??a,this.lastConsume);this.held.set(n.code,(this.held.get(n.code)??0)+Math.max(0,a-c)),this.keys.delete(n.code),this.downAt.delete(n.code),this.h.poke()}),e("blur",()=>{this.keys.clear(),this.downAt.clear(),this.held.clear()})}pinchDistance(){let[t,o]=[...this.pointers.values()];return t&&o?Math.hypot(t.x-o.x,t.y-o.y):0}get busy(){return this.keys.size>0||this.held.size>0||this.pointers.size>0}consume(){let t=performance.now(),o=Math.max(1,t-this.lastConsume),r=new Map;for(let n of new Set([...this.keys,...this.held.keys()])){let a=this.held.get(n)??0;this.keys.has(n)&&(a+=t-Math.max(this.downAt.get(n)??t,this.lastConsume)),r.set(n,Math.min(1,a/o))}this.held.clear(),this.lastConsume=t;let e=n=>r.get(n)??0,s={forward:e("KeyW")+e("ArrowUp")-e("KeyS")-e("ArrowDown"),strafe:e("KeyD")-e("KeyA"),turn:e("ArrowRight")+e("KeyE")-e("ArrowLeft")-e("KeyQ"),run:e("ShiftLeft")+e("ShiftRight")>.5,lookX:this.dragX,lookY:this.dragY,zoom:this.zoom};return this.dragX=0,this.dragY=0,this.zoom=0,s}dispose(){for(let t of this.off)t();this.keys.clear(),this.held.clear(),this.el}};var jt=384,qt=288,Rt=class{gl;fbo;texture;tri;parallel;compiled=new Map;loading=new Set;order=[];showing=null;lastDraw=0;constructor(t){this.gl=t,this.parallel=t.getExtension("KHR_parallel_shader_compile");let o=t.createTexture();t.bindTexture(t.TEXTURE_2D,o),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,jt,qt,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),this.texture=o,this.fbo=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,this.fbo),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,o,0),t.bindFramebuffer(t.FRAMEBUFFER,null),this.tri=t.createVertexArray(),t.bindVertexArray(this.tri);let r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.bindVertexArray(null)}prepare(t){let o=this.compiled.get(t);return o?(!o.ready&&!o.failed&&this.poll(o),o.ready):(this.loading.has(t)||(this.loading.add(t),go(t).then(r=>{this.loading.delete(t),this.compile(t,r)}).catch(()=>this.loading.delete(t))),!1)}compile(t,o){let r=this.gl,e=Y.node(t)?.tier??"T01",s=(h,d)=>{let u=r.createShader(h);return u&&(r.shaderSource(u,d),r.compileShader(u)),u},n=s(r.VERTEX_SHADER,po),a=s(r.FRAGMENT_SHADER,mo(o,1)),c=r.createProgram();if(!n||!a||!c)return;r.attachShader(c,n),r.attachShader(c,a),r.bindAttribLocation(c,0,"p"),r.linkProgram(c),r.deleteShader(n),r.deleteShader(a);let l={scene:o,tier:e,program:c,loc:new Map,ready:!1,failed:!1};for(this.compiled.set(t,l),this.order.push(t);this.order.length>3;){let h=this.order.findIndex(f=>f!==this.showing&&f!==t);if(h<0)break;let[d]=this.order.splice(h,1),u=d?this.compiled.get(d):void 0;d&&u&&(r.deleteProgram(u.program),this.compiled.delete(d))}this.poll(l)}poll(t){let o=this.gl;if(!(this.parallel&&!o.getProgramParameter(t.program,this.parallel.COMPLETION_STATUS_KHR))){if(!o.getProgramParameter(t.program,o.LINK_STATUS)){t.failed=!0;return}for(let r of["uRes","uOffset","uCamPos","uCamTarget","uFov","uAccent","uFloor","uRing","uTime","uZero"])t.loc.set(r,o.getUniformLocation(t.program,r));t.ready=!0}}render(t,o,r){let e=this.compiled.get(t);if(!e?.ready)return!1;let s=performance.now();if(this.showing===t&&s-this.lastDraw<r)return!1;this.lastDraw=s;let n=this.gl,a=vo(e.scene),c=bo(e.scene),l;if(c.az){let u=(c.az[0]+c.az[1])/2,f=(c.az[1]-c.az[0])/2;l={...a,az:u+Math.sin(o*.15)*f*.6}}else l={...a,az:a.az+o*6};let h=e.scene.poster??1.5,d=yo(e.scene,e.tier,l,h+o);n.bindFramebuffer(n.FRAMEBUFFER,this.fbo),n.viewport(0,0,jt,qt),n.disable(n.DEPTH_TEST),n.disable(n.BLEND),n.useProgram(e.program),n.uniform2f(e.loc.get("uRes")??null,jt,qt),n.uniform2f(e.loc.get("uOffset")??null,0,0),n.uniform1i(e.loc.get("uZero")??null,0);for(let[u,f]of Object.entries(d)){let p=e.loc.get(u)??null;f.length===3?n.uniform3f(p,f[0]??0,f[1]??0,f[2]??0):n.uniform1f(p,f[0]??0)}return n.bindVertexArray(this.tri),n.drawArrays(n.TRIANGLES,0,3),n.bindVertexArray(null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.enable(n.DEPTH_TEST),this.showing=t,!0}failed(t){return this.compiled.get(t)?.failed===!0}dispose(){let t=this.gl;for(let o of this.compiled.values())t.deleteProgram(o.program);t.deleteFramebuffer(this.fbo),t.deleteTexture(this.texture)}};var Ce=i=>i.toFixed(4),H=`#version 300 es
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
`,St=`
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
`,bn=`
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
${St}
${Kt}
${Qt}
${Yo}
${bn}
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
${St}
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
  vec3 env = mix(skyAt(R, 0.0), interiorEnv(vPos, R, 0.02), nearIn);
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
${St}
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
${St}
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
`,er=`${H}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
void main() {
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,tr=`${H}
void main() {}
`,or=`${H}
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
`,rr=`${H}
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
`,nr=`${H}
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
`,ir=`${H}
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
`,sr=`${H}
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
`,ar=`${H}
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
`,lr=`${H}
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec2 aUv;
uniform mat4 uViewProj;
out vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,cr=`${H}
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
`,ur=`${H}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
void main() {
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,fr=`${H}
uniform vec4 uColor;
${he}
out vec4 frag;
void main() {
  frag = vec4(uiOut(uColor.rgb / max(uColor.a, 1e-4)) * uColor.a, uColor.a);
}
`,Ft=`${H}
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
`,dr=`${H}
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
`,hr=`${H}
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
`,mr=`${H}
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
`,pr=`${H}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
uniform mat4 uModel;
uniform float uPointSize;
void main() {
  gl_Position = uViewProj * uModel * vec4(aPos, 1.0);
  gl_PointSize = max(1.5, uPointSize / max(gl_Position.w, 0.1));
}
`,vr=`${H}
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
`,br=`${H}
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
`,yr=`${H}
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
`,gr=`${H}
in vec2 vNdc;
uniform float uDim;
out vec4 frag;
void main() {
  float v = smoothstep(0.35, 1.45, length(vNdc));
  float a = uDim * (0.66 + 0.3 * v);
  frag = vec4(vec3(0.0) * a, a);
}
`,xr=`${H}
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
`,Tr=`${H}
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
`,Er=`${H}
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
`,Rr=`${H}
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
`;var ke=j([-.53,.6,.6]),B=re(We),Sr=2.6,oe={sun:[2.55,2.42,2.22],sky:[.78,.84,.94],ground:[.4,.39,.37],interior:[.5,.495,.48],panel:3.4,emit:3.4,fog:[.86,.89,.93],fogDensity:45e-5,exposure:.8,exposureInside:1.35,bloomThreshold:2.2,bloomStrength:.16,grain:.016},Ar=10,Jt=7,T={stoneFloor:D("#C3BDB2"),lobbyFloor:D("#CBC5BA"),graphite:D("#3A3D42"),graphiteDeep:D("#25272B"),travertine:D("#E6E0D5"),band:D("#E2DCD1"),plaster:D("#EFEEEB"),panel:D("#FFFFFF"),titanium:D("#A9AEB4"),fin:D("#57524C"),steel:D("#CDD2D7"),bronze:D("#9E8566"),blackGlass:D("#0B0D10"),paving:D("#B5AFA5"),plateau:D("#7C7D75"),water:D("#0A0C0F"),glass:D("#CFE0DC"),facadeGlass:D("#9DB0BF"),glassFloor:D("#E4EBEA"),leather:D("#1B1A19"),carpet:D("#1F2225"),foliage:D("#34503A"),foliageLight:D("#4A6A45"),bark:D("#4B3D31"),soil:D("#2A2622"),runner:D("#E3232C"),runnerInlay:D("#A8262B"),warm:D("#FFE2B8")},S={stoneFloor:{gloss:.9,pattern:1},graphiteFloor:{gloss:.9,pattern:5},graphite:{gloss:.82,pattern:5},stoneWall:{gloss:.28,pattern:2},band:{gloss:.4,pattern:2},plaster:{gloss:.08,pattern:10},panel:{gloss:.1,emit:1},line:{gloss:.2,emit:.55},titanium:{gloss:.62,pattern:3},steel:{gloss:.94,pattern:4},bronze:{gloss:.6,pattern:9},blackGlass:{gloss:.96,pattern:13},paving:{gloss:.45,pattern:12},plateau:{gloss:.1,pattern:15},water:{gloss:.985,pattern:6},leather:{gloss:.55,pattern:7},carpet:{gloss:.05,pattern:8},foliage:{gloss:.3,pattern:11},bark:{gloss:.2,pattern:14},matte:{gloss:.15}};function yn(i){let t=Z[i]?.tier??"T01",[o,r,e]=D(X[t]),s=n=>Math.min(1,n*.7+.3);return[s(o),s(r),s(e)]}function gn(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Fr(i,t,o,r,e,s,n,a){let c=j(Re(o,t)),l=Math.abs(c[1])>.9?[1,0,0]:[0,1,0],h=j(de(c,l)),d=de(c,h),u=(f,p,v)=>{let y=[h[0]*Math.cos(v)+d[0]*Math.sin(v),h[1]*Math.cos(v)+d[1]*Math.sin(v),h[2]*Math.cos(v)+d[2]*Math.sin(v)];return[[f[0]+y[0]*p,f[1]+y[1]*p,f[2]+y[2]*p],y]};for(let f=0;f<s;f++){let p=f/s*Math.PI*2,v=(f+1)/s*Math.PI*2,[y,b]=u(t,r,p),[m,g]=u(t,r,v),[R]=u(o,e,p),[E]=u(o,e,v);i.vertex(y,b,n,a),i.vertex(R,b,n,a),i.vertex(E,g,n,a),i.vertex(y,b,n,a),i.vertex(E,g,n,a),i.vertex(m,g,n,a)}}function Pr(){let i=new Xe,t=new Xe,o=[],r=[],e=[],s=[],n=[],a=[],c=gn(7),l=(b,m)=>{let g=t.vertexCount;m();let R=t.vertexCount-g;R>0&&o.push({first:g,count:R,centre:b})},h=(b,m=0)=>({gloss:b,emit:m}),d=(b,m,g,R,E)=>{let[A,N,x,M]=E,O=(_,G,W,V)=>r.push(_,m,G,W,V,A,N,x,M,0);O(b-R,g-R,0,0),O(b+R,g-R,1,0),O(b+R,g+R,1,1),O(b-R,g-R,0,0),O(b+R,g+R,1,1),O(b-R,g+R,0,1)},u=(b,m,g,R,E)=>d(b,m+.012,g,R,[0,0,0,E]),f=(b,m,g,R,E,A)=>d(b,m+.014,g,R,[E[0]*A,E[1]*A,E[2]*A,0]),p=(b,m)=>{let g=b.map(E=>E[0]),R=b.map(E=>E[1]);for(let E=Math.floor(Math.min(...g)/3)*3+1.5;E<Math.max(...g);E+=3)for(let A=Math.floor(Math.min(...R)/3)*3+1.5;A<Math.max(...R);A+=3){if(![[E-1.05,A-1.05],[E+1.05,A-1.05],[E+1.05,A+1.05],[E-1.05,A+1.05]].every(O=>Po(O,b)))continue;let M=.8;i.quad([E-M,m,A+M],[E+M,m,A+M],[E+M,m,A-M],[E-M,m,A-M],T.panel,S.panel,[0,-1,0])}},v=Te-$;for(let b of Z){let m=b.y,g=b.index,R=yn(g),E=new Set(b.stores.map(x=>x.bay.id));for(let x of b.bays){let M=E.has(x.id);i.prism(x.poly,m-$,m,M?T.graphite:x.use==="lobby"?T.lobbyFloor:T.stoneFloor,M?S.graphiteFloor:S.stoneFloor,{bottom:!1}),g>0&&(i.prism(x.poly,m-$,m-$,T.plaster,S.plaster,{top:!1,sides:!1}),p(x.poly,m-$-.012))}let A=[[[-P,P],[P,P],[L,L],[-L,L]],[[P,P],[P,-P],[L,-L],[L,L]],[[P,-P],[-P,-P],[-L,-L],[L,-L]],[[-P,-P],[-P,P],[-L,L],[-L,-L]]];for(let x of A)if(g===0)i.prism(x,m-$,m,T.stoneFloor,S.stoneFloor,{bottom:!1});else{let M=x.reduce((_,G)=>_+G[0],0)/4,O=x.reduce((_,G)=>_+G[1],0)/4;l([M,m,O],()=>{let _=pe=>[pe[0],m-.02,pe[1]],[G,W,V,z]=x;G&&W&&V&&z&&t.quad(_(G),_(W),_(V),_(z),T.glassFloor,h(.5),[0,1,0])})}for(let[x,M]of Tn(P))i.wall(x,M,m-$-.05,m+.02,.18,T.band,S.band),g>0&&i.wall(Mr(x,M,.12),Mr(M,x,.12),m-$-.09,m-$-.05,.05,T.panel,S.line);i.box([-Qe,m-.3,ft-.15],[Qe,m,P+.05],T.stoneFloor,S.stoneFloor);for(let x of[-1,1])for(let M of[-1,1])i.wall([x*L,M*L],[x*k,M*k],m,m+v,.3,T.travertine,S.stoneWall);i.wall([L,0],[k,0],m,m+v,.3,T.travertine,S.stoneWall),i.wall([0,-L],[0,-k],m,m+v,.3,T.travertine,S.stoneWall),i.wall([-L,0],[-k,0],m,m+v,.3,T.travertine,S.stoneWall);for(let[x,M,O]of Mt()){for(let V=0;V<4;V++){let z=V/4,pe=(V+1)/4,Se=[x[0]+(M[0]-x[0])*z,x[1]+(M[1]-x[1])*z],ce=[x[0]+(M[0]-x[0])*pe,x[1]+(M[1]-x[1])*pe],ae=[];if(g===0&&O[1]===1){let we=Math.min(Se[0],ce[0]),ee=Math.max(Se[0],ce[0]);ee<=-be||we>=be?ae.push([Se,ce]):(we<-be&&ae.push([[we,k],[-be,k]]),ee>be&&ae.push([[be,k],[ee,k]]))}else ae.push([Se,ce]);for(let[we,ee]of ae)l([(we[0]+ee[0])/2,m+v/2,(we[1]+ee[1])/2],()=>t.pane(we,ee,m,m+v,T.facadeGlass,h(.34,.32)))}let _=[x[0]+O[0]*.31,x[1]+O[1]*.31],G=[M[0]+O[0]*.31,M[1]+O[1]*.31],W=(V,z,pe)=>{let Se=Math.hypot(z[0]-V[0],z[1]-V[1]);return[V[0]-(z[0]-V[0])/Se*pe,V[1]-(z[1]-V[1])/Se*pe]};if(g>0){i.wall(W(_,G,.31),W(G,_,.31),m-$-.18,m+.14,.62,T.band,S.band);let V=[x[0]+O[0]*.625,x[1]+O[1]*.625],z=[M[0]+O[0]*.625,M[1]+O[1]*.625];i.wall(V,z,m-$-.17,m-$-.13,.01,R,S.line)}}e.push({key:`levelno:${g}`,rect:J([-13.5,k+.64],m+3.1,Math.PI,7.2,1.8,0)});for(let[x,M]of En())l([(x[0]+M[0])/2,m+.55,(x[1]+M[1])/2],()=>t.pane(x,M,m,m+1.1,T.glass,h(.1))),i.wall(x,M,m+1.06,m+1.12,.07,T.steel,S.titanium);let N=Math.asin(Qe/K)+.05;l([0,m+Te/2,0],()=>{t.cylinder(0,0,K,m,m+2.7,26,T.glass,h(.08),{arc:[N,Math.PI*2-N]}),t.cylinder(0,0,K,m+2.7,m+Te,30,T.glass,h(.08),{caps:!1})}),i.cylinder(0,0,K+.06,m-$,m+.03,28,T.steel,S.steel,{caps:!1}),i.cylinder(0,0,K+.06,m+2.7,m+2.84,28,T.steel,S.steel,{caps:!1}),e.push({key:`level:${g}`,rect:J([0,(P+L)/2],m+4.82,0,4.2,.86,.075)}),e.push({key:`level:${g}`,rect:J([0,(P+L)/2],m+4.82,Math.PI,4.2,.86,.075)}),i.box([-2.16,m+4.36,(P+L)/2-.06],[2.16,m+5.28,(P+L)/2+.06],T.blackGlass,S.blackGlass);for(let x of[-1.7,1.7])i.box([x-.02,m+5.26,7.98],[x+.02,m+v,8.02],T.steel,S.steel);{let x=J(Me,m+1.95,Ao,2.9,2.2,.17),M=[Me[0]-x.u[0]*1.7,Me[1]-x.u[2]*1.7],O=[Me[0]+x.u[0]*1.7,Me[1]+x.u[2]*1.7];i.wall(M,O,m,m+3.4,.3,T.travertine,S.stoneWall),i.wall([M[0]+x.u[0]*.05,M[1]+x.u[2]*.05],[O[0]-x.u[0]*.05,O[1]-x.u[2]*.05],m+3.33,m+3.37,.31,R,S.line),s.push({kind:"directory",level:g,rect:x}),u(Me[0],m,Me[1],2.4,.14);for(let _ of[-1,1])i.box([_*3.6-.05,m,16.2],[_*6.4+.05,m+.44,17],T.travertine,S.band),i.box([_*3.6,m+.44,16.25],[_*6.4,m+.47,16.95],T.graphite,S.graphite),u(_*5,m,16.6,2,.12)}for(let x of b.stores){let M=x.bay.inward,O=Ee(-M[0],-M[1]),[_,G]=x.bay.front,W=x.bay.along,V=[x.door[0]-W[0]*Ze,x.door[1]-W[1]*Ze],z=[x.door[0]+W[0]*Ze,x.door[1]+W[1]*Ze];l([(_[0]+V[0])/2,m+2,(_[1]+V[1])/2],()=>t.pane(_,V,m,m+4,T.glass,h(.07))),l([(z[0]+G[0])/2,m+2,(z[1]+G[1])/2],()=>t.pane(z,G,m,m+4,T.glass,h(.07))),i.wall(_,G,m+4,m+v,.36,T.travertine,S.stoneWall);let pe=(I,te)=>[I[0]-W[0]*te,I[1]-W[1]*te];for(let[I,te]of[[V,1],[z,-1]]){let ve=pe(I,-te*.12);i.box([Math.min(I[0],ve[0])-Math.abs(M[0])*.22,m,Math.min(I[1],ve[1])-Math.abs(M[1])*.22],[Math.max(I[0],ve[0])+Math.abs(M[0])*.22,m+4.06,Math.max(I[1],ve[1])+Math.abs(M[1])*.22],T.steel,S.steel)}i.wall(pe(V,.12),pe(z,-.12),m+3.98,m+4.1,.44,T.steel,S.steel);for(let I of[_,G])i.box([I[0]-.05,m,I[1]-.05],[I[0]+.05,m+4,I[1]+.05],T.titanium,S.titanium);let Se=I=>[I[0]-M[0]*.19,I[1]-M[1]*.19];i.wall(Se(_),Se(G),m+4.32,m+4.35,.02,R,S.line),e.push({key:`store:${x.node}`,rect:J(x.door,m+4.85,O,5.6,.95,.2)});let[ce,ae]=x.display,we=x.heading+Math.PI;i.cylinder(ce,ae,1.15,m,m+.45,32,T.graphiteDeep,S.graphite),i.annulus(ce,ae,1.15,1.19,m+.45,40,T.steel,S.steel),i.annulus(ce,ae,1.19,1.23,m+.006,40,R,S.line);let ee=J(x.display,m+2.2,we,3.6,2.7,.09),Qr=[ce-ee.u[0]*1.9,ae-ee.u[2]*1.9],Zr=[ce+ee.u[0]*1.9,ae+ee.u[2]*1.9];i.wall(Qr,Zr,m+.78,m+3.62,.12,T.blackGlass,S.blackGlass),i.wall([ce-.1*ee.u[0],ae-.1*ee.u[2]],[ce+.1*ee.u[0],ae+.1*ee.u[2]],m+.45,m+.8,.08,T.titanium,S.titanium),s.push({kind:"store",node:x.node,level:g,rect:ee}),u(ce,m,ae,2.4,.22);let Jr=Ee(x.panel.normal[0],x.panel.normal[1]);s.push({kind:"panel",node:x.node,level:g,rect:J(x.panel.at,m+2.35,Jr,4.6,2.9,.03)});let[qe,Ke]=x.holo.at;i.cylinder(qe,Ke,.95,m,m+.18,40,T.steel,S.steel),i.annulus(qe,Ke,.8,.86,m+.182,48,T.panel,S.line),i.annulus(qe,Ke,.01,.76,m+.181,40,T.plaster,{gloss:.5,emit:.22}),i.annulus(qe,Ke,.94,1,m+v-.02,48,T.panel,S.line),u(qe,m,Ke,1.7,.22);let kt=J(x.board.at,m+x.board.bottom+x.board.height/2,x.board.facing,x.board.width,x.board.height,.04),Ue=[kt.u[0]*(x.board.width/2+.05),kt.u[2]*(x.board.width/2+.05)];i.wall([x.board.at[0]-Ue[0],x.board.at[1]-Ue[1]],[x.board.at[0]+Ue[0],x.board.at[1]+Ue[1]],m+x.board.bottom-.05,m+x.board.bottom+x.board.height+.05,.06,T.titanium,S.titanium);for(let I of[-1,1]){let te=x.board.at[0]+Ue[0]*I*.8,ve=x.board.at[1]+Ue[1]*I*.8;i.box([te-.022,m,ve-.022],[te+.022,m+x.board.bottom,ve+.022],T.titanium,S.titanium)}s.push({kind:"board",node:x.node,level:g,rect:kt}),s.push({kind:"examples",node:x.node,level:g,rect:J(x.examples.at,m+x.examples.bottom+x.examples.height/2,x.examples.facing,x.examples.width,x.examples.height,0)});let io=I=>[I[0]+M[0]*.06,I[1]+M[1]*.06],en=io([(_[0]+V[0])/2,(_[1]+V[1])/2]),tn=io([(z[0]+G[0])/2,(z[1]+G[1])/2]);n.push({key:`banner:${x.node}`,node:x.node,level:g,rect:J(en,m+2.05,O,2.2,3.1,0)}),s.push({kind:"window",node:x.node,level:g,rect:J(tn,m+2.25,O,2.4,1.8,0)});let so=Fe(x.bay.id,L-.78,9.25),on=Fe(x.bay.id,L,9.25),rn=Fe(x.bay.id,L-1.45,9.25);i.wall(on,rn,m+3.84,m+3.89,.04,T.steel,S.steel),e.push({key:`blade:${x.node}`,rect:J(so,m+3.45,Ee(W[0],W[1]),1.3,.62,.02)}),e.push({key:`blade:${x.node}`,rect:J(so,m+3.45,Ee(-W[0],-W[1]),1.3,.62,.02)});{let I=x.theater,te=J(I.at,m+I.bottom+I.height/2,I.facing,I.width,I.height,0),ve=[Math.sin(I.facing),-Math.cos(I.facing)],ao=[te.u[0],te.u[2]],ue=($e,le)=>[I.at[0]+ao[0]*$e+ve[0]*le,I.at[1]+ao[1]*$e+ve[1]*le],fe=I.width/2,ct=m+I.bottom+I.height;i.wall(ue(-fe-1.2,-.07),ue(fe+1.2,-.07),m,m+v,.04,T.graphiteDeep,S.graphite),i.wall(ue(-fe-.16,-.035),ue(fe+.16,-.035),m+I.bottom-.16,ct+.16,.04,T.blackGlass,S.blackGlass),i.wall(ue(-fe-.1,-.012),ue(fe+.1,-.012),m+I.bottom-.27,m+I.bottom-.25,.02,T.warm,S.line),i.wall(ue(-fe-.1,-.012),ue(fe+.1,-.012),ct+.25,ct+.27,.02,T.warm,S.line),s.push({kind:"theater",node:x.node,level:g,rect:te}),e.push({key:"theater:marquee",rect:J(I.at,ct+.62,I.facing,3.4,.66,.02)});let nn=[ue(-fe+.2,.06),ue(fe-.2,.06),ue(fe-.2,5.1),ue(-fe+.2,5.1)];i.prism(nn,m,m+.012,T.carpet,S.carpet,{bottom:!1});for(let $e of[-1,1])for(let le=0;le<6;le++){let[Le,He]=ue($e*(fe-.32),.7+le*.82);f(Le,m+.013,He,.12,T.warm,.7)}for(let $e of I.seats){let[le,Le]=$e,He=Math.atan2(I.at[0]-le,I.at[1]-Le);i.cylinder(le,Le,.14,m,m+.24,10,T.steel,S.steel,{caps:!1}),i.cylinder(le,Le,.42,m+.24,m+.3,16,T.steel,S.steel),i.cylinder(le,Le,.4,m+.3,m+.5,16,T.leather,S.leather),i.cylinder(le,Le,.42,m+.3,m+1.1,10,T.leather,S.leather,{arc:[He+Math.PI-1.3,He+Math.PI+1.3]}),i.cylinder(le,Le,.36,m+.5,m+1,10,T.leather,S.leather,{arc:[He+Math.PI-1.15,He+Math.PI+1.15],inward:!0}),u(le,m+.012,Le,.75,.24)}}n.push({key:`medallion:${x.node}`,node:x.node,level:g,rect:Ut(x.medallion,m+.016,Ee(M[0],M[1]),2.3,2.3)});for(let I of dt){let te=x.stations[I],ve=[te.p[0]+Math.sin(te.heading)*.95,te.p[1]-Math.cos(te.heading)*.95];e.push({key:`station:${I}`,rect:Ut(ve,m+.018,te.heading,1.3,.46)})}}for(let x of b.lounges)xn(i,x,m,c,a)}for(let b of[Z[We-1]])if(b){for(let m of b.bays)i.prism(m.poly,B-$,B,T.band,S.band,{bottom:!1}),i.prism(m.poly,B-$,B-$,T.plaster,S.plaster,{top:!1,sides:!1}),p(m.poly,B-$-.012);for(let m of[[[-P,P],[P,P],[L,L],[-L,L]],[[P,P],[P,-P],[L,-L],[L,L]],[[P,-P],[-P,-P],[-L,-L],[L,-L]],[[-P,-P],[-P,P],[-L,L],[-L,-L]]])i.prism(m,B-$,B,T.band,S.band,{bottom:!1}),i.prism(m,B-$,B-$,T.plaster,S.plaster,{top:!1,sides:!1})}l([0,B,0],()=>t.quad([-P,B,-P],[P,B,-P],[P,B,P],[-P,B,P],T.facadeGlass,h(.2,.08),[0,1,0]));for(let[b,m,g]of Mt()){let R=[b[0]+g[0]*.31,b[1]+g[1]*.31],E=[m[0]+g[0]*.31,m[1]+g[1]*.31],A=Math.hypot(E[0]-R[0],E[1]-R[1]),N=(E[0]-R[0])/A,x=(E[1]-R[1])/A;i.wall([R[0]-N*.31,R[1]-x*.31],[E[0]+N*.31,E[1]+x*.31],B-$-.18,B+1.1,.62,T.band,S.band);let M=[b[0]+g[0]*.625,b[1]+g[1]*.625],O=[m[0]+g[0]*.625,m[1]+g[1]*.625];i.wall(M,O,B-$-.17,B-$-.13,.01,T.panel,S.line);let _=V=>[V[0]-g[0]*1.2,V[1]-g[1]*1.2];i.wall(_(b),_(m),B,B+Sr,.4,T.band,S.band);let G=[(_(b)[0]+_(m)[0])/2,(_(b)[1]+_(m)[1])/2];e.push({key:"crown",rect:J(G,B+Sr/2+.1,Ee(g[0],g[1]),22,1.75,.21)});let W=V=>[V[0]+g[0]*.205,V[1]+g[1]*.205];i.wall(W(_(b)),W(_(m)),B+.22,B+.26,.01,T.runner,S.line)}l([0,B+2,0],()=>t.cylinder(0,0,K,B,B+3.4,30,T.glass,h(.1),{caps:!1})),i.cylinder(0,0,K+.08,B+3.4,B+3.62,36,T.steel,S.steel);{let m=B+1.1;for(let[g,R,E]of Mt()){let A=Math.hypot(R[0]-g[0],R[1]-g[1]),N=(R[0]-g[0])/A,x=(R[1]-g[1])/A;for(let M=1;M<Math.round(A/2.5);M++){let O=[g[0]+N*M*2.5,g[1]+x*M*2.5],_=E[1]===1&&Math.abs(O[0])<=be+.7?4.32:-.02,G=[O[0]+E[0]*.02,O[1]+E[1]*.02],W=[O[0]+E[0]*.62,O[1]+E[1]*.62];i.wall(G,W,_,m,.14,T.fin,S.titanium)}}for(let g of[-1,1])for(let R of[-1,1])i.box([g*k-.45+g*.17,-.02,R*k-.45+R*.17],[g*k+.45+g*.17,m+.02,R*k+.45+R*.17],T.band,S.band);for(let[g,R,E]of Mt()){let A=[g[0]+E[0]*.31,g[1]+E[1]*.31],N=[R[0]+E[0]*.31,R[1]+E[1]*.31];E[1]===1?(i.wall(A,[-be-.7,A[1]],-.02,.32,.62,T.graphite,S.graphite),i.wall([be+.7,N[1]],N,-.02,.32,.62,T.graphite,S.graphite)):i.wall(A,N,-.02,.32,.62,T.graphite,S.graphite)}}{i.box([-4.4,4.06,k+.1],[4.4,4.32,k+3.6],T.steel,S.steel),i.quad([-4.2,4.055,k+3.4],[4.2,4.055,k+3.4],[4.2,4.055,k+.3],[-4.2,4.055,k+.3],T.panel,{gloss:.1,emit:.55},[0,-1,0]);for(let b of[-1,1])i.box([b*(be+.36)-.34,-.02,k-.1],[b*(be+.36)+.34,4.06,k+.75],T.band,S.band);e.push({key:"entrance",rect:J([0,k+.12],4.95,Math.PI,7.6,1.3,.05)}),u(0,0,k+2.2,4.2,.1)}i.annulus(0,0,.01,54,-.02,120,T.paving,S.paving);for(let b of[29,38,47])i.annulus(0,0,b-.3,b+.3,-.015,160,T.graphite,S.graphite);i.cylinder(0,0,55,-.5,.04,120,T.graphite,S.graphite,{caps:!1}),i.annulus(0,0,54,55,.04,120,T.graphite,S.graphite),i.cylinder(0,0,54,-.5,.04,120,T.graphite,S.graphite,{caps:!1,inward:!0}),i.annulus(0,0,55,96,-.12,160,T.water,S.water),i.cylinder(0,0,96,-.12,-.02,160,T.graphite,S.graphite,{caps:!1,inward:!0}),i.annulus(0,0,96,97.2,-.02,160,T.graphite,S.graphite),i.annulus(0,0,97.2,2400,-.04,160,T.plateau,S.plateau);for(let b of[-1,1]){let m=b*9.5,g=k+12;i.cylinder(m,g,2.7,-.02,.32,56,T.steel,S.steel),i.annulus(m,g,2.45,2.7,.32,64,T.steel,S.steel),i.annulus(m,g,.01,2.45,.3,56,T.soil,S.matte),i.annulus(m,g,2.72,2.78,.004,64,T.panel,S.line),wr(i,m,.3,g,1.45,b>0?.6:2.4)}i.quad([-.035,0,k+3.7],[.035,0,k+3.7],[.035,0,44],[-.035,0,44],T.runnerInlay,{gloss:.8},[0,1,0]);for(let b=0;b<260;b++){let m=c()*Math.PI*2,g=K+.5+c()*(P-K-.9);a.push(Math.sin(m)*g,c()*B,Math.cos(m)*g,.01+c()*.018,c(),B,.04+c()*.08)}let y=new Xe;return y.cylinder(0,0,K-.12,-.18,.01,40,T.graphite,S.graphiteFloor),y.annulus(0,0,K-.32,K-.26,.015,48,T.panel,S.line),y.cylinder(0,0,K-.12,2.58,2.66,40,T.steel,S.steel),y.annulus(0,0,.3,.55,2.575,32,T.panel,S.panel),{opaque:i.toArray(),glass:t.toArray(),glassPieces:o,decals:new Float32Array(r),signs:e,screens:s,overlays:n,bubbles:new Float32Array(a),cab:y.toArray()}}function wr(i,t,o,r,e,s){let n=(h,d,u)=>[t+(h*Math.cos(s)-u*Math.sin(s))*e,o+d*e,r+(h*Math.sin(s)+u*Math.cos(s))*e],a=[n(0,0,0),n(.32,.68,.08),n(-.22,1.38,-.06),n(.18,2.03,.05),n(-.05,2.53,0)],c=[.21,.15,.11,.075,.045];for(let h=1;h<a.length;h++){let d=a[h-1],u=a[h];d&&u&&Fr(i,d,u,(c[h-1]??.05)*e,(c[h]??.04)*e,10,T.bark,S.bark)}let l=[[n(.32,.68,.08),n(1.1,.98,.3),.85],[n(-.22,1.38,-.06),n(-1.05,1.58,-.35),.8],[n(.18,2.03,.05),n(.85,2.23,-.4),.7],[n(-.05,2.53,0),n(-.05,2.78,.05),.75],[n(-.22,1.38,-.06),n(-.2,1.58,.75),.6]];for(let[h,d,u]of l)Fr(i,h,d,.05*e,.03*e,6,T.bark,S.bark),i.sphere(d,u*e,12,T.foliage,S.foliage,.32),i.sphere([d[0]+u*e*.3,d[1]+u*e*.16,d[2]-u*e*.2],u*e*.62,10,T.foliageLight,S.foliage,.36)}function xn(i,t,o,r,e){let[s,n]=Fe(t.id,15,6);i.cylinder(s,n,1.55,o,o+.5,40,T.graphiteDeep,S.graphite),i.annulus(s,n,1.42,1.55,o+.5,48,T.steel,S.steel),i.annulus(s,n,.01,1.42,o+.47,40,T.soil,S.matte),i.annulus(s,n,1.56,1.6,o+.006,48,T.panel,S.line),wr(i,s,o+.47,n,1,r()*Math.PI*2);let[a,c]=Fe(t.id,13,11);i.cylinder(a,c,1.9,o,o+.34,40,T.graphiteDeep,S.graphite,{caps:!1}),i.annulus(a,c,1.78,1.9,o+.34,48,T.graphite,S.graphite),i.annulus(a,c,.01,1.78,o+.33,48,T.water,S.water);let l=Fe(t.id,17.2,2.5),h=Fe(t.id,17.2,6.5);i.box([Math.min(l[0],h[0])-.36,o,Math.min(l[1],h[1])-.36],[Math.max(l[0],h[0])+.36,o+.44,Math.max(l[1],h[1])+.36],T.travertine,S.band);for(let d=0;d<24;d++)e.push(s+(r()-.5)*5,o+r()*4,n+(r()-.5)*5,.008+r()*.012,r(),5.2,.03+r()*.05)}function Mt(){let i=k;return[[[-i,i],[i,i],[0,1]],[[i,i],[i,-i],[1,0]],[[i,-i],[-i,-i],[0,-1]],[[-i,-i],[-i,i],[-1,0]]]}function Tn(i){return[[[-i,i],[i,i]],[[i,i],[i,-i]],[[i,-i],[-i,-i]],[[-i,-i],[-i,i]]]}function Mr(i,t,o){let r=Math.hypot(t[0]-i[0],t[1]-i[1]);return[i[0]+(t[0]-i[0])/r*o,i[1]+(t[1]-i[1])/r*o]}function En(){let i=P,t=Qe;return[[[-i,i],[-t,i]],[[t,i],[i,i]],[[i,i],[i,-i]],[[i,-i],[-i,-i]],[[-i,-i],[-i,i]],[[-t,ft],[-t,i]],[[t,ft],[t,i]]]}var Rn=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),Sn=[.89,.137,.173],Fn=[.55,.64,.73],Mn=[.77,.525,0];function q(i,t,o,r,e=0){let s=u=>u.replace(`#version 300 es
`,`#version 300 es
#define Q ${e}
`),n=(u,f)=>{let p=i.createShader(u);if(!p)throw new Error(`${r}: cannot create shader`);if(i.shaderSource(p,s(f)),i.compileShader(p),!i.getShaderParameter(p,i.COMPILE_STATUS))throw new Error(`${r}: ${i.getShaderInfoLog(p)??"compile failed"}`);return p},a=i.createProgram();if(!a)throw new Error(`${r}: cannot create program`);let c=n(i.VERTEX_SHADER,t),l=n(i.FRAGMENT_SHADER,o);if(i.attachShader(a,c),i.attachShader(a,l),i.linkProgram(a),!i.getProgramParameter(a,i.LINK_STATUS))throw new Error(`${r}: ${i.getProgramInfoLog(a)??"link failed"}`);i.deleteShader(c),i.deleteShader(l);let h=new Map,d=i.getProgramParameter(a,i.ACTIVE_UNIFORMS);for(let u=0;u<d;u++){let f=i.getActiveUniform(a,u);f&&h.set(f.name,i.getUniformLocation(a,f.name))}return{p:a,u:h}}function An(i,t){let o=r=>{let e=r*t;return Math.min(1,Math.max(0,e*(2.51*e+.03)/(e*(2.43*e+.59)+.14)))**.45454545454545453};return[o(i[0]),o(i[1]),o(i[2])]}var At=class i{gl;tier;prog;post=null;vaos;counts={opaque:0,cab:0,decal:0,signs:0,bubbles:0};world;skyTex=null;skyLod=6;atlasTex=null;black;shadowTex=null;shadowMat=new Float32Array(16);shadowTexel=1/2048;shadowBias=2e-4;screenTex=new Map;ribbonCount=0;ribbonLength=0;ribbonBuf;flatBuf;signBuf;leaderBuf;reticleBuf;shell=null;beam=null;holoGpu=new Map;order;dist;scene=null;hdr=null;mirror=null;bloom=[];samples=4;mirrorVP=new Float32Array(16);mirrorInv=new Float32Array(16);reflect=new Float32Array(16);constructor(t,o,r){this.gl=t,this.world=o,this.tier=r,this.prog=this.programs(r==="cinematic"?1:0),r==="cinematic"&&(this.post=this.postPrograms());let e=a=>this.vao(a,[3,3,3,4]);this.counts.opaque=o.opaque.length/bt,this.counts.cab=o.cab.length/bt,this.counts.decal=o.decals.length/Ar,this.counts.bubbles=o.bubbles.length/Jt;let s=new Float32Array(o.screens.length*30);o.screens.forEach((a,c)=>s.set(yt(a.rect),c*30));let n=new Float32Array(o.overlays.length*30);o.overlays.forEach((a,c)=>n.set(yt(a.rect),c*30)),this.signBuf=t.createBuffer(),this.ribbonBuf=t.createBuffer(),this.flatBuf=t.createBuffer(),this.leaderBuf=t.createBuffer(),this.reticleBuf=t.createBuffer(),this.vaos={opaque:e(o.opaque),glass:e(o.glass),cab:e(o.cab),decal:this.vao(o.decals,[3,2,4,1]),full:this.vao(new Float32Array([-1,-1,3,-1,-1,3]),[2]),signs:this.vaoFor(this.signBuf,[3,2]),screens:this.vao(s,[3,2]),overlays:this.vao(n,[3,2]),bubbles:this.bubbleVao(o.bubbles),ribbon:this.vaoFor(this.ribbonBuf,[3,2]),flat:this.vaoFor(this.flatBuf,[3]),leaders:this.vaoFor(this.leaderBuf,[3]),reticles:this.vaoFor(this.reticleBuf,[3,3])},this.order=o.glassPieces.map((a,c)=>c),this.dist=new Float32Array(o.glassPieces.length),this.black=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.black),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),this.makeSky(),this.makeShadows()}programs(t){let o=this.gl;return{lit:q(o,Zt,Ko,"lit",t),glass:q(o,Zt,Qo,"glass",t),sky:q(o,Ie,Zo,"sky",t),tex:q(o,or,rr,"textured",t),decal:q(o,nr,ir,"decal",t),mote:q(o,sr,ar,"motes",t),ribbon:q(o,lr,cr,"ribbon",t),flat:q(o,ur,fr,"flat",t),shell:q(o,Ft,dr,"hologram shell",t),organ:q(o,Ft,hr,"hologram organs",t),line:q(o,pr,vr,"hologram lines",t),reticle:q(o,br,yr,"hologram targets",t),beam:q(o,Ft,mr,"hologram beam",t),dim:q(o,Ie,gr,"house lights",t)}}postPrograms(){let t=this.gl;return{pre:q(t,Ie,xr,"bloom"),down:q(t,Ie,Tr,"bloom down"),up:q(t,Ie,Er,"bloom up"),composite:q(t,Ie,Rr,"composite")}}setTier(t){if(t===this.tier||t==="cinematic")return;let o=this.gl,r=this.prog;this.prog=this.programs(0);for(let e of Object.values(r))o.deleteProgram(e.p);if(this.post)for(let e of Object.values(this.post))o.deleteProgram(e.p);this.post=null,this.freeTargets(),this.tier="basic"}vao(t,o){let r=this.gl,e=r.createBuffer();return r.bindBuffer(r.ARRAY_BUFFER,e),r.bufferData(r.ARRAY_BUFFER,t,r.STATIC_DRAW),this.vaoFor(e,o)}vaoFor(t,o){let r=this.gl,e=r.createVertexArray();r.bindVertexArray(e),r.bindBuffer(r.ARRAY_BUFFER,t);let s=o.reduce((a,c)=>a+c,0)*4,n=0;return o.forEach((a,c)=>{r.enableVertexAttribArray(c),r.vertexAttribPointer(c,a,r.FLOAT,!1,s,n),n+=a*4}),r.bindVertexArray(null),e}bubbleVao(t){let o=this.gl,r=o.createVertexArray();o.bindVertexArray(r);let e=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,e),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),o.STATIC_DRAW),o.enableVertexAttribArray(0),o.vertexAttribPointer(0,2,o.FLOAT,!1,0,0);let s=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,s),o.bufferData(o.ARRAY_BUFFER,t,o.STATIC_DRAW);let n=Jt*4;return o.enableVertexAttribArray(1),o.vertexAttribPointer(1,3,o.FLOAT,!1,n,0),o.vertexAttribDivisor(1,1),o.enableVertexAttribArray(2),o.vertexAttribPointer(2,4,o.FLOAT,!1,n,12),o.vertexAttribDivisor(2,1),o.bindVertexArray(null),r}makeSky(){let t=this.gl,o=this.tier==="cinematic",r=2048,e=r/2,s=t.createTexture();t.bindTexture(t.TEXTURE_2D,s),o?t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,r,e,0,t.RGBA,t.HALF_FLOAT,null):t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,r,e,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);let n=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,n),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,s,0);let a=q(t,Ie,Jo,"skygen");t.viewport(0,0,r,e),t.disable(t.DEPTH_TEST),t.disable(t.BLEND),t.useProgram(a.p),t.uniform3f(a.u.get("uSun")??null,ke[0],ke[1],ke[2]),t.bindVertexArray(this.vaos.full),t.drawArrays(t.TRIANGLES,0,3),t.bindVertexArray(null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteFramebuffer(n),t.deleteProgram(a.p),t.bindTexture(t.TEXTURE_2D,s),t.generateMipmap(t.TEXTURE_2D),this.skyTex=s,this.skyLod=Math.log2(r)-3}makeShadows(){let t=this.gl,o=t.getParameter(t.MAX_TEXTURE_SIZE),r=this.tier==="cinematic"&&o>=4096?3072:2048,e=t.createTexture();t.bindTexture(t.TEXTURE_2D,e),t.texStorage2D(t.TEXTURE_2D,1,t.DEPTH_COMPONENT24,r,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_COMPARE_FUNC,t.LEQUAL);let s=t.createFramebuffer();if(t.bindFramebuffer(t.FRAMEBUFFER,s),t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,e,0),t.drawBuffers([t.NONE]),t.readBuffer(t.NONE),t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE){t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteFramebuffer(s),t.deleteTexture(e);return}let n=new Float32Array(16),a=[0,18,0];pt(n,[a[0]+ke[0]*200,a[1]+ke[1]*200,a[2]+ke[2]*200],a);let c=1/0,l=-1/0,h=1/0,d=-1/0,u=1/0,f=-1/0;for(let y of[-82,82])for(let b of[-1.5,48])for(let m of[-82,82]){let g=(n[0]??0)*y+(n[4]??0)*b+(n[8]??0)*m+(n[12]??0),R=(n[1]??0)*y+(n[5]??0)*b+(n[9]??0)*m+(n[13]??0),E=(n[2]??0)*y+(n[6]??0)*b+(n[10]??0)*m+(n[14]??0);c=Math.min(c,g),l=Math.max(l,g),h=Math.min(h,R),d=Math.max(d,R),u=Math.min(u,E),f=Math.max(f,E)}let p=new Float32Array(16);Co(p,c,l,h,d,-f-5,-u+5),nt(this.shadowMat,p,n);let v=q(t,er,tr,"shadow");t.viewport(0,0,r,r),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.depthMask(!0),t.disable(t.BLEND),t.clear(t.DEPTH_BUFFER_BIT),t.useProgram(v.p),t.uniformMatrix4fv(v.u.get("uViewProj")??null,!1,this.shadowMat),t.bindVertexArray(this.vaos.opaque),t.enable(t.POLYGON_OFFSET_FILL),t.polygonOffset(1.5,3),t.drawArrays(t.TRIANGLES,0,this.counts.opaque),t.disable(t.POLYGON_OFFSET_FILL),t.bindVertexArray(null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteFramebuffer(s),t.deleteProgram(v.p),this.shadowTex=e,this.shadowTexel=1/r,this.shadowBias=.05/(f-u+10)}setAtlas(t){let o=this.gl,r=o.createTexture();o.bindTexture(o.TEXTURE_2D,r),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,t.canvas),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.generateMipmap(o.TEXTURE_2D),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR_MIPMAP_LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),this.atlasTex=r;let e=[];for(let s of this.world.signs){let n=t.rects.get(s.key);if(!n)continue;let a=yt(s.rect);for(let c=0;c<6;c++){let l=c*5,h=a[l+3]??0,d=a[l+4]??0;e.push(a[l]??0,a[l+1]??0,a[l+2]??0,n.u0+(n.u1-n.u0)*h,n.v0+(n.v1-n.v0)*d)}}o.bindBuffer(o.ARRAY_BUFFER,this.signBuf),o.bufferData(o.ARRAY_BUFFER,new Float32Array(e),o.STATIC_DRAW),this.counts.signs=e.length/5}static screenKey(t){return t.kind==="directory"?`directory:${t.level}`:t.kind==="window"?`store:${t.node??""}`:`${t.kind}:${t.node??""}`}screenGrade(t){return this.screenTex.get(t)?.grade??0}setScreenImage(t,o,r,e,s=!1){let n=this.gl,a=this.screenTex.get(t);if(a&&a.grade>r)return;let c=a?.tex&&a.grade!==4?a.tex:n.createTexture();n.bindTexture(n.TEXTURE_2D,c),s&&n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,o),s&&n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e&&n.generateMipmap(n.TEXTURE_2D),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,e?n.LINEAR_MIPMAP_LINEAR:n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),this.screenTex.set(t,{tex:c,grade:r,lastUsed:performance.now()})}setScreenTexture(t,o,r=null){let e=this.screenTex.get(t)??null;return o?this.screenTex.set(t,{tex:o,grade:4,lastUsed:performance.now()}):r?this.screenTex.set(t,r):this.screenTex.delete(t),e}evict(t){for(let[o,r]of this.screenTex)r.grade!==3||t(o)||(this.gl.deleteTexture(r.tex),this.screenTex.delete(o));for(let[o,r]of this.holoGpu)t(`holo:${o}`)||(this.freeHolo(r),this.holoGpu.delete(o))}setRibbon(t){let o=this.gl;if(!t||t.length<2){this.ribbonCount=0;return}let r=.26,e=[],s=0;for(let n=1;n<t.length;n++){let a=t[n-1],c=t[n];if(!a||!c)continue;let l=c[0]-a[0],h=c[2]-a[2],d=Math.hypot(l,h);if(d<.001)continue;let u=-h/d*r,f=l/d*r,p=(v,y,b)=>e.push(v[0]+u*y,v[1]+.03,v[2]+f*y,b,y);p(a,-1,s),p(c,-1,s+d),p(c,1,s+d),p(a,-1,s),p(c,1,s+d),p(a,1,s),s+=d}o.bindBuffer(o.ARRAY_BUFFER,this.ribbonBuf),o.bufferData(o.ARRAY_BUFFER,new Float32Array(e),o.DYNAMIC_DRAW),this.ribbonCount=e.length/5,this.ribbonLength=s}draw(t,o,r){if(this.tier==="cinematic"){try{if(this.drawCinematic(t,o,r))return}catch(s){console.warn("XI Outlet: the cinematic renderer failed; using the basic one",s)}this.setTier("basic")}let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,null),this.drawScene(t,{viewProj:t.viewProj,invViewProj:t.invViewProj,eye:t.eye,mirror:!1,clipY:0,w:o,h:r},!0)}drawCinematic(t,o,r){let e=this.gl;if(!this.ensureTargets(o,r))return!1;let s=this.scene,n=this.hdr,a=this.post;if(!s||!n||!a)return!1;if(t.mirrorY!==null&&this.mirror){let u=t.mirrorY,f=this.reflect;f.set([1,0,0,0,0,-1,0,0,0,0,1,0,0,2*u,0,1]),nt(this.mirrorVP,t.viewProj,f),vt(this.mirrorInv,this.mirrorVP),e.bindFramebuffer(e.FRAMEBUFFER,this.mirror.fbo),this.drawScene(t,{viewProj:this.mirrorVP,invViewProj:this.mirrorInv,eye:[t.eye[0],2*u-t.eye[1],t.eye[2]],mirror:!0,clipY:u,w:this.mirror.w,h:this.mirror.h},!1)}e.bindFramebuffer(e.FRAMEBUFFER,s.fbo),this.drawScene(t,{viewProj:t.viewProj,invViewProj:t.invViewProj,eye:t.eye,mirror:!1,clipY:0,w:o,h:r},!1),e.bindFramebuffer(e.READ_FRAMEBUFFER,s.fbo),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,n.fbo),e.blitFramebuffer(0,0,o,r,0,0,o,r,e.COLOR_BUFFER_BIT,e.NEAREST),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.disable(e.DEPTH_TEST),e.disable(e.BLEND),e.depthMask(!1),e.bindVertexArray(this.vaos.full),e.activeTexture(e.TEXTURE0);let c=(u,f,p)=>{e.bindFramebuffer(e.FRAMEBUFFER,p.fbo),e.viewport(0,0,p.w,p.h),e.useProgram(u.p),e.bindTexture(e.TEXTURE_2D,f.tex),e.uniform1i(u.u.get("uTex")??null,0),e.uniform2f(u.u.get("uTexel")??null,1/f.w,1/f.h),e.drawArrays(e.TRIANGLES,0,3)},l=this.bloom,h=l[0];if(h){e.useProgram(a.pre.p),e.uniform1f(a.pre.u.get("uThreshold")??null,oe.bloomThreshold),c(a.pre,n,h);for(let u=1;u<l.length;u++){let f=l[u-1],p=l[u];f&&p&&c(a.down,f,p)}e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE);for(let u=l.length-1;u>0;u--){let f=l[u],p=l[u-1];f&&p&&c(a.up,f,p)}e.disable(e.BLEND)}e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,o,r);let d=a.composite;return e.useProgram(d.p),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n.tex),e.uniform1i(d.u.get("uScene")??null,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,h?.tex??this.black),e.uniform1i(d.u.get("uBloom")??null,1),e.activeTexture(e.TEXTURE0),e.uniform1f(d.u.get("uBloomStrength")??null,h?oe.bloomStrength:0),e.uniform1f(d.u.get("uExposure")??null,t.exposure),e.uniform1f(d.u.get("uGrain")??null,oe.grain),e.uniform1f(d.u.get("uTime")??null,t.time),e.drawArrays(e.TRIANGLES,0,3),e.bindVertexArray(null),e.depthMask(!0),!0}ensureTargets(t,o){if(this.scene&&this.scene.w===t&&this.scene.h===o)return!0;this.freeTargets();let r=this.gl;if(!r.getExtension("EXT_color_buffer_float"))return!1;let e=r.getInternalformatParameter(r.RENDERBUFFER,r.RGBA16F,r.SAMPLES);this.samples=Math.min(4,e&&e.length>0?e[0]??0:0);let s=(l,h)=>{let d=r.createTexture();return r.bindTexture(r.TEXTURE_2D,d),r.texImage2D(r.TEXTURE_2D,0,r.RGBA16F,l,h,0,r.RGBA,r.HALF_FLOAT,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),d},n=()=>r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;{let l=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,l);let h=r.createRenderbuffer();r.bindRenderbuffer(r.RENDERBUFFER,h),this.samples>0?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,r.RGBA16F,t,o):r.renderbufferStorage(r.RENDERBUFFER,r.RGBA16F,t,o),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,h);let d=r.createRenderbuffer();r.bindRenderbuffer(r.RENDERBUFFER,d),this.samples>0?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,r.DEPTH_COMPONENT24,t,o):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT24,t,o),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,d);let u=[h,d].filter(f=>f!==null);if(this.scene={fbo:l,tex:null,rbs:u,w:t,h:o},!n())return this.failTargets()}{let l=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,l);let h=s(t,o);if(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,h,0),this.hdr={fbo:l,tex:h,rbs:[],w:t,h:o},!n())return this.failTargets()}{let l=Math.max(1,Math.round(t/2)),h=Math.max(1,Math.round(o/2)),d=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,d);let u=s(l,h);r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,u,0);let f=r.createRenderbuffer();if(r.bindRenderbuffer(r.RENDERBUFFER,f),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT24,l,h),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,f),this.mirror={fbo:d,tex:u,rbs:f?[f]:[],w:l,h},!n())return this.failTargets()}let a=t,c=o;for(let l=0;l<5;l++){a=Math.max(1,Math.round(a/2)),c=Math.max(1,Math.round(c/2));let h=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,h);let d=s(a,c);if(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,d,0),this.bloom.push({fbo:h,tex:d,rbs:[],w:a,h:c}),!n())return this.failTargets()}return r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindRenderbuffer(r.RENDERBUFFER,null),!0}failTargets(){return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.freeTargets(),!1}freeTargets(){let t=this.gl;for(let o of[this.scene,this.hdr,this.mirror,...this.bloom])if(o){t.deleteFramebuffer(o.fbo),t.deleteTexture(o.tex);for(let r of o.rbs)t.deleteRenderbuffer(r)}this.scene=null,this.hdr=null,this.mirror=null,this.bloom=[]}drawScene(t,o,r){let e=this.gl,s=this.prog;e.viewport(0,0,o.w,o.h),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.disable(e.CULL_FACE),e.disable(e.BLEND),e.depthMask(!0);let n=!o.mirror&&!r&&t.mirrorY!==null&&this.mirror!==null,a=An(oe.fog,t.exposure);e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.skyTex),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.shadowTex),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,n?this.mirror?.tex??this.black:this.black),e.activeTexture(e.TEXTURE0);let c=d=>{e.useProgram(d.p);let u=(b,m)=>{let g=d.u.get(b);g&&e.uniform1f(g,m)},f=(b,m)=>{let g=d.u.get(b);g&&e.uniform3f(g,m[0]??0,m[1]??0,m[2]??0)};e.uniformMatrix4fv(d.u.get("uViewProj")??null,!1,o.viewProj),f("uCamPos",o.eye),f("uSun",ke),f("uSunColor",oe.sun),f("uSkyAmb",oe.sky),f("uGroundAmb",oe.ground),f("uInterior",oe.interior),u("uPanel",oe.panel),u("uEmitGain",oe.emit),f("uFog",oe.fog),f("uFogDisplay",a),u("uFogDensity",oe.fogDensity),u("uTime",t.time),u("uDirect",r?1:0),u("uExposure",t.exposure),u("uSkyLod",this.skyLod),u("uClip",o.mirror?1:0),u("uClipY",o.clipY),u("uMirrorOn",n?1:0),u("uMirrorY",t.mirrorY??-1e3);let p=d.u.get("uViewport");p&&e.uniform2f(p,o.w,o.h),u("uShadowOn",this.shadowTex?1:0),u("uShadowTexel",this.shadowTexel),u("uShadowBias",this.shadowBias);let v=d.u.get("uShadowMat");v&&e.uniformMatrix4fv(v,!1,this.shadowMat);let y=(b,m)=>{let g=d.u.get(b);g&&e.uniform1i(g,m)};y("uSky",1),y("uShadow",2),y("uMirror",3)};c(s.lit),e.uniform3f(s.lit.u.get("uOffset")??null,0,0,0),e.bindVertexArray(this.vaos.opaque),e.drawArrays(e.TRIANGLES,0,this.counts.opaque),e.uniform3f(s.lit.u.get("uOffset")??null,0,t.cabY,0),e.bindVertexArray(this.vaos.cab),e.drawArrays(e.TRIANGLES,0,this.counts.cab),c(s.tex),e.uniform1i(s.tex.u.get("uTex")??null,0),e.bindVertexArray(this.vaos.screens);let l=performance.now();this.world.screens.forEach((d,u)=>{let f=i.screenKey(d),p=this.screenTex.get(f);p&&(p.lastUsed=l);let v=d.kind==="store"||d.kind==="directory",y=d.kind==="panel"||d.kind==="board"||d.kind==="examples";e.uniform1i(s.tex.u.get("uMode")??null,v?1:2),e.uniform1f(s.tex.u.get("uHasTex")??null,p?.tex?1:0),e.uniform1f(s.tex.u.get("uFlip")??null,p?.grade===4?1:0);let b=y?[.97,.97,.96]:d.kind==="directory"?[.05,.06,.08]:[.03,.04,.05];e.uniform4f(s.tex.u.get("uPlaceholder")??null,b[0]??0,b[1]??0,b[2]??0,1),e.bindTexture(e.TEXTURE_2D,p?.tex??this.black),e.drawArrays(e.TRIANGLES,u*6,6)}),e.depthMask(!1),c(s.sky),e.uniformMatrix4fv(s.sky.u.get("uInvViewProj")??null,!1,o.invViewProj),e.bindVertexArray(this.vaos.full),e.drawArrays(e.TRIANGLES,0,3),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.POLYGON_OFFSET_FILL),e.polygonOffset(-1,-4),c(s.decal),e.bindVertexArray(this.vaos.decal),e.drawArrays(e.TRIANGLES,0,this.counts.decal),this.ribbonCount>0&&!o.mirror&&(c(s.ribbon),e.uniform1f(s.ribbon.u.get("uLength")??null,this.ribbonLength),e.bindVertexArray(this.vaos.ribbon),e.drawArrays(e.TRIANGLES,0,this.ribbonCount)),this.atlasTex&&this.counts.signs>0&&(c(s.tex),e.uniform1i(s.tex.u.get("uMode")??null,0),e.uniform1f(s.tex.u.get("uHasTex")??null,1),e.uniform1f(s.tex.u.get("uFlip")??null,0),e.bindTexture(e.TEXTURE_2D,this.atlasTex),e.bindVertexArray(this.vaos.signs),e.drawArrays(e.TRIANGLES,0,this.counts.signs));{let d=!1;this.world.overlays.forEach((u,f)=>{let p=this.screenTex.get(u.key);p?.tex&&(d||(c(s.tex),e.uniform1i(s.tex.u.get("uMode")??null,0),e.uniform1f(s.tex.u.get("uHasTex")??null,1),e.uniform1f(s.tex.u.get("uFlip")??null,0),e.bindVertexArray(this.vaos.overlays),d=!0),p.lastUsed=l,e.bindTexture(e.TEXTURE_2D,p.tex),e.drawArrays(e.TRIANGLES,f*6,6))})}if(e.disable(e.POLYGON_OFFSET_FILL),!o.mirror)for(let d of t.holos)this.drawHolo(d,t,r);c(s.glass),e.uniform3f(s.glass.u.get("uOffset")??null,0,0,0),e.uniform1f(s.glass.u.get("uFade")??null,t.fade),e.bindVertexArray(this.vaos.glass);let h=this.world.glassPieces;for(let d=0;d<h.length;d++){let u=h[d]?.centre??[0,0,0];this.dist[d]=(u[0]-o.eye[0])**2+(u[1]-o.eye[1])**2+(u[2]-o.eye[2])**2}this.order.sort((d,u)=>(this.dist[u]??0)-(this.dist[d]??0));for(let d of this.order){let u=h[d];u&&e.drawArrays(e.TRIANGLES,u.first,u.count)}if(!o.mirror&&this.counts.bubbles>0&&(c(s.mote),e.uniform3f(s.mote.u.get("uRight")??null,t.right[0],t.right[1],t.right[2]),e.uniform3f(s.mote.u.get("uUp")??null,t.up[0],t.up[1],t.up[2]),e.bindVertexArray(this.vaos.bubbles),e.drawArraysInstanced(e.TRIANGLES,0,6,this.counts.bubbles)),!o.mirror&&t.dim>.001&&(e.disable(e.DEPTH_TEST),e.useProgram(s.dim.p),e.uniform1f(s.dim.u.get("uDim")??null,t.dim),e.bindVertexArray(this.vaos.full),e.drawArrays(e.TRIANGLES,0,3),e.enable(e.DEPTH_TEST)),!o.mirror&&t.highlight){let{min:d,max:u,rgba:f}=t.highlight;c(s.flat),e.uniform4f(s.flat.u.get("uColor")??null,f[0]*f[3],f[1]*f[3],f[2]*f[3],f[3]),e.bindBuffer(e.ARRAY_BUFFER,this.flatBuf),e.bufferData(e.ARRAY_BUFFER,Pn(d,u),e.DYNAMIC_DRAW),e.bindVertexArray(this.vaos.flat),e.drawArrays(e.TRIANGLES,0,36)}e.bindVertexArray(null),e.depthMask(!0),e.disable(e.BLEND)}owned(t,o,r,e){let s=this.gl,n=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,n),s.bufferData(s.ARRAY_BUFFER,t,s.STATIC_DRAW);let a=this.vaoFor(n,o);return n&&e.push(n),a&&r.push(a),a}holoBuffers(t){let o=this.holoGpu.get(t.node);if(o)return o;let r=[],e=[],s=l=>({vao:l.length>0?this.owned(l,[3,3],r,e):null,count:l.length/Tt}),n=l=>({vao:l.length>0?this.owned(new Float32Array(l.flat()),[3],r,e):null,count:l.length}),a=new Map;for(let l of t.lines){let h=l.color.join(","),d=a.get(h)??{color:l.color,data:[]};a.set(h,d);for(let u=1;u<l.points.length;u++)d.data.push(...l.points[u-1]??[0,0,0],...l.points[u]??[0,0,0])}let c={vaos:r,bufs:e,lit:s(Yt(t.lit)),ghosts:s(Yt(t.ghosts)),lines:[...a.values()].map(l=>({vao:this.owned(new Float32Array(l.data),[3],r,e),count:l.data.length/3,color:l.color})),dots:n(t.dots),beads:n(t.beads),lastUsed:performance.now()};return this.holoGpu.set(t.node,c),c}freeHolo(t){for(let o of t.vaos)this.gl.deleteVertexArray(o);for(let o of t.bufs)this.gl.deleteBuffer(o)}drawHolo(t,o,r){let e=this.gl,s=this.prog,n=t.holo,a=this.holoBuffers(n);if(a.lastUsed=performance.now(),!this.shell){let p=Ho();this.shell={vao:this.vao(p,[3,3]),count:p.length/Tt}}if(!this.beam){let p=Go();this.beam={vao:this.vao(p,[3,3]),count:p.length/Tt}}let c=n.tint,l=(p,v)=>{e.useProgram(p.p),e.uniformMatrix4fv(p.u.get("uViewProj")??null,!1,o.viewProj),e.uniformMatrix4fv(p.u.get("uModel")??null,!1,v);let y=p.u.get("uCamPos");y&&e.uniform3f(y,o.eye[0],o.eye[1],o.eye[2]);let b=p.u.get("uDirect");b&&e.uniform1f(b,r?1:0);let m=p.u.get("uExposure");m&&e.uniform1f(m,o.exposure)},h=p=>{this.beam&&(l(s.beam,t.model),e.uniform1f(s.beam.u.get("uTime")??null,o.time),e.uniform1f(s.beam.u.get("uSide")??null,p),e.bindVertexArray(this.beam.vao),e.drawArrays(e.TRIANGLES,0,this.beam.count))};h(-1),l(s.organ,t.model);let d=(p,v,y,b)=>{!p.vao||p.count===0||(e.uniform3f(s.organ.u.get("uColor")??null,v[0],v[1],v[2]),e.uniform1f(s.organ.u.get("uAlpha")??null,y),e.uniform1f(s.organ.u.get("uPulse")??null,b),e.bindVertexArray(p.vao),e.drawArrays(e.TRIANGLES,0,p.count))};d(a.ghosts,[.42,.5,.58],n.whole?.1:.14,0),d(a.lit,c,.86,t.pulse),l(s.line,t.model);let u=(p,v)=>e.uniform4f(s.line.u.get("uColor")??null,p[0]*v,p[1]*v,p[2]*v,v);e.uniform1f(s.line.u.get("uRound")??null,0);for(let p of a.lines)u(p.color,.92),e.bindVertexArray(p.vao),e.drawArrays(e.LINES,0,p.count);e.uniform1f(s.line.u.get("uRound")??null,1),a.dots.vao&&(u(c,.75),e.uniform1f(s.line.u.get("uPointSize")??null,.017*o.pxPerMetre),e.bindVertexArray(a.dots.vao),e.drawArrays(e.POINTS,0,a.dots.count)),a.beads.vao&&(u(Mn,.95),e.uniform1f(s.line.u.get("uPointSize")??null,.03*o.pxPerMetre),e.bindVertexArray(a.beads.vao),e.drawArrays(e.POINTS,0,a.beads.count)),l(s.line,Rn),e.uniform1f(s.line.u.get("uRound")??null,0),e.bindVertexArray(this.vaos.leaders);for(let[p,v,y]of[[t.rings,Fn,.5],[t.leaders,Sn,.9]])p.length!==0&&(u(v,y),e.bindBuffer(e.ARRAY_BUFFER,this.leaderBuf),e.bufferData(e.ARRAY_BUFFER,p,e.DYNAMIC_DRAW),e.drawArrays(e.LINES,0,p.length/3));let f=Math.floor(t.targets.length/4);if(f>0){let p=new Float32Array(f*36),v=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1];for(let y=0;y<f;y++){let b=t.targets[y*4]??0,m=t.targets[y*4+1]??0,g=t.targets[y*4+2]??0,R=t.targets[y*4+3]??0;for(let E=0;E<6;E++)p.set([b,m,g,v[E*2]??0,v[E*2+1]??0,R],(y*6+E)*6)}e.useProgram(s.reticle.p),e.uniformMatrix4fv(s.reticle.u.get("uViewProj")??null,!1,o.viewProj),e.uniform3f(s.reticle.u.get("uRight")??null,o.right[0],o.right[1],o.right[2]),e.uniform3f(s.reticle.u.get("uUp")??null,o.up[0],o.up[1],o.up[2]),e.uniform3f(s.reticle.u.get("uCamPos")??null,o.eye[0],o.eye[1],o.eye[2]),e.uniform1f(s.reticle.u.get("uTime")??null,o.time),e.uniform1f(s.reticle.u.get("uDirect")??null,r?1:0),e.uniform1f(s.reticle.u.get("uExposure")??null,o.exposure),e.bindBuffer(e.ARRAY_BUFFER,this.reticleBuf),e.bufferData(e.ARRAY_BUFFER,p,e.DYNAMIC_DRAW),e.bindVertexArray(this.vaos.reticles),e.drawArrays(e.TRIANGLES,0,f*6)}l(s.shell,t.model),e.uniform3f(s.shell.u.get("uTint")??null,c[0],c[1],c[2]),e.uniform1f(s.shell.u.get("uWhole")??null,n.whole||n.skin?1:0),e.uniform1f(s.shell.u.get("uTime")??null,o.time),e.uniform1f(s.shell.u.get("uScanY")??null,t.scanY),e.bindVertexArray(this.shell.vao),e.colorMask(!1,!1,!1,!1),e.depthMask(!0),e.drawArrays(e.TRIANGLES,0,this.shell.count),e.colorMask(!0,!0,!0,!0),e.depthMask(!1),e.drawArrays(e.TRIANGLES,0,this.shell.count),h(1)}dispose(){let t=this.gl;for(let o of this.holoGpu.values())this.freeHolo(o);this.holoGpu.clear();for(let o of Object.values(this.prog))t.deleteProgram(o.p);if(this.post)for(let o of Object.values(this.post))t.deleteProgram(o.p);this.freeTargets();for(let o of this.screenTex.values())o.grade!==4&&t.deleteTexture(o.tex);t.deleteTexture(this.skyTex),t.deleteTexture(this.atlasTex),t.deleteTexture(this.shadowTex),t.deleteTexture(this.black)}};function Pn(i,t){let[o,r,e]=i,[s,n,a]=t,c=(l,h,d,u)=>[...l,...h,...d,...l,...d,...u];return new Float32Array([...c([o,r,a],[s,r,a],[s,n,a],[o,n,a]),...c([s,r,e],[o,r,e],[o,n,e],[s,n,e]),...c([s,r,a],[s,r,e],[s,n,e],[s,n,a]),...c([o,r,e],[o,r,a],[o,n,a],[o,n,e]),...c([o,n,a],[s,n,a],[s,n,e],[o,n,e]),...c([o,r,e],[s,r,e],[s,r,a],[o,r,a])])}var Ye=[0,23,0],wn={az:34*Ve,el:7*Ve,dist:160},je=64*Ve,to=34*Ve,Lr=[52,280],_r=[3*Ve,62*Ve],Ln=3.4,_n=6.8,In=1.9;function Ir(i){let t=Math.cos(i.el),o=[Ye[0]+i.dist*t*Math.sin(i.az),Ye[1]+i.dist*Math.sin(i.el),Ye[2]+i.dist*t*Math.cos(i.az)],r=Ye[0]-o[0],e=Ye[1]-o[1],s=Ye[2]-o[2];return{eye:o,heading:Ee(r,s),pitch:Math.atan2(e,Math.hypot(r,s)),fov:to,level:null}}function wt(i,t,o,r,e=Q){return{eye:[t[0],re(i)+e,t[1]],heading:o,pitch:r,fov:je,level:i}}function De(i){let t=ge(i,0,1);return t*t*(3-2*t)}function Pt(i,t,o,r){let e=Math.max(.001,Io(t)),s=ge(e/3,3.2,8),n=Math.max(.6,e/s),a=[0];for(let p=1;p<t.length;p++){let v=t[p-1],y=t[p];a.push((a[p-1]??0)+(v&&y?Math.hypot(y[0]-v[0],y[1]-v[1]):0))}let c=p=>{for(let v=1;v<t.length;v++){let y=a[v-1]??0,b=a[v]??0;if(p<=b||v===t.length-1){let m=t[v-1]??[0,0],g=t[v]??m,R=b>y?ge((p-y)/(b-y),0,1):1;return[ye(m[0],g[0],R),ye(m[1],g[1],R)]}}return t[t.length-1]??[0,0]},l=t[t.length-1]??[0,0],h=t[t.length-2]??l,d=Ee(l[0]-h[0],l[1]-h[1]),u=p=>{let v=c(p),y=c(Math.min(e,p+2.4));return Math.hypot(y[0]-v[0],y[1]-v[1])<.05?d:Ee(y[0]-v[0],y[1]-v[1])},f=re(i);return{duration:n,interruptible:!0,route:t.map(p=>[p[0],f,p[1]]),at(p){let v=ot(p),y=c(v*e),b=u(v*e);b=o.heading+tt(o.heading,b)*De(p/.28),r.heading!==null&&(b+=tt(b,r.heading)*De((p-.66)/.34));let m=ye(ye(o.eye??Q,Q,De(p/.25)),r.eye??Q,De((p-.7)/.3));return wt(i,y,b,ye(o.pitch,r.pitch,v),m)}}}function kn(i,t,o){let r=ge(.9*Math.abs(t-i)+.9,1.6,4.6),e=s=>ye(re(i),re(t),ot(s));return{duration:r,cab:e,at(s){let n=e(s),a=o+tt(o,Math.PI)*De(s*1.6);return{eye:[0,n+Q,0],heading:a,pitch:0,fov:je,level:Math.round(ye(i,t,ot(s)))}}}}function eo(i,t,o,r,e){let s=n=>{let a=1-n,c=a*a*a,l=3*a*a*n,h=3*a*n*n,d=n*n*n;return[0,1,2].map(u=>c*(i.eye[u]??0)+l*(o[u]??0)+h*(r[u]??0)+d*(t.eye[u]??0))};return{duration:e,at(n){let a=ot(n),c=De((n-.15)/.8);return{eye:s(a),heading:i.heading+tt(i.heading,t.heading)*c,pitch:ye(i.pitch,t.pitch,c),fov:ye(i.fov,t.fov,De((n-.3)/.7)),level:n>.7?t.level:i.level}}}}var Lt=class{mode="exterior";orbit={...wn};level=0;pos=ht;heading=0;pitch=0;eye=Q;rising=!1;reducedMotion=!1;destination=null;vel=[0,0];legs=[];legT=0;finish=null;idleFor=0;stepBuffer=0;camera(){let t=this.mode==="travel"?this.legs[0]:void 0;return t?t.at(ge(this.legT/t.duration,0,1)):this.mode==="exterior"?Ir(this.orbit):wt(this.level,this.pos,this.heading,this.pitch,this.eye)}cabY(){let t=this.mode==="travel"?this.legs[0]:void 0;if(t?.cab)return t.cab(ge(this.legT/t.duration,0,1));let o=this.camera();return re(o.level??this.level)}routeAhead(){let t=this.mode==="travel"?this.legs[0]:void 0;if(!t?.route)return null;let o=this.camera(),r=t.route,e=0,s=1/0;for(let n=0;n<r.length-1;n++){let a=r[n];if(!a)continue;let c=Math.hypot(a[0]-o.eye[0],a[2]-o.eye[2]);c<s&&(s=c,e=n)}return[[o.eye[0],r[0]?.[1]??0,o.eye[2]],...r.slice(e+1)]}get travelling(){return this.mode==="travel"}goTo(t,o=this.reducedMotion){let r=this.plan(t);return r?(this.destination=t.kind==="store"||t.kind==="level"?t:null,this.vel=[0,0],o||r.legs.length===0?(this.legs=[],r.finish(),!0):(this.legs=r.legs,this.legT=0,this.finish=r.finish,this.mode="travel",!0)):!1}here(){let t=this.camera();return t.level===null?null:{level:t.level,p:[t.eye[0],t.eye[2]],heading:t.heading,pitch:t.pitch,eye:t.eye[1]-re(t.level)}}plan(t){let o=this.camera(),r=this.mode==="exterior"?null:this.here(),e=(d,u,f,p=0,v=Q)=>()=>{this.mode="walk",this.level=d,this.pos=u,this.heading=f,this.pitch=p,this.eye=v,this.rising=!1};if(t.kind==="exterior"){let d=Ir(this.orbit);return{legs:r?[eo(o,d,[o.eye[0]*1.3,o.eye[1]+10,o.eye[2]*1.3+24],[d.eye[0]*.75,d.eye[1]+12,d.eye[2]*.75],2.6)]:[],finish:()=>{this.mode="exterior",this.idleFor=0}}}let s,n;if(t.kind==="plaza")s=0,n={p:ht,heading:0,pitch:.04,waypoint:"plaza"};else if(t.kind==="level")s=t.level,n=r&&r.level!==s?{p:[0,4],heading:Math.PI,pitch:.08,waypoint:"bridge"}:{p:Je,heading:0,pitch:0,waypoint:"lobby"};else if(t.kind==="store"){let d=ze(t.node);if(!d)return null;s=d.level;let u=t.station?d.stations[t.station]:null;n=u?{p:u.p,heading:u.heading,pitch:u.pitch,waypoint:`${t.station}:${d.node}`,eye:u.eye??Q}:{p:d.view,heading:d.heading,pitch:.09,waypoint:`store:${d.node}`}}else s=t.level,n={p:t.p,heading:Number.NaN,pitch:0,waypoint:null};let a=d=>e(s,n.p,Number.isNaN(d)?r?.heading??0:d,n.pitch,n.eye??Q);if(!r){if(t.kind==="plaza"){let v=wt(0,ht,0,.04);return{legs:[eo(o,v,[o.eye[0]*.6,o.eye[1]*.55,o.eye[2]*.6+30],[0,10,62],3)],finish:a(0)}}let d=re(s),u=wt(s,Je,0,0),f=[eo(o,u,[o.eye[0]*.55,d+Q+14+o.eye[1]*.25,o.eye[2]*.5+42],[0,d+Q+1.5,34],3.2)];if(n.waypoint!=="lobby"){let v=n.waypoint?et(s,Je,n.waypoint):mt(s,Je,n.p);v&&f.push(Pt(s,v,{heading:0,pitch:0},{heading:Number.isNaN(n.heading)?null:n.heading,pitch:n.pitch,eye:n.eye}))}let p=f[f.length-1];return{legs:f,finish:a(Number.isNaN(n.heading)?p?p.at(1).heading:0:n.heading)}}let c=[],l={heading:r.heading,pitch:r.pitch,eye:r.eye};if(r.level!==s){let d=et(r.level,r.p,"lift");if(!d)return null;c.push(Pt(r.level,d,l,{heading:null,pitch:0}));let u=c[c.length-1]?.at(1).heading??0;c.push(kn(r.level,s,u)),l={heading:Math.PI,pitch:0,eye:Q};let p=Lo(s,"lift")?.p??[0,0],v=n.waypoint?et(s,p,n.waypoint):mt(s,p,n.p);v&&c.push(Pt(s,v,l,{heading:Number.isNaN(n.heading)?null:n.heading,pitch:n.pitch,eye:n.eye}))}else{let d=n.waypoint?et(s,r.p,n.waypoint):mt(s,r.p,n.p);if(!d)return null;c.push(Pt(s,d,l,{heading:Number.isNaN(n.heading)?null:n.heading,pitch:n.pitch,eye:n.eye}))}let h=c[c.length-1];return{legs:c,finish:a(Number.isNaN(n.heading)?h?h.at(1).heading:r.heading:n.heading)}}interrupt(){if(!this.legs[0]?.interruptible)return;let o=this.here();o&&(this.legs=[],this.finish=null,this.mode="walk",this.level=o.level,this.pos=Ct(o.level,o.p,0,0),this.heading=o.heading,this.pitch=o.pitch,this.eye=o.eye)}update(t,o){let r=o.forward!==0||o.strafe!==0||o.turn!==0||o.lookX!==0||o.lookY!==0||o.zoom!==0;if(this.mode==="travel")if(r&&this.legs[0]?.interruptible)this.interrupt();else{this.legT+=t;let f=this.legs[0];for(;f&&this.legT>=f.duration;)this.legT-=f.duration,this.legs.shift(),f=this.legs[0];if(!f){let p=this.finish;this.finish=null,this.legT=0,p?.()}return!0}if(this.mode==="exterior"){let f=this.orbit,p=f.az-o.lookX*.0052-o.turn*t*.9,v=ge(f.el+o.lookY*.0042+o.forward*t*.5,_r[0],_r[1]),y=ge(f.dist*Math.exp(o.zoom*.0011-o.strafe*0),Lr[0],Lr[1]);this.idleFor=r?0:this.idleFor+t,!this.reducedMotion&&this.idleFor>5&&(p+=t*.035);let b=p!==f.az||v!==f.el||y!==f.dist;return this.orbit={az:p,el:v,dist:y},b}this.heading+=o.lookX*.0042+o.turn*In*t,this.pitch=ge(this.pitch-o.lookY*.0036,-.95,.95),o.zoom!==0&&(this.stepBuffer=ge(this.stepBuffer-o.zoom*.01,-6,6));let e=this.stepBuffer*Math.min(1,t*6);if(this.stepBuffer-=e,(o.forward!==0||o.strafe!==0||Math.abs(this.stepBuffer)>.01)&&this.eye!==Q&&(this.rising=!0),this.rising){let f=this.eye+(Q-this.eye)*Math.min(1,t*5);this.eye=this.reducedMotion||Math.abs(Q-f)<.01?Q:f,this.eye===Q&&(this.rising=!1)}let n=o.run?_n:Ln,a=Math.sin(this.heading),c=-Math.cos(this.heading),l=[(a*o.forward-c*o.strafe)*n,(c*o.forward+a*o.strafe)*n],h=1-Math.exp(-t*10);this.vel=[ye(this.vel[0],l[0],h),ye(this.vel[1],l[1],h)];let d=this.vel[0]*t+a*e,u=this.vel[1]*t+c*e;return Math.abs(d)+Math.abs(u)>1e-6&&(this.pos=Ct(this.level,this.pos,d,u)),r||Math.abs(this.vel[0])+Math.abs(this.vel[1])>.01||this.eye!==Q&&this.rising}};var xe="#0C1824",kr="#3A4A5A",se="#5A6A7A",Nn="#DCE2E8",Be="#0B0D10",lt="rgba(205,210,215,0.85)",Ae="#C9CED4",st="#23272C",On="#E2DCD1",me="#E3232C",U='"Poppins", "Inter", system-ui, sans-serif',w='"Inter", system-ui, sans-serif';async function Nr(){if(typeof document>"u"||!document.fonts)return;let i=["500 64px Poppins","700 64px Poppins","400 32px Inter","500 32px Inter","600 32px Inter"].map(t=>document.fonts.load(t).catch(()=>[]));await Promise.race([Promise.all(i),new Promise(t=>setTimeout(t,1500))])}function Ne(i,t){let o=document.createElement("canvas");o.width=i,o.height=t;let r=o.getContext("2d");if(!r)throw new Error("2D canvas unavailable");return[o,r]}function Or(i,t,o,r,e,s){let n=Math.min(s,r/2,e/2);i.beginPath(),i.moveTo(t+n,o),i.arcTo(t+r,o,t+r,o+e,n),i.arcTo(t+r,o+e,t,o+e,n),i.arcTo(t,o+e,t,o,n),i.arcTo(t,o,t+r,o,n),i.closePath()}function F(i,t,o,r,e,s=!0){let n=i;if("letterSpacing"in n){n.letterSpacing=`${e}px`;let c=i.measureText(t).width;return s&&i.fillText(t,o,r),n.letterSpacing="0px",c}let a=o;for(let c of t)s&&i.fillText(c,a,r),a+=i.measureText(c).width+e;return a-o}function It(i,t,o,r,e,s){i.beginPath(),i.moveTo(t+s,o),i.lineTo(t+r,o),i.lineTo(t+r,o+e-s),i.lineTo(t+r-s,o+e),i.lineTo(t,o+e),i.lineTo(t,o+s),i.closePath()}function Pe(i,t,o){let r=t.split(/\s+/),e=[],s="";for(let n of r){let a=s?`${s} ${n}`:n;i.measureText(a).width>o&&s?(e.push(s),s=n):s=a}return s&&e.push(s),e}var _e=i=>String(i).padStart(2,"0");function Vn(i){let t=ze(i),o=Y.node(i),r=o?.tier??"T01";return{key:`store:${i}`,aspect:5.6/.95,draw(e,s,n){e.fillStyle=Be,e.fillRect(2,2,s-4,n-4),e.lineWidth=Math.max(2,n*.02),e.strokeStyle=lt,e.strokeRect(3,3,s-6,n-6),e.textBaseline="middle",e.font=`500 ${Math.round(n*.3)}px ${U}`,e.fillStyle=X[r];let a=n*.42,c=F(e,i,a,n/2+1,n*.06);e.fillStyle="rgba(205,210,215,0.5)",e.fillRect(a+c+n*.24,n*.3,Math.max(1,n*.012),n*.4),e.font=`500 ${Math.round(n*.17)}px ${w}`;let l=`LEVEL ${_e((t?.level??0)+1)} \xB7 ${_e(t?.number??0)}`,h=F(e,l,0,0,n*.05,!1),d=a+c+n*.5,u=(o?.name??i).toUpperCase(),f=n*.3,p=n*.16,v=g=>(e.font=`500 ${Math.round(f)}px ${U}`,F(e,u,0,0,p,!1)<=g),y=s-n*.5-h-n*.3-d,b=s-n*.5-d,m=!0;for(;!v(y)&&f>n*.24;)f-=1,p=Math.max(n*.05,p-.6);if(!v(y))for(m=!1,f=n*.3,p=n*.16;!v(b)&&f>n*.18;)f-=1,p=Math.max(n*.03,p-.6);e.fillStyle="#F1F3F5",e.font=`500 ${Math.round(f)}px ${U}`,F(e,u,d,n/2+1,p),m&&(e.fillStyle=Ae,e.font=`500 ${Math.round(n*.17)}px ${w}`,F(e,l,s-n*.5-h,n/2+1,n*.05))}}}function Cn(i){let t=Z[i];return{key:`level:${i}`,aspect:5.4/1.1,draw(o,r,e){o.fillStyle=Be,o.fillRect(2,2,r-4,e-4),o.lineWidth=Math.max(2,e*.02),o.strokeStyle=lt,o.strokeRect(3,3,r-6,e-6),o.textBaseline="alphabetic",o.fillStyle=X[t?.tier??"T01"],o.fillRect(e*.34,e*.24,Math.max(2,e*.025),e*.52);let s=e*.6;o.fillStyle="#F1F3F5",o.font=`500 ${Math.round(e*.28)}px ${U}`,F(o,`LEVEL ${_e(i+1)}`,s,e*.48,e*.12);let n=r-s-e*.3,a=`${t?.tier??""} \xB7 ${(t?.name??"").toUpperCase()}`,c=e*.14,l=e*.05;for(;o.font=`500 ${Math.round(c)}px ${w}`,!(F(o,a,0,0,l,!1)<=n||c<=e*.1);)c-=1,l=Math.max(e*.015,l-.3);o.fillStyle=Ae,F(o,a,s,e*.76,l)}}}function Dn(i){let t=Z[i];return{key:`levelno:${i}`,aspect:7.2/1.8,draw(o,r,e){o.fillStyle=On,o.fillRect(0,e*.08,r,e*.84),o.fillStyle="rgba(35,39,44,0.18)",o.fillRect(0,e*.08,r,Math.max(1,e*.01)),o.textBaseline="alphabetic",o.font=`500 ${Math.round(e*.58)}px ${U}`,o.fillStyle=st;let s=F(o,_e(i+1),e*.22,e*.72,e*.08);o.fillStyle=X[t?.tier??"T01"],o.fillRect(e*.22+s+e*.2,e*.3,Math.max(2,e*.025),e*.42),o.fillStyle=st,o.font=`500 ${Math.round(e*.12)}px ${U}`;let n=(t?.name??"").toUpperCase().split(" "),a=Math.ceil(n.length/2);F(o,n.slice(0,a).join(" "),e*.22+s+e*.42,e*.48,e*.05),F(o,n.slice(a).join(" "),e*.22+s+e*.42,e*.69,e*.05)}}}var Bn={key:"crown",aspect:22/1.75,draw(i,t,o){i.textBaseline="middle",i.font=`500 ${Math.round(o*.44)}px ${U}`;let r=[[Nt.parent,st],[" // ",me],["XI OUTLET",st]],e=o*.26,s=r.reduce((a,[c])=>a+F(i,c,0,0,e,!1),0),n=(t-s)/2;for(let[a,c]of r)i.fillStyle=c,n+=F(i,a,n,o*.5,e)}},Un={key:"entrance",aspect:7.6/1.3,draw(i,t,o){i.fillStyle=Be,i.fillRect(2,2,t-4,o-4),i.lineWidth=Math.max(2,o*.02),i.strokeStyle=lt,i.strokeRect(3,3,t-6,o-6),i.textBaseline="middle",i.fillStyle="#F1F3F5",i.font=`500 ${Math.round(o*.3)}px ${U}`;let r="XI OUTLET",e=F(i,r,0,0,o*.2,!1);F(i,r,(t-e)/2,o*.4,o*.2),i.fillStyle=Ae,i.font=`500 ${Math.round(o*.12)}px ${w}`;let s=`${Nt.research} \xB7 EXPERIENCE INTERFACE`,n=F(i,s,0,0,o*.06,!1);F(i,s,(t-n)/2,o*.74,o*.06),i.fillStyle=me,i.fillRect((t-o*.5)/2,o*.585,o*.5,Math.max(2,o*.025))}};function Vr(){let i=[...Y.nodes.map(l=>Vn(l.id)),...Z.map(l=>Cn(l.index)),...Z.map(l=>Dn(l.index)),Bn,Un,...Y.nodes.map(l=>$n(l.id)),...Hn,Gn],t=2048,o=112,r=6,e=l=>{let h=0,d=0,u=0;for(let f of i){let p=f.key.startsWith("levelno")?o*1.5:o,v=Math.min(t,Math.round(p*f.aspect));h+v>t&&(h=0,d+=u+r,u=0),u=Math.max(u,p),l?.(f,h,d,v,p),h+=v+r}return d+u},s=Math.ceil(e(null)/256)*256,[n,a]=Ne(t,s),c=new Map;return e((l,h,d,u,f)=>{a.save(),a.translate(h,d),a.beginPath(),a.rect(0,0,u,f),a.clip(),l.draw(a,u,f),a.restore(),c.set(l.key,{u0:(h+.5)/t,v0:(d+.5)/s,u1:(h+u-.5)/t,v1:(d+f-.5)/s})}),{canvas:n,rects:c}}function $n(i){let t=Y.node(i);return{key:`blade:${i}`,aspect:1.3/.62,draw(o,r,e){o.fillStyle=Be,o.fillRect(2,2,r-4,e-4),o.lineWidth=Math.max(2,e*.025),o.strokeStyle=lt,o.strokeRect(3,3,r-6,e-6),o.fillStyle=X[t?.tier??"T01"],o.fillRect(e*.16,e*.2,Math.max(2,e*.03),e*.3),o.fillStyle="#F1F3F5",o.textBaseline="middle",o.font=`500 ${Math.round(e*.25)}px ${U}`,F(o,i,e*.3,e*.36,e*.05),o.fillStyle=Ae,o.font=`500 ${Math.round(e*.15)}px ${U}`;let s=(t?.name??"").toUpperCase();for(;s.length>3&&F(o,s,0,0,e*.05,!1)>r-e*.32;)s=s.slice(0,-1);F(o,s===(t?.name??"").toUpperCase()?s:`${s.trim()}\u2026`,e*.16,e*.72,e*.05)}}}var Hn=[["model","01","MODEL"],["body","02","BODY MAP"],["lesson","03","LESSON"],["examples","05","EXAMPLES"],["theater","07","THEATER"]].map(([i,t,o])=>({key:`station:${i}`,aspect:1.3/.46,draw(r,e,s){Or(r,2,2,e-4,s-4,s*.1);let n=r.createLinearGradient(0,0,e,s);n.addColorStop(0,"#D3D8DD"),n.addColorStop(.5,"#BCC2C9"),n.addColorStop(1,"#CBD0D6"),r.fillStyle=n,r.fill(),r.textBaseline="middle",r.fillStyle=me,r.font=`600 ${Math.round(s*.32)}px ${w}`;let a=F(r,t,s*.36,s/2+1,s*.03);r.fillStyle=st,r.font=`500 ${Math.round(s*.26)}px ${U}`,F(r,o,s*.36+a+s*.22,s/2+1,s*.1)}})),Gn={key:"theater:marquee",aspect:3.4/.66,draw(i,t,o){i.fillStyle=Be,i.fillRect(2,2,t-4,o-4),i.strokeStyle="rgba(231,201,160,0.55)",i.lineWidth=Math.max(2,o*.025),i.strokeRect(3,3,t-6,o-6),i.textBaseline="middle",i.fillStyle="#E7C9A0",i.font=`600 ${Math.round(o*.15)}px ${w}`;let r="NOW SHOWING",e=F(i,r,0,0,o*.06,!1),s=t-o*.42-e;F(i,r,s,o/2+1,o*.06),i.beginPath(),i.arc(s-o*.2,o/2,o*.055,0,Math.PI*2),i.fill(),i.fillStyle=me,i.font=`600 ${Math.round(o*.28)}px ${w}`;let n=F(i,"07",o*.42,o/2+1,o*.02);i.fillStyle="#F1F3F5";let a=o*.28;i.font=`500 ${Math.round(a)}px ${U}`;let c=o*.42+n+o*.24;for(;F(i,"XI THEATER",0,0,a*.3,!1)>s-o*.5-c&&a>o*.18;)a-=1,i.font=`500 ${Math.round(a)}px ${U}`;F(i,"XI THEATER",c,o/2+1,a*.3)}};function _t(i,t,o,r,e){i.font=`600 ${e}px ${w}`,i.fillStyle=t.status==="sourced"?"#0672A8":se,F(i,uo[t.status].toUpperCase(),o,r,e*.08)}function Cr(i){let[r,e]=Ne(1024,646),s=Y.node(i),n=s?.content;e.fillStyle="#FFFFFF",e.fillRect(0,0,1024,646),e.fillStyle=X[s?.tier??"T01"],e.fillRect(0,0,10,646),e.textBaseline="alphabetic";let a=56;e.font=`500 34px ${U}`;let c=F(e,i,0,0,2,!1);It(e,a,40,c+30,52,10),e.fillStyle=X[s?.tier??"T01"],e.fill(),e.fillStyle="#FFFFFF",F(e,i,a+15,79,2),e.fillStyle=xe,e.font=`500 40px ${U}`,F(e,(s?.name??i).toUpperCase(),a+c+54,81,5),e.fillStyle=se,e.font=`400 22px ${w}`,n&&e.fillText(`${n.kind[0]?.toUpperCase()??""}${n.kind.slice(1)} \xB7 ${n.category}`,a,128);let l=182,h=d=>{e.fillStyle=se,e.font=`600 18px ${w}`,F(e,d,a,l,3),e.fillStyle=me,e.fillRect(a,l+10,34,3),l+=44};if(n){h("03  WHAT IT IS"),e.fillStyle=xe,e.font=`400 25px ${w}`;let d=Pe(e,n.definition.text,1024-a*2);for(let u of d.slice(0,4))e.fillText(u,a,l),l+=34;if(_t(e,n.definition,a,l+2,14),l+=46,n.functions.length>0){h("04  WHAT IT DOES"),e.font=`400 23px ${w}`;for(let u of n.functions.slice(0,4)){if(l>606)break;e.fillStyle=X[s?.tier??"T01"],e.fillRect(a,l-9,8,8),e.fillStyle=xe,e.font=`400 23px ${w}`;let f=Pe(e,u.text,1024-a*2-160);e.fillText(f[0]??"",a+24,l),_t(e,u,1024-a-120,l-2,13),l+=f.length>1?30:36,f[1]&&(e.fillStyle=xe,e.font=`400 23px ${w}`,e.fillText(`${f[1]}${f.length>2?"\u2026":""}`,a+24,l),l+=36)}}}return e.fillStyle=se,e.font=`400 16px ${w}`,e.fillText("Illustrative and educational. Full entry, with sources: the store panel or the node page.",a,620),r}var Dr={SW:"SOUTH",SE:"SOUTH",ES:"EAST",EN:"EAST",NE:"NORTH",NW:"NORTH",WN:"WEST",WS:"WEST"};function Br(i){let[r,e]=Ne(1024,777),s=Z[i],n=X[s?.tier??"T01"],a=e.createLinearGradient(0,0,0,777);a.addColorStop(0,"#15181C"),a.addColorStop(1,Be),e.fillStyle=a,e.fillRect(0,0,1024,777),e.textBaseline="alphabetic",e.fillStyle="#F1F3F5",e.font=`500 44px ${U}`,F(e,`LEVEL ${_e(i+1)}`,48,86,14),e.fillStyle=n,e.fillRect(48,104,60,5),e.fillStyle=Ae,e.font=`500 18px ${w}`,F(e,`${s?.tier??""} \xB7 ${(s?.name??"").toUpperCase()}`,48,146,4);let c=400,l=48,h=190,d=c/(k*2),u=N=>[l+(N[0]+k)*d,h+(N[1]+k)*d];e.lineWidth=2,e.strokeStyle="#3A3F46",e.strokeRect(l,h,c,c);for(let N of s?.bays??[]){e.beginPath(),N.poly.forEach((G,W)=>{let[V,z]=u(G);W===0?e.moveTo(V,z):e.lineTo(V,z)}),e.closePath();let x=s?.stores.find(G=>G.bay.id===N.id);e.fillStyle=x?`${n}55`:N.use==="lobby"?"#2A2F3680":"#3A403A60",e.fill(),e.stroke();let[M,O]=u(Fe(N.id,(L+k)/2,N.use==="lobby"?0:6));e.fillStyle="#FFFFFF",e.font=`600 17px ${w}`;let _=x?x.node:N.use==="lounge"?"LOUNGE":N.id==="SW"?"":"LOBBY";_&&e.fillText(_,M-e.measureText(_).width/2,O+6)}let[f,p]=u([-1.3,0]);e.fillStyle="#3A3F46",e.fillRect(f,p,2.6*d,P*d);let[v,y]=u([-P,-P]);e.strokeStyle="#6A717A",e.setLineDash([6,5]),e.strokeRect(v,y,P*2*d,P*2*d),e.setLineDash([]);let[b,m]=u([0,0]);e.beginPath(),e.arc(b,m,K*d,0,Math.PI*2),e.fillStyle="#9AA1A9",e.fill(),e.fillStyle=Be,e.font=`600 13px ${w}`,e.fillText("LIFT",b-e.measureText("LIFT").width/2,m+5);let[g,R]=u(Me);e.beginPath(),e.arc(g,R,9,0,Math.PI*2),e.fillStyle=me,e.fill(),e.fillStyle="#FFFFFF",e.font=`600 15px ${w}`,F(e,"YOU ARE HERE",g+16,R+5,1),e.fillStyle=Ae,e.font=`600 14px ${w}`,e.fillText("N",l+c/2-5,h-10);let E=220,A=500;e.fillStyle=Ae,e.font=`600 15px ${w}`,F(e,"STORES ON THIS LEVEL",A,E-26,4);for(let N of s?.stores??[])e.fillStyle=n,It(e,A,E,74,38,8),e.fill(),e.fillStyle="#FFFFFF",e.font=`500 20px ${U}`,e.fillText(N.node,A+12,E+27),e.font=`500 23px ${U}`,F(e,N.name.toUpperCase(),A+92,E+27,2),e.fillStyle=Ae,e.font=`500 14px ${w}`,F(e,`${Dr[N.bay.id]} WING`,A+92,E+52,3),E+=84;return e.fillStyle=Ae,e.font=`400 16px ${w}`,e.fillText("Lift in the atrium: every level, Level 01 at the street.",48,737),r}var at={w:560,h:797};function oo(i){let o=at.h-128,r=Math.min(68,(o-338)/Math.max(1,i));return Array.from({length:i},(e,s)=>(338+r*(s+.5))/at.h)}function Ur(i,t){let{w:o,h:r}=at,[e,s]=Ne(o,r),n=Y.node(i),a=n?.content?.bodyMap,c=n?.tier??"T01";s.fillStyle="#FFFFFF",s.fillRect(0,0,o,r),s.strokeStyle=Nn,s.lineWidth=3,s.strokeRect(1.5,1.5,o-3,r-3),s.strokeStyle=xe,s.lineWidth=3;for(let[v,y,b,m]of[[10,10,1,1],[o-10,10,-1,1],[10,r-10,1,-1],[o-10,r-10,-1,-1]])s.beginPath(),s.moveTo(v+b*22,y),s.lineTo(v,y),s.lineTo(v,y+m*22),s.stroke();s.textBaseline="alphabetic",s.fillStyle=me,s.beginPath(),s.arc(34,44,5,0,Math.PI*2),s.fill(),s.fillStyle=se,s.font=`600 15px ${w}`,F(s,"02  SUBJECT // BODY MAP",48,50,2.5),s.fillStyle=X[c],s.font=`600 15px ${w}`;let l=F(s,`${i} \xB7 ${c}`,0,0,2,!1);F(s,`${i} \xB7 ${c}`,o-30-l,50,2),s.fillStyle=xe,s.font=`500 36px ${U}`,F(s,(n?.name??i).toUpperCase(),30,104,4),s.fillStyle=se,s.font=`600 14px ${w}`,a&&F(s,Fo[a.scope].toUpperCase(),30,136,2);let h=178;if(a){s.fillStyle=xe,s.font=`400 20px ${w}`;for(let v of Pe(s,a.where.text,o-60).slice(0,5))s.fillText(v,30,h),h+=27;_t(s,a.where,30,h+2,12)}let d=a?ut(a):[],u=oo(d.length);d.forEach((v,y)=>{let b=(u[y]??0)*r,m=52,g=t?o-30-m:30;s.strokeStyle=me,s.lineWidth=2.5,s.strokeRect(g,b-17,m,34),s.fillStyle="#C9141E",s.font=`600 18px ${w}`;let R=String(v.index+1).padStart(2,"0");s.fillText(R,g+(m-s.measureText(R).width)/2,b+6);let E=t?30:30+m+16,A=o-60-m-16;s.fillStyle=xe,s.font=`600 19px ${w}`,s.fillText(Pe(s,v.label,A)[0]??v.label,E,b-2),s.fillStyle=se,s.font=`600 12px ${w}`;let N=[v.zone,v.region==="body"?"":`GRID ${v.grid}`,v.posterior?"BEHIND OTHER ORGANS":"",v.example?"EXAMPLE SITE":""].filter(Boolean).join(" \xB7 ");F(s,N.toUpperCase(),E,b+18,1.2)});let f=a?.overlays??[],p=r-98;if(f.length>0){s.fillStyle=se,s.font=`600 12px ${w}`,F(s,"OVERLAY",30,p,2);let v=110;for(let y of f)for(let b of Mo[y])s.fillStyle=b.color==="accent"?X[c]:b.color,s.fillRect(v,p-6,18,3),s.fillStyle=kr,s.font=`400 13px ${w}`,s.fillText(b.label,v+24,p),v+=24+s.measureText(b.label).width+18,v>o-120&&(v=110,p+=20)}return s.fillStyle=se,s.font=`600 11px ${w}`,F(s,"ILLUSTRATIVE \xB7 NOT TO SCALE \xB7 FRONT VIEW",30,r-44,1.5),F(s,"THE SUBJECT'S RIGHT IS ON YOUR LEFT",30,r-26,1.5),e}function $r(i){let[r,e]=Ne(1024,853),s=Y.node(i),n=s?.content,a=s?.tier??"T01";e.fillStyle="#FFFFFF",e.fillRect(0,0,1024,853),e.fillStyle=X[a],e.fillRect(0,0,1024,8),e.textBaseline="alphabetic";let c=(y,b,m,g)=>{e.fillStyle=xe,e.font=`600 30px ${w}`;let R=F(e,y,m,g,1);e.font=`500 22px ${U}`,F(e,b,m+R+16,g-2,4),e.fillStyle=me,e.fillRect(m,g+12,34,3)};c("05","EXAMPLES",48,72),c("06","CONNECTED STORES",580,72);let l=Y.factorsOf(i).flatMap(y=>y.links.filter(b=>b.node===i).map(b=>({head:lo.find(m=>m.id===y.discipline)?.name??"",name:y.name,claim:b.effect}))),h=Y.systemsOf(i).map(y=>({head:co.find(b=>b.id===y.system)?.name??"",name:"",claim:y.rationale})),d=(l.length>0?l:h).slice(0,3),u=132,f=470;if(d.length===0){e.fillStyle=se,e.font=`400 20px ${w}`;for(let y of Pe(e,"No nutrition, movement or operating-system examples are linked to this node yet.",f))e.fillText(y,48,u),u+=28;u+=16}for(let y of d){if(e.fillStyle=X[a],e.fillRect(48,u-16,4,20),e.fillStyle=se,e.font=`600 14px ${w}`,F(e,y.head,62,u,2.5),y.name){e.fillStyle=xe,e.font=`600 18px ${w}`;let m=F(e,y.head,0,0,2.5,!1);e.fillText(y.name,62+m+14,u+1)}u+=30,e.fillStyle=xe,e.font=`400 19px ${w}`;let b=Pe(e,y.claim.text,f-14);for(let m of b.slice(0,4))e.fillText(m,62,u),u+=26;if(_t(e,y.claim,62,u+2,12),u+=38,u>633)break}let p=n?.synonyms??[];if(p.length>0&&u<733){e.fillStyle=se,e.font=`600 14px ${w}`,F(e,"ALSO KNOWN AS",48,u+6,2.5),u+=34,e.fillStyle=kr,e.font=`400 18px ${w}`;for(let y of Pe(e,p.slice(0,8).join(" \xB7 "),f).slice(0,3))e.fillText(y,48,u),u+=25}let v=132;for(let y of Y.relationshipsOf(i).slice(0,6)){let b=y.from===i,m=Y.node(b?y.to:y.from),g=m?ze(m.id):void 0;if(!m)continue;e.fillStyle=se,e.font=`400 16px ${w}`;let R=ho.find(E=>E.id===y.type)?.verb??y.type;e.fillText(b?`This ${R}`:`${R[0]?.toUpperCase()??""}${R.slice(1)} this`,580,v),v+=12,e.fillStyle=X[m.tier],It(e,580,v,64,30,7),e.fill(),e.fillStyle="#FFFFFF",e.font=`500 16px ${U}`,e.fillText(m.id,589,v+21),e.fillStyle=xe,e.font=`600 19px ${w}`,e.fillText(m.name,656,v+21),e.fillStyle=se,e.font=`600 12px ${w}`,F(e,`LEVEL ${_e((g?.level??0)+1)} \xB7 ${g?Dr[g.bay.id]:""} WING`,656,v+42,1.5),v+=72}return e.fillStyle=se,e.font=`400 15px ${w}`,e.fillText("Every line comes from the registry, with its evidence status. Sources are on the node page.",48,823),r}function Hr(i){let[r,e]=Ne(384,544),s=Y.node(i),n=ze(i),a=s?.tier??"T01";e.fillStyle="rgba(11,13,16,0.9)",e.fillRect(0,0,384,544),e.strokeStyle=lt,e.lineWidth=3,e.strokeRect(1.5,1.5,381,541),e.fillStyle=X[a],e.fillRect(30,40,4,64),e.textBaseline="alphabetic",e.font=`500 112px ${U}`,F(e,i,26,210,6),e.fillStyle=me,e.fillRect(30,240,46,4),e.fillStyle="#F1F3F5";let c=34;e.font=`500 ${c}px ${U}`;let l=(s?.name??i).toUpperCase();for(;F(e,l,0,0,7,!1)>324&&c>18;)c-=2,e.font=`500 ${c}px ${U}`;F(e,l,30,300,7),e.fillStyle=Ae,e.font=`400 18px ${w}`;let h=340;for(let d of Pe(e,s?.content?.category??"",324).slice(0,2))e.fillText(d,30,h),h+=25;return e.font=`600 13px ${w}`,F(e,`LEVEL ${_e((n?.level??0)+1)} \xB7 STORE ${_e(n?.number??0)}`,30,478,3.5),F(e,"LIVE MODEL \xB7 BODY MAP \xB7 LESSON",30,504,3),r}function Gr(i){let[o,r]=Ne(384,384),e=Y.node(i),s=e?.tier??"T01",n=384/2;r.beginPath(),r.arc(n,n,n-6,0,Math.PI*2),r.lineWidth=10,r.strokeStyle="rgba(200,206,212,0.95)",r.stroke(),r.beginPath(),r.arc(n,n,n-20,0,Math.PI*2),r.lineWidth=3,r.strokeStyle=X[s],r.stroke(),r.strokeStyle="rgba(200,206,212,0.85)",r.lineWidth=2;for(let h=0;h<48;h++){let d=h/48*Math.PI*2,u=n-30,f=n-(h%12===0?50:h%4===0?42:36);r.beginPath(),r.moveTo(n+Math.sin(d)*u,n-Math.cos(d)*u),r.lineTo(n+Math.sin(d)*f,n-Math.cos(d)*f),r.stroke()}r.textBaseline="alphabetic",r.fillStyle="rgba(214,219,224,0.96)",r.font=`500 70px ${U}`;let a=F(r,i,0,0,6,!1);F(r,i,n-a/2,n+16,6),r.font=`600 16px ${w}`;let c=(e?.name??"").toUpperCase(),l=F(r,c,0,0,5,!1);return F(r,c,n-l/2,n+56,5),r.fillStyle=me,r.fillRect(n-16,n+72,32,3),o}function Wr(i){return new Promise(t=>{let o=new Image;o.decoding="async",o.onload=()=>t(o),o.onerror=()=>t(null),o.src=i})}var Wn={w:1280,h:720};function zr(i){let{w:t,h:o}=Wn,[r,e]=Ne(t,o),s=Y.node(i),n=s?.tier??"T01",a=Y.videosOf(i),c=e.createRadialGradient(t*.42,o*.38,40,t*.5,o*.5,t*.75);c.addColorStop(0,"#1B1D21"),c.addColorStop(1,"#060708"),e.fillStyle=c,e.fillRect(0,0,t,o);let l=e.createLinearGradient(0,0,t*.6,0);l.addColorStop(0,`${X[n]}55`),l.addColorStop(1,`${X[n]}00`),e.fillStyle=l,e.fillRect(0,0,t*.6,6),e.fillStyle="rgba(255,255,255,0.025)";for(let g=0;g<o;g+=4)e.fillRect(0,g,t,1);e.textBaseline="alphabetic",e.fillStyle=me,e.font=`600 26px ${w}`;let h=F(e,"07",56,78,1);e.fillStyle="#FFFFFF",e.font=`500 28px ${U}`,F(e,"XI THEATER",56+h+18,78,8),e.font=`500 26px ${U}`;let d=(s?.name??i).toUpperCase(),u=F(e,d,0,0,4,!1);e.font=`500 22px ${U}`;let f=F(e,i,0,0,2,!1)+26,p=t-56;if(e.fillStyle="#FFFFFF",e.font=`500 26px ${U}`,F(e,d,p-u,78,4),e.fillStyle=X[n],It(e,p-u-18-f,50,f,38,8),e.fill(),e.fillStyle="#FFFFFF",e.font=`500 22px ${U}`,F(e,i,p-u-18-f+13,77,2),e.fillStyle="#E7C9A0",e.font=`600 15px ${w}`,F(e,a.length>0?`NOW SHOWING \xB7 ${a.length===1?"ONE FILM":`${a.length} FILMS`}`:"PROGRAMME IN PREPARATION",56,122,3.5),a.length===0){e.fillStyle="#FFFFFF",e.font=`500 40px ${U}`;let g="PROGRAMME IN PREPARATION",R=F(e,g,0,0,6,!1);F(e,g,(t-R)/2,o/2,6),e.fillStyle="#9FB0C2",e.font=`400 22px ${w}`;let E="No video meets the bar for this subject yet. The other stations teach it.";e.fillText(E,(t-e.measureText(E).width)/2,o/2+46)}let v=a.length===1?760:560,y=48,b=a.length===1?(t-v)/2:(t-v*2-y)/2;a.forEach((g,R)=>{let E=b+R*(v+y),A=168;Or(e,E,A,v,400,20),e.fillStyle="rgba(255,255,255,0.055)",e.fill(),e.strokeStyle="rgba(255,255,255,0.16)",e.lineWidth=2,e.stroke(),e.fillStyle=me,e.font=`600 16px ${w}`;let x=F(e,_e(R+1),E+32,A+52,1);e.fillStyle="#FFFFFF",F(e,fo[g.role].toUpperCase(),E+32+x+12,A+52,3),e.strokeStyle="#E7C9A0",e.lineWidth=3,e.beginPath(),e.arc(E+v-62,A+58,28,0,Math.PI*2),e.stroke(),e.fillStyle="#E7C9A0",e.beginPath(),e.moveTo(E+v-70,A+44),e.lineTo(E+v-48,A+58),e.lineTo(E+v-70,A+72),e.closePath(),e.fill(),e.fillStyle="#FFFFFF",e.font=`500 30px ${U}`;let M=A+124;for(let _ of Pe(e,g.title,v-64).slice(0,3))e.fillText(_,E+32,M),M+=40;e.fillStyle="#C9D6E3",e.font=`600 18px ${w}`,e.fillText(`${g.channel} \xB7 ${g.published}`,E+32,M+10),e.fillStyle="#9FB0C2",e.font=`400 19px ${w}`;let O=M+52;for(let _ of Pe(e,g.about,v-64).slice(0,3))e.fillText(_,E+32,O),O+=27}),e.fillStyle="#9FB0C2",e.font=`400 16px ${w}`;let m=a.length>0?"Click the screen or press Enter to watch. Plays from YouTube in privacy-enhanced mode; nothing loads from YouTube until you press play.":"";return e.fillText(m,56,o-74),e.fillText(a.length>0?"Chosen for teaching from established educational publishers. Their claims are theirs; TRIARC does not cite them as sources.":"",56,o-48),r}var ro=.35,Xr=1,zn=80*Math.PI/180,Xn=17,Yn=2,no=.18,Yr=1.2,jn={store:"model",panel:"lesson",board:"body",examples:"examples",theater:"theater",window:"front",directory:null},jr=class{canvas;host;opts;gl=null;renderer=null;world=null;live=null;rig=new Lt;input=null;raf=0;lastFrame=0;lastRender=0;time=0;disposed=!1;failed=!1;visible=!0;dirty=!0;ready=!1;reduced;scale=.9;exposure=oe.exposure;ema=16;calm=0;slowSince=0;busyFrames=0;wasBusy=!1;proj=rt();view=rt();viewProj=rt();invViewProj=rt();pointer=null;pointerDirty=!1;hover=null;focus=null;focusAt=0;snapKey="";snapAt=0;highlightLevel=null;fronts;opaqueWalls;holoCache=new Map;boards=new Map;cinemaScreens=new Map;drawnHolos=[];theaterPlaying=!1;dim=0;theaterKey="";uploaded=!1;resizeObserver=null;livePrev=null;postersLoading=new Set;observer=null;onLost=t=>{t.preventDefault(),this.fail("lost")};fixedScale;fixedDpr;constructor(t,o,r){this.canvas=t,this.host=o,this.opts=r;let e=globalThis.__OUTLET_SCALE__;this.fixedScale=typeof e=="number"&&e>0&&e<=1?e:null,this.fixedScale&&(this.scale=this.fixedScale);let s=globalThis.__OUTLET_DPR__;this.fixedDpr=typeof s=="number"&&s>=1&&s<=3?s:null,this.reduced=r.reducedMotion,this.rig.reducedMotion=r.reducedMotion,this.fronts=Ot.map(l=>({node:l.node,level:l.level,centre:[l.door[0],re(l.level)+2.8,l.door[1]],normal:[-l.bay.inward[0],0,-l.bay.inward[1]],u:[l.bay.along[0],0,l.bay.along[1]]}));let n=k,a=L;this.opaqueWalls=[...[-1,1].flatMap(l=>[-1,1].map(h=>({a:[l*a,h*a],b:[l*n,h*n]}))),{a:[a,0],b:[n,0]},{a:[0,-a],b:[0,-n]},{a:[-a,0],b:[-n,0]}];let c=t.getContext("webgl2",{antialias:!0,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(!c){queueMicrotask(()=>this.fail("webgl"));return}this.gl=c,t.addEventListener("webglcontextlost",this.onLost);try{this.world=Pr();for(let h of this.world.screens)h.kind==="board"&&h.node&&this.boards.set(h.node,h.rect),h.kind==="theater"&&h.node&&this.cinemaScreens.set(h.node,h.rect);let l=Kn(c);this.renderer=new At(c,this.world,l),o.dataset.quality=l,!this.fixedScale&&Kr(c)&&(this.scale=.5),this.live=new Rt(c)}catch(l){console.warn("XI Outlet could not start its renderer",l),queueMicrotask(()=>this.fail("compile"));return}this.rig.goTo(r.start,!0),this.input=new Et(o,{click:(l,h)=>this.click(l,h),hover:(l,h)=>{this.pointer=l<0?null:[l,h],this.pointerDirty=!0},back:()=>this.back(),activate:()=>this.activate(),poke:()=>{this.dirty=!0},blocked:()=>document.querySelector("dialog[open]")!==null}),typeof IntersectionObserver<"u"&&(this.observer=new IntersectionObserver(l=>{for(let h of l)this.visible=h.isIntersecting;this.visible&&(this.dirty=!0)}),this.observer.observe(o)),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.dirty=!0}),this.resizeObserver.observe(o)),Nr().then(()=>{this.disposed||!this.renderer||(this.renderer.setAtlas(Vr()),this.dirty=!0)}),this.raf=requestAnimationFrame(this.tick)}goTo(t,o=this.reduced){this.renderer&&(this.rig.goTo(t,o),this.dirty=!0)}activate(){let t=this.focus;t&&(t.kind==="store"&&t.part==="theater"&&this.seatedAt()===t.node?this.opts.onSelect?.(t):t.kind==="store"?this.goTo(qr(t.node,t.part)):t.kind==="level"?this.goTo({kind:"level",level:t.level}):(t.kind==="lift"||t.kind==="directory")&&this.opts.onSelect?.(t))}back(){if(this.theaterPlaying){this.setTheaterPlaying(!1),this.opts.onTheaterExit?.();return}this.rig.mode!=="exterior"&&this.goTo({kind:"exterior"})}setTheaterPlaying(t){this.theaterPlaying!==t&&(this.theaterPlaying=t,this.dirty=!0)}seatedAt(){if(this.rig.mode!=="walk")return null;let t=this.rig.camera();if(t.level===null)return null;for(let o of Z[t.level]?.stores??[]){let r=o.stations.theater;if(Math.hypot(r.p[0]-t.eye[0],r.p[1]-t.eye[2])<.9)return o.node}return null}setReducedMotion(t){this.reduced=t,this.rig.reducedMotion=t,this.dirty=!0}highlight(t){this.highlightLevel=t,this.dirty=!0}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.input?.dispose(),this.observer?.disconnect(),this.resizeObserver?.disconnect(),this.canvas.removeEventListener("webglcontextlost",this.onLost),this.live?.dispose(),this.renderer?.dispose(),this.gl?.getExtension("WEBGL_lose_context")?.loseContext(),this.gl=null}fail(t){this.failed||this.disposed||(this.failed=!0,cancelAnimationFrame(this.raf),this.opts.onFail(t))}tick=t=>{if(this.disposed||this.failed)return;if(this.raf=requestAnimationFrame(this.tick),!this.visible||document.hidden){this.lastFrame=0;return}let o=this.lastFrame?Math.min(.5,(t-this.lastFrame)/1e3):1/60;this.lastFrame=t;let r=this.input?.consume();this.theaterPlaying&&r&&(r.forward!==0||r.strafe!==0||r.turn!==0||r.zoom!==0?(this.setTheaterPlaying(!1),this.opts.onTheaterExit?.()):r={...r,lookX:0,lookY:0});let e=r?this.rig.update(o,r):!1;this.reduced||(this.time+=o);let s=this.theaterPlaying?1:0,n=this.dim!==s;n&&(this.dim=this.reduced||Math.abs(s-this.dim)<.02?s:this.dim+(s-this.dim)*Math.min(1,o*5));let a=e||this.rig.travelling||this.dirty||this.pointerDirty||n;!a&&(this.reduced||this.theaterPlaying||t-this.lastRender<33)||this.render(t,a)};render(t,o){let r=this.gl,e=this.renderer;if(!r||!e)return;let s=this.lastRender?t-this.lastRender:16;this.lastRender=t;let n=this.uploaded;this.uploaded=!1,this.dirty=!1;let a=this.rig.camera(),c=this.fixedDpr??Math.min(window.devicePixelRatio||1,e.tier==="cinematic"?1.5:2),l=Math.max(1,this.canvas.clientWidth),h=Math.max(1,this.canvas.clientHeight),d=Math.max(1,Math.round(l*c*this.scale)),u=Math.max(1,Math.round(h*c*this.scale));(this.canvas.width!==d||this.canvas.height!==u)&&(this.canvas.width=d,this.canvas.height=u);let f=Math.min(1,Math.max(0,(a.fov-je)/(to-je))),p=l/h,v=a.fov+Math.max(0,Math.min(zn,2*Math.atan(1/p))-je)*(1-f);Vo(this.proj,v,p,a.level===null?.5:.08,3200),l>640&&(this.proj[8]=(this.proj[8]??0)-.16*f);let y=Oo(a.heading,a.pitch);pt(this.view,a.eye,Dt(a.eye,y)),nt(this.viewProj,this.proj,this.view),vt(this.invViewProj,this.viewProj);let b=j(de(y,[0,1,0])),m=de(b,y);this.pointerDirty&&(this.pointerDirty=!1,this.hover=this.pointer?this.pickClient(this.pointer[0],this.pointer[1]):null,this.host.style.cursor=this.hover&&this.hover.kind!=="floor"?"pointer":""),t-this.focusAt>140&&(this.focusAt=t,this.focus=this.rig.mode==="exterior"?this.hover:this.pick(0,0),this.focus?.kind==="floor"&&(this.focus=null)),e.setRibbon(this.rig.routeAhead()),this.feedTextures(a.level,a.eye),this.updateLive(a.level,a.eye,y,s);let g=this.holoFrame(a.level,a.eye,y);this.drawnHolos=g.map(x=>x.holo.node);let E=this.rig.mode!=="exterior"&&Math.max(Math.abs(a.eye[0]),Math.abs(a.eye[2]))<k-.3&&a.eye[1]<B?oe.exposureInside:oe.exposure;this.exposure=this.reduced?E:this.exposure+(E-this.exposure)*Math.min(1,s/1e3*3),Math.abs(E-this.exposure)<.01?this.exposure=E:this.dirty=!0;let A=this.rig.mode==="exterior"?this.highlightLevel??(this.hover?.kind==="level"?this.hover.level:null):null,N=A!==null?re(A):0;e.draw({viewProj:this.viewProj,invViewProj:this.invViewProj,eye:a.eye,right:b,up:m,time:this.time,cabY:this.rig.cabY(),fade:1,holos:g,pxPerMetre:u/(2*Math.tan(v/2)),dim:this.dim,mirrorY:this.rig.mode==="exterior"||a.level===null||a.level===0?-.05:re(a.level),exposure:this.exposure,highlight:A!==null?{min:[-k-.45,N-$-.05,-k-.45],max:[k+.45,N+Te-$,k+.45],rgba:[.89,.14,.17,.16]}:null},d,u),o&&this.wasBusy&&!n&&this.adapt(s,t),this.wasBusy=o,this.ready||(this.ready=!0,this.host.dataset.state="live",this.opts.onReady()),this.emit(t,a.level,a.eye,a.heading),this.reportTheater(l,h)}reportTheater(t,o){let r=this.seatedAt(),e=r?this.cinemaScreens.get(r):void 0,s=null;if(r&&e){let a=(u,f)=>{let p=e.centre[0]+e.u[0]*e.hu*u+e.v[0]*e.hv*f,v=e.centre[1]+e.u[1]*e.hu*u+e.v[1]*e.hv*f,y=e.centre[2]+e.u[2]*e.hu*u+e.v[2]*e.hv*f,b=this.viewProj,m=(b[0]??0)*p+(b[4]??0)*v+(b[8]??0)*y+(b[12]??0),g=(b[1]??0)*p+(b[5]??0)*v+(b[9]??0)*y+(b[13]??0),R=(b[3]??0)*p+(b[7]??0)*v+(b[11]??0)*y+(b[15]??0);return R<.05?null:[(m/R+1)/2*t,(1-g/R)/2*o]},c=a(-1,1),l=a(1,1),h=a(1,-1),d=a(-1,-1);c&&l&&h&&d&&(s={node:r,corners:[c,l,h,d]})}let n=s?`${this.theaterPlaying?"playing":"seated"}:${s.node}:${s.corners.map(a=>`${a[0].toFixed(1)},${a[1].toFixed(1)}`).join(";")}`:"";n!==this.theaterKey&&(this.theaterKey=n,this.host.dataset.theater=s?this.theaterPlaying?"playing":"seated":"",this.opts.onTheaterScreen?.(s))}adapt(t,o){if(!(this.fixedScale||++this.busyFrames<5)){if(this.ema=this.ema*.85+t*.15,this.renderer?.tier==="cinematic"&&this.scale<=.6&&this.ema>40){this.renderer.setTier("basic"),this.host.dataset.quality="basic",this.scale=.85,this.ema=24,this.calm=0;return}this.ema>42&&this.scale>ro?(this.scale=Math.max(ro,this.scale*.88),this.calm=0):this.ema<22?++this.calm>50&&this.scale<Xr&&(this.scale=Math.min(Xr,this.scale*1.08),this.calm=0):this.calm=0,this.scale<=ro&&this.ema>650?this.slowSince?o-this.slowSince>9e3&&this.fail("slow"):this.slowSince=o:this.slowSince=0}}posterUrl(t,o){let r=Y.node(t)?.content?.rendering?.asset;return r?`${this.opts.base}visuals/${r}-${o}.webp`:null}feedTextures(t,o){let r=this.renderer;if(!r)return;for(let a of Ot){let c=t===a.level?640:320,l=c===640?2:1,h=`store:${a.node}`;if(r.screenGrade(h)>=l)continue;let d=`${h}@${c}`;if(this.postersLoading.has(d)||this.postersLoading.size>=4)continue;let u=this.posterUrl(a.node,c);u&&(this.postersLoading.add(d),Wr(u).then(f=>{this.postersLoading.delete(d),!(!f||this.disposed||!this.renderer)&&(this.renderer.setScreenImage(h,f,l,!0),this.dirty=!0,this.uploaded=!0)}))}if(t===null)return;let e=Z[t];if(!e)return;let s=`directory:${t}`;if(r.screenGrade(s)<3)r.setScreenImage(s,Br(t),3,!0),this.dirty=!0,this.uploaded=!0;else{let a=e.stores.slice().sort((c,l)=>Math.hypot(c.display[0]-o[0],c.display[1]-o[2])-Math.hypot(l.display[0]-o[0],l.display[1]-o[2]));e:for(let c of a)for(let[l,h,d]of this.storeCanvases(c))if(!(r.screenGrade(l)>=3)){r.setScreenImage(l,h(),3,!0,d),this.dirty=!0,this.uploaded=!0;break e}}let n=new Set([s]);for(let a of e.stores){for(let[c]of this.storeCanvases(a))n.add(c);n.add(`holo:${a.node}`)}r.evict(a=>n.has(a))}storeCanvases(t){let o=t.node;return[[`board:${o}`,()=>Ur(o,this.boardSide(t)>0),!1],[`panel:${o}`,()=>Cr(o),!1],[`examples:${o}`,()=>$r(o),!1],[`theater:${o}`,()=>zr(o),!1],[`banner:${o}`,()=>Hr(o),!0],[`medallion:${o}`,()=>Gr(o),!0]]}boardSide(t){let o=this.boards.get(t.node);return o?(t.holo.at[0]-o.centre[0])*o.u[0]+(t.holo.at[1]-o.centre[2])*o.u[2]>=0?1:-1:1}holoOf(t){return this.holoCache.has(t)||this.holoCache.set(t,zo(t)),this.holoCache.get(t)??null}holoFrame(t,o,r){if(t===null||this.rig.mode==="exterior")return[];let e=Math.hypot(r[0],r[2])||1,s=[];for(let a of Z[t]?.stores??[]){let c=a.holo.at[0]-o[0],l=a.holo.at[1]-o[2],h=Math.hypot(c,l);if(h>Xn||h>1.6&&(c*r[0]+l*r[2])/(h*e)<.15)continue;let d={a:[o[0],o[2]],b:a.holo.at};this.opaqueWalls.every(u=>Vt(d,u)>.05)&&s.push({s:a,d:h})}s.sort((a,c)=>a.d-c.d);let n=[];for(let{s:a}of s.slice(0,Yn).reverse()){let c=this.holoDraw(a);c&&n.push(c)}return n}holoDraw(t){let o=this.holoOf(t.node);if(!o)return null;let r=this.time,e=Math.PI-t.holo.facing+(this.reduced?0:Math.sin(r*.35)*.32),s=Yr,n=Math.cos(e)*s,a=Math.sin(e)*s,[c,l]=t.holo.at,h=re(t.level)+no,d=new Float32Array([n,0,-a,0,0,s,0,0,a,0,n,0,c,h,l,1]),u=b=>[n*b[0]+a*b[2]+c,b[1]*s+h,-a*b[0]+n*b[2]+l],f=new Float32Array(o.targets.length*4);o.targets.forEach((b,m)=>{let g=u(b.at);f.set([g[0],g[1],g[2],b.r*s],m*4)});let p=[],v=this.boards.get(t.node);if(v&&o.rows.length>0){let b={centre:v.centre,u:v.u,n:$t(v),hu:v.hu,hv:v.hv};for(let m of Xo(o,u,b,this.boardSide(t),oo(o.rows.length),30/at.w*v.hu*2)){let[g,R,E,A]=m.points;p.push(...g,...R,...R,...E,...E,...A)}}if(o.whole)for(let[g,R,E,A]of[[-.4,.02,1,1],[.4,.02,-1,1],[-.4,1.92,1,-1],[.4,1.92,-1,-1]]){let N=u([g,R,.14]);p.push(...u([g+E*.15,R,.14]),...N,...N,...u([g,R+A*.15,.14]))}let y=[];for(let[b,m,g]of[[.96,.5,.25],[1.52,.42,-.4]]){let E=this.reduced?0:r*g;for(let A=0;A<40;A+=2){let N=E+A/40*Math.PI*2,x=E+(A+1)/40*Math.PI*2;y.push(...u([Math.sin(N)*m,b,Math.cos(N)*m]),...u([Math.sin(x)*m,b,Math.cos(x)*m]))}}return{holo:o,model:d,rings:new Float32Array(y),leaders:new Float32Array(p),targets:f,scanY:this.reduced?-10:.05+(1-Math.abs(r*.2%2-1))*1.8,pulse:this.reduced?.4:.5+.5*Math.sin(r*2.2)}}updateLive(t,o,r,e){let s=this.live,n=this.renderer;if(!s||!n)return;let a=null;if(!this.reduced&&t!==null&&this.ema<(this.opts.liveBudget??60)){let h=18;for(let d of Z[t]?.stores??[]){let u=d.display[0]-o[0],f=d.display[1]-o[2],p=Math.hypot(u,f);p<h&&u*r[0]+f*r[2]>-2&&(h=p,a=d.node)}}let c=a?`store:${a}`:null;if(this.livePrev&&this.livePrev.key!==c){let h=this.livePrev;this.livePrev=null,n.setScreenTexture(h.key,null,h.saved),s.showing=null,this.dirty=!0}if(!a||!c||!s.prepare(a))return;s.render(a,this.time,this.ema<24?0:66)&&this.livePrev?.key!==c&&(this.livePrev={key:c,saved:n.setScreenTexture(c,s.texture)})}pickClient(t,o){let r=this.canvas.getBoundingClientRect();return r.width===0||r.height===0?null:this.pick((t-r.left)/r.width*2-1,1-(o-r.top)/r.height*2)}pick(t,o){let{origin:r,dir:e}=Do(this.invViewProj,t,o),s=this.rig.camera();if(this.rig.mode==="exterior"||s.level===null){let f=null,p=1/0;for(let v of Z){let y=Bo(r,e,[-k-.6,v.y-$,-k-.6],[k+.6,v.y+Te-$,k+.6]);y!==null&&y<p&&(p=y,f={kind:"level",level:v.index})}if(!f&&e[1]<0){let v=-r[1]/e[1];Math.hypot(r[0]+e[0]*v,r[2]+e[2]*v)<52&&(f={kind:"plaza"})}return f}let n=s.level,a=re(n),c=null,l=1/0,h=[s.eye[0],s.eye[2]],d=f=>{let p=[r[0]+e[0]*f,r[2]+e[2]*f],v={a:h,b:[p[0]-(p[0]-h[0])*.02,p[1]-(p[1]-h[1])*.02]};return this.opaqueWalls.every(y=>Vt(v,y)>.01)},u=(f,p)=>{f!==null&&f<l&&f<70&&d(f)&&(l=f,c=p)};for(let f of this.world?.screens??[]){if(f.level!==n)continue;let p=Bt(r,e,f.rect.centre,$t(f.rect),f.rect.u,f.rect.v,f.rect.hu,f.rect.hv),v=jn[f.kind];f.kind==="directory"?u(p,{kind:"directory",level:n,distance:p??0}):f.node&&v&&u(p,{kind:"store",node:f.node,part:v,distance:p??0})}for(let f of Z[n]?.stores??[]){let p=qn(r,e,f.holo.at,.45,a+no,a+no+1.82*Yr);p!==null&&u(p,{kind:"store",node:f.node,part:"body",distance:p})}for(let f of this.fronts)f.level===n&&u(Bt(r,e,f.centre,f.normal,f.u,[0,1,0],L/2,2.8),{kind:"store",node:f.node,part:"front",distance:0});{let f=e[0]*e[0]+e[2]*e[2],p=2*(r[0]*e[0]+r[2]*e[2]),v=r[0]*r[0]+r[2]*r[2]-K*K,y=p*p-4*f*v;if(f>1e-9&&y>=0){let b=(-p-Math.sqrt(y))/(2*f),m=r[1]+e[1]*b;b>0&&m>a&&m<a+Te&&u(b,{kind:"lift",distance:b})}}if(c){let f=c;return f.kind==="store"&&f.part==="front"?{...f,distance:l}:f}if(e[1]<-.02){let f=(a-r[1])/e[1],p=[r[0]+e[0]*f,r[2]+e[2]*f];if(f<40&&_o(n,p))return{kind:"floor",level:n,p,distance:f}}return null}click(t,o){let r=this.pickClient(t,o);if(r)switch(r.kind){case"level":this.goTo({kind:"level",level:r.level});break;case"plaza":this.goTo({kind:"plaza"});break;case"store":this.goTo(qr(r.node,r.part));break;case"floor":this.goTo({kind:"point",level:r.level,p:r.p});break;case"lift":case"directory":this.opts.onSelect?.(r);break}}emit(t,o,r,e){let s=o!==null?Z[o]:void 0,n=[r[0],r[2]],a=s&&this.rig.mode!=="exterior"?wo(s,n):null,c=null;if(a?.kind==="store"&&this.rig.mode==="walk")for(let f of dt){let p=a.store.stations[f].p;Math.hypot(p[0]-n[0],p[1]-n[1])<.9&&(c=f)}let l={mode:this.rig.mode,level:this.rig.mode==="exterior"?null:o,region:a?.kind??null,store:a?.kind==="store"?a.store.node:null,focus:this.focus,x:n[0],z:n[1],heading:e,destination:this.rig.destination,live:this.live?.showing??null,station:c,holos:this.drawnHolos},h=l.focus,d=JSON.stringify([l.mode,l.level,l.region,l.store,h?[h.kind,"node"in h?h.node:"","level"in h?h.level:"","part"in h?h.part:""]:null,l.destination,l.live,l.station,l.holos]);if(d===this.snapKey&&t-this.snapAt<120)return;this.snapKey=d,this.snapAt=t;let u=this.host.dataset;u.mode=l.mode,u.level=l.level===null?"":String(l.level+1),u.store=l.store??"",u.live=l.live??"",u.region=l.region??"",u.station=l.station??"",u.holo=l.holos.join(","),u.frame=`${Math.round(this.ema)}ms@${this.scale.toFixed(2)}`,u.pos=`${l.x.toFixed(1)},${l.z.toFixed(1)}`,this.opts.onSnapshot(l)}};function qr(i,t){return t==="front"?{kind:"store",node:i}:{kind:"store",node:i,station:t}}function qn(i,t,o,r,e,s){let n=i[0]-o[0],a=i[2]-o[1],c=t[0]*t[0]+t[2]*t[2];if(c<1e-9)return null;let l=2*(n*t[0]+a*t[2]),h=n*n+a*a-r*r,d=l*l-4*c*h;if(d<0)return null;let u=(-l-Math.sqrt(d))/(2*c);if(u<=0)return null;let f=i[1]+t[1]*u;return f>=e&&f<=s?u:null}function Kn(i){let t=i.getExtension("EXT_color_buffer_float")!==null,o=globalThis.__OUTLET_QUALITY__;return o==="basic"?"basic":o==="cinematic"?t?"cinematic":"basic":t?Kr(i)?"basic":"cinematic":"basic"}function Kr(i){let t=String(i.getParameter(i.RENDERER));if(/^webkit webgl$/i.test(t)){let o=i.getExtension("WEBGL_debug_renderer_info");o&&(t=String(i.getParameter(o.UNMASKED_RENDERER_WEBGL)))}return/swiftshader|llvmpipe|softpipe|software|basic render/i.test(t)}export{jr as OutletEngine};
