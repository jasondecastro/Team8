
$(document).ready(function() {
  var canvas = document.getElementById("game"),
      ctx = canvas.getContext("2d"),
      width = 800,
      height = 400,
      player = {
        x : width/2,
        y : height - 5,
        width : 5,
        height : 5,
        speed: 5,
        velX: 0,
        velY: 0,
        jumping: true
      },
      keys = [],
      friction = 0.8,
      gravity = 0.2;
  
  canvas.height = $("#game").height();
  canvas.width = $("#game").width();
   
  function update(){
    
    // check keys
      if (keys[38] || keys[32]) {
          // up arrow or space
        if(!player.jumping){
         player.jumping = true;
         player.velY = -player.speed*2;
        }
      }
      if (keys[39]) {
          // right arrow
          if (player.velX < player.speed) {             
              player.velX++;         
           }     
      }     
      if (keys[37]) {         
          // left arrow      
          if (player.velX > -player.speed) {
              player.velX--;
          }
      }
   
      player.velX *= friction;
   
      player.velY += gravity;
   
      player.x += player.velX;
      player.y += player.velY;
   
      if (player.x >= width-player.width) {
          player.x = width-player.width;
      } else if (player.x <= 0) {         
          player.x = 0;     
      }    
    
      if(player.y >= height-player.height){
          player.y = height - player.height;
          player.jumping = false;
      }
   
    //ctx.fillStyle = "red";
    //ctx.fillRect(player.x, player.y, player.width, player.height);
    var imageObj = new Image();
      imageObj.onload = function() { ctx.drawImage(imageObj, player.x, player.y); };
      if (time % 2) {
        imageObj.src = 'http://png-4.findicons.com/files/icons/1278/quickpix_2006/48/santa_sprite.png';
      } else {
        imageObj.src = 'http://png-4.findicons.com/files/icons/1278/quickpix_2006/48/santa_sprite.png';
      }
     //ctx.clearRect(0,0,width,height);

    // ctx.fillStyle = 'skyblue';
      //ctx.fillRect(0, 0, canvas.width, canvas.height);
   
    requestAnimationFrame(update);
  }

  function render() {
      
  }
  document.body.addEventListener("keydown", function(e) {
      keys[e.keyCode] = true;
  });
   
  document.body.addEventListener("keyup", function(e) {
      keys[e.keyCode] = false;
  });
   
  window.addEventListener("load",function(){
      update();
  });
  var time = Date.now();

  /* Our random score generator */
  var UIScore = $('#score');
  var score = 0;

  function increaseScoreSystem(val) {
      score += val;
      UIScore.html(score);
  }

  setInterval(function() {
      var num = 1; // Math.floor(Math.random() * 6) + 1;
      increaseScoreSystem(num);
  }, 1000);

  pauseGame = function() {
    alert('Paused!');
  }

});