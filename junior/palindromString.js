// 15.02.24
// 2108. https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
    let result = words.find(word => word.split('').reverse().join('') === word);

    return result || ""
};

let words = ["abc","car","cool"];

console.log(firstPalindrome(words));