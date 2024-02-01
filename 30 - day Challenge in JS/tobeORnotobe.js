/**
 * @param {string} val
 * @return {Object}
 */
 var expect = function(val) {
    
   return{ 
       toBe: (v) => (v === val) ? true : (() => {throw new Error('Not Equal')})(),
       notToBe: (v) => (v !== val) ? true : (() => {throw new Error('Equal')})()
   }

  };
