const merge = (left = [], right = []) => {
  const result = [];
  let i = 0,
    j = 0;
  while (i <= left.length - 1 && j <= right.length - 1) {
    
  }
};

const mergeSort = (array = []) => {
  if (array.length <= 1) return array;
  const mid = Math.floor((0 + array.length - 1) / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid, array.length - 1));
  return merge(left, right);
};

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));
