// 02.04.24
// 2798. Number of Employees Who Met the Target
// https://leetcode.com/problems/number-of-employees-who-met-the-target/description/
/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
 var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;
    for (let i = 0; i < hours.length; i++) {
        if(hours[i] >= target){
            count++;
        }
    }  

    return count
};


console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4], 2));

//solved