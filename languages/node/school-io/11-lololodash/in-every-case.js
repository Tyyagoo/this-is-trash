var _ = require("lodash");

const population = (pop) => {
  return {
    [true]: "small",
    [pop > 0.5]: "med",
    [pop > 1]: "big",
  }.true;
};

var worker = function (towns) {
  return _.forEach(
    towns,
    (t) =>
      (t.size = {
        [true]: "small",
        [t.population > 0.5]: "med",
        [t.population > 1]: "big",
      }.true)
  );
};

module.exports = worker;
