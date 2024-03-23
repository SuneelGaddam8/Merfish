let initialSize;
const element = document.getElementById('responsiveImg');
  const element2 = document.getElementById('responsiveImg2');
  const element3 = document.getElementById('responsiveImg3');
  const element4 = document.getElementById('responsiveImg4');

const width=window.innerWidth;

window.addEventListener('load', function() {
  if (width <= 1280) {
    element.classList.add('hidden');
    element2.classList.add('hidden');
    element3.classList.add('hidden');

    element4.classList.add('hidden');


    initialSize=3;
  }
  else initialSize=4
});

// Additionally, you might want to listen for window resize events to update the class dynamically
window.addEventListener('resize', function() {
  if (width<= 1280) {
    element.classList.add('hidden');
    element2.classList.add('hidden');
    element3.classList.add('hidden');
    element4.classList.add('hidden');
    initialSize=3;
  } else {
    element.classList.remove('hidden');
    element2.classList.remove('hidden');
    element3.classList.remove('hidden');
    element4.classList.remove('hidden');
    initialSize=4;
  }
});


function showAll() {
  const imageContainer = document.getElementById('clinicImageContainer');
const toggleButton = document.getElementById('toggleButton');
const images = imageContainer.querySelectorAll('img');

toggleButton.addEventListener('click', function() {
  for (let index = initialSize; index < images.length; index++){
    images[index].classList.toggle('hidden');
   
  }

  if (toggleButton.textContent === 'Show All') {
    toggleButton.textContent = 'Show Less';
  } else {
    toggleButton.textContent = 'Show All';
  }
});
}

function showAllAcademics() {
  const imageContainer = document.getElementById('academicImageContainer');
const toggleButton = document.getElementById('toggle2');
const images = imageContainer.querySelectorAll('img');

toggleButton.addEventListener('click', function() {
  for (let index = initialSize; index < images.length; index++){
    images[index].classList.toggle('hidden');
   
  }

  if (toggleButton.textContent === 'Show All') {
    toggleButton.textContent = 'Show Less';
  } else {
    toggleButton.textContent = 'Show All';
  }
});
}

function showAllServices() {
  const imageContainer = document.getElementById('serviceImageContainer');
const toggleButton = document.getElementById('toggle3');
const images = imageContainer.querySelectorAll('img');

toggleButton.addEventListener('click', function() {
  for (let index = initialSize; index < images.length; index++){
    images[index].classList.toggle('hidden');
   
  }

  if (toggleButton.textContent === 'Show All') {
    toggleButton.textContent = 'Show Less';
  } else {
    toggleButton.textContent = 'Show All';
  }
});
}

function showAllResearch() {
  const imageContainer = document.getElementById('researchImageContainer');
const toggleButton = document.getElementById('toggle4');
const images = imageContainer.querySelectorAll('img');

toggleButton.addEventListener('click', function() {
  for (let index = initialSize; index < images.length; index++){
    images[index].classList.toggle('hidden');
   
  }

  if (toggleButton.textContent === 'Show All') {
    toggleButton.textContent = 'Show Less';
  } else {
    toggleButton.textContent = 'Show All';
  }
});
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