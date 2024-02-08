/* eslint-disable no-undef */
'use strict';
QUnit.config.reorder = false;
const { test } = QUnit;

QUnit.test("Conditional", function (assert) {
  if (typeof conditional !== 'function') {
    assert.strictEqual(
      typeof conditional,
      'function',
      "Define a function conditional with two parameters: size and limit."
    );
    return;
  }
  assert.strictEqual(
    conditional(5, 6),
    "ok",
    "Complete the 'conditional' function in index.js so that it returns the string 'ok' when the 'size' argument is less than the 'limit'.  It should return the string 'ABORT TOO LARGE!' in all other cases."
  );
  assert.strictEqual(
    conditional(0, 9000),
    "ok",
    "It should return the string 'ok' when the 'size' argument is less than the 'limit'."
  );
  assert.strictEqual(
    conditional(-6, 0),
    "ok",
    "It should return the string 'ok' when the 'size' argument is less than the 'limit'."
  );
  assert.strictEqual(
    conditional(6, 6),
    "ABORT TOO LARGE!",
    "It should return the string 'ABORT TOO LARGE!' even when the size equals the limit."
  );
  assert.strictEqual(
    conditional(6, 5),
    "ABORT TOO LARGE!",
    "It should return the string 'ABORT TOO LARGE!' when size is greater than the limit."
  );
  assert.strictEqual(
    conditional(9000, -66),
    "ABORT TOO LARGE!",
    "It should return the string 'ABORT TOO LARGE!' when size is greater than the limit."
  );
});



QUnit.test("Sum", function (assert) {
  if (typeof sum !== 'function') {
    assert.strictEqual(
      typeof sum,
      'function',
      "Define a function sum with one parameter: arr."
    );
    return;
  }
  assert.strictEqual(
    sum([1, 1, 1, 1, 1]),
    5,
    "Complete the 'sum' function so that it adds all the numbers passed to it in an array and returns the sum."
  );
  assert.strictEqual(
    sum([1, 2, 3, 4, 5]),
    15,
    "1+2+3+4+5 = 15"
  );
  assert.strictEqual(
    sum([101, 102, 103, 104, 105]),
    515,
    "101+102+103+104+105 = 515"
  );
  assert.strictEqual(
    sum([0, 0]),
    0,
    "0+0 = 0"
  );
  assert.strictEqual(
    sum([]),
    0,
    "An empty array should add up to 0."
  );
});


QUnit.test("Deep Thought", function (assert) {
  assert.strictEqual(
    typeof deepThought,
    "function",
    "Create a function called 'deepThought'.  It should always return 42."
  );
  if (typeof deepThought !== 'function') {
    return;
  }
  assert.strictEqual(
    deepThought(),
    42,
    "'deepThought' must always return 42."
  );
  assert.strictEqual(
    deepThought("zaphod"),
    42,
    "'deepThought' must always return 42."
  );
  assert.strictEqual(
    deepThought(-1),
    42,
    "'deepThought' must always return 42."
  );
});




QUnit.test("Argument Value Function", function (assert) {
  assert.strictEqual(
    typeof argVal,
    "function",
    "Create a function called 'argVal'.  It should accept one argument and return the value of that argument."
  );
  if (typeof argVal !== 'function') {
    return;
  }
  assert.strictEqual(
    argVal(42),
    42,
    "If 42 is passed, 42 should be returned."
  );
  assert.strictEqual(
    argVal("Zaphod Beeblebrox"),
    "Zaphod Beeblebrox",
    "If Zaphod Beeblebrox is passed, Zaphod Beeblebrox should be returned."
  );
  assert.strictEqual(
    argVal(),
    undefined,
    "If there are no arguments it should return undefined."
  );
});




