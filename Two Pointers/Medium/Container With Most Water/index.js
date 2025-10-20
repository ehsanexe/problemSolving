/*
You are given an integer array heights where heights[i] represents the height of the i'th bar.

You may choose any two bars to form a container. Return the maximum amount of water a container can store.

Example 1:
Input: height = [1,7,2,5,4,7,3,6]
Output: 36

Example 2:
Input: height = [2,2,2]
Output: 4

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArea = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let max = 0;

  while (l < r) {
    const length = r - l;
    const height = Math.min(nums[r], nums[l]);
    const area = length * height;

    max = Math.max(area, max);

    if (nums[l] < nums[r]) {
      l++;
    } else {
      r--;
    }
  }

  return max;
};

console.log(maxArea([1, 7, 2, 5, 4, 7, 3, 6])); //36
console.log(maxArea([2, 2, 2])); //4
