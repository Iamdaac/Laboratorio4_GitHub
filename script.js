/*Codigo para carrusel - Funcionalidad 2*/
const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let imageIndex = 0;
const images = carouselImages.querySelectorAll('.carousel-image');
const totalImages = images.length;
const imageWidth = images[0].clientWidth;

function showImage(index) {
    carouselImages.style.transform = `translateX(-${index * imageWidth}px)`;
}

function prevImage() {
    imageIndex = (imageIndex - 1 + totalImages) % totalImages;
    showImage(imageIndex);
}

function nextImage() {
    imageIndex = (imageIndex + 1) % totalImages;
    showImage(imageIndex);
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);
/*Fin de codigo para carrusel - Funcionalidad 2*/