export const changeElementCurrent = (itemCurrentPrev, itemCurrentNext, itemCurrentClass) => {
  itemCurrentPrev.classList.remove(itemCurrentClass);
  itemCurrentNext.classList.add(itemCurrentClass);
}

const PAGE_BODY_MODAL = `page__body--modal`;
const pageBody = document.querySelector(`.page__body`);

export const closeModal = () => {
  pageBody.classList.remove(PAGE_BODY_MODAL);
}

export const openModal = () => {
  pageBody.classList.add(PAGE_BODY_MODAL);
}
