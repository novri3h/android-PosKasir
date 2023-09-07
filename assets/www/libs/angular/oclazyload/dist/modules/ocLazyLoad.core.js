!function(a,b){"use strict";var c=["ng","oc.lazyLoad"],d={},e=[],f=[],g=[],h=[],i=a.noop,j={},k=[],l=a.module("oc.lazyLoad",["ng"]);l.provider("$ocLazyLoad",["$controllerProvider","$provide","$compileProvider","$filterProvider","$injector","$animateProvider",function(l,m,p,q,r,s){function t(b,d,e){if(d){var f,h,l,m=[];for(f=d.length-1;f>=0;f--)if(h=d[f],a.isString(h)||(h=w(h)),h&&-1===k.indexOf(h)&&(!y[h]||-1!==g.indexOf(h))){var n=-1===c.indexOf(h);if(l=o(h),n&&(c.push(h),t(b,l.requires,e)),l._runBlocks.length>0)for(j[h]=[];l._runBlocks.length>0;)j[h].push(l._runBlocks.shift());a.isDefined(j[h])&&(n||e.rerun)&&(m=m.concat(j[h])),v(b,l._invokeQueue,h,e.reconfig),v(b,l._configBlocks,h,e.reconfig),i(n?"ocLazyLoad.moduleLoaded":"ocLazyLoad.moduleReloaded",h),d.pop(),k.push(h)}var p=b.getInstanceInjector();a.forEach(m,function(a){p.invoke(a)})}}function u(b,c){function e(b,c){var d,e=!0;return c.length&&(d=f(b),a.forEach(c,function(a){e=e&&f(a)!==d})),e}function f(b){return a.isArray(b)?F(b.toString()):a.isObject(b)?F(E(b)):a.isDefined(b)&&null!==b?F(b.toString()):b}var g=b[2][0],h=b[1],j=!1;a.isUndefined(d[c])&&(d[c]={}),a.isUndefined(d[c][h])&&(d[c][h]={});var k=function(a,b){d[c][h].hasOwnProperty(a)||(d[c][h][a]=[]),e(b,d[c][h][a])&&(j=!0,d[c][h][a].push(b),i("ocLazyLoad.componentLoaded",[c,h,a]))};if(a.isString(g))k(g,b[2][1]);else{if(!a.isObject(g))return!1;a.forEach(g,function(b,c){a.isString(b)?k(b,g[1]):k(c,b)})}return j}function v(b,c,d,f){if(c){var g,h,i,j;for(g=0,h=c.length;h>g;g++)if(i=c[g],a.isArray(i)){if(null!==b){if(!b.hasOwnProperty(i[0]))throw new Error("unsupported provider "+i[0]);j=b[i[0]]}var k=u(i,d);if("invoke"!==i[1])k&&a.isDefined(j)&&j[i[1]].apply(j,i[2]);else{var l=function(b){var c=e.indexOf(d+"-"+b);(-1===c||f)&&(-1===c&&e.push(d+"-"+b),a.isDefined(j)&&j[i[1]].apply(j,i[2]))};if(a.isFunction(i[2][0]))l(i[2][0]);else if(a.isArray(i[2][0]))for(var m=0,n=i[2][0].length;n>m;m++)a.isFunction(i[2][0][m])&&l(i[2][0][m])}}}}function w(b){var c=null;return a.isString(b)?c=b:a.isObject(b)&&b.hasOwnProperty("name")&&a.isString(b.name)&&(c=b.name),c}function x(b){if(!a.isString(b))return!1;try{return o(b)}catch(c){if(/No module/.test(c)||c.message.indexOf("$injector:nomod")>-1)return!1}}var y={},z={$controllerProvider:l,$compileProvider:p,$filterProvider:q,$provide:m,$injector:r,$animateProvider:s},A=!1,B=!1,C=[],D={};C.push=function(a){-1===this.indexOf(a)&&Array.prototype.push.apply(this,arguments)},this.config=function(b){a.isDefined(b.modules)&&(a.isArray(b.modules)?a.forEach(b.modules,function(a){y[a.name]=a}):y[b.modules.name]=b.modules),a.isDefined(b.debug)&&(A=b.debug),a.isDefined(b.events)&&(B=b.events)},this._init=function(d){if(0===f.length){var e=[d],g=["ng:app","ng-app","x-ng-app","data-ng-app"],i=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,j=function(a){return a&&e.push(a)};a.forEach(g,function(b){g[b]=!0,j(document.getElementById(b)),b=b.replace(":","\\:"),"undefined"!=typeof d[0]&&d[0].querySelectorAll&&(a.forEach(d[0].querySelectorAll("."+b),j),a.forEach(d[0].querySelectorAll("."+b+"\\:"),j),a.forEach(d[0].querySelectorAll("["+b+"]"),j))}),a.forEach(e,function(b){if(0===f.length){var c=" "+d.className+" ",e=i.exec(c);e?f.push((e[2]||"").replace(/\s+/g,",")):a.forEach(b.attributes,function(a){0===f.length&&g[a.name]&&f.push(a.value)})}})}0!==f.length||(b.jasmine||b.mocha)&&a.isDefined(a.mock)||console.error("No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.");var k=function l(b){if(-1===c.indexOf(b)){c.push(b);var d=a.module(b);v(null,d._invokeQueue,b),v(null,d._configBlocks,b),a.forEach(d.requires,l)}};a.forEach(f,function(a){k(a)}),f=[],h.pop()};var E=function(b){try{return JSON.stringify(b)}catch(c){var d=[];return JSON.stringify(b,function(b,c){if(a.isObject(c)&&null!==c){if(-1!==d.indexOf(c))return;d.push(c)}return c})}},F=function(a){var b,c,d,e=0;if(0==a.length)return e;for(b=0,d=a.length;d>b;b++)c=a.charCodeAt(b),e=(e<<5)-e+c,e|=0;return e};this.$get=["$log","$rootElement","$rootScope","$cacheFactory","$q",function(b,e,g,j,l){function m(a){var c=l.defer();return b.error(a.message),c.reject(a),c.promise}var p,q=j("ocLazyLoad");return A||(b={},b.error=a.noop,b.warn=a.noop,b.info=a.noop),z.getInstanceInjector=function(){return p?p:p=e.data("$injector")||a.injector()},i=function(a,c){B&&g.$broadcast(a,c),A&&b.info(a,c)},{_broadcast:i,_$log:b,_getFilesCache:function(){return q},toggleWatch:function(a){a?h.push(!0):h.pop()},getModuleConfig:function(b){if(!a.isString(b))throw new Error("You need to give the name of the module to get");return y[b]?a.copy(y[b]):null},setModuleConfig:function(b){if(!a.isObject(b))throw new Error("You need to give the module config object to set");return y[b.name]=b,b},getModules:function(){return c},isLoaded:function(b){var d=function(a){var b=c.indexOf(a)>-1;return b||(b=!!x(a)),b};if(a.isString(b)&&(b=[b]),a.isArray(b)){var e,f;for(e=0,f=b.length;f>e;e++)if(!d(b[e]))return!1;return!0}throw new Error("You need to define the module(s) name(s)")},_getModuleName:w,_getModule:function(a){try{return o(a)}catch(b){throw(/No module/.test(b)||b.message.indexOf("$injector:nomod")>-1)&&(b.message='The module "'+E(a)+'" that you are trying to load does not exist. '+b.message),b}},moduleExists:x,_loadDependencies:function(b,c){var d,e,f,g=[],h=this;if(b=h._getModuleName(b),null===b)return l.when();try{d=h._getModule(b)}catch(i){return m(i)}return e=h.getRequires(d),a.forEach(e,function(d){if(a.isString(d)){var e=h.getModuleConfig(d);if(null===e)return void C.push(d);d=e,e.name=void 0}if(h.moduleExists(d.name))return f=d.files.filter(function(a){return h.getModuleConfig(d.name).files.indexOf(a)<0}),0!==f.length&&h._$log.warn('Module "',b,'" attempted to redefine configuration for dependency. "',d.name,'"\n Additional Files Loaded:',f),a.isDefined(h.filesLoader)?void g.push(h.filesLoader(d,c).then(function(){return h._loadDependencies(d)})):m(new Error("Error: New dependencies need to be loaded from external files ("+d.files+"), but no loader has been defined."));if(a.isArray(d)){var i=[];a.forEach(d,function(a){var b=h.getModuleConfig(a);null===b?i.push(a):b.files&&(i=i.concat(b.files))}),i.length>0&&(d={files:i})}else a.isObject(d)&&d.hasOwnProperty("name")&&d.name&&(h.setModuleConfig(d),C.push(d.name));if(a.isDefined(d.files)&&0!==d.files.length){if(!a.isDefined(h.filesLoader))return m(new Error('Error: the module "'+d.name+'" is defined in external files ('+d.files+"), but no loader has been defined."));g.push(h.filesLoader(d,c).then(function(){return h._loadDependencies(d)}))}}),l.all(g)},inject:function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],d=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],e=this,g=l.defer();if(a.isDefined(b)&&null!==b){if(a.isArray(b)){var h=[];return a.forEach(b,function(a){h.push(e.inject(a,c,d))}),l.all(h)}e._addToLoadList(e._getModuleName(b),!0,d)}if(f.length>0){var i=f.slice(),j=function m(a){C.push(a),D[a]=g.promise,e._loadDependencies(a,c).then(function(){try{k=[],t(z,C,c)}catch(a){return e._$log.error(a.message),void g.reject(a)}f.length>0?m(f.shift()):g.resolve(i)},function(a){g.reject(a)})};j(f.shift())}else{if(c&&c.name&&D[c.name])return D[c.name];g.resolve()}return g.promise},getRequires:function(b){var d=[];return a.forEach(b.requires,function(a){-1===c.indexOf(a)&&d.push(a)}),d},_invokeQueue:v,_registerInvokeList:u,_register:t,_addToLoadList:n,_unregister:function(b){a.isDefined(b)&&a.isArray(b)&&a.forEach(b,function(a){d[a]=void 0})}}}],this._init(a.element(b.document))}]);var m=a.bootstrap;a.bootstrap=function(b,c,d){return a.forEach(c.slice(),function(a){n(a,!0,!0)}),m(b,c,d)};var n=function(b,c,d){(h.length>0||c)&&a.isString(b)&&-1===f.indexOf(b)&&(f.push(b),d&&g.push(b))},o=a.module;a.module=function(a,b,c){return n(a,!1,!0),o(a,b,c)},"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="oc.lazyLoad")}(angular,window);