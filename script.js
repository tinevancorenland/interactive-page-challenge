var i = 0;
var images = [];
var time = 3000;

images[0] = "./img/AbovePhoto.jpeg";
images[1] = "./img/Astronaut.jpeg";
images[2] = "./img/SpaceStationOverBelgium.jpeg"

function changeImg() {
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}
