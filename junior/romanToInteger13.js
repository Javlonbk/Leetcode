//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// Given a roman numeral, convert it to an integer

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let result = 0;

    for(let i = 0; i < s.length; i++){
        
        const currentSymbolValue = romanNumerals[s[i]];
        const nextSymbolValue = romanNumerals[s[i + 1]];

        if(nextSymbolValue > currentSymbolValue) {

            result += nextSymbolValue - currentSymbolValue;
            i++;
        }else{
            result +=currentSymbolValue;
        }

    }
    return result;
};
console.log(romanToInt('XXVI'))