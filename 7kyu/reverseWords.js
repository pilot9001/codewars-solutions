// Doesn't make sense yet. 

function reverseWords(str) {
  return str
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("Hello world")); //olleH dlrow
console.log(reverseWords("double space")); //elbuod ecaps