// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

///

//todo
// not finished yet

const amount = (cid) => {
  let total = 0;
  for (let i of cid) {
    total += i[1];
  }
  return total;
};

let vals = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

function checkCashRegister(price, cash, cid) {
  if (amount(cid) >= cash - price) {
    let ytr = cash - price; // yet to return
    let returneds = [];

    for (let i = cid.length - 1; i >= 0; i--) {
      let curVal = vals[cid[i][0]];
      let currs = [];
      let returnedHere = 0;

      while (curVal <= ytr && cid[i][1] > returnedHere) {
        ytr -= curVal;
        returnedHere += curVal;
        currs.push([cid[i][0], returnedHere]);
      }

      if (currs.length > 0) {
        returneds.push(currs[currs.length - 1]);
      } else {
        returneds.push([cid[i][0], 0]);
      }
    }

    let stat = amount(cid) > cash - price ? "OPEN" : "CLOSED";
    // console.log(amount(cid), (cash - price), stat)

    return { status: stat, change: returneds.reverse() };
  } else {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
// {status: "OPEN", change: [["QUARTER", 0.5]]}

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//CLOSED

// if closed, return status and cid ;
// if open, return status and change ;
