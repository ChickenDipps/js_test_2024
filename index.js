"use strict";

function conditional(size, limit) {
  // add your code here
  return "ABORT TOO LARGE!";
}

function sum(arr) {
  let result = 0;
  // add your code here
  return result;
}

// add your other functions here...

//Create a function called "censorship" that accepts two parameters "selector" and "censorThis". If the text of any element selected by the selector contains the censorThis string, then the entire text of the element should be replaced with "CENSORED".
function censorship(selector, censorThis) {
  console.log(selector, censorThis);
  const x = document.querySelectorAll(selector);
  x.forEach((element) => {
    console.log(element);

    // use a regex instead of includes to handle lower case matches
    if (element.textContent.match(new RegExp(censorThis, "i"))) {
      element.textContent = "CENSORED";
    }
  });
}

// Create a function called "buttonFrenzy" that accepts two parameters "target" which is a selector for an element that will have buttons added to it, and "n" which is the number of buttons to add. The function should add n buttons to the target element, each with the text "Button 1", "Button 2", "Button 3", etc. The buttons should be added in the order they are created, so the first button should be "Button 1", the second "Button 2", etc. Rerun
function buttonFrenzy(target, n) {
  const x = document.querySelector(target);
  for (let i = 1; i <= n; i++) {
    const button = document.createElement("button");
    button.textContent = `Button ${i}`;
    x.append(button);
  }
}

// 'Create a function called "feedback" that accepts two parameters "elem" and "text".  The function should add a paragraph containing the text to the provided element.',
function feedback(elem, text) {
  const p = document.createElement("p");
  p.textContent = text;
  elem.append(p);
}

function buttonFeedback(containerElem, feedbackElem) {
  const buttons = containerElem.querySelectorAll("button");
  for (const button of buttons) {
    button.addEventListener("click", e => {
      feedback(feedbackElem, e.target.textContent + " was pressed");
    });
  }
}
