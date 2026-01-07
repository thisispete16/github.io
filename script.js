// List of JPEG images
const images = [
  "images/dailies (1).jpg",
  "images/dailies (2).jpg",
  "images/dailies (3).jpg",
  "images/dailies (4).jpg"
];

// Pick a random image
const randomIndex = Math.floor(Math.random() * images.length);
const selectedImage = images[randomIndex];

// Set image source
const imgElement = document.getElementById("randomImage");
imgElement.src = selectedImage;
