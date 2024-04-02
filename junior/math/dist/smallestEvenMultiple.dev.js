"use strict";

// 02.04.24
// 2413. Smallest Even Multiple
// https://leetcode.com/problems/smallest-even-multiple/description/

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function smallestEvenMultiple(n) {
  return n % 2 === 0 ? n : n * 2;
};

console.log(smallestEvenMultiple(6)); //solved