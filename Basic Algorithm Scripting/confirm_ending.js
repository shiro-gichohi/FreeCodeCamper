/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

*/
function confirmEnding(str, target) {

  return str.slice(-1) === target;
}

console.log(confirmEnding("Bastian", "n"));

/*
NOTE
slice is used for removing a character in a string at certain index.
slice(1) - removes the character at index 1, this will be the second character , the first starts at zero
slice(-1) - From backwards, the index starts at -1 not zero or negative 0 

*/
