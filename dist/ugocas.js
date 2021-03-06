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

!function(t,e){ true?module.exports=e():0}(self,(function(){return(()=>{"use strict";var t={210:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n="#version 300 es\r\nprecision highp float;\r\n\r\nin vec4 v_color;\r\nin vec2 v_position;\r\n\r\nuniform float u_opacity;\r\nuniform float u_radius;\r\nuniform vec2 u_center;\r\nuniform float u_startAngle;\r\nuniform float u_endAngle;\r\nuniform float u_clockwize;\r\n\r\nout vec4 outColor;\r\n\r\nconst float PI  = 3.141592653589793;\r\nconst float PI2 = PI * 2.0;\r\n\r\nconst float COLOR_BYTES = 255.;\r\nconst float COLOR_BYTES_INVERSE = 1./COLOR_BYTES;\r\nconst float edge = 1.;\r\n\r\nvoid main() {\r\n   vec4 normalizedColor = v_color * vec4(COLOR_BYTES_INVERSE, COLOR_BYTES_INVERSE, COLOR_BYTES_INVERSE, u_opacity);\r\n   \r\n   float dx = v_position.x - u_center.x;\r\n   float dy = v_position.y - u_center.y;\r\n   //float angle = u_clockwize*fract(atan(dy, dx)/PI2 + 1.);\r\n\r\n   float dist = distance(u_center, v_position)/u_radius;\r\n   float delta = fwidth(dist);\r\n   float alpha = smoothstep(edge - delta, edge, dist);\r\n\r\n   \r\n\r\n   //if(u_clockwize*angle >= u_startAngle && u_clockwize*angle <= u_endAngle){\r\n      outColor = mix(normalizedColor, outColor, alpha);\r\n   //} else {\r\n   //   discard;\r\n   //}\r\n}"},866:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n="#version 300 es\r\n \r\nin vec2 a_position;\r\nin vec4 a_color;\r\n \r\nuniform mat3 u_transformation;\r\n \r\nout vec4 v_color;\r\nout vec2 v_position;\r\n \r\nvoid main() {\r\n   v_color = a_color;\r\n\r\n   gl_Position = vec4((u_transformation * vec3(a_position, 1)).xy, 0, 1);\r\n   v_position = a_position;\r\n}"},322:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n="#version 300 es\r\nprecision highp float;\r\n\r\nin vec4 v_color;\r\nin vec2 v_position;\r\n\r\nuniform float u_opacity;\r\n\r\nuniform vec2 u_center;\r\nuniform float u_width;\r\nuniform float u_height;\r\n\r\nout vec4 outColor;\r\n\r\nconst float COLOR_BYTES = 255.;\r\nconst float COLOR_BYTES_INVERSE = 1./COLOR_BYTES;\r\nconst float edge = 1.;\r\n\r\nvoid main() {\r\n   vec4 normalizedColor = v_color * vec4(COLOR_BYTES_INVERSE, COLOR_BYTES_INVERSE, COLOR_BYTES_INVERSE, u_opacity);\r\n\r\n   float focus = sqrt(abs(u_width*u_width - u_height*u_height))/2.;\r\n   float dx = v_position.x - u_center.x;\r\n   float dy = v_position.y - u_center.y;\r\n\r\n   if(u_width > u_height){\r\n      float dist1 = distance(vec2(focus, 0), vec2(dx, dy));\r\n      float dist2 = distance(vec2(-focus, 0), vec2(dx, dy));\r\n\r\n      float dist = (dist1 + dist2)/u_width;\r\n      float delta = fwidth(dist);\r\n      float alpha = smoothstep(edge-delta, edge, dist);\r\n\r\n      outColor = mix(normalizedColor, outColor, alpha);\r\n\r\n\r\n   } else {\r\n      float dist1 = distance(vec2(0, focus), vec2(dx, dy));\r\n      float dist2 = distance(vec2(0, -focus), vec2(dx, dy));\r\n\r\n      float dist = (dist1 + dist2)/u_height;\r\n      float delta = fwidth(dist);\r\n      float alpha = smoothstep(edge-delta, edge, dist);\r\n\r\n      outColor = mix(normalizedColor, outColor, alpha);\r\n\r\n   }\r\n}"},433:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n="#version 300 es\r\n \r\nin vec2 a_position;\r\nin vec4 a_color;\r\n \r\nuniform mat3 u_transformation;\r\n \r\nout vec4 v_color;\r\nout vec2 v_position;\r\n \r\nvoid main() {\r\n   v_color = a_color;\r\n\r\n   gl_Position = vec4((u_transformation * vec3(a_position, 1)).xy, 0, 1);\r\n   v_position = a_position;\r\n}"},848:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n="#version 300 es\r\nprecision highp float;\r\n\r\nin vec4 v_color;\r\n\r\n\r\nuniform float u_opacity;\r\n\r\nconst float COLOR_BYTES = 255.;\r\nconst float COLOR_BYTES_INVERSE = 1./COLOR_BYTES;\r\n\r\nout vec4 outColor;\r\n\r\nvoid main() {\r\n   outColor = v_color * vec4(COLOR_BYTES_INVERSE, COLOR_BYTES_INVERSE, COLOR_BYTES_INVERSE, u_opacity);\r\n}"},139:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n="#version 300 es\r\n \r\nin vec2 a_position;\r\nin vec4 a_color;\r\n \r\nuniform mat3 u_transformation;\r\n \r\nout vec4 v_color;\r\n \r\nvoid main() {\r\n   v_color = a_color;\r\n\r\n   gl_Position = vec4((u_transformation * vec3(a_position, 1)).xy, 0, 1);\r\n}"},682:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n="#version 300 es\r\nprecision highp float;\r\n\r\nin vec4 v_color;\r\nin vec2 v_position;\r\n\r\nuniform float u_opacity;\r\n\r\nuniform float u_radius;\r\nuniform vec2 u_position;\r\nuniform float u_width;\r\nuniform float u_height;\r\n\r\nconst float COLOR_BYTES = 255.;\r\nconst float COLOR_BYTES_INVERSE = 1./COLOR_BYTES;\r\n\r\n\r\n\r\nout vec4 outColor;\r\n\r\nvoid main() {\r\n   vec4 normalizedVColor = v_color*vec4(COLOR_BYTES_INVERSE, COLOR_BYTES_INVERSE, COLOR_BYTES_INVERSE, u_opacity);\r\n\r\n   vec2[4] centers = vec2[](\r\n      vec2(u_position.x + u_radius,            u_position.y + u_radius),\r\n      vec2(u_position.x + u_radius,            u_position.y + u_height - u_radius),\r\n      vec2(u_position.x + u_width - u_radius,  u_position.y + u_radius),\r\n      vec2(u_position.x + u_width - u_radius,  u_position.y + u_height - u_radius)\r\n   );\r\n\r\n   float[4] distances = float[](\r\n      0., 0., 0., 0.\r\n   );\r\n\r\n   float[4] alphas = float[](\r\n      0., 0., 0., 0.\r\n   );\r\n   for(int i = 0; i<4; i++){\r\n      float dist = distance(centers[i], v_position)/u_radius;\r\n      distances[i] = dist;\r\n      float delta = fwidth(dist);\r\n      alphas[i] = smoothstep(1.-delta, 1., dist);\r\n   }\r\n\r\n   if(distance(v_position, vec2(u_position.xy)) < u_radius){\r\n      outColor = mix(normalizedVColor, outColor, alphas[0]);\r\n   } else if(distance(v_position, vec2(u_position.x, u_position.y+u_height)) < u_radius){\r\n      outColor = mix(normalizedVColor, outColor, alphas[1]);\r\n   } else if(distance(v_position, vec2(u_position.x+u_width, u_position.y)) < u_radius){\r\n      outColor = mix(normalizedVColor, outColor, alphas[2]);\r\n   } else if(distance(v_position, vec2(u_position.x+u_width, u_position.y+u_height)) < u_radius){\r\n      outColor = mix(normalizedVColor, outColor, alphas[3]);\r\n   } else {\r\n      outColor = normalizedVColor;\r\n   }\r\n}"},579:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n="#version 300 es\r\n \r\nin vec2 a_position;\r\nin vec4 a_color;\r\n \r\nuniform mat3 u_transformation;\r\n \r\nout vec4 v_color;\r\nout vec2 v_position;\r\n \r\nvoid main() {\r\n   v_color = a_color;\r\n\r\n   gl_Position = vec4((u_transformation * vec3(a_position, 1)).xy, 0, 1);\r\n   v_position = a_position;\r\n}"},138:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n="#version 300 es\r\nprecision highp float;\r\n\r\nin vec2 v_texcoord;\r\n\r\nuniform sampler2D u_texture;\r\n\r\nuniform float u_opacity;\r\n\r\nout vec4 outColor;\r\n\r\nvoid main() {\r\n   outColor = texture(u_texture, v_texcoord) * vec4(1, 1, 1, u_opacity);\r\n}"},798:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const n="#version 300 es\r\n \r\nin vec2 a_position;\r\nin vec2 a_texcoord;\r\n \r\nuniform mat3 u_transformation;\r\n \r\nout vec2 v_texcoord;\r\n \r\nvoid main() {\r\n   v_texcoord = a_texcoord;\r\n\r\n   gl_Position = vec4((u_transformation * vec3(a_position, 1)).xy, 0, 1);\r\n}"},178:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.defaultResolution=void 0;var o=n(r(947)),i=n(r(108)),a=n(r(627)),u=n(r(991)),s=r(236),c={width:300,height:150,canvas:document.createElement("canvas"),autoStyleCanvas:!1,autoPreventDefault:!0};e.defaultResolution={x:1,y:1};var l=function(){function t(t){this.loader=i.default;var e=(t=Object.assign(c,t)).width,r=t.height;this.baseStage=new s.BaseStage(e,r);var n=t.canvas,l=t.autoStyleCanvas;this._canvas=n,l&&(n.style.width="".concat(e,"px"),n.style.height="".concat(r,"px")),this._screenSize={width:e,height:r},this.renderer=new o.default({canvas:n,width:e,height:r}),a.default.x=this._resolutionX,a.default.y=this._resolutionY,u.default.screenSize=this._screenSize,this._preventTouchScrolling=t.autoPreventDefault}return t.prototype.enablePointerEvent=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];e.forEach((function(e){u.default.enableEvent(e,t._canvas,t.baseStage)})),this._preventTouchScrolling||u.default.disablePreventScrolling(this._canvas)},Object.defineProperty(t.prototype,"width",{set:function(t){this._screenSize.width=t,this.renderer.width=t,a.default.x=this._resolutionX},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{set:function(t){this._screenSize.height=t,this.renderer.height=t,a.default.y=this._resolutionY},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_resolutionX",{get:function(){return this.renderer.resolution*this._canvas.width/this._screenSize.width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_resolutionY",{get:function(){return this.renderer.resolution*this._canvas.height/this._screenSize.height},enumerable:!1,configurable:!0}),t.prototype.render=function(){this.renderer.render(this.baseStage),this.renderer.flush()},t.prototype.clearScreen=function(t,e,r,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===r&&(r=0),this.renderer.clear(t,e,r,n)},t.prototype.addResource=function(t,e){this.loader.add(t,e)},t.prototype.loadAll=function(){this.loader.loadAll()},Object.defineProperty(t.prototype,"loaded",{get:function(){return this.loader.loaded},enumerable:!1,configurable:!0}),t}();e.default=l},495:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r(178));e.default=o.default},309:function(t,e){var r,n=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.defaultColor=e.TwoDemensionParam=void 0;var o=function(){function t(){this._x=1,this._y=1}return Object.defineProperty(t.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t},enumerable:!1,configurable:!0}),t.prototype.set=function(t,e){this._x=t,this._y=void 0!==e?e:t},t}();e.TwoDemensionParam=o;var i=function(t){function e(){var e=t.call(this)||this;return e._x=0,e._y=0,e}return n(e,t),e}(o);e.defaultColor={r:0,g:0,b:0,a:1};var a=function(){function t(){this._position=new i,this._opacity=1,this._scale=new o,this.rotation=0}return Object.defineProperty(t.prototype,"opacity",{get:function(){return this._opacity},set:function(t){this._opacity=Math.min(Math.max(t,0),1)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"position",{get:function(){return this._position},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scale",{get:function(){return this._scale},enumerable:!1,configurable:!0}),t}();e.default=a},494:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Text=e.Sprite=e.Stage=void 0;var o=n(r(236));e.Stage=o.default;var i=n(r(339));e.Sprite=i.default;var a=n(r(736));e.Text=a.default},339:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),a=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&i(e,t,r);return a(e,t),e},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=s(r(236)),l=u(r(179)),f=function(){function t(t,e){this._x=0,this._y=0,this._anchor=t,this._texture=e}return t.prototype.set=function(t,e){this._x=t,this._y=null!=e?e:t,this._reflectAnchorX(),this._reflectAnchorY()},t.prototype._reflectAnchorX=function(){var t=this._texture;t&&(this._anchor.x=t.width*t.scale.x*this._x)},t.prototype._reflectAnchorY=function(){var t=this._texture;t&&(this._anchor.y=t.height*t.scale.y*this._y)},Object.defineProperty(t.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t,this._reflectAnchorX()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t,this._reflectAnchorY()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"texture",{set:function(t){this._texture=t,this._reflectAnchorX(),this._reflectAnchorY()},enumerable:!1,configurable:!0}),t}(),h=s(r(81)),d=function(t){function e(e){var r=t.call(this)||this;return r.shaderType="sprite",r.renderingType="sprite",r.normalAnchor=new f(r.anchor),e&&(r.texture=e),r}return o(e,t),Object.defineProperty(e.prototype,"texture",{get:function(){return this._texture},set:function(t){this._texture=t,this.normalAnchor.texture=t},enumerable:!1,configurable:!0}),e.prototype._calculateTransform=function(){var t=l.translation(this.position.x,this.position.y),e=l.scaling(this.scale.x,this.scale.y),r=l.rotation(this.rotation),n=l.translation(-this.anchor.x,-this.anchor.y);return l.someMultiply(t,r,e,n)},e.prototype._getBoundingRect=function(){var t,e=this.worldScale,r=this.worldPosition;t=this.texture&&(this.normalAnchor.x||this.normalAnchor.y)?{x:this.texture.width*this.normalAnchor.x,y:this.texture.height*this.normalAnchor.y}:{x:this.anchor.x,y:this.anchor.y};var n=r.x+(this.position.x-t.x)*e.x,o=r.y+(this.position.y-t.y)*e.y,i=(this.texture?this.texture.width*this.texture.scale.x:this._size.width)*this.scale.x*e.x,a=(this.texture?this.texture.height*this.texture.scale.y:this._size.height)*this.scale.y*e.y;return new h.default(n,o,i,a)},e}(c.default);e.default=d},236:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),a=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&i(e,t,r);return a(e,t),e},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.BaseStage=e.Anchor=void 0;var c=s(r(309)),l=r(309),f=u(r(179)),h=s(r(257)),d=function(t){function e(){var e=t.call(this)||this;return e._x=0,e._y=0,e}return o(e,t),e}(l.TwoDemensionParam);e.Anchor=d;var p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.anchor=new d,e.transform=f.identity(),e.parentTransform=f.identity(),e.parentOpacity=1,e.parent=void 0,e.renderingType="",e.shaderType="",e._zIndex=0,e.needsToSort=!1,e._size={width:0,height:0},e._eventsSets={pointerdown:new Set,pointerup:new Set,pointermove:new Set,pointerout:new Set},e.children=[],e}return o(e,t),Object.defineProperty(e.prototype,"zIndex",{get:function(){return this._zIndex},set:function(t){this._zIndex=t,this.parent&&(this.parent.needsToSort=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"staticWidth",{get:function(){return this._size.width},set:function(t){this._size.width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"staticHeight",{get:function(){return this._size.height},set:function(t){this._size.height=t},enumerable:!1,configurable:!0}),e.prototype.calcRenderingInfos=function(){this.transform=this._calculateTransform(),this.parentTransform=this._calculateParentTransform(),this.parentOpacity=this._calculateParentOpacity()},e.prototype.addChild=function(t){t.parent||(t.parent=this,this.children.push(t))},e.prototype.removeChild=function(t){this.children.splice(this.children.indexOf(t),1),t.parent=void 0},e.prototype._calculateTransform=function(){var t=f.translation(this.position.x,this.position.y),e=f.scaling(this.scale.x,this.scale.y),r=f.rotation(this.rotation),n=f.translation(-this.anchor.x,-this.anchor.y);return f.someMultiply(t,r,e,n)},e.prototype._calculateParentTransform=function(){return this.parent?f.multiply(this.parent.parentTransform,this.parent.transform):f.identity()},e.prototype._calculateParentOpacity=function(){return this.parent?this.parent.parentOpacity*this.parent.opacity:1},Object.defineProperty(e.prototype,"wholeOpacity",{get:function(){return this.opacity*this.parentOpacity},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldScale",{get:function(){if(this.parent){var t=this.parent,e=t.worldScale;return{x:e.x*t.scale.x,y:e.y*t.scale.y}}return{x:1,y:1}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldPosition",{get:function(){if(this.parent){var t=this.parent,e=t.worldPosition,r=t.worldScale;return{x:e.x+t.position.x*r.x,y:e.y+t.position.y*r.y}}return{x:0,y:0}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"x",{get:function(){return this.position.x},set:function(t){this.position.x=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.position.y},set:function(t){this.position.y=t},enumerable:!1,configurable:!0}),e.prototype.addEventListener=function(t,e){var r={target:this,callback:e};this._eventsSets[t].add(r)},e.prototype._getBoundingRect=function(){var t=this.worldScale,e=this.worldPosition,r=e.x+(this.position.x-this.anchor.x)*t.x,n=e.y+(this.position.y-this.anchor.y)*t.y,o=this._size.width*this.scale.x*t.x,i=this._size.height*this.scale.y*t.y;return new h.default(r,n,o,i)},e.prototype.triggerEvent=function(t,e){this._getBoundingRect().detectPointHit(e.x,e.y)&&this._eventsSets[t].forEach((function(t){t.callback(e)})),this.propagateEvent(t,e)},e.prototype.propagateEvent=function(t,e){for(var r=this.children,n=0,o=r.length;n<o;n++)r[n].triggerEvent(t,e)},e.prototype.sortChildren=function(){this.children.sort((function(t,e){return t.zIndex-e.zIndex}))},e}(c.default);e.default=p;var _=function(t){function e(e,r){var n=t.call(this)||this;return n._size={width:e,height:r},n}return o(e,t),e}(p);e.BaseStage=_},736:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{s(n.next(t))}catch(t){i(t)}}function u(t){try{s(n.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,u)}s((n=n.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=u(r(339)),c=u(r(59)),l=u(r(627)),f=r(59),h=r(309),d={font:"sans-serif",fontSize:20,fill:h.defaultColor,strokeWidth:0,stroke:h.defaultColor,shadow:h.defaultColor,shadowX:1,shadowY:1,shadowBlur:0},p=function(t){return"rgba(".concat(t.r,", ").concat(t.g,", ").concat(t.b,", ").concat(t.a,")")},_=function(t){function e(e,r){var n=t.call(this)||this;for(var o in n._text="",n._canvas=document.createElement("canvas"),n._resolution=l.default,n.needsToUpdate=!1,n._text=e||"",r=Object.assign(d,r),n._style=r,d)n._style[o]=r[o]||d[o];return n._texture=new c.default(void 0,f.SCALE_MODE.LINEAR),n.texture=n._texture,n.updateCanvasTexture(),n}return o(e,t),e.prototype._drawCanvas=function(){var t=this._canvas,e=t.getContext("2d"),r=this._style,n=this._text;t.width=2,t.height=2,e.font="".concat(r.fontSize,"px ").concat(r.font),e.textBaseline="top";var o=e.measureText(n),i=o.width+(r.shadow?r.shadowX:0),a=o.actualBoundingBoxDescent-o.actualBoundingBoxAscent+(r.shadow?r.shadowY:0);t.width=i*this._resolution.x,t.height=a*this._resolution.y,e.scale(this._resolution.x,this._resolution.y),e.clearRect(0,0,t.width,t.height),e.beginPath(),(r.shadowX||r.shadowY)&&(e.shadowOffsetX=r.shadowX,e.shadowOffsetY=r.shadowY,e.shadowBlur=r.shadowBlur,e.shadowColor=p(r.shadow)),e.font="".concat(r.fontSize,"px ").concat(r.font),e.textBaseline="top",e.fillStyle=p(r.fill),e.fillText(n,0,0),e.closePath(),e.beginPath(),r.strokeWidth&&(e.shadowOffsetX=0,e.shadowOffsetY=0,e.lineWidth=r.strokeWidth,e.strokeStyle=p(r.stroke),e.strokeText(n,0,0)),this._texture.scale.x=1/this._resolution.x,this._texture.scale.y=1/this._resolution.y},Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){this._text=t,this.needsToUpdate=!0},enumerable:!1,configurable:!0}),e.prototype.updateCanvasTexture=function(){return i(this,void 0,void 0,(function(){return a(this,(function(t){return this._drawCanvas(),this._texture.texture=this._canvas,this.texture=this._texture,this.needsToUpdate=!1,[2]}))}))},Object.defineProperty(e.prototype,"style",{get:function(){return this.needsToUpdate=!0,this._style},enumerable:!1,configurable:!0}),e}(s.default);e.default=_},268:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=i(r(744)),u=r(309),s=function(t){function e(e,r,n,o,i,a,s,c,l){var f=t.call(this)||this;return f.graphicsType="circle",f.shaderType="circle",f.color={r:0,g:0,b:0,a:1},f.startAngle=0,f.endAngle=2*Math.PI,f.clockWize=1,f.geometryInfo={center:{x:0,y:0},radius:0,color:u.defaultColor},f.geometryInfo.radius=n,f.geometryInfo.center={x:e,y:r},f.geometryInfo.color={r:o,g:i,b:a,a:s},f.startAngle=c||0,f.endAngle=l||2*Math.PI,f}return o(e,t),e.prototype.calcVertices=function(){var t=[],e=this.geometryInfo,r=e.center,n=e.radius,o=e.color,i=r.x,a=r.y;return t.push(i-n,a-n,o.r,o.g,o.b,o.a,i-n,a+n,o.r,o.g,o.b,o.a,i+n,a-n,o.r,o.g,o.b,o.a,i+n,a+n,o.r,o.g,o.b,o.a),t},e.prototype.calcStrokeVertices=function(){var t=[],e=this.geometryInfo,r=e.center,n=e.radius,o=r.x,i=r.y,a=this._strokeWidth,u=this._stroke;return t.push(o-n-a,i-n-a,u.r,u.g,u.b,u.a,o-n-a,i+n+a,u.r,u.g,u.b,u.a,o+n+a,i-n-a,u.r,u.g,u.b,u.a,o+n+a,i+n+a,u.r,u.g,u.b,u.a),t},e}(a.default);e.default=s},519:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=i(r(744)),u=r(309),s=function(t){function e(e,r,n,o,i){var a=t.call(this)||this;return a.graphicsType="ellipse",a.shaderType="ellipse",a.geometryInfo={x:0,y:0,width:100,height:50,color:u.defaultColor},a.geometryInfo={x:e,y:r,width:n,height:o,color:i},a}return o(e,t),e.prototype.calcVertices=function(){var t=[],e=this.geometryInfo,r=e.x,n=e.y,o=e.width,i=e.height,a=e.color,u=.5*o,s=.5*i;return t.push(r-u,n-s,a.r,a.g,a.b,a.a,r-u,n+s,a.r,a.g,a.b,a.a,r+u,n-s,a.r,a.g,a.b,a.a,r+u,n+s,a.r,a.g,a.b,a.a),t},e.prototype.calcStrokeVertices=function(){var t=[],e=this.geometryInfo,r=e.x,n=e.y,o=.5*e.width,i=.5*e.height,a=this._stroke,u=this._strokeWidth;return t.push(r-o-u,n-i-u,a.r,a.g,a.b,a.a,r-o-u,n+i+u,a.r,a.g,a.b,a.a,r+o+u,n-i-u,a.r,a.g,a.b,a.a,r+o+u,n+i+u,a.r,a.g,a.b,a.a),t},e}(a.default);e.default=s},724:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(e,r,n,o,i){for(var a=[],u=5;u<arguments.length;u++)a[u-5]=arguments[u];var s=t.call(this)||this;return s.shaderType="roundedrect",s.graphicsType="roundedrect",s.geometryInfo={x:e,y:r,w:n,h:o,radius:i,colors:a},s}return o(e,t),e.prototype.calcVertices=function(){var t=this.geometryInfo,e=t.x,r=t.y,n=t.w,o=t.h,i=t.colors;return[e,r,i[0][0],i[0][1],i[0][2],i[0][3],e,r+o,i[1][0],i[1][1],i[1][2],i[1][3],e+n,r,i[2][0],i[2][1],i[2][2],i[2][3],e+n,r+o,i[3][0],i[3][1],i[3][2],i[3][3]]},e.prototype.calcStrokeVertices=function(){var t=this.geometryInfo,e=t.x,r=t.y,n=t.w,o=t.h,i=this._stroke,a=this._strokeWidth;return[e-a,r-a,i.r,i.g,i.b,i.a,e-a,r+o+a,i.r,i.g,i.b,i.a,e+n+a,r-a,i.r,i.g,i.b,i.a,e+n+a,r+o+a,i.r,i.g,i.b,i.a]},e}(i(r(744)).default);e.default=a},744:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=i(r(236)),u=r(309),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.renderingType="graphics",e.vertices=[],e.strokeVertices=[],e.needsUpdatingVertices=!0,e.needsUpdatingStroke=!1,e._strokeWidth=0,e._stroke=u.defaultColor,e}return o(e,t),Object.defineProperty(e.prototype,"strokeWidth",{get:function(){return this.needsUpdatingStroke=!0,this._strokeWidth},set:function(t){this._strokeWidth=t,this.needsUpdatingStroke=!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"stroke",{get:function(){return this.needsUpdatingStroke=!0,this._stroke},set:function(t){this._stroke=t,this.needsUpdatingStroke=!0},enumerable:!1,configurable:!0}),e.prototype.getGeometry=function(){return this.needsUpdatingVertices=!0,this.geometryInfo},e}(a.default);e.default=s},497:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Ellipse=e.RoundedRect=e.Circle=e.Rectangle=e.Triangle=e.Line=void 0;var o=n(r(802));e.Line=o.default;var i=n(r(977));e.Triangle=i.default;var a=n(r(571));e.Rectangle=a.default;var u=n(r(268));e.Circle=u.default;var s=n(r(724));e.RoundedRect=s.default;var c=n(r(519));e.Ellipse=c.default},802:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=t.call(this)||this;return n.shaderType="polygon",n.graphicsType="line",n.geometryInfo=[],n.geometryInfo=e,n}return o(e,t),e.prototype.calcVertices=function(){for(var t=[],e=0,r=this.geometryInfo.length;e<r;e++)for(var n=0;n<6;n++)t.push(this.geometryInfo[e][n]);return t},e.prototype.calcStrokeVertices=function(){return[]},e}(i(r(744)).default);e.default=a},571:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(e,r,n,o){for(var i=[],a=4;a<arguments.length;a++)i[a-4]=arguments[a];var u=t.call(this)||this;return u.shaderType="polygon",u.graphicsType="rectangle",u.geometryInfo={x:0,y:0,w:0,h:0,colors:[]},u.geometryInfo={x:e,y:r,w:n,h:o,colors:i},u}return o(e,t),e.prototype.calcVertices=function(){var t=this.geometryInfo,e=t.x,r=t.y,n=t.w,o=t.h,i=t.colors,a=[];return a.push(e,r,i[0][0],i[0][1],i[0][2],i[0][3]),a.push(e,r+o,i[1][0],i[1][1],i[1][2],i[1][3]),a.push(e+n,r,i[2][0],i[2][1],i[2][2],i[2][3]),a.push(e+n,r+o,i[3][0],i[3][1],i[3][2],i[3][3]),a},e.prototype.calcStrokeVertices=function(){var t=this.geometryInfo,e=t.x,r=t.y,n=t.w,o=t.h,i=this._strokeWidth,a=this._stroke,u=[];return u.push(e-i,r-i,a.r,a.g,a.b,a.a),u.push(e-i,r+o+i,a.r,a.g,a.b,a.a),u.push(e+n+i,r-i,a.r,a.g,a.b,a.a),u.push(e+n+i,r+o+i,a.r,a.g,a.b,a.a),u},e}(i(r(744)).default);e.default=a},977:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){var e=t.call(this)||this;return e.graphicsType="triangle",e}return o(e,t),e}(i(r(802)).default);e.default=a},607:function(t,e,r){var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&n(e,t,r);return o(e,t),e},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Graphics=e.Loader=e.Text=e.Stage=e.Texture=e.Sprite=e.App=void 0;var u=a(r(495));e.App=u.default;var s=r(494);Object.defineProperty(e,"Sprite",{enumerable:!0,get:function(){return s.Sprite}}),Object.defineProperty(e,"Stage",{enumerable:!0,get:function(){return s.Stage}}),Object.defineProperty(e,"Text",{enumerable:!0,get:function(){return s.Text}});var c=a(r(499));e.Texture=c.default;var l=a(r(337));e.Loader=l.default;var f=i(r(497));e.Graphics=f},991:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t._getPointerCo=function(t){var e=this._canvasSize;return{x:t.offsetX*this.screenSize.width/e.w,y:t.offsetY*this.screenSize.height/e.h}},t.enableEvent=function(t,e,r){var n=this;this.canvas=e,e.addEventListener(t,(function(e){var o=n._getPointerCo(e);r.triggerEvent(t,o)}))},Object.defineProperty(t,"canvas",{set:function(t){var e=this;this._canvas=t,this._canvasSize=this._getCanvasSize(t),this._resizeObserver=new ResizeObserver((function(){e._canvasSize=e._getCanvasSize(t)})),this._resizeObserver.observe(document.body),t.addEventListener("touchstart",this._preventTouchScroll)},enumerable:!1,configurable:!0}),t._preventTouchScroll=function(t){t.preventDefault()},t._getCanvasSize=function(t){return{w:t.clientWidth,h:t.clientHeight}},t.disablePreventScrolling=function(t){t.removeEventListener("touchstart",this._preventTouchScroll)},t.enablePreventScrolling=function(t){console.log(this._canvas),t.addEventListener("touchstart",this._preventTouchScroll)},t.screenSize={width:0,height:0},t._canvasSize={w:0,h:0},t}();e.default=r},337:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r(108));e.default=o.default},108:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r(59)),i=r(59),a=function(){function t(){}return t.add=function(t,e,r){this.loaded=!1;var n=this._promiseLoadingImage(t,e,r);return this._tasks.push(n),this},t.loadAll=function(){var t=this;this._taskNum=this._tasks.length,this._progressManager(this._taskNum,this._taskNum),Promise.all(this._tasks).then((function(){t.loaded=!0,t._loadThen()}))},t._promiseLoadingImage=function(t,e,r){var n=this;return void 0===r&&(r="NEAREST"),new Promise((function(a){fetch(e).then((function(t){return t.blob()})).then((function(t){return createImageBitmap(t)})).then((function(e){n._resources.set(t,new o.default(e,i.SCALE_MODE[r])),n._tasks.shift(),n._progressManager(n._taskNum,n._tasks.length),a(e)}))}))},t.loadThen=function(t){this._loadThen=t,0===this._tasks.length&&t()},t.manageProgress=function(t){this._progressManager=t},t.get=function(t){return this._resources.has(t)?this._resources.get(t):void 0},t._resources=new Map,t._tasks=[],t._loadThen=function(){},t._taskNum=0,t._progressManager=function(){},t.loaded=!1,t}();e.default=a},81:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r(257));e.default=o.default},257:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e,r,n){this.x=0,this.y=0,this.w=0,this.h=0,this.x=t,this.y=e,this.w=r,this.h=n}return t.prototype.detectPointHit=function(t,e){return this.x<t&&this.x+this.w>t&&this.y<e&&this.y+this.h>e},t}();e.default=r},179:(t,e)=>{function r(t,e){var r=t[0],n=t[1],o=t[2],i=t[3],a=t[4],u=t[5],s=t[6],c=t[7],l=t[8],f=e[0],h=e[1],d=e[2],p=e[3],_=e[4],y=e[5],v=e[6],g=e[7],b=e[8];return[f*r+h*i+d*s,f*n+h*a+d*c,f*o+h*u+d*l,p*r+_*i+y*s,p*n+_*a+y*c,p*o+_*u+y*l,v*r+g*i+b*s,v*n+g*a+b*c,v*o+g*u+b*l]}Object.defineProperty(e,"__esModule",{value:!0}),e.identity=e.someMultiply=e.multiply=e.rotation=e.translation=e.scaling=e.projection=void 0,e.projection=function(t,e){return[2/t,0,0,0,-2/e,0,-1,1,1]},e.scaling=function(t,e){return[t,0,0,0,e,0,0,0,1]},e.translation=function(t,e){return[1,0,0,0,1,0,t,e,1]},e.rotation=function(t){var e=Math.sin(t),r=Math.cos(t);return[r,-e,0,e,r,0,0,0,1]},e.multiply=r,e.someMultiply=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=t[0],o=0,i=t.length-1;o<i;o++)n=r(n,t[o+1]);return n},e.identity=function(){return[1,0,0,0,1,0,0,0,1]}},478:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.enableAlpha=void 0,e.enableAlpha=function(t){t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0)}},144:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.createRectangleIndices=e.createLinkedVertexBuffer=e.createLinkedVBO=void 0;var n=r(806);e.createLinkedVBO=function(t,e,r){var o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o);for(var i=0,a=r.length;i<a;i++){var u=r[i],s=t.getAttribLocation(e,n.attribPrefix+u.name);t.enableVertexAttribArray(s),t.vertexAttribPointer(s,u.size,t[u.type],!1,u.stride,u.offset)}return t.bindBuffer(t.ARRAY_BUFFER,null),o},e.createLinkedVertexBuffer=function(t,e,r,n){var o=t.getAttribLocation(e,r),i=t.getAttribLocation(e,n),a=t.FLOAT,u=4*Float32Array.BYTES_PER_ELEMENT,s=2*Float32Array.BYTES_PER_ELEMENT,c=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,c),t.enableVertexAttribArray(o),t.enableVertexAttribArray(i),t.vertexAttribPointer(o,2,a,!1,u,0),t.vertexAttribPointer(i,2,a,!1,u,s),t.bindBuffer(t.ARRAY_BUFFER,null),c},e.createRectangleIndices=function(t){var e=new Uint16Array([0,1,2,1,3,2]),r=function(t,e,r){var n=t.createBuffer();return t.bindBuffer(e,n),t.bufferData(e,r,t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),n}(t,t.ELEMENT_ARRAY_BUFFER,e);return r}},484:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.resizeCanvas=e.clearCanvas=void 0,e.clearCanvas=function(t,e){var r=e.r/256,n=e.g/256,o=e.b/256,i=void 0===e.a?1:e.a;t.clearColor(r,n,o,i),t.clear(t.COLOR_BUFFER_BIT)},e.resizeCanvas=function(t,e){var r=t.canvas,n=r.clientWidth,o=r.clientHeight;r.width=n*e,r.height=o*e,t.viewport(0,0,r.width,r.height)}},97:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getUniformLocation=e.resizeCanvas=e.clearCanvas=e.enableAlpha=e.uploadTexture=e.createTexture=e.createLinkedVertexBuffer=e.createLinkedVBO=e.createRectangleIndices=e.createProgramInfo=void 0;var n=r(381);Object.defineProperty(e,"createProgramInfo",{enumerable:!0,get:function(){return n.createProgramInfo}});var o=r(144);Object.defineProperty(e,"createLinkedVertexBuffer",{enumerable:!0,get:function(){return o.createLinkedVertexBuffer}}),Object.defineProperty(e,"createLinkedVBO",{enumerable:!0,get:function(){return o.createLinkedVBO}}),Object.defineProperty(e,"createRectangleIndices",{enumerable:!0,get:function(){return o.createRectangleIndices}});var i=r(363);Object.defineProperty(e,"createTexture",{enumerable:!0,get:function(){return i.createTexture}}),Object.defineProperty(e,"uploadTexture",{enumerable:!0,get:function(){return i.uploadTexture}});var a=r(478);Object.defineProperty(e,"enableAlpha",{enumerable:!0,get:function(){return a.enableAlpha}});var u=r(484);Object.defineProperty(e,"clearCanvas",{enumerable:!0,get:function(){return u.clearCanvas}}),Object.defineProperty(e,"resizeCanvas",{enumerable:!0,get:function(){return u.resizeCanvas}});var s=r(383);Object.defineProperty(e,"getUniformLocation",{enumerable:!0,get:function(){return s.getUniformLocation}})},381:(t,e,r)=>{function n(t,e,r){var n=t.createShader(e);if(!n)throw new Error("failed to create a shader");return t.shaderSource(n,r),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)||(console.log(t.getShaderInfoLog(n)),t.deleteShader(n)),n}Object.defineProperty(e,"__esModule",{value:!0}),e.createProgramInfo=void 0;var o=r(144),i=r(383),a=r(806);e.createProgramInfo=function(t,e,r,u,s){for(var c=function(t,e,r){var o=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=t.createProgram();if(!n)throw new Error("failed to create program");for(var o=0,i=e.length;o<i;o++)t.attachShader(n,e[o]);return t.linkProgram(n),t.getProgramParameter(n,t.LINK_STATUS)||(console.log(t.getProgramInfoLog(n)),t.deleteProgram(n)),n}(t,n(t,t.VERTEX_SHADER,e),n(t,t.FRAGMENT_SHADER,r));return o}(t,e,r),l=(0,o.createLinkedVBO)(t,c,u),f=(0,o.createRectangleIndices)(t),h={},d=0,p=s.length;d<p;d++){var _=s[d];h[_]=(0,i.getUniformLocation)(t,c,a.uniformPrefix+_)}return{program:c,vbo:l,ibo:f,uniforms:h,pointAttrs:function(){t.bindBuffer(t.ARRAY_BUFFER,l);for(var e=0,r=u.length;e<r;e++){var n=u[e];t.vertexAttribPointer(t.getAttribLocation(c,a.attribPrefix+n.name),n.size,t[n.type],!1,n.stride,n.offset)}t.bindBuffer(t.ARRAY_BUFFER,null)}}}},363:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.uploadTexture=e.createTexture=void 0,e.createTexture=function(t,e){var r=t.createTexture();return t.bindTexture(t.TEXTURE_2D,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t[e]),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),r},e.uploadTexture=function(t,e,r){return t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r),t.generateMipmap(t.TEXTURE_2D),t.bindTexture(t.TEXTURE_2D,null),e}},383:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getUniformLocation=void 0,e.getUniformLocation=function(t,e,r){return t.getUniformLocation(e,r)}},947:function(t,e,r){var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&n(e,t,r);return o(e,t),e},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=a(r(483)),s=i(r(97)),c=i(r(179)),l=i(r(806)),f=r(806),h=function(){function t(t){this.resolution=window.devicePixelRatio||1,this._projectionMat=[],this._shaders={},this._renderMethods={sprite:this.renderSprite.bind(this),graphics:this.renderGraphics.bind(this)};var e=t.canvas,r=t.width,n=t.height;this.canvas=e,this._screenSize={width:r,height:n},this._projectionMat=c.projection(r,n),this.gl=this.canvas.getContext("webgl2");var o=this.gl;u.default.gl=o,this._resizeCanvas(),s.enableAlpha(o);for(var i=l.programInfos,a=0,f=i.length;a<f;a++){var h=i[a];this._shaders[h.name]=s.createProgramInfo(o,h.vss,h.fss,h.attribParams,h.uniforms)}}return t.prototype.render=function(t){t.calcRenderingInfos(),t.renderingType&&this._renderMethods[t.renderingType](t),t.needsToSort&&(t.sortChildren(),t.needsToSort=!1);for(var e=t.children,r=0,n=e.length;r<n;r++)this.render(e[r])},t.prototype.renderSprite=function(t){var e=t.texture;if(e){t.needsToUpdate&&t.updateCanvasTexture();var r=this.gl,n=this._shaders.sprite,o=n.program,i=n.uniforms,a=n.vbo,u=n.ibo;r.useProgram(o);var s=e.glTexture;r.uniform1i(i.texture,0),r.activeTexture(r.TEXTURE0+0),r.bindTexture(r.TEXTURE_2D,s);var l=c.scaling(e.scale.x,e.scale.y),f=c.someMultiply(this._projectionMat,t.parentTransform,t.transform,l);r.uniformMatrix3fv(i.transformation,!1,f),r.uniform1f(i.opacity,t.wholeOpacity);var h=a;r.bindBuffer(r.ARRAY_BUFFER,h);var d={w:e.width,h:e.height},p=[0,0,0,0,0,d.h,0,1,d.w,0,1,0,d.w,d.h,1,1];r.bufferData(r.ARRAY_BUFFER,new Float32Array(p),r.DYNAMIC_DRAW),n.pointAttrs();var _=u;r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,_),r.drawElements(r.TRIANGLES,6,r.UNSIGNED_SHORT,0),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,null),r.bindBuffer(r.ARRAY_BUFFER,null),r.bindTexture(r.TEXTURE_2D,null)}},t.prototype.renderGraphics=function(t){var e=this._shaders[t.shaderType],r=e.program,n=e.uniforms,o=e.vbo,i=e.ibo,a=this.gl;a.useProgram(r);var u=c.someMultiply(this._projectionMat,t.parentTransform,t.transform);a.uniformMatrix3fv(n.transformation,!1,u),a.uniform1f(n.opacity,t.wholeOpacity),f.getUniformUploadFunc[t.shaderType](a,n,t.geometryInfo);var s=f.getStrokeUniformOptions[t.shaderType],l=function(r,u){void 0===u&&(u=0),s(a,n,t.geometryInfo,u,t.strokeWidth),a.bindBuffer(a.ARRAY_BUFFER,o),a.bufferData(a.ARRAY_BUFFER,new Float32Array(r),a.DYNAMIC_DRAW),e.pointAttrs();var c=f.getDrawSize[t.graphicsType](t);a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,i);var l=f.getIndices[t.graphicsType](t);a.bufferData(a.ELEMENT_ARRAY_BUFFER,new Uint16Array(l),a.DYNAMIC_DRAW),a.drawElements(a[f.drawModes[t.graphicsType]],c,a.UNSIGNED_SHORT,0),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,null),a.bindBuffer(a.ARRAY_BUFFER,null)};t.needsUpdatingVertices&&(t.vertices=t.calcVertices(),t.needsUpdatingVertices=!1),t.needsUpdatingStroke&&(t.strokeVertices=t.calcStrokeVertices(),t.needsUpdatingStroke=!1),t.strokeWidth&&l(t.strokeVertices,1),l(t.vertices,0)},t.prototype.clear=function(t,e,r,n){s.clearCanvas(this.gl,{r:t,g:e,b:r,a:n})},t.prototype._resizeCanvas=function(){s.resizeCanvas(this.gl,this.resolution)},Object.defineProperty(t.prototype,"width",{set:function(t){this._screenSize.width=t,this._projectionMat=c.projection(t,this._screenSize.height)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{set:function(t){this._screenSize.height=t,this._projectionMat=c.projection(this._screenSize.width,t)},enumerable:!1,configurable:!0}),t.prototype.flush=function(){this.gl.flush()},t}();e.default=h},806:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.uniformPrefix=e.attribPrefix=e.COLOR_BYTES=e.getIndices=e.getStrokeUniformOptions=e.getUniformUploadFunc=e.getDrawSize=e.drawModes=e.programInfos=void 0;var o=n(r(798)),i=n(r(138)),a=n(r(139)),u=n(r(848)),s=n(r(866)),c=n(r(210)),l=n(r(579)),f=n(r(682)),h=n(r(433)),d=n(r(322));function p(t){return Float32Array.BYTES_PER_ELEMENT*t}e.programInfos=[{name:"sprite",vss:o.default,fss:i.default,attribParams:[{name:"position",size:2,type:"FLOAT",stride:p(4),offset:0},{name:"texcoord",size:2,type:"FLOAT",stride:p(4),offset:p(2)}],uniforms:["transformation","opacity","texture"]},{name:"polygon",vss:a.default,fss:u.default,attribParams:[{name:"position",size:2,type:"FLOAT",stride:p(6),offset:0},{name:"color",size:4,type:"FLOAT",stride:p(6),offset:p(2)}],uniforms:["transformation","opacity"]},{name:"circle",vss:s.default,fss:c.default,attribParams:[{name:"position",size:2,type:"FLOAT",stride:p(6),offset:0},{name:"color",size:4,type:"FLOAT",stride:p(6),offset:p(2)}],uniforms:["transformation","opacity","radius","center","startAngle","endAngle","clockwize"]},{name:"roundedrect",vss:l.default,fss:f.default,attribParams:[{name:"position",size:2,type:"FLOAT",stride:p(6),offset:0},{name:"color",size:4,type:"FLOAT",stride:p(6),offset:p(2)}],uniforms:["transformation","opacity","radius","position","width","height"]},{name:"ellipse",vss:h.default,fss:d.default,attribParams:[{name:"position",size:2,type:"FLOAT",stride:p(6),offset:0},{name:"color",size:4,type:"FLOAT",stride:p(6),offset:p(2)}],uniforms:["transformation","opacity","center","width","height"]}],e.drawModes={line:"LINE_STRIP",triangle:"TRIANGLE_STRIP",rectangle:"TRIANGLES",circle:"TRIANGLES",roundedrect:"TRIANGLES",ellipse:"TRIANGLES"},e.getDrawSize={line:function(t){return t.geometryInfo.length},triangle:function(){return 3},rectangle:function(){return 6},circle:function(){return 6},roundedrect:function(){return 6},ellipse:function(){return 6}},e.getUniformUploadFunc={polygon:function(){},circle:function(t,e,r){t.uniform1f(e.radius,r.radius),t.uniform2f(e.center,r.center.x,r.center.y),t.uniform1f(e.startAngle,r.startAngle/(2*Math.PI)),t.uniform1f(e.endAngle,r.endAngle/(2*Math.PI)),t.uniform1f(e.clockwize,r.clockWize)},roundedrect:function(t,e,r){t.uniform1f(e.radius,r.radius),t.uniform2f(e.position,r.x,r.y),t.uniform1f(e.width,r.w),t.uniform1f(e.height,r.h)},ellipse:function(t,e,r){t.uniform2f(e.center,r.x,r.y),t.uniform1f(e.width,r.width),t.uniform1f(e.height,r.height)}},e.getStrokeUniformOptions={polygon:function(){},circle:function(t,e,r,n,o){t.uniform1f(e.radius,new Array(r.radius,r.radius+o)[n])},roundedrect:function(t,e,r,n,o){t.uniform1f(e.radius,new Array(r.radius,r.radius+o)[n]),t.uniform2f(e.position,new Array(r.x,r.x-o)[n],new Array(r.y,r.y-o)[n]),t.uniform1f(e.width,new Array(r.w,r.w+2*o)[n]),t.uniform1f(e.height,new Array(r.h,r.h+2*o)[n])},ellipse:function(t,e,r,n,o){t.uniform1f(e.width,new Array(r.width,r.width+2*o)[n]),t.uniform1f(e.height,new Array(r.height,r.height+2*o)[n])}};var _=[0,1,2,1,3,2];e.getIndices={line:function(t){for(var e=[],r=0,n=t.geometryInfo.length;r<n;r++)e.push(r);return e},triangle:function(){return[0,1,2]},rectangle:function(){return _},circle:function(){return _},roundedrect:function(){return _},ellipse:function(){return _}},e.COLOR_BYTES=256,e.attribPrefix="a_",e.uniformPrefix="u_"},483:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.checkGL=function(){if(t.gl)return t.gl;throw new Error("There seems to be no canvas")},t}();e.default=r},627:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.x=1,t.y=1,t}();e.default=r},499:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(r(59));e.default=o.default},59:function(t,e,r){var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&n(e,t,r);return o(e,t),e},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.SCALE_MODE=void 0;var u,s=a(r(483)),c=i(r(97));!function(t){t.LINEAR="LINEAR",t.NEAREST="NEAREST"}(u=e.SCALE_MODE||(e.SCALE_MODE={}));var l=r(309),f=function(){function t(t,e){void 0===e&&(e=u.NEAREST),this._width=0,this._height=0,this._scale=new l.TwoDemensionParam,this.scaleMode=u.NEAREST,this.scaleMode=e;var r=s.default.checkGL(),n=c.createTexture(r,e);t?(this.glTexture=c.uploadTexture(r,n,t),this._width=t.width,this._height=t.height):this.glTexture=n}return Object.defineProperty(t.prototype,"texture",{set:function(t){var e=s.default.checkGL();this.glTexture=c.uploadTexture(e,this.glTexture,t),this._width=t.width,this._height=t.height},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scale",{get:function(){return this._scale},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),t}();e.default=f}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}return r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(607)})()}));

