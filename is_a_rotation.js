/**
 * "Check if a string is a rotation of another string"
 */

/**
 * golfed
 */

i=(a,b)=>a.length^b.length?!1:b.concat(b).includes(a)

/**
 * checks if a is a rotation of b
 * @param  {string}  a string that will be checked
 * @param  {string}  b string that a will be checked against
 * @return {boolean}   true if a is a rotation of b
 */
function isRotation(a, b) {
  return a.length == b.length  // a cannot be a rotation of b unless it is the same length as  b
    ? false     
    : b.concat(b).includes(a); // concatenating b with itself will produce a string that contains all rotations of b
};
