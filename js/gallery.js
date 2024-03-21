 window.onload = function() {
    showInitial('.gimage-container', 2);
    showInitial('.g-Acadamic-container', 2);
    showInitial('.g-community-container', 2);
    showInitial('.g-Research-container', 2);
  };

  window.onresize = function() {
    showInitial('.gimage-container', 2);
    showInitial('.g-Acadamic-container', 2);
    showInitial('.g-community-container', 2);
    showInitial('.g-Research-container', 2);
  };

  function showInitial(containerClass, count) {
    var container = document.querySelector(containerClass);
    var images = container.querySelectorAll('img');

    images.forEach(function(img, index) {
      if (window.innerWidth < 458 && index >= count) {
        img.style.display = 'none';
      } else if (window.innerWidth >= 458 && index >= count + 1) {
        img.style.display = 'none';
      } else {
        img.style.display = 'block';
      }
    });
  }

  function showAll(containerClass) {
    var container = document.querySelector(containerClass);
    var images = container.querySelectorAll('img');

    images.forEach(function(img) {
      img.style.display = 'block';
    });

    document.querySelectorAll('button'); {
      btn.style.display = 'none'; // Hide all "Show All" buttons after one is clicked
    };
  }