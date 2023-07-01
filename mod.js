// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var c=n;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,n){return null!=r&&d.call(r,n)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=s()?function(r){var n,t,e;if(null==r)return b.call(r);t=r[m],n=w(r,m);try{r[m]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[m]=t:delete r[m],e}:function(r){return b.call(r)},g=Boolean.prototype.toString;var A=s();function _(r){return"object"==typeof r&&(r instanceof Boolean||(A?function(r){try{return g.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function h(r){return v(r)||_(r)}function O(){return new Function("return this;")()}l(h,"isPrimitive",v),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var F=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",V);var x=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function G(r){return null!==r&&"object"==typeof r}function H(r){var n,t,e,o;if(("Object"===(t=j(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=V.exec(e.toString()))return n[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}l(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(n){var t,e;if(!x(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(G));var B="function"==typeof y||"object"==typeof P||"function"==typeof I?function(r){return H(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"===(n=typeof r)?H(r).toLowerCase():n};function L(r){return"function"===B(r)}function M(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&L(r.next)}function W(r){return"number"==typeof r}var k=Number,C=k.prototype.toString;var Y=s();function q(r){return"object"==typeof r&&(r instanceof k||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return W(r)||q(r)}l(R,"isPrimitive",W),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!x(r)}(r)&&(n=function(r){return null==r?null:(r=Object(r),J(r))}(r),!n||!w(r,"constructor")&&w(n,"constructor")&&L(n.constructor)&&"[object Function]"===j(n.constructor)&&w(n,"isPrototypeOf")&&L(n.isPrototypeOf)&&(n===K||function(r){var n;for(n in r)if(!w(r,n))return!1;return!0}(r)))}function Z(r,n){return Q(n)?(w(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(r,n,t){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,t)))throw u;return l(o={},"next",f),l(o,"return",a),X&&L(r[X])&&l(o,X,c),o;function f(){var t;return i?{done:!0}:(t=r.next()).done?(i=!0,t):{value:W(t.value)?n(t.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[X](),n,e)}}function rr(r){return r!=r}var nr=Number.POSITIVE_INFINITY,tr=k.NEGATIVE_INFINITY;function er(r){return r===nr||r===tr}var or=Math.floor;function ur(r){return or(r)===r}function ir(r){return ur(r/2)}function fr(r){return ir(r>0?r-1:r+1)}var ar=Math.sqrt;function cr(r){return Math.abs(r)}var lr="function"==typeof Uint32Array;var yr="function"==typeof Uint32Array?Uint32Array:null;var vr,pr="function"==typeof Uint32Array?Uint32Array:void 0;vr=function(){var r,n,t;if("function"!=typeof yr)return!1;try{n=new yr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(lr&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr=vr,br="function"==typeof Float64Array;var dr="function"==typeof Float64Array?Float64Array:null;var wr,mr="function"==typeof Float64Array?Float64Array:void 0;wr=function(){var r,n,t;if("function"!=typeof dr)return!1;try{n=new dr([1,3.14,-3.14,NaN]),t=n,r=(br&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr=wr,gr="function"==typeof Uint8Array;var Ar="function"==typeof Uint8Array?Uint8Array:null;var _r,hr="function"==typeof Uint8Array?Uint8Array:void 0;_r=function(){var r,n,t;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,256,257]),t=n,r=(gr&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var Or=_r,Ur="function"==typeof Uint16Array;var Sr="function"==typeof Uint16Array?Uint16Array:null;var Er,Nr="function"==typeof Uint16Array?Uint16Array:void 0;Er=function(){var r,n,t;if("function"!=typeof Sr)return!1;try{n=new Sr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Ur&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Fr,Ir={uint16:Er,uint8:Or};(Fr=new Ir.uint16(1))[0]=4660;var Pr,Tr,Vr=52===new Ir.uint8(Fr.buffer)[0];!0===Vr?(Pr=1,Tr=0):(Pr=0,Tr=1);var xr={HIGH:Pr,LOW:Tr},Gr=new jr(1),Hr=new sr(Gr.buffer),Br=xr.HIGH,Lr=xr.LOW;function Mr(r,n,t,e){return Gr[0]=r,n[e]=Hr[Br],n[e+t]=Hr[Lr],n}function Wr(r){return Mr(r,[0,0],1,0)}l(Wr,"assign",Mr);var kr=!0===Vr?0:1,Cr=new jr(1),Yr=new sr(Cr.buffer);function qr(r,n){return Cr[0]=r,Yr[kr]=n>>>0,Cr[0]}function Rr(r){return 0|r}var Xr,zr,Dr=!0===Vr?1:0,Jr=new jr(1),Kr=new sr(Jr.buffer);function Qr(r){return Jr[0]=r,Kr[Dr]}!0===Vr?(Xr=1,zr=0):(Xr=0,zr=1);var Zr={HIGH:Xr,LOW:zr},$r=new jr(1),rn=new sr($r.buffer),nn=Zr.HIGH,tn=Zr.LOW;function en(r,n){return rn[nn]=r,rn[tn]=n,$r[0]}var on=[0,0];function un(r,n){var t,e;return Wr.assign(r,on,1,0),t=on[0],t&=2147483647,e=Qr(n),en(t|=e&=2147483648,on[1])}var fn=!0===Vr?1:0,an=new jr(1),cn=new sr(an.buffer);function ln(r,n){return an[0]=r,cn[fn]=n>>>0,an[0]}var yn=[1,1.5],vn=[0,.5849624872207642],pn=[0,1.350039202129749e-8];function sn(r,n,t,e){return rr(r)||er(r)?(n[e]=r,n[e+t]=0,n):0!==r&&cr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return sn(r,[0,0],1,0)}),"assign",sn);var bn=[0,0],dn=[0,0];function wn(r,n){var t,e;return 0===n||0===r||rr(r)||er(r)?r:(sn(r,bn,1,0),n+=bn[1],n+=function(r){var n=Qr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=bn[0]),n<-1074?un(0,r):n>1023?r<0?tr:nr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Wr.assign(r,dn,1,0),t=dn[0],t&=2148532223,e*en(t|=n+1023<<20,dn[1])))}var mn=1e300,jn=1e-300,gn=[0,0],An=[0,0];function _n(r,n){var t,e,o,u,i,f,a,c,l,y,v,p,s,b;if(rr(r)||rr(n))return NaN;if(Wr.assign(n,gn,1,0),i=gn[0],0===gn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return ar(r);if(-.5===n)return 1/ar(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(er(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:cr(r)<1==(n===nr)?0:nr}(r,n)}if(Wr.assign(r,gn,1,0),u=gn[0],0===gn[1]){if(0===u)return function(r,n){return n===tr?nr:n===nr?0:n>0?fr(n)?r:0:fr(n)?un(nr,r):nr}(r,n);if(1===r)return 1;if(-1===r&&fr(n))return-1;if(er(r))return r===tr?_n(-0,-n):n<0?0:nr}if(r<0&&!1===ur(n))return(r-r)/(r-r);if(o=cr(r),t=2147483647&u|0,e=2147483647&i|0,a=i>>>31|0,f=(f=u>>>31|0)&&fr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Qr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*mn*mn:f*jn*jn;if(t>1072693248)return 0===a?f*mn*mn:f*jn*jn;v=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=qr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(An,o)}else v=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p,s,b,d,w,m,j,g,A,_,h;return g=0,t<1048576&&(g-=53,t=Qr(n*=9007199254740992)),g+=(t>>20)-1023|0,t=1072693248|(A=1048575&t|0),A<=235662?_=0:A<767610?_=1:(_=0,g+=1,t-=1048576),i=qr(o=(m=(n=ln(n,t))-(c=yn[_]))*(j=1/(n+c)),0),e=524288+(t>>1|536870912),a=ln(0,e+=_<<18),w=(u=o*o)*u*(0===(h=u)?.5999999999999946:.5999999999999946+h*(.4285714285785502+h*(.33333332981837743+h*(.272728123808534+h*(.23066074577556175+.20697501780033842*h))))),a=qr(a=3+(u=i*i)+(w+=(f=j*(m-i*a-i*(n-(a-c))))*(i+o)),0),b=(p=-7.028461650952758e-9*(y=qr(y=(m=i*a)+(j=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(j-(y-m))+pn[_])-((s=qr(s=(v=.9617967009544373*y)+p+(l=vn[_])+(d=g),0))-d-l-v),r[0]=s,r[1]=b,r}(An,o,t);if(p=(y=(n-(c=qr(n,0)))*v[0]+n*v[1])+(l=c*v[0]),Wr.assign(p,gn,1,0),s=Rr(gn[0]),b=Rr(gn[1]),s>=1083179008){if(0!=(s-1083179008|b))return f*mn*mn;if(y+8008566259537294e-32>p-l)return f*mn*mn}else if((2147483647&s)>=1083231232){if(0!=(s-3230714880|b))return f*jn*jn;if(y<=p-l)return f*jn*jn}return p=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=u=ln(0,e)),r=Rr(r=Qr(c=1-((c=(i=.6931471824645996*(u=qr(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?wn(c,l):ln(c,r)}(s,l,y),f*p}var hn=Math.ceil;function On(r){var n,t,e,o,u,i,f;return rr(r)||r<0?NaN:0===r?tr:(u=0,(t=Qr(r))<1048576&&(u-=54,t=Qr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,i=u+=(o=(t&=1048575)+614244&1048576|0)>>20|0,e=function(r){var n,t,e,o,u,i,f,a,c,l,y;return u=r-1,(1048575&2+(o=Qr(r)))<3?0===u?0:u*u*(.3333333333333333*u-.5):(l=(o&=1048575)-398458|0,y=440401-o|0,t=(c=(f=(i=u/(2+u))*i)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+t,(l|=y)>0?i*((n=.5*u*u)+a)-n:i*(a-u))}(r=ln(r,t|1072693248^o)),f=3694239077158931e-28*i+25082946711645275e-27*((r-=1)+e),(f+=.4342944818781689*(r-(n=qr(r,0))+e)+.4342944818781689*n)+.30102999566361177*i))}function Un(r){var n,t;return rr(r)||er(r)||0===r?r:(r<0?(r=-r,n=-1):n=1,t=On(r),(t=-1===n?or(t):hn(t))<=-324?0*n:t>308?nr:n*_n(10,t))}function Sn(r){return $(r,Un)}export{Sn as default};
//# sourceMappingURL=mod.js.map