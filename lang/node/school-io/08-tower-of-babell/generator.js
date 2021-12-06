/*
/tmp/_babel_29543/generator.js:9
var _marked = /*#__PURE__*'/regeneratorRuntime.mark(generator);
                           ^

ReferenceError: regeneratorRuntime is not defined
    at Object.<anonymous> (/tmp/_babel_29543/generator.js:9:28)
    at Module._compile (node:internal/modules/cjs/loader:1097:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1149:10)
    at Module.load (node:internal/modules/cjs/loader:975:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47

Node.js v17.1.0
*/

const max = process.argv[2];

function fizzbuzz(n) {
  let out = "";

  if (n % 3 == 0) out += "Fizz";
  if (n % 5 == 0) out += "Buzz";

  return out || n.toString();
}

function* generator() {
  let curr = 0;
  while (curr < max) yield fizzbuzz(curr++);
}

let fibonacci = generator();

for (var n of fibonacci) console.log(n);
