// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  let sorted = arr.sort((a, b) => {
    return a == b ? 0 : a < b ? -1 : 1;
  });

  let sum = 0;

  for (let i = sorted[0]; i <= sorted[1]; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll([10, 19])); // 145
console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10
