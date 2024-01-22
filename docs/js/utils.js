export const changeElementCurrent = (itemCurrentPrev, itemCurrentNext, itemCurrentClass) => {
  itemCurrentPrev.classList.remove(itemCurrentClass);
  itemCurrentNext.classList.add(itemCurrentClass);
}

const OVERLAY_CLASS = `overlay`;

const pageBody = document.querySelector(`.page__body`);

export const deleteOverlay = (overlayClass) => {
  pageBody.classList.remove(OVERLAY_CLASS);

  if (overlayClass) {
    pageBody.classList.remove(overlayClass);
  }
}

export const addOverlay = (overlayClass) => {
  pageBody.classList.add(OVERLAY_CLASS);
  
  if (overlayClass) {
    pageBody.classList.add(overlayClass);
  }
}
