// 02.04.24
// 1672. Richest Customer Wealth
// https://leetcode.com/problems/richest-customer-wealth/description/
/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let arr = [];
    let result;
    for (let i = 0; i < accounts.length; i++) {
        
       arr.push(accounts[i].reduce((result, current) => {
            return result + current
        }))

    }

    result = Math.max(...arr);

    return result

};

console.log(maximumWealth([[1,5],[7,3],[3,5]]));


// solved