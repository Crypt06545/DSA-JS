const oddEven = (num) => {
  if (num > 0 && num % 2 === 0) {
    console.log("This is a even number");
  } else if (num > 0 && num % 2 !== 0) {
    console.log("This is odd number");
  } else {
    console.log("Enter a correct number");
  }
};

oddEven(52)
