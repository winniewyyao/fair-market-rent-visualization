// -------------------- SLIDE CONTROL --------------------
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const slideLabel = document.getElementById("slide-title");

// Titles for navigation
const slideTitles = [
  "Fair Market Rents Visualization",
  "Rental Costs Across the U.S.",
  "Rental Costs in CA",
  "Rental Costs in MO",
  "Household Income in CA and MO"
];

// Show the first slide initially
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
  slideLabel.textContent = slideTitles[index];
}

document.getElementById("prev-btn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Initialize first slide
showSlide(currentSlide);
