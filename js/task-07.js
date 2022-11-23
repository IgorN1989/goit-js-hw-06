const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
fontSize();

inputRef.addEventListener("input", fontSize);

function fontSize() {
    textRef.style.fontSize = `${inputRef.value}px`;
}
