/**
 * @param   {string}   str string to shift
 * @param   {number}   key how many characters to shift the first character
 * @returns {string[]}     array of 5 strings with each character shifted by
 *                         key + index
 */
function movingShift(str, key) {
  const arr = [...str];

  return arr.map((cur, idx) => {
    return cur.replace(/[a-z]/i, m => {
      const charCode = m.charCodeAt();
      const letterCase = charCode & 96;

      return String.fromCharCode((charCode - letterCase + key + idx + 129) % 26 + letterCase + 1);
    });
  }).join('').match(RegExp(`.{1,${Math.ceil(arr.length/5)}}`, 'g'));
}

/**
 * @param   {string[]} arr array of 5 strings that have been shifted
 * @param   {number}   key how many characters the first character was shifted
 * @returns {string}       joined arr with each character shifted back
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
