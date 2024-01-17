export const changeElementCurrent = (itemCurrentPrev, itemCurrentNext, itemCurrentClass) => {
  itemCurrentPrev.classList.remove(itemCurrentClass);
  itemCurrentNext.classList.add(itemCurrentClass);
}

const OVERLAY_CLASS = `overlay`;
const pageBody = document.querySelector(`.page__body`);

export const deleteOverlay = () => {
  pageBody.classList.remove(OVERLAY_CLASS);
}

export const addOverlay = () => {
  pageBody.classList.add(OVERLAY_CLASS);
}
