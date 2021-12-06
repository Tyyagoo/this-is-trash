const app = new (require("koa"))();

app.use(errorHandler());

app.on("error", (err, ctx) => {
  console.log(`${err} on context: ${JSON.stringify(ctx)}`);
});

app.use(function* () {
  if (this.path === "/error") throw new Error("ooops");
  this.body = "OK";
});

function errorHandler() {
  return function* (next) {
    try {
      yield next;
    } catch (err) {
      this.status = 500;
      this.body = "internal server error";
      this.app.emit("error", err, this);
    }
  };
}

app.listen(process.argv[2]);
