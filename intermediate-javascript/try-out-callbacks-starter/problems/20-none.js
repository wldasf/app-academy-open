/*******************************************************************************
Write a function `none` that accepts an array and a callback as arguments.
The function should call the callback for each element of the array, passing in
the element. The function should return true if all
elements of the array result to false when passed into the callback. Otherwise,
the method should return false.

Examples:

let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result1);   // true

let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result2);   // false

let result3 = none([4, 5, 7, 1], function(n) {
    return n < 0;
});
console.log(result3);   // true

let result4 = none([4, -5, 7, -1], function(n) {
    return n < 0;
});
console.log(result4);   // false
*******************************************************************************/
// loop through all arr elements and pass each element to callback
// if all elements in an arr are false then return true
    // have a counter that counts how many falses return relative to the length of the arr
let none = function(arr, cb) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        if (cb(ele) == false) {
            count++;
        }
    }
    if (count == arr.length) {
        return true;
    }
    else {
        return false;
    }
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = none;
