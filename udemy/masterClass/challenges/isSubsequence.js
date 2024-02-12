// 다중 포인터 - isSubsequence
// 두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequence라는 함수를 작성합니다. 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.
// Time Complexity - O(N + M), Space Complexity - O(1)

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return false;

  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// 강의 솔루션
function isSubsequence2(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence2(str1.slice(1), str2.slice(1));
  return isSubsequence2(str1, str2.slice(1));
}

console.log(isSubsequence2("hello", "hello world")); // true
console.log(isSubsequence2("sing", "sting")); // true
console.log(isSubsequence2("abc", "abracadabra")); // true
console.log(isSubsequence2("abc", "acb")); // false (order matters)
