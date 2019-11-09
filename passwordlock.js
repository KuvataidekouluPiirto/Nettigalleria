var tries = 1;
var triesRemaining = 3;
var correctPassword = "salasana1234";

function askPassword() {
  var limit = 3;
  var input = document.getElementById("userInput").value;

  if (input == correctPassword) {
    window.open("https://youtube.com", "_self");
  }

  else if (tries >= limit) {
    alert("Annoit salasanan 3 kertaa väärin! Sinut siiretään nyt pois tältä sivulta kehittäjien asettaman rajan takia");
    window.open("https://google.fi", "_self");
  }

  else {
    triesRemaining -= 1;
    tries += 1;
    alert("Väärä salasana! Sinulla on " + triesRemaining + " yritys(tä) jäljellä");
  }
}
