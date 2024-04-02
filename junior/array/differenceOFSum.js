// 02.04.24
// 2535. Difference Between Element Sum and Digit Sum of an Array
// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var differenceOfSum = function(nums) {
    let eSum = [];
    let dSum = [];

    eSum = nums.reduce((result, current) => {return result + current});
    dSum = nums.join('').split('').map(n => parseInt(n)).reduce((result, current) => {return result + current});

    return eSum - dSum

};


console.log(differenceOfSum([1,15,6,3]));

// solved