"use strict";

// 02.04.24
// 1688. Count of Matches in Tournament
// https://leetcode.com/problems/count-of-matches-in-tournament/description/

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function numberOfMatches(n) {
  var games = 0;

  while (n > 1) {
    games += Math.floor(n / 2);
    n = Math.ceil(n / 2);
  }

  return games;
};