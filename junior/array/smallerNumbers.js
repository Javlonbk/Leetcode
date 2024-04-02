// 02.04.24
// 1365. How Many Numbers Are Smaller Than the Current Number
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let arr = [];
    
    for (let i = 0; i < nums.length; i++) {
        arr.push(0);
        for (let j = 0; j < nums.length; j++) {
            if(nums[i] > nums[j]){
                arr[i]++
            }
        }
    }

    return arr
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));