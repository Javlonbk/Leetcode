/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return () => n++
};

 
const counter = createCounter(10);
console.log(counter()) // 10
console.log(counter()) // 10
console.log(counter()) // 10
