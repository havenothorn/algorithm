// 빈도수 세기 - sameFrequency
// sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.
// 여러분의 솔루션은 반드시 다음과 같은 복잡성을 가져야 합니다. Time: O(N)

function sameFrequency(first, second) {
  let strFirst = first.toString();
  let strSecond = second.toString();

  if (strFirst.length !== strSecond.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of strFirst) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of strSecond) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
