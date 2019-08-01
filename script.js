// Photoslider

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
    document.getElementById("slide").src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
}

var previous = document.getElementById("previous");

previous.addEventListener("click", previousImg);

function previousImg() {
    document.getElementById("slide").src = images[i];

    if(i < images.length - 1){
        i--;
    } else {
        i = 0
    }
}

// Tabs

function openTab(evt, tabName) {
    var tabContent = document.getElementsByClassName("infoContainer");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    var tabLinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}