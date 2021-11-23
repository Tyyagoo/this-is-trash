function curryN(fn, n) {
  n = n ?? fn.length;
  return function curried_fn(...args) {
    if (args.length >= n) return fn.apply(this, args);
    return function curry(...more_args) {
      return curried_fn.apply(this, [...args, ...more_args]);
    }
  }
}

module.exports = curryN

