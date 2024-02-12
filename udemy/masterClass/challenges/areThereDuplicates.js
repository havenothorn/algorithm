// 빈도수 세기, 다중 포인터 - areThereDuplicates
// 가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다.  빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.
// Time - O(n), Space - O(n)
// 보너스 점수: Time - O(n log n), Space - O(1)

function areThereDuplicates(...vals) {
  vals.sort((a, b) => a > b);
  let start = 0;
  for (let next = 1; next < vals.length; next++) {
    if (vals[start] === vals[next]) {
      return true;
    }
    start++;
  }
  return false;
}

// One Liner 솔루션
function areThereDuplicatesRe() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicatesRe(1, 2, 3)); // false
console.log(areThereDuplicatesRe(1, 2, 2)); // true
console.log(areThereDuplicatesRe("a", "b", "c", "a")); // true
