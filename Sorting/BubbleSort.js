const BubbleSort = (array) => {
  let temp;
  for (let index = array.length; index > 0; index--) {
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


