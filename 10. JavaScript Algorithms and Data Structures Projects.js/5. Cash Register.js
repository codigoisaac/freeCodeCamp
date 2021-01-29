// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

let values = {
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

const total = (drawer) => {
  let total = 0;
  for (let i of drawer) {
    total += i[1];
  }
  return total;
};

function calcChange(cid, mtr) {
  let change = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    let unitChange = [],
      currency = cid[i][0],
      amount = cid[i][1],
      value = values[currency],
      unitAdded = 0;

    while (value <= mtr && amount >= value) {
      amount -= value;
      mtr = (mtr -= value).toFixed(2);
      unitAdded += value;
      unitChange.splice(0, 1, [currency, unitAdded]);
    }

    if (unitChange.length > 0) {
      change.push(unitChange[0]);
    }
  }

  if (total(change) < mtr) {
    change = [];
  }

  return change;
}

function checkCashRegister(price, cash, cid) {
  let amount = total(cid),
    mtr = cash - price, // money to return
    status,
    change = [];

  if (amount > mtr) {
    change = calcChange(cid, mtr);
    status = change.length == 0 ? "INSUFFICIENT_FUNDS" : "OPEN";
  } else if (amount == mtr) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "INSUFFICIENT_FUNDS";
  }

  return { status, change };
}

///////////////////////////////////////////////////////////////////
// tests

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

console.log(
  checkCashRegister(3.26, 100, [
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

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
