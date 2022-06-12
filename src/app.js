/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector(".number").innerHTML = randomizeNumber();
  const randomSuitForTopAndBottom = randomizeSuit();
  document.querySelector(".top-suit").innerHTML = randomSuitForTopAndBottom;
  document.querySelector(".bottom-suit").innerHTML = randomSuitForTopAndBottom;
};

function randomizeNumber() {
  var numberArray = [
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
    "K",
    "A"
  ];
  var randomIndex = Math.floor(Math.random() * numberArray.length);

  return numberArray[randomIndex];
}

function randomizeSuit() {
  var suitArray = ["&spades;", "&hearts;", "&clubs;", "&diams;"];
  var randomSuit = Math.floor(Math.random() * suitArray.length);

  if (
    suitArray[randomSuit] == "&hearts;" ||
    suitArray[randomSuit] == "&diams;"
  ) {
    console.log("FOUND HEART OR DIAMOND");
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
  }

  return suitArray[randomSuit];
}
