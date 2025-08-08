const accountId = 14556;
let accountEmail = "rani@gmail.com";
var accountPassword = "123456";
accountCity = "Nagpur";

// accountId = 2;  // not allowed bcz of the constant value

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "p@gmail.com";
accountPassword = 121212;
accountCity = "Pune";
let accountState;

console.log(accountId); // not allowed bcz of the constant value

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
