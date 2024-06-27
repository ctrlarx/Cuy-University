let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

function generatePassword(panjang) {
  const lowerAlphabet = "abcefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = "!@#$%^&*(X)_+-={}[]';:/?.,<>~`";

  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = "";
  for (let index = 0; index < panjang; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
}

function getPassword() {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
}

function savePassword() {
  document.title = password.value;
  saveButton.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent(`password saya: ${document.title}`)
  );
  saveButton.setAttribute("download", "MyPasswordGeneratorLOG.txt");
}
