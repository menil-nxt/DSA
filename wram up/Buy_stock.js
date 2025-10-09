// Best time to Buy and Sell Stock.

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

function buySell(stock) {
  let min = stock[0];
  let maxProfite = 0;

  for (let i = 0; i < stock.length; i++) {
    if (stock[i] - min > maxProfite) {
      // stock[i](current value of index)-min value > mxProfite  => maxProfite = stock[i](current value of index)-min value
      maxProfite = stock[i] - min;
    }
    if (stock[i] < min) {
      // current value of index < min value   =>  min = current value index
      min = stock[i];
    }
  }
  console.log(min); // for min it's give you min number
  return maxProfite; // maxProfite of buy and sell.
}

let stock = [6, 7, 3, 4, 5, 2, 9, 8];

let result = buySell(stock);
console.log(result);
