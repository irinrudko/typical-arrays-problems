
exports.min = function min(array) {
  if (!array || array.length === 0) {
    return 0;
  } else return Math.min(...array);
}

exports.max = function max(array) {
  if (!array || array.length === 0) {
    return 0;
  } else return Math.max(...array);
  // let maxValue = array[0];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] >= maxValue) {
  //     maxValue = array[i];
}

exports.avg = function avg(array) {
  if (!array || array.length === 0) {
    return 0;
  } else return array.reduce((sum, current) => sum + current, 0) / array.length;
}
