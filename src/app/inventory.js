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
