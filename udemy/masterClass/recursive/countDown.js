// First recursive function
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

// Second recursive function
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// can you spot the base case?
// Do you notice the different input?
// what would happen if we didn't return?