/***/ }),

/***/ "./node_modules/naras.js/dist/naras.min.js":
/*!*************************************************!*\
  !*** ./node_modules/naras.js/dist/naras.min.js ***!
  \*************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(self,(function(){return(()=>{"use strict";var t={178:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(108)),r=o(n(557)),a=n(894),u=function(){function t(){this.loader=i.default,this.baseMixer=new a.MasterMixer,this._unlockEvents=["click","scroll","touchstart"];for(var t=0,e=this._unlockEvents.length;t<e;t++)document.addEventListener(this._unlockEvents[t],this._initContext.bind(this),{once:!0});this._initContext()}return t.prototype._initContext=function(){"suspended"===r.default.cxt.state&&r.default.cxt.resume();for(var t=0,e=this._unlockEvents.length;t<e;t++)document.removeEventListener(this._unlockEvents[t],this._initContext.bind(this))},t.prototype.addResource=function(t,e){return this.loader.add(t,e),this},t.prototype.loadAll=function(){this.loader.loadAll()},t.prototype.loadThen=function(t){this.loader.loadThen(t)},Object.defineProperty(t.prototype,"loaded",{get:function(){return this.loader.loaded},enumerable:!1,configurable:!0}),t}();e.default=u},495:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(178));e.default=i.default},557:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=window.AudioContext||window.webkitAudioContext,o=function(){function t(){}return t.cxt=new n,t}();e.default=o},385:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){this.buffer=t,this.duration=t.duration}},607:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Loader=e.Processer=e.Sound=e.Mixer=e.App=void 0;var i=o(n(923));e.Sound=i.default;var r=o(n(495));e.App=r.default;var a=o(n(230));e.Mixer=a.default;var u=o(n(579));e.Processer=u.default;var s=o(n(337));e.Loader=s.default},337:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(108));e.default=i.default},108:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(557)),r=o(n(385)),a=function(){function t(){}return t.add=function(t,e){var n=this._promiseLoadingSound(t,e);return this._tasks.push(n),this.loaded=!1,this},t.loadAll=function(){var t=this;this._taskNum=this._tasks.length,this._progressManager(this._taskNum,this._taskNum),Promise.all(this._tasks).then((function(){t.loaded=!0,t._loadThen()}))},t.loadThen=function(t){this._loadThen=t,0===this._tasks.length&&t()},t._promiseLoadingSound=function(t,e){var n=this;return new Promise((function(o){fetch(e).then((function(t){return t.arrayBuffer()})).then((function(t){return n._cxt.decodeAudioData(t)})).then((function(e){var i=new r.default(e);n._resources.set(t,i),n._tasks.shift(),n._progressManager(n._taskNum,n._tasks.length),o(e)}))}))},t.manageProgress=function(t){this._progressManager=t},t.get=function(t){return this._resources.get(t)},t._resources=new Map,t._tasks=[],t._loadThen=function(){},t._cxt=i.default.cxt,t._progressManager=function(){},t._taskNum=0,t.loaded=!1,t}();e.default=a},341:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.defaultDelayParams=void 0;var i=o(n(557)),r={interval:1e3,attenuation:.5};e.defaultDelayParams=r;var a=function(){function t(t,e){this._interval=r.interval,this._attenuation=r.attenuation,this._delayNode=i.default.cxt.createDelay(10),this._attenuationNode=i.default.cxt.createGain(),this._delaySwitch=i.default.cxt.createGain(),this._realScale=1,e?(e.interval=e.interval||r.interval,e.attenuation=e.attenuation||r.attenuation):e=r,this.interval=e.interval,this.attenuation=e.attenuation,t.connect(this._delayNode),this._delayNode.connect(this._attenuationNode),this._attenuationNode.connect(this._delayNode),this._delayNode.connect(this._delaySwitch)}return Object.defineProperty(t.prototype,"interval",{get:function(){return this._interval},set:function(t){t=Math.min(Math.max(t,0),1e4),this._interval=t,this._delayNode.delayTime.value=t/1e3*this._realScale},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attenuation",{get:function(){return this._attenuation},set:function(t){this._attenuation=t,this._attenuationNode.gain.value=t},enumerable:!1,configurable:!0}),t.prototype.set=function(t,e){this.interval=t,this.attenuation=e},Object.defineProperty(t.prototype,"realScale",{set:function(t){this._realScale=t,this._delayNode.delayTime.value=this._interval/1e3*t},enumerable:!1,configurable:!0}),t.prototype.connect=function(t){this._delaySwitch.connect(t)},t.prototype.disconnect=function(){this._delaySwitch.disconnect(0)},t}();e.default=a},844:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(557)),r={x:0,y:0,z:0},a=function(){function t(t,e,n){this._pannerNode=i.default.cxt.createPanner(),this._position=r,t&&(this.x=t),e&&(this.y=e),n&&(this.z=n)}return Object.defineProperty(t.prototype,"x",{get:function(){return this._position.x},set:function(t){this._position.x=t,this._pannerNode.positionX.value=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._position.y},set:function(t){this._pannerNode.positionY.value=t,this._position.y=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"z",{get:function(){return this._position.z},set:function(t){this._pannerNode.positionZ.value=t,this._position.z=t},enumerable:!1,configurable:!0}),t.prototype.set=function(t,e,n){return this.x=t,this.y=e,this.z=n,this},Object.defineProperty(t.prototype,"node",{get:function(){return this._pannerNode},enumerable:!1,configurable:!0}),t.prototype.connect=function(t){this._pannerNode.connect(t)},t}();e.default=a},230:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(894));e.default=i.default},894:function(t,e,n){var o,i=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.MasterMixer=e.defaultOptions=void 0;var a=r(n(557)),u=r(n(341)),s=r(n(844)),l=n(341);e.defaultOptions={volume:1,loop:!1,scale:1,delay:l.defaultDelayParams,useDelay:!1,panner:{x:0,y:0,z:0}};var c=function(){function t(t){this._cxt=a.default.cxt,this._inputNode=a.default.cxt.createGain(),this._gainNode=a.default.cxt.createGain(),this._volume=e.defaultOptions.volume,this._scale=e.defaultOptions.scale,this._duration=0,this._playedTime=0,this._startedTime=0,this._position=0,this.children=new Set,this.isSound=!1,this._playPosition=0,this._playScale=1,this.playAction=function(){},this.stopAction=function(){},this.pauseAction=function(){},this.restartAction=function(){};var n=(t=Object.assign(e.defaultOptions,t)).panner;this._panner=new s.default(n.x,n.y,n.z),this._delay=new u.default(this._inputNode,t.delay),this.volume=t.volume,this.scale=t.scale,this._useDelay=t.useDelay,this.useDelay=this._useDelay,this._inputNode.connect(this._panner.node),this._panner.connect(this._gainNode)}return Object.defineProperty(t.prototype,"position",{get:function(){return this._position},set:function(t){this._position=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"useDelay",{get:function(){return this._useDelay},set:function(t){this._useDelay=t,t?this._delay.connect(this._gainNode):this._delay.disconnect()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"delay",{get:function(){return this._delay},enumerable:!1,configurable:!0}),t.prototype.addChildren=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var n=0,o=t.length;n<o;n++)this.addChild(t[n])},t.prototype.addChild=function(t){t.parent||(this.children.add(t),t.connect(this),t.parent=this)},t.prototype.removeChild=function(t){this.children.has(t)&&(t._gainNode.disconnect(0),t.parent=void 0,this.children.delete(t))},t.prototype.connect=function(t){this._gainNode.connect(t._inputNode)},t.prototype.disconnect=function(){this._gainNode.disconnect(0)},Object.defineProperty(t.prototype,"playScale",{get:function(){return this._playScale},set:function(t){this._playScale=t,this._delay.realScale=t},enumerable:!1,configurable:!0}),t.prototype.play=function(){this._propagateOrder("play")},t.prototype.stop=function(){this._propagateOrder("stop")},t.prototype.pause=function(){this._propagateOrder("pause")},t.prototype.restart=function(){this._propagateOrder("restart")},t.prototype._propagateOrder=function(t,e){var n=this;this._playPosition=this._calcPlayPosition(e),this.playScale=this._calcPlayScale(e),this.children.forEach((function(e){e._propagateOrder(t,n)})),this[t+"Action"]()},t.prototype._calcPlayPosition=function(t){return t?t._playPosition+this._position*t._playScale:0},t.prototype._calcPlayScale=function(t){return t?t._playScale*this._scale:this._scale},Object.defineProperty(t.prototype,"duration",{get:function(){return this._duration},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"volume",{get:function(){return this._volume},set:function(t){this._volume=t,this._gainNode.gain.value=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"scale",{get:function(){return this._scale},set:function(t){this._scale=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"panner",{get:function(){return this._panner},enumerable:!1,configurable:!0}),t}();e.default=c;var f=function(t){function e(){var e=t.call(this)||this;return e._gainNode.connect(a.default.cxt.destination),e}return i(e,t),e}(c);e.MasterMixer=f},579:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(412));e.default=i.default},412:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(557)),r=o(n(385)),a=function(){function t(){}return t._forAllChannels=function(t,e,n){for(var o=0,i=t.numberOfChannels;o<i;o++)n(e.getChannelData(o),t.getChannelData(o));return e},t._createSameSizedBuffer=function(t){return i.default.cxt.createBuffer(t.numberOfChannels,t.length,t.sampleRate)},t.reverse=function(e){var n=e.buffer,o=t._createSameSizedBuffer(n);return new r.default(t._forAllChannels(n,o,(function(t,e){for(var o=0,i=n.length;o<i;o++)t[o]=e[i-o]})))},t.trim=function(e,n,o){var a=e.buffer,u=a.sampleRate,s=(o-n)*a.sampleRate,l=i.default.cxt.createBuffer(a.numberOfChannels,s,u);return new r.default(t._forAllChannels(a,l,(function(t,e){for(var o=0,i=s;o<i;o++)t[o]=e[n*u+o]})))},t.raisePitch=function(e,n,o){var a=e.buffer,u=i.default.cxt.createBuffer(a.numberOfChannels,a.length,a.sampleRate);return new r.default(t._forAllChannels(a,u,(function(t,e){for(var i=0,r=a.length/n;i<r;i++)for(var u=0,s=n;u<s;u++)t[i*n+u]=e[Math.min(i*n+(u*o|0)%n,a.length-1)]})))},t.lowerPitch=function(e,n,o){var i=e.buffer,a=t._createSameSizedBuffer(i);return new r.default(t._forAllChannels(i,a,(function(t,e){for(var r=0,a=i.length/n;r<a;r++)for(var u=0,s=n*o;u<s;u++)t[r*n+u]=e[Math.min(r*n+(u/o|0),i.length-1)]})))},t.noise=function(e,n,o,i){var a=e.buffer,u=t._createSameSizedBuffer(a);return new r.default(t._forAllChannels(a,u,(function(t,e){for(var r=0,u=a.length;r<u;r++)Math.random()>n?t[r]=e[r]+2*(Math.random()-.5)*i:t[r]=2*o*(Math.random()-.5)})))},t.blur=function(e,n){var o=e.buffer,i=t._createSameSizedBuffer(o);return new r.default(t._forAllChannels(o,i,(function(t,e){for(var i=0,r=o.length;i<r;i++){for(var a=0,u=2*n+1,s=0,l=u;s<l;s++)a+=e[Math.max(Math.min(i-n+s,o.length-1),0)];t[i]=a/u}})))},t}();e.default=a},923:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(501));e.default=i.default},501:function(t,e,n){var o,i=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(894),u=1e3,s=Object.assign(a.defaultOptions,{loop:!1,trim:void 0}),l=function(t){function e(e,n){var o=t.call(this,n)||this;return o._duration=0,o._loop=!1,o._playing=!1,o.isSound=!0,o.restartAction=function(){o._play(o._playedTime)},o.playAction=function(){o._playedTime=0,o._play(0)},o.stopAction=function(){o._playing&&o._sourceNode&&(o._sourceNode.stop(0),o._sourceNode.disconnect(0),o._endThen())},o.pauseAction=function(){o._playing&&(o._playedTime=(o._playedTime+o._cxt.currentTime-o._startedTime)%(o._duration/u),o._playing=!1,o._sourceNode.stop(0))},n=Object.assign(s,n),e&&(o._audio=e,o._duration=e.duration*u),o.loop=n.loop,o}return i(e,t),Object.defineProperty(e.prototype,"audio",{set:function(t){this._audio=t,this._duration=t.duration},enumerable:!1,configurable:!0}),e.prototype._play=function(t){if(void 0===t&&(t=0),this._audio){var e=this._cxt;this._sourceNode=e.createBufferSource(),this._sourceNode.buffer=this._audio.buffer,this._sourceNode.loop=this._loop;var n=this._playScale,o=this._playPosition;this._sourceNode.playbackRate.value=1/n;var i=this._sourceNode;i.connect(this._inputNode);var r=e.currentTime+o/u;if(i.start(r,t),this._sourceNode=i,this._startedTime=r,this._playing=!0,!this.loop){var a=o+this._duration*n;setTimeout(this._disconnectSourceNode.bind(this),a,i),this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=void 0),this._endTimer=setTimeout(this._endThen.bind(this),a)}}},e.prototype._disconnectSourceNode=function(t){t.disconnect(0)},e.prototype._endThen=function(){this._playing=!1,this._playedTime=0,this._sourceNode=null,this._endTimer=void 0},Object.defineProperty(e.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"loop",{get:function(){return this._loop},set:function(t){this._loop=t,this._sourceNode&&(this._sourceNode.loop=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"duration",{get:function(){return this._duration},enumerable:!1,configurable:!0}),e}(r(n(894)).default);e.default=l}},e={};return function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}(607)})()}));

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
var Actor = /** @class */ (function (_super) {
    __extends(Actor, _super);
    function Actor() {
        var _this = _super.call(this) || this;
        _this.update = function (delta, givenInfo) {
            _this.act(delta, givenInfo);
            _this.children.forEach(function (actor) {
                var info = {};
                actor.needsInfoNames.forEach(function (name) {
                    info[name] = _this[name];
                });
                actor.update(delta, info);
            });
        };
        _this.act = function (delta, info) {
        };
        return _this;
    }
    return Actor;
}(scene_1.default));
exports["default"] = Actor;


