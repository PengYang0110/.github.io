var slider = document.getElementById("slider");
var images = slider.getElementsByTagName("img");

var counter = 0;

setInterval(function() {
  images[counter].classList.remove("active");
  counter++;
  if (counter == images.length) {
    counter = 0;
  }
  images[counter].classList.add("active");
}, 5000);
