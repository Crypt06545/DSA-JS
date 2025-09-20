let res = new Array(9);
res.fill(false);

for (let i = 0; i < res.length; i++) {
  const rand = Math.floor(Math.random() * 10 + 1);
  //   console.log(rand);
  res[i] = rand > 5 ? "X" : "O";
}
console.log(res);
