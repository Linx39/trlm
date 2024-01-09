const gallerySlider = document.querySelector(`.gallery__slider`);

const sliderList = document.querySelector(`.slider__list`);

const sliderBtnPrev = document.querySelector(`.slider__btn--prev`);
const sliderBtnNext = document.querySelector(`.slider__btn--next`);

const sliderItem = sliderList.children;

sliderBtnNext.addEventListener(`click`, () => {
  console.log(sliderItem);
})
