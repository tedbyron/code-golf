/**
 * "Implement a difference function, which subtracts one list from another and
 * returns the result."
 */

/**
 * golfed
 */
array_diff=(b,c)=>b.filter(d=>d^[...c])
