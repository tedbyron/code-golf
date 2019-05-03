/**
 * "Compose a higher order function which takes three parameters: two numbers
 * and one string that contains a word representing an arithmetic operation
 * that should occur (e.g. 'add'). Return the result of that operation on the
 * two numbers."
 */

/**
 * golfed function
 */
f=(a,b,c)=>({'a':a+b,'s':a-b,'m':a*b,'d':a/b}[c[0]])

/**
 * ungolfed
 * @param   {number} a         a number to perform the operation on
 * @param   {number} b         a number to perform the operation on
 * @param   {string} operation an arithmetic operation to perform
 * @returns {number}           the result of the operation on a and b
 */
function arithmetic(a, b, operation) {
  const ops = {
    'a': a + b,
    's': a - b,
    'm': a * b,
    'd': a / b,
  };

  return ops[operation[0]];
}
