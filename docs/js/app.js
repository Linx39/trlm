import {handleSiteToogleClick} from "./site-toggle.js";
import {handleCatalogToogleClick} from "./catalog-toggle.js";
import {handleProductListItemsClick} from "./product-list.js";
import {handleSliderButtonsClick} from "./slider.js";
import {handleSearchForm} from "./search-form.js";

handleSiteToogleClick();
handleCatalogToogleClick();
handleProductListItemsClick();

const CONTROLS_BTN_DISABLED_CLASS = `gallery-controls__btn--disabled`;

handleSliderButtonsClick(CONTROLS_BTN_DISABLED_CLASS);
handleSearchForm();
