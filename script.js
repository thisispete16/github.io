// List of JPEG images
const images = [
  "/images/dailies1.jpg",
  "/images/dailies2.jpg",
  "/images/dailies3.jpg",
  "/images/dailies4.jpg"
];

// Pick a random image
const randomIndex = Math.floor(Math.random() * images.length);
const selectedImage = images[randomIndex];

// Set image source
const imgElement = document.getElementById("randomImage");
imgElement.src = selectedImage;
