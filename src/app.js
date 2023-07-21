import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const randomSuite = generateRandomSuite();
  const randomNumber = generateRandomNumber();
  document.querySelector(".card").classList.add(generateRandomNumber());
  document.querySelector(".top-suite").innerHTML = randomSuite;
  document.querySelector(".bottom-suite").innerHTML = randomSuite;
  document.querySelector(".number").innerHTML = randomNumber;
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  return numbers[indexNumbers];
};

let generateRandomSuite = () => {
  var suite = ["♦", "♥", "♠", "♣"];
  let indexSuite = Math.floor(Math.random() * suite.length);
  return suite[indexSuite];
};
