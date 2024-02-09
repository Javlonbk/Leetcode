// 09.02.24
// 2942. https://leetcode.com/problems/find-words-containing-character/
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
 var findWordsContaining = function(words, x) {
    let result = words.map((word, i) => {
          if(word.includes(x)) return i
    }).filter(el => el !== undefined);

    return result
};

words = ["abc","bcd","aaaa","cbc"], x = "a"

console.log(findWordsContaining(words, x));