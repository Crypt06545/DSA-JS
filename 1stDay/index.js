/**type Coercion */
// const value1 = "5";
// const value2 = 9;
// let sum = value1 + value2;

// console.log(sum);
// sum = Number(value1) + value2;
/**
 * Type coercion is the automatic or implicit conversion of values from
 * one data type to another (such as strings to numbers). Type conversion
 * is similar to type coercion because they both convert values from one data
 * type to another with one key difference — type coercion is implicit whereas type conversion can be
 * either implicit or explicit.
 */

/**accept and print the number */
// let age = prompt("What is your age"); Number is a function thats can convert any number which can convert to number
// let age = Number(prompt("What is your age"));
// console.log(typeof age, age);

// type casting or type conversion
// Type casting and type conversion are related concepts in programming, but they have distinct differences. Type casting refers to the process where a data type is converted into another data type by the programmer using a casting operator.
//  This process can be applied to both compatible and incompatible data types, and it often involves explicit conversion where the programmer manually specifies the conversion.
//  On the other hand, type conversion is typically performed by the compiler and is usually implicit, meaning it happens automatically without the need for a casting operator.
//  Type conversion is generally used when converting between compatible data types, and it is considered a widening conversion, where the destination data type is larger than the source data type.

// swapping
// let a = 20;
// let b = 10;
// [a, b] = [b, a];
// console.log(a, b);

// // console.log(a);

// a = a + b;
// b = a - b;
// console.log(a, b);

// math function
// console.log(Math.round(10.5));
// console.log(Math.ceil(10.3));
// console.log(Math.floor(20.9));
// console.log(Math.trunc(30.9));
// console.log(Math.pow(2, 6)); //2 ^ 6
// console.log(Math.sqrt(25));
// console.log(Math.abs(-1));
// console.log(Math.max(23, 32, 4, 53, 54, 68));
// console.log(Math.min(34, 3, 43, 5, 6, 56));
// console.log(Math.trunc(Math.random() * 900000 + 100000)); //grnerate OTP

// calculate area and perimeter of rectangle
// let a = 5;
// let b = 7;
// console.log('area '+ (a*b));
// console.log(2*(a+b));

// area of triangle by heron's formula
/**
 *
 */
let a = 40;
let b = 20;
let c = 35;

let s = (a + b + c) / 2;
console.log(s);

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
// console.log(Math.round(area));

// circumference of circle (The circumference of a circle is calculated using the formula:)

// C=2πr

let radius = 5;
let circumference = (2 * Math.PI * r).toFixed(2);

console.log(circumference);
