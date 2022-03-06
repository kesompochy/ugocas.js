(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("UGOCAS", [], factory);
	else if(typeof exports === 'object')
		exports["UGOCAS"] = factory();
	else
		root["UGOCAS"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/egak.js/dist/egak.min.js":
/*!***********************************************!*\
  !*** ./node_modules/egak.js/dist/egak.min.js ***!
  \***********************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(self,(function(){return(()=>{"use strict";var e={840:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="#version 300 es\r\nprecision highp float;\r\n\r\nin vec2 v_texcoord;\r\n\r\nuniform sampler2D u_texture;\r\n\r\nuniform float u_opacity;\r\n\r\nout vec4 outColor;\r\n\r\nvoid main() {\r\n   outColor = texture(u_texture, v_texcoord) * vec4(1, 1, 1, u_opacity);\r\n}"},289:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="#version 300 es\r\n \r\nin vec2 a_position;\r\nin vec2 a_texcoord;\r\n \r\nuniform mat3 u_transformation;\r\n \r\nout vec2 v_texcoord;\r\n \r\nvoid main() {\r\n   v_texcoord = a_texcoord;\r\n\r\n   gl_Position = vec4((u_transformation * vec3(a_position, 1)).xy, 0, 1);\r\n}"},178:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultResolution=void 0;var i=n(r(947)),o=n(r(108)),a=n(r(627)),u=n(r(991)),s=r(236),c={width:300,height:150,canvas:document.createElement("canvas"),autoStyleCanvas:!1};t.defaultResolution={x:1,y:1};var l=function(){function e(e){this.loader=o.default,e||(e=c);var t=e.width||c.width,r=e.height||c.height,n=e.canvas||c.canvas,l=e.autoStyleCanvas||c.autoStyleCanvas;this.baseStage=new s.BaseStage(t,r),this._canvas=n,l&&(this._canvas.style.width="".concat(t,"px"),this._canvas.style.height="".concat(r,"px")),this._screenSize={width:t,height:r},this.renderer=new i.default({canvas:n,width:this._screenSize.width,height:this._screenSize.height}),a.default.x=this._resolutionX,a.default.y=this._resolutionY,u.default.canvas=n,u.default.on(),u.default.screenSize=this._screenSize}return Object.defineProperty(e.prototype,"width",{set:function(e){this._screenSize.width=e,this.renderer.width=e,a.default.x=this._resolutionX},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{set:function(e){this._screenSize.height=e,this.renderer.height=e,a.default.y=this._resolutionY},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_resolutionX",{get:function(){return this.renderer.resolution*this._canvas.width/this._screenSize.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_resolutionY",{get:function(){return this.renderer.resolution*this._canvas.height/this._screenSize.height},enumerable:!1,configurable:!0}),e.prototype.render=function(){this.renderer.render(this.baseStage),this.renderer.flush()},e.prototype.clearScreen=function(e,t,r,n){void 0===e&&(e=0),void 0===t&&(t=0),void 0===r&&(r=0),this.renderer.clear(e,t,r,n)},e.prototype.addResource=function(e,t){this.loader.add(e,t)},e.prototype.loadAll=function(){this.loader.loadAll()},Object.defineProperty(e.prototype,"loaded",{get:function(){return this.loader.loaded},enumerable:!1,configurable:!0}),e}();t.default=l},309:function(e,t){var r,n=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0}),t.TwoDemensionParam=void 0;var i,o=function(){function e(){this._x=1,this._y=1}return Object.defineProperty(e.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e},enumerable:!1,configurable:!0}),e.prototype.set=function(e,t){this._x=e,this._y=t||e},e}();t.TwoDemensionParam=o,n((function(){var e=i.call(this)||this;return e._x=0,e._y=0,e}),i=o);var a=function(){function e(){this._position=new o,this._opacity=1,this._scale=new o,this.rotation=0}return Object.defineProperty(e.prototype,"opacity",{get:function(){return this._opacity},set:function(e){this._opacity=Math.min(Math.max(e,0),1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"position",{get:function(){return this._position},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this._scale},enumerable:!1,configurable:!0}),e}();t.default=a},479:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,r,n){this.x=0,this.y=0,this.w=0,this.h=0,this.x=e,this.y=t,this.w=r,this.h=n}return e.prototype.detectPointHit=function(e,t){return this.x<e&&this.x+this.w>e&&this.y<t&&this.y+this.h>t},e}();t.default=r},339:function(e,t,r){var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t){var r=e.call(this)||this;return t&&(r.texture=t),r}return i(t,e),t}(o(r(236)).default);t.default=a},236:function(e,t,r){var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return a(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BaseStage=void 0;var c=s(r(309)),l=r(309),f=s(r(991)),h=u(r(179)),d=s(r(479)),p=r(991),_=function(e){function t(){var t=e.call(this)||this;return t._x=0,t._y=0,t}return i(t,e),t}(l.TwoDemensionParam),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.anchor=new _,t.transform=h.identity(),t.parentTransform=h.identity(),t.parentOpacity=1,t.parent=void 0,t.isOnStage=!1,t._size={width:0,height:0},t._eventsArys={pointerdown:[],pointerup:[],pointermove:[]},t.children=[],t}return i(t,e),t.prototype.calcRenderingInfos=function(){this.transform=this._calculateTransform(),this.parentTransform=this._calculateParentTransform(),this.parentOpacity=this._calculateParentOpacity()},t.prototype.addChild=function(e){this.children.push(e),e.parent=this,this.isOnStage&&(e.isOnStage=!0,p.events.forEach((function(t){e._eventsArys[t].forEach((function(e){f.default.add(t,e)}))})))},t.prototype.removeChild=function(e){this.children.splice(this.children.indexOf(e),1),e.parent=void 0,e.isOnStage=!1},t.prototype._calculateTransform=function(){var e=h.translation(this.position.x,this.position.y),t=h.scaling(this.scale.x,this.scale.y),r=h.rotation(this.rotation),n=h.translation(-this.anchor.x,-this.anchor.y);return h.someMultiply(e,r,t,n)},t.prototype._calculateParentTransform=function(){return this.parent?h.multiply(this.parent.parentTransform,this.parent.transform):h.identity()},t.prototype._calculateParentOpacity=function(){return this.parent?this.parent.parentOpacity*this.parent.opacity:1},Object.defineProperty(t.prototype,"worldScale",{get:function(){if(this.parent){var e=this.parent,t=e.worldScale;return{x:t.x*e.scale.x,y:t.y*e.scale.y}}return{x:1,y:1}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"worldPosition",{get:function(){if(this.parent){var e=this.parent,t=e.worldPosition,r=e.worldScale;return{x:t.x+e.position.x*r.x,y:t.y+e.position.y*r.y}}return{x:0,y:0}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"x",{get:function(){return this.position.x},set:function(e){this.position.x=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.position.y},set:function(e){this.position.y=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._size.width},set:function(e){this._size.width=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._size.height},set:function(e){this._size.height=e},enumerable:!1,configurable:!0}),t.prototype.addEventListener=function(e,t){var r={target:this,callback:t};this._eventsArys[e].push(r),this.isOnStage&&f.default.add(e,r)},t.prototype.getBoundingRect=function(){var e=this.worldScale,t=this.worldPosition,r=t.x+(this.position.x-this.anchor.x)*e.x,n=t.y+(this.position.y-this.anchor.y)*e.y,i=(this.texture?this.texture.width*this.texture.scale.x:this._size.width)*this.scale.x*e.x,o=(this.texture?this.texture.height*this.texture.scale.y:this._size.height)*this.scale.y*e.y;return new d.default(r,n,i,o)},t}(c.default);t.default=v;var y=function(e){function t(t,r){var n=e.call(this)||this;return n.isOnStage=!0,n._size={width:t,height:r},n}return i(t,e),t}(v);t.BaseStage=y},736:function(e,t,r){var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(339)),u=o(r(59)),s=o(r(627)),c=r(59),l={font:"sans-serif",fontSize:20,fill:"#f00",strokeWidth:0,stroke:"#000",shadow:"",shadowX:1,shadowY:1,shadowBlur:0},f=function(e){function t(t,r){var n=e.call(this)||this;for(var i in n._text="",n._canvas=document.createElement("canvas"),n._resolution=s.default,n._text=t||"",r=r||l,n._style=r,l)n._style[i]=r[i]||l[i];return n.texture=new u.default(void 0,c.SCALE_MODE.LINEAR),n._updateCanvasTexture(),n}return i(t,e),t.prototype._drawCanvas=function(){var e=this._canvas,t=e.getContext("2d"),r=this._style,n=this._text;e.width=2,e.height=2,t.font="".concat(r.fontSize,"px ").concat(r.font),t.textBaseline="top";var i=t.measureText(n),o=i.width+(r.shadow?r.shadowX:0),a=i.actualBoundingBoxDescent-i.actualBoundingBoxAscent+(r.shadow?r.shadowY:0);e.width=o*this._resolution.x,e.height=a*this._resolution.y,t.scale(this._resolution.x,this._resolution.y),t.clearRect(0,0,e.width,e.height),t.beginPath(),r.shadow&&(t.shadowOffsetX=r.shadowX,t.shadowOffsetY=r.shadowY,t.shadowBlur=r.shadowBlur,t.shadowColor=r.shadow),t.font="".concat(r.fontSize,"px ").concat(r.font),t.textBaseline="top",t.fillStyle=r.fill,t.fillText(n,0,0),t.closePath(),t.beginPath(),r.strokeWidth&&(t.shadowOffsetX=0,t.shadowOffsetY=0,t.lineWidth=r.strokeWidth,t.strokeStyle=r.stroke,t.strokeText(n,0,0)),this.texture.scale.x=1/this._resolution.x,this.texture.scale.y=1/this._resolution.y},Object.defineProperty(t.prototype,"text",{get:function(){return this._text},set:function(e){this._text=e,this._updateCanvasTexture()},enumerable:!1,configurable:!0}),t.prototype._updateCanvasTexture=function(){this._drawCanvas(),this.texture.texture=this._canvas},Object.defineProperty(t.prototype,"style",{get:function(){return this._updateCanvasTexture(),this._style},enumerable:!1,configurable:!0}),t}(a.default);t.default=f},607:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Loader=t.Text=t.Stage=t.Texture=t.Sprite=t.App=void 0;var i=n(r(178));t.App=i.default;var o=n(r(339));t.Sprite=o.default;var a=n(r(59));t.Texture=a.default;var u=n(r(236));t.Stage=u.default;var s=n(r(736));t.Text=s.default;var c=n(r(108));t.Loader=c.default},991:function(e,t){var r=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(t,"__esModule",{value:!0}),t.events=void 0;var n=["pointerdown","pointerup","pointermove"];t.events=n;var i=function(){function e(){}var t;return e._getPointerCo=function(e){var t=this._canvasSize;return{x:e.offsetX*this.screenSize.width/t.w,y:e.offsetY*this.screenSize.height/t.h}},e.on=function(){var e,t,i,o=this,a=function(e){null===(i=u._canvas)||void 0===i||i.addEventListener(e,(function(t){var r=o._getPointerCo(t);o._dispatchEvents(e,r)}))},u=this;try{for(var s=r(Object.values(n)),c=s.next();!c.done;c=s.next())a(c.value)}catch(t){e={error:t}}finally{try{c&&!c.done&&(t=s.return)&&t.call(s)}finally{if(e)throw e.error}}},e._dispatchEvents=function(e,t){for(var r=this._eventsArys[e],n=0,i=r.length;n<i;n++){var o=r[n],a=o.target;a.isOnStage&&a.getBoundingRect().detectPointHit(t.x,t.y)&&o.callback()}},Object.defineProperty(e,"canvas",{set:function(e){this._canvas=e,this._canvasSize=this._getCanvasSize(e),this._resizeObserver.observe(document.body)},enumerable:!1,configurable:!0}),e._getCanvasSize=function(e){return{w:e.clientWidth,h:e.clientHeight}},e.add=function(e,t){this._eventsArys[e].push({target:t.target,callback:t.callback})},t=e,e.screenSize={width:0,height:0},e._canvasSize={w:0,h:0},e._eventsArys={pointerup:[],pointerdown:[],pointermove:[]},e._resizeObserver=new ResizeObserver((function(){t._canvasSize=t._getCanvasSize(t._canvas)})),e}();t.default=i},108:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(59)),o=r(59),a=function(){function e(){}return e.add=function(e,t,r){this.loaded=!1;var n=this._promiseLoadingImage(e,t,r);return this._tasks.push(n),this},e.loadAll=function(){var e=this;this._taskNum=this._tasks.length,this._progressManager(this._taskNum,this._taskNum),Promise.all(this._tasks).then((function(){e.loaded=!0,e._loadThen()}))},e._promiseLoadingImage=function(e,t,r){var n=this;return void 0===r&&(r="NEAREST"),new Promise((function(a){fetch(t).then((function(e){return e.blob()})).then((function(e){return createImageBitmap(e)})).then((function(t){n._resources.set(e,new i.default(t,o.SCALE_MODE[r])),n._tasks.shift(),n._progressManager(n._taskNum,n._tasks.length),a(t)}))}))},e.loadThen=function(e){this._loadThen=e,0===this._tasks.length&&e()},e.manageProgress=function(e){this._progressManager=e},e.get=function(e){return this._resources.has(e)?this._resources.get(e):void 0},e._resources=new Map,e._tasks=[],e._loadThen=function(){},e._taskNum=0,e._progressManager=function(){},e.loaded=!1,e}();t.default=a},179:(e,t)=>{function r(e,t){var r=e[0],n=e[1],i=e[2],o=e[3],a=e[4],u=e[5],s=e[6],c=e[7],l=e[8],f=t[0],h=t[1],d=t[2],p=t[3],_=t[4],v=t[5],y=t[6],g=t[7],b=t[8];return[f*r+h*o+d*s,f*n+h*a+d*c,f*i+h*u+d*l,p*r+_*o+v*s,p*n+_*a+v*c,p*i+_*u+v*l,y*r+g*o+b*s,y*n+g*a+b*c,y*i+g*u+b*l]}Object.defineProperty(t,"__esModule",{value:!0}),t.identity=t.someMultiply=t.multiply=t.rotation=t.translation=t.scaling=t.projection=void 0,t.projection=function(e,t){return[2/e,0,0,0,-2/t,0,-1,1,1]},t.scaling=function(e,t){return[e,0,0,0,t,0,0,0,1]},t.translation=function(e,t){return[1,0,0,0,1,0,e,t,1]},t.rotation=function(e){var t=Math.sin(e),r=Math.cos(e);return[r,-t,0,t,r,0,0,0,1]},t.multiply=r,t.someMultiply=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],i=0,o=e.length-1;i<o;i++)n=r(n,e[i+1]);return n},t.identity=function(){return[1,0,0,0,1,0,0,0,1]}},478:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.enableAlpha=void 0,t.enableAlpha=function(e){e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0)}},144:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createRectangleIndices=t.createLinkedVertexBuffer=void 0,t.createLinkedVertexBuffer=function(e,t,r,n){var i=e.getAttribLocation(t,r),o=e.getAttribLocation(t,n);e.enableVertexAttribArray(i),e.enableVertexAttribArray(o);var a=e.FLOAT,u=4*Float32Array.BYTES_PER_ELEMENT,s=2*Float32Array.BYTES_PER_ELEMENT,c=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,c),e.vertexAttribPointer(i,2,a,!1,u,0),e.vertexAttribPointer(o,2,a,!1,u,s),e.bindBuffer(e.ARRAY_BUFFER,null),c},t.createRectangleIndices=function(e){var t=new Uint16Array([0,1,2,1,3,2]),r=function(e,t,r){var n=e.createBuffer();return e.bindBuffer(t,n),e.bufferData(t,r,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),n}(e,e.ELEMENT_ARRAY_BUFFER,t);return r}},484:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.resizeCanvas=t.clearCanvas=void 0,t.clearCanvas=function(e,t){var r=t.r/256,n=t.g/256,i=t.b/256,o=void 0===t.a?1:t.a;e.clearColor(r,n,i,o),e.clear(e.COLOR_BUFFER_BIT)},t.resizeCanvas=function(e,t){var r=e.canvas,n=r.clientWidth,i=r.clientHeight;r.width=n*t,r.height=i*t,e.viewport(0,0,r.width,r.height)}},97:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getUniformLocation=t.resizeCanvas=t.clearCanvas=t.enableAlpha=t.uploadTexture=t.createTexture=t.createLinkedVertexBuffer=t.createRectangleIndices=t.createProgram=void 0;var n=r(381);Object.defineProperty(t,"createProgram",{enumerable:!0,get:function(){return n.createProgram}});var i=r(144);Object.defineProperty(t,"createLinkedVertexBuffer",{enumerable:!0,get:function(){return i.createLinkedVertexBuffer}}),Object.defineProperty(t,"createRectangleIndices",{enumerable:!0,get:function(){return i.createRectangleIndices}});var o=r(363);Object.defineProperty(t,"createTexture",{enumerable:!0,get:function(){return o.createTexture}}),Object.defineProperty(t,"uploadTexture",{enumerable:!0,get:function(){return o.uploadTexture}});var a=r(478);Object.defineProperty(t,"enableAlpha",{enumerable:!0,get:function(){return a.enableAlpha}});var u=r(484);Object.defineProperty(t,"clearCanvas",{enumerable:!0,get:function(){return u.clearCanvas}}),Object.defineProperty(t,"resizeCanvas",{enumerable:!0,get:function(){return u.resizeCanvas}});var s=r(383);Object.defineProperty(t,"getUniformLocation",{enumerable:!0,get:function(){return s.getUniformLocation}})},381:(e,t)=>{function r(e,t,r){var n=e.createShader(t);if(!n)throw new Error("failed to create a shader");return e.shaderSource(n,r),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS)||(console.log(e.getShaderInfoLog(n)),e.deleteShader(n)),n}Object.defineProperty(t,"__esModule",{value:!0}),t.createProgram=void 0,t.createProgram=function(e,t,n){var i=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=e.createProgram();if(!n)throw new Error("failed to create program");for(var i=0,o=t.length;i<o;i++)e.attachShader(n,t[i]);return e.linkProgram(n),e.getProgramParameter(n,e.LINK_STATUS)||(console.log(e.getProgramInfoLog(n)),e.deleteProgram(n)),n}(e,r(e,e.VERTEX_SHADER,t),r(e,e.FRAGMENT_SHADER,n));return i}},363:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.uploadTexture=t.createTexture=void 0,t.createTexture=function(e,t){var r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e[t]),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e[t]),e.bindTexture(e.TEXTURE_2D,null),r},t.uploadTexture=function(e,t,r){return e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r),e.generateMipmap(e.TEXTURE_2D),e.bindTexture(e.TEXTURE_2D,null),t}},383:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getUniformLocation=void 0,t.getUniformLocation=function(e,t,r){return e.getUniformLocation(t,r)}},947:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=a(r(483)),s=a(r(289)),c=a(r(840)),l=o(r(97)),f=o(r(179)),h=function(){function e(e){this.resolution=window.devicePixelRatio||1;var t=e.canvas,r=e.width,n=e.height;this.canvas=t,this._screenSize={width:r,height:n},this.gl=this.canvas.getContext("webgl2");var i=this.gl;u.default.gl=i,this.resizeCanvas(),l.enableAlpha(i);var o=l.createProgram(i,s.default,c.default);this._program=o,this._indexBuffer=l.createRectangleIndices(i),this._vertexBuffer=l.createLinkedVertexBuffer(i,o,"a_position","a_texcoord"),this._transformUniformLocation=l.getUniformLocation(i,o,"u_transformation"),this._opacityUniformLocation=l.getUniformLocation(i,o,"u_opacity"),this._textureUniformLocation=l.getUniformLocation(i,o,"u_texture")}return e.prototype.clear=function(e,t,r,n){l.clearCanvas(this.gl,{r:e,g:t,b:r,a:n})},e.prototype.resizeCanvas=function(){l.resizeCanvas(this.gl,this.resolution)},Object.defineProperty(e.prototype,"width",{set:function(e){this._screenSize.width=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{set:function(e){this._screenSize.height=e},enumerable:!1,configurable:!0}),e.prototype.flush=function(){this.gl.flush()},e.prototype.render=function(e){e.calcRenderingInfos(),e.texture&&this.renderSprite(e);for(var t=e.children,r=0,n=t.length;r<n;r++)this.render(t[r])},e.prototype.renderSprite=function(e){var t=e.texture;if(t){var r=t.glTexture,n=this.gl,i=this._textureUniformLocation;n.useProgram(this._program),n.uniform1i(i,0),n.activeTexture(n.TEXTURE0+0),n.bindTexture(n.TEXTURE_2D,r);var o=f.projection(this._screenSize.width,this._screenSize.height),a=f.scaling(t.scale.x,t.scale.y),u=f.someMultiply(o,e.parentTransform,e.transform,a);n.uniformMatrix3fv(this._transformUniformLocation,!1,u);var s=e.opacity,c=e.parentOpacity*s;n.uniform1f(this._opacityUniformLocation,c);var l=this._vertexBuffer;n.bindBuffer(n.ARRAY_BUFFER,l);var h={w:t.width,h:t.height},d=[0,0,0,0,0,h.h,0,1,h.w,0,1,0,h.w,h.h,1,1];n.bufferData(n.ARRAY_BUFFER,new Float32Array(d),n.DYNAMIC_DRAW);var p=this._indexBuffer;n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,p),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,null),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindTexture(n.TEXTURE_2D,null)}},e}();t.default=h},483:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.checkGL=function(){if(e.gl)return e.gl;throw new Error("There seems to be no canvas")},e}();t.default=r},627:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.x=1,e.y=1,e}();t.default=r},59:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SCALE_MODE=void 0;var u,s=a(r(483)),c=o(r(97));!function(e){e.LINEAR="LINEAR",e.NEAREST="NEAREST"}(u=t.SCALE_MODE||(t.SCALE_MODE={}));var l=r(309),f=function(){function e(e,t){void 0===t&&(t=u.NEAREST),this._width=0,this._height=0,this._scale=new l.TwoDemensionParam,this.scaleMode=u.NEAREST,this.scaleMode=t;var r=s.default.checkGL(),n=c.createTexture(r,t);e?(this.glTexture=c.uploadTexture(r,n,e),this._width=e.width,this._height=e.height):this.glTexture=n}return Object.defineProperty(e.prototype,"texture",{set:function(e){var t=s.default.checkGL();this.glTexture=c.uploadTexture(t,this.glTexture,e),this._width=e.width,this._height=e.height},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this._scale},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),e}();t.default=f}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(607)})()}));

/***/ }),

