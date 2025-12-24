// 2. Project Card Animation + Glow on Scroll
// ---------------------------
const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      // Add glow effect when visible
      entry.target.style.boxShadow = "0 0 25px rgba(255,111,97,0.5)";
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
// 4. Dark/Light Mode Toggle
// ---------------------------
const btn = document.getElementById('theme-toggle');
if(btn){
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Optional: glow effect when toggled
    btn.style.boxShadow = document.body.classList.contains('dark-mode')
      ? "0 0 15px rgba(255,111,97,0.7)"
      : "0 0 15px rgba(0,170,255,0.7)";
  });
}

// ---------------------------
// 5. Nav Link Hover Glow
// ---------------------------
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.textShadow = "0 0 8px rgba(0,170,255,0.8)";
  });
  link.addEventListener('mouseleave', () => {
    link.style.textShadow = "none";
  });
});

// ---------------------------
// 6. Pulse Glow for Buttons & Links
// ---------------------------
const pulseElements = document.querySelectorAll('button, .project-card a');

pulseElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.boxShadow = "0 0 15px rgba(255,111,97,0.6)";
    el.style.transition = "box-shadow 0.3s ease";
  });
  el.addEventListener('mouseleave', () => {
    el.style.boxShadow = "none";
  });
});
