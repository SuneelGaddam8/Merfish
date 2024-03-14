const imageUrls = [
'    https://www.pexels.com/photo/green-and-blue-peacock-feather-674010/'];

  const videoUrls = [
    "https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    "https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4"
  ];

  // Function to render images
  function renderImages() {
    const container = document.getElementById("imageContainer");
    imageUrls.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      img.classList.add("img_item");
      container.appendChild(img);
    });
  }

  // Function to render videos
  function renderVideos() {
    const container = document.getElementById("videoContainer");
    videoUrls.forEach(url => {
      const video = document.createElement("video");
      video.src = url;
      video.controls = true;
      video.classList.add("item", "video");
      container.appendChild(video);
    });
  }
  window.onload = function() {
    renderImages();
    renderVideos();
  };


