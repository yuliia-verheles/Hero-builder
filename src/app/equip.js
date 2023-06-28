import inventory from './inventory';
import hero from './hero';
import render from './render';
import { estimateItem } from './helper';

export const unequip = (id) => {
  const type = inventory.find((item) => item.id === id)?.type;

  hero.equipment[type] = null;

  inventory.forEach((item) => {
    if (item.id === id) item.isEquiped = false;
  });

  render();
};

export const equip = (id) => {
  const type = inventory.find((item) => item.id === id)?.type;

  if (hero.equipment[type]) unequip(hero.equipment[type]);

  hero.equipment[type] = id;

  inventory.forEach((item) => {
    if (item.id === id) item.isEquiped = true;
  });

  render();
};

export const unequipAll = () => {
  Object.keys(hero.equipment).forEach((type) => {
    if (hero.equipment[type] !== null) unequip(hero.equipment[type]);
  });

  render();
};

export const autoEquip = () => {
  Object.keys(hero.equipment)
    .forEach((type) => equip(inventory.filter((item) => item.type === type)
      .sort((a, b) => estimateItem(b) - estimateItem(a))[0].id));
};
