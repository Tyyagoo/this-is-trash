function* factorial(n) {
  let fac = 1;
  let actual = 1;
  while (actual <= n) {
    yield fac;
    actual++;
    fac *= actual;
  }
}

for (var n of factorial(5)) console.log(n);
