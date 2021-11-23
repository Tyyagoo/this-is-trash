const max = process.argv[2];

function fizzbuzz(n) {
  let out = "";

  if (n % 3 == 0) out += "Fizz";
  if (n % 5 == 0) out += "Buzz";

  return out || n.toString();
}

let FizzBuzz = {
  [Symbol.iterator]() {
    let curr = 0;
    return {
      next() {
        curr++;
        if (curr <= max) return { done: false, value: fizzbuzz(curr) };
        return { done: true };
      },
    };
  },
};

for (var n of FizzBuzz) console.log(n);
