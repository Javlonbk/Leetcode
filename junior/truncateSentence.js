// 14.02.24
// 1816.  Truncate Sentence
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
    return s.split(' ').splice(0, k).join(' ')
};


let s = "Hello how are you Contestant";
let k = 4;

console.log(truncateSentence(s,k))