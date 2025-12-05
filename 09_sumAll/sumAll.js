const sumAll = function(x, y) {
  let first = (x < y) ? x:y;
  let last = (x < y) ? y:x;
  let total = 0
  if ((x || y) < 0) {
    return "ERROR";
  } else if (isNaN(x) || isNaN(y)) {
    return "ERROR";
  } else {
  for (let i = first; i <= last; i++) {
    total += i;
  }
  return total;
  }
};

// Do not edit below this line
module.exports = sumAll;
