/**
 * "Check if an array contains all rotations of a string, e.g. for the string
 * 'abc' the array ['abc', 'bca', 'cab', 4, 5, false]" contains all of its
 * rotations
 */

/**
 * golfed function
 */
f=(a,b)=>[...a].every((_,i)=>b.includes(a.slice(i)+a.slice(0,i)))

/**
 * ungolfed
 * @param   {string}   a an input string
 * @param   {string[]} b an input array that may contain all rotations of s
 * @returns {boolean}    true if a contains all rotations of s
 */
function containAllRots(a, b) {
  return [...a]  // spread acts like split('')
    .every((_, i) => { // ensure every character follows callback
      return b.includes(a.slice(i) + a.slice(0, i)) // return true if b includes swapped substrings of a sliced at index i
    });
}
