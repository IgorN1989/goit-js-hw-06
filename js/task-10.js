const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const divBoxesRef = document.querySelector('#boxes');
let size = 30;

createBtnRef.addEventListener("click", onCreateBtnClick);
destroyBtnRef.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  const quantity = inputRef.value;
  let boxes = [];
  
  for (let i = 1; i <= quantity; i += 1) {
    size += 10;
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxes.push(box);
  }
  divBoxesRef.append(...boxes);
}

function onDestroyBtnClick() {
  divBoxesRef.innerHTML = "";
  inputRef.value = ""; 
  size = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

