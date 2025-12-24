// ---------------------------
// 1. Smooth Scroll for Navigation
// ---------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});

// ---------------------------
// 2. Project Card Animation on Scroll
// ---------------------------
const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

// ---------------------------
// 3. Typewriter Effect for Intro Text
// ---------------------------
const text = "Passionate about building solutions using Python, Web Dev, and Machine Learning.";
let i = 0;
const speed = 50; // milliseconds

function typeWriter() {
  if(i < text.length){
    document.getElementById("intro-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

// ---------------------------
// 4. Dark/Light Mode Toggle (Optional)
// ---------------------------
const btn = document.getElementById('theme-toggle');
if(btn){
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}
