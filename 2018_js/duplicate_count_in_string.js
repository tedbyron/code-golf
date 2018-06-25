/**
 * "Given a string, count the number of letters that have duplicates, ignoring
 * capitalization."
 */

d=a=>(a.toLowerCase().split``.sort().join``.match(/(.)\1+/gi)||[]).length
