const test = require("tape");
const repeatCallback = require(process.argv[2]);

test("Must call callback 1 time.", (t) => {
  t.plan(1);
  repeatCallback(1, () => t.pass("callback called"));
  t.end();
});

test("Must call callback 5 times.", (t) => {
  t.plan(5);
  repeatCallback(5, () => t.pass("callback called"));
  t.end();
});
