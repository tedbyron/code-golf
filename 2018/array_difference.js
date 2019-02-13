/**
 * "Implement a difference function, which subtracts one list from another and
 * returns the result."
 */

/**
 * golfed function
 */
a=(b,c)=>b.filter(d=>d^[...c])
