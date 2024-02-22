// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// function power(a, b) {
//   if (b === 0) {
//     return 1;
//   } else {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//       result *= a;
//     }
//     return result;
//   }
// }

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 0));
