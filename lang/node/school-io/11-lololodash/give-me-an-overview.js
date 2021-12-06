var _ = require("lodash");

var worker = function (orders) {
  return _.chain(orders)
    .reduce(
      (acc, curr) => ({
        ...acc,
        [curr.article]: (acc[curr.article] ?? 0) + curr.quantity,
      }),
      {}
    )
    .flatMap((total_orders, key) => ({
      article: parseInt(key),
      total_orders,
    }))
    .sortBy(({ total_orders }) => -total_orders)
    .value();
};

module.exports = worker;
