const app = new (require("koa"))();

app.use(responseTime());
app.use(upperCase());

app.use(function* () {
  this.body = "hello koa";
});

function responseTime() {
  return function* (next) {
    const startTime = new Date().getTime();
    yield next;
    this.set("X-Response-Time", new Date().getTime() - startTime);
  };
}

function upperCase() {
  return function* (next) {
    yield next;
    this.body = this.body.toUpperCase();
  };
}

app.listen(process.argv[2]);
