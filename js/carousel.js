// Carousel
const slides = document.querySelectorAll('.about-me-item');
const buttons = document.querySelectorAll('.slide-ctrl-container button');

let current = 0;
let next = 1;
let prev = slides.length - 1;

const update = () => {
  slides.forEach((slide) => {
    slide.classList.remove('active', 'prev', 'next');
  });
  slides[current].classList.add('active');
  slides[prev].classList.add('prev');
  slides[next].classList.add('next');
}

const goToNum = (number) => {
  current = number;
  next = current < slides.length - 1 ? current + 1 : 0;
  prev = current > 0 ? current - 1 : slides.length - 1;
  update();
};

const goToNext = () => current < slides.length - 1 ? goToNum(current + 1) : goToNum(0);
const goToPrev = () => current > 0 ? goToNum(current - 1) : goToNum(slides.length - 1);


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => i === 0 ? goToPrev() : goToNext());
}

update();

// Let's Chat button
document.getElementById('letsChat').addEventListener('click', () => goToNum(1));