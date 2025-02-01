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
  