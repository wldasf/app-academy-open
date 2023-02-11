/*
Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and returns the total sum of all numbers.
*/
function twoDimensionalSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let y = 0; y < arr[i].length; y++) {
            sum += arr[i][y];
        }
    }
    return sum;
}

/*
Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument. The function should return the total product of all numbers multiplied together.
*/
function twoDimensionalProduct(array) {
    let product = 1;
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            product *= array[x][y];
        }
    }
    return product;
}

/*Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix) and returns the largest value in the matrix. The matrix contains at least one value.
*/
function maxInMatrix(matrix) {
    let largest = 0;
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y + 1] > matrix[x][y]) {
                largest = matrix[x][y + 1];
            }
        }
    }
    return largest;
}

/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the maximum value in each column. The array length should be equal to the number of columns, such that returnArray[i] is equal to the max value in the ith column.
*/
function maxColumn(matrix) {
    let newArr = [];
    for (let y = 0; y < matrix.length; y++) {
        let maxm = matrix[0][y];
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[x][y] > maxm) {
                maxm = matrix[x][y];
            }
        }
        newArr.push(maxm);
    }
    return newArr;
}

/*
Write a function zip that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. You may assume that the input arrays have the same length.
*/
function zip(arr1, arr2) {
    let new_arr = [];
    for (let i = 0; i < arr1.length; i++) {
        new_arr.push([arr1[i], arr2[i]]);
    }
    return new_arr;
}

/*
Write a function zanyZip that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. If one of the arrays is shorter than the other, then substitute null for the missing elements.
*/
function zanyZip(arr1, arr2) {
    let new_arr = [];
    for (let i = 0; i < arr1.length || i < arr2.length; i++) {
        if (arr1[i] == undefined) {
            new_arr.push([null, arr2[i]]);
        }
        else if (arr2[i] == undefined) {
            new_arr.push([arr1[i], null]);
        }
        else {
            new_arr.push([arr1[i], arr2[i]]);
        }
    }
    return new_arr;
}

/*
A 2-dimensional array is also known as a "matrix". Write a function matrixAddition that accepts two matrices as arguments. The two matrices are guaranteed to have the same "height" and "width". The function should return a new matrix representing the sum of the two arguments. To add matrices, we add the values at the same positions.
*/
function matrixAddition(mat1, mat2) {
    let sum = [];
    for (let i = 0; i < mat1.length; i++) {
        let sub_array = [];
        for (let y = 0; y < mat1[i].length; y++) {
            sub_array.push(mat1[i][y] + mat2[i][y]);
        }
         sum.push(sub_array);
    }
    return sum;
}
