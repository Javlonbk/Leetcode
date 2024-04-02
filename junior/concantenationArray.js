// 19.02
// 1929.https://leetcode.com/problems/concatenation-of-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    let ans = [...nums, ...nums];
    return ans
};

let nums = [1,2,1];
console.log(getConcatenation(nums));