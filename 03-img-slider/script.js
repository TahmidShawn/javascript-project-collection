const slides = document.getElementById("slides");

// cloning
const firstCloneSlide = slides.children[0].cloneNode(true);
const lastCloneSlide =
    slides.children[slides.children.length - 1].cloneNode(true);

slides.appendChild(firstCloneSlide);
slides.insertBefore(lastCloneSlide, slides.firstChild);

// var declaration
let currentIndex = 1;
let isAnimating = false;

slides.style.transform = `translateX(-${currentIndex * 100}%)`;

function showSlide(index) {
    if (isAnimating) return;
    isAnimating = true;
    slides.style.transition = "transform 0.5s ease-in-out";
    currentIndex = index;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}
function prevSlide() {
    showSlide(currentIndex - 1);
}

slides.addEventListener("transitionend", () => {
    const totalLength = slides.children.length;
    if (currentIndex === 0) {
        slides.style.transition = "none";
        currentIndex = totalLength - 2;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    if (currentIndex === totalLength - 1) {
        slides.style.transition = "none";
        currentIndex = 1;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    isAnimating = false;
});
