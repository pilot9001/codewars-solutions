// // function arrayPlusArray(arr1, arr2){
// //     let sum = 0; // start from 0

// //     // add all numbers from first array
// //     for(let i = 0; i < arr1.length; i++){
// //         sum += arr1[i];
// //     }
// //     // add all numbers from second array
// //     for(let i = 0; i < arr2.length; i++){
// //         sum += arr2[i];
// //     }
// //     return sum; // return the total 
// // }

// // console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); //output: 21























// function arrayPlusArray(arr1, arr2){
//     let sum = 0;

//     for(let i=0; i<arr1.length; i++){
//         // sum += arr1[i];
//         sum = sum + arr1[i];
//     }
//     for(let i=0; i<arr2.length; i++){
//         // sum +=arr2[i];
//         sum = sum + arr2[i];
//     }
//     return sum;
// }
// console.log(arrayPlusArray([1, 2, 3],[4, 5, 6]));



function arrayPlusArray(arr1, arr2) {
  let r = 0;
  for (let i = 0; i < arr1.length; i++) {
    r += arr1[i] + arr2[i];
  }
  return r;
}

console.log(arrayPlusArray([1, 2, 3],[4, 5, 6]));