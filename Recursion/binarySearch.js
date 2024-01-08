// PROBLEM STATEMENT

// Write a recursive function to implement binary search

const recursiveBinarySearch = (arr, num) => {
  let mid = Math.floor((0 + (arr.length - 1)) / 2);
  if (arr.length === 0 && arr[0] !== num) {
    return false;
  }
  if (arr[mid] === num) {
    return true;
  } else if (arr[mid] > num) {
    return recursiveBinarySearch(arr.slice(0, mid), num);
  } else {
    return recursiveBinarySearch(arr.slice(mid + 1), num);
  }
};

console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
