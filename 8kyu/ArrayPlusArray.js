function arrayPlusArray(arr1, arr2){
    let sum = 0; // start from 0

    // add all numbers from first array
    for(let i = 0; i < arr1.length; i++){
        sum += arr1[i];
    }
    // add all numbers from second array
    for(let i = 0; i < arr2.length; i++){
        sum += arr2[i];
    }
    return sum; // return the total 
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); //output: 21