function menuDropDown(x) {
    x.classList.toggle("change");
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function showResearchDropDown(){
    document.getElementById('research_drop_down').style.display='block'
    document.getElementById('mobile_research_dropDown').style.display='block'
  }
  
  function hideResearchDropDown(){
    document.getElementById('research_drop_down').style.display='none'
    document.getElementById('mobile_research_dropDown').style.display='none'
  
  }

  let valueIndex=0;
  let list=document.querySelectorAll('.testimonial_view_card');

function viewTestimonialsHome() {
list.forEach((item,index)=>{
  console.log(valueIndex);
  if (index===valueIndex||index===valueIndex+1) {
    item.classList.add('view_testimonial')

  } else {
    item.classList.remove('view_testimonial')
  }
  if (valueIndex===0 ) {
    document.getElementById('up_test').style.display='none'
  }
  else if(valueIndex===list.length-1){
    document.getElementById('down_test').style.display='none'

  }
  else{
    document.getElementById('down_test').style.display='block'
    document.getElementById('up_test').style.display='block'

  }
})
}
viewTestimonialsHome()

 function nextTestimonial() {
  if (valueIndex<list.length-1) {
    valueIndex+=1
    viewTestimonialsHome()
  }
   
 }
 function prevTestimonial() {
  if (valueIndex>0) {
    valueIndex-=1
    viewTestimonialsHome()
  }
   
 }
