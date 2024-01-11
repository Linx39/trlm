import {closeModal, openModal} from "./utils.js";

const SITE_LIST_OPENED_CLASS = `main-nav--site-list-opened`;
const TOGGLE_OPENED_CLASS = `site-toggle--opened`;

const mainNav = document.querySelector(`.main-nav`);
const toggle = document.querySelector(`.main-nav__site-toggle`);

export const handleSiteToogleClick = () => {
  toggle.addEventListener(`click`, () => {
    if (mainNav.classList.contains(SITE_LIST_OPENED_CLASS)) {
      mainNav.classList.remove(SITE_LIST_OPENED_CLASS);
      toggle.classList.remove(TOGGLE_OPENED_CLASS);
      closeModal();
      return;
    }

    mainNav.classList.add(SITE_LIST_OPENED_CLASS);
    toggle.classList.add(TOGGLE_OPENED_CLASS);
    openModal();
  }
  );
};
