module.exports = function* generate(isEven) {
  let value = 1;

  while (true) {
    if (isEven) {
      while (value % 2 !== 0) ++value;
    } else {
      while (value % 2 === 0) ++value;
    }

    yield value++;
  }
};
