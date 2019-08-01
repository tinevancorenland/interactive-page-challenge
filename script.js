var i = 0;
var images = [];
var time = 3000;

images[0] = "./img/AbovePhoto.jpeg";
images[1] = "./img/Astronaut.jpeg";
images[2] = "./img/SpaceStationOverBelgium.jpeg"

function changeImg() {
    nextImg();
    setTimeout("changeImg()", time);
}

var next = document.getElementById("next");

next.addEventListener("click", nextImg);

function nextImg() {
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
}

var previous = document.getElementById("previous");

previous.addEventListener("click", previousImg);

function previousImg() {
    document.slide.src = images[i];

    if(i < images.length - 1){
        i--;
    } else {
        i = 0
    }
}
