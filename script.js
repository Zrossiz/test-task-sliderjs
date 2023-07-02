const contentLine = document.getElementById("contentLine");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let rangeWidth = document.getElementById("rangeWidth");

let countSlides = 0;
let rangeOfWidth = 0;

const switchNextSlide = () => {
  if (countSlides === 1192) {
    return;
  }
  countSlides = countSlides + 298;
  rangeOfWidth = rangeOfWidth + 90;
  contentLine.style.marginLeft = `-${countSlides}px`;
  rangeWidth.style.width = `${rangeOfWidth}px`;
};

const switchPrevSlide = () => {
  if (!countSlides) {
    return;
  }
  countSlides = countSlides - 298;
  rangeOfWidth = rangeOfWidth - 90;
  contentLine.style.marginLeft = `-${countSlides}px`;
  rangeWidth.style.width = `${rangeOfWidth}px`;
};

if (countSlides <= 1192) {
  setInterval(switchNextSlide, 4000);
}

prevBtn.addEventListener("click", () => switchPrevSlide());
nextBtn.addEventListener("click", () => switchNextSlide());
