let homeRecord = document.getElementById("homeRecord");
let guestRecord = document.getElementById("guestRecord");
let countHome = 0;
let countGuest = 0;
function homePlus1() {
  countHome += 1;
  homeRecord.innerText = countHome;
}
function homePlus2() {
  countHome += 2;
  homeRecord.innerText = countHome;
}
function homePlus3() {
  countHome += 3;
  homeRecord.innerText = countHome;
}
function guestPlus1() {
  countGuest += 1;
  guestRecord.innerText = countGuest;
}
function guestPlus2() {
  countGuest += 2;
  guestRecord.innerText = countGuest;
}
function guestPlus3() {
  countGuest += 3;
  guestRecord.innerText = countGuest;
}
function resetScoreHome() {
  countHome = 0;
  countGuest = 0;
  guestRecord.innerText = countGuest;
  homeRecord.innerText = countHome;
}
