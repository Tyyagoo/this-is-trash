const app = new (require("koa"))();
const views = require("co-views");

const user = {
  name: {
    first: "Tobi",
    last: "Holowaychuk",
  },
  species: "ferret",
  age: 3,
};

const render = views(__dirname + "/views", {
  ext: "ejs",
});

app.use(function* () {
  this.body = yield render("user", { user });
});

app.listen(process.argv[2]);
