var _ = require("lodash");

var worker = function (comments) {
  return _.chain(comments)
    .groupBy("username")
    .flatMap((obj, username) => ({ username, comment_count: _.size(obj) }))
    .sortBy((obj) => -obj.comment_count)
    .value();
};

module.exports = worker;
