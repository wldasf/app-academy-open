/*
Write a function hipsterfy(sentence) that takes in a sentence string and returns the sentence where every word is missing its last vowel.
*/
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

// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?
function repeatingTranslate(sentence) {
    const vowels = "aeiou";
    const split = sentence.split(" ");
    let newSentence = [];
    for (let i = 0; i < split.length; i++) {
        const word = split[i];
        if (word.length < 3) {
            newSentence.push(word);
        } else {
            if (vowels.includes(word[word.length-1])) {
                newSentence.push(word.repeat(2));
            } else {
                newSentence.push(nonVowelRepeat(word));
            }
        }
    }
    return newSentence.join(" ");
}

function nonVowelRepeat(word) {
    const vowels = "aeiou";
    for (let i = word.length; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            return word.slice(0, i) + word.slice(i, word.length + 1) + word.slice(i, word.length + 1);
        }
    }
}

/*
Write a function consonantCancel that takes in a sentence and returns a new sentence where every word begins with it's first vowel.
*/
function consonantCancel(sentence) {
    const split = sentence.split(" ");
    let newWord = [];
    for (let i = 0; i < split.length; i++) {
        let word = split[i];
        newWord.push(beginFromVowel(word));
    }
    return newWord.join(" ");
}

function beginFromVowel(word) {
    const vowels = "aeiou";
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            return word.slice(i);
        }
    }
}
