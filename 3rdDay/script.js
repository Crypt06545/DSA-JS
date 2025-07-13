/**
 * : —loop
—For loop
Q. print n hello worlds
Q. One to n number and vice versa
Q. Sum of n natural numbers and factorial of number
Q. Factors of number
Q. Prime number
—break and continue
—while loop
Q. sum of digit
Q. reverse of number
Q. strong number
—do-while
Q. Repeat hello
Q. sasta Calculator
Q. Guess the number
 */
// let i =23
// for(i;i<=54;i++){
//     console.log(i);

// }

// let i = 200;
// for (i; 100<=i; i--) {
//   console.log(i);
// }

// Sum of n natural numbers
let n = Number(prompt("Enter Your Number"));

if (isNaN(n)) {
  console.log("Invalid Input");
} else {
  if (n > 0) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    console.log(sum);
  } else {
    console.log("NUmber should be positive");
  }
}
