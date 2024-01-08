// PROBLEM STATEMENT

// Write a recursive function to implement binary search

const recursiveBinarySearch = (arr, num) => {
  let mid = Math.floor(arr[0] + arr[arr.length - 1]) / 2;
  if (arr[mid] === num) {
    return true;
  } else if (arr[mid] > num) {
    return recursiveBinarySearch(arr.slice(mid), num);
  } else {
    return recursiveBinarySearch(arr.slice(0, mid), num);
  }
};

console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],2));
