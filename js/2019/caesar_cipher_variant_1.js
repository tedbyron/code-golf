/**
 * @param   {string} str
 * @param   {number} key
 * @returns {string}
 */
function movingShift(str, key) {
  let arr = [...str];
  return arr.map((cur, idx) => {
    return cur.replace(/[a-z]/gi, m => {
      const charCode = m.charCodeAt();
      const letterCase = charCode & 96;
      return String.fromCharCode((charCode - letterCase + key + idx + 129) % 26 + letterCase + 1);
    });
  }).join('').match(RegExp(`.{1,${Math.ceil(arr.length/5)}}`, 'g'));
}
