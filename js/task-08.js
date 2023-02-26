const form = document.querySelector('.login-form');
const newUser = {};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all fields of the form');
  } else {
    newUser.email = email.value;
    newUser.password = password.value;
    console.log(newUser);
  }

  event.currentTarget.reset();
}