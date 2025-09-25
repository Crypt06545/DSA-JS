const revStting = (str) => {
  const isPalindrome = str.split("").reverse().join("") === str;
  return isPalindrome
    ? "his word is palindrome"
    : "This word is not palindrome";
};

console.log(revStting("hello"));
console.log(revStting("cddc"));
