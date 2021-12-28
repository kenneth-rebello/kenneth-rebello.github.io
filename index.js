
let slideIndex = 1;
let numOfSlides = 0;
let timer;

showSlides(slideIndex);

function nextSlide(n){
    clearTimeout(timer)
    n>0 ? showSlides(slideIndex) : slideIndex==1 ? showSlides(slideIndex = numOfSlides) : showSlides(slideIndex -= 2);
}

function currentSlide(n) {
    clearTimeout(timer)
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    numOfSlides = slides.length - 1;
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    timer = setTimeout(showSlides, 7000);  
}


document.getElementById("projects").onclick = () =>{  
    document.getElementById("projectsDiv").classList.toggle("displayOut");
    document.getElementById("projectsDiv").classList.toggle("display");
    const title = document.getElementById("projects");
    title.classList.toggle("unselected");
    title.classList.toggle("selected");
}

document.getElementById("other").onclick = () =>{  
    document.getElementById("otherDiv").classList.toggle("displayOut");
    document.getElementById("otherDiv").classList.toggle("display");
    const title = document.getElementById("other");
    title.classList.toggle("unselected");
    title.classList.toggle("selected");
}