/**
 * outter loop help us to print the every line . how many lines (column)
 * inner loop help to print what shoould print in a single row
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
const chaPattern = (n) => {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += String.fromCharCode(65 + j);
    }
    pattern += row + "\n";
  }
  return pattern;
};

console.log(chaPattern(7));
