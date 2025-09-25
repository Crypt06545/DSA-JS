class myArr {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // push method
  push(item) {
    this.data[this.length] = item;
    // console.log("---- ", items);
    this.length++;
    return this.length;
  }

  // pop method
  pop() {
    const lastEl = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastEl;
  }

  //get methid
  get(ind) {
    const el = this.data[ind];
    return el;
  }

  // shift mehtod
  shift() {
    const firstEl = this.data[0];

    // re-indexing
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstEl;
  }
  deleteByIndex(ind) {
    // 1. Delete করা element টা save করা
    const deletedElement = this.data[ind];

    // 2. ডান দিকের elements বামে shift করা
    for (let i = ind; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]; // ✅ সঠিক
    }

    // 3. শেষ element delete করা
    delete this.data[this.length - 1];

    // 4. length কমানো
    this.length--;

    // 5. deleted element return করা
    return deletedElement;
  }
}

const myNewArr = new myArr();
myNewArr.push("apple");
myNewArr.push("banana");
myNewArr.push("grape");
// console.log(myNewArr);

// console.log(myNewArr.pop());
// console.log(myNewArr.get(0));
// console.log(myNewArr.shift());
myNewArr.deleteByIndex(2);
console.log(myNewArr);
