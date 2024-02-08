"use strict";

function conditional(size, limit) {
  // add your code here
  //Complete the 'conditional' function in index.js so that it returns the string 'ok' when the 'size' argument is less than the 'limit'. It should return the string 'ABORT TOO LARGE!' in all other cases.
  if (size < limit) {
    return "ok";
  }
  return "ABORT TOO LARGE!";
}

function sum(arr) {
  let result = 0;
  // add your code here
  //Complete the 'sum' function so that it adds all the numbers passed to it in an array and returns the sum.
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

// add your other functions here...
//Create a function called 'deepThought'. It should always return 42.
function deepThought() {
  return 42;
}

//Create a function called 'argVal'. It should accept one argument and return the value of that argument.
function argVal(arg) {
  return arg;
}

//Create a function called 'howLong'. It should accept one argument that is an array and return how long that array is.
function howLong(arr) {
  return arr.length;
}

//Create a function called 'numberwang'. It should accept one argument 'limit', and return the sum of all the whole numbers less than and equal to limit. So, numberwang(5) would calulate 1+2+3+4+5, which is 15.
function numberwang(limit) {
  return limit > 0 ? (limit * (limit + 1)) / 2 : 0;
}

//Create an isString function that accepts a parameter and returns true if that parameter is a string.
function isString(param) {
  return typeof param === "string";
}

//Create an 'isEmpty' function that accepts a string and returns true if that string does not have at least one character in it (i.e. its length is 0).
function isEmpty(str) {
  return str.length === 0;
}

//Create a 'longerThan' function that accepts two parameters: a candidate string for testing and a number 'n'. The function should return true if the candidate is longer than 'n' characters.
function longerThan(candidate, n) {
  return candidate.length > n;
}

//Create a longerThanButShorterThan function that accepts three parameters: a string, a number n, and a number m, and returns true if that string is longer than n but shorter than m.
function longerThanButShorterThan(str, n, m) {
  return str.length > n && str.length < m;
}

//Create a function countShorterThan that accepts an array of strings and a number n and returns a count of how many of the strings are shorter than n characters.
function countShorterThan(arr, n) {
  // let count = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].length < n) {
  //     count++;
  //   }
  // }
  // return count;
  return arr.filter((str) => str.length < n).length;
}

//Create a findLastWord function that accepts a parameter which is an array of strings. The function should return the word that occurs last alphabetically.
function findLastWord(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}

//Create a function called longest that accepts an array of strings and returns the length of the longest one.
function longest(arr) {
  return arr.reduce((max, str) => str.length > max ? str.length : max, arr[0].length);
}

//Create an avgLen function that accepts an array of strings returns their average length (rounded up).
function avgLen(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].length;
  }
  return Math.ceil(result / arr.length);
}

//reate a findNeedle function that accepts parameters of an array and a string. If any element within the array is an exact match for the string return true, if not, return false.
function findNeedle(arr, str) {
  return arr.includes(str);
}

//Write a stringDupe function that take a string and a number n as parameters and returns a new string that repeats the given string n times. E.g. ("example", 2) and returns "exampleexample"
function stringDupe(str, n) {
  return str.repeat(n);
}

//Create an interlace function that accepts an array of strings of the same length, and combines them to return a single interlaced result. For example, given ["ab", "cc"] it should return "acbc".
function interlace(arr) {
  let result = "";
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      result += arr[j][i];
    }
  }
  return result;
}

//Create a function called "censorship" that accepts two parameters "selector" and "censorThis". If the text of any element selected by the selector contains the censorThis string, then the entire text of the element should be replaced with "CENSORED". 
function censorship(selector, censorThis) {
  let elements = document.querySelectorAll(selector);
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].textContent.toLowerCase().includes(censorThis.toLowerCase())) {
      elements[i].textContent = "CENSORED";
    }
  }
}

//Create a function called "buttonFrenzy" that accepts two parameters "target" which is a selector for an element that will have buttons added to it, and "n" which is the number of buttons to add. The function should add n buttons to the target element, each with the text "Button 1", "Button 2", "Button 3", etc. The buttons should be added in the order they are created, so the first button should be "Button 1", the second "Button 2", etc. 
function buttonFrenzy(target, n) {
  let element = document.querySelector(target);
  for (let i = 1; i <= n; i++) {
    let button = document.createElement("button");
    button.textContent = "Button " + i;
    element.append(button);
  }
}

//Create a function called "feedback" that accepts two parameters "elem" and "text". The function should add a paragraph containing the text to the provided element.
function feedback(elem, text) {
  let p = document.createElement("p");
  p.textContent = text;
  elem.append(p);
}

//Create a function called "enambleButtonFeedback" that accepts two parameters, the first "containerElem" is an element that will contain the buttons; the second "feedbackElem" is the element that will receive the feedback. The function must connect every button found in the container to the feedback function so that when a button is pressed the message "XXX was pressed" is added to Sthe feedback element (where XXX is the text of the button). 
function buttonFeedback(containerElem, feedbackElem) {
  let buttons = containerElem.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      feedback(feedbackElem, buttons[i].textContent + " was pressed");
    });
  }
}