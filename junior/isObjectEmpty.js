// 05.02.24
// 2727. Is Object Empty
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
 var isEmpty = function(obj) {
   return Object.keys(obj).length === 0 ? true : false
};

console.log(isEmpty({"x": 5, "y": 42}));
console.log(isEmpty({} ));
console.log(isEmpty([null, false, 0]));