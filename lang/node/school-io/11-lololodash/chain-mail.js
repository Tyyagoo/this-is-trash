var _ = require("lodash");

var worker = function (words) {
  return _.chain(words)
    .map((val) => (val + "chained").toUpperCase())
    .sort()
    .value();
};

module.exports = worker;
