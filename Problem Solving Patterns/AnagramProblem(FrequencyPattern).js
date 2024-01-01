//   PROBLEM STATEMENT
//
//   Given two strings write a function to determine is the second string is an anagram of the first one

//

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1Map = {};
  let str2Map = {};
  let result = true;
  for (const i of str1) {
    if (str1Map[i]) {
      str1Map[i]++;
    } else {
      str1Map[i] = 1;
    }
  }

  for (const i of str2) {
    if (str2Map[i]) {
      str2Map[i]++;
    } else {
      str2Map[i] = 1;
    }
  }

  Object.keys(str1Map).forEach((key) => {
    if (str2Map[key] !== str1Map[key]) {
      result = false;
    }
  });

  return result;
};
console.log(isAnagram(" ", " "));
