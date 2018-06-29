/**
 * Calculate the years to reach a future sum of money given a present value of
 * money, a yearly compounding interest rate, a yearly income tax rate, and the
 * desired future value.
 */

/**
 * golfed
 */
calculateYears=(p,r,t,f)=>{for(i=0;p<f;++i)p+=p*r*(1-t);return i}

/**
 * ungolfed
 * @param  {number} p     present value
 * @param  {number} r     interest rate
 * @param  {number} t     tax rate
 * @param  {number} f     future value
 * @return {number}       number of years for p to reach f
 */
calculateYears = (p, r, t, f) => {
  for (i = 0; p < f; ++i) {
    p += p * r * (1 - t) // p_next=p*(1+r)-((p*(1+r)-p)*t)
  }
  return i
}
