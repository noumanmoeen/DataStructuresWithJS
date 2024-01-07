// PROBLEM STATEMENT

// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

const capitalizeFirst = (arr) => {
  let result = [];

  const capitalize = (arr) => {
     if (arr[0] === undefined) {
       return;
    }

    let tempArr = arr[0].split("");
    let upper = tempArr[0].toUpperCase();
    tempArr[0] = upper;
    arr[0] = tempArr.join("");
     result.push(tempArr.join(""));

    capitalize(arr.splice(1));
  };

  capitalize(arr);
  return result;
};

console.log((capitalizeFirst(["nouman", "moeen"])));
