// Write a function hipsterfy(sentence) that takes in a sentence string and returns the sentence where every word is missing its last vowel.

function hipsterfy(sentence) {
    const splitSentence = sentence.split(" ");
    let newArray = [];
    for (let i = 0; i < splitSentence.length; i++) {
        newArray.push(removeLastVowel(splitSentence[i]));
    }
    return newArray.join(" ");
}

function removeLastVowel(word) {
    const vowels = "aeiou";
    for (let i = word.length; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
