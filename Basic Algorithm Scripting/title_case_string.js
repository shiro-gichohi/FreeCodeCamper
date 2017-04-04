/*
Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/
function titleCase(str) {
  var arr = str.toLowerCase().split(" "); //we now have an array of elements in lowercase
  var arrTitleCased =    arr.map(function(chr) { return chr[0].toUpperCase() + chr.slice(1)});
  return arrTitleCased.join(" "); // make the array a string
}




console.log(titleCase("I'm a little tea pot"));
//I'm A Little Tea Pot



/*
1.Make the whole string lowercase
2.Create an array of the string using split function
3.loop titlecasing each array value first character toUpperCase
4.Slice the first indexed value- it is a repeat of the zero indexed element

*/
