'use strict';

var numbers = [];
var numbersLength = 300;

for (var i = 1; i <= numbersLength; i++){
  numbers.push(i);
}

searchNumbers( numbers, 301);

function searchNumbers(arr, val) {
  var searchArray = arr;
  var min = 0;
  var max = arr.length - 1;
  while (searchArray.length > 1 ){
    //reset the search array to part of the original array
    searchArray = arr.slice(min, max);
    if (searchArray.includes(val)){
      //save the max value as a variable, if the value was not in this slice
      //use the previous max to reset the array in the next search
      previousMax = max;
      //since min and max are references to the original array
      //caluculate the mid point of the original array to split the search in two pieces
      max = Math.ceil((max - min) / 2) + min;
    } else {
      //since the value was not in the first half of the slice
      //reset the min to the max to search the second half
      min = max;
      max = previousMax;
    }
  }
  console.log('searchArray final: ', searchArray[0]);
}
