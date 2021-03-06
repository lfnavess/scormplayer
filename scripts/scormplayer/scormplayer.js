//Polyfills
if (!window.JSON) {
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON
    //https://github.com/douglascrockford/JSON-js/blob/master/json2.js
    //IE 11 in compatibility mode
    window.JSON = {
        parse: function(sJSON) { return eval("(" + sJSON + ")"); },
        stringify: function(vContent) {
            if (vContent instanceof Object) {
                var sOutput = "";
                if (vContent.constructor === Array) {
                    for (var nId = 0; nId < vContent.length; sOutput += this.stringify(vContent[nId]) + ",", nId++);
                    return "[" + sOutput.substr(0, sOutput.length - 1) + "]";
                }
                if (vContent.toString !== Object.prototype.toString) { return "\"" + vContent.toString().replace(/"/g, "\\$&") + "\""; }
                for (var sProp in vContent) { sOutput += "\"" + sProp.replace(/"/g, "\\$&") + "\":" + this.stringify(vContent[sProp]) + ","; }
                return "{" + sOutput.substr(0, sOutput.length - 1) + "}";
            }
            return typeof vContent === "string" ? "\"" + vContent.replace(/"/g, "\\$&") + "\"" : String(vContent);
        }
    };
}
if (!window.Promise){
    //IE11
    !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){I=t}function r(t){J=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof H?function(){H(a)}:c()}function s(){var t=0,e=new V(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<G;t+=2){var e=$[t],n=$[t+1];e(n),$[t]=void 0,$[t+1]=void 0}G=0}function f(){try{var t=require,e=t("vertx");return H=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=arguments,r=this,o=new this.constructor(p);void 0===o[et]&&k(o);var i=r._state;return i?!function(){var t=n[i-1];J(function(){return x(i,o,t,r._result)})}():E(r,o,t,e),o}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return it.error=e,it}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){J(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===rt?S(t,e._result):e._state===ot?j(t,e._result):E(e,void 0,function(e){return g(t,e)},function(e){return j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?b(t,n):r===it?(j(t,it.error),it.error=null):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,v()):t(n)?w(e,n,_(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===nt&&(t._result=e,t._state=rt,0!==t._subscribers.length&&J(T,t))}function j(t,e){t._state===nt&&(t._state=ot,t._result=e,J(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+rt]=n,o[i+ot]=r,0===i&&t._state&&J(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function P(t,e){try{return t(e)}catch(n){return st.error=n,st}}function x(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=P(r,o),s===st?(a=!0,u=s.error,s.error=null):c=!0,n===s)return void j(n,d())}else s=o,c=!0;n._state!==nt||(i&&c?g(n,s):a?j(n,u):t===rt?S(n,s):t===ot&&j(n,s))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return ut++}function k(t){t[et]=ut++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[et]||k(this.promise),B(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,q())}function q(){return new Error("Array Methods must be provided an Array")}function F(t){return new Y(this,t).promise}function D(t){var e=this;return new e(B(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function K(t){var e=this,n=new e(p);return j(n,t),n}function L(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function U(t){this[et]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&L(),this instanceof U?C(this,t):N())}function W(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=U}var z=void 0;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B=z,G=0,H=void 0,I=void 0,J=function(t,e){$[G]=t,$[G+1]=e,G+=2,2===G&&(I?I(a):tt())},Q="undefined"!=typeof window?window:void 0,R=Q||{},V=R.MutationObserver||R.WebKitMutationObserver,X="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),Z="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,$=new Array(1e3),tt=void 0;tt=X?o():V?s():Z?u():void 0===Q&&"function"==typeof require?f():c();var et=Math.random().toString(36).substring(16),nt=void 0,rt=1,ot=2,it=new M,st=new M,ut=0;return Y.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===nt&&n<t;n++)this._eachEntry(e[n],n)},Y.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=_(t);if(o===l&&t._state!==nt)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===U){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},Y.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===nt&&(this._remaining--,t===ot?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},Y.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){return n._settledAt(rt,e,t)},function(t){return n._settledAt(ot,e,t)})},U.all=F,U.race=D,U.resolve=h,U.reject=K,U._setScheduler=n,U._setAsap=r,U._asap=J,U.prototype={constructor:U,then:l,"catch":function(t){return this.then(null,t)}},U.polyfill=W,U.Promise=U,U.polyfill(),U});
}
if (!window.fetch){
    //! http://github.github.io/fetch/
    //! 16/06/2017
    //IE11
    !function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return m.iterable&&(e[Symbol.iterator]=function(){return e}),e}function n(t){this.map={},t instanceof n?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){return t.bodyUsed?Promise.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function s(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function a(t){var e=new FileReader,r=s(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=s(e);return e.readAsText(t),r}function h(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(m.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(m.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(m.arrayBuffer&&m.blob&&v(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!B(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(h(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function y(t){var e=t.toUpperCase();return _.indexOf(e)>-1?e:t}function l(t,e){e=e||{};var r=e.body;if(t instanceof l){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new n(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",(e.headers||!this.headers)&&(this.headers=new n(e.headers)),this.method=y(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function p(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function c(t){var e=new n,r=t.replace(/\r?\n[\t ]+/g," ");return r.split(/\r?\n/).forEach(function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}}),e}function b(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new n(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var m={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(m.arrayBuffer)var w=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],v=function(t){return t&&DataView.prototype.isPrototypeOf(t)},B=ArrayBuffer.isView||function(t){return t&&w.indexOf(Object.prototype.toString.call(t))>-1};n.prototype.append=function(t,o){t=e(t),o=r(o);var n=this.map[t];this.map[t]=n?n+","+o:o},n.prototype["delete"]=function(t){delete this.map[e(t)]},n.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},n.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},n.prototype.set=function(t,o){this.map[e(t)]=r(o)},n.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},n.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),o(t)},n.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),o(t)},n.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),o(t)},m.iterable&&(n.prototype[Symbol.iterator]=n.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this,{body:this._bodyInit})},d.call(l.prototype),d.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var A=[301,302,303,307,308];b.redirect=function(t,e){if(-1===A.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.Headers=n,t.Request=l,t.Response=b,t.fetch=function(t,e){return new Promise(function(r,o){var n=new l(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:c(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;r(new b(e,t))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.open(n.method,n.url,!0),"include"===n.credentials?i.withCredentials=!0:"omit"===n.credentials&&(i.withCredentials=!1),"responseType"in i&&m.blob&&(i.responseType="blob"),n.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send("undefined"==typeof n._bodyInit?null:n._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this);
}
if (!Array.prototype.indexOf) {
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/indexOf
    //work in IE 11 compatibility view used by moment.js
    Array.prototype.indexOf = function(searchElement /*, fromIndex */) {
        "use strict";
        if (this == null) { throw new TypeError(); }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) { return -1; }
        var n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) { n = 0; } // para verificar si es NaN
            else if (n != 0 && n != Infinity && n != -Infinity) { n = (n > 0 || -1) * Math.floor(Math.abs(n)); }
        }
        if (n >= len) { return -1; }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) { if (k in t && t[k] === searchElement) { return k; } }
        return -1;
    }
}
if (!String.prototype.startsWith) {
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/startsWith
    String.prototype.startsWith = function(stringBuscada, posicion) {
        posicion = posicion || 0;
        return this.indexOf(stringBuscada, posicion) === posicion;
    };
}
if (!String.prototype.endsWith) {
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/endsWith
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}


//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a, b) { "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b() }(this, function() {
    "use strict"; function a() { return sd.apply(null, arguments) } function b(a) { sd = a } function c(a) { return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a) } function d(a) { return null != a && "[object Object]" === Object.prototype.toString.call(a) } function e(a) { var b; for (b in a) return !1; return !0 } function f(a) { return void 0 === a } function g(a) { return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a) } function h(a) { return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a) } function i(a, b) { var c, d = []; for (c = 0; c < a.length; ++c)d.push(b(a[c], c)); return d } function j(a, b) { return Object.prototype.hasOwnProperty.call(a, b) } function k(a, b) { for (var c in b) j(b, c) && (a[c] = b[c]); return j(b, "toString") && (a.toString = b.toString), j(b, "valueOf") && (a.valueOf = b.valueOf), a } function l(a, b, c, d) { return sb(a, b, c, d, !0).utc() } function m() { return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 } } function n(a) { return null == a._pf && (a._pf = m()), a._pf } function o(a) { if (null == a._isValid) { var b = n(a), c = ud.call(b.parsedDateParts, function(a) { return null != a }), d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c); if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != Object.isFrozen && Object.isFrozen(a)) return d; a._isValid = d } return a._isValid } function p(a) { var b = l(NaN); return null != a ? k(n(b), a) : n(b).userInvalidated = !0, b } function q(a, b) { var c, d, e; if (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), f(b._i) || (a._i = b._i), f(b._f) || (a._f = b._f), f(b._l) || (a._l = b._l), f(b._strict) || (a._strict = b._strict), f(b._tzm) || (a._tzm = b._tzm), f(b._isUTC) || (a._isUTC = b._isUTC), f(b._offset) || (a._offset = b._offset), f(b._pf) || (a._pf = n(b)), f(b._locale) || (a._locale = b._locale), vd.length > 0) for (c = 0; c < vd.length; c++)d = vd[c], e = b[d], f(e) || (a[d] = e); return a } function r(b) { q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), wd === !1 && (wd = !0, a.updateOffset(this), wd = !1) } function s(a) { return a instanceof r || null != a && null != a._isAMomentObject } function t(a) { return a < 0 ? Math.ceil(a) || 0 : Math.floor(a) } function u(a) { var b = +a, c = 0; return 0 !== b && isFinite(b) && (c = t(b)), c } function v(a, b, c) { var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0; for (d = 0; d < e; d++)(c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++; return g + f } function w(b) { a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b) } function x(b, c) { var d = !0; return k(function() { if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) { for (var e, f = [], g = 0; g < arguments.length; g++) { if (e = "", "object" == typeof arguments[g]) { e += "\n[" + g + "] "; for (var h in arguments[0]) e += h + ": " + arguments[0][h] + ", "; e = e.slice(0, -2) } else e = arguments[g]; f.push(e) } w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + (new Error).stack), d = !1 } return c.apply(this, arguments) }, c) } function y(b, c) { null != a.deprecationHandler && a.deprecationHandler(b, c), xd[b] || (w(c), xd[b] = !0) } function z(a) { return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a) } function A(a) { var b, c; for (c in a) b = a[c], z(b) ? this[c] = b : this["_" + c] = b; this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source) } function B(a, b) { var c, e = k({}, a); for (c in b) j(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, k(e[c], a[c]), k(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]); for (c in a) j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c])); return e } function C(a) { null != a && this.set(a) } function D(a, b, c) { var d = this._calendar[a] || this._calendar.sameElse; return z(d) ? d.call(b, c) : d } function E(a) { var b = this._longDateFormat[a], c = this._longDateFormat[a.toUpperCase()]; return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) { return a.slice(1) }), this._longDateFormat[a]) } function F() { return this._invalidDate } function G(a) { return this._ordinal.replace("%d", a) } function H(a, b, c, d) { var e = this._relativeTime[c]; return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a) } function I(a, b) { var c = this._relativeTime[a > 0 ? "future" : "past"]; return z(c) ? c(b) : c.replace(/%s/i, b) } function J(a, b) { var c = a.toLowerCase(); Hd[c] = Hd[c + "s"] = Hd[b] = a } function K(a) { return "string" == typeof a ? Hd[a] || Hd[a.toLowerCase()] : void 0 } function L(a) { var b, c, d = {}; for (c in a) j(a, c) && (b = K(c), b && (d[b] = a[c])); return d } function M(a, b) { Id[a] = b } function N(a) { var b = []; for (var c in a) b.push({ unit: c, priority: Id[c] }); return b.sort(function(a, b) { return a.priority - b.priority }), b } function O(b, c) { return function(d) { return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b) } } function P(a, b) { return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN } function Q(a, b, c) { a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c) } function R(a) { return a = K(a), z(this[a]) ? this[a]() : this } function S(a, b) { if ("object" == typeof a) { a = L(a); for (var c = N(a), d = 0; d < c.length; d++)this[c[d].unit](a[c[d].unit]) } else if (a = K(a), z(this[a])) return this[a](b); return this } function T(a, b, c) { var d = "" + Math.abs(a), e = b - d.length, f = a >= 0; return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d } function U(a, b, c, d) { var e = d; "string" == typeof d && (e = function() { return this[d]() }), a && (Md[a] = e), b && (Md[b[0]] = function() { return T(e.apply(this, arguments), b[1], b[2]) }), c && (Md[c] = function() { return this.localeData().ordinal(e.apply(this, arguments), a) }) } function V(a) { return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "") } function W(a) { var b, c, d = a.match(Jd); for (b = 0, c = d.length; b < c; b++)Md[d[b]] ? d[b] = Md[d[b]] : d[b] = V(d[b]); return function(b) { var e, f = ""; for (e = 0; e < c; e++)f += z(d[e]) ? d[e].call(b, a) : d[e]; return f } } function X(a, b) { return a.isValid() ? (b = Y(b, a.localeData()), Ld[b] = Ld[b] || W(b), Ld[b](a)) : a.localeData().invalidDate() } function Y(a, b) { function c(a) { return b.longDateFormat(a) || a } var d = 5; for (Kd.lastIndex = 0; d >= 0 && Kd.test(a);)a = a.replace(Kd, c), Kd.lastIndex = 0, d -= 1; return a } function Z(a, b, c) { ce[a] = z(b) ? b : function(a, d) { return a && c ? c : b } } function $(a, b) { return j(ce, a) ? ce[a](b._strict, b._locale) : new RegExp(_(a)) } function _(a) { return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) { return b || c || d || e })) } function aa(a) { return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } function ba(a, b) { var c, d = b; for ("string" == typeof a && (a = [a]), g(b) && (d = function(a, c) { c[b] = u(a) }), c = 0; c < a.length; c++)de[a[c]] = d } function ca(a, b) { ba(a, function(a, c, d, e) { d._w = d._w || {}, b(a, d._w, d, e) }) } function da(a, b, c) { null != b && j(de, a) && de[a](b, c._a, c, a) } function ea(a, b) { return new Date(Date.UTC(a, b + 1, 0)).getUTCDate() } function fa(a, b) { return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || oe).test(b) ? "format" : "standalone"][a.month()] : c(this._months) ? this._months : this._months.standalone } function ga(a, b) { return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[oe.test(b) ? "format" : "standalone"][a.month()] : c(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone } function ha(a, b, c) { var d, e, f, g = a.toLocaleLowerCase(); if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d)f = l([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase(); return c ? "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null)) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null)) } function ia(a, b, c) { var d, e, f; if (this._monthsParseExact) return ha.call(this, a, b, c); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) { if (e = l([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d; if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d; if (!c && this._monthsParse[d].test(a)) return d } } function ja(a, b) { var c; if (!a.isValid()) return a; if ("string" == typeof b) if (/^\d+$/.test(b)) b = u(b); else if (b = a.localeData().monthsParse(b), !g(b)) return a; return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a } function ka(b) { return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month") } function la() { return ea(this.year(), this.month()) } function ma(a) { return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = re), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex) } function na(a) { return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (j(this, "_monthsRegex") || (this._monthsRegex = se), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex) } function oa() { function a(a, b) { return b.length - a.length } var b, c, d = [], e = [], f = []; for (b = 0; b < 12; b++)c = l([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, "")); for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++)d[b] = aa(d[b]), e[b] = aa(e[b]); for (b = 0; b < 24; b++)f[b] = aa(f[b]); this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i") } function pa(a) { return qa(a) ? 366 : 365 } function qa(a) { return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0 } function ra() { return qa(this.year()) } function sa(a, b, c, d, e, f, g) { var h = new Date(a, b, c, d, e, f, g); return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h } function ta(a) { var b = new Date(Date.UTC.apply(null, arguments)); return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b } function ua(a, b, c) { var d = 7 + b - c, e = (7 + ta(a, 0, d).getUTCDay() - b) % 7; return -e + d - 1 } function va(a, b, c, d, e) { var f, g, h = (7 + c - d) % 7, i = ua(a, d, e), j = 1 + 7 * (b - 1) + h + i; return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, g = j), { year: f, dayOfYear: g } } function wa(a, b, c) { var d, e, f = ua(a.year(), b, c), g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1; return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), { week: d, year: e } } function xa(a, b, c) { var d = ua(a, b, c), e = ua(a + 1, b, c); return (pa(a) - d + e) / 7 } function ya(a) { return wa(a, this._week.dow, this._week.doy).week } function za() { return this._week.dow } function Aa() { return this._week.doy } function Ba(a) { var b = this.localeData().week(this); return null == a ? b : this.add(7 * (a - b), "d") } function Ca(a) { var b = wa(this, 1, 4).week; return null == a ? b : this.add(7 * (a - b), "d") } function Da(a, b) { return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10) } function Ea(a, b) { return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a } function Fa(a, b) { return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : c(this._weekdays) ? this._weekdays : this._weekdays.standalone } function Ga(a) { return a ? this._weekdaysShort[a.day()] : this._weekdaysShort } function Ha(a) { return a ? this._weekdaysMin[a.day()] : this._weekdaysMin } function Ia(a, b, c) { var d, e, f, g = a.toLocaleLowerCase(); if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d)f = l([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase(); return c ? "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null))) } function Ja(a, b, c) { var d, e, f; if (this._weekdaysParseExact) return Ia.call(this, a, b, c); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) { if (e = l([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d; if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d; if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d; if (!c && this._weekdaysParse[d].test(a)) return d } } function Ka(a) { if (!this.isValid()) return null != a ? this : NaN; var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b } function La(a) { if (!this.isValid()) return null != a ? this : NaN; var b = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == a ? b : this.add(a - b, "d") } function Ma(a) { if (!this.isValid()) return null != a ? this : NaN; if (null != a) { var b = Ea(a, this.localeData()); return this.day(this.day() % 7 ? b : b - 7) } return this.day() || 7 } function Na(a) { return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = ye), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex) } function Oa(a) { return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ze), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) } function Pa(a) { return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ae), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) } function Qa() { function a(a, b) { return b.length - a.length } var b, c, d, e, f, g = [], h = [], i = [], j = []; for (b = 0; b < 7; b++)c = l([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f); for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++)h[b] = aa(h[b]), i[b] = aa(i[b]), j[b] = aa(j[b]); this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i") } function Ra() { return this.hours() % 12 || 12 } function Sa() { return this.hours() || 24 } function Ta(a, b) { U(a, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), b) }) } function Ua(a, b) { return b._meridiemParse } function Va(a) { return "p" === (a + "").toLowerCase().charAt(0) } function Wa(a, b, c) { return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM" } function Xa(a) { return a ? a.toLowerCase().replace("_", "-") : a } function Ya(a) { for (var b, c, d, e, f = 0; f < a.length;) { for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) { if (d = Za(e.slice(0, b).join("-"))) return d; if (c && c.length >= b && v(e, c, !0) >= b - 1) break; b-- } f++ } return null } function Za(a) { var b = null; if (!Fe[a] && "undefined" != typeof module && module && module.exports) try { b = Be._abbr, require("./locale/" + a), $a(b) } catch (a) { } return Fe[a] } function $a(a, b) { var c; return a && (c = f(b) ? bb(a) : _a(a, b), c && (Be = c)), Be._abbr } function _a(a, b) { if (null !== b) { var c = Ee; if (b.abbr = a, null != Fe[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = Fe[a]._config; else if (null != b.parentLocale) { if (null == Fe[b.parentLocale]) return Ge[b.parentLocale] || (Ge[b.parentLocale] = []), Ge[b.parentLocale].push({ name: a, config: b }), null; c = Fe[b.parentLocale]._config } return Fe[a] = new C(B(c, b)), Ge[a] && Ge[a].forEach(function(a) { _a(a.name, a.config) }), $a(a), Fe[a] } return delete Fe[a], null } function ab(a, b) { if (null != b) { var c, d = Ee; null != Fe[a] && (d = Fe[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Fe[a], Fe[a] = c, $a(a) } else null != Fe[a] && (null != Fe[a].parentLocale ? Fe[a] = Fe[a].parentLocale : null != Fe[a] && delete Fe[a]); return Fe[a] } function bb(a) { var b; if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Be; if (!c(a)) { if (b = Za(a)) return b; a = [a] } return Ya(a) } function cb() { return Ad(Fe) } function db(a) { var b, c = a._a; return c && n(a).overflow === -2 && (b = c[fe] < 0 || c[fe] > 11 ? fe : c[ge] < 1 || c[ge] > ea(c[ee], c[fe]) ? ge : c[he] < 0 || c[he] > 24 || 24 === c[he] && (0 !== c[ie] || 0 !== c[je] || 0 !== c[ke]) ? he : c[ie] < 0 || c[ie] > 59 ? ie : c[je] < 0 || c[je] > 59 ? je : c[ke] < 0 || c[ke] > 999 ? ke : -1, n(a)._overflowDayOfYear && (b < ee || b > ge) && (b = ge), n(a)._overflowWeeks && b === -1 && (b = le), n(a)._overflowWeekday && b === -1 && (b = me), n(a).overflow = b), a } function eb(a) { var b, c, d, e, f, g, h = a._i, i = He.exec(h) || Ie.exec(h); if (i) { for (n(a).iso = !0, b = 0, c = Ke.length; b < c; b++)if (Ke[b][1].exec(i[1])) { e = Ke[b][0], d = Ke[b][2] !== !1; break } if (null == e) return void (a._isValid = !1); if (i[3]) { for (b = 0, c = Le.length; b < c; b++)if (Le[b][1].exec(i[3])) { f = (i[2] || " ") + Le[b][0]; break } if (null == f) return void (a._isValid = !1) } if (!d && null != f) return void (a._isValid = !1); if (i[4]) { if (!Je.exec(i[4])) return void (a._isValid = !1); g = "Z" } a._f = e + (f || "") + (g || ""), lb(a) } else a._isValid = !1 } function fb(a) { var b, c, d, e, f, g, h, i, j = { " GMT": " +0000", " EDT": " -0400", " EST": " -0500", " CDT": " -0500", " CST": " -0600", " MDT": " -0600", " MST": " -0700", " PDT": " -0700", " PST": " -0800" }, k = "YXWVUTSRQPONZABCDEFGHIKLM"; if (b = a._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), c = Ne.exec(b)) { if (d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : "", e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY "), f = "HH:mm" + (c[4] ? ":ss" : ""), c[1]) { var l = new Date(c[2]), m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][l.getDay()]; if (c[1].substr(0, 3) !== m) return n(a).weekdayMismatch = !0, void (a._isValid = !1) } switch (c[5].length) { case 2: 0 === i ? h = " +0000" : (i = k.indexOf(c[5][1].toUpperCase()) - 12, h = (i < 0 ? " -" : " +") + ("" + i).replace(/^-?/, "0").match(/..$/)[0] + "00"); break; case 4: h = j[c[5]]; break; default: h = j[" GMT"] }c[5] = h, a._i = c.splice(1).join(""), g = " ZZ", a._f = d + e + f + g, lb(a), n(a).rfc2822 = !0 } else a._isValid = !1 } function gb(b) { var c = Me.exec(b._i); return null !== c ? void (b._d = new Date(+c[1])) : (eb(b), void (b._isValid === !1 && (delete b._isValid, fb(b), b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))) } function hb(a, b, c) { return null != a ? a : null != b ? b : c } function ib(b) { var c = new Date(a.now()); return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()] } function jb(a) { var b, c, d, e, f = []; if (!a._d) { for (d = ib(a), a._w && null == a._a[ge] && null == a._a[fe] && kb(a), null != a._dayOfYear && (e = hb(a._a[ee], d[ee]), (a._dayOfYear > pa(e) || 0 === a._dayOfYear) && (n(a)._overflowDayOfYear = !0), c = ta(e, 0, a._dayOfYear), a._a[fe] = c.getUTCMonth(), a._a[ge] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b)a._a[b] = f[b] = d[b]; for (; b < 7; b++)a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b]; 24 === a._a[he] && 0 === a._a[ie] && 0 === a._a[je] && 0 === a._a[ke] && (a._nextDay = !0, a._a[he] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[he] = 24) } } function kb(a) { var b, c, d, e, f, g, h, i; if (b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4, c = hb(b.GG, a._a[ee], wa(tb(), 1, 4).year), d = hb(b.W, 1), e = hb(b.E, 1), (e < 1 || e > 7) && (i = !0); else { f = a._locale._week.dow, g = a._locale._week.doy; var j = wa(tb(), f, g); c = hb(b.gg, a._a[ee], j.year), d = hb(b.w, j.week), null != b.d ? (e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f } d < 1 || d > xa(c, f, g) ? n(a)._overflowWeeks = !0 : null != i ? n(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[ee] = h.year, a._dayOfYear = h.dayOfYear) } function lb(b) { if (b._f === a.ISO_8601) return void eb(b); if (b._f === a.RFC_2822) return void fb(b); b._a = [], n(b).empty = !0; var c, d, e, f, g, h = "" + b._i, i = h.length, j = 0; for (e = Y(b._f, b._locale).match(Jd) || [], c = 0; c < e.length; c++)f = e[c], d = (h.match($(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && n(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Md[f] ? (d ? n(b).empty = !1 : n(b).unusedTokens.push(f), da(f, d, b)) : b._strict && !d && n(b).unusedTokens.push(f); n(b).charsLeftOver = i - j, h.length > 0 && n(b).unusedInput.push(h), b._a[he] <= 12 && n(b).bigHour === !0 && b._a[he] > 0 && (n(b).bigHour = void 0), n(b).parsedDateParts = b._a.slice(0), n(b).meridiem = b._meridiem, b._a[he] = mb(b._locale, b._a[he], b._meridiem), jb(b), db(b) } function mb(a, b, c) { var d; return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b } function nb(a) { var b, c, d, e, f; if (0 === a._f.length) return n(a).invalidFormat = !0, void (a._d = new Date(NaN)); for (e = 0; e < a._f.length; e++)f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], lb(b), o(b) && (f += n(b).charsLeftOver, f += 10 * n(b).unusedTokens.length, n(b).score = f, (null == d || f < d) && (d = f, c = b)); k(a, c || b) } function ob(a) { if (!a._d) { var b = L(a._i); a._a = i([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) { return a && parseInt(a, 10) }), jb(a) } } function pb(a) { var b = new r(db(qb(a))); return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b } function qb(a) { var b = a._i, d = a._f; return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? p({ nullInput: !0 }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (h(b) ? a._d = b : c(d) ? nb(a) : d ? lb(a) : rb(a), o(a) || (a._d = null), a)) } function rb(b) { var e = b._i; f(e) ? b._d = new Date(a.now()) : h(e) ? b._d = new Date(e.valueOf()) : "string" == typeof e ? gb(b) : c(e) ? (b._a = i(e.slice(0), function(a) { return parseInt(a, 10) }), jb(b)) : d(e) ? ob(b) : g(e) ? b._d = new Date(e) : a.createFromInputFallback(b) } function sb(a, b, f, g, h) { var i = {}; return f !== !0 && f !== !1 || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, pb(i) } function tb(a, b, c, d) { return sb(a, b, c, d, !1) } function ub(a, b) { var d, e; if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return tb(); for (d = b[0], e = 1; e < b.length; ++e)b[e].isValid() && !b[e][a](d) || (d = b[e]); return d } function vb() { var a = [].slice.call(arguments, 0); return ub("isBefore", a) } function wb() { var a = [].slice.call(arguments, 0); return ub("isAfter", a) } function xb(a) { for (var b in a) if (Re.indexOf(b) === -1 || null != a[b] && isNaN(a[b])) return !1; for (var c = !1, d = 0; d < Re.length; ++d)if (a[Re[d]]) { if (c) return !1; parseFloat(a[Re[d]]) !== u(a[Re[d]]) && (c = !0) } return !0 } function yb() { return this._isValid } function zb() { return Sb(NaN) } function Ab(a) { var b = L(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0; this._isValid = xb(b), this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), this._bubble() } function Bb(a) { return a instanceof Ab } function Cb(a) { return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a) } function Db(a, b) { U(a, 0, 0, function() { var a = this.utcOffset(), c = "+"; return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2) }) } function Eb(a, b) { var c = (b || "").match(a); if (null === c) return null; var d = c[c.length - 1] || [], e = (d + "").match(Se) || ["-", 0, 0], f = +(60 * e[1]) + u(e[2]); return 0 === f ? 0 : "+" === e[0] ? f : -f } function Fb(b, c) { var d, e; return c._isUTC ? (d = c.clone(), e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : tb(b).local() } function Gb(a) { return 15 * -Math.round(a._d.getTimezoneOffset() / 15) } function Hb(b, c, d) { var e, f = this._offset || 0; if (!this.isValid()) return null != b ? this : NaN; if (null != b) { if ("string" == typeof b) { if (b = Eb(_d, b), null === b) return this } else Math.abs(b) < 16 && !d && (b = 60 * b); return !this._isUTC && c && (e = Gb(this)), this._offset = b, this._isUTC = !0, null != e && this.add(e, "m"), f !== b && (!c || this._changeInProgress ? Xb(this, Sb(b - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this } return this._isUTC ? f : Gb(this) } function Ib(a, b) { return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset() } function Jb(a) { return this.utcOffset(0, a) } function Kb(a) { return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Gb(this), "m")), this } function Lb() { if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) { var a = Eb($d, this._i); null != a ? this.utcOffset(a) : this.utcOffset(0, !0) } return this } function Mb(a) { return !!this.isValid() && (a = a ? tb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) } function Nb() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() } function Ob() { if (!f(this._isDSTShifted)) return this._isDSTShifted; var a = {}; if (q(a, this), a = qb(a), a._a) { var b = a._isUTC ? l(a._a) : tb(a._a); this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0 } else this._isDSTShifted = !1; return this._isDSTShifted } function Pb() { return !!this.isValid() && !this._isUTC } function Qb() { return !!this.isValid() && this._isUTC } function Rb() { return !!this.isValid() && (this._isUTC && 0 === this._offset) } function Sb(a, b) { var c, d, e, f = a, h = null; return Bb(a) ? f = { ms: a._milliseconds, d: a._days, M: a._months } : g(a) ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = Te.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = { y: 0, d: u(h[ge]) * c, h: u(h[he]) * c, m: u(h[ie]) * c, s: u(h[je]) * c, ms: u(Cb(1e3 * h[ke])) * c }) : (h = Ue.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = { y: Tb(h[2], c), M: Tb(h[3], c), w: Tb(h[4], c), d: Tb(h[5], c), h: Tb(h[6], c), m: Tb(h[7], c), s: Tb(h[8], c) }) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = Vb(tb(f.from), tb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Ab(f), Bb(a) && j(a, "_locale") && (d._locale = a._locale), d } function Tb(a, b) { var c = a && parseFloat(a.replace(",", ".")); return (isNaN(c) ? 0 : c) * b } function Ub(a, b) { var c = { milliseconds: 0, months: 0 }; return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c } function Vb(a, b) { var c; return a.isValid() && b.isValid() ? (b = Fb(b, a), a.isBefore(b) ? c = Ub(a, b) : (c = Ub(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : { milliseconds: 0, months: 0 } } function Wb(a, b) { return function(c, d) { var e, f; return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Sb(c, d), Xb(this, e, a), this } } function Xb(b, c, d, e) { var f = c._milliseconds, g = Cb(c._days), h = Cb(c._months); b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h)) } function Yb(a, b) { var c = a.diff(b, "days", !0); return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse" } function Zb(b, c) { var d = b || tb(), e = Fb(d, this).startOf("day"), f = a.calendarFormat(this, e) || "sameElse", g = c && (z(c[f]) ? c[f].call(this, d) : c[f]); return this.format(g || this.localeData().calendar(f, this, tb(d))) } function $b() { return new r(this) } function _b(a, b) { var c = s(a) ? a : tb(a); return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf()) } function ac(a, b) { var c = s(a) ? a : tb(a); return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf()) } function bc(a, b, c, d) { return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c)) } function cc(a, b) { var c, d = s(a) ? a : tb(a); return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf())) } function dc(a, b) { return this.isSame(a, b) || this.isAfter(a, b) } function ec(a, b) { return this.isSame(a, b) || this.isBefore(a, b) } function fc(a, b, c) { var d, e, f, g; return this.isValid() ? (d = Fb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = gc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : t(g)) : NaN) : NaN } function gc(a, b) { var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()), f = a.clone().add(e, "months"); return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0 } function hc() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") } function ic() { if (!this.isValid()) return null; var a = this.clone().utc(); return a.year() < 0 || a.year() > 9999 ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") } function jc() { if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"; var a = "moment", b = ""; this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z"); var c = "[" + a + '("]', d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", e = "-MM-DD[T]HH:mm:ss.SSS", f = b + '[")]'; return this.format(c + d + e + f) } function kc(b) { b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat); var c = X(this, b); return this.localeData().postformat(c) } function lc(a, b) { return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({ to: this, from: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate() } function mc(a) { return this.from(tb(), a) } function nc(a, b) { return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({ from: this, to: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate() } function oc(a) { return this.to(tb(), a) } function pc(a) { var b; return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), this) } function qc() { return this._locale } function rc(a) { switch (a = K(a)) { case "year": this.month(0); case "quarter": case "month": this.date(1); case "week": case "isoWeek": case "day": case "date": this.hours(0); case "hour": this.minutes(0); case "minute": this.seconds(0); case "second": this.milliseconds(0) }return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this } function sc(a) { return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")) } function tc() { return this._d.valueOf() - 6e4 * (this._offset || 0) } function uc() { return Math.floor(this.valueOf() / 1e3) } function vc() { return new Date(this.valueOf()) } function wc() { var a = this; return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()] } function xc() { var a = this; return { years: a.year(), months: a.month(), date: a.date(), hours: a.hours(), minutes: a.minutes(), seconds: a.seconds(), milliseconds: a.milliseconds() } } function yc() { return this.isValid() ? this.toISOString() : null } function zc() { return o(this) } function Ac() {
        return k({}, n(this))
    } function Bc() { return n(this).overflow } function Cc() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } } function Dc(a, b) { U(0, [a, a.length], 0, b) } function Ec(a) { return Ic.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) } function Fc(a) { return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4) } function Gc() { return xa(this.year(), 1, 4) } function Hc() { var a = this.localeData()._week; return xa(this.year(), a.dow, a.doy) } function Ic(a, b, c, d, e) { var f; return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Jc.call(this, a, b, c, d, e)) } function Jc(a, b, c, d, e) { var f = va(a, b, c, d, e), g = ta(f.year, 0, f.dayOfYear); return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this } function Kc(a) { return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3) } function Lc(a) { var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == a ? b : this.add(a - b, "d") } function Mc(a, b) { b[ke] = u(1e3 * ("0." + a)) } function Nc() { return this._isUTC ? "UTC" : "" } function Oc() { return this._isUTC ? "Coordinated Universal Time" : "" } function Pc(a) { return tb(1e3 * a) } function Qc() { return tb.apply(null, arguments).parseZone() } function Rc(a) { return a } function Sc(a, b, c, d) { var e = bb(), f = l().set(d, b); return e[c](f, a) } function Tc(a, b, c) { if (g(a) && (b = a, a = void 0), a = a || "", null != b) return Sc(a, b, c, "month"); var d, e = []; for (d = 0; d < 12; d++)e[d] = Sc(a, d, c, "month"); return e } function Uc(a, b, c, d) { "boolean" == typeof a ? (g(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, g(b) && (c = b, b = void 0), b = b || ""); var e = bb(), f = a ? e._week.dow : 0; if (null != c) return Sc(b, (c + f) % 7, d, "day"); var h, i = []; for (h = 0; h < 7; h++)i[h] = Sc(b, (h + f) % 7, d, "day"); return i } function Vc(a, b) { return Tc(a, b, "months") } function Wc(a, b) { return Tc(a, b, "monthsShort") } function Xc(a, b, c) { return Uc(a, b, c, "weekdays") } function Yc(a, b, c) { return Uc(a, b, c, "weekdaysShort") } function Zc(a, b, c) { return Uc(a, b, c, "weekdaysMin") } function $c() { var a = this._data; return this._milliseconds = df(this._milliseconds), this._days = df(this._days), this._months = df(this._months), a.milliseconds = df(a.milliseconds), a.seconds = df(a.seconds), a.minutes = df(a.minutes), a.hours = df(a.hours), a.months = df(a.months), a.years = df(a.years), this } function _c(a, b, c, d) { var e = Sb(b, c); return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble() } function ad(a, b) { return _c(this, a, b, 1) } function bd(a, b) { return _c(this, a, b, -1) } function cd(a) { return a < 0 ? Math.floor(a) : Math.ceil(a) } function dd() { var a, b, c, d, e, f = this._milliseconds, g = this._days, h = this._months, i = this._data; return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * cd(fd(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ed(g)), h += e, g -= cd(fd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this } function ed(a) { return 4800 * a / 146097 } function fd(a) { return 146097 * a / 4800 } function gd(a) { if (!this.isValid()) return NaN; var b, c, d = this._milliseconds; if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + ed(b), "month" === a ? c : c / 12; switch (b = this._days + Math.round(fd(this._months)), a) { case "week": return b / 7 + d / 6048e5; case "day": return b + d / 864e5; case "hour": return 24 * b + d / 36e5; case "minute": return 1440 * b + d / 6e4; case "second": return 86400 * b + d / 1e3; case "millisecond": return Math.floor(864e5 * b) + d; default: throw new Error("Unknown unit " + a) } } function hd() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12) : NaN } function id(a) { return function() { return this.as(a) } } function jd(a) { return a = K(a), this.isValid() ? this[a + "s"]() : NaN } function kd(a) { return function() { return this.isValid() ? this._data[a] : NaN } } function ld() { return t(this.days() / 7) } function md(a, b, c, d, e) { return e.relativeTime(b || 1, !!c, a, d) } function nd(a, b, c) { var d = Sb(a).abs(), e = uf(d.as("s")), f = uf(d.as("m")), g = uf(d.as("h")), h = uf(d.as("d")), i = uf(d.as("M")), j = uf(d.as("y")), k = e <= vf.ss && ["s", e] || e < vf.s && ["ss", e] || f <= 1 && ["m"] || f < vf.m && ["mm", f] || g <= 1 && ["h"] || g < vf.h && ["hh", g] || h <= 1 && ["d"] || h < vf.d && ["dd", h] || i <= 1 && ["M"] || i < vf.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j]; return k[2] = b, k[3] = +a > 0, k[4] = c, md.apply(null, k) } function od(a) { return void 0 === a ? uf : "function" == typeof a && (uf = a, !0) } function pd(a, b) { return void 0 !== vf[a] && (void 0 === b ? vf[a] : (vf[a] = b, "s" === a && (vf.ss = b - 1), !0)) } function qd(a) { if (!this.isValid()) return this.localeData().invalidDate(); var b = this.localeData(), c = nd(this, !a, b); return a && (c = b.pastFuture(+this, c)), b.postformat(c) } function rd() { if (!this.isValid()) return this.localeData().invalidDate(); var a, b, c, d = wf(this._milliseconds) / 1e3, e = wf(this._days), f = wf(this._months); a = t(d / 60), b = t(a / 60), d %= 60, a %= 60, c = t(f / 12), f %= 12; var g = c, h = f, i = e, j = b, k = a, l = d, m = this.asSeconds(); return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D" } var sd, td; td = Array.prototype.some ? Array.prototype.some : function(a) { for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)if (d in b && a.call(this, b[d], d, b)) return !0; return !1 }; var ud = td, vd = a.momentProperties = [], wd = !1, xd = {}; a.suppressDeprecationWarnings = !1, a.deprecationHandler = null; var yd; yd = Object.keys ? Object.keys : function(a) { var b, c = []; for (b in a) j(a, b) && c.push(b); return c }; var zd, Ad = yd, Bd = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, Cd = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, Dd = "Invalid date", Ed = "%d", Fd = /\d{1,2}/, Gd = { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, Hd = {}, Id = {}, Jd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Kd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ld = {}, Md = {}, Nd = /\d/, Od = /\d\d/, Pd = /\d{3}/, Qd = /\d{4}/, Rd = /[+-]?\d{6}/, Sd = /\d\d?/, Td = /\d\d\d\d?/, Ud = /\d\d\d\d\d\d?/, Vd = /\d{1,3}/, Wd = /\d{1,4}/, Xd = /[+-]?\d{1,6}/, Yd = /\d+/, Zd = /[+-]?\d+/, $d = /Z|[+-]\d\d:?\d\d/gi, _d = /Z|[+-]\d\d(?::?\d\d)?/gi, ae = /[+-]?\d+(\.\d{1,3})?/, be = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ce = {}, de = {}, ee = 0, fe = 1, ge = 2, he = 3, ie = 4, je = 5, ke = 6, le = 7, me = 8; zd = Array.prototype.indexOf ? Array.prototype.indexOf : function(a) { var b; for (b = 0; b < this.length; ++b)if (this[b] === a) return b; return -1 }; var ne = zd; U("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), U("MMM", 0, 0, function(a) { return this.localeData().monthsShort(this, a) }), U("MMMM", 0, 0, function(a) { return this.localeData().months(this, a) }), J("month", "M"), M("month", 8), Z("M", Sd), Z("MM", Sd, Od), Z("MMM", function(a, b) { return b.monthsShortRegex(a) }), Z("MMMM", function(a, b) { return b.monthsRegex(a) }), ba(["M", "MM"], function(a, b) { b[fe] = u(a) - 1 }), ba(["MMM", "MMMM"], function(a, b, c, d) { var e = c._locale.monthsParse(a, d, c._strict); null != e ? b[fe] = e : n(c).invalidMonth = a }); var oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), qe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), re = be, se = be; U("Y", 0, 0, function() { var a = this.year(); return a <= 9999 ? "" + a : "+" + a }), U(0, ["YY", 2], 0, function() { return this.year() % 100 }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), M("year", 1), Z("Y", Zd), Z("YY", Sd, Od), Z("YYYY", Wd, Qd), Z("YYYYY", Xd, Rd), Z("YYYYYY", Xd, Rd), ba(["YYYYY", "YYYYYY"], ee), ba("YYYY", function(b, c) { c[ee] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b) }), ba("YY", function(b, c) { c[ee] = a.parseTwoDigitYear(b) }), ba("Y", function(a, b) { b[ee] = parseInt(a, 10) }), a.parseTwoDigitYear = function(a) { return u(a) + (u(a) > 68 ? 1900 : 2e3) }; var te = O("FullYear", !0); U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), M("week", 5), M("isoWeek", 5), Z("w", Sd), Z("ww", Sd, Od), Z("W", Sd), Z("WW", Sd, Od), ca(["w", "ww", "W", "WW"], function(a, b, c, d) { b[d.substr(0, 1)] = u(a) }); var ue = { dow: 0, doy: 6 }; U("d", 0, "do", "day"), U("dd", 0, 0, function(a) { return this.localeData().weekdaysMin(this, a) }), U("ddd", 0, 0, function(a) { return this.localeData().weekdaysShort(this, a) }), U("dddd", 0, 0, function(a) { return this.localeData().weekdays(this, a) }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), Z("d", Sd), Z("e", Sd), Z("E", Sd), Z("dd", function(a, b) { return b.weekdaysMinRegex(a) }), Z("ddd", function(a, b) { return b.weekdaysShortRegex(a) }), Z("dddd", function(a, b) { return b.weekdaysRegex(a) }), ca(["dd", "ddd", "dddd"], function(a, b, c, d) { var e = c._locale.weekdaysParse(a, d, c._strict); null != e ? b.d = e : n(c).invalidWeekday = a }), ca(["d", "e", "E"], function(a, b, c, d) { b[d] = u(a) }); var ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), we = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ye = be, ze = be, Ae = be; U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ra), U("k", ["kk", 2], 0, Sa), U("hmm", 0, 0, function() { return "" + Ra.apply(this) + T(this.minutes(), 2) }), U("hmmss", 0, 0, function() { return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2) }), U("Hmm", 0, 0, function() { return "" + this.hours() + T(this.minutes(), 2) }), U("Hmmss", 0, 0, function() { return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2) }), Ta("a", !0), Ta("A", !1), J("hour", "h"), M("hour", 13), Z("a", Ua), Z("A", Ua), Z("H", Sd), Z("h", Sd), Z("k", Sd), Z("HH", Sd, Od), Z("hh", Sd, Od), Z("kk", Sd, Od), Z("hmm", Td), Z("hmmss", Ud), Z("Hmm", Td), Z("Hmmss", Ud), ba(["H", "HH"], he), ba(["k", "kk"], function(a, b, c) { var d = u(a); b[he] = 24 === d ? 0 : d }), ba(["a", "A"], function(a, b, c) { c._isPm = c._locale.isPM(a), c._meridiem = a }), ba(["h", "hh"], function(a, b, c) { b[he] = u(a), n(c).bigHour = !0 }), ba("hmm", function(a, b, c) { var d = a.length - 2; b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d)), n(c).bigHour = !0 }), ba("hmmss", function(a, b, c) { var d = a.length - 4, e = a.length - 2; b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e)), n(c).bigHour = !0 }), ba("Hmm", function(a, b, c) { var d = a.length - 2; b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d)) }), ba("Hmmss", function(a, b, c) { var d = a.length - 4, e = a.length - 2; b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e)) }); var Be, Ce = /[ap]\.?m?\.?/i, De = O("Hours", !0), Ee = { calendar: Bd, longDateFormat: Cd, invalidDate: Dd, ordinal: Ed, dayOfMonthOrdinalParse: Fd, relativeTime: Gd, months: pe, monthsShort: qe, week: ue, weekdays: ve, weekdaysMin: xe, weekdaysShort: we, meridiemParse: Ce }, Fe = {}, Ge = {}, He = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ie = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Je = /Z|[+-]\d\d(?::?\d\d)?/, Ke = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], Le = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], Me = /^\/?Date\((\-?\d+)/i, Ne = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/; a.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(a) { a._d = new Date(a._i + (a._useUTC ? " UTC" : "")) }), a.ISO_8601 = function() { }, a.RFC_2822 = function() { }; var Oe = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var a = tb.apply(null, arguments); return this.isValid() && a.isValid() ? a < this ? this : a : p() }), Pe = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var a = tb.apply(null, arguments); return this.isValid() && a.isValid() ? a > this ? this : a : p() }), Qe = function() { return Date.now ? Date.now() : +new Date }, Re = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"]; Db("Z", ":"), Db("ZZ", ""), Z("Z", _d), Z("ZZ", _d), ba(["Z", "ZZ"], function(a, b, c) { c._useUTC = !0, c._tzm = Eb(_d, a) }); var Se = /([\+\-]|\d\d)/gi; a.updateOffset = function() { }; var Te = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, Ue = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/; Sb.fn = Ab.prototype, Sb.invalid = zb; var Ve = Wb(1, "add"), We = Wb(-1, "subtract"); a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]"; var Xe = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) { return void 0 === a ? this.localeData() : this.locale(a) }); U(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), U(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), Dc("gggg", "weekYear"), Dc("ggggg", "weekYear"), Dc("GGGG", "isoWeekYear"), Dc("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), M("weekYear", 1), M("isoWeekYear", 1), Z("G", Zd), Z("g", Zd), Z("GG", Sd, Od), Z("gg", Sd, Od), Z("GGGG", Wd, Qd), Z("gggg", Wd, Qd), Z("GGGGG", Xd, Rd), Z("ggggg", Xd, Rd), ca(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) { b[d.substr(0, 2)] = u(a) }), ca(["gg", "GG"], function(b, c, d, e) { c[e] = a.parseTwoDigitYear(b) }), U("Q", 0, "Qo", "quarter"), J("quarter", "Q"), M("quarter", 7), Z("Q", Nd), ba("Q", function(a, b) { b[fe] = 3 * (u(a) - 1) }), U("D", ["DD", 2], "Do", "date"), J("date", "D"), M("date", 9), Z("D", Sd), Z("DD", Sd, Od), Z("Do", function(a, b) { return a ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient }), ba(["D", "DD"], ge), ba("Do", function(a, b) { b[ge] = u(a.match(Sd)[0], 10) }); var Ye = O("Date", !0); U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), M("dayOfYear", 4), Z("DDD", Vd), Z("DDDD", Pd), ba(["DDD", "DDDD"], function(a, b, c) { c._dayOfYear = u(a) }), U("m", ["mm", 2], 0, "minute"), J("minute", "m"), M("minute", 14), Z("m", Sd), Z("mm", Sd, Od), ba(["m", "mm"], ie); var Ze = O("Minutes", !1); U("s", ["ss", 2], 0, "second"), J("second", "s"), M("second", 15), Z("s", Sd), Z("ss", Sd, Od), ba(["s", "ss"], je); var $e = O("Seconds", !1); U("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), U(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), U(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), U(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), U(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), U(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), U(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), J("millisecond", "ms"), M("millisecond", 16), Z("S", Vd, Nd), Z("SS", Vd, Od), Z("SSS", Vd, Pd); var _e; for (_e = "SSSS"; _e.length <= 9; _e += "S")Z(_e, Yd); for (_e = "S"; _e.length <= 9; _e += "S")ba(_e, Mc); var af = O("Milliseconds", !1); U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName"); var bf = r.prototype; bf.add = Ve, bf.calendar = Zb, bf.clone = $b, bf.diff = fc, bf.endOf = sc, bf.format = kc, bf.from = lc, bf.fromNow = mc, bf.to = nc, bf.toNow = oc, bf.get = R, bf.invalidAt = Bc, bf.isAfter = _b, bf.isBefore = ac, bf.isBetween = bc, bf.isSame = cc, bf.isSameOrAfter = dc, bf.isSameOrBefore = ec, bf.isValid = zc, bf.lang = Xe, bf.locale = pc, bf.localeData = qc, bf.max = Pe, bf.min = Oe, bf.parsingFlags = Ac, bf.set = S, bf.startOf = rc, bf.subtract = We, bf.toArray = wc, bf.toObject = xc, bf.toDate = vc, bf.toISOString = ic, bf.inspect = jc, bf.toJSON = yc, bf.toString = hc, bf.unix = uc, bf.valueOf = tc, bf.creationData = Cc, bf.year = te, bf.isLeapYear = ra, bf.weekYear = Ec, bf.isoWeekYear = Fc, bf.quarter = bf.quarters = Kc, bf.month = ka, bf.daysInMonth = la, bf.week = bf.weeks = Ba, bf.isoWeek = bf.isoWeeks = Ca, bf.weeksInYear = Hc, bf.isoWeeksInYear = Gc, bf.date = Ye, bf.day = bf.days = Ka, bf.weekday = La, bf.isoWeekday = Ma, bf.dayOfYear = Lc, bf.hour = bf.hours = De, bf.minute = bf.minutes = Ze, bf.second = bf.seconds = $e, bf.millisecond = bf.milliseconds = af, bf.utcOffset = Hb, bf.utc = Jb, bf.local = Kb, bf.parseZone = Lb, bf.hasAlignedHourOffset = Mb, bf.isDST = Nb, bf.isLocal = Pb, bf.isUtcOffset = Qb, bf.isUtc = Rb, bf.isUTC = Rb, bf.zoneAbbr = Nc, bf.zoneName = Oc, bf.dates = x("dates accessor is deprecated. Use date instead.", Ye), bf.months = x("months accessor is deprecated. Use month instead", ka), bf.years = x("years accessor is deprecated. Use year instead", te), bf.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ib), bf.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ob); var cf = C.prototype; cf.calendar = D, cf.longDateFormat = E, cf.invalidDate = F, cf.ordinal = G, cf.preparse = Rc, cf.postformat = Rc, cf.relativeTime = H, cf.pastFuture = I, cf.set = A, cf.months = fa, cf.monthsShort = ga, cf.monthsParse = ia, cf.monthsRegex = na, cf.monthsShortRegex = ma, cf.week = ya, cf.firstDayOfYear = Aa, cf.firstDayOfWeek = za, cf.weekdays = Fa, cf.weekdaysMin = Ha, cf.weekdaysShort = Ga, cf.weekdaysParse = Ja, cf.weekdaysRegex = Na, cf.weekdaysShortRegex = Oa, cf.weekdaysMinRegex = Pa, cf.isPM = Va, cf.meridiem = Wa, $a("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(a) { var b = a % 10, c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c } }), a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb); var df = Math.abs, ef = id("ms"), ff = id("s"), gf = id("m"), hf = id("h"), jf = id("d"), kf = id("w"), lf = id("M"), mf = id("y"), nf = kd("milliseconds"), of = kd("seconds"), pf = kd("minutes"), qf = kd("hours"), rf = kd("days"), sf = kd("months"), tf = kd("years"), uf = Math.round, vf = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 }, wf = Math.abs, xf = Ab.prototype; return xf.isValid = yb, xf.abs = $c, xf.add = ad, xf.subtract = bd, xf.as = gd, xf.asMilliseconds = ef, xf.asSeconds = ff, xf.asMinutes = gf, xf.asHours = hf, xf.asDays = jf, xf.asWeeks = kf, xf.asMonths = lf, xf.asYears = mf, xf.valueOf = hd, xf._bubble = dd, xf.get = jd, xf.milliseconds = nf, xf.seconds = of, xf.minutes = pf, xf.hours = qf, xf.days = rf, xf.weeks = ld, xf.months = sf, xf.years = tf, xf.humanize = qd, xf.toISOString = rd, xf.toString = rd, xf.toJSON = rd, xf.locale = pc, xf.localeData = qc, xf.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", rd), xf.lang = Xe, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Zd), Z("X", ae), ba("X", function(a, b, c) { c._d = new Date(1e3 * parseFloat(a, 10)) }), ba("x", function(a, b, c) { c._d = new Date(u(a)) }), a.version = "2.18.1", b(tb), a.fn = bf, a.min = vb, a.max = wb, a.now = Qe, a.utc = l, a.unix = Pc, a.months = Vc, a.isDate = h, a.locale = $a, a.invalid = p, a.duration = Sb, a.isMoment = s, a.weekdays = Xc, a.parseZone = Qc, a.localeData = bb, a.isDuration = Bb, a.monthsShort = Wc, a.weekdaysMin = Zc, a.defineLocale = _a, a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Yc, a.normalizeUnits = K, a.relativeTimeRounding = od, a.relativeTimeThreshold = pd, a.calendarFormat = Yb, a.prototype = bf, a
});

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flash-fullscreen-localstorage-domprefixes-prefixed-prefixes-setclasses !*/
!function(e, n, t) { function r(e, n) { return typeof e === n } function o() { var e, n, t, o, i, s, a; for (var l in _) if (_.hasOwnProperty(l)) { if (e = [], n = _[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++)e.push(n.options.aliases[t].toLowerCase()); for (o = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++)s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), C.push((o ? "" : "no-") + a.join("-")) } } function i(e) { var n = b.className, t = Modernizr._config.classPrefix || ""; if (x && (n = n.baseVal), Modernizr._config.enableJSClass) { var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)"); n = n.replace(r, "$1" + t + "js$2") } Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), x ? b.className.baseVal = n : b.className = n) } function s(e) { return e.replace(/([a-z])-([a-z])/g, function(e, n, t) { return n + t.toUpperCase() }).replace(/^-/, "") } function a() { return "function" != typeof n.createElement ? n.createElement(arguments[0]) : x ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments) } function l() { var e = n.body; return e || (e = a(x ? "svg" : "body"), e.fake = !0), e } function f(e, n) { if ("object" == typeof e) for (var t in e) z(e, t) && f(t, e[t]); else { e = e.toLowerCase(); var r = e.split("."), o = Modernizr[r[0]]; if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr; n = "function" == typeof n ? n() : n, 1 == r.length ? Modernizr[r[0]] = n : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = n), i([(n && 0 != n ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, n) } return Modernizr } function u(e, n) { return !!~("" + e).indexOf(n) } function c(e, n) { return function() { return e.apply(n, arguments) } } function d(e, n, t) { var o; for (var i in e) if (e[i] in n) return t === !1 ? e[i] : (o = n[e[i]], r(o, "function") ? c(o, t || n) : o); return !1 } function p(e, t, r, o) { var i, s, f, u, c = "modernizr", d = a("div"), p = l(); if (parseInt(r, 10)) for (; r--;)f = a("div"), f.id = o ? o[r] : c + (r + 1), d.appendChild(f); return i = a("style"), i.type = "text/css", i.id = "s" + c, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = b.style.overflow, b.style.overflow = "hidden", b.appendChild(p)), s = t(d, e), p.fake ? (p.parentNode.removeChild(p), b.style.overflow = u, b.offsetHeight) : d.parentNode.removeChild(d), !!s } function h(e) { return e.replace(/([A-Z])/g, function(e, n) { return "-" + n.toLowerCase() }).replace(/^ms-/, "-ms-") } function v(n, t, r) { var o; if ("getComputedStyle" in e) { o = getComputedStyle.call(e, n, t); var i = e.console; if (null !== o) r && (o = o.getPropertyValue(r)); else if (i) { var s = i.error ? "error" : "log"; i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate") } } else o = !t && n.currentStyle && n.currentStyle[r]; return o } function m(n, r) { var o = n.length; if ("CSS" in e && "supports" in e.CSS) { for (; o--;)if (e.CSS.supports(h(n[o]), r)) return !0; return !1 } if ("CSSSupportsRule" in e) { for (var i = []; o--;)i.push("(" + h(n[o]) + ":" + r + ")"); return i = i.join(" or "), p("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) { return "absolute" == v(e, null, "position") }) } return t } function g(e, n, o, i) { function l() { c && (delete E.style, delete E.modElem) } if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) { var f = m(e, o); if (!r(f, "undefined")) return f } for (var c, d, p, h, v, g = ["modernizr", "tspan", "samp"]; !E.style && g.length;)c = !0, E.modElem = a(g.shift()), E.style = E.modElem.style; for (p = e.length, d = 0; p > d; d++)if (h = e[d], v = E.style[h], u(h, "-") && (h = s(h)), E.style[h] !== t) { if (i || r(o, "undefined")) return l(), "pfx" == n ? h : !0; try { E.style[h] = o } catch (y) { } if (E.style[h] != v) return l(), "pfx" == n ? h : !0 } return l(), !1 } function y(e, n, t, o, i) { var s = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + P.join(s + " ") + s).split(" "); return r(n, "string") || r(n, "undefined") ? g(a, n, o, i) : (a = (e + " " + T.join(s + " ") + s).split(" "), d(a, n, t)) } var C = [], _ = [], w = { _version: "3.5.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(e, n) { var t = this; setTimeout(function() { n(t[e]) }, 0) }, addTest: function(e, n, t) { _.push({ name: e, fn: n, options: t }) }, addAsyncTest: function(e) { _.push({ name: null, fn: e }) } }, Modernizr = function() { }; Modernizr.prototype = w, Modernizr = new Modernizr, Modernizr.addTest("localstorage", function() { var e = "modernizr"; try { return localStorage.setItem(e, e), localStorage.removeItem(e), !0 } catch (n) { return !1 } }); var S = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""]; w._prefixes = S; var b = n.documentElement, x = "svg" === b.nodeName.toLowerCase(), k = "Moz O ms Webkit", T = w._config.usePrefixes ? k.toLowerCase().split(" ") : []; w._domPrefixes = T; var P = w._config.usePrefixes ? k.split(" ") : []; w._cssomPrefixes = P; var N = function(n) { var r, o = S.length, i = e.CSSRule; if ("undefined" == typeof i) return t; if (!n) return !1; if (n = n.replace(/^@/, ""), r = n.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + n; for (var s = 0; o > s; s++) { var a = S[s], l = a.toUpperCase() + "_" + r; if (l in i) return "@-" + a.toLowerCase() + "-" + n } return !1 }; w.atRule = N; var z; !function() { var e = {}.hasOwnProperty; z = r(e, "undefined") || r(e.call, "undefined") ? function(e, n) { return n in e && r(e.constructor.prototype[n], "undefined") } : function(n, t) { return e.call(n, t) } }(), w._l = {}, w.on = function(e, n) { this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function() { Modernizr._trigger(e, Modernizr[e]) }, 0) }, w._trigger = function(e, n) { if (this._l[e]) { var t = this._l[e]; setTimeout(function() { var e, r; for (e = 0; e < t.length; e++)(r = t[e])(n) }, 0), delete this._l[e] } }, Modernizr._q.push(function() { w.addTest = f }), Modernizr.addAsyncTest(function() { var t, r, o = function(e) { b.contains(e) || b.appendChild(e) }, i = function(e) { e.fake && e.parentNode && e.parentNode.removeChild(e) }, s = function(e, n) { var t = !!e; if (t && (t = new Boolean(t), t.blocked = "blocked" === e), f("flash", function() { return t }), n && h.contains(n)) { for (; n.parentNode !== h;)n = n.parentNode; h.removeChild(n) } }; try { r = "ActiveXObject" in e && "Pan" in new e.ActiveXObject("ShockwaveFlash.ShockwaveFlash") } catch (u) { } if (t = !("plugins" in navigator && "Shockwave Flash" in navigator.plugins || r), t || x) s(!1); else { var c, d, p = a("embed"), h = l(); if (p.type = "application/x-shockwave-flash", h.appendChild(p), !("Pan" in p || r)) return o(h), s("blocked", p), void i(h); c = function() { return o(h), b.contains(h) ? (b.contains(p) ? (d = p.style.cssText, "" !== d ? s("blocked", p) : s(!0, p)) : s("blocked"), void i(h)) : (h = n.body || h, p = a("embed"), p.type = "application/x-shockwave-flash", h.appendChild(p), setTimeout(c, 1e3)) }, setTimeout(c, 10) } }); var j = { elem: a("modernizr") }; Modernizr._q.push(function() { delete j.elem }); var E = { style: j.elem.style }; Modernizr._q.unshift(function() { delete E.style }), w.testAllProps = y; var O = w.prefixed = function(e, n, t) { return 0 === e.indexOf("@") ? N(e) : (-1 != e.indexOf("-") && (e = s(e)), n ? y(e, n, t) : y(e, "pfx")) }; Modernizr.addTest("fullscreen", !(!O("exitFullscreen", n, !1) && !O("cancelFullScreen", n, !1))), o(), i(C), delete w.addTest, delete w.addAsyncTest; for (var A = 0; A < Modernizr._q.length; A++)Modernizr._q[A](); e.Modernizr = Modernizr }(window, document);

