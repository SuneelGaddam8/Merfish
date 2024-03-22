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

 

  function showAll(containerClass, button) {
    var container = document.querySelector(containerClass);
    var images = container.querySelectorAll('img');

    var originalDisplay = []; // Array to store original display status of each image

    images.forEach(function(img) {
        originalDisplay.push(img.style.display); // Store original display status
        img.style.display = 'block'; // Show all images
    });

    button.textContent = 'Show Less';

    button.setAttribute('onclick', `showLess('${containerClass}', this, ${JSON.stringify(originalDisplay)})`); // Set onclick attribute to call showLess function
}

function showLess(containerClass, button, originalDisplay) {
    var container = document.querySelector(containerClass);
    var images = container.querySelectorAll('img');

    images.forEach(function(img, index) {
        img.style.display = originalDisplay[index]; // Restore original display status
    });

    button.textContent = 'Show All';

    button.setAttribute('onclick', `showAll('${containerClass}', this)`); // Set onclick attribute to call showAll function
}