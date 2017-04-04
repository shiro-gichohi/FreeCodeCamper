/* Question
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

function factorialize(num) {
  total = 1;
  for(var i = 1; i <= num ; i++)
  {
     total *= i;
  }
  return total;
}


/*
What im considering
1.To get the numbers from 1 to the number passed (inclusive) , use an iterate function -
  ------my case, opted for loop
^/
