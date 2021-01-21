// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(array) {
  let flat = [];

  goDeep(array);

  function goDeep(arr) {
    for (let i = 0; i < arr.length; i++) {
      Array.isArray(arr[i]) ? goDeep(arr[i]) : flat.push(arr[i]);
    }
  }

  return flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
