// let arr = [10, 3, 5, 4, 2, 6, 7];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// second max

// const secMax = (arr) => {
//   let max = -Infinity;
//   let secondMax = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       secondMax = max;
//       max = arr[i];
//     } else if (arr[i] > secMax && arr[i] !== max) {
//       secMax = arr[i];
//     }
//   }
//   return secondMax;
// };

// console.log(secMax([2, 35, 75, 4, 5, 122, 400]));

// const reverseArray = (arr) => {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr;
// };

// console.log(reverseArray([2, 5, 7, 4, 9]));
const moveZeroOneInPlace = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] === 1 && arr[right] === 0) {
      // swap করো
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    if (arr[left] === 0) left++;
    if (arr[right] === 1) right--;
  }

  return arr;
};

console.log(moveZeroOneInPlace([0, 1, 1, 0, 1, 0, 0, 1]));
// Output: [0,0,0,0,1,1,1,1]
