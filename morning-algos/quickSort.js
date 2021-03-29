/*
Quick Sort

* Pivot Helper Function:
- In order to implement 'quickSort', it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot.
- Given an array, this helper function should designate an element as the pivot.
- It should then rearrange elements in the array so that all values greater than pivot are moved to the right of the pivot.
- The order of elements on either side of the pivot DOES'NT matter!
- The helper should do this IN PLACE, that is, it should NOT create a new array.
- When complete, the helper should return the index of the pivot.

* Picking a pivot:
- The runtime of quickSort depends in part on how one selects the pivot.
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.
- For simplicity, we'll always choose the pivot to be the first element.

Pivot Psuedocode:
- It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
- Grab the pivot from the start of the array
- Store the current pivot index in a variable (this will keep track of where the pivots should end up)
- Loop through the array from the start until the end
        - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
- Swap the starting element (i.e. the pivot) with the pivot index.
*/

function pivot(arr, start = 0, end = arr.length - 1) {

    // ES2015 swap function
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        };
    };

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
};

/*
quickSort Psuedo-Code:
- Call the pivot helper on the array.
- When the helper return the to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
- Your base case occurs when you consider a subarray with less than 2 elements.
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left array sort 
        quickSort(arr, left, pivotIndex - 1);
        //right array sort
        quickSort(arr, pivotIndex + 1, right);
    };
    return arr;
};

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));

// Example
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1