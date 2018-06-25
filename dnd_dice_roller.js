/**
 * "Take a string input of the form 'NdM' and roll N M-sided dice with output
 * similar to '<SUM>: 1 5 8' for each roll of the dice"
 */

/**
 * golfed
 */
d=a=>{[b,c,e=[]]=a.split('d').map(x=>parseInt(x));for(;b>0;)e[--b]=(Math.random()*c+1)|0;return`${e.reduce((x,y)=>x+y)}: ${e.join(' ')}`}

/**
 * ungolfed
 * @param  {String} a input string
 * @return {String}   sum of rolls and a list of the rolls
 */
const dndRoll = a => {
  const [b, c] = a.split('d').map(x => parseInt(x))
  let e = []

  for (let i = 0; i < b; i++) {
    e[i] = Math.floor(Math.random() * c) + 1
  }

  let sum = e.reduce((x, y) => x + y)
  return `${sum}: ${e.join(' ')}`
}
