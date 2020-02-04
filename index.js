const email = document.getElementById('email');
const name = document.getElementById('name');
const pass = document.getElementById('password');
const pass_confirm = document.getElementById('password_confirm');
const submit = document.getElementById('submit_all');
const form = document.getElementById('myForm');

const validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submit.addEventListener('click', (e) => {
    e.preventDefault();
    submitAll(email, name, pass, pass_confirm);
})

const submitAll = (email, name, password, con_password) => {
  if (name.value.length <= 5) {
      alert('name is too short please choose another name');
  } else if (password.value.length <= 8 || password.value.length >= 16) {
    alert('password must be between 8 and 16 characters');
  } else if ( password.value !== con_password.value) {
      alert ('password and confirm password field must be the same')
  } else if (!email.value.match(validEmailFormat)) {
    alert('Invalid email');
  } else {
    alert('Registration successful, Please login to continue');
    clearForm(form);
  }
}

const clearForm = (form) => {
    form.reset();
}