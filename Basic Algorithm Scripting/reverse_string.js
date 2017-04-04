function  reverseString(str)
{
  return  str.split("").reverse().join("");
}
console.log(reverseString("hello is my name"));

/*
*What am considering
*reverse() function is a method on array,
***So, first thing we convert the string into an array - Split function does the trick
*then since the result should be a string , we convert the array to string - join() function does the magic.
**********KAPUUT****************DONE******************
*/
