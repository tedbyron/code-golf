/**
 * "Check if a string is a rotation of another string"
 */

/**
 * golfed function
 */
f=(a,b)=>a.length^b.length?!1:b.concat(b).includes(a)

/**
 * ungolfed
 * @param   {string}  a a string that will be checked
 * @param   {string}  b a string that a will be checked against
 * @returns {boolean}   true if a is a rotation of b
 */
function isRotation(a, b) {
  return a.length != b.length  // a cannot be a rotation of b unless it is the same length as  b
    ? false
    : b.concat(b).includes(a); // concatenating b with itself will produce a string that contains all rotations of b
}
