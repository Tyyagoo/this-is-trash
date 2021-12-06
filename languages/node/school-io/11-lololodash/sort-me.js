var _ = require("lodash");

var worker = function (sales) {
  return _.sortBy(sales, (sale) => 1 / sale.quantity);
};

module.exports = worker;
