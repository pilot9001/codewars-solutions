function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}
console.log(lovefunc(1, 4)); // true  (odd + even)
console.log(lovefunc(2, 2)); // false (even + even)
console.log(lovefunc(3, 3)); // false (odd + odd)
console.log(lovefunc(2, 5)); // true  (even + odd)