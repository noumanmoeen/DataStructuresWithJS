const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    for (let j = i - 1; j >= 0 && curr < arr[j]; j--) {
      arr[j + 1] = arr[j];
      arr[j] = curr;
    }
  }
};

insertionSort([2, 1, 9, 76, 4]);

