// 13.02.24
// 1773. https://leetcode.com/problems/count-items-matching-a-rule/description/
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
    let ruleKeys = ['type', 'color', 'name'];
    let  keyIndex = ruleKeys.indexOf(ruleKey);
    let count = 0;

    for (let i = 0; i < items.length; i++) {
        if(items[i][keyIndex] === ruleValue) count++
    }
    return count
};

let items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]];
let ruleKey = "type"; 
let ruleValue = "phone";



console.log(countMatches(items, ruleKey, ruleValue));
