/**
 * Calculate the years to reach a future sum of money given a present value of
 * money, a yearly compounding interest rate, a yearly income tax rate, and the
 * desired future value.
 */

/**
 * golfed function
 */
c=(p,r,t,f)=>{for(i=0;p<f;++i)p+=p*r*(1-t);return i}

/**
 * ungolfed
 * @param   {number} p a present value
 * @param   {number} r an interest rate
 * @param   {number} t a tax rate
 * @param   {number} f a future value
 * @returns {number}   the number of years for p to reach f
 */
function calculateYears(p, r, t, f) {
  for (i = 0; p < f; i++) {
    p += p * r * (1 - t); // p_next=p*(1+r)-((p*(1+r)-p)*t)
  }
  return i;
}
