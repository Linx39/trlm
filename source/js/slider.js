import {changeElementCurrent} from "./utils.js";

const Step = {
  NEXT: 1,
  PREV: -1,
}
const SLIDER_ITEM_CURRENT_CLASS = `slider__item--current`;

const slider = document.querySelector(`.slider`);
const sliderBtnPrev = slider.querySelector(`.slider__btn--prev`);
const sliderBtnNext = slider.querySelector(`.slider__btn--next`);
const sliderItemsArray = [...slider.querySelectorAll(`.slider__item`)];


const changeSlider = (step, controls_btn_disabled_class) => {
  const itemCurrent = slider.querySelector(`.${SLIDER_ITEM_CURRENT_CLASS}`);
  const indexCurrent = sliderItemsArray.findIndex((item) => item === itemCurrent);
  const indexNew = indexCurrent + step;

  if(indexNew < 0 || indexNew === sliderItemsArray.length) {
    return;
  }

  changeElementCurrent(itemCurrent, sliderItemsArray[indexNew], SLIDER_ITEM_CURRENT_CLASS);

  if (indexNew > 0 || indexNew < sliderItemsArray.length - 1) {
    sliderBtnPrev.classList.remove(controls_btn_disabled_class);
    sliderBtnNext.classList.remove(controls_btn_disabled_class);
  }

  if (indexNew === 0) {
    sliderBtnPrev.classList.add(controls_btn_disabled_class);
  }

  if (indexNew === sliderItemsArray.length - 1) {
    sliderBtnNext.classList.add(controls_btn_disabled_class);
  }
}

export const handleSliderButtonClick = (controls_btn_disabled_class) => {
  sliderBtnNext.addEventListener(`click`, () => {
    changeSlider(Step.NEXT, controls_btn_disabled_class);
  })

  sliderBtnPrev.addEventListener(`click`, () => {
    changeSlider(Step.PREV, controls_btn_disabled_class);
  })
}
