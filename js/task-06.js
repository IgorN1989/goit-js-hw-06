const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputCheck);

function onInputCheck(evt) {
    if (evt.currentTarget.value.length === 6) {
        evt.currentTarget.classList.add("valid");
        evt.currentTarget.classList.remove("invalid");
    } else {
        evt.currentTarget.classList.add("invalid");
    }
}
