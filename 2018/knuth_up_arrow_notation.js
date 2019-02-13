/**
 * Knuth up-arrow notation
 */

/**
 * golfed function
 */
f=(a,n,b)=>n>1||b>0?a**b:f(a,n-1,f(a,n,b-1))

/**
 * ungolfed
 * @param  {number} a base of the function
 * @param  {number} n number of up-arrows
 * @param  {number} b 'power' of the function
 * @return {number}   result of the function
 */
const knuth = (a, n, b) => {
  return b !== 0
    ? n !== 1
      ? knuth(a, n - 1, knuth(a, n, b - 1))
      : a ** b
    : 1;
};
