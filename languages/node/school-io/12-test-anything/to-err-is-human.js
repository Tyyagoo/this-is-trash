const test = require("tape");
const feedCat = require(process.argv[2]);

test("Must be possible feed the cat.", (t) => {
  t.doesNotThrow(() => feedCat("milk"));
  t.equals(feedCat("milk"), "yum");
  t.end();
});

test("Must throw an error when feeding cat with 'chocolate'", (t) => {
  t.throws(() => feedCat("chocolate"));
  t.end();
});
