import {deleteOverlay, addOverlay} from "./utils.js";
import { resetProductList } from "./product-list.js";

const CATALOG_OPENED_CLASS = `main-nav--catalog-opened`;
const TOGGLE_OPENED_CLASS = `catalog-toggle--opened`;

const mainNav = document.querySelector(`.main-nav`);
const toggle = document.querySelector(`.catalog-toggle`);

export const handleCatalogToogleClick = () => {
  toggle.addEventListener(`click`, () => {
    if (mainNav.classList.contains(CATALOG_OPENED_CLASS)) {
      mainNav.classList.remove(CATALOG_OPENED_CLASS);
      toggle.classList.remove(TOGGLE_OPENED_CLASS);
      deleteOverlay();
      resetProductList();
      return;
    }

    mainNav.classList.add(CATALOG_OPENED_CLASS);
    toggle.classList.add(TOGGLE_OPENED_CLASS);
    addOverlay();
  });
};
