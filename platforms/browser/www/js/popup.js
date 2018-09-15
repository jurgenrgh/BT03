function popupBox(msgText) {
  var msg = document.getElementById("msgBox");

  var txt = document.getElementById("modalMsgText");
  txt.innerHTML += "&diams;" + msgText + "<br />";

  console.log("popup prompt", msgText);
}
