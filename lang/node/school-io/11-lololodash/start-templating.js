var _ = require("lodash");

const template = _.template("Hello <%= name %> (logins: <%= logins %>)");

var worker = function (user) {
  return template({ ...user, logins: _.size(user.login) });
};

module.exports = worker;
