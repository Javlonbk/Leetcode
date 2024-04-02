// 02.04.24
// 1920. Build Array from Permutation
// https://leetcode.com/problems/build-array-from-permutation/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {

    var ans = [];

    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]]);
    }

    return ans
};


console.log(buildArray([0,2,1,5,3,4]));


// solved