/**
 * @param {string} s
 * @return {boolean}
 */
 function isValid(s) {
    const stack = [];
    const brackets = { '(': ')', '{': '}', '[': ']' };
  
    for (let i = 0; i < s.length; i++) {
      const currentChar = s[i];
  
      if (brackets[currentChar]) {
        // If it's an opening bracket, push it onto the stack
        stack.push(currentChar);
      } else {
        // If it's a closing bracket
        const lastOpenBracket = stack.pop();
  
        // Check if there is a matching opening bracket
        if (brackets[lastOpenBracket] !== currentChar) {
          return false;
        }
      }
    }
  
    // If the stack is empty, all brackets were properly closed
    return stack.length === 0;
  }
  
  // Example usage:
  let inputString = "{)]}";
  console.log(isValid(inputString)); // Output: true
  
  inputString = "()";
  console.log(isValid(inputString)); // Output: false