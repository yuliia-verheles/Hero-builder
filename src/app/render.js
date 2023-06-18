import inventory from './inventory';
import hero from './hero';

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

  Object.entries(characteristics).forEach((entry) => {
    const p = document.createElement('p');
    p.innerText = `${entry[0]}: ${entry[1]}`;
    chrctrstcs.appendChild(p);
  });
};

export const fillStorage = () => {
  const storage = document.querySelector('.storage');

  inventory.forEach((item) => {
    if (item.isEquiped) return;

    const img = document.createElement('img');

    img.setAttribute('src', `../src/assets/${item.svg}`);
    img.setAttribute('draggable', true);
    img.dataset.id = item?.id;

    storage.appendChild(img);
  });
};

export const fillHero = () => {
  const items = document.querySelectorAll('.character .item');

  items.forEach((item) => {
    if (hero.equipment[item.classList[1]] === null) return;

    const img = document.createElement('img');

    img.setAttribute('src', `../src/assets/${inventory.find((el) => el.id === hero.equipment[item.classList[1]])?.svg}`);
    img.setAttribute('draggable', true);
    img.dataset.id = hero.equipment[item.classList[1]]?.id;

    item.appendChild(img);
  });
};

export default () => {
  applyCharacteristics();
  fillStorage();
  fillHero();
};
