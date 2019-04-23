/**
 * "Check if an array contains all rotations of a string, e.g. for the string
 * 'abc' the array ['abc', 'bca', 'cab', 4, 5, false]" contains all of its
 * rotations
 */

/**
 * golfed function
 */
c=(s,a)=>[...s].every((c,i)=>a.includes(s.slice(i)+s.slice(0,i)))

/**
 * ungolfed
 * @param   {string}   s an input string
 * @param   {string[]} a an input array that may contain all rotations of s
 * @returns {boolean}    true if a contains all rotations of s
 */
function containAllRots (s, a) {
  return [...s]  // spread acts like split('')
    .every(function (c, i) { // ensure every character follows callback
      return a.includes(s.slice(i) + s.slice(0, i)) // return true if a includes swapped substrings of s sliced at index i
    })
}