/***/ "./node_modules/naras.js/dist/naras.min.js":
/*!*************************************************!*\
  !*** ./node_modules/naras.js/dist/naras.min.js ***!
  \*************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(self,(function(){return(()=>{"use strict";var t={178:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(108)),r=o(n(557)),a=n(894),u=function(){function t(){this.loader=i.default,this.baseMixer=new a.MasterMixer,this._unlockEvents=["click","scroll","touchstart"];for(var t=0,e=this._unlockEvents.length;t<e;t++)document.addEventListener(this._unlockEvents[t],this._initContext.bind(this),{once:!0});this._initContext()}return t.prototype._initContext=function(){"suspended"===r.default.cxt.state&&r.default.cxt.resume();for(var t=0,e=this._unlockEvents.length;t<e;t++)document.removeEventListener(this._unlockEvents[t],this._initContext.bind(this))},t.prototype.addResource=function(t,e){return this.loader.add(t,e),this},t.prototype.loadAll=function(){this.loader.loadAll()},t.prototype.loadThen=function(t){this.loader.loadThen(t)},Object.defineProperty(t.prototype,"loaded",{get:function(){return this.loader.loaded},enumerable:!1,configurable:!0}),t}();e.default=u},557:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=window.AudioContext||window.webkitAudioContext,o=function(){function t(){}return t.cxt=new n,t}();e.default=o},385:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){this.buffer=t,this.duration=t.duration}},607:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Loader=e.Processer=e.Sound=e.Mixer=e.App=void 0;var i=o(n(501));e.Sound=i.default;var r=o(n(178));e.App=r.default;var a=o(n(894));e.Mixer=a.default;var u=o(n(412));e.Processer=u.default;var s=o(n(108));e.Loader=s.default},108:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(557)),r=o(n(385)),a=function(){function t(){}return t.add=function(t,e){var n=this._promiseLoadingSound(t,e);return this._tasks.push(n),this.loaded=!1,this},t.loadAll=function(){var t=this;this._taskNum=this._tasks.length,this._progressManager(this._taskNum,this._taskNum),Promise.all(this._tasks).then((function(){t.loaded=!0,t._loadThen()}))},t.loadThen=function(t){this._loadThen=t,0===this._tasks.length&&t()},t._promiseLoadingSound=function(t,e){var n=this;return new Promise((function(o){fetch(e).then((function(t){return t.arrayBuffer()})).then((function(t){return n._cxt.decodeAudioData(t)})).then((function(e){var i=new r.default(e);n._resources.set(t,i),n._tasks.shift(),n._progressManager(n._taskNum,n._tasks.length),o(e)}))}))},t.manageProgress=function(t){this._progressManager=t},t.get=function(t){return this._resources.get(t)},t._resources=new Map,t._tasks=[],t._loadThen=function(){},t._cxt=i.default.cxt,t._progressManager=function(){},t._taskNum=0,t.loaded=!1,t}();e.default=a},341:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.defaultDelayParams=void 0;var i=o(n(557)),r={interval:1e3,attenuation:.5};e.defaultDelayParams=r;var a=function(){function t(t,e){this._interval=r.interval,this._attenuation=r.attenuation,this._delayNode=i.default.cxt.createDelay(10),this._attenuationNode=i.default.cxt.createGain(),this._delaySwitch=i.default.cxt.createGain(),this._realScale=1,e?(e.interval=e.interval||r.interval,e.attenuation=e.attenuation||r.attenuation):e=r,this.interval=e.interval,this.attenuation=e.attenuation,t.connect(this._delayNode),this._delayNode.connect(this._attenuationNode),this._attenuationNode.connect(this._delayNode),this._delayNode.connect(this._delaySwitch)}return Object.defineProperty(t.prototype,"interval",{get:function(){return this._interval},set:function(t){t=Math.min(Math.max(t,0),1e4),this._interval=t,this._delayNode.delayTime.value=t/1e3*this._realScale},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attenuation",{get:function(){return this._attenuation},set:function(t){this._attenuation=t,this._attenuationNode.gain.value=t},enumerable:!1,configurable:!0}),t.prototype.set=function(t,e){this.interval=t,this.attenuation=e},Object.defineProperty(t.prototype,"realScale",{set:function(t){this._realScale=t,this._delayNode.delayTime.value=this._interval/1e3*t},enumerable:!1,configurable:!0}),t.prototype.connect=function(t){this._delaySwitch.connect(t)},t.prototype.disconnect=function(){this._delaySwitch.disconnect(0)},t}();e.default=a},844:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(557)),r={x:0,y:0,z:0},a=function(){function t(t,e,n){this._pannerNode=i.default.cxt.createPanner(),this._position=r,t&&(this.x=t),e&&(this.y=e),n&&(this.z=n)}return Object.defineProperty(t.prototype,"x",{get:function(){return this._position.x},set:function(t){this._position.x=t,this._pannerNode.positionX.value=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._position.y},set:function(t){this._pannerNode.positionY.value=t,this._position.y=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"z",{get:function(){return this._position.z},set:function(t){this._pannerNode.positionZ.value=t,this._position.z=t},enumerable:!1,configurable:!0}),t.prototype.set=function(t,e,n){return this.x=t,this.y=e,this.z=n,this},Object.defineProperty(t.prototype,"node",{get:function(){return this._pannerNode},enumerable:!1,configurable:!0}),t.prototype.connect=function(t){this._pannerNode.connect(t)},t}();e.default=a},894:function(t,e,n){var o,i=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.MasterMixer=e.defaultOptions=void 0;var a=r(n(557)),u=r(n(341)),s=r(n(844)),l=n(341);e.defaultOptions={volume:1,loop:!1,scale:1,delay:l.defaultDelayParams,useDelay:!1,panner:{x:0,y:0,z:0}};var c=function(){function t(t){this._cxt=a.default.cxt,this._inputNode=a.default.cxt.createGain(),this._gainNode=a.default.cxt.createGain(),this._volume=e.defaultOptions.volume,this._scale=e.defaultOptions.scale,this._duration=0,this._playedTime=0,this._startedTime=0,this._position=0,this.children=[],this.isSound=!1,this._playPosition=0,this._playScale=1,this.playAction=function(){},this.stopAction=function(){},this.pauseAction=function(){},this.restartAction=function(){},t||(t=e.defaultOptions);var n=t.panner||e.defaultOptions.panner;this._panner=new s.default(n.x,n.y,n.z),this._delay=new u.default(this._inputNode,t.delay||e.defaultOptions.delay),this.volume=t.volume||e.defaultOptions.volume,this.scale=t.scale||e.defaultOptions.scale,this._useDelay=t.useDelay||e.defaultOptions.useDelay,this.useDelay=this._useDelay,this._inputNode.connect(this._panner.node),this._panner.connect(this._gainNode)}return Object.defineProperty(t.prototype,"position",{get:function(){return this._position},set:function(t){this._position=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"useDelay",{get:function(){return this._useDelay},set:function(t){this._useDelay=t,t?this._delay.connect(this._gainNode):this._delay.disconnect()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"delay",{get:function(){return this._delay},enumerable:!1,configurable:!0}),t.prototype.addChildren=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=0,o=t.length;n<o;n++)this.addChild(t[n])},t.prototype.addChild=function(t){this.children.push(t),t.connect(this._inputNode),t.parent=this},t.prototype.connect=function(t){this._gainNode.connect(t)},Object.defineProperty(t.prototype,"playScale",{get:function(){return this._playScale},set:function(t){this._playScale=t,this._delay.realScale=t},enumerable:!1,configurable:!0}),t.prototype.play=function(){this._propagateOrder("play")},t.prototype.stop=function(){this._propagateOrder("stop")},t.prototype.pause=function(){this._propagateOrder("pause")},t.prototype.restart=function(){this._propagateOrder("restart")},t.prototype._propagateOrder=function(t,e){var n=this;this._playPosition=this._calcPlayPosition(e),this.playScale=this._calcPlayScale(e),this.children.forEach((function(e){e._propagateOrder(t,n)})),this[t+"Action"]()},t.prototype._calcPlayPosition=function(t){return t?t._playPosition+this._position*t._playScale:0},t.prototype._calcPlayScale=function(t){return t?t._playScale*this._scale:this._scale},Object.defineProperty(t.prototype,"duration",{get:function(){return this._duration},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"volume",{get:function(){return this._volume},set:function(t){this._volume=t,this._gainNode.gain.value=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scale",{get:function(){return this._scale},set:function(t){this._scale=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"panner",{get:function(){return this._panner},enumerable:!1,configurable:!0}),t}();e.default=c;var f=function(t){function e(){var e=t.call(this)||this;return e.connect(a.default.cxt.destination),e}return i(e,t),e}(c);e.MasterMixer=f},412:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(557)),r=o(n(385)),a=function(){function t(){}return t._forAllChannels=function(t,e,n){for(var o=0,i=t.numberOfChannels;o<i;o++)n(e.getChannelData(o),t.getChannelData(o));return e},t._createSameSizedBuffer=function(t){return i.default.cxt.createBuffer(t.numberOfChannels,t.length,t.sampleRate)},t.reverse=function(e){var n=e.buffer,o=t._createSameSizedBuffer(n);return new r.default(t._forAllChannels(n,o,(function(t,e){for(var o=0,i=n.length;o<i;o++)t[o]=e[i-o]})))},t.trim=function(e,n,o){var a=e.buffer,u=a.sampleRate,s=(o-n)*a.sampleRate,l=i.default.cxt.createBuffer(a.numberOfChannels,s,u);return new r.default(t._forAllChannels(a,l,(function(t,e){for(var o=0,i=s;o<i;o++)t[o]=e[n*u+o]})))},t.raisePitch=function(e,n,o){var a=e.buffer,u=i.default.cxt.createBuffer(a.numberOfChannels,a.length,a.sampleRate);return new r.default(t._forAllChannels(a,u,(function(t,e){for(var i=0,r=a.length/n;i<r;i++)for(var u=0,s=n;u<s;u++)t[i*n+u]=e[Math.min(i*n+(u*o|0)%n,a.length-1)]})))},t.lowerPitch=function(e,n,o){var i=e.buffer,a=t._createSameSizedBuffer(i);return new r.default(t._forAllChannels(i,a,(function(t,e){for(var r=0,a=i.length/n;r<a;r++)for(var u=0,s=n*o;u<s;u++)t[r*n+u]=e[Math.min(r*n+(u/o|0),i.length-1)]})))},t.noise=function(e,n,o,i){var a=e.buffer,u=t._createSameSizedBuffer(a);return new r.default(t._forAllChannels(a,u,(function(t,e){for(var r=0,u=a.length;r<u;r++)Math.random()>n?t[r]=e[r]+2*(Math.random()-.5)*i:t[r]=2*o*(Math.random()-.5)})))},t.blur=function(e,n){var o=e.buffer,i=t._createSameSizedBuffer(o);return new r.default(t._forAllChannels(o,i,(function(t,e){for(var i=0,r=o.length;i<r;i++){for(var a=0,u=2*n+1,s=0,l=u;s<l;s++)a+=e[Math.max(Math.min(i-n+s,o.length-1),0)];t[i]=a/u}})))},t}();e.default=a},501:function(t,e,n){var o,i=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(894),u=1e3,s=Object.assign(a.defaultOptions,{loop:!1}),l=function(t){function e(e,n){var o=t.call(this,n)||this;return o._duration=0,o._loop=!1,o._playing=!1,o.isSound=!0,o.restartAction=function(){o._play(o._playedTime)},o.playAction=function(){o._playedTime=0,o._play(0)},o.stopAction=function(){o._playing&&o._sourceNode&&(o._sourceNode.stop(0),o._sourceNode.disconnect(0),o._endThen())},o.pauseAction=function(){o._playing&&(o._playedTime=(o._playedTime+o._cxt.currentTime-o._startedTime)%(o._duration/u),o._playing=!1,o._sourceNode.stop(0))},o._audio=e,e&&(o._duration=e.duration*u),n||(n=s),o.loop=n.loop||s.loop,o}return i(e,t),Object.defineProperty(e.prototype,"audio",{set:function(t){this._audio=t,this._duration=t.duration},enumerable:!1,configurable:!0}),e.prototype._play=function(t){if(void 0===t&&(t=0),this._audio){var e=this._cxt;this._sourceNode=e.createBufferSource(),this._sourceNode.buffer=this._audio.buffer,this._sourceNode.loop=this._loop;var n=this._playScale,o=this._playPosition;this._sourceNode.playbackRate.value=1/n;var i=this._sourceNode;i.connect(this._inputNode);var r=e.currentTime+o/u;if(i.start(r,t),this._sourceNode=i,this._startedTime=r,this._playing=!0,!this.loop){var a=o+this._duration*n;setTimeout(this._disconnectSourceNode.bind(this),a,i),this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=void 0),this._endTimer=setTimeout(this._endThen.bind(this),a)}}},e.prototype._disconnectSourceNode=function(t){t.disconnect(0)},e.prototype._endThen=function(){this._playing=!1,this._playedTime=0,this._sourceNode=null,this._endTimer=void 0},Object.defineProperty(e.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=t,this._sourceNode&&(this._sourceNode.loop=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"duration",{get:function(){return this._duration},enumerable:!1,configurable:!0}),e}(r(n(894)).default);e.default=l}},e={};return function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}(607)})()}));

/***/ }),

