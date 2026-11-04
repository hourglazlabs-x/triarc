import{a as fo}from"./chunk-B74KHNJF.js";import{$ as Wt,A as po,B as bo,D as dt,H as $t,I as vo,K as go,L as yo,N as B,O as _,P as D,Q as be,R as yt,S as Be,T as re,U as ve,V as xt,W as Ie,X as ft,Y as Ht,Z as Te,_ as Ve,a as Tn,aa as Ne,b as to,ba as Ae,c as no,ca as he,da as zt,ea as tt,ga as Ge,h as Rn,ha as xo,i as oo,ia as Et,ja as Gt,ka as Eo,l as ro,la as Mn,ma as wn,n as ao,na as Fn,oa as To,pa as Tt,qa as kt,r as se,ra as Ro,sa as Mo,x as ho,z as mo}from"./chunk-3YN3Q7RR.js";import{b as so,c as io,d as lo,e as co,h as uo}from"./chunk-LLCKFUDP.js";import{b as pe}from"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var ot=Math.PI/180;function Sn(o,t){return[o[0]+t[0],o[1]+t[1],o[2]+t[2]]}function Pe(o,t){return[o[0]-t[0],o[1]-t[1],o[2]-t[2]]}function ta(o,t){return[o[0]*t,o[1]*t,o[2]*t]}function nt(o,t){return o[0]*t[0]+o[1]*t[1]+o[2]*t[2]}function ge(o,t){return[o[1]*t[2]-o[2]*t[1],o[2]*t[0]-o[0]*t[2],o[0]*t[1]-o[1]*t[0]]}function Fo(o){return Math.hypot(o[0],o[1],o[2])}function J(o){let t=Fo(o)||1;return[o[0]/t,o[1]/t,o[2]/t]}function Ce(o,t,n){return o+(t-o)*n}function Oe(o,t,n){return Math.min(n,Math.max(t,o))}function Rt(o,t){let n=(t-o)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),n}function Mt(o){let t=Oe(o,0,1);return t*t*t*(t*(t*6-15)+10)}function So(o,t=0){let n=Math.cos(t);return[Math.sin(o)*n,Math.sin(t),-Math.cos(o)*n]}function wt(){let o=new Float32Array(16);return o[0]=o[5]=o[10]=o[15]=1,o}function Ao(o,t,n,r,e){let s=1/Math.tan(t/2);return o.fill(0),o[0]=s/n,o[5]=s,o[10]=(e+r)/(r-e),o[11]=-1,o[14]=2*e*r/(r-e),o}function Po(o,t,n,r,e,s,a){return o.fill(0),o[0]=2/(n-t),o[5]=2/(e-r),o[10]=-2/(a-s),o[12]=-(n+t)/(n-t),o[13]=-(e+r)/(e-r),o[14]=-(a+s)/(a-s),o[15]=1,o}function Xt(o,t,n,r=[0,1,0]){let e=J(Pe(t,n)),s=ge(r,e);Fo(s)<1e-6&&(s=ge([0,0,1],e)),s=J(s);let a=ge(e,s);return o[0]=s[0],o[1]=a[0],o[2]=e[0],o[3]=0,o[4]=s[1],o[5]=a[1],o[6]=e[1],o[7]=0,o[8]=s[2],o[9]=a[2],o[10]=e[2],o[11]=0,o[12]=-nt(s,t),o[13]=-nt(a,t),o[14]=-nt(e,t),o[15]=1,o}function Ft(o,t,n){let r=new Float32Array(16);for(let e=0;e<4;e++)for(let s=0;s<4;s++){let a=0;for(let i=0;i<4;i++)a+=(t[i*4+s]??0)*(n[e*4+i]??0);r[e*4+s]=a}return o.set(r),o}function Yt(o,t){let n=b=>t[b]??0,r=n(0)*n(5)-n(1)*n(4),e=n(0)*n(6)-n(2)*n(4),s=n(0)*n(7)-n(3)*n(4),a=n(1)*n(6)-n(2)*n(5),i=n(1)*n(7)-n(3)*n(5),l=n(2)*n(7)-n(3)*n(6),c=n(8)*n(13)-n(9)*n(12),u=n(8)*n(14)-n(10)*n(12),f=n(8)*n(15)-n(11)*n(12),d=n(9)*n(14)-n(10)*n(13),h=n(9)*n(15)-n(11)*n(13),m=n(10)*n(15)-n(11)*n(14),p=r*m-e*h+s*d+a*f-i*u+l*c;return p?(p=1/p,o[0]=(n(5)*m-n(6)*h+n(7)*d)*p,o[1]=(n(2)*h-n(1)*m-n(3)*d)*p,o[2]=(n(13)*l-n(14)*i+n(15)*a)*p,o[3]=(n(10)*i-n(9)*l-n(11)*a)*p,o[4]=(n(6)*f-n(4)*m-n(7)*u)*p,o[5]=(n(0)*m-n(2)*f+n(3)*u)*p,o[6]=(n(14)*s-n(12)*l-n(15)*e)*p,o[7]=(n(8)*l-n(10)*s+n(11)*e)*p,o[8]=(n(4)*h-n(5)*f+n(7)*c)*p,o[9]=(n(1)*f-n(0)*h-n(3)*c)*p,o[10]=(n(12)*i-n(13)*s+n(15)*r)*p,o[11]=(n(9)*s-n(8)*i-n(11)*r)*p,o[12]=(n(5)*u-n(4)*d-n(6)*c)*p,o[13]=(n(0)*d-n(1)*u+n(2)*c)*p,o[14]=(n(13)*e-n(12)*a-n(14)*r)*p,o[15]=(n(8)*a-n(9)*e+n(10)*r)*p,o):null}function wo(o,t){let n=(o[0]??0)*t[0]+(o[4]??0)*t[1]+(o[8]??0)*t[2]+(o[12]??0),r=(o[1]??0)*t[0]+(o[5]??0)*t[1]+(o[9]??0)*t[2]+(o[13]??0),e=(o[2]??0)*t[0]+(o[6]??0)*t[1]+(o[10]??0)*t[2]+(o[14]??0),s=(o[3]??0)*t[0]+(o[7]??0)*t[1]+(o[11]??0)*t[2]+(o[15]??0);return[n/s,r/s,e/s,s]}function Lo(o,t,n){let r=wo(o,[t,n,-1]),e=wo(o,[t,n,1]),s=[r[0],r[1],r[2]];return{origin:s,dir:J(Pe([e[0],e[1],e[2]],s))}}function _o(o,t,n,r){let e=-1/0,s=1/0;for(let a=0;a<3;a++){let i=o[a]??0,l=t[a]??0,c=n[a]??0,u=r[a]??0;if(Math.abs(l)<1e-12){if(i<c||i>u)return null;continue}let f=(c-i)/l,d=(u-i)/l;if(f>d&&([f,d]=[d,f]),e=Math.max(e,f),s=Math.min(s,d),e>s)return null}return s<0?null:e>=0?e:s}function jt(o,t,n,r,e,s,a,i){let l=nt(t,r);if(Math.abs(l)<1e-9)return null;let c=nt(Pe(n,o),r)/l;if(c<0)return null;let u=Sn(o,ta(t,c)),f=Pe(u,n);return Math.abs(nt(f,e))>a||Math.abs(nt(f,s))>i?null:c}var St=13;function k(o){let t=parseInt(o.replace("#",""),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var rt=class{data=[];get vertexCount(){return this.data.length/St}toArray(){return new Float32Array(this.data)}vertex(t,n,r,e){this.data.push(t[0],t[1],t[2],n[0],n[1],n[2],r[0],r[1],r[2],e.gloss,e.emit??0,e.ao??1,e.pattern??0)}tri(t,n,r,e,s,a){let i=a??J(ge(Pe(n,t),Pe(r,t)));this.vertex(t,i,e,s),this.vertex(n,i,e,s),this.vertex(r,i,e,s)}quad(t,n,r,e,s,a,i){let l=i??J(ge(Pe(n,t),Pe(e,t)));this.tri(t,n,r,s,a,l),this.tri(t,r,e,s,a,l)}box(t,n,r,e,s={}){let[a,i,l]=t,[c,u,f]=n;s.top!==!1&&this.quad([a,u,l],[c,u,l],[c,u,f],[a,u,f],r,e,[0,1,0]),s.bottom!==!1&&this.quad([a,i,f],[c,i,f],[c,i,l],[a,i,l],r,e,[0,-1,0]),this.quad([a,i,f],[a,u,f],[c,u,f],[c,i,f],r,e,[0,0,1]),this.quad([c,i,l],[c,u,l],[a,u,l],[a,i,l],r,e,[0,0,-1]),this.quad([c,i,f],[c,u,f],[c,u,l],[c,i,l],r,e,[1,0,0]),this.quad([a,i,l],[a,u,l],[a,u,f],[a,i,f],r,e,[-1,0,0])}wall(t,n,r,e,s,a,i){let l=Math.hypot(n[0]-t[0],n[1]-t[1]);if(l<1e-6)return;let c=(n[0]-t[0])/l,u=(n[1]-t[1])/l,f=-u*(s/2),d=c*(s/2),h=(b,v,E)=>[b[0]+f*v,E,b[1]+d*v],m=[-u,0,c],p=[u,0,-c];this.quad(h(t,1,r),h(t,1,e),h(n,1,e),h(n,1,r),a,i,m),this.quad(h(n,-1,r),h(n,-1,e),h(t,-1,e),h(t,-1,r),a,i,p),this.quad(h(t,-1,e),h(n,-1,e),h(n,1,e),h(t,1,e),a,i,[0,1,0]),this.quad(h(t,1,r),h(n,1,r),h(n,-1,r),h(t,-1,r),a,i,[0,-1,0]),this.quad(h(t,-1,r),h(t,-1,e),h(t,1,e),h(t,1,r),a,i,[-c,0,-u]),this.quad(h(n,1,r),h(n,1,e),h(n,-1,e),h(n,-1,r),a,i,[c,0,u])}pane(t,n,r,e,s,a){let i=Math.hypot(n[0]-t[0],n[1]-t[1]);if(i<1e-6)return;let l=[-(n[1]-t[1])/i,0,(n[0]-t[0])/i];this.quad([t[0],r,t[1]],[t[0],e,t[1]],[n[0],e,n[1]],[n[0],r,n[1]],s,a,l)}prism(t,n,r,e,s,a={}){let i=t.length,l=c=>t[(c%i+i)%i]??[0,0];if(a.top!==!1)for(let c=1;c<i-1;c++)this.tri([l(0)[0],r,l(0)[1]],[l(c)[0],r,l(c)[1]],[l(c+1)[0],r,l(c+1)[1]],e,s,[0,1,0]);if(a.bottom!==!1)for(let c=1;c<i-1;c++)this.tri([l(0)[0],n,l(0)[1]],[l(c+1)[0],n,l(c+1)[1]],[l(c)[0],n,l(c)[1]],e,s,[0,-1,0]);if(a.sides!==!1){let c=t.reduce((f,d)=>f+d[0],0)/i,u=t.reduce((f,d)=>f+d[1],0)/i;for(let f=0;f<i;f++){let d=l(f),h=l(f+1),m=J([h[1]-d[1],0,-(h[0]-d[0])]),p=(d[0]+h[0])/2-c,b=(d[1]+h[1])/2-u;m[0]*p+m[2]*b<0&&(m=[-m[0],0,-m[2]]),this.quad([d[0],n,d[1]],[d[0],r,d[1]],[h[0],r,h[1]],[h[0],n,h[1]],e,s,m)}}}cylinder(t,n,r,e,s,a,i,l,c={}){let[u,f]=c.arc??[0,Math.PI*2],d=(m,p)=>[t+r*Math.sin(m),p,n+r*Math.cos(m)],h=m=>c.inward?[-Math.sin(m),0,-Math.cos(m)]:[Math.sin(m),0,Math.cos(m)];for(let m=0;m<a;m++){let p=u+(f-u)*m/a,b=u+(f-u)*(m+1)/a,v=d(p,e),E=d(p,s),R=d(b,s),S=d(b,e);this.vertex(v,h(p),i,l),this.vertex(E,h(p),i,l),this.vertex(R,h(b),i,l),this.vertex(v,h(p),i,l),this.vertex(R,h(b),i,l),this.vertex(S,h(b),i,l),c.caps!==!1&&!c.arc&&(this.tri([t,s,n],d(b,s),d(p,s),i,l,[0,1,0]),this.tri([t,e,n],d(p,e),d(b,e),i,l,[0,-1,0]))}}annulus(t,n,r,e,s,a,i,l){for(let c=0;c<a;c++){let u=c/a*Math.PI*2,f=(c+1)/a*Math.PI*2,d=(h,m)=>[t+h*Math.sin(m),s,n+h*Math.cos(m)];this.quad(d(r,u),d(e,u),d(e,f),d(r,f),i,l,[0,1,0])}}sphere(t,n,r,e,s,a=1){let i=Math.max(4,Math.round(r/2)),l=(c,u)=>{let f=c/i*Math.PI,d=u/r*Math.PI*2,h=[Math.sin(f)*Math.sin(d),Math.cos(f),Math.sin(f)*Math.cos(d)];return[[t[0]+h[0]*n,t[1]+h[1]*n*a,t[2]+h[2]*n],J([h[0],h[1]/a,h[2]])]};for(let c=0;c<i;c++)for(let u=0;u<r;u++){let[f,d]=l(c,u),[h,m]=l(c+1,u),[p,b]=l(c+1,u+1),[v,E]=l(c,u+1);this.vertex(f,d,e,s),this.vertex(h,m,e,s),this.vertex(p,b,e,s),this.vertex(f,d,e,s),this.vertex(p,b,e,s),this.vertex(v,E,e,s)}}sweep(t,n,r,e,s,a=!1){let i=t.length;if(i<2)return;let l=b=>typeof n=="number"?n:n[Math.min(b,n.length-1)]??.02,c=b=>t[a?(b%i+i)%i:Math.max(0,Math.min(i-1,b))],u=b=>J(Pe(c(b+1),c(b-1))),f=u(0),d=Math.abs(f[1])<.9?[0,1,0]:[1,0,0],h=J(ge(ge(f,d),f)),m=[];for(let b=0;b<i;b++){let v=u(b),E=h[0]*v[0]+h[1]*v[1]+h[2]*v[2];h=J([h[0]-v[0]*E,h[1]-v[1]*E,h[2]-v[2]*E]);let R=ge(v,h),S=c(b),P=l(b),C=[];for(let U=0;U<r;U++){let x=U/r*Math.PI*2,g=Math.cos(x),y=Math.sin(x),F=[h[0]*g+R[0]*y,h[1]*g+R[1]*y,h[2]*g+R[2]*y];C.push([[S[0]+F[0]*P,S[1]+F[1]*P,S[2]+F[2]*P],F])}m.push(C)}let p=a?i:i-1;for(let b=0;b<p;b++){let v=m[b],E=m[(b+1)%i];if(!(!v||!E))for(let R=0;R<r;R++){let S=(R+1)%r,[P,C]=v[R],[U,x]=v[S],[g,y]=E[R],[F,L]=E[S];this.vertex(P,C,e,s),this.vertex(g,y,e,s),this.vertex(F,L,e,s),this.vertex(P,C,e,s),this.vertex(F,L,e,s),this.vertex(U,x,e,s)}}a||(this.disc(c(0),u(0),0,l(0),r,e,s),this.disc(c(i-1),u(i-1),0,l(i-1),r,e,s))}strip(t,n,r,e,s){let a=i=>Array.isArray(n[0])?n[i]:n;for(let i=1;i<t.length;i++){let l=t[i-1],c=t[i],u=a(i-1),f=a(i),d=r/2,h=[l[0]-u[0]*d,l[1]-u[1]*d,l[2]-u[2]*d],m=[l[0]+u[0]*d,l[1]+u[1]*d,l[2]+u[2]*d],p=[c[0]+f[0]*d,c[1]+f[1]*d,c[2]+f[2]*d],b=[c[0]-f[0]*d,c[1]-f[1]*d,c[2]-f[2]*d],v=J(ge(Pe(c,l),u));this.quad(h,m,p,b,e,s,v)}}disc(t,n,r,e,s,a,i){let l=J(n),c=Math.abs(l[1])<.9?[0,1,0]:[1,0,0],u=J(ge(c,l)),f=ge(l,u),d=(h,m)=>[t[0]+(u[0]*Math.cos(m)+f[0]*Math.sin(m))*h,t[1]+(u[1]*Math.cos(m)+f[1]*Math.sin(m))*h,t[2]+(u[2]*Math.cos(m)+f[2]*Math.sin(m))*h];for(let h=0;h<s;h++){let m=h/s*Math.PI*2,p=(h+1)/s*Math.PI*2;r<=0?this.tri(t,d(e,m),d(e,p),a,i,l):this.quad(d(r,m),d(e,m),d(e,p),d(r,p),a,i,l)}}pill(t,n,r,e,s,a,i,l){let c=Math.hypot(n[0]-t[0],n[1]-t[1]),u=(n[0]-t[0])/c,f=(n[1]-t[1])/c,d=Math.atan2(u,f);this.cylinder(t[0],t[1],r,e,s,a,i,l,{arc:[d+Math.PI/2,d+Math.PI*3/2]}),this.cylinder(n[0],n[1],r,e,s,a,i,l,{arc:[d-Math.PI/2,d+Math.PI/2]});let h=-f*r,m=u*r,p=[[t[0]+h,t[1]+m],[n[0]+h,n[1]+m],[n[0]-h,n[1]-m],[t[0]-h,t[1]-m]];this.prism(p,e,s,i,l,{bottom:!1});for(let[b,v]of[[t,d+Math.PI/2],[n,d-Math.PI/2]])for(let E=0;E<a;E++){let R=v+Math.PI*E/a,S=v+Math.PI*(E+1)/a;this.tri([b[0],s,b[1]],[b[0]+r*Math.sin(S),s,b[1]+r*Math.cos(S)],[b[0]+r*Math.sin(R),s,b[1]+r*Math.cos(R)],i,l,[0,1,0])}}};function ce(o,t,n,r,e,s=0){let a=[Math.sin(n),0,-Math.cos(n)],i=[-Math.cos(n),0,-Math.sin(n)];return{centre:[o[0]+a[0]*s,t,o[1]+a[2]*s],u:i,v:[0,1,0],hu:r/2,hv:e/2}}function An(o,t,n,r,e){let s=[Math.sin(n),0,-Math.cos(n)],a=[Math.cos(n),0,Math.sin(n)];return{centre:[o[0],t,o[1]],u:a,v:s,hu:r/2,hv:e/2}}function ht(o){return J(ge(o.u,o.v))}function Kt(o,t=!1){let n=(s,a)=>[o.centre[0]+o.u[0]*o.hu*s+o.v[0]*o.hv*a,o.centre[1]+o.u[1]*o.hu*s+o.v[1]*o.hv*a,o.centre[2]+o.u[2]*o.hu*s+o.v[2]*o.hv*a],r=(s,a)=>[t?(1-s)/2:(s+1)/2,(1-a)/2],e=[];for(let[s,a]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])e.push(...n(s,a),...r(s,a));return new Float32Array(e)}var Re=1.78/489,na=510;function Me(o,t,n=0){return[(o-120)*Re,(na-t)*Re,n]}var Zt=6,Q=(o,t,n,r,e=0)=>({x:o,y:t,w:n,d:r,z:e}),Vo=[Q(120,108,16,.052),Q(120,118,34,.08),Q(120,128,48,.1),Q(120,144,49,.113),Q(120,165,45,.118),Q(120,186,43,.115),Q(120,206,40,.108),Q(120,228,37,.1),Q(120,250,36.5,.1),Q(120,270,40,.104),Q(120,290,45,.11),Q(120,306,45,.106),Q(120,318,37,.09),Q(120,326,18,.05)],oa=[Q(120,84,11,.048),Q(120,112,12.5,.052)],Ln=[Q(70,132,13,.05),Q(66,152,12,.045),Q(63,180,10.5,.04),Q(60,206,9.5,.036),Q(57,228,8.6,.032),Q(54,252,8.6,.032),Q(51,276,7.8,.029),Q(48,296,6.8,.025),Q(46,308,6.2,.022)],_n=[Q(98,296,22,.085),Q(96,326,20,.08),Q(95,356,17,.07),Q(95,384,13.5,.056),Q(95,402,12.5,.05),Q(96,426,12.5,.052),Q(96,450,11,.046),Q(97,470,9,.036),Q(98,488,8,.03)];function ra(o,t){let n=[],r=s=>o[Math.max(0,Math.min(o.length-1,s))],e=(s,a,i,l,c)=>.5*(2*a+(-s+i)*c+(2*s-5*a+4*i-l)*c*c+(-s+3*a-3*i+l)*c*c*c);for(let s=0;s<o.length-1;s++){let[a,i,l,c]=[r(s-1),r(s),r(s+1),r(s+2)];for(let u=0;u<t;u++){let f=u/t;n.push({x:e(a.x,i.x,l.x,c.x,f),y:e(a.y,i.y,l.y,c.y,f),z:e(a.z,i.z,l.z,c.z,f),w:Math.max(.5,e(a.w,i.w,l.w,c.w,f)),d:Math.max(.004,e(a.d,i.d,l.d,c.d,f))})}}return n.push(r(o.length-1)),n}function qt(o,t,n=20,r=!0){let e=ra(t,3),s=e.map(a=>Array.from({length:n+1},(i,l)=>{let c=l/n*Math.PI*2,u=Me(a.x,a.y,a.z);return[u[0]+Math.sin(c)*a.w*Re,u[1],u[2]+Math.cos(c)*a.d]}));if(r){let a=e[0],i=e[e.length-1],l=(c,u)=>[.7,.35,0].map(f=>Array.from({length:n+1},(d,h)=>{let m=h/n*Math.PI*2,p=Me(c.x,c.y,c.z),b=Math.sqrt(1-f*f)*Math.min(c.w*Re,c.d)*.8*u;return[p[0]+Math.sin(m)*c.w*Re*f,p[1]+b,p[2]+Math.cos(m)*c.d*f]}));s.unshift(...l(a,1).reverse()),s.push(...l(i,-1))}aa(o,s)}function aa(o,t){let n=t.length,r=t[0]?.length??0,e=(a,i)=>t[Math.max(0,Math.min(n-1,a))]?.[(i%(r-1)+(r-1))%(r-1)]??[0,0,0],s=(a,i)=>{let l=Qt(e(a,i+1),e(a,i-1)),c=Qt(e(a+1,i),e(a-1,i)),u=In(c,l);if(Math.hypot(u[0],u[1],u[2])<1e-12){let p=Io(t[a===0?1:n-2]??[]);return J(Qt(e(a,i),p))}let f=J(u),d=Io(t[Math.max(0,Math.min(n-1,a))]??[]),h=e(a,i),m=[h[0]-d[0],0,h[2]-d[2]];return f[0]*m[0]+f[2]*m[2]<0?[-f[0],-f[1],-f[2]]:f};for(let a=0;a<n-1;a++)for(let i=0;i<r-1;i++){let l=[[a,i],[a+1,i],[a+1,i+1],[a,i],[a+1,i+1],[a,i+1]];for(let[c,u]of l)o.push(...e(c,u),...s(c,u))}}function Io(o){let t=Math.max(1,o.length-1),n=0,r=0,e=0;for(let s=0;s<t;s++){let a=o[s]??[0,0,0];n+=a[0],r+=a[1],e+=a[2]}return[n/t,r/t,e/t]}var Qt=(o,t)=>[o[0]-t[0],o[1]-t[1],o[2]-t[2]],In=(o,t)=>[o[1]*t[2]-o[2]*t[1],o[2]*t[0]-o[0]*t[2],o[0]*t[1]-o[1]*t[0]];function At(o,t,n,r=0,e=18){let s=Math.max(6,Math.round(e/2)),a=Math.cos(r),i=Math.sin(r),l=(c,u)=>{let f=c/s*Math.PI,d=u/e*Math.PI*2,h=[Math.sin(f)*Math.sin(d),Math.cos(f),Math.sin(f)*Math.cos(d)],m=h[0]*n[0],p=h[1]*n[1],b=[t[0]+m*a-p*i,t[1]+m*i+p*a,t[2]+h[2]*n[2]],v=h[0]/n[0],E=h[1]/n[1],R=J([v*a-E*i,v*i+E*a,h[2]/n[2]]);return[b,R]};for(let c=0;c<s;c++)for(let u=0;u<e;u++){let f=[[c,u],[c+1,u],[c+1,u+1],[c,u],[c+1,u+1],[c,u+1]];for(let[d,h]of f){let[m,p]=l(d,h);o.push(...m,...p)}}}function No(){let o=[];At(o,Me(120,55,.004),[27*Re,35*Re,.104],0,24),qt(o,oa,18,!1),qt(o,Vo,28);for(let t of[1,-1]){let n=s=>({...s,x:t>0?s.x:240-s.x});qt(o,Ln.map(n),16),qt(o,_n.map(n),18);let r=t>0?41:199;At(o,Me(r,330,.006),[7.5*Re,17*Re,.024],t>0?.08:-.08,14);let e=t>0?96:144;At(o,Me(e,501,.045),[9.5*Re,7.5*Re,.11],0,14)}return new Float32Array(o)}function Co(o=.6,t=2.3,n=48){let r=[];for(let e=0;e<n;e++){let s=e/n*Math.PI*2,a=(e+1)/n*Math.PI*2,i=(l,c)=>[Math.sin(l)*o,c,Math.cos(l)*o,Math.sin(l),0,Math.cos(l)];r.push(...i(s,0),...i(a,0),...i(a,t),...i(s,0),...i(a,t),...i(s,t))}return new Float32Array(r)}var Oo={brain:0,hypothalamus:-.005,brainstem:-.025,"visual-cortex":-.07,eyes:.086,ears:0,nose:.104,mouth:.09,thyroid:.035,thymus:.07,heart:.035,lungs:0,liver:.02,gallbladder:.055,stomach:.04,spleen:-.035,pancreas:-.02,kidneys:-.062,adrenals:-.062,"small-intestine":.04,"large-intestine":.035,bladder:.04,"spinal-cord":-.088,"sympathetic-chain":-.072,vagus:-.01,"arm-muscles":0,"thigh-muscles":0,"belly-fat":.07,"bone-marrow":0,"lymph-nodes":.03,scalp:0,fingernails:.02,toenails:.12,forearm:0,ankle:0,hand:.01,body:0};function Vn(o,t){let n=[],r=[],e=0,s=0,a=o.match(/[MLHVQCSZmlhvqcsz]|-?\d*\.?\d+(?:e-?\d+)?/g)??[],i=0,l="M",c=()=>Number(a[i++]);for(;i<a.length;){let u=a[i]??"";if(/[A-Za-z]/.test(u)&&(l=u,i++,l==="Z"||l==="z")){r[0]&&r.push(r[0]);continue}if(l==="M")r.length>1&&n.push(r),e=c(),s=c(),r=[Me(e,s,t)],l="L";else if(l==="L")e=c(),s=c(),r.push(Me(e,s,t));else if(l==="H")e=c(),r.push(Me(e,s,t));else if(l==="V")s=c(),r.push(Me(e,s,t));else if(l==="Q"){let f=c(),d=c(),h=c(),m=c();for(let p=1;p<=6;p++){let b=p/6,v=1-b;r.push(Me(v*v*e+2*v*b*f+b*b*h,v*v*s+2*v*b*d+b*b*m,t))}e=h,s=m}else{let f=l==="c"||l==="C"?6:l==="s"||l==="S"||l==="q"?4:2;for(let d=0;d<f&&i<a.length&&!/[A-Za-z]/.test(a[i]??"");d++)i++;r.length>1&&n.push(r),r=[]}}return r.length>1&&n.push(r),n}function sa(o,t){let n=Oo[o];if("e"in t){let[c,u,f,d,h=0]=t.e,m=Math.max(.006,Math.min(.09,Math.min(f,d)*Re*.9));return{organs:[{centre:Me(c,u,n),radii:[f*Re,d*Re,m],rotZ:-h*Math.PI/180}],strands:[]}}if(t.line!==void 0)return t.line<1?{organs:[],strands:[]}:{organs:[],strands:Vn(t.d,n).map(c=>({points:c,radius:Math.max(.004,t.line*Re*.5)}))};let r=Vn(t.d,n).flat();if(r.length===0)return{organs:[],strands:[]};let e=r.map(c=>c[0]),s=r.map(c=>c[1]),a=[(Math.min(...e)+Math.max(...e))/2,(Math.min(...s)+Math.max(...s))/2,n],i=Math.max(.006,(Math.max(...e)-Math.min(...e))/2),l=Math.max(.006,(Math.max(...s)-Math.min(...s))/2);return{organs:[{centre:a,radii:[i,l,Math.min(i,l)],rotZ:0}],strands:[]}}var ia={vessels:[{key:"arteries",color:dt.artery,z:.012},{key:"veins",color:dt.vein,z:.004}],nerves:[{key:"nerves",color:dt.nerve,z:-.012}],lymphatics:[{key:"lymphatics",color:dt.lymph,z:.026}],autonomic:[{key:"autonomic",color:dt.nerve,z:-.07}]};function la(){let o=11,t=()=>(o=o*1664525+1013904223>>>0,o/4294967296),n=[[Vo,140],[Ln,30],[Ln.map(e=>({...e,x:240-e.x})),30],[_n,40],[_n.map(e=>({...e,x:240-e.x})),40]],r=[Me(120,55,0)];for(let e=0;e<24;e++)r.push(Me(120+(t()-.5)*40,55+(t()-.5)*52,(t()-.5)*.12));for(let[e,s]of n)for(let a=0;a<s;a++){let i=Math.floor(t()*(e.length-1)),l=e[i],c=e[i+1],u=t(),f=(l.w+(c.w-l.w)*u)*.8,d=(l.d+(c.d-l.d)*u)*.8,h=t()*Math.PI*2,m=Math.sqrt(t());r.push(Me(l.x+(c.x-l.x)*u+Math.sin(h)*f*m,l.y+(c.y-l.y)*u,Math.cos(h)*d*m))}return r}var Pn=null;function Do(o){let t=se.node(o),n=t?.content?.bodyMap;if(!t||!n)return null;let r=$t(n),e=new Set(r.map(u=>u.region)),s=u=>{let f=[],d=[];for(let h of u)for(let m of mo[h].shapes){let p=sa(h,m);f.push(...p.organs),d.push(...p.strands)}return{organs:f,strands:d}},a=n.overlays??[],i=[];for(let u of a)for(let f of ia[u]??[])for(let d of po[f.key])for(let h of Vn(d,f.z))i.push({points:h,color:k(f.color)});let l=k(pe[t.tier]),c=vo(r,!1).filter(u=>u.region!=="body").map(u=>({at:Me(u.x,u.y,Oo[u.region]),r:Math.max(.035,u.r*Re*.85),rows:u.rows}));return a.includes("cells")&&!Pn&&(Pn=la()),{node:o,tint:l,lit:s(e),ghosts:s(ho.filter(u=>!e.has(u))),lines:i,dots:a.includes("cells")?Pn??[]:[],beads:a.includes("autonomic")?bo.map(([u,f])=>Me(u,f,-.07)):[],targets:c,rows:r,map:n,whole:n.scope==="systemic"||e.has("body"),skin:a.includes("skin")}}function Bo(o,t,n,r,e,s){let i=(b,v)=>[n.centre[0]+n.u[0]*b+n.n[0]*.012,v,n.centre[2]+n.u[2]*b+n.n[2]*.012],l=n.centre[1]+n.hv,c=i(r*(n.hu+.12),0),u=b=>Math.hypot(b[0]-c[0],b[2]-c[2]),f=o.targets.map(b=>t(b.at)),d=[];o.rows.forEach((b,v)=>{let E=null;if(o.targets.forEach((R,S)=>{let P=f[S];P&&R.rows.includes(b.index)&&(!E||u(P)<u(E))&&(E=P)}),!E){let R=t([.31,1.25,0]),S=t([-.31,1.25,0]);E=u(R)<u(S)?R:S}d.push({row:b.index,start:E,end:l-(e[v]??0)*2*n.hv})});let h=d.filter(b=>b.end<=b.start[1]).sort((b,v)=>v.start[1]-b.start[1]),m=d.filter(b=>b.end>b.start[1]).sort((b,v)=>b.start[1]-v.start[1]),p=[];for(let b of[h,m])b.forEach((v,E)=>{let R=r*(n.hu+.1+E*.05);p.push({row:v.row,points:[v.start,i(R,v.start[1]),i(R,v.end),i(r*(n.hu-s),v.end)]})});return p.sort((b,v)=>b.row-v.row)}function Nn(o){let t=[];for(let n of o.organs)At(t,n.centre,n.radii,n.rotZ,16);for(let n of o.strands)for(let r=1;r<n.points.length;r++){let e=n.points[r-1],s=n.points[r];ca(t,e,s,n.radius)}return new Float32Array(t)}function ca(o,t,n,r){let e=Qt(n,t);if(Math.hypot(e[0],e[1],e[2])<1e-6)return;let a=J(e),i=Math.abs(a[2])<.9?[0,0,1]:[1,0,0],l=J(In(i,a)),c=In(a,l),u=8,f=(d,h)=>{let m=[l[0]*Math.cos(h)+c[0]*Math.sin(h),l[1]*Math.cos(h)+c[1]*Math.sin(h),l[2]*Math.cos(h)+c[2]*Math.sin(h)];return[[d[0]+m[0]*r,d[1]+m[1]*r,d[2]+m[2]*r],m]};for(let d=0;d<u;d++){let h=d/u*Math.PI*2,m=(d+1)/u*Math.PI*2,[p,b]=f(t,h),[v,E]=f(t,m),[R,S]=f(n,h),[P,C]=f(n,m);o.push(...p,...b,...R,...S,...P,...C,...p,...b,...P,...C,...v,...E)}At(o,n,[r,r,r],0,8)}var Z=(o,t,n,r,e,s,a,i,l)=>({node:o,mood:t,wall:n,wallFinish:r,floor:e,stele:s,accent:a,installation:i,shape:l}),ua=[Z("N01","noir","#121820","plaster","graphite","blackGlass","#7BE0C3",{motif:"helix"},"Double helix"),Z("N02","gallery","#F2F1EC","plaster","pale","marble","#5DBB7A",{motif:"cluster",variant:"cells"},"Cluster"),Z("N03","chroma","#4A2618","plaster","graphite","bronze","#FFB45C",{motif:"ribbons",variant:"folds"},"Folded ribbons"),Z("N04","warm","#6A4A33","walnut","terrazzo","marble","#9BD7A8",{motif:"chain",variant:"fold"},"Folded chain"),Z("N05","gallery","#E6E9EB","plaster","pale","steel","#7FB8D8",{motif:"rings",variant:"gyro"},"Gyroscope"),Z("N06","chroma","#0E3634","plaster","graphite","bronze","#F4C455",{motif:"ribbons",variant:"waves"},"Waves"),Z("N07","chroma","#45121A","plaster","graphite","blackGlass","#FF5C63",{motif:"loops",variant:"eight"},"Figure of eight"),Z("N08","warm","#B48A60","plaster","terrazzo","travertine","#F2A04D",{motif:"wheel"},"Wheel"),Z("N09","gallery","#F0EEE8","plaster","pale","marble","#4FC09A",{motif:"lattice",variant:"weave"},"Weave"),Z("N10","noir","#1A2026","plaster","graphite","steel","#93E0B0",{motif:"strata",variant:"steps"},"Steps"),Z("N11","chroma","#13233D","plaster","graphite","bronze","#FFC86E",{motif:"lattice",variant:"network"},"Network"),Z("N12","gallery","#F1F3F4","plaster","pale","marble","#4AA8E0",{motif:"cluster",variant:"guard"},"Cluster"),Z("N13","chroma","#561A10","plaster","graphite","graphite","#FF7B47",{motif:"rings",variant:"ripples"},"Ripples"),Z("N14","noir","#13181D","plaster","graphite","blackGlass","#77C6FF",{motif:"chain",variant:"twin"},"Twin chains"),Z("N15","warm","#7B4E51","plaster","terrazzo","bronze","#FF9EBE",{motif:"ribbons",variant:"waves"},"Waves"),Z("N16","chroma","#3C0E14","plaster","graphite","blackGlass","#FF4B58",{motif:"rings",variant:"pulse"},"Pulse rings"),Z("N17","gallery","#EDF2F5","plaster","pale","marble","#78C3EE",{motif:"branches",variant:"down"},"Branching tree"),Z("N18","warm","#5E3F2C","walnut","terrazzo","bronze","#E9A55E",{motif:"lattice",variant:"hex"},"Hexagons"),Z("N19","chroma","#0F2940","plaster","graphite","steel","#6CD2FF",{motif:"loops",variant:"hairpin"},"Hairpin loops"),Z("N20","warm","#535A37","plaster","terrazzo","travertine","#C9E27D",{motif:"loops",variant:"coil"},"Coil"),Z("N21","noir","#16122A","plaster","graphite","blackGlass","#A99CFF",{motif:"lattice",variant:"network"},"Network"),Z("N22","noir","#121619","plaster","graphite","steel","#F4DF78",{motif:"branches",variant:"side"},"Branches"),Z("N23","gallery","#ECEDF1","plaster","pale","marble","#8C84FF",{motif:"lattice",variant:"grid"},"Grid"),Z("N24","chroma","#3B1F40","plaster","graphite","bronze","#FFA06F",{motif:"ribbons",variant:"waves"},"Waves"),Z("N25","noir","#0D0E12","plaster","graphite","blackGlass","#63DEFF",{motif:"rings",variant:"lens"},"Lens"),Z("N26","warm","#C7A486","plaster","pale","travertine","#F3B48C",{motif:"strata",variant:"sheets"},"Layers"),Z("N27","warm","#5A3B28","walnut","terrazzo","bronze","#E3C38B",{motif:"strands"},"Strands"),Z("N28","gallery","#F6F4EF","plaster","pale","marble","#9BD5FF",{motif:"strata",variant:"arch"},"Arch"),Z("N29","warm","#D8B9AE","plaster","pale","travertine","#D7A1C6",{motif:"strata",variant:"plates"},"Plates"),Z("N30","noir","#141226","plaster","graphite","blackGlass","#C49AFF",{motif:"rings",variant:"ripples"},"Ripples"),Z("N31","warm","#D9D0C1","travertine","pale","bronze","#E8C27C",{motif:"spiral",variant:"spiral"},"Spiral"),Z("N32","chroma","#1B2936","plaster","graphite","steel","#7ED4FF",{motif:"lattice",variant:"struts"},"Struts"),Z("N33","gallery","#EDEFEB","plaster","pale","marble","#B38BFF",{motif:"strata",variant:"steps"},"Steps"),Z("N34","noir","#0B0C10","plaster","graphite","blackGlass","#D79BFF",{motif:"spiral",variant:"orbit"},"Orbits")],da=new Map(ua.map(o=>[o.node,o]));function ke(o){let t=da.get(o);if(!t)throw new Error(`No exhibit for ${o}`);return t}var en={gallery:1,warm:.88,chroma:.6,noir:.42},mt=.3;function $o(o){return o==="bronze"||o==="steel"}function On(o){return o==="gallery"||o==="warm"}function Cn(o){let t=Number.parseInt(o.slice(1),16),n=r=>{let e=r/255;return e<=.04045?e/12.92:((e+.055)/1.055)**2.4};return .2126*n(t>>16&255)+.7152*n(t>>8&255)+.0722*n(t&255)}function fa(o){let t=Cn(o);return 1.05/(t+.05)>=(t+.05)/.0585?"light":"ink"}function ha(o,t){let[n,r]=[Cn(o),Cn(t)].sort((e,s)=>s-e);return(n+.05)/(r+.05)}var Uo=o=>[1,3,5].map(t=>Number.parseInt(o.slice(t,t+2),16));function Jt(o,t,n){let r=Uo(o),e=Uo(t);return`#${r.map((a,i)=>Math.round(Math.min(255,Math.max(0,a*n+(e[i]??0)*(1-n))))).map(a=>a.toString(16).padStart(2,"0")).join("").toUpperCase()}`}var ma=4.5;function qe(o,t,n){for(let r=0;r<=40;r++){let e=Jt(n,o,r/40);if(ha(e,t)>=ma)return e}return n}function Ho(o,t){if(fa(o)==="light"){let r="#F4F2EE";return{text:r,text2:qe(Jt(r,o,.78),o,r),text3:qe(Jt(r,o,.56),o,r),accent:qe(t,o,"#FFFFFF"),sourced:qe(t,o,"#FFFFFF")}}let n="#0C1824";return{text:n,text2:qe("#3A4A5A",o,n),text3:qe("#5A6A7A",o,n),accent:qe(Jt("#000000",t,.38),o,"#000000"),sourced:qe("#0672A8",o,"#000000")}}var tn={blackGlass:"#0B0D10",bronze:"#2B241D",steel:"#23272C",travertine:"#DED6C8",marble:"#E9E6E0",graphite:"#2E3136",terrazzo:"#D8D2C8"};var pa=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyQ","KeyE","ShiftLeft","ShiftRight"]);function ba(o){return o instanceof HTMLElement&&(o.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(o.tagName))}var nn=class{keys=new Set;downAt=new Map;held=new Map;lastConsume=performance.now();dragX=0;dragY=0;zoom=0;pointers=new Map;press=null;pinch=0;el;h;off=[];constructor(t,n){this.el=t,this.h=n;let r=(a,i,l,c)=>{a.addEventListener(i,l,c),this.off.push(()=>a.removeEventListener(i,l,c))},e=(a,i)=>{window.addEventListener(a,i),this.off.push(()=>window.removeEventListener(a,i))};r(t,"pointerdown",a=>{a.button!==0&&a.pointerType==="mouse"||(t.setPointerCapture?.(a.pointerId),this.pointers.set(a.pointerId,{x:a.clientX,y:a.clientY}),this.pointers.size===1&&(this.press={x:a.clientX,y:a.clientY,moved:!1}),this.pointers.size===2&&(this.press=null,this.pinch=this.pinchDistance()),this.h.poke())}),r(t,"pointermove",a=>{let i=this.pointers.get(a.pointerId);if(!i){a.pointerType==="mouse"&&this.h.hover(a.clientX,a.clientY);return}let l=a.clientX-i.x,c=a.clientY-i.y;if(i.x=a.clientX,i.y=a.clientY,this.pointers.size===2){let u=this.pinchDistance();this.pinch>0&&u>0&&(this.zoom+=(this.pinch-u)*2.2),this.pinch=u}else this.press&&(!this.press.moved&&Math.hypot(a.clientX-this.press.x,a.clientY-this.press.y)>5&&(this.press.moved=!0),this.press.moved&&(this.dragX+=l,this.dragY+=c));this.h.poke()});let s=a=>{let i=this.press;this.pointers.delete(a.pointerId),this.pointers.size===0&&(i&&!i.moved&&a.type==="pointerup"&&this.h.click(a.clientX,a.clientY),this.press=null,this.pinch=0)};r(t,"pointerup",s),r(t,"pointercancel",s),r(t,"pointerleave",a=>{a.pointerType==="mouse"&&!this.pointers.has(a.pointerId)&&this.h.hover(-1,-1)}),r(t,"wheel",a=>{a.preventDefault(),this.zoom+=a.deltaMode===1?a.deltaY*32:a.deltaY,this.h.poke()},{passive:!1}),e("keydown",a=>{if(a.defaultPrevented||a.metaKey||a.ctrlKey||a.altKey||ba(a.target)||this.h.blocked())return;let i=a.target===t||a.target===document.body||a.target===document.documentElement;if(a.key==="Escape"&&i){a.preventDefault(),this.h.back();return}if(a.key==="Enter"&&a.target===t){a.preventDefault(),this.h.activate();return}!i||!pa.has(a.code)||(a.preventDefault(),this.keys.has(a.code)||this.downAt.set(a.code,performance.now()),this.keys.add(a.code),this.h.poke())}),e("keyup",a=>{if(!this.keys.has(a.code))return;let i=performance.now(),l=Math.max(this.downAt.get(a.code)??i,this.lastConsume);this.held.set(a.code,(this.held.get(a.code)??0)+Math.max(0,i-l)),this.keys.delete(a.code),this.downAt.delete(a.code),this.h.poke()}),e("blur",()=>{this.keys.clear(),this.downAt.clear(),this.held.clear()})}pinchDistance(){let[t,n]=[...this.pointers.values()];return t&&n?Math.hypot(t.x-n.x,t.y-n.y):0}get busy(){return this.keys.size>0||this.held.size>0||this.pointers.size>0}consume(){let t=performance.now(),n=Math.max(1,t-this.lastConsume),r=new Map;for(let a of new Set([...this.keys,...this.held.keys()])){let i=this.held.get(a)??0;this.keys.has(a)&&(i+=t-Math.max(this.downAt.get(a)??t,this.lastConsume)),r.set(a,Math.min(1,i/n))}this.held.clear(),this.lastConsume=t;let e=a=>r.get(a)??0,s={forward:e("KeyW")+e("ArrowUp")-e("KeyS")-e("ArrowDown"),strafe:e("KeyD")-e("KeyA"),turn:e("ArrowRight")+e("KeyE")-e("ArrowLeft")-e("KeyQ"),run:e("ShiftLeft")+e("ShiftRight")>.5,lookX:this.dragX,lookY:this.dragY,zoom:this.zoom};return this.dragX=0,this.dragY=0,this.zoom=0,s}dispose(){for(let t of this.off)t();this.keys.clear(),this.held.clear(),this.el}};var Dn=384,Bn=288,on=class{gl;fbo;texture;tri;parallel;compiled=new Map;loading=new Set;order=[];showing=null;lastDraw=0;constructor(t){this.gl=t,this.parallel=t.getExtension("KHR_parallel_shader_compile");let n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,Dn,Bn,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),this.texture=n,this.fbo=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,this.fbo),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0),t.bindFramebuffer(t.FRAMEBUFFER,null),this.tri=t.createVertexArray(),t.bindVertexArray(this.tri);let r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.bindVertexArray(null)}prepare(t){let n=this.compiled.get(t);return n?(!n.ready&&!n.failed&&this.poll(n),n.ready):(this.loading.has(t)||(this.loading.add(t),fo(t).then(r=>{this.loading.delete(t),this.compile(t,r)}).catch(()=>this.loading.delete(t))),!1)}compile(t,n){let r=this.gl,e=se.node(t)?.tier??"T01",s=(u,f)=>{let d=r.createShader(u);return d&&(r.shaderSource(d,f),r.compileShader(d)),d},a=s(r.VERTEX_SHADER,io),i=s(r.FRAGMENT_SHADER,so(n,1)),l=r.createProgram();if(!a||!i||!l)return;r.attachShader(l,a),r.attachShader(l,i),r.bindAttribLocation(l,0,"p"),r.linkProgram(l),r.deleteShader(a),r.deleteShader(i);let c={scene:n,tier:e,program:l,loc:new Map,ready:!1,failed:!1};for(this.compiled.set(t,c),this.order.push(t);this.order.length>3;){let u=this.order.findIndex(h=>h!==this.showing&&h!==t);if(u<0)break;let[f]=this.order.splice(u,1),d=f?this.compiled.get(f):void 0;f&&d&&(r.deleteProgram(d.program),this.compiled.delete(f))}this.poll(c)}poll(t){let n=this.gl;if(!(this.parallel&&!n.getProgramParameter(t.program,this.parallel.COMPLETION_STATUS_KHR))){if(!n.getProgramParameter(t.program,n.LINK_STATUS)){t.failed=!0;return}for(let r of["uRes","uOffset","uCamPos","uCamTarget","uFov","uAccent","uFloor","uRing","uTime","uZero"])t.loc.set(r,n.getUniformLocation(t.program,r));t.ready=!0}}render(t,n,r){let e=this.compiled.get(t);if(!e?.ready)return!1;let s=performance.now();if(this.showing===t&&s-this.lastDraw<r)return!1;this.lastDraw=s;let a=this.gl,i=lo(e.scene),l=co(e.scene),c;if(l.az){let d=(l.az[0]+l.az[1])/2,h=(l.az[1]-l.az[0])/2;c={...i,az:d+Math.sin(n*.15)*h*.6}}else c={...i,az:i.az+n*6};let u=e.scene.poster??1.5,f=uo(e.scene,e.tier,c,u+n);a.bindFramebuffer(a.FRAMEBUFFER,this.fbo),a.viewport(0,0,Dn,Bn),a.disable(a.DEPTH_TEST),a.disable(a.BLEND),a.useProgram(e.program),a.uniform2f(e.loc.get("uRes")??null,Dn,Bn),a.uniform2f(e.loc.get("uOffset")??null,0,0),a.uniform1i(e.loc.get("uZero")??null,0);for(let[d,h]of Object.entries(f)){let m=e.loc.get(d)??null;h.length===3?a.uniform3f(m,h[0]??0,h[1]??0,h[2]??0):a.uniform1f(m,h[0]??0)}return a.bindVertexArray(this.tri),a.drawArrays(a.TRIANGLES,0,3),a.bindVertexArray(null),a.bindFramebuffer(a.FRAMEBUFFER,null),a.enable(a.DEPTH_TEST),this.showing=t,!0}failed(t){return this.compiled.get(t)?.failed===!0}dispose(){let t=this.gl;for(let n of this.compiled.values())t.deleteProgram(n.program);t.deleteFramebuffer(this.fbo),t.deleteTexture(this.texture)}};var Qe=o=>o.toFixed(4),ee=`#version 300 es
#ifndef Q
#define Q 0
#endif
precision highp float;
precision highp int;
precision highp sampler2DShadow;
`,Le=`
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
`,rn=`
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
`,Un=`
uniform sampler2D uSky;
uniform float uSkyLod;
vec2 skyUv(vec3 d) { return vec2(atan(d.x, -d.z) * 0.15915494 + 0.5, acos(clamp(d.y, -1.0, 1.0)) * 0.31830989); }
vec3 skyAt(vec3 d, float rough) { return textureLod(uSky, skyUv(d), rough * uSkyLod).rgb; }
`,$n=`
uniform vec3 uFog;
uniform vec3 uFogDisplay;
uniform float uFogDensity;
// Aerial haze, denser near the ground: distance fades toward the silver horizon.
float hazeK(vec3 p, float dist) { return 1.0 - exp(-dist * uFogDensity * (0.35 + 0.65 * exp(-max(p.y, 0.0) * 0.015))); }
vec3 haze(vec3 col, vec3 p, float dist) { return mix(col, uFog, hazeK(p, dist)); }
`,Wo=`
const float HALF_ = ${Qe(B)};
const float RING_ = ${Qe(_)};
const float ATRIUM_ = ${Qe(D)};
const float FLOOR_H_ = ${Qe(Be)};
const float SLAB_ = ${Qe(re)};
const float ROOF_ = ${Qe(Be*ft)};
const float CINEMA_ = ${Qe(mt)};
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
    else if (m < RING_ && lv < ${Qe(ft-1)}) res = uInterior * 0.22;
    else {
      float blur = 0.03 + rough * 1.6 + tUp * rough * 0.25;
      res = mix(uInterior * 0.32, vec3(uPanel), coffer(q, blur) * (1.0 - smoothstep(0.5, 0.9, rough) * 0.6));
    }
  } else {
    res = uInterior * 0.5 * here;
  }
  return mix(res, uInterior * 0.75 * here, smoothstep(0.55, 1.0, rough));
}
`,va=`
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
`,zo=`
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
`,Go=`
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
`,an=`${ee}
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
`,Hn=`${ee}
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
${Le}
${rn}
${Un}
${$n}
${Wo}
${va}
${zo}
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
`,ko=Hn.replace(`#version 300 es
`,`#version 300 es
#define CLIP 1
`),Xo=`${ee}
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
${Le}
${rn}
${Un}
${$n}
${Wo}
${zo}
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
`,Ze=`${ee}
layout(location = 0) in vec2 aPos;
out vec2 vNdc;
void main() {
  vNdc = aPos;
  gl_Position = vec4(aPos, 1.0, 1.0);
}
`,Yo=`${ee}
in vec2 vNdc;
uniform mat4 uInvViewProj;
uniform vec3 uCamPos;
uniform vec3 uSun;
uniform vec3 uSunColor;
${Le}
${Un}
#if Q == 1
${rn}
${Go}
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
`,jo=`${ee}
in vec2 vNdc;
uniform vec3 uSun;
${rn}
${Go}
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
`,Ko=`${ee}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
void main() {
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,qo=`${ee}
void main() {}
`,Qo=`${ee}
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
`,Zo=`${ee}
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
${Le}
${$n}
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
`,Jo=`${ee}
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
`,er=`${ee}
in vec2 vUv;
in vec4 vCol;
in float vHard;
in vec3 vPos;
uniform float uClip;
uniform float uClipY;
${Le}
out vec4 frag;
void main() {
  if (uClip > 0.5 && vPos.y < uClipY - 0.02) discard;
  float r = length(vUv * 2.0 - 1.0);
  float a = vHard > 0.5 ? 1.0 : pow(clamp(1.0 - r, 0.0, 1.0), 1.7);
  // Glows add light: in the HDR buffer, as light.
  vec3 c = uDirect > 0.5 ? vCol.rgb : toLinear(vCol.rgb) * 2.5;
  frag = vec4(c * a, vCol.a * a);
}
`,tr=`${ee}
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
`,nr=`${ee}
in vec2 vC;
in float vFade;
${Le}
out vec4 frag;
void main() {
  float r = length(vC);
  if (r > 1.0) discard;
  float a = pow(1.0 - r, 2.2) * vFade;
  // Added light, no coverage.
  vec3 c = uDirect > 0.5 ? vec3(1.0, 0.97, 0.92) * a * 0.5 : vec3(1.0, 0.95, 0.88) * a * 2.2;
  frag = vec4(c, 0.0);
}
`,or=`${ee}
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec2 aUv;
uniform mat4 uViewProj;
out vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,rr=`${ee}
in vec2 vUv;
uniform float uTime;
uniform float uLength;
${Le}
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
`,ar=`${ee}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
void main() {
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,sr=`${ee}
uniform vec4 uColor;
${Le}
out vec4 frag;
void main() {
  frag = vec4(uiOut(uColor.rgb / max(uColor.a, 1e-4)) * uColor.a, uColor.a);
}
`,sn=`${ee}
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
`,ir=`${ee}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform vec3 uTint;
uniform float uWhole;
uniform float uTime;
uniform float uScanY;
${Le}
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
`,lr=`${ee}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uPulse;
${Le}
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
`,cr=`${ee}
in vec3 vWorld;
in vec3 vNormal;
in float vLocalY;
uniform vec3 uCamPos;
uniform float uTime;
uniform float uSide;
${Le}
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
`,ur=`${ee}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
uniform mat4 uModel;
uniform float uPointSize;
void main() {
  gl_Position = uViewProj * uModel * vec4(aPos, 1.0);
  gl_PointSize = max(1.5, uPointSize / max(gl_Position.w, 0.1));
}
`,dr=`${ee}
uniform vec4 uColor;
uniform float uRound;
${Le}
out vec4 frag;
void main() {
  if (uRound > 0.5) {
    vec2 c = gl_PointCoord - 0.5;
    if (dot(c, c) > 0.25) discard;
  }
  frag = vec4(uiOut(uColor.rgb / max(uColor.a, 1e-4)) * uColor.a, uColor.a);
}
`,fr=`${ee}
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
`,hr=`${ee}
in vec2 vC;
uniform float uTime;
${Le}
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
`,mr=`${ee}
in vec2 vNdc;
uniform float uDim;
out vec4 frag;
void main() {
  float v = smoothstep(0.35, 1.45, length(vNdc));
  float a = uDim * (0.66 + 0.3 * v);
  frag = vec4(vec3(0.0) * a, a);
}
`,pr=`${ee}
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
`,br=`${ee}
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
`,vr=`${ee}
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
`,gr=`${ee}
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
`;var yr={gloss:.4,emit:1},ga={gloss:.9,pattern:4},Se=Math.PI*2;function ya(o){let t=o>>>0||1;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function xr(o,t,n,r){let e=n.span,s=n.depth,a=n.top-n.bottom,i=(d,h,m)=>[n.at[0]+n.along[0]*d+n.inward[0]*m,n.bottom+h,n.at[1]+n.along[1]*d+n.inward[1]*m],l=d=>d?r.glow:r.body,c=d=>d?yr:r.material,u={p:i,W:e,D:s,H:a,rand:ya(r.seed),m:o,body:r.body,material:r.material,glow:r.glow,curve:(d,h,m=8,p=!1,b=!1)=>o.sweep(d,h,m,l(b),c(b),p),rod:(d,h,m,p=!1)=>o.sweep([d,h],m,5,l(p),c(p)),bead:(d,h,m=!1,p=6)=>o.sphere(d,h,p,l(m),c(m)),box:(d,h,m,p,b,v,E=!1)=>{let R=i(d,h,m),S=i(p,b,v);o.box([Math.min(R[0],S[0]),Math.min(R[1],S[1]),Math.min(R[2],S[2])],[Math.max(R[0],S[0]),Math.max(R[1],S[1]),Math.max(R[2],S[2])],l(E),c(E))},strip:(d,h,m,p=!1)=>o.strip(d,h,m,l(p),c(p)),hang:d=>{for(let h of d)o.sweep([h,[h[0],n.ceiling,h[2]]],.006,4,[.75,.77,.8],{...ga,ao:r.light})},inside:d=>{let h=d[0]-n.at[0],m=d[2]-n.at[1],p=Math.max(-e/2,Math.min(e/2,h*n.along[0]+m*n.along[1])),b=Math.max(-s/2,Math.min(s/2,h*n.inward[0]+m*n.inward[1]));return i(p,Math.max(0,Math.min(a,d[1]-n.bottom)),b)}},f=(d,h,m)=>J([n.along[0]*d+n.inward[0]*m,h,n.along[1]*d+n.inward[1]*m]);switch(t.motif){case"helix":return xa(u);case"cluster":return Ea(u,t.variant);case"ribbons":return Ta(u,t.variant,f);case"chain":return Ra(u,t.variant);case"rings":return Ma(u,t.variant);case"loops":return wa(u,t.variant);case"wheel":return Fa(u);case"branches":return Sa(u,t.variant,f);case"lattice":return Aa(u,t.variant);case"strata":return La(u,t.variant,f);case"strands":return _a(u);case"spiral":return Ia(u,t.variant)}}function Je(o,t,n,r,e,s,a,i,l=0){let c=[];for(let u=0;u<i;u++){let f=u/i*Se,d=Math.cos(f)*e,h=Math.sin(f)*s;a==="uv"?c.push(o.p(t+d,n+h*Math.sin(l),r+h*Math.cos(l))):a==="uh"?c.push(o.p(t+d,n+h,r+d*Math.sin(l))):c.push(o.p(t+d*Math.sin(l),n+h,r+d))}return c}function xa(o){let t=o.W*.92,n=Math.min(.56,o.H*.36),r=o.H*.5,e=3.2,s=.42*Se,a=(l,c)=>{let u=Se*e*l+c;return o.p(-t/2+t*l,r+n*Math.sin(u),n*Math.cos(u))};for(let l of[0,s]){let c=[];for(let u=0;u<=60;u++)c.push(a(u/60,l));o.curve(c,.045,7)}let i=Math.round(e*9);for(let l=0;l<i;l++){let c=(l+.5)/i,u=a(c,0),f=a(c,s);o.rod(u,f,.014),o.bead([(u[0]+f[0])/2,(u[1]+f[1])/2,(u[2]+f[2])/2],.032,!0)}o.hang([a(.02,0),a(.5,0),a(.98,0)].map(l=>[l[0],o.p(0,r+n,0)[1],l[2]]))}function Ea(o,t){let n=[],r=t==="cells"?13:9;for(let e=0;e<900&&n.length<r;e++){let s=t==="cells"?.16+o.rand()*.28:.17+o.rand()*.16,a=[(o.rand()-.5)*(o.W-2*s-.4),s+.1+o.rand()*(o.H-2*s-.2),(o.rand()-.5)*(o.D-2*s-.3)];n.every(i=>Math.hypot(i.c[0]-a[0],i.c[1]-a[1],i.c[2]-a[2])>i.r+s+.08)&&n.push({c:a,r:s})}n.forEach(({c:e,r:s},a)=>{let i=o.p(e[0],e[1],e[2]);if(o.m.sphere(i,s,12,o.body,o.material),t==="cells")o.bead(o.p(e[0]+s*.18,e[1]-s*.78,e[2]-s*.25),s*.36,!0,8);else for(let l=0;l<12;l++){let c=Math.acos(1-2*(l+.5)/12),u=l*2.39996+a,f=[Math.sin(c)*Math.cos(u),Math.cos(c),Math.sin(c)*Math.sin(u)],d=o.p(e[0]+f[0]*s,e[1]+f[1]*s,e[2]+f[2]*s),h=o.p(e[0]+f[0]*(s+.13),e[1]+f[1]*(s+.13),e[2]+f[2]*(s+.13));o.rod(d,h,.012,a%3===0)}}),o.hang(n.slice(0,5).map(({c:e,r:s})=>o.p(e[0],e[1]+s,e[2])))}function Ta(o,t,n){let r=o.W*.9,e=o.H*.5;(t==="folds"?[-.9,-.3,.3,.9]:[-.7,0,.7]).forEach((a,i)=>{let l=[],c=[],u=[],f=t==="folds"?150:110;for(let d=0;d<=f;d++){let h=d/f,m=-r/2+r*h,p,b=0;if(t==="folds"){let E=Math.sin(m/.85*Se+i*.9);p=e+.5*(Math.tanh(3*E)/Math.tanh(3))}else p=e+.38*Math.sin(m/3.1*Se+i*1.7)+.08*Math.sin(m/.9*Se+i),b=.9*Math.sin(m/2.4*Se+i*2.1);let v=a+(t==="waves"?.18*Math.sin(m/1.7*Se+i):0);l.push(o.p(m,p,v)),c.push(t==="folds"?n(0,0,1):n(0,Math.sin(b),Math.cos(b))),u.push(o.p(m,p+(t==="folds"?.012:0),v+(t==="folds"?-.21:0)))}o.strip(l,c,t==="folds"?.42:.34),i%2===0&&o.curve(u.filter((d,h)=>h%2===0),.009,4,!1,!0)}),o.hang([o.p(-r/2+.2,e+.5,0),o.p(0,e+.5,0),o.p(r/2-.2,e+.5,0)])}function Ra(o,t){let n=o.H*.5;if(t==="twin"){for(let l of[-.48,.48]){let c=o.W*.88;o.rod(o.p(-c/2,n,l),o.p(c/2,n,l),.02);let u=12;for(let f=0;f<u;f++){let d=-c/2+.25+f/(u-1)*(c-.5),h=o.p(d,n,l);o.bead(h,.075,f%3===1,8),o.rod(h,o.p(d+.12,n-.32,l+Math.sign(l)*.34),.008)}}o.hang([o.p(-o.W*.4,n,0),o.p(o.W*.4,n,0)]);return}let r=[];for(let l=0;l<9;l++)r.push([-o.W*.42+l/8*o.W*.84,.25+o.rand()*(o.H-.5),(o.rand()-.5)*(o.D-.6)]);let e=[],s=(l,c,u,f,d)=>.5*(2*c+(-l+u)*d+(2*l-5*c+4*u-f)*d*d+(-l+3*c-3*u+f)*d*d*d);for(let l=0;l<r.length-1;l++)for(let c=0;c<14;c++){let u=c/14,f=d=>r[Math.max(0,Math.min(r.length-1,d))];e.push([0,1,2].map(d=>s(f(l-1)[d]??0,f(l)[d]??0,f(l+1)[d]??0,f(l+2)[d]??0,u)))}let i=e.map((l,c)=>{let u=c/e.length;if(![.18,.5,.78].some(h=>Math.abs(u-h)<.07))return l;let d=c*1.1;return[l[0],l[1]+Math.sin(d)*.12,l[2]+Math.cos(d)*.12]}).map(l=>o.p(l[0],l[1],l[2]));o.curve(i,.018,5);for(let l=0;l<i.length;l+=3)o.bead(i[l],.05,l%21===0,6);o.hang([i[0],i[Math.floor(i.length/2)],i[i.length-1]])}function Ma(o,t){let n=o.H*.5;if(t==="gyro"){let s=Math.min(.7,o.H*.45);o.bead(o.p(0,n,0),.12,!0,12),[s,s*.8,s*.6].forEach((a,i)=>o.curve(Je(o,0,n,0,a,a,i===1?"uh":"hv",48,i*.6),.024,6,!0)),o.rod(o.p(-o.W*.36,n,0),o.p(o.W*.36,n,0),.02);for(let a of[-1,1])o.bead(o.p(a*o.W*.36,n,0),.13,!1,12);o.hang([o.p(0,n+s,0),o.p(-o.W*.36,n,0),o.p(o.W*.36,n,0)]);return}if(t==="ripples"){for(let s=0;s<6;s++){let a=.28+s*.47;o.curve(Je(o,0,n+.32-s*.1,0,a,a*.42,"uv",48),.03-s*.003,4,!0,s===0||s===3)}o.bead(o.p(0,n+.55,0),.09,!0,10),o.hang([o.p(0,n+.55,0),o.p(-2.5,n-.18,0),o.p(2.5,n-.18,0)]);return}if(t==="pulse"){let s=i=>{let l=(c,u,f)=>f*Math.exp(-(((i-c)/u)**2));return .2+l(.14,.05,.1)+l(.34,.035,.5)+l(.42,.04,-.06)+l(.6,.06,.14)+l(.86,.035,.42)};for(let i=0;i<15;i++){let l=i/14,c=Math.min(o.H*.47,s(l));o.curve(Je(o,-o.W*.44+l*o.W*.88,n,0,c,c,"hv",24),.02,4,!0,c>.5)}o.rod(o.p(-o.W*.46,n,0),o.p(o.W*.46,n,0),.01,!0),o.hang([o.p(-o.W*.44,n+.2,0),o.p(0,n+.3,0),o.p(o.W*.44,n+.2,0)]);return}let r=7,e=Math.min(o.H*.47,.72);for(let s=0;s<r;s++){let a=-o.D*.42+s/(r-1)*o.D*.84,i=e*(1-s*.1);o.curve(Je(o,0,n,a,i,i,"uh",40),.02,5,!0,s===2||s===5)}o.bead(o.p(0,n,o.D*.42),.15,!0,12);for(let s of[-1,1])o.curve(Je(o,s*o.W*.31,n,0,.62,.62*.4,"uv",40),.016,4,!0);o.hang([o.p(0,n+e,-o.D*.42),o.p(0,n+e*.4,o.D*.42),o.p(-o.W*.31,n,0),o.p(o.W*.31,n,0)])}function wa(o,t){let n=o.H*.5;if(t==="eight"){let s=[],a=o.W*.46;for(let i=0;i<120;i++){let l=i/120*Se,c=1+Math.sin(l)**2;s.push(o.p(a*Math.cos(l)/c,n+.3*Math.sin(l),a*Math.sin(l)*Math.cos(l)/c*.62))}o.curve(s,.055,8,!0);for(let i=0;i<120;i+=9)o.bead(s[i],.07,!0,8);o.hang([s[0],s[30],s[60],s[90]]);return}if(t==="hairpin"){let s=o.H-.08;o.rod(o.p(-o.W*.44,s,0),o.p(o.W*.44,s,0),.03);for(let a=0;a<5;a++){let i=-o.W*.34+a/4*o.W*.68,l=.75+a*37%5*.1,c=.14,u=[];for(let f=0;f<=10;f++)u.push(o.p(i-c,s-f/10*l,0));for(let f=1;f<10;f++){let d=Math.PI+f/10*Math.PI;u.push(o.p(i+Math.cos(d)*c,s-l+Math.sin(d)*c,0))}for(let f=10;f>=0;f--)u.push(o.p(i+c,s-f/10*l,0));o.curve(u,.03,5),o.bead(o.p(i,s-l-c,0),.055,!0,8)}o.hang([o.p(-o.W*.4,s,0),o.p(0,s,0),o.p(o.W*.4,s,0)]);return}let r=o.W*.9,e=[];for(let s=0;s<=120;s++){let a=s/120,i=a*Se*6.5;e.push(o.p(-r/2+r*a,n+.42*Math.sin(i),.42*Math.cos(i)+.25*Math.sin(a*Math.PI*2)))}o.curve(e,.05,8);for(let s=6;s<e.length;s+=18)o.bead(e[s],.06,!0,8);o.hang([e[10],e[60],e[110]])}function Fa(o){let t=o.H*.5,n=Math.min(.68,o.H*.44),r=Je(o,-.62,t,0,n,n,"uh",56),e=Je(o,.62,t,0,n*.82,n*.82,"hv",56);o.curve(r,.04,8,!0),o.curve(e,.04,8,!0);for(let s=0;s<56;s+=7)o.bead(r[s],.075,s%14===0,8),o.bead(e[(s+3)%56],.065,s%14===7,8);o.hang([o.p(-.62,t+n,0),o.p(.62,t+n*.82,0)])}function Sa(o,t,n){let r=[],e=(s,a,i,l,c,u)=>{let f=o.inside([s[0]+a[0]*i,s[1]+a[1]*i,s[2]+a[2]*i]);if(o.m.sweep([s,f],[l,l*.72],5,o.body,o.material),c===0){r.push(f);return}for(let d of[-1,1]){let h=(o.rand()-.5)*.2,m=t==="down"?u%2===1?ln(a,n(0,-.15,d*(.62+h))):ln(a,n(d*(.55+h),-.25,0)):u%2===1?ln(a,n(0,0,d*(.42+h))):ln(a,n(0,d*(.3+h),0));e(f,J(m),i*(.7+o.rand()*.06),l*.74,c-1,u+1)}};if(t==="down"){let s=o.p(0,o.H,0),a=o.p(0,o.H-.32,0);o.m.sweep([s,a],[.075,.065],6,o.body,o.material);for(let i of[-1,1])e(a,J(n(i,-.42,0)),1.25,.055,4,1)}else{let s=o.p(-o.W*.47,o.H*.55,0);e(s,n(1,0,0),1.05,.055,5,0)}for(let s of r)o.bead(s,.045,!0,6);o.hang(t==="down"?[]:[o.p(-o.W*.4,o.H*.55,0),o.p(-o.W*.1,o.H*.55,0)])}function ln(o,t){return[o[0]+t[0],o[1]+t[1],o[2]+t[2]]}function Aa(o,t){let n=o.H*.5,r=o.W*.46,e=o.D*.42;if(t==="weave"){[-.36,0,.36].forEach((s,a)=>{let i=(a%2===0?1:-1)*.5,l=Math.cos(i),c=Math.sin(i);for(let u=-12;u<=12;u++){let f=u*.42,d=-10,h=10,m=[];for(let b of[d,h])m.push([l*b-c*f,c*b+l*f]);let p=Pa(m[0],m[1],r,e);p&&o.rod(o.p(p[0][0],n+s,p[0][1]),o.p(p[1][0],n+s,p[1][1]),.012,u%5===0)}}),o.hang([o.p(-r*.8,n+.36,0),o.p(0,n+.36,0),o.p(r*.8,n+.36,0)]);return}if(t==="network"||t==="struts"){if(t==="struts"){let l=[[.25,-.45],[.25,.45],[o.H-.3,0]];for(let[u,f]of l)o.rod(o.p(-r,u,f),o.p(r,u,f),.022);let c=12;for(let u=0;u<=c;u++){let f=-r+u/c*2*r,d=-r+(u+.5)/c*2*r;u<c&&(o.rod(o.p(f,.25,-.45),o.p(d,o.H-.3,0),.014),o.rod(o.p(f,.25,.45),o.p(d,o.H-.3,0),.014),o.rod(o.p(f,.25,-.45),o.p(d,.25,.45),.006,!0))}o.hang([o.p(-r*.9,o.H-.3,0),o.p(0,o.H-.3,0),o.p(r*.9,o.H-.3,0)]);return}let s=[];for(let l=0;l<600&&s.length<24;l++){let c=[(o.rand()-.5)*2*r,.15+o.rand()*(o.H-.3),(o.rand()-.5)*2*e];s.every(u=>Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])>.55)&&s.push(c)}let a=new Set;s.forEach((l,c)=>{let u=s.map((f,d)=>({j:d,d:Math.hypot(f[0]-l[0],f[1]-l[1],f[2]-l[2])})).filter(f=>f.j!==c).sort((f,d)=>f.d-d.d).slice(0,3);for(let{j:f}of u){let d=c<f?`${c}-${f}`:`${f}-${c}`;if(a.has(d))continue;a.add(d);let h=s[f];o.rod(o.p(l[0],l[1],l[2]),o.p(h[0],h[1],h[2]),.01,(c+f)%7===0)}o.bead(o.p(l[0],l[1],l[2]),.06+c%3*.02,c%3===0,8)});let i=s.slice().sort((l,c)=>c[1]-l[1]).slice(0,4);o.hang(i.map(l=>o.p(l[0],l[1],l[2])));return}if(t==="hex"){let a=Math.sqrt(3)*.42,i=new Map,l=[];for(let c=-1;c<=1;c++)for(let u=-4;u<=4;u++){let f=u*1.5*.42,d=c*a+(u%2===0?0:a/2);if(Math.abs(f)>r-.42||Math.abs(d)+.42>o.D/2)continue;let h=n+.06*Math.sin(u*1.3+c);l.push(o.p(f,h,d));for(let m=0;m<6;m++){let p=m/6*Se,b=(m+1)/6*Se,v=[f+Math.cos(p)*.42,d+Math.sin(p)*.42],E=[f+Math.cos(b)*.42,d+Math.sin(b)*.42],R=[v,E].map(S=>`${S[0].toFixed(2)},${S[1].toFixed(2)}`).sort().join("|");i.has(R)||i.set(R,[o.p(v[0],h,v[1]),o.p(E[0],h,E[1])])}}for(let[c,u]of i.values())o.rod(c,u,.014);for(let c of l)o.bead(c,.05,!0,6);o.hang([l[0],l[Math.floor(l.length/2)],l[l.length-1]].filter(c=>c!==void 0));return}for(let s=0;s<9;s++)for(let a=0;a<2;a++)for(let i=0;i<3;i++){let l=-r+.2+s/8*(2*r-.4),c=.25+a/1*(o.H-.5),u=-e+.15+i/2*(2*e-.3),f=.07+(s+a*3+i*5)%4*.012;o.box(l-f,c-f,u-f,l+f,c+f,u+f,(s*7+a*3+i*11)%9===0)}for(let s=0;s<9;s++){let a=-r+.2+s/8*(2*r-.4);o.rod(o.p(a,.25,-e+.15),o.p(a,.25,e-.15),.006),o.rod(o.p(a,o.H-.25,-e+.15),o.p(a,o.H-.25,e-.15),.006)}o.hang([o.p(-r+.2,o.H-.25,0),o.p(r-.2,o.H-.25,0)])}function Pa(o,t,n,r){let e=0,s=1,a=[t[0]-o[0],t[1]-o[1]],i=[[-a[0],o[0]+n],[a[0],n-o[0]],[-a[1],o[1]+r],[a[1],r-o[1]]];for(let[l,c]of i){if(l===0){if(c<0)return null;continue}let u=c/l;if(l<0?e=Math.max(e,u):s=Math.min(s,u),e>s)return null}return[[o[0]+a[0]*e,o[1]+a[1]*e],[o[0]+a[0]*s,o[1]+a[1]*s]]}function La(o,t,n){let r=o.W*.46;if(t==="steps"){for(let a=0;a<7;a++){let i=-r+a/7*2*r+.05,l=i+2*r/7-.14,c=.12+a/6*(o.H-.4);o.box(i,c,-.75,l,c+.05,.75),o.box(i,c+.05,.73,l,c+.065,.75,!0),o.hang([o.p((i+l)/2,c+.05,-.6),o.p((i+l)/2,c+.05,.6)])}return}if(t==="sheets"){for(let s=0;s<4;s++){let a=.25+s*((o.H-.5)/3),i=24,l=6,c=o.D*.36-s*.05,u=(f,d)=>{let h=-r+f/i*2*r,m=-c+d/l*2*c;return o.p(h,a+.07*Math.sin(h*1.6+s*1.1)*Math.cos(m*2.1+s),m)};for(let f=0;f<i;f++)for(let d=0;d<l;d++)o.m.quad(u(f,d),u(f+1,d),u(f+1,d+1),u(f,d+1),o.body,o.material);s===3&&o.curve(Array.from({length:i+1},(f,d)=>u(d,l)),.008,4,!1,!0),s===3&&o.hang([u(2,3),u(12,3),u(22,3)])}return}if(t==="arch"){for(let a=0;a<12;a++){let i=Math.PI*(.08+.84*a/11),l=Math.cos(i)*r*.82,c=-Math.sin(i)*o.D*.32+o.D*.14,u=.55+.6*Math.sin(i)**2,f=.1+.05*Math.sin(i),d=o.p(l,0,c);o.m.cylinder(d[0],d[2],f,cn(o)-u,cn(o),16,o.body,o.material),o.m.disc([d[0],cn(o)-u-.002,d[2]],[0,1,0],f*.55,f*.8,16,o.glow,yr),o.hang([[d[0],cn(o),d[2]]])}return}let e=9;for(let s=0;s<e;s++){let a=-r+.3+s/(e-1)*(2*r-.6),i=o.H*.5+.12*Math.sin(s*1.3),l=(c,u)=>{let f=Math.sin(c)*.36,d=(1-Math.cos(c))*.3;return o.p(a+d*.6,i+f*.25,u*.55)};for(let c=0;c<6;c++)for(let u=-2;u<2;u++){let f=-.9+c/6*1.8,d=-.9+(c+1)/6*1.8;o.m.quad(l(f,u/2),l(d,u/2),l(d,(u+1)/2),l(f,(u+1)/2),o.body,o.material,n(-1,0,0))}o.rod(l(-.9,0),l(.9,0),.006,s%3===1),o.hang([l(0,-.8),l(0,.8)])}}function cn(o){return o.p(0,o.H,0)[1]}function _a(o){let t=o.H-.05,n=o.W*.44;o.rod(o.p(-n,t,0),o.p(n,t,0),.03);for(let r=0;r<38;r++){let e=-n+.1+r/37*(2*n-.2),s=(o.rand()-.5)*.5,a=.7+o.rand()*.6,i=o.rand()*Se,l=[];for(let c=0;c<=5;c++){let u=c/5;l.push(o.p(e+.06*Math.sin(i+u*3),t-u*a,s+.05*Math.cos(i+u*2.4)))}o.curve(l,[.012,.011,.01,.009,.008,.007],4,!1,r%7===3)}o.hang([o.p(-n*.9,t,0),o.p(0,t,0),o.p(n*.9,t,0)])}function Ia(o,t){let n=o.H*.5;if(t==="spiral"){let r=[],e=[];for(let s=0;s<=140;s++){let a=s/140,i=a*Se*3,l=.12+1.15*a**1.3;r.push(o.p(Math.cos(i)*l*2,n-.3+a*.55,Math.sin(i)*l*.85)),e.push(.012+.04*a)}o.curve(r,e,6);for(let s=10;s<r.length;s+=13)o.bead(r[s],.05,!0,6);o.hang([r[20],r[80],r[139]]);return}o.bead(o.p(0,n,0),.16,!0,14);for(let r=0;r<5;r++){let e=.7+r*.5,s=Math.min(o.D*.45,.32+r*.2),a=Je(o,0,n,0,e,s,"uv",56,(r-2)*.12);o.curve(a,.014,4,!0),o.bead(a[r*11%56],.06+r%2*.02,r%2===0,8)}o.hang([o.p(0,n+.16,0),o.p(-2.6,n,0),o.p(2.6,n,0)])}var et=J([-.53,.6,.6]),te=Te(ft),Er=2.6,Ee={sun:[2.55,2.42,2.22],sky:[.78,.84,.94],ground:[.4,.39,.37],interior:[.5,.495,.48],panel:3.4,emit:3.4,fog:[.86,.89,.93],fogDensity:45e-5,exposure:.8,exposureInside:1.35,bloomThreshold:2.2,bloomStrength:.16,grain:.016},Mr=10,Wn=7,T={stoneFloor:k("#C3BDB2"),lobbyFloor:k("#CBC5BA"),graphite:k("#3A3D42"),graphiteDeep:k("#25272B"),travertine:k("#E6E0D5"),band:k("#E2DCD1"),plaster:k("#EFEEEB"),panel:k("#FFFFFF"),titanium:k("#A9AEB4"),fin:k("#57524C"),steel:k("#CDD2D7"),bronze:k("#9E8566"),blackGlass:k("#0B0D10"),paving:k("#B5AFA5"),plateau:k("#7C7D75"),water:k("#0A0C0F"),glass:k("#CFE0DC"),facadeGlass:k("#9DB0BF"),glassFloor:k("#E4EBEA"),leather:k("#1B1A19"),carpet:k("#1F2225"),foliage:k("#34503A"),foliageLight:k("#4A6A45"),bark:k("#4B3D31"),soil:k("#2A2622"),runner:k("#E3232C"),runnerInlay:k("#A8262B"),warm:k("#FFE2B8"),marble:k("#ECE9E3"),terrazzo:k("#D8D2C8"),darkCeiling:k("#17181B"),fabric:k("#1C1D20"),cushion:k("#2A2B2E"),porcelain:k("#F3F1EC"),brass:k("#B99B66")},w={stoneFloor:{gloss:.9,pattern:1},graphiteFloor:{gloss:.9,pattern:5},graphite:{gloss:.82,pattern:5},stoneWall:{gloss:.28,pattern:2},band:{gloss:.4,pattern:2},plaster:{gloss:.08,pattern:10},panel:{gloss:.1,emit:1},line:{gloss:.2,emit:.55},titanium:{gloss:.62,pattern:3},steel:{gloss:.94,pattern:4},bronze:{gloss:.6,pattern:9},blackGlass:{gloss:.96,pattern:13},paving:{gloss:.45,pattern:12},plateau:{gloss:.1,pattern:15},water:{gloss:.985,pattern:6},leather:{gloss:.55,pattern:7},carpet:{gloss:.05,pattern:8},foliage:{gloss:.3,pattern:11},bark:{gloss:.2,pattern:14},matte:{gloss:.15},paint:{gloss:.18,pattern:10},walnut:{gloss:.42,pattern:16},marble:{gloss:.88,pattern:1},terrazzo:{gloss:.78,pattern:17},terrazzoFloor:{gloss:.86,pattern:17},fabric:{gloss:.04,pattern:8},chrome:{gloss:.95,pattern:4},porcelain:{gloss:.7},polishedBrass:{gloss:.86,pattern:4}},Va={blackGlass:[k("#0E0F12"),{gloss:.3}],bronze:[T.bronze,{gloss:.38,pattern:9}],steel:[T.titanium,{gloss:.38,pattern:3}],travertine:[T.travertine,w.stoneWall],marble:[T.marble,{gloss:.45,pattern:1}],graphite:[T.graphite,{gloss:.32,pattern:5}],terrazzo:[T.terrazzo,{gloss:.4,pattern:17}]},Na={noir:[T.steel,w.chrome],chroma:[T.bronze,w.bronze],warm:[T.brass,w.polishedBrass],gallery:[T.porcelain,w.porcelain]};function Ca(o){return o.wallFinish==="walnut"?[k(o.wall),w.walnut]:o.wallFinish==="travertine"?[k(o.wall),w.stoneWall]:[k(o.wall),w.paint]}function Oa(o){return[...o].reduce((t,n)=>t*31+n.charCodeAt(0)>>>0,7)}function Da(o){let t=he[o]?.tier??"T01",[n,r,e]=k(pe[t]),s=a=>Math.min(1,a*.7+.3);return[s(n),s(r),s(e)]}function Ba(o){let t=o>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Tr(o,t,n,r,e,s,a,i){let l=J(Pe(n,t)),c=Math.abs(l[1])>.9?[1,0,0]:[0,1,0],u=J(ge(l,c)),f=ge(l,u),d=(h,m,p)=>{let b=[u[0]*Math.cos(p)+f[0]*Math.sin(p),u[1]*Math.cos(p)+f[1]*Math.sin(p),u[2]*Math.cos(p)+f[2]*Math.sin(p)];return[[h[0]+b[0]*m,h[1]+b[1]*m,h[2]+b[2]*m],b]};for(let h=0;h<s;h++){let m=h/s*Math.PI*2,p=(h+1)/s*Math.PI*2,[b,v]=d(t,r,m),[E,R]=d(t,r,p),[S]=d(n,e,m),[P]=d(n,e,p);o.vertex(b,v,a,i),o.vertex(S,v,a,i),o.vertex(P,R,a,i),o.vertex(b,v,a,i),o.vertex(P,R,a,i),o.vertex(E,R,a,i)}}function wr(){let o=new rt,t=new rt,n=new rt,r=[],e=[],s=[],a=[],i=[],l=[],c=[],u=[],f=Ba(7),d=(x,g)=>{let y=t.vertexCount;g();let F=t.vertexCount-y;F>0&&s.push({first:y,count:F,centre:x})},h=(x,g=0)=>({gloss:x,emit:g}),m=(x,g,y,F,L)=>{let[z,N,q,X]=L,M=(I,G,$,W)=>a.push(I,g,G,$,W,z,N,q,X,0);M(x-F,y-F,0,0),M(x+F,y-F,1,0),M(x+F,y+F,1,1),M(x-F,y-F,0,0),M(x+F,y+F,1,1),M(x-F,y+F,0,1)},p=(x,g,y,F,L)=>m(x,g+.012,y,F,[0,0,0,L]),b=(x,g,y,F,L,z)=>m(x,g+.014,y,F,[L[0]*z,L[1]*z,L[2]*z,0]),v=(x,g)=>{let y=x.map(L=>L[0]),F=x.map(L=>L[1]);for(let L=Math.floor(Math.min(...y)/3)*3+1.5;L<Math.max(...y);L+=3)for(let z=Math.floor(Math.min(...F)/3)*3+1.5;z<Math.max(...F);z+=3){if(![[L-1.05,z-1.05],[L+1.05,z-1.05],[L+1.05,z+1.05],[L-1.05,z+1.05]].every(M=>Eo(M,x)))continue;let X=.8;o.quad([L-X,g,z+X],[L+X,g,z+X],[L+X,g,z-X],[L-X,g,z-X],T.panel,w.panel,[0,-1,0])}},E=Be-re,R=(x,g,y)=>{if(!g){o.prism(x.poly,y,y,T.plaster,w.plaster,{top:!1,sides:!1}),v(x.poly,y-.012);return}let F=(X,M)=>Ve(x.id,X,M),L=[F(_,0),F(_,_),F(B,_),F(B,0)],z=[F(_,_),F(B,B),F(B,_)],N=en[g.mood],q=(X,M,I)=>{let[G,$]=F(X,M);o.annulus(G,$,.001,.065,y-.012,12,T.panel,{gloss:.1,emit:1.6}),o.annulus(G,$,.065,.11,y-.01,16,T.graphite,{...w.graphite,ao:I})};o.prism(z,y,y,T.darkCeiling,{...w.plaster,ao:mt},{top:!1,sides:!1});for(let[X,M]of[[_+5.6,_+2.4],[_+8.2,_+4.6],[_+8.4,_+1.6]])q(X,M,mt);if(On(g.mood))o.prism(L,y,y,T.plaster,{...w.plaster,ao:N},{top:!1,sides:!1}),v(L,y-.012);else{o.prism(L,y,y,T.darkCeiling,{...w.plaster,ao:N},{top:!1,sides:!1});for(let X of[_+2.1,_+7.3])for(let M of[1.4,3.8,6.2,8.6])q(X,M,N)}},S=(x,g,y,F,L,z,N)=>{let q=Math.hypot(g[0]-x[0],g[1]-x[1]),X=(g[0]-x[0])/q,M=(g[1]-x[1])/q,I=Math.max(8,Math.round(q/.11)),G=$=>{let W=$/I,O=W*Math.PI*2*(I/2),H=Math.sin(O)*L,Y=Math.cos(O)*L*Math.PI*2*(I/2)/q,ie=-M-X*Y,ne=X-M*Y,oe=Math.hypot(ie,ne);return[[x[0]+X*q*W-M*H,x[1]+M*q*W+X*H],[ie/oe,ne/oe]]};for(let $=0;$<I;$++){let[W,O]=G($),[H,Y]=G($+1),ie=[W[0],y,W[1]],ne=[H[0],y,H[1]],oe=[H[0],F,H[1]],ue=[W[0],F,W[1]];o.vertex(ie,[O[0],0,O[1]],z,N),o.vertex(ne,[Y[0],0,Y[1]],z,N),o.vertex(oe,[Y[0],0,Y[1]],z,N),o.vertex(ie,[O[0],0,O[1]],z,N),o.vertex(oe,[Y[0],0,Y[1]],z,N),o.vertex(ue,[O[0],0,O[1]],z,N)}},P=(x,g,y)=>{let F=ke(x.node),L=x.rooms,z=x.bay.id,N=(le,xe)=>Ve(z,le,xe),q=x.bay.inward,X=x.bay.along,M=k(F.accent),[I,G]=Ca(F),$=y+E,W=!On(F.mood),{stele:O,screen:H,partition:Y}=Ne,ie=en[F.mood],ne=le=>({...le,ao:ie}),oe=le=>({...le,ao:mt});o.wall(N(_+.2,.17),N(B-.02,.17),y,$,.04,I,ne(G));let ue=Y.l,ae=Y.thick/4;for(let[le,xe,_e]of[[_+.02,Y.d0,y],[Y.d1,B-.02,y],[Y.d0,Y.d1,y+2.75]])o.wall(N(le,ue-ae),N(xe,ue-ae),_e,$,2*ae,I,ne(G)),o.wall(N(le,ue+ae),N(xe,ue+ae),_e,$,2*ae,T.fabric,oe(w.fabric));let we=(Y.d0+Y.d1)/2;i.push({key:"theater:marquee",rect:ce(N(we,ue-2*ae-.02),y+3.15,Ae(-X[0],-X[1]),2.1,.41,0)});let[me,He]=Va[F.stele],K=O.d+O.thick/2;o.wall(N(K,O.l0),N(K,O.l1),y+.07,y+O.height,O.thick,me,ne(He)),o.wall(N(K,O.l0+.06),N(K,O.l1-.06),y,y+.07,O.thick-.12,T.graphiteDeep,ne(w.graphite));for(let le of[O.d+.055,O.d+O.thick-.055])o.wall(N(le,O.l0+.08),N(le,O.l1-.08),y+.012,y+.026,.008,M,w.line);o.wall(N(K,O.l0+.02),N(K,O.l1-.02),y+O.height,y+O.height+.012,O.thick-.04,M,w.line),$o(F.stele)&&o.wall(N(O.d-.002,O.l0+.08),N(O.d-.002,H.l0-.14),y+.14,y+O.height-.1,.004,k(tn[F.stele]),ne({gloss:.12}));let Fe=Ae(-q[0],-q[1]),je=H.l1-H.l0,It=je*3/4,yn=y+H.bottom+It/2;o.wall(N(O.d-.0075,H.l0-.05),N(O.d-.0075,H.l1+.05),yn-It/2-.05,yn+It/2+.05,.015,T.blackGlass,ne(w.blackGlass)),l.push({kind:"store",node:x.node,level:g,rect:ce(x.display,yn,Fe,je,It,0)});let it=L.lettering;c.push({key:`stele:${x.node}`,node:x.node,level:g,station:"model",rect:ce(it.at,y+it.bottom+it.height/2,it.facing,it.width,it.height,0)});let qn=N(O.d-1.5,5);b(qn[0],y,qn[1],2.1,W?M:T.warm,W?.15:.05);let ye=L.print,xn=y+ye.bottom+ye.height/2,Vt=le=>q[0]*le[0]+q[1]*le[1],Kr=Vt(ye.at)-ye.width/2,qr=Vt(ye.at)+ye.width/2;o.wall(N(Kr-.05,ue-2*ae-.035),N(qr+.05,ue-2*ae-.035),xn-ye.height/2-.05,xn+ye.height/2+.05,.07,T.panel,{gloss:.2,emit:.32}),l.push({kind:"print",node:x.node,level:g,rect:ce(ye.at,xn,ye.facing,ye.width,ye.height,0)}),c.push({key:`caption:${x.node}`,node:x.node,level:g,rect:ce(N(Vt(ye.at),ue-2*ae-.005),y+ye.bottom-.3,ye.facing,ye.width,ye.width/8,0)}),c.push({key:`lesson:${x.node}`,node:x.node,level:g,station:"lesson",rect:ce(x.panel.at,y+1.85,Ae(X[0],X[1]),4.3,2.5,0)});let lt=x.examples;c.push({key:`examples:${x.node}`,node:x.node,level:g,station:"examples",rect:ce(lt.at,y+lt.bottom+lt.height/2,lt.facing,lt.width,lt.height,0)});let[Nt,Ct]=x.holo.at;o.cylinder(Nt,Ct,.95,y,y+.18,40,T.steel,ne(w.steel)),o.annulus(Nt,Ct,.8,.86,y+.182,48,T.panel,w.line),o.annulus(Nt,Ct,.01,.76,y+.181,40,T.plaster,{gloss:.5,emit:W?.08:.18}),p(Nt,y,Ct,1.7,.22);let Qn=Vt(x.board.at),Zn=X[0]*x.board.at[0]+X[1]*x.board.at[1];o.wall(N(Qn-.023,Zn-x.board.width/2-.05),N(Qn-.023,Zn+x.board.width/2+.05),y+x.board.bottom-.05,y+x.board.bottom+x.board.height+.05,.024,T.titanium,ne(w.titanium)),l.push({kind:"board",node:x.node,level:g,rect:ce(x.board.at,y+x.board.bottom+x.board.height/2,x.board.facing,x.board.width,x.board.height,0)});let gt=L.bench,Ot=gt.depth/2,We=[gt.a[0]-q[0]*Ot,gt.a[1]-q[1]*Ot],ze=[gt.b[0]+q[0]*Ot,gt.b[1]+q[1]*Ot],[Qr,Zr]=W?[T.graphite,w.graphite]:[T.travertine,w.band];o.box([Math.min(We[0],ze[0])+.04,y,Math.min(We[1],ze[1])+.04],[Math.max(We[0],ze[0])-.04,y+.06,Math.max(We[1],ze[1])-.04],T.graphiteDeep,ne(w.graphite)),o.box([Math.min(We[0],ze[0]),y+.06,Math.min(We[1],ze[1])],[Math.max(We[0],ze[0]),y+.44,Math.max(We[1],ze[1])],Qr,ne(Zr)),p((We[0]+ze[0])/2,y,(We[1]+ze[1])/2,2.4,.14),o.prism(L.cinema.floor,y,y+.012,T.carpet,oe(w.carpet),{bottom:!1});let Dt=Math.SQRT1_2;o.wall(N(_+.5+.17*Dt,_+.5-.17*Dt),N(B-.4+.17*Dt,B-.4-.17*Dt),y,$,.04,T.fabric,oe(w.fabric)),S(L.cinema.curtain[0],L.cinema.curtain[1],y+.02,$-.04,.05,T.fabric,oe(w.fabric));let de=x.theater,En=ce(de.at,y+de.bottom+de.height/2,de.facing,de.width,de.height,0),Jn=[Math.sin(de.facing),-Math.cos(de.facing)],eo=[En.u[0],En.u[2]],ct=(le,xe)=>[de.at[0]+eo[0]*le+Jn[0]*xe,de.at[1]+eo[1]*le+Jn[1]*xe],ut=de.width/2,Bt=y+de.bottom+de.height;o.wall(ct(-ut-.16,-.035),ct(ut+.16,-.035),y+de.bottom-.16,Bt+.16,.04,T.blackGlass,oe({gloss:.45})),o.wall(ct(-ut-.1,-.012),ct(ut+.1,-.012),y+de.bottom-.27,y+de.bottom-.25,.02,T.warm,w.line),o.wall(ct(-ut-.1,-.012),ct(ut+.1,-.012),Bt+.25,Bt+.27,.02,T.warm,w.line),l.push({kind:"theater",node:x.node,level:g,rect:En}),i.push({key:"theater:marquee",rect:ce(de.at,Bt+.62,de.facing,3.4,.66,.02)});for(let le of de.seats){let[xe,_e]=le,Ut=Math.atan2(de.at[0]-xe,de.at[1]-_e);o.cylinder(xe,_e,.14,y,y+.24,10,T.steel,oe(w.steel),{caps:!1}),o.cylinder(xe,_e,.42,y+.24,y+.3,16,T.steel,oe(w.steel)),o.cylinder(xe,_e,.4,y+.3,y+.5,16,T.leather,oe(w.leather)),o.cylinder(xe,_e,.42,y+.3,y+1.1,10,T.leather,oe(w.leather),{arc:[Ut+Math.PI-1.3,Ut+Math.PI+1.3]}),o.cylinder(xe,_e,.36,y+.5,y+1,10,T.leather,oe(w.leather),{arc:[Ut+Math.PI-1.15,Ut+Math.PI+1.15],inward:!0}),p(xe,y+.012,_e,.75,.24)}for(let le=0;le<6;le++){let[xe,_e]=N(we-.6-le*.95,ue+.36);b(xe,y+.013,_e,.11,T.warm,.7)}let Ke=L.installation,[Jr,ea]=Na[F.mood];xr(n,F.installation,{at:Ke.at,bottom:y+Ke.bottom,top:y+Ke.top,along:Ke.along,inward:Ke.inward,span:Ke.span,depth:Ke.depth,ceiling:$},{body:Jr,material:ne(ea),glow:M,seed:Oa(x.node),light:ie}),b(Ke.at[0]+q[0]*.8,y,Ke.at[1]+q[1]*.8,2.4,M,W?.12:.04)},C={graphite:[T.graphite,w.graphiteFloor],pale:[T.stoneFloor,w.stoneFloor],terrazzo:[T.terrazzo,w.terrazzoFloor]};for(let x of he){let g=x.y,y=x.index,F=Da(y),L=new Set(x.stores.map(M=>M.bay.id)),z=n.vertexCount,N=o.vertexCount;for(let M of x.bays){let I=x.stores.find(O=>O.bay.id===M.id),G=I?ke(I.node):null,[$,W]=G?C[G.floor]:M.use==="lobby"?[T.lobbyFloor,w.stoneFloor]:[T.stoneFloor,w.stoneFloor];o.prism(M.poly,g-re,g,$,G?{...W,ao:en[G.mood]}:W,{bottom:!1}),R(M,G,g+E)}let q=[[[-D,D],[D,D],[_,_],[-_,_]],[[D,D],[D,-D],[_,-_],[_,_]],[[D,-D],[-D,-D],[-_,-_],[_,-_]],[[-D,-D],[-D,D],[-_,_],[-_,-_]]];for(let M of q)if(y===0)o.prism(M,g-re,g,T.stoneFloor,w.stoneFloor,{bottom:!1});else{let I=M.reduce(($,W)=>$+W[0],0)/4,G=M.reduce(($,W)=>$+W[1],0)/4;d([I,g,G],()=>{let $=ie=>[ie[0],g-.02,ie[1]],[W,O,H,Y]=M;W&&O&&H&&Y&&t.quad($(W),$(O),$(H),$(Y),T.glassFloor,h(.5),[0,1,0])})}for(let[M,I]of $a(D))o.wall(M,I,g-re-.05,g+.02,.18,T.band,w.band),y>0&&o.wall(Rr(M,I,.12),Rr(I,M,.12),g-re-.09,g-re-.05,.05,T.panel,w.line);o.box([-yt,g-.3,Ht-.15],[yt,g,D+.05],T.stoneFloor,w.stoneFloor);for(let M of[-1,1])for(let I of[-1,1])o.wall([M*_,I*_],[M*B,I*B],g,g+E,.3,T.travertine,w.stoneWall);o.wall([_,0],[B,0],g,g+E,.3,T.travertine,w.stoneWall),o.wall([0,-_],[0,-B],g,g+E,.3,T.travertine,w.stoneWall),o.wall([-_,0],[-B,0],g,g+E,.3,T.travertine,w.stoneWall);for(let[M,I,G]of un()){for(let H=0;H<4;H++){let Y=H/4,ie=(H+1)/4,ne=[M[0]+(I[0]-M[0])*Y,M[1]+(I[1]-M[1])*Y],oe=[M[0]+(I[0]-M[0])*ie,M[1]+(I[1]-M[1])*ie],ue=[];if(y===0&&G[1]===1){let ae=Math.min(ne[0],oe[0]),we=Math.max(ne[0],oe[0]);we<=-Ie||ae>=Ie?ue.push([ne,oe]):(ae<-Ie&&ue.push([[ae,B],[-Ie,B]]),we>Ie&&ue.push([[Ie,B],[we,B]]))}else ue.push([ne,oe]);for(let[ae,we]of ue)d([(ae[0]+we[0])/2,g+E/2,(ae[1]+we[1])/2],()=>t.pane(ae,we,g,g+E,T.facadeGlass,h(.34,.32)))}let $=[M[0]+G[0]*.31,M[1]+G[1]*.31],W=[I[0]+G[0]*.31,I[1]+G[1]*.31],O=(H,Y,ie)=>{let ne=Math.hypot(Y[0]-H[0],Y[1]-H[1]);return[H[0]-(Y[0]-H[0])/ne*ie,H[1]-(Y[1]-H[1])/ne*ie]};if(y>0){o.wall(O($,W,.31),O(W,$,.31),g-re-.18,g+.14,.62,T.band,w.band);let H=[M[0]+G[0]*.625,M[1]+G[1]*.625],Y=[I[0]+G[0]*.625,I[1]+G[1]*.625];o.wall(H,Y,g-re-.17,g-re-.13,.01,F,w.line)}}i.push({key:`levelno:${y}`,rect:ce([-13.5,B+.64],g+3.1,Math.PI,7.2,1.8,0)});for(let[M,I]of Ha())d([(M[0]+I[0])/2,g+.55,(M[1]+I[1])/2],()=>t.pane(M,I,g,g+1.1,T.glass,h(.1))),o.wall(M,I,g+1.06,g+1.12,.07,T.steel,w.titanium);let X=Math.asin(yt/be)+.05;d([0,g+Be/2,0],()=>{t.cylinder(0,0,be,g,g+2.7,26,T.glass,h(.08),{arc:[X,Math.PI*2-X]}),t.cylinder(0,0,be,g+2.7,g+Be,30,T.glass,h(.08),{caps:!1})}),o.cylinder(0,0,be+.06,g-re,g+.03,28,T.steel,w.steel,{caps:!1}),o.cylinder(0,0,be+.06,g+2.7,g+2.84,28,T.steel,w.steel,{caps:!1}),i.push({key:`level:${y}`,rect:ce([0,(D+_)/2],g+4.82,0,4.2,.86,.075)}),i.push({key:`level:${y}`,rect:ce([0,(D+_)/2],g+4.82,Math.PI,4.2,.86,.075)}),o.box([-2.16,g+4.36,(D+_)/2-.06],[2.16,g+5.28,(D+_)/2+.06],T.blackGlass,w.blackGlass);for(let M of[-1.7,1.7])o.box([M-.02,g+5.26,7.98],[M+.02,g+E,8.02],T.steel,w.steel);{let M=ce(Ge,g+1.95,xo,2.9,2.2,.17),I=[Ge[0]-M.u[0]*1.7,Ge[1]-M.u[2]*1.7],G=[Ge[0]+M.u[0]*1.7,Ge[1]+M.u[2]*1.7];o.wall(I,G,g,g+3.4,.3,T.travertine,w.stoneWall),o.wall([I[0]+M.u[0]*.05,I[1]+M.u[2]*.05],[G[0]-M.u[0]*.05,G[1]-M.u[2]*.05],g+3.33,g+3.37,.31,F,w.line),l.push({kind:"directory",level:y,rect:M}),p(Ge[0],g,Ge[1],2.4,.14);for(let $ of[-1,1])o.box([$*3.6-.05,g,16.2],[$*6.4+.05,g+.44,17],T.travertine,w.band),o.box([$*3.6,g+.44,16.25],[$*6.4,g+.47,16.95],T.graphite,w.graphite),p($*5,g,16.6,2,.12)}for(let M of x.stores){let I=M.bay.inward,G=Ae(-I[0],-I[1]),[$,W]=M.bay.front,O=M.bay.along,H=[M.door[0]-O[0]*xt,M.door[1]-O[1]*xt],Y=[M.door[0]+O[0]*xt,M.door[1]+O[1]*xt];d([($[0]+H[0])/2,g+2,($[1]+H[1])/2],()=>t.pane($,H,g,g+4,T.glass,h(.07))),d([(Y[0]+W[0])/2,g+2,(Y[1]+W[1])/2],()=>t.pane(Y,W,g,g+4,T.glass,h(.07))),o.wall($,W,g+4,g+E,.36,T.travertine,w.stoneWall);let ie=(K,Fe)=>[K[0]-O[0]*Fe,K[1]-O[1]*Fe];for(let[K,Fe]of[[H,1],[Y,-1]]){let je=ie(K,-Fe*.12);o.box([Math.min(K[0],je[0])-Math.abs(I[0])*.22,g,Math.min(K[1],je[1])-Math.abs(I[1])*.22],[Math.max(K[0],je[0])+Math.abs(I[0])*.22,g+4.06,Math.max(K[1],je[1])+Math.abs(I[1])*.22],T.steel,w.steel)}o.wall(ie(H,.12),ie(Y,-.12),g+3.98,g+4.1,.44,T.steel,w.steel);for(let K of[$,W])o.box([K[0]-.05,g,K[1]-.05],[K[0]+.05,g+4,K[1]+.05],T.titanium,w.titanium);let ne=K=>[K[0]-I[0]*.19,K[1]-I[1]*.19];o.wall(ne($),ne(W),g+4.32,g+4.35,.02,F,w.line),i.push({key:`store:${M.node}`,rect:ce(M.door,g+4.85,G,5.6,.95,.2)});let oe=K=>[K[0]+I[0]*.06,K[1]+I[1]*.06],ue=oe([($[0]+H[0])/2,($[1]+H[1])/2]),ae=oe([(Y[0]+W[0])/2,(Y[1]+W[1])/2]);c.push({key:`banner:${M.node}`,node:M.node,level:y,rect:ce(ue,g+2.05,G,2.2,3.1,0)}),l.push({kind:"window",node:M.node,level:y,rect:ce(ae,g+2.25,G,2.4,1.8,0)});let we=Ve(M.bay.id,_-.78,9.25),me=Ve(M.bay.id,_,9.25),He=Ve(M.bay.id,_-1.45,9.25);o.wall(me,He,g+3.84,g+3.89,.04,T.steel,w.steel),i.push({key:`blade:${M.node}`,rect:ce(we,g+3.45,Ae(O[0],O[1]),1.3,.62,.02)}),i.push({key:`blade:${M.node}`,rect:ce(we,g+3.45,Ae(-O[0],-O[1]),1.3,.62,.02)}),P(M,y,g),c.push({key:`medallion:${M.node}`,node:M.node,level:y,rect:An(M.medallion,g+.016,Ae(I[0],I[1]),2.3,2.3)});for(let K of Wt){let Fe=M.stations[K],je=[Fe.p[0]+Math.sin(Fe.heading)*.95,Fe.p[1]-Math.cos(Fe.heading)*.95];i.push({key:`station:${K}`,rect:An(je,g+.018,Fe.heading,1.3,.46)})}}for(let M of x.lounges)Ua(o,M,g,f,u);r.push({first:z,count:n.vertexCount-z}),e.push({first:N,count:o.vertexCount-N})}for(let x of[he[ft-1]])if(x){for(let g of x.bays)o.prism(g.poly,te-re,te,T.band,w.band,{bottom:!1});for(let g of[[[-D,D],[D,D],[_,_],[-_,_]],[[D,D],[D,-D],[_,-_],[_,_]],[[D,-D],[-D,-D],[-_,-_],[_,-_]],[[-D,-D],[-D,D],[-_,_],[-_,-_]]])o.prism(g,te-re,te,T.band,w.band,{bottom:!1}),o.prism(g,te-re,te-re,T.plaster,w.plaster,{top:!1,sides:!1})}d([0,te,0],()=>t.quad([-D,te,-D],[D,te,-D],[D,te,D],[-D,te,D],T.facadeGlass,h(.2,.08),[0,1,0]));for(let[x,g,y]of un()){let F=[x[0]+y[0]*.31,x[1]+y[1]*.31],L=[g[0]+y[0]*.31,g[1]+y[1]*.31],z=Math.hypot(L[0]-F[0],L[1]-F[1]),N=(L[0]-F[0])/z,q=(L[1]-F[1])/z;o.wall([F[0]-N*.31,F[1]-q*.31],[L[0]+N*.31,L[1]+q*.31],te-re-.18,te+1.1,.62,T.band,w.band);let X=[x[0]+y[0]*.625,x[1]+y[1]*.625],M=[g[0]+y[0]*.625,g[1]+y[1]*.625];o.wall(X,M,te-re-.17,te-re-.13,.01,T.panel,w.line);let I=W=>[W[0]-y[0]*1.2,W[1]-y[1]*1.2];o.wall(I(x),I(g),te,te+Er,.4,T.band,w.band);let G=[(I(x)[0]+I(g)[0])/2,(I(x)[1]+I(g)[1])/2];i.push({key:"crown",rect:ce(G,te+Er/2+.1,Ae(y[0],y[1]),22,1.75,.21)});let $=W=>[W[0]+y[0]*.205,W[1]+y[1]*.205];o.wall($(I(x)),$(I(g)),te+.22,te+.26,.01,T.runner,w.line)}d([0,te+2,0],()=>t.cylinder(0,0,be,te,te+3.4,30,T.glass,h(.1),{caps:!1})),o.cylinder(0,0,be+.08,te+3.4,te+3.62,36,T.steel,w.steel);{let g=te+1.1;for(let[y,F,L]of un()){let z=Math.hypot(F[0]-y[0],F[1]-y[1]),N=(F[0]-y[0])/z,q=(F[1]-y[1])/z;for(let X=1;X<Math.round(z/2.5);X++){let M=[y[0]+N*X*2.5,y[1]+q*X*2.5],I=L[1]===1&&Math.abs(M[0])<=Ie+.7?4.32:-.02,G=[M[0]+L[0]*.02,M[1]+L[1]*.02],$=[M[0]+L[0]*.62,M[1]+L[1]*.62];o.wall(G,$,I,g,.14,T.fin,w.titanium)}}for(let y of[-1,1])for(let F of[-1,1])o.box([y*B-.45+y*.17,-.02,F*B-.45+F*.17],[y*B+.45+y*.17,g+.02,F*B+.45+F*.17],T.band,w.band);for(let[y,F,L]of un()){let z=[y[0]+L[0]*.31,y[1]+L[1]*.31],N=[F[0]+L[0]*.31,F[1]+L[1]*.31];L[1]===1?(o.wall(z,[-Ie-.7,z[1]],-.02,.32,.62,T.graphite,w.graphite),o.wall([Ie+.7,N[1]],N,-.02,.32,.62,T.graphite,w.graphite)):o.wall(z,N,-.02,.32,.62,T.graphite,w.graphite)}}{o.box([-4.4,4.06,B+.1],[4.4,4.32,B+3.6],T.steel,w.steel),o.quad([-4.2,4.055,B+3.4],[4.2,4.055,B+3.4],[4.2,4.055,B+.3],[-4.2,4.055,B+.3],T.panel,{gloss:.1,emit:.55},[0,-1,0]);for(let x of[-1,1])o.box([x*(Ie+.36)-.34,-.02,B-.1],[x*(Ie+.36)+.34,4.06,B+.75],T.band,w.band);i.push({key:"entrance",rect:ce([0,B+.12],4.95,Math.PI,7.6,1.3,.05)}),p(0,0,B+2.2,4.2,.1)}o.annulus(0,0,.01,54,-.02,120,T.paving,w.paving);for(let x of[29,38,47])o.annulus(0,0,x-.3,x+.3,-.015,160,T.graphite,w.graphite);o.cylinder(0,0,55,-.5,.04,120,T.graphite,w.graphite,{caps:!1}),o.annulus(0,0,54,55,.04,120,T.graphite,w.graphite),o.cylinder(0,0,54,-.5,.04,120,T.graphite,w.graphite,{caps:!1,inward:!0}),o.annulus(0,0,55,96,-.12,160,T.water,w.water),o.cylinder(0,0,96,-.12,-.02,160,T.graphite,w.graphite,{caps:!1,inward:!0}),o.annulus(0,0,96,97.2,-.02,160,T.graphite,w.graphite),o.annulus(0,0,97.2,2400,-.04,160,T.plateau,w.plateau);for(let x of[-1,1]){let g=x*9.5,y=B+12;o.cylinder(g,y,2.7,-.02,.32,56,T.steel,w.steel),o.annulus(g,y,2.45,2.7,.32,64,T.steel,w.steel),o.annulus(g,y,.01,2.45,.3,56,T.soil,w.matte),o.annulus(g,y,2.72,2.78,.004,64,T.panel,w.line),Fr(o,g,.3,y,1.45,x>0?.6:2.4)}o.quad([-.035,0,B+3.7],[.035,0,B+3.7],[.035,0,44],[-.035,0,44],T.runnerInlay,{gloss:.8},[0,1,0]);for(let x=0;x<260;x++){let g=f()*Math.PI*2,y=be+.5+f()*(D-be-.9);u.push(Math.sin(g)*y,f()*te,Math.cos(g)*y,.01+f()*.018,f(),te,.04+f()*.08)}let U=new rt;return U.cylinder(0,0,be-.12,-.18,.01,40,T.graphite,w.graphiteFloor),U.annulus(0,0,be-.32,be-.26,.015,48,T.panel,w.line),U.cylinder(0,0,be-.12,2.58,2.66,40,T.steel,w.steel),U.annulus(0,0,.3,.55,2.575,32,T.panel,w.panel),{opaque:o.toArray(),glass:t.toArray(),glassPieces:s,decals:new Float32Array(a),signs:i,screens:l,overlays:c,bubbles:new Float32Array(u),cab:U.toArray(),detail:n.toArray(),detailLevels:r,opaqueLevels:e}}function Fr(o,t,n,r,e,s){let a=(u,f,d)=>[t+(u*Math.cos(s)-d*Math.sin(s))*e,n+f*e,r+(u*Math.sin(s)+d*Math.cos(s))*e],i=[a(0,0,0),a(.32,.68,.08),a(-.22,1.38,-.06),a(.18,2.03,.05),a(-.05,2.53,0)],l=[.21,.15,.11,.075,.045];for(let u=1;u<i.length;u++){let f=i[u-1],d=i[u];f&&d&&Tr(o,f,d,(l[u-1]??.05)*e,(l[u]??.04)*e,10,T.bark,w.bark)}let c=[[a(.32,.68,.08),a(1.1,.98,.3),.85],[a(-.22,1.38,-.06),a(-1.05,1.58,-.35),.8],[a(.18,2.03,.05),a(.85,2.23,-.4),.7],[a(-.05,2.53,0),a(-.05,2.78,.05),.75],[a(-.22,1.38,-.06),a(-.2,1.58,.75),.6]];for(let[u,f,d]of c)Tr(o,u,f,.05*e,.03*e,6,T.bark,w.bark),o.sphere(f,d*e,12,T.foliage,w.foliage,.32),o.sphere([f[0]+d*e*.3,f[1]+d*e*.16,f[2]-d*e*.2],d*e*.62,10,T.foliageLight,w.foliage,.36)}function Ua(o,t,n,r,e){let[s,a]=Ve(t.id,15,6);o.cylinder(s,a,1.55,n,n+.5,40,T.graphiteDeep,w.graphite),o.annulus(s,a,1.42,1.55,n+.5,48,T.steel,w.steel),o.annulus(s,a,.01,1.42,n+.47,40,T.soil,w.matte),o.annulus(s,a,1.56,1.6,n+.006,48,T.panel,w.line),Fr(o,s,n+.47,a,1,r()*Math.PI*2);let[i,l]=Ve(t.id,13,11);o.cylinder(i,l,1.9,n,n+.34,40,T.graphiteDeep,w.graphite,{caps:!1}),o.annulus(i,l,1.78,1.9,n+.34,48,T.graphite,w.graphite),o.annulus(i,l,.01,1.78,n+.33,48,T.water,w.water);let c=Ve(t.id,17.2,2.5),u=Ve(t.id,17.2,6.5);o.box([Math.min(c[0],u[0])-.36,n,Math.min(c[1],u[1])-.36],[Math.max(c[0],u[0])+.36,n+.44,Math.max(c[1],u[1])+.36],T.travertine,w.band);for(let f=0;f<24;f++)e.push(s+(r()-.5)*5,n+r()*4,a+(r()-.5)*5,.008+r()*.012,r(),5.2,.03+r()*.05)}function un(){let o=B;return[[[-o,o],[o,o],[0,1]],[[o,o],[o,-o],[1,0]],[[o,-o],[-o,-o],[0,-1]],[[-o,-o],[-o,o],[-1,0]]]}function $a(o){return[[[-o,o],[o,o]],[[o,o],[o,-o]],[[o,-o],[-o,-o]],[[-o,-o],[-o,o]]]}function Rr(o,t,n){let r=Math.hypot(t[0]-o[0],t[1]-o[1]);return[o[0]+(t[0]-o[0])/r*n,o[1]+(t[1]-o[1])/r*n]}function Ha(){let o=D,t=yt;return[[[-o,o],[-t,o]],[[t,o],[o,o]],[[o,o],[o,-o]],[[o,-o],[-o,-o]],[[-o,-o],[-o,o]],[[-t,Ht],[-t,o]],[[t,Ht],[t,o]]]}var Wa=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),za=[.89,.137,.173],Ga=[.55,.64,.73],ka=[.77,.525,0];function fe(o,t,n,r,e=0){let s=d=>d.replace(`#version 300 es
`,`#version 300 es
#define Q ${e}
`),a=(d,h)=>{let m=o.createShader(d);if(!m)throw new Error(`${r}: cannot create shader`);if(o.shaderSource(m,s(h)),o.compileShader(m),!o.getShaderParameter(m,o.COMPILE_STATUS))throw new Error(`${r}: ${o.getShaderInfoLog(m)??"compile failed"}`);return m},i=o.createProgram();if(!i)throw new Error(`${r}: cannot create program`);let l=a(o.VERTEX_SHADER,t),c=a(o.FRAGMENT_SHADER,n);if(o.attachShader(i,l),o.attachShader(i,c),o.linkProgram(i),!o.getProgramParameter(i,o.LINK_STATUS))throw new Error(`${r}: ${o.getProgramInfoLog(i)??"link failed"}`);o.deleteShader(l),o.deleteShader(c);let u=new Map,f=o.getProgramParameter(i,o.ACTIVE_UNIFORMS);for(let d=0;d<f;d++){let h=o.getActiveUniform(i,d);h&&u.set(h.name,o.getUniformLocation(i,h.name))}return{p:i,u}}function Xa(o,t){let n=r=>{let e=r*t;return Math.min(1,Math.max(0,e*(2.51*e+.03)/(e*(2.43*e+.59)+.14)))**.45454545454545453};return[n(o[0]),n(o[1]),n(o[2])]}var dn=class o{gl;tier;prog;post=null;vaos;counts={opaque:0,cab:0,decal:0,signs:0,bubbles:0,detail:0};overlayNormals;world;skyTex=null;skyLod=6;atlasTex=null;black;shadowTex=null;shadowMat=new Float32Array(16);shadowTexel=1/2048;shadowBias=2e-4;screenTex=new Map;ribbonCount=0;ribbonLength=0;ribbonBuf;flatBuf;signBuf;leaderBuf;reticleBuf;shell=null;beam=null;holoGpu=new Map;order;dist;scene=null;hdr=null;mirror=null;bloom=[];samples=4;mirrorVP=new Float32Array(16);mirrorInv=new Float32Array(16);reflect=new Float32Array(16);constructor(t,n,r){this.gl=t,this.world=n,this.tier=r,this.prog=this.programs(r==="cinematic"?1:0),r==="cinematic"&&(this.post=this.postPrograms());let e=i=>this.vao(i,[3,3,3,4]);this.counts.opaque=n.opaque.length/St,this.counts.cab=n.cab.length/St,this.counts.decal=n.decals.length/Mr,this.counts.bubbles=n.bubbles.length/Wn,this.counts.detail=n.detail.length/St;let s=new Float32Array(n.screens.length*30);n.screens.forEach((i,l)=>s.set(Kt(i.rect),l*30));let a=new Float32Array(n.overlays.length*30);n.overlays.forEach((i,l)=>a.set(Kt(i.rect),l*30)),this.signBuf=t.createBuffer(),this.ribbonBuf=t.createBuffer(),this.flatBuf=t.createBuffer(),this.leaderBuf=t.createBuffer(),this.reticleBuf=t.createBuffer(),this.vaos={opaque:e(n.opaque),glass:e(n.glass),cab:e(n.cab),detail:e(n.detail),decal:this.vao(n.decals,[3,2,4,1]),full:this.vao(new Float32Array([-1,-1,3,-1,-1,3]),[2]),signs:this.vaoFor(this.signBuf,[3,2]),screens:this.vao(s,[3,2]),overlays:this.vao(a,[3,2]),bubbles:this.bubbleVao(n.bubbles),ribbon:this.vaoFor(this.ribbonBuf,[3,2]),flat:this.vaoFor(this.flatBuf,[3]),leaders:this.vaoFor(this.leaderBuf,[3]),reticles:this.vaoFor(this.reticleBuf,[3,3])},this.overlayNormals=n.overlays.map(i=>ht(i.rect)),this.order=n.glassPieces.map((i,l)=>l),this.dist=new Float32Array(n.glassPieces.length),this.black=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.black),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),this.makeSky(),this.makeShadows()}programs(t){let n=this.gl;return{lit:fe(n,an,Hn,"lit",t),litClip:t===1?fe(n,an,ko,"lit (mirror)",t):null,glass:fe(n,an,Xo,"glass",t),sky:fe(n,Ze,Yo,"sky",t),tex:fe(n,Qo,Zo,"textured",t),decal:fe(n,Jo,er,"decal",t),mote:fe(n,tr,nr,"motes",t),ribbon:fe(n,or,rr,"ribbon",t),flat:fe(n,ar,sr,"flat",t),shell:fe(n,sn,ir,"hologram shell",t),organ:fe(n,sn,lr,"hologram organs",t),line:fe(n,ur,dr,"hologram lines",t),reticle:fe(n,fr,hr,"hologram targets",t),beam:fe(n,sn,cr,"hologram beam",t),dim:fe(n,Ze,mr,"house lights",t)}}postPrograms(){let t=this.gl;return{pre:fe(t,Ze,pr,"bloom"),down:fe(t,Ze,br,"bloom down"),up:fe(t,Ze,vr,"bloom up"),composite:fe(t,Ze,gr,"composite")}}setTier(t){if(t===this.tier||t==="cinematic")return;let n=this.gl,r=this.prog;this.prog=this.programs(0);for(let e of Object.values(r))n.deleteProgram(e.p);if(this.post)for(let e of Object.values(this.post))n.deleteProgram(e.p);this.post=null,this.freeTargets(),this.tier="basic"}vao(t,n){let r=this.gl,e=r.createBuffer();return r.bindBuffer(r.ARRAY_BUFFER,e),r.bufferData(r.ARRAY_BUFFER,t,r.STATIC_DRAW),this.vaoFor(e,n)}vaoFor(t,n){let r=this.gl,e=r.createVertexArray();r.bindVertexArray(e),r.bindBuffer(r.ARRAY_BUFFER,t);let s=n.reduce((i,l)=>i+l,0)*4,a=0;return n.forEach((i,l)=>{r.enableVertexAttribArray(l),r.vertexAttribPointer(l,i,r.FLOAT,!1,s,a),a+=i*4}),r.bindVertexArray(null),e}bubbleVao(t){let n=this.gl,r=n.createVertexArray();n.bindVertexArray(r);let e=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,e),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0);let s=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,s),n.bufferData(n.ARRAY_BUFFER,t,n.STATIC_DRAW);let a=Wn*4;return n.enableVertexAttribArray(1),n.vertexAttribPointer(1,3,n.FLOAT,!1,a,0),n.vertexAttribDivisor(1,1),n.enableVertexAttribArray(2),n.vertexAttribPointer(2,4,n.FLOAT,!1,a,12),n.vertexAttribDivisor(2,1),n.bindVertexArray(null),r}makeSky(){let t=this.gl,n=this.tier==="cinematic",r=2048,e=r/2,s=t.createTexture();t.bindTexture(t.TEXTURE_2D,s),n?t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,r,e,0,t.RGBA,t.HALF_FLOAT,null):t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,r,e,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);let a=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,a),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,s,0);let i=fe(t,Ze,jo,"skygen");t.viewport(0,0,r,e),t.disable(t.DEPTH_TEST),t.disable(t.BLEND),t.useProgram(i.p),t.uniform3f(i.u.get("uSun")??null,et[0],et[1],et[2]),t.bindVertexArray(this.vaos.full),t.drawArrays(t.TRIANGLES,0,3),t.bindVertexArray(null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteFramebuffer(a),t.deleteProgram(i.p),t.bindTexture(t.TEXTURE_2D,s),t.generateMipmap(t.TEXTURE_2D),this.skyTex=s,this.skyLod=Math.log2(r)-3}makeShadows(){let t=this.gl,n=t.getParameter(t.MAX_TEXTURE_SIZE),r=this.tier==="cinematic"&&n>=4096?3072:2048,e=t.createTexture();t.bindTexture(t.TEXTURE_2D,e),t.texStorage2D(t.TEXTURE_2D,1,t.DEPTH_COMPONENT24,r,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_COMPARE_FUNC,t.LEQUAL);let s=t.createFramebuffer();if(t.bindFramebuffer(t.FRAMEBUFFER,s),t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,e,0),t.drawBuffers([t.NONE]),t.readBuffer(t.NONE),t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE){t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteFramebuffer(s),t.deleteTexture(e);return}let a=new Float32Array(16),i=[0,18,0];Xt(a,[i[0]+et[0]*200,i[1]+et[1]*200,i[2]+et[2]*200],i);let l=1/0,c=-1/0,u=1/0,f=-1/0,d=1/0,h=-1/0;for(let b of[-82,82])for(let v of[-1.5,48])for(let E of[-82,82]){let R=(a[0]??0)*b+(a[4]??0)*v+(a[8]??0)*E+(a[12]??0),S=(a[1]??0)*b+(a[5]??0)*v+(a[9]??0)*E+(a[13]??0),P=(a[2]??0)*b+(a[6]??0)*v+(a[10]??0)*E+(a[14]??0);l=Math.min(l,R),c=Math.max(c,R),u=Math.min(u,S),f=Math.max(f,S),d=Math.min(d,P),h=Math.max(h,P)}let m=new Float32Array(16);Po(m,l,c,u,f,-h-5,-d+5),Ft(this.shadowMat,m,a);let p=fe(t,Ko,qo,"shadow");t.viewport(0,0,r,r),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.depthMask(!0),t.disable(t.BLEND),t.clear(t.DEPTH_BUFFER_BIT),t.useProgram(p.p),t.uniformMatrix4fv(p.u.get("uViewProj")??null,!1,this.shadowMat),t.bindVertexArray(this.vaos.opaque),t.enable(t.POLYGON_OFFSET_FILL),t.polygonOffset(1.5,3),t.drawArrays(t.TRIANGLES,0,this.counts.opaque),t.bindVertexArray(this.vaos.detail),t.drawArrays(t.TRIANGLES,0,this.counts.detail),t.disable(t.POLYGON_OFFSET_FILL),t.bindVertexArray(null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteFramebuffer(s),t.deleteProgram(p.p),this.shadowTex=e,this.shadowTexel=1/r,this.shadowBias=.05/(h-d+10)}setAtlas(t){let n=this.gl,r=n.createTexture();n.bindTexture(n.TEXTURE_2D,r),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t.canvas),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.generateMipmap(n.TEXTURE_2D),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),this.atlasTex=r;let e=[];for(let s of this.world.signs){let a=t.rects.get(s.key);if(!a)continue;let i=Kt(s.rect);for(let l=0;l<6;l++){let c=l*5,u=i[c+3]??0,f=i[c+4]??0;e.push(i[c]??0,i[c+1]??0,i[c+2]??0,a.u0+(a.u1-a.u0)*u,a.v0+(a.v1-a.v0)*f)}}n.bindBuffer(n.ARRAY_BUFFER,this.signBuf),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e),n.STATIC_DRAW),this.counts.signs=e.length/5}static screenKey(t){return t.kind==="directory"?`directory:${t.level}`:t.kind==="window"?`store:${t.node??""}`:`${t.kind}:${t.node??""}`}screenGrade(t){return this.screenTex.get(t)?.grade??0}setScreenImage(t,n,r,e,s=!1){let a=this.gl,i=this.screenTex.get(t);if(i&&i.grade>r)return;let l=i?.tex&&i.grade!==4?i.tex:a.createTexture();a.bindTexture(a.TEXTURE_2D,l),s&&a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,n),s&&a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e&&a.generateMipmap(a.TEXTURE_2D),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,e?a.LINEAR_MIPMAP_LINEAR:a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),this.screenTex.set(t,{tex:l,grade:r,lastUsed:performance.now()})}setScreenTexture(t,n,r=null){let e=this.screenTex.get(t)??null;return n?this.screenTex.set(t,{tex:n,grade:4,lastUsed:performance.now()}):r?this.screenTex.set(t,r):this.screenTex.delete(t),e}evict(t){for(let[n,r]of this.screenTex)r.grade!==3||t(n)||(this.gl.deleteTexture(r.tex),this.screenTex.delete(n));for(let[n,r]of this.holoGpu)t(`holo:${n}`)||(this.freeHolo(r),this.holoGpu.delete(n))}setRibbon(t){let n=this.gl;if(!t||t.length<2){this.ribbonCount=0;return}let r=.26,e=[],s=0;for(let a=1;a<t.length;a++){let i=t[a-1],l=t[a];if(!i||!l)continue;let c=l[0]-i[0],u=l[2]-i[2],f=Math.hypot(c,u);if(f<.001)continue;let d=-u/f*r,h=c/f*r,m=(p,b,v)=>e.push(p[0]+d*b,p[1]+.03,p[2]+h*b,v,b);m(i,-1,s),m(l,-1,s+f),m(l,1,s+f),m(i,-1,s),m(l,1,s+f),m(i,1,s),s+=f}n.bindBuffer(n.ARRAY_BUFFER,this.ribbonBuf),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e),n.DYNAMIC_DRAW),this.ribbonCount=e.length/5,this.ribbonLength=s}draw(t,n,r){if(this.tier==="cinematic"){try{if(this.drawCinematic(t,n,r))return}catch(s){console.warn("XI Outlet: the cinematic renderer failed; using the basic one",s)}this.setTier("basic")}let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,null),this.drawScene(t,{viewProj:t.viewProj,invViewProj:t.invViewProj,eye:t.eye,mirror:!1,clipY:0,w:n,h:r},!0)}drawCinematic(t,n,r){let e=this.gl;if(!this.ensureTargets(n,r))return!1;let s=this.scene,a=this.hdr,i=this.post;if(!s||!a||!i)return!1;if(t.mirrorY!==null&&this.mirror){let d=t.mirrorY,h=this.reflect;h.set([1,0,0,0,0,-1,0,0,0,0,1,0,0,2*d,0,1]),Ft(this.mirrorVP,t.viewProj,h),Yt(this.mirrorInv,this.mirrorVP),e.bindFramebuffer(e.FRAMEBUFFER,this.mirror.fbo),this.drawScene(t,{viewProj:this.mirrorVP,invViewProj:this.mirrorInv,eye:[t.eye[0],2*d-t.eye[1],t.eye[2]],mirror:!0,clipY:d,w:this.mirror.w,h:this.mirror.h},!1)}e.bindFramebuffer(e.FRAMEBUFFER,s.fbo),this.drawScene(t,{viewProj:t.viewProj,invViewProj:t.invViewProj,eye:t.eye,mirror:!1,clipY:0,w:n,h:r},!1),e.bindFramebuffer(e.READ_FRAMEBUFFER,s.fbo),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,a.fbo),e.blitFramebuffer(0,0,n,r,0,0,n,r,e.COLOR_BUFFER_BIT,e.NEAREST),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.disable(e.DEPTH_TEST),e.disable(e.BLEND),e.depthMask(!1),e.bindVertexArray(this.vaos.full),e.activeTexture(e.TEXTURE0);let l=(d,h,m)=>{e.bindFramebuffer(e.FRAMEBUFFER,m.fbo),e.viewport(0,0,m.w,m.h),e.useProgram(d.p),e.bindTexture(e.TEXTURE_2D,h.tex),e.uniform1i(d.u.get("uTex")??null,0),e.uniform2f(d.u.get("uTexel")??null,1/h.w,1/h.h),e.drawArrays(e.TRIANGLES,0,3)},c=this.bloom,u=c[0];if(u){e.useProgram(i.pre.p),e.uniform1f(i.pre.u.get("uThreshold")??null,Ee.bloomThreshold),l(i.pre,a,u);for(let d=1;d<c.length;d++){let h=c[d-1],m=c[d];h&&m&&l(i.down,h,m)}e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE);for(let d=c.length-1;d>0;d--){let h=c[d],m=c[d-1];h&&m&&l(i.up,h,m)}e.disable(e.BLEND)}e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,n,r);let f=i.composite;return e.useProgram(f.p),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,a.tex),e.uniform1i(f.u.get("uScene")??null,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,u?.tex??this.black),e.uniform1i(f.u.get("uBloom")??null,1),e.activeTexture(e.TEXTURE0),e.uniform1f(f.u.get("uBloomStrength")??null,u?Ee.bloomStrength:0),e.uniform1f(f.u.get("uExposure")??null,t.exposure),e.uniform1f(f.u.get("uGrain")??null,Ee.grain),e.uniform1f(f.u.get("uTime")??null,t.time),e.drawArrays(e.TRIANGLES,0,3),e.bindVertexArray(null),e.depthMask(!0),!0}ensureTargets(t,n){if(this.scene&&this.scene.w===t&&this.scene.h===n)return!0;this.freeTargets();let r=this.gl;if(!r.getExtension("EXT_color_buffer_float"))return!1;let e=r.getInternalformatParameter(r.RENDERBUFFER,r.RGBA16F,r.SAMPLES);this.samples=Math.min(4,e&&e.length>0?e[0]??0:0);let s=(c,u)=>{let f=r.createTexture();return r.bindTexture(r.TEXTURE_2D,f),r.texImage2D(r.TEXTURE_2D,0,r.RGBA16F,c,u,0,r.RGBA,r.HALF_FLOAT,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),f},a=()=>r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;{let c=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,c);let u=r.createRenderbuffer();r.bindRenderbuffer(r.RENDERBUFFER,u),this.samples>0?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,r.RGBA16F,t,n):r.renderbufferStorage(r.RENDERBUFFER,r.RGBA16F,t,n),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,u);let f=r.createRenderbuffer();r.bindRenderbuffer(r.RENDERBUFFER,f),this.samples>0?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,r.DEPTH_COMPONENT24,t,n):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT24,t,n),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,f);let d=[u,f].filter(h=>h!==null);if(this.scene={fbo:c,tex:null,rbs:d,w:t,h:n},!a())return this.failTargets()}{let c=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,c);let u=s(t,n);if(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,u,0),this.hdr={fbo:c,tex:u,rbs:[],w:t,h:n},!a())return this.failTargets()}{let c=Math.max(1,Math.round(t/2)),u=Math.max(1,Math.round(n/2)),f=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,f);let d=s(c,u);r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,d,0);let h=r.createRenderbuffer();if(r.bindRenderbuffer(r.RENDERBUFFER,h),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT24,c,u),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,h),this.mirror={fbo:f,tex:d,rbs:h?[h]:[],w:c,h:u},!a())return this.failTargets()}let i=t,l=n;for(let c=0;c<5;c++){i=Math.max(1,Math.round(i/2)),l=Math.max(1,Math.round(l/2));let u=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,u);let f=s(i,l);if(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,f,0),this.bloom.push({fbo:u,tex:f,rbs:[],w:i,h:l}),!a())return this.failTargets()}return r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindRenderbuffer(r.RENDERBUFFER,null),!0}failTargets(){return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.freeTargets(),!1}freeTargets(){let t=this.gl;for(let n of[this.scene,this.hdr,this.mirror,...this.bloom])if(n){t.deleteFramebuffer(n.fbo),t.deleteTexture(n.tex);for(let r of n.rbs)t.deleteRenderbuffer(r)}this.scene=null,this.hdr=null,this.mirror=null,this.bloom=[]}drawScene(t,n,r){let e=this.gl,s=this.prog;e.viewport(0,0,n.w,n.h),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.disable(e.CULL_FACE),e.disable(e.BLEND),e.depthMask(!0);let a=!n.mirror&&!r&&t.mirrorY!==null&&this.mirror!==null,i=Xa(Ee.fog,t.exposure);e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.skyTex),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.shadowTex),e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,a?this.mirror?.tex??this.black:this.black),e.activeTexture(e.TEXTURE0);let l=m=>{e.useProgram(m.p);let p=(S,P)=>{let C=m.u.get(S);C&&e.uniform1f(C,P)},b=(S,P)=>{let C=m.u.get(S);C&&e.uniform3f(C,P[0]??0,P[1]??0,P[2]??0)};e.uniformMatrix4fv(m.u.get("uViewProj")??null,!1,n.viewProj),b("uCamPos",n.eye),b("uSun",et),b("uSunColor",Ee.sun),b("uSkyAmb",Ee.sky),b("uGroundAmb",Ee.ground),b("uInterior",Ee.interior),p("uPanel",Ee.panel),p("uEmitGain",Ee.emit),b("uFog",Ee.fog),b("uFogDisplay",i),p("uFogDensity",Ee.fogDensity),p("uTime",t.time),p("uDirect",r?1:0),p("uExposure",t.exposure),p("uSkyLod",this.skyLod),p("uClip",n.mirror?1:0),p("uClipY",n.clipY),p("uMirrorOn",a?1:0),p("uMirrorY",t.mirrorY??-1e3);let v=m.u.get("uViewport");v&&e.uniform2f(v,n.w,n.h),p("uShadowOn",this.shadowTex?1:0),p("uShadowTexel",this.shadowTexel),p("uShadowBias",this.shadowBias);let E=m.u.get("uShadowMat");E&&e.uniformMatrix4fv(E,!1,this.shadowMat);let R=(S,P)=>{let C=m.u.get(S);C&&e.uniform1i(C,P)};R("uSky",1),R("uShadow",2),R("uMirror",3)},c=n.mirror?s.litClip??s.lit:s.lit;l(c),e.uniform3f(c.u.get("uOffset")??null,0,0,0),e.bindVertexArray(this.vaos.opaque);let u=t.level===null?void 0:this.world.opaqueLevels[t.level];if(u&&u.count>0){e.drawArrays(e.TRIANGLES,u.first,u.count),u.first>0&&e.drawArrays(e.TRIANGLES,0,u.first);let m=u.first+u.count;m<this.counts.opaque&&e.drawArrays(e.TRIANGLES,m,this.counts.opaque-m)}else e.drawArrays(e.TRIANGLES,0,this.counts.opaque);e.uniform3f(c.u.get("uOffset")??null,0,t.cabY,0),e.bindVertexArray(this.vaos.cab),e.drawArrays(e.TRIANGLES,0,this.counts.cab);let f=t.level===null?void 0:this.world.detailLevels[t.level];f&&f.count>0&&(e.uniform3f(c.u.get("uOffset")??null,0,0,0),e.bindVertexArray(this.vaos.detail),e.drawArrays(e.TRIANGLES,f.first,f.count)),l(s.tex),e.uniform1i(s.tex.u.get("uTex")??null,0),e.bindVertexArray(this.vaos.screens);let d=performance.now();this.world.screens.forEach((m,p)=>{let b=o.screenKey(m),v=this.screenTex.get(b);v&&(v.lastUsed=d);let E=m.kind==="store"||m.kind==="directory",R=m.kind==="board";e.uniform1i(s.tex.u.get("uMode")??null,E?1:2),e.uniform1f(s.tex.u.get("uHasTex")??null,v?.tex?1:0),e.uniform1f(s.tex.u.get("uFlip")??null,v?.grade===4?1:0);let S=R?[.97,.97,.96]:m.kind==="directory"?[.05,.06,.08]:[.03,.04,.05];e.uniform4f(s.tex.u.get("uPlaceholder")??null,S[0]??0,S[1]??0,S[2]??0,1),e.bindTexture(e.TEXTURE_2D,v?.tex??this.black),e.drawArrays(e.TRIANGLES,p*6,6)}),e.depthMask(!1),l(s.sky),e.uniformMatrix4fv(s.sky.u.get("uInvViewProj")??null,!1,n.invViewProj),e.bindVertexArray(this.vaos.full),e.drawArrays(e.TRIANGLES,0,3),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.POLYGON_OFFSET_FILL),e.polygonOffset(-1,-4),l(s.decal),e.bindVertexArray(this.vaos.decal),e.drawArrays(e.TRIANGLES,0,this.counts.decal),this.ribbonCount>0&&!n.mirror&&(l(s.ribbon),e.uniform1f(s.ribbon.u.get("uLength")??null,this.ribbonLength),e.bindVertexArray(this.vaos.ribbon),e.drawArrays(e.TRIANGLES,0,this.ribbonCount)),this.atlasTex&&this.counts.signs>0&&(l(s.tex),e.uniform1i(s.tex.u.get("uMode")??null,0),e.uniform1f(s.tex.u.get("uHasTex")??null,1),e.uniform1f(s.tex.u.get("uFlip")??null,0),e.bindTexture(e.TEXTURE_2D,this.atlasTex),e.bindVertexArray(this.vaos.signs),e.drawArrays(e.TRIANGLES,0,this.counts.signs));{let m=!1;this.world.overlays.forEach((p,b)=>{if(t.level===null||p.level!==t.level)return;let v=this.overlayNormals[b];if(v&&(n.eye[0]-p.rect.centre[0])*v[0]+(n.eye[1]-p.rect.centre[1])*v[1]+(n.eye[2]-p.rect.centre[2])*v[2]<0)return;let E=this.screenTex.get(p.key);E?.tex&&(m||(l(s.tex),e.uniform1i(s.tex.u.get("uMode")??null,0),e.uniform1f(s.tex.u.get("uHasTex")??null,1),e.uniform1f(s.tex.u.get("uFlip")??null,0),e.bindVertexArray(this.vaos.overlays),m=!0),E.lastUsed=d,e.bindTexture(e.TEXTURE_2D,E.tex),e.drawArrays(e.TRIANGLES,b*6,6))})}if(e.disable(e.POLYGON_OFFSET_FILL),!n.mirror)for(let m of t.holos)this.drawHolo(m,t,r);l(s.glass),e.uniform3f(s.glass.u.get("uOffset")??null,0,0,0),e.uniform1f(s.glass.u.get("uFade")??null,t.fade),e.bindVertexArray(this.vaos.glass);let h=this.world.glassPieces;for(let m=0;m<h.length;m++){let p=h[m]?.centre??[0,0,0];this.dist[m]=(p[0]-n.eye[0])**2+(p[1]-n.eye[1])**2+(p[2]-n.eye[2])**2}this.order.sort((m,p)=>(this.dist[p]??0)-(this.dist[m]??0));for(let m of this.order){let p=h[m];p&&e.drawArrays(e.TRIANGLES,p.first,p.count)}if(!n.mirror&&this.counts.bubbles>0&&(l(s.mote),e.uniform3f(s.mote.u.get("uRight")??null,t.right[0],t.right[1],t.right[2]),e.uniform3f(s.mote.u.get("uUp")??null,t.up[0],t.up[1],t.up[2]),e.bindVertexArray(this.vaos.bubbles),e.drawArraysInstanced(e.TRIANGLES,0,6,this.counts.bubbles)),!n.mirror&&t.dim>.001&&(e.disable(e.DEPTH_TEST),e.useProgram(s.dim.p),e.uniform1f(s.dim.u.get("uDim")??null,t.dim),e.bindVertexArray(this.vaos.full),e.drawArrays(e.TRIANGLES,0,3),e.enable(e.DEPTH_TEST)),!n.mirror&&t.highlight){let{min:m,max:p,rgba:b}=t.highlight;l(s.flat),e.uniform4f(s.flat.u.get("uColor")??null,b[0]*b[3],b[1]*b[3],b[2]*b[3],b[3]),e.bindBuffer(e.ARRAY_BUFFER,this.flatBuf),e.bufferData(e.ARRAY_BUFFER,Ya(m,p),e.DYNAMIC_DRAW),e.bindVertexArray(this.vaos.flat),e.drawArrays(e.TRIANGLES,0,36)}e.bindVertexArray(null),e.depthMask(!0),e.disable(e.BLEND)}owned(t,n,r,e){let s=this.gl,a=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,a),s.bufferData(s.ARRAY_BUFFER,t,s.STATIC_DRAW);let i=this.vaoFor(a,n);return a&&e.push(a),i&&r.push(i),i}holoBuffers(t){let n=this.holoGpu.get(t.node);if(n)return n;let r=[],e=[],s=c=>({vao:c.length>0?this.owned(c,[3,3],r,e):null,count:c.length/Zt}),a=c=>({vao:c.length>0?this.owned(new Float32Array(c.flat()),[3],r,e):null,count:c.length}),i=new Map;for(let c of t.lines){let u=c.color.join(","),f=i.get(u)??{color:c.color,data:[]};i.set(u,f);for(let d=1;d<c.points.length;d++)f.data.push(...c.points[d-1]??[0,0,0],...c.points[d]??[0,0,0])}let l={vaos:r,bufs:e,lit:s(Nn(t.lit)),ghosts:s(Nn(t.ghosts)),lines:[...i.values()].map(c=>({vao:this.owned(new Float32Array(c.data),[3],r,e),count:c.data.length/3,color:c.color})),dots:a(t.dots),beads:a(t.beads),lastUsed:performance.now()};return this.holoGpu.set(t.node,l),l}freeHolo(t){for(let n of t.vaos)this.gl.deleteVertexArray(n);for(let n of t.bufs)this.gl.deleteBuffer(n)}drawHolo(t,n,r){let e=this.gl,s=this.prog,a=t.holo,i=this.holoBuffers(a);if(i.lastUsed=performance.now(),!this.shell){let m=No();this.shell={vao:this.vao(m,[3,3]),count:m.length/Zt}}if(!this.beam){let m=Co();this.beam={vao:this.vao(m,[3,3]),count:m.length/Zt}}let l=a.tint,c=(m,p)=>{e.useProgram(m.p),e.uniformMatrix4fv(m.u.get("uViewProj")??null,!1,n.viewProj),e.uniformMatrix4fv(m.u.get("uModel")??null,!1,p);let b=m.u.get("uCamPos");b&&e.uniform3f(b,n.eye[0],n.eye[1],n.eye[2]);let v=m.u.get("uDirect");v&&e.uniform1f(v,r?1:0);let E=m.u.get("uExposure");E&&e.uniform1f(E,n.exposure)},u=m=>{this.beam&&(c(s.beam,t.model),e.uniform1f(s.beam.u.get("uTime")??null,n.time),e.uniform1f(s.beam.u.get("uSide")??null,m),e.bindVertexArray(this.beam.vao),e.drawArrays(e.TRIANGLES,0,this.beam.count))};u(-1),c(s.organ,t.model);let f=(m,p,b,v)=>{!m.vao||m.count===0||(e.uniform3f(s.organ.u.get("uColor")??null,p[0],p[1],p[2]),e.uniform1f(s.organ.u.get("uAlpha")??null,b),e.uniform1f(s.organ.u.get("uPulse")??null,v),e.bindVertexArray(m.vao),e.drawArrays(e.TRIANGLES,0,m.count))};f(i.ghosts,[.42,.5,.58],a.whole?.1:.14,0),f(i.lit,l,.86,t.pulse),c(s.line,t.model);let d=(m,p)=>e.uniform4f(s.line.u.get("uColor")??null,m[0]*p,m[1]*p,m[2]*p,p);e.uniform1f(s.line.u.get("uRound")??null,0);for(let m of i.lines)d(m.color,.92),e.bindVertexArray(m.vao),e.drawArrays(e.LINES,0,m.count);e.uniform1f(s.line.u.get("uRound")??null,1),i.dots.vao&&(d(l,.75),e.uniform1f(s.line.u.get("uPointSize")??null,.017*n.pxPerMetre),e.bindVertexArray(i.dots.vao),e.drawArrays(e.POINTS,0,i.dots.count)),i.beads.vao&&(d(ka,.95),e.uniform1f(s.line.u.get("uPointSize")??null,.03*n.pxPerMetre),e.bindVertexArray(i.beads.vao),e.drawArrays(e.POINTS,0,i.beads.count)),c(s.line,Wa),e.uniform1f(s.line.u.get("uRound")??null,0),e.bindVertexArray(this.vaos.leaders);for(let[m,p,b]of[[t.rings,Ga,.5],[t.leaders,za,.9]])m.length!==0&&(d(p,b),e.bindBuffer(e.ARRAY_BUFFER,this.leaderBuf),e.bufferData(e.ARRAY_BUFFER,m,e.DYNAMIC_DRAW),e.drawArrays(e.LINES,0,m.length/3));let h=Math.floor(t.targets.length/4);if(h>0){let m=new Float32Array(h*36),p=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1];for(let b=0;b<h;b++){let v=t.targets[b*4]??0,E=t.targets[b*4+1]??0,R=t.targets[b*4+2]??0,S=t.targets[b*4+3]??0;for(let P=0;P<6;P++)m.set([v,E,R,p[P*2]??0,p[P*2+1]??0,S],(b*6+P)*6)}e.useProgram(s.reticle.p),e.uniformMatrix4fv(s.reticle.u.get("uViewProj")??null,!1,n.viewProj),e.uniform3f(s.reticle.u.get("uRight")??null,n.right[0],n.right[1],n.right[2]),e.uniform3f(s.reticle.u.get("uUp")??null,n.up[0],n.up[1],n.up[2]),e.uniform3f(s.reticle.u.get("uCamPos")??null,n.eye[0],n.eye[1],n.eye[2]),e.uniform1f(s.reticle.u.get("uTime")??null,n.time),e.uniform1f(s.reticle.u.get("uDirect")??null,r?1:0),e.uniform1f(s.reticle.u.get("uExposure")??null,n.exposure),e.bindBuffer(e.ARRAY_BUFFER,this.reticleBuf),e.bufferData(e.ARRAY_BUFFER,m,e.DYNAMIC_DRAW),e.bindVertexArray(this.vaos.reticles),e.drawArrays(e.TRIANGLES,0,h*6)}c(s.shell,t.model),e.uniform3f(s.shell.u.get("uTint")??null,l[0],l[1],l[2]),e.uniform1f(s.shell.u.get("uWhole")??null,a.whole||a.skin?1:0),e.uniform1f(s.shell.u.get("uTime")??null,n.time),e.uniform1f(s.shell.u.get("uScanY")??null,t.scanY),e.bindVertexArray(this.shell.vao),e.colorMask(!1,!1,!1,!1),e.depthMask(!0),e.drawArrays(e.TRIANGLES,0,this.shell.count),e.colorMask(!0,!0,!0,!0),e.depthMask(!1),e.drawArrays(e.TRIANGLES,0,this.shell.count),u(1)}dispose(){let t=this.gl;for(let n of this.holoGpu.values())this.freeHolo(n);this.holoGpu.clear();for(let n of Object.values(this.prog))t.deleteProgram(n.p);if(this.post)for(let n of Object.values(this.post))t.deleteProgram(n.p);this.freeTargets();for(let n of this.screenTex.values())n.grade!==4&&t.deleteTexture(n.tex);t.deleteTexture(this.skyTex),t.deleteTexture(this.atlasTex),t.deleteTexture(this.shadowTex),t.deleteTexture(this.black)}};function Ya(o,t){let[n,r,e]=o,[s,a,i]=t,l=(c,u,f,d)=>[...c,...u,...f,...c,...f,...d];return new Float32Array([...l([n,r,i],[s,r,i],[s,a,i],[n,a,i]),...l([s,r,e],[n,r,e],[n,a,e],[s,a,e]),...l([s,r,i],[s,r,e],[s,a,e],[s,a,i]),...l([n,r,e],[n,r,i],[n,a,i],[n,a,e]),...l([n,a,i],[s,a,i],[s,a,e],[n,a,e]),...l([n,r,e],[s,r,e],[s,r,i],[n,r,i])])}var pt=[0,23,0],ja={az:34*ot,el:7*ot,dist:160},bt=64*ot,Gn=34*ot,Sr=[52,280],Ar=[3*ot,62*ot],Ka=3.4,qa=6.8,Qa=1.9;function Pr(o){let t=Math.cos(o.el),n=[pt[0]+o.dist*t*Math.sin(o.az),pt[1]+o.dist*Math.sin(o.el),pt[2]+o.dist*t*Math.cos(o.az)],r=pt[0]-n[0],e=pt[1]-n[1],s=pt[2]-n[2];return{eye:n,heading:Ae(r,s),pitch:Math.atan2(e,Math.hypot(r,s)),fov:Gn,level:null}}function hn(o,t,n,r,e=ve){return{eye:[t[0],Te(o)+e,t[1]],heading:n,pitch:r,fov:bt,level:o}}function at(o){let t=Oe(o,0,1);return t*t*(3-2*t)}function fn(o,t,n,r){let e=Math.max(.001,Mo(t)),s=Oe(e/3,3.2,8),a=Math.max(.6,e/s),i=[0];for(let m=1;m<t.length;m++){let p=t[m-1],b=t[m];i.push((i[m-1]??0)+(p&&b?Math.hypot(b[0]-p[0],b[1]-p[1]):0))}let l=m=>{for(let p=1;p<t.length;p++){let b=i[p-1]??0,v=i[p]??0;if(m<=v||p===t.length-1){let E=t[p-1]??[0,0],R=t[p]??E,S=v>b?Oe((m-b)/(v-b),0,1):1;return[Ce(E[0],R[0],S),Ce(E[1],R[1],S)]}}return t[t.length-1]??[0,0]},c=t[t.length-1]??[0,0],u=t[t.length-2]??c,f=Ae(c[0]-u[0],c[1]-u[1]),d=m=>{let p=l(m),b=l(Math.min(e,m+2.4));return Math.hypot(b[0]-p[0],b[1]-p[1])<.05?f:Ae(b[0]-p[0],b[1]-p[1])},h=Te(o);return{duration:a,interruptible:!0,route:t.map(m=>[m[0],h,m[1]]),at(m){let p=Mt(m),b=l(p*e),v=d(p*e);v=n.heading+Rt(n.heading,v)*at(m/.28),r.heading!==null&&(v+=Rt(v,r.heading)*at((m-.66)/.34));let E=Ce(Ce(n.eye??ve,ve,at(m/.25)),r.eye??ve,at((m-.7)/.3));return hn(o,b,v,Ce(n.pitch,r.pitch,p),E)}}}function Za(o,t,n){let r=Oe(.9*Math.abs(t-o)+.9,1.6,4.6),e=s=>Ce(Te(o),Te(t),Mt(s));return{duration:r,cab:e,at(s){let a=e(s),i=n+Rt(n,Math.PI)*at(s*1.6);return{eye:[0,a+ve,0],heading:i,pitch:0,fov:bt,level:Math.round(Ce(o,t,Mt(s)))}}}}function zn(o,t,n,r,e){let s=a=>{let i=1-a,l=i*i*i,c=3*i*i*a,u=3*i*a*a,f=a*a*a;return[0,1,2].map(d=>l*(o.eye[d]??0)+c*(n[d]??0)+u*(r[d]??0)+f*(t.eye[d]??0))};return{duration:e,at(a){let i=Mt(a),l=at((a-.15)/.8);return{eye:s(i),heading:o.heading+Rt(o.heading,t.heading)*l,pitch:Ce(o.pitch,t.pitch,l),fov:Ce(o.fov,t.fov,at((a-.3)/.7)),level:a>.7?t.level:o.level}}}}var mn=class{mode="exterior";orbit={...ja};level=0;pos=Gt;heading=0;pitch=0;eye=ve;rising=!1;reducedMotion=!1;destination=null;vel=[0,0];legs=[];legT=0;finish=null;idleFor=0;stepBuffer=0;camera(){let t=this.mode==="travel"?this.legs[0]:void 0;return t?t.at(Oe(this.legT/t.duration,0,1)):this.mode==="exterior"?Pr(this.orbit):hn(this.level,this.pos,this.heading,this.pitch,this.eye)}cabY(){let t=this.mode==="travel"?this.legs[0]:void 0;if(t?.cab)return t.cab(Oe(this.legT/t.duration,0,1));let n=this.camera();return Te(n.level??this.level)}routeAhead(){let t=this.mode==="travel"?this.legs[0]:void 0;if(!t?.route)return null;let n=this.camera(),r=t.route,e=0,s=1/0;for(let a=0;a<r.length-1;a++){let i=r[a];if(!i)continue;let l=Math.hypot(i[0]-n.eye[0],i[2]-n.eye[2]);l<s&&(s=l,e=a)}return[[n.eye[0],r[0]?.[1]??0,n.eye[2]],...r.slice(e+1)]}get travelling(){return this.mode==="travel"}goTo(t,n=this.reducedMotion){let r=this.plan(t);return r?(this.destination=t.kind==="store"||t.kind==="level"?t:null,this.vel=[0,0],n||r.legs.length===0?(this.legs=[],r.finish(),!0):(this.legs=r.legs,this.legT=0,this.finish=r.finish,this.mode="travel",!0)):!1}here(){let t=this.camera();return t.level===null?null:{level:t.level,p:[t.eye[0],t.eye[2]],heading:t.heading,pitch:t.pitch,eye:t.eye[1]-Te(t.level)}}plan(t){let n=this.camera(),r=this.mode==="exterior"?null:this.here(),e=(f,d,h,m=0,p=ve)=>()=>{this.mode="walk",this.level=f,this.pos=d,this.heading=h,this.pitch=m,this.eye=p,this.rising=!1};if(t.kind==="exterior"){let f=Pr(this.orbit);return{legs:r?[zn(n,f,[n.eye[0]*1.3,n.eye[1]+10,n.eye[2]*1.3+24],[f.eye[0]*.75,f.eye[1]+12,f.eye[2]*.75],2.6)]:[],finish:()=>{this.mode="exterior",this.idleFor=0}}}let s,a;if(t.kind==="plaza")s=0,a={p:Gt,heading:0,pitch:.04,waypoint:"plaza"};else if(t.kind==="level")s=t.level,a=r&&r.level!==s?{p:[0,4],heading:Math.PI,pitch:.08,waypoint:"bridge"}:{p:Et,heading:0,pitch:0,waypoint:"lobby"};else if(t.kind==="store"){let f=tt(t.node);if(!f)return null;s=f.level;let d=t.station?f.stations[t.station]:null;a=d?{p:d.p,heading:d.heading,pitch:d.pitch,waypoint:`${t.station}:${f.node}`,eye:d.eye??ve}:{p:f.view,heading:f.heading,pitch:.09,waypoint:`store:${f.node}`}}else s=t.level,a={p:t.p,heading:Number.NaN,pitch:0,waypoint:null};let i=f=>e(s,a.p,Number.isNaN(f)?r?.heading??0:f,a.pitch,a.eye??ve);if(!r){if(t.kind==="plaza"){let p=hn(0,Gt,0,.04);return{legs:[zn(n,p,[n.eye[0]*.6,n.eye[1]*.55,n.eye[2]*.6+30],[0,10,62],3)],finish:i(0)}}let f=Te(s),d=hn(s,Et,0,0),h=[zn(n,d,[n.eye[0]*.55,f+ve+14+n.eye[1]*.25,n.eye[2]*.5+42],[0,f+ve+1.5,34],3.2)];if(a.waypoint!=="lobby"){let p=a.waypoint?Tt(s,Et,a.waypoint):kt(s,Et,a.p);p&&h.push(fn(s,p,{heading:0,pitch:0},{heading:Number.isNaN(a.heading)?null:a.heading,pitch:a.pitch,eye:a.eye}))}let m=h[h.length-1];return{legs:h,finish:i(Number.isNaN(a.heading)?m?m.at(1).heading:0:a.heading)}}let l=[],c={heading:r.heading,pitch:r.pitch,eye:r.eye};if(r.level!==s){let f=Tt(r.level,r.p,"lift");if(!f)return null;l.push(fn(r.level,f,c,{heading:null,pitch:0}));let d=l[l.length-1]?.at(1).heading??0;l.push(Za(r.level,s,d)),c={heading:Math.PI,pitch:0,eye:ve};let m=To(s,"lift")?.p??[0,0],p=a.waypoint?Tt(s,m,a.waypoint):kt(s,m,a.p);p&&l.push(fn(s,p,c,{heading:Number.isNaN(a.heading)?null:a.heading,pitch:a.pitch,eye:a.eye}))}else{let f=a.waypoint?Tt(s,r.p,a.waypoint):kt(s,r.p,a.p);if(!f)return null;l.push(fn(s,f,c,{heading:Number.isNaN(a.heading)?null:a.heading,pitch:a.pitch,eye:a.eye}))}let u=l[l.length-1];return{legs:l,finish:i(Number.isNaN(a.heading)?u?u.at(1).heading:r.heading:a.heading)}}interrupt(){if(!this.legs[0]?.interruptible)return;let n=this.here();n&&(this.legs=[],this.finish=null,this.mode="walk",this.level=n.level,this.pos=Fn(n.level,n.p,0,0),this.heading=n.heading,this.pitch=n.pitch,this.eye=n.eye)}update(t,n){let r=n.forward!==0||n.strafe!==0||n.turn!==0||n.lookX!==0||n.lookY!==0||n.zoom!==0;if(this.mode==="travel")if(r&&this.legs[0]?.interruptible)this.interrupt();else{this.legT+=t;let h=this.legs[0];for(;h&&this.legT>=h.duration;)this.legT-=h.duration,this.legs.shift(),h=this.legs[0];if(!h){let m=this.finish;this.finish=null,this.legT=0,m?.()}return!0}if(this.mode==="exterior"){let h=this.orbit,m=h.az-n.lookX*.0052-n.turn*t*.9,p=Oe(h.el+n.lookY*.0042+n.forward*t*.5,Ar[0],Ar[1]),b=Oe(h.dist*Math.exp(n.zoom*.0011-n.strafe*0),Sr[0],Sr[1]);this.idleFor=r?0:this.idleFor+t,!this.reducedMotion&&this.idleFor>5&&(m+=t*.035);let v=m!==h.az||p!==h.el||b!==h.dist;return this.orbit={az:m,el:p,dist:b},v}this.heading+=n.lookX*.0042+n.turn*Qa*t,this.pitch=Oe(this.pitch-n.lookY*.0036,-.95,.95),n.zoom!==0&&(this.stepBuffer=Oe(this.stepBuffer-n.zoom*.01,-6,6));let e=this.stepBuffer*Math.min(1,t*6);if(this.stepBuffer-=e,(n.forward!==0||n.strafe!==0||Math.abs(this.stepBuffer)>.01)&&this.eye!==ve&&(this.rising=!0),this.rising){let h=this.eye+(ve-this.eye)*Math.min(1,t*5);this.eye=this.reducedMotion||Math.abs(ve-h)<.01?ve:h,this.eye===ve&&(this.rising=!1)}let a=n.run?qa:Ka,i=Math.sin(this.heading),l=-Math.cos(this.heading),c=[(i*n.forward-l*n.strafe)*a,(l*n.forward+i*n.strafe)*a],u=1-Math.exp(-t*10);this.vel=[Ce(this.vel[0],c[0],u),Ce(this.vel[1],c[1],u)];let f=this.vel[0]*t+i*e,d=this.vel[1]*t+l*e;return Math.abs(f)+Math.abs(d)>1e-6&&(this.pos=Fn(this.level,this.pos,f,d)),r||Math.abs(this.vel[0])+Math.abs(this.vel[1])>.01||this.eye!==ve&&this.rising}};var pn="#0C1824",Ja="#3A4A5A",vt="#5A6A7A",es="#DCE2E8",st="#0B0D10",_t="rgba(205,210,215,0.85)",Xe="#C9CED4",Pt="#23272C",ts="#E2DCD1",Ue="#E3232C",j='"Poppins", "Inter", system-ui, sans-serif',V='"Inter", system-ui, sans-serif';async function Lr(){if(typeof document>"u"||!document.fonts)return;let o=["500 64px Poppins","700 64px Poppins","400 32px Inter","500 32px Inter","600 32px Inter"].map(t=>document.fonts.load(t).catch(()=>[]));await Promise.race([Promise.all(o),new Promise(t=>setTimeout(t,1500))])}function Ye(o,t,n=1){let r=document.createElement("canvas");r.width=Math.round(o*n),r.height=Math.round(t*n);let e=r.getContext("2d");if(!e)throw new Error("2D canvas unavailable");return n!==1&&e.scale(r.width/o,r.height/t),[r,e]}function _r(o,t,n,r,e,s){let a=Math.min(s,r/2,e/2);o.beginPath(),o.moveTo(t+a,n),o.arcTo(t+r,n,t+r,n+e,a),o.arcTo(t+r,n+e,t,n+e,a),o.arcTo(t,n+e,t,n,a),o.arcTo(t,n,t+r,n,a),o.closePath()}function A(o,t,n,r,e,s=!0){let a=o;if("letterSpacing"in a){a.letterSpacing=`${e}px`;let l=o.measureText(t).width;return s&&o.fillText(t,n,r),a.letterSpacing="0px",l}let i=n;for(let l of t)s&&o.fillText(l,i,r),i+=o.measureText(l).width+e;return i-n}function vn(o,t,n,r,e,s){o.beginPath(),o.moveTo(t+s,n),o.lineTo(t+r,n),o.lineTo(t+r,n+e-s),o.lineTo(t+r-s,n+e),o.lineTo(t,n+e),o.lineTo(t,n+s),o.closePath()}function De(o,t,n){let r=t.split(/\s+/),e=[],s="";for(let a of r){let i=s?`${s} ${a}`:a;o.measureText(i).width>n&&s?(e.push(s),s=a):s=i}return s&&e.push(s),e}var $e=o=>String(o).padStart(2,"0");function ns(o){let t=tt(o),n=se.node(o),r=n?.tier??"T01";return{key:`store:${o}`,aspect:5.6/.95,draw(e,s,a){e.fillStyle=st,e.fillRect(2,2,s-4,a-4),e.lineWidth=Math.max(2,a*.02),e.strokeStyle=_t,e.strokeRect(3,3,s-6,a-6),e.textBaseline="middle",e.font=`500 ${Math.round(a*.3)}px ${j}`,e.fillStyle=pe[r];let i=a*.42,l=A(e,o,i,a/2+1,a*.06);e.fillStyle="rgba(205,210,215,0.5)",e.fillRect(i+l+a*.24,a*.3,Math.max(1,a*.012),a*.4),e.font=`500 ${Math.round(a*.17)}px ${V}`;let c=`LEVEL ${$e((t?.level??0)+1)} \xB7 ${$e(t?.number??0)}`,u=A(e,c,0,0,a*.05,!1),f=i+l+a*.5,d=(n?.name??o).toUpperCase(),h=a*.3,m=a*.16,p=R=>(e.font=`500 ${Math.round(h)}px ${j}`,A(e,d,0,0,m,!1)<=R),b=s-a*.5-u-a*.3-f,v=s-a*.5-f,E=!0;for(;!p(b)&&h>a*.24;)h-=1,m=Math.max(a*.05,m-.6);if(!p(b))for(E=!1,h=a*.3,m=a*.16;!p(v)&&h>a*.18;)h-=1,m=Math.max(a*.03,m-.6);e.fillStyle="#F1F3F5",e.font=`500 ${Math.round(h)}px ${j}`,A(e,d,f,a/2+1,m),E&&(e.fillStyle=Xe,e.font=`500 ${Math.round(a*.17)}px ${V}`,A(e,c,s-a*.5-u,a/2+1,a*.05))}}}function os(o){let t=he[o];return{key:`level:${o}`,aspect:5.4/1.1,draw(n,r,e){n.fillStyle=st,n.fillRect(2,2,r-4,e-4),n.lineWidth=Math.max(2,e*.02),n.strokeStyle=_t,n.strokeRect(3,3,r-6,e-6),n.textBaseline="alphabetic",n.fillStyle=pe[t?.tier??"T01"],n.fillRect(e*.34,e*.24,Math.max(2,e*.025),e*.52);let s=e*.6;n.fillStyle="#F1F3F5",n.font=`500 ${Math.round(e*.28)}px ${j}`,A(n,`LEVEL ${$e(o+1)}`,s,e*.48,e*.12);let a=r-s-e*.3,i=`${t?.tier??""} \xB7 ${(t?.name??"").toUpperCase()}`,l=e*.14,c=e*.05;for(;n.font=`500 ${Math.round(l)}px ${V}`,!(A(n,i,0,0,c,!1)<=a||l<=e*.1);)l-=1,c=Math.max(e*.015,c-.3);n.fillStyle=Xe,A(n,i,s,e*.76,c)}}}function rs(o){let t=he[o];return{key:`levelno:${o}`,aspect:7.2/1.8,draw(n,r,e){n.fillStyle=ts,n.fillRect(0,e*.08,r,e*.84),n.fillStyle="rgba(35,39,44,0.18)",n.fillRect(0,e*.08,r,Math.max(1,e*.01)),n.textBaseline="alphabetic",n.font=`500 ${Math.round(e*.58)}px ${j}`,n.fillStyle=Pt;let s=A(n,$e(o+1),e*.22,e*.72,e*.08);n.fillStyle=pe[t?.tier??"T01"],n.fillRect(e*.22+s+e*.2,e*.3,Math.max(2,e*.025),e*.42),n.fillStyle=Pt,n.font=`500 ${Math.round(e*.12)}px ${j}`;let a=(t?.name??"").toUpperCase().split(" "),i=Math.ceil(a.length/2);A(n,a.slice(0,i).join(" "),e*.22+s+e*.42,e*.48,e*.05),A(n,a.slice(i).join(" "),e*.22+s+e*.42,e*.69,e*.05)}}}var as={key:"crown",aspect:22/1.75,draw(o,t,n){o.textBaseline="middle",o.font=`500 ${Math.round(n*.44)}px ${j}`;let r=[[Tn.parent,Pt],[" // ",Ue],["XI OUTLET",Pt]],e=n*.26,s=r.reduce((i,[l])=>i+A(o,l,0,0,e,!1),0),a=(t-s)/2;for(let[i,l]of r)o.fillStyle=l,a+=A(o,i,a,n*.5,e)}},ss={key:"entrance",aspect:7.6/1.3,draw(o,t,n){o.fillStyle=st,o.fillRect(2,2,t-4,n-4),o.lineWidth=Math.max(2,n*.02),o.strokeStyle=_t,o.strokeRect(3,3,t-6,n-6),o.textBaseline="middle",o.fillStyle="#F1F3F5",o.font=`500 ${Math.round(n*.3)}px ${j}`;let r="XI OUTLET",e=A(o,r,0,0,n*.2,!1);A(o,r,(t-e)/2,n*.4,n*.2),o.fillStyle=Xe,o.font=`500 ${Math.round(n*.12)}px ${V}`;let s=`${Tn.research} \xB7 EXPERIENCE INTERFACE`,a=A(o,s,0,0,n*.06,!1);A(o,s,(t-a)/2,n*.74,n*.06),o.fillStyle=Ue,o.fillRect((t-n*.5)/2,n*.585,n*.5,Math.max(2,n*.025))}};function Ir(){let o=[...se.nodes.map(c=>ns(c.id)),...he.map(c=>os(c.index)),...he.map(c=>rs(c.index)),as,ss,...se.nodes.map(c=>is(c.id)),...ls,cs],t=2048,n=112,r=6,e=c=>{let u=0,f=0,d=0;for(let h of o){let m=h.key.startsWith("levelno")?n*1.5:n,p=Math.min(t,Math.round(m*h.aspect));u+p>t&&(u=0,f+=d+r,d=0),d=Math.max(d,m),c?.(h,u,f,p,m),u+=p+r}return f+d},s=Math.ceil(e(null)/256)*256,[a,i]=Ye(t,s),l=new Map;return e((c,u,f,d,h)=>{i.save(),i.translate(u,f),i.beginPath(),i.rect(0,0,d,h),i.clip(),c.draw(i,d,h),i.restore(),l.set(c.key,{u0:(u+.5)/t,v0:(f+.5)/s,u1:(u+d-.5)/t,v1:(f+h-.5)/s})}),{canvas:a,rects:l}}function is(o){let t=se.node(o);return{key:`blade:${o}`,aspect:1.3/.62,draw(n,r,e){n.fillStyle=st,n.fillRect(2,2,r-4,e-4),n.lineWidth=Math.max(2,e*.025),n.strokeStyle=_t,n.strokeRect(3,3,r-6,e-6),n.fillStyle=pe[t?.tier??"T01"],n.fillRect(e*.16,e*.2,Math.max(2,e*.03),e*.3),n.fillStyle="#F1F3F5",n.textBaseline="middle",n.font=`500 ${Math.round(e*.25)}px ${j}`,A(n,o,e*.3,e*.36,e*.05),n.fillStyle=Xe,n.font=`500 ${Math.round(e*.15)}px ${j}`;let s=(t?.name??"").toUpperCase();for(;s.length>3&&A(n,s,0,0,e*.05,!1)>r-e*.32;)s=s.slice(0,-1);A(n,s===(t?.name??"").toUpperCase()?s:`${s.trim()}\u2026`,e*.16,e*.72,e*.05)}}}var ls=[["model","01","MODEL"],["body","02","BODY MAP"],["lesson","03","LESSON"],["examples","05","EXAMPLES"],["theater","07","THEATER"]].map(([o,t,n])=>({key:`station:${o}`,aspect:1.3/.46,draw(r,e,s){_r(r,2,2,e-4,s-4,s*.1);let a=r.createLinearGradient(0,0,e,s);a.addColorStop(0,"#D3D8DD"),a.addColorStop(.5,"#BCC2C9"),a.addColorStop(1,"#CBD0D6"),r.fillStyle=a,r.fill(),r.textBaseline="middle",r.fillStyle=Ue,r.font=`600 ${Math.round(s*.32)}px ${V}`;let i=A(r,t,s*.36,s/2+1,s*.03);r.fillStyle=Pt,r.font=`500 ${Math.round(s*.26)}px ${j}`,A(r,n,s*.36+i+s*.22,s/2+1,s*.1)}})),cs={key:"theater:marquee",aspect:3.4/.66,draw(o,t,n){o.fillStyle=st,o.fillRect(2,2,t-4,n-4),o.strokeStyle="rgba(231,201,160,0.55)",o.lineWidth=Math.max(2,n*.025),o.strokeRect(3,3,t-6,n-6),o.textBaseline="middle",o.fillStyle="#E7C9A0",o.font=`600 ${Math.round(n*.15)}px ${V}`;let r="NOW SHOWING",e=A(o,r,0,0,n*.06,!1),s=t-n*.42-e;A(o,r,s,n/2+1,n*.06),o.beginPath(),o.arc(s-n*.2,n/2,n*.055,0,Math.PI*2),o.fill(),o.fillStyle=Ue,o.font=`600 ${Math.round(n*.28)}px ${V}`;let a=A(o,"07",n*.42,n/2+1,n*.02);o.fillStyle="#F1F3F5";let i=n*.28;o.font=`500 ${Math.round(i)}px ${j}`;let l=n*.42+a+n*.24;for(;A(o,"XI THEATER",0,0,i*.3,!1)>s-n*.5-l&&i>n*.18;)i-=1,o.font=`500 ${Math.round(i)}px ${j}`;A(o,"XI THEATER",l,n/2+1,i*.3)}};function us(o,t,n,r,e){o.font=`600 ${e}px ${V}`,o.fillStyle=t.status==="sourced"?"#0672A8":vt,A(o,Rn[t.status].toUpperCase(),n,r,e*.08)}var Vr={SW:"SOUTH",SE:"SOUTH",ES:"EAST",EN:"EAST",NE:"NORTH",NW:"NORTH",WN:"WEST",WS:"WEST"};function Nr(o){let[r,e]=Ye(1024,777),s=he[o],a=pe[s?.tier??"T01"],i=e.createLinearGradient(0,0,0,777);i.addColorStop(0,"#15181C"),i.addColorStop(1,st),e.fillStyle=i,e.fillRect(0,0,1024,777),e.textBaseline="alphabetic",e.fillStyle="#F1F3F5",e.font=`500 44px ${j}`,A(e,`LEVEL ${$e(o+1)}`,48,86,14),e.fillStyle=a,e.fillRect(48,104,60,5),e.fillStyle=Xe,e.font=`500 18px ${V}`,A(e,`${s?.tier??""} \xB7 ${(s?.name??"").toUpperCase()}`,48,146,4);let l=400,c=48,u=190,f=l/(B*2),d=U=>[c+(U[0]+B)*f,u+(U[1]+B)*f];e.lineWidth=2,e.strokeStyle="#3A3F46",e.strokeRect(c,u,l,l);for(let U of s?.bays??[]){e.beginPath(),U.poly.forEach((L,z)=>{let[N,q]=d(L);z===0?e.moveTo(N,q):e.lineTo(N,q)}),e.closePath();let x=s?.stores.find(L=>L.bay.id===U.id);e.fillStyle=x?`${a}55`:U.use==="lobby"?"#2A2F3680":"#3A403A60",e.fill(),e.stroke();let[g,y]=d(Ve(U.id,(_+B)/2,U.use==="lobby"?0:6));e.fillStyle="#FFFFFF",e.font=`600 17px ${V}`;let F=x?x.node:U.use==="lounge"?"LOUNGE":U.id==="SW"?"":"LOBBY";F&&e.fillText(F,g-e.measureText(F).width/2,y+6)}let[h,m]=d([-1.3,0]);e.fillStyle="#3A3F46",e.fillRect(h,m,2.6*f,D*f);let[p,b]=d([-D,-D]);e.strokeStyle="#6A717A",e.setLineDash([6,5]),e.strokeRect(p,b,D*2*f,D*2*f),e.setLineDash([]);let[v,E]=d([0,0]);e.beginPath(),e.arc(v,E,be*f,0,Math.PI*2),e.fillStyle="#9AA1A9",e.fill(),e.fillStyle=st,e.font=`600 13px ${V}`,e.fillText("LIFT",v-e.measureText("LIFT").width/2,E+5);let[R,S]=d(Ge);e.beginPath(),e.arc(R,S,9,0,Math.PI*2),e.fillStyle=Ue,e.fill(),e.fillStyle="#FFFFFF",e.font=`600 15px ${V}`,A(e,"YOU ARE HERE",R+16,S+5,1),e.fillStyle=Xe,e.font=`600 14px ${V}`,e.fillText("N",c+l/2-5,u-10);let P=220,C=500;e.fillStyle=Xe,e.font=`600 15px ${V}`,A(e,"STORES ON THIS LEVEL",C,P-26,4);for(let U of s?.stores??[])e.fillStyle=a,vn(e,C,P,74,38,8),e.fill(),e.fillStyle="#FFFFFF",e.font=`500 20px ${j}`,e.fillText(U.node,C+12,P+27),e.font=`500 23px ${j}`,A(e,U.name.toUpperCase(),C+92,P+27,2),e.fillStyle=Xe,e.font=`500 14px ${V}`,A(e,`${Vr[U.bay.id]} WING`,C+92,P+52,3),P+=84;return e.fillStyle=Xe,e.font=`400 16px ${V}`,e.fillText("Lift in the atrium: every level, Level 01 at the street.",48,737),r}var Lt={w:560,h:797};function kn(o){let n=Lt.h-128,r=Math.min(68,(n-338)/Math.max(1,o));return Array.from({length:o},(e,s)=>(338+r*(s+.5))/Lt.h)}function Cr(o,t){let{w:n,h:r}=Lt,[e,s]=Ye(n,r),a=se.node(o),i=a?.content?.bodyMap,l=a?.tier??"T01";s.fillStyle="#FFFFFF",s.fillRect(0,0,n,r),s.strokeStyle=es,s.lineWidth=3,s.strokeRect(1.5,1.5,n-3,r-3),s.strokeStyle=pn,s.lineWidth=3;for(let[p,b,v,E]of[[10,10,1,1],[n-10,10,-1,1],[10,r-10,1,-1],[n-10,r-10,-1,-1]])s.beginPath(),s.moveTo(p+v*22,b),s.lineTo(p,b),s.lineTo(p,b+E*22),s.stroke();s.textBaseline="alphabetic",s.fillStyle=Ue,s.beginPath(),s.arc(34,44,5,0,Math.PI*2),s.fill(),s.fillStyle=vt,s.font=`600 15px ${V}`,A(s,"02  SUBJECT // BODY MAP",48,50,2.5),s.fillStyle=pe[l],s.font=`600 15px ${V}`;let c=A(s,`${o} \xB7 ${l}`,0,0,2,!1);A(s,`${o} \xB7 ${l}`,n-30-c,50,2),s.fillStyle=pn,s.font=`500 36px ${j}`,A(s,(a?.name??o).toUpperCase(),30,104,4),s.fillStyle=vt,s.font=`600 14px ${V}`,i&&A(s,go[i.scope].toUpperCase(),30,136,2);let u=178;if(i){s.fillStyle=pn,s.font=`400 20px ${V}`;for(let p of De(s,i.where.text,n-60).slice(0,5))s.fillText(p,30,u),u+=27;us(s,i.where,30,u+2,12)}let f=i?$t(i):[],d=kn(f.length);f.forEach((p,b)=>{let v=(d[b]??0)*r,E=52,R=t?n-30-E:30;s.strokeStyle=Ue,s.lineWidth=2.5,s.strokeRect(R,v-17,E,34),s.fillStyle="#C9141E",s.font=`600 18px ${V}`;let S=String(p.index+1).padStart(2,"0");s.fillText(S,R+(E-s.measureText(S).width)/2,v+6);let P=t?30:30+E+16,C=n-60-E-16;s.fillStyle=pn,s.font=`600 19px ${V}`,s.fillText(De(s,p.label,C)[0]??p.label,P,v-2),s.fillStyle=vt,s.font=`600 12px ${V}`;let U=[p.zone,p.region==="body"?"":`GRID ${p.grid}`,p.posterior?"BEHIND OTHER ORGANS":"",p.example?"EXAMPLE SITE":""].filter(Boolean).join(" \xB7 ");A(s,U.toUpperCase(),P,v+18,1.2)});let h=i?.overlays??[],m=r-98;if(h.length>0){s.fillStyle=vt,s.font=`600 12px ${V}`,A(s,"OVERLAY",30,m,2);let p=110;for(let b of h)for(let v of yo[b])s.fillStyle=v.color==="accent"?pe[l]:v.color,s.fillRect(p,m-6,18,3),s.fillStyle=Ja,s.font=`400 13px ${V}`,s.fillText(v.label,p+24,m),p+=24+s.measureText(v.label).width+18,p>n-120&&(p=110,m+=20)}return s.fillStyle=vt,s.font=`600 11px ${V}`,A(s,"ILLUSTRATIVE \xB7 NOT TO SCALE \xB7 FRONT VIEW",30,r-44,1.5),A(s,"THE SUBJECT'S RIGHT IS ON YOUR LEFT",30,r-26,1.5),e}var gn=Ho;function ds(o,t,n,r,e,s){o.font=`600 ${s}px ${V}`,o.fillStyle=n.status==="sourced"?t.sourced:t.text3,A(o,Rn[n.status].toUpperCase(),r,e,s*.12)}function bn(o,t,n,r,e,s,a){o.fillStyle=t.accent,o.font=`600 ${a}px ${V}`;let i=A(o,n,e,s,a*.05);o.fillStyle=t.text,o.font=`500 ${a*.78}px ${j}`,A(o,r,e+i+a*.6,s-a*.05,a*.2),o.fillStyle=t.accent,o.fillRect(e,s+a*.42,a*1.3,Math.max(2,a*.08))}function Xn(o,t,n,r,e,s,a,i,l){o.font=`400 ${a}px ${V}`;let c=De(o,n.text,s),u=c.length*i+a*1.4;if(e+u>l)return null;o.fillStyle=t.text;for(let f of c)o.fillText(f,r,e),e+=i;return ds(o,t,n,r,e+a*.1,Math.round(a*.56)),e+a*1.4}function Or(o){let t=se.node(o),n=tt(o),r=t?.content,e=ke(o),s=gn(tn[e.stele],e.accent),a=n?.rooms.lettering,i=1536,l=808,[c,u]=Ye(i,l,.84);if(!n||!a||!t)return c;let f=i/a.width,d=-Math.cos(a.facing),h=-Math.sin(a.facing),m=d*n.bay.along[0]+h*n.bay.along[1]>0,p=Ne.stele.l0+.05,b=me=>m?(me-p)*f:(p+a.width-me)*f,v=me=>(a.bottom+a.height-me)*f,E=Math.min(b(Ne.screen.l0-.05),b(Ne.screen.l1+.05)),R=Math.max(b(Ne.screen.l0-.05),b(Ne.screen.l1+.05)),S=v(Ne.screen.bottom+(Ne.screen.l1-Ne.screen.l0)*3/4+.05),P=v(Ne.screen.bottom-.05),C=(E+R)/2>i/2,U=C?46:R+60,g=(C?E-60:i-46)-U;u.textBaseline="alphabetic";let y=he[n.level];u.font=`600 30px ${j}`;let F=A(u,o,0,0,2,!1)+28,L=t.name.toUpperCase(),z=me=>(u.font=`500 ${me}px ${j}`,A(u,L,0,0,me*.22,!1)),N=me=>(u.font=`600 18px ${V}`,A(u,me,0,0,2.6,!1)),q=me=>{let He=i-92-F-24-N(me)-64,K=92;for(;K>44&&z(K)>He;)K-=2;return K},X=`LEVEL ${$e(n.level+1)} \xB7 ${(y?.name??"").toUpperCase()}`,M=q(X)>=64?X:`LEVEL ${$e(n.level+1)}`,I=q(M),G=Math.min(S-26,112),$=C?46:i-46-z(I);u.fillStyle=s.text,u.font=`500 ${I}px ${j}`,A(u,L,$,G,I*.22),u.font=`600 30px ${j}`;let W=C?i-46-F:46;vn(u,W,G-46,F,50,9),u.fillStyle=pe[t.tier],u.fill(),u.fillStyle="#FFFFFF",A(u,o,W+14,G-10,2),u.fillStyle=s.text2;let O=N(M);A(u,M,C?W-24-O:W+F+24,G-14,2.6);let H=Math.max(G+92,210),Y=l-150;if(r){u.fillStyle=s.text3,u.font=`600 16px ${V}`;let me=`${r.kind[0]?.toUpperCase()??""}${r.kind.slice(1)} \xB7 ${r.category}`;u.fillText(me,U,H),H+=46,bn(u,s,"00","WHAT IT IS",U,H,26),H+=52;let He=Xn(u,s,r.definition,U,H,g,27,37,Y);He!==null&&(H=He+8);let K=r.synonyms.slice(0,5);if(K.length>0&&H+70<Y){u.fillStyle=s.text3,u.font=`600 14px ${V}`,A(u,"ALSO CALLED",U,H,2.4),H+=30,u.fillStyle=s.text2,u.font=`400 20px ${V}`;for(let Fe of De(u,K.join(" \xB7 "),g).slice(0,2))u.fillText(Fe,U,H),H+=28}}u.fillStyle=s.accent,u.fillRect(U,l-132,g,2),u.fillStyle=s.text3,u.font=`600 14px ${V}`,A(u,"IN THIS GALLERY",U,l-102,2.4),u.fillStyle=s.text2,u.font=`400 19px ${V}`;let ie=["01 The model","02 Where it is in the body","03 How it works","05 In practice","07 Cinema"].join("   \xB7   ");De(u,ie,g).slice(0,2).forEach((me,He)=>u.fillText(me,U,l-72+He*26));let oe=r?.review.status==="reviewed"?"Reviewed":"Not yet reviewed by a qualified reviewer",ue=r?.evidence?`Evidence: ${ro[r.evidence.grade]} \xB7 `:"";u.fillStyle=s.text3,u.font=`400 15px ${V}`,u.fillText(`${ue}${oe}`,U,l-18);let ae=E+6;u.fillStyle=s.accent,u.font=`600 15px ${V}`;let we=A(u,"01  THE MODEL",ae,P+28,2.4);return u.fillStyle=s.text3,u.font=`400 15px ${V}`,u.fillText("Illustrative 3D model: conceptual, not to scale.",ae+we+18,P+28),u.fillStyle=s.text3,u.font=`600 13px ${V}`,A(u,`ABOVE \xB7 INSTALLATION \xB7 ${e.shape.toUpperCase()} \xB7 CONCEPTUAL, NOT TO SCALE`,ae,P+54,2),c}function Dr(o){let[r,e]=Ye(1536,893,.84),s=se.node(o),a=s?.content,i=ke(o),l=gn(i.wall,i.accent);if(e.textBaseline="alphabetic",!s||!a)return r;e.fillStyle=l.accent,e.font=`500 108px ${j}`;let c=A(e,"03",40,118,4);e.fillStyle=l.text,e.font=`500 40px ${j}`,A(e,"THE LESSON",40+c+30,78,9),e.fillStyle=l.text3,e.font=`600 16px ${V}`,A(e,`${s.name.toUpperCase()} \xB7 ${o}`,40+c+32,114,3);let u=[...a.explanation,...a.mechanisms],f=680,d=40,h=40+f+96,m=196,p=833,b=(v,E,R,S,P,C)=>{bn(e,l,E,R,v,m,24);let U=m+54,x=0;for(let g of S){let y=Xn(e,l,g,v,U,f,P,C,p);if(y===null)break;U=y+10,x++}x<S.length&&(e.fillStyle=l.text3,e.font=`400 17px ${V}`,e.fillText(`${S.length-x} more in the store panel and on the node page.`,v,Math.min(U+4,p+30)))};if(u.length>0)b(d,"03","HOW IT WORKS",u,23,32),b(h,"04","WHAT IT DOES",a.functions,23,32);else{b(d,"04","WHAT IT DOES",a.functions,25,35);let v=a.measurementConcepts.length>0?a.measurementConcepts:a.limitations;if(v.length>0)b(h,"04",a.measurementConcepts.length>0?"HOW IT IS MEASURED":"LIMITS",v,23,32);else{bn(e,l,"\xB7\xB7","IN PREPARATION",h,m,24),e.fillStyle=l.text2,e.font=`400 22px ${V}`;let E=m+54;for(let R of De(e,"This entry is structural: what it is and what it does. How it works, how it is measured and its limits are still being researched and sourced.",f))e.fillText(R,h,E),E+=32}}return e.fillStyle=l.text3,e.font=`400 16px ${V}`,e.fillText("Illustrative and educational, with each claim\u2019s evidence status. Sources and the full entry: the store panel or the node page.",40,877),r}function Br(o){let[r,e]=Ye(1024,984,.88),s=se.node(o),a=s?.content,i=ke(o),l=gn(i.wall,i.accent);if(e.textBaseline="alphabetic",!s)return r;let c=36,u=952;e.fillStyle=l.accent,e.font=`500 84px ${j}`;let f=A(e,"05",c,96,3);e.fillStyle=l.text,e.font=`500 34px ${j}`,A(e,"IN PRACTICE",c+f+24,66,7),e.fillStyle=l.text3,e.font=`600 15px ${V}`,A(e,"NU\xCFTRIX \xB7 MU\xCFTRIX \xB7 THE OPERATING SYSTEMS",c+f+26,96,2.4);let d=160,h=se.factorsOf(o).flatMap(v=>v.links.filter(E=>E.node===o).map(E=>({head:to.find(R=>R.id===v.discipline)?.name??"",name:v.name,claim:E.effect}))),m=se.systemsOf(o).map(v=>({head:no.find(E=>E.id===v.system)?.name??"",name:"",claim:v.rationale})),p=h.length>0?h:m;if(p.length===0){e.fillStyle=l.text2,e.font=`400 21px ${V}`;for(let v of De(e,"No nutrition, movement or operating-system examples are linked to this subject yet.",u))e.fillText(v,c,d),d+=30;d+=14}let b=0;for(let v of p){if(d>560||(e.font=`400 21px ${V}`,d+34+De(e,v.claim.text,u-14).length*29+21*1.4>600))break;e.fillStyle=l.accent,e.fillRect(c,d-15,4,19),e.fillStyle=l.text3,e.font=`600 15px ${V}`;let E=A(e,v.head,c+14,d,2.4);v.name&&(e.fillStyle=l.text,e.font=`600 20px ${V}`,e.fillText(v.name,c+14+E+14,d+1)),d+=34;let R=Xn(e,l,v.claim,c+14,d,u-14,21,29,600);if(R===null)break;d=R+14,b++}b<p.length&&(e.fillStyle=l.text3,e.font=`400 16px ${V}`,e.fillText(`${p.length-b} more in the store panel.`,c+14,d),d+=30),d=Math.max(d+16,610),bn(e,l,"06","CONNECTED GALLERIES",c,d,22),d+=50;for(let v of se.relationshipsOf(o).slice(0,4)){if(d>914)break;let E=v.from===o,R=se.node(E?v.to:v.from),S=R?tt(R.id):void 0;if(!R)continue;let P=ao.find(U=>U.id===v.type)?.verb??v.type;e.fillStyle=pe[R.tier],vn(e,c,d-22,62,30,7),e.fill(),e.fillStyle="#FFFFFF",e.font=`500 16px ${j}`,e.fillText(R.id,c+9,d-1),e.fillStyle=l.text,e.font=`600 20px ${V}`;let C=e.measureText(R.name).width;e.fillText(R.name,c+76,d),e.fillStyle=l.text3,e.font=`400 16px ${V}`,e.fillText(`${E?`This ${P}`:`${P[0]?.toUpperCase()??""}${P.slice(1)} this`} \xB7 Level ${$e((S?.level??0)+1)}, ${S?Vr[S.bay.id].toLowerCase():""} wing`,c+76+C+14,d),d+=50}return e.fillStyle=l.text3,e.font=`400 15px ${V}`,e.fillText("Every line comes from the registry, with its evidence status.",c,966),r}function Ur(o){let[r,e]=Ye(1024,128,.75),s=se.node(o),a=ke(o),i=gn(a.wall,a.accent),l=s?.content?.rendering;if(!l)return r;e.textBaseline="alphabetic",e.fillStyle=i.accent,e.font=`600 15px ${V}`;let c=A(e,"THE SUBJECT, RENDERED",4,24,2.4);return e.fillStyle=i.text3,e.font=`400 15px ${V}`,e.fillText("Illustration: conceptual, not to scale.",4+c+16,24),e.fillStyle=i.text2,e.font=`400 18px ${V}`,De(e,l.caption,1016).slice(0,3).forEach((u,f)=>e.fillText(u,4,56+f*25)),r}function $r(o){let[r,e]=Ye(384,544),s=se.node(o),a=tt(o),i=s?.tier??"T01";e.fillStyle="rgba(11,13,16,0.9)",e.fillRect(0,0,384,544),e.strokeStyle=_t,e.lineWidth=3,e.strokeRect(1.5,1.5,381,541),e.fillStyle=pe[i],e.fillRect(30,40,4,64),e.textBaseline="alphabetic",e.font=`500 112px ${j}`,A(e,o,26,210,6),e.fillStyle=Ue,e.fillRect(30,240,46,4),e.fillStyle="#F1F3F5";let l=34;e.font=`500 ${l}px ${j}`;let c=(s?.name??o).toUpperCase();for(;A(e,c,0,0,7,!1)>324&&l>18;)l-=2,e.font=`500 ${l}px ${j}`;A(e,c,30,300,7),e.fillStyle=Xe,e.font=`400 18px ${V}`;let u=340;for(let f of De(e,s?.content?.category??"",324).slice(0,2))e.fillText(f,30,u),u+=25;return e.font=`600 13px ${V}`,A(e,`LEVEL ${$e((a?.level??0)+1)} \xB7 STORE ${$e(a?.number??0)}`,30,478,3.5),A(e,"LIVE MODEL \xB7 BODY MAP \xB7 LESSON",30,504,3),r}function Hr(o){let[n,r]=Ye(384,384),e=se.node(o),s=e?.tier??"T01",a=384/2;r.beginPath(),r.arc(a,a,a-6,0,Math.PI*2),r.lineWidth=10,r.strokeStyle="rgba(200,206,212,0.95)",r.stroke(),r.beginPath(),r.arc(a,a,a-20,0,Math.PI*2),r.lineWidth=3,r.strokeStyle=pe[s],r.stroke(),r.strokeStyle="rgba(200,206,212,0.85)",r.lineWidth=2;for(let u=0;u<48;u++){let f=u/48*Math.PI*2,d=a-30,h=a-(u%12===0?50:u%4===0?42:36);r.beginPath(),r.moveTo(a+Math.sin(f)*d,a-Math.cos(f)*d),r.lineTo(a+Math.sin(f)*h,a-Math.cos(f)*h),r.stroke()}r.textBaseline="alphabetic",r.fillStyle="rgba(214,219,224,0.96)",r.font=`500 70px ${j}`;let i=A(r,o,0,0,6,!1);A(r,o,a-i/2,a+16,6),r.font=`600 16px ${V}`;let l=(e?.name??"").toUpperCase(),c=A(r,l,0,0,5,!1);return A(r,l,a-c/2,a+56,5),r.fillStyle=Ue,r.fillRect(a-16,a+72,32,3),n}function Yn(o){return new Promise(t=>{let n=new Image;n.decoding="async",n.onload=()=>t(n),n.onerror=()=>t(null),n.src=o})}var fs={w:1280,h:720};function Wr(o){let{w:t,h:n}=fs,[r,e]=Ye(t,n),s=se.node(o),a=s?.tier??"T01",i=se.videosOf(o),l=e.createRadialGradient(t*.42,n*.38,40,t*.5,n*.5,t*.75);l.addColorStop(0,"#1B1D21"),l.addColorStop(1,"#060708"),e.fillStyle=l,e.fillRect(0,0,t,n);let c=e.createLinearGradient(0,0,t*.6,0);c.addColorStop(0,`${pe[a]}55`),c.addColorStop(1,`${pe[a]}00`),e.fillStyle=c,e.fillRect(0,0,t*.6,6),e.fillStyle="rgba(255,255,255,0.025)";for(let R=0;R<n;R+=4)e.fillRect(0,R,t,1);e.textBaseline="alphabetic",e.fillStyle=Ue,e.font=`600 26px ${V}`;let u=A(e,"07",56,78,1);e.fillStyle="#FFFFFF",e.font=`500 28px ${j}`,A(e,"XI THEATER",56+u+18,78,8),e.font=`500 26px ${j}`;let f=(s?.name??o).toUpperCase(),d=A(e,f,0,0,4,!1);e.font=`500 22px ${j}`;let h=A(e,o,0,0,2,!1)+26,m=t-56;if(e.fillStyle="#FFFFFF",e.font=`500 26px ${j}`,A(e,f,m-d,78,4),e.fillStyle=pe[a],vn(e,m-d-18-h,50,h,38,8),e.fill(),e.fillStyle="#FFFFFF",e.font=`500 22px ${j}`,A(e,o,m-d-18-h+13,77,2),e.fillStyle="#E7C9A0",e.font=`600 15px ${V}`,A(e,i.length>0?`NOW SHOWING \xB7 ${i.length===1?"ONE FILM":`${i.length} FILMS`}`:"PROGRAMME IN PREPARATION",56,122,3.5),i.length===0){e.fillStyle="#FFFFFF",e.font=`500 40px ${j}`;let R="PROGRAMME IN PREPARATION",S=A(e,R,0,0,6,!1);A(e,R,(t-S)/2,n/2,6),e.fillStyle="#9FB0C2",e.font=`400 22px ${V}`;let P="No video meets the bar for this subject yet. The other stations teach it.";e.fillText(P,(t-e.measureText(P).width)/2,n/2+46)}let p=i.length===1?760:560,b=48,v=i.length===1?(t-p)/2:(t-p*2-b)/2;i.forEach((R,S)=>{let P=v+S*(p+b),C=168;_r(e,P,C,p,400,20),e.fillStyle="rgba(255,255,255,0.055)",e.fill(),e.strokeStyle="rgba(255,255,255,0.16)",e.lineWidth=2,e.stroke(),e.fillStyle=Ue,e.font=`600 16px ${V}`;let x=A(e,$e(S+1),P+32,C+52,1);e.fillStyle="#FFFFFF",A(e,oo[R.role].toUpperCase(),P+32+x+12,C+52,3),e.strokeStyle="#E7C9A0",e.lineWidth=3,e.beginPath(),e.arc(P+p-62,C+58,28,0,Math.PI*2),e.stroke(),e.fillStyle="#E7C9A0",e.beginPath(),e.moveTo(P+p-70,C+44),e.lineTo(P+p-48,C+58),e.lineTo(P+p-70,C+72),e.closePath(),e.fill(),e.fillStyle="#FFFFFF",e.font=`500 30px ${j}`;let g=C+124;for(let F of De(e,R.title,p-64).slice(0,3))e.fillText(F,P+32,g),g+=40;e.fillStyle="#C9D6E3",e.font=`600 18px ${V}`,e.fillText(`${R.channel} \xB7 ${R.published}`,P+32,g+10),e.fillStyle="#9FB0C2",e.font=`400 19px ${V}`;let y=g+52;for(let F of De(e,R.about,p-64).slice(0,3))e.fillText(F,P+32,y),y+=27}),e.fillStyle="#9FB0C2",e.font=`400 16px ${V}`;let E=i.length>0?"Click the screen or press Enter to watch. Plays from YouTube in privacy-enhanced mode; nothing loads from YouTube until you press play.":"";return e.fillText(E,56,n-74),e.fillText(i.length>0?"Chosen for teaching from established educational publishers. Their claims are theirs; TRIARC does not cite them as sources.":"",56,n-48),r}function hs(o,t,n,r){let e=(c,u,f)=>(u[0]-c[0])*(f[1]-c[1])-(u[1]-c[1])*(f[0]-c[0]),s=e(n,r,o),a=e(n,r,t),i=e(o,t,n),l=e(o,t,r);return(s>0&&a<0||s<0&&a>0)&&(i>0&&l<0||i<0&&l>0)}var jn=.35,zr=1,ms=80*Math.PI/180,ps=17,bs=2,Kn=.18,Gr=1.2,vs=12,kr={gallery:1,warm:1.04,chroma:1.16,noir:1.3,cinema:1.3},gs={store:"model",board:"body",theater:"theater",window:"front",print:"model",directory:null},Xr=class{canvas;host;opts;gl=null;renderer=null;world=null;live=null;rig=new mn;input=null;raf=0;lastFrame=0;lastRender=0;time=0;disposed=!1;failed=!1;visible=!0;dirty=!0;ready=!1;reduced;scale=.9;exposure=Ee.exposure;ema=16;calm=0;slowSince=0;busyFrames=0;wasBusy=!1;proj=wt();view=wt();viewProj=wt();invViewProj=wt();pointer=null;pointerDirty=!1;hover=null;focus=null;focusAt=0;snapKey="";snapAt=0;highlightLevel=null;fronts;opaqueWalls;holoCache=new Map;boards=new Map;cinemaScreens=new Map;drawnHolos=[];theaterPlaying=!1;dim=0;theaterKey="";uploaded=!1;resizeObserver=null;livePrev=null;postersLoading=new Set;observer=null;onLost=t=>{t.preventDefault(),this.fail("lost")};fixedScale;fixedDpr;constructor(t,n,r){this.canvas=t,this.host=n,this.opts=r;let e=globalThis.__OUTLET_SCALE__;this.fixedScale=typeof e=="number"&&e>0&&e<=1?e:null,this.fixedScale&&(this.scale=this.fixedScale);let s=globalThis.__OUTLET_DPR__;this.fixedDpr=typeof s=="number"&&s>=1&&s<=3?s:null,this.reduced=r.reducedMotion,this.rig.reducedMotion=r.reducedMotion,this.fronts=zt.map(c=>({node:c.node,level:c.level,centre:[c.door[0],Te(c.level)+2.8,c.door[1]],normal:[-c.bay.inward[0],0,-c.bay.inward[1]],u:[c.bay.along[0],0,c.bay.along[1]]}));let a=B,i=_;this.opaqueWalls=[...[-1,1].flatMap(c=>[-1,1].map(u=>({a:[c*i,u*i],b:[c*a,u*a]}))),{a:[i,0],b:[a,0]},{a:[0,-i],b:[0,-a]},{a:[-i,0],b:[-a,0]},...zt.flatMap(c=>{let u=c.rooms,f=c.bay.inward,d=b=>[b[0]+f[0]*u.stele.thick,b[1]+f[1]*u.stele.thick],h=(b,v)=>[u.partition.door[0]+(b[0]-u.partition.door[0])*v,u.partition.door[1]+(b[1]-u.partition.door[1])*v],m=Math.hypot(u.partition.a[0]-u.partition.door[0],u.partition.a[1]-u.partition.door[1]),p=Math.hypot(u.partition.b[0]-u.partition.door[0],u.partition.b[1]-u.partition.door[1]);return[{a:u.stele.a,b:u.stele.b},{a:d(u.stele.a),b:d(u.stele.b)},{a:u.partition.a,b:h(u.partition.a,u.partition.doorHalf/m)},{a:h(u.partition.b,u.partition.doorHalf/p),b:u.partition.b}]})];let l=t.getContext("webgl2",{antialias:!0,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(!l){queueMicrotask(()=>this.fail("webgl"));return}this.gl=l,t.addEventListener("webglcontextlost",this.onLost);try{this.world=wr();for(let u of this.world.screens)u.kind==="board"&&u.node&&this.boards.set(u.node,u.rect),u.kind==="theater"&&u.node&&this.cinemaScreens.set(u.node,u.rect);let c=xs(l);this.renderer=new dn(l,this.world,c),n.dataset.quality=c,!this.fixedScale&&jr(l)&&(this.scale=.5),this.live=new on(l)}catch(c){console.warn("XI Outlet could not start its renderer",c),queueMicrotask(()=>this.fail("compile"));return}this.rig.goTo(r.start,!0),this.input=new nn(n,{click:(c,u)=>this.click(c,u),hover:(c,u)=>{this.pointer=c<0?null:[c,u],this.pointerDirty=!0},back:()=>this.back(),activate:()=>this.activate(),poke:()=>{this.dirty=!0},blocked:()=>document.querySelector("dialog[open]")!==null}),typeof IntersectionObserver<"u"&&(this.observer=new IntersectionObserver(c=>{for(let u of c)this.visible=u.isIntersecting;this.visible&&(this.dirty=!0)}),this.observer.observe(n)),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.dirty=!0}),this.resizeObserver.observe(n)),Lr().then(()=>{this.disposed||!this.renderer||(this.renderer.setAtlas(Ir()),this.dirty=!0)}),this.raf=requestAnimationFrame(this.tick)}goTo(t,n=this.reduced){this.renderer&&(this.rig.goTo(t,n),this.dirty=!0)}activate(){let t=this.focus;t&&(t.kind==="store"&&t.part==="theater"&&this.seatedAt()===t.node?this.opts.onSelect?.(t):t.kind==="store"?this.goTo(Yr(t.node,t.part)):t.kind==="level"?this.goTo({kind:"level",level:t.level}):(t.kind==="lift"||t.kind==="directory")&&this.opts.onSelect?.(t))}back(){if(this.theaterPlaying){this.setTheaterPlaying(!1),this.opts.onTheaterExit?.();return}this.rig.mode!=="exterior"&&this.goTo({kind:"exterior"})}setTheaterPlaying(t){this.theaterPlaying!==t&&(this.theaterPlaying=t,this.dirty=!0)}seatedAt(){if(this.rig.mode!=="walk")return null;let t=this.rig.camera();if(t.level===null)return null;for(let n of he[t.level]?.stores??[]){let r=n.stations.theater;if(Math.hypot(r.p[0]-t.eye[0],r.p[1]-t.eye[2])<.9)return n.node}return null}setReducedMotion(t){this.reduced=t,this.rig.reducedMotion=t,this.dirty=!0}highlight(t){this.highlightLevel=t,this.dirty=!0}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.input?.dispose(),this.observer?.disconnect(),this.resizeObserver?.disconnect(),this.canvas.removeEventListener("webglcontextlost",this.onLost),this.live?.dispose(),this.renderer?.dispose(),this.gl?.getExtension("WEBGL_lose_context")?.loseContext(),this.gl=null}fail(t){this.failed||this.disposed||(this.failed=!0,cancelAnimationFrame(this.raf),this.opts.onFail(t))}tick=t=>{if(this.disposed||this.failed)return;if(this.raf=requestAnimationFrame(this.tick),!this.visible||document.hidden){this.lastFrame=0;return}let n=this.lastFrame?Math.min(.5,(t-this.lastFrame)/1e3):1/60;this.lastFrame=t;let r=this.input?.consume();this.theaterPlaying&&r&&(r.forward!==0||r.strafe!==0||r.turn!==0||r.zoom!==0?(this.setTheaterPlaying(!1),this.opts.onTheaterExit?.()):r={...r,lookX:0,lookY:0});let e=r?this.rig.update(n,r):!1;this.reduced||(this.time+=n);let s=this.theaterPlaying?1:0,a=this.dim!==s;a&&(this.dim=this.reduced||Math.abs(s-this.dim)<.02?s:this.dim+(s-this.dim)*Math.min(1,n*5));let i=e||this.rig.travelling||this.dirty||this.pointerDirty||a;!i&&(this.reduced||this.theaterPlaying||t-this.lastRender<33)||this.render(t,i)};render(t,n){let r=this.gl,e=this.renderer;if(!r||!e)return;let s=this.lastRender?t-this.lastRender:16;this.lastRender=t;let a=this.uploaded;this.uploaded=!1,this.dirty=!1;let i=this.rig.camera(),l=this.fixedDpr??Math.min(window.devicePixelRatio||1,e.tier==="cinematic"?1.5:2),c=Math.max(1,this.canvas.clientWidth),u=Math.max(1,this.canvas.clientHeight),f=Math.max(1,Math.round(c*l*this.scale)),d=Math.max(1,Math.round(u*l*this.scale));(this.canvas.width!==f||this.canvas.height!==d)&&(this.canvas.width=f,this.canvas.height=d);let h=Math.min(1,Math.max(0,(i.fov-bt)/(Gn-bt))),m=c/u,p=i.fov+Math.max(0,Math.min(ms,2*Math.atan(1/m))-bt)*(1-h);Ao(this.proj,p,m,i.level===null?.5:.08,3200),c>640&&(this.proj[8]=(this.proj[8]??0)-.16*h);let b=So(i.heading,i.pitch);Xt(this.view,i.eye,Sn(i.eye,b)),Ft(this.viewProj,this.proj,this.view),Yt(this.invViewProj,this.viewProj);let v=J(ge(b,[0,1,0])),E=ge(v,b);this.pointerDirty&&(this.pointerDirty=!1,this.hover=this.pointer?this.pickClient(this.pointer[0],this.pointer[1]):null,this.host.style.cursor=this.hover&&this.hover.kind!=="floor"?"pointer":""),t-this.focusAt>140&&(this.focusAt=t,this.focus=this.rig.mode==="exterior"?this.hover:this.pick(0,0),this.focus?.kind==="floor"&&(this.focus=null)),e.setRibbon(this.rig.routeAhead()),this.feedTextures(i.level,i.eye),this.updateLive(i.level,i.eye,b,s);let R=this.holoFrame(i.level,i.eye,b);this.drawnHolos=R.map(x=>x.holo.node);let P=this.rig.mode!=="exterior"&&Math.max(Math.abs(i.eye[0]),Math.abs(i.eye[2]))<B-.3&&i.eye[1]<te?Ee.exposureInside*this.roomGain(i.level,i.eye):Ee.exposure;this.exposure=this.reduced?P:this.exposure+(P-this.exposure)*Math.min(1,s/1e3*3),Math.abs(P-this.exposure)<.01?this.exposure=P:this.dirty=!0;let C=this.rig.mode==="exterior"?this.highlightLevel??(this.hover?.kind==="level"?this.hover.level:null):null,U=C!==null?Te(C):0;if(e.draw({viewProj:this.viewProj,invViewProj:this.invViewProj,eye:i.eye,right:v,up:E,time:this.time,cabY:this.rig.cabY(),fade:1,holos:R,pxPerMetre:d/(2*Math.tan(p/2)),dim:this.dim,mirrorY:this.rig.mode==="exterior"||i.level===null||i.level===0?-.05:Te(i.level),level:this.rig.mode==="exterior"?null:i.level,exposure:this.exposure,highlight:C!==null?{min:[-B-.45,U-re-.05,-B-.45],max:[B+.45,U+Be-re,B+.45],rgba:[.89,.14,.17,.16]}:null},f,d),n&&this.wasBusy&&!a&&this.adapt(s,t),this.wasBusy=n,this.ready||(this.ready=!0,this.host.dataset.state="live",this.opts.onReady()),this.emit(t,i.level,i.eye,i.heading),this.reportTheater(c,u),this.opts.onFrame){let x=Float32Array.from(this.viewProj);this.opts.onFrame({mode:this.rig.mode,level:i.level,x:i.eye[0],z:i.eye[2],eyeY:i.eye[1],heading:i.heading,pitch:i.pitch,width:c,height:u,project:(g,y,F)=>{let L=(x[3]??0)*g+(x[7]??0)*y+(x[11]??0)*F+(x[15]??0);if(L<.05)return null;let z=((x[0]??0)*g+(x[4]??0)*y+(x[8]??0)*F+(x[12]??0))/L,N=((x[1]??0)*g+(x[5]??0)*y+(x[9]??0)*F+(x[13]??0))/L;return[(z+1)/2*c,(1-N)/2*u,L]},blocked:(g,y)=>{let F=[i.eye[0],i.eye[2]];return this.opaqueWalls.some(L=>hs(F,[g,y],L.a,L.b))}})}}reportTheater(t,n){let r=this.seatedAt(),e=r?this.cinemaScreens.get(r):void 0,s=null;if(r&&e){let i=(d,h)=>{let m=e.centre[0]+e.u[0]*e.hu*d+e.v[0]*e.hv*h,p=e.centre[1]+e.u[1]*e.hu*d+e.v[1]*e.hv*h,b=e.centre[2]+e.u[2]*e.hu*d+e.v[2]*e.hv*h,v=this.viewProj,E=(v[0]??0)*m+(v[4]??0)*p+(v[8]??0)*b+(v[12]??0),R=(v[1]??0)*m+(v[5]??0)*p+(v[9]??0)*b+(v[13]??0),S=(v[3]??0)*m+(v[7]??0)*p+(v[11]??0)*b+(v[15]??0);return S<.05?null:[(E/S+1)/2*t,(1-R/S)/2*n]},l=i(-1,1),c=i(1,1),u=i(1,-1),f=i(-1,-1);l&&c&&u&&f&&(s={node:r,corners:[l,c,u,f]})}let a=s?`${this.theaterPlaying?"playing":"seated"}:${s.node}:${s.corners.map(i=>`${i[0].toFixed(1)},${i[1].toFixed(1)}`).join(";")}`:"";a!==this.theaterKey&&(this.theaterKey=a,this.host.dataset.theater=s?this.theaterPlaying?"playing":"seated":"",this.opts.onTheaterScreen?.(s))}adapt(t,n){if(!(this.fixedScale||++this.busyFrames<5)){if(this.ema=this.ema*.85+t*.15,this.renderer?.tier==="cinematic"&&this.scale<=.6&&this.ema>40){this.renderer.setTier("basic"),this.host.dataset.quality="basic",this.scale=.85,this.ema=24,this.calm=0;return}this.ema>42&&this.scale>jn?(this.scale=Math.max(jn,this.scale*.88),this.calm=0):this.ema<22?++this.calm>50&&this.scale<zr&&(this.scale=Math.min(zr,this.scale*1.08),this.calm=0):this.calm=0,this.scale<=jn&&this.ema>650?this.slowSince?n-this.slowSince>9e3&&this.fail("slow"):this.slowSince=n:this.slowSince=0}}roomGain(t,n){let r=t===null?void 0:he[t];if(!r)return 1;let e=Mn(r,[n[0],n[2]]);return e.kind!=="store"?1:Math.min(Math.abs(n[0]),Math.abs(n[2]))>_?kr.cinema:kr[ke(e.store.node).mood]}posterUrl(t,n){let r=se.node(t)?.content?.rendering?.asset;return r?`${this.opts.base}visuals/${r}-${n}.webp`:null}feedTextures(t,n){let r=this.renderer;if(!r)return;for(let i of zt){let l=t===i.level?640:320,c=l===640?2:1,u=`store:${i.node}`;if(r.screenGrade(u)>=c)continue;let f=`${u}@${l}`;if(this.postersLoading.has(f)||this.postersLoading.size>=4)continue;let d=this.posterUrl(i.node,l);d&&(this.postersLoading.add(f),Yn(d).then(h=>{if(this.postersLoading.delete(f),!h||this.disposed||!this.renderer)return;this.renderer.setScreenImage(u,h,c,!0);let m=this.rig.camera().level;(m===null||m===i.level)&&(this.dirty=!0,this.uploaded=!0)}))}if(t===null)return;let e=he[t];if(!e)return;let s=`directory:${t}`;if(r.screenGrade(s)<3)r.setScreenImage(s,Nr(t),3,!0),this.dirty=!0,this.uploaded=!0;else{let i=e.stores.slice().sort((l,c)=>Math.hypot(l.display[0]-n[0],l.display[1]-n[2])-Math.hypot(c.display[0]-n[0],c.display[1]-n[2]));e:for(let l of i){let c=this.nearStore(l,n);for(let[u,f,d,h]of this.storeCanvases(l))if(!(h&&!c)&&!(r.screenGrade(u)>=3)){r.setScreenImage(u,f(),3,!0,d),this.dirty=!0,this.uploaded=!0;break e}}}for(let i of e.stores){if(!this.nearStore(i,n))continue;let l=`print:${i.node}`;if(r.screenGrade(l)>=3||this.postersLoading.has(l)||this.postersLoading.size>=4)continue;let c=this.posterUrl(i.node,640);c&&(this.postersLoading.add(l),Yn(c).then(u=>{this.postersLoading.delete(l),!(!u||this.disposed||!this.renderer)&&(this.renderer.setScreenImage(l,u,3,!0),this.dirty=!0,this.uploaded=!0)}))}let a=new Set([s]);for(let i of e.stores){for(let[l]of this.storeCanvases(i))a.add(l);a.add(`print:${i.node}`),a.add(`holo:${i.node}`)}r.evict(i=>a.has(i))}nearStore(t,n){return Math.hypot(t.door[0]-n[0],t.door[1]-n[2])<vs}storeCanvases(t){let n=t.node;return[[`banner:${n}`,()=>$r(n),!0,!1],[`stele:${n}`,()=>Or(n),!0,!0],[`board:${n}`,()=>Cr(n,this.boardSide(t)>0),!1,!0],[`lesson:${n}`,()=>Dr(n),!0,!0],[`examples:${n}`,()=>Br(n),!0,!0],[`caption:${n}`,()=>Ur(n),!0,!0],[`theater:${n}`,()=>Wr(n),!1,!0],[`medallion:${n}`,()=>Hr(n),!0,!0]]}boardSide(t){let n=this.boards.get(t.node);return n?(t.holo.at[0]-n.centre[0])*n.u[0]+(t.holo.at[1]-n.centre[2])*n.u[2]>=0?1:-1:1}holoOf(t){return this.holoCache.has(t)||this.holoCache.set(t,Do(t)),this.holoCache.get(t)??null}holoFrame(t,n,r){if(t===null||this.rig.mode==="exterior")return[];let e=Math.hypot(r[0],r[2])||1,s=[];for(let i of he[t]?.stores??[]){let l=i.holo.at[0]-n[0],c=i.holo.at[1]-n[2],u=Math.hypot(l,c);if(u>ps||u>1.6&&(l*r[0]+c*r[2])/(u*e)<.15)continue;let f={a:[n[0],n[2]],b:i.holo.at};this.opaqueWalls.every(d=>wn(f,d)>.05)&&s.push({s:i,d:u})}s.sort((i,l)=>i.d-l.d);let a=[];for(let{s:i}of s.slice(0,bs).reverse()){let l=this.holoDraw(i);l&&a.push(l)}return a}holoDraw(t){let n=this.holoOf(t.node);if(!n)return null;let r=this.time,e=Math.PI-t.holo.facing+(this.reduced?0:Math.sin(r*.35)*.32),s=Gr,a=Math.cos(e)*s,i=Math.sin(e)*s,[l,c]=t.holo.at,u=Te(t.level)+Kn,f=new Float32Array([a,0,-i,0,0,s,0,0,i,0,a,0,l,u,c,1]),d=v=>[a*v[0]+i*v[2]+l,v[1]*s+u,-i*v[0]+a*v[2]+c],h=new Float32Array(n.targets.length*4);n.targets.forEach((v,E)=>{let R=d(v.at);h.set([R[0],R[1],R[2],v.r*s],E*4)});let m=[],p=this.boards.get(t.node);if(p&&n.rows.length>0){let v={centre:p.centre,u:p.u,n:ht(p),hu:p.hu,hv:p.hv};for(let E of Bo(n,d,v,this.boardSide(t),kn(n.rows.length),30/Lt.w*p.hu*2)){let[R,S,P,C]=E.points;m.push(...R,...S,...S,...P,...P,...C)}}if(n.whole)for(let[R,S,P,C]of[[-.4,.02,1,1],[.4,.02,-1,1],[-.4,1.92,1,-1],[.4,1.92,-1,-1]]){let U=d([R,S,.14]);m.push(...d([R+P*.15,S,.14]),...U,...U,...d([R,S+C*.15,.14]))}let b=[];for(let[v,E,R]of[[.96,.5,.25],[1.52,.42,-.4]]){let P=this.reduced?0:r*R;for(let C=0;C<40;C+=2){let U=P+C/40*Math.PI*2,x=P+(C+1)/40*Math.PI*2;b.push(...d([Math.sin(U)*E,v,Math.cos(U)*E]),...d([Math.sin(x)*E,v,Math.cos(x)*E]))}}return{holo:n,model:f,rings:new Float32Array(b),leaders:new Float32Array(m),targets:h,scanY:this.reduced?-10:.05+(1-Math.abs(r*.2%2-1))*1.8,pulse:this.reduced?.4:.5+.5*Math.sin(r*2.2)}}updateLive(t,n,r,e){let s=this.live,a=this.renderer;if(!s||!a)return;let i=null;if(!this.reduced&&t!==null&&this.ema<(this.opts.liveBudget??60)){let u=18;for(let f of he[t]?.stores??[]){let d=f.display[0]-n[0],h=f.display[1]-n[2],m=Math.hypot(d,h);m<u&&d*r[0]+h*r[2]>-2&&(u=m,i=f.node)}}let l=i?`store:${i}`:null;if(this.livePrev&&this.livePrev.key!==l){let u=this.livePrev;this.livePrev=null,a.setScreenTexture(u.key,null,u.saved),s.showing=null,this.dirty=!0}if(!i||!l||!s.prepare(i))return;s.render(i,this.time,this.ema<24?0:66)&&this.livePrev?.key!==l&&(this.livePrev={key:l,saved:a.setScreenTexture(l,s.texture)})}pickClient(t,n){let r=this.canvas.getBoundingClientRect();return r.width===0||r.height===0?null:this.pick((t-r.left)/r.width*2-1,1-(n-r.top)/r.height*2)}pick(t,n){let{origin:r,dir:e}=Lo(this.invViewProj,t,n),s=this.rig.camera();if(this.rig.mode==="exterior"||s.level===null){let h=null,m=1/0;for(let p of he){let b=_o(r,e,[-B-.6,p.y-re,-B-.6],[B+.6,p.y+Be-re,B+.6]);b!==null&&b<m&&(m=b,h={kind:"level",level:p.index})}if(!h&&e[1]<0){let p=-r[1]/e[1];Math.hypot(r[0]+e[0]*p,r[2]+e[2]*p)<52&&(h={kind:"plaza"})}return h}let a=s.level,i=Te(a),l=null,c=1/0,u=[s.eye[0],s.eye[2]],f=h=>{let m=[r[0]+e[0]*h,r[2]+e[2]*h],p={a:u,b:[m[0]-(m[0]-u[0])*.02,m[1]-(m[1]-u[1])*.02]};return this.opaqueWalls.every(b=>wn(p,b)>.01)},d=(h,m)=>{h!==null&&h<c&&h<70&&f(h)&&(c=h,l=m)};for(let h of this.world?.screens??[]){if(h.level!==a)continue;let m=jt(r,e,h.rect.centre,ht(h.rect),h.rect.u,h.rect.v,h.rect.hu,h.rect.hv),p=gs[h.kind];h.kind==="directory"?d(m,{kind:"directory",level:a,distance:m??0}):h.node&&p&&d(m,{kind:"store",node:h.node,part:p,distance:m??0})}for(let h of this.world?.overlays??[]){if(h.level!==a||!h.station)continue;let m=jt(r,e,h.rect.centre,ht(h.rect),h.rect.u,h.rect.v,h.rect.hu,h.rect.hv);d(m,{kind:"store",node:h.node,part:h.station,distance:m??0})}for(let h of he[a]?.stores??[]){let m=ys(r,e,h.holo.at,.45,i+Kn,i+Kn+1.82*Gr);m!==null&&d(m,{kind:"store",node:h.node,part:"body",distance:m})}for(let h of this.fronts)h.level===a&&d(jt(r,e,h.centre,h.normal,h.u,[0,1,0],_/2,2.8),{kind:"store",node:h.node,part:"front",distance:0});{let h=e[0]*e[0]+e[2]*e[2],m=2*(r[0]*e[0]+r[2]*e[2]),p=r[0]*r[0]+r[2]*r[2]-be*be,b=m*m-4*h*p;if(h>1e-9&&b>=0){let v=(-m-Math.sqrt(b))/(2*h),E=r[1]+e[1]*v;v>0&&E>i&&E<i+Be&&d(v,{kind:"lift",distance:v})}}if(l){let h=l;return h.kind==="store"&&h.part==="front"?{...h,distance:c}:h}if(e[1]<-.02){let h=(i-r[1])/e[1],m=[r[0]+e[0]*h,r[2]+e[2]*h];if(h<40&&Ro(a,m))return{kind:"floor",level:a,p:m,distance:h}}return null}click(t,n){let r=this.pickClient(t,n);if(r)switch(r.kind){case"level":this.goTo({kind:"level",level:r.level});break;case"plaza":this.goTo({kind:"plaza"});break;case"store":this.goTo(Yr(r.node,r.part));break;case"floor":this.goTo({kind:"point",level:r.level,p:r.p});break;case"lift":case"directory":this.opts.onSelect?.(r);break}}emit(t,n,r,e){let s=n!==null?he[n]:void 0,a=[r[0],r[2]],i=s&&this.rig.mode!=="exterior"?Mn(s,a):null,l=null;if(i?.kind==="store"&&this.rig.mode==="walk")for(let h of Wt){let m=i.store.stations[h].p;Math.hypot(m[0]-a[0],m[1]-a[1])<.9&&(l=h)}let c={mode:this.rig.mode,level:this.rig.mode==="exterior"?null:n,region:i?.kind??null,store:i?.kind==="store"?i.store.node:null,focus:this.focus,x:a[0],z:a[1],heading:e,destination:this.rig.destination,live:this.live?.showing??null,station:l,holos:this.drawnHolos},u=c.focus,f=JSON.stringify([c.mode,c.level,c.region,c.store,u?[u.kind,"node"in u?u.node:"","level"in u?u.level:"","part"in u?u.part:""]:null,c.destination,c.live,c.station,c.holos]);if(f===this.snapKey&&t-this.snapAt<120)return;this.snapKey=f,this.snapAt=t;let d=this.host.dataset;d.mode=c.mode,d.level=c.level===null?"":String(c.level+1),d.store=c.store??"",d.live=c.live??"",d.region=c.region??"",d.station=c.station??"",d.holo=c.holos.join(","),d.frame=`${Math.round(this.ema)}ms@${this.scale.toFixed(2)}`,d.pos=`${c.x.toFixed(1)},${c.z.toFixed(1)}`,this.opts.onSnapshot(c)}};function Yr(o,t){return t==="front"?{kind:"store",node:o}:{kind:"store",node:o,station:t}}function ys(o,t,n,r,e,s){let a=o[0]-n[0],i=o[2]-n[1],l=t[0]*t[0]+t[2]*t[2];if(l<1e-9)return null;let c=2*(a*t[0]+i*t[2]),u=a*a+i*i-r*r,f=c*c-4*l*u;if(f<0)return null;let d=(-c-Math.sqrt(f))/(2*l);if(d<=0)return null;let h=o[1]+t[1]*d;return h>=e&&h<=s?d:null}function xs(o){let t=o.getExtension("EXT_color_buffer_float")!==null,n=globalThis.__OUTLET_QUALITY__;return n==="basic"?"basic":n==="cinematic"?t?"cinematic":"basic":t?jr(o)?"basic":"cinematic":"basic"}function jr(o){let t=String(o.getParameter(o.RENDERER));if(/^webkit webgl$/i.test(t)){let n=o.getExtension("WEBGL_debug_renderer_info");n&&(t=String(o.getParameter(n.UNMASKED_RENDERER_WEBGL)))}return/swiftshader|llvmpipe|softpipe|software|basic render/i.test(t)}export{Xr as OutletEngine};
