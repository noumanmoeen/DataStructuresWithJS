// Given two arrays return true if all the squared values of array one is present in the second array
// The order of numbers don't matter
// Example
//  [1,2,3] [9,1,4] ---> true
//  [1,2,3] [1,4] ---> false (Squares of all the values are not present)

//SOLUTION

const frequencyCounterPattern = (arr1, arr2) => {
  const values1 = {};
  const values2 = {};

  for (let i of arr1) {
    const square = i * i;
    values1[square] = values1[square] ?? 0 + 1;
  }

  for (let i of arr2) {
    values2[i] = values2[i] ?? 0 + 1;
  }

  console.log("bbbb", values1, values2);
  for (let j in values1) {
    if (!(j in values2)) {
      return false;
    }
    if (values1[j] !== values2[j]) {
      return false;
    }
  }

  return true;
};

let arr1 = [1, 2, 3];
let arr2 = [4, 6];

const result = frequencyCounterPattern(arr1, arr2);

console.log("-----------------", result);

