/**
 * "Create a function that returns the sum of the two lowest positive numbers
 * from an array of minimum 4 integers."
 */

/**
 * golfed
 */
s=n=>n.sort((x,y)=>x-y).slice(0,2).reduce((x,y)=>x+y)

/**
 * ungolfed
 * @param  {number[]} n input array
 * @return {number}   sum of the two lowest integers in n
 */
function sumTwoSmallestNumbers(n) {
  return n.sort(function(x, y) { return x - y })    // sort n with compareFunction that compares each element to the next with subtraction (sorts ascending)
    .slice(0,2) // slice first two elements from sorted array
    .reduce(function(x, y) { return x + y }) // reduce two-element array with callback that sums each element
}
