// 13.02.24
// 1528. https://leetcode.com/problems/shuffle-string/description/
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    let obj = {};

    for (let i = 0; i < s.length; i++) {
        obj[`${indices[i]}`] = s[i]
    }

    return Object.values(obj).join('')
};

let s = "codeleet";
let  indices = [4,5,6,7,0,2,1,3]

console.log(restoreString(s, indices));