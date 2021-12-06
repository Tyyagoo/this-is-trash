var _ = require("lodash");

var worker = function (towns) {
  const result = {
    hot: [],
    warm: [],
  };

  _.forEach(towns, (t, key) => {
    const every = _.every(t, (temp) => temp > 19);
    const some = _.some(t, (temp) => temp > 19);

    if (every) result.hot.push(key);
    if (some && !every) result.warm.push(key);
  });

  return result;
};

module.exports = worker;
