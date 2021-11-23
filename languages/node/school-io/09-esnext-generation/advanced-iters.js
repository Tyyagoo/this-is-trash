module.exports = function generate(isEven) {
  return {
    isEven,
    last: 1,
    next(swap) {
      if (swap) this.isEven = !this.isEven;

      if (this.isEven) {
        while (this.last % 2 !== 0) ++this.last;
      } else {
        while (this.last % 2 === 0) ++this.last;
      }
      return { value: this.last++, done: false };
    },
  };
};

/*
How could generate() be rewritten to accept an infinite Iterable (that gives
the set of all positive integers), and continue to return just the odd or even
numbers?

Hint: Remember you can call .next() as many times as you like on the
passed-in Iterable's Iterator.
*/

// prob works, I didn't test
function generate(isEven, iterable) {
  return {
    isEven,
    next(swap) {
      if (swap) this.isEven = !this.isEven;
      let value = iterable.next();
      if (isEven) {
        while (value % 2 !== 0) value = iterable.next();
      } else {
        while (value % 2 === 0) value = iterable.next();
      }
      return { value, done: false };
    },
  };
}
