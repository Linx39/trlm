import {deleteOverlay, addOverlay} from "./utils.js";

const MAIN_NAV_SITE_LIST_OPENED_CLASS = `main-nav--site-list-opened`;
const TOGGLE_OPENED_CLASS = `site-toggle--opened`;
const SITE_LIST_OPENED_CLASS = `site-list--opened`;
const PHONE_LINK_OPENED_CLASS = `phone-link--opened`;
const OVERLAY_CLASS = `overlay__limit-width`;

const mainNav = document.querySelector(`.main-nav`);
const toggle = document.querySelector(`.main-nav__site-toggle`);
const siteList = document.querySelector(`.site-list`);
const phoneLink = document.querySelector(`.phone-link`);

export const handleSiteToogleClick = () => {
  toggle.addEventListener(`click`, () => {
    if (mainNav.classList.contains(MAIN_NAV_SITE_LIST_OPENED_CLASS)) {
      mainNav.classList.remove(MAIN_NAV_SITE_LIST_OPENED_CLASS);
      toggle.classList.remove(TOGGLE_OPENED_CLASS);
      siteList.classList.remove(SITE_LIST_OPENED_CLASS);
      phoneLink.classList.remove(PHONE_LINK_OPENED_CLASS);
      deleteOverlay(OVERLAY_CLASS);
      return;
    }

    mainNav.classList.add(MAIN_NAV_SITE_LIST_OPENED_CLASS);
    toggle.classList.add(TOGGLE_OPENED_CLASS);
    siteList.classList.add(SITE_LIST_OPENED_CLASS);
    phoneLink.classList.add(PHONE_LINK_OPENED_CLASS);
    addOverlay(OVERLAY_CLASS);
  });
};
