(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[631],{9021:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lib/SceneInit",function(){return t(6063)}])},6063:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var i=t(2212),r=t(9365);t(5079);function s(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(n,t,i,r,s,a,o){var c=void 0===o?36:o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.fov=c,this.scene=i,this.stats=r,this.camera=t,this.controls=s,this.renderer=a,this.canvasID=n}var n,t,a;return n=e,(t=[{key:"initScene",value:function(){var e=this;this.camera=new i.cPb(this.fov,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.z=128,this.scene=new i.xsS;var n=document.getElementById(this.canvasID);this.renderer=new i.CP7({canvas:n,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.controls=new r.z(this.camera,this.renderer.domElement),window.addEventListener("resize",(function(){return e.onWindowResize()}),!1)}},{key:"animate",value:function(){window.requestAnimationFrame(this.animate.bind(this)),this.render(),this.controls.update()}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"onWindowResize",value:function(){this.camera.aspect=this.splitScreen.clientWidth/this.splitScreen.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.splitScreen.clientWidth,this.splitScreen.clientHeight)}}])&&s(n.prototype,t),a&&s(n,a),e}()}},function(e){e.O(0,[737,595,888,774,179],(function(){return n=9021,e(e.s=n);var n}));var n=e.O();_N_E=n}]);