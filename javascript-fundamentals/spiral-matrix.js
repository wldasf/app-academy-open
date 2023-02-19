/*
Write a function spiralOrder(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the elements in spiral order.
*/

function spiralOrder(matrix) {
    let result = [];
    let topRow = 0, bottomRow = matrix.length - 1;
    let leftCol = 0, rightCol = matrix[0].length - 1;
    while (topRow <= bottomRow && leftCol <= rightCol) {
        for (let i = leftCol; i <= rightCol; i++) {
            result.push(matrix[topRow][i]);
        }
        topRow++;

        for (let i = topRow; i <= bottomRow; i++) {
            result.push(matrix[i][rightCol]);
        }
        rightCol--;

        if (topRow <= bottomRow) {
            for (let i = rightCol; i >= leftCol; i--) {
                result.push(matrix[bottomRow][i]);
            }
            bottomRow--;
        }

        if (leftCol <= rightCol) {
            for (let i = bottomRow; i >= topRow; i--) {
                result.push(matrix[i][leftCol]);
            }
            leftCol++;
        }
    }
    return result;
}
