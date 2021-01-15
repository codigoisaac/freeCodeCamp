// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let arr = [1, 1];
  for (let i = 1; i < num; i = arr[arr.length - 1]) {
    arr.push(i + arr[arr.length - 2]);
  }

  let sum = 0;
  for (let i in arr) {
    if (arr[i] % 2 != 0 && arr[i] <= num) {
      sum += arr[i];
    }
  }

  return sum;
}

sumFibs(300);
