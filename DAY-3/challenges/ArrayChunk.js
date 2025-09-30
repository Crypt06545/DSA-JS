const chukedArray = (array, size) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    // console.log(chunk);
    chunked.push(chunk);
    index += size;
  }
  return chunked
};

console.log(chukedArray([1, 3, 4, 5, 6, 8, 9], 2));
