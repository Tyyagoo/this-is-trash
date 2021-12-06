const app = new (require("koa"))();
const parse = require("co-body");

app.use(function* (next) {
  const body = yield parse(this);
  this.body = body.name.toUpperCase();
});

app.listen(process.argv[2]);
