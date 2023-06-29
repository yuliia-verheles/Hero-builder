import inventory from './inventory';
import hero from './hero';
import { getColor } from './helper';

const onHoverItem = (event) => {
  const item = document.querySelector(`[data-id="${event.target.dataset.id}"]`);
  const tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = event.target.dataset.tooltip;
  tooltipElem.style.left = `${event.clientX}px`;
  tooltipElem.style.top = `${event.clientY}px`;

  item.after(tooltipElem);
};

const onHoverItemLeave = () => {
  const tooltipElem = document.querySelector('.tooltip');
  if (tooltipElem) tooltipElem.remove();
};

export const applyCharacteristics = () => {
  const characteristics = {
    HP: 0,
    Defense: 0,
    ATK: 0,
    'Crit Rate': 0,
  };

  inventory.forEach((item) => {
    if (!item.isEquiped) return;

    characteristics.HP += item.gearAttributes.HP;
    characteristics.Defense += item.gearAttributes.Defense;
    characteristics.ATK += item.gearAttributes.ATK;
    characteristics['Crit Rate'] += item.gearAttributes['Crit Rate'];
  });

  const chrctrstcs = document.querySelector('.characteristics');

  while (chrctrstcs.firstChild) {
    chrctrstcs.removeChild(chrctrstcs.firstChild);
  }

  Object.entries(characteristics).forEach((entry) => {
    const p = document.createElement('p');
    p.innerText = `${entry[0]}: ${entry[1]}`;
    chrctrstcs.appendChild(p);
  });
};

export const fillStorage = () => {
  const storage = document.querySelector('.storage');

  while (storage.firstChild) {
    storage.removeChild(storage.firstChild);
  }

  inventory.forEach((item) => {
    if (item.isEquiped) return;

    const img = document.createElement('img');

    img.setAttribute('src', `../src/assets/${item.svg}`);
    img.setAttribute('draggable', true);
    img.style.border = `4px solid ${getColor(item.class)}`;
    img.dataset.id = item?.id;
    img.dataset.tooltip = Object.entries(item.gearAttributes).map(([key, value]) => `${key}: ${value}<br>`).join('');

    img.addEventListener('mouseenter', onHoverItem);
    img.addEventListener('mouseout', onHoverItemLeave);

    storage.appendChild(img);
  });
};

export const fillHero = () => {
  const items = document.querySelectorAll('.character .item');

  items.forEach((slot) => {
    slot.firstChild && slot.removeChild(slot.firstChild);

    if (hero.equipment[slot.classList[1]] === null) return;

    const img = document.createElement('img');
    const item = inventory.find((el) => el.id === hero.equipment[slot.classList[1]]);

    img.setAttribute('src', `../src/assets/${item.svg}`);
    img.setAttribute('draggable', true);
    img.style.border = `2px solid ${getColor(item.class)}`;
    img.dataset.id = hero.equipment[slot.classList[1]];
    img.dataset.tooltip = Object.entries(item.gearAttributes).map(([key, value]) => `${key}: ${value}<br>`).join('');

    img.addEventListener('mouseenter', onHoverItem);
    img.addEventListener('mouseout', onHoverItemLeave);

    slot.appendChild(img);
  });
};

export default () => {
  applyCharacteristics();
  fillStorage();
  fillHero();
};
