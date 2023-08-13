const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = 5;

function checkGuess(num) {
    if (num > secretNumber) {
        console.log("Too high.");
        return false;
    }
    else if (num < secretNumber) {
        console.log("Too low.");
        return false;
    }
    else if (num === secretNumber) {
        console.log("Correct!");
        return true;
    }
}

function askGuess() {
    rl.question('Enter a guess ', answer => {
        let str = Number(answer);
        checkGuess(str);
        rl.close();
    });
}

askGuess();
