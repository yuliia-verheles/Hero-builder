import {
  // eslint-disable-next-line no-unused-vars
  autoEquip, equip, unequip, unequipAll,
} from './equip';
import render, { fillStorage } from './render';
import { TOTAL_PAGES, page, updatePage } from './inventory';

render();

document.querySelector('.equip').addEventListener('click', autoEquip);
document.querySelector('.unequip').addEventListener('click', unequipAll);

document.querySelector('.inventoryNav .start').addEventListener('click', () => { updatePage(1); fillStorage(); });
document.querySelector('.inventoryNav .previous').addEventListener('click', () => { updatePage(page - 1); fillStorage(); });
document.querySelector('.inventoryNav .next').addEventListener('click', () => { updatePage(page + 1); fillStorage(); });
document.querySelector('.inventoryNav .end').addEventListener('click', () => { updatePage(TOTAL_PAGES); fillStorage(); });

// equip(11);
// unequip();
// autoEquip();
// unequipAll();

// autoEquip();

// const draggableImages = document.querySelectorAll('.inventory .storage img');
// const storage = document.querySelector('.inventory .storage');
// // const droppableArea = document.querySelectorAll('.hero .character .item');

// console.log(draggableImages);

// const onDragStart = (event) => {
//   console.log(event.target);
//   equipment(id)
// };

// storage.addEventListener('dragstart', (event) => {
//   if (event.target.tagName !== 'IMG') return;
//   onDragStart(event);
// });

// Array.from(draggableImages).map((el) => el.addEventListener('dragstart', onDragStart));
// droppableArea.addEventListener('dragover', dragOver);
// droppableArea.addEventListener('drop', drop);

// equip(id) => {
//   smotka = StorageManager.find(id)
//   if Heroooo[smotka.type] {
//     unEquip(Heroooo[smotka.type].id)
//   }

//   Herro[smotka.type] = smotka.id
//   smotka.status = !smotka.status
//   rerenderApp();
// }
