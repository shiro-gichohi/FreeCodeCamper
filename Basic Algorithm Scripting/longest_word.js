/*Question
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/
function findLongestWord(str) {
var arr  =   str.split(" ");
var longestString = arr.reduce(function(a,b){ return b.length > a ? a = b.length : a; },0);
return longestString;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

/*
1.make the string an array - split does that.
2.loop through the array created to get the largest number
  - Reduce is abetter option - short and easy.
*/
//compare with for loop
function findLongestWord(str) {
  var r =  str.split(' ');
  var total = 0;
  for(var i = 0; i < r.length; i++)
   {
     if(r[i].length > total) {
       total = r[i].length;
     }
   }
  return total;
}
