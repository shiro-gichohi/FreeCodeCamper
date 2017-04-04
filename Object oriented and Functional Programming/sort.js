//When no call back is passed, the array is arranged alphabetically.
var animals = ["cow","goat","rat","zebra"].sort();
console.log(animals + " sorted alphabetically");

//To arrange numericaly, we pass a callback function.
//1.Lets return from largest to the smallest
var numbers = [33,44,2,4,78].sort(function(a,b) { return b - a;});
console.log(numbers + " largest to smallest");

//1.Lets return from smallest to the largest
var numbers = [33,44,2,4,78].sort(function(a,b) { return a - b});
console.log(numbers + " smallest to largest");
