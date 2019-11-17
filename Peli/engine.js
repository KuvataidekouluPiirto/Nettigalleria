var player1 = document.getElementById("player1score");
var timer = document.getElementById("gametimer");
var getReady = 3;
var seconds = 10;
var gameTimer;


// Player score
function score() {
  document.getElementById("player1score").innerHTML = player1 += 1;
}

// Remove start button after clicking it
function removeStart() {
  startingtimer();

  var elem = document.getElementById('start-timer');
  elem.parentNode.removeChild(elem);
  return false;
}


// Timer
function startingtimer() {
  if (getReady >= 1) {
    startingTimer();
  }

  else if (getReady <= 0) {
    document.getElementById("gametimer").innerHTML = "Go!";
    setTimeout(countdown, 1000);
  }
}

function startingTimer() {
  document.getElementById("gametimer").innerHTML = "Get ready! " + getReady;
  getReady -= 1;
  startTimer = setTimeout(startingtimer, 1000);
}

// Timer after starting
function countdown() {

  if (seconds > 0) {
    document.getElementById("scorebutton").disabled = false;
    countDown();
  }

  else if (seconds == 0) {
    document.getElementById("scorebutton").disabled = true;
    document.getElementById("gametimer").innerHTML = "Time is up!";
  }
}

function countDown() {
  document.getElementById("gametimer").innerHTML = seconds + " seconds";
  seconds -= 1;
  gameTimer = setTimeout(countdown, 1000);
}

function replay() {
  location.reload();
}
