/**
 *
 */

/**
 * golfed
 */
d=a=>(a.toLowerCase().split('').sort().join('').match(/(.)\1+/gi)||[]).length
