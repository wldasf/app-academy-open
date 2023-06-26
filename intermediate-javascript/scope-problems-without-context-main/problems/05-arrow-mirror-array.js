/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

const mirrorArray = (array) => {
  // Your code here
  const copy = array;
  for (let i = copy.length - 1; i >= 0; i--) {
    array.push(copy[i]);
  }
  return copy;
};
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mirrorArray;
} catch (e) {
  return null;
}