/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
 var filter = function(arr, fn) {
    let newArr = [];
   for (let i = 0; i < arr.length; i++) {  
    if(fn(arr[i], i)){
        newArr.push(arr[i])
    }
   }

   return newArr
};

console.log(filter([0,10,20,30], function greaterThan10(n) { return n > 10; }));
console.log(filter([-2,-1,0,1,2], function plusOne(n) { return n + 1 }));