/*
Coin Change 

- Write a function that creates and returns an object.
* Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.

Example: coinChange(312) returns  ===> {dollars: 3, dimes: 1, pennies: 2};
Example: coinChange(78) returns ===> {quarters: 3, pennies: 3};

BONUS: 
* Given an object with certain amounts of denominations of US money, alter the object so that the configuration is optimal.
Example: coinChange({dollars: 2, dimes: 15, pennies: 5}) returns ===> {dollars: 3, quarters: 2, nickels: 1};
*/

const optimalCoinChange = cents => {
  let dollar = Math.floor(cents/100);
  cents -= 100 * dollar;
  let quarter = Math.floor(cents/25);
  cents -= 25 * quarter;
  let dime = Math.floor(cents/10);
  cents -= 10 * dime;
  let nickel = Math.floor(cents/5);
  cents -= 5 *nickel;
  let penny = cents;
  console.log(`Dollars: ${dollar}, Quarters: ${quarter}, Dimes: ${dime}, Nickels: ${nickel},Pennies: ${penny}`);
};
// optimalCoinChange(378);

const coinObject = {dollars: 2, dimes: 15, pennies: 5};

// BONUS
const getTotalCents = (obj) => {
  const { dollars, quarters, dimes, nickels, pennies } = obj;
  let centTotal = 0;

  if(dollars){
  let d = Math.floor(dollars * 100);
  centTotal += d;
  }
  if(quarters){
  let q = Math.floor(quarters * 25);
  centTotal += q;
  }
  if(dimes) {
  let di = Math.floor(dimes * 10);
  centTotal += di;
  }
  if(nickels) {
  let n = Math.floor(nickels * 5);
  centTotal += n;
  }
  if(pennies){
  let p = Math.floor(pennies * 1);
  centTotal += p;
  }
  return optimalCoinChange(centTotal);
};

getTotalCents(coinObject);