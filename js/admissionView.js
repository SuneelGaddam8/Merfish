
const imageUrls = [

  "./assets/image_container/merfish-banner.png",
 
 ];
 
 
 
 
   const videoUrls = [
 
     "ec1eS4kNwf4",
 
     "Sebx3Q2GKE0"
 
   ];
 
 
 
 
   // Function to render images
 
   function renderImages() {
 
     const container = document.getElementById("imageGallery");
 
     imageUrls.forEach(url => {
 
       const img = document.createElement("img");
 
       img.src = url;
 
       img.classList.add("img_item");
 
       container.appendChild(img);
 
     });
 
   }
 
 
 
 
   // Function to render videos
 
   function renderVideos() {
 
     const url="https://www.youtube.com/embed/"
 
     const container = document.getElementById("videoGallery");
 
     videoUrls.forEach(urlId => {
 
       const video = document.createElement("iframe");
 
       video.src = url+urlId;
 
       video.allowFullscreen = true;
 
       video.classList.add("item",
 "video");
 
       container.appendChild(video);
 
     });
 
   }
 
 
 
 
   // Function to render images
 
   function renderImagesGallery() {
 
     const container = document.getElementById("galleryViewImages");
 
     imageUrls.forEach(url => {
 
       const img = document.createElement("img");
 
       img.src = url;
 
       img.classList.add("img_item");
 
       container.appendChild(img);
 
     });
 
   }
 
 
 
 
   // Function to render videos
 
   function renderVideosGallery() {
 
     const url="https://www.youtube.com/embed/"
 
     const container = document.getElementById("galleryVideosView");
 
     videoUrls.forEach(urlId => {
 
       const gvideo = document.createElement("iframe");
 
       gvideo.src = url+urlId;
 
       gvideo.allowFullscreen = true;
 
       gvideo.classList.add("gitem",
 "gvideo");
 
       container.appendChild(gvideo);
 
     });
 
   }
 
   
 
 
   window.onload = function() {
 
     renderImages();
 
     renderVideos();
 
   
 
     renderVideosGallery();
 
   };
 
 
 
 
 
 
 
 
 