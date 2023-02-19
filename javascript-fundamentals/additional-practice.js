/*
Write a function echo that takes in a string and console.logs that string "echo-ized".
*/
function echo(string) {
    console.log(string.toUpperCase() + "..." + string + "..." + string.toLowerCase());
  }

/*
Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.
Vowels are the letters "a", "e", "i", "o", "u".
*/
function countVowels(word) {
    const vowels = "aeiou";
    let count = 0;
    for(let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
          count++;
        }
    }
    return count;
  };

/*
Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.
*/
function sumArray(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        count += array[i];
    }
    return count;
}

/*Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".

Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String.slice() method. The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

Hint: Remember the String.includes method!
*/
// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word) {
    const vowels = "aeiou";
    for (let i = 0; i < word.length; i++) {
        let first = "";
        let second = "";
        if (vowels.includes(word[0])) {
            return word + "yay";
        }
        else if (vowels.includes(word[i])) {
            first = word.slice(0, i);
            second = word.slice(i);
            return second + first + "ay";
        }
    }
  };

/*
Write a function myIndexOf(arr, target) that takes in an array and target value as args. The function should return the first index where the target is found in the array. If the target is not found, it should return -1. Solve this without using Array.indexOf.
*/
function myIndexOf(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

/*
Write a function twoSum(arr, target) that accepts an array and a target number as args. The function should a return a boolean indicating if two distinct numbers of the array add up to the target value. You can assume that input array contains only unique numbers.
*/
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let y = i + 1; y < arr.length; y++) {
            if (arr[i] + arr[y] === target) {
                return true;
            }
        }
    }
    return false;
}

/*
Write a function fizzBuzz(max) that accepts a number as an arg. The function should return an array containing all positive numbers less than max that are divisible by either 3 or 5, but not both.
*/
function fizzBuzz(max) {
    let result = [];
    for (let i = 1; i < max; i++) {
        if ((i % 3 == 0 || i % 5 == 0) && !(i % 3 == 0 && i % 5 == 0)) {
            result.push(i);
        }
    }
    return result;
}

/*
Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.
*/
function removeLastVowel(word) {
    let vowels = "aeiou";
    for (let i = word.length; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
}

/*
Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments. The functions should return the smallest number that is divisible by both num1 and num2.
*/
function leastCommonMultiple(num1, num2) {
    for (let i = 1; i <= (num1 * num2); i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            return i;
        }
    }
}
