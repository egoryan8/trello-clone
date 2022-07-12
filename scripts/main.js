const lists = document.querySelectorAll('.list');
const button = document.querySelector('.button');

function addTask() {
  const btn = document.querySelector('.add__btn');
  const addBtn = document.querySelector('.add__item-btn');
  const cancelBtn = document.querySelector('.cancel__item-btn');
  const textarea = document.querySelector('.textarea');
  const form = document.querySelector('.form');

  let value;
  btn.addEventListener('click', () => {
    form.style.display = 'block';
    btn.style.display = 'none';
    addBtn.style.display = 'none';

    textarea.addEventListener('input', (evt) => {
      value = evt.target.value;
      if (value) {
        addBtn.style.display = 'block';
      } else {
        addBtn.style.display = 'none';
      }
    });
  });

  cancelBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    textarea.value = '';
    value = '';
    form.style.display = 'none';
    btn.style.display = 'flex';
  });

  addBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const newItem = document.createElement('div');
    newItem.classList.add('list__item');
    newItem.draggable = true;
    newItem.textContent = value;
    lists[0].append(newItem);

    form.style.display = 'none';
    textarea.value = '';
    value = '';
    form.style.display = 'none';
    btn.style.display = 'flex';
  });
}

addTask();

function addBoard() {
  const boards = document.querySelector('.boards');
  const board = document.createElement('div');
  board.classList.add('boards__item');
  board.innerHTML = `
    <span class="title" contenteditable="true">Введите название</span>
    <div class="list"></div>`;
  boards.append(board);
}

button.addEventListener('click', addBoard);
