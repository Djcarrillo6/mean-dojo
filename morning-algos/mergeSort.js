/*
Merge Sort

Merging Arrays Notes:
* In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.

* Given two arrays which are sorted, this helper function should create a new array which is also a sorted, and consists of all of the elements in the two input arrays. 

* This function should run in O(n + m)time and )(n + m)space and SHOULD NOT modify the parameters passed to it. 
    - O(n + m) where 'n' & 'm' are the length of the two input arrays. They are usually a similiar length, if not the same length.  As either of the size of those arrays grows, so does the time needed to finish.   

'merge' function Psuedo-Code: 
- Create an empty array, take a look at the smallest values in each input array.
- While there are still values we haven't looked at:
    - If the value in the first array is smaller than the value in the second array, push the value in the first array into our 'results' and move on to the next value in the first array.
    - If the second value in the first array is larger than the value in the second array, push te value in the second array into our 'results' and m ove on to the next value in the second array.
    -  Once we exhuast one array, then we push in all remaining values from the other array.
    - Break up the array into halves until you have arrays that are empty.
    - Once you have smaller sorted arrays, merge those arrays with other arrays until you back at the full length of the array. 
    - Once the array has been merged back together, return the merged (and sorted) array.
*/

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    };
    // push remaining values if one array depletes before the other
    while (i < arr1.length) { 
        results.push(arr1[i]);
        i++;
    };
    // push remaining values if one array depletes before the other
    while (j < arr2.length) { 
        results.push(arr2[j]);
        j++;
    };
    return results;
};

// console.log(merge([1, 10, 50], [2, 14, 99]));

/*
mergeSort Psuedo-Code:
- Break up the array into halves until you have arrays that are empty, or have 1 element.
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
- Once the array has been merged back together, return the merged (and sorted!) array.
*/

// Recrusive Merge Sort
function mergeSort(arr) {

    // Recursive base-case
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2); // find mid point
    let left = mergeSort(arr.slice(0, mid)); // call mergersort on left
    let right = mergeSort(arr.slice(mid)); // call mergesort on right 
    return merge(left, right);
};
console.log(mergeSort([10, 24, 76, 73, 99, 111, 113, 112]));