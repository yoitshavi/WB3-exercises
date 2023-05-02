"use strict";

window.onload = init;

const now = new Date();
function init() {
  const dateBtnEl = document.getElementById("dateBtn");
  dateBtnEl.onclick = onDateBtnClicked;
}

function onDateBtnClicked() {
  const dateEl = document.getElementById("date");
  const userdate = dateEl.value;
  let d = new Date(userdate);
  const dateTimeEl = document.getElementById("dateTime");
  dateTimeEl.innerHTML = d.toString();
}
