// averagePair 함수
// 정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인합니다.
// 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있습니다.
// Time: O(N), Space: O(1)

function averagePair(arr, val) {
  let first = 0;
  let end = arr.length - 1;
  while (first < end) {
    let average = (arr[first] + arr[end]) / 2;
    if (average === val) {
      return true;
    } else if (average < val) {
      first++;
    } else {
      end--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
