
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
} 


$(document).ready(function () {
    const changeStrt = document.querySelectorAll('#chString')
    if (changeStrt.length) {
        $(function () {
            var count = 0;
            setInterval(function () {
                count++;
                $("#chString").fadeOut(400, function () {
                    $(this).html(stringsArray[count % stringsArray.length]).fadeIn(400);
                });
            }, 2000);
        });
    }
});

//animation text
var typed = new Typed(".typing", {
    strings: ["Logitech's", "Canon's", "LJ Hooker's", "Bellamy's", "Nimble's"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



