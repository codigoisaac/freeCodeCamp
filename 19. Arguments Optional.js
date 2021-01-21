// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether(a = undefined, b = undefined) {
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  } else if (typeof a == "number" && !b) {
    return function (secondNumber) {
      if (typeof secondNumber == "number") {
        return a + secondNumber;
      }
    };
  }
}

let sum = addTogether(2);
sum = sum(3);
console.log(sum);
