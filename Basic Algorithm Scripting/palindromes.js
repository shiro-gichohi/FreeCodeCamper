/*Q2UESTION
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward,
ignoring punctuation, case, and spacing.
*/
function palindrome(str) {
var normalStr = str.replace(/[\W_]/g, "").toLowerCase();
  var reversed = normalStr.split('').reverse().join('');
  return normalStr === reversed;
}



palindrome("eye");

/*
Considering,
1.Remove all special characters 

*/
