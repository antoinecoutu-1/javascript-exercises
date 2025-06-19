const repeatString = function(word, times) {
    let finalWord = ""
    if (times < 0) {
        finalWord = "ERROR"
    }
    else {
        for (times; times > 0; times--) {
        finalWord = finalWord.concat(word);
        }
    }
    return finalWord;
};

// Do not edit below this line
module.exports = repeatString;
