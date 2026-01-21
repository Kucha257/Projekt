const track = document.querySelector('.Markislider-track');
const slides = document.querySelectorAll('.Markislider-track .slide');
const totalSlides = slides.length;

let index = 0;

function getSlidesInView() {
    const wrapper = document.querySelector('.Markislider-wrapper');
    const slideWidth = slides[0].offsetWidth + 10; // slajd + gap
    return Math.max(1, Math.floor(wrapper.offsetWidth / slideWidth));
}

function updateSlider() {
    const slideWidth = slides[0].offsetWidth + 10;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

// AUTO SLIDER
setInterval(() => {
    const slidesInView = getSlidesInView();

    if (index < totalSlides - slidesInView) {
        index++;
    } else {
        index = 0;
    }

    updateSlider();
}, 2000);

// poprawne przeliczenie po zmianie rozdzielczości
window.addEventListener('resize', () => {
    index = 0;
    updateSlider();
});
