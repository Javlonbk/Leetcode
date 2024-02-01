/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
 var argumentsLength = function(args) {
    console.log(args, args.length)
    return args.length
};


let result = argumentsLength([{}, null, "3"]) // 3

console.log(result);