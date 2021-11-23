function throwException(coinType) {
  throw new Error("Unrecognized coin " + coinType);
}

function getAmount(coinType) {
  // [p]enny - [n]ickel - [d]ime - [q]uarter
  return (
    {
      p: 1,
      n: 5,
      d: 10,
      q: 25,
    }[coinType] ?? throwException(coinType) // this looks worst than sw1tch LOL
  );
}

function conversionStep(amount, acc) {
  if (amount <= 0) return acc;
  const currentConversion = {
    // welcome to javascript
    [amount >= getAmount("p")]: "p",
    [amount >= getAmount("n")]: "n",
    [amount >= getAmount("d")]: "d",
    [amount >= getAmount("q")]: "q",
  }.true;

  console.log(`${amount} -> ${currentConversion}`);

  return conversionStep(amount - getAmount(currentConversion), [
    ...acc,
    currentConversion,
  ]);
}

module.exports = {
  getAmount,
  convertToChange: function (amount) {
    return conversionStep(amount, []);
  },
};
