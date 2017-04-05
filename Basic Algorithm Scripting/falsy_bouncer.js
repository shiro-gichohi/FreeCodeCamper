/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
var arg = ["false", "null", 0, "", "undefined", "NaN"];

  var fileteredArray = arr.filter(function(arg){
    return arg
  });
  return fileteredArray;
}

console.log(bouncer([7, "ate", "", false, 9]));

/*
Create an array of the elements to be filtered and pass them in the callback function
Filter returns a shorted array , ommitting the UNwanted items.

*/