/***/ "./src/actor/actor.ts":
/*!****************************!*\
  !*** ./src/actor/actor.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var scene_1 = __importDefault(__webpack_require__(/*! ../scene */ "./src/scene/index.ts"));
var egak_js_1 = __webpack_require__(/*! egak.js */ "./node_modules/egak.js/dist/egak.min.js");
var Actor = /** @class */ (function (_super) {
    __extends(Actor, _super);
    function Actor(texture) {
        var _this = _super.call(this) || this;
        _this.sprite = new egak_js_1.Sprite(texture);
        _this.stage.addChild(_this.sprite);
        return _this;
    }
    return Actor;
}(scene_1.default));
exports["default"] = Actor;


/***/ }),

/***/ "./src/actor/index.ts":
/*!****************************!*\
  !*** ./src/actor/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var actor_1 = __importDefault(__webpack_require__(/*! ./actor */ "./src/actor/actor.ts"));
exports["default"] = actor_1.default;


/***/ }),

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var EGAK = __importStar(__webpack_require__(/*! egak.js */ "./node_modules/egak.js/dist/egak.min.js"));
var NARAS = __importStar(__webpack_require__(/*! naras.js */ "./node_modules/naras.js/dist/naras.min.js"));
var ticker_1 = __importDefault(__webpack_require__(/*! ../ticker */ "./src/ticker/index.ts"));
var scene_1 = __importDefault(__webpack_require__(/*! ../scene */ "./src/scene/index.ts"));
var defaultAppOptions = {
    width: 300,
    height: 400,
    autoStart: false,
    canvas: document.createElement('canvas'),
    autoStyleCanvas: false,
};
var App = /** @class */ (function () {
    function App(options) {
        var _this = this;
        this.ticker = new ticker_1.default();
        this._width = 0;
        this._height = 0;
        this._loadThen = function () { };
        this.mainLoop = function (delta, info) {
            _this.renderSystem.clearScreen(0, 0, 0, 1);
            _this.baseScene.update(delta, info);
            _this.renderSystem.render();
        };
        options = Object.assign(defaultAppOptions, options);
        this._width = options.width;
        this._height = options.height;
        this.renderSystem = new EGAK.App({
            width: this._width,
            height: this._height,
            canvas: options.canvas
        });
        this.soundSystem = new NARAS.App();
        this.baseScene = new scene_1.default();
        this.renderSystem.baseStage.addChild(this.baseScene.stage);
        this.soundSystem.baseMixer.addChild(this.baseScene.mixer);
        this.renderSystem.loader.loadThen(function () {
            if (_this.soundSystem.loaded) {
                _this._loadThen();
            }
        });
        this.soundSystem.loader.loadThen(function () {
            if (_this.renderSystem.loaded) {
                _this._loadThen();
            }
        });
        this.ticker.add(this.mainLoop.bind(this));
        if (options.autoStart) {
            this.ticker.start();
        }
    }
    App.prototype.start = function () {
        this.ticker.start();
    };
    App.prototype.addImage = function (id, src) {
        this.renderSystem.addResource(id, src);
        return this;
    };
    App.prototype.addSound = function (id, src) {
        this.soundSystem.addResource(id, src);
        return this;
    };
    App.prototype.loadAll = function () {
        this.renderSystem.loadAll();
        this.soundSystem.loadAll();
    };
    App.prototype.getTexture = function (id) {
        return this.renderSystem.loader.get(id);
    };
    App.prototype.getAudio = function (id) {
        return this.soundSystem.loader.get(id);
    };
    App.prototype.loadThen = function (func) {
        this._loadThen = func;
    };
    return App;
}());
exports["default"] = App;


