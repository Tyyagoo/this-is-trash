const app = new (require("koa"))();
const fs = require("fs");

app.use(async (ctx, next) => {
  if (ctx.request.path !== "/json") return await next();
  ctx.body = { foo: "bar" };
});

app.use(async (ctx, next) => {
  if (ctx.request.path !== "/stream") return await next();
  ctx.body = fs.createReadStream(process.argv[3]);
});

app.use(async (ctx, next) => {
  ctx.status = 404;
  ctx.body = { message: "Page not found." };
});

app.listen(process.argv[2]);
