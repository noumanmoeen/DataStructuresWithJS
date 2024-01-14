const BubbleSort = (array) => {
  let temp;
  for (let index = array.length - 1; index >= 0; index--) {
    for (let i = 0; i < index; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
};

let sampleArray = [4, 65, 7, 2, 76, 2, 7, 21];

const bubbleSortedArray = BubbleSort(sampleArray);

console.log(bubbleSortedArray);

// array.sort() function provided by javascript actually sorts by converting the contents of an
// array unless you pass a comparator function like
// [6,3,6,23,4,8,9].sort((a,b) => a - b )

