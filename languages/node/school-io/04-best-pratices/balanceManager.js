var balance = 0;

module.exports = {
  isValidAmount: function (amount) {
    if (amount == null) {
      return false;
    } else {
      return true;
    }
  },

  canAfford: function (amount) {
    if (!this.isValidAmount(amount)) {
      throw new Error("Invalid Input");
    }
    return amount <= balance;
  },

  decreaseBalance: function (amount) {
    if (!this.canAfford(amount)) {
      throw new Error("Insufficient balance");
    }
    balance -= amount;
  },

  getBalance: function () {
    return balance;
  },

  increaseBalance: function (amount) {
    balance += amount;
  },
};
