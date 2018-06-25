/**
 * "Given an n-tuple of integers (a_1, a_2, ... a_n) the next n-tuple in the
 * sequence is formed by taking the absolute differences of neighboring
 * integers. Emit the number of steps it takes for the sequence to descend to
 * zero or a repeating pattern"
 */

/**
* golfed program
*/
(d=(a=prompt().match(/[0-9]+/g),b=[],c=1)=>a.some(x=>x^0)&&!b.includes(''+a)?d(a.map((x,y)=>Math.abs(x-a[(y+1)%a.length])),[...b,''+a],++c):alert(c))()

/**
 * golfed function
 */
d=(a,b=[],c=1)=>a.some(x=>x^0)&&!b.includes(''+a)?d(a.map((x,y)=>Math.abs(x-a[(y+1)%a.length])),[...b,''+a],++c):c

/**
 * ungolfed
 * @param  {number}   a      current n-tuple
 * @param  {string[]} b = [] current step in the sequence
 * @param  {number}   c = 1  array of previous n-tuples joined as Strings
 * @return {number}          number of steps for the sequence to descend
 */
function ducci (a, b = [], c = 1) {
  let a = prompt()
  a = a.split(/,\s/g)
  return a.some(x => x != 0) && !b.includes(parseInt(a))
    ? d(a.map((x,y) => Math.abs(x - a[(y + 1) % a.length])), [...b, String(a)], ++c)
    : c
}
