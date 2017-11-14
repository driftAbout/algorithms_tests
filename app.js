'use strict';

var numbers = [];
var numbersLength = 300;

for (var i = 1; i <= numbersLength; i++){
  numbers.push(i);
}

//console.log('numbers', numbers);

searchNumbers( numbers, 27);


function searchNumbers(arr, val) {
  //var min = arr[0];
  //var max = arr[arr.length - 1];
  //var search_half = Math.ceil(max / 2);
  var min = 0;
  var max = arr.length - 1;
  max = Math.ceil(max / 2);
  //console.log('search_half: ', max);
  //var searchArray = arr.slice(min, max);
  //console.log('searchArray', searchArray);
  //console.log('searchArray.length', searchArray.length);
  var searchArray = arr;
  while (searchArray.length > 1 ){
    searchArray = arr.slice(min, max);
    if (searchArray.includes(val)){
      console.log('searchArray.includes: ', searchArray, 'value: ', val );
      //max = searchArray[searchArray.length - 1];
      max = searchArray.length - 1;
      //search_half = Math.ceil(max / 2);
    //  max = Math.ceil(max / 2);
    //  searchArray = arr.slice(min, max);
    } else {
      console.log('searchArray does not include: ', searchArray, 'value: ', val );
      min = max;
      max = arr.length - 1;
    //  searchArray = arr.slice(min, max);
    }
  }
}
