/**
 * "Given a string with space separated integers, return a string that contains
 * the minimum and maximum integers separated with a space"
 */

/**
 * golfed function
 */
h=(a,b=a.split` `.map(e=>+e))=>Math.min(...b)+' '+Math.max(...b)

/**
 * ungolfed
 * @param   {string} str a string with numbers separated by spaces
 * @returns {string}     the min and max numbers in str, separated by a space
 */
function h(str) {
  const b = str.split(' ').map( e => parseInt(e)); // split on spaces and parse elements as integers
  return Math.min(...b) + ' ' + Math.max(...b);
}
