module.exports = function* multiplier() {
  // `yield` all integers multiplied by the value passed in via `.next()`
  let value = 1;
  let multiplier = 1;

  while (true) {
    multiplier = yield value++ * multiplier;
    multiplier = multiplier ?? 1;
  }
};
