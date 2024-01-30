const pivotHelper = (array = []) => {
  let lessCount = 0;
  const pivot = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      lessCount++;
      if (i != lessCount) {
        let temp = array[lessCount];

        array[lessCount] = array[i];
        array[i] = temp;
      }
    }
  }

  let temp = array[lessCount];
  array[lessCount] = array[0];
  array[0] = temp;
  let ttemp = array;
  return { lessCount, array };
};


console.log(pivotHelper([5, 2, 1, 8, 4, 7, 6, 3]));