// Sliding Window - findLongestSubstring
// 문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환하는 findLongestSubstring이라는 함수를 작성하세요.
// Time Complexity - O(n)

// 슬라이딩 윈도우 패턴과 해시테이블을 사용
function findLongestSubstring(str) {
  let longest = 0; // 지금까지 발견한 가장 긴 중복 없는 부분 문자열의 길이
  let seen = {}; // 각 문자가 마지막으로 나타난 위치를 기록(해시맵)
  let start = 0; // 현재 검토 중인 부분 문자열

  for (let i = 0; i < str.length; i++) {
    // 문자열 str 순회하면서 각 문자의 인덱스 i에 대해 반복
    let char = str[i];
    if (seen[char]) {
      // char가 이미 seen에 존재하면 start 갱신, 다음으로 이동.
      // Math.max(start, seen[char]) => start를 마지막으로 발견된 위치 다음 위치로 조정.
      // start가 중복 문자의 마지막 발견 위치 다음으로만 이동하게 하여, 모든 가능한 부분 문자열을 정확히 고려할 수 있다. (별표!)
      start = Math.max(start, seen[char]);
    }
    // longest 값을 현재 부분 문자열의 길이와 비교하여 더 긴 값으로 갱신
    longest = Math.max(longest, i - start + 1); // 부분 문자열 : start ~ i까지의 문자
    // 현재 문자 char의 위치를 seen 객체에 기록. 여기서 i + 1을 기록하는 이유는 index가 0부터라 올바르게 계산하기 위해서
    seen[char] = i + 1;
  }
  // 반복이 끝나면 longest에 저장된 값, 가장 긴 중복 없는 부분 문자열의 길이를 반환.
  return longest;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
