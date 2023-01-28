const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1 = document.querySelector(".password1");
let password2 = document.querySelector(".password2");

let copyPassword2 = document.querySelector(".copy-content2");

let inputLenght = 15;

let inputValue = document.querySelector("#number");
inputValue.value = 15;

function pwLenght() {
  inputLenght = document.querySelector(".userInput").value;
}

function generatePw() {
  password1.textContent = "";
  password2.textContent = "";
  if (inputLenght >= 4 && inputLenght <= 15) {
    for (let i = 0; i < inputLenght; i++) {
      password1.textContent += characters[Math.floor(Math.random() * characters.length)];
      password2.textContent += characters[Math.floor(Math.random() * characters.length)];
    }
  } else {
    password1.textContent = "Choose between";
    password2.textContent = "4 - 15 Numbers";
  }
}

generatePw();
password1.textContent = "";
password2.textContent = "";
