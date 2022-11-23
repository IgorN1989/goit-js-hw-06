let counterValue = 0;

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

decrementBtnRef.addEventListener("click", onDecrementBtnClick);
incrementBtnRef.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
    counterValue -= 1;
    onOutputFromInput();
}

function onIncrementBtnClick() {
    counterValue += 1;
    onOutputFromInput();
}

function onOutputFromInput() {
    valueRef.textContent = counterValue;
}