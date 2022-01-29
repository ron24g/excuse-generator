/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
// Returns a random integer from 0 to 9:
/*console.log(Math.floor(Math.random() * when.length));
console.log(action[0]);
console.log(what[1]);
console.log(when.length);
console.log(when[Math.floor(Math.random() * when.length)]);
console.log(action[Math.floor(Math.random() * action.length)]);*/

let generateExcuse = () => {
  var randomExcuse =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)];
  return randomExcuse;
};
console.log(generateExcuse());
document.getElementById("excuse").innerHTML = generateExcuse();
