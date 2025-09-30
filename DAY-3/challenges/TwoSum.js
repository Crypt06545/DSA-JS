const twoSum = (list, tarNum) => {
  //   console.log(list, tarNum);
  for (let i = 0; i < list.length; i++) {
    // console.log(list[i]);
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] + list[j] === tarNum) {
        // console.log(j);

        return [i, j];
      }
    }
  }
  return [];
};

console.log(twoSum([2, 3, 5, 6, 8, 9, 7, 1], 10));
