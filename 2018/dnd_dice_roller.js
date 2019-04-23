/**
 * "Take a string input of the form 'NdM' and roll N M-sided dice with output
 * similar to '<SUM>: 1 5 8' for each roll of the dice"
 */

/**
 * golfed function
 */
f=a=>{[b,c,e=[]]=a.split('d').map(x=>+x);for(;b>0;)e[--b]=(Math.random()*c+1)|0;return`${e.reduce((x,y)=>x+y)}: ${e.join(' ')}`}

/**
 * ungolfed
 * @param   {string} a an input string
 * @returns {string}   the sum of rolls and a list of the rolls
 */
function dndRoll(a) {
  const [B, C] = a.split('d').map(x => parseInt(x));
  let e = [];

  for (let i = 0; i < B; i++) {
    e[i] = Math.floor(Math.random() * C + 1);
  }

  let sum = e.reduce((x, y) => x + y);
  return `${sum}: ${e.join(' ')}`;
}
