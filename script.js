const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".dot")];
let current = 0;
let timer;

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
}
function restartTimer() {
  clearInterval(timer);
  timer = setInterval(() => showSlide(current + 1), 5000);
}
document.getElementById("prev")?.addEventListener("click", () => { showSlide(current - 1); restartTimer(); });
document.getElementById("next")?.addEventListener("click", () => { showSlide(current + 1); restartTimer(); });
dots.forEach((dot, i) => dot.addEventListener("click", () => { showSlide(i); restartTimer(); }));
if (slides.length) restartTimer();