/***/ }),

/***/ "./src/actor/full_actor.ts":
/*!*********************************!*\
  !*** ./src/actor/full_actor.ts ***!
  \*********************************/
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
var actor_1 = __importDefault(__webpack_require__(/*! ./actor */ "./src/actor/actor.ts"));
var naras_js_1 = __webpack_require__(/*! naras.js */ "./node_modules/naras.js/dist/naras.min.js");
var egak_js_1 = __webpack_require__(/*! egak.js */ "./node_modules/egak.js/dist/egak.min.js");
var FullActor = /** @class */ (function (_super) {
    __extends(FullActor, _super);
    function FullActor(texture) {
        var audioInfos = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            audioInfos[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._sounds = new Map();
        _this._rotation = 0;
        _this.sprite = new egak_js_1.Sprite(texture);
        _this._stage = _this.sprite;
        audioInfos.forEach(function (info) {
            _this.addSound(info[0], info[1]);
        });
        return _this;
    }
    FullActor.prototype.play = function (id) {
        if (id) {
            this._sounds.get(id).play();
        }
        else {
            this.mixer.play();
        }
    };
    FullActor.prototype.stop = function (id) {
        if (id) {
            this._sounds.get(id).stop();
        }
        else {
            this.mixer.stop();
        }
    };
    FullActor.prototype.restart = function (id) {
        if (id) {
            this._sounds.get(id).restart();
        }
        else {
            this.mixer.restart();
        }
    };
    FullActor.prototype.pause = function (id) {
        if (id) {
            this._sounds.get(id).pause();
        }
        else {
            this.mixer.pause();
        }
    };
    FullActor.prototype.addSound = function (id, audio) {
        var sound = new naras_js_1.Sound(audio);
        this.mixer.addChild(sound);
        this._sounds.set(id, sound);
    };
    Object.defineProperty(FullActor.prototype, "position", {
        get: function () {
            return this.sprite.position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullActor.prototype, "x", {
        get: function () {
            return this.sprite.x;
        },
        set: function (value) {
            this.sprite.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullActor.prototype, "y", {
        get: function () {
            return this.sprite.y;
        },
        set: function (value) {
            this.sprite.y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullActor.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (value) {
            this._rotation = value;
            this.sprite.rotation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullActor.prototype, "scale", {
        get: function () {
            return this.sprite.scale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullActor.prototype, "anchor", {
        get: function () {
            return this.sprite.anchor;
        },
        enumerable: false,
        configurable: true
    });
    return FullActor;
}(actor_1.default));
exports["default"] = FullActor;


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
exports.FullActor = exports.SoundActor = exports.SpriteActor = exports.Actor = void 0;
var actor_1 = __importDefault(__webpack_require__(/*! ./actor */ "./src/actor/actor.ts"));
exports.Actor = actor_1.default;
var sprite_actor_1 = __importDefault(__webpack_require__(/*! ./sprite_actor */ "./src/actor/sprite_actor.ts"));
exports.SpriteActor = sprite_actor_1.default;
var sound_actor_1 = __importDefault(__webpack_require__(/*! ./sound_actor */ "./src/actor/sound_actor.ts"));
exports.SoundActor = sound_actor_1.default;
var full_actor_1 = __importDefault(__webpack_require__(/*! ./full_actor */ "./src/actor/full_actor.ts"));
exports.FullActor = full_actor_1.default;


/***/ }),

/***/ "./src/actor/sound_actor.ts":
/*!**********************************!*\
  !*** ./src/actor/sound_actor.ts ***!
  \**********************************/
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
var actor_1 = __importDefault(__webpack_require__(/*! ./actor */ "./src/actor/actor.ts"));
var naras_js_1 = __webpack_require__(/*! naras.js */ "./node_modules/naras.js/dist/naras.min.js");
var SoundActor = /** @class */ (function (_super) {
    __extends(SoundActor, _super);
    function SoundActor() {
        var audioInfos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            audioInfos[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this._sounds = new Map();
        audioInfos.forEach(function (info) {
            _this.addSound(info[0], info[1]);
        });
        return _this;
    }
    SoundActor.prototype.play = function (id) {
        if (id) {
            this._sounds.get(id).play();
        }
        else {
            this.mixer.play();
        }
    };
    SoundActor.prototype.stop = function (id) {
        if (id) {
            this._sounds.get(id).stop();
        }
        else {
            this.mixer.stop();
        }
    };
    SoundActor.prototype.restart = function (id) {
        if (id) {
            this._sounds.get(id).restart();
        }
        else {
            this.mixer.restart();
        }
    };
    SoundActor.prototype.pause = function (id) {
        if (id) {
            this._sounds.get(id).pause();
        }
        else {
            this.mixer.pause();
        }
    };
    SoundActor.prototype.addSound = function (id, audio) {
        var sound = new naras_js_1.Sound(audio);
        this.mixer.addChild(sound);
        this._sounds.set(id, sound);
    };
    return SoundActor;
}(actor_1.default));
exports["default"] = SoundActor;


/***/ }),

/***/ "./src/actor/sprite_actor.ts":
/*!***********************************!*\
  !*** ./src/actor/sprite_actor.ts ***!
  \***********************************/
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
var actor_1 = __importDefault(__webpack_require__(/*! ./actor */ "./src/actor/actor.ts"));
var egak_js_1 = __webpack_require__(/*! egak.js */ "./node_modules/egak.js/dist/egak.min.js");
var SpriteActor = /** @class */ (function (_super) {
    __extends(SpriteActor, _super);
    function SpriteActor(texture) {
        var _this = _super.call(this) || this;
        _this._rotation = 0;
        //SpriteActor???stage???????????????sprite??????????????????
        _this.sprite = new egak_js_1.Sprite(texture);
        _this._stage = _this.sprite;
        return _this;
    }
    Object.defineProperty(SpriteActor.prototype, "position", {
        get: function () {
            return this.sprite.position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpriteActor.prototype, "x", {
        get: function () {
            return this.sprite.x;
        },
        set: function (value) {
            this.sprite.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpriteActor.prototype, "y", {
        get: function () {
            return this.sprite.y;
        },
        set: function (value) {
            this.sprite.y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpriteActor.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (value) {
            this._rotation = value;
            this.sprite.rotation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpriteActor.prototype, "scale", {
        get: function () {
            return this.sprite.scale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpriteActor.prototype, "anchor", {
        get: function () {
            return this.sprite.anchor;
        },
        enumerable: false,
        configurable: true
    });
    return SpriteActor;
}(actor_1.default));
exports["default"] = SpriteActor;


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
    backgroundColor: { r: 0, g: 0, b: 0, a: 1 }
};
var App = /** @class */ (function () {
    function App(options) {
        var _this = this;
        this.ticker = new ticker_1.default();
        this._width = 0;
        this._height = 0;
        this._loadThen = function () { };
        this.mainLoop = function (delta, info) {
            var color = _this.backgroundColor;
            _this.renderSystem.clearScreen(color.r, color.g, color.b, color.a);
            _this.baseScene.update(delta, info);
            _this.renderSystem.render();
        };
        options = Object.assign(defaultAppOptions, options);
        this._width = options.width;
        this._height = options.height;
        this.backgroundColor = options.backgroundColor;
        this.renderSystem = new EGAK.App({
            width: this._width,
            height: this._height,
            canvas: options.canvas,
            autoStyleCanvas: options.autoStyleCanvas
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
    App.prototype.addImage = function (id, src, scaleMode) {
        this.renderSystem.addResource(id, src, scaleMode);
        return this;
    };
    App.prototype.addSound = function (id, src, scaleMode) {
        this.soundSystem.addResource(id, src, scaleMode);
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
exports.TextureLoader = exports.Graphics = exports.Text = exports.Stage = exports.Sprite = exports.AudioLoader = exports.Mixer = exports.Sound = exports.FullActor = exports.SoundActor = exports.SpriteActor = exports.Actor = exports.Scene = exports.App = void 0;
var app_1 = __importDefault(__webpack_require__(/*! ./app */ "./src/app/index.ts"));
exports.App = app_1.default;
var scene_1 = __importDefault(__webpack_require__(/*! ./scene */ "./src/scene/index.ts"));
exports.Scene = scene_1.default;
var actor_1 = __webpack_require__(/*! ./actor */ "./src/actor/index.ts");
Object.defineProperty(exports, "Actor", ({ enumerable: true, get: function () { return actor_1.Actor; } }));
Object.defineProperty(exports, "SpriteActor", ({ enumerable: true, get: function () { return actor_1.SpriteActor; } }));
Object.defineProperty(exports, "SoundActor", ({ enumerable: true, get: function () { return actor_1.SoundActor; } }));
Object.defineProperty(exports, "FullActor", ({ enumerable: true, get: function () { return actor_1.FullActor; } }));
var EGAK = __importStar(__webpack_require__(/*! egak.js */ "./node_modules/egak.js/dist/egak.min.js"));
var NARAS = __importStar(__webpack_require__(/*! naras.js */ "./node_modules/naras.js/dist/naras.min.js"));
var Sprite = EGAK.Sprite, Stage = EGAK.Stage, Text = EGAK.Text, Graphics = EGAK.Graphics, TextureLoader = EGAK.Loader;
exports.Sprite = Sprite;
exports.Stage = Stage;
exports.Text = Text;
exports.Graphics = Graphics;
exports.TextureLoader = TextureLoader;
var Sound = NARAS.Sound, Mixer = NARAS.Mixer, AudioLoader = NARAS.Loader;
exports.Sound = Sound;
exports.Mixer = Mixer;
exports.AudioLoader = AudioLoader;


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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var egak_js_1 = __webpack_require__(/*! egak.js */ "./node_modules/egak.js/dist/egak.min.js");
var naras_js_1 = __webpack_require__(/*! naras.js */ "./node_modules/naras.js/dist/naras.min.js");
var Scene = /** @class */ (function () {
    function Scene() {
        var _this = this;
        this.children = new Set();
        this._stage = new egak_js_1.Stage();
        this._mixer = new naras_js_1.Mixer();
        this.needsInfoNames = new Set();
        this.update = function (delta, info) {
            _this.children.forEach(function (actor) {
                var info = {};
                actor.needsInfoNames.forEach(function (name) {
                    info[name] = _this[name];
                });
                actor.update(delta, info);
            });
        };
    }
    Object.defineProperty(Scene.prototype, "stage", {
        get: function () {
            return this._stage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scene.prototype, "mixer", {
        get: function () {
            return this._mixer;
        },
        enumerable: false,
        configurable: true
    });
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
        if (scene.parent == undefined) {
            this._stage.addChild(scene._stage);
            this._mixer.addChild(scene._mixer);
            this.children.add(scene);
            scene.parent = this;
        }
        return this;
    };
    Scene.prototype.addChildren = function () {
        var scenes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scenes[_i] = arguments[_i];
        }
        for (var i = 0, len = scenes.length; i < len; i++) {
            this.addChild(scenes[i]);
        }
        return this;
    };
    Scene.prototype.removeChild = function (scene) {
        this._stage.removeChild(scene._stage);
        this._mixer.removeChild(scene._mixer);
        this.children.delete(scene);
        scene.parent = undefined;
        return this;
    };
    Scene.prototype.emit = function (method) {
        var _a;
        var arg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arg[_i - 1] = arguments[_i];
        }
        if (this.parent && this.parent[method]) {
            (_a = this.parent)[method].apply(_a, __spreadArray([], __read(arg), false));
        }
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
        var elapsedTime = timeStamp - this._prevTimeStamp;
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