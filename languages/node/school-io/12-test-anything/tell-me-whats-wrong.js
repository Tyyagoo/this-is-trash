const assert = require("assert");
const isCoolNumber = require(process.argv[2]);

assert.ok(isCoolNumber(42), "isCoolNumber(42) must be true.");
