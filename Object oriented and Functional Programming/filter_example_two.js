//lets assume we have a basket of some shopping in an array
var shopping = [
  {name : "oranges" , type : "fruit"},
  {name : "kales" , type : "vegetable"},
  {name : "spinach" , type : "vegetable"},
  {name : "kiwi" , type : "fruit"},
  {name : "mango" , type : "fruit"}

]

//Then i need to get all the fruits that are from our shopping bag using filter
/*Points to remember
*functions are variables
* Filter function loops each item in the array into the callback function
*/
var fruits = shopping.filter(function(n) { return n.type == "fruit"});
console.log(fruits);
