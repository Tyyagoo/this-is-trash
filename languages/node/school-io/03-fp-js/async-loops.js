function loadUsers(userIds, load, done) {
  const users = []
  for (let i = 0; i < userIds.length; i++) {
    setTimeout(() => {
      load(userIds[i], (user) => users.push(user));
    }, 1);
  }
  done(users);
}

module.exports = loadUsers

