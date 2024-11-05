// script.js

// Add initial product images
const productGallery = document.getElementById('productGallery');

function addProductImage() {
    const img = document.createElement('img');
    img.src = 'https://www.beyoung.in/mobile/images/locations/Plain-tshirt-mobile-view.jpg'; // Placeholder image, can be replaced with actual image URLs
    img.alt = 'Product Image';
    productGallery.appendChild(img);
}

function removeProductImage() {
    const images = productGallery.getElementsByTagName('img');
    if (images.length > 0) {
        productGallery.removeChild(images[images.length - 1]);
    } else {
        alert('No more images to remove!');
    }
}

// Email Validation
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    const email = emailInput.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
        event.preventDefault(); // Prevent form submission
    } else {
        emailError.style.display = 'none';
    }
});
