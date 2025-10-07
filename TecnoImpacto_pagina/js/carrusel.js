const carouselImages = document.querySelector('.carousel-images');
const slides = document.querySelectorAll('.carousel-images img, .carousel-images video'); 
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;
let autoPlayTimeout = null;

// Función para mostrar el slide actual
function updateCarousel() {
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Si había un autoplay programado, lo limpiamos
    if (autoPlayTimeout) {
        clearTimeout(autoPlayTimeout);
    }

    const currentSlide = slides[currentIndex];

    if (currentSlide.tagName === "VIDEO") {
        // Reinicia y reproduce el video
        currentSlide.currentTime = 0;
        currentSlide.play();

        // Cuando termine el video, pasa al siguiente
        currentSlide.onended = () => {
            goToNext();
        };
    } else {
        // Si es imagen, pasa al siguiente después de 3 segundos
        autoPlayTimeout = setTimeout(goToNext, 3000);
    }
}

// Ir al siguiente slide
function goToNext() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // vuelve al inicio
    }
    updateCarousel();
}

// Ir al slide anterior
function goToPrev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // va al final
    }
    updateCarousel();
}

// Botones manuales
nextButton.addEventListener('click', goToNext);
prevButton.addEventListener('click', goToPrev);

// Inicia el carrusel
updateCarousel();
