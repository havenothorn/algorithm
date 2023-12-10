// 이진 검색
var doSearch = function (array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;
  var totalGuesses = 0;

  while (max >= min) {
    guess = Math.floor((max + min) / 2);
    totalGuesses++;

    if (array[guess] === targetValue) {
      println(array[guess]);
      println("Total guesses: " + totalGuesses);
      return guess;
    } else if (array[guess] < targetValue) {
      println(array[guess]);
      min = guess + 1;
    } else {
      println(array[guess]);
      max = guess - 1;
    }
  }
  println("Total guesses: " + totalGuesses);
  return -1;
};

var primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

var result = doSearch(primes, 73);
println("Found prime at index " + result);

Program.assertEqual(doSearch(primes, 73), 20);
Program.assertEqual(doSearch(primes, 11), 4);
Program.assertEqual(doSearch(primes, 83), 22);

