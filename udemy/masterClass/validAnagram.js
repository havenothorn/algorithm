// 빈도수 세기- validAnagram
// 두 개의 문자열이 주어졌을 때, 두 번째 문자열이 첫 번째 문자열의 애너그램인지 확인하는 함수를 작성합니다. 애너그램은 다른 글자의 글자를 재배열하여 형성된 단어, 구 또는 이름입니다. (예시: cinema -> iceman)

// Time Complexity - O(n)

function validAnagram(str1, str2) {
  // 문자열 길이가 같은지를 체크
  if (str1.length !== str2.length) {
    return false;
  }
  let firstString = {};
  let secondString = {};
  for (let char of str1) {
    firstString[char] = (firstString[char] || 0) + 1;
  }
  for (let char of str2) {
    secondString[char] = (secondString[char] || 0) + 1;
  }
  for (let key in firstString) {
    if (!(key in secondString)) {
      return false;
    }
    if (secondString[key] !== firstString[key]) {
      return false;
    }
  }
  return true;
}

// 예시:
validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
// 안내: 문자열에 소문자만 포함되어 있다고 가정해도 됩니다.
