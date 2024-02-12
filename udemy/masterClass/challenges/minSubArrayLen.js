// Sliding Window - minSubArrayLen
// 양수 배열과 양수라는 두 개의 매개 변수를 받아들이는 minSubArrayLen이라는 함수를 작성하세요.
// 이 함수는 합이 함수에 전달된 정수보다 크거나 같은 인접한 하위 배열의 최소 길이를 반환해야 합니다. 값이 없는 경우 0을 반환합니다.
// Time Complexity - O(n), Space Complexity - O(1)
function minSubArrayLen(nums, sum) {
  let total = 0; // 현재 윈도우의 합
  let start = 0; // 윈도우의 시작
  let end = 0; // 윈도우의 끝
  let minLen = Infinity; // 가장 짧은 하위 배열의 길이를 저장

  while (start < nums.length) {
    // 현재 윈도우의 합이 주어진 sum보다 작고, end 인덱스가 배열의 끝에 도달하지 않은 경우 end를 오른쪽으로 이동
    if (total < sum && end < nums.length) {
      // total에 nums[end] 값을 더해 업데이트
      total += nums[end];
      end++;
    } else if (total >= sum) {
      // 현재 윈도우 합이 sum 이상인 경우 현재 윈도우 길이(end - start)가 이전 길이보다 작은지 확인, 업데이트
      minLen = Math.min(minLen, end - start);
      // start 인덱스를 오른쪽으로 이동시키고 total에 nums[start] 값을 제거
      total -= nums[start];
      start++;
    } else {
      // 합이 sum보다 작고 end가 배열의 끝에 도달한 경우 (end == nums.length) 반복 종료
      break;
    }
  }
  // minLen이 Infinity인 경우, 주어진 sum 값을 만족하지 못하므로 0을 반환, 그렇지 않은 경우 minLen을 반환
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
