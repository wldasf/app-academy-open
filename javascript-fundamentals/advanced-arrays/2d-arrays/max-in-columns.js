function maxColumn(matrix) {
    let newArr = [];
    for (let y = 0; y < matrix.length; y++) {
        let maxm = matrix[0][y]; // sets this variable to start with the first column.
        for (let x = 0; x < matrix[y].length; x++) {
	    /* notice [x][y] it is comparing the numbers on the same row, So 5 | 9 | 12
	    	                                                             9 | 19| 14
	    	                                                             21| 6 | 15
	    */
            if (matrix[x][y] > maxm) {
                maxm = matrix[x][y];
            }
        }
        newArr.push(maxm);
    }
    return newArr;
}


matrix = [[ 5,  9, 21],
          [ 9, 19,  6],
          [12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]
