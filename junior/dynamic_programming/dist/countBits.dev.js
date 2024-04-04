"use strict";

// 04.02.24
// 338. Counting Bits
// https://leetcode.com/problems/counting-bits/description/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function countBits(n) {
  var ans = new Array(n + 1).fill(0);

  for (var i = 0; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }

  return ans;
};

console.log(countBits(2));