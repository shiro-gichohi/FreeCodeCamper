var orders = [
  { amount : 100},
  { amount : 200},
  { amount : 300},
  { amount : 400}
]
var  totalAmount = orders.reduce(function(sum, num){ return sum + num.amount} , 0)
console.log(totalAmount);
