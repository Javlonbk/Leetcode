// 10.02.24
// 2114. https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/
/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
   
    let max = 0;

    for (let i = 0; i < sentences.length; i++) {
        const wordsCount = sentences[i].split(' ').length;
        if(max < wordsCount) max = wordsCount;
    }
    
    return max
};

sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
console.log(mostWordsFound(sentences));