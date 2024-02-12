// 예시 : maxSubarraySum 함수
// 배열과 숫자 하나를 전달하고 함수는 해당 배열의 연속된 요소의 가장 큰 합계를 계산한다.
// native solution
// Time Complexity O(N^2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    // console.log(temp, max);
  }
  return max;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

// refactor
// Time Complexity O(N)
function maxSubarraySumRe(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // Sliding
    tempSum = tempSum - arr[i - num] + arr[i];
    // 더 큰 값을 취함
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySumRe([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
