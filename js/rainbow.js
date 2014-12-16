
$(document).ready(function() {
  var canvas = document.getElementById("game"),
      ctx = canvas.getContext("2d");

  var friction = 0.8,
      gravity = 0.4;
  
  canvas.height = 700;
  canvas.width = $("#game").width();

  var mySanta = {
      x: 600,
      y: 630,
      velY: 0,
      velX: 0,
      height: 70,
      width: 70,
      speed: 400,
      jumping: false,
  };
   
  var keysDown = {};
  window.addEventListener('keydown', function(e) {
      keysDown[e.keyCode] = true;
  });
  window.addEventListener('keyup', function(e) {
      delete keysDown[e.keyCode];
  });
   
  function update(mod) {
      if (38 in keysDown) {
          // up arrow
        if(!mySanta.jumping){
         mySanta.jumping = true;
         mySanta.velY = -mySanta.speed*mod*1.5;
        }
      }

      if (37 in keysDown) {
          mySanta.x -= mySanta.speed * mod;
      }
      while (32 in keysDown) {
          mySanta.x -= mySanta.speed * 2;
      }
      //if (38 in keysDown) {
         // mySanta.y -= mySanta.speed * mod;
      //}
      if (39 in keysDown) {
          mySanta.x += mySanta.speed * mod;
      }
      //if (40 in keysDown) {
        //  mySanta.y += mySanta.speed * mod;
     // }

      mySanta.velX *= friction;
   
      mySanta.velY += gravity;
   
      mySanta.x += mySanta.velX;
      mySanta.y += mySanta.velY;

      if (mySanta.x >= canvas.width-mySanta.width) {
          mySanta.x = canvas.width-mySanta.width;
      } else if (mySanta.x <= 0) {
          mySanta.x = 0;
      }

      if(mySanta.y >= canvas.height-mySanta.height){
          mySanta.y = canvas.height - mySanta.height;
          mySanta.jumping = false;
      }
  }
   
  function render() {
      var imageObj = new Image();
      imageObj.onload = function() { ctx.drawImage(imageObj, mySanta.x, mySanta.y); };
      if (time % 2) {
        imageObj.src = 'http://www.sumoware.com/images/temp/xztdjaomnsokljct.png';
      } else {
        imageObj.src = 'http://www.sumoware.com/images/temp/xzhscmemgbsnrjrc.png';
      }
      ctx.fillStyle = 'skyblue';
      if (canvas.width !== $("#game").width()) {
        canvas.width = $("#game").width();
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

  }

  function run() {
      update((Date.now() - time) / 1000);
      render();
      time = Date.now();
  }
   
  var time = Date.now();
  setInterval(run, 20);
   
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