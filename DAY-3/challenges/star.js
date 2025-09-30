/**
 * **********
 **********
 **********
 **********
 **********
 */

// let n = 4;
// for (let i = 0; i < 5; i++) {
//   // column bumbers
//   let row = "";
//   for (let j = 0; j < 10; j++) {
//     // row numbers
//     row += "*";
//   }
//   console.log(row);
// }

// *
// **
// ***
// ****

// i = 4; // [0,1,2,3]
// i <= 4; //[0,1,2,3,4] // i <i
// let n = 4;
// for (i = 0; i < n; i++) {
//   let row = "";
//   for (j = 0; j < i + 1; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// 1
// 12
// 123
// 1234
// let n = 4;
// for (i = 0; i < n; i++) {
//   let row = "";
//   for (j = 0; j < i + 1; j++) {
//     row += (j + 1);
//   }
//   console.log(row);
// }

let n = 4;
for (i = 0; i < n; i++) {
  let row = "";
  for (j = 0; j < i + 1; j++) {
    row += i + 1;
  }
  console.log(row);
}
