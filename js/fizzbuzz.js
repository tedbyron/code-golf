/**
 * "Output FizzBuzz if input integer is divisible by 5 and 3, or else Fizz if
 * it is divisible by 3, Buzz if it is divisible by 5, or the input integer if
 * it is divisible by neither"
 */

/**
 * golfed function
 */
f=a=>(a%3?'':'Fizz')+(a%5?'':'Buzz')||a

/**
 * ungolfed
 * @param   {number}        a an input number
 * @returns {string|number}   string or n if n is not divisible by 3 or 5
 */
function fizzBuzz(a) {
  let output;

  if (a % 3 === 0) {
    output += 'Fizz';
  }
  if (a % 5 === 0) {
    output += 'Buzz';
  }
  if (a % 3 !== 0 && a % 5 !== 0) {
    output = a;
  }

  return output;
}
