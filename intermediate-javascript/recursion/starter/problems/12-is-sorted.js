/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/
// check if the numbers are consistently incrementing based on the previous number.
// add the previous and current number together to get the next number.
// if next number doesn't align with the algorithm, then it's false
// else true
function isSorted(array) {
  if (array[0] + array[1] === array[2]) {return true;}
  else {return false;}
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
