/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
function subsets(arr) {
  // Base case: If the array is empty, return an array containing an empty array.
  if (arr.length === 0) {
    return [[]];
  } else {
    // Remove the last element from the array.
    const lastElement = arr.pop();

    // Recursive call to get subsets for the rest of the elements.
    const prevSubsets = subsets(arr);

    // For every subset that does not contain the last element, create a new subset by including the last element.
    const newSubsets = prevSubsets.map(subset => subset.concat(lastElement));

    // Merge the subsets that do not contain the last element with the new subsets.
    return prevSubsets.concat(newSubsets);
  }
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
