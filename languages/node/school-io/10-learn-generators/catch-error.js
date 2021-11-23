function* upper(items) {
  for (let item of items) {
    try {
      let up = item.toUpperCase();
      yield up;
    } catch {
      yield null;
    }
  }
}

var bad_items = ["a", "B", 1, "c"];

for (var item of upper(bad_items)) {
  console.log(item);
}
// want to log: A, B, null, C
