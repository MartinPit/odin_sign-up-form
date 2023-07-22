function onChange() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  if (password.value === confirmPassword.value) {
    confirmPassword.setCustomValidity("");

  } else {
    confirmPassword.setCustomValidity("Passwords do not match");
  }
}


function check() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");

  password.required = true;
  confirmPassword.required = true;
  firstName.required = true;
  lastName.required = true;
  email.required = true;
}
