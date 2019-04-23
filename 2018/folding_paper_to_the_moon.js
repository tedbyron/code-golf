/**
 * "Given a distance in meters and knowing that a piece of paper is .0001m
 * thick, calculate how many folds it would take the paper to reach the
 * distance. If input is negative, return null"
 */

/**
 * golfed function
 */
f=a=>a>0?Math.max(0,Math.ceil(Math.log2(1e4*a))):null

/**
 * ungolfed
 * @param   {number}      a a distance to fold to
 * @returns {number|null}   the number of folds or null if input is negative
 */
function foldTo(a) {
  return a > 0
    ? Math.max(0, Math.ceil( // required positive integer return
      Math.log2(1e4 * a)) // calculates folds based on .0001*2^n = d -> 2^n = 10000d
    )
    : null; // required null return for negative input
}
