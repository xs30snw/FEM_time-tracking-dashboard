!function(){var t={9662:function(t,r,n){var e=n(7854),o=n(614),i=n(6330),c=e.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not a function")}},9483:function(t,r,n){var e=n(7854),o=n(4411),i=n(6330),c=e.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not a constructor")}},6077:function(t,r,n){var e=n(7854),o=n(614),i=e.String,c=e.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw c("Can't set "+i(t)+" as a prototype")}},5787:function(t,r,n){var e=n(7854),o=n(7976),i=e.TypeError;t.exports=function(t,r){if(o(r,t))return t;throw i("Incorrect invocation")}},9670:function(t,r,n){var e=n(7854),o=n(111),i=e.String,c=e.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not an object")}},8533:function(t,r,n){"use strict";var e=n(2092).forEach,o=n(9341)("forEach");t.exports=o?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},1318:function(t,r,n){var e=n(5656),o=n(1400),i=n(6244),c=function(t){return function(r,n,c){var u,a=e(r),f=i(a),s=o(c,f);if(t&&n!=n){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},2092:function(t,r,n){var e=n(9974),o=n(1702),i=n(8361),c=n(7908),u=n(6244),a=n(5417),f=o([].push),s=function(t){var r=1==t,n=2==t,o=3==t,s=4==t,p=6==t,l=7==t,v=5==t||p;return function(h,y,d,m){for(var g,x,w=c(h),b=i(w),S=e(y,d),j=u(b),E=0,L=m||a,O=r?L(h,j):n||l?L(h,0):void 0;j>E;E++)if((v||E in b)&&(x=S(g=b[E],E,w),t))if(r)O[E]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:f(O,g)}else switch(t){case 4:return!1;case 7:f(O,g)}return p?-1:o||s?s:O}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},1194:function(t,r,n){var e=n(7293),o=n(5112),i=n(7392),c=o("species");t.exports=function(t){return i>=51||!e((function(){var r=[];return(r.constructor={})[c]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},9341:function(t,r,n){"use strict";var e=n(7293);t.exports=function(t,r){var n=[][t];return!!n&&e((function(){n.call(null,r||function(){throw 1},1)}))}},206:function(t,r,n){var e=n(1702);t.exports=e([].slice)},7475:function(t,r,n){var e=n(7854),o=n(3157),i=n(4411),c=n(111),u=n(5112)("species"),a=e.Array;t.exports=function(t){var r;return o(t)&&(r=t.constructor,(i(r)&&(r===a||o(r.prototype))||c(r)&&null===(r=r[u]))&&(r=void 0)),void 0===r?a:r}},5417:function(t,r,n){var e=n(7475);t.exports=function(t,r){return new(e(t))(0===r?0:r)}},7072:function(t,r,n){var e=n(5112)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[e]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var n=!1;try{var i={};i[e]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},4326:function(t,r,n){var e=n(1702),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,r,n){var e=n(7854),o=n(1694),i=n(614),c=n(4326),u=n(5112)("toStringTag"),a=e.Object,f="Arguments"==c(function(){return arguments}());t.exports=o?c:function(t){var r,n,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(t){}}(r=a(t),u))?n:f?c(r):"Object"==(e=c(r))&&i(r.callee)?"Arguments":e}},9920:function(t,r,n){var e=n(2597),o=n(3887),i=n(1236),c=n(3070);t.exports=function(t,r){for(var n=o(r),u=c.f,a=i.f,f=0;f<n.length;f++){var s=n[f];e(t,s)||u(t,s,a(r,s))}}},8880:function(t,r,n){var e=n(9781),o=n(3070),i=n(9114);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},9114:function(t){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},6135:function(t,r,n){"use strict";var e=n(4948),o=n(3070),i=n(9114);t.exports=function(t,r,n){var c=e(r);c in t?o.f(t,c,i(0,n)):t[c]=n}},9781:function(t,r,n){var e=n(7293);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,r,n){var e=n(7854),o=n(111),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(t,r,n){var e=n(317)("span").classList,o=e&&e.constructor&&e.constructor.prototype;t.exports=o===Object.prototype?void 0:o},7871:function(t){t.exports="object"==typeof window},1528:function(t,r,n){var e=n(8113),o=n(7854);t.exports=/ipad|iphone|ipod/i.test(e)&&void 0!==o.Pebble},6833:function(t,r,n){var e=n(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(e)},5268:function(t,r,n){var e=n(4326),o=n(7854);t.exports="process"==e(o.process)},1036:function(t,r,n){var e=n(8113);t.exports=/web0s(?!.*chrome)/i.test(e)},8113:function(t,r,n){var e=n(5005);t.exports=e("navigator","userAgent")||""},7392:function(t,r,n){var e,o,i=n(7854),c=n(8113),u=i.process,a=i.Deno,f=u&&u.versions||a&&a.version,s=f&&f.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,r,n){var e=n(7854),o=n(1236).f,i=n(8880),c=n(1320),u=n(3505),a=n(9920),f=n(4705);t.exports=function(t,r){var n,s,p,l,v,h=t.target,y=t.global,d=t.stat;if(n=y?e:d?e[h]||u(h,{}):(e[h]||{}).prototype)for(s in r){if(l=r[s],p=t.noTargetGet?(v=o(n,s))&&v.value:n[s],!f(y?s:h+(d?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),c(n,s,l,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},2104:function(t){var r=Function.prototype,n=r.apply,e=r.bind,o=r.call;t.exports="object"==typeof Reflect&&Reflect.apply||(e?o.bind(n):function(){return o.apply(n,arguments)})},9974:function(t,r,n){var e=n(1702),o=n(9662),i=e(e.bind);t.exports=function(t,r){return o(t),void 0===r?t:i?i(t,r):function(){return t.apply(r,arguments)}}},6916:function(t){var r=Function.prototype.call;t.exports=r.bind?r.bind(r):function(){return r.apply(r,arguments)}},6530:function(t,r,n){var e=n(9781),o=n(2597),i=Function.prototype,c=e&&Object.getOwnPropertyDescriptor,u=o(i,"name"),a=u&&"something"===function(){}.name,f=u&&(!e||e&&c(i,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:f}},1702:function(t){var r=Function.prototype,n=r.bind,e=r.call,o=n&&n.bind(e);t.exports=n?function(t){return t&&o(e,t)}:function(t){return t&&function(){return e.apply(t,arguments)}}},5005:function(t,r,n){var e=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,r){return arguments.length<2?i(e[t]):e[t]&&e[t][r]}},1246:function(t,r,n){var e=n(648),o=n(8173),i=n(7497),c=n(5112)("iterator");t.exports=function(t){if(null!=t)return o(t,c)||o(t,"@@iterator")||i[e(t)]}},8554:function(t,r,n){var e=n(7854),o=n(6916),i=n(9662),c=n(9670),u=n(6330),a=n(1246),f=e.TypeError;t.exports=function(t,r){var n=arguments.length<2?a(t):r;if(i(n))return c(o(n,t));throw f(u(t)+" is not iterable")}},8173:function(t,r,n){var e=n(9662);t.exports=function(t,r){var n=t[r];return null==n?void 0:e(n)}},7854:function(t,r,n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,r,n){var e=n(1702),o=n(7908),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},3501:function(t){t.exports={}},842:function(t,r,n){var e=n(7854);t.exports=function(t,r){var n=e.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,r))}},490:function(t,r,n){var e=n(5005);t.exports=e("document","documentElement")},4664:function(t,r,n){var e=n(9781),o=n(7293),i=n(317);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,r,n){var e=n(7854),o=n(1702),i=n(7293),c=n(4326),u=e.Object,a=o("".split);t.exports=i((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==c(t)?a(t,""):u(t)}:u},2788:function(t,r,n){var e=n(1702),o=n(614),i=n(5465),c=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return c(t)}),t.exports=i.inspectSource},9909:function(t,r,n){var e,o,i,c=n(8536),u=n(7854),a=n(1702),f=n(111),s=n(8880),p=n(2597),l=n(5465),v=n(6200),h=n(3501),y="Object already initialized",d=u.TypeError,m=u.WeakMap;if(c||l.state){var g=l.state||(l.state=new m),x=a(g.get),w=a(g.has),b=a(g.set);e=function(t,r){if(w(g,t))throw new d(y);return r.facade=t,b(g,t,r),r},o=function(t){return x(g,t)||{}},i=function(t){return w(g,t)}}else{var S=v("state");h[S]=!0,e=function(t,r){if(p(t,S))throw new d(y);return r.facade=t,s(t,S,r),r},o=function(t){return p(t,S)?t[S]:{}},i=function(t){return p(t,S)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(r){var n;if(!f(r)||(n=o(r)).type!==t)throw d("Incompatible receiver, "+t+" required");return n}}}},7659:function(t,r,n){var e=n(5112),o=n(7497),i=e("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},3157:function(t,r,n){var e=n(4326);t.exports=Array.isArray||function(t){return"Array"==e(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,r,n){var e=n(1702),o=n(7293),i=n(614),c=n(648),u=n(5005),a=n(2788),f=function(){},s=[],p=u("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=e(l.exec),h=!l.exec(f),y=function(t){if(!i(t))return!1;try{return p(f,s,t),!0}catch(t){return!1}};t.exports=!p||o((function(){var t;return y(y.call)||!y(Object)||!y((function(){t=!0}))||t}))?function(t){if(!i(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return h||!!v(l,a(t))}:y},4705:function(t,r,n){var e=n(7293),o=n(614),i=/#|\.prototype\./,c=function(t,r){var n=a[u(t)];return n==s||n!=f&&(o(r)?e(r):!!r)},u=c.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=c.data={},f=c.NATIVE="N",s=c.POLYFILL="P";t.exports=c},111:function(t,r,n){var e=n(614);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},1913:function(t){t.exports=!1},2190:function(t,r,n){var e=n(7854),o=n(5005),i=n(614),c=n(7976),u=n(3307),a=e.Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var r=o("Symbol");return i(r)&&c(r.prototype,a(t))}},408:function(t,r,n){var e=n(7854),o=n(9974),i=n(6916),c=n(9670),u=n(6330),a=n(7659),f=n(6244),s=n(7976),p=n(8554),l=n(1246),v=n(9212),h=e.TypeError,y=function(t,r){this.stopped=t,this.result=r},d=y.prototype;t.exports=function(t,r,n){var e,m,g,x,w,b,S,j=n&&n.that,E=!(!n||!n.AS_ENTRIES),L=!(!n||!n.IS_ITERATOR),O=!(!n||!n.INTERRUPTED),T=o(r,j),P=function(t){return e&&v(e,"normal",t),new y(!0,t)},_=function(t){return E?(c(t),O?T(t[0],t[1],P):T(t[0],t[1])):O?T(t,P):T(t)};if(L)e=t;else{if(!(m=l(t)))throw h(u(t)+" is not iterable");if(a(m)){for(g=0,x=f(t);x>g;g++)if((w=_(t[g]))&&s(d,w))return w;return new y(!1)}e=p(t,m)}for(b=e.next;!(S=i(b,e)).done;){try{w=_(S.value)}catch(t){v(e,"throw",t)}if("object"==typeof w&&w&&s(d,w))return w}return new y(!1)}},9212:function(t,r,n){var e=n(6916),o=n(9670),i=n(8173);t.exports=function(t,r,n){var c,u;o(t);try{if(!(c=i(t,"return"))){if("throw"===r)throw n;return n}c=e(c,t)}catch(t){u=!0,c=t}if("throw"===r)throw n;if(u)throw c;return o(c),n}},7497:function(t){t.exports={}},6244:function(t,r,n){var e=n(7466);t.exports=function(t){return e(t.length)}},5948:function(t,r,n){var e,o,i,c,u,a,f,s,p=n(7854),l=n(9974),v=n(1236).f,h=n(261).set,y=n(6833),d=n(1528),m=n(1036),g=n(5268),x=p.MutationObserver||p.WebKitMutationObserver,w=p.document,b=p.process,S=p.Promise,j=v(p,"queueMicrotask"),E=j&&j.value;E||(e=function(){var t,r;for(g&&(t=b.domain)&&t.exit();o;){r=o.fn,o=o.next;try{r()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},y||g||m||!x||!w?!d&&S&&S.resolve?((f=S.resolve(void 0)).constructor=S,s=l(f.then,f),c=function(){s(e)}):g?c=function(){b.nextTick(e)}:(h=l(h,p),c=function(){h(e)}):(u=!0,a=w.createTextNode(""),new x(e).observe(a,{characterData:!0}),c=function(){a.data=u=!u})),t.exports=E||function(t){var r={fn:t,next:void 0};i&&(i.next=r),o||(o=r,c()),i=r}},3366:function(t,r,n){var e=n(7854);t.exports=e.Promise},133:function(t,r,n){var e=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},8536:function(t,r,n){var e=n(7854),o=n(614),i=n(2788),c=e.WeakMap;t.exports=o(c)&&/native code/.test(i(c))},8523:function(t,r,n){"use strict";var e=n(9662),o=function(t){var r,n;this.promise=new t((function(t,e){if(void 0!==r||void 0!==n)throw TypeError("Bad Promise constructor");r=t,n=e})),this.resolve=e(r),this.reject=e(n)};t.exports.f=function(t){return new o(t)}},3070:function(t,r,n){var e=n(7854),o=n(9781),i=n(4664),c=n(9670),u=n(4948),a=e.TypeError,f=Object.defineProperty;r.f=o?f:function(t,r,n){if(c(t),r=u(r),c(n),i)try{return f(t,r,n)}catch(t){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},1236:function(t,r,n){var e=n(9781),o=n(6916),i=n(5296),c=n(9114),u=n(5656),a=n(4948),f=n(2597),s=n(4664),p=Object.getOwnPropertyDescriptor;r.f=e?p:function(t,r){if(t=u(t),r=a(r),s)try{return p(t,r)}catch(t){}if(f(t,r))return c(!o(i.f,t,r),t[r])}},8006:function(t,r,n){var e=n(6324),o=n(748).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},5181:function(t,r){r.f=Object.getOwnPropertySymbols},7976:function(t,r,n){var e=n(1702);t.exports=e({}.isPrototypeOf)},6324:function(t,r,n){var e=n(1702),o=n(2597),i=n(5656),c=n(1318).indexOf,u=n(3501),a=e([].push);t.exports=function(t,r){var n,e=i(t),f=0,s=[];for(n in e)!o(u,n)&&o(e,n)&&a(s,n);for(;r.length>f;)o(e,n=r[f++])&&(~c(s,n)||a(s,n));return s}},5296:function(t,r){"use strict";var n={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!n.call({1:2},1);r.f=o?function(t){var r=e(this,t);return!!r&&r.enumerable}:n},7674:function(t,r,n){var e=n(1702),o=n(9670),i=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=e(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),r=n instanceof Array}catch(t){}return function(n,e){return o(n),i(e),r?t(n,e):n.__proto__=e,n}}():void 0)},288:function(t,r,n){"use strict";var e=n(1694),o=n(648);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},2140:function(t,r,n){var e=n(7854),o=n(6916),i=n(614),c=n(111),u=e.TypeError;t.exports=function(t,r){var n,e;if("string"===r&&i(n=t.toString)&&!c(e=o(n,t)))return e;if(i(n=t.valueOf)&&!c(e=o(n,t)))return e;if("string"!==r&&i(n=t.toString)&&!c(e=o(n,t)))return e;throw u("Can't convert object to primitive value")}},3887:function(t,r,n){var e=n(5005),o=n(1702),i=n(8006),c=n(5181),u=n(9670),a=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var r=i.f(u(t)),n=c.f;return n?a(r,n(t)):r}},2534:function(t){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},9478:function(t,r,n){var e=n(9670),o=n(111),i=n(8523);t.exports=function(t,r){if(e(t),o(r)&&r.constructor===t)return r;var n=i.f(t);return(0,n.resolve)(r),n.promise}},2248:function(t,r,n){var e=n(1320);t.exports=function(t,r,n){for(var o in r)e(t,o,r[o],n);return t}},1320:function(t,r,n){var e=n(7854),o=n(614),i=n(2597),c=n(8880),u=n(3505),a=n(2788),f=n(9909),s=n(6530).CONFIGURABLE,p=f.get,l=f.enforce,v=String(String).split("String");(t.exports=function(t,r,n,a){var f,p=!!a&&!!a.unsafe,h=!!a&&!!a.enumerable,y=!!a&&!!a.noTargetGet,d=a&&void 0!==a.name?a.name:r;o(n)&&("Symbol("===String(d).slice(0,7)&&(d="["+String(d).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||s&&n.name!==d)&&c(n,"name",d),(f=l(n)).source||(f.source=v.join("string"==typeof d?d:""))),t!==e?(p?!y&&t[r]&&(h=!0):delete t[r],h?t[r]=n:c(t,r,n)):h?t[r]=n:u(r,n)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||a(this)}))},4488:function(t,r,n){var e=n(7854).TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},3505:function(t,r,n){var e=n(7854),o=Object.defineProperty;t.exports=function(t,r){try{o(e,t,{value:r,configurable:!0,writable:!0})}catch(n){e[t]=r}return r}},6340:function(t,r,n){"use strict";var e=n(5005),o=n(3070),i=n(5112),c=n(9781),u=i("species");t.exports=function(t){var r=e(t),n=o.f;c&&r&&!r[u]&&n(r,u,{configurable:!0,get:function(){return this}})}},8003:function(t,r,n){var e=n(3070).f,o=n(2597),i=n(5112)("toStringTag");t.exports=function(t,r,n){t&&!o(t=n?t:t.prototype,i)&&e(t,i,{configurable:!0,value:r})}},6200:function(t,r,n){var e=n(2309),o=n(9711),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,r,n){var e=n(7854),o=n(3505),i="__core-js_shared__",c=e[i]||o(i,{});t.exports=c},2309:function(t,r,n){var e=n(1913),o=n(5465);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.19.1",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6707:function(t,r,n){var e=n(9670),o=n(9483),i=n(5112)("species");t.exports=function(t,r){var n,c=e(t).constructor;return void 0===c||null==(n=e(c)[i])?r:o(n)}},261:function(t,r,n){var e,o,i,c,u=n(7854),a=n(2104),f=n(9974),s=n(614),p=n(2597),l=n(7293),v=n(490),h=n(206),y=n(317),d=n(6833),m=n(5268),g=u.setImmediate,x=u.clearImmediate,w=u.process,b=u.Dispatch,S=u.Function,j=u.MessageChannel,E=u.String,L=0,O={};try{e=u.location}catch(t){}var T=function(t){if(p(O,t)){var r=O[t];delete O[t],r()}},P=function(t){return function(){T(t)}},_=function(t){T(t.data)},k=function(t){u.postMessage(E(t),e.protocol+"//"+e.host)};g&&x||(g=function(t){var r=h(arguments,1);return O[++L]=function(){a(s(t)?t:S(t),void 0,r)},o(L),L},x=function(t){delete O[t]},m?o=function(t){w.nextTick(P(t))}:b&&b.now?o=function(t){b.now(P(t))}:j&&!d?(c=(i=new j).port2,i.port1.onmessage=_,o=f(c.postMessage,c)):u.addEventListener&&s(u.postMessage)&&!u.importScripts&&e&&"file:"!==e.protocol&&!l(k)?(o=k,u.addEventListener("message",_,!1)):o="onreadystatechange"in y("script")?function(t){v.appendChild(y("script")).onreadystatechange=function(){v.removeChild(this),T(t)}}:function(t){setTimeout(P(t),0)}),t.exports={set:g,clear:x}},1400:function(t,r,n){var e=n(9303),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},5656:function(t,r,n){var e=n(8361),o=n(4488);t.exports=function(t){return e(o(t))}},9303:function(t){var r=Math.ceil,n=Math.floor;t.exports=function(t){var e=+t;return e!=e||0===e?0:(e>0?n:r)(e)}},7466:function(t,r,n){var e=n(9303),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},7908:function(t,r,n){var e=n(7854),o=n(4488),i=e.Object;t.exports=function(t){return i(o(t))}},7593:function(t,r,n){var e=n(7854),o=n(6916),i=n(111),c=n(2190),u=n(8173),a=n(2140),f=n(5112),s=e.TypeError,p=f("toPrimitive");t.exports=function(t,r){if(!i(t)||c(t))return t;var n,e=u(t,p);if(e){if(void 0===r&&(r="default"),n=o(e,t,r),!i(n)||c(n))return n;throw s("Can't convert object to primitive value")}return void 0===r&&(r="number"),a(t,r)}},4948:function(t,r,n){var e=n(7593),o=n(2190);t.exports=function(t){var r=e(t,"string");return o(r)?r:r+""}},1694:function(t,r,n){var e={};e[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(e)},6330:function(t,r,n){var e=n(7854).String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},9711:function(t,r,n){var e=n(1702),o=0,i=Math.random(),c=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+c(++o+i,36)}},3307:function(t,r,n){var e=n(133);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,r,n){var e=n(7854),o=n(2309),i=n(2597),c=n(9711),u=n(133),a=n(3307),f=o("wks"),s=e.Symbol,p=s&&s.for,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){if(!i(f,t)||!u&&"string"!=typeof f[t]){var r="Symbol."+t;u&&i(s,t)?f[t]=s[t]:f[t]=a&&p?p(r):l(r)}return f[t]}},2222:function(t,r,n){"use strict";var e=n(2109),o=n(7854),i=n(7293),c=n(3157),u=n(111),a=n(7908),f=n(6244),s=n(6135),p=n(5417),l=n(1194),v=n(5112),h=n(7392),y=v("isConcatSpreadable"),d=9007199254740991,m="Maximum allowed index exceeded",g=o.TypeError,x=h>=51||!i((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),w=l("concat"),b=function(t){if(!u(t))return!1;var r=t[y];return void 0!==r?!!r:c(t)};e({target:"Array",proto:!0,forced:!x||!w},{concat:function(t){var r,n,e,o,i,c=a(this),u=p(c,0),l=0;for(r=-1,e=arguments.length;r<e;r++)if(b(i=-1===r?c:arguments[r])){if(l+(o=f(i))>d)throw g(m);for(n=0;n<o;n++,l++)n in i&&s(u,l,i[n])}else{if(l>=d)throw g(m);s(u,l++,i)}return u.length=l,u}})},1539:function(t,r,n){var e=n(1694),o=n(1320),i=n(288);e||o(Object.prototype,"toString",i,{unsafe:!0})},8674:function(t,r,n){"use strict";var e,o,i,c,u=n(2109),a=n(1913),f=n(7854),s=n(5005),p=n(6916),l=n(3366),v=n(1320),h=n(2248),y=n(7674),d=n(8003),m=n(6340),g=n(9662),x=n(614),w=n(111),b=n(5787),S=n(2788),j=n(408),E=n(7072),L=n(6707),O=n(261).set,T=n(5948),P=n(9478),_=n(842),k=n(8523),M=n(2534),A=n(9909),F=n(4705),R=n(5112),C=n(7871),I=n(5268),N=n(7392),G=R("species"),D="Promise",q=A.get,V=A.set,H=A.getterFor(D),z=l&&l.prototype,B=l,U=z,W=f.TypeError,Y=f.document,K=f.process,X=k.f,$=X,J=!!(Y&&Y.createEvent&&f.dispatchEvent),Q=x(f.PromiseRejectionEvent),Z="unhandledrejection",tt=!1,rt=F(D,(function(){var t=S(B),r=t!==String(B);if(!r&&66===N)return!0;if(a&&!U.finally)return!0;if(N>=51&&/native code/.test(t))return!1;var n=new B((function(t){t(1)})),e=function(t){t((function(){}),(function(){}))};return(n.constructor={})[G]=e,!(tt=n.then((function(){}))instanceof e)||!r&&C&&!Q})),nt=rt||!E((function(t){B.all(t).catch((function(){}))})),et=function(t){var r;return!(!w(t)||!x(r=t.then))&&r},ot=function(t,r){if(!t.notified){t.notified=!0;var n=t.reactions;T((function(){for(var e=t.value,o=1==t.state,i=0;n.length>i;){var c,u,a,f=n[i++],s=o?f.ok:f.fail,l=f.resolve,v=f.reject,h=f.domain;try{s?(o||(2===t.rejection&&at(t),t.rejection=1),!0===s?c=e:(h&&h.enter(),c=s(e),h&&(h.exit(),a=!0)),c===f.promise?v(W("Promise-chain cycle")):(u=et(c))?p(u,c,l,v):l(c)):v(e)}catch(t){h&&!a&&h.exit(),v(t)}}t.reactions=[],t.notified=!1,r&&!t.rejection&&ct(t)}))}},it=function(t,r,n){var e,o;J?((e=Y.createEvent("Event")).promise=r,e.reason=n,e.initEvent(t,!1,!0),f.dispatchEvent(e)):e={promise:r,reason:n},!Q&&(o=f["on"+t])?o(e):t===Z&&_("Unhandled promise rejection",n)},ct=function(t){p(O,f,(function(){var r,n=t.facade,e=t.value;if(ut(t)&&(r=M((function(){I?K.emit("unhandledRejection",e,n):it(Z,n,e)})),t.rejection=I||ut(t)?2:1,r.error))throw r.value}))},ut=function(t){return 1!==t.rejection&&!t.parent},at=function(t){p(O,f,(function(){var r=t.facade;I?K.emit("rejectionHandled",r):it("rejectionhandled",r,t.value)}))},ft=function(t,r,n){return function(e){t(r,e,n)}},st=function(t,r,n){t.done||(t.done=!0,n&&(t=n),t.value=r,t.state=2,ot(t,!0))},pt=function(t,r,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===r)throw W("Promise can't be resolved itself");var e=et(r);e?T((function(){var n={done:!1};try{p(e,r,ft(pt,n,t),ft(st,n,t))}catch(r){st(n,r,t)}})):(t.value=r,t.state=1,ot(t,!1))}catch(r){st({done:!1},r,t)}}};if(rt&&(U=(B=function(t){b(this,U),g(t),p(e,this);var r=q(this);try{t(ft(pt,r),ft(st,r))}catch(t){st(r,t)}}).prototype,(e=function(t){V(this,{type:D,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=h(U,{then:function(t,r){var n=H(this),e=n.reactions,o=X(L(this,B));return o.ok=!x(t)||t,o.fail=x(r)&&r,o.domain=I?K.domain:void 0,n.parent=!0,e[e.length]=o,0!=n.state&&ot(n,!1),o.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new e,r=q(t);this.promise=t,this.resolve=ft(pt,r),this.reject=ft(st,r)},k.f=X=function(t){return t===B||t===i?new o(t):$(t)},!a&&x(l)&&z!==Object.prototype)){c=z.then,tt||(v(z,"then",(function(t,r){var n=this;return new B((function(t,r){p(c,n,t,r)})).then(t,r)}),{unsafe:!0}),v(z,"catch",U.catch,{unsafe:!0}));try{delete z.constructor}catch(t){}y&&y(z,U)}u({global:!0,wrap:!0,forced:rt},{Promise:B}),d(B,D,!1,!0),m(D),i=s(D),u({target:D,stat:!0,forced:rt},{reject:function(t){var r=X(this);return p(r.reject,void 0,t),r.promise}}),u({target:D,stat:!0,forced:a||rt},{resolve:function(t){return P(a&&this===i?B:this,t)}}),u({target:D,stat:!0,forced:nt},{all:function(t){var r=this,n=X(r),e=n.resolve,o=n.reject,i=M((function(){var n=g(r.resolve),i=[],c=0,u=1;j(t,(function(t){var a=c++,f=!1;u++,p(n,r,t).then((function(t){f||(f=!0,i[a]=t,--u||e(i))}),o)})),--u||e(i)}));return i.error&&o(i.value),n.promise},race:function(t){var r=this,n=X(r),e=n.reject,o=M((function(){var o=g(r.resolve);j(t,(function(t){p(o,r,t).then(n.resolve,e)}))}));return o.error&&e(o.value),n.promise}})},4747:function(t,r,n){var e=n(7854),o=n(8324),i=n(8509),c=n(8533),u=n(8880),a=function(t){if(t&&t.forEach!==c)try{u(t,"forEach",c)}catch(r){t.forEach=c}};for(var f in o)o[f]&&a(e[f]&&e[f].prototype);a(i)},5666:function(t){var r=function(t){"use strict";var r,n=Object.prototype,e=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function a(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{a({},"")}catch(t){a=function(t,r,n){return t[r]=n}}function f(t,r,n,e){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),c=new P(e||[]);return i._invoke=function(t,r,n){var e=p;return function(o,i){if(e===v)throw new Error("Generator is already running");if(e===h){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=L(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===p)throw e=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=v;var a=s(t,r,n);if("normal"===a.type){if(e=n.done?h:l,a.arg===y)continue;return{value:a.arg,done:n.done}}"throw"===a.type&&(e=h,n.method="throw",n.arg=a.arg)}}}(t,n,c),i}function s(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p="suspendedStart",l="suspendedYield",v="executing",h="completed",y={};function d(){}function m(){}function g(){}var x={};a(x,i,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(_([])));b&&b!==n&&e.call(b,i)&&(x=b);var S=g.prototype=d.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(r){a(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function n(o,i,c,u){var a=s(t[o],t,i);if("throw"!==a.type){var f=a.arg,p=f.value;return p&&"object"==typeof p&&e.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(p).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,u)}))}u(a.arg)}var o;this._invoke=function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}}function L(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,L(t,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function _(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){for(;++o<t.length;)if(e.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=r,n.done=!0,n};return c.next=c}}return{next:k}}function k(){return{value:r,done:!0}}return m.prototype=g,a(S,"constructor",g),a(g,"constructor",m),m.displayName=a(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,a(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},j(E.prototype),a(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(r,n,e,o,i){void 0===i&&(i=Promise);var c=new E(f(r,n,e,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},j(S),a(S,u,"Generator"),a(S,i,(function(){return this})),a(S,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var n in t)r.push(n);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=_,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(e,o){return u.type="throw",u.arg=t,n.next=e,o&&(n.method="next",n.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],u=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var a=e.call(c,"catchLoc"),f=e.call(c,"finallyLoc");if(a&&f){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(c)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:_(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,{a:r}),r},n.d=function(t,r){for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},function(){"use strict";function t(t,r,n,e,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void n(t)}u.done?r(a):Promise.resolve(a).then(e,o)}n(5666),n(1539),n(8674),n(4747),n(2222);var r=function(){var r,n=(r=regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,fetch("https://fem-time-tracking-dashboard.herokuapp.com/activities");case 3:return n=t.sent,t.next=6,n.json();case 6:t.sent.forEach((function(t){document.querySelector("."+t.title.toLowerCase()+".current").innerHTML="".concat(t.timeframes[r].current,"hrs"),document.querySelector("."+t.title.toLowerCase()+".previous").innerHTML="Last ".concat("daily"===r?"day":"weekly"===r?"week":"month"," - \n                                      ").concat(t.timeframes[r].previous,"hrs")}));case 8:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(o,i){var c=r.apply(n,e);function u(r){t(c,o,i,u,a,"next",r)}function a(r){t(c,o,i,u,a,"throw",r)}u(void 0)}))});return function(t){return n.apply(this,arguments)}}();window.addEventListener("DOMContentLoaded",(function(){document.querySelector(".btnDaily").addEventListener("click",(function(){return r("daily")})),document.querySelector(".btnWeekly").addEventListener("click",(function(){return r("weekly")})),document.querySelector(".btnMonthly").addEventListener("click",(function(){return r("monthly")})),r("daily")}))}()}();
//# sourceMappingURL=main.js.map