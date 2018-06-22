/**
 * "Check if an array contains all rotations of a string, e.g. for the string
 * 'abc' the array ['abc', 'bca', 'cab', 4, 5, false]" contains all of its
 * rotations
 */

/**
 * golfed
 */
c=(s,a)=>[...s].every((c,i)=>a.includes(s.slice(i)+s.slice(0,i)))

/**
 * ungolfed
 * @param  {string}   s string to check
 * @param  {string[]} a may contain all rotations of s
 * @return {boolean}   true if a contains all rotations of s
 */
function containAllRots (s, a) {
  return s.split('')  // split between every char in s
    .every(function (c, i) { // ensure every char follows callback
      return a.includes(s.slice(i) + s.slice(0, i)) // return if a includes swapped substrings of s sliced at index i
    })
}
