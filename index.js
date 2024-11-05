// Меню навигации
document.addEventListener("DOMContentLoaded", () => {
  let currentUrl = window.location.href;
  let menuItems = document.querySelectorAll(".menu a");

  menuItems.forEach(function (item) {
    if (item.href === currentUrl) {
      item.classList.add("selected");
    }
  });
});

// Слайдер с картинками
document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  function showSlide(index) {
    if (index >= totalSlides) {
      currentSlide = totalSlides - 1;
    } else if (index < 0) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;

    updateBtnStyles();
  }

  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      showSlide(currentSlide + 1);
    } else {
      showSlide(0);
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      showSlide(currentSlide - 1);
    }
  }

  function updateBtnStyles() {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    prevButton.style.opacity = currentSlide === 0 ? "0.5" : "1";
    prevButton.style.cursor = currentSlide === 0 ? "not-allowed" : "pointer";

    nextButton.style.opacity = currentSlide === totalSlides - 1 ? "0.5" : "1";
    nextButton.style.cursor =
      currentSlide === totalSlides - 1 ? "not-allowed" : "pointer";
  }

  showSlide(currentSlide);

  setInterval(() => {
    nextSlide();
  }, 3000);

  document.querySelector(".prev").addEventListener("click", prevSlide);
  document.querySelector(".next").addEventListener("click", nextSlide);
});
