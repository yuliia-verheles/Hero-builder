import data from '../../data.json';

export const inventory = JSON.parse(JSON.stringify(data));
export const getItems = () => inventory.filter((item) => !item.isEquiped);

// eslint-disable-next-line import/no-mutable-exports
export let page = 1;
export const IPP = 16;

// eslint-disable-next-line no-unsafe-optional-chaining
export const TOTAL_PAGES = Math.ceil(getItems()?.length / IPP);

export const updatePage = (newPage) => {
  // eslint-disable-next-line no-nested-ternary
  page = newPage > TOTAL_PAGES ? TOTAL_PAGES : newPage < 1 ? 1 : newPage;
};

const startBtn = document.querySelector('.inventoryNav .start');
const previousBtn = document.querySelector('.inventoryNav .previous');
const nextBtn = document.querySelector('.inventoryNav .next');
const endBtn = document.querySelector('.inventoryNav .end');

export const navBtnStates = () => {
  if (TOTAL_PAGES === 1) {
    startBtn.setAttribute('disabled', 'disabled');
    previousBtn.setAttribute('disabled', 'disabled');
    nextBtn.setAttribute('disabled', 'disabled');
    endBtn.setAttribute('disabled', 'disabled');
  } else if (page === 1) {
    startBtn.setAttribute('disabled', 'disabled');
    previousBtn.setAttribute('disabled', 'disabled');
    nextBtn.removeAttribute('disabled');
    endBtn.removeAttribute('disabled');
  } else if (page === TOTAL_PAGES) {
    startBtn.removeAttribute('disabled');
    previousBtn.removeAttribute('disabled');
    nextBtn.setAttribute('disabled', 'disabled');
    endBtn.setAttribute('disabled', 'disabled');
  } else {
    startBtn.removeAttribute('disabled');
    previousBtn.removeAttribute('disabled');
    nextBtn.removeAttribute('disabled');
    endBtn.removeAttribute('disabled');
  }
};
