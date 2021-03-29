/*
Bubble Sort

Instructions:
Write a function called 'bubbleSort' that accepts an array, and returns a sorted ascending array.

Psuedo-Code:
- Start an outter loop from the end of the array to the start.
- Start an inner loop from the start of the array until (i - 1).
- If arr[j] is greater than arr[j + 1], then swap those 2 values.
- Finally, return the sorted array. 
*/

function bubbleSort(arr) {
  // Boolean var, set to 'true' at start of 2nd loop, if it stays 'true' after completing 2nd loop, break the outter for-loop.
  var noSwaps;

  // For-loop, from the end => start; Now we can use "i" in the "j" for-loop..
  for (var i = arr.length; i > 0; i--) {
    // Set boolean to true to start, and if a swap is made, toggle it too 'false'.
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }

    // If noSwap == true, break the while loop to prevent un-needed loops on sorted data.
    if (noSwaps) break;
  }

  // Return the sorted array.
  return arr;
};

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
