/*
  ...fibsRec(n-1) gets the previous f(n) numbers
*/

function fibsRec(n) {
  return n > 2
    ? [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]] // f(n)
    : [0, 1]; // f(0) and f(1)
}

console.log(fibsRec(8));
