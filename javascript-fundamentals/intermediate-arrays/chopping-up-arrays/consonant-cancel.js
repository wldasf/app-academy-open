// Write a function consonantCancel that takes in a sentence and returns a new sentence where every word begins with it's first vowel.

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

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