QUnit.test("How Long?", function (assert) {
  assert.strictEqual(
    typeof howLong,
    "function",
    "Create a function called 'howLong'.  It should accept one argument that is an array and return how long that array is."
  );
  if (typeof howLong !== 'function') {
    return;
  }
  assert.strictEqual(
    howLong([]),
    0,
    "An empty array should return 0."
  );
  assert.strictEqual(
    howLong([1, 2, 3, 4, 5]),
    5,
    "The array [1, 2, 3, 4, 5] has five items so howLong should answer 5."
  );
  assert.strictEqual(
    howLong([1, 2, undefined, 4, 5]),
    5,
    "The array [1, 2, undefined, 4, 5] has five items so howLong should answer 5."
  );
  assert.strictEqual(
    howLong(["one"]),
    1,
    "The array ['single'] has one item so howLong should answer 1."
  );
});


QUnit.test("NumberWang", function (assert) {
  assert.strictEqual(
    typeof numberwang,
    "function",
    "Create a function called 'numberwang'.  It should accept one argument 'limit', and return the sum of all the whole numbers less than and equal to limit.  So, numberwang(5) would calulate 1+2+3+4+5, which is 15."
  );
  if (typeof numberwang !== 'function') {
    return;
  }
  assert.strictEqual(
    numberwang(5),
    15,
    "numberwang(5) should calulate 1+2+3+4+5, which is 15"
  );
  assert.strictEqual(
    numberwang(6),
    21,
    "numberwang(6) should calulate 21"
  );
  assert.strictEqual(
    numberwang(1),
    1,
    "numberwang(1) should calulate 1"
  );
  assert.strictEqual(
    numberwang(10),
    55,
    "numberwang(10) should calulate 55"
  );
  assert.strictEqual(
    numberwang(100),
    5050,
    "numberwang(100) should calulate 5050"
  );
  assert.strictEqual(
    numberwang(1000),
    500500,
    "numberwang(1000) should calulate 500500"
  );
  assert.strictEqual(
    numberwang(12345),
    76205685,
    "numberwang(12345) should calulate 76205685"
  );
  assert.strictEqual(
    numberwang(-100),
    0,
    "numberwang on any negative number should calulate 0"
  );
  assert.strictEqual(
    numberwang(-10),
    0,
    "numberwang on any negative number should calulate 0"
  );
});



QUnit.test("Is it a string?", function (assert) {
  assert.strictEqual(
    typeof isString,
    "function",
    "Create an isString function that accepts a parameter and returns true if that parameter is a string."
  );
  if (typeof isString !== 'function') {
    return;
  }
  assert.strictEqual(
    isString("hello"),
    true,
    '"hello" is a string, so the result should be true.'
  );
  assert.strictEqual(
    isString(["array", "of", "strings"]),
    false,
    "An array of strings is not itself a string, so the result should be false."
  );
  assert.strictEqual(
    isString(42),
    false,
    "The number 42 is not a string, so the result should be false."
  );
  assert.strictEqual(
    isString("42"),
    true,
    "A string containing characters 4 and 2 is a string, so the result should be true."
  );
});

QUnit.test("Is it an empty string?", function (assert) {
  assert.strictEqual(
    typeof isEmpty,
    "function",
    "Create an 'isEmpty' function that accepts a string and returns true if that string does not have at least one character in it (i.e. its length is 0)."
  );
  if (typeof isEmpty !== 'function') {
    return;
  }
  assert.strictEqual(
    isEmpty("very long sentence with lots of words"),
    false,
    "Given a sentence, isEmpty should return false."
  );
  assert.strictEqual(
    isEmpty("abc"),
    false,
    "Given a short word, isEmpty should return false."
  );
  assert.strictEqual(
    isEmpty(" "),
    false,
    "A solitary space character means we can't call this string empty, so isEmpty should return false."
  );
  assert.strictEqual(
    isEmpty(""),
    true,
    "Given an empty string, isEmpty should return true."
  );
});

