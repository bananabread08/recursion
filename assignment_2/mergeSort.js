/**
 * 1. Split arr to half.
 * 2. Recursively halve these halves until we get N arrays of [x,y];
 * 3. Call merge() to compare these halves
 */

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const halfIndex = Math.ceil(arr.length / 2); //estimate
  const firstHalf = arr.slice(0, halfIndex);
  const secondHalf = arr.slice(halfIndex);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    left[0] <= right[0]
      ? result.push(left.shift())
      : result.push(right.shift());
  }

  while (left.length) result.push(left.shift());

  while (right.length) result.push(right.shift());

  return result;
}

// works for odd Array length
console.log(mergeSort([1, 0, 4, 7, 9])); // [ 0, 1, 4, 7, 9 ];

// works for small array length even at length 1
console.log(mergeSort([1, 0])); // [0,1];

// works for large numbers and even with decimals
console.log(mergeSort([0.1, 230, 24, 5, 10006])); // [ 0.1, 5, 24, 230, 10006 ]
