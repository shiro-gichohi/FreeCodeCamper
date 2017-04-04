/*
Repeat a given string (first argument) num times (second argument).
Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  // repeat after me
var newstr = "";
if(num > 0) {
  for (var i = 1; i <= num ; i++){
    newstr += str;
  }
    return newstr ;
} else {
  return "";
}

}

console.log(repeatStringNumTimes("abc", 3));
