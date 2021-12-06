function duckCount() {
  return Array.prototype.reduce.call(arguments,
     (prev, curr) => prev + (+Object.prototype.hasOwnProperty.call(curr, 'quack')), 0);
}

module.exports = duckCount

