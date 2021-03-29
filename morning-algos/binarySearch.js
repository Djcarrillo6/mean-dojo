/*
Binary Search 

Instructions:
Write a function called 'binarySearch', which accepts and array and a value, and returns the index at which the value exists.  Otherwise, return -1. 

Psuedo-Code:

The idea of binary search is you start at the middle, check to see if the number
given is equal to, greater than, or less than the element in the middle, and do
one of the following:

1. If the element we're looking at is EQUAL to the number requested, return true
2. If the element we're looking at is GREATER than the number requested, find 
   the element in the middle of the LEFT side of the current element and do the
   same check again. 
3. If the element we're looking at is LESS than the number requested, find 
   the element in the middle of the RIGHT side of the current element and do the
   same check again. 

*/

// Original Solution
function binarySearch(arr, elem) {

    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);

    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
};

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
};

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103));