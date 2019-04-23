/**
 * "Create a function that returns the sum of the two lowest positive numbers
 * from an array."
 */

/**
 * golfed function
 */
s=n=>n.sort((x,y)=>x-y).slice(0,2).reduce((x,y)=>x+y)

/**
 * ungolfed
 * @param   {number[]} n an input array
 * @returns {number}     the sum of the two lowest integers in n
 */
function sumTwoSmallest(n) {
  return n.sort((x, y) => x - y) // sort n with compareFunction that compares each element to the next with subtraction (sorts ascending)
    .slice(0,2) // slice first two elements from the sorted array
    .reduce((x, y) => x + y); // reduce the two-element array with callback that sums each element
}
