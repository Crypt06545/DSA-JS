// process.stdout.write('hello ')
// process.stdout.write('world') --> use to write in one line

import promptSync from "prompt-sync"; //--> to take input on terrminal

const prompt = promptSync();
const number = Number(prompt("Enter your Number :"));

for (let i = 1; i <= number; i++) {
  for (let j = 1; j <= number; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
