// 02.04.24
// 2894. Divisible and Non-divisible Sums Difference
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
 var differenceOfSums = function(n, m) {
    let divided = 0;
    let nonDivided = 0;
    for (let i = 1; i <= n; i++) {
        if(i % m !== 0){
          nonDivided += i
        }
        else{
            divided += i
        }
    }
    return  nonDivided - divided
};


console.log(differenceOfSums(10, 3));


// solved