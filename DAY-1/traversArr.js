/**
 * @Title: Traverse Array Elements
 */

// const arr = [1, 2, 3, 4, 5];
// const arr = ["apple", "banana", "save", "guava", "honey"];
// const n = arr[3];
// const x = arr[2];
// const m = 1,
//   y = 0;
// console.log(n, x, arr[m] + arr[y]);
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   // console.log(i);
//   // console.log(arr[i]);
//   sum += arr[i];
// }
// console.log(sum);

const nums = [3, 2, 4];
const target = 6;
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // return [i, j, nums[i], nums[j]];
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(nums, target));
