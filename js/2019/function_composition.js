/**
 * "Your task is to create a compose function which will be passed two
 * functions or lambdas. Functions will be passed, and should return, either a
 * proc or a lambda. Remember that the resulting composed function may be
 * passed multiple arguments!"
 */

/**
 * golfed function
 */
f=(a,b)=>(...c)=>a(b(...c))

/**
 * ungolfed
 * @param   {function} a a function to apply to b
 * @param   {function} b a function
 * @returns {function}   the composed function
 */
function compose(a, b) {
  /**
   * @param   {...*} c arguments to apply the composed function to
   * @returns {...*}   the result of the composed function applied to arguments
   */
  return function(...c) {
    return a(b(...c));
  }
}
