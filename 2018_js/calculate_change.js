/**
 * "A cashier starting with no change starts selling tickets $25 movie tickets
 * to people in a line. Each person has 25, 50, or 100 dollar bills. Given a
 * list of each person's bills, calculate whether or not the cashier has
 * enough change to give as each person pays"
 */

/**
 * golfed
 */
tickets=a=>{b=c=0;for(i of a){if(i==25)b++;else if(i==50)b--,c++;else{if(c)b--,c--;else b-=3;}if(b<0)return'NO'}return'YES'}

/**
 * ungolfed
 * @param  {number[]} a array of payments from each customer
 * @return {string}     'YES' if the cashier has enough change for each customer
 */
tickets = a => {
  b = c = 0
  for (i of a) {
    if (i == 25) {
      b++
    } else if (i == 50) {
      b--
      c++
    } else {
      if (c) {
        b--
        c--
      } else {
        b -= 3;
      }
    }
    if (b < 0) return 'NO'
  }
  return 'YES'
}
