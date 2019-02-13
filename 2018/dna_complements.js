/**
 * In DNA strings, symbols "A" and "T" are complements of each other, as "C"
 * and "G". You have function with one side of the DNA (string, except for
 * Haskell); you need to get the other complementary side. The DNA strand is
 * never empty or there is no DNA at all
 */

/**
 * golfed function
 */
d=a=>a.replace(/./g,c=>b[c])
b={A:'T',T:'A',C:'G',G:'C'}


/**
 * ungolfed
 * @param {string} a the input DNA nucleobases
 */
function dnaStrand(a) {
  return a.replace(/./g, c => { // replace every character with the value in b
    return b[c]
  })
}

b = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C'
}
