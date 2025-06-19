const reverseString = function(word) {
    letters = [];
    for (i = 0; i < word.length; i++) {
        letters.push(word[i])
    }
    letters.reverse();
    wordReversed = letters.join("");
    return wordReversed;
};

// Do not edit below this line
module.exports = reverseString;
