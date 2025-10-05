/**
 * outter loop help us to print the every line . how many lines (column)
 * inner loop help to print what shoould print in a single row
 */

/**
 * Same Number	result += "1 "	--> 1 1 1
 *
 * Row-based	result += (i+1) + " "	--> 1 1 1, 2 2 2
 *
 * Column-based	result += (j+1) + " "	--> 1 2 3, 1 2 3
 *
 * Continuous	result += count + " "; count++	--> 1 2 3, 4 5 6
 *
 * Character	result += String.fromCharCode(65 + i) + " "	 --> A A A, B B B
 */

// numbers print
// let n = 4;
// for (let i = 1; i <= n; i++) {
//   // line
//   let row = "";
//   for (let j = 1; j <= n; j++) {
//     // row data
//     row += j;
//     // console.log(j);
//   }
//   console.log(row);
// }

// star print
// let n = 4;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// charecter print
// const chaPattern = (n) => {
//   let pattern = "";
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//       row += String.fromCharCode(65 + j);
//     }
//     pattern += row + "\n";
//   }
//   return pattern;
// };

// console.log(chaPattern(7));

// suuare patern continous manner

// const sqPattern = (num) => {
//   // num = 4 (আমরা 4x4 এর square pattern বানাবো)
//   let result = ""; // খালি string যেখানে pattern টা জমা হবে
//   let count = 1; // সংখ্যা গুলো ১ থেকে শুরু হবে

//   for (let i = 0; i < num; i++) {
//     // বাইরের loop - row (সারি) এর জন্য
//     // i = 0,1,2,3 (মোট ৪টি সারি)

//     for (let j = 0; j < num; j++) {
//       // ভিতরের loop - column (কলাম) এর জন্য
//       // j = 0,1,2,3 (প্রতি সারিতে ৪টি কলাম)
//       result += count + " "; // count এর মান result এ যোগ করি + একটা স্পেস
//       count++; // count ১ করে বাড়াই
//     }

//     result += "\n"; // প্রতিটি সারি শেষে নতুন লাইন যোগ করি
//   }

//   return result; // শেষ result টা return করি
// };

// console.log(sqPattern(4));

// const chSqPattern = (num) => {
//   let result = "";
//   let count = 65;

//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//       result += String.fromCharCode(count) + " ";
//       count++;
//     }
//     result += "\n";
//   }
//   return result;
// };

// console.log(chSqPattern(9));

// star pattern
const trStar = (num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < i; j++) {
      result += " * ";
    }
    result += "\n";
  }
  return result;
};
console.log(trStar(5));
