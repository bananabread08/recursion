/*
constants: 
n = 0, n = 1 => [0,1]
*/

function fibs(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    i < 2 ? arr.push(i) : arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr;
}

console.log(fibs(8)); // [0, 1, 1,  2, 3, 5, 8, 13]
console.log(fibs(4)); // [ 0, 1, 1, 2 ]
