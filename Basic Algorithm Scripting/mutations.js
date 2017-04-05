/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

*/


function mutation(arr) {
  var vv = 0;
  var arrOne = arr[0].toLowerCase();
  var arrTwo = arr[1].toLowerCase().split('');
  arrTwo.map(function(num){ return arrOne.indexOf(num) > -1 ?  vv += 0 : vv += 1; });
  console.log(vv ,  arrTwo.length );
  return vv === 0 ? true : false;


}

console.log(mutation(["Mary", "Aarmy"]) );

/*
EXPLANATION
indexOf() is a function for checking if a certain element in the array exist. (In Jqery we use inArray())
1.To avoid troubles make both arrays to lower case - toLowerCase() function does that.
2.Access the second array arr[1] which is the second argument and create an array of each character -split() does that.
  so we need to loop through the second array , to get if each element exist, make each character an array by using split method
  Loop using map to get if each character exist, if it doesNOT indexOf() returns -1 , hence if it does it should return value more than -1

3.So if it exists , keep adding zero , so that the result will be zero otherwse keep adding one
4.If it exists the result should be zero hence TRUE otherwise if not Zero, then return false

*/
