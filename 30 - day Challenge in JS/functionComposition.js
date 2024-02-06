/**
 * @param {Function[]} functions
 * @return {Function}
 */
 var compose = function(functions) {
    
    return function(x){
    functions.reverse().forEach((elm) => x = elm(x));
    return x
    }
};


const fn = compose([x => x + 1, x => 2 * x])
// fn(4) // 9

console.log(fn(4));