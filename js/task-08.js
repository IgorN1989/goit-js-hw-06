const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const formElements = evt.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email.length < 1 || password.length < 1) {
    alert('Всі поля повинні бути заповнені!');
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    formRef.reset();
  };
};