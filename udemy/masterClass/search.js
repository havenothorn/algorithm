// Divide & Conquer
// search 함수 => 이진 탐색
// native solution => Linear Search
// Time Complexity O(N)
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// Refactor
// Time Complexity Log(N)
function searchRe(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor(min + max / 2);
    let currentElement = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(searchRe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