/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var app_1 = __importDefault(__webpack_require__(/*! ./app */ "./src/app/app.ts"));
exports["default"] = app_1.default;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextureLoader = exports.Text = exports.Stage = exports.Sprite = exports.SoundLoader = exports.Mixer = exports.Sound = exports.Actor = exports.Scene = exports.App = void 0;
var app_1 = __importDefault(__webpack_require__(/*! ./app */ "./src/app/index.ts"));
exports.App = app_1.default;
var scene_1 = __importDefault(__webpack_require__(/*! ./scene */ "./src/scene/index.ts"));
exports.Scene = scene_1.default;
var actor_1 = __importDefault(__webpack_require__(/*! ./actor */ "./src/actor/index.ts"));
exports.Actor = actor_1.default;
var EGAK = __importStar(__webpack_require__(/*! egak.js */ "./node_modules/egak.js/dist/egak.min.js"));
var NARAS = __importStar(__webpack_require__(/*! naras.js */ "./node_modules/naras.js/dist/naras.min.js"));
var Sprite = EGAK.Sprite, Stage = EGAK.Stage, Text = EGAK.Text, TextureLoader = EGAK.Loader;
exports.Sprite = Sprite;
exports.Stage = Stage;
exports.Text = Text;
exports.TextureLoader = TextureLoader;
var Sound = NARAS.Sound, Mixer = NARAS.Mixer, SoundLoader = NARAS.Loader;
exports.Sound = Sound;
exports.Mixer = Mixer;
exports.SoundLoader = SoundLoader;


