import {
  // eslint-disable-next-line no-unused-vars
  autoEquip, equip, unequip, unequipAll,
} from './equip';
import render from './render';

render();// render(); render(); render();

document.querySelector('.equip').addEventListener('click', autoEquip);
document.querySelector('.unequip').addEventListener('click', unequipAll);

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
