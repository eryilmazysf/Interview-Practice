//isDuplicate
function isDuplicate(array) {
  let emptyArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!emptyArray.includes(array[i])) {
      emptyArray.push(array[i]);
    }
  }

  if (emptyArray.length === array.length) {
    return false;
  } else {
    return true;
  }
}
console.log("Duplicate:", isDuplicate([1, 2, 3, 4]));

// Missing Number in Array
value = [1, 2, 3, 4, 6];
for (let i = 0; i < value.length - 1; i++) {
  if (value[i + 1] - value[i] != 1) {
    console.log("missing number:", value[i] + 1);
  }
}

//Write a function that takes a character and a string as arguments and returns the number of times the character is found in the string

function findChar(word, char) {
  let count = 0;
  for (const i = 0; i < word.length; i++) {
    if ((word[i] = char)) {
      count = count + 1;
    }
  }
}

// A palindrome is a word that reads the same backward as forward.
//isPalindrome(`abc`) => false
//isPalindrome(`mygym`) => true

function isPolindrome(word) {
  let sentence = "";
  for (const i = word.length - 1; i >= 0; i--) {
    sentence = sentence + word[i];
  }
  if (sentence === word) {
    return true;
  } else {
    return false;
  }
}

// word1="sonero" word2="neroso" true
word1 = "sonero";
word2 = "neroso";
function anagram(w1, w2) {
  let array1 = [];
  let array2 = [];
  for (let i = 0; i < w1.length; i++) {
    array1.push(w1[i]);
  }
  for (let m = 0; m < w2.length; m++) {
    array2.push(w2[m]);
  }
  sorted1 = array1.sort();
  sorted2 = array2.sort();
  if (JSON.stringify(sorted1) == JSON.stringify(sorted2)) {
    return true;
  } else {
    return false;
  }
}
console.log(anagram(word1, word2));

//ES6

function isDriver(...years) {
  years.forEach((year) => console.log(2021 - year >= 18));
}
isDriver(2000, 2001, 2005, 2007);

//Destructuring
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40, e: 50 });
console.log(rest);
const ages = [20, 21, 27];
const [ayse, yasin, yusuf] = ages;
console.log(ayse, yasin, yusuf);

//Longest Polindromic
//ex=> ababd=>aba

function findLongSub(str) {
  longestSub = [];
  for (let i = 0; i < str.length; i++) {
    lastIndex = str.lastIndexOf(str[i]);
    if (str.substring(i, lastIndex + 1) == str.substring(lastIndex + 1, i)) {
      longestSub.push(str.substring(i, lastIndex + 1));
    }
    lastIndex = 0;
    //console.log(longestSub);
  }
  let max = "";
  for (let m = 0; m < longestSub.length; m++) {
    if (longestSub[m].length > max.length) {
      max = longestSub[m];
    }
  }
  return max;
}
console.log(findLongSub("ababd"));

//Median two sorted arrays
let num1 = [1, 3];
let num2 = [2];
num = num1.concat(num2).sort();
if (num.length % 2 == 0) {
  console.log((num[num.length / 2] + num[num.length / 2 - 1]) / 2);
} else {
  console.log(num[Math.floor(num.length / 2)]);
}
//concat two array
let l1 = [1, 2, 4];
let l2 = [1, 3, 4];
let l = l1.concat(l2).sort();
console.log(l);
a = ["y", "u", "s", "u", "f"];
console.log(a.join(" "));

//sprial matrix
const sprialMatrix = (matrix) => {
  let result = [];
  let left = 0;
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let direction = "right";

  while (left <= right && top <= bottom) {
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      direction = "down";
      top += 1;
    } else if (direction === "down") {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      direction = "left";
      right -= 1;
    } else if (direction === "left") {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      direction = "up";
      bottom -= 1;
    } else if (direction === "up") {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      direction = "right";
      left += 1;
    }
  }

  return result;
};
matrixx = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(sprialMatrix(matrixx));

//DOM

btn = document.getElementById("btn");
increase = document.getElementById("increase");
let number = 0;
const increaseFunc = () => {
  //console.log((number = number + 1));
  number = number + 1;
  increase.innerHTML = number;
};
btn.addEventListener("click", increaseFunc);
//increase.style.border = "1px solid red";
increase.setAttribute("class", "text");

//Rotate List
const rotate = (head, k) => {
  let result = [];
  l = head.length;
  first = head.slice(l - k);
  second = head.slice(0, l - k);
  result = first.concat(second);
  return result;
};
console.log(rotate([1, 2, 3, 4, 5], 2));

//built-in Func

let x = [1, 2, 3, 4, 5];
console.log(x.filter((i) => i > 3));
let pow = [];
x.forEach((i) => pow.push(i ** 2));
console.log(pow);
console.log(x.reduce((p, c) => p * c));

//reverse words in a string

let word = " the sky is blue ";
wordSplit = word.trim().split(" ");
console.log(wordSplit.reverse());

//how many times a letter in sentence
// sentence="yusuf yasin ayse" y=>3
const numberOfLetter = (s, l) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == l) {
      count++;
    }
  }
  return count;
};
console.log(numberOfLetter("yusuf yasin ayse", "y"));

let myObject = {
  name: "yusuf",
  age: 27,
};
console.log(myObject["name"]);

// Args and Obj
function sum(...args) {
  let add = 0;
  for (let i = 0; i < args.length; i++) {
    add += args[i];
  }
  return add;
}
console.log(sum(1, 2, 3));

