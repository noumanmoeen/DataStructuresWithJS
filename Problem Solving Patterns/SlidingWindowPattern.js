// Write a function called maxSubArray which acepts an array of integrs and a number n. The function should calculate the maximum sum if n consecutive numbers in the given array
// maxSubArray([1,2,5,2,8,1,5],1) ----> 10
// maxSubArray([4.2,1,6],1) ----> 6
// maxSubArray([],1) ----> null

const maxSubArray = (arr, n) => {
  let sum = 0;
  let temp = 0;
  for (let i = 0, b = n - 1; i < arr.length; i++, b++) {
    console.log("herere ", i, b);
    if (i === b) {
      if (temp > sum) {
        sum = temp;
      }
    }
    temp = temp + arr[i];
  }
  return sum;
};

let temp = [1, 2, 5, 2, 8, 1, 5]
// console.log(maxSubArray([1, 2, 5, 2, 8, 1, 5], 3));
console.log(temp.splice(1));
console.log(temp.slice(1));
console.log(temp)
// console.log(maxSubArray([4.2, 1, 6], 1));
// console.log(maxSubArray([1, 2, 5, 2, 8, 1, 5], 4));


function lengthOfLongestSubstring(s) {
  let charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
      while (charSet.has(s[right])) {
          charSet.delete(s[left]);
          left++;
      }
      charSet.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Example usage
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
