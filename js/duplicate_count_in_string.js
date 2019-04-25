/**
 * "Given a string, count the number of letters that have duplicates, ignoring
 * capitalization."
 */

/**
 * golfed function
 */
f=a=>([...a.toLowerCase()].sort().join``.match(/(.)\1+/gi)||[]).length

/**
 * ungolfed
 * @param   {string} a an input string
 * @returns {number}   the number of letters that have duplicates in the string
 */
function getDuplicateCount(a) {
  return (
    a.toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/(.)\1+/gi) || [] // sort string to count duplicates or if none, use empty array because a number must be returned
  ).length;
}
