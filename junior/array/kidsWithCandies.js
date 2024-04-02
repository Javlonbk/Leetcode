// 02.04.24
// 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    let newCandies = [];
    let maxCandy = Math.max(...candies);
    for (let i = 0; i < candies.length; i++) {
        newCandies.push(candies[i] + extraCandies)
    }
    
    let result = newCandies.map(newCandy => newCandy >= maxCandy)

    return  result
};  


console.log(kidsWithCandies([2,3,5,1,3], 3));

//solved