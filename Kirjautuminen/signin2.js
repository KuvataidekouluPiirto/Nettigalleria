var correct_password = "centenario";

function logIn() {
  var user_password = document.getElementById("password-field").value;
  if (user_password == correct_password) {
    window.open("https://kuvataidekoulupiirto.github.io/YlojarvenKaupunki/", "_self");
  }

  else {
    alert("Väärä Salasana! Jos olet unohtanut salasanasi, ota yhteyttä sivun ylläpitäjään");
  }
}

// Go to previus site function
function goBack() {
  window.history.back("_self");
}
