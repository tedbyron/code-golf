/**
 * @param   {number} a first number
 * @param   {number} b second number
 * @returns {number}   the greatest common divisor of a and b
 */
function gcd(a, b) {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}

/**
 * @param   {number} a first number
 * @param   {number} b second number
 * @returns {number}   the lowest common multiple of a and b
 */
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

/**
 * @param   {number[][]} arr an array of vulgar fractions in array form
 * @returns {number[][]}     the fractions of arr converted to a common denominator
 */
function convertFractions(arr) {

  let lcd = lcm(arr[0][1], arr[1][1]);

  for (let i = 2; i < arr.length; i++) {
    lcd = lcm(lcd, arr[i][1]);
  }

  arr.forEach((cur, idx) => {
    let fac = lcd / cur[1];
    cur[0] *= fac;
    cur[1] = lcd;
  });

  return arr;
}
