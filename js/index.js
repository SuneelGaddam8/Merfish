

let slideIndex = 1;
document.addEventListener('DOMContentLoaded', function() {
  showSlides(slideIndex)
  countRatedDigits()
});


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide_cards");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
  
}
function showSlides() {
  
  let i;
  let slides = document.getElementsByClassName("slide_cards");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
  slideIndex++;
  // Change image every 2 seconds
    setTimeout(showSlides, 10000);
  
}

// auto count numbers of feedbacks or experience candidates
function countRatedDigits(params) {
  let valueDisplays=document.querySelectorAll(".num");
let interval=1000;

valueDisplays.forEach(value=>{
  let startValue=0;
  let endValue=parseInt(value.getAttribute('data-val'));
 let duration=endValue<100?
 60:endValue<500?40:endValue<800?10:endValue<2000?1:endValue>2000?5:1;
   
let counter =setInterval(function(){
  startValue+=1;
  value.textContent=startValue+"+";
  if (startValue==endValue) {
    clearInterval(counter)
  }
},duration)

})
}


var header = document.getElementsByClassName("header_options");
var btns = document.getElementsByTagName('a');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("header_active");
  current[0].className = current[0].className.replace("header_active", "");
  this.className= "header_btn header_active";
  });
}
var idName=document.getElementsByClassName('main_body')
homeHandler('home')
function homeHandler(value){
 for (let index = 0; index < idName.length; index++) {
   if(value===idName[index].getAttribute('id')){
     idName[index].style.display="flex";
    
   }
   else{
     idName[index].style.display="none"
   }
   
 }
 // header hide after selected
document.getElementById('menuBtn').classList.remove('change');
 document.getElementById("myDropdown").classList.remove("show");
}




