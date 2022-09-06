function LoadNavbar() {
  var navbar = document.getElementById("navbar");
  var navbarhtml = fetch("navbar.html");
  navbar.innerHTML = navbarHTML;
}
