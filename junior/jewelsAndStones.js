// 08.02.24
// 771. Jewels and Stones
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
   let arrJ = jewels.split('');
   let arrS = stones.split('');
   let k = 0;

   for (let i = 0; i < arrJ.length; i++) {
    for (let j = 0; j < arrS.length; j++) {
        if(arrJ[i] === arrS[j]){
            k++;
        }
    }
   }

   return k
};


console.log(numJewelsInStones("aA", "aAAbbbb"));