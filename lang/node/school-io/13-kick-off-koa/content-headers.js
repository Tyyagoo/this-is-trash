const app = new (require("koa"))();

app.use((ctx, _) => {
  ctx.body =
    ctx.request.type === "application/json" ? { message: "hi!" } : "ok";
});

app.listen(process.argv[2]);
