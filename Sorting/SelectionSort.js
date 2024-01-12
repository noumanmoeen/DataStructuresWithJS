const selectionSort = (array) => {
  let min = 0;
  let index = 0;
  let temp = 0;

  for (let i = 0; i < array.length; i++) {
    min = array[i];
    index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (min > array[j]) {
        min = array[j];
        index = j;
      }
    }
    temp = array[i];
    array[i] = min;
    array[index] = temp;
  }
  return array;
};

const testArr = [5, 3, 4, 1, 2];

console.log(selectionSort(testArr));


// Revising selection sort 