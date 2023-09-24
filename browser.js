// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function o(r,n,t){var o=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+e(i):e(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(r){var n,e,a;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,a=parseInt(e,10),!isFinite(a)){if(!t(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===r.specifier||10!==n)&&(a=4294967295+a+1),a<0?(e=(-a).toString(n),r.precision&&(e=o(e,r.precision,r.padRight)),e="-"+e):(e=a.toString(n),a||r.precision?r.precision&&(e=o(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===u.call(r.specifier)?u.call(e):i.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var n,e,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);o=r.arg}switch(r.specifier){case"e":case"E":e=o.toExponential(r.precision);break;case"f":case"F":e=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((n=r.precision)>0&&(n-=1),e=o.toExponential(n)):e=o.toPrecision(r.precision),r.alternate||(e=p.call(e,h,"$1e"),e=p.call(e,w,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,y,"e+0$1"),e=p.call(e,b,"e-0$1"),r.alternate&&(e=p.call(e,v,"$1."),e=p.call(e,g,"$1.e")),o>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function j(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function E(r,n,t){var e=n-r.length;return e<0?r:r=t?r+j(e):j(e)+r}var A=String.fromCharCode,_=isNaN,O=Array.isArray;function T(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function S(r){var n,t,e,i,u,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=T(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,_(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!_(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(u)?String(e.arg):A(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=o(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=E(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function B(r){var n,t,e,o;for(t=[],o=0,e=x.exec(r);e;)(n=r.slice(o,x.lastIndex-e[0].length)).length&&t.push(n),t.push(U(e)),o=x.lastIndex,e=x.exec(r);return(n=r.slice(o)).length&&t.push(n),t}function F(r){return"string"==typeof r}function I(r){var n,t,e;if(!F(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=B(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return S.apply(null,t)}var V,k=Object.prototype,N=k.toString,P=k.__defineGetter__,L=k.__defineSetter__,C=k.__lookupGetter__,M=k.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(C.call(r,n)||M.call(r,n)?(e=r.__proto__,r.__proto__=k,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,n,t.get),u&&L&&L.call(r,n,t.set),r};var G=V;function R(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var $=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function q(r,n){return null!=r&&Y.call(r,n)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"",J=X()?function(r){var n,t,e;if(null==r)return Z.call(r);t=r[D],n=q(r,D);try{r[D]=void 0}catch(n){return Z.call(r)}return e=Z.call(r),n?r[D]=t:delete r[D],e}:function(r){return Z.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=X();function nr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return H(r)||nr(r)}function er(){return new Function("return this;")()}R(tr,"isPrimitive",H),R(tr,"isObject",nr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ur="object"==typeof globalThis?globalThis:null,ar=function(r){if(arguments.length){if(!H(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return er()}if(ur)return ur;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ar.document&&ar.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr,pr=/^\s*function\s*([^(]*)/i;R(lr,"REGEXP",pr),sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var yr=sr;function br(r){return null!==r&&"object"==typeof r}var vr=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var t,e;if(!yr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(br);function gr(r){var n,t,e,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=pr.exec(e.toString()))return n[1]}return br(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}R(br,"isObjectLikeArray",vr);var dr="function"==typeof $||"object"==typeof fr||"function"==typeof cr?function(r){return gr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"==(n=typeof r)?gr(r).toLowerCase():n};function wr(r){return"function"===dr(r)}var hr=/./;function mr(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function jr(r){return"boolean"==typeof r}var Er=Boolean.prototype.toString,Ar=X();function _r(r){return"object"==typeof r&&(r instanceof K||(Ar?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Or(r){return jr(r)||_r(r)}function Tr(){return new Function("return this;")()}mr(Or,"isPrimitive",jr),mr(Or,"isObject",_r);var Sr="object"==typeof self?self:null,xr="object"==typeof window?window:null,Ur="object"==typeof globalThis?globalThis:null,Br=function(r){if(arguments.length){if(!jr(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Tr()}if(Ur)return Ur;if(Sr)return Sr;if(xr)return xr;throw new Error("unexpected error. Unable to resolve global object.")}(),Fr=Br.document&&Br.document.childNodes,Ir=Int8Array;function Vr(){return/^\s*function\s*([^(]*)/i}var kr=/^\s*function\s*([^(]*)/i;function Nr(r){return null!==r&&"object"==typeof r}mr(Vr,"REGEXP",kr);var Pr=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var t,e;if(!yr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(Nr);function Lr(r){var n,t,e,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=kr.exec(e.toString()))return n[1]}return Nr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}mr(Nr,"isObjectLikeArray",Pr);var Cr="function"==typeof hr||"object"==typeof Ir||"function"==typeof Fr?function(r){return Lr(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"==(n=typeof r)?Lr(r).toLowerCase():n};function Mr(r){var n=typeof r;return null!==r&&("object"===n||"function"===n)&&function(r){return"function"===Cr(r)}(r.next)}function Gr(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Rr(r){return"number"==typeof r}var $r=Number,Hr=$r.prototype.toString,Wr=X();function Xr(r){return"object"==typeof r&&(r instanceof $r||(Wr?function(r){try{return Hr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Zr(r){return Rr(r)||Xr(r)}Gr(Zr,"isPrimitive",Rr),Gr(Zr,"isObject",Xr);var Yr="function"==typeof z&&"symbol"==typeof z("foo")&&q(z,"iterator")&&"symbol"==typeof z.iterator?Symbol.iterator:null,qr=/./;function zr(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Dr(r){return"boolean"==typeof r}var Jr=Boolean.prototype.toString,Kr=X();function Qr(r){return"object"==typeof r&&(r instanceof K||(Kr?function(r){try{return Jr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function rn(r){return Dr(r)||Qr(r)}function nn(){return new Function("return this;")()}zr(rn,"isPrimitive",Dr),zr(rn,"isObject",Qr);var tn="object"==typeof self?self:null,en="object"==typeof window?window:null,on="object"==typeof globalThis?globalThis:null,un=function(r){if(arguments.length){if(!Dr(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nn()}if(on)return on;if(tn)return tn;if(en)return en;throw new Error("unexpected error. Unable to resolve global object.")}(),an=un.document&&un.document.childNodes,cn=Int8Array;function fn(){return/^\s*function\s*([^(]*)/i}var ln=/^\s*function\s*([^(]*)/i;function sn(r){return null!==r&&"object"==typeof r}zr(fn,"REGEXP",ln);var pn=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var t,e;if(!yr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(sn);function yn(r){var n,t,e,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=ln.exec(e.toString()))return n[1]}return sn(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}zr(sn,"isObjectLikeArray",pn);var bn="function"==typeof qr||"object"==typeof cn||"function"==typeof an?function(r){return yn(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"==(n=typeof r)?yn(r).toLowerCase():n};function vn(r){return"function"===bn(r)}var gn=Object,dn=/./;function wn(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function hn(r){return"boolean"==typeof r}var mn=Boolean.prototype.toString,jn=X();function En(r){return"object"==typeof r&&(r instanceof K||(jn?function(r){try{return mn.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function An(r){return hn(r)||En(r)}function _n(){return new Function("return this;")()}wn(An,"isPrimitive",hn),wn(An,"isObject",En);var On="object"==typeof self?self:null,Tn="object"==typeof window?window:null,Sn="object"==typeof globalThis?globalThis:null,xn=function(r){if(arguments.length){if(!hn(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return _n()}if(Sn)return Sn;if(On)return On;if(Tn)return Tn;throw new Error("unexpected error. Unable to resolve global object.")}(),Un=xn.document&&xn.document.childNodes,Bn=Int8Array;function Fn(){return/^\s*function\s*([^(]*)/i}var In=/^\s*function\s*([^(]*)/i;function Vn(r){return null!==r&&"object"==typeof r}wn(Fn,"REGEXP",In);var kn=function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(n){var t,e;if(!yr(n))return!1;if(0===(t=n.length))return!1;for(e=0;e<t;e++)if(!1===r(n[e]))return!1;return!0}}(Vn);function Nn(r){var n,t,e,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(n=In.exec(e.toString()))return n[1]}return Vn(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}wn(Vn,"isObjectLikeArray",kn);var Pn,Ln,Cn="function"==typeof dn||"object"==typeof Bn||"function"==typeof Un?function(r){return Nn(r).toLowerCase()}:function(r){var n;return null===r?"null":"object"==(n=typeof r)?Nn(r).toLowerCase():n},Mn=Object.getPrototypeOf;Ln=Object.getPrototypeOf,Pn="function"===Cn(Ln)?Mn:function(r){var n=function(r){return r.__proto__}(r);return n||null===n?n:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Gn=Pn,Rn=Object.prototype;function $n(r){var n;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(n=function(r){return null==r?null:(r=gn(r),Gn(r))}(r),!n||!q(r,"constructor")&&q(n,"constructor")&&vn(n.constructor)&&"[object Function]"===J(n.constructor)&&q(n,"isPrototypeOf")&&vn(n.isPrototypeOf)&&(n===Rn||function(r){var n;for(n in r)if(!q(r,n))return!1;return!0}(r)))}function Hn(r,n){return $n(n)?(q(n,"invalid")&&(r.invalid=n.invalid),null):new TypeError(I("invalid argument. Options argument must be an object. Value: `%s`.",n))}function Wn(r,n,t){var e,o,i,u;if(!Mr(r))throw new TypeError(I("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(n))throw new TypeError(I("invalid argument. Second argument must be a function. Value: `%s`.",n));if(e={invalid:NaN},arguments.length>2&&(i=Hn(e,t)))throw i;return R(o={},"next",a),R(o,"return",c),Yr&&wr(r[Yr])&&R(o,Yr,f),o;function a(){var t;return u?{done:!0}:(t=r.next()).done?(u=!0,t):{value:Rr(t.value)?n(t.value):e.invalid,done:!1}}function c(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Wn(r[Yr](),n,e)}}function Xn(r){return r!=r}var Zn=Number.POSITIVE_INFINITY,Yn=$r.NEGATIVE_INFINITY;function qn(r){return r===Zn||r===Yn}var zn=Math.floor;function Dn(r){return function(r){return zn(r)===r}(r/2)}function Jn(r){return Dn(r>0?r-1:r+1)}var Kn=Math.floor,Qn=Math.sqrt;function rt(r){return Math.abs(r)}var nt,tt="function"==typeof Uint32Array,et="function"==typeof Uint32Array?Uint32Array:null,ot="function"==typeof Uint32Array?Uint32Array:void 0;nt=function(){var r,n;if("function"!=typeof et)return!1;try{r=function(r){return tt&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(n=new et(n=[1,3.14,-3.14,4294967296,4294967297]))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ot:function(){throw new Error("not implemented")};var it,ut=nt,at="function"==typeof Float64Array,ct="function"==typeof Float64Array?Float64Array:null,ft="function"==typeof Float64Array?Float64Array:void 0;it=function(){var r,n;if("function"!=typeof ct)return!1;try{r=function(r){return at&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(n=new ct([1,3.14,-3.14,NaN]))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?ft:function(){throw new Error("not implemented")};var lt,st=it,pt="function"==typeof Uint8Array,yt="function"==typeof Uint8Array?Uint8Array:null,bt="function"==typeof Uint8Array?Uint8Array:void 0;lt=function(){var r,n;if("function"!=typeof yt)return!1;try{r=function(r){return pt&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(n=new yt(n=[1,3.14,-3.14,256,257]))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?bt:function(){throw new Error("not implemented")};var vt,gt=lt,dt="function"==typeof Uint16Array,wt="function"==typeof Uint16Array?Uint16Array:null,ht="function"==typeof Uint16Array?Uint16Array:void 0;vt=function(){var r,n;if("function"!=typeof wt)return!1;try{r=function(r){return dt&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(n=new wt(n=[1,3.14,-3.14,65536,65537]))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ht:function(){throw new Error("not implemented")};var mt,jt={uint16:vt,uint8:gt};(mt=new jt.uint16(1))[0]=4660;var Et,At,_t=52===new jt.uint8(mt.buffer)[0];!0===_t?(Et=1,At=0):(Et=0,At=1);var Ot={HIGH:Et,LOW:At},Tt=new st(1),St=new ut(Tt.buffer),xt=Ot.HIGH,Ut=Ot.LOW;function Bt(r,n,t,e){return Tt[0]=r,n[e]=St[xt],n[e+t]=St[Ut],n}function Ft(r){return Bt(r,[0,0],1,0)}!function(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}(Ft,"assign",Bt);var It=!0===_t?0:1,Vt=new st(1),kt=new ut(Vt.buffer);function Nt(r,n){return Vt[0]=r,kt[It]=n>>>0,Vt[0]}function Pt(r){return 0|r}var Lt,Ct,Mt=2147483647,Gt=!0===_t?1:0,Rt=new st(1),$t=new ut(Rt.buffer);function Ht(r){return Rt[0]=r,$t[Gt]}!0===_t?(Lt=1,Ct=0):(Lt=0,Ct=1);var Wt={HIGH:Lt,LOW:Ct},Xt=new st(1),Zt=new ut(Xt.buffer),Yt=Wt.HIGH,qt=Wt.LOW;function zt(r,n){return Zt[Yt]=r,Zt[qt]=n,Xt[0]}var Dt=[0,0];function Jt(r,n){var t,e;return Ft.assign(r,Dt,1,0),t=Dt[0],t&=Mt,e=Ht(n),zt(t|=e&=2147483648,Dt[1])}var Kt=!0===_t?1:0,Qt=new st(1),re=new ut(Qt.buffer);function ne(r,n){return Qt[0]=r,re[Kt]=n>>>0,Qt[0]}var te=1023,ee=1048576,oe=[1,1.5],ie=[0,.5849624872207642],ue=[0,1.350039202129749e-8];function ae(r,n,t,e){return Xn(r)||qn(r)?(n[e]=r,n[e+t]=0,n):0!==r&&rt(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}!function(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}((function(r){return ae(r,[0,0],1,0)}),"assign",ae);var ce=[0,0],fe=[0,0];function le(r,n){var t,e;return 0===n||0===r||Xn(r)||qn(r)?r:(ae(r,ce,1,0),n+=ce[1],n+=function(r){var n=Ht(r);return(n=(2146435072&n)>>>20)-te|0}(r=ce[0]),n<-1074?Jt(0,r):n>1023?r<0?Yn:Zn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Ft.assign(r,fe,1,0),t=fe[0],t&=2148532223,e*zt(t|=n+te<<20,fe[1])))}var se=1048575,pe=1048576,ye=1083179008,be=1e300,ve=1e-300,ge=[0,0],de=[0,0];function we(r,n){var t,e,o,i,u,a,c,f,l,s,p,y,b,v;if(Xn(r)||Xn(n))return NaN;if(Ft.assign(n,ge,1,0),u=ge[0],0===ge[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Qn(r);if(-.5===n)return 1/Qn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(qn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:rt(r)<1==(n===Zn)?0:Zn}(r,n)}if(Ft.assign(r,ge,1,0),i=ge[0],0===ge[1]){if(0===i)return function(r,n){return n===Yn?Zn:n===Zn?0:n>0?Jn(n)?r:0:Jn(n)?Jt(Zn,r):Zn}(r,n);if(1===r)return 1;if(-1===r&&Jn(n))return-1;if(qn(r))return r===Yn?we(-0,-n):n<0?0:Zn}if(r<0&&!1===function(r){return Kn(r)===r}(n))return(r-r)/(r-r);if(o=rt(r),t=i&Mt|0,e=u&Mt|0,c=u>>>31|0,a=(a=i>>>31|0)&&Jn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(Ht(r)&Mt)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===c?a*be*be:a*ve*ve;if(t>1072693248)return 0===c?a*be*be:a*ve*ve;p=function(r,n){var t,e,o,i,u,a;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(a=o)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=Nt(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(de,o)}else p=function(r,n,t){var e,o,i,u,a,c,f,l,s,p,y,b,v,g,d,w,h,m,j,E,A;return m=0,t<ee&&(m-=53,t=Ht(n*=9007199254740992)),m+=(t>>20)-te|0,t=1072693248|(j=1048575&t|0),j<=235662?E=0:j<767610?E=1:(E=0,m+=1,t-=ee),u=Nt(o=(w=(n=ne(n,t))-(f=oe[E]))*(h=1/(n+f)),0),e=524288+(t>>1|536870912),c=ne(0,e+=E<<18),d=(i=o*o)*i*(0===(A=i)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),c=Nt(c=3+(i=u*u)+(d+=(a=h*(w-u*c-u*(n-(c-f))))*(u+o)),0),v=(y=-7.028461650952758e-9*(s=Nt(s=(w=u*c)+(h=a*c+(d-(c-3-i))*o),0))+.9617966939259756*(h-(s-w))+ue[E])-((b=Nt(b=(p=.9617967009544373*s)+y+(l=ie[E])+(g=m),0))-g-l-p),r[0]=b,r[1]=v,r}(de,o,t);if(y=(s=(n-(f=Nt(n,0)))*p[0]+n*p[1])+(l=f*p[0]),Ft.assign(y,ge,1,0),b=Pt(ge[0]),v=Pt(ge[1]),b>=ye){if(0!=(b-ye|v))return a*be*be;if(s+8008566259537294e-32>y-l)return a*be*be}else if((b&Mt)>=1083231232){if(0!=(b-3230714880|v))return a*ve*ve;if(s<=y-l)return a*ve*ve}return y=function(r,n,t){var e,o,i,u,a,c,f,l,s,p;return s=((l=r&Mt|0)>>20)-te|0,f=0,l>1071644672&&(o=ne(0,((f=r+(pe>>s+1)>>>0)&~(se>>(s=((f&Mt)>>20)-te|0)))>>>0),f=(f&se|pe)>>20-s>>>0,r<0&&(f=-f),n-=o),r=Pt(r=Ht(c=1-((c=(i=.6931471824645996*(o=Nt(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=c-(o=c*c)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((a=u-(c-i))+c*a)-c))),(r+=f<<20>>>0)>>20<=0?le(c,f):ne(c,r)}(b,l,s),a*y}var he=Math.floor,me=Math.ceil,je=1048575,Ee=.4342944818781689;function Ae(r){var n,t,e,o,i,u,a;return Xn(r)||r<0?NaN:0===r?Yn:(i=0,(t=Ht(r))<1048576&&(i-=54,t=Ht(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-te|0,u=i+=(o=614244+(t&=1048575)&1048576|0)>>20|0,e=function(r){var n,t,e,o,i,u,a,c,f,l,s;return o=Ht(r),i=r-1,(je&2+o)<3?0===i?0:i*i*(.3333333333333333*i-.5):(l=(o&=je)-398458|0,s=440401-o|0,t=(f=(a=(u=i/(2+i))*u)*a)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(f),e=a*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(f),c=e+t,(l|=s)>0?u*((n=.5*i*i)+c)-n:u*(c-i))}(r=ne(r,t|1072693248^o)),a=3694239077158931e-28*u+25082946711645275e-27*((r-=1)+e),(a+=(r-(n=Nt(r,0))+e)*Ee+n*Ee)+.30102999566361177*u))}function _e(r){var n,t;return Xn(r)||qn(r)||0===r?r:(r<0?(r=-r,n=-1):n=1,t=Ae(r),(t=-1===n?he(t):me(t))<=-324?0*n:t>308?Zn:n*we(10,t))}return function(r){return Wn(r,_e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).iterCeil10=n();
//# sourceMappingURL=browser.js.map
