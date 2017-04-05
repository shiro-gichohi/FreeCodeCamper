/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

*/


function mutation(arr) {
  var vv = 1;
  var arrOne = arr[0]
  var arrTwo = arr[1].split('');
  arrTwo.map(function(num){ return arrOne.indexOf(num) > 0 ?  vv += 1 : vv += 0; });
  return vv == arrTwo.length ? true : false;


}

console.log(mutation(["hello", "hey"]));

/*
EXPLANATION
indexOf() is a function for checking if a certain element in the array exist.
so we need to loop through the second array , to get if each element exist, make each character an array by using split method
Loop using map to get if each character exist, if it does , add one, if it doesnt add zeroth
to identify if the whole word exist, compare its length with the total number of EXISTENCE.
if equal, then the whole word exist.

*/
