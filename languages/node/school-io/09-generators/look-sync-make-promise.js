function askFoo() {
  return new Promise(function (resolve, reject) {
    resolve("foo");
  });
}

function run(generator) {
  let it = generator(resolve);

  function resolve(result) {
    it.next(result);
  }

  resolve();
}

run(function* (resolve) {
  var foo = yield askFoo().then(resolve);
  console.log(foo);
});

/**
 * Official Solution obviously doesn't uses callbacks
 function getFoo () {
    return new Promise(function (resolve, reject){
    resolve('foo');
    });
}

function run (generator) {
    var it = generator();

    function go(result) {
    // take a look also on `Generator.prototype.return`
    if (result.done) return result.value;

    return result.value.then(function (value) {
        return go(it.next(value));
    }, function (error) {
        return go(it.throw(error));
    });

    }

    go(it.next());
}

run(function* () {
    try {
    var foo = yield getFoo();
    console.log(foo);
    } catch (e) {
    console.log(e);
    }
});
 */
