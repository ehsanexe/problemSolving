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
O (n log n) solution:
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
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};
  const bucket = Array.from({ length: nums.length + 1 }, () => []);

  for (const number of nums) {
    map[number] = (map[number] ?? 0) + 1;
  }

  for (const key in map) {
    bucket[map[key]].push(parseInt(key));
  }

  const res = [];

  for (let i = bucket.length - 1; i >= 0; i--) {
    for (b of bucket[i]) {
      res.push(b);
      if (res.length === k) {
        return res;
      }
    }
  }
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)); // [2,-1]
