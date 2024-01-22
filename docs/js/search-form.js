const SEARCH_FORM_OPENED_CLASS = `main-nav--search-form-opened`;
const TOGGLE_OPENED_CLASS = `search-form--opened`;

const mainNav = document.querySelector(`.main-nav`);
const searchForm = document.querySelector(`.search-form`);
const toggle = searchForm.querySelector(`.search-form__toogle`);
const input = searchForm.querySelector(`.search-form__input`);

const activateSearchForm = () => {
  mainNav.classList.add(SEARCH_FORM_OPENED_CLASS);
  searchForm.classList.add(TOGGLE_OPENED_CLASS);
}

const resetSearchForm = () => {
  mainNav.classList.remove(SEARCH_FORM_OPENED_CLASS);
  searchForm.classList.remove(TOGGLE_OPENED_CLASS);
  searchForm.reset();
}

export const handleSearchForm = () => {
  toggle.addEventListener(`click`, () => {
    if (mainNav.classList.contains(SEARCH_FORM_OPENED_CLASS)) {
      resetSearchForm();
      return;
    }

    activateSearchForm();
  })

  input.addEventListener(`click`, () => {
    if (!mainNav.classList.contains(SEARCH_FORM_OPENED_CLASS)) {
      activateSearchForm();
    }
  })

  document.addEventListener(`click`, () => {
    const isFormActive =
      document.activeElement === searchForm ||
      [...searchForm.children].includes(document.activeElement);

    if (mainNav.classList.contains(SEARCH_FORM_OPENED_CLASS) && !isFormActive) {
      resetSearchForm();
    }
  });

  searchForm.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    resetSearchForm();
  })
}