/***/ }),

/***/ "./src/scene/index.ts":
/*!****************************!*\
  !*** ./src/scene/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var scene_1 = __importDefault(__webpack_require__(/*! ./scene */ "./src/scene/scene.ts"));
exports["default"] = scene_1.default;


/***/ }),

/***/ "./src/scene/scene.ts":
/*!****************************!*\
  !*** ./src/scene/scene.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var egak_js_1 = __webpack_require__(/*! egak.js */ "./node_modules/egak.js/dist/egak.min.js");
var naras_js_1 = __webpack_require__(/*! naras.js */ "./node_modules/naras.js/dist/naras.min.js");
var Scene = /** @class */ (function () {
    function Scene() {
        this.children = new Set();
        this.stage = new egak_js_1.Stage();
        this.mixer = new naras_js_1.Mixer();
        this.needsInfoNames = new Set();
    }
    Scene.prototype.act = function (delta, info) {
    };
    Scene.prototype.update = function (delta, info) {
        var _this = this;
        this.act(delta, info);
        this.children.forEach(function (actor) {
            var info = {};
            actor.needsInfoNames.forEach(function (name) {
                info[name] = _this[name];
            });
            actor.update(delta, info);
        });
    };
    Scene.prototype.needs = function () {
        var name = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            name[_i] = arguments[_i];
        }
        for (var i = 0, len = name.length; i < len; i++) {
            this.needsInfoNames.add(name[i]);
        }
        return this;
    };
    Scene.prototype.unneeds = function (name) {
        this.needsInfoNames.delete(name);
        return this;
    };
    Scene.prototype.addChild = function (scene) {
        this.stage.addChild(scene.stage);
        this.mixer.addChild(scene.mixer);
        this.children.add(scene);
        return this;
    };
    Scene.prototype.removeChild = function (scene) {
        this.stage.removeChild(scene.stage);
        this.mixer.removeChild(scene.mixer);
        this.children.delete(scene);
        return this;
    };
    Scene.prototype.addSprite = function (sprite) {
        this.stage.addChild(sprite);
        return this;
    };
    Scene.prototype.addSound = function (sound) {
        this.mixer.addChild(sound);
        return this;
    };
    return Scene;
}());
exports["default"] = Scene;


