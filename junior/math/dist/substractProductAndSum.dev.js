"use strict";

// 02.04.24
// 1281. Subtract the Product and Sum of Digits of an Integer
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function subtractProductAndSum(n) {
  var prod = 1;
  var sum = 0;
  var s = n.toString();

  for (var i = 0; i < s.length; i++) {
    var digit = parseInt(s[i]);
    prod *= digit;
    sum += digit;
  }

  return prod - sum;
};

console.log(subtractProductAndSum(234));