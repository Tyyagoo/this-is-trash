function throwException(coinType) {
  throw new Error("Unrecognized coin " + coinType);
}

module.exports = {
  getAmount: function (coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter

    return (
      {
        p: 1,
        n: 5,
        d: 10,
        q: 25,
      }[coinType] ?? throwException(coinType) // this looks worst than sw1tch LOL
    );
  },
};
