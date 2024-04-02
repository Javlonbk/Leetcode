"use strict";

// 02.04.24
// 2894. Divisible and Non-divisible Sums Difference

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function differenceOfSums(n, m) {
  var divided = 0;
  var nonDivided = 0;

  for (var i = 1; i <= n; i++) {
    if (i % 3 !== 0) {
      nonDivided = +i;
    } else {
      divided = +i;
    }
  }

  return nonDivided - divided;
};

console.log(differenceOfSums(10, 3));