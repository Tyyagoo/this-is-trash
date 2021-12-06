const app = new (require("koa"))();
const PORT = process.argv[2];

app.listen(PORT);

app.use(function* () {
  this.body = "hello koa";
});
