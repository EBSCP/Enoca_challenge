const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const slides = document.querySelectorAll(".carousel-slide");

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// Automatically advance to the next slide (optional)
function autoAdvance() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// setInterval(autoAdvance, 5000); // Uncomment this line to enable auto-advancing
