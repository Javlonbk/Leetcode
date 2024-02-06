// 01.02.24
// 2723. Add Two Promises

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
 var addTwoPromises = async function(promise1, promise2) {
    const [value1, value2] = await Promise.all([promise1, promise2]);

    return value1 + value2
};


// Example usage:
var promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
var promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then(result =>  console.log(result)); // Output: 
