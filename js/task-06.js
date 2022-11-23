const inputRef = document.querySelector('#validation-input');
const dataLengthRef = Number(inputRef.getAttribute('data-length'));

inputRef.addEventListener('blur', onInputCheck);

function onInputCheck(evt) {
  if (evt.currentTarget.value.length === dataLengthRef) {
    evt.currentTarget.classList.add('valid');
    evt.currentTarget.classList.remove('invalid');
  } else {
    evt.currentTarget.classList.add('invalid');
    evt.currentTarget.classlist.remove('valid');
  }
}