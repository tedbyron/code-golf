/**
 * "There is a queue for the self-checkout tills at the supermarket. Your task
 * is write a function to calculate the total time required for all the
 * customers to check out. The function parameters are an array representing
 * the time it will take each customer to check out and the number of checkout
 * tills."
 */

/**
 * golfed function
 */
f=(a,b)=>Math.max(...a.reduce((c,d)=>{c[c.indexOf(Math.min(...c))]+=d;return c},Array(b).fill(0)))

/**
 * ungolfed
 * @param   {number[]} customers times it will take each customer to check out
 * @param   {number}   n         the number of checkout tills
 * @returns {number}             the time required for all customers to checkout
 */
function queueTime(customers, n) {
  return Math.max(...customers.reduce((acc, cur) => {
    acc[acc.indexOf(Math.min(...acc))] += cur;
    return acc;
  }, Array(n).fill(0)));
}
