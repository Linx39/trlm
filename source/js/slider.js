const sliderList = document.querySelector(`slider__list`);

const sliderBtnPrev = document.querySelector(`slider__btn--prev`);
const sliderBtnNext = document.querySelector(`slider__btn--next`);

const sliderItemCurrentClass = `slider__item--current`;

const sliderItem = sliderList.children;

sliderBtnNext.addEventListener(`click`, () => {
  console.log(sliderItem);
})
