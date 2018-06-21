/**
 * "Output FizzBuzz if input integer is divisible by 5 and 3, or else Fizz if
 * it is divisible by 3, Buzz if it is divisible by 5, or the input integer if
 * it is divisible by neither"
 */

/**
 * golfed
 */
f=n=>(n%3?'':'Fizz')+(n%5?'':'Buzz')||n

/**
 * ungolfed
 * @param  {number} n input number
 * @return {string|number} string if n is divisible by 3 or 5
 */
function fizzBuzz(n) {
  let output;
  if (n % 3 === 0) {
    output += 'Fizz'
  }
  if (n % 5 === 0) {
    output += 'Buzz'
  }
  if (n % 3 !== 0 && n % 5 !== 0) {
    output = n
  }
  return output
}
