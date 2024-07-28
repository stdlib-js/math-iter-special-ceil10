// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=s.call(e,w,"$1e"),e=s.call(e,b,"e"),e=s.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,p,"e+0$1"),e=s.call(e,y,"e-0$1"),r.alternate&&(e=s.call(e,v,"$1."),e=s.call(e,g,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===l.call(r.specifier)?l.call(e):f.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,n,e,o,a,c,f,l,s,p,y,v,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(e=r[l],"string"==typeof e)c+=e;else{if(t=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,_(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!_(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(a)?String(e.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=h(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(p=e.arg,y=e.width,v=e.padRight,g=void 0,(g=y-p.length)<0?p:p=v?p+m(g):m(g)+p)),c+=e.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,n,e,i;for(n=[],i=0,e=S.exec(r);e;)(t=r.slice(i,S.lastIndex-e[0].length)).length&&n.push(t),n.push(x(e)),i=S.lastIndex,e=S.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function F(r){var t,n;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return O.apply(null,t)}var I,T=Object.prototype,k=T.toString,V=T.__defineGetter__,N=T.__defineSetter__,P=T.__lookupGetter__,G=T.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===k.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(P.call(r,t)||G.call(r,t)?(e=r.__proto__,r.__proto__=T,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(r,t,n.get),a&&N&&N.call(r,t,n.set),r};var L=I;function $(r,t,n){L(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var R=Object.prototype.hasOwnProperty;function Z(r,t){return null!=r&&R.call(r,t)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var q=B()?function(r){var t,n,e;if(null==r)return M.call(r);n=r[Y],t=Z(r,Y);try{r[Y]=void 0}catch(t){return M.call(r)}return e=M.call(r),t?r[Y]=n:delete r[Y],e}:function(r){return M.call(r)},z=Boolean,D=Boolean.prototype.toString;var J=B();function K(r){return"object"==typeof r&&(r instanceof z||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===q(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,tr="object"==typeof window?window:null,nr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},er="object"==typeof nr?nr:null,ir="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!H(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(rr)return rr;if(tr)return tr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=or.document&&or.document.childNodes,ur=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var fr=/^\s*function\s*([^(]*)/i;$(cr,"REGEXP",fr);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===q(r)};function sr(r){return null!==r&&"object"==typeof r}function pr(r){var t,n,e,i;if(("Object"===(n=q(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=fr.exec(e.toString()))return t[1]}return sr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}$(sr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!lr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(sr));var yr="function"==typeof C||"object"==typeof ur||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?pr(r).toLowerCase():t};function vr(r){return"function"===yr(r)}function gr(r){return"number"==typeof r}var dr=Number,br=dr.prototype.toString;var wr=B();function hr(r){return"object"==typeof r&&(r instanceof dr||(wr?function(r){try{return br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===q(r)))}function mr(r){return gr(r)||hr(r)}$(mr,"isPrimitive",gr),$(mr,"isObject",hr);var jr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var Ar,_r=Object,Er=Object.getPrototypeOf;Ar=vr(Object.getPrototypeOf)?Er:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Or=Ar;var Sr=Object.prototype;function xr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!lr(r)}(r)&&(t=function(r){return null==r?null:(r=_r(r),Or(r))}(r),!t||!Z(r,"constructor")&&Z(t,"constructor")&&vr(t.constructor)&&"[object Function]"===q(t.constructor)&&Z(t,"isPrototypeOf")&&vr(t.isPrototypeOf)&&(t===Sr||function(r){var t;for(t in r)if(!Z(r,t))return!1;return!0}(r)))}function Ur(r,t,n){var e,i,o,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!vr(u.next))throw new TypeError(F("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!vr(t))throw new TypeError(F("invalid argument. Second argument must be a function. Value: `%s`.",t));if(e={invalid:NaN},arguments.length>2&&(o=function(r,t){return xr(t)?(Z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",t))}(e,n),o))throw o;return $(i={},"next",(function(){var n;if(a)return{done:!0};if((n=r.next()).done)return a=!0,n;return{value:gr(n.value)?t(n.value):e.invalid,done:!1}})),$(i,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),jr&&vr(r[jr])&&$(i,jr,(function(){return Ur(r[jr](),t,e)})),i}function Fr(r){return r!=r}var Ir=Number.POSITIVE_INFINITY,Tr=dr.NEGATIVE_INFINITY;function kr(r){return r===Ir||r===Tr}var Vr=Math.floor;function Nr(r){return Vr(r)===r}function Pr(r){return Nr(r/2)}function Gr(r){return Pr(r>0?r-1:r+1)}var Lr=Math.sqrt;function $r(r){return Math.abs(r)}var Cr="function"==typeof Uint32Array;var Hr="function"==typeof Uint32Array?Uint32Array:null;var Wr,Br="function"==typeof Uint32Array?Uint32Array:void 0;Wr=function(){var r,t,n;if("function"!=typeof Hr)return!1;try{t=new Hr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(Cr&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Br:function(){throw new Error("not implemented")};var Mr=Wr,Rr="function"==typeof Float64Array;var Zr="function"==typeof Float64Array?Float64Array:null;var Xr,Yr="function"==typeof Float64Array?Float64Array:void 0;Xr=function(){var r,t,n;if("function"!=typeof Zr)return!1;try{t=new Zr([1,3.14,-3.14,NaN]),n=t,r=(Rr&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var qr=Xr,zr="function"==typeof Uint8Array;var Dr="function"==typeof Uint8Array?Uint8Array:null;var Jr,Kr="function"==typeof Uint8Array?Uint8Array:void 0;Jr=function(){var r,t,n;if("function"!=typeof Dr)return!1;try{t=new Dr(t=[1,3.14,-3.14,256,257]),n=t,r=(zr&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Kr:function(){throw new Error("not implemented")};var Qr=Jr,rt="function"==typeof Uint16Array;var tt="function"==typeof Uint16Array?Uint16Array:null;var nt,et="function"==typeof Uint16Array?Uint16Array:void 0;nt=function(){var r,t,n;if("function"!=typeof tt)return!1;try{t=new tt(t=[1,3.14,-3.14,65536,65537]),n=t,r=(rt&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?et:function(){throw new Error("not implemented")};var it,ot={uint16:nt,uint8:Qr};(it=new ot.uint16(1))[0]=4660;var at,ut,ct=52===new ot.uint8(it.buffer)[0];!0===ct?(at=1,ut=0):(at=0,ut=1);var ft={HIGH:at,LOW:ut},lt=new qr(1),st=new Mr(lt.buffer),pt=ft.HIGH,yt=ft.LOW;function vt(r,t,n,e){return lt[0]=r,t[e]=st[pt],t[e+n]=st[yt],t}function gt(r){return vt(r,[0,0],1,0)}$(gt,"assign",vt);var dt=!0===ct?0:1,bt=new qr(1),wt=new Mr(bt.buffer);function ht(r,t){return bt[0]=r,wt[dt]=t>>>0,bt[0]}function mt(r){return 0|r}var jt,At,_t=2147483647,Et=2147483648,Ot=!0===ct?1:0,St=new qr(1),xt=new Mr(St.buffer);function Ut(r){return St[0]=r,xt[Ot]}!0===ct?(jt=1,At=0):(jt=0,At=1);var Ft={HIGH:jt,LOW:At},It=new qr(1),Tt=new Mr(It.buffer),kt=Ft.HIGH,Vt=Ft.LOW;function Nt(r,t){return Tt[kt]=r,Tt[Vt]=t,It[0]}var Pt=[0,0];function Gt(r,t){var n,e;return gt.assign(r,Pt,1,0),n=Pt[0],n&=_t,e=Ut(t),Nt(n|=e&=Et,Pt[1])}var Lt=1072693247,$t=1e300,Ct=1e-300;var Ht=!0===ct?1:0,Wt=new qr(1),Bt=new Mr(Wt.buffer);function Mt(r,t){return Wt[0]=r,Bt[Ht]=t>>>0,Wt[0]}var Rt=1023;var Zt=1048575,Xt=1048576,Yt=1072693248,qt=536870912,zt=524288,Dt=20,Jt=9007199254740992,Kt=.9617966939259756,Qt=.9617967009544373,rn=-7.028461650952758e-9,tn=[1,1.5],nn=[0,.5849624872207642],en=[0,1.350039202129749e-8];var on=1.4426950408889634,an=1.4426950216293335,un=1.9259629911266175e-8;var cn=1023,fn=-1023,ln=-1074,sn=22250738585072014e-324,pn=4503599627370496;function yn(r,t,n,e){return Fr(r)||kr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&$r(r)<sn?(t[e]=r*pn,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}$((function(r){return yn(r,[0,0],1,0)}),"assign",yn);var vn=2146435072;var gn=2220446049250313e-31,dn=2148532223,bn=[0,0],wn=[0,0];function hn(r,t){var n,e;return 0===t||0===r||Fr(r)||kr(r)?r:(yn(r,bn,1,0),r=bn[0],t+=bn[1],t+=function(r){var t=Ut(r);return(t=(t&vn)>>>20)-Rt|0}(r),t<ln?Gt(0,r):t>cn?r<0?Tr:Ir:(t<=fn?(t+=52,e=gn):e=1,gt.assign(r,wn,1,0),n=wn[0],n&=dn,e*Nt(n|=t+Rt<<20,wn[1])))}var mn=.6931471805599453,jn=1048575;var An=1048576,_n=1071644672,En=20,On=.6931471824645996,Sn=-1.904654299957768e-9;var xn=1072693247,Un=1105199104,Fn=1139802112,In=1083179008,Tn=1072693248,kn=1083231232,Vn=3230714880,Nn=31,Pn=1e300,Gn=1e-300,Ln=8008566259537294e-32,$n=[0,0],Cn=[0,0];function Hn(r,t){var n,e,i,o,a,u,c,f,l,s,p,y,v,g;if(Fr(r)||Fr(t))return NaN;if(gt.assign(t,$n,1,0),a=$n[0],0===$n[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Lr(r);if(-.5===t)return 1/Lr(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(kr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:$r(r)<1==(t===Ir)?0:Ir}(r,t)}if(gt.assign(r,$n,1,0),o=$n[0],0===$n[1]){if(0===o)return function(r,t){return t===Tr?Ir:t===Ir?0:t>0?Gr(t)?r:0:Gr(t)?Gt(Ir,r):Ir}(r,t);if(1===r)return 1;if(-1===r&&Gr(t))return-1;if(kr(r))return r===Tr?Hn(-0,-t):t<0?0:Ir}if(r<0&&!1===Nr(t))return(r-r)/(r-r);if(i=$r(r),n=o&_t|0,e=a&_t|0,c=a>>>Nn|0,u=(u=o>>>Nn|0)&&Gr(t)?-1:1,e>Un){if(e>Fn)return function(r,t){return(Ut(r)&_t)<=Lt?t<0?$t*$t:Ct*Ct:t>0?$t*$t:Ct*Ct}(r,t);if(n<xn)return 1===c?u*Pn*Pn:u*Gn*Gn;if(n>Tn)return 0===c?u*Pn*Pn:u*Gn*Gn;p=function(r,t){var n,e,i,o,a,u,c;return o=(i=t-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),n=(u=i*un-o*on)-((e=ht(e=(a=an*i)+u,0))-a),r[0]=e,r[1]=n,r}(Cn,i)}else p=function(r,t,n){var e,i,o,a,u,c,f,l,s,p,y,v,g,d,b,w,h,m,j,A,_;return m=0,n<Xt&&(m-=53,n=Ut(t*=Jt)),m+=(n>>Dt)-Rt|0,n=(j=n&Zt|0)|Yt|0,j<=235662?A=0:j<767610?A=1:(A=0,m+=1,n-=Xt),a=ht(i=(w=(t=Mt(t,n))-(f=tn[A]))*(h=1/(t+f)),0),e=(n>>1|qt)+zt,c=Mt(0,e+=A<<18),b=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=ht(c=3+(o=a*a)+(b+=(u=h*(w-a*c-a*(t-(c-f))))*(a+i)),0),s=ht(s=(w=a*c)+(h=u*c+(b-(c-3-o))*i),0),p=Qt*s,g=(y=rn*s+(h-(s-w))*Kt+en[A])-((v=ht(v=p+y+(l=nn[A])+(d=m),0))-d-l-p),r[0]=v,r[1]=g,r}(Cn,i,n);if(y=(s=(t-(f=ht(t,0)))*p[0]+t*p[1])+(l=f*p[0]),gt.assign(y,$n,1,0),v=mt($n[0]),g=mt($n[1]),v>=In){if(0!=(v-In|g))return u*Pn*Pn;if(s+Ln>y-l)return u*Pn*Pn}else if((v&_t)>=kn){if(0!=(v-Vn|g))return u*Gn*Gn;if(s<=y-l)return u*Gn*Gn}return y=function(r,t,n){var e,i,o,a,u,c,f,l,s,p;return s=((l=r&_t|0)>>En)-Rt|0,f=0,l>_n&&(i=Mt(0,((f=r+(An>>s+1)>>>0)&~(jn>>(s=((f&_t)>>En)-Rt|0)))>>>0),f=(f&jn|An)>>En-s>>>0,r<0&&(f=-f),t-=i),r=mt(r=Ut(c=1-((c=(o=(i=ht(i=n+t,0))*On)+(a=(n-(i-t))*mn+i*Sn))*(e=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<En>>>0)>>En<=0?hn(c,f):Mt(c,r)}(v,l,s),u*y}var Wn=Math.ceil;var Bn=1048575,Mn=.3333333333333333;var Rn=0x40000000000000,Zn=.4342944818781689,Xn=25082946711645275e-27,Yn=.30102999566361177,qn=3694239077158931e-28,zn=1048575,Dn=2146435072,Jn=1048576,Kn=1072693248;function Qn(r){var t,n,e,i,o,a,u;return Fr(r)||r<0?NaN:0===r?Tr:(o=0,(n=Ut(r))<Jn&&(o-=54,n=Ut(r*=Rn)),n>=Dn?r+r:(o+=(n>>20)-Rt|0,a=o+=(i=(n&=zn)+614244&1048576|0)>>20|0,e=function(r){var t,n,e,i,o,a,u,c,f,l,s;return i=Ut(r),o=r-1,(Bn&2+i)<3?0===o?0:o*o*(Mn*o-.5):(l=(i&=Bn)-398458|0,s=440401-i|0,n=(f=(u=(a=o/(2+o))*a)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(f),e=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(f),c=e+n,(l|=s)>0?a*((t=.5*o*o)+c)-t:a*(c-o))}(r=Mt(r,n|i^Kn)),t=ht(r-=1,0),u=a*qn+(r+e)*Xn,(u+=(r-t+e)*Zn+t*Zn)+a*Yn))}var re=308,te=-324;function ne(r){var t,n;return Fr(r)||kr(r)||0===r?r:(r<0?(r=-r,t=-1):t=1,n=Qn(r),(n=-1===t?Vr(n):Wn(n))<=te?0*t:n>re?Ir:t*Hn(10,n))}function ee(r){return Ur(r,ne)}export{ee as default};
//# sourceMappingURL=mod.js.map
