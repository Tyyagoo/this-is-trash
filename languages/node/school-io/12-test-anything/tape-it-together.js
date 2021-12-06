const test = require("tape");
const fancify = require(process.argv[2]);

test("Fancify should work properly. (nice test bro!)", (t) => {
  t.equals(fancify("Hello"), "~*~Hello~*~");
  t.equals(fancify("Hello", true), "~*~HELLO~*~");
  t.equals(fancify("Hello", false, "!"), "~!~Hello~!~");
  t.end();
});
