
$(document).ready(function() {
  // todo - we need url
  var url = "";

  startGame = function() {
    var phoneNumber =  
      $('#phone').val();
    var data = {'phoneNumber': phoneNumber};
  
    console.log(phoneNumber);
    $.ajax({
     url: url,
     type: 'POST',
     contentType:'application/json',
     data: JSON.stringify(data),
     dataType:'json'
    });
    
    window.location.replace("game.html");
  }
});