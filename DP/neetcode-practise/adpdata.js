/*
1. Get all the transactions of last year's top earner. This means find the employee with the highest sum total of amount within the prior calendar year. Prior calendar year means, if it is currently 2022, we want only to consider transactions in 2021.
from Surya Kumar, Gollapudi to everyone:    12:07 PM
2. With last year's top earner's transactions get the transactionIDs where the type is alpha.
*/
async function getDataAndSolve(year) {
  const url = `https://interview.adpeai.com/api/v2/get-task`;
  let data = await fetch(url);
  data = await data.json();
  //console.log(data);
  let { transactions } = data;
  let largestAmount = 0;
  let largestTransaction = null;
  transactions = transactions.filter((transaction) => {
      const { timestamp } = transaction;
      const date = new Date(timestamp);
    //   console.log()
      if (date.getFullYear() == `${year}`) {
          return true;
        }
        return false;
    });
  console.log(transactions);
  let totalearingMap = {};
  for (let i = 0; i < transactions.length; i++) {
    const {
      amount,
      employee: { id },
    } = transactions[i];
    if (totalearingMap[id]) {
      totalearingMap[id] += amount;
    } else {
      totalearingMap[id] = amount;
    }
  }
  for (let [key, value] in Object.entries(totalearingMap)) {
    if (largestAmount < value) {
      largestAmount = value;
      largestTransaction = key;
    }
  }
  const allTransactions = transactions.filter((transaction) => {
    if (transaction.employee.id === largestTransaction) {
      return true;
    }
    return false;
  });
  const alphaTransactions = allTransactions.filter(
    (transaction) => transaction.type === "alpha"
  );
  console.log(alphaTransactions);
  return allTransactions;
}

getDataAndSolve(2021);

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  const lydia = new Person('Lydia', 'Hallie');
  const sarah = Person('Sarah', 'Smith');
  console.log(lydia); // 
  console.log(sarah);

const parentSum = (a,b)=>{
    if(results[`${a}${b}`]){
        return results[`${a}${b}`];
    }
    results[`${a}${b}`] = sum(a,b);
    return results[`${a}${b}`];
}
let results = {};
function sum(a, b) {
    return a + + b;
}
console.log(sum(1, '2'));
