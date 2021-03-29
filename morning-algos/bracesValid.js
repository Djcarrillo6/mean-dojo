/*
Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.

HINT: Keep in mind that you may use arrays and objects to keep your information organized!
Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.
Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.

  // Iterate over string
  // Create a frequency table that holds two keys: 'openBraces' & 'closedBraces'
  // After iteration is completed, compare the values in the table:
    // If values are equal, return true - ELSE - return false. 
*/

function bracesValid(inputString) {
  const freqTable = {
    "openBraces": 0,
    "closedBraces": 0
  };

  for(char in inputString) {
    if(inputString[char] === '{' || inputString[char] ===  '(' || inputString[char] ===  '[') freqTable['openBraces']++;
    else if(inputString[char] === '}' || inputString[char] ===  ')' || inputString[char] ===  ']') freqTable['closedBraces']++;
  };

  // console.log(freqTable['openBraces'], freqTable['closedBraces'])
  if(freqTable['openBraces'] === freqTable['closedBraces']) return true;
  return false; 
}

console.log(bracesValid("{{()}}[]"));