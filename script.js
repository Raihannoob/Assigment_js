var guestNumber = 0;

function GuestInfo_increment() {
  guestNumber++;
  document.getElementById("GuestInfo").innerHTML = guestNumber;
}

function GuestInfo_decrement() {
  if (guestNumber > 0) {
    guestNumber--;
    document.getElementById("GuestInfo").innerHTML = guestNumber;
  }
}

function GuestInfo_update() {
  var guest = document.getElementById("GuestInfo").innerText;
  document.getElementById("showguest").innerHTML = guest;
}
