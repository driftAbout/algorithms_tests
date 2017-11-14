'use strict';

var numbers = [];
var numbersLength = 300;
var searchCount = 1;

for (var i = 1; i <= numbersLength; i++){
  numbers.push(i);
}

//console.log('numbers', numbers);

searchNumbers( numbers, 231);


function searchNumbers(arr, val) {
  var searchArray = arr;
  var min = 0;
  var max = searchArray.length - 1;
  //var previousMax = max;
  //half the array length used to split the search in two pieces
  //max = Math.ceil(max / 2);
  //check each half looking for the value
  //if not there, check other half
  //if there, half again until only one value is left
  while (searchArray.length > 1 ){
    console.log('searchCount: ', searchCount++);
    //half the array length used to split the search in two pieces
    //max = Math.ceil(max / 2);
    console.log('min: ', min);
    console.log('max: ', max);
    searchArray = arr.slice(min, max);
    if (searchArray.includes(val)){
      console.log('searchArray.includes: ', searchArray, 'value: ', val );
    //  max = searchArray.length - 1;
      previousMax = max;
      //half the array length used to split the search in two pieces
      //max = Math.ceil(max / 2);
      max = Math.ceil((max - min) / 2) + min;
    } else {
      console.log('searchArray does not include: ', searchArray, 'value: ', val );
      min = max;
      max = previousMax;
      console.log('not include min: ', min);
      console.log('not include max: ', max);
      //max = arr.length - 1;
    }
  }
  console.log('searchArray final: ', searchArray[0]);
}
