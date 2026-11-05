import{a as io}from"./chunk-B74KHNJF.js";import{$ as Wt,A as uo,Aa as So,B as fo,Ba as Ao,Ca as Po,D as ut,H as $t,I as ho,K as mo,L as po,N as O,O as _,P as D,Q as be,R as yt,S as Be,T as re,U as ve,V as xt,W as Ie,X as dt,Y as Ht,Z as Te,_ as Ve,a as Tn,aa as Ne,ba as Ae,ca as he,da as zt,ea as ft,ga as Ge,h as Rn,ha as bo,i as eo,ia as Et,ja as Gt,ka as vo,l as to,la as Mn,ma as wn,na as Fn,oa as go,pa as Tt,qa as kt,r as de,ra as yo,sa as xo,ua as Eo,va as To,wa as Ro,x as lo,xa as Mo,ya as wo,z as co,za as Fo}from"./chunk-IVC4QIOJ.js";import{b as no,c as oo,d as ro,e as ao,h as so}from"./chunk-LLCKFUDP.js";import{b as pe}from"./chunk-Z7BKUDRS.js";import"./chunk-KR4ZLU5I.js";var nt=Math.PI/180;function Sn(o,e){return[o[0]+e[0],o[1]+e[1],o[2]+e[2]]}function Pe(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function ia(o,e){return[o[0]*e,o[1]*e,o[2]*e]}function tt(o,e){return o[0]*e[0]+o[1]*e[1]+o[2]*e[2]}function ge(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}function _o(o){return Math.hypot(o[0],o[1],o[2])}function J(o){let e=_o(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function Ce(o,e,n){return o+(e-o)*n}function De(o,e,n){return Math.min(n,Math.max(e,o))}function Rt(o,e){let n=(e-o)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),n}function Mt(o){let e=De(o,0,1);return e*e*e*(e*(e*6-15)+10)}function Io(o,e=0){let n=Math.cos(e);return[Math.sin(o)*n,Math.sin(e),-Math.cos(o)*n]}function wt(){let o=new Float32Array(16);return o[0]=o[5]=o[10]=o[15]=1,o}function Vo(o,e,n,r,t){let a=1/Math.tan(e/2);return o.fill(0),o[0]=a/n,o[5]=a,o[10]=(t+r)/(r-t),o[11]=-1,o[14]=2*t*r/(r-t),o}function No(o,e,n,r,t,a,s){return o.fill(0),o[0]=2/(n-e),o[5]=2/(t-r),o[10]=-2/(s-a),o[12]=-(n+e)/(n-e),o[13]=-(t+r)/(t-r),o[14]=-(s+a)/(s-a),o[15]=1,o}function Xt(o,e,n,r=[0,1,0]){let t=J(Pe(e,n)),a=ge(r,t);_o(a)<1e-6&&(a=ge([0,0,1],t)),a=J(a);let s=ge(t,a);return o[0]=a[0],o[1]=s[0],o[2]=t[0],o[3]=0,o[4]=a[1],o[5]=s[1],o[6]=t[1],o[7]=0,o[8]=a[2],o[9]=s[2],o[10]=t[2],o[11]=0,o[12]=-tt(a,e),o[13]=-tt(s,e),o[14]=-tt(t,e),o[15]=1,o}function Ft(o,e,n){let r=new Float32Array(16);for(let t=0;t<4;t++)for(let a=0;a<4;a++){let s=0;for(let i=0;i<4;i++)s+=(e[i*4+a]??0)*(n[t*4+i]??0);r[t*4+a]=s}return o.set(r),o}function Yt(o,e){let n=b=>e[b]??0,r=n(0)*n(5)-n(1)*n(4),t=n(0)*n(6)-n(2)*n(4),a=n(0)*n(7)-n(3)*n(4),s=n(1)*n(6)-n(2)*n(5),i=n(1)*n(7)-n(3)*n(5),l=n(2)*n(7)-n(3)*n(6),u=n(8)*n(13)-n(9)*n(12),c=n(8)*n(14)-n(10)*n(12),d=n(8)*n(15)-n(11)*n(12),f=n(9)*n(14)-n(10)*n(13),h=n(9)*n(15)-n(11)*n(13),m=n(10)*n(15)-n(11)*n(14),p=r*m-t*h+a*f+s*d-i*c+l*u;return p?(p=1/p,o[0]=(n(5)*m-n(6)*h+n(7)*f)*p,o[1]=(n(2)*h-n(1)*m-n(3)*f)*p,o[2]=(n(13)*l-n(14)*i+n(15)*s)*p,o[3]=(n(10)*i-n(9)*l-n(11)*s)*p,o[4]=(n(6)*d-n(4)*m-n(7)*c)*p,o[5]=(n(0)*m-n(2)*d+n(3)*c)*p,o[6]=(n(14)*a-n(12)*l-n(15)*t)*p,o[7]=(n(8)*l-n(10)*a+n(11)*t)*p,o[8]=(n(4)*h-n(5)*d+n(7)*u)*p,o[9]=(n(1)*d-n(0)*h-n(3)*u)*p,o[10]=(n(12)*i-n(13)*a+n(15)*r)*p,o[11]=(n(9)*a-n(8)*i-n(11)*r)*p,o[12]=(n(5)*c-n(4)*f-n(6)*u)*p,o[13]=(n(0)*f-n(1)*c+n(2)*u)*p,o[14]=(n(13)*t-n(12)*s-n(14)*r)*p,o[15]=(n(8)*s-n(9)*t+n(10)*r)*p,o):null}function Lo(o,e){let n=(o[0]??0)*e[0]+(o[4]??0)*e[1]+(o[8]??0)*e[2]+(o[12]??0),r=(o[1]??0)*e[0]+(o[5]??0)*e[1]+(o[9]??0)*e[2]+(o[13]??0),t=(o[2]??0)*e[0]+(o[6]??0)*e[1]+(o[10]??0)*e[2]+(o[14]??0),a=(o[3]??0)*e[0]+(o[7]??0)*e[1]+(o[11]??0)*e[2]+(o[15]??0);return[n/a,r/a,t/a,a]}function Co(o,e,n){let r=Lo(o,[e,n,-1]),t=Lo(o,[e,n,1]),a=[r[0],r[1],r[2]];return{origin:a,dir:J(Pe([t[0],t[1],t[2]],a))}}function Do(o,e,n,r){let t=-1/0,a=1/0;for(let s=0;s<3;s++){let i=o[s]??0,l=e[s]??0,u=n[s]??0,c=r[s]??0;if(Math.abs(l)<1e-12){if(i<u||i>c)return null;continue}let d=(u-i)/l,f=(c-i)/l;if(d>f&&([d,f]=[f,d]),t=Math.max(t,d),a=Math.min(a,f),t>a)return null}return a<0?null:t>=0?t:a}function jt(o,e,n,r,t,a,s,i){let l=tt(e,r);if(Math.abs(l)<1e-9)return null;let u=tt(Pe(n,o),r)/l;if(u<0)return null;let c=Sn(o,ia(e,u)),d=Pe(c,n);return Math.abs(tt(d,t))>s||Math.abs(tt(d,a))>i?null:u}var St=13;function k(o){let e=parseInt(o.replace("#",""),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var ot=class{data=[];get vertexCount(){return this.data.length/St}toArray(){return new Float32Array(this.data)}vertex(e,n,r,t){this.data.push(e[0],e[1],e[2],n[0],n[1],n[2],r[0],r[1],r[2],t.gloss,t.emit??0,t.ao??1,t.pattern??0)}tri(e,n,r,t,a,s){let i=s??J(ge(Pe(n,e),Pe(r,e)));this.vertex(e,i,t,a),this.vertex(n,i,t,a),this.vertex(r,i,t,a)}quad(e,n,r,t,a,s,i){let l=i??J(ge(Pe(n,e),Pe(t,e)));this.tri(e,n,r,a,s,l),this.tri(e,r,t,a,s,l)}box(e,n,r,t,a={}){let[s,i,l]=e,[u,c,d]=n;a.top!==!1&&this.quad([s,c,l],[u,c,l],[u,c,d],[s,c,d],r,t,[0,1,0]),a.bottom!==!1&&this.quad([s,i,d],[u,i,d],[u,i,l],[s,i,l],r,t,[0,-1,0]),this.quad([s,i,d],[s,c,d],[u,c,d],[u,i,d],r,t,[0,0,1]),this.quad([u,i,l],[u,c,l],[s,c,l],[s,i,l],r,t,[0,0,-1]),this.quad([u,i,d],[u,c,d],[u,c,l],[u,i,l],r,t,[1,0,0]),this.quad([s,i,l],[s,c,l],[s,c,d],[s,i,d],r,t,[-1,0,0])}wall(e,n,r,t,a,s,i){let l=Math.hypot(n[0]-e[0],n[1]-e[1]);if(l<1e-6)return;let u=(n[0]-e[0])/l,c=(n[1]-e[1])/l,d=-c*(a/2),f=u*(a/2),h=(b,v,T)=>[b[0]+d*v,T,b[1]+f*v],m=[-c,0,u],p=[c,0,-u];this.quad(h(e,1,r),h(e,1,t),h(n,1,t),h(n,1,r),s,i,m),this.quad(h(n,-1,r),h(n,-1,t),h(e,-1,t),h(e,-1,r),s,i,p),this.quad(h(e,-1,t),h(n,-1,t),h(n,1,t),h(e,1,t),s,i,[0,1,0]),this.quad(h(e,1,r),h(n,1,r),h(n,-1,r),h(e,-1,r),s,i,[0,-1,0]),this.quad(h(e,-1,r),h(e,-1,t),h(e,1,t),h(e,1,r),s,i,[-u,0,-c]),this.quad(h(n,1,r),h(n,1,t),h(n,-1,t),h(n,-1,r),s,i,[u,0,c])}pane(e,n,r,t,a,s){let i=Math.hypot(n[0]-e[0],n[1]-e[1]);if(i<1e-6)return;let l=[-(n[1]-e[1])/i,0,(n[0]-e[0])/i];this.quad([e[0],r,e[1]],[e[0],t,e[1]],[n[0],t,n[1]],[n[0],r,n[1]],a,s,l)}prism(e,n,r,t,a,s={}){let i=e.length,l=u=>e[(u%i+i)%i]??[0,0];if(s.top!==!1)for(let u=1;u<i-1;u++)this.tri([l(0)[0],r,l(0)[1]],[l(u)[0],r,l(u)[1]],[l(u+1)[0],r,l(u+1)[1]],t,a,[0,1,0]);if(s.bottom!==!1)for(let u=1;u<i-1;u++)this.tri([l(0)[0],n,l(0)[1]],[l(u+1)[0],n,l(u+1)[1]],[l(u)[0],n,l(u)[1]],t,a,[0,-1,0]);if(s.sides!==!1){let u=e.reduce((d,f)=>d+f[0],0)/i,c=e.reduce((d,f)=>d+f[1],0)/i;for(let d=0;d<i;d++){let f=l(d),h=l(d+1),m=J([h[1]-f[1],0,-(h[0]-f[0])]),p=(f[0]+h[0])/2-u,b=(f[1]+h[1])/2-c;m[0]*p+m[2]*b<0&&(m=[-m[0],0,-m[2]]),this.quad([f[0],n,f[1]],[f[0],r,f[1]],[h[0],r,h[1]],[h[0],n,h[1]],t,a,m)}}}cylinder(e,n,r,t,a,s,i,l,u={}){let[c,d]=u.arc??[0,Math.PI*2],f=(m,p)=>[e+r*Math.sin(m),p,n+r*Math.cos(m)],h=m=>u.inward?[-Math.sin(m),0,-Math.cos(m)]:[Math.sin(m),0,Math.cos(m)];for(let m=0;m<s;m++){let p=c+(d-c)*m/s,b=c+(d-c)*(m+1)/s,v=f(p,t),T=f(p,a),w=f(b,a),A=f(b,t);this.vertex(v,h(p),i,l),this.vertex(T,h(p),i,l),this.vertex(w,h(b),i,l),this.vertex(v,h(p),i,l),this.vertex(w,h(b),i,l),this.vertex(A,h(b),i,l),u.caps!==!1&&!u.arc&&(this.tri([e,a,n],f(b,a),f(p,a),i,l,[0,1,0]),this.tri([e,t,n],f(p,t),f(b,t),i,l,[0,-1,0]))}}annulus(e,n,r,t,a,s,i,l){for(let u=0;u<s;u++){let c=u/s*Math.PI*2,d=(u+1)/s*Math.PI*2,f=(h,m)=>[e+h*Math.sin(m),a,n+h*Math.cos(m)];this.quad(f(r,c),f(t,c),f(t,d),f(r,d),i,l,[0,1,0])}}sphere(e,n,r,t,a,s=1){let i=Math.max(4,Math.round(r/2)),l=(u,c)=>{let d=u/i*Math.PI,f=c/r*Math.PI*2,h=[Math.sin(d)*Math.sin(f),Math.cos(d),Math.sin(d)*Math.cos(f)];return[[e[0]+h[0]*n,e[1]+h[1]*n*s,e[2]+h[2]*n],J([h[0],h[1]/s,h[2]])]};for(let u=0;u<i;u++)for(let c=0;c<r;c++){let[d,f]=l(u,c),[h,m]=l(u+1,c),[p,b]=l(u+1,c+1),[v,T]=l(u,c+1);this.vertex(d,f,t,a),this.vertex(h,m,t,a),this.vertex(p,b,t,a),this.vertex(d,f,t,a),this.vertex(p,b,t,a),this.vertex(v,T,t,a)}}sweep(e,n,r,t,a,s=!1){let i=e.length;if(i<2)return;let l=b=>typeof n=="number"?n:n[Math.min(b,n.length-1)]??.02,u=b=>e[s?(b%i+i)%i:Math.max(0,Math.min(i-1,b))],c=b=>J(Pe(u(b+1),u(b-1))),d=c(0),f=Math.abs(d[1])<.9?[0,1,0]:[1,0,0],h=J(ge(ge(d,f),d)),m=[];for(let b=0;b<i;b++){let v=c(b),T=h[0]*v[0]+h[1]*v[1]+h[2]*v[2];h=J([h[0]-v[0]*T,h[1]-v[1]*T,h[2]-v[2]*T]);let w=ge(v,h),A=u(b),P=l(b),B=[];for(let H=0;H<r;H++){let x=H/r*Math.PI*2,g=Math.cos(x),y=Math.sin(x),F=[h[0]*g+w[0]*y,h[1]*g+w[1]*y,h[2]*g+w[2]*y];B.push([[A[0]+F[0]*P,A[1]+F[1]*P,A[2]+F[2]*P],F])}m.push(B)}let p=s?i:i-1;for(let b=0;b<p;b++){let v=m[b],T=m[(b+1)%i];if(!(!v||!T))for(let w=0;w<r;w++){let A=(w+1)%r,[P,B]=v[w],[H,x]=v[A],[g,y]=T[w],[F,L]=T[A];this.vertex(P,B,t,a),this.vertex(g,y,t,a),this.vertex(F,L,t,a),this.vertex(P,B,t,a),this.vertex(F,L,t,a),this.vertex(H,x,t,a)}}s||(this.disc(u(0),c(0),0,l(0),r,t,a),this.disc(u(i-1),c(i-1),0,l(i-1),r,t,a))}strip(e,n,r,t,a){let s=i=>Array.isArray(n[0])?n[i]:n;for(let i=1;i<e.length;i++){let l=e[i-1],u=e[i],c=s(i-1),d=s(i),f=r/2,h=[l[0]-c[0]*f,l[1]-c[1]*f,l[2]-c[2]*f],m=[l[0]+c[0]*f,l[1]+c[1]*f,l[2]+c[2]*f],p=[u[0]+d[0]*f,u[1]+d[1]*f,u[2]+d[2]*f],b=[u[0]-d[0]*f,u[1]-d[1]*f,u[2]-d[2]*f],v=J(ge(Pe(u,l),c));this.quad(h,m,p,b,t,a,v)}}disc(e,n,r,t,a,s,i){let l=J(n),u=Math.abs(l[1])<.9?[0,1,0]:[1,0,0],c=J(ge(u,l)),d=ge(l,c),f=(h,m)=>[e[0]+(c[0]*Math.cos(m)+d[0]*Math.sin(m))*h,e[1]+(c[1]*Math.cos(m)+d[1]*Math.sin(m))*h,e[2]+(c[2]*Math.cos(m)+d[2]*Math.sin(m))*h];for(let h=0;h<a;h++){let m=h/a*Math.PI*2,p=(h+1)/a*Math.PI*2;r<=0?this.tri(e,f(t,m),f(t,p),s,i,l):this.quad(f(r,m),f(t,m),f(t,p),f(r,p),s,i,l)}}pill(e,n,r,t,a,s,i,l){let u=Math.hypot(n[0]-e[0],n[1]-e[1]),c=(n[0]-e[0])/u,d=(n[1]-e[1])/u,f=Math.atan2(c,d);this.cylinder(e[0],e[1],r,t,a,s,i,l,{arc:[f+Math.PI/2,f+Math.PI*3/2]}),this.cylinder(n[0],n[1],r,t,a,s,i,l,{arc:[f-Math.PI/2,f+Math.PI/2]});let h=-d*r,m=c*r,p=[[e[0]+h,e[1]+m],[n[0]+h,n[1]+m],[n[0]-h,n[1]-m],[e[0]-h,e[1]-m]];this.prism(p,t,a,i,l,{bottom:!1});for(let[b,v]of[[e,f+Math.PI/2],[n,f-Math.PI/2]])for(let T=0;T<s;T++){let w=v+Math.PI*T/s,A=v+Math.PI*(T+1)/s;this.tri([b[0],a,b[1]],[b[0]+r*Math.sin(A),a,b[1]+r*Math.cos(A)],[b[0]+r*Math.sin(w),a,b[1]+r*Math.cos(w)],i,l,[0,1,0])}}};function le(o,e,n,r,t,a=0){let s=[Math.sin(n),0,-Math.cos(n)],i=[-Math.cos(n),0,-Math.sin(n)];return{centre:[o[0]+s[0]*a,e,o[1]+s[2]*a],u:i,v:[0,1,0],hu:r/2,hv:t/2}}function An(o,e,n,r,t){let a=[Math.sin(n),0,-Math.cos(n)],s=[Math.cos(n),0,Math.sin(n)];return{centre:[o[0],e,o[1]],u:s,v:a,hu:r/2,hv:t/2}}function ht(o){return J(ge(o.u,o.v))}function Kt(o,e=!1){let n=(a,s)=>[o.centre[0]+o.u[0]*o.hu*a+o.v[0]*o.hv*s,o.centre[1]+o.u[1]*o.hu*a+o.v[1]*o.hv*s,o.centre[2]+o.u[2]*o.hu*a+o.v[2]*o.hv*s],r=(a,s)=>[e?(1-a)/2:(a+1)/2,(1-s)/2],t=[];for(let[a,s]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])t.push(...n(a,s),...r(a,s));return new Float32Array(t)}var Re=1.78/489,la=510;function Me(o,e,n=0){return[(o-120)*Re,(la-e)*Re,n]}var Zt=6,Q=(o,e,n,r,t=0)=>({x:o,y:e,w:n,d:r,z:t}),Bo=[Q(120,108,16,.052),Q(120,118,34,.08),Q(120,128,48,.1),Q(120,144,49,.113),Q(120,165,45,.118),Q(120,186,43,.115),Q(120,206,40,.108),Q(120,228,37,.1),Q(120,250,36.5,.1),Q(120,270,40,.104),Q(120,290,45,.11),Q(120,306,45,.106),Q(120,318,37,.09),Q(120,326,18,.05)],ca=[Q(120,84,11,.048),Q(120,112,12.5,.052)],Ln=[Q(70,132,13,.05),Q(66,152,12,.045),Q(63,180,10.5,.04),Q(60,206,9.5,.036),Q(57,228,8.6,.032),Q(54,252,8.6,.032),Q(51,276,7.8,.029),Q(48,296,6.8,.025),Q(46,308,6.2,.022)],_n=[Q(98,296,22,.085),Q(96,326,20,.08),Q(95,356,17,.07),Q(95,384,13.5,.056),Q(95,402,12.5,.05),Q(96,426,12.5,.052),Q(96,450,11,.046),Q(97,470,9,.036),Q(98,488,8,.03)];function ua(o,e){let n=[],r=a=>o[Math.max(0,Math.min(o.length-1,a))],t=(a,s,i,l,u)=>.5*(2*s+(-a+i)*u+(2*a-5*s+4*i-l)*u*u+(-a+3*s-3*i+l)*u*u*u);for(let a=0;a<o.length-1;a++){let[s,i,l,u]=[r(a-1),r(a),r(a+1),r(a+2)];for(let c=0;c<e;c++){let d=c/e;n.push({x:t(s.x,i.x,l.x,u.x,d),y:t(s.y,i.y,l.y,u.y,d),z:t(s.z,i.z,l.z,u.z,d),w:Math.max(.5,t(s.w,i.w,l.w,u.w,d)),d:Math.max(.004,t(s.d,i.d,l.d,u.d,d))})}}return n.push(r(o.length-1)),n}function qt(o,e,n=20,r=!0){let t=ua(e,3),a=t.map(s=>Array.from({length:n+1},(i,l)=>{let u=l/n*Math.PI*2,c=Me(s.x,s.y,s.z);return[c[0]+Math.sin(u)*s.w*Re,c[1],c[2]+Math.cos(u)*s.d]}));if(r){let s=t[0],i=t[t.length-1],l=(u,c)=>[.7,.35,0].map(d=>Array.from({length:n+1},(f,h)=>{let m=h/n*Math.PI*2,p=Me(u.x,u.y,u.z),b=Math.sqrt(1-d*d)*Math.min(u.w*Re,u.d)*.8*c;return[p[0]+Math.sin(m)*u.w*Re*d,p[1]+b,p[2]+Math.cos(m)*u.d*d]}));a.unshift(...l(s,1).reverse()),a.push(...l(i,-1))}da(o,a)}function da(o,e){let n=e.length,r=e[0]?.length??0,t=(s,i)=>e[Math.max(0,Math.min(n-1,s))]?.[(i%(r-1)+(r-1))%(r-1)]??[0,0,0],a=(s,i)=>{let l=Qt(t(s,i+1),t(s,i-1)),u=Qt(t(s+1,i),t(s-1,i)),c=In(u,l);if(Math.hypot(c[0],c[1],c[2])<1e-12){let p=Oo(e[s===0?1:n-2]??[]);return J(Qt(t(s,i),p))}let d=J(c),f=Oo(e[Math.max(0,Math.min(n-1,s))]??[]),h=t(s,i),m=[h[0]-f[0],0,h[2]-f[2]];return d[0]*m[0]+d[2]*m[2]<0?[-d[0],-d[1],-d[2]]:d};for(let s=0;s<n-1;s++)for(let i=0;i<r-1;i++){let l=[[s,i],[s+1,i],[s+1,i+1],[s,i],[s+1,i+1],[s,i+1]];for(let[u,c]of l)o.push(...t(u,c),...a(u,c))}}function Oo(o){let e=Math.max(1,o.length-1),n=0,r=0,t=0;for(let a=0;a<e;a++){let s=o[a]??[0,0,0];n+=s[0],r+=s[1],t+=s[2]}return[n/e,r/e,t/e]}var Qt=(o,e)=>[o[0]-e[0],o[1]-e[1],o[2]-e[2]],In=(o,e)=>[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]];function At(o,e,n,r=0,t=18){let a=Math.max(6,Math.round(t/2)),s=Math.cos(r),i=Math.sin(r),l=(u,c)=>{let d=u/a*Math.PI,f=c/t*Math.PI*2,h=[Math.sin(d)*Math.sin(f),Math.cos(d),Math.sin(d)*Math.cos(f)],m=h[0]*n[0],p=h[1]*n[1],b=[e[0]+m*s-p*i,e[1]+m*i+p*s,e[2]+h[2]*n[2]],v=h[0]/n[0],T=h[1]/n[1],w=J([v*s-T*i,v*i+T*s,h[2]/n[2]]);return[b,w]};for(let u=0;u<a;u++)for(let c=0;c<t;c++){let d=[[u,c],[u+1,c],[u+1,c+1],[u,c],[u+1,c+1],[u,c+1]];for(let[f,h]of d){let[m,p]=l(f,h);o.push(...m,...p)}}}function Uo(){let o=[];At(o,Me(120,55,.004),[27*Re,35*Re,.104],0,24),qt(o,ca,18,!1),qt(o,Bo,28);for(let e of[1,-1]){let n=a=>({...a,x:e>0?a.x:240-a.x});qt(o,Ln.map(n),16),qt(o,_n.map(n),18);let r=e>0?41:199;At(o,Me(r,330,.006),[7.5*Re,17*Re,.024],e>0?.08:-.08,14);let t=e>0?96:144;At(o,Me(t,501,.045),[9.5*Re,7.5*Re,.11],0,14)}return new Float32Array(o)}function $o(o=.6,e=2.3,n=48){let r=[];for(let t=0;t<n;t++){let a=t/n*Math.PI*2,s=(t+1)/n*Math.PI*2,i=(l,u)=>[Math.sin(l)*o,u,Math.cos(l)*o,Math.sin(l),0,Math.cos(l)];r.push(...i(a,0),...i(s,0),...i(s,e),...i(a,0),...i(s,e),...i(a,e))}return new Float32Array(r)}var Ho={brain:0,hypothalamus:-.005,brainstem:-.025,"visual-cortex":-.07,eyes:.086,ears:0,nose:.104,mouth:.09,thyroid:.035,thymus:.07,heart:.035,lungs:0,liver:.02,gallbladder:.055,stomach:.04,spleen:-.035,pancreas:-.02,kidneys:-.062,adrenals:-.062,"small-intestine":.04,"large-intestine":.035,bladder:.04,"spinal-cord":-.088,"sympathetic-chain":-.072,vagus:-.01,"arm-muscles":0,"thigh-muscles":0,"belly-fat":.07,"bone-marrow":0,"lymph-nodes":.03,scalp:0,fingernails:.02,toenails:.12,forearm:0,ankle:0,hand:.01,body:0};function Vn(o,e){let n=[],r=[],t=0,a=0,s=o.match(/[MLHVQCSZmlhvqcsz]|-?\d*\.?\d+(?:e-?\d+)?/g)??[],i=0,l="M",u=()=>Number(s[i++]);for(;i<s.length;){let c=s[i]??"";if(/[A-Za-z]/.test(c)&&(l=c,i++,l==="Z"||l==="z")){r[0]&&r.push(r[0]);continue}if(l==="M")r.length>1&&n.push(r),t=u(),a=u(),r=[Me(t,a,e)],l="L";else if(l==="L")t=u(),a=u(),r.push(Me(t,a,e));else if(l==="H")t=u(),r.push(Me(t,a,e));else if(l==="V")a=u(),r.push(Me(t,a,e));else if(l==="Q"){let d=u(),f=u(),h=u(),m=u();for(let p=1;p<=6;p++){let b=p/6,v=1-b;r.push(Me(v*v*t+2*v*b*d+b*b*h,v*v*a+2*v*b*f+b*b*m,e))}t=h,a=m}else{let d=l==="c"||l==="C"?6:l==="s"||l==="S"||l==="q"?4:2;for(let f=0;f<d&&i<s.length&&!/[A-Za-z]/.test(s[i]??"");f++)i++;r.length>1&&n.push(r),r=[]}}return r.length>1&&n.push(r),n}function fa(o,e){let n=Ho[o];if("e"in e){let[u,c,d,f,h=0]=e.e,m=Math.max(.006,Math.min(.09,Math.min(d,f)*Re*.9));return{organs:[{centre:Me(u,c,n),radii:[d*Re,f*Re,m],rotZ:-h*Math.PI/180}],strands:[]}}if(e.line!==void 0)return e.line<1?{organs:[],strands:[]}:{organs:[],strands:Vn(e.d,n).map(u=>({points:u,radius:Math.max(.004,e.line*Re*.5)}))};let r=Vn(e.d,n).flat();if(r.length===0)return{organs:[],strands:[]};let t=r.map(u=>u[0]),a=r.map(u=>u[1]),s=[(Math.min(...t)+Math.max(...t))/2,(Math.min(...a)+Math.max(...a))/2,n],i=Math.max(.006,(Math.max(...t)-Math.min(...t))/2),l=Math.max(.006,(Math.max(...a)-Math.min(...a))/2);return{organs:[{centre:s,radii:[i,l,Math.min(i,l)],rotZ:0}],strands:[]}}var ha={vessels:[{key:"arteries",color:ut.artery,z:.012},{key:"veins",color:ut.vein,z:.004}],nerves:[{key:"nerves",color:ut.nerve,z:-.012}],lymphatics:[{key:"lymphatics",color:ut.lymph,z:.026}],autonomic:[{key:"autonomic",color:ut.nerve,z:-.07}]};function ma(){let o=11,e=()=>(o=o*1664525+1013904223>>>0,o/4294967296),n=[[Bo,140],[Ln,30],[Ln.map(t=>({...t,x:240-t.x})),30],[_n,40],[_n.map(t=>({...t,x:240-t.x})),40]],r=[Me(120,55,0)];for(let t=0;t<24;t++)r.push(Me(120+(e()-.5)*40,55+(e()-.5)*52,(e()-.5)*.12));for(let[t,a]of n)for(let s=0;s<a;s++){let i=Math.floor(e()*(t.length-1)),l=t[i],u=t[i+1],c=e(),d=(l.w+(u.w-l.w)*c)*.8,f=(l.d+(u.d-l.d)*c)*.8,h=e()*Math.PI*2,m=Math.sqrt(e());r.push(Me(l.x+(u.x-l.x)*c+Math.sin(h)*d*m,l.y+(u.y-l.y)*c,Math.cos(h)*f*m))}return r}var Pn=null;function Wo(o){let e=de.node(o),n=e?.content?.bodyMap;if(!e||!n)return null;let r=$t(n),t=new Set(r.map(c=>c.region)),a=c=>{let d=[],f=[];for(let h of c)for(let m of co[h].shapes){let p=fa(h,m);d.push(...p.organs),f.push(...p.strands)}return{organs:d,strands:f}},s=n.overlays??[],i=[];for(let c of s)for(let d of ha[c]??[])for(let f of uo[d.key])for(let h of Vn(f,d.z))i.push({points:h,color:k(d.color)});let l=k(pe[e.tier]),u=ho(r,!1).filter(c=>c.region!=="body").map(c=>({at:Me(c.x,c.y,Ho[c.region]),r:Math.max(.035,c.r*Re*.85),rows:c.rows}));return s.includes("cells")&&!Pn&&(Pn=ma()),{node:o,tint:l,lit:a(t),ghosts:a(lo.filter(c=>!t.has(c))),lines:i,dots:s.includes("cells")?Pn??[]:[],beads:s.includes("autonomic")?fo.map(([c,d])=>Me(c,d,-.07)):[],targets:u,rows:r,map:n,whole:n.scope==="systemic"||t.has("body"),skin:s.includes("skin")}}function zo(o,e,n,r,t,a){let i=(b,v)=>[n.centre[0]+n.u[0]*b+n.n[0]*.012,v,n.centre[2]+n.u[2]*b+n.n[2]*.012],l=n.centre[1]+n.hv,u=i(r*(n.hu+.12),0),c=b=>Math.hypot(b[0]-u[0],b[2]-u[2]),d=o.targets.map(b=>e(b.at)),f=[];o.rows.forEach((b,v)=>{let T=null;if(o.targets.forEach((w,A)=>{let P=d[A];P&&w.rows.includes(b.index)&&(!T||c(P)<c(T))&&(T=P)}),!T){let w=e([.31,1.25,0]),A=e([-.31,1.25,0]);T=c(w)<c(A)?w:A}f.push({row:b.index,start:T,end:l-(t[v]??0)*2*n.hv})});let h=f.filter(b=>b.end<=b.start[1]).sort((b,v)=>v.start[1]-b.start[1]),m=f.filter(b=>b.end>b.start[1]).sort((b,v)=>b.start[1]-v.start[1]),p=[];for(let b of[h,m])b.forEach((v,T)=>{let w=r*(n.hu+.1+T*.05);p.push({row:v.row,points:[v.start,i(w,v.start[1]),i(w,v.end),i(r*(n.hu-a),v.end)]})});return p.sort((b,v)=>b.row-v.row)}function Nn(o){let e=[];for(let n of o.organs)At(e,n.centre,n.radii,n.rotZ,16);for(let n of o.strands)for(let r=1;r<n.points.length;r++){let t=n.points[r-1],a=n.points[r];pa(e,t,a,n.radius)}return new Float32Array(e)}function pa(o,e,n,r){let t=Qt(n,e);if(Math.hypot(t[0],t[1],t[2])<1e-6)return;let s=J(t),i=Math.abs(s[2])<.9?[0,0,1]:[1,0,0],l=J(In(i,s)),u=In(s,l),c=8,d=(f,h)=>{let m=[l[0]*Math.cos(h)+u[0]*Math.sin(h),l[1]*Math.cos(h)+u[1]*Math.sin(h),l[2]*Math.cos(h)+u[2]*Math.sin(h)];return[[f[0]+m[0]*r,f[1]+m[1]*r,f[2]+m[2]*r],m]};for(let f=0;f<c;f++){let h=f/c*Math.PI*2,m=(f+1)/c*Math.PI*2,[p,b]=d(e,h),[v,T]=d(e,m),[w,A]=d(n,h),[P,B]=d(n,m);o.push(...p,...b,...w,...A,...P,...B,...p,...b,...P,...B,...v,...T)}At(o,n,[r,r,r],0,8)}var Z=(o,e,n,r,t,a,s,i,l)=>({node:o,mood:e,wall:n,wallFinish:r,floor:t,stele:a,accent:s,installation:i,shape:l}),ba=[Z("N01","noir","#121820","plaster","graphite","blackGlass","#7BE0C3",{motif:"helix"},"Double helix"),Z("N02","gallery","#F2F1EC","plaster","pale","marble","#5DBB7A",{motif:"cluster",variant:"cells"},"Cluster"),Z("N03","chroma","#4A2618","plaster","graphite","bronze","#FFB45C",{motif:"ribbons",variant:"folds"},"Folded ribbons"),Z("N04","warm","#6A4A33","walnut","terrazzo","marble","#9BD7A8",{motif:"chain",variant:"fold"},"Folded chain"),Z("N05","gallery","#E6E9EB","plaster","pale","steel","#7FB8D8",{motif:"rings",variant:"gyro"},"Gyroscope"),Z("N06","chroma","#0E3634","plaster","graphite","bronze","#F4C455",{motif:"ribbons",variant:"waves"},"Waves"),Z("N07","chroma","#45121A","plaster","graphite","blackGlass","#FF5C63",{motif:"loops",variant:"eight"},"Figure of eight"),Z("N08","warm","#B48A60","plaster","terrazzo","travertine","#F2A04D",{motif:"wheel"},"Wheel"),Z("N09","gallery","#F0EEE8","plaster","pale","marble","#4FC09A",{motif:"lattice",variant:"weave"},"Weave"),Z("N10","noir","#1A2026","plaster","graphite","steel","#93E0B0",{motif:"strata",variant:"steps"},"Steps"),Z("N11","chroma","#13233D","plaster","graphite","bronze","#FFC86E",{motif:"lattice",variant:"network"},"Network"),Z("N12","gallery","#F1F3F4","plaster","pale","marble","#4AA8E0",{motif:"cluster",variant:"guard"},"Cluster"),Z("N13","chroma","#561A10","plaster","graphite","graphite","#FF7B47",{motif:"rings",variant:"ripples"},"Ripples"),Z("N14","noir","#13181D","plaster","graphite","blackGlass","#77C6FF",{motif:"chain",variant:"twin"},"Twin chains"),Z("N15","warm","#7B4E51","plaster","terrazzo","bronze","#FF9EBE",{motif:"ribbons",variant:"waves"},"Waves"),Z("N16","chroma","#3C0E14","plaster","graphite","blackGlass","#FF4B58",{motif:"rings",variant:"pulse"},"Pulse rings"),Z("N17","gallery","#EDF2F5","plaster","pale","marble","#78C3EE",{motif:"branches",variant:"down"},"Branching tree"),Z("N18","warm","#5E3F2C","walnut","terrazzo","bronze","#E9A55E",{motif:"lattice",variant:"hex"},"Hexagons"),Z("N19","chroma","#0F2940","plaster","graphite","steel","#6CD2FF",{motif:"loops",variant:"hairpin"},"Hairpin loops"),Z("N20","warm","#535A37","plaster","terrazzo","travertine","#C9E27D",{motif:"loops",variant:"coil"},"Coil"),Z("N21","noir","#16122A","plaster","graphite","blackGlass","#A99CFF",{motif:"lattice",variant:"network"},"Network"),Z("N22","noir","#121619","plaster","graphite","steel","#F4DF78",{motif:"branches",variant:"side"},"Branches"),Z("N23","gallery","#ECEDF1","plaster","pale","marble","#8C84FF",{motif:"lattice",variant:"grid"},"Grid"),Z("N24","chroma","#3B1F40","plaster","graphite","bronze","#FFA06F",{motif:"ribbons",variant:"waves"},"Waves"),Z("N25","noir","#0D0E12","plaster","graphite","blackGlass","#63DEFF",{motif:"rings",variant:"lens"},"Lens"),Z("N26","warm","#C7A486","plaster","pale","travertine","#F3B48C",{motif:"strata",variant:"sheets"},"Layers"),Z("N27","warm","#5A3B28","walnut","terrazzo","bronze","#E3C38B",{motif:"strands"},"Strands"),Z("N28","gallery","#F6F4EF","plaster","pale","marble","#9BD5FF",{motif:"strata",variant:"arch"},"Arch"),Z("N29","warm","#D8B9AE","plaster","pale","travertine","#D7A1C6",{motif:"strata",variant:"plates"},"Plates"),Z("N30","noir","#141226","plaster","graphite","blackGlass","#C49AFF",{motif:"rings",variant:"ripples"},"Ripples"),Z("N31","warm","#D9D0C1","travertine","pale","bronze","#E8C27C",{motif:"spiral",variant:"spiral"},"Spiral"),Z("N32","chroma","#1B2936","plaster","graphite","steel","#7ED4FF",{motif:"lattice",variant:"struts"},"Struts"),Z("N33","gallery","#EDEFEB","plaster","pale","marble","#B38BFF",{motif:"strata",variant:"steps"},"Steps"),Z("N34","noir","#0B0C10","plaster","graphite","blackGlass","#D79BFF",{motif:"spiral",variant:"orbit"},"Orbits")],va=new Map(ba.map(o=>[o.node,o]));function ke(o){let e=va.get(o);if(!e)throw new Error(`No exhibit for ${o}`);return e}var en={gallery:1,warm:.88,chroma:.6,noir:.42},mt=.3;function ko(o){return o==="bronze"||o==="steel"}function Dn(o){return o==="gallery"||o==="warm"}function Cn(o){let e=Number.parseInt(o.slice(1),16),n=r=>{let t=r/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4};return .2126*n(e>>16&255)+.7152*n(e>>8&255)+.0722*n(e&255)}function ga(o){let e=Cn(o);return 1.05/(e+.05)>=(e+.05)/.0585?"light":"ink"}function ya(o,e){let[n,r]=[Cn(o),Cn(e)].sort((t,a)=>a-t);return(n+.05)/(r+.05)}var Go=o=>[1,3,5].map(e=>Number.parseInt(o.slice(e,e+2),16));function Jt(o,e,n){let r=Go(o),t=Go(e);return`#${r.map((s,i)=>Math.round(Math.min(255,Math.max(0,s*n+(t[i]??0)*(1-n))))).map(s=>s.toString(16).padStart(2,"0")).join("").toUpperCase()}`}var xa=4.5;function qe(o,e,n){for(let r=0;r<=40;r++){let t=Jt(n,o,r/40);if(ya(t,e)>=xa)return t}return n}function Xo(o,e){if(ga(o)==="light"){let r="#F4F2EE";return{text:r,text2:qe(Jt(r,o,.78),o,r),text3:qe(Jt(r,o,.56),o,r),accent:qe(e,o,"#FFFFFF"),sourced:qe(e,o,"#FFFFFF")}}let n="#0C1824";return{text:n,text2:qe("#3A4A5A",o,n),text3:qe("#5A6A7A",o,n),accent:qe(Jt("#000000",e,.38),o,"#000000"),sourced:qe("#0672A8",o,"#000000")}}var tn={blackGlass:"#0B0D10",bronze:"#2B241D",steel:"#23272C",travertine:"#DED6C8",marble:"#E9E6E0",graphite:"#2E3136",terrazzo:"#D8D2C8"};var Ea=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyQ","KeyE","ShiftLeft","ShiftRight"]);function Ta(o){return o instanceof HTMLElement&&(o.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(o.tagName))}var nn=class{keys=new Set;downAt=new Map;held=new Map;lastConsume=performance.now();dragX=0;dragY=0;zoom=0;pointers=new Map;press=null;pinch=0;el;h;off=[];constructor(e,n){this.el=e,this.h=n;let r=(s,i,l,u)=>{s.addEventListener(i,l,u),this.off.push(()=>s.removeEventListener(i,l,u))},t=(s,i)=>{window.addEventListener(s,i),this.off.push(()=>window.removeEventListener(s,i))};r(e,"pointerdown",s=>{s.button!==0&&s.pointerType==="mouse"||(e.setPointerCapture?.(s.pointerId),this.pointers.set(s.pointerId,{x:s.clientX,y:s.clientY}),this.pointers.size===1&&(this.press={x:s.clientX,y:s.clientY,moved:!1}),this.pointers.size===2&&(this.press=null,this.pinch=this.pinchDistance()),this.h.poke())}),r(e,"pointermove",s=>{let i=this.pointers.get(s.pointerId);if(!i){s.pointerType==="mouse"&&this.h.hover(s.clientX,s.clientY);return}let l=s.clientX-i.x,u=s.clientY-i.y;if(i.x=s.clientX,i.y=s.clientY,this.pointers.size===2){let c=this.pinchDistance();this.pinch>0&&c>0&&(this.zoom+=(this.pinch-c)*2.2),this.pinch=c}else this.press&&(!this.press.moved&&Math.hypot(s.clientX-this.press.x,s.clientY-this.press.y)>5&&(this.press.moved=!0),this.press.moved&&(this.dragX+=l,this.dragY+=u));this.h.poke()});let a=s=>{let i=this.press;this.pointers.delete(s.pointerId),this.pointers.size===0&&(i&&!i.moved&&s.type==="pointerup"&&this.h.click(s.clientX,s.clientY),this.press=null,this.pinch=0)};r(e,"pointerup",a),r(e,"pointercancel",a),r(e,"pointerleave",s=>{s.pointerType==="mouse"&&!this.pointers.has(s.pointerId)&&this.h.hover(-1,-1)}),r(e,"wheel",s=>{s.preventDefault(),this.zoom+=s.deltaMode===1?s.deltaY*32:s.deltaY,this.h.poke()},{passive:!1}),t("keydown",s=>{if(s.defaultPrevented||s.metaKey||s.ctrlKey||s.altKey||Ta(s.target)||this.h.blocked())return;let i=s.target===e||s.target===document.body||s.target===document.documentElement;if(s.key==="Escape"&&i){s.preventDefault(),this.h.back();return}if(s.key==="Enter"&&s.target===e){s.preventDefault(),this.h.activate();return}!i||!Ea.has(s.code)||(s.preventDefault(),this.keys.has(s.code)||this.downAt.set(s.code,performance.now()),this.keys.add(s.code),this.h.poke())}),t("keyup",s=>{if(!this.keys.has(s.code))return;let i=performance.now(),l=Math.max(this.downAt.get(s.code)??i,this.lastConsume);this.held.set(s.code,(this.held.get(s.code)??0)+Math.max(0,i-l)),this.keys.delete(s.code),this.downAt.delete(s.code),this.h.poke()}),t("blur",()=>{this.keys.clear(),this.downAt.clear(),this.held.clear()})}pinchDistance(){let[e,n]=[...this.pointers.values()];return e&&n?Math.hypot(e.x-n.x,e.y-n.y):0}get busy(){return this.keys.size>0||this.held.size>0||this.pointers.size>0}consume(){let e=performance.now(),n=Math.max(1,e-this.lastConsume),r=new Map;for(let s of new Set([...this.keys,...this.held.keys()])){let i=this.held.get(s)??0;this.keys.has(s)&&(i+=e-Math.max(this.downAt.get(s)??e,this.lastConsume)),r.set(s,Math.min(1,i/n))}this.held.clear(),this.lastConsume=e;let t=s=>r.get(s)??0,a={forward:t("KeyW")+t("ArrowUp")-t("KeyS")-t("ArrowDown"),strafe:t("KeyD")-t("KeyA"),turn:t("ArrowRight")+t("KeyE")-t("ArrowLeft")-t("KeyQ"),run:t("ShiftLeft")+t("ShiftRight")>.5,lookX:this.dragX,lookY:this.dragY,zoom:this.zoom};return this.dragX=0,this.dragY=0,this.zoom=0,a}dispose(){for(let e of this.off)e();this.keys.clear(),this.held.clear(),this.el}};var On=384,Bn=288,on=class{gl;fbo;texture;tri;parallel;compiled=new Map;loading=new Set;order=[];showing=null;lastDraw=0;constructor(e){this.gl=e,this.parallel=e.getExtension("KHR_parallel_shader_compile");let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,On,Bn,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.texture=n,this.fbo=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.fbo),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.bindFramebuffer(e.FRAMEBUFFER,null),this.tri=e.createVertexArray(),e.bindVertexArray(this.tri);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null)}prepare(e){let n=this.compiled.get(e);return n?(!n.ready&&!n.failed&&this.poll(n),n.ready):(this.loading.has(e)||(this.loading.add(e),io(e).then(r=>{this.loading.delete(e),this.compile(e,r)}).catch(()=>this.loading.delete(e))),!1)}compile(e,n){let r=this.gl,t=de.node(e)?.tier??"T01",a=(c,d)=>{let f=r.createShader(c);return f&&(r.shaderSource(f,d),r.compileShader(f)),f},s=a(r.VERTEX_SHADER,oo),i=a(r.FRAGMENT_SHADER,no(n,1)),l=r.createProgram();if(!s||!i||!l)return;r.attachShader(l,s),r.attachShader(l,i),r.bindAttribLocation(l,0,"p"),r.linkProgram(l),r.deleteShader(s),r.deleteShader(i);let u={scene:n,tier:t,program:l,loc:new Map,ready:!1,failed:!1};for(this.compiled.set(e,u),this.order.push(e);this.order.length>3;){let c=this.order.findIndex(h=>h!==this.showing&&h!==e);if(c<0)break;let[d]=this.order.splice(c,1),f=d?this.compiled.get(d):void 0;d&&f&&(r.deleteProgram(f.program),this.compiled.delete(d))}this.poll(u)}poll(e){let n=this.gl;if(!(this.parallel&&!n.getProgramParameter(e.program,this.parallel.COMPLETION_STATUS_KHR))){if(!n.getProgramParameter(e.program,n.LINK_STATUS)){e.failed=!0;return}for(let r of["uRes","uOffset","uCamPos","uCamTarget","uFov","uAccent","uFloor","uRing","uTime","uZero"])e.loc.set(r,n.getUniformLocation(e.program,r));e.ready=!0}}render(e,n,r){let t=this.compiled.get(e);if(!t?.ready)return!1;let a=performance.now();if(this.showing===e&&a-this.lastDraw<r)return!1;this.lastDraw=a;let s=this.gl,i=ro(t.scene),l=ao(t.scene),u;if(l.az){let f=(l.az[0]+l.az[1])/2,h=(l.az[1]-l.az[0])/2;u={...i,az:f+Math.sin(n*.15)*h*.6}}else u={...i,az:i.az+n*6};let c=t.scene.poster??1.5,d=so(t.scene,t.tier,u,c+n);s.bindFramebuffer(s.FRAMEBUFFER,this.fbo),s.viewport(0,0,On,Bn),s.disable(s.DEPTH_TEST),s.disable(s.BLEND),s.useProgram(t.program),s.uniform2f(t.loc.get("uRes")??null,On,Bn),s.uniform2f(t.loc.get("uOffset")??null,0,0),s.uniform1i(t.loc.get("uZero")??null,0);for(let[f,h]of Object.entries(d)){let m=t.loc.get(f)??null;h.length===3?s.uniform3f(m,h[0]??0,h[1]??0,h[2]??0):s.uniform1f(m,h[0]??0)}return s.bindVertexArray(this.tri),s.drawArrays(s.TRIANGLES,0,3),s.bindVertexArray(null),s.bindFramebuffer(s.FRAMEBUFFER,null),s.enable(s.DEPTH_TEST),this.showing=e,!0}failed(e){return this.compiled.get(e)?.failed===!0}dispose(){let e=this.gl;for(let n of this.compiled.values())e.deleteProgram(n.program);e.deleteFramebuffer(this.fbo),e.deleteTexture(this.texture)}};var Qe=o=>o.toFixed(4),ee=`#version 300 es
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
`,Yo=`
const float HALF_ = ${Qe(O)};
const float RING_ = ${Qe(_)};
const float ATRIUM_ = ${Qe(D)};
const float FLOOR_H_ = ${Qe(Be)};
const float SLAB_ = ${Qe(re)};
const float ROOF_ = ${Qe(Be*dt)};
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
    else if (m < RING_ && lv < ${Qe(dt-1)}) res = uInterior * 0.22;
    else {
      float blur = 0.03 + rough * 1.6 + tUp * rough * 0.25;
      res = mix(uInterior * 0.32, vec3(uPanel), coffer(q, blur) * (1.0 - smoothstep(0.5, 0.9, rough) * 0.6));
    }
  } else {
    res = uInterior * 0.5 * here;
  }
  return mix(res, uInterior * 0.75 * here, smoothstep(0.55, 1.0, rough));
}
`,Ra=`
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
`,Ko=`
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
${Yo}
${Ra}
${jo}
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
`,qo=Hn.replace(`#version 300 es
`,`#version 300 es
#define CLIP 1
`),Qo=`${ee}
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
`,Zo=`${ee}
in vec2 vNdc;
uniform mat4 uInvViewProj;
uniform vec3 uCamPos;
uniform vec3 uSun;
uniform vec3 uSunColor;
${Le}
${Un}
#if Q == 1
${rn}
${Ko}
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
`,Jo=`${ee}
in vec2 vNdc;
uniform vec3 uSun;
${rn}
${Ko}
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
`,er=`${ee}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
void main() {
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,tr=`${ee}
void main() {}
`,nr=`${ee}
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
`,or=`${ee}
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
`,rr=`${ee}
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
`,ar=`${ee}
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
`,sr=`${ee}
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
`,ir=`${ee}
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
`,lr=`${ee}
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec2 aUv;
uniform mat4 uViewProj;
out vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,cr=`${ee}
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
`,ur=`${ee}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
void main() {
  gl_Position = uViewProj * vec4(aPos, 1.0);
}
`,dr=`${ee}
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
`,fr=`${ee}
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
`,hr=`${ee}
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
`,mr=`${ee}
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
`,pr=`${ee}
layout(location = 0) in vec3 aPos;
uniform mat4 uViewProj;
uniform mat4 uModel;
uniform float uPointSize;
void main() {
  gl_Position = uViewProj * uModel * vec4(aPos, 1.0);
  gl_PointSize = max(1.5, uPointSize / max(gl_Position.w, 0.1));
}
`,br=`${ee}
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
`,vr=`${ee}
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
`,gr=`${ee}
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
`,yr=`${ee}
in vec2 vNdc;
uniform float uDim;
out vec4 frag;
void main() {
  float v = smoothstep(0.35, 1.45, length(vNdc));
  float a = uDim * (0.66 + 0.3 * v);
  frag = vec4(vec3(0.0) * a, a);
}
`,xr=`${ee}
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
`,Er=`${ee}
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
`,Tr=`${ee}
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
`,Rr=`${ee}
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
`;var Mr={gloss:.4,emit:1},Ma={gloss:.9,pattern:4},Se=Math.PI*2;function wa(o){let e=o>>>0||1;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function wr(o,e,n,r){let t=n.span,a=n.depth,s=n.top-n.bottom,i=(f,h,m)=>[n.at[0]+n.along[0]*f+n.inward[0]*m,n.bottom+h,n.at[1]+n.along[1]*f+n.inward[1]*m],l=f=>f?r.glow:r.body,u=f=>f?Mr:r.material,c={p:i,W:t,D:a,H:s,rand:wa(r.seed),m:o,body:r.body,material:r.material,glow:r.glow,curve:(f,h,m=8,p=!1,b=!1)=>o.sweep(f,h,m,l(b),u(b),p),rod:(f,h,m,p=!1)=>o.sweep([f,h],m,5,l(p),u(p)),bead:(f,h,m=!1,p=6)=>o.sphere(f,h,p,l(m),u(m)),box:(f,h,m,p,b,v,T=!1)=>{let w=i(f,h,m),A=i(p,b,v);o.box([Math.min(w[0],A[0]),Math.min(w[1],A[1]),Math.min(w[2],A[2])],[Math.max(w[0],A[0]),Math.max(w[1],A[1]),Math.max(w[2],A[2])],l(T),u(T))},strip:(f,h,m,p=!1)=>o.strip(f,h,m,l(p),u(p)),hang:f=>{for(let h of f)o.sweep([h,[h[0],n.ceiling,h[2]]],.006,4,[.75,.77,.8],{...Ma,ao:r.light})},inside:f=>{let h=f[0]-n.at[0],m=f[2]-n.at[1],p=Math.max(-t/2,Math.min(t/2,h*n.along[0]+m*n.along[1])),b=Math.max(-a/2,Math.min(a/2,h*n.inward[0]+m*n.inward[1]));return i(p,Math.max(0,Math.min(s,f[1]-n.bottom)),b)}},d=(f,h,m)=>J([n.along[0]*f+n.inward[0]*m,h,n.along[1]*f+n.inward[1]*m]);switch(e.motif){case"helix":return Fa(c);case"cluster":return Sa(c,e.variant);case"ribbons":return Aa(c,e.variant,d);case"chain":return Pa(c,e.variant);case"rings":return La(c,e.variant);case"loops":return _a(c,e.variant);case"wheel":return Ia(c);case"branches":return Va(c,e.variant,d);case"lattice":return Na(c,e.variant);case"strata":return Da(c,e.variant,d);case"strands":return Oa(c);case"spiral":return Ba(c,e.variant)}}function Je(o,e,n,r,t,a,s,i,l=0){let u=[];for(let c=0;c<i;c++){let d=c/i*Se,f=Math.cos(d)*t,h=Math.sin(d)*a;s==="uv"?u.push(o.p(e+f,n+h*Math.sin(l),r+h*Math.cos(l))):s==="uh"?u.push(o.p(e+f,n+h,r+f*Math.sin(l))):u.push(o.p(e+f*Math.sin(l),n+h,r+f))}return u}function Fa(o){let e=o.W*.92,n=Math.min(.56,o.H*.36),r=o.H*.5,t=3.2,a=.42*Se,s=(l,u)=>{let c=Se*t*l+u;return o.p(-e/2+e*l,r+n*Math.sin(c),n*Math.cos(c))};for(let l of[0,a]){let u=[];for(let c=0;c<=60;c++)u.push(s(c/60,l));o.curve(u,.045,7)}let i=Math.round(t*9);for(let l=0;l<i;l++){let u=(l+.5)/i,c=s(u,0),d=s(u,a);o.rod(c,d,.014),o.bead([(c[0]+d[0])/2,(c[1]+d[1])/2,(c[2]+d[2])/2],.032,!0)}o.hang([s(.02,0),s(.5,0),s(.98,0)].map(l=>[l[0],o.p(0,r+n,0)[1],l[2]]))}function Sa(o,e){let n=[],r=e==="cells"?13:9;for(let t=0;t<900&&n.length<r;t++){let a=e==="cells"?.16+o.rand()*.28:.17+o.rand()*.16,s=[(o.rand()-.5)*(o.W-2*a-.4),a+.1+o.rand()*(o.H-2*a-.2),(o.rand()-.5)*(o.D-2*a-.3)];n.every(i=>Math.hypot(i.c[0]-s[0],i.c[1]-s[1],i.c[2]-s[2])>i.r+a+.08)&&n.push({c:s,r:a})}n.forEach(({c:t,r:a},s)=>{let i=o.p(t[0],t[1],t[2]);if(o.m.sphere(i,a,12,o.body,o.material),e==="cells")o.bead(o.p(t[0]+a*.18,t[1]-a*.78,t[2]-a*.25),a*.36,!0,8);else for(let l=0;l<12;l++){let u=Math.acos(1-2*(l+.5)/12),c=l*2.39996+s,d=[Math.sin(u)*Math.cos(c),Math.cos(u),Math.sin(u)*Math.sin(c)],f=o.p(t[0]+d[0]*a,t[1]+d[1]*a,t[2]+d[2]*a),h=o.p(t[0]+d[0]*(a+.13),t[1]+d[1]*(a+.13),t[2]+d[2]*(a+.13));o.rod(f,h,.012,s%3===0)}}),o.hang(n.slice(0,5).map(({c:t,r:a})=>o.p(t[0],t[1]+a,t[2])))}function Aa(o,e,n){let r=o.W*.9,t=o.H*.5;(e==="folds"?[-.9,-.3,.3,.9]:[-.7,0,.7]).forEach((s,i)=>{let l=[],u=[],c=[],d=e==="folds"?150:110;for(let f=0;f<=d;f++){let h=f/d,m=-r/2+r*h,p,b=0;if(e==="folds"){let T=Math.sin(m/.85*Se+i*.9);p=t+.5*(Math.tanh(3*T)/Math.tanh(3))}else p=t+.38*Math.sin(m/3.1*Se+i*1.7)+.08*Math.sin(m/.9*Se+i),b=.9*Math.sin(m/2.4*Se+i*2.1);let v=s+(e==="waves"?.18*Math.sin(m/1.7*Se+i):0);l.push(o.p(m,p,v)),u.push(e==="folds"?n(0,0,1):n(0,Math.sin(b),Math.cos(b))),c.push(o.p(m,p+(e==="folds"?.012:0),v+(e==="folds"?-.21:0)))}o.strip(l,u,e==="folds"?.42:.34),i%2===0&&o.curve(c.filter((f,h)=>h%2===0),.009,4,!1,!0)}),o.hang([o.p(-r/2+.2,t+.5,0),o.p(0,t+.5,0),o.p(r/2-.2,t+.5,0)])}function Pa(o,e){let n=o.H*.5;if(e==="twin"){for(let l of[-.48,.48]){let u=o.W*.88;o.rod(o.p(-u/2,n,l),o.p(u/2,n,l),.02);let c=12;for(let d=0;d<c;d++){let f=-u/2+.25+d/(c-1)*(u-.5),h=o.p(f,n,l);o.bead(h,.075,d%3===1,8),o.rod(h,o.p(f+.12,n-.32,l+Math.sign(l)*.34),.008)}}o.hang([o.p(-o.W*.4,n,0),o.p(o.W*.4,n,0)]);return}let r=[];for(let l=0;l<9;l++)r.push([-o.W*.42+l/8*o.W*.84,.25+o.rand()*(o.H-.5),(o.rand()-.5)*(o.D-.6)]);let t=[],a=(l,u,c,d,f)=>.5*(2*u+(-l+c)*f+(2*l-5*u+4*c-d)*f*f+(-l+3*u-3*c+d)*f*f*f);for(let l=0;l<r.length-1;l++)for(let u=0;u<14;u++){let c=u/14,d=f=>r[Math.max(0,Math.min(r.length-1,f))];t.push([0,1,2].map(f=>a(d(l-1)[f]??0,d(l)[f]??0,d(l+1)[f]??0,d(l+2)[f]??0,c)))}let i=t.map((l,u)=>{let c=u/t.length;if(![.18,.5,.78].some(h=>Math.abs(c-h)<.07))return l;let f=u*1.1;return[l[0],l[1]+Math.sin(f)*.12,l[2]+Math.cos(f)*.12]}).map(l=>o.p(l[0],l[1],l[2]));o.curve(i,.018,5);for(let l=0;l<i.length;l+=3)o.bead(i[l],.05,l%21===0,6);o.hang([i[0],i[Math.floor(i.length/2)],i[i.length-1]])}function La(o,e){let n=o.H*.5;if(e==="gyro"){let a=Math.min(.7,o.H*.45);o.bead(o.p(0,n,0),.12,!0,12),[a,a*.8,a*.6].forEach((s,i)=>o.curve(Je(o,0,n,0,s,s,i===1?"uh":"hv",48,i*.6),.024,6,!0)),o.rod(o.p(-o.W*.36,n,0),o.p(o.W*.36,n,0),.02);for(let s of[-1,1])o.bead(o.p(s*o.W*.36,n,0),.13,!1,12);o.hang([o.p(0,n+a,0),o.p(-o.W*.36,n,0),o.p(o.W*.36,n,0)]);return}if(e==="ripples"){for(let a=0;a<6;a++){let s=.28+a*.47;o.curve(Je(o,0,n+.32-a*.1,0,s,s*.42,"uv",48),.03-a*.003,4,!0,a===0||a===3)}o.bead(o.p(0,n+.55,0),.09,!0,10),o.hang([o.p(0,n+.55,0),o.p(-2.5,n-.18,0),o.p(2.5,n-.18,0)]);return}if(e==="pulse"){let a=i=>{let l=(u,c,d)=>d*Math.exp(-(((i-u)/c)**2));return .2+l(.14,.05,.1)+l(.34,.035,.5)+l(.42,.04,-.06)+l(.6,.06,.14)+l(.86,.035,.42)};for(let i=0;i<15;i++){let l=i/14,u=Math.min(o.H*.47,a(l));o.curve(Je(o,-o.W*.44+l*o.W*.88,n,0,u,u,"hv",24),.02,4,!0,u>.5)}o.rod(o.p(-o.W*.46,n,0),o.p(o.W*.46,n,0),.01,!0),o.hang([o.p(-o.W*.44,n+.2,0),o.p(0,n+.3,0),o.p(o.W*.44,n+.2,0)]);return}let r=7,t=Math.min(o.H*.47,.72);for(let a=0;a<r;a++){let s=-o.D*.42+a/(r-1)*o.D*.84,i=t*(1-a*.1);o.curve(Je(o,0,n,s,i,i,"uh",40),.02,5,!0,a===2||a===5)}o.bead(o.p(0,n,o.D*.42),.15,!0,12);for(let a of[-1,1])o.curve(Je(o,a*o.W*.31,n,0,.62,.62*.4,"uv",40),.016,4,!0);o.hang([o.p(0,n+t,-o.D*.42),o.p(0,n+t*.4,o.D*.42),o.p(-o.W*.31,n,0),o.p(o.W*.31,n,0)])}function _a(o,e){let n=o.H*.5;if(e==="eight"){let a=[],s=o.W*.46;for(let i=0;i<120;i++){let l=i/120*Se,u=1+Math.sin(l)**2;a.push(o.p(s*Math.cos(l)/u,n+.3*Math.sin(l),s*Math.sin(l)*Math.cos(l)/u*.62))}o.curve(a,.055,8,!0);for(let i=0;i<120;i+=9)o.bead(a[i],.07,!0,8);o.hang([a[0],a[30],a[60],a[90]]);return}if(e==="hairpin"){let a=o.H-.08;o.rod(o.p(-o.W*.44,a,0),o.p(o.W*.44,a,0),.03);for(let s=0;s<5;s++){let i=-o.W*.34+s/4*o.W*.68,l=.75+s*37%5*.1,u=.14,c=[];for(let d=0;d<=10;d++)c.push(o.p(i-u,a-d/10*l,0));for(let d=1;d<10;d++){let f=Math.PI+d/10*Math.PI;c.push(o.p(i+Math.cos(f)*u,a-l+Math.sin(f)*u,0))}for(let d=10;d>=0;d--)c.push(o.p(i+u,a-d/10*l,0));o.curve(c,.03,5),o.bead(o.p(i,a-l-u,0),.055,!0,8)}o.hang([o.p(-o.W*.4,a,0),o.p(0,a,0),o.p(o.W*.4,a,0)]);return}let r=o.W*.9,t=[];for(let a=0;a<=120;a++){let s=a/120,i=s*Se*6.5;t.push(o.p(-r/2+r*s,n+.42*Math.sin(i),.42*Math.cos(i)+.25*Math.sin(s*Math.PI*2)))}o.curve(t,.05,8);for(let a=6;a<t.length;a+=18)o.bead(t[a],.06,!0,8);o.hang([t[10],t[60],t[110]])}function Ia(o){let e=o.H*.5,n=Math.min(.68,o.H*.44),r=Je(o,-.62,e,0,n,n,"uh",56),t=Je(o,.62,e,0,n*.82,n*.82,"hv",56);o.curve(r,.04,8,!0),o.curve(t,.04,8,!0);for(let a=0;a<56;a+=7)o.bead(r[a],.075,a%14===0,8),o.bead(t[(a+3)%56],.065,a%14===7,8);o.hang([o.p(-.62,e+n,0),o.p(.62,e+n*.82,0)])}function Va(o,e,n){let r=[],t=(a,s,i,l,u,c)=>{let d=o.inside([a[0]+s[0]*i,a[1]+s[1]*i,a[2]+s[2]*i]);if(o.m.sweep([a,d],[l,l*.72],5,o.body,o.material),u===0){r.push(d);return}for(let f of[-1,1]){let h=(o.rand()-.5)*.2,m=e==="down"?c%2===1?ln(s,n(0,-.15,f*(.62+h))):ln(s,n(f*(.55+h),-.25,0)):c%2===1?ln(s,n(0,0,f*(.42+h))):ln(s,n(0,f*(.3+h),0));t(d,J(m),i*(.7+o.rand()*.06),l*.74,u-1,c+1)}};if(e==="down"){let a=o.p(0,o.H,0),s=o.p(0,o.H-.32,0);o.m.sweep([a,s],[.075,.065],6,o.body,o.material);for(let i of[-1,1])t(s,J(n(i,-.42,0)),1.25,.055,4,1)}else{let a=o.p(-o.W*.47,o.H*.55,0);t(a,n(1,0,0),1.05,.055,5,0)}for(let a of r)o.bead(a,.045,!0,6);o.hang(e==="down"?[]:[o.p(-o.W*.4,o.H*.55,0),o.p(-o.W*.1,o.H*.55,0)])}function ln(o,e){return[o[0]+e[0],o[1]+e[1],o[2]+e[2]]}function Na(o,e){let n=o.H*.5,r=o.W*.46,t=o.D*.42;if(e==="weave"){[-.36,0,.36].forEach((a,s)=>{let i=(s%2===0?1:-1)*.5,l=Math.cos(i),u=Math.sin(i);for(let c=-12;c<=12;c++){let d=c*.42,f=-10,h=10,m=[];for(let b of[f,h])m.push([l*b-u*d,u*b+l*d]);let p=Ca(m[0],m[1],r,t);p&&o.rod(o.p(p[0][0],n+a,p[0][1]),o.p(p[1][0],n+a,p[1][1]),.012,c%5===0)}}),o.hang([o.p(-r*.8,n+.36,0),o.p(0,n+.36,0),o.p(r*.8,n+.36,0)]);return}if(e==="network"||e==="struts"){if(e==="struts"){let l=[[.25,-.45],[.25,.45],[o.H-.3,0]];for(let[c,d]of l)o.rod(o.p(-r,c,d),o.p(r,c,d),.022);let u=12;for(let c=0;c<=u;c++){let d=-r+c/u*2*r,f=-r+(c+.5)/u*2*r;c<u&&(o.rod(o.p(d,.25,-.45),o.p(f,o.H-.3,0),.014),o.rod(o.p(d,.25,.45),o.p(f,o.H-.3,0),.014),o.rod(o.p(d,.25,-.45),o.p(f,.25,.45),.006,!0))}o.hang([o.p(-r*.9,o.H-.3,0),o.p(0,o.H-.3,0),o.p(r*.9,o.H-.3,0)]);return}let a=[];for(let l=0;l<600&&a.length<24;l++){let u=[(o.rand()-.5)*2*r,.15+o.rand()*(o.H-.3),(o.rand()-.5)*2*t];a.every(c=>Math.hypot(c[0]-u[0],c[1]-u[1],c[2]-u[2])>.55)&&a.push(u)}let s=new Set;a.forEach((l,u)=>{let c=a.map((d,f)=>({j:f,d:Math.hypot(d[0]-l[0],d[1]-l[1],d[2]-l[2])})).filter(d=>d.j!==u).sort((d,f)=>d.d-f.d).slice(0,3);for(let{j:d}of c){let f=u<d?`${u}-${d}`:`${d}-${u}`;if(s.has(f))continue;s.add(f);let h=a[d];o.rod(o.p(l[0],l[1],l[2]),o.p(h[0],h[1],h[2]),.01,(u+d)%7===0)}o.bead(o.p(l[0],l[1],l[2]),.06+u%3*.02,u%3===0,8)});let i=a.slice().sort((l,u)=>u[1]-l[1]).slice(0,4);o.hang(i.map(l=>o.p(l[0],l[1],l[2])));return}if(e==="hex"){let s=Math.sqrt(3)*.42,i=new Map,l=[];for(let u=-1;u<=1;u++)for(let c=-4;c<=4;c++){let d=c*1.5*.42,f=u*s+(c%2===0?0:s/2);if(Math.abs(d)>r-.42||Math.abs(f)+.42>o.D/2)continue;let h=n+.06*Math.sin(c*1.3+u);l.push(o.p(d,h,f));for(let m=0;m<6;m++){let p=m/6*Se,b=(m+1)/6*Se,v=[d+Math.cos(p)*.42,f+Math.sin(p)*.42],T=[d+Math.cos(b)*.42,f+Math.sin(b)*.42],w=[v,T].map(A=>`${A[0].toFixed(2)},${A[1].toFixed(2)}`).sort().join("|");i.has(w)||i.set(w,[o.p(v[0],h,v[1]),o.p(T[0],h,T[1])])}}for(let[u,c]of i.values())o.rod(u,c,.014);for(let u of l)o.bead(u,.05,!0,6);o.hang([l[0],l[Math.floor(l.length/2)],l[l.length-1]].filter(u=>u!==void 0));return}for(let a=0;a<9;a++)for(let s=0;s<2;s++)for(let i=0;i<3;i++){let l=-r+.2+a/8*(2*r-.4),u=.25+s/1*(o.H-.5),c=-t+.15+i/2*(2*t-.3),d=.07+(a+s*3+i*5)%4*.012;o.box(l-d,u-d,c-d,l+d,u+d,c+d,(a*7+s*3+i*11)%9===0)}for(let a=0;a<9;a++){let s=-r+.2+a/8*(2*r-.4);o.rod(o.p(s,.25,-t+.15),o.p(s,.25,t-.15),.006),o.rod(o.p(s,o.H-.25,-t+.15),o.p(s,o.H-.25,t-.15),.006)}o.hang([o.p(-r+.2,o.H-.25,0),o.p(r-.2,o.H-.25,0)])}function Ca(o,e,n,r){let t=0,a=1,s=[e[0]-o[0],e[1]-o[1]],i=[[-s[0],o[0]+n],[s[0],n-o[0]],[-s[1],o[1]+r],[s[1],r-o[1]]];for(let[l,u]of i){if(l===0){if(u<0)return null;continue}let c=u/l;if(l<0?t=Math.max(t,c):a=Math.min(a,c),t>a)return null}return[[o[0]+s[0]*t,o[1]+s[1]*t],[o[0]+s[0]*a,o[1]+s[1]*a]]}function Da(o,e,n){let r=o.W*.46;if(e==="steps"){for(let s=0;s<7;s++){let i=-r+s/7*2*r+.05,l=i+2*r/7-.14,u=.12+s/6*(o.H-.4);o.box(i,u,-.75,l,u+.05,.75),o.box(i,u+.05,.73,l,u+.065,.75,!0),o.hang([o.p((i+l)/2,u+.05,-.6),o.p((i+l)/2,u+.05,.6)])}return}if(e==="sheets"){for(let a=0;a<4;a++){let s=.25+a*((o.H-.5)/3),i=24,l=6,u=o.D*.36-a*.05,c=(d,f)=>{let h=-r+d/i*2*r,m=-u+f/l*2*u;return o.p(h,s+.07*Math.sin(h*1.6+a*1.1)*Math.cos(m*2.1+a),m)};for(let d=0;d<i;d++)for(let f=0;f<l;f++)o.m.quad(c(d,f),c(d+1,f),c(d+1,f+1),c(d,f+1),o.body,o.material);a===3&&o.curve(Array.from({length:i+1},(d,f)=>c(f,l)),.008,4,!1,!0),a===3&&o.hang([c(2,3),c(12,3),c(22,3)])}return}if(e==="arch"){for(let s=0;s<12;s++){let i=Math.PI*(.08+.84*s/11),l=Math.cos(i)*r*.82,u=-Math.sin(i)*o.D*.32+o.D*.14,c=.55+.6*Math.sin(i)**2,d=.1+.05*Math.sin(i),f=o.p(l,0,u);o.m.cylinder(f[0],f[2],d,cn(o)-c,cn(o),16,o.body,o.material),o.m.disc([f[0],cn(o)-c-.002,f[2]],[0,1,0],d*.55,d*.8,16,o.glow,Mr),o.hang([[f[0],cn(o),f[2]]])}return}let t=9;for(let a=0;a<t;a++){let s=-r+.3+a/(t-1)*(2*r-.6),i=o.H*.5+.12*Math.sin(a*1.3),l=(u,c)=>{let d=Math.sin(u)*.36,f=(1-Math.cos(u))*.3;return o.p(s+f*.6,i+d*.25,c*.55)};for(let u=0;u<6;u++)for(let c=-2;c<2;c++){let d=-.9+u/6*1.8,f=-.9+(u+1)/6*1.8;o.m.quad(l(d,c/2),l(f,c/2),l(f,(c+1)/2),l(d,(c+1)/2),o.body,o.material,n(-1,0,0))}o.rod(l(-.9,0),l(.9,0),.006,a%3===1),o.hang([l(0,-.8),l(0,.8)])}}function cn(o){return o.p(0,o.H,0)[1]}function Oa(o){let e=o.H-.05,n=o.W*.44;o.rod(o.p(-n,e,0),o.p(n,e,0),.03);for(let r=0;r<38;r++){let t=-n+.1+r/37*(2*n-.2),a=(o.rand()-.5)*.5,s=.7+o.rand()*.6,i=o.rand()*Se,l=[];for(let u=0;u<=5;u++){let c=u/5;l.push(o.p(t+.06*Math.sin(i+c*3),e-c*s,a+.05*Math.cos(i+c*2.4)))}o.curve(l,[.012,.011,.01,.009,.008,.007],4,!1,r%7===3)}o.hang([o.p(-n*.9,e,0),o.p(0,e,0),o.p(n*.9,e,0)])}function Ba(o,e){let n=o.H*.5;if(e==="spiral"){let r=[],t=[];for(let a=0;a<=140;a++){let s=a/140,i=s*Se*3,l=.12+1.15*s**1.3;r.push(o.p(Math.cos(i)*l*2,n-.3+s*.55,Math.sin(i)*l*.85)),t.push(.012+.04*s)}o.curve(r,t,6);for(let a=10;a<r.length;a+=13)o.bead(r[a],.05,!0,6);o.hang([r[20],r[80],r[139]]);return}o.bead(o.p(0,n,0),.16,!0,14);for(let r=0;r<5;r++){let t=.7+r*.5,a=Math.min(o.D*.45,.32+r*.2),s=Je(o,0,n,0,t,a,"uv",56,(r-2)*.12);o.curve(s,.014,4,!0),o.bead(s[r*11%56],.06+r%2*.02,r%2===0,8)}o.hang([o.p(0,n+.16,0),o.p(-2.6,n,0),o.p(2.6,n,0)])}var et=J([-.53,.6,.6]),te=Te(dt),Fr=2.6,Ee={sun:[2.55,2.42,2.22],sky:[.78,.84,.94],ground:[.4,.39,.37],interior:[.5,.495,.48],panel:3.4,emit:3.4,fog:[.86,.89,.93],fogDensity:45e-5,exposure:.8,exposureInside:1.35,bloomThreshold:2.2,bloomStrength:.16,grain:.016},Pr=10,Wn=7,E={stoneFloor:k("#C3BDB2"),lobbyFloor:k("#CBC5BA"),graphite:k("#3A3D42"),graphiteDeep:k("#25272B"),travertine:k("#E6E0D5"),band:k("#E2DCD1"),plaster:k("#EFEEEB"),panel:k("#FFFFFF"),titanium:k("#A9AEB4"),fin:k("#57524C"),steel:k("#CDD2D7"),bronze:k("#9E8566"),blackGlass:k("#0B0D10"),paving:k("#B5AFA5"),plateau:k("#7C7D75"),water:k("#0A0C0F"),glass:k("#CFE0DC"),facadeGlass:k("#9DB0BF"),glassFloor:k("#E4EBEA"),leather:k("#1B1A19"),carpet:k("#1F2225"),foliage:k("#34503A"),foliageLight:k("#4A6A45"),bark:k("#4B3D31"),soil:k("#2A2622"),runner:k("#E3232C"),runnerInlay:k("#A8262B"),warm:k("#FFE2B8"),marble:k("#ECE9E3"),terrazzo:k("#D8D2C8"),darkCeiling:k("#17181B"),fabric:k("#1C1D20"),cushion:k("#2A2B2E"),porcelain:k("#F3F1EC"),brass:k("#B99B66")},M={stoneFloor:{gloss:.9,pattern:1},graphiteFloor:{gloss:.9,pattern:5},graphite:{gloss:.82,pattern:5},stoneWall:{gloss:.28,pattern:2},band:{gloss:.4,pattern:2},plaster:{gloss:.08,pattern:10},panel:{gloss:.1,emit:1},line:{gloss:.2,emit:.55},titanium:{gloss:.62,pattern:3},steel:{gloss:.94,pattern:4},bronze:{gloss:.6,pattern:9},blackGlass:{gloss:.96,pattern:13},paving:{gloss:.45,pattern:12},plateau:{gloss:.1,pattern:15},water:{gloss:.985,pattern:6},leather:{gloss:.55,pattern:7},carpet:{gloss:.05,pattern:8},foliage:{gloss:.3,pattern:11},bark:{gloss:.2,pattern:14},matte:{gloss:.15},paint:{gloss:.18,pattern:10},walnut:{gloss:.42,pattern:16},marble:{gloss:.88,pattern:1},terrazzo:{gloss:.78,pattern:17},terrazzoFloor:{gloss:.86,pattern:17},fabric:{gloss:.04,pattern:8},chrome:{gloss:.95,pattern:4},porcelain:{gloss:.7},polishedBrass:{gloss:.86,pattern:4}},Ua={blackGlass:[k("#0E0F12"),{gloss:.3}],bronze:[E.bronze,{gloss:.38,pattern:9}],steel:[E.titanium,{gloss:.38,pattern:3}],travertine:[E.travertine,M.stoneWall],marble:[E.marble,{gloss:.45,pattern:1}],graphite:[E.graphite,{gloss:.32,pattern:5}],terrazzo:[E.terrazzo,{gloss:.4,pattern:17}]},$a={noir:[E.steel,M.chrome],chroma:[E.bronze,M.bronze],warm:[E.brass,M.polishedBrass],gallery:[E.porcelain,M.porcelain]};function Ha(o){return o.wallFinish==="walnut"?[k(o.wall),M.walnut]:o.wallFinish==="travertine"?[k(o.wall),M.stoneWall]:[k(o.wall),M.paint]}function Wa(o){return[...o].reduce((e,n)=>e*31+n.charCodeAt(0)>>>0,7)}function za(o){let e=he[o]?.tier??"T01",[n,r,t]=k(pe[e]),a=s=>Math.min(1,s*.7+.3);return[a(n),a(r),a(t)]}function Ga(o){let e=o>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Sr(o,e,n,r,t,a,s,i){let l=J(Pe(n,e)),u=Math.abs(l[1])>.9?[1,0,0]:[0,1,0],c=J(ge(l,u)),d=ge(l,c),f=(h,m,p)=>{let b=[c[0]*Math.cos(p)+d[0]*Math.sin(p),c[1]*Math.cos(p)+d[1]*Math.sin(p),c[2]*Math.cos(p)+d[2]*Math.sin(p)];return[[h[0]+b[0]*m,h[1]+b[1]*m,h[2]+b[2]*m],b]};for(let h=0;h<a;h++){let m=h/a*Math.PI*2,p=(h+1)/a*Math.PI*2,[b,v]=f(e,r,m),[T,w]=f(e,r,p),[A]=f(n,t,m),[P]=f(n,t,p);o.vertex(b,v,s,i),o.vertex(A,v,s,i),o.vertex(P,w,s,i),o.vertex(b,v,s,i),o.vertex(P,w,s,i),o.vertex(T,w,s,i)}}function Lr(){let o=new ot,e=new ot,n=new ot,r=[],t=[],a=[],s=[],i=[],l=[],u=[],c=[],d=Ga(7),f=(x,g)=>{let y=e.vertexCount;g();let F=e.vertexCount-y;F>0&&a.push({first:y,count:F,centre:x})},h=(x,g=0)=>({gloss:x,emit:g}),m=(x,g,y,F,L)=>{let[z,N,q,X]=L,R=(I,G,U,W)=>s.push(I,g,G,U,W,z,N,q,X,0);R(x-F,y-F,0,0),R(x+F,y-F,1,0),R(x+F,y+F,1,1),R(x-F,y-F,0,0),R(x+F,y+F,1,1),R(x-F,y+F,0,1)},p=(x,g,y,F,L)=>m(x,g+.012,y,F,[0,0,0,L]),b=(x,g,y,F,L,z)=>m(x,g+.014,y,F,[L[0]*z,L[1]*z,L[2]*z,0]),v=(x,g)=>{let y=x.map(L=>L[0]),F=x.map(L=>L[1]);for(let L=Math.floor(Math.min(...y)/3)*3+1.5;L<Math.max(...y);L+=3)for(let z=Math.floor(Math.min(...F)/3)*3+1.5;z<Math.max(...F);z+=3){if(![[L-1.05,z-1.05],[L+1.05,z-1.05],[L+1.05,z+1.05],[L-1.05,z+1.05]].every(R=>vo(R,x)))continue;let X=.8;o.quad([L-X,g,z+X],[L+X,g,z+X],[L+X,g,z-X],[L-X,g,z-X],E.panel,M.panel,[0,-1,0])}},T=Be-re,w=(x,g,y)=>{if(!g){o.prism(x.poly,y,y,E.plaster,M.plaster,{top:!1,sides:!1}),v(x.poly,y-.012);return}let F=(X,R)=>Ve(x.id,X,R),L=[F(_,0),F(_,_),F(O,_),F(O,0)],z=[F(_,_),F(O,O),F(O,_)],N=en[g.mood],q=(X,R,I)=>{let[G,U]=F(X,R);o.annulus(G,U,.001,.065,y-.012,12,E.panel,{gloss:.1,emit:1.6}),o.annulus(G,U,.065,.11,y-.01,16,E.graphite,{...M.graphite,ao:I})};o.prism(z,y,y,E.darkCeiling,{...M.plaster,ao:mt},{top:!1,sides:!1});for(let[X,R]of[[_+5.6,_+2.4],[_+8.2,_+4.6],[_+8.4,_+1.6]])q(X,R,mt);if(Dn(g.mood))o.prism(L,y,y,E.plaster,{...M.plaster,ao:N},{top:!1,sides:!1}),v(L,y-.012);else{o.prism(L,y,y,E.darkCeiling,{...M.plaster,ao:N},{top:!1,sides:!1});for(let X of[_+2.1,_+7.3])for(let R of[1.4,3.8,6.2,8.6])q(X,R,N)}},A=(x,g,y,F,L,z,N)=>{let q=Math.hypot(g[0]-x[0],g[1]-x[1]),X=(g[0]-x[0])/q,R=(g[1]-x[1])/q,I=Math.max(8,Math.round(q/.11)),G=U=>{let W=U/I,C=W*Math.PI*2*(I/2),$=Math.sin(C)*L,Y=Math.cos(C)*L*Math.PI*2*(I/2)/q,se=-R-X*Y,ne=X-R*Y,oe=Math.hypot(se,ne);return[[x[0]+X*q*W-R*$,x[1]+R*q*W+X*$],[se/oe,ne/oe]]};for(let U=0;U<I;U++){let[W,C]=G(U),[$,Y]=G(U+1),se=[W[0],y,W[1]],ne=[$[0],y,$[1]],oe=[$[0],F,$[1]],ce=[W[0],F,W[1]];o.vertex(se,[C[0],0,C[1]],z,N),o.vertex(ne,[Y[0],0,Y[1]],z,N),o.vertex(oe,[Y[0],0,Y[1]],z,N),o.vertex(se,[C[0],0,C[1]],z,N),o.vertex(oe,[Y[0],0,Y[1]],z,N),o.vertex(ce,[C[0],0,C[1]],z,N)}},P=(x,g,y)=>{let F=ke(x.node),L=x.rooms,z=x.bay.id,N=(ie,xe)=>Ve(z,ie,xe),q=x.bay.inward,X=x.bay.along,R=k(F.accent),[I,G]=Ha(F),U=y+T,W=!Dn(F.mood),{stele:C,screen:$,partition:Y}=Ne,se=en[F.mood],ne=ie=>({...ie,ao:se}),oe=ie=>({...ie,ao:mt});o.wall(N(_+.2,.17),N(O-.02,.17),y,U,.04,I,ne(G));let ce=Y.l,ae=Y.thick/4;for(let[ie,xe,_e]of[[_+.02,Y.d0,y],[Y.d1,O-.02,y],[Y.d0,Y.d1,y+2.75]])o.wall(N(ie,ce-ae),N(xe,ce-ae),_e,U,2*ae,I,ne(G)),o.wall(N(ie,ce+ae),N(xe,ce+ae),_e,U,2*ae,E.fabric,oe(M.fabric));let we=(Y.d0+Y.d1)/2;i.push({key:"theater:marquee",rect:le(N(we,ce-2*ae-.02),y+3.15,Ae(-X[0],-X[1]),2.1,.41,0)});let[me,He]=Ua[F.stele],K=C.d+C.thick/2;o.wall(N(K,C.l0),N(K,C.l1),y+.07,y+C.height,C.thick,me,ne(He)),o.wall(N(K,C.l0+.06),N(K,C.l1-.06),y,y+.07,C.thick-.12,E.graphiteDeep,ne(M.graphite));for(let ie of[C.d+.055,C.d+C.thick-.055])o.wall(N(ie,C.l0+.08),N(ie,C.l1-.08),y+.012,y+.026,.008,R,M.line);o.wall(N(K,C.l0+.02),N(K,C.l1-.02),y+C.height,y+C.height+.012,C.thick-.04,R,M.line),ko(F.stele)&&o.wall(N(C.d-.002,C.l0+.08),N(C.d-.002,$.l0-.14),y+.14,y+C.height-.1,.004,k(tn[F.stele]),ne({gloss:.12}));let Fe=Ae(-q[0],-q[1]),je=$.l1-$.l0,It=je*3/4,yn=y+$.bottom+It/2;o.wall(N(C.d-.0075,$.l0-.05),N(C.d-.0075,$.l1+.05),yn-It/2-.05,yn+It/2+.05,.015,E.blackGlass,ne(M.blackGlass)),l.push({kind:"store",node:x.node,level:g,rect:le(x.display,yn,Fe,je,It,0)});let st=L.lettering;u.push({key:`stele:${x.node}`,node:x.node,level:g,station:"model",rect:le(st.at,y+st.bottom+st.height/2,st.facing,st.width,st.height,0)});let Kn=N(C.d-1.5,5);b(Kn[0],y,Kn[1],2.1,W?R:E.warm,W?.15:.05);let ye=L.print,xn=y+ye.bottom+ye.height/2,Vt=ie=>q[0]*ie[0]+q[1]*ie[1],ta=Vt(ye.at)-ye.width/2,na=Vt(ye.at)+ye.width/2;o.wall(N(ta-.05,ce-2*ae-.035),N(na+.05,ce-2*ae-.035),xn-ye.height/2-.05,xn+ye.height/2+.05,.07,E.panel,{gloss:.2,emit:.32}),l.push({kind:"print",node:x.node,level:g,rect:le(ye.at,xn,ye.facing,ye.width,ye.height,0)}),u.push({key:`caption:${x.node}`,node:x.node,level:g,rect:le(N(Vt(ye.at),ce-2*ae-.005),y+ye.bottom-.3,ye.facing,ye.width,ye.width/8,0)}),u.push({key:`lesson:${x.node}`,node:x.node,level:g,station:"lesson",rect:le(x.panel.at,y+1.85,Ae(X[0],X[1]),4.3,2.5,0)});let it=x.examples;u.push({key:`examples:${x.node}`,node:x.node,level:g,station:"examples",rect:le(it.at,y+it.bottom+it.height/2,it.facing,it.width,it.height,0)});let[Nt,Ct]=x.holo.at;o.cylinder(Nt,Ct,.95,y,y+.18,40,E.steel,ne(M.steel)),o.annulus(Nt,Ct,.8,.86,y+.182,48,E.panel,M.line),o.annulus(Nt,Ct,.01,.76,y+.181,40,E.plaster,{gloss:.5,emit:W?.08:.18}),p(Nt,y,Ct,1.7,.22);let qn=Vt(x.board.at),Qn=X[0]*x.board.at[0]+X[1]*x.board.at[1];o.wall(N(qn-.023,Qn-x.board.width/2-.05),N(qn-.023,Qn+x.board.width/2+.05),y+x.board.bottom-.05,y+x.board.bottom+x.board.height+.05,.024,E.titanium,ne(M.titanium)),l.push({kind:"board",node:x.node,level:g,rect:le(x.board.at,y+x.board.bottom+x.board.height/2,x.board.facing,x.board.width,x.board.height,0)});let gt=L.bench,Dt=gt.depth/2,We=[gt.a[0]-q[0]*Dt,gt.a[1]-q[1]*Dt],ze=[gt.b[0]+q[0]*Dt,gt.b[1]+q[1]*Dt],[oa,ra]=W?[E.graphite,M.graphite]:[E.travertine,M.band];o.box([Math.min(We[0],ze[0])+.04,y,Math.min(We[1],ze[1])+.04],[Math.max(We[0],ze[0])-.04,y+.06,Math.max(We[1],ze[1])-.04],E.graphiteDeep,ne(M.graphite)),o.box([Math.min(We[0],ze[0]),y+.06,Math.min(We[1],ze[1])],[Math.max(We[0],ze[0]),y+.44,Math.max(We[1],ze[1])],oa,ne(ra)),p((We[0]+ze[0])/2,y,(We[1]+ze[1])/2,2.4,.14),o.prism(L.cinema.floor,y,y+.012,E.carpet,oe(M.carpet),{bottom:!1});let Ot=Math.SQRT1_2;o.wall(N(_+.5+.17*Ot,_+.5-.17*Ot),N(O-.4+.17*Ot,O-.4-.17*Ot),y,U,.04,E.fabric,oe(M.fabric)),A(L.cinema.curtain[0],L.cinema.curtain[1],y+.02,U-.04,.05,E.fabric,oe(M.fabric));let ue=x.theater,En=le(ue.at,y+ue.bottom+ue.height/2,ue.facing,ue.width,ue.height,0),Zn=[Math.sin(ue.facing),-Math.cos(ue.facing)],Jn=[En.u[0],En.u[2]],lt=(ie,xe)=>[ue.at[0]+Jn[0]*ie+Zn[0]*xe,ue.at[1]+Jn[1]*ie+Zn[1]*xe],ct=ue.width/2,Bt=y+ue.bottom+ue.height;o.wall(lt(-ct-.16,-.035),lt(ct+.16,-.035),y+ue.bottom-.16,Bt+.16,.04,E.blackGlass,oe({gloss:.45})),o.wall(lt(-ct-.1,-.012),lt(ct+.1,-.012),y+ue.bottom-.27,y+ue.bottom-.25,.02,E.warm,M.line),o.wall(lt(-ct-.1,-.012),lt(ct+.1,-.012),Bt+.25,Bt+.27,.02,E.warm,M.line),l.push({kind:"theater",node:x.node,level:g,rect:En}),i.push({key:"theater:marquee",rect:le(ue.at,Bt+.62,ue.facing,3.4,.66,.02)});for(let ie of ue.seats){let[xe,_e]=ie,Ut=Math.atan2(ue.at[0]-xe,ue.at[1]-_e);o.cylinder(xe,_e,.14,y,y+.24,10,E.steel,oe(M.steel),{caps:!1}),o.cylinder(xe,_e,.42,y+.24,y+.3,16,E.steel,oe(M.steel)),o.cylinder(xe,_e,.4,y+.3,y+.5,16,E.leather,oe(M.leather)),o.cylinder(xe,_e,.42,y+.3,y+1.1,10,E.leather,oe(M.leather),{arc:[Ut+Math.PI-1.3,Ut+Math.PI+1.3]}),o.cylinder(xe,_e,.36,y+.5,y+1,10,E.leather,oe(M.leather),{arc:[Ut+Math.PI-1.15,Ut+Math.PI+1.15],inward:!0}),p(xe,y+.012,_e,.75,.24)}for(let ie=0;ie<6;ie++){let[xe,_e]=N(we-.6-ie*.95,ce+.36);b(xe,y+.013,_e,.11,E.warm,.7)}let Ke=L.installation,[aa,sa]=$a[F.mood];wr(n,F.installation,{at:Ke.at,bottom:y+Ke.bottom,top:y+Ke.top,along:Ke.along,inward:Ke.inward,span:Ke.span,depth:Ke.depth,ceiling:U},{body:aa,material:ne(sa),glow:R,seed:Wa(x.node),light:se}),b(Ke.at[0]+q[0]*.8,y,Ke.at[1]+q[1]*.8,2.4,R,W?.12:.04)},B={graphite:[E.graphite,M.graphiteFloor],pale:[E.stoneFloor,M.stoneFloor],terrazzo:[E.terrazzo,M.terrazzoFloor]};for(let x of he){let g=x.y,y=x.index,F=za(y),L=new Set(x.stores.map(R=>R.bay.id)),z=n.vertexCount,N=o.vertexCount;for(let R of x.bays){let I=x.stores.find(C=>C.bay.id===R.id),G=I?ke(I.node):null,[U,W]=G?B[G.floor]:R.use==="lobby"?[E.lobbyFloor,M.stoneFloor]:[E.stoneFloor,M.stoneFloor];o.prism(R.poly,g-re,g,U,G?{...W,ao:en[G.mood]}:W,{bottom:!1}),w(R,G,g+T)}let q=[[[-D,D],[D,D],[_,_],[-_,_]],[[D,D],[D,-D],[_,-_],[_,_]],[[D,-D],[-D,-D],[-_,-_],[_,-_]],[[-D,-D],[-D,D],[-_,_],[-_,-_]]];for(let R of q)if(y===0)o.prism(R,g-re,g,E.stoneFloor,M.stoneFloor,{bottom:!1});else{let I=R.reduce((U,W)=>U+W[0],0)/4,G=R.reduce((U,W)=>U+W[1],0)/4;f([I,g,G],()=>{let U=se=>[se[0],g-.02,se[1]],[W,C,$,Y]=R;W&&C&&$&&Y&&e.quad(U(W),U(C),U($),U(Y),E.glassFloor,h(.5),[0,1,0])})}for(let[R,I]of Xa(D))o.wall(R,I,g-re-.05,g+.02,.18,E.band,M.band),y>0&&o.wall(Ar(R,I,.12),Ar(I,R,.12),g-re-.09,g-re-.05,.05,E.panel,M.line);o.box([-yt,g-.3,Ht-.15],[yt,g,D+.05],E.stoneFloor,M.stoneFloor);for(let R of[-1,1])for(let I of[-1,1])o.wall([R*_,I*_],[R*O,I*O],g,g+T,.3,E.travertine,M.stoneWall);o.wall([_,0],[O,0],g,g+T,.3,E.travertine,M.stoneWall),o.wall([0,-_],[0,-O],g,g+T,.3,E.travertine,M.stoneWall),o.wall([-_,0],[-O,0],g,g+T,.3,E.travertine,M.stoneWall);for(let[R,I,G]of un()){for(let $=0;$<4;$++){let Y=$/4,se=($+1)/4,ne=[R[0]+(I[0]-R[0])*Y,R[1]+(I[1]-R[1])*Y],oe=[R[0]+(I[0]-R[0])*se,R[1]+(I[1]-R[1])*se],ce=[];if(y===0&&G[1]===1){let ae=Math.min(ne[0],oe[0]),we=Math.max(ne[0],oe[0]);we<=-Ie||ae>=Ie?ce.push([ne,oe]):(ae<-Ie&&ce.push([[ae,O],[-Ie,O]]),we>Ie&&ce.push([[Ie,O],[we,O]]))}else ce.push([ne,oe]);for(let[ae,we]of ce)f([(ae[0]+we[0])/2,g+T/2,(ae[1]+we[1])/2],()=>e.pane(ae,we,g,g+T,E.facadeGlass,h(.34,.32)))}let U=[R[0]+G[0]*.31,R[1]+G[1]*.31],W=[I[0]+G[0]*.31,I[1]+G[1]*.31],C=($,Y,se)=>{let ne=Math.hypot(Y[0]-$[0],Y[1]-$[1]);return[$[0]-(Y[0]-$[0])/ne*se,$[1]-(Y[1]-$[1])/ne*se]};if(y>0){o.wall(C(U,W,.31),C(W,U,.31),g-re-.18,g+.14,.62,E.band,M.band);let $=[R[0]+G[0]*.625,R[1]+G[1]*.625],Y=[I[0]+G[0]*.625,I[1]+G[1]*.625];o.wall($,Y,g-re-.17,g-re-.13,.01,F,M.line)}}i.push({key:`levelno:${y}`,rect:le([-13.5,O+.64],g+3.1,Math.PI,7.2,1.8,0)});for(let[R,I]of Ya())f([(R[0]+I[0])/2,g+.55,(R[1]+I[1])/2],()=>e.pane(R,I,g,g+1.1,E.glass,h(.1))),o.wall(R,I,g+1.06,g+1.12,.07,E.steel,M.titanium);let X=Math.asin(yt/be)+.05;f([0,g+Be/2,0],()=>{e.cylinder(0,0,be,g,g+2.7,26,E.glass,h(.08),{arc:[X,Math.PI*2-X]}),e.cylinder(0,0,be,g+2.7,g+Be,30,E.glass,h(.08),{caps:!1})}),o.cylinder(0,0,be+.06,g-re,g+.03,28,E.steel,M.steel,{caps:!1}),o.cylinder(0,0,be+.06,g+2.7,g+2.84,28,E.steel,M.steel,{caps:!1}),i.push({key:`level:${y}`,rect:le([0,(D+_)/2],g+4.82,0,4.2,.86,.075)}),i.push({key:`level:${y}`,rect:le([0,(D+_)/2],g+4.82,Math.PI,4.2,.86,.075)}),o.box([-2.16,g+4.36,(D+_)/2-.06],[2.16,g+5.28,(D+_)/2+.06],E.blackGlass,M.blackGlass);for(let R of[-1.7,1.7])o.box([R-.02,g+5.26,7.98],[R+.02,g+T,8.02],E.steel,M.steel);{let R=le(Ge,g+1.95,bo,2.9,2.2,.17),I=[Ge[0]-R.u[0]*1.7,Ge[1]-R.u[2]*1.7],G=[Ge[0]+R.u[0]*1.7,Ge[1]+R.u[2]*1.7];o.wall(I,G,g,g+3.4,.3,E.travertine,M.stoneWall),o.wall([I[0]+R.u[0]*.05,I[1]+R.u[2]*.05],[G[0]-R.u[0]*.05,G[1]-R.u[2]*.05],g+3.33,g+3.37,.31,F,M.line),l.push({kind:"directory",level:y,rect:R}),p(Ge[0],g,Ge[1],2.4,.14);for(let U of[-1,1])o.box([U*3.6-.05,g,16.2],[U*6.4+.05,g+.44,17],E.travertine,M.band),o.box([U*3.6,g+.44,16.25],[U*6.4,g+.47,16.95],E.graphite,M.graphite),p(U*5,g,16.6,2,.12)}for(let R of x.stores){let I=R.bay.inward,G=Ae(-I[0],-I[1]),[U,W]=R.bay.front,C=R.bay.along,$=[R.door[0]-C[0]*xt,R.door[1]-C[1]*xt],Y=[R.door[0]+C[0]*xt,R.door[1]+C[1]*xt];f([(U[0]+$[0])/2,g+2,(U[1]+$[1])/2],()=>e.pane(U,$,g,g+4,E.glass,h(.07))),f([(Y[0]+W[0])/2,g+2,(Y[1]+W[1])/2],()=>e.pane(Y,W,g,g+4,E.glass,h(.07))),o.wall(U,W,g+4,g+T,.36,E.travertine,M.stoneWall);let se=(K,Fe)=>[K[0]-C[0]*Fe,K[1]-C[1]*Fe];for(let[K,Fe]of[[$,1],[Y,-1]]){let je=se(K,-Fe*.12);o.box([Math.min(K[0],je[0])-Math.abs(I[0])*.22,g,Math.min(K[1],je[1])-Math.abs(I[1])*.22],[Math.max(K[0],je[0])+Math.abs(I[0])*.22,g+4.06,Math.max(K[1],je[1])+Math.abs(I[1])*.22],E.steel,M.steel)}o.wall(se($,.12),se(Y,-.12),g+3.98,g+4.1,.44,E.steel,M.steel);for(let K of[U,W])o.box([K[0]-.05,g,K[1]-.05],[K[0]+.05,g+4,K[1]+.05],E.titanium,M.titanium);let ne=K=>[K[0]-I[0]*.19,K[1]-I[1]*.19];o.wall(ne(U),ne(W),g+4.32,g+4.35,.02,F,M.line),i.push({key:`store:${R.node}`,rect:le(R.door,g+4.85,G,5.6,.95,.2)});let oe=K=>[K[0]+I[0]*.06,K[1]+I[1]*.06],ce=oe([(U[0]+$[0])/2,(U[1]+$[1])/2]),ae=oe([(Y[0]+W[0])/2,(Y[1]+W[1])/2]);u.push({key:`banner:${R.node}`,node:R.node,level:y,rect:le(ce,g+2.05,G,2.2,3.1,0)}),l.push({kind:"window",node:R.node,level:y,rect:le(ae,g+2.25,G,2.4,1.8,0)});let we=Ve(R.bay.id,_-.78,9.25),me=Ve(R.bay.id,_,9.25),He=Ve(R.bay.id,_-1.45,9.25);o.wall(me,He,g+3.84,g+3.89,.04,E.steel,M.steel),i.push({key:`blade:${R.node}`,rect:le(we,g+3.45,Ae(C[0],C[1]),1.3,.62,.02)}),i.push({key:`blade:${R.node}`,rect:le(we,g+3.45,Ae(-C[0],-C[1]),1.3,.62,.02)}),P(R,y,g),u.push({key:`medallion:${R.node}`,node:R.node,level:y,rect:An(R.medallion,g+.016,Ae(I[0],I[1]),2.3,2.3)});for(let K of Wt){let Fe=R.stations[K],je=[Fe.p[0]+Math.sin(Fe.heading)*.95,Fe.p[1]-Math.cos(Fe.heading)*.95];i.push({key:`station:${K}`,rect:An(je,g+.018,Fe.heading,1.3,.46)})}}for(let R of x.lounges)ka(o,R,g,d,c);r.push({first:z,count:n.vertexCount-z}),t.push({first:N,count:o.vertexCount-N})}for(let x of[he[dt-1]])if(x){for(let g of x.bays)o.prism(g.poly,te-re,te,E.band,M.band,{bottom:!1});for(let g of[[[-D,D],[D,D],[_,_],[-_,_]],[[D,D],[D,-D],[_,-_],[_,_]],[[D,-D],[-D,-D],[-_,-_],[_,-_]],[[-D,-D],[-D,D],[-_,_],[-_,-_]]])o.prism(g,te-re,te,E.band,M.band,{bottom:!1}),o.prism(g,te-re,te-re,E.plaster,M.plaster,{top:!1,sides:!1})}f([0,te,0],()=>e.quad([-D,te,-D],[D,te,-D],[D,te,D],[-D,te,D],E.facadeGlass,h(.2,.08),[0,1,0]));for(let[x,g,y]of un()){let F=[x[0]+y[0]*.31,x[1]+y[1]*.31],L=[g[0]+y[0]*.31,g[1]+y[1]*.31],z=Math.hypot(L[0]-F[0],L[1]-F[1]),N=(L[0]-F[0])/z,q=(L[1]-F[1])/z;o.wall([F[0]-N*.31,F[1]-q*.31],[L[0]+N*.31,L[1]+q*.31],te-re-.18,te+1.1,.62,E.band,M.band);let X=[x[0]+y[0]*.625,x[1]+y[1]*.625],R=[g[0]+y[0]*.625,g[1]+y[1]*.625];o.wall(X,R,te-re-.17,te-re-.13,.01,E.panel,M.line);let I=W=>[W[0]-y[0]*1.2,W[1]-y[1]*1.2];o.wall(I(x),I(g),te,te+Fr,.4,E.band,M.band);let G=[(I(x)[0]+I(g)[0])/2,(I(x)[1]+I(g)[1])/2];i.push({key:"crown",rect:le(G,te+Fr/2+.1,Ae(y[0],y[1]),22,1.75,.21)});let U=W=>[W[0]+y[0]*.205,W[1]+y[1]*.205];o.wall(U(I(x)),U(I(g)),te+.22,te+.26,.01,E.runner,M.line)}f([0,te+2,0],()=>e.cylinder(0,0,be,te,te+3.4,30,E.glass,h(.1),{caps:!1})),o.cylinder(0,0,be+.08,te+3.4,te+3.62,36,E.steel,M.steel);{let g=te+1.1;for(let[y,F,L]of un()){let z=Math.hypot(F[0]-y[0],F[1]-y[1]),N=(F[0]-y[0])/z,q=(F[1]-y[1])/z;for(let X=1;X<Math.round(z/2.5);X++){let R=[y[0]+N*X*2.5,y[1]+q*X*2.5],I=L[1]===1&&Math.abs(R[0])<=Ie+.7?4.32:-.02,G=[R[0]+L[0]*.02,R[1]+L[1]*.02],U=[R[0]+L[0]*.62,R[1]+L[1]*.62];o.wall(G,U,I,g,.14,E.fin,M.titanium)}}for(let y of[-1,1])for(let F of[-1,1])o.box([y*O-.45+y*.17,-.02,F*O-.45+F*.17],[y*O+.45+y*.17,g+.02,F*O+.45+F*.17],E.band,M.band);for(let[y,F,L]of un()){let z=[y[0]+L[0]*.31,y[1]+L[1]*.31],N=[F[0]+L[0]*.31,F[1]+L[1]*.31];L[1]===1?(o.wall(z,[-Ie-.7,z[1]],-.02,.32,.62,E.graphite,M.graphite),o.wall([Ie+.7,N[1]],N,-.02,.32,.62,E.graphite,M.graphite)):o.wall(z,N,-.02,.32,.62,E.graphite,M.graphite)}}{o.box([-4.4,4.06,O+.1],[4.4,4.32,O+3.6],E.steel,M.steel),o.quad([-4.2,4.055,O+3.4],[4.2,4.055,O+3.4],[4.2,4.055,O+.3],[-4.2,4.055,O+.3],E.panel,{gloss:.1,emit:.55},[0,-1,0]);for(let x of[-1,1])o.box([x*(Ie+.36)-.34,-.02,O-.1],[x*(Ie+.36)+.34,4.06,O+.75],E.band,M.band);i.push({key:"entrance",rect:le([0,O+.12],4.95,Math.PI,7.6,1.3,.05)}),p(0,0,O+2.2,4.2,.1)}o.annulus(0,0,.01,54,-.02,120,E.paving,M.paving);for(let x of[29,38,47])o.annulus(0,0,x-.3,x+.3,-.015,160,E.graphite,M.graphite);o.cylinder(0,0,55,-.5,.04,120,E.graphite,M.graphite,{caps:!1}),o.annulus(0,0,54,55,.04,120,E.graphite,M.graphite),o.cylinder(0,0,54,-.5,.04,120,E.graphite,M.graphite,{caps:!1,inward:!0}),o.annulus(0,0,55,96,-.12,160,E.water,M.water),o.cylinder(0,0,96,-.12,-.02,160,E.graphite,M.graphite,{caps:!1,inward:!0}),o.annulus(0,0,96,97.2,-.02,160,E.graphite,M.graphite),o.annulus(0,0,97.2,2400,-.04,160,E.plateau,M.plateau);for(let x of[-1,1]){let g=x*9.5,y=O+12;o.cylinder(g,y,2.7,-.02,.32,56,E.steel,M.steel),o.annulus(g,y,2.45,2.7,.32,64,E.steel,M.steel),o.annulus(g,y,.01,2.45,.3,56,E.soil,M.matte),o.annulus(g,y,2.72,2.78,.004,64,E.panel,M.line),_r(o,g,.3,y,1.45,x>0?.6:2.4)}o.quad([-.035,0,O+3.7],[.035,0,O+3.7],[.035,0,44],[-.035,0,44],E.runnerInlay,{gloss:.8},[0,1,0]);for(let x=0;x<260;x++){let g=d()*Math.PI*2,y=be+.5+d()*(D-be-.9);c.push(Math.sin(g)*y,d()*te,Math.cos(g)*y,.01+d()*.018,d(),te,.04+d()*.08)}let H=new ot;return H.cylinder(0,0,be-.12,-.18,.01,40,E.graphite,M.graphiteFloor),H.annulus(0,0,be-.32,be-.26,.015,48,E.panel,M.line),H.cylinder(0,0,be-.12,2.58,2.66,40,E.steel,M.steel),H.annulus(0,0,.3,.55,2.575,32,E.panel,M.panel),{opaque:o.toArray(),glass:e.toArray(),glassPieces:a,decals:new Float32Array(s),signs:i,screens:l,overlays:u,bubbles:new Float32Array(c),cab:H.toArray(),detail:n.toArray(),detailLevels:r,opaqueLevels:t}}function _r(o,e,n,r,t,a){let s=(c,d,f)=>[e+(c*Math.cos(a)-f*Math.sin(a))*t,n+d*t,r+(c*Math.sin(a)+f*Math.cos(a))*t],i=[s(0,0,0),s(.32,.68,.08),s(-.22,1.38,-.06),s(.18,2.03,.05),s(-.05,2.53,0)],l=[.21,.15,.11,.075,.045];for(let c=1;c<i.length;c++){let d=i[c-1],f=i[c];d&&f&&Sr(o,d,f,(l[c-1]??.05)*t,(l[c]??.04)*t,10,E.bark,M.bark)}let u=[[s(.32,.68,.08),s(1.1,.98,.3),.85],[s(-.22,1.38,-.06),s(-1.05,1.58,-.35),.8],[s(.18,2.03,.05),s(.85,2.23,-.4),.7],[s(-.05,2.53,0),s(-.05,2.78,.05),.75],[s(-.22,1.38,-.06),s(-.2,1.58,.75),.6]];for(let[c,d,f]of u)Sr(o,c,d,.05*t,.03*t,6,E.bark,M.bark),o.sphere(d,f*t,12,E.foliage,M.foliage,.32),o.sphere([d[0]+f*t*.3,d[1]+f*t*.16,d[2]-f*t*.2],f*t*.62,10,E.foliageLight,M.foliage,.36)}function ka(o,e,n,r,t){let[a,s]=Ve(e.id,15,6);o.cylinder(a,s,1.55,n,n+.5,40,E.graphiteDeep,M.graphite),o.annulus(a,s,1.42,1.55,n+.5,48,E.steel,M.steel),o.annulus(a,s,.01,1.42,n+.47,40,E.soil,M.matte),o.annulus(a,s,1.56,1.6,n+.006,48,E.panel,M.line),_r(o,a,n+.47,s,1,r()*Math.PI*2);let[i,l]=Ve(e.id,13,11);o.cylinder(i,l,1.9,n,n+.34,40,E.graphiteDeep,M.graphite,{caps:!1}),o.annulus(i,l,1.78,1.9,n+.34,48,E.graphite,M.graphite),o.annulus(i,l,.01,1.78,n+.33,48,E.water,M.water);let u=Ve(e.id,17.2,2.5),c=Ve(e.id,17.2,6.5);o.box([Math.min(u[0],c[0])-.36,n,Math.min(u[1],c[1])-.36],[Math.max(u[0],c[0])+.36,n+.44,Math.max(u[1],c[1])+.36],E.travertine,M.band);for(let d=0;d<24;d++)t.push(a+(r()-.5)*5,n+r()*4,s+(r()-.5)*5,.008+r()*.012,r(),5.2,.03+r()*.05)}function un(){let o=O;return[[[-o,o],[o,o],[0,1]],[[o,o],[o,-o],[1,0]],[[o,-o],[-o,-o],[0,-1]],[[-o,-o],[-o,o],[-1,0]]]}function Xa(o){return[[[-o,o],[o,o]],[[o,o],[o,-o]],[[o,-o],[-o,-o]],[[-o,-o],[-o,o]]]}function Ar(o,e,n){let r=Math.hypot(e[0]-o[0],e[1]-o[1]);return[o[0]+(e[0]-o[0])/r*n,o[1]+(e[1]-o[1])/r*n]}function Ya(){let o=D,e=yt;return[[[-o,o],[-e,o]],[[e,o],[o,o]],[[o,o],[o,-o]],[[o,-o],[-o,-o]],[[-o,-o],[-o,o]],[[-e,Ht],[-e,o]],[[e,Ht],[e,o]]]}var ja=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),Ka=[.89,.137,.173],qa=[.55,.64,.73],Qa=[.77,.525,0];function fe(o,e,n,r,t=0){let a=f=>f.replace(`#version 300 es
`,`#version 300 es
#define Q ${t}
`),s=(f,h)=>{let m=o.createShader(f);if(!m)throw new Error(`${r}: cannot create shader`);if(o.shaderSource(m,a(h)),o.compileShader(m),!o.getShaderParameter(m,o.COMPILE_STATUS))throw new Error(`${r}: ${o.getShaderInfoLog(m)??"compile failed"}`);return m},i=o.createProgram();if(!i)throw new Error(`${r}: cannot create program`);let l=s(o.VERTEX_SHADER,e),u=s(o.FRAGMENT_SHADER,n);if(o.attachShader(i,l),o.attachShader(i,u),o.linkProgram(i),!o.getProgramParameter(i,o.LINK_STATUS))throw new Error(`${r}: ${o.getProgramInfoLog(i)??"link failed"}`);o.deleteShader(l),o.deleteShader(u);let c=new Map,d=o.getProgramParameter(i,o.ACTIVE_UNIFORMS);for(let f=0;f<d;f++){let h=o.getActiveUniform(i,f);h&&c.set(h.name,o.getUniformLocation(i,h.name))}return{p:i,u:c}}function Za(o,e){let n=r=>{let t=r*e;return Math.min(1,Math.max(0,t*(2.51*t+.03)/(t*(2.43*t+.59)+.14)))**.45454545454545453};return[n(o[0]),n(o[1]),n(o[2])]}var dn=class o{gl;tier;prog;post=null;vaos;counts={opaque:0,cab:0,decal:0,signs:0,bubbles:0,detail:0};overlayNormals;world;skyTex=null;skyLod=6;atlasTex=null;black;shadowTex=null;shadowMat=new Float32Array(16);shadowTexel=1/2048;shadowBias=2e-4;screenTex=new Map;ribbonCount=0;ribbonLength=0;ribbonBuf;flatBuf;signBuf;leaderBuf;reticleBuf;shell=null;beam=null;holoGpu=new Map;order;dist;scene=null;hdr=null;mirror=null;bloom=[];samples=4;mirrorVP=new Float32Array(16);mirrorInv=new Float32Array(16);reflect=new Float32Array(16);constructor(e,n,r){this.gl=e,this.world=n,this.tier=r,this.prog=this.programs(r==="cinematic"?1:0),r==="cinematic"&&(this.post=this.postPrograms());let t=i=>this.vao(i,[3,3,3,4]);this.counts.opaque=n.opaque.length/St,this.counts.cab=n.cab.length/St,this.counts.decal=n.decals.length/Pr,this.counts.bubbles=n.bubbles.length/Wn,this.counts.detail=n.detail.length/St;let a=new Float32Array(n.screens.length*30);n.screens.forEach((i,l)=>a.set(Kt(i.rect),l*30));let s=new Float32Array(n.overlays.length*30);n.overlays.forEach((i,l)=>s.set(Kt(i.rect),l*30)),this.signBuf=e.createBuffer(),this.ribbonBuf=e.createBuffer(),this.flatBuf=e.createBuffer(),this.leaderBuf=e.createBuffer(),this.reticleBuf=e.createBuffer(),this.vaos={opaque:t(n.opaque),glass:t(n.glass),cab:t(n.cab),detail:t(n.detail),decal:this.vao(n.decals,[3,2,4,1]),full:this.vao(new Float32Array([-1,-1,3,-1,-1,3]),[2]),signs:this.vaoFor(this.signBuf,[3,2]),screens:this.vao(a,[3,2]),overlays:this.vao(s,[3,2]),bubbles:this.bubbleVao(n.bubbles),ribbon:this.vaoFor(this.ribbonBuf,[3,2]),flat:this.vaoFor(this.flatBuf,[3]),leaders:this.vaoFor(this.leaderBuf,[3]),reticles:this.vaoFor(this.reticleBuf,[3,3])},this.overlayNormals=n.overlays.map(i=>ht(i.rect)),this.order=n.glassPieces.map((i,l)=>l),this.dist=new Float32Array(n.glassPieces.length),this.black=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.black),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),this.makeSky(),this.makeShadows()}programs(e){let n=this.gl;return{lit:fe(n,an,Hn,"lit",e),litClip:e===1?fe(n,an,qo,"lit (mirror)",e):null,glass:fe(n,an,Qo,"glass",e),sky:fe(n,Ze,Zo,"sky",e),tex:fe(n,nr,or,"textured",e),decal:fe(n,rr,ar,"decal",e),mote:fe(n,sr,ir,"motes",e),ribbon:fe(n,lr,cr,"ribbon",e),flat:fe(n,ur,dr,"flat",e),shell:fe(n,sn,fr,"hologram shell",e),organ:fe(n,sn,hr,"hologram organs",e),line:fe(n,pr,br,"hologram lines",e),reticle:fe(n,vr,gr,"hologram targets",e),beam:fe(n,sn,mr,"hologram beam",e),dim:fe(n,Ze,yr,"house lights",e)}}postPrograms(){let e=this.gl;return{pre:fe(e,Ze,xr,"bloom"),down:fe(e,Ze,Er,"bloom down"),up:fe(e,Ze,Tr,"bloom up"),composite:fe(e,Ze,Rr,"composite")}}setTier(e){if(e===this.tier||e==="cinematic")return;let n=this.gl,r=this.prog;this.prog=this.programs(0);for(let t of Object.values(r))n.deleteProgram(t.p);if(this.post)for(let t of Object.values(this.post))n.deleteProgram(t.p);this.post=null,this.freeTargets(),this.tier="basic"}vao(e,n){let r=this.gl,t=r.createBuffer();return r.bindBuffer(r.ARRAY_BUFFER,t),r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW),this.vaoFor(t,n)}vaoFor(e,n){let r=this.gl,t=r.createVertexArray();r.bindVertexArray(t),r.bindBuffer(r.ARRAY_BUFFER,e);let a=n.reduce((i,l)=>i+l,0)*4,s=0;return n.forEach((i,l)=>{r.enableVertexAttribArray(l),r.vertexAttribPointer(l,i,r.FLOAT,!1,a,s),s+=i*4}),r.bindVertexArray(null),t}bubbleVao(e){let n=this.gl,r=n.createVertexArray();n.bindVertexArray(r);let t=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,t),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,-1,1,1,-1,1]),n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0);let a=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,a),n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW);let s=Wn*4;return n.enableVertexAttribArray(1),n.vertexAttribPointer(1,3,n.FLOAT,!1,s,0),n.vertexAttribDivisor(1,1),n.enableVertexAttribArray(2),n.vertexAttribPointer(2,4,n.FLOAT,!1,s,12),n.vertexAttribDivisor(2,1),n.bindVertexArray(null),r}makeSky(){let e=this.gl,n=this.tier==="cinematic",r=2048,t=r/2,a=e.createTexture();e.bindTexture(e.TEXTURE_2D,a),n?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,r,t,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,r,t,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let s=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0);let i=fe(e,Ze,Jo,"skygen");e.viewport(0,0,r,t),e.disable(e.DEPTH_TEST),e.disable(e.BLEND),e.useProgram(i.p),e.uniform3f(i.u.get("uSun")??null,et[0],et[1],et[2]),e.bindVertexArray(this.vaos.full),e.drawArrays(e.TRIANGLES,0,3),e.bindVertexArray(null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(s),e.deleteProgram(i.p),e.bindTexture(e.TEXTURE_2D,a),e.generateMipmap(e.TEXTURE_2D),this.skyTex=a,this.skyLod=Math.log2(r)-3}makeShadows(){let e=this.gl,n=e.getParameter(e.MAX_TEXTURE_SIZE),r=this.tier==="cinematic"&&n>=4096?3072:2048,t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t),e.texStorage2D(e.TEXTURE_2D,1,e.DEPTH_COMPONENT24,r,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_COMPARE_FUNC,e.LEQUAL);let a=e.createFramebuffer();if(e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,t,0),e.drawBuffers([e.NONE]),e.readBuffer(e.NONE),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE){e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(a),e.deleteTexture(t);return}let s=new Float32Array(16),i=[0,18,0];Xt(s,[i[0]+et[0]*200,i[1]+et[1]*200,i[2]+et[2]*200],i);let l=1/0,u=-1/0,c=1/0,d=-1/0,f=1/0,h=-1/0;for(let b of[-82,82])for(let v of[-1.5,48])for(let T of[-82,82]){let w=(s[0]??0)*b+(s[4]??0)*v+(s[8]??0)*T+(s[12]??0),A=(s[1]??0)*b+(s[5]??0)*v+(s[9]??0)*T+(s[13]??0),P=(s[2]??0)*b+(s[6]??0)*v+(s[10]??0)*T+(s[14]??0);l=Math.min(l,w),u=Math.max(u,w),c=Math.min(c,A),d=Math.max(d,A),f=Math.min(f,P),h=Math.max(h,P)}let m=new Float32Array(16);No(m,l,u,c,d,-h-5,-f+5),Ft(this.shadowMat,m,s);let p=fe(e,er,tr,"shadow");e.viewport(0,0,r,r),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.depthMask(!0),e.disable(e.BLEND),e.clear(e.DEPTH_BUFFER_BIT),e.useProgram(p.p),e.uniformMatrix4fv(p.u.get("uViewProj")??null,!1,this.shadowMat),e.bindVertexArray(this.vaos.opaque),e.enable(e.POLYGON_OFFSET_FILL),e.polygonOffset(1.5,3),e.drawArrays(e.TRIANGLES,0,this.counts.opaque),e.bindVertexArray(this.vaos.detail),e.drawArrays(e.TRIANGLES,0,this.counts.detail),e.disable(e.POLYGON_OFFSET_FILL),e.bindVertexArray(null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(a),e.deleteProgram(p.p),this.shadowTex=t,this.shadowTexel=1/r,this.shadowBias=.05/(h-f+10)}setAtlas(e){let n=this.gl,r=n.createTexture();n.bindTexture(n.TEXTURE_2D,r),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e.canvas),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.generateMipmap(n.TEXTURE_2D),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),this.atlasTex=r;let t=[];for(let a of this.world.signs){let s=e.rects.get(a.key);if(!s)continue;let i=Kt(a.rect);for(let l=0;l<6;l++){let u=l*5,c=i[u+3]??0,d=i[u+4]??0;t.push(i[u]??0,i[u+1]??0,i[u+2]??0,s.u0+(s.u1-s.u0)*c,s.v0+(s.v1-s.v0)*d)}}n.bindBuffer(n.ARRAY_BUFFER,this.signBuf),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t),n.STATIC_DRAW),this.counts.signs=t.length/5}static screenKey(e){return e.kind==="directory"?`directory:${e.level}`:e.kind==="window"?`store:${e.node??""}`:`${e.kind}:${e.node??""}`}screenGrade(e){return this.screenTex.get(e)?.grade??0}setScreenImage(e,n,r,t,a=!1){let s=this.gl,i=this.screenTex.get(e);if(i&&i.grade>r)return;let l=i?.tex&&i.grade!==4?i.tex:s.createTexture();s.bindTexture(s.TEXTURE_2D,l),a&&s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,n),a&&s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t&&s.generateMipmap(s.TEXTURE_2D),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,t?s.LINEAR_MIPMAP_LINEAR:s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),this.screenTex.set(e,{tex:l,grade:r,lastUsed:performance.now()})}setScreenTexture(e,n,r=null){let t=this.screenTex.get(e)??null;return n?this.screenTex.set(e,{tex:n,grade:4,lastUsed:performance.now()}):r?this.screenTex.set(e,r):this.screenTex.delete(e),t}evict(e){for(let[n,r]of this.screenTex)r.grade!==3||e(n)||(this.gl.deleteTexture(r.tex),this.screenTex.delete(n));for(let[n,r]of this.holoGpu)e(`holo:${n}`)||(this.freeHolo(r),this.holoGpu.delete(n))}setRibbon(e){let n=this.gl;if(!e||e.length<2){this.ribbonCount=0;return}let r=.26,t=[],a=0;for(let s=1;s<e.length;s++){let i=e[s-1],l=e[s];if(!i||!l)continue;let u=l[0]-i[0],c=l[2]-i[2],d=Math.hypot(u,c);if(d<.001)continue;let f=-c/d*r,h=u/d*r,m=(p,b,v)=>t.push(p[0]+f*b,p[1]+.03,p[2]+h*b,v,b);m(i,-1,a),m(l,-1,a+d),m(l,1,a+d),m(i,-1,a),m(l,1,a+d),m(i,1,a),a+=d}n.bindBuffer(n.ARRAY_BUFFER,this.ribbonBuf),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t),n.DYNAMIC_DRAW),this.ribbonCount=t.length/5,this.ribbonLength=a}draw(e,n,r){if(this.tier==="cinematic"){try{if(this.drawCinematic(e,n,r))return}catch(a){console.warn("XI Outlet: the cinematic renderer failed; using the basic one",a)}this.setTier("basic")}let t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,null),this.drawScene(e,{viewProj:e.viewProj,invViewProj:e.invViewProj,eye:e.eye,mirror:!1,clipY:0,w:n,h:r},!0)}drawCinematic(e,n,r){let t=this.gl;if(!this.ensureTargets(n,r))return!1;let a=this.scene,s=this.hdr,i=this.post;if(!a||!s||!i)return!1;if(e.mirrorY!==null&&this.mirror){let f=e.mirrorY,h=this.reflect;h.set([1,0,0,0,0,-1,0,0,0,0,1,0,0,2*f,0,1]),Ft(this.mirrorVP,e.viewProj,h),Yt(this.mirrorInv,this.mirrorVP),t.bindFramebuffer(t.FRAMEBUFFER,this.mirror.fbo),this.drawScene(e,{viewProj:this.mirrorVP,invViewProj:this.mirrorInv,eye:[e.eye[0],2*f-e.eye[1],e.eye[2]],mirror:!0,clipY:f,w:this.mirror.w,h:this.mirror.h},!1)}t.bindFramebuffer(t.FRAMEBUFFER,a.fbo),this.drawScene(e,{viewProj:e.viewProj,invViewProj:e.invViewProj,eye:e.eye,mirror:!1,clipY:0,w:n,h:r},!1),t.bindFramebuffer(t.READ_FRAMEBUFFER,a.fbo),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,s.fbo),t.blitFramebuffer(0,0,n,r,0,0,n,r,t.COLOR_BUFFER_BIT,t.NEAREST),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.disable(t.DEPTH_TEST),t.disable(t.BLEND),t.depthMask(!1),t.bindVertexArray(this.vaos.full),t.activeTexture(t.TEXTURE0);let l=(f,h,m)=>{t.bindFramebuffer(t.FRAMEBUFFER,m.fbo),t.viewport(0,0,m.w,m.h),t.useProgram(f.p),t.bindTexture(t.TEXTURE_2D,h.tex),t.uniform1i(f.u.get("uTex")??null,0),t.uniform2f(f.u.get("uTexel")??null,1/h.w,1/h.h),t.drawArrays(t.TRIANGLES,0,3)},u=this.bloom,c=u[0];if(c){t.useProgram(i.pre.p),t.uniform1f(i.pre.u.get("uThreshold")??null,Ee.bloomThreshold),l(i.pre,s,c);for(let f=1;f<u.length;f++){let h=u[f-1],m=u[f];h&&m&&l(i.down,h,m)}t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE);for(let f=u.length-1;f>0;f--){let h=u[f],m=u[f-1];h&&m&&l(i.up,h,m)}t.disable(t.BLEND)}t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,n,r);let d=i.composite;return t.useProgram(d.p),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,s.tex),t.uniform1i(d.u.get("uScene")??null,0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,c?.tex??this.black),t.uniform1i(d.u.get("uBloom")??null,1),t.activeTexture(t.TEXTURE0),t.uniform1f(d.u.get("uBloomStrength")??null,c?Ee.bloomStrength:0),t.uniform1f(d.u.get("uExposure")??null,e.exposure),t.uniform1f(d.u.get("uGrain")??null,Ee.grain),t.uniform1f(d.u.get("uTime")??null,e.time),t.drawArrays(t.TRIANGLES,0,3),t.bindVertexArray(null),t.depthMask(!0),!0}ensureTargets(e,n){if(this.scene&&this.scene.w===e&&this.scene.h===n)return!0;this.freeTargets();let r=this.gl;if(!r.getExtension("EXT_color_buffer_float"))return!1;let t=r.getInternalformatParameter(r.RENDERBUFFER,r.RGBA16F,r.SAMPLES);this.samples=Math.min(4,t&&t.length>0?t[0]??0:0);let a=(u,c)=>{let d=r.createTexture();return r.bindTexture(r.TEXTURE_2D,d),r.texImage2D(r.TEXTURE_2D,0,r.RGBA16F,u,c,0,r.RGBA,r.HALF_FLOAT,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),d},s=()=>r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;{let u=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,u);let c=r.createRenderbuffer();r.bindRenderbuffer(r.RENDERBUFFER,c),this.samples>0?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,r.RGBA16F,e,n):r.renderbufferStorage(r.RENDERBUFFER,r.RGBA16F,e,n),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,c);let d=r.createRenderbuffer();r.bindRenderbuffer(r.RENDERBUFFER,d),this.samples>0?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,r.DEPTH_COMPONENT24,e,n):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT24,e,n),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,d);let f=[c,d].filter(h=>h!==null);if(this.scene={fbo:u,tex:null,rbs:f,w:e,h:n},!s())return this.failTargets()}{let u=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,u);let c=a(e,n);if(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,c,0),this.hdr={fbo:u,tex:c,rbs:[],w:e,h:n},!s())return this.failTargets()}{let u=Math.max(1,Math.round(e/2)),c=Math.max(1,Math.round(n/2)),d=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,d);let f=a(u,c);r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,f,0);let h=r.createRenderbuffer();if(r.bindRenderbuffer(r.RENDERBUFFER,h),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT24,u,c),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,h),this.mirror={fbo:d,tex:f,rbs:h?[h]:[],w:u,h:c},!s())return this.failTargets()}let i=e,l=n;for(let u=0;u<5;u++){i=Math.max(1,Math.round(i/2)),l=Math.max(1,Math.round(l/2));let c=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,c);let d=a(i,l);if(r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,d,0),this.bloom.push({fbo:c,tex:d,rbs:[],w:i,h:l}),!s())return this.failTargets()}return r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindRenderbuffer(r.RENDERBUFFER,null),!0}failTargets(){return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.freeTargets(),!1}freeTargets(){let e=this.gl;for(let n of[this.scene,this.hdr,this.mirror,...this.bloom])if(n){e.deleteFramebuffer(n.fbo),e.deleteTexture(n.tex);for(let r of n.rbs)e.deleteRenderbuffer(r)}this.scene=null,this.hdr=null,this.mirror=null,this.bloom=[]}drawScene(e,n,r){let t=this.gl,a=this.prog;t.viewport(0,0,n.w,n.h),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.disable(t.CULL_FACE),t.disable(t.BLEND),t.depthMask(!0);let s=!n.mirror&&!r&&e.mirrorY!==null&&this.mirror!==null,i=Za(Ee.fog,e.exposure);t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.skyTex),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.shadowTex),t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,s?this.mirror?.tex??this.black:this.black),t.activeTexture(t.TEXTURE0);let l=m=>{t.useProgram(m.p);let p=(A,P)=>{let B=m.u.get(A);B&&t.uniform1f(B,P)},b=(A,P)=>{let B=m.u.get(A);B&&t.uniform3f(B,P[0]??0,P[1]??0,P[2]??0)};t.uniformMatrix4fv(m.u.get("uViewProj")??null,!1,n.viewProj),b("uCamPos",n.eye),b("uSun",et),b("uSunColor",Ee.sun),b("uSkyAmb",Ee.sky),b("uGroundAmb",Ee.ground),b("uInterior",Ee.interior),p("uPanel",Ee.panel),p("uEmitGain",Ee.emit),b("uFog",Ee.fog),b("uFogDisplay",i),p("uFogDensity",Ee.fogDensity),p("uTime",e.time),p("uDirect",r?1:0),p("uExposure",e.exposure),p("uSkyLod",this.skyLod),p("uClip",n.mirror?1:0),p("uClipY",n.clipY),p("uMirrorOn",s?1:0),p("uMirrorY",e.mirrorY??-1e3);let v=m.u.get("uViewport");v&&t.uniform2f(v,n.w,n.h),p("uShadowOn",this.shadowTex?1:0),p("uShadowTexel",this.shadowTexel),p("uShadowBias",this.shadowBias);let T=m.u.get("uShadowMat");T&&t.uniformMatrix4fv(T,!1,this.shadowMat);let w=(A,P)=>{let B=m.u.get(A);B&&t.uniform1i(B,P)};w("uSky",1),w("uShadow",2),w("uMirror",3)},u=n.mirror?a.litClip??a.lit:a.lit;l(u),t.uniform3f(u.u.get("uOffset")??null,0,0,0),t.bindVertexArray(this.vaos.opaque);let c=e.level===null?void 0:this.world.opaqueLevels[e.level];if(c&&c.count>0){t.drawArrays(t.TRIANGLES,c.first,c.count),c.first>0&&t.drawArrays(t.TRIANGLES,0,c.first);let m=c.first+c.count;m<this.counts.opaque&&t.drawArrays(t.TRIANGLES,m,this.counts.opaque-m)}else t.drawArrays(t.TRIANGLES,0,this.counts.opaque);t.uniform3f(u.u.get("uOffset")??null,0,e.cabY,0),t.bindVertexArray(this.vaos.cab),t.drawArrays(t.TRIANGLES,0,this.counts.cab);let d=e.level===null?void 0:this.world.detailLevels[e.level];d&&d.count>0&&(t.uniform3f(u.u.get("uOffset")??null,0,0,0),t.bindVertexArray(this.vaos.detail),t.drawArrays(t.TRIANGLES,d.first,d.count)),l(a.tex),t.uniform1i(a.tex.u.get("uTex")??null,0),t.bindVertexArray(this.vaos.screens);let f=performance.now();this.world.screens.forEach((m,p)=>{let b=o.screenKey(m),v=this.screenTex.get(b);v&&(v.lastUsed=f);let T=m.kind==="store"||m.kind==="directory",w=m.kind==="board";t.uniform1i(a.tex.u.get("uMode")??null,T?1:2),t.uniform1f(a.tex.u.get("uHasTex")??null,v?.tex?1:0),t.uniform1f(a.tex.u.get("uFlip")??null,v?.grade===4?1:0);let A=w?[.97,.97,.96]:m.kind==="directory"?[.05,.06,.08]:[.03,.04,.05];t.uniform4f(a.tex.u.get("uPlaceholder")??null,A[0]??0,A[1]??0,A[2]??0,1),t.bindTexture(t.TEXTURE_2D,v?.tex??this.black),t.drawArrays(t.TRIANGLES,p*6,6)}),t.depthMask(!1),l(a.sky),t.uniformMatrix4fv(a.sky.u.get("uInvViewProj")??null,!1,n.invViewProj),t.bindVertexArray(this.vaos.full),t.drawArrays(t.TRIANGLES,0,3),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.POLYGON_OFFSET_FILL),t.polygonOffset(-1,-4),l(a.decal),t.bindVertexArray(this.vaos.decal),t.drawArrays(t.TRIANGLES,0,this.counts.decal),this.ribbonCount>0&&!n.mirror&&(l(a.ribbon),t.uniform1f(a.ribbon.u.get("uLength")??null,this.ribbonLength),t.bindVertexArray(this.vaos.ribbon),t.drawArrays(t.TRIANGLES,0,this.ribbonCount)),this.atlasTex&&this.counts.signs>0&&(l(a.tex),t.uniform1i(a.tex.u.get("uMode")??null,0),t.uniform1f(a.tex.u.get("uHasTex")??null,1),t.uniform1f(a.tex.u.get("uFlip")??null,0),t.bindTexture(t.TEXTURE_2D,this.atlasTex),t.bindVertexArray(this.vaos.signs),t.drawArrays(t.TRIANGLES,0,this.counts.signs));{let m=!1;this.world.overlays.forEach((p,b)=>{if(e.level===null||p.level!==e.level)return;let v=this.overlayNormals[b];if(v&&(n.eye[0]-p.rect.centre[0])*v[0]+(n.eye[1]-p.rect.centre[1])*v[1]+(n.eye[2]-p.rect.centre[2])*v[2]<0)return;let T=this.screenTex.get(p.key);T?.tex&&(m||(l(a.tex),t.uniform1i(a.tex.u.get("uMode")??null,0),t.uniform1f(a.tex.u.get("uHasTex")??null,1),t.uniform1f(a.tex.u.get("uFlip")??null,0),t.bindVertexArray(this.vaos.overlays),m=!0),T.lastUsed=f,t.bindTexture(t.TEXTURE_2D,T.tex),t.drawArrays(t.TRIANGLES,b*6,6))})}if(t.disable(t.POLYGON_OFFSET_FILL),!n.mirror)for(let m of e.holos)this.drawHolo(m,e,r);l(a.glass),t.uniform3f(a.glass.u.get("uOffset")??null,0,0,0),t.uniform1f(a.glass.u.get("uFade")??null,e.fade),t.bindVertexArray(this.vaos.glass);let h=this.world.glassPieces;for(let m=0;m<h.length;m++){let p=h[m]?.centre??[0,0,0];this.dist[m]=(p[0]-n.eye[0])**2+(p[1]-n.eye[1])**2+(p[2]-n.eye[2])**2}this.order.sort((m,p)=>(this.dist[p]??0)-(this.dist[m]??0));for(let m of this.order){let p=h[m];p&&t.drawArrays(t.TRIANGLES,p.first,p.count)}if(!n.mirror&&this.counts.bubbles>0&&(l(a.mote),t.uniform3f(a.mote.u.get("uRight")??null,e.right[0],e.right[1],e.right[2]),t.uniform3f(a.mote.u.get("uUp")??null,e.up[0],e.up[1],e.up[2]),t.bindVertexArray(this.vaos.bubbles),t.drawArraysInstanced(t.TRIANGLES,0,6,this.counts.bubbles)),!n.mirror&&e.dim>.001&&(t.disable(t.DEPTH_TEST),t.useProgram(a.dim.p),t.uniform1f(a.dim.u.get("uDim")??null,e.dim),t.bindVertexArray(this.vaos.full),t.drawArrays(t.TRIANGLES,0,3),t.enable(t.DEPTH_TEST)),!n.mirror&&e.highlight){let{min:m,max:p,rgba:b}=e.highlight;l(a.flat),t.uniform4f(a.flat.u.get("uColor")??null,b[0]*b[3],b[1]*b[3],b[2]*b[3],b[3]),t.bindBuffer(t.ARRAY_BUFFER,this.flatBuf),t.bufferData(t.ARRAY_BUFFER,Ja(m,p),t.DYNAMIC_DRAW),t.bindVertexArray(this.vaos.flat),t.drawArrays(t.TRIANGLES,0,36)}t.bindVertexArray(null),t.depthMask(!0),t.disable(t.BLEND)}owned(e,n,r,t){let a=this.gl,s=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,s),a.bufferData(a.ARRAY_BUFFER,e,a.STATIC_DRAW);let i=this.vaoFor(s,n);return s&&t.push(s),i&&r.push(i),i}holoBuffers(e){let n=this.holoGpu.get(e.node);if(n)return n;let r=[],t=[],a=u=>({vao:u.length>0?this.owned(u,[3,3],r,t):null,count:u.length/Zt}),s=u=>({vao:u.length>0?this.owned(new Float32Array(u.flat()),[3],r,t):null,count:u.length}),i=new Map;for(let u of e.lines){let c=u.color.join(","),d=i.get(c)??{color:u.color,data:[]};i.set(c,d);for(let f=1;f<u.points.length;f++)d.data.push(...u.points[f-1]??[0,0,0],...u.points[f]??[0,0,0])}let l={vaos:r,bufs:t,lit:a(Nn(e.lit)),ghosts:a(Nn(e.ghosts)),lines:[...i.values()].map(u=>({vao:this.owned(new Float32Array(u.data),[3],r,t),count:u.data.length/3,color:u.color})),dots:s(e.dots),beads:s(e.beads),lastUsed:performance.now()};return this.holoGpu.set(e.node,l),l}freeHolo(e){for(let n of e.vaos)this.gl.deleteVertexArray(n);for(let n of e.bufs)this.gl.deleteBuffer(n)}drawHolo(e,n,r){let t=this.gl,a=this.prog,s=e.holo,i=this.holoBuffers(s);if(i.lastUsed=performance.now(),!this.shell){let m=Uo();this.shell={vao:this.vao(m,[3,3]),count:m.length/Zt}}if(!this.beam){let m=$o();this.beam={vao:this.vao(m,[3,3]),count:m.length/Zt}}let l=s.tint,u=(m,p)=>{t.useProgram(m.p),t.uniformMatrix4fv(m.u.get("uViewProj")??null,!1,n.viewProj),t.uniformMatrix4fv(m.u.get("uModel")??null,!1,p);let b=m.u.get("uCamPos");b&&t.uniform3f(b,n.eye[0],n.eye[1],n.eye[2]);let v=m.u.get("uDirect");v&&t.uniform1f(v,r?1:0);let T=m.u.get("uExposure");T&&t.uniform1f(T,n.exposure)},c=m=>{this.beam&&(u(a.beam,e.model),t.uniform1f(a.beam.u.get("uTime")??null,n.time),t.uniform1f(a.beam.u.get("uSide")??null,m),t.bindVertexArray(this.beam.vao),t.drawArrays(t.TRIANGLES,0,this.beam.count))};c(-1),u(a.organ,e.model);let d=(m,p,b,v)=>{!m.vao||m.count===0||(t.uniform3f(a.organ.u.get("uColor")??null,p[0],p[1],p[2]),t.uniform1f(a.organ.u.get("uAlpha")??null,b),t.uniform1f(a.organ.u.get("uPulse")??null,v),t.bindVertexArray(m.vao),t.drawArrays(t.TRIANGLES,0,m.count))};d(i.ghosts,[.42,.5,.58],s.whole?.1:.14,0),d(i.lit,l,.86,e.pulse),u(a.line,e.model);let f=(m,p)=>t.uniform4f(a.line.u.get("uColor")??null,m[0]*p,m[1]*p,m[2]*p,p);t.uniform1f(a.line.u.get("uRound")??null,0);for(let m of i.lines)f(m.color,.92),t.bindVertexArray(m.vao),t.drawArrays(t.LINES,0,m.count);t.uniform1f(a.line.u.get("uRound")??null,1),i.dots.vao&&(f(l,.75),t.uniform1f(a.line.u.get("uPointSize")??null,.017*n.pxPerMetre),t.bindVertexArray(i.dots.vao),t.drawArrays(t.POINTS,0,i.dots.count)),i.beads.vao&&(f(Qa,.95),t.uniform1f(a.line.u.get("uPointSize")??null,.03*n.pxPerMetre),t.bindVertexArray(i.beads.vao),t.drawArrays(t.POINTS,0,i.beads.count)),u(a.line,ja),t.uniform1f(a.line.u.get("uRound")??null,0),t.bindVertexArray(this.vaos.leaders);for(let[m,p,b]of[[e.rings,qa,.5],[e.leaders,Ka,.9]])m.length!==0&&(f(p,b),t.bindBuffer(t.ARRAY_BUFFER,this.leaderBuf),t.bufferData(t.ARRAY_BUFFER,m,t.DYNAMIC_DRAW),t.drawArrays(t.LINES,0,m.length/3));let h=Math.floor(e.targets.length/4);if(h>0){let m=new Float32Array(h*36),p=[-1,-1,1,-1,1,1,-1,-1,1,1,-1,1];for(let b=0;b<h;b++){let v=e.targets[b*4]??0,T=e.targets[b*4+1]??0,w=e.targets[b*4+2]??0,A=e.targets[b*4+3]??0;for(let P=0;P<6;P++)m.set([v,T,w,p[P*2]??0,p[P*2+1]??0,A],(b*6+P)*6)}t.useProgram(a.reticle.p),t.uniformMatrix4fv(a.reticle.u.get("uViewProj")??null,!1,n.viewProj),t.uniform3f(a.reticle.u.get("uRight")??null,n.right[0],n.right[1],n.right[2]),t.uniform3f(a.reticle.u.get("uUp")??null,n.up[0],n.up[1],n.up[2]),t.uniform3f(a.reticle.u.get("uCamPos")??null,n.eye[0],n.eye[1],n.eye[2]),t.uniform1f(a.reticle.u.get("uTime")??null,n.time),t.uniform1f(a.reticle.u.get("uDirect")??null,r?1:0),t.uniform1f(a.reticle.u.get("uExposure")??null,n.exposure),t.bindBuffer(t.ARRAY_BUFFER,this.reticleBuf),t.bufferData(t.ARRAY_BUFFER,m,t.DYNAMIC_DRAW),t.bindVertexArray(this.vaos.reticles),t.drawArrays(t.TRIANGLES,0,h*6)}u(a.shell,e.model),t.uniform3f(a.shell.u.get("uTint")??null,l[0],l[1],l[2]),t.uniform1f(a.shell.u.get("uWhole")??null,s.whole||s.skin?1:0),t.uniform1f(a.shell.u.get("uTime")??null,n.time),t.uniform1f(a.shell.u.get("uScanY")??null,e.scanY),t.bindVertexArray(this.shell.vao),t.colorMask(!1,!1,!1,!1),t.depthMask(!0),t.drawArrays(t.TRIANGLES,0,this.shell.count),t.colorMask(!0,!0,!0,!0),t.depthMask(!1),t.drawArrays(t.TRIANGLES,0,this.shell.count),c(1)}dispose(){let e=this.gl;for(let n of this.holoGpu.values())this.freeHolo(n);this.holoGpu.clear();for(let n of Object.values(this.prog))e.deleteProgram(n.p);if(this.post)for(let n of Object.values(this.post))e.deleteProgram(n.p);this.freeTargets();for(let n of this.screenTex.values())n.grade!==4&&e.deleteTexture(n.tex);e.deleteTexture(this.skyTex),e.deleteTexture(this.atlasTex),e.deleteTexture(this.shadowTex),e.deleteTexture(this.black)}};function Ja(o,e){let[n,r,t]=o,[a,s,i]=e,l=(u,c,d,f)=>[...u,...c,...d,...u,...d,...f];return new Float32Array([...l([n,r,i],[a,r,i],[a,s,i],[n,s,i]),...l([a,r,t],[n,r,t],[n,s,t],[a,s,t]),...l([a,r,i],[a,r,t],[a,s,t],[a,s,i]),...l([n,r,t],[n,r,i],[n,s,i],[n,s,t]),...l([n,s,i],[a,s,i],[a,s,t],[n,s,t]),...l([n,r,t],[a,r,t],[a,r,i],[n,r,i])])}var pt=[0,23,0],es={az:34*nt,el:7*nt,dist:160},bt=64*nt,Gn=34*nt,Ir=[52,280],Vr=[3*nt,62*nt],ts=3.4,ns=6.8,os=1.9;function Nr(o){let e=Math.cos(o.el),n=[pt[0]+o.dist*e*Math.sin(o.az),pt[1]+o.dist*Math.sin(o.el),pt[2]+o.dist*e*Math.cos(o.az)],r=pt[0]-n[0],t=pt[1]-n[1],a=pt[2]-n[2];return{eye:n,heading:Ae(r,a),pitch:Math.atan2(t,Math.hypot(r,a)),fov:Gn,level:null}}function hn(o,e,n,r,t=ve){return{eye:[e[0],Te(o)+t,e[1]],heading:n,pitch:r,fov:bt,level:o}}function rt(o){let e=De(o,0,1);return e*e*(3-2*e)}function fn(o,e,n,r){let t=Math.max(.001,xo(e)),a=De(t/3,3.2,8),s=Math.max(.6,t/a),i=[0];for(let m=1;m<e.length;m++){let p=e[m-1],b=e[m];i.push((i[m-1]??0)+(p&&b?Math.hypot(b[0]-p[0],b[1]-p[1]):0))}let l=m=>{for(let p=1;p<e.length;p++){let b=i[p-1]??0,v=i[p]??0;if(m<=v||p===e.length-1){let T=e[p-1]??[0,0],w=e[p]??T,A=v>b?De((m-b)/(v-b),0,1):1;return[Ce(T[0],w[0],A),Ce(T[1],w[1],A)]}}return e[e.length-1]??[0,0]},u=e[e.length-1]??[0,0],c=e[e.length-2]??u,d=Ae(u[0]-c[0],u[1]-c[1]),f=m=>{let p=l(m),b=l(Math.min(t,m+2.4));return Math.hypot(b[0]-p[0],b[1]-p[1])<.05?d:Ae(b[0]-p[0],b[1]-p[1])},h=Te(o);return{duration:s,interruptible:!0,route:e.map(m=>[m[0],h,m[1]]),at(m){let p=Mt(m),b=l(p*t),v=f(p*t);v=n.heading+Rt(n.heading,v)*rt(m/.28),r.heading!==null&&(v+=Rt(v,r.heading)*rt((m-.66)/.34));let T=Ce(Ce(n.eye??ve,ve,rt(m/.25)),r.eye??ve,rt((m-.7)/.3));return hn(o,b,v,Ce(n.pitch,r.pitch,p),T)}}}function rs(o,e,n){let r=De(.9*Math.abs(e-o)+.9,1.6,4.6),t=a=>Ce(Te(o),Te(e),Mt(a));return{duration:r,cab:t,at(a){let s=t(a),i=n+Rt(n,Math.PI)*rt(a*1.6);return{eye:[0,s+ve,0],heading:i,pitch:0,fov:bt,level:Math.round(Ce(o,e,Mt(a)))}}}}function zn(o,e,n,r,t){let a=s=>{let i=1-s,l=i*i*i,u=3*i*i*s,c=3*i*s*s,d=s*s*s;return[0,1,2].map(f=>l*(o.eye[f]??0)+u*(n[f]??0)+c*(r[f]??0)+d*(e.eye[f]??0))};return{duration:t,at(s){let i=Mt(s),l=rt((s-.15)/.8);return{eye:a(i),heading:o.heading+Rt(o.heading,e.heading)*l,pitch:Ce(o.pitch,e.pitch,l),fov:Ce(o.fov,e.fov,rt((s-.3)/.7)),level:s>.7?e.level:o.level}}}}var mn=class{mode="exterior";orbit={...es};level=0;pos=Gt;heading=0;pitch=0;eye=ve;rising=!1;reducedMotion=!1;destination=null;vel=[0,0];legs=[];legT=0;finish=null;idleFor=0;stepBuffer=0;camera(){let e=this.mode==="travel"?this.legs[0]:void 0;return e?e.at(De(this.legT/e.duration,0,1)):this.mode==="exterior"?Nr(this.orbit):hn(this.level,this.pos,this.heading,this.pitch,this.eye)}cabY(){let e=this.mode==="travel"?this.legs[0]:void 0;if(e?.cab)return e.cab(De(this.legT/e.duration,0,1));let n=this.camera();return Te(n.level??this.level)}routeAhead(){let e=this.mode==="travel"?this.legs[0]:void 0;if(!e?.route)return null;let n=this.camera(),r=e.route,t=0,a=1/0;for(let s=0;s<r.length-1;s++){let i=r[s];if(!i)continue;let l=Math.hypot(i[0]-n.eye[0],i[2]-n.eye[2]);l<a&&(a=l,t=s)}return[[n.eye[0],r[0]?.[1]??0,n.eye[2]],...r.slice(t+1)]}get travelling(){return this.mode==="travel"}goTo(e,n=this.reducedMotion){let r=this.plan(e);return r?(this.destination=e.kind==="store"||e.kind==="level"?e:null,this.vel=[0,0],n||r.legs.length===0?(this.legs=[],r.finish(),!0):(this.legs=r.legs,this.legT=0,this.finish=r.finish,this.mode="travel",!0)):!1}here(){let e=this.camera();return e.level===null?null:{level:e.level,p:[e.eye[0],e.eye[2]],heading:e.heading,pitch:e.pitch,eye:e.eye[1]-Te(e.level)}}plan(e){let n=this.camera(),r=this.mode==="exterior"?null:this.here(),t=(d,f,h,m=0,p=ve)=>()=>{this.mode="walk",this.level=d,this.pos=f,this.heading=h,this.pitch=m,this.eye=p,this.rising=!1};if(e.kind==="exterior"){let d=Nr(this.orbit);return{legs:r?[zn(n,d,[n.eye[0]*1.3,n.eye[1]+10,n.eye[2]*1.3+24],[d.eye[0]*.75,d.eye[1]+12,d.eye[2]*.75],2.6)]:[],finish:()=>{this.mode="exterior",this.idleFor=0}}}let a,s;if(e.kind==="plaza")a=0,s={p:Gt,heading:0,pitch:.04,waypoint:"plaza"};else if(e.kind==="level")a=e.level,s=r&&r.level!==a?{p:[0,4],heading:Math.PI,pitch:.08,waypoint:"bridge"}:{p:Et,heading:0,pitch:0,waypoint:"lobby"};else if(e.kind==="store"){let d=ft(e.node);if(!d)return null;a=d.level;let f=e.station?d.stations[e.station]:null;s=f?{p:f.p,heading:f.heading,pitch:f.pitch,waypoint:`${e.station}:${d.node}`,eye:f.eye??ve}:{p:d.view,heading:d.heading,pitch:.09,waypoint:`store:${d.node}`}}else a=e.level,s={p:e.p,heading:Number.NaN,pitch:0,waypoint:null};let i=d=>t(a,s.p,Number.isNaN(d)?r?.heading??0:d,s.pitch,s.eye??ve);if(!r){if(e.kind==="plaza"){let p=hn(0,Gt,0,.04);return{legs:[zn(n,p,[n.eye[0]*.6,n.eye[1]*.55,n.eye[2]*.6+30],[0,10,62],3)],finish:i(0)}}let d=Te(a),f=hn(a,Et,0,0),h=[zn(n,f,[n.eye[0]*.55,d+ve+14+n.eye[1]*.25,n.eye[2]*.5+42],[0,d+ve+1.5,34],3.2)];if(s.waypoint!=="lobby"){let p=s.waypoint?Tt(a,Et,s.waypoint):kt(a,Et,s.p);p&&h.push(fn(a,p,{heading:0,pitch:0},{heading:Number.isNaN(s.heading)?null:s.heading,pitch:s.pitch,eye:s.eye}))}let m=h[h.length-1];return{legs:h,finish:i(Number.isNaN(s.heading)?m?m.at(1).heading:0:s.heading)}}let l=[],u={heading:r.heading,pitch:r.pitch,eye:r.eye};if(r.level!==a){let d=Tt(r.level,r.p,"lift");if(!d)return null;l.push(fn(r.level,d,u,{heading:null,pitch:0}));let f=l[l.length-1]?.at(1).heading??0;l.push(rs(r.level,a,f)),u={heading:Math.PI,pitch:0,eye:ve};let m=go(a,"lift")?.p??[0,0],p=s.waypoint?Tt(a,m,s.waypoint):kt(a,m,s.p);p&&l.push(fn(a,p,u,{heading:Number.isNaN(s.heading)?null:s.heading,pitch:s.pitch,eye:s.eye}))}else{let d=s.waypoint?Tt(a,r.p,s.waypoint):kt(a,r.p,s.p);if(!d)return null;l.push(fn(a,d,u,{heading:Number.isNaN(s.heading)?null:s.heading,pitch:s.pitch,eye:s.eye}))}let c=l[l.length-1];return{legs:l,finish:i(Number.isNaN(s.heading)?c?c.at(1).heading:r.heading:s.heading)}}interrupt(){if(!this.legs[0]?.interruptible)return;let n=this.here();n&&(this.legs=[],this.finish=null,this.mode="walk",this.level=n.level,this.pos=Fn(n.level,n.p,0,0),this.heading=n.heading,this.pitch=n.pitch,this.eye=n.eye)}update(e,n){let r=n.forward!==0||n.strafe!==0||n.turn!==0||n.lookX!==0||n.lookY!==0||n.zoom!==0;if(this.mode==="travel")if(r&&this.legs[0]?.interruptible)this.interrupt();else{this.legT+=e;let h=this.legs[0];for(;h&&this.legT>=h.duration;)this.legT-=h.duration,this.legs.shift(),h=this.legs[0];if(!h){let m=this.finish;this.finish=null,this.legT=0,m?.()}return!0}if(this.mode==="exterior"){let h=this.orbit,m=h.az-n.lookX*.0052-n.turn*e*.9,p=De(h.el+n.lookY*.0042+n.forward*e*.5,Vr[0],Vr[1]),b=De(h.dist*Math.exp(n.zoom*.0011-n.strafe*0),Ir[0],Ir[1]);this.idleFor=r?0:this.idleFor+e,!this.reducedMotion&&this.idleFor>5&&(m+=e*.035);let v=m!==h.az||p!==h.el||b!==h.dist;return this.orbit={az:m,el:p,dist:b},v}this.heading+=n.lookX*.0042+n.turn*os*e,this.pitch=De(this.pitch-n.lookY*.0036,-.95,.95),n.zoom!==0&&(this.stepBuffer=De(this.stepBuffer-n.zoom*.01,-6,6));let t=this.stepBuffer*Math.min(1,e*6);if(this.stepBuffer-=t,(n.forward!==0||n.strafe!==0||Math.abs(this.stepBuffer)>.01)&&this.eye!==ve&&(this.rising=!0),this.rising){let h=this.eye+(ve-this.eye)*Math.min(1,e*5);this.eye=this.reducedMotion||Math.abs(ve-h)<.01?ve:h,this.eye===ve&&(this.rising=!1)}let s=n.run?ns:ts,i=Math.sin(this.heading),l=-Math.cos(this.heading),u=[(i*n.forward-l*n.strafe)*s,(l*n.forward+i*n.strafe)*s],c=1-Math.exp(-e*10);this.vel=[Ce(this.vel[0],u[0],c),Ce(this.vel[1],u[1],c)];let d=this.vel[0]*e+i*t,f=this.vel[1]*e+l*t;return Math.abs(d)+Math.abs(f)>1e-6&&(this.pos=Fn(this.level,this.pos,d,f)),r||Math.abs(this.vel[0])+Math.abs(this.vel[1])>.01||this.eye!==ve&&this.rising}};var pn="#0C1824",as="#3A4A5A",vt="#5A6A7A",ss="#DCE2E8",at="#0B0D10",_t="rgba(205,210,215,0.85)",Xe="#C9CED4",Pt="#23272C",is="#E2DCD1",Ue="#E3232C",j='"Poppins", "Inter", system-ui, sans-serif',V='"Inter", system-ui, sans-serif';async function Cr(){if(typeof document>"u"||!document.fonts)return;let o=["500 64px Poppins","700 64px Poppins","400 32px Inter","500 32px Inter","600 32px Inter"].map(e=>document.fonts.load(e).catch(()=>[]));await Promise.race([Promise.all(o),new Promise(e=>setTimeout(e,1500))])}function Ye(o,e,n=1){let r=document.createElement("canvas");r.width=Math.round(o*n),r.height=Math.round(e*n);let t=r.getContext("2d");if(!t)throw new Error("2D canvas unavailable");return n!==1&&t.scale(r.width/o,r.height/e),[r,t]}function Dr(o,e,n,r,t,a){let s=Math.min(a,r/2,t/2);o.beginPath(),o.moveTo(e+s,n),o.arcTo(e+r,n,e+r,n+t,s),o.arcTo(e+r,n+t,e,n+t,s),o.arcTo(e,n+t,e,n,s),o.arcTo(e,n,e+r,n,s),o.closePath()}function S(o,e,n,r,t,a=!0){let s=o;if("letterSpacing"in s){s.letterSpacing=`${t}px`;let l=o.measureText(e).width;return a&&o.fillText(e,n,r),s.letterSpacing="0px",l}let i=n;for(let l of e)a&&o.fillText(l,i,r),i+=o.measureText(l).width+t;return i-n}function vn(o,e,n,r,t,a){o.beginPath(),o.moveTo(e+a,n),o.lineTo(e+r,n),o.lineTo(e+r,n+t-a),o.lineTo(e+r-a,n+t),o.lineTo(e,n+t),o.lineTo(e,n+a),o.closePath()}function Oe(o,e,n){let r=e.split(/\s+/),t=[],a="";for(let s of r){let i=a?`${a} ${s}`:s;o.measureText(i).width>n&&a?(t.push(a),a=s):a=i}return a&&t.push(a),t}var $e=o=>String(o).padStart(2,"0");function ls(o){let e=ft(o),n=de.node(o),r=n?.tier??"T01";return{key:`store:${o}`,aspect:5.6/.95,draw(t,a,s){t.fillStyle=at,t.fillRect(2,2,a-4,s-4),t.lineWidth=Math.max(2,s*.02),t.strokeStyle=_t,t.strokeRect(3,3,a-6,s-6),t.textBaseline="middle",t.font=`500 ${Math.round(s*.3)}px ${j}`,t.fillStyle=pe[r];let i=s*.42,l=S(t,o,i,s/2+1,s*.06);t.fillStyle="rgba(205,210,215,0.5)",t.fillRect(i+l+s*.24,s*.3,Math.max(1,s*.012),s*.4),t.font=`500 ${Math.round(s*.17)}px ${V}`;let u=`LEVEL ${$e((e?.level??0)+1)} \xB7 ${$e(e?.number??0)}`,c=S(t,u,0,0,s*.05,!1),d=i+l+s*.5,f=(n?.name??o).toUpperCase(),h=s*.3,m=s*.16,p=w=>(t.font=`500 ${Math.round(h)}px ${j}`,S(t,f,0,0,m,!1)<=w),b=a-s*.5-c-s*.3-d,v=a-s*.5-d,T=!0;for(;!p(b)&&h>s*.24;)h-=1,m=Math.max(s*.05,m-.6);if(!p(b))for(T=!1,h=s*.3,m=s*.16;!p(v)&&h>s*.18;)h-=1,m=Math.max(s*.03,m-.6);t.fillStyle="#F1F3F5",t.font=`500 ${Math.round(h)}px ${j}`,S(t,f,d,s/2+1,m),T&&(t.fillStyle=Xe,t.font=`500 ${Math.round(s*.17)}px ${V}`,S(t,u,a-s*.5-c,s/2+1,s*.05))}}}function cs(o){let e=he[o];return{key:`level:${o}`,aspect:5.4/1.1,draw(n,r,t){n.fillStyle=at,n.fillRect(2,2,r-4,t-4),n.lineWidth=Math.max(2,t*.02),n.strokeStyle=_t,n.strokeRect(3,3,r-6,t-6),n.textBaseline="alphabetic",n.fillStyle=pe[e?.tier??"T01"],n.fillRect(t*.34,t*.24,Math.max(2,t*.025),t*.52);let a=t*.6;n.fillStyle="#F1F3F5",n.font=`500 ${Math.round(t*.28)}px ${j}`,S(n,`LEVEL ${$e(o+1)}`,a,t*.48,t*.12);let s=r-a-t*.3,i=`${e?.tier??""} \xB7 ${(e?.name??"").toUpperCase()}`,l=t*.14,u=t*.05;for(;n.font=`500 ${Math.round(l)}px ${V}`,!(S(n,i,0,0,u,!1)<=s||l<=t*.1);)l-=1,u=Math.max(t*.015,u-.3);n.fillStyle=Xe,S(n,i,a,t*.76,u)}}}function us(o){let e=he[o];return{key:`levelno:${o}`,aspect:7.2/1.8,draw(n,r,t){n.fillStyle=is,n.fillRect(0,t*.08,r,t*.84),n.fillStyle="rgba(35,39,44,0.18)",n.fillRect(0,t*.08,r,Math.max(1,t*.01)),n.textBaseline="alphabetic",n.font=`500 ${Math.round(t*.58)}px ${j}`,n.fillStyle=Pt;let a=S(n,$e(o+1),t*.22,t*.72,t*.08);n.fillStyle=pe[e?.tier??"T01"],n.fillRect(t*.22+a+t*.2,t*.3,Math.max(2,t*.025),t*.42),n.fillStyle=Pt,n.font=`500 ${Math.round(t*.12)}px ${j}`;let s=(e?.name??"").toUpperCase().split(" "),i=Math.ceil(s.length/2);S(n,s.slice(0,i).join(" "),t*.22+a+t*.42,t*.48,t*.05),S(n,s.slice(i).join(" "),t*.22+a+t*.42,t*.69,t*.05)}}}var ds={key:"crown",aspect:22/1.75,draw(o,e,n){o.textBaseline="middle",o.font=`500 ${Math.round(n*.44)}px ${j}`;let r=[[Tn.parent,Pt],[" // ",Ue],["XI OUTLET",Pt]],t=n*.26,a=r.reduce((i,[l])=>i+S(o,l,0,0,t,!1),0),s=(e-a)/2;for(let[i,l]of r)o.fillStyle=l,s+=S(o,i,s,n*.5,t)}},fs={key:"entrance",aspect:7.6/1.3,draw(o,e,n){o.fillStyle=at,o.fillRect(2,2,e-4,n-4),o.lineWidth=Math.max(2,n*.02),o.strokeStyle=_t,o.strokeRect(3,3,e-6,n-6),o.textBaseline="middle",o.fillStyle="#F1F3F5",o.font=`500 ${Math.round(n*.3)}px ${j}`;let r="XI OUTLET",t=S(o,r,0,0,n*.2,!1);S(o,r,(e-t)/2,n*.4,n*.2),o.fillStyle=Xe,o.font=`500 ${Math.round(n*.12)}px ${V}`;let a=`${Tn.research} \xB7 EXPERIENCE INTERFACE`,s=S(o,a,0,0,n*.06,!1);S(o,a,(e-s)/2,n*.74,n*.06),o.fillStyle=Ue,o.fillRect((e-n*.5)/2,n*.585,n*.5,Math.max(2,n*.025))}};function Or(){let o=[...de.nodes.map(u=>ls(u.id)),...he.map(u=>cs(u.index)),...he.map(u=>us(u.index)),ds,fs,...de.nodes.map(u=>hs(u.id)),...ms,ps],e=2048,n=112,r=6,t=u=>{let c=0,d=0,f=0;for(let h of o){let m=h.key.startsWith("levelno")?n*1.5:n,p=Math.min(e,Math.round(m*h.aspect));c+p>e&&(c=0,d+=f+r,f=0),f=Math.max(f,m),u?.(h,c,d,p,m),c+=p+r}return d+f},a=Math.ceil(t(null)/256)*256,[s,i]=Ye(e,a),l=new Map;return t((u,c,d,f,h)=>{i.save(),i.translate(c,d),i.beginPath(),i.rect(0,0,f,h),i.clip(),u.draw(i,f,h),i.restore(),l.set(u.key,{u0:(c+.5)/e,v0:(d+.5)/a,u1:(c+f-.5)/e,v1:(d+h-.5)/a})}),{canvas:s,rects:l}}function hs(o){let e=de.node(o);return{key:`blade:${o}`,aspect:1.3/.62,draw(n,r,t){n.fillStyle=at,n.fillRect(2,2,r-4,t-4),n.lineWidth=Math.max(2,t*.025),n.strokeStyle=_t,n.strokeRect(3,3,r-6,t-6),n.fillStyle=pe[e?.tier??"T01"],n.fillRect(t*.16,t*.2,Math.max(2,t*.03),t*.3),n.fillStyle="#F1F3F5",n.textBaseline="middle",n.font=`500 ${Math.round(t*.25)}px ${j}`,S(n,o,t*.3,t*.36,t*.05),n.fillStyle=Xe,n.font=`500 ${Math.round(t*.15)}px ${j}`;let a=(e?.name??"").toUpperCase();for(;a.length>3&&S(n,a,0,0,t*.05,!1)>r-t*.32;)a=a.slice(0,-1);S(n,a===(e?.name??"").toUpperCase()?a:`${a.trim()}\u2026`,t*.16,t*.72,t*.05)}}}var ms=[["model","01","MODEL"],["body","02","BODY MAP"],["lesson","03","LESSON"],["examples","05","EXAMPLES"],["theater","07","THEATER"]].map(([o,e,n])=>({key:`station:${o}`,aspect:1.3/.46,draw(r,t,a){Dr(r,2,2,t-4,a-4,a*.1);let s=r.createLinearGradient(0,0,t,a);s.addColorStop(0,"#D3D8DD"),s.addColorStop(.5,"#BCC2C9"),s.addColorStop(1,"#CBD0D6"),r.fillStyle=s,r.fill(),r.textBaseline="middle",r.fillStyle=Ue,r.font=`600 ${Math.round(a*.32)}px ${V}`;let i=S(r,e,a*.36,a/2+1,a*.03);r.fillStyle=Pt,r.font=`500 ${Math.round(a*.26)}px ${j}`,S(r,n,a*.36+i+a*.22,a/2+1,a*.1)}})),ps={key:"theater:marquee",aspect:3.4/.66,draw(o,e,n){o.fillStyle=at,o.fillRect(2,2,e-4,n-4),o.strokeStyle="rgba(231,201,160,0.55)",o.lineWidth=Math.max(2,n*.025),o.strokeRect(3,3,e-6,n-6),o.textBaseline="middle",o.fillStyle="#E7C9A0",o.font=`600 ${Math.round(n*.15)}px ${V}`;let r="NOW SHOWING",t=S(o,r,0,0,n*.06,!1),a=e-n*.42-t;S(o,r,a,n/2+1,n*.06),o.beginPath(),o.arc(a-n*.2,n/2,n*.055,0,Math.PI*2),o.fill(),o.fillStyle=Ue,o.font=`600 ${Math.round(n*.28)}px ${V}`;let s=S(o,"07",n*.42,n/2+1,n*.02);o.fillStyle="#F1F3F5";let i=n*.28;o.font=`500 ${Math.round(i)}px ${j}`;let l=n*.42+s+n*.24;for(;S(o,"XI THEATER",0,0,i*.3,!1)>a-n*.5-l&&i>n*.18;)i-=1,o.font=`500 ${Math.round(i)}px ${j}`;S(o,"XI THEATER",l,n/2+1,i*.3)}};function bs(o,e,n,r,t){o.font=`600 ${t}px ${V}`,o.fillStyle=e.status==="sourced"?"#0672A8":vt,S(o,Rn[e.status].toUpperCase(),n,r,t*.08)}var vs={SW:"SOUTH",SE:"SOUTH",ES:"EAST",EN:"EAST",NE:"NORTH",NW:"NORTH",WN:"WEST",WS:"WEST"};function Br(o){let[r,t]=Ye(1024,777),a=he[o],s=pe[a?.tier??"T01"],i=t.createLinearGradient(0,0,0,777);i.addColorStop(0,"#15181C"),i.addColorStop(1,at),t.fillStyle=i,t.fillRect(0,0,1024,777),t.textBaseline="alphabetic",t.fillStyle="#F1F3F5",t.font=`500 44px ${j}`,S(t,`LEVEL ${$e(o+1)}`,48,86,14),t.fillStyle=s,t.fillRect(48,104,60,5),t.fillStyle=Xe,t.font=`500 18px ${V}`,S(t,`${a?.tier??""} \xB7 ${(a?.name??"").toUpperCase()}`,48,146,4);let l=400,u=48,c=190,d=l/(O*2),f=H=>[u+(H[0]+O)*d,c+(H[1]+O)*d];t.lineWidth=2,t.strokeStyle="#3A3F46",t.strokeRect(u,c,l,l);for(let H of a?.bays??[]){t.beginPath(),H.poly.forEach((L,z)=>{let[N,q]=f(L);z===0?t.moveTo(N,q):t.lineTo(N,q)}),t.closePath();let x=a?.stores.find(L=>L.bay.id===H.id);t.fillStyle=x?`${s}55`:H.use==="lobby"?"#2A2F3680":"#3A403A60",t.fill(),t.stroke();let[g,y]=f(Ve(H.id,(_+O)/2,H.use==="lobby"?0:6));t.fillStyle="#FFFFFF",t.font=`600 17px ${V}`;let F=x?x.node:H.use==="lounge"?"LOUNGE":H.id==="SW"?"":"LOBBY";F&&t.fillText(F,g-t.measureText(F).width/2,y+6)}let[h,m]=f([-1.3,0]);t.fillStyle="#3A3F46",t.fillRect(h,m,2.6*d,D*d);let[p,b]=f([-D,-D]);t.strokeStyle="#6A717A",t.setLineDash([6,5]),t.strokeRect(p,b,D*2*d,D*2*d),t.setLineDash([]);let[v,T]=f([0,0]);t.beginPath(),t.arc(v,T,be*d,0,Math.PI*2),t.fillStyle="#9AA1A9",t.fill(),t.fillStyle=at,t.font=`600 13px ${V}`,t.fillText("LIFT",v-t.measureText("LIFT").width/2,T+5);let[w,A]=f(Ge);t.beginPath(),t.arc(w,A,9,0,Math.PI*2),t.fillStyle=Ue,t.fill(),t.fillStyle="#FFFFFF",t.font=`600 15px ${V}`,S(t,"YOU ARE HERE",w+16,A+5,1),t.fillStyle=Xe,t.font=`600 14px ${V}`,t.fillText("N",u+l/2-5,c-10);let P=220,B=500;t.fillStyle=Xe,t.font=`600 15px ${V}`,S(t,"STORES ON THIS LEVEL",B,P-26,4);for(let H of a?.stores??[])t.fillStyle=s,vn(t,B,P,74,38,8),t.fill(),t.fillStyle="#FFFFFF",t.font=`500 20px ${j}`,t.fillText(H.node,B+12,P+27),t.font=`500 23px ${j}`,S(t,H.name.toUpperCase(),B+92,P+27,2),t.fillStyle=Xe,t.font=`500 14px ${V}`,S(t,`${vs[H.bay.id]} WING`,B+92,P+52,3),P+=84;return t.fillStyle=Xe,t.font=`400 16px ${V}`,t.fillText("Lift in the atrium: every level, Level 01 at the street.",48,737),r}var Lt={w:560,h:797};function kn(o){let n=Lt.h-128,r=Math.min(68,(n-338)/Math.max(1,o));return Array.from({length:o},(t,a)=>(338+r*(a+.5))/Lt.h)}function Ur(o,e){let{w:n,h:r}=Lt,[t,a]=Ye(n,r),s=de.node(o),i=s?.content?.bodyMap,l=s?.tier??"T01";a.fillStyle="#FFFFFF",a.fillRect(0,0,n,r),a.strokeStyle=ss,a.lineWidth=3,a.strokeRect(1.5,1.5,n-3,r-3),a.strokeStyle=pn,a.lineWidth=3;for(let[p,b,v,T]of[[10,10,1,1],[n-10,10,-1,1],[10,r-10,1,-1],[n-10,r-10,-1,-1]])a.beginPath(),a.moveTo(p+v*22,b),a.lineTo(p,b),a.lineTo(p,b+T*22),a.stroke();a.textBaseline="alphabetic",a.fillStyle=Ue,a.beginPath(),a.arc(34,44,5,0,Math.PI*2),a.fill(),a.fillStyle=vt,a.font=`600 15px ${V}`,S(a,"02  SUBJECT // BODY MAP",48,50,2.5),a.fillStyle=pe[l],a.font=`600 15px ${V}`;let u=S(a,`${o} \xB7 ${l}`,0,0,2,!1);S(a,`${o} \xB7 ${l}`,n-30-u,50,2),a.fillStyle=pn,a.font=`500 36px ${j}`,S(a,(s?.name??o).toUpperCase(),30,104,4),a.fillStyle=vt,a.font=`600 14px ${V}`,i&&S(a,mo[i.scope].toUpperCase(),30,136,2);let c=178;if(i){a.fillStyle=pn,a.font=`400 20px ${V}`;for(let p of Oe(a,i.where.text,n-60).slice(0,5))a.fillText(p,30,c),c+=27;bs(a,i.where,30,c+2,12)}let d=i?$t(i):[],f=kn(d.length);d.forEach((p,b)=>{let v=(f[b]??0)*r,T=52,w=e?n-30-T:30;a.strokeStyle=Ue,a.lineWidth=2.5,a.strokeRect(w,v-17,T,34),a.fillStyle="#C9141E",a.font=`600 18px ${V}`;let A=String(p.index+1).padStart(2,"0");a.fillText(A,w+(T-a.measureText(A).width)/2,v+6);let P=e?30:30+T+16,B=n-60-T-16;a.fillStyle=pn,a.font=`600 19px ${V}`,a.fillText(Oe(a,p.label,B)[0]??p.label,P,v-2),a.fillStyle=vt,a.font=`600 12px ${V}`;let H=[p.zone,p.region==="body"?"":`GRID ${p.grid}`,p.posterior?"BEHIND OTHER ORGANS":"",p.example?"EXAMPLE SITE":""].filter(Boolean).join(" \xB7 ");S(a,H.toUpperCase(),P,v+18,1.2)});let h=i?.overlays??[],m=r-98;if(h.length>0){a.fillStyle=vt,a.font=`600 12px ${V}`,S(a,"OVERLAY",30,m,2);let p=110;for(let b of h)for(let v of po[b])a.fillStyle=v.color==="accent"?pe[l]:v.color,a.fillRect(p,m-6,18,3),a.fillStyle=as,a.font=`400 13px ${V}`,a.fillText(v.label,p+24,m),p+=24+a.measureText(v.label).width+18,p>n-120&&(p=110,m+=20)}return a.fillStyle=vt,a.font=`600 11px ${V}`,S(a,"ILLUSTRATIVE \xB7 NOT TO SCALE \xB7 FRONT VIEW",30,r-44,1.5),S(a,"THE SUBJECT'S RIGHT IS ON YOUR LEFT",30,r-26,1.5),t}var gn=Xo;function gs(o,e,n,r,t,a){o.font=`600 ${a}px ${V}`,o.fillStyle=n.status==="sourced"?e.sourced:e.text3,S(o,Rn[n.status].toUpperCase(),r,t,a*.12)}function bn(o,e,n,r,t,a,s){o.fillStyle=e.accent,o.font=`600 ${s}px ${V}`;let i=S(o,n,t,a,s*.05);o.fillStyle=e.text,o.font=`500 ${s*.78}px ${j}`,S(o,r,t+i+s*.6,a-s*.05,s*.2),o.fillStyle=e.accent,o.fillRect(t,a+s*.42,s*1.3,Math.max(2,s*.08))}function $r(o,e,n,r,t,a,s,i,l){o.font=`400 ${s}px ${V}`;let u=Oe(o,n.text,a),c=u.length*i+s*1.4;if(t+c>l)return null;o.fillStyle=e.text;for(let d of u)o.fillText(d,r,t),t+=i;return gs(o,e,n,r,t+s*.1,Math.round(s*.56)),t+s*1.4}function Hr(o){let e=de.node(o),n=ft(o),r=e?.content,t=ke(o),a=gn(tn[t.stele],t.accent),s=n?.rooms.lettering,i=1536,l=808,[u,c]=Ye(i,l,.84);if(!n||!s||!e)return u;let d=i/s.width,f=-Math.cos(s.facing),h=-Math.sin(s.facing),m=f*n.bay.along[0]+h*n.bay.along[1]>0,p=Ne.stele.l0+.05,b=me=>m?(me-p)*d:(p+s.width-me)*d,v=me=>(s.bottom+s.height-me)*d,T=Math.min(b(Ne.screen.l0-.05),b(Ne.screen.l1+.05)),w=Math.max(b(Ne.screen.l0-.05),b(Ne.screen.l1+.05)),A=v(Ne.screen.bottom+(Ne.screen.l1-Ne.screen.l0)*3/4+.05),P=v(Ne.screen.bottom-.05),B=(T+w)/2>i/2,H=B?46:w+60,g=(B?T-60:i-46)-H;c.textBaseline="alphabetic";let y=he[n.level];c.font=`600 30px ${j}`;let F=S(c,o,0,0,2,!1)+28,L=e.name.toUpperCase(),z=me=>(c.font=`500 ${me}px ${j}`,S(c,L,0,0,me*.22,!1)),N=me=>(c.font=`600 18px ${V}`,S(c,me,0,0,2.6,!1)),q=me=>{let He=i-92-F-24-N(me)-64,K=92;for(;K>44&&z(K)>He;)K-=2;return K},X=`LEVEL ${$e(n.level+1)} \xB7 ${(y?.name??"").toUpperCase()}`,R=q(X)>=64?X:`LEVEL ${$e(n.level+1)}`,I=q(R),G=Math.min(A-26,112),U=B?46:i-46-z(I);c.fillStyle=a.text,c.font=`500 ${I}px ${j}`,S(c,L,U,G,I*.22),c.font=`600 30px ${j}`;let W=B?i-46-F:46;vn(c,W,G-46,F,50,9),c.fillStyle=pe[e.tier],c.fill(),c.fillStyle="#FFFFFF",S(c,o,W+14,G-10,2),c.fillStyle=a.text2;let C=N(R);S(c,R,B?W-24-C:W+F+24,G-14,2.6);let $=Math.max(G+92,210),Y=l-150;if(r){c.fillStyle=a.text3,c.font=`600 16px ${V}`;let me=`${r.kind[0]?.toUpperCase()??""}${r.kind.slice(1)} \xB7 ${r.category}`;c.fillText(me,H,$),$+=46,bn(c,a,"00","WHAT IT IS",H,$,26),$+=52;let He=$r(c,a,r.definition,H,$,g,27,37,Y);He!==null&&($=He+8);let K=r.synonyms.slice(0,5);if(K.length>0&&$+70<Y){c.fillStyle=a.text3,c.font=`600 14px ${V}`,S(c,"ALSO CALLED",H,$,2.4),$+=30,c.fillStyle=a.text2,c.font=`400 20px ${V}`;for(let Fe of Oe(c,K.join(" \xB7 "),g).slice(0,2))c.fillText(Fe,H,$),$+=28}}c.fillStyle=a.accent,c.fillRect(H,l-132,g,2),c.fillStyle=a.text3,c.font=`600 14px ${V}`,S(c,"IN THIS GALLERY",H,l-102,2.4),c.fillStyle=a.text2,c.font=`400 19px ${V}`;let se=["01 The model","02 Where it is in the body","03 How it works","05 In practice","07 Cinema"].join("   \xB7   ");Oe(c,se,g).slice(0,2).forEach((me,He)=>c.fillText(me,H,l-72+He*26));let oe=r?.review.status==="reviewed"?"Reviewed":"Not yet reviewed by a qualified reviewer",ce=r?.evidence?`Evidence: ${to[r.evidence.grade]} \xB7 `:"";c.fillStyle=a.text3,c.font=`400 15px ${V}`,c.fillText(`${ce}${oe}`,H,l-18);let ae=T+6;c.fillStyle=a.accent,c.font=`600 15px ${V}`;let we=S(c,"01  THE MODEL",ae,P+28,2.4);return c.fillStyle=a.text3,c.font=`400 15px ${V}`,c.fillText("Illustrative 3D model: conceptual, not to scale.",ae+we+18,P+28),c.fillStyle=a.text3,c.font=`600 13px ${V}`,S(c,`ABOVE \xB7 INSTALLATION \xB7 ${t.shape.toUpperCase()} \xB7 CONCEPTUAL, NOT TO SCALE`,ae,P+54,2),u}function Wr(o,e,n,r,t,a,s,i,l,u,c=0){let d=s,f=i,h=()=>(o.font=`400 ${d}px ${V}`,n.reduce((b,v)=>b+c+Oe(o,v.text,a).length*f+d*1.4+u,-u));for(;n.length>0&&d>16&&t+h()>l;)d-=1,f=Math.round(d*1.39);let m=[],p=t;for(let b of n)m.push(p),p=($r(o,e,b,r,p+c,a,d,f,1/0)??p+c)+u;return{tops:m,end:n.length>0?p-u:t}}function zr(o){let e=Eo,[n,r]=Ye(e.w,e.h,.84),t=de.node(o),a=Mo(o),s=ke(o),i=gn(s.wall,s.accent);if(r.textBaseline="alphabetic",!t||!a)return n;r.fillStyle=i.accent,r.font=`500 108px ${j}`;let l=S(r,"03",40,118,4);r.fillStyle=i.text,r.font=`500 40px ${j}`,S(r,"THE LESSON",40+l+30,78,9),r.fillStyle=i.text3,r.font=`600 16px ${V}`,S(r,`${t.name.toUpperCase()} \xB7 ${o}`,40+l+32,114,3);let u=[40,40+e.colW+96];if(a.columns.forEach((c,d)=>{let f=u[d]??40;bn(r,i,c.num,c.title,f,e.top,24);let{end:h}=Wr(r,i,c.claims.slice(0,c.shown),f,e.top+54,e.colW,c.size,c.lead,e.maxY,10),m=c.shown>0?h+10:e.top+54;c.shown<c.claims.length&&(r.fillStyle=i.text3,r.font=`400 17px ${V}`,r.fillText(`${c.claims.length-c.shown} more in the store panel and on the node page.`,f,Math.min(m+4,e.maxY+30)))}),a.preparing){let c=u[1]??0;bn(r,i,"\xB7\xB7","IN PREPARATION",c,e.top,24),r.fillStyle=i.text2,r.font=`400 22px ${V}`;let d=e.top+54;for(let f of Oe(r,To,e.colW))r.fillText(f,c,d),d+=32}return r.fillStyle=i.text3,r.font=`400 16px ${V}`,r.fillText(Ro,40,e.h-16),n}function Gr(o){let e=wo,n=e.w,r=e.h,[t,a]=Ye(n,r,.88),s=de.node(o),i=ke(o),l=gn(i.wall,i.accent);if(a.textBaseline="alphabetic",!s)return t;let u=Po(o),c=e.x,d=e.width;a.fillStyle=l.accent,a.font=`500 84px ${j}`;let f=S(a,"05",c,96,3);a.fillStyle=l.text,a.font=`500 34px ${j}`,S(a,"IN PRACTICE",c+f+24,66,7),a.fillStyle=l.text3,a.font=`600 15px ${V}`,S(a,Fo,c+f+26,96,2.4);let h=e.top;if(u.items.length===0){a.fillStyle=l.text2,a.font=`400 21px ${V}`;for(let v of Oe(a,So,d))a.fillText(v,c,h),h+=30;h+=14}let m=u.items.slice(0,u.shown),{tops:p,end:b}=Wr(a,l,m.map(v=>v.claim),c+14,h,d-14,21,29,e.maxY,14,34);m.forEach((v,T)=>{let w=p[T]??h;a.fillStyle=l.accent,a.fillRect(c,w-15,4,19),a.fillStyle=l.text3,a.font=`600 15px ${V}`;let A=S(a,v.head,c+14,w,2.4);v.name&&(a.fillStyle=l.text,a.font=`600 20px ${V}`,a.fillText(v.name,c+14+A+14,w+1))}),m.length>0&&(h=b+14),u.shown<u.items.length&&(a.fillStyle=l.text3,a.font=`400 16px ${V}`,a.fillText(`${u.items.length-u.shown} more in the store panel.`,c+14,h),h+=30),h=Math.max(h+16,610),bn(a,l,"06","CONNECTED GALLERIES",c,h,22),h+=50;for(let v of u.links){if(h>r-70)break;a.fillStyle=pe[de.node(v.node)?.tier??"T01"],vn(a,c,h-22,62,30,7),a.fill(),a.fillStyle="#FFFFFF",a.font=`500 16px ${j}`,a.fillText(v.node,c+9,h-1),a.fillStyle=l.text,a.font=`600 20px ${V}`;let T=a.measureText(v.name).width;a.fillText(v.name,c+76,h),a.fillStyle=l.text3,a.font=`400 16px ${V}`,a.fillText(`${v.out?`This ${v.verb}`:`${v.verb[0]?.toUpperCase()??""}${v.verb.slice(1)} this`} \xB7 Level ${$e(v.level)}, ${v.wing} wing`,c+76+T+14,h),h+=50}return a.fillStyle=l.text3,a.font=`400 15px ${V}`,a.fillText(Ao,c,r-18),t}function kr(o){let[r,t]=Ye(1024,128,.75),a=de.node(o),s=ke(o),i=gn(s.wall,s.accent),l=a?.content?.rendering;if(!l)return r;t.textBaseline="alphabetic",t.fillStyle=i.accent,t.font=`600 15px ${V}`;let u=S(t,"THE SUBJECT, RENDERED",4,24,2.4);return t.fillStyle=i.text3,t.font=`400 15px ${V}`,t.fillText("Illustration: conceptual, not to scale.",4+u+16,24),t.fillStyle=i.text2,t.font=`400 18px ${V}`,Oe(t,l.caption,1016).slice(0,3).forEach((c,d)=>t.fillText(c,4,56+d*25)),r}function Xr(o){let[r,t]=Ye(384,544),a=de.node(o),s=ft(o),i=a?.tier??"T01";t.fillStyle="rgba(11,13,16,0.9)",t.fillRect(0,0,384,544),t.strokeStyle=_t,t.lineWidth=3,t.strokeRect(1.5,1.5,381,541),t.fillStyle=pe[i],t.fillRect(30,40,4,64),t.textBaseline="alphabetic",t.font=`500 112px ${j}`,S(t,o,26,210,6),t.fillStyle=Ue,t.fillRect(30,240,46,4),t.fillStyle="#F1F3F5";let l=34;t.font=`500 ${l}px ${j}`;let u=(a?.name??o).toUpperCase();for(;S(t,u,0,0,7,!1)>324&&l>18;)l-=2,t.font=`500 ${l}px ${j}`;S(t,u,30,300,7),t.fillStyle=Xe,t.font=`400 18px ${V}`;let c=340;for(let d of Oe(t,a?.content?.category??"",324).slice(0,2))t.fillText(d,30,c),c+=25;return t.font=`600 13px ${V}`,S(t,`LEVEL ${$e((s?.level??0)+1)} \xB7 STORE ${$e(s?.number??0)}`,30,478,3.5),S(t,"LIVE MODEL \xB7 BODY MAP \xB7 LESSON",30,504,3),r}function Yr(o){let[n,r]=Ye(384,384),t=de.node(o),a=t?.tier??"T01",s=384/2;r.beginPath(),r.arc(s,s,s-6,0,Math.PI*2),r.lineWidth=10,r.strokeStyle="rgba(200,206,212,0.95)",r.stroke(),r.beginPath(),r.arc(s,s,s-20,0,Math.PI*2),r.lineWidth=3,r.strokeStyle=pe[a],r.stroke(),r.strokeStyle="rgba(200,206,212,0.85)",r.lineWidth=2;for(let c=0;c<48;c++){let d=c/48*Math.PI*2,f=s-30,h=s-(c%12===0?50:c%4===0?42:36);r.beginPath(),r.moveTo(s+Math.sin(d)*f,s-Math.cos(d)*f),r.lineTo(s+Math.sin(d)*h,s-Math.cos(d)*h),r.stroke()}r.textBaseline="alphabetic",r.fillStyle="rgba(214,219,224,0.96)",r.font=`500 70px ${j}`;let i=S(r,o,0,0,6,!1);S(r,o,s-i/2,s+16,6),r.font=`600 16px ${V}`;let l=(t?.name??"").toUpperCase(),u=S(r,l,0,0,5,!1);return S(r,l,s-u/2,s+56,5),r.fillStyle=Ue,r.fillRect(s-16,s+72,32,3),n}function Xn(o){return new Promise(e=>{let n=new Image;n.decoding="async",n.onload=()=>e(n),n.onerror=()=>e(null),n.src=o})}var ys={w:1280,h:720};function jr(o){let{w:e,h:n}=ys,[r,t]=Ye(e,n),a=de.node(o),s=a?.tier??"T01",i=de.videosOf(o),l=t.createRadialGradient(e*.42,n*.38,40,e*.5,n*.5,e*.75);l.addColorStop(0,"#1B1D21"),l.addColorStop(1,"#060708"),t.fillStyle=l,t.fillRect(0,0,e,n);let u=t.createLinearGradient(0,0,e*.6,0);u.addColorStop(0,`${pe[s]}55`),u.addColorStop(1,`${pe[s]}00`),t.fillStyle=u,t.fillRect(0,0,e*.6,6),t.fillStyle="rgba(255,255,255,0.025)";for(let w=0;w<n;w+=4)t.fillRect(0,w,e,1);t.textBaseline="alphabetic",t.fillStyle=Ue,t.font=`600 26px ${V}`;let c=S(t,"07",56,78,1);t.fillStyle="#FFFFFF",t.font=`500 28px ${j}`,S(t,"XI THEATER",56+c+18,78,8),t.font=`500 26px ${j}`;let d=(a?.name??o).toUpperCase(),f=S(t,d,0,0,4,!1);t.font=`500 22px ${j}`;let h=S(t,o,0,0,2,!1)+26,m=e-56;if(t.fillStyle="#FFFFFF",t.font=`500 26px ${j}`,S(t,d,m-f,78,4),t.fillStyle=pe[s],vn(t,m-f-18-h,50,h,38,8),t.fill(),t.fillStyle="#FFFFFF",t.font=`500 22px ${j}`,S(t,o,m-f-18-h+13,77,2),t.fillStyle="#E7C9A0",t.font=`600 15px ${V}`,S(t,i.length>0?`NOW SHOWING \xB7 ${i.length===1?"ONE FILM":`${i.length} FILMS`}`:"PROGRAMME IN PREPARATION",56,122,3.5),i.length===0){t.fillStyle="#FFFFFF",t.font=`500 40px ${j}`;let w="PROGRAMME IN PREPARATION",A=S(t,w,0,0,6,!1);S(t,w,(e-A)/2,n/2,6),t.fillStyle="#9FB0C2",t.font=`400 22px ${V}`;let P="No video meets the bar for this subject yet. The other stations teach it.";t.fillText(P,(e-t.measureText(P).width)/2,n/2+46)}let p=i.length===1?760:560,b=48,v=i.length===1?(e-p)/2:(e-p*2-b)/2;i.forEach((w,A)=>{let P=v+A*(p+b),B=168;Dr(t,P,B,p,400,20),t.fillStyle="rgba(255,255,255,0.055)",t.fill(),t.strokeStyle="rgba(255,255,255,0.16)",t.lineWidth=2,t.stroke(),t.fillStyle=Ue,t.font=`600 16px ${V}`;let x=S(t,$e(A+1),P+32,B+52,1);t.fillStyle="#FFFFFF",S(t,eo[w.role].toUpperCase(),P+32+x+12,B+52,3),t.strokeStyle="#E7C9A0",t.lineWidth=3,t.beginPath(),t.arc(P+p-62,B+58,28,0,Math.PI*2),t.stroke(),t.fillStyle="#E7C9A0",t.beginPath(),t.moveTo(P+p-70,B+44),t.lineTo(P+p-48,B+58),t.lineTo(P+p-70,B+72),t.closePath(),t.fill(),t.fillStyle="#FFFFFF",t.font=`500 30px ${j}`;let g=B+124;for(let F of Oe(t,w.title,p-64).slice(0,3))t.fillText(F,P+32,g),g+=40;t.fillStyle="#C9D6E3",t.font=`600 18px ${V}`,t.fillText(`${w.channel} \xB7 ${w.published}`,P+32,g+10),t.fillStyle="#9FB0C2",t.font=`400 19px ${V}`;let y=g+52;for(let F of Oe(t,w.about,p-64).slice(0,3))t.fillText(F,P+32,y),y+=27}),t.fillStyle="#9FB0C2",t.font=`400 16px ${V}`;let T=i.length>0?"Click the screen or press Enter to watch. Plays from YouTube in privacy-enhanced mode; nothing loads from YouTube until you press play.":"";return t.fillText(T,56,n-74),t.fillText(i.length>0?"Chosen for teaching from established educational publishers. Their claims are theirs; TRIARC does not cite them as sources.":"",56,n-48),r}function xs(o,e,n,r){let t=(u,c,d)=>(c[0]-u[0])*(d[1]-u[1])-(c[1]-u[1])*(d[0]-u[0]),a=t(n,r,o),s=t(n,r,e),i=t(o,e,n),l=t(o,e,r);return(a>0&&s<0||a<0&&s>0)&&(i>0&&l<0||i<0&&l>0)}var Yn=.35,Kr=1,Es=80*Math.PI/180,Ts=17,Rs=2,jn=.18,qr=1.2,Ms=12,Qr={gallery:1,warm:1.04,chroma:1.16,noir:1.3,cinema:1.3},ws={store:"model",board:"body",theater:"theater",window:"front",print:"model",directory:null},Zr=class{canvas;host;opts;gl=null;renderer=null;world=null;live=null;rig=new mn;input=null;raf=0;lastFrame=0;lastRender=0;time=0;disposed=!1;failed=!1;visible=!0;dirty=!0;ready=!1;reduced;scale=.9;exposure=Ee.exposure;ema=16;calm=0;slowSince=0;busyFrames=0;wasBusy=!1;proj=wt();view=wt();viewProj=wt();invViewProj=wt();pointer=null;pointerDirty=!1;hover=null;focus=null;focusAt=0;snapKey="";snapAt=0;highlightLevel=null;fronts;opaqueWalls;holoCache=new Map;boards=new Map;cinemaScreens=new Map;drawnHolos=[];theaterPlaying=!1;dim=0;theaterKey="";uploaded=!1;resizeObserver=null;livePrev=null;postersLoading=new Set;observer=null;onLost=e=>{e.preventDefault(),this.fail("lost")};fixedScale;fixedDpr;constructor(e,n,r){this.canvas=e,this.host=n,this.opts=r;let t=globalThis.__OUTLET_SCALE__;this.fixedScale=typeof t=="number"&&t>0&&t<=1?t:null,this.fixedScale&&(this.scale=this.fixedScale);let a=globalThis.__OUTLET_DPR__;this.fixedDpr=typeof a=="number"&&a>=1&&a<=3?a:null,this.reduced=r.reducedMotion,this.rig.reducedMotion=r.reducedMotion,this.fronts=zt.map(u=>({node:u.node,level:u.level,centre:[u.door[0],Te(u.level)+2.8,u.door[1]],normal:[-u.bay.inward[0],0,-u.bay.inward[1]],u:[u.bay.along[0],0,u.bay.along[1]]}));let s=O,i=_;this.opaqueWalls=[...[-1,1].flatMap(u=>[-1,1].map(c=>({a:[u*i,c*i],b:[u*s,c*s]}))),{a:[i,0],b:[s,0]},{a:[0,-i],b:[0,-s]},{a:[-i,0],b:[-s,0]},...zt.flatMap(u=>{let c=u.rooms,d=u.bay.inward,f=b=>[b[0]+d[0]*c.stele.thick,b[1]+d[1]*c.stele.thick],h=(b,v)=>[c.partition.door[0]+(b[0]-c.partition.door[0])*v,c.partition.door[1]+(b[1]-c.partition.door[1])*v],m=Math.hypot(c.partition.a[0]-c.partition.door[0],c.partition.a[1]-c.partition.door[1]),p=Math.hypot(c.partition.b[0]-c.partition.door[0],c.partition.b[1]-c.partition.door[1]);return[{a:c.stele.a,b:c.stele.b},{a:f(c.stele.a),b:f(c.stele.b)},{a:c.partition.a,b:h(c.partition.a,c.partition.doorHalf/m)},{a:h(c.partition.b,c.partition.doorHalf/p),b:c.partition.b}]})];let l=e.getContext("webgl2",{antialias:!0,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(!l){queueMicrotask(()=>this.fail("webgl"));return}this.gl=l,e.addEventListener("webglcontextlost",this.onLost);try{this.world=Lr();for(let c of this.world.screens)c.kind==="board"&&c.node&&this.boards.set(c.node,c.rect),c.kind==="theater"&&c.node&&this.cinemaScreens.set(c.node,c.rect);let u=Ss(l);this.renderer=new dn(l,this.world,u),n.dataset.quality=u,!this.fixedScale&&ea(l)&&(this.scale=.5),this.live=new on(l)}catch(u){console.warn("XI Outlet could not start its renderer",u),queueMicrotask(()=>this.fail("compile"));return}this.rig.goTo(r.start,!0),this.input=new nn(n,{click:(u,c)=>this.click(u,c),hover:(u,c)=>{this.pointer=u<0?null:[u,c],this.pointerDirty=!0},back:()=>this.back(),activate:()=>this.activate(),poke:()=>{this.dirty=!0},blocked:()=>document.querySelector("dialog[open]")!==null}),typeof IntersectionObserver<"u"&&(this.observer=new IntersectionObserver(u=>{for(let c of u)this.visible=c.isIntersecting;this.visible&&(this.dirty=!0)}),this.observer.observe(n)),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.dirty=!0}),this.resizeObserver.observe(n)),Cr().then(()=>{this.disposed||!this.renderer||(this.renderer.setAtlas(Or()),this.dirty=!0)}),this.raf=requestAnimationFrame(this.tick)}goTo(e,n=this.reduced){this.renderer&&(this.rig.goTo(e,n),this.dirty=!0)}activate(){let e=this.focus;e&&(e.kind==="store"&&e.part==="theater"&&this.seatedAt()===e.node?this.opts.onSelect?.(e):e.kind==="store"?this.goTo(Jr(e.node,e.part)):e.kind==="level"?this.goTo({kind:"level",level:e.level}):(e.kind==="lift"||e.kind==="directory")&&this.opts.onSelect?.(e))}back(){if(this.theaterPlaying){this.setTheaterPlaying(!1),this.opts.onTheaterExit?.();return}this.rig.mode!=="exterior"&&this.goTo({kind:"exterior"})}setTheaterPlaying(e){this.theaterPlaying!==e&&(this.theaterPlaying=e,this.dirty=!0)}seatedAt(){if(this.rig.mode!=="walk")return null;let e=this.rig.camera();if(e.level===null)return null;for(let n of he[e.level]?.stores??[]){let r=n.stations.theater;if(Math.hypot(r.p[0]-e.eye[0],r.p[1]-e.eye[2])<.9)return n.node}return null}setReducedMotion(e){this.reduced=e,this.rig.reducedMotion=e,this.dirty=!0}highlight(e){this.highlightLevel=e,this.dirty=!0}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.input?.dispose(),this.observer?.disconnect(),this.resizeObserver?.disconnect(),this.canvas.removeEventListener("webglcontextlost",this.onLost),this.live?.dispose(),this.renderer?.dispose(),this.gl?.getExtension("WEBGL_lose_context")?.loseContext(),this.gl=null}fail(e){this.failed||this.disposed||(this.failed=!0,cancelAnimationFrame(this.raf),this.opts.onFail(e))}tick=e=>{if(this.disposed||this.failed)return;if(this.raf=requestAnimationFrame(this.tick),!this.visible||document.hidden){this.lastFrame=0;return}let n=this.lastFrame?Math.min(.5,(e-this.lastFrame)/1e3):1/60;this.lastFrame=e;let r=this.input?.consume();this.theaterPlaying&&r&&(r.forward!==0||r.strafe!==0||r.turn!==0||r.zoom!==0?(this.setTheaterPlaying(!1),this.opts.onTheaterExit?.()):r={...r,lookX:0,lookY:0});let t=r?this.rig.update(n,r):!1;this.reduced||(this.time+=n);let a=this.theaterPlaying?1:0,s=this.dim!==a;s&&(this.dim=this.reduced||Math.abs(a-this.dim)<.02?a:this.dim+(a-this.dim)*Math.min(1,n*5));let i=t||this.rig.travelling||this.dirty||this.pointerDirty||s;!i&&(this.reduced||this.theaterPlaying||e-this.lastRender<33)||this.render(e,i)};render(e,n){let r=this.gl,t=this.renderer;if(!r||!t)return;let a=this.lastRender?e-this.lastRender:16;this.lastRender=e;let s=this.uploaded;this.uploaded=!1,this.dirty=!1;let i=this.rig.camera(),l=this.fixedDpr??Math.min(window.devicePixelRatio||1,t.tier==="cinematic"?1.5:2),u=Math.max(1,this.canvas.clientWidth),c=Math.max(1,this.canvas.clientHeight),d=Math.max(1,Math.round(u*l*this.scale)),f=Math.max(1,Math.round(c*l*this.scale));(this.canvas.width!==d||this.canvas.height!==f)&&(this.canvas.width=d,this.canvas.height=f);let h=Math.min(1,Math.max(0,(i.fov-bt)/(Gn-bt))),m=u/c,p=i.fov+Math.max(0,Math.min(Es,2*Math.atan(1/m))-bt)*(1-h);Vo(this.proj,p,m,i.level===null?.5:.08,3200),u>640&&(this.proj[8]=(this.proj[8]??0)-.16*h);let b=Io(i.heading,i.pitch);Xt(this.view,i.eye,Sn(i.eye,b)),Ft(this.viewProj,this.proj,this.view),Yt(this.invViewProj,this.viewProj);let v=J(ge(b,[0,1,0])),T=ge(v,b);this.pointerDirty&&(this.pointerDirty=!1,this.hover=this.pointer?this.pickClient(this.pointer[0],this.pointer[1]):null,this.host.style.cursor=this.hover&&this.hover.kind!=="floor"?"pointer":""),e-this.focusAt>140&&(this.focusAt=e,this.focus=this.rig.mode==="exterior"?this.hover:this.pick(0,0),this.focus?.kind==="floor"&&(this.focus=null)),t.setRibbon(this.rig.routeAhead()),this.feedTextures(i.level,i.eye),this.updateLive(i.level,i.eye,b,a);let w=this.holoFrame(i.level,i.eye,b);this.drawnHolos=w.map(x=>x.holo.node);let P=this.rig.mode!=="exterior"&&Math.max(Math.abs(i.eye[0]),Math.abs(i.eye[2]))<O-.3&&i.eye[1]<te?Ee.exposureInside*this.roomGain(i.level,i.eye):Ee.exposure;this.exposure=this.reduced?P:this.exposure+(P-this.exposure)*Math.min(1,a/1e3*3),Math.abs(P-this.exposure)<.01?this.exposure=P:this.dirty=!0;let B=this.rig.mode==="exterior"?this.highlightLevel??(this.hover?.kind==="level"?this.hover.level:null):null,H=B!==null?Te(B):0;if(t.draw({viewProj:this.viewProj,invViewProj:this.invViewProj,eye:i.eye,right:v,up:T,time:this.time,cabY:this.rig.cabY(),fade:1,holos:w,pxPerMetre:f/(2*Math.tan(p/2)),dim:this.dim,mirrorY:this.rig.mode==="exterior"||i.level===null||i.level===0?-.05:Te(i.level),level:this.rig.mode==="exterior"?null:i.level,exposure:this.exposure,highlight:B!==null?{min:[-O-.45,H-re-.05,-O-.45],max:[O+.45,H+Be-re,O+.45],rgba:[.89,.14,.17,.16]}:null},d,f),n&&this.wasBusy&&!s&&this.adapt(a,e),this.wasBusy=n,this.ready||(this.ready=!0,this.host.dataset.state="live",this.opts.onReady()),this.emit(e,i.level,i.eye,i.heading),this.reportTheater(u,c),this.opts.onFrame){let x=Float32Array.from(this.viewProj);this.opts.onFrame({mode:this.rig.mode,level:i.level,x:i.eye[0],z:i.eye[2],eyeY:i.eye[1],heading:i.heading,pitch:i.pitch,width:u,height:c,project:(g,y,F)=>{let L=(x[3]??0)*g+(x[7]??0)*y+(x[11]??0)*F+(x[15]??0);if(L<.05)return null;let z=((x[0]??0)*g+(x[4]??0)*y+(x[8]??0)*F+(x[12]??0))/L,N=((x[1]??0)*g+(x[5]??0)*y+(x[9]??0)*F+(x[13]??0))/L;return[(z+1)/2*u,(1-N)/2*c,L]},blocked:(g,y)=>{let F=[i.eye[0],i.eye[2]];return this.opaqueWalls.some(L=>xs(F,[g,y],L.a,L.b))}})}}reportTheater(e,n){let r=this.seatedAt(),t=r?this.cinemaScreens.get(r):void 0,a=null;if(r&&t){let i=(f,h)=>{let m=t.centre[0]+t.u[0]*t.hu*f+t.v[0]*t.hv*h,p=t.centre[1]+t.u[1]*t.hu*f+t.v[1]*t.hv*h,b=t.centre[2]+t.u[2]*t.hu*f+t.v[2]*t.hv*h,v=this.viewProj,T=(v[0]??0)*m+(v[4]??0)*p+(v[8]??0)*b+(v[12]??0),w=(v[1]??0)*m+(v[5]??0)*p+(v[9]??0)*b+(v[13]??0),A=(v[3]??0)*m+(v[7]??0)*p+(v[11]??0)*b+(v[15]??0);return A<.05?null:[(T/A+1)/2*e,(1-w/A)/2*n]},l=i(-1,1),u=i(1,1),c=i(1,-1),d=i(-1,-1);l&&u&&c&&d&&(a={node:r,corners:[l,u,c,d]})}let s=a?`${this.theaterPlaying?"playing":"seated"}:${a.node}:${a.corners.map(i=>`${i[0].toFixed(1)},${i[1].toFixed(1)}`).join(";")}`:"";s!==this.theaterKey&&(this.theaterKey=s,this.host.dataset.theater=a?this.theaterPlaying?"playing":"seated":"",this.opts.onTheaterScreen?.(a))}adapt(e,n){if(!(this.fixedScale||++this.busyFrames<5)){if(this.ema=this.ema*.85+e*.15,this.renderer?.tier==="cinematic"&&this.scale<=.6&&this.ema>40){this.renderer.setTier("basic"),this.host.dataset.quality="basic",this.scale=.85,this.ema=24,this.calm=0;return}this.ema>42&&this.scale>Yn?(this.scale=Math.max(Yn,this.scale*.88),this.calm=0):this.ema<22?++this.calm>50&&this.scale<Kr&&(this.scale=Math.min(Kr,this.scale*1.08),this.calm=0):this.calm=0,this.scale<=Yn&&this.ema>650?this.slowSince?n-this.slowSince>9e3&&this.fail("slow"):this.slowSince=n:this.slowSince=0}}roomGain(e,n){let r=e===null?void 0:he[e];if(!r)return 1;let t=Mn(r,[n[0],n[2]]);return t.kind!=="store"?1:Math.min(Math.abs(n[0]),Math.abs(n[2]))>_?Qr.cinema:Qr[ke(t.store.node).mood]}posterUrl(e,n){let r=de.node(e)?.content?.rendering?.asset;return r?`${this.opts.base}visuals/${r}-${n}.webp`:null}feedTextures(e,n){let r=this.renderer;if(!r)return;for(let i of zt){let l=e===i.level?640:320,u=l===640?2:1,c=`store:${i.node}`;if(r.screenGrade(c)>=u)continue;let d=`${c}@${l}`;if(this.postersLoading.has(d)||this.postersLoading.size>=4)continue;let f=this.posterUrl(i.node,l);f&&(this.postersLoading.add(d),Xn(f).then(h=>{if(this.postersLoading.delete(d),!h||this.disposed||!this.renderer)return;this.renderer.setScreenImage(c,h,u,!0);let m=this.rig.camera().level;(m===null||m===i.level)&&(this.dirty=!0,this.uploaded=!0)}))}if(e===null)return;let t=he[e];if(!t)return;let a=`directory:${e}`;if(r.screenGrade(a)<3)r.setScreenImage(a,Br(e),3,!0),this.dirty=!0,this.uploaded=!0;else{let i=t.stores.slice().sort((l,u)=>Math.hypot(l.display[0]-n[0],l.display[1]-n[2])-Math.hypot(u.display[0]-n[0],u.display[1]-n[2]));e:for(let l of i){let u=this.nearStore(l,n);for(let[c,d,f,h]of this.storeCanvases(l))if(!(h&&!u)&&!(r.screenGrade(c)>=3)){r.setScreenImage(c,d(),3,!0,f),this.dirty=!0,this.uploaded=!0;break e}}}for(let i of t.stores){if(!this.nearStore(i,n))continue;let l=`print:${i.node}`;if(r.screenGrade(l)>=3||this.postersLoading.has(l)||this.postersLoading.size>=4)continue;let u=this.posterUrl(i.node,640);u&&(this.postersLoading.add(l),Xn(u).then(c=>{this.postersLoading.delete(l),!(!c||this.disposed||!this.renderer)&&(this.renderer.setScreenImage(l,c,3,!0),this.dirty=!0,this.uploaded=!0)}))}let s=new Set([a]);for(let i of t.stores){for(let[l]of this.storeCanvases(i))s.add(l);s.add(`print:${i.node}`),s.add(`holo:${i.node}`)}r.evict(i=>s.has(i))}nearStore(e,n){return Math.hypot(e.door[0]-n[0],e.door[1]-n[2])<Ms}storeCanvases(e){let n=e.node;return[[`banner:${n}`,()=>Xr(n),!0,!1],[`stele:${n}`,()=>Hr(n),!0,!0],[`board:${n}`,()=>Ur(n,this.boardSide(e)>0),!1,!0],[`lesson:${n}`,()=>zr(n),!0,!0],[`examples:${n}`,()=>Gr(n),!0,!0],[`caption:${n}`,()=>kr(n),!0,!0],[`theater:${n}`,()=>jr(n),!1,!0],[`medallion:${n}`,()=>Yr(n),!0,!0]]}boardSide(e){let n=this.boards.get(e.node);return n?(e.holo.at[0]-n.centre[0])*n.u[0]+(e.holo.at[1]-n.centre[2])*n.u[2]>=0?1:-1:1}holoOf(e){return this.holoCache.has(e)||this.holoCache.set(e,Wo(e)),this.holoCache.get(e)??null}holoFrame(e,n,r){if(e===null||this.rig.mode==="exterior")return[];let t=Math.hypot(r[0],r[2])||1,a=[];for(let i of he[e]?.stores??[]){let l=i.holo.at[0]-n[0],u=i.holo.at[1]-n[2],c=Math.hypot(l,u);if(c>Ts||c>1.6&&(l*r[0]+u*r[2])/(c*t)<.15)continue;let d={a:[n[0],n[2]],b:i.holo.at};this.opaqueWalls.every(f=>wn(d,f)>.05)&&a.push({s:i,d:c})}a.sort((i,l)=>i.d-l.d);let s=[];for(let{s:i}of a.slice(0,Rs).reverse()){let l=this.holoDraw(i);l&&s.push(l)}return s}holoDraw(e){let n=this.holoOf(e.node);if(!n)return null;let r=this.time,t=Math.PI-e.holo.facing+(this.reduced?0:Math.sin(r*.35)*.32),a=qr,s=Math.cos(t)*a,i=Math.sin(t)*a,[l,u]=e.holo.at,c=Te(e.level)+jn,d=new Float32Array([s,0,-i,0,0,a,0,0,i,0,s,0,l,c,u,1]),f=v=>[s*v[0]+i*v[2]+l,v[1]*a+c,-i*v[0]+s*v[2]+u],h=new Float32Array(n.targets.length*4);n.targets.forEach((v,T)=>{let w=f(v.at);h.set([w[0],w[1],w[2],v.r*a],T*4)});let m=[],p=this.boards.get(e.node);if(p&&n.rows.length>0){let v={centre:p.centre,u:p.u,n:ht(p),hu:p.hu,hv:p.hv};for(let T of zo(n,f,v,this.boardSide(e),kn(n.rows.length),30/Lt.w*p.hu*2)){let[w,A,P,B]=T.points;m.push(...w,...A,...A,...P,...P,...B)}}if(n.whole)for(let[w,A,P,B]of[[-.4,.02,1,1],[.4,.02,-1,1],[-.4,1.92,1,-1],[.4,1.92,-1,-1]]){let H=f([w,A,.14]);m.push(...f([w+P*.15,A,.14]),...H,...H,...f([w,A+B*.15,.14]))}let b=[];for(let[v,T,w]of[[.96,.5,.25],[1.52,.42,-.4]]){let P=this.reduced?0:r*w;for(let B=0;B<40;B+=2){let H=P+B/40*Math.PI*2,x=P+(B+1)/40*Math.PI*2;b.push(...f([Math.sin(H)*T,v,Math.cos(H)*T]),...f([Math.sin(x)*T,v,Math.cos(x)*T]))}}return{holo:n,model:d,rings:new Float32Array(b),leaders:new Float32Array(m),targets:h,scanY:this.reduced?-10:.05+(1-Math.abs(r*.2%2-1))*1.8,pulse:this.reduced?.4:.5+.5*Math.sin(r*2.2)}}updateLive(e,n,r,t){let a=this.live,s=this.renderer;if(!a||!s)return;let i=null;if(!this.reduced&&e!==null&&this.ema<(this.opts.liveBudget??60)){let c=18;for(let d of he[e]?.stores??[]){let f=d.display[0]-n[0],h=d.display[1]-n[2],m=Math.hypot(f,h);m<c&&f*r[0]+h*r[2]>-2&&(c=m,i=d.node)}}let l=i?`store:${i}`:null;if(this.livePrev&&this.livePrev.key!==l){let c=this.livePrev;this.livePrev=null,s.setScreenTexture(c.key,null,c.saved),a.showing=null,this.dirty=!0}if(!i||!l||!a.prepare(i))return;a.render(i,this.time,this.ema<24?0:66)&&this.livePrev?.key!==l&&(this.livePrev={key:l,saved:s.setScreenTexture(l,a.texture)})}pickClient(e,n){let r=this.canvas.getBoundingClientRect();return r.width===0||r.height===0?null:this.pick((e-r.left)/r.width*2-1,1-(n-r.top)/r.height*2)}pick(e,n){let{origin:r,dir:t}=Co(this.invViewProj,e,n),a=this.rig.camera();if(this.rig.mode==="exterior"||a.level===null){let h=null,m=1/0;for(let p of he){let b=Do(r,t,[-O-.6,p.y-re,-O-.6],[O+.6,p.y+Be-re,O+.6]);b!==null&&b<m&&(m=b,h={kind:"level",level:p.index})}if(!h&&t[1]<0){let p=-r[1]/t[1];Math.hypot(r[0]+t[0]*p,r[2]+t[2]*p)<52&&(h={kind:"plaza"})}return h}let s=a.level,i=Te(s),l=null,u=1/0,c=[a.eye[0],a.eye[2]],d=h=>{let m=[r[0]+t[0]*h,r[2]+t[2]*h],p={a:c,b:[m[0]-(m[0]-c[0])*.02,m[1]-(m[1]-c[1])*.02]};return this.opaqueWalls.every(b=>wn(p,b)>.01)},f=(h,m)=>{h!==null&&h<u&&h<70&&d(h)&&(u=h,l=m)};for(let h of this.world?.screens??[]){if(h.level!==s)continue;let m=jt(r,t,h.rect.centre,ht(h.rect),h.rect.u,h.rect.v,h.rect.hu,h.rect.hv),p=ws[h.kind];h.kind==="directory"?f(m,{kind:"directory",level:s,distance:m??0}):h.node&&p&&f(m,{kind:"store",node:h.node,part:p,distance:m??0})}for(let h of this.world?.overlays??[]){if(h.level!==s||!h.station)continue;let m=jt(r,t,h.rect.centre,ht(h.rect),h.rect.u,h.rect.v,h.rect.hu,h.rect.hv);f(m,{kind:"store",node:h.node,part:h.station,distance:m??0})}for(let h of he[s]?.stores??[]){let m=Fs(r,t,h.holo.at,.45,i+jn,i+jn+1.82*qr);m!==null&&f(m,{kind:"store",node:h.node,part:"body",distance:m})}for(let h of this.fronts)h.level===s&&f(jt(r,t,h.centre,h.normal,h.u,[0,1,0],_/2,2.8),{kind:"store",node:h.node,part:"front",distance:0});{let h=t[0]*t[0]+t[2]*t[2],m=2*(r[0]*t[0]+r[2]*t[2]),p=r[0]*r[0]+r[2]*r[2]-be*be,b=m*m-4*h*p;if(h>1e-9&&b>=0){let v=(-m-Math.sqrt(b))/(2*h),T=r[1]+t[1]*v;v>0&&T>i&&T<i+Be&&f(v,{kind:"lift",distance:v})}}if(l){let h=l;return h.kind==="store"&&h.part==="front"?{...h,distance:u}:h}if(t[1]<-.02){let h=(i-r[1])/t[1],m=[r[0]+t[0]*h,r[2]+t[2]*h];if(h<40&&yo(s,m))return{kind:"floor",level:s,p:m,distance:h}}return null}click(e,n){let r=this.pickClient(e,n);if(r)switch(r.kind){case"level":this.goTo({kind:"level",level:r.level});break;case"plaza":this.goTo({kind:"plaza"});break;case"store":this.goTo(Jr(r.node,r.part));break;case"floor":this.goTo({kind:"point",level:r.level,p:r.p});break;case"lift":case"directory":this.opts.onSelect?.(r);break}}emit(e,n,r,t){let a=n!==null?he[n]:void 0,s=[r[0],r[2]],i=a&&this.rig.mode!=="exterior"?Mn(a,s):null,l=null;if(i?.kind==="store"&&this.rig.mode==="walk")for(let h of Wt){let m=i.store.stations[h].p;Math.hypot(m[0]-s[0],m[1]-s[1])<.9&&(l=h)}let u={mode:this.rig.mode,level:this.rig.mode==="exterior"?null:n,region:i?.kind??null,store:i?.kind==="store"?i.store.node:null,focus:this.focus,x:s[0],z:s[1],heading:t,destination:this.rig.destination,live:this.live?.showing??null,station:l,holos:this.drawnHolos},c=u.focus,d=JSON.stringify([u.mode,u.level,u.region,u.store,c?[c.kind,"node"in c?c.node:"","level"in c?c.level:"","part"in c?c.part:""]:null,u.destination,u.live,u.station,u.holos]);if(d===this.snapKey&&e-this.snapAt<120)return;this.snapKey=d,this.snapAt=e;let f=this.host.dataset;f.mode=u.mode,f.level=u.level===null?"":String(u.level+1),f.store=u.store??"",f.live=u.live??"",f.region=u.region??"",f.station=u.station??"",f.holo=u.holos.join(","),f.frame=`${Math.round(this.ema)}ms@${this.scale.toFixed(2)}`,f.pos=`${u.x.toFixed(1)},${u.z.toFixed(1)}`,this.opts.onSnapshot(u)}};function Jr(o,e){return e==="front"?{kind:"store",node:o}:{kind:"store",node:o,station:e}}function Fs(o,e,n,r,t,a){let s=o[0]-n[0],i=o[2]-n[1],l=e[0]*e[0]+e[2]*e[2];if(l<1e-9)return null;let u=2*(s*e[0]+i*e[2]),c=s*s+i*i-r*r,d=u*u-4*l*c;if(d<0)return null;let f=(-u-Math.sqrt(d))/(2*l);if(f<=0)return null;let h=o[1]+e[1]*f;return h>=t&&h<=a?f:null}function Ss(o){let e=o.getExtension("EXT_color_buffer_float")!==null,n=globalThis.__OUTLET_QUALITY__;return n==="basic"?"basic":n==="cinematic"?e?"cinematic":"basic":e?ea(o)?"basic":"cinematic":"basic"}function ea(o){let e=String(o.getParameter(o.RENDERER));if(/^webkit webgl$/i.test(e)){let n=o.getExtension("WEBGL_debug_renderer_info");n&&(e=String(o.getParameter(n.UNMASKED_RENDERER_WEBGL)))}return/swiftshader|llvmpipe|softpipe|software|basic render/i.test(e)}export{Zr as OutletEngine};
