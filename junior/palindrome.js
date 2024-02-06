// Given an integer x, return true if x is a palindrome, and false otherwise.
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    return x.toString().split('').reverse().join('')*1 === x ? true : false
};
console.log(isPalindrome(101))