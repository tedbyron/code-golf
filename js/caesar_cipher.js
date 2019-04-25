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
alert((a=prompt)().replace(/[a-z]/gi,m=>String.fromCharCode((c=m.charCodeAt(),d=c&96,c-d+b+129)%26-~d),b=+a()))

/**
 * golfed function
 */
f=(a,b)=>a.replace(/[a-z]/gi,m=>String.fromCharCode((c=m.charCodeAt(),d=c&96,c-d+b+129)%26-~d))

/**
 * ungolfed
 * @param   {string} str a string to rotate
 * @param   {number} key a length to rotate str
 * @returns {string}     the rotated string
 */
function caesar(str, key) {
  return str.replace(/[a-z]/gi, m => { // substring function on each match of an alphabetical character
    const charCode = m.charCodeAt(); // char code at matched character
    const letterCase = charCode & 96; // bitwise check if lowercase or not, sets value of letterCase to ASCII value of A-1 (64) or a-1 (96)
    return String.fromCharCode((charCode - letterCase + key + 129) % 26 + letterCase + 1); // charCode - letterCase is the position of charCode in the alphabet, add key and 129 in case key is negative, mod 26 to rotate past Z or z, then add letterCase+1 for an ASCII value
  });
}
