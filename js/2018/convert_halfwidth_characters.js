/**
 * "Convert a string's halfwidth characters to their fullwidth forms. Fullwidth
 * characters are commonly used in Asian technology to match the width of other
 * languages' characters."
 */

/**
 * golfed program
 */
alert(prompt().replace(/[!-~]/g,m=>String.fromCharCode(m.charCodeAt()+0xFEE0)))

/**
 * golfed function
 */
f=a=>a.replace(/[!-~]/g,m=>String.fromCharCode(m.charCodeAt()+0xFEE0))
