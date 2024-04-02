// 02.04.24
// 1470. Shuffle the Array
// https://leetcode.com/problems/shuffle-the-array/description/
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let i = 0
    let count = 2*n
    let newArr = []
    while(count){
        newArr.push(nums[i++])
        newArr.push(nums[n++])
        count=count-2
    }
    return(newArr)
};


console.log(shuffle([2,5,1,3,4,7], 3));