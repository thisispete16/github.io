
// Source - https://stackoverflow.com/a
// Posted by Pakainfo
// Retrieved 2026-01-07, License - CC BY-SA 4.0

    // your-script.js

// An array of image URLs
const imageUrls = [
    'images/dailies1.jpg',
    'images/dailies2.jpg',
    'images/dailies3.jpg',
    'images/dailies4.jpg',
'images/dailies5.jpg',
'images/dailies6.jpg',
'images/dailies7.jpg',
'images/dailies8.jpg',
'images/dailies9.jpg',
'images/dailies10.jpg',
    'images/dailies11.jpg',
    'images/dailies12.jpg',
    'images/dailies13.jpg',
    'images/dailies14.jpg',
    'images/dailies15.jpg',
    'images/dailies16.jpg',
    'images/dailies17.jpg',
    'images/dailies18.jpg',
    'images/dailies19.jpg',
    'images/dailies20.jpg',
    
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
