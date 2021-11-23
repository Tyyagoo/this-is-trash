const add = (acc) => {
  acc = acc ?? 0;
  return (n) => (n == undefined ? acc : add(acc + n));
};

module.exports = add(0);
