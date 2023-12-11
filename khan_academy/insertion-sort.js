var insert = function (array, rightIndex, value) {
  for (var j = rightIndex; j >= 0 && array[j] > value; j--) {
    array[j + 1] = array[j];
  }
  array[j + 1] = value;
};

var insertionSort = function (array) {
  for (var k = 1; k < array.length; k++) {
    insert(array, k - 1, array[k]);
  }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array1 = [13, -5, 0, 1, 9, 45];
insertionSort(array1);
println("Array after sorting:  " + array1);
Program.assertEqual(array1, [-5, 0, 1, 9, 13, 45]);
