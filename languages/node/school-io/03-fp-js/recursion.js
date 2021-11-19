function reduce(arr, fn, initial) {
  function reduce_step(arr, prev, index) {
    if (arr.length === 0) return prev;
    const [head, ...tail] = arr;
    const curr = fn(prev, head, index, arr);
    return reduce_step(tail, curr, index + 1);
  }
  return reduce_step(arr, initial, 0);
}

module.exports = reduce

