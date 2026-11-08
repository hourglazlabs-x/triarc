import{a as an,b as lt,c as Vt}from"./chunk-GCCBNB25.js";import{B as Lt,b as _t,c as et,d as rn,e as ao,h as sn,k as ln,s as un,t as cn}from"./chunk-Q2Q6W7RD.js";import"./chunk-B74KHNJF.js";import{c as oo,i as qo,j as Ft,k as Qo,l as Zo,m as Jo,n as no,o as en,p as ro,q as tn,s as on,t as nn,v as so}from"./chunk-U3VZVEBC.js";import{b as io}from"./chunk-ED7P7TO3.js";import{$ as Oe,A as Go,B as zo,D as Ze,H as Wo,I as Yo,N as G,O as V,P as z,Q as be,R as rt,S as ye,T as ne,U as he,V as st,W as Fe,X as Je,Y as At,Z as de,da as $o,ea as Me,fa as Ue,ga as jo,ha as at,ia as Pt,ja as ko,ka as it,la as St,na as Xo,r as Vo,ra as Ko,x as Co,z as Ho}from"./chunk-V2YZOSSV.js";import{a as to,c as Oo,d as Io,e as No,f as Bo,i as Uo}from"./chunk-J3JRVZSH.js";import{b as Do}from"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var We=Math.PI/180;function lo(n,e){return[n[0]+e[0],n[1]+e[1],n[2]+e[2]]}function Re(n,e){return[n[0]-e[0],n[1]-e[1],n[2]-e[2]]}function Cr(n,e){return[n[0]*e,n[1]*e,n[2]*e]}function ze(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function fe(n,e){return[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]]}function dn(n){return Math.hypot(n[0],n[1],n[2])}function J(n){let e=dn(n)||1;return[n[0]/e,n[1]/e,n[2]/e]}function _e(n,e,o){return n+(e-n)*o}function Le(n,e,o){return Math.min(o,Math.max(e,n))}function ut(n,e){let o=(e-n)%(Math.PI*2);return o>Math.PI&&(o-=Math.PI*2),o<-Math.PI&&(o+=Math.PI*2),o}function ct(n){let e=Le(n,0,1);return e*e*e*(e*(e*6-15)+10)}function fn(n,e=0){let o=Math.cos(e);return[Math.sin(n)*o,Math.sin(e),-Math.cos(n)*o]}function ht(){let n=new Float32Array(16);return n[0]=n[5]=n[10]=n[15]=1,n}function mn(n,e,o,r,t){let s=1/Math.tan(e/2);return n.fill(0),n[0]=s/o,n[5]=s,n[10]=(t+r)/(r-t),n[11]=-1,n[14]=2*t*r/(r-t),n}function pn(n,e,o,r,t,s,a){return n.fill(0),n[0]=2/(o-e),n[5]=2/(t-r),n[10]=-2/(a-s),n[12]=-(o+e)/(o-e),n[13]=-(t+r)/(t-r),n[14]=-(a+s)/(a-s),n[15]=1,n}function Dt(n,e,o,r=[0,1,0]){let t=J(Re(e,o)),s=fe(r,t);dn(s)<1e-6&&(s=fe([0,0,1],t)),s=J(s);let a=fe(t,s);return n[0]=s[0],n[1]=a[0],n[2]=t[0],n[3]=0,n[4]=s[1],n[5]=a[1],n[6]=t[1],n[7]=0,n[8]=s[2],n[9]=a[2],n[10]=t[2],n[11]=0,n[12]=-ze(s,e),n[13]=-ze(a,e),n[14]=-ze(t,e),n[15]=1,n}function dt(n,e,o){let r=new Float32Array(16);for(let t=0;t<4;t++)for(let s=0;s<4;s++){let a=0;for(let i=0;i<4;i++)a+=(e[i*4+s]??0)*(o[t*4+i]??0);r[t*4+s]=a}return n.set(r),n}function Ot(n,e){let o=b=>e[b]??0,r=o(0)*o(5)-o(1)*o(4),t=o(0)*o(6)-o(2)*o(4),s=o(0)*o(7)-o(3)*o(4),a=o(1)*o(6)-o(2)*o(5),i=o(1)*o(7)-o(3)*o(5),c=o(2)*o(7)-o(3)*o(6),l=o(8)*o(13)-o(9)*o(12),u=o(8)*o(14)-o(10)*o(12),h=o(8)*o(15)-o(11)*o(12),d=o(9)*o(14)-o(10)*o(13),f=o(9)*o(15)-o(11)*o(13),m=o(10)*o(15)-o(11)*o(14),p=r*m-t*f+s*d+a*h-i*u+c*l;return p?(p=1/p,n[0]=(o(5)*m-o(6)*f+o(7)*d)*p,n[1]=(o(2)*f-o(1)*m-o(3)*d)*p,n[2]=(o(13)*c-o(14)*i+o(15)*a)*p,n[3]=(o(10)*i-o(9)*c-o(11)*a)*p,n[4]=(o(6)*h-o(4)*m-o(7)*u)*p,n[5]=(o(0)*m-o(2)*h+o(3)*u)*p,n[6]=(o(14)*s-o(12)*c-o(15)*t)*p,n[7]=(o(8)*c-o(10)*s+o(11)*t)*p,n[8]=(o(4)*f-o(5)*h+o(7)*l)*p,n[9]=(o(1)*h-o(0)*f-o(3)*l)*p,n[10]=(o(12)*i-o(13)*s+o(15)*r)*p,n[11]=(o(9)*s-o(8)*i-o(11)*r)*p,n[12]=(o(5)*u-o(4)*d-o(6)*l)*p,n[13]=(o(0)*d-o(1)*u+o(2)*l)*p,n[14]=(o(13)*t-o(12)*a-o(14)*r)*p,n[15]=(o(8)*a-o(9)*t+o(10)*r)*p,n):null}function hn(n,e){let o=(n[0]??0)*e[0]+(n[4]??0)*e[1]+(n[8]??0)*e[2]+(n[12]??0),r=(n[1]??0)*e[0]+(n[5]??0)*e[1]+(n[9]??0)*e[2]+(n[13]??0),t=(n[2]??0)*e[0]+(n[6]??0)*e[1]+(n[10]??0)*e[2]+(n[14]??0),s=(n[3]??0)*e[0]+(n[7]??0)*e[1]+(n[11]??0)*e[2]+(n[15]??0);return[o/s,r/s,t/s,s]}function bn(n,e,o){let r=hn(n,[e,o,-1]),t=hn(n,[e,o,1]),s=[r[0],r[1],r[2]];return{origin:s,dir:J(Re([t[0],t[1],t[2]],s))}}function vn(n,e,o,r){let t=-1/0,s=1/0;for(let a=0;a<3;a++){let i=n[a]??0,c=e[a]??0,l=o[a]??0,u=r[a]??0;if(Math.abs(c)<1e-12){if(i<l||i>u)return null;continue}let h=(l-i)/c,d=(u-i)/c;if(h>d&&([h,d]=[d,h]),t=Math.max(t,h),s=Math.min(s,d),t>s)return null}return s<0?null:t>=0?t:s}function It(n,e,o,r,t,s,a,i){let c=ze(e,r);if(Math.abs(c)<1e-9)return null;let l=ze(Re(o,n),r)/c;if(l<0)return null;let u=lo(n,Cr(e,l)),h=Re(u,o);return Math.abs(ze(h,t))>a||Math.abs(ze(h,s))>i?null:l}var ft=13;function W(n){let e=parseInt(n.replace("#",""),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var Ye=class{data=[];get vertexCount(){return this.data.length/ft}toArray(){return new Float32Array(this.data)}vertex(e,o,r,t){this.data.push(e[0],e[1],e[2],o[0],o[1],o[2],r[0],r[1],r[2],t.gloss,t.emit??0,t.ao??1,t.pattern??0)}tri(e,o,r,t,s,a){let i=a??J(fe(Re(o,e),Re(r,e)));this.vertex(e,i,t,s),this.vertex(o,i,t,s),this.vertex(r,i,t,s)}quad(e,o,r,t,s,a,i){let c=i??J(fe(Re(o,e),Re(t,e)));this.tri(e,o,r,s,a,c),this.tri(e,r,t,s,a,c)}box(e,o,r,t,s={}){let[a,i,c]=e,[l,u,h]=o;s.top!==!1&&this.quad([a,u,c],[l,u,c],[l,u,h],[a,u,h],r,t,[0,1,0]),s.bottom!==!1&&this.quad([a,i,h],[l,i,h],[l,i,c],[a,i,c],r,t,[0,-1,0]),this.quad([a,i,h],[a,u,h],[l,u,h],[l,i,h],r,t,[0,0,1]),this.quad([l,i,c],[l,u,c],[a,u,c],[a,i,c],r,t,[0,0,-1]),this.quad([l,i,h],[l,u,h],[l,u,c],[l,i,c],r,t,[1,0,0]),this.quad([a,i,c],[a,u,c],[a,u,h],[a,i,h],r,t,[-1,0,0])}wall(e,o,r,t,s,a,i){let c=Math.hypot(o[0]-e[0],o[1]-e[1]);if(c<1e-6)return;let l=(o[0]-e[0])/c,u=(o[1]-e[1])/c,h=-u*(s/2),d=l*(s/2),f=(b,g,E)=>[b[0]+h*g,E,b[1]+d*g],m=[-u,0,l],p=[u,0,-l];this.quad(f(e,1,r),f(e,1,t),f(o,1,t),f(o,1,r),a,i,m),this.quad(f(o,-1,r),f(o,-1,t),f(e,-1,t),f(e,-1,r),a,i,p),this.quad(f(e,-1,t),f(o,-1,t),f(o,1,t),f(e,1,t),a,i,[0,1,0]),this.quad(f(e,1,r),f(o,1,r),f(o,-1,r),f(e,-1,r),a,i,[0,-1,0]),this.quad(f(e,-1,r),f(e,-1,t),f(e,1,t),f(e,1,r),a,i,[-l,0,-u]),this.quad(f(o,1,r),f(o,1,t),f(o,-1,t),f(o,-1,r),a,i,[l,0,u])}pane(e,o,r,t,s,a){let i=Math.hypot(o[0]-e[0],o[1]-e[1]);if(i<1e-6)return;let c=[-(o[1]-e[1])/i,0,(o[0]-e[0])/i];this.quad([e[0],r,e[1]],[e[0],t,e[1]],[o[0],t,o[1]],[o[0],r,o[1]],s,a,c)}prism(e,o,r,t,s,a={}){let i=e.length,c=l=>e[(l%i+i)%i]??[0,0];if(a.top!==!1)for(let l=1;l<i-1;l++)this.tri([c(0)[0],r,c(0)[1]],[c(l)[0],r,c(l)[1]],[c(l+1)[0],r,c(l+1)[1]],t,s,[0,1,0]);if(a.bottom!==!1)for(let l=1;l<i-1;l++)this.tri([c(0)[0],o,c(0)[1]],[c(l+1)[0],o,c(l+1)[1]],[c(l)[0],o,c(l)[1]],t,s,[0,-1,0]);if(a.sides!==!1){let l=e.reduce((h,d)=>h+d[0],0)/i,u=e.reduce((h,d)=>h+d[1],0)/i;for(let h=0;h<i;h++){let d=c(h),f=c(h+1),m=J([f[1]-d[1],0,-(f[0]-d[0])]),p=(d[0]+f[0])/2-l,b=(d[1]+f[1])/2-u;m[0]*p+m[2]*b<0&&(m=[-m[0],0,-m[2]]),this.quad([d[0],o,d[1]],[d[0],r,d[1]],[f[0],r,f[1]],[f[0],o,f[1]],t,s,m)}}}cylinder(e,o,r,t,s,a,i,c,l={}){let[u,h]=l.arc??[0,Math.PI*2],d=(m,p)=>[e+r*Math.sin(m),p,o+r*Math.cos(m)],f=m=>l.inward?[-Math.sin(m),0,-Math.cos(m)]:[Math.sin(m),0,Math.cos(m)];for(let m=0;m<a;m++){let p=u+(h-u)*m/a,b=u+(h-u)*(m+1)/a,g=d(p,t),E=d(p,s),R=d(b,s),P=d(b,t);this.vertex(g,f(p),i,c),this.vertex(E,f(p),i,c),this.vertex(R,f(b),i,c),this.vertex(g,f(p),i,c),this.vertex(R,f(b),i,c),this.vertex(P,f(b),i,c),l.caps!==!1&&!l.arc&&(this.tri([e,s,o],d(b,s),d(p,s),i,c,[0,1,0]),this.tri([e,t,o],d(p,t),d(b,t),i,c,[0,-1,0]))}}annulus(e,o,r,t,s,a,i,c){for(let l=0;l<a;l++){let u=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2,d=(f,m)=>[e+f*Math.sin(m),s,o+f*Math.cos(m)];this.quad(d(r,u),d(t,u),d(t,h),d(r,h),i,c,[0,1,0])}}sphere(e,o,r,t,s,a=1){let i=Math.max(4,Math.round(r/2)),c=(l,u)=>{let h=l/i*Math.PI,d=u/r*Math.PI*2,f=[Math.sin(h)*Math.sin(d),Math.cos(h),Math.sin(h)*Math.cos(d)];return[[e[0]+f[0]*o,e[1]+f[1]*o*a,e[2]+f[2]*o],J([f[0],f[1]/a,f[2]])]};for(let l=0;l<i;l++)for(let u=0;u<r;u++){let[h,d]=c(l,u),[f,m]=c(l+1,u),[p,b]=c(l+1,u+1),[g,E]=c(l,u+1);this.vertex(h,d,t,s),this.vertex(f,m,t,s),this.vertex(p,b,t,s),this.vertex(h,d,t,s),this.vertex(p,b,t,s),this.vertex(g,E,t,s)}}sweep(e,o,r,t,s,a=!1){let i=e.length;if(i<2)return;let c=b=>typeof o=="number"?o:o[Math.min(b,o.length-1)]??.02,l=b=>e[a?(b%i+i)%i:Math.max(0,Math.min(i-1,b))],u=b=>J(Re(l(b+1),l(b-1))),h=u(0),d=Math.abs(h[1])<.9?[0,1,0]:[1,0,0],f=J(fe(fe(h,d),h)),m=[];for(let b=0;b<i;b++){let g=u(b),E=f[0]*g[0]+f[1]*g[1]+f[2]*g[2];f=J([f[0]-g[0]*E,f[1]-g[1]*E,f[2]-g[2]*E]);let R=fe(g,f),P=l(b),B=c(b),I=[];for(let K=0;K<r;K++){let re=K/r*Math.PI*2,U=Math.cos(re),k=Math.sin(re),ee=[f[0]*U+R[0]*k,f[1]*U+R[1]*k,f[2]*U+R[2]*k];I.push([[P[0]+ee[0]*B,P[1]+ee[1]*B,P[2]+ee[2]*B],ee])}m.push(I)}let p=a?i:i-1;for(let b=0;b<p;b++){let g=m[b],E=m[(b+1)%i];if(!(!g||!E))for(let R=0;R<r;R++){let P=(R+1)%r,[B,I]=g[R],[K,re]=g[P],[U,k]=E[R],[ee,T]=E[P];this.vertex(B,I,t,s),this.vertex(U,k,t,s),this.vertex(ee,T,t,s),this.vertex(B,I,t,s),this.vertex(ee,T,t,s),this.vertex(K,re,t,s)}}a||(this.disc(l(0),u(0),0,c(0),r,t,s),this.disc(l(i-1),u(i-1),0,c(i-1),r,t,s))}strip(e,o,r,t,s){let a=i=>Array.isArray(o[0])?o[i]:o;for(let i=1;i<e.length;i++){let c=e[i-1],l=e[i],u=a(i-1),h=a(i),d=r/2,f=[c[0]-u[0]*d,c[1]-u[1]*d,c[2]-u[2]*d],m=[c[0]+u[0]*d,c[1]+u[1]*d,c[2]+u[2]*d],p=[l[0]+h[0]*d,l[1]+h[1]*d,l[2]+h[2]*d],b=[l[0]-h[0]*d,l[1]-h[1]*d,l[2]-h[2]*d],g=J(fe(Re(l,c),u));this.quad(f,m,p,b,t,s,g)}}disc(e,o,r,t,s,a,i){let c=J(o),l=Math.abs(c[1])<.9?[0,1,0]:[1,0,0],u=J(fe(l,c)),h=fe(c,u),d=(f,m)=>[e[0]+(u[0]*Math.cos(m)+h[0]*Math.sin(m))*f,e[1]+(u[1]*Math.cos(m)+h[1]*Math.sin(m))*f,e[2]+(u[2]*Math.cos(m)+h[2]*Math.sin(m))*f];for(let f=0;f<s;f++){let m=f/s*Math.PI*2,p=(f+1)/s*Math.PI*2;r<=0?this.tri(e,d(t,m),d(t,p),a,i,c):this.quad(d(r,m),d(t,m),d(t,p),d(r,p),a,i,c)}}pill(e,o,r,t,s,a,i,c){let l=Math.hypot(o[0]-e[0],o[1]-e[1]),u=(o[0]-e[0])/l,h=(o[1]-e[1])/l,d=Math.atan2(u,h);this.cylinder(e[0],e[1],r,t,s,a,i,c,{arc:[d+Math.PI/2,d+Math.PI*3/2]}),this.cylinder(o[0],o[1],r,t,s,a,i,c,{arc:[d-Math.PI/2,d+Math.PI/2]});let f=-h*r,m=u*r,p=[[e[0]+f,e[1]+m],[o[0]+f,o[1]+m],[o[0]-f,o[1]-m],[e[0]-f,e[1]-m]];this.prism(p,t,s,i,c,{bottom:!1});for(let[b,g]of[[e,d+Math.PI/2],[o,d-Math.PI/2]])for(let E=0;E<a;E++){let R=g+Math.PI*E/a,P=g+Math.PI*(E+1)/a;this.tri([b[0],s,b[1]],[b[0]+r*Math.sin(P),s,b[1]+r*Math.cos(P)],[b[0]+r*Math.sin(R),s,b[1]+r*Math.cos(R)],i,c,[0,1,0])}}};function ue(n,e,o,r,t,s=0){let a=[Math.sin(o),0,-Math.cos(o)],i=[-Math.cos(o),0,-Math.sin(o)];return{centre:[n[0]+a[0]*s,e,n[1]+a[2]*s],u:i,v:[0,1,0],hu:r/2,hv:t/2}}function uo(n,e,o,r,t){let s=[Math.sin(o),0,-Math.cos(o)],a=[Math.cos(o),0,Math.sin(o)];return{centre:[n[0],e,n[1]],u:a,v:s,hu:r/2,hv:t/2}}function $e(n){return J(fe(n.u,n.v))}function Nt(n,e=!1){let o=(s,a)=>[n.centre[0]+n.u[0]*n.hu*s+n.v[0]*n.hv*a,n.centre[1]+n.u[1]*n.hu*s+n.v[1]*n.hv*a,n.centre[2]+n.u[2]*n.hu*s+n.v[2]*n.hv*a],r=(s,a)=>[e?(1-s)/2:(s+1)/2,(1-a)/2],t=[];for(let[s,a]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])t.push(...o(s,a),...r(s,a));return new Float32Array(t)}var xe=1.78/489,Hr=510;function we(n,e,o=0){return[(n-120)*xe,(Hr-e)*xe,o]}var Ct=6,q=(n,e,o,r,t=0)=>({x:n,y:e,w:o,d:r,z:t}),yn=[q(120,108,16,.052),q(120,118,34,.08),q(120,128,48,.1),q(120,144,49,.113),q(120,165,45,.118),q(120,186,43,.115),q(120,206,40,.108),q(120,228,37,.1),q(120,250,36.5,.1),q(120,270,40,.104),q(120,290,45,.11),q(120,306,45,.106),q(120,318,37,.09),q(120,326,18,.05)],Gr=[q(120,84,11,.048),q(120,112,12.5,.052)],ho=[q(70,132,13,.05),q(66,152,12,.045),q(63,180,10.5,.04),q(60,206,9.5,.036),q(57,228,8.6,.032),q(54,252,8.6,.032),q(51,276,7.8,.029),q(48,296,6.8,.025),q(46,308,6.2,.022)],fo=[q(98,296,22,.085),q(96,326,20,.08),q(95,356,17,.07),q(95,384,13.5,.056),q(95,402,12.5,.05),q(96,426,12.5,.052),q(96,450,11,.046),q(97,470,9,.036),q(98,488,8,.03)];function zr(n,e){let o=[],r=s=>n[Math.max(0,Math.min(n.length-1,s))],t=(s,a,i,c,l)=>.5*(2*a+(-s+i)*l+(2*s-5*a+4*i-c)*l*l+(-s+3*a-3*i+c)*l*l*l);for(let s=0;s<n.length-1;s++){let[a,i,c,l]=[r(s-1),r(s),r(s+1),r(s+2)];for(let u=0;u<e;u++){let h=u/e;o.push({x:t(a.x,i.x,c.x,l.x,h),y:t(a.y,i.y,c.y,l.y,h),z:t(a.z,i.z,c.z,l.z,h),w:Math.max(.5,t(a.w,i.w,c.w,l.w,h)),d:Math.max(.004,t(a.d,i.d,c.d,l.d,h))})}}return o.push(r(n.length-1)),o}function Bt(n,e,o=20,r=!0){let t=zr(e,3),s=t.map(a=>Array.from({length:o+1},(i,c)=>{let l=c/o*Math.PI*2,u=we(a.x,a.y,a.z);return[u[0]+Math.sin(l)*a.w*xe,u[1],u[2]+Math.cos(l)*a.d]}));if(r){let a=t[0],i=t[t.length-1],c=(l,u)=>[.7,.35,0].map(h=>Array.from({length:o+1},(d,f)=>{let m=f/o*Math.PI*2,p=we(l.x,l.y,l.z),b=Math.sqrt(1-h*h)*Math.min(l.w*xe,l.d)*.8*u;return[p[0]+Math.sin(m)*l.w*xe*h,p[1]+b,p[2]+Math.cos(m)*l.d*h]}));s.unshift(...c(a,1).reverse()),s.push(...c(i,-1))}Wr(n,s)}function Wr(n,e){let o=e.length,r=e[0]?.length??0,t=(a,i)=>e[Math.max(0,Math.min(o-1,a))]?.[(i%(r-1)+(r-1))%(r-1)]??[0,0,0],s=(a,i)=>{let c=Ut(t(a,i+1),t(a,i-1)),l=Ut(t(a+1,i),t(a-1,i)),u=mo(l,c);if(Math.hypot(u[0],u[1],u[2])<1e-12){let p=gn(e[a===0?1:o-2]??[]);return J(Ut(t(a,i),p))}let h=J(u),d=gn(e[Math.max(0,Math.min(o-1,a))]??[]),f=t(a,i),m=[f[0]-d[0],0,f[2]-d[2]];return h[0]*m[0]+h[2]*m[2]<0?[-h[0],-h[1],-h[2]]:h};for(let a=0;a<o-1;a++)for(let i=0;i<r-1;i++){let c=[[a,i],[a+1,i],[a+1,i+1],[a,i],[a+1,i+1],[a,i+1]];for(let[l,u]of c)n.push(...t(l,u),...s(l,u))}}function gn(n){let e=Math.max(1,n.length-1),o=0,r=0,t=0;for(let s=0;s<e;s++){let a=n[s]??[0,0,0];o+=a[0],r+=a[1],t+=a[2]}return[o/e,r/e,t/e]}var Ut=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],mo=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]];function mt(n,e,o,r=0,t=18){let s=Math.max(6,Math.round(t/2)),a=Math.cos(r),i=Math.sin(r),c=(l,u)=>{let h=l/s*Math.PI,d=u/t*Math.PI*2,f=[Math.sin(h)*Math.sin(d),Math.cos(h),Math.sin(h)*Math.cos(d)],m=f[0]*o[0],p=f[1]*o[1],b=[e[0]+m*a-p*i,e[1]+m*i+p*a,e[2]+f[2]*o[2]],g=f[0]/o[0],E=f[1]/o[1],R=J([g*a-E*i,g*i+E*a,f[2]/o[2]]);return[b,R]};for(let l=0;l<s;l++)for(let u=0;u<t;u++){let h=[[l,u],[l+1,u],[l+1,u+1],[l,u],[l+1,u+1],[l,u+1]];for(let[d,f]of h){let[m,p]=c(d,f);n.push(...m,...p)}}}function xn(){let n=[];mt(n,we(120,55,.004),[27*xe,35*xe,.104],0,24),Bt(n,Gr,18,!1),Bt(n,yn,28);for(let e of[1,-1]){let o=s=>({...s,x:e>0?s.x:240-s.x});Bt(n,ho.map(o),16),Bt(n,fo.map(o),18);let r=e>0?41:199;mt(n,we(r,330,.006),[7.5*xe,17*xe,.024],e>0?.08:-.08,14);let t=e>0?96:144;mt(n,we(t,501,.045),[9.5*xe,7.5*xe,.11],0,14)}return new Float32Array(n)}function wn(n=.6,e=2.3,o=48){let r=[];for(let t=0;t<o;t++){let s=t/o*Math.PI*2,a=(t+1)/o*Math.PI*2,i=(c,l)=>[Math.sin(c)*n,l,Math.cos(c)*n,Math.sin(c),0,Math.cos(c)];r.push(...i(s,0),...i(a,0),...i(a,e),...i(s,0),...i(a,e),...i(s,e))}return new Float32Array(r)}var Tn={brain:0,hypothalamus:-.005,brainstem:-.025,"visual-cortex":-.07,eyes:.086,ears:0,nose:.104,mouth:.09,thyroid:.035,thymus:.07,heart:.035,lungs:0,liver:.02,gallbladder:.055,stomach:.04,spleen:-.035,pancreas:-.02,kidneys:-.062,adrenals:-.062,"small-intestine":.04,"large-intestine":.035,bladder:.04,"spinal-cord":-.088,"sympathetic-chain":-.072,vagus:-.01,"arm-muscles":0,"thigh-muscles":0,"belly-fat":.07,"bone-marrow":0,"lymph-nodes":.03,scalp:0,fingernails:.02,toenails:.12,forearm:0,ankle:0,hand:.01,body:0};function po(n,e){let o=[],r=[],t=0,s=0,a=n.match(/[MLHVQCSZmlhvqcsz]|-?\d*\.?\d+(?:e-?\d+)?/g)??[],i=0,c="M",l=()=>Number(a[i++]);for(;i<a.length;){let u=a[i]??"";if(/[A-Za-z]/.test(u)&&(c=u,i++,c==="Z"||c==="z")){r[0]&&r.push(r[0]);continue}if(c==="M")r.length>1&&o.push(r),t=l(),s=l(),r=[we(t,s,e)],c="L";else if(c==="L")t=l(),s=l(),r.push(we(t,s,e));else if(c==="H")t=l(),r.push(we(t,s,e));else if(c==="V")s=l(),r.push(we(t,s,e));else if(c==="Q"){let h=l(),d=l(),f=l(),m=l();for(let p=1;p<=6;p++){let b=p/6,g=1-b;r.push(we(g*g*t+2*g*b*h+b*b*f,g*g*s+2*g*b*d+b*b*m,e))}t=f,s=m}else{let h=c==="c"||c==="C"?6:c==="s"||c==="S"||c==="q"?4:2;for(let d=0;d<h&&i<a.length&&!/[A-Za-z]/.test(a[i]??"");d++)i++;r.length>1&&o.push(r),r=[]}}return r.length>1&&o.push(r),o}function Yr(n,e){let o=Tn[n];if("e"in e){let[l,u,h,d,f=0]=e.e,m=Math.max(.006,Math.min(.09,Math.min(h,d)*xe*.9));return{organs:[{centre:we(l,u,o),radii:[h*xe,d*xe,m],rotZ:-f*Math.PI/180}],strands:[]}}if(e.line!==void 0)return e.line<1?{organs:[],strands:[]}:{organs:[],strands:po(e.d,o).map(l=>({points:l,radius:Math.max(.004,e.line*xe*.5)}))};let r=po(e.d,o).flat();if(r.length===0)return{organs:[],strands:[]};let t=r.map(l=>l[0]),s=r.map(l=>l[1]),a=[(Math.min(...t)+Math.max(...t))/2,(Math.min(...s)+Math.max(...s))/2,o],i=Math.max(.006,(Math.max(...t)-Math.min(...t))/2),c=Math.max(.006,(Math.max(...s)-Math.min(...s))/2);return{organs:[{centre:a,radii:[i,c,Math.min(i,c)],rotZ:0}],strands:[]}}var $r={vessels:[{key:"arteries",color:Ze.artery,z:.012},{key:"veins",color:Ze.vein,z:.004}],nerves:[{key:"nerves",color:Ze.nerve,z:-.012}],lymphatics:[{key:"lymphatics",color:Ze.lymph,z:.026}],autonomic:[{key:"autonomic",color:Ze.nerve,z:-.07}]};function jr(){let n=11,e=()=>(n=n*1664525+1013904223>>>0,n/4294967296),o=[[yn,140],[ho,30],[ho.map(t=>({...t,x:240-t.x})),30],[fo,40],[fo.map(t=>({...t,x:240-t.x})),40]],r=[we(120,55,0)];for(let t=0;t<24;t++)r.push(we(120+(e()-.5)*40,55+(e()-.5)*52,(e()-.5)*.12));for(let[t,s]of o)for(let a=0;a<s;a++){let i=Math.floor(e()*(t.length-1)),c=t[i],l=t[i+1],u=e(),h=(c.w+(l.w-c.w)*u)*.8,d=(c.d+(l.d-c.d)*u)*.8,f=e()*Math.PI*2,m=Math.sqrt(e());r.push(we(c.x+(l.x-c.x)*u+Math.sin(f)*h*m,c.y+(l.y-c.y)*u,Math.cos(f)*d*m))}return r}var co=null;function Mn(n){let e=Vo.node(n),o=e?.content?.bodyMap;if(!e||!o)return null;let r=Wo(o),t=new Set(r.map(u=>u.region)),s=u=>{let h=[],d=[];for(let f of u)for(let m of Ho[f].shapes){let p=Yr(f,m);h.push(...p.organs),d.push(...p.strands)}return{organs:h,strands:d}},a=o.overlays??[],i=[];for(let u of a)for(let h of $r[u]??[])for(let d of Go[h.key])for(let f of po(d,h.z))i.push({points:f,color:W(h.color)});let c=W(Do[e.tier]),l=Yo(r,!1).filter(u=>u.region!=="body").map(u=>({at:we(u.x,u.y,Tn[u.region]),r:Math.max(.035,u.r*xe*.85),rows:u.rows}));return a.includes("cells")&&!co&&(co=jr()),{node:n,tint:c,lit:s(t),ghosts:s(Co.filter(u=>!t.has(u))),lines:i,dots:a.includes("cells")?co??[]:[],beads:a.includes("autonomic")?zo.map(([u,h])=>we(u,h,-.07)):[],targets:l,rows:r,map:o,whole:o.scope==="systemic"||t.has("body"),skin:a.includes("skin")}}function En(n,e,o,r,t,s){let i=(b,g)=>[o.centre[0]+o.u[0]*b+o.n[0]*.012,g,o.centre[2]+o.u[2]*b+o.n[2]*.012],c=o.centre[1]+o.hv,l=i(r*(o.hu+.12),0),u=b=>Math.hypot(b[0]-l[0],b[2]-l[2]),h=n.targets.map(b=>e(b.at)),d=[];n.rows.forEach((b,g)=>{let E=null;if(n.targets.forEach((R,P)=>{let B=h[P];B&&R.rows.includes(b.index)&&(!E||u(B)<u(E))&&(E=B)}),!E){let R=e([.31,1.25,0]),P=e([-.31,1.25,0]);E=u(R)<u(P)?R:P}d.push({row:b.index,start:E,end:c-(t[g]??0)*2*o.hv})});let f=d.filter(b=>b.end<=b.start[1]).sort((b,g)=>g.start[1]-b.start[1]),m=d.filter(b=>b.end>b.start[1]).sort((b,g)=>b.start[1]-g.start[1]),p=[];for(let b of[f,m])b.forEach((g,E)=>{let R=r*(o.hu+.1+E*.05);p.push({row:g.row,points:[g.start,i(R,g.start[1]),i(R,g.end),i(r*(o.hu-s),g.end)]})});return p.sort((b,g)=>b.row-g.row)}function bo(n){let e=[];for(let o of n.organs)mt(e,o.centre,o.radii,o.rotZ,16);for(let o of n.strands)for(let r=1;r<o.points.length;r++){let t=o.points[r-1],s=o.points[r];kr(e,t,s,o.radius)}return new Float32Array(e)}function kr(n,e,o,r){let t=Ut(o,e);if(Math.hypot(t[0],t[1],t[2])<1e-6)return;let a=J(t),i=Math.abs(a[2])<.9?[0,0,1]:[1,0,0],c=J(mo(i,a)),l=mo(a,c),u=8,h=(d,f)=>{let m=[c[0]*Math.cos(f)+l[0]*Math.sin(f),c[1]*Math.cos(f)+l[1]*Math.sin(f),c[2]*Math.cos(f)+l[2]*Math.sin(f)];return[[d[0]+m[0]*r,d[1]+m[1]*r,d[2]+m[2]*r],m]};for(let d=0;d<u;d++){let f=d/u*Math.PI*2,m=(d+1)/u*Math.PI*2,[p,b]=h(e,f),[g,E]=h(e,m),[R,P]=h(o,f),[B,I]=h(o,m);n.push(...p,...b,...R,...P,...B,...I,...p,...b,...B,...I,...g,...E)}mt(n,o,[r,r,r],0,8)}var Xr=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyQ","KeyE","ShiftLeft","ShiftRight"]);function Kr(n){return n instanceof HTMLElement&&(n.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(n.tagName))}var Ht=class{keys=new Set;downAt=new Map;held=new Map;lastConsume=performance.now();dragX=0;dragY=0;zoom=0;pointers=new Map;press=null;pinch=0;el;h;off=[];constructor(e,o){this.el=e,this.h=o;let r=(a,i,c,l)=>{a.addEventListener(i,c,l),this.off.push(()=>a.removeEventListener(i,c,l))},t=(a,i)=>{window.addEventListener(a,i),this.off.push(()=>window.removeEventListener(a,i))};r(e,"pointerdown",a=>{a.button!==0&&a.pointerType==="mouse"||(e.setPointerCapture?.(a.pointerId),this.pointers.set(a.pointerId,{x:a.clientX,y:a.clientY}),this.pointers.size===1&&(this.press={x:a.clientX,y:a.clientY,moved:!1}),this.pointers.size===2&&(this.press=null,this.pinch=this.pinchDistance()),this.h.poke())}),r(e,"pointermove",a=>{let i=this.pointers.get(a.pointerId);if(!i){a.pointerType==="mouse"&&this.h.hover(a.clientX,a.clientY);return}let c=a.clientX-i.x,l=a.clientY-i.y;if(i.x=a.clientX,i.y=a.clientY,this.pointers.size===2){let u=this.pinchDistance();this.pinch>0&&u>0&&(this.zoom+=(this.pinch-u)*2.2),this.pinch=u}else this.press&&(!this.press.moved&&Math.hypot(a.clientX-this.press.x,a.clientY-this.press.y)>5&&(this.press.moved=!0),this.press.moved&&(this.dragX+=c,this.dragY+=l));this.h.poke()});let s=a=>{let i=this.press;this.pointers.delete(a.pointerId),this.pointers.size===0&&(i&&!i.moved&&a.type==="pointerup"&&this.h.click(a.clientX,a.clientY),this.press=null,this.pinch=0)};r(e,"pointerup",s),r(e,"pointercancel",s),r(e,"pointerleave",a=>{a.pointerType==="mouse"&&!this.pointers.has(a.pointerId)&&this.h.hover(-1,-1)}),r(e,"wheel",a=>{a.preventDefault(),this.zoom+=a.deltaMode===1?a.deltaY*32:a.deltaY,this.h.poke()},{passive:!1}),t("keydown",a=>{if(a.defaultPrevented||a.metaKey||a.ctrlKey||a.altKey||Kr(a.target)||this.h.blocked())return;let i=a.target===e||a.target===document.body||a.target===document.documentElement;if(a.key==="Escape"&&i){a.preventDefault(),this.h.back();return}if(a.key==="Enter"&&a.target===e){a.preventDefault(),this.h.activate();return}!i||!Xr.has(a.code)||(a.preventDefault(),this.keys.has(a.code)||this.downAt.set(a.code,performance.now()),this.keys.add(a.code),this.h.poke())}),t("keyup",a=>{if(!this.keys.has(a.code))return;let i=performance.now(),c=Math.max(this.downAt.get(a.code)??i,this.lastConsume);this.held.set(a.code,(this.held.get(a.code)??0)+Math.max(0,i-c)),this.keys.delete(a.code),this.downAt.delete(a.code),this.h.poke()}),t("blur",()=>{this.keys.clear(),this.downAt.clear(),this.held.clear()})}pinchDistance(){let[e,o]=[...this.pointers.values()];return e&&o?Math.hypot(e.x-o.x,e.y-o.y):0}get busy(){return this.keys.size>0||this.held.size>0||this.pointers.size>0}consume(){let e=performance.now(),o=Math.max(1,e-this.lastConsume),r=new Map;for(let a of new Set([...this.keys,...this.held.keys()])){let i=this.held.get(a)??0;this.keys.has(a)&&(i+=e-Math.max(this.downAt.get(a)??e,this.lastConsume)),r.set(a,Math.min(1,i/o))}this.held.clear(),this.lastConsume=e;let t=a=>r.get(a)??0,s={forward:t("KeyW")+t("ArrowUp")-t("KeyS")-t("ArrowDown"),strafe:t("KeyD")-t("KeyA"),turn:t("ArrowRight")+t("KeyE")-t("ArrowLeft")-t("KeyQ"),run:t("ShiftLeft")+t("ShiftRight")>.5,lookX:this.dragX,lookY:this.dragY,zoom:this.zoom};return this.dragX=0,this.dragY=0,this.zoom=0,s}dispose(){for(let e of this.off)e();this.keys.clear(),this.held.clear(),this.el}};var vo=384,go=288,Gt=class{gl;fbo;texture;tri;parallel;compiled=new Map;loading=new Set;order=[];showing=null;lastDraw=0;catalog;constructor(e,o=an){this.gl=e,this.catalog=o,this.parallel=e.getExtension("KHR_parallel_shader_compile");let r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,vo,go,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.texture=r,this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.tri=e.createVertexArray(),e.bindVertexArray(this.tri);let t=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}prepare(e){let o=this.compiled.get(e);return o?(!o.ready&&!o.failed&&this.poll(o),o.ready):(this.loading.has(e)||(this.loading.add(e),this.catalog.load(e).then(r=>{this.loading.delete(e),this.compile(e,r)}).catch(()=>this.loading.delete(e))),!1)}compile(e,o){let r=this.gl,t=this.catalog.tier(e),s=(u,h)=>{let d=r.createShader(u);return d&&(r.shaderSource(d,h),r.compileShader(d)),d},a=s(r.VERTEX_SHADER,Io),i=s(r.FRAGMENT_SHADER,Oo(o,1)),c=r.createProgram();if(!a||!i||!c)return;r.attachShader(c,a),r.attachShader(c,i),r.bindAttribLocation(c,0,"p"),r.linkProgram(c),r.deleteShader(a),r.deleteShader(i);let l={scene:o,tier:t,program:c,loc:new Map,ready:!1,failed:!1};for(this.compiled.set(e,l),this.order.push(e);this.order.length>3;){let u=this.order.findIndex(f=>f!==this.showing&&f!==e);if(u<0)break;let[h]=this.order.splice(u,1),d=h?this.compiled.get(h):void 0;h&&d&&(r.deleteProgram(d.program),this.compiled.delete(h))}this.poll(l)}poll(e){let o=this.gl;if(!(this.parallel&&!o.getProgramParameter(e.program,this.parallel.COMPLETION_STATUS_KHR))){if(!o.getProgramParameter(e.program,o.LINK_STATUS)){e.failed=!0;return}for(let r of["uRes","uOffset","uCamPos","uCamTarget","uFov","uAccent","uFloor","uRing","uTime","uZero","uBuild","uApart","uCut"])e.loc.set(r,o.getUniformLocation(e.program,r));e.ready=!0}}render(e,o,r){let t=this.compiled.get(e);if(!t?.ready)return!1;let s=performance.now();if(this.showing===e&&s-this.lastDraw<r)return!1;this.lastDraw=s;let a=this.gl,i=No(t.scene),c=Bo(t.scene),l;if(c.az){let d=(c.az[0]+c.az[1])/2,f=(c.az[1]-c.az[0])/2;l={...i,az:d+Math.sin(o*.15)*f*.6}}else l={...i,az:i.az+o*6};let u=t.scene.poster??1.5,h=Uo(t.scene,t.tier,l,u+o);a.bindFramebuffer(a.FRAMEBUFFER,this.fbo),a.viewport(0,0,vo,go),a.disable(a.DEPTH_TEST),a.disable(a.BLEND),a.useProgram(t.program),a.uniform2f(t.loc.get("uRes")??null,vo,go),a.uniform2f(t.loc.get("uOffset")??null,0,0),a.uniform1i(t.loc.get("uZero")??null,0);for(let[d,f]of Object.entries(h)){let m=t.loc.get(d)??null;f.length===3?a.uniform3f(m,f[0]??0,f[1]??0,f[2]??0):a.uniform1f(m,f[0]??0)}return a.bindVertexArray(this.tri),a.drawArrays(a.TRIANGLES,0,3),a.bindVertexArray(null),a.bindFramebuffer(a.FRAMEBUFFER,null),a.enable(a.DEPTH_TEST),this.showing=e,!0}failed(e){return this.compiled.get(e)?.failed===!0}dispose(){let e=this.gl;for(let o of this.compiled.values())e.deleteProgram(o.program);e.deleteFramebuffer(this.fbo),e.deleteTexture(this.texture)}};var Ae=n=>n.toFixed(4),j=`#version 300 es
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
`,pt=`
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
`,xo=`
uniform vec3 uFog;
uniform vec3 uFogDisplay;
uniform float uFogDensity;
// Aerial haze, denser near the ground: distance fades toward the silver horizon.
float hazeK(vec3 p, float dist) { return 1.0 - exp(-dist * uFogDensity * (0.35 + 0.65 * exp(-max(p.y, 0.0) * 0.015))); }
vec3 haze(vec3 col, vec3 p, float dist) { return mix(col, uFog, hazeK(p, dist)); }
`;function zt(n,e){if(!e)return n;let o=n.replace(/const float HALF_ = [^;]+;/,`const float HALF_ = ${Ae(e.half)};`).replace(/const float RING_ = [^;]+;/,`const float RING_ = ${Ae(e.ring)};`).replace(/const float ATRIUM_ = [^;]+;/,`const float ATRIUM_ = ${Ae(e.atrium)};`);return e.levels!==void 0&&(o=o.replace(/const float ROOF_ = [^;]+;/,`const float ROOF_ = ${Ae(ye*e.levels)};`).replace(/const float TOP_ = [^;]+;/,`const float TOP_ = ${Ae(e.levels-1)};`)),o}var Rn=`
const float HALF_ = ${Ae(G)};
const float RING_ = ${Ae(V)};
const float ATRIUM_ = ${Ae(z)};
const float FLOOR_H_ = ${Ae(ye)};
const float SLAB_ = ${Ae(ne)};
const float ROOF_ = ${Ae(ye*Je)};
/** The top level's index: the atrium's ceiling band stops below it. */
const float TOP_ = ${Ae(Je-1)};
const float CINEMA_ = ${Ae(et)};
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
`,qr=`
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
`,An=`
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
`,Wt=`${j}
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
`,wo=`${j}
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
${pt}
${yo}
${xo}
${Rn}
${qr}
${An}
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
`,Sn=wo.replace(`#version 300 es
`,`#version 300 es
#define CLIP 1
`),Fn=`${j}
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
${pt}
${yo}
${xo}
${Rn}
${An}
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
`,Ie=`${j}
layout(location = 0) in vec2 aPos;
out vec2 vNdc;
void main() {
  vNdc = aPos;
  gl_Position = vec4(aPos, 1.0, 1.0);
}
`,_n=`${j}
in vec2 vNdc;
uniform mat4 uInvViewProj;
uniform vec3 uCamPos;
uniform vec3 uSun;
uniform vec3 uSunColor;
${ve}
${yo}
#if Q == 1
${pt}
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
`,Ln=`${j}
in vec2 vNdc;
uniform vec3 uSun;
${pt}
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
`,Vn=`${j}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
void main() {
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,Dn=`${j}
void main() {}
`,On=`${j}
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
`,In=`${j}
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
${xo}
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
`,Nn=`${j}
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
`,Bn=`${j}
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
`,Hn=`${j}
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec2 aUv;
uniform mat4 uViewProj;
out vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,Gn=`${j}
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
`,Wn=`${j}
uniform vec4 uColor;
${ve}
out vec4 frag;
void main() {
  frag = vec4(uiOut(uColor.rgb / max(uColor.a, 1e-4)) * uColor.a, uColor.a);
}
`,bt=`${j}
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
`,Yn=`${j}
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
`,$n=`${j}
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
`,jn=`${j}
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
`,kn=`${j}
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
`,Kn=`${j}
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
`,qn=`${j}
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
`,Qn=`${j}
in vec2 vNdc;
uniform vec3 uGTop;
uniform vec3 uGBottom;
uniform float uGAmount;
out vec4 frag;
void main() {
  vec3 w = mix(uGBottom, uGTop, vNdc.y * 0.5 + 0.5);
  vec3 t = w / max(dot(w, vec3(0.2126, 0.7152, 0.0722)), 0.05);
  frag = vec4(mix(vec3(1.0), min(t, vec3(1.6)), uGAmount * 0.42), 1.0);
}
`,Zn=`${j}
in vec2 vNdc;
uniform float uDim;
out vec4 frag;
void main() {
  float v = smoothstep(0.35, 1.45, length(vNdc));
  float a = uDim * (0.66 + 0.3 * v);
  frag = vec4(vec3(0.0) * a, a);
}
`,Jn=`${j}
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
`,er=`${j}
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
`,tr=`${j}
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
`,or=`${j}
in vec2 vNdc;
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform float uBloomStrength;
uniform float uExposure;
uniform float uGrain;
uniform float uTime;
// The place's colour grade (the design outlet: a level's colours, a studio's): shadows, middle, highlights, the
// wash from top to bottom, and how strongly the view takes them (0: the neutral finish).
uniform vec3 uGShadow;
uniform vec3 uGMid;
uniform vec3 uGHigh;
uniform vec3 uGTop;
uniform vec3 uGBottom;
uniform float uGAmount;
out vec4 frag;
const vec3 LUMA = vec3(0.2126, 0.7152, 0.0722);
vec3 softLight(vec3 a, vec3 b) {
  vec3 lo = 2.0 * a * b + a * a * (1.0 - 2.0 * b);
  vec3 hi = 2.0 * a * (1.0 - b) + sqrt(max(a, 0.0)) * (2.0 * b - 1.0);
  return mix(lo, hi, step(0.5, b));
}
/** Deep and cinematic: each tone takes its colour (keeping its brightness), the shadows sink into the shadow colour, the wash blends over the whole, and the colour runs strong. */
vec3 grade(vec3 c, vec2 uv) {
  // A deeper exposure than the neutral finish: the colour has room to be rich.
  c *= 0.86;
  float l = dot(c, LUMA);
  float ws = 1.0 - smoothstep(0.04, 0.42, l);
  float wh = smoothstep(0.5, 0.95, l);
  float wm = max(0.0, 1.0 - ws - wh);
  vec3 tint = uGShadow * ws + uGMid * wm + uGHigh * wh;
  vec3 hue = tint / max(dot(tint, LUMA), 0.03);
  vec3 g = mix(c, clamp(l * hue, 0.0, 1.0), 0.6);
  g = mix(g, uGShadow, ws * 0.3);
  g = softLight(clamp(g, 0.0, 1.0), mix(uGBottom, uGTop, uv.y));
  // Deep: an S-curve, the darks down and the lights up, then the colour run strong.
  g = mix(g, g * g * (3.0 - 2.0 * g), 0.45);
  float l2 = dot(g, LUMA);
  g = mix(vec3(l2), g, 1.3);
  return clamp(g, 0.0, 1.0);
}
vec3 tone(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
void main() {
  vec2 uv = vNdc * 0.5 + 0.5;
  // The glow takes the place's highlight colour as the grade comes up.
  vec3 glow = texture(uBloom, uv).rgb * mix(vec3(1.0), uGHigh * 1.35 + 0.15, uGAmount * 0.6);
  vec3 c = texture(uScene, uv).rgb + glow * uBloomStrength;
  c = tone(c * uExposure);
  float l = dot(c, LUMA);
  c = mix(c, c * vec3(0.96, 0.99, 1.05), (1.0 - l) * 0.3);
  c = mix(c, c * vec3(1.015, 1.0, 0.985), l * 0.2);
  c = pow(c, vec3(1.0 / 2.2));
  if (uGAmount > 0.001) c = mix(c, grade(c, uv), uGAmount);
  vec2 q = uv - 0.5;
  float vig = smoothstep(0.25, 0.95, length(q * vec2(1.0, 0.82)));
  c *= 1.0 - vig * 0.22;
  // At the edges the dark goes into the place's shadow colour, not to grey.
  c = mix(c, uGShadow * 0.7, vig * 0.45 * uGAmount);
  c += (hash(gl_FragCoord.xy + fract(uTime * 7.31) * 113.0) - 0.5) * uGrain;
  frag = vec4(c, 1.0);
}
`,nr=`${j}
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
`,rr=`${j}
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
`,sr=`${j}
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
${pt}
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
`,ar=`${j}
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
`,ir=`${j}
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
`,lr=`${j}
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
`,ur=`${j}
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
`,cr=`${j}
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
`;var hr={gloss:.4,emit:1},Qr={gloss:.9,pattern:4},Ee=Math.PI*2;function Zr(n){let e=n>>>0||1;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function dr(n,e,o,r){let t=o.span,s=o.depth,a=o.top-o.bottom,i=(d,f,m)=>[o.at[0]+o.along[0]*d+o.inward[0]*m,o.bottom+f,o.at[1]+o.along[1]*d+o.inward[1]*m],c=d=>d?r.glow:r.body,l=d=>d?hr:r.material,u={p:i,W:t,D:s,H:a,rand:Zr(r.seed),m:n,body:r.body,material:r.material,glow:r.glow,curve:(d,f,m=8,p=!1,b=!1)=>n.sweep(d,f,m,c(b),l(b),p),rod:(d,f,m,p=!1)=>n.sweep([d,f],m,5,c(p),l(p)),bead:(d,f,m=!1,p=6)=>n.sphere(d,f,p,c(m),l(m)),box:(d,f,m,p,b,g,E=!1)=>{let R=i(d,f,m),P=i(p,b,g);n.box([Math.min(R[0],P[0]),Math.min(R[1],P[1]),Math.min(R[2],P[2])],[Math.max(R[0],P[0]),Math.max(R[1],P[1]),Math.max(R[2],P[2])],c(E),l(E))},strip:(d,f,m,p=!1)=>n.strip(d,f,m,c(p),l(p)),hang:d=>{for(let f of d)n.sweep([f,[f[0],o.ceiling,f[2]]],.006,4,[.75,.77,.8],{...Qr,ao:r.light})},inside:d=>{let f=d[0]-o.at[0],m=d[2]-o.at[1],p=Math.max(-t/2,Math.min(t/2,f*o.along[0]+m*o.along[1])),b=Math.max(-s/2,Math.min(s/2,f*o.inward[0]+m*o.inward[1]));return i(p,Math.max(0,Math.min(a,d[1]-o.bottom)),b)}},h=(d,f,m)=>J([o.along[0]*d+o.inward[0]*m,f,o.along[1]*d+o.inward[1]*m]);switch(e.motif){case"helix":return Jr(u);case"cluster":return es(u,e.variant);case"ribbons":return ts(u,e.variant,h);case"chain":return os(u,e.variant);case"rings":return ns(u,e.variant);case"loops":return rs(u,e.variant);case"wheel":return ss(u);case"branches":return as(u,e.variant,h);case"lattice":return is(u,e.variant);case"strata":return us(u,e.variant,h);case"strands":return cs(u);case"spiral":return hs(u,e.variant)}}function Ce(n,e,o,r,t,s,a,i,c=0){let l=[];for(let u=0;u<i;u++){let h=u/i*Ee,d=Math.cos(h)*t,f=Math.sin(h)*s;a==="uv"?l.push(n.p(e+d,o+f*Math.sin(c),r+f*Math.cos(c))):a==="uh"?l.push(n.p(e+d,o+f,r+d*Math.sin(c))):l.push(n.p(e+d*Math.sin(c),o+f,r+d))}return l}function Jr(n){let e=n.W*.92,o=Math.min(.56,n.H*.36),r=n.H*.5,t=3.2,s=.42*Ee,a=(c,l)=>{let u=Ee*t*c+l;return n.p(-e/2+e*c,r+o*Math.sin(u),o*Math.cos(u))};for(let c of[0,s]){let l=[];for(let u=0;u<=60;u++)l.push(a(u/60,c));n.curve(l,.045,7)}let i=Math.round(t*9);for(let c=0;c<i;c++){let l=(c+.5)/i,u=a(l,0),h=a(l,s);n.rod(u,h,.014),n.bead([(u[0]+h[0])/2,(u[1]+h[1])/2,(u[2]+h[2])/2],.032,!0)}n.hang([a(.02,0),a(.5,0),a(.98,0)].map(c=>[c[0],n.p(0,r+o,0)[1],c[2]]))}function es(n,e){let o=[],r=e==="cells"?13:9;for(let t=0;t<900&&o.length<r;t++){let s=e==="cells"?.16+n.rand()*.28:.17+n.rand()*.16,a=[(n.rand()-.5)*(n.W-2*s-.4),s+.1+n.rand()*(n.H-2*s-.2),(n.rand()-.5)*(n.D-2*s-.3)];o.every(i=>Math.hypot(i.c[0]-a[0],i.c[1]-a[1],i.c[2]-a[2])>i.r+s+.08)&&o.push({c:a,r:s})}o.forEach(({c:t,r:s},a)=>{let i=n.p(t[0],t[1],t[2]);if(n.m.sphere(i,s,12,n.body,n.material),e==="cells")n.bead(n.p(t[0]+s*.18,t[1]-s*.78,t[2]-s*.25),s*.36,!0,8);else for(let c=0;c<12;c++){let l=Math.acos(1-2*(c+.5)/12),u=c*2.39996+a,h=[Math.sin(l)*Math.cos(u),Math.cos(l),Math.sin(l)*Math.sin(u)],d=n.p(t[0]+h[0]*s,t[1]+h[1]*s,t[2]+h[2]*s),f=n.p(t[0]+h[0]*(s+.13),t[1]+h[1]*(s+.13),t[2]+h[2]*(s+.13));n.rod(d,f,.012,a%3===0)}}),n.hang(o.slice(0,5).map(({c:t,r:s})=>n.p(t[0],t[1]+s,t[2])))}function ts(n,e,o){let r=n.W*.9,t=n.H*.5;(e==="folds"?[-.9,-.3,.3,.9]:[-.7,0,.7]).forEach((a,i)=>{let c=[],l=[],u=[],h=e==="folds"?150:110;for(let d=0;d<=h;d++){let f=d/h,m=-r/2+r*f,p,b=0;if(e==="folds"){let E=Math.sin(m/.85*Ee+i*.9);p=t+.5*(Math.tanh(3*E)/Math.tanh(3))}else p=t+.38*Math.sin(m/3.1*Ee+i*1.7)+.08*Math.sin(m/.9*Ee+i),b=.9*Math.sin(m/2.4*Ee+i*2.1);let g=a+(e==="waves"?.18*Math.sin(m/1.7*Ee+i):0);c.push(n.p(m,p,g)),l.push(e==="folds"?o(0,0,1):o(0,Math.sin(b),Math.cos(b))),u.push(n.p(m,p+(e==="folds"?.012:0),g+(e==="folds"?-.21:0)))}n.strip(c,l,e==="folds"?.42:.34),i%2===0&&n.curve(u.filter((d,f)=>f%2===0),.009,4,!1,!0)}),n.hang([n.p(-r/2+.2,t+.5,0),n.p(0,t+.5,0),n.p(r/2-.2,t+.5,0)])}function os(n,e){let o=n.H*.5;if(e==="twin"){for(let c of[-.48,.48]){let l=n.W*.88;n.rod(n.p(-l/2,o,c),n.p(l/2,o,c),.02);let u=12;for(let h=0;h<u;h++){let d=-l/2+.25+h/(u-1)*(l-.5),f=n.p(d,o,c);n.bead(f,.075,h%3===1,8),n.rod(f,n.p(d+.12,o-.32,c+Math.sign(c)*.34),.008)}}n.hang([n.p(-n.W*.4,o,0),n.p(n.W*.4,o,0)]);return}let r=[];for(let c=0;c<9;c++)r.push([-n.W*.42+c/8*n.W*.84,.25+n.rand()*(n.H-.5),(n.rand()-.5)*(n.D-.6)]);let t=[],s=(c,l,u,h,d)=>.5*(2*l+(-c+u)*d+(2*c-5*l+4*u-h)*d*d+(-c+3*l-3*u+h)*d*d*d);for(let c=0;c<r.length-1;c++)for(let l=0;l<14;l++){let u=l/14,h=d=>r[Math.max(0,Math.min(r.length-1,d))];t.push([0,1,2].map(d=>s(h(c-1)[d]??0,h(c)[d]??0,h(c+1)[d]??0,h(c+2)[d]??0,u)))}let i=t.map((c,l)=>{let u=l/t.length;if(![.18,.5,.78].some(f=>Math.abs(u-f)<.07))return c;let d=l*1.1;return[c[0],c[1]+Math.sin(d)*.12,c[2]+Math.cos(d)*.12]}).map(c=>n.p(c[0],c[1],c[2]));n.curve(i,.018,5);for(let c=0;c<i.length;c+=3)n.bead(i[c],.05,c%21===0,6);n.hang([i[0],i[Math.floor(i.length/2)],i[i.length-1]])}function ns(n,e){let o=n.H*.5;if(e==="gyro"){let s=Math.min(.7,n.H*.45);n.bead(n.p(0,o,0),.12,!0,12),[s,s*.8,s*.6].forEach((a,i)=>n.curve(Ce(n,0,o,0,a,a,i===1?"uh":"hv",48,i*.6),.024,6,!0)),n.rod(n.p(-n.W*.36,o,0),n.p(n.W*.36,o,0),.02);for(let a of[-1,1])n.bead(n.p(a*n.W*.36,o,0),.13,!1,12);n.hang([n.p(0,o+s,0),n.p(-n.W*.36,o,0),n.p(n.W*.36,o,0)]);return}if(e==="ripples"){for(let s=0;s<6;s++){let a=.28+s*.47;n.curve(Ce(n,0,o+.32-s*.1,0,a,a*.42,"uv",48),.03-s*.003,4,!0,s===0||s===3)}n.bead(n.p(0,o+.55,0),.09,!0,10),n.hang([n.p(0,o+.55,0),n.p(-2.5,o-.18,0),n.p(2.5,o-.18,0)]);return}if(e==="pulse"){let s=i=>{let c=(l,u,h)=>h*Math.exp(-(((i-l)/u)**2));return .2+c(.14,.05,.1)+c(.34,.035,.5)+c(.42,.04,-.06)+c(.6,.06,.14)+c(.86,.035,.42)};for(let i=0;i<15;i++){let c=i/14,l=Math.min(n.H*.47,s(c));n.curve(Ce(n,-n.W*.44+c*n.W*.88,o,0,l,l,"hv",24),.02,4,!0,l>.5)}n.rod(n.p(-n.W*.46,o,0),n.p(n.W*.46,o,0),.01,!0),n.hang([n.p(-n.W*.44,o+.2,0),n.p(0,o+.3,0),n.p(n.W*.44,o+.2,0)]);return}let r=7,t=Math.min(n.H*.47,.72);for(let s=0;s<r;s++){let a=-n.D*.42+s/(r-1)*n.D*.84,i=t*(1-s*.1);n.curve(Ce(n,0,o,a,i,i,"uh",40),.02,5,!0,s===2||s===5)}n.bead(n.p(0,o,n.D*.42),.15,!0,12);for(let s of[-1,1])n.curve(Ce(n,s*n.W*.31,o,0,.62,.62*.4,"uv",40),.016,4,!0);n.hang([n.p(0,o+t,-n.D*.42),n.p(0,o+t*.4,n.D*.42),n.p(-n.W*.31,o,0),n.p(n.W*.31,o,0)])}function rs(n,e){let o=n.H*.5;if(e==="eight"){let s=[],a=n.W*.46;for(let i=0;i<120;i++){let c=i/120*Ee,l=1+Math.sin(c)**2;s.push(n.p(a*Math.cos(c)/l,o+.3*Math.sin(c),a*Math.sin(c)*Math.cos(c)/l*.62))}n.curve(s,.055,8,!0);for(let i=0;i<120;i+=9)n.bead(s[i],.07,!0,8);n.hang([s[0],s[30],s[60],s[90]]);return}if(e==="hairpin"){let s=n.H-.08;n.rod(n.p(-n.W*.44,s,0),n.p(n.W*.44,s,0),.03);for(let a=0;a<5;a++){let i=-n.W*.34+a/4*n.W*.68,c=.75+a*37%5*.1,l=.14,u=[];for(let h=0;h<=10;h++)u.push(n.p(i-l,s-h/10*c,0));for(let h=1;h<10;h++){let d=Math.PI+h/10*Math.PI;u.push(n.p(i+Math.cos(d)*l,s-c+Math.sin(d)*l,0))}for(let h=10;h>=0;h--)u.push(n.p(i+l,s-h/10*c,0));n.curve(u,.03,5),n.bead(n.p(i,s-c-l,0),.055,!0,8)}n.hang([n.p(-n.W*.4,s,0),n.p(0,s,0),n.p(n.W*.4,s,0)]);return}let r=n.W*.9,t=[];for(let s=0;s<=120;s++){let a=s/120,i=a*Ee*6.5;t.push(n.p(-r/2+r*a,o+.42*Math.sin(i),.42*Math.cos(i)+.25*Math.sin(a*Math.PI*2)))}n.curve(t,.05,8);for(let s=6;s<t.length;s+=18)n.bead(t[s],.06,!0,8);n.hang([t[10],t[60],t[110]])}function ss(n){let e=n.H*.5,o=Math.min(.68,n.H*.44),r=Ce(n,-.62,e,0,o,o,"uh",56),t=Ce(n,.62,e,0,o*.82,o*.82,"hv",56);n.curve(r,.04,8,!0),n.curve(t,.04,8,!0);for(let s=0;s<56;s+=7)n.bead(r[s],.075,s%14===0,8),n.bead(t[(s+3)%56],.065,s%14===7,8);n.hang([n.p(-.62,e+o,0),n.p(.62,e+o*.82,0)])}function as(n,e,o){let r=[],t=(s,a,i,c,l,u)=>{let h=n.inside([s[0]+a[0]*i,s[1]+a[1]*i,s[2]+a[2]*i]);if(n.m.sweep([s,h],[c,c*.72],5,n.body,n.material),l===0){r.push(h);return}for(let d of[-1,1]){let f=(n.rand()-.5)*.2,m=e==="down"?u%2===1?Yt(a,o(0,-.15,d*(.62+f))):Yt(a,o(d*(.55+f),-.25,0)):u%2===1?Yt(a,o(0,0,d*(.42+f))):Yt(a,o(0,d*(.3+f),0));t(h,J(m),i*(.7+n.rand()*.06),c*.74,l-1,u+1)}};if(e==="down"){let s=n.p(0,n.H,0),a=n.p(0,n.H-.32,0);n.m.sweep([s,a],[.075,.065],6,n.body,n.material);for(let i of[-1,1])t(a,J(o(i,-.42,0)),1.25,.055,4,1)}else{let s=n.p(-n.W*.47,n.H*.55,0);t(s,o(1,0,0),1.05,.055,5,0)}for(let s of r)n.bead(s,.045,!0,6);n.hang(e==="down"?[]:[n.p(-n.W*.4,n.H*.55,0),n.p(-n.W*.1,n.H*.55,0)])}function Yt(n,e){return[n[0]+e[0],n[1]+e[1],n[2]+e[2]]}function is(n,e){let o=n.H*.5,r=n.W*.46,t=n.D*.42;if(e==="weave"){[-.36,0,.36].forEach((s,a)=>{let i=(a%2===0?1:-1)*.5,c=Math.cos(i),l=Math.sin(i);for(let u=-12;u<=12;u++){let h=u*.42,d=-10,f=10,m=[];for(let b of[d,f])m.push([c*b-l*h,l*b+c*h]);let p=ls(m[0],m[1],r,t);p&&n.rod(n.p(p[0][0],o+s,p[0][1]),n.p(p[1][0],o+s,p[1][1]),.012,u%5===0)}}),n.hang([n.p(-r*.8,o+.36,0),n.p(0,o+.36,0),n.p(r*.8,o+.36,0)]);return}if(e==="network"||e==="struts"){if(e==="struts"){let c=[[.25,-.45],[.25,.45],[n.H-.3,0]];for(let[u,h]of c)n.rod(n.p(-r,u,h),n.p(r,u,h),.022);let l=12;for(let u=0;u<=l;u++){let h=-r+u/l*2*r,d=-r+(u+.5)/l*2*r;u<l&&(n.rod(n.p(h,.25,-.45),n.p(d,n.H-.3,0),.014),n.rod(n.p(h,.25,.45),n.p(d,n.H-.3,0),.014),n.rod(n.p(h,.25,-.45),n.p(d,.25,.45),.006,!0))}n.hang([n.p(-r*.9,n.H-.3,0),n.p(0,n.H-.3,0),n.p(r*.9,n.H-.3,0)]);return}let s=[];for(let c=0;c<600&&s.length<24;c++){let l=[(n.rand()-.5)*2*r,.15+n.rand()*(n.H-.3),(n.rand()-.5)*2*t];s.every(u=>Math.hypot(u[0]-l[0],u[1]-l[1],u[2]-l[2])>.55)&&s.push(l)}let a=new Set;s.forEach((c,l)=>{let u=s.map((h,d)=>({j:d,d:Math.hypot(h[0]-c[0],h[1]-c[1],h[2]-c[2])})).filter(h=>h.j!==l).sort((h,d)=>h.d-d.d).slice(0,3);for(let{j:h}of u){let d=l<h?`${l}-${h}`:`${h}-${l}`;if(a.has(d))continue;a.add(d);let f=s[h];n.rod(n.p(c[0],c[1],c[2]),n.p(f[0],f[1],f[2]),.01,(l+h)%7===0)}n.bead(n.p(c[0],c[1],c[2]),.06+l%3*.02,l%3===0,8)});let i=s.slice().sort((c,l)=>l[1]-c[1]).slice(0,4);n.hang(i.map(c=>n.p(c[0],c[1],c[2])));return}if(e==="hex"){let a=Math.sqrt(3)*.42,i=new Map,c=[];for(let l=-1;l<=1;l++)for(let u=-4;u<=4;u++){let h=u*1.5*.42,d=l*a+(u%2===0?0:a/2);if(Math.abs(h)>r-.42||Math.abs(d)+.42>n.D/2)continue;let f=o+.06*Math.sin(u*1.3+l);c.push(n.p(h,f,d));for(let m=0;m<6;m++){let p=m/6*Ee,b=(m+1)/6*Ee,g=[h+Math.cos(p)*.42,d+Math.sin(p)*.42],E=[h+Math.cos(b)*.42,d+Math.sin(b)*.42],R=[g,E].map(P=>`${P[0].toFixed(2)},${P[1].toFixed(2)}`).sort().join("|");i.has(R)||i.set(R,[n.p(g[0],f,g[1]),n.p(E[0],f,E[1])])}}for(let[l,u]of i.values())n.rod(l,u,.014);for(let l of c)n.bead(l,.05,!0,6);n.hang([c[0],c[Math.floor(c.length/2)],c[c.length-1]].filter(l=>l!==void 0));return}for(let s=0;s<9;s++)for(let a=0;a<2;a++)for(let i=0;i<3;i++){let c=-r+.2+s/8*(2*r-.4),l=.25+a/1*(n.H-.5),u=-t+.15+i/2*(2*t-.3),h=.07+(s+a*3+i*5)%4*.012;n.box(c-h,l-h,u-h,c+h,l+h,u+h,(s*7+a*3+i*11)%9===0)}for(let s=0;s<9;s++){let a=-r+.2+s/8*(2*r-.4);n.rod(n.p(a,.25,-t+.15),n.p(a,.25,t-.15),.006),n.rod(n.p(a,n.H-.25,-t+.15),n.p(a,n.H-.25,t-.15),.006)}n.hang([n.p(-r+.2,n.H-.25,0),n.p(r-.2,n.H-.25,0)])}function ls(n,e,o,r){let t=0,s=1,a=[e[0]-n[0],e[1]-n[1]],i=[[-a[0],n[0]+o],[a[0],o-n[0]],[-a[1],n[1]+r],[a[1],r-n[1]]];for(let[c,l]of i){if(c===0){if(l<0)return null;continue}let u=l/c;if(c<0?t=Math.max(t,u):s=Math.min(s,u),t>s)return null}return[[n[0]+a[0]*t,n[1]+a[1]*t],[n[0]+a[0]*s,n[1]+a[1]*s]]}function us(n,e,o){let r=n.W*.46;if(e==="steps"){for(let a=0;a<7;a++){let i=-r+a/7*2*r+.05,c=i+2*r/7-.14,l=.12+a/6*(n.H-.4);n.box(i,l,-.75,c,l+.05,.75),n.box(i,l+.05,.73,c,l+.065,.75,!0),n.hang([n.p((i+c)/2,l+.05,-.6),n.p((i+c)/2,l+.05,.6)])}return}if(e==="sheets"){for(let s=0;s<4;s++){let a=.25+s*((n.H-.5)/3),i=24,c=6,l=n.D*.36-s*.05,u=(h,d)=>{let f=-r+h/i*2*r,m=-l+d/c*2*l;return n.p(f,a+.07*Math.sin(f*1.6+s*1.1)*Math.cos(m*2.1+s),m)};for(let h=0;h<i;h++)for(let d=0;d<c;d++)n.m.quad(u(h,d),u(h+1,d),u(h+1,d+1),u(h,d+1),n.body,n.material);s===3&&n.curve(Array.from({length:i+1},(h,d)=>u(d,c)),.008,4,!1,!0),s===3&&n.hang([u(2,3),u(12,3),u(22,3)])}return}if(e==="arch"){for(let a=0;a<12;a++){let i=Math.PI*(.08+.84*a/11),c=Math.cos(i)*r*.82,l=-Math.sin(i)*n.D*.32+n.D*.14,u=.55+.6*Math.sin(i)**2,h=.1+.05*Math.sin(i),d=n.p(c,0,l);n.m.cylinder(d[0],d[2],h,$t(n)-u,$t(n),16,n.body,n.material),n.m.disc([d[0],$t(n)-u-.002,d[2]],[0,1,0],h*.55,h*.8,16,n.glow,hr),n.hang([[d[0],$t(n),d[2]]])}return}let t=9;for(let s=0;s<t;s++){let a=-r+.3+s/(t-1)*(2*r-.6),i=n.H*.5+.12*Math.sin(s*1.3),c=(l,u)=>{let h=Math.sin(l)*.36,d=(1-Math.cos(l))*.3;return n.p(a+d*.6,i+h*.25,u*.55)};for(let l=0;l<6;l++)for(let u=-2;u<2;u++){let h=-.9+l/6*1.8,d=-.9+(l+1)/6*1.8;n.m.quad(c(h,u/2),c(d,u/2),c(d,(u+1)/2),c(h,(u+1)/2),n.body,n.material,o(-1,0,0))}n.rod(c(-.9,0),c(.9,0),.006,s%3===1),n.hang([c(0,-.8),c(0,.8)])}}function $t(n){return n.p(0,n.H,0)[1]}function cs(n){let e=n.H-.05,o=n.W*.44;n.rod(n.p(-o,e,0),n.p(o,e,0),.03);for(let r=0;r<38;r++){let t=-o+.1+r/37*(2*o-.2),s=(n.rand()-.5)*.5,a=.7+n.rand()*.6,i=n.rand()*Ee,c=[];for(let l=0;l<=5;l++){let u=l/5;c.push(n.p(t+.06*Math.sin(i+u*3),e-u*a,s+.05*Math.cos(i+u*2.4)))}n.curve(c,[.012,.011,.01,.009,.008,.007],4,!1,r%7===3)}n.hang([n.p(-o*.9,e,0),n.p(0,e,0),n.p(o*.9,e,0)])}function hs(n,e){let o=n.H*.5;if(e==="spiral"){let r=[],t=[];for(let s=0;s<=140;s++){let a=s/140,i=a*Ee*3,c=.12+1.15*a**1.3;r.push(n.p(Math.cos(i)*c*2,o-.3+a*.55,Math.sin(i)*c*.85)),t.push(.012+.04*a)}n.curve(r,t,6);for(let s=10;s<r.length;s+=13)n.bead(r[s],.05,!0,6);n.hang([r[20],r[80],r[139]]);return}n.bead(n.p(0,o,0),.16,!0,14);for(let r=0;r<5;r++){let t=.7+r*.5,s=Math.min(n.D*.45,.32+r*.2),a=Ce(n,0,o,0,t,s,"uv",56,(r-2)*.12);n.curve(a,.014,4,!0),n.bead(a[r*11%56],.06+r%2*.02,r%2===0,8)}n.hang([n.p(0,o+.16,0),n.p(-2.6,o,0),n.p(2.6,o,0)])}var He=J([-.53,.6,.6]),ma=de(Je),fr=2.6,ge={sun:[2.55,2.42,2.22],sky:[.78,.84,.94],ground:[.4,.39,.37],interior:[.5,.495,.48],panel:3.4,emit:3.4,fog:[.86,.89,.93],fogDensity:45e-5,exposure:.8,exposureInside:1.35,bloomThreshold:2.2,bloomStrength:.16,grain:.016},br=10,To=7,w={stoneFloor:W("#C3BDB2"),lobbyFloor:W("#CBC5BA"),graphite:W("#3A3D42"),graphiteDeep:W("#25272B"),travertine:W("#E6E0D5"),band:W("#E2DCD1"),plaster:W("#EFEEEB"),panel:W("#FFFFFF"),titanium:W("#A9AEB4"),fin:W("#57524C"),steel:W("#CDD2D7"),bronze:W("#9E8566"),blackGlass:W("#0B0D10"),paving:W("#B5AFA5"),plateau:W("#7C7D75"),water:W("#0A0C0F"),glass:W("#CFE0DC"),facadeGlass:W("#9DB0BF"),glassFloor:W("#E4EBEA"),frosted:W("#E9EEF0"),leather:W("#1B1A19"),carpet:W("#1F2225"),foliage:W("#34503A"),foliageLight:W("#4A6A45"),bark:W("#4B3D31"),soil:W("#2A2622"),runner:W("#E3232C"),runnerInlay:W("#A8262B"),warm:W("#FFE2B8"),marble:W("#ECE9E3"),terrazzo:W("#D8D2C8"),darkCeiling:W("#17181B"),fabric:W("#1C1D20"),cushion:W("#2A2B2E"),porcelain:W("#F3F1EC"),brass:W("#B99B66")},M={stoneFloor:{gloss:.9,pattern:1},graphiteFloor:{gloss:.9,pattern:5},graphite:{gloss:.82,pattern:5},stoneWall:{gloss:.28,pattern:2},band:{gloss:.4,pattern:2},plaster:{gloss:.08,pattern:10},panel:{gloss:.1,emit:1},line:{gloss:.2,emit:.55},titanium:{gloss:.62,pattern:3},steel:{gloss:.94,pattern:4},bronze:{gloss:.6,pattern:9},blackGlass:{gloss:.96,pattern:13},paving:{gloss:.45,pattern:12},plateau:{gloss:.1,pattern:15},water:{gloss:.985,pattern:6},leather:{gloss:.55,pattern:7},carpet:{gloss:.05,pattern:8},foliage:{gloss:.3,pattern:11},bark:{gloss:.2,pattern:14},matte:{gloss:.15},paint:{gloss:.18,pattern:10},walnut:{gloss:.42,pattern:16},marble:{gloss:.88,pattern:1},terrazzo:{gloss:.78,pattern:17},terrazzoFloor:{gloss:.86,pattern:17},fabric:{gloss:.04,pattern:8},chrome:{gloss:.95,pattern:4},porcelain:{gloss:.7},polishedBrass:{gloss:.86,pattern:4}},ds={blackGlass:[W("#0E0F12"),{gloss:.3}],bronze:[w.bronze,{gloss:.38,pattern:9}],steel:[w.titanium,{gloss:.38,pattern:3}],travertine:[w.travertine,M.stoneWall],marble:[w.marble,{gloss:.45,pattern:1}],graphite:[w.graphite,{gloss:.32,pattern:5}],terrazzo:[w.terrazzo,{gloss:.4,pattern:17}]},fs={noir:[w.steel,M.chrome],chroma:[w.bronze,M.bronze],warm:[w.brass,M.polishedBrass],gallery:[w.porcelain,M.porcelain]};function ms(n){return n.wallFinish==="walnut"?[W(n.wall),M.walnut]:n.wallFinish==="travertine"?[W(n.wall),M.stoneWall]:[W(n.wall),M.paint]}var ps={node:"",mood:"noir",wall:"#2A2D31",wallFinish:"plaster",floor:"pale",stele:"graphite",accent:"#9BA7B4",installation:{motif:"wheel"},shape:""};function bs(n){return[...n].reduce((e,o)=>e*31+o.charCodeAt(0)>>>0,7)}function vs(n){let[e,o,r]=W(n),t=s=>Math.min(1,s*.7+.3);return[t(e),t(o),t(r)]}function gs(n){let e=n>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function mr(n,e,o,r,t,s,a,i){let c=J(Re(o,e)),l=Math.abs(c[1])>.9?[1,0,0]:[0,1,0],u=J(fe(c,l)),h=fe(c,u),d=(f,m,p)=>{let b=[u[0]*Math.cos(p)+h[0]*Math.sin(p),u[1]*Math.cos(p)+h[1]*Math.sin(p),u[2]*Math.cos(p)+h[2]*Math.sin(p)];return[[f[0]+b[0]*m,f[1]+b[1]*m,f[2]+b[2]*m],b]};for(let f=0;f<s;f++){let m=f/s*Math.PI*2,p=(f+1)/s*Math.PI*2,[b,g]=d(e,r,m),[E,R]=d(e,r,p),[P]=d(o,t,m),[B]=d(o,t,p);n.vertex(b,g,a,i),n.vertex(P,g,a,i),n.vertex(B,R,a,i),n.vertex(b,g,a,i),n.vertex(B,R,a,i),n.vertex(E,R,a,i)}}function vr(n=Vt){let e=n.layout.levels,o=T=>n.exhibitOf(T),r=de(e.length),t=new Ye,s=new Ye,a=new Ye,i=[],c=[],l=[],u=[],h=[],d=[],f=[],m=[],p=gs(7),b=(T,v)=>{let y=s.vertexCount;v();let _=s.vertexCount-y;_>0&&l.push({first:y,count:_,centre:T})},g=(T,v=0)=>({gloss:T,emit:v}),E=(T,v,y,_,N)=>{let[Y,C,Q,S]=N,x=(A,O,F,D)=>u.push(A,v,O,F,D,Y,C,Q,S,0);x(T-_,y-_,0,0),x(T+_,y-_,1,0),x(T+_,y+_,1,1),x(T-_,y-_,0,0),x(T+_,y+_,1,1),x(T-_,y+_,0,1)},R=(T,v,y,_,N)=>E(T,v+.012,y,_,[0,0,0,N]),P=(T,v,y,_,N,Y)=>E(T,v+.014,y,_,[N[0]*Y,N[1]*Y,N[2]*Y,0]),B=(T,v)=>{let y=T.map(N=>N[0]),_=T.map(N=>N[1]);for(let N=Math.floor(Math.min(...y)/3)*3+1.5;N<Math.max(...y);N+=3)for(let Y=Math.floor(Math.min(..._)/3)*3+1.5;Y<Math.max(..._);Y+=3){if(![[N-1.05,Y-1.05],[N+1.05,Y-1.05],[N+1.05,Y+1.05],[N-1.05,Y+1.05]].every(x=>ko(x,T)))continue;let S=.8;t.quad([N-S,v,Y+S],[N+S,v,Y+S],[N+S,v,Y-S],[N-S,v,Y-S],w.panel,M.panel,[0,-1,0])}},I=ye-ne,K=(T,v,y)=>{if(!v){t.prism(T.poly,y,y,w.plaster,M.plaster,{top:!1,sides:!1}),B(T.poly,y-.012);return}let _=(S,x)=>Oe(T.id,S,x),N=[_(V,0),_(V,V),_(G,V),_(G,0)],Y=[_(V,V),_(G,G),_(G,V)],C=_t[v.mood],Q=(S,x,A)=>{let[O,F]=_(S,x);t.annulus(O,F,.001,.065,y-.012,12,w.panel,{gloss:.1,emit:1.6}),t.annulus(O,F,.065,.11,y-.01,16,w.graphite,{...M.graphite,ao:A})};t.prism(Y,y,y,w.darkCeiling,{...M.plaster,ao:et},{top:!1,sides:!1});for(let[S,x]of[[V+5.6,V+2.4],[V+8.2,V+4.6],[V+8.4,V+1.6]])Q(S,x,et);if(ao(v.mood))t.prism(N,y,y,w.plaster,{...M.plaster,ao:C},{top:!1,sides:!1}),B(N,y-.012);else{t.prism(N,y,y,w.darkCeiling,{...M.plaster,ao:C},{top:!1,sides:!1});for(let S of[V+2.1,V+7.3])for(let x of[1.4,3.8,6.2,8.6])Q(S,x,C)}},re=(T,v,y,_,N,Y,C)=>{let Q=Math.hypot(v[0]-T[0],v[1]-T[1]),S=(v[0]-T[0])/Q,x=(v[1]-T[1])/Q,A=Math.max(8,Math.round(Q/.11)),O=F=>{let D=F/A,L=D*Math.PI*2*(A/2),H=Math.sin(L)*N,$=Math.cos(L)*N*Math.PI*2*(A/2)/Q,se=-x-S*$,Z=S-x*$,te=Math.hypot(se,Z);return[[T[0]+S*Q*D-x*H,T[1]+x*Q*D+S*H],[se/te,Z/te]]};for(let F=0;F<A;F++){let[D,L]=O(F),[H,$]=O(F+1),se=[D[0],y,D[1]],Z=[H[0],y,H[1]],te=[H[0],_,H[1]],ae=[D[0],_,D[1]];t.vertex(se,[L[0],0,L[1]],Y,C),t.vertex(Z,[$[0],0,$[1]],Y,C),t.vertex(te,[$[0],0,$[1]],Y,C),t.vertex(se,[L[0],0,L[1]],Y,C),t.vertex(te,[$[0],0,$[1]],Y,C),t.vertex(ae,[L[0],0,L[1]],Y,C)}},U=(T,v,y)=>{let _=o(T.node),N=T.rooms,Y=T.bay.id,C=(le,pe)=>Oe(Y,le,pe),Q=T.bay.inward,S=T.bay.along,x=W(_.accent),[A,O]=ms(_),F=y+I,D=!ao(_.mood),{stele:L,screen:H,partition:$}=$o,se=_t[_.mood],Z=le=>({...le,ao:se}),te=le=>({...le,ao:et});t.wall(C(V+.2,.17),C(G-.02,.17),y,F,.04,A,Z(O));let ae=$.l,ie=$.thick/4;for(let[le,pe,Se]of[[V+.02,$.d0,y],[$.d1,G-.02,y],[$.d0,$.d1,y+2.75]])t.wall(C(le,ae-ie),C(pe,ae-ie),Se,F,2*ie,A,Z(O)),t.wall(C(le,ae+ie),C(pe,ae+ie),Se,F,2*ie,w.fabric,te(M.fabric));let Te=($.d0+$.d1)/2;h.push({key:"theater:marquee",rect:ue(C(Te,ae-2*ie-.02),y+3.15,Me(-S[0],-S[1]),2.1,.41,0)});let[ke,ot]=ds[_.stele],X=L.d+L.thick/2;t.wall(C(X,L.l0),C(X,L.l1),y+.07,y+L.height,L.thick,ke,Z(ot)),t.wall(C(X,L.l0+.06),C(X,L.l1-.06),y,y+.07,L.thick-.12,w.graphiteDeep,Z(M.graphite));for(let le of[L.d+.055,L.d+L.thick-.055])t.wall(C(le,L.l0+.08),C(le,L.l1-.08),y+.012,y+.026,.008,x,M.line);t.wall(C(X,L.l0+.02),C(X,L.l1-.02),y+L.height,y+L.height+.012,L.thick-.04,x,M.line),rn(_.stele)&&t.wall(C(L.d-.002,L.l0+.08),C(L.d-.002,H.l0-.14),y+.14,y+L.height-.1,.004,W(sn[_.stele]),Z({gloss:.12}));let Pe=Me(-Q[0],-Q[1]),Ne=H.l1-H.l0,gt=Ne*3/4,Zt=y+H.bottom+gt/2;t.wall(C(L.d-.0075,H.l0-.05),C(L.d-.0075,H.l1+.05),Zt-gt/2-.05,Zt+gt/2+.05,.015,w.blackGlass,Z(M.blackGlass)),d.push({kind:"store",node:T.node,level:v,rect:ue(T.display,Zt,Pe,Ne,gt,0)});let Xe=N.lettering;f.push({key:`stele:${T.node}`,node:T.node,level:v,station:"model",rect:ue(Xe.at,y+Xe.bottom+Xe.height/2,Xe.facing,Xe.width,Xe.height,0)});let Po=C(L.d-1.5,5);P(Po[0],y,Po[1],2.1,D?x:w.warm,D?.15:.05);let me=N.print,Jt=y+me.bottom+me.height/2,yt=le=>Q[0]*le[0]+Q[1]*le[1],Dr=yt(me.at)-me.width/2,Or=yt(me.at)+me.width/2;t.wall(C(Dr-.05,ae-2*ie-.035),C(Or+.05,ae-2*ie-.035),Jt-me.height/2-.05,Jt+me.height/2+.05,.07,w.panel,{gloss:.2,emit:.32}),d.push({kind:"print",node:T.node,level:v,rect:ue(me.at,Jt,me.facing,me.width,me.height,0)}),f.push({key:`caption:${T.node}`,node:T.node,level:v,rect:ue(C(yt(me.at),ae-2*ie-.005),y+me.bottom-.3,me.facing,me.width,me.width/8,0)}),f.push({key:`lesson:${T.node}`,node:T.node,level:v,station:"lesson",rect:ue(T.panel.at,y+1.85,Me(S[0],S[1]),4.3,2.5,0)});let Ke=T.examples;f.push({key:`examples:${T.node}`,node:T.node,level:v,station:"examples",rect:ue(Ke.at,y+Ke.bottom+Ke.height/2,Ke.facing,Ke.width,Ke.height,0)});let[xt,wt]=T.holo.at;t.cylinder(xt,wt,.95,y,y+.18,40,w.steel,Z(M.steel)),t.annulus(xt,wt,.8,.86,y+.182,48,w.panel,M.line),t.annulus(xt,wt,.01,.76,y+.181,40,w.plaster,{gloss:.5,emit:D?.08:.18}),R(xt,y,wt,1.7,.22);let So=yt(T.board.at),Fo=S[0]*T.board.at[0]+S[1]*T.board.at[1];t.wall(C(So-.023,Fo-T.board.width/2-.05),C(So-.023,Fo+T.board.width/2+.05),y+T.board.bottom-.05,y+T.board.bottom+T.board.height+.05,.024,w.titanium,Z(M.titanium)),d.push({kind:"board",node:T.node,level:v,rect:ue(T.board.at,y+T.board.bottom+T.board.height/2,T.board.facing,T.board.width,T.board.height,0)});let nt=N.bench,Tt=nt.depth/2,Ve=[nt.a[0]-Q[0]*Tt,nt.a[1]-Q[1]*Tt],De=[nt.b[0]+Q[0]*Tt,nt.b[1]+Q[1]*Tt],[Ir,Nr]=D?[w.graphite,M.graphite]:[w.travertine,M.band];t.box([Math.min(Ve[0],De[0])+.04,y,Math.min(Ve[1],De[1])+.04],[Math.max(Ve[0],De[0])-.04,y+.06,Math.max(Ve[1],De[1])-.04],w.graphiteDeep,Z(M.graphite)),t.box([Math.min(Ve[0],De[0]),y+.06,Math.min(Ve[1],De[1])],[Math.max(Ve[0],De[0]),y+.44,Math.max(Ve[1],De[1])],Ir,Z(Nr)),R((Ve[0]+De[0])/2,y,(Ve[1]+De[1])/2,2.4,.14),t.prism(N.cinema.floor,y,y+.012,w.carpet,te(M.carpet),{bottom:!1});let Mt=Math.SQRT1_2;t.wall(C(V+.5+.17*Mt,V+.5-.17*Mt),C(G-.4+.17*Mt,G-.4-.17*Mt),y,F,.04,w.fabric,te(M.fabric)),re(N.cinema.curtain[0],N.cinema.curtain[1],y+.02,F-.04,.05,w.fabric,te(M.fabric));let ce=T.theater,eo=ue(ce.at,y+ce.bottom+ce.height/2,ce.facing,ce.width,ce.height,0),_o=[Math.sin(ce.facing),-Math.cos(ce.facing)],Lo=[eo.u[0],eo.u[2]],qe=(le,pe)=>[ce.at[0]+Lo[0]*le+_o[0]*pe,ce.at[1]+Lo[1]*le+_o[1]*pe],Qe=ce.width/2,Et=y+ce.bottom+ce.height;t.wall(qe(-Qe-.16,-.035),qe(Qe+.16,-.035),y+ce.bottom-.16,Et+.16,.04,w.blackGlass,te({gloss:.45})),t.wall(qe(-Qe-.1,-.012),qe(Qe+.1,-.012),y+ce.bottom-.27,y+ce.bottom-.25,.02,w.warm,M.line),t.wall(qe(-Qe-.1,-.012),qe(Qe+.1,-.012),Et+.25,Et+.27,.02,w.warm,M.line),d.push({kind:"theater",node:T.node,level:v,rect:eo}),h.push({key:"theater:marquee",rect:ue(ce.at,Et+.62,ce.facing,3.4,.66,.02)});for(let le of ce.seats){let[pe,Se]=le,Rt=Math.atan2(ce.at[0]-pe,ce.at[1]-Se);t.cylinder(pe,Se,.14,y,y+.24,10,w.steel,te(M.steel),{caps:!1}),t.cylinder(pe,Se,.42,y+.24,y+.3,16,w.steel,te(M.steel)),t.cylinder(pe,Se,.4,y+.3,y+.5,16,w.leather,te(M.leather)),t.cylinder(pe,Se,.42,y+.3,y+1.1,10,w.leather,te(M.leather),{arc:[Rt+Math.PI-1.3,Rt+Math.PI+1.3]}),t.cylinder(pe,Se,.36,y+.5,y+1,10,w.leather,te(M.leather),{arc:[Rt+Math.PI-1.15,Rt+Math.PI+1.15],inward:!0}),R(pe,y+.012,Se,.75,.24)}for(let le=0;le<6;le++){let[pe,Se]=C(Te-.6-le*.95,ae+.36);P(pe,y+.013,Se,.11,w.warm,.7)}let Be=N.installation,[Br,Ur]=fs[_.mood];dr(a,_.installation,{at:Be.at,bottom:y+Be.bottom,top:y+Be.top,along:Be.along,inward:Be.inward,span:Be.span,depth:Be.depth,ceiling:F},{body:Br,material:Z(Ur),glow:x,seed:bs(T.node),light:se}),P(Be.at[0]+Q[0]*.8,y,Be.at[1]+Q[1]*.8,2.4,x,D?.12:.04)},k={graphite:[w.graphite,M.graphiteFloor],pale:[w.stoneFloor,M.stoneFloor],terrazzo:[w.terrazzo,M.terrazzoFloor]};for(let T of e){let v=T.y,y=T.index,_=vs(n.levelColor(T.tier)),N=new Set(T.stores.map(x=>x.bay.id)),Y=a.vertexCount,C=t.vertexCount;for(let x of T.bays){let A=T.stores.find(L=>L.bay.id===x.id),O=A?o(A.node):x.use==="vacant"?ps:null,[F,D]=O?k[O.floor]:x.use==="lobby"?[w.lobbyFloor,M.stoneFloor]:[w.stoneFloor,M.stoneFloor];t.prism(x.poly,v-ne,v,F,O?{...D,ao:_t[O.mood]}:D,{bottom:!1}),K(x,O,v+I)}let Q=[[[-z,z],[z,z],[V,V],[-V,V]],[[z,z],[z,-z],[V,-V],[V,V]],[[z,-z],[-z,-z],[-V,-V],[V,-V]],[[-z,-z],[-z,z],[-V,V],[-V,-V]]];for(let x of Q)if(y===0)t.prism(x,v-ne,v,w.stoneFloor,M.stoneFloor,{bottom:!1});else{let A=x.reduce((F,D)=>F+D[0],0)/4,O=x.reduce((F,D)=>F+D[1],0)/4;b([A,v,O],()=>{let F=se=>[se[0],v-.02,se[1]],[D,L,H,$]=x;D&&L&&H&&$&&s.quad(F(D),F(L),F(H),F($),w.glassFloor,g(.5),[0,1,0])})}for(let[x,A]of xs(z))t.wall(x,A,v-ne-.05,v+.02,.18,w.band,M.band),y>0&&t.wall(pr(x,A,.12),pr(A,x,.12),v-ne-.09,v-ne-.05,.05,w.panel,M.line);t.box([-rt,v-.3,At-.15],[rt,v,z+.05],w.stoneFloor,M.stoneFloor);for(let x of[-1,1])for(let A of[-1,1])t.wall([x*V,A*V],[x*G,A*G],v,v+I,.3,w.travertine,M.stoneWall);t.wall([V,0],[G,0],v,v+I,.3,w.travertine,M.stoneWall),t.wall([0,-V],[0,-G],v,v+I,.3,w.travertine,M.stoneWall),t.wall([-V,0],[-G,0],v,v+I,.3,w.travertine,M.stoneWall);for(let[x,A,O]of jt()){for(let H=0;H<4;H++){let $=H/4,se=(H+1)/4,Z=[x[0]+(A[0]-x[0])*$,x[1]+(A[1]-x[1])*$],te=[x[0]+(A[0]-x[0])*se,x[1]+(A[1]-x[1])*se],ae=[];if(y===0&&O[1]===1){let ie=Math.min(Z[0],te[0]),Te=Math.max(Z[0],te[0]);Te<=-Fe||ie>=Fe?ae.push([Z,te]):(ie<-Fe&&ae.push([[ie,G],[-Fe,G]]),Te>Fe&&ae.push([[Fe,G],[Te,G]]))}else ae.push([Z,te]);for(let[ie,Te]of ae)b([(ie[0]+Te[0])/2,v+I/2,(ie[1]+Te[1])/2],()=>s.pane(ie,Te,v,v+I,w.facadeGlass,g(.34,.32)))}let F=[x[0]+O[0]*.31,x[1]+O[1]*.31],D=[A[0]+O[0]*.31,A[1]+O[1]*.31],L=(H,$,se)=>{let Z=Math.hypot($[0]-H[0],$[1]-H[1]);return[H[0]-($[0]-H[0])/Z*se,H[1]-($[1]-H[1])/Z*se]};if(y>0){t.wall(L(F,D,.31),L(D,F,.31),v-ne-.18,v+.14,.62,w.band,M.band);let H=[x[0]+O[0]*.625,x[1]+O[1]*.625],$=[A[0]+O[0]*.625,A[1]+O[1]*.625];t.wall(H,$,v-ne-.17,v-ne-.13,.01,_,M.line)}}h.push({key:`levelno:${y}`,rect:ue([-13.5,G+.64],v+3.1,Math.PI,7.2,1.8,0)});for(let[x,A]of ws())b([(x[0]+A[0])/2,v+.55,(x[1]+A[1])/2],()=>s.pane(x,A,v,v+1.1,w.glass,g(.1))),t.wall(x,A,v+1.06,v+1.12,.07,w.steel,M.titanium);let S=Math.asin(rt/be)+.05;b([0,v+ye/2,0],()=>{s.cylinder(0,0,be,v,v+2.7,26,w.glass,g(.08),{arc:[S,Math.PI*2-S]}),s.cylinder(0,0,be,v+2.7,v+ye,30,w.glass,g(.08),{caps:!1})}),t.cylinder(0,0,be+.06,v-ne,v+.03,28,w.steel,M.steel,{caps:!1}),t.cylinder(0,0,be+.06,v+2.7,v+2.84,28,w.steel,M.steel,{caps:!1}),h.push({key:`level:${y}`,rect:ue([0,(z+V)/2],v+4.82,0,4.2,.86,.075)}),h.push({key:`level:${y}`,rect:ue([0,(z+V)/2],v+4.82,Math.PI,4.2,.86,.075)}),t.box([-2.16,v+4.36,(z+V)/2-.06],[2.16,v+5.28,(z+V)/2+.06],w.blackGlass,M.blackGlass);for(let x of[-1.7,1.7])t.box([x-.02,v+5.26,7.98],[x+.02,v+I,8.02],w.steel,M.steel);{let x=ue(Ue,v+1.95,jo,2.9,2.2,.17),A=[Ue[0]-x.u[0]*1.7,Ue[1]-x.u[2]*1.7],O=[Ue[0]+x.u[0]*1.7,Ue[1]+x.u[2]*1.7];t.wall(A,O,v,v+3.4,.3,w.travertine,M.stoneWall),t.wall([A[0]+x.u[0]*.05,A[1]+x.u[2]*.05],[O[0]-x.u[0]*.05,O[1]-x.u[2]*.05],v+3.33,v+3.37,.31,_,M.line),d.push({kind:"directory",level:y,rect:x}),R(Ue[0],v,Ue[1],2.4,.14);for(let F of[-1,1])t.box([F*3.6-.05,v,16.2],[F*6.4+.05,v+.44,17],w.travertine,M.band),t.box([F*3.6,v+.44,16.25],[F*6.4,v+.47,16.95],w.graphite,M.graphite),R(F*5,v,16.6,2,.12)}for(let x of T.stores){let A=x.bay.inward,O=Me(-A[0],-A[1]),[F,D]=x.bay.front,L=x.bay.along,H=[x.door[0]-L[0]*st,x.door[1]-L[1]*st],$=[x.door[0]+L[0]*st,x.door[1]+L[1]*st];b([(F[0]+H[0])/2,v+2,(F[1]+H[1])/2],()=>s.pane(F,H,v,v+4,w.glass,g(.07))),b([($[0]+D[0])/2,v+2,($[1]+D[1])/2],()=>s.pane($,D,v,v+4,w.glass,g(.07))),t.wall(F,D,v+4,v+I,.36,w.travertine,M.stoneWall);let se=(X,Pe)=>[X[0]-L[0]*Pe,X[1]-L[1]*Pe];for(let[X,Pe]of[[H,1],[$,-1]]){let Ne=se(X,-Pe*.12);t.box([Math.min(X[0],Ne[0])-Math.abs(A[0])*.22,v,Math.min(X[1],Ne[1])-Math.abs(A[1])*.22],[Math.max(X[0],Ne[0])+Math.abs(A[0])*.22,v+4.06,Math.max(X[1],Ne[1])+Math.abs(A[1])*.22],w.steel,M.steel)}t.wall(se(H,.12),se($,-.12),v+3.98,v+4.1,.44,w.steel,M.steel);for(let X of[F,D])t.box([X[0]-.05,v,X[1]-.05],[X[0]+.05,v+4,X[1]+.05],w.titanium,M.titanium);let Z=X=>[X[0]-A[0]*.19,X[1]-A[1]*.19];t.wall(Z(F),Z(D),v+4.32,v+4.35,.02,_,M.line),h.push({key:`store:${x.node}`,rect:ue(x.door,v+4.85,O,5.6,.95,.2)});let te=X=>[X[0]+A[0]*.06,X[1]+A[1]*.06],ae=te([(F[0]+H[0])/2,(F[1]+H[1])/2]),ie=te([($[0]+D[0])/2,($[1]+D[1])/2]);f.push({key:`banner:${x.node}`,node:x.node,level:y,rect:ue(ae,v+2.05,O,2.2,3.1,0)}),d.push({kind:"window",node:x.node,level:y,rect:ue(ie,v+2.25,O,2.4,1.8,0)});let Te=Oe(x.bay.id,V-.78,9.25),ke=Oe(x.bay.id,V,9.25),ot=Oe(x.bay.id,V-1.45,9.25);t.wall(ke,ot,v+3.84,v+3.89,.04,w.steel,M.steel),h.push({key:`blade:${x.node}`,rect:ue(Te,v+3.45,Me(L[0],L[1]),1.3,.62,.02)}),h.push({key:`blade:${x.node}`,rect:ue(Te,v+3.45,Me(-L[0],-L[1]),1.3,.62,.02)}),U(x,y,v),f.push({key:`medallion:${x.node}`,node:x.node,level:y,rect:uo(x.medallion,v+.016,Me(A[0],A[1]),2.3,2.3)});for(let X of n.stationsOf(x.node)){let Pe=x.stations[X],Ne=[Pe.p[0]+Math.sin(Pe.heading)*.95,Pe.p[1]-Math.cos(Pe.heading)*.95];h.push({key:`station:${X}`,rect:uo(Ne,v+.018,Pe.heading,1.3,.46)})}}for(let x of T.lounges)ys(t,x,v,p,m);for(let x of T.vacant){let A=x.inward,[O,F]=x.front;b([(O[0]+F[0])/2,v+2,(O[1]+F[1])/2],()=>s.pane(O,F,v,v+4,w.frosted,g(.62,.05))),t.wall(O,F,v+4,v+I,.36,w.travertine,M.stoneWall);for(let H of[O,F])t.box([H[0]-.05,v,H[1]-.05],[H[0]+.05,v+4,H[1]+.05],w.titanium,M.titanium);let D=H=>[H[0]-A[0]*.19,H[1]-A[1]*.19];t.wall(D(O),D(F),v+4.32,v+4.35,.02,_,M.line);let L=[(O[0]+F[0])/2,(O[1]+F[1])/2];h.push({key:`vacant:${y}:${x.id}`,rect:ue(L,v+4.85,Me(-A[0],-A[1]),5.6,.95,.2)})}i.push({first:Y,count:a.vertexCount-Y}),c.push({first:C,count:t.vertexCount-C})}for(let T of[e[e.length-1]])if(T){for(let v of T.bays)t.prism(v.poly,r-ne,r,w.band,M.band,{bottom:!1});for(let v of[[[-z,z],[z,z],[V,V],[-V,V]],[[z,z],[z,-z],[V,-V],[V,V]],[[z,-z],[-z,-z],[-V,-V],[V,-V]],[[-z,-z],[-z,z],[-V,V],[-V,-V]]])t.prism(v,r-ne,r,w.band,M.band,{bottom:!1}),t.prism(v,r-ne,r-ne,w.plaster,M.plaster,{top:!1,sides:!1})}b([0,r,0],()=>s.quad([-z,r,-z],[z,r,-z],[z,r,z],[-z,r,z],w.facadeGlass,g(.2,.08),[0,1,0]));for(let[T,v,y]of jt()){let _=[T[0]+y[0]*.31,T[1]+y[1]*.31],N=[v[0]+y[0]*.31,v[1]+y[1]*.31],Y=Math.hypot(N[0]-_[0],N[1]-_[1]),C=(N[0]-_[0])/Y,Q=(N[1]-_[1])/Y;t.wall([_[0]-C*.31,_[1]-Q*.31],[N[0]+C*.31,N[1]+Q*.31],r-ne-.18,r+1.1,.62,w.band,M.band);let S=[T[0]+y[0]*.625,T[1]+y[1]*.625],x=[v[0]+y[0]*.625,v[1]+y[1]*.625];t.wall(S,x,r-ne-.17,r-ne-.13,.01,w.panel,M.line);let A=D=>[D[0]-y[0]*1.2,D[1]-y[1]*1.2];t.wall(A(T),A(v),r,r+fr,.4,w.band,M.band);let O=[(A(T)[0]+A(v)[0])/2,(A(T)[1]+A(v)[1])/2];h.push({key:"crown",rect:ue(O,r+fr/2+.1,Me(y[0],y[1]),22,1.75,.21)});let F=D=>[D[0]+y[0]*.205,D[1]+y[1]*.205];t.wall(F(A(T)),F(A(v)),r+.22,r+.26,.01,w.runner,M.line)}b([0,r+2,0],()=>s.cylinder(0,0,be,r,r+3.4,30,w.glass,g(.1),{caps:!1})),t.cylinder(0,0,be+.08,r+3.4,r+3.62,36,w.steel,M.steel);{let v=r+1.1;for(let[y,_,N]of jt()){let Y=Math.hypot(_[0]-y[0],_[1]-y[1]),C=(_[0]-y[0])/Y,Q=(_[1]-y[1])/Y;for(let S=1;S<Math.round(Y/2.5);S++){let x=[y[0]+C*S*2.5,y[1]+Q*S*2.5],A=N[1]===1&&Math.abs(x[0])<=Fe+.7?4.32:-.02,O=[x[0]+N[0]*.02,x[1]+N[1]*.02],F=[x[0]+N[0]*.62,x[1]+N[1]*.62];t.wall(O,F,A,v,.14,w.fin,M.titanium)}}for(let y of[-1,1])for(let _ of[-1,1])t.box([y*G-.45+y*.17,-.02,_*G-.45+_*.17],[y*G+.45+y*.17,v+.02,_*G+.45+_*.17],w.band,M.band);for(let[y,_,N]of jt()){let Y=[y[0]+N[0]*.31,y[1]+N[1]*.31],C=[_[0]+N[0]*.31,_[1]+N[1]*.31];N[1]===1?(t.wall(Y,[-Fe-.7,Y[1]],-.02,.32,.62,w.graphite,M.graphite),t.wall([Fe+.7,C[1]],C,-.02,.32,.62,w.graphite,M.graphite)):t.wall(Y,C,-.02,.32,.62,w.graphite,M.graphite)}}{t.box([-4.4,4.06,G+.1],[4.4,4.32,G+3.6],w.steel,M.steel),t.quad([-4.2,4.055,G+3.4],[4.2,4.055,G+3.4],[4.2,4.055,G+.3],[-4.2,4.055,G+.3],w.panel,{gloss:.1,emit:.55},[0,-1,0]);for(let T of[-1,1])t.box([T*(Fe+.36)-.34,-.02,G-.1],[T*(Fe+.36)+.34,4.06,G+.75],w.band,M.band);h.push({key:"entrance",rect:ue([0,G+.12],4.95,Math.PI,7.6,1.3,.05)}),R(0,0,G+2.2,4.2,.1)}t.annulus(0,0,.01,54,-.02,120,w.paving,M.paving);for(let T of[29,38,47])t.annulus(0,0,T-.3,T+.3,-.015,160,w.graphite,M.graphite);t.cylinder(0,0,55,-.5,.04,120,w.graphite,M.graphite,{caps:!1}),t.annulus(0,0,54,55,.04,120,w.graphite,M.graphite),t.cylinder(0,0,54,-.5,.04,120,w.graphite,M.graphite,{caps:!1,inward:!0}),t.annulus(0,0,55,96,-.12,160,w.water,M.water),t.cylinder(0,0,96,-.12,-.02,160,w.graphite,M.graphite,{caps:!1,inward:!0}),t.annulus(0,0,96,97.2,-.02,160,w.graphite,M.graphite),t.annulus(0,0,97.2,2400,-.04,160,w.plateau,M.plateau);for(let T of[-1,1]){let v=T*9.5,y=G+12;t.cylinder(v,y,2.7,-.02,.32,56,w.steel,M.steel),t.annulus(v,y,2.45,2.7,.32,64,w.steel,M.steel),t.annulus(v,y,.01,2.45,.3,56,w.soil,M.matte),t.annulus(v,y,2.72,2.78,.004,64,w.panel,M.line),gr(t,v,.3,y,1.45,T>0?.6:2.4)}t.quad([-.035,0,G+3.7],[.035,0,G+3.7],[.035,0,44],[-.035,0,44],w.runnerInlay,{gloss:.8},[0,1,0]);for(let T=0;T<260;T++){let v=p()*Math.PI*2,y=be+.5+p()*(z-be-.9);m.push(Math.sin(v)*y,p()*r,Math.cos(v)*y,.01+p()*.018,p(),r,.04+p()*.08)}let ee=new Ye;return ee.cylinder(0,0,be-.12,-.18,.01,40,w.graphite,M.graphiteFloor),ee.annulus(0,0,be-.32,be-.26,.015,48,w.panel,M.line),ee.cylinder(0,0,be-.12,2.58,2.66,40,w.steel,M.steel),ee.annulus(0,0,.3,.55,2.575,32,w.panel,M.panel),{...e.length!==Je?{interior:{half:G,ring:V,atrium:z,levels:e.length}}:{},roofY:r,opaque:t.toArray(),glass:s.toArray(),glassPieces:l,decals:new Float32Array(u),signs:h,screens:d,overlays:f,bubbles:new Float32Array(m),cab:ee.toArray(),detail:a.toArray(),detailLevels:i,opaqueLevels:c}}function gr(n,e,o,r,t,s){let a=(u,h,d)=>[e+(u*Math.cos(s)-d*Math.sin(s))*t,o+h*t,r+(u*Math.sin(s)+d*Math.cos(s))*t],i=[a(0,0,0),a(.32,.68,.08),a(-.22,1.38,-.06),a(.18,2.03,.05),a(-.05,2.53,0)],c=[.21,.15,.11,.075,.045];for(let u=1;u<i.length;u++){let h=i[u-1],d=i[u];h&&d&&mr(n,h,d,(c[u-1]??.05)*t,(c[u]??.04)*t,10,w.bark,M.bark)}let l=[[a(.32,.68,.08),a(1.1,.98,.3),.85],[a(-.22,1.38,-.06),a(-1.05,1.58,-.35),.8],[a(.18,2.03,.05),a(.85,2.23,-.4),.7],[a(-.05,2.53,0),a(-.05,2.78,.05),.75],[a(-.22,1.38,-.06),a(-.2,1.58,.75),.6]];for(let[u,h,d]of l)mr(n,u,h,.05*t,.03*t,6,w.bark,M.bark),n.sphere(h,d*t,12,w.foliage,M.foliage,.32),n.sphere([h[0]+d*t*.3,h[1]+d*t*.16,h[2]-d*t*.2],d*t*.62,10,w.foliageLight,M.foliage,.36)}function ys(n,e,o,r,t){let[s,a]=Oe(e.id,15,6);n.cylinder(s,a,1.55,o,o+.5,40,w.graphiteDeep,M.graphite),n.annulus(s,a,1.42,1.55,o+.5,48,w.steel,M.steel),n.annulus(s,a,.01,1.42,o+.47,40,w.soil,M.matte),n.annulus(s,a,1.56,1.6,o+.006,48,w.panel,M.line),gr(n,s,o+.47,a,1,r()*Math.PI*2);let[i,c]=Oe(e.id,13,11);n.cylinder(i,c,1.9,o,o+.34,40,w.graphiteDeep,M.graphite,{caps:!1}),n.annulus(i,c,1.78,1.9,o+.34,48,w.graphite,M.graphite),n.annulus(i,c,.01,1.78,o+.33,48,w.water,M.water);let l=Oe(e.id,17.2,2.5),u=Oe(e.id,17.2,6.5);n.box([Math.min(l[0],u[0])-.36,o,Math.min(l[1],u[1])-.36],[Math.max(l[0],u[0])+.36,o+.44,Math.max(l[1],u[1])+.36],w.travertine,M.band);for(let h=0;h<24;h++)t.push(s+(r()-.5)*5,o+r()*4,a+(r()-.5)*5,.008+r()*.012,r(),5.2,.03+r()*.05)}function jt(){let n=G;return[[[-n,n],[n,n],[0,1]],[[n,n],[n,-n],[1,0]],[[n,-n],[-n,-n],[0,-1]],[[-n,-n],[-n,n],[-1,0]]]}function xs(n){return[[[-n,n],[n,n]],[[n,n],[n,-n]],[[n,-n],[-n,-n]],[[-n,-n],[-n,n]]]}function pr(n,e,o){let r=Math.hypot(e[0]-n[0],e[1]-n[1]);return[n[0]+(e[0]-n[0])/r*o,n[1]+(e[1]-n[1])/r*o]}function ws(){let n=z,e=rt;return[[[-n,n],[-e,n]],[[e,n],[n,n]],[[n,n],[n,-n]],[[n,-n],[-n,-n]],[[-n,-n],[-n,n]],[[-e,At],[-e,n]],[[e,At],[e,n]]]}var Ts=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),Ms=[.89,.137,.173],Es=[.55,.64,.73],Rs=[.77,.525,0];function oe(n,e,o,r,t=0){let s=d=>d.replace(`#version 300 es
`,`#version 300 es
#define Q ${t}
`),a=(d,f)=>{let m=n.createShader(d);if(!m)throw new Error(`${r}: cannot create shader`);if(n.shaderSource(m,s(f)),n.compileShader(m),!n.getShaderParameter(m,n.COMPILE_STATUS))throw new Error(`${r}: ${n.getShaderInfoLog(m)??"compile failed"}`);return m},i=n.createProgram();if(!i)throw new Error(`${r}: cannot create program`);let c=a(n.VERTEX_SHADER,e),l=a(n.FRAGMENT_SHADER,o);if(n.attachShader(i,c),n.attachShader(i,l),n.linkProgram(i),!n.getProgramParameter(i,n.LINK_STATUS))throw new Error(`${r}: ${n.getProgramInfoLog(i)??"link failed"}`);n.deleteShader(c),n.deleteShader(l);let u=new Map,h=n.getProgramParameter(i,n.ACTIVE_UNIFORMS);for(let d=0;d<h;d++){let f=n.getActiveUniform(i,d);f&&u.set(f.name,n.getUniformLocation(i,f.name))}return{p:i,u}}function As(n,e){let o=r=>{let t=r*e;return Math.min(1,Math.max(0,t*(2.51*t+.03)/(t*(2.43*t+.59)+.14)))**.45454545454545453};return[o(n[0]),o(n[1]),o(n[2])]}var kt=class n{gl;tier;prog;post=null;vaos;counts={opaque:0,cab:0,decal:0,signs:0,bubbles:0,detail:0};overlayNormals;world;skyTex=null;skyLod=6;atlasTex=null;black;shadowTex=null;shadowMat=new Float32Array(16);shadowTexel=1/2048;shadowBias=2e-4;screenTex=new Map;ribbonCount=0;ribbonLength=0;ribbonBuf;flatBuf;signBuf;leaderBuf;reticleBuf;shell=null;beam=null;studyGpu=null;holoGpu=new Map;order;dist;scene=null;hdr=null;mirror=null;bloom=[];samples=4;mirrorVP=new Float32Array(16);mirrorInv=new Float32Array(16);reflect=new Float32Array(16);constructor(e,o,r){this.gl=e,this.world=o,this.tier=r,this.prog=this.programs(r==="cinematic"?1:0),r==="cinematic"&&(this.post=this.postPrograms());let t=i=>this.vao(i,[3,3,3,4]);this.counts.opaque=o.opaque.length/ft,this.counts.cab=o.cab.length/ft,this.counts.decal=o.decals.length/br,this.counts.bubbles=o.bubbles.length/To,this.counts.detail=o.detail.length/ft;let s=new Float32Array(o.screens.length*30);o.screens.forEach((i,c)=>s.set(Nt(i.rect),c*30));let a=new Float32Array(o.overlays.length*30);o.overlays.forEach((i,c)=>a.set(Nt(i.rect),c*30)),this.signBuf=e.createBuffer(),this.ribbonBuf=e.createBuffer(),this.flatBuf=e.createBuffer(),this.leaderBuf=e.createBuffer(),this.reticleBuf=e.createBuffer(),this.vaos={opaque:t(o.opaque),glass:t(o.glass),cab:t(o.cab),detail:t(o.detail),decal:this.vao(o.decals,[3,2,4,1]),full:this.vao(new Float32Array([-1,-1,3,-1,-1,3]),[2]),signs:this.vaoFor(this.signBuf,[3,2]),screens:this.vao(s,[3,2]),overlays:this.vao(a,[3,2]),bubbles:this.bubbleVao(o.bubbles),ribbon:this.vaoFor(this.ribbonBuf,[3,2]),flat:this.vaoFor(this.flatBuf,[3]),leaders:this.vaoFor(this.leaderBuf,[3]),reticles:this.vaoFor(this.reticleBuf,[3,3])},this.overlayNormals=o.overlays.map(i=>$e(i.rect)),this.order=o.glassPieces.map((i,c)=>c),this.dist=new Float32Array(o.glassPieces.length),this.black=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),this.makeSky(),this.makeShadows()}programs(e){let o=this.gl;return{lit:oe(o,Wt,zt(wo,this.world.interior),"lit",e),litClip:e===1?oe(o,Wt,zt(Sn,this.world.interior),"lit (mirror)",e):null,glass:oe(o,Wt,zt(Fn,this.world.interior),"glass",e),sky:oe(o,Ie,_n,"sky",e),tex:oe(o,On,In,"textured",e),decal:oe(o,Nn,Bn,"decal",e),mote:oe(o,Un,Cn,"motes",e),ribbon:oe(o,Hn,Gn,"ribbon",e),flat:oe(o,zn,Wn,"flat",e),shell:oe(o,bt,Yn,"hologram shell",e),organ:oe(o,bt,$n,"hologram organs",e),line:oe(o,kn,Xn,"hologram lines",e),reticle:oe(o,Kn,qn,"hologram targets",e),beam:oe(o,bt,jn,"hologram beam",e),dim:oe(o,Ie,Zn,"house lights",e),gradeBasic:oe(o,Ie,Qn,"colour grade",e),studyTable:oe(o,nr,rr,"study table",e),studyBeam:oe(o,bt,sr,"study spotlight",e),studyHolo:oe(o,ar,ir,"study hologram",e),studyDim:oe(o,Ie,lr,"study lights",e),studyGlow:oe(o,ur,cr,"study claim",e)}}postPrograms(){let e=this.gl;return{pre:oe(e,Ie,Jn,"bloom"),down:oe(e,Ie,er,"bloom down"),up:oe(e,Ie,tr,"bloom up"),composite:oe(e,Ie,or,"composite")}}setTier(e){if(e===this.tier||e==="cinematic")return;let o=this.gl,r=this.prog;this.prog=this.programs(0);for(let t of Object.values(r))t&&o.deleteProgram(t.p);if(this.post)for(let t of Object.values(this.post))o.deleteProgram(t.p);this.post=null,this.freeTargets(),this.tier="basic"}vao(e,o){let r=this.gl,t=r.createBuffer();return r.bindBuffer(r.ARRAY_BUFFER,t),r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW),this.vaoFor(t,o)}vaoFor(e,o){let r=this.gl,t=r.createVertexArray();r.bindVertexArray(t),r.bindBuffer(r.ARRAY_BUFFER,e);let s=o.reduce((i,c)=>i+c,0)*4,a=0;return o.forEach((i,c)=>{r.enableVertexAttribArray(c),r.vertexAttribPointer(c,i,r.FLOAT,!1,s,a),a+=i*4}),r.bindVertexArray(null),t}bubbleVao(e){let o=this.gl,r=o.createVertexArray();o.bindVertexArray(r);let t=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,t),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),o.STATIC_DRAW),o.enableVertexAttribArray(0),o.vertexAttribPointer(0,2,o.FLOAT,!1,0,0);let s=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,s),o.bufferData(o.ARRAY_BUFFER,e,o.STATIC_DRAW);let a=To*4;return o.enableVertexAttribArray(1),o.vertexAttribPointer(1,3,o.FLOAT,!1,a,0),o.vertexAttribDivisor(1,1),o.enableVertexAttribArray(2),o.vertexAttribPointer(2,4,o.FLOAT,!1,a,12),o.vertexAttribDivisor(2,1),o.bindVertexArray(null),r}makeSky(){let e=this.gl,o=this.tier==="cinematic",r=2048,t=r/2,s=e.createTexture();e.bindTexture(e.TEXTURE_2D,s),o?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,r,t,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,r,t,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let a=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,s,0);let i=oe(e,Ie,Ln,"skygen");e.viewport(0,0,r,t),e.disable(e.DEPTH_TEST),e.disable(e.BLEND),e.useProgram(i.p),e.uniform3f(i.u.get("uSun")??null,He[0],He[1],He[2]),e.bindVertexArray(this.vaos.full),e.drawArrays(e.TRIANGLES,0,3),e.bindVertexArray(null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(a),e.deleteProgram(i.p),e.bindTexture(e.TEXTURE_2D,s),e.generateMipmap(e.TEXTURE_2D),this.skyTex=s,this.skyLod=Math.log2(r)-3}makeShadows(){let e=this.gl,o=e.getParameter(e.MAX_TEXTURE_SIZE),r=this.tier==="cinematic"&&o>=4096?3072:2048,t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),e.texStorage2D(e.TEXTURE_2D,1,e.DEPTH_COMPONENT24,r,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_COMPARE_FUNC,e.LEQUAL);let s=e.createFramebuffer();if(e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,t,0),e.drawBuffers([e.NONE]),e.readBuffer(e.NONE),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE){e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(s),e.deleteTexture(t);return}let a=new Float32Array(16),i=[0,18,0];Dt(a,[i[0]+He[0]*200,i[1]+He[1]*200,i[2]+He[2]*200],i);let c=1/0,l=-1/0,u=1/0,h=-1/0,d=1/0,f=-1/0;for(let b of[-82,82])for(let g of[-1.5,48])for(let E of[-82,82]){let R=(a[0]??0)*b+(a[4]??0)*g+(a[8]??0)*E+(a[12]??0),P=(a[1]??0)*b+(a[5]??0)*g+(a[9]??0)*E+(a[13]??0),B=(a[2]??0)*b+(a[6]??0)*g+(a[10]??0)*E+(a[14]??0);c=Math.min(c,R),l=Math.max(l,R),u=Math.min(u,P),h=Math.max(h,P),d=Math.min(d,B),f=Math.max(f,B)}let m=new Float32Array(16);pn(m,c,l,u,h,-f-5,-d+5),dt(this.shadowMat,m,a);let p=oe(e,Vn,Dn,"shadow");e.viewport(0,0,r,r),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.depthMask(!0),e.disable(e.BLEND),e.clear(e.DEPTH_BUFFER_BIT),e.useProgram(p.p),e.uniformMatrix4fv(p.u.get("uViewProj")??null,!1,this.shadowMat),e.bindVertexArray(this.vaos.opaque),e.enable(e.POLYGON_OFFSET_FILL),e.polygonOffset(1.5,3),e.drawArrays(e.TRIANGLES,0,this.counts.opaque),e.bindVertexArray(this.vaos.detail),e.drawArrays(e.TRIANGLES,0,this.counts.detail),e.disable(e.POLYGON_OFFSET_FILL),e.bindVertexArray(null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(s),e.deleteProgram(p.p),this.shadowTex=t,this.shadowTexel=1/r,this.shadowBias=.05/(f-d+10)}setAtlas(e){let o=this.gl,r=o.createTexture();o.bindTexture(o.TEXTURE_2D,r),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,e.canvas),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.generateMipmap(o.TEXTURE_2D),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR_MIPMAP_LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),this.atlasTex=r;let t=[];for(let s of this.world.signs){let a=e.rects.get(s.key);if(!a)continue;let i=Nt(s.rect);for(let c=0;c<6;c++){let l=c*5,u=i[l+3]??0,h=i[l+4]??0;t.push(i[l]??0,i[l+1]??0,i[l+2]??0,a.u0+(a.u1-a.u0)*u,a.v0+(a.v1-a.v0)*h)}}o.bindBuffer(o.ARRAY_BUFFER,this.signBuf),o.bufferData(o.ARRAY_BUFFER,new Float32Array(t),o.STATIC_DRAW),this.counts.signs=t.length/5}static screenKey(e){return e.kind==="directory"?`directory:${e.level}`:e.kind==="window"?`store:${e.node??""}`:`${e.kind}:${e.node??""}`}screenGrade(e){return this.screenTex.get(e)?.grade??0}setScreenImage(e,o,r,t,s=!1){let a=this.gl,i=this.screenTex.get(e);if(i&&i.grade>r)return;let c=i?.tex&&i.grade!==4?i.tex:a.createTexture();a.bindTexture(a.TEXTURE_2D,c),s&&a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,o),s&&a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t&&a.generateMipmap(a.TEXTURE_2D),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,t?a.LINEAR_MIPMAP_LINEAR:a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),this.screenTex.set(e,{tex:c,grade:r,lastUsed:performance.now()})}setScreenTexture(e,o,r=null){let t=this.screenTex.get(e)??null;return o?this.screenTex.set(e,{tex:o,grade:4,lastUsed:performance.now()}):r?this.screenTex.set(e,r):this.screenTex.delete(e),t}evict(e){for(let[o,r]of this.screenTex)r.grade!==3||e(o)||(this.gl.deleteTexture(r.tex),this.screenTex.delete(o));for(let[o,r]of this.holoGpu)e(`holo:${o}`)||(this.freeHolo(r),this.holoGpu.delete(o))}setRibbon(e){let o=this.gl;if(!e||e.length<2){this.ribbonCount=0;return}let r=.26,t=[],s=0;for(let a=1;a<e.length;a++){let i=e[a-1],c=e[a];if(!i||!c)continue;let l=c[0]-i[0],u=c[2]-i[2],h=Math.hypot(l,u);if(h<.001)continue;let d=-u/h*r,f=l/h*r,m=(p,b,g)=>t.push(p[0]+d*b,p[1]+.03,p[2]+f*b,g,b);m(i,-1,s),m(c,-1,s+h),m(c,1,s+h),m(i,-1,s),m(c,1,s+h),m(i,1,s),s+=h}o.bindBuffer(o.ARRAY_BUFFER,this.ribbonBuf),o.bufferData(o.ARRAY_BUFFER,new Float32Array(t),o.DYNAMIC_DRAW),this.ribbonCount=t.length/5,this.ribbonLength=s}draw(e,o,r){if(this.tier==="cinematic"){try{if(this.drawCinematic(e,o,r))return}catch(a){console.warn("XI Outlet: the cinematic renderer failed; using the basic one",a)}this.setTier("basic")}let t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,null),this.drawScene(e,{viewProj:e.viewProj,invViewProj:e.invViewProj,eye:e.eye,mirror:!1,clipY:0,w:o,h:r},!0);let s=e.grade;if(s&&s.amount>.001){let a=this.prog;t.disable(t.DEPTH_TEST),t.depthMask(!1),t.enable(t.BLEND),t.blendFunc(t.DST_COLOR,t.ZERO),t.useProgram(a.gradeBasic.p),t.uniform3f(a.gradeBasic.u.get("uGTop")??null,s.top[0],s.top[1],s.top[2]),t.uniform3f(a.gradeBasic.u.get("uGBottom")??null,s.bottom[0],s.bottom[1],s.bottom[2]),t.uniform1f(a.gradeBasic.u.get("uGAmount")??null,s.amount),t.bindVertexArray(this.vaos.full),t.drawArrays(t.TRIANGLES,0,3),t.bindVertexArray(null),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.disable(t.BLEND),t.depthMask(!0),t.enable(t.DEPTH_TEST)}}drawCinematic(e,o,r){let t=this.gl;if(!this.ensureTargets(o,r))return!1;let s=this.scene,a=this.hdr,i=this.post;if(!s||!a||!i)return!1;if(e.mirrorY!==null&&this.mirror){let m=e.mirrorY,p=this.reflect;p.set([1,0,0,0,0,-1,0,0,0,0,1,0,0,2*m,0,1]),dt(this.mirrorVP,e.viewProj,p),Ot(this.mirrorInv,this.mirrorVP),t.bindFramebuffer(t.FRAMEBUFFER,this.mirror.fbo),this.drawScene(e,{viewProj:this.mirrorVP,invViewProj:this.mirrorInv,eye:[e.eye[0],2*m-e.eye[1],e.eye[2]],mirror:!0,clipY:m,w:this.mirror.w,h:this.mirror.h},!1)}t.bindFramebuffer(t.FRAMEBUFFER,s.fbo),this.drawScene(e,{viewProj:e.viewProj,invViewProj:e.invViewProj,eye:e.eye,mirror:!1,clipY:0,w:o,h:r},!1),t.bindFramebuffer(t.READ_FRAMEBUFFER,s.fbo),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,a.fbo),t.blitFramebuffer(0,0,o,r,0,0,o,r,t.COLOR_BUFFER_BIT,t.NEAREST),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.disable(t.DEPTH_TEST),t.disable(t.BLEND),t.depthMask(!1),t.bindVertexArray(this.vaos.full),t.activeTexture(t.TEXTURE0);let c=(m,p,b)=>{t.bindFramebuffer(t.FRAMEBUFFER,b.fbo),t.viewport(0,0,b.w,b.h),t.useProgram(m.p),t.bindTexture(t.TEXTURE_2D,p.tex),t.uniform1i(m.u.get("uTex")??null,0),t.uniform2f(m.u.get("uTexel")??null,1/p.w,1/p.h),t.drawArrays(t.TRIANGLES,0,3)},l=this.bloom,u=l[0];if(u){t.useProgram(i.pre.p),t.uniform1f(i.pre.u.get("uThreshold")??null,ge.bloomThreshold),c(i.pre,a,u);for(let m=1;m<l.length;m++){let p=l[m-1],b=l[m];p&&b&&c(i.down,p,b)}t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE);for(let m=l.length-1;m>0;m--){let p=l[m],b=l[m-1];p&&b&&c(i.up,p,b)}t.disable(t.BLEND)}t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,o,r);let h=i.composite;t.useProgram(h.p),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,a.tex),t.uniform1i(h.u.get("uScene")??null,0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,u?.tex??this.black),t.uniform1i(h.u.get("uBloom")??null,1),t.activeTexture(t.TEXTURE0),t.uniform1f(h.u.get("uBloomStrength")??null,u?ge.bloomStrength:0),t.uniform1f(h.u.get("uExposure")??null,e.exposure),t.uniform1f(h.u.get("uGrain")??null,ge.grain),t.uniform1f(h.u.get("uTime")??null,e.time);let d=e.grade,f=(m,p)=>{let b=h.u.get(m);b&&t.uniform3f(b,p?.[0]??0,p?.[1]??0,p?.[2]??0)};return f("uGShadow",d?.shadow),f("uGMid",d?.mid),f("uGHigh",d?.high),f("uGTop",d?.top),f("uGBottom",d?.bottom),t.uniform1f(h.u.get("uGAmount")??null,d?.amount??0),t.drawArrays(t.TRIANGLES,0,3),t.bindVertexArray(null),t.depthMask(!0),!0}ensureTargets(e,o){if(this.scene&&this.scene.w===e&&this.scene.h===o)return!0;this.freeTargets();let r=this.gl;if(!r.getExtension("EXT_color_buffer_float"))return!1;let t=r.getInternalformatParameter(r.RENDERBUFFER,r.RGBA16F,r.SAMPLES);this.samples=Math.min(4,t&&t.length>0?t[0]??0:0);let s=(l,u)=>{let h=r.createTexture();return r.bindTexture(r.TEXTURE_2D,h),r.texImage2D(r.TEXTURE_2D,0,r.RGBA16F,l,u,0,r.RGBA,r.HALF_FLOAT,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),h},a=()=>r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;{let l=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,l);let u=r.createRenderbuffer();r.bindRenderbuffer(r.RENDERBUFFER,u),this.samples>0?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,r.RGBA16F,e,o):r.renderbufferStorage(r.RENDERBUFFER,r.RGBA16F,e,o),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,u);let h=r.createRenderbuffer();r.bindRenderbuffer(r.RENDERBUFFER,h),this.samples>0?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,r.DEPTH_COMPONENT24,e,o):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT24,e,o),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,h);let d=[u,h].filter(f=>f!==null);if(this.scene={fbo:l,tex:null,rbs:d,w:e,h:o},!a())return this.failTargets()}{let l=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,l);let u=s(e,o);if(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,u,0),this.hdr={fbo:l,tex:u,rbs:[],w:e,h:o},!a())return this.failTargets()}{let l=Math.max(1,Math.round(e/2)),u=Math.max(1,Math.round(o/2)),h=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,h);let d=s(l,u);r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,d,0);let f=r.createRenderbuffer();if(r.bindRenderbuffer(r.RENDERBUFFER,f),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT24,l,u),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,f),this.mirror={fbo:h,tex:d,rbs:f?[f]:[],w:l,h:u},!a())return this.failTargets()}let i=e,c=o;for(let l=0;l<5;l++){i=Math.max(1,Math.round(i/2)),c=Math.max(1,Math.round(c/2));let u=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,u);let h=s(i,c);if(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,h,0),this.bloom.push({fbo:u,tex:h,rbs:[],w:i,h:c}),!a())return this.failTargets()}return r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindRenderbuffer(r.RENDERBUFFER,null),!0}failTargets(){return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.freeTargets(),!1}freeTargets(){let e=this.gl;for(let o of[this.scene,this.hdr,this.mirror,...this.bloom])if(o){e.deleteFramebuffer(o.fbo),e.deleteTexture(o.tex);for(let r of o.rbs)e.deleteRenderbuffer(r)}this.scene=null,this.hdr=null,this.mirror=null,this.bloom=[]}drawScene(e,o,r){let t=this.gl,s=this.prog;t.viewport(0,0,o.w,o.h),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.disable(t.CULL_FACE),t.disable(t.BLEND),t.depthMask(!0);let a=!o.mirror&&!r&&e.mirrorY!==null&&this.mirror!==null,i=As(ge.fog,e.exposure);t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.skyTex),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.shadowTex),t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,a?this.mirror?.tex??this.black:this.black),t.activeTexture(t.TEXTURE0);let c=m=>{t.useProgram(m.p);let p=(P,B)=>{let I=m.u.get(P);I&&t.uniform1f(I,B)},b=(P,B)=>{let I=m.u.get(P);I&&t.uniform3f(I,B[0]??0,B[1]??0,B[2]??0)};t.uniformMatrix4fv(m.u.get("uViewProj")??null,!1,o.viewProj),b("uCamPos",o.eye),b("uSun",He),b("uSunColor",ge.sun),b("uSkyAmb",ge.sky),b("uGroundAmb",ge.ground),b("uInterior",ge.interior),p("uPanel",ge.panel),p("uEmitGain",ge.emit),b("uFog",ge.fog),b("uFogDisplay",i),p("uFogDensity",ge.fogDensity),p("uTime",e.time),p("uDirect",r?1:0),p("uExposure",e.exposure),p("uSkyLod",this.skyLod),p("uClip",o.mirror?1:0),p("uClipY",o.clipY),p("uMirrorOn",a?1:0),p("uMirrorY",e.mirrorY??-1e3);let g=m.u.get("uViewport");g&&t.uniform2f(g,o.w,o.h),p("uShadowOn",this.shadowTex?1:0),p("uShadowTexel",this.shadowTexel),p("uShadowBias",this.shadowBias);let E=m.u.get("uShadowMat");E&&t.uniformMatrix4fv(E,!1,this.shadowMat);let R=(P,B)=>{let I=m.u.get(P);I&&t.uniform1i(I,B)};R("uSky",1),R("uShadow",2),R("uMirror",3)},l=o.mirror?s.litClip??s.lit:s.lit;c(l),t.uniform3f(l.u.get("uOffset")??null,0,0,0),t.bindVertexArray(this.vaos.opaque);let u=e.level===null?void 0:this.world.opaqueLevels[e.level];if(u&&u.count>0){t.drawArrays(t.TRIANGLES,u.first,u.count),u.first>0&&t.drawArrays(t.TRIANGLES,0,u.first);let m=u.first+u.count;m<this.counts.opaque&&t.drawArrays(t.TRIANGLES,m,this.counts.opaque-m)}else t.drawArrays(t.TRIANGLES,0,this.counts.opaque);t.uniform3f(l.u.get("uOffset")??null,0,e.cabY,0),t.bindVertexArray(this.vaos.cab),t.drawArrays(t.TRIANGLES,0,this.counts.cab);let h=e.level===null?void 0:this.world.detailLevels[e.level];h&&h.count>0&&(t.uniform3f(l.u.get("uOffset")??null,0,0,0),t.bindVertexArray(this.vaos.detail),t.drawArrays(t.TRIANGLES,h.first,h.count)),c(s.tex),t.uniform1i(s.tex.u.get("uTex")??null,0),t.bindVertexArray(this.vaos.screens);let d=performance.now();this.world.screens.forEach((m,p)=>{let b=n.screenKey(m),g=this.screenTex.get(b);g&&(g.lastUsed=d);let E=m.kind==="store"||m.kind==="directory",R=m.kind==="board";t.uniform1i(s.tex.u.get("uMode")??null,E?1:2),t.uniform1f(s.tex.u.get("uHasTex")??null,g?.tex?1:0),t.uniform1f(s.tex.u.get("uFlip")??null,g?.grade===4?1:0);let P=R?[.97,.97,.96]:m.kind==="directory"?[.05,.06,.08]:[.03,.04,.05];t.uniform4f(s.tex.u.get("uPlaceholder")??null,P[0]??0,P[1]??0,P[2]??0,1),t.bindTexture(t.TEXTURE_2D,g?.tex??this.black),t.drawArrays(t.TRIANGLES,p*6,6)}),t.depthMask(!1),c(s.sky),t.uniformMatrix4fv(s.sky.u.get("uInvViewProj")??null,!1,o.invViewProj),t.bindVertexArray(this.vaos.full),t.drawArrays(t.TRIANGLES,0,3),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.POLYGON_OFFSET_FILL),t.polygonOffset(-1,-4),c(s.decal),t.bindVertexArray(this.vaos.decal),t.drawArrays(t.TRIANGLES,0,this.counts.decal),this.ribbonCount>0&&!o.mirror&&(c(s.ribbon),t.uniform1f(s.ribbon.u.get("uLength")??null,this.ribbonLength),t.bindVertexArray(this.vaos.ribbon),t.drawArrays(t.TRIANGLES,0,this.ribbonCount)),this.atlasTex&&this.counts.signs>0&&(c(s.tex),t.uniform1i(s.tex.u.get("uMode")??null,0),t.uniform1f(s.tex.u.get("uHasTex")??null,1),t.uniform1f(s.tex.u.get("uFlip")??null,0),t.bindTexture(t.TEXTURE_2D,this.atlasTex),t.bindVertexArray(this.vaos.signs),t.drawArrays(t.TRIANGLES,0,this.counts.signs));{let m=!1;this.world.overlays.forEach((p,b)=>{if(e.level===null||p.level!==e.level)return;let g=this.overlayNormals[b];if(g&&(o.eye[0]-p.rect.centre[0])*g[0]+(o.eye[1]-p.rect.centre[1])*g[1]+(o.eye[2]-p.rect.centre[2])*g[2]<0)return;let E=this.screenTex.get(p.key);E?.tex&&(m||(c(s.tex),t.uniform1i(s.tex.u.get("uMode")??null,0),t.uniform1f(s.tex.u.get("uHasTex")??null,1),t.uniform1f(s.tex.u.get("uFlip")??null,0),t.bindVertexArray(this.vaos.overlays),m=!0),E.lastUsed=d,t.bindTexture(t.TEXTURE_2D,E.tex),t.drawArrays(t.TRIANGLES,b*6,6))})}if(t.disable(t.POLYGON_OFFSET_FILL),!o.mirror)for(let m of e.holos)this.drawHolo(m,e,r);c(s.glass),t.uniform3f(s.glass.u.get("uOffset")??null,0,0,0),t.uniform1f(s.glass.u.get("uFade")??null,e.fade),t.bindVertexArray(this.vaos.glass);let f=this.world.glassPieces;for(let m=0;m<f.length;m++){let p=f[m]?.centre??[0,0,0];this.dist[m]=(p[0]-o.eye[0])**2+(p[1]-o.eye[1])**2+(p[2]-o.eye[2])**2}this.order.sort((m,p)=>(this.dist[p]??0)-(this.dist[m]??0));for(let m of this.order){let p=f[m];p&&t.drawArrays(t.TRIANGLES,p.first,p.count)}if(!o.mirror&&this.counts.bubbles>0&&(c(s.mote),t.uniform3f(s.mote.u.get("uRight")??null,e.right[0],e.right[1],e.right[2]),t.uniform3f(s.mote.u.get("uUp")??null,e.up[0],e.up[1],e.up[2]),t.bindVertexArray(this.vaos.bubbles),t.drawArraysInstanced(t.TRIANGLES,0,6,this.counts.bubbles)),!o.mirror&&e.dim>.001&&(t.disable(t.DEPTH_TEST),t.useProgram(s.dim.p),t.uniform1f(s.dim.u.get("uDim")??null,e.dim),t.bindVertexArray(this.vaos.full),t.drawArrays(t.TRIANGLES,0,3),t.enable(t.DEPTH_TEST)),!o.mirror&&e.study&&this.drawStudy(e.study,e,o,r),!o.mirror&&e.stages&&e.stages.length>0&&this.drawStages(e.stages,e,o,r),!o.mirror&&e.highlight){let{min:m,max:p,rgba:b}=e.highlight;c(s.flat),t.uniform4f(s.flat.u.get("uColor")??null,b[0]*b[3],b[1]*b[3],b[2]*b[3],b[3]),t.bindBuffer(t.ARRAY_BUFFER,this.flatBuf),t.bufferData(t.ARRAY_BUFFER,Ps(m,p),t.DYNAMIC_DRAW),t.bindVertexArray(this.vaos.flat),t.drawArrays(t.TRIANGLES,0,36)}t.bindVertexArray(null),t.depthMask(!0),t.disable(t.BLEND)}owned(e,o,r,t){let s=this.gl,a=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,a),s.bufferData(s.ARRAY_BUFFER,e,s.STATIC_DRAW);let i=this.vaoFor(a,o);return a&&t.push(a),i&&r.push(i),i}holoBuffers(e){let o=this.holoGpu.get(e.node);if(o)return o;let r=[],t=[],s=l=>({vao:l.length>0?this.owned(l,[3,3],r,t):null,count:l.length/Ct}),a=l=>({vao:l.length>0?this.owned(new Float32Array(l.flat()),[3],r,t):null,count:l.length}),i=new Map;for(let l of e.lines){let u=l.color.join(","),h=i.get(u)??{color:l.color,data:[]};i.set(u,h);for(let d=1;d<l.points.length;d++)h.data.push(...l.points[d-1]??[0,0,0],...l.points[d]??[0,0,0])}let c={vaos:r,bufs:t,lit:s(bo(e.lit)),ghosts:s(bo(e.ghosts)),lines:[...i.values()].map(l=>({vao:this.owned(new Float32Array(l.data),[3],r,t),count:l.data.length/3,color:l.color})),dots:a(e.dots),beads:a(e.beads),lastUsed:performance.now()};return this.holoGpu.set(e.node,c),c}freeHolo(e){for(let o of e.vaos)this.gl.deleteVertexArray(o);for(let o of e.bufs)this.gl.deleteBuffer(o)}drawHolo(e,o,r){let t=this.gl,s=this.prog,a=e.holo,i=this.holoBuffers(a);if(i.lastUsed=performance.now(),!this.shell){let m=xn();this.shell={vao:this.vao(m,[3,3]),count:m.length/Ct}}if(!this.beam){let m=wn();this.beam={vao:this.vao(m,[3,3]),count:m.length/Ct}}let c=a.tint,l=(m,p)=>{t.useProgram(m.p),t.uniformMatrix4fv(m.u.get("uViewProj")??null,!1,o.viewProj),t.uniformMatrix4fv(m.u.get("uModel")??null,!1,p);let b=m.u.get("uCamPos");b&&t.uniform3f(b,o.eye[0],o.eye[1],o.eye[2]);let g=m.u.get("uDirect");g&&t.uniform1f(g,r?1:0);let E=m.u.get("uExposure");E&&t.uniform1f(E,o.exposure)},u=m=>{this.beam&&(l(s.beam,e.model),t.uniform1f(s.beam.u.get("uTime")??null,o.time),t.uniform1f(s.beam.u.get("uSide")??null,m),t.bindVertexArray(this.beam.vao),t.drawArrays(t.TRIANGLES,0,this.beam.count))};u(-1),l(s.organ,e.model);let h=(m,p,b,g)=>{!m.vao||m.count===0||(t.uniform3f(s.organ.u.get("uColor")??null,p[0],p[1],p[2]),t.uniform1f(s.organ.u.get("uAlpha")??null,b),t.uniform1f(s.organ.u.get("uPulse")??null,g),t.bindVertexArray(m.vao),t.drawArrays(t.TRIANGLES,0,m.count))};h(i.ghosts,[.42,.5,.58],a.whole?.1:.14,0),h(i.lit,c,.86,e.pulse),l(s.line,e.model);let d=(m,p)=>t.uniform4f(s.line.u.get("uColor")??null,m[0]*p,m[1]*p,m[2]*p,p);t.uniform1f(s.line.u.get("uRound")??null,0);for(let m of i.lines)d(m.color,.92),t.bindVertexArray(m.vao),t.drawArrays(t.LINES,0,m.count);t.uniform1f(s.line.u.get("uRound")??null,1),i.dots.vao&&(d(c,.75),t.uniform1f(s.line.u.get("uPointSize")??null,.017*o.pxPerMetre),t.bindVertexArray(i.dots.vao),t.drawArrays(t.POINTS,0,i.dots.count)),i.beads.vao&&(d(Rs,.95),t.uniform1f(s.line.u.get("uPointSize")??null,.03*o.pxPerMetre),t.bindVertexArray(i.beads.vao),t.drawArrays(t.POINTS,0,i.beads.count)),l(s.line,Ts),t.uniform1f(s.line.u.get("uRound")??null,0),t.bindVertexArray(this.vaos.leaders);for(let[m,p,b]of[[e.rings,Es,.5],[e.leaders,Ms,.9]])m.length!==0&&(d(p,b),t.bindBuffer(t.ARRAY_BUFFER,this.leaderBuf),t.bufferData(t.ARRAY_BUFFER,m,t.DYNAMIC_DRAW),t.drawArrays(t.LINES,0,m.length/3));let f=Math.floor(e.targets.length/4);if(f>0){let m=new Float32Array(f*36),p=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1];for(let b=0;b<f;b++){let g=e.targets[b*4]??0,E=e.targets[b*4+1]??0,R=e.targets[b*4+2]??0,P=e.targets[b*4+3]??0;for(let B=0;B<6;B++)m.set([g,E,R,p[B*2]??0,p[B*2+1]??0,P],(b*6+B)*6)}t.useProgram(s.reticle.p),t.uniformMatrix4fv(s.reticle.u.get("uViewProj")??null,!1,o.viewProj),t.uniform3f(s.reticle.u.get("uRight")??null,o.right[0],o.right[1],o.right[2]),t.uniform3f(s.reticle.u.get("uUp")??null,o.up[0],o.up[1],o.up[2]),t.uniform3f(s.reticle.u.get("uCamPos")??null,o.eye[0],o.eye[1],o.eye[2]),t.uniform1f(s.reticle.u.get("uTime")??null,o.time),t.uniform1f(s.reticle.u.get("uDirect")??null,r?1:0),t.uniform1f(s.reticle.u.get("uExposure")??null,o.exposure),t.bindBuffer(t.ARRAY_BUFFER,this.reticleBuf),t.bufferData(t.ARRAY_BUFFER,m,t.DYNAMIC_DRAW),t.bindVertexArray(this.vaos.reticles),t.drawArrays(t.TRIANGLES,0,f*6)}l(s.shell,e.model),t.uniform3f(s.shell.u.get("uTint")??null,c[0],c[1],c[2]),t.uniform1f(s.shell.u.get("uWhole")??null,a.whole||a.skin?1:0),t.uniform1f(s.shell.u.get("uTime")??null,o.time),t.uniform1f(s.shell.u.get("uScanY")??null,e.scanY),t.bindVertexArray(this.shell.vao),t.colorMask(!1,!1,!1,!1),t.depthMask(!0),t.drawArrays(t.TRIANGLES,0,this.shell.count),t.colorMask(!0,!0,!0,!0),t.depthMask(!1),t.drawArrays(t.TRIANGLES,0,this.shell.count),u(1)}drawStudy(e,o,r,t){let s=this.gl,a=this.prog;this.ensureStudyGpu();let i=this.studyGpu;if(!i)return;let c=d=>{s.useProgram(d.p);let f=(E,R)=>{let P=d.u.get(E);P&&s.uniform1f(P,R)},m=d.u.get("uViewProj");m&&s.uniformMatrix4fv(m,!1,r.viewProj);let p=d.u.get("uCamPos");p&&s.uniform3f(p,r.eye[0],r.eye[1],r.eye[2]),f("uDirect",t?1:0),f("uExposure",o.exposure),f("uTime",o.time);let b=d.u.get("uNeonA");b&&s.uniform3f(b,e.neonA[0],e.neonA[1],e.neonA[2]);let g=d.u.get("uNeonB");g&&s.uniform3f(g,e.neonB[0],e.neonB[1],e.neonB[2])};(e.lights>.001||e.deep>.001)&&(s.disable(s.DEPTH_TEST),s.useProgram(a.studyDim.p),s.uniform1f(a.studyDim.u.get("uStudy")??null,e.lights),["uSpotA","uSpotB","uSpotC"].forEach((d,f)=>{let m=e.spots[f]??[0,0,0,0];s.uniform4f(a.studyDim.u.get(d)??null,m[0],m[1],m[2],m[3])}),s.uniform3f(a.studyDim.u.get("uSpotW")??null,e.spotW[0],e.spotW[1],e.spotW[2]),s.uniform1f(a.studyDim.u.get("uDeep")??null,e.deep),s.bindVertexArray(this.vaos.full),s.drawArrays(s.TRIANGLES,0,3),s.enable(s.DEPTH_TEST));let l=e.pod,u=l?.kind==="table"?{vao:i.table,count:i.tableCount}:{vao:i.pod,count:i.podCount};l&&l.assemble>.001&&u.vao&&(s.disable(s.BLEND),s.depthMask(!0),c(a.studyTable),s.uniformMatrix4fv(a.studyTable.u.get("uModel")??null,!1,l.frame),s.uniform1f(a.studyTable.u.get("uAssemble")??null,l.assemble),s.uniform1f(a.studyTable.u.get("uPop")??null,l.pop),s.bindVertexArray(u.vao),s.drawArrays(s.TRIANGLES,0,u.count),s.enable(s.BLEND),s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA),s.depthMask(!1));let h=l?.kind==="table"?{vao:i.cone,count:i.coneCount}:{vao:i.column,count:i.columnCount};if(l&&l.beamLight>.001&&h.vao){c(a.studyBeam),s.uniformMatrix4fv(a.studyBeam.u.get("uModel")??null,!1,l.beam),s.uniform1f(a.studyBeam.u.get("uLight")??null,l.beamLight),s.uniform1f(a.studyBeam.u.get("uHeight")??null,l.beamHeight);let d=l.kind==="table"?[.86,.92,1]:[e.neonA[0]*.75+.25,e.neonA[1]*.75+.25,e.neonA[2]*.75+.25];s.uniform3f(a.studyBeam.u.get("uTint")??null,d[0],d[1],d[2]),s.uniform1f(a.studyBeam.u.get("uGain")??null,l.kind==="table"?1:3.2),s.bindVertexArray(h.vao),s.drawArrays(s.TRIANGLES,0,h.count)}if(e.claim){let d=e.claim;c(a.studyGlow),s.uniform3f(a.studyGlow.u.get("uCentre")??null,d.centre[0],d.centre[1],d.centre[2]),s.uniform3f(a.studyGlow.u.get("uU")??null,d.u[0],d.u[1],d.u[2]),s.uniform3f(a.studyGlow.u.get("uV")??null,d.v[0],d.v[1],d.v[2]),s.uniform2f(a.studyGlow.u.get("uHalf")??null,d.hu,d.hv),s.uniform1f(a.studyGlow.u.get("uOn")??null,e.lights),s.bindVertexArray(i.quad),s.drawArrays(s.TRIANGLES,0,6)}if(e.holo&&e.holo.reveal>.001){let d=e.holo;c(a.studyHolo),s.uniform3f(a.studyHolo.u.get("uCentre")??null,d.centre[0],d.centre[1],d.centre[2]),s.uniform3f(a.studyHolo.u.get("uRight")??null,d.right[0],d.right[1],d.right[2]),s.uniform3f(a.studyHolo.u.get("uUp")??null,d.up[0],d.up[1],d.up[2]),s.uniform1f(a.studyHolo.u.get("uHalf")??null,d.half),s.uniform1f(a.studyHolo.u.get("uReveal")??null,d.reveal),s.uniform1f(a.studyHolo.u.get("uFlash")??null,d.flash),s.uniform1f(a.studyHolo.u.get("uGlow")??null,d.glow),s.uniform1f(a.studyHolo.u.get("uScan")??null,d.scan),s.uniform1f(a.studyHolo.u.get("uMotion")??null,e.motion?1:0),s.uniform4f(a.studyHolo.u.get("uRect")??null,d.rect[0],d.rect[1],d.rect[2],d.rect[3]),s.uniform1i(a.studyHolo.u.get("uTex")??null,0),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,d.tex),s.bindVertexArray(i.quad),s.drawArrays(s.TRIANGLES,0,6)}}ensureStudyGpu(){if(!this.studyGpu){let e=on(),o=nn(),r=so(.5,.08,Ft),t=so(.06,.22,1);this.studyGpu={table:this.vao(e,[3,3,1,1]),tableCount:e.length/8,pod:this.vao(o,[3,3,1,1]),podCount:o.length/8,cone:this.vao(r,[3,3]),coneCount:r.length/6,column:this.vao(t,[3,3]),columnCount:t.length/6,quad:this.vao(new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),[2])}}}drawStages(e,o,r,t){let s=this.gl,a=this.prog;this.ensureStudyGpu();let i=this.studyGpu;if(!i)return;let c=(l,u)=>{s.useProgram(l.p);let h=(b,g)=>{let E=l.u.get(b);E&&s.uniform1f(E,g)},d=l.u.get("uViewProj");d&&s.uniformMatrix4fv(d,!1,r.viewProj);let f=l.u.get("uCamPos");f&&s.uniform3f(f,r.eye[0],r.eye[1],r.eye[2]),h("uDirect",t?1:0),h("uExposure",o.exposure),h("uTime",o.time);let m=l.u.get("uNeonA");m&&s.uniform3f(m,u.neonA[0],u.neonA[1],u.neonA[2]);let p=l.u.get("uNeonB");p&&s.uniform3f(p,u.neonB[0],u.neonB[1],u.neonB[2])};s.enable(s.BLEND),s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA),s.depthMask(!1);for(let l of e){l.beamLight>.001&&i.column&&(c(a.studyBeam,l),s.uniformMatrix4fv(a.studyBeam.u.get("uModel")??null,!1,l.beam),s.uniform1f(a.studyBeam.u.get("uLight")??null,l.beamLight),s.uniform1f(a.studyBeam.u.get("uHeight")??null,1),s.uniform3f(a.studyBeam.u.get("uTint")??null,l.neonA[0]*.75+.25,l.neonA[1]*.75+.25,l.neonA[2]*.75+.25),s.uniform1f(a.studyBeam.u.get("uGain")??null,3.2),s.bindVertexArray(i.column),s.drawArrays(s.TRIANGLES,0,i.columnCount));let u=l.holo;u.reveal<=.001||(c(a.studyHolo,l),s.uniform3f(a.studyHolo.u.get("uCentre")??null,u.centre[0],u.centre[1],u.centre[2]),s.uniform3f(a.studyHolo.u.get("uRight")??null,u.right[0],u.right[1],u.right[2]),s.uniform3f(a.studyHolo.u.get("uUp")??null,u.up[0],u.up[1],u.up[2]),s.uniform1f(a.studyHolo.u.get("uHalf")??null,u.half),s.uniform1f(a.studyHolo.u.get("uReveal")??null,u.reveal),s.uniform1f(a.studyHolo.u.get("uFlash")??null,u.flash),s.uniform1f(a.studyHolo.u.get("uGlow")??null,u.glow),s.uniform1f(a.studyHolo.u.get("uScan")??null,u.scan),s.uniform1f(a.studyHolo.u.get("uMotion")??null,l.motion?1:0),s.uniform4f(a.studyHolo.u.get("uRect")??null,u.rect[0],u.rect[1],u.rect[2],u.rect[3]),s.uniform1i(a.studyHolo.u.get("uTex")??null,0),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,u.tex),s.bindVertexArray(i.quad),s.drawArrays(s.TRIANGLES,0,6))}}dispose(){let e=this.gl;for(let o of this.holoGpu.values())this.freeHolo(o);this.holoGpu.clear();for(let o of Object.values(this.prog))o&&e.deleteProgram(o.p);if(this.post)for(let o of Object.values(this.post))e.deleteProgram(o.p);this.freeTargets();for(let o of this.screenTex.values())o.grade!==4&&e.deleteTexture(o.tex);e.deleteTexture(this.skyTex),e.deleteTexture(this.atlasTex),e.deleteTexture(this.shadowTex),e.deleteTexture(this.black)}};function Ps(n,e){let[o,r,t]=n,[s,a,i]=e,c=(l,u,h,d)=>[...l,...u,...h,...l,...h,...d];return new Float32Array([...c([o,r,i],[s,r,i],[s,a,i],[o,a,i]),...c([s,r,t],[o,r,t],[o,a,t],[s,a,t]),...c([s,r,i],[s,r,t],[s,a,t],[s,a,i]),...c([o,r,t],[o,r,i],[o,a,i],[o,a,t]),...c([o,a,i],[s,a,i],[s,a,t],[o,a,t]),...c([o,r,t],[s,r,t],[s,r,i],[o,r,i])])}var Ss=[0,23,0];function Fs(n){return[0,Math.round(23+(n-7)*ye*.55),0]}var yr={az:34*We,el:7*We,dist:160},tt=64*We,Eo=34*We,xr=[52,280],wr=[3*We,62*We],_s=3.4,Ls=6.8,Vs=1.9;function Tr(n,e=Ss){let o=Math.cos(n.el),r=[e[0]+n.dist*o*Math.sin(n.az),e[1]+n.dist*Math.sin(n.el),e[2]+n.dist*o*Math.cos(n.az)],t=e[0]-r[0],s=e[1]-r[1],a=e[2]-r[2];return{eye:r,heading:Me(t,a),pitch:Math.atan2(s,Math.hypot(t,a)),fov:Eo,level:null}}function Kt(n,e,o,r,t=he){return{eye:[e[0],de(n)+t,e[1]],heading:o,pitch:r,fov:tt,level:n}}function je(n){let e=Le(n,0,1);return e*e*(3-2*e)}function Xt(n,e,o,r){let t=Math.max(.001,Ko(e)),s=Le(t/3,3.2,8),a=Math.max(.6,t/s),i=[0];for(let m=1;m<e.length;m++){let p=e[m-1],b=e[m];i.push((i[m-1]??0)+(p&&b?Math.hypot(b[0]-p[0],b[1]-p[1]):0))}let c=m=>{for(let p=1;p<e.length;p++){let b=i[p-1]??0,g=i[p]??0;if(m<=g||p===e.length-1){let E=e[p-1]??[0,0],R=e[p]??E,P=g>b?Le((m-b)/(g-b),0,1):1;return[_e(E[0],R[0],P),_e(E[1],R[1],P)]}}return e[e.length-1]??[0,0]},l=e[e.length-1]??[0,0],u=e[e.length-2]??l,h=Me(l[0]-u[0],l[1]-u[1]),d=m=>{let p=c(m),b=c(Math.min(t,m+2.4));return Math.hypot(b[0]-p[0],b[1]-p[1])<.05?h:Me(b[0]-p[0],b[1]-p[1])},f=de(n);return{duration:a,interruptible:!0,route:e.map(m=>[m[0],f,m[1]]),at(m){let p=ct(m),b=c(p*t),g=d(p*t);g=o.heading+ut(o.heading,g)*je(m/.28),r.heading!==null&&(g+=ut(g,r.heading)*je((m-.66)/.34));let E=_e(_e(o.eye??he,he,je(m/.25)),r.eye??he,je((m-.7)/.3));return Kt(n,b,g,_e(o.pitch,r.pitch,p),E)}}}function Ds(n,e,o){let r=Le(.9*Math.abs(e-n)+.9,1.6,4.6),t=s=>_e(de(n),de(e),ct(s));return{duration:r,cab:t,at(s){let a=t(s),i=o+ut(o,Math.PI)*je(s*1.6);return{eye:[0,a+he,0],heading:i,pitch:0,fov:tt,level:Math.round(_e(n,e,ct(s)))}}}}function Mo(n,e,o,r,t){let s=a=>{let i=1-a,c=i*i*i,l=3*i*i*a,u=3*i*a*a,h=a*a*a;return[0,1,2].map(d=>c*(n.eye[d]??0)+l*(o[d]??0)+u*(r[d]??0)+h*(e.eye[d]??0))};return{duration:t,at(a){let i=ct(a),c=je((a-.15)/.8);return{eye:s(i),heading:n.heading+ut(n.heading,e.heading)*c,pitch:_e(n.pitch,e.pitch,c),fov:_e(n.fov,e.fov,je((a-.3)/.7)),level:a>.7?e.level:n.level}}}}var qt=class{layout;target;home;mode="exterior";orbit;level=0;pos=Pt;heading=0;pitch=0;eye=he;rising=!1;reducedMotion=!1;destination=null;vel=[0,0];legs=[];legT=0;finish=null;idleFor=0;stepBuffer=0;constructor(e=Xo){this.layout=e;let o=e.levels.length;this.target=Fs(o),this.home={...yr,dist:yr.dist*Math.max(1,o*ye/(7*ye))},this.orbit={...this.home}}camera(){let e=this.mode==="travel"?this.legs[0]:void 0;return e?e.at(Le(this.legT/e.duration,0,1)):this.mode==="exterior"?Tr(this.orbit,this.target):Kt(this.level,this.pos,this.heading,this.pitch,this.eye)}cabY(){let e=this.mode==="travel"?this.legs[0]:void 0;if(e?.cab)return e.cab(Le(this.legT/e.duration,0,1));let o=this.camera();return de(o.level??this.level)}routeAhead(){let e=this.mode==="travel"?this.legs[0]:void 0;if(!e?.route)return null;let o=this.camera(),r=e.route,t=0,s=1/0;for(let a=0;a<r.length-1;a++){let i=r[a];if(!i)continue;let c=Math.hypot(i[0]-o.eye[0],i[2]-o.eye[2]);c<s&&(s=c,t=a)}return[[o.eye[0],r[0]?.[1]??0,o.eye[2]],...r.slice(t+1)]}get travelling(){return this.mode==="travel"}goTo(e,o=this.reducedMotion){let r=this.plan(e);return r?(this.destination=e.kind==="store"||e.kind==="level"?e:null,this.vel=[0,0],o||r.legs.length===0?(this.legs=[],r.finish(),!0):(this.legs=r.legs,this.legT=0,this.finish=r.finish,this.mode="travel",!0)):!1}here(){let e=this.camera();return e.level===null?null:{level:e.level,p:[e.eye[0],e.eye[2]],heading:e.heading,pitch:e.pitch,eye:e.eye[1]-de(e.level)}}plan(e){let o=this.camera(),r=this.mode==="exterior"?null:this.here(),t=(h,d,f,m=0,p=he)=>()=>{this.mode="walk",this.level=h,this.pos=d,this.heading=f,this.pitch=m,this.eye=p,this.rising=!1};if(e.kind==="exterior"){let h=Tr(this.orbit,this.target);return{legs:r?[Mo(o,h,[o.eye[0]*1.3,o.eye[1]+10,o.eye[2]*1.3+24],[h.eye[0]*.75,h.eye[1]+12,h.eye[2]*.75],2.6)]:[],finish:()=>{this.mode="exterior",this.idleFor=0}}}let s,a;if(e.kind==="plaza")s=0,a={p:Pt,heading:0,pitch:.04,waypoint:"plaza"};else if(e.kind==="level")s=e.level,a=r&&r.level!==s?{p:[0,4],heading:Math.PI,pitch:.08,waypoint:"bridge"}:{p:at,heading:0,pitch:0,waypoint:"lobby"};else if(e.kind==="store"){let h=this.layout.storeOf(e.node);if(!h)return null;s=h.level;let d=e.station?h.stations[e.station]:null;a=d?{p:d.p,heading:d.heading,pitch:d.pitch,waypoint:`${e.station}:${h.node}`,eye:d.eye??he}:{p:h.view,heading:h.heading,pitch:.09,waypoint:`store:${h.node}`}}else s=e.level,a={p:e.p,heading:Number.NaN,pitch:0,waypoint:null};let i=h=>t(s,a.p,Number.isNaN(h)?r?.heading??0:h,a.pitch,a.eye??he);if(!r){if(e.kind==="plaza"){let p=Kt(0,Pt,0,.04);return{legs:[Mo(o,p,[o.eye[0]*.6,o.eye[1]*.55,o.eye[2]*.6+30],[0,10,62],3)],finish:i(0)}}let h=de(s),d=Kt(s,at,0,0),f=[Mo(o,d,[o.eye[0]*.55,h+he+14+o.eye[1]*.25,o.eye[2]*.5+42],[0,h+he+1.5,34],3.2)];if(a.waypoint!=="lobby"){let p=a.waypoint?this.layout.route(s,at,a.waypoint):this.layout.routeTo(s,at,a.p);p&&f.push(Xt(s,p,{heading:0,pitch:0},{heading:Number.isNaN(a.heading)?null:a.heading,pitch:a.pitch,eye:a.eye}))}let m=f[f.length-1];return{legs:f,finish:i(Number.isNaN(a.heading)?m?m.at(1).heading:0:a.heading)}}let c=[],l={heading:r.heading,pitch:r.pitch,eye:r.eye};if(r.level!==s){let h=this.layout.route(r.level,r.p,"lift");if(!h)return null;c.push(Xt(r.level,h,l,{heading:null,pitch:0}));let d=c[c.length-1]?.at(1).heading??0;c.push(Ds(r.level,s,d)),l={heading:Math.PI,pitch:0,eye:he};let m=this.layout.waypoint(s,"lift")?.p??[0,0],p=a.waypoint?this.layout.route(s,m,a.waypoint):this.layout.routeTo(s,m,a.p);p&&c.push(Xt(s,p,l,{heading:Number.isNaN(a.heading)?null:a.heading,pitch:a.pitch,eye:a.eye}))}else{let h=a.waypoint?this.layout.route(s,r.p,a.waypoint):this.layout.routeTo(s,r.p,a.p);if(!h)return null;c.push(Xt(s,h,l,{heading:Number.isNaN(a.heading)?null:a.heading,pitch:a.pitch,eye:a.eye}))}let u=c[c.length-1];return{legs:c,finish:i(Number.isNaN(a.heading)?u?u.at(1).heading:r.heading:a.heading)}}interrupt(){if(!this.legs[0]?.interruptible)return;let o=this.here();o&&(this.legs=[],this.finish=null,this.mode="walk",this.level=o.level,this.pos=this.layout.move(o.level,o.p,0,0),this.heading=o.heading,this.pitch=o.pitch,this.eye=o.eye)}update(e,o){let r=o.forward!==0||o.strafe!==0||o.turn!==0||o.lookX!==0||o.lookY!==0||o.zoom!==0;if(this.mode==="travel")if(r&&this.legs[0]?.interruptible)this.interrupt();else{this.legT+=e;let f=this.legs[0];for(;f&&this.legT>=f.duration;)this.legT-=f.duration,this.legs.shift(),f=this.legs[0];if(!f){let m=this.finish;this.finish=null,this.legT=0,m?.()}return!0}if(this.mode==="exterior"){let f=this.orbit,m=f.az-o.lookX*.0052-o.turn*e*.9,p=Le(f.el+o.lookY*.0042+o.forward*e*.5,wr[0],wr[1]),b=Le(f.dist*Math.exp(o.zoom*.0011-o.strafe*0),xr[0],xr[1]);this.idleFor=r?0:this.idleFor+e,!this.reducedMotion&&this.idleFor>5&&(m+=e*.035);let g=m!==f.az||p!==f.el||b!==f.dist;return this.orbit={az:m,el:p,dist:b},g}this.heading+=o.lookX*.0042+o.turn*Vs*e,this.pitch=Le(this.pitch-o.lookY*.0036,-.95,.95),o.zoom!==0&&(this.stepBuffer=Le(this.stepBuffer-o.zoom*.01,-6,6));let t=this.stepBuffer*Math.min(1,e*6);if(this.stepBuffer-=t,(o.forward!==0||o.strafe!==0||Math.abs(this.stepBuffer)>.01)&&this.eye!==he&&(this.rising=!0),this.rising){let f=this.eye+(he-this.eye)*Math.min(1,e*5);this.eye=this.reducedMotion||Math.abs(he-f)<.01?he:f,this.eye===he&&(this.rising=!1)}let a=o.run?Ls:_s,i=Math.sin(this.heading),c=-Math.cos(this.heading),l=[(i*o.forward-c*o.strafe)*a,(c*o.forward+i*o.strafe)*a],u=1-Math.exp(-e*10);this.vel=[_e(this.vel[0],l[0],u),_e(this.vel[1],l[1],u)];let h=this.vel[0]*e+i*t,d=this.vel[1]*e+c*t;return Math.abs(h)+Math.abs(d)>1e-6&&(this.pos=this.layout.move(this.level,this.pos,h,d)),r||Math.abs(this.vel[0])+Math.abs(this.vel[1])>.01||this.eye!==he&&this.rising}};function Os(n,e,o,r){let t=(l,u,h)=>(u[0]-l[0])*(h[1]-l[1])-(u[1]-l[1])*(h[0]-l[0]),s=t(o,r,n),a=t(o,r,e),i=t(n,e,o),c=t(n,e,r);return(s>0&&a<0||s<0&&a>0)&&(i>0&&c<0||i<0&&c>0)}var Ro=.35,Is=.33;function vt(n){let e=Number.parseInt(n.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var Mr=1,Ns=80*Math.PI/180,Er=17,Rr=2,Ge=.18,Ao=1.2,Qt={half:1.36,size:512},Ar={w:768,h:432},Pr={w:320,h:180},Sr=3.2,Bs=4,Us=12,Fr={gallery:1,warm:1.04,chroma:1.16,noir:1.3,cinema:1.3},Cs={store:"model",board:"body",theater:"theater",window:"front",print:"model",directory:null},_r=class{canvas;host;opts;site;gl=null;renderer=null;world=null;live=null;studyHolo=null;daisHolo=null;filmHolo=null;filmLow=null;filmDrawn="";daisView=new Map;filmPrev=null;filmBuild=0;filmSince=0;studyOn=!0;studyT=0;studyAt=null;studyLine=null;studyMask=-1;studyFlash=0;studyPop=0;studyLive=!0;studyRise=1;galleryShift=0;grade={shadow:[0,0,0],mid:[.5,.5,.5],high:[1,1,1],top:[1,1,1],bottom:[0,0,0],amount:0};gradeTarget=null;gradeAt="";studyPreshow=0;studyPreshowFor=null;studyShown=0;lessonRects=new Map;examplesRects=new Map;steleRects=new Map;modelScreens=new Map;rig;input=null;raf=0;lastFrame=0;lastRender=0;time=0;disposed=!1;failed=!1;visible=!0;dirty=!0;ready=!1;reduced;scale=.9;exposure=ge.exposure;ema=16;calm=0;slowSince=0;busyFrames=0;wasBusy=!1;proj=ht();view=ht();viewProj=ht();invViewProj=ht();pointer=null;pointerDirty=!1;hover=null;focus=null;focusAt=0;snapKey="";snapAt=0;highlightLevel=null;fronts;opaqueWalls;holoCache=new Map;boards=new Map;cinemaScreens=new Map;galleryAt=new Map;galleryShown=new Map;galleryLoading=new Set;prints=new Map;printCaptions=new Map;drawnHolos=[];theaterPlaying=!1;dim=0;theaterKey="";uploaded=!1;resizeObserver=null;livePrev=null;postersLoading=new Set;observer=null;onLost=e=>{e.preventDefault(),this.fail("lost")};fixedScale;fixedDpr;constructor(e,o,r){this.canvas=e,this.host=o,this.opts=r,this.site=r.site??Vt,this.rig=new qt(this.site.layout);let t=globalThis.__OUTLET_SCALE__;this.fixedScale=typeof t=="number"&&t>0&&t<=1?t:null,this.fixedScale&&(this.scale=this.fixedScale);let s=globalThis.__OUTLET_DPR__;this.fixedDpr=typeof s=="number"&&s>=1&&s<=3?s:null,this.reduced=r.reducedMotion,this.rig.reducedMotion=r.reducedMotion,this.fronts=this.site.layout.stores.map(l=>({node:l.node,level:l.level,centre:[l.door[0],de(l.level)+2.8,l.door[1]],normal:[-l.bay.inward[0],0,-l.bay.inward[1]],u:[l.bay.along[0],0,l.bay.along[1]]}));let a=G,i=V;this.opaqueWalls=[...[-1,1].flatMap(l=>[-1,1].map(u=>({a:[l*i,u*i],b:[l*a,u*a]}))),{a:[i,0],b:[a,0]},{a:[0,-i],b:[0,-a]},{a:[-i,0],b:[-a,0]},...this.site.layout.stores.flatMap(l=>{let u=l.rooms,h=l.bay.inward,d=b=>[b[0]+h[0]*u.stele.thick,b[1]+h[1]*u.stele.thick],f=(b,g)=>[u.partition.door[0]+(b[0]-u.partition.door[0])*g,u.partition.door[1]+(b[1]-u.partition.door[1])*g],m=Math.hypot(u.partition.a[0]-u.partition.door[0],u.partition.a[1]-u.partition.door[1]),p=Math.hypot(u.partition.b[0]-u.partition.door[0],u.partition.b[1]-u.partition.door[1]);return[{a:u.stele.a,b:u.stele.b},{a:d(u.stele.a),b:d(u.stele.b)},{a:u.partition.a,b:f(u.partition.a,u.partition.doorHalf/m)},{a:f(u.partition.b,u.partition.doorHalf/p),b:u.partition.b}]})];let c=e.getContext("webgl2",{antialias:!0,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(!c){queueMicrotask(()=>this.fail("webgl"));return}this.gl=c,e.addEventListener("webglcontextlost",this.onLost);try{this.world=vr(this.site);for(let h of this.world.screens)h.kind==="board"&&h.node&&this.boards.set(h.node,h.rect),h.kind==="theater"&&h.node&&this.cinemaScreens.set(h.node,h.rect),h.kind==="print"&&h.node&&this.prints.set(h.node,h.rect),h.kind==="store"&&h.node&&this.modelScreens.set(h.node,h.rect);let l=Gs(c);this.renderer=new kt(c,this.world,l),o.dataset.quality=l,!this.fixedScale&&Vr(c)&&(this.scale=.5),this.live=new Gt(c,this.site.holos),this.studyHolo=new lt(c,r.base,()=>{this.uploaded=!0,this.dirty=!0},this.site.holos);let u=()=>{this.uploaded=!0,this.dirty=!0};this.site.dais==="hologram"&&(this.daisHolo=new lt(c,r.base,u,this.site.holos,Qt.size)),this.site.theater==="build"&&(this.filmHolo=new lt(c,r.base,u,this.site.holos,Ar.w,Ar.h),this.filmLow=new lt(c,r.base,u,this.site.holos,Pr.w,Pr.h));for(let h of this.world.overlays)h.node&&(h.key.startsWith("lesson:")?this.lessonRects.set(h.node,h.rect):h.key.startsWith("examples:")?this.examplesRects.set(h.node,h.rect):h.key.startsWith("stele:")?this.steleRects.set(h.node,h.rect):h.key.startsWith("caption:")&&this.printCaptions.set(h.node,h.rect))}catch(l){console.warn("XI Outlet could not start its renderer",l),queueMicrotask(()=>this.fail("compile"));return}this.rig.goTo(r.start,!0),this.input=new Ht(o,{click:(l,u)=>this.click(l,u),hover:(l,u)=>{this.pointer=l<0?null:[l,u],this.pointerDirty=!0},back:()=>this.back(),activate:()=>this.activate(),poke:()=>{this.dirty=!0},blocked:()=>document.querySelector("dialog[open]")!==null}),typeof IntersectionObserver<"u"&&(this.observer=new IntersectionObserver(l=>{for(let u of l)this.visible=u.isIntersecting;this.visible&&(this.dirty=!0)}),this.observer.observe(o)),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.dirty=!0}),this.resizeObserver.observe(o)),ln().then(()=>{this.disposed||!this.renderer||(this.renderer.setAtlas(this.site.signs()),this.dirty=!0)}),this.raf=requestAnimationFrame(this.tick)}goTo(e,o=this.reduced){this.renderer&&(this.rig.goTo(e,o),this.dirty=!0)}activate(){let e=this.focus;e&&(e.kind==="store"&&e.part==="theater"&&this.seatedAt()===e.node?this.opts.onSelect?.(e):e.kind==="store"?this.goTo(Lr(e.node,e.part)):e.kind==="level"?this.goTo({kind:"level",level:e.level}):(e.kind==="lift"||e.kind==="directory")&&this.opts.onSelect?.(e))}back(){if(this.theaterPlaying){this.setTheaterPlaying(!1),this.opts.onTheaterExit?.();return}this.rig.mode!=="exterior"&&this.goTo({kind:"exterior"})}setTheaterPlaying(e){this.theaterPlaying!==e&&(this.theaterPlaying=e,this.dirty=!0)}seatedAt(){if(this.rig.mode!=="walk")return null;let e=this.rig.camera();if(e.level===null)return null;for(let o of this.site.layout.levels[e.level]?.stores??[]){let r=o.stations.theater;if(Math.hypot(r.p[0]-e.eye[0],r.p[1]-e.eye[2])<.9)return o.node}return null}setStudy(e){this.studyOn!==e&&(this.studyOn=e,this.dirty=!0)}setStudyLine(e){let o=this.studyLine;e?.node===o?.node&&e?.station===o?.station&&e?.line===o?.line&&e?.claim===o?.claim||(this.studyLine=e,e&&!this.reduced&&(this.studyPop=1),(e&&!this.reduced||e?.claim!==o?.claim||e?.node!==o?.node||e?.station!==o?.station)&&(this.dirty=!0))}setGallery(e,o){let r=this.site.gallery?.count(e)??0;if(r===0)return;let t=(Math.round(o)%r+r)%r;this.galleryAt.get(e)!==t&&(this.galleryAt.set(e,t),this.dirty=!0)}gradeStep(e){let o=this.site;if(!o.grade)return!1;let r=this.rig.camera(),t="none",s=null;if(this.rig.mode!=="exterior"&&r.level!==null){let f=o.layout.levels[r.level],m=f?it(f,[r.eye[0],r.eye[2]]):null;m&&m.kind!=="plaza"&&m.kind!=="void"&&(s=m.kind==="store"?m.store.node:null,t=`${r.level}:${s??""}`)}if(t!==this.gradeAt){this.gradeAt=t;let f=t==="none"||r.level===null?null:o.grade(r.level,s);this.gradeTarget=f?{shadow:vt(f.shadow),mid:vt(f.mid),high:vt(f.high),top:vt(f.top),bottom:vt(f.bottom),amount:f.amount}:null}let a=this.gradeTarget,i=this.grade,c=this.reduced?1:1-Math.exp(-e*2.4),l=!1,u=(f,m)=>{let p=[f[0]+(m[0]-f[0])*c,f[1]+(m[1]-f[1])*c,f[2]+(m[2]-f[2])*c];if(Math.abs(m[0]-p[0])+Math.abs(m[1]-p[1])+Math.abs(m[2]-p[2])>.003)l=!0;else return m;return p};a&&(i.amount<.002&&(i.shadow=a.shadow,i.mid=a.mid,i.high=a.high,i.top=a.top,i.bottom=a.bottom),i.shadow=u(i.shadow,a.shadow),i.mid=u(i.mid,a.mid),i.high=u(i.high,a.high),i.top=u(i.top,a.top),i.bottom=u(i.bottom,a.bottom));let h=a?.amount??0,d=i.amount+(h-i.amount)*c;return Math.abs(h-d)>.002?(i.amount=d,l=!0):i.amount=h,l}galleryInView(){if(this.rig.mode!=="walk"||this.rig.travelling)return!1;let e=this.rig.camera();if(e.level===null)return!1;let o=it(this.site.layout.levels[e.level],[e.eye[0],e.eye[2]]);if(o.kind!=="store"||!this.site.stationsOf(o.store.node).includes("gallery"))return!1;let r=o.store.stations.gallery;if(Math.hypot(r.p[0]-e.eye[0],r.p[1]-e.eye[2])>.9)return!1;let t=Math.atan2(Math.sin(e.heading-r.heading),Math.cos(e.heading-r.heading));return Math.abs(t)<.45}studyHere(){if(!this.studyOn||this.rig.mode!=="walk"||this.rig.travelling)return null;let e=this.rig.camera();if(e.level===null)return null;let o=null,r=.9;for(let t of this.site.layout.levels[e.level]?.stores??[])for(let s of this.site.stationsOf(t.node)){if(s==="theater"&&this.theaterPlaying)continue;let a=t.stations[s].p,i=Math.hypot(a[0]-e.eye[0],a[1]-e.eye[2]);i<r&&(r=i,o={s:t,station:s})}return o}setReducedMotion(e){this.reduced=e,this.rig.reducedMotion=e,this.dirty=!0}highlight(e){this.highlightLevel=e,this.dirty=!0}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.input?.dispose(),this.observer?.disconnect(),this.resizeObserver?.disconnect(),this.canvas.removeEventListener("webglcontextlost",this.onLost),this.live?.dispose(),this.studyHolo?.dispose(),this.daisHolo?.dispose(),this.filmHolo?.dispose(),this.filmLow?.dispose(),this.renderer?.dispose(),this.gl?.getExtension("WEBGL_lose_context")?.loseContext(),this.gl=null}fail(e){this.failed||this.disposed||(this.failed=!0,cancelAnimationFrame(this.raf),this.opts.onFail(e))}tick=e=>{if(this.disposed||this.failed)return;if(this.raf=requestAnimationFrame(this.tick),!this.visible||document.hidden){this.lastFrame=0;return}let o=this.lastFrame?Math.min(.5,(e-this.lastFrame)/1e3):1/60;this.lastFrame=e;let r=this.input?.consume();this.theaterPlaying&&r&&(r.forward!==0||r.strafe!==0||r.turn!==0||r.zoom!==0?(this.setTheaterPlaying(!1),this.opts.onTheaterExit?.()):r={...r,lookX:0,lookY:0});let t=r?this.rig.update(o,r):!1;this.reduced||(this.time+=o);let s=this.theaterPlaying?1:0,a=this.dim!==s;a&&(this.dim=this.reduced||Math.abs(s-this.dim)<.02?s:this.dim+(s-this.dim)*Math.min(1,o*5));let i=this.studyHere(),c=(B,I)=>B!==null&&I!==null&&B.s.node===I.s.node&&B.station===I.station;this.studyPreshowFor&&this.seatedAt()!==this.studyPreshowFor&&(this.studyPreshowFor=null),this.studyT===0&&!c(i,this.studyAt)&&(this.studyAt=i,this.studyMask=-1,this.studyPreshow=i?.station==="theater"&&this.studyPreshowFor!==i.s.node?en:0,i?.station==="theater"&&(this.studyPreshowFor=i.s.node),this.studyRise=i?.station==="theater"?0:1);let l=c(i,this.studyAt),u=l?1:0,h=this.studyT!==u;h&&(this.reduced?this.studyT=u:u>this.studyT?this.studyT=Math.min(1,this.studyT+o/Qo):this.studyT=Math.max(0,this.studyT-o/Zo)),this.studyT===0&&!l&&(this.studyAt=null),this.studyFlash>0&&(this.studyFlash=Math.max(0,this.studyFlash-o*2.2)),this.studyPop>0&&(this.studyPop=this.reduced?0:Math.max(0,this.studyPop-o/Jo));let d=(this.studyFlash>0||this.studyPop>0)&&this.studyT>0,f=this.studyAt,m=f!==null&&this.studyLine?.node===f.s.node&&this.studyLine.station===f.station&&this.studyLine.claim!==null;f?.station==="theater"&&this.studyT>=1&&this.studyPreshow>0&&(this.studyPreshow=Math.max(0,this.studyPreshow-o));let p=f?.station!=="theater"||this.studyPreshow>0||m?1:0,b=this.studyRise!==p;b&&(this.studyRise=this.reduced?p:p>this.studyRise?Math.min(1,this.studyRise+o/.9):Math.max(0,this.studyRise-o/.7));let g=this.gradeStep(o),E=this.galleryInView()?Is:0,R=this.galleryShift!==E;if(R){let B=Math.min(1,o*5);this.galleryShift=this.reduced||Math.abs(E-this.galleryShift)<.002?E:this.galleryShift+(E-this.galleryShift)*B}let P=t||this.rig.travelling||this.dirty||this.pointerDirty||a||h||d||b||R||g;if(!P&&(this.reduced||this.theaterPlaying||e-this.lastRender<33)){this.wasBusy=!1;return}this.render(e,P)};render(e,o){let r=this.gl,t=this.renderer;if(!r||!t)return;let s=this.lastRender?e-this.lastRender:16;this.lastRender=e;let a=this.uploaded;this.uploaded=!1,this.dirty=!1;let i=this.rig.camera(),c=this.fixedDpr??Math.min(window.devicePixelRatio||1,t.tier==="cinematic"?1.5:2),l=Math.max(1,this.canvas.clientWidth),u=Math.max(1,this.canvas.clientHeight),h=Math.max(1,Math.round(l*c*this.scale)),d=Math.max(1,Math.round(u*c*this.scale));(this.canvas.width!==h||this.canvas.height!==d)&&(this.canvas.width=h,this.canvas.height=d);let f=Math.min(1,Math.max(0,(i.fov-tt)/(Eo-tt))),m=l/u,p=i.fov+Math.max(0,Math.min(Ns,2*Math.atan(1/m))-tt)*(1-f);mn(this.proj,p,m,i.level===null?.5:.08,3200),l>640&&(this.proj[8]=(this.proj[8]??0)-.16*f),l>=640&&this.galleryShift>0&&(this.proj[8]=(this.proj[8]??0)+this.galleryShift);let b=fn(i.heading,i.pitch);Dt(this.view,i.eye,lo(i.eye,b)),dt(this.viewProj,this.proj,this.view),Ot(this.invViewProj,this.viewProj);let g=J(fe(b,[0,1,0])),E=fe(g,b);this.pointerDirty&&(this.pointerDirty=!1,this.hover=this.pointer?this.pickClient(this.pointer[0],this.pointer[1]):null,this.host.style.cursor=this.hover&&this.hover.kind!=="floor"?"pointer":""),e-this.focusAt>140&&(this.focusAt=e,this.focus=this.rig.mode==="exterior"?this.hover:this.pick(0,0),this.focus?.kind==="floor"&&(this.focus=null)),t.setRibbon(this.rig.routeAhead()),this.feedTextures(i.level,i.eye),this.updateLive(i.level,i.eye,b,s),this.updateFilm(s);let R=this.holoFrame(i.level,i.eye,b),P=this.daisFrame(i.level,i.eye,b,s);this.drawnHolos=[...R.map(U=>U.holo.node),...P.map(U=>U.node)];let I=this.rig.mode!=="exterior"&&Math.max(Math.abs(i.eye[0]),Math.abs(i.eye[2]))<G-.3&&i.eye[1]<(this.world?.roofY??0)?ge.exposureInside*this.roomGain(i.level,i.eye):ge.exposure;this.exposure=this.reduced?I:this.exposure+(I-this.exposure)*Math.min(1,s/1e3*3),Math.abs(I-this.exposure)<.01?this.exposure=I:this.dirty=!0;let K=this.rig.mode==="exterior"?this.highlightLevel??(this.hover?.kind==="level"?this.hover.level:null):null,re=K!==null?de(K):0;if(t.draw({viewProj:this.viewProj,invViewProj:this.invViewProj,eye:i.eye,right:g,up:E,time:this.time,cabY:this.rig.cabY(),fade:1,holos:R,stages:P.map(U=>U.draw),pxPerMetre:d/(2*Math.tan(p/2)),dim:this.dim,mirrorY:this.rig.mode==="exterior"||i.level===null||i.level===0?-.05:de(i.level),level:this.rig.mode==="exterior"?null:i.level,exposure:this.exposure,highlight:K!==null?{min:[-G-.45,re-ne-.05,-G-.45],max:[G+.45,re+ye-ne,G+.45],rgba:[.89,.14,.17,.16]}:null,study:this.studyFrame(i.eye),grade:this.grade.amount>.001?this.grade:null},h,d),o&&this.wasBusy&&!a&&this.adapt(s,e),this.wasBusy=o,this.ready||(this.ready=!0,this.host.dataset.state="live",this.opts.onReady()),this.emit(e,i.level,i.eye,i.heading),this.reportTheater(l,u),this.opts.onFrame){let U=Float32Array.from(this.viewProj);this.opts.onFrame({mode:this.rig.mode,level:i.level,x:i.eye[0],z:i.eye[2],eyeY:i.eye[1],heading:i.heading,pitch:i.pitch,width:l,height:u,project:(k,ee,T)=>{let v=(U[3]??0)*k+(U[7]??0)*ee+(U[11]??0)*T+(U[15]??0);if(v<.05)return null;let y=((U[0]??0)*k+(U[4]??0)*ee+(U[8]??0)*T+(U[12]??0))/v,_=((U[1]??0)*k+(U[5]??0)*ee+(U[9]??0)*T+(U[13]??0))/v;return[(y+1)/2*l,(1-_)/2*u,v]},blocked:(k,ee)=>{let T=[i.eye[0],i.eye[2]];return this.opaqueWalls.some(v=>Os(T,[k,ee],v.a,v.b))},studyHolo:this.studyShown})}}reportTheater(e,o){let r=this.seatedAt(),t=r?this.cinemaScreens.get(r):void 0,s=null;if(r&&t){let i=(d,f)=>{let m=t.centre[0]+t.u[0]*t.hu*d+t.v[0]*t.hv*f,p=t.centre[1]+t.u[1]*t.hu*d+t.v[1]*t.hv*f,b=t.centre[2]+t.u[2]*t.hu*d+t.v[2]*t.hv*f,g=this.viewProj,E=(g[0]??0)*m+(g[4]??0)*p+(g[8]??0)*b+(g[12]??0),R=(g[1]??0)*m+(g[5]??0)*p+(g[9]??0)*b+(g[13]??0),P=(g[3]??0)*m+(g[7]??0)*p+(g[11]??0)*b+(g[15]??0);return P<.05?null:[(E/P+1)/2*e,(1-R/P)/2*o]},c=i(-1,1),l=i(1,1),u=i(1,-1),h=i(-1,-1);c&&l&&u&&h&&(s={node:r,corners:[c,l,u,h]})}let a=s?`${this.theaterPlaying?"playing":"seated"}:${s.node}:${s.corners.map(i=>`${i[0].toFixed(1)},${i[1].toFixed(1)}`).join(";")}`:"";a!==this.theaterKey&&(this.theaterKey=a,this.host.dataset.theater=s?this.theaterPlaying?"playing":"seated":"",this.opts.onTheaterScreen?.(s))}adapt(e,o){if(!(this.fixedScale||++this.busyFrames<5)){if(this.ema=this.ema*.85+e*.15,this.renderer?.tier==="cinematic"&&this.scale<=.6&&this.ema>40){this.renderer.setTier("basic"),this.host.dataset.quality="basic",this.scale=.85,this.ema=24,this.calm=0;return}this.ema>42&&this.scale>Ro?(this.scale=Math.max(Ro,this.scale*.88),this.calm=0):this.ema<22?++this.calm>50&&this.scale<Mr&&(this.scale=Math.min(Mr,this.scale*1.08),this.calm=0):this.calm=0,this.scale<=Ro&&this.ema>650?this.slowSince?o-this.slowSince>9e3&&this.fail("slow"):this.slowSince=o:this.slowSince=0}}roomGain(e,o){let r=e===null?void 0:this.site.layout.levels[e];if(!r)return 1;let t=it(r,[o[0],o[2]]);return t.kind!=="store"?1:Math.min(Math.abs(o[0]),Math.abs(o[2]))>V?Fr.cinema:Fr[this.site.exhibitOf(t.store.node).mood]}posterUrl(e,o){let r=this.site.poster(e,o);return r?`${this.opts.base}${r}`:null}feedTextures(e,o){let r=this.renderer;if(!r)return;for(let c of this.site.layout.stores){let l=e===c.level?640:320,u=l===640?2:1,h=`store:${c.node}`;if(r.screenGrade(h)>=u)continue;let d=`${h}@${l}`;if(this.postersLoading.has(d)||this.postersLoading.size>=4)continue;let f=this.posterUrl(c.node,l);f&&(this.postersLoading.add(d),Lt(f).then(m=>{if(this.postersLoading.delete(d),!m||this.disposed||!this.renderer)return;this.renderer.setScreenImage(h,m,u,!0);let p=this.rig.camera().level;(p===null||p===c.level)&&(this.dirty=!0,this.uploaded=!0)}))}if(e===null)return;let t=this.site.layout.levels[e];if(!t)return;let s=`directory:${e}`;if(r.screenGrade(s)<3)r.setScreenImage(s,this.site.directory(e),3,!0),this.dirty=!0,this.uploaded=!0;else{let c=t.stores.slice().sort((l,u)=>Math.hypot(l.display[0]-o[0],l.display[1]-o[2])-Math.hypot(u.display[0]-o[0],u.display[1]-o[2]));e:for(let l of c){let u=this.nearStore(l,o);for(let[h,d,f,m]of this.storeCanvases(l))if(!(m&&!u)&&!(r.screenGrade(h)>=3)){r.setScreenImage(h,d(),3,!0,f),this.dirty=!0,this.uploaded=!0;break e}}}let a=this.site.gallery;for(let c of t.stores){if(!this.nearStore(c,o))continue;let l=`print:${c.node}`;if(a&&a.count(c.node)>0){let h=this.galleryAt.get(c.node)??0,d=`caption:${c.node}`;if(this.galleryShown.get(c.node)===h&&r.screenGrade(l)>=3&&r.screenGrade(d)>=3)continue;let f=`${l}#${h}`;if(this.galleryLoading.has(f)||this.galleryLoading.size>=2)continue;this.galleryLoading.add(f);let m=a.file(c.node,h);(this.opts.asset?this.opts.asset(m):Promise.resolve(`${this.opts.base}${m}`)).then(p=>Lt(p)).then(p=>{if(this.galleryLoading.delete(f),!(!p||this.disposed||!this.renderer)){if((this.galleryAt.get(c.node)??0)!==h){this.dirty=!0;return}this.renderer.setScreenImage(l,a.print(c.node,h,p),3,!0),this.renderer.setScreenImage(d,a.caption(c.node,h),3,!0,!0),this.galleryShown.set(c.node,h),this.dirty=!0,this.uploaded=!0}});continue}if(r.screenGrade(l)>=3||this.postersLoading.has(l)||this.postersLoading.size>=4)continue;let u=this.posterUrl(c.node,640);u&&(this.postersLoading.add(l),Lt(u).then(h=>{this.postersLoading.delete(l),!(!h||this.disposed||!this.renderer)&&(this.renderer.setScreenImage(l,h,3,!0),this.dirty=!0,this.uploaded=!0)}))}let i=new Set([s]);for(let c of t.stores){for(let[l]of this.storeCanvases(c))i.add(l);i.add(`print:${c.node}`),i.add(`caption:${c.node}`),i.add(`holo:${c.node}`)}r.evict(c=>i.has(c))}nearStore(e,o){return Math.hypot(e.door[0]-o[0],e.door[1]-o[2])<Us}storeCanvases(e){return this.site.canvases(e,this.boardSide(e)>0)}boardSide(e){let o=this.boards.get(e.node);return o?(e.holo.at[0]-o.centre[0])*o.u[0]+(e.holo.at[1]-o.centre[2])*o.u[2]>=0?1:-1:1}studyFrame(e){let o=this.studyAt,r=this.studyT,t=this.studyHolo;if(this.studyShown=0,!o||r<=0||!t)return null;let{s,station:a}=o,i=S=>{let x=Math.min(1,Math.max(0,S));return x*x*(3-2*x)},c=io(to(this.site.levelColor(s.tier))),l=de(s.level),u=this.site.theater==="build"&&a==="theater"?null:tn(s,a),h=this.studyLine?.node===s.node&&this.studyLine.station===a?this.studyLine:null,d=h?.claim??null,f=this.site.shot(s.node,a,h),m=u?f.parts:[],p=oo(m);u&&p!==this.studyMask&&(this.studyMask>=0&&!this.reduced&&(this.studyFlash=1),this.studyMask=p);let b=h?this.studyPop:0,g=1-b,E=b>0?i(g/.12)*(1-i((g-.3)/.7)):0,R=this.viewProj,P=[0,0,0,0],B=S=>{let x=1/0,A=1/0,O=-1/0,F=-1/0;for(let D of S){let L=(R[3]??0)*D[0]+(R[7]??0)*D[1]+(R[11]??0)*D[2]+(R[15]??0);if(L<.05)continue;let H=((R[0]??0)*D[0]+(R[4]??0)*D[1]+(R[8]??0)*D[2]+(R[12]??0))/L,$=((R[1]??0)*D[0]+(R[5]??0)*D[1]+(R[9]??0)*D[2]+(R[13]??0))/L;x=Math.min(x,H),O=Math.max(O,H),A=Math.min(A,$),F=Math.max(F,$)}return O>x?[(x+O)/2,(A+F)/2,(O-x)/2,(F-A)/2]:P},I=S=>[[-1,-1],[1,-1],[1,1],[-1,1]].map(([x=0,A=0])=>[S.centre[0]+S.u[0]*S.hu*x+S.v[0]*S.hv*A,S.centre[1]+S.u[1]*S.hu*x+S.v[1]*S.hv*A,S.centre[2]+S.u[2]*S.hu*x+S.v[2]*S.hv*A]),K=S=>S?B(I(S)):P,re=(S,x,A,O)=>{let F=[];for(let[D,L]of[[-x,-x],[x,-x],[x,x],[-x,x]])F.push([S[0]+D,A,S[1]+L],[S[0]+D,O,S[1]+L]);return B(F)},U=a==="lesson"?this.lessonRects.get(s.node):a==="examples"?this.examplesRects.get(s.node):void 0,k=null,ee=U?this.site.claimOnWall(s.node,d,a):null;if(U&&ee){let S=$e(U),x=ee.u0+ee.u1-1,A=1-(ee.v0+ee.v1);k={centre:[U.centre[0]+U.u[0]*U.hu*x+U.v[0]*U.hv*A+S[0]*.01,U.centre[1]+U.v[1]*U.hv*A,U.centre[2]+U.u[2]*U.hu*x+U.v[2]*U.hv*A+S[2]*.01],u:U.u,v:U.v,hu:(ee.u1-ee.u0)*U.hu,hv:(ee.v1-ee.v0)*U.hv}}let T=P;if(u){let S=e[0]-u.at[0],x=e[2]-u.at[1],A=Math.hypot(S,x)||1,O=u.half*.62,F=[u.at[0],l+u.holoY,u.at[1]];T=B([-1,1].flatMap(D=>[-1,1].map(L=>[F[0]+x/A*O*D,F[1]+O*L,F[2]-S/A*O*D])))}let v=a==="body"&&this.site.dais==="hologram",y=P;if(v){let S=e[0]-s.holo.at[0],x=e[2]-s.holo.at[1],A=Math.hypot(S,x)||1,O=Qt.half*.62,F=[s.holo.at[0],l+Ge+.08+Qt.half,s.holo.at[1]];y=B([-1,1].flatMap(D=>[-1,1].map(L=>[F[0]+x/A*O*D,F[1]+O*L,F[2]-S/A*O*D])))}let _={lesson:{spots:[k?B(I(k)):P,K(U),T],w:[1,.62,0]},examples:{spots:[k?B(I(k)):P,K(U),T],w:[1,.62,0]},model:{spots:[K(this.steleRects.get(s.node)),K(this.modelScreens.get(s.node)),T],w:[.8,1,0]},body:v?{spots:[K(this.boards.get(s.node)),P,y],w:[1,0,0]}:{spots:[K(this.boards.get(s.node)),re(s.holo.at,.62,l,l+Ge+2.35*Ao*.98),P],w:[1,1,0]},theater:{spots:[K(this.cinemaScreens.get(s.node)),P,T],w:[1,0,0]},gallery:{spots:[K(this.prints.get(s.node)),K(this.printCaptions.get(s.node)),P],w:[1,.7,0]}},N=null,Y=null;if(u){let S=u.kind==="table",x=i((r-.05)/.5),A=S?i((r-.1)/.65):x<.5?x*.44:.74+(x-.5)*.52,O=this.studyRise,F=i(S?(r-.7)/.3:(r-.5)/.4)*i(O/.8),D=Math.cos(u.facing),L=Math.sin(u.facing),H=l+u.holoY-u.half,$=S?1:i((r-.36)/.26)*i(O/.5),se=Math.max(.01,H-(l+ro)+.04);N={kind:u.kind,frame:new Float32Array([D,0,-L,0,0,1,0,0,L,0,D,0,u.at[0],l,u.at[1],1]),assemble:A,beam:S?new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,u.at[0],l+qo.top,u.at[1],1]):new Float32Array([1,0,0,0,0,se*$,0,0,0,0,1,0,u.at[0],l+ro,u.at[1],1]),beamHeight:S?Ft:1,beamLight:S?i(r/.45):$*(1+E*.9),pop:E};let Z=[u.at[0],l+u.holoY,u.at[1]],te=e[0]-Z[0],ae=e[2]-Z[2],ie=Math.hypot(te,ae)||1,Te=[ae/ie,0,-te/ie],ke=Math.atan2(te,-ae)-u.facing,ot=-Math.atan2(Math.sin(ke),Math.cos(ke))*180/Math.PI;this.reduced||this.ema>46?this.studyLive=!1:this.ema<34&&(this.studyLive=!0);let X=null;F>0&&this.studyLive&&t.prepare(s.node)&&t.render(s.node,{az:ot,time:this.time,parts:m})&&t.texture?X={tex:t.texture,rect:[0,0,1,1]}:X=t.still(s.node,m),this.studyShown=F,X&&(Y={centre:Z,right:Te,up:[0,1,0],half:u.half,tex:X.tex,rect:X.rect,reveal:F,flash:this.studyFlash,glow:m.length>0?E*.3:E,scan:b>0?-.1+g*1.25:-1})}let C=_[a],Q=a==="body"&&this.site.dais==="hologram"?no.lesson.lights:no[a].lights;return{lights:i(r/.45)*Q,spots:C.spots,spotW:C.w,deep:Y?Y.reveal*.74:v?i(r/.45)*.6:0,pod:N,holo:Y,claim:k,neonA:c.a,neonB:c.b,motion:!this.reduced}}daisFrame(e,o,r,t){let s=this.daisHolo;if(!s||e===null||this.rig.mode==="exterior")return[];let a=Math.hypot(r[0],r[2])||1,i=[];for(let u of this.site.layout.levels[e]?.stores??[]){let h=u.holo.at[0]-o[0],d=u.holo.at[1]-o[2],f=Math.hypot(h,d);if(f>Er||f>1.6&&(h*r[0]+d*r[2])/(f*a)<.15)continue;let m={a:[o[0],o[2]],b:u.holo.at};this.opaqueWalls.every(p=>St(m,p)>.05)&&i.push({s:u,d:f})}i.sort((u,h)=>u.d-h.d),this.reduced||this.ema>46?this.studyLive=!1:this.ema<34&&(this.studyLive=!0);let c=this.reduced?1:Math.min(1,t/1e3*2.6),l=[];return i.slice(0,Rr).forEach(({s:u},h)=>{let d=de(u.level),f=Qt.half,m=[u.holo.at[0],d+Ge+.08+f,u.holo.at[1]],p=o[0]-m[0],b=o[2]-m[2],g=Math.hypot(p,b)||1,E=[b/g,0,-p/g],R=Math.atan2(p,-b)-u.holo.facing,P=-Math.atan2(Math.sin(R),Math.cos(R))*180/Math.PI,B=this.studyLine?.node===u.node&&this.studyLine.station==="body"?this.studyLine:null,I=this.site.shot(u.node,"body",B),K=oo(I.parts),re=this.daisView.get(u.node)??{az:I.az??0,el:I.el??0,zoom:I.zoom??1,cut:I.cut??0,mask:K,glow:0},U=(_,N)=>_+(N-_)*c,k={az:U(re.az,I.az??0),el:U(re.el,I.el??0),zoom:U(re.zoom,I.zoom??1),cut:U(re.cut,I.cut??0),mask:K,glow:K!==re.mask&&!this.reduced?1:Math.max(0,re.glow-t/900)};this.daisView.set(u.node,k),(Math.abs(k.az-(I.az??0))+Math.abs(k.el-(I.el??0))+Math.abs(k.zoom-(I.zoom??1))*40+Math.abs(k.cut-(I.cut??0))*40>.2||k.glow>0)&&(this.dirty=!0);let T=null;if(h===0&&this.studyLive&&s.prepare(u.node)&&s.render(u.node,{az:P+k.az,el:k.el,zoom:k.zoom,cut:k.cut,time:this.time,parts:I.parts,sway:!1})&&s.texture?T={tex:s.texture,rect:[0,0,1,1]}:T=s.still(u.node,I.parts),!T)return;let v=io(to(this.site.levelColor(u.tier))),y=m[1]-f;l.push({node:u.node,draw:{holo:{centre:m,right:E,up:[0,1,0],half:f,tex:T.tex,rect:T.rect,reveal:1,flash:k.glow*.6,glow:I.parts.length>0?k.glow*.3:k.glow*.6,scan:-1},beam:new Float32Array([1,0,0,0,0,Math.max(.05,y-(d+Ge)),0,0,0,0,1,0,u.holo.at[0],d+Ge,u.holo.at[1],1]),beamLight:.9+k.glow*.6,neonA:v.a,neonB:v.b,motion:!this.reduced}})}),l}updateFilm(e){let o=!this.studyLive,r=o?this.filmLow:this.filmHolo,t=this.renderer;if(!r||!t)return;let s=this.seatedAt(),a=s?`theater:${s}`:null;if(this.filmPrev&&this.filmPrev.key!==a&&(t.setScreenTexture(this.filmPrev.key,null,this.filmPrev.saved),this.filmPrev=null,this.dirty=!0),!s||!a){this.filmSince=0,this.filmDrawn="";return}if(!r.prepare(s)){this.dirty=!0;return}let i=this.site.buildSteps?.(s)??0,c=this.studyLine?.node===s&&this.studyLine.station==="theater"?this.studyLine:null,l;if(c?.cue?.build!==void 0)l=c.cue.build;else{this.filmSince===0&&(this.filmSince=this.time);let d=(this.time-this.filmSince)%(i*Sr+Bs);l=Math.min(i,d/Sr)}let u=this.reduced?1:Math.min(1,e/1e3*1.8);this.filmBuild=l<this.filmBuild-.5?l:this.filmBuild+(l-this.filmBuild)*u;let h=c?.cue?.parts??[];if(o){let d=Math.min(i,Math.round(l)),f=`${s}:${d}:${h.join(",")}`;if(f===this.filmDrawn&&this.filmPrev?.key===a&&this.filmPrev.tex===r.texture||!r.render(s,{az:20,el:6,zoom:.92,time:this.time,parts:h,build:d,sway:!1}))return;this.filmDrawn=f,this.filmBuild=d}else if(this.filmDrawn="",!r.render(s,{az:this.reduced?0:this.time*9,el:6,zoom:.92,time:this.time,parts:h,build:Math.min(i,this.filmBuild),sway:!1}))return;if(this.filmPrev?.key!==a||this.filmPrev.tex!==r.texture){let d=this.filmPrev?.key===a?this.filmPrev.saved:t.setScreenTexture(a,r.texture);this.filmPrev?.key===a&&t.setScreenTexture(a,r.texture),this.filmPrev={key:a,saved:d,tex:r.texture}}this.dirty=!0}holoOf(e){return this.holoCache.has(e)||this.holoCache.set(e,this.site.dais==="bodymap"?Mn(e):null),this.holoCache.get(e)??null}holoFrame(e,o,r){if(e===null||this.rig.mode==="exterior")return[];let t=Math.hypot(r[0],r[2])||1,s=[];for(let i of this.site.layout.levels[e]?.stores??[]){let c=i.holo.at[0]-o[0],l=i.holo.at[1]-o[2],u=Math.hypot(c,l);if(u>Er||u>1.6&&(c*r[0]+l*r[2])/(u*t)<.15)continue;let h={a:[o[0],o[2]],b:i.holo.at};this.opaqueWalls.every(d=>St(h,d)>.05)&&s.push({s:i,d:u})}s.sort((i,c)=>i.d-c.d);let a=[];for(let{s:i}of s.slice(0,Rr).reverse()){let c=this.holoDraw(i);c&&a.push(c)}return a}holoDraw(e){let o=this.holoOf(e.node);if(!o)return null;let r=this.time,t=Math.PI-e.holo.facing+(this.reduced?0:Math.sin(r*.35)*.32),s=Ao,a=Math.cos(t)*s,i=Math.sin(t)*s,[c,l]=e.holo.at,u=de(e.level)+Ge,h=new Float32Array([a,0,-i,0,0,s,0,0,i,0,a,0,c,u,l,1]),d=E=>[a*E[0]+i*E[2]+c,E[1]*s+u,-i*E[0]+a*E[2]+l],f=new Float32Array(o.targets.length*4);o.targets.forEach((E,R)=>{let P=d(E.at);f.set([P[0],P[1],P[2],E.r*s],R*4)});let m=[],p=this.boards.get(e.node);if(p&&o.rows.length>0){let E={centre:p.centre,u:p.u,n:$e(p),hu:p.hu,hv:p.hv};for(let R of En(o,d,E,this.boardSide(e),cn(o.rows.length),30/un.w*p.hu*2)){let[P,B,I,K]=R.points;m.push(...P,...B,...B,...I,...I,...K)}}if(o.whole)for(let[P,B,I,K]of[[-.4,.02,1,1],[.4,.02,-1,1],[-.4,1.92,1,-1],[.4,1.92,-1,-1]]){let re=d([P,B,.14]);m.push(...d([P+I*.15,B,.14]),...re,...re,...d([P,B+K*.15,.14]))}let b=[];for(let[E,R,P]of[[.96,.5,.25],[1.52,.42,-.4]]){let I=this.reduced?0:r*P;for(let K=0;K<40;K+=2){let re=I+K/40*Math.PI*2,U=I+(K+1)/40*Math.PI*2;b.push(...d([Math.sin(re)*R,E,Math.cos(re)*R]),...d([Math.sin(U)*R,E,Math.cos(U)*R]))}}let g=this.studyAt?.station==="body"&&this.studyAt.s.node===e.node&&this.studyLine?.node===e.node&&this.studyLine.station==="body"&&this.studyT>0?this.studyPop:0;return{holo:o,model:h,rings:new Float32Array(b),leaders:new Float32Array(m),targets:f,scanY:this.reduced?-10:g>0?.02+(1-g)*1.95:.05+(1-Math.abs(r*.2%2-1))*1.8,pulse:this.reduced?.4:Math.max(.5+.5*Math.sin(r*2.2),g)}}updateLive(e,o,r,t){let s=this.live,a=this.renderer;if(!s||!a)return;let i=null;if(!this.reduced&&e!==null&&(this.studyT===0||this.studyAt?.station==="model")&&this.ema<(this.opts.liveBudget??60)){let u=18;for(let h of this.site.layout.levels[e]?.stores??[]){let d=h.display[0]-o[0],f=h.display[1]-o[2],m=Math.hypot(d,f);m<u&&d*r[0]+f*r[2]>-2&&(u=m,i=h.node)}}let c=i?`store:${i}`:null;if(this.livePrev&&this.livePrev.key!==c){let u=this.livePrev;this.livePrev=null,a.setScreenTexture(u.key,null,u.saved),s.showing=null,this.dirty=!0}if(!i||!c||!s.prepare(i))return;s.render(i,this.time,this.ema<24?0:66)&&this.livePrev?.key!==c&&(this.livePrev={key:c,saved:a.setScreenTexture(c,s.texture)})}pickClient(e,o){let r=this.canvas.getBoundingClientRect();return r.width===0||r.height===0?null:this.pick((e-r.left)/r.width*2-1,1-(o-r.top)/r.height*2)}pick(e,o){let{origin:r,dir:t}=bn(this.invViewProj,e,o),s=this.rig.camera();if(this.rig.mode==="exterior"||s.level===null){let f=null,m=1/0;for(let p of this.site.layout.levels){let b=vn(r,t,[-G-.6,p.y-ne,-G-.6],[G+.6,p.y+ye-ne,G+.6]);b!==null&&b<m&&(m=b,f={kind:"level",level:p.index})}if(!f&&t[1]<0){let p=-r[1]/t[1];Math.hypot(r[0]+t[0]*p,r[2]+t[2]*p)<52&&(f={kind:"plaza"})}return f}let a=s.level,i=de(a),c=null,l=1/0,u=[s.eye[0],s.eye[2]],h=f=>{let m=[r[0]+t[0]*f,r[2]+t[2]*f],p={a:u,b:[m[0]-(m[0]-u[0])*.02,m[1]-(m[1]-u[1])*.02]};return this.opaqueWalls.every(b=>St(p,b)>.01)},d=(f,m)=>{f!==null&&f<l&&f<70&&h(f)&&(l=f,c=m)};for(let f of this.world?.screens??[]){if(f.level!==a)continue;let m=It(r,t,f.rect.centre,$e(f.rect),f.rect.u,f.rect.v,f.rect.hu,f.rect.hv),p=Cs[f.kind];f.kind==="directory"?d(m,{kind:"directory",level:a,distance:m??0}):f.node&&p&&d(m,{kind:"store",node:f.node,part:p,distance:m??0})}for(let f of this.world?.overlays??[]){if(f.level!==a||!f.station)continue;let m=It(r,t,f.rect.centre,$e(f.rect),f.rect.u,f.rect.v,f.rect.hu,f.rect.hv);d(m,{kind:"store",node:f.node,part:f.station,distance:m??0})}for(let f of this.site.layout.levels[a]?.stores??[]){let m=Hs(r,t,f.holo.at,.45,i+Ge,i+Ge+1.82*Ao);m!==null&&d(m,{kind:"store",node:f.node,part:"body",distance:m})}for(let f of this.fronts)f.level===a&&d(It(r,t,f.centre,f.normal,f.u,[0,1,0],V/2,2.8),{kind:"store",node:f.node,part:"front",distance:0});{let f=t[0]*t[0]+t[2]*t[2],m=2*(r[0]*t[0]+r[2]*t[2]),p=r[0]*r[0]+r[2]*r[2]-be*be,b=m*m-4*f*p;if(f>1e-9&&b>=0){let g=(-m-Math.sqrt(b))/(2*f),E=r[1]+t[1]*g;g>0&&E>i&&E<i+ye&&d(g,{kind:"lift",distance:g})}}if(c){let f=c;return f.kind==="store"&&f.part==="front"?{...f,distance:l}:f}if(t[1]<-.02){let f=(i-r[1])/t[1],m=[r[0]+t[0]*f,r[2]+t[2]*f];if(f<40&&this.site.layout.standable(a,m))return{kind:"floor",level:a,p:m,distance:f}}return null}click(e,o){let r=this.pickClient(e,o);if(r)switch(r.kind){case"level":this.goTo({kind:"level",level:r.level});break;case"plaza":this.goTo({kind:"plaza"});break;case"store":this.goTo(Lr(r.node,r.part));break;case"floor":this.goTo({kind:"point",level:r.level,p:r.p});break;case"lift":case"directory":this.opts.onSelect?.(r);break}}emit(e,o,r,t){let s=o!==null?this.site.layout.levels[o]:void 0,a=[r[0],r[2]],i=s&&this.rig.mode!=="exterior"?it(s,a):null,c=null;if(i?.kind==="store"&&this.rig.mode==="walk")for(let f of this.site.stationsOf(i.store.node)){let m=i.store.stations[f].p;Math.hypot(m[0]-a[0],m[1]-a[1])<.9&&(c=f)}let l={mode:this.rig.mode,level:this.rig.mode==="exterior"?null:o,region:i?.kind??null,store:i?.kind==="store"?i.store.node:null,focus:this.focus,x:a[0],z:a[1],heading:t,destination:this.rig.destination,live:this.live?.showing??null,station:c,holos:this.drawnHolos,study:this.studyT>.5&&this.studyAt?this.studyAt.s.node:null,studyStop:this.studyT>.5&&this.studyAt?this.studyAt.station:null},u=l.focus,h=JSON.stringify([l.mode,l.level,l.region,l.store,u?[u.kind,"node"in u?u.node:"","level"in u?u.level:"","part"in u?u.part:""]:null,l.destination,l.live,l.station,l.holos,l.study,l.studyStop]);if(h===this.snapKey&&e-this.snapAt<120)return;this.snapKey=h,this.snapAt=e;let d=this.host.dataset;d.mode=l.mode,d.level=l.level===null?"":String(l.level+1),d.store=l.store??"",d.live=l.live??"",d.region=l.region??"",d.station=l.station??"",d.holo=l.holos.join(","),d.study=l.study??"",d.studyStop=l.studyStop??"",d.frame=`${Math.round(this.ema)}ms@${this.scale.toFixed(2)}`,d.pos=`${l.x.toFixed(1)},${l.z.toFixed(1)}`,this.opts.onSnapshot(l)}};function Lr(n,e){return e==="front"?{kind:"store",node:n}:{kind:"store",node:n,station:e}}function Hs(n,e,o,r,t,s){let a=n[0]-o[0],i=n[2]-o[1],c=e[0]*e[0]+e[2]*e[2];if(c<1e-9)return null;let l=2*(a*e[0]+i*e[2]),u=a*a+i*i-r*r,h=l*l-4*c*u;if(h<0)return null;let d=(-l-Math.sqrt(h))/(2*c);if(d<=0)return null;let f=n[1]+e[1]*d;return f>=t&&f<=s?d:null}function Gs(n){let e=n.getExtension("EXT_color_buffer_float")!==null,o=globalThis.__OUTLET_QUALITY__;return o==="basic"?"basic":o==="cinematic"?e?"cinematic":"basic":e?Vr(n)?"basic":"cinematic":"basic"}function Vr(n){let e=String(n.getParameter(n.RENDERER));if(/^webkit webgl$/i.test(e)){let o=n.getExtension("WEBGL_debug_renderer_info");o&&(e=String(n.getParameter(o.UNMASKED_RENDERER_WEBGL)))}return/swiftshader|llvmpipe|softpipe|software|basic render/i.test(e)}export{_r as OutletEngine,Gs as chooseTier,Vr as isSoftware};
