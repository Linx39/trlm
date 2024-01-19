import {handleSiteToogleClick} from "./site-toggle.js";
import {handleCatalogToogleClick} from "./catalog-toggle.js";
import {handleSliderButtonsClick} from "./slider.js";
import {handleOpenSearchToogleClick} from "./search-form__toogle.js";

handleSiteToogleClick();
handleCatalogToogleClick();

const CONTROLS_BTN_DISABLED_CLASS = `gallery-controls__btn--disabled`;

handleSliderButtonsClick(CONTROLS_BTN_DISABLED_CLASS);
handleOpenSearchToogleClick();
