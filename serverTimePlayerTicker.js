$(document).ready(function(){
    var test = 0;
var playerNumber = document.getElementById("playerCount");
$.get("https://esi.evetech.net/latest/status/?datasource=tranquility", function(data){
    
    playerNumber.innerHTML = "Player Count: " + data.players;

});

function startTime() {
  
    var today = new Date();
    var h = today.getUTCHours();
    var m = today.getUTCMinutes();
    var s = today.getUTCSeconds();
    
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('serverTime').innerHTML = "Server Time " + h + ":" + m + ":" + s;
    var t = setTimeout(function() {
      startTime()
    }, 500);
  }
  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    };
    return i;
  }
  
  startTime()

});