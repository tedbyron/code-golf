/**
 * "Rotate a string's alphabetical character by 13 places and return the
 * rotated string"
 */

/**
 * golfed program
 */
alert(s=prompt().replace(/[a-z]/ig,m=>String.fromCharCode((c=m.charCodeAt(),a=c&96,c-a+142)%26-~a)))

/**
 * golfed function
 */
c=(s)=>s.replace(/[a-z]/ig,m=>String.fromCharCode((c=m.charCodeAt(),a=c&96,c-a+142)%26-~a))

/**
 * ungolfed
 * @param  {string} s string to rotate
 * @return {string}   rotated string
 */
function caesar (s) {
  return s.replace(/[a-z]/gi, // match each alphabetical character
    function (m) { // substring function on each match m
      return String.fromCharCode(
        (c = m.charCodeAt(), // char code at matched character
          a = c & 96, // bitwise check if lowercase or not, sets value of a to ASCII value of A-1 or a-1
          c - a + 142 // c - a is the position of c in the alphabet, then add (13+129)
        )%26 - ~a // modulus 26 to rotate past Z or z, then adds a+1 for an ASCII value
      )
    }
  )
}
