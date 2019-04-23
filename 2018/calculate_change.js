/**
 * "A cashier starting with no change starts selling tickets $25 movie tickets
 * to people in a line. Each person has 25, 50, or 100 dollar bills. Given a
 * list of each person's bills, calculate whether or not the cashier has
 * enough change to give as each person pays. If the cashier can give change to
 * each person, return 'YES' or else return 'NO'"
 */

/**
 * golfed function
 */
t=a=>{b=c=0;for(i of a){if(i==25)b++;else if(i==50)b--,c++;else{if(c)b--,c--;else b-=3}if(b<0)return'NO'}return'YES'}

/**
 * ungolfed
 * @param   {number[]} a an array of single bills being paid to the cashier
 * @returns {string}     whether the cashier has enough change for each customer
 */
function tickets (a) {
  let b = c = 0;
  for (i of a) {
    if (i == 25) {
      b++;
    } else if (i == 50) {
      b--;
      c++;
    } else {
      if (c) {
        b--;
        c--;
      } else {
        b -= 3;
      }
    }

    if (b < 0) return 'NO';
  }
  return 'YES';
}
