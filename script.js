
document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript Loaded Successfully");

    init();
    showSlides();

});

function init() {
    console.log("Website Initialized");
}


function exampleFunction() {
    alert("This is a sample function");
}

document.addEventListener("click", function () {
    console.log("Page clicked");
});


function toggleMenu() {
    var menu = document.getElementById("menu-links");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

var index = 0;

function showSlides() {

    var slides = document.getElementsByClassName("slide");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    index++;

    if (index > slides.length) {
        index = 1;
    }

    slides[index - 1].style.display = "block";

    setTimeout(showSlides, 3000);

}


