/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));

// place any jQuery/helper plugins in here, instead of separate, slower script files.

!function(a){"use strict";function b(a,b,c){for(a=String(a);a.length<b;)a=String(c)+a;return a}function c(a,b,c){return a>c?c:b>a?b:a}function d(a,b,c,d){for(;a>c;)a-=d;for(;b>a;)a+=d;return a}function e(a){return a.preventDefault(),!1}function f(a,b,c){c&&a.bind(b+"."+j,c)}function g(a){a.unbind("."+j)}function h(a){var b,c,d="string"==typeof a.source?[a.source]:a.source,e=0,f=[],g=function(){e+=1,"function"==typeof a.progress&&a.progress({loaded:e,total:d.length,percent:Math.round(e/d.length*100)}),e===f.length&&"function"==typeof a.complete&&a.complete(f)};for(b=0;b<d.length;b+=1)c=new Image,f.push(c),c.onload=c.onabort=c.onerror=g,c.src=d[b]}var i=window.SpriteSpin={},j=i.namespace="spritespin",k=["mousedown","mousemove","mouseup","mouseenter","mouseover","mouseleave","dblclick","touchstart","touchmove","touchend","touchcancel","selectstart","gesturestart","gesturechange","gestureend"];i.mods={},i.defaults={source:void 0,width:void 0,height:void 0,frames:void 0,framesX:void 0,lanes:1,module:"360",behavior:"drag",renderer:"canvas",lane:0,frame:0,frameTime:40,animate:!0,reverse:!1,loop:!0,stopFrame:0,wrap:!0,wrapLane:!1,sense:1,senseLane:void 0,orientation:"horizontal",onInit:void 0,onProgress:void 0,onLoad:void 0,onFrame:void 0,onDraw:void 0},i.sourceArray=function(a,c){var d=0,e=0,f=0,g=0,h=c.digits||2;c.frame&&(d=c.frame[0],e=c.frame[1]),c.lane&&(f=c.lane[0],g=c.lane[1]);var i,j,k,l=[];for(i=f;g>=i;i+=1)for(j=d;e>=j;j+=1)k=a.replace("{lane}",b(i,h,0)),k=k.replace("{frame}",b(j,h,0)),l.push(k);return l},i.measureSource=function(a){if(1===a.images.length){if(a.sourceWidth=a.images[0].width,a.sourceHeight=a.images[0].height,a.framesX=a.framesX||a.frames,!a.frameWidth||!a.frameHeight)if(a.framesX){a.frameWidth=Math.floor(a.sourceWidth/a.framesX);var b=Math.ceil(a.frames*a.lanes/a.framesX);a.frameHeight=Math.floor(a.sourceHeight/b)}else a.frameWidth=a.images[0].width,a.frameHeight=a.images[0].height}else a.sourceWidth=a.frameWidth=a.images[0].width,a.sourceHeight=a.frameHeight=a.images[0].height,a.frames=a.frames||a.images.length},i.resetInput=function(a){a.startX=a.startY=void 0,a.currentX=a.currentY=void 0,a.oldX=a.oldY=void 0,a.dX=a.dY=a.dW=0,a.ddX=a.ddY=a.ddW=0},i.updateInput=function(a,b){void 0===a.touches&&void 0!==a.originalEvent&&(a.touches=a.originalEvent.touches),b.oldX=b.currentX,b.oldY=b.currentY,void 0!==a.touches&&a.touches.length>0?(b.currentX=a.touches[0].clientX,b.currentY=a.touches[0].clientY):(b.currentX=a.clientX,b.currentY=a.clientY),(void 0===b.startX||void 0===b.startY)&&(b.startX=b.currentX,b.startY=b.currentY,b.clickframe=b.frame,b.clicklane=b.lane),b.dX=b.currentX-b.startX,b.dY=b.currentY-b.startY,b.ddX=b.currentX-b.oldX,b.ddY=b.currentY-b.oldY,b.ndX=b.dX/b.width,b.ndY=b.dY/b.height,b.nddX=b.ddX/b.width,b.nddY=b.ddY/b.height},i.updateFrame=function(a,b,e){void 0!==b?a.frame=Number(b):a.animation&&(a.frame+=a.reverse?-1:1),a.animation?(a.frame=d(a.frame,0,a.frames-1,a.frames),a.loop||a.frame!==a.stopFrame||(a.animate=!1,i.stopAnimation(a))):a.frame=a.wrap?d(a.frame,0,a.frames-1,a.frames):c(a.frame,0,a.frames-1),void 0!==e&&(a.lane=e,a.lane=c(a.lane,0,a.lanes-1)),a.target.trigger("onFrame",a),a.target.trigger("onDraw",a)},i.stopAnimation=function(a){a.animation&&(window.clearInterval(a.animation),a.animation=null)},i.setAnimation=function(a){i.stopAnimation(a),a.animate&&(a.animation=window.setInterval(function(){try{i.updateFrame(a)}catch(b){}},a.frameTime))},i.setModules=function(b){var c,d,e;for(c=0;c<b.mods.length;c+=1)d=b.mods[c],"string"==typeof d&&(e=i.mods[d],e?b.mods[c]=e:a.error("No module found with name "+d))},i.setLayout=function(a){a.target.attr("unselectable","on").css({"-ms-user-select":"none","-moz-user-select":"none","-khtml-user-select":"none","-webkit-user-select":"none","user-select":"none"});var b=Math.floor(a.width||a.frameWidth||a.target.innerWidth()),c=Math.floor(a.height||a.frameHeight||a.target.innerHeight());a.target.css({width:b,height:c,position:"relative",overflow:"hidden"});var d={width:"100%",height:"100%",top:0,left:0,bottom:0,right:0,position:"absolute"};a.stage.css(d).hide(),a.canvas&&(a.canvas[0].width=b,a.canvas[0].height=c,a.canvas.css(d).hide())},i.setEvents=function(a){var b,c,d,h=a.target;for(g(h),c=0;c<k.length;c+=1)f(h,k[c],e);for(b=0;b<a.mods.length;b+=1){for(d=a.mods[b],c=0;c<k.length;c+=1)f(h,k[c],d[k[c]]);f(h,"onInit",d.onInit),f(h,"onLoad",d.onLoad),f(h,"onFrame",d.onFrame),f(h,"onDraw",d.onDraw)}f(h,"onLoad",function(a,b){i.setAnimation(b)}),f(h,"onInit",a.onInit),f(h,"onProgress",a.onProgress),f(h,"onLoad",a.onLoad),f(h,"onFrame",a.onFrame),f(h,"onDraw",a.onDraw)},i.boot=function(a){i.setModules(a),i.setLayout(a),i.setEvents(a),a.target.addClass("loading").trigger("onInit",a),h({source:a.source,progress:function(b){a.target.trigger("onProgress",b)},complete:function(b){a.images=b,i.measureSource(a),a.stage.show(),a.target.removeClass("loading").trigger("onLoad",a).trigger("onFrame",a).trigger("onDraw",a)}})},i.create=function(b){var c=b.target,d=c.data(j);if(d)a.extend(d,b);else{if(d=a.extend({},i.defaults,b),d.source=d.source||[],c.find("img").each(function(){d.source.push(a(this).attr("src"))}),c.empty().addClass("spritespin-instance").append("<div class='spritespin-stage'></div>"),"canvas"===d.renderer){var e=a("<canvas class='spritespin-canvas'></canvas>")[0];e.getContext&&e.getContext("2d")?(d.canvas=a(e),d.context=e.getContext("2d"),c.append(d.canvas),c.addClass("with-canvas")):d.renderer="image"}d.target=c,d.stage=c.find(".spritespin-stage"),c.data(j,d)}"string"==typeof d.source&&(d.source=[d.source]),(d.behavior||d.module)&&(d.mods=[],d.behavior&&d.mods.push(d.behavior),d.module&&d.mods.push(d.module),delete d.behavior,delete d.module),i.boot(d)},i.destroy=function(a){a&&(i.stopAnimation(a),g(a.target),a.target.removeData(j))},i.registerModule=function(b,c){return i.mods[b]&&a.error("Module name is already taken: "+b),c=c||{},i.mods[b]=c,c},i.Api=function(a){this.data=a},i.extendApi=function(b){var c,d=i.Api.prototype;for(c in b)b.hasOwnProperty(c)&&(d[c]?a.error("API method is already defined: "+c):d[c]=b[c]);return d},a.fn.spritespin=function(b){return"data"===b?this.data(j):"api"===b?new i.Api(this.data(j)):"destroy"===b?a(this).each(function(){i.destroy(a(this).data(j))}):"object"==typeof b?(b.target=b.target||a(this),i.create(b),b.target):a.error("Invalid call to spritespin")}}(window.jQuery||window.Zepto||window.$),function(){"use strict";var a=window.SpriteSpin;a.extendApi({isPlaying:function(){return null!==this.data.animation},isLooping:function(){return this.data.loop},toggleAnimation:function(){this.data.animate=!this.data.animate,a.setAnimation(this.data)},stopAnimation:function(){this.data.animate=!1,a.setAnimation(this.data)},startAnimation:function(){this.data.animate=!0,a.setAnimation(this.data)},loop:function(b){return this.data.loop=b,a.setAnimation(this.data),this},currentFrame:function(){return this.data.frame},updateFrame:function(b){return a.updateFrame(this.data,b),this},skipFrames:function(b){var c=this.data;return a.updateFrame(c,c.frame+(c.reverse?-b:+b)),this},nextFrame:function(){return this.skipFrames(1)},prevFrame:function(){return this.skipFrames(-1)},playTo:function(b){return this.data.animate=!0,this.data.loop=!1,this.data.stopFrame=b,a.setAnimation(this.data),this}})}(window.jQuery||window.Zepto||window.$),function(a,b){"use strict";function c(c){var d=a(this),e=d.data("spritespin");b.updateInput(c,e);var f,g;"horizontal"===e.orientation?(f=e.target.innerWidth()/2,g=e.currentX-e.target.offset().left):(f=e.target.innerHeight()/2,g=e.currentY-e.target.offset().top),g>f?d.spritespin("next"):d.spritespin("prev")}b.registerModule("click",{mouseup:c,touchend:c})}(window.jQuery||window.Zepto||window.$,window.SpriteSpin),function(a,b){"use strict";function c(c){var d=a(this).spritespin("data");b.updateInput(c,d),d.dragging=!0}function d(){var c=a(this),d=c.spritespin("data");b.resetInput(d),d.dragging=!1}function e(c){var d,e,f,g,h=a(this),i=h.spritespin("data");i.dragging&&(b.updateInput(c,i),"horizontal"===i.orientation?(d=i.ndX*i.frames*i.sense,e=i.ndY*i.lanes*(i.senseLane||i.sense)):(d=i.ndY*i.frames*i.sense,e=i.ndX*i.lanes*(i.senseLane||i.sense)),g=Math.floor(i.clickframe+d),f=Math.floor(i.clicklane+e),b.updateFrame(i,g,f),i.animate=!1,b.stopAnimation(i))}b.registerModule("drag",{mousedown:c,mousemove:e,mouseup:d,mouseleave:d,touchstart:c,touchmove:e,touchend:d,touchcancel:d})}(window.jQuery||window.Zepto||window.$,window.SpriteSpin),function(a,b){"use strict";function c(c){var d=a(this),e=d.spritespin("data");b.updateInput(c,e),e.onDrag=!0,d.spritespin("animate",!0)}function d(){var c=a(this),d=c.spritespin("data");b.resetInput(d),d.onDrag=!1,c.spritespin("animate",!1)}function e(c){var d=a(this),e=d.spritespin("data");if(e.onDrag){b.updateInput(c,e);var f,g;"horizontal"===e.orientation?(f=e.target.innerWidth()/2,g=(e.currentX-e.target.offset().left-f)/f):(f=e.height/2,g=(e.currentY-e.target.offset().top-f)/f),e.reverse=0>g,g=0>g?-g:g,e.frameTime=80*(1-g)+20}}b.registerModule("hold",{mousedown:c,mousemove:e,mouseup:d,mouseleave:d,touchstart:c,touchmove:e,touchend:d,touchcancel:d,onFrame:function(){var b=a(this);b.spritespin("animate",!0)}})}(window.jQuery||window.Zepto||window.$,window.SpriteSpin),function(a,b){"use strict";function c(c){var d=a(this),e=d.spritespin("data");b.updateInput(c,e),e.onDrag=!0}function d(){var c=a(this),d=c.spritespin("data");d.onDrag=!1,b.resetInput(d)}function e(c){var d=a(this),e=d.spritespin("data");if(e.onDrag){b.updateInput(c,e);var f,g,h=e.frame,i=e.snap||.25;"horizontal"===e.orientation?(f=e.dX,g=e.target.innerWidth()*i):(f=e.dY,g=e.target.innerHeight()*i),f>g?(h=e.frame-1,e.onDrag=!1):-g>f&&(h=e.frame+1,e.onDrag=!1),d.spritespin("update",h),d.spritespin("animate",!1)}}b.registerModule("swipe",{mousedown:c,mousemove:e,mouseup:d,mouseleave:d,touchstart:c,touchmove:e,touchend:d,touchcancel:d})}(window.jQuery||window.Zepto||window.$,window.SpriteSpin),function(a,b){"use strict";function c(b){var c=b.lane*b.frames+b.frame,d=b.frameWidth*(c%b.framesX),f=b.frameHeight*e(c/b.framesX);return"canvas"===b.renderer?(b.context.clearRect(0,0,b.width,b.height),b.context.drawImage(b.images[0],d,f,b.frameWidth,b.frameHeight,0,0,b.width,b.height),void 0):(d=-e(d*b.scaleWidth),f=-e(f*b.scaleHeight),"background"===b.renderer?b.stage.css({"background-image":["url('",b.source[0],"')"].join(""),"background-position":[d,"px ",f,"px"].join("")}):a(b.images).css({top:f,left:d}),void 0)}function d(b){var c=b.lane*b.frames+b.frame;"canvas"===b.renderer?(b.context.clearRect(0,0,b.width,b.height),b.context.drawImage(b.images[c],0,0,b.width,b.height)):"background"===b.renderer?b.stage.css({"background-image":["url('",b.source[c],"')"].join(""),"background-position":[0,"px ",0,"px"].join("")}):(a(b.images).hide(),a(b.images[c]).show())}var e=Math.floor;b.registerModule("360",{onLoad:function(b,c){var d,f;if(c.scaleWidth=c.width/c.frameWidth,c.scaleHeight=c.height/c.frameHeight,c.sourceIsSprite=1===c.images.length,c.stage.empty().css({"background-image":"none"}).show(),"canvas"===c.renderer)c.context.clearRect(0,0,c.width,c.height),c.canvas.show();else if("background"===c.renderer){c.sourceIsSprite?(d=e(c.sourceWidth*c.scaleWidth),f=e(c.sourceHeight*c.scaleHeight)):(d=e(c.frameWidth*c.scaleWidth),f=e(c.frameHeight*c.scaleHeight));var g=[d,"px ",f,"px"].join("");c.stage.css({"background-repeat":"no-repeat","-webkit-background-size":g,"-moz-background-size":g,"-o-background-size":g,"background-size":g})}else"image"===c.renderer&&(c.sourceIsSprite?(d=e(c.sourceWidth*c.scaleWidth),f=e(c.sourceHeight*c.scaleHeight)):d=f="100%",a(c.images).appendTo(c.stage).css({width:d,height:f,position:"absolute"}))},onDraw:function(a,b){b.sourceIsSprite?c(b):d(b)}})}(window.jQuery||window.Zepto||window.$,window.SpriteSpin),function(a){"use strict";var b=window.SpriteSpin.mods.gallery={};b.onLoad=function(b,c){c.images=[],c.offsets=[],c.stage.empty(),c.speed=500,c.opacity=.25,c.oldFrame=0;var d,e=0;for(d=0;d<c.source.length;d+=1){var f=a("<img src='"+c.source[d]+"'/>");c.stage.append(f),c.images.push(f),c.offsets.push(-e+(c.width-f[0].width)/2),e+=f[0].width,f.css({opacity:.25})}c.stage.css({width:e}),c.images[c.oldFrame].animate({opacity:1},c.speed)},b.onDraw=function(a,b){b.oldFrame!==b.frame&&b.offsets?(b.stage.stop(!0,!1),b.stage.animate({left:b.offsets[b.frame]},b.speed),b.images[b.oldFrame].animate({opacity:b.opacity},b.speed),b.oldFrame=b.frame,b.images[b.oldFrame].animate({opacity:1},b.speed)):b.stage.css({left:b.offsets[b.frame]+b.dX})},b.resetInput=function(a,b){b.onDrag||b.stage.animate({left:b.offsets[b.frame]})}}(window.jQuery||window.Zepto||window.$),function(a,b){"use strict";var c=Math.floor;b.registerModule("panorama",{onLoad:function(a,b){b.stage.empty().show(),b.frames=b.sourceWidth,"horizontal"===b.orientation?(b.scale=b.height/b.sourceHeight,b.frames=b.sourceWidth):(b.scale=b.width/b.sourceWidth,b.frames=b.sourceHeight);var d=c(b.sourceWidth*b.scale),e=c(b.sourceHeight*b.scale),f=[d,"px ",e,"px"].join("");b.stage.css({"background-image":["url('",b.source[0],"')"].join(""),"background-repeat":"repeat-both","-webkit-background-size":f,"-moz-background-size":f,"-o-background-size":f,"background-size":f})},onDraw:function(a,b){var d=0,e=0;"horizontal"===b.orientation?d=-c(b.frame%b.frames*b.scale):e=-c(b.frame%b.frames*b.scale),b.stage.css({"background-position":[d,"px ",e,"px"].join("")})}})}(window.jQuery||window.Zepto||window.$,window.SpriteSpin);

