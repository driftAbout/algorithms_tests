'use strict';

var numbers = [];
var numbersLength = 300;

for (var i = 1; i <= numbersLength; i++){
  numbers.push(i);
}

//console.log('numbers', numbers);

searchNumbers( numbers, 27)


function searchNumbers(arr, val) {
  var min = arr[0];
  var max = arr[arr.length - 1];
  var search_half = Math.ceil(max / 2);
  console.log('search_half: ', search_half);
  var searchArray = arr.slice(min, search_half);
  if (searchArray.includes(val)){
    console.log('searchArray.includes: ', searchArray, 'value: ', val );
    max = searchArray[searchArray.length - 1];
    search_half = Math.ceil(max / 2);
    searchArray = arr.slice(min, search_half);
  } else {
    console.log('searchArray does not include: ', searchArray, 'value: ', val );
    min = max;
    searchArray = arr.slice(search_half, max);
  }
}
