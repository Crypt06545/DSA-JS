const oddEven = (num) => {
  if (num > 0 && num % 2 === 0) {
    console.log("This is a even number");
  } else if (num > 0 && num % 2 !== 0) {
    console.log("This is odd number");
  } else {
    console.log("Enter a correct number");
  }
};

// oddEven(52)

const allEven = (num) => {
  const res = []; // to get fresh result every time we need to call it inner function
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      res.push(num[i]);
      // console.log(`The even number is [${num[i]}]`);
    }
  }
  console.log(res);
};

// allEven([2, 3, 4, 6, 8]);
// console.log(num);

const allNeg = (num) => {
  const negNumber = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      negNumber.push(num[i]);
    }
  }
  return negNumber;
};

// const res = allNeg([45, 46, -3, 5, -7, -10]);
// console.log(res);

const smallNum = (num) => {
  let smNum = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] < smNum) {
      smNum = num[i];
    }
  }
  console.log(smNum);
};

// smallNum([45, 46, -3, 5, -7, -10]);

const lNumber = (num) => {
  let lNum = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > lNum) {
      lNum = num[i];
    }
  }
  console.log(lNum);
};
// lNumber([45, 46, -3, 5, -7, -10]);

// const fLargest = (num) => {
//   let firLarge = -Infinity;
//   let sLarge = -Infinity;

//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > firLarge) {
//       // নতুন largest পেলে আগেরটাকে second largest করো
//       sLarge = firLarge;
//       firLarge = num[i];
//     } else if (num[i] > sLarge && num[i] < firLarge) {
//       // largest না হলে second largest কিনা চেক করো
//       sLarge = num[i];
//     }
//   }

//   console.log("Largest:", firLarge);
//   console.log("Second Largest:", sLarge);
// };

// fLargest([34, 5, 5, 7, 8, 9, 4]);
// // Output: Largest: 34, Second Largest: 9

const secondLargest = (arr) => {
  let fLargest = -Infinity;
  let sLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > fLargest) {
      sLargest = fLargest;
      fLargest = arr[i];
    } else if (arr[i] > sLargest) {
      sLargest = arr[i];
    }
  }
  return sLargest;
};

console.log(secondLargest([2, 4, 6, 8, 4, 3, 5]));
