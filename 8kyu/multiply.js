// 8kyu - Multiply
// https://www.codewars.com/kata/50654ddff44f800200000004

// 1)Function Declaration
function multiply(a, b){
    return a * b;
}

// 2)Function Expression
const multiply = function (a, b) {
  return a * b;
};


// 3)Arrow function
const multiply = (a, b) => a * b;

console.log(multiply(5, 7)); // 35
console.log(multiply(23, 71)); // 1633