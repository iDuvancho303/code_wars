'use strict'
/* Kata 8 */

/* complete the solution so that it reverses the string passed into it. */

function solution(str){
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

solution("world");

/* Make a simple function called greet that returns the most-famous "hello world!". */

function greet() {
  return "Hello World!";
}
