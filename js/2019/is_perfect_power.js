/**
 * "In mathematics, a perfect power is a positive integer that can be expressed
 * as an integer power of another positive integer. More formally, n is a
 * perfect power if there exist natural numbers m > 1, and k > 1 such that
 * mk = n. Your task is to check wheter a given integer is a perfect power."
 */

/**
 * golfed
 */
f=n=>{for(m=2;m*m<=n;m++)for(k=2;m**k<=n;k++)if(m**k==n)return[m,k];return null}

/**
 * ungolfed
 * @param   {number}          n a number
 * @returns {(number[]|null)}   [m, k] if n is a perfect power, or else null
 */
function isPerfectPower(n) {
  for (let m = 2; m * m <= n; m++) {
    for (let k = 2; m ** k <= n; k++) {
      if (m ** k === n) return [m, k];
    }
  }
  return null;
}
