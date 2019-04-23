/**
 * "Given a string of n lines, each substring being n characters long and
 * separated by a newline, make a function that mirrors the string while
 * keeping substrings in order, a function that mirrors substrings while
 * keeping the string in order, and a higher-order function that takes one of
 * the mirror functions as an argument"
 */

/**
 * golfed functions
 */
v=s=>s.map(e=>[...e].reverse().join``)
h=s=>s.reverse()
o=(f,s)=>f(s.split`\n`).join`\n`

/**
 * ungolfed
 */

/**
 * mirrors elements but not input string array
 * @param   {string[]} a an input split string
 * @returns {string[]}   the unmirrored string array with mirrored elements
 */
function vertMirror (a) {
  return a.map(e => { // map over all elements
    return [...e].reverse().join(''); // spread over all characters in element, reverse, and join back into string
  });
}

/**
 * mirrors input string array but not elements
 * @param   {string[]} a an input split string
 * @returns {string[]}   the mirrored string array with unmirrored elements
 */
function horMirror (a) {
  return a.reverse(); // reverse the elements in a
}

/**
 * higher-order function that applies f to s
 * @param   {function} f a function to apply
 * @param   {string}   s a string to apply f to
 * @returns {string}     the result of f applied to s
 */
function oper (f, s) {
  return f(s.split('\n')).join('\n'); // both mirror functions need s to be split at newlines and joined with newlines after the function is applied
}
