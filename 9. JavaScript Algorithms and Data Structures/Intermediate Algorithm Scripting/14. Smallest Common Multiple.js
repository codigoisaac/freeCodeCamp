// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  arr = arr.sort((a, b) => b - a);

  for (let i = arr[0] - 1; i >= arr[arr.length - 1] + 1; i--) {
    arr.splice(arr.length - 1, 0, i);
  }

  let multi = 0,
    loop = 1,
    i;

  do {
    multi = arr[0] * loop * arr[1];
    for (i = 2; i < arr.length; i++) {
      if (multi % arr[i] !== 0) {
        break;
      }
    }
    loop++;
  } while (i !== arr.length);

  return multi;
}

smallestCommons([5, 1]);
