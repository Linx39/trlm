import {closeModal, openModal} from "./utils.js";

const SITE_LIST_OPENED_CLASS = `main-nav--site-list-opened`;


const mainNav = document.querySelector(`.main-nav`);
const siteMenuToggle = document.querySelector(`.main-nav__site-menu-toggle`);

export const handleSiteMenuToogleClick = () => {
  siteMenuToggle.addEventListener(`click`, () => {
    if (mainNav.classList.contains(SITE_LIST_OPENED_CLASS)) {
      mainNav.classList.remove(SITE_LIST_OPENED_CLASS);
      closeModal();
      return;
    }

    mainNav.classList.add(SITE_LIST_OPENED_CLASS);
    openModal();
  }
  );
};
