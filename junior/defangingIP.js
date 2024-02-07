// 07.04.24
// 1108. Defanging A IP Address
/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    
    // let arr = address.split('')
    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i] === '.'){
    //         arr[i] = '[.]';
    //     }
    // }

    // return arr.join('')
    return address.replaceAll('.', '[.]')
};

console.log(defangIPaddr("1.1.1.1"));