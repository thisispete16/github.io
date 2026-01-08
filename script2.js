
// Source - https://stackoverflow.com/a
// Posted by Pakainfo
// Retrieved 2026-01-07, License - CC BY-SA 4.0

    // your-script.js

// An array of image URLs
const imageUrls = [
    './images/dailies1.jpg',
    './images/dailies2.jpg',
    './images/dailies3.jpg',
    // Add more image URLs here
];

// Function to generate a random index
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

// Function to set a random image source
function setRandomImage() {
    const imgElement = document.getElementById('randomImage');
    const randomIndex = getRandomIndex(imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
    imgElement.src = randomImageUrl;
}

// Call the function to set the initial random image
setRandomImage();
