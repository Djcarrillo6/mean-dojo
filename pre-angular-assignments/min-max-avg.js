/*
Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.

Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

*/

const arr = [2, 8, 15, 32, -12, 61, 917];
function getMinMaxAvg(arr) {

  // Utility function to return the min. 
  function arrayMin(arr) {
    return arr.reduce(function (p, v) {
      return ( p < v ? p : v );
    });
  }
  
  // Utility function to return the max. 
  function arrayMax(arr) {
    return arr.reduce(function (p, v) {
      return ( p > v ? p : v );
    });
  }
  let sum = 0;

  for(x in arr) {
    sum += arr[x];
  };

  avg = (sum / arr.length);

  return `The minimum is ${arrayMin(arr)}, the maximun is ${arrayMax(arr)}, the average is ${avg}.`;
};

console.log(getMinMaxAvg(arr));