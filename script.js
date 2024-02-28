
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add your image URLs here
let currentIndex = 0;
const sliderImage = document.getElementById('sliderImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

function showImage(index) {
  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }
  sliderImage.src = images[index];
  currentIndex = index;
}

prevButton.addEventListener('click', () => {
  showImage(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  showImage(currentIndex + 1);
});


showImage(currentIndex);
