/**
 * "Given a string with space separated integers, return a string that contains
 * the minimum and maximum integers separated with a space"
 */

/**
 * golfed function
 */
f=(a,b=a.split` `.map(e=>+e))=>Math.min(...b)+' '+Math.max(...b)

/**
 * ungolfed
 * @param   {string} a a string with numbers separated by spaces
 * @returns {string}   the min and max numbers in str, separated by a space
 */
function getMinAndMax(a) {
  const b = a.split(' ').map(e => parseInt(e)); // split on spaces and parse elements as integers
  return Math.min(...b) + ' ' + Math.max(...b);
}
