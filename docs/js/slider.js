import {changeElementCurrent} from "./utils.js";

const Step = {
  NEXT: 1,
  PREV: -1,
}
const ITEM_CURRENT_CLASS = `slider__item--current`;

const slider = document.querySelector(`.slider`);
const btnPrev = slider.querySelector(`.slider__btn--prev`);
const btnNext = slider.querySelector(`.slider__btn--next`);
const itemsArray = [...slider.querySelectorAll(`.slider__item`)];


const changeSlider = (step, btn_disabled_class) => {
  const itemCurrent = slider.querySelector(`.${ITEM_CURRENT_CLASS}`);
  const indexCurrent = itemsArray.findIndex((item) => item === itemCurrent);
  const indexNew = indexCurrent + step;

  if(indexNew < 0 || indexNew === itemsArray.length) {
    return;
  }

  changeElementCurrent(itemCurrent, itemsArray[indexNew], ITEM_CURRENT_CLASS);

  if (indexNew > 0 || indexNew < itemsArray.length - 1) {
    btnPrev.classList.remove(btn_disabled_class);
    btnNext.classList.remove(btn_disabled_class);
  }

  if (indexNew === 0) {
    btnPrev.classList.add(btn_disabled_class);
  }

  if (indexNew === itemsArray.length - 1) {
    btnNext.classList.add(btn_disabled_class);
  }
}

export const handleSliderButtonsClick = (btn_disabled_class) => {
  btnNext.addEventListener(`click`, () => {
    changeSlider(Step.NEXT, btn_disabled_class);
  })

  btnPrev.addEventListener(`click`, () => {
    changeSlider(Step.PREV, btn_disabled_class);
  })
}
