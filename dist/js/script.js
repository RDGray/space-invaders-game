"use strict";function _classCallCheck(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,s){for(var r=0;r<s.length;r++){var t=s[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,s,r){return s&&_defineProperties(e.prototype,s),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var canvas=document.querySelector("canvas"),c=canvas.getContext("2d");canvas.width=window.innerWidth,canvas.height=window.innerHeight;var Player=function(){function e(){var s=this;_classCallCheck(this,e),this.velocity={x:0,y:0},this.rotation=0;var r=new Image;r.src="./dist/assets/img/hero.png",r.onload=function(){s.image=r,s.width=.15*r.width,s.height=.15*r.height,s.position={x:canvas.width/2-s.width/2,y:canvas.height-s.height-20}}}return _createClass(e,[{key:"draw",value:function(){c.save(),c.translate(player.position.x+player.width/2,player.position.y+player.height/2),c.rotate(this.rotation),c.translate(-player.position.x-player.width/2,-player.position.y-player.height/2),c.drawImage(this.image,this.position.x,this.position.y,this.width,this.height),c.restore()}},{key:"update",value:function(){this.image&&(this.position.x+=this.velocity.x,this.draw())}}]),e}(),Projectile=_createClass((function e(s){var r=s.position;s.velocity;_classCallCheck(this,e),this.position=r,this.velocity=this.velocity})),player=new Player,keys={a:{pressed:!1},d:{pressed:!1},w:{pressed:!1},s:{pressed:!1},ArrowLeft:{pressed:!1},ArrowRight:{pressed:!1},ArrowUp:{pressed:!1},ArrowDown:{pressed:!1},space:{pressed:!1}};function animate(){requestAnimationFrame(animate),c.fillStyle="black",c.fillRect(0,0,canvas.width,canvas.height),player.update();keys.a.pressed&&player.position.x>=0?(player.velocity.x=-10,player.rotation=-.15):keys.d.pressed&&player.position.x+player.width<=canvas.width?(player.velocity.x=10,player.rotation=.15):keys.ArrowLeft.pressed&&player.position.x>=0?(player.velocity.x=-10,player.rotation=-.15):keys.ArrowRight.pressed&&player.position.x+player.width<=canvas.width?(player.velocity.x=10,player.rotation=.15):(player.velocity.x=0,player.rotation=0)}animate(),addEventListener("keydown",(function(e){var s=e.key;switch(s){case"a":keys.a.pressed=!0;break;case"d":keys.d.pressed=!0;break;case"w":keys.w.pressed=!0;break;case"s":keys.s.pressed=!0;break;case"ArrowLeft":keys.ArrowLeft.pressed=!0;break;case"ArrowRight":keys.ArrowRight.pressed=!0;break;case"ArrowUp":keys.ArrowUp.pressed=!0;break;case"ArrowDown":keys.ArrowDown.pressed=!0}console.log(s)})),addEventListener("keyup",(function(e){var s=e.key;switch(s){case"a":console.log("left"),keys.a.pressed=!1;break;case"d":console.log("right"),keys.d.pressed=!1;break;case"w":console.log("up"),keys.w.pressed=!1;break;case"s":console.log("down"),keys.s.pressed=!1;break;case"ArrowLeft":console.log("left"),keys.ArrowLeft.pressed=!1;break;case"ArrowRight":console.log("right"),keys.ArrowRight.pressed=!1;break;case"ArrowUp":console.log("up"),keys.ArrowUp.pressed=!1;break;case"ArrowDown":console.log("down"),keys.ArrowDown.pressed=!1;break;case" ":console.log("shoot")}console.log(s)}));
//# sourceMappingURL=script.js.map