import{a as sn,b as it,c as Lt}from"./chunk-GCCBNB25.js";import{B as _t,b as Ft,c as et,d as nn,e as so,h as rn,k as an,s as ln,t as un}from"./chunk-Q2Q6W7RD.js";import"./chunk-B74KHNJF.js";import{c as to,i as Ko,j as St,k as qo,l as Qo,m as Zo,n as oo,o as Jo,p as no,q as en,s as tn,t as on,v as ro}from"./chunk-U3VZVEBC.js";import{b as ao}from"./chunk-ED7P7TO3.js";import{$ as Oe,A as Ho,B as zo,D as Ze,H as Go,I as Wo,N as z,O as V,P as G,Q as be,R as rt,S as ge,T as ne,U as he,V as st,W as Fe,X as Je,Y as Et,Z as de,da as Yo,ea as Me,fa as Ce,ga as $o,ha as at,ia as Rt,ja as jo,ka as Pt,la as At,na as Xo,r as Lo,ra as ko,x as Co,z as Bo}from"./chunk-V2YZOSSV.js";import{a as eo,c as Do,d as Oo,e as Io,f as No,i as Uo}from"./chunk-J3JRVZSH.js";import{b as Vo}from"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var We=Math.PI/180;function io(n,e){return[n[0]+e[0],n[1]+e[1],n[2]+e[2]]}function Re(n,e){return[n[0]-e[0],n[1]-e[1],n[2]-e[2]]}function Ur(n,e){return[n[0]*e,n[1]*e,n[2]*e]}function Ge(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function fe(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function hn(n){return Math.hypot(n[0],n[1],n[2])}function J(n){let e=hn(n)||1;return[n[0]/e,n[1]/e,n[2]/e]}function _e(n,e,t){return n+(e-n)*t}function Le(n,e,t){return Math.min(t,Math.max(e,n))}function lt(n,e){let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function ut(n){let e=Le(n,0,1);return e*e*e*(e*(e*6-15)+10)}function dn(n,e=0){let t=Math.cos(e);return[Math.sin(n)*t,Math.sin(e),-Math.cos(n)*t]}function ct(){let n=new Float32Array(16);return n[0]=n[5]=n[10]=n[15]=1,n}function fn(n,e,t,r,o){let s=1/Math.tan(e/2);return n.fill(0),n[0]=s/t,n[5]=s,n[10]=(o+r)/(r-o),n[11]=-1,n[14]=2*o*r/(r-o),n}function mn(n,e,t,r,o,s,a){return n.fill(0),n[0]=2/(t-e),n[5]=2/(o-r),n[10]=-2/(a-s),n[12]=-(t+e)/(t-e),n[13]=-(o+r)/(o-r),n[14]=-(a+s)/(a-s),n[15]=1,n}function Vt(n,e,t,r=[0,1,0]){let o=J(Re(e,t)),s=fe(r,o);hn(s)<1e-6&&(s=fe([0,0,1],o)),s=J(s);let a=fe(o,s);return n[0]=s[0],n[1]=a[0],n[2]=o[0],n[3]=0,n[4]=s[1],n[5]=a[1],n[6]=o[1],n[7]=0,n[8]=s[2],n[9]=a[2],n[10]=o[2],n[11]=0,n[12]=-Ge(s,e),n[13]=-Ge(a,e),n[14]=-Ge(o,e),n[15]=1,n}function ht(n,e,t){let r=new Float32Array(16);for(let o=0;o<4;o++)for(let s=0;s<4;s++){let a=0;for(let i=0;i<4;i++)a+=(e[i*4+s]??0)*(t[o*4+i]??0);r[o*4+s]=a}return n.set(r),n}function Dt(n,e){let t=b=>e[b]??0,r=t(0)*t(5)-t(1)*t(4),o=t(0)*t(6)-t(2)*t(4),s=t(0)*t(7)-t(3)*t(4),a=t(1)*t(6)-t(2)*t(5),i=t(1)*t(7)-t(3)*t(5),u=t(2)*t(7)-t(3)*t(6),l=t(8)*t(13)-t(9)*t(12),c=t(8)*t(14)-t(10)*t(12),h=t(8)*t(15)-t(11)*t(12),d=t(9)*t(14)-t(10)*t(13),f=t(9)*t(15)-t(11)*t(13),m=t(10)*t(15)-t(11)*t(14),p=r*m-o*f+s*d+a*h-i*c+u*l;return p?(p=1/p,n[0]=(t(5)*m-t(6)*f+t(7)*d)*p,n[1]=(t(2)*f-t(1)*m-t(3)*d)*p,n[2]=(t(13)*u-t(14)*i+t(15)*a)*p,n[3]=(t(10)*i-t(9)*u-t(11)*a)*p,n[4]=(t(6)*h-t(4)*m-t(7)*c)*p,n[5]=(t(0)*m-t(2)*h+t(3)*c)*p,n[6]=(t(14)*s-t(12)*u-t(15)*o)*p,n[7]=(t(8)*u-t(10)*s+t(11)*o)*p,n[8]=(t(4)*f-t(5)*h+t(7)*l)*p,n[9]=(t(1)*h-t(0)*f-t(3)*l)*p,n[10]=(t(12)*i-t(13)*s+t(15)*r)*p,n[11]=(t(9)*s-t(8)*i-t(11)*r)*p,n[12]=(t(5)*c-t(4)*d-t(6)*l)*p,n[13]=(t(0)*d-t(1)*c+t(2)*l)*p,n[14]=(t(13)*o-t(12)*a-t(14)*r)*p,n[15]=(t(8)*a-t(9)*o+t(10)*r)*p,n):null}function cn(n,e){let t=(n[0]??0)*e[0]+(n[4]??0)*e[1]+(n[8]??0)*e[2]+(n[12]??0),r=(n[1]??0)*e[0]+(n[5]??0)*e[1]+(n[9]??0)*e[2]+(n[13]??0),o=(n[2]??0)*e[0]+(n[6]??0)*e[1]+(n[10]??0)*e[2]+(n[14]??0),s=(n[3]??0)*e[0]+(n[7]??0)*e[1]+(n[11]??0)*e[2]+(n[15]??0);return[t/s,r/s,o/s,s]}function pn(n,e,t){let r=cn(n,[e,t,-1]),o=cn(n,[e,t,1]),s=[r[0],r[1],r[2]];return{origin:s,dir:J(Re([o[0],o[1],o[2]],s))}}function bn(n,e,t,r){let o=-1/0,s=1/0;for(let a=0;a<3;a++){let i=n[a]??0,u=e[a]??0,l=t[a]??0,c=r[a]??0;if(Math.abs(u)<1e-12){if(i<l||i>c)return null;continue}let h=(l-i)/u,d=(c-i)/u;if(h>d&&([h,d]=[d,h]),o=Math.max(o,h),s=Math.min(s,d),o>s)return null}return s<0?null:o>=0?o:s}function Ot(n,e,t,r,o,s,a,i){let u=Ge(e,r);if(Math.abs(u)<1e-9)return null;let l=Ge(Re(t,n),r)/u;if(l<0)return null;let c=io(n,Ur(e,l)),h=Re(c,t);return Math.abs(Ge(h,o))>a||Math.abs(Ge(h,s))>i?null:l}var dt=13;function W(n){let e=parseInt(n.replace("#",""),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var Ye=class{data=[];get vertexCount(){return this.data.length/dt}toArray(){return new Float32Array(this.data)}vertex(e,t,r,o){this.data.push(e[0],e[1],e[2],t[0],t[1],t[2],r[0],r[1],r[2],o.gloss,o.emit??0,o.ao??1,o.pattern??0)}tri(e,t,r,o,s,a){let i=a??J(fe(Re(t,e),Re(r,e)));this.vertex(e,i,o,s),this.vertex(t,i,o,s),this.vertex(r,i,o,s)}quad(e,t,r,o,s,a,i){let u=i??J(fe(Re(t,e),Re(o,e)));this.tri(e,t,r,s,a,u),this.tri(e,r,o,s,a,u)}box(e,t,r,o,s={}){let[a,i,u]=e,[l,c,h]=t;s.top!==!1&&this.quad([a,c,u],[l,c,u],[l,c,h],[a,c,h],r,o,[0,1,0]),s.bottom!==!1&&this.quad([a,i,h],[l,i,h],[l,i,u],[a,i,u],r,o,[0,-1,0]),this.quad([a,i,h],[a,c,h],[l,c,h],[l,i,h],r,o,[0,0,1]),this.quad([l,i,u],[l,c,u],[a,c,u],[a,i,u],r,o,[0,0,-1]),this.quad([l,i,h],[l,c,h],[l,c,u],[l,i,u],r,o,[1,0,0]),this.quad([a,i,u],[a,c,u],[a,c,h],[a,i,h],r,o,[-1,0,0])}wall(e,t,r,o,s,a,i){let u=Math.hypot(t[0]-e[0],t[1]-e[1]);if(u<1e-6)return;let l=(t[0]-e[0])/u,c=(t[1]-e[1])/u,h=-c*(s/2),d=l*(s/2),f=(b,y,E)=>[b[0]+h*y,E,b[1]+d*y],m=[-c,0,l],p=[c,0,-l];this.quad(f(e,1,r),f(e,1,o),f(t,1,o),f(t,1,r),a,i,m),this.quad(f(t,-1,r),f(t,-1,o),f(e,-1,o),f(e,-1,r),a,i,p),this.quad(f(e,-1,o),f(t,-1,o),f(t,1,o),f(e,1,o),a,i,[0,1,0]),this.quad(f(e,1,r),f(t,1,r),f(t,-1,r),f(e,-1,r),a,i,[0,-1,0]),this.quad(f(e,-1,r),f(e,-1,o),f(e,1,o),f(e,1,r),a,i,[-l,0,-c]),this.quad(f(t,1,r),f(t,1,o),f(t,-1,o),f(t,-1,r),a,i,[l,0,c])}pane(e,t,r,o,s,a){let i=Math.hypot(t[0]-e[0],t[1]-e[1]);if(i<1e-6)return;let u=[-(t[1]-e[1])/i,0,(t[0]-e[0])/i];this.quad([e[0],r,e[1]],[e[0],o,e[1]],[t[0],o,t[1]],[t[0],r,t[1]],s,a,u)}prism(e,t,r,o,s,a={}){let i=e.length,u=l=>e[(l%i+i)%i]??[0,0];if(a.top!==!1)for(let l=1;l<i-1;l++)this.tri([u(0)[0],r,u(0)[1]],[u(l)[0],r,u(l)[1]],[u(l+1)[0],r,u(l+1)[1]],o,s,[0,1,0]);if(a.bottom!==!1)for(let l=1;l<i-1;l++)this.tri([u(0)[0],t,u(0)[1]],[u(l+1)[0],t,u(l+1)[1]],[u(l)[0],t,u(l)[1]],o,s,[0,-1,0]);if(a.sides!==!1){let l=e.reduce((h,d)=>h+d[0],0)/i,c=e.reduce((h,d)=>h+d[1],0)/i;for(let h=0;h<i;h++){let d=u(h),f=u(h+1),m=J([f[1]-d[1],0,-(f[0]-d[0])]),p=(d[0]+f[0])/2-l,b=(d[1]+f[1])/2-c;m[0]*p+m[2]*b<0&&(m=[-m[0],0,-m[2]]),this.quad([d[0],t,d[1]],[d[0],r,d[1]],[f[0],r,f[1]],[f[0],t,f[1]],o,s,m)}}}cylinder(e,t,r,o,s,a,i,u,l={}){let[c,h]=l.arc??[0,Math.PI*2],d=(m,p)=>[e+r*Math.sin(m),p,t+r*Math.cos(m)],f=m=>l.inward?[-Math.sin(m),0,-Math.cos(m)]:[Math.sin(m),0,Math.cos(m)];for(let m=0;m<a;m++){let p=c+(h-c)*m/a,b=c+(h-c)*(m+1)/a,y=d(p,o),E=d(p,s),R=d(b,s),P=d(b,o);this.vertex(y,f(p),i,u),this.vertex(E,f(p),i,u),this.vertex(R,f(b),i,u),this.vertex(y,f(p),i,u),this.vertex(R,f(b),i,u),this.vertex(P,f(b),i,u),l.caps!==!1&&!l.arc&&(this.tri([e,s,t],d(b,s),d(p,s),i,u,[0,1,0]),this.tri([e,o,t],d(p,o),d(b,o),i,u,[0,-1,0]))}}annulus(e,t,r,o,s,a,i,u){for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2,d=(f,m)=>[e+f*Math.sin(m),s,t+f*Math.cos(m)];this.quad(d(r,c),d(o,c),d(o,h),d(r,h),i,u,[0,1,0])}}sphere(e,t,r,o,s,a=1){let i=Math.max(4,Math.round(r/2)),u=(l,c)=>{let h=l/i*Math.PI,d=c/r*Math.PI*2,f=[Math.sin(h)*Math.sin(d),Math.cos(h),Math.sin(h)*Math.cos(d)];return[[e[0]+f[0]*t,e[1]+f[1]*t*a,e[2]+f[2]*t],J([f[0],f[1]/a,f[2]])]};for(let l=0;l<i;l++)for(let c=0;c<r;c++){let[h,d]=u(l,c),[f,m]=u(l+1,c),[p,b]=u(l+1,c+1),[y,E]=u(l,c+1);this.vertex(h,d,o,s),this.vertex(f,m,o,s),this.vertex(p,b,o,s),this.vertex(h,d,o,s),this.vertex(p,b,o,s),this.vertex(y,E,o,s)}}sweep(e,t,r,o,s,a=!1){let i=e.length;if(i<2)return;let u=b=>typeof t=="number"?t:t[Math.min(b,t.length-1)]??.02,l=b=>e[a?(b%i+i)%i:Math.max(0,Math.min(i-1,b))],c=b=>J(Re(l(b+1),l(b-1))),h=c(0),d=Math.abs(h[1])<.9?[0,1,0]:[1,0,0],f=J(fe(fe(h,d),h)),m=[];for(let b=0;b<i;b++){let y=c(b),E=f[0]*y[0]+f[1]*y[1]+f[2]*y[2];f=J([f[0]-y[0]*E,f[1]-y[1]*E,f[2]-y[2]*E]);let R=fe(y,f),P=l(b),U=u(b),I=[];for(let K=0;K<r;K++){let re=K/r*Math.PI*2,C=Math.cos(re),X=Math.sin(re),ee=[f[0]*C+R[0]*X,f[1]*C+R[1]*X,f[2]*C+R[2]*X];I.push([[P[0]+ee[0]*U,P[1]+ee[1]*U,P[2]+ee[2]*U],ee])}m.push(I)}let p=a?i:i-1;for(let b=0;b<p;b++){let y=m[b],E=m[(b+1)%i];if(!(!y||!E))for(let R=0;R<r;R++){let P=(R+1)%r,[U,I]=y[R],[K,re]=y[P],[C,X]=E[R],[ee,w]=E[P];this.vertex(U,I,o,s),this.vertex(C,X,o,s),this.vertex(ee,w,o,s),this.vertex(U,I,o,s),this.vertex(ee,w,o,s),this.vertex(K,re,o,s)}}a||(this.disc(l(0),c(0),0,u(0),r,o,s),this.disc(l(i-1),c(i-1),0,u(i-1),r,o,s))}strip(e,t,r,o,s){let a=i=>Array.isArray(t[0])?t[i]:t;for(let i=1;i<e.length;i++){let u=e[i-1],l=e[i],c=a(i-1),h=a(i),d=r/2,f=[u[0]-c[0]*d,u[1]-c[1]*d,u[2]-c[2]*d],m=[u[0]+c[0]*d,u[1]+c[1]*d,u[2]+c[2]*d],p=[l[0]+h[0]*d,l[1]+h[1]*d,l[2]+h[2]*d],b=[l[0]-h[0]*d,l[1]-h[1]*d,l[2]-h[2]*d],y=J(fe(Re(l,u),c));this.quad(f,m,p,b,o,s,y)}}disc(e,t,r,o,s,a,i){let u=J(t),l=Math.abs(u[1])<.9?[0,1,0]:[1,0,0],c=J(fe(l,u)),h=fe(u,c),d=(f,m)=>[e[0]+(c[0]*Math.cos(m)+h[0]*Math.sin(m))*f,e[1]+(c[1]*Math.cos(m)+h[1]*Math.sin(m))*f,e[2]+(c[2]*Math.cos(m)+h[2]*Math.sin(m))*f];for(let f=0;f<s;f++){let m=f/s*Math.PI*2,p=(f+1)/s*Math.PI*2;r<=0?this.tri(e,d(o,m),d(o,p),a,i,u):this.quad(d(r,m),d(o,m),d(o,p),d(r,p),a,i,u)}}pill(e,t,r,o,s,a,i,u){let l=Math.hypot(t[0]-e[0],t[1]-e[1]),c=(t[0]-e[0])/l,h=(t[1]-e[1])/l,d=Math.atan2(c,h);this.cylinder(e[0],e[1],r,o,s,a,i,u,{arc:[d+Math.PI/2,d+Math.PI*3/2]}),this.cylinder(t[0],t[1],r,o,s,a,i,u,{arc:[d-Math.PI/2,d+Math.PI/2]});let f=-h*r,m=c*r,p=[[e[0]+f,e[1]+m],[t[0]+f,t[1]+m],[t[0]-f,t[1]-m],[e[0]-f,e[1]-m]];this.prism(p,o,s,i,u,{bottom:!1});for(let[b,y]of[[e,d+Math.PI/2],[t,d-Math.PI/2]])for(let E=0;E<a;E++){let R=y+Math.PI*E/a,P=y+Math.PI*(E+1)/a;this.tri([b[0],s,b[1]],[b[0]+r*Math.sin(P),s,b[1]+r*Math.cos(P)],[b[0]+r*Math.sin(R),s,b[1]+r*Math.cos(R)],i,u,[0,1,0])}}};function ue(n,e,t,r,o,s=0){let a=[Math.sin(t),0,-Math.cos(t)],i=[-Math.cos(t),0,-Math.sin(t)];return{centre:[n[0]+a[0]*s,e,n[1]+a[2]*s],u:i,v:[0,1,0],hu:r/2,hv:o/2}}function lo(n,e,t,r,o){let s=[Math.sin(t),0,-Math.cos(t)],a=[Math.cos(t),0,Math.sin(t)];return{centre:[n[0],e,n[1]],u:a,v:s,hu:r/2,hv:o/2}}function $e(n){return J(fe(n.u,n.v))}function It(n,e=!1){let t=(s,a)=>[n.centre[0]+n.u[0]*n.hu*s+n.v[0]*n.hv*a,n.centre[1]+n.u[1]*n.hu*s+n.v[1]*n.hv*a,n.centre[2]+n.u[2]*n.hu*s+n.v[2]*n.hv*a],r=(s,a)=>[e?(1-s)/2:(s+1)/2,(1-a)/2],o=[];for(let[s,a]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])o.push(...t(s,a),...r(s,a));return new Float32Array(o)}var xe=1.78/489,Cr=510;function Te(n,e,t=0){return[(n-120)*xe,(Cr-e)*xe,t]}var Ct=6,q=(n,e,t,r,o=0)=>({x:n,y:e,w:t,d:r,z:o}),yn=[q(120,108,16,.052),q(120,118,34,.08),q(120,128,48,.1),q(120,144,49,.113),q(120,165,45,.118),q(120,186,43,.115),q(120,206,40,.108),q(120,228,37,.1),q(120,250,36.5,.1),q(120,270,40,.104),q(120,290,45,.11),q(120,306,45,.106),q(120,318,37,.09),q(120,326,18,.05)],Br=[q(120,84,11,.048),q(120,112,12.5,.052)],co=[q(70,132,13,.05),q(66,152,12,.045),q(63,180,10.5,.04),q(60,206,9.5,.036),q(57,228,8.6,.032),q(54,252,8.6,.032),q(51,276,7.8,.029),q(48,296,6.8,.025),q(46,308,6.2,.022)],ho=[q(98,296,22,.085),q(96,326,20,.08),q(95,356,17,.07),q(95,384,13.5,.056),q(95,402,12.5,.05),q(96,426,12.5,.052),q(96,450,11,.046),q(97,470,9,.036),q(98,488,8,.03)];function Hr(n,e){let t=[],r=s=>n[Math.max(0,Math.min(n.length-1,s))],o=(s,a,i,u,l)=>.5*(2*a+(-s+i)*l+(2*s-5*a+4*i-u)*l*l+(-s+3*a-3*i+u)*l*l*l);for(let s=0;s<n.length-1;s++){let[a,i,u,l]=[r(s-1),r(s),r(s+1),r(s+2)];for(let c=0;c<e;c++){let h=c/e;t.push({x:o(a.x,i.x,u.x,l.x,h),y:o(a.y,i.y,u.y,l.y,h),z:o(a.z,i.z,u.z,l.z,h),w:Math.max(.5,o(a.w,i.w,u.w,l.w,h)),d:Math.max(.004,o(a.d,i.d,u.d,l.d,h))})}}return t.push(r(n.length-1)),t}function Nt(n,e,t=20,r=!0){let o=Hr(e,3),s=o.map(a=>Array.from({length:t+1},(i,u)=>{let l=u/t*Math.PI*2,c=Te(a.x,a.y,a.z);return[c[0]+Math.sin(l)*a.w*xe,c[1],c[2]+Math.cos(l)*a.d]}));if(r){let a=o[0],i=o[o.length-1],u=(l,c)=>[.7,.35,0].map(h=>Array.from({length:t+1},(d,f)=>{let m=f/t*Math.PI*2,p=Te(l.x,l.y,l.z),b=Math.sqrt(1-h*h)*Math.min(l.w*xe,l.d)*.8*c;return[p[0]+Math.sin(m)*l.w*xe*h,p[1]+b,p[2]+Math.cos(m)*l.d*h]}));s.unshift(...u(a,1).reverse()),s.push(...u(i,-1))}zr(n,s)}function zr(n,e){let t=e.length,r=e[0]?.length??0,o=(a,i)=>e[Math.max(0,Math.min(t-1,a))]?.[(i%(r-1)+(r-1))%(r-1)]??[0,0,0],s=(a,i)=>{let u=Ut(o(a,i+1),o(a,i-1)),l=Ut(o(a+1,i),o(a-1,i)),c=fo(l,u);if(Math.hypot(c[0],c[1],c[2])<1e-12){let p=vn(e[a===0?1:t-2]??[]);return J(Ut(o(a,i),p))}let h=J(c),d=vn(e[Math.max(0,Math.min(t-1,a))]??[]),f=o(a,i),m=[f[0]-d[0],0,f[2]-d[2]];return h[0]*m[0]+h[2]*m[2]<0?[-h[0],-h[1],-h[2]]:h};for(let a=0;a<t-1;a++)for(let i=0;i<r-1;i++){let u=[[a,i],[a+1,i],[a+1,i+1],[a,i],[a+1,i+1],[a,i+1]];for(let[l,c]of u)n.push(...o(l,c),...s(l,c))}}function vn(n){let e=Math.max(1,n.length-1),t=0,r=0,o=0;for(let s=0;s<e;s++){let a=n[s]??[0,0,0];t+=a[0],r+=a[1],o+=a[2]}return[t/e,r/e,o/e]}var Ut=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],fo=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]];function ft(n,e,t,r=0,o=18){let s=Math.max(6,Math.round(o/2)),a=Math.cos(r),i=Math.sin(r),u=(l,c)=>{let h=l/s*Math.PI,d=c/o*Math.PI*2,f=[Math.sin(h)*Math.sin(d),Math.cos(h),Math.sin(h)*Math.cos(d)],m=f[0]*t[0],p=f[1]*t[1],b=[e[0]+m*a-p*i,e[1]+m*i+p*a,e[2]+f[2]*t[2]],y=f[0]/t[0],E=f[1]/t[1],R=J([y*a-E*i,y*i+E*a,f[2]/t[2]]);return[b,R]};for(let l=0;l<s;l++)for(let c=0;c<o;c++){let h=[[l,c],[l+1,c],[l+1,c+1],[l,c],[l+1,c+1],[l,c+1]];for(let[d,f]of h){let[m,p]=u(d,f);n.push(...m,...p)}}}function gn(){let n=[];ft(n,Te(120,55,.004),[27*xe,35*xe,.104],0,24),Nt(n,Br,18,!1),Nt(n,yn,28);for(let e of[1,-1]){let t=s=>({...s,x:e>0?s.x:240-s.x});Nt(n,co.map(t),16),Nt(n,ho.map(t),18);let r=e>0?41:199;ft(n,Te(r,330,.006),[7.5*xe,17*xe,.024],e>0?.08:-.08,14);let o=e>0?96:144;ft(n,Te(o,501,.045),[9.5*xe,7.5*xe,.11],0,14)}return new Float32Array(n)}function xn(n=.6,e=2.3,t=48){let r=[];for(let o=0;o<t;o++){let s=o/t*Math.PI*2,a=(o+1)/t*Math.PI*2,i=(u,l)=>[Math.sin(u)*n,l,Math.cos(u)*n,Math.sin(u),0,Math.cos(u)];r.push(...i(s,0),...i(a,0),...i(a,e),...i(s,0),...i(a,e),...i(s,e))}return new Float32Array(r)}var Tn={brain:0,hypothalamus:-.005,brainstem:-.025,"visual-cortex":-.07,eyes:.086,ears:0,nose:.104,mouth:.09,thyroid:.035,thymus:.07,heart:.035,lungs:0,liver:.02,gallbladder:.055,stomach:.04,spleen:-.035,pancreas:-.02,kidneys:-.062,adrenals:-.062,"small-intestine":.04,"large-intestine":.035,bladder:.04,"spinal-cord":-.088,"sympathetic-chain":-.072,vagus:-.01,"arm-muscles":0,"thigh-muscles":0,"belly-fat":.07,"bone-marrow":0,"lymph-nodes":.03,scalp:0,fingernails:.02,toenails:.12,forearm:0,ankle:0,hand:.01,body:0};function mo(n,e){let t=[],r=[],o=0,s=0,a=n.match(/[MLHVQCSZmlhvqcsz]|-?\d*\.?\d+(?:e-?\d+)?/g)??[],i=0,u="M",l=()=>Number(a[i++]);for(;i<a.length;){let c=a[i]??"";if(/[A-Za-z]/.test(c)&&(u=c,i++,u==="Z"||u==="z")){r[0]&&r.push(r[0]);continue}if(u==="M")r.length>1&&t.push(r),o=l(),s=l(),r=[Te(o,s,e)],u="L";else if(u==="L")o=l(),s=l(),r.push(Te(o,s,e));else if(u==="H")o=l(),r.push(Te(o,s,e));else if(u==="V")s=l(),r.push(Te(o,s,e));else if(u==="Q"){let h=l(),d=l(),f=l(),m=l();for(let p=1;p<=6;p++){let b=p/6,y=1-b;r.push(Te(y*y*o+2*y*b*h+b*b*f,y*y*s+2*y*b*d+b*b*m,e))}o=f,s=m}else{let h=u==="c"||u==="C"?6:u==="s"||u==="S"||u==="q"?4:2;for(let d=0;d<h&&i<a.length&&!/[A-Za-z]/.test(a[i]??"");d++)i++;r.length>1&&t.push(r),r=[]}}return r.length>1&&t.push(r),t}function Gr(n,e){let t=Tn[n];if("e"in e){let[l,c,h,d,f=0]=e.e,m=Math.max(.006,Math.min(.09,Math.min(h,d)*xe*.9));return{organs:[{centre:Te(l,c,t),radii:[h*xe,d*xe,m],rotZ:-f*Math.PI/180}],strands:[]}}if(e.line!==void 0)return e.line<1?{organs:[],strands:[]}:{organs:[],strands:mo(e.d,t).map(l=>({points:l,radius:Math.max(.004,e.line*xe*.5)}))};let r=mo(e.d,t).flat();if(r.length===0)return{organs:[],strands:[]};let o=r.map(l=>l[0]),s=r.map(l=>l[1]),a=[(Math.min(...o)+Math.max(...o))/2,(Math.min(...s)+Math.max(...s))/2,t],i=Math.max(.006,(Math.max(...o)-Math.min(...o))/2),u=Math.max(.006,(Math.max(...s)-Math.min(...s))/2);return{organs:[{centre:a,radii:[i,u,Math.min(i,u)],rotZ:0}],strands:[]}}var Wr={vessels:[{key:"arteries",color:Ze.artery,z:.012},{key:"veins",color:Ze.vein,z:.004}],nerves:[{key:"nerves",color:Ze.nerve,z:-.012}],lymphatics:[{key:"lymphatics",color:Ze.lymph,z:.026}],autonomic:[{key:"autonomic",color:Ze.nerve,z:-.07}]};function Yr(){let n=11,e=()=>(n=n*1664525+1013904223>>>0,n/4294967296),t=[[yn,140],[co,30],[co.map(o=>({...o,x:240-o.x})),30],[ho,40],[ho.map(o=>({...o,x:240-o.x})),40]],r=[Te(120,55,0)];for(let o=0;o<24;o++)r.push(Te(120+(e()-.5)*40,55+(e()-.5)*52,(e()-.5)*.12));for(let[o,s]of t)for(let a=0;a<s;a++){let i=Math.floor(e()*(o.length-1)),u=o[i],l=o[i+1],c=e(),h=(u.w+(l.w-u.w)*c)*.8,d=(u.d+(l.d-u.d)*c)*.8,f=e()*Math.PI*2,m=Math.sqrt(e());r.push(Te(u.x+(l.x-u.x)*c+Math.sin(f)*h*m,u.y+(l.y-u.y)*c,Math.cos(f)*d*m))}return r}var uo=null;function wn(n){let e=Lo.node(n),t=e?.content?.bodyMap;if(!e||!t)return null;let r=Go(t),o=new Set(r.map(c=>c.region)),s=c=>{let h=[],d=[];for(let f of c)for(let m of Bo[f].shapes){let p=Gr(f,m);h.push(...p.organs),d.push(...p.strands)}return{organs:h,strands:d}},a=t.overlays??[],i=[];for(let c of a)for(let h of Wr[c]??[])for(let d of Ho[h.key])for(let f of mo(d,h.z))i.push({points:f,color:W(h.color)});let u=W(Vo[e.tier]),l=Wo(r,!1).filter(c=>c.region!=="body").map(c=>({at:Te(c.x,c.y,Tn[c.region]),r:Math.max(.035,c.r*xe*.85),rows:c.rows}));return a.includes("cells")&&!uo&&(uo=Yr()),{node:n,tint:u,lit:s(o),ghosts:s(Co.filter(c=>!o.has(c))),lines:i,dots:a.includes("cells")?uo??[]:[],beads:a.includes("autonomic")?zo.map(([c,h])=>Te(c,h,-.07)):[],targets:l,rows:r,map:t,whole:t.scope==="systemic"||o.has("body"),skin:a.includes("skin")}}function Mn(n,e,t,r,o,s){let i=(b,y)=>[t.centre[0]+t.u[0]*b+t.n[0]*.012,y,t.centre[2]+t.u[2]*b+t.n[2]*.012],u=t.centre[1]+t.hv,l=i(r*(t.hu+.12),0),c=b=>Math.hypot(b[0]-l[0],b[2]-l[2]),h=n.targets.map(b=>e(b.at)),d=[];n.rows.forEach((b,y)=>{let E=null;if(n.targets.forEach((R,P)=>{let U=h[P];U&&R.rows.includes(b.index)&&(!E||c(U)<c(E))&&(E=U)}),!E){let R=e([.31,1.25,0]),P=e([-.31,1.25,0]);E=c(R)<c(P)?R:P}d.push({row:b.index,start:E,end:u-(o[y]??0)*2*t.hv})});let f=d.filter(b=>b.end<=b.start[1]).sort((b,y)=>y.start[1]-b.start[1]),m=d.filter(b=>b.end>b.start[1]).sort((b,y)=>b.start[1]-y.start[1]),p=[];for(let b of[f,m])b.forEach((y,E)=>{let R=r*(t.hu+.1+E*.05);p.push({row:y.row,points:[y.start,i(R,y.start[1]),i(R,y.end),i(r*(t.hu-s),y.end)]})});return p.sort((b,y)=>b.row-y.row)}function po(n){let e=[];for(let t of n.organs)ft(e,t.centre,t.radii,t.rotZ,16);for(let t of n.strands)for(let r=1;r<t.points.length;r++){let o=t.points[r-1],s=t.points[r];$r(e,o,s,t.radius)}return new Float32Array(e)}function $r(n,e,t,r){let o=Ut(t,e);if(Math.hypot(o[0],o[1],o[2])<1e-6)return;let a=J(o),i=Math.abs(a[2])<.9?[0,0,1]:[1,0,0],u=J(fo(i,a)),l=fo(a,u),c=8,h=(d,f)=>{let m=[u[0]*Math.cos(f)+l[0]*Math.sin(f),u[1]*Math.cos(f)+l[1]*Math.sin(f),u[2]*Math.cos(f)+l[2]*Math.sin(f)];return[[d[0]+m[0]*r,d[1]+m[1]*r,d[2]+m[2]*r],m]};for(let d=0;d<c;d++){let f=d/c*Math.PI*2,m=(d+1)/c*Math.PI*2,[p,b]=h(e,f),[y,E]=h(e,m),[R,P]=h(t,f),[U,I]=h(t,m);n.push(...p,...b,...R,...P,...U,...I,...p,...b,...U,...I,...y,...E)}ft(n,t,[r,r,r],0,8)}var jr=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyQ","KeyE","ShiftLeft","ShiftRight"]);function Xr(n){return n instanceof HTMLElement&&(n.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(n.tagName))}var Bt=class{keys=new Set;downAt=new Map;held=new Map;lastConsume=performance.now();dragX=0;dragY=0;zoom=0;pointers=new Map;press=null;pinch=0;el;h;off=[];constructor(e,t){this.el=e,this.h=t;let r=(a,i,u,l)=>{a.addEventListener(i,u,l),this.off.push(()=>a.removeEventListener(i,u,l))},o=(a,i)=>{window.addEventListener(a,i),this.off.push(()=>window.removeEventListener(a,i))};r(e,"pointerdown",a=>{a.button!==0&&a.pointerType==="mouse"||(e.setPointerCapture?.(a.pointerId),this.pointers.set(a.pointerId,{x:a.clientX,y:a.clientY}),this.pointers.size===1&&(this.press={x:a.clientX,y:a.clientY,moved:!1}),this.pointers.size===2&&(this.press=null,this.pinch=this.pinchDistance()),this.h.poke())}),r(e,"pointermove",a=>{let i=this.pointers.get(a.pointerId);if(!i){a.pointerType==="mouse"&&this.h.hover(a.clientX,a.clientY);return}let u=a.clientX-i.x,l=a.clientY-i.y;if(i.x=a.clientX,i.y=a.clientY,this.pointers.size===2){let c=this.pinchDistance();this.pinch>0&&c>0&&(this.zoom+=(this.pinch-c)*2.2),this.pinch=c}else this.press&&(!this.press.moved&&Math.hypot(a.clientX-this.press.x,a.clientY-this.press.y)>5&&(this.press.moved=!0),this.press.moved&&(this.dragX+=u,this.dragY+=l));this.h.poke()});let s=a=>{let i=this.press;this.pointers.delete(a.pointerId),this.pointers.size===0&&(i&&!i.moved&&a.type==="pointerup"&&this.h.click(a.clientX,a.clientY),this.press=null,this.pinch=0)};r(e,"pointerup",s),r(e,"pointercancel",s),r(e,"pointerleave",a=>{a.pointerType==="mouse"&&!this.pointers.has(a.pointerId)&&this.h.hover(-1,-1)}),r(e,"wheel",a=>{a.preventDefault(),this.zoom+=a.deltaMode===1?a.deltaY*32:a.deltaY,this.h.poke()},{passive:!1}),o("keydown",a=>{if(a.defaultPrevented||a.metaKey||a.ctrlKey||a.altKey||Xr(a.target)||this.h.blocked())return;let i=a.target===e||a.target===document.body||a.target===document.documentElement;if(a.key==="Escape"&&i){a.preventDefault(),this.h.back();return}if(a.key==="Enter"&&a.target===e){a.preventDefault(),this.h.activate();return}!i||!jr.has(a.code)||(a.preventDefault(),this.keys.has(a.code)||this.downAt.set(a.code,performance.now()),this.keys.add(a.code),this.h.poke())}),o("keyup",a=>{if(!this.keys.has(a.code))return;let i=performance.now(),u=Math.max(this.downAt.get(a.code)??i,this.lastConsume);this.held.set(a.code,(this.held.get(a.code)??0)+Math.max(0,i-u)),this.keys.delete(a.code),this.downAt.delete(a.code),this.h.poke()}),o("blur",()=>{this.keys.clear(),this.downAt.clear(),this.held.clear()})}pinchDistance(){let[e,t]=[...this.pointers.values()];return e&&t?Math.hypot(e.x-t.x,e.y-t.y):0}get busy(){return this.keys.size>0||this.held.size>0||this.pointers.size>0}consume(){let e=performance.now(),t=Math.max(1,e-this.lastConsume),r=new Map;for(let a of new Set([...this.keys,...this.held.keys()])){let i=this.held.get(a)??0;this.keys.has(a)&&(i+=e-Math.max(this.downAt.get(a)??e,this.lastConsume)),r.set(a,Math.min(1,i/t))}this.held.clear(),this.lastConsume=e;let o=a=>r.get(a)??0,s={forward:o("KeyW")+o("ArrowUp")-o("KeyS")-o("ArrowDown"),strafe:o("KeyD")-o("KeyA"),turn:o("ArrowRight")+o("KeyE")-o("ArrowLeft")-o("KeyQ"),run:o("ShiftLeft")+o("ShiftRight")>.5,lookX:this.dragX,lookY:this.dragY,zoom:this.zoom};return this.dragX=0,this.dragY=0,this.zoom=0,s}dispose(){for(let e of this.off)e();this.keys.clear(),this.held.clear(),this.el}};var bo=384,vo=288,Ht=class{gl;fbo;texture;tri;parallel;compiled=new Map;loading=new Set;order=[];showing=null;lastDraw=0;catalog;constructor(e,t=sn){this.gl=e,this.catalog=t,this.parallel=e.getExtension("KHR_parallel_shader_compile");let r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,bo,vo,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.texture=r,this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.tri=e.createVertexArray(),e.bindVertexArray(this.tri);let o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}prepare(e){let t=this.compiled.get(e);return t?(!t.ready&&!t.failed&&this.poll(t),t.ready):(this.loading.has(e)||(this.loading.add(e),this.catalog.load(e).then(r=>{this.loading.delete(e),this.compile(e,r)}).catch(()=>this.loading.delete(e))),!1)}compile(e,t){let r=this.gl,o=this.catalog.tier(e),s=(c,h)=>{let d=r.createShader(c);return d&&(r.shaderSource(d,h),r.compileShader(d)),d},a=s(r.VERTEX_SHADER,Oo),i=s(r.FRAGMENT_SHADER,Do(t,1)),u=r.createProgram();if(!a||!i||!u)return;r.attachShader(u,a),r.attachShader(u,i),r.bindAttribLocation(u,0,"p"),r.linkProgram(u),r.deleteShader(a),r.deleteShader(i);let l={scene:t,tier:o,program:u,loc:new Map,ready:!1,failed:!1};for(this.compiled.set(e,l),this.order.push(e);this.order.length>3;){let c=this.order.findIndex(f=>f!==this.showing&&f!==e);if(c<0)break;let[h]=this.order.splice(c,1),d=h?this.compiled.get(h):void 0;h&&d&&(r.deleteProgram(d.program),this.compiled.delete(h))}this.poll(l)}poll(e){let t=this.gl;if(!(this.parallel&&!t.getProgramParameter(e.program,this.parallel.COMPLETION_STATUS_KHR))){if(!t.getProgramParameter(e.program,t.LINK_STATUS)){e.failed=!0;return}for(let r of["uRes","uOffset","uCamPos","uCamTarget","uFov","uAccent","uFloor","uRing","uTime","uZero","uBuild","uApart","uCut"])e.loc.set(r,t.getUniformLocation(e.program,r));e.ready=!0}}render(e,t,r){let o=this.compiled.get(e);if(!o?.ready)return!1;let s=performance.now();if(this.showing===e&&s-this.lastDraw<r)return!1;this.lastDraw=s;let a=this.gl,i=Io(o.scene),u=No(o.scene),l;if(u.az){let d=(u.az[0]+u.az[1])/2,f=(u.az[1]-u.az[0])/2;l={...i,az:d+Math.sin(t*.15)*f*.6}}else l={...i,az:i.az+t*6};let c=o.scene.poster??1.5,h=Uo(o.scene,o.tier,l,c+t);a.bindFramebuffer(a.FRAMEBUFFER,this.fbo),a.viewport(0,0,bo,vo),a.disable(a.DEPTH_TEST),a.disable(a.BLEND),a.useProgram(o.program),a.uniform2f(o.loc.get("uRes")??null,bo,vo),a.uniform2f(o.loc.get("uOffset")??null,0,0),a.uniform1i(o.loc.get("uZero")??null,0);for(let[d,f]of Object.entries(h)){let m=o.loc.get(d)??null;f.length===3?a.uniform3f(m,f[0]??0,f[1]??0,f[2]??0):a.uniform1f(m,f[0]??0)}return a.bindVertexArray(this.tri),a.drawArrays(a.TRIANGLES,0,3),a.bindVertexArray(null),a.bindFramebuffer(a.FRAMEBUFFER,null),a.enable(a.DEPTH_TEST),this.showing=e,!0}failed(e){return this.compiled.get(e)?.failed===!0}dispose(){let e=this.gl;for(let t of this.compiled.values())e.deleteProgram(t.program);e.deleteFramebuffer(this.fbo),e.deleteTexture(this.texture)}};var Pe=n=>n.toFixed(4),j=`#version 300 es
#ifndef Q
#define Q 0
#endif
precision highp float;
precision highp int;
precision highp sampler2DShadow;
`,ve=`
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
`,yo=`
uniform sampler2D uSky;
uniform float uSkyLod;
vec2 skyUv(vec3 d) { return vec2(atan(d.x, -d.z) * 0.15915494 + 0.5, acos(clamp(d.y, -1.0, 1.0)) * 0.31830989); }
vec3 skyAt(vec3 d, float rough) { return textureLod(uSky, skyUv(d), rough * uSkyLod).rgb; }
`,go=`
uniform vec3 uFog;
uniform vec3 uFogDisplay;
uniform float uFogDensity;
// Aerial haze, denser near the ground: distance fades toward the silver horizon.
float hazeK(vec3 p, float dist) { return 1.0 - exp(-dist * uFogDensity * (0.35 + 0.65 * exp(-max(p.y, 0.0) * 0.015))); }
vec3 haze(vec3 col, vec3 p, float dist) { return mix(col, uFog, hazeK(p, dist)); }
`;function zt(n,e){if(!e)return n;let t=n.replace(/const float HALF_ = [^;]+;/,`const float HALF_ = ${Pe(e.half)};`).replace(/const float RING_ = [^;]+;/,`const float RING_ = ${Pe(e.ring)};`).replace(/const float ATRIUM_ = [^;]+;/,`const float ATRIUM_ = ${Pe(e.atrium)};`);return e.levels!==void 0&&(t=t.replace(/const float ROOF_ = [^;]+;/,`const float ROOF_ = ${Pe(ge*e.levels)};`).replace(/const float TOP_ = [^;]+;/,`const float TOP_ = ${Pe(e.levels-1)};`)),t}var En=`
const float HALF_ = ${Pe(z)};
const float RING_ = ${Pe(V)};
const float ATRIUM_ = ${Pe(G)};
const float FLOOR_H_ = ${Pe(ge)};
const float SLAB_ = ${Pe(ne)};
const float ROOF_ = ${Pe(ge*Je)};
/** The top level's index: the atrium's ceiling band stops below it. */
const float TOP_ = ${Pe(Je-1)};
const float CINEMA_ = ${Pe(et)};
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
    else if (m < RING_ && lv < TOP_) res = uInterior * 0.22;
    else {
      float blur = 0.03 + rough * 1.6 + tUp * rough * 0.25;
      res = mix(uInterior * 0.32, vec3(uPanel), coffer(q, blur) * (1.0 - smoothstep(0.5, 0.9, rough) * 0.6));
    }
  } else {
    res = uInterior * 0.5 * here;
  }
  return mix(res, uInterior * 0.75 * here, smoothstep(0.55, 1.0, rough));
}
`,kr=`
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
`,Rn=`
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
`,Pn=`
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
`,Gt=`${j}
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
`,xo=`${j}
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
${ve}
${mt}
${yo}
${go}
${En}
${kr}
${Rn}
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
`,An=xo.replace(`#version 300 es
`,`#version 300 es
#define CLIP 1
`),Sn=`${j}
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
${ve}
${mt}
${yo}
${go}
${En}
${Rn}
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
`,Ue=`${j}
layout(location = 0) in vec2 aPos;
out vec2 vNdc;
void main() {
  vNdc = aPos;
  gl_Position = vec4(aPos, 1.0, 1.0);
}
`,Fn=`${j}
in vec2 vNdc;
uniform mat4 uInvViewProj;
uniform vec3 uCamPos;
uniform vec3 uSun;
uniform vec3 uSunColor;
${ve}
${yo}
#if Q == 1
${mt}
${Pn}
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
`,_n=`${j}
in vec2 vNdc;
uniform vec3 uSun;
${mt}
${Pn}
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
`,Ln=`${j}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
void main() {
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,Vn=`${j}
void main() {}
`,Dn=`${j}
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
`,On=`${j}
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
${ve}
${go}
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
`,In=`${j}
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
`,Nn=`${j}
in vec2 vUv;
in vec4 vCol;
in float vHard;
in vec3 vPos;
uniform float uClip;
uniform float uClipY;
${ve}
out vec4 frag;
void main() {
  if (uClip > 0.5 && vPos.y < uClipY - 0.02) discard;
  float r = length(vUv * 2.0 - 1.0);
  float a = vHard > 0.5 ? 1.0 : pow(clamp(1.0 - r, 0.0, 1.0), 1.7);
  // Glows add light: in the HDR buffer, as light.
  vec3 c = uDirect > 0.5 ? vCol.rgb : toLinear(vCol.rgb) * 2.5;
  frag = vec4(c * a, vCol.a * a);
}
`,Un=`${j}
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
`,Cn=`${j}
in vec2 vC;
in float vFade;
${ve}
out vec4 frag;
void main() {
  float r = length(vC);
  if (r > 1.0) discard;
  float a = pow(1.0 - r, 2.2) * vFade;
  // Added light, no coverage.
  vec3 c = uDirect > 0.5 ? vec3(1.0, 0.97, 0.92) * a * 0.5 : vec3(1.0, 0.95, 0.88) * a * 2.2;
  frag = vec4(c, 0.0);
}
`,Bn=`${j}
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec2 aUv;
uniform mat4 uViewProj;
out vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,Hn=`${j}
in vec2 vUv;
uniform float uTime;
uniform float uLength;
${ve}
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
`,zn=`${j}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
void main() {
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,Gn=`${j}
uniform vec4 uColor;
${ve}
out vec4 frag;
void main() {
  frag = vec4(uiOut(uColor.rgb / max(uColor.a, 1e-4)) * uColor.a, uColor.a);
}
`,pt=`${j}
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
`,Wn=`${j}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform vec3 uTint;
uniform float uWhole;
uniform float uTime;
uniform float uScanY;
${ve}
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
`,Yn=`${j}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uPulse;
${ve}
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
`,$n=`${j}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform float uTime;
uniform float uSide;
${ve}
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
`,jn=`${j}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
uniform mat4 uModel;
uniform float uPointSize;
void main() {
  gl_Position = uViewProj * uModel * vec4(aPos, 1.0);
  gl_PointSize = max(1.5, uPointSize / max(gl_Position.w, 0.1));
}
`,Xn=`${j}
uniform vec4 uColor;
uniform float uRound;
${ve}
out vec4 frag;
void main() {
  if (uRound > 0.5) {
    vec2 c = gl_PointCoord - 0.5;
    if (dot(c, c) > 0.25) discard;
  }
  frag = vec4(uiOut(uColor.rgb / max(uColor.a, 1e-4)) * uColor.a, uColor.a);
}
`,kn=`${j}
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
`,Kn=`${j}
in vec2 vC;
uniform float uTime;
${ve}
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
`,qn=`${j}
in vec2 vNdc;
uniform float uDim;
out vec4 frag;
void main() {
  float v = smoothstep(0.35, 1.45, length(vNdc));
  float a = uDim * (0.66 + 0.3 * v);
  frag = vec4(vec3(0.0) * a, a);
}
`,Qn=`${j}
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
`,Zn=`${j}
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
`,Jn=`${j}
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
`,er=`${j}
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
`,tr=`${j}
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
`,or=`${j}
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
${ve}
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
`,nr=`${j}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform float uTime;
uniform float uLight;
uniform float uHeight;
uniform vec3 uTint;
uniform float uGain;
${ve}
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
`,rr=`${j}
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
`,sr=`${j}
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
${ve}
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
`,ar=`${j}
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
`,ir=`${j}
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
`,lr=`${j}
in vec2 vUv;
uniform vec2 uHalf;
uniform vec3 uNeonA;
uniform float uOn;
${ve}
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
`;var ur={gloss:.4,emit:1},Kr={gloss:.9,pattern:4},Ee=Math.PI*2;function qr(n){let e=n>>>0||1;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function cr(n,e,t,r){let o=t.span,s=t.depth,a=t.top-t.bottom,i=(d,f,m)=>[t.at[0]+t.along[0]*d+t.inward[0]*m,t.bottom+f,t.at[1]+t.along[1]*d+t.inward[1]*m],u=d=>d?r.glow:r.body,l=d=>d?ur:r.material,c={p:i,W:o,D:s,H:a,rand:qr(r.seed),m:n,body:r.body,material:r.material,glow:r.glow,curve:(d,f,m=8,p=!1,b=!1)=>n.sweep(d,f,m,u(b),l(b),p),rod:(d,f,m,p=!1)=>n.sweep([d,f],m,5,u(p),l(p)),bead:(d,f,m=!1,p=6)=>n.sphere(d,f,p,u(m),l(m)),box:(d,f,m,p,b,y,E=!1)=>{let R=i(d,f,m),P=i(p,b,y);n.box([Math.min(R[0],P[0]),Math.min(R[1],P[1]),Math.min(R[2],P[2])],[Math.max(R[0],P[0]),Math.max(R[1],P[1]),Math.max(R[2],P[2])],u(E),l(E))},strip:(d,f,m,p=!1)=>n.strip(d,f,m,u(p),l(p)),hang:d=>{for(let f of d)n.sweep([f,[f[0],t.ceiling,f[2]]],.006,4,[.75,.77,.8],{...Kr,ao:r.light})},inside:d=>{let f=d[0]-t.at[0],m=d[2]-t.at[1],p=Math.max(-o/2,Math.min(o/2,f*t.along[0]+m*t.along[1])),b=Math.max(-s/2,Math.min(s/2,f*t.inward[0]+m*t.inward[1]));return i(p,Math.max(0,Math.min(a,d[1]-t.bottom)),b)}},h=(d,f,m)=>J([t.along[0]*d+t.inward[0]*m,f,t.along[1]*d+t.inward[1]*m]);switch(e.motif){case"helix":return Qr(c);case"cluster":return Zr(c,e.variant);case"ribbons":return Jr(c,e.variant,h);case"chain":return es(c,e.variant);case"rings":return ts(c,e.variant);case"loops":return os(c,e.variant);case"wheel":return ns(c);case"branches":return rs(c,e.variant,h);case"lattice":return ss(c,e.variant);case"strata":return is(c,e.variant,h);case"strands":return ls(c);case"spiral":return us(c,e.variant)}}function Be(n,e,t,r,o,s,a,i,u=0){let l=[];for(let c=0;c<i;c++){let h=c/i*Ee,d=Math.cos(h)*o,f=Math.sin(h)*s;a==="uv"?l.push(n.p(e+d,t+f*Math.sin(u),r+f*Math.cos(u))):a==="uh"?l.push(n.p(e+d,t+f,r+d*Math.sin(u))):l.push(n.p(e+d*Math.sin(u),t+f,r+d))}return l}function Qr(n){let e=n.W*.92,t=Math.min(.56,n.H*.36),r=n.H*.5,o=3.2,s=.42*Ee,a=(u,l)=>{let c=Ee*o*u+l;return n.p(-e/2+e*u,r+t*Math.sin(c),t*Math.cos(c))};for(let u of[0,s]){let l=[];for(let c=0;c<=60;c++)l.push(a(c/60,u));n.curve(l,.045,7)}let i=Math.round(o*9);for(let u=0;u<i;u++){let l=(u+.5)/i,c=a(l,0),h=a(l,s);n.rod(c,h,.014),n.bead([(c[0]+h[0])/2,(c[1]+h[1])/2,(c[2]+h[2])/2],.032,!0)}n.hang([a(.02,0),a(.5,0),a(.98,0)].map(u=>[u[0],n.p(0,r+t,0)[1],u[2]]))}function Zr(n,e){let t=[],r=e==="cells"?13:9;for(let o=0;o<900&&t.length<r;o++){let s=e==="cells"?.16+n.rand()*.28:.17+n.rand()*.16,a=[(n.rand()-.5)*(n.W-2*s-.4),s+.1+n.rand()*(n.H-2*s-.2),(n.rand()-.5)*(n.D-2*s-.3)];t.every(i=>Math.hypot(i.c[0]-a[0],i.c[1]-a[1],i.c[2]-a[2])>i.r+s+.08)&&t.push({c:a,r:s})}t.forEach(({c:o,r:s},a)=>{let i=n.p(o[0],o[1],o[2]);if(n.m.sphere(i,s,12,n.body,n.material),e==="cells")n.bead(n.p(o[0]+s*.18,o[1]-s*.78,o[2]-s*.25),s*.36,!0,8);else for(let u=0;u<12;u++){let l=Math.acos(1-2*(u+.5)/12),c=u*2.39996+a,h=[Math.sin(l)*Math.cos(c),Math.cos(l),Math.sin(l)*Math.sin(c)],d=n.p(o[0]+h[0]*s,o[1]+h[1]*s,o[2]+h[2]*s),f=n.p(o[0]+h[0]*(s+.13),o[1]+h[1]*(s+.13),o[2]+h[2]*(s+.13));n.rod(d,f,.012,a%3===0)}}),n.hang(t.slice(0,5).map(({c:o,r:s})=>n.p(o[0],o[1]+s,o[2])))}function Jr(n,e,t){let r=n.W*.9,o=n.H*.5;(e==="folds"?[-.9,-.3,.3,.9]:[-.7,0,.7]).forEach((a,i)=>{let u=[],l=[],c=[],h=e==="folds"?150:110;for(let d=0;d<=h;d++){let f=d/h,m=-r/2+r*f,p,b=0;if(e==="folds"){let E=Math.sin(m/.85*Ee+i*.9);p=o+.5*(Math.tanh(3*E)/Math.tanh(3))}else p=o+.38*Math.sin(m/3.1*Ee+i*1.7)+.08*Math.sin(m/.9*Ee+i),b=.9*Math.sin(m/2.4*Ee+i*2.1);let y=a+(e==="waves"?.18*Math.sin(m/1.7*Ee+i):0);u.push(n.p(m,p,y)),l.push(e==="folds"?t(0,0,1):t(0,Math.sin(b),Math.cos(b))),c.push(n.p(m,p+(e==="folds"?.012:0),y+(e==="folds"?-.21:0)))}n.strip(u,l,e==="folds"?.42:.34),i%2===0&&n.curve(c.filter((d,f)=>f%2===0),.009,4,!1,!0)}),n.hang([n.p(-r/2+.2,o+.5,0),n.p(0,o+.5,0),n.p(r/2-.2,o+.5,0)])}function es(n,e){let t=n.H*.5;if(e==="twin"){for(let u of[-.48,.48]){let l=n.W*.88;n.rod(n.p(-l/2,t,u),n.p(l/2,t,u),.02);let c=12;for(let h=0;h<c;h++){let d=-l/2+.25+h/(c-1)*(l-.5),f=n.p(d,t,u);n.bead(f,.075,h%3===1,8),n.rod(f,n.p(d+.12,t-.32,u+Math.sign(u)*.34),.008)}}n.hang([n.p(-n.W*.4,t,0),n.p(n.W*.4,t,0)]);return}let r=[];for(let u=0;u<9;u++)r.push([-n.W*.42+u/8*n.W*.84,.25+n.rand()*(n.H-.5),(n.rand()-.5)*(n.D-.6)]);let o=[],s=(u,l,c,h,d)=>.5*(2*l+(-u+c)*d+(2*u-5*l+4*c-h)*d*d+(-u+3*l-3*c+h)*d*d*d);for(let u=0;u<r.length-1;u++)for(let l=0;l<14;l++){let c=l/14,h=d=>r[Math.max(0,Math.min(r.length-1,d))];o.push([0,1,2].map(d=>s(h(u-1)[d]??0,h(u)[d]??0,h(u+1)[d]??0,h(u+2)[d]??0,c)))}let i=o.map((u,l)=>{let c=l/o.length;if(![.18,.5,.78].some(f=>Math.abs(c-f)<.07))return u;let d=l*1.1;return[u[0],u[1]+Math.sin(d)*.12,u[2]+Math.cos(d)*.12]}).map(u=>n.p(u[0],u[1],u[2]));n.curve(i,.018,5);for(let u=0;u<i.length;u+=3)n.bead(i[u],.05,u%21===0,6);n.hang([i[0],i[Math.floor(i.length/2)],i[i.length-1]])}function ts(n,e){let t=n.H*.5;if(e==="gyro"){let s=Math.min(.7,n.H*.45);n.bead(n.p(0,t,0),.12,!0,12),[s,s*.8,s*.6].forEach((a,i)=>n.curve(Be(n,0,t,0,a,a,i===1?"uh":"hv",48,i*.6),.024,6,!0)),n.rod(n.p(-n.W*.36,t,0),n.p(n.W*.36,t,0),.02);for(let a of[-1,1])n.bead(n.p(a*n.W*.36,t,0),.13,!1,12);n.hang([n.p(0,t+s,0),n.p(-n.W*.36,t,0),n.p(n.W*.36,t,0)]);return}if(e==="ripples"){for(let s=0;s<6;s++){let a=.28+s*.47;n.curve(Be(n,0,t+.32-s*.1,0,a,a*.42,"uv",48),.03-s*.003,4,!0,s===0||s===3)}n.bead(n.p(0,t+.55,0),.09,!0,10),n.hang([n.p(0,t+.55,0),n.p(-2.5,t-.18,0),n.p(2.5,t-.18,0)]);return}if(e==="pulse"){let s=i=>{let u=(l,c,h)=>h*Math.exp(-(((i-l)/c)**2));return .2+u(.14,.05,.1)+u(.34,.035,.5)+u(.42,.04,-.06)+u(.6,.06,.14)+u(.86,.035,.42)};for(let i=0;i<15;i++){let u=i/14,l=Math.min(n.H*.47,s(u));n.curve(Be(n,-n.W*.44+u*n.W*.88,t,0,l,l,"hv",24),.02,4,!0,l>.5)}n.rod(n.p(-n.W*.46,t,0),n.p(n.W*.46,t,0),.01,!0),n.hang([n.p(-n.W*.44,t+.2,0),n.p(0,t+.3,0),n.p(n.W*.44,t+.2,0)]);return}let r=7,o=Math.min(n.H*.47,.72);for(let s=0;s<r;s++){let a=-n.D*.42+s/(r-1)*n.D*.84,i=o*(1-s*.1);n.curve(Be(n,0,t,a,i,i,"uh",40),.02,5,!0,s===2||s===5)}n.bead(n.p(0,t,n.D*.42),.15,!0,12);for(let s of[-1,1])n.curve(Be(n,s*n.W*.31,t,0,.62,.62*.4,"uv",40),.016,4,!0);n.hang([n.p(0,t+o,-n.D*.42),n.p(0,t+o*.4,n.D*.42),n.p(-n.W*.31,t,0),n.p(n.W*.31,t,0)])}function os(n,e){let t=n.H*.5;if(e==="eight"){let s=[],a=n.W*.46;for(let i=0;i<120;i++){let u=i/120*Ee,l=1+Math.sin(u)**2;s.push(n.p(a*Math.cos(u)/l,t+.3*Math.sin(u),a*Math.sin(u)*Math.cos(u)/l*.62))}n.curve(s,.055,8,!0);for(let i=0;i<120;i+=9)n.bead(s[i],.07,!0,8);n.hang([s[0],s[30],s[60],s[90]]);return}if(e==="hairpin"){let s=n.H-.08;n.rod(n.p(-n.W*.44,s,0),n.p(n.W*.44,s,0),.03);for(let a=0;a<5;a++){let i=-n.W*.34+a/4*n.W*.68,u=.75+a*37%5*.1,l=.14,c=[];for(let h=0;h<=10;h++)c.push(n.p(i-l,s-h/10*u,0));for(let h=1;h<10;h++){let d=Math.PI+h/10*Math.PI;c.push(n.p(i+Math.cos(d)*l,s-u+Math.sin(d)*l,0))}for(let h=10;h>=0;h--)c.push(n.p(i+l,s-h/10*u,0));n.curve(c,.03,5),n.bead(n.p(i,s-u-l,0),.055,!0,8)}n.hang([n.p(-n.W*.4,s,0),n.p(0,s,0),n.p(n.W*.4,s,0)]);return}let r=n.W*.9,o=[];for(let s=0;s<=120;s++){let a=s/120,i=a*Ee*6.5;o.push(n.p(-r/2+r*a,t+.42*Math.sin(i),.42*Math.cos(i)+.25*Math.sin(a*Math.PI*2)))}n.curve(o,.05,8);for(let s=6;s<o.length;s+=18)n.bead(o[s],.06,!0,8);n.hang([o[10],o[60],o[110]])}function ns(n){let e=n.H*.5,t=Math.min(.68,n.H*.44),r=Be(n,-.62,e,0,t,t,"uh",56),o=Be(n,.62,e,0,t*.82,t*.82,"hv",56);n.curve(r,.04,8,!0),n.curve(o,.04,8,!0);for(let s=0;s<56;s+=7)n.bead(r[s],.075,s%14===0,8),n.bead(o[(s+3)%56],.065,s%14===7,8);n.hang([n.p(-.62,e+t,0),n.p(.62,e+t*.82,0)])}function rs(n,e,t){let r=[],o=(s,a,i,u,l,c)=>{let h=n.inside([s[0]+a[0]*i,s[1]+a[1]*i,s[2]+a[2]*i]);if(n.m.sweep([s,h],[u,u*.72],5,n.body,n.material),l===0){r.push(h);return}for(let d of[-1,1]){let f=(n.rand()-.5)*.2,m=e==="down"?c%2===1?Wt(a,t(0,-.15,d*(.62+f))):Wt(a,t(d*(.55+f),-.25,0)):c%2===1?Wt(a,t(0,0,d*(.42+f))):Wt(a,t(0,d*(.3+f),0));o(h,J(m),i*(.7+n.rand()*.06),u*.74,l-1,c+1)}};if(e==="down"){let s=n.p(0,n.H,0),a=n.p(0,n.H-.32,0);n.m.sweep([s,a],[.075,.065],6,n.body,n.material);for(let i of[-1,1])o(a,J(t(i,-.42,0)),1.25,.055,4,1)}else{let s=n.p(-n.W*.47,n.H*.55,0);o(s,t(1,0,0),1.05,.055,5,0)}for(let s of r)n.bead(s,.045,!0,6);n.hang(e==="down"?[]:[n.p(-n.W*.4,n.H*.55,0),n.p(-n.W*.1,n.H*.55,0)])}function Wt(n,e){return[n[0]+e[0],n[1]+e[1],n[2]+e[2]]}function ss(n,e){let t=n.H*.5,r=n.W*.46,o=n.D*.42;if(e==="weave"){[-.36,0,.36].forEach((s,a)=>{let i=(a%2===0?1:-1)*.5,u=Math.cos(i),l=Math.sin(i);for(let c=-12;c<=12;c++){let h=c*.42,d=-10,f=10,m=[];for(let b of[d,f])m.push([u*b-l*h,l*b+u*h]);let p=as(m[0],m[1],r,o);p&&n.rod(n.p(p[0][0],t+s,p[0][1]),n.p(p[1][0],t+s,p[1][1]),.012,c%5===0)}}),n.hang([n.p(-r*.8,t+.36,0),n.p(0,t+.36,0),n.p(r*.8,t+.36,0)]);return}if(e==="network"||e==="struts"){if(e==="struts"){let u=[[.25,-.45],[.25,.45],[n.H-.3,0]];for(let[c,h]of u)n.rod(n.p(-r,c,h),n.p(r,c,h),.022);let l=12;for(let c=0;c<=l;c++){let h=-r+c/l*2*r,d=-r+(c+.5)/l*2*r;c<l&&(n.rod(n.p(h,.25,-.45),n.p(d,n.H-.3,0),.014),n.rod(n.p(h,.25,.45),n.p(d,n.H-.3,0),.014),n.rod(n.p(h,.25,-.45),n.p(d,.25,.45),.006,!0))}n.hang([n.p(-r*.9,n.H-.3,0),n.p(0,n.H-.3,0),n.p(r*.9,n.H-.3,0)]);return}let s=[];for(let u=0;u<600&&s.length<24;u++){let l=[(n.rand()-.5)*2*r,.15+n.rand()*(n.H-.3),(n.rand()-.5)*2*o];s.every(c=>Math.hypot(c[0]-l[0],c[1]-l[1],c[2]-l[2])>.55)&&s.push(l)}let a=new Set;s.forEach((u,l)=>{let c=s.map((h,d)=>({j:d,d:Math.hypot(h[0]-u[0],h[1]-u[1],h[2]-u[2])})).filter(h=>h.j!==l).sort((h,d)=>h.d-d.d).slice(0,3);for(let{j:h}of c){let d=l<h?`${l}-${h}`:`${h}-${l}`;if(a.has(d))continue;a.add(d);let f=s[h];n.rod(n.p(u[0],u[1],u[2]),n.p(f[0],f[1],f[2]),.01,(l+h)%7===0)}n.bead(n.p(u[0],u[1],u[2]),.06+l%3*.02,l%3===0,8)});let i=s.slice().sort((u,l)=>l[1]-u[1]).slice(0,4);n.hang(i.map(u=>n.p(u[0],u[1],u[2])));return}if(e==="hex"){let a=Math.sqrt(3)*.42,i=new Map,u=[];for(let l=-1;l<=1;l++)for(let c=-4;c<=4;c++){let h=c*1.5*.42,d=l*a+(c%2===0?0:a/2);if(Math.abs(h)>r-.42||Math.abs(d)+.42>n.D/2)continue;let f=t+.06*Math.sin(c*1.3+l);u.push(n.p(h,f,d));for(let m=0;m<6;m++){let p=m/6*Ee,b=(m+1)/6*Ee,y=[h+Math.cos(p)*.42,d+Math.sin(p)*.42],E=[h+Math.cos(b)*.42,d+Math.sin(b)*.42],R=[y,E].map(P=>`${P[0].toFixed(2)},${P[1].toFixed(2)}`).sort().join("|");i.has(R)||i.set(R,[n.p(y[0],f,y[1]),n.p(E[0],f,E[1])])}}for(let[l,c]of i.values())n.rod(l,c,.014);for(let l of u)n.bead(l,.05,!0,6);n.hang([u[0],u[Math.floor(u.length/2)],u[u.length-1]].filter(l=>l!==void 0));return}for(let s=0;s<9;s++)for(let a=0;a<2;a++)for(let i=0;i<3;i++){let u=-r+.2+s/8*(2*r-.4),l=.25+a/1*(n.H-.5),c=-o+.15+i/2*(2*o-.3),h=.07+(s+a*3+i*5)%4*.012;n.box(u-h,l-h,c-h,u+h,l+h,c+h,(s*7+a*3+i*11)%9===0)}for(let s=0;s<9;s++){let a=-r+.2+s/8*(2*r-.4);n.rod(n.p(a,.25,-o+.15),n.p(a,.25,o-.15),.006),n.rod(n.p(a,n.H-.25,-o+.15),n.p(a,n.H-.25,o-.15),.006)}n.hang([n.p(-r+.2,n.H-.25,0),n.p(r-.2,n.H-.25,0)])}function as(n,e,t,r){let o=0,s=1,a=[e[0]-n[0],e[1]-n[1]],i=[[-a[0],n[0]+t],[a[0],t-n[0]],[-a[1],n[1]+r],[a[1],r-n[1]]];for(let[u,l]of i){if(u===0){if(l<0)return null;continue}let c=l/u;if(u<0?o=Math.max(o,c):s=Math.min(s,c),o>s)return null}return[[n[0]+a[0]*o,n[1]+a[1]*o],[n[0]+a[0]*s,n[1]+a[1]*s]]}function is(n,e,t){let r=n.W*.46;if(e==="steps"){for(let a=0;a<7;a++){let i=-r+a/7*2*r+.05,u=i+2*r/7-.14,l=.12+a/6*(n.H-.4);n.box(i,l,-.75,u,l+.05,.75),n.box(i,l+.05,.73,u,l+.065,.75,!0),n.hang([n.p((i+u)/2,l+.05,-.6),n.p((i+u)/2,l+.05,.6)])}return}if(e==="sheets"){for(let s=0;s<4;s++){let a=.25+s*((n.H-.5)/3),i=24,u=6,l=n.D*.36-s*.05,c=(h,d)=>{let f=-r+h/i*2*r,m=-l+d/u*2*l;return n.p(f,a+.07*Math.sin(f*1.6+s*1.1)*Math.cos(m*2.1+s),m)};for(let h=0;h<i;h++)for(let d=0;d<u;d++)n.m.quad(c(h,d),c(h+1,d),c(h+1,d+1),c(h,d+1),n.body,n.material);s===3&&n.curve(Array.from({length:i+1},(h,d)=>c(d,u)),.008,4,!1,!0),s===3&&n.hang([c(2,3),c(12,3),c(22,3)])}return}if(e==="arch"){for(let a=0;a<12;a++){let i=Math.PI*(.08+.84*a/11),u=Math.cos(i)*r*.82,l=-Math.sin(i)*n.D*.32+n.D*.14,c=.55+.6*Math.sin(i)**2,h=.1+.05*Math.sin(i),d=n.p(u,0,l);n.m.cylinder(d[0],d[2],h,Yt(n)-c,Yt(n),16,n.body,n.material),n.m.disc([d[0],Yt(n)-c-.002,d[2]],[0,1,0],h*.55,h*.8,16,n.glow,ur),n.hang([[d[0],Yt(n),d[2]]])}return}let o=9;for(let s=0;s<o;s++){let a=-r+.3+s/(o-1)*(2*r-.6),i=n.H*.5+.12*Math.sin(s*1.3),u=(l,c)=>{let h=Math.sin(l)*.36,d=(1-Math.cos(l))*.3;return n.p(a+d*.6,i+h*.25,c*.55)};for(let l=0;l<6;l++)for(let c=-2;c<2;c++){let h=-.9+l/6*1.8,d=-.9+(l+1)/6*1.8;n.m.quad(u(h,c/2),u(d,c/2),u(d,(c+1)/2),u(h,(c+1)/2),n.body,n.material,t(-1,0,0))}n.rod(u(-.9,0),u(.9,0),.006,s%3===1),n.hang([u(0,-.8),u(0,.8)])}}function Yt(n){return n.p(0,n.H,0)[1]}function ls(n){let e=n.H-.05,t=n.W*.44;n.rod(n.p(-t,e,0),n.p(t,e,0),.03);for(let r=0;r<38;r++){let o=-t+.1+r/37*(2*t-.2),s=(n.rand()-.5)*.5,a=.7+n.rand()*.6,i=n.rand()*Ee,u=[];for(let l=0;l<=5;l++){let c=l/5;u.push(n.p(o+.06*Math.sin(i+c*3),e-c*a,s+.05*Math.cos(i+c*2.4)))}n.curve(u,[.012,.011,.01,.009,.008,.007],4,!1,r%7===3)}n.hang([n.p(-t*.9,e,0),n.p(0,e,0),n.p(t*.9,e,0)])}function us(n,e){let t=n.H*.5;if(e==="spiral"){let r=[],o=[];for(let s=0;s<=140;s++){let a=s/140,i=a*Ee*3,u=.12+1.15*a**1.3;r.push(n.p(Math.cos(i)*u*2,t-.3+a*.55,Math.sin(i)*u*.85)),o.push(.012+.04*a)}n.curve(r,o,6);for(let s=10;s<r.length;s+=13)n.bead(r[s],.05,!0,6);n.hang([r[20],r[80],r[139]]);return}n.bead(n.p(0,t,0),.16,!0,14);for(let r=0;r<5;r++){let o=.7+r*.5,s=Math.min(n.D*.45,.32+r*.2),a=Be(n,0,t,0,o,s,"uv",56,(r-2)*.12);n.curve(a,.014,4,!0),n.bead(a[r*11%56],.06+r%2*.02,r%2===0,8)}n.hang([n.p(0,t+.16,0),n.p(-2.6,t,0),n.p(2.6,t,0)])}var He=J([-.53,.6,.6]),da=de(Je),hr=2.6,ye={sun:[2.55,2.42,2.22],sky:[.78,.84,.94],ground:[.4,.39,.37],interior:[.5,.495,.48],panel:3.4,emit:3.4,fog:[.86,.89,.93],fogDensity:45e-5,exposure:.8,exposureInside:1.35,bloomThreshold:2.2,bloomStrength:.16,grain:.016},mr=10,To=7,T={stoneFloor:W("#C3BDB2"),lobbyFloor:W("#CBC5BA"),graphite:W("#3A3D42"),graphiteDeep:W("#25272B"),travertine:W("#E6E0D5"),band:W("#E2DCD1"),plaster:W("#EFEEEB"),panel:W("#FFFFFF"),titanium:W("#A9AEB4"),fin:W("#57524C"),steel:W("#CDD2D7"),bronze:W("#9E8566"),blackGlass:W("#0B0D10"),paving:W("#B5AFA5"),plateau:W("#7C7D75"),water:W("#0A0C0F"),glass:W("#CFE0DC"),facadeGlass:W("#9DB0BF"),glassFloor:W("#E4EBEA"),frosted:W("#E9EEF0"),leather:W("#1B1A19"),carpet:W("#1F2225"),foliage:W("#34503A"),foliageLight:W("#4A6A45"),bark:W("#4B3D31"),soil:W("#2A2622"),runner:W("#E3232C"),runnerInlay:W("#A8262B"),warm:W("#FFE2B8"),marble:W("#ECE9E3"),terrazzo:W("#D8D2C8"),darkCeiling:W("#17181B"),fabric:W("#1C1D20"),cushion:W("#2A2B2E"),porcelain:W("#F3F1EC"),brass:W("#B99B66")},M={stoneFloor:{gloss:.9,pattern:1},graphiteFloor:{gloss:.9,pattern:5},graphite:{gloss:.82,pattern:5},stoneWall:{gloss:.28,pattern:2},band:{gloss:.4,pattern:2},plaster:{gloss:.08,pattern:10},panel:{gloss:.1,emit:1},line:{gloss:.2,emit:.55},titanium:{gloss:.62,pattern:3},steel:{gloss:.94,pattern:4},bronze:{gloss:.6,pattern:9},blackGlass:{gloss:.96,pattern:13},paving:{gloss:.45,pattern:12},plateau:{gloss:.1,pattern:15},water:{gloss:.985,pattern:6},leather:{gloss:.55,pattern:7},carpet:{gloss:.05,pattern:8},foliage:{gloss:.3,pattern:11},bark:{gloss:.2,pattern:14},matte:{gloss:.15},paint:{gloss:.18,pattern:10},walnut:{gloss:.42,pattern:16},marble:{gloss:.88,pattern:1},terrazzo:{gloss:.78,pattern:17},terrazzoFloor:{gloss:.86,pattern:17},fabric:{gloss:.04,pattern:8},chrome:{gloss:.95,pattern:4},porcelain:{gloss:.7},polishedBrass:{gloss:.86,pattern:4}},cs={blackGlass:[W("#0E0F12"),{gloss:.3}],bronze:[T.bronze,{gloss:.38,pattern:9}],steel:[T.titanium,{gloss:.38,pattern:3}],travertine:[T.travertine,M.stoneWall],marble:[T.marble,{gloss:.45,pattern:1}],graphite:[T.graphite,{gloss:.32,pattern:5}],terrazzo:[T.terrazzo,{gloss:.4,pattern:17}]},hs={noir:[T.steel,M.chrome],chroma:[T.bronze,M.bronze],warm:[T.brass,M.polishedBrass],gallery:[T.porcelain,M.porcelain]};function ds(n){return n.wallFinish==="walnut"?[W(n.wall),M.walnut]:n.wallFinish==="travertine"?[W(n.wall),M.stoneWall]:[W(n.wall),M.paint]}var fs={node:"",mood:"noir",wall:"#2A2D31",wallFinish:"plaster",floor:"pale",stele:"graphite",accent:"#9BA7B4",installation:{motif:"wheel"},shape:""};function ms(n){return[...n].reduce((e,t)=>e*31+t.charCodeAt(0)>>>0,7)}function ps(n){let[e,t,r]=W(n),o=s=>Math.min(1,s*.7+.3);return[o(e),o(t),o(r)]}function bs(n){let e=n>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function dr(n,e,t,r,o,s,a,i){let u=J(Re(t,e)),l=Math.abs(u[1])>.9?[1,0,0]:[0,1,0],c=J(fe(u,l)),h=fe(u,c),d=(f,m,p)=>{let b=[c[0]*Math.cos(p)+h[0]*Math.sin(p),c[1]*Math.cos(p)+h[1]*Math.sin(p),c[2]*Math.cos(p)+h[2]*Math.sin(p)];return[[f[0]+b[0]*m,f[1]+b[1]*m,f[2]+b[2]*m],b]};for(let f=0;f<s;f++){let m=f/s*Math.PI*2,p=(f+1)/s*Math.PI*2,[b,y]=d(e,r,m),[E,R]=d(e,r,p),[P]=d(t,o,m),[U]=d(t,o,p);n.vertex(b,y,a,i),n.vertex(P,y,a,i),n.vertex(U,R,a,i),n.vertex(b,y,a,i),n.vertex(U,R,a,i),n.vertex(E,R,a,i)}}function pr(n=Lt){let e=n.layout.levels,t=w=>n.exhibitOf(w),r=de(e.length),o=new Ye,s=new Ye,a=new Ye,i=[],u=[],l=[],c=[],h=[],d=[],f=[],m=[],p=bs(7),b=(w,v)=>{let g=s.vertexCount;v();let _=s.vertexCount-g;_>0&&l.push({first:g,count:_,centre:w})},y=(w,v=0)=>({gloss:w,emit:v}),E=(w,v,g,_,N)=>{let[Y,B,Q,S]=N,x=(A,O,F,D)=>c.push(A,v,O,F,D,Y,B,Q,S,0);x(w-_,g-_,0,0),x(w+_,g-_,1,0),x(w+_,g+_,1,1),x(w-_,g-_,0,0),x(w+_,g+_,1,1),x(w-_,g+_,0,1)},R=(w,v,g,_,N)=>E(w,v+.012,g,_,[0,0,0,N]),P=(w,v,g,_,N,Y)=>E(w,v+.014,g,_,[N[0]*Y,N[1]*Y,N[2]*Y,0]),U=(w,v)=>{let g=w.map(N=>N[0]),_=w.map(N=>N[1]);for(let N=Math.floor(Math.min(...g)/3)*3+1.5;N<Math.max(...g);N+=3)for(let Y=Math.floor(Math.min(..._)/3)*3+1.5;Y<Math.max(..._);Y+=3){if(![[N-1.05,Y-1.05],[N+1.05,Y-1.05],[N+1.05,Y+1.05],[N-1.05,Y+1.05]].every(x=>jo(x,w)))continue;let S=.8;o.quad([N-S,v,Y+S],[N+S,v,Y+S],[N+S,v,Y-S],[N-S,v,Y-S],T.panel,M.panel,[0,-1,0])}},I=ge-ne,K=(w,v,g)=>{if(!v){o.prism(w.poly,g,g,T.plaster,M.plaster,{top:!1,sides:!1}),U(w.poly,g-.012);return}let _=(S,x)=>Oe(w.id,S,x),N=[_(V,0),_(V,V),_(z,V),_(z,0)],Y=[_(V,V),_(z,z),_(z,V)],B=Ft[v.mood],Q=(S,x,A)=>{let[O,F]=_(S,x);o.annulus(O,F,.001,.065,g-.012,12,T.panel,{gloss:.1,emit:1.6}),o.annulus(O,F,.065,.11,g-.01,16,T.graphite,{...M.graphite,ao:A})};o.prism(Y,g,g,T.darkCeiling,{...M.plaster,ao:et},{top:!1,sides:!1});for(let[S,x]of[[V+5.6,V+2.4],[V+8.2,V+4.6],[V+8.4,V+1.6]])Q(S,x,et);if(so(v.mood))o.prism(N,g,g,T.plaster,{...M.plaster,ao:B},{top:!1,sides:!1}),U(N,g-.012);else{o.prism(N,g,g,T.darkCeiling,{...M.plaster,ao:B},{top:!1,sides:!1});for(let S of[V+2.1,V+7.3])for(let x of[1.4,3.8,6.2,8.6])Q(S,x,B)}},re=(w,v,g,_,N,Y,B)=>{let Q=Math.hypot(v[0]-w[0],v[1]-w[1]),S=(v[0]-w[0])/Q,x=(v[1]-w[1])/Q,A=Math.max(8,Math.round(Q/.11)),O=F=>{let D=F/A,L=D*Math.PI*2*(A/2),H=Math.sin(L)*N,$=Math.cos(L)*N*Math.PI*2*(A/2)/Q,se=-x-S*$,Z=S-x*$,te=Math.hypot(se,Z);return[[w[0]+S*Q*D-x*H,w[1]+x*Q*D+S*H],[se/te,Z/te]]};for(let F=0;F<A;F++){let[D,L]=O(F),[H,$]=O(F+1),se=[D[0],g,D[1]],Z=[H[0],g,H[1]],te=[H[0],_,H[1]],ae=[D[0],_,D[1]];o.vertex(se,[L[0],0,L[1]],Y,B),o.vertex(Z,[$[0],0,$[1]],Y,B),o.vertex(te,[$[0],0,$[1]],Y,B),o.vertex(se,[L[0],0,L[1]],Y,B),o.vertex(te,[$[0],0,$[1]],Y,B),o.vertex(ae,[L[0],0,L[1]],Y,B)}},C=(w,v,g)=>{let _=t(w.node),N=w.rooms,Y=w.bay.id,B=(le,pe)=>Oe(Y,le,pe),Q=w.bay.inward,S=w.bay.along,x=W(_.accent),[A,O]=ds(_),F=g+I,D=!so(_.mood),{stele:L,screen:H,partition:$}=Yo,se=Ft[_.mood],Z=le=>({...le,ao:se}),te=le=>({...le,ao:et});o.wall(B(V+.2,.17),B(z-.02,.17),g,F,.04,A,Z(O));let ae=$.l,ie=$.thick/4;for(let[le,pe,Se]of[[V+.02,$.d0,g],[$.d1,z-.02,g],[$.d0,$.d1,g+2.75]])o.wall(B(le,ae-ie),B(pe,ae-ie),Se,F,2*ie,A,Z(O)),o.wall(B(le,ae+ie),B(pe,ae+ie),Se,F,2*ie,T.fabric,te(M.fabric));let we=($.d0+$.d1)/2;h.push({key:"theater:marquee",rect:ue(B(we,ae-2*ie-.02),g+3.15,Me(-S[0],-S[1]),2.1,.41,0)});let[Xe,ot]=cs[_.stele],k=L.d+L.thick/2;o.wall(B(k,L.l0),B(k,L.l1),g+.07,g+L.height,L.thick,Xe,Z(ot)),o.wall(B(k,L.l0+.06),B(k,L.l1-.06),g,g+.07,L.thick-.12,T.graphiteDeep,Z(M.graphite));for(let le of[L.d+.055,L.d+L.thick-.055])o.wall(B(le,L.l0+.08),B(le,L.l1-.08),g+.012,g+.026,.008,x,M.line);o.wall(B(k,L.l0+.02),B(k,L.l1-.02),g+L.height,g+L.height+.012,L.thick-.04,x,M.line),nn(_.stele)&&o.wall(B(L.d-.002,L.l0+.08),B(L.d-.002,H.l0-.14),g+.14,g+L.height-.1,.004,W(rn[_.stele]),Z({gloss:.12}));let Ae=Me(-Q[0],-Q[1]),Ie=H.l1-H.l0,bt=Ie*3/4,Qt=g+H.bottom+bt/2;o.wall(B(L.d-.0075,H.l0-.05),B(L.d-.0075,H.l1+.05),Qt-bt/2-.05,Qt+bt/2+.05,.015,T.blackGlass,Z(M.blackGlass)),d.push({kind:"store",node:w.node,level:v,rect:ue(w.display,Qt,Ae,Ie,bt,0)});let ke=N.lettering;f.push({key:`stele:${w.node}`,node:w.node,level:v,station:"model",rect:ue(ke.at,g+ke.bottom+ke.height/2,ke.facing,ke.width,ke.height,0)});let Po=B(L.d-1.5,5);P(Po[0],g,Po[1],2.1,D?x:T.warm,D?.15:.05);let me=N.print,Zt=g+me.bottom+me.height/2,vt=le=>Q[0]*le[0]+Q[1]*le[1],Lr=vt(me.at)-me.width/2,Vr=vt(me.at)+me.width/2;o.wall(B(Lr-.05,ae-2*ie-.035),B(Vr+.05,ae-2*ie-.035),Zt-me.height/2-.05,Zt+me.height/2+.05,.07,T.panel,{gloss:.2,emit:.32}),d.push({kind:"print",node:w.node,level:v,rect:ue(me.at,Zt,me.facing,me.width,me.height,0)}),f.push({key:`caption:${w.node}`,node:w.node,level:v,rect:ue(B(vt(me.at),ae-2*ie-.005),g+me.bottom-.3,me.facing,me.width,me.width/8,0)}),f.push({key:`lesson:${w.node}`,node:w.node,level:v,station:"lesson",rect:ue(w.panel.at,g+1.85,Me(S[0],S[1]),4.3,2.5,0)});let Ke=w.examples;f.push({key:`examples:${w.node}`,node:w.node,level:v,station:"examples",rect:ue(Ke.at,g+Ke.bottom+Ke.height/2,Ke.facing,Ke.width,Ke.height,0)});let[yt,gt]=w.holo.at;o.cylinder(yt,gt,.95,g,g+.18,40,T.steel,Z(M.steel)),o.annulus(yt,gt,.8,.86,g+.182,48,T.panel,M.line),o.annulus(yt,gt,.01,.76,g+.181,40,T.plaster,{gloss:.5,emit:D?.08:.18}),R(yt,g,gt,1.7,.22);let Ao=vt(w.board.at),So=S[0]*w.board.at[0]+S[1]*w.board.at[1];o.wall(B(Ao-.023,So-w.board.width/2-.05),B(Ao-.023,So+w.board.width/2+.05),g+w.board.bottom-.05,g+w.board.bottom+w.board.height+.05,.024,T.titanium,Z(M.titanium)),d.push({kind:"board",node:w.node,level:v,rect:ue(w.board.at,g+w.board.bottom+w.board.height/2,w.board.facing,w.board.width,w.board.height,0)});let nt=N.bench,xt=nt.depth/2,Ve=[nt.a[0]-Q[0]*xt,nt.a[1]-Q[1]*xt],De=[nt.b[0]+Q[0]*xt,nt.b[1]+Q[1]*xt],[Dr,Or]=D?[T.graphite,M.graphite]:[T.travertine,M.band];o.box([Math.min(Ve[0],De[0])+.04,g,Math.min(Ve[1],De[1])+.04],[Math.max(Ve[0],De[0])-.04,g+.06,Math.max(Ve[1],De[1])-.04],T.graphiteDeep,Z(M.graphite)),o.box([Math.min(Ve[0],De[0]),g+.06,Math.min(Ve[1],De[1])],[Math.max(Ve[0],De[0]),g+.44,Math.max(Ve[1],De[1])],Dr,Z(Or)),R((Ve[0]+De[0])/2,g,(Ve[1]+De[1])/2,2.4,.14),o.prism(N.cinema.floor,g,g+.012,T.carpet,te(M.carpet),{bottom:!1});let Tt=Math.SQRT1_2;o.wall(B(V+.5+.17*Tt,V+.5-.17*Tt),B(z-.4+.17*Tt,z-.4-.17*Tt),g,F,.04,T.fabric,te(M.fabric)),re(N.cinema.curtain[0],N.cinema.curtain[1],g+.02,F-.04,.05,T.fabric,te(M.fabric));let ce=w.theater,Jt=ue(ce.at,g+ce.bottom+ce.height/2,ce.facing,ce.width,ce.height,0),Fo=[Math.sin(ce.facing),-Math.cos(ce.facing)],_o=[Jt.u[0],Jt.u[2]],qe=(le,pe)=>[ce.at[0]+_o[0]*le+Fo[0]*pe,ce.at[1]+_o[1]*le+Fo[1]*pe],Qe=ce.width/2,wt=g+ce.bottom+ce.height;o.wall(qe(-Qe-.16,-.035),qe(Qe+.16,-.035),g+ce.bottom-.16,wt+.16,.04,T.blackGlass,te({gloss:.45})),o.wall(qe(-Qe-.1,-.012),qe(Qe+.1,-.012),g+ce.bottom-.27,g+ce.bottom-.25,.02,T.warm,M.line),o.wall(qe(-Qe-.1,-.012),qe(Qe+.1,-.012),wt+.25,wt+.27,.02,T.warm,M.line),d.push({kind:"theater",node:w.node,level:v,rect:Jt}),h.push({key:"theater:marquee",rect:ue(ce.at,wt+.62,ce.facing,3.4,.66,.02)});for(let le of ce.seats){let[pe,Se]=le,Mt=Math.atan2(ce.at[0]-pe,ce.at[1]-Se);o.cylinder(pe,Se,.14,g,g+.24,10,T.steel,te(M.steel),{caps:!1}),o.cylinder(pe,Se,.42,g+.24,g+.3,16,T.steel,te(M.steel)),o.cylinder(pe,Se,.4,g+.3,g+.5,16,T.leather,te(M.leather)),o.cylinder(pe,Se,.42,g+.3,g+1.1,10,T.leather,te(M.leather),{arc:[Mt+Math.PI-1.3,Mt+Math.PI+1.3]}),o.cylinder(pe,Se,.36,g+.5,g+1,10,T.leather,te(M.leather),{arc:[Mt+Math.PI-1.15,Mt+Math.PI+1.15],inward:!0}),R(pe,g+.012,Se,.75,.24)}for(let le=0;le<6;le++){let[pe,Se]=B(we-.6-le*.95,ae+.36);P(pe,g+.013,Se,.11,T.warm,.7)}let Ne=N.installation,[Ir,Nr]=hs[_.mood];cr(a,_.installation,{at:Ne.at,bottom:g+Ne.bottom,top:g+Ne.top,along:Ne.along,inward:Ne.inward,span:Ne.span,depth:Ne.depth,ceiling:F},{body:Ir,material:Z(Nr),glow:x,seed:ms(w.node),light:se}),P(Ne.at[0]+Q[0]*.8,g,Ne.at[1]+Q[1]*.8,2.4,x,D?.12:.04)},X={graphite:[T.graphite,M.graphiteFloor],pale:[T.stoneFloor,M.stoneFloor],terrazzo:[T.terrazzo,M.terrazzoFloor]};for(let w of e){let v=w.y,g=w.index,_=ps(n.levelColor(w.tier)),N=new Set(w.stores.map(x=>x.bay.id)),Y=a.vertexCount,B=o.vertexCount;for(let x of w.bays){let A=w.stores.find(L=>L.bay.id===x.id),O=A?t(A.node):x.use==="vacant"?fs:null,[F,D]=O?X[O.floor]:x.use==="lobby"?[T.lobbyFloor,M.stoneFloor]:[T.stoneFloor,M.stoneFloor];o.prism(x.poly,v-ne,v,F,O?{...D,ao:Ft[O.mood]}:D,{bottom:!1}),K(x,O,v+I)}let Q=[[[-G,G],[G,G],[V,V],[-V,V]],[[G,G],[G,-G],[V,-V],[V,V]],[[G,-G],[-G,-G],[-V,-V],[V,-V]],[[-G,-G],[-G,G],[-V,V],[-V,-V]]];for(let x of Q)if(g===0)o.prism(x,v-ne,v,T.stoneFloor,M.stoneFloor,{bottom:!1});else{let A=x.reduce((F,D)=>F+D[0],0)/4,O=x.reduce((F,D)=>F+D[1],0)/4;b([A,v,O],()=>{let F=se=>[se[0],v-.02,se[1]],[D,L,H,$]=x;D&&L&&H&&$&&s.quad(F(D),F(L),F(H),F($),T.glassFloor,y(.5),[0,1,0])})}for(let[x,A]of ys(G))o.wall(x,A,v-ne-.05,v+.02,.18,T.band,M.band),g>0&&o.wall(fr(x,A,.12),fr(A,x,.12),v-ne-.09,v-ne-.05,.05,T.panel,M.line);o.box([-rt,v-.3,Et-.15],[rt,v,G+.05],T.stoneFloor,M.stoneFloor);for(let x of[-1,1])for(let A of[-1,1])o.wall([x*V,A*V],[x*z,A*z],v,v+I,.3,T.travertine,M.stoneWall);o.wall([V,0],[z,0],v,v+I,.3,T.travertine,M.stoneWall),o.wall([0,-V],[0,-z],v,v+I,.3,T.travertine,M.stoneWall),o.wall([-V,0],[-z,0],v,v+I,.3,T.travertine,M.stoneWall);for(let[x,A,O]of $t()){for(let H=0;H<4;H++){let $=H/4,se=(H+1)/4,Z=[x[0]+(A[0]-x[0])*$,x[1]+(A[1]-x[1])*$],te=[x[0]+(A[0]-x[0])*se,x[1]+(A[1]-x[1])*se],ae=[];if(g===0&&O[1]===1){let ie=Math.min(Z[0],te[0]),we=Math.max(Z[0],te[0]);we<=-Fe||ie>=Fe?ae.push([Z,te]):(ie<-Fe&&ae.push([[ie,z],[-Fe,z]]),we>Fe&&ae.push([[Fe,z],[we,z]]))}else ae.push([Z,te]);for(let[ie,we]of ae)b([(ie[0]+we[0])/2,v+I/2,(ie[1]+we[1])/2],()=>s.pane(ie,we,v,v+I,T.facadeGlass,y(.34,.32)))}let F=[x[0]+O[0]*.31,x[1]+O[1]*.31],D=[A[0]+O[0]*.31,A[1]+O[1]*.31],L=(H,$,se)=>{let Z=Math.hypot($[0]-H[0],$[1]-H[1]);return[H[0]-($[0]-H[0])/Z*se,H[1]-($[1]-H[1])/Z*se]};if(g>0){o.wall(L(F,D,.31),L(D,F,.31),v-ne-.18,v+.14,.62,T.band,M.band);let H=[x[0]+O[0]*.625,x[1]+O[1]*.625],$=[A[0]+O[0]*.625,A[1]+O[1]*.625];o.wall(H,$,v-ne-.17,v-ne-.13,.01,_,M.line)}}h.push({key:`levelno:${g}`,rect:ue([-13.5,z+.64],v+3.1,Math.PI,7.2,1.8,0)});for(let[x,A]of gs())b([(x[0]+A[0])/2,v+.55,(x[1]+A[1])/2],()=>s.pane(x,A,v,v+1.1,T.glass,y(.1))),o.wall(x,A,v+1.06,v+1.12,.07,T.steel,M.titanium);let S=Math.asin(rt/be)+.05;b([0,v+ge/2,0],()=>{s.cylinder(0,0,be,v,v+2.7,26,T.glass,y(.08),{arc:[S,Math.PI*2-S]}),s.cylinder(0,0,be,v+2.7,v+ge,30,T.glass,y(.08),{caps:!1})}),o.cylinder(0,0,be+.06,v-ne,v+.03,28,T.steel,M.steel,{caps:!1}),o.cylinder(0,0,be+.06,v+2.7,v+2.84,28,T.steel,M.steel,{caps:!1}),h.push({key:`level:${g}`,rect:ue([0,(G+V)/2],v+4.82,0,4.2,.86,.075)}),h.push({key:`level:${g}`,rect:ue([0,(G+V)/2],v+4.82,Math.PI,4.2,.86,.075)}),o.box([-2.16,v+4.36,(G+V)/2-.06],[2.16,v+5.28,(G+V)/2+.06],T.blackGlass,M.blackGlass);for(let x of[-1.7,1.7])o.box([x-.02,v+5.26,7.98],[x+.02,v+I,8.02],T.steel,M.steel);{let x=ue(Ce,v+1.95,$o,2.9,2.2,.17),A=[Ce[0]-x.u[0]*1.7,Ce[1]-x.u[2]*1.7],O=[Ce[0]+x.u[0]*1.7,Ce[1]+x.u[2]*1.7];o.wall(A,O,v,v+3.4,.3,T.travertine,M.stoneWall),o.wall([A[0]+x.u[0]*.05,A[1]+x.u[2]*.05],[O[0]-x.u[0]*.05,O[1]-x.u[2]*.05],v+3.33,v+3.37,.31,_,M.line),d.push({kind:"directory",level:g,rect:x}),R(Ce[0],v,Ce[1],2.4,.14);for(let F of[-1,1])o.box([F*3.6-.05,v,16.2],[F*6.4+.05,v+.44,17],T.travertine,M.band),o.box([F*3.6,v+.44,16.25],[F*6.4,v+.47,16.95],T.graphite,M.graphite),R(F*5,v,16.6,2,.12)}for(let x of w.stores){let A=x.bay.inward,O=Me(-A[0],-A[1]),[F,D]=x.bay.front,L=x.bay.along,H=[x.door[0]-L[0]*st,x.door[1]-L[1]*st],$=[x.door[0]+L[0]*st,x.door[1]+L[1]*st];b([(F[0]+H[0])/2,v+2,(F[1]+H[1])/2],()=>s.pane(F,H,v,v+4,T.glass,y(.07))),b([($[0]+D[0])/2,v+2,($[1]+D[1])/2],()=>s.pane($,D,v,v+4,T.glass,y(.07))),o.wall(F,D,v+4,v+I,.36,T.travertine,M.stoneWall);let se=(k,Ae)=>[k[0]-L[0]*Ae,k[1]-L[1]*Ae];for(let[k,Ae]of[[H,1],[$,-1]]){let Ie=se(k,-Ae*.12);o.box([Math.min(k[0],Ie[0])-Math.abs(A[0])*.22,v,Math.min(k[1],Ie[1])-Math.abs(A[1])*.22],[Math.max(k[0],Ie[0])+Math.abs(A[0])*.22,v+4.06,Math.max(k[1],Ie[1])+Math.abs(A[1])*.22],T.steel,M.steel)}o.wall(se(H,.12),se($,-.12),v+3.98,v+4.1,.44,T.steel,M.steel);for(let k of[F,D])o.box([k[0]-.05,v,k[1]-.05],[k[0]+.05,v+4,k[1]+.05],T.titanium,M.titanium);let Z=k=>[k[0]-A[0]*.19,k[1]-A[1]*.19];o.wall(Z(F),Z(D),v+4.32,v+4.35,.02,_,M.line),h.push({key:`store:${x.node}`,rect:ue(x.door,v+4.85,O,5.6,.95,.2)});let te=k=>[k[0]+A[0]*.06,k[1]+A[1]*.06],ae=te([(F[0]+H[0])/2,(F[1]+H[1])/2]),ie=te([($[0]+D[0])/2,($[1]+D[1])/2]);f.push({key:`banner:${x.node}`,node:x.node,level:g,rect:ue(ae,v+2.05,O,2.2,3.1,0)}),d.push({kind:"window",node:x.node,level:g,rect:ue(ie,v+2.25,O,2.4,1.8,0)});let we=Oe(x.bay.id,V-.78,9.25),Xe=Oe(x.bay.id,V,9.25),ot=Oe(x.bay.id,V-1.45,9.25);o.wall(Xe,ot,v+3.84,v+3.89,.04,T.steel,M.steel),h.push({key:`blade:${x.node}`,rect:ue(we,v+3.45,Me(L[0],L[1]),1.3,.62,.02)}),h.push({key:`blade:${x.node}`,rect:ue(we,v+3.45,Me(-L[0],-L[1]),1.3,.62,.02)}),C(x,g,v),f.push({key:`medallion:${x.node}`,node:x.node,level:g,rect:lo(x.medallion,v+.016,Me(A[0],A[1]),2.3,2.3)});for(let k of n.stationsOf(x.node)){let Ae=x.stations[k],Ie=[Ae.p[0]+Math.sin(Ae.heading)*.95,Ae.p[1]-Math.cos(Ae.heading)*.95];h.push({key:`station:${k}`,rect:lo(Ie,v+.018,Ae.heading,1.3,.46)})}}for(let x of w.lounges)vs(o,x,v,p,m);for(let x of w.vacant){let A=x.inward,[O,F]=x.front;b([(O[0]+F[0])/2,v+2,(O[1]+F[1])/2],()=>s.pane(O,F,v,v+4,T.frosted,y(.62,.05))),o.wall(O,F,v+4,v+I,.36,T.travertine,M.stoneWall);for(let H of[O,F])o.box([H[0]-.05,v,H[1]-.05],[H[0]+.05,v+4,H[1]+.05],T.titanium,M.titanium);let D=H=>[H[0]-A[0]*.19,H[1]-A[1]*.19];o.wall(D(O),D(F),v+4.32,v+4.35,.02,_,M.line);let L=[(O[0]+F[0])/2,(O[1]+F[1])/2];h.push({key:`vacant:${g}:${x.id}`,rect:ue(L,v+4.85,Me(-A[0],-A[1]),5.6,.95,.2)})}i.push({first:Y,count:a.vertexCount-Y}),u.push({first:B,count:o.vertexCount-B})}for(let w of[e[e.length-1]])if(w){for(let v of w.bays)o.prism(v.poly,r-ne,r,T.band,M.band,{bottom:!1});for(let v of[[[-G,G],[G,G],[V,V],[-V,V]],[[G,G],[G,-G],[V,-V],[V,V]],[[G,-G],[-G,-G],[-V,-V],[V,-V]],[[-G,-G],[-G,G],[-V,V],[-V,-V]]])o.prism(v,r-ne,r,T.band,M.band,{bottom:!1}),o.prism(v,r-ne,r-ne,T.plaster,M.plaster,{top:!1,sides:!1})}b([0,r,0],()=>s.quad([-G,r,-G],[G,r,-G],[G,r,G],[-G,r,G],T.facadeGlass,y(.2,.08),[0,1,0]));for(let[w,v,g]of $t()){let _=[w[0]+g[0]*.31,w[1]+g[1]*.31],N=[v[0]+g[0]*.31,v[1]+g[1]*.31],Y=Math.hypot(N[0]-_[0],N[1]-_[1]),B=(N[0]-_[0])/Y,Q=(N[1]-_[1])/Y;o.wall([_[0]-B*.31,_[1]-Q*.31],[N[0]+B*.31,N[1]+Q*.31],r-ne-.18,r+1.1,.62,T.band,M.band);let S=[w[0]+g[0]*.625,w[1]+g[1]*.625],x=[v[0]+g[0]*.625,v[1]+g[1]*.625];o.wall(S,x,r-ne-.17,r-ne-.13,.01,T.panel,M.line);let A=D=>[D[0]-g[0]*1.2,D[1]-g[1]*1.2];o.wall(A(w),A(v),r,r+hr,.4,T.band,M.band);let O=[(A(w)[0]+A(v)[0])/2,(A(w)[1]+A(v)[1])/2];h.push({key:"crown",rect:ue(O,r+hr/2+.1,Me(g[0],g[1]),22,1.75,.21)});let F=D=>[D[0]+g[0]*.205,D[1]+g[1]*.205];o.wall(F(A(w)),F(A(v)),r+.22,r+.26,.01,T.runner,M.line)}b([0,r+2,0],()=>s.cylinder(0,0,be,r,r+3.4,30,T.glass,y(.1),{caps:!1})),o.cylinder(0,0,be+.08,r+3.4,r+3.62,36,T.steel,M.steel);{let v=r+1.1;for(let[g,_,N]of $t()){let Y=Math.hypot(_[0]-g[0],_[1]-g[1]),B=(_[0]-g[0])/Y,Q=(_[1]-g[1])/Y;for(let S=1;S<Math.round(Y/2.5);S++){let x=[g[0]+B*S*2.5,g[1]+Q*S*2.5],A=N[1]===1&&Math.abs(x[0])<=Fe+.7?4.32:-.02,O=[x[0]+N[0]*.02,x[1]+N[1]*.02],F=[x[0]+N[0]*.62,x[1]+N[1]*.62];o.wall(O,F,A,v,.14,T.fin,M.titanium)}}for(let g of[-1,1])for(let _ of[-1,1])o.box([g*z-.45+g*.17,-.02,_*z-.45+_*.17],[g*z+.45+g*.17,v+.02,_*z+.45+_*.17],T.band,M.band);for(let[g,_,N]of $t()){let Y=[g[0]+N[0]*.31,g[1]+N[1]*.31],B=[_[0]+N[0]*.31,_[1]+N[1]*.31];N[1]===1?(o.wall(Y,[-Fe-.7,Y[1]],-.02,.32,.62,T.graphite,M.graphite),o.wall([Fe+.7,B[1]],B,-.02,.32,.62,T.graphite,M.graphite)):o.wall(Y,B,-.02,.32,.62,T.graphite,M.graphite)}}{o.box([-4.4,4.06,z+.1],[4.4,4.32,z+3.6],T.steel,M.steel),o.quad([-4.2,4.055,z+3.4],[4.2,4.055,z+3.4],[4.2,4.055,z+.3],[-4.2,4.055,z+.3],T.panel,{gloss:.1,emit:.55},[0,-1,0]);for(let w of[-1,1])o.box([w*(Fe+.36)-.34,-.02,z-.1],[w*(Fe+.36)+.34,4.06,z+.75],T.band,M.band);h.push({key:"entrance",rect:ue([0,z+.12],4.95,Math.PI,7.6,1.3,.05)}),R(0,0,z+2.2,4.2,.1)}o.annulus(0,0,.01,54,-.02,120,T.paving,M.paving);for(let w of[29,38,47])o.annulus(0,0,w-.3,w+.3,-.015,160,T.graphite,M.graphite);o.cylinder(0,0,55,-.5,.04,120,T.graphite,M.graphite,{caps:!1}),o.annulus(0,0,54,55,.04,120,T.graphite,M.graphite),o.cylinder(0,0,54,-.5,.04,120,T.graphite,M.graphite,{caps:!1,inward:!0}),o.annulus(0,0,55,96,-.12,160,T.water,M.water),o.cylinder(0,0,96,-.12,-.02,160,T.graphite,M.graphite,{caps:!1,inward:!0}),o.annulus(0,0,96,97.2,-.02,160,T.graphite,M.graphite),o.annulus(0,0,97.2,2400,-.04,160,T.plateau,M.plateau);for(let w of[-1,1]){let v=w*9.5,g=z+12;o.cylinder(v,g,2.7,-.02,.32,56,T.steel,M.steel),o.annulus(v,g,2.45,2.7,.32,64,T.steel,M.steel),o.annulus(v,g,.01,2.45,.3,56,T.soil,M.matte),o.annulus(v,g,2.72,2.78,.004,64,T.panel,M.line),br(o,v,.3,g,1.45,w>0?.6:2.4)}o.quad([-.035,0,z+3.7],[.035,0,z+3.7],[.035,0,44],[-.035,0,44],T.runnerInlay,{gloss:.8},[0,1,0]);for(let w=0;w<260;w++){let v=p()*Math.PI*2,g=be+.5+p()*(G-be-.9);m.push(Math.sin(v)*g,p()*r,Math.cos(v)*g,.01+p()*.018,p(),r,.04+p()*.08)}let ee=new Ye;return ee.cylinder(0,0,be-.12,-.18,.01,40,T.graphite,M.graphiteFloor),ee.annulus(0,0,be-.32,be-.26,.015,48,T.panel,M.line),ee.cylinder(0,0,be-.12,2.58,2.66,40,T.steel,M.steel),ee.annulus(0,0,.3,.55,2.575,32,T.panel,M.panel),{...e.length!==Je?{interior:{half:z,ring:V,atrium:G,levels:e.length}}:{},roofY:r,opaque:o.toArray(),glass:s.toArray(),glassPieces:l,decals:new Float32Array(c),signs:h,screens:d,overlays:f,bubbles:new Float32Array(m),cab:ee.toArray(),detail:a.toArray(),detailLevels:i,opaqueLevels:u}}function br(n,e,t,r,o,s){let a=(c,h,d)=>[e+(c*Math.cos(s)-d*Math.sin(s))*o,t+h*o,r+(c*Math.sin(s)+d*Math.cos(s))*o],i=[a(0,0,0),a(.32,.68,.08),a(-.22,1.38,-.06),a(.18,2.03,.05),a(-.05,2.53,0)],u=[.21,.15,.11,.075,.045];for(let c=1;c<i.length;c++){let h=i[c-1],d=i[c];h&&d&&dr(n,h,d,(u[c-1]??.05)*o,(u[c]??.04)*o,10,T.bark,M.bark)}let l=[[a(.32,.68,.08),a(1.1,.98,.3),.85],[a(-.22,1.38,-.06),a(-1.05,1.58,-.35),.8],[a(.18,2.03,.05),a(.85,2.23,-.4),.7],[a(-.05,2.53,0),a(-.05,2.78,.05),.75],[a(-.22,1.38,-.06),a(-.2,1.58,.75),.6]];for(let[c,h,d]of l)dr(n,c,h,.05*o,.03*o,6,T.bark,M.bark),n.sphere(h,d*o,12,T.foliage,M.foliage,.32),n.sphere([h[0]+d*o*.3,h[1]+d*o*.16,h[2]-d*o*.2],d*o*.62,10,T.foliageLight,M.foliage,.36)}function vs(n,e,t,r,o){let[s,a]=Oe(e.id,15,6);n.cylinder(s,a,1.55,t,t+.5,40,T.graphiteDeep,M.graphite),n.annulus(s,a,1.42,1.55,t+.5,48,T.steel,M.steel),n.annulus(s,a,.01,1.42,t+.47,40,T.soil,M.matte),n.annulus(s,a,1.56,1.6,t+.006,48,T.panel,M.line),br(n,s,t+.47,a,1,r()*Math.PI*2);let[i,u]=Oe(e.id,13,11);n.cylinder(i,u,1.9,t,t+.34,40,T.graphiteDeep,M.graphite,{caps:!1}),n.annulus(i,u,1.78,1.9,t+.34,48,T.graphite,M.graphite),n.annulus(i,u,.01,1.78,t+.33,48,T.water,M.water);let l=Oe(e.id,17.2,2.5),c=Oe(e.id,17.2,6.5);n.box([Math.min(l[0],c[0])-.36,t,Math.min(l[1],c[1])-.36],[Math.max(l[0],c[0])+.36,t+.44,Math.max(l[1],c[1])+.36],T.travertine,M.band);for(let h=0;h<24;h++)o.push(s+(r()-.5)*5,t+r()*4,a+(r()-.5)*5,.008+r()*.012,r(),5.2,.03+r()*.05)}function $t(){let n=z;return[[[-n,n],[n,n],[0,1]],[[n,n],[n,-n],[1,0]],[[n,-n],[-n,-n],[0,-1]],[[-n,-n],[-n,n],[-1,0]]]}function ys(n){return[[[-n,n],[n,n]],[[n,n],[n,-n]],[[n,-n],[-n,-n]],[[-n,-n],[-n,n]]]}function fr(n,e,t){let r=Math.hypot(e[0]-n[0],e[1]-n[1]);return[n[0]+(e[0]-n[0])/r*t,n[1]+(e[1]-n[1])/r*t]}function gs(){let n=G,e=rt;return[[[-n,n],[-e,n]],[[e,n],[n,n]],[[n,n],[n,-n]],[[n,-n],[-n,-n]],[[-n,-n],[-n,n]],[[-e,Et],[-e,n]],[[e,Et],[e,n]]]}var xs=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),Ts=[.89,.137,.173],ws=[.55,.64,.73],Ms=[.77,.525,0];function oe(n,e,t,r,o=0){let s=d=>d.replace(`#version 300 es
`,`#version 300 es
#define Q ${o}
`),a=(d,f)=>{let m=n.createShader(d);if(!m)throw new Error(`${r}: cannot create shader`);if(n.shaderSource(m,s(f)),n.compileShader(m),!n.getShaderParameter(m,n.COMPILE_STATUS))throw new Error(`${r}: ${n.getShaderInfoLog(m)??"compile failed"}`);return m},i=n.createProgram();if(!i)throw new Error(`${r}: cannot create program`);let u=a(n.VERTEX_SHADER,e),l=a(n.FRAGMENT_SHADER,t);if(n.attachShader(i,u),n.attachShader(i,l),n.linkProgram(i),!n.getProgramParameter(i,n.LINK_STATUS))throw new Error(`${r}: ${n.getProgramInfoLog(i)??"link failed"}`);n.deleteShader(u),n.deleteShader(l);let c=new Map,h=n.getProgramParameter(i,n.ACTIVE_UNIFORMS);for(let d=0;d<h;d++){let f=n.getActiveUniform(i,d);f&&c.set(f.name,n.getUniformLocation(i,f.name))}return{p:i,u:c}}function Es(n,e){let t=r=>{let o=r*e;return Math.min(1,Math.max(0,o*(2.51*o+.03)/(o*(2.43*o+.59)+.14)))**.45454545454545453};return[t(n[0]),t(n[1]),t(n[2])]}var jt=class n{gl;tier;prog;post=null;vaos;counts={opaque:0,cab:0,decal:0,signs:0,bubbles:0,detail:0};overlayNormals;world;skyTex=null;skyLod=6;atlasTex=null;black;shadowTex=null;shadowMat=new Float32Array(16);shadowTexel=1/2048;shadowBias=2e-4;screenTex=new Map;ribbonCount=0;ribbonLength=0;ribbonBuf;flatBuf;signBuf;leaderBuf;reticleBuf;shell=null;beam=null;studyGpu=null;holoGpu=new Map;order;dist;scene=null;hdr=null;mirror=null;bloom=[];samples=4;mirrorVP=new Float32Array(16);mirrorInv=new Float32Array(16);reflect=new Float32Array(16);constructor(e,t,r){this.gl=e,this.world=t,this.tier=r,this.prog=this.programs(r==="cinematic"?1:0),r==="cinematic"&&(this.post=this.postPrograms());let o=i=>this.vao(i,[3,3,3,4]);this.counts.opaque=t.opaque.length/dt,this.counts.cab=t.cab.length/dt,this.counts.decal=t.decals.length/mr,this.counts.bubbles=t.bubbles.length/To,this.counts.detail=t.detail.length/dt;let s=new Float32Array(t.screens.length*30);t.screens.forEach((i,u)=>s.set(It(i.rect),u*30));let a=new Float32Array(t.overlays.length*30);t.overlays.forEach((i,u)=>a.set(It(i.rect),u*30)),this.signBuf=e.createBuffer(),this.ribbonBuf=e.createBuffer(),this.flatBuf=e.createBuffer(),this.leaderBuf=e.createBuffer(),this.reticleBuf=e.createBuffer(),this.vaos={opaque:o(t.opaque),glass:o(t.glass),cab:o(t.cab),detail:o(t.detail),decal:this.vao(t.decals,[3,2,4,1]),full:this.vao(new Float32Array([-1,-1,3,-1,-1,3]),[2]),signs:this.vaoFor(this.signBuf,[3,2]),screens:this.vao(s,[3,2]),overlays:this.vao(a,[3,2]),bubbles:this.bubbleVao(t.bubbles),ribbon:this.vaoFor(this.ribbonBuf,[3,2]),flat:this.vaoFor(this.flatBuf,[3]),leaders:this.vaoFor(this.leaderBuf,[3]),reticles:this.vaoFor(this.reticleBuf,[3,3])},this.overlayNormals=t.overlays.map(i=>$e(i.rect)),this.order=t.glassPieces.map((i,u)=>u),this.dist=new Float32Array(t.glassPieces.length),this.black=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),this.makeSky(),this.makeShadows()}programs(e){let t=this.gl;return{lit:oe(t,Gt,zt(xo,this.world.interior),"lit",e),litClip:e===1?oe(t,Gt,zt(An,this.world.interior),"lit (mirror)",e):null,glass:oe(t,Gt,zt(Sn,this.world.interior),"glass",e),sky:oe(t,Ue,Fn,"sky",e),tex:oe(t,Dn,On,"textured",e),decal:oe(t,In,Nn,"decal",e),mote:oe(t,Un,Cn,"motes",e),ribbon:oe(t,Bn,Hn,"ribbon",e),flat:oe(t,zn,Gn,"flat",e),shell:oe(t,pt,Wn,"hologram shell",e),organ:oe(t,pt,Yn,"hologram organs",e),line:oe(t,jn,Xn,"hologram lines",e),reticle:oe(t,kn,Kn,"hologram targets",e),beam:oe(t,pt,$n,"hologram beam",e),dim:oe(t,Ue,qn,"house lights",e),studyTable:oe(t,tr,or,"study table",e),studyBeam:oe(t,pt,nr,"study spotlight",e),studyHolo:oe(t,rr,sr,"study hologram",e),studyDim:oe(t,Ue,ar,"study lights",e),studyGlow:oe(t,ir,lr,"study claim",e)}}postPrograms(){let e=this.gl;return{pre:oe(e,Ue,Qn,"bloom"),down:oe(e,Ue,Zn,"bloom down"),up:oe(e,Ue,Jn,"bloom up"),composite:oe(e,Ue,er,"composite")}}setTier(e){if(e===this.tier||e==="cinematic")return;let t=this.gl,r=this.prog;this.prog=this.programs(0);for(let o of Object.values(r))o&&t.deleteProgram(o.p);if(this.post)for(let o of Object.values(this.post))t.deleteProgram(o.p);this.post=null,this.freeTargets(),this.tier="basic"}vao(e,t){let r=this.gl,o=r.createBuffer();return r.bindBuffer(r.ARRAY_BUFFER,o),r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW),this.vaoFor(o,t)}vaoFor(e,t){let r=this.gl,o=r.createVertexArray();r.bindVertexArray(o),r.bindBuffer(r.ARRAY_BUFFER,e);let s=t.reduce((i,u)=>i+u,0)*4,a=0;return t.forEach((i,u)=>{r.enableVertexAttribArray(u),r.vertexAttribPointer(u,i,r.FLOAT,!1,s,a),a+=i*4}),r.bindVertexArray(null),o}bubbleVao(e){let t=this.gl,r=t.createVertexArray();t.bindVertexArray(r);let o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0);let s=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,s),t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW);let a=To*4;return t.enableVertexAttribArray(1),t.vertexAttribPointer(1,3,t.FLOAT,!1,a,0),t.vertexAttribDivisor(1,1),t.enableVertexAttribArray(2),t.vertexAttribPointer(2,4,t.FLOAT,!1,a,12),t.vertexAttribDivisor(2,1),t.bindVertexArray(null),r}makeSky(){let e=this.gl,t=this.tier==="cinematic",r=2048,o=r/2,s=e.createTexture();e.bindTexture(e.TEXTURE_2D,s),t?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,r,o,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,r,o,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let a=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,s,0);let i=oe(e,Ue,_n,"skygen");e.viewport(0,0,r,o),e.disable(e.DEPTH_TEST),e.disable(e.BLEND),e.useProgram(i.p),e.uniform3f(i.u.get("uSun")??null,He[0],He[1],He[2]),e.bindVertexArray(this.vaos.full),e.drawArrays(e.TRIANGLES,0,3),e.bindVertexArray(null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(a),e.deleteProgram(i.p),e.bindTexture(e.TEXTURE_2D,s),e.generateMipmap(e.TEXTURE_2D),this.skyTex=s,this.skyLod=Math.log2(r)-3}makeShadows(){let e=this.gl,t=e.getParameter(e.MAX_TEXTURE_SIZE),r=this.tier==="cinematic"&&t>=4096?3072:2048,o=e.createTexture();e.bindTexture(e.TEXTURE_2D,o),e.texStorage2D(e.TEXTURE_2D,1,e.DEPTH_COMPONENT24,r,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_COMPARE_FUNC,e.LEQUAL);let s=e.createFramebuffer();if(e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0),e.drawBuffers([e.NONE]),e.readBuffer(e.NONE),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE){e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(s),e.deleteTexture(o);return}let a=new Float32Array(16),i=[0,18,0];Vt(a,[i[0]+He[0]*200,i[1]+He[1]*200,i[2]+He[2]*200],i);let u=1/0,l=-1/0,c=1/0,h=-1/0,d=1/0,f=-1/0;for(let b of[-82,82])for(let y of[-1.5,48])for(let E of[-82,82]){let R=(a[0]??0)*b+(a[4]??0)*y+(a[8]??0)*E+(a[12]??0),P=(a[1]??0)*b+(a[5]??0)*y+(a[9]??0)*E+(a[13]??0),U=(a[2]??0)*b+(a[6]??0)*y+(a[10]??0)*E+(a[14]??0);u=Math.min(u,R),l=Math.max(l,R),c=Math.min(c,P),h=Math.max(h,P),d=Math.min(d,U),f=Math.max(f,U)}let m=new Float32Array(16);mn(m,u,l,c,h,-f-5,-d+5),ht(this.shadowMat,m,a);let p=oe(e,Ln,Vn,"shadow");e.viewport(0,0,r,r),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.depthMask(!0),e.disable(e.BLEND),e.clear(e.DEPTH_BUFFER_BIT),e.useProgram(p.p),e.uniformMatrix4fv(p.u.get("uViewProj")??null,!1,this.shadowMat),e.bindVertexArray(this.vaos.opaque),e.enable(e.POLYGON_OFFSET_FILL),e.polygonOffset(1.5,3),e.drawArrays(e.TRIANGLES,0,this.counts.opaque),e.bindVertexArray(this.vaos.detail),e.drawArrays(e.TRIANGLES,0,this.counts.detail),e.disable(e.POLYGON_OFFSET_FILL),e.bindVertexArray(null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(s),e.deleteProgram(p.p),this.shadowTex=o,this.shadowTexel=1/r,this.shadowBias=.05/(f-d+10)}setAtlas(e){let t=this.gl,r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e.canvas),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.generateMipmap(t.TEXTURE_2D),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),this.atlasTex=r;let o=[];for(let s of this.world.signs){let a=e.rects.get(s.key);if(!a)continue;let i=It(s.rect);for(let u=0;u<6;u++){let l=u*5,c=i[l+3]??0,h=i[l+4]??0;o.push(i[l]??0,i[l+1]??0,i[l+2]??0,a.u0+(a.u1-a.u0)*c,a.v0+(a.v1-a.v0)*h)}}t.bindBuffer(t.ARRAY_BUFFER,this.signBuf),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.STATIC_DRAW),this.counts.signs=o.length/5}static screenKey(e){return e.kind==="directory"?`directory:${e.level}`:e.kind==="window"?`store:${e.node??""}`:`${e.kind}:${e.node??""}`}screenGrade(e){return this.screenTex.get(e)?.grade??0}setScreenImage(e,t,r,o,s=!1){let a=this.gl,i=this.screenTex.get(e);if(i&&i.grade>r)return;let u=i?.tex&&i.grade!==4?i.tex:a.createTexture();a.bindTexture(a.TEXTURE_2D,u),s&&a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,t),s&&a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o&&a.generateMipmap(a.TEXTURE_2D),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,o?a.LINEAR_MIPMAP_LINEAR:a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),this.screenTex.set(e,{tex:u,grade:r,lastUsed:performance.now()})}setScreenTexture(e,t,r=null){let o=this.screenTex.get(e)??null;return t?this.screenTex.set(e,{tex:t,grade:4,lastUsed:performance.now()}):r?this.screenTex.set(e,r):this.screenTex.delete(e),o}evict(e){for(let[t,r]of this.screenTex)r.grade!==3||e(t)||(this.gl.deleteTexture(r.tex),this.screenTex.delete(t));for(let[t,r]of this.holoGpu)e(`holo:${t}`)||(this.freeHolo(r),this.holoGpu.delete(t))}setRibbon(e){let t=this.gl;if(!e||e.length<2){this.ribbonCount=0;return}let r=.26,o=[],s=0;for(let a=1;a<e.length;a++){let i=e[a-1],u=e[a];if(!i||!u)continue;let l=u[0]-i[0],c=u[2]-i[2],h=Math.hypot(l,c);if(h<.001)continue;let d=-c/h*r,f=l/h*r,m=(p,b,y)=>o.push(p[0]+d*b,p[1]+.03,p[2]+f*b,y,b);m(i,-1,s),m(u,-1,s+h),m(u,1,s+h),m(i,-1,s),m(u,1,s+h),m(i,1,s),s+=h}t.bindBuffer(t.ARRAY_BUFFER,this.ribbonBuf),t.bufferData(t.ARRAY_BUFFER,new Float32Array(o),t.DYNAMIC_DRAW),this.ribbonCount=o.length/5,this.ribbonLength=s}draw(e,t,r){if(this.tier==="cinematic"){try{if(this.drawCinematic(e,t,r))return}catch(s){console.warn("XI Outlet: the cinematic renderer failed; using the basic one",s)}this.setTier("basic")}let o=this.gl;o.bindFramebuffer(o.FRAMEBUFFER,null),this.drawScene(e,{viewProj:e.viewProj,invViewProj:e.invViewProj,eye:e.eye,mirror:!1,clipY:0,w:t,h:r},!0)}drawCinematic(e,t,r){let o=this.gl;if(!this.ensureTargets(t,r))return!1;let s=this.scene,a=this.hdr,i=this.post;if(!s||!a||!i)return!1;if(e.mirrorY!==null&&this.mirror){let d=e.mirrorY,f=this.reflect;f.set([1,0,0,0,0,-1,0,0,0,0,1,0,0,2*d,0,1]),ht(this.mirrorVP,e.viewProj,f),Dt(this.mirrorInv,this.mirrorVP),o.bindFramebuffer(o.FRAMEBUFFER,this.mirror.fbo),this.drawScene(e,{viewProj:this.mirrorVP,invViewProj:this.mirrorInv,eye:[e.eye[0],2*d-e.eye[1],e.eye[2]],mirror:!0,clipY:d,w:this.mirror.w,h:this.mirror.h},!1)}o.bindFramebuffer(o.FRAMEBUFFER,s.fbo),this.drawScene(e,{viewProj:e.viewProj,invViewProj:e.invViewProj,eye:e.eye,mirror:!1,clipY:0,w:t,h:r},!1),o.bindFramebuffer(o.READ_FRAMEBUFFER,s.fbo),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,a.fbo),o.blitFramebuffer(0,0,t,r,0,0,t,r,o.COLOR_BUFFER_BIT,o.NEAREST),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.disable(o.DEPTH_TEST),o.disable(o.BLEND),o.depthMask(!1),o.bindVertexArray(this.vaos.full),o.activeTexture(o.TEXTURE0);let u=(d,f,m)=>{o.bindFramebuffer(o.FRAMEBUFFER,m.fbo),o.viewport(0,0,m.w,m.h),o.useProgram(d.p),o.bindTexture(o.TEXTURE_2D,f.tex),o.uniform1i(d.u.get("uTex")??null,0),o.uniform2f(d.u.get("uTexel")??null,1/f.w,1/f.h),o.drawArrays(o.TRIANGLES,0,3)},l=this.bloom,c=l[0];if(c){o.useProgram(i.pre.p),o.uniform1f(i.pre.u.get("uThreshold")??null,ye.bloomThreshold),u(i.pre,a,c);for(let d=1;d<l.length;d++){let f=l[d-1],m=l[d];f&&m&&u(i.down,f,m)}o.enable(o.BLEND),o.blendFunc(o.ONE,o.ONE);for(let d=l.length-1;d>0;d--){let f=l[d],m=l[d-1];f&&m&&u(i.up,f,m)}o.disable(o.BLEND)}o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,t,r);let h=i.composite;return o.useProgram(h.p),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,a.tex),o.uniform1i(h.u.get("uScene")??null,0),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,c?.tex??this.black),o.uniform1i(h.u.get("uBloom")??null,1),o.activeTexture(o.TEXTURE0),o.uniform1f(h.u.get("uBloomStrength")??null,c?ye.bloomStrength:0),o.uniform1f(h.u.get("uExposure")??null,e.exposure),o.uniform1f(h.u.get("uGrain")??null,ye.grain),o.uniform1f(h.u.get("uTime")??null,e.time),o.drawArrays(o.TRIANGLES,0,3),o.bindVertexArray(null),o.depthMask(!0),!0}ensureTargets(e,t){if(this.scene&&this.scene.w===e&&this.scene.h===t)return!0;this.freeTargets();let r=this.gl;if(!r.getExtension("EXT_color_buffer_float"))return!1;let o=r.getInternalformatParameter(r.RENDERBUFFER,r.RGBA16F,r.SAMPLES);this.samples=Math.min(4,o&&o.length>0?o[0]??0:0);let s=(l,c)=>{let h=r.createTexture();return r.bindTexture(r.TEXTURE_2D,h),r.texImage2D(r.TEXTURE_2D,0,r.RGBA16F,l,c,0,r.RGBA,r.HALF_FLOAT,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),h},a=()=>r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;{let l=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,l);let c=r.createRenderbuffer();r.bindRenderbuffer(r.RENDERBUFFER,c),this.samples>0?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,r.RGBA16F,e,t):r.renderbufferStorage(r.RENDERBUFFER,r.RGBA16F,e,t),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,c);let h=r.createRenderbuffer();r.bindRenderbuffer(r.RENDERBUFFER,h),this.samples>0?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,r.DEPTH_COMPONENT24,e,t):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT24,e,t),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,h);let d=[c,h].filter(f=>f!==null);if(this.scene={fbo:l,tex:null,rbs:d,w:e,h:t},!a())return this.failTargets()}{let l=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,l);let c=s(e,t);if(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,c,0),this.hdr={fbo:l,tex:c,rbs:[],w:e,h:t},!a())return this.failTargets()}{let l=Math.max(1,Math.round(e/2)),c=Math.max(1,Math.round(t/2)),h=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,h);let d=s(l,c);r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,d,0);let f=r.createRenderbuffer();if(r.bindRenderbuffer(r.RENDERBUFFER,f),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT24,l,c),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,f),this.mirror={fbo:h,tex:d,rbs:f?[f]:[],w:l,h:c},!a())return this.failTargets()}let i=e,u=t;for(let l=0;l<5;l++){i=Math.max(1,Math.round(i/2)),u=Math.max(1,Math.round(u/2));let c=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,c);let h=s(i,u);if(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,h,0),this.bloom.push({fbo:c,tex:h,rbs:[],w:i,h:u}),!a())return this.failTargets()}return r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindRenderbuffer(r.RENDERBUFFER,null),!0}failTargets(){return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.freeTargets(),!1}freeTargets(){let e=this.gl;for(let t of[this.scene,this.hdr,this.mirror,...this.bloom])if(t){e.deleteFramebuffer(t.fbo),e.deleteTexture(t.tex);for(let r of t.rbs)e.deleteRenderbuffer(r)}this.scene=null,this.hdr=null,this.mirror=null,this.bloom=[]}drawScene(e,t,r){let o=this.gl,s=this.prog;o.viewport(0,0,t.w,t.h),o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),o.enable(o.DEPTH_TEST),o.depthFunc(o.LEQUAL),o.disable(o.CULL_FACE),o.disable(o.BLEND),o.depthMask(!0);let a=!t.mirror&&!r&&e.mirrorY!==null&&this.mirror!==null,i=Es(ye.fog,e.exposure);o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,this.skyTex),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,this.shadowTex),o.activeTexture(o.TEXTURE3),o.bindTexture(o.TEXTURE_2D,a?this.mirror?.tex??this.black:this.black),o.activeTexture(o.TEXTURE0);let u=m=>{o.useProgram(m.p);let p=(P,U)=>{let I=m.u.get(P);I&&o.uniform1f(I,U)},b=(P,U)=>{let I=m.u.get(P);I&&o.uniform3f(I,U[0]??0,U[1]??0,U[2]??0)};o.uniformMatrix4fv(m.u.get("uViewProj")??null,!1,t.viewProj),b("uCamPos",t.eye),b("uSun",He),b("uSunColor",ye.sun),b("uSkyAmb",ye.sky),b("uGroundAmb",ye.ground),b("uInterior",ye.interior),p("uPanel",ye.panel),p("uEmitGain",ye.emit),b("uFog",ye.fog),b("uFogDisplay",i),p("uFogDensity",ye.fogDensity),p("uTime",e.time),p("uDirect",r?1:0),p("uExposure",e.exposure),p("uSkyLod",this.skyLod),p("uClip",t.mirror?1:0),p("uClipY",t.clipY),p("uMirrorOn",a?1:0),p("uMirrorY",e.mirrorY??-1e3);let y=m.u.get("uViewport");y&&o.uniform2f(y,t.w,t.h),p("uShadowOn",this.shadowTex?1:0),p("uShadowTexel",this.shadowTexel),p("uShadowBias",this.shadowBias);let E=m.u.get("uShadowMat");E&&o.uniformMatrix4fv(E,!1,this.shadowMat);let R=(P,U)=>{let I=m.u.get(P);I&&o.uniform1i(I,U)};R("uSky",1),R("uShadow",2),R("uMirror",3)},l=t.mirror?s.litClip??s.lit:s.lit;u(l),o.uniform3f(l.u.get("uOffset")??null,0,0,0),o.bindVertexArray(this.vaos.opaque);let c=e.level===null?void 0:this.world.opaqueLevels[e.level];if(c&&c.count>0){o.drawArrays(o.TRIANGLES,c.first,c.count),c.first>0&&o.drawArrays(o.TRIANGLES,0,c.first);let m=c.first+c.count;m<this.counts.opaque&&o.drawArrays(o.TRIANGLES,m,this.counts.opaque-m)}else o.drawArrays(o.TRIANGLES,0,this.counts.opaque);o.uniform3f(l.u.get("uOffset")??null,0,e.cabY,0),o.bindVertexArray(this.vaos.cab),o.drawArrays(o.TRIANGLES,0,this.counts.cab);let h=e.level===null?void 0:this.world.detailLevels[e.level];h&&h.count>0&&(o.uniform3f(l.u.get("uOffset")??null,0,0,0),o.bindVertexArray(this.vaos.detail),o.drawArrays(o.TRIANGLES,h.first,h.count)),u(s.tex),o.uniform1i(s.tex.u.get("uTex")??null,0),o.bindVertexArray(this.vaos.screens);let d=performance.now();this.world.screens.forEach((m,p)=>{let b=n.screenKey(m),y=this.screenTex.get(b);y&&(y.lastUsed=d);let E=m.kind==="store"||m.kind==="directory",R=m.kind==="board";o.uniform1i(s.tex.u.get("uMode")??null,E?1:2),o.uniform1f(s.tex.u.get("uHasTex")??null,y?.tex?1:0),o.uniform1f(s.tex.u.get("uFlip")??null,y?.grade===4?1:0);let P=R?[.97,.97,.96]:m.kind==="directory"?[.05,.06,.08]:[.03,.04,.05];o.uniform4f(s.tex.u.get("uPlaceholder")??null,P[0]??0,P[1]??0,P[2]??0,1),o.bindTexture(o.TEXTURE_2D,y?.tex??this.black),o.drawArrays(o.TRIANGLES,p*6,6)}),o.depthMask(!1),u(s.sky),o.uniformMatrix4fv(s.sky.u.get("uInvViewProj")??null,!1,t.invViewProj),o.bindVertexArray(this.vaos.full),o.drawArrays(o.TRIANGLES,0,3),o.enable(o.BLEND),o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),o.enable(o.POLYGON_OFFSET_FILL),o.polygonOffset(-1,-4),u(s.decal),o.bindVertexArray(this.vaos.decal),o.drawArrays(o.TRIANGLES,0,this.counts.decal),this.ribbonCount>0&&!t.mirror&&(u(s.ribbon),o.uniform1f(s.ribbon.u.get("uLength")??null,this.ribbonLength),o.bindVertexArray(this.vaos.ribbon),o.drawArrays(o.TRIANGLES,0,this.ribbonCount)),this.atlasTex&&this.counts.signs>0&&(u(s.tex),o.uniform1i(s.tex.u.get("uMode")??null,0),o.uniform1f(s.tex.u.get("uHasTex")??null,1),o.uniform1f(s.tex.u.get("uFlip")??null,0),o.bindTexture(o.TEXTURE_2D,this.atlasTex),o.bindVertexArray(this.vaos.signs),o.drawArrays(o.TRIANGLES,0,this.counts.signs));{let m=!1;this.world.overlays.forEach((p,b)=>{if(e.level===null||p.level!==e.level)return;let y=this.overlayNormals[b];if(y&&(t.eye[0]-p.rect.centre[0])*y[0]+(t.eye[1]-p.rect.centre[1])*y[1]+(t.eye[2]-p.rect.centre[2])*y[2]<0)return;let E=this.screenTex.get(p.key);E?.tex&&(m||(u(s.tex),o.uniform1i(s.tex.u.get("uMode")??null,0),o.uniform1f(s.tex.u.get("uHasTex")??null,1),o.uniform1f(s.tex.u.get("uFlip")??null,0),o.bindVertexArray(this.vaos.overlays),m=!0),E.lastUsed=d,o.bindTexture(o.TEXTURE_2D,E.tex),o.drawArrays(o.TRIANGLES,b*6,6))})}if(o.disable(o.POLYGON_OFFSET_FILL),!t.mirror)for(let m of e.holos)this.drawHolo(m,e,r);u(s.glass),o.uniform3f(s.glass.u.get("uOffset")??null,0,0,0),o.uniform1f(s.glass.u.get("uFade")??null,e.fade),o.bindVertexArray(this.vaos.glass);let f=this.world.glassPieces;for(let m=0;m<f.length;m++){let p=f[m]?.centre??[0,0,0];this.dist[m]=(p[0]-t.eye[0])**2+(p[1]-t.eye[1])**2+(p[2]-t.eye[2])**2}this.order.sort((m,p)=>(this.dist[p]??0)-(this.dist[m]??0));for(let m of this.order){let p=f[m];p&&o.drawArrays(o.TRIANGLES,p.first,p.count)}if(!t.mirror&&this.counts.bubbles>0&&(u(s.mote),o.uniform3f(s.mote.u.get("uRight")??null,e.right[0],e.right[1],e.right[2]),o.uniform3f(s.mote.u.get("uUp")??null,e.up[0],e.up[1],e.up[2]),o.bindVertexArray(this.vaos.bubbles),o.drawArraysInstanced(o.TRIANGLES,0,6,this.counts.bubbles)),!t.mirror&&e.dim>.001&&(o.disable(o.DEPTH_TEST),o.useProgram(s.dim.p),o.uniform1f(s.dim.u.get("uDim")??null,e.dim),o.bindVertexArray(this.vaos.full),o.drawArrays(o.TRIANGLES,0,3),o.enable(o.DEPTH_TEST)),!t.mirror&&e.study&&this.drawStudy(e.study,e,t,r),!t.mirror&&e.stages&&e.stages.length>0&&this.drawStages(e.stages,e,t,r),!t.mirror&&e.highlight){let{min:m,max:p,rgba:b}=e.highlight;u(s.flat),o.uniform4f(s.flat.u.get("uColor")??null,b[0]*b[3],b[1]*b[3],b[2]*b[3],b[3]),o.bindBuffer(o.ARRAY_BUFFER,this.flatBuf),o.bufferData(o.ARRAY_BUFFER,Rs(m,p),o.DYNAMIC_DRAW),o.bindVertexArray(this.vaos.flat),o.drawArrays(o.TRIANGLES,0,36)}o.bindVertexArray(null),o.depthMask(!0),o.disable(o.BLEND)}owned(e,t,r,o){let s=this.gl,a=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,a),s.bufferData(s.ARRAY_BUFFER,e,s.STATIC_DRAW);let i=this.vaoFor(a,t);return a&&o.push(a),i&&r.push(i),i}holoBuffers(e){let t=this.holoGpu.get(e.node);if(t)return t;let r=[],o=[],s=l=>({vao:l.length>0?this.owned(l,[3,3],r,o):null,count:l.length/Ct}),a=l=>({vao:l.length>0?this.owned(new Float32Array(l.flat()),[3],r,o):null,count:l.length}),i=new Map;for(let l of e.lines){let c=l.color.join(","),h=i.get(c)??{color:l.color,data:[]};i.set(c,h);for(let d=1;d<l.points.length;d++)h.data.push(...l.points[d-1]??[0,0,0],...l.points[d]??[0,0,0])}let u={vaos:r,bufs:o,lit:s(po(e.lit)),ghosts:s(po(e.ghosts)),lines:[...i.values()].map(l=>({vao:this.owned(new Float32Array(l.data),[3],r,o),count:l.data.length/3,color:l.color})),dots:a(e.dots),beads:a(e.beads),lastUsed:performance.now()};return this.holoGpu.set(e.node,u),u}freeHolo(e){for(let t of e.vaos)this.gl.deleteVertexArray(t);for(let t of e.bufs)this.gl.deleteBuffer(t)}drawHolo(e,t,r){let o=this.gl,s=this.prog,a=e.holo,i=this.holoBuffers(a);if(i.lastUsed=performance.now(),!this.shell){let m=gn();this.shell={vao:this.vao(m,[3,3]),count:m.length/Ct}}if(!this.beam){let m=xn();this.beam={vao:this.vao(m,[3,3]),count:m.length/Ct}}let u=a.tint,l=(m,p)=>{o.useProgram(m.p),o.uniformMatrix4fv(m.u.get("uViewProj")??null,!1,t.viewProj),o.uniformMatrix4fv(m.u.get("uModel")??null,!1,p);let b=m.u.get("uCamPos");b&&o.uniform3f(b,t.eye[0],t.eye[1],t.eye[2]);let y=m.u.get("uDirect");y&&o.uniform1f(y,r?1:0);let E=m.u.get("uExposure");E&&o.uniform1f(E,t.exposure)},c=m=>{this.beam&&(l(s.beam,e.model),o.uniform1f(s.beam.u.get("uTime")??null,t.time),o.uniform1f(s.beam.u.get("uSide")??null,m),o.bindVertexArray(this.beam.vao),o.drawArrays(o.TRIANGLES,0,this.beam.count))};c(-1),l(s.organ,e.model);let h=(m,p,b,y)=>{!m.vao||m.count===0||(o.uniform3f(s.organ.u.get("uColor")??null,p[0],p[1],p[2]),o.uniform1f(s.organ.u.get("uAlpha")??null,b),o.uniform1f(s.organ.u.get("uPulse")??null,y),o.bindVertexArray(m.vao),o.drawArrays(o.TRIANGLES,0,m.count))};h(i.ghosts,[.42,.5,.58],a.whole?.1:.14,0),h(i.lit,u,.86,e.pulse),l(s.line,e.model);let d=(m,p)=>o.uniform4f(s.line.u.get("uColor")??null,m[0]*p,m[1]*p,m[2]*p,p);o.uniform1f(s.line.u.get("uRound")??null,0);for(let m of i.lines)d(m.color,.92),o.bindVertexArray(m.vao),o.drawArrays(o.LINES,0,m.count);o.uniform1f(s.line.u.get("uRound")??null,1),i.dots.vao&&(d(u,.75),o.uniform1f(s.line.u.get("uPointSize")??null,.017*t.pxPerMetre),o.bindVertexArray(i.dots.vao),o.drawArrays(o.POINTS,0,i.dots.count)),i.beads.vao&&(d(Ms,.95),o.uniform1f(s.line.u.get("uPointSize")??null,.03*t.pxPerMetre),o.bindVertexArray(i.beads.vao),o.drawArrays(o.POINTS,0,i.beads.count)),l(s.line,xs),o.uniform1f(s.line.u.get("uRound")??null,0),o.bindVertexArray(this.vaos.leaders);for(let[m,p,b]of[[e.rings,ws,.5],[e.leaders,Ts,.9]])m.length!==0&&(d(p,b),o.bindBuffer(o.ARRAY_BUFFER,this.leaderBuf),o.bufferData(o.ARRAY_BUFFER,m,o.DYNAMIC_DRAW),o.drawArrays(o.LINES,0,m.length/3));let f=Math.floor(e.targets.length/4);if(f>0){let m=new Float32Array(f*36),p=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1];for(let b=0;b<f;b++){let y=e.targets[b*4]??0,E=e.targets[b*4+1]??0,R=e.targets[b*4+2]??0,P=e.targets[b*4+3]??0;for(let U=0;U<6;U++)m.set([y,E,R,p[U*2]??0,p[U*2+1]??0,P],(b*6+U)*6)}o.useProgram(s.reticle.p),o.uniformMatrix4fv(s.reticle.u.get("uViewProj")??null,!1,t.viewProj),o.uniform3f(s.reticle.u.get("uRight")??null,t.right[0],t.right[1],t.right[2]),o.uniform3f(s.reticle.u.get("uUp")??null,t.up[0],t.up[1],t.up[2]),o.uniform3f(s.reticle.u.get("uCamPos")??null,t.eye[0],t.eye[1],t.eye[2]),o.uniform1f(s.reticle.u.get("uTime")??null,t.time),o.uniform1f(s.reticle.u.get("uDirect")??null,r?1:0),o.uniform1f(s.reticle.u.get("uExposure")??null,t.exposure),o.bindBuffer(o.ARRAY_BUFFER,this.reticleBuf),o.bufferData(o.ARRAY_BUFFER,m,o.DYNAMIC_DRAW),o.bindVertexArray(this.vaos.reticles),o.drawArrays(o.TRIANGLES,0,f*6)}l(s.shell,e.model),o.uniform3f(s.shell.u.get("uTint")??null,u[0],u[1],u[2]),o.uniform1f(s.shell.u.get("uWhole")??null,a.whole||a.skin?1:0),o.uniform1f(s.shell.u.get("uTime")??null,t.time),o.uniform1f(s.shell.u.get("uScanY")??null,e.scanY),o.bindVertexArray(this.shell.vao),o.colorMask(!1,!1,!1,!1),o.depthMask(!0),o.drawArrays(o.TRIANGLES,0,this.shell.count),o.colorMask(!0,!0,!0,!0),o.depthMask(!1),o.drawArrays(o.TRIANGLES,0,this.shell.count),c(1)}drawStudy(e,t,r,o){let s=this.gl,a=this.prog;this.ensureStudyGpu();let i=this.studyGpu;if(!i)return;let u=d=>{s.useProgram(d.p);let f=(E,R)=>{let P=d.u.get(E);P&&s.uniform1f(P,R)},m=d.u.get("uViewProj");m&&s.uniformMatrix4fv(m,!1,r.viewProj);let p=d.u.get("uCamPos");p&&s.uniform3f(p,r.eye[0],r.eye[1],r.eye[2]),f("uDirect",o?1:0),f("uExposure",t.exposure),f("uTime",t.time);let b=d.u.get("uNeonA");b&&s.uniform3f(b,e.neonA[0],e.neonA[1],e.neonA[2]);let y=d.u.get("uNeonB");y&&s.uniform3f(y,e.neonB[0],e.neonB[1],e.neonB[2])};(e.lights>.001||e.deep>.001)&&(s.disable(s.DEPTH_TEST),s.useProgram(a.studyDim.p),s.uniform1f(a.studyDim.u.get("uStudy")??null,e.lights),["uSpotA","uSpotB","uSpotC"].forEach((d,f)=>{let m=e.spots[f]??[0,0,0,0];s.uniform4f(a.studyDim.u.get(d)??null,m[0],m[1],m[2],m[3])}),s.uniform3f(a.studyDim.u.get("uSpotW")??null,e.spotW[0],e.spotW[1],e.spotW[2]),s.uniform1f(a.studyDim.u.get("uDeep")??null,e.deep),s.bindVertexArray(this.vaos.full),s.drawArrays(s.TRIANGLES,0,3),s.enable(s.DEPTH_TEST));let l=e.pod,c=l?.kind==="table"?{vao:i.table,count:i.tableCount}:{vao:i.pod,count:i.podCount};l&&l.assemble>.001&&c.vao&&(s.disable(s.BLEND),s.depthMask(!0),u(a.studyTable),s.uniformMatrix4fv(a.studyTable.u.get("uModel")??null,!1,l.frame),s.uniform1f(a.studyTable.u.get("uAssemble")??null,l.assemble),s.uniform1f(a.studyTable.u.get("uPop")??null,l.pop),s.bindVertexArray(c.vao),s.drawArrays(s.TRIANGLES,0,c.count),s.enable(s.BLEND),s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA),s.depthMask(!1));let h=l?.kind==="table"?{vao:i.cone,count:i.coneCount}:{vao:i.column,count:i.columnCount};if(l&&l.beamLight>.001&&h.vao){u(a.studyBeam),s.uniformMatrix4fv(a.studyBeam.u.get("uModel")??null,!1,l.beam),s.uniform1f(a.studyBeam.u.get("uLight")??null,l.beamLight),s.uniform1f(a.studyBeam.u.get("uHeight")??null,l.beamHeight);let d=l.kind==="table"?[.86,.92,1]:[e.neonA[0]*.75+.25,e.neonA[1]*.75+.25,e.neonA[2]*.75+.25];s.uniform3f(a.studyBeam.u.get("uTint")??null,d[0],d[1],d[2]),s.uniform1f(a.studyBeam.u.get("uGain")??null,l.kind==="table"?1:3.2),s.bindVertexArray(h.vao),s.drawArrays(s.TRIANGLES,0,h.count)}if(e.claim){let d=e.claim;u(a.studyGlow),s.uniform3f(a.studyGlow.u.get("uCentre")??null,d.centre[0],d.centre[1],d.centre[2]),s.uniform3f(a.studyGlow.u.get("uU")??null,d.u[0],d.u[1],d.u[2]),s.uniform3f(a.studyGlow.u.get("uV")??null,d.v[0],d.v[1],d.v[2]),s.uniform2f(a.studyGlow.u.get("uHalf")??null,d.hu,d.hv),s.uniform1f(a.studyGlow.u.get("uOn")??null,e.lights),s.bindVertexArray(i.quad),s.drawArrays(s.TRIANGLES,0,6)}if(e.holo&&e.holo.reveal>.001){let d=e.holo;u(a.studyHolo),s.uniform3f(a.studyHolo.u.get("uCentre")??null,d.centre[0],d.centre[1],d.centre[2]),s.uniform3f(a.studyHolo.u.get("uRight")??null,d.right[0],d.right[1],d.right[2]),s.uniform3f(a.studyHolo.u.get("uUp")??null,d.up[0],d.up[1],d.up[2]),s.uniform1f(a.studyHolo.u.get("uHalf")??null,d.half),s.uniform1f(a.studyHolo.u.get("uReveal")??null,d.reveal),s.uniform1f(a.studyHolo.u.get("uFlash")??null,d.flash),s.uniform1f(a.studyHolo.u.get("uGlow")??null,d.glow),s.uniform1f(a.studyHolo.u.get("uScan")??null,d.scan),s.uniform1f(a.studyHolo.u.get("uMotion")??null,e.motion?1:0),s.uniform4f(a.studyHolo.u.get("uRect")??null,d.rect[0],d.rect[1],d.rect[2],d.rect[3]),s.uniform1i(a.studyHolo.u.get("uTex")??null,0),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,d.tex),s.bindVertexArray(i.quad),s.drawArrays(s.TRIANGLES,0,6)}}ensureStudyGpu(){if(!this.studyGpu){let e=tn(),t=on(),r=ro(.5,.08,St),o=ro(.06,.22,1);this.studyGpu={table:this.vao(e,[3,3,1,1]),tableCount:e.length/8,pod:this.vao(t,[3,3,1,1]),podCount:t.length/8,cone:this.vao(r,[3,3]),coneCount:r.length/6,column:this.vao(o,[3,3]),columnCount:o.length/6,quad:this.vao(new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),[2])}}}drawStages(e,t,r,o){let s=this.gl,a=this.prog;this.ensureStudyGpu();let i=this.studyGpu;if(!i)return;let u=(l,c)=>{s.useProgram(l.p);let h=(b,y)=>{let E=l.u.get(b);E&&s.uniform1f(E,y)},d=l.u.get("uViewProj");d&&s.uniformMatrix4fv(d,!1,r.viewProj);let f=l.u.get("uCamPos");f&&s.uniform3f(f,r.eye[0],r.eye[1],r.eye[2]),h("uDirect",o?1:0),h("uExposure",t.exposure),h("uTime",t.time);let m=l.u.get("uNeonA");m&&s.uniform3f(m,c.neonA[0],c.neonA[1],c.neonA[2]);let p=l.u.get("uNeonB");p&&s.uniform3f(p,c.neonB[0],c.neonB[1],c.neonB[2])};s.enable(s.BLEND),s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA),s.depthMask(!1);for(let l of e){l.beamLight>.001&&i.column&&(u(a.studyBeam,l),s.uniformMatrix4fv(a.studyBeam.u.get("uModel")??null,!1,l.beam),s.uniform1f(a.studyBeam.u.get("uLight")??null,l.beamLight),s.uniform1f(a.studyBeam.u.get("uHeight")??null,1),s.uniform3f(a.studyBeam.u.get("uTint")??null,l.neonA[0]*.75+.25,l.neonA[1]*.75+.25,l.neonA[2]*.75+.25),s.uniform1f(a.studyBeam.u.get("uGain")??null,3.2),s.bindVertexArray(i.column),s.drawArrays(s.TRIANGLES,0,i.columnCount));let c=l.holo;c.reveal<=.001||(u(a.studyHolo,l),s.uniform3f(a.studyHolo.u.get("uCentre")??null,c.centre[0],c.centre[1],c.centre[2]),s.uniform3f(a.studyHolo.u.get("uRight")??null,c.right[0],c.right[1],c.right[2]),s.uniform3f(a.studyHolo.u.get("uUp")??null,c.up[0],c.up[1],c.up[2]),s.uniform1f(a.studyHolo.u.get("uHalf")??null,c.half),s.uniform1f(a.studyHolo.u.get("uReveal")??null,c.reveal),s.uniform1f(a.studyHolo.u.get("uFlash")??null,c.flash),s.uniform1f(a.studyHolo.u.get("uGlow")??null,c.glow),s.uniform1f(a.studyHolo.u.get("uScan")??null,c.scan),s.uniform1f(a.studyHolo.u.get("uMotion")??null,l.motion?1:0),s.uniform4f(a.studyHolo.u.get("uRect")??null,c.rect[0],c.rect[1],c.rect[2],c.rect[3]),s.uniform1i(a.studyHolo.u.get("uTex")??null,0),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,c.tex),s.bindVertexArray(i.quad),s.drawArrays(s.TRIANGLES,0,6))}}dispose(){let e=this.gl;for(let t of this.holoGpu.values())this.freeHolo(t);this.holoGpu.clear();for(let t of Object.values(this.prog))t&&e.deleteProgram(t.p);if(this.post)for(let t of Object.values(this.post))e.deleteProgram(t.p);this.freeTargets();for(let t of this.screenTex.values())t.grade!==4&&e.deleteTexture(t.tex);e.deleteTexture(this.skyTex),e.deleteTexture(this.atlasTex),e.deleteTexture(this.shadowTex),e.deleteTexture(this.black)}};function Rs(n,e){let[t,r,o]=n,[s,a,i]=e,u=(l,c,h,d)=>[...l,...c,...h,...l,...h,...d];return new Float32Array([...u([t,r,i],[s,r,i],[s,a,i],[t,a,i]),...u([s,r,o],[t,r,o],[t,a,o],[s,a,o]),...u([s,r,i],[s,r,o],[s,a,o],[s,a,i]),...u([t,r,o],[t,r,i],[t,a,i],[t,a,o]),...u([t,a,i],[s,a,i],[s,a,o],[t,a,o]),...u([t,r,o],[s,r,o],[s,r,i],[t,r,i])])}var Ps=[0,23,0];function As(n){return[0,Math.round(23+(n-7)*ge*.55),0]}var vr={az:34*We,el:7*We,dist:160},tt=64*We,Mo=34*We,yr=[52,280],gr=[3*We,62*We],Ss=3.4,Fs=6.8,_s=1.9;function xr(n,e=Ps){let t=Math.cos(n.el),r=[e[0]+n.dist*t*Math.sin(n.az),e[1]+n.dist*Math.sin(n.el),e[2]+n.dist*t*Math.cos(n.az)],o=e[0]-r[0],s=e[1]-r[1],a=e[2]-r[2];return{eye:r,heading:Me(o,a),pitch:Math.atan2(s,Math.hypot(o,a)),fov:Mo,level:null}}function kt(n,e,t,r,o=he){return{eye:[e[0],de(n)+o,e[1]],heading:t,pitch:r,fov:tt,level:n}}function je(n){let e=Le(n,0,1);return e*e*(3-2*e)}function Xt(n,e,t,r){let o=Math.max(.001,ko(e)),s=Le(o/3,3.2,8),a=Math.max(.6,o/s),i=[0];for(let m=1;m<e.length;m++){let p=e[m-1],b=e[m];i.push((i[m-1]??0)+(p&&b?Math.hypot(b[0]-p[0],b[1]-p[1]):0))}let u=m=>{for(let p=1;p<e.length;p++){let b=i[p-1]??0,y=i[p]??0;if(m<=y||p===e.length-1){let E=e[p-1]??[0,0],R=e[p]??E,P=y>b?Le((m-b)/(y-b),0,1):1;return[_e(E[0],R[0],P),_e(E[1],R[1],P)]}}return e[e.length-1]??[0,0]},l=e[e.length-1]??[0,0],c=e[e.length-2]??l,h=Me(l[0]-c[0],l[1]-c[1]),d=m=>{let p=u(m),b=u(Math.min(o,m+2.4));return Math.hypot(b[0]-p[0],b[1]-p[1])<.05?h:Me(b[0]-p[0],b[1]-p[1])},f=de(n);return{duration:a,interruptible:!0,route:e.map(m=>[m[0],f,m[1]]),at(m){let p=ut(m),b=u(p*o),y=d(p*o);y=t.heading+lt(t.heading,y)*je(m/.28),r.heading!==null&&(y+=lt(y,r.heading)*je((m-.66)/.34));let E=_e(_e(t.eye??he,he,je(m/.25)),r.eye??he,je((m-.7)/.3));return kt(n,b,y,_e(t.pitch,r.pitch,p),E)}}}function Ls(n,e,t){let r=Le(.9*Math.abs(e-n)+.9,1.6,4.6),o=s=>_e(de(n),de(e),ut(s));return{duration:r,cab:o,at(s){let a=o(s),i=t+lt(t,Math.PI)*je(s*1.6);return{eye:[0,a+he,0],heading:i,pitch:0,fov:tt,level:Math.round(_e(n,e,ut(s)))}}}}function wo(n,e,t,r,o){let s=a=>{let i=1-a,u=i*i*i,l=3*i*i*a,c=3*i*a*a,h=a*a*a;return[0,1,2].map(d=>u*(n.eye[d]??0)+l*(t[d]??0)+c*(r[d]??0)+h*(e.eye[d]??0))};return{duration:o,at(a){let i=ut(a),u=je((a-.15)/.8);return{eye:s(i),heading:n.heading+lt(n.heading,e.heading)*u,pitch:_e(n.pitch,e.pitch,u),fov:_e(n.fov,e.fov,je((a-.3)/.7)),level:a>.7?e.level:n.level}}}}var Kt=class{layout;target;home;mode="exterior";orbit;level=0;pos=Rt;heading=0;pitch=0;eye=he;rising=!1;reducedMotion=!1;destination=null;vel=[0,0];legs=[];legT=0;finish=null;idleFor=0;stepBuffer=0;constructor(e=Xo){this.layout=e;let t=e.levels.length;this.target=As(t),this.home={...vr,dist:vr.dist*Math.max(1,t*ge/(7*ge))},this.orbit={...this.home}}camera(){let e=this.mode==="travel"?this.legs[0]:void 0;return e?e.at(Le(this.legT/e.duration,0,1)):this.mode==="exterior"?xr(this.orbit,this.target):kt(this.level,this.pos,this.heading,this.pitch,this.eye)}cabY(){let e=this.mode==="travel"?this.legs[0]:void 0;if(e?.cab)return e.cab(Le(this.legT/e.duration,0,1));let t=this.camera();return de(t.level??this.level)}routeAhead(){let e=this.mode==="travel"?this.legs[0]:void 0;if(!e?.route)return null;let t=this.camera(),r=e.route,o=0,s=1/0;for(let a=0;a<r.length-1;a++){let i=r[a];if(!i)continue;let u=Math.hypot(i[0]-t.eye[0],i[2]-t.eye[2]);u<s&&(s=u,o=a)}return[[t.eye[0],r[0]?.[1]??0,t.eye[2]],...r.slice(o+1)]}get travelling(){return this.mode==="travel"}goTo(e,t=this.reducedMotion){let r=this.plan(e);return r?(this.destination=e.kind==="store"||e.kind==="level"?e:null,this.vel=[0,0],t||r.legs.length===0?(this.legs=[],r.finish(),!0):(this.legs=r.legs,this.legT=0,this.finish=r.finish,this.mode="travel",!0)):!1}here(){let e=this.camera();return e.level===null?null:{level:e.level,p:[e.eye[0],e.eye[2]],heading:e.heading,pitch:e.pitch,eye:e.eye[1]-de(e.level)}}plan(e){let t=this.camera(),r=this.mode==="exterior"?null:this.here(),o=(h,d,f,m=0,p=he)=>()=>{this.mode="walk",this.level=h,this.pos=d,this.heading=f,this.pitch=m,this.eye=p,this.rising=!1};if(e.kind==="exterior"){let h=xr(this.orbit,this.target);return{legs:r?[wo(t,h,[t.eye[0]*1.3,t.eye[1]+10,t.eye[2]*1.3+24],[h.eye[0]*.75,h.eye[1]+12,h.eye[2]*.75],2.6)]:[],finish:()=>{this.mode="exterior",this.idleFor=0}}}let s,a;if(e.kind==="plaza")s=0,a={p:Rt,heading:0,pitch:.04,waypoint:"plaza"};else if(e.kind==="level")s=e.level,a=r&&r.level!==s?{p:[0,4],heading:Math.PI,pitch:.08,waypoint:"bridge"}:{p:at,heading:0,pitch:0,waypoint:"lobby"};else if(e.kind==="store"){let h=this.layout.storeOf(e.node);if(!h)return null;s=h.level;let d=e.station?h.stations[e.station]:null;a=d?{p:d.p,heading:d.heading,pitch:d.pitch,waypoint:`${e.station}:${h.node}`,eye:d.eye??he}:{p:h.view,heading:h.heading,pitch:.09,waypoint:`store:${h.node}`}}else s=e.level,a={p:e.p,heading:Number.NaN,pitch:0,waypoint:null};let i=h=>o(s,a.p,Number.isNaN(h)?r?.heading??0:h,a.pitch,a.eye??he);if(!r){if(e.kind==="plaza"){let p=kt(0,Rt,0,.04);return{legs:[wo(t,p,[t.eye[0]*.6,t.eye[1]*.55,t.eye[2]*.6+30],[0,10,62],3)],finish:i(0)}}let h=de(s),d=kt(s,at,0,0),f=[wo(t,d,[t.eye[0]*.55,h+he+14+t.eye[1]*.25,t.eye[2]*.5+42],[0,h+he+1.5,34],3.2)];if(a.waypoint!=="lobby"){let p=a.waypoint?this.layout.route(s,at,a.waypoint):this.layout.routeTo(s,at,a.p);p&&f.push(Xt(s,p,{heading:0,pitch:0},{heading:Number.isNaN(a.heading)?null:a.heading,pitch:a.pitch,eye:a.eye}))}let m=f[f.length-1];return{legs:f,finish:i(Number.isNaN(a.heading)?m?m.at(1).heading:0:a.heading)}}let u=[],l={heading:r.heading,pitch:r.pitch,eye:r.eye};if(r.level!==s){let h=this.layout.route(r.level,r.p,"lift");if(!h)return null;u.push(Xt(r.level,h,l,{heading:null,pitch:0}));let d=u[u.length-1]?.at(1).heading??0;u.push(Ls(r.level,s,d)),l={heading:Math.PI,pitch:0,eye:he};let m=this.layout.waypoint(s,"lift")?.p??[0,0],p=a.waypoint?this.layout.route(s,m,a.waypoint):this.layout.routeTo(s,m,a.p);p&&u.push(Xt(s,p,l,{heading:Number.isNaN(a.heading)?null:a.heading,pitch:a.pitch,eye:a.eye}))}else{let h=a.waypoint?this.layout.route(s,r.p,a.waypoint):this.layout.routeTo(s,r.p,a.p);if(!h)return null;u.push(Xt(s,h,l,{heading:Number.isNaN(a.heading)?null:a.heading,pitch:a.pitch,eye:a.eye}))}let c=u[u.length-1];return{legs:u,finish:i(Number.isNaN(a.heading)?c?c.at(1).heading:r.heading:a.heading)}}interrupt(){if(!this.legs[0]?.interruptible)return;let t=this.here();t&&(this.legs=[],this.finish=null,this.mode="walk",this.level=t.level,this.pos=this.layout.move(t.level,t.p,0,0),this.heading=t.heading,this.pitch=t.pitch,this.eye=t.eye)}update(e,t){let r=t.forward!==0||t.strafe!==0||t.turn!==0||t.lookX!==0||t.lookY!==0||t.zoom!==0;if(this.mode==="travel")if(r&&this.legs[0]?.interruptible)this.interrupt();else{this.legT+=e;let f=this.legs[0];for(;f&&this.legT>=f.duration;)this.legT-=f.duration,this.legs.shift(),f=this.legs[0];if(!f){let m=this.finish;this.finish=null,this.legT=0,m?.()}return!0}if(this.mode==="exterior"){let f=this.orbit,m=f.az-t.lookX*.0052-t.turn*e*.9,p=Le(f.el+t.lookY*.0042+t.forward*e*.5,gr[0],gr[1]),b=Le(f.dist*Math.exp(t.zoom*.0011-t.strafe*0),yr[0],yr[1]);this.idleFor=r?0:this.idleFor+e,!this.reducedMotion&&this.idleFor>5&&(m+=e*.035);let y=m!==f.az||p!==f.el||b!==f.dist;return this.orbit={az:m,el:p,dist:b},y}this.heading+=t.lookX*.0042+t.turn*_s*e,this.pitch=Le(this.pitch-t.lookY*.0036,-.95,.95),t.zoom!==0&&(this.stepBuffer=Le(this.stepBuffer-t.zoom*.01,-6,6));let o=this.stepBuffer*Math.min(1,e*6);if(this.stepBuffer-=o,(t.forward!==0||t.strafe!==0||Math.abs(this.stepBuffer)>.01)&&this.eye!==he&&(this.rising=!0),this.rising){let f=this.eye+(he-this.eye)*Math.min(1,e*5);this.eye=this.reducedMotion||Math.abs(he-f)<.01?he:f,this.eye===he&&(this.rising=!1)}let a=t.run?Fs:Ss,i=Math.sin(this.heading),u=-Math.cos(this.heading),l=[(i*t.forward-u*t.strafe)*a,(u*t.forward+i*t.strafe)*a],c=1-Math.exp(-e*10);this.vel=[_e(this.vel[0],l[0],c),_e(this.vel[1],l[1],c)];let h=this.vel[0]*e+i*o,d=this.vel[1]*e+u*o;return Math.abs(h)+Math.abs(d)>1e-6&&(this.pos=this.layout.move(this.level,this.pos,h,d)),r||Math.abs(this.vel[0])+Math.abs(this.vel[1])>.01||this.eye!==he&&this.rising}};function Vs(n,e,t,r){let o=(l,c,h)=>(c[0]-l[0])*(h[1]-l[1])-(c[1]-l[1])*(h[0]-l[0]),s=o(t,r,n),a=o(t,r,e),i=o(n,e,t),u=o(n,e,r);return(s>0&&a<0||s<0&&a>0)&&(i>0&&u<0||i<0&&u>0)}var Eo=.35,Ds=.33,Tr=1,Os=80*Math.PI/180,wr=17,Mr=2,ze=.18,Ro=1.2,qt={half:1.36,size:512},Er={w:768,h:432},Rr={w:320,h:180},Pr=3.2,Is=4,Ns=12,Ar={gallery:1,warm:1.04,chroma:1.16,noir:1.3,cinema:1.3},Us={store:"model",board:"body",theater:"theater",window:"front",print:"model",directory:null},Sr=class{canvas;host;opts;site;gl=null;renderer=null;world=null;live=null;studyHolo=null;daisHolo=null;filmHolo=null;filmLow=null;filmDrawn="";daisView=new Map;filmPrev=null;filmBuild=0;filmSince=0;studyOn=!0;studyT=0;studyAt=null;studyLine=null;studyMask=-1;studyFlash=0;studyPop=0;studyLive=!0;studyRise=1;galleryShift=0;studyPreshow=0;studyPreshowFor=null;studyShown=0;lessonRects=new Map;examplesRects=new Map;steleRects=new Map;modelScreens=new Map;rig;input=null;raf=0;lastFrame=0;lastRender=0;time=0;disposed=!1;failed=!1;visible=!0;dirty=!0;ready=!1;reduced;scale=.9;exposure=ye.exposure;ema=16;calm=0;slowSince=0;busyFrames=0;wasBusy=!1;proj=ct();view=ct();viewProj=ct();invViewProj=ct();pointer=null;pointerDirty=!1;hover=null;focus=null;focusAt=0;snapKey="";snapAt=0;highlightLevel=null;fronts;opaqueWalls;holoCache=new Map;boards=new Map;cinemaScreens=new Map;galleryAt=new Map;galleryShown=new Map;galleryLoading=new Set;prints=new Map;printCaptions=new Map;drawnHolos=[];theaterPlaying=!1;dim=0;theaterKey="";uploaded=!1;resizeObserver=null;livePrev=null;postersLoading=new Set;observer=null;onLost=e=>{e.preventDefault(),this.fail("lost")};fixedScale;fixedDpr;constructor(e,t,r){this.canvas=e,this.host=t,this.opts=r,this.site=r.site??Lt,this.rig=new Kt(this.site.layout);let o=globalThis.__OUTLET_SCALE__;this.fixedScale=typeof o=="number"&&o>0&&o<=1?o:null,this.fixedScale&&(this.scale=this.fixedScale);let s=globalThis.__OUTLET_DPR__;this.fixedDpr=typeof s=="number"&&s>=1&&s<=3?s:null,this.reduced=r.reducedMotion,this.rig.reducedMotion=r.reducedMotion,this.fronts=this.site.layout.stores.map(l=>({node:l.node,level:l.level,centre:[l.door[0],de(l.level)+2.8,l.door[1]],normal:[-l.bay.inward[0],0,-l.bay.inward[1]],u:[l.bay.along[0],0,l.bay.along[1]]}));let a=z,i=V;this.opaqueWalls=[...[-1,1].flatMap(l=>[-1,1].map(c=>({a:[l*i,c*i],b:[l*a,c*a]}))),{a:[i,0],b:[a,0]},{a:[0,-i],b:[0,-a]},{a:[-i,0],b:[-a,0]},...this.site.layout.stores.flatMap(l=>{let c=l.rooms,h=l.bay.inward,d=b=>[b[0]+h[0]*c.stele.thick,b[1]+h[1]*c.stele.thick],f=(b,y)=>[c.partition.door[0]+(b[0]-c.partition.door[0])*y,c.partition.door[1]+(b[1]-c.partition.door[1])*y],m=Math.hypot(c.partition.a[0]-c.partition.door[0],c.partition.a[1]-c.partition.door[1]),p=Math.hypot(c.partition.b[0]-c.partition.door[0],c.partition.b[1]-c.partition.door[1]);return[{a:c.stele.a,b:c.stele.b},{a:d(c.stele.a),b:d(c.stele.b)},{a:c.partition.a,b:f(c.partition.a,c.partition.doorHalf/m)},{a:f(c.partition.b,c.partition.doorHalf/p),b:c.partition.b}]})];let u=e.getContext("webgl2",{antialias:!0,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(!u){queueMicrotask(()=>this.fail("webgl"));return}this.gl=u,e.addEventListener("webglcontextlost",this.onLost);try{this.world=pr(this.site);for(let h of this.world.screens)h.kind==="board"&&h.node&&this.boards.set(h.node,h.rect),h.kind==="theater"&&h.node&&this.cinemaScreens.set(h.node,h.rect),h.kind==="print"&&h.node&&this.prints.set(h.node,h.rect),h.kind==="store"&&h.node&&this.modelScreens.set(h.node,h.rect);let l=Bs(u);this.renderer=new jt(u,this.world,l),t.dataset.quality=l,!this.fixedScale&&_r(u)&&(this.scale=.5),this.live=new Ht(u,this.site.holos),this.studyHolo=new it(u,r.base,()=>{this.uploaded=!0,this.dirty=!0},this.site.holos);let c=()=>{this.uploaded=!0,this.dirty=!0};this.site.dais==="hologram"&&(this.daisHolo=new it(u,r.base,c,this.site.holos,qt.size)),this.site.theater==="build"&&(this.filmHolo=new it(u,r.base,c,this.site.holos,Er.w,Er.h),this.filmLow=new it(u,r.base,c,this.site.holos,Rr.w,Rr.h));for(let h of this.world.overlays)h.node&&(h.key.startsWith("lesson:")?this.lessonRects.set(h.node,h.rect):h.key.startsWith("examples:")?this.examplesRects.set(h.node,h.rect):h.key.startsWith("stele:")?this.steleRects.set(h.node,h.rect):h.key.startsWith("caption:")&&this.printCaptions.set(h.node,h.rect))}catch(l){console.warn("XI Outlet could not start its renderer",l),queueMicrotask(()=>this.fail("compile"));return}this.rig.goTo(r.start,!0),this.input=new Bt(t,{click:(l,c)=>this.click(l,c),hover:(l,c)=>{this.pointer=l<0?null:[l,c],this.pointerDirty=!0},back:()=>this.back(),activate:()=>this.activate(),poke:()=>{this.dirty=!0},blocked:()=>document.querySelector("dialog[open]")!==null}),typeof IntersectionObserver<"u"&&(this.observer=new IntersectionObserver(l=>{for(let c of l)this.visible=c.isIntersecting;this.visible&&(this.dirty=!0)}),this.observer.observe(t)),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.dirty=!0}),this.resizeObserver.observe(t)),an().then(()=>{this.disposed||!this.renderer||(this.renderer.setAtlas(this.site.signs()),this.dirty=!0)}),this.raf=requestAnimationFrame(this.tick)}goTo(e,t=this.reduced){this.renderer&&(this.rig.goTo(e,t),this.dirty=!0)}activate(){let e=this.focus;e&&(e.kind==="store"&&e.part==="theater"&&this.seatedAt()===e.node?this.opts.onSelect?.(e):e.kind==="store"?this.goTo(Fr(e.node,e.part)):e.kind==="level"?this.goTo({kind:"level",level:e.level}):(e.kind==="lift"||e.kind==="directory")&&this.opts.onSelect?.(e))}back(){if(this.theaterPlaying){this.setTheaterPlaying(!1),this.opts.onTheaterExit?.();return}this.rig.mode!=="exterior"&&this.goTo({kind:"exterior"})}setTheaterPlaying(e){this.theaterPlaying!==e&&(this.theaterPlaying=e,this.dirty=!0)}seatedAt(){if(this.rig.mode!=="walk")return null;let e=this.rig.camera();if(e.level===null)return null;for(let t of this.site.layout.levels[e.level]?.stores??[]){let r=t.stations.theater;if(Math.hypot(r.p[0]-e.eye[0],r.p[1]-e.eye[2])<.9)return t.node}return null}setStudy(e){this.studyOn!==e&&(this.studyOn=e,this.dirty=!0)}setStudyLine(e){let t=this.studyLine;e?.node===t?.node&&e?.station===t?.station&&e?.line===t?.line&&e?.claim===t?.claim||(this.studyLine=e,e&&!this.reduced&&(this.studyPop=1),(e&&!this.reduced||e?.claim!==t?.claim||e?.node!==t?.node||e?.station!==t?.station)&&(this.dirty=!0))}setGallery(e,t){let r=this.site.gallery?.count(e)??0;if(r===0)return;let o=(Math.round(t)%r+r)%r;this.galleryAt.get(e)!==o&&(this.galleryAt.set(e,o),this.dirty=!0)}galleryInView(){if(this.rig.mode!=="walk"||this.rig.travelling)return!1;let e=this.rig.camera();if(e.level===null)return!1;let t=Pt(this.site.layout.levels[e.level],[e.eye[0],e.eye[2]]);if(t.kind!=="store"||!this.site.stationsOf(t.store.node).includes("gallery"))return!1;let r=t.store.stations.gallery;if(Math.hypot(r.p[0]-e.eye[0],r.p[1]-e.eye[2])>.9)return!1;let o=Math.atan2(Math.sin(e.heading-r.heading),Math.cos(e.heading-r.heading));return Math.abs(o)<.45}studyHere(){if(!this.studyOn||this.rig.mode!=="walk"||this.rig.travelling)return null;let e=this.rig.camera();if(e.level===null)return null;let t=null,r=.9;for(let o of this.site.layout.levels[e.level]?.stores??[])for(let s of this.site.stationsOf(o.node)){if(s==="theater"&&this.theaterPlaying)continue;let a=o.stations[s].p,i=Math.hypot(a[0]-e.eye[0],a[1]-e.eye[2]);i<r&&(r=i,t={s:o,station:s})}return t}setReducedMotion(e){this.reduced=e,this.rig.reducedMotion=e,this.dirty=!0}highlight(e){this.highlightLevel=e,this.dirty=!0}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.input?.dispose(),this.observer?.disconnect(),this.resizeObserver?.disconnect(),this.canvas.removeEventListener("webglcontextlost",this.onLost),this.live?.dispose(),this.studyHolo?.dispose(),this.daisHolo?.dispose(),this.filmHolo?.dispose(),this.filmLow?.dispose(),this.renderer?.dispose(),this.gl?.getExtension("WEBGL_lose_context")?.loseContext(),this.gl=null}fail(e){this.failed||this.disposed||(this.failed=!0,cancelAnimationFrame(this.raf),this.opts.onFail(e))}tick=e=>{if(this.disposed||this.failed)return;if(this.raf=requestAnimationFrame(this.tick),!this.visible||document.hidden){this.lastFrame=0;return}let t=this.lastFrame?Math.min(.5,(e-this.lastFrame)/1e3):1/60;this.lastFrame=e;let r=this.input?.consume();this.theaterPlaying&&r&&(r.forward!==0||r.strafe!==0||r.turn!==0||r.zoom!==0?(this.setTheaterPlaying(!1),this.opts.onTheaterExit?.()):r={...r,lookX:0,lookY:0});let o=r?this.rig.update(t,r):!1;this.reduced||(this.time+=t);let s=this.theaterPlaying?1:0,a=this.dim!==s;a&&(this.dim=this.reduced||Math.abs(s-this.dim)<.02?s:this.dim+(s-this.dim)*Math.min(1,t*5));let i=this.studyHere(),u=(P,U)=>P!==null&&U!==null&&P.s.node===U.s.node&&P.station===U.station;this.studyPreshowFor&&this.seatedAt()!==this.studyPreshowFor&&(this.studyPreshowFor=null),this.studyT===0&&!u(i,this.studyAt)&&(this.studyAt=i,this.studyMask=-1,this.studyPreshow=i?.station==="theater"&&this.studyPreshowFor!==i.s.node?Jo:0,i?.station==="theater"&&(this.studyPreshowFor=i.s.node),this.studyRise=i?.station==="theater"?0:1);let l=u(i,this.studyAt),c=l?1:0,h=this.studyT!==c;h&&(this.reduced?this.studyT=c:c>this.studyT?this.studyT=Math.min(1,this.studyT+t/qo):this.studyT=Math.max(0,this.studyT-t/Qo)),this.studyT===0&&!l&&(this.studyAt=null),this.studyFlash>0&&(this.studyFlash=Math.max(0,this.studyFlash-t*2.2)),this.studyPop>0&&(this.studyPop=this.reduced?0:Math.max(0,this.studyPop-t/Zo));let d=(this.studyFlash>0||this.studyPop>0)&&this.studyT>0,f=this.studyAt,m=f!==null&&this.studyLine?.node===f.s.node&&this.studyLine.station===f.station&&this.studyLine.claim!==null;f?.station==="theater"&&this.studyT>=1&&this.studyPreshow>0&&(this.studyPreshow=Math.max(0,this.studyPreshow-t));let p=f?.station!=="theater"||this.studyPreshow>0||m?1:0,b=this.studyRise!==p;b&&(this.studyRise=this.reduced?p:p>this.studyRise?Math.min(1,this.studyRise+t/.9):Math.max(0,this.studyRise-t/.7));let y=this.galleryInView()?Ds:0,E=this.galleryShift!==y;if(E){let P=Math.min(1,t*5);this.galleryShift=this.reduced||Math.abs(y-this.galleryShift)<.002?y:this.galleryShift+(y-this.galleryShift)*P}let R=o||this.rig.travelling||this.dirty||this.pointerDirty||a||h||d||b||E;if(!R&&(this.reduced||this.theaterPlaying||e-this.lastRender<33)){this.wasBusy=!1;return}this.render(e,R)};render(e,t){let r=this.gl,o=this.renderer;if(!r||!o)return;let s=this.lastRender?e-this.lastRender:16;this.lastRender=e;let a=this.uploaded;this.uploaded=!1,this.dirty=!1;let i=this.rig.camera(),u=this.fixedDpr??Math.min(window.devicePixelRatio||1,o.tier==="cinematic"?1.5:2),l=Math.max(1,this.canvas.clientWidth),c=Math.max(1,this.canvas.clientHeight),h=Math.max(1,Math.round(l*u*this.scale)),d=Math.max(1,Math.round(c*u*this.scale));(this.canvas.width!==h||this.canvas.height!==d)&&(this.canvas.width=h,this.canvas.height=d);let f=Math.min(1,Math.max(0,(i.fov-tt)/(Mo-tt))),m=l/c,p=i.fov+Math.max(0,Math.min(Os,2*Math.atan(1/m))-tt)*(1-f);fn(this.proj,p,m,i.level===null?.5:.08,3200),l>640&&(this.proj[8]=(this.proj[8]??0)-.16*f),l>=640&&this.galleryShift>0&&(this.proj[8]=(this.proj[8]??0)+this.galleryShift);let b=dn(i.heading,i.pitch);Vt(this.view,i.eye,io(i.eye,b)),ht(this.viewProj,this.proj,this.view),Dt(this.invViewProj,this.viewProj);let y=J(fe(b,[0,1,0])),E=fe(y,b);this.pointerDirty&&(this.pointerDirty=!1,this.hover=this.pointer?this.pickClient(this.pointer[0],this.pointer[1]):null,this.host.style.cursor=this.hover&&this.hover.kind!=="floor"?"pointer":""),e-this.focusAt>140&&(this.focusAt=e,this.focus=this.rig.mode==="exterior"?this.hover:this.pick(0,0),this.focus?.kind==="floor"&&(this.focus=null)),o.setRibbon(this.rig.routeAhead()),this.feedTextures(i.level,i.eye),this.updateLive(i.level,i.eye,b,s),this.updateFilm(s);let R=this.holoFrame(i.level,i.eye,b),P=this.daisFrame(i.level,i.eye,b,s);this.drawnHolos=[...R.map(C=>C.holo.node),...P.map(C=>C.node)];let I=this.rig.mode!=="exterior"&&Math.max(Math.abs(i.eye[0]),Math.abs(i.eye[2]))<z-.3&&i.eye[1]<(this.world?.roofY??0)?ye.exposureInside*this.roomGain(i.level,i.eye):ye.exposure;this.exposure=this.reduced?I:this.exposure+(I-this.exposure)*Math.min(1,s/1e3*3),Math.abs(I-this.exposure)<.01?this.exposure=I:this.dirty=!0;let K=this.rig.mode==="exterior"?this.highlightLevel??(this.hover?.kind==="level"?this.hover.level:null):null,re=K!==null?de(K):0;if(o.draw({viewProj:this.viewProj,invViewProj:this.invViewProj,eye:i.eye,right:y,up:E,time:this.time,cabY:this.rig.cabY(),fade:1,holos:R,stages:P.map(C=>C.draw),pxPerMetre:d/(2*Math.tan(p/2)),dim:this.dim,mirrorY:this.rig.mode==="exterior"||i.level===null||i.level===0?-.05:de(i.level),level:this.rig.mode==="exterior"?null:i.level,exposure:this.exposure,highlight:K!==null?{min:[-z-.45,re-ne-.05,-z-.45],max:[z+.45,re+ge-ne,z+.45],rgba:[.89,.14,.17,.16]}:null,study:this.studyFrame(i.eye)},h,d),t&&this.wasBusy&&!a&&this.adapt(s,e),this.wasBusy=t,this.ready||(this.ready=!0,this.host.dataset.state="live",this.opts.onReady()),this.emit(e,i.level,i.eye,i.heading),this.reportTheater(l,c),this.opts.onFrame){let C=Float32Array.from(this.viewProj);this.opts.onFrame({mode:this.rig.mode,level:i.level,x:i.eye[0],z:i.eye[2],eyeY:i.eye[1],heading:i.heading,pitch:i.pitch,width:l,height:c,project:(X,ee,w)=>{let v=(C[3]??0)*X+(C[7]??0)*ee+(C[11]??0)*w+(C[15]??0);if(v<.05)return null;let g=((C[0]??0)*X+(C[4]??0)*ee+(C[8]??0)*w+(C[12]??0))/v,_=((C[1]??0)*X+(C[5]??0)*ee+(C[9]??0)*w+(C[13]??0))/v;return[(g+1)/2*l,(1-_)/2*c,v]},blocked:(X,ee)=>{let w=[i.eye[0],i.eye[2]];return this.opaqueWalls.some(v=>Vs(w,[X,ee],v.a,v.b))},studyHolo:this.studyShown})}}reportTheater(e,t){let r=this.seatedAt(),o=r?this.cinemaScreens.get(r):void 0,s=null;if(r&&o){let i=(d,f)=>{let m=o.centre[0]+o.u[0]*o.hu*d+o.v[0]*o.hv*f,p=o.centre[1]+o.u[1]*o.hu*d+o.v[1]*o.hv*f,b=o.centre[2]+o.u[2]*o.hu*d+o.v[2]*o.hv*f,y=this.viewProj,E=(y[0]??0)*m+(y[4]??0)*p+(y[8]??0)*b+(y[12]??0),R=(y[1]??0)*m+(y[5]??0)*p+(y[9]??0)*b+(y[13]??0),P=(y[3]??0)*m+(y[7]??0)*p+(y[11]??0)*b+(y[15]??0);return P<.05?null:[(E/P+1)/2*e,(1-R/P)/2*t]},u=i(-1,1),l=i(1,1),c=i(1,-1),h=i(-1,-1);u&&l&&c&&h&&(s={node:r,corners:[u,l,c,h]})}let a=s?`${this.theaterPlaying?"playing":"seated"}:${s.node}:${s.corners.map(i=>`${i[0].toFixed(1)},${i[1].toFixed(1)}`).join(";")}`:"";a!==this.theaterKey&&(this.theaterKey=a,this.host.dataset.theater=s?this.theaterPlaying?"playing":"seated":"",this.opts.onTheaterScreen?.(s))}adapt(e,t){if(!(this.fixedScale||++this.busyFrames<5)){if(this.ema=this.ema*.85+e*.15,this.renderer?.tier==="cinematic"&&this.scale<=.6&&this.ema>40){this.renderer.setTier("basic"),this.host.dataset.quality="basic",this.scale=.85,this.ema=24,this.calm=0;return}this.ema>42&&this.scale>Eo?(this.scale=Math.max(Eo,this.scale*.88),this.calm=0):this.ema<22?++this.calm>50&&this.scale<Tr&&(this.scale=Math.min(Tr,this.scale*1.08),this.calm=0):this.calm=0,this.scale<=Eo&&this.ema>650?this.slowSince?t-this.slowSince>9e3&&this.fail("slow"):this.slowSince=t:this.slowSince=0}}roomGain(e,t){let r=e===null?void 0:this.site.layout.levels[e];if(!r)return 1;let o=Pt(r,[t[0],t[2]]);return o.kind!=="store"?1:Math.min(Math.abs(t[0]),Math.abs(t[2]))>V?Ar.cinema:Ar[this.site.exhibitOf(o.store.node).mood]}posterUrl(e,t){let r=this.site.poster(e,t);return r?`${this.opts.base}${r}`:null}feedTextures(e,t){let r=this.renderer;if(!r)return;for(let u of this.site.layout.stores){let l=e===u.level?640:320,c=l===640?2:1,h=`store:${u.node}`;if(r.screenGrade(h)>=c)continue;let d=`${h}@${l}`;if(this.postersLoading.has(d)||this.postersLoading.size>=4)continue;let f=this.posterUrl(u.node,l);f&&(this.postersLoading.add(d),_t(f).then(m=>{if(this.postersLoading.delete(d),!m||this.disposed||!this.renderer)return;this.renderer.setScreenImage(h,m,c,!0);let p=this.rig.camera().level;(p===null||p===u.level)&&(this.dirty=!0,this.uploaded=!0)}))}if(e===null)return;let o=this.site.layout.levels[e];if(!o)return;let s=`directory:${e}`;if(r.screenGrade(s)<3)r.setScreenImage(s,this.site.directory(e),3,!0),this.dirty=!0,this.uploaded=!0;else{let u=o.stores.slice().sort((l,c)=>Math.hypot(l.display[0]-t[0],l.display[1]-t[2])-Math.hypot(c.display[0]-t[0],c.display[1]-t[2]));e:for(let l of u){let c=this.nearStore(l,t);for(let[h,d,f,m]of this.storeCanvases(l))if(!(m&&!c)&&!(r.screenGrade(h)>=3)){r.setScreenImage(h,d(),3,!0,f),this.dirty=!0,this.uploaded=!0;break e}}}let a=this.site.gallery;for(let u of o.stores){if(!this.nearStore(u,t))continue;let l=`print:${u.node}`;if(a&&a.count(u.node)>0){let h=this.galleryAt.get(u.node)??0,d=`caption:${u.node}`;if(this.galleryShown.get(u.node)===h&&r.screenGrade(l)>=3&&r.screenGrade(d)>=3)continue;let f=`${l}#${h}`;if(this.galleryLoading.has(f)||this.galleryLoading.size>=2)continue;this.galleryLoading.add(f);let m=a.file(u.node,h);(this.opts.asset?this.opts.asset(m):Promise.resolve(`${this.opts.base}${m}`)).then(p=>_t(p)).then(p=>{if(this.galleryLoading.delete(f),!(!p||this.disposed||!this.renderer)){if((this.galleryAt.get(u.node)??0)!==h){this.dirty=!0;return}this.renderer.setScreenImage(l,a.print(u.node,h,p),3,!0),this.renderer.setScreenImage(d,a.caption(u.node,h),3,!0,!0),this.galleryShown.set(u.node,h),this.dirty=!0,this.uploaded=!0}});continue}if(r.screenGrade(l)>=3||this.postersLoading.has(l)||this.postersLoading.size>=4)continue;let c=this.posterUrl(u.node,640);c&&(this.postersLoading.add(l),_t(c).then(h=>{this.postersLoading.delete(l),!(!h||this.disposed||!this.renderer)&&(this.renderer.setScreenImage(l,h,3,!0),this.dirty=!0,this.uploaded=!0)}))}let i=new Set([s]);for(let u of o.stores){for(let[l]of this.storeCanvases(u))i.add(l);i.add(`print:${u.node}`),i.add(`caption:${u.node}`),i.add(`holo:${u.node}`)}r.evict(u=>i.has(u))}nearStore(e,t){return Math.hypot(e.door[0]-t[0],e.door[1]-t[2])<Ns}storeCanvases(e){return this.site.canvases(e,this.boardSide(e)>0)}boardSide(e){let t=this.boards.get(e.node);return t?(e.holo.at[0]-t.centre[0])*t.u[0]+(e.holo.at[1]-t.centre[2])*t.u[2]>=0?1:-1:1}studyFrame(e){let t=this.studyAt,r=this.studyT,o=this.studyHolo;if(this.studyShown=0,!t||r<=0||!o)return null;let{s,station:a}=t,i=S=>{let x=Math.min(1,Math.max(0,S));return x*x*(3-2*x)},u=ao(eo(this.site.levelColor(s.tier))),l=de(s.level),c=this.site.theater==="build"&&a==="theater"?null:en(s,a),h=this.studyLine?.node===s.node&&this.studyLine.station===a?this.studyLine:null,d=h?.claim??null,f=this.site.shot(s.node,a,h),m=c?f.parts:[],p=to(m);c&&p!==this.studyMask&&(this.studyMask>=0&&!this.reduced&&(this.studyFlash=1),this.studyMask=p);let b=h?this.studyPop:0,y=1-b,E=b>0?i(y/.12)*(1-i((y-.3)/.7)):0,R=this.viewProj,P=[0,0,0,0],U=S=>{let x=1/0,A=1/0,O=-1/0,F=-1/0;for(let D of S){let L=(R[3]??0)*D[0]+(R[7]??0)*D[1]+(R[11]??0)*D[2]+(R[15]??0);if(L<.05)continue;let H=((R[0]??0)*D[0]+(R[4]??0)*D[1]+(R[8]??0)*D[2]+(R[12]??0))/L,$=((R[1]??0)*D[0]+(R[5]??0)*D[1]+(R[9]??0)*D[2]+(R[13]??0))/L;x=Math.min(x,H),O=Math.max(O,H),A=Math.min(A,$),F=Math.max(F,$)}return O>x?[(x+O)/2,(A+F)/2,(O-x)/2,(F-A)/2]:P},I=S=>[[-1,-1],[1,-1],[1,1],[-1,1]].map(([x=0,A=0])=>[S.centre[0]+S.u[0]*S.hu*x+S.v[0]*S.hv*A,S.centre[1]+S.u[1]*S.hu*x+S.v[1]*S.hv*A,S.centre[2]+S.u[2]*S.hu*x+S.v[2]*S.hv*A]),K=S=>S?U(I(S)):P,re=(S,x,A,O)=>{let F=[];for(let[D,L]of[[-x,-x],[x,-x],[x,x],[-x,x]])F.push([S[0]+D,A,S[1]+L],[S[0]+D,O,S[1]+L]);return U(F)},C=a==="lesson"?this.lessonRects.get(s.node):a==="examples"?this.examplesRects.get(s.node):void 0,X=null,ee=C?this.site.claimOnWall(s.node,d,a):null;if(C&&ee){let S=$e(C),x=ee.u0+ee.u1-1,A=1-(ee.v0+ee.v1);X={centre:[C.centre[0]+C.u[0]*C.hu*x+C.v[0]*C.hv*A+S[0]*.01,C.centre[1]+C.v[1]*C.hv*A,C.centre[2]+C.u[2]*C.hu*x+C.v[2]*C.hv*A+S[2]*.01],u:C.u,v:C.v,hu:(ee.u1-ee.u0)*C.hu,hv:(ee.v1-ee.v0)*C.hv}}let w=P;if(c){let S=e[0]-c.at[0],x=e[2]-c.at[1],A=Math.hypot(S,x)||1,O=c.half*.62,F=[c.at[0],l+c.holoY,c.at[1]];w=U([-1,1].flatMap(D=>[-1,1].map(L=>[F[0]+x/A*O*D,F[1]+O*L,F[2]-S/A*O*D])))}let v=a==="body"&&this.site.dais==="hologram",g=P;if(v){let S=e[0]-s.holo.at[0],x=e[2]-s.holo.at[1],A=Math.hypot(S,x)||1,O=qt.half*.62,F=[s.holo.at[0],l+ze+.08+qt.half,s.holo.at[1]];g=U([-1,1].flatMap(D=>[-1,1].map(L=>[F[0]+x/A*O*D,F[1]+O*L,F[2]-S/A*O*D])))}let _={lesson:{spots:[X?U(I(X)):P,K(C),w],w:[1,.62,0]},examples:{spots:[X?U(I(X)):P,K(C),w],w:[1,.62,0]},model:{spots:[K(this.steleRects.get(s.node)),K(this.modelScreens.get(s.node)),w],w:[.8,1,0]},body:v?{spots:[K(this.boards.get(s.node)),P,g],w:[1,0,0]}:{spots:[K(this.boards.get(s.node)),re(s.holo.at,.62,l,l+ze+2.35*Ro*.98),P],w:[1,1,0]},theater:{spots:[K(this.cinemaScreens.get(s.node)),P,w],w:[1,0,0]},gallery:{spots:[K(this.prints.get(s.node)),K(this.printCaptions.get(s.node)),P],w:[1,.7,0]}},N=null,Y=null;if(c){let S=c.kind==="table",x=i((r-.05)/.5),A=S?i((r-.1)/.65):x<.5?x*.44:.74+(x-.5)*.52,O=this.studyRise,F=i(S?(r-.7)/.3:(r-.5)/.4)*i(O/.8),D=Math.cos(c.facing),L=Math.sin(c.facing),H=l+c.holoY-c.half,$=S?1:i((r-.36)/.26)*i(O/.5),se=Math.max(.01,H-(l+no)+.04);N={kind:c.kind,frame:new Float32Array([D,0,-L,0,0,1,0,0,L,0,D,0,c.at[0],l,c.at[1],1]),assemble:A,beam:S?new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,c.at[0],l+Ko.top,c.at[1],1]):new Float32Array([1,0,0,0,0,se*$,0,0,0,0,1,0,c.at[0],l+no,c.at[1],1]),beamHeight:S?St:1,beamLight:S?i(r/.45):$*(1+E*.9),pop:E};let Z=[c.at[0],l+c.holoY,c.at[1]],te=e[0]-Z[0],ae=e[2]-Z[2],ie=Math.hypot(te,ae)||1,we=[ae/ie,0,-te/ie],Xe=Math.atan2(te,-ae)-c.facing,ot=-Math.atan2(Math.sin(Xe),Math.cos(Xe))*180/Math.PI;this.reduced||this.ema>46?this.studyLive=!1:this.ema<34&&(this.studyLive=!0);let k=null;F>0&&this.studyLive&&o.prepare(s.node)&&o.render(s.node,{az:ot,time:this.time,parts:m})&&o.texture?k={tex:o.texture,rect:[0,0,1,1]}:k=o.still(s.node,m),this.studyShown=F,k&&(Y={centre:Z,right:we,up:[0,1,0],half:c.half,tex:k.tex,rect:k.rect,reveal:F,flash:this.studyFlash,glow:m.length>0?E*.3:E,scan:b>0?-.1+y*1.25:-1})}let B=_[a],Q=a==="body"&&this.site.dais==="hologram"?oo.lesson.lights:oo[a].lights;return{lights:i(r/.45)*Q,spots:B.spots,spotW:B.w,deep:Y?Y.reveal*.74:v?i(r/.45)*.6:0,pod:N,holo:Y,claim:X,neonA:u.a,neonB:u.b,motion:!this.reduced}}daisFrame(e,t,r,o){let s=this.daisHolo;if(!s||e===null||this.rig.mode==="exterior")return[];let a=Math.hypot(r[0],r[2])||1,i=[];for(let c of this.site.layout.levels[e]?.stores??[]){let h=c.holo.at[0]-t[0],d=c.holo.at[1]-t[2],f=Math.hypot(h,d);if(f>wr||f>1.6&&(h*r[0]+d*r[2])/(f*a)<.15)continue;let m={a:[t[0],t[2]],b:c.holo.at};this.opaqueWalls.every(p=>At(m,p)>.05)&&i.push({s:c,d:f})}i.sort((c,h)=>c.d-h.d),this.reduced||this.ema>46?this.studyLive=!1:this.ema<34&&(this.studyLive=!0);let u=this.reduced?1:Math.min(1,o/1e3*2.6),l=[];return i.slice(0,Mr).forEach(({s:c},h)=>{let d=de(c.level),f=qt.half,m=[c.holo.at[0],d+ze+.08+f,c.holo.at[1]],p=t[0]-m[0],b=t[2]-m[2],y=Math.hypot(p,b)||1,E=[b/y,0,-p/y],R=Math.atan2(p,-b)-c.holo.facing,P=-Math.atan2(Math.sin(R),Math.cos(R))*180/Math.PI,U=this.studyLine?.node===c.node&&this.studyLine.station==="body"?this.studyLine:null,I=this.site.shot(c.node,"body",U),K=to(I.parts),re=this.daisView.get(c.node)??{az:I.az??0,el:I.el??0,zoom:I.zoom??1,cut:I.cut??0,mask:K,glow:0},C=(_,N)=>_+(N-_)*u,X={az:C(re.az,I.az??0),el:C(re.el,I.el??0),zoom:C(re.zoom,I.zoom??1),cut:C(re.cut,I.cut??0),mask:K,glow:K!==re.mask&&!this.reduced?1:Math.max(0,re.glow-o/900)};this.daisView.set(c.node,X),(Math.abs(X.az-(I.az??0))+Math.abs(X.el-(I.el??0))+Math.abs(X.zoom-(I.zoom??1))*40+Math.abs(X.cut-(I.cut??0))*40>.2||X.glow>0)&&(this.dirty=!0);let w=null;if(h===0&&this.studyLive&&s.prepare(c.node)&&s.render(c.node,{az:P+X.az,el:X.el,zoom:X.zoom,cut:X.cut,time:this.time,parts:I.parts,sway:!1})&&s.texture?w={tex:s.texture,rect:[0,0,1,1]}:w=s.still(c.node,I.parts),!w)return;let v=ao(eo(this.site.levelColor(c.tier))),g=m[1]-f;l.push({node:c.node,draw:{holo:{centre:m,right:E,up:[0,1,0],half:f,tex:w.tex,rect:w.rect,reveal:1,flash:X.glow*.6,glow:I.parts.length>0?X.glow*.3:X.glow*.6,scan:-1},beam:new Float32Array([1,0,0,0,0,Math.max(.05,g-(d+ze)),0,0,0,0,1,0,c.holo.at[0],d+ze,c.holo.at[1],1]),beamLight:.9+X.glow*.6,neonA:v.a,neonB:v.b,motion:!this.reduced}})}),l}updateFilm(e){let t=!this.studyLive,r=t?this.filmLow:this.filmHolo,o=this.renderer;if(!r||!o)return;let s=this.seatedAt(),a=s?`theater:${s}`:null;if(this.filmPrev&&this.filmPrev.key!==a&&(o.setScreenTexture(this.filmPrev.key,null,this.filmPrev.saved),this.filmPrev=null,this.dirty=!0),!s||!a){this.filmSince=0,this.filmDrawn="";return}if(!r.prepare(s)){this.dirty=!0;return}let i=this.site.buildSteps?.(s)??0,u=this.studyLine?.node===s&&this.studyLine.station==="theater"?this.studyLine:null,l;if(u?.cue?.build!==void 0)l=u.cue.build;else{this.filmSince===0&&(this.filmSince=this.time);let d=(this.time-this.filmSince)%(i*Pr+Is);l=Math.min(i,d/Pr)}let c=this.reduced?1:Math.min(1,e/1e3*1.8);this.filmBuild=l<this.filmBuild-.5?l:this.filmBuild+(l-this.filmBuild)*c;let h=u?.cue?.parts??[];if(t){let d=Math.min(i,Math.round(l)),f=`${s}:${d}:${h.join(",")}`;if(f===this.filmDrawn&&this.filmPrev?.key===a&&this.filmPrev.tex===r.texture||!r.render(s,{az:20,el:6,zoom:.92,time:this.time,parts:h,build:d,sway:!1}))return;this.filmDrawn=f,this.filmBuild=d}else if(this.filmDrawn="",!r.render(s,{az:this.reduced?0:this.time*9,el:6,zoom:.92,time:this.time,parts:h,build:Math.min(i,this.filmBuild),sway:!1}))return;if(this.filmPrev?.key!==a||this.filmPrev.tex!==r.texture){let d=this.filmPrev?.key===a?this.filmPrev.saved:o.setScreenTexture(a,r.texture);this.filmPrev?.key===a&&o.setScreenTexture(a,r.texture),this.filmPrev={key:a,saved:d,tex:r.texture}}this.dirty=!0}holoOf(e){return this.holoCache.has(e)||this.holoCache.set(e,this.site.dais==="bodymap"?wn(e):null),this.holoCache.get(e)??null}holoFrame(e,t,r){if(e===null||this.rig.mode==="exterior")return[];let o=Math.hypot(r[0],r[2])||1,s=[];for(let i of this.site.layout.levels[e]?.stores??[]){let u=i.holo.at[0]-t[0],l=i.holo.at[1]-t[2],c=Math.hypot(u,l);if(c>wr||c>1.6&&(u*r[0]+l*r[2])/(c*o)<.15)continue;let h={a:[t[0],t[2]],b:i.holo.at};this.opaqueWalls.every(d=>At(h,d)>.05)&&s.push({s:i,d:c})}s.sort((i,u)=>i.d-u.d);let a=[];for(let{s:i}of s.slice(0,Mr).reverse()){let u=this.holoDraw(i);u&&a.push(u)}return a}holoDraw(e){let t=this.holoOf(e.node);if(!t)return null;let r=this.time,o=Math.PI-e.holo.facing+(this.reduced?0:Math.sin(r*.35)*.32),s=Ro,a=Math.cos(o)*s,i=Math.sin(o)*s,[u,l]=e.holo.at,c=de(e.level)+ze,h=new Float32Array([a,0,-i,0,0,s,0,0,i,0,a,0,u,c,l,1]),d=E=>[a*E[0]+i*E[2]+u,E[1]*s+c,-i*E[0]+a*E[2]+l],f=new Float32Array(t.targets.length*4);t.targets.forEach((E,R)=>{let P=d(E.at);f.set([P[0],P[1],P[2],E.r*s],R*4)});let m=[],p=this.boards.get(e.node);if(p&&t.rows.length>0){let E={centre:p.centre,u:p.u,n:$e(p),hu:p.hu,hv:p.hv};for(let R of Mn(t,d,E,this.boardSide(e),un(t.rows.length),30/ln.w*p.hu*2)){let[P,U,I,K]=R.points;m.push(...P,...U,...U,...I,...I,...K)}}if(t.whole)for(let[P,U,I,K]of[[-.4,.02,1,1],[.4,.02,-1,1],[-.4,1.92,1,-1],[.4,1.92,-1,-1]]){let re=d([P,U,.14]);m.push(...d([P+I*.15,U,.14]),...re,...re,...d([P,U+K*.15,.14]))}let b=[];for(let[E,R,P]of[[.96,.5,.25],[1.52,.42,-.4]]){let I=this.reduced?0:r*P;for(let K=0;K<40;K+=2){let re=I+K/40*Math.PI*2,C=I+(K+1)/40*Math.PI*2;b.push(...d([Math.sin(re)*R,E,Math.cos(re)*R]),...d([Math.sin(C)*R,E,Math.cos(C)*R]))}}let y=this.studyAt?.station==="body"&&this.studyAt.s.node===e.node&&this.studyLine?.node===e.node&&this.studyLine.station==="body"&&this.studyT>0?this.studyPop:0;return{holo:t,model:h,rings:new Float32Array(b),leaders:new Float32Array(m),targets:f,scanY:this.reduced?-10:y>0?.02+(1-y)*1.95:.05+(1-Math.abs(r*.2%2-1))*1.8,pulse:this.reduced?.4:Math.max(.5+.5*Math.sin(r*2.2),y)}}updateLive(e,t,r,o){let s=this.live,a=this.renderer;if(!s||!a)return;let i=null;if(!this.reduced&&e!==null&&(this.studyT===0||this.studyAt?.station==="model")&&this.ema<(this.opts.liveBudget??60)){let c=18;for(let h of this.site.layout.levels[e]?.stores??[]){let d=h.display[0]-t[0],f=h.display[1]-t[2],m=Math.hypot(d,f);m<c&&d*r[0]+f*r[2]>-2&&(c=m,i=h.node)}}let u=i?`store:${i}`:null;if(this.livePrev&&this.livePrev.key!==u){let c=this.livePrev;this.livePrev=null,a.setScreenTexture(c.key,null,c.saved),s.showing=null,this.dirty=!0}if(!i||!u||!s.prepare(i))return;s.render(i,this.time,this.ema<24?0:66)&&this.livePrev?.key!==u&&(this.livePrev={key:u,saved:a.setScreenTexture(u,s.texture)})}pickClient(e,t){let r=this.canvas.getBoundingClientRect();return r.width===0||r.height===0?null:this.pick((e-r.left)/r.width*2-1,1-(t-r.top)/r.height*2)}pick(e,t){let{origin:r,dir:o}=pn(this.invViewProj,e,t),s=this.rig.camera();if(this.rig.mode==="exterior"||s.level===null){let f=null,m=1/0;for(let p of this.site.layout.levels){let b=bn(r,o,[-z-.6,p.y-ne,-z-.6],[z+.6,p.y+ge-ne,z+.6]);b!==null&&b<m&&(m=b,f={kind:"level",level:p.index})}if(!f&&o[1]<0){let p=-r[1]/o[1];Math.hypot(r[0]+o[0]*p,r[2]+o[2]*p)<52&&(f={kind:"plaza"})}return f}let a=s.level,i=de(a),u=null,l=1/0,c=[s.eye[0],s.eye[2]],h=f=>{let m=[r[0]+o[0]*f,r[2]+o[2]*f],p={a:c,b:[m[0]-(m[0]-c[0])*.02,m[1]-(m[1]-c[1])*.02]};return this.opaqueWalls.every(b=>At(p,b)>.01)},d=(f,m)=>{f!==null&&f<l&&f<70&&h(f)&&(l=f,u=m)};for(let f of this.world?.screens??[]){if(f.level!==a)continue;let m=Ot(r,o,f.rect.centre,$e(f.rect),f.rect.u,f.rect.v,f.rect.hu,f.rect.hv),p=Us[f.kind];f.kind==="directory"?d(m,{kind:"directory",level:a,distance:m??0}):f.node&&p&&d(m,{kind:"store",node:f.node,part:p,distance:m??0})}for(let f of this.world?.overlays??[]){if(f.level!==a||!f.station)continue;let m=Ot(r,o,f.rect.centre,$e(f.rect),f.rect.u,f.rect.v,f.rect.hu,f.rect.hv);d(m,{kind:"store",node:f.node,part:f.station,distance:m??0})}for(let f of this.site.layout.levels[a]?.stores??[]){let m=Cs(r,o,f.holo.at,.45,i+ze,i+ze+1.82*Ro);m!==null&&d(m,{kind:"store",node:f.node,part:"body",distance:m})}for(let f of this.fronts)f.level===a&&d(Ot(r,o,f.centre,f.normal,f.u,[0,1,0],V/2,2.8),{kind:"store",node:f.node,part:"front",distance:0});{let f=o[0]*o[0]+o[2]*o[2],m=2*(r[0]*o[0]+r[2]*o[2]),p=r[0]*r[0]+r[2]*r[2]-be*be,b=m*m-4*f*p;if(f>1e-9&&b>=0){let y=(-m-Math.sqrt(b))/(2*f),E=r[1]+o[1]*y;y>0&&E>i&&E<i+ge&&d(y,{kind:"lift",distance:y})}}if(u){let f=u;return f.kind==="store"&&f.part==="front"?{...f,distance:l}:f}if(o[1]<-.02){let f=(i-r[1])/o[1],m=[r[0]+o[0]*f,r[2]+o[2]*f];if(f<40&&this.site.layout.standable(a,m))return{kind:"floor",level:a,p:m,distance:f}}return null}click(e,t){let r=this.pickClient(e,t);if(r)switch(r.kind){case"level":this.goTo({kind:"level",level:r.level});break;case"plaza":this.goTo({kind:"plaza"});break;case"store":this.goTo(Fr(r.node,r.part));break;case"floor":this.goTo({kind:"point",level:r.level,p:r.p});break;case"lift":case"directory":this.opts.onSelect?.(r);break}}emit(e,t,r,o){let s=t!==null?this.site.layout.levels[t]:void 0,a=[r[0],r[2]],i=s&&this.rig.mode!=="exterior"?Pt(s,a):null,u=null;if(i?.kind==="store"&&this.rig.mode==="walk")for(let f of this.site.stationsOf(i.store.node)){let m=i.store.stations[f].p;Math.hypot(m[0]-a[0],m[1]-a[1])<.9&&(u=f)}let l={mode:this.rig.mode,level:this.rig.mode==="exterior"?null:t,region:i?.kind??null,store:i?.kind==="store"?i.store.node:null,focus:this.focus,x:a[0],z:a[1],heading:o,destination:this.rig.destination,live:this.live?.showing??null,station:u,holos:this.drawnHolos,study:this.studyT>.5&&this.studyAt?this.studyAt.s.node:null,studyStop:this.studyT>.5&&this.studyAt?this.studyAt.station:null},c=l.focus,h=JSON.stringify([l.mode,l.level,l.region,l.store,c?[c.kind,"node"in c?c.node:"","level"in c?c.level:"","part"in c?c.part:""]:null,l.destination,l.live,l.station,l.holos,l.study,l.studyStop]);if(h===this.snapKey&&e-this.snapAt<120)return;this.snapKey=h,this.snapAt=e;let d=this.host.dataset;d.mode=l.mode,d.level=l.level===null?"":String(l.level+1),d.store=l.store??"",d.live=l.live??"",d.region=l.region??"",d.station=l.station??"",d.holo=l.holos.join(","),d.study=l.study??"",d.studyStop=l.studyStop??"",d.frame=`${Math.round(this.ema)}ms@${this.scale.toFixed(2)}`,d.pos=`${l.x.toFixed(1)},${l.z.toFixed(1)}`,this.opts.onSnapshot(l)}};function Fr(n,e){return e==="front"?{kind:"store",node:n}:{kind:"store",node:n,station:e}}function Cs(n,e,t,r,o,s){let a=n[0]-t[0],i=n[2]-t[1],u=e[0]*e[0]+e[2]*e[2];if(u<1e-9)return null;let l=2*(a*e[0]+i*e[2]),c=a*a+i*i-r*r,h=l*l-4*u*c;if(h<0)return null;let d=(-l-Math.sqrt(h))/(2*u);if(d<=0)return null;let f=n[1]+e[1]*d;return f>=o&&f<=s?d:null}function Bs(n){let e=n.getExtension("EXT_color_buffer_float")!==null,t=globalThis.__OUTLET_QUALITY__;return t==="basic"?"basic":t==="cinematic"?e?"cinematic":"basic":e?_r(n)?"basic":"cinematic":"basic"}function _r(n){let e=String(n.getParameter(n.RENDERER));if(/^webkit webgl$/i.test(e)){let t=n.getExtension("WEBGL_debug_renderer_info");t&&(e=String(n.getParameter(t.UNMASKED_RENDERER_WEBGL)))}return/swiftshader|llvmpipe|softpipe|software|basic render/i.test(e)}export{Sr as OutletEngine,Bs as chooseTier,_r as isSoftware};
