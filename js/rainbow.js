
$(document).ready(function() {
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');

  canvas.height = 700;
  canvas.width = $("#game").width();
 
  var mySanta = {
      x: 600,
      y: 600,
      speed: 400,
  };
   
  var keysDown = {};
  window.addEventListener('keydown', function(e) {
      keysDown[e.keyCode] = true;
  });
  window.addEventListener('keyup', function(e) {
      delete keysDown[e.keyCode];
  });
   
  function update(mod) {
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
      ctx.fillRect(0, 0, canvas.width, canvas.height);

  }
   
  function run() {
      update((Date.now() - time) / 1000);
      render();
      time = Date.now();
  }

  var time = Date.now();
  setInterval(run, 20);
console.log('arf');
});