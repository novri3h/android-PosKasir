!function(){"use strict";function a(a,b){function c(c,d,e){d.addClass("hide"),a.load("../libs/jquery/screenfull/dist/screenfull.min.js").then(function(){if(screenfull.enabled){d.removeClass("hide"),d.bind("click",function(){var a;e.target&&(a=angular.element(e.target)[0]),screenfull.toggle(a)});var a=angular.element(b[0].body);b.on(screenfull.raw.fullscreenchange,function(){screenfull.isFullscreen?a.addClass("fullscreen"):a.removeClass("fullscreen")})}})}var d={restrict:"AC",link:c};return d}angular.module("app").directive("uiFullscreen",a),a.$inject=["$ocLazyLoad","$document"]}();