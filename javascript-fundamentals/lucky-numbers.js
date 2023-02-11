/*
Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix) and returns all lucky numbers in any order. A lucky number is the minimum element in its row and the maximum in its column.
*/
function luckyNumbers(matrix) {
    let row = minRow(matrix);
    let col = maxColumn(matrix);
    for (let i = 0; i < col.length; i++) {
        for (let y = 0; y < row.length; y++) {
            if (col[i] == row[y]) {
                return row[y];
            }
        }
    }
}

function maxColumn(matrix) {
    let newArr = [];
    for (let y = 0; y < matrix[0].length; y++) {
        let max = matrix[0][y];
        for (let x = 1; x < matrix.length; x++) {
            if (matrix[x][y] > max) {
                max = matrix[x][y];
            }
        }
        newArr.push(max);
    }
    return newArr;
}

function minRow(matrix) {
    let newArr = [];
    for (let y = 0; y < matrix.length; y++) {
        let maxm = matrix[y][0];
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] < maxm) {
                maxm = matrix[y][x];
            }
        }
        newArr.push(maxm);
    }
    return newArr;
}
