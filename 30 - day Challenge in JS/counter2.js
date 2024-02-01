/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
 var createCounter = function(init) {
    let c = init; 
    return{
        increment(){
           return ++c;
        },
        reset(){
           return c = init
        },
        decrement(){
           return --c; 
        }
    }
};


const counter = createCounter(5)

console.log(counter.increment(), counter.reset(), counter.decrement());