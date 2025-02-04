function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  if (includeLowercase) allowedChars += lowercaseChars;
  if (includeUppercase) allowedChars += uppercaseChars;
  if (includeNumbers) allowedChars += numberChars;
  if (includeSymbols) allowedChars += symbolChars;

  if (allowedChars.length === 0) {
      return "⚠️ Select at least one option!";
  }

  for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
  }

  return password;
}

function generateAndDisplayPassword() {
  const length = parseInt(document.getElementById("passwordLength").value);
  const includeLowercase = document.getElementById("includeLowercase").checked;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;

  const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
  document.getElementById("passwordOutput").textContent = password;
}

function copyPassword() {
  const passwordText = document.getElementById("passwordOutput").textContent;
  if (passwordText !== "Click Generate 🔑") {
      navigator.clipboard.writeText(passwordText);
      alert("Password copied to clipboard!");
  }
}