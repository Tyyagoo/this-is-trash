function* flat(arr) {
  for (let element of arr) {
    if (Array.isArray(element)) yield* flat(element);
    else yield element;
  }
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
  console.log(f);
}
// 1 2 3 4 5 6
