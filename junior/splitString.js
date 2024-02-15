// 10.02.24
// 1221 https://leetcode.com/problems/split-a-string-in-balanced-strings/description/
/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let count = 0;
    let balance = 0;

    for (let i = 0; i < s.length; i++) {
        if(s[i] === 'L'){
            balance++;
        }
        else{
            balance--;
        }
        if(balance === 0){
            count++
        }
        
    }
    return count
};


s = "RLRRLLRLRL";
console.log(balancedStringSplit(s));

// 0 1 2 3 4 | 4