module.exports = function filterForNumbers(iterable) {
  let arr = [];
  for (let val of iterable) if (typeof val === "number") arr.push(val);
  return arr;
};