QUnit.test("Is string longer than n characters?", function (assert) {
  assert.strictEqual(
    typeof longerThan,
    "function",
    "Create a 'longerThan' function that accepts two parameters: a candidate string for testing and a number 'n'.  The function should return true if the candidate is longer than 'n' characters."
  );
  if (typeof longerThan !== 'function') {
    return;
  }
  assert.strictEqual(
    longerThan("cheese", 4),
    true,
    '"cheese" is six characters long, we check for 4 characters, so this should be true.'
  );
  assert.strictEqual(
    longerThan("cheese", 8),
    false,
    '"cheese" is six characters long, we check for 8 characters, so this should be false.'
  );
  assert.strictEqual(
    longerThan("", 3),
    false,
    "An empty string is not longer than three characters, so false"
  );
  assert.strictEqual(
    longerThan("badger", 6),
    false,
    '"badger" is six characters, 6 is not less than 6, so this should be a false result.'
  );
});

QUnit.test("Is string longer than 'n' and shorter than 'm'?", function (assert) {
  assert.strictEqual(
    typeof longerThanButShorterThan,
    "function",
    "Create a longerThanButShorterThan function that accepts three parameters: a string, a number n, and a number m, and returns true if that string is longer than n but shorter than m."
  );
  if (typeof longerThanButShorterThan !== 'function') {
    return;
  }
  assert.strictEqual(
    longerThanButShorterThan("mozarella", 7, 10),
    true,
    '"mozarella" is 9 chars long. Given limits 7 and 10, 9 is > 7, and < 10, so true'
  );
  assert.strictEqual(
    longerThanButShorterThan("cheese", 4, 7),
    true,
    '"cheese" is 6 chars long. Given limits 4 and 7, 6 is > 4, and < 7, so true'
  );
  assert.strictEqual(
    longerThanButShorterThan("cheese", 8, 10),
    false,
    '"cheese" is 6 chars long. Given limits 8 and 10, 6 is not > 8, so, false'
  );
  assert.strictEqual(
    longerThanButShorterThan("cheese", 4, 6),
    false,
    '"cheese" is 6 chars long. Given limits 4 and 6, 6 is not < 6, so false'
  );
  assert.strictEqual(
    longerThanButShorterThan("badger", 6, 6),
    false,
    '"cheese" is 6 chars long. Given limits 6 and 6 neither test condition passes, so, false'
  );
});

QUnit.test("Count how many words are shorter than n?", function (assert) {
  assert.strictEqual(
    typeof countShorterThan,
    "function",
    "Create a function countShorterThan that accepts an array of strings and a number n and returns a count of how many of the strings are shorter than n characters."
  );
  if (typeof countShorterThan !== 'function') {
    return;
  }
  assert.strictEqual(
    countShorterThan(["one", "two", "three"], 4),
    2,
    'If we call countShorterThan(["one", "two", "three"], 4), "one" and "two" have fewer than 4 characters, so there are 2 matches, and the function returns 2.'
  );
  assert.strictEqual(
    countShorterThan(["apple", "banana", "cherry"], 6),
    1,
    'If we call countShorterThan(["apple", "banana", "cherry"], 6), only "apple" has fewer than 6 characters, so only 1 match.'
  );
  assert.strictEqual(
    countShorterThan(["apple", "banana", "cherry"], 8),
    3,
    'If we call countShorterThan(["apple", "banana", "cherry"], 8), all 3 candidates are shorter than 8 characters, so 3 matches'
  );
  assert.strictEqual(
    countShorterThan(["a", "banana", "cherry"], 3),
    1,
    'If we call countShorterThan(["a", "banana", "cherry"], 3), only "a" has fewer than 3 characters, so only 1 match.'
  );
  assert.strictEqual(
    countShorterThan(["apple", "banana", "cherry"], 2),
    0,
    "If no string is short enough, we get 0 matches and the function returns 0."
  );
});

