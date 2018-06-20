/** 
 * "Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers." 
 */

/**
 * minified
 */
s=n=>n.sort((x,y)=>x-y).slice(0,2).reduce((x,y)=>x+y)

/**
 * beautified
 * @function
 * @param {number[]} numbers - input array
 */
function s(n) {
  return n.sort(function(x, y) { return x - y })  // sort n with compareFunction that compares each element to the next with subtraction (smaller integers have smaller compare values, sorts integers 
  .slice(0,2)                                     // slice first two elements from sorted array                            
  .reduce(function(x, y) { return x + y })        // reduce two-element array with callback that sums each element
}
