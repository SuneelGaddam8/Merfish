
const cards=document.querySelectorAll('.clinical_sevice_card');
const cardsRelatedInfo=document.querySelectorAll('.clinical_service_details')


function viewActiveClinicalService(index){
    cards.forEach(card => {
        card.classList.remove('active_clinical_service')
      });
      cards[index-1].classList.add('active_clinical_service');

      cardsRelatedInfo.forEach(info=>{
        info.classList.add('clinical_service_details_hide')
      })
      cardsRelatedInfo[index-1].classList.remove('clinical_service_details_hide')
}