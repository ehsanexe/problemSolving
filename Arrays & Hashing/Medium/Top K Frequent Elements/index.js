/**
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};

  for (const n of nums) {
    map[n] = (map[n] ?? 0) + 1;
  }

  const freq = [];
  for (const key in map) {
    freq.push({ key, val: map[key] });
  }

  return freq
    .sort((a, b) => b.val - a.val)
    .slice(0, k)
    .map((f) => parseInt(f.key));
};

// todo- this solution is O(NLogN), there is a batter to solve this using bucket sort

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)); // [2,-1]