QUnit.test("Which word is alphabetically last in an array?", function (assert) {
  assert.strictEqual(
    typeof findLastWord,
    "function",
    "Create a findLastWord function that accepts a parameter which is an array of strings. The function should return the word that occurs last alphabetically."
  );
  if (typeof findLastWord !== 'function') {
    return;
  }
  assert.equal(
    findLastWord(["dog", "cat", "zebra"]),
    "zebra",
    'In ["dog", "cat", "zebra"], zebra is alphabetically the last word.'
  );
  assert.strictEqual(
    findLastWord(["cat", "cot", "case"]),
    "cot",
    'In ["cat", "cot", "case"], cot is alphabetically the last word.'
  );
  assert.strictEqual(
    findLastWord(["aaa", "a", "aa"]),
    "aaa",
    'In ["aaa", "a", "aa"], aaa is alphabetically the last word.'
  );
  assert.strictEqual(
    findLastWord([]),
    undefined,
    "For an empty array, findLastWord should return undefined."
  );
  const cba = ["c", "b", "a"];
  assert.strictEqual(
    findLastWord(cba),
    "c",
    'In ["c", "b", "a"], c is the last word.'
  );
  assert.deepEqual(
    cba,
    ["c", "b", "a"],
    "The original array must not be damaged (e.g. reordered) by the find process."
  );
});

QUnit.test("Longest String", function (assert) {
  assert.strictEqual(
    typeof longest,
    "function",
    "Create a function called longest that accepts an array of strings and returns the length of the longest one."
  );
  if (typeof longest !== 'function') {
    return;
  }
  assert.strictEqual(
    longest(["a"]),
    1,
    "An array with one entry that is one character long should give the answer 1"
  );
  assert.strictEqual(
    longest(["abcd"]),
    4,
    "An array with one entry that is four characters long should give the answer 4"
  );
  assert.strictEqual(
    longest(["abcd", "longer"]),
    6,
    "An array with two entries of four and six characters, should give the answer 6"
  );
  assert.strictEqual(
    longest(["very long indeed", "not that long", "rather short", "tiny"]),
    16,
    "The function should work when the longest item is the first one."
  );
  assert.strictEqual(
    longest(["not that long", "rather short", "tiny", "very long indeed"]),
    16,
    "The function should work when the longest item is the last one."
  );
});


QUnit.test("Average string length.", function (assert) {
  assert.strictEqual(
    typeof avgLen,
    "function",
    "Create an avgLen function that accepts an array of strings returns their average length (rounded up)."
  );
  if (typeof avgLen !== 'function') {
    return;
  }
  assert.strictEqual(
    avgLen(["aaaa", "bbbb", "1234"]),
    4,
    "Three strings of four characters have an average length of 4 (because (4+4+4)/3 = 4)."
  );
  assert.strictEqual(
    avgLen(["a", "bb", "ccc", "dddd", "eeeee"]),
    3,
    "Five strings of different lengths (1+2+3+4+5)/5 = 3."
  );
  assert.strictEqual(
    avgLen(["", "", "", "", ""]),
    0,
    "Five empty strings (0+0+0+0+0)/5 = 0."
  );
  assert.strictEqual(
    avgLen(["a", "bb", "ccc", "dddd"]),
    3,
    "Four strings of different lengths (1+2+3+4)/4 = 2.5, which rounds up to 3."
  );
  assert.strictEqual(
    avgLen(["aa", "bb", "cc", "ddd"]),
    3,
    "Four strings of different lengths (2+2+2+3)/4 = 2.25, which rounds up (not down) to 3."
  );
});


