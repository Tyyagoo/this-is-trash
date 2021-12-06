var _ = require("lodash");

const lowestIncome = (arr) => _.sortBy(arr, (freelancer) => freelancer.income);

var worker = function (freelancers) {
  const average =
    _.reduce(freelancers, (acc, { income }) => acc + income, 0) /
    _.size(freelancers);

  const underperform = _.filter(freelancers, ({ income }) => income <= average);
  const overperform = _.filter(freelancers, ({ income }) => income > average);

  return {
    average,
    underperform: lowestIncome(underperform),
    overperform: lowestIncome(overperform),
  };
};

module.exports = worker;
