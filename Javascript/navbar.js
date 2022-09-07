function LoadNavbar() {
  fetch("../HTML/navbar.html")
  .then(res => res.text())
  .then(text => document.getElementById("navbar").innerHTML = text);
}
