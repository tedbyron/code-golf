/**
 * "Given a string of n lines, each substring being n characters long and
 * separated by a newline, make a function that mirrors the string while keeping substrings in order, a function that mirrors substrings while keeping the string in order, and a high-order function that "
 */

/**
 * golfed
 */
v=s=>s.map(e=>[...e].reverse().join``)
h=s=>s.reverse()
o=(f,s)=>f(s.split`\n`).join`\n`

/**
 * ungolfed
 */

/**
 * mirrors elements but not input string array
 * @param  {string[]} a input split string
 * @return {string[]}   unmirrored string array with mirrored elements
 */
vertMirror = function vertMirror(a) {
  return a.map(function(e) { // map over all elements
    return [...e].reverse().join(''); // spread over all characters in element, reverse, and join back into string
  });
};

/**
 * mirrors input string array but not elements
 * @param  {string[]} a input split string
 * @return {string[]}   mirrored string array with unmirrored elements
 */
horMirror = function horMirror(a) {
  return a.reverse(); // reverse the elements in a
};

/**
 * high order function that applies f to s
 * @param  {function} f function to apply
 * @param  {string} s string to apply f to
 * @return {string}   s with f applied
 */
oper = function oper(f, s) {
  return f(s.split('\n')).join('\n'); // both mirror functions need s to be split at newlines and joined with newlines after the function is applied
};
