// PROBLEM STATEMENT

// Write a function to count unique values in an array
// Arrays will always be sorted
// Examples
// [1,1,1,1,1,1,2] ====> 2
// [1,2,3,4,5,6] ====> 6
// [1,1,1,1,1,1,] ====> 1
// [] ====> 0

const countUnique = (arr) => {
  let left = 0;
  let right = left + 1;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left = right;
      right++;
      count++;
    }
  }

  return count;
};

// OUTPUT

console.log(countUnique([1, 1, 1, 1, 1, 1, 2]));
console.log(countUnique([1, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5]));
console.log(countUnique([-2, -1, -1, 0, 1]));
console.log(countUnique([]));

// PROBLEM STATEMENT
//
// Write a function "sumZero" that takes a sorted array and return the first two values whose sum is equal to zero

const sumZero = (arr) => {
  if (arr.length < 2) {
    return [];
  }

  let left = 0;
  let right = arr.length - 1;
  for (let index = 0; index < arr.length; index++) {
    if (left === right) {
      return [];
    }

    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    }
    left++;
    right--;
  }

  return [];
};

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// console.log(sumZero([-2, -1, 0, 1, 3]));
// console.log(sumZero([1, 2, 3]));
// console.log(sumZero([3]));

// Problem Statement:
// Given a sorted array, remove the duplicates in-place so that each element appears only once and return the new length of the array.
// Example:
let nums = [1, 1, 2, 2, 3, 4, 4, 5,5,5,5,5];
// Output: 5 (Modified array: [1, 2, 3, 4, 5, _, _, _])

const removeDuplicates = (arr = []) => {
  let newArr = [];

  for (let i = 0, j = 0; j < arr.length; j++) {
    const firstElement = arr[i];
    const currElement = arr[j];

   
    if (firstElement !== currElement) {
      newArr.push(arr[i]);
      i = j;
    }
    if (j === arr.length - 1) {
      newArr.push(arr[j]);
    }
  }
  return newArr;
};

console.log("EXE --------- ", removeDuplicates(nums));
