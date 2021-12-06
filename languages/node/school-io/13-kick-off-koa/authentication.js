const app = new (require("koa"))();
const parse = require("co-body");
var session = require("koa-session");

app.keys = ["secret1", "secret2", "secret3"];
app.use(session(app));

app.use(function* (next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status ?? 500;
    this.body = err.message;
  }
});

app.use(function* (next) {
  if (this.request.path !== "/") return yield next;

  if (this.session.authenticated) {
    this.body = "hello world";
  } else {
    const err = new Error("Not logged in.");
    err.status = 401;
    throw err;
  }
});

app.use(function* (next) {
  if (this.request.path !== "/login") return yield next;
  if (this.request.method === "GET") {
    this.body =
      '<form action="/login" method="POST">\
      <input name="username" type="text" value="username">\
      <input name="password" type="password" placeholder="The password is \'password\'">\
      <button type="submit">Submit</button>\
    </form>';
    return;
  } else if (this.request.method === "POST") {
    const body = yield parse(this);
    if (body.username === "username" && body.password === "password") {
      this.session.authenticated = true;
      return this.redirect("/");
    }
  }
  const err = new Error("Invalid login request");
  err.status = 400;
  throw err;
});

app.use(function* (next) {
  if (this.request.path !== "/logout") return yield next;
  this.session.authenticated = false;
  this.redirect("/login");
});

app.use(function* (next) {
  this.status = 404;
  this.body = "Page not found.";
});

app.listen(process.argv[2]);
