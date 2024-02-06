// 06.02.24
// 66. PlusOne
// https://leetcode.com/problems/plus-one/description/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) { 

  let number = BigInt(digits.join(''));
  number++;
  return String(number).split('');

};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
console.log(Math.pow(10, 20));