QUnit.test("Finding a needle in a haystack.", function (assert) {
  assert.strictEqual(
    typeof findNeedle,
    "function",
    "Create a findNeedle function that accepts parameters of an array and a string.  If any element within the array is an exact match for the string return true, if not, return false. "
  );
  if (typeof findNeedle !== 'function') {
    return;
  }
  assert.strictEqual(
    findNeedle(["aaaa", "bbbb", "1234"], ""),
    false,
    'An empty string is not a match for anything in ["aaaa", "bbbb", "1234"], so return false.'
  );
  assert.strictEqual(
    findNeedle(["aaaa", "bbbb", "1234"], "a"),
    false,
    'The single character "a" is not a match in ["aaaa", "bbbb", "1234", so return false.'
  );
  assert.strictEqual(
    findNeedle(["aaaa", "bbbb", "1234"], "aaaa"),
    true,
    'An exact match!  The string "aaaa" is in the array ["aaaa", "bbbb", "1234"], so return true.'
  );
  assert.strictEqual(
    findNeedle(["dog", "zebra", "dog"], "dog"),
    true,
    'The function should work if an exact match is in the array several times.'
  );
  assert.strictEqual(
    findNeedle(["dog", "cat", "zebra"], "doge"),
    false,
    'The function should return false if the array contains a similar, but not the same, word.'
  );
  assert.strictEqual(
    findNeedle(["dog", "cat", "zebra"], "dog"),
    true,
    'The function should work if an exact match is the first element'
  );
  assert.strictEqual(
    findNeedle(["dog", "cat", "zebra"], "zebra"),
    true,
    'The function should work if an exact match is the last element'
  );
  assert.strictEqual(
    findNeedle(["dog", "cat", "zebra"], undefined),
    false,
    'The function should not work if asked to find undefined in an array that does not contain undefined.'
  );
});


QUnit.test("Duplicate a string!", function (assert) {
  assert.strictEqual(
    typeof stringDupe,
    "function",
    'Write a stringDupe function that take a string and a number n as parameters and returns a new string that repeats the given string n times. E.g. ("example", 2) and returns "exampleexample"'
  );
  if (typeof stringDupe !== 'function') {
    return;
  }
  assert.strictEqual(
    stringDupe("cheese", 2),
    "cheesecheese",
    'Calling stringDupe("cheese",2) should return "cheesecheese".'
  );
  assert.strictEqual(
    stringDupe("cheese", 1),
    "cheese",
    'Calling stringDupe("cheese",1) should return "cheese".'
  );
  assert.strictEqual(
    stringDupe("abc", 3),
    "abcabcabc",
    'Calling stringDupe("abc",3) should return "abcabcabc".'
  );
  assert.strictEqual(
    stringDupe("example", 2),
    "exampleexample",
    '"example" and 2 should return "exampleexample"'
  );
});


QUnit.test("Interlace strings", function (assert) {
  assert.strictEqual(
    typeof interlace,
    "function",
    'Create an interlace function that accepts an array of strings of the same length, and combines them to return a single interlaced result. For example, given ["ab", "cc"] it should return "acbc".'
  );
  if (typeof interlace !== 'function') {
    return;
  }
  assert.strictEqual(
    interlace(["aaaa", "bbbb", "1234"]),
    "ab1ab2ab3ab4",
    "Given three strings aaaa, bbbb and 1234 interlace should return ab1ab2ab3ab4."
  );
  assert.strictEqual(
    interlace(["1234", "1234", "1234"]),
    "111222333444",
    "Given the string 1234 three times, interlace should return 111222333444."
  );
  assert.strictEqual(
    interlace(["123", "123", "123", "123"]),
    "111122223333",
    "Given the string 123 four times, interlace should return 111122223333."
  );
});

QUnit.test(
  'Create a function called "censorship" that accepts two parameters "selector" and "censorThis".  If the text of any element selected by the selector contains the censorThis string, then the entire text of the element should be replaced with "CENSORED".',
  function (assert) {
    if (!assert.functionExists('censorship', ['selector', 'censorThis'])) return;

    const censor1 = document.querySelector('#censor1');
    const censor2 = document.querySelector('#censor2');
    const censor3 = document.querySelector('#censor3');
    const censor4 = document.querySelector('#censor4');
    const censor5 = document.querySelector('#censor5');

    // test 5
    assert.strictEqual(
      censor1.textContent,
      'This is the first paragraph - it mentions the forbidden word: cheese!.',
    );

    // test 6
    censorship('#censor1', 'cheese');
    assert.strictEqual(
      censor1.textContent,
      'CENSORED',
    );

    // test 7
    censorship('#censor2', 'cheese');
    assert.strictEqual(
      censor2.textContent,
      'CENSORED',
    );

    // test 8
    censorship('#censor3', 'cheese');
    assert.strictEqual(
      censor3.textContent,
      'This is the third paragraph - it contains no forbidden words!',
    );

    // test 9
    censorship('#censorship>p', 'cheese');
    assert.strictEqual(
      censor5.textContent,
      'CENSORED',
    );

    // test 10 - NB your check must not be sensitive to case
    // hint write your own case-insensitive includes function
    // or use a regular expression
    censorship('#censorship>p', 'this');
    assert.strictEqual(
      censor4.textContent,
      'CENSORED',
    );
  }

);


