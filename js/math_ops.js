/**
 * "Oh no, our Math object was 'accidently' reset. Can you re-implement some of
 * those functions? We can assure, that only non-negative numbers are passed as
 * arguments. So you don't have to consider things like undefined, null, NaN,
 * negative numbers, strings and so on."
 */

/**
 * golfed functions
 */
Math.round=n=>n+.5|0
Math.ceil=n=>n%1>0?n+1|0:n
Math.floor=n=>n|0

/**
 * ungolfed
 */

/**
 * @param   {number} n a positive number
 * @returns {number}   the closest integer to n
 */
Math.round = function(n) {
  return n + .5 | 0;
};

/**
 * @param   {number} n a positive number
 * @returns {number}   the ceiling of n
 */
Math.ceil = function(n) {
  return n % 1 > 0
    ? n + 1 | 0
    : n;
};

/**
 * @param   {number} n a positive number
 * @returns {number}   the floor of n
 */
Math.floor = function(n) {
  return n | 0;
};