/**
 * UAParser.js v0.7.14
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */
!function(i,s){"use strict";var e="0.7.14",o="",r="?",n="function",a="undefined",t="object",d="string",l="major",w="model",u="name",c="type",m="vendor",p="version",b="architecture",g="console",f="mobile",h="tablet",v="smarttv",x="wearable",k="embedded",y={extend:function(i,s){var e={};for(var o in i)s[o]&&s[o].length%2===0?e[o]=s[o].concat(i[o]):e[o]=i[o];return e},has:function(i,s){return"string"==typeof i?-1!==s.toLowerCase().indexOf(i.toLowerCase()):!1},lowerize:function(i){return i.toLowerCase()},major:function(i){return typeof i===d?i.replace(/[^\d\.]/g,"").split(".")[0]:s},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},T={rgx:function(i,e){for(var o,r,a,d,l,w,u=0;u<e.length&&!l;){var c=e[u],m=e[u+1];for(o=r=0;o<c.length&&!l;)if(l=c[o++].exec(i))for(a=0;a<m.length;a++)w=l[++r],d=m[a],typeof d===t&&d.length>0?2==d.length?typeof d[1]==n?this[d[0]]=d[1].call(this,w):this[d[0]]=d[1]:3==d.length?typeof d[1]!==n||d[1].exec&&d[1].test?this[d[0]]=w?w.replace(d[1],d[2]):s:this[d[0]]=w?d[1].call(this,w,d[2]):s:4==d.length&&(this[d[0]]=w?d[3].call(this,w.replace(d[1],d[2])):s):this[d]=w?w:s;u+=2}},str:function(i,e){for(var o in e)if(typeof e[o]===t&&e[o].length>0){for(var n=0;n<e[o].length;n++)if(y.has(e[o][n],i))return o===r?s:o}else if(y.has(e[o],i))return o===r?s:o;return i}},S={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},A={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[u,p],[/(opios)[\/\s]+([\w\.]+)/i],[[u,"Opera Mini"],p],[/\s(opr)\/([\w\.]+)/i],[[u,"Opera"],p],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i],[u,p],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[u,"IE"],p],[/(edge)\/((\d+)?[\w\.]+)/i],[u,p],[/(yabrowser)\/([\w\.]+)/i],[[u,"Yandex"],p],[/(puffin)\/([\w\.]+)/i],[[u,"Puffin"],p],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[u,"UCBrowser"],p],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],p],[/(micromessenger)\/([\w\.]+)/i],[[u,"WeChat"],p],[/(QQ)\/([\d\.]+)/i],[u,p],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[u,p],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[p,[u,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[p,[u,"Facebook"]],[/(headlesschrome) ([\w\.]+)/i],[p,[u,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[u,/(.+)/,"$1 WebView"],p],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[u,/(.+(?:g|us))(.+)/,"$1 $2"],p],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[p,[u,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[u,p],[/(dolfin)\/([\w\.]+)/i],[[u,"Dolphin"],p],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[u,"Chrome"],p],[/(coast)\/([\w\.]+)/i],[[u,"Opera Coast"],p],[/fxios\/([\w\.-]+)/i],[p,[u,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[p,[u,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[p,u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[u,[p,T.str,S.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[u,p],[/(navigator|netscape)\/([\w\.-]+)/i],[[u,"Netscape"],p],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[u,p]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[b,"amd64"]],[/(ia32(?=;))/i],[[b,y.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[b,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[b,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[b,/ower/,"",y.lowerize]],[/(sun4\w)[;\)]/i],[[b,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[b,y.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[w,m,[c,h]],[/applecoremedia\/[\w\.]+ \((ipad)/],[w,[m,"Apple"],[c,h]],[/(apple\s{0,1}tv)/i],[[w,"Apple TV"],[m,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[m,w,[c,h]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[w,[m,"Amazon"],[c,h]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[w,T.str,S.device.amazon.model],[m,"Amazon"],[c,f]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[w,m,[c,f]],[/\((ip[honed|\s\w*]+);/i],[w,[m,"Apple"],[c,f]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[m,w,[c,f]],[/\(bb10;\s(\w+)/i],[w,[m,"BlackBerry"],[c,f]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[w,[m,"Asus"],[c,h]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[m,"Sony"],[w,"Xperia Tablet"],[c,h]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[w,[m,"Sony"],[c,f]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[m,w,[c,g]],[/android.+;\s(shield)\sbuild/i],[w,[m,"Nvidia"],[c,g]],[/(playstation\s[34portablevi]+)/i],[w,[m,"Sony"],[c,g]],[/(sprint\s(\w+))/i],[[m,T.str,S.device.sprint.vendor],[w,T.str,S.device.sprint.model],[c,f]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[m,w,[c,h]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[m,[w,/_/g," "],[c,f]],[/(nexus\s9)/i],[w,[m,"HTC"],[c,h]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[w,[m,"Huawei"],[c,f]],[/(microsoft);\s(lumia[\s\w]+)/i],[m,w,[c,f]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[w,[m,"Microsoft"],[c,g]],[/(kin\.[onetw]{3})/i],[[w,/\./g," "],[m,"Microsoft"],[c,f]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[w,[m,"Motorola"],[c,f]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[w,[m,"Motorola"],[c,h]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,y.trim],[w,y.trim],[c,v]],[/hbbtv.+maple;(\d+)/i],[[w,/^/,"SmartTV"],[m,"Samsung"],[c,v]],[/\(dtv[\);].+(aquos)/i],[w,[m,"Sharp"],[c,v]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[m,"Samsung"],w,[c,h]],[/smart-tv.+(samsung)/i],[m,[c,v],w],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[m,"Samsung"],w,[c,f]],[/sie-(\w+)*/i],[w,[m,"Siemens"],[c,f]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[m,"Nokia"],w,[c,f]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[w,[m,"Acer"],[c,h]],[/android.+([vl]k\-?\d{3})\s+build/i],[w,[m,"LG"],[c,h]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[m,"LG"],w,[c,h]],[/(lg) netcast\.tv/i],[m,w,[c,v]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i,/android.+lg(\-?[\d\w]+)\s+build/i],[w,[m,"LG"],[c,f]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[w,[m,"Lenovo"],[c,h]],[/linux;.+((jolla));/i],[m,w,[c,f]],[/((pebble))app\/[\d\.]+\s/i],[m,w,[c,x]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[m,w,[c,f]],[/crkey/i],[[w,"Chromecast"],[m,"Google"]],[/android.+;\s(glass)\s\d/i],[w,[m,"Google"],[c,x]],[/android.+;\s(pixel c)\s/i],[w,[m,"Google"],[c,h]],[/android.+;\s(pixel xl|pixel)\s/i],[w,[m,"Google"],[c,f]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],[[w,/_/g," "],[m,"Xiaomi"],[c,f]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[w,[m,"Meizu"],[c,h]],[/android.+a000(1)\s+build/i],[w,[m,"OnePlus"],[c,f]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[w,[m,"RCA"],[c,h]],[/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],[w,[m,"Dell"],[c,h]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[w,[m,"Verizon"],[c,h]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[m,"Barnes & Noble"],w,[c,h]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[w,[m,"NuVision"],[c,h]],[/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],[[m,"ZTE"],w,[c,h]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[w,[m,"Swiss"],[c,f]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[w,[m,"Swiss"],[c,h]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[w,[m,"Zeki"],[c,h]],[/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],[[m,"Dragon Touch"],w,[c,h]],[/android.+[;\/]\s*(NS-?.+)\s+build/i],[w,[m,"Insignia"],[c,h]],[/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],[w,[m,"NextBook"],[c,h]],[/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[m,"Voice"],w,[c,f]],[/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],[[m,"LvTel"],w,[c,f]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[w,[m,"Envizen"],[c,h]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],[m,w,[c,h]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[w,[m,"MachSpeed"],[c,h]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[m,w,[c,h]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[w,[m,"Rotor"],[c,h]],[/android.+(KS(.+))\s+build/i],[w,[m,"Amazon"],[c,h]],[/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],[m,w,[c,h]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[c,y.lowerize],m,w],[/(android.+)[;\/].+build/i],[w,[m,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[p,[u,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[u,p],[/rv\:([\w\.]+).*(gecko)/i],[p,u]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[u,p],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[u,[p,T.str,S.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[u,"Windows"],[p,T.str,S.os.windows.version]],[/\((bb)(10);/i],[[u,"BlackBerry"],p],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[u,p],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[u,"Symbian"],p],[/\((series40);/i],[u],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[u,"Firefox OS"],p],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[u,p],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[u,"Chromium OS"],p],[/(sunos)\s?([\w\.]+\d)*/i],[[u,"Solaris"],p],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[u,p],[/(haiku)\s(\w+)/i],[u,p],[/cfnetwork\/.+darwin/i,/ip[honead]+(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[p,/_/g,"."],[u,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[u,"Mac OS"],[p,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[u,p]]},E=function(i,s){this[u]=i,this[p]=s},N=function(i){this[b]=i},z=function(i,s,e){this[m]=i,this[w]=s,this[c]=e},M=E,O=E,R=function(e,r){if("object"==typeof e&&(r=e,e=s),!(this instanceof R))return new R(e,r).getResult();var n=e||(i&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:o),a=r?y.extend(A,r):A,t=new E,d=new N,l=new z,w=new M,u=new O;return this.getBrowser=function(){return T.rgx.call(t,n,a.browser),t.major=y.major(t.version),t},this.getCPU=function(){return T.rgx.call(d,n,a.cpu),d},this.getDevice=function(){return T.rgx.call(l,n,a.device),l},this.getEngine=function(){return T.rgx.call(w,n,a.engine),w},this.getOS=function(){return T.rgx.call(u,n,a.os),u},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(i){return n=i,t=new E,d=new N,l=new z,w=new M,u=new O,this},this};R.VERSION=e,R.BROWSER={NAME:u,MAJOR:l,VERSION:p},R.CPU={ARCHITECTURE:b},R.DEVICE={MODEL:w,VENDOR:m,TYPE:c,CONSOLE:g,MOBILE:f,SMARTTV:v,TABLET:h,WEARABLE:x,EMBEDDED:k},R.ENGINE={NAME:u,VERSION:p},R.OS={NAME:u,VERSION:p},typeof exports!==a?(typeof module!==a&&module.exports&&(exports=module.exports=R),exports.UAParser=R):typeof define===n&&define.amd?define(function(){return R}):i&&(i.UAParser=R);var C=i&&(i.jQuery||i.Zepto);if(typeof C!==a){var V=new R;C.ua=V.getResult(),C.ua.get=function(){return V.getUA()},C.ua.set=function(i){V.setUA(i);var s=V.getResult();for(var e in s)C.ua[e]=s[e]}}}("object"==typeof window?window:this);
UAParser._version = "0.7.14";

/*!	SWFObject v2.2 <http://code.google.com/p/swfobject/>
	se publica bajo licencia del MIT <http://www.opensource.org/licenses/mit-license.php>*/
window.swfobject=function(){function e(){if(!G){try{var e=M.getElementsByTagName("body")[0].appendChild(h("span"));e.parentNode.removeChild(e)}catch(t){return}G=!0;for(var n=R.length,a=0;n>a;a++)R[a]()}}function t(e){G?e():R[R.length]=e}function n(e){if(typeof x.addEventListener!=L)x.addEventListener("load",e,!1);else if(typeof M.addEventListener!=L)M.addEventListener("load",e,!1);else if(typeof x.attachEvent!=L)m(x,"onload",e);else if("function"==typeof x.onload){var t=x.onload;x.onload=function(){t(),e()}}else x.onload=e}function a(){P?i():r()}function i(){var e=M.getElementsByTagName("body")[0],t=h(k);t.setAttribute("type",O);var n=e.appendChild(t);if(n){var a=0;!function(){if(typeof n.GetVariable!=L){var i=n.GetVariable("$version");i&&(i=i.split(" ")[1].split(","),X.pv=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)])}else if(10>a)return a++,void setTimeout(arguments.callee,10);e.removeChild(t),n=null,r()}()}else r()}function r(){var e=D.length;if(e>0)for(var t=0;e>t;t++){var n=D[t].id,a=D[t].callbackFn,i={success:!1,id:n};if(X.pv[0]>0){var r=y(n);if(r)if(!g(D[t].swfVersion)||X.wk&&X.wk<312)if(D[t].expressInstall&&s()){var f={};f.data=D[t].expressInstall,f.width=r.getAttribute("width")||"0",f.height=r.getAttribute("height")||"0",r.getAttribute("class")&&(f.styleclass=r.getAttribute("class")),r.getAttribute("align")&&(f.align=r.getAttribute("align"));for(var d={},u=r.getElementsByTagName("param"),p=u.length,v=0;p>v;v++)"movie"!=u[v].getAttribute("name").toLowerCase()&&(d[u[v].getAttribute("name")]=u[v].getAttribute("value"));l(f,d,n,a)}else c(r),a&&a(i);else b(n,!0),a&&(i.success=!0,i.ref=o(n),a(i))}else if(b(n,!0),a){var h=o(n);h&&typeof h.SetVariable!=L&&(i.success=!0,i.ref=h),a(i)}}}function o(e){var t=null,n=y(e);if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=L)t=n;else{var a=n.getElementsByTagName(k)[0];a&&(t=a)}return t}function s(){return!J&&g("6.0.65")&&(X.win||X.mac)&&!(X.wk&&X.wk<312)}function l(e,t,n,a){J=!0,A=a||null,N={success:!1,id:n};var i=y(n);if(i){"OBJECT"==i.nodeName?(E=f(i),S=null):(E=i,S=n),e.id=F,(typeof e.width==L||!/%$/.test(e.width)&&parseInt(e.width,10)<310)&&(e.width="310"),(typeof e.height==L||!/%$/.test(e.height)&&parseInt(e.height,10)<137)&&(e.height="137"),M.title=M.title.slice(0,47)+" - Flash Player Installation";var r=X.ie&&X.win?"ActiveX":"PlugIn",o="MMredirectURL="+x.location.toString().replace(/&/g,"%26")+"&MMplayerType="+r+"&MMdoctitle="+M.title;if(typeof t.flashvars!=L?t.flashvars+="&"+o:t.flashvars=o,X.ie&&X.win&&4!=i.readyState){var s=h("div");n+="SWFObjectNew",s.setAttribute("id",n),i.parentNode.insertBefore(s,i),i.style.display="none",function(){4==i.readyState?i.parentNode.removeChild(i):setTimeout(arguments.callee,10)}()}d(e,t,n)}}function c(e){if(X.ie&&X.win&&4!=e.readyState){var t=h("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(f(e),t),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()}else e.parentNode.replaceChild(f(e),e)}function f(e){var t=h("div");if(X.win&&X.ie)t.innerHTML=e.innerHTML;else{var n=e.getElementsByTagName(k)[0];if(n){var a=n.childNodes;if(a)for(var i=a.length,r=0;i>r;r++)1==a[r].nodeType&&"PARAM"==a[r].nodeName||8==a[r].nodeType||t.appendChild(a[r].cloneNode(!0))}}return t}function d(e,t,n){var a,i=y(n);if(X.wk&&X.wk<312)return a;if(i)if(typeof e.id==L&&(e.id=n),X.ie&&X.win){var r="";for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?r+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(r+=" "+o+'="'+e[o]+'"'));var s="";for(var l in t)t[l]!=Object.prototype[l]&&(s+='<param name="'+l+'" value="'+t[l]+'" />');i.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+s+"</object>",W[W.length]=e.id,a=y(e.id)}else{var c=h(k);c.setAttribute("type",O);for(var f in e)e[f]!=Object.prototype[f]&&("styleclass"==f.toLowerCase()?c.setAttribute("class",e[f]):"classid"!=f.toLowerCase()&&c.setAttribute(f,e[f]));for(var d in t)t[d]!=Object.prototype[d]&&"movie"!=d.toLowerCase()&&u(c,d,t[d]);i.parentNode.replaceChild(c,i),a=c}return a}function u(e,t,n){var a=h("param");a.setAttribute("name",t),a.setAttribute("value",n),e.appendChild(a)}function p(e){var t=y(e);t&&"OBJECT"==t.nodeName&&(X.ie&&X.win?(t.style.display="none",function(){4==t.readyState?v(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function v(e){var t=y(e);if(t){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}}function y(e){var t=null;try{t=M.getElementById(e)}catch(n){}return t}function h(e){return M.createElement(e)}function m(e,t,n){e.attachEvent(t,n),H[H.length]=[e,t,n]}function g(e){var t=X.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function w(e,t,n,a){if(!X.ie||!X.mac){var i=M.getElementsByTagName("head")[0];if(i){var r=n&&"string"==typeof n?n:"screen";if(a&&(T=null,I=null),!T||I!=r){var o=h("style");o.setAttribute("type","text/css"),o.setAttribute("media",r),T=i.appendChild(o),X.ie&&X.win&&typeof M.styleSheets!=L&&M.styleSheets.length>0&&(T=M.styleSheets[M.styleSheets.length-1]),I=r}X.ie&&X.win?T&&typeof T.addRule==k&&T.addRule(e,t):T&&typeof M.createTextNode!=L&&T.appendChild(M.createTextNode(e+" {"+t+"}"))}}}function b(e,t){if(U){var n=t?"visible":"hidden";G&&y(e)?y(e).style.visibility=n:w("#"+e,"visibility:"+n)}}function C(e){var t=/[\\\"<>\.;]/,n=null!=t.exec(e);return n&&typeof encodeURIComponent!=L?encodeURIComponent(e):e}var E,S,A,N,T,I,L="undefined",k="object",j="Shockwave Flash",B="ShockwaveFlash.ShockwaveFlash",O="application/x-shockwave-flash",F="SWFObjectExprInst",$="onreadystatechange",x=window,M=document,V=navigator,P=!1,R=[a],D=[],W=[],H=[],G=!1,J=!1,U=!0,X=function(){var e=typeof M.getElementById!=L&&typeof M.getElementsByTagName!=L&&typeof M.createElement!=L,t=V.userAgent.toLowerCase(),n=V.platform.toLowerCase(),a=n?/win/.test(n):/win/.test(t),i=n?/mac/.test(n):/mac/.test(t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,s=[0,0,0],l=null;if(typeof V.plugins!=L&&typeof V.plugins[j]==k)l=V.plugins[j].description,!l||typeof V.mimeTypes!=L&&V.mimeTypes[O]&&!V.mimeTypes[O].enabledPlugin||(P=!0,o=!1,l=l.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),s[0]=parseInt(l.replace(/^(.*)\..*$/,"$1"),10),s[1]=parseInt(l.replace(/^.*\.(.*)\s.*$/,"$1"),10),s[2]=/[a-zA-Z]/.test(l)?parseInt(l.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof x.ActiveXObject!=L)try{var c=new ActiveXObject(B);c&&(l=c.GetVariable("$version"),l&&(o=!0,l=l.split(" ")[1].split(","),s=[parseInt(l[0],10),parseInt(l[1],10),parseInt(l[2],10)]))}catch(f){}return{w3:e,pv:s,wk:r,ie:o,win:a,mac:i}}();(function(){X.w3&&((typeof M.readyState!=L&&"complete"==M.readyState||typeof M.readyState==L&&(M.getElementsByTagName("body")[0]||M.body))&&e(),G||(typeof M.addEventListener!=L&&M.addEventListener("DOMContentLoaded",e,!1),X.ie&&X.win&&(M.attachEvent($,function(){"complete"==M.readyState&&(M.detachEvent($,arguments.callee),e())}),x==top&&!function(){if(!G){try{M.documentElement.doScroll("left")}catch(t){return void setTimeout(arguments.callee,0)}e()}}()),X.wk&&!function(){return G?void 0:/loaded|complete/.test(M.readyState)?void e():void setTimeout(arguments.callee,0)}(),n(e)))})(),function(){X.ie&&X.win&&window.attachEvent("onunload",function(){for(var e=H.length,t=0;e>t;t++)H[t][0].detachEvent(H[t][1],H[t][2]);for(var n=W.length,a=0;n>a;a++)p(W[a]);for(var i in X)X[i]=null;X=null;for(var r in swfobject)swfobject[r]=null;swfobject=null})}();return{registerObject:function(e,t,n,a){if(X.w3&&e&&t){var i={};i.id=e,i.swfVersion=t,i.expressInstall=n,i.callbackFn=a,D[D.length]=i,b(e,!1)}else a&&a({success:!1,id:e})},getObjectById:function(e){return X.w3?o(e):void 0},embedSWF:function(e,n,a,i,r,o,c,f,u,p){var v={success:!1,id:n};X.w3&&!(X.wk&&X.wk<312)&&e&&n&&a&&i&&r?(b(n,!1),t(function(){a+="",i+="";var t={};if(u&&typeof u===k)for(var y in u)t[y]=u[y];t.data=e,t.width=a,t.height=i;var h={};if(f&&typeof f===k)for(var m in f)h[m]=f[m];if(c&&typeof c===k)for(var w in c)typeof h.flashvars!=L?h.flashvars+="&"+w+"="+c[w]:h.flashvars=w+"="+c[w];if(g(r)){var C=d(t,h,n);t.id==n&&b(n,!0),v.success=!0,v.ref=C}else{if(o&&s())return t.data=o,void l(t,h,n,p);b(n,!0)}p&&p(v)})):p&&p(v)},switchOffAutoHideShow:function(){U=!1},ua:X,getFlashPlayerVersion:function(){return{major:X.pv[0],minor:X.pv[1],release:X.pv[2]}},hasFlashPlayerVersion:g,createSWF:function(e,t,n){return X.w3?d(e,t,n):void 0},showExpressInstall:function(e,t,n,a){X.w3&&s()&&l(e,t,n,a)},removeSWF:function(e){X.w3&&p(e)},createCSS:function(e,t,n,a){X.w3&&w(e,t,n,a)},addDomLoadEvent:t,addLoadEvent:n,getQueryParamValue:function(e){var t=M.location.search||M.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return C(t);for(var n=t.split("&"),a=0;a<n.length;a++)if(n[a].substring(0,n[a].indexOf("="))==e)return C(n[a].substring(n[a].indexOf("=")+1))}return""},expressInstallCallback:function(){if(J){var e=y(F);e&&E&&(e.parentNode.replaceChild(E,e),S&&(b(S,!0),X.ie&&X.win&&(E.style.display="block")),A&&A(N)),J=!1}}}}();
swfobject._version = "2.2";

if (!String.prototype.format) {
    //http://stackoverflow.com/questions/18405736/is-there-a-c-sharp-string-format-equivalent-in-javascript
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) { return typeof args[number] !== undefined ? args[number] : match; });
    };
}


var cmi = {};

if (!scormPlayerConfig) {
    var scormPlayerConfig = {
        autoInitialize: true,
        autoFinish: true,
        autoCommitTime: 30000,
        cache: true,
        commitOnlyChanges: true,
        fillScreen: true,
        testFlash: false,
        APIname: "API",
        showCompleteBtn: false,
        scale: false,
        allowFailed: true,
        autoMinMax: [0, 100],
        parameter_2_string: true
    }
}
if (scormPlayerConfig.cache === undefined) { scormPlayerConfig.cache = true; }
if (scormPlayerConfig.commitOnlyChanges === undefined) { scormPlayerConfig.commitOnlyChanges = true; }
if (scormPlayerConfig.fillScreen === undefined) { scormPlayerConfig.fillScreen = true; }
if (scormPlayerConfig.testFlash === undefined) { scormPlayerConfig.testFlash = false; }
if (scormPlayerConfig.APIname === undefined) { scormPlayerConfig.APIname = "API"; }
if (scormPlayerConfig.showCompleteBtn === undefined) { scormPlayerConfig.showCompleteBtn = false; }
if (scormPlayerConfig.scale === undefined) { scormPlayerConfig.scale = false; }
if (scormPlayerConfig.allowFailed === undefined) { scormPlayerConfig.allowFailed = true; }
if (scormPlayerConfig.autoMinMax === undefined) { scormPlayerConfig.autoMinMax = [0, 100]; }
if (scormPlayerConfig.parameter_2_string === undefined) { scormPlayerConfig.parameter_2_string = true; }

if (scormPlayerConfig.testFlash && document.referrer.indexOf("testflash.html") === -1) {
    location.replace(location.href.replace(scormPlayerConfig.testFlash, "scripts/scormplayer/testflash.html"));
} else { scormPlayer(); }

scormPlayer.reportTime = function() {
    API.LMSSetValue("cmi.core.session_time", this.moment.duration(this.moment() - scormPlayer.start).format("HH:mm:ss.SS"));
}


function scormPlayer() {
    "use strict";
    try {
        var log = [], log_item, _window = window, commit_timeout, commit_max_timeout, changes, player_timeout, last_commit, SCO_in_use,
            cache = {}, suspend_data, entry, isParent, states = { NotInitialized: 0, Running: 1, Terminated: 2 },
            state = states.NotInitialized, parser, exitFullscreen, requestFullscreen, moment = window.moment, Modernizr = window.Modernizr,
            UAParser = window.UAParser, API, API_1184_11, apisource = "window", swfobject = window.swfobject, console, 
            localStorage = window.localStorage, sss = [], minTimeOut, maxTimeOut, lastError, diagnostic, errorCache = {};
            scormPlayer.moment = moment;
        moment.duration.fn.format = function(input) {
            var output = input, milliseconds = this.asMilliseconds(), totalMilliseconds = 0;
            var replaceRegexps = {
                years: /Y(?!Y)/g, months: /M(?!M)/g, weeks: /W(?!W)/g, days: /D(?!D)/g, hours: /H(?!H)/g, minutes: /m(?!m)/g, seconds: /s(?!s)/g,
                milliseconds: /S(?!S)/g
            };
            var matchRegexps = { years: /Y/g, months: /M/g, weeks: /W/g, days: /D/g, hours: /H/g, minutes: /m/g, seconds: /s/g, milliseconds: /S/g };
            for (var r in replaceRegexps) {
                if (replaceRegexps[r].test(output)) {
                    var as = 'as' + r.charAt(0).toUpperCase() + r.slice(1);
                    var value = Math.floor(moment.duration(milliseconds - totalMilliseconds)[as]()).toString();
                    if (r === "milliseconds") { value = ("00" + value).substring(value.length - 1); }
                    var replacements = output.match(matchRegexps[r]).length - value.length;
                    if (r === "milliseconds" && replacements < 0) { value = value.substring(0, value.length + replacements); }
                    output = output.replace(replaceRegexps[r], value);
                    while (replacements > 0 && replaceRegexps[r].test(output)) {
                        output = output.replace(replaceRegexps[r], '0');
                        replacements--;
                    }
                    output = output.replace(matchRegexps[r], '');
                    var temp = {};
                    temp[r] = value;
                    totalMilliseconds += moment.duration(temp).asMilliseconds();
                }
            }
            return output;
        };
        scormPlayer.start = moment();
        console = { log: function(item) { if (window.console) { window.console.log(item); } log.push(item); } }
        console.log(comment("Start"));
        delete window.moment; delete window.UAParser; 
        //delete window.swfobject; eliminar no esta permitido en strict
        parser = ev("new UAParser().getResult();");
        console.log("window.location.href;{0}".format(comment(param(window.location.href))));
        ev("document.referrer;");
        console.log("navigator.language || navigator.userLanguage;{0}".format(comment(param(navigator.language || navigator.userLanguage))));
        console.log("screen.height;{0}".format(comment(param(screen.height))));
        console.log("screen.width;{0}".format(comment(param(screen.width))));
        console.log("window.innerHeight;{0}".format(comment(param(window.innerHeight))));
        console.log("window.innerWidth;{0}".format(comment(param(window.innerWidth))));
        parser = parser.browser.name + ' ' + parser.browser.major + ' on ' +
            (parser.device.vendor ? "a " + parser.device.vendor + " " + parser.device.model + " runing " : "") +
            parser.os.name + ' ' + parser.os.version;
        console.log(comment("Parse userAgent: {0}".format(parser)));
        if (localStorage) { try { localStorage.setItem("log_location", localStorage.getItem("log_location")); } catch (e) { setlocals(); } }
        else { setlocals(); }
        var EventCache = function() {
            var listEvents = [];
            return {
                listEvents: listEvents,
                add: function(node, sEventName, fHandler) { listEvents.push(arguments); },
                flush: function() {
                    for (var i = listEvents.length - 1, item; i >= 0; i = i - 1) {
                        item = listEvents[i];
                        if (item[0].removeEventListener) { item[0].removeEventListener(item[1], item[2], item[3]); };
                        if (item[1].substring(0, 2) != "on") { item[1] = "on" + item[1]; };
                        if (item[0].detachEvent) { item[0].detachEvent(item[1], item[2]); };
                        item[0][item[1]] = null;
                    };
                }
            };
        }();
        ev("scormPlayerConfig;");
        ev("moment.version;");
        ev("Modernizr._version;");
        ev("UAParser._version;");
        ev("swfobject._version;");
        ev("Modernizr.fullscreen;");
        ev("Modernizr.flash;");
        ev("Modernizr.localstorage;");
        ev("swfobject.getFlashPlayerVersion();");
        if (Modernizr.fullscreen) {
            addEventListener(
                window,
                ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                function() { setTimeout(function() { dispatchEvent("resize"); }, 1000); }
            );
            exitFullscreen = Modernizr.prefixed('exitFullscreen', window.document);
            requestFullscreen = Modernizr.prefixed('requestFullscreen', window.document.documentElement);
            addEventListener(
                window,
                "dblclick",
                function() {
                    if (window.innerHeight == screen.height) { exitFullscreen(); console.log(comment("dblclick exitFullscreen")); }
                    else { requestFullscreen(Element.ALLOW_KEYBOARD_INPUT); console.log(comment("dblclick requestFullscreen")); }
                }
            );
        }

        console.log(comment("Find API"));
        for (var attempt = 0, step = 0; !_window[scormPlayerConfig.APIname] && attempt < 7 && step < 3; attempt++) {
            if (_window.parent && _window.parent !== _window) {
                apisource += ".parent";
                console.log(comment("window.parent"));
                isParent = true;
                _window = _window.parent;
            } else {
                if (step === 0 && window.opener) {
                    console.log(comment("window.opener"));
                    apisource += ".opener";
                    _window = window.opener; attempt = 0;
                } else if (step === 1 && window.top && window.top.opener) {
                    console.log(comment("window.top.opener"));
                    apisource += ".top.opener";
                    _window = window.top.opener; attempt = 0;
                } else if (step === 2 && window.top && window.top.opener && window.top.opener.document) {
                    console.log(comment("windows.top.opener.document"));
                    apisource += ".top.opener.document"
                    _window = windows.top.opener.document; attempt = 0;
                }
                step++;
            }
        }
        ev("{0}.location.href;".format(apisource));
        ev("{0}.document.referrer;".format(apisource));
        var client = ev("localStorage.getItem({0});".format(param("client")));
        if (client === null || client === "" || client === undefined) {
            client = [newguid(), moment().format("YYYY-MM-DDThh:mm:ss.SSSZ")];
            ev("localStorage.setItem({0},{1});".format("client", param(JSON.stringify(client))));
        } else { client = JSON.parse(client); }
        if (scormPlayerConfig.APIname === "API_1184_11") {
            API_1184_11 = _window.API_1184_11;
            _window.API_1184_11 = window.API_1184_11 = {
                Initialize: function(parameter) {
                    try {
                        var return_value = ev("API_1184_11.Initialize({0});".format(param(parameter)));
                        if ((noerror = return_value === "true")) {
                            last_commit = moment();
                            _window.API_1184_11.GetValue("cmi.suspend_data");
                            if (sss[0] && sss[1].add(5, "minutes") > moment()) {
                                console.log(comment("SCO already launched"));
                                alert(
                                    "Ya se esta mostrando un curso en otra ventana, favor de cerrarla y volver a ingresar\nO espera {0} minutos".format(
                                        moment.duration(sss[1] - moment()).format("mm:ss")
                                    )
                                );
                                return_value = "false";
                                _window.API_1184_11.Terminate("");
                            } else {
                                state = states.Running;
                                saveInit(true);
                                _window.API_1184_11.GetValue("cmi._version");
                                _window.API_1184_11.GetValue("cmi.completion_status");
                                _window.API_1184_11.GetValue("cmi.completion_threshold");
                                _window.API_1184_11.GetValue("cmi.credit");
                                entry = _window.API_1184_11.GetValue("cmi.entry");
                                _window.API_1184_11.GetValue("cmi.learner_id");
                                _window.API_1184_11.GetValue("cmi.learner_name");
                                _window.API_1184_11.GetValue("cmi.location");
                                _window.API_1184_11.GetValue("cmi.mode");
                                _window.API_1184_11.GetValue("cmi.progress_measure");
                                _window.API_1184_11.GetValue("cmi.scaled_passing_score");
                                _window.API_1184_11.GetValue("cmi.score.scaled");
                                _window.API_1184_11.GetValue("cmi.score.raw");
                                _window.API_1184_11.GetValue("cmi.score.min");
                                _window.API_1184_11.GetValue("cmi.score.max");
                                _window.API_1184_11.GetValue("cmi.success_status");
                                _window.API_1184_11.GetValue("cmi.total_time");
                                setInterval(function() { saveInit(true); _window.API_1184_11.Commit(""); }, 225000);
                                if (entry === "ab-initio") {
                                    _window.API_1184_11.SetValue("cmi.exit", "suspend");
                                    _window.API_1184_11.SetValue("cmi.completion_status", "incomplete");
                                } else if (entry === "resume") { _window.API_1184_11.SetValue("cmi.exit", "suspend"); }
                                _window.API_1184_11.Commit("");
                            }
                            cmi.savelog();
                        } else {
                            testError();
                            alert("¡Ocurrio un error al inicializar la comunicación con la plataforma!");
                            _window.API_1184_11.Terminate("");
                        }
                    } catch (error) {
                        return_value = "false";
                        console.log(comment("Error in API_1184_11.Initialize: {0}".format(error.message)));
                        alert("¡Ocurrio un error comunicate a RedEducativa!\API_1184_11.Initialize: {0}".format(error.message));
                    }
                    return return_value;
                },
                Terminate: function(parameter) {
                    try {
                        if (state === states.Running) {
                            console.log(comment("Auto set cmi.core.exit state"));
                            if (_window.API.LMSGetValue("cmi.core.lesson_status") === "incomplete") { winodw.API.LMSSetValue("cmi.core.exit", "suspend"); }
                            else { _window.API.LMSSetValue("cmi.core.exit", ""); }
                            saveInit(false);
                        }
                        var return_value = ev("API_1184_11.Terminate({0});".format(param(parameter)));
                        if ((noerror = return_value === "true")) {
                            state = states.Terminated;
                            commit_timeout = clearTimeout(commit_timeout); commit_timeout = undefined;
                            commit_max_timeout = clearTimeout(commit_max_timeout); commit_max_timeout = undefined;
                            setTimeout(function() { document.close(); }, 0);
                            sleep(1000);
                        } else {
                            testError();
                            alert("¡Ocurrio un error al finalizar la comunicación con la plataforma!");
                        }
                        cmi.savelog();
                    } catch (error) {
                        return_value = "false";
                        console.log(comment("Error in API_1184_11.Terminate: {0}".format(error.message)));
                        alert("¡Ocurrio un error comunicate a RedEducativa!\API_1184_11.Terminate: {0}".format(error.message));
                    }
                    return return_value;
                },
                GetValue: function(parameter) {
                    try {
                        var return_value = cache[parameter];
                        if (state === states.Running && return_value !== undefined) {
                            console.log(comment("Return value from cache"));
                            console.log("\t\\\\API_1184_11.GetValue({0});{1}".format(param(parameter), comment(param(return_value), moment())));
                            return return_value;
                        }
                        return_value = ev("API_1184_11.GetValue({0});".format(param(parameter)));
                        noerror = false;
                        if ((noerror = !(return_value === "" && testError()))) {
                            if (parameter === "cmi.suspend_data") {
                                if (return_value !== "") {
                                    try {
                                        sss = JSON.parse(return_value);
                                        if (sss.length === 5) { sss[1] = moment(sss[1]); }
                                        if (sss.length === 3) { sss = [0,null,null,null,sss[2]]; }
                                        else if (sss.length === 2) { sss = [0,null,null,null,sss[1]]; }
                                        return_value = sss[4];
                                    } catch (e) { }
                                }
                                suspend_data = return_value;
                            }
                            if (scormPlayerConfig.cache && !parameter.endsWith("._count")) { cache[parameter] = return_value; }
                            if (scormPlayerConfig.showCompleteBtn && parameter === "cmi.core.lesson_status" && return_value === "completed") { createbtn(); }
                        }
                    } catch (error) {
                        return_value = "";
                        console.log(comment("Error in API_1184_11.GetValue: {0}".format(error.message)));
                        alert("¡Ocurrio un error comunicate a RedEducativa!\API_1184_11.GetValue: {0}".format(error.message));
                    }
                    return return_value;
                },
                SetValue: function(parameter_1, parameter_2, persist) {
                    var tmp_parameter_2, return_value;
                    try {
                        if (
                            scormPlayerConfig.cache
                            && cache[parameter_1] === undefined
                            && parameter_1 !== "cmi.core.exit"
                            && parameter_1 !== "cmi.core.session_time"
                            && !parameter_1.startsWith("cmi.interactions.")
                        ) {
                            console.log(comment("Check current value before set"));
                            _window.API.LMSGetValue(parameter_1);
                        }
                        if (entry === "" && parameter_1 === "cmi.core.lesson_status" && parameter_2 === "incomplete") {
                            console.log(comment("Block change lesson_status"));
                            return_value = "true";
                            console.log("\t\\\\API_1184_11.SetValue({0}, {1});{2}".format(param(parameter_1), param(parameter_2), comment(param(return_value), moment())));
                            return return_value;
                        }
                        if (state === states.Running && cache[parameter_1] === parameter_2 && !persist) {
                            console.log(comment("No change data"));
                            console.log("\t\\\\API_1184_11.SetValue({0}, {1});{2}".format(param(parameter_1), param(parameter_2), comment(param(return_value), moment())));
                            return "true";
                        }
                        if(parameter_1 === "cmi.suspend_data"){ sss[4] = parameter_2; }
                        tmp_value = parameter_1 === "cmi.suspend_data" ? JSON.stringify(sss) : parameter_2;
                        return_value = ev("API_1184_11.SetValue({0}, {1});".format(param(parameter_1), param(tmp_value)));
                        if ((noerror = return_value === "true")) {
                            changes = true;
                            if (scormPlayerConfig.autoCommitTime) {
                                clearTimeout(commit_timeout);
                                commit_timeout = setTimeout(
                                    function() { console.log(comment("Auto commit")); _window.API.LMSCommit(""); },
                                    scormPlayerConfig.autoCommitTime
                                );
                                if (!commit_max_timeout) {
                                    commit_max_timeout = setTimeout(
                                        function() { console.log(comment("Timeout 60secs without commit")); _window.API.LMSCommit(""); },
                                        scormPlayerConfig.autoCommitTime * 2
                                    );
                                }
                            }
                            if (scormPlayerConfig.cache) { cache[parameter_1] = parameter_2; }
                            if (parameter_1 === "cmi.suspend_data") { suspend_data = parameter_2; }
                            if (scormPlayerConfig.showCompleteBtn && parameter_1 === "cmi.core.lesson_status" && parameter_2 === "completed") { createbtn(); }
                        } else { testError(); }
                    } catch (error) {
                        return_value = "false";
                        console.log(comment("Error in API_1184_11.SetValue: {0}".format(error.message)));
                        alert("¡Ocurrio un error comunicate a RedEducativa!\API_1184_11.SetValue: {0}".format(error.message));
                    }
                    return return_value;
                },
                Commit: function(parameter) {
                    try {
                        var return_value;
                        if (scormPlayerConfig.commitOnlyChanges && !changes) {
                            return_value = "true";
                            console.log(comment("No changes to commit"));
                            console.log("\t\\\\API_1184_11.Commit({0});{1}".format(param(parameter), comment(param(return_value), moment())));
                            return return_value;
                        }
                        return_value = ev("API_1184_11.Commit({0});".format(param(parameter)));
                        if ((noerror = return_value === "true")) {
                            last_commit = moment();
                            changes = false;
                            if (scormPlayerConfig.autoCommitTime) {
                                commit_timeout = clearTimeout(commit_timeout);
                                commit_max_timeout = clearTimeout(commit_max_timeout);
                            }
                        } else {
                            testError();
                            alert("¡Ocurrio un error al guardar los datos verifica que tengas conexión a internet!");
                        }
                    } catch (error) {
                        return_value = "false";
                        console.log(comment("Error in API_1184_11.Commit: {0}".format(error.message)));
                        alert("¡Ocurrio un error comunicate a RedEducativa!\API_1184_11.Commit: {0}".format(error.message));
                    }
                    return return_value;
                },
                GetLastError: function() {
                    try {
                        if (noerror) {
                            var return_value = "0";
                            console.log("\t\\\\API.LMSGetLastError();{0}".format(comment(param(return_value), moment())));
                            return return_value;
                        }
                        return ev("API_1184_11.GetLastError();");
                    } catch (error) {
                        console.log(comment("Error in API_1184_11.GetLastError: {0}".format(error.message)));
                        return "";
                    }
                },
                GetErrorString: function(parameter) {
                    try { return ev("API_1184_11.GetErrorString({0});".format(param(parameter))); }
                    catch (error) {
                        console.log(comment("Error in API_1184_11.GetErrorString: {0}".format(error.message)));
                        return "";
                    }
                },
                GetDiagnostic: function(parameter) {
                    try { return ev("API_1184_11.GetDiagnostic({0});".format(param(parameter))); }
                    catch (error) {
                        console.log(comment("Error in API_1184_11.GetDiagnostic: {0}".format(error.message)));
                        return "";
                    }
                },
                version: "1.0.20170531"
            };
        } else {
            if (!_window.API) {
                console.log(comment("API NOT found!!"));
                var _cmi;
                API = {
                    LMSInitialize: function() {
                        _cmi = {
                            "cmi.suspend_data": "",
                            "cmi.core.lesson_mode": "credit",
                            "cmi.core.lesson_location": "",
                            "cmi.core.student_id": "0",
                            "cmi.core.student_name": "liga directa",
                            "cmi.core.entry": "ab-initio",
                            "cmi.core.lesson_status": "not attempted"
                        };
                        return "true";
                    },
                    LMSFinish: function() { return "true"; },
                    LMSCommit: function() { return "true"; },
                    LMSSetValue: function(element, value) {
                        _cmi[element] = value;
                        return "true";
                    },
                    LMSGetValue: function(element) { return _cmi[element]; },
                    LMSGetLastError: function() { return "0"; },
                    LMSGetDiagnostic: function() { return ""; },
                    version: "0.0.20170526"
                };
            } else { API = _window._API = _window.API;}
            ev("API.version;");
            _window.API = window.API = {
                LMSInitialize: function(parameter) {
                    try {
                        var return_value, command;
                        command = "API.LMSInitialize({0});".format(param(parameter));
                        if(state === states.Running){  console.log(comment("state: Running")); return "false"; }
                        if(state === states.Terminated){ console.log(comment("state: Terminated")); return "false"; }
                        try{ lastError = undefined; diagnostic = undefined; return_value = ev(command); }
                        catch(e){
                            return_value = "false"; lastError = "101"; diagnostic = e.message;
                            console.log("{0}{1}".format(command, comment(param(return_value), moment())));
                        }
                        if (return_value === "true") {
                            last_commit = moment();
                            _window.API.LMSGetValue("cmi.suspend_data");
                            if (sss[0] && sss[1].add(5, "minutes") > moment()) {
                                console.log(comment("SCO already launched"));
                                alert(
                                    "Ya se esta mostrando un curso en otra ventana, favor de cerrarla y volver a ingresar\nO espera {0} minutos".format(
                                        moment.duration(sss[1] - moment()).format("mm:ss")
                                    )
                                );
                                return_value = "false";
                                _window.API.LMSFinish("");
                            } else {
                                lastError = "0"; diagnostic = "";
                                state = states.Running;
                                sss[3] = parser;
                                saveInit(true);
                                _window.API.LMSGetValue("cmi.core.student_id");
                                _window.API.LMSGetValue("cmi.core.student_name");
                                _window.API.LMSGetValue("cmi.core.lesson_mode");
                                entry = _window.API.LMSGetValue("cmi.core.entry");
                                _window.API.LMSGetValue("cmi.core.credit");
                                _window.API.LMSGetValue("cmi.core.lesson_status");
                                _window.API.LMSGetValue("cmi.core.lesson_location");
                                _window.API.LMSGetValue("cmi.core.total_time");
                                setInterval(function() { saveInit(true); _window.API.LMSCommit(""); }, 225000);
                                if (entry === "ab-initio") {
                                    _window.API.LMSSetValue("cmi.core.exit", "suspend");
                                    _window.API.LMSSetValue("cmi.core.lesson_status", "incomplete");
                                } else if (entry === "resume") { _window.API.LMSSetValue("cmi.core.exit", "suspend"); }
                                _window.API.LMSCommit("");
                            }
                            cmi.savelog();
                        } else {
                            testError(command);
                            _window.API.LMSFinish("");
                        }
                    } catch (e) {
                        return_value = "false"; lastError = "101"; diagnostic = e.message;
                        console.log("{0}{1}".format(command, comment(param(return_value), moment())));
                        testError(command);
                    }
                    return return_value;
                },
                LMSFinish: function(parameter) {
                    try {
                        var return_value, command;
                        command = "API.LMSFinish({0});".format(param(parameter));
                        if (state === states.Running) {
                            if(minTimeOut){ minFunction(); }
                            if(maxTimeOut){ maxFunction(); }
                            console.log(comment("Auto set cmi.core.exit state"));
                            if (_window.API.LMSGetValue("cmi.core.lesson_status") === "incomplete") { _window.API.LMSSetValue("cmi.core.exit", "suspend"); }
                            else { _window.API.LMSSetValue("cmi.core.exit", ""); }
                            saveInit(false);
                        }
                        try{ lastError = undefined; diagnostic = undefined; return_value = ev(command); }
                        catch(e){
                            return_value = "false"; lastError = "101"; diagnostic = e.message;
                            console.log("{0}{1}".format(command, comment(param(return_value), moment())));
                        }
                        if (return_value === "true") {
                            lastError = "0"; diagnostic = "";
                            state = states.Terminated;
                            commit_timeout = clearTimeout(commit_timeout); commit_timeout = undefined;
                            commit_max_timeout = clearTimeout(commit_max_timeout); commit_max_timeout = undefined;
                            setTimeout(function() { document.close(); }, 0);
                            sleep(1000);
                        } else { testError(command); }
                        cmi.savelog();
                    } catch (e) {
                        return_value = "false"; lastError = "101"; diagnostic = e.message;
                        console.log("{0}{1}".format(command, comment(param(return_value), moment())));
                        testError(command);
                    }
                    return return_value;
                },
                LMSGetValue: function(parameter) {
                    try {
                        var return_value = cache[parameter], command;
                        command = "API.LMSGetValue({0});".format(param(parameter));
                        if (state === states.Running && return_value !== undefined) {
                            lastError = "0"; diagnostic = "";
                            console.log(comment("Return value from cache"));
                            console.log("\t\\\\{0}{1}".format(command, comment(param(return_value), moment())));
                            return return_value;
                        }
                        try{ lastError = undefined; diagnostic = undefined; return_value = ev(command); }
                        catch(e){
                            return_value = ""; lastError = "101"; diagnostic = e.message;
                            console.log("{0}{1}".format(command, comment(param(return_value))));
                        }
                        if (typeof return_value === "string" && !(return_value === "" && testError(command))) {
                            lastError = "0"; diagnostic = "";
                            if (parameter === "cmi.suspend_data") {
                                if(return_value === ""){ sss = [0, null, null, null, return_value]; }
                                else{
                                    try {
                                        sss = JSON.parse(return_value);
                                        if (sss.length === 5) { sss[1] = moment(sss[1]); }
                                        else if (sss.length === 3) { sss = [0, null, null, null, sss[2]]; }
                                        else if (sss.length === 2) { sss = [0, null, null, null, sss[1]]; }
                                        else { sss = [0, null, null, null, return_value]; }
                                        return_value = sss[4];
                                    } catch (e) { sss = [0, null, null, null, return_value]; }
                                }
                                suspend_data = return_value;
                            }
                            if (scormPlayerConfig.cache && !parameter.endsWith("._count")) { cache[parameter] = return_value; }
                            if (scormPlayerConfig.showCompleteBtn && parameter === "cmi.core.lesson_status" && return_value === "completed") { createbtn(); }
                        }
                    } catch (e) {
                        return_value = ""; lastError = "101"; diagnostic = e.message;
                        console.log("{0}{1}".format(command, comment(param(return_value))));
                        testError(command);
                    }
                    return return_value;
                },
                LMSSetValue: function(parameter_1, parameter_2, persist) {
                    try {
                        var tmp_value, command, return_value = "true";
                        if(scormPlayerConfig.parameter_2_string && parameter_2 !== undefined && typeof parameter_2 !== "string"){
                            console.log(comment("{0} parameter_2_string".format(param(parameter_2))));
                            parameter_2 = parameter_2 + "";
                        }
                        tmp_value = parameter_2;
                        if (parameter_1 === "cmi.suspend_data"){ sss[4] = parameter_2; tmp_value = JSON.stringify(sss); }
                        command = "API.LMSSetValue({0}, {1});".format(param(parameter_1), param(tmp_value));
                        if (
                            scormPlayerConfig.cache
                            && cache[parameter_1] === undefined
                            && parameter_1 !== "cmi.core.exit"
                            && parameter_1 !== "cmi.core.session_time"
                            && !parameter_1.startsWith("cmi.interactions.")
                        ) {
                            console.log(comment("Check current value before set"));
                            _window.API.LMSGetValue(parameter_1);
                        }
                        if (state === states.Running && cache[parameter_1] === parameter_2 && !persist) {
                            lastError = "0"; diagnostic = "";
                            console.log(comment("No change data"));
                            console.log("\t\\\\{0}{1}".format(command, comment(param(return_value), moment())));
                            return "true";
                        }
                        if (entry === "" && parameter_1 === "cmi.core.lesson_status" && parameter_2 === "incomplete") {
                            lastError = "0"; diagnostic = "";
                            console.log(comment("Block change lesson_status"));
                            console.log("\t\\\\{0}{1}".format(command, comment(param(return_value), moment())));
                            return return_value;
                        }
                        if (!scormPlayerConfig.allowFailed && parameter_1 === "cmi.core.lesson_status" && parameter_2 === "failed"){
                            lastError = "0"; diagnostic = "";
                            console.log(comment("Block failed status"));
                            console.log("\t\\\\{0}{1}".format(command, comment(param(return_value), moment())));
                            return return_value;
                        } 
                        if (parameter_1 === "cmi.core.lesson_status"){
                            sss[2] = moment.utc();
                            fetch("http://date.jsontest.com/")
                                .then(function(response) { if(response.ok){ return response.json(); } })
                                .then(function(data) { if(data){ sss[2] = moment.utc(data.milliseconds_since_epoch); } });
                        }
                        try{ lastError = undefined; diagnostic = undefined; return_value = ev(command); }
                        catch(e){
                            return_value = "false"; lastError = "101"; diagnostic = e.message;
                            console.log("{0}{1}".format(command, comment(param(return_value))));
                        }
                        if (return_value === "true") {
                            lastError = "0"; diagnostic = "";
                            changes = true;
                            if (scormPlayerConfig.autoCommitTime) {
                                clearTimeout(commit_timeout);
                                commit_timeout = setTimeout(
                                    function() { console.log(comment("Auto commit")); _window.API.LMSCommit(""); },
                                    scormPlayerConfig.autoCommitTime
                                );
                                if (!commit_max_timeout) {
                                    commit_max_timeout = setTimeout(
                                        function() { console.log(comment("Timeout 60secs without commit")); _window.API.LMSCommit(""); },
                                        scormPlayerConfig.autoCommitTime * 2
                                    );
                                }
                            }
                            if (scormPlayerConfig.cache) { cache[parameter_1] = parameter_2; }
                            if (parameter_1 === "cmi.suspend_data") { suspend_data = parameter_2; }
                            if (scormPlayerConfig.showCompleteBtn && parameter_1 === "cmi.core.lesson_status" && parameter_2 === "completed") { createbtn(); }
                            if (scormPlayerConfig.autoMinMax && parameter_1 === "cmi.core.score.raw"){
                                if(!cache["cmi.core.score.min"]){ minTimeOut = setTimeout(minFunction, 60000); }
                                if(!cache["cmi.core.score.max"]){ maxTimeOut = setTimeout(maxFunction, 60000); }
                            }
                            if (parameter_1 === "cmi.core.score.min"){ clearTimeout(minTimeOut); minTimeOut = undefined; }
                            if (parameter_1 === "cmi.core.score.max"){ clearTimeout(minTimeOut); minTimeOut = undefined; }
                        } else {
                            var rgx = /cmi[.]interactions[.]\d+[.]correct_responses[.]\d+[.]pattern/g;
                            if(rgx.test(parameter_1)){ console.log(comment("Error ignored")); }
                            else{ testError("API.LMSSetValue({0}, {1});".format(param(parameter_1), param(tmp_value).substring(0,10))); }
                        }
                    } catch (e) {
                        return_value = "false"; lastError = "101"; diagnostic = e.message;
                        console.log("{0}{1}".format(command, comment(param(return_value))));
                        testError("API.LMSSetValue({0}, {1});".format(param(parameter_1), param(tmp_value).substring(0,10)));
                    }
                    return return_value;
                },
                LMSCommit: function(parameter) {
                    try {
                        var return_value = "true", command;
                        command = "API.LMSCommit({0});".format(param(parameter));
                        if (scormPlayerConfig.commitOnlyChanges && !changes) {
                            lastError = "0"; diagnostic = "";
                            console.log(comment("No changes to commit"));
                            console.log("\t\\\\{0}{1}".format(command, comment(param(return_value), moment())));
                            return return_value;
                        }
                        try{ lastError = undefined; diagnostic = undefined; return_value = ev(command); }
                        catch(e){
                            return_value = "false"; lastError = "101"; diagnostic = e.message;
                            console.log(comment("Error: {0}".format(e.message)));
                            console.log("{0}{1}".format(command, comment(param(return_value), moment())));
                            alert("¡Ocurrio un error comunicate a RedEducativa!\API.LMSCommit: {0}".format(e.message));
                        }
                        if (return_value === "true") {
                            lastError = "0"; diagnostic = "";
                            last_commit = moment();
                            changes = false;
                            if (scormPlayerConfig.autoCommitTime) {
                                commit_timeout = clearTimeout(commit_timeout);
                                commit_max_timeout = clearTimeout(commit_max_timeout);
                            }
                        } else { testError(command); }
                    } catch (e) {
                        return_value = "false"; lastError = "101"; diagnostic = e.message;
                        console.log("{0}{1}".format(command, comment(param(return_value), moment())));
                        testError(command);
                    }
                    return return_value;
                },
                LMSGetLastError: function() {
                    try {
                        var command = "API.LMSGetLastError();";
                        if(lastError === undefined){ lastError = ev(command); }
                        else { console.log("\t\\\\{0}{1}".format(command, comment(param(lastError)))); }
                    } catch (e) {
                        lastError = "";
                        console.log(comment("Error: {0}".format(e.message)));
                        console.log("\t\\\\{0}{1}".format(command, comment(param(lastError))));
                        alert("¡Ocurrio un error comunicate a RedEducativa!\API.LMSGetLastError: {0}".format(e.message));
                    }
                    return lastError;
                },
                LMSGetErrorString: function(parameter) {
                    try {
                        var return_value, command;
                        command = "API.LMSGetErrorString({0});".format(param(parameter));
                        return_value = errorCache[parameter];
                        if(return_value === undefined){
                            return_value = ev(command);
                            errorCache[parameter] = return_value;
                        }else{ console.log("\t\\\\{0}{1}".format(command, comment(param(return_value)))); }
                    } catch (e) {
                        return_value = "";
                        console.log(comment("Error: {0}".format(e.message)));
                        console.log("{0}{1}".format(command, comment(param(return_value))));
                        alert("¡Ocurrio un error comunicate a RedEducativa!\API.LMSGetErrorString: {0}".format(e.message));
                    }
                    return return_value;
                },
                LMSGetDiagnostic: function(parameter) {
                    try {
                        var command = "API.LMSGetDiagnostic({0});".format(param(parameter));
                        if(diagnostic === undefined){ diagnostic = ev(command); }
                        else{ console.log("\t\\\\{0}{1}".format(command,comment(param(diagnostic)))); }
                    }catch (e) {
                        diagnostic = "";
                        console.log(comment("Error: {0}".format(e.message)));
                        console.log("\t\\\\{0}{1}".format(command,comment(param(diagnostic))));
                        alert("¡Ocurrio un error comunicate a RedEducativa!\API.LMSGetDiagnostic: {0}".format(e.message));
                    }
                    return diagnostic;
                },
                version: "0.0.20170828"
            };
        }
        ev("_window.API.version;");
        setInterval(
            function() {
                if (moment() - last_commit >= 10800000) {
                    console.log(comment("Innactive timeout 3Hrs"));
                    _window.API.LMSSetValue("cmi.core.exit", "time-out");
                    _window.API.LMSFinish("");
                }
            }, 60000
        );

        var session_time = 0;
        var focustime = moment();
        var blurtime = moment();

        addEventListener(window, 'unload', EventCache.flush);
        addEventListener(window, "beforeunload", function(e) {
            //http://stackoverflow.com/questions/7255649/window-onbeforeunload-not-working
            console.log(comment("beforeunload"));
            if (scormPlayerConfig.autoFinish && state === states.Running) {
                console.log(comment("Auto finish"));
                _window.API.LMSFinish("");
            }
            cmi.savelog();
            _window.API = _window._API;
            //(e || window.event).returnValue = "";
            //return null;
        });
        addEventListener(window, "blur", function() {
            var tmp = moment.duration(moment() - focustime);
            session_time += tmp;
            blurtime = moment();
            console.log(comment("blur Focus time: {0} Session time: {1}".format(tmp, moment.duration(session_time))));
        });
        addEventListener(window, "focus", function() {
            focustime = moment();
            console.log(comment("focus Blur time: {0}".format(moment.duration(moment() - blurtime))));
        });

        if (scormPlayerConfig.fillScreen && window.frameElement) {
            var startF = moment();
            var currentElement = fillwindow(window.frameElement);
            if(window.parent.frameElement){ fillwindow(window.parent.frameElement); }
            currentElement = window.frameElement;
            currentElement.style.backgroundColor = "white";
            currentElement.parentElement.style.backgroundColor = "black";
            if (scormPlayerConfig.scale) {
                currentElement.style.width = scormPlayerConfig.scale[0] + "px";
                currentElement.style.height = scormPlayerConfig.scale[1] + "px";
                currentElement.style.margin = "auto";
                currentElement.style.left = "0";
                currentElement.style.right = "0";
                currentElement.style.top = "0";
                currentElement.style.bottom = "0";
                currentElement.style.minWidth = null;
                currentElement.style.minHeight = null;
                currentElement.parentElement.style.minWidth = scormPlayerConfig.scale[0] + "px";
                currentElement.parentElement.style.minHeight = scormPlayerConfig.scale[1] + "px";
                currentElement.parentElement.style.left = "0";
                currentElement.parentElement.style.right = "0";
                //_window.addEventListener("resize", resize);
                //resize();
            }
            console.log(comment("FillScreen", startF));
        }

        cmi.log = console.log;
        window.focus();

        var log_location = localStorage.getItem("log_location");
        log_location =
            log_location === null || isNaN(localStorage.getItem("log_location")) || Number(log_location) >= 14 ? 0 : Number(log_location) + 1;

        localStorage.setItem("log_location", log_location);
        log_location = "log_" + log_location;
        console.log(comment("log_location: {0}".format(log_location)));
        cmi.savelog = function() {
            console.log(comment("savelog"));
            try { localStorage.setItem(log_location, JSON.stringify(log)); } catch (e) { setlocals(); }
        }
        cmi.savelog();

        if (scormPlayerConfig.autoInitialize) {
            console.log(comment("Auto initialize"));
            _window.API.LMSInitialize("");
        }
        cmi.savelog();
    } catch (error) {
        window.console.log(error.message);
        console.log(comment("Error in scormPlayer: {0}".format(error.message)));
        alert("¡Ocurrio un error comunicate a RedEducativa!\nscormPlayer: {0}".format(error.message + (error.lineNumber ? error.lineNumber : "")));
    }
    function fillwindow(currentElement){
        var slibings, i;
        do {
            currentElement.style.margin = "0px";
            currentElement.style.padding = "0px";
            currentElement.style.border = "none";
            currentElement.style.minWidth = "100%";
            currentElement.style.maxWidth = "100%";
            currentElement.style.minHeight = "100%";
            currentElement.style.maxHeight = "100%";
            currentElement.style.overflow = "initial";
            currentElement.style.display = "inline-block";
            currentElement.style.position = "absolute";
            currentElement.style.width = null;
            currentElement.style.height = null;
            if (currentElement.parentElement) {
                slibings = currentElement.parentElement.childElements ?
                    currentElement.parentElement.childElements() :
                    currentElement.parentElement.childNodes;
                for (i = 0; i < slibings.length; i++) {
                    if (slibings[i].style && slibings[i] !== currentElement) { slibings[i].style.display = "none"; }
                }
            }
        } while (currentElement.parentElement && (currentElement = currentElement.parentElement))
        return currentElement;
    }
    function minFunction(){
        if(minTimeOut){ clearTimeout(minTimeOut); minTimeOut = undefined; }
        console.log(comment("Auto score min"));
        _window.API.LMSSetValue("cmi.core.score.min", scormPlayerConfig.autoMinMax[0] + "");
    };
    function maxFunction(){
        if(minTimeOut){ clearTimeout(minTimeOut); minTimeOut = undefined; }
        console.log(comment("Auto score max"));
        _window.API.LMSSetValue("cmi.core.score.max", scormPlayerConfig.autoMinMax[1] + "");
    };
    function ev(command) {
        var start = moment(), return_value;
        return_value = eval(command);
        console.log(
            "{0}{1}".format(command, comment(param(typeof return_value === "object" ? JSON.stringify(return_value): return_value), start))
        );
        return return_value;
    }
    function resize() {
        //http://stackoverflow.com/questions/1373035/how-do-i-scale-one-rectangle-to-the-maximum-size-possible-within-another-rectang
        var container = _window, wrapper = window.frameElement;
        wrapper.style.transform = "scale(" + Math.min(container.innerWidth / wrapper.offsetWidth, container.innerHeight / wrapper.offsetHeight) + ")";
    }
    function createbtn() {
        var x = document.createElement("input");
        x.setAttribute("type", "button"); x.setAttribute("value", "Completar"); x.style.backgroundColor = "#4CAF50";
        x.style.border = "none"; x.style.color = "white"; x.style.padding = "15px 32px"; x.style.borderRadius = "20px";
        x.style.fontSize = "16px"; x.style.margin = "4px 2px"; x.style.cursor = "pointer"; x.style.position = "fixed";
        x.style.bottom = "20px"; x.style.right = "20px";
        x.addEventListener("click", function() {
            console.log(comment("CompleteBtn click"));
            _window.history.back();
        });
        _window.document.body.appendChild(x);
        console.log(comment("scormPlayerConfig.showCompleteBtn"));
    }
    function addEventListener(obj, events, fn) {
        //https://stackoverflow.com/questions/2657182/correct-usage-of-addeventlistener-attachevent/8873330#8873330
        if (typeof events === "string") { events = events.split(" "); }
        for (var i = 0, evt; i < events.length; i++) {
            evt = events[i];
            if (obj.addEventListener) { obj.addEventListener(evt, fn, false); EventCache.add(obj, evt, fn); }
            else if (obj.attachEvent) {
                obj["e" + evt + fn] = fn;
                obj[evt + fn] = function() { obj["e" + evt + fn](window.event); }
                obj.attachEvent("on" + evt, obj[evt + fn]);
                EventCache.add(obj, evt, fn);
            } else { obj["on" + evt] = obj["e" + evt + fn]; }
        }
    }
    function sleep(milliseconds) {
        //http://stackoverflow.com/questions/16873323/javascript-sleep-wait-before-continuing
        var start = new Date().getTime();
        while ((new Date() - start) < milliseconds) { }
        console.log(comment("sleep", moment(start)));
    }
    function executeOnce() {
        //https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
        //http://stackoverflow.com/questions/532635/javascript-cookie-with-no-expiration-date
        //http://www.w3schools.com/js/js_cookies.asp
        //(new Date(2038, 1, 19, 04, 14, 07, 0)).toUTCString()
        var argc = arguments.length, bImplGlob = typeof arguments[argc - 1] === "string";
        if (bImplGlob) { argc++; }
        if (argc < 3) { throw new TypeError("executeOnce - not enough arguments"); }
        var fExec = arguments[0], sKey = arguments[argc - 2];
        if (typeof fExec !== "function") { throw new TypeError("executeOnce - first argument must be a function"); }
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { throw new TypeError("executeOnce - invalid identifier"); }
        if (decodeURIComponent(window.document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) === "1") { return false; }
        fExec.apply(argc > 3 ? arguments[1] : null, argc > 4 ? Array.prototype.slice.call(arguments, 2, argc - 2) : []);
        window.document.cookie = encodeURIComponent(sKey) + "=1; expires=Fri, 19 Feb 2038 10:14:07 GMT" + (bImplGlob || !arguments[argc - 1] ? "; path=/" : "");
        return true;
    }
    function comment(comment, startF) {
        var end = moment();
        return "\t\\\\{0}\t{1}\t{2}\t{3}".format(
            comment,
            (startF ? startF : end).format("YYYY-MM-DDThh:mm:ss.SSSZ"),
            moment.duration(end - scormPlayer.start).format("HH:mm:ss.SSS"),
            moment.duration(startF ? end - startF : 0).format("HH:mm:ss.SSS")
        );
    }
    function testError(command) {
        _window.API.LMSGetLastError();
        if (lastError !== "0") {
            var es = _window.API.LMSGetErrorString(lastError);
            _window.API.LMSGetDiagnostic("");
            alert("¡Ocurrio un error! comunicate a RedEducativa\nLlamada: {0}\nNúmero de error: {1}\nError: {2}\nDiagnostico: {3}".format(command,lastError,es,diagnostic));
            return true;
        }else{ diagnostic = ""; }
    }
    function newguid() {
        //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
    function saveInit(inUse) {
        sss[0] = inUse ? 1 : 0;
        sss[1] = moment();
        _window.API.LMSSetValue("cmi.suspend_data", sss[4], true);
        cmi.savelog();
        console.log(comment("SaveInit"));
    }
    function param(param) { return JSON.stringify(param); }
    function setlocals() {
        console.log(comment("¡¡LocalStorage not supported!!"));
        localStorage = { getItem: function() { return null; }, setItem: function() { }, removeItem: function() { } }
    }
    function dispatchEvent(name) {
        //http://stackoverflow.com/questions/2490825/how-to-trigger-event-in-javascript
        var event; // The custom event that will be created
        if (document.createEvent) { event = document.createEvent("HTMLEvents"); event.initEvent(name, true, true); }
        else { event = document.createEventObject(); event.eventType = name; }
        event.eventName = name;
        if (document.createEvent) { document.documentElement.dispatchEvent(event); }
        else { document.documentElement.fireEvent("on" + event.eventType, event); }
    }
}

var top = { window: { close: function() { } } };