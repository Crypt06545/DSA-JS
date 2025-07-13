/**
 * DAY 2: Conditional Statement

Q8. Valid Voter
Q9. Shop discount
Q10. Bijli bill
Q11. TK denomination

—Ternary operator
—Nested ternary operator

switch and One case handling multiple values
—switch case can't handle float value because its precision issues
 */

// Q8. Valid Voter

// let age = Number(prompt("Input Your Age"));
// if (isNaN(age)) {
//   console.log("Wrong Input");
// } else if (age >= 18) {
//   console.log("You can Vote!");
// } else {
//   console.log("You can not Vote");
// }

// Q9. Shop discount
// let amount = Number(prompt("Enter Your Amount"));
// let disPrice;
// if (isNaN(amount) || amount <= 0) {
//   console.log("Invalid Amount! Please enter a positive number.");
// } else if (amount > 0 && amount <= 5000) {
//   console.log("There is no discount!");
// } else if (amount >= 5001 && amount <= 7000) {
//   disPrice = amount - Math.floor((amount * 5) / 100);
//   console.log(`Your discount price is ${disPrice}`);
// } else if (amount >= 7001 && amount <= 9000) {
//   disPrice = amount - Math.floor((amount * 10) / 100);
//   console.log(`Your discount price is ${disPrice}`);
// } else if (amount >= 9000) {
//   disPrice = amount - Math.floor((amount * 20) / 100);
//   console.log(`Your discount price is ${disPrice}`);
// } else {
//   console.log("something went Wrong");
// }

// Q10. Bijli bill
// let unit = Number(prompt("Enter Your Bill unit")); // ধরো: 700
// let amount = 0;

// if (unit > 400) {
//   amount += (unit - 400) * 13;
//   unit = 400;
// }
// if (unit > 200) {
//   amount += (unit - 200) * 8;
//   unit = 200;
// }
// if (unit > 100) {
//   amount += (unit - 100) * 6;
//   unit = 100;
// }
// amount += unit * 4;

// console.log("Total Bill: " + amount + " Taka");

// Q11. TK denomination
// let amount = 5234;

// if (amount >= 500) {
//   let note500 = Math.floor(amount / 500);
//   console.log("500 Taka notes: " + note500);
//   amount %= 500;
// }
// if (amount >= 200) {
//   let note200 = Math.floor(amount / 200);
//   console.log("200 Taka notes: " + note200);
//   amount %= 200;
// }
// if (amount >= 100) {
//   let note100 = Math.floor(amount / 100);
//   console.log("100 Taka notes: " + note100);
//   amount %= 100;
// }
// if (amount >= 50) {
//   let note50 = Math.floor(amount / 50);
//   console.log("50 Taka notes: " + note50);
//   amount %= 50;
// }
// if (amount >= 20) {
//   let note20 = Math.floor(amount / 20);
//   console.log("20 Taka notes: " + note20);
//   amount %= 20;
// }
// if (amount >= 10) {
//   let note10 = Math.floor(amount / 10);
//   console.log("10 Taka notes: " + note10);
//   amount %= 10;
// }
// if (amount >= 5) {
//   let note5 = Math.floor(amount / 5);
//   console.log("5 Taka coins: " + note5);
//   amount %= 5;
// }
// if (amount >= 2) {
//   let note2 = Math.floor(amount / 2);
//   console.log("2 Taka coins: " + note2);
//   amount %= 2;
// }
// if (amount === 1) {
//   console.log("1 Taka coins: " + amount);
// }

// ternary operator ? :
var age = age >= 18 ? "You can drive " : "you can not drive";
