// 01.02.24
// Promise

// resolve(value) — if the job is finished successfully, with result value.
// reject(error) — if an error has occurred, error is the error object

// resolve
// let promise = new Promise(function(resolve, reject) {
//     // the function is executed automatically when the promise is constructed
  
//     // after 1 second signal that the job is done with the result "done"
//     setTimeout(() => resolve("done"), 1000);
//   });

// reject
// let promise = new Promise(function(resolve, reject) {
//     // after 1 second signal that the job is finished with an error
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });

// let promise = new Promise(function(resolve, reject){
    
//     resolve(123);
// })

// <--------------------------------->
// .then
// promise.then(
//     function(result) { /* handle a successful result */ },
//     function(error) { /* handle an error */ }
//   );

// let promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve('done')
//     }, 1000);
// })
// // resolve runs the first function in .then
// promise.then(
//     result => console.log(result), // shows "done!" after 1 second
//     error => console.log(error) // doesn't run
// )

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });
  
//   // reject runs the second function in .then
//   promise.then(
//     result => console.log(result), // doesn't run
//     error =>  console.log(error) // shows "Error: Whoops!" after 1 second
//   );

// If we’re interested only in successful completions, then we can provide only one function argument to .then:
// let promise = new Promise(resolve => {
//     setTimeout(() => resolve("done!"), 1000);
//   });
  
//   promise.then(alert); // shows "done!" after 1 second


// <--------------------------->
// finally

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve("value"), 2000);
//   })
//     .finally(() => console.log("Promise ready")) // triggers first
//     .then(result => console.log(result)); // <-- .then shows "value"

// new Promise((resolve, reject) => {
//     throw new Error("error");
//   })
//     .finally(() => console.log("Promise ready")) // triggers first
//     .catch(err => console.log(err));  // <-- .catch shows the error