"use strict";

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​th customer has in the j​th bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
// Example 1:
// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.
// Example 2:
// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation: 
// 1st customer has wealth = 6
// 2nd customer has wealth = 10 
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.
// Example 3:
// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17
// Constraints:
// m == accounts.length
// n == accounts[i].length
// 1 <= m, n <= 50
// 1 <= accounts[i][j] <= 100
// pseudocode
//   * the output = the most amount of money
//   * tracker that starts at 0 and is replaced with any number greater as we go through the program
//   * loop through each customer = each index of master / main array
//   * for each customer, loop through their bank accounts and add up their money
//   * return the highest number
var monies = [[1, 2, 3], [4, 5, 6], [2, 5, 8]];

var getCustomer = function getCustomer(mainArray) {
  var wealthiestCustomer = 0; // returns each customers bank accounts

  for (var customerIndex = 0; customerIndex < mainArray.length; customerIndex++) {
    // console.log(mainArray[customerIndex]);
    var customerBankAccounts = mainArray[customerIndex]; // console.log(customerBankAccounts);
    // if (customerBankAccounts === mainArray[customerIndex]) {
    //   console.log(true);
    // } else {
    //   console.log(false);
    // }

    var customerWealth = 0;

    for (var bankIndex = 0; bankIndex < customerBankAccounts.length; bankIndex++) {
      // console.log(customerBankAccounts[bankIndex]);
      customerWealth += customerBankAccounts[bankIndex];
    } // console.log(customerWealth);


    if (customerWealth > wealthiestCustomer) {
      wealthiestCustomer = customerWealth;
    } // console.log(wealthiestCustomer);

  }

  return wealthiestCustomer;
};

var richest = getCustomer(monies);
console.log('====================================');
console.log(richest);
console.log('====================================');