/**
 * jquery.wait - insert simple delays into your jquery method chains
 * @author Matthew Lee matt@madleedesign.com
 */

(function ($) {
    function jQueryDummy ($real, delay, _fncQueue) {
        // A Fake jQuery-like object that allows us to resolve the entire jQuery
        // method chain, pause, and resume execution later.

        var dummy = this;
        this._fncQueue = (typeof _fncQueue === 'undefined') ? [] : _fncQueue;
        this._delayCompleted = false;
        this._$real = $real;

        if (typeof delay === 'number' && delay >= 0 && delay < Infinity)
            this.timeoutKey = window.setTimeout(function () {
                dummy._performDummyQueueActions();
            }, delay);

        else if (delay !== null && typeof delay === 'object' && typeof delay.promise === 'function')
            delay.then(function () {
                dummy._performDummyQueueActions();
            });

        else if (typeof delay === 'string')
            $real.one(delay, function () {
                dummy._performDummyQueueActions();
            });

        else
            return $real;
    }

    jQueryDummy.prototype._addToQueue = function(fnc, arg){
        // When dummy functions are called, the name of the function and
        // arguments are put into a queue to execute later

        this._fncQueue.unshift({ fnc: fnc, arg: arg });

        if (this._delayCompleted)
            return this._performDummyQueueActions();
        else
            return this;
    };

    jQueryDummy.prototype._performDummyQueueActions = function(){
        // Start executing queued actions.  If another `wait` is encountered,
        // pass the remaining stack to a new jQueryDummy

        this._delayCompleted = true;

        var next;
        while (this._fncQueue.length > 0) {
            next = this._fncQueue.pop();

            if (next.fnc === 'wait') {
                next.arg.push(this._fncQueue);
                return this._$real = this._$real[next.fnc].apply(this._$real, next.arg);
            }

            this._$real = this._$real[next.fnc].apply(this._$real, next.arg);
        }

        return this;
    };

    $.fn.wait = function(delay, _queue) {
        // Creates dummy object that dequeues after a times delay OR promise

        return new jQueryDummy(this, delay, _queue);
    };

    for (var fnc in $.fn) {
        // Add shadow methods for all jQuery methods in existence.  Will not
        // shadow methods added to jQuery _after_ this!
        // skip non-function properties or properties of Object.prototype

        if (typeof $.fn[fnc] !== 'function' || !$.fn.hasOwnProperty(fnc))
            continue;

        jQueryDummy.prototype[fnc] = (function (fnc) {
            return function(){
                var arg = Array.prototype.slice.call(arguments);
                return this._addToQueue(fnc, arg);
            };
        })(fnc);
    }
})(jQuery);
