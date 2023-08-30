const passwordBox = document.getElementById("password");
const length = 12;

const charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
  let password = "";
  for (let i = 0; i < length; i++) {
    let at = Math.floor(Math.random() * (charset.length + 1));
    password += charset.charAt(at);
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
