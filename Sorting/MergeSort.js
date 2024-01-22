const merge = (left = [], right = []) => {
  const result = [];
  let i = 0,
    j = 0;
  while (i <= left.length - 1 && j <= right.length - 1) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i <= left.length - 1) {
    result.push(left[i]);
    i++;
  }

  while (j <= right.length - 1) {
    result.push(right[j]);
    j++;
  }

  return result;
};

const mergeSort = (array = []) => {
  if (array.length <= 1) return array;
  const mid = Math.floor((0 + array.length - 1) / 2);

  const left = mergeSort(array.slice(0, mid + 1));

  const right = mergeSort(array.slice(mid + 1, array.length));

  return merge(left, right);
};

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));
