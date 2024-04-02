// 02.04.24
// 1720. Decode XORed Array
// https://leetcode.com/problems/decode-xored-array/description/
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
    return encoded.reduce((acc, encodedNum) => [...acc, acc.at(-1) ^ encodedNum], [first]);
};


console.log( [6,2,7,3], 4);