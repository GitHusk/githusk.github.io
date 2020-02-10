function openMenu(evt, cityName) {
  var i, tabcontent, tablinks, markers;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }


  markers = document.getElementsByClassName("marker");
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    markers[i].className = markers[i].className.replace(" active", "");
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(("marker." + cityName)).className += " active";
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function initializeMenu() {
  var about, button, marker;
  about = document.getElementById("About");
  button = document.getElementById("t1");
  marker = document.getElementById("marker.About");

  document.getElementById("About").style.display = "block";
  button.className += " active";
  marker.className += " active";
}
