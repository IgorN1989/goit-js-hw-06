const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  colorSpan: document.querySelector('.color'),
};

refs.button.addEventListener('click', () => {
  refs.body.style.backgroundColor = `${getRandomHexColor()}`;
  refs.colorSpan.textContent = `${getRandomHexColor()}`;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}