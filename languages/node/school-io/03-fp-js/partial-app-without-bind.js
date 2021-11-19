var slice = Array.prototype.slice

function logger(namespace) {
  return function log() {
    const args = slice.call(arguments);
    console.log.apply(null, [namespace, ...args]);
  }
}

module.exports = logger


