/**
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
