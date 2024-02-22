// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// function productOfArray(arr) {
//   let result = 1;
//   for (let i = 0; i < arr.length; i++) {
//     result *= arr[i];
//   }
//   return result;
// }

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
