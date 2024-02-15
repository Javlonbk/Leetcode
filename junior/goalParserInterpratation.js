// 10.02.24
// 1678. https://leetcode.com/problems/goal-parser-interpretation/description/
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let result = command.replaceAll("()", "o").replaceAll('(al)', 'al');
    return result
};

command = "G()(al)";
console.log(interpret(command));
