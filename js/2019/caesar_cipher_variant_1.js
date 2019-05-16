/**
 * "This program performs a variation of the Caesar shift. The shift increases
 * by 1 for each character (on each iteration).If the shift is initially 1, the
 * first character of the message to be encoded will be shifted by 1, the second
 * character will be shifted by 2, etc."
 */

/**
 * golfed cipher function
 */
x=(a,b,c=[...a],d=c.map((e,f)=>e.replace(/[a-z]/i,g=>String.fromCharCode((h=g.charCodeAt(),i=h&96,h-i+b+f+129)%26-~i))).join``.match(RegExp(`.{1,${Math.ceil(c.length/5)}}`,'g')))=>d.length^5?d.concat(['']):d

/**
 * golfed decipher function
 */
y=(a,b)=>[...a.join``].map((c,d)=>c.replace(/[a-z]/i,e=>String.fromCharCode((f=e.charCodeAt(),g=f&96,f-g-b-d+129)%26-~g))).join``

/**
 * ungolfed cipher function
 * @param   {string}   str string to shift
 * @param   {number}   key how many characters to shift the first character
 * @returns {string[]}     array of 5 strings with each character shifted by key
 *                         + index
 */
function movingShift(str, key) {
  const splitStr = [...str];

  const arr = splitStr.map((cur, idx) => {
    return cur.replace(/[a-z]/i, m => {
      const charCode = m.charCodeAt();
      const letterCase = charCode & 96;

      return String.fromCharCode((charCode - letterCase + key + idx + 129) % 26 + letterCase + 1);
    });
  }).join('').match(RegExp(`.{1,${Math.ceil(splitStr.length/5)}}`, 'g'));

  return arr.length === 5 ? arr : arr.concat(['']);
}

/**
 * ungolfed decipher function
 * @param   {string[]} arr array of shifted characters
 * @param   {number}   key how many characters the first character is shifted
 * @returns {string}       arr reverse shifted and joined
 */
function demovingShift(arr, key) {
  return [...arr.join('')].map((cur, idx) => {
    return cur.replace(/[a-z]/i, m => {
      const charCode = m.charCodeAt();
      const letterCase = charCode & 96;

      return String.fromCharCode((charCode - letterCase - key - idx + 129) % 26 + letterCase + 1);
    });
  }).join('');
}
