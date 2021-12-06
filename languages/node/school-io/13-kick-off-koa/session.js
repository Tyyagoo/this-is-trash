const app = new (require("koa"))();
const session = require("koa-session");

app.keys = ["secret", "keys"];
app.use(session(app));

app.use((ctx, _) => {
  if (!ctx.session.populated) ctx.session.view = 1;
  else ctx.session.view++;

  ctx.body = `${ctx.session.view} views`;
});

app.listen(process.argv[2]);
