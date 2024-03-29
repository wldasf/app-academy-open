/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
function flatten(array) {
  if (array.length === 0) {
    return [];
  }

  const first_element = array[0];
  if (Array.isArray(first_element)) {
    const flattened_first_element = flatten(first_element);
    const other_flattened_elements = flatten(array.slice(1));
    return flattened_first_element.concat(other_flattened_elements);
  }
  else {
    const rest = flatten(array.slice(1));
    return [first_element].concat(rest);
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
