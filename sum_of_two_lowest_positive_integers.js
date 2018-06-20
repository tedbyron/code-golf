/** 
 * "Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers." 
 */

/**
 * minified
 */
s=n=>n.sort((x,y)=>x-y).slice(0,2).reduce((x,y)=>x+y)

/**
 * @function
 * @param {number[]} numbers - input array
 */
let sumTwoSmallestNumbers(numbers) = function() {
  let numbersAscending = numbers.sort(function(x, y) {
    return x - y
  }
  let twoLowest = numbersAscending.slice(0, 2)
  let sum = reduce((a,b)=>a+b)
}
