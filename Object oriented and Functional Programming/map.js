//still using our shapping list
var shopping = [
  {name : "oranges" , type : "fruit"},
  {name : "kales" , type : "vegetable"},
  {name : "spinach" , type : "vegetable"},
  {name : "kiwi" , type : "fruit"},
  {name : "mango" , type : "fruit"}
]

//list the item names from our shopping list using a map
var shoppingList = shopping.map(function(item) { return item.name; });
console.log(shoppingList);
