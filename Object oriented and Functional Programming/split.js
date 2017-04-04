var string = "Split me into an array";
/*From the string above lets get an array of our string
* since Split splits a string into an array , we will use split method
* Argument passed to the split function is the delimiter
* ******-used to determine points where the string should be split at
*/
var r = string.split(" ");
console.log(r);
//This is whta we get  ["Split" "me" "into" "an" "array"]

/***************************************************************************/
//Next Challnged - From the array we have created  get the string that is longest
var big = r.reduce(function(a,b){ return b.length > a ? a = b.length : ""; } ,0)
var result = r.filter(function(st) { return st.length === big });
console.log(result.join(" ") + " Longest word(s) found with a length of " + big);
