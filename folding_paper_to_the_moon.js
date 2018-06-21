/**
 * "Given a distance in meters and knowing that a piece of paper is .0001m thick, calculate how many folds it would take the paper to reach the distance"
 */

/**
 * golfed
 */
f=d=>d>0?Math.max(0,Math.ceil(Math.log2(1e4*d))):null

function foldTo(d) {
  return d > 0
    ? Math.max(0, Math.ceil( // required positive integer return
      Math.log2(1e4 * d)) // approximate folds based on 2^n/.0001 = d -> 2^n = 1000d
    )
    : null; // required null return for negative input
};
