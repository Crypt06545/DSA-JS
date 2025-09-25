// 1. Convert number to string (toString method)
// 2. Convert String to array (split method)
// 3. Reverse the string (reverse method)
// 4. Convert array back to string (join method)
// 5. Convert string to number (parseInt method)
// 6. Return the number

const revInt = (num) => {
  const rev = parseInt(num.toString().split("").reverse().join(""));

  return rev;
};

console.log(revInt(3332));
