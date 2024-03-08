// Radix sort helper function
// getDigit(num, place) - returns the digit in num at the given place value

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  // 7323 / 100 = 73.23 => 73 % 10 = 3
  // 100의 자리로 나눈 다음 소수점을 없애도록 내림하고, 10으로 나눈 나머지를 구한다.
}

// 버킷에 몇 번 넣을지 결정하는 함수
// digitCount(num) - returns the number of digits in num
function digitCount(num) {
  if (num === 0) return 1; // 0은 Math.log10을 사용할 경우 -Infinity가 나오므로 예외처리
  return Math.floor(Math.log10(Math.abs(num))) + 1;
  // 7323 => 3.863322860120456 => 3 + 1 = 4
}

// 가장 큰 자릿수를 알아내는 함수, 최대 자릿수
// mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []); // 10개의 빈 배열을 만든다.
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k); // k번째 자릿수를 구한다.
      digitBuckets[digit].push(nums[i]); // k번째 자릿수에 따라 배열에 넣는다.
    }
    nums = [].concat(...digitBuckets); // 배열을 펼친다.
  }
  return nums;
}
