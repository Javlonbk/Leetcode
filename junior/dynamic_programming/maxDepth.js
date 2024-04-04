// 04.04.24
// 1614. Maximum Nesting Depth of the Parentheses
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/?envType=daily-question&envId=2024-04-04
/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
    let count = 0;
    let maxCount = 0;
    for(let i=0; i<s.length-1; i++){
        if(s[i] === "("){
            count++;
        }else if(s[i] === ")"){
            count--;
        }
        maxCount = Math.max(maxCount,count);
    }

    return maxCount
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"
));

