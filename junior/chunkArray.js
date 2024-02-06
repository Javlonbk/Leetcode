// 05.02.24
// 2677. Chunk Array
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
 var chunk = function(arr, size) {
    let chunkedArr = [];
    let index = 0;

    while(index < arr.length){
        chunkedArr.push(arr.slice(index, index + size));
        index += size;
    }

    return chunkedArr
};

console.log(chunk([1,2,3,4,5], 2))