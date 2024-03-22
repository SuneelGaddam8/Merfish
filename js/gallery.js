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
}