const app = new (require("koa"))();

app.keys = ["secret", "keys"];

app.use((ctx, next) => {
  let views = ~~ctx.cookies.get("view", { signed: true }) + 1;
  ctx.cookies.set("view", views, { signed: true });
  ctx.body = `${views} views`;
});

app.listen(process.argv[2]);
