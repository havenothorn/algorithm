// native solution
// Time Complexity O(N^2)
// Space Complexity O(1)
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero1([-4, -3, -2, -1, 0, 1, 2, 5]));
// sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

// Refactor
// Time Complexity O(N)
// Space Complexity O(1)
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero2([1, 2, 3, 4, -4, 9, 0, 5]));
