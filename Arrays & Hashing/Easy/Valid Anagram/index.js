// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let countS = {};
  let countT = {};

  for (let index = 0; index < s.length; index++) {
    countS[s[index]] =
      countS[s[index]] !== undefined ? countS[s[index]] + 1 : 1;
    countT[t[index]] =
      countT[t[index]] !== undefined ? countT[t[index]] + 1 : 1;
  }

  for (const key in countS) {
    if (countS[key] !== countT[key]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("rat", "car")); //false
