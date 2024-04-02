// 02.04.24
// 2160. Minimum Sum of Four Digit Number After Splitting Digits
// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/description/
/**
 * @param {number} num
 * @return {number}
 */
 var minimumSum = function(num) {

    const arr = num.toString().split('').sort()
    return parseInt(arr[0] + arr[2]) + parseInt(arr[1] + arr[3])

};


console.log(minimumSum(2932));