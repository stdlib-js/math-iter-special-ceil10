// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function v(r){return"boolean"==typeof r}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function w(r,t){return null!=r&&d.call(r,t)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(r){var t,n,e;if(null==r)return s.call(r);n=r[m],t=w(r,m);try{r[m]=void 0}catch(t){return s.call(r)}return e=s.call(r),t?r[m]=n:delete r[m],e}:function(r){return s.call(r)},A=Boolean.prototype.toString;var g=b();function h(r){return"object"==typeof r&&(r instanceof Boolean||(g?function(r){try{return A.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===j(r)))}function _(r){return v(r)||h(r)}function O(){return new Function("return this;")()}l(_,"isPrimitive",v),l(_,"isObject",h);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var F=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,P=Int8Array;function T(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;l(T,"REGEXP",V);var x=Array.isArray?Array.isArray:function(r){return"[object Array]"===j(r)};function G(r){return null!==r&&"object"==typeof r}function H(r){var t,n,e,o;if(("Object"===(n=j(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=V.exec(e.toString()))return t[1]}return G(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(G,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!x(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(G));var B="function"==typeof y||"object"==typeof P||"function"==typeof I?function(r){return H(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?H(r).toLowerCase():t};function L(r){return"function"===B(r)}function M(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&L(r.next)}function W(r){return"number"==typeof r}var k=Number,C=k.prototype.toString;var Y=b();function q(r){return"object"==typeof r&&(r instanceof k||(Y?function(r){try{return C.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function R(r){return W(r)||q(r)}l(R,"isPrimitive",W),l(R,"isObject",q);var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var z,D=Object.getPrototypeOf;z=L(Object.getPrototypeOf)?D:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===j(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=z;var K=Object.prototype;function Q(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!x(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),J(r))}(r),!t||!w(r,"constructor")&&w(t,"constructor")&&L(t.constructor)&&"[object Function]"===j(t.constructor)&&w(t,"isPrototypeOf")&&L(t.isPrototypeOf)&&(t===K||function(r){var t;for(t in r)if(!w(r,t))return!1;return!0}(r)))}function Z(r,t){return Q(t)?(w(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function $(r,t,n){var e,o,u,i;if(!M(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,n)))throw u;return l(o={},"next",f),l(o,"return",a),X&&L(r[X])&&l(o,X,c),o;function f(){var n;return i?{done:!0}:(n=r.next()).done?(i=!0,n):{value:W(n.value)?t(n.value):e.invalid,done:!1}}function a(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return $(r[X](),t,e)}}function rr(r){return r!=r}var tr=Number.POSITIVE_INFINITY,nr=k.NEGATIVE_INFINITY;function er(r){return r===tr||r===nr}var or=Math.floor;function ur(r){return or(r)===r}function ir(r){return ur(r/2)}function fr(r){return ir(r>0?r-1:r+1)}var ar=Math.sqrt;function cr(r){return Math.abs(r)}var lr="function"==typeof Uint32Array;var yr="function"==typeof Uint32Array?Uint32Array:null;var vr,pr="function"==typeof Uint32Array?Uint32Array:void 0;vr=function(){var r,t,n;if("function"!=typeof yr)return!1;try{t=new yr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(lr&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var br=vr,sr="function"==typeof Float64Array;var dr="function"==typeof Float64Array?Float64Array:null;var wr,mr="function"==typeof Float64Array?Float64Array:void 0;wr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr([1,3.14,-3.14,NaN]),n=t,r=(sr&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr=wr,Ar="function"==typeof Uint8Array;var gr="function"==typeof Uint8Array?Uint8Array:null;var hr,_r="function"==typeof Uint8Array?Uint8Array:void 0;hr=function(){var r,t,n;if("function"!=typeof gr)return!1;try{t=new gr(t=[1,3.14,-3.14,256,257]),n=t,r=(Ar&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Or=hr,Ur="function"==typeof Uint16Array;var Sr="function"==typeof Uint16Array?Uint16Array:null;var Er,Nr="function"==typeof Uint16Array?Uint16Array:void 0;Er=function(){var r,t,n;if("function"!=typeof Sr)return!1;try{t=new Sr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Ur&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Fr,Ir={uint16:Er,uint8:Or};(Fr=new Ir.uint16(1))[0]=4660;var Pr,Tr,Vr=52===new Ir.uint8(Fr.buffer)[0];!0===Vr?(Pr=1,Tr=0):(Pr=0,Tr=1);var xr={HIGH:Pr,LOW:Tr},Gr=new jr(1),Hr=new br(Gr.buffer),Br=xr.HIGH,Lr=xr.LOW;function Mr(r,t){return Gr[0]=t,r[0]=Hr[Br],r[1]=Hr[Lr],r}function Wr(r,t){return 1===arguments.length?Mr([0,0],r):Mr(r,t)}var kr=!0===Vr?0:1,Cr=new jr(1),Yr=new br(Cr.buffer);function qr(r,t){return Cr[0]=r,Yr[kr]=t>>>0,Cr[0]}function Rr(r){return 0|r}var Xr,zr,Dr=!0===Vr?1:0,Jr=new jr(1),Kr=new br(Jr.buffer);function Qr(r){return Jr[0]=r,Kr[Dr]}!0===Vr?(Xr=1,zr=0):(Xr=0,zr=1);var Zr={HIGH:Xr,LOW:zr},$r=new jr(1),rt=new br($r.buffer),tt=Zr.HIGH,nt=Zr.LOW;function et(r,t){return rt[tt]=r,rt[nt]=t,$r[0]}var ot=[0,0];function ut(r,t){var n,e;return Wr(ot,r),n=ot[0],n&=2147483647,e=Qr(t),et(n|=e&=2147483648,ot[1])}var it=!0===Vr?1:0,ft=new jr(1),at=new br(ft.buffer);function ct(r,t){return ft[0]=r,at[it]=t>>>0,ft[0]}var lt=[1,1.5],yt=[0,.5849624872207642],vt=[0,1.350039202129749e-8];function pt(r,t){return rr(t)||er(t)?(r[0]=t,r[1]=0,r):0!==t&&cr(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var bt=[0,0],st=[0,0];function dt(r,t){var n,e;return 0===t||0===r||rr(r)||er(r)?r:(function(r,t){1===arguments.length?pt([0,0],r):pt(r,t)}(bt,r),t+=bt[1],t+=function(r){var t=Qr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=bt[0]),t<-1074?ut(0,r):t>1023?r<0?nr:tr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Wr(st,r),n=st[0],n&=2148532223,e*et(n|=t+1023<<20,st[1])))}var wt=1e300,mt=1e-300,jt=[0,0],At=[0,0];function gt(r,t){var n,e,o,u,i,f,a,c,l,y,v,p,b,s;if(rr(r)||rr(t))return NaN;if(Wr(jt,t),i=jt[0],0===jt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return ar(r);if(-.5===t)return 1/ar(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(er(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:cr(r)<1==(t===tr)?0:tr}(r,t)}if(Wr(jt,r),u=jt[0],0===jt[1]){if(0===u)return function(r,t){return t===nr?tr:t===tr?0:t>0?fr(t)?r:0:fr(t)?ut(tr,r):tr}(r,t);if(1===r)return 1;if(-1===r&&fr(t))return-1;if(er(r))return r===nr?gt(-0,-t):t<0?0:tr}if(r<0&&!1===ur(t))return(r-r)/(r-r);if(o=cr(r),n=2147483647&u|0,e=2147483647&i|0,a=i>>>31|0,f=(f=u>>>31|0)&&fr(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&Qr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===a?f*wt*wt:f*mt*mt;if(n>1072693248)return 0===a?f*wt*wt:f*mt*mt;v=function(r,t){var n,e,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=qr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r}(At,o)}else v=function(r,t,n){var e,o,u,i,f,a,c,l,y,v,p,b,s,d,w,m,j,A,g,h,_;return A=0,n<1048576&&(A-=53,n=Qr(t*=9007199254740992)),A+=(n>>20)-1023|0,n=1072693248|(g=1048575&n|0),g<=235662?h=0:g<767610?h=1:(h=0,A+=1,n-=1048576),i=qr(o=(m=(t=ct(t,n))-(c=lt[h]))*(j=1/(t+c)),0),e=524288+(n>>1|536870912),a=ct(0,e+=h<<18),w=(u=o*o)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=qr(a=3+(u=i*i)+(w+=(f=j*(m-i*a-i*(t-(a-c))))*(i+o)),0),s=(p=-7.028461650952758e-9*(y=qr(y=(m=i*a)+(j=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(j-(y-m))+vt[h])-((b=qr(b=(v=.9617967009544373*y)+p+(l=yt[h])+(d=A),0))-d-l-v),r[0]=b,r[1]=s,r}(At,o,n);if(y=(t-(c=qr(t,0)))*v[0]+t*v[1],l=c*v[0],Wr(jt,p=y+l),b=Rr(jt[0]),s=Rr(jt[1]),b>=1083179008){if(0!=(b-1083179008|s))return f*wt*wt;if(y+8008566259537294e-32>p-l)return f*wt*wt}else if((2147483647&b)>=1083231232){if(0!=(b-3230714880|s))return f*mt*mt;if(y<=p-l)return f*mt*mt}return p=function(r,t,n){var e,o,u,i,f,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),t-=u=ct(0,e)),r=Rr(r=Qr(c=1-((c=(i=.6931471824645996*(u=qr(u=n+t,0)))+(f=.6931471805599453*(n-(u-t))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?dt(c,l):ct(c,r)}(b,l,y),f*p}var ht=Math.ceil;function _t(r){var t,n,e,o,u,i,f;return rr(r)||r<0?NaN:0===r?nr:(u=0,(n=Qr(r))<1048576&&(u-=54,n=Qr(r*=0x40000000000000)),n>=2146435072?r+r:(u+=(n>>20)-1023|0,i=u+=(o=(n&=1048575)+614244&1048576|0)>>20|0,e=function(r){var t,n,e,o,u,i,f,a,c,l,y;return u=r-1,(1048575&2+(o=Qr(r)))<3?0===u?0:u*u*(.3333333333333333*u-.5):(l=(o&=1048575)-398458|0,y=440401-o|0,n=(c=(f=(i=u/(2+u))*i)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+n,(l|=y)>0?i*((t=.5*u*u)+a)-t:i*(a-u))}(r=ct(r,n|1072693248^o)),f=3694239077158931e-28*i+25082946711645275e-27*((r-=1)+e),(f+=.4342944818781689*(r-(t=qr(r,0))+e)+.4342944818781689*t)+.30102999566361177*i))}function Ot(r){var t,n;return rr(r)||er(r)||0===r?r:(r<0?(r=-r,t=-1):t=1,n=_t(r),(n=-1===t?or(n):ht(n))<=-324?0*t:n>308?tr:t*gt(10,n))}function Ut(r){return $(r,Ot)}export{Ut as default};
//# sourceMappingURL=mod.js.map
