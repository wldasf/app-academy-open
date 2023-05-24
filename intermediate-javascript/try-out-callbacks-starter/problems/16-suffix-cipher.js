/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function(sentence, obj) {
    let newSentence = [];
    const splitSentence = sentence.split(" ");
    for (let i = 0; i < splitSentence.length; i++) {
        let word = splitSentence[i];
        let suffix = checkSuffix(word);
        if (suffix !== undefined && obj.hasOwnProperty(suffix) && typeof obj[suffix] === 'function') {
            newSentence.push(obj[suffix](word));
        }
        else {
            newSentence.push(word);
        }
    }
    return newSentence.join(" ");
};

let checkSuffix = function(word) {
    const suffix = ['tion', 'ity', 'er', 'ness', 'ism', 'ment', 'ant', 'ship', 'age', 'ery', 'ly', 'ize', 'tal', 's'];
    for (let i = suffix.length - 1; i >= 0; i--) {
        if (word.endsWith(suffix[i])) {
            return suffix[i];
        }
    }
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
