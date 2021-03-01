// Course: CS290 - Web Development
// Student Name: Dave Huston
// Assignment: CS290 Project - front end
// Description: Real House Cats of Seattle

document.addEventListener('DOMContentLoaded', showSlides);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
}

function getEmail() {
    document.getElementById('emailSubmit').addEventListener('click', function (event) {
        event.preventDefault();
        var reqEmail = new XMLHttpRequest();
        var email = document.getElementById('email').value
        reqEmail.open("GET", 'http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php', true);
        reqEmail.addEventListener('load',function(){
            if(reqZip.status >= 200 && reqZip.status < 400){
                var responseEmail = JSON.parse(reqEmail.responseText);
                console.log(responseEmail);
                document.getElementById('cityTemp').textContent = "It is " + toF(responseZip.main.temp) + " degrees F ";
            } else {
                console.log("Error in network request: " + reqEmail.statusText);
            }});
        reqEmail.send(null);
    });
}
