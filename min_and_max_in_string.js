/**
 * "Given a string with space separated numbers, return a string that contains
 * the minimum and maximum numbers separated with a space"
 */

/**
 * golfed
 */
h=(a,b=a.split(' ').map(e=>+e))=>Math.max(...b)+' '+Math.min(...b)
