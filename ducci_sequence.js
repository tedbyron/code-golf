/**
 * "Given an n-tuple of integers (a_1, a_2, ... a_n) the next n-tuple in the
 * sequence is formed by taking the absolute differences of neighboring
 * integers. Emit the number of steps it takes for the sequence to descend to
 * zero or a repeating pattern"
 */

/**
* golfed program
*/
(d=(a=prompt().split(/,\s/g),b=[],c=1)=>a.some(x=>x^0)&&!b.includes(''+a)?d(a.map((x,y)=>Math.abs(x-a[(y+1)%a.length])),[...b,''+a],++c):alert(c))()

/**
 * golfed function
 */
d=(a,b=[],c=1)=>a.some(x=>x^0)&&!b.includes(''+a)?d(a.map((x,y)=>Math.abs(x-a[(y+1)%a.length])),[...b,''+a],++c):c

/**
 * ungolfed
 * @param  {number} curr      current n-tuple
 * @param  {number} step = 0  current step in the sequence
 * @param  {object} prev = [] array of previous n-tuples joined as Strings
 * @return {undefined}        no return, function logs step number and n-tuples
 */
function ducci (curr, step = 0, prev = []) {
  console.log(`step ${step}: ${curr.join(', ')}`)
  if (curr.some(c => c > 0) && !prev.includes(curr.join(''))) {
    let next = curr.map((e, i) => Math.abs(e - curr[(i + 1) % curr.length]))
    ducci(next, ++step, [...prev, curr.join('')])
  }
}
