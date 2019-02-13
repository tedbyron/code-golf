/**
 * "Take 2 strings with only alphabetical characters and return a new sorted
 * string with only unique characters"
 */

/**
 * golfed function
 */
l=(a,b)=>[...new Set(a+b)].sort().join``
