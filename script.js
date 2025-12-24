// Typewriter Intro
const text = "Passionate about building solutions using Python, Web Dev, and Machine Learning.";
let i = 0;
function typeWriter() {
  if(i < text.length){
    document.getElementById("intro-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
window.onload = typeWriter;

// Carousel
const carousel = document.querySelector('.projects-carousel');
const cards = document.querySelectorAll('.project-card');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
let currentIndex = 0;

function updateCarousel() {
  cards.forEach(card => card.classList.remove('active'));
  cards[currentIndex].classList.add('active');

  const cardWidth = cards[currentIndex].offsetWidth + 20; // include gap
  const offset = cardWidth * currentIndex;
  carousel.style.transform = `translateX(${-offset + (carousel.parentElement.offsetWidth - cardWidth)/2}px)`;
}

rightBtn.addEventListener('click', () => {
  if(currentIndex < cards.length - 1){
    currentIndex++;
    updateCarousel();
  }
});

leftBtn.addEventListener('click', () => {
  if(currentIndex > 0){
    currentIndex--;
    updateCarousel();
  }
});

window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);
