
// 1)Traditional Function
function maps(x){
  let result = [];
  for(let i = 0; i < x.length; i++){
    result.push(x[i] * 2);
  }
  return result;
}


// 2)Modern Function using .map()
function maps(x) {
  return x.map(num => num * 2);
}

// 3)Full Arrow Function Version (modern + concise)
const maps = x => x.map(num => num * 2);

console.log(maps([1, 2, 3])); //Output: [ 2, 4, 6 ]
