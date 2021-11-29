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
console.log("l=>" + l);
a = ["y", "u", "s", "u", "f"];
console.log(a.join(""));

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
console.log("filter =>" + x.filter((i) => i > 3));
let pow = [];
x.forEach((i) => pow.push(i ** 2));
console.log(pow);
console.log(x.reduce((p, c) => p * c, 1));

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
console.log(myObject.name + " " + myObject.age);

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
    let dgts = membershipId.split("");
    let sum = 0;
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
  let parts = userDate.split("/");
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

let book = new Book("Fiction", "Peter King");

console.log(book.getDetails()); // => Fiction written by Peter King

///////////calback function//////////////////
function action(callback, x, y) {
  let result = callback(x, y);
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
  let a = [];
  for (let i in obj) {
    a.push([i, obj[i]]);
  }
  return a;
}
console.log(toArray({ a: 1, b: 2 }));

//Architech
// for (let i = 0; i < 3; i++) {
//   console.log("i -->", i);
//   setTimeout(function () {
//     console.log("i in setTimeout -->", i);
//     alert(i);
//   }, 3000 + i);
// }
//setTimeout take callback function it runs after another function finishes running
//in this example i is 5 after finish for loop and copy this i in memory
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
//second parenthes immediately-invoke function expression call function
(function () {
  let p = (r = 5);
})();

console.log("r-->", r);

const ass = (key, value, obj) => {
  obj[key] = value;
};
const y = { name: "yusuf" };
const result = ass("s", 2, y);
console.log({ ass, result });
const double = (zzz) => {
  return zzz * 2;
};
const rrr = double(2);
console.log({ rrr });

//Arhitech
function fl(str) {
  newletiable = "";
  str.map((item) => {
    newletiable += item[0].toUpperCase() + item.slice(1) + " ";
  });
  console.log(newletiable);
  // const a = str.split(" ");
  //console.log(str);
}
fl(["hello", "world"]);

// binar gapFor example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.
function solution(n) {
  let x = n.toString(2);
  console.log(x);
  let current = 0;
  let big = 0;
  for (let i = 0; i <= x.length; i++) {
    if (x[i] === "0") {
      current += 1;
    }
    if (x[i] === "1") {
      if (current > big) {
        big = current;
      }
      current = 0;
    }
  }
  return big;
}
console.log("binary gap =>", solution(32));

//missing number

function missing(nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let sum = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === sum) {
      sum++;
    } else {
      return sum;
    }
  }
}
//rotate
function rotates(nums, k) {
  let rs = [];
  let r = k % nums.length;
  for (let i = nums.length - r; i < nums.length; i++) {
    rs.push(nums[i]);
  }
  for (let i = 0; i < nums.length - r; i++) {
    rs.push(nums[i]);
  }

  return rs;
}
console.log(rotates([3, 8, 9, 7, 6], 3));

//odd occurency //a xor a =0   a xor 0= a
function solution(A) {
  let result = 0;

  for (let element of A) {
    result ^= element;
  }

  return result;
}
console.log(solution([9, 3, 9, 3, 9, 7, 9]));

//distinct
function solution(A) {
  const count = {};
  for (let i = 0; i < A.length; i++) {
    count[A[i]] = 1;
  }
  console.log(Object.keys(count));
  return Object.keys(count).length;
}
console.log(solution([2, 1, 1, 2, 3, 1]));

//triangle
function solution(A) {
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    let p = A[i],
      q = A[i + 1],
      r = A[i + 2];

    if (p + q > r && q + r > p && r + p > q) return 1;
  }

  return 0;
}
//brackets
function solution(bracket) {
  let brackets = bracket.toString().split("");
  let stack = [];
  for (let i = 0; i < brackets.length; i++) {
    let c = brackets[i];
    if (c === "{" || c === "(" || c === "[") stack.push(c);
    else if (c === "}" || c === ")" || c === "]") {
      let t = stack.pop() + c;
      if (t !== "{}" && t !== "()" && t !== "[]") return 0;
    } else return 0;
  }

  if (stack.length > 0) return 0;

  return 1;
}
console.log(solution("[()]"));
//codility
function xysolution(cd) {
  let uniqueArr = [...new Set(cd)];
  console.log(uniqueArr);
  uniqueArr.sort((a, b) => {
    return a - b;
  });
  let x = 1;
  for (let i = 0; i < uniqueArr.length; i++) {
    if (uniqueArr[i] < 0) {
      continue;
    }
    if (x === uniqueArr[i]) {
      x += 1;
    } else {
      if (!uniqueArr.includes(x)) {
        return x;
      }
    }
  }
  return x;
}
console.log(xysolution([-5, -1, -2, 0, 1, 2, 2, 4, 6]));

//longest word
const longestWord = (str) => {
  return str.split(" ").sort(function (a, b) {
    return b.length - a.length;
  })[0];
};
console.log(longestWord("yusuf ve yasin okula baslayacaklar"));

//title case
function titleCase(str) {
  let titled = str
    .toLowerCase()
    .split(" ")
    .map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    });
  return titled.join(" ");
}
console.log(titleCase("I'm a little tea pot"));

//inner loop large number

function largestInner(arr) {
  let max = [];
  for (let i = 0; i < arr.length; i++) {
    let tempMax = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      let current = arr[i[j]];
      if (current > tempMax) {
        tempMax = current;
      }
    }
    max.push(tempMax);
  }
  return max;
}

console.log(
  largestInner([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
  ])
);

//confirmEnding
function confirmEnd(str, target) {
  //first way
  //return str.endsWith(target);
  //second way
  // if (str.endsWith(target)) {
  //   return true;
  // } else {
  //   return false;
  // }
  // third way
  // if (str.substr(-target.length) === target) {
  //   return true;
  // } else {
  //   return false;
  // }
  return str.substr(-target.length) === target;
}
console.log(confirmEnd("yusuf", "f"));
console.log("yusuf".slice(3, 5));

//chunky monkey
const chunk = (arr, size) => {
  let groups = [];
  while (arr.length > 0) {
    groups.push(arr.splice(0, size)); //splice change original array
    //arr=arr.slice(0,size)
  }
  return groups;
};
console.log(chunk(["a", "b", "c", "d"], 2));

//slasher
function slasher(arr, howmany) {
  arr.splice(0, howmany);
  return arr;
}
console.log(slasher([1, 2, 3], 2));
