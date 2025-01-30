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

// Container With Most Water - Problem Breakdown & Solution
// Problem Statement:
// You are given an array height[] of positive integers, where each element represents the height of a vertical line on a 2D plane.
//  The width between two lines is determined by their indices. Your task is to find two lines that,
//  together with the x-axis, form a container that holds the maximum amount of water.

// Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49
const exp = [8, 5, 10, 21, 5, 21, 3];
const exp2 = [1, 4, 5, 20, 5, 6, 21];
const exp3 = [1,1];
const exp4 = [5, 4, 3, 2, 1];
const exp5 = [5, 5, 5, 5, 5];

const findArea = (l, h) => {
  return l * h;
};

const findHeights = (heights = []) => {
  let i = 0;
  let j = heights.length - 1;
  let area = 0;

  while (i !== j) {
    const iHeight = heights[i]
    const jHeight = heights[j]
    const temp = findArea(Math.min(iHeight, jHeight), j - i);

    if (temp > area) {
      area = temp;
    }
    if (iHeight < jHeight) {
      i++;
    } else {
      j--;
    }

   
  }
  return area;
};

console.log("EXP 1 ------", findHeights(exp));
console.log("EXP 2 ------", findHeights(exp2));
console.log("EXP 3 ------", findHeights(exp3));
console.log("EXP 4 ------", findHeights(exp4));
console.log("EXP 5 ------", findHeights(exp5));
