const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
textRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener("input", () => {
    textRef.style.fontSize = `${inputRef.value}px`;
});

// Код дублюється, але якщо не додати на 3 строку, то "початкове" відображення невірне.