/**
 * "Given a distance in meters and knowing that a piece of paper is .0001m
 * thick, calculate how many folds it would take the paper to reach the
 * distance. If input is negative, return null"
 */

/**
 * golfed function
 */
f=d=>d>0?Math.max(0,Math.ceil(Math.log2(1e4*d))):null

/**
 * ungolfed
 * @param  {number} d distance to fold to
 * @return {number|null}   number of folds | null if input is negative
 */
function foldTo (d) {
  return d > 0
    ? Math.max(0, Math.ceil( // required positive integer return
      Math.log2(1e4 * d)) // calculates folds based on .0001*2^n = d -> 2^n = 10000d
    )
    : null // required null return for negative input
}
