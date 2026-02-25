let slideIndex = 0;

function mudarSlide(direcao) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  slideIndex = (slideIndex + direcao + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

