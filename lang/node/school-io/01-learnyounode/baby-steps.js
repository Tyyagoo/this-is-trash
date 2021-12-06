let [trash1, trash2, ...numbers] = process.argv;
let result = numbers.reduce((prev, curr) => prev + (+curr), 0);
console.log(result);
