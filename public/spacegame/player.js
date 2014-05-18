
//A module definition requires globals
//use:
define(["globals", "./bullet"], function (GLOBAL, Bullet) {
	"use strict"
  
  var width = 70;
  var height= 63;
  
  
	return {
		color : "#00A",
		width : width,
		height : height,
    x : GLOBAL.CANVAS_WIDTH / 2 - width/2,
		y : GLOBAL.CANVAS_HEIGHT - height,
    angle : 0,
    
    up : function(){
      
    },
    down : function(){
      
    },
    left : function(speed){
      this.x -= speed;
    },
    right : function(speed){
      this.x += speed;
    },
    
    
		sprite : GLOBAL.SPRITE("player_ship"), //todo:
		draw : function () {
			this.sprite.draw(GLOBAL.CANVAS, this.x, this.y);
		},
    drawx : function () {
      var temp = GLOBAL.CANVAS.fillStyle;
			GLOBAL.CANVAS.fillStyle = this.color;
			GLOBAL.CANVAS.fillRect(this.x, this.y, this.width, this.height);
      GLOBAL.CANVAS.fillStyle = temp;
		},
		shoot : function () {
			if (GLOBAL.OUTGOINGEMAILDATA[GLOBAL.GAMEHOUR].length > 0) { // bullet available
        console.log(GLOBAL.OUTGOINGEMAILDATA[GLOBAL.GAMEHOUR].pop());
        
				GLOBAL.SOUND.play("shoot");
        
				var bulletPosition = this.midpoint();
				GLOBAL.PLAYERBULLETS.push(Bullet({
						speed : 10,
						x : bulletPosition.x,
						y : bulletPosition.y
					}));
			} else { // no bullet
				GLOBAL.SOUND.play("cocking") //TODO: change to nobullet sound
			}
		},
		midpoint : function () {
			return {
				x : this.x + this.width / 2,
				y : this.y + this.height / 2
			}
		},
		explode : function () {
			this.active = false;
			// Extra Credit: Add an explosion graphic and then end the game
		}
	};
});
