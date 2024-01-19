const SEARCH_FORM_OPENED_CLASS = `main-nav--search-form-opened`;
const TOGGLE_OPENED_CLASS = `search-form--opened`;

const mainNav = document.querySelector(`.main-nav`);
const searchForm = document.querySelector(`.search-form`);
const toggle = document.querySelector(`.search-form__toogle`);

export const handleOpenSearchToogleClick = () => {
  toggle.addEventListener(`click`, () => {
    if (mainNav.classList.contains(SEARCH_FORM_OPENED_CLASS)) {
      mainNav.classList.remove(SEARCH_FORM_OPENED_CLASS);
      searchForm.classList.remove(TOGGLE_OPENED_CLASS);
      return;
    }

    mainNav.classList.add(SEARCH_FORM_OPENED_CLASS);
    searchForm.classList.add(TOGGLE_OPENED_CLASS);
  })
}

