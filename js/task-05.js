const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInput);

function onInput(evt) {
    if (evt.currentTarget.value.length > 0) {
        outputRef.textContent = evt.currentTarget.value;
    } else {
        outputRef.textContent = "Anonymous";
    }
};