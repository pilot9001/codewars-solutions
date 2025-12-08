
//Original (traditional) function definition
function doubleInteger(i){
    i *= 2; // That means i = i * 2;
    return i;
}


// Arrow Function Version.
const doubleInteger = i => i * 2;

console.log(doubleInteger(3)); //6
console.log(doubleInteger(24)); // 48

