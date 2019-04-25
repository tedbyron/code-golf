/**
 * "Implement a difference function, which subtracts one list from another and
 * returns the result."
 */

/**
 * golfed function
 */
f=(a,b)=>a.filter(e=>!b.includes(e))
