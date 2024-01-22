const ITEM_CURRENT_CLASS = `products-list__item-current`;

const items = document.querySelectorAll(`.products-list__item`);

export const resetProductList = () => {
  const itemCurrent = document.querySelector(`.${ITEM_CURRENT_CLASS}`);
  
  if(itemCurrent) {
    itemCurrent.classList.remove(ITEM_CURRENT_CLASS);
  }
}

export const handleProductListItemsClick = () => {
  items.forEach((item) => item.addEventListener(`click`, () => {
    const itemCurrent = document.querySelector(`.${ITEM_CURRENT_CLASS}`);

    if (item.classList.contains(ITEM_CURRENT_CLASS)) {
      item.classList.remove(ITEM_CURRENT_CLASS);
      return;
    }

    item.classList.add(ITEM_CURRENT_CLASS);

    if(itemCurrent) {
      itemCurrent.classList.remove(ITEM_CURRENT_CLASS);
    }
  }))
}
