/**
 * "Implement the function unique_in_order which takes as argument a sequence
 * and returns a list of items without any elements with the same value next to
 * each other and preserving the original order of elements."
 */

/**
 * golfed function
 */
f=a=>[...a].filter((b,c)=>b!=a[c+1])

/**
 * ungolfed function
 *
 */
function uniqueInOrder(input) {
  return [...input].filter((cur, idx) => {
    return cur != input[idx+1];
  });
}
