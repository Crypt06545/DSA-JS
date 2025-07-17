// process.stdout.write('hello ')
// process.stdout.write('world') --> use to write in one line

import promptSync from "prompt-sync"; //--> to take input on terrminal

const prompt = promptSync();
const number = Number(prompt("Enter your Number :"));

// base prattern
// for (let i = 1; i <= number; i++) {
//   // console.log(i);

//   for (let j = 1; j <= number; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// right angel traingle
// for (let i = 1; i <= number; i++) {
//   //   console.log(i, "*");
//   for (let j = 1; j <= i; j++) {
//     // process.stdout.write("* ");
//     process.stdout.write(j + " ");
//     // console.log(j,i);
//   }
//   console.log();
// }


// alphabet angel traingle
for (let i = 1; i <= number; i++) {
  //   console.log(i, "*");
  let asci = 65
  for (let j = 1; j <= i; j++) {
    // process.stdout.write("* ");
    process.stdout.write(String.fromCharCode(asci) + " ");
    asci++
    // console.log(j,i);
  }
  console.log();
}
