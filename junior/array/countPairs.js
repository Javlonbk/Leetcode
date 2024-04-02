// 02.04.24
// 2824. Count Pairs Whose Sum is Less than Target
// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var countPairs = function(nums, target) {
    let countP = 0;
    
    for (let i = 0; i < nums.length; i++) {
       for (let j = i+1; j < nums.length; j++) {
        if(nums[i] + nums[j] < target){
            countP++
        }
       }
    }

    return countP
};

console.log(countPairs([-1,1,2,3,1], 2));


//solved