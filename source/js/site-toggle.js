import {deleteOverlay, addOverlay} from "./utils.js";

const MAIN_NAV_SITE_LIST_OPENED_CLASS = `main-nav--site-list-opened`;
const TOGGLE_OPENED_CLASS = `site-toggle--opened`;
const SITE_LIST_LINK_OPENED_CLASS = `site-list__link--opened`;
const PHONE_LINK_OPENED_CLASS = `phone-link--opened`;

const mainNav = document.querySelector(`.main-nav`);
const toggle = document.querySelector(`.main-nav__site-toggle`);
const siteLink = document.querySelectorAll(`.site-list__link`);
const phoneLink = document.querySelector(`.phone-link`);

export const handleSiteToogleClick = () => {
  toggle.addEventListener(`click`, () => {
    if (mainNav.classList.contains(MAIN_NAV_SITE_LIST_OPENED_CLASS)) {
      mainNav.classList.remove(MAIN_NAV_SITE_LIST_OPENED_CLASS);
      toggle.classList.remove(TOGGLE_OPENED_CLASS);
      siteLink.forEach((link) => link.classList.remove(SITE_LIST_LINK_OPENED_CLASS));
      phoneLink.classList.remove(PHONE_LINK_OPENED_CLASS);
      deleteOverlay();
      return;
    }

    mainNav.classList.add(MAIN_NAV_SITE_LIST_OPENED_CLASS);
    toggle.classList.add(TOGGLE_OPENED_CLASS);
    siteLink.forEach((link) => link.classList.add(SITE_LIST_LINK_OPENED_CLASS));
    phoneLink.classList.add(PHONE_LINK_OPENED_CLASS);
    addOverlay();
  }
  );
};
