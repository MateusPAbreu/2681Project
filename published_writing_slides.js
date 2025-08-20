let slides = [
  document.getElementById("book1"),
  document.getElementById("book2"),
  document.getElementById("book3"),
  document.getElementById("book4"),
  document.getElementById("book5"),
  document.getElementById("book6"),
  document.getElementById("book7"),
  document.getElementById("book8")
];

let currentSlide = 0;

function back(){
    // print("Its calling");
    slides[currentSlide].style.visibility = "hidden";

    if(currentSlide === 0 ){
        currentSlide = 7;
    }else{
        currentSlide = currentSlide-1;
    }
    console.log(currentSlide)
    slides[currentSlide].style.visibility = "visible";
}

function forward(){
    // print("Its calling");
    slides[currentSlide].style.visibility = "hidden";

    if(currentSlide === 7 ){
        currentSlide = 0;
    }else{
        currentSlide = currentSlide+1;
    }
    console.log(currentSlide)
    slides[currentSlide].style.visibility = "visible";
}