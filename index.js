// index.js
class Counter {
  constructor(initialNumber) {
    this.count = initialNumber;
  }

  countDown() {
    if (this.count > 0) {
      this.count--;
    }
    return this.count;
  }
}

module.exports = Counter;
