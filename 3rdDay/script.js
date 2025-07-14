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
// let n = Number(prompt("Enter Your Number"));

// if (isNaN(n)) {
//   console.log("Invalid Input");
// } else {
//   if (n > 0) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     console.log(sum);
//   } else {
//     console.log("NUmber should be positive");
//   }
// }

// factorial of n numbers
// let n = Number(prompt("Enter Your Number"));

// if (isNaN(n)) {
//   console.log("Invalid Input");
// } else {
//   if (n > 0) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//       fact *= i;
//     }
//     console.log(fact);
//   } else {
//     console.log("NUmber should be positive");
//   }
// }
// let n = Number(prompt("Enter Your Number"));

// if (isNaN(n)) {
//   console.log("Invalid Input");
// } else {
//   if (n > 0) {
//     for (let i = 1; i <= Math.floor(n / 2); i++) {
//       if (n % i === 0) {
//         console.log(i);
//       }
//     }
//     console.log(n);

//   } else {
//     console.log("NUmber should be positive");
//   }
// }
let n = Number(prompt("Enter Your Number"));

if (isNaN(n)) {
  console.log("Invalid Input");
} else {
  if (n > 0) {
    console.log(fnIsPrime(n));

    // let isPrime = true;
    // for (let i = 2; i <= Math.floor(n / 2); i++) {
    //   if (n % 1 === 0) {
    //     isPrime = false;
    //     break;
    //   }
    // }
    // console.log(isPrime);
  } else {
    console.log("NUmber should be positive");
  }
}

function fnIsPrime(n) {
  if (n <= 1) return false; // 0, 1 are not prime
  if (n === 2) return true; // 2 is prime
  if (n % 2 === 0) return false; // Even number (except 2) → not prime

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false; // divisible → not prime
  }

  return true;
}
