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