QUnit.test(
  'Create a function called "buttonFrenzy" that accepts two parameters "target" which is a selector for an element that will have buttons added to it, and "n" which is the number of buttons to add. The function should add n buttons to the target element, each with the text "Button 1", "Button 2", "Button 3", etc. The buttons should be added in the order they are created, so the first button should be "Button 1", the second "Button 2", etc.',
  function (assert) {
    if (!assert.functionExists('buttonFrenzy', ['target', 'n'])) return;
    
    const target = document.querySelector('#buttonfrenzy');
    buttonFrenzy('#buttonfrenzy', 10);
    const buttons = [...target.querySelectorAll('button')];
    assert.strictEqual(buttons.length, 10, 'There should be 3 buttons.');
    assert.strictEqual(buttons[0].textContent, 'Button 1', 'The first button should be "Button 1".');
    assert.strictEqual(buttons.at(-1).textContent, 'Button 10', 'The last button should be "Button 10".');
  }
);


QUnit.test(
  'Create a function called "feedback" that accepts two parameters "elem" and "text".  The function should add a paragraph containing the text to the provided element.',
  function (assert) {
    if (!assert.functionExists('feedback', ['elem', 'text'])) return;
    
    const elem = document.querySelector('#feedback');
    assert.strictEqual(elem.children.length, 1, 'The element should have just one child prior to any changes.');

    feedback(elem, 'This is a test.');
    assert.strictEqual(elem.children.length, 2, 'The element should have two children after the function is called.');
    assert.strictEqual(elem.children[1].tagName, 'P', 'The second child should be a paragraph.');
    assert.strictEqual(elem.children[1].textContent, 'This is a test.', 'The paragraph should contain the text provided.');
    feedback(elem, 'This is another test.');
    assert.strictEqual(elem.children.length, 3, 'The element should have three children after the function is called.');
    assert.strictEqual(elem.children[2].tagName, 'P', 'The third child should be a paragraph.');
    assert.strictEqual(elem.children[2].textContent, 'This is another test.', 'The paragraph should contain the text provided.');
  }
);



QUnit.test(
  'Create a function called "enambleButtonFeedback" that accepts two parameters, the first "containerElem" is an element that will contain the buttons; the second "feedbackElem" is the element that will receive the feedback.  The function must connect every button found in the container to the feedback function so that when a button is pressed the message "XXX was pressed" is added to the feedback element (where XXX is the text of the button).',
  function (assert) {
    if (!assert.functionExists('buttonFeedback', ['containerElem', 'feedbackElem'])) return;
    
    // ensure there are some buttons.
    buttonFrenzy('#buttonfrenzy', 10);

    const containerElem = document.querySelector('#buttonfrenzy');
    const feedbackElem = document.querySelector('#feedback');

    // use your function to connect the buttons to the feedback function
    buttonFeedback(containerElem, feedbackElem);

    // click every button and check the feedback
    const buttons = containerElem.querySelectorAll('button');
    for (const button of buttons) {
      button.click();
      const buttonText = button.textContent + ' was pressed';
      assert.strictEqual(
        [...feedbackElem.children].at(-1).textContent,
        buttonText,
        `The last child should contain the message ${buttonText}".`
      );
    }
  }
);

