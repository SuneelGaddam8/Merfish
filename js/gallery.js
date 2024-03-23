
let initialSize;

window.addEventListener('load', function() {
  const width = window.innerWidth;
  const element = document.getElementById('responsiveImg');
  const element2 = document.getElementById('responsiveImg2');
  const element3 = document.getElementById('responsiveImg3');
  const element4 = document.getElementById('responsiveImg4');

  if (width <= 1280) {
    element.classList.add('hidden');
    element2.classList.add('hidden');
    element3.classList.add('hidden');
    element4.classList.add('hidden');
    initialSize = 3;
  } else {
    initialSize = 4;
  }
});

window.addEventListener('resize', function() {
  const width = window.innerWidth;
  const element = document.getElementById('responsiveImg');
  const element2 = document.getElementById('responsiveImg2');
  const element3 = document.getElementById('responsiveImg3');
  const element4 = document.getElementById('responsiveImg4');

  if (width <= 1280) {
    element.classList.add('hidden');
    element2.classList.add('hidden');
    element3.classList.add('hidden');
    element4.classList.add('hidden');
    initialSize = 3;
  } else {
    element.classList.remove('hidden');
    element2.classList.remove('hidden');
    element3.classList.remove('hidden');
    element4.classList.remove('hidden');
    initialSize = 4;
  }
});

function toggleVisibility(imageContainer, toggleButton) {
  const images = imageContainer.querySelectorAll('img');
  for (let index = initialSize; index < images.length; index++) {
    images[index].classList.toggle('hidden');
  }

  toggleButton.textContent = toggleButton.textContent === 'Show All' ? 'Show Less' : 'Show All';
}

document.getElementById('toggleButton').addEventListener('click', function() {
  toggleVisibility(document.getElementById('clinicImageContainer'), this);
});

document.getElementById('toggle2').addEventListener('click', function() {
  toggleVisibility(document.getElementById('academicImageContainer'), this);
});

document.getElementById('toggle3').addEventListener('click', function() {
  toggleVisibility(document.getElementById('serviceImageContainer'), this);
});

document.getElementById('toggle4').addEventListener('click', function() {
  toggleVisibility(document.getElementById('researchImageContainer'), this);
});
