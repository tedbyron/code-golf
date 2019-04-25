/**
 * "Given a number, return a string with hyphens before and after each odd
 * integer, but do not begin or end the string with a dash mark."
 */

/**
 * golfed function
 */
f=a=>a?(''+a).match(/[13579]|[02468]+/g).join`-`:''+a

/**
 * ungolfed
 * @param   {number} num a number to dashatize
 * @returns {string}     the dashatized num or num.toString() if num is falsey
 */
function dashatize(num) {
  return num
    ? num.toString()
      .match(/[13579]|[02468]+/g) // match all consecutive even or odd numbers
      .join('-')
    : num.toString(); // if num is falsey, return the falsey value as a string
}
