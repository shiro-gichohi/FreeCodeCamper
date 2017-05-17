function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  collection.map(function(item){
    for (var x in source)
    {
      console.log(item[x] + source[x]);
    if(item[x] === source[x])
      arr.push(item);
    }

  });
  //  console.log(arr);
}

whatIsInAName([{ first: "Capulet", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
/**
What is needed
Make a function that looks through an array of objects (first argument) and returns an array of all objects
that have matching property and value pairs (second argument).
Each property and value pair of the source object has to be present in the object from the collection
if it is to be included in the returned array.

For example, if the first argument is
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
and the second argument is { last: "Capulet" },
then you must return the third object from the array (the first argument),
because it contains the property and its value, that was passed on as the second argument.

**/

function whatIsInANamed(collection, source) {
  // What's in a name?
  var arr = [];
  collection.map(function(item){
    if(item.first === source.first  || item.last === source.last)
    {
       arr.push(item);

    }
  });
  return arr;

}
