let slides = [
  document.getElementById("slide1"),
  document.getElementById("slide2"),
  document.getElementById("slide3"),
  document.getElementById("slide4"),
  document.getElementById("slide5"),
  document.getElementById("slide6"),
];

let currentSlide = 0;

function back(){
    // print("Its calling");
    slides[currentSlide].style.visibility = "hidden";

    if(currentSlide === 0 ){
        currentSlide = 5;
    }else{
        currentSlide = currentSlide-1;
    }
    console.log(currentSlide)
    slides[currentSlide].style.visibility = "visible";
}

function forward(){
    // print("Its calling");
    slides[currentSlide].style.visibility = "hidden";

    if(currentSlide === 5 ){
        currentSlide = 0;
    }else{
        currentSlide = currentSlide+1;
    }
    console.log(currentSlide)
    slides[currentSlide].style.visibility = "visible";
}