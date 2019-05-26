/**
 * "Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters in the
 * same quantity. Only consider characters, not spaces or punctuation. Consider
 * capital letters to be the same as lower case."
 */

/**
 * golfed function
 */
a=(b,c,[d,e]=[b,c].map(f=>f.match(/[a-z]+/gi).join``.toLowerCase().split``.sort().join``))=>d==e

/**
 * ungolfed function
 * @param   {string}  stringA one of the two strings to compare
 * @param   {string}  stringB one of the two strings to compare
 * @returns {boolean}         true if the two strings are anagrams, else false
 */
function anagrams(stringA, stringB) {
  const getLettersInOrder = str => str.match(/[a-z]+/gi).join('').toLowerCase().split('').sort().join('');
  const arrayA = getLettersInOrder(stringA), arrayB = getLettersInOrder(stringB);

  return arrayA === arrayB;
}
