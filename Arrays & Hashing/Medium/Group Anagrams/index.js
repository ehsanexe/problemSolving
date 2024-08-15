/**

Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};

  for (s of strs) {
    const count = Array(26).fill(0); // creates array of length 26, initialized at 0. e.g: [0, 0, 0...]

    for (c of s) {
      // char code of 'a' is 65, so 65-65=0 so 'a' will be stored at 0 index, 'b' 66-65=1 at index1 and so on
      count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = count.join("#"); // e.g s:'eat' key: '1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0'

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(s);
  }

  return Object.values(map); // returns an array of values of an object
};

// solution time complexity: O (m*n)

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