///Zig zag - conversation
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
const convert = (s, numRows) => {
  let len = s.length;
  if (len <= 2) return s;
  let a = [];
  let row = 0;
  let isDown = true;

  for (let i = 0; i < len; i++) {
    if (!a[row]) {
      a[row] = s.charAt(i);
    } else {
      a[row] += s.charAt(i);
    }

    if (row === numRows - 1) isDown = false;
    if (row === 0) isDown = true;
    row = isDown ? row + 1 : row - 1;
  }
  //console.log("a:", a);
  let newS = "";
  a.forEach(function (element, index) {
    newS += element;
  });

  return newS;
};
console.log(convert("paypalishiring", 5));

/////////
function ensure(value) {
  if (value === undefined || value === "") {
    throw new Error("no arguments");
  }

  return value;
}
try {
  console.log(ensure());
} catch (err) {
  console.log(err);
}

//////////
function removeProperty(obj, prop) {
  if (prop in obj) {
    delete obj[prop];
    return true;
  } else {
    return false;
  }
}

//////////

function createCheckDigit(membershipId) {
  // Write the code that goes here.
  if (membershipId.length > 1) {
    var dgts = membershipId.split("");
    var sum = 0;
    dgts.forEach((dgt) => {
      sum += Number(dgt);
    });

    //console.log('Loop 1');
    return createCheckDigit(sum + "");
  } else {
    //console.log('Out of Loop 1');
    return Number(membershipId);
  }
}

console.log(createCheckDigit("55555"));

// our two sum function which will return
// all pairs in the array that sum up to S
function twoSum(arr, S) {
  let sums = [];

  // check each element in array
  for (let i = 0; i < arr.length; i++) {
    // check each other element in the array
    for (let j = i + 1; j < arr.length; j++) {
      // determine if these two elements sum to S
      if (arr[i] + arr[j] === S) {
        sums.push([arr[i], arr[j]]);
      }
    }
  }

  // return all pairs of integers that sum to S
  return sums;
}

twoSum([3, 5, 2, -4, 8, 11], 7);

// it should convert user entered date "12/31/2014" to "20141231" suitable for the API.
function formatDate(userDate) {
  var parts = userDate.split("/");
  if (parts[0].length == 1) parts[0] = "0" + parts[0];
  if (parts[1].length == 1) parts[1] = "0" + parts[1];
  return parts[2] + parts[0] + parts[1];
}
//after click hidden and after 1second visible
let clickButton = document.getElementById("click");
//console.log("clickButton:", clickButton);
clickButton.addEventListener("click", () => {
  //console.log("hidden");
  clickButton.style.visibility = "hidden";
  setTimeout(() => {
    clickButton.style.visibility = "visible";
  }, 1000);
});
//object
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());

//function Object
function Book(type, author) {
  this.type = type;
  this.author = author;
  this.getDetails = function () {
    return this.type + " written by " + this.author;
  };
}

var book = new Book("Fiction", "Peter King");

console.log(book.getDetails()); // => Fiction written by Peter King

///////////calback function//////////////////
function action(callback, x, y) {
  var result = callback(x, y);
  console.log(result);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

action(add, 2, 3); // => 5
action(multiply, 2, 3); // => 6

//lower to upper
const str = "The Quick Brown Fox";
let newStr = str
  .split("")
  .map((i) => (i === i.toLowerCase() ? i.toUpperCase() : i.toLowerCase()))
  .join("");
console.log(newStr);

//reduce we use reducer in iterable array
const arr = [1, 2, 3, 4];
const reducer = (acc, current) => acc + current;
console.log(arr.reduce(reducer));

//for in
const parent = {
  fn: "Mike",
  ls: "Mily",
  profession: "barber",
};
function Baby() {
  this.fn = "unnamed";
  this.weight = 3.4;
}
Baby.prototype = parent;
let sally = new Baby();
sally.fn = "Sally";

for (const prop in sally) {
  if (Object.hasOwnProperty.call(sally, prop)) {
    const element = sally[prop];
    console.log(prop, ":>>", element);
  }
}
console.log(sally.__proto__);

//10 songs
//shuffle one time playing each song randomly
//play function
//do not delete orijinal data
const songs = ["a", "b", "c", "d", "e", "f", "g"];
//console.log(random);
const playedSong = [];
const playMySong = () => {
  let random = Math.floor(Math.random() * songs.length);
  for (let i = 0; i < songs.length; i++) {
    //console.log("random:", random);
    if (!playedSong.includes(songs[random])) {
      playedSong.push(songs[random]);
    }
  }
  return console.log(playedSong);
};
playMySong();

//compare age
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)
// p1.compareAge(p2) ➞ "Joel is older than me."
// p2.compareAge(p1) ➞ "Samuel is younger than me."
// p1.compareAge(p3) ➞ "Lily is the same age as me."

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    if (this.age < other.age) {
      return `${other.name} is older than me.`;
    } else if (this.age > other.age) {
      return `${other.name} is younger than me.`;
    } else {
      return `${other.name} is the same age as me.`;
    }
  }
}

//matchstep

function matchHouses(step) {
  return step === 0 ? 0 : 5 * step + 1;
}

//obj to array
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

function toArray(obj) {
  var a = [];
  for (var i in obj) {
    a.push([i, obj[i]]);
  }
  return a;
}
console.log(toArray({ a: 1, b: 2 }));

//Architech
// for (var i = 0; i < 3; i++) {
//   console.log("i -->", i);
//   setTimeout(function () {
//     console.log("i in setTimeout -->", i);
//     alert(i);
//   }, 3000 + i);
// }
//setTimeout take callback function it runs after another function finishes running
//in this example i is 5 after finish for loop and copy this i in memory
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
//second parenthes immediately-invoke function expression call function
(function () {
  var p = (r = 5);
})();

console.log("r-->", r);
