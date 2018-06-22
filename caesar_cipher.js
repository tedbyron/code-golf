/**
 * "Implement a Caesar cipher, both encoding and decoding. The key is an
 * integer from 1 to 25. This cipher rotates the letters of the alphabet (A to
 * Z). The encoding replaces each letter with the 1st to 25th next letter in
 * the alphabet (wrapping Z to A). So key 2 encrypts "HI" to "JK", but key 20
 * encrypts "HI" to "BC". This simple "monoalphabetic substitution cipher"
 * provides almost no security, because an attacker who has the encoded message
 * can either use frequency analysis to guess the key, or just try all 25 keys."
 */

/**
 * golfed program
 */
alert((s=prompt)().replace(/[a-z]/gi,m=>String.fromCharCode((c=m.charCodeAt(),a=c&96,c-a+k+129)%26-~a),k=+s()))

/**
 * golfed function
 */
c=(k,s)=>s.replace(/[a-z]/gi,m=>String.fromCharCode((c=m.charCodeAt(),a=c&96,c-a+k+129)%26-~a))

/**
 * ungolfed
 * @param  {number} k amount to rotate s
 * @param  {string} s string to rotate
 * @return {string}   rotated string
 */
function caesar (k, s) {
  return s.replace(/[a-z]/gi, // match each alphabetical character
    function (m) { // substring function on each match m
      return String.fromCharCode(
        (c = m.charCodeAt(), // char code at matched character
          a = c & 96, // bitwise check if lowercase or not, sets value of a to ASCII value of A-1 or a-1
          c - a + k + 129 // c - a is the position of c in the alphabet, then add key value and 129
        )%26 - ~a // modulus 26 to rotate past Z or z, then adds a+1 for an ASCII value
      )
    }
  )
}
