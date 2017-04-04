/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
var arrOfLargestNumbers = [];
arr.map(function(num) {
    var largestNumber = num.reduce(function(a,b){ return b > a ? a = b : a ; },0);
     arrOfLargestNumbers.push(largestNumber);
});
 return arrOfLargestNumbers;

}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//How beautiful it is learning functional programming , compare with for loop i did before
function largestOfFour(arr) {
var largestArr = [];
for(var i=0; i<arr.length; i++)
   {
     largestArr.push(Math.max.apply(null,arr[i]));
   }
  return largestArr;

}
