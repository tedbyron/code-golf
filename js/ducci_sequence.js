/**
 * "Given an n-tuple of integers (a_1, a_2, ... a_n) the next n-tuple in the
 * sequence is formed by taking the absolute differences of neighboring
 * integers. Emit the number of steps it takes for the sequence to descend to
 * zero or a repeating pattern"
 */

/**
* golfed program
*/
(f=(a=prompt().match(/[0-9]+/g),b=[],c=1)=>a.some(x=>x^0)&&!b.includes(''+a)?f(a.map((x,y)=>Math.abs(x-a[(y+1)%a.length])),[...b,''+a],++c):alert(c))()

/**
 * golfed function
 */
f=(a,b=[],c=1)=>a.some(x=>x^0)&&!b.includes(''+a)?f(a.map((x,y)=>Math.abs(x-a[(y+1)%a.length])),[...b,''+a],++c):c

/**
 * ungolfed
 * @param   {number} a    current n-tuple
 * @param   {number} b=[] array of previous n-tuples joined as strings
 * @param   {number} c=1  current step in the sequence
 * @returns {number}      number of steps for the sequence to descend
 */
function ducci(a, b = [], c = 1) {
  return a.some(x => x != 0) && !b.includes(parseInt(a))
    ? ducci(a.map((x,y) => {
        return Math.abs(x - a[(y + 1) % a.length])
      }), [...b, String(a)], ++c)
    : c;
}
