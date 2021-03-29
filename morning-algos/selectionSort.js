/*
Selection Sort Instructions:
  - Write a function which accepts an unsorted array, and returns the array soprted in descending order (largest value ===> smallest value)

Psuedo-Code:
- Store the first element (arr[0]) as the smallest seen so far.  
- Compare this item to the next item in the array until you find a smaller number.  
- If a smaller humber is found, designate the smaller number to be the new "minimum", and continue until the end of the array. 
- If the "minimum" is NOT the value(index) you initially began with, swap the two values.  
- Repeat this with the next element, until the array is sorted.  





*/


function selectionSort(arr) {

  // Loop over the array
  for(var i = 0; i < arr.length; i++) {

    // Set 'i' to the lowest/first element.  
    var lowest = i;

    // Start of the 2nd loop at the (i + 1) to compare against the 'lowest'.  
    for(var j = i + 1; j < arr.length; j++) {

      // If a lower value is found, reassign 'lowest' to the value.  
      if(arr[j] < arr[lowest]) {
        lowest = j;
      }
      if(ii !== lowest) {
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
      }
    }
  }

  return arr;

}
console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));