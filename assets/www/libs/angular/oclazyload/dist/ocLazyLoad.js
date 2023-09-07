!function(a,b){"use strict";var c=["ng","oc.lazyLoad"],d={},e=[],f=[],g=[],h=[],i=a.noop,j={},k=[],l=a.module("oc.lazyLoad",["ng"]);l.provider("$ocLazyLoad",["$controllerProvider","$provide","$compileProvider","$filterProvider","$injector","$animateProvider",function(l,m,p,q,r,s){function t(b,d,e){if(d){var f,h,l,m=[];for(f=d.length-1;f>=0;f--)if(h=d[f],a.isString(h)||(h=w(h)),h&&-1===k.indexOf(h)&&(!y[h]||-1!==g.indexOf(h))){var n=-1===c.indexOf(h);if(l=o(h),n&&(c.push(h),t(b,l.requires,e)),l._runBlocks.length>0)for(j[h]=[];l._runBlocks.length>0;)j[h].push(l._runBlocks.shift());a.isDefined(j[h])&&(n||e.rerun)&&(m=m.concat(j[h])),v(b,l._invokeQueue,h,e.reconfig),v(b,l._configBlocks,h,e.reconfig),i(n?"ocLazyLoad.moduleLoaded":"ocLazyLoad.moduleReloaded",h),d.pop(),k.push(h)}var p=b.getInstanceInjector();a.forEach(m,function(a){p.invoke(a)})}}function u(b,c){function e(b,c){var d,e=!0;return c.length&&(d=f(b),a.forEach(c,function(a){e=e&&f(a)!==d})),e}function f(b){return a.isArray(b)?F(b.toString()):a.isObject(b)?F(E(b)):a.isDefined(b)&&null!==b?F(b.toString()):b}var g=b[2][0],h=b[1],j=!1;a.isUndefined(d[c])&&(d[c]={}),a.isUndefined(d[c][h])&&(d[c][h]={});var k=function(a,b){d[c][h].hasOwnProperty(a)||(d[c][h][a]=[]),e(b,d[c][h][a])&&(j=!0,d[c][h][a].push(b),i("ocLazyLoad.componentLoaded",[c,h,a]))};if(a.isString(g))k(g,b[2][1]);else{if(!a.isObject(g))return!1;a.forEach(g,function(b,c){a.isString(b)?k(b,g[1]):k(c,b)})}return j}function v(b,c,d,f){if(c){var g,h,i,j;for(g=0,h=c.length;h>g;g++)if(i=c[g],a.isArray(i)){if(null!==b){if(!b.hasOwnProperty(i[0]))throw new Error("unsupported provider "+i[0]);j=b[i[0]]}var k=u(i,d);if("invoke"!==i[1])k&&a.isDefined(j)&&j[i[1]].apply(j,i[2]);else{var l=function(b){var c=e.indexOf(d+"-"+b);(-1===c||f)&&(-1===c&&e.push(d+"-"+b),a.isDefined(j)&&j[i[1]].apply(j,i[2]))};if(a.isFunction(i[2][0]))l(i[2][0]);else if(a.isArray(i[2][0]))for(var m=0,n=i[2][0].length;n>m;m++)a.isFunction(i[2][0][m])&&l(i[2][0][m])}}}}function w(b){var c=null;return a.isString(b)?c=b:a.isObject(b)&&b.hasOwnProperty("name")&&a.isString(b.name)&&(c=b.name),c}function x(b){if(!a.isString(b))return!1;try{return o(b)}catch(c){if(/No module/.test(c)||c.message.indexOf("$injector:nomod")>-1)return!1}}var y={},z={$controllerProvider:l,$compileProvider:p,$filterProvider:q,$provide:m,$injector:r,$animateProvider:s},A=!1,B=!1,C=[],D={};C.push=function(a){-1===this.indexOf(a)&&Array.prototype.push.apply(this,arguments)},this.config=function(b){a.isDefined(b.modules)&&(a.isArray(b.modules)?a.forEach(b.modules,function(a){y[a.name]=a}):y[b.modules.name]=b.modules),a.isDefined(b.debug)&&(A=b.debug),a.isDefined(b.events)&&(B=b.events)},this._init=function(d){if(0===f.length){var e=[d],g=["ng:app","ng-app","x-ng-app","data-ng-app"],i=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,j=function(a){return a&&e.push(a)};a.forEach(g,function(b){g[b]=!0,j(document.getElementById(b)),b=b.replace(":","\\:"),"undefined"!=typeof d[0]&&d[0].querySelectorAll&&(a.forEach(d[0].querySelectorAll("."+b),j),a.forEach(d[0].querySelectorAll("."+b+"\\:"),j),a.forEach(d[0].querySelectorAll("["+b+"]"),j))}),a.forEach(e,function(b){if(0===f.length){var c=" "+d.className+" ",e=i.exec(c);e?f.push((e[2]||"").replace(/\s+/g,",")):a.forEach(b.attributes,function(a){0===f.length&&g[a.name]&&f.push(a.value)})}})}0!==f.length||(b.jasmine||b.mocha)&&a.isDefined(a.mock)||console.error("No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.");var k=function l(b){if(-1===c.indexOf(b)){c.push(b);var d=a.module(b);v(null,d._invokeQueue,b),v(null,d._configBlocks,b),a.forEach(d.requires,l)}};a.forEach(f,function(a){k(a)}),f=[],h.pop()};var E=function(b){try{return JSON.stringify(b)}catch(c){var d=[];return JSON.stringify(b,function(b,c){if(a.isObject(c)&&null!==c){if(-1!==d.indexOf(c))return;d.push(c)}return c})}},F=function(a){var b,c,d,e=0;if(0==a.length)return e;for(b=0,d=a.length;d>b;b++)c=a.charCodeAt(b),e=(e<<5)-e+c,e|=0;return e};this.$get=["$log","$rootElement","$rootScope","$cacheFactory","$q",function(b,e,g,j,l){function m(a){var c=l.defer();return b.error(a.message),c.reject(a),c.promise}var p,q=j("ocLazyLoad");return A||(b={},b.error=a.noop,b.warn=a.noop,b.info=a.noop),z.getInstanceInjector=function(){return p?p:p=e.data("$injector")||a.injector()},i=function(a,c){B&&g.$broadcast(a,c),A&&b.info(a,c)},{_broadcast:i,_$log:b,_getFilesCache:function(){return q},toggleWatch:function(a){a?h.push(!0):h.pop()},getModuleConfig:function(b){if(!a.isString(b))throw new Error("You need to give the name of the module to get");return y[b]?a.copy(y[b]):null},setModuleConfig:function(b){if(!a.isObject(b))throw new Error("You need to give the module config object to set");return y[b.name]=b,b},getModules:function(){return c},isLoaded:function(b){var d=function(a){var b=c.indexOf(a)>-1;return b||(b=!!x(a)),b};if(a.isString(b)&&(b=[b]),a.isArray(b)){var e,f;for(e=0,f=b.length;f>e;e++)if(!d(b[e]))return!1;return!0}throw new Error("You need to define the module(s) name(s)")},_getModuleName:w,_getModule:function(a){try{return o(a)}catch(b){throw(/No module/.test(b)||b.message.indexOf("$injector:nomod")>-1)&&(b.message='The module "'+E(a)+'" that you are trying to load does not exist. '+b.message),b}},moduleExists:x,_loadDependencies:function(b,c){var d,e,f,g=[],h=this;if(b=h._getModuleName(b),null===b)return l.when();try{d=h._getModule(b)}catch(i){return m(i)}return e=h.getRequires(d),a.forEach(e,function(d){if(a.isString(d)){var e=h.getModuleConfig(d);if(null===e)return void C.push(d);d=e,e.name=void 0}if(h.moduleExists(d.name))return f=d.files.filter(function(a){return h.getModuleConfig(d.name).files.indexOf(a)<0}),0!==f.length&&h._$log.warn('Module "',b,'" attempted to redefine configuration for dependency. "',d.name,'"\n Additional Files Loaded:',f),a.isDefined(h.filesLoader)?void g.push(h.filesLoader(d,c).then(function(){return h._loadDependencies(d)})):m(new Error("Error: New dependencies need to be loaded from external files ("+d.files+"), but no loader has been defined."));if(a.isArray(d)){var i=[];a.forEach(d,function(a){var b=h.getModuleConfig(a);null===b?i.push(a):b.files&&(i=i.concat(b.files))}),i.length>0&&(d={files:i})}else a.isObject(d)&&d.hasOwnProperty("name")&&d.name&&(h.setModuleConfig(d),C.push(d.name));if(a.isDefined(d.files)&&0!==d.files.length){if(!a.isDefined(h.filesLoader))return m(new Error('Error: the module "'+d.name+'" is defined in external files ('+d.files+"), but no loader has been defined."));g.push(h.filesLoader(d,c).then(function(){return h._loadDependencies(d)}))}}),l.all(g)},inject:function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],d=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],e=this,g=l.defer();if(a.isDefined(b)&&null!==b){if(a.isArray(b)){var h=[];return a.forEach(b,function(a){h.push(e.inject(a,c,d))}),l.all(h)}e._addToLoadList(e._getModuleName(b),!0,d)}if(f.length>0){var i=f.slice(),j=function m(a){C.push(a),D[a]=g.promise,e._loadDependencies(a,c).then(function(){try{k=[],t(z,C,c)}catch(a){return e._$log.error(a.message),void g.reject(a)}f.length>0?m(f.shift()):g.resolve(i)},function(a){g.reject(a)})};j(f.shift())}else{if(c&&c.name&&D[c.name])return D[c.name];g.resolve()}return g.promise},getRequires:function(b){var d=[];return a.forEach(b.requires,function(a){-1===c.indexOf(a)&&d.push(a)}),d},_invokeQueue:v,_registerInvokeList:u,_register:t,_addToLoadList:n,_unregister:function(b){a.isDefined(b)&&a.isArray(b)&&a.forEach(b,function(a){d[a]=void 0})}}}],this._init(a.element(b.document))}]);var m=a.bootstrap;a.bootstrap=function(b,c,d){return a.forEach(c.slice(),function(a){n(a,!0,!0)}),m(b,c,d)};var n=function(b,c,d){(h.length>0||c)&&a.isString(b)&&-1===f.indexOf(b)&&(f.push(b),d&&g.push(b))},o=a.module;a.module=function(a,b,c){return n(a,!1,!0),o(a,b,c)},"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="oc.lazyLoad")}(angular,window),function(a){"use strict";a.module("oc.lazyLoad").directive("ocLazyLoad",["$ocLazyLoad","$compile","$animate","$parse","$timeout",function(b,c,d,e,f){return{restrict:"A",terminal:!0,priority:1e3,compile:function(f,g){var h=f[0].innerHTML;return f.html(""),function(f,g,i){var j=e(i.ocLazyLoad);f.$watch(function(){return j(f)||i.ocLazyLoad},function(e){a.isDefined(e)&&b.load(e).then(function(){d.enter(h,g),c(g.contents())(f)})},!0)}}}}])}(angular),function(a){"use strict";a.module("oc.lazyLoad").config(["$provide",function(b){b.decorator("$ocLazyLoad",["$delegate","$q","$window","$interval",function(b,c,d,e){var f=!1,g=!1,h=d.document.getElementsByTagName("head")[0]||d.document.getElementsByTagName("body")[0];return b.buildElement=function(i,j,k){var l,m,n=c.defer(),o=b._getFilesCache(),p=function(a){var b=(new Date).getTime();return a.indexOf("?")>=0?"&"===a.substring(0,a.length-1)?a+"_dc="+b:a+"&_dc="+b:a+"?_dc="+b};switch(a.isUndefined(o.get(j))&&o.put(j,n.promise),i){case"css":l=d.document.createElement("link"),l.type="text/css",l.rel="stylesheet",l.href=k.cache===!1?p(j):j;break;case"js":l=d.document.createElement("script"),l.src=k.cache===!1?p(j):j;break;default:o.remove(j),n.reject(new Error('Requested type "'+i+'" is not known. Could not inject "'+j+'"'))}l.onload=l.onreadystatechange=function(a){l.readyState&&!/^c|loade/.test(l.readyState)||m||(l.onload=l.onreadystatechange=null,m=1,b._broadcast("ocLazyLoad.fileLoaded",j),n.resolve())},l.onerror=function(){o.remove(j),n.reject(new Error("Unable to load "+j))},l.async=k.serie?0:1;var q=h.lastChild;if(k.insertBefore){var r=a.element(a.isDefined(window.jQuery)?k.insertBefore:document.querySelector(k.insertBefore));r&&r.length>0&&(q=r[0])}if(q.parentNode.insertBefore(l,q),"css"==i){if(!f){var s=d.navigator.userAgent.toLowerCase();if(/iP(hone|od|ad)/.test(d.navigator.platform)){var t=d.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),u=parseFloat([parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3]||0,10)].join("."));g=6>u}else if(s.indexOf("android")>-1){var v=parseFloat(s.slice(s.indexOf("android")+8));g=4.4>v}else if(s.indexOf("safari")>-1){var w=s.match(/version\/([\.\d]+)/i);g=w&&w[1]&&parseFloat(w[1])<6}}if(g)var x=1e3,y=e(function(){try{l.sheet.cssRules,e.cancel(y),l.onload()}catch(a){--x<=0&&l.onerror()}},20)}return n.promise},b}])}])}(angular),function(a){"use strict";a.module("oc.lazyLoad").config(["$provide",function(b){b.decorator("$ocLazyLoad",["$delegate","$q",function(b,c){return b.filesLoader=function(d){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],f=[],g=[],h=[],i=[],j=null,k=b._getFilesCache();b.toggleWatch(!0),a.extend(e,d);var l=function(c){var d,l=null;if(a.isObject(c)&&(l=c.type,c=c.path),j=k.get(c),a.isUndefined(j)||e.cache===!1){if(null!==(d=/^(css|less|html|htm|js)?(?=!)/.exec(c))&&(l=d[1],c=c.substr(d[1].length+1,c.length)),!l)if(null!==(d=/[.](css|less|html|htm|js)?((\?|#).*)?$/.exec(c)))l=d[1];else{if(b.jsLoader.hasOwnProperty("ocLazyLoadLoader")||!b.jsLoader.hasOwnProperty("requirejs"))return void b._$log.error("File type could not be determined. "+c);l="js"}"css"!==l&&"less"!==l||-1!==f.indexOf(c)?"html"!==l&&"htm"!==l||-1!==g.indexOf(c)?"js"===l||-1===h.indexOf(c)?h.push(c):b._$log.error("File type is not valid. "+c):g.push(c):f.push(c)}else j&&i.push(j)};if(e.serie?l(e.files.shift()):a.forEach(e.files,function(a){l(a)}),f.length>0){var m=c.defer();b.cssLoader(f,function(c){a.isDefined(c)&&b.cssLoader.hasOwnProperty("ocLazyLoadLoader")?(b._$log.error(c),m.reject(c)):m.resolve()},e),i.push(m.promise)}if(g.length>0){var n=c.defer();b.templatesLoader(g,function(c){a.isDefined(c)&&b.templatesLoader.hasOwnProperty("ocLazyLoadLoader")?(b._$log.error(c),n.reject(c)):n.resolve()},e),i.push(n.promise)}if(h.length>0){var o=c.defer();b.jsLoader(h,function(c){a.isDefined(c)&&(b.jsLoader.hasOwnProperty("ocLazyLoadLoader")||b.jsLoader.hasOwnProperty("requirejs"))?(b._$log.error(c),o.reject(c)):o.resolve()},e),i.push(o.promise)}if(0===i.length){var p=c.defer(),q="Error: no file to load has been found, if you're trying to load an existing module you should use the 'inject' method instead of 'load'.";return b._$log.error(q),p.reject(q),p.promise}return e.serie&&e.files.length>0?c.all(i).then(function(){return b.filesLoader(d,e)}):c.all(i)["finally"](function(a){return b.toggleWatch(!1),a})},b.load=function(d){var e,f=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],g=this,h=null,i=[],j=c.defer(),k=a.copy(d),l=a.copy(f);if(a.isArray(k))return a.forEach(k,function(a){i.push(g.load(a,l))}),c.all(i).then(function(a){j.resolve(a)},function(a){j.reject(a)}),j.promise;if(a.isString(k)?(h=g.getModuleConfig(k),h||(h={files:[k]})):a.isObject(k)&&(h=a.isDefined(k.path)&&a.isDefined(k.type)?{files:[k]}:g.setModuleConfig(k)),null===h){var m=g._getModuleName(k);return e='Module "'+(m||"unknown")+'" is not configured, cannot load.',b._$log.error(e),j.reject(new Error(e)),j.promise}a.isDefined(h.template)&&(a.isUndefined(h.files)&&(h.files=[]),a.isString(h.template)?h.files.push(h.template):a.isArray(h.template)&&h.files.concat(h.template));var n=a.extend({},l,h);return a.isUndefined(h.files)&&a.isDefined(h.name)&&b.moduleExists(h.name)?b.inject(h.name,n,!0):(b.filesLoader(h,n).then(function(){b.inject(null,n).then(function(a){j.resolve(a)},function(a){j.reject(a)})},function(a){j.reject(a)}),j.promise)},b}])}])}(angular),function(a){"use strict";a.module("oc.lazyLoad").config(["$provide",function(b){b.decorator("$ocLazyLoad",["$delegate","$q",function(b,c){return b.cssLoader=function(d,e,f){var g=[];a.forEach(d,function(a){g.push(b.buildElement("css",a,f))}),c.all(g).then(function(){e()},function(a){e(a)})},b.cssLoader.ocLazyLoadLoader=!0,b}])}])}(angular),function(a){"use strict";a.module("oc.lazyLoad").config(["$provide",function(b){b.decorator("$ocLazyLoad",["$delegate","$q",function(b,c){return b.jsLoader=function(d,e,f){var g=[];a.forEach(d,function(a){g.push(b.buildElement("js",a,f))}),c.all(g).then(function(){e()},function(a){e(a)})},b.jsLoader.ocLazyLoadLoader=!0,b}])}])}(angular),function(a){"use strict";a.module("oc.lazyLoad").config(["$provide",function(b){b.decorator("$ocLazyLoad",["$delegate","$templateCache","$q","$http",function(b,c,d,e){return b.templatesLoader=function(f,g,h){var i=[],j=b._getFilesCache();return a.forEach(f,function(b){var f=d.defer();i.push(f.promise),e.get(b,h).success(function(d){a.isString(d)&&d.length>0&&a.forEach(a.element(d),function(a){"SCRIPT"===a.nodeName&&"text/ng-template"===a.type&&c.put(a.id,a.innerHTML)}),a.isUndefined(j.get(b))&&j.put(b,!0),f.resolve()}).error(function(a){f.reject(new Error('Unable to load template file "'+b+'": '+a))})}),d.all(i).then(function(){g()},function(a){g(a)})},b.templatesLoader.ocLazyLoadLoader=!0,b}])}])}(angular),Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){var c;if(null==this)throw new TypeError('"this" is null or not defined');var d=Object(this),e=d.length>>>0;if(0===e)return-1;var f=+b||0;if(Math.abs(f)===1/0&&(f=0),f>=e)return-1;for(c=Math.max(f>=0?f:e-Math.abs(f),0);e>c;){if(c in d&&d[c]===a)return c;c++}return-1});