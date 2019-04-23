/**
 * "Check whether or not an input string is an isogram, if so return true"
 */

/**
 * golfed program
 */
alert((i=(a=prompt())=>!/(.).*\1/i.test(a))())

/**
 * golfed function
 */
i=a=>!/(.).*\1/i.test(a)

/**
 * ungolfed
 * @param   {string}  str an input string
 * @returns {boolean}     true if str is an isogram (no duplicate characters)
 */
function isIsogram(str) {
  return !(/(.).*\1/i.test(str));
}
