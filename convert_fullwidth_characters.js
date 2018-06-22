/**
 * "Convert a string's fullwidth characters to their halfwidth forms. Fullwidth
 * characters are commonly used in Asian technology to match the width of other
 * languages' characters."
 */

/**
 * golfed program
 */
alert(prompt().replace(/[！-～]/g,m=>String.fromCharCode(m.charCodeAt()-0xFEE0)))

/**
 * golfed function
 */
c=s=>s.replace(/[！-～]/g,m=>String.fromCharCode(m.charCodeAt()-0xFEE0))
