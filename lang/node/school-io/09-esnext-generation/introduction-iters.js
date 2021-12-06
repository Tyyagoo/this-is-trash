module.exports = function makeCounter(someObj) {
  let curr = 1;
  someObj.next = function (maxNum) {
    return curr <= (maxNum ?? 10)
      ? { value: curr++, done: false }
      : { done: true };
  };
};
