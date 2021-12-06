function arrayMap(array, fn) {
  function step(arr, prev) {
    if (arr.length === 0) return prev;
    const [head, ...tail] = arr;
    return step(tail, [...prev, fn(head)]);
  }
  return step(array, []);
}

module.exports = arrayMap;


