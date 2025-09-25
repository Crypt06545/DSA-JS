// 1. Convert string to array (split method)
// 2. Reverse the array (reverse method)
// 3. Convert array back to string (join method)

// const reverseString = (str) => str.split("").reverse().join("");
// console.log(reverseString("hello"));


const revStting = (str) => {
  const isPalindrome = str.split("").reverse().join("") === str;
  return isPalindrome
    ? "his word is palindrome"
    : "This word is not palindrome";
};

console.log(revStting("hello"));
console.log(revStting("cddc"));
