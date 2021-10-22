// from ZTM React Appendix - Memoization

// Useful for React rerendering
// store each calculated value into an object, then check for that value in the object
// before running said calculation

let cache = {};

function memoize(n) {

  if (n in cache) {
    return cache[n];

  } else {
    console.log('hypothetical long calculation n + 1')
    cache[n] = n * n;
    return cache[n];
  }
}

console.log(cache, 'Cache 1')

console.log(memoize(1), 'Calculation 1')
console.log(memoize(1), 'Calculation 2')

console.log(cache, 'Cache 2')

console.log(memoize(2), 'Calculation 2-1')
console.log(memoize(2), 'Calculation 2-2')
console.log(memoize(2), 'Calculation 2-3')

console.log(cache, 'Cache 3')
