// 02.04.24
// 1512. Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
      let  count=0;
    for(let i =0; i < nums.length; i ++){
        for(let j=i+1; j < nums.length; j++){
             if(nums[i]===nums[j]) 
             count++;
        }
    }
    return count;
 };


console.log(numIdenticalPairs([1,2,3,1,1,3]));

// solved