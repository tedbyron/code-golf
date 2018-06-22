/**
 * "Sum all positive numbers of an array; if the array is empty or contains
 * only negative numbers, return zero"
 */

/**
 * golfed
 */
s=n=>n.reduce((a,e)=>a+=e>0?e:0,0)

/**
 * ungolfed
 * @param  {number[]} n array of numbers
 * @return {number}   sum of positive numbers in n
 */
function sumPositives (n) {
  return n.reduce(function (a, e) {
    return a += e > 0 ? e : 0;
  }, 0);
};
