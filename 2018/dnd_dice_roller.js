/**
 * "Take a string input of the form 'NdM' and roll N M-sided dice with output
 * similar to '<SUM>: 1 5 8' for each roll of the dice"
 */

/**
 * golfed function
 */
f=a=>{[b,c,e=[]]=a.split('d').map(x=>+x);for(;b>0;)e[--b]=(Math.random()*c+1)|0;return`${e.reduce((x,y)=>x+y)}: ${e.join(' ')}`}

/**
 * rolls a Y sided dice X times
 * @param   {string} input a string in the format 'XdY'
 * @returns {string}       the sum of rolls and a list of the rolls
 */
function dndRoll(input) {
  const [TIMES, SIDES] = input.split('d').map(cur => parseInt(cur));
  const rolls = [];

  for (let i = 0; i < TIMES; i++) {
    rolls.push(Math.floor(Math.random() * SIDES + 1));
  }

  const SUM = rolls.reduce((acc, cur) => acc + cur);
  return `${SUM}: ${rolls.join(' ')}`;
}
