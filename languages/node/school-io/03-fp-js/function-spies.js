function Spy(target, method) {
  const self = {
    count: 0,
    methodToCall: target[method],
  }

  target[method] = function() {
    self.count++;
    return self.methodToCall.apply(this, arguments);
  }

  return self;
}

module.exports = Spy

