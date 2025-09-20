// Assignment operator
// let x = 10;

// console.log("Initial value:", x);

// // +=
// console.log("\nUsing += ");
// console.log("Old value:", x);
// x += 5; // x = x + 5
// console.log("New value:", x);

// // -=
// console.log("\nUsing -= ");
// console.log("Old value:", x);
// x -= 3; // x = x - 3
// console.log("New value:", x);

// // *=
// console.log("\nUsing *= ");
// console.log("Old value:", x);
// x *= 2; // x = x * 2
// console.log("New value:", x);

// // /=
// console.log("\nUsing /= ");
// console.log("Old value:", x);
// x /= 4; // x = x / 4
// console.log("New value:", x);

// // %=
// console.log("\nUsing %= ");
// console.log("Old value:", x);
// x %= 4; // x = x % 4
// console.log("New value:", x);

// // **=
// console.log("\nUsing **= ");
// console.log("Old value:", x);
// x **= 3; // x = x ** 3
// console.log("New value:", x);

// Assignment Operator
// let a = 10;
// let b = 3;

// console.log("a:", a, "b:", b);

// console.log("\nUsing +");
// console.log("a + b =", a + b);

// console.log("\nUsing -");
// console.log("a - b =", a - b);

// console.log("\nUsing *");
// console.log("a * b =", a * b);

// console.log("\nUsing /");
// console.log("a / b =", a / b);

// console.log("\nUsing %");
// console.log("a % b =", a % b);

// console.log("\nUsing **");
// console.log("a ** b =", a ** b);

// console.log("\nUsing ++ (increment)");
// console.log("Before:", a);
// console.log("a++ returns:", a++); // return old then +1
// console.log("After:", a);

// console.log("\nUsing -- (decrement)");
// console.log("Before:", b);
// console.log("b-- returns:", b--); // return old then -1
// console.log("After:", b);

// let a = 5;
// let b = "5";
// let c = 7;

// console.log("a =", a, ", b =", b, ", c =", c);

// // == (value only)
// console.log("\nUsing ==");
// console.log("a == b :", a == b); // true

// // === (value + type)
// console.log("\nUsing ===");
// console.log("a === b :", a === b); // false

// // != (not equal - value)
// console.log("\nUsing !=");
// console.log("a != b :", a != b); // false

// // !== (not equal - value + type)
// console.log("\nUsing !==");
// console.log("a !== b :", a !== b); // true

// // >
// console.log("\nUsing >");
// console.log("c > a :", c > a); // true

// // <
// console.log("\nUsing <");
// console.log("a < c :", a < c); // true

// // >=
// console.log("\nUsing >=");
// console.log("a >= 5 :", a >= 5); // true

// // <=
// console.log("\nUsing <=");
// console.log("c <= 5 :", c <= 5); // false


// let marks = 85;
// let passed = true;
// let hasScholarship = false;

// console.log("marks =", marks, ", passed =", passed, ", hasScholarship =", hasScholarship);

// // && (AND)
// console.log("\nUsing &&");
// console.log("marks >= 80 && passed :", marks >= 80 && passed); 
// // true && true → true

// console.log("marks >= 90 && hasScholarship :", marks >= 90 && hasScholarship); 
// // false && false → false

// // || (OR)
// console.log("\nUsing ||");
// console.log("marks >= 90 || passed :", marks >= 90 || passed); 
// // false || true → true

// console.log("hasScholarship || passed :", hasScholarship || passed); 
// // false || true → true

// // ! (NOT)
// console.log("\nUsing !");
// console.log("!passed :", !passed); // !true → false
// console.log("!hasScholarship :", !hasScholarship); // !false → true


let score = 5;
let level = 10;

console.log("Initial score =", score, ", level =", level);

// Pre-increment
console.log("\nUsing ++score (Pre-increment)");
console.log("Value returned:", ++score); // score = 6, return 6
console.log("After operation score =", score);

// Post-increment
console.log("\nUsing level++ (Post-increment)");
console.log("Value returned:", level++); // return 10, then level = 11
console.log("After operation level =", level);

// Pre-decrement
console.log("\nUsing --score (Pre-decrement)");
console.log("Value returned:", --score); // score = 5, return 5
console.log("After operation score =", score);

// Post-decrement
console.log("\nUsing level-- (Post-decrement)");
console.log("Value returned:", level--); // return 11, then level = 10
console.log("After operation level =", level);
