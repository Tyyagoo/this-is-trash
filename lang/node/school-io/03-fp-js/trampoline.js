function repeat(operation, num) {
  // now this is an "lazy" recursion. you can execute that to get another function, or the final value
  // if u get another function, execute that again, if you get an value, your computation is complete
  return function() {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }
}

function trampoline(fn) {
  while (fn && typeof fn === 'Function') {
    fn = fn();
  }
  return fn;
}

module.exports = function(operation, num) {
  return trampoline(repeat(operation, num));
}