/***/ }),

/***/ "./src/ticker/index.ts":
/*!*****************************!*\
  !*** ./src/ticker/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ticker_1 = __importDefault(__webpack_require__(/*! ./ticker */ "./src/ticker/ticker.ts"));
exports["default"] = ticker_1.default;


/***/ }),

/***/ "./src/ticker/ticker.ts":
/*!******************************!*\
  !*** ./src/ticker/ticker.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var MILLI = 1000;
var Ticker = /** @class */ (function () {
    function Ticker() {
        var _this = this;
        this._FPS = 60;
        this._ecpectedElapsedTime = MILLI / this._FPS;
        this.permittedDelay = 2;
        this._tickFunctions = new Set();
        this._prevTimeStamp = 0;
        this._mainloop = function (timeStamp) {
            var delta = _this._calcDelta(timeStamp);
            var ticks = _this._tickFunctions;
            ticks.forEach(function (func) {
                func(delta);
            });
            _this._animationRequest = requestAnimationFrame(_this._mainloop.bind(_this));
        };
    }
    Ticker.prototype._calcDelta = function (timeStamp) {
        var elapsedTime = this._prevTimeStamp - timeStamp;
        this._prevTimeStamp = timeStamp;
        var delta = Math.min(elapsedTime / this._ecpectedElapsedTime, this.permittedDelay);
        return delta;
    };
    Ticker.prototype.start = function () {
        this._animationRequest = requestAnimationFrame(this._mainloop);
    };
    Ticker.prototype.stop = function () {
        if (this._animationRequest)
            cancelAnimationFrame(this._animationRequest);
    };
    Ticker.prototype.add = function (func) {
        this._tickFunctions.add(func);
        return this;
    };
    Ticker.prototype.remove = function (func) {
        this._tickFunctions.delete(func);
    };
    Object.defineProperty(Ticker.prototype, "FPS", {
        get: function () {
            return this._FPS;
        },
        set: function (value) {
            this._FPS = value;
            this._ecpectedElapsedTime = MILLI / this._FPS;
        },
        enumerable: false,
        configurable: true
    });
    return Ticker;
}());
exports["default"] = Ticker;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=ugocas.js.map