// Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument. The function should return the total product of all numbers multiplied together.

function twoDimensionalProduct(array) {
    let product = 1;
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            product *= array[x][y];
        }
    }
    return product;
}




let arr1 = [
    [6, 4],
    [5],
    [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
    [11, 4],
    [2]
];
console.log(twoDimensionalProduct(arr2)); // 88
