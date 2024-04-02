// 16.02.24
// 2325. https://leetcode.com/problems/decode-the-message/description/

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
 var decodeMessage = function(key, message) {
    let alphabet='abcdefghijklmnopqrstuvwxyz';
    let key2=new Set(key.split(' ').join('')); //space out
    let unickey=[...key2].join(''); // dublicates out
    let decod='';
        for( let i=0; i<message.length; i++){ 
            (message[i]==" ")? decod+=" " : decod+=alphabet[unickey.indexOf(message[i])];
        } 
    return decod;
    };

let key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv";

console.log(decodeMessage(key, message));