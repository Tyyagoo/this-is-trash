function curry(fn) {
  return function curried() {
    const args = arguments;
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return function () {
      return curried.apply(this, [...args, ...arguments]);
    };
  };
}

module.exports = curry;
