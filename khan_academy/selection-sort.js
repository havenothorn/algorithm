var swap = function (array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var indexOfMinimum = function (array, startIndex) {
  var minValue = array[startIndex];
  var minIndex = startIndex;

  for (var i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

var selectionSort = function (array) {
  var k;
  for (var j = 0; j < array.length; j++) {
    k = indexOfMinimum(array, j);
    swap(array, j, k);
  }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array = [-13, 6, 0, -99, 23, 45, 2];
selectionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [-99, -13, 0, 2, 6, 23, 45]);
