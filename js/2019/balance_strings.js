/**
 * "Each exclamation mark weight is 2; each question mark weight is 3. Put two
 * string left and right to the balance, are they balanced? If the left side is
 * more heavy, return 'Left'; If the right side is more heavy, return 'Right';
 * If they are balanced, return 'Balance'."
 */

/**
 * golfed function
 */
f=(a,b,[l,r]=[[...a],[...b]].map(c=>c.reduce((d,e)=>d+(e=='!'?2:3),0)))=>l^r?l>r?"Left":"Right":"Balance"

/**
 * ungolfed
 * @param   {string} a an input string
 * @param   {string} b an input string to compare with a
 * @returns {string}   which side has the heavier weighted characters
 */
function balance(a, b) {
  // destructure array into two weights
  [left, right] = [[...a], [...b]].map(cur => {
    // reduce arrays to their cumulative weighted values
    return cur.reduce((acc, cur) => {
      return acc + (cur === '!' ? 2 : 3);
    }, 0);
  });

  return left !== right
    ? left > right
      ? "Left"
      : "Right"
    : "Balance";
}
