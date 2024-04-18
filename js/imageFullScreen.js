document.querySelectorAll('.image_container img').forEach(pic=>{
    pic.onclick=()=>{
        document.querySelector('.image_popup_container').style.display='block';
        document.querySelector('.image_popup_container img').src=pic.getAttribute('src')
    }
})
document.querySelectorAll('.clinical_service_details_info_images img').forEach(pic=>{
    pic.onclick=()=>{
        document.querySelector('.image_popup_container').style.display='block';
        document.querySelector('.image_popup_container img').src=pic.getAttribute('src')
    }
})
document.querySelector('.image_popup_container span').onclick=()=>{
    document.querySelector('.image_popup_container').style.display='none';
};