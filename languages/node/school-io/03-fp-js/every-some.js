function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(sbt => goodUsers.some(gd => gd.id === sbt.id));
  };
}

module.exports = checkUsersValid

