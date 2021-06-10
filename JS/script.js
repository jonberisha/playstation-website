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
