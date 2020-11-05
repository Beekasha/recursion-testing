// function arrSum(arr) {
//     var sum = 0;
//     // iterate array using forEach, better to use for loop since it have higher performance
//     arr.forEach(function(v) {
//       // checking array element is an array
//       if (typeof v == 'object')
//         // if array then getting sum it's element (recursion)
//         sum += arrSum(v);
//       else
//         // else adding the value with sum
//         sum += v
//     })
//     // returning the result
//     return sum;
// }
  
// console.log(arrSum([2, 5, [4, 6], 5]) === 22);

function arrSum(arr) {
    const flattened = arr.flat()
    return 
}

console.log(arrSum([2, 5, [4, 6], 5]) === 22);
console.log(arrSum([2, 5, [4, 6], 5]))