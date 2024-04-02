// 02.04.24
// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/description/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let sum = 0;

    return nums.map(num => sum += num)
    
};


console.log(runningSum([1,2,3,4]));


