// 02.04.24
// 1281. Subtract the Product and Sum of Digits of an Integer
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/
/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    let prod = 1;
    let sum = 0;
    let s = n.toString();
    for (let i = 0; i < s.length; i++) {
        let digit = parseInt(s[i]);
        prod *= digit;
        sum += digit;
    }
    return prod - sum;
};

console.log(subtractProductAndSum(234));