function onClickButton() {
  console.log("test");
} 
var imgSource = [
  "featured-games",
  "Playstation-5-games-console-transparent-background-png-image.webp",
];
var imgPath = "/home/jon/Desktop/github/playstation-website/assets/";

// Background Image Slideshow Function
var i = 0;
setInterval(function () {
  var imgURL = imgPath + imgSource[i];
  var bg = document.getElementById("background-slideshow");
  bg.style.backgroundImage = `url(${imgURL})`;
  i = i + 1;
  if (i == imgSource.length) {
    i = 0;
  }
}, 2000);

// TEST
// modal
var modal = document.getElementById('modal-form');
var btn = document.getElementById("modal-btn");

//close modal with <span>
var span = document.getElementsByClassName("close")[0];

//open modal on button click
btn.onclick = function() {
    modal.style.display = "block";
}

//close modal when clicking anywhere outside of it
span.onclick = function() {
    modal.style.display = "none";
}
