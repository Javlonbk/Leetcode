// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string ""

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {

     let maxStr = 0;
     for (let i = 0; i < strs.length; i++) {
        if(maxStr < strs[i].length){
            maxStr += strs[i].length
        }    
    }


    for (let i = 0; i < maxStr; i++) {
        
    }

};


let result = longestCommonPrefix(["flower","flows","flight"])
console.log(result)



